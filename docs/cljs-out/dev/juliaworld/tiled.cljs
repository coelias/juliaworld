(ns juliaworld.tiled
  (:require [juliaworld.state :refer [add-config get-config save-sprites game get-config get-sprite get-app]]
            [juliaworld.helpers :refer [->num props->map getPixiTexture mylog]]
            [promesa.core :as p]
            [clojure.string :as s]))

(defn load-textures [m]
  (let [promises (flatten (map (fn [[k v]] [(p/promise k) (.load js/PIXI.Assets v)] ) m))]
    (-> (p/all promises)
        (p/then #(as-> % $
                   (apply hash-map $)
                   (update-vals $ (fn [v] (hash-map :sprite v)))
                   (save-sprites $))))))

(defn parse-game-resolution [scene]
  (let [{:keys [tilewidth tileheight layers]}
        scene
        {:keys [height width]} (first layers)]
    (add-config [:screen-res]
                [(* width tilewidth)
                 (* height tileheight)])
    (add-config [:tile-res] [tilewidth tileheight])
    (add-config [:screen-block-res] [width height])))

(defn merge-layers
  "Merges background layers into one for a given scene
  remember that background-1-l-N means that background 1 has N layers
  we want to merge those N layers"
  [layers]
  (->> (apply map (cons vector layers))
       (map #(filter (fn [x] (> x 0)) %))
       (mapv last)))

(defn- get-grid-texture []
  (let [[w h] (get-config [:tile-res])
        pr (js/PIXI.Graphics.)
        c (js/PIXI.Container.)]
    (.addChild c pr)
    (.moveTo pr 1 0)
    (.stroke
     (.lineTo pr w 0)
     (clj->js {:color 0xffffff :alpha 0.08}))
    (.moveTo pr 0 0)
    (.stroke
     (.lineTo pr 0 h)
     (clj->js {:color 0xffffff :alpha 0.08}))
    (-> (get-app)
        .-renderer
        (.generateTexture pr))))

(defn generate-sprite-containers [data-objs]
  (let [[xres yres] (get-config [:screen-res])
        [xtres ytres] (get-config [:tile-res])
        coords (for [y (range 0 yres ytres)
                     x (range 0 xres xtres)] [x y])
        container (js/PIXI.Container.)
        grid-container (js/PIXI.Container.)
        grid-texture (get-grid-texture)]
    (doseq [data data-objs
            [sid [x y]] (map vector data coords)]
      (when-let [s (get-sprite sid)]
        (set! (.-x s) x)
        (set! (.-y s) y)
        (.addChild container s)
        (let [sp (js/PIXI.Sprite. grid-texture)]
          (.addChild grid-container sp)
          (set! (.-x sp) x)
          (set! (.-y sp) y))))
    (set! (.-x container) 0)
    (set! (.-y container) 0)
    {:container container
     :grid-container grid-container
     :data (merge-layers data-objs)}))

(defn parse-background-layers [[_ layers]]
  (let [bg-layers (filter (fn [{:keys [name]}] (s/includes? name "background")) layers)
        layer-data (->> bg-layers
                        (map :data)
                        generate-sprite-containers)
        {:keys [herox heroy]} (-> bg-layers first :properties props->map)]

    (->
     layer-data
     (assoc :herox herox)
     (assoc :heroy heroy))))

(defn parse-layers [layers]
  (comment let [layers (mapv generate-sprite-containers layers)]
           (swap! game assoc-in [:layers] layers))
  (let [layer-groups
        (->> layers
             (group-by #(-> % :name (s/split #"-") second))
             (sort-by first))

        parsed-lgs (map parse-background-layers layer-groups)]
    (swap! game assoc-in [:layers] parsed-lgs)))


(defn parse-configs []
  (let [{:keys [layers] :as scene} (-> (get-config [:scenes]) (js->clj :keywordize-keys true))]
    (parse-game-resolution scene)
    (parse-layers layers)))

(defn spritesheet-data [image width height tilesize firstgid]
  (->> (for [y (range 0 height tilesize)
             x (range 0 width tilesize)]
         {:x x :y y :w tilesize :h tilesize})
       (map-indexed (fn [idx frame]
                      [(+ firstgid idx) {:frame frame
                                         :sourceSize {:w tilesize :h tilesize}
                                         :spriteSourceSize {:x 0 :y 0 :w tilesize :h tilesize}}]))
       (into {})
       (assoc {:animations {}
               :meta {:image image
                      :format "RGBA8888"
                      :scale 1
                      :size {:w width :h height}}}
              :frames)
       clj->js))

(defn tiles->animation-info [tileset firstgid]
  (let [anim-tiles (->> tileset (filter :animation))
        parse-item (fn [{:keys [animation properties]}]
                     (let [{:keys [ani-name basex basey]} (props->map properties)]
                       (vector
                        (keyword ani-name)
                        {:duration (-> animation first :duration (/ 1000))
                         :basex basex
                         :basey basey
                         :ids (map #(+ firstgid (:tileid %)) animation)}
                        )))]

    (into {} (map parse-item anim-tiles))))

(defn create-animations [ani-info textures]
  (update-vals ani-info
               (fn [{:keys [duration ids basex basey]}]
                 (let [sprite (->> ids
                                   (map str)
                                   (map #(get textures %))
                                   clj->js
                                   js/PIXI.AnimatedSprite.
                                   )]
                   (when (> duration 0)
                     (set! (.-animationSpeed sprite) 0.1))
                   {:sprite sprite :basex basex :basey basey}))))

(defn tileset->textures [{:keys [imagewidth imageheight image tileheight tiles firstgid]}]
  (p/let [data (spritesheet-data image imagewidth imageheight tileheight firstgid)
          animations (tiles->animation-info tiles firstgid)
          spritesheet (js/PIXI.Spritesheet. (getPixiTexture image) data)
          textures (.parse spritesheet)
          tiles (update-vals
                 (into {} (map #(vector (+ firstgid (:id %)) %) tiles))
                 #(update % :properties props->map))]
    (let [textures  (js->clj textures)]
      (swap! game assoc :animations (create-animations animations textures))
      (->> textures
           (map (fn [[id texture]]
                  (let [id (->num id)]
                    (vector id (merge {:sprite texture} (get tiles id))))))
           (into {}))
      )))

(defn load-scenes []
  (p/let [scenes (js/fetch "/stages.tmj")
          txt (.text scenes)]
    (->> txt
         js/JSON.parse
         (add-config [:scenes]))
    (-> (p/let [{:keys [width height layers tilesets]} (js->clj (get-config [:scenes]) :keywordize-keys true)
                _ (->> tilesets
                       (map (fn [{:keys [image name]}] [(keyword name) image]))
                       (into {})
                       load-textures)]
          (as-> tilesets $
            (mapv tileset->textures $)
            (p/all $)
            (p/then $ #(->> %
                            (apply merge)
                            (save-sprites)))))
        (p/then #(parse-configs)))))

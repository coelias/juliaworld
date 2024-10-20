(ns juliaworld.tiled
  (:require [juliaworld.state :refer [add-config get-config save-sprites game get-config get-sprite get-app]]
            [juliaworld.helpers :refer [->num props->map getPixiTexture mylog]]
            [juliaworld.validation :refer [validate jsType]]
            [promesa.core :as p]
            [clojure.string :as string]
            [schema.core :as s]))

(def tile-sch {:id s/Num
               (s/optional-key :properties) [{:name (s/enum "basex" "basey" "ani-name" "collision" "type")
                             :type s/Str
                             :value s/Any}]
               (s/optional-key :animation) [{:duration s/Num :tileid s/Num}]
               (s/optional-key :type) s/Str})

(def tileset-sch {:columns s/Num
                   :firstgid s/Num
                   :image s/Str
                   :imageheight s/Num
                   :imagewidth s/Num
                   :margin s/Num
                   :name s/Str
                   :tilecount s/Num
                   :tileheight s/Num
                   :tilewidth s/Num
                   :tiles [tile-sch]
                   :spacing s/Num
                   (s/optional-key :wangsets) s/Any})

(def textures-sch {(s/cond-pre s/Keyword s/Num)
                   {:sprite (jsType js/PIXI.Texture)
                    (s/optional-key :id) (s/maybe s/Num)
                    (s/optional-key :properties) {s/Keyword (s/cond-pre s/Num s/Str)}
                    (s/optional-key :type) s/Str
                    (s/optional-key :animation) [{:duration s/Num :tileid s/Num}]}})

(def ani-info-sch {s/Keyword {:duration s/Num
                              :basex (s/maybe s/Num)
                              :basey (s/maybe s/Num)
                              :ids [s/Num]}})

(def animation-sch {s/Keyword {:sprite (jsType js/PIXI.AnimatedSprite)
                               :basex s/Num
                               :basey s/Num}})

(def spritesheet-data-sch
  {:animations {}
   :meta {:image s/Str
          :format s/Str
          :scale s/Num
          :size {:w s/Num :h s/Num}}
   :frames {s/Num {:frame {:x s/Num :y s/Num :h s/Num :w s/Num}
                   :sourceSize {:h s/Num :w s/Num}
                   :spriteSourceSize {:x s/Num :y s/Num :h s/Num :w s/Num}}}})

(defn load-textures [m]
  (validate {s/Keyword s/Str} m)
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
  (let [bg-layers (filter (fn [{:keys [name]}] (string/includes? name "background")) layers)
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
             (group-by #(-> % :name (string/split #"-") second))
             (sort-by first))

        parsed-lgs (map parse-background-layers layer-groups)]
    (swap! game assoc-in [:layers] parsed-lgs)))


(defn parse-configs []
  (let [{:keys [layers] :as scene} (-> (get-config [:scenes]) (js->clj :keywordize-keys true))]
    (parse-game-resolution scene)
    (parse-layers layers)))

(defn jslog [x]
  (js/console.log x)
  x)

(defn spritesheet-data [image width height tilesize firstgid]
  (validate (mapv s/one [s/Str s/Num s/Num s/Num s/Num]) [image width height tilesize firstgid])

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
       (validate spritesheet-data-sch)
       clj->js))

(defn tiles->animation-info [tiles firstgid]
  (validate (mapv s/one [[tile-sch] s/Num]) [tiles firstgid])
  (let [anim-tiles (->> tiles (filter :animation))
        parse-item (fn [{:keys [animation properties]}]
                     (let [{:keys [ani-name basex basey]} (props->map properties)]
                       (vector
                        (keyword ani-name)
                        {:duration (-> animation first :duration (/ 1000))
                         :basex basex
                         :basey basey
                         :ids (map #(+ firstgid (:tileid %)) animation)})))]

    (validate ani-info-sch
              (into {} (map parse-item anim-tiles)))))

(defn create-animations [ani-info textures]
  (validate (mapv s/one [ani-info-sch {s/Str (jsType js/PIXI.Texture)}]) [ani-info textures])
  
   (update-vals ani-info
                (fn [{:keys [duration ids basex basey]}]
                  (let [sprite (->> ids
                                    (map str)
                                    (map #(get textures %))
                                    clj->js
                                    js/PIXI.AnimatedSprite.)]
                    (when (> duration 0)
                      (set! (.-animationSpeed sprite) 0.1))
                    {:sprite sprite :basex basex :basey basey}))))

(defn tileset->textures [{:keys [imagewidth imageheight image tileheight tiles firstgid] :as tset}]
  (validate tileset-sch tset)
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
           (into {})
           (validate textures-sch)))))

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
            (p/then $ #(some->> %
                            (apply merge)
                            (save-sprites)))))
        (p/then #(parse-configs)))))

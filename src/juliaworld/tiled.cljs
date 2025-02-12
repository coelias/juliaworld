(ns juliaworld.tiled
  (:require [juliaworld.state :refer [add-config get-config save-sprites game get-config get-sprite get-app sprite-info]]
            [juliaworld.helpers :refer [->num props->map getPixiTexture mylog]]
            [juliaworld.validation :refer [validate jsType]]
            [promesa.core :as p]
            [clojure.string :as string]
            [schema.core :as s]))

(def tile-sch {:id s/Num
               (s/optional-key :properties) [{:name (s/enum "basex" "basey" "ani-name" "collision" "type" "action" "ignore")
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
                    (s/optional-key :properties) {s/Keyword (s/cond-pre s/Num s/Any)}
                    (s/optional-key :type) s/Str
                    (s/optional-key :animation) [{:duration s/Num :tileid s/Num}]}})

(def ani-info-sch {s/Keyword {:duration s/Num
                              :basex (s/maybe s/Num)
                              :basey (s/maybe s/Num)
                              :ids [s/Num]}})

(def animation-sch {s/Keyword {:sprite (jsType js/PIXI.AnimatedSprite)
                               :basex s/Num
                               :basey s/Num}})

(def tiled-layers-sch
  {:id s/Num
   :name s/Str
   :opacity s/Num
   :type s/Str
   :visible s/Bool
   :x s/Num
   :y s/Num
   (s/optional-key :layers) s/Any
   (s/optional-key :properties) [{:name s/Str :type s/Str :value s/Any}]
   (s/optional-key :data) [s/Num]
   (s/optional-key :width) s/Num
   (s/optional-key :height) s/Num})

(def item-sprites-info
  {[s/Num] {:type s/Str
            :class s/Str
            :sprite (jsType js/PIXI.Sprite)
            :action [[s/Str]]
            :visible s/Bool
            (s/optional-key :init-hidden) s/Bool
            (s/optional-key :layer) s/Keyword}})

(def processed-layers-sch
  {s/Keyword
   {:id s/Num
    :opacity s/Num
    :type s/Str
    :visible s/Bool
    :x s/Num
    :y s/Num
    (s/optional-key :lowest-y) s/Num
    :deps [s/Keyword]
    (s/optional-key :parent) s/Keyword
    (s/optional-key :score) s/Int
    (s/optional-key :properties) {s/Keyword s/Any}
    (s/optional-key :data) [s/Num]
    (s/optional-key :container) (jsType js/PIXI.Container)
    (s/optional-key :items) item-sprites-info
    (s/optional-key :width) s/Num
    (s/optional-key :height) s/Num}})

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
  (let [{:keys [tilewidth tileheight height width]} scene]
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

(defn sprites-map->container [m]
  (let [cnt (js/PIXI.Container.)]
    (doseq [[_ {:keys [sprite]}] m]
      (.addChild cnt sprite))
    cnt))

(defn process-action [action]
  (map
   #(if (string/includes? % "[")
      (re-seq #"\w+" %)
      (list %))
   (string/split action #"\|")))

(defn sprites-map->info [m {:keys [hidden]}]
  (->>
   (filter identity
           (for [[c {{:keys [class action]} :info :keys [info sprite]}] m]
             (when (#{"item"} class)
               [c (merge info {:init-hidden (boolean hidden) :visible (not hidden) :sprite sprite :action (process-action action)})])))
   (into {})
   (validate item-sprites-info)))

(defn layer-data->coord-sprites-info [{:keys [data properties]}]
  (let [[xres yres] (get-config [:screen-res])
        [xtres ytres] (get-config [:tile-res])
        coords (for [y (range 0 yres ytres)
                     x (range 0 xres xtres)] [x y])
        sprites (filter identity
                        (for [[sid [x y]] (map vector data coords)]
                          (when-let [s (get-sprite sid)]
                            (set! (.-x s) x)
                            (set! (.-y s) y)
                            (when (:hidden properties)
                              (set! (.-visible s) false))
                            [[(/ x xtres) (/ y ytres)] {:sprite s :info (sprite-info sid)}])))]
    {:container (sprites-map->container sprites)
     :items (sprites-map->info sprites properties)}))

(defn lowest-y-position [{:keys [container] :as layer}]
  (let [[_ ytres] (get-config [:tile-res])
        lowest (-> container .-children last .-y (/ ytres))]
    (assoc layer :lowest-y lowest)))

(defn add-layer-deps [layers {:keys [name] :as layer}]
  (->> (tree-seq #(or (:parent %) (:layers %))
                 #(if (:parent %)
                    (cons ((:parent %) layers) (:layers %))
                    (:layers %))
                 layer)
       (filter #(and (= (:type %) "tilelayer") (not= (:name %) name)))
       (mapv (comp keyword :name))
       (assoc layer :deps)))

(defn layers->flat-map [l]
  (let [m (->> (tree-seq :layers :layers l)
               (filter :type)
               (map #(vector (-> % :name keyword) %))
               (into {}))]
    (-> m
        (update-vals #(add-layer-deps m %))
        (update-vals #(dissoc % :name))
        (update-vals #(dissoc % :layers)))))

(defn fix-layers-names [layer]
  (let [fix-layer-name-f (fn [{:keys [name] :as o}] (assoc o :name (str (:name layer) "-" name)))
        fix-names (fn [l] (if (= (:type l) "group")
                           (update l :layers #(map fix-layer-name-f %))
                           l))]
    (clojure.walk/prewalk fix-names layer)))

(defn parse-layers [layers]
  (validate [tiled-layers-sch] layers)
  (let [fix-props #(if (:properties %)
                     (update % :properties props->map) %)
        transform-data #(if (:data %)
                          (merge % (layer-data->coord-sprites-info %)) %)
        kwdz-parent #(if (get-in % [:properties :parent])
                       (assoc % :parent (-> % (get-in [:properties :parent]) keyword)) %)
        bottom-y #(if (:container %) (lowest-y-position %) %)
        tr-fn (comp bottom-y kwdz-parent transform-data fix-props)]

    (->> layers
         (clojure.walk/postwalk tr-fn)
         (map fix-layers-names)
         (hash-map :layers)
         layers->flat-map
         (validate processed-layers-sch)
         (swap! game assoc-in [:layers])
         :layers
         keys
         (map name)
         (filter #(re-matches #"level-[0-9]" %))
         count
         (add-config [:n-levels]))))

(defn parse-configs []
  (let [{:keys [layers] :as scene} (-> (get-config [:scenes]) (js->clj :keywordize-keys true))]
    (parse-game-resolution scene)
    (parse-layers layers)))

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
      (swap! game update :animations merge (create-animations animations textures))
      (->> textures
           (map (fn [[id texture]]
                  (let [id (->num id)]
                    (vector id (merge {:sprite texture} (get tiles id))))))
           (into {})
           (validate textures-sch)))))


(defn load-scenes []
  (p/let [scenes (js/fetch "stages.tmj")
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

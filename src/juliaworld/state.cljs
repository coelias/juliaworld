(ns juliaworld.state)

(defonce game (atom {:sprites {} :layers {} :app nil :config {}}))

(defn add-config [path v]
  (swap! game assoc-in (cons :config path) v))

(defn get-config
  ([path]
   (-> @game (get-in (cons :config path))))
  ([path default]
   (or (get-config path) default)))

(defn set-state [path value]
  (swap! game assoc-in (cons :state path) value))

(defn get-state [path]
  (-> @game (get-in (cons :state path))))

(defn save-sprites [x]
  (swap! game update-in [:sprites] merge x))

(defn get-texture [name]
  (-> @game :sprites (get name) :sprite))

(defn get-sprite [name]
  (some-> name
          get-texture
          js/PIXI.Sprite.))

(defn get-layer [id]
  (-> @game :layers id))

(defn hide-item [layer position]
  (let [path [:layers layer :items position]
        {:keys [sprite]} (get-in @game path)]
    (set! (.-visible sprite) false)
    (swap! game assoc-in (conj path :visible) false)))

(defn- unhide-items []
  (reset! game (clojure.walk/postwalk
                #(if (and (contains? % :visible) (contains? % :action))
                   (do
                     (set! (.-visible (:sprite %)) true)
                     (assoc % :visible true))
                   %)
                @game)))

(defn reset-state [scene-number herox heroy end-score]
  (unhide-items)
  (set-state [:score] 0)
  (set-state [:scene] scene-number)
  (set-state [:hero :pos] [herox heroy])
  (set-state [:final-score] end-score))

(defn level-cleared? []
  (let [{{:keys [score final-score]} :state} @game]
    (= score final-score)))

(defn inc-score []
  (swap! game update-in [:state :score] inc))

(defn get-animation [name]
  (-> @game :animations name))

(defn start-animation [name]
  (-> (get-animation name) :sprite .play))

(defn stop-animation [name]
  (-> (get-animation name) :sprite .stop))

(defn tile-props [n]
  (-> @game :sprites (get n) :properties))

(defn get-scene-layer []
  (let [s (get-state [:scene])]
    (-> @game :layers s)))

(defn get-level-number []
  (-> [:scene]
      get-state
      name
      (clojure.string/split "-")
      last
      js/parseInt))

(defn get-current-layers []
  (-> (get-scene-layer) :deps))

(defn sprite-info [id]
  (let [{:keys [type properties]} (-> @game :sprites (get id))]
    (assoc properties :class type)))

(defn get-app []
  (:app @game))

(defn xy-props [x y]
  (let [layers (:layers @game)
        deps (-> [:scene] get-state layers :deps )
        [xb yb] (get-config [:screen-block-res])
        pos (+ (* xb y) x)]

    (as-> layers $
      (map $ deps)
      (map :data $)
      (map #(nth % pos) $)
      (map tile-props $))))

(defn position->items [x y]
  (let [layers (-> @game :layers (select-keys (get-current-layers)))]
    (->> layers
         (map (fn [[ly-name {:keys [items]}]]
                (when items
                  (update-vals items #(merge % {:layer ly-name :position [x y]})))))
         (map #(get % [x y]))
         (filter map?)
         (filter :visible))))

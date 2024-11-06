(ns juliaworld.state)

(defonce game (atom {:sprites {} :layers {} :app nil :config {}}))

(defn add-config [path v]
  (swap! game assoc-in (cons :config path) v))

(defn get-config [path]
  (-> @game (get-in (cons :config path))))

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

(defn get-animation [name]
  (-> @game :animations name))

(defn start-animation [name]
  (-> (get-animation name) :sprite .play))

(defn stop-animation [name]
  (-> (get-animation name) :sprite .stop))

(defn tile-props [n]
  (-> @game :sprites (get n) :properties))

(defn get-app []
  (:app @game))

(defn xy-props [x y]
  (let [layers (:layers @game)
        deps (-> [:scene] get-state layers :deps )
        [xb yb] (get-config [:screen-block-res])
        pos (+ (* xb y) x)]
    (js/console.log [deps])

    (as-> layers $
      (map $ deps)
      (map :data $)
      (map #(nth % pos) $)
      (map tile-props $))))

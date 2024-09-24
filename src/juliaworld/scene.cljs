(ns juliaworld.scene
  (:require [juliaworld.state :as st]
            [juliaworld.hero :as hr]
            [pixi]
            ))

(defn draw-layer [layer]
  (let [stage (-> (st/get-app)
                  .-stage)
        resize (st/get-config [:screen-resize])]
    (-> stage
        (.addChild (:container layer))
        (.addChild (:grid-container layer)))

    (-> stage
        .-scale
        .-x
        (set! resize))
    (-> stage
        .-scale
        .-y
        (set! resize))))

(defn load-scene [n]
  (let [{:keys [container herox heroy] :as l} (st/get-layer n)
        stage (.-stage (st/get-app))]
    (st/set-state [:scene] 1)
    (st/set-state [:hero :pos] [herox heroy])
    (.removeChildren stage)
    (draw-layer l)
    (st/set-state [:hero :current] :idle-down)
    (hr/show-hero)))

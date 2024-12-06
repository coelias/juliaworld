(ns juliaworld.scene
  (:require [juliaworld.state :as st]
            [juliaworld.hero :as hr]
            [juliaworld.state :refer [get-config get-app]]
            [juliaworld.helpers :refer [load-saved-code]]
            [pixi]
            ))

(defn get-grid-texture []
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

(def grid-container
  (delay
    (let [gt (get-grid-texture)
          [xres yres] (get-config [:screen-res])
          [xtres ytres] (get-config [:tile-res])
          coords (for [y (range 0 yres ytres)
                       x (range 0 xres xtres)] [x y])
          cnt (js/PIXI.Container.)]
      (doseq [[x y] coords]
        (let [sp (js/PIXI.Sprite. gt)]
          (.addChild cnt sp)
          (set! (.-x sp) x)
          (set! (.-y sp) y)))
      cnt)))

(defn draw-layer [{:keys [deps]}]
  (let [stage (-> (st/get-app)
                  .-stage)
        resize (st/get-config [:screen-resize])]

    (doseq [layer-name deps]
      (let [l (-> layer-name st/get-layer :container)]
        (.addChild stage l)))

    (.addChild stage @grid-container)

    (-> stage
        .-scale
        .-x
        (set! resize))
    (-> stage
        .-scale
        .-y
        (set! resize))))

(defn load-scene [n]
  (let [{{:keys [herox heroy description score]} :properties :as l} (st/get-layer n)
        stage (.-stage (st/get-app))]
    (st/reset-state n herox heroy score)
    (.removeChildren stage)
    (draw-layer l)
    (st/set-state [:hero :current] :idle-down)
    (hr/show-hero)
    (-> (.getElementById js/document "description")
        .-innerHTML
        (set! description))
    nil))

(defn set-level [level]
  (load-scene level)
  (load-saved-code))

(defn check-scores []
  (if (st/level-cleared?)
    (-> (st/get-app)
        .-stage
        (.addChild (-> :levelcleared st/get-layer :container)))))



(ns juliaworld.scene
  (:require [juliaworld.state :as st]
            [juliaworld.tiled :as tl]
            [juliaworld.state :refer [add-config get-config game get-app get-state set-state get-sprite get-layer reset-state level-cleared? randomize-jewels]]
            [promesa.core :as p]
            [juliaworld.hero :as hr]
            [juliaworld.state :refer [get-config get-app get-level-number]]
            [juliaworld.helpers :refer [load-saved-code get-completed-levels update-progress]]
            [juliaworld.sound :refer [playsong load-audios]]
            [klipse.run.plugin.plugin]
            [klipse.plugin :as klipse-plugin]
            [pixi]
            ))

;; generates the texture that will overlay the whole scene, so
;; coordinates and distances can be measured visually in tiles
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
  (let [stage (-> (get-app)
                  .-stage)
        resize (get-config [:screen-resize])]

    (doseq [layer-name deps]
      (let [l (-> layer-name get-layer :container)]
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
  (let [{{:keys [herox heroy description score]} :properties :as l} (get-layer n)
        stage (.-stage (get-app))]
    (reset-state n herox heroy score)
    (.removeChildren stage)
    (draw-layer l)
    (set-state [:hero :current] :idle-down)
    (hr/show-hero)
    (-> (.getElementById js/document "description")
        .-innerHTML
        (set! description))
    nil))

(defn reload-scene []
  (load-scene (get-state [:scene]))
  (randomize-jewels))

(defn set-level [level]
  (load-scene level)
  (load-saved-code))

(defn check-scores []
  (when (level-cleared?)
    (-> (get-app)
        .-stage
        (.addChild (-> :levelcleared get-layer :container)))
    (update-progress (get-level-number))))

(defn clear-div [id]
  (let [ga (-> id
               (js/document.getElementById))]
    (loop [c (.-firstChild ga)]
      (when c
        (do
          (.removeChild ga c)
          (recur (.-firstChild ga)))))))

(defn hide-div [id]
  (let [ga (-> id
               (js/document.getElementById))]
    (-> ga
        .-style
        .-display
        (set! "none"))
    (-> ga
        .-style
        .-pointerEvents
        (set! "none"))))

(defn show-div [id]
  (let [ga (-> id
               (js/document.getElementById))]
    (-> ga
        .-style
        .-display
        (set! ""))
    (-> ga
        .-style
        .-pointerEvents
        (set! ""))))

(defn HTMLButton [text handler]
  (let [button (js/document.createElement "button")]
    (set! (.-innerHTML button) text)
    (set! (.-onclick button) handler)
    button))

(defn HTMLdiv [text]
  (let [div (js/document.createElement "div")]
    (set! (.-innerHTML div) text)
    div))

(declare create-menu)

(defn create-app [div & {:keys [options resize]}]
  (-> "codeeditor"
      js/document.getElementById
      (.prepend (HTMLButton "Back to menu" #(create-menu))))

  (p/let [_ (tl/load-scenes)
          [x y] (get-config [:screen-res])
          element (.getElementById js/document div)
          app (js/PIXI.Application. (clj->js {"resizeTo" element}))]
    (add-config [:screen-resize] resize)
    (p/let [_ (.init app (clj->js (merge {:width (-> x (* resize) int)
                                          :height (-> y (* resize) int)} options)))]
      (.appendChild
       element
       (.-canvas app))
      (load-audios))

    (swap! game assoc :app app)
    (playsong)))

(defn load-level [level]
  (clear-div "menu")
  (show-div "codeeditor")
  (if (nil? (get-app))
    (do
      (p/let [_ (create-app "mypixi" :options {:background "#ff0000"} :resize 1.5)]
        (->> level (str "level-") keyword set-level))
      (klipse-plugin/init #js {:selector ".language-klipse"
                               :selector_reagent ".language-reagent"
                               :eval_idle_msec 999999999
                               :codemirror_options_in {:lineNumbers true}}))
    (->> level (str "level-") keyword set-level)))


(defn create-menu []
  (let [levels (get-completed-levels)
        m (-> "menu" (js/document.getElementById))]
    (clear-div "menu")
    (hide-div "codeeditor")
    (.appendChild m (HTMLdiv "Welcome to juliaworld!"))
    (dotimes [n levels]
      (.appendChild m (HTMLButton (str "level " (inc n)) #(load-level (inc n)))))))

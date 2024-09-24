(ns juliaworld.main
  (:require [pixi]
             [promesa.core :as p]
             [clojure.string :as s]
             [klipse.run.plugin.plugin]
             [klipse.plugin :as klipse-plugin]
             [juliaworld.state :refer [add-config get-config game get-app get-animation get-state set-state get-sprite]]
             [juliaworld.tiled :as tl]
             [juliaworld.helpers :as hp]
             [juliaworld.hero :refer [set-hero-pos]]
             [juliaworld.scene :as sc]
             ))

(defn create-app [div & {:keys [options resize]}]
  (p/let [_ (tl/load-scenes)
          [x y] (get-config [:screen-res])
          element (.getElementById js/document div)
          app (js/PIXI.Application. (clj->js {"resizeTo" element}))]
    (add-config [:screen-resize] resize)
    (p/let [_ (.init app (clj->js (merge {:width (-> x (* resize) int)
                                          :height (-> y (* resize) int)} options)))]
      (.appendChild
       element
       (.-canvas app)))
    (swap! game assoc :app app)))

(p/let [_ (create-app "mypixi" :options {:background "#ff0000"} :resize 1.5)]
  (sc/load-scene 1))

(klipse-plugin/init #js {:selector ".language-klipse"
                                :selector_reagent ".language-reagent"
                                :eval_idle_msec 999999999
                                :codemirror_options_in {:lineNumbers true}})

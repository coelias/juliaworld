(ns juliaworld.helpers
  (:require [juliaworld.state :refer [get-config get-animation]])
  )


(defn mylog [x]
  (cljs.pprint/pprint x)
  x)

(defn props->map [props]
  (into {} (map #(vector (-> % :name keyword) (:value %)) props )))

(defn getPixiTexture [name]
  (.from js/PIXI.Texture name))

(defn ->num [n]
  (case (js/isNaN n)
    true n
    false (js/Number n)))

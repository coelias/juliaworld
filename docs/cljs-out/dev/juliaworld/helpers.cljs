(ns juliaworld.helpers
  (:require [juliaworld.state :refer [get-config get-animation get-state get-layer]]))

(defn mylog [x]
  (js/console.log x)
  x)

(defn props->map [props]
  (into {} (map #(vector (-> % :name keyword) (:value %)) props )))

(defn getPixiTexture [name]
  (.from js/PIXI.Texture name))

(defn ->num [n]
  (case (js/isNaN n)
    true n
    false (js/Number n)))

(defn store-property [path value]
  (let [stored-data (-> "juliaworld"
                        js/localStorage.getItem
                        cljs.reader/read-string)]
    (as-> stored-data $
      (assoc-in $ path value)
      (prn-str $)
      (js/localStorage.setItem "juliaworld" $))))

(defn get-stored-property [path]
  (-> "juliaworld"
      js/localStorage.getItem
      cljs.reader/read-string
      (get-in path)))

(defn get-completed-levels []
  (or (get-stored-property [:progress]) 1))

(defn update-progress [level]
  (let [newprogress (max (inc level) (get-completed-levels))
        total-levels (get-config [:n-levels])]
    (store-property [:progress] 
                    (min total-levels newprogress))))

(defn save-editor-contents []
  (let [level (get-state [:scene])
        code (-> ".CodeMirror" js/document.querySelector .-CodeMirror .getValue)]
    (if (not (empty? code))
      (store-property [:code level] code))))

(defn get-scene-code []
  (let [level (get-state [:scene])]
    (-> level get-layer :properties :code)))


(defn load-saved-code []
  (let [level (get-state [:scene])
        code (or (get-stored-property [:code level]) (get-scene-code))]
      (-> ".CodeMirror"
          js/document.querySelector
          .-CodeMirror
          (.setValue (if (empty? code)
                       "(juliaworld.m/code\n;; vvv - Write here your code - vvv\n\n\n)"
                       code)))))

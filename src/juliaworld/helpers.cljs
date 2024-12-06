(ns juliaworld.helpers
  (:require [juliaworld.state :refer [get-config get-animation get-state]]))

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

(defn save-editor-contents []
  (let [level (get-state [:scene])
        code (-> ".CodeMirror" js/document.querySelector .-CodeMirror .getValue)]
    (if (not (empty? code))
      (store-property [:code level] code))))


(defn load-saved-code []
  (let [level (get-state [:scene])
        code (get-stored-property [:code level])]
    (when code
      (-> ".CodeMirror"
          js/document.querySelector
          .-CodeMirror
          (.setValue (if (empty? code)
                       "(juliaworld.m/code
                        ;; vvv - Write here your code - vvv


                        )"
                       code
                       ))))))


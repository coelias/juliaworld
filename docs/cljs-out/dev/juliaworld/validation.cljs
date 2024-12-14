(ns juliaworld.validation
  (:require
   [clojure.string :as string]
   [schema.core :as s]))

(defn validate [definition input]
  (try (s/validate definition input)
       (catch js/Error e
         (js/console.log "VALIDATION ERROR" "\n"
                         (with-out-str (cljs.pprint/pprint (.-data e))) "\n"
                         (as-> (.-stack e) $
                           (string/split $ #"\n")
                           (filter #(string/includes? % "juliaworld") $)
                           (string/join "\n" $))))))

(defn jsType [t]
  (s/pred #(instance? t %) (symbol (.-name t))))

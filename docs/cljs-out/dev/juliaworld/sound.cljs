(ns juliaworld.sound
  (:require [pixisound]))

(defonce legacy (set! (.-useLegacy js/PIXI.sound) true))

(def audio-files
  {:pick "audio/pick.mp3"
   :song "audio/song.mp3"})

(defn load-audios []
  (doseq [[k path] audio-files]
    (.add js/PIXI.sound (name k) path)))

(defn play [k]
  (.play js/PIXI.sound (name k)))

(defn playsong []
  (js/PIXI.sound.Sound.from
   #js {:url "audio/song.mp3"
        :autoPlay true
        :complete #(playsong)}))

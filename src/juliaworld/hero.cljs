(ns juliaworld.hero
  (:require [juliaworld.state :as st]
            [juliaworld.sound :as snd]
            [cljs.core.async :refer [chan >! <! go]]))

(defmulti process-item-action (comp first first :action))

(defmethod process-item-action "play" [{:keys [action]}]
  (-> action
      first
      second
      keyword
      snd/play))

(defmethod process-item-action "remove" [{:keys [sprite]}]
  (set! (.-visible sprite) false))

(defn calculate-hero-z [heroy layers]
  (loop  [[f & r] layers pos 0]
    (if f
      (let [{:keys [lowest-y] {:keys [z-index]} :properties} (st/get-layer f)]
        (cond
          (not z-index) (recur r (inc pos))
          (>= heroy lowest-y) (recur r (inc pos))
          :default (recur r pos)))
      pos)))


(defn hero-coords [x y name]
  (let [[tilew tileh] (st/get-config [:tile-res])
        {:keys [basex basey]} (st/get-animation name)
        [x y] [(- (* (+ .5 x) tilew) basex) (- (* (+ .5 y) tileh) basey)]]
    [x y]))

(defn set-hero-pos [x y name]
  (let [[x y] (hero-coords x y name)
        sprite (:sprite (st/get-animation name))]
    (set! (.-x sprite) x)
    (set! (.-y sprite) y)))

(-> (st/get-layer :level-1-diamonds) :properties)

(defn remove-hero []
  (let [current (st/get-state [:hero :current])
        sprite (-> current
            (st/get-animation)
            :sprite)]
    (st/stop-animation current)
    (-> (st/get-app) .-stage (.removeChild sprite))))

(defn show-hero []
   (let [current (st/get-state [:hero :current])
         hero (:sprite  (st/get-animation current))
         [x y] (st/get-state [:hero :pos])
         new-z (calculate-hero-z y (st/get-current-layers))]
     (.addChildAt (.-stage (st/get-app)) hero new-z)
     (set-hero-pos x y current)
     (st/start-animation current)))

(defn turn-right []
  (let [next (case (st/get-state [:hero :current])
               :idle-down :idle-left
               :idle-left :idle-up
               :idle-up :idle-right
               :idle-right :idle-down)
        _ch (chan)]
    (go
      (remove-hero)
      (st/set-state [:hero :current] next)
      (show-hero)
      (js/setTimeout
       #(go
          (>! _ch :turn-right)) 500))
    _ch))

(defn turn-left []
  (let [next (case (st/get-state [:hero :current])
               :idle-down :idle-right
               :idle-left :idle-down
               :idle-up :idle-left
               :idle-right :idle-up)
        _ch (chan)]
    (go
      (remove-hero)
      (st/set-state [:hero :current] next)
      (show-hero)
      (js/setTimeout
       #(go
          (>! _ch :turn-left)) 500))
    _ch))

(defn get-forward-coords [current]
  (let [[x y] (st/get-state [:hero :pos])
        [nx ny] (case current
                  :idle-up [x (dec y)]
                  :idle-down [x (inc y)]
                  :idle-left [(dec x) y]
                  :idle-right [(inc x) y])]
    [nx ny]))

(defn calculate-delta [orig dest speed]
  (let [delta (- orig dest)]
    (cond
      (> delta 1) (- speed)
      (< delta -1) speed
      :else 0)))

(defn move-hero [[x y] current speed]
  (let [[finalx finaly] (hero-coords x y current)
        finished (chan)
        sp (:sprite (st/get-animation current))
        xorig (.-x sp)
        yorig (.-y sp)
        dx (calculate-delta xorig finalx speed)
        dy (calculate-delta yorig finaly speed)
        fn (fn movement []
             (let [cx (.-x sp)
                   cy (.-y sp)
                   [nx ny] (map + [cx cy] [dx dy])]
               (if (= [cx cy] [finalx finaly])
                 (go
                   (>! finished :finished)
                   (-> (st/get-app) .-ticker (.remove movement)))
                 (do
                   (set! (.-x sp) nx)
                   (set! (.-y sp) ny)))))]
    (-> (st/get-app) .-ticker (.add fn))
    finished))

(defn process-item-actions [item]
  (loop [i item]
    (let [{:keys [action]} i]
      (when (not-empty action)
        (process-item-action i)
        (recur (update i :action rest))))))

(defn post-arrival-actions [nx ny]
  (when-let [items (seq (st/position->items nx ny))]
    (doseq [i items]
      (process-item-actions i))))

(defn forward []
  (let [current (st/get-state [:hero :current])
        next (case current
               :idle-down :run-down
               :idle-left :run-left
               :idle-up :run-up
               :idle-right :run-right)
        [nx ny] (get-forward-coords current)
        collision (some identity (map :collision (st/xy-props nx ny)))
        f1 (chan)]
    (go
      (when-not collision
        (remove-hero)
        (st/set-state [:hero :current] next)
        (show-hero)
        (st/start-animation next)
        (<! (move-hero [nx ny] next 0.5))
        (st/stop-animation next)
        (remove-hero)
        (st/set-state [:hero :pos] [nx ny])
        (st/set-state [:hero :current] current)
        (show-hero)
        (post-arrival-actions nx ny))
      (js/setTimeout
       #(go
          (>! f1 :forward)) 100))
    f1))

(defn check []
  (let [current (st/get-state [:hero :current])
        [nx ny] (get-forward-coords current)]
    (->> (st/xy-props nx ny)
         (map :type)
         (filter some?)
         last)))

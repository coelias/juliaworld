(defproject example-project "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.11.3"]
                 [org.clojure/clojurescript "1.11.54"]
                 [funcool/promesa "11.0.678"]
				 [prismatic/schema "1.4.1"]
				 [viebel/klipse "7.11.4"]
				 [binaryage/devtools "1.0.7"]
				 ]
  :profiles
    {:dev
      {:dependencies [
                      [com.bhauman/figwheel-main "0.2.18"]
                      ;; optional but recommended
                      [com.bhauman/rebel-readline-cljs "0.1.4"]
					  [cider/piggieback "0.5.3"]
					  ]
       :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}
       :resource-paths ["target"]
       :clean-targets ^{:protect false} ["target"]}}
  :aliases {"fig" ["trampoline" "run" "-m" "figwheel.main"]})

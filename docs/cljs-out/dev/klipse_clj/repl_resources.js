// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse_clj.repl_resources');
goog.require('cljs.core');
klipse_clj.repl_resources.special_doc_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"throw","throw",595905694,null),new cljs.core.Symbol(null,"def","def",597100991,null)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"expr*","expr*",1589098295,null),new cljs.core.Symbol(null,"catch-clause*","catch-clause*",-964586959,null),new cljs.core.Symbol(null,"finally-clause?","finally-clause?",1528454240,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"catch-clause => (catch classname name expr*)\n  finally-clause => (finally expr*)\n  Catches and handles JavaScript exceptions."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"exprs*","exprs*",-655728998,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Evaluates the expressions in order and returns the value of\n  the last. If no expressions are supplied, returns nil."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"test","test",-2076896892,null),new cljs.core.Symbol(null,"then","then",2101129597,null),new cljs.core.Symbol(null,"else?","else?",1919791169,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Evaluates test. If not the singular values nil or false,\n  evaluates and yields then, otherwise, evaluates and yields else. If\n  else is not supplied it defaults to nil."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"Constructor.","Constructor.",-1235287741,null),new cljs.core.Symbol(null,"args*","args*",-422966086,null)),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol(null,"Constructor","Constructor",568976268,null),new cljs.core.Symbol(null,"args*","args*",-422966086,null))], null),new cljs.core.Keyword(null,"url","url",276297046),"java_interop#new",new cljs.core.Keyword(null,"doc","doc",1913296891),"The args, if any, are evaluated from left to right, and\n  passed to the JavaScript constructor. The constructed object is\n  returned."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"docstring?","docstring?",-180217883,null),new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),new cljs.core.Symbol(null,"references*","references*",-66310813,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"You must currently use the ns form only with the following caveats\n\n    * You must use the :only form of :use\n    * :require supports :as, :refer, and :rename\n      - all options can be skipped\n      - in this case a symbol can be used as a libspec directly\n        - that is, (:require lib.foo) and (:require [lib.foo]) are both\n          supported and mean the same thing\n      - :rename specifies a map from referred var names to different\n        symbols (and can be used to prevent clashes)\n      - prefix lists are not supported\n    * The only options for :refer-clojure are :exclude and :rename\n    * :import is available for importing Google Closure classes\n      - ClojureScript types and records should be brought in with :use\n        or :require :refer, not :import ed\n    * Macros must be defined in a different compilation stage than the one\n      from where they are consumed. One way to achieve this is to define\n      them in one namespace and use them from another. They are referenced\n      via the :require-macros / :use-macros options to ns\n      - :require-macros and :use-macros support the same forms that\n        :require and :use do\n\n  Implicit macro loading: If a namespace is required or used, and that\n  namespace itself requires or uses macros from its own namespace, then\n  the macros will be implicitly required or used using the same\n  specifications. Furthermore, in this case, macro vars may be included\n  in a :refer or :only spec. This oftentimes leads to simplified library\n  usage, such that the consuming namespace need not be concerned about\n  explicitly distinguishing between whether certain vars are functions\n  or macros. For example:\n\n  (ns testme.core (:require [cljs.test :as test :refer [test-var deftest]]))\n\n  will result in test/is resolving properly, along with the test-var\n  function and the deftest macro being available unqualified.\n\n  Inline macro specification: As a convenience, :require can be given\n  either :include-macros true or :refer-macros [syms...]. Both desugar\n  into forms which explicitly load the matching Clojure file containing\n  macros. (This works independently of whether the namespace being\n  required internally requires or uses its own macros.) For example:\n\n  (ns testme.core\n  (:require [foo.core :as foo :refer [foo-fn] :include-macros true]\n            [woz.core :as woz :refer [woz-fn] :refer-macros [app jx]]))\n\n  is sugar for\n\n  (ns testme.core\n  (:require [foo.core :as foo :refer [foo-fn]]\n            [woz.core :as woz :refer [woz-fn]])\n  (:require-macros [foo.core :as foo]\n                   [woz.core :as woz :refer [app jx]]))\n\n  Auto-aliasing clojure namespaces: If a non-existing clojure.* namespace\n  is required or used and a matching cljs.* namespace exists, the cljs.*\n  namespace will be loaded and an alias will be automatically established\n  from the clojure.* namespace to the cljs.* namespace. For example:\n\n  (ns testme.core (:require [clojure.test]))\n\n  will be automatically converted to\n\n  (ns testme.core (:require [cljs.test :as clojure.test]))"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"exprs*","exprs*",-655728998,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Evaluates the exprs in order, then, in parallel, rebinds\n  the bindings of the recursion point to the values of the exprs.\n  Execution then jumps back to the recursion point, a loop or fn method."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"var-symbol","var-symbol",-1433547785,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null)),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),cljs.core.list(new cljs.core.Symbol(null,".-",".-",-1911493695,null),new cljs.core.Symbol(null,"instance-expr","instance-expr",-511471609,null),new cljs.core.Symbol(null,"instanceFieldName-symbol","instanceFieldName-symbol",866178706,null)),new cljs.core.Symbol(null,"expr","expr",-1908713478,null))], null),new cljs.core.Keyword(null,"url","url",276297046),"vars#set",new cljs.core.Keyword(null,"doc","doc",1913296891),"Used to set vars and JavaScript object fields"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,".instanceMethod",".instanceMethod",1947849091,null),new cljs.core.Symbol(null,"instance","instance",-480817523,null),new cljs.core.Symbol(null,"args*","args*",-422966086,null)),cljs.core.list(new cljs.core.Symbol(null,".-instanceField",".-instanceField",-615422244,null),new cljs.core.Symbol(null,"instance","instance",-480817523,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"The instance member form works for methods and fields.\n  They all expand into calls to the dot operator at macroexpansion time."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"symbol","symbol",601958831,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"The symbol must resolve to a var, and the Var object\nitself (not its value) is returned. The reader macro #'x expands to (var x)."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"form","form",16469056,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Yields the unevaluated form."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"The expr is evaluated and thrown."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"symbol","symbol",601958831,null),new cljs.core.Symbol(null,"doc-string?","doc-string?",393166599,null),new cljs.core.Symbol(null,"init?","init?",2078713026,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and interns a global var with the name\n  of symbol in the current namespace (*ns*) or locates such a var if\n  it already exists.  If init is supplied, it is evaluated, and the\n  root binding of the var is set to the resulting value.  If init is\n  not supplied, the root binding of the var is unaffected."], null)]);
klipse_clj.repl_resources.repl_special_doc_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Sets *cljs-ns* to the namespace named by the symbol, creating it if needed."], null),new cljs.core.Symbol(null,"load-file","load-file",1215944857,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Sequentially read and evaluate the set of forms contained in the file."], null),new cljs.core.Symbol(null,"load","load",321890343,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"paths","paths",-166858061,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Loads Clojure code from resources in classpath. A path is interpreted as\n  classpath-relative if it begins with a slash or relative to the root\n  directory for the current namespace otherwise."], null)], null);

//# sourceMappingURL=repl_resources.js.map

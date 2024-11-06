// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.server_eval');
goog.require('cljs.core');
goog.require('klipse.lang.replit');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
if(cljs.core.truth_((function (){var obj24001 = window;
var k24002 = "ReplitClient";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24001,k24002)){
return (obj24001[k24002]);
} else {
return null;
}
})())){
klipse.lang.server_eval.min_eval_idle_msec = (3000);

klipse.lang.server_eval.python = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_python",new cljs.core.Keyword(null,"name","name",1843675177),"eval-python",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"python",new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"python3",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false], null)], null);

klipse.lang.server_eval.csharp = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_csharp",new cljs.core.Keyword(null,"name","name",1843675177),"eval-csharp",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-csharp",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-csharp",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clike")], null),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"csharp",new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null)], null);

klipse.lang.server_eval.go = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_go",new cljs.core.Keyword(null,"name","name",1843675177),"eval-go",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"go",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"go",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"go")], null),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"go",new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null)], null);

var seq__24003_24011 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.lang.server_eval.python,klipse.lang.server_eval.csharp,klipse.lang.server_eval.go], null));
var chunk__24004_24012 = null;
var count__24005_24013 = (0);
var i__24006_24014 = (0);
while(true){
if((i__24006_24014 < count__24005_24013)){
var map__24009_24015 = cljs.core._nth.call(null,chunk__24004_24012,i__24006_24014);
var map__24009_24016__$1 = cljs.core.__destructure_map.call(null,map__24009_24015);
var selector_24017 = cljs.core.get.call(null,map__24009_24016__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var name_24018 = cljs.core.get.call(null,map__24009_24016__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opts_24019 = cljs.core.get.call(null,map__24009_24016__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var enriched_opts_24020 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts_24019,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.replit.connect_and_evaluate,new cljs.core.Keyword(null,"replit-language","replit-language",-941391192).cljs$core$IFn$_invoke$arity$1(opts_24019))),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192)),new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),klipse.lang.server_eval.min_eval_idle_msec);
klipse.common.registry.register_mode.call(null,name_24018,selector_24017,enriched_opts_24020);


var G__24021 = seq__24003_24011;
var G__24022 = chunk__24004_24012;
var G__24023 = count__24005_24013;
var G__24024 = (i__24006_24014 + (1));
seq__24003_24011 = G__24021;
chunk__24004_24012 = G__24022;
count__24005_24013 = G__24023;
i__24006_24014 = G__24024;
continue;
} else {
var temp__5804__auto___24025 = cljs.core.seq.call(null,seq__24003_24011);
if(temp__5804__auto___24025){
var seq__24003_24026__$1 = temp__5804__auto___24025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24003_24026__$1)){
var c__5565__auto___24027 = cljs.core.chunk_first.call(null,seq__24003_24026__$1);
var G__24028 = cljs.core.chunk_rest.call(null,seq__24003_24026__$1);
var G__24029 = c__5565__auto___24027;
var G__24030 = cljs.core.count.call(null,c__5565__auto___24027);
var G__24031 = (0);
seq__24003_24011 = G__24028;
chunk__24004_24012 = G__24029;
count__24005_24013 = G__24030;
i__24006_24014 = G__24031;
continue;
} else {
var map__24010_24032 = cljs.core.first.call(null,seq__24003_24026__$1);
var map__24010_24033__$1 = cljs.core.__destructure_map.call(null,map__24010_24032);
var selector_24034 = cljs.core.get.call(null,map__24010_24033__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var name_24035 = cljs.core.get.call(null,map__24010_24033__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opts_24036 = cljs.core.get.call(null,map__24010_24033__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var enriched_opts_24037 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts_24036,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.replit.connect_and_evaluate,new cljs.core.Keyword(null,"replit-language","replit-language",-941391192).cljs$core$IFn$_invoke$arity$1(opts_24036))),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192)),new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),klipse.lang.server_eval.min_eval_idle_msec);
klipse.common.registry.register_mode.call(null,name_24035,selector_24034,enriched_opts_24037);


var G__24038 = cljs.core.next.call(null,seq__24003_24026__$1);
var G__24039 = null;
var G__24040 = (0);
var G__24041 = (0);
seq__24003_24011 = G__24038;
chunk__24004_24012 = G__24039;
count__24005_24013 = G__24040;
i__24006_24014 = G__24041;
continue;
}
} else {
}
}
break;
}
} else {
}

//# sourceMappingURL=server_eval.js.map

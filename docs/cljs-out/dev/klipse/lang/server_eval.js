// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.server_eval');
goog.require('cljs.core');
goog.require('klipse.lang.replit');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
if(cljs.core.truth_((function (){var obj30089 = window;
var k30090 = "ReplitClient";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30089,k30090)){
return (obj30089[k30090]);
} else {
return null;
}
})())){
klipse.lang.server_eval.min_eval_idle_msec = (3000);

klipse.lang.server_eval.python = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_python",new cljs.core.Keyword(null,"name","name",1843675177),"eval-python",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"python",new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"python3",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false], null)], null);

klipse.lang.server_eval.csharp = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_csharp",new cljs.core.Keyword(null,"name","name",1843675177),"eval-csharp",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-csharp",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-csharp",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clike")], null),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"csharp",new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null)], null);

klipse.lang.server_eval.go = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_go",new cljs.core.Keyword(null,"name","name",1843675177),"eval-go",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"go",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"go",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"go")], null),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"go",new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null)], null);

var seq__30091_30099 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.lang.server_eval.python,klipse.lang.server_eval.csharp,klipse.lang.server_eval.go], null));
var chunk__30092_30100 = null;
var count__30093_30101 = (0);
var i__30094_30102 = (0);
while(true){
if((i__30094_30102 < count__30093_30101)){
var map__30097_30103 = cljs.core._nth.call(null,chunk__30092_30100,i__30094_30102);
var map__30097_30104__$1 = cljs.core.__destructure_map.call(null,map__30097_30103);
var selector_30105 = cljs.core.get.call(null,map__30097_30104__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var name_30106 = cljs.core.get.call(null,map__30097_30104__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opts_30107 = cljs.core.get.call(null,map__30097_30104__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var enriched_opts_30108 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts_30107,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.replit.connect_and_evaluate,new cljs.core.Keyword(null,"replit-language","replit-language",-941391192).cljs$core$IFn$_invoke$arity$1(opts_30107))),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192)),new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),klipse.lang.server_eval.min_eval_idle_msec);
klipse.common.registry.register_mode.call(null,name_30106,selector_30105,enriched_opts_30108);


var G__30109 = seq__30091_30099;
var G__30110 = chunk__30092_30100;
var G__30111 = count__30093_30101;
var G__30112 = (i__30094_30102 + (1));
seq__30091_30099 = G__30109;
chunk__30092_30100 = G__30110;
count__30093_30101 = G__30111;
i__30094_30102 = G__30112;
continue;
} else {
var temp__5804__auto___30113 = cljs.core.seq.call(null,seq__30091_30099);
if(temp__5804__auto___30113){
var seq__30091_30114__$1 = temp__5804__auto___30113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30091_30114__$1)){
var c__5565__auto___30115 = cljs.core.chunk_first.call(null,seq__30091_30114__$1);
var G__30116 = cljs.core.chunk_rest.call(null,seq__30091_30114__$1);
var G__30117 = c__5565__auto___30115;
var G__30118 = cljs.core.count.call(null,c__5565__auto___30115);
var G__30119 = (0);
seq__30091_30099 = G__30116;
chunk__30092_30100 = G__30117;
count__30093_30101 = G__30118;
i__30094_30102 = G__30119;
continue;
} else {
var map__30098_30120 = cljs.core.first.call(null,seq__30091_30114__$1);
var map__30098_30121__$1 = cljs.core.__destructure_map.call(null,map__30098_30120);
var selector_30122 = cljs.core.get.call(null,map__30098_30121__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var name_30123 = cljs.core.get.call(null,map__30098_30121__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opts_30124 = cljs.core.get.call(null,map__30098_30121__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var enriched_opts_30125 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts_30124,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.replit.connect_and_evaluate,new cljs.core.Keyword(null,"replit-language","replit-language",-941391192).cljs$core$IFn$_invoke$arity$1(opts_30124))),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192)),new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),klipse.lang.server_eval.min_eval_idle_msec);
klipse.common.registry.register_mode.call(null,name_30123,selector_30122,enriched_opts_30125);


var G__30126 = cljs.core.next.call(null,seq__30091_30114__$1);
var G__30127 = null;
var G__30128 = (0);
var G__30129 = (0);
seq__30091_30099 = G__30126;
chunk__30092_30100 = G__30127;
count__30093_30101 = G__30128;
i__30094_30102 = G__30129;
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

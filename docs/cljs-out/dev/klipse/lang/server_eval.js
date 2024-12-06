// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.server_eval');
goog.require('cljs.core');
goog.require('klipse.lang.replit');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
if(cljs.core.truth_((function (){var obj30086 = window;
var k30087 = "ReplitClient";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30086,k30087)){
return (obj30086[k30087]);
} else {
return null;
}
})())){
klipse.lang.server_eval.min_eval_idle_msec = (3000);

klipse.lang.server_eval.python = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_python",new cljs.core.Keyword(null,"name","name",1843675177),"eval-python",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"python",new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"python3",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false], null)], null);

klipse.lang.server_eval.csharp = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_csharp",new cljs.core.Keyword(null,"name","name",1843675177),"eval-csharp",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-csharp",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-csharp",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clike")], null),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"csharp",new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null)], null);

klipse.lang.server_eval.go = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_go",new cljs.core.Keyword(null,"name","name",1843675177),"eval-go",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"go",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"go",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"go")], null),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"go",new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null)], null);

var seq__30088_30096 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.lang.server_eval.python,klipse.lang.server_eval.csharp,klipse.lang.server_eval.go], null));
var chunk__30089_30097 = null;
var count__30090_30098 = (0);
var i__30091_30099 = (0);
while(true){
if((i__30091_30099 < count__30090_30098)){
var map__30094_30100 = cljs.core._nth.call(null,chunk__30089_30097,i__30091_30099);
var map__30094_30101__$1 = cljs.core.__destructure_map.call(null,map__30094_30100);
var selector_30102 = cljs.core.get.call(null,map__30094_30101__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var name_30103 = cljs.core.get.call(null,map__30094_30101__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opts_30104 = cljs.core.get.call(null,map__30094_30101__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var enriched_opts_30105 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts_30104,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.replit.connect_and_evaluate,new cljs.core.Keyword(null,"replit-language","replit-language",-941391192).cljs$core$IFn$_invoke$arity$1(opts_30104))),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192)),new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),klipse.lang.server_eval.min_eval_idle_msec);
klipse.common.registry.register_mode.call(null,name_30103,selector_30102,enriched_opts_30105);


var G__30106 = seq__30088_30096;
var G__30107 = chunk__30089_30097;
var G__30108 = count__30090_30098;
var G__30109 = (i__30091_30099 + (1));
seq__30088_30096 = G__30106;
chunk__30089_30097 = G__30107;
count__30090_30098 = G__30108;
i__30091_30099 = G__30109;
continue;
} else {
var temp__5804__auto___30110 = cljs.core.seq.call(null,seq__30088_30096);
if(temp__5804__auto___30110){
var seq__30088_30111__$1 = temp__5804__auto___30110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30088_30111__$1)){
var c__5565__auto___30112 = cljs.core.chunk_first.call(null,seq__30088_30111__$1);
var G__30113 = cljs.core.chunk_rest.call(null,seq__30088_30111__$1);
var G__30114 = c__5565__auto___30112;
var G__30115 = cljs.core.count.call(null,c__5565__auto___30112);
var G__30116 = (0);
seq__30088_30096 = G__30113;
chunk__30089_30097 = G__30114;
count__30090_30098 = G__30115;
i__30091_30099 = G__30116;
continue;
} else {
var map__30095_30117 = cljs.core.first.call(null,seq__30088_30111__$1);
var map__30095_30118__$1 = cljs.core.__destructure_map.call(null,map__30095_30117);
var selector_30119 = cljs.core.get.call(null,map__30095_30118__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var name_30120 = cljs.core.get.call(null,map__30095_30118__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opts_30121 = cljs.core.get.call(null,map__30095_30118__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var enriched_opts_30122 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts_30121,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.replit.connect_and_evaluate,new cljs.core.Keyword(null,"replit-language","replit-language",-941391192).cljs$core$IFn$_invoke$arity$1(opts_30121))),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192)),new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),klipse.lang.server_eval.min_eval_idle_msec);
klipse.common.registry.register_mode.call(null,name_30120,selector_30119,enriched_opts_30122);


var G__30123 = cljs.core.next.call(null,seq__30088_30111__$1);
var G__30124 = null;
var G__30125 = (0);
var G__30126 = (0);
seq__30088_30096 = G__30123;
chunk__30089_30097 = G__30124;
count__30090_30098 = G__30125;
i__30091_30099 = G__30126;
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

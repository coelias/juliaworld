// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.server_eval');
goog.require('cljs.core');
goog.require('klipse.lang.replit');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
if(cljs.core.truth_((function (){var obj21315 = window;
var k21316 = "ReplitClient";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21315,k21316)){
return (obj21315[k21316]);
} else {
return null;
}
})())){
klipse.lang.server_eval.min_eval_idle_msec = (3000);

klipse.lang.server_eval.python = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_python",new cljs.core.Keyword(null,"name","name",1843675177),"eval-python",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"python",new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"python3",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false], null)], null);

klipse.lang.server_eval.csharp = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_csharp",new cljs.core.Keyword(null,"name","name",1843675177),"eval-csharp",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-csharp",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-csharp",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clike")], null),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"csharp",new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null)], null);

klipse.lang.server_eval.go = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_go",new cljs.core.Keyword(null,"name","name",1843675177),"eval-go",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"go",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"go",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"go")], null),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"go",new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null)], null);

var seq__21317_21325 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.lang.server_eval.python,klipse.lang.server_eval.csharp,klipse.lang.server_eval.go], null));
var chunk__21318_21326 = null;
var count__21319_21327 = (0);
var i__21320_21328 = (0);
while(true){
if((i__21320_21328 < count__21319_21327)){
var map__21323_21329 = cljs.core._nth.call(null,chunk__21318_21326,i__21320_21328);
var map__21323_21330__$1 = cljs.core.__destructure_map.call(null,map__21323_21329);
var selector_21331 = cljs.core.get.call(null,map__21323_21330__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var name_21332 = cljs.core.get.call(null,map__21323_21330__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opts_21333 = cljs.core.get.call(null,map__21323_21330__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var enriched_opts_21334 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts_21333,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.replit.connect_and_evaluate,new cljs.core.Keyword(null,"replit-language","replit-language",-941391192).cljs$core$IFn$_invoke$arity$1(opts_21333))),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192)),new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),klipse.lang.server_eval.min_eval_idle_msec);
klipse.common.registry.register_mode.call(null,name_21332,selector_21331,enriched_opts_21334);


var G__21335 = seq__21317_21325;
var G__21336 = chunk__21318_21326;
var G__21337 = count__21319_21327;
var G__21338 = (i__21320_21328 + (1));
seq__21317_21325 = G__21335;
chunk__21318_21326 = G__21336;
count__21319_21327 = G__21337;
i__21320_21328 = G__21338;
continue;
} else {
var temp__5804__auto___21339 = cljs.core.seq.call(null,seq__21317_21325);
if(temp__5804__auto___21339){
var seq__21317_21340__$1 = temp__5804__auto___21339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21317_21340__$1)){
var c__5565__auto___21341 = cljs.core.chunk_first.call(null,seq__21317_21340__$1);
var G__21342 = cljs.core.chunk_rest.call(null,seq__21317_21340__$1);
var G__21343 = c__5565__auto___21341;
var G__21344 = cljs.core.count.call(null,c__5565__auto___21341);
var G__21345 = (0);
seq__21317_21325 = G__21342;
chunk__21318_21326 = G__21343;
count__21319_21327 = G__21344;
i__21320_21328 = G__21345;
continue;
} else {
var map__21324_21346 = cljs.core.first.call(null,seq__21317_21340__$1);
var map__21324_21347__$1 = cljs.core.__destructure_map.call(null,map__21324_21346);
var selector_21348 = cljs.core.get.call(null,map__21324_21347__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var name_21349 = cljs.core.get.call(null,map__21324_21347__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opts_21350 = cljs.core.get.call(null,map__21324_21347__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var enriched_opts_21351 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts_21350,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.replit.connect_and_evaluate,new cljs.core.Keyword(null,"replit-language","replit-language",-941391192).cljs$core$IFn$_invoke$arity$1(opts_21350))),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192)),new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),klipse.lang.server_eval.min_eval_idle_msec);
klipse.common.registry.register_mode.call(null,name_21349,selector_21348,enriched_opts_21351);


var G__21352 = cljs.core.next.call(null,seq__21317_21340__$1);
var G__21353 = null;
var G__21354 = (0);
var G__21355 = (0);
seq__21317_21325 = G__21352;
chunk__21318_21326 = G__21353;
count__21319_21327 = G__21354;
i__21320_21328 = G__21355;
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

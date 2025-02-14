// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.server_eval');
goog.require('cljs.core');
goog.require('klipse.lang.replit');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
if(cljs.core.truth_((function (){var obj30499 = window;
var k30500 = "ReplitClient";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30499,k30500)){
return (obj30499[k30500]);
} else {
return null;
}
})())){
klipse.lang.server_eval.min_eval_idle_msec = (3000);

klipse.lang.server_eval.python = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_python",new cljs.core.Keyword(null,"name","name",1843675177),"eval-python",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"python",new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"python3",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false], null)], null);

klipse.lang.server_eval.csharp = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_csharp",new cljs.core.Keyword(null,"name","name",1843675177),"eval-csharp",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-csharp",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-csharp",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clike")], null),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"csharp",new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null)], null);

klipse.lang.server_eval.go = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),"selector_eval_go",new cljs.core.Keyword(null,"name","name",1843675177),"eval-go",new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"go",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"go",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"go")], null),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192),"go",new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null)], null);

var seq__30501_30509 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.lang.server_eval.python,klipse.lang.server_eval.csharp,klipse.lang.server_eval.go], null));
var chunk__30502_30510 = null;
var count__30503_30511 = (0);
var i__30504_30512 = (0);
while(true){
if((i__30504_30512 < count__30503_30511)){
var map__30507_30513 = cljs.core._nth.call(null,chunk__30502_30510,i__30504_30512);
var map__30507_30514__$1 = cljs.core.__destructure_map.call(null,map__30507_30513);
var selector_30515 = cljs.core.get.call(null,map__30507_30514__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var name_30516 = cljs.core.get.call(null,map__30507_30514__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opts_30517 = cljs.core.get.call(null,map__30507_30514__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var enriched_opts_30518 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts_30517,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.replit.connect_and_evaluate,new cljs.core.Keyword(null,"replit-language","replit-language",-941391192).cljs$core$IFn$_invoke$arity$1(opts_30517))),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192)),new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),klipse.lang.server_eval.min_eval_idle_msec);
klipse.common.registry.register_mode.call(null,name_30516,selector_30515,enriched_opts_30518);


var G__30519 = seq__30501_30509;
var G__30520 = chunk__30502_30510;
var G__30521 = count__30503_30511;
var G__30522 = (i__30504_30512 + (1));
seq__30501_30509 = G__30519;
chunk__30502_30510 = G__30520;
count__30503_30511 = G__30521;
i__30504_30512 = G__30522;
continue;
} else {
var temp__5804__auto___30523 = cljs.core.seq.call(null,seq__30501_30509);
if(temp__5804__auto___30523){
var seq__30501_30524__$1 = temp__5804__auto___30523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30501_30524__$1)){
var c__5565__auto___30525 = cljs.core.chunk_first.call(null,seq__30501_30524__$1);
var G__30526 = cljs.core.chunk_rest.call(null,seq__30501_30524__$1);
var G__30527 = c__5565__auto___30525;
var G__30528 = cljs.core.count.call(null,c__5565__auto___30525);
var G__30529 = (0);
seq__30501_30509 = G__30526;
chunk__30502_30510 = G__30527;
count__30503_30511 = G__30528;
i__30504_30512 = G__30529;
continue;
} else {
var map__30508_30530 = cljs.core.first.call(null,seq__30501_30524__$1);
var map__30508_30531__$1 = cljs.core.__destructure_map.call(null,map__30508_30530);
var selector_30532 = cljs.core.get.call(null,map__30508_30531__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var name_30533 = cljs.core.get.call(null,map__30508_30531__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var opts_30534 = cljs.core.get.call(null,map__30508_30531__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var enriched_opts_30535 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts_30534,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.replit.connect_and_evaluate,new cljs.core.Keyword(null,"replit-language","replit-language",-941391192).cljs$core$IFn$_invoke$arity$1(opts_30534))),new cljs.core.Keyword(null,"replit-language","replit-language",-941391192)),new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),klipse.lang.server_eval.min_eval_idle_msec);
klipse.common.registry.register_mode.call(null,name_30533,selector_30532,enriched_opts_30535);


var G__30536 = cljs.core.next.call(null,seq__30501_30524__$1);
var G__30537 = null;
var G__30538 = (0);
var G__30539 = (0);
seq__30501_30509 = G__30536;
chunk__30502_30510 = G__30537;
count__30503_30511 = G__30538;
i__30504_30512 = G__30539;
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

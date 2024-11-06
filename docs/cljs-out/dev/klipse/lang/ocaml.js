// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.ocaml');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.ocaml.eval_in_global_scope = eval;
klipse.lang.ocaml.ocaml_to_js = (function klipse$lang$ocaml$ocaml_to_js(src){
var map__23430 = cljs.core.js__GT_clj.call(null,JSON.parse(ocaml.compile(src)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__23430__$1 = cljs.core.__destructure_map.call(null,map__23430);
var js_error_msg = cljs.core.get.call(null,map__23430__$1,new cljs.core.Keyword(null,"js_error_msg","js_error_msg",1210372151));
var js_code = cljs.core.get.call(null,map__23430__$1,new cljs.core.Keyword(null,"js_code","js_code",-351949916));
if(cljs.core.truth_(js_error_msg)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),js_error_msg], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),js_code], null);
}
});
klipse.lang.ocaml.eval_with_types = (function klipse$lang$ocaml$eval_with_types(exp){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var obj__17203__auto__ = evaluator;
var f__17204__auto__ = (function (){var obj23432 = obj__17203__auto__;
var k23433 = "execute";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23432,k23433)){
return (obj23432[k23433]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,exp);
})()], null);
}catch (e23431){var o = e23431;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.ocaml.eval_ocaml = (function klipse$lang$ocaml$eval_ocaml(exp,_){
var c = cljs.core.async.chan.call(null);
var console_log23434_23439 = console.log;
(console.log = (function() { 
var G__23440__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__23440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23441__i = 0, G__23441__a = new Array(arguments.length -  0);
while (G__23441__i < G__23441__a.length) {G__23441__a[G__23441__i] = arguments[G__23441__i + 0]; ++G__23441__i;}
  args = new cljs.core.IndexedSeq(G__23441__a,0,null);
} 
return G__23440__delegate.call(this,args);};
G__23440.cljs$lang$maxFixedArity = 0;
G__23440.cljs$lang$applyTo = (function (arglist__23442){
var args = cljs.core.seq(arglist__23442);
return G__23440__delegate(args);
});
G__23440.cljs$core$IFn$_invoke$arity$variadic = G__23440__delegate;
return G__23440;
})()
);

try{try{(exports = ({}));

var vec__23436_23443 = klipse.lang.ocaml.ocaml_to_js.call(null,exp);
var status_23444 = cljs.core.nth.call(null,vec__23436_23443,(0),null);
var res_23445 = cljs.core.nth.call(null,vec__23436_23443,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_23444)){
cljs.core.async.put_BANG_.call(null,c,res_23445);
} else {
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.ocaml.eval_in_global_scope.call(null,res_23445)));
}
}catch (e23435){var o_23446 = e23435;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_23446);
}}finally {(console.log = console_log23434_23439);
}
return c;
});
klipse.lang.ocaml.eval_ocaml_with_types = (function klipse$lang$ocaml$eval_ocaml_with_types(exp,_){
var c = cljs.core.async.chan.call(null);
var console_error23447_23452 = console.error;
(console.error = (function() { 
var G__23453__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__23453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23454__i = 0, G__23454__a = new Array(arguments.length -  0);
while (G__23454__i < G__23454__a.length) {G__23454__a[G__23454__i] = arguments[G__23454__i + 0]; ++G__23454__i;}
  args = new cljs.core.IndexedSeq(G__23454__a,0,null);
} 
return G__23453__delegate.call(this,args);};
G__23453.cljs$lang$maxFixedArity = 0;
G__23453.cljs$lang$applyTo = (function (arglist__23455){
var args = cljs.core.seq(arglist__23455);
return G__23453__delegate(args);
});
G__23453.cljs$core$IFn$_invoke$arity$variadic = G__23453__delegate;
return G__23453;
})()
);

try{try{(exports = ({}));

var vec__23449_23456 = klipse.lang.ocaml.eval_with_types.call(null,exp);
var status_23457 = cljs.core.nth.call(null,vec__23449_23456,(0),null);
var res_23458 = cljs.core.nth.call(null,vec__23449_23456,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_23457)){
cljs.core.async.put_BANG_.call(null,c,res_23458);
} else {
cljs.core.async.put_BANG_.call(null,c,res_23458);
}
}catch (e23448){var o_23459 = e23448;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_23459);
}}finally {(console.error = console_error23447_23452);
}
return c;
});
klipse.lang.ocaml.transpile_ocaml = (function klipse$lang$ocaml$transpile_ocaml(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_23467){
var state_val_23468 = (state_23467[(1)]);
if((state_val_23468 === (1))){
var inst_23463 = klipse.lang.ocaml.ocaml_to_js.call(null,exp);
var inst_23464 = cljs.core.nth.call(null,inst_23463,(0),null);
var inst_23465 = cljs.core.nth.call(null,inst_23463,(1),null);
var state_23467__$1 = (function (){var statearr_23469 = state_23467;
(statearr_23469[(7)] = inst_23464);

return statearr_23469;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23467__$1,inst_23465);
} else {
return null;
}
});
return (function() {
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto__ = null;
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto____0 = (function (){
var statearr_23470 = [null,null,null,null,null,null,null,null];
(statearr_23470[(0)] = klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto__);

(statearr_23470[(1)] = (1));

return statearr_23470;
});
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto____1 = (function (state_23467){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_23467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e23471){if((e23471 instanceof Object)){
var ex__13611__auto__ = e23471;
var statearr_23472_23474 = state_23467;
(statearr_23472_23474[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23475 = state_23467;
state_23467 = G__23475;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto__ = function(state_23467){
switch(arguments.length){
case 0:
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto____1.call(this,state_23467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto____0;
klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto____1;
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_23473 = f__13705__auto__.call(null);
(statearr_23473[(6)] = c__13704__auto__);

return statearr_23473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.ocaml.comment_out = (function klipse$lang$ocaml$comment_out(src){
return ["(* ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)," *)"].join('');
});
klipse.lang.ocaml.eval_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-ocaml",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.ocaml.eval_ocaml,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js","https://viebel.github.io/klipse/repo/js/stdlibBundle.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.ocaml.comment_out], null);
klipse.lang.ocaml.eval_with_types_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-ocaml",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.ocaml.eval_ocaml_with_types,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/ocaml_evaluate_type.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.ocaml.comment_out], null);
klipse.lang.ocaml.transpile_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.ocaml.transpile_ocaml,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js","https://viebel.github.io/klipse/repo/js/pretty_format.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.ocaml.comment_out], null);
klipse.common.registry.register_mode.call(null,"eval-ocaml","selector_eval_ocaml",klipse.lang.ocaml.eval_opts);
klipse.common.registry.register_mode.call(null,"transpile-ocaml","selector_transpile_ocaml",klipse.lang.ocaml.transpile_opts);
klipse.common.registry.register_mode.call(null,"eval-with-types-opts","selector_eval_ocaml_with_types",klipse.lang.ocaml.eval_with_types_opts);

//# sourceMappingURL=ocaml.js.map

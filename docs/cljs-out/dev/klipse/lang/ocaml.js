// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.ocaml');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.ocaml.eval_in_global_scope = eval;
klipse.lang.ocaml.ocaml_to_js = (function klipse$lang$ocaml$ocaml_to_js(src){
var map__20744 = cljs.core.js__GT_clj.call(null,JSON.parse(ocaml.compile(src)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__20744__$1 = cljs.core.__destructure_map.call(null,map__20744);
var js_error_msg = cljs.core.get.call(null,map__20744__$1,new cljs.core.Keyword(null,"js_error_msg","js_error_msg",1210372151));
var js_code = cljs.core.get.call(null,map__20744__$1,new cljs.core.Keyword(null,"js_code","js_code",-351949916));
if(cljs.core.truth_(js_error_msg)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),js_error_msg], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),js_code], null);
}
});
klipse.lang.ocaml.eval_with_types = (function klipse$lang$ocaml$eval_with_types(exp){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var obj__17203__auto__ = evaluator;
var f__17204__auto__ = (function (){var obj20746 = obj__17203__auto__;
var k20747 = "execute";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20746,k20747)){
return (obj20746[k20747]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,exp);
})()], null);
}catch (e20745){var o = e20745;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.ocaml.eval_ocaml = (function klipse$lang$ocaml$eval_ocaml(exp,_){
var c = cljs.core.async.chan.call(null);
var console_log20748_20753 = console.log;
(console.log = (function() { 
var G__20754__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__20754 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20755__i = 0, G__20755__a = new Array(arguments.length -  0);
while (G__20755__i < G__20755__a.length) {G__20755__a[G__20755__i] = arguments[G__20755__i + 0]; ++G__20755__i;}
  args = new cljs.core.IndexedSeq(G__20755__a,0,null);
} 
return G__20754__delegate.call(this,args);};
G__20754.cljs$lang$maxFixedArity = 0;
G__20754.cljs$lang$applyTo = (function (arglist__20756){
var args = cljs.core.seq(arglist__20756);
return G__20754__delegate(args);
});
G__20754.cljs$core$IFn$_invoke$arity$variadic = G__20754__delegate;
return G__20754;
})()
);

try{try{(exports = ({}));

var vec__20750_20757 = klipse.lang.ocaml.ocaml_to_js.call(null,exp);
var status_20758 = cljs.core.nth.call(null,vec__20750_20757,(0),null);
var res_20759 = cljs.core.nth.call(null,vec__20750_20757,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_20758)){
cljs.core.async.put_BANG_.call(null,c,res_20759);
} else {
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.ocaml.eval_in_global_scope.call(null,res_20759)));
}
}catch (e20749){var o_20760 = e20749;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_20760);
}}finally {(console.log = console_log20748_20753);
}
return c;
});
klipse.lang.ocaml.eval_ocaml_with_types = (function klipse$lang$ocaml$eval_ocaml_with_types(exp,_){
var c = cljs.core.async.chan.call(null);
var console_error20761_20766 = console.error;
(console.error = (function() { 
var G__20767__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__20767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20768__i = 0, G__20768__a = new Array(arguments.length -  0);
while (G__20768__i < G__20768__a.length) {G__20768__a[G__20768__i] = arguments[G__20768__i + 0]; ++G__20768__i;}
  args = new cljs.core.IndexedSeq(G__20768__a,0,null);
} 
return G__20767__delegate.call(this,args);};
G__20767.cljs$lang$maxFixedArity = 0;
G__20767.cljs$lang$applyTo = (function (arglist__20769){
var args = cljs.core.seq(arglist__20769);
return G__20767__delegate(args);
});
G__20767.cljs$core$IFn$_invoke$arity$variadic = G__20767__delegate;
return G__20767;
})()
);

try{try{(exports = ({}));

var vec__20763_20770 = klipse.lang.ocaml.eval_with_types.call(null,exp);
var status_20771 = cljs.core.nth.call(null,vec__20763_20770,(0),null);
var res_20772 = cljs.core.nth.call(null,vec__20763_20770,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_20771)){
cljs.core.async.put_BANG_.call(null,c,res_20772);
} else {
cljs.core.async.put_BANG_.call(null,c,res_20772);
}
}catch (e20762){var o_20773 = e20762;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_20773);
}}finally {(console.error = console_error20761_20766);
}
return c;
});
klipse.lang.ocaml.transpile_ocaml = (function klipse$lang$ocaml$transpile_ocaml(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_20781){
var state_val_20782 = (state_20781[(1)]);
if((state_val_20782 === (1))){
var inst_20777 = klipse.lang.ocaml.ocaml_to_js.call(null,exp);
var inst_20778 = cljs.core.nth.call(null,inst_20777,(0),null);
var inst_20779 = cljs.core.nth.call(null,inst_20777,(1),null);
var state_20781__$1 = (function (){var statearr_20783 = state_20781;
(statearr_20783[(7)] = inst_20778);

return statearr_20783;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20781__$1,inst_20779);
} else {
return null;
}
});
return (function() {
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto__ = null;
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto____0 = (function (){
var statearr_20784 = [null,null,null,null,null,null,null,null];
(statearr_20784[(0)] = klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto__);

(statearr_20784[(1)] = (1));

return statearr_20784;
});
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto____1 = (function (state_20781){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_20781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e20785){if((e20785 instanceof Object)){
var ex__13611__auto__ = e20785;
var statearr_20786_20788 = state_20781;
(statearr_20786_20788[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20789 = state_20781;
state_20781 = G__20789;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto__ = function(state_20781){
switch(arguments.length){
case 0:
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto____1.call(this,state_20781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto____0;
klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto____1;
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_20787 = f__13705__auto__.call(null);
(statearr_20787[(6)] = c__13704__auto__);

return statearr_20787;
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

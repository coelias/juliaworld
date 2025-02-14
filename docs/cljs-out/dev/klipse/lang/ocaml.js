// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.ocaml');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.ocaml.eval_in_global_scope = eval;
klipse.lang.ocaml.ocaml_to_js = (function klipse$lang$ocaml$ocaml_to_js(src){
var map__29039 = cljs.core.js__GT_clj.call(null,JSON.parse(ocaml.compile(src)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__29039__$1 = cljs.core.__destructure_map.call(null,map__29039);
var js_error_msg = cljs.core.get.call(null,map__29039__$1,new cljs.core.Keyword(null,"js_error_msg","js_error_msg",1210372151));
var js_code = cljs.core.get.call(null,map__29039__$1,new cljs.core.Keyword(null,"js_code","js_code",-351949916));
if(cljs.core.truth_(js_error_msg)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),js_error_msg], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),js_code], null);
}
});
klipse.lang.ocaml.eval_with_types = (function klipse$lang$ocaml$eval_with_types(exp){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var obj__20025__auto__ = evaluator;
var f__20026__auto__ = (function (){var obj29041 = obj__20025__auto__;
var k29042 = "execute";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29041,k29042)){
return (obj29041[k29042]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,exp);
})()], null);
}catch (e29040){var o = e29040;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.ocaml.eval_ocaml = (function klipse$lang$ocaml$eval_ocaml(exp,_){
var c = cljs.core.async.chan.call(null);
var console_log29043_29048 = console.log;
(console.log = (function() { 
var G__29049__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__29049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29050__i = 0, G__29050__a = new Array(arguments.length -  0);
while (G__29050__i < G__29050__a.length) {G__29050__a[G__29050__i] = arguments[G__29050__i + 0]; ++G__29050__i;}
  args = new cljs.core.IndexedSeq(G__29050__a,0,null);
} 
return G__29049__delegate.call(this,args);};
G__29049.cljs$lang$maxFixedArity = 0;
G__29049.cljs$lang$applyTo = (function (arglist__29051){
var args = cljs.core.seq(arglist__29051);
return G__29049__delegate(args);
});
G__29049.cljs$core$IFn$_invoke$arity$variadic = G__29049__delegate;
return G__29049;
})()
);

try{try{(exports = ({}));

var vec__29045_29052 = klipse.lang.ocaml.ocaml_to_js.call(null,exp);
var status_29053 = cljs.core.nth.call(null,vec__29045_29052,(0),null);
var res_29054 = cljs.core.nth.call(null,vec__29045_29052,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_29053)){
cljs.core.async.put_BANG_.call(null,c,res_29054);
} else {
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.ocaml.eval_in_global_scope.call(null,res_29054)));
}
}catch (e29044){var o_29055 = e29044;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_29055);
}}finally {(console.log = console_log29043_29048);
}
return c;
});
klipse.lang.ocaml.eval_ocaml_with_types = (function klipse$lang$ocaml$eval_ocaml_with_types(exp,_){
var c = cljs.core.async.chan.call(null);
var console_error29056_29061 = console.error;
(console.error = (function() { 
var G__29062__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__29062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29063__i = 0, G__29063__a = new Array(arguments.length -  0);
while (G__29063__i < G__29063__a.length) {G__29063__a[G__29063__i] = arguments[G__29063__i + 0]; ++G__29063__i;}
  args = new cljs.core.IndexedSeq(G__29063__a,0,null);
} 
return G__29062__delegate.call(this,args);};
G__29062.cljs$lang$maxFixedArity = 0;
G__29062.cljs$lang$applyTo = (function (arglist__29064){
var args = cljs.core.seq(arglist__29064);
return G__29062__delegate(args);
});
G__29062.cljs$core$IFn$_invoke$arity$variadic = G__29062__delegate;
return G__29062;
})()
);

try{try{(exports = ({}));

var vec__29058_29065 = klipse.lang.ocaml.eval_with_types.call(null,exp);
var status_29066 = cljs.core.nth.call(null,vec__29058_29065,(0),null);
var res_29067 = cljs.core.nth.call(null,vec__29058_29065,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_29066)){
cljs.core.async.put_BANG_.call(null,c,res_29067);
} else {
cljs.core.async.put_BANG_.call(null,c,res_29067);
}
}catch (e29057){var o_29068 = e29057;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_29068);
}}finally {(console.error = console_error29056_29061);
}
return c;
});
klipse.lang.ocaml.transpile_ocaml = (function klipse$lang$ocaml$transpile_ocaml(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29076){
var state_val_29077 = (state_29076[(1)]);
if((state_val_29077 === (1))){
var inst_29072 = klipse.lang.ocaml.ocaml_to_js.call(null,exp);
var inst_29073 = cljs.core.nth.call(null,inst_29072,(0),null);
var inst_29074 = cljs.core.nth.call(null,inst_29072,(1),null);
var state_29076__$1 = (function (){var statearr_29078 = state_29076;
(statearr_29078[(7)] = inst_29073);

return statearr_29078;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29076__$1,inst_29074);
} else {
return null;
}
});
return (function() {
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto__ = null;
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto____0 = (function (){
var statearr_29079 = [null,null,null,null,null,null,null,null];
(statearr_29079[(0)] = klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto__);

(statearr_29079[(1)] = (1));

return statearr_29079;
});
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto____1 = (function (state_29076){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29080){if((e29080 instanceof Object)){
var ex__15526__auto__ = e29080;
var statearr_29081_29083 = state_29076;
(statearr_29081_29083[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29084 = state_29076;
state_29076 = G__29084;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto__ = function(state_29076){
switch(arguments.length){
case 0:
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto____1.call(this,state_29076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto____0;
klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto____1;
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29082 = f__15620__auto__.call(null);
(statearr_29082[(6)] = c__15619__auto__);

return statearr_29082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
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

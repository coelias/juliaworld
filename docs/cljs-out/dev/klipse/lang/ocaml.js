// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.ocaml');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.ocaml.eval_in_global_scope = eval;
klipse.lang.ocaml.ocaml_to_js = (function klipse$lang$ocaml$ocaml_to_js(src){
var map__28629 = cljs.core.js__GT_clj.call(null,JSON.parse(ocaml.compile(src)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__28629__$1 = cljs.core.__destructure_map.call(null,map__28629);
var js_error_msg = cljs.core.get.call(null,map__28629__$1,new cljs.core.Keyword(null,"js_error_msg","js_error_msg",1210372151));
var js_code = cljs.core.get.call(null,map__28629__$1,new cljs.core.Keyword(null,"js_code","js_code",-351949916));
if(cljs.core.truth_(js_error_msg)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),js_error_msg], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),js_code], null);
}
});
klipse.lang.ocaml.eval_with_types = (function klipse$lang$ocaml$eval_with_types(exp){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var obj__20025__auto__ = evaluator;
var f__20026__auto__ = (function (){var obj28631 = obj__20025__auto__;
var k28632 = "execute";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28631,k28632)){
return (obj28631[k28632]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,exp);
})()], null);
}catch (e28630){var o = e28630;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.ocaml.eval_ocaml = (function klipse$lang$ocaml$eval_ocaml(exp,_){
var c = cljs.core.async.chan.call(null);
var console_log28633_28638 = console.log;
(console.log = (function() { 
var G__28639__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__28639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28640__i = 0, G__28640__a = new Array(arguments.length -  0);
while (G__28640__i < G__28640__a.length) {G__28640__a[G__28640__i] = arguments[G__28640__i + 0]; ++G__28640__i;}
  args = new cljs.core.IndexedSeq(G__28640__a,0,null);
} 
return G__28639__delegate.call(this,args);};
G__28639.cljs$lang$maxFixedArity = 0;
G__28639.cljs$lang$applyTo = (function (arglist__28641){
var args = cljs.core.seq(arglist__28641);
return G__28639__delegate(args);
});
G__28639.cljs$core$IFn$_invoke$arity$variadic = G__28639__delegate;
return G__28639;
})()
);

try{try{(exports = ({}));

var vec__28635_28642 = klipse.lang.ocaml.ocaml_to_js.call(null,exp);
var status_28643 = cljs.core.nth.call(null,vec__28635_28642,(0),null);
var res_28644 = cljs.core.nth.call(null,vec__28635_28642,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_28643)){
cljs.core.async.put_BANG_.call(null,c,res_28644);
} else {
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.ocaml.eval_in_global_scope.call(null,res_28644)));
}
}catch (e28634){var o_28645 = e28634;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_28645);
}}finally {(console.log = console_log28633_28638);
}
return c;
});
klipse.lang.ocaml.eval_ocaml_with_types = (function klipse$lang$ocaml$eval_ocaml_with_types(exp,_){
var c = cljs.core.async.chan.call(null);
var console_error28646_28651 = console.error;
(console.error = (function() { 
var G__28652__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__28652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28653__i = 0, G__28653__a = new Array(arguments.length -  0);
while (G__28653__i < G__28653__a.length) {G__28653__a[G__28653__i] = arguments[G__28653__i + 0]; ++G__28653__i;}
  args = new cljs.core.IndexedSeq(G__28653__a,0,null);
} 
return G__28652__delegate.call(this,args);};
G__28652.cljs$lang$maxFixedArity = 0;
G__28652.cljs$lang$applyTo = (function (arglist__28654){
var args = cljs.core.seq(arglist__28654);
return G__28652__delegate(args);
});
G__28652.cljs$core$IFn$_invoke$arity$variadic = G__28652__delegate;
return G__28652;
})()
);

try{try{(exports = ({}));

var vec__28648_28655 = klipse.lang.ocaml.eval_with_types.call(null,exp);
var status_28656 = cljs.core.nth.call(null,vec__28648_28655,(0),null);
var res_28657 = cljs.core.nth.call(null,vec__28648_28655,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_28656)){
cljs.core.async.put_BANG_.call(null,c,res_28657);
} else {
cljs.core.async.put_BANG_.call(null,c,res_28657);
}
}catch (e28647){var o_28658 = e28647;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_28658);
}}finally {(console.error = console_error28646_28651);
}
return c;
});
klipse.lang.ocaml.transpile_ocaml = (function klipse$lang$ocaml$transpile_ocaml(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28666){
var state_val_28667 = (state_28666[(1)]);
if((state_val_28667 === (1))){
var inst_28662 = klipse.lang.ocaml.ocaml_to_js.call(null,exp);
var inst_28663 = cljs.core.nth.call(null,inst_28662,(0),null);
var inst_28664 = cljs.core.nth.call(null,inst_28662,(1),null);
var state_28666__$1 = (function (){var statearr_28668 = state_28666;
(statearr_28668[(7)] = inst_28663);

return statearr_28668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28666__$1,inst_28664);
} else {
return null;
}
});
return (function() {
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto__ = null;
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto____0 = (function (){
var statearr_28669 = [null,null,null,null,null,null,null,null];
(statearr_28669[(0)] = klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto__);

(statearr_28669[(1)] = (1));

return statearr_28669;
});
var klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto____1 = (function (state_28666){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28670){if((e28670 instanceof Object)){
var ex__15526__auto__ = e28670;
var statearr_28671_28673 = state_28666;
(statearr_28671_28673[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28674 = state_28666;
state_28666 = G__28674;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto__ = function(state_28666){
switch(arguments.length){
case 0:
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto____1.call(this,state_28666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto____0;
klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto____1;
return klipse$lang$ocaml$transpile_ocaml_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28672 = f__15620__auto__.call(null);
(statearr_28672[(6)] = c__15619__auto__);

return statearr_28672;
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

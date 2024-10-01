// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.clisp');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.clisp.str_eval_async = (function klipse$lang$clisp$str_eval_async(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_20976){
var state_val_20977 = (state_20976[(1)]);
if((state_val_20977 === (1))){
var state_20976__$1 = state_20976;
var statearr_20978_20989 = state_20976__$1;
(statearr_20978_20989[(2)] = null);

(statearr_20978_20989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (2))){
var inst_20974 = (state_20976[(2)]);
var state_20976__$1 = state_20976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20976__$1,inst_20974);
} else {
if((state_val_20977 === (3))){
var inst_20956 = (state_20976[(2)]);
var inst_20957 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20956);
var state_20976__$1 = state_20976;
var statearr_20979_20990 = state_20976__$1;
(statearr_20979_20990[(2)] = inst_20957);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20976__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20976,(3),Object,null,(2));
var inst_20965 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,jscl,"evaluateString");
var state_20976__$1 = state_20976;
if(inst_20965){
var statearr_20980_20991 = state_20976__$1;
(statearr_20980_20991[(1)] = (5));

} else {
var statearr_20981_20992 = state_20976__$1;
(statearr_20981_20992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (5))){
var inst_20967 = (jscl["evaluateString"]);
var state_20976__$1 = state_20976;
var statearr_20982_20993 = state_20976__$1;
(statearr_20982_20993[(2)] = inst_20967);

(statearr_20982_20993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (6))){
var state_20976__$1 = state_20976;
var statearr_20983_20994 = state_20976__$1;
(statearr_20983_20994[(2)] = null);

(statearr_20983_20994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20977 === (7))){
var inst_20970 = (state_20976[(2)]);
var inst_20971 = inst_20970.call(jscl,exp);
var inst_20972 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20971);
var state_20976__$1 = state_20976;
var statearr_20984_20995 = state_20976__$1;
(statearr_20984_20995[(2)] = inst_20972);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20976__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto__ = null;
var klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto____0 = (function (){
var statearr_20985 = [null,null,null,null,null,null,null];
(statearr_20985[(0)] = klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto__);

(statearr_20985[(1)] = (1));

return statearr_20985;
});
var klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto____1 = (function (state_20976){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_20976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e20986){if((e20986 instanceof Object)){
var ex__13611__auto__ = e20986;
var statearr_20987_20996 = state_20976;
(statearr_20987_20996[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20997 = state_20976;
state_20976 = G__20997;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto__ = function(state_20976){
switch(arguments.length){
case 0:
return klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto____1.call(this,state_20976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto____0;
klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto____1;
return klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_20988 = f__13705__auto__.call(null);
(statearr_20988[(6)] = c__13704__auto__);

return statearr_20988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.clisp.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-common-lisp",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-common-lisp",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.clisp.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"commonlisp"),klipse.common.registry.scripts_src.call(null,"jscl.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"eval-clisp","selector_eval_clisp",klipse.lang.clisp.opts);

//# sourceMappingURL=clisp.js.map

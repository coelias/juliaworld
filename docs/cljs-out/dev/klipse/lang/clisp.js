// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.clisp');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.clisp.str_eval_async = (function klipse$lang$clisp$str_eval_async(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_23662){
var state_val_23663 = (state_23662[(1)]);
if((state_val_23663 === (1))){
var state_23662__$1 = state_23662;
var statearr_23664_23675 = state_23662__$1;
(statearr_23664_23675[(2)] = null);

(statearr_23664_23675[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23663 === (2))){
var inst_23660 = (state_23662[(2)]);
var state_23662__$1 = state_23662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23662__$1,inst_23660);
} else {
if((state_val_23663 === (3))){
var inst_23642 = (state_23662[(2)]);
var inst_23643 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23642);
var state_23662__$1 = state_23662;
var statearr_23665_23676 = state_23662__$1;
(statearr_23665_23676[(2)] = inst_23643);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23662__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23663 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23662,(3),Object,null,(2));
var inst_23651 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,jscl,"evaluateString");
var state_23662__$1 = state_23662;
if(inst_23651){
var statearr_23666_23677 = state_23662__$1;
(statearr_23666_23677[(1)] = (5));

} else {
var statearr_23667_23678 = state_23662__$1;
(statearr_23667_23678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23663 === (5))){
var inst_23653 = (jscl["evaluateString"]);
var state_23662__$1 = state_23662;
var statearr_23668_23679 = state_23662__$1;
(statearr_23668_23679[(2)] = inst_23653);

(statearr_23668_23679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23663 === (6))){
var state_23662__$1 = state_23662;
var statearr_23669_23680 = state_23662__$1;
(statearr_23669_23680[(2)] = null);

(statearr_23669_23680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23663 === (7))){
var inst_23656 = (state_23662[(2)]);
var inst_23657 = inst_23656.call(jscl,exp);
var inst_23658 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23657);
var state_23662__$1 = state_23662;
var statearr_23670_23681 = state_23662__$1;
(statearr_23670_23681[(2)] = inst_23658);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23662__$1);

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
var statearr_23671 = [null,null,null,null,null,null,null];
(statearr_23671[(0)] = klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto__);

(statearr_23671[(1)] = (1));

return statearr_23671;
});
var klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto____1 = (function (state_23662){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_23662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e23672){if((e23672 instanceof Object)){
var ex__13611__auto__ = e23672;
var statearr_23673_23682 = state_23662;
(statearr_23673_23682[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23683 = state_23662;
state_23662 = G__23683;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto__ = function(state_23662){
switch(arguments.length){
case 0:
return klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto____1.call(this,state_23662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto____0;
klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto____1;
return klipse$lang$clisp$str_eval_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_23674 = f__13705__auto__.call(null);
(statearr_23674[(6)] = c__13704__auto__);

return statearr_23674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.clisp.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-common-lisp",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-common-lisp",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.clisp.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"commonlisp"),klipse.common.registry.scripts_src.call(null,"jscl.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"eval-clisp","selector_eval_clisp",klipse.lang.clisp.opts);

//# sourceMappingURL=clisp.js.map

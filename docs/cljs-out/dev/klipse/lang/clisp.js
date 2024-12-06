// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.clisp');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.clisp.str_eval_async = (function klipse$lang$clisp$str_eval_async(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28858){
var state_val_28859 = (state_28858[(1)]);
if((state_val_28859 === (1))){
var state_28858__$1 = state_28858;
var statearr_28860_28871 = state_28858__$1;
(statearr_28860_28871[(2)] = null);

(statearr_28860_28871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (2))){
var inst_28856 = (state_28858[(2)]);
var state_28858__$1 = state_28858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28858__$1,inst_28856);
} else {
if((state_val_28859 === (3))){
var inst_28838 = (state_28858[(2)]);
var inst_28839 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28838);
var state_28858__$1 = state_28858;
var statearr_28861_28872 = state_28858__$1;
(statearr_28861_28872[(2)] = inst_28839);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28858__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28858,(3),Object,null,(2));
var inst_28847 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,jscl,"evaluateString");
var state_28858__$1 = state_28858;
if(inst_28847){
var statearr_28862_28873 = state_28858__$1;
(statearr_28862_28873[(1)] = (5));

} else {
var statearr_28863_28874 = state_28858__$1;
(statearr_28863_28874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (5))){
var inst_28849 = (jscl["evaluateString"]);
var state_28858__$1 = state_28858;
var statearr_28864_28875 = state_28858__$1;
(statearr_28864_28875[(2)] = inst_28849);

(statearr_28864_28875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (6))){
var state_28858__$1 = state_28858;
var statearr_28865_28876 = state_28858__$1;
(statearr_28865_28876[(2)] = null);

(statearr_28865_28876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28859 === (7))){
var inst_28852 = (state_28858[(2)]);
var inst_28853 = inst_28852.call(jscl,exp);
var inst_28854 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28853);
var state_28858__$1 = state_28858;
var statearr_28866_28877 = state_28858__$1;
(statearr_28866_28877[(2)] = inst_28854);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28858__$1);

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
var klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto__ = null;
var klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto____0 = (function (){
var statearr_28867 = [null,null,null,null,null,null,null];
(statearr_28867[(0)] = klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto__);

(statearr_28867[(1)] = (1));

return statearr_28867;
});
var klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto____1 = (function (state_28858){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28868){if((e28868 instanceof Object)){
var ex__15526__auto__ = e28868;
var statearr_28869_28878 = state_28858;
(statearr_28869_28878[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28879 = state_28858;
state_28858 = G__28879;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto__ = function(state_28858){
switch(arguments.length){
case 0:
return klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto____1.call(this,state_28858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto____0;
klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto____1;
return klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28870 = f__15620__auto__.call(null);
(statearr_28870[(6)] = c__15619__auto__);

return statearr_28870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.clisp.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-common-lisp",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-common-lisp",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.clisp.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"commonlisp"),klipse.common.registry.scripts_src.call(null,"jscl.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"eval-clisp","selector_eval_clisp",klipse.lang.clisp.opts);

//# sourceMappingURL=clisp.js.map

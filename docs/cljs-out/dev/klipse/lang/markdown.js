// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.markdown');
goog.require('cljs.core');
goog.require('klipse.common.registry');
klipse.lang.markdown.str_eval_async = (function klipse$lang$markdown$str_eval_async(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32807){
var state_val_32808 = (state_32807[(1)]);
if((state_val_32808 === (1))){
var inst_32805 = markdown.toHTML(exp);
var state_32807__$1 = state_32807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32807__$1,inst_32805);
} else {
return null;
}
});
return (function() {
var klipse$lang$markdown$str_eval_async_$_state_machine__15523__auto__ = null;
var klipse$lang$markdown$str_eval_async_$_state_machine__15523__auto____0 = (function (){
var statearr_32809 = [null,null,null,null,null,null,null];
(statearr_32809[(0)] = klipse$lang$markdown$str_eval_async_$_state_machine__15523__auto__);

(statearr_32809[(1)] = (1));

return statearr_32809;
});
var klipse$lang$markdown$str_eval_async_$_state_machine__15523__auto____1 = (function (state_32807){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32810){if((e32810 instanceof Object)){
var ex__15526__auto__ = e32810;
var statearr_32811_32813 = state_32807;
(statearr_32811_32813[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32814 = state_32807;
state_32807 = G__32814;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$markdown$str_eval_async_$_state_machine__15523__auto__ = function(state_32807){
switch(arguments.length){
case 0:
return klipse$lang$markdown$str_eval_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$markdown$str_eval_async_$_state_machine__15523__auto____1.call(this,state_32807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$markdown$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$markdown$str_eval_async_$_state_machine__15523__auto____0;
klipse$lang$markdown$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$markdown$str_eval_async_$_state_machine__15523__auto____1;
return klipse$lang$markdown$str_eval_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32812 = f__15620__auto__.call(null);
(statearr_32812[(6)] = c__15619__auto__);

return statearr_32812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.markdown.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"markdown",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"htmlmixed",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.scripts_src.call(null,"markdown.min.js?"),klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"css")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.markdown.str_eval_async,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"[comment]: "], null);
klipse.common.registry.register_mode.call(null,"eval-markdown","selector_eval_markdown",klipse.lang.markdown.opts);

//# sourceMappingURL=markdown.js.map
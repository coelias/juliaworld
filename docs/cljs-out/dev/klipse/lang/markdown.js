// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.markdown');
goog.require('cljs.core');
goog.require('klipse.common.registry');
klipse.lang.markdown.str_eval_async = (function klipse$lang$markdown$str_eval_async(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28608){
var state_val_28609 = (state_28608[(1)]);
if((state_val_28609 === (1))){
var inst_28606 = markdown.toHTML(exp);
var state_28608__$1 = state_28608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28608__$1,inst_28606);
} else {
return null;
}
});
return (function() {
var klipse$lang$markdown$str_eval_async_$_state_machine__13608__auto__ = null;
var klipse$lang$markdown$str_eval_async_$_state_machine__13608__auto____0 = (function (){
var statearr_28610 = [null,null,null,null,null,null,null];
(statearr_28610[(0)] = klipse$lang$markdown$str_eval_async_$_state_machine__13608__auto__);

(statearr_28610[(1)] = (1));

return statearr_28610;
});
var klipse$lang$markdown$str_eval_async_$_state_machine__13608__auto____1 = (function (state_28608){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28611){if((e28611 instanceof Object)){
var ex__13611__auto__ = e28611;
var statearr_28612_28614 = state_28608;
(statearr_28612_28614[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28615 = state_28608;
state_28608 = G__28615;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$markdown$str_eval_async_$_state_machine__13608__auto__ = function(state_28608){
switch(arguments.length){
case 0:
return klipse$lang$markdown$str_eval_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$markdown$str_eval_async_$_state_machine__13608__auto____1.call(this,state_28608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$markdown$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$markdown$str_eval_async_$_state_machine__13608__auto____0;
klipse$lang$markdown$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$markdown$str_eval_async_$_state_machine__13608__auto____1;
return klipse$lang$markdown$str_eval_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28613 = f__13705__auto__.call(null);
(statearr_28613[(6)] = c__13704__auto__);

return statearr_28613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.markdown.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"markdown",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"htmlmixed",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.scripts_src.call(null,"markdown.min.js?"),klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"css")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.markdown.str_eval_async,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"[comment]: "], null);
klipse.common.registry.register_mode.call(null,"eval-markdown","selector_eval_markdown",klipse.lang.markdown.opts);

//# sourceMappingURL=markdown.js.map

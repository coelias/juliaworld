// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.lambdaway');
goog.require('cljs.core');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.lambdaway.my_eval = (function klipse$lang$lambdaway$my_eval(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30595){
var state_val_30596 = (state_30595[(1)]);
if((state_val_30596 === (1))){
var inst_30586 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,LAMBDATALK,"evaluate");
var state_30595__$1 = state_30595;
if(inst_30586){
var statearr_30597_30605 = state_30595__$1;
(statearr_30597_30605[(1)] = (2));

} else {
var statearr_30598_30606 = state_30595__$1;
(statearr_30598_30606[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (2))){
var inst_30588 = (LAMBDATALK["evaluate"]);
var state_30595__$1 = state_30595;
var statearr_30599_30607 = state_30595__$1;
(statearr_30599_30607[(2)] = inst_30588);

(statearr_30599_30607[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (3))){
var state_30595__$1 = state_30595;
var statearr_30600_30608 = state_30595__$1;
(statearr_30600_30608[(2)] = null);

(statearr_30600_30608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30596 === (4))){
var inst_30591 = (state_30595[(2)]);
var inst_30592 = inst_30591.call(LAMBDATALK,exp);
var inst_30593 = (inst_30592["val"]);
var state_30595__$1 = state_30595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30595__$1,inst_30593);
} else {
return null;
}
}
}
}
});
return (function() {
var klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto__ = null;
var klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_30601 = [null,null,null,null,null,null,null];
(statearr_30601[(0)] = klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto__);

(statearr_30601[(1)] = (1));

return statearr_30601;
});
var klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto____1 = (function (state_30595){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30602){if((e30602 instanceof Object)){
var ex__15526__auto__ = e30602;
var statearr_30603_30609 = state_30595;
(statearr_30603_30609[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30610 = state_30595;
state_30595 = G__30610;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto__ = function(state_30595){
switch(arguments.length){
case 0:
return klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto____1.call(this,state_30595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto____0;
klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto____1;
return klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30604 = f__15620__auto__.call(null);
(statearr_30604[(6)] = c__15619__auto__);

return statearr_30604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.lambdaway.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.lambdaway.my_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.scripts_src.call(null,"lambdaway_eval.js"),klipse.common.registry.codemirror_mode_src.call(null,"clojure")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"[comment]: "], null);
klipse.common.registry.register_mode.call(null,"eval-lambdaway","selector_eval_lambdaway",klipse.lang.lambdaway.opts);

//# sourceMappingURL=lambdaway.js.map

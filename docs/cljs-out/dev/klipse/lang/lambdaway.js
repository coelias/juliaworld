// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.lambdaway');
goog.require('cljs.core');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.lambdaway.my_eval = (function klipse$lang$lambdaway$my_eval(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30182){
var state_val_30183 = (state_30182[(1)]);
if((state_val_30183 === (1))){
var inst_30173 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,LAMBDATALK,"evaluate");
var state_30182__$1 = state_30182;
if(inst_30173){
var statearr_30184_30192 = state_30182__$1;
(statearr_30184_30192[(1)] = (2));

} else {
var statearr_30185_30193 = state_30182__$1;
(statearr_30185_30193[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (2))){
var inst_30175 = (LAMBDATALK["evaluate"]);
var state_30182__$1 = state_30182;
var statearr_30186_30194 = state_30182__$1;
(statearr_30186_30194[(2)] = inst_30175);

(statearr_30186_30194[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (3))){
var state_30182__$1 = state_30182;
var statearr_30187_30195 = state_30182__$1;
(statearr_30187_30195[(2)] = null);

(statearr_30187_30195[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (4))){
var inst_30178 = (state_30182[(2)]);
var inst_30179 = inst_30178.call(LAMBDATALK,exp);
var inst_30180 = (inst_30179["val"]);
var state_30182__$1 = state_30182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30182__$1,inst_30180);
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
var statearr_30188 = [null,null,null,null,null,null,null];
(statearr_30188[(0)] = klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto__);

(statearr_30188[(1)] = (1));

return statearr_30188;
});
var klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto____1 = (function (state_30182){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30189){if((e30189 instanceof Object)){
var ex__15526__auto__ = e30189;
var statearr_30190_30196 = state_30182;
(statearr_30190_30196[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30197 = state_30182;
state_30182 = G__30197;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto__ = function(state_30182){
switch(arguments.length){
case 0:
return klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto____1.call(this,state_30182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto____0;
klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto____1;
return klipse$lang$lambdaway$my_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30191 = f__15620__auto__.call(null);
(statearr_30191[(6)] = c__15619__auto__);

return statearr_30191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.lambdaway.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.lambdaway.my_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.scripts_src.call(null,"lambdaway_eval.js"),klipse.common.registry.codemirror_mode_src.call(null,"clojure")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"[comment]: "], null);
klipse.common.registry.register_mode.call(null,"eval-lambdaway","selector_eval_lambdaway",klipse.lang.lambdaway.opts);

//# sourceMappingURL=lambdaway.js.map

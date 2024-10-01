// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.lambdaway');
goog.require('cljs.core');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.lambdaway.my_eval = (function klipse$lang$lambdaway$my_eval(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_21411){
var state_val_21412 = (state_21411[(1)]);
if((state_val_21412 === (1))){
var inst_21402 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,LAMBDATALK,"evaluate");
var state_21411__$1 = state_21411;
if(inst_21402){
var statearr_21413_21421 = state_21411__$1;
(statearr_21413_21421[(1)] = (2));

} else {
var statearr_21414_21422 = state_21411__$1;
(statearr_21414_21422[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21412 === (2))){
var inst_21404 = (LAMBDATALK["evaluate"]);
var state_21411__$1 = state_21411;
var statearr_21415_21423 = state_21411__$1;
(statearr_21415_21423[(2)] = inst_21404);

(statearr_21415_21423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21412 === (3))){
var state_21411__$1 = state_21411;
var statearr_21416_21424 = state_21411__$1;
(statearr_21416_21424[(2)] = null);

(statearr_21416_21424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21412 === (4))){
var inst_21407 = (state_21411[(2)]);
var inst_21408 = inst_21407.call(LAMBDATALK,exp);
var inst_21409 = (inst_21408["val"]);
var state_21411__$1 = state_21411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21411__$1,inst_21409);
} else {
return null;
}
}
}
}
});
return (function() {
var klipse$lang$lambdaway$my_eval_$_state_machine__13608__auto__ = null;
var klipse$lang$lambdaway$my_eval_$_state_machine__13608__auto____0 = (function (){
var statearr_21417 = [null,null,null,null,null,null,null];
(statearr_21417[(0)] = klipse$lang$lambdaway$my_eval_$_state_machine__13608__auto__);

(statearr_21417[(1)] = (1));

return statearr_21417;
});
var klipse$lang$lambdaway$my_eval_$_state_machine__13608__auto____1 = (function (state_21411){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_21411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e21418){if((e21418 instanceof Object)){
var ex__13611__auto__ = e21418;
var statearr_21419_21425 = state_21411;
(statearr_21419_21425[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21426 = state_21411;
state_21411 = G__21426;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$lambdaway$my_eval_$_state_machine__13608__auto__ = function(state_21411){
switch(arguments.length){
case 0:
return klipse$lang$lambdaway$my_eval_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$lambdaway$my_eval_$_state_machine__13608__auto____1.call(this,state_21411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lambdaway$my_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lambdaway$my_eval_$_state_machine__13608__auto____0;
klipse$lang$lambdaway$my_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lambdaway$my_eval_$_state_machine__13608__auto____1;
return klipse$lang$lambdaway$my_eval_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_21420 = f__13705__auto__.call(null);
(statearr_21420[(6)] = c__13704__auto__);

return statearr_21420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.lambdaway.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.lambdaway.my_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.scripts_src.call(null,"lambdaway_eval.js"),klipse.common.registry.codemirror_mode_src.call(null,"clojure")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"[comment]: "], null);
klipse.common.registry.register_mode.call(null,"eval-lambdaway","selector_eval_lambdaway",klipse.lang.lambdaway.opts);

//# sourceMappingURL=lambdaway.js.map

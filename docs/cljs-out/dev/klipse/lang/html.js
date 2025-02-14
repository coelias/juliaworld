// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.html');
goog.require('cljs.core');
goog.require('klipse.common.registry');
klipse.lang.html.my_eval = (function klipse$lang$html$my_eval(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_33445){
var state_val_33446 = (state_33445[(1)]);
if((state_val_33446 === (1))){
var state_33445__$1 = state_33445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33445__$1,exp);
} else {
return null;
}
});
return (function() {
var klipse$lang$html$my_eval_$_state_machine__15523__auto__ = null;
var klipse$lang$html$my_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_33447 = [null,null,null,null,null,null,null];
(statearr_33447[(0)] = klipse$lang$html$my_eval_$_state_machine__15523__auto__);

(statearr_33447[(1)] = (1));

return statearr_33447;
});
var klipse$lang$html$my_eval_$_state_machine__15523__auto____1 = (function (state_33445){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_33445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e33448){if((e33448 instanceof Object)){
var ex__15526__auto__ = e33448;
var statearr_33449_33451 = state_33445;
(statearr_33449_33451[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33452 = state_33445;
state_33445 = G__33452;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$html$my_eval_$_state_machine__15523__auto__ = function(state_33445){
switch(arguments.length){
case 0:
return klipse$lang$html$my_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$html$my_eval_$_state_machine__15523__auto____1.call(this,state_33445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$html$my_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$html$my_eval_$_state_machine__15523__auto____0;
klipse$lang$html$my_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$html$my_eval_$_state_machine__15523__auto____1;
return klipse$lang$html$my_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_33450 = f__15620__auto__.call(null);
(statearr_33450[(6)] = c__15619__auto__);

return statearr_33450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.html.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/html",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.html.my_eval,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"; "], null);
klipse.common.registry.register_mode.call(null,"eval-html","selector_eval_html",klipse.lang.html.opts);

//# sourceMappingURL=html.js.map

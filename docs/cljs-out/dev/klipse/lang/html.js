// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.html');
goog.require('cljs.core');
goog.require('klipse.common.registry');
klipse.lang.html.my_eval = (function klipse$lang$html$my_eval(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_33122){
var state_val_33123 = (state_33122[(1)]);
if((state_val_33123 === (1))){
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33122__$1,exp);
} else {
return null;
}
});
return (function() {
var klipse$lang$html$my_eval_$_state_machine__15523__auto__ = null;
var klipse$lang$html$my_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_33124 = [null,null,null,null,null,null,null];
(statearr_33124[(0)] = klipse$lang$html$my_eval_$_state_machine__15523__auto__);

(statearr_33124[(1)] = (1));

return statearr_33124;
});
var klipse$lang$html$my_eval_$_state_machine__15523__auto____1 = (function (state_33122){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_33122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e33125){if((e33125 instanceof Object)){
var ex__15526__auto__ = e33125;
var statearr_33126_33128 = state_33122;
(statearr_33126_33128[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33129 = state_33122;
state_33122 = G__33129;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$html$my_eval_$_state_machine__15523__auto__ = function(state_33122){
switch(arguments.length){
case 0:
return klipse$lang$html$my_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$html$my_eval_$_state_machine__15523__auto____1.call(this,state_33122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$html$my_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$html$my_eval_$_state_machine__15523__auto____0;
klipse$lang$html$my_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$html$my_eval_$_state_machine__15523__auto____1;
return klipse$lang$html$my_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_33127 = f__15620__auto__.call(null);
(statearr_33127[(6)] = c__15619__auto__);

return statearr_33127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.html.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/html",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.html.my_eval,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"; "], null);
klipse.common.registry.register_mode.call(null,"eval-html","selector_eval_html",klipse.lang.html.opts);

//# sourceMappingURL=html.js.map

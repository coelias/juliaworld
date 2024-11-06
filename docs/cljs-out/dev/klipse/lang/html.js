// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.html');
goog.require('cljs.core');
goog.require('klipse.common.registry');
klipse.lang.html.my_eval = (function klipse$lang$html$my_eval(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_31520){
var state_val_31521 = (state_31520[(1)]);
if((state_val_31521 === (1))){
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31520__$1,exp);
} else {
return null;
}
});
return (function() {
var klipse$lang$html$my_eval_$_state_machine__13608__auto__ = null;
var klipse$lang$html$my_eval_$_state_machine__13608__auto____0 = (function (){
var statearr_31522 = [null,null,null,null,null,null,null];
(statearr_31522[(0)] = klipse$lang$html$my_eval_$_state_machine__13608__auto__);

(statearr_31522[(1)] = (1));

return statearr_31522;
});
var klipse$lang$html$my_eval_$_state_machine__13608__auto____1 = (function (state_31520){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_31520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e31523){if((e31523 instanceof Object)){
var ex__13611__auto__ = e31523;
var statearr_31524_31526 = state_31520;
(statearr_31524_31526[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31527 = state_31520;
state_31520 = G__31527;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$html$my_eval_$_state_machine__13608__auto__ = function(state_31520){
switch(arguments.length){
case 0:
return klipse$lang$html$my_eval_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$html$my_eval_$_state_machine__13608__auto____1.call(this,state_31520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$html$my_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$html$my_eval_$_state_machine__13608__auto____0;
klipse$lang$html$my_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$html$my_eval_$_state_machine__13608__auto____1;
return klipse$lang$html$my_eval_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_31525 = f__13705__auto__.call(null);
(statearr_31525[(6)] = c__13704__auto__);

return statearr_31525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.html.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/html",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.html.my_eval,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"; "], null);
klipse.common.registry.register_mode.call(null,"eval-html","selector_eval_html",klipse.lang.html.opts);

//# sourceMappingURL=html.js.map

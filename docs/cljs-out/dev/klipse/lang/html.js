// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.html');
goog.require('cljs.core');
goog.require('klipse.common.registry');
klipse.lang.html.my_eval = (function klipse$lang$html$my_eval(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28834){
var state_val_28835 = (state_28834[(1)]);
if((state_val_28835 === (1))){
var state_28834__$1 = state_28834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28834__$1,exp);
} else {
return null;
}
});
return (function() {
var klipse$lang$html$my_eval_$_state_machine__13608__auto__ = null;
var klipse$lang$html$my_eval_$_state_machine__13608__auto____0 = (function (){
var statearr_28836 = [null,null,null,null,null,null,null];
(statearr_28836[(0)] = klipse$lang$html$my_eval_$_state_machine__13608__auto__);

(statearr_28836[(1)] = (1));

return statearr_28836;
});
var klipse$lang$html$my_eval_$_state_machine__13608__auto____1 = (function (state_28834){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28837){if((e28837 instanceof Object)){
var ex__13611__auto__ = e28837;
var statearr_28838_28840 = state_28834;
(statearr_28838_28840[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28841 = state_28834;
state_28834 = G__28841;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$html$my_eval_$_state_machine__13608__auto__ = function(state_28834){
switch(arguments.length){
case 0:
return klipse$lang$html$my_eval_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$html$my_eval_$_state_machine__13608__auto____1.call(this,state_28834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$html$my_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$html$my_eval_$_state_machine__13608__auto____0;
klipse$lang$html$my_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$html$my_eval_$_state_machine__13608__auto____1;
return klipse$lang$html$my_eval_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28839 = f__13705__auto__.call(null);
(statearr_28839[(6)] = c__13704__auto__);

return statearr_28839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.html.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/html",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed")], null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.html.my_eval,new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"; "], null);
klipse.common.registry.register_mode.call(null,"eval-html","selector_eval_html",klipse.lang.html.opts);

//# sourceMappingURL=html.js.map

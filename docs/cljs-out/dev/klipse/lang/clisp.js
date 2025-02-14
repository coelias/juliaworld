// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.clisp');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.clisp.str_eval_async = (function klipse$lang$clisp$str_eval_async(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29271){
var state_val_29272 = (state_29271[(1)]);
if((state_val_29272 === (1))){
var state_29271__$1 = state_29271;
var statearr_29273_29284 = state_29271__$1;
(statearr_29273_29284[(2)] = null);

(statearr_29273_29284[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29272 === (2))){
var inst_29269 = (state_29271[(2)]);
var state_29271__$1 = state_29271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29271__$1,inst_29269);
} else {
if((state_val_29272 === (3))){
var inst_29251 = (state_29271[(2)]);
var inst_29252 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29251);
var state_29271__$1 = state_29271;
var statearr_29274_29285 = state_29271__$1;
(statearr_29274_29285[(2)] = inst_29252);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29271__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29272 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29271,(3),Object,null,(2));
var inst_29260 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,jscl,"evaluateString");
var state_29271__$1 = state_29271;
if(inst_29260){
var statearr_29275_29286 = state_29271__$1;
(statearr_29275_29286[(1)] = (5));

} else {
var statearr_29276_29287 = state_29271__$1;
(statearr_29276_29287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29272 === (5))){
var inst_29262 = (jscl["evaluateString"]);
var state_29271__$1 = state_29271;
var statearr_29277_29288 = state_29271__$1;
(statearr_29277_29288[(2)] = inst_29262);

(statearr_29277_29288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29272 === (6))){
var state_29271__$1 = state_29271;
var statearr_29278_29289 = state_29271__$1;
(statearr_29278_29289[(2)] = null);

(statearr_29278_29289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29272 === (7))){
var inst_29265 = (state_29271[(2)]);
var inst_29266 = inst_29265.call(jscl,exp);
var inst_29267 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29266);
var state_29271__$1 = state_29271;
var statearr_29279_29290 = state_29271__$1;
(statearr_29279_29290[(2)] = inst_29267);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29271__$1);

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
var statearr_29280 = [null,null,null,null,null,null,null];
(statearr_29280[(0)] = klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto__);

(statearr_29280[(1)] = (1));

return statearr_29280;
});
var klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto____1 = (function (state_29271){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29281){if((e29281 instanceof Object)){
var ex__15526__auto__ = e29281;
var statearr_29282_29291 = state_29271;
(statearr_29282_29291[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29292 = state_29271;
state_29271 = G__29292;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto__ = function(state_29271){
switch(arguments.length){
case 0:
return klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto____1.call(this,state_29271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto____0;
klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto____1;
return klipse$lang$clisp$str_eval_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29283 = f__15620__auto__.call(null);
(statearr_29283[(6)] = c__15619__auto__);

return statearr_29283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.clisp.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-common-lisp",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-common-lisp",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.clisp.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"commonlisp"),klipse.common.registry.scripts_src.call(null,"jscl.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"eval-clisp","selector_eval_clisp",klipse.lang.clisp.opts);

//# sourceMappingURL=clisp.js.map

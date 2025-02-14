// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.js_compile');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
klipse.lang.js_compile.advanced_compile = (function klipse$lang$js_compile$advanced_compile(code){
var flags = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsCode","jsCode",-574022139),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),code], null)], null),new cljs.core.Keyword(null,"compilationLevel","compilationLevel",-1778317460),"ADVANCED"], null));
var _ = console.log(flags);
var map__33499 = cljs.core.js__GT_clj.call(null,compile(flags),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__33499__$1 = cljs.core.__destructure_map.call(null,map__33499);
var compiledCode = cljs.core.get.call(null,map__33499__$1,new cljs.core.Keyword(null,"compiledCode","compiledCode",-1391179489));
var errors = cljs.core.get.call(null,map__33499__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var warnings = cljs.core.get.call(null,map__33499__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.seq.call(null,errors)){
return ["//errors during compilation:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,errors)))].join('');
} else {
return compiledCode;
}
});
klipse.lang.js_compile.str_compile_js_async = (function klipse$lang$js_compile$str_compile_js_async(exp,_){
var c = cljs.core.async.chan.call(null);
var c__15619__auto___33517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_33509){
var state_val_33510 = (state_33509[(1)]);
if((state_val_33510 === (1))){
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33509__$1,(2),c,"//compiling...\n");
} else {
if((state_val_33510 === (2))){
var inst_33501 = (state_33509[(2)]);
var inst_33502 = cljs.core.async.timeout.call(null,(0));
var state_33509__$1 = (function (){var statearr_33511 = state_33509;
(statearr_33511[(7)] = inst_33501);

return statearr_33511;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33509__$1,(3),inst_33502);
} else {
if((state_val_33510 === (3))){
var inst_33504 = (state_33509[(2)]);
var inst_33505 = klipse.lang.js_compile.advanced_compile.call(null,exp);
var state_33509__$1 = (function (){var statearr_33512 = state_33509;
(statearr_33512[(8)] = inst_33504);

return statearr_33512;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33509__$1,(4),c,inst_33505);
} else {
if((state_val_33510 === (4))){
var inst_33507 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33509__$1,inst_33507);
} else {
return null;
}
}
}
}
});
return (function() {
var klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto__ = null;
var klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto____0 = (function (){
var statearr_33513 = [null,null,null,null,null,null,null,null,null];
(statearr_33513[(0)] = klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto__);

(statearr_33513[(1)] = (1));

return statearr_33513;
});
var klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto____1 = (function (state_33509){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_33509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e33514){if((e33514 instanceof Object)){
var ex__15526__auto__ = e33514;
var statearr_33515_33518 = state_33509;
(statearr_33515_33518[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33519 = state_33509;
state_33509 = G__33519;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto__ = function(state_33509){
switch(arguments.length){
case 0:
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto____1.call(this,state_33509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto____0;
klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto____1;
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_33516 = f__15620__auto__.call(null);
(statearr_33516[(6)] = c__15619__auto___33517);

return statearr_33516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return c;
});
klipse.lang.js_compile.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.js_compile.str_compile_js_async,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(5000),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"compile-javascript","selector_compile_js",klipse.lang.js_compile.opts);

//# sourceMappingURL=js_compile.js.map

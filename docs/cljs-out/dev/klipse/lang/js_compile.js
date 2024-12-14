// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.js_compile');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
klipse.lang.js_compile.advanced_compile = (function klipse$lang$js_compile$advanced_compile(code){
var flags = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsCode","jsCode",-574022139),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),code], null)], null),new cljs.core.Keyword(null,"compilationLevel","compilationLevel",-1778317460),"ADVANCED"], null));
var _ = console.log(flags);
var map__33087 = cljs.core.js__GT_clj.call(null,compile(flags),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__33087__$1 = cljs.core.__destructure_map.call(null,map__33087);
var compiledCode = cljs.core.get.call(null,map__33087__$1,new cljs.core.Keyword(null,"compiledCode","compiledCode",-1391179489));
var errors = cljs.core.get.call(null,map__33087__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var warnings = cljs.core.get.call(null,map__33087__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.seq.call(null,errors)){
return ["//errors during compilation:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,errors)))].join('');
} else {
return compiledCode;
}
});
klipse.lang.js_compile.str_compile_js_async = (function klipse$lang$js_compile$str_compile_js_async(exp,_){
var c = cljs.core.async.chan.call(null);
var c__15619__auto___33105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_33097){
var state_val_33098 = (state_33097[(1)]);
if((state_val_33098 === (1))){
var state_33097__$1 = state_33097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33097__$1,(2),c,"//compiling...\n");
} else {
if((state_val_33098 === (2))){
var inst_33089 = (state_33097[(2)]);
var inst_33090 = cljs.core.async.timeout.call(null,(0));
var state_33097__$1 = (function (){var statearr_33099 = state_33097;
(statearr_33099[(7)] = inst_33089);

return statearr_33099;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33097__$1,(3),inst_33090);
} else {
if((state_val_33098 === (3))){
var inst_33092 = (state_33097[(2)]);
var inst_33093 = klipse.lang.js_compile.advanced_compile.call(null,exp);
var state_33097__$1 = (function (){var statearr_33100 = state_33097;
(statearr_33100[(8)] = inst_33092);

return statearr_33100;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33097__$1,(4),c,inst_33093);
} else {
if((state_val_33098 === (4))){
var inst_33095 = (state_33097[(2)]);
var state_33097__$1 = state_33097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33097__$1,inst_33095);
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
var statearr_33101 = [null,null,null,null,null,null,null,null,null];
(statearr_33101[(0)] = klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto__);

(statearr_33101[(1)] = (1));

return statearr_33101;
});
var klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto____1 = (function (state_33097){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_33097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e33102){if((e33102 instanceof Object)){
var ex__15526__auto__ = e33102;
var statearr_33103_33106 = state_33097;
(statearr_33103_33106[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33107 = state_33097;
state_33097 = G__33107;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto__ = function(state_33097){
switch(arguments.length){
case 0:
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto____1.call(this,state_33097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto____0;
klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto____1;
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_33104 = f__15620__auto__.call(null);
(statearr_33104[(6)] = c__15619__auto___33105);

return statearr_33104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return c;
});
klipse.lang.js_compile.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.js_compile.str_compile_js_async,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(5000),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"compile-javascript","selector_compile_js",klipse.lang.js_compile.opts);

//# sourceMappingURL=js_compile.js.map

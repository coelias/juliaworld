// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.js_compile');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
klipse.lang.js_compile.advanced_compile = (function klipse$lang$js_compile$advanced_compile(code){
var flags = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsCode","jsCode",-574022139),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),code], null)], null),new cljs.core.Keyword(null,"compilationLevel","compilationLevel",-1778317460),"ADVANCED"], null));
var _ = console.log(flags);
var map__28888 = cljs.core.js__GT_clj.call(null,compile(flags),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__28888__$1 = cljs.core.__destructure_map.call(null,map__28888);
var compiledCode = cljs.core.get.call(null,map__28888__$1,new cljs.core.Keyword(null,"compiledCode","compiledCode",-1391179489));
var errors = cljs.core.get.call(null,map__28888__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var warnings = cljs.core.get.call(null,map__28888__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.seq.call(null,errors)){
return ["//errors during compilation:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,errors)))].join('');
} else {
return compiledCode;
}
});
klipse.lang.js_compile.str_compile_js_async = (function klipse$lang$js_compile$str_compile_js_async(exp,_){
var c = cljs.core.async.chan.call(null);
var c__13704__auto___28906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28898){
var state_val_28899 = (state_28898[(1)]);
if((state_val_28899 === (1))){
var state_28898__$1 = state_28898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28898__$1,(2),c,"//compiling...\n");
} else {
if((state_val_28899 === (2))){
var inst_28890 = (state_28898[(2)]);
var inst_28891 = cljs.core.async.timeout.call(null,(0));
var state_28898__$1 = (function (){var statearr_28900 = state_28898;
(statearr_28900[(7)] = inst_28890);

return statearr_28900;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28898__$1,(3),inst_28891);
} else {
if((state_val_28899 === (3))){
var inst_28893 = (state_28898[(2)]);
var inst_28894 = klipse.lang.js_compile.advanced_compile.call(null,exp);
var state_28898__$1 = (function (){var statearr_28901 = state_28898;
(statearr_28901[(8)] = inst_28893);

return statearr_28901;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28898__$1,(4),c,inst_28894);
} else {
if((state_val_28899 === (4))){
var inst_28896 = (state_28898[(2)]);
var state_28898__$1 = state_28898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28898__$1,inst_28896);
} else {
return null;
}
}
}
}
});
return (function() {
var klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto__ = null;
var klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto____0 = (function (){
var statearr_28902 = [null,null,null,null,null,null,null,null,null];
(statearr_28902[(0)] = klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto__);

(statearr_28902[(1)] = (1));

return statearr_28902;
});
var klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto____1 = (function (state_28898){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28903){if((e28903 instanceof Object)){
var ex__13611__auto__ = e28903;
var statearr_28904_28907 = state_28898;
(statearr_28904_28907[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28908 = state_28898;
state_28898 = G__28908;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto__ = function(state_28898){
switch(arguments.length){
case 0:
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto____1.call(this,state_28898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto____0;
klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto____1;
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28905 = f__13705__auto__.call(null);
(statearr_28905[(6)] = c__13704__auto___28906);

return statearr_28905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return c;
});
klipse.lang.js_compile.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.js_compile.str_compile_js_async,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(5000),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"compile-javascript","selector_compile_js",klipse.lang.js_compile.opts);

//# sourceMappingURL=js_compile.js.map

// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.js_compile');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
klipse.lang.js_compile.advanced_compile = (function klipse$lang$js_compile$advanced_compile(code){
var flags = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsCode","jsCode",-574022139),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),code], null)], null),new cljs.core.Keyword(null,"compilationLevel","compilationLevel",-1778317460),"ADVANCED"], null));
var _ = console.log(flags);
var map__31574 = cljs.core.js__GT_clj.call(null,compile(flags),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__31574__$1 = cljs.core.__destructure_map.call(null,map__31574);
var compiledCode = cljs.core.get.call(null,map__31574__$1,new cljs.core.Keyword(null,"compiledCode","compiledCode",-1391179489));
var errors = cljs.core.get.call(null,map__31574__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var warnings = cljs.core.get.call(null,map__31574__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.seq.call(null,errors)){
return ["//errors during compilation:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,errors)))].join('');
} else {
return compiledCode;
}
});
klipse.lang.js_compile.str_compile_js_async = (function klipse$lang$js_compile$str_compile_js_async(exp,_){
var c = cljs.core.async.chan.call(null);
var c__13704__auto___31592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_31584){
var state_val_31585 = (state_31584[(1)]);
if((state_val_31585 === (1))){
var state_31584__$1 = state_31584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31584__$1,(2),c,"//compiling...\n");
} else {
if((state_val_31585 === (2))){
var inst_31576 = (state_31584[(2)]);
var inst_31577 = cljs.core.async.timeout.call(null,(0));
var state_31584__$1 = (function (){var statearr_31586 = state_31584;
(statearr_31586[(7)] = inst_31576);

return statearr_31586;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31584__$1,(3),inst_31577);
} else {
if((state_val_31585 === (3))){
var inst_31579 = (state_31584[(2)]);
var inst_31580 = klipse.lang.js_compile.advanced_compile.call(null,exp);
var state_31584__$1 = (function (){var statearr_31587 = state_31584;
(statearr_31587[(8)] = inst_31579);

return statearr_31587;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31584__$1,(4),c,inst_31580);
} else {
if((state_val_31585 === (4))){
var inst_31582 = (state_31584[(2)]);
var state_31584__$1 = state_31584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31584__$1,inst_31582);
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
var statearr_31588 = [null,null,null,null,null,null,null,null,null];
(statearr_31588[(0)] = klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto__);

(statearr_31588[(1)] = (1));

return statearr_31588;
});
var klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto____1 = (function (state_31584){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_31584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e31589){if((e31589 instanceof Object)){
var ex__13611__auto__ = e31589;
var statearr_31590_31593 = state_31584;
(statearr_31590_31593[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31594 = state_31584;
state_31584 = G__31594;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto__ = function(state_31584){
switch(arguments.length){
case 0:
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto____1.call(this,state_31584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto____0;
klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto____1;
return klipse$lang$js_compile$str_compile_js_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_31591 = f__13705__auto__.call(null);
(statearr_31591[(6)] = c__13704__auto___31592);

return statearr_31591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return c;
});
klipse.lang.js_compile.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.js_compile.str_compile_js_async,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(5000),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"compile-javascript","selector_compile_js",klipse.lang.js_compile.opts);

//# sourceMappingURL=js_compile.js.map

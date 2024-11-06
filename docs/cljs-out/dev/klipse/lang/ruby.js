// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.ruby');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.ruby.load_opal_parser = (function klipse$lang$ruby$load_opal_parser(){
var obj__17203__auto__ = Opal;
var f__17204__auto__ = (function (){var obj23938 = obj__17203__auto__;
var k23939 = "load";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23938,k23939)){
return (obj23938[k23939]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,"opal-parser");
});
klipse.lang.ruby.load_opal_parser_once = klipse.utils.runonce.call(null,klipse.lang.ruby.load_opal_parser);
klipse.lang.ruby.str_eval_async = (function klipse$lang$ruby$str_eval_async(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_23960){
var state_val_23961 = (state_23960[(1)]);
if((state_val_23961 === (1))){
var inst_23940 = klipse.lang.ruby.load_opal_parser_once.call(null);
var state_23960__$1 = (function (){var statearr_23962 = state_23960;
(statearr_23962[(7)] = inst_23940);

return statearr_23962;
})();
var statearr_23963_23974 = state_23960__$1;
(statearr_23963_23974[(2)] = null);

(statearr_23963_23974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (2))){
var inst_23958 = (state_23960[(2)]);
var state_23960__$1 = state_23960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23960__$1,inst_23958);
} else {
if((state_val_23961 === (3))){
var inst_23941 = (state_23960[(2)]);
var inst_23942 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23941);
var state_23960__$1 = state_23960;
var statearr_23964_23975 = state_23960__$1;
(statearr_23964_23975[(2)] = inst_23942);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23960__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23960,(3),Object,null,(2));
var inst_23948 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,Opal,"eval");
var state_23960__$1 = state_23960;
if(inst_23948){
var statearr_23965_23976 = state_23960__$1;
(statearr_23965_23976[(1)] = (5));

} else {
var statearr_23966_23977 = state_23960__$1;
(statearr_23966_23977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (5))){
var inst_23950 = (Opal["eval"]);
var state_23960__$1 = state_23960;
var statearr_23967_23978 = state_23960__$1;
(statearr_23967_23978[(2)] = inst_23950);

(statearr_23967_23978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (6))){
var state_23960__$1 = state_23960;
var statearr_23968_23979 = state_23960__$1;
(statearr_23968_23979[(2)] = null);

(statearr_23968_23979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23961 === (7))){
var inst_23953 = (state_23960[(2)]);
var inst_23954 = inst_23953.call(Opal,exp);
var inst_23955 = (inst_23954["$inspect"]);
var inst_23956 = inst_23955.apply(inst_23954);
var state_23960__$1 = state_23960;
var statearr_23969_23980 = state_23960__$1;
(statearr_23969_23980[(2)] = inst_23956);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23960__$1);

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
var klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto__ = null;
var klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto____0 = (function (){
var statearr_23970 = [null,null,null,null,null,null,null,null];
(statearr_23970[(0)] = klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto__);

(statearr_23970[(1)] = (1));

return statearr_23970;
});
var klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto____1 = (function (state_23960){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_23960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e23971){if((e23971 instanceof Object)){
var ex__13611__auto__ = e23971;
var statearr_23972_23981 = state_23960;
(statearr_23972_23981[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23982 = state_23960;
state_23960 = G__23982;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto__ = function(state_23960){
switch(arguments.length){
case 0:
return klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto____1.call(this,state_23960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto____0;
klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto____1;
return klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_23973 = f__13705__auto__.call(null);
(statearr_23973[(6)] = c__13704__auto__);

return statearr_23973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.ruby.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"ruby",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"ruby",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.ruby.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"ruby"),klipse.common.registry.scripts_src.call(null,"opal.min.js?p"),klipse.common.registry.scripts_src.call(null,"opal-parser.min.js?p")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null);
klipse.common.registry.register_mode.call(null,"eval-ruby","selector_eval_ruby",klipse.lang.ruby.opts);

//# sourceMappingURL=ruby.js.map

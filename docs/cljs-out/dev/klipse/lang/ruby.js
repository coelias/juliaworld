// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.ruby');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.ruby.load_opal_parser = (function klipse$lang$ruby$load_opal_parser(){
var obj__20025__auto__ = Opal;
var f__20026__auto__ = (function (){var obj29554 = obj__20025__auto__;
var k29555 = "load";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29554,k29555)){
return (obj29554[k29555]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,"opal-parser");
});
klipse.lang.ruby.load_opal_parser_once = klipse.utils.runonce.call(null,klipse.lang.ruby.load_opal_parser);
klipse.lang.ruby.str_eval_async = (function klipse$lang$ruby$str_eval_async(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29576){
var state_val_29577 = (state_29576[(1)]);
if((state_val_29577 === (1))){
var inst_29556 = klipse.lang.ruby.load_opal_parser_once.call(null);
var state_29576__$1 = (function (){var statearr_29578 = state_29576;
(statearr_29578[(7)] = inst_29556);

return statearr_29578;
})();
var statearr_29579_29590 = state_29576__$1;
(statearr_29579_29590[(2)] = null);

(statearr_29579_29590[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (2))){
var inst_29574 = (state_29576[(2)]);
var state_29576__$1 = state_29576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29576__$1,inst_29574);
} else {
if((state_val_29577 === (3))){
var inst_29557 = (state_29576[(2)]);
var inst_29558 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29557);
var state_29576__$1 = state_29576;
var statearr_29580_29591 = state_29576__$1;
(statearr_29580_29591[(2)] = inst_29558);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29576__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29576,(3),Object,null,(2));
var inst_29564 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,Opal,"eval");
var state_29576__$1 = state_29576;
if(inst_29564){
var statearr_29581_29592 = state_29576__$1;
(statearr_29581_29592[(1)] = (5));

} else {
var statearr_29582_29593 = state_29576__$1;
(statearr_29582_29593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (5))){
var inst_29566 = (Opal["eval"]);
var state_29576__$1 = state_29576;
var statearr_29583_29594 = state_29576__$1;
(statearr_29583_29594[(2)] = inst_29566);

(statearr_29583_29594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (6))){
var state_29576__$1 = state_29576;
var statearr_29584_29595 = state_29576__$1;
(statearr_29584_29595[(2)] = null);

(statearr_29584_29595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29577 === (7))){
var inst_29569 = (state_29576[(2)]);
var inst_29570 = inst_29569.call(Opal,exp);
var inst_29571 = (inst_29570["$inspect"]);
var inst_29572 = inst_29571.apply(inst_29570);
var state_29576__$1 = state_29576;
var statearr_29585_29596 = state_29576__$1;
(statearr_29585_29596[(2)] = inst_29572);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29576__$1);

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
var klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto__ = null;
var klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto____0 = (function (){
var statearr_29586 = [null,null,null,null,null,null,null,null];
(statearr_29586[(0)] = klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto__);

(statearr_29586[(1)] = (1));

return statearr_29586;
});
var klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto____1 = (function (state_29576){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29587){if((e29587 instanceof Object)){
var ex__15526__auto__ = e29587;
var statearr_29588_29597 = state_29576;
(statearr_29588_29597[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29598 = state_29576;
state_29576 = G__29598;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto__ = function(state_29576){
switch(arguments.length){
case 0:
return klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto____1.call(this,state_29576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto____0;
klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto____1;
return klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29589 = f__15620__auto__.call(null);
(statearr_29589[(6)] = c__15619__auto__);

return statearr_29589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.ruby.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"ruby",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"ruby",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.ruby.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"ruby"),klipse.common.registry.scripts_src.call(null,"opal.min.js?p"),klipse.common.registry.scripts_src.call(null,"opal-parser.min.js?p")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null);
klipse.common.registry.register_mode.call(null,"eval-ruby","selector_eval_ruby",klipse.lang.ruby.opts);

//# sourceMappingURL=ruby.js.map

// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.ruby');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.ruby.load_opal_parser = (function klipse$lang$ruby$load_opal_parser(){
var obj__20025__auto__ = Opal;
var f__20026__auto__ = (function (){var obj29141 = obj__20025__auto__;
var k29142 = "load";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29141,k29142)){
return (obj29141[k29142]);
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29163){
var state_val_29164 = (state_29163[(1)]);
if((state_val_29164 === (1))){
var inst_29143 = klipse.lang.ruby.load_opal_parser_once.call(null);
var state_29163__$1 = (function (){var statearr_29165 = state_29163;
(statearr_29165[(7)] = inst_29143);

return statearr_29165;
})();
var statearr_29166_29177 = state_29163__$1;
(statearr_29166_29177[(2)] = null);

(statearr_29166_29177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (2))){
var inst_29161 = (state_29163[(2)]);
var state_29163__$1 = state_29163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29163__$1,inst_29161);
} else {
if((state_val_29164 === (3))){
var inst_29144 = (state_29163[(2)]);
var inst_29145 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29144);
var state_29163__$1 = state_29163;
var statearr_29167_29178 = state_29163__$1;
(statearr_29167_29178[(2)] = inst_29145);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29163__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29163,(3),Object,null,(2));
var inst_29151 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,Opal,"eval");
var state_29163__$1 = state_29163;
if(inst_29151){
var statearr_29168_29179 = state_29163__$1;
(statearr_29168_29179[(1)] = (5));

} else {
var statearr_29169_29180 = state_29163__$1;
(statearr_29169_29180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (5))){
var inst_29153 = (Opal["eval"]);
var state_29163__$1 = state_29163;
var statearr_29170_29181 = state_29163__$1;
(statearr_29170_29181[(2)] = inst_29153);

(statearr_29170_29181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (6))){
var state_29163__$1 = state_29163;
var statearr_29171_29182 = state_29163__$1;
(statearr_29171_29182[(2)] = null);

(statearr_29171_29182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29164 === (7))){
var inst_29156 = (state_29163[(2)]);
var inst_29157 = inst_29156.call(Opal,exp);
var inst_29158 = (inst_29157["$inspect"]);
var inst_29159 = inst_29158.apply(inst_29157);
var state_29163__$1 = state_29163;
var statearr_29172_29183 = state_29163__$1;
(statearr_29172_29183[(2)] = inst_29159);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29163__$1);

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
var statearr_29173 = [null,null,null,null,null,null,null,null];
(statearr_29173[(0)] = klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto__);

(statearr_29173[(1)] = (1));

return statearr_29173;
});
var klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto____1 = (function (state_29163){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29174){if((e29174 instanceof Object)){
var ex__15526__auto__ = e29174;
var statearr_29175_29184 = state_29163;
(statearr_29175_29184[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29185 = state_29163;
state_29163 = G__29185;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto__ = function(state_29163){
switch(arguments.length){
case 0:
return klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto____1.call(this,state_29163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto____0;
klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto____1;
return klipse$lang$ruby$str_eval_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29176 = f__15620__auto__.call(null);
(statearr_29176[(6)] = c__15619__auto__);

return statearr_29176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.ruby.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"ruby",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"ruby",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.ruby.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"ruby"),klipse.common.registry.scripts_src.call(null,"opal.min.js?p"),klipse.common.registry.scripts_src.call(null,"opal-parser.min.js?p")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null);
klipse.common.registry.register_mode.call(null,"eval-ruby","selector_eval_ruby",klipse.lang.ruby.opts);

//# sourceMappingURL=ruby.js.map

// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.ruby');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.ruby.load_opal_parser = (function klipse$lang$ruby$load_opal_parser(){
var obj__17203__auto__ = Opal;
var f__17204__auto__ = (function (){var obj21252 = obj__17203__auto__;
var k21253 = "load";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21252,k21253)){
return (obj21252[k21253]);
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
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_21274){
var state_val_21275 = (state_21274[(1)]);
if((state_val_21275 === (1))){
var inst_21254 = klipse.lang.ruby.load_opal_parser_once.call(null);
var state_21274__$1 = (function (){var statearr_21276 = state_21274;
(statearr_21276[(7)] = inst_21254);

return statearr_21276;
})();
var statearr_21277_21288 = state_21274__$1;
(statearr_21277_21288[(2)] = null);

(statearr_21277_21288[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21275 === (2))){
var inst_21272 = (state_21274[(2)]);
var state_21274__$1 = state_21274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21274__$1,inst_21272);
} else {
if((state_val_21275 === (3))){
var inst_21255 = (state_21274[(2)]);
var inst_21256 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21255);
var state_21274__$1 = state_21274;
var statearr_21278_21289 = state_21274__$1;
(statearr_21278_21289[(2)] = inst_21256);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21274__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21275 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21274,(3),Object,null,(2));
var inst_21262 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,Opal,"eval");
var state_21274__$1 = state_21274;
if(inst_21262){
var statearr_21279_21290 = state_21274__$1;
(statearr_21279_21290[(1)] = (5));

} else {
var statearr_21280_21291 = state_21274__$1;
(statearr_21280_21291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21275 === (5))){
var inst_21264 = (Opal["eval"]);
var state_21274__$1 = state_21274;
var statearr_21281_21292 = state_21274__$1;
(statearr_21281_21292[(2)] = inst_21264);

(statearr_21281_21292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21275 === (6))){
var state_21274__$1 = state_21274;
var statearr_21282_21293 = state_21274__$1;
(statearr_21282_21293[(2)] = null);

(statearr_21282_21293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21275 === (7))){
var inst_21267 = (state_21274[(2)]);
var inst_21268 = inst_21267.call(Opal,exp);
var inst_21269 = (inst_21268["$inspect"]);
var inst_21270 = inst_21269.apply(inst_21268);
var state_21274__$1 = state_21274;
var statearr_21283_21294 = state_21274__$1;
(statearr_21283_21294[(2)] = inst_21270);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21274__$1);

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
var statearr_21284 = [null,null,null,null,null,null,null,null];
(statearr_21284[(0)] = klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto__);

(statearr_21284[(1)] = (1));

return statearr_21284;
});
var klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto____1 = (function (state_21274){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_21274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e21285){if((e21285 instanceof Object)){
var ex__13611__auto__ = e21285;
var statearr_21286_21295 = state_21274;
(statearr_21286_21295[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21296 = state_21274;
state_21274 = G__21296;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto__ = function(state_21274){
switch(arguments.length){
case 0:
return klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto____1.call(this,state_21274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto____0;
klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto____1;
return klipse$lang$ruby$str_eval_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_21287 = f__13705__auto__.call(null);
(statearr_21287[(6)] = c__13704__auto__);

return statearr_21287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.ruby.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"ruby",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"ruby",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.ruby.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"ruby"),klipse.common.registry.scripts_src.call(null,"opal.min.js?p"),klipse.common.registry.scripts_src.call(null,"opal-parser.min.js?p")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null);
klipse.common.registry.register_mode.call(null,"eval-ruby","selector_eval_ruby",klipse.lang.ruby.opts);

//# sourceMappingURL=ruby.js.map

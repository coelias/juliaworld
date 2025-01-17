// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.php');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.php.load_php_engine = (function klipse$lang$php$load_php_engine(){
var obj__20025__auto__ = uniter;
var f__20026__auto__ = (function (){var obj30203 = obj__20025__auto__;
var k30204 = "createEngine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30203,k30204)){
return (obj30203[k30204]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,"PHP");
});
klipse.lang.php.execute = (function klipse$lang$php$execute(engine,input){
var obj__20025__auto__ = engine;
var f__20026__auto__ = (function (){var obj30205 = obj__20025__auto__;
var k30206 = "execute";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30205,k30206)){
return (obj30205[k30206]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,input);
});
klipse.lang.php.str_eval_async = (function klipse$lang$php$str_eval_async(exp,_){
var c = cljs.core.async.chan.call(null);
var php_exp = ["<?php",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp)].join('');
var c__15619__auto___30277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30250){
var state_val_30251 = (state_30250[(1)]);
if((state_val_30251 === (7))){
var inst_30218 = (state_30250[(7)]);
var inst_30209 = (state_30250[(8)]);
var inst_30226 = (state_30250[(2)]);
var inst_30227 = (function (){var php_engine = inst_30209;
var $ = inst_30218;
var obj__20025__auto__ = inst_30218;
var f__20026__auto__ = inst_30226;
return (function (p1__30207_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30207_SHARP_));
});
})();
var inst_30228 = inst_30226.call(inst_30218,"data",inst_30227);
var inst_30231 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_30209,"getStdout");
var state_30250__$1 = (function (){var statearr_30252 = state_30250;
(statearr_30252[(9)] = inst_30228);

return statearr_30252;
})();
if(inst_30231){
var statearr_30253_30278 = state_30250__$1;
(statearr_30253_30278[(1)] = (8));

} else {
var statearr_30254_30279 = state_30250__$1;
(statearr_30254_30279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (1))){
var inst_30209 = (state_30250[(8)]);
var inst_30209__$1 = klipse.lang.php.load_php_engine.call(null);
var inst_30212 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_30209__$1,"getStderr");
var state_30250__$1 = (function (){var statearr_30255 = state_30250;
(statearr_30255[(8)] = inst_30209__$1);

return statearr_30255;
})();
if(inst_30212){
var statearr_30256_30280 = state_30250__$1;
(statearr_30256_30280[(1)] = (2));

} else {
var statearr_30257_30281 = state_30250__$1;
(statearr_30257_30281[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (4))){
var inst_30218 = (state_30250[(7)]);
var inst_30209 = (state_30250[(8)]);
var inst_30217 = (state_30250[(2)]);
var inst_30218__$1 = inst_30217.call(inst_30209);
var inst_30221 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_30218__$1,"on");
var state_30250__$1 = (function (){var statearr_30258 = state_30250;
(statearr_30258[(7)] = inst_30218__$1);

return statearr_30258;
})();
if(inst_30221){
var statearr_30259_30282 = state_30250__$1;
(statearr_30259_30282[(1)] = (5));

} else {
var statearr_30260_30283 = state_30250__$1;
(statearr_30260_30283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (13))){
var inst_30209 = (state_30250[(8)]);
var inst_30237 = (state_30250[(10)]);
var inst_30245 = (state_30250[(2)]);
var inst_30246 = (function (){var php_engine = inst_30209;
var $ = inst_30237;
var obj__20025__auto__ = inst_30237;
var f__20026__auto__ = inst_30245;
return (function (p1__30208_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30208_SHARP_));
});
})();
var inst_30247 = inst_30245.call(inst_30237,"data",inst_30246);
var inst_30248 = klipse.lang.php.execute.call(null,inst_30209,php_exp);
var state_30250__$1 = (function (){var statearr_30261 = state_30250;
(statearr_30261[(11)] = inst_30247);

return statearr_30261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30250__$1,inst_30248);
} else {
if((state_val_30251 === (6))){
var state_30250__$1 = state_30250;
var statearr_30262_30284 = state_30250__$1;
(statearr_30262_30284[(2)] = null);

(statearr_30262_30284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (3))){
var state_30250__$1 = state_30250;
var statearr_30263_30285 = state_30250__$1;
(statearr_30263_30285[(2)] = null);

(statearr_30263_30285[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (12))){
var state_30250__$1 = state_30250;
var statearr_30264_30286 = state_30250__$1;
(statearr_30264_30286[(2)] = null);

(statearr_30264_30286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (2))){
var inst_30209 = (state_30250[(8)]);
var inst_30214 = (inst_30209["getStderr"]);
var state_30250__$1 = state_30250;
var statearr_30265_30287 = state_30250__$1;
(statearr_30265_30287[(2)] = inst_30214);

(statearr_30265_30287[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (11))){
var inst_30237 = (state_30250[(10)]);
var inst_30242 = (inst_30237["on"]);
var state_30250__$1 = state_30250;
var statearr_30266_30288 = state_30250__$1;
(statearr_30266_30288[(2)] = inst_30242);

(statearr_30266_30288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (9))){
var state_30250__$1 = state_30250;
var statearr_30267_30289 = state_30250__$1;
(statearr_30267_30289[(2)] = null);

(statearr_30267_30289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (5))){
var inst_30218 = (state_30250[(7)]);
var inst_30223 = (inst_30218["on"]);
var state_30250__$1 = state_30250;
var statearr_30268_30290 = state_30250__$1;
(statearr_30268_30290[(2)] = inst_30223);

(statearr_30268_30290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (10))){
var inst_30209 = (state_30250[(8)]);
var inst_30237 = (state_30250[(10)]);
var inst_30236 = (state_30250[(2)]);
var inst_30237__$1 = inst_30236.call(inst_30209);
var inst_30240 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_30237__$1,"on");
var state_30250__$1 = (function (){var statearr_30269 = state_30250;
(statearr_30269[(10)] = inst_30237__$1);

return statearr_30269;
})();
if(inst_30240){
var statearr_30270_30291 = state_30250__$1;
(statearr_30270_30291[(1)] = (11));

} else {
var statearr_30271_30292 = state_30250__$1;
(statearr_30271_30292[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30251 === (8))){
var inst_30209 = (state_30250[(8)]);
var inst_30233 = (inst_30209["getStdout"]);
var state_30250__$1 = state_30250;
var statearr_30272_30293 = state_30250__$1;
(statearr_30272_30293[(2)] = inst_30233);

(statearr_30272_30293[(1)] = (10));


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
}
}
}
}
}
}
});
return (function() {
var klipse$lang$php$str_eval_async_$_state_machine__15523__auto__ = null;
var klipse$lang$php$str_eval_async_$_state_machine__15523__auto____0 = (function (){
var statearr_30273 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30273[(0)] = klipse$lang$php$str_eval_async_$_state_machine__15523__auto__);

(statearr_30273[(1)] = (1));

return statearr_30273;
});
var klipse$lang$php$str_eval_async_$_state_machine__15523__auto____1 = (function (state_30250){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30274){if((e30274 instanceof Object)){
var ex__15526__auto__ = e30274;
var statearr_30275_30294 = state_30250;
(statearr_30275_30294[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30295 = state_30250;
state_30250 = G__30295;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$php$str_eval_async_$_state_machine__15523__auto__ = function(state_30250){
switch(arguments.length){
case 0:
return klipse$lang$php$str_eval_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$php$str_eval_async_$_state_machine__15523__auto____1.call(this,state_30250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$php$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$php$str_eval_async_$_state_machine__15523__auto____0;
klipse$lang$php$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$php$str_eval_async_$_state_machine__15523__auto____1;
return klipse$lang$php$str_eval_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30276 = f__15620__auto__.call(null);
(statearr_30276[(6)] = c__15619__auto___30277);

return statearr_30276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return c;
});
klipse.lang.php.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-php",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-php",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.php.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"clike"),klipse.common.registry.codemirror_mode_src.call(null,"php"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"css"),klipse.common.registry.scripts_src.call(null,"uniter.js?r")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-php","selector_eval_php",klipse.lang.php.opts);

//# sourceMappingURL=php.js.map

// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.php');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.php.load_php_engine = (function klipse$lang$php$load_php_engine(){
var obj__20025__auto__ = uniter;
var f__20026__auto__ = (function (){var obj30200 = obj__20025__auto__;
var k30201 = "createEngine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30200,k30201)){
return (obj30200[k30201]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,"PHP");
});
klipse.lang.php.execute = (function klipse$lang$php$execute(engine,input){
var obj__20025__auto__ = engine;
var f__20026__auto__ = (function (){var obj30202 = obj__20025__auto__;
var k30203 = "execute";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30202,k30203)){
return (obj30202[k30203]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,input);
});
klipse.lang.php.str_eval_async = (function klipse$lang$php$str_eval_async(exp,_){
var c = cljs.core.async.chan.call(null);
var php_exp = ["<?php",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp)].join('');
var c__15619__auto___30274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30247){
var state_val_30248 = (state_30247[(1)]);
if((state_val_30248 === (7))){
var inst_30215 = (state_30247[(7)]);
var inst_30206 = (state_30247[(8)]);
var inst_30223 = (state_30247[(2)]);
var inst_30224 = (function (){var php_engine = inst_30206;
var $ = inst_30215;
var obj__20025__auto__ = inst_30215;
var f__20026__auto__ = inst_30223;
return (function (p1__30204_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30204_SHARP_));
});
})();
var inst_30225 = inst_30223.call(inst_30215,"data",inst_30224);
var inst_30228 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_30206,"getStdout");
var state_30247__$1 = (function (){var statearr_30249 = state_30247;
(statearr_30249[(9)] = inst_30225);

return statearr_30249;
})();
if(inst_30228){
var statearr_30250_30275 = state_30247__$1;
(statearr_30250_30275[(1)] = (8));

} else {
var statearr_30251_30276 = state_30247__$1;
(statearr_30251_30276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (1))){
var inst_30206 = (state_30247[(8)]);
var inst_30206__$1 = klipse.lang.php.load_php_engine.call(null);
var inst_30209 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_30206__$1,"getStderr");
var state_30247__$1 = (function (){var statearr_30252 = state_30247;
(statearr_30252[(8)] = inst_30206__$1);

return statearr_30252;
})();
if(inst_30209){
var statearr_30253_30277 = state_30247__$1;
(statearr_30253_30277[(1)] = (2));

} else {
var statearr_30254_30278 = state_30247__$1;
(statearr_30254_30278[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (4))){
var inst_30215 = (state_30247[(7)]);
var inst_30206 = (state_30247[(8)]);
var inst_30214 = (state_30247[(2)]);
var inst_30215__$1 = inst_30214.call(inst_30206);
var inst_30218 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_30215__$1,"on");
var state_30247__$1 = (function (){var statearr_30255 = state_30247;
(statearr_30255[(7)] = inst_30215__$1);

return statearr_30255;
})();
if(inst_30218){
var statearr_30256_30279 = state_30247__$1;
(statearr_30256_30279[(1)] = (5));

} else {
var statearr_30257_30280 = state_30247__$1;
(statearr_30257_30280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (13))){
var inst_30206 = (state_30247[(8)]);
var inst_30234 = (state_30247[(10)]);
var inst_30242 = (state_30247[(2)]);
var inst_30243 = (function (){var php_engine = inst_30206;
var $ = inst_30234;
var obj__20025__auto__ = inst_30234;
var f__20026__auto__ = inst_30242;
return (function (p1__30205_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30205_SHARP_));
});
})();
var inst_30244 = inst_30242.call(inst_30234,"data",inst_30243);
var inst_30245 = klipse.lang.php.execute.call(null,inst_30206,php_exp);
var state_30247__$1 = (function (){var statearr_30258 = state_30247;
(statearr_30258[(11)] = inst_30244);

return statearr_30258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30247__$1,inst_30245);
} else {
if((state_val_30248 === (6))){
var state_30247__$1 = state_30247;
var statearr_30259_30281 = state_30247__$1;
(statearr_30259_30281[(2)] = null);

(statearr_30259_30281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (3))){
var state_30247__$1 = state_30247;
var statearr_30260_30282 = state_30247__$1;
(statearr_30260_30282[(2)] = null);

(statearr_30260_30282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (12))){
var state_30247__$1 = state_30247;
var statearr_30261_30283 = state_30247__$1;
(statearr_30261_30283[(2)] = null);

(statearr_30261_30283[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (2))){
var inst_30206 = (state_30247[(8)]);
var inst_30211 = (inst_30206["getStderr"]);
var state_30247__$1 = state_30247;
var statearr_30262_30284 = state_30247__$1;
(statearr_30262_30284[(2)] = inst_30211);

(statearr_30262_30284[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (11))){
var inst_30234 = (state_30247[(10)]);
var inst_30239 = (inst_30234["on"]);
var state_30247__$1 = state_30247;
var statearr_30263_30285 = state_30247__$1;
(statearr_30263_30285[(2)] = inst_30239);

(statearr_30263_30285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (9))){
var state_30247__$1 = state_30247;
var statearr_30264_30286 = state_30247__$1;
(statearr_30264_30286[(2)] = null);

(statearr_30264_30286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (5))){
var inst_30215 = (state_30247[(7)]);
var inst_30220 = (inst_30215["on"]);
var state_30247__$1 = state_30247;
var statearr_30265_30287 = state_30247__$1;
(statearr_30265_30287[(2)] = inst_30220);

(statearr_30265_30287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (10))){
var inst_30206 = (state_30247[(8)]);
var inst_30234 = (state_30247[(10)]);
var inst_30233 = (state_30247[(2)]);
var inst_30234__$1 = inst_30233.call(inst_30206);
var inst_30237 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_30234__$1,"on");
var state_30247__$1 = (function (){var statearr_30266 = state_30247;
(statearr_30266[(10)] = inst_30234__$1);

return statearr_30266;
})();
if(inst_30237){
var statearr_30267_30288 = state_30247__$1;
(statearr_30267_30288[(1)] = (11));

} else {
var statearr_30268_30289 = state_30247__$1;
(statearr_30268_30289[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30248 === (8))){
var inst_30206 = (state_30247[(8)]);
var inst_30230 = (inst_30206["getStdout"]);
var state_30247__$1 = state_30247;
var statearr_30269_30290 = state_30247__$1;
(statearr_30269_30290[(2)] = inst_30230);

(statearr_30269_30290[(1)] = (10));


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
var statearr_30270 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30270[(0)] = klipse$lang$php$str_eval_async_$_state_machine__15523__auto__);

(statearr_30270[(1)] = (1));

return statearr_30270;
});
var klipse$lang$php$str_eval_async_$_state_machine__15523__auto____1 = (function (state_30247){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30271){if((e30271 instanceof Object)){
var ex__15526__auto__ = e30271;
var statearr_30272_30291 = state_30247;
(statearr_30272_30291[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30292 = state_30247;
state_30247 = G__30292;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$php$str_eval_async_$_state_machine__15523__auto__ = function(state_30247){
switch(arguments.length){
case 0:
return klipse$lang$php$str_eval_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$php$str_eval_async_$_state_machine__15523__auto____1.call(this,state_30247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$php$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$php$str_eval_async_$_state_machine__15523__auto____0;
klipse$lang$php$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$php$str_eval_async_$_state_machine__15523__auto____1;
return klipse$lang$php$str_eval_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30273 = f__15620__auto__.call(null);
(statearr_30273[(6)] = c__15619__auto___30274);

return statearr_30273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return c;
});
klipse.lang.php.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-php",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-php",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.php.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"clike"),klipse.common.registry.codemirror_mode_src.call(null,"php"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"css"),klipse.common.registry.scripts_src.call(null,"uniter.js?r")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-php","selector_eval_php",klipse.lang.php.opts);

//# sourceMappingURL=php.js.map

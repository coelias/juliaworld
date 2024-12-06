// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.lua');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
if((typeof klipse !== 'undefined') && (typeof klipse.lang !== 'undefined') && (typeof klipse.lang.lua !== 'undefined') && (typeof klipse.lang.lua._STAR_loaded_STAR_ !== 'undefined')){
} else {
klipse.lang.lua._STAR_loaded_STAR_ = false;
}
klipse.lang.lua.create_module_BANG_ = (function klipse$lang$lua$create_module_BANG_(ready_chan){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"postRun","postRun",1423872796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if(klipse.utils.verbose_QMARK_.call(null)){
console.log("Lua Module loaded");
} else {
}

cljs.core.async.put_BANG_.call(null,ready_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236)], null));

var obj32412 = window;
var obj32413 = (((!((obj32412 == null))))?obj32412:({}));
(obj32413["evalLua"] = (function (){var obj__20025__auto__ = Module;
var f__20026__auto__ = (function (){var obj32416 = obj__20025__auto__;
var k32417 = "cwrap";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32416,k32417)){
return (obj32416[k32417]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,"run_lua","number",["string"]);
})());

return obj32413;
})], null)], null);
});
klipse.lang.lua.load_module_BANG_ = (function klipse$lang$lua$load_module_BANG_(){
var xhr = (new window.XMLHttpRequest());
var obj__20025__auto___32440 = xhr;
var f__20026__auto___32441 = (function (){var obj32418 = obj__20025__auto___32440;
var k32419 = "open";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32418,k32419)){
return (obj32418[k32419]);
} else {
return null;
}
})();
f__20026__auto___32441.call(obj__20025__auto___32440,"GET",klipse.common.registry.wasm_src.call(null,"lua.wasm"));

var obj32420_32442 = xhr;
var obj32421_32443 = (((!((obj32420_32442 == null))))?obj32420_32442:({}));
(obj32421_32443["responseType"] = "arraybuffer");


var obj__20025__auto___32444 = xhr;
var f__20026__auto___32445 = (function (){var obj32424 = obj__20025__auto___32444;
var k32425 = "overrideMimeType";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32424,k32425)){
return (obj32424[k32425]);
} else {
return null;
}
})();
f__20026__auto___32445.call(obj__20025__auto___32444,"application/javascript");

var obj32426_32446 = xhr;
var obj32427_32447 = (((!((obj32426_32446 == null))))?obj32426_32446:({}));
(obj32427_32447["onload"] = (function (){
if(klipse.utils.verbose_QMARK_.call(null)){
console.log("wasm loaded:");
} else {
}

var obj32430_32448 = window;
var obj32430_32449__$1 = (((!((obj32430_32448 == null))))?obj32430_32448:({}));
var inner_obj__19998__auto___32450 = (function (){var child32431 = (obj32430_32449__$1["Module"]);
if((!((child32431 == null)))){
return child32431;
} else {
var new_child__19970__auto__ = ({});
var obj32436_32451 = obj32430_32449__$1;
(obj32436_32451["Module"] = new_child__19970__auto__);


return new_child__19970__auto__;
}
})();
var obj32437_32452 = inner_obj__19998__auto___32450;
(obj32437_32452["wasmBinary"] = (xhr["response"]));



return klipse.utils.add_script_tag_BANG_.call(null,klipse.common.registry.scripts_src.call(null,"emscripten_module.js"));
}));


var obj__20025__auto__ = xhr;
var f__20026__auto__ = (function (){var obj32438 = obj__20025__auto__;
var k32439 = "send";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32438,k32439)){
return (obj32438[k32439]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,null);
});
klipse.lang.lua.ensure_loaded_BANG_ = (function klipse$lang$lua$ensure_loaded_BANG_(){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32477){
var state_val_32478 = (state_32477[(1)]);
if((state_val_32478 === (1))){
var state_32477__$1 = state_32477;
if(cljs.core.truth_(klipse.lang.lua._STAR_loaded_STAR_)){
var statearr_32479_32494 = state_32477__$1;
(statearr_32479_32494[(1)] = (2));

} else {
var statearr_32480_32495 = state_32477__$1;
(statearr_32480_32495[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (2))){
var state_32477__$1 = state_32477;
var statearr_32481_32496 = state_32477__$1;
(statearr_32481_32496[(2)] = null);

(statearr_32481_32496[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (3))){
var inst_32455 = (state_32477[(7)]);
var inst_32455__$1 = cljs.core.async.chan.call(null);
var inst_32456 = klipse.lang.lua.create_module_BANG_.call(null,inst_32455__$1);
var inst_32459 = (window == null);
var inst_32460 = cljs.core.not.call(null,inst_32459);
var state_32477__$1 = (function (){var statearr_32482 = state_32477;
(statearr_32482[(7)] = inst_32455__$1);

(statearr_32482[(8)] = inst_32456);

return statearr_32482;
})();
if(inst_32460){
var statearr_32483_32497 = state_32477__$1;
(statearr_32483_32497[(1)] = (5));

} else {
var statearr_32484_32498 = state_32477__$1;
(statearr_32484_32498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (4))){
var inst_32475 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32477__$1,inst_32475);
} else {
if((state_val_32478 === (5))){
var state_32477__$1 = state_32477;
var statearr_32485_32499 = state_32477__$1;
(statearr_32485_32499[(2)] = window);

(statearr_32485_32499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (6))){
var inst_32465 = ({});
var state_32477__$1 = state_32477;
var statearr_32486_32500 = state_32477__$1;
(statearr_32486_32500[(2)] = inst_32465);

(statearr_32486_32500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (7))){
var inst_32455 = (state_32477[(7)]);
var inst_32456 = (state_32477[(8)]);
var inst_32467 = (state_32477[(2)]);
var inst_32468 = cljs.core.clj__GT_js.call(null,inst_32456);
var inst_32469 = (inst_32467["Module"] = inst_32468);
var inst_32470 = klipse.lang.lua.load_module_BANG_.call(null);
var state_32477__$1 = (function (){var statearr_32487 = state_32477;
(statearr_32487[(9)] = inst_32470);

(statearr_32487[(10)] = inst_32469);

return statearr_32487;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32477__$1,(8),inst_32455);
} else {
if((state_val_32478 === (8))){
var inst_32472 = (state_32477[(2)]);
var inst_32473 = (klipse.lang.lua._STAR_loaded_STAR_ = true);
var state_32477__$1 = (function (){var statearr_32488 = state_32477;
(statearr_32488[(11)] = inst_32472);

return statearr_32488;
})();
var statearr_32489_32501 = state_32477__$1;
(statearr_32489_32501[(2)] = inst_32473);

(statearr_32489_32501[(1)] = (4));


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
});
return (function() {
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto__ = null;
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto____0 = (function (){
var statearr_32490 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32490[(0)] = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto__);

(statearr_32490[(1)] = (1));

return statearr_32490;
});
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto____1 = (function (state_32477){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32491){if((e32491 instanceof Object)){
var ex__15526__auto__ = e32491;
var statearr_32492_32502 = state_32477;
(statearr_32492_32502[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32503 = state_32477;
state_32477 = G__32503;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto__ = function(state_32477){
switch(arguments.length){
case 0:
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto____1.call(this,state_32477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto____0;
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto____1;
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32493 = f__15620__auto__.call(null);
(statearr_32493[(6)] = c__15619__auto__);

return statearr_32493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.lua.eval_STAR_ = (function klipse$lang$lua$eval_STAR_(src,opts){
var c = cljs.core.async.chan.call(null);
try{var obj32505_32515 = window;
var obj32505_32516__$1 = (((!((obj32505_32515 == null))))?obj32505_32515:({}));
var inner_obj__19998__auto___32517 = (function (){var child32506 = (obj32505_32516__$1["Module"]);
if((!((child32506 == null)))){
return child32506;
} else {
var new_child__19970__auto__ = ({});
var obj32511_32518 = obj32505_32516__$1;
(obj32511_32518["Module"] = new_child__19970__auto__);


return new_child__19970__auto__;
}
})();
var obj32512_32519 = inner_obj__19998__auto___32517;
(obj32512_32519["print"] = (function (txt){
if(klipse.utils.verbose_QMARK_.call(null)){
console.log("lua res:",txt);
} else {
}

if(cljs.core._EQ_.call(null,txt,"emsc")){
return null;
} else {
return cljs.core.async.put_BANG_.call(null,c,txt);
}
}));



var obj__20025__auto___32520 = window;
var f__20026__auto___32521 = (function (){var obj32513 = obj__20025__auto___32520;
var k32514 = "evalLua";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32513,k32514)){
return (obj32513[k32514]);
} else {
return null;
}
})();
f__20026__auto___32521.call(obj__20025__auto___32520,src,opts);

return c;
}catch (e32504){var e = e32504;
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.lua.the_eval = (function klipse$lang$lua$the_eval(src,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32529){
var state_val_32530 = (state_32529[(1)]);
if((state_val_32530 === (1))){
var inst_32522 = klipse.lang.lua.ensure_loaded_BANG_.call(null);
var state_32529__$1 = state_32529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32529__$1,(2),inst_32522);
} else {
if((state_val_32530 === (2))){
var inst_32524 = (state_32529[(2)]);
var inst_32525 = klipse.lang.lua.eval_STAR_.call(null,src,opts);
var state_32529__$1 = (function (){var statearr_32531 = state_32529;
(statearr_32531[(7)] = inst_32524);

return statearr_32531;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32529__$1,(3),inst_32525);
} else {
if((state_val_32530 === (3))){
var inst_32527 = (state_32529[(2)]);
var state_32529__$1 = state_32529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32529__$1,inst_32527);
} else {
return null;
}
}
}
});
return (function() {
var klipse$lang$lua$the_eval_$_state_machine__15523__auto__ = null;
var klipse$lang$lua$the_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_32532 = [null,null,null,null,null,null,null,null];
(statearr_32532[(0)] = klipse$lang$lua$the_eval_$_state_machine__15523__auto__);

(statearr_32532[(1)] = (1));

return statearr_32532;
});
var klipse$lang$lua$the_eval_$_state_machine__15523__auto____1 = (function (state_32529){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32533){if((e32533 instanceof Object)){
var ex__15526__auto__ = e32533;
var statearr_32534_32536 = state_32529;
(statearr_32534_32536[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32537 = state_32529;
state_32529 = G__32537;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$lua$the_eval_$_state_machine__15523__auto__ = function(state_32529){
switch(arguments.length){
case 0:
return klipse$lang$lua$the_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$lua$the_eval_$_state_machine__15523__auto____1.call(this,state_32529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lua$the_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lua$the_eval_$_state_machine__15523__auto____0;
klipse$lang$lua$the_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lua$the_eval_$_state_machine__15523__auto____1;
return klipse$lang$lua$the_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32535 = f__15620__auto__.call(null);
(statearr_32535[(6)] = c__15619__auto__);

return statearr_32535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.lua.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-lua",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.lua.the_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"lua")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"--"], null);
klipse.common.registry.register_mode.call(null,"lua","selector_lua",klipse.lang.lua.opts);

//# sourceMappingURL=lua.js.map

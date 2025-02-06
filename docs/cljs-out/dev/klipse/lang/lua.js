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

var obj30470 = window;
var obj30471 = (((!((obj30470 == null))))?obj30470:({}));
(obj30471["evalLua"] = (function (){var obj__20025__auto__ = Module;
var f__20026__auto__ = (function (){var obj30474 = obj__20025__auto__;
var k30475 = "cwrap";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30474,k30475)){
return (obj30474[k30475]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,"run_lua","number",["string"]);
})());

return obj30471;
})], null)], null);
});
klipse.lang.lua.load_module_BANG_ = (function klipse$lang$lua$load_module_BANG_(){
var xhr = (new window.XMLHttpRequest());
var obj__20025__auto___30498 = xhr;
var f__20026__auto___30499 = (function (){var obj30476 = obj__20025__auto___30498;
var k30477 = "open";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30476,k30477)){
return (obj30476[k30477]);
} else {
return null;
}
})();
f__20026__auto___30499.call(obj__20025__auto___30498,"GET",klipse.common.registry.wasm_src.call(null,"lua.wasm"));

var obj30478_30500 = xhr;
var obj30479_30501 = (((!((obj30478_30500 == null))))?obj30478_30500:({}));
(obj30479_30501["responseType"] = "arraybuffer");


var obj__20025__auto___30502 = xhr;
var f__20026__auto___30503 = (function (){var obj30482 = obj__20025__auto___30502;
var k30483 = "overrideMimeType";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30482,k30483)){
return (obj30482[k30483]);
} else {
return null;
}
})();
f__20026__auto___30503.call(obj__20025__auto___30502,"application/javascript");

var obj30484_30504 = xhr;
var obj30485_30505 = (((!((obj30484_30504 == null))))?obj30484_30504:({}));
(obj30485_30505["onload"] = (function (){
if(klipse.utils.verbose_QMARK_.call(null)){
console.log("wasm loaded:");
} else {
}

var obj30488_30506 = window;
var obj30488_30507__$1 = (((!((obj30488_30506 == null))))?obj30488_30506:({}));
var inner_obj__19998__auto___30508 = (function (){var child30489 = (obj30488_30507__$1["Module"]);
if((!((child30489 == null)))){
return child30489;
} else {
var new_child__19970__auto__ = ({});
var obj30494_30509 = obj30488_30507__$1;
(obj30494_30509["Module"] = new_child__19970__auto__);


return new_child__19970__auto__;
}
})();
var obj30495_30510 = inner_obj__19998__auto___30508;
(obj30495_30510["wasmBinary"] = (xhr["response"]));



return klipse.utils.add_script_tag_BANG_.call(null,klipse.common.registry.scripts_src.call(null,"emscripten_module.js"));
}));


var obj__20025__auto__ = xhr;
var f__20026__auto__ = (function (){var obj30496 = obj__20025__auto__;
var k30497 = "send";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30496,k30497)){
return (obj30496[k30497]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,null);
});
klipse.lang.lua.ensure_loaded_BANG_ = (function klipse$lang$lua$ensure_loaded_BANG_(){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30535){
var state_val_30536 = (state_30535[(1)]);
if((state_val_30536 === (1))){
var state_30535__$1 = state_30535;
if(cljs.core.truth_(klipse.lang.lua._STAR_loaded_STAR_)){
var statearr_30537_30552 = state_30535__$1;
(statearr_30537_30552[(1)] = (2));

} else {
var statearr_30538_30553 = state_30535__$1;
(statearr_30538_30553[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (2))){
var state_30535__$1 = state_30535;
var statearr_30539_30554 = state_30535__$1;
(statearr_30539_30554[(2)] = null);

(statearr_30539_30554[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (3))){
var inst_30513 = (state_30535[(7)]);
var inst_30513__$1 = cljs.core.async.chan.call(null);
var inst_30514 = klipse.lang.lua.create_module_BANG_.call(null,inst_30513__$1);
var inst_30517 = (window == null);
var inst_30518 = cljs.core.not.call(null,inst_30517);
var state_30535__$1 = (function (){var statearr_30540 = state_30535;
(statearr_30540[(8)] = inst_30514);

(statearr_30540[(7)] = inst_30513__$1);

return statearr_30540;
})();
if(inst_30518){
var statearr_30541_30555 = state_30535__$1;
(statearr_30541_30555[(1)] = (5));

} else {
var statearr_30542_30556 = state_30535__$1;
(statearr_30542_30556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (4))){
var inst_30533 = (state_30535[(2)]);
var state_30535__$1 = state_30535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30535__$1,inst_30533);
} else {
if((state_val_30536 === (5))){
var state_30535__$1 = state_30535;
var statearr_30543_30557 = state_30535__$1;
(statearr_30543_30557[(2)] = window);

(statearr_30543_30557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (6))){
var inst_30523 = ({});
var state_30535__$1 = state_30535;
var statearr_30544_30558 = state_30535__$1;
(statearr_30544_30558[(2)] = inst_30523);

(statearr_30544_30558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (7))){
var inst_30514 = (state_30535[(8)]);
var inst_30513 = (state_30535[(7)]);
var inst_30525 = (state_30535[(2)]);
var inst_30526 = cljs.core.clj__GT_js.call(null,inst_30514);
var inst_30527 = (inst_30525["Module"] = inst_30526);
var inst_30528 = klipse.lang.lua.load_module_BANG_.call(null);
var state_30535__$1 = (function (){var statearr_30545 = state_30535;
(statearr_30545[(9)] = inst_30527);

(statearr_30545[(10)] = inst_30528);

return statearr_30545;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30535__$1,(8),inst_30513);
} else {
if((state_val_30536 === (8))){
var inst_30530 = (state_30535[(2)]);
var inst_30531 = (klipse.lang.lua._STAR_loaded_STAR_ = true);
var state_30535__$1 = (function (){var statearr_30546 = state_30535;
(statearr_30546[(11)] = inst_30530);

return statearr_30546;
})();
var statearr_30547_30559 = state_30535__$1;
(statearr_30547_30559[(2)] = inst_30531);

(statearr_30547_30559[(1)] = (4));


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
var statearr_30548 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30548[(0)] = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto__);

(statearr_30548[(1)] = (1));

return statearr_30548;
});
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto____1 = (function (state_30535){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30549){if((e30549 instanceof Object)){
var ex__15526__auto__ = e30549;
var statearr_30550_30560 = state_30535;
(statearr_30550_30560[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30561 = state_30535;
state_30535 = G__30561;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto__ = function(state_30535){
switch(arguments.length){
case 0:
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto____1.call(this,state_30535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto____0;
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto____1;
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30551 = f__15620__auto__.call(null);
(statearr_30551[(6)] = c__15619__auto__);

return statearr_30551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.lua.eval_STAR_ = (function klipse$lang$lua$eval_STAR_(src,opts){
var c = cljs.core.async.chan.call(null);
try{var obj30563_30573 = window;
var obj30563_30574__$1 = (((!((obj30563_30573 == null))))?obj30563_30573:({}));
var inner_obj__19998__auto___30575 = (function (){var child30564 = (obj30563_30574__$1["Module"]);
if((!((child30564 == null)))){
return child30564;
} else {
var new_child__19970__auto__ = ({});
var obj30569_30576 = obj30563_30574__$1;
(obj30569_30576["Module"] = new_child__19970__auto__);


return new_child__19970__auto__;
}
})();
var obj30570_30577 = inner_obj__19998__auto___30575;
(obj30570_30577["print"] = (function (txt){
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



var obj__20025__auto___30578 = window;
var f__20026__auto___30579 = (function (){var obj30571 = obj__20025__auto___30578;
var k30572 = "evalLua";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30571,k30572)){
return (obj30571[k30572]);
} else {
return null;
}
})();
f__20026__auto___30579.call(obj__20025__auto___30578,src,opts);

return c;
}catch (e30562){var e = e30562;
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.lua.the_eval = (function klipse$lang$lua$the_eval(src,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30587){
var state_val_30588 = (state_30587[(1)]);
if((state_val_30588 === (1))){
var inst_30580 = klipse.lang.lua.ensure_loaded_BANG_.call(null);
var state_30587__$1 = state_30587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30587__$1,(2),inst_30580);
} else {
if((state_val_30588 === (2))){
var inst_30582 = (state_30587[(2)]);
var inst_30583 = klipse.lang.lua.eval_STAR_.call(null,src,opts);
var state_30587__$1 = (function (){var statearr_30589 = state_30587;
(statearr_30589[(7)] = inst_30582);

return statearr_30589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30587__$1,(3),inst_30583);
} else {
if((state_val_30588 === (3))){
var inst_30585 = (state_30587[(2)]);
var state_30587__$1 = state_30587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30587__$1,inst_30585);
} else {
return null;
}
}
}
});
return (function() {
var klipse$lang$lua$the_eval_$_state_machine__15523__auto__ = null;
var klipse$lang$lua$the_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_30590 = [null,null,null,null,null,null,null,null];
(statearr_30590[(0)] = klipse$lang$lua$the_eval_$_state_machine__15523__auto__);

(statearr_30590[(1)] = (1));

return statearr_30590;
});
var klipse$lang$lua$the_eval_$_state_machine__15523__auto____1 = (function (state_30587){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30591){if((e30591 instanceof Object)){
var ex__15526__auto__ = e30591;
var statearr_30592_30594 = state_30587;
(statearr_30592_30594[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30595 = state_30587;
state_30587 = G__30595;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$lua$the_eval_$_state_machine__15523__auto__ = function(state_30587){
switch(arguments.length){
case 0:
return klipse$lang$lua$the_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$lua$the_eval_$_state_machine__15523__auto____1.call(this,state_30587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lua$the_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lua$the_eval_$_state_machine__15523__auto____0;
klipse$lang$lua$the_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lua$the_eval_$_state_machine__15523__auto____1;
return klipse$lang$lua$the_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30593 = f__15620__auto__.call(null);
(statearr_30593[(6)] = c__15619__auto__);

return statearr_30593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.lua.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-lua",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.lua.the_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"lua")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"--"], null);
klipse.common.registry.register_mode.call(null,"lua","selector_lua",klipse.lang.lua.opts);

//# sourceMappingURL=lua.js.map

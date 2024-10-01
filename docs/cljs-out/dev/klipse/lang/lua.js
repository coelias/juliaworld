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

var obj21524 = window;
var obj21525 = (((!((obj21524 == null))))?obj21524:({}));
(obj21525["evalLua"] = (function (){var obj__17203__auto__ = Module;
var f__17204__auto__ = (function (){var obj21528 = obj__17203__auto__;
var k21529 = "cwrap";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21528,k21529)){
return (obj21528[k21529]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,"run_lua","number",["string"]);
})());

return obj21525;
})], null)], null);
});
klipse.lang.lua.load_module_BANG_ = (function klipse$lang$lua$load_module_BANG_(){
var xhr = (new window.XMLHttpRequest());
var obj__17203__auto___21552 = xhr;
var f__17204__auto___21553 = (function (){var obj21530 = obj__17203__auto___21552;
var k21531 = "open";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21530,k21531)){
return (obj21530[k21531]);
} else {
return null;
}
})();
f__17204__auto___21553.call(obj__17203__auto___21552,"GET",klipse.common.registry.wasm_src.call(null,"lua.wasm"));

var obj21532_21554 = xhr;
var obj21533_21555 = (((!((obj21532_21554 == null))))?obj21532_21554:({}));
(obj21533_21555["responseType"] = "arraybuffer");


var obj__17203__auto___21556 = xhr;
var f__17204__auto___21557 = (function (){var obj21536 = obj__17203__auto___21556;
var k21537 = "overrideMimeType";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21536,k21537)){
return (obj21536[k21537]);
} else {
return null;
}
})();
f__17204__auto___21557.call(obj__17203__auto___21556,"application/javascript");

var obj21538_21558 = xhr;
var obj21539_21559 = (((!((obj21538_21558 == null))))?obj21538_21558:({}));
(obj21539_21559["onload"] = (function (){
if(klipse.utils.verbose_QMARK_.call(null)){
console.log("wasm loaded:");
} else {
}

var obj21542_21560 = window;
var obj21542_21561__$1 = (((!((obj21542_21560 == null))))?obj21542_21560:({}));
var inner_obj__17176__auto___21562 = (function (){var child21543 = (obj21542_21561__$1["Module"]);
if((!((child21543 == null)))){
return child21543;
} else {
var new_child__17148__auto__ = ({});
var obj21548_21563 = obj21542_21561__$1;
(obj21548_21563["Module"] = new_child__17148__auto__);


return new_child__17148__auto__;
}
})();
var obj21549_21564 = inner_obj__17176__auto___21562;
(obj21549_21564["wasmBinary"] = (xhr["response"]));



return klipse.utils.add_script_tag_BANG_.call(null,klipse.common.registry.scripts_src.call(null,"emscripten_module.js"));
}));


var obj__17203__auto__ = xhr;
var f__17204__auto__ = (function (){var obj21550 = obj__17203__auto__;
var k21551 = "send";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21550,k21551)){
return (obj21550[k21551]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,null);
});
klipse.lang.lua.ensure_loaded_BANG_ = (function klipse$lang$lua$ensure_loaded_BANG_(){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_21589){
var state_val_21590 = (state_21589[(1)]);
if((state_val_21590 === (1))){
var state_21589__$1 = state_21589;
if(cljs.core.truth_(klipse.lang.lua._STAR_loaded_STAR_)){
var statearr_21591_21606 = state_21589__$1;
(statearr_21591_21606[(1)] = (2));

} else {
var statearr_21592_21607 = state_21589__$1;
(statearr_21592_21607[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (2))){
var state_21589__$1 = state_21589;
var statearr_21593_21608 = state_21589__$1;
(statearr_21593_21608[(2)] = null);

(statearr_21593_21608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (3))){
var inst_21567 = (state_21589[(7)]);
var inst_21567__$1 = cljs.core.async.chan.call(null);
var inst_21568 = klipse.lang.lua.create_module_BANG_.call(null,inst_21567__$1);
var inst_21571 = (window == null);
var inst_21572 = cljs.core.not.call(null,inst_21571);
var state_21589__$1 = (function (){var statearr_21594 = state_21589;
(statearr_21594[(8)] = inst_21568);

(statearr_21594[(7)] = inst_21567__$1);

return statearr_21594;
})();
if(inst_21572){
var statearr_21595_21609 = state_21589__$1;
(statearr_21595_21609[(1)] = (5));

} else {
var statearr_21596_21610 = state_21589__$1;
(statearr_21596_21610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (4))){
var inst_21587 = (state_21589[(2)]);
var state_21589__$1 = state_21589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21589__$1,inst_21587);
} else {
if((state_val_21590 === (5))){
var state_21589__$1 = state_21589;
var statearr_21597_21611 = state_21589__$1;
(statearr_21597_21611[(2)] = window);

(statearr_21597_21611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (6))){
var inst_21577 = ({});
var state_21589__$1 = state_21589;
var statearr_21598_21612 = state_21589__$1;
(statearr_21598_21612[(2)] = inst_21577);

(statearr_21598_21612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (7))){
var inst_21568 = (state_21589[(8)]);
var inst_21567 = (state_21589[(7)]);
var inst_21579 = (state_21589[(2)]);
var inst_21580 = cljs.core.clj__GT_js.call(null,inst_21568);
var inst_21581 = (inst_21579["Module"] = inst_21580);
var inst_21582 = klipse.lang.lua.load_module_BANG_.call(null);
var state_21589__$1 = (function (){var statearr_21599 = state_21589;
(statearr_21599[(9)] = inst_21581);

(statearr_21599[(10)] = inst_21582);

return statearr_21599;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21589__$1,(8),inst_21567);
} else {
if((state_val_21590 === (8))){
var inst_21584 = (state_21589[(2)]);
var inst_21585 = (klipse.lang.lua._STAR_loaded_STAR_ = true);
var state_21589__$1 = (function (){var statearr_21600 = state_21589;
(statearr_21600[(11)] = inst_21584);

return statearr_21600;
})();
var statearr_21601_21613 = state_21589__$1;
(statearr_21601_21613[(2)] = inst_21585);

(statearr_21601_21613[(1)] = (4));


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
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto__ = null;
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto____0 = (function (){
var statearr_21602 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21602[(0)] = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto__);

(statearr_21602[(1)] = (1));

return statearr_21602;
});
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto____1 = (function (state_21589){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_21589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e21603){if((e21603 instanceof Object)){
var ex__13611__auto__ = e21603;
var statearr_21604_21614 = state_21589;
(statearr_21604_21614[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21615 = state_21589;
state_21589 = G__21615;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto__ = function(state_21589){
switch(arguments.length){
case 0:
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto____1.call(this,state_21589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto____0;
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto____1;
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_21605 = f__13705__auto__.call(null);
(statearr_21605[(6)] = c__13704__auto__);

return statearr_21605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.lua.eval_STAR_ = (function klipse$lang$lua$eval_STAR_(src,opts){
var c = cljs.core.async.chan.call(null);
try{var obj21617_21627 = window;
var obj21617_21628__$1 = (((!((obj21617_21627 == null))))?obj21617_21627:({}));
var inner_obj__17176__auto___21629 = (function (){var child21618 = (obj21617_21628__$1["Module"]);
if((!((child21618 == null)))){
return child21618;
} else {
var new_child__17148__auto__ = ({});
var obj21623_21630 = obj21617_21628__$1;
(obj21623_21630["Module"] = new_child__17148__auto__);


return new_child__17148__auto__;
}
})();
var obj21624_21631 = inner_obj__17176__auto___21629;
(obj21624_21631["print"] = (function (txt){
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



var obj__17203__auto___21632 = window;
var f__17204__auto___21633 = (function (){var obj21625 = obj__17203__auto___21632;
var k21626 = "evalLua";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21625,k21626)){
return (obj21625[k21626]);
} else {
return null;
}
})();
f__17204__auto___21633.call(obj__17203__auto___21632,src,opts);

return c;
}catch (e21616){var e = e21616;
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.lua.the_eval = (function klipse$lang$lua$the_eval(src,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_21641){
var state_val_21642 = (state_21641[(1)]);
if((state_val_21642 === (1))){
var inst_21634 = klipse.lang.lua.ensure_loaded_BANG_.call(null);
var state_21641__$1 = state_21641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21641__$1,(2),inst_21634);
} else {
if((state_val_21642 === (2))){
var inst_21636 = (state_21641[(2)]);
var inst_21637 = klipse.lang.lua.eval_STAR_.call(null,src,opts);
var state_21641__$1 = (function (){var statearr_21643 = state_21641;
(statearr_21643[(7)] = inst_21636);

return statearr_21643;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21641__$1,(3),inst_21637);
} else {
if((state_val_21642 === (3))){
var inst_21639 = (state_21641[(2)]);
var state_21641__$1 = state_21641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21641__$1,inst_21639);
} else {
return null;
}
}
}
});
return (function() {
var klipse$lang$lua$the_eval_$_state_machine__13608__auto__ = null;
var klipse$lang$lua$the_eval_$_state_machine__13608__auto____0 = (function (){
var statearr_21644 = [null,null,null,null,null,null,null,null];
(statearr_21644[(0)] = klipse$lang$lua$the_eval_$_state_machine__13608__auto__);

(statearr_21644[(1)] = (1));

return statearr_21644;
});
var klipse$lang$lua$the_eval_$_state_machine__13608__auto____1 = (function (state_21641){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_21641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e21645){if((e21645 instanceof Object)){
var ex__13611__auto__ = e21645;
var statearr_21646_21648 = state_21641;
(statearr_21646_21648[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21649 = state_21641;
state_21641 = G__21649;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$lua$the_eval_$_state_machine__13608__auto__ = function(state_21641){
switch(arguments.length){
case 0:
return klipse$lang$lua$the_eval_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$lua$the_eval_$_state_machine__13608__auto____1.call(this,state_21641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lua$the_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lua$the_eval_$_state_machine__13608__auto____0;
klipse$lang$lua$the_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lua$the_eval_$_state_machine__13608__auto____1;
return klipse$lang$lua$the_eval_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_21647 = f__13705__auto__.call(null);
(statearr_21647[(6)] = c__13704__auto__);

return statearr_21647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.lua.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-lua",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.lua.the_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"lua")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"--"], null);
klipse.common.registry.register_mode.call(null,"lua","selector_lua",klipse.lang.lua.opts);

//# sourceMappingURL=lua.js.map

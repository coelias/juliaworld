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

var obj24210 = window;
var obj24211 = (((!((obj24210 == null))))?obj24210:({}));
(obj24211["evalLua"] = (function (){var obj__17203__auto__ = Module;
var f__17204__auto__ = (function (){var obj24214 = obj__17203__auto__;
var k24215 = "cwrap";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24214,k24215)){
return (obj24214[k24215]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,"run_lua","number",["string"]);
})());

return obj24211;
})], null)], null);
});
klipse.lang.lua.load_module_BANG_ = (function klipse$lang$lua$load_module_BANG_(){
var xhr = (new window.XMLHttpRequest());
var obj__17203__auto___24238 = xhr;
var f__17204__auto___24239 = (function (){var obj24216 = obj__17203__auto___24238;
var k24217 = "open";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24216,k24217)){
return (obj24216[k24217]);
} else {
return null;
}
})();
f__17204__auto___24239.call(obj__17203__auto___24238,"GET",klipse.common.registry.wasm_src.call(null,"lua.wasm"));

var obj24218_24240 = xhr;
var obj24219_24241 = (((!((obj24218_24240 == null))))?obj24218_24240:({}));
(obj24219_24241["responseType"] = "arraybuffer");


var obj__17203__auto___24242 = xhr;
var f__17204__auto___24243 = (function (){var obj24222 = obj__17203__auto___24242;
var k24223 = "overrideMimeType";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24222,k24223)){
return (obj24222[k24223]);
} else {
return null;
}
})();
f__17204__auto___24243.call(obj__17203__auto___24242,"application/javascript");

var obj24224_24244 = xhr;
var obj24225_24245 = (((!((obj24224_24244 == null))))?obj24224_24244:({}));
(obj24225_24245["onload"] = (function (){
if(klipse.utils.verbose_QMARK_.call(null)){
console.log("wasm loaded:");
} else {
}

var obj24228_24246 = window;
var obj24228_24247__$1 = (((!((obj24228_24246 == null))))?obj24228_24246:({}));
var inner_obj__17176__auto___24248 = (function (){var child24229 = (obj24228_24247__$1["Module"]);
if((!((child24229 == null)))){
return child24229;
} else {
var new_child__17148__auto__ = ({});
var obj24234_24249 = obj24228_24247__$1;
(obj24234_24249["Module"] = new_child__17148__auto__);


return new_child__17148__auto__;
}
})();
var obj24235_24250 = inner_obj__17176__auto___24248;
(obj24235_24250["wasmBinary"] = (xhr["response"]));



return klipse.utils.add_script_tag_BANG_.call(null,klipse.common.registry.scripts_src.call(null,"emscripten_module.js"));
}));


var obj__17203__auto__ = xhr;
var f__17204__auto__ = (function (){var obj24236 = obj__17203__auto__;
var k24237 = "send";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24236,k24237)){
return (obj24236[k24237]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,null);
});
klipse.lang.lua.ensure_loaded_BANG_ = (function klipse$lang$lua$ensure_loaded_BANG_(){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_24275){
var state_val_24276 = (state_24275[(1)]);
if((state_val_24276 === (1))){
var state_24275__$1 = state_24275;
if(cljs.core.truth_(klipse.lang.lua._STAR_loaded_STAR_)){
var statearr_24277_24292 = state_24275__$1;
(statearr_24277_24292[(1)] = (2));

} else {
var statearr_24278_24293 = state_24275__$1;
(statearr_24278_24293[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (2))){
var state_24275__$1 = state_24275;
var statearr_24279_24294 = state_24275__$1;
(statearr_24279_24294[(2)] = null);

(statearr_24279_24294[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (3))){
var inst_24253 = (state_24275[(7)]);
var inst_24253__$1 = cljs.core.async.chan.call(null);
var inst_24254 = klipse.lang.lua.create_module_BANG_.call(null,inst_24253__$1);
var inst_24257 = (window == null);
var inst_24258 = cljs.core.not.call(null,inst_24257);
var state_24275__$1 = (function (){var statearr_24280 = state_24275;
(statearr_24280[(7)] = inst_24253__$1);

(statearr_24280[(8)] = inst_24254);

return statearr_24280;
})();
if(inst_24258){
var statearr_24281_24295 = state_24275__$1;
(statearr_24281_24295[(1)] = (5));

} else {
var statearr_24282_24296 = state_24275__$1;
(statearr_24282_24296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (4))){
var inst_24273 = (state_24275[(2)]);
var state_24275__$1 = state_24275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24275__$1,inst_24273);
} else {
if((state_val_24276 === (5))){
var state_24275__$1 = state_24275;
var statearr_24283_24297 = state_24275__$1;
(statearr_24283_24297[(2)] = window);

(statearr_24283_24297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (6))){
var inst_24263 = ({});
var state_24275__$1 = state_24275;
var statearr_24284_24298 = state_24275__$1;
(statearr_24284_24298[(2)] = inst_24263);

(statearr_24284_24298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24276 === (7))){
var inst_24253 = (state_24275[(7)]);
var inst_24254 = (state_24275[(8)]);
var inst_24265 = (state_24275[(2)]);
var inst_24266 = cljs.core.clj__GT_js.call(null,inst_24254);
var inst_24267 = (inst_24265["Module"] = inst_24266);
var inst_24268 = klipse.lang.lua.load_module_BANG_.call(null);
var state_24275__$1 = (function (){var statearr_24285 = state_24275;
(statearr_24285[(9)] = inst_24268);

(statearr_24285[(10)] = inst_24267);

return statearr_24285;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24275__$1,(8),inst_24253);
} else {
if((state_val_24276 === (8))){
var inst_24270 = (state_24275[(2)]);
var inst_24271 = (klipse.lang.lua._STAR_loaded_STAR_ = true);
var state_24275__$1 = (function (){var statearr_24286 = state_24275;
(statearr_24286[(11)] = inst_24270);

return statearr_24286;
})();
var statearr_24287_24299 = state_24275__$1;
(statearr_24287_24299[(2)] = inst_24271);

(statearr_24287_24299[(1)] = (4));


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
var statearr_24288 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24288[(0)] = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto__);

(statearr_24288[(1)] = (1));

return statearr_24288;
});
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto____1 = (function (state_24275){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_24275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e24289){if((e24289 instanceof Object)){
var ex__13611__auto__ = e24289;
var statearr_24290_24300 = state_24275;
(statearr_24290_24300[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24301 = state_24275;
state_24275 = G__24301;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto__ = function(state_24275){
switch(arguments.length){
case 0:
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto____1.call(this,state_24275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto____0;
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto____1;
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_24291 = f__13705__auto__.call(null);
(statearr_24291[(6)] = c__13704__auto__);

return statearr_24291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.lua.eval_STAR_ = (function klipse$lang$lua$eval_STAR_(src,opts){
var c = cljs.core.async.chan.call(null);
try{var obj24303_24313 = window;
var obj24303_24314__$1 = (((!((obj24303_24313 == null))))?obj24303_24313:({}));
var inner_obj__17176__auto___24315 = (function (){var child24304 = (obj24303_24314__$1["Module"]);
if((!((child24304 == null)))){
return child24304;
} else {
var new_child__17148__auto__ = ({});
var obj24309_24316 = obj24303_24314__$1;
(obj24309_24316["Module"] = new_child__17148__auto__);


return new_child__17148__auto__;
}
})();
var obj24310_24317 = inner_obj__17176__auto___24315;
(obj24310_24317["print"] = (function (txt){
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



var obj__17203__auto___24318 = window;
var f__17204__auto___24319 = (function (){var obj24311 = obj__17203__auto___24318;
var k24312 = "evalLua";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24311,k24312)){
return (obj24311[k24312]);
} else {
return null;
}
})();
f__17204__auto___24319.call(obj__17203__auto___24318,src,opts);

return c;
}catch (e24302){var e = e24302;
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.lua.the_eval = (function klipse$lang$lua$the_eval(src,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_24327){
var state_val_24328 = (state_24327[(1)]);
if((state_val_24328 === (1))){
var inst_24320 = klipse.lang.lua.ensure_loaded_BANG_.call(null);
var state_24327__$1 = state_24327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24327__$1,(2),inst_24320);
} else {
if((state_val_24328 === (2))){
var inst_24322 = (state_24327[(2)]);
var inst_24323 = klipse.lang.lua.eval_STAR_.call(null,src,opts);
var state_24327__$1 = (function (){var statearr_24329 = state_24327;
(statearr_24329[(7)] = inst_24322);

return statearr_24329;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24327__$1,(3),inst_24323);
} else {
if((state_val_24328 === (3))){
var inst_24325 = (state_24327[(2)]);
var state_24327__$1 = state_24327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24327__$1,inst_24325);
} else {
return null;
}
}
}
});
return (function() {
var klipse$lang$lua$the_eval_$_state_machine__13608__auto__ = null;
var klipse$lang$lua$the_eval_$_state_machine__13608__auto____0 = (function (){
var statearr_24330 = [null,null,null,null,null,null,null,null];
(statearr_24330[(0)] = klipse$lang$lua$the_eval_$_state_machine__13608__auto__);

(statearr_24330[(1)] = (1));

return statearr_24330;
});
var klipse$lang$lua$the_eval_$_state_machine__13608__auto____1 = (function (state_24327){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_24327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e24331){if((e24331 instanceof Object)){
var ex__13611__auto__ = e24331;
var statearr_24332_24334 = state_24327;
(statearr_24332_24334[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24335 = state_24327;
state_24327 = G__24335;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$lua$the_eval_$_state_machine__13608__auto__ = function(state_24327){
switch(arguments.length){
case 0:
return klipse$lang$lua$the_eval_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$lua$the_eval_$_state_machine__13608__auto____1.call(this,state_24327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lua$the_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lua$the_eval_$_state_machine__13608__auto____0;
klipse$lang$lua$the_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lua$the_eval_$_state_machine__13608__auto____1;
return klipse$lang$lua$the_eval_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_24333 = f__13705__auto__.call(null);
(statearr_24333[(6)] = c__13704__auto__);

return statearr_24333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.lua.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-lua",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.lua.the_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"lua")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"--"], null);
klipse.common.registry.register_mode.call(null,"lua","selector_lua",klipse.lang.lua.opts);

//# sourceMappingURL=lua.js.map

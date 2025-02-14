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

var obj30882 = window;
var obj30883 = (((!((obj30882 == null))))?obj30882:({}));
(obj30883["evalLua"] = (function (){var obj__20025__auto__ = Module;
var f__20026__auto__ = (function (){var obj30886 = obj__20025__auto__;
var k30887 = "cwrap";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30886,k30887)){
return (obj30886[k30887]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,"run_lua","number",["string"]);
})());

return obj30883;
})], null)], null);
});
klipse.lang.lua.load_module_BANG_ = (function klipse$lang$lua$load_module_BANG_(){
var xhr = (new window.XMLHttpRequest());
var obj__20025__auto___30910 = xhr;
var f__20026__auto___30911 = (function (){var obj30888 = obj__20025__auto___30910;
var k30889 = "open";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30888,k30889)){
return (obj30888[k30889]);
} else {
return null;
}
})();
f__20026__auto___30911.call(obj__20025__auto___30910,"GET",klipse.common.registry.wasm_src.call(null,"lua.wasm"));

var obj30890_30912 = xhr;
var obj30891_30913 = (((!((obj30890_30912 == null))))?obj30890_30912:({}));
(obj30891_30913["responseType"] = "arraybuffer");


var obj__20025__auto___30914 = xhr;
var f__20026__auto___30915 = (function (){var obj30894 = obj__20025__auto___30914;
var k30895 = "overrideMimeType";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30894,k30895)){
return (obj30894[k30895]);
} else {
return null;
}
})();
f__20026__auto___30915.call(obj__20025__auto___30914,"application/javascript");

var obj30896_30916 = xhr;
var obj30897_30917 = (((!((obj30896_30916 == null))))?obj30896_30916:({}));
(obj30897_30917["onload"] = (function (){
if(klipse.utils.verbose_QMARK_.call(null)){
console.log("wasm loaded:");
} else {
}

var obj30900_30918 = window;
var obj30900_30919__$1 = (((!((obj30900_30918 == null))))?obj30900_30918:({}));
var inner_obj__19998__auto___30920 = (function (){var child30901 = (obj30900_30919__$1["Module"]);
if((!((child30901 == null)))){
return child30901;
} else {
var new_child__19970__auto__ = ({});
var obj30906_30921 = obj30900_30919__$1;
(obj30906_30921["Module"] = new_child__19970__auto__);


return new_child__19970__auto__;
}
})();
var obj30907_30922 = inner_obj__19998__auto___30920;
(obj30907_30922["wasmBinary"] = (xhr["response"]));



return klipse.utils.add_script_tag_BANG_.call(null,klipse.common.registry.scripts_src.call(null,"emscripten_module.js"));
}));


var obj__20025__auto__ = xhr;
var f__20026__auto__ = (function (){var obj30908 = obj__20025__auto__;
var k30909 = "send";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30908,k30909)){
return (obj30908[k30909]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,null);
});
klipse.lang.lua.ensure_loaded_BANG_ = (function klipse$lang$lua$ensure_loaded_BANG_(){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30947){
var state_val_30948 = (state_30947[(1)]);
if((state_val_30948 === (1))){
var state_30947__$1 = state_30947;
if(cljs.core.truth_(klipse.lang.lua._STAR_loaded_STAR_)){
var statearr_30949_30964 = state_30947__$1;
(statearr_30949_30964[(1)] = (2));

} else {
var statearr_30950_30965 = state_30947__$1;
(statearr_30950_30965[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (2))){
var state_30947__$1 = state_30947;
var statearr_30951_30966 = state_30947__$1;
(statearr_30951_30966[(2)] = null);

(statearr_30951_30966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (3))){
var inst_30925 = (state_30947[(7)]);
var inst_30925__$1 = cljs.core.async.chan.call(null);
var inst_30926 = klipse.lang.lua.create_module_BANG_.call(null,inst_30925__$1);
var inst_30929 = (window == null);
var inst_30930 = cljs.core.not.call(null,inst_30929);
var state_30947__$1 = (function (){var statearr_30952 = state_30947;
(statearr_30952[(7)] = inst_30925__$1);

(statearr_30952[(8)] = inst_30926);

return statearr_30952;
})();
if(inst_30930){
var statearr_30953_30967 = state_30947__$1;
(statearr_30953_30967[(1)] = (5));

} else {
var statearr_30954_30968 = state_30947__$1;
(statearr_30954_30968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (4))){
var inst_30945 = (state_30947[(2)]);
var state_30947__$1 = state_30947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30947__$1,inst_30945);
} else {
if((state_val_30948 === (5))){
var state_30947__$1 = state_30947;
var statearr_30955_30969 = state_30947__$1;
(statearr_30955_30969[(2)] = window);

(statearr_30955_30969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (6))){
var inst_30935 = ({});
var state_30947__$1 = state_30947;
var statearr_30956_30970 = state_30947__$1;
(statearr_30956_30970[(2)] = inst_30935);

(statearr_30956_30970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30948 === (7))){
var inst_30925 = (state_30947[(7)]);
var inst_30926 = (state_30947[(8)]);
var inst_30937 = (state_30947[(2)]);
var inst_30938 = cljs.core.clj__GT_js.call(null,inst_30926);
var inst_30939 = (inst_30937["Module"] = inst_30938);
var inst_30940 = klipse.lang.lua.load_module_BANG_.call(null);
var state_30947__$1 = (function (){var statearr_30957 = state_30947;
(statearr_30957[(9)] = inst_30939);

(statearr_30957[(10)] = inst_30940);

return statearr_30957;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30947__$1,(8),inst_30925);
} else {
if((state_val_30948 === (8))){
var inst_30942 = (state_30947[(2)]);
var inst_30943 = (klipse.lang.lua._STAR_loaded_STAR_ = true);
var state_30947__$1 = (function (){var statearr_30958 = state_30947;
(statearr_30958[(11)] = inst_30942);

return statearr_30958;
})();
var statearr_30959_30971 = state_30947__$1;
(statearr_30959_30971[(2)] = inst_30943);

(statearr_30959_30971[(1)] = (4));


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
var statearr_30960 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30960[(0)] = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto__);

(statearr_30960[(1)] = (1));

return statearr_30960;
});
var klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto____1 = (function (state_30947){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30961){if((e30961 instanceof Object)){
var ex__15526__auto__ = e30961;
var statearr_30962_30972 = state_30947;
(statearr_30962_30972[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30973 = state_30947;
state_30947 = G__30973;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto__ = function(state_30947){
switch(arguments.length){
case 0:
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto____1.call(this,state_30947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto____0;
klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto____1;
return klipse$lang$lua$ensure_loaded_BANG__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30963 = f__15620__auto__.call(null);
(statearr_30963[(6)] = c__15619__auto__);

return statearr_30963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.lua.eval_STAR_ = (function klipse$lang$lua$eval_STAR_(src,opts){
var c = cljs.core.async.chan.call(null);
try{var obj30975_30985 = window;
var obj30975_30986__$1 = (((!((obj30975_30985 == null))))?obj30975_30985:({}));
var inner_obj__19998__auto___30987 = (function (){var child30976 = (obj30975_30986__$1["Module"]);
if((!((child30976 == null)))){
return child30976;
} else {
var new_child__19970__auto__ = ({});
var obj30981_30988 = obj30975_30986__$1;
(obj30981_30988["Module"] = new_child__19970__auto__);


return new_child__19970__auto__;
}
})();
var obj30982_30989 = inner_obj__19998__auto___30987;
(obj30982_30989["print"] = (function (txt){
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



var obj__20025__auto___30990 = window;
var f__20026__auto___30991 = (function (){var obj30983 = obj__20025__auto___30990;
var k30984 = "evalLua";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30983,k30984)){
return (obj30983[k30984]);
} else {
return null;
}
})();
f__20026__auto___30991.call(obj__20025__auto___30990,src,opts);

return c;
}catch (e30974){var e = e30974;
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.lua.the_eval = (function klipse$lang$lua$the_eval(src,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30999){
var state_val_31000 = (state_30999[(1)]);
if((state_val_31000 === (1))){
var inst_30992 = klipse.lang.lua.ensure_loaded_BANG_.call(null);
var state_30999__$1 = state_30999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30999__$1,(2),inst_30992);
} else {
if((state_val_31000 === (2))){
var inst_30994 = (state_30999[(2)]);
var inst_30995 = klipse.lang.lua.eval_STAR_.call(null,src,opts);
var state_30999__$1 = (function (){var statearr_31001 = state_30999;
(statearr_31001[(7)] = inst_30994);

return statearr_31001;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30999__$1,(3),inst_30995);
} else {
if((state_val_31000 === (3))){
var inst_30997 = (state_30999[(2)]);
var state_30999__$1 = state_30999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30999__$1,inst_30997);
} else {
return null;
}
}
}
});
return (function() {
var klipse$lang$lua$the_eval_$_state_machine__15523__auto__ = null;
var klipse$lang$lua$the_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_31002 = [null,null,null,null,null,null,null,null];
(statearr_31002[(0)] = klipse$lang$lua$the_eval_$_state_machine__15523__auto__);

(statearr_31002[(1)] = (1));

return statearr_31002;
});
var klipse$lang$lua$the_eval_$_state_machine__15523__auto____1 = (function (state_30999){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e31003){if((e31003 instanceof Object)){
var ex__15526__auto__ = e31003;
var statearr_31004_31006 = state_30999;
(statearr_31004_31006[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31007 = state_30999;
state_30999 = G__31007;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$lua$the_eval_$_state_machine__15523__auto__ = function(state_30999){
switch(arguments.length){
case 0:
return klipse$lang$lua$the_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$lua$the_eval_$_state_machine__15523__auto____1.call(this,state_30999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$lua$the_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$lua$the_eval_$_state_machine__15523__auto____0;
klipse$lang$lua$the_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$lua$the_eval_$_state_machine__15523__auto____1;
return klipse$lang$lua$the_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_31005 = f__15620__auto__.call(null);
(statearr_31005[(6)] = c__15619__auto__);

return statearr_31005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.lua.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-lua",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.lua.the_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"lua")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"--"], null);
klipse.common.registry.register_mode.call(null,"lua","selector_lua",klipse.lang.lua.opts);

//# sourceMappingURL=lua.js.map

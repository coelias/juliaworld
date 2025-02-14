// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.golang');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
if((typeof klipse !== 'undefined') && (typeof klipse.lang !== 'undefined') && (typeof klipse.lang.golang !== 'undefined') && (typeof klipse.lang.golang._STAR_loaded_STAR_ !== 'undefined')){
} else {
klipse.lang.golang._STAR_loaded_STAR_ = false;
}
var obj29347_29351 = window;
var obj29348_29352 = (((!((obj29347_29351 == null))))?obj29347_29351:({}));
(obj29348_29352["fs"] = null);

klipse.lang.golang.load_module_BANG_ = (function klipse$lang$golang$load_module_BANG_(){
var c = cljs.core.async.chan.call(null);
var xhr = (new window.XMLHttpRequest());
var obj__20025__auto___29371 = xhr;
var f__20026__auto___29372 = (function (){var obj29353 = obj__20025__auto___29371;
var k29354 = "open";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29353,k29354)){
return (obj29353[k29354]);
} else {
return null;
}
})();
f__20026__auto___29372.call(obj__20025__auto___29371,"GET",klipse.common.registry.wasm_src.call(null,"yaegi.wasm"));

var obj29355_29373 = xhr;
var obj29356_29374 = (((!((obj29355_29373 == null))))?obj29355_29373:({}));
(obj29356_29374["responseType"] = "arraybuffer");


var obj__20025__auto___29375 = xhr;
var f__20026__auto___29376 = (function (){var obj29359 = obj__20025__auto___29375;
var k29360 = "overrideMimeType";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29359,k29360)){
return (obj29359[k29360]);
} else {
return null;
}
})();
f__20026__auto___29376.call(obj__20025__auto___29375,"application/javascript");

var obj29361_29377 = xhr;
var obj29362_29378 = (((!((obj29361_29377 == null))))?obj29361_29377:({}));
(obj29362_29378["onload"] = (function (){
if(klipse.utils.verbose_QMARK_.call(null)){
console.log("wasm loaded:");
} else {
}

var gos = (new Go());
return (function (){var obj__20025__auto__ = WebAssembly;
var f__20026__auto__ = (function (){var obj29365 = obj__20025__auto__;
var k29366 = "instantiate";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29365,k29366)){
return (obj29365[k29366]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,(xhr["response"]),(gos["importObject"]));
})().then((function (result){
var obj__20025__auto___29379 = gos;
var f__20026__auto___29380 = (function (){var obj29367 = obj__20025__auto___29379;
var k29368 = "run";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29367,k29368)){
return (obj29367[k29368]);
} else {
return null;
}
})();
f__20026__auto___29380.call(obj__20025__auto___29379,(result["instance"]));

return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236)], null));
}));
}));


var obj__20025__auto___29381 = xhr;
var f__20026__auto___29382 = (function (){var obj29369 = obj__20025__auto___29381;
var k29370 = "send";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29369,k29370)){
return (obj29369[k29370]);
} else {
return null;
}
})();
f__20026__auto___29382.call(obj__20025__auto___29381,null);

return c;
});
klipse.lang.golang.the_eval = (function klipse$lang$golang$the_eval(src,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29423){
var state_val_29424 = (state_29423[(1)]);
if((state_val_29424 === (7))){
var inst_29399 = (window["evalGo"]);
var state_29423__$1 = state_29423;
var statearr_29425_29449 = state_29423__$1;
(statearr_29425_29449[(2)] = inst_29399);

(statearr_29425_29449[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (1))){
var state_29423__$1 = state_29423;
if(cljs.core.truth_(klipse.lang.golang._STAR_loaded_STAR_)){
var statearr_29426_29450 = state_29423__$1;
(statearr_29426_29450[(1)] = (2));

} else {
var statearr_29427_29451 = state_29423__$1;
(statearr_29427_29451[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (4))){
var inst_29394 = (state_29423[(2)]);
var inst_29397 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,window,"evalGo");
var state_29423__$1 = (function (){var statearr_29428 = state_29423;
(statearr_29428[(7)] = inst_29394);

return statearr_29428;
})();
if(inst_29397){
var statearr_29429_29452 = state_29423__$1;
(statearr_29429_29452[(1)] = (7));

} else {
var statearr_29430_29453 = state_29423__$1;
(statearr_29430_29453[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (15))){
var inst_29416 = (state_29423[(2)]);
var state_29423__$1 = state_29423;
var statearr_29431_29454 = state_29423__$1;
(statearr_29431_29454[(2)] = inst_29416);

(statearr_29431_29454[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (13))){
var inst_29403 = (state_29423[(8)]);
var inst_29409 = (inst_29403["stdout"]);
var inst_29410 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29409);
var state_29423__$1 = state_29423;
var statearr_29432_29455 = state_29423__$1;
(statearr_29432_29455[(2)] = inst_29410);

(statearr_29432_29455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (6))){
var inst_29391 = (state_29423[(2)]);
var inst_29392 = (klipse.lang.golang._STAR_loaded_STAR_ = true);
var state_29423__$1 = (function (){var statearr_29433 = state_29423;
(statearr_29433[(9)] = inst_29391);

return statearr_29433;
})();
var statearr_29434_29456 = state_29423__$1;
(statearr_29434_29456[(2)] = inst_29392);

(statearr_29434_29456[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (3))){
var inst_29385 = klipse.common.registry.scripts_src.call(null,"wasm_exec.js");
var inst_29386 = klipse.utils.add_script_tag_BANG_.call(null,inst_29385);
var state_29423__$1 = state_29423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29423__$1,(5),inst_29386);
} else {
if((state_val_29424 === (12))){
var inst_29421 = (state_29423[(2)]);
var state_29423__$1 = state_29423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29423__$1,inst_29421);
} else {
if((state_val_29424 === (2))){
var state_29423__$1 = state_29423;
var statearr_29435_29457 = state_29423__$1;
(statearr_29435_29457[(2)] = null);

(statearr_29435_29457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (11))){
var inst_29403 = (state_29423[(8)]);
var inst_29418 = (inst_29403["error"]);
var inst_29419 = ["error:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29418)].join('');
var state_29423__$1 = state_29423;
var statearr_29436_29458 = state_29423__$1;
(statearr_29436_29458[(2)] = inst_29419);

(statearr_29436_29458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (9))){
var inst_29403 = (state_29423[(8)]);
var inst_29402 = (state_29423[(2)]);
var inst_29403__$1 = inst_29402.call(window,src);
var inst_29404 = (inst_29403__$1["error"]);
var inst_29405 = clojure.string.blank_QMARK_.call(null,inst_29404);
var state_29423__$1 = (function (){var statearr_29437 = state_29423;
(statearr_29437[(8)] = inst_29403__$1);

return statearr_29437;
})();
if(inst_29405){
var statearr_29438_29459 = state_29423__$1;
(statearr_29438_29459[(1)] = (10));

} else {
var statearr_29439_29460 = state_29423__$1;
(statearr_29439_29460[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (5))){
var inst_29388 = (state_29423[(2)]);
var inst_29389 = klipse.lang.golang.load_module_BANG_.call(null);
var state_29423__$1 = (function (){var statearr_29440 = state_29423;
(statearr_29440[(10)] = inst_29388);

return statearr_29440;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29423__$1,(6),inst_29389);
} else {
if((state_val_29424 === (14))){
var inst_29403 = (state_29423[(8)]);
var inst_29412 = (inst_29403["stdout"]);
var inst_29413 = (inst_29403["stderr"]);
var inst_29414 = ["stdout:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29412),"\nstderr:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29413)].join('');
var state_29423__$1 = state_29423;
var statearr_29441_29461 = state_29423__$1;
(statearr_29441_29461[(2)] = inst_29414);

(statearr_29441_29461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (10))){
var inst_29403 = (state_29423[(8)]);
var inst_29407 = (inst_29403["stderr"]);
var state_29423__$1 = state_29423;
if(cljs.core.truth_(inst_29407)){
var statearr_29442_29462 = state_29423__$1;
(statearr_29442_29462[(1)] = (13));

} else {
var statearr_29443_29463 = state_29423__$1;
(statearr_29443_29463[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (8))){
var state_29423__$1 = state_29423;
var statearr_29444_29464 = state_29423__$1;
(statearr_29444_29464[(2)] = null);

(statearr_29444_29464[(1)] = (9));


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
}
}
});
return (function() {
var klipse$lang$golang$the_eval_$_state_machine__15523__auto__ = null;
var klipse$lang$golang$the_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_29445 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29445[(0)] = klipse$lang$golang$the_eval_$_state_machine__15523__auto__);

(statearr_29445[(1)] = (1));

return statearr_29445;
});
var klipse$lang$golang$the_eval_$_state_machine__15523__auto____1 = (function (state_29423){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29446){if((e29446 instanceof Object)){
var ex__15526__auto__ = e29446;
var statearr_29447_29465 = state_29423;
(statearr_29447_29465[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29466 = state_29423;
state_29423 = G__29466;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$golang$the_eval_$_state_machine__15523__auto__ = function(state_29423){
switch(arguments.length){
case 0:
return klipse$lang$golang$the_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$golang$the_eval_$_state_machine__15523__auto____1.call(this,state_29423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$golang$the_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$golang$the_eval_$_state_machine__15523__auto____0;
klipse$lang$golang$the_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$golang$the_eval_$_state_machine__15523__auto____1;
return klipse$lang$golang$the_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29448 = f__15620__auto__.call(null);
(statearr_29448[(6)] = c__15619__auto__);

return statearr_29448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.golang.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-go",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.golang.the_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"go")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"golang","selector_golang",klipse.lang.golang.opts);

//# sourceMappingURL=golang.js.map

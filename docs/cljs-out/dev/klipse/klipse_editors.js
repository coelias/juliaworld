// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.klipse_editors');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('applied_science.js_interop');
goog.require('gadjett.collections');
goog.require('cljs.spec.alpha');
goog.require('klipse.utils');
goog.require('klipse.dom_utils');
goog.require('cljs.core.async');
goog.require('klipse.ui.editors.common');
goog.require('klipse.ui.editors.editor');
klipse.klipse_editors.create_state = (function klipse$klipse_editors$create_state(var_args){
var args__5772__auto__ = [];
var len__5766__auto___29265 = arguments.length;
var i__5767__auto___29266 = (0);
while(true){
if((i__5767__auto___29266 < len__5766__auto___29265)){
args__5772__auto__.push((arguments[i__5767__auto___29266]));

var G__29267 = (i__5767__auto___29266 + (1));
i__5767__auto___29266 = G__29267;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic = (function (p__29263){
var map__29264 = p__29263;
var map__29264__$1 = cljs.core.__destructure_map.call(null,map__29264);
var result_element = cljs.core.get.call(null,map__29264__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__29264__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var editor_args = cljs.core.get.call(null,map__29264__$1,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049));
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598),(0),new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"container-id","container-id",1274665684),(cljs.core.truth_(container)?(container["id"]):null),new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element-id","result-element-id",-1916360024),(cljs.core.truth_(result_element)?(result_element["id"]):null),new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element], null));
}));

(klipse.klipse_editors.create_state.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(klipse.klipse_editors.create_state.cljs$lang$applyTo = (function (seq29262){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29262));
}));

klipse.klipse_editors.klipse_result_attrs = (function klipse$klipse_editors$klipse_result_attrs(n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"klipse-result",new cljs.core.Keyword(null,"id","id",-1388402092),["klipse-result-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null);
});
klipse.klipse_editors.klipse_container_attrs = (function klipse$klipse_editors$klipse_container_attrs(n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"klipse-container",new cljs.core.Keyword(null,"id","id",-1388402092),["klipse-container-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null);
});
/**
 * 
 *   Evaluates the `value` - with `preamble` prepended to it.
 *   If `setter` is defined, call `setter` with the result of the evaluation.
 *   Block until the first evaluation.
 *   Call `setter` with subsequent evaluations asynchronously. Subsequent evaluations don't include `preamble`.
 *   (Subsequent evaluations occur with `server-eval` where printing results are written on the channel, one after the other.
 *   In the case of client side evaluation, the channel is closed after the first message on the channel (this is done implicitly by `go`).
 *   
 */
klipse.klipse_editors.eval_in_editor = (function klipse$klipse_editors$eval_in_editor(eval_fn,src_code,unsafe_setter,p__29268,state){
var map__29269 = p__29268;
var map__29269__$1 = cljs.core.__destructure_map.call(null,map__29269);
var loop_msec = cljs.core.get.call(null,map__29269__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var preamble = cljs.core.get.call(null,map__29269__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("Evaluating: ",src_code);
} else {
}

var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29386){
var state_val_29387 = (state_29386[(1)]);
if((state_val_29387 === (7))){
var inst_29283 = (state_29386[(7)]);
var inst_29281 = (state_29386[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29386,(6),new cljs.core.Keyword(null,"default","default",-1987822328),null,(5));
var inst_29280 = cljs.core.deref.call(null,state);
var inst_29281__$1 = cljs.core.__destructure_map.call(null,inst_29280);
var inst_29282 = cljs.core.get.call(null,inst_29281__$1,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306));
var inst_29283__$1 = cljs.core.get.call(null,inst_29281__$1,new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598));
var inst_29284 = (inst_29283__$1 === (0));
var state_29386__$1 = (function (){var statearr_29388 = state_29386;
(statearr_29388[(9)] = inst_29282);

(statearr_29388[(7)] = inst_29283__$1);

(statearr_29388[(8)] = inst_29281__$1);

return statearr_29388;
})();
if(cljs.core.truth_(inst_29284)){
var statearr_29389_29461 = state_29386__$1;
(statearr_29389_29461[(1)] = (8));

} else {
var statearr_29390_29462 = state_29386__$1;
(statearr_29390_29462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (1))){
var state_29386__$1 = state_29386;
if(cljs.core.truth_(unsafe_setter)){
var statearr_29391_29463 = state_29386__$1;
(statearr_29391_29463[(1)] = (2));

} else {
var statearr_29392_29464 = state_29386__$1;
(statearr_29392_29464[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (4))){
var inst_29273 = (state_29386[(2)]);
var state_29386__$1 = (function (){var statearr_29393 = state_29386;
(statearr_29393[(10)] = inst_29273);

return statearr_29393;
})();
var statearr_29394_29465 = state_29386__$1;
(statearr_29394_29465[(2)] = null);

(statearr_29394_29465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (15))){
var inst_29282 = (state_29386[(9)]);
var inst_29283 = (state_29386[(7)]);
var inst_29281 = (state_29386[(8)]);
var inst_29296 = (state_29386[(11)]);
var inst_29304 = (state_29386[(12)]);
var inst_29298 = (state_29386[(13)]);
var inst_29273 = (state_29386[(10)]);
var inst_29340 = cljs.core.async.chan.call(null,(1));
var inst_29341 = (function (){var setter = inst_29273;
var map__29279 = inst_29281;
var cmd_chan = inst_29282;
var eval_counter = inst_29283;
var evaluation_chan = inst_29296;
var result = inst_29298;
var first_result = inst_29304;
var c__15619__auto____$1 = inst_29340;
return (function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29338){
var state_val_29339 = (state_29338[(1)]);
if((state_val_29339 === (7))){
var inst_29324 = (state_29338[(2)]);
var state_29338__$1 = state_29338;
if(cljs.core.truth_(inst_29324)){
var statearr_29395_29466 = state_29338__$1;
(statearr_29395_29466[(1)] = (8));

} else {
var statearr_29396_29467 = state_29338__$1;
(statearr_29396_29467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29339 === (1))){
var state_29338__$1 = state_29338;
var statearr_29397_29468 = state_29338__$1;
(statearr_29397_29468[(2)] = null);

(statearr_29397_29468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29339 === (4))){
var inst_29319 = (state_29338[(7)]);
var inst_29316 = (state_29338[(2)]);
var inst_29317 = cljs.core.nth.call(null,inst_29316,(0),null);
var inst_29318 = cljs.core.nth.call(null,inst_29316,(1),null);
var inst_29319__$1 = cljs.core._EQ_.call(null,inst_29318,cmd_chan);
var state_29338__$1 = (function (){var statearr_29398 = state_29338;
(statearr_29398[(7)] = inst_29319__$1);

(statearr_29398[(8)] = inst_29317);

return statearr_29398;
})();
if(inst_29319__$1){
var statearr_29399_29469 = state_29338__$1;
(statearr_29399_29469[(1)] = (5));

} else {
var statearr_29400_29470 = state_29338__$1;
(statearr_29400_29470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29339 === (6))){
var inst_29319 = (state_29338[(7)]);
var state_29338__$1 = state_29338;
var statearr_29401_29471 = state_29338__$1;
(statearr_29401_29471[(2)] = inst_29319);

(statearr_29401_29471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29339 === (3))){
var inst_29336 = (state_29338[(2)]);
var state_29338__$1 = state_29338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29338__$1,inst_29336);
} else {
if((state_val_29339 === (2))){
var inst_29311 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29312 = cljs.core.async.timeout.call(null,loop_msec);
var inst_29313 = [cmd_chan,inst_29312];
var inst_29314 = (new cljs.core.PersistentVector(null,2,(5),inst_29311,inst_29313,null));
var state_29338__$1 = state_29338;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29338__$1,(4),inst_29314);
} else {
if((state_val_29339 === (11))){
var inst_29330 = (state_29338[(2)]);
var inst_29331 = setter.call(null,inst_29330);
var state_29338__$1 = (function (){var statearr_29402 = state_29338;
(statearr_29402[(9)] = inst_29331);

return statearr_29402;
})();
var statearr_29403_29472 = state_29338__$1;
(statearr_29403_29472[(2)] = null);

(statearr_29403_29472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29339 === (9))){
var inst_29327 = cljs.core.deref.call(null,state);
var inst_29328 = eval_fn.call(null,src_code,inst_29327);
var state_29338__$1 = state_29338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29338__$1,(11),inst_29328);
} else {
if((state_val_29339 === (5))){
var inst_29317 = (state_29338[(8)]);
var inst_29321 = cljs.core._EQ_.call(null,inst_29317,new cljs.core.Keyword(null,"reset","reset",-800929946));
var state_29338__$1 = state_29338;
var statearr_29404_29473 = state_29338__$1;
(statearr_29404_29473[(2)] = inst_29321);

(statearr_29404_29473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29339 === (10))){
var inst_29334 = (state_29338[(2)]);
var state_29338__$1 = state_29338;
var statearr_29405_29474 = state_29338__$1;
(statearr_29405_29474[(2)] = inst_29334);

(statearr_29405_29474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29339 === (8))){
var state_29338__$1 = state_29338;
var statearr_29406_29475 = state_29338__$1;
(statearr_29406_29475[(2)] = null);

(statearr_29406_29475[(1)] = (10));


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
});
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0 = (function (){
var statearr_29407 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29407[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__);

(statearr_29407[(1)] = (1));

return statearr_29407;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1 = (function (state_29338){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29408){if((e29408 instanceof Object)){
var ex__15526__auto__ = e29408;
var statearr_29409_29476 = state_29338;
(statearr_29409_29476[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29477 = state_29338;
state_29338 = G__29477;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__ = function(state_29338){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1.call(this,state_29338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29410 = f__15620__auto__.call(null);
(statearr_29410[(6)] = c__15619__auto____$1);

return statearr_29410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});
})();
var inst_29342 = cljs.core.async.impl.dispatch.run.call(null,inst_29341);
var state_29386__$1 = (function (){var statearr_29411 = state_29386;
(statearr_29411[(14)] = inst_29342);

return statearr_29411;
})();
var statearr_29412_29478 = state_29386__$1;
(statearr_29412_29478[(2)] = inst_29340);

(statearr_29412_29478[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (13))){
var inst_29298 = (state_29386[(13)]);
var inst_29302 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_29298);
var state_29386__$1 = state_29386;
var statearr_29413_29479 = state_29386__$1;
(statearr_29413_29479[(2)] = inst_29302);

(statearr_29413_29479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (6))){
var inst_29273 = (state_29386[(10)]);
var inst_29274 = (state_29386[(2)]);
var inst_29275 = inst_29273.call(null,inst_29274);
var state_29386__$1 = state_29386;
var statearr_29414_29480 = state_29386__$1;
(statearr_29414_29480[(2)] = inst_29275);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (17))){
var inst_29282 = (state_29386[(9)]);
var inst_29283 = (state_29386[(7)]);
var inst_29281 = (state_29386[(8)]);
var inst_29296 = (state_29386[(11)]);
var inst_29304 = (state_29386[(12)]);
var inst_29298 = (state_29386[(13)]);
var inst_29273 = (state_29386[(10)]);
var inst_29345 = (state_29386[(2)]);
var inst_29380 = cljs.core.async.chan.call(null,(1));
var inst_29381 = (function (){var setter = inst_29273;
var map__29279 = inst_29281;
var cmd_chan = inst_29282;
var eval_counter = inst_29283;
var evaluation_chan = inst_29296;
var result = inst_29298;
var first_result = inst_29304;
var c__15619__auto____$1 = inst_29380;
return (function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29378){
var state_val_29379 = (state_29378[(1)]);
if((state_val_29379 === (7))){
var inst_29356 = (state_29378[(7)]);
var inst_29349 = (state_29378[(8)]);
var inst_29355 = (state_29378[(2)]);
var inst_29356__$1 = cljs.core.map_QMARK_.call(null,inst_29349);
var state_29378__$1 = (function (){var statearr_29415 = state_29378;
(statearr_29415[(7)] = inst_29356__$1);

(statearr_29415[(9)] = inst_29355);

return statearr_29415;
})();
if(inst_29356__$1){
var statearr_29416_29481 = state_29378__$1;
(statearr_29416_29481[(1)] = (8));

} else {
var statearr_29417_29482 = state_29378__$1;
(statearr_29417_29482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (1))){
var inst_29346 = first_result;
var state_29378__$1 = (function (){var statearr_29418 = state_29378;
(statearr_29418[(10)] = inst_29346);

return statearr_29418;
})();
var statearr_29419_29483 = state_29378__$1;
(statearr_29419_29483[(2)] = null);

(statearr_29419_29483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (4))){
var inst_29349 = (state_29378[(8)]);
var inst_29349__$1 = (state_29378[(2)]);
var inst_29350 = cljs.core.map_QMARK_.call(null,inst_29349__$1);
var state_29378__$1 = (function (){var statearr_29420 = state_29378;
(statearr_29420[(8)] = inst_29349__$1);

return statearr_29420;
})();
if(inst_29350){
var statearr_29421_29484 = state_29378__$1;
(statearr_29421_29484[(1)] = (5));

} else {
var statearr_29422_29485 = state_29378__$1;
(statearr_29422_29485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (15))){
var state_29378__$1 = state_29378;
var statearr_29423_29486 = state_29378__$1;
(statearr_29423_29486[(2)] = null);

(statearr_29423_29486[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (13))){
var inst_29355 = (state_29378[(9)]);
var inst_29365 = (state_29378[(2)]);
var inst_29366 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29365),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29355)].join('');
var inst_29367 = (inst_29355 == null);
var inst_29368 = cljs.core.not.call(null,inst_29367);
var state_29378__$1 = (function (){var statearr_29424 = state_29378;
(statearr_29424[(11)] = inst_29366);

return statearr_29424;
})();
if(inst_29368){
var statearr_29425_29487 = state_29378__$1;
(statearr_29425_29487[(1)] = (14));

} else {
var statearr_29426_29488 = state_29378__$1;
(statearr_29426_29488[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (6))){
var inst_29349 = (state_29378[(8)]);
var state_29378__$1 = state_29378;
var statearr_29427_29489 = state_29378__$1;
(statearr_29427_29489[(2)] = inst_29349);

(statearr_29427_29489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (3))){
var inst_29376 = (state_29378[(2)]);
var state_29378__$1 = state_29378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29378__$1,inst_29376);
} else {
if((state_val_29379 === (12))){
var inst_29346 = (state_29378[(10)]);
var state_29378__$1 = state_29378;
var statearr_29428_29490 = state_29378__$1;
(statearr_29428_29490[(2)] = inst_29346);

(statearr_29428_29490[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (2))){
var state_29378__$1 = state_29378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29378__$1,(4),evaluation_chan);
} else {
if((state_val_29379 === (11))){
var state_29378__$1 = state_29378;
var statearr_29429_29491 = state_29378__$1;
(statearr_29429_29491[(2)] = null);

(statearr_29429_29491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (9))){
var inst_29356 = (state_29378[(7)]);
var state_29378__$1 = state_29378;
var statearr_29430_29492 = state_29378__$1;
(statearr_29430_29492[(2)] = inst_29356);

(statearr_29430_29492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (5))){
var inst_29349 = (state_29378[(8)]);
var inst_29352 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_29349);
var state_29378__$1 = state_29378;
var statearr_29431_29493 = state_29378__$1;
(statearr_29431_29493[(2)] = inst_29352);

(statearr_29431_29493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (14))){
var inst_29366 = (state_29378[(11)]);
var inst_29370 = setter.call(null,inst_29366);
var inst_29346 = inst_29366;
var state_29378__$1 = (function (){var statearr_29432 = state_29378;
(statearr_29432[(10)] = inst_29346);

(statearr_29432[(12)] = inst_29370);

return statearr_29432;
})();
var statearr_29433_29494 = state_29378__$1;
(statearr_29433_29494[(2)] = null);

(statearr_29433_29494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (16))){
var inst_29374 = (state_29378[(2)]);
var state_29378__$1 = state_29378;
var statearr_29434_29495 = state_29378__$1;
(statearr_29434_29495[(2)] = inst_29374);

(statearr_29434_29495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (10))){
var inst_29361 = (state_29378[(2)]);
var state_29378__$1 = state_29378;
if(cljs.core.truth_(inst_29361)){
var statearr_29435_29496 = state_29378__$1;
(statearr_29435_29496[(1)] = (11));

} else {
var statearr_29436_29497 = state_29378__$1;
(statearr_29436_29497[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (8))){
var inst_29349 = (state_29378[(8)]);
var inst_29358 = new cljs.core.Keyword(null,"remove-previous-results","remove-previous-results",883218005).cljs$core$IFn$_invoke$arity$1(inst_29349);
var state_29378__$1 = state_29378;
var statearr_29437_29498 = state_29378__$1;
(statearr_29437_29498[(2)] = inst_29358);

(statearr_29437_29498[(1)] = (10));


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
}
});
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0 = (function (){
var statearr_29438 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29438[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__);

(statearr_29438[(1)] = (1));

return statearr_29438;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1 = (function (state_29378){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29439){if((e29439 instanceof Object)){
var ex__15526__auto__ = e29439;
var statearr_29440_29499 = state_29378;
(statearr_29440_29499[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29500 = state_29378;
state_29378 = G__29500;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__ = function(state_29378){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1.call(this,state_29378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29441 = f__15620__auto__.call(null);
(statearr_29441[(6)] = c__15619__auto____$1);

return statearr_29441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});
})();
var inst_29382 = cljs.core.async.impl.dispatch.run.call(null,inst_29381);
var state_29386__$1 = (function (){var statearr_29442 = state_29386;
(statearr_29442[(15)] = inst_29382);

(statearr_29442[(16)] = inst_29345);

return statearr_29442;
})();
var statearr_29443_29501 = state_29386__$1;
(statearr_29443_29501[(2)] = inst_29380);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (3))){
var state_29386__$1 = state_29386;
var statearr_29444_29502 = state_29386__$1;
(statearr_29444_29502[(2)] = cljs.core.any_QMARK_);

(statearr_29444_29502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (12))){
var inst_29298 = (state_29386[(13)]);
var state_29386__$1 = state_29386;
var statearr_29445_29503 = state_29386__$1;
(statearr_29445_29503[(2)] = inst_29298);

(statearr_29445_29503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (2))){
var state_29386__$1 = state_29386;
var statearr_29446_29504 = state_29386__$1;
(statearr_29446_29504[(2)] = unsafe_setter);

(statearr_29446_29504[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (11))){
var inst_29298 = (state_29386[(13)]);
var inst_29298__$1 = (state_29386[(2)]);
var inst_29299 = typeof inst_29298__$1 === 'string';
var state_29386__$1 = (function (){var statearr_29447 = state_29386;
(statearr_29447[(13)] = inst_29298__$1);

return statearr_29447;
})();
if(cljs.core.truth_(inst_29299)){
var statearr_29448_29505 = state_29386__$1;
(statearr_29448_29505[(1)] = (12));

} else {
var statearr_29449_29506 = state_29386__$1;
(statearr_29449_29506[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (9))){
var inst_29282 = (state_29386[(9)]);
var inst_29287 = cljs.core.async.put_BANG_.call(null,inst_29282,new cljs.core.Keyword(null,"reset","reset",-800929946));
var state_29386__$1 = state_29386;
var statearr_29450_29507 = state_29386__$1;
(statearr_29450_29507[(2)] = inst_29287);

(statearr_29450_29507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (5))){
var inst_29384 = (state_29386[(2)]);
var state_29386__$1 = state_29386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29386__$1,inst_29384);
} else {
if((state_val_29387 === (14))){
var inst_29304 = (state_29386[(12)]);
var inst_29273 = (state_29386[(10)]);
var inst_29304__$1 = (state_29386[(2)]);
var inst_29305 = inst_29273.call(null,inst_29304__$1);
var state_29386__$1 = (function (){var statearr_29451 = state_29386;
(statearr_29451[(12)] = inst_29304__$1);

(statearr_29451[(17)] = inst_29305);

return statearr_29451;
})();
if(cljs.core.truth_(loop_msec)){
var statearr_29452_29508 = state_29386__$1;
(statearr_29452_29508[(1)] = (15));

} else {
var statearr_29453_29509 = state_29386__$1;
(statearr_29453_29509[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (16))){
var state_29386__$1 = state_29386;
var statearr_29454_29510 = state_29386__$1;
(statearr_29454_29510[(2)] = null);

(statearr_29454_29510[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29387 === (10))){
var inst_29296 = (state_29386[(11)]);
var inst_29289 = (state_29386[(2)]);
var inst_29290 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29291 = [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598)];
var inst_29292 = (new cljs.core.PersistentVector(null,1,(5),inst_29290,inst_29291,null));
var inst_29293 = cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,inst_29292,cljs.core.inc);
var inst_29294 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(preamble),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_code)].join('');
var inst_29295 = cljs.core.deref.call(null,state);
var inst_29296__$1 = eval_fn.call(null,inst_29294,inst_29295);
var state_29386__$1 = (function (){var statearr_29455 = state_29386;
(statearr_29455[(11)] = inst_29296__$1);

(statearr_29455[(18)] = inst_29293);

(statearr_29455[(19)] = inst_29289);

return statearr_29455;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29386__$1,(11),inst_29296__$1);
} else {
if((state_val_29387 === (8))){
var state_29386__$1 = state_29386;
var statearr_29456_29511 = state_29386__$1;
(statearr_29456_29511[(2)] = null);

(statearr_29456_29511[(1)] = (10));


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
}
}
});
return (function() {
var klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0 = (function (){
var statearr_29457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29457[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__);

(statearr_29457[(1)] = (1));

return statearr_29457;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1 = (function (state_29386){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29458){if((e29458 instanceof Object)){
var ex__15526__auto__ = e29458;
var statearr_29459_29512 = state_29386;
(statearr_29459_29512[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29513 = state_29386;
state_29386 = G__29513;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__ = function(state_29386){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1.call(this,state_29386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29460 = f__15620__auto__.call(null);
(statearr_29460[(6)] = c__15619__auto__);

return statearr_29460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.klipse_editors.eval_in_codemirror_editor = (function klipse$klipse_editors$eval_in_codemirror_editor(eval_fn,result_element,editor_source,snippet_args,mode,state){
var editor_args = new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,klipse.ui.editors.editor.get_selection_when_selected.call(null,editor_source),(cljs.core.truth_(result_element)?(function (p1__29514_SHARP_){
return klipse.ui.editors.editor.set_value_and_beautify.call(null,result_element,mode,p1__29514_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441).cljs$core$IFn$_invoke$arity$1(editor_args),new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false], null));
}):null),snippet_args,state);
});
klipse.klipse_editors.eval_in_dom_editor = (function klipse$klipse_editors$eval_in_dom_editor(eval_fn,result_element,source,snippet_args,state){
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,(function (){var or__5043__auto__ = klipse.dom_utils.value.call(null,source);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (source["textContent"]);
}
})(),(cljs.core.truth_(result_element)?cljs.core.partial.call(null,goog.dom.setTextContent,result_element):null),snippet_args,state);
});
klipse.klipse_editors.wrap_result_in_html = (function klipse$klipse_editors$wrap_result_in_html(elem,res){
var wrapped_res = ((cljs.core._EQ_.call(null,cljs.core.type.call(null,res),Error))?["<div class=\"klipse-error\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(res),"</div>"].join(''):res);
var obj29515 = elem;
var obj29516 = (((!((obj29515 == null))))?obj29515:({}));
(obj29516["innerHTML"] = wrapped_res);

return obj29516;
});
klipse.klipse_editors.eval_in_html_editor = (function klipse$klipse_editors$eval_in_html_editor(eval_fn,result_element,editor_source,snippet_args,state){
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,klipse.ui.editors.editor.get_selection_when_selected.call(null,editor_source),(cljs.core.truth_(result_element)?cljs.core.partial.call(null,klipse.klipse_editors.wrap_result_in_html,result_element):null),snippet_args,state);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("klipse.klipse-editors","editor-options","klipse.klipse-editors/editor-options",1970701494,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"in-mode","in-mode",33987599),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"out-mode","out-mode",-446316699),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"options-in","options-in",-1968094624),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword(null,"options-out","options-out",781271031),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"in-mode","in-mode",33987599),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"out-mode","out-mode",-446316699),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"options-in","options-in",-1968094624),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword(null,"options-out","options-out",781271031),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-mode","in-mode",33987599),new cljs.core.Keyword(null,"out-mode","out-mode",-446316699),new cljs.core.Keyword(null,"options-in","options-in",-1968094624),new cljs.core.Keyword(null,"options-out","options-out",781271031)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"in-mode","in-mode",33987599),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"out-mode","out-mode",-446316699),new cljs.core.Keyword("klipse.klipse-editors","editor-mode","klipse.klipse-editors/editor-mode",-1678175194),new cljs.core.Keyword(null,"options-in","options-in",-1968094624),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156),new cljs.core.Keyword(null,"options-out","options-out",781271031),new cljs.core.Keyword("klipse.klipse-editors","codemirror-options","klipse.klipse-editors/codemirror-options",-1372888156)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
klipse.klipse_editors.default_editor_options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true], null);
klipse.klipse_editors.editor_options = (function klipse$klipse_editors$editor_options(editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,cljs.core.assoc.call(null,klipse.klipse_editors.default_editor_options,new cljs.core.Keyword(null,"mode","mode",654403691),editor_in_mode),codemirror_options_in),cljs.core.merge.call(null,cljs.core.assoc.call(null,klipse.klipse_editors.default_editor_options,new cljs.core.Keyword(null,"mode","mode",654403691),editor_out_mode,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true),codemirror_options_out)], null);
});
if((typeof klipse !== 'undefined') && (typeof klipse.klipse_editors !== 'undefined') && (typeof klipse.klipse_editors.create_editor !== 'undefined')){
} else {
/**
 * Creates editor (both input editors and output editors)
 *   ** :code-mirror: The input editor is codemirror. The output editor is codemirror
 *   ** :html: The input editor is codemirror. The output editor is html
 *   ** :dom: The input editor is plain text. The output editor is plain text 
 */
klipse.klipse_editors.create_editor = (function (){var method_table__5639__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.klipse-editors","create-editor"),(function (type,_){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"html","html",-998796897),(function (_,p__29519){
var map__29520 = p__29519;
var map__29520__$1 = cljs.core.__destructure_map.call(null,map__29520);
var editor_args = map__29520__$1;
var eval_fn = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var on_edit_cb = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"on-edit-cb","on-edit-cb",1727649734));
var source_code = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__29521 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__29521,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29521,(1),null);
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var result_element = (cljs.core.truth_(no_result)?null:klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_result_attrs.call(null,snippet_num)));
var in_editor = klipse.ui.editors.editor.replace_element_by_editor.call(null,element,source_code,in_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_);
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
if(cljs.core.truth_(result_element)){
goog.dom.setTextContent(result_element,default_txt);
} else {
}

klipse.ui.editors.common.handle_events.call(null,in_editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168),(function (){
klipse.klipse_editors.eval_in_html_editor.call(null,eval_fn,result_element,in_editor,snippet_args,state);

return on_edit_cb.call(null,snippet_num);
})], null));

return (function (){
return klipse.klipse_editors.eval_in_html_editor.call(null,eval_fn,result_element,in_editor,snippet_args,state);
});
}));
klipse.klipse_editors.editors = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
klipse.klipse_editors.result_elements = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
klipse.klipse_editors.add_editor_BANG_ = (function klipse$klipse_editors$add_editor_BANG_(editor,snippet_num){
cljs.core.swap_BANG_.call(null,klipse.klipse_editors.editors,cljs.core.assoc,snippet_num,editor);

var obj29524 = window;
var obj29525 = (((!((obj29524 == null))))?obj29524:({}));
(obj29525["klipse_editors"] = cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,klipse.klipse_editors.editors)));

return obj29525;
});
klipse.klipse_editors.add_result_element_BANG_ = (function klipse$klipse_editors$add_result_element_BANG_(result_element,snippet_num){
cljs.core.swap_BANG_.call(null,klipse.klipse_editors.result_elements,cljs.core.assoc,snippet_num,result_element);

var obj29528 = window;
var obj29529 = (((!((obj29528 == null))))?obj29528:({}));
(obj29529["klipse_results"] = cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,klipse.klipse_editors.result_elements)));

return obj29529;
});
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768),(function (_,p__29532){
var map__29533 = p__29532;
var map__29533__$1 = cljs.core.__destructure_map.call(null,map__29533);
var editor_args = map__29533__$1;
var eval_fn = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var on_edit_cb = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"on-edit-cb","on-edit-cb",1727649734));
var mode = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var source_code = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__29533__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__29534 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__29534,(0),null);
var out_editor_options = cljs.core.nth.call(null,vec__29534,(1),null);
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var ___$1 = klipse.dom_utils.create_div_after.call(null,container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"klipse-separator"], null));
var result_element = (cljs.core.truth_(no_result)?null:klipse.ui.editors.editor.create_editor_after_element.call(null,element,default_txt,out_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["klipse-result",["klipse-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode)].join('')], null)));
var in_editor = klipse.ui.editors.editor.replace_element_by_editor.call(null,element,source_code,in_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["klipse-snippet",["klipse-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode)].join('')], null));
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
klipse.ui.editors.common.handle_events.call(null,in_editor,gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"on-completion","on-completion",1522510572),((cljs.core._EQ_.call(null,"clojure",editor_in_mode))?(function (){
return klipse.ui.editors.editor.trigger_autocomplete.call(null,in_editor,(function (){var parent__20032__auto__ = (function (){var obj29541 = (function (){var obj29539 = (function (){var obj29537 = window;
var k29538 = "klipse_clj";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29537,k29538)){
return (obj29537[k29538]);
} else {
return null;
}
})();
var k29540 = "lang";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29539,k29540)){
return (obj29539[k29540]);
} else {
return null;
}
})();
var k29542 = "clojure";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29541,k29542)){
return (obj29541[k29542]);
} else {
return null;
}
})();
var f__20033__auto__ = (function (){var obj29543 = parent__20032__auto__;
var k29544 = "completions";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29543,k29544)){
return (obj29543[k29544]);
} else {
return null;
}
})();
return f__20033__auto__.call(parent__20032__auto__,klipse.ui.editors.editor.current_token.call(null,in_editor));
})());
}):null),new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168),(function (){
klipse.klipse_editors.eval_in_codemirror_editor.call(null,eval_fn,result_element,in_editor,snippet_args,editor_out_mode,state);

return on_edit_cb.call(null,snippet_num);
})], null)));

klipse.klipse_editors.add_editor_BANG_.call(null,in_editor,snippet_num);

klipse.klipse_editors.add_result_element_BANG_.call(null,result_element,snippet_num);

return (function (){
return klipse.klipse_editors.eval_in_codemirror_editor.call(null,eval_fn,result_element,in_editor,snippet_args,editor_out_mode,state);
});
}));
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"dom","dom",-1236537922),(function (_,p__29545){
var map__29546 = p__29545;
var map__29546__$1 = cljs.core.__destructure_map.call(null,map__29546);
var editor_args = map__29546__$1;
var snippet_num = cljs.core.get.call(null,map__29546__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var element = cljs.core.get.call(null,map__29546__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var eval_fn = cljs.core.get.call(null,map__29546__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var default_txt = cljs.core.get.call(null,map__29546__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var loop_msec = cljs.core.get.call(null,map__29546__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var preamble = cljs.core.get.call(null,map__29546__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var no_result = cljs.core.get.call(null,map__29546__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var result_element = (cljs.core.truth_(no_result)?null:klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_result_attrs.call(null,snippet_num)));
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
if(cljs.core.truth_(result_element)){
goog.dom.setTextContent(result_element,default_txt);
} else {
}

klipse.dom_utils.add_event_listener.call(null,element,"input",(function (){
return klipse.klipse_editors.eval_in_dom_editor.call(null,eval_fn,result_element,element,snippet_args,state);
}));

return (function (){
return klipse.klipse_editors.eval_in_dom_editor.call(null,eval_fn,result_element,element,snippet_args,state);
});
}));

//# sourceMappingURL=klipse_editors.js.map

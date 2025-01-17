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
var len__5766__auto___29268 = arguments.length;
var i__5767__auto___29269 = (0);
while(true){
if((i__5767__auto___29269 < len__5766__auto___29268)){
args__5772__auto__.push((arguments[i__5767__auto___29269]));

var G__29270 = (i__5767__auto___29269 + (1));
i__5767__auto___29269 = G__29270;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic = (function (p__29266){
var map__29267 = p__29266;
var map__29267__$1 = cljs.core.__destructure_map.call(null,map__29267);
var result_element = cljs.core.get.call(null,map__29267__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__29267__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var editor_args = cljs.core.get.call(null,map__29267__$1,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049));
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598),(0),new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"container-id","container-id",1274665684),(cljs.core.truth_(container)?(container["id"]):null),new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element-id","result-element-id",-1916360024),(cljs.core.truth_(result_element)?(result_element["id"]):null),new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element], null));
}));

(klipse.klipse_editors.create_state.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(klipse.klipse_editors.create_state.cljs$lang$applyTo = (function (seq29265){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29265));
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
klipse.klipse_editors.eval_in_editor = (function klipse$klipse_editors$eval_in_editor(eval_fn,src_code,unsafe_setter,p__29271,state){
var map__29272 = p__29271;
var map__29272__$1 = cljs.core.__destructure_map.call(null,map__29272);
var loop_msec = cljs.core.get.call(null,map__29272__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var preamble = cljs.core.get.call(null,map__29272__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("Evaluating: ",src_code);
} else {
}

var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29389){
var state_val_29390 = (state_29389[(1)]);
if((state_val_29390 === (7))){
var inst_29284 = (state_29389[(7)]);
var inst_29286 = (state_29389[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29389,(6),new cljs.core.Keyword(null,"default","default",-1987822328),null,(5));
var inst_29283 = cljs.core.deref.call(null,state);
var inst_29284__$1 = cljs.core.__destructure_map.call(null,inst_29283);
var inst_29285 = cljs.core.get.call(null,inst_29284__$1,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306));
var inst_29286__$1 = cljs.core.get.call(null,inst_29284__$1,new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598));
var inst_29287 = (inst_29286__$1 === (0));
var state_29389__$1 = (function (){var statearr_29391 = state_29389;
(statearr_29391[(7)] = inst_29284__$1);

(statearr_29391[(9)] = inst_29285);

(statearr_29391[(8)] = inst_29286__$1);

return statearr_29391;
})();
if(cljs.core.truth_(inst_29287)){
var statearr_29392_29464 = state_29389__$1;
(statearr_29392_29464[(1)] = (8));

} else {
var statearr_29393_29465 = state_29389__$1;
(statearr_29393_29465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (1))){
var state_29389__$1 = state_29389;
if(cljs.core.truth_(unsafe_setter)){
var statearr_29394_29466 = state_29389__$1;
(statearr_29394_29466[(1)] = (2));

} else {
var statearr_29395_29467 = state_29389__$1;
(statearr_29395_29467[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (4))){
var inst_29276 = (state_29389[(2)]);
var state_29389__$1 = (function (){var statearr_29396 = state_29389;
(statearr_29396[(10)] = inst_29276);

return statearr_29396;
})();
var statearr_29397_29468 = state_29389__$1;
(statearr_29397_29468[(2)] = null);

(statearr_29397_29468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (15))){
var inst_29284 = (state_29389[(7)]);
var inst_29301 = (state_29389[(11)]);
var inst_29307 = (state_29389[(12)]);
var inst_29285 = (state_29389[(9)]);
var inst_29299 = (state_29389[(13)]);
var inst_29276 = (state_29389[(10)]);
var inst_29286 = (state_29389[(8)]);
var inst_29343 = cljs.core.async.chan.call(null,(1));
var inst_29344 = (function (){var setter = inst_29276;
var map__29282 = inst_29284;
var cmd_chan = inst_29285;
var eval_counter = inst_29286;
var evaluation_chan = inst_29299;
var result = inst_29301;
var first_result = inst_29307;
var c__15619__auto____$1 = inst_29343;
return (function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29341){
var state_val_29342 = (state_29341[(1)]);
if((state_val_29342 === (7))){
var inst_29327 = (state_29341[(2)]);
var state_29341__$1 = state_29341;
if(cljs.core.truth_(inst_29327)){
var statearr_29398_29469 = state_29341__$1;
(statearr_29398_29469[(1)] = (8));

} else {
var statearr_29399_29470 = state_29341__$1;
(statearr_29399_29470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29342 === (1))){
var state_29341__$1 = state_29341;
var statearr_29400_29471 = state_29341__$1;
(statearr_29400_29471[(2)] = null);

(statearr_29400_29471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29342 === (4))){
var inst_29322 = (state_29341[(7)]);
var inst_29319 = (state_29341[(2)]);
var inst_29320 = cljs.core.nth.call(null,inst_29319,(0),null);
var inst_29321 = cljs.core.nth.call(null,inst_29319,(1),null);
var inst_29322__$1 = cljs.core._EQ_.call(null,inst_29321,cmd_chan);
var state_29341__$1 = (function (){var statearr_29401 = state_29341;
(statearr_29401[(8)] = inst_29320);

(statearr_29401[(7)] = inst_29322__$1);

return statearr_29401;
})();
if(inst_29322__$1){
var statearr_29402_29472 = state_29341__$1;
(statearr_29402_29472[(1)] = (5));

} else {
var statearr_29403_29473 = state_29341__$1;
(statearr_29403_29473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29342 === (6))){
var inst_29322 = (state_29341[(7)]);
var state_29341__$1 = state_29341;
var statearr_29404_29474 = state_29341__$1;
(statearr_29404_29474[(2)] = inst_29322);

(statearr_29404_29474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29342 === (3))){
var inst_29339 = (state_29341[(2)]);
var state_29341__$1 = state_29341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29341__$1,inst_29339);
} else {
if((state_val_29342 === (2))){
var inst_29314 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29315 = cljs.core.async.timeout.call(null,loop_msec);
var inst_29316 = [cmd_chan,inst_29315];
var inst_29317 = (new cljs.core.PersistentVector(null,2,(5),inst_29314,inst_29316,null));
var state_29341__$1 = state_29341;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29341__$1,(4),inst_29317);
} else {
if((state_val_29342 === (11))){
var inst_29333 = (state_29341[(2)]);
var inst_29334 = setter.call(null,inst_29333);
var state_29341__$1 = (function (){var statearr_29405 = state_29341;
(statearr_29405[(9)] = inst_29334);

return statearr_29405;
})();
var statearr_29406_29475 = state_29341__$1;
(statearr_29406_29475[(2)] = null);

(statearr_29406_29475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29342 === (9))){
var inst_29330 = cljs.core.deref.call(null,state);
var inst_29331 = eval_fn.call(null,src_code,inst_29330);
var state_29341__$1 = state_29341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29341__$1,(11),inst_29331);
} else {
if((state_val_29342 === (5))){
var inst_29320 = (state_29341[(8)]);
var inst_29324 = cljs.core._EQ_.call(null,inst_29320,new cljs.core.Keyword(null,"reset","reset",-800929946));
var state_29341__$1 = state_29341;
var statearr_29407_29476 = state_29341__$1;
(statearr_29407_29476[(2)] = inst_29324);

(statearr_29407_29476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29342 === (10))){
var inst_29337 = (state_29341[(2)]);
var state_29341__$1 = state_29341;
var statearr_29408_29477 = state_29341__$1;
(statearr_29408_29477[(2)] = inst_29337);

(statearr_29408_29477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29342 === (8))){
var state_29341__$1 = state_29341;
var statearr_29409_29478 = state_29341__$1;
(statearr_29409_29478[(2)] = null);

(statearr_29409_29478[(1)] = (10));


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
var statearr_29410 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29410[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__);

(statearr_29410[(1)] = (1));

return statearr_29410;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1 = (function (state_29341){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29411){if((e29411 instanceof Object)){
var ex__15526__auto__ = e29411;
var statearr_29412_29479 = state_29341;
(statearr_29412_29479[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29480 = state_29341;
state_29341 = G__29480;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__ = function(state_29341){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1.call(this,state_29341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29413 = f__15620__auto__.call(null);
(statearr_29413[(6)] = c__15619__auto____$1);

return statearr_29413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});
})();
var inst_29345 = cljs.core.async.impl.dispatch.run.call(null,inst_29344);
var state_29389__$1 = (function (){var statearr_29414 = state_29389;
(statearr_29414[(14)] = inst_29345);

return statearr_29414;
})();
var statearr_29415_29481 = state_29389__$1;
(statearr_29415_29481[(2)] = inst_29343);

(statearr_29415_29481[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (13))){
var inst_29301 = (state_29389[(11)]);
var inst_29305 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_29301);
var state_29389__$1 = state_29389;
var statearr_29416_29482 = state_29389__$1;
(statearr_29416_29482[(2)] = inst_29305);

(statearr_29416_29482[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (6))){
var inst_29276 = (state_29389[(10)]);
var inst_29277 = (state_29389[(2)]);
var inst_29278 = inst_29276.call(null,inst_29277);
var state_29389__$1 = state_29389;
var statearr_29417_29483 = state_29389__$1;
(statearr_29417_29483[(2)] = inst_29278);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29389__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (17))){
var inst_29284 = (state_29389[(7)]);
var inst_29301 = (state_29389[(11)]);
var inst_29307 = (state_29389[(12)]);
var inst_29285 = (state_29389[(9)]);
var inst_29299 = (state_29389[(13)]);
var inst_29276 = (state_29389[(10)]);
var inst_29286 = (state_29389[(8)]);
var inst_29348 = (state_29389[(2)]);
var inst_29383 = cljs.core.async.chan.call(null,(1));
var inst_29384 = (function (){var setter = inst_29276;
var map__29282 = inst_29284;
var cmd_chan = inst_29285;
var eval_counter = inst_29286;
var evaluation_chan = inst_29299;
var result = inst_29301;
var first_result = inst_29307;
var c__15619__auto____$1 = inst_29383;
return (function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29381){
var state_val_29382 = (state_29381[(1)]);
if((state_val_29382 === (7))){
var inst_29359 = (state_29381[(7)]);
var inst_29352 = (state_29381[(8)]);
var inst_29358 = (state_29381[(2)]);
var inst_29359__$1 = cljs.core.map_QMARK_.call(null,inst_29352);
var state_29381__$1 = (function (){var statearr_29418 = state_29381;
(statearr_29418[(7)] = inst_29359__$1);

(statearr_29418[(9)] = inst_29358);

return statearr_29418;
})();
if(inst_29359__$1){
var statearr_29419_29484 = state_29381__$1;
(statearr_29419_29484[(1)] = (8));

} else {
var statearr_29420_29485 = state_29381__$1;
(statearr_29420_29485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29382 === (1))){
var inst_29349 = first_result;
var state_29381__$1 = (function (){var statearr_29421 = state_29381;
(statearr_29421[(10)] = inst_29349);

return statearr_29421;
})();
var statearr_29422_29486 = state_29381__$1;
(statearr_29422_29486[(2)] = null);

(statearr_29422_29486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29382 === (4))){
var inst_29352 = (state_29381[(8)]);
var inst_29352__$1 = (state_29381[(2)]);
var inst_29353 = cljs.core.map_QMARK_.call(null,inst_29352__$1);
var state_29381__$1 = (function (){var statearr_29423 = state_29381;
(statearr_29423[(8)] = inst_29352__$1);

return statearr_29423;
})();
if(inst_29353){
var statearr_29424_29487 = state_29381__$1;
(statearr_29424_29487[(1)] = (5));

} else {
var statearr_29425_29488 = state_29381__$1;
(statearr_29425_29488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29382 === (15))){
var state_29381__$1 = state_29381;
var statearr_29426_29489 = state_29381__$1;
(statearr_29426_29489[(2)] = null);

(statearr_29426_29489[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29382 === (13))){
var inst_29358 = (state_29381[(9)]);
var inst_29368 = (state_29381[(2)]);
var inst_29369 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29368),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29358)].join('');
var inst_29370 = (inst_29358 == null);
var inst_29371 = cljs.core.not.call(null,inst_29370);
var state_29381__$1 = (function (){var statearr_29427 = state_29381;
(statearr_29427[(11)] = inst_29369);

return statearr_29427;
})();
if(inst_29371){
var statearr_29428_29490 = state_29381__$1;
(statearr_29428_29490[(1)] = (14));

} else {
var statearr_29429_29491 = state_29381__$1;
(statearr_29429_29491[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29382 === (6))){
var inst_29352 = (state_29381[(8)]);
var state_29381__$1 = state_29381;
var statearr_29430_29492 = state_29381__$1;
(statearr_29430_29492[(2)] = inst_29352);

(statearr_29430_29492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29382 === (3))){
var inst_29379 = (state_29381[(2)]);
var state_29381__$1 = state_29381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29381__$1,inst_29379);
} else {
if((state_val_29382 === (12))){
var inst_29349 = (state_29381[(10)]);
var state_29381__$1 = state_29381;
var statearr_29431_29493 = state_29381__$1;
(statearr_29431_29493[(2)] = inst_29349);

(statearr_29431_29493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29382 === (2))){
var state_29381__$1 = state_29381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29381__$1,(4),evaluation_chan);
} else {
if((state_val_29382 === (11))){
var state_29381__$1 = state_29381;
var statearr_29432_29494 = state_29381__$1;
(statearr_29432_29494[(2)] = null);

(statearr_29432_29494[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29382 === (9))){
var inst_29359 = (state_29381[(7)]);
var state_29381__$1 = state_29381;
var statearr_29433_29495 = state_29381__$1;
(statearr_29433_29495[(2)] = inst_29359);

(statearr_29433_29495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29382 === (5))){
var inst_29352 = (state_29381[(8)]);
var inst_29355 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_29352);
var state_29381__$1 = state_29381;
var statearr_29434_29496 = state_29381__$1;
(statearr_29434_29496[(2)] = inst_29355);

(statearr_29434_29496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29382 === (14))){
var inst_29369 = (state_29381[(11)]);
var inst_29373 = setter.call(null,inst_29369);
var inst_29349 = inst_29369;
var state_29381__$1 = (function (){var statearr_29435 = state_29381;
(statearr_29435[(12)] = inst_29373);

(statearr_29435[(10)] = inst_29349);

return statearr_29435;
})();
var statearr_29436_29497 = state_29381__$1;
(statearr_29436_29497[(2)] = null);

(statearr_29436_29497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29382 === (16))){
var inst_29377 = (state_29381[(2)]);
var state_29381__$1 = state_29381;
var statearr_29437_29498 = state_29381__$1;
(statearr_29437_29498[(2)] = inst_29377);

(statearr_29437_29498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29382 === (10))){
var inst_29364 = (state_29381[(2)]);
var state_29381__$1 = state_29381;
if(cljs.core.truth_(inst_29364)){
var statearr_29438_29499 = state_29381__$1;
(statearr_29438_29499[(1)] = (11));

} else {
var statearr_29439_29500 = state_29381__$1;
(statearr_29439_29500[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29382 === (8))){
var inst_29352 = (state_29381[(8)]);
var inst_29361 = new cljs.core.Keyword(null,"remove-previous-results","remove-previous-results",883218005).cljs$core$IFn$_invoke$arity$1(inst_29352);
var state_29381__$1 = state_29381;
var statearr_29440_29501 = state_29381__$1;
(statearr_29440_29501[(2)] = inst_29361);

(statearr_29440_29501[(1)] = (10));


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
var statearr_29441 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29441[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__);

(statearr_29441[(1)] = (1));

return statearr_29441;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1 = (function (state_29381){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29442){if((e29442 instanceof Object)){
var ex__15526__auto__ = e29442;
var statearr_29443_29502 = state_29381;
(statearr_29443_29502[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29503 = state_29381;
state_29381 = G__29503;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__ = function(state_29381){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1.call(this,state_29381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29444 = f__15620__auto__.call(null);
(statearr_29444[(6)] = c__15619__auto____$1);

return statearr_29444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});
})();
var inst_29385 = cljs.core.async.impl.dispatch.run.call(null,inst_29384);
var state_29389__$1 = (function (){var statearr_29445 = state_29389;
(statearr_29445[(15)] = inst_29348);

(statearr_29445[(16)] = inst_29385);

return statearr_29445;
})();
var statearr_29446_29504 = state_29389__$1;
(statearr_29446_29504[(2)] = inst_29383);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29389__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (3))){
var state_29389__$1 = state_29389;
var statearr_29447_29505 = state_29389__$1;
(statearr_29447_29505[(2)] = cljs.core.any_QMARK_);

(statearr_29447_29505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (12))){
var inst_29301 = (state_29389[(11)]);
var state_29389__$1 = state_29389;
var statearr_29448_29506 = state_29389__$1;
(statearr_29448_29506[(2)] = inst_29301);

(statearr_29448_29506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (2))){
var state_29389__$1 = state_29389;
var statearr_29449_29507 = state_29389__$1;
(statearr_29449_29507[(2)] = unsafe_setter);

(statearr_29449_29507[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (11))){
var inst_29301 = (state_29389[(11)]);
var inst_29301__$1 = (state_29389[(2)]);
var inst_29302 = typeof inst_29301__$1 === 'string';
var state_29389__$1 = (function (){var statearr_29450 = state_29389;
(statearr_29450[(11)] = inst_29301__$1);

return statearr_29450;
})();
if(cljs.core.truth_(inst_29302)){
var statearr_29451_29508 = state_29389__$1;
(statearr_29451_29508[(1)] = (12));

} else {
var statearr_29452_29509 = state_29389__$1;
(statearr_29452_29509[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (9))){
var inst_29285 = (state_29389[(9)]);
var inst_29290 = cljs.core.async.put_BANG_.call(null,inst_29285,new cljs.core.Keyword(null,"reset","reset",-800929946));
var state_29389__$1 = state_29389;
var statearr_29453_29510 = state_29389__$1;
(statearr_29453_29510[(2)] = inst_29290);

(statearr_29453_29510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (5))){
var inst_29387 = (state_29389[(2)]);
var state_29389__$1 = state_29389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29389__$1,inst_29387);
} else {
if((state_val_29390 === (14))){
var inst_29307 = (state_29389[(12)]);
var inst_29276 = (state_29389[(10)]);
var inst_29307__$1 = (state_29389[(2)]);
var inst_29308 = inst_29276.call(null,inst_29307__$1);
var state_29389__$1 = (function (){var statearr_29454 = state_29389;
(statearr_29454[(12)] = inst_29307__$1);

(statearr_29454[(17)] = inst_29308);

return statearr_29454;
})();
if(cljs.core.truth_(loop_msec)){
var statearr_29455_29511 = state_29389__$1;
(statearr_29455_29511[(1)] = (15));

} else {
var statearr_29456_29512 = state_29389__$1;
(statearr_29456_29512[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (16))){
var state_29389__$1 = state_29389;
var statearr_29457_29513 = state_29389__$1;
(statearr_29457_29513[(2)] = null);

(statearr_29457_29513[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29390 === (10))){
var inst_29299 = (state_29389[(13)]);
var inst_29292 = (state_29389[(2)]);
var inst_29293 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29294 = [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598)];
var inst_29295 = (new cljs.core.PersistentVector(null,1,(5),inst_29293,inst_29294,null));
var inst_29296 = cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,inst_29295,cljs.core.inc);
var inst_29297 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(preamble),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_code)].join('');
var inst_29298 = cljs.core.deref.call(null,state);
var inst_29299__$1 = eval_fn.call(null,inst_29297,inst_29298);
var state_29389__$1 = (function (){var statearr_29458 = state_29389;
(statearr_29458[(18)] = inst_29296);

(statearr_29458[(19)] = inst_29292);

(statearr_29458[(13)] = inst_29299__$1);

return statearr_29458;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29389__$1,(11),inst_29299__$1);
} else {
if((state_val_29390 === (8))){
var state_29389__$1 = state_29389;
var statearr_29459_29514 = state_29389__$1;
(statearr_29459_29514[(2)] = null);

(statearr_29459_29514[(1)] = (10));


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
var statearr_29460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29460[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__);

(statearr_29460[(1)] = (1));

return statearr_29460;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1 = (function (state_29389){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29461){if((e29461 instanceof Object)){
var ex__15526__auto__ = e29461;
var statearr_29462_29515 = state_29389;
(statearr_29462_29515[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29516 = state_29389;
state_29389 = G__29516;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__ = function(state_29389){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1.call(this,state_29389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29463 = f__15620__auto__.call(null);
(statearr_29463[(6)] = c__15619__auto__);

return statearr_29463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.klipse_editors.eval_in_codemirror_editor = (function klipse$klipse_editors$eval_in_codemirror_editor(eval_fn,result_element,editor_source,snippet_args,mode,state){
var editor_args = new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,klipse.ui.editors.editor.get_selection_when_selected.call(null,editor_source),(cljs.core.truth_(result_element)?(function (p1__29517_SHARP_){
return klipse.ui.editors.editor.set_value_and_beautify.call(null,result_element,mode,p1__29517_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441).cljs$core$IFn$_invoke$arity$1(editor_args),new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false], null));
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
var obj29518 = elem;
var obj29519 = (((!((obj29518 == null))))?obj29518:({}));
(obj29519["innerHTML"] = wrapped_res);

return obj29519;
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
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"html","html",-998796897),(function (_,p__29522){
var map__29523 = p__29522;
var map__29523__$1 = cljs.core.__destructure_map.call(null,map__29523);
var editor_args = map__29523__$1;
var eval_fn = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var on_edit_cb = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"on-edit-cb","on-edit-cb",1727649734));
var source_code = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__29523__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__29524 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__29524,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29524,(1),null);
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

var obj29527 = window;
var obj29528 = (((!((obj29527 == null))))?obj29527:({}));
(obj29528["klipse_editors"] = cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,klipse.klipse_editors.editors)));

return obj29528;
});
klipse.klipse_editors.add_result_element_BANG_ = (function klipse$klipse_editors$add_result_element_BANG_(result_element,snippet_num){
cljs.core.swap_BANG_.call(null,klipse.klipse_editors.result_elements,cljs.core.assoc,snippet_num,result_element);

var obj29531 = window;
var obj29532 = (((!((obj29531 == null))))?obj29531:({}));
(obj29532["klipse_results"] = cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,klipse.klipse_editors.result_elements)));

return obj29532;
});
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768),(function (_,p__29535){
var map__29536 = p__29535;
var map__29536__$1 = cljs.core.__destructure_map.call(null,map__29536);
var editor_args = map__29536__$1;
var eval_fn = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var on_edit_cb = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"on-edit-cb","on-edit-cb",1727649734));
var mode = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var source_code = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__29536__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__29537 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__29537,(0),null);
var out_editor_options = cljs.core.nth.call(null,vec__29537,(1),null);
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var ___$1 = klipse.dom_utils.create_div_after.call(null,container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"klipse-separator"], null));
var result_element = (cljs.core.truth_(no_result)?null:klipse.ui.editors.editor.create_editor_after_element.call(null,element,default_txt,out_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["klipse-result",["klipse-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode)].join('')], null)));
var in_editor = klipse.ui.editors.editor.replace_element_by_editor.call(null,element,source_code,in_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["klipse-snippet",["klipse-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode)].join('')], null));
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
klipse.ui.editors.common.handle_events.call(null,in_editor,gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"on-completion","on-completion",1522510572),((cljs.core._EQ_.call(null,"clojure",editor_in_mode))?(function (){
return klipse.ui.editors.editor.trigger_autocomplete.call(null,in_editor,(function (){var parent__20032__auto__ = (function (){var obj29544 = (function (){var obj29542 = (function (){var obj29540 = window;
var k29541 = "klipse_clj";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29540,k29541)){
return (obj29540[k29541]);
} else {
return null;
}
})();
var k29543 = "lang";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29542,k29543)){
return (obj29542[k29543]);
} else {
return null;
}
})();
var k29545 = "clojure";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29544,k29545)){
return (obj29544[k29545]);
} else {
return null;
}
})();
var f__20033__auto__ = (function (){var obj29546 = parent__20032__auto__;
var k29547 = "completions";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29546,k29547)){
return (obj29546[k29547]);
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
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"dom","dom",-1236537922),(function (_,p__29548){
var map__29549 = p__29548;
var map__29549__$1 = cljs.core.__destructure_map.call(null,map__29549);
var editor_args = map__29549__$1;
var snippet_num = cljs.core.get.call(null,map__29549__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var element = cljs.core.get.call(null,map__29549__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var eval_fn = cljs.core.get.call(null,map__29549__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var default_txt = cljs.core.get.call(null,map__29549__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var loop_msec = cljs.core.get.call(null,map__29549__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var preamble = cljs.core.get.call(null,map__29549__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var no_result = cljs.core.get.call(null,map__29549__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
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

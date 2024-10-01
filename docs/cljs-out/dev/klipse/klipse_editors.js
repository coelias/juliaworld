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
var len__5766__auto___19222 = arguments.length;
var i__5767__auto___19223 = (0);
while(true){
if((i__5767__auto___19223 < len__5766__auto___19222)){
args__5772__auto__.push((arguments[i__5767__auto___19223]));

var G__19224 = (i__5767__auto___19223 + (1));
i__5767__auto___19223 = G__19224;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic = (function (p__19220){
var map__19221 = p__19220;
var map__19221__$1 = cljs.core.__destructure_map.call(null,map__19221);
var result_element = cljs.core.get.call(null,map__19221__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__19221__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var editor_args = cljs.core.get.call(null,map__19221__$1,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049));
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598),(0),new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"container-id","container-id",1274665684),(cljs.core.truth_(container)?(container["id"]):null),new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element-id","result-element-id",-1916360024),(cljs.core.truth_(result_element)?(result_element["id"]):null),new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element], null));
}));

(klipse.klipse_editors.create_state.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(klipse.klipse_editors.create_state.cljs$lang$applyTo = (function (seq19219){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19219));
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
klipse.klipse_editors.eval_in_editor = (function klipse$klipse_editors$eval_in_editor(eval_fn,src_code,unsafe_setter,p__19225,state){
var map__19226 = p__19225;
var map__19226__$1 = cljs.core.__destructure_map.call(null,map__19226);
var loop_msec = cljs.core.get.call(null,map__19226__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var preamble = cljs.core.get.call(null,map__19226__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("Evaluating: ",src_code);
} else {
}

var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_19343){
var state_val_19344 = (state_19343[(1)]);
if((state_val_19344 === (7))){
var inst_19240 = (state_19343[(7)]);
var inst_19238 = (state_19343[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19343,(6),new cljs.core.Keyword(null,"default","default",-1987822328),null,(5));
var inst_19237 = cljs.core.deref.call(null,state);
var inst_19238__$1 = cljs.core.__destructure_map.call(null,inst_19237);
var inst_19239 = cljs.core.get.call(null,inst_19238__$1,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306));
var inst_19240__$1 = cljs.core.get.call(null,inst_19238__$1,new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598));
var inst_19241 = (inst_19240__$1 === (0));
var state_19343__$1 = (function (){var statearr_19345 = state_19343;
(statearr_19345[(7)] = inst_19240__$1);

(statearr_19345[(8)] = inst_19238__$1);

(statearr_19345[(9)] = inst_19239);

return statearr_19345;
})();
if(cljs.core.truth_(inst_19241)){
var statearr_19346_19418 = state_19343__$1;
(statearr_19346_19418[(1)] = (8));

} else {
var statearr_19347_19419 = state_19343__$1;
(statearr_19347_19419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (1))){
var state_19343__$1 = state_19343;
if(cljs.core.truth_(unsafe_setter)){
var statearr_19348_19420 = state_19343__$1;
(statearr_19348_19420[(1)] = (2));

} else {
var statearr_19349_19421 = state_19343__$1;
(statearr_19349_19421[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (4))){
var inst_19230 = (state_19343[(2)]);
var state_19343__$1 = (function (){var statearr_19350 = state_19343;
(statearr_19350[(10)] = inst_19230);

return statearr_19350;
})();
var statearr_19351_19422 = state_19343__$1;
(statearr_19351_19422[(2)] = null);

(statearr_19351_19422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (15))){
var inst_19230 = (state_19343[(10)]);
var inst_19253 = (state_19343[(11)]);
var inst_19240 = (state_19343[(7)]);
var inst_19238 = (state_19343[(8)]);
var inst_19255 = (state_19343[(12)]);
var inst_19261 = (state_19343[(13)]);
var inst_19239 = (state_19343[(9)]);
var inst_19297 = cljs.core.async.chan.call(null,(1));
var inst_19298 = (function (){var setter = inst_19230;
var map__19236 = inst_19238;
var cmd_chan = inst_19239;
var eval_counter = inst_19240;
var evaluation_chan = inst_19253;
var result = inst_19255;
var first_result = inst_19261;
var c__13704__auto____$1 = inst_19297;
return (function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_19295){
var state_val_19296 = (state_19295[(1)]);
if((state_val_19296 === (7))){
var inst_19281 = (state_19295[(2)]);
var state_19295__$1 = state_19295;
if(cljs.core.truth_(inst_19281)){
var statearr_19352_19423 = state_19295__$1;
(statearr_19352_19423[(1)] = (8));

} else {
var statearr_19353_19424 = state_19295__$1;
(statearr_19353_19424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (1))){
var state_19295__$1 = state_19295;
var statearr_19354_19425 = state_19295__$1;
(statearr_19354_19425[(2)] = null);

(statearr_19354_19425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (4))){
var inst_19276 = (state_19295[(7)]);
var inst_19273 = (state_19295[(2)]);
var inst_19274 = cljs.core.nth.call(null,inst_19273,(0),null);
var inst_19275 = cljs.core.nth.call(null,inst_19273,(1),null);
var inst_19276__$1 = cljs.core._EQ_.call(null,inst_19275,cmd_chan);
var state_19295__$1 = (function (){var statearr_19355 = state_19295;
(statearr_19355[(7)] = inst_19276__$1);

(statearr_19355[(8)] = inst_19274);

return statearr_19355;
})();
if(inst_19276__$1){
var statearr_19356_19426 = state_19295__$1;
(statearr_19356_19426[(1)] = (5));

} else {
var statearr_19357_19427 = state_19295__$1;
(statearr_19357_19427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (6))){
var inst_19276 = (state_19295[(7)]);
var state_19295__$1 = state_19295;
var statearr_19358_19428 = state_19295__$1;
(statearr_19358_19428[(2)] = inst_19276);

(statearr_19358_19428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (3))){
var inst_19293 = (state_19295[(2)]);
var state_19295__$1 = state_19295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19295__$1,inst_19293);
} else {
if((state_val_19296 === (2))){
var inst_19268 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19269 = cljs.core.async.timeout.call(null,loop_msec);
var inst_19270 = [cmd_chan,inst_19269];
var inst_19271 = (new cljs.core.PersistentVector(null,2,(5),inst_19268,inst_19270,null));
var state_19295__$1 = state_19295;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19295__$1,(4),inst_19271);
} else {
if((state_val_19296 === (11))){
var inst_19287 = (state_19295[(2)]);
var inst_19288 = setter.call(null,inst_19287);
var state_19295__$1 = (function (){var statearr_19359 = state_19295;
(statearr_19359[(9)] = inst_19288);

return statearr_19359;
})();
var statearr_19360_19429 = state_19295__$1;
(statearr_19360_19429[(2)] = null);

(statearr_19360_19429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (9))){
var inst_19284 = cljs.core.deref.call(null,state);
var inst_19285 = eval_fn.call(null,src_code,inst_19284);
var state_19295__$1 = state_19295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19295__$1,(11),inst_19285);
} else {
if((state_val_19296 === (5))){
var inst_19274 = (state_19295[(8)]);
var inst_19278 = cljs.core._EQ_.call(null,inst_19274,new cljs.core.Keyword(null,"reset","reset",-800929946));
var state_19295__$1 = state_19295;
var statearr_19361_19430 = state_19295__$1;
(statearr_19361_19430[(2)] = inst_19278);

(statearr_19361_19430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (10))){
var inst_19291 = (state_19295[(2)]);
var state_19295__$1 = state_19295;
var statearr_19362_19431 = state_19295__$1;
(statearr_19362_19431[(2)] = inst_19291);

(statearr_19362_19431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19296 === (8))){
var state_19295__$1 = state_19295;
var statearr_19363_19432 = state_19295__$1;
(statearr_19363_19432[(2)] = null);

(statearr_19363_19432[(1)] = (10));


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
var klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____0 = (function (){
var statearr_19364 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19364[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__);

(statearr_19364[(1)] = (1));

return statearr_19364;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____1 = (function (state_19295){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_19295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e19365){if((e19365 instanceof Object)){
var ex__13611__auto__ = e19365;
var statearr_19366_19433 = state_19295;
(statearr_19366_19433[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19434 = state_19295;
state_19295 = G__19434;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__ = function(state_19295){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____1.call(this,state_19295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_19367 = f__13705__auto__.call(null);
(statearr_19367[(6)] = c__13704__auto____$1);

return statearr_19367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
});
})();
var inst_19299 = cljs.core.async.impl.dispatch.run.call(null,inst_19298);
var state_19343__$1 = (function (){var statearr_19368 = state_19343;
(statearr_19368[(14)] = inst_19299);

return statearr_19368;
})();
var statearr_19369_19435 = state_19343__$1;
(statearr_19369_19435[(2)] = inst_19297);

(statearr_19369_19435[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (13))){
var inst_19255 = (state_19343[(12)]);
var inst_19259 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_19255);
var state_19343__$1 = state_19343;
var statearr_19370_19436 = state_19343__$1;
(statearr_19370_19436[(2)] = inst_19259);

(statearr_19370_19436[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (6))){
var inst_19230 = (state_19343[(10)]);
var inst_19231 = (state_19343[(2)]);
var inst_19232 = inst_19230.call(null,inst_19231);
var state_19343__$1 = state_19343;
var statearr_19371_19437 = state_19343__$1;
(statearr_19371_19437[(2)] = inst_19232);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19343__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (17))){
var inst_19230 = (state_19343[(10)]);
var inst_19253 = (state_19343[(11)]);
var inst_19240 = (state_19343[(7)]);
var inst_19238 = (state_19343[(8)]);
var inst_19255 = (state_19343[(12)]);
var inst_19261 = (state_19343[(13)]);
var inst_19239 = (state_19343[(9)]);
var inst_19302 = (state_19343[(2)]);
var inst_19337 = cljs.core.async.chan.call(null,(1));
var inst_19338 = (function (){var setter = inst_19230;
var map__19236 = inst_19238;
var cmd_chan = inst_19239;
var eval_counter = inst_19240;
var evaluation_chan = inst_19253;
var result = inst_19255;
var first_result = inst_19261;
var c__13704__auto____$1 = inst_19337;
return (function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_19335){
var state_val_19336 = (state_19335[(1)]);
if((state_val_19336 === (7))){
var inst_19313 = (state_19335[(7)]);
var inst_19306 = (state_19335[(8)]);
var inst_19312 = (state_19335[(2)]);
var inst_19313__$1 = cljs.core.map_QMARK_.call(null,inst_19306);
var state_19335__$1 = (function (){var statearr_19372 = state_19335;
(statearr_19372[(7)] = inst_19313__$1);

(statearr_19372[(9)] = inst_19312);

return statearr_19372;
})();
if(inst_19313__$1){
var statearr_19373_19438 = state_19335__$1;
(statearr_19373_19438[(1)] = (8));

} else {
var statearr_19374_19439 = state_19335__$1;
(statearr_19374_19439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (1))){
var inst_19303 = first_result;
var state_19335__$1 = (function (){var statearr_19375 = state_19335;
(statearr_19375[(10)] = inst_19303);

return statearr_19375;
})();
var statearr_19376_19440 = state_19335__$1;
(statearr_19376_19440[(2)] = null);

(statearr_19376_19440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (4))){
var inst_19306 = (state_19335[(8)]);
var inst_19306__$1 = (state_19335[(2)]);
var inst_19307 = cljs.core.map_QMARK_.call(null,inst_19306__$1);
var state_19335__$1 = (function (){var statearr_19377 = state_19335;
(statearr_19377[(8)] = inst_19306__$1);

return statearr_19377;
})();
if(inst_19307){
var statearr_19378_19441 = state_19335__$1;
(statearr_19378_19441[(1)] = (5));

} else {
var statearr_19379_19442 = state_19335__$1;
(statearr_19379_19442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (15))){
var state_19335__$1 = state_19335;
var statearr_19380_19443 = state_19335__$1;
(statearr_19380_19443[(2)] = null);

(statearr_19380_19443[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (13))){
var inst_19312 = (state_19335[(9)]);
var inst_19322 = (state_19335[(2)]);
var inst_19323 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19322),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19312)].join('');
var inst_19324 = (inst_19312 == null);
var inst_19325 = cljs.core.not.call(null,inst_19324);
var state_19335__$1 = (function (){var statearr_19381 = state_19335;
(statearr_19381[(11)] = inst_19323);

return statearr_19381;
})();
if(inst_19325){
var statearr_19382_19444 = state_19335__$1;
(statearr_19382_19444[(1)] = (14));

} else {
var statearr_19383_19445 = state_19335__$1;
(statearr_19383_19445[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (6))){
var inst_19306 = (state_19335[(8)]);
var state_19335__$1 = state_19335;
var statearr_19384_19446 = state_19335__$1;
(statearr_19384_19446[(2)] = inst_19306);

(statearr_19384_19446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (3))){
var inst_19333 = (state_19335[(2)]);
var state_19335__$1 = state_19335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19335__$1,inst_19333);
} else {
if((state_val_19336 === (12))){
var inst_19303 = (state_19335[(10)]);
var state_19335__$1 = state_19335;
var statearr_19385_19447 = state_19335__$1;
(statearr_19385_19447[(2)] = inst_19303);

(statearr_19385_19447[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (2))){
var state_19335__$1 = state_19335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19335__$1,(4),evaluation_chan);
} else {
if((state_val_19336 === (11))){
var state_19335__$1 = state_19335;
var statearr_19386_19448 = state_19335__$1;
(statearr_19386_19448[(2)] = null);

(statearr_19386_19448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (9))){
var inst_19313 = (state_19335[(7)]);
var state_19335__$1 = state_19335;
var statearr_19387_19449 = state_19335__$1;
(statearr_19387_19449[(2)] = inst_19313);

(statearr_19387_19449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (5))){
var inst_19306 = (state_19335[(8)]);
var inst_19309 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_19306);
var state_19335__$1 = state_19335;
var statearr_19388_19450 = state_19335__$1;
(statearr_19388_19450[(2)] = inst_19309);

(statearr_19388_19450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (14))){
var inst_19323 = (state_19335[(11)]);
var inst_19327 = setter.call(null,inst_19323);
var inst_19303 = inst_19323;
var state_19335__$1 = (function (){var statearr_19389 = state_19335;
(statearr_19389[(10)] = inst_19303);

(statearr_19389[(12)] = inst_19327);

return statearr_19389;
})();
var statearr_19390_19451 = state_19335__$1;
(statearr_19390_19451[(2)] = null);

(statearr_19390_19451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (16))){
var inst_19331 = (state_19335[(2)]);
var state_19335__$1 = state_19335;
var statearr_19391_19452 = state_19335__$1;
(statearr_19391_19452[(2)] = inst_19331);

(statearr_19391_19452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (10))){
var inst_19318 = (state_19335[(2)]);
var state_19335__$1 = state_19335;
if(cljs.core.truth_(inst_19318)){
var statearr_19392_19453 = state_19335__$1;
(statearr_19392_19453[(1)] = (11));

} else {
var statearr_19393_19454 = state_19335__$1;
(statearr_19393_19454[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19336 === (8))){
var inst_19306 = (state_19335[(8)]);
var inst_19315 = new cljs.core.Keyword(null,"remove-previous-results","remove-previous-results",883218005).cljs$core$IFn$_invoke$arity$1(inst_19306);
var state_19335__$1 = state_19335;
var statearr_19394_19455 = state_19335__$1;
(statearr_19394_19455[(2)] = inst_19315);

(statearr_19394_19455[(1)] = (10));


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
var klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____0 = (function (){
var statearr_19395 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19395[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__);

(statearr_19395[(1)] = (1));

return statearr_19395;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____1 = (function (state_19335){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_19335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e19396){if((e19396 instanceof Object)){
var ex__13611__auto__ = e19396;
var statearr_19397_19456 = state_19335;
(statearr_19397_19456[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19457 = state_19335;
state_19335 = G__19457;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__ = function(state_19335){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____1.call(this,state_19335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_19398 = f__13705__auto__.call(null);
(statearr_19398[(6)] = c__13704__auto____$1);

return statearr_19398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
});
})();
var inst_19339 = cljs.core.async.impl.dispatch.run.call(null,inst_19338);
var state_19343__$1 = (function (){var statearr_19399 = state_19343;
(statearr_19399[(15)] = inst_19302);

(statearr_19399[(16)] = inst_19339);

return statearr_19399;
})();
var statearr_19400_19458 = state_19343__$1;
(statearr_19400_19458[(2)] = inst_19337);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19343__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (3))){
var state_19343__$1 = state_19343;
var statearr_19401_19459 = state_19343__$1;
(statearr_19401_19459[(2)] = cljs.core.any_QMARK_);

(statearr_19401_19459[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (12))){
var inst_19255 = (state_19343[(12)]);
var state_19343__$1 = state_19343;
var statearr_19402_19460 = state_19343__$1;
(statearr_19402_19460[(2)] = inst_19255);

(statearr_19402_19460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (2))){
var state_19343__$1 = state_19343;
var statearr_19403_19461 = state_19343__$1;
(statearr_19403_19461[(2)] = unsafe_setter);

(statearr_19403_19461[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (11))){
var inst_19255 = (state_19343[(12)]);
var inst_19255__$1 = (state_19343[(2)]);
var inst_19256 = typeof inst_19255__$1 === 'string';
var state_19343__$1 = (function (){var statearr_19404 = state_19343;
(statearr_19404[(12)] = inst_19255__$1);

return statearr_19404;
})();
if(cljs.core.truth_(inst_19256)){
var statearr_19405_19462 = state_19343__$1;
(statearr_19405_19462[(1)] = (12));

} else {
var statearr_19406_19463 = state_19343__$1;
(statearr_19406_19463[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (9))){
var inst_19239 = (state_19343[(9)]);
var inst_19244 = cljs.core.async.put_BANG_.call(null,inst_19239,new cljs.core.Keyword(null,"reset","reset",-800929946));
var state_19343__$1 = state_19343;
var statearr_19407_19464 = state_19343__$1;
(statearr_19407_19464[(2)] = inst_19244);

(statearr_19407_19464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (5))){
var inst_19341 = (state_19343[(2)]);
var state_19343__$1 = state_19343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19343__$1,inst_19341);
} else {
if((state_val_19344 === (14))){
var inst_19230 = (state_19343[(10)]);
var inst_19261 = (state_19343[(13)]);
var inst_19261__$1 = (state_19343[(2)]);
var inst_19262 = inst_19230.call(null,inst_19261__$1);
var state_19343__$1 = (function (){var statearr_19408 = state_19343;
(statearr_19408[(13)] = inst_19261__$1);

(statearr_19408[(17)] = inst_19262);

return statearr_19408;
})();
if(cljs.core.truth_(loop_msec)){
var statearr_19409_19465 = state_19343__$1;
(statearr_19409_19465[(1)] = (15));

} else {
var statearr_19410_19466 = state_19343__$1;
(statearr_19410_19466[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (16))){
var state_19343__$1 = state_19343;
var statearr_19411_19467 = state_19343__$1;
(statearr_19411_19467[(2)] = null);

(statearr_19411_19467[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (10))){
var inst_19253 = (state_19343[(11)]);
var inst_19246 = (state_19343[(2)]);
var inst_19247 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19248 = [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598)];
var inst_19249 = (new cljs.core.PersistentVector(null,1,(5),inst_19247,inst_19248,null));
var inst_19250 = cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,inst_19249,cljs.core.inc);
var inst_19251 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(preamble),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_code)].join('');
var inst_19252 = cljs.core.deref.call(null,state);
var inst_19253__$1 = eval_fn.call(null,inst_19251,inst_19252);
var state_19343__$1 = (function (){var statearr_19412 = state_19343;
(statearr_19412[(18)] = inst_19250);

(statearr_19412[(11)] = inst_19253__$1);

(statearr_19412[(19)] = inst_19246);

return statearr_19412;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19343__$1,(11),inst_19253__$1);
} else {
if((state_val_19344 === (8))){
var state_19343__$1 = state_19343;
var statearr_19413_19468 = state_19343__$1;
(statearr_19413_19468[(2)] = null);

(statearr_19413_19468[(1)] = (10));


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
var klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__ = null;
var klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____0 = (function (){
var statearr_19414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19414[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__);

(statearr_19414[(1)] = (1));

return statearr_19414;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____1 = (function (state_19343){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_19343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e19415){if((e19415 instanceof Object)){
var ex__13611__auto__ = e19415;
var statearr_19416_19469 = state_19343;
(statearr_19416_19469[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19470 = state_19343;
state_19343 = G__19470;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__ = function(state_19343){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____1.call(this,state_19343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_19417 = f__13705__auto__.call(null);
(statearr_19417[(6)] = c__13704__auto__);

return statearr_19417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.klipse_editors.eval_in_codemirror_editor = (function klipse$klipse_editors$eval_in_codemirror_editor(eval_fn,result_element,editor_source,snippet_args,mode,state){
var editor_args = new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,klipse.ui.editors.editor.get_selection_when_selected.call(null,editor_source),(cljs.core.truth_(result_element)?(function (p1__19471_SHARP_){
return klipse.ui.editors.editor.set_value_and_beautify.call(null,result_element,mode,p1__19471_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441).cljs$core$IFn$_invoke$arity$1(editor_args),new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false], null));
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
var obj19472 = elem;
var obj19473 = (((!((obj19472 == null))))?obj19472:({}));
(obj19473["innerHTML"] = wrapped_res);

return obj19473;
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
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"html","html",-998796897),(function (_,p__19476){
var map__19477 = p__19476;
var map__19477__$1 = cljs.core.__destructure_map.call(null,map__19477);
var editor_args = map__19477__$1;
var eval_fn = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var on_edit_cb = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"on-edit-cb","on-edit-cb",1727649734));
var source_code = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__19477__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__19478 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__19478,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__19478,(1),null);
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

var obj19481 = window;
var obj19482 = (((!((obj19481 == null))))?obj19481:({}));
(obj19482["klipse_editors"] = cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,klipse.klipse_editors.editors)));

return obj19482;
});
klipse.klipse_editors.add_result_element_BANG_ = (function klipse$klipse_editors$add_result_element_BANG_(result_element,snippet_num){
cljs.core.swap_BANG_.call(null,klipse.klipse_editors.result_elements,cljs.core.assoc,snippet_num,result_element);

var obj19485 = window;
var obj19486 = (((!((obj19485 == null))))?obj19485:({}));
(obj19486["klipse_results"] = cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,klipse.klipse_editors.result_elements)));

return obj19486;
});
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768),(function (_,p__19489){
var map__19490 = p__19489;
var map__19490__$1 = cljs.core.__destructure_map.call(null,map__19490);
var editor_args = map__19490__$1;
var eval_fn = cljs.core.get.call(null,map__19490__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__19490__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__19490__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__19490__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__19490__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__19490__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__19490__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__19490__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__19490__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var on_edit_cb = cljs.core.get.call(null,map__19490__$1,new cljs.core.Keyword(null,"on-edit-cb","on-edit-cb",1727649734));
var mode = cljs.core.get.call(null,map__19490__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var source_code = cljs.core.get.call(null,map__19490__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__19490__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__19490__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__19490__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__19490__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__19491 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__19491,(0),null);
var out_editor_options = cljs.core.nth.call(null,vec__19491,(1),null);
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var ___$1 = klipse.dom_utils.create_div_after.call(null,container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"klipse-separator"], null));
var result_element = (cljs.core.truth_(no_result)?null:klipse.ui.editors.editor.create_editor_after_element.call(null,element,default_txt,out_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["klipse-result",["klipse-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode)].join('')], null)));
var in_editor = klipse.ui.editors.editor.replace_element_by_editor.call(null,element,source_code,in_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["klipse-snippet",["klipse-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode)].join('')], null));
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
klipse.ui.editors.common.handle_events.call(null,in_editor,gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"on-completion","on-completion",1522510572),((cljs.core._EQ_.call(null,"clojure",editor_in_mode))?(function (){
return klipse.ui.editors.editor.trigger_autocomplete.call(null,in_editor,(function (){var parent__17210__auto__ = (function (){var obj19498 = (function (){var obj19496 = (function (){var obj19494 = window;
var k19495 = "klipse_clj";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19494,k19495)){
return (obj19494[k19495]);
} else {
return null;
}
})();
var k19497 = "lang";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19496,k19497)){
return (obj19496[k19497]);
} else {
return null;
}
})();
var k19499 = "clojure";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19498,k19499)){
return (obj19498[k19499]);
} else {
return null;
}
})();
var f__17211__auto__ = (function (){var obj19500 = parent__17210__auto__;
var k19501 = "completions";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19500,k19501)){
return (obj19500[k19501]);
} else {
return null;
}
})();
return f__17211__auto__.call(parent__17210__auto__,klipse.ui.editors.editor.current_token.call(null,in_editor));
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
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"dom","dom",-1236537922),(function (_,p__19502){
var map__19503 = p__19502;
var map__19503__$1 = cljs.core.__destructure_map.call(null,map__19503);
var editor_args = map__19503__$1;
var snippet_num = cljs.core.get.call(null,map__19503__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var element = cljs.core.get.call(null,map__19503__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var eval_fn = cljs.core.get.call(null,map__19503__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var default_txt = cljs.core.get.call(null,map__19503__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var loop_msec = cljs.core.get.call(null,map__19503__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var preamble = cljs.core.get.call(null,map__19503__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var no_result = cljs.core.get.call(null,map__19503__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
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

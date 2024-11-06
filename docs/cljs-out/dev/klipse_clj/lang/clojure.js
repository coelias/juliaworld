// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse_clj.lang.clojure');
goog.require('cljs.core');
goog.require('klipse_clj.lang.clojure.bundled_namespaces');
goog.require('gadjett.core_fn');
goog.require('cljs.tagged_literals');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('klipse_clj.repl');
goog.require('klipse_clj.lang.clojure.guard');
goog.require('klipse_clj.lang.clojure.io');
goog.require('cljs.pprint');
goog.require('cljs.analyzer');
goog.require('klipse_clj.lang.cljs_repl');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.compiler');
goog.require('cljs.core.async');
goog.require('cljs.env');
goog.require('cljs.js');
klipse_clj.lang.clojure.load_core_macros_cache = (function klipse_clj$lang$clojure$load_core_macros_cache(){
return klipse_clj.lang.clojure.io.load_ns_from_file.call(null,cljs.core.deref.call(null,klipse_clj.repl.st),new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),"/cljs/core$macros.cljc.cache.json"].join(''));
});
klipse_clj.lang.clojure.init_custom_macros = (function klipse_clj$lang$clojure$init_custom_macros(){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_30474){
var state_val_30475 = (state_30474[(1)]);
if((state_val_30475 === (7))){
var inst_30470 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
var statearr_30476_30502 = state_30474__$1;
(statearr_30476_30502[(2)] = inst_30470);

(statearr_30476_30502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (1))){
var inst_30413 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_30474__$1 = state_30474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30474__$1,(2),inst_30413);
} else {
if((state_val_30475 === (4))){
var inst_30472 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30474__$1,inst_30472);
} else {
if((state_val_30475 === (15))){
var inst_30444 = (state_30474[(7)]);
var inst_30461 = (state_30474[(2)]);
var inst_30462 = cljs.core.next.call(null,inst_30444);
var inst_30424 = inst_30462;
var inst_30425 = null;
var inst_30426 = (0);
var inst_30427 = (0);
var state_30474__$1 = (function (){var statearr_30477 = state_30474;
(statearr_30477[(8)] = inst_30461);

(statearr_30477[(9)] = inst_30426);

(statearr_30477[(10)] = inst_30424);

(statearr_30477[(11)] = inst_30427);

(statearr_30477[(12)] = inst_30425);

return statearr_30477;
})();
var statearr_30478_30503 = state_30474__$1;
(statearr_30478_30503[(2)] = null);

(statearr_30478_30503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (13))){
var inst_30444 = (state_30474[(7)]);
var inst_30453 = cljs.core.first.call(null,inst_30444);
var inst_30454 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_30455 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_30456 = [inst_30455,klipse_clj.repl.current_ns_eval];
var inst_30457 = cljs.core.PersistentHashMap.fromArrays(inst_30454,inst_30456);
var inst_30458 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_30453,inst_30457);
var inst_30459 = cljs.core.first.call(null,inst_30458);
var state_30474__$1 = state_30474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30474__$1,(15),inst_30459);
} else {
if((state_val_30475 === (6))){
var inst_30424 = (state_30474[(10)]);
var inst_30444 = (state_30474[(7)]);
var inst_30444__$1 = cljs.core.seq.call(null,inst_30424);
var state_30474__$1 = (function (){var statearr_30479 = state_30474;
(statearr_30479[(7)] = inst_30444__$1);

return statearr_30479;
})();
if(inst_30444__$1){
var statearr_30480_30504 = state_30474__$1;
(statearr_30480_30504[(1)] = (9));

} else {
var statearr_30481_30505 = state_30474__$1;
(statearr_30481_30505[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (3))){
var inst_30426 = (state_30474[(9)]);
var inst_30427 = (state_30474[(11)]);
var inst_30429 = (inst_30427 < inst_30426);
var inst_30430 = inst_30429;
var state_30474__$1 = state_30474;
if(cljs.core.truth_(inst_30430)){
var statearr_30482_30506 = state_30474__$1;
(statearr_30482_30506[(1)] = (5));

} else {
var statearr_30483_30507 = state_30474__$1;
(statearr_30483_30507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (12))){
var inst_30444 = (state_30474[(7)]);
var inst_30448 = cljs.core.chunk_first.call(null,inst_30444);
var inst_30449 = cljs.core.chunk_rest.call(null,inst_30444);
var inst_30450 = cljs.core.count.call(null,inst_30448);
var inst_30424 = inst_30449;
var inst_30425 = inst_30448;
var inst_30426 = inst_30450;
var inst_30427 = (0);
var state_30474__$1 = (function (){var statearr_30484 = state_30474;
(statearr_30484[(9)] = inst_30426);

(statearr_30484[(10)] = inst_30424);

(statearr_30484[(11)] = inst_30427);

(statearr_30484[(12)] = inst_30425);

return statearr_30484;
})();
var statearr_30485_30508 = state_30474__$1;
(statearr_30485_30508[(2)] = null);

(statearr_30485_30508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (2))){
var inst_30415 = (state_30474[(2)]);
var inst_30420 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30421 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg inferred-type]])"];
var inst_30422 = (new cljs.core.PersistentVector(null,2,(5),inst_30420,inst_30421,null));
var inst_30423 = cljs.core.seq.call(null,inst_30422);
var inst_30424 = inst_30423;
var inst_30425 = null;
var inst_30426 = (0);
var inst_30427 = (0);
var state_30474__$1 = (function (){var statearr_30486 = state_30474;
(statearr_30486[(9)] = inst_30426);

(statearr_30486[(10)] = inst_30424);

(statearr_30486[(11)] = inst_30427);

(statearr_30486[(13)] = inst_30415);

(statearr_30486[(12)] = inst_30425);

return statearr_30486;
})();
var statearr_30487_30509 = state_30474__$1;
(statearr_30487_30509[(2)] = null);

(statearr_30487_30509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (11))){
var inst_30468 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
var statearr_30488_30510 = state_30474__$1;
(statearr_30488_30510[(2)] = inst_30468);

(statearr_30488_30510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (9))){
var inst_30444 = (state_30474[(7)]);
var inst_30446 = cljs.core.chunked_seq_QMARK_.call(null,inst_30444);
var state_30474__$1 = state_30474;
if(inst_30446){
var statearr_30489_30511 = state_30474__$1;
(statearr_30489_30511[(1)] = (12));

} else {
var statearr_30490_30512 = state_30474__$1;
(statearr_30490_30512[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (5))){
var inst_30427 = (state_30474[(11)]);
var inst_30425 = (state_30474[(12)]);
var inst_30432 = cljs.core._nth.call(null,inst_30425,inst_30427);
var inst_30433 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_30434 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_30435 = [inst_30434,klipse_clj.repl.current_ns_eval];
var inst_30436 = cljs.core.PersistentHashMap.fromArrays(inst_30433,inst_30435);
var inst_30437 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_30432,inst_30436);
var inst_30438 = cljs.core.first.call(null,inst_30437);
var state_30474__$1 = state_30474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30474__$1,(8),inst_30438);
} else {
if((state_val_30475 === (14))){
var inst_30465 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
var statearr_30494_30513 = state_30474__$1;
(statearr_30494_30513[(2)] = inst_30465);

(statearr_30494_30513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (10))){
var state_30474__$1 = state_30474;
var statearr_30495_30514 = state_30474__$1;
(statearr_30495_30514[(2)] = null);

(statearr_30495_30514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (8))){
var inst_30426 = (state_30474[(9)]);
var inst_30424 = (state_30474[(10)]);
var inst_30427 = (state_30474[(11)]);
var inst_30425 = (state_30474[(12)]);
var inst_30440 = (state_30474[(2)]);
var inst_30441 = (inst_30427 + (1));
var tmp30491 = inst_30426;
var tmp30492 = inst_30424;
var tmp30493 = inst_30425;
var inst_30424__$1 = tmp30492;
var inst_30425__$1 = tmp30493;
var inst_30426__$1 = tmp30491;
var inst_30427__$1 = inst_30441;
var state_30474__$1 = (function (){var statearr_30496 = state_30474;
(statearr_30496[(9)] = inst_30426__$1);

(statearr_30496[(10)] = inst_30424__$1);

(statearr_30496[(11)] = inst_30427__$1);

(statearr_30496[(14)] = inst_30440);

(statearr_30496[(12)] = inst_30425__$1);

return statearr_30496;
})();
var statearr_30497_30515 = state_30474__$1;
(statearr_30497_30515[(2)] = null);

(statearr_30497_30515[(1)] = (3));


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
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto____0 = (function (){
var statearr_30498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30498[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto__);

(statearr_30498[(1)] = (1));

return statearr_30498;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto____1 = (function (state_30474){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_30474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e30499){if((e30499 instanceof Object)){
var ex__13611__auto__ = e30499;
var statearr_30500_30516 = state_30474;
(statearr_30500_30516[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30517 = state_30474;
state_30474 = G__30517;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto__ = function(state_30474){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto____1.call(this,state_30474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_30501 = f__13705__auto__.call(null);
(statearr_30501[(6)] = c__13704__auto__);

return statearr_30501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_30520){
var state_val_30521 = (state_30520[(1)]);
if((state_val_30521 === (1))){
var inst_30518 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_30520__$1 = state_30520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30520__$1,inst_30518);
} else {
return null;
}
});
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto____0 = (function (){
var statearr_30522 = [null,null,null,null,null,null,null];
(statearr_30522[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto__);

(statearr_30522[(1)] = (1));

return statearr_30522;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto____1 = (function (state_30520){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_30520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e30523){if((e30523 instanceof Object)){
var ex__13611__auto__ = e30523;
var statearr_30524_30526 = state_30520;
(statearr_30524_30526[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30527 = state_30520;
state_30520 = G__30527;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto__ = function(state_30520){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto____1.call(this,state_30520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_30525 = f__13705__auto__.call(null);
(statearr_30525[(6)] = c__13704__auto__);

return statearr_30525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
} else {
cljs.core.reset_BANG_.call(null,klipse_clj.repl.st,cljs.js.empty_state.call(null));

return klipse_clj.lang.clojure.init_custom_macros.call(null);
}
});
klipse_clj.lang.clojure.reader_error_QMARK_ = (function klipse_clj$lang$clojure$reader_error_QMARK_(e){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,e)));
});
klipse_clj.lang.clojure.error_message = (function klipse_clj$lang$clojure$error_message(error){
if((error instanceof cljs.core.ExceptionInfo)){
return cljs.core.ex_message.call(null,error);
} else {
return error.message;
}
});
klipse_clj.lang.clojure.display_err = (function klipse_clj$lang$clojure$display_err(error){
try{if(cljs.core.contains_QMARK_.call(null,cljs.core.ex_data.call(null,cljs.core.ex_cause.call(null,error)),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358))){
return klipse_clj.lang.cljs_repl.error__GT_str.call(null,cljs.core.ex_cause.call(null,error));
} else {
if(klipse_clj.lang.clojure.reader_error_QMARK_.call(null,error)){
return ["Syntax error reading source.","\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.error_message.call(null,error))].join('');
} else {
return ["Execution error.\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message.call(null,error)),(cljs.core.truth_(cljs.core.ex_cause.call(null,error))?[": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_cause.call(null,error))].join(''):null)].join('');

}
}
}catch (e30528){if((e30528 instanceof Object)){
var e = e30528;

return e;
} else {
throw e30528;

}
}});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__30529){
var map__30530 = p__30529;
var map__30530__$1 = cljs.core.__destructure_map.call(null,map__30530);
var print_length = cljs.core.get.call(null,map__30530__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__30530__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__30532 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__30533 = print_length;
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__30533);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30534_30538 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30535_30539 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30536_30540 = true;
var _STAR_print_fn_STAR__temp_val__30537_30541 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30536_30540);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30537_30541);

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__5041__auto__ = typeof value === 'string';
if(and__5041__auto__){
return beautify_strings;
} else {
return and__5041__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30535_30539);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30534_30538);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})()], null);
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__30532);
}}catch (e30531){if((e30531 instanceof Object)){
var e = e30531;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("klipse","print-error","klipse/print-error",-136370564)], null),cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263)], null))))], null);
} else {
throw e30531;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__30542,verbose_QMARK_,current_ns){
var map__30543 = p__30542;
var map__30543__$1 = cljs.core.__destructure_map.call(null,map__30543);
var ns = cljs.core.get.call(null,map__30543__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__30543__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__30543__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__30543__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__30543__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__30543__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
if(cljs.core.truth_(error)){
return null;
} else {
if(cljs.core.truth_(verbose_QMARK_)){
console.info("update-current-ns:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns));
} else {
}

return cljs.core.reset_BANG_.call(null,current_ns,ns);
}
});
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__30544,opts){
var map__30545 = p__30544;
var map__30545__$1 = cljs.core.__destructure_map.call(null,map__30545);
var args = map__30545__$1;
var ns = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
if(cljs.core.not.call(null,error)){
return klipse_clj.lang.clojure.display.call(null,value,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,error)], null);
}
});
klipse_clj.lang.clojure.result_as_prepl_map = (function klipse_clj$lang$clojure$result_as_prepl_map(form_str,p__30546,opts){
var map__30547 = p__30546;
var map__30547__$1 = cljs.core.__destructure_map.call(null,map__30547);
var args = map__30547__$1;
var ns = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var vec__30548 = klipse_clj.lang.clojure.result_as_str.call(null,args,opts);
var status = cljs.core.nth.call(null,vec__30548,(0),null);
var val = cljs.core.nth.call(null,vec__30548,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status))?new cljs.core.Keyword(null,"err","err",-2089457205):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"form","form",-1624062471),form_str], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__30551){
var map__30552 = p__30551;
var map__30552__$1 = cljs.core.__destructure_map.call(null,map__30552);
var form = cljs.core.get.call(null,map__30552__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__30552__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__30552__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__30552__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__30552__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__30553){
var map__30554 = p__30553;
var map__30554__$1 = cljs.core.__destructure_map.call(null,map__30554);
var foo = map__30554__$1;
var value = cljs.core.get.call(null,map__30554__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__30554__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__30555){
var map__30556 = p__30555;
var map__30556__$1 = cljs.core.__destructure_map.call(null,map__30556);
var args = map__30556__$1;
var file = cljs.core.get.call(null,map__30556__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__30556__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__30556__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__30556__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__30556__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__30556__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__30557){
var map__30558 = p__30557;
var map__30558__$1 = cljs.core.__destructure_map.call(null,map__30558);
var source = cljs.core.get.call(null,map__30558__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__30559){
var map__30560 = p__30559;
var map__30560__$1 = cljs.core.__destructure_map.call(null,map__30560);
var static_fns = cljs.core.get.call(null,map__30560__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__30560__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__30560__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__30560__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__30560__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__30560__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__30560__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var c = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__5128__auto__ = max_eval_duration;
var y__5129__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var the_emits = (cljs.core.truth_(compile_display_guard)?cljs.core.partial.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration__$1):klipse_clj.lang.clojure.original_emits);
try{cljs.js.eval_str.call(null,st,s,"compile.klipse",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.eval_for_compilation,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),(cljs.env._STAR_compiler_STAR_ = st),new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),(function (res){
klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);

return cljs.core.async.put_BANG_.call(null,c,res);
}));
}finally {}
return c;
});
klipse_clj.lang.clojure.warning_handler = (function klipse_clj$lang$clojure$warning_handler(c,warning_type,env,extra){
if(cljs.core.truth_(warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_))){
var temp__5804__auto__ = cljs.analyzer.error_message.call(null,warning_type,extra);
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
return cljs.core.async.put_BANG_.call(null,c,[cljs.analyzer.message.call(null,env,["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')),"\n"].join(''));
} else {
return null;
}
} else {
return null;
}
});
klipse_clj.lang.clojure.read_until_closed_BANG_ = (function klipse_clj$lang$clojure$read_until_closed_BANG_(c){
var d = cljs.core.async.chan.call(null);
var c__13704__auto___30592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_30577){
var state_val_30578 = (state_30577[(1)]);
if((state_val_30578 === (1))){
var inst_30561 = cljs.core.PersistentVector.EMPTY;
var inst_30562 = inst_30561;
var state_30577__$1 = (function (){var statearr_30579 = state_30577;
(statearr_30579[(7)] = inst_30562);

return statearr_30579;
})();
var statearr_30580_30593 = state_30577__$1;
(statearr_30580_30593[(2)] = null);

(statearr_30580_30593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30578 === (2))){
var state_30577__$1 = state_30577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30577__$1,(4),c);
} else {
if((state_val_30578 === (3))){
var inst_30575 = (state_30577[(2)]);
var state_30577__$1 = state_30577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30577__$1,inst_30575);
} else {
if((state_val_30578 === (4))){
var inst_30565 = (state_30577[(8)]);
var inst_30565__$1 = (state_30577[(2)]);
var inst_30566 = (inst_30565__$1 == null);
var state_30577__$1 = (function (){var statearr_30581 = state_30577;
(statearr_30581[(8)] = inst_30565__$1);

return statearr_30581;
})();
if(cljs.core.truth_(inst_30566)){
var statearr_30582_30594 = state_30577__$1;
(statearr_30582_30594[(1)] = (5));

} else {
var statearr_30583_30595 = state_30577__$1;
(statearr_30583_30595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30578 === (5))){
var inst_30562 = (state_30577[(7)]);
var inst_30568 = cljs.core.async.put_BANG_.call(null,d,inst_30562);
var state_30577__$1 = state_30577;
var statearr_30584_30596 = state_30577__$1;
(statearr_30584_30596[(2)] = inst_30568);

(statearr_30584_30596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30578 === (6))){
var inst_30562 = (state_30577[(7)]);
var inst_30565 = (state_30577[(8)]);
var inst_30570 = cljs.core.conj.call(null,inst_30562,inst_30565);
var inst_30562__$1 = inst_30570;
var state_30577__$1 = (function (){var statearr_30585 = state_30577;
(statearr_30585[(7)] = inst_30562__$1);

return statearr_30585;
})();
var statearr_30586_30597 = state_30577__$1;
(statearr_30586_30597[(2)] = null);

(statearr_30586_30597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30578 === (7))){
var inst_30573 = (state_30577[(2)]);
var state_30577__$1 = state_30577;
var statearr_30587_30598 = state_30577__$1;
(statearr_30587_30598[(2)] = inst_30573);

(statearr_30587_30598[(1)] = (3));


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
});
return (function() {
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto____0 = (function (){
var statearr_30588 = [null,null,null,null,null,null,null,null,null];
(statearr_30588[(0)] = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto__);

(statearr_30588[(1)] = (1));

return statearr_30588;
});
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto____1 = (function (state_30577){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_30577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e30589){if((e30589 instanceof Object)){
var ex__13611__auto__ = e30589;
var statearr_30590_30599 = state_30577;
(statearr_30590_30599[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30600 = state_30577;
state_30577 = G__30600;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto__ = function(state_30577){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto____1.call(this,state_30577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_30591 = f__13705__auto__.call(null);
(statearr_30591[(6)] = c__13704__auto___30592);

return statearr_30591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return d;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__30601){
var map__30602 = p__30601;
var map__30602__$1 = cljs.core.__destructure_map.call(null,map__30602);
var static_fns = cljs.core.get.call(null,map__30602__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__30602__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__30602__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__30602__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__30602__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__30602__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var res_chan = cljs.core.async.chan.call(null);
var warnings_chan = cljs.core.async.chan.call(null,(1024));
var agg_warnings_chan = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__5128__auto__ = max_eval_duration;
var y__5129__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var _STAR_cljs_warning_handlers_STAR__orig_val__30603 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__30604 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,klipse_clj.lang.clojure.warning_handler,warnings_chan)], null);
(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__30604);

try{try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),(cljs.env._STAR_compiler_STAR_ = st),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),(function (res){
cljs.core.async.close_BANG_.call(null,warnings_chan);

var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_30613){
var state_val_30614 = (state_30613[(1)]);
if((state_val_30614 === (1))){
var inst_30605 = klipse_clj.lang.clojure.read_until_closed_BANG_.call(null,warnings_chan);
var state_30613__$1 = state_30613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30613__$1,(2),inst_30605);
} else {
if((state_val_30614 === (2))){
var inst_30607 = (state_30613[(2)]);
var inst_30608 = klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);
var inst_30609 = cljs.core.async.put_BANG_.call(null,res_chan,res);
var inst_30610 = clojure.string.join.call(null,"",inst_30607);
var inst_30611 = cljs.core.async.put_BANG_.call(null,agg_warnings_chan,inst_30610);
var state_30613__$1 = (function (){var statearr_30615 = state_30613;
(statearr_30615[(7)] = inst_30609);

(statearr_30615[(8)] = inst_30608);

return statearr_30615;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30613__$1,inst_30611);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto____0 = (function (){
var statearr_30616 = [null,null,null,null,null,null,null,null,null];
(statearr_30616[(0)] = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto__);

(statearr_30616[(1)] = (1));

return statearr_30616;
});
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto____1 = (function (state_30613){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_30613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e30617){if((e30617 instanceof Object)){
var ex__13611__auto__ = e30617;
var statearr_30618_30620 = state_30613;
(statearr_30618_30620[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30621 = state_30613;
state_30613 = G__30621;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto__ = function(state_30613){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto____1.call(this,state_30613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_30619 = f__13705__auto__.call(null);
(statearr_30619[(6)] = c__13704__auto__);

return statearr_30619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
}));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,agg_warnings_chan], null);
}finally {}}finally {(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__30603);
}});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5802__auto__)){
var ch = temp__5802__auto__;
var G__30622 = cljs.core.conj.call(null,res,ch);
res = G__30622;
continue;
} else {
return res;
}
break;
}
});
klipse_clj.lang.clojure.reader_content = (function klipse_clj$lang$clojure$reader_content(r){
return cljs.core.apply.call(null,cljs.core.str,klipse_clj.lang.clojure.read_chars.call(null,r));
});
klipse_clj.lang.clojure.data_readers = (function klipse_clj$lang$clojure$data_readers(){
return cljs.tagged_literals._STAR_cljs_data_readers_STAR_;
});
klipse_clj.lang.clojure.first_exp_and_rest = (function klipse_clj$lang$clojure$first_exp_and_rest(s,st,ns){
var _STAR_alias_map_STAR__orig_val__30623 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__30624 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__30625 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__30626 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__30627 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__30628 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__30629 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__30630 = ns;
var _STAR_cljs_ns_STAR__temp_val__30631 = ns;
var _STAR_compiler_STAR__temp_val__30632 = st;
var resolve_symbol_temp_val__30633 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__30634 = klipse_clj.lang.clojure.data_readers.call(null);
(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__30629);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__30630);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__30631);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__30632);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__30633);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__30634);

try{var sentinel = ({});
var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
var res = cljs.tools.reader.read.call(null,reader,false,sentinel);
if(cljs.core._EQ_.call(null,sentinel,res)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null);
} else {
var rest_s = klipse_clj.lang.clojure.reader_content.call(null,reader);
var first_exp = cljs.core.subs.call(null,s,(0),(cljs.core.count.call(null,s) - cljs.core.count.call(null,rest_s)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace.call(null,first_exp,/^[\s\n]*/,""),rest_s], null);
}
}finally {(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__30628);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__30627);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__30626);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__30625);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__30624);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__30623);
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__30638 = arguments.length;
switch (G__30638) {
case 1:
return klipse_clj.lang.clojure.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return klipse_clj.lang.clojure.read_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(klipse_clj.lang.clojure.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return klipse_clj.lang.clojure.read_string.call(null,s,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
}));

(klipse_clj.lang.clojure.read_string.cljs$core$IFn$_invoke$arity$3 = (function (s,st,ns){
var _STAR_alias_map_STAR__orig_val__30639 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__30640 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__30641 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__30642 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__30643 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__30644 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__30645 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__30646 = ns;
var _STAR_cljs_ns_STAR__temp_val__30647 = ns;
var _STAR_compiler_STAR__temp_val__30648 = st;
var resolve_symbol_temp_val__30649 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__30650 = klipse_clj.lang.clojure.data_readers.call(null);
(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__30645);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__30646);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__30647);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__30648);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__30649);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__30650);

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__30644);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__30643);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__30642);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__30641);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__30640);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__30639);
}}));

(klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3);

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__30655 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__30655,(0),null);
var rest_s = cljs.core.nth.call(null,vec__30655,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__30658 = rest_s;
var G__30659 = res;
s__$1 = G__30658;
res = G__30659;
continue;
} else {
var G__30660 = rest_s;
var G__30661 = cljs.core.conj.call(null,res,exp);
s__$1 = G__30660;
res = G__30661;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__30662){
var map__30663 = p__30662;
var map__30663__$1 = cljs.core.__destructure_map.call(null,map__30663);
var result_element = cljs.core.get.call(null,map__30663__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__30663__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
if(cljs.core.truth_((function (){var and__5041__auto__ = container;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not.call(null,result_element);
} else {
return and__5041__auto__;
}
})())){
goog.dom.setTextContent(container,klipse_clj.lang.clojure.display_err.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(err)));
} else {
}

return err;
});
klipse_clj.lang.clojure.completions = klipse_clj.repl.get_completions;
klipse_clj.lang.clojure.core_eval = (function klipse_clj$lang$clojure$core_eval(s,opts){
var res_chan = cljs.core.async.chan.call(null);
var warnings_chan = cljs.core.async.chan.call(null);
var c__13704__auto___30767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_30739){
var state_val_30740 = (state_30739[(1)]);
if((state_val_30740 === (7))){
var inst_30735 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30741_30768 = state_30739__$1;
(statearr_30741_30768[(2)] = inst_30735);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30739__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (1))){
var state_30739__$1 = state_30739;
var statearr_30742_30769 = state_30739__$1;
(statearr_30742_30769[(2)] = null);

(statearr_30742_30769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30739,(3),Object,null,(2));
var inst_30677 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30739__$1,(5),inst_30677);
} else {
if((state_val_30740 === (15))){
var inst_30694 = (state_30739[(7)]);
var inst_30722 = (state_30739[(8)]);
var inst_30713 = (state_30739[(9)]);
var inst_30724 = (state_30739[(2)]);
var inst_30725 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30694),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30724)].join('');
var inst_30692 = inst_30722;
var inst_30693 = inst_30713;
var inst_30694__$1 = inst_30725;
var state_30739__$1 = (function (){var statearr_30743 = state_30739;
(statearr_30743[(7)] = inst_30694__$1);

(statearr_30743[(10)] = inst_30692);

(statearr_30743[(11)] = inst_30693);

return statearr_30743;
})();
var statearr_30744_30770 = state_30739__$1;
(statearr_30744_30770[(2)] = null);

(statearr_30744_30770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (13))){
var inst_30700 = (state_30739[(12)]);
var inst_30711 = (state_30739[(13)]);
var inst_30720 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_30721 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_30722 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_30700,inst_30720,inst_30721);
var state_30739__$1 = (function (){var statearr_30745 = state_30739;
(statearr_30745[(8)] = inst_30722);

return statearr_30745;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30739__$1,(15),inst_30711);
} else {
if((state_val_30740 === (6))){
var inst_30692 = (state_30739[(10)]);
var inst_30699 = (state_30739[(14)]);
var inst_30699__$1 = cljs.core.nth.call(null,inst_30692,(0),null);
var inst_30700 = cljs.core.nth.call(null,inst_30692,(1),null);
var inst_30701 = cljs.core.empty_QMARK_.call(null,inst_30699__$1);
var inst_30702 = (!(inst_30701));
var state_30739__$1 = (function (){var statearr_30746 = state_30739;
(statearr_30746[(14)] = inst_30699__$1);

(statearr_30746[(12)] = inst_30700);

return statearr_30746;
})();
if(inst_30702){
var statearr_30747_30771 = state_30739__$1;
(statearr_30747_30771[(1)] = (8));

} else {
var statearr_30748_30772 = state_30739__$1;
(statearr_30748_30772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (3))){
var inst_30664 = (state_30739[(2)]);
var inst_30665 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_30666 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_30667 = [inst_30664];
var inst_30668 = cljs.core.PersistentHashMap.fromArrays(inst_30666,inst_30667);
var inst_30669 = cljs.core.async.put_BANG_.call(null,res_chan,inst_30668);
var inst_30670 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_30671 = [inst_30664];
var inst_30672 = cljs.core.PersistentHashMap.fromArrays(inst_30670,inst_30671);
var inst_30673 = klipse_clj.lang.clojure.populate_err.call(null,inst_30672,opts);
var state_30739__$1 = (function (){var statearr_30749 = state_30739;
(statearr_30749[(15)] = inst_30669);

(statearr_30749[(16)] = inst_30665);

return statearr_30749;
})();
var statearr_30750_30773 = state_30739__$1;
(statearr_30750_30773[(2)] = inst_30673);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30739__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (12))){
var inst_30713 = (state_30739[(9)]);
var inst_30716 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_30717 = cljs.core.async.put_BANG_.call(null,res_chan,inst_30713);
var inst_30718 = klipse_clj.lang.clojure.populate_err.call(null,inst_30713,opts);
var state_30739__$1 = (function (){var statearr_30751 = state_30739;
(statearr_30751[(17)] = inst_30717);

(statearr_30751[(18)] = inst_30716);

return statearr_30751;
})();
var statearr_30752_30774 = state_30739__$1;
(statearr_30752_30774[(2)] = inst_30718);

(statearr_30752_30774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (2))){
var inst_30737 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30739__$1,inst_30737);
} else {
if((state_val_30740 === (11))){
var inst_30713 = (state_30739[(9)]);
var inst_30713__$1 = (state_30739[(2)]);
var inst_30714 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_30713__$1);
var state_30739__$1 = (function (){var statearr_30753 = state_30739;
(statearr_30753[(9)] = inst_30713__$1);

return statearr_30753;
})();
if(cljs.core.truth_(inst_30714)){
var statearr_30754_30775 = state_30739__$1;
(statearr_30754_30775[(1)] = (12));

} else {
var statearr_30755_30776 = state_30739__$1;
(statearr_30755_30776[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (9))){
var inst_30694 = (state_30739[(7)]);
var inst_30693 = (state_30739[(11)]);
var inst_30730 = cljs.core.async.put_BANG_.call(null,warnings_chan,inst_30694);
var inst_30731 = cljs.core.async.put_BANG_.call(null,res_chan,inst_30693);
var state_30739__$1 = (function (){var statearr_30756 = state_30739;
(statearr_30756[(19)] = inst_30730);

return statearr_30756;
})();
var statearr_30757_30777 = state_30739__$1;
(statearr_30757_30777[(2)] = inst_30731);

(statearr_30757_30777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (5))){
var inst_30679 = (state_30739[(2)]);
var inst_30687 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_30688 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_30689 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_30687,inst_30688);
var inst_30690 = cljs.core.nth.call(null,inst_30689,(0),null);
var inst_30691 = cljs.core.nth.call(null,inst_30689,(1),null);
var inst_30692 = inst_30689;
var inst_30693 = null;
var inst_30694 = "";
var state_30739__$1 = (function (){var statearr_30758 = state_30739;
(statearr_30758[(7)] = inst_30694);

(statearr_30758[(10)] = inst_30692);

(statearr_30758[(20)] = inst_30691);

(statearr_30758[(11)] = inst_30693);

(statearr_30758[(21)] = inst_30690);

(statearr_30758[(22)] = inst_30679);

return statearr_30758;
})();
var statearr_30759_30778 = state_30739__$1;
(statearr_30759_30778[(2)] = null);

(statearr_30759_30778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (14))){
var inst_30728 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30760_30779 = state_30739__$1;
(statearr_30760_30779[(2)] = inst_30728);

(statearr_30760_30779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (10))){
var inst_30733 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30761_30780 = state_30739__$1;
(statearr_30761_30780[(2)] = inst_30733);

(statearr_30761_30780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (8))){
var inst_30699 = (state_30739[(14)]);
var inst_30707 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_30708 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_30707,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_30709 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_30699,inst_30708);
var inst_30710 = cljs.core.nth.call(null,inst_30709,(0),null);
var inst_30711 = cljs.core.nth.call(null,inst_30709,(1),null);
var state_30739__$1 = (function (){var statearr_30762 = state_30739;
(statearr_30762[(13)] = inst_30711);

return statearr_30762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30739__$1,(11),inst_30710);
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
var klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto____0 = (function (){
var statearr_30763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30763[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto__);

(statearr_30763[(1)] = (1));

return statearr_30763;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto____1 = (function (state_30739){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_30739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e30764){if((e30764 instanceof Object)){
var ex__13611__auto__ = e30764;
var statearr_30765_30781 = state_30739;
(statearr_30765_30781[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30782 = state_30739;
state_30739 = G__30782;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto__ = function(state_30739){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto____1.call(this,state_30739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_30766 = f__13705__auto__.call(null);
(statearr_30766[(6)] = c__13704__auto___30767);

return statearr_30766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,warnings_chan], null);
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_30840){
var state_val_30841 = (state_30840[(1)]);
if((state_val_30841 === (7))){
var inst_30808 = (state_30840[(7)]);
var inst_30813 = klipse_clj.repl.create_state_compile.call(null);
var inst_30814 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_30813,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_30815 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_30808,inst_30814);
var state_30840__$1 = state_30840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30840__$1,(10),inst_30815);
} else {
if((state_val_30841 === (1))){
var state_30840__$1 = state_30840;
var statearr_30842_30863 = state_30840__$1;
(statearr_30842_30863[(2)] = null);

(statearr_30842_30863[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30840,(3),Object,null,(2));
var inst_30797 = klipse_clj.repl.create_state_compile.call(null);
var inst_30798 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_30799 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_30797,inst_30798);
var inst_30800 = cljs.core.nth.call(null,inst_30799,(0),null);
var inst_30801 = cljs.core.nth.call(null,inst_30799,(1),null);
var inst_30802 = inst_30799;
var inst_30803 = "";
var state_30840__$1 = (function (){var statearr_30843 = state_30840;
(statearr_30843[(8)] = inst_30803);

(statearr_30843[(9)] = inst_30802);

(statearr_30843[(10)] = inst_30800);

(statearr_30843[(11)] = inst_30801);

return statearr_30843;
})();
var statearr_30844_30864 = state_30840__$1;
(statearr_30844_30864[(2)] = null);

(statearr_30844_30864[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (13))){
var inst_30828 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30845_30865 = state_30840__$1;
(statearr_30845_30865[(2)] = inst_30828);

(statearr_30845_30865[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (6))){
var inst_30836 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30846_30866 = state_30840__$1;
(statearr_30846_30866[(2)] = inst_30836);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30840__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (3))){
var inst_30783 = (state_30840[(2)]);
var inst_30784 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_30785 = [inst_30783];
var inst_30786 = cljs.core.PersistentHashMap.fromArrays(inst_30784,inst_30785);
var state_30840__$1 = state_30840;
var statearr_30847_30867 = state_30840__$1;
(statearr_30847_30867[(2)] = inst_30786);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30840__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (12))){
var inst_30803 = (state_30840[(8)]);
var inst_30809 = (state_30840[(12)]);
var inst_30817 = (state_30840[(13)]);
var inst_30821 = klipse_clj.repl.create_state_compile.call(null);
var inst_30822 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_30823 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_30809,inst_30821,inst_30822);
var inst_30824 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_30817);
var inst_30825 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30803),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30824)].join('');
var inst_30802 = inst_30823;
var inst_30803__$1 = inst_30825;
var state_30840__$1 = (function (){var statearr_30848 = state_30840;
(statearr_30848[(8)] = inst_30803__$1);

(statearr_30848[(9)] = inst_30802);

return statearr_30848;
})();
var statearr_30849_30868 = state_30840__$1;
(statearr_30849_30868[(2)] = null);

(statearr_30849_30868[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (2))){
var inst_30838 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30840__$1,inst_30838);
} else {
if((state_val_30841 === (11))){
var inst_30817 = (state_30840[(13)]);
var state_30840__$1 = state_30840;
var statearr_30850_30869 = state_30840__$1;
(statearr_30850_30869[(2)] = inst_30817);

(statearr_30850_30869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (9))){
var inst_30834 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30851_30870 = state_30840__$1;
(statearr_30851_30870[(2)] = inst_30834);

(statearr_30851_30870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (5))){
var inst_30808 = (state_30840[(7)]);
var inst_30802 = (state_30840[(9)]);
var inst_30808__$1 = cljs.core.nth.call(null,inst_30802,(0),null);
var inst_30809 = cljs.core.nth.call(null,inst_30802,(1),null);
var inst_30810 = cljs.core.empty_QMARK_.call(null,inst_30808__$1);
var inst_30811 = (!(inst_30810));
var state_30840__$1 = (function (){var statearr_30852 = state_30840;
(statearr_30852[(7)] = inst_30808__$1);

(statearr_30852[(12)] = inst_30809);

return statearr_30852;
})();
if(inst_30811){
var statearr_30853_30871 = state_30840__$1;
(statearr_30853_30871[(1)] = (7));

} else {
var statearr_30854_30872 = state_30840__$1;
(statearr_30854_30872[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (10))){
var inst_30817 = (state_30840[(13)]);
var inst_30817__$1 = (state_30840[(2)]);
var inst_30818 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_30817__$1);
var state_30840__$1 = (function (){var statearr_30855 = state_30840;
(statearr_30855[(13)] = inst_30817__$1);

return statearr_30855;
})();
if(cljs.core.truth_(inst_30818)){
var statearr_30856_30873 = state_30840__$1;
(statearr_30856_30873[(1)] = (11));

} else {
var statearr_30857_30874 = state_30840__$1;
(statearr_30857_30874[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (8))){
var inst_30803 = (state_30840[(8)]);
var inst_30830 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_30831 = [inst_30803];
var inst_30832 = cljs.core.PersistentHashMap.fromArrays(inst_30830,inst_30831);
var state_30840__$1 = state_30840;
var statearr_30858_30875 = state_30840__$1;
(statearr_30858_30875[(2)] = inst_30832);

(statearr_30858_30875[(1)] = (9));


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
var klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto____0 = (function (){
var statearr_30859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30859[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto__);

(statearr_30859[(1)] = (1));

return statearr_30859;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto____1 = (function (state_30840){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_30840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e30860){if((e30860 instanceof Object)){
var ex__13611__auto__ = e30860;
var statearr_30861_30876 = state_30840;
(statearr_30861_30876[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30877 = state_30840;
state_30840 = G__30877;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto__ = function(state_30840){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto____1.call(this,state_30840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_30862 = f__13705__auto__.call(null);
(statearr_30862[(6)] = c__13704__auto__);

return statearr_30862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse_clj.lang.clojure.eval_async_map = (function klipse_clj$lang$clojure$eval_async_map(s,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_30893){
var state_val_30894 = (state_30893[(1)]);
if((state_val_30894 === (1))){
var inst_30881 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_30882 = cljs.core.nth.call(null,inst_30881,(0),null);
var inst_30883 = cljs.core.nth.call(null,inst_30881,(1),null);
var state_30893__$1 = (function (){var statearr_30895 = state_30893;
(statearr_30895[(7)] = inst_30883);

return statearr_30895;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30893__$1,(2),inst_30882);
} else {
if((state_val_30894 === (2))){
var inst_30883 = (state_30893[(7)]);
var inst_30885 = (state_30893[(2)]);
var inst_30886 = klipse_clj.lang.clojure.result_as_str.call(null,inst_30885,opts);
var state_30893__$1 = (function (){var statearr_30896 = state_30893;
(statearr_30896[(8)] = inst_30886);

return statearr_30896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30893__$1,(3),inst_30883);
} else {
if((state_val_30894 === (3))){
var inst_30886 = (state_30893[(8)]);
var inst_30888 = (state_30893[(2)]);
var inst_30889 = [new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"res","res",-1395007879)];
var inst_30890 = [inst_30888,inst_30886];
var inst_30891 = cljs.core.PersistentHashMap.fromArrays(inst_30889,inst_30890);
var state_30893__$1 = state_30893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30893__$1,inst_30891);
} else {
return null;
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto____0 = (function (){
var statearr_30897 = [null,null,null,null,null,null,null,null,null];
(statearr_30897[(0)] = klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto__);

(statearr_30897[(1)] = (1));

return statearr_30897;
});
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto____1 = (function (state_30893){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_30893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e30898){if((e30898 instanceof Object)){
var ex__13611__auto__ = e30898;
var statearr_30899_30901 = state_30893;
(statearr_30899_30901[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30902 = state_30893;
state_30893 = G__30902;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto__ = function(state_30893){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto____1.call(this,state_30893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_30900 = f__13705__auto__.call(null);
(statearr_30900[(6)] = c__13704__auto__);

return statearr_30900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_30915){
var state_val_30916 = (state_30915[(1)]);
if((state_val_30916 === (1))){
var inst_30906 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_30907 = cljs.core.nth.call(null,inst_30906,(0),null);
var inst_30908 = cljs.core.nth.call(null,inst_30906,(1),null);
var state_30915__$1 = (function (){var statearr_30917 = state_30915;
(statearr_30917[(7)] = inst_30908);

return statearr_30917;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30915__$1,(2),inst_30907);
} else {
if((state_val_30916 === (2))){
var inst_30908 = (state_30915[(7)]);
var inst_30910 = (state_30915[(2)]);
var inst_30911 = klipse_clj.lang.clojure.result_as_str.call(null,inst_30910,opts);
var state_30915__$1 = (function (){var statearr_30918 = state_30915;
(statearr_30918[(8)] = inst_30911);

return statearr_30918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30915__$1,(3),inst_30908);
} else {
if((state_val_30916 === (3))){
var inst_30911 = (state_30915[(8)]);
var inst_30913 = (state_30915[(2)]);
var state_30915__$1 = (function (){var statearr_30919 = state_30915;
(statearr_30919[(9)] = inst_30913);

return statearr_30919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30915__$1,inst_30911);
} else {
return null;
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto____0 = (function (){
var statearr_30920 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30920[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto__);

(statearr_30920[(1)] = (1));

return statearr_30920;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto____1 = (function (state_30915){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_30915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e30921){if((e30921 instanceof Object)){
var ex__13611__auto__ = e30921;
var statearr_30922_30924 = state_30915;
(statearr_30922_30924[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30925 = state_30915;
state_30915 = G__30925;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto__ = function(state_30915){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto____1.call(this,state_30915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_30923 = f__13705__auto__.call(null);
(statearr_30923[(6)] = c__13704__auto__);

return statearr_30923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__30927 = arguments.length;
switch (G__30927) {
case 1:
return klipse_clj.lang.clojure.the_eval.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return klipse_clj.lang.clojure.the_eval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(klipse_clj.lang.clojure.the_eval.cljs$core$IFn$_invoke$arity$1 = (function (s){
return klipse_clj.lang.clojure.the_eval.call(null,s,cljs.core.PersistentArrayMap.EMPTY);
}));

(klipse_clj.lang.clojure.the_eval.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_30934){
var state_val_30935 = (state_30934[(1)]);
if((state_val_30935 === (1))){
var inst_30928 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_30929 = cljs.core.first.call(null,inst_30928);
var state_30934__$1 = state_30934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30934__$1,(2),inst_30929);
} else {
if((state_val_30935 === (2))){
var inst_30931 = (state_30934[(2)]);
var inst_30932 = klipse_clj.lang.clojure.read_result.call(null,inst_30931);
var state_30934__$1 = state_30934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30934__$1,inst_30932);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$state_machine__13608__auto____0 = (function (){
var statearr_30936 = [null,null,null,null,null,null,null];
(statearr_30936[(0)] = klipse_clj$lang$clojure$state_machine__13608__auto__);

(statearr_30936[(1)] = (1));

return statearr_30936;
});
var klipse_clj$lang$clojure$state_machine__13608__auto____1 = (function (state_30934){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_30934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e30937){if((e30937 instanceof Object)){
var ex__13611__auto__ = e30937;
var statearr_30938_30941 = state_30934;
(statearr_30938_30941[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30942 = state_30934;
state_30934 = G__30942;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__13608__auto__ = function(state_30934){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__13608__auto____1.call(this,state_30934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__13608__auto____0;
klipse_clj$lang$clojure$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__13608__auto____1;
return klipse_clj$lang$clojure$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_30939 = f__13705__auto__.call(null);
(statearr_30939[(6)] = c__13704__auto__);

return statearr_30939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
}));

(klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2);

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_30949){
var state_val_30950 = (state_30949[(1)]);
if((state_val_30950 === (1))){
var inst_30943 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_30949__$1 = state_30949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30949__$1,(2),inst_30943);
} else {
if((state_val_30950 === (2))){
var inst_30945 = (state_30949[(2)]);
var inst_30946 = cljs.core.clj__GT_js.call(null,inst_30945);
var inst_30947 = cb.call(null,inst_30946);
var state_30949__$1 = state_30949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30949__$1,inst_30947);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto____0 = (function (){
var statearr_30951 = [null,null,null,null,null,null,null];
(statearr_30951[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto__);

(statearr_30951[(1)] = (1));

return statearr_30951;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto____1 = (function (state_30949){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_30949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e30952){if((e30952 instanceof Object)){
var ex__13611__auto__ = e30952;
var statearr_30953_30955 = state_30949;
(statearr_30953_30955[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30956 = state_30949;
state_30949 = G__30956;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto__ = function(state_30949){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto____1.call(this,state_30949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_30954 = f__13705__auto__.call(null);
(statearr_30954[(6)] = c__13704__auto__);

return statearr_30954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__30958 = arguments.length;
switch (G__30958) {
case 1:
return klipse_clj.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return klipse_clj.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(klipse_clj.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$1 = (function (exp){
return klipse_clj.lang.clojure.str_compile.call(null,exp,cljs.core.PersistentArrayMap.EMPTY);
}));

(klipse_clj.lang.clojure.str_compile.cljs$core$IFn$_invoke$arity$2 = (function (exp,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_30964){
var state_val_30965 = (state_30964[(1)]);
if((state_val_30965 === (1))){
var inst_30959 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_30964__$1 = state_30964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30964__$1,(2),inst_30959);
} else {
if((state_val_30965 === (2))){
var inst_30961 = (state_30964[(2)]);
var inst_30962 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_30961);
var state_30964__$1 = state_30964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30964__$1,inst_30962);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$state_machine__13608__auto____0 = (function (){
var statearr_30966 = [null,null,null,null,null,null,null];
(statearr_30966[(0)] = klipse_clj$lang$clojure$state_machine__13608__auto__);

(statearr_30966[(1)] = (1));

return statearr_30966;
});
var klipse_clj$lang$clojure$state_machine__13608__auto____1 = (function (state_30964){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_30964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e30967){if((e30967 instanceof Object)){
var ex__13611__auto__ = e30967;
var statearr_30968_30971 = state_30964;
(statearr_30968_30971[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30972 = state_30964;
state_30964 = G__30972;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__13608__auto__ = function(state_30964){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__13608__auto____1.call(this,state_30964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__13608__auto____0;
klipse_clj$lang$clojure$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__13608__auto____1;
return klipse_clj$lang$clojure$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_30969 = f__13705__auto__.call(null);
(statearr_30969[(6)] = c__13704__auto__);

return statearr_30969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
}));

(klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2);

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_30978){
var state_val_30979 = (state_30978[(1)]);
if((state_val_30979 === (1))){
var inst_30973 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_30978__$1 = state_30978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30978__$1,(2),inst_30973);
} else {
if((state_val_30979 === (2))){
var inst_30975 = (state_30978[(2)]);
var inst_30976 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_30975);
var state_30978__$1 = state_30978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30978__$1,inst_30976);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto____0 = (function (){
var statearr_30980 = [null,null,null,null,null,null,null];
(statearr_30980[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto__);

(statearr_30980[(1)] = (1));

return statearr_30980;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto____1 = (function (state_30978){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_30978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e30981){if((e30981 instanceof Object)){
var ex__13611__auto__ = e30981;
var statearr_30982_30984 = state_30978;
(statearr_30982_30984[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30985 = state_30978;
state_30978 = G__30985;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto__ = function(state_30978){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto____1.call(this,state_30978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_30983 = f__13705__auto__.call(null);
(statearr_30983[(6)] = c__13704__auto__);

return statearr_30983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_30992){
var state_val_30993 = (state_30992[(1)]);
if((state_val_30993 === (1))){
var inst_30986 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_30992__$1 = state_30992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30992__$1,(2),inst_30986);
} else {
if((state_val_30993 === (2))){
var inst_30988 = (state_30992[(2)]);
var inst_30989 = cljs.core.second.call(null,inst_30988);
var inst_30990 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30989);
var state_30992__$1 = state_30992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30992__$1,inst_30990);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto____0 = (function (){
var statearr_30994 = [null,null,null,null,null,null,null];
(statearr_30994[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto__);

(statearr_30994[(1)] = (1));

return statearr_30994;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto____1 = (function (state_30992){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_30992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e30995){if((e30995 instanceof Object)){
var ex__13611__auto__ = e30995;
var statearr_30996_30998 = state_30992;
(statearr_30996_30998[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30999 = state_30992;
state_30992 = G__30999;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto__ = function(state_30992){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto____1.call(this,state_30992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_30997 = f__13705__auto__.call(null);
(statearr_30997[(6)] = c__13704__auto__);

return statearr_30997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__31001){
var map__31002 = p__31001;
var map__31002__$1 = cljs.core.__destructure_map.call(null,map__31002);
var opts = map__31002__$1;
var container_id = cljs.core.get.call(null,map__31002__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__31002__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__31002__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__13704__auto___31058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_31040){
var state_val_31041 = (state_31040[(1)]);
if((state_val_31041 === (7))){
var inst_31011 = (state_31040[(2)]);
var inst_31016 = (function (){var _STAR_print_newline_STAR__orig_val__31012 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31013 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31014 = true;
return (function (p1__31000_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__31000_SHARP_);
});
})();
var inst_31017 = (cljs.core._STAR_print_newline_STAR_ = true);
var inst_31018 = (cljs.core._STAR_print_fn_STAR_ = inst_31016);
var state_31040__$1 = (function (){var statearr_31042 = state_31040;
(statearr_31042[(7)] = inst_31017);

(statearr_31042[(8)] = inst_31018);

(statearr_31042[(9)] = inst_31011);

return statearr_31042;
})();
var statearr_31043_31059 = state_31040__$1;
(statearr_31043_31059[(2)] = null);

(statearr_31043_31059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (1))){
var inst_31003 = clojure.string.blank_QMARK_.call(null,exp);
var state_31040__$1 = state_31040;
if(inst_31003){
var statearr_31044_31060 = state_31040__$1;
(statearr_31044_31060[(1)] = (2));

} else {
var statearr_31045_31061 = state_31040__$1;
(statearr_31045_31061[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (4))){
var inst_31038 = (state_31040[(2)]);
var state_31040__$1 = state_31040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31040__$1,inst_31038);
} else {
if((state_val_31041 === (6))){
var state_31040__$1 = state_31040;
var statearr_31046_31062 = state_31040__$1;
(statearr_31046_31062[(2)] = null);

(statearr_31046_31062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (3))){
var state_31040__$1 = state_31040;
if(cljs.core.truth_(setup_container_fn)){
var statearr_31047_31063 = state_31040__$1;
(statearr_31047_31063[(1)] = (5));

} else {
var statearr_31048_31064 = state_31040__$1;
(statearr_31048_31064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (2))){
var inst_31005 = cljs.core.async.put_BANG_.call(null,c,"");
var state_31040__$1 = state_31040;
var statearr_31049_31065 = state_31040__$1;
(statearr_31049_31065[(2)] = inst_31005);

(statearr_31049_31065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (11))){
var inst_31028 = (state_31040[(2)]);
var inst_31029 = cljs.core.__destructure_map.call(null,inst_31028);
var inst_31030 = cljs.core.get.call(null,inst_31029,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_31031 = cljs.core.get.call(null,inst_31029,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_31032 = cljs.core.second.call(null,inst_31031);
var inst_31033 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31030),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31032)].join('');
var inst_31034 = cljs.core.async.put_BANG_.call(null,c,inst_31033);
var state_31040__$1 = state_31040;
var statearr_31050_31066 = state_31040__$1;
(statearr_31050_31066[(2)] = inst_31034);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31040__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (9))){
var inst_31019 = (state_31040[(2)]);
var inst_31020 = (cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_);
var inst_31021 = (cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_);
var state_31040__$1 = (function (){var statearr_31051 = state_31040;
(statearr_31051[(10)] = inst_31021);

(statearr_31051[(11)] = inst_31020);

(statearr_31051[(12)] = inst_31019);

return statearr_31051;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31040__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (5))){
var inst_31008 = setup_container_fn.call(null,container_id);
var state_31040__$1 = state_31040;
var statearr_31052_31067 = state_31040__$1;
(statearr_31052_31067[(2)] = inst_31008);

(statearr_31052_31067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31041 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31040,null,null,(9),(8));
var inst_31026 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_31040__$1 = state_31040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31040__$1,(11),inst_31026);
} else {
if((state_val_31041 === (8))){
var inst_31036 = (state_31040[(2)]);
var state_31040__$1 = state_31040;
var statearr_31053_31068 = state_31040__$1;
(statearr_31053_31068[(2)] = inst_31036);

(statearr_31053_31068[(1)] = (4));


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
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto____0 = (function (){
var statearr_31054 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31054[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto__);

(statearr_31054[(1)] = (1));

return statearr_31054;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto____1 = (function (state_31040){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_31040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e31055){if((e31055 instanceof Object)){
var ex__13611__auto__ = e31055;
var statearr_31056_31069 = state_31040;
(statearr_31056_31069[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31070 = state_31040;
state_31040 = G__31070;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto__ = function(state_31040){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto____1.call(this,state_31040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_31057 = f__13705__auto__.call(null);
(statearr_31057[(6)] = c__13704__auto___31058);

return statearr_31057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return c;
});
klipse_clj.lang.clojure.eval_async_prepl = (function klipse_clj$lang$clojure$eval_async_prepl(var_args){
var G__31072 = arguments.length;
switch (G__31072) {
case 1:
return klipse_clj.lang.clojure.eval_async_prepl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return klipse_clj.lang.clojure.eval_async_prepl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(klipse_clj.lang.clojure.eval_async_prepl.cljs$core$IFn$_invoke$arity$1 = (function (s){
return klipse_clj.lang.clojure.eval_async_prepl.call(null,s,cljs.core.PersistentArrayMap.EMPTY);
}));

(klipse_clj.lang.clojure.eval_async_prepl.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var c = cljs.core.async.chan.call(null);
var c__13704__auto___31102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_31091){
var state_val_31092 = (state_31091[(1)]);
if((state_val_31092 === (1))){
var inst_31075 = (function (){var _STAR_print_fn_STAR__orig_val__31073 = cljs.core._STAR_print_fn_STAR_;
return (function (s__$1){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),s__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"out","out",-910545517)], null));
});
})();
var inst_31076 = (cljs.core._STAR_print_fn_STAR_ = inst_31075);
var state_31091__$1 = (function (){var statearr_31093 = state_31091;
(statearr_31093[(7)] = inst_31076);

return statearr_31093;
})();
var statearr_31094_31103 = state_31091__$1;
(statearr_31094_31103[(2)] = null);

(statearr_31094_31103[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (2))){
var inst_31089 = (state_31091[(2)]);
var state_31091__$1 = state_31091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31091__$1,inst_31089);
} else {
if((state_val_31092 === (3))){
var inst_31077 = (state_31091[(2)]);
var inst_31078 = (cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_);
var state_31091__$1 = (function (){var statearr_31095 = state_31091;
(statearr_31095[(8)] = inst_31078);

(statearr_31095[(9)] = inst_31077);

return statearr_31095;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31091__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31091,null,null,(3),(2));
var inst_31082 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_31083 = cljs.core.first.call(null,inst_31082);
var state_31091__$1 = state_31091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31091__$1,(5),inst_31083);
} else {
if((state_val_31092 === (5))){
var inst_31085 = (state_31091[(2)]);
var inst_31086 = klipse_clj.lang.clojure.result_as_prepl_map.call(null,s,inst_31085,opts);
var inst_31087 = cljs.core.async.put_BANG_.call(null,c,inst_31086);
var state_31091__$1 = state_31091;
var statearr_31096_31104 = state_31091__$1;
(statearr_31096_31104[(2)] = inst_31087);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31091__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$state_machine__13608__auto____0 = (function (){
var statearr_31097 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31097[(0)] = klipse_clj$lang$clojure$state_machine__13608__auto__);

(statearr_31097[(1)] = (1));

return statearr_31097;
});
var klipse_clj$lang$clojure$state_machine__13608__auto____1 = (function (state_31091){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_31091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e31098){if((e31098 instanceof Object)){
var ex__13611__auto__ = e31098;
var statearr_31099_31105 = state_31091;
(statearr_31099_31105[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31106 = state_31091;
state_31091 = G__31106;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__13608__auto__ = function(state_31091){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__13608__auto____1.call(this,state_31091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__13608__auto____0;
klipse_clj$lang$clojure$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__13608__auto____1;
return klipse_clj$lang$clojure$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_31100 = f__13705__auto__.call(null);
(statearr_31100[(6)] = c__13704__auto___31102);

return statearr_31100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return c;
}));

(klipse_clj.lang.clojure.eval_async_prepl.cljs$lang$maxFixedArity = 2);

klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map

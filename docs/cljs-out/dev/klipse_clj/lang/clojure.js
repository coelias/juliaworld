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
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32399){
var state_val_32400 = (state_32399[(1)]);
if((state_val_32400 === (7))){
var inst_32395 = (state_32399[(2)]);
var state_32399__$1 = state_32399;
var statearr_32401_32427 = state_32399__$1;
(statearr_32401_32427[(2)] = inst_32395);

(statearr_32401_32427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (1))){
var inst_32338 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_32399__$1 = state_32399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32399__$1,(2),inst_32338);
} else {
if((state_val_32400 === (4))){
var inst_32397 = (state_32399[(2)]);
var state_32399__$1 = state_32399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32399__$1,inst_32397);
} else {
if((state_val_32400 === (15))){
var inst_32369 = (state_32399[(7)]);
var inst_32386 = (state_32399[(2)]);
var inst_32387 = cljs.core.next.call(null,inst_32369);
var inst_32349 = inst_32387;
var inst_32350 = null;
var inst_32351 = (0);
var inst_32352 = (0);
var state_32399__$1 = (function (){var statearr_32402 = state_32399;
(statearr_32402[(8)] = inst_32350);

(statearr_32402[(9)] = inst_32386);

(statearr_32402[(10)] = inst_32351);

(statearr_32402[(11)] = inst_32352);

(statearr_32402[(12)] = inst_32349);

return statearr_32402;
})();
var statearr_32403_32428 = state_32399__$1;
(statearr_32403_32428[(2)] = null);

(statearr_32403_32428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (13))){
var inst_32369 = (state_32399[(7)]);
var inst_32378 = cljs.core.first.call(null,inst_32369);
var inst_32379 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_32380 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_32381 = [inst_32380,klipse_clj.repl.current_ns_eval];
var inst_32382 = cljs.core.PersistentHashMap.fromArrays(inst_32379,inst_32381);
var inst_32383 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_32378,inst_32382);
var inst_32384 = cljs.core.first.call(null,inst_32383);
var state_32399__$1 = state_32399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32399__$1,(15),inst_32384);
} else {
if((state_val_32400 === (6))){
var inst_32369 = (state_32399[(7)]);
var inst_32349 = (state_32399[(12)]);
var inst_32369__$1 = cljs.core.seq.call(null,inst_32349);
var state_32399__$1 = (function (){var statearr_32404 = state_32399;
(statearr_32404[(7)] = inst_32369__$1);

return statearr_32404;
})();
if(inst_32369__$1){
var statearr_32405_32429 = state_32399__$1;
(statearr_32405_32429[(1)] = (9));

} else {
var statearr_32406_32430 = state_32399__$1;
(statearr_32406_32430[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (3))){
var inst_32351 = (state_32399[(10)]);
var inst_32352 = (state_32399[(11)]);
var inst_32354 = (inst_32352 < inst_32351);
var inst_32355 = inst_32354;
var state_32399__$1 = state_32399;
if(cljs.core.truth_(inst_32355)){
var statearr_32407_32431 = state_32399__$1;
(statearr_32407_32431[(1)] = (5));

} else {
var statearr_32408_32432 = state_32399__$1;
(statearr_32408_32432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (12))){
var inst_32369 = (state_32399[(7)]);
var inst_32373 = cljs.core.chunk_first.call(null,inst_32369);
var inst_32374 = cljs.core.chunk_rest.call(null,inst_32369);
var inst_32375 = cljs.core.count.call(null,inst_32373);
var inst_32349 = inst_32374;
var inst_32350 = inst_32373;
var inst_32351 = inst_32375;
var inst_32352 = (0);
var state_32399__$1 = (function (){var statearr_32409 = state_32399;
(statearr_32409[(8)] = inst_32350);

(statearr_32409[(10)] = inst_32351);

(statearr_32409[(11)] = inst_32352);

(statearr_32409[(12)] = inst_32349);

return statearr_32409;
})();
var statearr_32410_32433 = state_32399__$1;
(statearr_32410_32433[(2)] = null);

(statearr_32410_32433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (2))){
var inst_32340 = (state_32399[(2)]);
var inst_32345 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32346 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg inferred-type]])"];
var inst_32347 = (new cljs.core.PersistentVector(null,2,(5),inst_32345,inst_32346,null));
var inst_32348 = cljs.core.seq.call(null,inst_32347);
var inst_32349 = inst_32348;
var inst_32350 = null;
var inst_32351 = (0);
var inst_32352 = (0);
var state_32399__$1 = (function (){var statearr_32411 = state_32399;
(statearr_32411[(8)] = inst_32350);

(statearr_32411[(10)] = inst_32351);

(statearr_32411[(11)] = inst_32352);

(statearr_32411[(12)] = inst_32349);

(statearr_32411[(13)] = inst_32340);

return statearr_32411;
})();
var statearr_32412_32434 = state_32399__$1;
(statearr_32412_32434[(2)] = null);

(statearr_32412_32434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (11))){
var inst_32393 = (state_32399[(2)]);
var state_32399__$1 = state_32399;
var statearr_32413_32435 = state_32399__$1;
(statearr_32413_32435[(2)] = inst_32393);

(statearr_32413_32435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (9))){
var inst_32369 = (state_32399[(7)]);
var inst_32371 = cljs.core.chunked_seq_QMARK_.call(null,inst_32369);
var state_32399__$1 = state_32399;
if(inst_32371){
var statearr_32414_32436 = state_32399__$1;
(statearr_32414_32436[(1)] = (12));

} else {
var statearr_32415_32437 = state_32399__$1;
(statearr_32415_32437[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (5))){
var inst_32350 = (state_32399[(8)]);
var inst_32352 = (state_32399[(11)]);
var inst_32357 = cljs.core._nth.call(null,inst_32350,inst_32352);
var inst_32358 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_32359 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_32360 = [inst_32359,klipse_clj.repl.current_ns_eval];
var inst_32361 = cljs.core.PersistentHashMap.fromArrays(inst_32358,inst_32360);
var inst_32362 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_32357,inst_32361);
var inst_32363 = cljs.core.first.call(null,inst_32362);
var state_32399__$1 = state_32399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32399__$1,(8),inst_32363);
} else {
if((state_val_32400 === (14))){
var inst_32390 = (state_32399[(2)]);
var state_32399__$1 = state_32399;
var statearr_32419_32438 = state_32399__$1;
(statearr_32419_32438[(2)] = inst_32390);

(statearr_32419_32438[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (10))){
var state_32399__$1 = state_32399;
var statearr_32420_32439 = state_32399__$1;
(statearr_32420_32439[(2)] = null);

(statearr_32420_32439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32400 === (8))){
var inst_32350 = (state_32399[(8)]);
var inst_32351 = (state_32399[(10)]);
var inst_32352 = (state_32399[(11)]);
var inst_32349 = (state_32399[(12)]);
var inst_32365 = (state_32399[(2)]);
var inst_32366 = (inst_32352 + (1));
var tmp32416 = inst_32350;
var tmp32417 = inst_32351;
var tmp32418 = inst_32349;
var inst_32349__$1 = tmp32418;
var inst_32350__$1 = tmp32416;
var inst_32351__$1 = tmp32417;
var inst_32352__$1 = inst_32366;
var state_32399__$1 = (function (){var statearr_32421 = state_32399;
(statearr_32421[(8)] = inst_32350__$1);

(statearr_32421[(10)] = inst_32351__$1);

(statearr_32421[(11)] = inst_32352__$1);

(statearr_32421[(14)] = inst_32365);

(statearr_32421[(12)] = inst_32349__$1);

return statearr_32421;
})();
var statearr_32422_32440 = state_32399__$1;
(statearr_32422_32440[(2)] = null);

(statearr_32422_32440[(1)] = (3));


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
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto____0 = (function (){
var statearr_32423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32423[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto__);

(statearr_32423[(1)] = (1));

return statearr_32423;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto____1 = (function (state_32399){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32424){if((e32424 instanceof Object)){
var ex__15526__auto__ = e32424;
var statearr_32425_32441 = state_32399;
(statearr_32425_32441[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32442 = state_32399;
state_32399 = G__32442;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto__ = function(state_32399){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto____1.call(this,state_32399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32426 = f__15620__auto__.call(null);
(statearr_32426[(6)] = c__15619__auto__);

return statearr_32426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32445){
var state_val_32446 = (state_32445[(1)]);
if((state_val_32446 === (1))){
var inst_32443 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_32445__$1 = state_32445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32445__$1,inst_32443);
} else {
return null;
}
});
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_32447 = [null,null,null,null,null,null,null];
(statearr_32447[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__);

(statearr_32447[(1)] = (1));

return statearr_32447;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____1 = (function (state_32445){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32448){if((e32448 instanceof Object)){
var ex__15526__auto__ = e32448;
var statearr_32449_32451 = state_32445;
(statearr_32449_32451[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32452 = state_32445;
state_32445 = G__32452;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__ = function(state_32445){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____1.call(this,state_32445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32450 = f__15620__auto__.call(null);
(statearr_32450[(6)] = c__15619__auto__);

return statearr_32450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
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
}catch (e32453){if((e32453 instanceof Object)){
var e = e32453;

return e;
} else {
throw e32453;

}
}});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__32454){
var map__32455 = p__32454;
var map__32455__$1 = cljs.core.__destructure_map.call(null,map__32455);
var print_length = cljs.core.get.call(null,map__32455__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__32455__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__32457 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__32458 = print_length;
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32458);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32459_32463 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32460_32464 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32461_32465 = true;
var _STAR_print_fn_STAR__temp_val__32462_32466 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32461_32465);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32462_32466);

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__5041__auto__ = typeof value === 'string';
if(and__5041__auto__){
return beautify_strings;
} else {
return and__5041__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32460_32464);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32459_32463);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})()], null);
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32457);
}}catch (e32456){if((e32456 instanceof Object)){
var e = e32456;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("klipse","print-error","klipse/print-error",-136370564)], null),cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263)], null))))], null);
} else {
throw e32456;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__32467,verbose_QMARK_,current_ns){
var map__32468 = p__32467;
var map__32468__$1 = cljs.core.__destructure_map.call(null,map__32468);
var ns = cljs.core.get.call(null,map__32468__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__32468__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__32468__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__32468__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__32468__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__32468__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__32469,opts){
var map__32470 = p__32469;
var map__32470__$1 = cljs.core.__destructure_map.call(null,map__32470);
var args = map__32470__$1;
var ns = cljs.core.get.call(null,map__32470__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__32470__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__32470__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__32470__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__32470__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__32470__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
if(cljs.core.not.call(null,error)){
return klipse_clj.lang.clojure.display.call(null,value,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,error)], null);
}
});
klipse_clj.lang.clojure.result_as_prepl_map = (function klipse_clj$lang$clojure$result_as_prepl_map(form_str,p__32471,opts){
var map__32472 = p__32471;
var map__32472__$1 = cljs.core.__destructure_map.call(null,map__32472);
var args = map__32472__$1;
var ns = cljs.core.get.call(null,map__32472__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__32472__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__32472__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__32472__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__32472__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__32472__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var vec__32473 = klipse_clj.lang.clojure.result_as_str.call(null,args,opts);
var status = cljs.core.nth.call(null,vec__32473,(0),null);
var val = cljs.core.nth.call(null,vec__32473,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status))?new cljs.core.Keyword(null,"err","err",-2089457205):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"form","form",-1624062471),form_str], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__32476){
var map__32477 = p__32476;
var map__32477__$1 = cljs.core.__destructure_map.call(null,map__32477);
var form = cljs.core.get.call(null,map__32477__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__32477__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__32477__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__32477__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__32477__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__32478){
var map__32479 = p__32478;
var map__32479__$1 = cljs.core.__destructure_map.call(null,map__32479);
var foo = map__32479__$1;
var value = cljs.core.get.call(null,map__32479__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__32479__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__32480){
var map__32481 = p__32480;
var map__32481__$1 = cljs.core.__destructure_map.call(null,map__32481);
var args = map__32481__$1;
var file = cljs.core.get.call(null,map__32481__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__32481__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__32481__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__32481__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__32481__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__32481__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__32482){
var map__32483 = p__32482;
var map__32483__$1 = cljs.core.__destructure_map.call(null,map__32483);
var source = cljs.core.get.call(null,map__32483__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__32484){
var map__32485 = p__32484;
var map__32485__$1 = cljs.core.__destructure_map.call(null,map__32485);
var static_fns = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__32485__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
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
var c__15619__auto___32517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32502){
var state_val_32503 = (state_32502[(1)]);
if((state_val_32503 === (1))){
var inst_32486 = cljs.core.PersistentVector.EMPTY;
var inst_32487 = inst_32486;
var state_32502__$1 = (function (){var statearr_32504 = state_32502;
(statearr_32504[(7)] = inst_32487);

return statearr_32504;
})();
var statearr_32505_32518 = state_32502__$1;
(statearr_32505_32518[(2)] = null);

(statearr_32505_32518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32503 === (2))){
var state_32502__$1 = state_32502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32502__$1,(4),c);
} else {
if((state_val_32503 === (3))){
var inst_32500 = (state_32502[(2)]);
var state_32502__$1 = state_32502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32502__$1,inst_32500);
} else {
if((state_val_32503 === (4))){
var inst_32490 = (state_32502[(8)]);
var inst_32490__$1 = (state_32502[(2)]);
var inst_32491 = (inst_32490__$1 == null);
var state_32502__$1 = (function (){var statearr_32506 = state_32502;
(statearr_32506[(8)] = inst_32490__$1);

return statearr_32506;
})();
if(cljs.core.truth_(inst_32491)){
var statearr_32507_32519 = state_32502__$1;
(statearr_32507_32519[(1)] = (5));

} else {
var statearr_32508_32520 = state_32502__$1;
(statearr_32508_32520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32503 === (5))){
var inst_32487 = (state_32502[(7)]);
var inst_32493 = cljs.core.async.put_BANG_.call(null,d,inst_32487);
var state_32502__$1 = state_32502;
var statearr_32509_32521 = state_32502__$1;
(statearr_32509_32521[(2)] = inst_32493);

(statearr_32509_32521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32503 === (6))){
var inst_32487 = (state_32502[(7)]);
var inst_32490 = (state_32502[(8)]);
var inst_32495 = cljs.core.conj.call(null,inst_32487,inst_32490);
var inst_32487__$1 = inst_32495;
var state_32502__$1 = (function (){var statearr_32510 = state_32502;
(statearr_32510[(7)] = inst_32487__$1);

return statearr_32510;
})();
var statearr_32511_32522 = state_32502__$1;
(statearr_32511_32522[(2)] = null);

(statearr_32511_32522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32503 === (7))){
var inst_32498 = (state_32502[(2)]);
var state_32502__$1 = state_32502;
var statearr_32512_32523 = state_32502__$1;
(statearr_32512_32523[(2)] = inst_32498);

(statearr_32512_32523[(1)] = (3));


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
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto____0 = (function (){
var statearr_32513 = [null,null,null,null,null,null,null,null,null];
(statearr_32513[(0)] = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto__);

(statearr_32513[(1)] = (1));

return statearr_32513;
});
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto____1 = (function (state_32502){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32514){if((e32514 instanceof Object)){
var ex__15526__auto__ = e32514;
var statearr_32515_32524 = state_32502;
(statearr_32515_32524[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32525 = state_32502;
state_32502 = G__32525;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto__ = function(state_32502){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto____1.call(this,state_32502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32516 = f__15620__auto__.call(null);
(statearr_32516[(6)] = c__15619__auto___32517);

return statearr_32516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return d;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__32526){
var map__32527 = p__32526;
var map__32527__$1 = cljs.core.__destructure_map.call(null,map__32527);
var static_fns = cljs.core.get.call(null,map__32527__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__32527__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__32527__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__32527__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__32527__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__32527__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var res_chan = cljs.core.async.chan.call(null);
var warnings_chan = cljs.core.async.chan.call(null,(1024));
var agg_warnings_chan = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__5128__auto__ = max_eval_duration;
var y__5129__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var _STAR_cljs_warning_handlers_STAR__orig_val__32528 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__32529 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,klipse_clj.lang.clojure.warning_handler,warnings_chan)], null);
(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__32529);

try{try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),(cljs.env._STAR_compiler_STAR_ = st),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),(function (res){
cljs.core.async.close_BANG_.call(null,warnings_chan);

var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32538){
var state_val_32539 = (state_32538[(1)]);
if((state_val_32539 === (1))){
var inst_32530 = klipse_clj.lang.clojure.read_until_closed_BANG_.call(null,warnings_chan);
var state_32538__$1 = state_32538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32538__$1,(2),inst_32530);
} else {
if((state_val_32539 === (2))){
var inst_32532 = (state_32538[(2)]);
var inst_32533 = klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);
var inst_32534 = cljs.core.async.put_BANG_.call(null,res_chan,res);
var inst_32535 = clojure.string.join.call(null,"",inst_32532);
var inst_32536 = cljs.core.async.put_BANG_.call(null,agg_warnings_chan,inst_32535);
var state_32538__$1 = (function (){var statearr_32540 = state_32538;
(statearr_32540[(7)] = inst_32534);

(statearr_32540[(8)] = inst_32533);

return statearr_32540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32538__$1,inst_32536);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____0 = (function (){
var statearr_32541 = [null,null,null,null,null,null,null,null,null];
(statearr_32541[(0)] = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__);

(statearr_32541[(1)] = (1));

return statearr_32541;
});
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____1 = (function (state_32538){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32542){if((e32542 instanceof Object)){
var ex__15526__auto__ = e32542;
var statearr_32543_32545 = state_32538;
(statearr_32543_32545[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32546 = state_32538;
state_32538 = G__32546;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__ = function(state_32538){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____1.call(this,state_32538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32544 = f__15620__auto__.call(null);
(statearr_32544[(6)] = c__15619__auto__);

return statearr_32544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
}));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,agg_warnings_chan], null);
}finally {}}finally {(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__32528);
}});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5802__auto__)){
var ch = temp__5802__auto__;
var G__32547 = cljs.core.conj.call(null,res,ch);
res = G__32547;
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
var _STAR_alias_map_STAR__orig_val__32548 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__32549 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__32550 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__32551 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__32552 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__32553 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__32554 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__32555 = ns;
var _STAR_cljs_ns_STAR__temp_val__32556 = ns;
var _STAR_compiler_STAR__temp_val__32557 = st;
var resolve_symbol_temp_val__32558 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__32559 = klipse_clj.lang.clojure.data_readers.call(null);
(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__32554);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__32555);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__32556);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__32557);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__32558);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__32559);

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
}finally {(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__32553);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__32552);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__32551);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__32550);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__32549);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__32548);
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__32563 = arguments.length;
switch (G__32563) {
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
var _STAR_alias_map_STAR__orig_val__32564 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__32565 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__32566 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__32567 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__32568 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__32569 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__32570 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__32571 = ns;
var _STAR_cljs_ns_STAR__temp_val__32572 = ns;
var _STAR_compiler_STAR__temp_val__32573 = st;
var resolve_symbol_temp_val__32574 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__32575 = klipse_clj.lang.clojure.data_readers.call(null);
(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__32570);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__32571);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__32572);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__32573);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__32574);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__32575);

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__32569);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__32568);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__32567);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__32566);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__32565);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__32564);
}}));

(klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3);

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__32580 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__32580,(0),null);
var rest_s = cljs.core.nth.call(null,vec__32580,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__32583 = rest_s;
var G__32584 = res;
s__$1 = G__32583;
res = G__32584;
continue;
} else {
var G__32585 = rest_s;
var G__32586 = cljs.core.conj.call(null,res,exp);
s__$1 = G__32585;
res = G__32586;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__32587){
var map__32588 = p__32587;
var map__32588__$1 = cljs.core.__destructure_map.call(null,map__32588);
var result_element = cljs.core.get.call(null,map__32588__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__32588__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
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
var c__15619__auto___32692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32664){
var state_val_32665 = (state_32664[(1)]);
if((state_val_32665 === (7))){
var inst_32660 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32666_32693 = state_32664__$1;
(statearr_32666_32693[(2)] = inst_32660);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32664__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (1))){
var state_32664__$1 = state_32664;
var statearr_32667_32694 = state_32664__$1;
(statearr_32667_32694[(2)] = null);

(statearr_32667_32694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32664,(3),Object,null,(2));
var inst_32602 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_32664__$1 = state_32664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32664__$1,(5),inst_32602);
} else {
if((state_val_32665 === (15))){
var inst_32647 = (state_32664[(7)]);
var inst_32638 = (state_32664[(8)]);
var inst_32619 = (state_32664[(9)]);
var inst_32649 = (state_32664[(2)]);
var inst_32650 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32619),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32649)].join('');
var inst_32617 = inst_32647;
var inst_32618 = inst_32638;
var inst_32619__$1 = inst_32650;
var state_32664__$1 = (function (){var statearr_32668 = state_32664;
(statearr_32668[(9)] = inst_32619__$1);

(statearr_32668[(10)] = inst_32618);

(statearr_32668[(11)] = inst_32617);

return statearr_32668;
})();
var statearr_32669_32695 = state_32664__$1;
(statearr_32669_32695[(2)] = null);

(statearr_32669_32695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (13))){
var inst_32625 = (state_32664[(12)]);
var inst_32636 = (state_32664[(13)]);
var inst_32645 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_32646 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_32647 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_32625,inst_32645,inst_32646);
var state_32664__$1 = (function (){var statearr_32670 = state_32664;
(statearr_32670[(7)] = inst_32647);

return statearr_32670;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32664__$1,(15),inst_32636);
} else {
if((state_val_32665 === (6))){
var inst_32624 = (state_32664[(14)]);
var inst_32617 = (state_32664[(11)]);
var inst_32624__$1 = cljs.core.nth.call(null,inst_32617,(0),null);
var inst_32625 = cljs.core.nth.call(null,inst_32617,(1),null);
var inst_32626 = cljs.core.empty_QMARK_.call(null,inst_32624__$1);
var inst_32627 = (!(inst_32626));
var state_32664__$1 = (function (){var statearr_32671 = state_32664;
(statearr_32671[(14)] = inst_32624__$1);

(statearr_32671[(12)] = inst_32625);

return statearr_32671;
})();
if(inst_32627){
var statearr_32672_32696 = state_32664__$1;
(statearr_32672_32696[(1)] = (8));

} else {
var statearr_32673_32697 = state_32664__$1;
(statearr_32673_32697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (3))){
var inst_32589 = (state_32664[(2)]);
var inst_32590 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_32591 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_32592 = [inst_32589];
var inst_32593 = cljs.core.PersistentHashMap.fromArrays(inst_32591,inst_32592);
var inst_32594 = cljs.core.async.put_BANG_.call(null,res_chan,inst_32593);
var inst_32595 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_32596 = [inst_32589];
var inst_32597 = cljs.core.PersistentHashMap.fromArrays(inst_32595,inst_32596);
var inst_32598 = klipse_clj.lang.clojure.populate_err.call(null,inst_32597,opts);
var state_32664__$1 = (function (){var statearr_32674 = state_32664;
(statearr_32674[(15)] = inst_32594);

(statearr_32674[(16)] = inst_32590);

return statearr_32674;
})();
var statearr_32675_32698 = state_32664__$1;
(statearr_32675_32698[(2)] = inst_32598);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32664__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (12))){
var inst_32638 = (state_32664[(8)]);
var inst_32641 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_32642 = cljs.core.async.put_BANG_.call(null,res_chan,inst_32638);
var inst_32643 = klipse_clj.lang.clojure.populate_err.call(null,inst_32638,opts);
var state_32664__$1 = (function (){var statearr_32676 = state_32664;
(statearr_32676[(17)] = inst_32641);

(statearr_32676[(18)] = inst_32642);

return statearr_32676;
})();
var statearr_32677_32699 = state_32664__$1;
(statearr_32677_32699[(2)] = inst_32643);

(statearr_32677_32699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (2))){
var inst_32662 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32664__$1,inst_32662);
} else {
if((state_val_32665 === (11))){
var inst_32638 = (state_32664[(8)]);
var inst_32638__$1 = (state_32664[(2)]);
var inst_32639 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32638__$1);
var state_32664__$1 = (function (){var statearr_32678 = state_32664;
(statearr_32678[(8)] = inst_32638__$1);

return statearr_32678;
})();
if(cljs.core.truth_(inst_32639)){
var statearr_32679_32700 = state_32664__$1;
(statearr_32679_32700[(1)] = (12));

} else {
var statearr_32680_32701 = state_32664__$1;
(statearr_32680_32701[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (9))){
var inst_32619 = (state_32664[(9)]);
var inst_32618 = (state_32664[(10)]);
var inst_32655 = cljs.core.async.put_BANG_.call(null,warnings_chan,inst_32619);
var inst_32656 = cljs.core.async.put_BANG_.call(null,res_chan,inst_32618);
var state_32664__$1 = (function (){var statearr_32681 = state_32664;
(statearr_32681[(19)] = inst_32655);

return statearr_32681;
})();
var statearr_32682_32702 = state_32664__$1;
(statearr_32682_32702[(2)] = inst_32656);

(statearr_32682_32702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (5))){
var inst_32604 = (state_32664[(2)]);
var inst_32612 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_32613 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_32614 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_32612,inst_32613);
var inst_32615 = cljs.core.nth.call(null,inst_32614,(0),null);
var inst_32616 = cljs.core.nth.call(null,inst_32614,(1),null);
var inst_32617 = inst_32614;
var inst_32618 = null;
var inst_32619 = "";
var state_32664__$1 = (function (){var statearr_32683 = state_32664;
(statearr_32683[(20)] = inst_32604);

(statearr_32683[(21)] = inst_32616);

(statearr_32683[(9)] = inst_32619);

(statearr_32683[(22)] = inst_32615);

(statearr_32683[(10)] = inst_32618);

(statearr_32683[(11)] = inst_32617);

return statearr_32683;
})();
var statearr_32684_32703 = state_32664__$1;
(statearr_32684_32703[(2)] = null);

(statearr_32684_32703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (14))){
var inst_32653 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32685_32704 = state_32664__$1;
(statearr_32685_32704[(2)] = inst_32653);

(statearr_32685_32704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (10))){
var inst_32658 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32686_32705 = state_32664__$1;
(statearr_32686_32705[(2)] = inst_32658);

(statearr_32686_32705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (8))){
var inst_32624 = (state_32664[(14)]);
var inst_32632 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_32633 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_32632,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_32634 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_32624,inst_32633);
var inst_32635 = cljs.core.nth.call(null,inst_32634,(0),null);
var inst_32636 = cljs.core.nth.call(null,inst_32634,(1),null);
var state_32664__$1 = (function (){var statearr_32687 = state_32664;
(statearr_32687[(13)] = inst_32636);

return statearr_32687;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32664__$1,(11),inst_32635);
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
var klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_32688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32688[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto__);

(statearr_32688[(1)] = (1));

return statearr_32688;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto____1 = (function (state_32664){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32689){if((e32689 instanceof Object)){
var ex__15526__auto__ = e32689;
var statearr_32690_32706 = state_32664;
(statearr_32690_32706[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32707 = state_32664;
state_32664 = G__32707;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto__ = function(state_32664){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto____1.call(this,state_32664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32691 = f__15620__auto__.call(null);
(statearr_32691[(6)] = c__15619__auto___32692);

return statearr_32691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,warnings_chan], null);
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32765){
var state_val_32766 = (state_32765[(1)]);
if((state_val_32766 === (7))){
var inst_32733 = (state_32765[(7)]);
var inst_32738 = klipse_clj.repl.create_state_compile.call(null);
var inst_32739 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_32738,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_32740 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_32733,inst_32739);
var state_32765__$1 = state_32765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32765__$1,(10),inst_32740);
} else {
if((state_val_32766 === (1))){
var state_32765__$1 = state_32765;
var statearr_32767_32788 = state_32765__$1;
(statearr_32767_32788[(2)] = null);

(statearr_32767_32788[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32765,(3),Object,null,(2));
var inst_32722 = klipse_clj.repl.create_state_compile.call(null);
var inst_32723 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_32724 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_32722,inst_32723);
var inst_32725 = cljs.core.nth.call(null,inst_32724,(0),null);
var inst_32726 = cljs.core.nth.call(null,inst_32724,(1),null);
var inst_32727 = inst_32724;
var inst_32728 = "";
var state_32765__$1 = (function (){var statearr_32768 = state_32765;
(statearr_32768[(8)] = inst_32725);

(statearr_32768[(9)] = inst_32728);

(statearr_32768[(10)] = inst_32727);

(statearr_32768[(11)] = inst_32726);

return statearr_32768;
})();
var statearr_32769_32789 = state_32765__$1;
(statearr_32769_32789[(2)] = null);

(statearr_32769_32789[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (13))){
var inst_32753 = (state_32765[(2)]);
var state_32765__$1 = state_32765;
var statearr_32770_32790 = state_32765__$1;
(statearr_32770_32790[(2)] = inst_32753);

(statearr_32770_32790[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (6))){
var inst_32761 = (state_32765[(2)]);
var state_32765__$1 = state_32765;
var statearr_32771_32791 = state_32765__$1;
(statearr_32771_32791[(2)] = inst_32761);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32765__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (3))){
var inst_32708 = (state_32765[(2)]);
var inst_32709 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_32710 = [inst_32708];
var inst_32711 = cljs.core.PersistentHashMap.fromArrays(inst_32709,inst_32710);
var state_32765__$1 = state_32765;
var statearr_32772_32792 = state_32765__$1;
(statearr_32772_32792[(2)] = inst_32711);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32765__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (12))){
var inst_32742 = (state_32765[(12)]);
var inst_32728 = (state_32765[(9)]);
var inst_32734 = (state_32765[(13)]);
var inst_32746 = klipse_clj.repl.create_state_compile.call(null);
var inst_32747 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_32748 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_32734,inst_32746,inst_32747);
var inst_32749 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_32742);
var inst_32750 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32728),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32749)].join('');
var inst_32727 = inst_32748;
var inst_32728__$1 = inst_32750;
var state_32765__$1 = (function (){var statearr_32773 = state_32765;
(statearr_32773[(9)] = inst_32728__$1);

(statearr_32773[(10)] = inst_32727);

return statearr_32773;
})();
var statearr_32774_32793 = state_32765__$1;
(statearr_32774_32793[(2)] = null);

(statearr_32774_32793[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (2))){
var inst_32763 = (state_32765[(2)]);
var state_32765__$1 = state_32765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32765__$1,inst_32763);
} else {
if((state_val_32766 === (11))){
var inst_32742 = (state_32765[(12)]);
var state_32765__$1 = state_32765;
var statearr_32775_32794 = state_32765__$1;
(statearr_32775_32794[(2)] = inst_32742);

(statearr_32775_32794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (9))){
var inst_32759 = (state_32765[(2)]);
var state_32765__$1 = state_32765;
var statearr_32776_32795 = state_32765__$1;
(statearr_32776_32795[(2)] = inst_32759);

(statearr_32776_32795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (5))){
var inst_32727 = (state_32765[(10)]);
var inst_32733 = (state_32765[(7)]);
var inst_32733__$1 = cljs.core.nth.call(null,inst_32727,(0),null);
var inst_32734 = cljs.core.nth.call(null,inst_32727,(1),null);
var inst_32735 = cljs.core.empty_QMARK_.call(null,inst_32733__$1);
var inst_32736 = (!(inst_32735));
var state_32765__$1 = (function (){var statearr_32777 = state_32765;
(statearr_32777[(13)] = inst_32734);

(statearr_32777[(7)] = inst_32733__$1);

return statearr_32777;
})();
if(inst_32736){
var statearr_32778_32796 = state_32765__$1;
(statearr_32778_32796[(1)] = (7));

} else {
var statearr_32779_32797 = state_32765__$1;
(statearr_32779_32797[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (10))){
var inst_32742 = (state_32765[(12)]);
var inst_32742__$1 = (state_32765[(2)]);
var inst_32743 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32742__$1);
var state_32765__$1 = (function (){var statearr_32780 = state_32765;
(statearr_32780[(12)] = inst_32742__$1);

return statearr_32780;
})();
if(cljs.core.truth_(inst_32743)){
var statearr_32781_32798 = state_32765__$1;
(statearr_32781_32798[(1)] = (11));

} else {
var statearr_32782_32799 = state_32765__$1;
(statearr_32782_32799[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32766 === (8))){
var inst_32728 = (state_32765[(9)]);
var inst_32755 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_32756 = [inst_32728];
var inst_32757 = cljs.core.PersistentHashMap.fromArrays(inst_32755,inst_32756);
var state_32765__$1 = state_32765;
var statearr_32783_32800 = state_32765__$1;
(statearr_32783_32800[(2)] = inst_32757);

(statearr_32783_32800[(1)] = (9));


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
var klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto____0 = (function (){
var statearr_32784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32784[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto__);

(statearr_32784[(1)] = (1));

return statearr_32784;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto____1 = (function (state_32765){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32785){if((e32785 instanceof Object)){
var ex__15526__auto__ = e32785;
var statearr_32786_32801 = state_32765;
(statearr_32786_32801[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32802 = state_32765;
state_32765 = G__32802;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto__ = function(state_32765){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto____1.call(this,state_32765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32787 = f__15620__auto__.call(null);
(statearr_32787[(6)] = c__15619__auto__);

return statearr_32787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse_clj.lang.clojure.eval_async_map = (function klipse_clj$lang$clojure$eval_async_map(s,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32818){
var state_val_32819 = (state_32818[(1)]);
if((state_val_32819 === (1))){
var inst_32806 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_32807 = cljs.core.nth.call(null,inst_32806,(0),null);
var inst_32808 = cljs.core.nth.call(null,inst_32806,(1),null);
var state_32818__$1 = (function (){var statearr_32820 = state_32818;
(statearr_32820[(7)] = inst_32808);

return statearr_32820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32818__$1,(2),inst_32807);
} else {
if((state_val_32819 === (2))){
var inst_32808 = (state_32818[(7)]);
var inst_32810 = (state_32818[(2)]);
var inst_32811 = klipse_clj.lang.clojure.result_as_str.call(null,inst_32810,opts);
var state_32818__$1 = (function (){var statearr_32821 = state_32818;
(statearr_32821[(8)] = inst_32811);

return statearr_32821;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32818__$1,(3),inst_32808);
} else {
if((state_val_32819 === (3))){
var inst_32811 = (state_32818[(8)]);
var inst_32813 = (state_32818[(2)]);
var inst_32814 = [new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"res","res",-1395007879)];
var inst_32815 = [inst_32813,inst_32811];
var inst_32816 = cljs.core.PersistentHashMap.fromArrays(inst_32814,inst_32815);
var state_32818__$1 = state_32818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32818__$1,inst_32816);
} else {
return null;
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____0 = (function (){
var statearr_32822 = [null,null,null,null,null,null,null,null,null];
(statearr_32822[(0)] = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__);

(statearr_32822[(1)] = (1));

return statearr_32822;
});
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____1 = (function (state_32818){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32823){if((e32823 instanceof Object)){
var ex__15526__auto__ = e32823;
var statearr_32824_32826 = state_32818;
(statearr_32824_32826[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32827 = state_32818;
state_32818 = G__32827;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__ = function(state_32818){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____1.call(this,state_32818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32825 = f__15620__auto__.call(null);
(statearr_32825[(6)] = c__15619__auto__);

return statearr_32825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32840){
var state_val_32841 = (state_32840[(1)]);
if((state_val_32841 === (1))){
var inst_32831 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_32832 = cljs.core.nth.call(null,inst_32831,(0),null);
var inst_32833 = cljs.core.nth.call(null,inst_32831,(1),null);
var state_32840__$1 = (function (){var statearr_32842 = state_32840;
(statearr_32842[(7)] = inst_32833);

return statearr_32842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32840__$1,(2),inst_32832);
} else {
if((state_val_32841 === (2))){
var inst_32833 = (state_32840[(7)]);
var inst_32835 = (state_32840[(2)]);
var inst_32836 = klipse_clj.lang.clojure.result_as_str.call(null,inst_32835,opts);
var state_32840__$1 = (function (){var statearr_32843 = state_32840;
(statearr_32843[(8)] = inst_32836);

return statearr_32843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32840__$1,(3),inst_32833);
} else {
if((state_val_32841 === (3))){
var inst_32836 = (state_32840[(8)]);
var inst_32838 = (state_32840[(2)]);
var state_32840__$1 = (function (){var statearr_32844 = state_32840;
(statearr_32844[(9)] = inst_32838);

return statearr_32844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32840__$1,inst_32836);
} else {
return null;
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____0 = (function (){
var statearr_32845 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32845[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__);

(statearr_32845[(1)] = (1));

return statearr_32845;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____1 = (function (state_32840){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32846){if((e32846 instanceof Object)){
var ex__15526__auto__ = e32846;
var statearr_32847_32849 = state_32840;
(statearr_32847_32849[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32850 = state_32840;
state_32840 = G__32850;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__ = function(state_32840){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____1.call(this,state_32840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32848 = f__15620__auto__.call(null);
(statearr_32848[(6)] = c__15619__auto__);

return statearr_32848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__32852 = arguments.length;
switch (G__32852) {
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
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32859){
var state_val_32860 = (state_32859[(1)]);
if((state_val_32860 === (1))){
var inst_32853 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_32854 = cljs.core.first.call(null,inst_32853);
var state_32859__$1 = state_32859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32859__$1,(2),inst_32854);
} else {
if((state_val_32860 === (2))){
var inst_32856 = (state_32859[(2)]);
var inst_32857 = klipse_clj.lang.clojure.read_result.call(null,inst_32856);
var state_32859__$1 = state_32859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32859__$1,inst_32857);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$state_machine__15523__auto____0 = (function (){
var statearr_32861 = [null,null,null,null,null,null,null];
(statearr_32861[(0)] = klipse_clj$lang$clojure$state_machine__15523__auto__);

(statearr_32861[(1)] = (1));

return statearr_32861;
});
var klipse_clj$lang$clojure$state_machine__15523__auto____1 = (function (state_32859){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32862){if((e32862 instanceof Object)){
var ex__15526__auto__ = e32862;
var statearr_32863_32866 = state_32859;
(statearr_32863_32866[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32867 = state_32859;
state_32859 = G__32867;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15523__auto__ = function(state_32859){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15523__auto____1.call(this,state_32859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15523__auto____0;
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15523__auto____1;
return klipse_clj$lang$clojure$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32864 = f__15620__auto__.call(null);
(statearr_32864[(6)] = c__15619__auto__);

return statearr_32864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
}));

(klipse_clj.lang.clojure.the_eval.cljs$lang$maxFixedArity = 2);

/**
 * to be called from javascript
 */
klipse_clj.lang.clojure.eval_and_callback = (function klipse_clj$lang$clojure$eval_and_callback(s,cb){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32874){
var state_val_32875 = (state_32874[(1)]);
if((state_val_32875 === (1))){
var inst_32868 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_32874__$1 = state_32874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32874__$1,(2),inst_32868);
} else {
if((state_val_32875 === (2))){
var inst_32870 = (state_32874[(2)]);
var inst_32871 = cljs.core.clj__GT_js.call(null,inst_32870);
var inst_32872 = cb.call(null,inst_32871);
var state_32874__$1 = state_32874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32874__$1,inst_32872);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____0 = (function (){
var statearr_32876 = [null,null,null,null,null,null,null];
(statearr_32876[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__);

(statearr_32876[(1)] = (1));

return statearr_32876;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____1 = (function (state_32874){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32877){if((e32877 instanceof Object)){
var ex__15526__auto__ = e32877;
var statearr_32878_32880 = state_32874;
(statearr_32878_32880[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32881 = state_32874;
state_32874 = G__32881;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__ = function(state_32874){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____1.call(this,state_32874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32879 = f__15620__auto__.call(null);
(statearr_32879[(6)] = c__15619__auto__);

return statearr_32879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__32883 = arguments.length;
switch (G__32883) {
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
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32889){
var state_val_32890 = (state_32889[(1)]);
if((state_val_32890 === (1))){
var inst_32884 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_32889__$1 = state_32889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32889__$1,(2),inst_32884);
} else {
if((state_val_32890 === (2))){
var inst_32886 = (state_32889[(2)]);
var inst_32887 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_32886);
var state_32889__$1 = state_32889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32889__$1,inst_32887);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$state_machine__15523__auto____0 = (function (){
var statearr_32891 = [null,null,null,null,null,null,null];
(statearr_32891[(0)] = klipse_clj$lang$clojure$state_machine__15523__auto__);

(statearr_32891[(1)] = (1));

return statearr_32891;
});
var klipse_clj$lang$clojure$state_machine__15523__auto____1 = (function (state_32889){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32892){if((e32892 instanceof Object)){
var ex__15526__auto__ = e32892;
var statearr_32893_32896 = state_32889;
(statearr_32893_32896[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32897 = state_32889;
state_32889 = G__32897;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15523__auto__ = function(state_32889){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15523__auto____1.call(this,state_32889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15523__auto____0;
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15523__auto____1;
return klipse_clj$lang$clojure$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32894 = f__15620__auto__.call(null);
(statearr_32894[(6)] = c__15619__auto__);

return statearr_32894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
}));

(klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2);

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32903){
var state_val_32904 = (state_32903[(1)]);
if((state_val_32904 === (1))){
var inst_32898 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_32903__$1 = state_32903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32903__$1,(2),inst_32898);
} else {
if((state_val_32904 === (2))){
var inst_32900 = (state_32903[(2)]);
var inst_32901 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_32900);
var state_32903__$1 = state_32903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32903__$1,inst_32901);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____0 = (function (){
var statearr_32905 = [null,null,null,null,null,null,null];
(statearr_32905[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__);

(statearr_32905[(1)] = (1));

return statearr_32905;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____1 = (function (state_32903){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32906){if((e32906 instanceof Object)){
var ex__15526__auto__ = e32906;
var statearr_32907_32909 = state_32903;
(statearr_32907_32909[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32910 = state_32903;
state_32903 = G__32910;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__ = function(state_32903){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____1.call(this,state_32903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32908 = f__15620__auto__.call(null);
(statearr_32908[(6)] = c__15619__auto__);

return statearr_32908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32917){
var state_val_32918 = (state_32917[(1)]);
if((state_val_32918 === (1))){
var inst_32911 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32917__$1,(2),inst_32911);
} else {
if((state_val_32918 === (2))){
var inst_32913 = (state_32917[(2)]);
var inst_32914 = cljs.core.second.call(null,inst_32913);
var inst_32915 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32914);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32917__$1,inst_32915);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____0 = (function (){
var statearr_32919 = [null,null,null,null,null,null,null];
(statearr_32919[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__);

(statearr_32919[(1)] = (1));

return statearr_32919;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____1 = (function (state_32917){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32920){if((e32920 instanceof Object)){
var ex__15526__auto__ = e32920;
var statearr_32921_32923 = state_32917;
(statearr_32921_32923[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32924 = state_32917;
state_32917 = G__32924;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__ = function(state_32917){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____1.call(this,state_32917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32922 = f__15620__auto__.call(null);
(statearr_32922[(6)] = c__15619__auto__);

return statearr_32922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__32926){
var map__32927 = p__32926;
var map__32927__$1 = cljs.core.__destructure_map.call(null,map__32927);
var opts = map__32927__$1;
var container_id = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__32927__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__15619__auto___32983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32965){
var state_val_32966 = (state_32965[(1)]);
if((state_val_32966 === (7))){
var inst_32936 = (state_32965[(2)]);
var inst_32941 = (function (){var _STAR_print_newline_STAR__orig_val__32937 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32938 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32939 = true;
return (function (p1__32925_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__32925_SHARP_);
});
})();
var inst_32942 = (cljs.core._STAR_print_newline_STAR_ = true);
var inst_32943 = (cljs.core._STAR_print_fn_STAR_ = inst_32941);
var state_32965__$1 = (function (){var statearr_32967 = state_32965;
(statearr_32967[(7)] = inst_32942);

(statearr_32967[(8)] = inst_32943);

(statearr_32967[(9)] = inst_32936);

return statearr_32967;
})();
var statearr_32968_32984 = state_32965__$1;
(statearr_32968_32984[(2)] = null);

(statearr_32968_32984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32966 === (1))){
var inst_32928 = clojure.string.blank_QMARK_.call(null,exp);
var state_32965__$1 = state_32965;
if(inst_32928){
var statearr_32969_32985 = state_32965__$1;
(statearr_32969_32985[(1)] = (2));

} else {
var statearr_32970_32986 = state_32965__$1;
(statearr_32970_32986[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32966 === (4))){
var inst_32963 = (state_32965[(2)]);
var state_32965__$1 = state_32965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32965__$1,inst_32963);
} else {
if((state_val_32966 === (6))){
var state_32965__$1 = state_32965;
var statearr_32971_32987 = state_32965__$1;
(statearr_32971_32987[(2)] = null);

(statearr_32971_32987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32966 === (3))){
var state_32965__$1 = state_32965;
if(cljs.core.truth_(setup_container_fn)){
var statearr_32972_32988 = state_32965__$1;
(statearr_32972_32988[(1)] = (5));

} else {
var statearr_32973_32989 = state_32965__$1;
(statearr_32973_32989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32966 === (2))){
var inst_32930 = cljs.core.async.put_BANG_.call(null,c,"");
var state_32965__$1 = state_32965;
var statearr_32974_32990 = state_32965__$1;
(statearr_32974_32990[(2)] = inst_32930);

(statearr_32974_32990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32966 === (11))){
var inst_32953 = (state_32965[(2)]);
var inst_32954 = cljs.core.__destructure_map.call(null,inst_32953);
var inst_32955 = cljs.core.get.call(null,inst_32954,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_32956 = cljs.core.get.call(null,inst_32954,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_32957 = cljs.core.second.call(null,inst_32956);
var inst_32958 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32955),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32957)].join('');
var inst_32959 = cljs.core.async.put_BANG_.call(null,c,inst_32958);
var state_32965__$1 = state_32965;
var statearr_32975_32991 = state_32965__$1;
(statearr_32975_32991[(2)] = inst_32959);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32965__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32966 === (9))){
var inst_32944 = (state_32965[(2)]);
var inst_32945 = (cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_);
var inst_32946 = (cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_);
var state_32965__$1 = (function (){var statearr_32976 = state_32965;
(statearr_32976[(10)] = inst_32944);

(statearr_32976[(11)] = inst_32945);

(statearr_32976[(12)] = inst_32946);

return statearr_32976;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32965__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32966 === (5))){
var inst_32933 = setup_container_fn.call(null,container_id);
var state_32965__$1 = state_32965;
var statearr_32977_32992 = state_32965__$1;
(statearr_32977_32992[(2)] = inst_32933);

(statearr_32977_32992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32966 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32965,null,null,(9),(8));
var inst_32951 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_32965__$1 = state_32965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32965__$1,(11),inst_32951);
} else {
if((state_val_32966 === (8))){
var inst_32961 = (state_32965[(2)]);
var state_32965__$1 = state_32965;
var statearr_32978_32993 = state_32965__$1;
(statearr_32978_32993[(2)] = inst_32961);

(statearr_32978_32993[(1)] = (4));


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
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto____0 = (function (){
var statearr_32979 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32979[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto__);

(statearr_32979[(1)] = (1));

return statearr_32979;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto____1 = (function (state_32965){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32980){if((e32980 instanceof Object)){
var ex__15526__auto__ = e32980;
var statearr_32981_32994 = state_32965;
(statearr_32981_32994[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32995 = state_32965;
state_32965 = G__32995;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto__ = function(state_32965){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto____1.call(this,state_32965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32982 = f__15620__auto__.call(null);
(statearr_32982[(6)] = c__15619__auto___32983);

return statearr_32982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return c;
});
klipse_clj.lang.clojure.eval_async_prepl = (function klipse_clj$lang$clojure$eval_async_prepl(var_args){
var G__32997 = arguments.length;
switch (G__32997) {
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
var c__15619__auto___33027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_33016){
var state_val_33017 = (state_33016[(1)]);
if((state_val_33017 === (1))){
var inst_33000 = (function (){var _STAR_print_fn_STAR__orig_val__32998 = cljs.core._STAR_print_fn_STAR_;
return (function (s__$1){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),s__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"out","out",-910545517)], null));
});
})();
var inst_33001 = (cljs.core._STAR_print_fn_STAR_ = inst_33000);
var state_33016__$1 = (function (){var statearr_33018 = state_33016;
(statearr_33018[(7)] = inst_33001);

return statearr_33018;
})();
var statearr_33019_33028 = state_33016__$1;
(statearr_33019_33028[(2)] = null);

(statearr_33019_33028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (2))){
var inst_33014 = (state_33016[(2)]);
var state_33016__$1 = state_33016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33016__$1,inst_33014);
} else {
if((state_val_33017 === (3))){
var inst_33002 = (state_33016[(2)]);
var inst_33003 = (cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_);
var state_33016__$1 = (function (){var statearr_33020 = state_33016;
(statearr_33020[(8)] = inst_33003);

(statearr_33020[(9)] = inst_33002);

return statearr_33020;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33016__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33017 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33016,null,null,(3),(2));
var inst_33007 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_33008 = cljs.core.first.call(null,inst_33007);
var state_33016__$1 = state_33016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33016__$1,(5),inst_33008);
} else {
if((state_val_33017 === (5))){
var inst_33010 = (state_33016[(2)]);
var inst_33011 = klipse_clj.lang.clojure.result_as_prepl_map.call(null,s,inst_33010,opts);
var inst_33012 = cljs.core.async.put_BANG_.call(null,c,inst_33011);
var state_33016__$1 = state_33016;
var statearr_33021_33029 = state_33016__$1;
(statearr_33021_33029[(2)] = inst_33012);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33016__$1);

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
var klipse_clj$lang$clojure$state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$state_machine__15523__auto____0 = (function (){
var statearr_33022 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33022[(0)] = klipse_clj$lang$clojure$state_machine__15523__auto__);

(statearr_33022[(1)] = (1));

return statearr_33022;
});
var klipse_clj$lang$clojure$state_machine__15523__auto____1 = (function (state_33016){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_33016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e33023){if((e33023 instanceof Object)){
var ex__15526__auto__ = e33023;
var statearr_33024_33030 = state_33016;
(statearr_33024_33030[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33031 = state_33016;
state_33016 = G__33031;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15523__auto__ = function(state_33016){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15523__auto____1.call(this,state_33016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15523__auto____0;
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15523__auto____1;
return klipse_clj$lang$clojure$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_33025 = f__15620__auto__.call(null);
(statearr_33025[(6)] = c__15619__auto___33027);

return statearr_33025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return c;
}));

(klipse_clj.lang.clojure.eval_async_prepl.cljs$lang$maxFixedArity = 2);

klipse_clj.lang.clojure.main = (function klipse_clj$lang$clojure$main(){
return console.log("main");
});

//# sourceMappingURL=clojure.js.map

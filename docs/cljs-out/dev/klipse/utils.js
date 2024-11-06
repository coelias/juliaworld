// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.utils');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cemerick.url');
goog.require('applied_science.js_interop');
klipse.utils.current_url = (function klipse$utils$current_url(){
var temp__5802__auto__ = (((typeof location !== 'undefined'))?location:"");
if(cljs.core.truth_(temp__5802__auto__)){
var loc = temp__5802__auto__;
return cemerick.url.url.call(null,(loc["href"]));
} else {
return null;
}
});
klipse.utils.url_parameters_STAR_ = (function klipse$utils$url_parameters_STAR_(){
return clojure.walk.keywordize_keys.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(klipse.utils.current_url.call(null)));
});
klipse.utils.url_parameters = cljs.core.memoize.call(null,klipse.utils.url_parameters_STAR_);
klipse.utils.debounce = (function klipse$utils$debounce(func,wait_in_ms){
var counter = cljs.core.atom.call(null,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_17501){
var state_val_17502 = (state_17501[(1)]);
if((state_val_17502 === (1))){
var inst_17488 = cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);
var inst_17489 = cljs.core.async.timeout.call(null,wait_in_ms);
var state_17501__$1 = (function (){var statearr_17503 = state_17501;
(statearr_17503[(7)] = inst_17488);

return statearr_17503;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17501__$1,(2),inst_17489);
} else {
if((state_val_17502 === (2))){
var inst_17491 = (state_17501[(2)]);
var inst_17492 = cljs.core.swap_BANG_.call(null,counter,cljs.core.dec);
var inst_17493 = cljs.core.deref.call(null,counter);
var inst_17494 = (inst_17493 === (0));
var state_17501__$1 = (function (){var statearr_17504 = state_17501;
(statearr_17504[(8)] = inst_17492);

(statearr_17504[(9)] = inst_17491);

return statearr_17504;
})();
if(cljs.core.truth_(inst_17494)){
var statearr_17505_17528 = state_17501__$1;
(statearr_17505_17528[(1)] = (3));

} else {
var statearr_17506_17529 = state_17501__$1;
(statearr_17506_17529[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (3))){
var inst_17496 = func.call(null);
var state_17501__$1 = state_17501;
var statearr_17507_17530 = state_17501__$1;
(statearr_17507_17530[(2)] = inst_17496);

(statearr_17507_17530[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (4))){
var state_17501__$1 = state_17501;
var statearr_17508_17531 = state_17501__$1;
(statearr_17508_17531[(2)] = null);

(statearr_17508_17531[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17502 === (5))){
var inst_17499 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17501__$1,inst_17499);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse$utils$debounce_$_state_machine__13608__auto__ = null;
var klipse$utils$debounce_$_state_machine__13608__auto____0 = (function (){
var statearr_17509 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17509[(0)] = klipse$utils$debounce_$_state_machine__13608__auto__);

(statearr_17509[(1)] = (1));

return statearr_17509;
});
var klipse$utils$debounce_$_state_machine__13608__auto____1 = (function (state_17501){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_17501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e17510){if((e17510 instanceof Object)){
var ex__13611__auto__ = e17510;
var statearr_17511_17532 = state_17501;
(statearr_17511_17532[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17533 = state_17501;
state_17501 = G__17533;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__13608__auto__ = function(state_17501){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__13608__auto____1.call(this,state_17501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$debounce_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__13608__auto____0;
klipse$utils$debounce_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__13608__auto____1;
return klipse$utils$debounce_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_17512 = f__13705__auto__.call(null);
(statearr_17512[(6)] = c__13704__auto__);

return statearr_17512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
}),(function (){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_17520){
var state_val_17521 = (state_17520[(1)]);
if((state_val_17521 === (1))){
var inst_17513 = func.call(null);
var inst_17514 = cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);
var inst_17515 = cljs.core.async.timeout.call(null,wait_in_ms);
var state_17520__$1 = (function (){var statearr_17522 = state_17520;
(statearr_17522[(7)] = inst_17514);

(statearr_17522[(8)] = inst_17513);

return statearr_17522;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17520__$1,(2),inst_17515);
} else {
if((state_val_17521 === (2))){
var inst_17517 = (state_17520[(2)]);
var inst_17518 = cljs.core.swap_BANG_.call(null,counter,cljs.core.dec);
var state_17520__$1 = (function (){var statearr_17523 = state_17520;
(statearr_17523[(9)] = inst_17517);

return statearr_17523;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17520__$1,inst_17518);
} else {
return null;
}
}
});
return (function() {
var klipse$utils$debounce_$_state_machine__13608__auto__ = null;
var klipse$utils$debounce_$_state_machine__13608__auto____0 = (function (){
var statearr_17524 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17524[(0)] = klipse$utils$debounce_$_state_machine__13608__auto__);

(statearr_17524[(1)] = (1));

return statearr_17524;
});
var klipse$utils$debounce_$_state_machine__13608__auto____1 = (function (state_17520){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_17520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e17525){if((e17525 instanceof Object)){
var ex__13611__auto__ = e17525;
var statearr_17526_17534 = state_17520;
(statearr_17526_17534[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17535 = state_17520;
state_17520 = G__17535;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__13608__auto__ = function(state_17520){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__13608__auto____1.call(this,state_17520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$debounce_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__13608__auto____0;
klipse$utils$debounce_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__13608__auto____1;
return klipse$utils$debounce_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_17527 = f__13705__auto__.call(null);
(statearr_17527[(6)] = c__13704__auto__);

return statearr_17527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
})], null);
});
klipse.utils.gist_path_raw = (function klipse$utils$gist_path_raw(gist_id){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id),"/raw","?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.call(null))].join('');
});
klipse.utils.gist_path_page = (function klipse$utils$gist_path_page(gist_id){
return ["https://gist.github.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id)].join('');
});
klipse.utils.read_input_from_gist = (function klipse$utils$read_input_from_gist(gist_id){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_17559){
var state_val_17560 = (state_17559[(1)]);
if((state_val_17560 === (1))){
var state_17559__$1 = state_17559;
if(cljs.core.truth_(gist_id)){
var statearr_17561_17575 = state_17559__$1;
(statearr_17561_17575[(1)] = (2));

} else {
var statearr_17562_17576 = state_17559__$1;
(statearr_17562_17576[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17560 === (2))){
var inst_17538 = (state_17559[(7)]);
var inst_17538__$1 = klipse.utils.gist_path_raw.call(null,gist_id);
var inst_17539 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_17540 = [false];
var inst_17541 = cljs.core.PersistentHashMap.fromArrays(inst_17539,inst_17540);
var inst_17542 = cljs_http.client.get.call(null,inst_17538__$1,inst_17541);
var state_17559__$1 = (function (){var statearr_17563 = state_17559;
(statearr_17563[(7)] = inst_17538__$1);

return statearr_17563;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17559__$1,(5),inst_17542);
} else {
if((state_val_17560 === (3))){
var state_17559__$1 = state_17559;
var statearr_17564_17577 = state_17559__$1;
(statearr_17564_17577[(2)] = null);

(statearr_17564_17577[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17560 === (4))){
var inst_17557 = (state_17559[(2)]);
var state_17559__$1 = state_17559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17559__$1,inst_17557);
} else {
if((state_val_17560 === (5))){
var inst_17546 = (state_17559[(8)]);
var inst_17544 = (state_17559[(2)]);
var inst_17545 = cljs.core.__destructure_map.call(null,inst_17544);
var inst_17546__$1 = cljs.core.get.call(null,inst_17545,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_17547 = cljs.core.get.call(null,inst_17545,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_17548 = cljs.core._EQ_.call(null,inst_17546__$1,(200));
var inst_17549 = (!(inst_17548));
var state_17559__$1 = (function (){var statearr_17565 = state_17559;
(statearr_17565[(8)] = inst_17546__$1);

(statearr_17565[(9)] = inst_17547);

return statearr_17565;
})();
if(inst_17549){
var statearr_17566_17578 = state_17559__$1;
(statearr_17566_17578[(1)] = (6));

} else {
var statearr_17567_17579 = state_17559__$1;
(statearr_17567_17579[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17560 === (6))){
var inst_17546 = (state_17559[(8)]);
var inst_17538 = (state_17559[(7)]);
var inst_17551 = ["\"","Wrong gist path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17538),"\n","gist-id= ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id),"\n","http status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17546),"\""].join('');
var state_17559__$1 = state_17559;
var statearr_17568_17580 = state_17559__$1;
(statearr_17568_17580[(2)] = inst_17551);

(statearr_17568_17580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17560 === (7))){
var inst_17547 = (state_17559[(9)]);
var state_17559__$1 = state_17559;
var statearr_17569_17581 = state_17559__$1;
(statearr_17569_17581[(2)] = inst_17547);

(statearr_17569_17581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17560 === (8))){
var inst_17554 = (state_17559[(2)]);
var state_17559__$1 = state_17559;
var statearr_17570_17582 = state_17559__$1;
(statearr_17570_17582[(2)] = inst_17554);

(statearr_17570_17582[(1)] = (4));


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
var klipse$utils$read_input_from_gist_$_state_machine__13608__auto__ = null;
var klipse$utils$read_input_from_gist_$_state_machine__13608__auto____0 = (function (){
var statearr_17571 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17571[(0)] = klipse$utils$read_input_from_gist_$_state_machine__13608__auto__);

(statearr_17571[(1)] = (1));

return statearr_17571;
});
var klipse$utils$read_input_from_gist_$_state_machine__13608__auto____1 = (function (state_17559){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_17559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e17572){if((e17572 instanceof Object)){
var ex__13611__auto__ = e17572;
var statearr_17573_17583 = state_17559;
(statearr_17573_17583[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17584 = state_17559;
state_17559 = G__17584;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$utils$read_input_from_gist_$_state_machine__13608__auto__ = function(state_17559){
switch(arguments.length){
case 0:
return klipse$utils$read_input_from_gist_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$utils$read_input_from_gist_$_state_machine__13608__auto____1.call(this,state_17559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$read_input_from_gist_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$read_input_from_gist_$_state_machine__13608__auto____0;
klipse$utils$read_input_from_gist_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$read_input_from_gist_$_state_machine__13608__auto____1;
return klipse$utils$read_input_from_gist_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_17574 = f__13705__auto__.call(null);
(statearr_17574[(6)] = c__13704__auto__);

return statearr_17574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.utils.runonce = (function klipse$utils$runonce(f){
var ran = cljs.core.atom.call(null,false);
return (function() { 
var G__17585__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__17585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17586__i = 0, G__17586__a = new Array(arguments.length -  0);
while (G__17586__i < G__17586__a.length) {G__17586__a[G__17586__i] = arguments[G__17586__i + 0]; ++G__17586__i;}
  args = new cljs.core.IndexedSeq(G__17586__a,0,null);
} 
return G__17585__delegate.call(this,args);};
G__17585.cljs$lang$maxFixedArity = 0;
G__17585.cljs$lang$applyTo = (function (arglist__17587){
var args = cljs.core.seq(arglist__17587);
return G__17585__delegate(args);
});
G__17585.cljs$core$IFn$_invoke$arity$variadic = G__17585__delegate;
return G__17585;
})()
;
});
/**
 * Returns a function that will run `f` only once.
 *   If `f` succeeds (returns [:ok & args]), on subsequent calls it will return [:ok].
 *   `f` must return a channel.
 */
klipse.utils.runonce_async = (function klipse$utils$runonce_async(f){
var ran = cljs.core.atom.call(null,false);
return (function() { 
var G__17624__delegate = function (args){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_17608){
var state_val_17609 = (state_17608[(1)]);
if((state_val_17609 === (1))){
var inst_17588 = cljs.core.deref.call(null,ran);
var inst_17589 = cljs.core.not.call(null,inst_17588);
var state_17608__$1 = state_17608;
if(inst_17589){
var statearr_17610_17625 = state_17608__$1;
(statearr_17610_17625[(1)] = (2));

} else {
var statearr_17611_17626 = state_17608__$1;
(statearr_17611_17626[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (2))){
var inst_17591 = cljs.core.apply.call(null,f,args);
var state_17608__$1 = state_17608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17608__$1,(5),inst_17591);
} else {
if((state_val_17609 === (3))){
var inst_17602 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17603 = [new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_17604 = (new cljs.core.PersistentVector(null,1,(5),inst_17602,inst_17603,null));
var state_17608__$1 = state_17608;
var statearr_17612_17627 = state_17608__$1;
(statearr_17612_17627[(2)] = inst_17604);

(statearr_17612_17627[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (4))){
var inst_17606 = (state_17608[(2)]);
var state_17608__$1 = state_17608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17608__$1,inst_17606);
} else {
if((state_val_17609 === (5))){
var inst_17593 = (state_17608[(7)]);
var inst_17593__$1 = (state_17608[(2)]);
var inst_17594 = cljs.core.first.call(null,inst_17593__$1);
var inst_17595 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_17594);
var state_17608__$1 = (function (){var statearr_17613 = state_17608;
(statearr_17613[(7)] = inst_17593__$1);

return statearr_17613;
})();
if(inst_17595){
var statearr_17614_17628 = state_17608__$1;
(statearr_17614_17628[(1)] = (6));

} else {
var statearr_17615_17629 = state_17608__$1;
(statearr_17615_17629[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (6))){
var inst_17597 = cljs.core.reset_BANG_.call(null,ran,true);
var state_17608__$1 = state_17608;
var statearr_17616_17630 = state_17608__$1;
(statearr_17616_17630[(2)] = inst_17597);

(statearr_17616_17630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (7))){
var state_17608__$1 = state_17608;
var statearr_17617_17631 = state_17608__$1;
(statearr_17617_17631[(2)] = null);

(statearr_17617_17631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17609 === (8))){
var inst_17593 = (state_17608[(7)]);
var inst_17600 = (state_17608[(2)]);
var state_17608__$1 = (function (){var statearr_17618 = state_17608;
(statearr_17618[(8)] = inst_17600);

return statearr_17618;
})();
var statearr_17619_17632 = state_17608__$1;
(statearr_17619_17632[(2)] = inst_17593);

(statearr_17619_17632[(1)] = (4));


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
var klipse$utils$runonce_async_$_state_machine__13608__auto__ = null;
var klipse$utils$runonce_async_$_state_machine__13608__auto____0 = (function (){
var statearr_17620 = [null,null,null,null,null,null,null,null,null];
(statearr_17620[(0)] = klipse$utils$runonce_async_$_state_machine__13608__auto__);

(statearr_17620[(1)] = (1));

return statearr_17620;
});
var klipse$utils$runonce_async_$_state_machine__13608__auto____1 = (function (state_17608){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_17608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e17621){if((e17621 instanceof Object)){
var ex__13611__auto__ = e17621;
var statearr_17622_17633 = state_17608;
(statearr_17622_17633[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17634 = state_17608;
state_17608 = G__17634;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$utils$runonce_async_$_state_machine__13608__auto__ = function(state_17608){
switch(arguments.length){
case 0:
return klipse$utils$runonce_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$utils$runonce_async_$_state_machine__13608__auto____1.call(this,state_17608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$runonce_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$runonce_async_$_state_machine__13608__auto____0;
klipse$utils$runonce_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$runonce_async_$_state_machine__13608__auto____1;
return klipse$utils$runonce_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_17623 = f__13705__auto__.call(null);
(statearr_17623[(6)] = c__13704__auto__);

return statearr_17623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
};
var G__17624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17635__i = 0, G__17635__a = new Array(arguments.length -  0);
while (G__17635__i < G__17635__a.length) {G__17635__a[G__17635__i] = arguments[G__17635__i + 0]; ++G__17635__i;}
  args = new cljs.core.IndexedSeq(G__17635__a,0,null);
} 
return G__17624__delegate.call(this,args);};
G__17624.cljs$lang$maxFixedArity = 0;
G__17624.cljs$lang$applyTo = (function (arglist__17636){
var args = cljs.core.seq(arglist__17636);
return G__17624__delegate(args);
});
G__17624.cljs$core$IFn$_invoke$arity$variadic = G__17624__delegate;
return G__17624;
})()
;
});
/**
 * Returns a memoized version of f.
 *   If `f` succeeds (returns [:ok & args]), on subsequent calls it will return the cached results.
 *   `f` must return a channel.
 */
klipse.utils.memoize_async = (function klipse$utils$memoize_async(f){
var ran = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return (function() { 
var G__17673__delegate = function (args){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_17657){
var state_val_17658 = (state_17657[(1)]);
if((state_val_17658 === (1))){
var inst_17637 = cljs.core.deref.call(null,ran);
var inst_17638 = cljs.core.contains_QMARK_.call(null,inst_17637,args);
var inst_17639 = (!(inst_17638));
var state_17657__$1 = state_17657;
if(inst_17639){
var statearr_17659_17674 = state_17657__$1;
(statearr_17659_17674[(1)] = (2));

} else {
var statearr_17660_17675 = state_17657__$1;
(statearr_17660_17675[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17658 === (2))){
var inst_17641 = cljs.core.apply.call(null,f,args);
var state_17657__$1 = state_17657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17657__$1,(5),inst_17641);
} else {
if((state_val_17658 === (3))){
var inst_17652 = cljs.core.deref.call(null,ran);
var inst_17653 = cljs.core.get.call(null,inst_17652,args);
var state_17657__$1 = state_17657;
var statearr_17661_17676 = state_17657__$1;
(statearr_17661_17676[(2)] = inst_17653);

(statearr_17661_17676[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17658 === (4))){
var inst_17655 = (state_17657[(2)]);
var state_17657__$1 = state_17657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17657__$1,inst_17655);
} else {
if((state_val_17658 === (5))){
var inst_17643 = (state_17657[(7)]);
var inst_17643__$1 = (state_17657[(2)]);
var inst_17644 = cljs.core.first.call(null,inst_17643__$1);
var inst_17645 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_17644);
var state_17657__$1 = (function (){var statearr_17662 = state_17657;
(statearr_17662[(7)] = inst_17643__$1);

return statearr_17662;
})();
if(inst_17645){
var statearr_17663_17677 = state_17657__$1;
(statearr_17663_17677[(1)] = (6));

} else {
var statearr_17664_17678 = state_17657__$1;
(statearr_17664_17678[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17658 === (6))){
var inst_17643 = (state_17657[(7)]);
var inst_17647 = cljs.core.swap_BANG_.call(null,ran,cljs.core.assoc,args,inst_17643);
var state_17657__$1 = state_17657;
var statearr_17665_17679 = state_17657__$1;
(statearr_17665_17679[(2)] = inst_17647);

(statearr_17665_17679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17658 === (7))){
var state_17657__$1 = state_17657;
var statearr_17666_17680 = state_17657__$1;
(statearr_17666_17680[(2)] = null);

(statearr_17666_17680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17658 === (8))){
var inst_17643 = (state_17657[(7)]);
var inst_17650 = (state_17657[(2)]);
var state_17657__$1 = (function (){var statearr_17667 = state_17657;
(statearr_17667[(8)] = inst_17650);

return statearr_17667;
})();
var statearr_17668_17681 = state_17657__$1;
(statearr_17668_17681[(2)] = inst_17643);

(statearr_17668_17681[(1)] = (4));


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
var klipse$utils$memoize_async_$_state_machine__13608__auto__ = null;
var klipse$utils$memoize_async_$_state_machine__13608__auto____0 = (function (){
var statearr_17669 = [null,null,null,null,null,null,null,null,null];
(statearr_17669[(0)] = klipse$utils$memoize_async_$_state_machine__13608__auto__);

(statearr_17669[(1)] = (1));

return statearr_17669;
});
var klipse$utils$memoize_async_$_state_machine__13608__auto____1 = (function (state_17657){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_17657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e17670){if((e17670 instanceof Object)){
var ex__13611__auto__ = e17670;
var statearr_17671_17682 = state_17657;
(statearr_17671_17682[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17683 = state_17657;
state_17657 = G__17683;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$utils$memoize_async_$_state_machine__13608__auto__ = function(state_17657){
switch(arguments.length){
case 0:
return klipse$utils$memoize_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$utils$memoize_async_$_state_machine__13608__auto____1.call(this,state_17657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$memoize_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$memoize_async_$_state_machine__13608__auto____0;
klipse$utils$memoize_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$memoize_async_$_state_machine__13608__auto____1;
return klipse$utils$memoize_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_17672 = f__13705__auto__.call(null);
(statearr_17672[(6)] = c__13704__auto__);

return statearr_17672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
};
var G__17673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17684__i = 0, G__17684__a = new Array(arguments.length -  0);
while (G__17684__i < G__17684__a.length) {G__17684__a[G__17684__i] = arguments[G__17684__i + 0]; ++G__17684__i;}
  args = new cljs.core.IndexedSeq(G__17684__a,0,null);
} 
return G__17673__delegate.call(this,args);};
G__17673.cljs$lang$maxFixedArity = 0;
G__17673.cljs$lang$applyTo = (function (arglist__17685){
var args = cljs.core.seq(arglist__17685);
return G__17673__delegate(args);
});
G__17673.cljs$core$IFn$_invoke$arity$variadic = G__17673__delegate;
return G__17673;
})()
;
});
klipse.utils.default_permitted_symbols = (function klipse$utils$default_permitted_symbols(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["console","setTimeout","setInterval","Math","Date"], null);
});
klipse.utils.default_forbidden_symbols = (function klipse$utils$default_forbidden_symbols(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["document","XMLHttpRequest","eval","window","Function"], null);
});
klipse.utils.secured_eval = false;
klipse.utils.eval_in_global_scope = eval;
klipse.utils.securize_eval_BANG__STAR_ = (function klipse$utils$securize_eval_BANG__STAR_(the_forbidden_symbols){
(klipse.utils.secured_eval = true);

var original_eval = eval;
var obj17686_17698 = window;
var obj17687_17699 = (((!((obj17686_17698 == null))))?obj17686_17698:({}));
(obj17687_17699["eval"] = (function (src){
return original_eval.call(null,["with (klipse_eval_sandbox){ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"}"].join(''));
}));


(klipse.utils.eval_in_global_scope = eval);

var obj17690_17700 = window;
var obj17691_17701 = (((!((obj17690_17700 == null))))?obj17690_17700:({}));
(obj17691_17701["klipse_unsecured_eval"] = original_eval);


var obj17694 = window;
var obj17695 = (((!((obj17694 == null))))?obj17694:({}));
(obj17695["klipse_eval_sandbox"] = cljs.core.clj__GT_js.call(null,cljs.core.zipmap.call(null,the_forbidden_symbols,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY))));

return obj17695;
});
klipse.utils.securize_eval_BANG_ = klipse.utils.runonce.call(null,klipse.utils.securize_eval_BANG__STAR_);
klipse.utils.setup_container_BANG_ = (function klipse$utils$setup_container_BANG_(container_id){
if(klipse.utils.secured_eval){
return null;
} else {
(window["klipse_container"] = document.getElementById(container_id));

return (window["klipse_container_id"] = container_id);
}
});
klipse.utils.unsecured_eval_in_global_scope = (function klipse$utils$unsecured_eval_in_global_scope(s){
return (function (){var or__5043__auto__ = (function (){var obj17702 = window;
var k17703 = "klipse_unsecured_eval";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj17702,k17703)){
return (obj17702[k17703]);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return eval;
}
})().call(null,s);
});
klipse.utils.load_script = (function klipse$utils$load_script(var_args){
var args__5772__auto__ = [];
var len__5766__auto___17757 = arguments.length;
var i__5767__auto___17758 = (0);
while(true){
if((i__5767__auto___17758 < len__5766__auto___17757)){
args__5772__auto__.push((arguments[i__5767__auto___17758]));

var G__17759 = (i__5767__auto___17758 + (1));
i__5767__auto___17758 = G__17759;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return klipse.utils.load_script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(klipse.utils.load_script.cljs$core$IFn$_invoke$arity$variadic = (function (script,p__17706){
var map__17707 = p__17706;
var map__17707__$1 = cljs.core.__destructure_map.call(null,map__17707);
var secured_eval_QMARK_ = cljs.core.get.call(null,map__17707__$1,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),false);
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_17739){
var state_val_17740 = (state_17739[(1)]);
if((state_val_17740 === (1))){
var inst_17708 = console.info("loading:",script);
var inst_17710 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_17711 = [false];
var inst_17712 = cljs.core.PersistentHashMap.fromArrays(inst_17710,inst_17711);
var inst_17713 = cljs_http.client.get.call(null,script,inst_17712);
var state_17739__$1 = (function (){var statearr_17741 = state_17739;
(statearr_17741[(7)] = inst_17708);

return statearr_17741;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17739__$1,(2),inst_17713);
} else {
if((state_val_17740 === (2))){
var inst_17717 = (state_17739[(8)]);
var inst_17715 = (state_17739[(2)]);
var inst_17716 = cljs.core.__destructure_map.call(null,inst_17715);
var inst_17717__$1 = cljs.core.get.call(null,inst_17716,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_17718 = cljs.core.get.call(null,inst_17716,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_17719 = cljs.core._EQ_.call(null,(200),inst_17717__$1);
var state_17739__$1 = (function (){var statearr_17742 = state_17739;
(statearr_17742[(8)] = inst_17717__$1);

(statearr_17742[(9)] = inst_17718);

return statearr_17742;
})();
if(inst_17719){
var statearr_17743_17760 = state_17739__$1;
(statearr_17743_17760[(1)] = (3));

} else {
var statearr_17744_17761 = state_17739__$1;
(statearr_17744_17761[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (3))){
var inst_17721 = console.info("evaluating:",script);
var state_17739__$1 = (function (){var statearr_17745 = state_17739;
(statearr_17745[(10)] = inst_17721);

return statearr_17745;
})();
if(cljs.core.truth_(secured_eval_QMARK_)){
var statearr_17746_17762 = state_17739__$1;
(statearr_17746_17762[(1)] = (6));

} else {
var statearr_17747_17763 = state_17739__$1;
(statearr_17747_17763[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (4))){
var inst_17717 = (state_17739[(8)]);
var inst_17733 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17734 = [inst_17717,script];
var inst_17735 = (new cljs.core.PersistentVector(null,2,(5),inst_17733,inst_17734,null));
var state_17739__$1 = state_17739;
var statearr_17748_17764 = state_17739__$1;
(statearr_17748_17764[(2)] = inst_17735);

(statearr_17748_17764[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (5))){
var inst_17737 = (state_17739[(2)]);
var state_17739__$1 = state_17739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17739__$1,inst_17737);
} else {
if((state_val_17740 === (6))){
var inst_17718 = (state_17739[(9)]);
var inst_17723 = klipse.utils.eval_in_global_scope.call(null,inst_17718);
var state_17739__$1 = state_17739;
var statearr_17749_17765 = state_17739__$1;
(statearr_17749_17765[(2)] = inst_17723);

(statearr_17749_17765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (7))){
var inst_17718 = (state_17739[(9)]);
var inst_17725 = klipse.utils.unsecured_eval_in_global_scope.call(null,inst_17718);
var state_17739__$1 = state_17739;
var statearr_17750_17766 = state_17739__$1;
(statearr_17750_17766[(2)] = inst_17725);

(statearr_17750_17766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17740 === (8))){
var inst_17727 = (state_17739[(2)]);
var inst_17728 = console.info("evaluation done:",script);
var inst_17729 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17730 = [new cljs.core.Keyword(null,"ok","ok",967785236),script];
var inst_17731 = (new cljs.core.PersistentVector(null,2,(5),inst_17729,inst_17730,null));
var state_17739__$1 = (function (){var statearr_17751 = state_17739;
(statearr_17751[(11)] = inst_17728);

(statearr_17751[(12)] = inst_17727);

return statearr_17751;
})();
var statearr_17752_17767 = state_17739__$1;
(statearr_17752_17767[(2)] = inst_17731);

(statearr_17752_17767[(1)] = (5));


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
var klipse$utils$state_machine__13608__auto__ = null;
var klipse$utils$state_machine__13608__auto____0 = (function (){
var statearr_17753 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17753[(0)] = klipse$utils$state_machine__13608__auto__);

(statearr_17753[(1)] = (1));

return statearr_17753;
});
var klipse$utils$state_machine__13608__auto____1 = (function (state_17739){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_17739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e17754){if((e17754 instanceof Object)){
var ex__13611__auto__ = e17754;
var statearr_17755_17768 = state_17739;
(statearr_17755_17768[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17769 = state_17739;
state_17739 = G__17769;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$utils$state_machine__13608__auto__ = function(state_17739){
switch(arguments.length){
case 0:
return klipse$utils$state_machine__13608__auto____0.call(this);
case 1:
return klipse$utils$state_machine__13608__auto____1.call(this,state_17739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$state_machine__13608__auto____0;
klipse$utils$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$state_machine__13608__auto____1;
return klipse$utils$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_17756 = f__13705__auto__.call(null);
(statearr_17756[(6)] = c__13704__auto__);

return statearr_17756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
}));

(klipse.utils.load_script.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(klipse.utils.load_script.cljs$lang$applyTo = (function (seq17704){
var G__17705 = cljs.core.first.call(null,seq17704);
var seq17704__$1 = cljs.core.next.call(null,seq17704);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17705,seq17704__$1);
}));

klipse.utils.load_script_mem = klipse.utils.memoize_async.call(null,klipse.utils.load_script);
klipse.utils.load_scripts = (function klipse$utils$load_scripts(var_args){
var args__5772__auto__ = [];
var len__5766__auto___17827 = arguments.length;
var i__5767__auto___17828 = (0);
while(true){
if((i__5767__auto___17828 < len__5766__auto___17827)){
args__5772__auto__.push((arguments[i__5767__auto___17828]));

var G__17829 = (i__5767__auto___17828 + (1));
i__5767__auto___17828 = G__17829;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return klipse.utils.load_scripts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(klipse.utils.load_scripts.cljs$core$IFn$_invoke$arity$variadic = (function (scripts,p__17772){
var map__17773 = p__17772;
var map__17773__$1 = cljs.core.__destructure_map.call(null,map__17773);
var secured_eval_QMARK_ = cljs.core.get.call(null,map__17773__$1,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),false);
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_17807){
var state_val_17808 = (state_17807[(1)]);
if((state_val_17808 === (7))){
var inst_17786 = (state_17807[(7)]);
var inst_17785 = (state_17807[(2)]);
var inst_17786__$1 = cljs.core.nth.call(null,inst_17785,(0),null);
var inst_17787 = cljs.core.nth.call(null,inst_17785,(1),null);
var inst_17788 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_17786__$1);
var state_17807__$1 = (function (){var statearr_17809 = state_17807;
(statearr_17809[(8)] = inst_17787);

(statearr_17809[(7)] = inst_17786__$1);

return statearr_17809;
})();
if(inst_17788){
var statearr_17810_17830 = state_17807__$1;
(statearr_17810_17830[(1)] = (8));

} else {
var statearr_17811_17831 = state_17807__$1;
(statearr_17811_17831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (1))){
var inst_17774 = scripts;
var state_17807__$1 = (function (){var statearr_17812 = state_17807;
(statearr_17812[(9)] = inst_17774);

return statearr_17812;
})();
var statearr_17813_17832 = state_17807__$1;
(statearr_17813_17832[(2)] = null);

(statearr_17813_17832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (4))){
var inst_17774 = (state_17807[(9)]);
var inst_17781 = cljs.core.first.call(null,inst_17774);
var inst_17782 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_17781);
var inst_17783 = klipse.utils.load_script_mem.call(null,inst_17782,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),secured_eval_QMARK_);
var state_17807__$1 = state_17807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17807__$1,(7),inst_17783);
} else {
if((state_val_17808 === (6))){
var inst_17803 = (state_17807[(2)]);
var state_17807__$1 = state_17807;
var statearr_17814_17833 = state_17807__$1;
(statearr_17814_17833[(2)] = inst_17803);

(statearr_17814_17833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (3))){
var inst_17805 = (state_17807[(2)]);
var state_17807__$1 = state_17807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17807__$1,inst_17805);
} else {
if((state_val_17808 === (2))){
var inst_17774 = (state_17807[(9)]);
var inst_17776 = cljs.core.seq.call(null,inst_17774);
var state_17807__$1 = state_17807;
if(inst_17776){
var statearr_17815_17834 = state_17807__$1;
(statearr_17815_17834[(1)] = (4));

} else {
var statearr_17816_17835 = state_17807__$1;
(statearr_17816_17835[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (9))){
var state_17807__$1 = state_17807;
var statearr_17817_17836 = state_17807__$1;
(statearr_17817_17836[(2)] = null);

(statearr_17817_17836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (5))){
var inst_17799 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17800 = [new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_17801 = (new cljs.core.PersistentVector(null,1,(5),inst_17799,inst_17800,null));
var state_17807__$1 = state_17807;
var statearr_17818_17837 = state_17807__$1;
(statearr_17818_17837[(2)] = inst_17801);

(statearr_17818_17837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (10))){
var inst_17787 = (state_17807[(8)]);
var inst_17786 = (state_17807[(7)]);
var inst_17794 = (state_17807[(2)]);
var inst_17795 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17796 = [inst_17786,inst_17787];
var inst_17797 = (new cljs.core.PersistentVector(null,2,(5),inst_17795,inst_17796,null));
var state_17807__$1 = (function (){var statearr_17819 = state_17807;
(statearr_17819[(10)] = inst_17794);

return statearr_17819;
})();
var statearr_17820_17838 = state_17807__$1;
(statearr_17820_17838[(2)] = inst_17797);

(statearr_17820_17838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17808 === (8))){
var inst_17774 = (state_17807[(9)]);
var inst_17790 = cljs.core.rest.call(null,inst_17774);
var inst_17774__$1 = inst_17790;
var state_17807__$1 = (function (){var statearr_17821 = state_17807;
(statearr_17821[(9)] = inst_17774__$1);

return statearr_17821;
})();
var statearr_17822_17839 = state_17807__$1;
(statearr_17822_17839[(2)] = null);

(statearr_17822_17839[(1)] = (2));


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
});
return (function() {
var klipse$utils$state_machine__13608__auto__ = null;
var klipse$utils$state_machine__13608__auto____0 = (function (){
var statearr_17823 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17823[(0)] = klipse$utils$state_machine__13608__auto__);

(statearr_17823[(1)] = (1));

return statearr_17823;
});
var klipse$utils$state_machine__13608__auto____1 = (function (state_17807){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_17807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e17824){if((e17824 instanceof Object)){
var ex__13611__auto__ = e17824;
var statearr_17825_17840 = state_17807;
(statearr_17825_17840[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17841 = state_17807;
state_17807 = G__17841;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$utils$state_machine__13608__auto__ = function(state_17807){
switch(arguments.length){
case 0:
return klipse$utils$state_machine__13608__auto____0.call(this);
case 1:
return klipse$utils$state_machine__13608__auto____1.call(this,state_17807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$state_machine__13608__auto____0;
klipse$utils$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$state_machine__13608__auto____1;
return klipse$utils$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_17826 = f__13705__auto__.call(null);
(statearr_17826[(6)] = c__13704__auto__);

return statearr_17826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
}));

(klipse.utils.load_scripts.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(klipse.utils.load_scripts.cljs$lang$applyTo = (function (seq17770){
var G__17771 = cljs.core.first.call(null,seq17770);
var seq17770__$1 = cljs.core.next.call(null,seq17770);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17771,seq17770__$1);
}));

klipse.utils.load_scripts_mem = klipse.utils.memoize_async.call(null,klipse.utils.load_scripts);
klipse.utils.verbose_QMARK_ = (function klipse$utils$verbose_QMARK_(){
return cljs.core.boolean$.call(null,cljs.reader.read_string.call(null,(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "false";
}
})()));
});
klipse.utils.klipse_settings_STAR_ = (function klipse$utils$klipse_settings_STAR_(){
var w = (((typeof window !== 'undefined'))?window:({}));
return cljs.core.js__GT_clj.call(null,(w["klipse_settings"]),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
klipse.utils.klipse_settings = cljs.core.memoize.call(null,klipse.utils.klipse_settings_STAR_);
klipse.utils.add_script_tag_BANG_ = (function klipse$utils$add_script_tag_BANG_(url){
var c = cljs.core.async.chan.call(null);
var node = document.createElement("script");
var body = (document["body"]);
(node["src"] = url);

(node["onerror"] = (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),url], null));
}));

(node["onload"] = (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),url], null));
}));

(node["type"] = "text/javascript");

var obj__17203__auto___17844 = body;
var f__17204__auto___17845 = (function (){var obj17842 = obj__17203__auto___17844;
var k17843 = "appendChild";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj17842,k17843)){
return (obj17842[k17843]);
} else {
return null;
}
})();
f__17204__auto___17845.call(obj__17203__auto___17844,node);

return c;
});
klipse.utils.add_script_tag_once_BANG_ = klipse.utils.runonce.call(null,klipse.utils.add_script_tag_BANG_);

//# sourceMappingURL=utils.js.map

// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse_clj.lang.clojure.guard');
goog.require('cljs.core');
goog.require('cljs.analyzer');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.core.async');
/**
 * each time the watchdog has a chance to run, this var is set with the current time
 */
klipse_clj.lang.clojure.guard._STAR_watchdog_tick_STAR_ = (0);
klipse_clj.lang.clojure.guard.min_max_eval_duration = (3000);
/**
 * The number of msec for the watchdog period.
 *          This value has to be much lower than min-max-eval-duration.
 */
klipse_clj.lang.clojure.guard.watchdog_period = (klipse_clj.lang.clojure.guard.min_max_eval_duration / (10));
klipse_clj.lang.clojure.guard.runonce = (function klipse_clj$lang$clojure$guard$runonce(f){
var ran = cljs.core.atom.call(null,false);
return (function() { 
var G__26082__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__26082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26083__i = 0, G__26083__a = new Array(arguments.length -  0);
while (G__26083__i < G__26083__a.length) {G__26083__a[G__26083__i] = arguments[G__26083__i + 0]; ++G__26083__i;}
  args = new cljs.core.IndexedSeq(G__26083__a,0,null);
} 
return G__26082__delegate.call(this,args);};
G__26082.cljs$lang$maxFixedArity = 0;
G__26082.cljs$lang$applyTo = (function (arglist__26084){
var args = cljs.core.seq(arglist__26084);
return G__26082__delegate(args);
});
G__26082.cljs$core$IFn$_invoke$arity$variadic = G__26082__delegate;
return G__26082;
})()
;
});
klipse_clj.lang.clojure.guard.tick = (function klipse_clj$lang$clojure$guard$tick(){
return (klipse_clj.lang.clojure.guard._STAR_watchdog_tick_STAR_ = cljs.core.system_time.call(null));
});
/**
 * reset the *watchdog-tick* to the current time once in a while
 */
klipse_clj.lang.clojure.guard.run_watchdog_STAR_ = (function klipse_clj$lang$clojure$guard$run_watchdog_STAR_(){
klipse_clj.lang.clojure.guard.tick.call(null);

var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_26094){
var state_val_26095 = (state_26094[(1)]);
if((state_val_26095 === (1))){
var state_26094__$1 = state_26094;
var statearr_26096_26103 = state_26094__$1;
(statearr_26096_26103[(2)] = null);

(statearr_26096_26103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26095 === (2))){
var inst_26086 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_26094__$1 = state_26094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26094__$1,(4),inst_26086);
} else {
if((state_val_26095 === (3))){
var inst_26092 = (state_26094[(2)]);
var state_26094__$1 = state_26094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26094__$1,inst_26092);
} else {
if((state_val_26095 === (4))){
var inst_26088 = (state_26094[(2)]);
var inst_26089 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_26094__$1 = (function (){var statearr_26097 = state_26094;
(statearr_26097[(7)] = inst_26089);

(statearr_26097[(8)] = inst_26088);

return statearr_26097;
})();
var statearr_26098_26104 = state_26094__$1;
(statearr_26098_26104[(2)] = null);

(statearr_26098_26104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto____0 = (function (){
var statearr_26099 = [null,null,null,null,null,null,null,null,null];
(statearr_26099[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto__);

(statearr_26099[(1)] = (1));

return statearr_26099;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto____1 = (function (state_26094){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_26094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e26100){if((e26100 instanceof Object)){
var ex__13611__auto__ = e26100;
var statearr_26101_26105 = state_26094;
(statearr_26101_26105[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26106 = state_26094;
state_26094 = G__26106;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto__ = function(state_26094){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto____1.call(this,state_26094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_26102 = f__13705__auto__.call(null);
(statearr_26102[(6)] = c__13704__auto__);

return statearr_26102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse_clj.lang.clojure.guard.run_watchdog_once = klipse_clj.lang.clojure.guard.runonce.call(null,klipse_clj.lang.clojure.guard.run_watchdog_STAR_);
klipse_clj.lang.clojure.guard.watchdog = (function klipse_clj$lang$clojure$guard$watchdog(){
klipse_clj.lang.clojure.guard.tick.call(null);

return klipse_clj.lang.clojure.guard.run_watchdog_once.call(null);
});
klipse_clj.lang.clojure.guard.guard = (function klipse_clj$lang$clojure$guard$guard(max_eval_duration){
if(((cljs.core.system_time.call(null) - klipse_clj.lang.clojure.guard._STAR_watchdog_tick_STAR_) > max_eval_duration)){
if(cljs.core.truth_(confirm(["A KLIPSE snippet has been running for more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration)," milliseconds. This is often because of a long-running computation or infinite loop. Would you like to interrupt the snippet? \n OK to interrupt the evaluation.\n Cancel to continue."].join('')))){
throw "Infinite Loop";
} else {
}

return (klipse_clj.lang.clojure.guard._STAR_watchdog_tick_STAR_ = cljs.core.system_time.call(null));
} else {
return null;
}
});
goog.exportSymbol('klipse_clj.lang.clojure.guard.guard', klipse_clj.lang.clojure.guard.guard);
/**
 * same as cljs.compiler/emits with insertion of a `guard()` call before if and recur (emitted as continue) statement.
 * 
 *   Limitations:
 *   1. It doesn't prevent infinite loop in imported code e.g. (reduce + (range)
 *   
 */
klipse_clj.lang.clojure.guard.my_emits = (function klipse_clj$lang$clojure$guard$my_emits(var_args){
var args__5772__auto__ = [];
var len__5766__auto___26114 = arguments.length;
var i__5767__auto___26115 = (0);
while(true){
if((i__5767__auto___26115 < len__5766__auto___26114)){
args__5772__auto__.push((arguments[i__5767__auto___26115]));

var G__26116 = (i__5767__auto___26115 + (1));
i__5767__auto___26115 = G__26116;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(klipse_clj.lang.clojure.guard.my_emits.cljs$core$IFn$_invoke$arity$variadic = (function (max_eval_duration,xs){
if(cljs.core.truth_((function (){var and__5041__auto__ = typeof cljs.core.first.call(null,xs) === 'string';
if(and__5041__auto__){
return cljs.core.re_matches.call(null,/^(if|continue).*/,cljs.core.first.call(null,xs));
} else {
return and__5041__auto__;
}
})())){
cljs.core.print.call(null,["klipse_clj.lang.clojure.guard.guard(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_eval_duration),");"].join(''));
} else {
}

var seq__26110_26117 = cljs.core.seq.call(null,xs);
var chunk__26111_26118 = null;
var count__26112_26119 = (0);
var i__26113_26120 = (0);
while(true){
if((i__26113_26120 < count__26112_26119)){
var x_26121 = cljs.core._nth.call(null,chunk__26111_26118,i__26113_26120);
if((x_26121 == null)){
} else {
if(cljs.core.truth_(cljs.analyzer.cljs_map_QMARK_.call(null,x_26121))){
cljs.compiler.emit.call(null,x_26121);
} else {
if(cljs.core.truth_(cljs.analyzer.cljs_seq_QMARK_.call(null,x_26121))){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_26121);
} else {
if(goog.isFunction(x_26121)){
x_26121.call(null);
} else {
var s_26122 = cljs.core.print_str.call(null,x_26121);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__26110_26117,chunk__26111_26118,count__26112_26119,i__26113_26120,s_26122,x_26121){
return (function (p1__26107_SHARP_){
return (p1__26107_SHARP_ + ((s_26122).length));
});})(seq__26110_26117,chunk__26111_26118,count__26112_26119,i__26113_26120,s_26122,x_26121))
);
}

cljs.core.print.call(null,s_26122);

}
}
}
}


var G__26123 = seq__26110_26117;
var G__26124 = chunk__26111_26118;
var G__26125 = count__26112_26119;
var G__26126 = (i__26113_26120 + (1));
seq__26110_26117 = G__26123;
chunk__26111_26118 = G__26124;
count__26112_26119 = G__26125;
i__26113_26120 = G__26126;
continue;
} else {
var temp__5804__auto___26127 = cljs.core.seq.call(null,seq__26110_26117);
if(temp__5804__auto___26127){
var seq__26110_26128__$1 = temp__5804__auto___26127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26110_26128__$1)){
var c__5565__auto___26129 = cljs.core.chunk_first.call(null,seq__26110_26128__$1);
var G__26130 = cljs.core.chunk_rest.call(null,seq__26110_26128__$1);
var G__26131 = c__5565__auto___26129;
var G__26132 = cljs.core.count.call(null,c__5565__auto___26129);
var G__26133 = (0);
seq__26110_26117 = G__26130;
chunk__26111_26118 = G__26131;
count__26112_26119 = G__26132;
i__26113_26120 = G__26133;
continue;
} else {
var x_26134 = cljs.core.first.call(null,seq__26110_26128__$1);
if((x_26134 == null)){
} else {
if(cljs.core.truth_(cljs.analyzer.cljs_map_QMARK_.call(null,x_26134))){
cljs.compiler.emit.call(null,x_26134);
} else {
if(cljs.core.truth_(cljs.analyzer.cljs_seq_QMARK_.call(null,x_26134))){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_26134);
} else {
if(goog.isFunction(x_26134)){
x_26134.call(null);
} else {
var s_26135 = cljs.core.print_str.call(null,x_26134);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__26110_26117,chunk__26111_26118,count__26112_26119,i__26113_26120,s_26135,x_26134,seq__26110_26128__$1,temp__5804__auto___26127){
return (function (p1__26107_SHARP_){
return (p1__26107_SHARP_ + ((s_26135).length));
});})(seq__26110_26117,chunk__26111_26118,count__26112_26119,i__26113_26120,s_26135,x_26134,seq__26110_26128__$1,temp__5804__auto___26127))
);
}

cljs.core.print.call(null,s_26135);

}
}
}
}


var G__26136 = cljs.core.next.call(null,seq__26110_26128__$1);
var G__26137 = null;
var G__26138 = (0);
var G__26139 = (0);
seq__26110_26117 = G__26136;
chunk__26111_26118 = G__26137;
count__26112_26119 = G__26138;
i__26113_26120 = G__26139;
continue;
}
} else {
}
}
break;
}

return null;
}));

(klipse_clj.lang.clojure.guard.my_emits.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq26108){
var G__26109 = cljs.core.first.call(null,seq26108);
var seq26108__$1 = cljs.core.next.call(null,seq26108);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26109,seq26108__$1);
}));


//# sourceMappingURL=guard.js.map

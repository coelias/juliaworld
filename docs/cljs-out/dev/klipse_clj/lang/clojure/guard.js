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
var G__28768__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__28768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28769__i = 0, G__28769__a = new Array(arguments.length -  0);
while (G__28769__i < G__28769__a.length) {G__28769__a[G__28769__i] = arguments[G__28769__i + 0]; ++G__28769__i;}
  args = new cljs.core.IndexedSeq(G__28769__a,0,null);
} 
return G__28768__delegate.call(this,args);};
G__28768.cljs$lang$maxFixedArity = 0;
G__28768.cljs$lang$applyTo = (function (arglist__28770){
var args = cljs.core.seq(arglist__28770);
return G__28768__delegate(args);
});
G__28768.cljs$core$IFn$_invoke$arity$variadic = G__28768__delegate;
return G__28768;
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
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28780){
var state_val_28781 = (state_28780[(1)]);
if((state_val_28781 === (1))){
var state_28780__$1 = state_28780;
var statearr_28782_28789 = state_28780__$1;
(statearr_28782_28789[(2)] = null);

(statearr_28782_28789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28781 === (2))){
var inst_28772 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_28780__$1 = state_28780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28780__$1,(4),inst_28772);
} else {
if((state_val_28781 === (3))){
var inst_28778 = (state_28780[(2)]);
var state_28780__$1 = state_28780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28780__$1,inst_28778);
} else {
if((state_val_28781 === (4))){
var inst_28774 = (state_28780[(2)]);
var inst_28775 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_28780__$1 = (function (){var statearr_28783 = state_28780;
(statearr_28783[(7)] = inst_28775);

(statearr_28783[(8)] = inst_28774);

return statearr_28783;
})();
var statearr_28784_28790 = state_28780__$1;
(statearr_28784_28790[(2)] = null);

(statearr_28784_28790[(1)] = (2));


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
var statearr_28785 = [null,null,null,null,null,null,null,null,null];
(statearr_28785[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto__);

(statearr_28785[(1)] = (1));

return statearr_28785;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto____1 = (function (state_28780){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28786){if((e28786 instanceof Object)){
var ex__13611__auto__ = e28786;
var statearr_28787_28791 = state_28780;
(statearr_28787_28791[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28792 = state_28780;
state_28780 = G__28792;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto__ = function(state_28780){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto____1.call(this,state_28780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28788 = f__13705__auto__.call(null);
(statearr_28788[(6)] = c__13704__auto__);

return statearr_28788;
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
var len__5766__auto___28800 = arguments.length;
var i__5767__auto___28801 = (0);
while(true){
if((i__5767__auto___28801 < len__5766__auto___28800)){
args__5772__auto__.push((arguments[i__5767__auto___28801]));

var G__28802 = (i__5767__auto___28801 + (1));
i__5767__auto___28801 = G__28802;
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

var seq__28796_28803 = cljs.core.seq.call(null,xs);
var chunk__28797_28804 = null;
var count__28798_28805 = (0);
var i__28799_28806 = (0);
while(true){
if((i__28799_28806 < count__28798_28805)){
var x_28807 = cljs.core._nth.call(null,chunk__28797_28804,i__28799_28806);
if((x_28807 == null)){
} else {
if(cljs.core.truth_(cljs.analyzer.cljs_map_QMARK_.call(null,x_28807))){
cljs.compiler.emit.call(null,x_28807);
} else {
if(cljs.core.truth_(cljs.analyzer.cljs_seq_QMARK_.call(null,x_28807))){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_28807);
} else {
if(goog.isFunction(x_28807)){
x_28807.call(null);
} else {
var s_28808 = cljs.core.print_str.call(null,x_28807);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__28796_28803,chunk__28797_28804,count__28798_28805,i__28799_28806,s_28808,x_28807){
return (function (p1__28793_SHARP_){
return (p1__28793_SHARP_ + ((s_28808).length));
});})(seq__28796_28803,chunk__28797_28804,count__28798_28805,i__28799_28806,s_28808,x_28807))
);
}

cljs.core.print.call(null,s_28808);

}
}
}
}


var G__28809 = seq__28796_28803;
var G__28810 = chunk__28797_28804;
var G__28811 = count__28798_28805;
var G__28812 = (i__28799_28806 + (1));
seq__28796_28803 = G__28809;
chunk__28797_28804 = G__28810;
count__28798_28805 = G__28811;
i__28799_28806 = G__28812;
continue;
} else {
var temp__5804__auto___28813 = cljs.core.seq.call(null,seq__28796_28803);
if(temp__5804__auto___28813){
var seq__28796_28814__$1 = temp__5804__auto___28813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28796_28814__$1)){
var c__5565__auto___28815 = cljs.core.chunk_first.call(null,seq__28796_28814__$1);
var G__28816 = cljs.core.chunk_rest.call(null,seq__28796_28814__$1);
var G__28817 = c__5565__auto___28815;
var G__28818 = cljs.core.count.call(null,c__5565__auto___28815);
var G__28819 = (0);
seq__28796_28803 = G__28816;
chunk__28797_28804 = G__28817;
count__28798_28805 = G__28818;
i__28799_28806 = G__28819;
continue;
} else {
var x_28820 = cljs.core.first.call(null,seq__28796_28814__$1);
if((x_28820 == null)){
} else {
if(cljs.core.truth_(cljs.analyzer.cljs_map_QMARK_.call(null,x_28820))){
cljs.compiler.emit.call(null,x_28820);
} else {
if(cljs.core.truth_(cljs.analyzer.cljs_seq_QMARK_.call(null,x_28820))){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_28820);
} else {
if(goog.isFunction(x_28820)){
x_28820.call(null);
} else {
var s_28821 = cljs.core.print_str.call(null,x_28820);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__28796_28803,chunk__28797_28804,count__28798_28805,i__28799_28806,s_28821,x_28820,seq__28796_28814__$1,temp__5804__auto___28813){
return (function (p1__28793_SHARP_){
return (p1__28793_SHARP_ + ((s_28821).length));
});})(seq__28796_28803,chunk__28797_28804,count__28798_28805,i__28799_28806,s_28821,x_28820,seq__28796_28814__$1,temp__5804__auto___28813))
);
}

cljs.core.print.call(null,s_28821);

}
}
}
}


var G__28822 = cljs.core.next.call(null,seq__28796_28814__$1);
var G__28823 = null;
var G__28824 = (0);
var G__28825 = (0);
seq__28796_28803 = G__28822;
chunk__28797_28804 = G__28823;
count__28798_28805 = G__28824;
i__28799_28806 = G__28825;
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
(klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq28794){
var G__28795 = cljs.core.first.call(null,seq28794);
var seq28794__$1 = cljs.core.next.call(null,seq28794);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28795,seq28794__$1);
}));


//# sourceMappingURL=guard.js.map

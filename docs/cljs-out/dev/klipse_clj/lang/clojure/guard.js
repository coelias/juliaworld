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
var G__17855__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__17855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17856__i = 0, G__17856__a = new Array(arguments.length -  0);
while (G__17856__i < G__17856__a.length) {G__17856__a[G__17856__i] = arguments[G__17856__i + 0]; ++G__17856__i;}
  args = new cljs.core.IndexedSeq(G__17856__a,0,null);
} 
return G__17855__delegate.call(this,args);};
G__17855.cljs$lang$maxFixedArity = 0;
G__17855.cljs$lang$applyTo = (function (arglist__17857){
var args = cljs.core.seq(arglist__17857);
return G__17855__delegate(args);
});
G__17855.cljs$core$IFn$_invoke$arity$variadic = G__17855__delegate;
return G__17855;
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

var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_17867){
var state_val_17868 = (state_17867[(1)]);
if((state_val_17868 === (1))){
var state_17867__$1 = state_17867;
var statearr_17869_17876 = state_17867__$1;
(statearr_17869_17876[(2)] = null);

(statearr_17869_17876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17868 === (2))){
var inst_17859 = cljs.core.async.timeout.call(null,klipse_clj.lang.clojure.guard.watchdog_period);
var state_17867__$1 = state_17867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17867__$1,(4),inst_17859);
} else {
if((state_val_17868 === (3))){
var inst_17865 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17867__$1,inst_17865);
} else {
if((state_val_17868 === (4))){
var inst_17861 = (state_17867[(2)]);
var inst_17862 = klipse_clj.lang.clojure.guard.tick.call(null);
var state_17867__$1 = (function (){var statearr_17870 = state_17867;
(statearr_17870[(7)] = inst_17862);

(statearr_17870[(8)] = inst_17861);

return statearr_17870;
})();
var statearr_17871_17877 = state_17867__$1;
(statearr_17871_17877[(2)] = null);

(statearr_17871_17877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15523__auto____0 = (function (){
var statearr_17872 = [null,null,null,null,null,null,null,null,null];
(statearr_17872[(0)] = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15523__auto__);

(statearr_17872[(1)] = (1));

return statearr_17872;
});
var klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15523__auto____1 = (function (state_17867){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_17867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e17873){if((e17873 instanceof Object)){
var ex__15526__auto__ = e17873;
var statearr_17874_17878 = state_17867;
(statearr_17874_17878[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17879 = state_17867;
state_17867 = G__17879;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15523__auto__ = function(state_17867){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15523__auto____1.call(this,state_17867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$guard$run_watchdog_STAR__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_17875 = f__15620__auto__.call(null);
(statearr_17875[(6)] = c__15619__auto__);

return statearr_17875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
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
var len__5766__auto___17887 = arguments.length;
var i__5767__auto___17888 = (0);
while(true){
if((i__5767__auto___17888 < len__5766__auto___17887)){
args__5772__auto__.push((arguments[i__5767__auto___17888]));

var G__17889 = (i__5767__auto___17888 + (1));
i__5767__auto___17888 = G__17889;
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

var seq__17883_17890 = cljs.core.seq.call(null,xs);
var chunk__17884_17891 = null;
var count__17885_17892 = (0);
var i__17886_17893 = (0);
while(true){
if((i__17886_17893 < count__17885_17892)){
var x_17894 = cljs.core._nth.call(null,chunk__17884_17891,i__17886_17893);
if((x_17894 == null)){
} else {
if(cljs.core.truth_(cljs.analyzer.cljs_map_QMARK_.call(null,x_17894))){
cljs.compiler.emit.call(null,x_17894);
} else {
if(cljs.core.truth_(cljs.analyzer.cljs_seq_QMARK_.call(null,x_17894))){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_17894);
} else {
if(goog.isFunction(x_17894)){
x_17894.call(null);
} else {
var s_17895 = cljs.core.print_str.call(null,x_17894);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__17883_17890,chunk__17884_17891,count__17885_17892,i__17886_17893,s_17895,x_17894){
return (function (p1__17880_SHARP_){
return (p1__17880_SHARP_ + ((s_17895).length));
});})(seq__17883_17890,chunk__17884_17891,count__17885_17892,i__17886_17893,s_17895,x_17894))
);
}

cljs.core.print.call(null,s_17895);

}
}
}
}


var G__17896 = seq__17883_17890;
var G__17897 = chunk__17884_17891;
var G__17898 = count__17885_17892;
var G__17899 = (i__17886_17893 + (1));
seq__17883_17890 = G__17896;
chunk__17884_17891 = G__17897;
count__17885_17892 = G__17898;
i__17886_17893 = G__17899;
continue;
} else {
var temp__5804__auto___17900 = cljs.core.seq.call(null,seq__17883_17890);
if(temp__5804__auto___17900){
var seq__17883_17901__$1 = temp__5804__auto___17900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17883_17901__$1)){
var c__5565__auto___17902 = cljs.core.chunk_first.call(null,seq__17883_17901__$1);
var G__17903 = cljs.core.chunk_rest.call(null,seq__17883_17901__$1);
var G__17904 = c__5565__auto___17902;
var G__17905 = cljs.core.count.call(null,c__5565__auto___17902);
var G__17906 = (0);
seq__17883_17890 = G__17903;
chunk__17884_17891 = G__17904;
count__17885_17892 = G__17905;
i__17886_17893 = G__17906;
continue;
} else {
var x_17907 = cljs.core.first.call(null,seq__17883_17901__$1);
if((x_17907 == null)){
} else {
if(cljs.core.truth_(cljs.analyzer.cljs_map_QMARK_.call(null,x_17907))){
cljs.compiler.emit.call(null,x_17907);
} else {
if(cljs.core.truth_(cljs.analyzer.cljs_seq_QMARK_.call(null,x_17907))){
cljs.core.apply.call(null,klipse_clj.lang.clojure.guard.my_emits,max_eval_duration,x_17907);
} else {
if(goog.isFunction(x_17907)){
x_17907.call(null);
} else {
var s_17908 = cljs.core.print_str.call(null,x_17907);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__17883_17890,chunk__17884_17891,count__17885_17892,i__17886_17893,s_17908,x_17907,seq__17883_17901__$1,temp__5804__auto___17900){
return (function (p1__17880_SHARP_){
return (p1__17880_SHARP_ + ((s_17908).length));
});})(seq__17883_17890,chunk__17884_17891,count__17885_17892,i__17886_17893,s_17908,x_17907,seq__17883_17901__$1,temp__5804__auto___17900))
);
}

cljs.core.print.call(null,s_17908);

}
}
}
}


var G__17909 = cljs.core.next.call(null,seq__17883_17901__$1);
var G__17910 = null;
var G__17911 = (0);
var G__17912 = (0);
seq__17883_17890 = G__17909;
chunk__17884_17891 = G__17910;
count__17885_17892 = G__17911;
i__17886_17893 = G__17912;
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
(klipse_clj.lang.clojure.guard.my_emits.cljs$lang$applyTo = (function (seq17881){
var G__17882 = cljs.core.first.call(null,seq17881);
var seq17881__$1 = cljs.core.next.call(null,seq17881);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17882,seq17881__$1);
}));


//# sourceMappingURL=guard.js.map

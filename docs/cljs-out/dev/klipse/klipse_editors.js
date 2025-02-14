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
var len__5766__auto___29678 = arguments.length;
var i__5767__auto___29679 = (0);
while(true){
if((i__5767__auto___29679 < len__5766__auto___29678)){
args__5772__auto__.push((arguments[i__5767__auto___29679]));

var G__29680 = (i__5767__auto___29679 + (1));
i__5767__auto___29679 = G__29680;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(klipse.klipse_editors.create_state.cljs$core$IFn$_invoke$arity$variadic = (function (p__29676){
var map__29677 = p__29676;
var map__29677__$1 = cljs.core.__destructure_map.call(null,map__29677);
var result_element = cljs.core.get.call(null,map__29677__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__29677__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var editor_args = cljs.core.get.call(null,map__29677__$1,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049));
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598),(0),new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"container-id","container-id",1274665684),(cljs.core.truth_(container)?(container["id"]):null),new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element-id","result-element-id",-1916360024),(cljs.core.truth_(result_element)?(result_element["id"]):null),new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element], null));
}));

(klipse.klipse_editors.create_state.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(klipse.klipse_editors.create_state.cljs$lang$applyTo = (function (seq29675){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29675));
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
klipse.klipse_editors.eval_in_editor = (function klipse$klipse_editors$eval_in_editor(eval_fn,src_code,unsafe_setter,p__29681,state){
var map__29682 = p__29681;
var map__29682__$1 = cljs.core.__destructure_map.call(null,map__29682);
var loop_msec = cljs.core.get.call(null,map__29682__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var preamble = cljs.core.get.call(null,map__29682__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("Evaluating: ",src_code);
} else {
}

var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29799){
var state_val_29800 = (state_29799[(1)]);
if((state_val_29800 === (7))){
var inst_29694 = (state_29799[(7)]);
var inst_29696 = (state_29799[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29799,(6),new cljs.core.Keyword(null,"default","default",-1987822328),null,(5));
var inst_29693 = cljs.core.deref.call(null,state);
var inst_29694__$1 = cljs.core.__destructure_map.call(null,inst_29693);
var inst_29695 = cljs.core.get.call(null,inst_29694__$1,new cljs.core.Keyword(null,"cmd-chan","cmd-chan",-1229050306));
var inst_29696__$1 = cljs.core.get.call(null,inst_29694__$1,new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598));
var inst_29697 = (inst_29696__$1 === (0));
var state_29799__$1 = (function (){var statearr_29801 = state_29799;
(statearr_29801[(7)] = inst_29694__$1);

(statearr_29801[(8)] = inst_29696__$1);

(statearr_29801[(9)] = inst_29695);

return statearr_29801;
})();
if(cljs.core.truth_(inst_29697)){
var statearr_29802_29874 = state_29799__$1;
(statearr_29802_29874[(1)] = (8));

} else {
var statearr_29803_29875 = state_29799__$1;
(statearr_29803_29875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (1))){
var state_29799__$1 = state_29799;
if(cljs.core.truth_(unsafe_setter)){
var statearr_29804_29876 = state_29799__$1;
(statearr_29804_29876[(1)] = (2));

} else {
var statearr_29805_29877 = state_29799__$1;
(statearr_29805_29877[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (4))){
var inst_29686 = (state_29799[(2)]);
var state_29799__$1 = (function (){var statearr_29806 = state_29799;
(statearr_29806[(10)] = inst_29686);

return statearr_29806;
})();
var statearr_29807_29878 = state_29799__$1;
(statearr_29807_29878[(2)] = null);

(statearr_29807_29878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (15))){
var inst_29717 = (state_29799[(11)]);
var inst_29694 = (state_29799[(7)]);
var inst_29709 = (state_29799[(12)]);
var inst_29696 = (state_29799[(8)]);
var inst_29695 = (state_29799[(9)]);
var inst_29686 = (state_29799[(10)]);
var inst_29711 = (state_29799[(13)]);
var inst_29753 = cljs.core.async.chan.call(null,(1));
var inst_29754 = (function (){var setter = inst_29686;
var map__29692 = inst_29694;
var cmd_chan = inst_29695;
var eval_counter = inst_29696;
var evaluation_chan = inst_29709;
var result = inst_29711;
var first_result = inst_29717;
var c__15619__auto____$1 = inst_29753;
return (function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29751){
var state_val_29752 = (state_29751[(1)]);
if((state_val_29752 === (7))){
var inst_29737 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
if(cljs.core.truth_(inst_29737)){
var statearr_29808_29879 = state_29751__$1;
(statearr_29808_29879[(1)] = (8));

} else {
var statearr_29809_29880 = state_29751__$1;
(statearr_29809_29880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (1))){
var state_29751__$1 = state_29751;
var statearr_29810_29881 = state_29751__$1;
(statearr_29810_29881[(2)] = null);

(statearr_29810_29881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (4))){
var inst_29732 = (state_29751[(7)]);
var inst_29729 = (state_29751[(2)]);
var inst_29730 = cljs.core.nth.call(null,inst_29729,(0),null);
var inst_29731 = cljs.core.nth.call(null,inst_29729,(1),null);
var inst_29732__$1 = cljs.core._EQ_.call(null,inst_29731,cmd_chan);
var state_29751__$1 = (function (){var statearr_29811 = state_29751;
(statearr_29811[(8)] = inst_29730);

(statearr_29811[(7)] = inst_29732__$1);

return statearr_29811;
})();
if(inst_29732__$1){
var statearr_29812_29882 = state_29751__$1;
(statearr_29812_29882[(1)] = (5));

} else {
var statearr_29813_29883 = state_29751__$1;
(statearr_29813_29883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (6))){
var inst_29732 = (state_29751[(7)]);
var state_29751__$1 = state_29751;
var statearr_29814_29884 = state_29751__$1;
(statearr_29814_29884[(2)] = inst_29732);

(statearr_29814_29884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (3))){
var inst_29749 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29751__$1,inst_29749);
} else {
if((state_val_29752 === (2))){
var inst_29724 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29725 = cljs.core.async.timeout.call(null,loop_msec);
var inst_29726 = [cmd_chan,inst_29725];
var inst_29727 = (new cljs.core.PersistentVector(null,2,(5),inst_29724,inst_29726,null));
var state_29751__$1 = state_29751;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29751__$1,(4),inst_29727);
} else {
if((state_val_29752 === (11))){
var inst_29743 = (state_29751[(2)]);
var inst_29744 = setter.call(null,inst_29743);
var state_29751__$1 = (function (){var statearr_29815 = state_29751;
(statearr_29815[(9)] = inst_29744);

return statearr_29815;
})();
var statearr_29816_29885 = state_29751__$1;
(statearr_29816_29885[(2)] = null);

(statearr_29816_29885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (9))){
var inst_29740 = cljs.core.deref.call(null,state);
var inst_29741 = eval_fn.call(null,src_code,inst_29740);
var state_29751__$1 = state_29751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29751__$1,(11),inst_29741);
} else {
if((state_val_29752 === (5))){
var inst_29730 = (state_29751[(8)]);
var inst_29734 = cljs.core._EQ_.call(null,inst_29730,new cljs.core.Keyword(null,"reset","reset",-800929946));
var state_29751__$1 = state_29751;
var statearr_29817_29886 = state_29751__$1;
(statearr_29817_29886[(2)] = inst_29734);

(statearr_29817_29886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (10))){
var inst_29747 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
var statearr_29818_29887 = state_29751__$1;
(statearr_29818_29887[(2)] = inst_29747);

(statearr_29818_29887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (8))){
var state_29751__$1 = state_29751;
var statearr_29819_29888 = state_29751__$1;
(statearr_29819_29888[(2)] = null);

(statearr_29819_29888[(1)] = (10));


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
var statearr_29820 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29820[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__);

(statearr_29820[(1)] = (1));

return statearr_29820;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1 = (function (state_29751){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29821){if((e29821 instanceof Object)){
var ex__15526__auto__ = e29821;
var statearr_29822_29889 = state_29751;
(statearr_29822_29889[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29890 = state_29751;
state_29751 = G__29890;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__ = function(state_29751){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1.call(this,state_29751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29823 = f__15620__auto__.call(null);
(statearr_29823[(6)] = c__15619__auto____$1);

return statearr_29823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});
})();
var inst_29755 = cljs.core.async.impl.dispatch.run.call(null,inst_29754);
var state_29799__$1 = (function (){var statearr_29824 = state_29799;
(statearr_29824[(14)] = inst_29755);

return statearr_29824;
})();
var statearr_29825_29891 = state_29799__$1;
(statearr_29825_29891[(2)] = inst_29753);

(statearr_29825_29891[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (13))){
var inst_29711 = (state_29799[(13)]);
var inst_29715 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_29711);
var state_29799__$1 = state_29799;
var statearr_29826_29892 = state_29799__$1;
(statearr_29826_29892[(2)] = inst_29715);

(statearr_29826_29892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (6))){
var inst_29686 = (state_29799[(10)]);
var inst_29687 = (state_29799[(2)]);
var inst_29688 = inst_29686.call(null,inst_29687);
var state_29799__$1 = state_29799;
var statearr_29827_29893 = state_29799__$1;
(statearr_29827_29893[(2)] = inst_29688);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29799__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (17))){
var inst_29717 = (state_29799[(11)]);
var inst_29694 = (state_29799[(7)]);
var inst_29709 = (state_29799[(12)]);
var inst_29696 = (state_29799[(8)]);
var inst_29695 = (state_29799[(9)]);
var inst_29686 = (state_29799[(10)]);
var inst_29711 = (state_29799[(13)]);
var inst_29758 = (state_29799[(2)]);
var inst_29793 = cljs.core.async.chan.call(null,(1));
var inst_29794 = (function (){var setter = inst_29686;
var map__29692 = inst_29694;
var cmd_chan = inst_29695;
var eval_counter = inst_29696;
var evaluation_chan = inst_29709;
var result = inst_29711;
var first_result = inst_29717;
var c__15619__auto____$1 = inst_29793;
return (function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29791){
var state_val_29792 = (state_29791[(1)]);
if((state_val_29792 === (7))){
var inst_29769 = (state_29791[(7)]);
var inst_29762 = (state_29791[(8)]);
var inst_29768 = (state_29791[(2)]);
var inst_29769__$1 = cljs.core.map_QMARK_.call(null,inst_29762);
var state_29791__$1 = (function (){var statearr_29828 = state_29791;
(statearr_29828[(7)] = inst_29769__$1);

(statearr_29828[(9)] = inst_29768);

return statearr_29828;
})();
if(inst_29769__$1){
var statearr_29829_29894 = state_29791__$1;
(statearr_29829_29894[(1)] = (8));

} else {
var statearr_29830_29895 = state_29791__$1;
(statearr_29830_29895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (1))){
var inst_29759 = first_result;
var state_29791__$1 = (function (){var statearr_29831 = state_29791;
(statearr_29831[(10)] = inst_29759);

return statearr_29831;
})();
var statearr_29832_29896 = state_29791__$1;
(statearr_29832_29896[(2)] = null);

(statearr_29832_29896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (4))){
var inst_29762 = (state_29791[(8)]);
var inst_29762__$1 = (state_29791[(2)]);
var inst_29763 = cljs.core.map_QMARK_.call(null,inst_29762__$1);
var state_29791__$1 = (function (){var statearr_29833 = state_29791;
(statearr_29833[(8)] = inst_29762__$1);

return statearr_29833;
})();
if(inst_29763){
var statearr_29834_29897 = state_29791__$1;
(statearr_29834_29897[(1)] = (5));

} else {
var statearr_29835_29898 = state_29791__$1;
(statearr_29835_29898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (15))){
var state_29791__$1 = state_29791;
var statearr_29836_29899 = state_29791__$1;
(statearr_29836_29899[(2)] = null);

(statearr_29836_29899[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (13))){
var inst_29768 = (state_29791[(9)]);
var inst_29778 = (state_29791[(2)]);
var inst_29779 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29778),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29768)].join('');
var inst_29780 = (inst_29768 == null);
var inst_29781 = cljs.core.not.call(null,inst_29780);
var state_29791__$1 = (function (){var statearr_29837 = state_29791;
(statearr_29837[(11)] = inst_29779);

return statearr_29837;
})();
if(inst_29781){
var statearr_29838_29900 = state_29791__$1;
(statearr_29838_29900[(1)] = (14));

} else {
var statearr_29839_29901 = state_29791__$1;
(statearr_29839_29901[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (6))){
var inst_29762 = (state_29791[(8)]);
var state_29791__$1 = state_29791;
var statearr_29840_29902 = state_29791__$1;
(statearr_29840_29902[(2)] = inst_29762);

(statearr_29840_29902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (3))){
var inst_29789 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29791__$1,inst_29789);
} else {
if((state_val_29792 === (12))){
var inst_29759 = (state_29791[(10)]);
var state_29791__$1 = state_29791;
var statearr_29841_29903 = state_29791__$1;
(statearr_29841_29903[(2)] = inst_29759);

(statearr_29841_29903[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (2))){
var state_29791__$1 = state_29791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29791__$1,(4),evaluation_chan);
} else {
if((state_val_29792 === (11))){
var state_29791__$1 = state_29791;
var statearr_29842_29904 = state_29791__$1;
(statearr_29842_29904[(2)] = null);

(statearr_29842_29904[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (9))){
var inst_29769 = (state_29791[(7)]);
var state_29791__$1 = state_29791;
var statearr_29843_29905 = state_29791__$1;
(statearr_29843_29905[(2)] = inst_29769);

(statearr_29843_29905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (5))){
var inst_29762 = (state_29791[(8)]);
var inst_29765 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_29762);
var state_29791__$1 = state_29791;
var statearr_29844_29906 = state_29791__$1;
(statearr_29844_29906[(2)] = inst_29765);

(statearr_29844_29906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (14))){
var inst_29779 = (state_29791[(11)]);
var inst_29783 = setter.call(null,inst_29779);
var inst_29759 = inst_29779;
var state_29791__$1 = (function (){var statearr_29845 = state_29791;
(statearr_29845[(10)] = inst_29759);

(statearr_29845[(12)] = inst_29783);

return statearr_29845;
})();
var statearr_29846_29907 = state_29791__$1;
(statearr_29846_29907[(2)] = null);

(statearr_29846_29907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (16))){
var inst_29787 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
var statearr_29847_29908 = state_29791__$1;
(statearr_29847_29908[(2)] = inst_29787);

(statearr_29847_29908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (10))){
var inst_29774 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
if(cljs.core.truth_(inst_29774)){
var statearr_29848_29909 = state_29791__$1;
(statearr_29848_29909[(1)] = (11));

} else {
var statearr_29849_29910 = state_29791__$1;
(statearr_29849_29910[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (8))){
var inst_29762 = (state_29791[(8)]);
var inst_29771 = new cljs.core.Keyword(null,"remove-previous-results","remove-previous-results",883218005).cljs$core$IFn$_invoke$arity$1(inst_29762);
var state_29791__$1 = state_29791;
var statearr_29850_29911 = state_29791__$1;
(statearr_29850_29911[(2)] = inst_29771);

(statearr_29850_29911[(1)] = (10));


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
var statearr_29851 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29851[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__);

(statearr_29851[(1)] = (1));

return statearr_29851;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1 = (function (state_29791){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29852){if((e29852 instanceof Object)){
var ex__15526__auto__ = e29852;
var statearr_29853_29912 = state_29791;
(statearr_29853_29912[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29913 = state_29791;
state_29791 = G__29913;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__ = function(state_29791){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1.call(this,state_29791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29854 = f__15620__auto__.call(null);
(statearr_29854[(6)] = c__15619__auto____$1);

return statearr_29854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});
})();
var inst_29795 = cljs.core.async.impl.dispatch.run.call(null,inst_29794);
var state_29799__$1 = (function (){var statearr_29855 = state_29799;
(statearr_29855[(15)] = inst_29795);

(statearr_29855[(16)] = inst_29758);

return statearr_29855;
})();
var statearr_29856_29914 = state_29799__$1;
(statearr_29856_29914[(2)] = inst_29793);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29799__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (3))){
var state_29799__$1 = state_29799;
var statearr_29857_29915 = state_29799__$1;
(statearr_29857_29915[(2)] = cljs.core.any_QMARK_);

(statearr_29857_29915[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (12))){
var inst_29711 = (state_29799[(13)]);
var state_29799__$1 = state_29799;
var statearr_29858_29916 = state_29799__$1;
(statearr_29858_29916[(2)] = inst_29711);

(statearr_29858_29916[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (2))){
var state_29799__$1 = state_29799;
var statearr_29859_29917 = state_29799__$1;
(statearr_29859_29917[(2)] = unsafe_setter);

(statearr_29859_29917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (11))){
var inst_29711 = (state_29799[(13)]);
var inst_29711__$1 = (state_29799[(2)]);
var inst_29712 = typeof inst_29711__$1 === 'string';
var state_29799__$1 = (function (){var statearr_29860 = state_29799;
(statearr_29860[(13)] = inst_29711__$1);

return statearr_29860;
})();
if(cljs.core.truth_(inst_29712)){
var statearr_29861_29918 = state_29799__$1;
(statearr_29861_29918[(1)] = (12));

} else {
var statearr_29862_29919 = state_29799__$1;
(statearr_29862_29919[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (9))){
var inst_29695 = (state_29799[(9)]);
var inst_29700 = cljs.core.async.put_BANG_.call(null,inst_29695,new cljs.core.Keyword(null,"reset","reset",-800929946));
var state_29799__$1 = state_29799;
var statearr_29863_29920 = state_29799__$1;
(statearr_29863_29920[(2)] = inst_29700);

(statearr_29863_29920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (5))){
var inst_29797 = (state_29799[(2)]);
var state_29799__$1 = state_29799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29799__$1,inst_29797);
} else {
if((state_val_29800 === (14))){
var inst_29717 = (state_29799[(11)]);
var inst_29686 = (state_29799[(10)]);
var inst_29717__$1 = (state_29799[(2)]);
var inst_29718 = inst_29686.call(null,inst_29717__$1);
var state_29799__$1 = (function (){var statearr_29864 = state_29799;
(statearr_29864[(11)] = inst_29717__$1);

(statearr_29864[(17)] = inst_29718);

return statearr_29864;
})();
if(cljs.core.truth_(loop_msec)){
var statearr_29865_29921 = state_29799__$1;
(statearr_29865_29921[(1)] = (15));

} else {
var statearr_29866_29922 = state_29799__$1;
(statearr_29866_29922[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (16))){
var state_29799__$1 = state_29799;
var statearr_29867_29923 = state_29799__$1;
(statearr_29867_29923[(2)] = null);

(statearr_29867_29923[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (10))){
var inst_29709 = (state_29799[(12)]);
var inst_29702 = (state_29799[(2)]);
var inst_29703 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29704 = [new cljs.core.Keyword(null,"eval-counter","eval-counter",-1501705598)];
var inst_29705 = (new cljs.core.PersistentVector(null,1,(5),inst_29703,inst_29704,null));
var inst_29706 = cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,inst_29705,cljs.core.inc);
var inst_29707 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(preamble),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_code)].join('');
var inst_29708 = cljs.core.deref.call(null,state);
var inst_29709__$1 = eval_fn.call(null,inst_29707,inst_29708);
var state_29799__$1 = (function (){var statearr_29868 = state_29799;
(statearr_29868[(18)] = inst_29706);

(statearr_29868[(19)] = inst_29702);

(statearr_29868[(12)] = inst_29709__$1);

return statearr_29868;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29799__$1,(11),inst_29709__$1);
} else {
if((state_val_29800 === (8))){
var state_29799__$1 = state_29799;
var statearr_29869_29924 = state_29799__$1;
(statearr_29869_29924[(2)] = null);

(statearr_29869_29924[(1)] = (10));


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
var statearr_29870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29870[(0)] = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__);

(statearr_29870[(1)] = (1));

return statearr_29870;
});
var klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1 = (function (state_29799){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29871){if((e29871 instanceof Object)){
var ex__15526__auto__ = e29871;
var statearr_29872_29925 = state_29799;
(statearr_29872_29925[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29926 = state_29799;
state_29799 = G__29926;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__ = function(state_29799){
switch(arguments.length){
case 0:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1.call(this,state_29799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____0;
klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto____1;
return klipse$klipse_editors$eval_in_editor_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29873 = f__15620__auto__.call(null);
(statearr_29873[(6)] = c__15619__auto__);

return statearr_29873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.klipse_editors.eval_in_codemirror_editor = (function klipse$klipse_editors$eval_in_codemirror_editor(eval_fn,result_element,editor_source,snippet_args,mode,state){
var editor_args = new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return klipse.klipse_editors.eval_in_editor.call(null,eval_fn,klipse.ui.editors.editor.get_selection_when_selected.call(null,editor_source),(cljs.core.truth_(result_element)?(function (p1__29927_SHARP_){
return klipse.ui.editors.editor.set_value_and_beautify.call(null,result_element,mode,p1__29927_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441).cljs$core$IFn$_invoke$arity$1(editor_args),new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false], null));
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
var obj29928 = elem;
var obj29929 = (((!((obj29928 == null))))?obj29928:({}));
(obj29929["innerHTML"] = wrapped_res);

return obj29929;
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
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"html","html",-998796897),(function (_,p__29932){
var map__29933 = p__29932;
var map__29933__$1 = cljs.core.__destructure_map.call(null,map__29933);
var editor_args = map__29933__$1;
var eval_fn = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var on_edit_cb = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"on-edit-cb","on-edit-cb",1727649734));
var source_code = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__29934 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__29934,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__29934,(1),null);
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

var obj29937 = window;
var obj29938 = (((!((obj29937 == null))))?obj29937:({}));
(obj29938["klipse_editors"] = cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,klipse.klipse_editors.editors)));

return obj29938;
});
klipse.klipse_editors.add_result_element_BANG_ = (function klipse$klipse_editors$add_result_element_BANG_(result_element,snippet_num){
cljs.core.swap_BANG_.call(null,klipse.klipse_editors.result_elements,cljs.core.assoc,snippet_num,result_element);

var obj29941 = window;
var obj29942 = (((!((obj29941 == null))))?obj29941:({}));
(obj29942["klipse_results"] = cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,klipse.klipse_editors.result_elements)));

return obj29942;
});
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768),(function (_,p__29945){
var map__29946 = p__29945;
var map__29946__$1 = cljs.core.__destructure_map.call(null,map__29946);
var editor_args = map__29946__$1;
var eval_fn = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var no_result = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var codemirror_options_in = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801));
var default_txt = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var indent_QMARK_ = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var idle_msec = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var loop_msec = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var element = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var editor_out_mode = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var on_edit_cb = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"on-edit-cb","on-edit-cb",1727649734));
var mode = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var source_code = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var preamble = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var codemirror_options_out = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980));
var snippet_num = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var editor_in_mode = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var vec__29947 = klipse.klipse_editors.editor_options.call(null,editor_in_mode,editor_out_mode,codemirror_options_in,codemirror_options_out);
var in_editor_options = cljs.core.nth.call(null,vec__29947,(0),null);
var out_editor_options = cljs.core.nth.call(null,vec__29947,(1),null);
var container = klipse.dom_utils.create_div_after.call(null,element,klipse.klipse_editors.klipse_container_attrs.call(null,snippet_num));
var ___$1 = klipse.dom_utils.create_div_after.call(null,container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"klipse-separator"], null));
var result_element = (cljs.core.truth_(no_result)?null:klipse.ui.editors.editor.create_editor_after_element.call(null,element,default_txt,out_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["klipse-result",["klipse-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode)].join('')], null)));
var in_editor = klipse.ui.editors.editor.replace_element_by_editor.call(null,element,source_code,in_editor_options,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["klipse-snippet",["klipse-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode)].join('')], null));
var snippet_args = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble], null);
var state = klipse.klipse_editors.create_state.call(null,new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"result-element","result-element",-690233582),result_element,new cljs.core.Keyword(null,"editor-args","editor-args",-1070396049),editor_args);
klipse.ui.editors.common.handle_events.call(null,in_editor,gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"on-completion","on-completion",1522510572),((cljs.core._EQ_.call(null,"clojure",editor_in_mode))?(function (){
return klipse.ui.editors.editor.trigger_autocomplete.call(null,in_editor,(function (){var parent__20032__auto__ = (function (){var obj29954 = (function (){var obj29952 = (function (){var obj29950 = window;
var k29951 = "klipse_clj";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29950,k29951)){
return (obj29950[k29951]);
} else {
return null;
}
})();
var k29953 = "lang";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29952,k29953)){
return (obj29952[k29953]);
} else {
return null;
}
})();
var k29955 = "clojure";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29954,k29955)){
return (obj29954[k29955]);
} else {
return null;
}
})();
var f__20033__auto__ = (function (){var obj29956 = parent__20032__auto__;
var k29957 = "completions";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29956,k29957)){
return (obj29956[k29957]);
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
cljs.core._add_method.call(null,klipse.klipse_editors.create_editor,new cljs.core.Keyword(null,"dom","dom",-1236537922),(function (_,p__29958){
var map__29959 = p__29958;
var map__29959__$1 = cljs.core.__destructure_map.call(null,map__29959);
var editor_args = map__29959__$1;
var snippet_num = cljs.core.get.call(null,map__29959__$1,new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090));
var element = cljs.core.get.call(null,map__29959__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var eval_fn = cljs.core.get.call(null,map__29959__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var default_txt = cljs.core.get.call(null,map__29959__$1,new cljs.core.Keyword(null,"default-txt","default-txt",27736322));
var loop_msec = cljs.core.get.call(null,map__29959__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var preamble = cljs.core.get.call(null,map__29959__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var no_result = cljs.core.get.call(null,map__29959__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
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

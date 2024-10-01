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
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_27788){
var state_val_27789 = (state_27788[(1)]);
if((state_val_27789 === (7))){
var inst_27784 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27790_27816 = state_27788__$1;
(statearr_27790_27816[(2)] = inst_27784);

(statearr_27790_27816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (1))){
var inst_27727 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27788__$1,(2),inst_27727);
} else {
if((state_val_27789 === (4))){
var inst_27786 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27788__$1,inst_27786);
} else {
if((state_val_27789 === (15))){
var inst_27758 = (state_27788[(7)]);
var inst_27775 = (state_27788[(2)]);
var inst_27776 = cljs.core.next.call(null,inst_27758);
var inst_27738 = inst_27776;
var inst_27739 = null;
var inst_27740 = (0);
var inst_27741 = (0);
var state_27788__$1 = (function (){var statearr_27791 = state_27788;
(statearr_27791[(8)] = inst_27739);

(statearr_27791[(9)] = inst_27741);

(statearr_27791[(10)] = inst_27775);

(statearr_27791[(11)] = inst_27738);

(statearr_27791[(12)] = inst_27740);

return statearr_27791;
})();
var statearr_27792_27817 = state_27788__$1;
(statearr_27792_27817[(2)] = null);

(statearr_27792_27817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (13))){
var inst_27758 = (state_27788[(7)]);
var inst_27767 = cljs.core.first.call(null,inst_27758);
var inst_27768 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_27769 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_27770 = [inst_27769,klipse_clj.repl.current_ns_eval];
var inst_27771 = cljs.core.PersistentHashMap.fromArrays(inst_27768,inst_27770);
var inst_27772 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_27767,inst_27771);
var inst_27773 = cljs.core.first.call(null,inst_27772);
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27788__$1,(15),inst_27773);
} else {
if((state_val_27789 === (6))){
var inst_27738 = (state_27788[(11)]);
var inst_27758 = (state_27788[(7)]);
var inst_27758__$1 = cljs.core.seq.call(null,inst_27738);
var state_27788__$1 = (function (){var statearr_27793 = state_27788;
(statearr_27793[(7)] = inst_27758__$1);

return statearr_27793;
})();
if(inst_27758__$1){
var statearr_27794_27818 = state_27788__$1;
(statearr_27794_27818[(1)] = (9));

} else {
var statearr_27795_27819 = state_27788__$1;
(statearr_27795_27819[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (3))){
var inst_27741 = (state_27788[(9)]);
var inst_27740 = (state_27788[(12)]);
var inst_27743 = (inst_27741 < inst_27740);
var inst_27744 = inst_27743;
var state_27788__$1 = state_27788;
if(cljs.core.truth_(inst_27744)){
var statearr_27796_27820 = state_27788__$1;
(statearr_27796_27820[(1)] = (5));

} else {
var statearr_27797_27821 = state_27788__$1;
(statearr_27797_27821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (12))){
var inst_27758 = (state_27788[(7)]);
var inst_27762 = cljs.core.chunk_first.call(null,inst_27758);
var inst_27763 = cljs.core.chunk_rest.call(null,inst_27758);
var inst_27764 = cljs.core.count.call(null,inst_27762);
var inst_27738 = inst_27763;
var inst_27739 = inst_27762;
var inst_27740 = inst_27764;
var inst_27741 = (0);
var state_27788__$1 = (function (){var statearr_27798 = state_27788;
(statearr_27798[(8)] = inst_27739);

(statearr_27798[(9)] = inst_27741);

(statearr_27798[(11)] = inst_27738);

(statearr_27798[(12)] = inst_27740);

return statearr_27798;
})();
var statearr_27799_27822 = state_27788__$1;
(statearr_27799_27822[(2)] = null);

(statearr_27799_27822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (2))){
var inst_27729 = (state_27788[(2)]);
var inst_27734 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27735 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg inferred-type]])"];
var inst_27736 = (new cljs.core.PersistentVector(null,2,(5),inst_27734,inst_27735,null));
var inst_27737 = cljs.core.seq.call(null,inst_27736);
var inst_27738 = inst_27737;
var inst_27739 = null;
var inst_27740 = (0);
var inst_27741 = (0);
var state_27788__$1 = (function (){var statearr_27800 = state_27788;
(statearr_27800[(8)] = inst_27739);

(statearr_27800[(9)] = inst_27741);

(statearr_27800[(11)] = inst_27738);

(statearr_27800[(12)] = inst_27740);

(statearr_27800[(13)] = inst_27729);

return statearr_27800;
})();
var statearr_27801_27823 = state_27788__$1;
(statearr_27801_27823[(2)] = null);

(statearr_27801_27823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (11))){
var inst_27782 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27802_27824 = state_27788__$1;
(statearr_27802_27824[(2)] = inst_27782);

(statearr_27802_27824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (9))){
var inst_27758 = (state_27788[(7)]);
var inst_27760 = cljs.core.chunked_seq_QMARK_.call(null,inst_27758);
var state_27788__$1 = state_27788;
if(inst_27760){
var statearr_27803_27825 = state_27788__$1;
(statearr_27803_27825[(1)] = (12));

} else {
var statearr_27804_27826 = state_27788__$1;
(statearr_27804_27826[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (5))){
var inst_27739 = (state_27788[(8)]);
var inst_27741 = (state_27788[(9)]);
var inst_27746 = cljs.core._nth.call(null,inst_27739,inst_27741);
var inst_27747 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_27748 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_27749 = [inst_27748,klipse_clj.repl.current_ns_eval];
var inst_27750 = cljs.core.PersistentHashMap.fromArrays(inst_27747,inst_27749);
var inst_27751 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_27746,inst_27750);
var inst_27752 = cljs.core.first.call(null,inst_27751);
var state_27788__$1 = state_27788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27788__$1,(8),inst_27752);
} else {
if((state_val_27789 === (14))){
var inst_27779 = (state_27788[(2)]);
var state_27788__$1 = state_27788;
var statearr_27808_27827 = state_27788__$1;
(statearr_27808_27827[(2)] = inst_27779);

(statearr_27808_27827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (10))){
var state_27788__$1 = state_27788;
var statearr_27809_27828 = state_27788__$1;
(statearr_27809_27828[(2)] = null);

(statearr_27809_27828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27789 === (8))){
var inst_27739 = (state_27788[(8)]);
var inst_27741 = (state_27788[(9)]);
var inst_27738 = (state_27788[(11)]);
var inst_27740 = (state_27788[(12)]);
var inst_27754 = (state_27788[(2)]);
var inst_27755 = (inst_27741 + (1));
var tmp27805 = inst_27739;
var tmp27806 = inst_27738;
var tmp27807 = inst_27740;
var inst_27738__$1 = tmp27806;
var inst_27739__$1 = tmp27805;
var inst_27740__$1 = tmp27807;
var inst_27741__$1 = inst_27755;
var state_27788__$1 = (function (){var statearr_27810 = state_27788;
(statearr_27810[(8)] = inst_27739__$1);

(statearr_27810[(9)] = inst_27741__$1);

(statearr_27810[(11)] = inst_27738__$1);

(statearr_27810[(12)] = inst_27740__$1);

(statearr_27810[(14)] = inst_27754);

return statearr_27810;
})();
var statearr_27811_27829 = state_27788__$1;
(statearr_27811_27829[(2)] = null);

(statearr_27811_27829[(1)] = (3));


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
var statearr_27812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27812[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto__);

(statearr_27812[(1)] = (1));

return statearr_27812;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto____1 = (function (state_27788){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_27788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e27813){if((e27813 instanceof Object)){
var ex__13611__auto__ = e27813;
var statearr_27814_27830 = state_27788;
(statearr_27814_27830[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27831 = state_27788;
state_27788 = G__27831;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto__ = function(state_27788){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto____1.call(this,state_27788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_27815 = f__13705__auto__.call(null);
(statearr_27815[(6)] = c__13704__auto__);

return statearr_27815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_27834){
var state_val_27835 = (state_27834[(1)]);
if((state_val_27835 === (1))){
var inst_27832 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_27834__$1 = state_27834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27834__$1,inst_27832);
} else {
return null;
}
});
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto____0 = (function (){
var statearr_27836 = [null,null,null,null,null,null,null];
(statearr_27836[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto__);

(statearr_27836[(1)] = (1));

return statearr_27836;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto____1 = (function (state_27834){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_27834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e27837){if((e27837 instanceof Object)){
var ex__13611__auto__ = e27837;
var statearr_27838_27840 = state_27834;
(statearr_27838_27840[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27841 = state_27834;
state_27834 = G__27841;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto__ = function(state_27834){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto____1.call(this,state_27834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_27839 = f__13705__auto__.call(null);
(statearr_27839[(6)] = c__13704__auto__);

return statearr_27839;
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
}catch (e27842){if((e27842 instanceof Object)){
var e = e27842;

return e;
} else {
throw e27842;

}
}});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__27843){
var map__27844 = p__27843;
var map__27844__$1 = cljs.core.__destructure_map.call(null,map__27844);
var print_length = cljs.core.get.call(null,map__27844__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__27844__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__27846 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__27847 = print_length;
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__27847);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27848_27852 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27849_27853 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27850_27854 = true;
var _STAR_print_fn_STAR__temp_val__27851_27855 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27850_27854);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27851_27855);

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__5041__auto__ = typeof value === 'string';
if(and__5041__auto__){
return beautify_strings;
} else {
return and__5041__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27849_27853);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27848_27852);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})()], null);
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__27846);
}}catch (e27845){if((e27845 instanceof Object)){
var e = e27845;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("klipse","print-error","klipse/print-error",-136370564)], null),cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263)], null))))], null);
} else {
throw e27845;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__27856,verbose_QMARK_,current_ns){
var map__27857 = p__27856;
var map__27857__$1 = cljs.core.__destructure_map.call(null,map__27857);
var ns = cljs.core.get.call(null,map__27857__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__27857__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__27857__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__27857__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__27857__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__27857__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__27858,opts){
var map__27859 = p__27858;
var map__27859__$1 = cljs.core.__destructure_map.call(null,map__27859);
var args = map__27859__$1;
var ns = cljs.core.get.call(null,map__27859__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__27859__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__27859__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__27859__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__27859__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__27859__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
if(cljs.core.not.call(null,error)){
return klipse_clj.lang.clojure.display.call(null,value,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,error)], null);
}
});
klipse_clj.lang.clojure.result_as_prepl_map = (function klipse_clj$lang$clojure$result_as_prepl_map(form_str,p__27860,opts){
var map__27861 = p__27860;
var map__27861__$1 = cljs.core.__destructure_map.call(null,map__27861);
var args = map__27861__$1;
var ns = cljs.core.get.call(null,map__27861__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__27861__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__27861__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__27861__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__27861__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__27861__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var vec__27862 = klipse_clj.lang.clojure.result_as_str.call(null,args,opts);
var status = cljs.core.nth.call(null,vec__27862,(0),null);
var val = cljs.core.nth.call(null,vec__27862,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status))?new cljs.core.Keyword(null,"err","err",-2089457205):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"form","form",-1624062471),form_str], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__27865){
var map__27866 = p__27865;
var map__27866__$1 = cljs.core.__destructure_map.call(null,map__27866);
var form = cljs.core.get.call(null,map__27866__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__27866__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__27866__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__27866__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__27866__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__27867){
var map__27868 = p__27867;
var map__27868__$1 = cljs.core.__destructure_map.call(null,map__27868);
var foo = map__27868__$1;
var value = cljs.core.get.call(null,map__27868__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__27868__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__27869){
var map__27870 = p__27869;
var map__27870__$1 = cljs.core.__destructure_map.call(null,map__27870);
var args = map__27870__$1;
var file = cljs.core.get.call(null,map__27870__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__27870__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__27870__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__27870__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__27870__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__27870__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__27871){
var map__27872 = p__27871;
var map__27872__$1 = cljs.core.__destructure_map.call(null,map__27872);
var source = cljs.core.get.call(null,map__27872__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__27873){
var map__27874 = p__27873;
var map__27874__$1 = cljs.core.__destructure_map.call(null,map__27874);
var static_fns = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__27874__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
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
var c__13704__auto___27906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_27891){
var state_val_27892 = (state_27891[(1)]);
if((state_val_27892 === (1))){
var inst_27875 = cljs.core.PersistentVector.EMPTY;
var inst_27876 = inst_27875;
var state_27891__$1 = (function (){var statearr_27893 = state_27891;
(statearr_27893[(7)] = inst_27876);

return statearr_27893;
})();
var statearr_27894_27907 = state_27891__$1;
(statearr_27894_27907[(2)] = null);

(statearr_27894_27907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27892 === (2))){
var state_27891__$1 = state_27891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27891__$1,(4),c);
} else {
if((state_val_27892 === (3))){
var inst_27889 = (state_27891[(2)]);
var state_27891__$1 = state_27891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27891__$1,inst_27889);
} else {
if((state_val_27892 === (4))){
var inst_27879 = (state_27891[(8)]);
var inst_27879__$1 = (state_27891[(2)]);
var inst_27880 = (inst_27879__$1 == null);
var state_27891__$1 = (function (){var statearr_27895 = state_27891;
(statearr_27895[(8)] = inst_27879__$1);

return statearr_27895;
})();
if(cljs.core.truth_(inst_27880)){
var statearr_27896_27908 = state_27891__$1;
(statearr_27896_27908[(1)] = (5));

} else {
var statearr_27897_27909 = state_27891__$1;
(statearr_27897_27909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27892 === (5))){
var inst_27876 = (state_27891[(7)]);
var inst_27882 = cljs.core.async.put_BANG_.call(null,d,inst_27876);
var state_27891__$1 = state_27891;
var statearr_27898_27910 = state_27891__$1;
(statearr_27898_27910[(2)] = inst_27882);

(statearr_27898_27910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27892 === (6))){
var inst_27879 = (state_27891[(8)]);
var inst_27876 = (state_27891[(7)]);
var inst_27884 = cljs.core.conj.call(null,inst_27876,inst_27879);
var inst_27876__$1 = inst_27884;
var state_27891__$1 = (function (){var statearr_27899 = state_27891;
(statearr_27899[(7)] = inst_27876__$1);

return statearr_27899;
})();
var statearr_27900_27911 = state_27891__$1;
(statearr_27900_27911[(2)] = null);

(statearr_27900_27911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27892 === (7))){
var inst_27887 = (state_27891[(2)]);
var state_27891__$1 = state_27891;
var statearr_27901_27912 = state_27891__$1;
(statearr_27901_27912[(2)] = inst_27887);

(statearr_27901_27912[(1)] = (3));


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
var statearr_27902 = [null,null,null,null,null,null,null,null,null];
(statearr_27902[(0)] = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto__);

(statearr_27902[(1)] = (1));

return statearr_27902;
});
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto____1 = (function (state_27891){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_27891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e27903){if((e27903 instanceof Object)){
var ex__13611__auto__ = e27903;
var statearr_27904_27913 = state_27891;
(statearr_27904_27913[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27914 = state_27891;
state_27891 = G__27914;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto__ = function(state_27891){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto____1.call(this,state_27891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_27905 = f__13705__auto__.call(null);
(statearr_27905[(6)] = c__13704__auto___27906);

return statearr_27905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return d;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__27915){
var map__27916 = p__27915;
var map__27916__$1 = cljs.core.__destructure_map.call(null,map__27916);
var static_fns = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var res_chan = cljs.core.async.chan.call(null);
var warnings_chan = cljs.core.async.chan.call(null,(1024));
var agg_warnings_chan = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__5128__auto__ = max_eval_duration;
var y__5129__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var _STAR_cljs_warning_handlers_STAR__orig_val__27917 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__27918 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,klipse_clj.lang.clojure.warning_handler,warnings_chan)], null);
(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__27918);

try{try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),(cljs.env._STAR_compiler_STAR_ = st),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),(function (res){
cljs.core.async.close_BANG_.call(null,warnings_chan);

var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_27927){
var state_val_27928 = (state_27927[(1)]);
if((state_val_27928 === (1))){
var inst_27919 = klipse_clj.lang.clojure.read_until_closed_BANG_.call(null,warnings_chan);
var state_27927__$1 = state_27927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27927__$1,(2),inst_27919);
} else {
if((state_val_27928 === (2))){
var inst_27921 = (state_27927[(2)]);
var inst_27922 = klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);
var inst_27923 = cljs.core.async.put_BANG_.call(null,res_chan,res);
var inst_27924 = clojure.string.join.call(null,"",inst_27921);
var inst_27925 = cljs.core.async.put_BANG_.call(null,agg_warnings_chan,inst_27924);
var state_27927__$1 = (function (){var statearr_27929 = state_27927;
(statearr_27929[(7)] = inst_27922);

(statearr_27929[(8)] = inst_27923);

return statearr_27929;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27927__$1,inst_27925);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto____0 = (function (){
var statearr_27930 = [null,null,null,null,null,null,null,null,null];
(statearr_27930[(0)] = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto__);

(statearr_27930[(1)] = (1));

return statearr_27930;
});
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto____1 = (function (state_27927){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_27927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e27931){if((e27931 instanceof Object)){
var ex__13611__auto__ = e27931;
var statearr_27932_27934 = state_27927;
(statearr_27932_27934[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27935 = state_27927;
state_27927 = G__27935;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto__ = function(state_27927){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto____1.call(this,state_27927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_27933 = f__13705__auto__.call(null);
(statearr_27933[(6)] = c__13704__auto__);

return statearr_27933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
}));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,agg_warnings_chan], null);
}finally {}}finally {(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__27917);
}});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5802__auto__)){
var ch = temp__5802__auto__;
var G__27936 = cljs.core.conj.call(null,res,ch);
res = G__27936;
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
var _STAR_alias_map_STAR__orig_val__27937 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__27938 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__27939 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__27940 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__27941 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__27942 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__27943 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__27944 = ns;
var _STAR_cljs_ns_STAR__temp_val__27945 = ns;
var _STAR_compiler_STAR__temp_val__27946 = st;
var resolve_symbol_temp_val__27947 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__27948 = klipse_clj.lang.clojure.data_readers.call(null);
(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__27943);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__27944);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__27945);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__27946);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__27947);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__27948);

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
}finally {(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__27942);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__27941);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__27940);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__27939);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__27938);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__27937);
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__27952 = arguments.length;
switch (G__27952) {
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
var _STAR_alias_map_STAR__orig_val__27953 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__27954 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__27955 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__27956 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__27957 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__27958 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__27959 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__27960 = ns;
var _STAR_cljs_ns_STAR__temp_val__27961 = ns;
var _STAR_compiler_STAR__temp_val__27962 = st;
var resolve_symbol_temp_val__27963 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__27964 = klipse_clj.lang.clojure.data_readers.call(null);
(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__27959);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__27960);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__27961);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__27962);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__27963);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__27964);

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__27958);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__27957);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__27956);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__27955);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__27954);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__27953);
}}));

(klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3);

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__27969 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__27969,(0),null);
var rest_s = cljs.core.nth.call(null,vec__27969,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__27972 = rest_s;
var G__27973 = res;
s__$1 = G__27972;
res = G__27973;
continue;
} else {
var G__27974 = rest_s;
var G__27975 = cljs.core.conj.call(null,res,exp);
s__$1 = G__27974;
res = G__27975;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__27976){
var map__27977 = p__27976;
var map__27977__$1 = cljs.core.__destructure_map.call(null,map__27977);
var result_element = cljs.core.get.call(null,map__27977__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__27977__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
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
var c__13704__auto___28081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28053){
var state_val_28054 = (state_28053[(1)]);
if((state_val_28054 === (7))){
var inst_28049 = (state_28053[(2)]);
var state_28053__$1 = state_28053;
var statearr_28055_28082 = state_28053__$1;
(statearr_28055_28082[(2)] = inst_28049);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28053__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (1))){
var state_28053__$1 = state_28053;
var statearr_28056_28083 = state_28053__$1;
(statearr_28056_28083[(2)] = null);

(statearr_28056_28083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28053,(3),Object,null,(2));
var inst_27991 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_28053__$1 = state_28053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28053__$1,(5),inst_27991);
} else {
if((state_val_28054 === (15))){
var inst_28027 = (state_28053[(7)]);
var inst_28036 = (state_28053[(8)]);
var inst_28008 = (state_28053[(9)]);
var inst_28038 = (state_28053[(2)]);
var inst_28039 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28008),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28038)].join('');
var inst_28006 = inst_28036;
var inst_28007 = inst_28027;
var inst_28008__$1 = inst_28039;
var state_28053__$1 = (function (){var statearr_28057 = state_28053;
(statearr_28057[(10)] = inst_28006);

(statearr_28057[(11)] = inst_28007);

(statearr_28057[(9)] = inst_28008__$1);

return statearr_28057;
})();
var statearr_28058_28084 = state_28053__$1;
(statearr_28058_28084[(2)] = null);

(statearr_28058_28084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (13))){
var inst_28025 = (state_28053[(12)]);
var inst_28014 = (state_28053[(13)]);
var inst_28034 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_28035 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_28036 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_28014,inst_28034,inst_28035);
var state_28053__$1 = (function (){var statearr_28059 = state_28053;
(statearr_28059[(8)] = inst_28036);

return statearr_28059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28053__$1,(15),inst_28025);
} else {
if((state_val_28054 === (6))){
var inst_28006 = (state_28053[(10)]);
var inst_28013 = (state_28053[(14)]);
var inst_28013__$1 = cljs.core.nth.call(null,inst_28006,(0),null);
var inst_28014 = cljs.core.nth.call(null,inst_28006,(1),null);
var inst_28015 = cljs.core.empty_QMARK_.call(null,inst_28013__$1);
var inst_28016 = (!(inst_28015));
var state_28053__$1 = (function (){var statearr_28060 = state_28053;
(statearr_28060[(13)] = inst_28014);

(statearr_28060[(14)] = inst_28013__$1);

return statearr_28060;
})();
if(inst_28016){
var statearr_28061_28085 = state_28053__$1;
(statearr_28061_28085[(1)] = (8));

} else {
var statearr_28062_28086 = state_28053__$1;
(statearr_28062_28086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (3))){
var inst_27978 = (state_28053[(2)]);
var inst_27979 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_27980 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_27981 = [inst_27978];
var inst_27982 = cljs.core.PersistentHashMap.fromArrays(inst_27980,inst_27981);
var inst_27983 = cljs.core.async.put_BANG_.call(null,res_chan,inst_27982);
var inst_27984 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_27985 = [inst_27978];
var inst_27986 = cljs.core.PersistentHashMap.fromArrays(inst_27984,inst_27985);
var inst_27987 = klipse_clj.lang.clojure.populate_err.call(null,inst_27986,opts);
var state_28053__$1 = (function (){var statearr_28063 = state_28053;
(statearr_28063[(15)] = inst_27979);

(statearr_28063[(16)] = inst_27983);

return statearr_28063;
})();
var statearr_28064_28087 = state_28053__$1;
(statearr_28064_28087[(2)] = inst_27987);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28053__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (12))){
var inst_28027 = (state_28053[(7)]);
var inst_28030 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_28031 = cljs.core.async.put_BANG_.call(null,res_chan,inst_28027);
var inst_28032 = klipse_clj.lang.clojure.populate_err.call(null,inst_28027,opts);
var state_28053__$1 = (function (){var statearr_28065 = state_28053;
(statearr_28065[(17)] = inst_28030);

(statearr_28065[(18)] = inst_28031);

return statearr_28065;
})();
var statearr_28066_28088 = state_28053__$1;
(statearr_28066_28088[(2)] = inst_28032);

(statearr_28066_28088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (2))){
var inst_28051 = (state_28053[(2)]);
var state_28053__$1 = state_28053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28053__$1,inst_28051);
} else {
if((state_val_28054 === (11))){
var inst_28027 = (state_28053[(7)]);
var inst_28027__$1 = (state_28053[(2)]);
var inst_28028 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28027__$1);
var state_28053__$1 = (function (){var statearr_28067 = state_28053;
(statearr_28067[(7)] = inst_28027__$1);

return statearr_28067;
})();
if(cljs.core.truth_(inst_28028)){
var statearr_28068_28089 = state_28053__$1;
(statearr_28068_28089[(1)] = (12));

} else {
var statearr_28069_28090 = state_28053__$1;
(statearr_28069_28090[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (9))){
var inst_28007 = (state_28053[(11)]);
var inst_28008 = (state_28053[(9)]);
var inst_28044 = cljs.core.async.put_BANG_.call(null,warnings_chan,inst_28008);
var inst_28045 = cljs.core.async.put_BANG_.call(null,res_chan,inst_28007);
var state_28053__$1 = (function (){var statearr_28070 = state_28053;
(statearr_28070[(19)] = inst_28044);

return statearr_28070;
})();
var statearr_28071_28091 = state_28053__$1;
(statearr_28071_28091[(2)] = inst_28045);

(statearr_28071_28091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (5))){
var inst_27993 = (state_28053[(2)]);
var inst_28001 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_28002 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_28003 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_28001,inst_28002);
var inst_28004 = cljs.core.nth.call(null,inst_28003,(0),null);
var inst_28005 = cljs.core.nth.call(null,inst_28003,(1),null);
var inst_28006 = inst_28003;
var inst_28007 = null;
var inst_28008 = "";
var state_28053__$1 = (function (){var statearr_28072 = state_28053;
(statearr_28072[(10)] = inst_28006);

(statearr_28072[(11)] = inst_28007);

(statearr_28072[(20)] = inst_28004);

(statearr_28072[(21)] = inst_27993);

(statearr_28072[(22)] = inst_28005);

(statearr_28072[(9)] = inst_28008);

return statearr_28072;
})();
var statearr_28073_28092 = state_28053__$1;
(statearr_28073_28092[(2)] = null);

(statearr_28073_28092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (14))){
var inst_28042 = (state_28053[(2)]);
var state_28053__$1 = state_28053;
var statearr_28074_28093 = state_28053__$1;
(statearr_28074_28093[(2)] = inst_28042);

(statearr_28074_28093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (10))){
var inst_28047 = (state_28053[(2)]);
var state_28053__$1 = state_28053;
var statearr_28075_28094 = state_28053__$1;
(statearr_28075_28094[(2)] = inst_28047);

(statearr_28075_28094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (8))){
var inst_28013 = (state_28053[(14)]);
var inst_28021 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_28022 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_28021,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_28023 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_28013,inst_28022);
var inst_28024 = cljs.core.nth.call(null,inst_28023,(0),null);
var inst_28025 = cljs.core.nth.call(null,inst_28023,(1),null);
var state_28053__$1 = (function (){var statearr_28076 = state_28053;
(statearr_28076[(12)] = inst_28025);

return statearr_28076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28053__$1,(11),inst_28024);
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
var statearr_28077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28077[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto__);

(statearr_28077[(1)] = (1));

return statearr_28077;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto____1 = (function (state_28053){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28078){if((e28078 instanceof Object)){
var ex__13611__auto__ = e28078;
var statearr_28079_28095 = state_28053;
(statearr_28079_28095[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28096 = state_28053;
state_28053 = G__28096;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto__ = function(state_28053){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto____1.call(this,state_28053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28080 = f__13705__auto__.call(null);
(statearr_28080[(6)] = c__13704__auto___28081);

return statearr_28080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,warnings_chan], null);
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28154){
var state_val_28155 = (state_28154[(1)]);
if((state_val_28155 === (7))){
var inst_28122 = (state_28154[(7)]);
var inst_28127 = klipse_clj.repl.create_state_compile.call(null);
var inst_28128 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_28127,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_28129 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_28122,inst_28128);
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28154__$1,(10),inst_28129);
} else {
if((state_val_28155 === (1))){
var state_28154__$1 = state_28154;
var statearr_28156_28177 = state_28154__$1;
(statearr_28156_28177[(2)] = null);

(statearr_28156_28177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28154,(3),Object,null,(2));
var inst_28111 = klipse_clj.repl.create_state_compile.call(null);
var inst_28112 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_28113 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_28111,inst_28112);
var inst_28114 = cljs.core.nth.call(null,inst_28113,(0),null);
var inst_28115 = cljs.core.nth.call(null,inst_28113,(1),null);
var inst_28116 = inst_28113;
var inst_28117 = "";
var state_28154__$1 = (function (){var statearr_28157 = state_28154;
(statearr_28157[(8)] = inst_28115);

(statearr_28157[(9)] = inst_28117);

(statearr_28157[(10)] = inst_28114);

(statearr_28157[(11)] = inst_28116);

return statearr_28157;
})();
var statearr_28158_28178 = state_28154__$1;
(statearr_28158_28178[(2)] = null);

(statearr_28158_28178[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (13))){
var inst_28142 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28159_28179 = state_28154__$1;
(statearr_28159_28179[(2)] = inst_28142);

(statearr_28159_28179[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (6))){
var inst_28150 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28160_28180 = state_28154__$1;
(statearr_28160_28180[(2)] = inst_28150);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28154__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (3))){
var inst_28097 = (state_28154[(2)]);
var inst_28098 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_28099 = [inst_28097];
var inst_28100 = cljs.core.PersistentHashMap.fromArrays(inst_28098,inst_28099);
var state_28154__$1 = state_28154;
var statearr_28161_28181 = state_28154__$1;
(statearr_28161_28181[(2)] = inst_28100);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28154__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (12))){
var inst_28123 = (state_28154[(12)]);
var inst_28131 = (state_28154[(13)]);
var inst_28117 = (state_28154[(9)]);
var inst_28135 = klipse_clj.repl.create_state_compile.call(null);
var inst_28136 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_28137 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_28123,inst_28135,inst_28136);
var inst_28138 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_28131);
var inst_28139 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28117),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28138)].join('');
var inst_28116 = inst_28137;
var inst_28117__$1 = inst_28139;
var state_28154__$1 = (function (){var statearr_28162 = state_28154;
(statearr_28162[(9)] = inst_28117__$1);

(statearr_28162[(11)] = inst_28116);

return statearr_28162;
})();
var statearr_28163_28182 = state_28154__$1;
(statearr_28163_28182[(2)] = null);

(statearr_28163_28182[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (2))){
var inst_28152 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28154__$1,inst_28152);
} else {
if((state_val_28155 === (11))){
var inst_28131 = (state_28154[(13)]);
var state_28154__$1 = state_28154;
var statearr_28164_28183 = state_28154__$1;
(statearr_28164_28183[(2)] = inst_28131);

(statearr_28164_28183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (9))){
var inst_28148 = (state_28154[(2)]);
var state_28154__$1 = state_28154;
var statearr_28165_28184 = state_28154__$1;
(statearr_28165_28184[(2)] = inst_28148);

(statearr_28165_28184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (5))){
var inst_28116 = (state_28154[(11)]);
var inst_28122 = (state_28154[(7)]);
var inst_28122__$1 = cljs.core.nth.call(null,inst_28116,(0),null);
var inst_28123 = cljs.core.nth.call(null,inst_28116,(1),null);
var inst_28124 = cljs.core.empty_QMARK_.call(null,inst_28122__$1);
var inst_28125 = (!(inst_28124));
var state_28154__$1 = (function (){var statearr_28166 = state_28154;
(statearr_28166[(12)] = inst_28123);

(statearr_28166[(7)] = inst_28122__$1);

return statearr_28166;
})();
if(inst_28125){
var statearr_28167_28185 = state_28154__$1;
(statearr_28167_28185[(1)] = (7));

} else {
var statearr_28168_28186 = state_28154__$1;
(statearr_28168_28186[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (10))){
var inst_28131 = (state_28154[(13)]);
var inst_28131__$1 = (state_28154[(2)]);
var inst_28132 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28131__$1);
var state_28154__$1 = (function (){var statearr_28169 = state_28154;
(statearr_28169[(13)] = inst_28131__$1);

return statearr_28169;
})();
if(cljs.core.truth_(inst_28132)){
var statearr_28170_28187 = state_28154__$1;
(statearr_28170_28187[(1)] = (11));

} else {
var statearr_28171_28188 = state_28154__$1;
(statearr_28171_28188[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28155 === (8))){
var inst_28117 = (state_28154[(9)]);
var inst_28144 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_28145 = [inst_28117];
var inst_28146 = cljs.core.PersistentHashMap.fromArrays(inst_28144,inst_28145);
var state_28154__$1 = state_28154;
var statearr_28172_28189 = state_28154__$1;
(statearr_28172_28189[(2)] = inst_28146);

(statearr_28172_28189[(1)] = (9));


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
var statearr_28173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28173[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto__);

(statearr_28173[(1)] = (1));

return statearr_28173;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto____1 = (function (state_28154){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28174){if((e28174 instanceof Object)){
var ex__13611__auto__ = e28174;
var statearr_28175_28190 = state_28154;
(statearr_28175_28190[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28191 = state_28154;
state_28154 = G__28191;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto__ = function(state_28154){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto____1.call(this,state_28154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28176 = f__13705__auto__.call(null);
(statearr_28176[(6)] = c__13704__auto__);

return statearr_28176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse_clj.lang.clojure.eval_async_map = (function klipse_clj$lang$clojure$eval_async_map(s,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28207){
var state_val_28208 = (state_28207[(1)]);
if((state_val_28208 === (1))){
var inst_28195 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_28196 = cljs.core.nth.call(null,inst_28195,(0),null);
var inst_28197 = cljs.core.nth.call(null,inst_28195,(1),null);
var state_28207__$1 = (function (){var statearr_28209 = state_28207;
(statearr_28209[(7)] = inst_28197);

return statearr_28209;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28207__$1,(2),inst_28196);
} else {
if((state_val_28208 === (2))){
var inst_28197 = (state_28207[(7)]);
var inst_28199 = (state_28207[(2)]);
var inst_28200 = klipse_clj.lang.clojure.result_as_str.call(null,inst_28199,opts);
var state_28207__$1 = (function (){var statearr_28210 = state_28207;
(statearr_28210[(8)] = inst_28200);

return statearr_28210;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28207__$1,(3),inst_28197);
} else {
if((state_val_28208 === (3))){
var inst_28200 = (state_28207[(8)]);
var inst_28202 = (state_28207[(2)]);
var inst_28203 = [new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"res","res",-1395007879)];
var inst_28204 = [inst_28202,inst_28200];
var inst_28205 = cljs.core.PersistentHashMap.fromArrays(inst_28203,inst_28204);
var state_28207__$1 = state_28207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28207__$1,inst_28205);
} else {
return null;
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto____0 = (function (){
var statearr_28211 = [null,null,null,null,null,null,null,null,null];
(statearr_28211[(0)] = klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto__);

(statearr_28211[(1)] = (1));

return statearr_28211;
});
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto____1 = (function (state_28207){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28212){if((e28212 instanceof Object)){
var ex__13611__auto__ = e28212;
var statearr_28213_28215 = state_28207;
(statearr_28213_28215[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28216 = state_28207;
state_28207 = G__28216;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto__ = function(state_28207){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto____1.call(this,state_28207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28214 = f__13705__auto__.call(null);
(statearr_28214[(6)] = c__13704__auto__);

return statearr_28214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28229){
var state_val_28230 = (state_28229[(1)]);
if((state_val_28230 === (1))){
var inst_28220 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_28221 = cljs.core.nth.call(null,inst_28220,(0),null);
var inst_28222 = cljs.core.nth.call(null,inst_28220,(1),null);
var state_28229__$1 = (function (){var statearr_28231 = state_28229;
(statearr_28231[(7)] = inst_28222);

return statearr_28231;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28229__$1,(2),inst_28221);
} else {
if((state_val_28230 === (2))){
var inst_28222 = (state_28229[(7)]);
var inst_28224 = (state_28229[(2)]);
var inst_28225 = klipse_clj.lang.clojure.result_as_str.call(null,inst_28224,opts);
var state_28229__$1 = (function (){var statearr_28232 = state_28229;
(statearr_28232[(8)] = inst_28225);

return statearr_28232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28229__$1,(3),inst_28222);
} else {
if((state_val_28230 === (3))){
var inst_28225 = (state_28229[(8)]);
var inst_28227 = (state_28229[(2)]);
var state_28229__$1 = (function (){var statearr_28233 = state_28229;
(statearr_28233[(9)] = inst_28227);

return statearr_28233;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28229__$1,inst_28225);
} else {
return null;
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto____0 = (function (){
var statearr_28234 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28234[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto__);

(statearr_28234[(1)] = (1));

return statearr_28234;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto____1 = (function (state_28229){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28235){if((e28235 instanceof Object)){
var ex__13611__auto__ = e28235;
var statearr_28236_28238 = state_28229;
(statearr_28236_28238[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28239 = state_28229;
state_28229 = G__28239;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto__ = function(state_28229){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto____1.call(this,state_28229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28237 = f__13705__auto__.call(null);
(statearr_28237[(6)] = c__13704__auto__);

return statearr_28237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__28241 = arguments.length;
switch (G__28241) {
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
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28248){
var state_val_28249 = (state_28248[(1)]);
if((state_val_28249 === (1))){
var inst_28242 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_28243 = cljs.core.first.call(null,inst_28242);
var state_28248__$1 = state_28248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28248__$1,(2),inst_28243);
} else {
if((state_val_28249 === (2))){
var inst_28245 = (state_28248[(2)]);
var inst_28246 = klipse_clj.lang.clojure.read_result.call(null,inst_28245);
var state_28248__$1 = state_28248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28248__$1,inst_28246);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$state_machine__13608__auto____0 = (function (){
var statearr_28250 = [null,null,null,null,null,null,null];
(statearr_28250[(0)] = klipse_clj$lang$clojure$state_machine__13608__auto__);

(statearr_28250[(1)] = (1));

return statearr_28250;
});
var klipse_clj$lang$clojure$state_machine__13608__auto____1 = (function (state_28248){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28251){if((e28251 instanceof Object)){
var ex__13611__auto__ = e28251;
var statearr_28252_28255 = state_28248;
(statearr_28252_28255[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28256 = state_28248;
state_28248 = G__28256;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__13608__auto__ = function(state_28248){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__13608__auto____1.call(this,state_28248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__13608__auto____0;
klipse_clj$lang$clojure$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__13608__auto____1;
return klipse_clj$lang$clojure$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28253 = f__13705__auto__.call(null);
(statearr_28253[(6)] = c__13704__auto__);

return statearr_28253;
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
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28263){
var state_val_28264 = (state_28263[(1)]);
if((state_val_28264 === (1))){
var inst_28257 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_28263__$1 = state_28263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28263__$1,(2),inst_28257);
} else {
if((state_val_28264 === (2))){
var inst_28259 = (state_28263[(2)]);
var inst_28260 = cljs.core.clj__GT_js.call(null,inst_28259);
var inst_28261 = cb.call(null,inst_28260);
var state_28263__$1 = state_28263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28263__$1,inst_28261);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto____0 = (function (){
var statearr_28265 = [null,null,null,null,null,null,null];
(statearr_28265[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto__);

(statearr_28265[(1)] = (1));

return statearr_28265;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto____1 = (function (state_28263){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28266){if((e28266 instanceof Object)){
var ex__13611__auto__ = e28266;
var statearr_28267_28269 = state_28263;
(statearr_28267_28269[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28270 = state_28263;
state_28263 = G__28270;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto__ = function(state_28263){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto____1.call(this,state_28263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28268 = f__13705__auto__.call(null);
(statearr_28268[(6)] = c__13704__auto__);

return statearr_28268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__28272 = arguments.length;
switch (G__28272) {
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
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28278){
var state_val_28279 = (state_28278[(1)]);
if((state_val_28279 === (1))){
var inst_28273 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_28278__$1 = state_28278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28278__$1,(2),inst_28273);
} else {
if((state_val_28279 === (2))){
var inst_28275 = (state_28278[(2)]);
var inst_28276 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_28275);
var state_28278__$1 = state_28278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28278__$1,inst_28276);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$state_machine__13608__auto____0 = (function (){
var statearr_28280 = [null,null,null,null,null,null,null];
(statearr_28280[(0)] = klipse_clj$lang$clojure$state_machine__13608__auto__);

(statearr_28280[(1)] = (1));

return statearr_28280;
});
var klipse_clj$lang$clojure$state_machine__13608__auto____1 = (function (state_28278){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28281){if((e28281 instanceof Object)){
var ex__13611__auto__ = e28281;
var statearr_28282_28285 = state_28278;
(statearr_28282_28285[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28286 = state_28278;
state_28278 = G__28286;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__13608__auto__ = function(state_28278){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__13608__auto____1.call(this,state_28278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__13608__auto____0;
klipse_clj$lang$clojure$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__13608__auto____1;
return klipse_clj$lang$clojure$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28283 = f__13705__auto__.call(null);
(statearr_28283[(6)] = c__13704__auto__);

return statearr_28283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
}));

(klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2);

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28292){
var state_val_28293 = (state_28292[(1)]);
if((state_val_28293 === (1))){
var inst_28287 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_28292__$1 = state_28292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28292__$1,(2),inst_28287);
} else {
if((state_val_28293 === (2))){
var inst_28289 = (state_28292[(2)]);
var inst_28290 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_28289);
var state_28292__$1 = state_28292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28292__$1,inst_28290);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto____0 = (function (){
var statearr_28294 = [null,null,null,null,null,null,null];
(statearr_28294[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto__);

(statearr_28294[(1)] = (1));

return statearr_28294;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto____1 = (function (state_28292){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28295){if((e28295 instanceof Object)){
var ex__13611__auto__ = e28295;
var statearr_28296_28298 = state_28292;
(statearr_28296_28298[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28299 = state_28292;
state_28292 = G__28299;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto__ = function(state_28292){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto____1.call(this,state_28292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28297 = f__13705__auto__.call(null);
(statearr_28297[(6)] = c__13704__auto__);

return statearr_28297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28306){
var state_val_28307 = (state_28306[(1)]);
if((state_val_28307 === (1))){
var inst_28300 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_28306__$1 = state_28306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28306__$1,(2),inst_28300);
} else {
if((state_val_28307 === (2))){
var inst_28302 = (state_28306[(2)]);
var inst_28303 = cljs.core.second.call(null,inst_28302);
var inst_28304 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28303);
var state_28306__$1 = state_28306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28306__$1,inst_28304);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto____0 = (function (){
var statearr_28308 = [null,null,null,null,null,null,null];
(statearr_28308[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto__);

(statearr_28308[(1)] = (1));

return statearr_28308;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto____1 = (function (state_28306){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28309){if((e28309 instanceof Object)){
var ex__13611__auto__ = e28309;
var statearr_28310_28312 = state_28306;
(statearr_28310_28312[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28313 = state_28306;
state_28306 = G__28313;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto__ = function(state_28306){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto____1.call(this,state_28306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28311 = f__13705__auto__.call(null);
(statearr_28311[(6)] = c__13704__auto__);

return statearr_28311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__28315){
var map__28316 = p__28315;
var map__28316__$1 = cljs.core.__destructure_map.call(null,map__28316);
var opts = map__28316__$1;
var container_id = cljs.core.get.call(null,map__28316__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__28316__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__28316__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__13704__auto___28372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28354){
var state_val_28355 = (state_28354[(1)]);
if((state_val_28355 === (7))){
var inst_28325 = (state_28354[(2)]);
var inst_28330 = (function (){var _STAR_print_newline_STAR__orig_val__28326 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28327 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28328 = true;
return (function (p1__28314_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__28314_SHARP_);
});
})();
var inst_28331 = (cljs.core._STAR_print_newline_STAR_ = true);
var inst_28332 = (cljs.core._STAR_print_fn_STAR_ = inst_28330);
var state_28354__$1 = (function (){var statearr_28356 = state_28354;
(statearr_28356[(7)] = inst_28331);

(statearr_28356[(8)] = inst_28325);

(statearr_28356[(9)] = inst_28332);

return statearr_28356;
})();
var statearr_28357_28373 = state_28354__$1;
(statearr_28357_28373[(2)] = null);

(statearr_28357_28373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (1))){
var inst_28317 = clojure.string.blank_QMARK_.call(null,exp);
var state_28354__$1 = state_28354;
if(inst_28317){
var statearr_28358_28374 = state_28354__$1;
(statearr_28358_28374[(1)] = (2));

} else {
var statearr_28359_28375 = state_28354__$1;
(statearr_28359_28375[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (4))){
var inst_28352 = (state_28354[(2)]);
var state_28354__$1 = state_28354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28354__$1,inst_28352);
} else {
if((state_val_28355 === (6))){
var state_28354__$1 = state_28354;
var statearr_28360_28376 = state_28354__$1;
(statearr_28360_28376[(2)] = null);

(statearr_28360_28376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (3))){
var state_28354__$1 = state_28354;
if(cljs.core.truth_(setup_container_fn)){
var statearr_28361_28377 = state_28354__$1;
(statearr_28361_28377[(1)] = (5));

} else {
var statearr_28362_28378 = state_28354__$1;
(statearr_28362_28378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (2))){
var inst_28319 = cljs.core.async.put_BANG_.call(null,c,"");
var state_28354__$1 = state_28354;
var statearr_28363_28379 = state_28354__$1;
(statearr_28363_28379[(2)] = inst_28319);

(statearr_28363_28379[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (11))){
var inst_28342 = (state_28354[(2)]);
var inst_28343 = cljs.core.__destructure_map.call(null,inst_28342);
var inst_28344 = cljs.core.get.call(null,inst_28343,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_28345 = cljs.core.get.call(null,inst_28343,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_28346 = cljs.core.second.call(null,inst_28345);
var inst_28347 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28344),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28346)].join('');
var inst_28348 = cljs.core.async.put_BANG_.call(null,c,inst_28347);
var state_28354__$1 = state_28354;
var statearr_28364_28380 = state_28354__$1;
(statearr_28364_28380[(2)] = inst_28348);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28354__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (9))){
var inst_28333 = (state_28354[(2)]);
var inst_28334 = (cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_);
var inst_28335 = (cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_);
var state_28354__$1 = (function (){var statearr_28365 = state_28354;
(statearr_28365[(10)] = inst_28335);

(statearr_28365[(11)] = inst_28333);

(statearr_28365[(12)] = inst_28334);

return statearr_28365;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28354__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (5))){
var inst_28322 = setup_container_fn.call(null,container_id);
var state_28354__$1 = state_28354;
var statearr_28366_28381 = state_28354__$1;
(statearr_28366_28381[(2)] = inst_28322);

(statearr_28366_28381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28354,null,null,(9),(8));
var inst_28340 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_28354__$1 = state_28354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28354__$1,(11),inst_28340);
} else {
if((state_val_28355 === (8))){
var inst_28350 = (state_28354[(2)]);
var state_28354__$1 = state_28354;
var statearr_28367_28382 = state_28354__$1;
(statearr_28367_28382[(2)] = inst_28350);

(statearr_28367_28382[(1)] = (4));


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
var statearr_28368 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28368[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto__);

(statearr_28368[(1)] = (1));

return statearr_28368;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto____1 = (function (state_28354){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28369){if((e28369 instanceof Object)){
var ex__13611__auto__ = e28369;
var statearr_28370_28383 = state_28354;
(statearr_28370_28383[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28384 = state_28354;
state_28354 = G__28384;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto__ = function(state_28354){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto____1.call(this,state_28354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28371 = f__13705__auto__.call(null);
(statearr_28371[(6)] = c__13704__auto___28372);

return statearr_28371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return c;
});
klipse_clj.lang.clojure.eval_async_prepl = (function klipse_clj$lang$clojure$eval_async_prepl(var_args){
var G__28386 = arguments.length;
switch (G__28386) {
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
var c__13704__auto___28416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28405){
var state_val_28406 = (state_28405[(1)]);
if((state_val_28406 === (1))){
var inst_28389 = (function (){var _STAR_print_fn_STAR__orig_val__28387 = cljs.core._STAR_print_fn_STAR_;
return (function (s__$1){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),s__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"out","out",-910545517)], null));
});
})();
var inst_28390 = (cljs.core._STAR_print_fn_STAR_ = inst_28389);
var state_28405__$1 = (function (){var statearr_28407 = state_28405;
(statearr_28407[(7)] = inst_28390);

return statearr_28407;
})();
var statearr_28408_28417 = state_28405__$1;
(statearr_28408_28417[(2)] = null);

(statearr_28408_28417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (2))){
var inst_28403 = (state_28405[(2)]);
var state_28405__$1 = state_28405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28405__$1,inst_28403);
} else {
if((state_val_28406 === (3))){
var inst_28391 = (state_28405[(2)]);
var inst_28392 = (cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_);
var state_28405__$1 = (function (){var statearr_28409 = state_28405;
(statearr_28409[(8)] = inst_28391);

(statearr_28409[(9)] = inst_28392);

return statearr_28409;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28406 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28405,null,null,(3),(2));
var inst_28396 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_28397 = cljs.core.first.call(null,inst_28396);
var state_28405__$1 = state_28405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28405__$1,(5),inst_28397);
} else {
if((state_val_28406 === (5))){
var inst_28399 = (state_28405[(2)]);
var inst_28400 = klipse_clj.lang.clojure.result_as_prepl_map.call(null,s,inst_28399,opts);
var inst_28401 = cljs.core.async.put_BANG_.call(null,c,inst_28400);
var state_28405__$1 = state_28405;
var statearr_28410_28418 = state_28405__$1;
(statearr_28410_28418[(2)] = inst_28401);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28405__$1);

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
var statearr_28411 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28411[(0)] = klipse_clj$lang$clojure$state_machine__13608__auto__);

(statearr_28411[(1)] = (1));

return statearr_28411;
});
var klipse_clj$lang$clojure$state_machine__13608__auto____1 = (function (state_28405){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28412){if((e28412 instanceof Object)){
var ex__13611__auto__ = e28412;
var statearr_28413_28419 = state_28405;
(statearr_28413_28419[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28420 = state_28405;
state_28405 = G__28420;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__13608__auto__ = function(state_28405){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__13608__auto____1.call(this,state_28405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__13608__auto____0;
klipse_clj$lang$clojure$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__13608__auto____1;
return klipse_clj$lang$clojure$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28414 = f__13705__auto__.call(null);
(statearr_28414[(6)] = c__13704__auto___28416);

return statearr_28414;
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

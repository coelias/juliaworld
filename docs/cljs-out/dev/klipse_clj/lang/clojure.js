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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_31777){
var state_val_31778 = (state_31777[(1)]);
if((state_val_31778 === (7))){
var inst_31773 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31779_31805 = state_31777__$1;
(statearr_31779_31805[(2)] = inst_31773);

(statearr_31779_31805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (1))){
var inst_31716 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_31777__$1 = state_31777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31777__$1,(2),inst_31716);
} else {
if((state_val_31778 === (4))){
var inst_31775 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31777__$1,inst_31775);
} else {
if((state_val_31778 === (15))){
var inst_31747 = (state_31777[(7)]);
var inst_31764 = (state_31777[(2)]);
var inst_31765 = cljs.core.next.call(null,inst_31747);
var inst_31727 = inst_31765;
var inst_31728 = null;
var inst_31729 = (0);
var inst_31730 = (0);
var state_31777__$1 = (function (){var statearr_31780 = state_31777;
(statearr_31780[(8)] = inst_31764);

(statearr_31780[(9)] = inst_31729);

(statearr_31780[(10)] = inst_31727);

(statearr_31780[(11)] = inst_31728);

(statearr_31780[(12)] = inst_31730);

return statearr_31780;
})();
var statearr_31781_31806 = state_31777__$1;
(statearr_31781_31806[(2)] = null);

(statearr_31781_31806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (13))){
var inst_31747 = (state_31777[(7)]);
var inst_31756 = cljs.core.first.call(null,inst_31747);
var inst_31757 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_31758 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_31759 = [inst_31758,klipse_clj.repl.current_ns_eval];
var inst_31760 = cljs.core.PersistentHashMap.fromArrays(inst_31757,inst_31759);
var inst_31761 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_31756,inst_31760);
var inst_31762 = cljs.core.first.call(null,inst_31761);
var state_31777__$1 = state_31777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31777__$1,(15),inst_31762);
} else {
if((state_val_31778 === (6))){
var inst_31727 = (state_31777[(10)]);
var inst_31747 = (state_31777[(7)]);
var inst_31747__$1 = cljs.core.seq.call(null,inst_31727);
var state_31777__$1 = (function (){var statearr_31782 = state_31777;
(statearr_31782[(7)] = inst_31747__$1);

return statearr_31782;
})();
if(inst_31747__$1){
var statearr_31783_31807 = state_31777__$1;
(statearr_31783_31807[(1)] = (9));

} else {
var statearr_31784_31808 = state_31777__$1;
(statearr_31784_31808[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (3))){
var inst_31729 = (state_31777[(9)]);
var inst_31730 = (state_31777[(12)]);
var inst_31732 = (inst_31730 < inst_31729);
var inst_31733 = inst_31732;
var state_31777__$1 = state_31777;
if(cljs.core.truth_(inst_31733)){
var statearr_31785_31809 = state_31777__$1;
(statearr_31785_31809[(1)] = (5));

} else {
var statearr_31786_31810 = state_31777__$1;
(statearr_31786_31810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (12))){
var inst_31747 = (state_31777[(7)]);
var inst_31751 = cljs.core.chunk_first.call(null,inst_31747);
var inst_31752 = cljs.core.chunk_rest.call(null,inst_31747);
var inst_31753 = cljs.core.count.call(null,inst_31751);
var inst_31727 = inst_31752;
var inst_31728 = inst_31751;
var inst_31729 = inst_31753;
var inst_31730 = (0);
var state_31777__$1 = (function (){var statearr_31787 = state_31777;
(statearr_31787[(9)] = inst_31729);

(statearr_31787[(10)] = inst_31727);

(statearr_31787[(11)] = inst_31728);

(statearr_31787[(12)] = inst_31730);

return statearr_31787;
})();
var statearr_31788_31811 = state_31777__$1;
(statearr_31788_31811[(2)] = null);

(statearr_31788_31811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (2))){
var inst_31718 = (state_31777[(2)]);
var inst_31723 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31724 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg inferred-type]])"];
var inst_31725 = (new cljs.core.PersistentVector(null,2,(5),inst_31723,inst_31724,null));
var inst_31726 = cljs.core.seq.call(null,inst_31725);
var inst_31727 = inst_31726;
var inst_31728 = null;
var inst_31729 = (0);
var inst_31730 = (0);
var state_31777__$1 = (function (){var statearr_31789 = state_31777;
(statearr_31789[(9)] = inst_31729);

(statearr_31789[(10)] = inst_31727);

(statearr_31789[(13)] = inst_31718);

(statearr_31789[(11)] = inst_31728);

(statearr_31789[(12)] = inst_31730);

return statearr_31789;
})();
var statearr_31790_31812 = state_31777__$1;
(statearr_31790_31812[(2)] = null);

(statearr_31790_31812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (11))){
var inst_31771 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31791_31813 = state_31777__$1;
(statearr_31791_31813[(2)] = inst_31771);

(statearr_31791_31813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (9))){
var inst_31747 = (state_31777[(7)]);
var inst_31749 = cljs.core.chunked_seq_QMARK_.call(null,inst_31747);
var state_31777__$1 = state_31777;
if(inst_31749){
var statearr_31792_31814 = state_31777__$1;
(statearr_31792_31814[(1)] = (12));

} else {
var statearr_31793_31815 = state_31777__$1;
(statearr_31793_31815[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (5))){
var inst_31728 = (state_31777[(11)]);
var inst_31730 = (state_31777[(12)]);
var inst_31735 = cljs.core._nth.call(null,inst_31728,inst_31730);
var inst_31736 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_31737 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_31738 = [inst_31737,klipse_clj.repl.current_ns_eval];
var inst_31739 = cljs.core.PersistentHashMap.fromArrays(inst_31736,inst_31738);
var inst_31740 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_31735,inst_31739);
var inst_31741 = cljs.core.first.call(null,inst_31740);
var state_31777__$1 = state_31777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31777__$1,(8),inst_31741);
} else {
if((state_val_31778 === (14))){
var inst_31768 = (state_31777[(2)]);
var state_31777__$1 = state_31777;
var statearr_31797_31816 = state_31777__$1;
(statearr_31797_31816[(2)] = inst_31768);

(statearr_31797_31816[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (10))){
var state_31777__$1 = state_31777;
var statearr_31798_31817 = state_31777__$1;
(statearr_31798_31817[(2)] = null);

(statearr_31798_31817[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31778 === (8))){
var inst_31729 = (state_31777[(9)]);
var inst_31727 = (state_31777[(10)]);
var inst_31728 = (state_31777[(11)]);
var inst_31730 = (state_31777[(12)]);
var inst_31743 = (state_31777[(2)]);
var inst_31744 = (inst_31730 + (1));
var tmp31794 = inst_31729;
var tmp31795 = inst_31727;
var tmp31796 = inst_31728;
var inst_31727__$1 = tmp31795;
var inst_31728__$1 = tmp31796;
var inst_31729__$1 = tmp31794;
var inst_31730__$1 = inst_31744;
var state_31777__$1 = (function (){var statearr_31799 = state_31777;
(statearr_31799[(9)] = inst_31729__$1);

(statearr_31799[(10)] = inst_31727__$1);

(statearr_31799[(11)] = inst_31728__$1);

(statearr_31799[(14)] = inst_31743);

(statearr_31799[(12)] = inst_31730__$1);

return statearr_31799;
})();
var statearr_31800_31818 = state_31777__$1;
(statearr_31800_31818[(2)] = null);

(statearr_31800_31818[(1)] = (3));


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
var statearr_31801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31801[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto__);

(statearr_31801[(1)] = (1));

return statearr_31801;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto____1 = (function (state_31777){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_31777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e31802){if((e31802 instanceof Object)){
var ex__15526__auto__ = e31802;
var statearr_31803_31819 = state_31777;
(statearr_31803_31819[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31820 = state_31777;
state_31777 = G__31820;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto__ = function(state_31777){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto____1.call(this,state_31777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_31804 = f__15620__auto__.call(null);
(statearr_31804[(6)] = c__15619__auto__);

return statearr_31804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_31823){
var state_val_31824 = (state_31823[(1)]);
if((state_val_31824 === (1))){
var inst_31821 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_31823__$1 = state_31823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31823__$1,inst_31821);
} else {
return null;
}
});
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_31825 = [null,null,null,null,null,null,null];
(statearr_31825[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__);

(statearr_31825[(1)] = (1));

return statearr_31825;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____1 = (function (state_31823){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_31823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e31826){if((e31826 instanceof Object)){
var ex__15526__auto__ = e31826;
var statearr_31827_31829 = state_31823;
(statearr_31827_31829[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31830 = state_31823;
state_31823 = G__31830;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__ = function(state_31823){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____1.call(this,state_31823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_31828 = f__15620__auto__.call(null);
(statearr_31828[(6)] = c__15619__auto__);

return statearr_31828;
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
}catch (e31831){if((e31831 instanceof Object)){
var e = e31831;

return e;
} else {
throw e31831;

}
}});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__31832){
var map__31833 = p__31832;
var map__31833__$1 = cljs.core.__destructure_map.call(null,map__31833);
var print_length = cljs.core.get.call(null,map__31833__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__31833__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__31835 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__31836 = print_length;
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__31836);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31837_31841 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31838_31842 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31839_31843 = true;
var _STAR_print_fn_STAR__temp_val__31840_31844 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31839_31843);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31840_31844);

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__5041__auto__ = typeof value === 'string';
if(and__5041__auto__){
return beautify_strings;
} else {
return and__5041__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31838_31842);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31837_31841);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})()], null);
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__31835);
}}catch (e31834){if((e31834 instanceof Object)){
var e = e31834;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("klipse","print-error","klipse/print-error",-136370564)], null),cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263)], null))))], null);
} else {
throw e31834;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__31845,verbose_QMARK_,current_ns){
var map__31846 = p__31845;
var map__31846__$1 = cljs.core.__destructure_map.call(null,map__31846);
var ns = cljs.core.get.call(null,map__31846__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__31846__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__31846__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__31846__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__31846__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__31846__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__31847,opts){
var map__31848 = p__31847;
var map__31848__$1 = cljs.core.__destructure_map.call(null,map__31848);
var args = map__31848__$1;
var ns = cljs.core.get.call(null,map__31848__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__31848__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__31848__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__31848__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__31848__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__31848__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
if(cljs.core.not.call(null,error)){
return klipse_clj.lang.clojure.display.call(null,value,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,error)], null);
}
});
klipse_clj.lang.clojure.result_as_prepl_map = (function klipse_clj$lang$clojure$result_as_prepl_map(form_str,p__31849,opts){
var map__31850 = p__31849;
var map__31850__$1 = cljs.core.__destructure_map.call(null,map__31850);
var args = map__31850__$1;
var ns = cljs.core.get.call(null,map__31850__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__31850__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__31850__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__31850__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__31850__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__31850__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var vec__31851 = klipse_clj.lang.clojure.result_as_str.call(null,args,opts);
var status = cljs.core.nth.call(null,vec__31851,(0),null);
var val = cljs.core.nth.call(null,vec__31851,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status))?new cljs.core.Keyword(null,"err","err",-2089457205):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"form","form",-1624062471),form_str], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__31854){
var map__31855 = p__31854;
var map__31855__$1 = cljs.core.__destructure_map.call(null,map__31855);
var form = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__31856){
var map__31857 = p__31856;
var map__31857__$1 = cljs.core.__destructure_map.call(null,map__31857);
var foo = map__31857__$1;
var value = cljs.core.get.call(null,map__31857__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__31857__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__31858){
var map__31859 = p__31858;
var map__31859__$1 = cljs.core.__destructure_map.call(null,map__31859);
var args = map__31859__$1;
var file = cljs.core.get.call(null,map__31859__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__31859__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__31859__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__31859__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__31859__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__31859__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__31860){
var map__31861 = p__31860;
var map__31861__$1 = cljs.core.__destructure_map.call(null,map__31861);
var source = cljs.core.get.call(null,map__31861__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__31862){
var map__31863 = p__31862;
var map__31863__$1 = cljs.core.__destructure_map.call(null,map__31863);
var static_fns = cljs.core.get.call(null,map__31863__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__31863__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__31863__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__31863__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__31863__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__31863__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__31863__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
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
var c__15619__auto___31895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_31880){
var state_val_31881 = (state_31880[(1)]);
if((state_val_31881 === (1))){
var inst_31864 = cljs.core.PersistentVector.EMPTY;
var inst_31865 = inst_31864;
var state_31880__$1 = (function (){var statearr_31882 = state_31880;
(statearr_31882[(7)] = inst_31865);

return statearr_31882;
})();
var statearr_31883_31896 = state_31880__$1;
(statearr_31883_31896[(2)] = null);

(statearr_31883_31896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (2))){
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31880__$1,(4),c);
} else {
if((state_val_31881 === (3))){
var inst_31878 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31880__$1,inst_31878);
} else {
if((state_val_31881 === (4))){
var inst_31868 = (state_31880[(8)]);
var inst_31868__$1 = (state_31880[(2)]);
var inst_31869 = (inst_31868__$1 == null);
var state_31880__$1 = (function (){var statearr_31884 = state_31880;
(statearr_31884[(8)] = inst_31868__$1);

return statearr_31884;
})();
if(cljs.core.truth_(inst_31869)){
var statearr_31885_31897 = state_31880__$1;
(statearr_31885_31897[(1)] = (5));

} else {
var statearr_31886_31898 = state_31880__$1;
(statearr_31886_31898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (5))){
var inst_31865 = (state_31880[(7)]);
var inst_31871 = cljs.core.async.put_BANG_.call(null,d,inst_31865);
var state_31880__$1 = state_31880;
var statearr_31887_31899 = state_31880__$1;
(statearr_31887_31899[(2)] = inst_31871);

(statearr_31887_31899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (6))){
var inst_31865 = (state_31880[(7)]);
var inst_31868 = (state_31880[(8)]);
var inst_31873 = cljs.core.conj.call(null,inst_31865,inst_31868);
var inst_31865__$1 = inst_31873;
var state_31880__$1 = (function (){var statearr_31888 = state_31880;
(statearr_31888[(7)] = inst_31865__$1);

return statearr_31888;
})();
var statearr_31889_31900 = state_31880__$1;
(statearr_31889_31900[(2)] = null);

(statearr_31889_31900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (7))){
var inst_31876 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
var statearr_31890_31901 = state_31880__$1;
(statearr_31890_31901[(2)] = inst_31876);

(statearr_31890_31901[(1)] = (3));


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
var statearr_31891 = [null,null,null,null,null,null,null,null,null];
(statearr_31891[(0)] = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto__);

(statearr_31891[(1)] = (1));

return statearr_31891;
});
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto____1 = (function (state_31880){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_31880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e31892){if((e31892 instanceof Object)){
var ex__15526__auto__ = e31892;
var statearr_31893_31902 = state_31880;
(statearr_31893_31902[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31903 = state_31880;
state_31880 = G__31903;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto__ = function(state_31880){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto____1.call(this,state_31880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_31894 = f__15620__auto__.call(null);
(statearr_31894[(6)] = c__15619__auto___31895);

return statearr_31894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return d;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__31904){
var map__31905 = p__31904;
var map__31905__$1 = cljs.core.__destructure_map.call(null,map__31905);
var static_fns = cljs.core.get.call(null,map__31905__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__31905__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__31905__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__31905__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__31905__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__31905__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var res_chan = cljs.core.async.chan.call(null);
var warnings_chan = cljs.core.async.chan.call(null,(1024));
var agg_warnings_chan = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__5128__auto__ = max_eval_duration;
var y__5129__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var _STAR_cljs_warning_handlers_STAR__orig_val__31906 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__31907 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,klipse_clj.lang.clojure.warning_handler,warnings_chan)], null);
(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__31907);

try{try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),(cljs.env._STAR_compiler_STAR_ = st),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),(function (res){
cljs.core.async.close_BANG_.call(null,warnings_chan);

var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_31916){
var state_val_31917 = (state_31916[(1)]);
if((state_val_31917 === (1))){
var inst_31908 = klipse_clj.lang.clojure.read_until_closed_BANG_.call(null,warnings_chan);
var state_31916__$1 = state_31916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31916__$1,(2),inst_31908);
} else {
if((state_val_31917 === (2))){
var inst_31910 = (state_31916[(2)]);
var inst_31911 = klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);
var inst_31912 = cljs.core.async.put_BANG_.call(null,res_chan,res);
var inst_31913 = clojure.string.join.call(null,"",inst_31910);
var inst_31914 = cljs.core.async.put_BANG_.call(null,agg_warnings_chan,inst_31913);
var state_31916__$1 = (function (){var statearr_31918 = state_31916;
(statearr_31918[(7)] = inst_31912);

(statearr_31918[(8)] = inst_31911);

return statearr_31918;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31916__$1,inst_31914);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____0 = (function (){
var statearr_31919 = [null,null,null,null,null,null,null,null,null];
(statearr_31919[(0)] = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__);

(statearr_31919[(1)] = (1));

return statearr_31919;
});
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____1 = (function (state_31916){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_31916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e31920){if((e31920 instanceof Object)){
var ex__15526__auto__ = e31920;
var statearr_31921_31923 = state_31916;
(statearr_31921_31923[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31924 = state_31916;
state_31916 = G__31924;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__ = function(state_31916){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____1.call(this,state_31916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_31922 = f__15620__auto__.call(null);
(statearr_31922[(6)] = c__15619__auto__);

return statearr_31922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
}));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,agg_warnings_chan], null);
}finally {}}finally {(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__31906);
}});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5802__auto__)){
var ch = temp__5802__auto__;
var G__31925 = cljs.core.conj.call(null,res,ch);
res = G__31925;
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
var _STAR_alias_map_STAR__orig_val__31926 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__31927 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__31928 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__31929 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__31930 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__31931 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__31932 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__31933 = ns;
var _STAR_cljs_ns_STAR__temp_val__31934 = ns;
var _STAR_compiler_STAR__temp_val__31935 = st;
var resolve_symbol_temp_val__31936 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__31937 = klipse_clj.lang.clojure.data_readers.call(null);
(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__31932);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__31933);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__31934);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__31935);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__31936);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__31937);

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
}finally {(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__31931);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__31930);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__31929);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__31928);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__31927);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__31926);
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__31941 = arguments.length;
switch (G__31941) {
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
var _STAR_alias_map_STAR__orig_val__31942 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__31943 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__31944 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__31945 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__31946 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__31947 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__31948 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__31949 = ns;
var _STAR_cljs_ns_STAR__temp_val__31950 = ns;
var _STAR_compiler_STAR__temp_val__31951 = st;
var resolve_symbol_temp_val__31952 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__31953 = klipse_clj.lang.clojure.data_readers.call(null);
(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__31948);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__31949);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__31950);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__31951);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__31952);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__31953);

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__31947);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__31946);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__31945);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__31944);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__31943);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__31942);
}}));

(klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3);

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__31958 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__31958,(0),null);
var rest_s = cljs.core.nth.call(null,vec__31958,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__31961 = rest_s;
var G__31962 = res;
s__$1 = G__31961;
res = G__31962;
continue;
} else {
var G__31963 = rest_s;
var G__31964 = cljs.core.conj.call(null,res,exp);
s__$1 = G__31963;
res = G__31964;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__31965){
var map__31966 = p__31965;
var map__31966__$1 = cljs.core.__destructure_map.call(null,map__31966);
var result_element = cljs.core.get.call(null,map__31966__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__31966__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
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
var c__15619__auto___32070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32042){
var state_val_32043 = (state_32042[(1)]);
if((state_val_32043 === (7))){
var inst_32038 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
var statearr_32044_32071 = state_32042__$1;
(statearr_32044_32071[(2)] = inst_32038);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32042__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (1))){
var state_32042__$1 = state_32042;
var statearr_32045_32072 = state_32042__$1;
(statearr_32045_32072[(2)] = null);

(statearr_32045_32072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32042,(3),Object,null,(2));
var inst_31980 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_32042__$1 = state_32042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32042__$1,(5),inst_31980);
} else {
if((state_val_32043 === (15))){
var inst_31997 = (state_32042[(7)]);
var inst_32025 = (state_32042[(8)]);
var inst_32016 = (state_32042[(9)]);
var inst_32027 = (state_32042[(2)]);
var inst_32028 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31997),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32027)].join('');
var inst_31995 = inst_32025;
var inst_31996 = inst_32016;
var inst_31997__$1 = inst_32028;
var state_32042__$1 = (function (){var statearr_32046 = state_32042;
(statearr_32046[(7)] = inst_31997__$1);

(statearr_32046[(10)] = inst_31996);

(statearr_32046[(11)] = inst_31995);

return statearr_32046;
})();
var statearr_32047_32073 = state_32042__$1;
(statearr_32047_32073[(2)] = null);

(statearr_32047_32073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (13))){
var inst_32014 = (state_32042[(12)]);
var inst_32003 = (state_32042[(13)]);
var inst_32023 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_32024 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_32025 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_32003,inst_32023,inst_32024);
var state_32042__$1 = (function (){var statearr_32048 = state_32042;
(statearr_32048[(8)] = inst_32025);

return statearr_32048;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32042__$1,(15),inst_32014);
} else {
if((state_val_32043 === (6))){
var inst_32002 = (state_32042[(14)]);
var inst_31995 = (state_32042[(11)]);
var inst_32002__$1 = cljs.core.nth.call(null,inst_31995,(0),null);
var inst_32003 = cljs.core.nth.call(null,inst_31995,(1),null);
var inst_32004 = cljs.core.empty_QMARK_.call(null,inst_32002__$1);
var inst_32005 = (!(inst_32004));
var state_32042__$1 = (function (){var statearr_32049 = state_32042;
(statearr_32049[(13)] = inst_32003);

(statearr_32049[(14)] = inst_32002__$1);

return statearr_32049;
})();
if(inst_32005){
var statearr_32050_32074 = state_32042__$1;
(statearr_32050_32074[(1)] = (8));

} else {
var statearr_32051_32075 = state_32042__$1;
(statearr_32051_32075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (3))){
var inst_31967 = (state_32042[(2)]);
var inst_31968 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_31969 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_31970 = [inst_31967];
var inst_31971 = cljs.core.PersistentHashMap.fromArrays(inst_31969,inst_31970);
var inst_31972 = cljs.core.async.put_BANG_.call(null,res_chan,inst_31971);
var inst_31973 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_31974 = [inst_31967];
var inst_31975 = cljs.core.PersistentHashMap.fromArrays(inst_31973,inst_31974);
var inst_31976 = klipse_clj.lang.clojure.populate_err.call(null,inst_31975,opts);
var state_32042__$1 = (function (){var statearr_32052 = state_32042;
(statearr_32052[(15)] = inst_31968);

(statearr_32052[(16)] = inst_31972);

return statearr_32052;
})();
var statearr_32053_32076 = state_32042__$1;
(statearr_32053_32076[(2)] = inst_31976);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32042__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (12))){
var inst_32016 = (state_32042[(9)]);
var inst_32019 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_32020 = cljs.core.async.put_BANG_.call(null,res_chan,inst_32016);
var inst_32021 = klipse_clj.lang.clojure.populate_err.call(null,inst_32016,opts);
var state_32042__$1 = (function (){var statearr_32054 = state_32042;
(statearr_32054[(17)] = inst_32020);

(statearr_32054[(18)] = inst_32019);

return statearr_32054;
})();
var statearr_32055_32077 = state_32042__$1;
(statearr_32055_32077[(2)] = inst_32021);

(statearr_32055_32077[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (2))){
var inst_32040 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32042__$1,inst_32040);
} else {
if((state_val_32043 === (11))){
var inst_32016 = (state_32042[(9)]);
var inst_32016__$1 = (state_32042[(2)]);
var inst_32017 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32016__$1);
var state_32042__$1 = (function (){var statearr_32056 = state_32042;
(statearr_32056[(9)] = inst_32016__$1);

return statearr_32056;
})();
if(cljs.core.truth_(inst_32017)){
var statearr_32057_32078 = state_32042__$1;
(statearr_32057_32078[(1)] = (12));

} else {
var statearr_32058_32079 = state_32042__$1;
(statearr_32058_32079[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (9))){
var inst_31997 = (state_32042[(7)]);
var inst_31996 = (state_32042[(10)]);
var inst_32033 = cljs.core.async.put_BANG_.call(null,warnings_chan,inst_31997);
var inst_32034 = cljs.core.async.put_BANG_.call(null,res_chan,inst_31996);
var state_32042__$1 = (function (){var statearr_32059 = state_32042;
(statearr_32059[(19)] = inst_32033);

return statearr_32059;
})();
var statearr_32060_32080 = state_32042__$1;
(statearr_32060_32080[(2)] = inst_32034);

(statearr_32060_32080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (5))){
var inst_31982 = (state_32042[(2)]);
var inst_31990 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_31991 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_31992 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_31990,inst_31991);
var inst_31993 = cljs.core.nth.call(null,inst_31992,(0),null);
var inst_31994 = cljs.core.nth.call(null,inst_31992,(1),null);
var inst_31995 = inst_31992;
var inst_31996 = null;
var inst_31997 = "";
var state_32042__$1 = (function (){var statearr_32061 = state_32042;
(statearr_32061[(7)] = inst_31997);

(statearr_32061[(10)] = inst_31996);

(statearr_32061[(20)] = inst_31982);

(statearr_32061[(11)] = inst_31995);

(statearr_32061[(21)] = inst_31993);

(statearr_32061[(22)] = inst_31994);

return statearr_32061;
})();
var statearr_32062_32081 = state_32042__$1;
(statearr_32062_32081[(2)] = null);

(statearr_32062_32081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (14))){
var inst_32031 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
var statearr_32063_32082 = state_32042__$1;
(statearr_32063_32082[(2)] = inst_32031);

(statearr_32063_32082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (10))){
var inst_32036 = (state_32042[(2)]);
var state_32042__$1 = state_32042;
var statearr_32064_32083 = state_32042__$1;
(statearr_32064_32083[(2)] = inst_32036);

(statearr_32064_32083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32043 === (8))){
var inst_32002 = (state_32042[(14)]);
var inst_32010 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_32011 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_32010,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_32012 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_32002,inst_32011);
var inst_32013 = cljs.core.nth.call(null,inst_32012,(0),null);
var inst_32014 = cljs.core.nth.call(null,inst_32012,(1),null);
var state_32042__$1 = (function (){var statearr_32065 = state_32042;
(statearr_32065[(12)] = inst_32014);

return statearr_32065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32042__$1,(11),inst_32013);
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
var statearr_32066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32066[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto__);

(statearr_32066[(1)] = (1));

return statearr_32066;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto____1 = (function (state_32042){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32067){if((e32067 instanceof Object)){
var ex__15526__auto__ = e32067;
var statearr_32068_32084 = state_32042;
(statearr_32068_32084[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32085 = state_32042;
state_32042 = G__32085;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto__ = function(state_32042){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto____1.call(this,state_32042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32069 = f__15620__auto__.call(null);
(statearr_32069[(6)] = c__15619__auto___32070);

return statearr_32069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,warnings_chan], null);
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32143){
var state_val_32144 = (state_32143[(1)]);
if((state_val_32144 === (7))){
var inst_32111 = (state_32143[(7)]);
var inst_32116 = klipse_clj.repl.create_state_compile.call(null);
var inst_32117 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_32116,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_32118 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_32111,inst_32117);
var state_32143__$1 = state_32143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32143__$1,(10),inst_32118);
} else {
if((state_val_32144 === (1))){
var state_32143__$1 = state_32143;
var statearr_32145_32166 = state_32143__$1;
(statearr_32145_32166[(2)] = null);

(statearr_32145_32166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32143,(3),Object,null,(2));
var inst_32100 = klipse_clj.repl.create_state_compile.call(null);
var inst_32101 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_32102 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_32100,inst_32101);
var inst_32103 = cljs.core.nth.call(null,inst_32102,(0),null);
var inst_32104 = cljs.core.nth.call(null,inst_32102,(1),null);
var inst_32105 = inst_32102;
var inst_32106 = "";
var state_32143__$1 = (function (){var statearr_32146 = state_32143;
(statearr_32146[(8)] = inst_32105);

(statearr_32146[(9)] = inst_32104);

(statearr_32146[(10)] = inst_32106);

(statearr_32146[(11)] = inst_32103);

return statearr_32146;
})();
var statearr_32147_32167 = state_32143__$1;
(statearr_32147_32167[(2)] = null);

(statearr_32147_32167[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (13))){
var inst_32131 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
var statearr_32148_32168 = state_32143__$1;
(statearr_32148_32168[(2)] = inst_32131);

(statearr_32148_32168[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (6))){
var inst_32139 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
var statearr_32149_32169 = state_32143__$1;
(statearr_32149_32169[(2)] = inst_32139);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32143__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (3))){
var inst_32086 = (state_32143[(2)]);
var inst_32087 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_32088 = [inst_32086];
var inst_32089 = cljs.core.PersistentHashMap.fromArrays(inst_32087,inst_32088);
var state_32143__$1 = state_32143;
var statearr_32150_32170 = state_32143__$1;
(statearr_32150_32170[(2)] = inst_32089);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32143__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (12))){
var inst_32106 = (state_32143[(10)]);
var inst_32112 = (state_32143[(12)]);
var inst_32120 = (state_32143[(13)]);
var inst_32124 = klipse_clj.repl.create_state_compile.call(null);
var inst_32125 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_32126 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_32112,inst_32124,inst_32125);
var inst_32127 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_32120);
var inst_32128 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32106),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32127)].join('');
var inst_32105 = inst_32126;
var inst_32106__$1 = inst_32128;
var state_32143__$1 = (function (){var statearr_32151 = state_32143;
(statearr_32151[(8)] = inst_32105);

(statearr_32151[(10)] = inst_32106__$1);

return statearr_32151;
})();
var statearr_32152_32171 = state_32143__$1;
(statearr_32152_32171[(2)] = null);

(statearr_32152_32171[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (2))){
var inst_32141 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32143__$1,inst_32141);
} else {
if((state_val_32144 === (11))){
var inst_32120 = (state_32143[(13)]);
var state_32143__$1 = state_32143;
var statearr_32153_32172 = state_32143__$1;
(statearr_32153_32172[(2)] = inst_32120);

(statearr_32153_32172[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (9))){
var inst_32137 = (state_32143[(2)]);
var state_32143__$1 = state_32143;
var statearr_32154_32173 = state_32143__$1;
(statearr_32154_32173[(2)] = inst_32137);

(statearr_32154_32173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (5))){
var inst_32105 = (state_32143[(8)]);
var inst_32111 = (state_32143[(7)]);
var inst_32111__$1 = cljs.core.nth.call(null,inst_32105,(0),null);
var inst_32112 = cljs.core.nth.call(null,inst_32105,(1),null);
var inst_32113 = cljs.core.empty_QMARK_.call(null,inst_32111__$1);
var inst_32114 = (!(inst_32113));
var state_32143__$1 = (function (){var statearr_32155 = state_32143;
(statearr_32155[(7)] = inst_32111__$1);

(statearr_32155[(12)] = inst_32112);

return statearr_32155;
})();
if(inst_32114){
var statearr_32156_32174 = state_32143__$1;
(statearr_32156_32174[(1)] = (7));

} else {
var statearr_32157_32175 = state_32143__$1;
(statearr_32157_32175[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (10))){
var inst_32120 = (state_32143[(13)]);
var inst_32120__$1 = (state_32143[(2)]);
var inst_32121 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32120__$1);
var state_32143__$1 = (function (){var statearr_32158 = state_32143;
(statearr_32158[(13)] = inst_32120__$1);

return statearr_32158;
})();
if(cljs.core.truth_(inst_32121)){
var statearr_32159_32176 = state_32143__$1;
(statearr_32159_32176[(1)] = (11));

} else {
var statearr_32160_32177 = state_32143__$1;
(statearr_32160_32177[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32144 === (8))){
var inst_32106 = (state_32143[(10)]);
var inst_32133 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_32134 = [inst_32106];
var inst_32135 = cljs.core.PersistentHashMap.fromArrays(inst_32133,inst_32134);
var state_32143__$1 = state_32143;
var statearr_32161_32178 = state_32143__$1;
(statearr_32161_32178[(2)] = inst_32135);

(statearr_32161_32178[(1)] = (9));


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
var statearr_32162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32162[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto__);

(statearr_32162[(1)] = (1));

return statearr_32162;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto____1 = (function (state_32143){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32163){if((e32163 instanceof Object)){
var ex__15526__auto__ = e32163;
var statearr_32164_32179 = state_32143;
(statearr_32164_32179[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32180 = state_32143;
state_32143 = G__32180;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto__ = function(state_32143){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto____1.call(this,state_32143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32165 = f__15620__auto__.call(null);
(statearr_32165[(6)] = c__15619__auto__);

return statearr_32165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse_clj.lang.clojure.eval_async_map = (function klipse_clj$lang$clojure$eval_async_map(s,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32196){
var state_val_32197 = (state_32196[(1)]);
if((state_val_32197 === (1))){
var inst_32184 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_32185 = cljs.core.nth.call(null,inst_32184,(0),null);
var inst_32186 = cljs.core.nth.call(null,inst_32184,(1),null);
var state_32196__$1 = (function (){var statearr_32198 = state_32196;
(statearr_32198[(7)] = inst_32186);

return statearr_32198;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32196__$1,(2),inst_32185);
} else {
if((state_val_32197 === (2))){
var inst_32186 = (state_32196[(7)]);
var inst_32188 = (state_32196[(2)]);
var inst_32189 = klipse_clj.lang.clojure.result_as_str.call(null,inst_32188,opts);
var state_32196__$1 = (function (){var statearr_32199 = state_32196;
(statearr_32199[(8)] = inst_32189);

return statearr_32199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32196__$1,(3),inst_32186);
} else {
if((state_val_32197 === (3))){
var inst_32189 = (state_32196[(8)]);
var inst_32191 = (state_32196[(2)]);
var inst_32192 = [new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"res","res",-1395007879)];
var inst_32193 = [inst_32191,inst_32189];
var inst_32194 = cljs.core.PersistentHashMap.fromArrays(inst_32192,inst_32193);
var state_32196__$1 = state_32196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32196__$1,inst_32194);
} else {
return null;
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____0 = (function (){
var statearr_32200 = [null,null,null,null,null,null,null,null,null];
(statearr_32200[(0)] = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__);

(statearr_32200[(1)] = (1));

return statearr_32200;
});
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____1 = (function (state_32196){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32201){if((e32201 instanceof Object)){
var ex__15526__auto__ = e32201;
var statearr_32202_32204 = state_32196;
(statearr_32202_32204[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32205 = state_32196;
state_32196 = G__32205;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__ = function(state_32196){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____1.call(this,state_32196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32203 = f__15620__auto__.call(null);
(statearr_32203[(6)] = c__15619__auto__);

return statearr_32203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32218){
var state_val_32219 = (state_32218[(1)]);
if((state_val_32219 === (1))){
var inst_32209 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_32210 = cljs.core.nth.call(null,inst_32209,(0),null);
var inst_32211 = cljs.core.nth.call(null,inst_32209,(1),null);
var state_32218__$1 = (function (){var statearr_32220 = state_32218;
(statearr_32220[(7)] = inst_32211);

return statearr_32220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32218__$1,(2),inst_32210);
} else {
if((state_val_32219 === (2))){
var inst_32211 = (state_32218[(7)]);
var inst_32213 = (state_32218[(2)]);
var inst_32214 = klipse_clj.lang.clojure.result_as_str.call(null,inst_32213,opts);
var state_32218__$1 = (function (){var statearr_32221 = state_32218;
(statearr_32221[(8)] = inst_32214);

return statearr_32221;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32218__$1,(3),inst_32211);
} else {
if((state_val_32219 === (3))){
var inst_32214 = (state_32218[(8)]);
var inst_32216 = (state_32218[(2)]);
var state_32218__$1 = (function (){var statearr_32222 = state_32218;
(statearr_32222[(9)] = inst_32216);

return statearr_32222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32218__$1,inst_32214);
} else {
return null;
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____0 = (function (){
var statearr_32223 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32223[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__);

(statearr_32223[(1)] = (1));

return statearr_32223;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____1 = (function (state_32218){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32224){if((e32224 instanceof Object)){
var ex__15526__auto__ = e32224;
var statearr_32225_32227 = state_32218;
(statearr_32225_32227[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32228 = state_32218;
state_32218 = G__32228;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__ = function(state_32218){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____1.call(this,state_32218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32226 = f__15620__auto__.call(null);
(statearr_32226[(6)] = c__15619__auto__);

return statearr_32226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__32230 = arguments.length;
switch (G__32230) {
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32237){
var state_val_32238 = (state_32237[(1)]);
if((state_val_32238 === (1))){
var inst_32231 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_32232 = cljs.core.first.call(null,inst_32231);
var state_32237__$1 = state_32237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32237__$1,(2),inst_32232);
} else {
if((state_val_32238 === (2))){
var inst_32234 = (state_32237[(2)]);
var inst_32235 = klipse_clj.lang.clojure.read_result.call(null,inst_32234);
var state_32237__$1 = state_32237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32237__$1,inst_32235);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$state_machine__15523__auto____0 = (function (){
var statearr_32239 = [null,null,null,null,null,null,null];
(statearr_32239[(0)] = klipse_clj$lang$clojure$state_machine__15523__auto__);

(statearr_32239[(1)] = (1));

return statearr_32239;
});
var klipse_clj$lang$clojure$state_machine__15523__auto____1 = (function (state_32237){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32240){if((e32240 instanceof Object)){
var ex__15526__auto__ = e32240;
var statearr_32241_32244 = state_32237;
(statearr_32241_32244[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32245 = state_32237;
state_32237 = G__32245;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15523__auto__ = function(state_32237){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15523__auto____1.call(this,state_32237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15523__auto____0;
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15523__auto____1;
return klipse_clj$lang$clojure$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32242 = f__15620__auto__.call(null);
(statearr_32242[(6)] = c__15619__auto__);

return statearr_32242;
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32252){
var state_val_32253 = (state_32252[(1)]);
if((state_val_32253 === (1))){
var inst_32246 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_32252__$1 = state_32252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32252__$1,(2),inst_32246);
} else {
if((state_val_32253 === (2))){
var inst_32248 = (state_32252[(2)]);
var inst_32249 = cljs.core.clj__GT_js.call(null,inst_32248);
var inst_32250 = cb.call(null,inst_32249);
var state_32252__$1 = state_32252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32252__$1,inst_32250);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____0 = (function (){
var statearr_32254 = [null,null,null,null,null,null,null];
(statearr_32254[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__);

(statearr_32254[(1)] = (1));

return statearr_32254;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____1 = (function (state_32252){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32255){if((e32255 instanceof Object)){
var ex__15526__auto__ = e32255;
var statearr_32256_32258 = state_32252;
(statearr_32256_32258[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32259 = state_32252;
state_32252 = G__32259;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__ = function(state_32252){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____1.call(this,state_32252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32257 = f__15620__auto__.call(null);
(statearr_32257[(6)] = c__15619__auto__);

return statearr_32257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__32261 = arguments.length;
switch (G__32261) {
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32267){
var state_val_32268 = (state_32267[(1)]);
if((state_val_32268 === (1))){
var inst_32262 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_32267__$1 = state_32267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32267__$1,(2),inst_32262);
} else {
if((state_val_32268 === (2))){
var inst_32264 = (state_32267[(2)]);
var inst_32265 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_32264);
var state_32267__$1 = state_32267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32267__$1,inst_32265);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$state_machine__15523__auto____0 = (function (){
var statearr_32269 = [null,null,null,null,null,null,null];
(statearr_32269[(0)] = klipse_clj$lang$clojure$state_machine__15523__auto__);

(statearr_32269[(1)] = (1));

return statearr_32269;
});
var klipse_clj$lang$clojure$state_machine__15523__auto____1 = (function (state_32267){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32270){if((e32270 instanceof Object)){
var ex__15526__auto__ = e32270;
var statearr_32271_32274 = state_32267;
(statearr_32271_32274[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32275 = state_32267;
state_32267 = G__32275;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15523__auto__ = function(state_32267){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15523__auto____1.call(this,state_32267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15523__auto____0;
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15523__auto____1;
return klipse_clj$lang$clojure$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32272 = f__15620__auto__.call(null);
(statearr_32272[(6)] = c__15619__auto__);

return statearr_32272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
}));

(klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2);

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32281){
var state_val_32282 = (state_32281[(1)]);
if((state_val_32282 === (1))){
var inst_32276 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_32281__$1 = state_32281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32281__$1,(2),inst_32276);
} else {
if((state_val_32282 === (2))){
var inst_32278 = (state_32281[(2)]);
var inst_32279 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_32278);
var state_32281__$1 = state_32281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32281__$1,inst_32279);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____0 = (function (){
var statearr_32283 = [null,null,null,null,null,null,null];
(statearr_32283[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__);

(statearr_32283[(1)] = (1));

return statearr_32283;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____1 = (function (state_32281){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32284){if((e32284 instanceof Object)){
var ex__15526__auto__ = e32284;
var statearr_32285_32287 = state_32281;
(statearr_32285_32287[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32288 = state_32281;
state_32281 = G__32288;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__ = function(state_32281){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____1.call(this,state_32281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32286 = f__15620__auto__.call(null);
(statearr_32286[(6)] = c__15619__auto__);

return statearr_32286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32295){
var state_val_32296 = (state_32295[(1)]);
if((state_val_32296 === (1))){
var inst_32289 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_32295__$1 = state_32295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32295__$1,(2),inst_32289);
} else {
if((state_val_32296 === (2))){
var inst_32291 = (state_32295[(2)]);
var inst_32292 = cljs.core.second.call(null,inst_32291);
var inst_32293 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32292);
var state_32295__$1 = state_32295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32295__$1,inst_32293);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____0 = (function (){
var statearr_32297 = [null,null,null,null,null,null,null];
(statearr_32297[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__);

(statearr_32297[(1)] = (1));

return statearr_32297;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____1 = (function (state_32295){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32298){if((e32298 instanceof Object)){
var ex__15526__auto__ = e32298;
var statearr_32299_32301 = state_32295;
(statearr_32299_32301[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32302 = state_32295;
state_32295 = G__32302;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__ = function(state_32295){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____1.call(this,state_32295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32300 = f__15620__auto__.call(null);
(statearr_32300[(6)] = c__15619__auto__);

return statearr_32300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__32304){
var map__32305 = p__32304;
var map__32305__$1 = cljs.core.__destructure_map.call(null,map__32305);
var opts = map__32305__$1;
var container_id = cljs.core.get.call(null,map__32305__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__32305__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__32305__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__15619__auto___32361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32343){
var state_val_32344 = (state_32343[(1)]);
if((state_val_32344 === (7))){
var inst_32314 = (state_32343[(2)]);
var inst_32319 = (function (){var _STAR_print_newline_STAR__orig_val__32315 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32316 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32317 = true;
return (function (p1__32303_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__32303_SHARP_);
});
})();
var inst_32320 = (cljs.core._STAR_print_newline_STAR_ = true);
var inst_32321 = (cljs.core._STAR_print_fn_STAR_ = inst_32319);
var state_32343__$1 = (function (){var statearr_32345 = state_32343;
(statearr_32345[(7)] = inst_32320);

(statearr_32345[(8)] = inst_32314);

(statearr_32345[(9)] = inst_32321);

return statearr_32345;
})();
var statearr_32346_32362 = state_32343__$1;
(statearr_32346_32362[(2)] = null);

(statearr_32346_32362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (1))){
var inst_32306 = clojure.string.blank_QMARK_.call(null,exp);
var state_32343__$1 = state_32343;
if(inst_32306){
var statearr_32347_32363 = state_32343__$1;
(statearr_32347_32363[(1)] = (2));

} else {
var statearr_32348_32364 = state_32343__$1;
(statearr_32348_32364[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (4))){
var inst_32341 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32343__$1,inst_32341);
} else {
if((state_val_32344 === (6))){
var state_32343__$1 = state_32343;
var statearr_32349_32365 = state_32343__$1;
(statearr_32349_32365[(2)] = null);

(statearr_32349_32365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (3))){
var state_32343__$1 = state_32343;
if(cljs.core.truth_(setup_container_fn)){
var statearr_32350_32366 = state_32343__$1;
(statearr_32350_32366[(1)] = (5));

} else {
var statearr_32351_32367 = state_32343__$1;
(statearr_32351_32367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (2))){
var inst_32308 = cljs.core.async.put_BANG_.call(null,c,"");
var state_32343__$1 = state_32343;
var statearr_32352_32368 = state_32343__$1;
(statearr_32352_32368[(2)] = inst_32308);

(statearr_32352_32368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (11))){
var inst_32331 = (state_32343[(2)]);
var inst_32332 = cljs.core.__destructure_map.call(null,inst_32331);
var inst_32333 = cljs.core.get.call(null,inst_32332,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_32334 = cljs.core.get.call(null,inst_32332,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_32335 = cljs.core.second.call(null,inst_32334);
var inst_32336 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32333),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32335)].join('');
var inst_32337 = cljs.core.async.put_BANG_.call(null,c,inst_32336);
var state_32343__$1 = state_32343;
var statearr_32353_32369 = state_32343__$1;
(statearr_32353_32369[(2)] = inst_32337);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32343__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (9))){
var inst_32322 = (state_32343[(2)]);
var inst_32323 = (cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_);
var inst_32324 = (cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_);
var state_32343__$1 = (function (){var statearr_32354 = state_32343;
(statearr_32354[(10)] = inst_32324);

(statearr_32354[(11)] = inst_32322);

(statearr_32354[(12)] = inst_32323);

return statearr_32354;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32343__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (5))){
var inst_32311 = setup_container_fn.call(null,container_id);
var state_32343__$1 = state_32343;
var statearr_32355_32370 = state_32343__$1;
(statearr_32355_32370[(2)] = inst_32311);

(statearr_32355_32370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32343,null,null,(9),(8));
var inst_32329 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_32343__$1 = state_32343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32343__$1,(11),inst_32329);
} else {
if((state_val_32344 === (8))){
var inst_32339 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
var statearr_32356_32371 = state_32343__$1;
(statearr_32356_32371[(2)] = inst_32339);

(statearr_32356_32371[(1)] = (4));


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
var statearr_32357 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32357[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto__);

(statearr_32357[(1)] = (1));

return statearr_32357;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto____1 = (function (state_32343){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32358){if((e32358 instanceof Object)){
var ex__15526__auto__ = e32358;
var statearr_32359_32372 = state_32343;
(statearr_32359_32372[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32373 = state_32343;
state_32343 = G__32373;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto__ = function(state_32343){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto____1.call(this,state_32343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32360 = f__15620__auto__.call(null);
(statearr_32360[(6)] = c__15619__auto___32361);

return statearr_32360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return c;
});
klipse_clj.lang.clojure.eval_async_prepl = (function klipse_clj$lang$clojure$eval_async_prepl(var_args){
var G__32375 = arguments.length;
switch (G__32375) {
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
var c__15619__auto___32405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32394){
var state_val_32395 = (state_32394[(1)]);
if((state_val_32395 === (1))){
var inst_32378 = (function (){var _STAR_print_fn_STAR__orig_val__32376 = cljs.core._STAR_print_fn_STAR_;
return (function (s__$1){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),s__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"out","out",-910545517)], null));
});
})();
var inst_32379 = (cljs.core._STAR_print_fn_STAR_ = inst_32378);
var state_32394__$1 = (function (){var statearr_32396 = state_32394;
(statearr_32396[(7)] = inst_32379);

return statearr_32396;
})();
var statearr_32397_32406 = state_32394__$1;
(statearr_32397_32406[(2)] = null);

(statearr_32397_32406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32395 === (2))){
var inst_32392 = (state_32394[(2)]);
var state_32394__$1 = state_32394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32394__$1,inst_32392);
} else {
if((state_val_32395 === (3))){
var inst_32380 = (state_32394[(2)]);
var inst_32381 = (cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_);
var state_32394__$1 = (function (){var statearr_32398 = state_32394;
(statearr_32398[(8)] = inst_32380);

(statearr_32398[(9)] = inst_32381);

return statearr_32398;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32394__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32395 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32394,null,null,(3),(2));
var inst_32385 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_32386 = cljs.core.first.call(null,inst_32385);
var state_32394__$1 = state_32394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32394__$1,(5),inst_32386);
} else {
if((state_val_32395 === (5))){
var inst_32388 = (state_32394[(2)]);
var inst_32389 = klipse_clj.lang.clojure.result_as_prepl_map.call(null,s,inst_32388,opts);
var inst_32390 = cljs.core.async.put_BANG_.call(null,c,inst_32389);
var state_32394__$1 = state_32394;
var statearr_32399_32407 = state_32394__$1;
(statearr_32399_32407[(2)] = inst_32390);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32394__$1);

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
var statearr_32400 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32400[(0)] = klipse_clj$lang$clojure$state_machine__15523__auto__);

(statearr_32400[(1)] = (1));

return statearr_32400;
});
var klipse_clj$lang$clojure$state_machine__15523__auto____1 = (function (state_32394){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32401){if((e32401 instanceof Object)){
var ex__15526__auto__ = e32401;
var statearr_32402_32408 = state_32394;
(statearr_32402_32408[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32409 = state_32394;
state_32394 = G__32409;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15523__auto__ = function(state_32394){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15523__auto____1.call(this,state_32394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15523__auto____0;
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15523__auto____1;
return klipse_clj$lang$clojure$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32403 = f__15620__auto__.call(null);
(statearr_32403[(6)] = c__15619__auto___32405);

return statearr_32403;
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

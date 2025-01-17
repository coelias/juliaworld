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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_31987){
var state_val_31988 = (state_31987[(1)]);
if((state_val_31988 === (7))){
var inst_31983 = (state_31987[(2)]);
var state_31987__$1 = state_31987;
var statearr_31989_32015 = state_31987__$1;
(statearr_31989_32015[(2)] = inst_31983);

(statearr_31989_32015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (1))){
var inst_31926 = klipse_clj.lang.clojure.load_core_macros_cache.call(null);
var state_31987__$1 = state_31987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31987__$1,(2),inst_31926);
} else {
if((state_val_31988 === (4))){
var inst_31985 = (state_31987[(2)]);
var state_31987__$1 = state_31987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31987__$1,inst_31985);
} else {
if((state_val_31988 === (15))){
var inst_31957 = (state_31987[(7)]);
var inst_31974 = (state_31987[(2)]);
var inst_31975 = cljs.core.next.call(null,inst_31957);
var inst_31937 = inst_31975;
var inst_31938 = null;
var inst_31939 = (0);
var inst_31940 = (0);
var state_31987__$1 = (function (){var statearr_31990 = state_31987;
(statearr_31990[(8)] = inst_31937);

(statearr_31990[(9)] = inst_31940);

(statearr_31990[(10)] = inst_31939);

(statearr_31990[(11)] = inst_31974);

(statearr_31990[(12)] = inst_31938);

return statearr_31990;
})();
var statearr_31991_32016 = state_31987__$1;
(statearr_31991_32016[(2)] = null);

(statearr_31991_32016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (13))){
var inst_31957 = (state_31987[(7)]);
var inst_31966 = cljs.core.first.call(null,inst_31957);
var inst_31967 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_31968 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_31969 = [inst_31968,klipse_clj.repl.current_ns_eval];
var inst_31970 = cljs.core.PersistentHashMap.fromArrays(inst_31967,inst_31969);
var inst_31971 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_31966,inst_31970);
var inst_31972 = cljs.core.first.call(null,inst_31971);
var state_31987__$1 = state_31987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31987__$1,(15),inst_31972);
} else {
if((state_val_31988 === (6))){
var inst_31937 = (state_31987[(8)]);
var inst_31957 = (state_31987[(7)]);
var inst_31957__$1 = cljs.core.seq.call(null,inst_31937);
var state_31987__$1 = (function (){var statearr_31992 = state_31987;
(statearr_31992[(7)] = inst_31957__$1);

return statearr_31992;
})();
if(inst_31957__$1){
var statearr_31993_32017 = state_31987__$1;
(statearr_31993_32017[(1)] = (9));

} else {
var statearr_31994_32018 = state_31987__$1;
(statearr_31994_32018[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (3))){
var inst_31940 = (state_31987[(9)]);
var inst_31939 = (state_31987[(10)]);
var inst_31942 = (inst_31940 < inst_31939);
var inst_31943 = inst_31942;
var state_31987__$1 = state_31987;
if(cljs.core.truth_(inst_31943)){
var statearr_31995_32019 = state_31987__$1;
(statearr_31995_32019[(1)] = (5));

} else {
var statearr_31996_32020 = state_31987__$1;
(statearr_31996_32020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (12))){
var inst_31957 = (state_31987[(7)]);
var inst_31961 = cljs.core.chunk_first.call(null,inst_31957);
var inst_31962 = cljs.core.chunk_rest.call(null,inst_31957);
var inst_31963 = cljs.core.count.call(null,inst_31961);
var inst_31937 = inst_31962;
var inst_31938 = inst_31961;
var inst_31939 = inst_31963;
var inst_31940 = (0);
var state_31987__$1 = (function (){var statearr_31997 = state_31987;
(statearr_31997[(8)] = inst_31937);

(statearr_31997[(9)] = inst_31940);

(statearr_31997[(10)] = inst_31939);

(statearr_31997[(12)] = inst_31938);

return statearr_31997;
})();
var statearr_31998_32021 = state_31987__$1;
(statearr_31998_32021[(2)] = null);

(statearr_31998_32021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (2))){
var inst_31928 = (state_31987[(2)]);
var inst_31933 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31934 = ["(require '[klipse-clj.repl :refer-macros [doc]])","(require-macros '[klipse-clj.macros :refer [dbg inferred-type]])"];
var inst_31935 = (new cljs.core.PersistentVector(null,2,(5),inst_31933,inst_31934,null));
var inst_31936 = cljs.core.seq.call(null,inst_31935);
var inst_31937 = inst_31936;
var inst_31938 = null;
var inst_31939 = (0);
var inst_31940 = (0);
var state_31987__$1 = (function (){var statearr_31999 = state_31987;
(statearr_31999[(8)] = inst_31937);

(statearr_31999[(9)] = inst_31940);

(statearr_31999[(10)] = inst_31939);

(statearr_31999[(12)] = inst_31938);

(statearr_31999[(13)] = inst_31928);

return statearr_31999;
})();
var statearr_32000_32022 = state_31987__$1;
(statearr_32000_32022[(2)] = null);

(statearr_32000_32022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (11))){
var inst_31981 = (state_31987[(2)]);
var state_31987__$1 = state_31987;
var statearr_32001_32023 = state_31987__$1;
(statearr_32001_32023[(2)] = inst_31981);

(statearr_32001_32023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (9))){
var inst_31957 = (state_31987[(7)]);
var inst_31959 = cljs.core.chunked_seq_QMARK_.call(null,inst_31957);
var state_31987__$1 = state_31987;
if(inst_31959){
var statearr_32002_32024 = state_31987__$1;
(statearr_32002_32024[(1)] = (12));

} else {
var statearr_32003_32025 = state_31987__$1;
(statearr_32003_32025[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (5))){
var inst_31940 = (state_31987[(9)]);
var inst_31938 = (state_31987[(12)]);
var inst_31945 = cljs.core._nth.call(null,inst_31938,inst_31940);
var inst_31946 = [new cljs.core.Keyword(null,"st","st",1455255828),new cljs.core.Keyword(null,"ns","ns",441598760)];
var inst_31947 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_31948 = [inst_31947,klipse_clj.repl.current_ns_eval];
var inst_31949 = cljs.core.PersistentHashMap.fromArrays(inst_31946,inst_31948);
var inst_31950 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_31945,inst_31949);
var inst_31951 = cljs.core.first.call(null,inst_31950);
var state_31987__$1 = state_31987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31987__$1,(8),inst_31951);
} else {
if((state_val_31988 === (14))){
var inst_31978 = (state_31987[(2)]);
var state_31987__$1 = state_31987;
var statearr_32007_32026 = state_31987__$1;
(statearr_32007_32026[(2)] = inst_31978);

(statearr_32007_32026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (10))){
var state_31987__$1 = state_31987;
var statearr_32008_32027 = state_31987__$1;
(statearr_32008_32027[(2)] = null);

(statearr_32008_32027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (8))){
var inst_31937 = (state_31987[(8)]);
var inst_31940 = (state_31987[(9)]);
var inst_31939 = (state_31987[(10)]);
var inst_31938 = (state_31987[(12)]);
var inst_31953 = (state_31987[(2)]);
var inst_31954 = (inst_31940 + (1));
var tmp32004 = inst_31937;
var tmp32005 = inst_31939;
var tmp32006 = inst_31938;
var inst_31937__$1 = tmp32004;
var inst_31938__$1 = tmp32006;
var inst_31939__$1 = tmp32005;
var inst_31940__$1 = inst_31954;
var state_31987__$1 = (function (){var statearr_32009 = state_31987;
(statearr_32009[(8)] = inst_31937__$1);

(statearr_32009[(14)] = inst_31953);

(statearr_32009[(9)] = inst_31940__$1);

(statearr_32009[(10)] = inst_31939__$1);

(statearr_32009[(12)] = inst_31938__$1);

return statearr_32009;
})();
var statearr_32010_32028 = state_31987__$1;
(statearr_32010_32028[(2)] = null);

(statearr_32010_32028[(1)] = (3));


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
var statearr_32011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32011[(0)] = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto__);

(statearr_32011[(1)] = (1));

return statearr_32011;
});
var klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto____1 = (function (state_31987){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_31987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32012){if((e32012 instanceof Object)){
var ex__15526__auto__ = e32012;
var statearr_32013_32029 = state_31987;
(statearr_32013_32029[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32030 = state_31987;
state_31987 = G__32030;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto__ = function(state_31987){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto____1.call(this,state_31987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$init_custom_macros_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32014 = f__15620__auto__.call(null);
(statearr_32014[(6)] = c__15619__auto__);

return statearr_32014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse_clj.lang.clojure.create_state_eval = (function klipse_clj$lang$clojure$create_state_eval(){
if(cljs.core.truth_(cljs.core.deref.call(null,klipse_clj.repl.st))){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32033){
var state_val_32034 = (state_32033[(1)]);
if((state_val_32034 === (1))){
var inst_32031 = cljs.core.deref.call(null,klipse_clj.repl.st);
var state_32033__$1 = state_32033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32033__$1,inst_32031);
} else {
return null;
}
});
return (function() {
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_32035 = [null,null,null,null,null,null,null];
(statearr_32035[(0)] = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__);

(statearr_32035[(1)] = (1));

return statearr_32035;
});
var klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____1 = (function (state_32033){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32036){if((e32036 instanceof Object)){
var ex__15526__auto__ = e32036;
var statearr_32037_32039 = state_32033;
(statearr_32037_32039[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32040 = state_32033;
state_32033 = G__32040;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__ = function(state_32033){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____1.call(this,state_32033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$create_state_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32038 = f__15620__auto__.call(null);
(statearr_32038[(6)] = c__15619__auto__);

return statearr_32038;
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
}catch (e32041){if((e32041 instanceof Object)){
var e = e32041;

return e;
} else {
throw e32041;

}
}});
klipse_clj.lang.clojure.display = (function klipse_clj$lang$clojure$display(value,p__32042){
var map__32043 = p__32042;
var map__32043__$1 = cljs.core.__destructure_map.call(null,map__32043);
var print_length = cljs.core.get.call(null,map__32043__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__32043__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
try{var _STAR_print_length_STAR__orig_val__32045 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__32046 = print_length;
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32046);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32047_32051 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32048_32052 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32049_32053 = true;
var _STAR_print_fn_STAR__temp_val__32050_32054 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32049_32053);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32050_32054);

try{cljs.pprint.pprint.call(null,(cljs.core.truth_((function (){var and__5041__auto__ = typeof value === 'string';
if(and__5041__auto__){
return beautify_strings;
} else {
return and__5041__auto__;
}
})())?cljs.core.symbol.call(null,value):value));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32048_32052);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32047_32051);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})()], null);
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32045);
}}catch (e32044){if((e32044 instanceof Object)){
var e = e32044;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("klipse","print-error","klipse/print-error",-136370564)], null),cljs.core.ex_info.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"print-eval-result","print-eval-result",-783412263)], null))))], null);
} else {
throw e32044;

}
}});
klipse_clj.lang.clojure.update_current_ns = (function klipse_clj$lang$clojure$update_current_ns(p__32055,verbose_QMARK_,current_ns){
var map__32056 = p__32055;
var map__32056__$1 = cljs.core.__destructure_map.call(null,map__32056);
var ns = cljs.core.get.call(null,map__32056__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__32056__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__32056__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__32056__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__32056__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__32056__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
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
klipse_clj.lang.clojure.result_as_str = (function klipse_clj$lang$clojure$result_as_str(p__32057,opts){
var map__32058 = p__32057;
var map__32058__$1 = cljs.core.__destructure_map.call(null,map__32058);
var args = map__32058__$1;
var ns = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
if(cljs.core.not.call(null,error)){
return klipse_clj.lang.clojure.display.call(null,value,opts);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),klipse_clj.lang.clojure.display_err.call(null,error)], null);
}
});
klipse_clj.lang.clojure.result_as_prepl_map = (function klipse_clj$lang$clojure$result_as_prepl_map(form_str,p__32059,opts){
var map__32060 = p__32059;
var map__32060__$1 = cljs.core.__destructure_map.call(null,map__32060);
var args = map__32060__$1;
var ns = cljs.core.get.call(null,map__32060__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var form = cljs.core.get.call(null,map__32060__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__32060__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__32060__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__32060__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__32060__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var vec__32061 = klipse_clj.lang.clojure.result_as_str.call(null,args,opts);
var status = cljs.core.nth.call(null,vec__32061,(0),null);
var val = cljs.core.nth.call(null,vec__32061,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status))?new cljs.core.Keyword(null,"err","err",-2089457205):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"form","form",-1624062471),form_str], null);
});
klipse_clj.lang.clojure.read_result = (function klipse_clj$lang$clojure$read_result(p__32064){
var map__32065 = p__32064;
var map__32065__$1 = cljs.core.__destructure_map.call(null,map__32065);
var form = cljs.core.get.call(null,map__32065__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__32065__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__32065__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__32065__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__32065__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = ((cljs.core.not.call(null,error))?value:error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.advanced_compile = (function klipse_clj$lang$clojure$advanced_compile(code){
return code;
});
klipse_clj.lang.clojure.convert_compile_res = (function klipse_clj$lang$clojure$convert_compile_res(p__32066){
var map__32067 = p__32066;
var map__32067__$1 = cljs.core.__destructure_map.call(null,map__32067);
var foo = map__32067__$1;
var value = cljs.core.get.call(null,map__32067__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__32067__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:klipse_clj.lang.clojure.advanced_compile.call(null,value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse_clj.lang.clojure.my_eval = (function klipse_clj$lang$clojure$my_eval(p__32068){
var map__32069 = p__32068;
var map__32069__$1 = cljs.core.__destructure_map.call(null,map__32069);
var args = map__32069__$1;
var file = cljs.core.get.call(null,map__32069__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.call(null,map__32069__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var lang = cljs.core.get.call(null,map__32069__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var name = cljs.core.get.call(null,map__32069__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__32069__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cache = cljs.core.get.call(null,map__32069__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
klipse_clj.lang.clojure.guard.watchdog.call(null);

return cljs.js.js_eval.call(null,args);
});
klipse_clj.lang.clojure.eval_for_compilation = (function klipse_clj$lang$clojure$eval_for_compilation(p__32070){
var map__32071 = p__32070;
var map__32071__$1 = cljs.core.__destructure_map.call(null,map__32071);
var source = cljs.core.get.call(null,map__32071__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return source;
});
klipse_clj.lang.clojure.original_emits = cljs.compiler.emits;
klipse_clj.lang.clojure.core_compile_an_exp = (function klipse_clj$lang$clojure$core_compile_an_exp(s,p__32072){
var map__32073 = p__32072;
var map__32073__$1 = cljs.core.__destructure_map.call(null,map__32073);
var static_fns = cljs.core.get.call(null,map__32073__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__32073__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__32073__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var compile_display_guard = cljs.core.get.call(null,map__32073__$1,new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),false);
var verbose_QMARK_ = cljs.core.get.call(null,map__32073__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__32073__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__32073__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
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
var c__15619__auto___32105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32090){
var state_val_32091 = (state_32090[(1)]);
if((state_val_32091 === (1))){
var inst_32074 = cljs.core.PersistentVector.EMPTY;
var inst_32075 = inst_32074;
var state_32090__$1 = (function (){var statearr_32092 = state_32090;
(statearr_32092[(7)] = inst_32075);

return statearr_32092;
})();
var statearr_32093_32106 = state_32090__$1;
(statearr_32093_32106[(2)] = null);

(statearr_32093_32106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (2))){
var state_32090__$1 = state_32090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32090__$1,(4),c);
} else {
if((state_val_32091 === (3))){
var inst_32088 = (state_32090[(2)]);
var state_32090__$1 = state_32090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32090__$1,inst_32088);
} else {
if((state_val_32091 === (4))){
var inst_32078 = (state_32090[(8)]);
var inst_32078__$1 = (state_32090[(2)]);
var inst_32079 = (inst_32078__$1 == null);
var state_32090__$1 = (function (){var statearr_32094 = state_32090;
(statearr_32094[(8)] = inst_32078__$1);

return statearr_32094;
})();
if(cljs.core.truth_(inst_32079)){
var statearr_32095_32107 = state_32090__$1;
(statearr_32095_32107[(1)] = (5));

} else {
var statearr_32096_32108 = state_32090__$1;
(statearr_32096_32108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (5))){
var inst_32075 = (state_32090[(7)]);
var inst_32081 = cljs.core.async.put_BANG_.call(null,d,inst_32075);
var state_32090__$1 = state_32090;
var statearr_32097_32109 = state_32090__$1;
(statearr_32097_32109[(2)] = inst_32081);

(statearr_32097_32109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (6))){
var inst_32078 = (state_32090[(8)]);
var inst_32075 = (state_32090[(7)]);
var inst_32083 = cljs.core.conj.call(null,inst_32075,inst_32078);
var inst_32075__$1 = inst_32083;
var state_32090__$1 = (function (){var statearr_32098 = state_32090;
(statearr_32098[(7)] = inst_32075__$1);

return statearr_32098;
})();
var statearr_32099_32110 = state_32090__$1;
(statearr_32099_32110[(2)] = null);

(statearr_32099_32110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (7))){
var inst_32086 = (state_32090[(2)]);
var state_32090__$1 = state_32090;
var statearr_32100_32111 = state_32090__$1;
(statearr_32100_32111[(2)] = inst_32086);

(statearr_32100_32111[(1)] = (3));


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
var statearr_32101 = [null,null,null,null,null,null,null,null,null];
(statearr_32101[(0)] = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto__);

(statearr_32101[(1)] = (1));

return statearr_32101;
});
var klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto____1 = (function (state_32090){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32102){if((e32102 instanceof Object)){
var ex__15526__auto__ = e32102;
var statearr_32103_32112 = state_32090;
(statearr_32103_32112[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32113 = state_32090;
state_32090 = G__32113;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto__ = function(state_32090){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto____1.call(this,state_32090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$read_until_closed_BANG__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32104 = f__15620__auto__.call(null);
(statearr_32104[(6)] = c__15619__auto___32105);

return statearr_32104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return d;
});
klipse_clj.lang.clojure.core_eval_an_exp = (function klipse_clj$lang$clojure$core_eval_an_exp(s,p__32114){
var map__32115 = p__32114;
var map__32115__$1 = cljs.core.__destructure_map.call(null,map__32115);
var static_fns = cljs.core.get.call(null,map__32115__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var external_libs = cljs.core.get.call(null,map__32115__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var max_eval_duration = cljs.core.get.call(null,map__32115__$1,new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010),klipse_clj.lang.clojure.guard.min_max_eval_duration);
var verbose_QMARK_ = cljs.core.get.call(null,map__32115__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832),false);
var st = cljs.core.get.call(null,map__32115__$1,new cljs.core.Keyword(null,"st","st",1455255828),null);
var ns = cljs.core.get.call(null,map__32115__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var res_chan = cljs.core.async.chan.call(null);
var warnings_chan = cljs.core.async.chan.call(null,(1024));
var agg_warnings_chan = cljs.core.async.chan.call(null);
var max_eval_duration__$1 = (function (){var x__5128__auto__ = max_eval_duration;
var y__5129__auto__ = klipse_clj.lang.clojure.guard.min_max_eval_duration;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var _STAR_cljs_warning_handlers_STAR__orig_val__32116 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__32117 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,klipse_clj.lang.clojure.warning_handler,warnings_chan)], null);
(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__32117);

try{try{cljs.js.eval_str.call(null,st,s,"my.klipse",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eval","eval",-1103567905),klipse_clj.lang.clojure.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref.call(null,ns),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true,new cljs.core.Keyword(null,"verbose","verbose",1694226060),verbose_QMARK_,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),(cljs.env._STAR_compiler_STAR_ = st),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.call(null,klipse_clj.lang.clojure.io.load_ns,external_libs)], null),(function (res){
cljs.core.async.close_BANG_.call(null,warnings_chan);

var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32126){
var state_val_32127 = (state_32126[(1)]);
if((state_val_32127 === (1))){
var inst_32118 = klipse_clj.lang.clojure.read_until_closed_BANG_.call(null,warnings_chan);
var state_32126__$1 = state_32126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32126__$1,(2),inst_32118);
} else {
if((state_val_32127 === (2))){
var inst_32120 = (state_32126[(2)]);
var inst_32121 = klipse_clj.lang.clojure.update_current_ns.call(null,res,verbose_QMARK_,ns);
var inst_32122 = cljs.core.async.put_BANG_.call(null,res_chan,res);
var inst_32123 = clojure.string.join.call(null,"",inst_32120);
var inst_32124 = cljs.core.async.put_BANG_.call(null,agg_warnings_chan,inst_32123);
var state_32126__$1 = (function (){var statearr_32128 = state_32126;
(statearr_32128[(7)] = inst_32121);

(statearr_32128[(8)] = inst_32122);

return statearr_32128;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32126__$1,inst_32124);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____0 = (function (){
var statearr_32129 = [null,null,null,null,null,null,null,null,null];
(statearr_32129[(0)] = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__);

(statearr_32129[(1)] = (1));

return statearr_32129;
});
var klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____1 = (function (state_32126){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32130){if((e32130 instanceof Object)){
var ex__15526__auto__ = e32130;
var statearr_32131_32133 = state_32126;
(statearr_32131_32133[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32134 = state_32126;
state_32126 = G__32134;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__ = function(state_32126){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____1.call(this,state_32126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$core_eval_an_exp_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32132 = f__15620__auto__.call(null);
(statearr_32132[(6)] = c__15619__auto__);

return statearr_32132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
}));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,agg_warnings_chan], null);
}finally {}}finally {(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__32116);
}});
klipse_clj.lang.clojure.read_chars = (function klipse_clj$lang$clojure$read_chars(reader){
var res = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.core.truth_(temp__5802__auto__)){
var ch = temp__5802__auto__;
var G__32135 = cljs.core.conj.call(null,res,ch);
res = G__32135;
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
var _STAR_alias_map_STAR__orig_val__32136 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__32137 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__32138 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__32139 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__32140 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__32141 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__32142 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__32143 = ns;
var _STAR_cljs_ns_STAR__temp_val__32144 = ns;
var _STAR_compiler_STAR__temp_val__32145 = st;
var resolve_symbol_temp_val__32146 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__32147 = klipse_clj.lang.clojure.data_readers.call(null);
(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__32142);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__32143);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__32144);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__32145);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__32146);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__32147);

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
}finally {(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__32141);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__32140);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__32139);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__32138);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__32137);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__32136);
}});
/**
 * A good way to read a string as cljs.reader/read-string has many bugs.
 */
klipse_clj.lang.clojure.read_string = (function klipse_clj$lang$clojure$read_string(var_args){
var G__32151 = arguments.length;
switch (G__32151) {
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
var _STAR_alias_map_STAR__orig_val__32152 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_ns_STAR__orig_val__32153 = cljs.core._STAR_ns_STAR_;
var _STAR_cljs_ns_STAR__orig_val__32154 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_compiler_STAR__orig_val__32155 = cljs.env._STAR_compiler_STAR_;
var resolve_symbol_orig_val__32156 = cljs.tools.reader.resolve_symbol;
var _STAR_data_readers_STAR__orig_val__32157 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_alias_map_STAR__temp_val__32158 = klipse_clj.repl.current_alias_map.call(null,ns,st);
var _STAR_ns_STAR__temp_val__32159 = ns;
var _STAR_cljs_ns_STAR__temp_val__32160 = ns;
var _STAR_compiler_STAR__temp_val__32161 = st;
var resolve_symbol_temp_val__32162 = cljs.analyzer.resolve_symbol;
var _STAR_data_readers_STAR__temp_val__32163 = klipse_clj.lang.clojure.data_readers.call(null);
(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__32158);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__32159);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__32160);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__32161);

(cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__32162);

(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__32163);

try{var reader = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
return cljs.tools.reader.read.call(null,reader);
}finally {(cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__32157);

(cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__32156);

(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__32155);

(cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__32154);

(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__32153);

(cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__32152);
}}));

(klipse_clj.lang.clojure.read_string.cljs$lang$maxFixedArity = 3);

klipse_clj.lang.clojure.split_expressions = (function klipse_clj$lang$clojure$split_expressions(s){
var s__$1 = s;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return res;
} else {
var vec__32168 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s__$1,cljs.core.deref.call(null,klipse_clj.repl.st),cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval));
var exp = cljs.core.nth.call(null,vec__32168,(0),null);
var rest_s = cljs.core.nth.call(null,vec__32168,(1),null);
if(cljs.core.empty_QMARK_.call(null,exp)){
var G__32171 = rest_s;
var G__32172 = res;
s__$1 = G__32171;
res = G__32172;
continue;
} else {
var G__32173 = rest_s;
var G__32174 = cljs.core.conj.call(null,res,exp);
s__$1 = G__32173;
res = G__32174;
continue;
}
}
break;
}
});
klipse_clj.lang.clojure.populate_err = (function klipse_clj$lang$clojure$populate_err(err,p__32175){
var map__32176 = p__32175;
var map__32176__$1 = cljs.core.__destructure_map.call(null,map__32176);
var result_element = cljs.core.get.call(null,map__32176__$1,new cljs.core.Keyword(null,"result-element","result-element",-690233582));
var container = cljs.core.get.call(null,map__32176__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
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
var c__15619__auto___32280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32252){
var state_val_32253 = (state_32252[(1)]);
if((state_val_32253 === (7))){
var inst_32248 = (state_32252[(2)]);
var state_32252__$1 = state_32252;
var statearr_32254_32281 = state_32252__$1;
(statearr_32254_32281[(2)] = inst_32248);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32252__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32253 === (1))){
var state_32252__$1 = state_32252;
var statearr_32255_32282 = state_32252__$1;
(statearr_32255_32282[(2)] = null);

(statearr_32255_32282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32253 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32252,(3),Object,null,(2));
var inst_32190 = klipse_clj.lang.clojure.create_state_eval.call(null);
var state_32252__$1 = state_32252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32252__$1,(5),inst_32190);
} else {
if((state_val_32253 === (15))){
var inst_32226 = (state_32252[(7)]);
var inst_32207 = (state_32252[(8)]);
var inst_32235 = (state_32252[(9)]);
var inst_32237 = (state_32252[(2)]);
var inst_32238 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32207),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32237)].join('');
var inst_32205 = inst_32235;
var inst_32206 = inst_32226;
var inst_32207__$1 = inst_32238;
var state_32252__$1 = (function (){var statearr_32256 = state_32252;
(statearr_32256[(8)] = inst_32207__$1);

(statearr_32256[(10)] = inst_32206);

(statearr_32256[(11)] = inst_32205);

return statearr_32256;
})();
var statearr_32257_32283 = state_32252__$1;
(statearr_32257_32283[(2)] = null);

(statearr_32257_32283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32253 === (13))){
var inst_32224 = (state_32252[(12)]);
var inst_32213 = (state_32252[(13)]);
var inst_32233 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_32234 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_32235 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_32213,inst_32233,inst_32234);
var state_32252__$1 = (function (){var statearr_32258 = state_32252;
(statearr_32258[(9)] = inst_32235);

return statearr_32258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32252__$1,(15),inst_32224);
} else {
if((state_val_32253 === (6))){
var inst_32212 = (state_32252[(14)]);
var inst_32205 = (state_32252[(11)]);
var inst_32212__$1 = cljs.core.nth.call(null,inst_32205,(0),null);
var inst_32213 = cljs.core.nth.call(null,inst_32205,(1),null);
var inst_32214 = cljs.core.empty_QMARK_.call(null,inst_32212__$1);
var inst_32215 = (!(inst_32214));
var state_32252__$1 = (function (){var statearr_32259 = state_32252;
(statearr_32259[(14)] = inst_32212__$1);

(statearr_32259[(13)] = inst_32213);

return statearr_32259;
})();
if(inst_32215){
var statearr_32260_32284 = state_32252__$1;
(statearr_32260_32284[(1)] = (8));

} else {
var statearr_32261_32285 = state_32252__$1;
(statearr_32261_32285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32253 === (3))){
var inst_32177 = (state_32252[(2)]);
var inst_32178 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_32179 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_32180 = [inst_32177];
var inst_32181 = cljs.core.PersistentHashMap.fromArrays(inst_32179,inst_32180);
var inst_32182 = cljs.core.async.put_BANG_.call(null,res_chan,inst_32181);
var inst_32183 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_32184 = [inst_32177];
var inst_32185 = cljs.core.PersistentHashMap.fromArrays(inst_32183,inst_32184);
var inst_32186 = klipse_clj.lang.clojure.populate_err.call(null,inst_32185,opts);
var state_32252__$1 = (function (){var statearr_32262 = state_32252;
(statearr_32262[(15)] = inst_32182);

(statearr_32262[(16)] = inst_32178);

return statearr_32262;
})();
var statearr_32263_32286 = state_32252__$1;
(statearr_32263_32286[(2)] = inst_32186);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32252__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32253 === (12))){
var inst_32226 = (state_32252[(7)]);
var inst_32229 = cljs.core.async.close_BANG_.call(null,warnings_chan);
var inst_32230 = cljs.core.async.put_BANG_.call(null,res_chan,inst_32226);
var inst_32231 = klipse_clj.lang.clojure.populate_err.call(null,inst_32226,opts);
var state_32252__$1 = (function (){var statearr_32264 = state_32252;
(statearr_32264[(17)] = inst_32229);

(statearr_32264[(18)] = inst_32230);

return statearr_32264;
})();
var statearr_32265_32287 = state_32252__$1;
(statearr_32265_32287[(2)] = inst_32231);

(statearr_32265_32287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32253 === (2))){
var inst_32250 = (state_32252[(2)]);
var state_32252__$1 = state_32252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32252__$1,inst_32250);
} else {
if((state_val_32253 === (11))){
var inst_32226 = (state_32252[(7)]);
var inst_32226__$1 = (state_32252[(2)]);
var inst_32227 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32226__$1);
var state_32252__$1 = (function (){var statearr_32266 = state_32252;
(statearr_32266[(7)] = inst_32226__$1);

return statearr_32266;
})();
if(cljs.core.truth_(inst_32227)){
var statearr_32267_32288 = state_32252__$1;
(statearr_32267_32288[(1)] = (12));

} else {
var statearr_32268_32289 = state_32252__$1;
(statearr_32268_32289[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32253 === (9))){
var inst_32207 = (state_32252[(8)]);
var inst_32206 = (state_32252[(10)]);
var inst_32243 = cljs.core.async.put_BANG_.call(null,warnings_chan,inst_32207);
var inst_32244 = cljs.core.async.put_BANG_.call(null,res_chan,inst_32206);
var state_32252__$1 = (function (){var statearr_32269 = state_32252;
(statearr_32269[(19)] = inst_32243);

return statearr_32269;
})();
var statearr_32270_32290 = state_32252__$1;
(statearr_32270_32290[(2)] = inst_32244);

(statearr_32270_32290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32253 === (5))){
var inst_32192 = (state_32252[(2)]);
var inst_32200 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_32201 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_eval);
var inst_32202 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_32200,inst_32201);
var inst_32203 = cljs.core.nth.call(null,inst_32202,(0),null);
var inst_32204 = cljs.core.nth.call(null,inst_32202,(1),null);
var inst_32205 = inst_32202;
var inst_32206 = null;
var inst_32207 = "";
var state_32252__$1 = (function (){var statearr_32271 = state_32252;
(statearr_32271[(20)] = inst_32204);

(statearr_32271[(21)] = inst_32192);

(statearr_32271[(8)] = inst_32207);

(statearr_32271[(10)] = inst_32206);

(statearr_32271[(11)] = inst_32205);

(statearr_32271[(22)] = inst_32203);

return statearr_32271;
})();
var statearr_32272_32291 = state_32252__$1;
(statearr_32272_32291[(2)] = null);

(statearr_32272_32291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32253 === (14))){
var inst_32241 = (state_32252[(2)]);
var state_32252__$1 = state_32252;
var statearr_32273_32292 = state_32252__$1;
(statearr_32273_32292[(2)] = inst_32241);

(statearr_32273_32292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32253 === (10))){
var inst_32246 = (state_32252[(2)]);
var state_32252__$1 = state_32252;
var statearr_32274_32293 = state_32252__$1;
(statearr_32274_32293[(2)] = inst_32246);

(statearr_32274_32293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32253 === (8))){
var inst_32212 = (state_32252[(14)]);
var inst_32220 = cljs.core.deref.call(null,klipse_clj.repl.st);
var inst_32221 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_32220,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_eval);
var inst_32222 = klipse_clj.lang.clojure.core_eval_an_exp.call(null,inst_32212,inst_32221);
var inst_32223 = cljs.core.nth.call(null,inst_32222,(0),null);
var inst_32224 = cljs.core.nth.call(null,inst_32222,(1),null);
var state_32252__$1 = (function (){var statearr_32275 = state_32252;
(statearr_32275[(12)] = inst_32224);

return statearr_32275;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32252__$1,(11),inst_32223);
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
var statearr_32276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32276[(0)] = klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto__);

(statearr_32276[(1)] = (1));

return statearr_32276;
});
var klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto____1 = (function (state_32252){
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
}catch (e32277){if((e32277 instanceof Object)){
var ex__15526__auto__ = e32277;
var statearr_32278_32294 = state_32252;
(statearr_32278_32294[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32295 = state_32252;
state_32252 = G__32295;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto__ = function(state_32252){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto____1.call(this,state_32252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$core_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32279 = f__15620__auto__.call(null);
(statearr_32279[(6)] = c__15619__auto___32280);

return statearr_32279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res_chan,warnings_chan], null);
});
klipse_clj.lang.clojure.core_compile = (function klipse_clj$lang$clojure$core_compile(s,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32353){
var state_val_32354 = (state_32353[(1)]);
if((state_val_32354 === (7))){
var inst_32321 = (state_32353[(7)]);
var inst_32326 = klipse_clj.repl.create_state_compile.call(null);
var inst_32327 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"st","st",1455255828),inst_32326,new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.repl.current_ns_compile);
var inst_32328 = klipse_clj.lang.clojure.core_compile_an_exp.call(null,inst_32321,inst_32327);
var state_32353__$1 = state_32353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32353__$1,(10),inst_32328);
} else {
if((state_val_32354 === (1))){
var state_32353__$1 = state_32353;
var statearr_32355_32376 = state_32353__$1;
(statearr_32355_32376[(2)] = null);

(statearr_32355_32376[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32353,(3),Object,null,(2));
var inst_32310 = klipse_clj.repl.create_state_compile.call(null);
var inst_32311 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_32312 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,s,inst_32310,inst_32311);
var inst_32313 = cljs.core.nth.call(null,inst_32312,(0),null);
var inst_32314 = cljs.core.nth.call(null,inst_32312,(1),null);
var inst_32315 = inst_32312;
var inst_32316 = "";
var state_32353__$1 = (function (){var statearr_32356 = state_32353;
(statearr_32356[(8)] = inst_32313);

(statearr_32356[(9)] = inst_32316);

(statearr_32356[(10)] = inst_32315);

(statearr_32356[(11)] = inst_32314);

return statearr_32356;
})();
var statearr_32357_32377 = state_32353__$1;
(statearr_32357_32377[(2)] = null);

(statearr_32357_32377[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (13))){
var inst_32341 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32358_32378 = state_32353__$1;
(statearr_32358_32378[(2)] = inst_32341);

(statearr_32358_32378[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (6))){
var inst_32349 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32359_32379 = state_32353__$1;
(statearr_32359_32379[(2)] = inst_32349);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (3))){
var inst_32296 = (state_32353[(2)]);
var inst_32297 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_32298 = [inst_32296];
var inst_32299 = cljs.core.PersistentHashMap.fromArrays(inst_32297,inst_32298);
var state_32353__$1 = state_32353;
var statearr_32360_32380 = state_32353__$1;
(statearr_32360_32380[(2)] = inst_32299);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (12))){
var inst_32316 = (state_32353[(9)]);
var inst_32330 = (state_32353[(12)]);
var inst_32322 = (state_32353[(13)]);
var inst_32334 = klipse_clj.repl.create_state_compile.call(null);
var inst_32335 = cljs.core.deref.call(null,klipse_clj.repl.current_ns_compile);
var inst_32336 = klipse_clj.lang.clojure.first_exp_and_rest.call(null,inst_32322,inst_32334,inst_32335);
var inst_32337 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_32330);
var inst_32338 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32316),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32337)].join('');
var inst_32315 = inst_32336;
var inst_32316__$1 = inst_32338;
var state_32353__$1 = (function (){var statearr_32361 = state_32353;
(statearr_32361[(9)] = inst_32316__$1);

(statearr_32361[(10)] = inst_32315);

return statearr_32361;
})();
var statearr_32362_32381 = state_32353__$1;
(statearr_32362_32381[(2)] = null);

(statearr_32362_32381[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (2))){
var inst_32351 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32353__$1,inst_32351);
} else {
if((state_val_32354 === (11))){
var inst_32330 = (state_32353[(12)]);
var state_32353__$1 = state_32353;
var statearr_32363_32382 = state_32353__$1;
(statearr_32363_32382[(2)] = inst_32330);

(statearr_32363_32382[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (9))){
var inst_32347 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32364_32383 = state_32353__$1;
(statearr_32364_32383[(2)] = inst_32347);

(statearr_32364_32383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (5))){
var inst_32315 = (state_32353[(10)]);
var inst_32321 = (state_32353[(7)]);
var inst_32321__$1 = cljs.core.nth.call(null,inst_32315,(0),null);
var inst_32322 = cljs.core.nth.call(null,inst_32315,(1),null);
var inst_32323 = cljs.core.empty_QMARK_.call(null,inst_32321__$1);
var inst_32324 = (!(inst_32323));
var state_32353__$1 = (function (){var statearr_32365 = state_32353;
(statearr_32365[(7)] = inst_32321__$1);

(statearr_32365[(13)] = inst_32322);

return statearr_32365;
})();
if(inst_32324){
var statearr_32366_32384 = state_32353__$1;
(statearr_32366_32384[(1)] = (7));

} else {
var statearr_32367_32385 = state_32353__$1;
(statearr_32367_32385[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (10))){
var inst_32330 = (state_32353[(12)]);
var inst_32330__$1 = (state_32353[(2)]);
var inst_32331 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_32330__$1);
var state_32353__$1 = (function (){var statearr_32368 = state_32353;
(statearr_32368[(12)] = inst_32330__$1);

return statearr_32368;
})();
if(cljs.core.truth_(inst_32331)){
var statearr_32369_32386 = state_32353__$1;
(statearr_32369_32386[(1)] = (11));

} else {
var statearr_32370_32387 = state_32353__$1;
(statearr_32370_32387[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (8))){
var inst_32316 = (state_32353[(9)]);
var inst_32343 = [new cljs.core.Keyword(null,"value","value",305978217)];
var inst_32344 = [inst_32316];
var inst_32345 = cljs.core.PersistentHashMap.fromArrays(inst_32343,inst_32344);
var state_32353__$1 = state_32353;
var statearr_32371_32388 = state_32353__$1;
(statearr_32371_32388[(2)] = inst_32345);

(statearr_32371_32388[(1)] = (9));


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
var statearr_32372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32372[(0)] = klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto__);

(statearr_32372[(1)] = (1));

return statearr_32372;
});
var klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto____1 = (function (state_32353){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32373){if((e32373 instanceof Object)){
var ex__15526__auto__ = e32373;
var statearr_32374_32389 = state_32353;
(statearr_32374_32389[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32390 = state_32353;
state_32353 = G__32390;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto__ = function(state_32353){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto____1.call(this,state_32353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$core_compile_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32375 = f__15620__auto__.call(null);
(statearr_32375[(6)] = c__15619__auto__);

return statearr_32375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse_clj.lang.clojure.eval_async_map = (function klipse_clj$lang$clojure$eval_async_map(s,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32406){
var state_val_32407 = (state_32406[(1)]);
if((state_val_32407 === (1))){
var inst_32394 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_32395 = cljs.core.nth.call(null,inst_32394,(0),null);
var inst_32396 = cljs.core.nth.call(null,inst_32394,(1),null);
var state_32406__$1 = (function (){var statearr_32408 = state_32406;
(statearr_32408[(7)] = inst_32396);

return statearr_32408;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32406__$1,(2),inst_32395);
} else {
if((state_val_32407 === (2))){
var inst_32396 = (state_32406[(7)]);
var inst_32398 = (state_32406[(2)]);
var inst_32399 = klipse_clj.lang.clojure.result_as_str.call(null,inst_32398,opts);
var state_32406__$1 = (function (){var statearr_32409 = state_32406;
(statearr_32409[(8)] = inst_32399);

return statearr_32409;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32406__$1,(3),inst_32396);
} else {
if((state_val_32407 === (3))){
var inst_32399 = (state_32406[(8)]);
var inst_32401 = (state_32406[(2)]);
var inst_32402 = [new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"res","res",-1395007879)];
var inst_32403 = [inst_32401,inst_32399];
var inst_32404 = cljs.core.PersistentHashMap.fromArrays(inst_32402,inst_32403);
var state_32406__$1 = state_32406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32406__$1,inst_32404);
} else {
return null;
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____0 = (function (){
var statearr_32410 = [null,null,null,null,null,null,null,null,null];
(statearr_32410[(0)] = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__);

(statearr_32410[(1)] = (1));

return statearr_32410;
});
var klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____1 = (function (state_32406){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32411){if((e32411 instanceof Object)){
var ex__15526__auto__ = e32411;
var statearr_32412_32414 = state_32406;
(statearr_32412_32414[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32415 = state_32406;
state_32406 = G__32415;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__ = function(state_32406){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____1.call(this,state_32406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$eval_async_map_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32413 = f__15620__auto__.call(null);
(statearr_32413[(6)] = c__15619__auto__);

return statearr_32413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse_clj.lang.clojure.eval_async = (function klipse_clj$lang$clojure$eval_async(s,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32428){
var state_val_32429 = (state_32428[(1)]);
if((state_val_32429 === (1))){
var inst_32419 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_32420 = cljs.core.nth.call(null,inst_32419,(0),null);
var inst_32421 = cljs.core.nth.call(null,inst_32419,(1),null);
var state_32428__$1 = (function (){var statearr_32430 = state_32428;
(statearr_32430[(7)] = inst_32421);

return statearr_32430;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32428__$1,(2),inst_32420);
} else {
if((state_val_32429 === (2))){
var inst_32421 = (state_32428[(7)]);
var inst_32423 = (state_32428[(2)]);
var inst_32424 = klipse_clj.lang.clojure.result_as_str.call(null,inst_32423,opts);
var state_32428__$1 = (function (){var statearr_32431 = state_32428;
(statearr_32431[(8)] = inst_32424);

return statearr_32431;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32428__$1,(3),inst_32421);
} else {
if((state_val_32429 === (3))){
var inst_32424 = (state_32428[(8)]);
var inst_32426 = (state_32428[(2)]);
var state_32428__$1 = (function (){var statearr_32432 = state_32428;
(statearr_32432[(9)] = inst_32426);

return statearr_32432;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32428__$1,inst_32424);
} else {
return null;
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____0 = (function (){
var statearr_32433 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32433[(0)] = klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__);

(statearr_32433[(1)] = (1));

return statearr_32433;
});
var klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____1 = (function (state_32428){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32434){if((e32434 instanceof Object)){
var ex__15526__auto__ = e32434;
var statearr_32435_32437 = state_32428;
(statearr_32435_32437[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32438 = state_32428;
state_32428 = G__32438;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__ = function(state_32428){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____1.call(this,state_32428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$eval_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32436 = f__15620__auto__.call(null);
(statearr_32436[(6)] = c__15619__auto__);

return statearr_32436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
/**
 * used for testing
 */
klipse_clj.lang.clojure.the_eval = (function klipse_clj$lang$clojure$the_eval(var_args){
var G__32440 = arguments.length;
switch (G__32440) {
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32447){
var state_val_32448 = (state_32447[(1)]);
if((state_val_32448 === (1))){
var inst_32441 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_32442 = cljs.core.first.call(null,inst_32441);
var state_32447__$1 = state_32447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32447__$1,(2),inst_32442);
} else {
if((state_val_32448 === (2))){
var inst_32444 = (state_32447[(2)]);
var inst_32445 = klipse_clj.lang.clojure.read_result.call(null,inst_32444);
var state_32447__$1 = state_32447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32447__$1,inst_32445);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$state_machine__15523__auto____0 = (function (){
var statearr_32449 = [null,null,null,null,null,null,null];
(statearr_32449[(0)] = klipse_clj$lang$clojure$state_machine__15523__auto__);

(statearr_32449[(1)] = (1));

return statearr_32449;
});
var klipse_clj$lang$clojure$state_machine__15523__auto____1 = (function (state_32447){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32450){if((e32450 instanceof Object)){
var ex__15526__auto__ = e32450;
var statearr_32451_32454 = state_32447;
(statearr_32451_32454[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32455 = state_32447;
state_32447 = G__32455;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15523__auto__ = function(state_32447){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15523__auto____1.call(this,state_32447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15523__auto____0;
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15523__auto____1;
return klipse_clj$lang$clojure$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32452 = f__15620__auto__.call(null);
(statearr_32452[(6)] = c__15619__auto__);

return statearr_32452;
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32462){
var state_val_32463 = (state_32462[(1)]);
if((state_val_32463 === (1))){
var inst_32456 = klipse_clj.lang.clojure.the_eval.call(null,s);
var state_32462__$1 = state_32462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32462__$1,(2),inst_32456);
} else {
if((state_val_32463 === (2))){
var inst_32458 = (state_32462[(2)]);
var inst_32459 = cljs.core.clj__GT_js.call(null,inst_32458);
var inst_32460 = cb.call(null,inst_32459);
var state_32462__$1 = state_32462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32462__$1,inst_32460);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____0 = (function (){
var statearr_32464 = [null,null,null,null,null,null,null];
(statearr_32464[(0)] = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__);

(statearr_32464[(1)] = (1));

return statearr_32464;
});
var klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____1 = (function (state_32462){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32465){if((e32465 instanceof Object)){
var ex__15526__auto__ = e32465;
var statearr_32466_32468 = state_32462;
(statearr_32466_32468[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32469 = state_32462;
state_32462 = G__32469;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__ = function(state_32462){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____1.call(this,state_32462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$eval_and_callback_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32467 = f__15620__auto__.call(null);
(statearr_32467[(6)] = c__15619__auto__);

return statearr_32467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
/**
 * useful for testing and js export
 */
klipse_clj.lang.clojure.str_compile = (function klipse_clj$lang$clojure$str_compile(var_args){
var G__32471 = arguments.length;
switch (G__32471) {
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32477){
var state_val_32478 = (state_32477[(1)]);
if((state_val_32478 === (1))){
var inst_32472 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_32477__$1 = state_32477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32477__$1,(2),inst_32472);
} else {
if((state_val_32478 === (2))){
var inst_32474 = (state_32477[(2)]);
var inst_32475 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_32474);
var state_32477__$1 = state_32477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32477__$1,inst_32475);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$state_machine__15523__auto____0 = (function (){
var statearr_32479 = [null,null,null,null,null,null,null];
(statearr_32479[(0)] = klipse_clj$lang$clojure$state_machine__15523__auto__);

(statearr_32479[(1)] = (1));

return statearr_32479;
});
var klipse_clj$lang$clojure$state_machine__15523__auto____1 = (function (state_32477){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32480){if((e32480 instanceof Object)){
var ex__15526__auto__ = e32480;
var statearr_32481_32484 = state_32477;
(statearr_32481_32484[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32485 = state_32477;
state_32477 = G__32485;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15523__auto__ = function(state_32477){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15523__auto____1.call(this,state_32477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15523__auto____0;
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15523__auto____1;
return klipse_clj$lang$clojure$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32482 = f__15620__auto__.call(null);
(statearr_32482[(6)] = c__15619__auto__);

return statearr_32482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
}));

(klipse_clj.lang.clojure.str_compile.cljs$lang$maxFixedArity = 2);

klipse_clj.lang.clojure.compile_async = (function klipse_clj$lang$clojure$compile_async(exp,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32491){
var state_val_32492 = (state_32491[(1)]);
if((state_val_32492 === (1))){
var inst_32486 = klipse_clj.lang.clojure.core_compile.call(null,exp,opts);
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32491__$1,(2),inst_32486);
} else {
if((state_val_32492 === (2))){
var inst_32488 = (state_32491[(2)]);
var inst_32489 = klipse_clj.lang.clojure.convert_compile_res.call(null,inst_32488);
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32491__$1,inst_32489);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____0 = (function (){
var statearr_32493 = [null,null,null,null,null,null,null];
(statearr_32493[(0)] = klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__);

(statearr_32493[(1)] = (1));

return statearr_32493;
});
var klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____1 = (function (state_32491){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32494){if((e32494 instanceof Object)){
var ex__15526__auto__ = e32494;
var statearr_32495_32497 = state_32491;
(statearr_32495_32497[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32498 = state_32491;
state_32491 = G__32498;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__ = function(state_32491){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____1.call(this,state_32491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$compile_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32496 = f__15620__auto__.call(null);
(statearr_32496[(6)] = c__15619__auto__);

return statearr_32496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse_clj.lang.clojure.str_compile_async = (function klipse_clj$lang$clojure$str_compile_async(exp,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32505){
var state_val_32506 = (state_32505[(1)]);
if((state_val_32506 === (1))){
var inst_32499 = klipse_clj.lang.clojure.compile_async.call(null,exp,opts);
var state_32505__$1 = state_32505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32505__$1,(2),inst_32499);
} else {
if((state_val_32506 === (2))){
var inst_32501 = (state_32505[(2)]);
var inst_32502 = cljs.core.second.call(null,inst_32501);
var inst_32503 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32502);
var state_32505__$1 = state_32505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32505__$1,inst_32503);
} else {
return null;
}
}
});
return (function() {
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____0 = (function (){
var statearr_32507 = [null,null,null,null,null,null,null];
(statearr_32507[(0)] = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__);

(statearr_32507[(1)] = (1));

return statearr_32507;
});
var klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____1 = (function (state_32505){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32508){if((e32508 instanceof Object)){
var ex__15526__auto__ = e32508;
var statearr_32509_32511 = state_32505;
(statearr_32509_32511[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32512 = state_32505;
state_32505 = G__32512;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__ = function(state_32505){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____1.call(this,state_32505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$str_compile_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32510 = f__15620__auto__.call(null);
(statearr_32510[(6)] = c__15619__auto__);

return statearr_32510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse_clj.lang.clojure.str_eval_async = (function klipse_clj$lang$clojure$str_eval_async(exp,p__32514){
var map__32515 = p__32514;
var map__32515__$1 = cljs.core.__destructure_map.call(null,map__32515);
var opts = map__32515__$1;
var container_id = cljs.core.get.call(null,map__32515__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var setup_container_fn = cljs.core.get.call(null,map__32515__$1,new cljs.core.Keyword(null,"setup-container-fn","setup-container-fn",464529096));
var verbose_QMARK_ = cljs.core.get.call(null,map__32515__$1,new cljs.core.Keyword(null,"verbose?","verbose?",1244836832));
var c = cljs.core.async.chan.call(null);
if(cljs.core.truth_(verbose_QMARK_)){
console.info("[clojure] evaluating",exp);
} else {
}

var c__15619__auto___32571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32553){
var state_val_32554 = (state_32553[(1)]);
if((state_val_32554 === (7))){
var inst_32524 = (state_32553[(2)]);
var inst_32529 = (function (){var _STAR_print_newline_STAR__orig_val__32525 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32526 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32527 = true;
return (function (p1__32513_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__32513_SHARP_);
});
})();
var inst_32530 = (cljs.core._STAR_print_newline_STAR_ = true);
var inst_32531 = (cljs.core._STAR_print_fn_STAR_ = inst_32529);
var state_32553__$1 = (function (){var statearr_32555 = state_32553;
(statearr_32555[(7)] = inst_32524);

(statearr_32555[(8)] = inst_32530);

(statearr_32555[(9)] = inst_32531);

return statearr_32555;
})();
var statearr_32556_32572 = state_32553__$1;
(statearr_32556_32572[(2)] = null);

(statearr_32556_32572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (1))){
var inst_32516 = clojure.string.blank_QMARK_.call(null,exp);
var state_32553__$1 = state_32553;
if(inst_32516){
var statearr_32557_32573 = state_32553__$1;
(statearr_32557_32573[(1)] = (2));

} else {
var statearr_32558_32574 = state_32553__$1;
(statearr_32558_32574[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (4))){
var inst_32551 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32553__$1,inst_32551);
} else {
if((state_val_32554 === (6))){
var state_32553__$1 = state_32553;
var statearr_32559_32575 = state_32553__$1;
(statearr_32559_32575[(2)] = null);

(statearr_32559_32575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (3))){
var state_32553__$1 = state_32553;
if(cljs.core.truth_(setup_container_fn)){
var statearr_32560_32576 = state_32553__$1;
(statearr_32560_32576[(1)] = (5));

} else {
var statearr_32561_32577 = state_32553__$1;
(statearr_32561_32577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (2))){
var inst_32518 = cljs.core.async.put_BANG_.call(null,c,"");
var state_32553__$1 = state_32553;
var statearr_32562_32578 = state_32553__$1;
(statearr_32562_32578[(2)] = inst_32518);

(statearr_32562_32578[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (11))){
var inst_32541 = (state_32553[(2)]);
var inst_32542 = cljs.core.__destructure_map.call(null,inst_32541);
var inst_32543 = cljs.core.get.call(null,inst_32542,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var inst_32544 = cljs.core.get.call(null,inst_32542,new cljs.core.Keyword(null,"res","res",-1395007879));
var inst_32545 = cljs.core.second.call(null,inst_32544);
var inst_32546 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32543),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32545)].join('');
var inst_32547 = cljs.core.async.put_BANG_.call(null,c,inst_32546);
var state_32553__$1 = state_32553;
var statearr_32563_32579 = state_32553__$1;
(statearr_32563_32579[(2)] = inst_32547);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32553__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (9))){
var inst_32532 = (state_32553[(2)]);
var inst_32533 = (cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_);
var inst_32534 = (cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_);
var state_32553__$1 = (function (){var statearr_32564 = state_32553;
(statearr_32564[(10)] = inst_32534);

(statearr_32564[(11)] = inst_32533);

(statearr_32564[(12)] = inst_32532);

return statearr_32564;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32553__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (5))){
var inst_32521 = setup_container_fn.call(null,container_id);
var state_32553__$1 = state_32553;
var statearr_32565_32580 = state_32553__$1;
(statearr_32565_32580[(2)] = inst_32521);

(statearr_32565_32580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32553,null,null,(9),(8));
var inst_32539 = klipse_clj.lang.clojure.eval_async_map.call(null,exp,opts);
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32553__$1,(11),inst_32539);
} else {
if((state_val_32554 === (8))){
var inst_32549 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32566_32581 = state_32553__$1;
(statearr_32566_32581[(2)] = inst_32549);

(statearr_32566_32581[(1)] = (4));


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
var statearr_32567 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32567[(0)] = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto__);

(statearr_32567[(1)] = (1));

return statearr_32567;
});
var klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto____1 = (function (state_32553){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32568){if((e32568 instanceof Object)){
var ex__15526__auto__ = e32568;
var statearr_32569_32582 = state_32553;
(statearr_32569_32582[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32583 = state_32553;
state_32553 = G__32583;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto__ = function(state_32553){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto____1.call(this,state_32553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$str_eval_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32570 = f__15620__auto__.call(null);
(statearr_32570[(6)] = c__15619__auto___32571);

return statearr_32570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return c;
});
klipse_clj.lang.clojure.eval_async_prepl = (function klipse_clj$lang$clojure$eval_async_prepl(var_args){
var G__32585 = arguments.length;
switch (G__32585) {
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
var c__15619__auto___32615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32604){
var state_val_32605 = (state_32604[(1)]);
if((state_val_32605 === (1))){
var inst_32588 = (function (){var _STAR_print_fn_STAR__orig_val__32586 = cljs.core._STAR_print_fn_STAR_;
return (function (s__$1){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),s__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"out","out",-910545517)], null));
});
})();
var inst_32589 = (cljs.core._STAR_print_fn_STAR_ = inst_32588);
var state_32604__$1 = (function (){var statearr_32606 = state_32604;
(statearr_32606[(7)] = inst_32589);

return statearr_32606;
})();
var statearr_32607_32616 = state_32604__$1;
(statearr_32607_32616[(2)] = null);

(statearr_32607_32616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32605 === (2))){
var inst_32602 = (state_32604[(2)]);
var state_32604__$1 = state_32604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32604__$1,inst_32602);
} else {
if((state_val_32605 === (3))){
var inst_32590 = (state_32604[(2)]);
var inst_32591 = (cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_);
var state_32604__$1 = (function (){var statearr_32608 = state_32604;
(statearr_32608[(8)] = inst_32591);

(statearr_32608[(9)] = inst_32590);

return statearr_32608;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32604__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32605 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32604,null,null,(3),(2));
var inst_32595 = klipse_clj.lang.clojure.core_eval.call(null,s,opts);
var inst_32596 = cljs.core.first.call(null,inst_32595);
var state_32604__$1 = state_32604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32604__$1,(5),inst_32596);
} else {
if((state_val_32605 === (5))){
var inst_32598 = (state_32604[(2)]);
var inst_32599 = klipse_clj.lang.clojure.result_as_prepl_map.call(null,s,inst_32598,opts);
var inst_32600 = cljs.core.async.put_BANG_.call(null,c,inst_32599);
var state_32604__$1 = state_32604;
var statearr_32609_32617 = state_32604__$1;
(statearr_32609_32617[(2)] = inst_32600);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32604__$1);

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
var statearr_32610 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32610[(0)] = klipse_clj$lang$clojure$state_machine__15523__auto__);

(statearr_32610[(1)] = (1));

return statearr_32610;
});
var klipse_clj$lang$clojure$state_machine__15523__auto____1 = (function (state_32604){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32611){if((e32611 instanceof Object)){
var ex__15526__auto__ = e32611;
var statearr_32612_32618 = state_32604;
(statearr_32612_32618[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32619 = state_32604;
state_32604 = G__32619;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$state_machine__15523__auto__ = function(state_32604){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$state_machine__15523__auto____1.call(this,state_32604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$state_machine__15523__auto____0;
klipse_clj$lang$clojure$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$state_machine__15523__auto____1;
return klipse_clj$lang$clojure$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32613 = f__15620__auto__.call(null);
(statearr_32613[(6)] = c__15619__auto___32615);

return statearr_32613;
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

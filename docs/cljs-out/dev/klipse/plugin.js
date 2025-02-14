// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.plugin');
goog.require('cljs.core');
goog.require('klipse.common.registry');
goog.require('klipse.args_from_element');
goog.require('klipse.klipse_editors');
goog.require('klipse.utils');
goog.require('cljs.spec.alpha');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('cljs.core.async');
goog.require('gadjett.collections');
goog.require('klipse.dom_utils');
klipse.plugin.out_placeholder = "the evaluation will appear here (soon)...";
/**
 * This channel is posted to a snippet number whenever an edit is made on a snippet
 */
klipse.plugin.event_chan = cljs.core.async.chan.call(null,(10));
klipse.plugin.snippet_counter = cljs.core.atom.call(null,(0));
klipse.plugin.snippet_num_BANG_ = (function klipse$plugin$snippet_num_BANG_(){
var res = cljs.core.deref.call(null,klipse.plugin.snippet_counter);
cljs.core.swap_BANG_.call(null,klipse.plugin.snippet_counter,cljs.core.inc);

return res;
});
klipse.plugin.calc_editor_args_from_element = (function klipse$plugin$calc_editor_args_from_element(element,global_idle_msec,min_idle_msec,global_editor_type){
var map__29962 = klipse.args_from_element.editor_args_from_element.call(null,element);
var map__29962__$1 = cljs.core.__destructure_map.call(null,map__29962);
var idle_msec = cljs.core.get.call(null,map__29962__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),global_idle_msec);
var editor_type = cljs.core.get.call(null,map__29962__$1,new cljs.core.Keyword(null,"editor-type","editor-type",198227301),global_editor_type);
var preamble = cljs.core.get.call(null,map__29962__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var async_code_QMARK_ = cljs.core.get.call(null,map__29962__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var loop_msec = cljs.core.get.call(null,map__29962__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),null);
return gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),(function (){var x__5128__auto__ = min_idle_msec;
var y__5129__auto__ = idle_msec;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})(),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),async_code_QMARK_,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480),editor_type], null));
});
klipse.plugin.calc_editor_type = (function klipse$plugin$calc_editor_type(minimalistic_ui_QMARK_,the_type){
if(cljs.core.truth_(minimalistic_ui_QMARK_)){
return new cljs.core.Keyword(null,"dom","dom",-1236537922);
} else {
var G__29963 = the_type;
switch (G__29963) {
case "code-mirror":
return new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768);

break;
case "dom":
return new cljs.core.Keyword(null,"dom","dom",-1236537922);

break;
case "html":
return new cljs.core.Keyword(null,"html","html",-998796897);

break;
default:
return new cljs.core.Keyword(null,"code-mirror","code-mirror",575084768);

}
}
});
klipse.plugin.load_external_scripts = (function klipse$plugin$load_external_scripts(scripts,no_dynamic_scripts_QMARK_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29994){
var state_val_29995 = (state_29994[(1)]);
if((state_val_29995 === (1))){
var state_29994__$1 = state_29994;
if(cljs.core.truth_(no_dynamic_scripts_QMARK_)){
var statearr_29996_30009 = state_29994__$1;
(statearr_29996_30009[(1)] = (2));

} else {
var statearr_29997_30010 = state_29994__$1;
(statearr_29997_30010[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (2))){
var inst_29966 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29967 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_29968 = (new cljs.core.PersistentVector(null,2,(5),inst_29966,inst_29967,null));
var state_29994__$1 = state_29994;
var statearr_29998_30011 = state_29994__$1;
(statearr_29998_30011[(2)] = inst_29968);

(statearr_29998_30011[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (3))){
var inst_29973 = klipse.utils.load_scripts_mem.call(null,scripts);
var state_29994__$1 = state_29994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29994__$1,(5),inst_29973);
} else {
if((state_val_29995 === (4))){
var inst_29992 = (state_29994[(2)]);
var state_29994__$1 = state_29994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29994__$1,inst_29992);
} else {
if((state_val_29995 === (5))){
var inst_29975 = (state_29994[(2)]);
var inst_29976 = cljs.core.nth.call(null,inst_29975,(0),null);
var inst_29977 = cljs.core.nth.call(null,inst_29975,(1),null);
var inst_29978 = cljs.core.nth.call(null,inst_29975,(2),null);
var inst_29979 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_29976);
var state_29994__$1 = (function (){var statearr_29999 = state_29994;
(statearr_29999[(7)] = inst_29978);

(statearr_29999[(8)] = inst_29977);

return statearr_29999;
})();
if(inst_29979){
var statearr_30000_30012 = state_29994__$1;
(statearr_30000_30012[(1)] = (6));

} else {
var statearr_30001_30013 = state_29994__$1;
(statearr_30001_30013[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (6))){
var inst_29981 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29982 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_29983 = (new cljs.core.PersistentVector(null,2,(5),inst_29981,inst_29982,null));
var state_29994__$1 = state_29994;
var statearr_30002_30014 = state_29994__$1;
(statearr_30002_30014[(2)] = inst_29983);

(statearr_30002_30014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (7))){
var inst_29978 = (state_29994[(7)]);
var inst_29977 = (state_29994[(8)]);
var inst_29985 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29986 = ["Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29978),"\n","Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29977)].join('');
var inst_29987 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29986];
var inst_29988 = (new cljs.core.PersistentVector(null,2,(5),inst_29985,inst_29987,null));
var state_29994__$1 = state_29994;
var statearr_30003_30015 = state_29994__$1;
(statearr_30003_30015[(2)] = inst_29988);

(statearr_30003_30015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29995 === (8))){
var inst_29990 = (state_29994[(2)]);
var state_29994__$1 = state_29994;
var statearr_30004_30016 = state_29994__$1;
(statearr_30004_30016[(2)] = inst_29990);

(statearr_30004_30016[(1)] = (4));


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
var klipse$plugin$load_external_scripts_$_state_machine__15523__auto__ = null;
var klipse$plugin$load_external_scripts_$_state_machine__15523__auto____0 = (function (){
var statearr_30005 = [null,null,null,null,null,null,null,null,null];
(statearr_30005[(0)] = klipse$plugin$load_external_scripts_$_state_machine__15523__auto__);

(statearr_30005[(1)] = (1));

return statearr_30005;
});
var klipse$plugin$load_external_scripts_$_state_machine__15523__auto____1 = (function (state_29994){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30006){if((e30006 instanceof Object)){
var ex__15526__auto__ = e30006;
var statearr_30007_30017 = state_29994;
(statearr_30007_30017[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30018 = state_29994;
state_29994 = G__30018;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$load_external_scripts_$_state_machine__15523__auto__ = function(state_29994){
switch(arguments.length){
case 0:
return klipse$plugin$load_external_scripts_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$load_external_scripts_$_state_machine__15523__auto____1.call(this,state_29994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$load_external_scripts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$load_external_scripts_$_state_machine__15523__auto____0;
klipse$plugin$load_external_scripts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$load_external_scripts_$_state_machine__15523__auto____1;
return klipse$plugin$load_external_scripts_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30008 = f__15620__auto__.call(null);
(statearr_30008[(6)] = c__15619__auto__);

return statearr_30008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
/**
 * returns a channel c with a function f.
 *   f returns a channel that will be ready to read when the snippet is evaluated.
 */
klipse.plugin.klipsify_with_opts = (function klipse$plugin$klipsify_with_opts(element,p__30022,p__30023,mode){
var map__30024 = p__30022;
var map__30024__$1 = cljs.core.__destructure_map.call(null,map__30024);
var no_dynamic_scripts = cljs.core.get.call(null,map__30024__$1,new cljs.core.Keyword(null,"no_dynamic_scripts","no_dynamic_scripts",-730706373));
var codemirror_options_in = cljs.core.get.call(null,map__30024__$1,new cljs.core.Keyword(null,"codemirror_options_in","codemirror_options_in",-1220877316),cljs.core.PersistentArrayMap.EMPTY);
var eval_idle_msec = cljs.core.get.call(null,map__30024__$1,new cljs.core.Keyword(null,"eval_idle_msec","eval_idle_msec",1104296094),(20));
var codemirror_options_out = cljs.core.get.call(null,map__30024__$1,new cljs.core.Keyword(null,"codemirror_options_out","codemirror_options_out",440175842),cljs.core.PersistentArrayMap.EMPTY);
var print_length = cljs.core.get.call(null,map__30024__$1,new cljs.core.Keyword(null,"print_length","print_length",2140955911),(1000));
var editor_type = cljs.core.get.call(null,map__30024__$1,new cljs.core.Keyword(null,"editor_type","editor_type",195783179));
var minimalistic_ui = cljs.core.get.call(null,map__30024__$1,new cljs.core.Keyword(null,"minimalistic_ui","minimalistic_ui",-944637362),false);
var beautify_strings = cljs.core.get.call(null,map__30024__$1,new cljs.core.Keyword(null,"beautify_strings","beautify_strings",1690445266),false);
var eval_context = cljs.core.get.call(null,map__30024__$1,new cljs.core.Keyword(null,"eval_context","eval_context",1307295352));
var map__30025 = p__30023;
var map__30025__$1 = cljs.core.__destructure_map.call(null,map__30025);
var lang_opts = map__30025__$1;
var eval_fn = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var beautify_output_QMARK_ = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),true);
var no_result = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var default_editor = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"default-editor","default-editor",758164479));
var editor_out_mode = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var beautify_QMARK_ = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),true);
var min_eval_idle_msec = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(0));
var comment_str = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
var editor_in_mode = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var external_scripts = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),cljs.core.PersistentVector.EMPTY);
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30088){
var state_val_30089 = (state_30088[(1)]);
if((state_val_30089 === (7))){
var state_30088__$1 = state_30088;
var statearr_30090_30134 = state_30088__$1;
(statearr_30090_30134[(2)] = default_editor);

(statearr_30090_30134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (20))){
var state_30088__$1 = state_30088;
var statearr_30091_30135 = state_30088__$1;
(statearr_30091_30135[(2)] = false);

(statearr_30091_30135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (1))){
var state_30088__$1 = state_30088;
if(cljs.core.truth_(element)){
var statearr_30092_30136 = state_30088__$1;
(statearr_30092_30136[(1)] = (2));

} else {
var statearr_30093_30137 = state_30088__$1;
(statearr_30093_30137[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (4))){
var inst_30086 = (state_30088[(2)]);
var state_30088__$1 = state_30088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30088__$1,inst_30086);
} else {
if((state_val_30089 === (15))){
var inst_30045 = (state_30088[(7)]);
var inst_30041 = (state_30088[(8)]);
var inst_30050 = (state_30088[(9)]);
var inst_30056 = (state_30088[(10)]);
var inst_30038 = (state_30088[(11)]);
var inst_30035 = (state_30088[(12)]);
var inst_30044 = (state_30088[(13)]);
var inst_30040 = (state_30088[(14)]);
var inst_30055 = (state_30088[(15)]);
var inst_30043 = (state_30088[(16)]);
var inst_30034 = (state_30088[(17)]);
var inst_30054 = (state_30088[(18)]);
var inst_30067 = (state_30088[(2)]);
var inst_30068 = (function (){var the_editor_type = inst_30050;
var eval_fn_with_args = inst_30035;
var idle_msec = inst_30041;
var loop_msec = inst_30043;
var load_error = inst_30056;
var async_code_QMARK_ = inst_30044;
var load_status = inst_30055;
var vec__30028 = inst_30054;
var eval_args = inst_30034;
var source_code = inst_30038;
var preamble = inst_30045;
var map__30027 = inst_30040;
return (function (p1__30021_SHARP_){
var c__15619__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30097){
var state_val_30098 = (state_30097[(1)]);
if((state_val_30098 === (1))){
var state_30097__$1 = state_30097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30097__$1,(2),klipse.plugin.event_chan,p1__30021_SHARP_);
} else {
if((state_val_30098 === (2))){
var inst_30095 = (state_30097[(2)]);
var state_30097__$1 = state_30097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30097__$1,inst_30095);
} else {
return null;
}
}
});
return (function() {
var klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__ = null;
var klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____0 = (function (){
var statearr_30099 = [null,null,null,null,null,null,null];
(statearr_30099[(0)] = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__);

(statearr_30099[(1)] = (1));

return statearr_30099;
});
var klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1 = (function (state_30097){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30100){if((e30100 instanceof Object)){
var ex__15526__auto__ = e30100;
var statearr_30101_30138 = state_30097;
(statearr_30101_30138[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30139 = state_30097;
state_30097 = G__30139;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__ = function(state_30097){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1.call(this,state_30097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30102 = f__15620__auto__.call(null);
(statearr_30102[(6)] = c__15619__auto____$1);

return statearr_30102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto____$1;
});
})();
var inst_30069 = klipse.plugin.snippet_num_BANG_.call(null);
var inst_30070 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_30055);
var state_30088__$1 = (function (){var statearr_30103 = state_30088;
(statearr_30103[(19)] = inst_30067);

(statearr_30103[(20)] = inst_30068);

(statearr_30103[(21)] = inst_30069);

return statearr_30103;
})();
if(inst_30070){
var statearr_30104_30140 = state_30088__$1;
(statearr_30104_30140[(1)] = (16));

} else {
var statearr_30105_30141 = state_30088__$1;
(statearr_30105_30141[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (21))){
var inst_30045 = (state_30088[(7)]);
var inst_30041 = (state_30088[(8)]);
var inst_30050 = (state_30088[(9)]);
var inst_30038 = (state_30088[(11)]);
var inst_30057 = (state_30088[(22)]);
var inst_30044 = (state_30088[(13)]);
var inst_30067 = (state_30088[(19)]);
var inst_30068 = (state_30088[(20)]);
var inst_30043 = (state_30088[(16)]);
var inst_30075 = (state_30088[(23)]);
var inst_30062 = (state_30088[(24)]);
var inst_30069 = (state_30088[(21)]);
var inst_30080 = (state_30088[(2)]);
var inst_30081 = [inst_30062,inst_30067,inst_30041,inst_30043,element,editor_out_mode,inst_30068,inst_30044,mode,inst_30038,inst_30045,codemirror_options_out,editor_in_mode,inst_30069,inst_30075,no_result,codemirror_options_in,inst_30080];
var inst_30082 = cljs.core.PersistentHashMap.fromArrays(inst_30057,inst_30081);
var inst_30083 = klipse.klipse_editors.create_editor.call(null,inst_30050,inst_30082);
var state_30088__$1 = state_30088;
var statearr_30106_30142 = state_30088__$1;
(statearr_30106_30142[(2)] = inst_30083);

(statearr_30106_30142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (13))){
var state_30088__$1 = state_30088;
var statearr_30107_30143 = state_30088__$1;
(statearr_30107_30143[(2)] = beautify_QMARK_);

(statearr_30107_30143[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (6))){
var inst_30042 = (state_30088[(25)]);
var state_30088__$1 = state_30088;
var statearr_30108_30144 = state_30088__$1;
(statearr_30108_30144[(2)] = inst_30042);

(statearr_30108_30144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (17))){
var inst_30045 = (state_30088[(7)]);
var inst_30041 = (state_30088[(8)]);
var inst_30050 = (state_30088[(9)]);
var inst_30056 = (state_30088[(10)]);
var inst_30038 = (state_30088[(11)]);
var inst_30035 = (state_30088[(12)]);
var inst_30044 = (state_30088[(13)]);
var inst_30040 = (state_30088[(14)]);
var inst_30055 = (state_30088[(15)]);
var inst_30043 = (state_30088[(16)]);
var inst_30034 = (state_30088[(17)]);
var inst_30054 = (state_30088[(18)]);
var inst_30073 = (function (){var the_editor_type = inst_30050;
var eval_fn_with_args = inst_30035;
var idle_msec = inst_30041;
var loop_msec = inst_30043;
var load_error = inst_30056;
var async_code_QMARK_ = inst_30044;
var load_status = inst_30055;
var vec__30028 = inst_30054;
var eval_args = inst_30034;
var source_code = inst_30038;
var preamble = inst_30045;
var map__30027 = inst_30040;
return (function (){
return cljs.core.async.chan.call(null);
});
})();
var state_30088__$1 = state_30088;
var statearr_30109_30145 = state_30088__$1;
(statearr_30109_30145[(2)] = inst_30073);

(statearr_30109_30145[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (3))){
var state_30088__$1 = state_30088;
var statearr_30110_30146 = state_30088__$1;
(statearr_30110_30146[(2)] = null);

(statearr_30110_30146[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (12))){
var inst_30055 = (state_30088[(15)]);
var inst_30062 = (state_30088[(2)]);
var inst_30063 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_30055);
var state_30088__$1 = (function (){var statearr_30111 = state_30088;
(statearr_30111[(24)] = inst_30062);

return statearr_30111;
})();
if(inst_30063){
var statearr_30112_30147 = state_30088__$1;
(statearr_30112_30147[(1)] = (13));

} else {
var statearr_30113_30148 = state_30088__$1;
(statearr_30113_30148[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (2))){
var inst_30034 = (state_30088[(17)]);
var inst_30031 = [new cljs.core.Keyword(null,"eval-context","eval-context",536255614),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479)];
var inst_30032 = [eval_context,print_length,beautify_strings];
var inst_30033 = cljs.core.PersistentHashMap.fromArrays(inst_30031,inst_30032);
var inst_30034__$1 = klipse.args_from_element.eval_args_from_element.call(null,element,inst_30033);
var inst_30035 = (function (){var eval_args = inst_30034__$1;
return (function (p1__30019_SHARP_,p2__30020_SHARP_){
return eval_fn.call(null,p1__30019_SHARP_,cljs.core.merge.call(null,eval_args,p2__30020_SHARP_));
});
})();
var inst_30036 = klipse.args_from_element.content.call(null,element,comment_str);
var state_30088__$1 = (function (){var statearr_30114 = state_30088;
(statearr_30114[(12)] = inst_30035);

(statearr_30114[(17)] = inst_30034__$1);

return statearr_30114;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30088__$1,(5),inst_30036);
} else {
if((state_val_30089 === (19))){
var state_30088__$1 = state_30088;
var statearr_30115_30149 = state_30088__$1;
(statearr_30115_30149[(2)] = beautify_output_QMARK_);

(statearr_30115_30149[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (11))){
var inst_30056 = (state_30088[(10)]);
var state_30088__$1 = state_30088;
var statearr_30116_30150 = state_30088__$1;
(statearr_30116_30150[(2)] = inst_30056);

(statearr_30116_30150[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (9))){
var inst_30055 = (state_30088[(15)]);
var inst_30054 = (state_30088[(18)]);
var inst_30054__$1 = (state_30088[(2)]);
var inst_30055__$1 = cljs.core.nth.call(null,inst_30054__$1,(0),null);
var inst_30056 = cljs.core.nth.call(null,inst_30054__$1,(1),null);
var inst_30057 = [new cljs.core.Keyword(null,"default-txt","default-txt",27736322),new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"on-edit-cb","on-edit-cb",1727649734),new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"source-code","source-code",-685884337),new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"no-result","no-result",1702657437),new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441)];
var inst_30058 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_30055__$1);
var state_30088__$1 = (function (){var statearr_30117 = state_30088;
(statearr_30117[(10)] = inst_30056);

(statearr_30117[(22)] = inst_30057);

(statearr_30117[(15)] = inst_30055__$1);

(statearr_30117[(18)] = inst_30054__$1);

return statearr_30117;
})();
if(inst_30058){
var statearr_30118_30151 = state_30088__$1;
(statearr_30118_30151[(1)] = (10));

} else {
var statearr_30119_30152 = state_30088__$1;
(statearr_30119_30152[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (5))){
var inst_30040 = (state_30088[(14)]);
var inst_30042 = (state_30088[(25)]);
var inst_30038 = (state_30088[(2)]);
var inst_30039 = klipse.plugin.calc_editor_args_from_element.call(null,element,eval_idle_msec,min_eval_idle_msec,editor_type);
var inst_30040__$1 = cljs.core.__destructure_map.call(null,inst_30039);
var inst_30041 = cljs.core.get.call(null,inst_30040__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var inst_30042__$1 = cljs.core.get.call(null,inst_30040__$1,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480));
var inst_30043 = cljs.core.get.call(null,inst_30040__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var inst_30044 = cljs.core.get.call(null,inst_30040__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var inst_30045 = cljs.core.get.call(null,inst_30040__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var state_30088__$1 = (function (){var statearr_30120 = state_30088;
(statearr_30120[(7)] = inst_30045);

(statearr_30120[(8)] = inst_30041);

(statearr_30120[(11)] = inst_30038);

(statearr_30120[(13)] = inst_30044);

(statearr_30120[(14)] = inst_30040__$1);

(statearr_30120[(16)] = inst_30043);

(statearr_30120[(25)] = inst_30042__$1);

return statearr_30120;
})();
if(cljs.core.truth_(inst_30042__$1)){
var statearr_30121_30153 = state_30088__$1;
(statearr_30121_30153[(1)] = (6));

} else {
var statearr_30122_30154 = state_30088__$1;
(statearr_30122_30154[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (14))){
var state_30088__$1 = state_30088;
var statearr_30123_30155 = state_30088__$1;
(statearr_30123_30155[(2)] = false);

(statearr_30123_30155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (16))){
var inst_30035 = (state_30088[(12)]);
var state_30088__$1 = state_30088;
var statearr_30124_30156 = state_30088__$1;
(statearr_30124_30156[(2)] = inst_30035);

(statearr_30124_30156[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (10))){
var state_30088__$1 = state_30088;
var statearr_30125_30157 = state_30088__$1;
(statearr_30125_30157[(2)] = klipse.plugin.out_placeholder);

(statearr_30125_30157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (18))){
var inst_30055 = (state_30088[(15)]);
var inst_30075 = (state_30088[(2)]);
var inst_30076 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_30055);
var state_30088__$1 = (function (){var statearr_30126 = state_30088;
(statearr_30126[(23)] = inst_30075);

return statearr_30126;
})();
if(inst_30076){
var statearr_30127_30158 = state_30088__$1;
(statearr_30127_30158[(1)] = (19));

} else {
var statearr_30128_30159 = state_30088__$1;
(statearr_30128_30159[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30089 === (8))){
var inst_30049 = (state_30088[(2)]);
var inst_30050 = klipse.plugin.calc_editor_type.call(null,minimalistic_ui,inst_30049);
var inst_30051 = gadjett.collections.collify.call(null,external_scripts);
var inst_30052 = klipse.plugin.load_external_scripts.call(null,inst_30051,no_dynamic_scripts);
var state_30088__$1 = (function (){var statearr_30129 = state_30088;
(statearr_30129[(9)] = inst_30050);

return statearr_30129;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30088__$1,(9),inst_30052);
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
}
}
}
}
});
return (function() {
var klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__ = null;
var klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____0 = (function (){
var statearr_30130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30130[(0)] = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__);

(statearr_30130[(1)] = (1));

return statearr_30130;
});
var klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1 = (function (state_30088){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30131){if((e30131 instanceof Object)){
var ex__15526__auto__ = e30131;
var statearr_30132_30160 = state_30088;
(statearr_30132_30160[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30161 = state_30088;
state_30088 = G__30161;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__ = function(state_30088){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1.call(this,state_30088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30133 = f__15620__auto__.call(null);
(statearr_30133[(6)] = c__15619__auto__);

return statearr_30133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Symbol("goog.dom","isElement","goog.dom/isElement",-1707224949,null),goog.dom.isElement);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"str","str",1089608819)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.string_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null),cljs.core.integer_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),true),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),false))),(function (p1__30162_SHARP_){
return ((cljs.core._EQ_.call(null,p1__30162_SHARP_,true)) || (cljs.core._EQ_.call(null,p1__30162_SHARP_,false)));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__30163){
return cljs.core.map_QMARK_.call(null,G__30163);
}),(function (G__30163){
return cljs.core.contains_QMARK_.call(null,G__30163,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
}),(function (G__30163){
return cljs.core.contains_QMARK_.call(null,G__30163,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
}),(function (G__30163){
return cljs.core.contains_QMARK_.call(null,G__30163,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
}),(function (G__30163){
return cljs.core.contains_QMARK_.call(null,G__30163,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
})], null),(function (G__30163){
return ((cljs.core.map_QMARK_.call(null,G__30163)) && (((cljs.core.contains_QMARK_.call(null,G__30163,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))) && (((cljs.core.contains_QMARK_.call(null,G__30163,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))) && (((cljs.core.contains_QMARK_.call(null,G__30163,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))) && (cljs.core.contains_QMARK_.call(null,G__30163,new cljs.core.Keyword(null,"comment-str","comment-str",130143853))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__30164){
return cljs.core.map_QMARK_.call(null,G__30164);
})], null),(function (G__30164){
return cljs.core.map_QMARK_.call(null,G__30164);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eval_idle_msec","eval_idle_msec",1104296094),new cljs.core.Keyword(null,"minimalistic_ui","minimalistic_ui",-944637362)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("klipse.plugin","klipsify-with-opts","klipse.plugin/klipsify-with-opts",331340081,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"opts","opts",155075701)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * To be called from outside.
 *   Klipsifies a snippet.
 *   Returns a channel that will be ready when the snippet is evaluated.
 */
klipse.plugin.klipsify = (function klipse$plugin$klipsify(element,general_settings,mode){
var temp__5802__auto__ = cljs.core.deref.call(null,klipse.common.registry.mode_options).call(null,mode);
if(cljs.core.truth_(temp__5802__auto__)){
var opts = temp__5802__auto__;
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30172){
var state_val_30173 = (state_30172[(1)]);
if((state_val_30173 === (1))){
var inst_30165 = klipse.plugin.klipsify_with_opts.call(null,element,general_settings,opts,mode);
var state_30172__$1 = state_30172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30172__$1,(3),inst_30165);
} else {
if((state_val_30173 === (2))){
var inst_30170 = (state_30172[(2)]);
var state_30172__$1 = state_30172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30172__$1,inst_30170);
} else {
if((state_val_30173 === (3))){
var inst_30167 = (state_30172[(2)]);
var inst_30168 = inst_30167.call(null);
var state_30172__$1 = state_30172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30172__$1,(2),inst_30168);
} else {
return null;
}
}
}
});
return (function() {
var klipse$plugin$klipsify_$_state_machine__15523__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__15523__auto____0 = (function (){
var statearr_30174 = [null,null,null,null,null,null,null];
(statearr_30174[(0)] = klipse$plugin$klipsify_$_state_machine__15523__auto__);

(statearr_30174[(1)] = (1));

return statearr_30174;
});
var klipse$plugin$klipsify_$_state_machine__15523__auto____1 = (function (state_30172){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30175){if((e30175 instanceof Object)){
var ex__15526__auto__ = e30175;
var statearr_30176_30188 = state_30172;
(statearr_30176_30188[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30189 = state_30172;
state_30172 = G__30189;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__15523__auto__ = function(state_30172){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__15523__auto____1.call(this,state_30172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30177 = f__15620__auto__.call(null);
(statearr_30177[(6)] = c__15619__auto__);

return statearr_30177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
} else {
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30182){
var state_val_30183 = (state_30182[(1)]);
if((state_val_30183 === (1))){
var inst_30178 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_30179 = cljs.core.keys.call(null,inst_30178);
var inst_30180 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_30179);
var state_30182__$1 = state_30182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30182__$1,inst_30180);
} else {
return null;
}
});
return (function() {
var klipse$plugin$klipsify_$_state_machine__15523__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__15523__auto____0 = (function (){
var statearr_30184 = [null,null,null,null,null,null,null];
(statearr_30184[(0)] = klipse$plugin$klipsify_$_state_machine__15523__auto__);

(statearr_30184[(1)] = (1));

return statearr_30184;
});
var klipse$plugin$klipsify_$_state_machine__15523__auto____1 = (function (state_30182){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30185){if((e30185 instanceof Object)){
var ex__15526__auto__ = e30185;
var statearr_30186_30190 = state_30182;
(statearr_30186_30190[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30191 = state_30182;
state_30182 = G__30191;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__15523__auto__ = function(state_30182){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__15523__auto____1.call(this,state_30182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30187 = f__15620__auto__.call(null);
(statearr_30187[(6)] = c__15619__auto__);

return statearr_30187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
}
});
goog.exportSymbol('klipse.plugin.klipsify', klipse.plugin.klipsify);
klipse.plugin.klipsify_no_eval = (function klipse$plugin$klipsify_no_eval(element,general_settings,mode){
var temp__5802__auto__ = cljs.core.deref.call(null,klipse.common.registry.mode_options).call(null,mode);
if(cljs.core.truth_(temp__5802__auto__)){
var opts = temp__5802__auto__;
return klipse.plugin.klipsify_with_opts.call(null,element,general_settings,opts,mode);
} else {
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30194){
var state_val_30195 = (state_30194[(1)]);
if((state_val_30195 === (1))){
var inst_30192 = (function (){return (function (){
var c__15619__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30200){
var state_val_30201 = (state_30200[(1)]);
if((state_val_30201 === (1))){
var inst_30196 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_30197 = cljs.core.keys.call(null,inst_30196);
var inst_30198 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_30197);
var state_30200__$1 = state_30200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30200__$1,inst_30198);
} else {
return null;
}
});
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_30202 = [null,null,null,null,null,null,null];
(statearr_30202[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__);

(statearr_30202[(1)] = (1));

return statearr_30202;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1 = (function (state_30200){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30203){if((e30203 instanceof Object)){
var ex__15526__auto__ = e30203;
var statearr_30204_30210 = state_30200;
(statearr_30204_30210[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30211 = state_30200;
state_30200 = G__30211;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__ = function(state_30200){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1.call(this,state_30200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30205 = f__15620__auto__.call(null);
(statearr_30205[(6)] = c__15619__auto____$1);

return statearr_30205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto____$1;
});
})();
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30194__$1,inst_30192);
} else {
return null;
}
});
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_30206 = [null,null,null,null,null,null,null];
(statearr_30206[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__);

(statearr_30206[(1)] = (1));

return statearr_30206;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1 = (function (state_30194){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30207){if((e30207 instanceof Object)){
var ex__15526__auto__ = e30207;
var statearr_30208_30212 = state_30194;
(statearr_30208_30212[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30213 = state_30194;
state_30194 = G__30213;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__ = function(state_30194){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1.call(this,state_30194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30209 = f__15620__auto__.call(null);
(statearr_30209[(6)] = c__15619__auto__);

return statearr_30209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
}
});
goog.exportSymbol('klipse.plugin.klipsify_no_eval', klipse.plugin.klipsify_no_eval);
klipse.plugin.edit_elements = (function klipse$plugin$edit_elements(elements,general_settings,modes){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30240){
var state_val_30241 = (state_30240[(1)]);
if((state_val_30241 === (7))){
var inst_30221 = (state_30240[(7)]);
var inst_30220 = (state_30240[(8)]);
var inst_30223 = klipse.plugin.klipsify_no_eval.call(null,inst_30220,general_settings,inst_30221);
var state_30240__$1 = state_30240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30240__$1,(10),inst_30223);
} else {
if((state_val_30241 === (1))){
var inst_30214 = cljs.core.PersistentVector.EMPTY;
var inst_30215 = elements;
var inst_30216 = inst_30214;
var state_30240__$1 = (function (){var statearr_30242 = state_30240;
(statearr_30242[(9)] = inst_30215);

(statearr_30242[(10)] = inst_30216);

return statearr_30242;
})();
var statearr_30243_30261 = state_30240__$1;
(statearr_30243_30261[(2)] = null);

(statearr_30243_30261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (4))){
var inst_30215 = (state_30240[(9)]);
var inst_30221 = (state_30240[(7)]);
var inst_30220 = (state_30240[(8)]);
var inst_30220__$1 = cljs.core.first.call(null,inst_30215);
var inst_30221__$1 = modes.call(null,inst_30220__$1);
var state_30240__$1 = (function (){var statearr_30244 = state_30240;
(statearr_30244[(7)] = inst_30221__$1);

(statearr_30244[(8)] = inst_30220__$1);

return statearr_30244;
})();
if(cljs.core.truth_(inst_30221__$1)){
var statearr_30245_30262 = state_30240__$1;
(statearr_30245_30262[(1)] = (7));

} else {
var statearr_30246_30263 = state_30240__$1;
(statearr_30246_30263[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (6))){
var inst_30236 = (state_30240[(2)]);
var state_30240__$1 = state_30240;
var statearr_30247_30264 = state_30240__$1;
(statearr_30247_30264[(2)] = inst_30236);

(statearr_30247_30264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (3))){
var inst_30238 = (state_30240[(2)]);
var state_30240__$1 = state_30240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30240__$1,inst_30238);
} else {
if((state_val_30241 === (2))){
var inst_30215 = (state_30240[(9)]);
var inst_30218 = cljs.core.seq.call(null,inst_30215);
var state_30240__$1 = state_30240;
if(inst_30218){
var statearr_30248_30265 = state_30240__$1;
(statearr_30248_30265[(1)] = (4));

} else {
var statearr_30249_30266 = state_30240__$1;
(statearr_30249_30266[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (9))){
var inst_30233 = (state_30240[(2)]);
var state_30240__$1 = state_30240;
var statearr_30250_30267 = state_30240__$1;
(statearr_30250_30267[(2)] = inst_30233);

(statearr_30250_30267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (5))){
var inst_30216 = (state_30240[(10)]);
var state_30240__$1 = state_30240;
var statearr_30252_30268 = state_30240__$1;
(statearr_30252_30268[(2)] = inst_30216);

(statearr_30252_30268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (10))){
var inst_30215 = (state_30240[(9)]);
var inst_30216 = (state_30240[(10)]);
var inst_30225 = (state_30240[(2)]);
var inst_30226 = cljs.core.rest.call(null,inst_30215);
var inst_30227 = cljs.core.conj.call(null,inst_30216,inst_30225);
var inst_30215__$1 = inst_30226;
var inst_30216__$1 = inst_30227;
var state_30240__$1 = (function (){var statearr_30253 = state_30240;
(statearr_30253[(9)] = inst_30215__$1);

(statearr_30253[(10)] = inst_30216__$1);

return statearr_30253;
})();
var statearr_30254_30269 = state_30240__$1;
(statearr_30254_30269[(2)] = null);

(statearr_30254_30269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (8))){
var inst_30215 = (state_30240[(9)]);
var inst_30216 = (state_30240[(10)]);
var inst_30230 = cljs.core.rest.call(null,inst_30215);
var tmp30251 = inst_30216;
var inst_30215__$1 = inst_30230;
var inst_30216__$1 = tmp30251;
var state_30240__$1 = (function (){var statearr_30255 = state_30240;
(statearr_30255[(9)] = inst_30215__$1);

(statearr_30255[(10)] = inst_30216__$1);

return statearr_30255;
})();
var statearr_30256_30270 = state_30240__$1;
(statearr_30256_30270[(2)] = null);

(statearr_30256_30270[(1)] = (2));


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
var klipse$plugin$edit_elements_$_state_machine__15523__auto__ = null;
var klipse$plugin$edit_elements_$_state_machine__15523__auto____0 = (function (){
var statearr_30257 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30257[(0)] = klipse$plugin$edit_elements_$_state_machine__15523__auto__);

(statearr_30257[(1)] = (1));

return statearr_30257;
});
var klipse$plugin$edit_elements_$_state_machine__15523__auto____1 = (function (state_30240){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30258){if((e30258 instanceof Object)){
var ex__15526__auto__ = e30258;
var statearr_30259_30271 = state_30240;
(statearr_30259_30271[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30272 = state_30240;
state_30240 = G__30272;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$edit_elements_$_state_machine__15523__auto__ = function(state_30240){
switch(arguments.length){
case 0:
return klipse$plugin$edit_elements_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$edit_elements_$_state_machine__15523__auto____1.call(this,state_30240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$edit_elements_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$edit_elements_$_state_machine__15523__auto____0;
klipse$plugin$edit_elements_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$edit_elements_$_state_machine__15523__auto____1;
return klipse$plugin$edit_elements_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30260 = f__15620__auto__.call(null);
(statearr_30260[(6)] = c__15619__auto__);

return statearr_30260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.plugin.eval_snippets_on_change = (function klipse$plugin$eval_snippets_on_change(p__30273,eval_fns){
var map__30274 = p__30273;
var map__30274__$1 = cljs.core.__destructure_map.call(null,map__30274);
var re_evaluate_all_snippets_on_change = cljs.core.get.call(null,map__30274__$1,new cljs.core.Keyword(null,"re_evaluate_all_snippets_on_change","re_evaluate_all_snippets_on_change",-98983280));
if(cljs.core.truth_(re_evaluate_all_snippets_on_change)){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30325){
var state_val_30326 = (state_30325[(1)]);
if((state_val_30326 === (7))){
var inst_30287 = (state_30325[(7)]);
var inst_30285 = (state_30325[(8)]);
var inst_30286 = (state_30325[(9)]);
var inst_30284 = (state_30325[(10)]);
var inst_30292 = cljs.core._nth.call(null,inst_30285,inst_30287);
var inst_30293 = inst_30292.call(null);
var inst_30294 = (inst_30287 + (1));
var tmp30327 = inst_30285;
var tmp30328 = inst_30286;
var tmp30329 = inst_30284;
var inst_30284__$1 = tmp30329;
var inst_30285__$1 = tmp30327;
var inst_30286__$1 = tmp30328;
var inst_30287__$1 = inst_30294;
var state_30325__$1 = (function (){var statearr_30330 = state_30325;
(statearr_30330[(7)] = inst_30287__$1);

(statearr_30330[(8)] = inst_30285__$1);

(statearr_30330[(11)] = inst_30293);

(statearr_30330[(9)] = inst_30286__$1);

(statearr_30330[(10)] = inst_30284__$1);

return statearr_30330;
})();
var statearr_30331_30358 = state_30325__$1;
(statearr_30331_30358[(2)] = null);

(statearr_30331_30358[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (1))){
var state_30325__$1 = state_30325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30325__$1,(2),klipse.plugin.event_chan);
} else {
if((state_val_30326 === (4))){
var inst_30323 = (state_30325[(2)]);
var state_30325__$1 = state_30325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30325__$1,inst_30323);
} else {
if((state_val_30326 === (15))){
var inst_30311 = (state_30325[(2)]);
var state_30325__$1 = state_30325;
var statearr_30332_30359 = state_30325__$1;
(statearr_30332_30359[(2)] = inst_30311);

(statearr_30332_30359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (13))){
var inst_30297 = (state_30325[(12)]);
var inst_30301 = cljs.core.chunk_first.call(null,inst_30297);
var inst_30302 = cljs.core.chunk_rest.call(null,inst_30297);
var inst_30303 = cljs.core.count.call(null,inst_30301);
var inst_30284 = inst_30302;
var inst_30285 = inst_30301;
var inst_30286 = inst_30303;
var inst_30287 = (0);
var state_30325__$1 = (function (){var statearr_30333 = state_30325;
(statearr_30333[(7)] = inst_30287);

(statearr_30333[(8)] = inst_30285);

(statearr_30333[(9)] = inst_30286);

(statearr_30333[(10)] = inst_30284);

return statearr_30333;
})();
var statearr_30334_30360 = state_30325__$1;
(statearr_30334_30360[(2)] = null);

(statearr_30334_30360[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (6))){
var inst_30318 = (state_30325[(2)]);
var state_30325__$1 = (function (){var statearr_30335 = state_30325;
(statearr_30335[(13)] = inst_30318);

return statearr_30335;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30325__$1,(16),klipse.plugin.event_chan);
} else {
if((state_val_30326 === (3))){
var inst_30283 = cljs.core.seq.call(null,eval_fns);
var inst_30284 = inst_30283;
var inst_30285 = null;
var inst_30286 = (0);
var inst_30287 = (0);
var state_30325__$1 = (function (){var statearr_30336 = state_30325;
(statearr_30336[(7)] = inst_30287);

(statearr_30336[(8)] = inst_30285);

(statearr_30336[(9)] = inst_30286);

(statearr_30336[(10)] = inst_30284);

return statearr_30336;
})();
var statearr_30337_30361 = state_30325__$1;
(statearr_30337_30361[(2)] = null);

(statearr_30337_30361[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (12))){
var inst_30314 = (state_30325[(2)]);
var state_30325__$1 = state_30325;
var statearr_30338_30362 = state_30325__$1;
(statearr_30338_30362[(2)] = inst_30314);

(statearr_30338_30362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (2))){
var inst_30276 = (state_30325[(2)]);
var inst_30277 = inst_30276;
var state_30325__$1 = (function (){var statearr_30339 = state_30325;
(statearr_30339[(14)] = inst_30277);

return statearr_30339;
})();
var statearr_30340_30363 = state_30325__$1;
(statearr_30340_30363[(2)] = null);

(statearr_30340_30363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (11))){
var state_30325__$1 = state_30325;
var statearr_30341_30364 = state_30325__$1;
(statearr_30341_30364[(2)] = null);

(statearr_30341_30364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (9))){
var inst_30316 = (state_30325[(2)]);
var state_30325__$1 = state_30325;
var statearr_30342_30365 = state_30325__$1;
(statearr_30342_30365[(2)] = inst_30316);

(statearr_30342_30365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (5))){
var inst_30287 = (state_30325[(7)]);
var inst_30286 = (state_30325[(9)]);
var inst_30289 = (inst_30287 < inst_30286);
var inst_30290 = inst_30289;
var state_30325__$1 = state_30325;
if(cljs.core.truth_(inst_30290)){
var statearr_30343_30366 = state_30325__$1;
(statearr_30343_30366[(1)] = (7));

} else {
var statearr_30344_30367 = state_30325__$1;
(statearr_30344_30367[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (14))){
var inst_30297 = (state_30325[(12)]);
var inst_30306 = cljs.core.first.call(null,inst_30297);
var inst_30307 = inst_30306.call(null);
var inst_30308 = cljs.core.next.call(null,inst_30297);
var inst_30284 = inst_30308;
var inst_30285 = null;
var inst_30286 = (0);
var inst_30287 = (0);
var state_30325__$1 = (function (){var statearr_30345 = state_30325;
(statearr_30345[(15)] = inst_30307);

(statearr_30345[(7)] = inst_30287);

(statearr_30345[(8)] = inst_30285);

(statearr_30345[(9)] = inst_30286);

(statearr_30345[(10)] = inst_30284);

return statearr_30345;
})();
var statearr_30346_30368 = state_30325__$1;
(statearr_30346_30368[(2)] = null);

(statearr_30346_30368[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (16))){
var inst_30320 = (state_30325[(2)]);
var inst_30277 = inst_30320;
var state_30325__$1 = (function (){var statearr_30347 = state_30325;
(statearr_30347[(14)] = inst_30277);

return statearr_30347;
})();
var statearr_30348_30369 = state_30325__$1;
(statearr_30348_30369[(2)] = null);

(statearr_30348_30369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (10))){
var inst_30297 = (state_30325[(12)]);
var inst_30299 = cljs.core.chunked_seq_QMARK_.call(null,inst_30297);
var state_30325__$1 = state_30325;
if(inst_30299){
var statearr_30349_30370 = state_30325__$1;
(statearr_30349_30370[(1)] = (13));

} else {
var statearr_30350_30371 = state_30325__$1;
(statearr_30350_30371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30326 === (8))){
var inst_30297 = (state_30325[(12)]);
var inst_30284 = (state_30325[(10)]);
var inst_30297__$1 = cljs.core.seq.call(null,inst_30284);
var state_30325__$1 = (function (){var statearr_30351 = state_30325;
(statearr_30351[(12)] = inst_30297__$1);

return statearr_30351;
})();
if(inst_30297__$1){
var statearr_30352_30372 = state_30325__$1;
(statearr_30352_30372[(1)] = (10));

} else {
var statearr_30353_30373 = state_30325__$1;
(statearr_30353_30373[(1)] = (11));

}

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
var klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto__ = null;
var klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto____0 = (function (){
var statearr_30354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30354[(0)] = klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto__);

(statearr_30354[(1)] = (1));

return statearr_30354;
});
var klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto____1 = (function (state_30325){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30355){if((e30355 instanceof Object)){
var ex__15526__auto__ = e30355;
var statearr_30356_30374 = state_30325;
(statearr_30356_30374[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30375 = state_30325;
state_30325 = G__30375;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto__ = function(state_30325){
switch(arguments.length){
case 0:
return klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto____1.call(this,state_30325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto____0;
klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto____1;
return klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30357 = f__15620__auto__.call(null);
(statearr_30357[(6)] = c__15619__auto__);

return statearr_30357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
} else {
return null;
}
});
klipse.plugin.mark_first_eval_BANG_ = (function klipse$plugin$mark_first_eval_BANG_(){
console.warn("First evaluation of all snippets is done");

return klipse.dom_utils.append_div.call(null,klipse.dom_utils.body.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"klipse-ready"], null));
});
klipse.plugin.klipsify_elements = (function klipse$plugin$klipsify_elements(elements,general_settings,modes){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30426){
var state_val_30427 = (state_30426[(1)]);
if((state_val_30427 === (7))){
var inst_30420 = (state_30426[(2)]);
var state_30426__$1 = state_30426;
var statearr_30428_30455 = state_30426__$1;
(statearr_30428_30455[(2)] = inst_30420);

(statearr_30428_30455[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (1))){
var inst_30376 = klipse.plugin.edit_elements.call(null,elements,general_settings,modes);
var state_30426__$1 = state_30426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30426__$1,(2),inst_30376);
} else {
if((state_val_30427 === (4))){
var inst_30378 = (state_30426[(7)]);
var inst_30422 = (state_30426[(2)]);
var inst_30423 = klipse.plugin.mark_first_eval_BANG_.call(null);
var inst_30424 = klipse.plugin.eval_snippets_on_change.call(null,general_settings,inst_30378);
var state_30426__$1 = (function (){var statearr_30429 = state_30426;
(statearr_30429[(8)] = inst_30423);

(statearr_30429[(9)] = inst_30422);

return statearr_30429;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30426__$1,inst_30424);
} else {
if((state_val_30427 === (15))){
var inst_30399 = (state_30426[(10)]);
var inst_30411 = (state_30426[(2)]);
var inst_30412 = cljs.core.next.call(null,inst_30399);
var inst_30384 = inst_30412;
var inst_30385 = null;
var inst_30386 = (0);
var inst_30387 = (0);
var state_30426__$1 = (function (){var statearr_30430 = state_30426;
(statearr_30430[(11)] = inst_30387);

(statearr_30430[(12)] = inst_30384);

(statearr_30430[(13)] = inst_30411);

(statearr_30430[(14)] = inst_30385);

(statearr_30430[(15)] = inst_30386);

return statearr_30430;
})();
var statearr_30431_30456 = state_30426__$1;
(statearr_30431_30456[(2)] = null);

(statearr_30431_30456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (13))){
var inst_30399 = (state_30426[(10)]);
var inst_30408 = cljs.core.first.call(null,inst_30399);
var inst_30409 = inst_30408.call(null);
var state_30426__$1 = state_30426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30426__$1,(15),inst_30409);
} else {
if((state_val_30427 === (6))){
var inst_30399 = (state_30426[(10)]);
var inst_30384 = (state_30426[(12)]);
var inst_30399__$1 = cljs.core.seq.call(null,inst_30384);
var state_30426__$1 = (function (){var statearr_30432 = state_30426;
(statearr_30432[(10)] = inst_30399__$1);

return statearr_30432;
})();
if(inst_30399__$1){
var statearr_30433_30457 = state_30426__$1;
(statearr_30433_30457[(1)] = (9));

} else {
var statearr_30434_30458 = state_30426__$1;
(statearr_30434_30458[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (3))){
var inst_30387 = (state_30426[(11)]);
var inst_30386 = (state_30426[(15)]);
var inst_30389 = (inst_30387 < inst_30386);
var inst_30390 = inst_30389;
var state_30426__$1 = state_30426;
if(cljs.core.truth_(inst_30390)){
var statearr_30435_30459 = state_30426__$1;
(statearr_30435_30459[(1)] = (5));

} else {
var statearr_30436_30460 = state_30426__$1;
(statearr_30436_30460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (12))){
var inst_30399 = (state_30426[(10)]);
var inst_30403 = cljs.core.chunk_first.call(null,inst_30399);
var inst_30404 = cljs.core.chunk_rest.call(null,inst_30399);
var inst_30405 = cljs.core.count.call(null,inst_30403);
var inst_30384 = inst_30404;
var inst_30385 = inst_30403;
var inst_30386 = inst_30405;
var inst_30387 = (0);
var state_30426__$1 = (function (){var statearr_30437 = state_30426;
(statearr_30437[(11)] = inst_30387);

(statearr_30437[(12)] = inst_30384);

(statearr_30437[(14)] = inst_30385);

(statearr_30437[(15)] = inst_30386);

return statearr_30437;
})();
var statearr_30438_30461 = state_30426__$1;
(statearr_30438_30461[(2)] = null);

(statearr_30438_30461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (2))){
var inst_30378 = (state_30426[(7)]);
var inst_30378__$1 = (state_30426[(2)]);
var inst_30383 = cljs.core.seq.call(null,inst_30378__$1);
var inst_30384 = inst_30383;
var inst_30385 = null;
var inst_30386 = (0);
var inst_30387 = (0);
var state_30426__$1 = (function (){var statearr_30439 = state_30426;
(statearr_30439[(11)] = inst_30387);

(statearr_30439[(7)] = inst_30378__$1);

(statearr_30439[(12)] = inst_30384);

(statearr_30439[(14)] = inst_30385);

(statearr_30439[(15)] = inst_30386);

return statearr_30439;
})();
var statearr_30440_30462 = state_30426__$1;
(statearr_30440_30462[(2)] = null);

(statearr_30440_30462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (11))){
var inst_30418 = (state_30426[(2)]);
var state_30426__$1 = state_30426;
var statearr_30441_30463 = state_30426__$1;
(statearr_30441_30463[(2)] = inst_30418);

(statearr_30441_30463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (9))){
var inst_30399 = (state_30426[(10)]);
var inst_30401 = cljs.core.chunked_seq_QMARK_.call(null,inst_30399);
var state_30426__$1 = state_30426;
if(inst_30401){
var statearr_30442_30464 = state_30426__$1;
(statearr_30442_30464[(1)] = (12));

} else {
var statearr_30443_30465 = state_30426__$1;
(statearr_30443_30465[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (5))){
var inst_30387 = (state_30426[(11)]);
var inst_30385 = (state_30426[(14)]);
var inst_30392 = cljs.core._nth.call(null,inst_30385,inst_30387);
var inst_30393 = inst_30392.call(null);
var state_30426__$1 = state_30426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30426__$1,(8),inst_30393);
} else {
if((state_val_30427 === (14))){
var inst_30415 = (state_30426[(2)]);
var state_30426__$1 = state_30426;
var statearr_30447_30466 = state_30426__$1;
(statearr_30447_30466[(2)] = inst_30415);

(statearr_30447_30466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (10))){
var state_30426__$1 = state_30426;
var statearr_30448_30467 = state_30426__$1;
(statearr_30448_30467[(2)] = null);

(statearr_30448_30467[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (8))){
var inst_30387 = (state_30426[(11)]);
var inst_30384 = (state_30426[(12)]);
var inst_30385 = (state_30426[(14)]);
var inst_30386 = (state_30426[(15)]);
var inst_30395 = (state_30426[(2)]);
var inst_30396 = (inst_30387 + (1));
var tmp30444 = inst_30384;
var tmp30445 = inst_30385;
var tmp30446 = inst_30386;
var inst_30384__$1 = tmp30444;
var inst_30385__$1 = tmp30445;
var inst_30386__$1 = tmp30446;
var inst_30387__$1 = inst_30396;
var state_30426__$1 = (function (){var statearr_30449 = state_30426;
(statearr_30449[(11)] = inst_30387__$1);

(statearr_30449[(12)] = inst_30384__$1);

(statearr_30449[(14)] = inst_30385__$1);

(statearr_30449[(15)] = inst_30386__$1);

(statearr_30449[(16)] = inst_30395);

return statearr_30449;
})();
var statearr_30450_30468 = state_30426__$1;
(statearr_30450_30468[(2)] = null);

(statearr_30450_30468[(1)] = (3));


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
var klipse$plugin$klipsify_elements_$_state_machine__15523__auto__ = null;
var klipse$plugin$klipsify_elements_$_state_machine__15523__auto____0 = (function (){
var statearr_30451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30451[(0)] = klipse$plugin$klipsify_elements_$_state_machine__15523__auto__);

(statearr_30451[(1)] = (1));

return statearr_30451;
});
var klipse$plugin$klipsify_elements_$_state_machine__15523__auto____1 = (function (state_30426){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30452){if((e30452 instanceof Object)){
var ex__15526__auto__ = e30452;
var statearr_30453_30469 = state_30426;
(statearr_30453_30469[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30470 = state_30426;
state_30426 = G__30470;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_elements_$_state_machine__15523__auto__ = function(state_30426){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_elements_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_elements_$_state_machine__15523__auto____1.call(this,state_30426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_elements_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_elements_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_elements_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_elements_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_elements_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30454 = f__15620__auto__.call(null);
(statearr_30454[(6)] = c__15619__auto__);

return statearr_30454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.plugin.snippets_selector = (function klipse$plugin$snippets_selector(settings,selector_names){
return clojure.string.join.call(null,",",cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,settings,selector_names)));
});
klipse.plugin.seq_from_selector = (function klipse$plugin$seq_from_selector(selector){
return cljs.core.array_seq.call(null,document.querySelectorAll(selector));
});
klipse.plugin.elements__GT_mode = (function klipse$plugin$elements__GT_mode(settings){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5520__auto__ = (function klipse$plugin$elements__GT_mode_$_iter__30471(s__30472){
return (new cljs.core.LazySeq(null,(function (){
var s__30472__$1 = s__30472;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__30472__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var selector_name = cljs.core.first.call(null,xs__6360__auto__);
var selector = settings.call(null,selector_name);
if(cljs.core.truth_(selector)){
var iterys__5516__auto__ = ((function (s__30472__$1,selector,selector_name,xs__6360__auto__,temp__5804__auto__){
return (function klipse$plugin$elements__GT_mode_$_iter__30471_$_iter__30473(s__30474){
return (new cljs.core.LazySeq(null,((function (s__30472__$1,selector,selector_name,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__30474__$1 = s__30474;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__30474__$1);
if(temp__5804__auto____$1){
var s__30474__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30474__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__30474__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__30476 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__30475 = (0);
while(true){
if((i__30475 < size__5519__auto__)){
var element = cljs.core._nth.call(null,c__5518__auto__,i__30475);
cljs.core.chunk_append.call(null,b__30476,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null));

var G__30477 = (i__30475 + (1));
i__30475 = G__30477;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30476),klipse$plugin$elements__GT_mode_$_iter__30471_$_iter__30473.call(null,cljs.core.chunk_rest.call(null,s__30474__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30476),null);
}
} else {
var element = cljs.core.first.call(null,s__30474__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null),klipse$plugin$elements__GT_mode_$_iter__30471_$_iter__30473.call(null,cljs.core.rest.call(null,s__30474__$2)));
}
} else {
return null;
}
break;
}
});})(s__30472__$1,selector,selector_name,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__30472__$1,selector,selector_name,xs__6360__auto__,temp__5804__auto__))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,klipse.plugin.seq_from_selector.call(null,selector)));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,klipse$plugin$elements__GT_mode_$_iter__30471.call(null,cljs.core.rest.call(null,s__30472__$1)));
} else {
var G__30478 = cljs.core.rest.call(null,s__30472__$1);
s__30472__$1 = G__30478;
continue;
}
} else {
var G__30479 = cljs.core.rest.call(null,s__30472__$1);
s__30472__$1 = G__30479;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode)));
})());
});
klipse.plugin.init_clj = (function klipse$plugin$init_clj(settings){
var map__30480 = clojure.walk.keywordize_keys.call(null,settings);
var map__30480__$1 = cljs.core.__destructure_map.call(null,map__30480);
var keywordized_settings = map__30480__$1;
var secured_eval = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"secured_eval","secured_eval",-1577487888));
var security_forbidden_symbols = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"security_forbidden_symbols","security_forbidden_symbols",-1480402500),klipse.utils.default_forbidden_symbols.call(null));
var modes = klipse.plugin.elements__GT_mode.call(null,settings);
var elements = klipse.plugin.seq_from_selector.call(null,klipse.plugin.snippets_selector.call(null,settings,cljs.core.keys.call(null,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode))));
if(cljs.core.truth_(secured_eval)){
klipse.utils.securize_eval_BANG_.call(null,security_forbidden_symbols);
} else {
}

return klipse.plugin.klipsify_elements.call(null,elements,keywordized_settings,modes);
});
goog.exportSymbol('klipse.plugin.init_clj', klipse.plugin.init_clj);
klipse.plugin.init = (function klipse$plugin$init(js_settings){
return klipse.plugin.init_clj.call(null,cljs.core.js__GT_clj.call(null,js_settings,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),false));
});
goog.exportSymbol('klipse.plugin.init', klipse.plugin.init);

//# sourceMappingURL=plugin.js.map

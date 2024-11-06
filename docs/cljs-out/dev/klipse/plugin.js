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
var map__19506 = klipse.args_from_element.editor_args_from_element.call(null,element);
var map__19506__$1 = cljs.core.__destructure_map.call(null,map__19506);
var idle_msec = cljs.core.get.call(null,map__19506__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),global_idle_msec);
var editor_type = cljs.core.get.call(null,map__19506__$1,new cljs.core.Keyword(null,"editor-type","editor-type",198227301),global_editor_type);
var preamble = cljs.core.get.call(null,map__19506__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var async_code_QMARK_ = cljs.core.get.call(null,map__19506__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var loop_msec = cljs.core.get.call(null,map__19506__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),null);
return gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),(function (){var x__5128__auto__ = min_idle_msec;
var y__5129__auto__ = idle_msec;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})(),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),async_code_QMARK_,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480),editor_type], null));
});
klipse.plugin.calc_editor_type = (function klipse$plugin$calc_editor_type(minimalistic_ui_QMARK_,the_type){
if(cljs.core.truth_(minimalistic_ui_QMARK_)){
return new cljs.core.Keyword(null,"dom","dom",-1236537922);
} else {
var G__19507 = the_type;
switch (G__19507) {
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
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_19538){
var state_val_19539 = (state_19538[(1)]);
if((state_val_19539 === (1))){
var state_19538__$1 = state_19538;
if(cljs.core.truth_(no_dynamic_scripts_QMARK_)){
var statearr_19540_19553 = state_19538__$1;
(statearr_19540_19553[(1)] = (2));

} else {
var statearr_19541_19554 = state_19538__$1;
(statearr_19541_19554[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (2))){
var inst_19510 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19511 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_19512 = (new cljs.core.PersistentVector(null,2,(5),inst_19510,inst_19511,null));
var state_19538__$1 = state_19538;
var statearr_19542_19555 = state_19538__$1;
(statearr_19542_19555[(2)] = inst_19512);

(statearr_19542_19555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (3))){
var inst_19517 = klipse.utils.load_scripts_mem.call(null,scripts);
var state_19538__$1 = state_19538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19538__$1,(5),inst_19517);
} else {
if((state_val_19539 === (4))){
var inst_19536 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19538__$1,inst_19536);
} else {
if((state_val_19539 === (5))){
var inst_19519 = (state_19538[(2)]);
var inst_19520 = cljs.core.nth.call(null,inst_19519,(0),null);
var inst_19521 = cljs.core.nth.call(null,inst_19519,(1),null);
var inst_19522 = cljs.core.nth.call(null,inst_19519,(2),null);
var inst_19523 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_19520);
var state_19538__$1 = (function (){var statearr_19543 = state_19538;
(statearr_19543[(7)] = inst_19522);

(statearr_19543[(8)] = inst_19521);

return statearr_19543;
})();
if(inst_19523){
var statearr_19544_19556 = state_19538__$1;
(statearr_19544_19556[(1)] = (6));

} else {
var statearr_19545_19557 = state_19538__$1;
(statearr_19545_19557[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (6))){
var inst_19525 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19526 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_19527 = (new cljs.core.PersistentVector(null,2,(5),inst_19525,inst_19526,null));
var state_19538__$1 = state_19538;
var statearr_19546_19558 = state_19538__$1;
(statearr_19546_19558[(2)] = inst_19527);

(statearr_19546_19558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (7))){
var inst_19522 = (state_19538[(7)]);
var inst_19521 = (state_19538[(8)]);
var inst_19529 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19530 = ["Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19522),"\n","Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19521)].join('');
var inst_19531 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_19530];
var inst_19532 = (new cljs.core.PersistentVector(null,2,(5),inst_19529,inst_19531,null));
var state_19538__$1 = state_19538;
var statearr_19547_19559 = state_19538__$1;
(statearr_19547_19559[(2)] = inst_19532);

(statearr_19547_19559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19539 === (8))){
var inst_19534 = (state_19538[(2)]);
var state_19538__$1 = state_19538;
var statearr_19548_19560 = state_19538__$1;
(statearr_19548_19560[(2)] = inst_19534);

(statearr_19548_19560[(1)] = (4));


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
var klipse$plugin$load_external_scripts_$_state_machine__13608__auto__ = null;
var klipse$plugin$load_external_scripts_$_state_machine__13608__auto____0 = (function (){
var statearr_19549 = [null,null,null,null,null,null,null,null,null];
(statearr_19549[(0)] = klipse$plugin$load_external_scripts_$_state_machine__13608__auto__);

(statearr_19549[(1)] = (1));

return statearr_19549;
});
var klipse$plugin$load_external_scripts_$_state_machine__13608__auto____1 = (function (state_19538){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_19538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e19550){if((e19550 instanceof Object)){
var ex__13611__auto__ = e19550;
var statearr_19551_19561 = state_19538;
(statearr_19551_19561[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19562 = state_19538;
state_19538 = G__19562;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$plugin$load_external_scripts_$_state_machine__13608__auto__ = function(state_19538){
switch(arguments.length){
case 0:
return klipse$plugin$load_external_scripts_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$plugin$load_external_scripts_$_state_machine__13608__auto____1.call(this,state_19538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$load_external_scripts_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$load_external_scripts_$_state_machine__13608__auto____0;
klipse$plugin$load_external_scripts_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$load_external_scripts_$_state_machine__13608__auto____1;
return klipse$plugin$load_external_scripts_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_19552 = f__13705__auto__.call(null);
(statearr_19552[(6)] = c__13704__auto__);

return statearr_19552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
/**
 * returns a channel c with a function f.
 *   f returns a channel that will be ready to read when the snippet is evaluated.
 */
klipse.plugin.klipsify_with_opts = (function klipse$plugin$klipsify_with_opts(element,p__19566,p__19567,mode){
var map__19568 = p__19566;
var map__19568__$1 = cljs.core.__destructure_map.call(null,map__19568);
var no_dynamic_scripts = cljs.core.get.call(null,map__19568__$1,new cljs.core.Keyword(null,"no_dynamic_scripts","no_dynamic_scripts",-730706373));
var codemirror_options_in = cljs.core.get.call(null,map__19568__$1,new cljs.core.Keyword(null,"codemirror_options_in","codemirror_options_in",-1220877316),cljs.core.PersistentArrayMap.EMPTY);
var eval_idle_msec = cljs.core.get.call(null,map__19568__$1,new cljs.core.Keyword(null,"eval_idle_msec","eval_idle_msec",1104296094),(20));
var codemirror_options_out = cljs.core.get.call(null,map__19568__$1,new cljs.core.Keyword(null,"codemirror_options_out","codemirror_options_out",440175842),cljs.core.PersistentArrayMap.EMPTY);
var print_length = cljs.core.get.call(null,map__19568__$1,new cljs.core.Keyword(null,"print_length","print_length",2140955911),(1000));
var editor_type = cljs.core.get.call(null,map__19568__$1,new cljs.core.Keyword(null,"editor_type","editor_type",195783179));
var minimalistic_ui = cljs.core.get.call(null,map__19568__$1,new cljs.core.Keyword(null,"minimalistic_ui","minimalistic_ui",-944637362),false);
var beautify_strings = cljs.core.get.call(null,map__19568__$1,new cljs.core.Keyword(null,"beautify_strings","beautify_strings",1690445266),false);
var eval_context = cljs.core.get.call(null,map__19568__$1,new cljs.core.Keyword(null,"eval_context","eval_context",1307295352));
var map__19569 = p__19567;
var map__19569__$1 = cljs.core.__destructure_map.call(null,map__19569);
var lang_opts = map__19569__$1;
var eval_fn = cljs.core.get.call(null,map__19569__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var beautify_output_QMARK_ = cljs.core.get.call(null,map__19569__$1,new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),true);
var no_result = cljs.core.get.call(null,map__19569__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var default_editor = cljs.core.get.call(null,map__19569__$1,new cljs.core.Keyword(null,"default-editor","default-editor",758164479));
var editor_out_mode = cljs.core.get.call(null,map__19569__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var beautify_QMARK_ = cljs.core.get.call(null,map__19569__$1,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),true);
var min_eval_idle_msec = cljs.core.get.call(null,map__19569__$1,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(0));
var comment_str = cljs.core.get.call(null,map__19569__$1,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
var editor_in_mode = cljs.core.get.call(null,map__19569__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var external_scripts = cljs.core.get.call(null,map__19569__$1,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),cljs.core.PersistentVector.EMPTY);
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_19632){
var state_val_19633 = (state_19632[(1)]);
if((state_val_19633 === (7))){
var state_19632__$1 = state_19632;
var statearr_19634_19678 = state_19632__$1;
(statearr_19634_19678[(2)] = default_editor);

(statearr_19634_19678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (20))){
var state_19632__$1 = state_19632;
var statearr_19635_19679 = state_19632__$1;
(statearr_19635_19679[(2)] = false);

(statearr_19635_19679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (1))){
var state_19632__$1 = state_19632;
if(cljs.core.truth_(element)){
var statearr_19636_19680 = state_19632__$1;
(statearr_19636_19680[(1)] = (2));

} else {
var statearr_19637_19681 = state_19632__$1;
(statearr_19637_19681[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (4))){
var inst_19630 = (state_19632[(2)]);
var state_19632__$1 = state_19632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19632__$1,inst_19630);
} else {
if((state_val_19633 === (15))){
var inst_19578 = (state_19632[(7)]);
var inst_19584 = (state_19632[(8)]);
var inst_19585 = (state_19632[(9)]);
var inst_19589 = (state_19632[(10)]);
var inst_19598 = (state_19632[(11)]);
var inst_19599 = (state_19632[(12)]);
var inst_19594 = (state_19632[(13)]);
var inst_19582 = (state_19632[(14)]);
var inst_19588 = (state_19632[(15)]);
var inst_19587 = (state_19632[(16)]);
var inst_19600 = (state_19632[(17)]);
var inst_19579 = (state_19632[(18)]);
var inst_19611 = (state_19632[(2)]);
var inst_19612 = (function (){var the_editor_type = inst_19594;
var eval_fn_with_args = inst_19579;
var idle_msec = inst_19585;
var loop_msec = inst_19587;
var map__19571 = inst_19584;
var load_error = inst_19600;
var async_code_QMARK_ = inst_19588;
var load_status = inst_19599;
var vec__19572 = inst_19598;
var eval_args = inst_19578;
var source_code = inst_19582;
var preamble = inst_19589;
return (function (p1__19565_SHARP_){
var c__13704__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_19641){
var state_val_19642 = (state_19641[(1)]);
if((state_val_19642 === (1))){
var state_19641__$1 = state_19641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19641__$1,(2),klipse.plugin.event_chan,p1__19565_SHARP_);
} else {
if((state_val_19642 === (2))){
var inst_19639 = (state_19641[(2)]);
var state_19641__$1 = state_19641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19641__$1,inst_19639);
} else {
return null;
}
}
});
return (function() {
var klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto__ = null;
var klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto____0 = (function (){
var statearr_19643 = [null,null,null,null,null,null,null];
(statearr_19643[(0)] = klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto__);

(statearr_19643[(1)] = (1));

return statearr_19643;
});
var klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto____1 = (function (state_19641){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_19641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e19644){if((e19644 instanceof Object)){
var ex__13611__auto__ = e19644;
var statearr_19645_19682 = state_19641;
(statearr_19645_19682[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19683 = state_19641;
state_19641 = G__19683;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto__ = function(state_19641){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto____1.call(this,state_19641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto____0;
klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto____1;
return klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_19646 = f__13705__auto__.call(null);
(statearr_19646[(6)] = c__13704__auto____$1);

return statearr_19646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto____$1;
});
})();
var inst_19613 = klipse.plugin.snippet_num_BANG_.call(null);
var inst_19614 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_19599);
var state_19632__$1 = (function (){var statearr_19647 = state_19632;
(statearr_19647[(19)] = inst_19612);

(statearr_19647[(20)] = inst_19613);

(statearr_19647[(21)] = inst_19611);

return statearr_19647;
})();
if(inst_19614){
var statearr_19648_19684 = state_19632__$1;
(statearr_19648_19684[(1)] = (16));

} else {
var statearr_19649_19685 = state_19632__$1;
(statearr_19649_19685[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (21))){
var inst_19612 = (state_19632[(19)]);
var inst_19585 = (state_19632[(9)]);
var inst_19606 = (state_19632[(22)]);
var inst_19619 = (state_19632[(23)]);
var inst_19589 = (state_19632[(10)]);
var inst_19613 = (state_19632[(20)]);
var inst_19611 = (state_19632[(21)]);
var inst_19594 = (state_19632[(13)]);
var inst_19582 = (state_19632[(14)]);
var inst_19588 = (state_19632[(15)]);
var inst_19587 = (state_19632[(16)]);
var inst_19601 = (state_19632[(24)]);
var inst_19624 = (state_19632[(2)]);
var inst_19625 = [inst_19606,inst_19611,inst_19585,inst_19587,element,editor_out_mode,inst_19612,inst_19588,mode,inst_19582,inst_19589,codemirror_options_out,editor_in_mode,inst_19613,inst_19619,no_result,codemirror_options_in,inst_19624];
var inst_19626 = cljs.core.PersistentHashMap.fromArrays(inst_19601,inst_19625);
var inst_19627 = klipse.klipse_editors.create_editor.call(null,inst_19594,inst_19626);
var state_19632__$1 = state_19632;
var statearr_19650_19686 = state_19632__$1;
(statearr_19650_19686[(2)] = inst_19627);

(statearr_19650_19686[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (13))){
var state_19632__$1 = state_19632;
var statearr_19651_19687 = state_19632__$1;
(statearr_19651_19687[(2)] = beautify_QMARK_);

(statearr_19651_19687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (6))){
var inst_19586 = (state_19632[(25)]);
var state_19632__$1 = state_19632;
var statearr_19652_19688 = state_19632__$1;
(statearr_19652_19688[(2)] = inst_19586);

(statearr_19652_19688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (17))){
var inst_19578 = (state_19632[(7)]);
var inst_19584 = (state_19632[(8)]);
var inst_19585 = (state_19632[(9)]);
var inst_19589 = (state_19632[(10)]);
var inst_19598 = (state_19632[(11)]);
var inst_19599 = (state_19632[(12)]);
var inst_19594 = (state_19632[(13)]);
var inst_19582 = (state_19632[(14)]);
var inst_19588 = (state_19632[(15)]);
var inst_19587 = (state_19632[(16)]);
var inst_19600 = (state_19632[(17)]);
var inst_19579 = (state_19632[(18)]);
var inst_19617 = (function (){var the_editor_type = inst_19594;
var eval_fn_with_args = inst_19579;
var idle_msec = inst_19585;
var loop_msec = inst_19587;
var map__19571 = inst_19584;
var load_error = inst_19600;
var async_code_QMARK_ = inst_19588;
var load_status = inst_19599;
var vec__19572 = inst_19598;
var eval_args = inst_19578;
var source_code = inst_19582;
var preamble = inst_19589;
return (function (){
return cljs.core.async.chan.call(null);
});
})();
var state_19632__$1 = state_19632;
var statearr_19653_19689 = state_19632__$1;
(statearr_19653_19689[(2)] = inst_19617);

(statearr_19653_19689[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (3))){
var state_19632__$1 = state_19632;
var statearr_19654_19690 = state_19632__$1;
(statearr_19654_19690[(2)] = null);

(statearr_19654_19690[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (12))){
var inst_19599 = (state_19632[(12)]);
var inst_19606 = (state_19632[(2)]);
var inst_19607 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_19599);
var state_19632__$1 = (function (){var statearr_19655 = state_19632;
(statearr_19655[(22)] = inst_19606);

return statearr_19655;
})();
if(inst_19607){
var statearr_19656_19691 = state_19632__$1;
(statearr_19656_19691[(1)] = (13));

} else {
var statearr_19657_19692 = state_19632__$1;
(statearr_19657_19692[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (2))){
var inst_19578 = (state_19632[(7)]);
var inst_19575 = [new cljs.core.Keyword(null,"eval-context","eval-context",536255614),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479)];
var inst_19576 = [eval_context,print_length,beautify_strings];
var inst_19577 = cljs.core.PersistentHashMap.fromArrays(inst_19575,inst_19576);
var inst_19578__$1 = klipse.args_from_element.eval_args_from_element.call(null,element,inst_19577);
var inst_19579 = (function (){var eval_args = inst_19578__$1;
return (function (p1__19563_SHARP_,p2__19564_SHARP_){
return eval_fn.call(null,p1__19563_SHARP_,cljs.core.merge.call(null,eval_args,p2__19564_SHARP_));
});
})();
var inst_19580 = klipse.args_from_element.content.call(null,element,comment_str);
var state_19632__$1 = (function (){var statearr_19658 = state_19632;
(statearr_19658[(7)] = inst_19578__$1);

(statearr_19658[(18)] = inst_19579);

return statearr_19658;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19632__$1,(5),inst_19580);
} else {
if((state_val_19633 === (19))){
var state_19632__$1 = state_19632;
var statearr_19659_19693 = state_19632__$1;
(statearr_19659_19693[(2)] = beautify_output_QMARK_);

(statearr_19659_19693[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (11))){
var inst_19600 = (state_19632[(17)]);
var state_19632__$1 = state_19632;
var statearr_19660_19694 = state_19632__$1;
(statearr_19660_19694[(2)] = inst_19600);

(statearr_19660_19694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (9))){
var inst_19598 = (state_19632[(11)]);
var inst_19599 = (state_19632[(12)]);
var inst_19598__$1 = (state_19632[(2)]);
var inst_19599__$1 = cljs.core.nth.call(null,inst_19598__$1,(0),null);
var inst_19600 = cljs.core.nth.call(null,inst_19598__$1,(1),null);
var inst_19601 = [new cljs.core.Keyword(null,"default-txt","default-txt",27736322),new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"on-edit-cb","on-edit-cb",1727649734),new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"source-code","source-code",-685884337),new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"no-result","no-result",1702657437),new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441)];
var inst_19602 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_19599__$1);
var state_19632__$1 = (function (){var statearr_19661 = state_19632;
(statearr_19661[(11)] = inst_19598__$1);

(statearr_19661[(12)] = inst_19599__$1);

(statearr_19661[(24)] = inst_19601);

(statearr_19661[(17)] = inst_19600);

return statearr_19661;
})();
if(inst_19602){
var statearr_19662_19695 = state_19632__$1;
(statearr_19662_19695[(1)] = (10));

} else {
var statearr_19663_19696 = state_19632__$1;
(statearr_19663_19696[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (5))){
var inst_19584 = (state_19632[(8)]);
var inst_19586 = (state_19632[(25)]);
var inst_19582 = (state_19632[(2)]);
var inst_19583 = klipse.plugin.calc_editor_args_from_element.call(null,element,eval_idle_msec,min_eval_idle_msec,editor_type);
var inst_19584__$1 = cljs.core.__destructure_map.call(null,inst_19583);
var inst_19585 = cljs.core.get.call(null,inst_19584__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var inst_19586__$1 = cljs.core.get.call(null,inst_19584__$1,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480));
var inst_19587 = cljs.core.get.call(null,inst_19584__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var inst_19588 = cljs.core.get.call(null,inst_19584__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var inst_19589 = cljs.core.get.call(null,inst_19584__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var state_19632__$1 = (function (){var statearr_19664 = state_19632;
(statearr_19664[(8)] = inst_19584__$1);

(statearr_19664[(9)] = inst_19585);

(statearr_19664[(10)] = inst_19589);

(statearr_19664[(14)] = inst_19582);

(statearr_19664[(15)] = inst_19588);

(statearr_19664[(25)] = inst_19586__$1);

(statearr_19664[(16)] = inst_19587);

return statearr_19664;
})();
if(cljs.core.truth_(inst_19586__$1)){
var statearr_19665_19697 = state_19632__$1;
(statearr_19665_19697[(1)] = (6));

} else {
var statearr_19666_19698 = state_19632__$1;
(statearr_19666_19698[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (14))){
var state_19632__$1 = state_19632;
var statearr_19667_19699 = state_19632__$1;
(statearr_19667_19699[(2)] = false);

(statearr_19667_19699[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (16))){
var inst_19579 = (state_19632[(18)]);
var state_19632__$1 = state_19632;
var statearr_19668_19700 = state_19632__$1;
(statearr_19668_19700[(2)] = inst_19579);

(statearr_19668_19700[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (10))){
var state_19632__$1 = state_19632;
var statearr_19669_19701 = state_19632__$1;
(statearr_19669_19701[(2)] = klipse.plugin.out_placeholder);

(statearr_19669_19701[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (18))){
var inst_19599 = (state_19632[(12)]);
var inst_19619 = (state_19632[(2)]);
var inst_19620 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_19599);
var state_19632__$1 = (function (){var statearr_19670 = state_19632;
(statearr_19670[(23)] = inst_19619);

return statearr_19670;
})();
if(inst_19620){
var statearr_19671_19702 = state_19632__$1;
(statearr_19671_19702[(1)] = (19));

} else {
var statearr_19672_19703 = state_19632__$1;
(statearr_19672_19703[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19633 === (8))){
var inst_19593 = (state_19632[(2)]);
var inst_19594 = klipse.plugin.calc_editor_type.call(null,minimalistic_ui,inst_19593);
var inst_19595 = gadjett.collections.collify.call(null,external_scripts);
var inst_19596 = klipse.plugin.load_external_scripts.call(null,inst_19595,no_dynamic_scripts);
var state_19632__$1 = (function (){var statearr_19673 = state_19632;
(statearr_19673[(13)] = inst_19594);

return statearr_19673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19632__$1,(9),inst_19596);
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
var klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto__ = null;
var klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto____0 = (function (){
var statearr_19674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19674[(0)] = klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto__);

(statearr_19674[(1)] = (1));

return statearr_19674;
});
var klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto____1 = (function (state_19632){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_19632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e19675){if((e19675 instanceof Object)){
var ex__13611__auto__ = e19675;
var statearr_19676_19704 = state_19632;
(statearr_19676_19704[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19705 = state_19632;
state_19632 = G__19705;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto__ = function(state_19632){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto____1.call(this,state_19632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto____0;
klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto____1;
return klipse$plugin$klipsify_with_opts_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_19677 = f__13705__auto__.call(null);
(statearr_19677[(6)] = c__13704__auto__);

return statearr_19677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","dom-element","klipse.plugin/dom-element",-271611585),new cljs.core.Symbol("goog.dom","isElement","goog.dom/isElement",-1707224949,null),goog.dom.isElement);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"str","str",1089608819)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.string_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Symbol("cljs.core","integer?","cljs.core/integer?",1710697810,null),cljs.core.integer_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),true),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),false))),(function (p1__19706_SHARP_){
return ((cljs.core._EQ_.call(null,p1__19706_SHARP_,true)) || (cljs.core._EQ_.call(null,p1__19706_SHARP_,false)));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__19707){
return cljs.core.map_QMARK_.call(null,G__19707);
}),(function (G__19707){
return cljs.core.contains_QMARK_.call(null,G__19707,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
}),(function (G__19707){
return cljs.core.contains_QMARK_.call(null,G__19707,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
}),(function (G__19707){
return cljs.core.contains_QMARK_.call(null,G__19707,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
}),(function (G__19707){
return cljs.core.contains_QMARK_.call(null,G__19707,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
})], null),(function (G__19707){
return ((cljs.core.map_QMARK_.call(null,G__19707)) && (((cljs.core.contains_QMARK_.call(null,G__19707,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))) && (((cljs.core.contains_QMARK_.call(null,G__19707,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))) && (((cljs.core.contains_QMARK_.call(null,G__19707,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))) && (cljs.core.contains_QMARK_.call(null,G__19707,new cljs.core.Keyword(null,"comment-str","comment-str",130143853))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__19708){
return cljs.core.map_QMARK_.call(null,G__19708);
})], null),(function (G__19708){
return cljs.core.map_QMARK_.call(null,G__19708);
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
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_19716){
var state_val_19717 = (state_19716[(1)]);
if((state_val_19717 === (1))){
var inst_19709 = klipse.plugin.klipsify_with_opts.call(null,element,general_settings,opts,mode);
var state_19716__$1 = state_19716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19716__$1,(3),inst_19709);
} else {
if((state_val_19717 === (2))){
var inst_19714 = (state_19716[(2)]);
var state_19716__$1 = state_19716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19716__$1,inst_19714);
} else {
if((state_val_19717 === (3))){
var inst_19711 = (state_19716[(2)]);
var inst_19712 = inst_19711.call(null);
var state_19716__$1 = state_19716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19716__$1,(2),inst_19712);
} else {
return null;
}
}
}
});
return (function() {
var klipse$plugin$klipsify_$_state_machine__13608__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__13608__auto____0 = (function (){
var statearr_19718 = [null,null,null,null,null,null,null];
(statearr_19718[(0)] = klipse$plugin$klipsify_$_state_machine__13608__auto__);

(statearr_19718[(1)] = (1));

return statearr_19718;
});
var klipse$plugin$klipsify_$_state_machine__13608__auto____1 = (function (state_19716){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_19716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e19719){if((e19719 instanceof Object)){
var ex__13611__auto__ = e19719;
var statearr_19720_19732 = state_19716;
(statearr_19720_19732[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19733 = state_19716;
state_19716 = G__19733;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__13608__auto__ = function(state_19716){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__13608__auto____1.call(this,state_19716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__13608__auto____0;
klipse$plugin$klipsify_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__13608__auto____1;
return klipse$plugin$klipsify_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_19721 = f__13705__auto__.call(null);
(statearr_19721[(6)] = c__13704__auto__);

return statearr_19721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
} else {
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_19726){
var state_val_19727 = (state_19726[(1)]);
if((state_val_19727 === (1))){
var inst_19722 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_19723 = cljs.core.keys.call(null,inst_19722);
var inst_19724 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_19723);
var state_19726__$1 = state_19726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19726__$1,inst_19724);
} else {
return null;
}
});
return (function() {
var klipse$plugin$klipsify_$_state_machine__13608__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__13608__auto____0 = (function (){
var statearr_19728 = [null,null,null,null,null,null,null];
(statearr_19728[(0)] = klipse$plugin$klipsify_$_state_machine__13608__auto__);

(statearr_19728[(1)] = (1));

return statearr_19728;
});
var klipse$plugin$klipsify_$_state_machine__13608__auto____1 = (function (state_19726){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_19726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e19729){if((e19729 instanceof Object)){
var ex__13611__auto__ = e19729;
var statearr_19730_19734 = state_19726;
(statearr_19730_19734[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19735 = state_19726;
state_19726 = G__19735;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__13608__auto__ = function(state_19726){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__13608__auto____1.call(this,state_19726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__13608__auto____0;
klipse$plugin$klipsify_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__13608__auto____1;
return klipse$plugin$klipsify_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_19731 = f__13705__auto__.call(null);
(statearr_19731[(6)] = c__13704__auto__);

return statearr_19731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
}
});
goog.exportSymbol('klipse.plugin.klipsify', klipse.plugin.klipsify);
klipse.plugin.klipsify_no_eval = (function klipse$plugin$klipsify_no_eval(element,general_settings,mode){
var temp__5802__auto__ = cljs.core.deref.call(null,klipse.common.registry.mode_options).call(null,mode);
if(cljs.core.truth_(temp__5802__auto__)){
var opts = temp__5802__auto__;
return klipse.plugin.klipsify_with_opts.call(null,element,general_settings,opts,mode);
} else {
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_19738){
var state_val_19739 = (state_19738[(1)]);
if((state_val_19739 === (1))){
var inst_19736 = (function (){return (function (){
var c__13704__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_19744){
var state_val_19745 = (state_19744[(1)]);
if((state_val_19745 === (1))){
var inst_19740 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_19741 = cljs.core.keys.call(null,inst_19740);
var inst_19742 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_19741);
var state_19744__$1 = state_19744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19744__$1,inst_19742);
} else {
return null;
}
});
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto____0 = (function (){
var statearr_19746 = [null,null,null,null,null,null,null];
(statearr_19746[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto__);

(statearr_19746[(1)] = (1));

return statearr_19746;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto____1 = (function (state_19744){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_19744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e19747){if((e19747 instanceof Object)){
var ex__13611__auto__ = e19747;
var statearr_19748_19754 = state_19744;
(statearr_19748_19754[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19755 = state_19744;
state_19744 = G__19755;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto__ = function(state_19744){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto____1.call(this,state_19744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_19749 = f__13705__auto__.call(null);
(statearr_19749[(6)] = c__13704__auto____$1);

return statearr_19749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto____$1;
});
})();
var state_19738__$1 = state_19738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19738__$1,inst_19736);
} else {
return null;
}
});
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto____0 = (function (){
var statearr_19750 = [null,null,null,null,null,null,null];
(statearr_19750[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto__);

(statearr_19750[(1)] = (1));

return statearr_19750;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto____1 = (function (state_19738){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_19738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e19751){if((e19751 instanceof Object)){
var ex__13611__auto__ = e19751;
var statearr_19752_19756 = state_19738;
(statearr_19752_19756[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19757 = state_19738;
state_19738 = G__19757;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto__ = function(state_19738){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto____1.call(this,state_19738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_19753 = f__13705__auto__.call(null);
(statearr_19753[(6)] = c__13704__auto__);

return statearr_19753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
}
});
goog.exportSymbol('klipse.plugin.klipsify_no_eval', klipse.plugin.klipsify_no_eval);
klipse.plugin.edit_elements = (function klipse$plugin$edit_elements(elements,general_settings,modes){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_19784){
var state_val_19785 = (state_19784[(1)]);
if((state_val_19785 === (7))){
var inst_19764 = (state_19784[(7)]);
var inst_19765 = (state_19784[(8)]);
var inst_19767 = klipse.plugin.klipsify_no_eval.call(null,inst_19764,general_settings,inst_19765);
var state_19784__$1 = state_19784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19784__$1,(10),inst_19767);
} else {
if((state_val_19785 === (1))){
var inst_19758 = cljs.core.PersistentVector.EMPTY;
var inst_19759 = elements;
var inst_19760 = inst_19758;
var state_19784__$1 = (function (){var statearr_19786 = state_19784;
(statearr_19786[(9)] = inst_19759);

(statearr_19786[(10)] = inst_19760);

return statearr_19786;
})();
var statearr_19787_19805 = state_19784__$1;
(statearr_19787_19805[(2)] = null);

(statearr_19787_19805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (4))){
var inst_19764 = (state_19784[(7)]);
var inst_19759 = (state_19784[(9)]);
var inst_19765 = (state_19784[(8)]);
var inst_19764__$1 = cljs.core.first.call(null,inst_19759);
var inst_19765__$1 = modes.call(null,inst_19764__$1);
var state_19784__$1 = (function (){var statearr_19788 = state_19784;
(statearr_19788[(7)] = inst_19764__$1);

(statearr_19788[(8)] = inst_19765__$1);

return statearr_19788;
})();
if(cljs.core.truth_(inst_19765__$1)){
var statearr_19789_19806 = state_19784__$1;
(statearr_19789_19806[(1)] = (7));

} else {
var statearr_19790_19807 = state_19784__$1;
(statearr_19790_19807[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (6))){
var inst_19780 = (state_19784[(2)]);
var state_19784__$1 = state_19784;
var statearr_19791_19808 = state_19784__$1;
(statearr_19791_19808[(2)] = inst_19780);

(statearr_19791_19808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (3))){
var inst_19782 = (state_19784[(2)]);
var state_19784__$1 = state_19784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19784__$1,inst_19782);
} else {
if((state_val_19785 === (2))){
var inst_19759 = (state_19784[(9)]);
var inst_19762 = cljs.core.seq.call(null,inst_19759);
var state_19784__$1 = state_19784;
if(inst_19762){
var statearr_19792_19809 = state_19784__$1;
(statearr_19792_19809[(1)] = (4));

} else {
var statearr_19793_19810 = state_19784__$1;
(statearr_19793_19810[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (9))){
var inst_19777 = (state_19784[(2)]);
var state_19784__$1 = state_19784;
var statearr_19794_19811 = state_19784__$1;
(statearr_19794_19811[(2)] = inst_19777);

(statearr_19794_19811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (5))){
var inst_19760 = (state_19784[(10)]);
var state_19784__$1 = state_19784;
var statearr_19796_19812 = state_19784__$1;
(statearr_19796_19812[(2)] = inst_19760);

(statearr_19796_19812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (10))){
var inst_19759 = (state_19784[(9)]);
var inst_19760 = (state_19784[(10)]);
var inst_19769 = (state_19784[(2)]);
var inst_19770 = cljs.core.rest.call(null,inst_19759);
var inst_19771 = cljs.core.conj.call(null,inst_19760,inst_19769);
var inst_19759__$1 = inst_19770;
var inst_19760__$1 = inst_19771;
var state_19784__$1 = (function (){var statearr_19797 = state_19784;
(statearr_19797[(9)] = inst_19759__$1);

(statearr_19797[(10)] = inst_19760__$1);

return statearr_19797;
})();
var statearr_19798_19813 = state_19784__$1;
(statearr_19798_19813[(2)] = null);

(statearr_19798_19813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19785 === (8))){
var inst_19759 = (state_19784[(9)]);
var inst_19760 = (state_19784[(10)]);
var inst_19774 = cljs.core.rest.call(null,inst_19759);
var tmp19795 = inst_19760;
var inst_19759__$1 = inst_19774;
var inst_19760__$1 = tmp19795;
var state_19784__$1 = (function (){var statearr_19799 = state_19784;
(statearr_19799[(9)] = inst_19759__$1);

(statearr_19799[(10)] = inst_19760__$1);

return statearr_19799;
})();
var statearr_19800_19814 = state_19784__$1;
(statearr_19800_19814[(2)] = null);

(statearr_19800_19814[(1)] = (2));


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
var klipse$plugin$edit_elements_$_state_machine__13608__auto__ = null;
var klipse$plugin$edit_elements_$_state_machine__13608__auto____0 = (function (){
var statearr_19801 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19801[(0)] = klipse$plugin$edit_elements_$_state_machine__13608__auto__);

(statearr_19801[(1)] = (1));

return statearr_19801;
});
var klipse$plugin$edit_elements_$_state_machine__13608__auto____1 = (function (state_19784){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_19784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e19802){if((e19802 instanceof Object)){
var ex__13611__auto__ = e19802;
var statearr_19803_19815 = state_19784;
(statearr_19803_19815[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19816 = state_19784;
state_19784 = G__19816;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$plugin$edit_elements_$_state_machine__13608__auto__ = function(state_19784){
switch(arguments.length){
case 0:
return klipse$plugin$edit_elements_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$plugin$edit_elements_$_state_machine__13608__auto____1.call(this,state_19784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$edit_elements_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$edit_elements_$_state_machine__13608__auto____0;
klipse$plugin$edit_elements_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$edit_elements_$_state_machine__13608__auto____1;
return klipse$plugin$edit_elements_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_19804 = f__13705__auto__.call(null);
(statearr_19804[(6)] = c__13704__auto__);

return statearr_19804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.plugin.eval_snippets_on_change = (function klipse$plugin$eval_snippets_on_change(p__19817,eval_fns){
var map__19818 = p__19817;
var map__19818__$1 = cljs.core.__destructure_map.call(null,map__19818);
var re_evaluate_all_snippets_on_change = cljs.core.get.call(null,map__19818__$1,new cljs.core.Keyword(null,"re_evaluate_all_snippets_on_change","re_evaluate_all_snippets_on_change",-98983280));
if(cljs.core.truth_(re_evaluate_all_snippets_on_change)){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_19869){
var state_val_19870 = (state_19869[(1)]);
if((state_val_19870 === (7))){
var inst_19828 = (state_19869[(7)]);
var inst_19829 = (state_19869[(8)]);
var inst_19831 = (state_19869[(9)]);
var inst_19830 = (state_19869[(10)]);
var inst_19836 = cljs.core._nth.call(null,inst_19829,inst_19831);
var inst_19837 = inst_19836.call(null);
var inst_19838 = (inst_19831 + (1));
var tmp19871 = inst_19828;
var tmp19872 = inst_19829;
var tmp19873 = inst_19830;
var inst_19828__$1 = tmp19871;
var inst_19829__$1 = tmp19872;
var inst_19830__$1 = tmp19873;
var inst_19831__$1 = inst_19838;
var state_19869__$1 = (function (){var statearr_19874 = state_19869;
(statearr_19874[(7)] = inst_19828__$1);

(statearr_19874[(8)] = inst_19829__$1);

(statearr_19874[(9)] = inst_19831__$1);

(statearr_19874[(11)] = inst_19837);

(statearr_19874[(10)] = inst_19830__$1);

return statearr_19874;
})();
var statearr_19875_19902 = state_19869__$1;
(statearr_19875_19902[(2)] = null);

(statearr_19875_19902[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19870 === (1))){
var state_19869__$1 = state_19869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19869__$1,(2),klipse.plugin.event_chan);
} else {
if((state_val_19870 === (4))){
var inst_19867 = (state_19869[(2)]);
var state_19869__$1 = state_19869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19869__$1,inst_19867);
} else {
if((state_val_19870 === (15))){
var inst_19855 = (state_19869[(2)]);
var state_19869__$1 = state_19869;
var statearr_19876_19903 = state_19869__$1;
(statearr_19876_19903[(2)] = inst_19855);

(statearr_19876_19903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19870 === (13))){
var inst_19841 = (state_19869[(12)]);
var inst_19845 = cljs.core.chunk_first.call(null,inst_19841);
var inst_19846 = cljs.core.chunk_rest.call(null,inst_19841);
var inst_19847 = cljs.core.count.call(null,inst_19845);
var inst_19828 = inst_19846;
var inst_19829 = inst_19845;
var inst_19830 = inst_19847;
var inst_19831 = (0);
var state_19869__$1 = (function (){var statearr_19877 = state_19869;
(statearr_19877[(7)] = inst_19828);

(statearr_19877[(8)] = inst_19829);

(statearr_19877[(9)] = inst_19831);

(statearr_19877[(10)] = inst_19830);

return statearr_19877;
})();
var statearr_19878_19904 = state_19869__$1;
(statearr_19878_19904[(2)] = null);

(statearr_19878_19904[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19870 === (6))){
var inst_19862 = (state_19869[(2)]);
var state_19869__$1 = (function (){var statearr_19879 = state_19869;
(statearr_19879[(13)] = inst_19862);

return statearr_19879;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19869__$1,(16),klipse.plugin.event_chan);
} else {
if((state_val_19870 === (3))){
var inst_19827 = cljs.core.seq.call(null,eval_fns);
var inst_19828 = inst_19827;
var inst_19829 = null;
var inst_19830 = (0);
var inst_19831 = (0);
var state_19869__$1 = (function (){var statearr_19880 = state_19869;
(statearr_19880[(7)] = inst_19828);

(statearr_19880[(8)] = inst_19829);

(statearr_19880[(9)] = inst_19831);

(statearr_19880[(10)] = inst_19830);

return statearr_19880;
})();
var statearr_19881_19905 = state_19869__$1;
(statearr_19881_19905[(2)] = null);

(statearr_19881_19905[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19870 === (12))){
var inst_19858 = (state_19869[(2)]);
var state_19869__$1 = state_19869;
var statearr_19882_19906 = state_19869__$1;
(statearr_19882_19906[(2)] = inst_19858);

(statearr_19882_19906[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19870 === (2))){
var inst_19820 = (state_19869[(2)]);
var inst_19821 = inst_19820;
var state_19869__$1 = (function (){var statearr_19883 = state_19869;
(statearr_19883[(14)] = inst_19821);

return statearr_19883;
})();
var statearr_19884_19907 = state_19869__$1;
(statearr_19884_19907[(2)] = null);

(statearr_19884_19907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19870 === (11))){
var state_19869__$1 = state_19869;
var statearr_19885_19908 = state_19869__$1;
(statearr_19885_19908[(2)] = null);

(statearr_19885_19908[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19870 === (9))){
var inst_19860 = (state_19869[(2)]);
var state_19869__$1 = state_19869;
var statearr_19886_19909 = state_19869__$1;
(statearr_19886_19909[(2)] = inst_19860);

(statearr_19886_19909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19870 === (5))){
var inst_19831 = (state_19869[(9)]);
var inst_19830 = (state_19869[(10)]);
var inst_19833 = (inst_19831 < inst_19830);
var inst_19834 = inst_19833;
var state_19869__$1 = state_19869;
if(cljs.core.truth_(inst_19834)){
var statearr_19887_19910 = state_19869__$1;
(statearr_19887_19910[(1)] = (7));

} else {
var statearr_19888_19911 = state_19869__$1;
(statearr_19888_19911[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19870 === (14))){
var inst_19841 = (state_19869[(12)]);
var inst_19850 = cljs.core.first.call(null,inst_19841);
var inst_19851 = inst_19850.call(null);
var inst_19852 = cljs.core.next.call(null,inst_19841);
var inst_19828 = inst_19852;
var inst_19829 = null;
var inst_19830 = (0);
var inst_19831 = (0);
var state_19869__$1 = (function (){var statearr_19889 = state_19869;
(statearr_19889[(7)] = inst_19828);

(statearr_19889[(8)] = inst_19829);

(statearr_19889[(9)] = inst_19831);

(statearr_19889[(10)] = inst_19830);

(statearr_19889[(15)] = inst_19851);

return statearr_19889;
})();
var statearr_19890_19912 = state_19869__$1;
(statearr_19890_19912[(2)] = null);

(statearr_19890_19912[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19870 === (16))){
var inst_19864 = (state_19869[(2)]);
var inst_19821 = inst_19864;
var state_19869__$1 = (function (){var statearr_19891 = state_19869;
(statearr_19891[(14)] = inst_19821);

return statearr_19891;
})();
var statearr_19892_19913 = state_19869__$1;
(statearr_19892_19913[(2)] = null);

(statearr_19892_19913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19870 === (10))){
var inst_19841 = (state_19869[(12)]);
var inst_19843 = cljs.core.chunked_seq_QMARK_.call(null,inst_19841);
var state_19869__$1 = state_19869;
if(inst_19843){
var statearr_19893_19914 = state_19869__$1;
(statearr_19893_19914[(1)] = (13));

} else {
var statearr_19894_19915 = state_19869__$1;
(statearr_19894_19915[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19870 === (8))){
var inst_19828 = (state_19869[(7)]);
var inst_19841 = (state_19869[(12)]);
var inst_19841__$1 = cljs.core.seq.call(null,inst_19828);
var state_19869__$1 = (function (){var statearr_19895 = state_19869;
(statearr_19895[(12)] = inst_19841__$1);

return statearr_19895;
})();
if(inst_19841__$1){
var statearr_19896_19916 = state_19869__$1;
(statearr_19896_19916[(1)] = (10));

} else {
var statearr_19897_19917 = state_19869__$1;
(statearr_19897_19917[(1)] = (11));

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
var klipse$plugin$eval_snippets_on_change_$_state_machine__13608__auto__ = null;
var klipse$plugin$eval_snippets_on_change_$_state_machine__13608__auto____0 = (function (){
var statearr_19898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19898[(0)] = klipse$plugin$eval_snippets_on_change_$_state_machine__13608__auto__);

(statearr_19898[(1)] = (1));

return statearr_19898;
});
var klipse$plugin$eval_snippets_on_change_$_state_machine__13608__auto____1 = (function (state_19869){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_19869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e19899){if((e19899 instanceof Object)){
var ex__13611__auto__ = e19899;
var statearr_19900_19918 = state_19869;
(statearr_19900_19918[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19919 = state_19869;
state_19869 = G__19919;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$plugin$eval_snippets_on_change_$_state_machine__13608__auto__ = function(state_19869){
switch(arguments.length){
case 0:
return klipse$plugin$eval_snippets_on_change_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$plugin$eval_snippets_on_change_$_state_machine__13608__auto____1.call(this,state_19869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$eval_snippets_on_change_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$eval_snippets_on_change_$_state_machine__13608__auto____0;
klipse$plugin$eval_snippets_on_change_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$eval_snippets_on_change_$_state_machine__13608__auto____1;
return klipse$plugin$eval_snippets_on_change_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_19901 = f__13705__auto__.call(null);
(statearr_19901[(6)] = c__13704__auto__);

return statearr_19901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
} else {
return null;
}
});
klipse.plugin.mark_first_eval_BANG_ = (function klipse$plugin$mark_first_eval_BANG_(){
console.warn("First evaluation of all snippets is done");

return klipse.dom_utils.append_div.call(null,klipse.dom_utils.body.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"klipse-ready"], null));
});
klipse.plugin.klipsify_elements = (function klipse$plugin$klipsify_elements(elements,general_settings,modes){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_19970){
var state_val_19971 = (state_19970[(1)]);
if((state_val_19971 === (7))){
var inst_19964 = (state_19970[(2)]);
var state_19970__$1 = state_19970;
var statearr_19972_19999 = state_19970__$1;
(statearr_19972_19999[(2)] = inst_19964);

(statearr_19972_19999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19971 === (1))){
var inst_19920 = klipse.plugin.edit_elements.call(null,elements,general_settings,modes);
var state_19970__$1 = state_19970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19970__$1,(2),inst_19920);
} else {
if((state_val_19971 === (4))){
var inst_19922 = (state_19970[(7)]);
var inst_19966 = (state_19970[(2)]);
var inst_19967 = klipse.plugin.mark_first_eval_BANG_.call(null);
var inst_19968 = klipse.plugin.eval_snippets_on_change.call(null,general_settings,inst_19922);
var state_19970__$1 = (function (){var statearr_19973 = state_19970;
(statearr_19973[(8)] = inst_19966);

(statearr_19973[(9)] = inst_19967);

return statearr_19973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19970__$1,inst_19968);
} else {
if((state_val_19971 === (15))){
var inst_19943 = (state_19970[(10)]);
var inst_19955 = (state_19970[(2)]);
var inst_19956 = cljs.core.next.call(null,inst_19943);
var inst_19928 = inst_19956;
var inst_19929 = null;
var inst_19930 = (0);
var inst_19931 = (0);
var state_19970__$1 = (function (){var statearr_19974 = state_19970;
(statearr_19974[(11)] = inst_19930);

(statearr_19974[(12)] = inst_19929);

(statearr_19974[(13)] = inst_19931);

(statearr_19974[(14)] = inst_19928);

(statearr_19974[(15)] = inst_19955);

return statearr_19974;
})();
var statearr_19975_20000 = state_19970__$1;
(statearr_19975_20000[(2)] = null);

(statearr_19975_20000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19971 === (13))){
var inst_19943 = (state_19970[(10)]);
var inst_19952 = cljs.core.first.call(null,inst_19943);
var inst_19953 = inst_19952.call(null);
var state_19970__$1 = state_19970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19970__$1,(15),inst_19953);
} else {
if((state_val_19971 === (6))){
var inst_19943 = (state_19970[(10)]);
var inst_19928 = (state_19970[(14)]);
var inst_19943__$1 = cljs.core.seq.call(null,inst_19928);
var state_19970__$1 = (function (){var statearr_19976 = state_19970;
(statearr_19976[(10)] = inst_19943__$1);

return statearr_19976;
})();
if(inst_19943__$1){
var statearr_19977_20001 = state_19970__$1;
(statearr_19977_20001[(1)] = (9));

} else {
var statearr_19978_20002 = state_19970__$1;
(statearr_19978_20002[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19971 === (3))){
var inst_19930 = (state_19970[(11)]);
var inst_19931 = (state_19970[(13)]);
var inst_19933 = (inst_19931 < inst_19930);
var inst_19934 = inst_19933;
var state_19970__$1 = state_19970;
if(cljs.core.truth_(inst_19934)){
var statearr_19979_20003 = state_19970__$1;
(statearr_19979_20003[(1)] = (5));

} else {
var statearr_19980_20004 = state_19970__$1;
(statearr_19980_20004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19971 === (12))){
var inst_19943 = (state_19970[(10)]);
var inst_19947 = cljs.core.chunk_first.call(null,inst_19943);
var inst_19948 = cljs.core.chunk_rest.call(null,inst_19943);
var inst_19949 = cljs.core.count.call(null,inst_19947);
var inst_19928 = inst_19948;
var inst_19929 = inst_19947;
var inst_19930 = inst_19949;
var inst_19931 = (0);
var state_19970__$1 = (function (){var statearr_19981 = state_19970;
(statearr_19981[(11)] = inst_19930);

(statearr_19981[(12)] = inst_19929);

(statearr_19981[(13)] = inst_19931);

(statearr_19981[(14)] = inst_19928);

return statearr_19981;
})();
var statearr_19982_20005 = state_19970__$1;
(statearr_19982_20005[(2)] = null);

(statearr_19982_20005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19971 === (2))){
var inst_19922 = (state_19970[(7)]);
var inst_19922__$1 = (state_19970[(2)]);
var inst_19927 = cljs.core.seq.call(null,inst_19922__$1);
var inst_19928 = inst_19927;
var inst_19929 = null;
var inst_19930 = (0);
var inst_19931 = (0);
var state_19970__$1 = (function (){var statearr_19983 = state_19970;
(statearr_19983[(11)] = inst_19930);

(statearr_19983[(12)] = inst_19929);

(statearr_19983[(7)] = inst_19922__$1);

(statearr_19983[(13)] = inst_19931);

(statearr_19983[(14)] = inst_19928);

return statearr_19983;
})();
var statearr_19984_20006 = state_19970__$1;
(statearr_19984_20006[(2)] = null);

(statearr_19984_20006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19971 === (11))){
var inst_19962 = (state_19970[(2)]);
var state_19970__$1 = state_19970;
var statearr_19985_20007 = state_19970__$1;
(statearr_19985_20007[(2)] = inst_19962);

(statearr_19985_20007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19971 === (9))){
var inst_19943 = (state_19970[(10)]);
var inst_19945 = cljs.core.chunked_seq_QMARK_.call(null,inst_19943);
var state_19970__$1 = state_19970;
if(inst_19945){
var statearr_19986_20008 = state_19970__$1;
(statearr_19986_20008[(1)] = (12));

} else {
var statearr_19987_20009 = state_19970__$1;
(statearr_19987_20009[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19971 === (5))){
var inst_19929 = (state_19970[(12)]);
var inst_19931 = (state_19970[(13)]);
var inst_19936 = cljs.core._nth.call(null,inst_19929,inst_19931);
var inst_19937 = inst_19936.call(null);
var state_19970__$1 = state_19970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19970__$1,(8),inst_19937);
} else {
if((state_val_19971 === (14))){
var inst_19959 = (state_19970[(2)]);
var state_19970__$1 = state_19970;
var statearr_19991_20010 = state_19970__$1;
(statearr_19991_20010[(2)] = inst_19959);

(statearr_19991_20010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19971 === (10))){
var state_19970__$1 = state_19970;
var statearr_19992_20011 = state_19970__$1;
(statearr_19992_20011[(2)] = null);

(statearr_19992_20011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19971 === (8))){
var inst_19930 = (state_19970[(11)]);
var inst_19929 = (state_19970[(12)]);
var inst_19931 = (state_19970[(13)]);
var inst_19928 = (state_19970[(14)]);
var inst_19939 = (state_19970[(2)]);
var inst_19940 = (inst_19931 + (1));
var tmp19988 = inst_19930;
var tmp19989 = inst_19929;
var tmp19990 = inst_19928;
var inst_19928__$1 = tmp19990;
var inst_19929__$1 = tmp19989;
var inst_19930__$1 = tmp19988;
var inst_19931__$1 = inst_19940;
var state_19970__$1 = (function (){var statearr_19993 = state_19970;
(statearr_19993[(11)] = inst_19930__$1);

(statearr_19993[(12)] = inst_19929__$1);

(statearr_19993[(13)] = inst_19931__$1);

(statearr_19993[(14)] = inst_19928__$1);

(statearr_19993[(16)] = inst_19939);

return statearr_19993;
})();
var statearr_19994_20012 = state_19970__$1;
(statearr_19994_20012[(2)] = null);

(statearr_19994_20012[(1)] = (3));


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
var klipse$plugin$klipsify_elements_$_state_machine__13608__auto__ = null;
var klipse$plugin$klipsify_elements_$_state_machine__13608__auto____0 = (function (){
var statearr_19995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19995[(0)] = klipse$plugin$klipsify_elements_$_state_machine__13608__auto__);

(statearr_19995[(1)] = (1));

return statearr_19995;
});
var klipse$plugin$klipsify_elements_$_state_machine__13608__auto____1 = (function (state_19970){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_19970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e19996){if((e19996 instanceof Object)){
var ex__13611__auto__ = e19996;
var statearr_19997_20013 = state_19970;
(statearr_19997_20013[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20014 = state_19970;
state_19970 = G__20014;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$plugin$klipsify_elements_$_state_machine__13608__auto__ = function(state_19970){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_elements_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_elements_$_state_machine__13608__auto____1.call(this,state_19970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_elements_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_elements_$_state_machine__13608__auto____0;
klipse$plugin$klipsify_elements_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_elements_$_state_machine__13608__auto____1;
return klipse$plugin$klipsify_elements_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_19998 = f__13705__auto__.call(null);
(statearr_19998[(6)] = c__13704__auto__);

return statearr_19998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.plugin.snippets_selector = (function klipse$plugin$snippets_selector(settings,selector_names){
return clojure.string.join.call(null,",",cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,settings,selector_names)));
});
klipse.plugin.seq_from_selector = (function klipse$plugin$seq_from_selector(selector){
return cljs.core.array_seq.call(null,document.querySelectorAll(selector));
});
klipse.plugin.elements__GT_mode = (function klipse$plugin$elements__GT_mode(settings){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5520__auto__ = (function klipse$plugin$elements__GT_mode_$_iter__20015(s__20016){
return (new cljs.core.LazySeq(null,(function (){
var s__20016__$1 = s__20016;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__20016__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var selector_name = cljs.core.first.call(null,xs__6360__auto__);
var selector = settings.call(null,selector_name);
if(cljs.core.truth_(selector)){
var iterys__5516__auto__ = ((function (s__20016__$1,selector,selector_name,xs__6360__auto__,temp__5804__auto__){
return (function klipse$plugin$elements__GT_mode_$_iter__20015_$_iter__20017(s__20018){
return (new cljs.core.LazySeq(null,((function (s__20016__$1,selector,selector_name,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__20018__$1 = s__20018;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__20018__$1);
if(temp__5804__auto____$1){
var s__20018__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20018__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__20018__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__20020 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__20019 = (0);
while(true){
if((i__20019 < size__5519__auto__)){
var element = cljs.core._nth.call(null,c__5518__auto__,i__20019);
cljs.core.chunk_append.call(null,b__20020,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null));

var G__20021 = (i__20019 + (1));
i__20019 = G__20021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20020),klipse$plugin$elements__GT_mode_$_iter__20015_$_iter__20017.call(null,cljs.core.chunk_rest.call(null,s__20018__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20020),null);
}
} else {
var element = cljs.core.first.call(null,s__20018__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null),klipse$plugin$elements__GT_mode_$_iter__20015_$_iter__20017.call(null,cljs.core.rest.call(null,s__20018__$2)));
}
} else {
return null;
}
break;
}
});})(s__20016__$1,selector,selector_name,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__20016__$1,selector,selector_name,xs__6360__auto__,temp__5804__auto__))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,klipse.plugin.seq_from_selector.call(null,selector)));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,klipse$plugin$elements__GT_mode_$_iter__20015.call(null,cljs.core.rest.call(null,s__20016__$1)));
} else {
var G__20022 = cljs.core.rest.call(null,s__20016__$1);
s__20016__$1 = G__20022;
continue;
}
} else {
var G__20023 = cljs.core.rest.call(null,s__20016__$1);
s__20016__$1 = G__20023;
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
var map__20024 = clojure.walk.keywordize_keys.call(null,settings);
var map__20024__$1 = cljs.core.__destructure_map.call(null,map__20024);
var keywordized_settings = map__20024__$1;
var secured_eval = cljs.core.get.call(null,map__20024__$1,new cljs.core.Keyword(null,"secured_eval","secured_eval",-1577487888));
var security_forbidden_symbols = cljs.core.get.call(null,map__20024__$1,new cljs.core.Keyword(null,"security_forbidden_symbols","security_forbidden_symbols",-1480402500),klipse.utils.default_forbidden_symbols.call(null));
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

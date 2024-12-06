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
var map__29549 = klipse.args_from_element.editor_args_from_element.call(null,element);
var map__29549__$1 = cljs.core.__destructure_map.call(null,map__29549);
var idle_msec = cljs.core.get.call(null,map__29549__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),global_idle_msec);
var editor_type = cljs.core.get.call(null,map__29549__$1,new cljs.core.Keyword(null,"editor-type","editor-type",198227301),global_editor_type);
var preamble = cljs.core.get.call(null,map__29549__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var async_code_QMARK_ = cljs.core.get.call(null,map__29549__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var loop_msec = cljs.core.get.call(null,map__29549__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),null);
return gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),(function (){var x__5128__auto__ = min_idle_msec;
var y__5129__auto__ = idle_msec;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})(),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),async_code_QMARK_,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480),editor_type], null));
});
klipse.plugin.calc_editor_type = (function klipse$plugin$calc_editor_type(minimalistic_ui_QMARK_,the_type){
if(cljs.core.truth_(minimalistic_ui_QMARK_)){
return new cljs.core.Keyword(null,"dom","dom",-1236537922);
} else {
var G__29550 = the_type;
switch (G__29550) {
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29581){
var state_val_29582 = (state_29581[(1)]);
if((state_val_29582 === (1))){
var state_29581__$1 = state_29581;
if(cljs.core.truth_(no_dynamic_scripts_QMARK_)){
var statearr_29583_29596 = state_29581__$1;
(statearr_29583_29596[(1)] = (2));

} else {
var statearr_29584_29597 = state_29581__$1;
(statearr_29584_29597[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29582 === (2))){
var inst_29553 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29554 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_29555 = (new cljs.core.PersistentVector(null,2,(5),inst_29553,inst_29554,null));
var state_29581__$1 = state_29581;
var statearr_29585_29598 = state_29581__$1;
(statearr_29585_29598[(2)] = inst_29555);

(statearr_29585_29598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29582 === (3))){
var inst_29560 = klipse.utils.load_scripts_mem.call(null,scripts);
var state_29581__$1 = state_29581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29581__$1,(5),inst_29560);
} else {
if((state_val_29582 === (4))){
var inst_29579 = (state_29581[(2)]);
var state_29581__$1 = state_29581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29581__$1,inst_29579);
} else {
if((state_val_29582 === (5))){
var inst_29562 = (state_29581[(2)]);
var inst_29563 = cljs.core.nth.call(null,inst_29562,(0),null);
var inst_29564 = cljs.core.nth.call(null,inst_29562,(1),null);
var inst_29565 = cljs.core.nth.call(null,inst_29562,(2),null);
var inst_29566 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_29563);
var state_29581__$1 = (function (){var statearr_29586 = state_29581;
(statearr_29586[(7)] = inst_29564);

(statearr_29586[(8)] = inst_29565);

return statearr_29586;
})();
if(inst_29566){
var statearr_29587_29599 = state_29581__$1;
(statearr_29587_29599[(1)] = (6));

} else {
var statearr_29588_29600 = state_29581__$1;
(statearr_29588_29600[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29582 === (6))){
var inst_29568 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29569 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_29570 = (new cljs.core.PersistentVector(null,2,(5),inst_29568,inst_29569,null));
var state_29581__$1 = state_29581;
var statearr_29589_29601 = state_29581__$1;
(statearr_29589_29601[(2)] = inst_29570);

(statearr_29589_29601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29582 === (7))){
var inst_29564 = (state_29581[(7)]);
var inst_29565 = (state_29581[(8)]);
var inst_29572 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29573 = ["Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29565),"\n","Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29564)].join('');
var inst_29574 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29573];
var inst_29575 = (new cljs.core.PersistentVector(null,2,(5),inst_29572,inst_29574,null));
var state_29581__$1 = state_29581;
var statearr_29590_29602 = state_29581__$1;
(statearr_29590_29602[(2)] = inst_29575);

(statearr_29590_29602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29582 === (8))){
var inst_29577 = (state_29581[(2)]);
var state_29581__$1 = state_29581;
var statearr_29591_29603 = state_29581__$1;
(statearr_29591_29603[(2)] = inst_29577);

(statearr_29591_29603[(1)] = (4));


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
var statearr_29592 = [null,null,null,null,null,null,null,null,null];
(statearr_29592[(0)] = klipse$plugin$load_external_scripts_$_state_machine__15523__auto__);

(statearr_29592[(1)] = (1));

return statearr_29592;
});
var klipse$plugin$load_external_scripts_$_state_machine__15523__auto____1 = (function (state_29581){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29593){if((e29593 instanceof Object)){
var ex__15526__auto__ = e29593;
var statearr_29594_29604 = state_29581;
(statearr_29594_29604[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29605 = state_29581;
state_29581 = G__29605;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$load_external_scripts_$_state_machine__15523__auto__ = function(state_29581){
switch(arguments.length){
case 0:
return klipse$plugin$load_external_scripts_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$load_external_scripts_$_state_machine__15523__auto____1.call(this,state_29581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$load_external_scripts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$load_external_scripts_$_state_machine__15523__auto____0;
klipse$plugin$load_external_scripts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$load_external_scripts_$_state_machine__15523__auto____1;
return klipse$plugin$load_external_scripts_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29595 = f__15620__auto__.call(null);
(statearr_29595[(6)] = c__15619__auto__);

return statearr_29595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
/**
 * returns a channel c with a function f.
 *   f returns a channel that will be ready to read when the snippet is evaluated.
 */
klipse.plugin.klipsify_with_opts = (function klipse$plugin$klipsify_with_opts(element,p__29609,p__29610,mode){
var map__29611 = p__29609;
var map__29611__$1 = cljs.core.__destructure_map.call(null,map__29611);
var no_dynamic_scripts = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"no_dynamic_scripts","no_dynamic_scripts",-730706373));
var codemirror_options_in = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"codemirror_options_in","codemirror_options_in",-1220877316),cljs.core.PersistentArrayMap.EMPTY);
var eval_idle_msec = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"eval_idle_msec","eval_idle_msec",1104296094),(20));
var codemirror_options_out = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"codemirror_options_out","codemirror_options_out",440175842),cljs.core.PersistentArrayMap.EMPTY);
var print_length = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"print_length","print_length",2140955911),(1000));
var editor_type = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"editor_type","editor_type",195783179));
var minimalistic_ui = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"minimalistic_ui","minimalistic_ui",-944637362),false);
var beautify_strings = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"beautify_strings","beautify_strings",1690445266),false);
var eval_context = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"eval_context","eval_context",1307295352));
var map__29612 = p__29610;
var map__29612__$1 = cljs.core.__destructure_map.call(null,map__29612);
var lang_opts = map__29612__$1;
var eval_fn = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var beautify_output_QMARK_ = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),true);
var no_result = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var default_editor = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"default-editor","default-editor",758164479));
var editor_out_mode = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var beautify_QMARK_ = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),true);
var min_eval_idle_msec = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(0));
var comment_str = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
var editor_in_mode = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var external_scripts = cljs.core.get.call(null,map__29612__$1,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),cljs.core.PersistentVector.EMPTY);
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29675){
var state_val_29676 = (state_29675[(1)]);
if((state_val_29676 === (7))){
var state_29675__$1 = state_29675;
var statearr_29677_29721 = state_29675__$1;
(statearr_29677_29721[(2)] = default_editor);

(statearr_29677_29721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (20))){
var state_29675__$1 = state_29675;
var statearr_29678_29722 = state_29675__$1;
(statearr_29678_29722[(2)] = false);

(statearr_29678_29722[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (1))){
var state_29675__$1 = state_29675;
if(cljs.core.truth_(element)){
var statearr_29679_29723 = state_29675__$1;
(statearr_29679_29723[(1)] = (2));

} else {
var statearr_29680_29724 = state_29675__$1;
(statearr_29680_29724[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (4))){
var inst_29673 = (state_29675[(2)]);
var state_29675__$1 = state_29675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29675__$1,inst_29673);
} else {
if((state_val_29676 === (15))){
var inst_29632 = (state_29675[(7)]);
var inst_29642 = (state_29675[(8)]);
var inst_29630 = (state_29675[(9)]);
var inst_29641 = (state_29675[(10)]);
var inst_29627 = (state_29675[(11)]);
var inst_29637 = (state_29675[(12)]);
var inst_29631 = (state_29675[(13)]);
var inst_29628 = (state_29675[(14)]);
var inst_29643 = (state_29675[(15)]);
var inst_29625 = (state_29675[(16)]);
var inst_29622 = (state_29675[(17)]);
var inst_29621 = (state_29675[(18)]);
var inst_29654 = (state_29675[(2)]);
var inst_29655 = (function (){var the_editor_type = inst_29637;
var eval_fn_with_args = inst_29622;
var idle_msec = inst_29628;
var loop_msec = inst_29630;
var load_error = inst_29643;
var map__29614 = inst_29627;
var async_code_QMARK_ = inst_29631;
var load_status = inst_29642;
var eval_args = inst_29621;
var source_code = inst_29625;
var vec__29615 = inst_29641;
var preamble = inst_29632;
return (function (p1__29608_SHARP_){
var c__15619__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29684){
var state_val_29685 = (state_29684[(1)]);
if((state_val_29685 === (1))){
var state_29684__$1 = state_29684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29684__$1,(2),klipse.plugin.event_chan,p1__29608_SHARP_);
} else {
if((state_val_29685 === (2))){
var inst_29682 = (state_29684[(2)]);
var state_29684__$1 = state_29684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29684__$1,inst_29682);
} else {
return null;
}
}
});
return (function() {
var klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__ = null;
var klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____0 = (function (){
var statearr_29686 = [null,null,null,null,null,null,null];
(statearr_29686[(0)] = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__);

(statearr_29686[(1)] = (1));

return statearr_29686;
});
var klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1 = (function (state_29684){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29687){if((e29687 instanceof Object)){
var ex__15526__auto__ = e29687;
var statearr_29688_29725 = state_29684;
(statearr_29688_29725[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29726 = state_29684;
state_29684 = G__29726;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__ = function(state_29684){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1.call(this,state_29684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29689 = f__15620__auto__.call(null);
(statearr_29689[(6)] = c__15619__auto____$1);

return statearr_29689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto____$1;
});
})();
var inst_29656 = klipse.plugin.snippet_num_BANG_.call(null);
var inst_29657 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_29642);
var state_29675__$1 = (function (){var statearr_29690 = state_29675;
(statearr_29690[(19)] = inst_29656);

(statearr_29690[(20)] = inst_29654);

(statearr_29690[(21)] = inst_29655);

return statearr_29690;
})();
if(inst_29657){
var statearr_29691_29727 = state_29675__$1;
(statearr_29691_29727[(1)] = (16));

} else {
var statearr_29692_29728 = state_29675__$1;
(statearr_29692_29728[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (21))){
var inst_29649 = (state_29675[(22)]);
var inst_29632 = (state_29675[(7)]);
var inst_29630 = (state_29675[(9)]);
var inst_29656 = (state_29675[(19)]);
var inst_29637 = (state_29675[(12)]);
var inst_29654 = (state_29675[(20)]);
var inst_29644 = (state_29675[(23)]);
var inst_29631 = (state_29675[(13)]);
var inst_29655 = (state_29675[(21)]);
var inst_29628 = (state_29675[(14)]);
var inst_29625 = (state_29675[(16)]);
var inst_29662 = (state_29675[(24)]);
var inst_29667 = (state_29675[(2)]);
var inst_29668 = [inst_29649,inst_29654,inst_29628,inst_29630,element,editor_out_mode,inst_29655,inst_29631,mode,inst_29625,inst_29632,codemirror_options_out,editor_in_mode,inst_29656,inst_29662,no_result,codemirror_options_in,inst_29667];
var inst_29669 = cljs.core.PersistentHashMap.fromArrays(inst_29644,inst_29668);
var inst_29670 = klipse.klipse_editors.create_editor.call(null,inst_29637,inst_29669);
var state_29675__$1 = state_29675;
var statearr_29693_29729 = state_29675__$1;
(statearr_29693_29729[(2)] = inst_29670);

(statearr_29693_29729[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (13))){
var state_29675__$1 = state_29675;
var statearr_29694_29730 = state_29675__$1;
(statearr_29694_29730[(2)] = beautify_QMARK_);

(statearr_29694_29730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (6))){
var inst_29629 = (state_29675[(25)]);
var state_29675__$1 = state_29675;
var statearr_29695_29731 = state_29675__$1;
(statearr_29695_29731[(2)] = inst_29629);

(statearr_29695_29731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (17))){
var inst_29632 = (state_29675[(7)]);
var inst_29642 = (state_29675[(8)]);
var inst_29630 = (state_29675[(9)]);
var inst_29641 = (state_29675[(10)]);
var inst_29627 = (state_29675[(11)]);
var inst_29637 = (state_29675[(12)]);
var inst_29631 = (state_29675[(13)]);
var inst_29628 = (state_29675[(14)]);
var inst_29643 = (state_29675[(15)]);
var inst_29625 = (state_29675[(16)]);
var inst_29622 = (state_29675[(17)]);
var inst_29621 = (state_29675[(18)]);
var inst_29660 = (function (){var the_editor_type = inst_29637;
var eval_fn_with_args = inst_29622;
var idle_msec = inst_29628;
var loop_msec = inst_29630;
var load_error = inst_29643;
var map__29614 = inst_29627;
var async_code_QMARK_ = inst_29631;
var load_status = inst_29642;
var eval_args = inst_29621;
var source_code = inst_29625;
var vec__29615 = inst_29641;
var preamble = inst_29632;
return (function (){
return cljs.core.async.chan.call(null);
});
})();
var state_29675__$1 = state_29675;
var statearr_29696_29732 = state_29675__$1;
(statearr_29696_29732[(2)] = inst_29660);

(statearr_29696_29732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (3))){
var state_29675__$1 = state_29675;
var statearr_29697_29733 = state_29675__$1;
(statearr_29697_29733[(2)] = null);

(statearr_29697_29733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (12))){
var inst_29642 = (state_29675[(8)]);
var inst_29649 = (state_29675[(2)]);
var inst_29650 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_29642);
var state_29675__$1 = (function (){var statearr_29698 = state_29675;
(statearr_29698[(22)] = inst_29649);

return statearr_29698;
})();
if(inst_29650){
var statearr_29699_29734 = state_29675__$1;
(statearr_29699_29734[(1)] = (13));

} else {
var statearr_29700_29735 = state_29675__$1;
(statearr_29700_29735[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (2))){
var inst_29621 = (state_29675[(18)]);
var inst_29618 = [new cljs.core.Keyword(null,"eval-context","eval-context",536255614),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479)];
var inst_29619 = [eval_context,print_length,beautify_strings];
var inst_29620 = cljs.core.PersistentHashMap.fromArrays(inst_29618,inst_29619);
var inst_29621__$1 = klipse.args_from_element.eval_args_from_element.call(null,element,inst_29620);
var inst_29622 = (function (){var eval_args = inst_29621__$1;
return (function (p1__29606_SHARP_,p2__29607_SHARP_){
return eval_fn.call(null,p1__29606_SHARP_,cljs.core.merge.call(null,eval_args,p2__29607_SHARP_));
});
})();
var inst_29623 = klipse.args_from_element.content.call(null,element,comment_str);
var state_29675__$1 = (function (){var statearr_29701 = state_29675;
(statearr_29701[(17)] = inst_29622);

(statearr_29701[(18)] = inst_29621__$1);

return statearr_29701;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29675__$1,(5),inst_29623);
} else {
if((state_val_29676 === (19))){
var state_29675__$1 = state_29675;
var statearr_29702_29736 = state_29675__$1;
(statearr_29702_29736[(2)] = beautify_output_QMARK_);

(statearr_29702_29736[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (11))){
var inst_29643 = (state_29675[(15)]);
var state_29675__$1 = state_29675;
var statearr_29703_29737 = state_29675__$1;
(statearr_29703_29737[(2)] = inst_29643);

(statearr_29703_29737[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (9))){
var inst_29642 = (state_29675[(8)]);
var inst_29641 = (state_29675[(10)]);
var inst_29641__$1 = (state_29675[(2)]);
var inst_29642__$1 = cljs.core.nth.call(null,inst_29641__$1,(0),null);
var inst_29643 = cljs.core.nth.call(null,inst_29641__$1,(1),null);
var inst_29644 = [new cljs.core.Keyword(null,"default-txt","default-txt",27736322),new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"on-edit-cb","on-edit-cb",1727649734),new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"source-code","source-code",-685884337),new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"no-result","no-result",1702657437),new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441)];
var inst_29645 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_29642__$1);
var state_29675__$1 = (function (){var statearr_29704 = state_29675;
(statearr_29704[(8)] = inst_29642__$1);

(statearr_29704[(10)] = inst_29641__$1);

(statearr_29704[(23)] = inst_29644);

(statearr_29704[(15)] = inst_29643);

return statearr_29704;
})();
if(inst_29645){
var statearr_29705_29738 = state_29675__$1;
(statearr_29705_29738[(1)] = (10));

} else {
var statearr_29706_29739 = state_29675__$1;
(statearr_29706_29739[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (5))){
var inst_29627 = (state_29675[(11)]);
var inst_29629 = (state_29675[(25)]);
var inst_29625 = (state_29675[(2)]);
var inst_29626 = klipse.plugin.calc_editor_args_from_element.call(null,element,eval_idle_msec,min_eval_idle_msec,editor_type);
var inst_29627__$1 = cljs.core.__destructure_map.call(null,inst_29626);
var inst_29628 = cljs.core.get.call(null,inst_29627__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var inst_29629__$1 = cljs.core.get.call(null,inst_29627__$1,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480));
var inst_29630 = cljs.core.get.call(null,inst_29627__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var inst_29631 = cljs.core.get.call(null,inst_29627__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var inst_29632 = cljs.core.get.call(null,inst_29627__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var state_29675__$1 = (function (){var statearr_29707 = state_29675;
(statearr_29707[(7)] = inst_29632);

(statearr_29707[(9)] = inst_29630);

(statearr_29707[(11)] = inst_29627__$1);

(statearr_29707[(25)] = inst_29629__$1);

(statearr_29707[(13)] = inst_29631);

(statearr_29707[(14)] = inst_29628);

(statearr_29707[(16)] = inst_29625);

return statearr_29707;
})();
if(cljs.core.truth_(inst_29629__$1)){
var statearr_29708_29740 = state_29675__$1;
(statearr_29708_29740[(1)] = (6));

} else {
var statearr_29709_29741 = state_29675__$1;
(statearr_29709_29741[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (14))){
var state_29675__$1 = state_29675;
var statearr_29710_29742 = state_29675__$1;
(statearr_29710_29742[(2)] = false);

(statearr_29710_29742[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (16))){
var inst_29622 = (state_29675[(17)]);
var state_29675__$1 = state_29675;
var statearr_29711_29743 = state_29675__$1;
(statearr_29711_29743[(2)] = inst_29622);

(statearr_29711_29743[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (10))){
var state_29675__$1 = state_29675;
var statearr_29712_29744 = state_29675__$1;
(statearr_29712_29744[(2)] = klipse.plugin.out_placeholder);

(statearr_29712_29744[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (18))){
var inst_29642 = (state_29675[(8)]);
var inst_29662 = (state_29675[(2)]);
var inst_29663 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_29642);
var state_29675__$1 = (function (){var statearr_29713 = state_29675;
(statearr_29713[(24)] = inst_29662);

return statearr_29713;
})();
if(inst_29663){
var statearr_29714_29745 = state_29675__$1;
(statearr_29714_29745[(1)] = (19));

} else {
var statearr_29715_29746 = state_29675__$1;
(statearr_29715_29746[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29676 === (8))){
var inst_29636 = (state_29675[(2)]);
var inst_29637 = klipse.plugin.calc_editor_type.call(null,minimalistic_ui,inst_29636);
var inst_29638 = gadjett.collections.collify.call(null,external_scripts);
var inst_29639 = klipse.plugin.load_external_scripts.call(null,inst_29638,no_dynamic_scripts);
var state_29675__$1 = (function (){var statearr_29716 = state_29675;
(statearr_29716[(12)] = inst_29637);

return statearr_29716;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29675__$1,(9),inst_29639);
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
var statearr_29717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29717[(0)] = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__);

(statearr_29717[(1)] = (1));

return statearr_29717;
});
var klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1 = (function (state_29675){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29718){if((e29718 instanceof Object)){
var ex__15526__auto__ = e29718;
var statearr_29719_29747 = state_29675;
(statearr_29719_29747[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29748 = state_29675;
state_29675 = G__29748;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__ = function(state_29675){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1.call(this,state_29675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29720 = f__15620__auto__.call(null);
(statearr_29720[(6)] = c__15619__auto__);

return statearr_29720;
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
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),true),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),false))),(function (p1__29749_SHARP_){
return ((cljs.core._EQ_.call(null,p1__29749_SHARP_,true)) || (cljs.core._EQ_.call(null,p1__29749_SHARP_,false)));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29750){
return cljs.core.map_QMARK_.call(null,G__29750);
}),(function (G__29750){
return cljs.core.contains_QMARK_.call(null,G__29750,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
}),(function (G__29750){
return cljs.core.contains_QMARK_.call(null,G__29750,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
}),(function (G__29750){
return cljs.core.contains_QMARK_.call(null,G__29750,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
}),(function (G__29750){
return cljs.core.contains_QMARK_.call(null,G__29750,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
})], null),(function (G__29750){
return ((cljs.core.map_QMARK_.call(null,G__29750)) && (((cljs.core.contains_QMARK_.call(null,G__29750,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))) && (((cljs.core.contains_QMARK_.call(null,G__29750,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))) && (((cljs.core.contains_QMARK_.call(null,G__29750,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))) && (cljs.core.contains_QMARK_.call(null,G__29750,new cljs.core.Keyword(null,"comment-str","comment-str",130143853))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29751){
return cljs.core.map_QMARK_.call(null,G__29751);
})], null),(function (G__29751){
return cljs.core.map_QMARK_.call(null,G__29751);
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29759){
var state_val_29760 = (state_29759[(1)]);
if((state_val_29760 === (1))){
var inst_29752 = klipse.plugin.klipsify_with_opts.call(null,element,general_settings,opts,mode);
var state_29759__$1 = state_29759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29759__$1,(3),inst_29752);
} else {
if((state_val_29760 === (2))){
var inst_29757 = (state_29759[(2)]);
var state_29759__$1 = state_29759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29759__$1,inst_29757);
} else {
if((state_val_29760 === (3))){
var inst_29754 = (state_29759[(2)]);
var inst_29755 = inst_29754.call(null);
var state_29759__$1 = state_29759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29759__$1,(2),inst_29755);
} else {
return null;
}
}
}
});
return (function() {
var klipse$plugin$klipsify_$_state_machine__15523__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__15523__auto____0 = (function (){
var statearr_29761 = [null,null,null,null,null,null,null];
(statearr_29761[(0)] = klipse$plugin$klipsify_$_state_machine__15523__auto__);

(statearr_29761[(1)] = (1));

return statearr_29761;
});
var klipse$plugin$klipsify_$_state_machine__15523__auto____1 = (function (state_29759){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29762){if((e29762 instanceof Object)){
var ex__15526__auto__ = e29762;
var statearr_29763_29775 = state_29759;
(statearr_29763_29775[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29776 = state_29759;
state_29759 = G__29776;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__15523__auto__ = function(state_29759){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__15523__auto____1.call(this,state_29759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29764 = f__15620__auto__.call(null);
(statearr_29764[(6)] = c__15619__auto__);

return statearr_29764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
} else {
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29769){
var state_val_29770 = (state_29769[(1)]);
if((state_val_29770 === (1))){
var inst_29765 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_29766 = cljs.core.keys.call(null,inst_29765);
var inst_29767 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_29766);
var state_29769__$1 = state_29769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29769__$1,inst_29767);
} else {
return null;
}
});
return (function() {
var klipse$plugin$klipsify_$_state_machine__15523__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__15523__auto____0 = (function (){
var statearr_29771 = [null,null,null,null,null,null,null];
(statearr_29771[(0)] = klipse$plugin$klipsify_$_state_machine__15523__auto__);

(statearr_29771[(1)] = (1));

return statearr_29771;
});
var klipse$plugin$klipsify_$_state_machine__15523__auto____1 = (function (state_29769){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29772){if((e29772 instanceof Object)){
var ex__15526__auto__ = e29772;
var statearr_29773_29777 = state_29769;
(statearr_29773_29777[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29778 = state_29769;
state_29769 = G__29778;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__15523__auto__ = function(state_29769){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__15523__auto____1.call(this,state_29769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29774 = f__15620__auto__.call(null);
(statearr_29774[(6)] = c__15619__auto__);

return statearr_29774;
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29781){
var state_val_29782 = (state_29781[(1)]);
if((state_val_29782 === (1))){
var inst_29779 = (function (){return (function (){
var c__15619__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29787){
var state_val_29788 = (state_29787[(1)]);
if((state_val_29788 === (1))){
var inst_29783 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_29784 = cljs.core.keys.call(null,inst_29783);
var inst_29785 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_29784);
var state_29787__$1 = state_29787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29787__$1,inst_29785);
} else {
return null;
}
});
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_29789 = [null,null,null,null,null,null,null];
(statearr_29789[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__);

(statearr_29789[(1)] = (1));

return statearr_29789;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1 = (function (state_29787){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29790){if((e29790 instanceof Object)){
var ex__15526__auto__ = e29790;
var statearr_29791_29797 = state_29787;
(statearr_29791_29797[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29798 = state_29787;
state_29787 = G__29798;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__ = function(state_29787){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1.call(this,state_29787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29792 = f__15620__auto__.call(null);
(statearr_29792[(6)] = c__15619__auto____$1);

return statearr_29792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto____$1;
});
})();
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29781__$1,inst_29779);
} else {
return null;
}
});
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_29793 = [null,null,null,null,null,null,null];
(statearr_29793[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__);

(statearr_29793[(1)] = (1));

return statearr_29793;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1 = (function (state_29781){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29794){if((e29794 instanceof Object)){
var ex__15526__auto__ = e29794;
var statearr_29795_29799 = state_29781;
(statearr_29795_29799[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29800 = state_29781;
state_29781 = G__29800;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__ = function(state_29781){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1.call(this,state_29781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29796 = f__15620__auto__.call(null);
(statearr_29796[(6)] = c__15619__auto__);

return statearr_29796;
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29827){
var state_val_29828 = (state_29827[(1)]);
if((state_val_29828 === (7))){
var inst_29808 = (state_29827[(7)]);
var inst_29807 = (state_29827[(8)]);
var inst_29810 = klipse.plugin.klipsify_no_eval.call(null,inst_29807,general_settings,inst_29808);
var state_29827__$1 = state_29827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29827__$1,(10),inst_29810);
} else {
if((state_val_29828 === (1))){
var inst_29801 = cljs.core.PersistentVector.EMPTY;
var inst_29802 = elements;
var inst_29803 = inst_29801;
var state_29827__$1 = (function (){var statearr_29829 = state_29827;
(statearr_29829[(9)] = inst_29803);

(statearr_29829[(10)] = inst_29802);

return statearr_29829;
})();
var statearr_29830_29848 = state_29827__$1;
(statearr_29830_29848[(2)] = null);

(statearr_29830_29848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (4))){
var inst_29808 = (state_29827[(7)]);
var inst_29807 = (state_29827[(8)]);
var inst_29802 = (state_29827[(10)]);
var inst_29807__$1 = cljs.core.first.call(null,inst_29802);
var inst_29808__$1 = modes.call(null,inst_29807__$1);
var state_29827__$1 = (function (){var statearr_29831 = state_29827;
(statearr_29831[(7)] = inst_29808__$1);

(statearr_29831[(8)] = inst_29807__$1);

return statearr_29831;
})();
if(cljs.core.truth_(inst_29808__$1)){
var statearr_29832_29849 = state_29827__$1;
(statearr_29832_29849[(1)] = (7));

} else {
var statearr_29833_29850 = state_29827__$1;
(statearr_29833_29850[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (6))){
var inst_29823 = (state_29827[(2)]);
var state_29827__$1 = state_29827;
var statearr_29834_29851 = state_29827__$1;
(statearr_29834_29851[(2)] = inst_29823);

(statearr_29834_29851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (3))){
var inst_29825 = (state_29827[(2)]);
var state_29827__$1 = state_29827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29827__$1,inst_29825);
} else {
if((state_val_29828 === (2))){
var inst_29802 = (state_29827[(10)]);
var inst_29805 = cljs.core.seq.call(null,inst_29802);
var state_29827__$1 = state_29827;
if(inst_29805){
var statearr_29835_29852 = state_29827__$1;
(statearr_29835_29852[(1)] = (4));

} else {
var statearr_29836_29853 = state_29827__$1;
(statearr_29836_29853[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (9))){
var inst_29820 = (state_29827[(2)]);
var state_29827__$1 = state_29827;
var statearr_29837_29854 = state_29827__$1;
(statearr_29837_29854[(2)] = inst_29820);

(statearr_29837_29854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (5))){
var inst_29803 = (state_29827[(9)]);
var state_29827__$1 = state_29827;
var statearr_29839_29855 = state_29827__$1;
(statearr_29839_29855[(2)] = inst_29803);

(statearr_29839_29855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (10))){
var inst_29803 = (state_29827[(9)]);
var inst_29802 = (state_29827[(10)]);
var inst_29812 = (state_29827[(2)]);
var inst_29813 = cljs.core.rest.call(null,inst_29802);
var inst_29814 = cljs.core.conj.call(null,inst_29803,inst_29812);
var inst_29802__$1 = inst_29813;
var inst_29803__$1 = inst_29814;
var state_29827__$1 = (function (){var statearr_29840 = state_29827;
(statearr_29840[(9)] = inst_29803__$1);

(statearr_29840[(10)] = inst_29802__$1);

return statearr_29840;
})();
var statearr_29841_29856 = state_29827__$1;
(statearr_29841_29856[(2)] = null);

(statearr_29841_29856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29828 === (8))){
var inst_29803 = (state_29827[(9)]);
var inst_29802 = (state_29827[(10)]);
var inst_29817 = cljs.core.rest.call(null,inst_29802);
var tmp29838 = inst_29803;
var inst_29802__$1 = inst_29817;
var inst_29803__$1 = tmp29838;
var state_29827__$1 = (function (){var statearr_29842 = state_29827;
(statearr_29842[(9)] = inst_29803__$1);

(statearr_29842[(10)] = inst_29802__$1);

return statearr_29842;
})();
var statearr_29843_29857 = state_29827__$1;
(statearr_29843_29857[(2)] = null);

(statearr_29843_29857[(1)] = (2));


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
var statearr_29844 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29844[(0)] = klipse$plugin$edit_elements_$_state_machine__15523__auto__);

(statearr_29844[(1)] = (1));

return statearr_29844;
});
var klipse$plugin$edit_elements_$_state_machine__15523__auto____1 = (function (state_29827){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29845){if((e29845 instanceof Object)){
var ex__15526__auto__ = e29845;
var statearr_29846_29858 = state_29827;
(statearr_29846_29858[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29859 = state_29827;
state_29827 = G__29859;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$edit_elements_$_state_machine__15523__auto__ = function(state_29827){
switch(arguments.length){
case 0:
return klipse$plugin$edit_elements_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$edit_elements_$_state_machine__15523__auto____1.call(this,state_29827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$edit_elements_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$edit_elements_$_state_machine__15523__auto____0;
klipse$plugin$edit_elements_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$edit_elements_$_state_machine__15523__auto____1;
return klipse$plugin$edit_elements_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29847 = f__15620__auto__.call(null);
(statearr_29847[(6)] = c__15619__auto__);

return statearr_29847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.plugin.eval_snippets_on_change = (function klipse$plugin$eval_snippets_on_change(p__29860,eval_fns){
var map__29861 = p__29860;
var map__29861__$1 = cljs.core.__destructure_map.call(null,map__29861);
var re_evaluate_all_snippets_on_change = cljs.core.get.call(null,map__29861__$1,new cljs.core.Keyword(null,"re_evaluate_all_snippets_on_change","re_evaluate_all_snippets_on_change",-98983280));
if(cljs.core.truth_(re_evaluate_all_snippets_on_change)){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29912){
var state_val_29913 = (state_29912[(1)]);
if((state_val_29913 === (7))){
var inst_29874 = (state_29912[(7)]);
var inst_29871 = (state_29912[(8)]);
var inst_29873 = (state_29912[(9)]);
var inst_29872 = (state_29912[(10)]);
var inst_29879 = cljs.core._nth.call(null,inst_29872,inst_29874);
var inst_29880 = inst_29879.call(null);
var inst_29881 = (inst_29874 + (1));
var tmp29914 = inst_29871;
var tmp29915 = inst_29873;
var tmp29916 = inst_29872;
var inst_29871__$1 = tmp29914;
var inst_29872__$1 = tmp29916;
var inst_29873__$1 = tmp29915;
var inst_29874__$1 = inst_29881;
var state_29912__$1 = (function (){var statearr_29917 = state_29912;
(statearr_29917[(7)] = inst_29874__$1);

(statearr_29917[(8)] = inst_29871__$1);

(statearr_29917[(11)] = inst_29880);

(statearr_29917[(9)] = inst_29873__$1);

(statearr_29917[(10)] = inst_29872__$1);

return statearr_29917;
})();
var statearr_29918_29945 = state_29912__$1;
(statearr_29918_29945[(2)] = null);

(statearr_29918_29945[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (1))){
var state_29912__$1 = state_29912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29912__$1,(2),klipse.plugin.event_chan);
} else {
if((state_val_29913 === (4))){
var inst_29910 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29912__$1,inst_29910);
} else {
if((state_val_29913 === (15))){
var inst_29898 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
var statearr_29919_29946 = state_29912__$1;
(statearr_29919_29946[(2)] = inst_29898);

(statearr_29919_29946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (13))){
var inst_29884 = (state_29912[(12)]);
var inst_29888 = cljs.core.chunk_first.call(null,inst_29884);
var inst_29889 = cljs.core.chunk_rest.call(null,inst_29884);
var inst_29890 = cljs.core.count.call(null,inst_29888);
var inst_29871 = inst_29889;
var inst_29872 = inst_29888;
var inst_29873 = inst_29890;
var inst_29874 = (0);
var state_29912__$1 = (function (){var statearr_29920 = state_29912;
(statearr_29920[(7)] = inst_29874);

(statearr_29920[(8)] = inst_29871);

(statearr_29920[(9)] = inst_29873);

(statearr_29920[(10)] = inst_29872);

return statearr_29920;
})();
var statearr_29921_29947 = state_29912__$1;
(statearr_29921_29947[(2)] = null);

(statearr_29921_29947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (6))){
var inst_29905 = (state_29912[(2)]);
var state_29912__$1 = (function (){var statearr_29922 = state_29912;
(statearr_29922[(13)] = inst_29905);

return statearr_29922;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29912__$1,(16),klipse.plugin.event_chan);
} else {
if((state_val_29913 === (3))){
var inst_29870 = cljs.core.seq.call(null,eval_fns);
var inst_29871 = inst_29870;
var inst_29872 = null;
var inst_29873 = (0);
var inst_29874 = (0);
var state_29912__$1 = (function (){var statearr_29923 = state_29912;
(statearr_29923[(7)] = inst_29874);

(statearr_29923[(8)] = inst_29871);

(statearr_29923[(9)] = inst_29873);

(statearr_29923[(10)] = inst_29872);

return statearr_29923;
})();
var statearr_29924_29948 = state_29912__$1;
(statearr_29924_29948[(2)] = null);

(statearr_29924_29948[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (12))){
var inst_29901 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
var statearr_29925_29949 = state_29912__$1;
(statearr_29925_29949[(2)] = inst_29901);

(statearr_29925_29949[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (2))){
var inst_29863 = (state_29912[(2)]);
var inst_29864 = inst_29863;
var state_29912__$1 = (function (){var statearr_29926 = state_29912;
(statearr_29926[(14)] = inst_29864);

return statearr_29926;
})();
var statearr_29927_29950 = state_29912__$1;
(statearr_29927_29950[(2)] = null);

(statearr_29927_29950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (11))){
var state_29912__$1 = state_29912;
var statearr_29928_29951 = state_29912__$1;
(statearr_29928_29951[(2)] = null);

(statearr_29928_29951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (9))){
var inst_29903 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
var statearr_29929_29952 = state_29912__$1;
(statearr_29929_29952[(2)] = inst_29903);

(statearr_29929_29952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (5))){
var inst_29874 = (state_29912[(7)]);
var inst_29873 = (state_29912[(9)]);
var inst_29876 = (inst_29874 < inst_29873);
var inst_29877 = inst_29876;
var state_29912__$1 = state_29912;
if(cljs.core.truth_(inst_29877)){
var statearr_29930_29953 = state_29912__$1;
(statearr_29930_29953[(1)] = (7));

} else {
var statearr_29931_29954 = state_29912__$1;
(statearr_29931_29954[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (14))){
var inst_29884 = (state_29912[(12)]);
var inst_29893 = cljs.core.first.call(null,inst_29884);
var inst_29894 = inst_29893.call(null);
var inst_29895 = cljs.core.next.call(null,inst_29884);
var inst_29871 = inst_29895;
var inst_29872 = null;
var inst_29873 = (0);
var inst_29874 = (0);
var state_29912__$1 = (function (){var statearr_29932 = state_29912;
(statearr_29932[(7)] = inst_29874);

(statearr_29932[(8)] = inst_29871);

(statearr_29932[(9)] = inst_29873);

(statearr_29932[(15)] = inst_29894);

(statearr_29932[(10)] = inst_29872);

return statearr_29932;
})();
var statearr_29933_29955 = state_29912__$1;
(statearr_29933_29955[(2)] = null);

(statearr_29933_29955[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (16))){
var inst_29907 = (state_29912[(2)]);
var inst_29864 = inst_29907;
var state_29912__$1 = (function (){var statearr_29934 = state_29912;
(statearr_29934[(14)] = inst_29864);

return statearr_29934;
})();
var statearr_29935_29956 = state_29912__$1;
(statearr_29935_29956[(2)] = null);

(statearr_29935_29956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (10))){
var inst_29884 = (state_29912[(12)]);
var inst_29886 = cljs.core.chunked_seq_QMARK_.call(null,inst_29884);
var state_29912__$1 = state_29912;
if(inst_29886){
var statearr_29936_29957 = state_29912__$1;
(statearr_29936_29957[(1)] = (13));

} else {
var statearr_29937_29958 = state_29912__$1;
(statearr_29937_29958[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29913 === (8))){
var inst_29884 = (state_29912[(12)]);
var inst_29871 = (state_29912[(8)]);
var inst_29884__$1 = cljs.core.seq.call(null,inst_29871);
var state_29912__$1 = (function (){var statearr_29938 = state_29912;
(statearr_29938[(12)] = inst_29884__$1);

return statearr_29938;
})();
if(inst_29884__$1){
var statearr_29939_29959 = state_29912__$1;
(statearr_29939_29959[(1)] = (10));

} else {
var statearr_29940_29960 = state_29912__$1;
(statearr_29940_29960[(1)] = (11));

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
var statearr_29941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29941[(0)] = klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto__);

(statearr_29941[(1)] = (1));

return statearr_29941;
});
var klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto____1 = (function (state_29912){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29942){if((e29942 instanceof Object)){
var ex__15526__auto__ = e29942;
var statearr_29943_29961 = state_29912;
(statearr_29943_29961[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29962 = state_29912;
state_29912 = G__29962;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto__ = function(state_29912){
switch(arguments.length){
case 0:
return klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto____1.call(this,state_29912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto____0;
klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto____1;
return klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29944 = f__15620__auto__.call(null);
(statearr_29944[(6)] = c__15619__auto__);

return statearr_29944;
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30013){
var state_val_30014 = (state_30013[(1)]);
if((state_val_30014 === (7))){
var inst_30007 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
var statearr_30015_30042 = state_30013__$1;
(statearr_30015_30042[(2)] = inst_30007);

(statearr_30015_30042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (1))){
var inst_29963 = klipse.plugin.edit_elements.call(null,elements,general_settings,modes);
var state_30013__$1 = state_30013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30013__$1,(2),inst_29963);
} else {
if((state_val_30014 === (4))){
var inst_29965 = (state_30013[(7)]);
var inst_30009 = (state_30013[(2)]);
var inst_30010 = klipse.plugin.mark_first_eval_BANG_.call(null);
var inst_30011 = klipse.plugin.eval_snippets_on_change.call(null,general_settings,inst_29965);
var state_30013__$1 = (function (){var statearr_30016 = state_30013;
(statearr_30016[(8)] = inst_30010);

(statearr_30016[(9)] = inst_30009);

return statearr_30016;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30013__$1,inst_30011);
} else {
if((state_val_30014 === (15))){
var inst_29986 = (state_30013[(10)]);
var inst_29998 = (state_30013[(2)]);
var inst_29999 = cljs.core.next.call(null,inst_29986);
var inst_29971 = inst_29999;
var inst_29972 = null;
var inst_29973 = (0);
var inst_29974 = (0);
var state_30013__$1 = (function (){var statearr_30017 = state_30013;
(statearr_30017[(11)] = inst_29971);

(statearr_30017[(12)] = inst_29998);

(statearr_30017[(13)] = inst_29972);

(statearr_30017[(14)] = inst_29974);

(statearr_30017[(15)] = inst_29973);

return statearr_30017;
})();
var statearr_30018_30043 = state_30013__$1;
(statearr_30018_30043[(2)] = null);

(statearr_30018_30043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (13))){
var inst_29986 = (state_30013[(10)]);
var inst_29995 = cljs.core.first.call(null,inst_29986);
var inst_29996 = inst_29995.call(null);
var state_30013__$1 = state_30013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30013__$1,(15),inst_29996);
} else {
if((state_val_30014 === (6))){
var inst_29986 = (state_30013[(10)]);
var inst_29971 = (state_30013[(11)]);
var inst_29986__$1 = cljs.core.seq.call(null,inst_29971);
var state_30013__$1 = (function (){var statearr_30019 = state_30013;
(statearr_30019[(10)] = inst_29986__$1);

return statearr_30019;
})();
if(inst_29986__$1){
var statearr_30020_30044 = state_30013__$1;
(statearr_30020_30044[(1)] = (9));

} else {
var statearr_30021_30045 = state_30013__$1;
(statearr_30021_30045[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (3))){
var inst_29974 = (state_30013[(14)]);
var inst_29973 = (state_30013[(15)]);
var inst_29976 = (inst_29974 < inst_29973);
var inst_29977 = inst_29976;
var state_30013__$1 = state_30013;
if(cljs.core.truth_(inst_29977)){
var statearr_30022_30046 = state_30013__$1;
(statearr_30022_30046[(1)] = (5));

} else {
var statearr_30023_30047 = state_30013__$1;
(statearr_30023_30047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (12))){
var inst_29986 = (state_30013[(10)]);
var inst_29990 = cljs.core.chunk_first.call(null,inst_29986);
var inst_29991 = cljs.core.chunk_rest.call(null,inst_29986);
var inst_29992 = cljs.core.count.call(null,inst_29990);
var inst_29971 = inst_29991;
var inst_29972 = inst_29990;
var inst_29973 = inst_29992;
var inst_29974 = (0);
var state_30013__$1 = (function (){var statearr_30024 = state_30013;
(statearr_30024[(11)] = inst_29971);

(statearr_30024[(13)] = inst_29972);

(statearr_30024[(14)] = inst_29974);

(statearr_30024[(15)] = inst_29973);

return statearr_30024;
})();
var statearr_30025_30048 = state_30013__$1;
(statearr_30025_30048[(2)] = null);

(statearr_30025_30048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (2))){
var inst_29965 = (state_30013[(7)]);
var inst_29965__$1 = (state_30013[(2)]);
var inst_29970 = cljs.core.seq.call(null,inst_29965__$1);
var inst_29971 = inst_29970;
var inst_29972 = null;
var inst_29973 = (0);
var inst_29974 = (0);
var state_30013__$1 = (function (){var statearr_30026 = state_30013;
(statearr_30026[(11)] = inst_29971);

(statearr_30026[(7)] = inst_29965__$1);

(statearr_30026[(13)] = inst_29972);

(statearr_30026[(14)] = inst_29974);

(statearr_30026[(15)] = inst_29973);

return statearr_30026;
})();
var statearr_30027_30049 = state_30013__$1;
(statearr_30027_30049[(2)] = null);

(statearr_30027_30049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (11))){
var inst_30005 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
var statearr_30028_30050 = state_30013__$1;
(statearr_30028_30050[(2)] = inst_30005);

(statearr_30028_30050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (9))){
var inst_29986 = (state_30013[(10)]);
var inst_29988 = cljs.core.chunked_seq_QMARK_.call(null,inst_29986);
var state_30013__$1 = state_30013;
if(inst_29988){
var statearr_30029_30051 = state_30013__$1;
(statearr_30029_30051[(1)] = (12));

} else {
var statearr_30030_30052 = state_30013__$1;
(statearr_30030_30052[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (5))){
var inst_29972 = (state_30013[(13)]);
var inst_29974 = (state_30013[(14)]);
var inst_29979 = cljs.core._nth.call(null,inst_29972,inst_29974);
var inst_29980 = inst_29979.call(null);
var state_30013__$1 = state_30013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30013__$1,(8),inst_29980);
} else {
if((state_val_30014 === (14))){
var inst_30002 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
var statearr_30034_30053 = state_30013__$1;
(statearr_30034_30053[(2)] = inst_30002);

(statearr_30034_30053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (10))){
var state_30013__$1 = state_30013;
var statearr_30035_30054 = state_30013__$1;
(statearr_30035_30054[(2)] = null);

(statearr_30035_30054[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (8))){
var inst_29971 = (state_30013[(11)]);
var inst_29972 = (state_30013[(13)]);
var inst_29974 = (state_30013[(14)]);
var inst_29973 = (state_30013[(15)]);
var inst_29982 = (state_30013[(2)]);
var inst_29983 = (inst_29974 + (1));
var tmp30031 = inst_29971;
var tmp30032 = inst_29972;
var tmp30033 = inst_29973;
var inst_29971__$1 = tmp30031;
var inst_29972__$1 = tmp30032;
var inst_29973__$1 = tmp30033;
var inst_29974__$1 = inst_29983;
var state_30013__$1 = (function (){var statearr_30036 = state_30013;
(statearr_30036[(16)] = inst_29982);

(statearr_30036[(11)] = inst_29971__$1);

(statearr_30036[(13)] = inst_29972__$1);

(statearr_30036[(14)] = inst_29974__$1);

(statearr_30036[(15)] = inst_29973__$1);

return statearr_30036;
})();
var statearr_30037_30055 = state_30013__$1;
(statearr_30037_30055[(2)] = null);

(statearr_30037_30055[(1)] = (3));


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
var statearr_30038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30038[(0)] = klipse$plugin$klipsify_elements_$_state_machine__15523__auto__);

(statearr_30038[(1)] = (1));

return statearr_30038;
});
var klipse$plugin$klipsify_elements_$_state_machine__15523__auto____1 = (function (state_30013){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30039){if((e30039 instanceof Object)){
var ex__15526__auto__ = e30039;
var statearr_30040_30056 = state_30013;
(statearr_30040_30056[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30057 = state_30013;
state_30013 = G__30057;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_elements_$_state_machine__15523__auto__ = function(state_30013){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_elements_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_elements_$_state_machine__15523__auto____1.call(this,state_30013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_elements_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_elements_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_elements_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_elements_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_elements_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30041 = f__15620__auto__.call(null);
(statearr_30041[(6)] = c__15619__auto__);

return statearr_30041;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5520__auto__ = (function klipse$plugin$elements__GT_mode_$_iter__30058(s__30059){
return (new cljs.core.LazySeq(null,(function (){
var s__30059__$1 = s__30059;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__30059__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var selector_name = cljs.core.first.call(null,xs__6360__auto__);
var selector = settings.call(null,selector_name);
if(cljs.core.truth_(selector)){
var iterys__5516__auto__ = ((function (s__30059__$1,selector,selector_name,xs__6360__auto__,temp__5804__auto__){
return (function klipse$plugin$elements__GT_mode_$_iter__30058_$_iter__30060(s__30061){
return (new cljs.core.LazySeq(null,((function (s__30059__$1,selector,selector_name,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__30061__$1 = s__30061;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__30061__$1);
if(temp__5804__auto____$1){
var s__30061__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30061__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__30061__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__30063 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__30062 = (0);
while(true){
if((i__30062 < size__5519__auto__)){
var element = cljs.core._nth.call(null,c__5518__auto__,i__30062);
cljs.core.chunk_append.call(null,b__30063,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null));

var G__30064 = (i__30062 + (1));
i__30062 = G__30064;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30063),klipse$plugin$elements__GT_mode_$_iter__30058_$_iter__30060.call(null,cljs.core.chunk_rest.call(null,s__30061__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30063),null);
}
} else {
var element = cljs.core.first.call(null,s__30061__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null),klipse$plugin$elements__GT_mode_$_iter__30058_$_iter__30060.call(null,cljs.core.rest.call(null,s__30061__$2)));
}
} else {
return null;
}
break;
}
});})(s__30059__$1,selector,selector_name,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__30059__$1,selector,selector_name,xs__6360__auto__,temp__5804__auto__))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,klipse.plugin.seq_from_selector.call(null,selector)));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,klipse$plugin$elements__GT_mode_$_iter__30058.call(null,cljs.core.rest.call(null,s__30059__$1)));
} else {
var G__30065 = cljs.core.rest.call(null,s__30059__$1);
s__30059__$1 = G__30065;
continue;
}
} else {
var G__30066 = cljs.core.rest.call(null,s__30059__$1);
s__30059__$1 = G__30066;
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
var map__30067 = clojure.walk.keywordize_keys.call(null,settings);
var map__30067__$1 = cljs.core.__destructure_map.call(null,map__30067);
var keywordized_settings = map__30067__$1;
var secured_eval = cljs.core.get.call(null,map__30067__$1,new cljs.core.Keyword(null,"secured_eval","secured_eval",-1577487888));
var security_forbidden_symbols = cljs.core.get.call(null,map__30067__$1,new cljs.core.Keyword(null,"security_forbidden_symbols","security_forbidden_symbols",-1480402500),klipse.utils.default_forbidden_symbols.call(null));
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

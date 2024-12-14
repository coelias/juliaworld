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
var map__29552 = klipse.args_from_element.editor_args_from_element.call(null,element);
var map__29552__$1 = cljs.core.__destructure_map.call(null,map__29552);
var idle_msec = cljs.core.get.call(null,map__29552__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),global_idle_msec);
var editor_type = cljs.core.get.call(null,map__29552__$1,new cljs.core.Keyword(null,"editor-type","editor-type",198227301),global_editor_type);
var preamble = cljs.core.get.call(null,map__29552__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var async_code_QMARK_ = cljs.core.get.call(null,map__29552__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var loop_msec = cljs.core.get.call(null,map__29552__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),null);
return gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),(function (){var x__5128__auto__ = min_idle_msec;
var y__5129__auto__ = idle_msec;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})(),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),async_code_QMARK_,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480),editor_type], null));
});
klipse.plugin.calc_editor_type = (function klipse$plugin$calc_editor_type(minimalistic_ui_QMARK_,the_type){
if(cljs.core.truth_(minimalistic_ui_QMARK_)){
return new cljs.core.Keyword(null,"dom","dom",-1236537922);
} else {
var G__29553 = the_type;
switch (G__29553) {
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29584){
var state_val_29585 = (state_29584[(1)]);
if((state_val_29585 === (1))){
var state_29584__$1 = state_29584;
if(cljs.core.truth_(no_dynamic_scripts_QMARK_)){
var statearr_29586_29599 = state_29584__$1;
(statearr_29586_29599[(1)] = (2));

} else {
var statearr_29587_29600 = state_29584__$1;
(statearr_29587_29600[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (2))){
var inst_29556 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29557 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_29558 = (new cljs.core.PersistentVector(null,2,(5),inst_29556,inst_29557,null));
var state_29584__$1 = state_29584;
var statearr_29588_29601 = state_29584__$1;
(statearr_29588_29601[(2)] = inst_29558);

(statearr_29588_29601[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (3))){
var inst_29563 = klipse.utils.load_scripts_mem.call(null,scripts);
var state_29584__$1 = state_29584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29584__$1,(5),inst_29563);
} else {
if((state_val_29585 === (4))){
var inst_29582 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29584__$1,inst_29582);
} else {
if((state_val_29585 === (5))){
var inst_29565 = (state_29584[(2)]);
var inst_29566 = cljs.core.nth.call(null,inst_29565,(0),null);
var inst_29567 = cljs.core.nth.call(null,inst_29565,(1),null);
var inst_29568 = cljs.core.nth.call(null,inst_29565,(2),null);
var inst_29569 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_29566);
var state_29584__$1 = (function (){var statearr_29589 = state_29584;
(statearr_29589[(7)] = inst_29568);

(statearr_29589[(8)] = inst_29567);

return statearr_29589;
})();
if(inst_29569){
var statearr_29590_29602 = state_29584__$1;
(statearr_29590_29602[(1)] = (6));

} else {
var statearr_29591_29603 = state_29584__$1;
(statearr_29591_29603[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (6))){
var inst_29571 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29572 = [new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_29573 = (new cljs.core.PersistentVector(null,2,(5),inst_29571,inst_29572,null));
var state_29584__$1 = state_29584;
var statearr_29592_29604 = state_29584__$1;
(statearr_29592_29604[(2)] = inst_29573);

(statearr_29592_29604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (7))){
var inst_29568 = (state_29584[(7)]);
var inst_29567 = (state_29584[(8)]);
var inst_29575 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29576 = ["Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29568),"\n","Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29567)].join('');
var inst_29577 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29576];
var inst_29578 = (new cljs.core.PersistentVector(null,2,(5),inst_29575,inst_29577,null));
var state_29584__$1 = state_29584;
var statearr_29593_29605 = state_29584__$1;
(statearr_29593_29605[(2)] = inst_29578);

(statearr_29593_29605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29585 === (8))){
var inst_29580 = (state_29584[(2)]);
var state_29584__$1 = state_29584;
var statearr_29594_29606 = state_29584__$1;
(statearr_29594_29606[(2)] = inst_29580);

(statearr_29594_29606[(1)] = (4));


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
var statearr_29595 = [null,null,null,null,null,null,null,null,null];
(statearr_29595[(0)] = klipse$plugin$load_external_scripts_$_state_machine__15523__auto__);

(statearr_29595[(1)] = (1));

return statearr_29595;
});
var klipse$plugin$load_external_scripts_$_state_machine__15523__auto____1 = (function (state_29584){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29596){if((e29596 instanceof Object)){
var ex__15526__auto__ = e29596;
var statearr_29597_29607 = state_29584;
(statearr_29597_29607[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29608 = state_29584;
state_29584 = G__29608;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$load_external_scripts_$_state_machine__15523__auto__ = function(state_29584){
switch(arguments.length){
case 0:
return klipse$plugin$load_external_scripts_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$load_external_scripts_$_state_machine__15523__auto____1.call(this,state_29584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$load_external_scripts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$load_external_scripts_$_state_machine__15523__auto____0;
klipse$plugin$load_external_scripts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$load_external_scripts_$_state_machine__15523__auto____1;
return klipse$plugin$load_external_scripts_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29598 = f__15620__auto__.call(null);
(statearr_29598[(6)] = c__15619__auto__);

return statearr_29598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
/**
 * returns a channel c with a function f.
 *   f returns a channel that will be ready to read when the snippet is evaluated.
 */
klipse.plugin.klipsify_with_opts = (function klipse$plugin$klipsify_with_opts(element,p__29612,p__29613,mode){
var map__29614 = p__29612;
var map__29614__$1 = cljs.core.__destructure_map.call(null,map__29614);
var no_dynamic_scripts = cljs.core.get.call(null,map__29614__$1,new cljs.core.Keyword(null,"no_dynamic_scripts","no_dynamic_scripts",-730706373));
var codemirror_options_in = cljs.core.get.call(null,map__29614__$1,new cljs.core.Keyword(null,"codemirror_options_in","codemirror_options_in",-1220877316),cljs.core.PersistentArrayMap.EMPTY);
var eval_idle_msec = cljs.core.get.call(null,map__29614__$1,new cljs.core.Keyword(null,"eval_idle_msec","eval_idle_msec",1104296094),(20));
var codemirror_options_out = cljs.core.get.call(null,map__29614__$1,new cljs.core.Keyword(null,"codemirror_options_out","codemirror_options_out",440175842),cljs.core.PersistentArrayMap.EMPTY);
var print_length = cljs.core.get.call(null,map__29614__$1,new cljs.core.Keyword(null,"print_length","print_length",2140955911),(1000));
var editor_type = cljs.core.get.call(null,map__29614__$1,new cljs.core.Keyword(null,"editor_type","editor_type",195783179));
var minimalistic_ui = cljs.core.get.call(null,map__29614__$1,new cljs.core.Keyword(null,"minimalistic_ui","minimalistic_ui",-944637362),false);
var beautify_strings = cljs.core.get.call(null,map__29614__$1,new cljs.core.Keyword(null,"beautify_strings","beautify_strings",1690445266),false);
var eval_context = cljs.core.get.call(null,map__29614__$1,new cljs.core.Keyword(null,"eval_context","eval_context",1307295352));
var map__29615 = p__29613;
var map__29615__$1 = cljs.core.__destructure_map.call(null,map__29615);
var lang_opts = map__29615__$1;
var eval_fn = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
var beautify_output_QMARK_ = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),true);
var no_result = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"no-result","no-result",1702657437));
var default_editor = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"default-editor","default-editor",758164479));
var editor_out_mode = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
var beautify_QMARK_ = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),true);
var min_eval_idle_msec = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(0));
var comment_str = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
var editor_in_mode = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
var external_scripts = cljs.core.get.call(null,map__29615__$1,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),cljs.core.PersistentVector.EMPTY);
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29678){
var state_val_29679 = (state_29678[(1)]);
if((state_val_29679 === (7))){
var state_29678__$1 = state_29678;
var statearr_29680_29724 = state_29678__$1;
(statearr_29680_29724[(2)] = default_editor);

(statearr_29680_29724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (20))){
var state_29678__$1 = state_29678;
var statearr_29681_29725 = state_29678__$1;
(statearr_29681_29725[(2)] = false);

(statearr_29681_29725[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (1))){
var state_29678__$1 = state_29678;
if(cljs.core.truth_(element)){
var statearr_29682_29726 = state_29678__$1;
(statearr_29682_29726[(1)] = (2));

} else {
var statearr_29683_29727 = state_29678__$1;
(statearr_29683_29727[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (4))){
var inst_29676 = (state_29678[(2)]);
var state_29678__$1 = state_29678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29678__$1,inst_29676);
} else {
if((state_val_29679 === (15))){
var inst_29635 = (state_29678[(7)]);
var inst_29630 = (state_29678[(8)]);
var inst_29646 = (state_29678[(9)]);
var inst_29644 = (state_29678[(10)]);
var inst_29633 = (state_29678[(11)]);
var inst_29624 = (state_29678[(12)]);
var inst_29631 = (state_29678[(13)]);
var inst_29628 = (state_29678[(14)]);
var inst_29645 = (state_29678[(15)]);
var inst_29625 = (state_29678[(16)]);
var inst_29640 = (state_29678[(17)]);
var inst_29634 = (state_29678[(18)]);
var inst_29657 = (state_29678[(2)]);
var inst_29658 = (function (){var the_editor_type = inst_29640;
var eval_fn_with_args = inst_29625;
var idle_msec = inst_29631;
var loop_msec = inst_29633;
var load_error = inst_29646;
var vec__29618 = inst_29644;
var map__29617 = inst_29630;
var async_code_QMARK_ = inst_29634;
var load_status = inst_29645;
var eval_args = inst_29624;
var source_code = inst_29628;
var preamble = inst_29635;
return (function (p1__29611_SHARP_){
var c__15619__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29687){
var state_val_29688 = (state_29687[(1)]);
if((state_val_29688 === (1))){
var state_29687__$1 = state_29687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29687__$1,(2),klipse.plugin.event_chan,p1__29611_SHARP_);
} else {
if((state_val_29688 === (2))){
var inst_29685 = (state_29687[(2)]);
var state_29687__$1 = state_29687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29687__$1,inst_29685);
} else {
return null;
}
}
});
return (function() {
var klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__ = null;
var klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____0 = (function (){
var statearr_29689 = [null,null,null,null,null,null,null];
(statearr_29689[(0)] = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__);

(statearr_29689[(1)] = (1));

return statearr_29689;
});
var klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1 = (function (state_29687){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29690){if((e29690 instanceof Object)){
var ex__15526__auto__ = e29690;
var statearr_29691_29728 = state_29687;
(statearr_29691_29728[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29729 = state_29687;
state_29687 = G__29729;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__ = function(state_29687){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1.call(this,state_29687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29692 = f__15620__auto__.call(null);
(statearr_29692[(6)] = c__15619__auto____$1);

return statearr_29692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto____$1;
});
})();
var inst_29659 = klipse.plugin.snippet_num_BANG_.call(null);
var inst_29660 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_29645);
var state_29678__$1 = (function (){var statearr_29693 = state_29678;
(statearr_29693[(19)] = inst_29657);

(statearr_29693[(20)] = inst_29658);

(statearr_29693[(21)] = inst_29659);

return statearr_29693;
})();
if(inst_29660){
var statearr_29694_29730 = state_29678__$1;
(statearr_29694_29730[(1)] = (16));

} else {
var statearr_29695_29731 = state_29678__$1;
(statearr_29695_29731[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (21))){
var inst_29635 = (state_29678[(7)]);
var inst_29657 = (state_29678[(19)]);
var inst_29652 = (state_29678[(22)]);
var inst_29658 = (state_29678[(20)]);
var inst_29633 = (state_29678[(11)]);
var inst_29631 = (state_29678[(13)]);
var inst_29665 = (state_29678[(23)]);
var inst_29628 = (state_29678[(14)]);
var inst_29659 = (state_29678[(21)]);
var inst_29647 = (state_29678[(24)]);
var inst_29640 = (state_29678[(17)]);
var inst_29634 = (state_29678[(18)]);
var inst_29670 = (state_29678[(2)]);
var inst_29671 = [inst_29652,inst_29657,inst_29631,inst_29633,element,editor_out_mode,inst_29658,inst_29634,mode,inst_29628,inst_29635,codemirror_options_out,editor_in_mode,inst_29659,inst_29665,no_result,codemirror_options_in,inst_29670];
var inst_29672 = cljs.core.PersistentHashMap.fromArrays(inst_29647,inst_29671);
var inst_29673 = klipse.klipse_editors.create_editor.call(null,inst_29640,inst_29672);
var state_29678__$1 = state_29678;
var statearr_29696_29732 = state_29678__$1;
(statearr_29696_29732[(2)] = inst_29673);

(statearr_29696_29732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (13))){
var state_29678__$1 = state_29678;
var statearr_29697_29733 = state_29678__$1;
(statearr_29697_29733[(2)] = beautify_QMARK_);

(statearr_29697_29733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (6))){
var inst_29632 = (state_29678[(25)]);
var state_29678__$1 = state_29678;
var statearr_29698_29734 = state_29678__$1;
(statearr_29698_29734[(2)] = inst_29632);

(statearr_29698_29734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (17))){
var inst_29635 = (state_29678[(7)]);
var inst_29630 = (state_29678[(8)]);
var inst_29646 = (state_29678[(9)]);
var inst_29644 = (state_29678[(10)]);
var inst_29633 = (state_29678[(11)]);
var inst_29624 = (state_29678[(12)]);
var inst_29631 = (state_29678[(13)]);
var inst_29628 = (state_29678[(14)]);
var inst_29645 = (state_29678[(15)]);
var inst_29625 = (state_29678[(16)]);
var inst_29640 = (state_29678[(17)]);
var inst_29634 = (state_29678[(18)]);
var inst_29663 = (function (){var the_editor_type = inst_29640;
var eval_fn_with_args = inst_29625;
var idle_msec = inst_29631;
var loop_msec = inst_29633;
var load_error = inst_29646;
var vec__29618 = inst_29644;
var map__29617 = inst_29630;
var async_code_QMARK_ = inst_29634;
var load_status = inst_29645;
var eval_args = inst_29624;
var source_code = inst_29628;
var preamble = inst_29635;
return (function (){
return cljs.core.async.chan.call(null);
});
})();
var state_29678__$1 = state_29678;
var statearr_29699_29735 = state_29678__$1;
(statearr_29699_29735[(2)] = inst_29663);

(statearr_29699_29735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (3))){
var state_29678__$1 = state_29678;
var statearr_29700_29736 = state_29678__$1;
(statearr_29700_29736[(2)] = null);

(statearr_29700_29736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (12))){
var inst_29645 = (state_29678[(15)]);
var inst_29652 = (state_29678[(2)]);
var inst_29653 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_29645);
var state_29678__$1 = (function (){var statearr_29701 = state_29678;
(statearr_29701[(22)] = inst_29652);

return statearr_29701;
})();
if(inst_29653){
var statearr_29702_29737 = state_29678__$1;
(statearr_29702_29737[(1)] = (13));

} else {
var statearr_29703_29738 = state_29678__$1;
(statearr_29703_29738[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (2))){
var inst_29624 = (state_29678[(12)]);
var inst_29621 = [new cljs.core.Keyword(null,"eval-context","eval-context",536255614),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479)];
var inst_29622 = [eval_context,print_length,beautify_strings];
var inst_29623 = cljs.core.PersistentHashMap.fromArrays(inst_29621,inst_29622);
var inst_29624__$1 = klipse.args_from_element.eval_args_from_element.call(null,element,inst_29623);
var inst_29625 = (function (){var eval_args = inst_29624__$1;
return (function (p1__29609_SHARP_,p2__29610_SHARP_){
return eval_fn.call(null,p1__29609_SHARP_,cljs.core.merge.call(null,eval_args,p2__29610_SHARP_));
});
})();
var inst_29626 = klipse.args_from_element.content.call(null,element,comment_str);
var state_29678__$1 = (function (){var statearr_29704 = state_29678;
(statearr_29704[(12)] = inst_29624__$1);

(statearr_29704[(16)] = inst_29625);

return statearr_29704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29678__$1,(5),inst_29626);
} else {
if((state_val_29679 === (19))){
var state_29678__$1 = state_29678;
var statearr_29705_29739 = state_29678__$1;
(statearr_29705_29739[(2)] = beautify_output_QMARK_);

(statearr_29705_29739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (11))){
var inst_29646 = (state_29678[(9)]);
var state_29678__$1 = state_29678;
var statearr_29706_29740 = state_29678__$1;
(statearr_29706_29740[(2)] = inst_29646);

(statearr_29706_29740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (9))){
var inst_29644 = (state_29678[(10)]);
var inst_29645 = (state_29678[(15)]);
var inst_29644__$1 = (state_29678[(2)]);
var inst_29645__$1 = cljs.core.nth.call(null,inst_29644__$1,(0),null);
var inst_29646 = cljs.core.nth.call(null,inst_29644__$1,(1),null);
var inst_29647 = [new cljs.core.Keyword(null,"default-txt","default-txt",27736322),new cljs.core.Keyword(null,"indent?","indent?",1381429379),new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"on-edit-cb","on-edit-cb",1727649734),new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"source-code","source-code",-685884337),new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Keyword(null,"codemirror-options-out","codemirror-options-out",1969968980),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"snippet-num","snippet-num",-267174090),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"no-result","no-result",1702657437),new cljs.core.Keyword(null,"codemirror-options-in","codemirror-options-in",-1261564801),new cljs.core.Keyword(null,"indent-output?","indent-output?",-1299145441)];
var inst_29648 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_29645__$1);
var state_29678__$1 = (function (){var statearr_29707 = state_29678;
(statearr_29707[(9)] = inst_29646);

(statearr_29707[(10)] = inst_29644__$1);

(statearr_29707[(15)] = inst_29645__$1);

(statearr_29707[(24)] = inst_29647);

return statearr_29707;
})();
if(inst_29648){
var statearr_29708_29741 = state_29678__$1;
(statearr_29708_29741[(1)] = (10));

} else {
var statearr_29709_29742 = state_29678__$1;
(statearr_29709_29742[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (5))){
var inst_29632 = (state_29678[(25)]);
var inst_29630 = (state_29678[(8)]);
var inst_29628 = (state_29678[(2)]);
var inst_29629 = klipse.plugin.calc_editor_args_from_element.call(null,element,eval_idle_msec,min_eval_idle_msec,editor_type);
var inst_29630__$1 = cljs.core.__destructure_map.call(null,inst_29629);
var inst_29631 = cljs.core.get.call(null,inst_29630__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var inst_29632__$1 = cljs.core.get.call(null,inst_29630__$1,new cljs.core.Keyword(null,"the-editor-type","the-editor-type",-672700480));
var inst_29633 = cljs.core.get.call(null,inst_29630__$1,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156));
var inst_29634 = cljs.core.get.call(null,inst_29630__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541));
var inst_29635 = cljs.core.get.call(null,inst_29630__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var state_29678__$1 = (function (){var statearr_29710 = state_29678;
(statearr_29710[(25)] = inst_29632__$1);

(statearr_29710[(7)] = inst_29635);

(statearr_29710[(8)] = inst_29630__$1);

(statearr_29710[(11)] = inst_29633);

(statearr_29710[(13)] = inst_29631);

(statearr_29710[(14)] = inst_29628);

(statearr_29710[(18)] = inst_29634);

return statearr_29710;
})();
if(cljs.core.truth_(inst_29632__$1)){
var statearr_29711_29743 = state_29678__$1;
(statearr_29711_29743[(1)] = (6));

} else {
var statearr_29712_29744 = state_29678__$1;
(statearr_29712_29744[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (14))){
var state_29678__$1 = state_29678;
var statearr_29713_29745 = state_29678__$1;
(statearr_29713_29745[(2)] = false);

(statearr_29713_29745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (16))){
var inst_29625 = (state_29678[(16)]);
var state_29678__$1 = state_29678;
var statearr_29714_29746 = state_29678__$1;
(statearr_29714_29746[(2)] = inst_29625);

(statearr_29714_29746[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (10))){
var state_29678__$1 = state_29678;
var statearr_29715_29747 = state_29678__$1;
(statearr_29715_29747[(2)] = klipse.plugin.out_placeholder);

(statearr_29715_29747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (18))){
var inst_29645 = (state_29678[(15)]);
var inst_29665 = (state_29678[(2)]);
var inst_29666 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_29645);
var state_29678__$1 = (function (){var statearr_29716 = state_29678;
(statearr_29716[(23)] = inst_29665);

return statearr_29716;
})();
if(inst_29666){
var statearr_29717_29748 = state_29678__$1;
(statearr_29717_29748[(1)] = (19));

} else {
var statearr_29718_29749 = state_29678__$1;
(statearr_29718_29749[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29679 === (8))){
var inst_29639 = (state_29678[(2)]);
var inst_29640 = klipse.plugin.calc_editor_type.call(null,minimalistic_ui,inst_29639);
var inst_29641 = gadjett.collections.collify.call(null,external_scripts);
var inst_29642 = klipse.plugin.load_external_scripts.call(null,inst_29641,no_dynamic_scripts);
var state_29678__$1 = (function (){var statearr_29719 = state_29678;
(statearr_29719[(17)] = inst_29640);

return statearr_29719;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29678__$1,(9),inst_29642);
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
var statearr_29720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29720[(0)] = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__);

(statearr_29720[(1)] = (1));

return statearr_29720;
});
var klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1 = (function (state_29678){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29721){if((e29721 instanceof Object)){
var ex__15526__auto__ = e29721;
var statearr_29722_29750 = state_29678;
(statearr_29722_29750[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29751 = state_29678;
state_29678 = G__29751;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__ = function(state_29678){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1.call(this,state_29678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_with_opts_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29723 = f__15620__auto__.call(null);
(statearr_29723[(6)] = c__15619__auto__);

return statearr_29723;
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
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),true),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),false))),(function (p1__29752_SHARP_){
return ((cljs.core._EQ_.call(null,p1__29752_SHARP_,true)) || (cljs.core._EQ_.call(null,p1__29752_SHARP_,false)));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","options","klipse.plugin/options",1158769650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29753){
return cljs.core.map_QMARK_.call(null,G__29753);
}),(function (G__29753){
return cljs.core.contains_QMARK_.call(null,G__29753,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522));
}),(function (G__29753){
return cljs.core.contains_QMARK_.call(null,G__29753,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542));
}),(function (G__29753){
return cljs.core.contains_QMARK_.call(null,G__29753,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
}),(function (G__29753){
return cljs.core.contains_QMARK_.call(null,G__29753,new cljs.core.Keyword(null,"comment-str","comment-str",130143853));
})], null),(function (G__29753){
return ((cljs.core.map_QMARK_.call(null,G__29753)) && (((cljs.core.contains_QMARK_.call(null,G__29753,new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))) && (((cljs.core.contains_QMARK_.call(null,G__29753,new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))) && (((cljs.core.contains_QMARK_.call(null,G__29753,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))) && (cljs.core.contains_QMARK_.call(null,G__29753,new cljs.core.Keyword(null,"comment-str","comment-str",130143853))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","editor-in-mode","klipse.plugin/editor-in-mode",-880426851),new cljs.core.Keyword("klipse.plugin","editor-out-mode","klipse.plugin/editor-out-mode",724274461),new cljs.core.Keyword("klipse.plugin","eval-fn","klipse.plugin/eval-fn",-51358589),new cljs.core.Keyword("klipse.plugin","comment-str","klipse.plugin/comment-str",1428350840)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("klipse.plugin","klipse-settings","klipse.plugin/klipse-settings",1435250729),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("klipse.plugin","eval_idle_msec","klipse.plugin/eval_idle_msec",15935397),new cljs.core.Keyword("klipse.plugin","minimalistic_ui","klipse.plugin/minimalistic_ui",231935317)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29754){
return cljs.core.map_QMARK_.call(null,G__29754);
})], null),(function (G__29754){
return cljs.core.map_QMARK_.call(null,G__29754);
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29762){
var state_val_29763 = (state_29762[(1)]);
if((state_val_29763 === (1))){
var inst_29755 = klipse.plugin.klipsify_with_opts.call(null,element,general_settings,opts,mode);
var state_29762__$1 = state_29762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29762__$1,(3),inst_29755);
} else {
if((state_val_29763 === (2))){
var inst_29760 = (state_29762[(2)]);
var state_29762__$1 = state_29762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29762__$1,inst_29760);
} else {
if((state_val_29763 === (3))){
var inst_29757 = (state_29762[(2)]);
var inst_29758 = inst_29757.call(null);
var state_29762__$1 = state_29762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29762__$1,(2),inst_29758);
} else {
return null;
}
}
}
});
return (function() {
var klipse$plugin$klipsify_$_state_machine__15523__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__15523__auto____0 = (function (){
var statearr_29764 = [null,null,null,null,null,null,null];
(statearr_29764[(0)] = klipse$plugin$klipsify_$_state_machine__15523__auto__);

(statearr_29764[(1)] = (1));

return statearr_29764;
});
var klipse$plugin$klipsify_$_state_machine__15523__auto____1 = (function (state_29762){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29765){if((e29765 instanceof Object)){
var ex__15526__auto__ = e29765;
var statearr_29766_29778 = state_29762;
(statearr_29766_29778[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29779 = state_29762;
state_29762 = G__29779;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__15523__auto__ = function(state_29762){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__15523__auto____1.call(this,state_29762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29767 = f__15620__auto__.call(null);
(statearr_29767[(6)] = c__15619__auto__);

return statearr_29767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
} else {
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29772){
var state_val_29773 = (state_29772[(1)]);
if((state_val_29773 === (1))){
var inst_29768 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_29769 = cljs.core.keys.call(null,inst_29768);
var inst_29770 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_29769);
var state_29772__$1 = state_29772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29772__$1,inst_29770);
} else {
return null;
}
});
return (function() {
var klipse$plugin$klipsify_$_state_machine__15523__auto__ = null;
var klipse$plugin$klipsify_$_state_machine__15523__auto____0 = (function (){
var statearr_29774 = [null,null,null,null,null,null,null];
(statearr_29774[(0)] = klipse$plugin$klipsify_$_state_machine__15523__auto__);

(statearr_29774[(1)] = (1));

return statearr_29774;
});
var klipse$plugin$klipsify_$_state_machine__15523__auto____1 = (function (state_29772){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29775){if((e29775 instanceof Object)){
var ex__15526__auto__ = e29775;
var statearr_29776_29780 = state_29772;
(statearr_29776_29780[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29781 = state_29772;
state_29772 = G__29781;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_$_state_machine__15523__auto__ = function(state_29772){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_$_state_machine__15523__auto____1.call(this,state_29772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29777 = f__15620__auto__.call(null);
(statearr_29777[(6)] = c__15619__auto__);

return statearr_29777;
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29784){
var state_val_29785 = (state_29784[(1)]);
if((state_val_29785 === (1))){
var inst_29782 = (function (){return (function (){
var c__15619__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29790){
var state_val_29791 = (state_29790[(1)]);
if((state_val_29791 === (1))){
var inst_29786 = cljs.core.deref.call(null,klipse.common.registry.mode_options);
var inst_29787 = cljs.core.keys.call(null,inst_29786);
var inst_29788 = console.error("cannot find options for mode: ",mode,". Supported modes: ",inst_29787);
var state_29790__$1 = state_29790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29790__$1,inst_29788);
} else {
return null;
}
});
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_29792 = [null,null,null,null,null,null,null];
(statearr_29792[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__);

(statearr_29792[(1)] = (1));

return statearr_29792;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1 = (function (state_29790){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29793){if((e29793 instanceof Object)){
var ex__15526__auto__ = e29793;
var statearr_29794_29800 = state_29790;
(statearr_29794_29800[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29801 = state_29790;
state_29790 = G__29801;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__ = function(state_29790){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1.call(this,state_29790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29795 = f__15620__auto__.call(null);
(statearr_29795[(6)] = c__15619__auto____$1);

return statearr_29795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto____$1;
});
})();
var state_29784__$1 = state_29784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29784__$1,inst_29782);
} else {
return null;
}
});
return (function() {
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__ = null;
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_29796 = [null,null,null,null,null,null,null];
(statearr_29796[(0)] = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__);

(statearr_29796[(1)] = (1));

return statearr_29796;
});
var klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1 = (function (state_29784){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29797){if((e29797 instanceof Object)){
var ex__15526__auto__ = e29797;
var statearr_29798_29802 = state_29784;
(statearr_29798_29802[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29803 = state_29784;
state_29784 = G__29803;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__ = function(state_29784){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1.call(this,state_29784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_no_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29799 = f__15620__auto__.call(null);
(statearr_29799[(6)] = c__15619__auto__);

return statearr_29799;
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29830){
var state_val_29831 = (state_29830[(1)]);
if((state_val_29831 === (7))){
var inst_29810 = (state_29830[(7)]);
var inst_29811 = (state_29830[(8)]);
var inst_29813 = klipse.plugin.klipsify_no_eval.call(null,inst_29810,general_settings,inst_29811);
var state_29830__$1 = state_29830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29830__$1,(10),inst_29813);
} else {
if((state_val_29831 === (1))){
var inst_29804 = cljs.core.PersistentVector.EMPTY;
var inst_29805 = elements;
var inst_29806 = inst_29804;
var state_29830__$1 = (function (){var statearr_29832 = state_29830;
(statearr_29832[(9)] = inst_29805);

(statearr_29832[(10)] = inst_29806);

return statearr_29832;
})();
var statearr_29833_29851 = state_29830__$1;
(statearr_29833_29851[(2)] = null);

(statearr_29833_29851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29831 === (4))){
var inst_29805 = (state_29830[(9)]);
var inst_29810 = (state_29830[(7)]);
var inst_29811 = (state_29830[(8)]);
var inst_29810__$1 = cljs.core.first.call(null,inst_29805);
var inst_29811__$1 = modes.call(null,inst_29810__$1);
var state_29830__$1 = (function (){var statearr_29834 = state_29830;
(statearr_29834[(7)] = inst_29810__$1);

(statearr_29834[(8)] = inst_29811__$1);

return statearr_29834;
})();
if(cljs.core.truth_(inst_29811__$1)){
var statearr_29835_29852 = state_29830__$1;
(statearr_29835_29852[(1)] = (7));

} else {
var statearr_29836_29853 = state_29830__$1;
(statearr_29836_29853[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29831 === (6))){
var inst_29826 = (state_29830[(2)]);
var state_29830__$1 = state_29830;
var statearr_29837_29854 = state_29830__$1;
(statearr_29837_29854[(2)] = inst_29826);

(statearr_29837_29854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29831 === (3))){
var inst_29828 = (state_29830[(2)]);
var state_29830__$1 = state_29830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29830__$1,inst_29828);
} else {
if((state_val_29831 === (2))){
var inst_29805 = (state_29830[(9)]);
var inst_29808 = cljs.core.seq.call(null,inst_29805);
var state_29830__$1 = state_29830;
if(inst_29808){
var statearr_29838_29855 = state_29830__$1;
(statearr_29838_29855[(1)] = (4));

} else {
var statearr_29839_29856 = state_29830__$1;
(statearr_29839_29856[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29831 === (9))){
var inst_29823 = (state_29830[(2)]);
var state_29830__$1 = state_29830;
var statearr_29840_29857 = state_29830__$1;
(statearr_29840_29857[(2)] = inst_29823);

(statearr_29840_29857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29831 === (5))){
var inst_29806 = (state_29830[(10)]);
var state_29830__$1 = state_29830;
var statearr_29842_29858 = state_29830__$1;
(statearr_29842_29858[(2)] = inst_29806);

(statearr_29842_29858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29831 === (10))){
var inst_29805 = (state_29830[(9)]);
var inst_29806 = (state_29830[(10)]);
var inst_29815 = (state_29830[(2)]);
var inst_29816 = cljs.core.rest.call(null,inst_29805);
var inst_29817 = cljs.core.conj.call(null,inst_29806,inst_29815);
var inst_29805__$1 = inst_29816;
var inst_29806__$1 = inst_29817;
var state_29830__$1 = (function (){var statearr_29843 = state_29830;
(statearr_29843[(9)] = inst_29805__$1);

(statearr_29843[(10)] = inst_29806__$1);

return statearr_29843;
})();
var statearr_29844_29859 = state_29830__$1;
(statearr_29844_29859[(2)] = null);

(statearr_29844_29859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29831 === (8))){
var inst_29805 = (state_29830[(9)]);
var inst_29806 = (state_29830[(10)]);
var inst_29820 = cljs.core.rest.call(null,inst_29805);
var tmp29841 = inst_29806;
var inst_29805__$1 = inst_29820;
var inst_29806__$1 = tmp29841;
var state_29830__$1 = (function (){var statearr_29845 = state_29830;
(statearr_29845[(9)] = inst_29805__$1);

(statearr_29845[(10)] = inst_29806__$1);

return statearr_29845;
})();
var statearr_29846_29860 = state_29830__$1;
(statearr_29846_29860[(2)] = null);

(statearr_29846_29860[(1)] = (2));


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
var statearr_29847 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29847[(0)] = klipse$plugin$edit_elements_$_state_machine__15523__auto__);

(statearr_29847[(1)] = (1));

return statearr_29847;
});
var klipse$plugin$edit_elements_$_state_machine__15523__auto____1 = (function (state_29830){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29848){if((e29848 instanceof Object)){
var ex__15526__auto__ = e29848;
var statearr_29849_29861 = state_29830;
(statearr_29849_29861[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29862 = state_29830;
state_29830 = G__29862;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$edit_elements_$_state_machine__15523__auto__ = function(state_29830){
switch(arguments.length){
case 0:
return klipse$plugin$edit_elements_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$edit_elements_$_state_machine__15523__auto____1.call(this,state_29830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$edit_elements_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$edit_elements_$_state_machine__15523__auto____0;
klipse$plugin$edit_elements_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$edit_elements_$_state_machine__15523__auto____1;
return klipse$plugin$edit_elements_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29850 = f__15620__auto__.call(null);
(statearr_29850[(6)] = c__15619__auto__);

return statearr_29850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.plugin.eval_snippets_on_change = (function klipse$plugin$eval_snippets_on_change(p__29863,eval_fns){
var map__29864 = p__29863;
var map__29864__$1 = cljs.core.__destructure_map.call(null,map__29864);
var re_evaluate_all_snippets_on_change = cljs.core.get.call(null,map__29864__$1,new cljs.core.Keyword(null,"re_evaluate_all_snippets_on_change","re_evaluate_all_snippets_on_change",-98983280));
if(cljs.core.truth_(re_evaluate_all_snippets_on_change)){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29915){
var state_val_29916 = (state_29915[(1)]);
if((state_val_29916 === (7))){
var inst_29876 = (state_29915[(7)]);
var inst_29875 = (state_29915[(8)]);
var inst_29874 = (state_29915[(9)]);
var inst_29877 = (state_29915[(10)]);
var inst_29882 = cljs.core._nth.call(null,inst_29875,inst_29877);
var inst_29883 = inst_29882.call(null);
var inst_29884 = (inst_29877 + (1));
var tmp29917 = inst_29876;
var tmp29918 = inst_29875;
var tmp29919 = inst_29874;
var inst_29874__$1 = tmp29919;
var inst_29875__$1 = tmp29918;
var inst_29876__$1 = tmp29917;
var inst_29877__$1 = inst_29884;
var state_29915__$1 = (function (){var statearr_29920 = state_29915;
(statearr_29920[(7)] = inst_29876__$1);

(statearr_29920[(8)] = inst_29875__$1);

(statearr_29920[(9)] = inst_29874__$1);

(statearr_29920[(10)] = inst_29877__$1);

(statearr_29920[(11)] = inst_29883);

return statearr_29920;
})();
var statearr_29921_29948 = state_29915__$1;
(statearr_29921_29948[(2)] = null);

(statearr_29921_29948[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (1))){
var state_29915__$1 = state_29915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29915__$1,(2),klipse.plugin.event_chan);
} else {
if((state_val_29916 === (4))){
var inst_29913 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29915__$1,inst_29913);
} else {
if((state_val_29916 === (15))){
var inst_29901 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
var statearr_29922_29949 = state_29915__$1;
(statearr_29922_29949[(2)] = inst_29901);

(statearr_29922_29949[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (13))){
var inst_29887 = (state_29915[(12)]);
var inst_29891 = cljs.core.chunk_first.call(null,inst_29887);
var inst_29892 = cljs.core.chunk_rest.call(null,inst_29887);
var inst_29893 = cljs.core.count.call(null,inst_29891);
var inst_29874 = inst_29892;
var inst_29875 = inst_29891;
var inst_29876 = inst_29893;
var inst_29877 = (0);
var state_29915__$1 = (function (){var statearr_29923 = state_29915;
(statearr_29923[(7)] = inst_29876);

(statearr_29923[(8)] = inst_29875);

(statearr_29923[(9)] = inst_29874);

(statearr_29923[(10)] = inst_29877);

return statearr_29923;
})();
var statearr_29924_29950 = state_29915__$1;
(statearr_29924_29950[(2)] = null);

(statearr_29924_29950[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (6))){
var inst_29908 = (state_29915[(2)]);
var state_29915__$1 = (function (){var statearr_29925 = state_29915;
(statearr_29925[(13)] = inst_29908);

return statearr_29925;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29915__$1,(16),klipse.plugin.event_chan);
} else {
if((state_val_29916 === (3))){
var inst_29873 = cljs.core.seq.call(null,eval_fns);
var inst_29874 = inst_29873;
var inst_29875 = null;
var inst_29876 = (0);
var inst_29877 = (0);
var state_29915__$1 = (function (){var statearr_29926 = state_29915;
(statearr_29926[(7)] = inst_29876);

(statearr_29926[(8)] = inst_29875);

(statearr_29926[(9)] = inst_29874);

(statearr_29926[(10)] = inst_29877);

return statearr_29926;
})();
var statearr_29927_29951 = state_29915__$1;
(statearr_29927_29951[(2)] = null);

(statearr_29927_29951[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (12))){
var inst_29904 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
var statearr_29928_29952 = state_29915__$1;
(statearr_29928_29952[(2)] = inst_29904);

(statearr_29928_29952[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (2))){
var inst_29866 = (state_29915[(2)]);
var inst_29867 = inst_29866;
var state_29915__$1 = (function (){var statearr_29929 = state_29915;
(statearr_29929[(14)] = inst_29867);

return statearr_29929;
})();
var statearr_29930_29953 = state_29915__$1;
(statearr_29930_29953[(2)] = null);

(statearr_29930_29953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (11))){
var state_29915__$1 = state_29915;
var statearr_29931_29954 = state_29915__$1;
(statearr_29931_29954[(2)] = null);

(statearr_29931_29954[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (9))){
var inst_29906 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
var statearr_29932_29955 = state_29915__$1;
(statearr_29932_29955[(2)] = inst_29906);

(statearr_29932_29955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (5))){
var inst_29876 = (state_29915[(7)]);
var inst_29877 = (state_29915[(10)]);
var inst_29879 = (inst_29877 < inst_29876);
var inst_29880 = inst_29879;
var state_29915__$1 = state_29915;
if(cljs.core.truth_(inst_29880)){
var statearr_29933_29956 = state_29915__$1;
(statearr_29933_29956[(1)] = (7));

} else {
var statearr_29934_29957 = state_29915__$1;
(statearr_29934_29957[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (14))){
var inst_29887 = (state_29915[(12)]);
var inst_29896 = cljs.core.first.call(null,inst_29887);
var inst_29897 = inst_29896.call(null);
var inst_29898 = cljs.core.next.call(null,inst_29887);
var inst_29874 = inst_29898;
var inst_29875 = null;
var inst_29876 = (0);
var inst_29877 = (0);
var state_29915__$1 = (function (){var statearr_29935 = state_29915;
(statearr_29935[(7)] = inst_29876);

(statearr_29935[(8)] = inst_29875);

(statearr_29935[(15)] = inst_29897);

(statearr_29935[(9)] = inst_29874);

(statearr_29935[(10)] = inst_29877);

return statearr_29935;
})();
var statearr_29936_29958 = state_29915__$1;
(statearr_29936_29958[(2)] = null);

(statearr_29936_29958[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (16))){
var inst_29910 = (state_29915[(2)]);
var inst_29867 = inst_29910;
var state_29915__$1 = (function (){var statearr_29937 = state_29915;
(statearr_29937[(14)] = inst_29867);

return statearr_29937;
})();
var statearr_29938_29959 = state_29915__$1;
(statearr_29938_29959[(2)] = null);

(statearr_29938_29959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (10))){
var inst_29887 = (state_29915[(12)]);
var inst_29889 = cljs.core.chunked_seq_QMARK_.call(null,inst_29887);
var state_29915__$1 = state_29915;
if(inst_29889){
var statearr_29939_29960 = state_29915__$1;
(statearr_29939_29960[(1)] = (13));

} else {
var statearr_29940_29961 = state_29915__$1;
(statearr_29940_29961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (8))){
var inst_29887 = (state_29915[(12)]);
var inst_29874 = (state_29915[(9)]);
var inst_29887__$1 = cljs.core.seq.call(null,inst_29874);
var state_29915__$1 = (function (){var statearr_29941 = state_29915;
(statearr_29941[(12)] = inst_29887__$1);

return statearr_29941;
})();
if(inst_29887__$1){
var statearr_29942_29962 = state_29915__$1;
(statearr_29942_29962[(1)] = (10));

} else {
var statearr_29943_29963 = state_29915__$1;
(statearr_29943_29963[(1)] = (11));

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
var statearr_29944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29944[(0)] = klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto__);

(statearr_29944[(1)] = (1));

return statearr_29944;
});
var klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto____1 = (function (state_29915){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29945){if((e29945 instanceof Object)){
var ex__15526__auto__ = e29945;
var statearr_29946_29964 = state_29915;
(statearr_29946_29964[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29965 = state_29915;
state_29915 = G__29965;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto__ = function(state_29915){
switch(arguments.length){
case 0:
return klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto____1.call(this,state_29915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto____0;
klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto____1;
return klipse$plugin$eval_snippets_on_change_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29947 = f__15620__auto__.call(null);
(statearr_29947[(6)] = c__15619__auto__);

return statearr_29947;
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30016){
var state_val_30017 = (state_30016[(1)]);
if((state_val_30017 === (7))){
var inst_30010 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
var statearr_30018_30045 = state_30016__$1;
(statearr_30018_30045[(2)] = inst_30010);

(statearr_30018_30045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (1))){
var inst_29966 = klipse.plugin.edit_elements.call(null,elements,general_settings,modes);
var state_30016__$1 = state_30016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30016__$1,(2),inst_29966);
} else {
if((state_val_30017 === (4))){
var inst_29968 = (state_30016[(7)]);
var inst_30012 = (state_30016[(2)]);
var inst_30013 = klipse.plugin.mark_first_eval_BANG_.call(null);
var inst_30014 = klipse.plugin.eval_snippets_on_change.call(null,general_settings,inst_29968);
var state_30016__$1 = (function (){var statearr_30019 = state_30016;
(statearr_30019[(8)] = inst_30012);

(statearr_30019[(9)] = inst_30013);

return statearr_30019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30016__$1,inst_30014);
} else {
if((state_val_30017 === (15))){
var inst_29989 = (state_30016[(10)]);
var inst_30001 = (state_30016[(2)]);
var inst_30002 = cljs.core.next.call(null,inst_29989);
var inst_29974 = inst_30002;
var inst_29975 = null;
var inst_29976 = (0);
var inst_29977 = (0);
var state_30016__$1 = (function (){var statearr_30020 = state_30016;
(statearr_30020[(11)] = inst_30001);

(statearr_30020[(12)] = inst_29976);

(statearr_30020[(13)] = inst_29975);

(statearr_30020[(14)] = inst_29977);

(statearr_30020[(15)] = inst_29974);

return statearr_30020;
})();
var statearr_30021_30046 = state_30016__$1;
(statearr_30021_30046[(2)] = null);

(statearr_30021_30046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (13))){
var inst_29989 = (state_30016[(10)]);
var inst_29998 = cljs.core.first.call(null,inst_29989);
var inst_29999 = inst_29998.call(null);
var state_30016__$1 = state_30016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30016__$1,(15),inst_29999);
} else {
if((state_val_30017 === (6))){
var inst_29989 = (state_30016[(10)]);
var inst_29974 = (state_30016[(15)]);
var inst_29989__$1 = cljs.core.seq.call(null,inst_29974);
var state_30016__$1 = (function (){var statearr_30022 = state_30016;
(statearr_30022[(10)] = inst_29989__$1);

return statearr_30022;
})();
if(inst_29989__$1){
var statearr_30023_30047 = state_30016__$1;
(statearr_30023_30047[(1)] = (9));

} else {
var statearr_30024_30048 = state_30016__$1;
(statearr_30024_30048[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (3))){
var inst_29976 = (state_30016[(12)]);
var inst_29977 = (state_30016[(14)]);
var inst_29979 = (inst_29977 < inst_29976);
var inst_29980 = inst_29979;
var state_30016__$1 = state_30016;
if(cljs.core.truth_(inst_29980)){
var statearr_30025_30049 = state_30016__$1;
(statearr_30025_30049[(1)] = (5));

} else {
var statearr_30026_30050 = state_30016__$1;
(statearr_30026_30050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (12))){
var inst_29989 = (state_30016[(10)]);
var inst_29993 = cljs.core.chunk_first.call(null,inst_29989);
var inst_29994 = cljs.core.chunk_rest.call(null,inst_29989);
var inst_29995 = cljs.core.count.call(null,inst_29993);
var inst_29974 = inst_29994;
var inst_29975 = inst_29993;
var inst_29976 = inst_29995;
var inst_29977 = (0);
var state_30016__$1 = (function (){var statearr_30027 = state_30016;
(statearr_30027[(12)] = inst_29976);

(statearr_30027[(13)] = inst_29975);

(statearr_30027[(14)] = inst_29977);

(statearr_30027[(15)] = inst_29974);

return statearr_30027;
})();
var statearr_30028_30051 = state_30016__$1;
(statearr_30028_30051[(2)] = null);

(statearr_30028_30051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (2))){
var inst_29968 = (state_30016[(7)]);
var inst_29968__$1 = (state_30016[(2)]);
var inst_29973 = cljs.core.seq.call(null,inst_29968__$1);
var inst_29974 = inst_29973;
var inst_29975 = null;
var inst_29976 = (0);
var inst_29977 = (0);
var state_30016__$1 = (function (){var statearr_30029 = state_30016;
(statearr_30029[(12)] = inst_29976);

(statearr_30029[(7)] = inst_29968__$1);

(statearr_30029[(13)] = inst_29975);

(statearr_30029[(14)] = inst_29977);

(statearr_30029[(15)] = inst_29974);

return statearr_30029;
})();
var statearr_30030_30052 = state_30016__$1;
(statearr_30030_30052[(2)] = null);

(statearr_30030_30052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (11))){
var inst_30008 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
var statearr_30031_30053 = state_30016__$1;
(statearr_30031_30053[(2)] = inst_30008);

(statearr_30031_30053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (9))){
var inst_29989 = (state_30016[(10)]);
var inst_29991 = cljs.core.chunked_seq_QMARK_.call(null,inst_29989);
var state_30016__$1 = state_30016;
if(inst_29991){
var statearr_30032_30054 = state_30016__$1;
(statearr_30032_30054[(1)] = (12));

} else {
var statearr_30033_30055 = state_30016__$1;
(statearr_30033_30055[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (5))){
var inst_29975 = (state_30016[(13)]);
var inst_29977 = (state_30016[(14)]);
var inst_29982 = cljs.core._nth.call(null,inst_29975,inst_29977);
var inst_29983 = inst_29982.call(null);
var state_30016__$1 = state_30016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30016__$1,(8),inst_29983);
} else {
if((state_val_30017 === (14))){
var inst_30005 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
var statearr_30037_30056 = state_30016__$1;
(statearr_30037_30056[(2)] = inst_30005);

(statearr_30037_30056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (10))){
var state_30016__$1 = state_30016;
var statearr_30038_30057 = state_30016__$1;
(statearr_30038_30057[(2)] = null);

(statearr_30038_30057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (8))){
var inst_29976 = (state_30016[(12)]);
var inst_29975 = (state_30016[(13)]);
var inst_29977 = (state_30016[(14)]);
var inst_29974 = (state_30016[(15)]);
var inst_29985 = (state_30016[(2)]);
var inst_29986 = (inst_29977 + (1));
var tmp30034 = inst_29976;
var tmp30035 = inst_29975;
var tmp30036 = inst_29974;
var inst_29974__$1 = tmp30036;
var inst_29975__$1 = tmp30035;
var inst_29976__$1 = tmp30034;
var inst_29977__$1 = inst_29986;
var state_30016__$1 = (function (){var statearr_30039 = state_30016;
(statearr_30039[(12)] = inst_29976__$1);

(statearr_30039[(13)] = inst_29975__$1);

(statearr_30039[(14)] = inst_29977__$1);

(statearr_30039[(15)] = inst_29974__$1);

(statearr_30039[(16)] = inst_29985);

return statearr_30039;
})();
var statearr_30040_30058 = state_30016__$1;
(statearr_30040_30058[(2)] = null);

(statearr_30040_30058[(1)] = (3));


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
var statearr_30041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30041[(0)] = klipse$plugin$klipsify_elements_$_state_machine__15523__auto__);

(statearr_30041[(1)] = (1));

return statearr_30041;
});
var klipse$plugin$klipsify_elements_$_state_machine__15523__auto____1 = (function (state_30016){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30042){if((e30042 instanceof Object)){
var ex__15526__auto__ = e30042;
var statearr_30043_30059 = state_30016;
(statearr_30043_30059[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30060 = state_30016;
state_30016 = G__30060;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$plugin$klipsify_elements_$_state_machine__15523__auto__ = function(state_30016){
switch(arguments.length){
case 0:
return klipse$plugin$klipsify_elements_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$plugin$klipsify_elements_$_state_machine__15523__auto____1.call(this,state_30016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$plugin$klipsify_elements_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$plugin$klipsify_elements_$_state_machine__15523__auto____0;
klipse$plugin$klipsify_elements_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$plugin$klipsify_elements_$_state_machine__15523__auto____1;
return klipse$plugin$klipsify_elements_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30044 = f__15620__auto__.call(null);
(statearr_30044[(6)] = c__15619__auto__);

return statearr_30044;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5520__auto__ = (function klipse$plugin$elements__GT_mode_$_iter__30061(s__30062){
return (new cljs.core.LazySeq(null,(function (){
var s__30062__$1 = s__30062;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__30062__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var selector_name = cljs.core.first.call(null,xs__6360__auto__);
var selector = settings.call(null,selector_name);
if(cljs.core.truth_(selector)){
var iterys__5516__auto__ = ((function (s__30062__$1,selector,selector_name,xs__6360__auto__,temp__5804__auto__){
return (function klipse$plugin$elements__GT_mode_$_iter__30061_$_iter__30063(s__30064){
return (new cljs.core.LazySeq(null,((function (s__30062__$1,selector,selector_name,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__30064__$1 = s__30064;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__30064__$1);
if(temp__5804__auto____$1){
var s__30064__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30064__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__30064__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__30066 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__30065 = (0);
while(true){
if((i__30065 < size__5519__auto__)){
var element = cljs.core._nth.call(null,c__5518__auto__,i__30065);
cljs.core.chunk_append.call(null,b__30066,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null));

var G__30067 = (i__30065 + (1));
i__30065 = G__30067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30066),klipse$plugin$elements__GT_mode_$_iter__30061_$_iter__30063.call(null,cljs.core.chunk_rest.call(null,s__30064__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30066),null);
}
} else {
var element = cljs.core.first.call(null,s__30064__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,cljs.core.deref.call(null,klipse.common.registry.selector__GT_mode).call(null,selector_name)], null),klipse$plugin$elements__GT_mode_$_iter__30061_$_iter__30063.call(null,cljs.core.rest.call(null,s__30064__$2)));
}
} else {
return null;
}
break;
}
});})(s__30062__$1,selector,selector_name,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__30062__$1,selector,selector_name,xs__6360__auto__,temp__5804__auto__))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,klipse.plugin.seq_from_selector.call(null,selector)));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,klipse$plugin$elements__GT_mode_$_iter__30061.call(null,cljs.core.rest.call(null,s__30062__$1)));
} else {
var G__30068 = cljs.core.rest.call(null,s__30062__$1);
s__30062__$1 = G__30068;
continue;
}
} else {
var G__30069 = cljs.core.rest.call(null,s__30062__$1);
s__30062__$1 = G__30069;
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
var map__30070 = clojure.walk.keywordize_keys.call(null,settings);
var map__30070__$1 = cljs.core.__destructure_map.call(null,map__30070);
var keywordized_settings = map__30070__$1;
var secured_eval = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"secured_eval","secured_eval",-1577487888));
var security_forbidden_symbols = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"security_forbidden_symbols","security_forbidden_symbols",-1480402500),klipse.utils.default_forbidden_symbols.call(null));
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

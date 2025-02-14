// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.args_from_element');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('gadjett.collections');
klipse.args_from_element.read_string_or_val = (function klipse$args_from_element$read_string_or_val(value,not_found){
if(cljs.core.truth_(value)){
return cljs.reader.read_string.call(null,value);
} else {
return not_found;
}
});
klipse.args_from_element.string__GT_array = (function klipse$args_from_element$string__GT_array(s){
if(cljs.core.truth_(s)){
return cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,s,","));
} else {
return null;
}
});
klipse.args_from_element.comment_out = (function klipse$args_from_element$comment_out(src,comment_str){
if(typeof comment_str === 'string'){
return [comment_str,cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)].join('');
} else {
return comment_str.call(null,src);
}
});
klipse.args_from_element.content_from_gist = (function klipse$args_from_element$content_from_gist(element,comment_str){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29619){
var state_val_29620 = (state_29619[(1)]);
if((state_val_29620 === (1))){
var inst_29602 = (state_29619[(7)]);
var inst_29601 = (element["dataset"]);
var inst_29602__$1 = (inst_29601["gistId"]);
var state_29619__$1 = (function (){var statearr_29621 = state_29619;
(statearr_29621[(7)] = inst_29602__$1);

return statearr_29621;
})();
if(cljs.core.truth_(inst_29602__$1)){
var statearr_29622_29635 = state_29619__$1;
(statearr_29622_29635[(1)] = (2));

} else {
var statearr_29623_29636 = state_29619__$1;
(statearr_29623_29636[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (2))){
var inst_29602 = (state_29619[(7)]);
var state_29619__$1 = state_29619;
var statearr_29624_29637 = state_29619__$1;
(statearr_29624_29637[(2)] = inst_29602);

(statearr_29624_29637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (3))){
var state_29619__$1 = state_29619;
var statearr_29625_29638 = state_29619__$1;
(statearr_29625_29638[(2)] = null);

(statearr_29625_29638[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (4))){
var inst_29606 = (state_29619[(8)]);
var inst_29606__$1 = (state_29619[(2)]);
var state_29619__$1 = (function (){var statearr_29626 = state_29619;
(statearr_29626[(8)] = inst_29606__$1);

return statearr_29626;
})();
if(cljs.core.truth_(inst_29606__$1)){
var statearr_29627_29639 = state_29619__$1;
(statearr_29627_29639[(1)] = (5));

} else {
var statearr_29628_29640 = state_29619__$1;
(statearr_29628_29640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (5))){
var inst_29606 = (state_29619[(8)]);
var inst_29608 = klipse.utils.read_input_from_gist.call(null,inst_29606);
var state_29619__$1 = state_29619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29619__$1,(8),inst_29608);
} else {
if((state_val_29620 === (6))){
var state_29619__$1 = state_29619;
var statearr_29629_29641 = state_29619__$1;
(statearr_29629_29641[(2)] = null);

(statearr_29629_29641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (7))){
var inst_29617 = (state_29619[(2)]);
var state_29619__$1 = state_29619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29619__$1,inst_29617);
} else {
if((state_val_29620 === (8))){
var inst_29606 = (state_29619[(8)]);
var inst_29610 = (state_29619[(2)]);
var inst_29611 = klipse.utils.gist_path_page.call(null,inst_29606);
var inst_29612 = ["loaded from gist: ",inst_29611].join('');
var inst_29613 = klipse.args_from_element.comment_out.call(null,inst_29612,comment_str);
var inst_29614 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29613),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29610)].join('');
var state_29619__$1 = state_29619;
var statearr_29630_29642 = state_29619__$1;
(statearr_29630_29642[(2)] = inst_29614);

(statearr_29630_29642[(1)] = (7));


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
var klipse$args_from_element$content_from_gist_$_state_machine__15523__auto__ = null;
var klipse$args_from_element$content_from_gist_$_state_machine__15523__auto____0 = (function (){
var statearr_29631 = [null,null,null,null,null,null,null,null,null];
(statearr_29631[(0)] = klipse$args_from_element$content_from_gist_$_state_machine__15523__auto__);

(statearr_29631[(1)] = (1));

return statearr_29631;
});
var klipse$args_from_element$content_from_gist_$_state_machine__15523__auto____1 = (function (state_29619){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29632){if((e29632 instanceof Object)){
var ex__15526__auto__ = e29632;
var statearr_29633_29643 = state_29619;
(statearr_29633_29643[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29644 = state_29619;
state_29619 = G__29644;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$args_from_element$content_from_gist_$_state_machine__15523__auto__ = function(state_29619){
switch(arguments.length){
case 0:
return klipse$args_from_element$content_from_gist_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$args_from_element$content_from_gist_$_state_machine__15523__auto____1.call(this,state_29619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$args_from_element$content_from_gist_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$args_from_element$content_from_gist_$_state_machine__15523__auto____0;
klipse$args_from_element$content_from_gist_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$args_from_element$content_from_gist_$_state_machine__15523__auto____1;
return klipse$args_from_element$content_from_gist_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29634 = f__15620__auto__.call(null);
(statearr_29634[(6)] = c__15619__auto__);

return statearr_29634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.args_from_element.content = (function klipse$args_from_element$content(element,comment_str){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29654){
var state_val_29655 = (state_29654[(1)]);
if((state_val_29655 === (1))){
var inst_29645 = klipse.args_from_element.content_from_gist.call(null,element,comment_str);
var state_29654__$1 = state_29654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29654__$1,(2),inst_29645);
} else {
if((state_val_29655 === (2))){
var inst_29647 = (state_29654[(7)]);
var inst_29647__$1 = (state_29654[(2)]);
var state_29654__$1 = (function (){var statearr_29656 = state_29654;
(statearr_29656[(7)] = inst_29647__$1);

return statearr_29656;
})();
if(cljs.core.truth_(inst_29647__$1)){
var statearr_29657_29665 = state_29654__$1;
(statearr_29657_29665[(1)] = (3));

} else {
var statearr_29658_29666 = state_29654__$1;
(statearr_29658_29666[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (3))){
var inst_29647 = (state_29654[(7)]);
var state_29654__$1 = state_29654;
var statearr_29659_29667 = state_29654__$1;
(statearr_29659_29667[(2)] = inst_29647);

(statearr_29659_29667[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (4))){
var inst_29650 = (element["textContent"]);
var state_29654__$1 = state_29654;
var statearr_29660_29668 = state_29654__$1;
(statearr_29660_29668[(2)] = inst_29650);

(statearr_29660_29668[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29655 === (5))){
var inst_29652 = (state_29654[(2)]);
var state_29654__$1 = state_29654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29654__$1,inst_29652);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse$args_from_element$content_$_state_machine__15523__auto__ = null;
var klipse$args_from_element$content_$_state_machine__15523__auto____0 = (function (){
var statearr_29661 = [null,null,null,null,null,null,null,null];
(statearr_29661[(0)] = klipse$args_from_element$content_$_state_machine__15523__auto__);

(statearr_29661[(1)] = (1));

return statearr_29661;
});
var klipse$args_from_element$content_$_state_machine__15523__auto____1 = (function (state_29654){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29662){if((e29662 instanceof Object)){
var ex__15526__auto__ = e29662;
var statearr_29663_29669 = state_29654;
(statearr_29663_29669[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29670 = state_29654;
state_29654 = G__29670;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$args_from_element$content_$_state_machine__15523__auto__ = function(state_29654){
switch(arguments.length){
case 0:
return klipse$args_from_element$content_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$args_from_element$content_$_state_machine__15523__auto____1.call(this,state_29654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$args_from_element$content_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$args_from_element$content_$_state_machine__15523__auto____0;
klipse$args_from_element$content_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$args_from_element$content_$_state_machine__15523__auto____1;
return klipse$args_from_element$content_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29664 = f__15620__auto__.call(null);
(statearr_29664[(6)] = c__15619__auto__);

return statearr_29664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.args_from_element.eval_args_from_element = (function klipse$args_from_element$eval_args_from_element(element,p__29671){
var map__29672 = p__29671;
var map__29672__$1 = cljs.core.__destructure_map.call(null,map__29672);
var print_length = cljs.core.get.call(null,map__29672__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__29672__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
var eval_context = cljs.core.get.call(null,map__29672__$1,new cljs.core.Keyword(null,"eval-context","eval-context",536255614));
var my_dataset = (element["dataset"]);
var static_fns = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["staticFns"]),false);
var async_code_QMARK_ = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["asyncCode"]),false);
var verbose = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["verbose"]),false);
var compile_display_guard = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["compileDisplayGuard"]),false);
var eval_context__$1 = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["evalContext"]),eval_context);
var max_eval_duration = (my_dataset["maxEvalDuration"]);
var print_length__$1 = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["printLength"]),print_length);
var beautify_strings__$1 = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["beautifyStrings"]),beautify_strings);
var external_libs = klipse.args_from_element.string__GT_array.call(null,(function (){var or__5043__auto__ = (my_dataset["externalLibs"]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return null;
}
})());
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479),new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),new cljs.core.Keyword(null,"verbose","verbose",1694226060),new cljs.core.Keyword(null,"compile-display-guard","compile-display-guard",1291882674),new cljs.core.Keyword(null,"print-length","print-length",1931866356),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"max-eval-duration","max-eval-duration",-1241643010)],[external_libs,static_fns,beautify_strings__$1,async_code_QMARK_,verbose,compile_display_guard,print_length__$1,eval_context__$1,max_eval_duration]);
});
klipse.args_from_element.editor_args_from_element = (function klipse$args_from_element$editor_args_from_element(element){
var my_dataset = (element["dataset"]);
var editor_type = (my_dataset["editorType"]);
var loop_msec = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["loopMsec"]),null);
var preamble = (function (){var or__5043__auto__ = (my_dataset["preamble"]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var idle_msec = klipse.args_from_element.read_string_or_val.call(null,(my_dataset["evalIdleMsec"]),null);
return gadjett.collections.compactize_map.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),idle_msec,new cljs.core.Keyword(null,"loop-msec","loop-msec",1897277156),loop_msec,new cljs.core.Keyword(null,"preamble","preamble",1641040241),preamble,new cljs.core.Keyword(null,"editor-type","editor-type",198227301),editor_type], null));
});

//# sourceMappingURL=args_from_element.js.map

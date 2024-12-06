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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29206){
var state_val_29207 = (state_29206[(1)]);
if((state_val_29207 === (1))){
var inst_29189 = (state_29206[(7)]);
var inst_29188 = (element["dataset"]);
var inst_29189__$1 = (inst_29188["gistId"]);
var state_29206__$1 = (function (){var statearr_29208 = state_29206;
(statearr_29208[(7)] = inst_29189__$1);

return statearr_29208;
})();
if(cljs.core.truth_(inst_29189__$1)){
var statearr_29209_29222 = state_29206__$1;
(statearr_29209_29222[(1)] = (2));

} else {
var statearr_29210_29223 = state_29206__$1;
(statearr_29210_29223[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (2))){
var inst_29189 = (state_29206[(7)]);
var state_29206__$1 = state_29206;
var statearr_29211_29224 = state_29206__$1;
(statearr_29211_29224[(2)] = inst_29189);

(statearr_29211_29224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (3))){
var state_29206__$1 = state_29206;
var statearr_29212_29225 = state_29206__$1;
(statearr_29212_29225[(2)] = null);

(statearr_29212_29225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (4))){
var inst_29193 = (state_29206[(8)]);
var inst_29193__$1 = (state_29206[(2)]);
var state_29206__$1 = (function (){var statearr_29213 = state_29206;
(statearr_29213[(8)] = inst_29193__$1);

return statearr_29213;
})();
if(cljs.core.truth_(inst_29193__$1)){
var statearr_29214_29226 = state_29206__$1;
(statearr_29214_29226[(1)] = (5));

} else {
var statearr_29215_29227 = state_29206__$1;
(statearr_29215_29227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (5))){
var inst_29193 = (state_29206[(8)]);
var inst_29195 = klipse.utils.read_input_from_gist.call(null,inst_29193);
var state_29206__$1 = state_29206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29206__$1,(8),inst_29195);
} else {
if((state_val_29207 === (6))){
var state_29206__$1 = state_29206;
var statearr_29216_29228 = state_29206__$1;
(statearr_29216_29228[(2)] = null);

(statearr_29216_29228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (7))){
var inst_29204 = (state_29206[(2)]);
var state_29206__$1 = state_29206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29206__$1,inst_29204);
} else {
if((state_val_29207 === (8))){
var inst_29193 = (state_29206[(8)]);
var inst_29197 = (state_29206[(2)]);
var inst_29198 = klipse.utils.gist_path_page.call(null,inst_29193);
var inst_29199 = ["loaded from gist: ",inst_29198].join('');
var inst_29200 = klipse.args_from_element.comment_out.call(null,inst_29199,comment_str);
var inst_29201 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29200),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29197)].join('');
var state_29206__$1 = state_29206;
var statearr_29217_29229 = state_29206__$1;
(statearr_29217_29229[(2)] = inst_29201);

(statearr_29217_29229[(1)] = (7));


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
var statearr_29218 = [null,null,null,null,null,null,null,null,null];
(statearr_29218[(0)] = klipse$args_from_element$content_from_gist_$_state_machine__15523__auto__);

(statearr_29218[(1)] = (1));

return statearr_29218;
});
var klipse$args_from_element$content_from_gist_$_state_machine__15523__auto____1 = (function (state_29206){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29219){if((e29219 instanceof Object)){
var ex__15526__auto__ = e29219;
var statearr_29220_29230 = state_29206;
(statearr_29220_29230[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29231 = state_29206;
state_29206 = G__29231;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$args_from_element$content_from_gist_$_state_machine__15523__auto__ = function(state_29206){
switch(arguments.length){
case 0:
return klipse$args_from_element$content_from_gist_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$args_from_element$content_from_gist_$_state_machine__15523__auto____1.call(this,state_29206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$args_from_element$content_from_gist_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$args_from_element$content_from_gist_$_state_machine__15523__auto____0;
klipse$args_from_element$content_from_gist_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$args_from_element$content_from_gist_$_state_machine__15523__auto____1;
return klipse$args_from_element$content_from_gist_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29221 = f__15620__auto__.call(null);
(statearr_29221[(6)] = c__15619__auto__);

return statearr_29221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.args_from_element.content = (function klipse$args_from_element$content(element,comment_str){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29241){
var state_val_29242 = (state_29241[(1)]);
if((state_val_29242 === (1))){
var inst_29232 = klipse.args_from_element.content_from_gist.call(null,element,comment_str);
var state_29241__$1 = state_29241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29241__$1,(2),inst_29232);
} else {
if((state_val_29242 === (2))){
var inst_29234 = (state_29241[(7)]);
var inst_29234__$1 = (state_29241[(2)]);
var state_29241__$1 = (function (){var statearr_29243 = state_29241;
(statearr_29243[(7)] = inst_29234__$1);

return statearr_29243;
})();
if(cljs.core.truth_(inst_29234__$1)){
var statearr_29244_29252 = state_29241__$1;
(statearr_29244_29252[(1)] = (3));

} else {
var statearr_29245_29253 = state_29241__$1;
(statearr_29245_29253[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29242 === (3))){
var inst_29234 = (state_29241[(7)]);
var state_29241__$1 = state_29241;
var statearr_29246_29254 = state_29241__$1;
(statearr_29246_29254[(2)] = inst_29234);

(statearr_29246_29254[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29242 === (4))){
var inst_29237 = (element["textContent"]);
var state_29241__$1 = state_29241;
var statearr_29247_29255 = state_29241__$1;
(statearr_29247_29255[(2)] = inst_29237);

(statearr_29247_29255[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29242 === (5))){
var inst_29239 = (state_29241[(2)]);
var state_29241__$1 = state_29241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29241__$1,inst_29239);
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
var statearr_29248 = [null,null,null,null,null,null,null,null];
(statearr_29248[(0)] = klipse$args_from_element$content_$_state_machine__15523__auto__);

(statearr_29248[(1)] = (1));

return statearr_29248;
});
var klipse$args_from_element$content_$_state_machine__15523__auto____1 = (function (state_29241){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29249){if((e29249 instanceof Object)){
var ex__15526__auto__ = e29249;
var statearr_29250_29256 = state_29241;
(statearr_29250_29256[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29257 = state_29241;
state_29241 = G__29257;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$args_from_element$content_$_state_machine__15523__auto__ = function(state_29241){
switch(arguments.length){
case 0:
return klipse$args_from_element$content_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$args_from_element$content_$_state_machine__15523__auto____1.call(this,state_29241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$args_from_element$content_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$args_from_element$content_$_state_machine__15523__auto____0;
klipse$args_from_element$content_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$args_from_element$content_$_state_machine__15523__auto____1;
return klipse$args_from_element$content_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29251 = f__15620__auto__.call(null);
(statearr_29251[(6)] = c__15619__auto__);

return statearr_29251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.args_from_element.eval_args_from_element = (function klipse$args_from_element$eval_args_from_element(element,p__29258){
var map__29259 = p__29258;
var map__29259__$1 = cljs.core.__destructure_map.call(null,map__29259);
var print_length = cljs.core.get.call(null,map__29259__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__29259__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
var eval_context = cljs.core.get.call(null,map__29259__$1,new cljs.core.Keyword(null,"eval-context","eval-context",536255614));
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

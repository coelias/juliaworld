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
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_18204){
var state_val_18205 = (state_18204[(1)]);
if((state_val_18205 === (1))){
var inst_18187 = (state_18204[(7)]);
var inst_18186 = (element["dataset"]);
var inst_18187__$1 = (inst_18186["gistId"]);
var state_18204__$1 = (function (){var statearr_18206 = state_18204;
(statearr_18206[(7)] = inst_18187__$1);

return statearr_18206;
})();
if(cljs.core.truth_(inst_18187__$1)){
var statearr_18207_18220 = state_18204__$1;
(statearr_18207_18220[(1)] = (2));

} else {
var statearr_18208_18221 = state_18204__$1;
(statearr_18208_18221[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18205 === (2))){
var inst_18187 = (state_18204[(7)]);
var state_18204__$1 = state_18204;
var statearr_18209_18222 = state_18204__$1;
(statearr_18209_18222[(2)] = inst_18187);

(statearr_18209_18222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18205 === (3))){
var state_18204__$1 = state_18204;
var statearr_18210_18223 = state_18204__$1;
(statearr_18210_18223[(2)] = null);

(statearr_18210_18223[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18205 === (4))){
var inst_18191 = (state_18204[(8)]);
var inst_18191__$1 = (state_18204[(2)]);
var state_18204__$1 = (function (){var statearr_18211 = state_18204;
(statearr_18211[(8)] = inst_18191__$1);

return statearr_18211;
})();
if(cljs.core.truth_(inst_18191__$1)){
var statearr_18212_18224 = state_18204__$1;
(statearr_18212_18224[(1)] = (5));

} else {
var statearr_18213_18225 = state_18204__$1;
(statearr_18213_18225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18205 === (5))){
var inst_18191 = (state_18204[(8)]);
var inst_18193 = klipse.utils.read_input_from_gist.call(null,inst_18191);
var state_18204__$1 = state_18204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18204__$1,(8),inst_18193);
} else {
if((state_val_18205 === (6))){
var state_18204__$1 = state_18204;
var statearr_18214_18226 = state_18204__$1;
(statearr_18214_18226[(2)] = null);

(statearr_18214_18226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18205 === (7))){
var inst_18202 = (state_18204[(2)]);
var state_18204__$1 = state_18204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18204__$1,inst_18202);
} else {
if((state_val_18205 === (8))){
var inst_18191 = (state_18204[(8)]);
var inst_18195 = (state_18204[(2)]);
var inst_18196 = klipse.utils.gist_path_page.call(null,inst_18191);
var inst_18197 = ["loaded from gist: ",inst_18196].join('');
var inst_18198 = klipse.args_from_element.comment_out.call(null,inst_18197,comment_str);
var inst_18199 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18198),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18195)].join('');
var state_18204__$1 = state_18204;
var statearr_18215_18227 = state_18204__$1;
(statearr_18215_18227[(2)] = inst_18199);

(statearr_18215_18227[(1)] = (7));


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
var klipse$args_from_element$content_from_gist_$_state_machine__13608__auto__ = null;
var klipse$args_from_element$content_from_gist_$_state_machine__13608__auto____0 = (function (){
var statearr_18216 = [null,null,null,null,null,null,null,null,null];
(statearr_18216[(0)] = klipse$args_from_element$content_from_gist_$_state_machine__13608__auto__);

(statearr_18216[(1)] = (1));

return statearr_18216;
});
var klipse$args_from_element$content_from_gist_$_state_machine__13608__auto____1 = (function (state_18204){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_18204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e18217){if((e18217 instanceof Object)){
var ex__13611__auto__ = e18217;
var statearr_18218_18228 = state_18204;
(statearr_18218_18228[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18229 = state_18204;
state_18204 = G__18229;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$args_from_element$content_from_gist_$_state_machine__13608__auto__ = function(state_18204){
switch(arguments.length){
case 0:
return klipse$args_from_element$content_from_gist_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$args_from_element$content_from_gist_$_state_machine__13608__auto____1.call(this,state_18204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$args_from_element$content_from_gist_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$args_from_element$content_from_gist_$_state_machine__13608__auto____0;
klipse$args_from_element$content_from_gist_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$args_from_element$content_from_gist_$_state_machine__13608__auto____1;
return klipse$args_from_element$content_from_gist_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_18219 = f__13705__auto__.call(null);
(statearr_18219[(6)] = c__13704__auto__);

return statearr_18219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.args_from_element.content = (function klipse$args_from_element$content(element,comment_str){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_18239){
var state_val_18240 = (state_18239[(1)]);
if((state_val_18240 === (1))){
var inst_18230 = klipse.args_from_element.content_from_gist.call(null,element,comment_str);
var state_18239__$1 = state_18239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18239__$1,(2),inst_18230);
} else {
if((state_val_18240 === (2))){
var inst_18232 = (state_18239[(7)]);
var inst_18232__$1 = (state_18239[(2)]);
var state_18239__$1 = (function (){var statearr_18241 = state_18239;
(statearr_18241[(7)] = inst_18232__$1);

return statearr_18241;
})();
if(cljs.core.truth_(inst_18232__$1)){
var statearr_18242_18250 = state_18239__$1;
(statearr_18242_18250[(1)] = (3));

} else {
var statearr_18243_18251 = state_18239__$1;
(statearr_18243_18251[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (3))){
var inst_18232 = (state_18239[(7)]);
var state_18239__$1 = state_18239;
var statearr_18244_18252 = state_18239__$1;
(statearr_18244_18252[(2)] = inst_18232);

(statearr_18244_18252[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (4))){
var inst_18235 = (element["textContent"]);
var state_18239__$1 = state_18239;
var statearr_18245_18253 = state_18239__$1;
(statearr_18245_18253[(2)] = inst_18235);

(statearr_18245_18253[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18240 === (5))){
var inst_18237 = (state_18239[(2)]);
var state_18239__$1 = state_18239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18239__$1,inst_18237);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse$args_from_element$content_$_state_machine__13608__auto__ = null;
var klipse$args_from_element$content_$_state_machine__13608__auto____0 = (function (){
var statearr_18246 = [null,null,null,null,null,null,null,null];
(statearr_18246[(0)] = klipse$args_from_element$content_$_state_machine__13608__auto__);

(statearr_18246[(1)] = (1));

return statearr_18246;
});
var klipse$args_from_element$content_$_state_machine__13608__auto____1 = (function (state_18239){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_18239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e18247){if((e18247 instanceof Object)){
var ex__13611__auto__ = e18247;
var statearr_18248_18254 = state_18239;
(statearr_18248_18254[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18255 = state_18239;
state_18239 = G__18255;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$args_from_element$content_$_state_machine__13608__auto__ = function(state_18239){
switch(arguments.length){
case 0:
return klipse$args_from_element$content_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$args_from_element$content_$_state_machine__13608__auto____1.call(this,state_18239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$args_from_element$content_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$args_from_element$content_$_state_machine__13608__auto____0;
klipse$args_from_element$content_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$args_from_element$content_$_state_machine__13608__auto____1;
return klipse$args_from_element$content_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_18249 = f__13705__auto__.call(null);
(statearr_18249[(6)] = c__13704__auto__);

return statearr_18249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.args_from_element.eval_args_from_element = (function klipse$args_from_element$eval_args_from_element(element,p__18256){
var map__18257 = p__18256;
var map__18257__$1 = cljs.core.__destructure_map.call(null,map__18257);
var print_length = cljs.core.get.call(null,map__18257__$1,new cljs.core.Keyword(null,"print-length","print-length",1931866356));
var beautify_strings = cljs.core.get.call(null,map__18257__$1,new cljs.core.Keyword(null,"beautify-strings","beautify-strings",-236207479));
var eval_context = cljs.core.get.call(null,map__18257__$1,new cljs.core.Keyword(null,"eval-context","eval-context",536255614));
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

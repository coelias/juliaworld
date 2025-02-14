// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.brainfuck');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.brainfuck.boldify_head = (function klipse$lang$brainfuck$boldify_head(data,head){
var head_value = ["<strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,data,head)),"</strong>"].join('');
return cljs.core.assoc.call(null,data,head,head_value);
});
klipse.lang.brainfuck.to_html = (function klipse$lang$brainfuck$to_html(p__30542){
var map__30543 = p__30542;
var map__30543__$1 = cljs.core.__destructure_map.call(null,map__30543);
var output = cljs.core.get.call(null,map__30543__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var data = cljs.core.get.call(null,map__30543__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pointer = cljs.core.get.call(null,map__30543__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var text = cljs.core.get.call(null,map__30543__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return ["<table>",((cljs.core.seq.call(null,output))?["<tr>\n           <td>Output</td><td>",clojure.string.join.call(null," ",output),"</td>\n         </tr>"].join(''):null),"<tr>\n           <td>Data</td><td>",clojure.string.join.call(null," ",klipse.lang.brainfuck.boldify_head.call(null,data,pointer)),"</td>\n         </tr>\n         <tr>\n           <td>Head</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pointer),"</td>\n           </tr>",((cljs.core.seq.call(null,output))?["<tr>\n           <td>Text</td><td> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</td>\n         </tr>"].join(''):null),"</table>"].join('');
});
klipse.lang.brainfuck.bf = (function klipse$lang$brainfuck$bf(x){
try{var input = cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.re_matches,/\[in:\s*(.*)\]/),clojure.string.split_lines.call(null,x)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),klipse.lang.brainfuck.to_html.call(null,cljs.core.js__GT_clj.call(null,(function (){var obj__20025__auto__ = window;
var f__20026__auto__ = (function (){var obj30545 = obj__20025__auto__;
var k30546 = "brainfuck";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30545,k30546)){
return (obj30545[k30546]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,x,input);
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))], null);
}catch (e30544){var o = e30544;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.brainfuck.bf_txt = (function klipse$lang$brainfuck$bf_txt(x){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var obj__20025__auto__ = brainfuck;
var f__20026__auto__ = (function (){var obj30548 = obj__20025__auto__;
var k30549 = "text";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30548,k30549)){
return (obj30548[k30549]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,x);
})()], null);
}catch (e30547){var o = e30547;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.brainfuck.eval_brainfuck = (function klipse$lang$brainfuck$eval_brainfuck(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30557){
var state_val_30558 = (state_30557[(1)]);
if((state_val_30558 === (1))){
var inst_30553 = klipse.lang.brainfuck.bf.call(null,exp);
var inst_30554 = cljs.core.nth.call(null,inst_30553,(0),null);
var inst_30555 = cljs.core.nth.call(null,inst_30553,(1),null);
var state_30557__$1 = (function (){var statearr_30559 = state_30557;
(statearr_30559[(7)] = inst_30554);

return statearr_30559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30557__$1,inst_30555);
} else {
return null;
}
});
return (function() {
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto__ = null;
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto____0 = (function (){
var statearr_30560 = [null,null,null,null,null,null,null,null];
(statearr_30560[(0)] = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto__);

(statearr_30560[(1)] = (1));

return statearr_30560;
});
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto____1 = (function (state_30557){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30561){if((e30561 instanceof Object)){
var ex__15526__auto__ = e30561;
var statearr_30562_30564 = state_30557;
(statearr_30562_30564[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30565 = state_30557;
state_30557 = G__30565;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto__ = function(state_30557){
switch(arguments.length){
case 0:
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto____1.call(this,state_30557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto____0;
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto____1;
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30563 = f__15620__auto__.call(null);
(statearr_30563[(6)] = c__15619__auto__);

return statearr_30563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.brainfuck.eval_brainfuck_txt = (function klipse$lang$brainfuck$eval_brainfuck_txt(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30573){
var state_val_30574 = (state_30573[(1)]);
if((state_val_30574 === (1))){
var inst_30569 = klipse.lang.brainfuck.bf_txt.call(null,exp);
var inst_30570 = cljs.core.nth.call(null,inst_30569,(0),null);
var inst_30571 = cljs.core.nth.call(null,inst_30569,(1),null);
var state_30573__$1 = (function (){var statearr_30575 = state_30573;
(statearr_30575[(7)] = inst_30570);

return statearr_30575;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30573__$1,inst_30571);
} else {
return null;
}
});
return (function() {
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto__ = null;
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto____0 = (function (){
var statearr_30576 = [null,null,null,null,null,null,null,null];
(statearr_30576[(0)] = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto__);

(statearr_30576[(1)] = (1));

return statearr_30576;
});
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto____1 = (function (state_30573){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30577){if((e30577 instanceof Object)){
var ex__15526__auto__ = e30577;
var statearr_30578_30580 = state_30573;
(statearr_30578_30580[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30581 = state_30573;
state_30573 = G__30581;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto__ = function(state_30573){
switch(arguments.length){
case 0:
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto____1.call(this,state_30573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto____0;
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto____1;
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30579 = f__15620__auto__.call(null);
(statearr_30579[(6)] = c__15619__auto__);

return statearr_30579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.brainfuck.eval_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-brainfuck",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.brainfuck.eval_brainfuck,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"brainfuck"),klipse.common.registry.scripts_src.call(null,"brainfuck.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),""], null);
klipse.lang.brainfuck.eval_txt_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-brainfuck",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.brainfuck.eval_brainfuck_txt,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"brainfuck"),klipse.common.registry.scripts_src.call(null,"brainfuck.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),""], null);
klipse.common.registry.register_mode.call(null,"eval-brainfuck","selector_brainfuck",klipse.lang.brainfuck.eval_opts);
klipse.common.registry.register_mode.call(null,"eval-brainfuck-txt","selector_brainfuck_txt",klipse.lang.brainfuck.eval_txt_opts);

//# sourceMappingURL=brainfuck.js.map

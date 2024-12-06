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
klipse.lang.brainfuck.to_html = (function klipse$lang$brainfuck$to_html(p__30129){
var map__30130 = p__30129;
var map__30130__$1 = cljs.core.__destructure_map.call(null,map__30130);
var output = cljs.core.get.call(null,map__30130__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var data = cljs.core.get.call(null,map__30130__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pointer = cljs.core.get.call(null,map__30130__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var text = cljs.core.get.call(null,map__30130__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return ["<table>",((cljs.core.seq.call(null,output))?["<tr>\n           <td>Output</td><td>",clojure.string.join.call(null," ",output),"</td>\n         </tr>"].join(''):null),"<tr>\n           <td>Data</td><td>",clojure.string.join.call(null," ",klipse.lang.brainfuck.boldify_head.call(null,data,pointer)),"</td>\n         </tr>\n         <tr>\n           <td>Head</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pointer),"</td>\n           </tr>",((cljs.core.seq.call(null,output))?["<tr>\n           <td>Text</td><td> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</td>\n         </tr>"].join(''):null),"</table>"].join('');
});
klipse.lang.brainfuck.bf = (function klipse$lang$brainfuck$bf(x){
try{var input = cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.re_matches,/\[in:\s*(.*)\]/),clojure.string.split_lines.call(null,x)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),klipse.lang.brainfuck.to_html.call(null,cljs.core.js__GT_clj.call(null,(function (){var obj__20025__auto__ = window;
var f__20026__auto__ = (function (){var obj30132 = obj__20025__auto__;
var k30133 = "brainfuck";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30132,k30133)){
return (obj30132[k30133]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,x,input);
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))], null);
}catch (e30131){var o = e30131;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.brainfuck.bf_txt = (function klipse$lang$brainfuck$bf_txt(x){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var obj__20025__auto__ = brainfuck;
var f__20026__auto__ = (function (){var obj30135 = obj__20025__auto__;
var k30136 = "text";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30135,k30136)){
return (obj30135[k30136]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,x);
})()], null);
}catch (e30134){var o = e30134;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.brainfuck.eval_brainfuck = (function klipse$lang$brainfuck$eval_brainfuck(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30144){
var state_val_30145 = (state_30144[(1)]);
if((state_val_30145 === (1))){
var inst_30140 = klipse.lang.brainfuck.bf.call(null,exp);
var inst_30141 = cljs.core.nth.call(null,inst_30140,(0),null);
var inst_30142 = cljs.core.nth.call(null,inst_30140,(1),null);
var state_30144__$1 = (function (){var statearr_30146 = state_30144;
(statearr_30146[(7)] = inst_30141);

return statearr_30146;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30144__$1,inst_30142);
} else {
return null;
}
});
return (function() {
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto__ = null;
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto____0 = (function (){
var statearr_30147 = [null,null,null,null,null,null,null,null];
(statearr_30147[(0)] = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto__);

(statearr_30147[(1)] = (1));

return statearr_30147;
});
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto____1 = (function (state_30144){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30148){if((e30148 instanceof Object)){
var ex__15526__auto__ = e30148;
var statearr_30149_30151 = state_30144;
(statearr_30149_30151[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30152 = state_30144;
state_30144 = G__30152;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto__ = function(state_30144){
switch(arguments.length){
case 0:
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto____1.call(this,state_30144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto____0;
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto____1;
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30150 = f__15620__auto__.call(null);
(statearr_30150[(6)] = c__15619__auto__);

return statearr_30150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.brainfuck.eval_brainfuck_txt = (function klipse$lang$brainfuck$eval_brainfuck_txt(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30160){
var state_val_30161 = (state_30160[(1)]);
if((state_val_30161 === (1))){
var inst_30156 = klipse.lang.brainfuck.bf_txt.call(null,exp);
var inst_30157 = cljs.core.nth.call(null,inst_30156,(0),null);
var inst_30158 = cljs.core.nth.call(null,inst_30156,(1),null);
var state_30160__$1 = (function (){var statearr_30162 = state_30160;
(statearr_30162[(7)] = inst_30157);

return statearr_30162;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30160__$1,inst_30158);
} else {
return null;
}
});
return (function() {
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto__ = null;
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto____0 = (function (){
var statearr_30163 = [null,null,null,null,null,null,null,null];
(statearr_30163[(0)] = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto__);

(statearr_30163[(1)] = (1));

return statearr_30163;
});
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto____1 = (function (state_30160){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30164){if((e30164 instanceof Object)){
var ex__15526__auto__ = e30164;
var statearr_30165_30167 = state_30160;
(statearr_30165_30167[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30168 = state_30160;
state_30160 = G__30168;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto__ = function(state_30160){
switch(arguments.length){
case 0:
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto____1.call(this,state_30160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto____0;
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto____1;
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30166 = f__15620__auto__.call(null);
(statearr_30166[(6)] = c__15619__auto__);

return statearr_30166;
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

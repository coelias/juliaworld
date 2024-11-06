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
klipse.lang.brainfuck.to_html = (function klipse$lang$brainfuck$to_html(p__24044){
var map__24045 = p__24044;
var map__24045__$1 = cljs.core.__destructure_map.call(null,map__24045);
var output = cljs.core.get.call(null,map__24045__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var data = cljs.core.get.call(null,map__24045__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pointer = cljs.core.get.call(null,map__24045__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var text = cljs.core.get.call(null,map__24045__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return ["<table>",((cljs.core.seq.call(null,output))?["<tr>\n           <td>Output</td><td>",clojure.string.join.call(null," ",output),"</td>\n         </tr>"].join(''):null),"<tr>\n           <td>Data</td><td>",clojure.string.join.call(null," ",klipse.lang.brainfuck.boldify_head.call(null,data,pointer)),"</td>\n         </tr>\n         <tr>\n           <td>Head</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pointer),"</td>\n           </tr>",((cljs.core.seq.call(null,output))?["<tr>\n           <td>Text</td><td> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</td>\n         </tr>"].join(''):null),"</table>"].join('');
});
klipse.lang.brainfuck.bf = (function klipse$lang$brainfuck$bf(x){
try{var input = cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.re_matches,/\[in:\s*(.*)\]/),clojure.string.split_lines.call(null,x)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),klipse.lang.brainfuck.to_html.call(null,cljs.core.js__GT_clj.call(null,(function (){var obj__17203__auto__ = window;
var f__17204__auto__ = (function (){var obj24047 = obj__17203__auto__;
var k24048 = "brainfuck";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24047,k24048)){
return (obj24047[k24048]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,x,input);
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))], null);
}catch (e24046){var o = e24046;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.brainfuck.bf_txt = (function klipse$lang$brainfuck$bf_txt(x){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var obj__17203__auto__ = brainfuck;
var f__17204__auto__ = (function (){var obj24050 = obj__17203__auto__;
var k24051 = "text";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24050,k24051)){
return (obj24050[k24051]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,x);
})()], null);
}catch (e24049){var o = e24049;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.brainfuck.eval_brainfuck = (function klipse$lang$brainfuck$eval_brainfuck(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_24059){
var state_val_24060 = (state_24059[(1)]);
if((state_val_24060 === (1))){
var inst_24055 = klipse.lang.brainfuck.bf.call(null,exp);
var inst_24056 = cljs.core.nth.call(null,inst_24055,(0),null);
var inst_24057 = cljs.core.nth.call(null,inst_24055,(1),null);
var state_24059__$1 = (function (){var statearr_24061 = state_24059;
(statearr_24061[(7)] = inst_24056);

return statearr_24061;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24059__$1,inst_24057);
} else {
return null;
}
});
return (function() {
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto__ = null;
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto____0 = (function (){
var statearr_24062 = [null,null,null,null,null,null,null,null];
(statearr_24062[(0)] = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto__);

(statearr_24062[(1)] = (1));

return statearr_24062;
});
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto____1 = (function (state_24059){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_24059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e24063){if((e24063 instanceof Object)){
var ex__13611__auto__ = e24063;
var statearr_24064_24066 = state_24059;
(statearr_24064_24066[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24067 = state_24059;
state_24059 = G__24067;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto__ = function(state_24059){
switch(arguments.length){
case 0:
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto____1.call(this,state_24059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto____0;
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto____1;
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_24065 = f__13705__auto__.call(null);
(statearr_24065[(6)] = c__13704__auto__);

return statearr_24065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.brainfuck.eval_brainfuck_txt = (function klipse$lang$brainfuck$eval_brainfuck_txt(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_24075){
var state_val_24076 = (state_24075[(1)]);
if((state_val_24076 === (1))){
var inst_24071 = klipse.lang.brainfuck.bf_txt.call(null,exp);
var inst_24072 = cljs.core.nth.call(null,inst_24071,(0),null);
var inst_24073 = cljs.core.nth.call(null,inst_24071,(1),null);
var state_24075__$1 = (function (){var statearr_24077 = state_24075;
(statearr_24077[(7)] = inst_24072);

return statearr_24077;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24075__$1,inst_24073);
} else {
return null;
}
});
return (function() {
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto__ = null;
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto____0 = (function (){
var statearr_24078 = [null,null,null,null,null,null,null,null];
(statearr_24078[(0)] = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto__);

(statearr_24078[(1)] = (1));

return statearr_24078;
});
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto____1 = (function (state_24075){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_24075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e24079){if((e24079 instanceof Object)){
var ex__13611__auto__ = e24079;
var statearr_24080_24082 = state_24075;
(statearr_24080_24082[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24083 = state_24075;
state_24075 = G__24083;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto__ = function(state_24075){
switch(arguments.length){
case 0:
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto____1.call(this,state_24075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto____0;
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto____1;
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_24081 = f__13705__auto__.call(null);
(statearr_24081[(6)] = c__13704__auto__);

return statearr_24081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.brainfuck.eval_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-brainfuck",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.brainfuck.eval_brainfuck,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"brainfuck"),klipse.common.registry.scripts_src.call(null,"brainfuck.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),""], null);
klipse.lang.brainfuck.eval_txt_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-brainfuck",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.brainfuck.eval_brainfuck_txt,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"brainfuck"),klipse.common.registry.scripts_src.call(null,"brainfuck.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),""], null);
klipse.common.registry.register_mode.call(null,"eval-brainfuck","selector_brainfuck",klipse.lang.brainfuck.eval_opts);
klipse.common.registry.register_mode.call(null,"eval-brainfuck-txt","selector_brainfuck_txt",klipse.lang.brainfuck.eval_txt_opts);

//# sourceMappingURL=brainfuck.js.map

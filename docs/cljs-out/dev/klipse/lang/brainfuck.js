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
klipse.lang.brainfuck.to_html = (function klipse$lang$brainfuck$to_html(p__21358){
var map__21359 = p__21358;
var map__21359__$1 = cljs.core.__destructure_map.call(null,map__21359);
var output = cljs.core.get.call(null,map__21359__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var data = cljs.core.get.call(null,map__21359__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pointer = cljs.core.get.call(null,map__21359__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var text = cljs.core.get.call(null,map__21359__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return ["<table>",((cljs.core.seq.call(null,output))?["<tr>\n           <td>Output</td><td>",clojure.string.join.call(null," ",output),"</td>\n         </tr>"].join(''):null),"<tr>\n           <td>Data</td><td>",clojure.string.join.call(null," ",klipse.lang.brainfuck.boldify_head.call(null,data,pointer)),"</td>\n         </tr>\n         <tr>\n           <td>Head</td><td>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pointer),"</td>\n           </tr>",((cljs.core.seq.call(null,output))?["<tr>\n           <td>Text</td><td> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</td>\n         </tr>"].join(''):null),"</table>"].join('');
});
klipse.lang.brainfuck.bf = (function klipse$lang$brainfuck$bf(x){
try{var input = cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.re_matches,/\[in:\s*(.*)\]/),clojure.string.split_lines.call(null,x)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),klipse.lang.brainfuck.to_html.call(null,cljs.core.js__GT_clj.call(null,(function (){var obj__17203__auto__ = window;
var f__17204__auto__ = (function (){var obj21361 = obj__17203__auto__;
var k21362 = "brainfuck";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21361,k21362)){
return (obj21361[k21362]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,x,input);
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))], null);
}catch (e21360){var o = e21360;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.brainfuck.bf_txt = (function klipse$lang$brainfuck$bf_txt(x){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(function (){var obj__17203__auto__ = brainfuck;
var f__17204__auto__ = (function (){var obj21364 = obj__17203__auto__;
var k21365 = "text";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21364,k21365)){
return (obj21364[k21365]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,x);
})()], null);
}catch (e21363){var o = e21363;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o)], null);
}});
klipse.lang.brainfuck.eval_brainfuck = (function klipse$lang$brainfuck$eval_brainfuck(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_21373){
var state_val_21374 = (state_21373[(1)]);
if((state_val_21374 === (1))){
var inst_21369 = klipse.lang.brainfuck.bf.call(null,exp);
var inst_21370 = cljs.core.nth.call(null,inst_21369,(0),null);
var inst_21371 = cljs.core.nth.call(null,inst_21369,(1),null);
var state_21373__$1 = (function (){var statearr_21375 = state_21373;
(statearr_21375[(7)] = inst_21370);

return statearr_21375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21373__$1,inst_21371);
} else {
return null;
}
});
return (function() {
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto__ = null;
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto____0 = (function (){
var statearr_21376 = [null,null,null,null,null,null,null,null];
(statearr_21376[(0)] = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto__);

(statearr_21376[(1)] = (1));

return statearr_21376;
});
var klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto____1 = (function (state_21373){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_21373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e21377){if((e21377 instanceof Object)){
var ex__13611__auto__ = e21377;
var statearr_21378_21380 = state_21373;
(statearr_21378_21380[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21381 = state_21373;
state_21373 = G__21381;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto__ = function(state_21373){
switch(arguments.length){
case 0:
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto____1.call(this,state_21373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto____0;
klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto____1;
return klipse$lang$brainfuck$eval_brainfuck_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_21379 = f__13705__auto__.call(null);
(statearr_21379[(6)] = c__13704__auto__);

return statearr_21379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.brainfuck.eval_brainfuck_txt = (function klipse$lang$brainfuck$eval_brainfuck_txt(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_21389){
var state_val_21390 = (state_21389[(1)]);
if((state_val_21390 === (1))){
var inst_21385 = klipse.lang.brainfuck.bf_txt.call(null,exp);
var inst_21386 = cljs.core.nth.call(null,inst_21385,(0),null);
var inst_21387 = cljs.core.nth.call(null,inst_21385,(1),null);
var state_21389__$1 = (function (){var statearr_21391 = state_21389;
(statearr_21391[(7)] = inst_21386);

return statearr_21391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21389__$1,inst_21387);
} else {
return null;
}
});
return (function() {
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto__ = null;
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto____0 = (function (){
var statearr_21392 = [null,null,null,null,null,null,null,null];
(statearr_21392[(0)] = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto__);

(statearr_21392[(1)] = (1));

return statearr_21392;
});
var klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto____1 = (function (state_21389){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_21389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e21393){if((e21393 instanceof Object)){
var ex__13611__auto__ = e21393;
var statearr_21394_21396 = state_21389;
(statearr_21394_21396[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21397 = state_21389;
state_21389 = G__21397;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto__ = function(state_21389){
switch(arguments.length){
case 0:
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto____1.call(this,state_21389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto____0;
klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto____1;
return klipse$lang$brainfuck$eval_brainfuck_txt_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_21395 = f__13705__auto__.call(null);
(statearr_21395[(6)] = c__13704__auto__);

return statearr_21395;
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

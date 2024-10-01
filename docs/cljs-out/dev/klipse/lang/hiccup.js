// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.hiccup');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('applied_science.js_interop');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('klipse_clj.lang.clojure');
klipse.lang.hiccup.transpile_hiccup = (function klipse$lang$hiccup$transpile_hiccup(src,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28456){
var state_val_28457 = (state_28456[(1)]);
if((state_val_28457 === (7))){
var inst_28431 = (state_28456[(7)]);
var state_28456__$1 = state_28456;
var statearr_28458_28475 = state_28456__$1;
(statearr_28458_28475[(2)] = inst_28431);

(statearr_28458_28475[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (1))){
var state_28456__$1 = state_28456;
var statearr_28459_28476 = state_28456__$1;
(statearr_28459_28476[(2)] = null);

(statearr_28459_28476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (4))){
var inst_28423 = (state_28456[(8)]);
var inst_28428 = (inst_28423["message"]);
var state_28456__$1 = state_28456;
var statearr_28460_28477 = state_28456__$1;
(statearr_28460_28477[(2)] = inst_28428);

(statearr_28460_28477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (6))){
var inst_28431 = (state_28456[(7)]);
var inst_28431__$1 = (state_28456[(2)]);
var state_28456__$1 = (function (){var statearr_28461 = state_28456;
(statearr_28461[(7)] = inst_28431__$1);

return statearr_28461;
})();
if(cljs.core.truth_(inst_28431__$1)){
var statearr_28462_28478 = state_28456__$1;
(statearr_28462_28478[(1)] = (7));

} else {
var statearr_28463_28479 = state_28456__$1;
(statearr_28463_28479[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (3))){
var inst_28423 = (state_28456[(8)]);
var inst_28423__$1 = (state_28456[(2)]);
var inst_28426 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_28423__$1,"message");
var state_28456__$1 = (function (){var statearr_28464 = state_28456;
(statearr_28464[(8)] = inst_28423__$1);

return statearr_28464;
})();
if(inst_28426){
var statearr_28465_28480 = state_28456__$1;
(statearr_28465_28480[(1)] = (4));

} else {
var statearr_28466_28481 = state_28456__$1;
(statearr_28466_28481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (2))){
var inst_28454 = (state_28456[(2)]);
var state_28456__$1 = state_28456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28456__$1,inst_28454);
} else {
if((state_val_28457 === (11))){
var inst_28450 = (state_28456[(2)]);
var inst_28451 = klipse_clj.lang.clojure.read_string.call(null,inst_28450);
var inst_28452 = html_beautify(inst_28451);
var state_28456__$1 = state_28456;
var statearr_28467_28482 = state_28456__$1;
(statearr_28467_28482[(2)] = inst_28452);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28456__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (9))){
var inst_28436 = (state_28456[(2)]);
var state_28456__$1 = state_28456;
var statearr_28468_28483 = state_28456__$1;
(statearr_28468_28483[(2)] = inst_28436);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28456__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (5))){
var state_28456__$1 = state_28456;
var statearr_28469_28484 = state_28456__$1;
(statearr_28469_28484[(2)] = null);

(statearr_28469_28484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28457 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28456,(3),Object,null,(2));
var inst_28440 = klipse_clj.lang.clojure.read_string.call(null,src);
var inst_28441 = new cljs.core.Symbol("hoquet.runtime","render-html","hoquet.runtime/render-html",182948796,null);
var inst_28442 = (new cljs.core.List(null,inst_28441,null,(1),null));
var inst_28443 = (new cljs.core.List(null,inst_28440,null,(1),null));
var inst_28444 = cljs.core.concat.call(null,inst_28442,inst_28443);
var inst_28445 = cljs.core.seq.call(null,inst_28444);
var inst_28446 = cljs.core.sequence.call(null,inst_28445);
var inst_28447 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28446);
var inst_28448 = klipse_clj.lang.clojure.str_eval_async.call(null,inst_28447,opts);
var state_28456__$1 = state_28456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28456__$1,(11),inst_28448);
} else {
if((state_val_28457 === (8))){
var inst_28423 = (state_28456[(8)]);
var inst_28434 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28423);
var state_28456__$1 = state_28456;
var statearr_28470_28485 = state_28456__$1;
(statearr_28470_28485[(2)] = inst_28434);

(statearr_28470_28485[(1)] = (9));


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
});
return (function() {
var klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto__ = null;
var klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto____0 = (function (){
var statearr_28471 = [null,null,null,null,null,null,null,null,null];
(statearr_28471[(0)] = klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto__);

(statearr_28471[(1)] = (1));

return statearr_28471;
});
var klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto____1 = (function (state_28456){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28472){if((e28472 instanceof Object)){
var ex__13611__auto__ = e28472;
var statearr_28473_28486 = state_28456;
(statearr_28473_28486[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28487 = state_28456;
state_28456 = G__28487;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto__ = function(state_28456){
switch(arguments.length){
case 0:
return klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto____1.call(this,state_28456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto____0;
klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto____1;
return klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28474 = f__13705__auto__.call(null);
(statearr_28474[(6)] = c__13704__auto__);

return statearr_28474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.hiccup.render_hiccup = (function klipse$lang$hiccup$render_hiccup(src,p__28488){
var map__28489 = p__28488;
var map__28489__$1 = cljs.core.__destructure_map.call(null,map__28489);
var opts = map__28489__$1;
var container = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28534){
var state_val_28535 = (state_28534[(1)]);
if((state_val_28535 === (7))){
var inst_28498 = (state_28534[(7)]);
var state_28534__$1 = state_28534;
var statearr_28536_28559 = state_28534__$1;
(statearr_28536_28559[(2)] = inst_28498);

(statearr_28536_28559[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (1))){
var state_28534__$1 = state_28534;
var statearr_28537_28560 = state_28534__$1;
(statearr_28537_28560[(2)] = null);

(statearr_28537_28560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (4))){
var inst_28490 = (state_28534[(8)]);
var inst_28495 = (inst_28490["message"]);
var state_28534__$1 = state_28534;
var statearr_28538_28561 = state_28534__$1;
(statearr_28538_28561[(2)] = inst_28495);

(statearr_28538_28561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (13))){
var inst_28526 = ({});
var state_28534__$1 = state_28534;
var statearr_28539_28562 = state_28534__$1;
(statearr_28539_28562[(2)] = inst_28526);

(statearr_28539_28562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (6))){
var inst_28498 = (state_28534[(7)]);
var inst_28498__$1 = (state_28534[(2)]);
var state_28534__$1 = (function (){var statearr_28540 = state_28534;
(statearr_28540[(7)] = inst_28498__$1);

return statearr_28540;
})();
if(cljs.core.truth_(inst_28498__$1)){
var statearr_28541_28563 = state_28534__$1;
(statearr_28541_28563[(1)] = (7));

} else {
var statearr_28542_28564 = state_28534__$1;
(statearr_28542_28564[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (3))){
var inst_28490 = (state_28534[(8)]);
var inst_28490__$1 = (state_28534[(2)]);
var inst_28493 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_28490__$1,"message");
var state_28534__$1 = (function (){var statearr_28543 = state_28534;
(statearr_28543[(8)] = inst_28490__$1);

return statearr_28543;
})();
if(inst_28493){
var statearr_28544_28565 = state_28534__$1;
(statearr_28544_28565[(1)] = (4));

} else {
var statearr_28545_28566 = state_28534__$1;
(statearr_28545_28566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (12))){
var state_28534__$1 = state_28534;
var statearr_28546_28567 = state_28534__$1;
(statearr_28546_28567[(2)] = container);

(statearr_28546_28567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (2))){
var inst_28532 = (state_28534[(2)]);
var state_28534__$1 = state_28534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28534__$1,inst_28532);
} else {
if((state_val_28535 === (11))){
var inst_28517 = (state_28534[(2)]);
var inst_28520 = (container == null);
var inst_28521 = cljs.core.not.call(null,inst_28520);
var state_28534__$1 = (function (){var statearr_28547 = state_28534;
(statearr_28547[(9)] = inst_28517);

return statearr_28547;
})();
if(inst_28521){
var statearr_28548_28568 = state_28534__$1;
(statearr_28548_28568[(1)] = (12));

} else {
var statearr_28549_28569 = state_28534__$1;
(statearr_28549_28569[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (9))){
var inst_28503 = (state_28534[(2)]);
var state_28534__$1 = state_28534;
var statearr_28550_28570 = state_28534__$1;
(statearr_28550_28570[(2)] = inst_28503);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28534__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (5))){
var state_28534__$1 = state_28534;
var statearr_28551_28571 = state_28534__$1;
(statearr_28551_28571[(2)] = null);

(statearr_28551_28571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (14))){
var inst_28517 = (state_28534[(9)]);
var inst_28528 = (state_28534[(2)]);
var inst_28529 = klipse_clj.lang.clojure.read_string.call(null,inst_28517);
var inst_28530 = (inst_28528["innerHTML"] = inst_28529);
var state_28534__$1 = (function (){var statearr_28552 = state_28534;
(statearr_28552[(10)] = inst_28530);

return statearr_28552;
})();
var statearr_28553_28572 = state_28534__$1;
(statearr_28553_28572[(2)] = inst_28528);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28534__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28535 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28534,(3),Object,null,(2));
var inst_28507 = klipse_clj.lang.clojure.read_string.call(null,src);
var inst_28508 = new cljs.core.Symbol("hoquet.runtime","render-html","hoquet.runtime/render-html",182948796,null);
var inst_28509 = (new cljs.core.List(null,inst_28508,null,(1),null));
var inst_28510 = (new cljs.core.List(null,inst_28507,null,(1),null));
var inst_28511 = cljs.core.concat.call(null,inst_28509,inst_28510);
var inst_28512 = cljs.core.seq.call(null,inst_28511);
var inst_28513 = cljs.core.sequence.call(null,inst_28512);
var inst_28514 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28513);
var inst_28515 = klipse_clj.lang.clojure.str_eval_async.call(null,inst_28514,opts);
var state_28534__$1 = state_28534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28534__$1,(11),inst_28515);
} else {
if((state_val_28535 === (8))){
var inst_28490 = (state_28534[(8)]);
var inst_28501 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28490);
var state_28534__$1 = state_28534;
var statearr_28554_28573 = state_28534__$1;
(statearr_28554_28573[(2)] = inst_28501);

(statearr_28554_28573[(1)] = (9));


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
});
return (function() {
var klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto__ = null;
var klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto____0 = (function (){
var statearr_28555 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28555[(0)] = klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto__);

(statearr_28555[(1)] = (1));

return statearr_28555;
});
var klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto____1 = (function (state_28534){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28556){if((e28556 instanceof Object)){
var ex__13611__auto__ = e28556;
var statearr_28557_28574 = state_28534;
(statearr_28557_28574[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28575 = state_28534;
state_28534 = G__28575;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto__ = function(state_28534){
switch(arguments.length){
case 0:
return klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto____1.call(this,state_28534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto____0;
klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto____1;
return klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28558 = f__13705__auto__.call(null);
(statearr_28558[(6)] = c__13704__auto__);

return statearr_28558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.hiccup.transpile_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"htmlmixed",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Var(function(){return klipse.lang.hiccup.transpile_hiccup;},new cljs.core.Symbol("klipse.lang.hiccup","transpile-hiccup","klipse.lang.hiccup/transpile-hiccup",-1031076710,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.lang.hiccup","klipse.lang.hiccup",835091413,null),new cljs.core.Symbol(null,"transpile-hiccup","transpile-hiccup",884633266,null),"target/public/cljs-out/dev/klipse/lang/hiccup.cljs",23,1,14,14,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(klipse.lang.hiccup.transpile_hiccup)?klipse.lang.hiccup.transpile_hiccup.cljs$lang$test:null)])),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure"),klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed"),klipse.common.registry.scripts_src.call(null,"beautify-html-1.11.0.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.lang.hiccup.render_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"clojure",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Var(function(){return klipse.lang.hiccup.render_hiccup;},new cljs.core.Symbol("klipse.lang.hiccup","render-hiccup","klipse.lang.hiccup/render-hiccup",-111724489,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.lang.hiccup","klipse.lang.hiccup",835091413,null),new cljs.core.Symbol(null,"render-hiccup","render-hiccup",-358574097,null),"target/public/cljs-out/dev/klipse/lang/hiccup.cljs",20,1,25,25,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"container","container",-96406180,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null)),null,(cljs.core.truth_(klipse.lang.hiccup.render_hiccup)?klipse.lang.hiccup.render_hiccup.cljs$lang$test:null)])),new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"transpile-hiccup","selector_transpile_hiccup",klipse.lang.hiccup.transpile_opts);
klipse.common.registry.register_mode.call(null,"render-hiccup","selector_render_hiccup",klipse.lang.hiccup.render_opts);

//# sourceMappingURL=hiccup.js.map

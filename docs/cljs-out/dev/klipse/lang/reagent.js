// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.reagent');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('klipse_clj.lang.clojure');
if((typeof klipse !== 'undefined') && (typeof klipse.lang !== 'undefined') && (typeof klipse.lang.reagent !== 'undefined') && (typeof klipse.lang.reagent.initialized !== 'undefined')){
} else {
klipse.lang.reagent.initialized = cljs.core.atom.call(null,false);
}
klipse.lang.reagent.init_reagent_BANG_ = (function klipse$lang$reagent$init_reagent_BANG_(opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28733){
var state_val_28734 = (state_28733[(1)]);
if((state_val_28734 === (1))){
var inst_28723 = cljs.core.deref.call(null,klipse.lang.reagent.initialized);
var state_28733__$1 = state_28733;
if(cljs.core.truth_(inst_28723)){
var statearr_28735_28744 = state_28733__$1;
(statearr_28735_28744[(1)] = (2));

} else {
var statearr_28736_28745 = state_28733__$1;
(statearr_28736_28745[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28734 === (2))){
var state_28733__$1 = state_28733;
var statearr_28737_28746 = state_28733__$1;
(statearr_28737_28746[(2)] = null);

(statearr_28737_28746[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28734 === (3))){
var inst_28726 = cljs.core.reset_BANG_.call(null,klipse.lang.reagent.initialized,true);
var inst_28727 = klipse_clj.lang.clojure.str_eval_async.call(null,"(require 'reagent.dom)",opts);
var state_28733__$1 = (function (){var statearr_28738 = state_28733;
(statearr_28738[(7)] = inst_28726);

return statearr_28738;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28733__$1,(5),inst_28727);
} else {
if((state_val_28734 === (4))){
var inst_28731 = (state_28733[(2)]);
var state_28733__$1 = state_28733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28733__$1,inst_28731);
} else {
if((state_val_28734 === (5))){
var inst_28729 = (state_28733[(2)]);
var state_28733__$1 = state_28733;
var statearr_28739_28747 = state_28733__$1;
(statearr_28739_28747[(2)] = inst_28729);

(statearr_28739_28747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto__ = null;
var klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto____0 = (function (){
var statearr_28740 = [null,null,null,null,null,null,null,null];
(statearr_28740[(0)] = klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto__);

(statearr_28740[(1)] = (1));

return statearr_28740;
});
var klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto____1 = (function (state_28733){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28741){if((e28741 instanceof Object)){
var ex__13611__auto__ = e28741;
var statearr_28742_28748 = state_28733;
(statearr_28742_28748[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28749 = state_28733;
state_28733 = G__28749;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto__ = function(state_28733){
switch(arguments.length){
case 0:
return klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto____1.call(this,state_28733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto____0;
klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto____1;
return klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28743 = f__13705__auto__.call(null);
(statearr_28743[(6)] = c__13704__auto__);

return statearr_28743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.reagent.eval_reagent = (function klipse$lang$reagent$eval_reagent(src,p__28750){
var map__28751 = p__28750;
var map__28751__$1 = cljs.core.__destructure_map.call(null,map__28751);
var opts = map__28751__$1;
var container_id = cljs.core.get.call(null,map__28751__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var container = cljs.core.get.call(null,map__28751__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28794){
var state_val_28795 = (state_28794[(1)]);
if((state_val_28795 === (1))){
var state_28794__$1 = state_28794;
var statearr_28796_28809 = state_28794__$1;
(statearr_28796_28809[(2)] = null);

(statearr_28796_28809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (2))){
var inst_28792 = (state_28794[(2)]);
var state_28794__$1 = state_28794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28794__$1,inst_28792);
} else {
if((state_val_28795 === (3))){
var inst_28752 = (state_28794[(2)]);
var inst_28753 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28752);
var inst_28754 = goog.dom.setTextContent(container,inst_28753);
var inst_28755 = cljs.core.async.chan.call(null);
var inst_28756 = cljs.core.async.close_BANG_.call(null,inst_28755);
var state_28794__$1 = (function (){var statearr_28797 = state_28794;
(statearr_28797[(7)] = inst_28754);

(statearr_28797[(8)] = inst_28756);

return statearr_28797;
})();
var statearr_28798_28810 = state_28794__$1;
(statearr_28798_28810[(2)] = inst_28755);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28794__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28794,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_28760 = klipse.lang.reagent.init_reagent_BANG_.call(null,opts);
var state_28794__$1 = state_28794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28794__$1,(5),inst_28760);
} else {
if((state_val_28795 === (5))){
var inst_28765 = (state_28794[(9)]);
var inst_28763 = (state_28794[(10)]);
var inst_28762 = (state_28794[(2)]);
var inst_28763__$1 = klipse_clj.lang.clojure.split_expressions.call(null,src);
var inst_28764 = cljs.core.last.call(null,inst_28763__$1);
var inst_28765__$1 = klipse_clj.lang.clojure.read_string.call(null,inst_28764);
var inst_28766 = cljs.core.vector_QMARK_.call(null,inst_28765__$1);
var state_28794__$1 = (function (){var statearr_28799 = state_28794;
(statearr_28799[(9)] = inst_28765__$1);

(statearr_28799[(11)] = inst_28762);

(statearr_28799[(10)] = inst_28763__$1);

return statearr_28799;
})();
if(inst_28766){
var statearr_28800_28811 = state_28794__$1;
(statearr_28800_28811[(1)] = (6));

} else {
var statearr_28801_28812 = state_28794__$1;
(statearr_28801_28812[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (6))){
var inst_28765 = (state_28794[(9)]);
var state_28794__$1 = state_28794;
var statearr_28802_28813 = state_28794__$1;
(statearr_28802_28813[(2)] = inst_28765);

(statearr_28802_28813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (7))){
var inst_28765 = (state_28794[(9)]);
var inst_28769 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28770 = [inst_28765];
var inst_28771 = (new cljs.core.PersistentVector(null,1,(5),inst_28769,inst_28770,null));
var state_28794__$1 = state_28794;
var statearr_28803_28814 = state_28794__$1;
(statearr_28803_28814[(2)] = inst_28771);

(statearr_28803_28814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28795 === (8))){
var inst_28763 = (state_28794[(10)]);
var inst_28773 = (state_28794[(2)]);
var inst_28774 = cljs.core.drop_last.call(null,(1),inst_28763);
var inst_28775 = clojure.string.join.call(null,"\n",inst_28774);
var inst_28776 = new cljs.core.Symbol("reagent.dom","render","reagent.dom/render",-1216356973,null);
var inst_28777 = (new cljs.core.List(null,inst_28776,null,(1),null));
var inst_28778 = (new cljs.core.List(null,inst_28773,null,(1),null));
var inst_28779 = new cljs.core.Symbol("js","document.getElementById","js/document.getElementById",2053304690,null);
var inst_28780 = (new cljs.core.List(null,inst_28779,null,(1),null));
var inst_28781 = (new cljs.core.List(null,container_id,null,(1),null));
var inst_28782 = cljs.core.concat.call(null,inst_28780,inst_28781);
var inst_28783 = cljs.core.seq.call(null,inst_28782);
var inst_28784 = cljs.core.sequence.call(null,inst_28783);
var inst_28785 = (new cljs.core.List(null,inst_28784,null,(1),null));
var inst_28786 = cljs.core.concat.call(null,inst_28777,inst_28778,inst_28785);
var inst_28787 = cljs.core.seq.call(null,inst_28786);
var inst_28788 = cljs.core.sequence.call(null,inst_28787);
var inst_28789 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28775),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28788)].join('');
var inst_28790 = klipse_clj.lang.clojure.str_eval_async.call(null,inst_28789,opts);
var state_28794__$1 = state_28794;
var statearr_28804_28815 = state_28794__$1;
(statearr_28804_28815[(2)] = inst_28790);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28794__$1);

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
var klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto__ = null;
var klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto____0 = (function (){
var statearr_28805 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28805[(0)] = klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto__);

(statearr_28805[(1)] = (1));

return statearr_28805;
});
var klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto____1 = (function (state_28794){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28806){if((e28806 instanceof Object)){
var ex__13611__auto__ = e28806;
var statearr_28807_28816 = state_28794;
(statearr_28807_28816[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28817 = state_28794;
state_28794 = G__28817;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto__ = function(state_28794){
switch(arguments.length){
case 0:
return klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto____1.call(this,state_28794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto____0;
klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto____1;
return klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28808 = f__13705__auto__.call(null);
(statearr_28808[(6)] = c__13704__auto__);

return statearr_28808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.reagent.run = (function klipse$lang$reagent$run(){
return reagent.dom.render(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(1)], null),document.getElementById("klipse-container-3"));
});
klipse.lang.reagent.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"clojure",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Var(function(){return klipse.lang.reagent.eval_reagent;},new cljs.core.Symbol("klipse.lang.reagent","eval-reagent","klipse.lang.reagent/eval-reagent",-829545859,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.lang.reagent","klipse.lang.reagent",-537421160,null),new cljs.core.Symbol(null,"eval-reagent","eval-reagent",993519351,null),"target/public/cljs-out/dev/klipse/lang/reagent.cljs",19,1,18,18,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"container-id","container-id",-1379770085,null),new cljs.core.Symbol(null,"container","container",-96406180,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null)),null,(cljs.core.truth_(klipse.lang.reagent.eval_reagent)?klipse.lang.reagent.eval_reagent.cljs$lang$test:null)])),new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"eval-reagent","selector_reagent",klipse.lang.reagent.opts);

//# sourceMappingURL=reagent.js.map

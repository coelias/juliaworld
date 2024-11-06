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
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_31419){
var state_val_31420 = (state_31419[(1)]);
if((state_val_31420 === (1))){
var inst_31409 = cljs.core.deref.call(null,klipse.lang.reagent.initialized);
var state_31419__$1 = state_31419;
if(cljs.core.truth_(inst_31409)){
var statearr_31421_31430 = state_31419__$1;
(statearr_31421_31430[(1)] = (2));

} else {
var statearr_31422_31431 = state_31419__$1;
(statearr_31422_31431[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31420 === (2))){
var state_31419__$1 = state_31419;
var statearr_31423_31432 = state_31419__$1;
(statearr_31423_31432[(2)] = null);

(statearr_31423_31432[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31420 === (3))){
var inst_31412 = cljs.core.reset_BANG_.call(null,klipse.lang.reagent.initialized,true);
var inst_31413 = klipse_clj.lang.clojure.str_eval_async.call(null,"(require 'reagent.dom)",opts);
var state_31419__$1 = (function (){var statearr_31424 = state_31419;
(statearr_31424[(7)] = inst_31412);

return statearr_31424;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31419__$1,(5),inst_31413);
} else {
if((state_val_31420 === (4))){
var inst_31417 = (state_31419[(2)]);
var state_31419__$1 = state_31419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31419__$1,inst_31417);
} else {
if((state_val_31420 === (5))){
var inst_31415 = (state_31419[(2)]);
var state_31419__$1 = state_31419;
var statearr_31425_31433 = state_31419__$1;
(statearr_31425_31433[(2)] = inst_31415);

(statearr_31425_31433[(1)] = (4));


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
var statearr_31426 = [null,null,null,null,null,null,null,null];
(statearr_31426[(0)] = klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto__);

(statearr_31426[(1)] = (1));

return statearr_31426;
});
var klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto____1 = (function (state_31419){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_31419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e31427){if((e31427 instanceof Object)){
var ex__13611__auto__ = e31427;
var statearr_31428_31434 = state_31419;
(statearr_31428_31434[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31435 = state_31419;
state_31419 = G__31435;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto__ = function(state_31419){
switch(arguments.length){
case 0:
return klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto____1.call(this,state_31419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto____0;
klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto____1;
return klipse$lang$reagent$init_reagent_BANG__$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_31429 = f__13705__auto__.call(null);
(statearr_31429[(6)] = c__13704__auto__);

return statearr_31429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.reagent.eval_reagent = (function klipse$lang$reagent$eval_reagent(src,p__31436){
var map__31437 = p__31436;
var map__31437__$1 = cljs.core.__destructure_map.call(null,map__31437);
var opts = map__31437__$1;
var container_id = cljs.core.get.call(null,map__31437__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var container = cljs.core.get.call(null,map__31437__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_31480){
var state_val_31481 = (state_31480[(1)]);
if((state_val_31481 === (1))){
var state_31480__$1 = state_31480;
var statearr_31482_31495 = state_31480__$1;
(statearr_31482_31495[(2)] = null);

(statearr_31482_31495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31481 === (2))){
var inst_31478 = (state_31480[(2)]);
var state_31480__$1 = state_31480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31480__$1,inst_31478);
} else {
if((state_val_31481 === (3))){
var inst_31438 = (state_31480[(2)]);
var inst_31439 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31438);
var inst_31440 = goog.dom.setTextContent(container,inst_31439);
var inst_31441 = cljs.core.async.chan.call(null);
var inst_31442 = cljs.core.async.close_BANG_.call(null,inst_31441);
var state_31480__$1 = (function (){var statearr_31483 = state_31480;
(statearr_31483[(7)] = inst_31440);

(statearr_31483[(8)] = inst_31442);

return statearr_31483;
})();
var statearr_31484_31496 = state_31480__$1;
(statearr_31484_31496[(2)] = inst_31441);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31480__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31481 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31480,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_31446 = klipse.lang.reagent.init_reagent_BANG_.call(null,opts);
var state_31480__$1 = state_31480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31480__$1,(5),inst_31446);
} else {
if((state_val_31481 === (5))){
var inst_31451 = (state_31480[(9)]);
var inst_31449 = (state_31480[(10)]);
var inst_31448 = (state_31480[(2)]);
var inst_31449__$1 = klipse_clj.lang.clojure.split_expressions.call(null,src);
var inst_31450 = cljs.core.last.call(null,inst_31449__$1);
var inst_31451__$1 = klipse_clj.lang.clojure.read_string.call(null,inst_31450);
var inst_31452 = cljs.core.vector_QMARK_.call(null,inst_31451__$1);
var state_31480__$1 = (function (){var statearr_31485 = state_31480;
(statearr_31485[(11)] = inst_31448);

(statearr_31485[(9)] = inst_31451__$1);

(statearr_31485[(10)] = inst_31449__$1);

return statearr_31485;
})();
if(inst_31452){
var statearr_31486_31497 = state_31480__$1;
(statearr_31486_31497[(1)] = (6));

} else {
var statearr_31487_31498 = state_31480__$1;
(statearr_31487_31498[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31481 === (6))){
var inst_31451 = (state_31480[(9)]);
var state_31480__$1 = state_31480;
var statearr_31488_31499 = state_31480__$1;
(statearr_31488_31499[(2)] = inst_31451);

(statearr_31488_31499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31481 === (7))){
var inst_31451 = (state_31480[(9)]);
var inst_31455 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31456 = [inst_31451];
var inst_31457 = (new cljs.core.PersistentVector(null,1,(5),inst_31455,inst_31456,null));
var state_31480__$1 = state_31480;
var statearr_31489_31500 = state_31480__$1;
(statearr_31489_31500[(2)] = inst_31457);

(statearr_31489_31500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31481 === (8))){
var inst_31449 = (state_31480[(10)]);
var inst_31459 = (state_31480[(2)]);
var inst_31460 = cljs.core.drop_last.call(null,(1),inst_31449);
var inst_31461 = clojure.string.join.call(null,"\n",inst_31460);
var inst_31462 = new cljs.core.Symbol("reagent.dom","render","reagent.dom/render",-1216356973,null);
var inst_31463 = (new cljs.core.List(null,inst_31462,null,(1),null));
var inst_31464 = (new cljs.core.List(null,inst_31459,null,(1),null));
var inst_31465 = new cljs.core.Symbol("js","document.getElementById","js/document.getElementById",2053304690,null);
var inst_31466 = (new cljs.core.List(null,inst_31465,null,(1),null));
var inst_31467 = (new cljs.core.List(null,container_id,null,(1),null));
var inst_31468 = cljs.core.concat.call(null,inst_31466,inst_31467);
var inst_31469 = cljs.core.seq.call(null,inst_31468);
var inst_31470 = cljs.core.sequence.call(null,inst_31469);
var inst_31471 = (new cljs.core.List(null,inst_31470,null,(1),null));
var inst_31472 = cljs.core.concat.call(null,inst_31463,inst_31464,inst_31471);
var inst_31473 = cljs.core.seq.call(null,inst_31472);
var inst_31474 = cljs.core.sequence.call(null,inst_31473);
var inst_31475 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31461),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31474)].join('');
var inst_31476 = klipse_clj.lang.clojure.str_eval_async.call(null,inst_31475,opts);
var state_31480__$1 = state_31480;
var statearr_31490_31501 = state_31480__$1;
(statearr_31490_31501[(2)] = inst_31476);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31480__$1);

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
var statearr_31491 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31491[(0)] = klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto__);

(statearr_31491[(1)] = (1));

return statearr_31491;
});
var klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto____1 = (function (state_31480){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_31480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e31492){if((e31492 instanceof Object)){
var ex__13611__auto__ = e31492;
var statearr_31493_31502 = state_31480;
(statearr_31493_31502[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31503 = state_31480;
state_31480 = G__31503;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto__ = function(state_31480){
switch(arguments.length){
case 0:
return klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto____1.call(this,state_31480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto____0;
klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto____1;
return klipse$lang$reagent$eval_reagent_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_31494 = f__13705__auto__.call(null);
(statearr_31494[(6)] = c__13704__auto__);

return statearr_31494;
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

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
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_33344){
var state_val_33345 = (state_33344[(1)]);
if((state_val_33345 === (1))){
var inst_33334 = cljs.core.deref.call(null,klipse.lang.reagent.initialized);
var state_33344__$1 = state_33344;
if(cljs.core.truth_(inst_33334)){
var statearr_33346_33355 = state_33344__$1;
(statearr_33346_33355[(1)] = (2));

} else {
var statearr_33347_33356 = state_33344__$1;
(statearr_33347_33356[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (2))){
var state_33344__$1 = state_33344;
var statearr_33348_33357 = state_33344__$1;
(statearr_33348_33357[(2)] = null);

(statearr_33348_33357[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (3))){
var inst_33337 = cljs.core.reset_BANG_.call(null,klipse.lang.reagent.initialized,true);
var inst_33338 = klipse_clj.lang.clojure.str_eval_async.call(null,"(require 'reagent.dom)",opts);
var state_33344__$1 = (function (){var statearr_33349 = state_33344;
(statearr_33349[(7)] = inst_33337);

return statearr_33349;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33344__$1,(5),inst_33338);
} else {
if((state_val_33345 === (4))){
var inst_33342 = (state_33344[(2)]);
var state_33344__$1 = state_33344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33344__$1,inst_33342);
} else {
if((state_val_33345 === (5))){
var inst_33340 = (state_33344[(2)]);
var state_33344__$1 = state_33344;
var statearr_33350_33358 = state_33344__$1;
(statearr_33350_33358[(2)] = inst_33340);

(statearr_33350_33358[(1)] = (4));


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
var klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto__ = null;
var klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto____0 = (function (){
var statearr_33351 = [null,null,null,null,null,null,null,null];
(statearr_33351[(0)] = klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto__);

(statearr_33351[(1)] = (1));

return statearr_33351;
});
var klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto____1 = (function (state_33344){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_33344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e33352){if((e33352 instanceof Object)){
var ex__15526__auto__ = e33352;
var statearr_33353_33359 = state_33344;
(statearr_33353_33359[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33360 = state_33344;
state_33344 = G__33360;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto__ = function(state_33344){
switch(arguments.length){
case 0:
return klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto____1.call(this,state_33344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto____0;
klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto____1;
return klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_33354 = f__15620__auto__.call(null);
(statearr_33354[(6)] = c__15619__auto__);

return statearr_33354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.reagent.eval_reagent = (function klipse$lang$reagent$eval_reagent(src,p__33361){
var map__33362 = p__33361;
var map__33362__$1 = cljs.core.__destructure_map.call(null,map__33362);
var opts = map__33362__$1;
var container_id = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var container = cljs.core.get.call(null,map__33362__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_33405){
var state_val_33406 = (state_33405[(1)]);
if((state_val_33406 === (1))){
var state_33405__$1 = state_33405;
var statearr_33407_33420 = state_33405__$1;
(statearr_33407_33420[(2)] = null);

(statearr_33407_33420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (2))){
var inst_33403 = (state_33405[(2)]);
var state_33405__$1 = state_33405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33405__$1,inst_33403);
} else {
if((state_val_33406 === (3))){
var inst_33363 = (state_33405[(2)]);
var inst_33364 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33363);
var inst_33365 = goog.dom.setTextContent(container,inst_33364);
var inst_33366 = cljs.core.async.chan.call(null);
var inst_33367 = cljs.core.async.close_BANG_.call(null,inst_33366);
var state_33405__$1 = (function (){var statearr_33408 = state_33405;
(statearr_33408[(7)] = inst_33367);

(statearr_33408[(8)] = inst_33365);

return statearr_33408;
})();
var statearr_33409_33421 = state_33405__$1;
(statearr_33409_33421[(2)] = inst_33366);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33405,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_33371 = klipse.lang.reagent.init_reagent_BANG_.call(null,opts);
var state_33405__$1 = state_33405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33405__$1,(5),inst_33371);
} else {
if((state_val_33406 === (5))){
var inst_33376 = (state_33405[(9)]);
var inst_33374 = (state_33405[(10)]);
var inst_33373 = (state_33405[(2)]);
var inst_33374__$1 = klipse_clj.lang.clojure.split_expressions.call(null,src);
var inst_33375 = cljs.core.last.call(null,inst_33374__$1);
var inst_33376__$1 = klipse_clj.lang.clojure.read_string.call(null,inst_33375);
var inst_33377 = cljs.core.vector_QMARK_.call(null,inst_33376__$1);
var state_33405__$1 = (function (){var statearr_33410 = state_33405;
(statearr_33410[(11)] = inst_33373);

(statearr_33410[(9)] = inst_33376__$1);

(statearr_33410[(10)] = inst_33374__$1);

return statearr_33410;
})();
if(inst_33377){
var statearr_33411_33422 = state_33405__$1;
(statearr_33411_33422[(1)] = (6));

} else {
var statearr_33412_33423 = state_33405__$1;
(statearr_33412_33423[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (6))){
var inst_33376 = (state_33405[(9)]);
var state_33405__$1 = state_33405;
var statearr_33413_33424 = state_33405__$1;
(statearr_33413_33424[(2)] = inst_33376);

(statearr_33413_33424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (7))){
var inst_33376 = (state_33405[(9)]);
var inst_33380 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33381 = [inst_33376];
var inst_33382 = (new cljs.core.PersistentVector(null,1,(5),inst_33380,inst_33381,null));
var state_33405__$1 = state_33405;
var statearr_33414_33425 = state_33405__$1;
(statearr_33414_33425[(2)] = inst_33382);

(statearr_33414_33425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33406 === (8))){
var inst_33374 = (state_33405[(10)]);
var inst_33384 = (state_33405[(2)]);
var inst_33385 = cljs.core.drop_last.call(null,(1),inst_33374);
var inst_33386 = clojure.string.join.call(null,"\n",inst_33385);
var inst_33387 = new cljs.core.Symbol("reagent.dom","render","reagent.dom/render",-1216356973,null);
var inst_33388 = (new cljs.core.List(null,inst_33387,null,(1),null));
var inst_33389 = (new cljs.core.List(null,inst_33384,null,(1),null));
var inst_33390 = new cljs.core.Symbol("js","document.getElementById","js/document.getElementById",2053304690,null);
var inst_33391 = (new cljs.core.List(null,inst_33390,null,(1),null));
var inst_33392 = (new cljs.core.List(null,container_id,null,(1),null));
var inst_33393 = cljs.core.concat.call(null,inst_33391,inst_33392);
var inst_33394 = cljs.core.seq.call(null,inst_33393);
var inst_33395 = cljs.core.sequence.call(null,inst_33394);
var inst_33396 = (new cljs.core.List(null,inst_33395,null,(1),null));
var inst_33397 = cljs.core.concat.call(null,inst_33388,inst_33389,inst_33396);
var inst_33398 = cljs.core.seq.call(null,inst_33397);
var inst_33399 = cljs.core.sequence.call(null,inst_33398);
var inst_33400 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33386),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33399)].join('');
var inst_33401 = klipse_clj.lang.clojure.str_eval_async.call(null,inst_33400,opts);
var state_33405__$1 = state_33405;
var statearr_33415_33426 = state_33405__$1;
(statearr_33415_33426[(2)] = inst_33401);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33405__$1);

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
var klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto__ = null;
var klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto____0 = (function (){
var statearr_33416 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33416[(0)] = klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto__);

(statearr_33416[(1)] = (1));

return statearr_33416;
});
var klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto____1 = (function (state_33405){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_33405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e33417){if((e33417 instanceof Object)){
var ex__15526__auto__ = e33417;
var statearr_33418_33427 = state_33405;
(statearr_33418_33427[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33428 = state_33405;
state_33405 = G__33428;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto__ = function(state_33405){
switch(arguments.length){
case 0:
return klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto____1.call(this,state_33405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto____0;
klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto____1;
return klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_33419 = f__15620__auto__.call(null);
(statearr_33419[(6)] = c__15619__auto__);

return statearr_33419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.reagent.run = (function klipse$lang$reagent$run(){
return reagent.dom.render(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(1)], null),document.getElementById("klipse-container-3"));
});
klipse.lang.reagent.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"clojure",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Var(function(){return klipse.lang.reagent.eval_reagent;},new cljs.core.Symbol("klipse.lang.reagent","eval-reagent","klipse.lang.reagent/eval-reagent",-829545859,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.lang.reagent","klipse.lang.reagent",-537421160,null),new cljs.core.Symbol(null,"eval-reagent","eval-reagent",993519351,null),"target/public/cljs-out/dev/klipse/lang/reagent.cljs",19,1,18,18,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"container-id","container-id",-1379770085,null),new cljs.core.Symbol(null,"container","container",-96406180,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null)),null,(cljs.core.truth_(klipse.lang.reagent.eval_reagent)?klipse.lang.reagent.eval_reagent.cljs$lang$test:null)])),new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"eval-reagent","selector_reagent",klipse.lang.reagent.opts);

//# sourceMappingURL=reagent.js.map

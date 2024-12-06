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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_33021){
var state_val_33022 = (state_33021[(1)]);
if((state_val_33022 === (1))){
var inst_33011 = cljs.core.deref.call(null,klipse.lang.reagent.initialized);
var state_33021__$1 = state_33021;
if(cljs.core.truth_(inst_33011)){
var statearr_33023_33032 = state_33021__$1;
(statearr_33023_33032[(1)] = (2));

} else {
var statearr_33024_33033 = state_33021__$1;
(statearr_33024_33033[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (2))){
var state_33021__$1 = state_33021;
var statearr_33025_33034 = state_33021__$1;
(statearr_33025_33034[(2)] = null);

(statearr_33025_33034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33022 === (3))){
var inst_33014 = cljs.core.reset_BANG_.call(null,klipse.lang.reagent.initialized,true);
var inst_33015 = klipse_clj.lang.clojure.str_eval_async.call(null,"(require 'reagent.dom)",opts);
var state_33021__$1 = (function (){var statearr_33026 = state_33021;
(statearr_33026[(7)] = inst_33014);

return statearr_33026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33021__$1,(5),inst_33015);
} else {
if((state_val_33022 === (4))){
var inst_33019 = (state_33021[(2)]);
var state_33021__$1 = state_33021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33021__$1,inst_33019);
} else {
if((state_val_33022 === (5))){
var inst_33017 = (state_33021[(2)]);
var state_33021__$1 = state_33021;
var statearr_33027_33035 = state_33021__$1;
(statearr_33027_33035[(2)] = inst_33017);

(statearr_33027_33035[(1)] = (4));


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
var statearr_33028 = [null,null,null,null,null,null,null,null];
(statearr_33028[(0)] = klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto__);

(statearr_33028[(1)] = (1));

return statearr_33028;
});
var klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto____1 = (function (state_33021){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_33021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e33029){if((e33029 instanceof Object)){
var ex__15526__auto__ = e33029;
var statearr_33030_33036 = state_33021;
(statearr_33030_33036[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33037 = state_33021;
state_33021 = G__33037;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto__ = function(state_33021){
switch(arguments.length){
case 0:
return klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto____1.call(this,state_33021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto____0;
klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto____1;
return klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_33031 = f__15620__auto__.call(null);
(statearr_33031[(6)] = c__15619__auto__);

return statearr_33031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.reagent.eval_reagent = (function klipse$lang$reagent$eval_reagent(src,p__33038){
var map__33039 = p__33038;
var map__33039__$1 = cljs.core.__destructure_map.call(null,map__33039);
var opts = map__33039__$1;
var container_id = cljs.core.get.call(null,map__33039__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var container = cljs.core.get.call(null,map__33039__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_33082){
var state_val_33083 = (state_33082[(1)]);
if((state_val_33083 === (1))){
var state_33082__$1 = state_33082;
var statearr_33084_33097 = state_33082__$1;
(statearr_33084_33097[(2)] = null);

(statearr_33084_33097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (2))){
var inst_33080 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33082__$1,inst_33080);
} else {
if((state_val_33083 === (3))){
var inst_33040 = (state_33082[(2)]);
var inst_33041 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33040);
var inst_33042 = goog.dom.setTextContent(container,inst_33041);
var inst_33043 = cljs.core.async.chan.call(null);
var inst_33044 = cljs.core.async.close_BANG_.call(null,inst_33043);
var state_33082__$1 = (function (){var statearr_33085 = state_33082;
(statearr_33085[(7)] = inst_33042);

(statearr_33085[(8)] = inst_33044);

return statearr_33085;
})();
var statearr_33086_33098 = state_33082__$1;
(statearr_33086_33098[(2)] = inst_33043);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33082__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33082,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_33048 = klipse.lang.reagent.init_reagent_BANG_.call(null,opts);
var state_33082__$1 = state_33082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33082__$1,(5),inst_33048);
} else {
if((state_val_33083 === (5))){
var inst_33051 = (state_33082[(9)]);
var inst_33053 = (state_33082[(10)]);
var inst_33050 = (state_33082[(2)]);
var inst_33051__$1 = klipse_clj.lang.clojure.split_expressions.call(null,src);
var inst_33052 = cljs.core.last.call(null,inst_33051__$1);
var inst_33053__$1 = klipse_clj.lang.clojure.read_string.call(null,inst_33052);
var inst_33054 = cljs.core.vector_QMARK_.call(null,inst_33053__$1);
var state_33082__$1 = (function (){var statearr_33087 = state_33082;
(statearr_33087[(11)] = inst_33050);

(statearr_33087[(9)] = inst_33051__$1);

(statearr_33087[(10)] = inst_33053__$1);

return statearr_33087;
})();
if(inst_33054){
var statearr_33088_33099 = state_33082__$1;
(statearr_33088_33099[(1)] = (6));

} else {
var statearr_33089_33100 = state_33082__$1;
(statearr_33089_33100[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (6))){
var inst_33053 = (state_33082[(10)]);
var state_33082__$1 = state_33082;
var statearr_33090_33101 = state_33082__$1;
(statearr_33090_33101[(2)] = inst_33053);

(statearr_33090_33101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (7))){
var inst_33053 = (state_33082[(10)]);
var inst_33057 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33058 = [inst_33053];
var inst_33059 = (new cljs.core.PersistentVector(null,1,(5),inst_33057,inst_33058,null));
var state_33082__$1 = state_33082;
var statearr_33091_33102 = state_33082__$1;
(statearr_33091_33102[(2)] = inst_33059);

(statearr_33091_33102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (8))){
var inst_33051 = (state_33082[(9)]);
var inst_33061 = (state_33082[(2)]);
var inst_33062 = cljs.core.drop_last.call(null,(1),inst_33051);
var inst_33063 = clojure.string.join.call(null,"\n",inst_33062);
var inst_33064 = new cljs.core.Symbol("reagent.dom","render","reagent.dom/render",-1216356973,null);
var inst_33065 = (new cljs.core.List(null,inst_33064,null,(1),null));
var inst_33066 = (new cljs.core.List(null,inst_33061,null,(1),null));
var inst_33067 = new cljs.core.Symbol("js","document.getElementById","js/document.getElementById",2053304690,null);
var inst_33068 = (new cljs.core.List(null,inst_33067,null,(1),null));
var inst_33069 = (new cljs.core.List(null,container_id,null,(1),null));
var inst_33070 = cljs.core.concat.call(null,inst_33068,inst_33069);
var inst_33071 = cljs.core.seq.call(null,inst_33070);
var inst_33072 = cljs.core.sequence.call(null,inst_33071);
var inst_33073 = (new cljs.core.List(null,inst_33072,null,(1),null));
var inst_33074 = cljs.core.concat.call(null,inst_33065,inst_33066,inst_33073);
var inst_33075 = cljs.core.seq.call(null,inst_33074);
var inst_33076 = cljs.core.sequence.call(null,inst_33075);
var inst_33077 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33063),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33076)].join('');
var inst_33078 = klipse_clj.lang.clojure.str_eval_async.call(null,inst_33077,opts);
var state_33082__$1 = state_33082;
var statearr_33092_33103 = state_33082__$1;
(statearr_33092_33103[(2)] = inst_33078);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33082__$1);

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
var statearr_33093 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33093[(0)] = klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto__);

(statearr_33093[(1)] = (1));

return statearr_33093;
});
var klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto____1 = (function (state_33082){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_33082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e33094){if((e33094 instanceof Object)){
var ex__15526__auto__ = e33094;
var statearr_33095_33104 = state_33082;
(statearr_33095_33104[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33105 = state_33082;
state_33082 = G__33105;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto__ = function(state_33082){
switch(arguments.length){
case 0:
return klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto____1.call(this,state_33082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto____0;
klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto____1;
return klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_33096 = f__15620__auto__.call(null);
(statearr_33096[(6)] = c__15619__auto__);

return statearr_33096;
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

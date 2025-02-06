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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32932){
var state_val_32933 = (state_32932[(1)]);
if((state_val_32933 === (1))){
var inst_32922 = cljs.core.deref.call(null,klipse.lang.reagent.initialized);
var state_32932__$1 = state_32932;
if(cljs.core.truth_(inst_32922)){
var statearr_32934_32943 = state_32932__$1;
(statearr_32934_32943[(1)] = (2));

} else {
var statearr_32935_32944 = state_32932__$1;
(statearr_32935_32944[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (2))){
var state_32932__$1 = state_32932;
var statearr_32936_32945 = state_32932__$1;
(statearr_32936_32945[(2)] = null);

(statearr_32936_32945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (3))){
var inst_32925 = cljs.core.reset_BANG_.call(null,klipse.lang.reagent.initialized,true);
var inst_32926 = klipse_clj.lang.clojure.str_eval_async.call(null,"(require 'reagent.dom)",opts);
var state_32932__$1 = (function (){var statearr_32937 = state_32932;
(statearr_32937[(7)] = inst_32925);

return statearr_32937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32932__$1,(5),inst_32926);
} else {
if((state_val_32933 === (4))){
var inst_32930 = (state_32932[(2)]);
var state_32932__$1 = state_32932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32932__$1,inst_32930);
} else {
if((state_val_32933 === (5))){
var inst_32928 = (state_32932[(2)]);
var state_32932__$1 = state_32932;
var statearr_32938_32946 = state_32932__$1;
(statearr_32938_32946[(2)] = inst_32928);

(statearr_32938_32946[(1)] = (4));


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
var statearr_32939 = [null,null,null,null,null,null,null,null];
(statearr_32939[(0)] = klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto__);

(statearr_32939[(1)] = (1));

return statearr_32939;
});
var klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto____1 = (function (state_32932){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32940){if((e32940 instanceof Object)){
var ex__15526__auto__ = e32940;
var statearr_32941_32947 = state_32932;
(statearr_32941_32947[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32948 = state_32932;
state_32932 = G__32948;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto__ = function(state_32932){
switch(arguments.length){
case 0:
return klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto____1.call(this,state_32932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto____0;
klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto____1;
return klipse$lang$reagent$init_reagent_BANG__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32942 = f__15620__auto__.call(null);
(statearr_32942[(6)] = c__15619__auto__);

return statearr_32942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.reagent.eval_reagent = (function klipse$lang$reagent$eval_reagent(src,p__32949){
var map__32950 = p__32949;
var map__32950__$1 = cljs.core.__destructure_map.call(null,map__32950);
var opts = map__32950__$1;
var container_id = cljs.core.get.call(null,map__32950__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var container = cljs.core.get.call(null,map__32950__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32993){
var state_val_32994 = (state_32993[(1)]);
if((state_val_32994 === (1))){
var state_32993__$1 = state_32993;
var statearr_32995_33008 = state_32993__$1;
(statearr_32995_33008[(2)] = null);

(statearr_32995_33008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (2))){
var inst_32991 = (state_32993[(2)]);
var state_32993__$1 = state_32993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32993__$1,inst_32991);
} else {
if((state_val_32994 === (3))){
var inst_32951 = (state_32993[(2)]);
var inst_32952 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32951);
var inst_32953 = goog.dom.setTextContent(container,inst_32952);
var inst_32954 = cljs.core.async.chan.call(null);
var inst_32955 = cljs.core.async.close_BANG_.call(null,inst_32954);
var state_32993__$1 = (function (){var statearr_32996 = state_32993;
(statearr_32996[(7)] = inst_32953);

(statearr_32996[(8)] = inst_32955);

return statearr_32996;
})();
var statearr_32997_33009 = state_32993__$1;
(statearr_32997_33009[(2)] = inst_32954);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32993__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32993,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_32959 = klipse.lang.reagent.init_reagent_BANG_.call(null,opts);
var state_32993__$1 = state_32993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32993__$1,(5),inst_32959);
} else {
if((state_val_32994 === (5))){
var inst_32964 = (state_32993[(9)]);
var inst_32962 = (state_32993[(10)]);
var inst_32961 = (state_32993[(2)]);
var inst_32962__$1 = klipse_clj.lang.clojure.split_expressions.call(null,src);
var inst_32963 = cljs.core.last.call(null,inst_32962__$1);
var inst_32964__$1 = klipse_clj.lang.clojure.read_string.call(null,inst_32963);
var inst_32965 = cljs.core.vector_QMARK_.call(null,inst_32964__$1);
var state_32993__$1 = (function (){var statearr_32998 = state_32993;
(statearr_32998[(9)] = inst_32964__$1);

(statearr_32998[(11)] = inst_32961);

(statearr_32998[(10)] = inst_32962__$1);

return statearr_32998;
})();
if(inst_32965){
var statearr_32999_33010 = state_32993__$1;
(statearr_32999_33010[(1)] = (6));

} else {
var statearr_33000_33011 = state_32993__$1;
(statearr_33000_33011[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (6))){
var inst_32964 = (state_32993[(9)]);
var state_32993__$1 = state_32993;
var statearr_33001_33012 = state_32993__$1;
(statearr_33001_33012[(2)] = inst_32964);

(statearr_33001_33012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (7))){
var inst_32964 = (state_32993[(9)]);
var inst_32968 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32969 = [inst_32964];
var inst_32970 = (new cljs.core.PersistentVector(null,1,(5),inst_32968,inst_32969,null));
var state_32993__$1 = state_32993;
var statearr_33002_33013 = state_32993__$1;
(statearr_33002_33013[(2)] = inst_32970);

(statearr_33002_33013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32994 === (8))){
var inst_32962 = (state_32993[(10)]);
var inst_32972 = (state_32993[(2)]);
var inst_32973 = cljs.core.drop_last.call(null,(1),inst_32962);
var inst_32974 = clojure.string.join.call(null,"\n",inst_32973);
var inst_32975 = new cljs.core.Symbol("reagent.dom","render","reagent.dom/render",-1216356973,null);
var inst_32976 = (new cljs.core.List(null,inst_32975,null,(1),null));
var inst_32977 = (new cljs.core.List(null,inst_32972,null,(1),null));
var inst_32978 = new cljs.core.Symbol("js","document.getElementById","js/document.getElementById",2053304690,null);
var inst_32979 = (new cljs.core.List(null,inst_32978,null,(1),null));
var inst_32980 = (new cljs.core.List(null,container_id,null,(1),null));
var inst_32981 = cljs.core.concat.call(null,inst_32979,inst_32980);
var inst_32982 = cljs.core.seq.call(null,inst_32981);
var inst_32983 = cljs.core.sequence.call(null,inst_32982);
var inst_32984 = (new cljs.core.List(null,inst_32983,null,(1),null));
var inst_32985 = cljs.core.concat.call(null,inst_32976,inst_32977,inst_32984);
var inst_32986 = cljs.core.seq.call(null,inst_32985);
var inst_32987 = cljs.core.sequence.call(null,inst_32986);
var inst_32988 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32974),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32987)].join('');
var inst_32989 = klipse_clj.lang.clojure.str_eval_async.call(null,inst_32988,opts);
var state_32993__$1 = state_32993;
var statearr_33003_33014 = state_32993__$1;
(statearr_33003_33014[(2)] = inst_32989);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32993__$1);

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
var statearr_33004 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33004[(0)] = klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto__);

(statearr_33004[(1)] = (1));

return statearr_33004;
});
var klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto____1 = (function (state_32993){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e33005){if((e33005 instanceof Object)){
var ex__15526__auto__ = e33005;
var statearr_33006_33015 = state_32993;
(statearr_33006_33015[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33016 = state_32993;
state_32993 = G__33016;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto__ = function(state_32993){
switch(arguments.length){
case 0:
return klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto____1.call(this,state_32993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto____0;
klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto____1;
return klipse$lang$reagent$eval_reagent_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_33007 = f__15620__auto__.call(null);
(statearr_33007[(6)] = c__15619__auto__);

return statearr_33007;
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

// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.php');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.php.load_php_engine = (function klipse$lang$php$load_php_engine(){
var obj__20025__auto__ = uniter;
var f__20026__auto__ = (function (){var obj30613 = obj__20025__auto__;
var k30614 = "createEngine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30613,k30614)){
return (obj30613[k30614]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,"PHP");
});
klipse.lang.php.execute = (function klipse$lang$php$execute(engine,input){
var obj__20025__auto__ = engine;
var f__20026__auto__ = (function (){var obj30615 = obj__20025__auto__;
var k30616 = "execute";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30615,k30616)){
return (obj30615[k30616]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,input);
});
klipse.lang.php.str_eval_async = (function klipse$lang$php$str_eval_async(exp,_){
var c = cljs.core.async.chan.call(null);
var php_exp = ["<?php",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp)].join('');
var c__15619__auto___30687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_30660){
var state_val_30661 = (state_30660[(1)]);
if((state_val_30661 === (7))){
var inst_30619 = (state_30660[(7)]);
var inst_30628 = (state_30660[(8)]);
var inst_30636 = (state_30660[(2)]);
var inst_30637 = (function (){var php_engine = inst_30619;
var $ = inst_30628;
var obj__20025__auto__ = inst_30628;
var f__20026__auto__ = inst_30636;
return (function (p1__30617_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30617_SHARP_));
});
})();
var inst_30638 = inst_30636.call(inst_30628,"data",inst_30637);
var inst_30641 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_30619,"getStdout");
var state_30660__$1 = (function (){var statearr_30662 = state_30660;
(statearr_30662[(9)] = inst_30638);

return statearr_30662;
})();
if(inst_30641){
var statearr_30663_30688 = state_30660__$1;
(statearr_30663_30688[(1)] = (8));

} else {
var statearr_30664_30689 = state_30660__$1;
(statearr_30664_30689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (1))){
var inst_30619 = (state_30660[(7)]);
var inst_30619__$1 = klipse.lang.php.load_php_engine.call(null);
var inst_30622 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_30619__$1,"getStderr");
var state_30660__$1 = (function (){var statearr_30665 = state_30660;
(statearr_30665[(7)] = inst_30619__$1);

return statearr_30665;
})();
if(inst_30622){
var statearr_30666_30690 = state_30660__$1;
(statearr_30666_30690[(1)] = (2));

} else {
var statearr_30667_30691 = state_30660__$1;
(statearr_30667_30691[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (4))){
var inst_30619 = (state_30660[(7)]);
var inst_30628 = (state_30660[(8)]);
var inst_30627 = (state_30660[(2)]);
var inst_30628__$1 = inst_30627.call(inst_30619);
var inst_30631 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_30628__$1,"on");
var state_30660__$1 = (function (){var statearr_30668 = state_30660;
(statearr_30668[(8)] = inst_30628__$1);

return statearr_30668;
})();
if(inst_30631){
var statearr_30669_30692 = state_30660__$1;
(statearr_30669_30692[(1)] = (5));

} else {
var statearr_30670_30693 = state_30660__$1;
(statearr_30670_30693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (13))){
var inst_30619 = (state_30660[(7)]);
var inst_30647 = (state_30660[(10)]);
var inst_30655 = (state_30660[(2)]);
var inst_30656 = (function (){var php_engine = inst_30619;
var $ = inst_30647;
var obj__20025__auto__ = inst_30647;
var f__20026__auto__ = inst_30655;
return (function (p1__30618_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30618_SHARP_));
});
})();
var inst_30657 = inst_30655.call(inst_30647,"data",inst_30656);
var inst_30658 = klipse.lang.php.execute.call(null,inst_30619,php_exp);
var state_30660__$1 = (function (){var statearr_30671 = state_30660;
(statearr_30671[(11)] = inst_30657);

return statearr_30671;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30660__$1,inst_30658);
} else {
if((state_val_30661 === (6))){
var state_30660__$1 = state_30660;
var statearr_30672_30694 = state_30660__$1;
(statearr_30672_30694[(2)] = null);

(statearr_30672_30694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (3))){
var state_30660__$1 = state_30660;
var statearr_30673_30695 = state_30660__$1;
(statearr_30673_30695[(2)] = null);

(statearr_30673_30695[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (12))){
var state_30660__$1 = state_30660;
var statearr_30674_30696 = state_30660__$1;
(statearr_30674_30696[(2)] = null);

(statearr_30674_30696[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (2))){
var inst_30619 = (state_30660[(7)]);
var inst_30624 = (inst_30619["getStderr"]);
var state_30660__$1 = state_30660;
var statearr_30675_30697 = state_30660__$1;
(statearr_30675_30697[(2)] = inst_30624);

(statearr_30675_30697[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (11))){
var inst_30647 = (state_30660[(10)]);
var inst_30652 = (inst_30647["on"]);
var state_30660__$1 = state_30660;
var statearr_30676_30698 = state_30660__$1;
(statearr_30676_30698[(2)] = inst_30652);

(statearr_30676_30698[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (9))){
var state_30660__$1 = state_30660;
var statearr_30677_30699 = state_30660__$1;
(statearr_30677_30699[(2)] = null);

(statearr_30677_30699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (5))){
var inst_30628 = (state_30660[(8)]);
var inst_30633 = (inst_30628["on"]);
var state_30660__$1 = state_30660;
var statearr_30678_30700 = state_30660__$1;
(statearr_30678_30700[(2)] = inst_30633);

(statearr_30678_30700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (10))){
var inst_30619 = (state_30660[(7)]);
var inst_30647 = (state_30660[(10)]);
var inst_30646 = (state_30660[(2)]);
var inst_30647__$1 = inst_30646.call(inst_30619);
var inst_30650 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_30647__$1,"on");
var state_30660__$1 = (function (){var statearr_30679 = state_30660;
(statearr_30679[(10)] = inst_30647__$1);

return statearr_30679;
})();
if(inst_30650){
var statearr_30680_30701 = state_30660__$1;
(statearr_30680_30701[(1)] = (11));

} else {
var statearr_30681_30702 = state_30660__$1;
(statearr_30681_30702[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (8))){
var inst_30619 = (state_30660[(7)]);
var inst_30643 = (inst_30619["getStdout"]);
var state_30660__$1 = state_30660;
var statearr_30682_30703 = state_30660__$1;
(statearr_30682_30703[(2)] = inst_30643);

(statearr_30682_30703[(1)] = (10));


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
});
return (function() {
var klipse$lang$php$str_eval_async_$_state_machine__15523__auto__ = null;
var klipse$lang$php$str_eval_async_$_state_machine__15523__auto____0 = (function (){
var statearr_30683 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30683[(0)] = klipse$lang$php$str_eval_async_$_state_machine__15523__auto__);

(statearr_30683[(1)] = (1));

return statearr_30683;
});
var klipse$lang$php$str_eval_async_$_state_machine__15523__auto____1 = (function (state_30660){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_30660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e30684){if((e30684 instanceof Object)){
var ex__15526__auto__ = e30684;
var statearr_30685_30704 = state_30660;
(statearr_30685_30704[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30705 = state_30660;
state_30660 = G__30705;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$php$str_eval_async_$_state_machine__15523__auto__ = function(state_30660){
switch(arguments.length){
case 0:
return klipse$lang$php$str_eval_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$php$str_eval_async_$_state_machine__15523__auto____1.call(this,state_30660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$php$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$php$str_eval_async_$_state_machine__15523__auto____0;
klipse$lang$php$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$php$str_eval_async_$_state_machine__15523__auto____1;
return klipse$lang$php$str_eval_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_30686 = f__15620__auto__.call(null);
(statearr_30686[(6)] = c__15619__auto___30687);

return statearr_30686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return c;
});
klipse.lang.php.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-php",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-php",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.php.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"clike"),klipse.common.registry.codemirror_mode_src.call(null,"php"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"css"),klipse.common.registry.scripts_src.call(null,"uniter.js?r")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-php","selector_eval_php",klipse.lang.php.opts);

//# sourceMappingURL=php.js.map

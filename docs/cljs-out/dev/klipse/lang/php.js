// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.php');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.php.load_php_engine = (function klipse$lang$php$load_php_engine(){
var obj__17203__auto__ = uniter;
var f__17204__auto__ = (function (){var obj21429 = obj__17203__auto__;
var k21430 = "createEngine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21429,k21430)){
return (obj21429[k21430]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,"PHP");
});
klipse.lang.php.execute = (function klipse$lang$php$execute(engine,input){
var obj__17203__auto__ = engine;
var f__17204__auto__ = (function (){var obj21431 = obj__17203__auto__;
var k21432 = "execute";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21431,k21432)){
return (obj21431[k21432]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,input);
});
klipse.lang.php.str_eval_async = (function klipse$lang$php$str_eval_async(exp,_){
var c = cljs.core.async.chan.call(null);
var php_exp = ["<?php",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp)].join('');
var c__13704__auto___21503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_21476){
var state_val_21477 = (state_21476[(1)]);
if((state_val_21477 === (7))){
var inst_21435 = (state_21476[(7)]);
var inst_21444 = (state_21476[(8)]);
var inst_21452 = (state_21476[(2)]);
var inst_21453 = (function (){var php_engine = inst_21435;
var $ = inst_21444;
var obj__17203__auto__ = inst_21444;
var f__17204__auto__ = inst_21452;
return (function (p1__21433_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21433_SHARP_));
});
})();
var inst_21454 = inst_21452.call(inst_21444,"data",inst_21453);
var inst_21457 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_21435,"getStdout");
var state_21476__$1 = (function (){var statearr_21478 = state_21476;
(statearr_21478[(9)] = inst_21454);

return statearr_21478;
})();
if(inst_21457){
var statearr_21479_21504 = state_21476__$1;
(statearr_21479_21504[(1)] = (8));

} else {
var statearr_21480_21505 = state_21476__$1;
(statearr_21480_21505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (1))){
var inst_21435 = (state_21476[(7)]);
var inst_21435__$1 = klipse.lang.php.load_php_engine.call(null);
var inst_21438 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_21435__$1,"getStderr");
var state_21476__$1 = (function (){var statearr_21481 = state_21476;
(statearr_21481[(7)] = inst_21435__$1);

return statearr_21481;
})();
if(inst_21438){
var statearr_21482_21506 = state_21476__$1;
(statearr_21482_21506[(1)] = (2));

} else {
var statearr_21483_21507 = state_21476__$1;
(statearr_21483_21507[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (4))){
var inst_21435 = (state_21476[(7)]);
var inst_21444 = (state_21476[(8)]);
var inst_21443 = (state_21476[(2)]);
var inst_21444__$1 = inst_21443.call(inst_21435);
var inst_21447 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_21444__$1,"on");
var state_21476__$1 = (function (){var statearr_21484 = state_21476;
(statearr_21484[(8)] = inst_21444__$1);

return statearr_21484;
})();
if(inst_21447){
var statearr_21485_21508 = state_21476__$1;
(statearr_21485_21508[(1)] = (5));

} else {
var statearr_21486_21509 = state_21476__$1;
(statearr_21486_21509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (13))){
var inst_21463 = (state_21476[(10)]);
var inst_21435 = (state_21476[(7)]);
var inst_21471 = (state_21476[(2)]);
var inst_21472 = (function (){var php_engine = inst_21435;
var $ = inst_21463;
var obj__17203__auto__ = inst_21463;
var f__17204__auto__ = inst_21471;
return (function (p1__21434_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21434_SHARP_));
});
})();
var inst_21473 = inst_21471.call(inst_21463,"data",inst_21472);
var inst_21474 = klipse.lang.php.execute.call(null,inst_21435,php_exp);
var state_21476__$1 = (function (){var statearr_21487 = state_21476;
(statearr_21487[(11)] = inst_21473);

return statearr_21487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21476__$1,inst_21474);
} else {
if((state_val_21477 === (6))){
var state_21476__$1 = state_21476;
var statearr_21488_21510 = state_21476__$1;
(statearr_21488_21510[(2)] = null);

(statearr_21488_21510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (3))){
var state_21476__$1 = state_21476;
var statearr_21489_21511 = state_21476__$1;
(statearr_21489_21511[(2)] = null);

(statearr_21489_21511[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (12))){
var state_21476__$1 = state_21476;
var statearr_21490_21512 = state_21476__$1;
(statearr_21490_21512[(2)] = null);

(statearr_21490_21512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (2))){
var inst_21435 = (state_21476[(7)]);
var inst_21440 = (inst_21435["getStderr"]);
var state_21476__$1 = state_21476;
var statearr_21491_21513 = state_21476__$1;
(statearr_21491_21513[(2)] = inst_21440);

(statearr_21491_21513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (11))){
var inst_21463 = (state_21476[(10)]);
var inst_21468 = (inst_21463["on"]);
var state_21476__$1 = state_21476;
var statearr_21492_21514 = state_21476__$1;
(statearr_21492_21514[(2)] = inst_21468);

(statearr_21492_21514[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (9))){
var state_21476__$1 = state_21476;
var statearr_21493_21515 = state_21476__$1;
(statearr_21493_21515[(2)] = null);

(statearr_21493_21515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (5))){
var inst_21444 = (state_21476[(8)]);
var inst_21449 = (inst_21444["on"]);
var state_21476__$1 = state_21476;
var statearr_21494_21516 = state_21476__$1;
(statearr_21494_21516[(2)] = inst_21449);

(statearr_21494_21516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (10))){
var inst_21463 = (state_21476[(10)]);
var inst_21435 = (state_21476[(7)]);
var inst_21462 = (state_21476[(2)]);
var inst_21463__$1 = inst_21462.call(inst_21435);
var inst_21466 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_21463__$1,"on");
var state_21476__$1 = (function (){var statearr_21495 = state_21476;
(statearr_21495[(10)] = inst_21463__$1);

return statearr_21495;
})();
if(inst_21466){
var statearr_21496_21517 = state_21476__$1;
(statearr_21496_21517[(1)] = (11));

} else {
var statearr_21497_21518 = state_21476__$1;
(statearr_21497_21518[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (8))){
var inst_21435 = (state_21476[(7)]);
var inst_21459 = (inst_21435["getStdout"]);
var state_21476__$1 = state_21476;
var statearr_21498_21519 = state_21476__$1;
(statearr_21498_21519[(2)] = inst_21459);

(statearr_21498_21519[(1)] = (10));


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
var klipse$lang$php$str_eval_async_$_state_machine__13608__auto__ = null;
var klipse$lang$php$str_eval_async_$_state_machine__13608__auto____0 = (function (){
var statearr_21499 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21499[(0)] = klipse$lang$php$str_eval_async_$_state_machine__13608__auto__);

(statearr_21499[(1)] = (1));

return statearr_21499;
});
var klipse$lang$php$str_eval_async_$_state_machine__13608__auto____1 = (function (state_21476){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_21476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e21500){if((e21500 instanceof Object)){
var ex__13611__auto__ = e21500;
var statearr_21501_21520 = state_21476;
(statearr_21501_21520[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21521 = state_21476;
state_21476 = G__21521;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$php$str_eval_async_$_state_machine__13608__auto__ = function(state_21476){
switch(arguments.length){
case 0:
return klipse$lang$php$str_eval_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$php$str_eval_async_$_state_machine__13608__auto____1.call(this,state_21476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$php$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$php$str_eval_async_$_state_machine__13608__auto____0;
klipse$lang$php$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$php$str_eval_async_$_state_machine__13608__auto____1;
return klipse$lang$php$str_eval_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_21502 = f__13705__auto__.call(null);
(statearr_21502[(6)] = c__13704__auto___21503);

return statearr_21502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return c;
});
klipse.lang.php.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-php",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-php",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.php.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"clike"),klipse.common.registry.codemirror_mode_src.call(null,"php"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"css"),klipse.common.registry.scripts_src.call(null,"uniter.js?r")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-php","selector_eval_php",klipse.lang.php.opts);

//# sourceMappingURL=php.js.map

// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.jsx');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.jsx.babel = (function klipse$lang$jsx$babel(src){
return ((function (){var obj__20025__auto__ = Babel;
var f__20026__auto__ = (function (){var obj29469 = obj__20025__auto__;
var k29470 = "transform";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29469,k29470)){
return (obj29469[k29470]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,src,({"presets": ["react"]}));
})()["code"]);
});
klipse.lang.jsx.eval_jsx = (function klipse$lang$jsx$eval_jsx(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29481){
var state_val_29482 = (state_29481[(1)]);
if((state_val_29482 === (1))){
var state_29481__$1 = state_29481;
var statearr_29483_29491 = state_29481__$1;
(statearr_29483_29491[(2)] = null);

(statearr_29483_29491[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (2))){
var inst_29479 = (state_29481[(2)]);
var state_29481__$1 = state_29481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29481__$1,inst_29479);
} else {
if((state_val_29482 === (3))){
var inst_29471 = (state_29481[(2)]);
var inst_29472 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29471);
var state_29481__$1 = state_29481;
var statearr_29484_29492 = state_29481__$1;
(statearr_29484_29492[(2)] = inst_29472);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29482 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29481,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_29476 = klipse.lang.jsx.babel.call(null,exp);
var inst_29477 = klipse.utils.eval_in_global_scope.call(null,inst_29476);
var state_29481__$1 = (function (){var statearr_29485 = state_29481;
(statearr_29485[(7)] = inst_29477);

return statearr_29485;
})();
var statearr_29486_29493 = state_29481__$1;
(statearr_29486_29493[(2)] = "//Evaluation done");


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto__ = null;
var klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto____0 = (function (){
var statearr_29487 = [null,null,null,null,null,null,null,null];
(statearr_29487[(0)] = klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto__);

(statearr_29487[(1)] = (1));

return statearr_29487;
});
var klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto____1 = (function (state_29481){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29488){if((e29488 instanceof Object)){
var ex__15526__auto__ = e29488;
var statearr_29489_29494 = state_29481;
(statearr_29489_29494[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29495 = state_29481;
state_29481 = G__29495;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto__ = function(state_29481){
switch(arguments.length){
case 0:
return klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto____1.call(this,state_29481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto____0;
klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto____1;
return klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29490 = f__15620__auto__.call(null);
(statearr_29490[(6)] = c__15619__auto__);

return statearr_29490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.jsx.render_jsx_STAR_ = (function klipse$lang$jsx$render_jsx_STAR_(exp,p__29496){
var map__29497 = p__29496;
var map__29497__$1 = cljs.core.__destructure_map.call(null,map__29497);
var container_id = cljs.core.get.call(null,map__29497__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{klipse.lang.jsx.babel.call(null,exp);

var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("render-jsx - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,klipse.lang.jsx.babel.call(null,wrapped_exp));
}catch (e29498){var e = e29498;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.jsx.render_jsx = (function klipse$lang$jsx$render_jsx(exp,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29501){
var state_val_29502 = (state_29501[(1)]);
if((state_val_29502 === (1))){
var inst_29499 = klipse.lang.jsx.render_jsx_STAR_.call(null,exp,opts);
var state_29501__$1 = state_29501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29501__$1,inst_29499);
} else {
return null;
}
});
return (function() {
var klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__ = null;
var klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____0 = (function (){
var statearr_29503 = [null,null,null,null,null,null,null];
(statearr_29503[(0)] = klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__);

(statearr_29503[(1)] = (1));

return statearr_29503;
});
var klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____1 = (function (state_29501){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29504){if((e29504 instanceof Object)){
var ex__15526__auto__ = e29504;
var statearr_29505_29507 = state_29501;
(statearr_29505_29507[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29508 = state_29501;
state_29501 = G__29508;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__ = function(state_29501){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____1.call(this,state_29501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____0;
klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____1;
return klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29506 = f__15620__auto__.call(null);
(statearr_29506[(6)] = c__15619__auto__);

return statearr_29506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.jsx.render_react_STAR_ = (function klipse$lang$jsx$render_react_STAR_(exp,p__29509){
var map__29510 = p__29509;
var map__29510__$1 = cljs.core.__destructure_map.call(null,map__29510);
var container_id = cljs.core.get.call(null,map__29510__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("render-react - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,wrapped_exp);
}catch (e29511){var e = e29511;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.jsx.render_react = (function klipse$lang$jsx$render_react(exp,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29514){
var state_val_29515 = (state_29514[(1)]);
if((state_val_29515 === (1))){
var inst_29512 = klipse.lang.jsx.render_react_STAR_.call(null,exp,opts);
var state_29514__$1 = state_29514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29514__$1,inst_29512);
} else {
return null;
}
});
return (function() {
var klipse$lang$jsx$render_react_$_state_machine__15523__auto__ = null;
var klipse$lang$jsx$render_react_$_state_machine__15523__auto____0 = (function (){
var statearr_29516 = [null,null,null,null,null,null,null];
(statearr_29516[(0)] = klipse$lang$jsx$render_react_$_state_machine__15523__auto__);

(statearr_29516[(1)] = (1));

return statearr_29516;
});
var klipse$lang$jsx$render_react_$_state_machine__15523__auto____1 = (function (state_29514){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29517){if((e29517 instanceof Object)){
var ex__15526__auto__ = e29517;
var statearr_29518_29520 = state_29514;
(statearr_29518_29520[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29521 = state_29514;
state_29514 = G__29521;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$jsx$render_react_$_state_machine__15523__auto__ = function(state_29514){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_react_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_react_$_state_machine__15523__auto____1.call(this,state_29514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$render_react_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_react_$_state_machine__15523__auto____0;
klipse$lang$jsx$render_react_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_react_$_state_machine__15523__auto____1;
return klipse$lang$jsx$render_react_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29519 = f__15620__auto__.call(null);
(statearr_29519[(6)] = c__15619__auto__);

return statearr_29519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.jsx.transpile_jsx = (function klipse$lang$jsx$transpile_jsx(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29531){
var state_val_29532 = (state_29531[(1)]);
if((state_val_29532 === (1))){
var state_29531__$1 = state_29531;
var statearr_29533_29540 = state_29531__$1;
(statearr_29533_29540[(2)] = null);

(statearr_29533_29540[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29532 === (2))){
var inst_29529 = (state_29531[(2)]);
var state_29531__$1 = state_29531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29531__$1,inst_29529);
} else {
if((state_val_29532 === (3))){
var inst_29522 = (state_29531[(2)]);
var inst_29523 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29522);
var state_29531__$1 = state_29531;
var statearr_29534_29541 = state_29531__$1;
(statearr_29534_29541[(2)] = inst_29523);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29531__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29532 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29531,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_29527 = klipse.lang.jsx.babel.call(null,exp);
var state_29531__$1 = state_29531;
var statearr_29535_29542 = state_29531__$1;
(statearr_29535_29542[(2)] = inst_29527);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29531__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto__ = null;
var klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto____0 = (function (){
var statearr_29536 = [null,null,null,null,null,null,null];
(statearr_29536[(0)] = klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto__);

(statearr_29536[(1)] = (1));

return statearr_29536;
});
var klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto____1 = (function (state_29531){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29537){if((e29537 instanceof Object)){
var ex__15526__auto__ = e29537;
var statearr_29538_29543 = state_29531;
(statearr_29538_29543[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29544 = state_29531;
state_29531 = G__29544;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto__ = function(state_29531){
switch(arguments.length){
case 0:
return klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto____1.call(this,state_29531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto____0;
klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto____1;
return klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29539 = f__15620__auto__.call(null);
(statearr_29539[(6)] = c__15619__auto__);

return statearr_29539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.jsx.eval_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/jsx",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.eval_jsx,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"jsx"),klipse.common.registry.scripts_src.call(null,"babel.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.lang.jsx.transpile_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/jsx",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.transpile_jsx,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"jsx"),klipse.common.registry.scripts_src.call(null,"babel.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.lang.jsx.render_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/jsx",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.render_jsx,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"jsx"),klipse.common.registry.scripts_src.call(null,"babel.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.lang.jsx.render_react_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.jsx.render_react,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-jsx","selector_jsx",klipse.lang.jsx.eval_opts);
klipse.common.registry.register_mode.call(null,"transpile-jsx","selector_transpile_jsx",klipse.lang.jsx.transpile_opts);
klipse.common.registry.register_mode.call(null,"render-jsx","selector_render_jsx",klipse.lang.jsx.render_opts);
klipse.common.registry.register_mode.call(null,"render-react","selector_react",klipse.lang.jsx.render_react_opts);

//# sourceMappingURL=jsx.js.map

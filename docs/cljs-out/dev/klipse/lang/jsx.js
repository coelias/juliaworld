// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.jsx');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.jsx.babel = (function klipse$lang$jsx$babel(src){
return ((function (){var obj__20025__auto__ = Babel;
var f__20026__auto__ = (function (){var obj29059 = obj__20025__auto__;
var k29060 = "transform";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29059,k29060)){
return (obj29059[k29060]);
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29071){
var state_val_29072 = (state_29071[(1)]);
if((state_val_29072 === (1))){
var state_29071__$1 = state_29071;
var statearr_29073_29081 = state_29071__$1;
(statearr_29073_29081[(2)] = null);

(statearr_29073_29081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (2))){
var inst_29069 = (state_29071[(2)]);
var state_29071__$1 = state_29071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29071__$1,inst_29069);
} else {
if((state_val_29072 === (3))){
var inst_29061 = (state_29071[(2)]);
var inst_29062 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29061);
var state_29071__$1 = state_29071;
var statearr_29074_29082 = state_29071__$1;
(statearr_29074_29082[(2)] = inst_29062);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29071__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29071,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_29066 = klipse.lang.jsx.babel.call(null,exp);
var inst_29067 = klipse.utils.eval_in_global_scope.call(null,inst_29066);
var state_29071__$1 = (function (){var statearr_29075 = state_29071;
(statearr_29075[(7)] = inst_29067);

return statearr_29075;
})();
var statearr_29076_29083 = state_29071__$1;
(statearr_29076_29083[(2)] = "//Evaluation done");


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29071__$1);

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
var statearr_29077 = [null,null,null,null,null,null,null,null];
(statearr_29077[(0)] = klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto__);

(statearr_29077[(1)] = (1));

return statearr_29077;
});
var klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto____1 = (function (state_29071){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29078){if((e29078 instanceof Object)){
var ex__15526__auto__ = e29078;
var statearr_29079_29084 = state_29071;
(statearr_29079_29084[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29085 = state_29071;
state_29071 = G__29085;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto__ = function(state_29071){
switch(arguments.length){
case 0:
return klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto____1.call(this,state_29071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto____0;
klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto____1;
return klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29080 = f__15620__auto__.call(null);
(statearr_29080[(6)] = c__15619__auto__);

return statearr_29080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.jsx.render_jsx_STAR_ = (function klipse$lang$jsx$render_jsx_STAR_(exp,p__29086){
var map__29087 = p__29086;
var map__29087__$1 = cljs.core.__destructure_map.call(null,map__29087);
var container_id = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{klipse.lang.jsx.babel.call(null,exp);

var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("render-jsx - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,klipse.lang.jsx.babel.call(null,wrapped_exp));
}catch (e29088){var e = e29088;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.jsx.render_jsx = (function klipse$lang$jsx$render_jsx(exp,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29091){
var state_val_29092 = (state_29091[(1)]);
if((state_val_29092 === (1))){
var inst_29089 = klipse.lang.jsx.render_jsx_STAR_.call(null,exp,opts);
var state_29091__$1 = state_29091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29091__$1,inst_29089);
} else {
return null;
}
});
return (function() {
var klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__ = null;
var klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____0 = (function (){
var statearr_29093 = [null,null,null,null,null,null,null];
(statearr_29093[(0)] = klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__);

(statearr_29093[(1)] = (1));

return statearr_29093;
});
var klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____1 = (function (state_29091){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29094){if((e29094 instanceof Object)){
var ex__15526__auto__ = e29094;
var statearr_29095_29097 = state_29091;
(statearr_29095_29097[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29098 = state_29091;
state_29091 = G__29098;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__ = function(state_29091){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____1.call(this,state_29091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____0;
klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____1;
return klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29096 = f__15620__auto__.call(null);
(statearr_29096[(6)] = c__15619__auto__);

return statearr_29096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.jsx.render_react_STAR_ = (function klipse$lang$jsx$render_react_STAR_(exp,p__29099){
var map__29100 = p__29099;
var map__29100__$1 = cljs.core.__destructure_map.call(null,map__29100);
var container_id = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("render-react - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,wrapped_exp);
}catch (e29101){var e = e29101;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.jsx.render_react = (function klipse$lang$jsx$render_react(exp,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29104){
var state_val_29105 = (state_29104[(1)]);
if((state_val_29105 === (1))){
var inst_29102 = klipse.lang.jsx.render_react_STAR_.call(null,exp,opts);
var state_29104__$1 = state_29104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29104__$1,inst_29102);
} else {
return null;
}
});
return (function() {
var klipse$lang$jsx$render_react_$_state_machine__15523__auto__ = null;
var klipse$lang$jsx$render_react_$_state_machine__15523__auto____0 = (function (){
var statearr_29106 = [null,null,null,null,null,null,null];
(statearr_29106[(0)] = klipse$lang$jsx$render_react_$_state_machine__15523__auto__);

(statearr_29106[(1)] = (1));

return statearr_29106;
});
var klipse$lang$jsx$render_react_$_state_machine__15523__auto____1 = (function (state_29104){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29107){if((e29107 instanceof Object)){
var ex__15526__auto__ = e29107;
var statearr_29108_29110 = state_29104;
(statearr_29108_29110[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29111 = state_29104;
state_29104 = G__29111;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$jsx$render_react_$_state_machine__15523__auto__ = function(state_29104){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_react_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_react_$_state_machine__15523__auto____1.call(this,state_29104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$render_react_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_react_$_state_machine__15523__auto____0;
klipse$lang$jsx$render_react_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_react_$_state_machine__15523__auto____1;
return klipse$lang$jsx$render_react_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29109 = f__15620__auto__.call(null);
(statearr_29109[(6)] = c__15619__auto__);

return statearr_29109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.jsx.transpile_jsx = (function klipse$lang$jsx$transpile_jsx(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29121){
var state_val_29122 = (state_29121[(1)]);
if((state_val_29122 === (1))){
var state_29121__$1 = state_29121;
var statearr_29123_29130 = state_29121__$1;
(statearr_29123_29130[(2)] = null);

(statearr_29123_29130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29122 === (2))){
var inst_29119 = (state_29121[(2)]);
var state_29121__$1 = state_29121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29121__$1,inst_29119);
} else {
if((state_val_29122 === (3))){
var inst_29112 = (state_29121[(2)]);
var inst_29113 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29112);
var state_29121__$1 = state_29121;
var statearr_29124_29131 = state_29121__$1;
(statearr_29124_29131[(2)] = inst_29113);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29121__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29122 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29121,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_29117 = klipse.lang.jsx.babel.call(null,exp);
var state_29121__$1 = state_29121;
var statearr_29125_29132 = state_29121__$1;
(statearr_29125_29132[(2)] = inst_29117);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29121__$1);

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
var statearr_29126 = [null,null,null,null,null,null,null];
(statearr_29126[(0)] = klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto__);

(statearr_29126[(1)] = (1));

return statearr_29126;
});
var klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto____1 = (function (state_29121){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29127){if((e29127 instanceof Object)){
var ex__15526__auto__ = e29127;
var statearr_29128_29133 = state_29121;
(statearr_29128_29133[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29134 = state_29121;
state_29121 = G__29134;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto__ = function(state_29121){
switch(arguments.length){
case 0:
return klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto____1.call(this,state_29121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto____0;
klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto____1;
return klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29129 = f__15620__auto__.call(null);
(statearr_29129[(6)] = c__15619__auto__);

return statearr_29129;
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

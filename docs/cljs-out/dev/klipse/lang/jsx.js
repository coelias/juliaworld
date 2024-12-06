// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.jsx');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.jsx.babel = (function klipse$lang$jsx$babel(src){
return ((function (){var obj__20025__auto__ = Babel;
var f__20026__auto__ = (function (){var obj29056 = obj__20025__auto__;
var k29057 = "transform";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29056,k29057)){
return (obj29056[k29057]);
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29068){
var state_val_29069 = (state_29068[(1)]);
if((state_val_29069 === (1))){
var state_29068__$1 = state_29068;
var statearr_29070_29078 = state_29068__$1;
(statearr_29070_29078[(2)] = null);

(statearr_29070_29078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29069 === (2))){
var inst_29066 = (state_29068[(2)]);
var state_29068__$1 = state_29068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29068__$1,inst_29066);
} else {
if((state_val_29069 === (3))){
var inst_29058 = (state_29068[(2)]);
var inst_29059 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29058);
var state_29068__$1 = state_29068;
var statearr_29071_29079 = state_29068__$1;
(statearr_29071_29079[(2)] = inst_29059);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29068__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29069 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29068,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_29063 = klipse.lang.jsx.babel.call(null,exp);
var inst_29064 = klipse.utils.eval_in_global_scope.call(null,inst_29063);
var state_29068__$1 = (function (){var statearr_29072 = state_29068;
(statearr_29072[(7)] = inst_29064);

return statearr_29072;
})();
var statearr_29073_29080 = state_29068__$1;
(statearr_29073_29080[(2)] = "//Evaluation done");


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29068__$1);

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
var statearr_29074 = [null,null,null,null,null,null,null,null];
(statearr_29074[(0)] = klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto__);

(statearr_29074[(1)] = (1));

return statearr_29074;
});
var klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto____1 = (function (state_29068){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29075){if((e29075 instanceof Object)){
var ex__15526__auto__ = e29075;
var statearr_29076_29081 = state_29068;
(statearr_29076_29081[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29082 = state_29068;
state_29068 = G__29082;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto__ = function(state_29068){
switch(arguments.length){
case 0:
return klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto____1.call(this,state_29068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto____0;
klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto____1;
return klipse$lang$jsx$eval_jsx_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29077 = f__15620__auto__.call(null);
(statearr_29077[(6)] = c__15619__auto__);

return statearr_29077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.jsx.render_jsx_STAR_ = (function klipse$lang$jsx$render_jsx_STAR_(exp,p__29083){
var map__29084 = p__29083;
var map__29084__$1 = cljs.core.__destructure_map.call(null,map__29084);
var container_id = cljs.core.get.call(null,map__29084__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{klipse.lang.jsx.babel.call(null,exp);

var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("render-jsx - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,klipse.lang.jsx.babel.call(null,wrapped_exp));
}catch (e29085){var e = e29085;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.jsx.render_jsx = (function klipse$lang$jsx$render_jsx(exp,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29088){
var state_val_29089 = (state_29088[(1)]);
if((state_val_29089 === (1))){
var inst_29086 = klipse.lang.jsx.render_jsx_STAR_.call(null,exp,opts);
var state_29088__$1 = state_29088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29088__$1,inst_29086);
} else {
return null;
}
});
return (function() {
var klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__ = null;
var klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____0 = (function (){
var statearr_29090 = [null,null,null,null,null,null,null];
(statearr_29090[(0)] = klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__);

(statearr_29090[(1)] = (1));

return statearr_29090;
});
var klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____1 = (function (state_29088){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29091){if((e29091 instanceof Object)){
var ex__15526__auto__ = e29091;
var statearr_29092_29094 = state_29088;
(statearr_29092_29094[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29095 = state_29088;
state_29088 = G__29095;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__ = function(state_29088){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____1.call(this,state_29088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____0;
klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_jsx_$_state_machine__15523__auto____1;
return klipse$lang$jsx$render_jsx_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29093 = f__15620__auto__.call(null);
(statearr_29093[(6)] = c__15619__auto__);

return statearr_29093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.jsx.render_react_STAR_ = (function klipse$lang$jsx$render_react_STAR_(exp,p__29096){
var map__29097 = p__29096;
var map__29097__$1 = cljs.core.__destructure_map.call(null,map__29097);
var container_id = cljs.core.get.call(null,map__29097__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("render-react - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,wrapped_exp);
}catch (e29098){var e = e29098;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.jsx.render_react = (function klipse$lang$jsx$render_react(exp,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29101){
var state_val_29102 = (state_29101[(1)]);
if((state_val_29102 === (1))){
var inst_29099 = klipse.lang.jsx.render_react_STAR_.call(null,exp,opts);
var state_29101__$1 = state_29101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29101__$1,inst_29099);
} else {
return null;
}
});
return (function() {
var klipse$lang$jsx$render_react_$_state_machine__15523__auto__ = null;
var klipse$lang$jsx$render_react_$_state_machine__15523__auto____0 = (function (){
var statearr_29103 = [null,null,null,null,null,null,null];
(statearr_29103[(0)] = klipse$lang$jsx$render_react_$_state_machine__15523__auto__);

(statearr_29103[(1)] = (1));

return statearr_29103;
});
var klipse$lang$jsx$render_react_$_state_machine__15523__auto____1 = (function (state_29101){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29104){if((e29104 instanceof Object)){
var ex__15526__auto__ = e29104;
var statearr_29105_29107 = state_29101;
(statearr_29105_29107[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29108 = state_29101;
state_29101 = G__29108;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$jsx$render_react_$_state_machine__15523__auto__ = function(state_29101){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_react_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_react_$_state_machine__15523__auto____1.call(this,state_29101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$render_react_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_react_$_state_machine__15523__auto____0;
klipse$lang$jsx$render_react_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_react_$_state_machine__15523__auto____1;
return klipse$lang$jsx$render_react_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29106 = f__15620__auto__.call(null);
(statearr_29106[(6)] = c__15619__auto__);

return statearr_29106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.jsx.transpile_jsx = (function klipse$lang$jsx$transpile_jsx(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29118){
var state_val_29119 = (state_29118[(1)]);
if((state_val_29119 === (1))){
var state_29118__$1 = state_29118;
var statearr_29120_29127 = state_29118__$1;
(statearr_29120_29127[(2)] = null);

(statearr_29120_29127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (2))){
var inst_29116 = (state_29118[(2)]);
var state_29118__$1 = state_29118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29118__$1,inst_29116);
} else {
if((state_val_29119 === (3))){
var inst_29109 = (state_29118[(2)]);
var inst_29110 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29109);
var state_29118__$1 = state_29118;
var statearr_29121_29128 = state_29118__$1;
(statearr_29121_29128[(2)] = inst_29110);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29118__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29118,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_29114 = klipse.lang.jsx.babel.call(null,exp);
var state_29118__$1 = state_29118;
var statearr_29122_29129 = state_29118__$1;
(statearr_29122_29129[(2)] = inst_29114);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29118__$1);

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
var statearr_29123 = [null,null,null,null,null,null,null];
(statearr_29123[(0)] = klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto__);

(statearr_29123[(1)] = (1));

return statearr_29123;
});
var klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto____1 = (function (state_29118){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29124){if((e29124 instanceof Object)){
var ex__15526__auto__ = e29124;
var statearr_29125_29130 = state_29118;
(statearr_29125_29130[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29131 = state_29118;
state_29118 = G__29131;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto__ = function(state_29118){
switch(arguments.length){
case 0:
return klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto____1.call(this,state_29118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto____0;
klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto____1;
return klipse$lang$jsx$transpile_jsx_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29126 = f__15620__auto__.call(null);
(statearr_29126[(6)] = c__15619__auto__);

return statearr_29126;
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

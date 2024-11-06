// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.jsx');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.jsx.babel = (function klipse$lang$jsx$babel(src){
return ((function (){var obj__17203__auto__ = Babel;
var f__17204__auto__ = (function (){var obj23860 = obj__17203__auto__;
var k23861 = "transform";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23860,k23861)){
return (obj23860[k23861]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,src,({"presets": ["react"]}));
})()["code"]);
});
klipse.lang.jsx.eval_jsx = (function klipse$lang$jsx$eval_jsx(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_23872){
var state_val_23873 = (state_23872[(1)]);
if((state_val_23873 === (1))){
var state_23872__$1 = state_23872;
var statearr_23874_23882 = state_23872__$1;
(statearr_23874_23882[(2)] = null);

(statearr_23874_23882[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (2))){
var inst_23870 = (state_23872[(2)]);
var state_23872__$1 = state_23872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23872__$1,inst_23870);
} else {
if((state_val_23873 === (3))){
var inst_23862 = (state_23872[(2)]);
var inst_23863 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23862);
var state_23872__$1 = state_23872;
var statearr_23875_23883 = state_23872__$1;
(statearr_23875_23883[(2)] = inst_23863);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23872__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23872,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_23867 = klipse.lang.jsx.babel.call(null,exp);
var inst_23868 = klipse.utils.eval_in_global_scope.call(null,inst_23867);
var state_23872__$1 = (function (){var statearr_23876 = state_23872;
(statearr_23876[(7)] = inst_23868);

return statearr_23876;
})();
var statearr_23877_23884 = state_23872__$1;
(statearr_23877_23884[(2)] = "//Evaluation done");


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23872__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto__ = null;
var klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto____0 = (function (){
var statearr_23878 = [null,null,null,null,null,null,null,null];
(statearr_23878[(0)] = klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto__);

(statearr_23878[(1)] = (1));

return statearr_23878;
});
var klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto____1 = (function (state_23872){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_23872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e23879){if((e23879 instanceof Object)){
var ex__13611__auto__ = e23879;
var statearr_23880_23885 = state_23872;
(statearr_23880_23885[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23886 = state_23872;
state_23872 = G__23886;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto__ = function(state_23872){
switch(arguments.length){
case 0:
return klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto____1.call(this,state_23872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto____0;
klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto____1;
return klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_23881 = f__13705__auto__.call(null);
(statearr_23881[(6)] = c__13704__auto__);

return statearr_23881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.jsx.render_jsx_STAR_ = (function klipse$lang$jsx$render_jsx_STAR_(exp,p__23887){
var map__23888 = p__23887;
var map__23888__$1 = cljs.core.__destructure_map.call(null,map__23888);
var container_id = cljs.core.get.call(null,map__23888__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{klipse.lang.jsx.babel.call(null,exp);

var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("render-jsx - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,klipse.lang.jsx.babel.call(null,wrapped_exp));
}catch (e23889){var e = e23889;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.jsx.render_jsx = (function klipse$lang$jsx$render_jsx(exp,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_23892){
var state_val_23893 = (state_23892[(1)]);
if((state_val_23893 === (1))){
var inst_23890 = klipse.lang.jsx.render_jsx_STAR_.call(null,exp,opts);
var state_23892__$1 = state_23892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23892__$1,inst_23890);
} else {
return null;
}
});
return (function() {
var klipse$lang$jsx$render_jsx_$_state_machine__13608__auto__ = null;
var klipse$lang$jsx$render_jsx_$_state_machine__13608__auto____0 = (function (){
var statearr_23894 = [null,null,null,null,null,null,null];
(statearr_23894[(0)] = klipse$lang$jsx$render_jsx_$_state_machine__13608__auto__);

(statearr_23894[(1)] = (1));

return statearr_23894;
});
var klipse$lang$jsx$render_jsx_$_state_machine__13608__auto____1 = (function (state_23892){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_23892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e23895){if((e23895 instanceof Object)){
var ex__13611__auto__ = e23895;
var statearr_23896_23898 = state_23892;
(statearr_23896_23898[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23899 = state_23892;
state_23892 = G__23899;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$jsx$render_jsx_$_state_machine__13608__auto__ = function(state_23892){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_jsx_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_jsx_$_state_machine__13608__auto____1.call(this,state_23892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$render_jsx_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_jsx_$_state_machine__13608__auto____0;
klipse$lang$jsx$render_jsx_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_jsx_$_state_machine__13608__auto____1;
return klipse$lang$jsx$render_jsx_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_23897 = f__13705__auto__.call(null);
(statearr_23897[(6)] = c__13704__auto__);

return statearr_23897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.jsx.render_react_STAR_ = (function klipse$lang$jsx$render_react_STAR_(exp,p__23900){
var map__23901 = p__23900;
var map__23901__$1 = cljs.core.__destructure_map.call(null,map__23901);
var container_id = cljs.core.get.call(null,map__23901__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("render-react - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,wrapped_exp);
}catch (e23902){var e = e23902;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.jsx.render_react = (function klipse$lang$jsx$render_react(exp,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_23905){
var state_val_23906 = (state_23905[(1)]);
if((state_val_23906 === (1))){
var inst_23903 = klipse.lang.jsx.render_react_STAR_.call(null,exp,opts);
var state_23905__$1 = state_23905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23905__$1,inst_23903);
} else {
return null;
}
});
return (function() {
var klipse$lang$jsx$render_react_$_state_machine__13608__auto__ = null;
var klipse$lang$jsx$render_react_$_state_machine__13608__auto____0 = (function (){
var statearr_23907 = [null,null,null,null,null,null,null];
(statearr_23907[(0)] = klipse$lang$jsx$render_react_$_state_machine__13608__auto__);

(statearr_23907[(1)] = (1));

return statearr_23907;
});
var klipse$lang$jsx$render_react_$_state_machine__13608__auto____1 = (function (state_23905){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_23905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e23908){if((e23908 instanceof Object)){
var ex__13611__auto__ = e23908;
var statearr_23909_23911 = state_23905;
(statearr_23909_23911[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23912 = state_23905;
state_23905 = G__23912;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$jsx$render_react_$_state_machine__13608__auto__ = function(state_23905){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_react_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_react_$_state_machine__13608__auto____1.call(this,state_23905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$render_react_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_react_$_state_machine__13608__auto____0;
klipse$lang$jsx$render_react_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_react_$_state_machine__13608__auto____1;
return klipse$lang$jsx$render_react_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_23910 = f__13705__auto__.call(null);
(statearr_23910[(6)] = c__13704__auto__);

return statearr_23910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.jsx.transpile_jsx = (function klipse$lang$jsx$transpile_jsx(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_23922){
var state_val_23923 = (state_23922[(1)]);
if((state_val_23923 === (1))){
var state_23922__$1 = state_23922;
var statearr_23924_23931 = state_23922__$1;
(statearr_23924_23931[(2)] = null);

(statearr_23924_23931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (2))){
var inst_23920 = (state_23922[(2)]);
var state_23922__$1 = state_23922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23922__$1,inst_23920);
} else {
if((state_val_23923 === (3))){
var inst_23913 = (state_23922[(2)]);
var inst_23914 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23913);
var state_23922__$1 = state_23922;
var statearr_23925_23932 = state_23922__$1;
(statearr_23925_23932[(2)] = inst_23914);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23922__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23923 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23922,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_23918 = klipse.lang.jsx.babel.call(null,exp);
var state_23922__$1 = state_23922;
var statearr_23926_23933 = state_23922__$1;
(statearr_23926_23933[(2)] = inst_23918);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23922__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto__ = null;
var klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto____0 = (function (){
var statearr_23927 = [null,null,null,null,null,null,null];
(statearr_23927[(0)] = klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto__);

(statearr_23927[(1)] = (1));

return statearr_23927;
});
var klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto____1 = (function (state_23922){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_23922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e23928){if((e23928 instanceof Object)){
var ex__13611__auto__ = e23928;
var statearr_23929_23934 = state_23922;
(statearr_23929_23934[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23935 = state_23922;
state_23922 = G__23935;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto__ = function(state_23922){
switch(arguments.length){
case 0:
return klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto____1.call(this,state_23922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto____0;
klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto____1;
return klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_23930 = f__13705__auto__.call(null);
(statearr_23930[(6)] = c__13704__auto__);

return statearr_23930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
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

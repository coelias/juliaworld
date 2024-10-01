// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.jsx');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.jsx.babel = (function klipse$lang$jsx$babel(src){
return ((function (){var obj__17203__auto__ = Babel;
var f__17204__auto__ = (function (){var obj21174 = obj__17203__auto__;
var k21175 = "transform";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21174,k21175)){
return (obj21174[k21175]);
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
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_21186){
var state_val_21187 = (state_21186[(1)]);
if((state_val_21187 === (1))){
var state_21186__$1 = state_21186;
var statearr_21188_21196 = state_21186__$1;
(statearr_21188_21196[(2)] = null);

(statearr_21188_21196[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (2))){
var inst_21184 = (state_21186[(2)]);
var state_21186__$1 = state_21186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21186__$1,inst_21184);
} else {
if((state_val_21187 === (3))){
var inst_21176 = (state_21186[(2)]);
var inst_21177 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21176);
var state_21186__$1 = state_21186;
var statearr_21189_21197 = state_21186__$1;
(statearr_21189_21197[(2)] = inst_21177);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21186__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21187 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21186,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_21181 = klipse.lang.jsx.babel.call(null,exp);
var inst_21182 = klipse.utils.eval_in_global_scope.call(null,inst_21181);
var state_21186__$1 = (function (){var statearr_21190 = state_21186;
(statearr_21190[(7)] = inst_21182);

return statearr_21190;
})();
var statearr_21191_21198 = state_21186__$1;
(statearr_21191_21198[(2)] = "//Evaluation done");


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21186__$1);

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
var statearr_21192 = [null,null,null,null,null,null,null,null];
(statearr_21192[(0)] = klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto__);

(statearr_21192[(1)] = (1));

return statearr_21192;
});
var klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto____1 = (function (state_21186){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_21186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e21193){if((e21193 instanceof Object)){
var ex__13611__auto__ = e21193;
var statearr_21194_21199 = state_21186;
(statearr_21194_21199[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21200 = state_21186;
state_21186 = G__21200;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto__ = function(state_21186){
switch(arguments.length){
case 0:
return klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto____1.call(this,state_21186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto____0;
klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto____1;
return klipse$lang$jsx$eval_jsx_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_21195 = f__13705__auto__.call(null);
(statearr_21195[(6)] = c__13704__auto__);

return statearr_21195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.jsx.render_jsx_STAR_ = (function klipse$lang$jsx$render_jsx_STAR_(exp,p__21201){
var map__21202 = p__21201;
var map__21202__$1 = cljs.core.__destructure_map.call(null,map__21202);
var container_id = cljs.core.get.call(null,map__21202__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{klipse.lang.jsx.babel.call(null,exp);

var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("render-jsx - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,klipse.lang.jsx.babel.call(null,wrapped_exp));
}catch (e21203){var e = e21203;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.jsx.render_jsx = (function klipse$lang$jsx$render_jsx(exp,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_21206){
var state_val_21207 = (state_21206[(1)]);
if((state_val_21207 === (1))){
var inst_21204 = klipse.lang.jsx.render_jsx_STAR_.call(null,exp,opts);
var state_21206__$1 = state_21206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21206__$1,inst_21204);
} else {
return null;
}
});
return (function() {
var klipse$lang$jsx$render_jsx_$_state_machine__13608__auto__ = null;
var klipse$lang$jsx$render_jsx_$_state_machine__13608__auto____0 = (function (){
var statearr_21208 = [null,null,null,null,null,null,null];
(statearr_21208[(0)] = klipse$lang$jsx$render_jsx_$_state_machine__13608__auto__);

(statearr_21208[(1)] = (1));

return statearr_21208;
});
var klipse$lang$jsx$render_jsx_$_state_machine__13608__auto____1 = (function (state_21206){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_21206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e21209){if((e21209 instanceof Object)){
var ex__13611__auto__ = e21209;
var statearr_21210_21212 = state_21206;
(statearr_21210_21212[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21213 = state_21206;
state_21206 = G__21213;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$jsx$render_jsx_$_state_machine__13608__auto__ = function(state_21206){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_jsx_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_jsx_$_state_machine__13608__auto____1.call(this,state_21206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$render_jsx_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_jsx_$_state_machine__13608__auto____0;
klipse$lang$jsx$render_jsx_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_jsx_$_state_machine__13608__auto____1;
return klipse$lang$jsx$render_jsx_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_21211 = f__13705__auto__.call(null);
(statearr_21211[(6)] = c__13704__auto__);

return statearr_21211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.jsx.render_react_STAR_ = (function klipse$lang$jsx$render_react_STAR_(exp,p__21214){
var map__21215 = p__21214;
var map__21215__$1 = cljs.core.__destructure_map.call(null,map__21215);
var container_id = cljs.core.get.call(null,map__21215__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var wrapped_exp = ["ReactDOM.render(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),", document.getElementById('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id),"'))"].join('');
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("render-react - wrapped expression:",wrapped_exp);
} else {
}

return klipse.utils.eval_in_global_scope.call(null,wrapped_exp);
}catch (e21216){var e = e21216;
var container = document.getElementById(container_id);
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.jsx.render_react = (function klipse$lang$jsx$render_react(exp,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_21219){
var state_val_21220 = (state_21219[(1)]);
if((state_val_21220 === (1))){
var inst_21217 = klipse.lang.jsx.render_react_STAR_.call(null,exp,opts);
var state_21219__$1 = state_21219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21219__$1,inst_21217);
} else {
return null;
}
});
return (function() {
var klipse$lang$jsx$render_react_$_state_machine__13608__auto__ = null;
var klipse$lang$jsx$render_react_$_state_machine__13608__auto____0 = (function (){
var statearr_21221 = [null,null,null,null,null,null,null];
(statearr_21221[(0)] = klipse$lang$jsx$render_react_$_state_machine__13608__auto__);

(statearr_21221[(1)] = (1));

return statearr_21221;
});
var klipse$lang$jsx$render_react_$_state_machine__13608__auto____1 = (function (state_21219){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_21219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e21222){if((e21222 instanceof Object)){
var ex__13611__auto__ = e21222;
var statearr_21223_21225 = state_21219;
(statearr_21223_21225[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21226 = state_21219;
state_21219 = G__21226;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$jsx$render_react_$_state_machine__13608__auto__ = function(state_21219){
switch(arguments.length){
case 0:
return klipse$lang$jsx$render_react_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$jsx$render_react_$_state_machine__13608__auto____1.call(this,state_21219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$render_react_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$render_react_$_state_machine__13608__auto____0;
klipse$lang$jsx$render_react_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$render_react_$_state_machine__13608__auto____1;
return klipse$lang$jsx$render_react_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_21224 = f__13705__auto__.call(null);
(statearr_21224[(6)] = c__13704__auto__);

return statearr_21224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.jsx.transpile_jsx = (function klipse$lang$jsx$transpile_jsx(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_21236){
var state_val_21237 = (state_21236[(1)]);
if((state_val_21237 === (1))){
var state_21236__$1 = state_21236;
var statearr_21238_21245 = state_21236__$1;
(statearr_21238_21245[(2)] = null);

(statearr_21238_21245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21237 === (2))){
var inst_21234 = (state_21236[(2)]);
var state_21236__$1 = state_21236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21236__$1,inst_21234);
} else {
if((state_val_21237 === (3))){
var inst_21227 = (state_21236[(2)]);
var inst_21228 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21227);
var state_21236__$1 = state_21236;
var statearr_21239_21246 = state_21236__$1;
(statearr_21239_21246[(2)] = inst_21228);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21236__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21237 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21236,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_21232 = klipse.lang.jsx.babel.call(null,exp);
var state_21236__$1 = state_21236;
var statearr_21240_21247 = state_21236__$1;
(statearr_21240_21247[(2)] = inst_21232);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21236__$1);

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
var statearr_21241 = [null,null,null,null,null,null,null];
(statearr_21241[(0)] = klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto__);

(statearr_21241[(1)] = (1));

return statearr_21241;
});
var klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto____1 = (function (state_21236){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_21236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e21242){if((e21242 instanceof Object)){
var ex__13611__auto__ = e21242;
var statearr_21243_21248 = state_21236;
(statearr_21243_21248[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21249 = state_21236;
state_21236 = G__21249;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto__ = function(state_21236){
switch(arguments.length){
case 0:
return klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto____1.call(this,state_21236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto____0;
klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto____1;
return klipse$lang$jsx$transpile_jsx_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_21244 = f__13705__auto__.call(null);
(statearr_21244[(6)] = c__13704__auto__);

return statearr_21244;
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

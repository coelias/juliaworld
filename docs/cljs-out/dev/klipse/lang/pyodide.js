// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.pyodide');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
if((typeof klipse !== 'undefined') && (typeof klipse.lang !== 'undefined') && (typeof klipse.lang.pyodide !== 'undefined') && (typeof klipse.lang.pyodide._STAR_loaded_STAR_ !== 'undefined')){
} else {
klipse.lang.pyodide._STAR_loaded_STAR_ = false;
}
klipse.lang.pyodide.new_print = "\nimport io\nimport builtins\nstring_out = io.StringIO()\n\ndef print(*args, **kwargs):\n    if not 'file' in kwargs:\n        kwargs['file'] = string_out\n    return builtins.print(*args, **kwargs)\n";
klipse.lang.pyodide.load_pyodide = cljs.core.memoize.call(null,(function (){
var G__31304 = (function (){var obj__17203__auto__ = window;
var f__17204__auto__ = (function (){var obj31305 = obj__17203__auto__;
var k31306 = "loadPyodide";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj31305,k31306)){
return (obj31305[k31306]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__);
})();
G__31304.then((function (){
var obj__17203__auto___31309 = pyodide;
var f__17204__auto___31310 = (function (){var obj31307 = obj__17203__auto___31309;
var k31308 = "runPython";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj31307,k31308)){
return (obj31307[k31308]);
} else {
return null;
}
})();
f__17204__auto___31310.call(obj__17203__auto___31309,klipse.lang.pyodide.new_print);

return (klipse.lang.pyodide._STAR_loaded_STAR_ = true);
}));

return G__31304;
}));
klipse.lang.pyodide.ensure_loaded_BANG_ = (function klipse$lang$pyodide$ensure_loaded_BANG_(out_chan){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_31324){
var state_val_31325 = (state_31324[(1)]);
if((state_val_31325 === (1))){
var inst_31311 = cljs.core.async.chan.call(null);
var state_31324__$1 = (function (){var statearr_31326 = state_31324;
(statearr_31326[(7)] = inst_31311);

return statearr_31326;
})();
if(cljs.core.truth_(klipse.lang.pyodide._STAR_loaded_STAR_)){
var statearr_31327_31336 = state_31324__$1;
(statearr_31327_31336[(1)] = (2));

} else {
var statearr_31328_31337 = state_31324__$1;
(statearr_31328_31337[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (2))){
var state_31324__$1 = state_31324;
var statearr_31329_31338 = state_31324__$1;
(statearr_31329_31338[(2)] = null);

(statearr_31329_31338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31325 === (3))){
var inst_31311 = (state_31324[(7)]);
var inst_31314 = cljs.core.async.put_BANG_.call(null,out_chan,"Loading...");
var inst_31316 = klipse.lang.pyodide.load_pyodide.call(null);
var inst_31317 = (function (){var ready_chan = inst_31311;
var G__31315 = inst_31316;
return (function (){
cljs.core.async.put_BANG_.call(null,out_chan,"Ready to evaluate...");

return cljs.core.async.put_BANG_.call(null,ready_chan,"Ready to evaluate...");
});
})();
var inst_31318 = inst_31316.then(inst_31317);
var state_31324__$1 = (function (){var statearr_31330 = state_31324;
(statearr_31330[(8)] = inst_31318);

(statearr_31330[(9)] = inst_31314);

return statearr_31330;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31324__$1,(5),inst_31311);
} else {
if((state_val_31325 === (4))){
var inst_31322 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31324__$1,inst_31322);
} else {
if((state_val_31325 === (5))){
var inst_31320 = (state_31324[(2)]);
var state_31324__$1 = state_31324;
var statearr_31331_31339 = state_31324__$1;
(statearr_31331_31339[(2)] = inst_31320);

(statearr_31331_31339[(1)] = (4));


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
var klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto__ = null;
var klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto____0 = (function (){
var statearr_31332 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31332[(0)] = klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto__);

(statearr_31332[(1)] = (1));

return statearr_31332;
});
var klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto____1 = (function (state_31324){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_31324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e31333){if((e31333 instanceof Object)){
var ex__13611__auto__ = e31333;
var statearr_31334_31340 = state_31324;
(statearr_31334_31340[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31341 = state_31324;
state_31324 = G__31341;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto__ = function(state_31324){
switch(arguments.length){
case 0:
return klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto____1.call(this,state_31324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto____0;
klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto____1;
return klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_31335 = f__13705__auto__.call(null);
(statearr_31335[(6)] = c__13704__auto__);

return statearr_31335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.pyodide.eval_python = (function klipse$lang$pyodide$eval_python(src,_opts){
var c = cljs.core.async.chan.call(null);
var to_chan = (function (p1__31342_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__31342_SHARP_);
});
var c__13704__auto___31397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_31368){
var state_val_31369 = (state_31368[(1)]);
if((state_val_31369 === (1))){
var inst_31343 = klipse.lang.pyodide.ensure_loaded_BANG_.call(null,c);
var state_31368__$1 = state_31368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31368__$1,(2),inst_31343);
} else {
if((state_val_31369 === (2))){
var inst_31345 = (state_31368[(2)]);
var state_31368__$1 = (function (){var statearr_31370 = state_31368;
(statearr_31370[(7)] = inst_31345);

return statearr_31370;
})();
var statearr_31371_31398 = state_31368__$1;
(statearr_31371_31398[(2)] = null);

(statearr_31371_31398[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (3))){
var inst_31366 = (state_31368[(2)]);
var state_31368__$1 = state_31368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31368__$1,inst_31366);
} else {
if((state_val_31369 === (4))){
var inst_31346 = (state_31368[(2)]);
var inst_31347 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31346);
var inst_31348 = cljs.core.async.put_BANG_.call(null,c,inst_31347);
var state_31368__$1 = state_31368;
var statearr_31372_31399 = state_31368__$1;
(statearr_31372_31399[(2)] = inst_31348);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31368__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (5))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31368,(4),new cljs.core.Keyword(null,"default","default",-1987822328),null,(3));
var inst_31355 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,pyodide,"runPythonAsync");
var state_31368__$1 = state_31368;
if(inst_31355){
var statearr_31373_31400 = state_31368__$1;
(statearr_31373_31400[(1)] = (6));

} else {
var statearr_31374_31401 = state_31368__$1;
(statearr_31374_31401[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (6))){
var inst_31357 = (pyodide["runPythonAsync"]);
var state_31368__$1 = state_31368;
var statearr_31375_31402 = state_31368__$1;
(statearr_31375_31402[(2)] = inst_31357);

(statearr_31375_31402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (7))){
var state_31368__$1 = state_31368;
var statearr_31376_31403 = state_31368__$1;
(statearr_31376_31403[(2)] = null);

(statearr_31376_31403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (8))){
var inst_31360 = (state_31368[(2)]);
var inst_31361 = inst_31360.call(pyodide,src,to_chan,to_chan);
var inst_31362 = (function (){var G__31352 = inst_31361;
return (function (m){
cljs.core.async.put_BANG_.call(null,c,"\nOutput:\n");

if((m == null)){
} else {
to_chan.call(null,m);
}

cljs.core.async.put_BANG_.call(null,c,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var parent__17210__auto__ = (function (){var obj31385 = (function (){var obj31383 = pyodide;
var k31384 = "globals";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj31383,k31384)){
return (obj31383[k31384]);
} else {
return null;
}
})();
var k31386 = "string_out";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj31385,k31386)){
return (obj31385[k31386]);
} else {
return null;
}
})();
var f__17211__auto__ = (function (){var obj31387 = parent__17210__auto__;
var k31388 = "getvalue";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj31387,k31388)){
return (obj31387[k31388]);
} else {
return null;
}
})();
return f__17211__auto__.call(parent__17210__auto__);
})())].join(''));

var obj__17203__auto__ = pyodide;
var f__17204__auto__ = (function (){var obj31389 = obj__17203__auto__;
var k31390 = "runPython";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj31389,k31390)){
return (obj31389[k31390]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__," string_out = io.StringIO()");
});
})();
var inst_31363 = inst_31361.then(inst_31362);
var inst_31364 = inst_31361.catch(to_chan);
var state_31368__$1 = (function (){var statearr_31391 = state_31368;
(statearr_31391[(8)] = inst_31364);

(statearr_31391[(9)] = inst_31363);

return statearr_31391;
})();
var statearr_31392_31404 = state_31368__$1;
(statearr_31392_31404[(2)] = inst_31361);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31368__$1);

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
var klipse$lang$pyodide$eval_python_$_state_machine__13608__auto__ = null;
var klipse$lang$pyodide$eval_python_$_state_machine__13608__auto____0 = (function (){
var statearr_31393 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31393[(0)] = klipse$lang$pyodide$eval_python_$_state_machine__13608__auto__);

(statearr_31393[(1)] = (1));

return statearr_31393;
});
var klipse$lang$pyodide$eval_python_$_state_machine__13608__auto____1 = (function (state_31368){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_31368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e31394){if((e31394 instanceof Object)){
var ex__13611__auto__ = e31394;
var statearr_31395_31405 = state_31368;
(statearr_31395_31405[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31406 = state_31368;
state_31368 = G__31406;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$pyodide$eval_python_$_state_machine__13608__auto__ = function(state_31368){
switch(arguments.length){
case 0:
return klipse$lang$pyodide$eval_python_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$pyodide$eval_python_$_state_machine__13608__auto____1.call(this,state_31368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$pyodide$eval_python_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$pyodide$eval_python_$_state_machine__13608__auto____0;
klipse$lang$pyodide$eval_python_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$pyodide$eval_python_$_state_machine__13608__auto____1;
return klipse$lang$pyodide$eval_python_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_31396 = f__13705__auto__.call(null);
(statearr_31396[(6)] = c__13704__auto___31397);

return statearr_31396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return c;
});
klipse.lang.pyodide.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"html",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.pyodide.eval_python,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python"),"https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null);
klipse.common.registry.register_mode.call(null,"pyodide","selector_pyodide",klipse.lang.pyodide.opts);

//# sourceMappingURL=pyodide.js.map

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
var G__33229 = (function (){var obj__20025__auto__ = window;
var f__20026__auto__ = (function (){var obj33230 = obj__20025__auto__;
var k33231 = "loadPyodide";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33230,k33231)){
return (obj33230[k33231]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__);
})();
G__33229.then((function (){
var obj__20025__auto___33234 = pyodide;
var f__20026__auto___33235 = (function (){var obj33232 = obj__20025__auto___33234;
var k33233 = "runPython";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33232,k33233)){
return (obj33232[k33233]);
} else {
return null;
}
})();
f__20026__auto___33235.call(obj__20025__auto___33234,klipse.lang.pyodide.new_print);

return (klipse.lang.pyodide._STAR_loaded_STAR_ = true);
}));

return G__33229;
}));
klipse.lang.pyodide.ensure_loaded_BANG_ = (function klipse$lang$pyodide$ensure_loaded_BANG_(out_chan){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_33249){
var state_val_33250 = (state_33249[(1)]);
if((state_val_33250 === (1))){
var inst_33236 = cljs.core.async.chan.call(null);
var state_33249__$1 = (function (){var statearr_33251 = state_33249;
(statearr_33251[(7)] = inst_33236);

return statearr_33251;
})();
if(cljs.core.truth_(klipse.lang.pyodide._STAR_loaded_STAR_)){
var statearr_33252_33261 = state_33249__$1;
(statearr_33252_33261[(1)] = (2));

} else {
var statearr_33253_33262 = state_33249__$1;
(statearr_33253_33262[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33250 === (2))){
var state_33249__$1 = state_33249;
var statearr_33254_33263 = state_33249__$1;
(statearr_33254_33263[(2)] = null);

(statearr_33254_33263[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33250 === (3))){
var inst_33236 = (state_33249[(7)]);
var inst_33239 = cljs.core.async.put_BANG_.call(null,out_chan,"Loading...");
var inst_33241 = klipse.lang.pyodide.load_pyodide.call(null);
var inst_33242 = (function (){var ready_chan = inst_33236;
var G__33240 = inst_33241;
return (function (){
cljs.core.async.put_BANG_.call(null,out_chan,"Ready to evaluate...");

return cljs.core.async.put_BANG_.call(null,ready_chan,"Ready to evaluate...");
});
})();
var inst_33243 = inst_33241.then(inst_33242);
var state_33249__$1 = (function (){var statearr_33255 = state_33249;
(statearr_33255[(8)] = inst_33243);

(statearr_33255[(9)] = inst_33239);

return statearr_33255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33249__$1,(5),inst_33236);
} else {
if((state_val_33250 === (4))){
var inst_33247 = (state_33249[(2)]);
var state_33249__$1 = state_33249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33249__$1,inst_33247);
} else {
if((state_val_33250 === (5))){
var inst_33245 = (state_33249[(2)]);
var state_33249__$1 = state_33249;
var statearr_33256_33264 = state_33249__$1;
(statearr_33256_33264[(2)] = inst_33245);

(statearr_33256_33264[(1)] = (4));


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
var klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto__ = null;
var klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto____0 = (function (){
var statearr_33257 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33257[(0)] = klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto__);

(statearr_33257[(1)] = (1));

return statearr_33257;
});
var klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto____1 = (function (state_33249){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_33249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e33258){if((e33258 instanceof Object)){
var ex__15526__auto__ = e33258;
var statearr_33259_33265 = state_33249;
(statearr_33259_33265[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33266 = state_33249;
state_33249 = G__33266;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto__ = function(state_33249){
switch(arguments.length){
case 0:
return klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto____1.call(this,state_33249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto____0;
klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto____1;
return klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_33260 = f__15620__auto__.call(null);
(statearr_33260[(6)] = c__15619__auto__);

return statearr_33260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.pyodide.eval_python = (function klipse$lang$pyodide$eval_python(src,_opts){
var c = cljs.core.async.chan.call(null);
var to_chan = (function (p1__33267_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__33267_SHARP_);
});
var c__15619__auto___33322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_33293){
var state_val_33294 = (state_33293[(1)]);
if((state_val_33294 === (1))){
var inst_33268 = klipse.lang.pyodide.ensure_loaded_BANG_.call(null,c);
var state_33293__$1 = state_33293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33293__$1,(2),inst_33268);
} else {
if((state_val_33294 === (2))){
var inst_33270 = (state_33293[(2)]);
var state_33293__$1 = (function (){var statearr_33295 = state_33293;
(statearr_33295[(7)] = inst_33270);

return statearr_33295;
})();
var statearr_33296_33323 = state_33293__$1;
(statearr_33296_33323[(2)] = null);

(statearr_33296_33323[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (3))){
var inst_33291 = (state_33293[(2)]);
var state_33293__$1 = state_33293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33293__$1,inst_33291);
} else {
if((state_val_33294 === (4))){
var inst_33271 = (state_33293[(2)]);
var inst_33272 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33271);
var inst_33273 = cljs.core.async.put_BANG_.call(null,c,inst_33272);
var state_33293__$1 = state_33293;
var statearr_33297_33324 = state_33293__$1;
(statearr_33297_33324[(2)] = inst_33273);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33293__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (5))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33293,(4),new cljs.core.Keyword(null,"default","default",-1987822328),null,(3));
var inst_33280 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,pyodide,"runPythonAsync");
var state_33293__$1 = state_33293;
if(inst_33280){
var statearr_33298_33325 = state_33293__$1;
(statearr_33298_33325[(1)] = (6));

} else {
var statearr_33299_33326 = state_33293__$1;
(statearr_33299_33326[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (6))){
var inst_33282 = (pyodide["runPythonAsync"]);
var state_33293__$1 = state_33293;
var statearr_33300_33327 = state_33293__$1;
(statearr_33300_33327[(2)] = inst_33282);

(statearr_33300_33327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (7))){
var state_33293__$1 = state_33293;
var statearr_33301_33328 = state_33293__$1;
(statearr_33301_33328[(2)] = null);

(statearr_33301_33328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (8))){
var inst_33285 = (state_33293[(2)]);
var inst_33286 = inst_33285.call(pyodide,src,to_chan,to_chan);
var inst_33287 = (function (){var G__33277 = inst_33286;
return (function (m){
cljs.core.async.put_BANG_.call(null,c,"\nOutput:\n");

if((m == null)){
} else {
to_chan.call(null,m);
}

cljs.core.async.put_BANG_.call(null,c,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var parent__20032__auto__ = (function (){var obj33310 = (function (){var obj33308 = pyodide;
var k33309 = "globals";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33308,k33309)){
return (obj33308[k33309]);
} else {
return null;
}
})();
var k33311 = "string_out";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33310,k33311)){
return (obj33310[k33311]);
} else {
return null;
}
})();
var f__20033__auto__ = (function (){var obj33312 = parent__20032__auto__;
var k33313 = "getvalue";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33312,k33313)){
return (obj33312[k33313]);
} else {
return null;
}
})();
return f__20033__auto__.call(parent__20032__auto__);
})())].join(''));

var obj__20025__auto__ = pyodide;
var f__20026__auto__ = (function (){var obj33314 = obj__20025__auto__;
var k33315 = "runPython";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33314,k33315)){
return (obj33314[k33315]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__," string_out = io.StringIO()");
});
})();
var inst_33288 = inst_33286.then(inst_33287);
var inst_33289 = inst_33286.catch(to_chan);
var state_33293__$1 = (function (){var statearr_33316 = state_33293;
(statearr_33316[(8)] = inst_33288);

(statearr_33316[(9)] = inst_33289);

return statearr_33316;
})();
var statearr_33317_33329 = state_33293__$1;
(statearr_33317_33329[(2)] = inst_33286);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33293__$1);

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
var klipse$lang$pyodide$eval_python_$_state_machine__15523__auto__ = null;
var klipse$lang$pyodide$eval_python_$_state_machine__15523__auto____0 = (function (){
var statearr_33318 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33318[(0)] = klipse$lang$pyodide$eval_python_$_state_machine__15523__auto__);

(statearr_33318[(1)] = (1));

return statearr_33318;
});
var klipse$lang$pyodide$eval_python_$_state_machine__15523__auto____1 = (function (state_33293){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_33293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e33319){if((e33319 instanceof Object)){
var ex__15526__auto__ = e33319;
var statearr_33320_33330 = state_33293;
(statearr_33320_33330[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33331 = state_33293;
state_33293 = G__33331;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$pyodide$eval_python_$_state_machine__15523__auto__ = function(state_33293){
switch(arguments.length){
case 0:
return klipse$lang$pyodide$eval_python_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$pyodide$eval_python_$_state_machine__15523__auto____1.call(this,state_33293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$pyodide$eval_python_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$pyodide$eval_python_$_state_machine__15523__auto____0;
klipse$lang$pyodide$eval_python_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$pyodide$eval_python_$_state_machine__15523__auto____1;
return klipse$lang$pyodide$eval_python_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_33321 = f__15620__auto__.call(null);
(statearr_33321[(6)] = c__15619__auto___33322);

return statearr_33321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return c;
});
klipse.lang.pyodide.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"html",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.pyodide.eval_python,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python"),"https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null);
klipse.common.registry.register_mode.call(null,"pyodide","selector_pyodide",klipse.lang.pyodide.opts);

//# sourceMappingURL=pyodide.js.map

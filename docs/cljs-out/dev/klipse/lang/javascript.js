// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.javascript');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs_http.client');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.javascript.known_external_libs = new cljs.core.PersistentArrayMap(null, 3, ["immutable","https://cdnjs.cloudflare.com/ajax/libs/immutable/3.8.2/immutable.js","jQuery","https://code.jquery.com/jquery-2.2.4.js","underscore","http://underscorejs.org/underscore-min.js"], null);
klipse.lang.javascript.external_lib_path = (function klipse$lang$javascript$external_lib_path(lib_name_or_url){
return cljs.core.get.call(null,klipse.lang.javascript.known_external_libs,lib_name_or_url,lib_name_or_url);
});
klipse.lang.javascript.beautify = (function klipse$lang$javascript$beautify(js_exp){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(prettyFormat(js_exp));
}catch (e20307){if((e20307 instanceof Object)){
var o = e20307;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_exp);
} else {
throw e20307;

}
}});
klipse.lang.javascript.append_to_chan = (function klipse$lang$javascript$append_to_chan(c){
return (function() { 
var G__20308__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",cljs.core.map.call(null,klipse.lang.javascript.beautify,args)));

cljs.core.async.put_BANG_.call(null,c,"\n");

return undefined;
};
var G__20308 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20309__i = 0, G__20309__a = new Array(arguments.length -  0);
while (G__20309__i < G__20309__a.length) {G__20309__a[G__20309__i] = arguments[G__20309__i + 0]; ++G__20309__i;}
  args = new cljs.core.IndexedSeq(G__20309__a,0,null);
} 
return G__20308__delegate.call(this,args);};
G__20308.cljs$lang$maxFixedArity = 0;
G__20308.cljs$lang$applyTo = (function (arglist__20310){
var args = cljs.core.seq(arglist__20310);
return G__20308__delegate(args);
});
G__20308.cljs$core$IFn$_invoke$arity$variadic = G__20308__delegate;
return G__20308;
})()
;
});
/**
 * Evals an expression where the window.console object is lexically bound to an object that puts the console output on a channel.
 *   Returns the empty string.
 *   It works fine also with asynchronous code.
 */
klipse.lang.javascript.eval_with_logger_BANG_ = (function klipse$lang$javascript$eval_with_logger_BANG_(c,exp){
var logger = klipse.lang.javascript.append_to_chan.call(null,c);
var wrapped_exp = ["(function(console) {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp),"}(window.klipse_snippet_console))"].join('');
(klipse_snippet_console = ({"log": logger}));

klipse.utils.eval_in_global_scope.call(null,wrapped_exp);

return "";
});
klipse.lang.javascript.str_eval_js_async = (function klipse$lang$javascript$str_eval_js_async(exp,p__20311){
var map__20312 = p__20311;
var map__20312__$1 = cljs.core.__destructure_map.call(null,map__20312);
var async_code_QMARK_ = cljs.core.get.call(null,map__20312__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var external_libs = cljs.core.get.call(null,map__20312__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var container_id = cljs.core.get.call(null,map__20312__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("[javascript] evaluating",exp);
} else {
}

var c__13704__auto___20395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_20366){
var state_val_20367 = (state_20366[(1)]);
if((state_val_20367 === (7))){
var inst_20325 = (state_20366[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20366,null,null,null,(6));
var inst_20330 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_20325);
var state_20366__$1 = state_20366;
if(inst_20330){
var statearr_20368_20396 = state_20366__$1;
(statearr_20368_20396[(1)] = (8));

} else {
var statearr_20369_20397 = state_20366__$1;
(statearr_20369_20397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (1))){
var inst_20313 = clojure.string.blank_QMARK_.call(null,exp);
var state_20366__$1 = state_20366;
if(inst_20313){
var statearr_20370_20398 = state_20366__$1;
(statearr_20370_20398[(1)] = (2));

} else {
var statearr_20371_20399 = state_20366__$1;
(statearr_20371_20399[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (4))){
var inst_20364 = (state_20366[(2)]);
var state_20366__$1 = state_20366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20366__$1,inst_20364);
} else {
if((state_val_20367 === (15))){
var inst_20341 = klipse.lang.javascript.append_to_chan.call(null,c);
var inst_20342 = (console.log = inst_20341);
var state_20366__$1 = (function (){var statearr_20372 = state_20366;
(statearr_20372[(8)] = inst_20342);

return statearr_20372;
})();
var statearr_20373_20400 = state_20366__$1;
(statearr_20373_20400[(2)] = null);

(statearr_20373_20400[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (13))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20366,(12),new cljs.core.Keyword(null,"default","default",-1987822328),null,(11));
var state_20366__$1 = state_20366;
if(cljs.core.truth_(async_code_QMARK_)){
var statearr_20374_20401 = state_20366__$1;
(statearr_20374_20401[(1)] = (14));

} else {
var statearr_20375_20402 = state_20366__$1;
(statearr_20375_20402[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (6))){
var inst_20362 = (state_20366[(2)]);
var state_20366__$1 = state_20366;
var statearr_20376_20403 = state_20366__$1;
(statearr_20376_20403[(2)] = inst_20362);

(statearr_20376_20403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (17))){
var inst_20351 = (state_20366[(2)]);
var state_20366__$1 = state_20366;
var statearr_20377_20404 = state_20366__$1;
(statearr_20377_20404[(2)] = inst_20351);

(statearr_20377_20404[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (3))){
var inst_20317 = klipse.utils.setup_container_BANG_.call(null,container_id);
var inst_20321 = cljs.core.map.call(null,klipse.lang.javascript.external_lib_path,external_libs);
var inst_20322 = klipse.utils.load_scripts.call(null,inst_20321,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),true);
var state_20366__$1 = (function (){var statearr_20378 = state_20366;
(statearr_20378[(9)] = inst_20317);

return statearr_20378;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20366__$1,(5),inst_20322);
} else {
if((state_val_20367 === (12))){
var inst_20332 = (state_20366[(2)]);
var inst_20333 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20332);
var state_20366__$1 = state_20366;
var statearr_20379_20405 = state_20366__$1;
(statearr_20379_20405[(2)] = inst_20333);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20366__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (2))){
var inst_20315 = cljs.core.async.put_BANG_.call(null,c,"");
var state_20366__$1 = state_20366;
var statearr_20380_20406 = state_20366__$1;
(statearr_20380_20406[(2)] = inst_20315);

(statearr_20380_20406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20366,null,null,(18),(17));
var inst_20348 = klipse.utils.eval_in_global_scope.call(null,exp);
var inst_20349 = klipse.lang.javascript.beautify.call(null,inst_20348);
var state_20366__$1 = state_20366;
var statearr_20381_20407 = state_20366__$1;
(statearr_20381_20407[(2)] = inst_20349);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20366__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (11))){
var inst_20355 = (state_20366[(2)]);
var state_20366__$1 = state_20366;
var statearr_20382_20408 = state_20366__$1;
(statearr_20382_20408[(2)] = inst_20355);

(statearr_20382_20408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (9))){
var inst_20327 = (state_20366[(10)]);
var inst_20326 = (state_20366[(11)]);
var inst_20357 = ["//Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20327),"\n","//Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20326)].join('');
var state_20366__$1 = state_20366;
var statearr_20383_20409 = state_20366__$1;
(statearr_20383_20409[(2)] = inst_20357);

(statearr_20383_20409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (5))){
var inst_20324 = (state_20366[(2)]);
var inst_20325 = cljs.core.nth.call(null,inst_20324,(0),null);
var inst_20326 = cljs.core.nth.call(null,inst_20324,(1),null);
var inst_20327 = cljs.core.nth.call(null,inst_20324,(2),null);
var state_20366__$1 = (function (){var statearr_20384 = state_20366;
(statearr_20384[(10)] = inst_20327);

(statearr_20384[(7)] = inst_20325);

(statearr_20384[(11)] = inst_20326);

return statearr_20384;
})();
var statearr_20385_20410 = state_20366__$1;
(statearr_20385_20410[(2)] = null);

(statearr_20385_20410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (14))){
var inst_20338 = klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,exp);
var state_20366__$1 = state_20366;
var statearr_20386_20411 = state_20366__$1;
(statearr_20386_20411[(2)] = inst_20338);

(statearr_20386_20411[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (16))){
var inst_20353 = (state_20366[(2)]);
var state_20366__$1 = state_20366;
var statearr_20387_20412 = state_20366__$1;
(statearr_20387_20412[(2)] = inst_20353);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20366__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (10))){
var inst_20359 = (state_20366[(2)]);
var inst_20360 = cljs.core.async.put_BANG_.call(null,c,inst_20359);
var state_20366__$1 = state_20366;
var statearr_20388_20413 = state_20366__$1;
(statearr_20388_20413[(2)] = inst_20360);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20366__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (18))){
var inst_20343 = (state_20366[(2)]);
var inst_20344 = (console.log = console.log);
var state_20366__$1 = (function (){var statearr_20389 = state_20366;
(statearr_20389[(12)] = inst_20343);

(statearr_20389[(13)] = inst_20344);

return statearr_20389;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20366__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20367 === (8))){
var state_20366__$1 = state_20366;
var statearr_20390_20414 = state_20366__$1;
(statearr_20390_20414[(2)] = null);

(statearr_20390_20414[(1)] = (13));


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
}
}
}
}
}
}
});
return (function() {
var klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto__ = null;
var klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto____0 = (function (){
var statearr_20391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20391[(0)] = klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto__);

(statearr_20391[(1)] = (1));

return statearr_20391;
});
var klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto____1 = (function (state_20366){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_20366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e20392){if((e20392 instanceof Object)){
var ex__13611__auto__ = e20392;
var statearr_20393_20415 = state_20366;
(statearr_20393_20415[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20416 = state_20366;
state_20366 = G__20416;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto__ = function(state_20366){
switch(arguments.length){
case 0:
return klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto____1.call(this,state_20366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto____0;
klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto____1;
return klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_20394 = f__13705__auto__.call(null);
(statearr_20394[(6)] = c__13704__auto___20395);

return statearr_20394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return c;
});
klipse.lang.javascript.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.str_eval_js_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"pretty_format.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-javascript","selector_eval_js",klipse.lang.javascript.opts);
klipse.lang.javascript.stopify_compile = (function klipse$lang$javascript$stopify_compile(source){
var asyncRun = (function (){var obj__17203__auto__ = stopify;
var f__17204__auto__ = (function (){var obj20417 = obj__17203__auto__;
var k20418 = "stopifyLocally";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20417,k20418)){
return (obj20417[k20418]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,source);
})();
(asyncRun.g["callbackLast"] = (function (){var obj20419 = console;
var k20420 = "log";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20419,k20420)){
return (obj20419[k20420]);
} else {
return null;
}
})());

return asyncRun;
});
klipse.lang.javascript.stopify_cb = (function klipse$lang$javascript$stopify_cb(result){
if(cljs.core._EQ_.call(null,(result["type"]),"exception")){
var obj__17203__auto__ = console;
var f__17204__auto__ = (function (){var obj20421 = obj__17203__auto__;
var k20422 = "log";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20421,k20422)){
return (obj20421[k20422]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,"Exception: ",(result["value"]));
} else {
return undefined;
}
});
klipse.lang.javascript.stopify_run = (function klipse$lang$javascript$stopify_run(asyncRun){
var obj__17203__auto___20427 = console;
var f__17204__auto___20428 = (function (){var obj20423 = obj__17203__auto___20427;
var k20424 = "info";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20423,k20424)){
return (obj20423[k20424]);
} else {
return null;
}
})();
f__17204__auto___20428.call(obj__17203__auto___20427,asyncRun.code);

var obj__17203__auto___20429 = asyncRun;
var f__17204__auto___20430 = (function (){var obj20425 = obj__17203__auto___20429;
var k20426 = "run";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20425,k20426)){
return (obj20425[k20426]);
} else {
return null;
}
})();
f__17204__auto___20430.call(obj__17203__auto___20429,klipse.lang.javascript.stopify_cb);

return "";
});
klipse.lang.javascript.str_eval_js_stopify_async = (function klipse$lang$javascript$str_eval_js_stopify_async(exp,p__20431){
var map__20432 = p__20431;
var map__20432__$1 = cljs.core.__destructure_map.call(null,map__20432);
var async_code_QMARK_ = cljs.core.get.call(null,map__20432__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var external_libs = cljs.core.get.call(null,map__20432__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var container_id = cljs.core.get.call(null,map__20432__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("[javascript] evaluating",exp);
} else {
}

var c__13704__auto___20515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_20486){
var state_val_20487 = (state_20486[(1)]);
if((state_val_20487 === (7))){
var inst_20445 = (state_20486[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20486,null,null,null,(6));
var inst_20450 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_20445);
var state_20486__$1 = state_20486;
if(inst_20450){
var statearr_20488_20516 = state_20486__$1;
(statearr_20488_20516[(1)] = (8));

} else {
var statearr_20489_20517 = state_20486__$1;
(statearr_20489_20517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (1))){
var inst_20433 = clojure.string.blank_QMARK_.call(null,exp);
var state_20486__$1 = state_20486;
if(inst_20433){
var statearr_20490_20518 = state_20486__$1;
(statearr_20490_20518[(1)] = (2));

} else {
var statearr_20491_20519 = state_20486__$1;
(statearr_20491_20519[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (4))){
var inst_20484 = (state_20486[(2)]);
var state_20486__$1 = state_20486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20486__$1,inst_20484);
} else {
if((state_val_20487 === (15))){
var inst_20461 = klipse.lang.javascript.append_to_chan.call(null,c);
var inst_20462 = (console.log = inst_20461);
var state_20486__$1 = (function (){var statearr_20492 = state_20486;
(statearr_20492[(8)] = inst_20462);

return statearr_20492;
})();
var statearr_20493_20520 = state_20486__$1;
(statearr_20493_20520[(2)] = null);

(statearr_20493_20520[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (13))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20486,(12),new cljs.core.Keyword(null,"default","default",-1987822328),null,(11));
var state_20486__$1 = state_20486;
if(cljs.core.truth_(async_code_QMARK_)){
var statearr_20494_20521 = state_20486__$1;
(statearr_20494_20521[(1)] = (14));

} else {
var statearr_20495_20522 = state_20486__$1;
(statearr_20495_20522[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (6))){
var inst_20482 = (state_20486[(2)]);
var state_20486__$1 = state_20486;
var statearr_20496_20523 = state_20486__$1;
(statearr_20496_20523[(2)] = inst_20482);

(statearr_20496_20523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (17))){
var inst_20471 = (state_20486[(2)]);
var state_20486__$1 = state_20486;
var statearr_20497_20524 = state_20486__$1;
(statearr_20497_20524[(2)] = inst_20471);

(statearr_20497_20524[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (3))){
var inst_20437 = klipse.utils.setup_container_BANG_.call(null,container_id);
var inst_20441 = cljs.core.map.call(null,klipse.lang.javascript.external_lib_path,external_libs);
var inst_20442 = klipse.utils.load_scripts.call(null,inst_20441,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),false);
var state_20486__$1 = (function (){var statearr_20498 = state_20486;
(statearr_20498[(9)] = inst_20437);

return statearr_20498;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20486__$1,(5),inst_20442);
} else {
if((state_val_20487 === (12))){
var inst_20452 = (state_20486[(2)]);
var inst_20453 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20452);
var state_20486__$1 = state_20486;
var statearr_20499_20525 = state_20486__$1;
(statearr_20499_20525[(2)] = inst_20453);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20486__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (2))){
var inst_20435 = cljs.core.async.put_BANG_.call(null,c,"");
var state_20486__$1 = state_20486;
var statearr_20500_20526 = state_20486__$1;
(statearr_20500_20526[(2)] = inst_20435);

(statearr_20500_20526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20486,null,null,(18),(17));
var inst_20468 = klipse.lang.javascript.stopify_compile.call(null,exp);
var inst_20469 = klipse.lang.javascript.stopify_run.call(null,inst_20468);
var state_20486__$1 = state_20486;
var statearr_20501_20527 = state_20486__$1;
(statearr_20501_20527[(2)] = inst_20469);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20486__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (11))){
var inst_20475 = (state_20486[(2)]);
var state_20486__$1 = state_20486;
var statearr_20502_20528 = state_20486__$1;
(statearr_20502_20528[(2)] = inst_20475);

(statearr_20502_20528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (9))){
var inst_20447 = (state_20486[(10)]);
var inst_20446 = (state_20486[(11)]);
var inst_20477 = ["//Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20447),"\n","//Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20446)].join('');
var state_20486__$1 = state_20486;
var statearr_20503_20529 = state_20486__$1;
(statearr_20503_20529[(2)] = inst_20477);

(statearr_20503_20529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (5))){
var inst_20444 = (state_20486[(2)]);
var inst_20445 = cljs.core.nth.call(null,inst_20444,(0),null);
var inst_20446 = cljs.core.nth.call(null,inst_20444,(1),null);
var inst_20447 = cljs.core.nth.call(null,inst_20444,(2),null);
var state_20486__$1 = (function (){var statearr_20504 = state_20486;
(statearr_20504[(10)] = inst_20447);

(statearr_20504[(11)] = inst_20446);

(statearr_20504[(7)] = inst_20445);

return statearr_20504;
})();
var statearr_20505_20530 = state_20486__$1;
(statearr_20505_20530[(2)] = null);

(statearr_20505_20530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (14))){
var inst_20458 = klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,exp);
var state_20486__$1 = state_20486;
var statearr_20506_20531 = state_20486__$1;
(statearr_20506_20531[(2)] = inst_20458);

(statearr_20506_20531[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (16))){
var inst_20473 = (state_20486[(2)]);
var state_20486__$1 = state_20486;
var statearr_20507_20532 = state_20486__$1;
(statearr_20507_20532[(2)] = inst_20473);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20486__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (10))){
var inst_20479 = (state_20486[(2)]);
var inst_20480 = cljs.core.async.put_BANG_.call(null,c,inst_20479);
var state_20486__$1 = state_20486;
var statearr_20508_20533 = state_20486__$1;
(statearr_20508_20533[(2)] = inst_20480);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20486__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (18))){
var inst_20463 = (state_20486[(2)]);
var inst_20464 = (console.log = console.log);
var state_20486__$1 = (function (){var statearr_20509 = state_20486;
(statearr_20509[(12)] = inst_20464);

(statearr_20509[(13)] = inst_20463);

return statearr_20509;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20486__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20487 === (8))){
var state_20486__$1 = state_20486;
var statearr_20510_20534 = state_20486__$1;
(statearr_20510_20534[(2)] = null);

(statearr_20510_20534[(1)] = (13));


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
}
}
}
}
}
}
});
return (function() {
var klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto__ = null;
var klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto____0 = (function (){
var statearr_20511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20511[(0)] = klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto__);

(statearr_20511[(1)] = (1));

return statearr_20511;
});
var klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto____1 = (function (state_20486){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_20486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e20512){if((e20512 instanceof Object)){
var ex__13611__auto__ = e20512;
var statearr_20513_20535 = state_20486;
(statearr_20513_20535[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20536 = state_20486;
state_20486 = G__20536;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto__ = function(state_20486){
switch(arguments.length){
case 0:
return klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto____1.call(this,state_20486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto____0;
klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto____1;
return klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_20514 = f__13705__auto__.call(null);
(statearr_20514[(6)] = c__13704__auto___20515);

return statearr_20514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return c;
});
klipse.lang.javascript.stopify_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.str_eval_js_stopify_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"stopify-full.bundle.js"),klipse.common.registry.scripts_src.call(null,"pretty_format.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-javascript-stopify","selector_eval_js_stopify",klipse.lang.javascript.stopify_opts);
klipse.lang.javascript.babel = (function klipse$lang$javascript$babel(src){
return ((function (){var obj__17203__auto__ = Babel;
var f__17204__auto__ = (function (){var obj20537 = obj__17203__auto__;
var k20538 = "transform";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20537,k20538)){
return (obj20537[k20538]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,src,({"presets": ["es2017","stage-2","stage-3"]}));
})()["code"]);
});
klipse.lang.javascript.eval_es2017 = (function klipse$lang$javascript$eval_es2017(exp,p__20539){
var map__20540 = p__20539;
var map__20540__$1 = cljs.core.__destructure_map.call(null,map__20540);
var async_code_QMARK_ = cljs.core.get.call(null,map__20540__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var container_id = cljs.core.get.call(null,map__20540__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("[javascript es2017] evaluating",exp);
} else {
}

try{if(clojure.string.blank_QMARK_.call(null,exp)){
cljs.core.async.put_BANG_.call(null,c,"");
} else {
klipse.utils.setup_container_BANG_.call(null,container_id);

var transpiled_exp_20543 = klipse.lang.javascript.babel.call(null,exp);
cljs.core.async.put_BANG_.call(null,c,(cljs.core.truth_(async_code_QMARK_)?klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,transpiled_exp_20543):(function (){var console_log20542 = console.log;
(console.log = klipse.lang.javascript.append_to_chan.call(null,c));

try{return klipse.lang.javascript.beautify.call(null,klipse.utils.eval_in_global_scope.call(null,transpiled_exp_20543));
}finally {(console.log = console_log20542);
}})()));
}
}catch (e20541){var o_20544 = e20541;
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_20544));
}
return c;
});
klipse.lang.javascript.es2017_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.eval_es2017,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"pretty_format.js"),klipse.common.registry.scripts_src.call(null,"babel.min.js"),klipse.common.registry.scripts_src.call(null,"babel_polyfill.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-es2017","selector_es2017",klipse.lang.javascript.es2017_opts);

//# sourceMappingURL=javascript.js.map

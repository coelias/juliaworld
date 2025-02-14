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
}catch (e21296){if((e21296 instanceof Object)){
var o = e21296;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_exp);
} else {
throw e21296;

}
}});
klipse.lang.javascript.append_to_chan = (function klipse$lang$javascript$append_to_chan(c){
return (function() { 
var G__21297__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",cljs.core.map.call(null,klipse.lang.javascript.beautify,args)));

cljs.core.async.put_BANG_.call(null,c,"\n");

return undefined;
};
var G__21297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21298__i = 0, G__21298__a = new Array(arguments.length -  0);
while (G__21298__i < G__21298__a.length) {G__21298__a[G__21298__i] = arguments[G__21298__i + 0]; ++G__21298__i;}
  args = new cljs.core.IndexedSeq(G__21298__a,0,null);
} 
return G__21297__delegate.call(this,args);};
G__21297.cljs$lang$maxFixedArity = 0;
G__21297.cljs$lang$applyTo = (function (arglist__21299){
var args = cljs.core.seq(arglist__21299);
return G__21297__delegate(args);
});
G__21297.cljs$core$IFn$_invoke$arity$variadic = G__21297__delegate;
return G__21297;
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
klipse.lang.javascript.str_eval_js_async = (function klipse$lang$javascript$str_eval_js_async(exp,p__21300){
var map__21301 = p__21300;
var map__21301__$1 = cljs.core.__destructure_map.call(null,map__21301);
var async_code_QMARK_ = cljs.core.get.call(null,map__21301__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var external_libs = cljs.core.get.call(null,map__21301__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var container_id = cljs.core.get.call(null,map__21301__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("[javascript] evaluating",exp);
} else {
}

var c__15619__auto___21384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_21355){
var state_val_21356 = (state_21355[(1)]);
if((state_val_21356 === (7))){
var inst_21314 = (state_21355[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21355,null,null,null,(6));
var inst_21319 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_21314);
var state_21355__$1 = state_21355;
if(inst_21319){
var statearr_21357_21385 = state_21355__$1;
(statearr_21357_21385[(1)] = (8));

} else {
var statearr_21358_21386 = state_21355__$1;
(statearr_21358_21386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21356 === (1))){
var inst_21302 = clojure.string.blank_QMARK_.call(null,exp);
var state_21355__$1 = state_21355;
if(inst_21302){
var statearr_21359_21387 = state_21355__$1;
(statearr_21359_21387[(1)] = (2));

} else {
var statearr_21360_21388 = state_21355__$1;
(statearr_21360_21388[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21356 === (4))){
var inst_21353 = (state_21355[(2)]);
var state_21355__$1 = state_21355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21355__$1,inst_21353);
} else {
if((state_val_21356 === (15))){
var inst_21330 = klipse.lang.javascript.append_to_chan.call(null,c);
var inst_21331 = (console.log = inst_21330);
var state_21355__$1 = (function (){var statearr_21361 = state_21355;
(statearr_21361[(8)] = inst_21331);

return statearr_21361;
})();
var statearr_21362_21389 = state_21355__$1;
(statearr_21362_21389[(2)] = null);

(statearr_21362_21389[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21356 === (13))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21355,(12),new cljs.core.Keyword(null,"default","default",-1987822328),null,(11));
var state_21355__$1 = state_21355;
if(cljs.core.truth_(async_code_QMARK_)){
var statearr_21363_21390 = state_21355__$1;
(statearr_21363_21390[(1)] = (14));

} else {
var statearr_21364_21391 = state_21355__$1;
(statearr_21364_21391[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21356 === (6))){
var inst_21351 = (state_21355[(2)]);
var state_21355__$1 = state_21355;
var statearr_21365_21392 = state_21355__$1;
(statearr_21365_21392[(2)] = inst_21351);

(statearr_21365_21392[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21356 === (17))){
var inst_21340 = (state_21355[(2)]);
var state_21355__$1 = state_21355;
var statearr_21366_21393 = state_21355__$1;
(statearr_21366_21393[(2)] = inst_21340);

(statearr_21366_21393[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21356 === (3))){
var inst_21306 = klipse.utils.setup_container_BANG_.call(null,container_id);
var inst_21310 = cljs.core.map.call(null,klipse.lang.javascript.external_lib_path,external_libs);
var inst_21311 = klipse.utils.load_scripts.call(null,inst_21310,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),true);
var state_21355__$1 = (function (){var statearr_21367 = state_21355;
(statearr_21367[(9)] = inst_21306);

return statearr_21367;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21355__$1,(5),inst_21311);
} else {
if((state_val_21356 === (12))){
var inst_21321 = (state_21355[(2)]);
var inst_21322 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21321);
var state_21355__$1 = state_21355;
var statearr_21368_21394 = state_21355__$1;
(statearr_21368_21394[(2)] = inst_21322);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21355__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21356 === (2))){
var inst_21304 = cljs.core.async.put_BANG_.call(null,c,"");
var state_21355__$1 = state_21355;
var statearr_21369_21395 = state_21355__$1;
(statearr_21369_21395[(2)] = inst_21304);

(statearr_21369_21395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21356 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21355,null,null,(18),(17));
var inst_21337 = klipse.utils.eval_in_global_scope.call(null,exp);
var inst_21338 = klipse.lang.javascript.beautify.call(null,inst_21337);
var state_21355__$1 = state_21355;
var statearr_21370_21396 = state_21355__$1;
(statearr_21370_21396[(2)] = inst_21338);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21355__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21356 === (11))){
var inst_21344 = (state_21355[(2)]);
var state_21355__$1 = state_21355;
var statearr_21371_21397 = state_21355__$1;
(statearr_21371_21397[(2)] = inst_21344);

(statearr_21371_21397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21356 === (9))){
var inst_21315 = (state_21355[(10)]);
var inst_21316 = (state_21355[(11)]);
var inst_21346 = ["//Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21316),"\n","//Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21315)].join('');
var state_21355__$1 = state_21355;
var statearr_21372_21398 = state_21355__$1;
(statearr_21372_21398[(2)] = inst_21346);

(statearr_21372_21398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21356 === (5))){
var inst_21313 = (state_21355[(2)]);
var inst_21314 = cljs.core.nth.call(null,inst_21313,(0),null);
var inst_21315 = cljs.core.nth.call(null,inst_21313,(1),null);
var inst_21316 = cljs.core.nth.call(null,inst_21313,(2),null);
var state_21355__$1 = (function (){var statearr_21373 = state_21355;
(statearr_21373[(10)] = inst_21315);

(statearr_21373[(7)] = inst_21314);

(statearr_21373[(11)] = inst_21316);

return statearr_21373;
})();
var statearr_21374_21399 = state_21355__$1;
(statearr_21374_21399[(2)] = null);

(statearr_21374_21399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21356 === (14))){
var inst_21327 = klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,exp);
var state_21355__$1 = state_21355;
var statearr_21375_21400 = state_21355__$1;
(statearr_21375_21400[(2)] = inst_21327);

(statearr_21375_21400[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21356 === (16))){
var inst_21342 = (state_21355[(2)]);
var state_21355__$1 = state_21355;
var statearr_21376_21401 = state_21355__$1;
(statearr_21376_21401[(2)] = inst_21342);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21355__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21356 === (10))){
var inst_21348 = (state_21355[(2)]);
var inst_21349 = cljs.core.async.put_BANG_.call(null,c,inst_21348);
var state_21355__$1 = state_21355;
var statearr_21377_21402 = state_21355__$1;
(statearr_21377_21402[(2)] = inst_21349);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21355__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21356 === (18))){
var inst_21332 = (state_21355[(2)]);
var inst_21333 = (console.log = console.log);
var state_21355__$1 = (function (){var statearr_21378 = state_21355;
(statearr_21378[(12)] = inst_21333);

(statearr_21378[(13)] = inst_21332);

return statearr_21378;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21355__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21356 === (8))){
var state_21355__$1 = state_21355;
var statearr_21379_21403 = state_21355__$1;
(statearr_21379_21403[(2)] = null);

(statearr_21379_21403[(1)] = (13));


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
var klipse$lang$javascript$str_eval_js_async_$_state_machine__15523__auto__ = null;
var klipse$lang$javascript$str_eval_js_async_$_state_machine__15523__auto____0 = (function (){
var statearr_21380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21380[(0)] = klipse$lang$javascript$str_eval_js_async_$_state_machine__15523__auto__);

(statearr_21380[(1)] = (1));

return statearr_21380;
});
var klipse$lang$javascript$str_eval_js_async_$_state_machine__15523__auto____1 = (function (state_21355){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_21355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e21381){if((e21381 instanceof Object)){
var ex__15526__auto__ = e21381;
var statearr_21382_21404 = state_21355;
(statearr_21382_21404[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21405 = state_21355;
state_21355 = G__21405;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$javascript$str_eval_js_async_$_state_machine__15523__auto__ = function(state_21355){
switch(arguments.length){
case 0:
return klipse$lang$javascript$str_eval_js_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$javascript$str_eval_js_async_$_state_machine__15523__auto____1.call(this,state_21355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$javascript$str_eval_js_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$javascript$str_eval_js_async_$_state_machine__15523__auto____0;
klipse$lang$javascript$str_eval_js_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$javascript$str_eval_js_async_$_state_machine__15523__auto____1;
return klipse$lang$javascript$str_eval_js_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_21383 = f__15620__auto__.call(null);
(statearr_21383[(6)] = c__15619__auto___21384);

return statearr_21383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return c;
});
klipse.lang.javascript.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.str_eval_js_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"pretty_format.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-javascript","selector_eval_js",klipse.lang.javascript.opts);
klipse.lang.javascript.stopify_compile = (function klipse$lang$javascript$stopify_compile(source){
var asyncRun = (function (){var obj__20025__auto__ = stopify;
var f__20026__auto__ = (function (){var obj21406 = obj__20025__auto__;
var k21407 = "stopifyLocally";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21406,k21407)){
return (obj21406[k21407]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,source);
})();
(asyncRun.g["callbackLast"] = (function (){var obj21408 = console;
var k21409 = "log";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21408,k21409)){
return (obj21408[k21409]);
} else {
return null;
}
})());

return asyncRun;
});
klipse.lang.javascript.stopify_cb = (function klipse$lang$javascript$stopify_cb(result){
if(cljs.core._EQ_.call(null,(result["type"]),"exception")){
var obj__20025__auto__ = console;
var f__20026__auto__ = (function (){var obj21410 = obj__20025__auto__;
var k21411 = "log";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21410,k21411)){
return (obj21410[k21411]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,"Exception: ",(result["value"]));
} else {
return undefined;
}
});
klipse.lang.javascript.stopify_run = (function klipse$lang$javascript$stopify_run(asyncRun){
var obj__20025__auto___21416 = console;
var f__20026__auto___21417 = (function (){var obj21412 = obj__20025__auto___21416;
var k21413 = "info";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21412,k21413)){
return (obj21412[k21413]);
} else {
return null;
}
})();
f__20026__auto___21417.call(obj__20025__auto___21416,asyncRun.code);

var obj__20025__auto___21418 = asyncRun;
var f__20026__auto___21419 = (function (){var obj21414 = obj__20025__auto___21418;
var k21415 = "run";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21414,k21415)){
return (obj21414[k21415]);
} else {
return null;
}
})();
f__20026__auto___21419.call(obj__20025__auto___21418,klipse.lang.javascript.stopify_cb);

return "";
});
klipse.lang.javascript.str_eval_js_stopify_async = (function klipse$lang$javascript$str_eval_js_stopify_async(exp,p__21420){
var map__21421 = p__21420;
var map__21421__$1 = cljs.core.__destructure_map.call(null,map__21421);
var async_code_QMARK_ = cljs.core.get.call(null,map__21421__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var external_libs = cljs.core.get.call(null,map__21421__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var container_id = cljs.core.get.call(null,map__21421__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("[javascript] evaluating",exp);
} else {
}

var c__15619__auto___21504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_21475){
var state_val_21476 = (state_21475[(1)]);
if((state_val_21476 === (7))){
var inst_21434 = (state_21475[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21475,null,null,null,(6));
var inst_21439 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_21434);
var state_21475__$1 = state_21475;
if(inst_21439){
var statearr_21477_21505 = state_21475__$1;
(statearr_21477_21505[(1)] = (8));

} else {
var statearr_21478_21506 = state_21475__$1;
(statearr_21478_21506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (1))){
var inst_21422 = clojure.string.blank_QMARK_.call(null,exp);
var state_21475__$1 = state_21475;
if(inst_21422){
var statearr_21479_21507 = state_21475__$1;
(statearr_21479_21507[(1)] = (2));

} else {
var statearr_21480_21508 = state_21475__$1;
(statearr_21480_21508[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (4))){
var inst_21473 = (state_21475[(2)]);
var state_21475__$1 = state_21475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21475__$1,inst_21473);
} else {
if((state_val_21476 === (15))){
var inst_21450 = klipse.lang.javascript.append_to_chan.call(null,c);
var inst_21451 = (console.log = inst_21450);
var state_21475__$1 = (function (){var statearr_21481 = state_21475;
(statearr_21481[(8)] = inst_21451);

return statearr_21481;
})();
var statearr_21482_21509 = state_21475__$1;
(statearr_21482_21509[(2)] = null);

(statearr_21482_21509[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (13))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21475,(12),new cljs.core.Keyword(null,"default","default",-1987822328),null,(11));
var state_21475__$1 = state_21475;
if(cljs.core.truth_(async_code_QMARK_)){
var statearr_21483_21510 = state_21475__$1;
(statearr_21483_21510[(1)] = (14));

} else {
var statearr_21484_21511 = state_21475__$1;
(statearr_21484_21511[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (6))){
var inst_21471 = (state_21475[(2)]);
var state_21475__$1 = state_21475;
var statearr_21485_21512 = state_21475__$1;
(statearr_21485_21512[(2)] = inst_21471);

(statearr_21485_21512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (17))){
var inst_21460 = (state_21475[(2)]);
var state_21475__$1 = state_21475;
var statearr_21486_21513 = state_21475__$1;
(statearr_21486_21513[(2)] = inst_21460);

(statearr_21486_21513[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (3))){
var inst_21426 = klipse.utils.setup_container_BANG_.call(null,container_id);
var inst_21430 = cljs.core.map.call(null,klipse.lang.javascript.external_lib_path,external_libs);
var inst_21431 = klipse.utils.load_scripts.call(null,inst_21430,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),false);
var state_21475__$1 = (function (){var statearr_21487 = state_21475;
(statearr_21487[(9)] = inst_21426);

return statearr_21487;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21475__$1,(5),inst_21431);
} else {
if((state_val_21476 === (12))){
var inst_21441 = (state_21475[(2)]);
var inst_21442 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21441);
var state_21475__$1 = state_21475;
var statearr_21488_21514 = state_21475__$1;
(statearr_21488_21514[(2)] = inst_21442);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21475__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (2))){
var inst_21424 = cljs.core.async.put_BANG_.call(null,c,"");
var state_21475__$1 = state_21475;
var statearr_21489_21515 = state_21475__$1;
(statearr_21489_21515[(2)] = inst_21424);

(statearr_21489_21515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21475,null,null,(18),(17));
var inst_21457 = klipse.lang.javascript.stopify_compile.call(null,exp);
var inst_21458 = klipse.lang.javascript.stopify_run.call(null,inst_21457);
var state_21475__$1 = state_21475;
var statearr_21490_21516 = state_21475__$1;
(statearr_21490_21516[(2)] = inst_21458);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21475__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (11))){
var inst_21464 = (state_21475[(2)]);
var state_21475__$1 = state_21475;
var statearr_21491_21517 = state_21475__$1;
(statearr_21491_21517[(2)] = inst_21464);

(statearr_21491_21517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (9))){
var inst_21436 = (state_21475[(10)]);
var inst_21435 = (state_21475[(11)]);
var inst_21466 = ["//Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21436),"\n","//Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21435)].join('');
var state_21475__$1 = state_21475;
var statearr_21492_21518 = state_21475__$1;
(statearr_21492_21518[(2)] = inst_21466);

(statearr_21492_21518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (5))){
var inst_21433 = (state_21475[(2)]);
var inst_21434 = cljs.core.nth.call(null,inst_21433,(0),null);
var inst_21435 = cljs.core.nth.call(null,inst_21433,(1),null);
var inst_21436 = cljs.core.nth.call(null,inst_21433,(2),null);
var state_21475__$1 = (function (){var statearr_21493 = state_21475;
(statearr_21493[(7)] = inst_21434);

(statearr_21493[(10)] = inst_21436);

(statearr_21493[(11)] = inst_21435);

return statearr_21493;
})();
var statearr_21494_21519 = state_21475__$1;
(statearr_21494_21519[(2)] = null);

(statearr_21494_21519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (14))){
var inst_21447 = klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,exp);
var state_21475__$1 = state_21475;
var statearr_21495_21520 = state_21475__$1;
(statearr_21495_21520[(2)] = inst_21447);

(statearr_21495_21520[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (16))){
var inst_21462 = (state_21475[(2)]);
var state_21475__$1 = state_21475;
var statearr_21496_21521 = state_21475__$1;
(statearr_21496_21521[(2)] = inst_21462);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21475__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (10))){
var inst_21468 = (state_21475[(2)]);
var inst_21469 = cljs.core.async.put_BANG_.call(null,c,inst_21468);
var state_21475__$1 = state_21475;
var statearr_21497_21522 = state_21475__$1;
(statearr_21497_21522[(2)] = inst_21469);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21475__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (18))){
var inst_21452 = (state_21475[(2)]);
var inst_21453 = (console.log = console.log);
var state_21475__$1 = (function (){var statearr_21498 = state_21475;
(statearr_21498[(12)] = inst_21453);

(statearr_21498[(13)] = inst_21452);

return statearr_21498;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21475__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21476 === (8))){
var state_21475__$1 = state_21475;
var statearr_21499_21523 = state_21475__$1;
(statearr_21499_21523[(2)] = null);

(statearr_21499_21523[(1)] = (13));


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
var klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__15523__auto__ = null;
var klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__15523__auto____0 = (function (){
var statearr_21500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21500[(0)] = klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__15523__auto__);

(statearr_21500[(1)] = (1));

return statearr_21500;
});
var klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__15523__auto____1 = (function (state_21475){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_21475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e21501){if((e21501 instanceof Object)){
var ex__15526__auto__ = e21501;
var statearr_21502_21524 = state_21475;
(statearr_21502_21524[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21525 = state_21475;
state_21475 = G__21525;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__15523__auto__ = function(state_21475){
switch(arguments.length){
case 0:
return klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__15523__auto____1.call(this,state_21475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__15523__auto____0;
klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__15523__auto____1;
return klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_21503 = f__15620__auto__.call(null);
(statearr_21503[(6)] = c__15619__auto___21504);

return statearr_21503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return c;
});
klipse.lang.javascript.stopify_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.str_eval_js_stopify_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"stopify-full.bundle.js"),klipse.common.registry.scripts_src.call(null,"pretty_format.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-javascript-stopify","selector_eval_js_stopify",klipse.lang.javascript.stopify_opts);
klipse.lang.javascript.babel = (function klipse$lang$javascript$babel(src){
return ((function (){var obj__20025__auto__ = Babel;
var f__20026__auto__ = (function (){var obj21526 = obj__20025__auto__;
var k21527 = "transform";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21526,k21527)){
return (obj21526[k21527]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,src,({"presets": ["es2017","stage-2","stage-3"]}));
})()["code"]);
});
klipse.lang.javascript.eval_es2017 = (function klipse$lang$javascript$eval_es2017(exp,p__21528){
var map__21529 = p__21528;
var map__21529__$1 = cljs.core.__destructure_map.call(null,map__21529);
var async_code_QMARK_ = cljs.core.get.call(null,map__21529__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var container_id = cljs.core.get.call(null,map__21529__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("[javascript es2017] evaluating",exp);
} else {
}

try{if(clojure.string.blank_QMARK_.call(null,exp)){
cljs.core.async.put_BANG_.call(null,c,"");
} else {
klipse.utils.setup_container_BANG_.call(null,container_id);

var transpiled_exp_21532 = klipse.lang.javascript.babel.call(null,exp);
cljs.core.async.put_BANG_.call(null,c,(cljs.core.truth_(async_code_QMARK_)?klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,transpiled_exp_21532):(function (){var console_log21531 = console.log;
(console.log = klipse.lang.javascript.append_to_chan.call(null,c));

try{return klipse.lang.javascript.beautify.call(null,klipse.utils.eval_in_global_scope.call(null,transpiled_exp_21532));
}finally {(console.log = console_log21531);
}})()));
}
}catch (e21530){var o_21533 = e21530;
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_21533));
}
return c;
});
klipse.lang.javascript.es2017_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.eval_es2017,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"pretty_format.js"),klipse.common.registry.scripts_src.call(null,"babel.min.js"),klipse.common.registry.scripts_src.call(null,"babel_polyfill.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-es2017","selector_es2017",klipse.lang.javascript.es2017_opts);

//# sourceMappingURL=javascript.js.map

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
}catch (e22993){if((e22993 instanceof Object)){
var o = e22993;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_exp);
} else {
throw e22993;

}
}});
klipse.lang.javascript.append_to_chan = (function klipse$lang$javascript$append_to_chan(c){
return (function() { 
var G__22994__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",cljs.core.map.call(null,klipse.lang.javascript.beautify,args)));

cljs.core.async.put_BANG_.call(null,c,"\n");

return undefined;
};
var G__22994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22995__i = 0, G__22995__a = new Array(arguments.length -  0);
while (G__22995__i < G__22995__a.length) {G__22995__a[G__22995__i] = arguments[G__22995__i + 0]; ++G__22995__i;}
  args = new cljs.core.IndexedSeq(G__22995__a,0,null);
} 
return G__22994__delegate.call(this,args);};
G__22994.cljs$lang$maxFixedArity = 0;
G__22994.cljs$lang$applyTo = (function (arglist__22996){
var args = cljs.core.seq(arglist__22996);
return G__22994__delegate(args);
});
G__22994.cljs$core$IFn$_invoke$arity$variadic = G__22994__delegate;
return G__22994;
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
klipse.lang.javascript.str_eval_js_async = (function klipse$lang$javascript$str_eval_js_async(exp,p__22997){
var map__22998 = p__22997;
var map__22998__$1 = cljs.core.__destructure_map.call(null,map__22998);
var async_code_QMARK_ = cljs.core.get.call(null,map__22998__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var external_libs = cljs.core.get.call(null,map__22998__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var container_id = cljs.core.get.call(null,map__22998__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("[javascript] evaluating",exp);
} else {
}

var c__13704__auto___23081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_23052){
var state_val_23053 = (state_23052[(1)]);
if((state_val_23053 === (7))){
var inst_23011 = (state_23052[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23052,null,null,null,(6));
var inst_23016 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_23011);
var state_23052__$1 = state_23052;
if(inst_23016){
var statearr_23054_23082 = state_23052__$1;
(statearr_23054_23082[(1)] = (8));

} else {
var statearr_23055_23083 = state_23052__$1;
(statearr_23055_23083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (1))){
var inst_22999 = clojure.string.blank_QMARK_.call(null,exp);
var state_23052__$1 = state_23052;
if(inst_22999){
var statearr_23056_23084 = state_23052__$1;
(statearr_23056_23084[(1)] = (2));

} else {
var statearr_23057_23085 = state_23052__$1;
(statearr_23057_23085[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (4))){
var inst_23050 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23052__$1,inst_23050);
} else {
if((state_val_23053 === (15))){
var inst_23027 = klipse.lang.javascript.append_to_chan.call(null,c);
var inst_23028 = (console.log = inst_23027);
var state_23052__$1 = (function (){var statearr_23058 = state_23052;
(statearr_23058[(8)] = inst_23028);

return statearr_23058;
})();
var statearr_23059_23086 = state_23052__$1;
(statearr_23059_23086[(2)] = null);

(statearr_23059_23086[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (13))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23052,(12),new cljs.core.Keyword(null,"default","default",-1987822328),null,(11));
var state_23052__$1 = state_23052;
if(cljs.core.truth_(async_code_QMARK_)){
var statearr_23060_23087 = state_23052__$1;
(statearr_23060_23087[(1)] = (14));

} else {
var statearr_23061_23088 = state_23052__$1;
(statearr_23061_23088[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (6))){
var inst_23048 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23062_23089 = state_23052__$1;
(statearr_23062_23089[(2)] = inst_23048);

(statearr_23062_23089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (17))){
var inst_23037 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23063_23090 = state_23052__$1;
(statearr_23063_23090[(2)] = inst_23037);

(statearr_23063_23090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (3))){
var inst_23003 = klipse.utils.setup_container_BANG_.call(null,container_id);
var inst_23007 = cljs.core.map.call(null,klipse.lang.javascript.external_lib_path,external_libs);
var inst_23008 = klipse.utils.load_scripts.call(null,inst_23007,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),true);
var state_23052__$1 = (function (){var statearr_23064 = state_23052;
(statearr_23064[(9)] = inst_23003);

return statearr_23064;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23052__$1,(5),inst_23008);
} else {
if((state_val_23053 === (12))){
var inst_23018 = (state_23052[(2)]);
var inst_23019 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23018);
var state_23052__$1 = state_23052;
var statearr_23065_23091 = state_23052__$1;
(statearr_23065_23091[(2)] = inst_23019);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23052__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (2))){
var inst_23001 = cljs.core.async.put_BANG_.call(null,c,"");
var state_23052__$1 = state_23052;
var statearr_23066_23092 = state_23052__$1;
(statearr_23066_23092[(2)] = inst_23001);

(statearr_23066_23092[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23052,null,null,(18),(17));
var inst_23034 = klipse.utils.eval_in_global_scope.call(null,exp);
var inst_23035 = klipse.lang.javascript.beautify.call(null,inst_23034);
var state_23052__$1 = state_23052;
var statearr_23067_23093 = state_23052__$1;
(statearr_23067_23093[(2)] = inst_23035);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23052__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (11))){
var inst_23041 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23068_23094 = state_23052__$1;
(statearr_23068_23094[(2)] = inst_23041);

(statearr_23068_23094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (9))){
var inst_23012 = (state_23052[(10)]);
var inst_23013 = (state_23052[(11)]);
var inst_23043 = ["//Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23013),"\n","//Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23012)].join('');
var state_23052__$1 = state_23052;
var statearr_23069_23095 = state_23052__$1;
(statearr_23069_23095[(2)] = inst_23043);

(statearr_23069_23095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (5))){
var inst_23010 = (state_23052[(2)]);
var inst_23011 = cljs.core.nth.call(null,inst_23010,(0),null);
var inst_23012 = cljs.core.nth.call(null,inst_23010,(1),null);
var inst_23013 = cljs.core.nth.call(null,inst_23010,(2),null);
var state_23052__$1 = (function (){var statearr_23070 = state_23052;
(statearr_23070[(7)] = inst_23011);

(statearr_23070[(10)] = inst_23012);

(statearr_23070[(11)] = inst_23013);

return statearr_23070;
})();
var statearr_23071_23096 = state_23052__$1;
(statearr_23071_23096[(2)] = null);

(statearr_23071_23096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (14))){
var inst_23024 = klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,exp);
var state_23052__$1 = state_23052;
var statearr_23072_23097 = state_23052__$1;
(statearr_23072_23097[(2)] = inst_23024);

(statearr_23072_23097[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (16))){
var inst_23039 = (state_23052[(2)]);
var state_23052__$1 = state_23052;
var statearr_23073_23098 = state_23052__$1;
(statearr_23073_23098[(2)] = inst_23039);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23052__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (10))){
var inst_23045 = (state_23052[(2)]);
var inst_23046 = cljs.core.async.put_BANG_.call(null,c,inst_23045);
var state_23052__$1 = state_23052;
var statearr_23074_23099 = state_23052__$1;
(statearr_23074_23099[(2)] = inst_23046);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23052__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (18))){
var inst_23029 = (state_23052[(2)]);
var inst_23030 = (console.log = console.log);
var state_23052__$1 = (function (){var statearr_23075 = state_23052;
(statearr_23075[(12)] = inst_23029);

(statearr_23075[(13)] = inst_23030);

return statearr_23075;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23052__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23053 === (8))){
var state_23052__$1 = state_23052;
var statearr_23076_23100 = state_23052__$1;
(statearr_23076_23100[(2)] = null);

(statearr_23076_23100[(1)] = (13));


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
var statearr_23077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23077[(0)] = klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto__);

(statearr_23077[(1)] = (1));

return statearr_23077;
});
var klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto____1 = (function (state_23052){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_23052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e23078){if((e23078 instanceof Object)){
var ex__13611__auto__ = e23078;
var statearr_23079_23101 = state_23052;
(statearr_23079_23101[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23102 = state_23052;
state_23052 = G__23102;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto__ = function(state_23052){
switch(arguments.length){
case 0:
return klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto____1.call(this,state_23052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto____0;
klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto____1;
return klipse$lang$javascript$str_eval_js_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_23080 = f__13705__auto__.call(null);
(statearr_23080[(6)] = c__13704__auto___23081);

return statearr_23080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return c;
});
klipse.lang.javascript.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.str_eval_js_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"pretty_format.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-javascript","selector_eval_js",klipse.lang.javascript.opts);
klipse.lang.javascript.stopify_compile = (function klipse$lang$javascript$stopify_compile(source){
var asyncRun = (function (){var obj__17203__auto__ = stopify;
var f__17204__auto__ = (function (){var obj23103 = obj__17203__auto__;
var k23104 = "stopifyLocally";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23103,k23104)){
return (obj23103[k23104]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,source);
})();
(asyncRun.g["callbackLast"] = (function (){var obj23105 = console;
var k23106 = "log";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23105,k23106)){
return (obj23105[k23106]);
} else {
return null;
}
})());

return asyncRun;
});
klipse.lang.javascript.stopify_cb = (function klipse$lang$javascript$stopify_cb(result){
if(cljs.core._EQ_.call(null,(result["type"]),"exception")){
var obj__17203__auto__ = console;
var f__17204__auto__ = (function (){var obj23107 = obj__17203__auto__;
var k23108 = "log";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23107,k23108)){
return (obj23107[k23108]);
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
var obj__17203__auto___23113 = console;
var f__17204__auto___23114 = (function (){var obj23109 = obj__17203__auto___23113;
var k23110 = "info";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23109,k23110)){
return (obj23109[k23110]);
} else {
return null;
}
})();
f__17204__auto___23114.call(obj__17203__auto___23113,asyncRun.code);

var obj__17203__auto___23115 = asyncRun;
var f__17204__auto___23116 = (function (){var obj23111 = obj__17203__auto___23115;
var k23112 = "run";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23111,k23112)){
return (obj23111[k23112]);
} else {
return null;
}
})();
f__17204__auto___23116.call(obj__17203__auto___23115,klipse.lang.javascript.stopify_cb);

return "";
});
klipse.lang.javascript.str_eval_js_stopify_async = (function klipse$lang$javascript$str_eval_js_stopify_async(exp,p__23117){
var map__23118 = p__23117;
var map__23118__$1 = cljs.core.__destructure_map.call(null,map__23118);
var async_code_QMARK_ = cljs.core.get.call(null,map__23118__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var external_libs = cljs.core.get.call(null,map__23118__$1,new cljs.core.Keyword(null,"external-libs","external-libs",1628481346),null);
var container_id = cljs.core.get.call(null,map__23118__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("[javascript] evaluating",exp);
} else {
}

var c__13704__auto___23201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_23172){
var state_val_23173 = (state_23172[(1)]);
if((state_val_23173 === (7))){
var inst_23131 = (state_23172[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23172,null,null,null,(6));
var inst_23136 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_23131);
var state_23172__$1 = state_23172;
if(inst_23136){
var statearr_23174_23202 = state_23172__$1;
(statearr_23174_23202[(1)] = (8));

} else {
var statearr_23175_23203 = state_23172__$1;
(statearr_23175_23203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (1))){
var inst_23119 = clojure.string.blank_QMARK_.call(null,exp);
var state_23172__$1 = state_23172;
if(inst_23119){
var statearr_23176_23204 = state_23172__$1;
(statearr_23176_23204[(1)] = (2));

} else {
var statearr_23177_23205 = state_23172__$1;
(statearr_23177_23205[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (4))){
var inst_23170 = (state_23172[(2)]);
var state_23172__$1 = state_23172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23172__$1,inst_23170);
} else {
if((state_val_23173 === (15))){
var inst_23147 = klipse.lang.javascript.append_to_chan.call(null,c);
var inst_23148 = (console.log = inst_23147);
var state_23172__$1 = (function (){var statearr_23178 = state_23172;
(statearr_23178[(8)] = inst_23148);

return statearr_23178;
})();
var statearr_23179_23206 = state_23172__$1;
(statearr_23179_23206[(2)] = null);

(statearr_23179_23206[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (13))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23172,(12),new cljs.core.Keyword(null,"default","default",-1987822328),null,(11));
var state_23172__$1 = state_23172;
if(cljs.core.truth_(async_code_QMARK_)){
var statearr_23180_23207 = state_23172__$1;
(statearr_23180_23207[(1)] = (14));

} else {
var statearr_23181_23208 = state_23172__$1;
(statearr_23181_23208[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (6))){
var inst_23168 = (state_23172[(2)]);
var state_23172__$1 = state_23172;
var statearr_23182_23209 = state_23172__$1;
(statearr_23182_23209[(2)] = inst_23168);

(statearr_23182_23209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (17))){
var inst_23157 = (state_23172[(2)]);
var state_23172__$1 = state_23172;
var statearr_23183_23210 = state_23172__$1;
(statearr_23183_23210[(2)] = inst_23157);

(statearr_23183_23210[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (3))){
var inst_23123 = klipse.utils.setup_container_BANG_.call(null,container_id);
var inst_23127 = cljs.core.map.call(null,klipse.lang.javascript.external_lib_path,external_libs);
var inst_23128 = klipse.utils.load_scripts.call(null,inst_23127,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),false);
var state_23172__$1 = (function (){var statearr_23184 = state_23172;
(statearr_23184[(9)] = inst_23123);

return statearr_23184;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23172__$1,(5),inst_23128);
} else {
if((state_val_23173 === (12))){
var inst_23138 = (state_23172[(2)]);
var inst_23139 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23138);
var state_23172__$1 = state_23172;
var statearr_23185_23211 = state_23172__$1;
(statearr_23185_23211[(2)] = inst_23139);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23172__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (2))){
var inst_23121 = cljs.core.async.put_BANG_.call(null,c,"");
var state_23172__$1 = state_23172;
var statearr_23186_23212 = state_23172__$1;
(statearr_23186_23212[(2)] = inst_23121);

(statearr_23186_23212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23172,null,null,(18),(17));
var inst_23154 = klipse.lang.javascript.stopify_compile.call(null,exp);
var inst_23155 = klipse.lang.javascript.stopify_run.call(null,inst_23154);
var state_23172__$1 = state_23172;
var statearr_23187_23213 = state_23172__$1;
(statearr_23187_23213[(2)] = inst_23155);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23172__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (11))){
var inst_23161 = (state_23172[(2)]);
var state_23172__$1 = state_23172;
var statearr_23188_23214 = state_23172__$1;
(statearr_23188_23214[(2)] = inst_23161);

(statearr_23188_23214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (9))){
var inst_23133 = (state_23172[(10)]);
var inst_23132 = (state_23172[(11)]);
var inst_23163 = ["//Cannot load script: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23133),"\n","//Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23132)].join('');
var state_23172__$1 = state_23172;
var statearr_23189_23215 = state_23172__$1;
(statearr_23189_23215[(2)] = inst_23163);

(statearr_23189_23215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (5))){
var inst_23130 = (state_23172[(2)]);
var inst_23131 = cljs.core.nth.call(null,inst_23130,(0),null);
var inst_23132 = cljs.core.nth.call(null,inst_23130,(1),null);
var inst_23133 = cljs.core.nth.call(null,inst_23130,(2),null);
var state_23172__$1 = (function (){var statearr_23190 = state_23172;
(statearr_23190[(10)] = inst_23133);

(statearr_23190[(7)] = inst_23131);

(statearr_23190[(11)] = inst_23132);

return statearr_23190;
})();
var statearr_23191_23216 = state_23172__$1;
(statearr_23191_23216[(2)] = null);

(statearr_23191_23216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (14))){
var inst_23144 = klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,exp);
var state_23172__$1 = state_23172;
var statearr_23192_23217 = state_23172__$1;
(statearr_23192_23217[(2)] = inst_23144);

(statearr_23192_23217[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (16))){
var inst_23159 = (state_23172[(2)]);
var state_23172__$1 = state_23172;
var statearr_23193_23218 = state_23172__$1;
(statearr_23193_23218[(2)] = inst_23159);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23172__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (10))){
var inst_23165 = (state_23172[(2)]);
var inst_23166 = cljs.core.async.put_BANG_.call(null,c,inst_23165);
var state_23172__$1 = state_23172;
var statearr_23194_23219 = state_23172__$1;
(statearr_23194_23219[(2)] = inst_23166);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23172__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (18))){
var inst_23149 = (state_23172[(2)]);
var inst_23150 = (console.log = console.log);
var state_23172__$1 = (function (){var statearr_23195 = state_23172;
(statearr_23195[(12)] = inst_23150);

(statearr_23195[(13)] = inst_23149);

return statearr_23195;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23172__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23173 === (8))){
var state_23172__$1 = state_23172;
var statearr_23196_23220 = state_23172__$1;
(statearr_23196_23220[(2)] = null);

(statearr_23196_23220[(1)] = (13));


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
var statearr_23197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23197[(0)] = klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto__);

(statearr_23197[(1)] = (1));

return statearr_23197;
});
var klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto____1 = (function (state_23172){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_23172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e23198){if((e23198 instanceof Object)){
var ex__13611__auto__ = e23198;
var statearr_23199_23221 = state_23172;
(statearr_23199_23221[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23222 = state_23172;
state_23172 = G__23222;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto__ = function(state_23172){
switch(arguments.length){
case 0:
return klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto____1.call(this,state_23172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto____0;
klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto____1;
return klipse$lang$javascript$str_eval_js_stopify_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_23200 = f__13705__auto__.call(null);
(statearr_23200[(6)] = c__13704__auto___23201);

return statearr_23200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return c;
});
klipse.lang.javascript.stopify_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.str_eval_js_stopify_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"stopify-full.bundle.js"),klipse.common.registry.scripts_src.call(null,"pretty_format.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-javascript-stopify","selector_eval_js_stopify",klipse.lang.javascript.stopify_opts);
klipse.lang.javascript.babel = (function klipse$lang$javascript$babel(src){
return ((function (){var obj__17203__auto__ = Babel;
var f__17204__auto__ = (function (){var obj23223 = obj__17203__auto__;
var k23224 = "transform";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23223,k23224)){
return (obj23223[k23224]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,src,({"presets": ["es2017","stage-2","stage-3"]}));
})()["code"]);
});
klipse.lang.javascript.eval_es2017 = (function klipse$lang$javascript$eval_es2017(exp,p__23225){
var map__23226 = p__23225;
var map__23226__$1 = cljs.core.__destructure_map.call(null,map__23226);
var async_code_QMARK_ = cljs.core.get.call(null,map__23226__$1,new cljs.core.Keyword(null,"async-code?","async-code?",-832111541),false);
var container_id = cljs.core.get.call(null,map__23226__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c = cljs.core.async.chan.call(null);
if(klipse.utils.verbose_QMARK_.call(null)){
console.info("[javascript es2017] evaluating",exp);
} else {
}

try{if(clojure.string.blank_QMARK_.call(null,exp)){
cljs.core.async.put_BANG_.call(null,c,"");
} else {
klipse.utils.setup_container_BANG_.call(null,container_id);

var transpiled_exp_23229 = klipse.lang.javascript.babel.call(null,exp);
cljs.core.async.put_BANG_.call(null,c,(cljs.core.truth_(async_code_QMARK_)?klipse.lang.javascript.eval_with_logger_BANG_.call(null,c,transpiled_exp_23229):(function (){var console_log23228 = console.log;
(console.log = klipse.lang.javascript.append_to_chan.call(null,c));

try{return klipse.lang.javascript.beautify.call(null,klipse.utils.eval_in_global_scope.call(null,transpiled_exp_23229));
}finally {(console.log = console_log23228);
}})()));
}
}catch (e23227){var o_23230 = e23227;
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_23230));
}
return c;
});
klipse.lang.javascript.es2017_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"javascript",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify-output?","beautify-output?",3792957),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.javascript.eval_es2017,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"pretty_format.js"),klipse.common.registry.scripts_src.call(null,"babel.min.js"),klipse.common.registry.scripts_src.call(null,"babel_polyfill.min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-es2017","selector_es2017",klipse.lang.javascript.es2017_opts);

//# sourceMappingURL=javascript.js.map

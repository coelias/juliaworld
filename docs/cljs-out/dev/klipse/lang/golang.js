// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.golang');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
if((typeof klipse !== 'undefined') && (typeof klipse.lang !== 'undefined') && (typeof klipse.lang.golang !== 'undefined') && (typeof klipse.lang.golang._STAR_loaded_STAR_ !== 'undefined')){
} else {
klipse.lang.golang._STAR_loaded_STAR_ = false;
}
var obj28934_28938 = window;
var obj28935_28939 = (((!((obj28934_28938 == null))))?obj28934_28938:({}));
(obj28935_28939["fs"] = null);

klipse.lang.golang.load_module_BANG_ = (function klipse$lang$golang$load_module_BANG_(){
var c = cljs.core.async.chan.call(null);
var xhr = (new window.XMLHttpRequest());
var obj__20025__auto___28958 = xhr;
var f__20026__auto___28959 = (function (){var obj28940 = obj__20025__auto___28958;
var k28941 = "open";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28940,k28941)){
return (obj28940[k28941]);
} else {
return null;
}
})();
f__20026__auto___28959.call(obj__20025__auto___28958,"GET",klipse.common.registry.wasm_src.call(null,"yaegi.wasm"));

var obj28942_28960 = xhr;
var obj28943_28961 = (((!((obj28942_28960 == null))))?obj28942_28960:({}));
(obj28943_28961["responseType"] = "arraybuffer");


var obj__20025__auto___28962 = xhr;
var f__20026__auto___28963 = (function (){var obj28946 = obj__20025__auto___28962;
var k28947 = "overrideMimeType";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28946,k28947)){
return (obj28946[k28947]);
} else {
return null;
}
})();
f__20026__auto___28963.call(obj__20025__auto___28962,"application/javascript");

var obj28948_28964 = xhr;
var obj28949_28965 = (((!((obj28948_28964 == null))))?obj28948_28964:({}));
(obj28949_28965["onload"] = (function (){
if(klipse.utils.verbose_QMARK_.call(null)){
console.log("wasm loaded:");
} else {
}

var gos = (new Go());
return (function (){var obj__20025__auto__ = WebAssembly;
var f__20026__auto__ = (function (){var obj28952 = obj__20025__auto__;
var k28953 = "instantiate";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28952,k28953)){
return (obj28952[k28953]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,(xhr["response"]),(gos["importObject"]));
})().then((function (result){
var obj__20025__auto___28966 = gos;
var f__20026__auto___28967 = (function (){var obj28954 = obj__20025__auto___28966;
var k28955 = "run";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28954,k28955)){
return (obj28954[k28955]);
} else {
return null;
}
})();
f__20026__auto___28967.call(obj__20025__auto___28966,(result["instance"]));

return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236)], null));
}));
}));


var obj__20025__auto___28968 = xhr;
var f__20026__auto___28969 = (function (){var obj28956 = obj__20025__auto___28968;
var k28957 = "send";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28956,k28957)){
return (obj28956[k28957]);
} else {
return null;
}
})();
f__20026__auto___28969.call(obj__20025__auto___28968,null);

return c;
});
klipse.lang.golang.the_eval = (function klipse$lang$golang$the_eval(src,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29010){
var state_val_29011 = (state_29010[(1)]);
if((state_val_29011 === (7))){
var inst_28986 = (window["evalGo"]);
var state_29010__$1 = state_29010;
var statearr_29012_29036 = state_29010__$1;
(statearr_29012_29036[(2)] = inst_28986);

(statearr_29012_29036[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (1))){
var state_29010__$1 = state_29010;
if(cljs.core.truth_(klipse.lang.golang._STAR_loaded_STAR_)){
var statearr_29013_29037 = state_29010__$1;
(statearr_29013_29037[(1)] = (2));

} else {
var statearr_29014_29038 = state_29010__$1;
(statearr_29014_29038[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (4))){
var inst_28981 = (state_29010[(2)]);
var inst_28984 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,window,"evalGo");
var state_29010__$1 = (function (){var statearr_29015 = state_29010;
(statearr_29015[(7)] = inst_28981);

return statearr_29015;
})();
if(inst_28984){
var statearr_29016_29039 = state_29010__$1;
(statearr_29016_29039[(1)] = (7));

} else {
var statearr_29017_29040 = state_29010__$1;
(statearr_29017_29040[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (15))){
var inst_29003 = (state_29010[(2)]);
var state_29010__$1 = state_29010;
var statearr_29018_29041 = state_29010__$1;
(statearr_29018_29041[(2)] = inst_29003);

(statearr_29018_29041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (13))){
var inst_28990 = (state_29010[(8)]);
var inst_28996 = (inst_28990["stdout"]);
var inst_28997 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28996);
var state_29010__$1 = state_29010;
var statearr_29019_29042 = state_29010__$1;
(statearr_29019_29042[(2)] = inst_28997);

(statearr_29019_29042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (6))){
var inst_28978 = (state_29010[(2)]);
var inst_28979 = (klipse.lang.golang._STAR_loaded_STAR_ = true);
var state_29010__$1 = (function (){var statearr_29020 = state_29010;
(statearr_29020[(9)] = inst_28978);

return statearr_29020;
})();
var statearr_29021_29043 = state_29010__$1;
(statearr_29021_29043[(2)] = inst_28979);

(statearr_29021_29043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (3))){
var inst_28972 = klipse.common.registry.scripts_src.call(null,"wasm_exec.js");
var inst_28973 = klipse.utils.add_script_tag_BANG_.call(null,inst_28972);
var state_29010__$1 = state_29010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29010__$1,(5),inst_28973);
} else {
if((state_val_29011 === (12))){
var inst_29008 = (state_29010[(2)]);
var state_29010__$1 = state_29010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29010__$1,inst_29008);
} else {
if((state_val_29011 === (2))){
var state_29010__$1 = state_29010;
var statearr_29022_29044 = state_29010__$1;
(statearr_29022_29044[(2)] = null);

(statearr_29022_29044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (11))){
var inst_28990 = (state_29010[(8)]);
var inst_29005 = (inst_28990["error"]);
var inst_29006 = ["error:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29005)].join('');
var state_29010__$1 = state_29010;
var statearr_29023_29045 = state_29010__$1;
(statearr_29023_29045[(2)] = inst_29006);

(statearr_29023_29045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (9))){
var inst_28990 = (state_29010[(8)]);
var inst_28989 = (state_29010[(2)]);
var inst_28990__$1 = inst_28989.call(window,src);
var inst_28991 = (inst_28990__$1["error"]);
var inst_28992 = clojure.string.blank_QMARK_.call(null,inst_28991);
var state_29010__$1 = (function (){var statearr_29024 = state_29010;
(statearr_29024[(8)] = inst_28990__$1);

return statearr_29024;
})();
if(inst_28992){
var statearr_29025_29046 = state_29010__$1;
(statearr_29025_29046[(1)] = (10));

} else {
var statearr_29026_29047 = state_29010__$1;
(statearr_29026_29047[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (5))){
var inst_28975 = (state_29010[(2)]);
var inst_28976 = klipse.lang.golang.load_module_BANG_.call(null);
var state_29010__$1 = (function (){var statearr_29027 = state_29010;
(statearr_29027[(10)] = inst_28975);

return statearr_29027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29010__$1,(6),inst_28976);
} else {
if((state_val_29011 === (14))){
var inst_28990 = (state_29010[(8)]);
var inst_28999 = (inst_28990["stdout"]);
var inst_29000 = (inst_28990["stderr"]);
var inst_29001 = ["stdout:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28999),"\nstderr:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29000)].join('');
var state_29010__$1 = state_29010;
var statearr_29028_29048 = state_29010__$1;
(statearr_29028_29048[(2)] = inst_29001);

(statearr_29028_29048[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (10))){
var inst_28990 = (state_29010[(8)]);
var inst_28994 = (inst_28990["stderr"]);
var state_29010__$1 = state_29010;
if(cljs.core.truth_(inst_28994)){
var statearr_29029_29049 = state_29010__$1;
(statearr_29029_29049[(1)] = (13));

} else {
var statearr_29030_29050 = state_29010__$1;
(statearr_29030_29050[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29011 === (8))){
var state_29010__$1 = state_29010;
var statearr_29031_29051 = state_29010__$1;
(statearr_29031_29051[(2)] = null);

(statearr_29031_29051[(1)] = (9));


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
});
return (function() {
var klipse$lang$golang$the_eval_$_state_machine__15523__auto__ = null;
var klipse$lang$golang$the_eval_$_state_machine__15523__auto____0 = (function (){
var statearr_29032 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29032[(0)] = klipse$lang$golang$the_eval_$_state_machine__15523__auto__);

(statearr_29032[(1)] = (1));

return statearr_29032;
});
var klipse$lang$golang$the_eval_$_state_machine__15523__auto____1 = (function (state_29010){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29033){if((e29033 instanceof Object)){
var ex__15526__auto__ = e29033;
var statearr_29034_29052 = state_29010;
(statearr_29034_29052[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29053 = state_29010;
state_29010 = G__29053;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$golang$the_eval_$_state_machine__15523__auto__ = function(state_29010){
switch(arguments.length){
case 0:
return klipse$lang$golang$the_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$golang$the_eval_$_state_machine__15523__auto____1.call(this,state_29010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$golang$the_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$golang$the_eval_$_state_machine__15523__auto____0;
klipse$lang$golang$the_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$golang$the_eval_$_state_machine__15523__auto____1;
return klipse$lang$golang$the_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29035 = f__15620__auto__.call(null);
(statearr_29035[(6)] = c__15619__auto__);

return statearr_29035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.golang.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-go",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.golang.the_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"go")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"golang","selector_golang",klipse.lang.golang.opts);

//# sourceMappingURL=golang.js.map

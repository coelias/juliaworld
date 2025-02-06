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
var obj28937_28941 = window;
var obj28938_28942 = (((!((obj28937_28941 == null))))?obj28937_28941:({}));
(obj28938_28942["fs"] = null);

klipse.lang.golang.load_module_BANG_ = (function klipse$lang$golang$load_module_BANG_(){
var c = cljs.core.async.chan.call(null);
var xhr = (new window.XMLHttpRequest());
var obj__20025__auto___28961 = xhr;
var f__20026__auto___28962 = (function (){var obj28943 = obj__20025__auto___28961;
var k28944 = "open";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28943,k28944)){
return (obj28943[k28944]);
} else {
return null;
}
})();
f__20026__auto___28962.call(obj__20025__auto___28961,"GET",klipse.common.registry.wasm_src.call(null,"yaegi.wasm"));

var obj28945_28963 = xhr;
var obj28946_28964 = (((!((obj28945_28963 == null))))?obj28945_28963:({}));
(obj28946_28964["responseType"] = "arraybuffer");


var obj__20025__auto___28965 = xhr;
var f__20026__auto___28966 = (function (){var obj28949 = obj__20025__auto___28965;
var k28950 = "overrideMimeType";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28949,k28950)){
return (obj28949[k28950]);
} else {
return null;
}
})();
f__20026__auto___28966.call(obj__20025__auto___28965,"application/javascript");

var obj28951_28967 = xhr;
var obj28952_28968 = (((!((obj28951_28967 == null))))?obj28951_28967:({}));
(obj28952_28968["onload"] = (function (){
if(klipse.utils.verbose_QMARK_.call(null)){
console.log("wasm loaded:");
} else {
}

var gos = (new Go());
return (function (){var obj__20025__auto__ = WebAssembly;
var f__20026__auto__ = (function (){var obj28955 = obj__20025__auto__;
var k28956 = "instantiate";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28955,k28956)){
return (obj28955[k28956]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,(xhr["response"]),(gos["importObject"]));
})().then((function (result){
var obj__20025__auto___28969 = gos;
var f__20026__auto___28970 = (function (){var obj28957 = obj__20025__auto___28969;
var k28958 = "run";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28957,k28958)){
return (obj28957[k28958]);
} else {
return null;
}
})();
f__20026__auto___28970.call(obj__20025__auto___28969,(result["instance"]));

return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236)], null));
}));
}));


var obj__20025__auto___28971 = xhr;
var f__20026__auto___28972 = (function (){var obj28959 = obj__20025__auto___28971;
var k28960 = "send";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28959,k28960)){
return (obj28959[k28960]);
} else {
return null;
}
})();
f__20026__auto___28972.call(obj__20025__auto___28971,null);

return c;
});
klipse.lang.golang.the_eval = (function klipse$lang$golang$the_eval(src,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29013){
var state_val_29014 = (state_29013[(1)]);
if((state_val_29014 === (7))){
var inst_28989 = (window["evalGo"]);
var state_29013__$1 = state_29013;
var statearr_29015_29039 = state_29013__$1;
(statearr_29015_29039[(2)] = inst_28989);

(statearr_29015_29039[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (1))){
var state_29013__$1 = state_29013;
if(cljs.core.truth_(klipse.lang.golang._STAR_loaded_STAR_)){
var statearr_29016_29040 = state_29013__$1;
(statearr_29016_29040[(1)] = (2));

} else {
var statearr_29017_29041 = state_29013__$1;
(statearr_29017_29041[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (4))){
var inst_28984 = (state_29013[(2)]);
var inst_28987 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,window,"evalGo");
var state_29013__$1 = (function (){var statearr_29018 = state_29013;
(statearr_29018[(7)] = inst_28984);

return statearr_29018;
})();
if(inst_28987){
var statearr_29019_29042 = state_29013__$1;
(statearr_29019_29042[(1)] = (7));

} else {
var statearr_29020_29043 = state_29013__$1;
(statearr_29020_29043[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (15))){
var inst_29006 = (state_29013[(2)]);
var state_29013__$1 = state_29013;
var statearr_29021_29044 = state_29013__$1;
(statearr_29021_29044[(2)] = inst_29006);

(statearr_29021_29044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (13))){
var inst_28993 = (state_29013[(8)]);
var inst_28999 = (inst_28993["stdout"]);
var inst_29000 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28999);
var state_29013__$1 = state_29013;
var statearr_29022_29045 = state_29013__$1;
(statearr_29022_29045[(2)] = inst_29000);

(statearr_29022_29045[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (6))){
var inst_28981 = (state_29013[(2)]);
var inst_28982 = (klipse.lang.golang._STAR_loaded_STAR_ = true);
var state_29013__$1 = (function (){var statearr_29023 = state_29013;
(statearr_29023[(9)] = inst_28981);

return statearr_29023;
})();
var statearr_29024_29046 = state_29013__$1;
(statearr_29024_29046[(2)] = inst_28982);

(statearr_29024_29046[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (3))){
var inst_28975 = klipse.common.registry.scripts_src.call(null,"wasm_exec.js");
var inst_28976 = klipse.utils.add_script_tag_BANG_.call(null,inst_28975);
var state_29013__$1 = state_29013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29013__$1,(5),inst_28976);
} else {
if((state_val_29014 === (12))){
var inst_29011 = (state_29013[(2)]);
var state_29013__$1 = state_29013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29013__$1,inst_29011);
} else {
if((state_val_29014 === (2))){
var state_29013__$1 = state_29013;
var statearr_29025_29047 = state_29013__$1;
(statearr_29025_29047[(2)] = null);

(statearr_29025_29047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (11))){
var inst_28993 = (state_29013[(8)]);
var inst_29008 = (inst_28993["error"]);
var inst_29009 = ["error:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29008)].join('');
var state_29013__$1 = state_29013;
var statearr_29026_29048 = state_29013__$1;
(statearr_29026_29048[(2)] = inst_29009);

(statearr_29026_29048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (9))){
var inst_28993 = (state_29013[(8)]);
var inst_28992 = (state_29013[(2)]);
var inst_28993__$1 = inst_28992.call(window,src);
var inst_28994 = (inst_28993__$1["error"]);
var inst_28995 = clojure.string.blank_QMARK_.call(null,inst_28994);
var state_29013__$1 = (function (){var statearr_29027 = state_29013;
(statearr_29027[(8)] = inst_28993__$1);

return statearr_29027;
})();
if(inst_28995){
var statearr_29028_29049 = state_29013__$1;
(statearr_29028_29049[(1)] = (10));

} else {
var statearr_29029_29050 = state_29013__$1;
(statearr_29029_29050[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (5))){
var inst_28978 = (state_29013[(2)]);
var inst_28979 = klipse.lang.golang.load_module_BANG_.call(null);
var state_29013__$1 = (function (){var statearr_29030 = state_29013;
(statearr_29030[(10)] = inst_28978);

return statearr_29030;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29013__$1,(6),inst_28979);
} else {
if((state_val_29014 === (14))){
var inst_28993 = (state_29013[(8)]);
var inst_29002 = (inst_28993["stdout"]);
var inst_29003 = (inst_28993["stderr"]);
var inst_29004 = ["stdout:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29002),"\nstderr:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29003)].join('');
var state_29013__$1 = state_29013;
var statearr_29031_29051 = state_29013__$1;
(statearr_29031_29051[(2)] = inst_29004);

(statearr_29031_29051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (10))){
var inst_28993 = (state_29013[(8)]);
var inst_28997 = (inst_28993["stderr"]);
var state_29013__$1 = state_29013;
if(cljs.core.truth_(inst_28997)){
var statearr_29032_29052 = state_29013__$1;
(statearr_29032_29052[(1)] = (13));

} else {
var statearr_29033_29053 = state_29013__$1;
(statearr_29033_29053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29014 === (8))){
var state_29013__$1 = state_29013;
var statearr_29034_29054 = state_29013__$1;
(statearr_29034_29054[(2)] = null);

(statearr_29034_29054[(1)] = (9));


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
var statearr_29035 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29035[(0)] = klipse$lang$golang$the_eval_$_state_machine__15523__auto__);

(statearr_29035[(1)] = (1));

return statearr_29035;
});
var klipse$lang$golang$the_eval_$_state_machine__15523__auto____1 = (function (state_29013){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29036){if((e29036 instanceof Object)){
var ex__15526__auto__ = e29036;
var statearr_29037_29055 = state_29013;
(statearr_29037_29055[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29056 = state_29013;
state_29013 = G__29056;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$golang$the_eval_$_state_machine__15523__auto__ = function(state_29013){
switch(arguments.length){
case 0:
return klipse$lang$golang$the_eval_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$golang$the_eval_$_state_machine__15523__auto____1.call(this,state_29013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$golang$the_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$golang$the_eval_$_state_machine__15523__auto____0;
klipse$lang$golang$the_eval_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$golang$the_eval_$_state_machine__15523__auto____1;
return klipse$lang$golang$the_eval_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29038 = f__15620__auto__.call(null);
(statearr_29038[(6)] = c__15619__auto__);

return statearr_29038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.golang.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-go",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.golang.the_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"go")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"golang","selector_golang",klipse.lang.golang.opts);

//# sourceMappingURL=golang.js.map

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
var obj21052_21056 = window;
var obj21053_21057 = (((!((obj21052_21056 == null))))?obj21052_21056:({}));
(obj21053_21057["fs"] = null);

klipse.lang.golang.load_module_BANG_ = (function klipse$lang$golang$load_module_BANG_(){
var c = cljs.core.async.chan.call(null);
var xhr = (new window.XMLHttpRequest());
var obj__17203__auto___21076 = xhr;
var f__17204__auto___21077 = (function (){var obj21058 = obj__17203__auto___21076;
var k21059 = "open";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21058,k21059)){
return (obj21058[k21059]);
} else {
return null;
}
})();
f__17204__auto___21077.call(obj__17203__auto___21076,"GET",klipse.common.registry.wasm_src.call(null,"yaegi.wasm"));

var obj21060_21078 = xhr;
var obj21061_21079 = (((!((obj21060_21078 == null))))?obj21060_21078:({}));
(obj21061_21079["responseType"] = "arraybuffer");


var obj__17203__auto___21080 = xhr;
var f__17204__auto___21081 = (function (){var obj21064 = obj__17203__auto___21080;
var k21065 = "overrideMimeType";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21064,k21065)){
return (obj21064[k21065]);
} else {
return null;
}
})();
f__17204__auto___21081.call(obj__17203__auto___21080,"application/javascript");

var obj21066_21082 = xhr;
var obj21067_21083 = (((!((obj21066_21082 == null))))?obj21066_21082:({}));
(obj21067_21083["onload"] = (function (){
if(klipse.utils.verbose_QMARK_.call(null)){
console.log("wasm loaded:");
} else {
}

var gos = (new Go());
return (function (){var obj__17203__auto__ = WebAssembly;
var f__17204__auto__ = (function (){var obj21070 = obj__17203__auto__;
var k21071 = "instantiate";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21070,k21071)){
return (obj21070[k21071]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,(xhr["response"]),(gos["importObject"]));
})().then((function (result){
var obj__17203__auto___21084 = gos;
var f__17204__auto___21085 = (function (){var obj21072 = obj__17203__auto___21084;
var k21073 = "run";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21072,k21073)){
return (obj21072[k21073]);
} else {
return null;
}
})();
f__17204__auto___21085.call(obj__17203__auto___21084,(result["instance"]));

return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236)], null));
}));
}));


var obj__17203__auto___21086 = xhr;
var f__17204__auto___21087 = (function (){var obj21074 = obj__17203__auto___21086;
var k21075 = "send";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21074,k21075)){
return (obj21074[k21075]);
} else {
return null;
}
})();
f__17204__auto___21087.call(obj__17203__auto___21086,null);

return c;
});
klipse.lang.golang.the_eval = (function klipse$lang$golang$the_eval(src,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_21128){
var state_val_21129 = (state_21128[(1)]);
if((state_val_21129 === (7))){
var inst_21104 = (window["evalGo"]);
var state_21128__$1 = state_21128;
var statearr_21130_21154 = state_21128__$1;
(statearr_21130_21154[(2)] = inst_21104);

(statearr_21130_21154[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (1))){
var state_21128__$1 = state_21128;
if(cljs.core.truth_(klipse.lang.golang._STAR_loaded_STAR_)){
var statearr_21131_21155 = state_21128__$1;
(statearr_21131_21155[(1)] = (2));

} else {
var statearr_21132_21156 = state_21128__$1;
(statearr_21132_21156[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (4))){
var inst_21099 = (state_21128[(2)]);
var inst_21102 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,window,"evalGo");
var state_21128__$1 = (function (){var statearr_21133 = state_21128;
(statearr_21133[(7)] = inst_21099);

return statearr_21133;
})();
if(inst_21102){
var statearr_21134_21157 = state_21128__$1;
(statearr_21134_21157[(1)] = (7));

} else {
var statearr_21135_21158 = state_21128__$1;
(statearr_21135_21158[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (15))){
var inst_21121 = (state_21128[(2)]);
var state_21128__$1 = state_21128;
var statearr_21136_21159 = state_21128__$1;
(statearr_21136_21159[(2)] = inst_21121);

(statearr_21136_21159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (13))){
var inst_21108 = (state_21128[(8)]);
var inst_21114 = (inst_21108["stdout"]);
var inst_21115 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21114);
var state_21128__$1 = state_21128;
var statearr_21137_21160 = state_21128__$1;
(statearr_21137_21160[(2)] = inst_21115);

(statearr_21137_21160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (6))){
var inst_21096 = (state_21128[(2)]);
var inst_21097 = (klipse.lang.golang._STAR_loaded_STAR_ = true);
var state_21128__$1 = (function (){var statearr_21138 = state_21128;
(statearr_21138[(9)] = inst_21096);

return statearr_21138;
})();
var statearr_21139_21161 = state_21128__$1;
(statearr_21139_21161[(2)] = inst_21097);

(statearr_21139_21161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (3))){
var inst_21090 = klipse.common.registry.scripts_src.call(null,"wasm_exec.js");
var inst_21091 = klipse.utils.add_script_tag_BANG_.call(null,inst_21090);
var state_21128__$1 = state_21128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21128__$1,(5),inst_21091);
} else {
if((state_val_21129 === (12))){
var inst_21126 = (state_21128[(2)]);
var state_21128__$1 = state_21128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21128__$1,inst_21126);
} else {
if((state_val_21129 === (2))){
var state_21128__$1 = state_21128;
var statearr_21140_21162 = state_21128__$1;
(statearr_21140_21162[(2)] = null);

(statearr_21140_21162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (11))){
var inst_21108 = (state_21128[(8)]);
var inst_21123 = (inst_21108["error"]);
var inst_21124 = ["error:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21123)].join('');
var state_21128__$1 = state_21128;
var statearr_21141_21163 = state_21128__$1;
(statearr_21141_21163[(2)] = inst_21124);

(statearr_21141_21163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (9))){
var inst_21108 = (state_21128[(8)]);
var inst_21107 = (state_21128[(2)]);
var inst_21108__$1 = inst_21107.call(window,src);
var inst_21109 = (inst_21108__$1["error"]);
var inst_21110 = clojure.string.blank_QMARK_.call(null,inst_21109);
var state_21128__$1 = (function (){var statearr_21142 = state_21128;
(statearr_21142[(8)] = inst_21108__$1);

return statearr_21142;
})();
if(inst_21110){
var statearr_21143_21164 = state_21128__$1;
(statearr_21143_21164[(1)] = (10));

} else {
var statearr_21144_21165 = state_21128__$1;
(statearr_21144_21165[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (5))){
var inst_21093 = (state_21128[(2)]);
var inst_21094 = klipse.lang.golang.load_module_BANG_.call(null);
var state_21128__$1 = (function (){var statearr_21145 = state_21128;
(statearr_21145[(10)] = inst_21093);

return statearr_21145;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21128__$1,(6),inst_21094);
} else {
if((state_val_21129 === (14))){
var inst_21108 = (state_21128[(8)]);
var inst_21117 = (inst_21108["stdout"]);
var inst_21118 = (inst_21108["stderr"]);
var inst_21119 = ["stdout:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21117),"\nstderr:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21118)].join('');
var state_21128__$1 = state_21128;
var statearr_21146_21166 = state_21128__$1;
(statearr_21146_21166[(2)] = inst_21119);

(statearr_21146_21166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (10))){
var inst_21108 = (state_21128[(8)]);
var inst_21112 = (inst_21108["stderr"]);
var state_21128__$1 = state_21128;
if(cljs.core.truth_(inst_21112)){
var statearr_21147_21167 = state_21128__$1;
(statearr_21147_21167[(1)] = (13));

} else {
var statearr_21148_21168 = state_21128__$1;
(statearr_21148_21168[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21129 === (8))){
var state_21128__$1 = state_21128;
var statearr_21149_21169 = state_21128__$1;
(statearr_21149_21169[(2)] = null);

(statearr_21149_21169[(1)] = (9));


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
var klipse$lang$golang$the_eval_$_state_machine__13608__auto__ = null;
var klipse$lang$golang$the_eval_$_state_machine__13608__auto____0 = (function (){
var statearr_21150 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21150[(0)] = klipse$lang$golang$the_eval_$_state_machine__13608__auto__);

(statearr_21150[(1)] = (1));

return statearr_21150;
});
var klipse$lang$golang$the_eval_$_state_machine__13608__auto____1 = (function (state_21128){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_21128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e21151){if((e21151 instanceof Object)){
var ex__13611__auto__ = e21151;
var statearr_21152_21170 = state_21128;
(statearr_21152_21170[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21171 = state_21128;
state_21128 = G__21171;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$golang$the_eval_$_state_machine__13608__auto__ = function(state_21128){
switch(arguments.length){
case 0:
return klipse$lang$golang$the_eval_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$golang$the_eval_$_state_machine__13608__auto____1.call(this,state_21128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$golang$the_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$golang$the_eval_$_state_machine__13608__auto____0;
klipse$lang$golang$the_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$golang$the_eval_$_state_machine__13608__auto____1;
return klipse$lang$golang$the_eval_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_21153 = f__13705__auto__.call(null);
(statearr_21153[(6)] = c__13704__auto__);

return statearr_21153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.golang.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-go",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.golang.the_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"go")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"golang","selector_golang",klipse.lang.golang.opts);

//# sourceMappingURL=golang.js.map

// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.php');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.php.load_php_engine = (function klipse$lang$php$load_php_engine(){
var obj__17203__auto__ = uniter;
var f__17204__auto__ = (function (){var obj24115 = obj__17203__auto__;
var k24116 = "createEngine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24115,k24116)){
return (obj24115[k24116]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,"PHP");
});
klipse.lang.php.execute = (function klipse$lang$php$execute(engine,input){
var obj__17203__auto__ = engine;
var f__17204__auto__ = (function (){var obj24117 = obj__17203__auto__;
var k24118 = "execute";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj24117,k24118)){
return (obj24117[k24118]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,input);
});
klipse.lang.php.str_eval_async = (function klipse$lang$php$str_eval_async(exp,_){
var c = cljs.core.async.chan.call(null);
var php_exp = ["<?php",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exp)].join('');
var c__13704__auto___24189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_24162){
var state_val_24163 = (state_24162[(1)]);
if((state_val_24163 === (7))){
var inst_24121 = (state_24162[(7)]);
var inst_24130 = (state_24162[(8)]);
var inst_24138 = (state_24162[(2)]);
var inst_24139 = (function (){var php_engine = inst_24121;
var $ = inst_24130;
var obj__17203__auto__ = inst_24130;
var f__17204__auto__ = inst_24138;
return (function (p1__24119_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24119_SHARP_));
});
})();
var inst_24140 = inst_24138.call(inst_24130,"data",inst_24139);
var inst_24143 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_24121,"getStdout");
var state_24162__$1 = (function (){var statearr_24164 = state_24162;
(statearr_24164[(9)] = inst_24140);

return statearr_24164;
})();
if(inst_24143){
var statearr_24165_24190 = state_24162__$1;
(statearr_24165_24190[(1)] = (8));

} else {
var statearr_24166_24191 = state_24162__$1;
(statearr_24166_24191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (1))){
var inst_24121 = (state_24162[(7)]);
var inst_24121__$1 = klipse.lang.php.load_php_engine.call(null);
var inst_24124 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_24121__$1,"getStderr");
var state_24162__$1 = (function (){var statearr_24167 = state_24162;
(statearr_24167[(7)] = inst_24121__$1);

return statearr_24167;
})();
if(inst_24124){
var statearr_24168_24192 = state_24162__$1;
(statearr_24168_24192[(1)] = (2));

} else {
var statearr_24169_24193 = state_24162__$1;
(statearr_24169_24193[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (4))){
var inst_24121 = (state_24162[(7)]);
var inst_24130 = (state_24162[(8)]);
var inst_24129 = (state_24162[(2)]);
var inst_24130__$1 = inst_24129.call(inst_24121);
var inst_24133 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_24130__$1,"on");
var state_24162__$1 = (function (){var statearr_24170 = state_24162;
(statearr_24170[(8)] = inst_24130__$1);

return statearr_24170;
})();
if(inst_24133){
var statearr_24171_24194 = state_24162__$1;
(statearr_24171_24194[(1)] = (5));

} else {
var statearr_24172_24195 = state_24162__$1;
(statearr_24172_24195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (13))){
var inst_24121 = (state_24162[(7)]);
var inst_24149 = (state_24162[(10)]);
var inst_24157 = (state_24162[(2)]);
var inst_24158 = (function (){var php_engine = inst_24121;
var $ = inst_24149;
var obj__17203__auto__ = inst_24149;
var f__17204__auto__ = inst_24157;
return (function (p1__24120_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24120_SHARP_));
});
})();
var inst_24159 = inst_24157.call(inst_24149,"data",inst_24158);
var inst_24160 = klipse.lang.php.execute.call(null,inst_24121,php_exp);
var state_24162__$1 = (function (){var statearr_24173 = state_24162;
(statearr_24173[(11)] = inst_24159);

return statearr_24173;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24162__$1,inst_24160);
} else {
if((state_val_24163 === (6))){
var state_24162__$1 = state_24162;
var statearr_24174_24196 = state_24162__$1;
(statearr_24174_24196[(2)] = null);

(statearr_24174_24196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (3))){
var state_24162__$1 = state_24162;
var statearr_24175_24197 = state_24162__$1;
(statearr_24175_24197[(2)] = null);

(statearr_24175_24197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (12))){
var state_24162__$1 = state_24162;
var statearr_24176_24198 = state_24162__$1;
(statearr_24176_24198[(2)] = null);

(statearr_24176_24198[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (2))){
var inst_24121 = (state_24162[(7)]);
var inst_24126 = (inst_24121["getStderr"]);
var state_24162__$1 = state_24162;
var statearr_24177_24199 = state_24162__$1;
(statearr_24177_24199[(2)] = inst_24126);

(statearr_24177_24199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (11))){
var inst_24149 = (state_24162[(10)]);
var inst_24154 = (inst_24149["on"]);
var state_24162__$1 = state_24162;
var statearr_24178_24200 = state_24162__$1;
(statearr_24178_24200[(2)] = inst_24154);

(statearr_24178_24200[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (9))){
var state_24162__$1 = state_24162;
var statearr_24179_24201 = state_24162__$1;
(statearr_24179_24201[(2)] = null);

(statearr_24179_24201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (5))){
var inst_24130 = (state_24162[(8)]);
var inst_24135 = (inst_24130["on"]);
var state_24162__$1 = state_24162;
var statearr_24180_24202 = state_24162__$1;
(statearr_24180_24202[(2)] = inst_24135);

(statearr_24180_24202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (10))){
var inst_24121 = (state_24162[(7)]);
var inst_24149 = (state_24162[(10)]);
var inst_24148 = (state_24162[(2)]);
var inst_24149__$1 = inst_24148.call(inst_24121);
var inst_24152 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_24149__$1,"on");
var state_24162__$1 = (function (){var statearr_24181 = state_24162;
(statearr_24181[(10)] = inst_24149__$1);

return statearr_24181;
})();
if(inst_24152){
var statearr_24182_24203 = state_24162__$1;
(statearr_24182_24203[(1)] = (11));

} else {
var statearr_24183_24204 = state_24162__$1;
(statearr_24183_24204[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24163 === (8))){
var inst_24121 = (state_24162[(7)]);
var inst_24145 = (inst_24121["getStdout"]);
var state_24162__$1 = state_24162;
var statearr_24184_24205 = state_24162__$1;
(statearr_24184_24205[(2)] = inst_24145);

(statearr_24184_24205[(1)] = (10));


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
});
return (function() {
var klipse$lang$php$str_eval_async_$_state_machine__13608__auto__ = null;
var klipse$lang$php$str_eval_async_$_state_machine__13608__auto____0 = (function (){
var statearr_24185 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24185[(0)] = klipse$lang$php$str_eval_async_$_state_machine__13608__auto__);

(statearr_24185[(1)] = (1));

return statearr_24185;
});
var klipse$lang$php$str_eval_async_$_state_machine__13608__auto____1 = (function (state_24162){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_24162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e24186){if((e24186 instanceof Object)){
var ex__13611__auto__ = e24186;
var statearr_24187_24206 = state_24162;
(statearr_24187_24206[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24207 = state_24162;
state_24162 = G__24207;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$php$str_eval_async_$_state_machine__13608__auto__ = function(state_24162){
switch(arguments.length){
case 0:
return klipse$lang$php$str_eval_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$php$str_eval_async_$_state_machine__13608__auto____1.call(this,state_24162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$php$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$php$str_eval_async_$_state_machine__13608__auto____0;
klipse$lang$php$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$php$str_eval_async_$_state_machine__13608__auto____1;
return klipse$lang$php$str_eval_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_24188 = f__13705__auto__.call(null);
(statearr_24188[(6)] = c__13704__auto___24189);

return statearr_24188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return c;
});
klipse.lang.php.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-php",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-php",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.php.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"clike"),klipse.common.registry.codemirror_mode_src.call(null,"php"),klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.codemirror_mode_src.call(null,"css"),klipse.common.registry.scripts_src.call(null,"uniter.js?r")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"eval-php","selector_eval_php",klipse.lang.php.opts);

//# sourceMappingURL=php.js.map

// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.hiccup');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('applied_science.js_interop');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('klipse_clj.lang.clojure');
klipse.lang.hiccup.transpile_hiccup = (function klipse$lang$hiccup$transpile_hiccup(src,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_33067){
var state_val_33068 = (state_33067[(1)]);
if((state_val_33068 === (7))){
var inst_33042 = (state_33067[(7)]);
var state_33067__$1 = state_33067;
var statearr_33069_33086 = state_33067__$1;
(statearr_33069_33086[(2)] = inst_33042);

(statearr_33069_33086[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (1))){
var state_33067__$1 = state_33067;
var statearr_33070_33087 = state_33067__$1;
(statearr_33070_33087[(2)] = null);

(statearr_33070_33087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (4))){
var inst_33034 = (state_33067[(8)]);
var inst_33039 = (inst_33034["message"]);
var state_33067__$1 = state_33067;
var statearr_33071_33088 = state_33067__$1;
(statearr_33071_33088[(2)] = inst_33039);

(statearr_33071_33088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (6))){
var inst_33042 = (state_33067[(7)]);
var inst_33042__$1 = (state_33067[(2)]);
var state_33067__$1 = (function (){var statearr_33072 = state_33067;
(statearr_33072[(7)] = inst_33042__$1);

return statearr_33072;
})();
if(cljs.core.truth_(inst_33042__$1)){
var statearr_33073_33089 = state_33067__$1;
(statearr_33073_33089[(1)] = (7));

} else {
var statearr_33074_33090 = state_33067__$1;
(statearr_33074_33090[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (3))){
var inst_33034 = (state_33067[(8)]);
var inst_33034__$1 = (state_33067[(2)]);
var inst_33037 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_33034__$1,"message");
var state_33067__$1 = (function (){var statearr_33075 = state_33067;
(statearr_33075[(8)] = inst_33034__$1);

return statearr_33075;
})();
if(inst_33037){
var statearr_33076_33091 = state_33067__$1;
(statearr_33076_33091[(1)] = (4));

} else {
var statearr_33077_33092 = state_33067__$1;
(statearr_33077_33092[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (2))){
var inst_33065 = (state_33067[(2)]);
var state_33067__$1 = state_33067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33067__$1,inst_33065);
} else {
if((state_val_33068 === (11))){
var inst_33061 = (state_33067[(2)]);
var inst_33062 = klipse_clj.lang.clojure.read_string.call(null,inst_33061);
var inst_33063 = html_beautify(inst_33062);
var state_33067__$1 = state_33067;
var statearr_33078_33093 = state_33067__$1;
(statearr_33078_33093[(2)] = inst_33063);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33067__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (9))){
var inst_33047 = (state_33067[(2)]);
var state_33067__$1 = state_33067;
var statearr_33079_33094 = state_33067__$1;
(statearr_33079_33094[(2)] = inst_33047);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33067__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (5))){
var state_33067__$1 = state_33067;
var statearr_33080_33095 = state_33067__$1;
(statearr_33080_33095[(2)] = null);

(statearr_33080_33095[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33067,(3),Object,null,(2));
var inst_33051 = klipse_clj.lang.clojure.read_string.call(null,src);
var inst_33052 = new cljs.core.Symbol("hoquet.runtime","render-html","hoquet.runtime/render-html",182948796,null);
var inst_33053 = (new cljs.core.List(null,inst_33052,null,(1),null));
var inst_33054 = (new cljs.core.List(null,inst_33051,null,(1),null));
var inst_33055 = cljs.core.concat.call(null,inst_33053,inst_33054);
var inst_33056 = cljs.core.seq.call(null,inst_33055);
var inst_33057 = cljs.core.sequence.call(null,inst_33056);
var inst_33058 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33057);
var inst_33059 = klipse_clj.lang.clojure.str_eval_async.call(null,inst_33058,opts);
var state_33067__$1 = state_33067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33067__$1,(11),inst_33059);
} else {
if((state_val_33068 === (8))){
var inst_33034 = (state_33067[(8)]);
var inst_33045 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33034);
var state_33067__$1 = state_33067;
var statearr_33081_33096 = state_33067__$1;
(statearr_33081_33096[(2)] = inst_33045);

(statearr_33081_33096[(1)] = (9));


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
});
return (function() {
var klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto__ = null;
var klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto____0 = (function (){
var statearr_33082 = [null,null,null,null,null,null,null,null,null];
(statearr_33082[(0)] = klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto__);

(statearr_33082[(1)] = (1));

return statearr_33082;
});
var klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto____1 = (function (state_33067){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_33067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e33083){if((e33083 instanceof Object)){
var ex__15526__auto__ = e33083;
var statearr_33084_33097 = state_33067;
(statearr_33084_33097[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33098 = state_33067;
state_33067 = G__33098;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto__ = function(state_33067){
switch(arguments.length){
case 0:
return klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto____1.call(this,state_33067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto____0;
klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto____1;
return klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_33085 = f__15620__auto__.call(null);
(statearr_33085[(6)] = c__15619__auto__);

return statearr_33085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.hiccup.render_hiccup = (function klipse$lang$hiccup$render_hiccup(src,p__33099){
var map__33100 = p__33099;
var map__33100__$1 = cljs.core.__destructure_map.call(null,map__33100);
var opts = map__33100__$1;
var container = cljs.core.get.call(null,map__33100__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_33145){
var state_val_33146 = (state_33145[(1)]);
if((state_val_33146 === (7))){
var inst_33109 = (state_33145[(7)]);
var state_33145__$1 = state_33145;
var statearr_33147_33170 = state_33145__$1;
(statearr_33147_33170[(2)] = inst_33109);

(statearr_33147_33170[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (1))){
var state_33145__$1 = state_33145;
var statearr_33148_33171 = state_33145__$1;
(statearr_33148_33171[(2)] = null);

(statearr_33148_33171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (4))){
var inst_33101 = (state_33145[(8)]);
var inst_33106 = (inst_33101["message"]);
var state_33145__$1 = state_33145;
var statearr_33149_33172 = state_33145__$1;
(statearr_33149_33172[(2)] = inst_33106);

(statearr_33149_33172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (13))){
var inst_33137 = ({});
var state_33145__$1 = state_33145;
var statearr_33150_33173 = state_33145__$1;
(statearr_33150_33173[(2)] = inst_33137);

(statearr_33150_33173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (6))){
var inst_33109 = (state_33145[(7)]);
var inst_33109__$1 = (state_33145[(2)]);
var state_33145__$1 = (function (){var statearr_33151 = state_33145;
(statearr_33151[(7)] = inst_33109__$1);

return statearr_33151;
})();
if(cljs.core.truth_(inst_33109__$1)){
var statearr_33152_33174 = state_33145__$1;
(statearr_33152_33174[(1)] = (7));

} else {
var statearr_33153_33175 = state_33145__$1;
(statearr_33153_33175[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (3))){
var inst_33101 = (state_33145[(8)]);
var inst_33101__$1 = (state_33145[(2)]);
var inst_33104 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_33101__$1,"message");
var state_33145__$1 = (function (){var statearr_33154 = state_33145;
(statearr_33154[(8)] = inst_33101__$1);

return statearr_33154;
})();
if(inst_33104){
var statearr_33155_33176 = state_33145__$1;
(statearr_33155_33176[(1)] = (4));

} else {
var statearr_33156_33177 = state_33145__$1;
(statearr_33156_33177[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (12))){
var state_33145__$1 = state_33145;
var statearr_33157_33178 = state_33145__$1;
(statearr_33157_33178[(2)] = container);

(statearr_33157_33178[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (2))){
var inst_33143 = (state_33145[(2)]);
var state_33145__$1 = state_33145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33145__$1,inst_33143);
} else {
if((state_val_33146 === (11))){
var inst_33128 = (state_33145[(2)]);
var inst_33131 = (container == null);
var inst_33132 = cljs.core.not.call(null,inst_33131);
var state_33145__$1 = (function (){var statearr_33158 = state_33145;
(statearr_33158[(9)] = inst_33128);

return statearr_33158;
})();
if(inst_33132){
var statearr_33159_33179 = state_33145__$1;
(statearr_33159_33179[(1)] = (12));

} else {
var statearr_33160_33180 = state_33145__$1;
(statearr_33160_33180[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (9))){
var inst_33114 = (state_33145[(2)]);
var state_33145__$1 = state_33145;
var statearr_33161_33181 = state_33145__$1;
(statearr_33161_33181[(2)] = inst_33114);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33145__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (5))){
var state_33145__$1 = state_33145;
var statearr_33162_33182 = state_33145__$1;
(statearr_33162_33182[(2)] = null);

(statearr_33162_33182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (14))){
var inst_33128 = (state_33145[(9)]);
var inst_33139 = (state_33145[(2)]);
var inst_33140 = klipse_clj.lang.clojure.read_string.call(null,inst_33128);
var inst_33141 = (inst_33139["innerHTML"] = inst_33140);
var state_33145__$1 = (function (){var statearr_33163 = state_33145;
(statearr_33163[(10)] = inst_33141);

return statearr_33163;
})();
var statearr_33164_33183 = state_33145__$1;
(statearr_33164_33183[(2)] = inst_33139);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33145__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33146 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33145,(3),Object,null,(2));
var inst_33118 = klipse_clj.lang.clojure.read_string.call(null,src);
var inst_33119 = new cljs.core.Symbol("hoquet.runtime","render-html","hoquet.runtime/render-html",182948796,null);
var inst_33120 = (new cljs.core.List(null,inst_33119,null,(1),null));
var inst_33121 = (new cljs.core.List(null,inst_33118,null,(1),null));
var inst_33122 = cljs.core.concat.call(null,inst_33120,inst_33121);
var inst_33123 = cljs.core.seq.call(null,inst_33122);
var inst_33124 = cljs.core.sequence.call(null,inst_33123);
var inst_33125 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33124);
var inst_33126 = klipse_clj.lang.clojure.str_eval_async.call(null,inst_33125,opts);
var state_33145__$1 = state_33145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33145__$1,(11),inst_33126);
} else {
if((state_val_33146 === (8))){
var inst_33101 = (state_33145[(8)]);
var inst_33112 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33101);
var state_33145__$1 = state_33145;
var statearr_33165_33184 = state_33145__$1;
(statearr_33165_33184[(2)] = inst_33112);

(statearr_33165_33184[(1)] = (9));


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
});
return (function() {
var klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto__ = null;
var klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto____0 = (function (){
var statearr_33166 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33166[(0)] = klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto__);

(statearr_33166[(1)] = (1));

return statearr_33166;
});
var klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto____1 = (function (state_33145){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_33145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e33167){if((e33167 instanceof Object)){
var ex__15526__auto__ = e33167;
var statearr_33168_33185 = state_33145;
(statearr_33168_33185[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33186 = state_33145;
state_33145 = G__33186;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto__ = function(state_33145){
switch(arguments.length){
case 0:
return klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto____1.call(this,state_33145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto____0;
klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto____1;
return klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_33169 = f__15620__auto__.call(null);
(statearr_33169[(6)] = c__15619__auto__);

return statearr_33169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.hiccup.transpile_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"htmlmixed",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Var(function(){return klipse.lang.hiccup.transpile_hiccup;},new cljs.core.Symbol("klipse.lang.hiccup","transpile-hiccup","klipse.lang.hiccup/transpile-hiccup",-1031076710,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.lang.hiccup","klipse.lang.hiccup",835091413,null),new cljs.core.Symbol(null,"transpile-hiccup","transpile-hiccup",884633266,null),"target/public/cljs-out/dev/klipse/lang/hiccup.cljs",23,1,14,14,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(klipse.lang.hiccup.transpile_hiccup)?klipse.lang.hiccup.transpile_hiccup.cljs$lang$test:null)])),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure"),klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed"),klipse.common.registry.scripts_src.call(null,"beautify-html-1.11.0.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.lang.hiccup.render_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"clojure",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Var(function(){return klipse.lang.hiccup.render_hiccup;},new cljs.core.Symbol("klipse.lang.hiccup","render-hiccup","klipse.lang.hiccup/render-hiccup",-111724489,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.lang.hiccup","klipse.lang.hiccup",835091413,null),new cljs.core.Symbol(null,"render-hiccup","render-hiccup",-358574097,null),"target/public/cljs-out/dev/klipse/lang/hiccup.cljs",20,1,25,25,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"container","container",-96406180,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null)),null,(cljs.core.truth_(klipse.lang.hiccup.render_hiccup)?klipse.lang.hiccup.render_hiccup.cljs$lang$test:null)])),new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"transpile-hiccup","selector_transpile_hiccup",klipse.lang.hiccup.transpile_opts);
klipse.common.registry.register_mode.call(null,"render-hiccup","selector_render_hiccup",klipse.lang.hiccup.render_opts);

//# sourceMappingURL=hiccup.js.map

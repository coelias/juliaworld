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
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_31142){
var state_val_31143 = (state_31142[(1)]);
if((state_val_31143 === (7))){
var inst_31117 = (state_31142[(7)]);
var state_31142__$1 = state_31142;
var statearr_31144_31161 = state_31142__$1;
(statearr_31144_31161[(2)] = inst_31117);

(statearr_31144_31161[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (1))){
var state_31142__$1 = state_31142;
var statearr_31145_31162 = state_31142__$1;
(statearr_31145_31162[(2)] = null);

(statearr_31145_31162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (4))){
var inst_31109 = (state_31142[(8)]);
var inst_31114 = (inst_31109["message"]);
var state_31142__$1 = state_31142;
var statearr_31146_31163 = state_31142__$1;
(statearr_31146_31163[(2)] = inst_31114);

(statearr_31146_31163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (6))){
var inst_31117 = (state_31142[(7)]);
var inst_31117__$1 = (state_31142[(2)]);
var state_31142__$1 = (function (){var statearr_31147 = state_31142;
(statearr_31147[(7)] = inst_31117__$1);

return statearr_31147;
})();
if(cljs.core.truth_(inst_31117__$1)){
var statearr_31148_31164 = state_31142__$1;
(statearr_31148_31164[(1)] = (7));

} else {
var statearr_31149_31165 = state_31142__$1;
(statearr_31149_31165[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (3))){
var inst_31109 = (state_31142[(8)]);
var inst_31109__$1 = (state_31142[(2)]);
var inst_31112 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_31109__$1,"message");
var state_31142__$1 = (function (){var statearr_31150 = state_31142;
(statearr_31150[(8)] = inst_31109__$1);

return statearr_31150;
})();
if(inst_31112){
var statearr_31151_31166 = state_31142__$1;
(statearr_31151_31166[(1)] = (4));

} else {
var statearr_31152_31167 = state_31142__$1;
(statearr_31152_31167[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (2))){
var inst_31140 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31142__$1,inst_31140);
} else {
if((state_val_31143 === (11))){
var inst_31136 = (state_31142[(2)]);
var inst_31137 = klipse_clj.lang.clojure.read_string.call(null,inst_31136);
var inst_31138 = html_beautify(inst_31137);
var state_31142__$1 = state_31142;
var statearr_31153_31168 = state_31142__$1;
(statearr_31153_31168[(2)] = inst_31138);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31142__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (9))){
var inst_31122 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
var statearr_31154_31169 = state_31142__$1;
(statearr_31154_31169[(2)] = inst_31122);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31142__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (5))){
var state_31142__$1 = state_31142;
var statearr_31155_31170 = state_31142__$1;
(statearr_31155_31170[(2)] = null);

(statearr_31155_31170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31142,(3),Object,null,(2));
var inst_31126 = klipse_clj.lang.clojure.read_string.call(null,src);
var inst_31127 = new cljs.core.Symbol("hoquet.runtime","render-html","hoquet.runtime/render-html",182948796,null);
var inst_31128 = (new cljs.core.List(null,inst_31127,null,(1),null));
var inst_31129 = (new cljs.core.List(null,inst_31126,null,(1),null));
var inst_31130 = cljs.core.concat.call(null,inst_31128,inst_31129);
var inst_31131 = cljs.core.seq.call(null,inst_31130);
var inst_31132 = cljs.core.sequence.call(null,inst_31131);
var inst_31133 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31132);
var inst_31134 = klipse_clj.lang.clojure.str_eval_async.call(null,inst_31133,opts);
var state_31142__$1 = state_31142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31142__$1,(11),inst_31134);
} else {
if((state_val_31143 === (8))){
var inst_31109 = (state_31142[(8)]);
var inst_31120 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31109);
var state_31142__$1 = state_31142;
var statearr_31156_31171 = state_31142__$1;
(statearr_31156_31171[(2)] = inst_31120);

(statearr_31156_31171[(1)] = (9));


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
var klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto__ = null;
var klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto____0 = (function (){
var statearr_31157 = [null,null,null,null,null,null,null,null,null];
(statearr_31157[(0)] = klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto__);

(statearr_31157[(1)] = (1));

return statearr_31157;
});
var klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto____1 = (function (state_31142){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_31142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e31158){if((e31158 instanceof Object)){
var ex__13611__auto__ = e31158;
var statearr_31159_31172 = state_31142;
(statearr_31159_31172[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31173 = state_31142;
state_31142 = G__31173;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto__ = function(state_31142){
switch(arguments.length){
case 0:
return klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto____1.call(this,state_31142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto____0;
klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto____1;
return klipse$lang$hiccup$transpile_hiccup_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_31160 = f__13705__auto__.call(null);
(statearr_31160[(6)] = c__13704__auto__);

return statearr_31160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.hiccup.render_hiccup = (function klipse$lang$hiccup$render_hiccup(src,p__31174){
var map__31175 = p__31174;
var map__31175__$1 = cljs.core.__destructure_map.call(null,map__31175);
var opts = map__31175__$1;
var container = cljs.core.get.call(null,map__31175__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_31220){
var state_val_31221 = (state_31220[(1)]);
if((state_val_31221 === (7))){
var inst_31184 = (state_31220[(7)]);
var state_31220__$1 = state_31220;
var statearr_31222_31245 = state_31220__$1;
(statearr_31222_31245[(2)] = inst_31184);

(statearr_31222_31245[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (1))){
var state_31220__$1 = state_31220;
var statearr_31223_31246 = state_31220__$1;
(statearr_31223_31246[(2)] = null);

(statearr_31223_31246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (4))){
var inst_31176 = (state_31220[(8)]);
var inst_31181 = (inst_31176["message"]);
var state_31220__$1 = state_31220;
var statearr_31224_31247 = state_31220__$1;
(statearr_31224_31247[(2)] = inst_31181);

(statearr_31224_31247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (13))){
var inst_31212 = ({});
var state_31220__$1 = state_31220;
var statearr_31225_31248 = state_31220__$1;
(statearr_31225_31248[(2)] = inst_31212);

(statearr_31225_31248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (6))){
var inst_31184 = (state_31220[(7)]);
var inst_31184__$1 = (state_31220[(2)]);
var state_31220__$1 = (function (){var statearr_31226 = state_31220;
(statearr_31226[(7)] = inst_31184__$1);

return statearr_31226;
})();
if(cljs.core.truth_(inst_31184__$1)){
var statearr_31227_31249 = state_31220__$1;
(statearr_31227_31249[(1)] = (7));

} else {
var statearr_31228_31250 = state_31220__$1;
(statearr_31228_31250[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (3))){
var inst_31176 = (state_31220[(8)]);
var inst_31176__$1 = (state_31220[(2)]);
var inst_31179 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_31176__$1,"message");
var state_31220__$1 = (function (){var statearr_31229 = state_31220;
(statearr_31229[(8)] = inst_31176__$1);

return statearr_31229;
})();
if(inst_31179){
var statearr_31230_31251 = state_31220__$1;
(statearr_31230_31251[(1)] = (4));

} else {
var statearr_31231_31252 = state_31220__$1;
(statearr_31231_31252[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (12))){
var state_31220__$1 = state_31220;
var statearr_31232_31253 = state_31220__$1;
(statearr_31232_31253[(2)] = container);

(statearr_31232_31253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (2))){
var inst_31218 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31220__$1,inst_31218);
} else {
if((state_val_31221 === (11))){
var inst_31203 = (state_31220[(2)]);
var inst_31206 = (container == null);
var inst_31207 = cljs.core.not.call(null,inst_31206);
var state_31220__$1 = (function (){var statearr_31233 = state_31220;
(statearr_31233[(9)] = inst_31203);

return statearr_31233;
})();
if(inst_31207){
var statearr_31234_31254 = state_31220__$1;
(statearr_31234_31254[(1)] = (12));

} else {
var statearr_31235_31255 = state_31220__$1;
(statearr_31235_31255[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (9))){
var inst_31189 = (state_31220[(2)]);
var state_31220__$1 = state_31220;
var statearr_31236_31256 = state_31220__$1;
(statearr_31236_31256[(2)] = inst_31189);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31220__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (5))){
var state_31220__$1 = state_31220;
var statearr_31237_31257 = state_31220__$1;
(statearr_31237_31257[(2)] = null);

(statearr_31237_31257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (14))){
var inst_31203 = (state_31220[(9)]);
var inst_31214 = (state_31220[(2)]);
var inst_31215 = klipse_clj.lang.clojure.read_string.call(null,inst_31203);
var inst_31216 = (inst_31214["innerHTML"] = inst_31215);
var state_31220__$1 = (function (){var statearr_31238 = state_31220;
(statearr_31238[(10)] = inst_31216);

return statearr_31238;
})();
var statearr_31239_31258 = state_31220__$1;
(statearr_31239_31258[(2)] = inst_31214);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31220__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31221 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31220,(3),Object,null,(2));
var inst_31193 = klipse_clj.lang.clojure.read_string.call(null,src);
var inst_31194 = new cljs.core.Symbol("hoquet.runtime","render-html","hoquet.runtime/render-html",182948796,null);
var inst_31195 = (new cljs.core.List(null,inst_31194,null,(1),null));
var inst_31196 = (new cljs.core.List(null,inst_31193,null,(1),null));
var inst_31197 = cljs.core.concat.call(null,inst_31195,inst_31196);
var inst_31198 = cljs.core.seq.call(null,inst_31197);
var inst_31199 = cljs.core.sequence.call(null,inst_31198);
var inst_31200 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31199);
var inst_31201 = klipse_clj.lang.clojure.str_eval_async.call(null,inst_31200,opts);
var state_31220__$1 = state_31220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31220__$1,(11),inst_31201);
} else {
if((state_val_31221 === (8))){
var inst_31176 = (state_31220[(8)]);
var inst_31187 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31176);
var state_31220__$1 = state_31220;
var statearr_31240_31259 = state_31220__$1;
(statearr_31240_31259[(2)] = inst_31187);

(statearr_31240_31259[(1)] = (9));


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
var klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto__ = null;
var klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto____0 = (function (){
var statearr_31241 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31241[(0)] = klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto__);

(statearr_31241[(1)] = (1));

return statearr_31241;
});
var klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto____1 = (function (state_31220){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_31220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e31242){if((e31242 instanceof Object)){
var ex__13611__auto__ = e31242;
var statearr_31243_31260 = state_31220;
(statearr_31243_31260[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31261 = state_31220;
state_31220 = G__31261;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto__ = function(state_31220){
switch(arguments.length){
case 0:
return klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto____1.call(this,state_31220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto____0;
klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto____1;
return klipse$lang$hiccup$render_hiccup_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_31244 = f__13705__auto__.call(null);
(statearr_31244[(6)] = c__13704__auto__);

return statearr_31244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.hiccup.transpile_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"htmlmixed",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Var(function(){return klipse.lang.hiccup.transpile_hiccup;},new cljs.core.Symbol("klipse.lang.hiccup","transpile-hiccup","klipse.lang.hiccup/transpile-hiccup",-1031076710,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.lang.hiccup","klipse.lang.hiccup",835091413,null),new cljs.core.Symbol(null,"transpile-hiccup","transpile-hiccup",884633266,null),"target/public/cljs-out/dev/klipse/lang/hiccup.cljs",23,1,14,14,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(klipse.lang.hiccup.transpile_hiccup)?klipse.lang.hiccup.transpile_hiccup.cljs$lang$test:null)])),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure"),klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed"),klipse.common.registry.scripts_src.call(null,"beautify-html-1.11.0.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.lang.hiccup.render_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"clojure",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Var(function(){return klipse.lang.hiccup.render_hiccup;},new cljs.core.Symbol("klipse.lang.hiccup","render-hiccup","klipse.lang.hiccup/render-hiccup",-111724489,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.lang.hiccup","klipse.lang.hiccup",835091413,null),new cljs.core.Symbol(null,"render-hiccup","render-hiccup",-358574097,null),"target/public/cljs-out/dev/klipse/lang/hiccup.cljs",20,1,25,25,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"container","container",-96406180,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null)),null,(cljs.core.truth_(klipse.lang.hiccup.render_hiccup)?klipse.lang.hiccup.render_hiccup.cljs$lang$test:null)])),new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"transpile-hiccup","selector_transpile_hiccup",klipse.lang.hiccup.transpile_opts);
klipse.common.registry.register_mode.call(null,"render-hiccup","selector_render_hiccup",klipse.lang.hiccup.render_opts);

//# sourceMappingURL=hiccup.js.map

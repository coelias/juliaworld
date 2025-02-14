// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.reason');
goog.require('cljs.core');
goog.require('klipse.lang.ocaml');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.reason.eval_in_global_scope = eval;
klipse.lang.reason.ocaml__GT_js = (function klipse$lang$reason$ocaml__GT_js(src){
var map__29087 = cljs.core.js__GT_clj.call(null,JSON.parse(ocaml.compile(src)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__29087__$1 = cljs.core.__destructure_map.call(null,map__29087);
var js_error_msg = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword(null,"js_error_msg","js_error_msg",1210372151));
var js_code = cljs.core.get.call(null,map__29087__$1,new cljs.core.Keyword(null,"js_code","js_code",-351949916));
if(cljs.core.truth_(js_error_msg)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),js_error_msg], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),js_code], null);
}
});
klipse.lang.reason.reason__GT_ocaml = (function klipse$lang$reason$reason__GT_ocaml(src){
var vec__29088 = refmt(src,"RE","implementation","ML");
var status = cljs.core.nth.call(null,vec__29088,(0),null);
var res = cljs.core.nth.call(null,vec__29088,(1),null);
if(cljs.core._EQ_.call(null,"REtoML",status)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),res], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),res], null);
}
});
klipse.lang.reason.ocaml__GT_reason = (function klipse$lang$reason$ocaml__GT_reason(src){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),printRE(parseML(src))], null);
}catch (e29091){var e = e29091;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),["Line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj29108 = (function (){var obj29106 = e;
var k29107 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29106,k29107)){
return (obj29106[k29107]);
} else {
return null;
}
})();
var k29109 = "startLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29108,k29109)){
return (obj29108[k29109]);
} else {
return null;
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj29112 = (function (){var obj29110 = e;
var k29111 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29110,k29111)){
return (obj29110[k29111]);
} else {
return null;
}
})();
var k29113 = "startLineStartChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29112,k29113)){
return (obj29112[k29113]);
} else {
return null;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj29116 = (function (){var obj29114 = e;
var k29115 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29114,k29115)){
return (obj29114[k29115]);
} else {
return null;
}
})();
var k29117 = "endLineEndChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29116,k29117)){
return (obj29116[k29117]);
} else {
return null;
}
})()),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,clojure.string.split.call(null,(function (){var obj29118 = e;
var k29119 = "message";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29118,k29119)){
return (obj29118[k29119]);
} else {
return null;
}
})(),": ")))].join('')], null);
}});
klipse.lang.reason.reason_3__GT_ocaml = (function klipse$lang$reason$reason_3__GT_ocaml(src){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),printML(parseRE(src))], null);
}catch (e29120){var e = e29120;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),["Line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj29137 = (function (){var obj29135 = e;
var k29136 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29135,k29136)){
return (obj29135[k29136]);
} else {
return null;
}
})();
var k29138 = "startLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29137,k29138)){
return (obj29137[k29138]);
} else {
return null;
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj29141 = (function (){var obj29139 = e;
var k29140 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29139,k29140)){
return (obj29139[k29140]);
} else {
return null;
}
})();
var k29142 = "startLineStartChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29141,k29142)){
return (obj29141[k29142]);
} else {
return null;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj29145 = (function (){var obj29143 = e;
var k29144 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29143,k29144)){
return (obj29143[k29144]);
} else {
return null;
}
})();
var k29146 = "endLineEndChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29145,k29146)){
return (obj29145[k29146]);
} else {
return null;
}
})()),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,clojure.string.split.call(null,(function (){var obj29147 = e;
var k29148 = "message";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29147,k29148)){
return (obj29147[k29148]);
} else {
return null;
}
})(),": ")))].join('')], null);
}});
klipse.lang.reason.reason__GT_js = (function klipse$lang$reason$reason__GT_js(version,src){
var vec__29149 = ((cljs.core._EQ_.call(null,version,(2)))?klipse.lang.reason.reason__GT_ocaml.call(null,src):klipse.lang.reason.reason_3__GT_ocaml.call(null,src));
var status = cljs.core.nth.call(null,vec__29149,(0),null);
var res = cljs.core.nth.call(null,vec__29149,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),status)){
var vec__29152 = klipse.lang.reason.ocaml__GT_js.call(null,res);
var status__$1 = cljs.core.nth.call(null,vec__29152,(0),null);
var res__$1 = cljs.core.nth.call(null,vec__29152,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),status__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),res__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),res__$1], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),res], null);
}
});
klipse.lang.reason.eval_reason = (function klipse$lang$reason$eval_reason(version,exp,_){
var c = cljs.core.async.chan.call(null);
var console_log29155_29160 = console.log;
(console.log = (function() { 
var G__29161__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__29161 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29162__i = 0, G__29162__a = new Array(arguments.length -  0);
while (G__29162__i < G__29162__a.length) {G__29162__a[G__29162__i] = arguments[G__29162__i + 0]; ++G__29162__i;}
  args = new cljs.core.IndexedSeq(G__29162__a,0,null);
} 
return G__29161__delegate.call(this,args);};
G__29161.cljs$lang$maxFixedArity = 0;
G__29161.cljs$lang$applyTo = (function (arglist__29163){
var args = cljs.core.seq(arglist__29163);
return G__29161__delegate(args);
});
G__29161.cljs$core$IFn$_invoke$arity$variadic = G__29161__delegate;
return G__29161;
})()
);

try{try{(exports = ({}));

var vec__29157_29164 = klipse.lang.reason.reason__GT_js.call(null,version,exp);
var status_29165 = cljs.core.nth.call(null,vec__29157_29164,(0),null);
var res_29166 = cljs.core.nth.call(null,vec__29157_29164,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_29165)){
cljs.core.async.put_BANG_.call(null,c,res_29166);
} else {
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.reason.eval_in_global_scope.call(null,res_29166)));
}
}catch (e29156){var o_29167 = e29156;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_29167);
}}finally {(console.log = console_log29155_29160);
}
return c;
});
klipse.lang.reason.eval_reason_with_types = (function klipse$lang$reason$eval_reason_with_types(version,exp,_){
var c = cljs.core.async.chan.call(null);
var console_error29168_29176 = console.error;
(console.error = (function() { 
var G__29177__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__29177 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29178__i = 0, G__29178__a = new Array(arguments.length -  0);
while (G__29178__i < G__29178__a.length) {G__29178__a[G__29178__i] = arguments[G__29178__i + 0]; ++G__29178__i;}
  args = new cljs.core.IndexedSeq(G__29178__a,0,null);
} 
return G__29177__delegate.call(this,args);};
G__29177.cljs$lang$maxFixedArity = 0;
G__29177.cljs$lang$applyTo = (function (arglist__29179){
var args = cljs.core.seq(arglist__29179);
return G__29177__delegate(args);
});
G__29177.cljs$core$IFn$_invoke$arity$variadic = G__29177__delegate;
return G__29177;
})()
);

try{try{var vec__29170_29180 = klipse.lang.reason.reason_3__GT_ocaml.call(null,exp);
var status_29181 = cljs.core.nth.call(null,vec__29170_29180,(0),null);
var res_29182 = cljs.core.nth.call(null,vec__29170_29180,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_29181)){
cljs.core.async.put_BANG_.call(null,c,res_29182);
} else {
var vec__29173_29183 = klipse.lang.ocaml.eval_with_types.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(res_29182),";;"].join(''));
var status_29184__$1 = cljs.core.nth.call(null,vec__29173_29183,(0),null);
var res_29185__$1 = cljs.core.nth.call(null,vec__29173_29183,(1),null);
cljs.core.async.put_BANG_.call(null,c,res_29185__$1);
}
}catch (e29169){var o_29186 = e29169;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_29186);
}}finally {(console.error = console_error29168_29176);
}
return c;
});
klipse.lang.reason.transpile_reason = (function klipse$lang$reason$transpile_reason(version,exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29194){
var state_val_29195 = (state_29194[(1)]);
if((state_val_29195 === (1))){
var inst_29190 = klipse.lang.reason.reason__GT_js.call(null,version,exp);
var inst_29191 = cljs.core.nth.call(null,inst_29190,(0),null);
var inst_29192 = cljs.core.nth.call(null,inst_29190,(1),null);
var state_29194__$1 = (function (){var statearr_29196 = state_29194;
(statearr_29196[(7)] = inst_29191);

return statearr_29196;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29194__$1,inst_29192);
} else {
return null;
}
});
return (function() {
var klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__ = null;
var klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____0 = (function (){
var statearr_29197 = [null,null,null,null,null,null,null,null];
(statearr_29197[(0)] = klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__);

(statearr_29197[(1)] = (1));

return statearr_29197;
});
var klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____1 = (function (state_29194){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29198){if((e29198 instanceof Object)){
var ex__15526__auto__ = e29198;
var statearr_29199_29201 = state_29194;
(statearr_29199_29201[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29202 = state_29194;
state_29194 = G__29202;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__ = function(state_29194){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____1.call(this,state_29194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____0;
klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____1;
return klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29200 = f__15620__auto__.call(null);
(statearr_29200[(6)] = c__15619__auto__);

return statearr_29200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.reason.transpile_ocaml__GT_reason = (function klipse$lang$reason$transpile_ocaml__GT_reason(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29210){
var state_val_29211 = (state_29210[(1)]);
if((state_val_29211 === (1))){
var inst_29206 = klipse.lang.reason.ocaml__GT_reason.call(null,exp);
var inst_29207 = cljs.core.nth.call(null,inst_29206,(0),null);
var inst_29208 = cljs.core.nth.call(null,inst_29206,(1),null);
var state_29210__$1 = (function (){var statearr_29212 = state_29210;
(statearr_29212[(7)] = inst_29207);

return statearr_29212;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29210__$1,inst_29208);
} else {
return null;
}
});
return (function() {
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__ = null;
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____0 = (function (){
var statearr_29213 = [null,null,null,null,null,null,null,null];
(statearr_29213[(0)] = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__);

(statearr_29213[(1)] = (1));

return statearr_29213;
});
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____1 = (function (state_29210){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29214){if((e29214 instanceof Object)){
var ex__15526__auto__ = e29214;
var statearr_29215_29217 = state_29210;
(statearr_29215_29217[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29218 = state_29210;
state_29210 = G__29218;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__ = function(state_29210){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____1.call(this,state_29210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____0;
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____1;
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29216 = f__15620__auto__.call(null);
(statearr_29216[(6)] = c__15619__auto__);

return statearr_29216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.reason.transpile_reason__GT_ocaml = (function klipse$lang$reason$transpile_reason__GT_ocaml(version,exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29232){
var state_val_29233 = (state_29232[(1)]);
if((state_val_29233 === (1))){
var inst_29222 = cljs.core._EQ_.call(null,version,(2));
var state_29232__$1 = state_29232;
if(inst_29222){
var statearr_29234_29243 = state_29232__$1;
(statearr_29234_29243[(1)] = (2));

} else {
var statearr_29235_29244 = state_29232__$1;
(statearr_29235_29244[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (2))){
var inst_29224 = klipse.lang.reason.reason__GT_ocaml.call(null,exp);
var state_29232__$1 = state_29232;
var statearr_29236_29245 = state_29232__$1;
(statearr_29236_29245[(2)] = inst_29224);

(statearr_29236_29245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (3))){
var inst_29226 = klipse.lang.reason.reason_3__GT_ocaml.call(null,exp);
var state_29232__$1 = state_29232;
var statearr_29237_29246 = state_29232__$1;
(statearr_29237_29246[(2)] = inst_29226);

(statearr_29237_29246[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (4))){
var inst_29228 = (state_29232[(2)]);
var inst_29229 = cljs.core.nth.call(null,inst_29228,(0),null);
var inst_29230 = cljs.core.nth.call(null,inst_29228,(1),null);
var state_29232__$1 = (function (){var statearr_29238 = state_29232;
(statearr_29238[(7)] = inst_29229);

return statearr_29238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29232__$1,inst_29230);
} else {
return null;
}
}
}
}
});
return (function() {
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto__ = null;
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto____0 = (function (){
var statearr_29239 = [null,null,null,null,null,null,null,null];
(statearr_29239[(0)] = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto__);

(statearr_29239[(1)] = (1));

return statearr_29239;
});
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto____1 = (function (state_29232){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29240){if((e29240 instanceof Object)){
var ex__15526__auto__ = e29240;
var statearr_29241_29247 = state_29232;
(statearr_29241_29247[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29248 = state_29232;
state_29232 = G__29248;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto__ = function(state_29232){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto____1.call(this,state_29232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto____0;
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto____1;
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29242 = f__15620__auto__.call(null);
(statearr_29242[(6)] = c__15619__auto__);

return statearr_29242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.reason.comment_out = (function klipse$lang$reason$comment_out(src){
return ["/* ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)," */"].join('');
});
klipse.lang.reason.eval_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.eval_reason,(2)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js","https://viebel.github.io/klipse/repo/js/refmt.js","https://viebel.github.io/klipse/repo/js/stdlibBundle.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.lang.reason.transpile_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.transpile_reason,(2)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js","https://viebel.github.io/klipse/repo/js/refmt.js","https://viebel.github.io/klipse/repo/js/pretty_format.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.lang.reason.transpile__GT_ocaml_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-ocaml",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.transpile_reason__GT_ocaml,(2)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/refmt.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.common.registry.register_mode.call(null,"eval-reason","selector_eval_reason",klipse.lang.reason.eval_opts);
klipse.common.registry.register_mode.call(null,"transpile-reason","selector_transpile_reason",klipse.lang.reason.transpile_opts);
klipse.common.registry.register_mode.call(null,"transpile-reason->ocaml","selector_transpile_reason_to_ocaml",klipse.lang.reason.transpile__GT_ocaml_opts);
klipse.lang.reason.eval_3_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.eval_reason,(3)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js","https://viebel.github.io/klipse/repo/js/refmt-3.js","https://viebel.github.io/klipse/repo/js/stdlibBundle.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.lang.reason.eval_3_with_types_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-ocaml",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.eval_reason_with_types,(3)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/refmt-3.js","https://viebel.github.io/klipse/repo/js/ocaml_evaluate_type.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.lang.reason.transpile_3_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"javascript",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.transpile_reason,(3)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/bs.js","https://viebel.github.io/klipse/repo/js/refmt-3.js","https://viebel.github.io/klipse/repo/js/pretty_format.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.lang.reason.transpile_3__GT_ocaml_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-ocaml",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),cljs.core.partial.call(null,klipse.lang.reason.transpile_reason__GT_ocaml,(3)),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/refmt-3.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.lang.reason.ocaml__GT_reason_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-ocaml",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text/x-ocaml",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.reason.transpile_ocaml__GT_reason,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"mllike"),"https://viebel.github.io/klipse/repo/js/refmt-3.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),klipse.lang.reason.comment_out], null);
klipse.common.registry.register_mode.call(null,"eval-reason-3","selector_eval_reason_3",klipse.lang.reason.eval_3_opts);
klipse.common.registry.register_mode.call(null,"transpile-reason-3","selector_transpile_reason_3",klipse.lang.reason.transpile_3_opts);
klipse.common.registry.register_mode.call(null,"transpile-reason-3->ocaml","selector_transpile_reason_3_to_ocaml",klipse.lang.reason.transpile_3__GT_ocaml_opts);
klipse.common.registry.register_mode.call(null,"ocaml->reason","selector_ocaml_to_reason",klipse.lang.reason.ocaml__GT_reason_opts);
klipse.common.registry.register_mode.call(null,"eval-reason-3-with-types","selector_eval_reason_3_with_types",klipse.lang.reason.eval_3_with_types_opts);

//# sourceMappingURL=reason.js.map

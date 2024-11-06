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
var map__23478 = cljs.core.js__GT_clj.call(null,JSON.parse(ocaml.compile(src)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__23478__$1 = cljs.core.__destructure_map.call(null,map__23478);
var js_error_msg = cljs.core.get.call(null,map__23478__$1,new cljs.core.Keyword(null,"js_error_msg","js_error_msg",1210372151));
var js_code = cljs.core.get.call(null,map__23478__$1,new cljs.core.Keyword(null,"js_code","js_code",-351949916));
if(cljs.core.truth_(js_error_msg)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),js_error_msg], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),js_code], null);
}
});
klipse.lang.reason.reason__GT_ocaml = (function klipse$lang$reason$reason__GT_ocaml(src){
var vec__23479 = refmt(src,"RE","implementation","ML");
var status = cljs.core.nth.call(null,vec__23479,(0),null);
var res = cljs.core.nth.call(null,vec__23479,(1),null);
if(cljs.core._EQ_.call(null,"REtoML",status)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),res], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),res], null);
}
});
klipse.lang.reason.ocaml__GT_reason = (function klipse$lang$reason$ocaml__GT_reason(src){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),printRE(parseML(src))], null);
}catch (e23482){var e = e23482;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),["Line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj23499 = (function (){var obj23497 = e;
var k23498 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23497,k23498)){
return (obj23497[k23498]);
} else {
return null;
}
})();
var k23500 = "startLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23499,k23500)){
return (obj23499[k23500]);
} else {
return null;
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj23503 = (function (){var obj23501 = e;
var k23502 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23501,k23502)){
return (obj23501[k23502]);
} else {
return null;
}
})();
var k23504 = "startLineStartChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23503,k23504)){
return (obj23503[k23504]);
} else {
return null;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj23507 = (function (){var obj23505 = e;
var k23506 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23505,k23506)){
return (obj23505[k23506]);
} else {
return null;
}
})();
var k23508 = "endLineEndChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23507,k23508)){
return (obj23507[k23508]);
} else {
return null;
}
})()),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,clojure.string.split.call(null,(function (){var obj23509 = e;
var k23510 = "message";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23509,k23510)){
return (obj23509[k23510]);
} else {
return null;
}
})(),": ")))].join('')], null);
}});
klipse.lang.reason.reason_3__GT_ocaml = (function klipse$lang$reason$reason_3__GT_ocaml(src){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),printML(parseRE(src))], null);
}catch (e23511){var e = e23511;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),["Line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj23528 = (function (){var obj23526 = e;
var k23527 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23526,k23527)){
return (obj23526[k23527]);
} else {
return null;
}
})();
var k23529 = "startLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23528,k23529)){
return (obj23528[k23529]);
} else {
return null;
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj23532 = (function (){var obj23530 = e;
var k23531 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23530,k23531)){
return (obj23530[k23531]);
} else {
return null;
}
})();
var k23533 = "startLineStartChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23532,k23533)){
return (obj23532[k23533]);
} else {
return null;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj23536 = (function (){var obj23534 = e;
var k23535 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23534,k23535)){
return (obj23534[k23535]);
} else {
return null;
}
})();
var k23537 = "endLineEndChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23536,k23537)){
return (obj23536[k23537]);
} else {
return null;
}
})()),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,clojure.string.split.call(null,(function (){var obj23538 = e;
var k23539 = "message";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23538,k23539)){
return (obj23538[k23539]);
} else {
return null;
}
})(),": ")))].join('')], null);
}});
klipse.lang.reason.reason__GT_js = (function klipse$lang$reason$reason__GT_js(version,src){
var vec__23540 = ((cljs.core._EQ_.call(null,version,(2)))?klipse.lang.reason.reason__GT_ocaml.call(null,src):klipse.lang.reason.reason_3__GT_ocaml.call(null,src));
var status = cljs.core.nth.call(null,vec__23540,(0),null);
var res = cljs.core.nth.call(null,vec__23540,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),status)){
var vec__23543 = klipse.lang.reason.ocaml__GT_js.call(null,res);
var status__$1 = cljs.core.nth.call(null,vec__23543,(0),null);
var res__$1 = cljs.core.nth.call(null,vec__23543,(1),null);
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
var console_log23546_23551 = console.log;
(console.log = (function() { 
var G__23552__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__23552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23553__i = 0, G__23553__a = new Array(arguments.length -  0);
while (G__23553__i < G__23553__a.length) {G__23553__a[G__23553__i] = arguments[G__23553__i + 0]; ++G__23553__i;}
  args = new cljs.core.IndexedSeq(G__23553__a,0,null);
} 
return G__23552__delegate.call(this,args);};
G__23552.cljs$lang$maxFixedArity = 0;
G__23552.cljs$lang$applyTo = (function (arglist__23554){
var args = cljs.core.seq(arglist__23554);
return G__23552__delegate(args);
});
G__23552.cljs$core$IFn$_invoke$arity$variadic = G__23552__delegate;
return G__23552;
})()
);

try{try{(exports = ({}));

var vec__23548_23555 = klipse.lang.reason.reason__GT_js.call(null,version,exp);
var status_23556 = cljs.core.nth.call(null,vec__23548_23555,(0),null);
var res_23557 = cljs.core.nth.call(null,vec__23548_23555,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_23556)){
cljs.core.async.put_BANG_.call(null,c,res_23557);
} else {
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.reason.eval_in_global_scope.call(null,res_23557)));
}
}catch (e23547){var o_23558 = e23547;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_23558);
}}finally {(console.log = console_log23546_23551);
}
return c;
});
klipse.lang.reason.eval_reason_with_types = (function klipse$lang$reason$eval_reason_with_types(version,exp,_){
var c = cljs.core.async.chan.call(null);
var console_error23559_23567 = console.error;
(console.error = (function() { 
var G__23568__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__23568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23569__i = 0, G__23569__a = new Array(arguments.length -  0);
while (G__23569__i < G__23569__a.length) {G__23569__a[G__23569__i] = arguments[G__23569__i + 0]; ++G__23569__i;}
  args = new cljs.core.IndexedSeq(G__23569__a,0,null);
} 
return G__23568__delegate.call(this,args);};
G__23568.cljs$lang$maxFixedArity = 0;
G__23568.cljs$lang$applyTo = (function (arglist__23570){
var args = cljs.core.seq(arglist__23570);
return G__23568__delegate(args);
});
G__23568.cljs$core$IFn$_invoke$arity$variadic = G__23568__delegate;
return G__23568;
})()
);

try{try{var vec__23561_23571 = klipse.lang.reason.reason_3__GT_ocaml.call(null,exp);
var status_23572 = cljs.core.nth.call(null,vec__23561_23571,(0),null);
var res_23573 = cljs.core.nth.call(null,vec__23561_23571,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_23572)){
cljs.core.async.put_BANG_.call(null,c,res_23573);
} else {
var vec__23564_23574 = klipse.lang.ocaml.eval_with_types.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(res_23573),";;"].join(''));
var status_23575__$1 = cljs.core.nth.call(null,vec__23564_23574,(0),null);
var res_23576__$1 = cljs.core.nth.call(null,vec__23564_23574,(1),null);
cljs.core.async.put_BANG_.call(null,c,res_23576__$1);
}
}catch (e23560){var o_23577 = e23560;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_23577);
}}finally {(console.error = console_error23559_23567);
}
return c;
});
klipse.lang.reason.transpile_reason = (function klipse$lang$reason$transpile_reason(version,exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_23585){
var state_val_23586 = (state_23585[(1)]);
if((state_val_23586 === (1))){
var inst_23581 = klipse.lang.reason.reason__GT_js.call(null,version,exp);
var inst_23582 = cljs.core.nth.call(null,inst_23581,(0),null);
var inst_23583 = cljs.core.nth.call(null,inst_23581,(1),null);
var state_23585__$1 = (function (){var statearr_23587 = state_23585;
(statearr_23587[(7)] = inst_23582);

return statearr_23587;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23585__$1,inst_23583);
} else {
return null;
}
});
return (function() {
var klipse$lang$reason$transpile_reason_$_state_machine__13608__auto__ = null;
var klipse$lang$reason$transpile_reason_$_state_machine__13608__auto____0 = (function (){
var statearr_23588 = [null,null,null,null,null,null,null,null];
(statearr_23588[(0)] = klipse$lang$reason$transpile_reason_$_state_machine__13608__auto__);

(statearr_23588[(1)] = (1));

return statearr_23588;
});
var klipse$lang$reason$transpile_reason_$_state_machine__13608__auto____1 = (function (state_23585){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_23585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e23589){if((e23589 instanceof Object)){
var ex__13611__auto__ = e23589;
var statearr_23590_23592 = state_23585;
(statearr_23590_23592[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23593 = state_23585;
state_23585 = G__23593;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$reason$transpile_reason_$_state_machine__13608__auto__ = function(state_23585){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_reason_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_reason_$_state_machine__13608__auto____1.call(this,state_23585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_reason_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_reason_$_state_machine__13608__auto____0;
klipse$lang$reason$transpile_reason_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_reason_$_state_machine__13608__auto____1;
return klipse$lang$reason$transpile_reason_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_23591 = f__13705__auto__.call(null);
(statearr_23591[(6)] = c__13704__auto__);

return statearr_23591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.reason.transpile_ocaml__GT_reason = (function klipse$lang$reason$transpile_ocaml__GT_reason(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_23601){
var state_val_23602 = (state_23601[(1)]);
if((state_val_23602 === (1))){
var inst_23597 = klipse.lang.reason.ocaml__GT_reason.call(null,exp);
var inst_23598 = cljs.core.nth.call(null,inst_23597,(0),null);
var inst_23599 = cljs.core.nth.call(null,inst_23597,(1),null);
var state_23601__$1 = (function (){var statearr_23603 = state_23601;
(statearr_23603[(7)] = inst_23598);

return statearr_23603;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23601__$1,inst_23599);
} else {
return null;
}
});
return (function() {
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto__ = null;
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto____0 = (function (){
var statearr_23604 = [null,null,null,null,null,null,null,null];
(statearr_23604[(0)] = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto__);

(statearr_23604[(1)] = (1));

return statearr_23604;
});
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto____1 = (function (state_23601){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_23601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e23605){if((e23605 instanceof Object)){
var ex__13611__auto__ = e23605;
var statearr_23606_23608 = state_23601;
(statearr_23606_23608[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23609 = state_23601;
state_23601 = G__23609;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto__ = function(state_23601){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto____1.call(this,state_23601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto____0;
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto____1;
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_23607 = f__13705__auto__.call(null);
(statearr_23607[(6)] = c__13704__auto__);

return statearr_23607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.reason.transpile_reason__GT_ocaml = (function klipse$lang$reason$transpile_reason__GT_ocaml(version,exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_23623){
var state_val_23624 = (state_23623[(1)]);
if((state_val_23624 === (1))){
var inst_23613 = cljs.core._EQ_.call(null,version,(2));
var state_23623__$1 = state_23623;
if(inst_23613){
var statearr_23625_23634 = state_23623__$1;
(statearr_23625_23634[(1)] = (2));

} else {
var statearr_23626_23635 = state_23623__$1;
(statearr_23626_23635[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23624 === (2))){
var inst_23615 = klipse.lang.reason.reason__GT_ocaml.call(null,exp);
var state_23623__$1 = state_23623;
var statearr_23627_23636 = state_23623__$1;
(statearr_23627_23636[(2)] = inst_23615);

(statearr_23627_23636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23624 === (3))){
var inst_23617 = klipse.lang.reason.reason_3__GT_ocaml.call(null,exp);
var state_23623__$1 = state_23623;
var statearr_23628_23637 = state_23623__$1;
(statearr_23628_23637[(2)] = inst_23617);

(statearr_23628_23637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23624 === (4))){
var inst_23619 = (state_23623[(2)]);
var inst_23620 = cljs.core.nth.call(null,inst_23619,(0),null);
var inst_23621 = cljs.core.nth.call(null,inst_23619,(1),null);
var state_23623__$1 = (function (){var statearr_23629 = state_23623;
(statearr_23629[(7)] = inst_23620);

return statearr_23629;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23623__$1,inst_23621);
} else {
return null;
}
}
}
}
});
return (function() {
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto__ = null;
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto____0 = (function (){
var statearr_23630 = [null,null,null,null,null,null,null,null];
(statearr_23630[(0)] = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto__);

(statearr_23630[(1)] = (1));

return statearr_23630;
});
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto____1 = (function (state_23623){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_23623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e23631){if((e23631 instanceof Object)){
var ex__13611__auto__ = e23631;
var statearr_23632_23638 = state_23623;
(statearr_23632_23638[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23639 = state_23623;
state_23623 = G__23639;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto__ = function(state_23623){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto____1.call(this,state_23623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto____0;
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto____1;
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_23633 = f__13705__auto__.call(null);
(statearr_23633[(6)] = c__13704__auto__);

return statearr_23633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
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

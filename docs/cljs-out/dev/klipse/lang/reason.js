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
var map__28674 = cljs.core.js__GT_clj.call(null,JSON.parse(ocaml.compile(src)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__28674__$1 = cljs.core.__destructure_map.call(null,map__28674);
var js_error_msg = cljs.core.get.call(null,map__28674__$1,new cljs.core.Keyword(null,"js_error_msg","js_error_msg",1210372151));
var js_code = cljs.core.get.call(null,map__28674__$1,new cljs.core.Keyword(null,"js_code","js_code",-351949916));
if(cljs.core.truth_(js_error_msg)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),js_error_msg], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),js_code], null);
}
});
klipse.lang.reason.reason__GT_ocaml = (function klipse$lang$reason$reason__GT_ocaml(src){
var vec__28675 = refmt(src,"RE","implementation","ML");
var status = cljs.core.nth.call(null,vec__28675,(0),null);
var res = cljs.core.nth.call(null,vec__28675,(1),null);
if(cljs.core._EQ_.call(null,"REtoML",status)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),res], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),res], null);
}
});
klipse.lang.reason.ocaml__GT_reason = (function klipse$lang$reason$ocaml__GT_reason(src){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),printRE(parseML(src))], null);
}catch (e28678){var e = e28678;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),["Line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj28695 = (function (){var obj28693 = e;
var k28694 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28693,k28694)){
return (obj28693[k28694]);
} else {
return null;
}
})();
var k28696 = "startLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28695,k28696)){
return (obj28695[k28696]);
} else {
return null;
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj28699 = (function (){var obj28697 = e;
var k28698 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28697,k28698)){
return (obj28697[k28698]);
} else {
return null;
}
})();
var k28700 = "startLineStartChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28699,k28700)){
return (obj28699[k28700]);
} else {
return null;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj28703 = (function (){var obj28701 = e;
var k28702 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28701,k28702)){
return (obj28701[k28702]);
} else {
return null;
}
})();
var k28704 = "endLineEndChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28703,k28704)){
return (obj28703[k28704]);
} else {
return null;
}
})()),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,clojure.string.split.call(null,(function (){var obj28705 = e;
var k28706 = "message";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28705,k28706)){
return (obj28705[k28706]);
} else {
return null;
}
})(),": ")))].join('')], null);
}});
klipse.lang.reason.reason_3__GT_ocaml = (function klipse$lang$reason$reason_3__GT_ocaml(src){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),printML(parseRE(src))], null);
}catch (e28707){var e = e28707;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),["Line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj28724 = (function (){var obj28722 = e;
var k28723 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28722,k28723)){
return (obj28722[k28723]);
} else {
return null;
}
})();
var k28725 = "startLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28724,k28725)){
return (obj28724[k28725]);
} else {
return null;
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj28728 = (function (){var obj28726 = e;
var k28727 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28726,k28727)){
return (obj28726[k28727]);
} else {
return null;
}
})();
var k28729 = "startLineStartChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28728,k28729)){
return (obj28728[k28729]);
} else {
return null;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj28732 = (function (){var obj28730 = e;
var k28731 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28730,k28731)){
return (obj28730[k28731]);
} else {
return null;
}
})();
var k28733 = "endLineEndChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28732,k28733)){
return (obj28732[k28733]);
} else {
return null;
}
})()),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,clojure.string.split.call(null,(function (){var obj28734 = e;
var k28735 = "message";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28734,k28735)){
return (obj28734[k28735]);
} else {
return null;
}
})(),": ")))].join('')], null);
}});
klipse.lang.reason.reason__GT_js = (function klipse$lang$reason$reason__GT_js(version,src){
var vec__28736 = ((cljs.core._EQ_.call(null,version,(2)))?klipse.lang.reason.reason__GT_ocaml.call(null,src):klipse.lang.reason.reason_3__GT_ocaml.call(null,src));
var status = cljs.core.nth.call(null,vec__28736,(0),null);
var res = cljs.core.nth.call(null,vec__28736,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),status)){
var vec__28739 = klipse.lang.reason.ocaml__GT_js.call(null,res);
var status__$1 = cljs.core.nth.call(null,vec__28739,(0),null);
var res__$1 = cljs.core.nth.call(null,vec__28739,(1),null);
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
var console_log28742_28747 = console.log;
(console.log = (function() { 
var G__28748__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__28748 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28749__i = 0, G__28749__a = new Array(arguments.length -  0);
while (G__28749__i < G__28749__a.length) {G__28749__a[G__28749__i] = arguments[G__28749__i + 0]; ++G__28749__i;}
  args = new cljs.core.IndexedSeq(G__28749__a,0,null);
} 
return G__28748__delegate.call(this,args);};
G__28748.cljs$lang$maxFixedArity = 0;
G__28748.cljs$lang$applyTo = (function (arglist__28750){
var args = cljs.core.seq(arglist__28750);
return G__28748__delegate(args);
});
G__28748.cljs$core$IFn$_invoke$arity$variadic = G__28748__delegate;
return G__28748;
})()
);

try{try{(exports = ({}));

var vec__28744_28751 = klipse.lang.reason.reason__GT_js.call(null,version,exp);
var status_28752 = cljs.core.nth.call(null,vec__28744_28751,(0),null);
var res_28753 = cljs.core.nth.call(null,vec__28744_28751,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_28752)){
cljs.core.async.put_BANG_.call(null,c,res_28753);
} else {
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.reason.eval_in_global_scope.call(null,res_28753)));
}
}catch (e28743){var o_28754 = e28743;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_28754);
}}finally {(console.log = console_log28742_28747);
}
return c;
});
klipse.lang.reason.eval_reason_with_types = (function klipse$lang$reason$eval_reason_with_types(version,exp,_){
var c = cljs.core.async.chan.call(null);
var console_error28755_28763 = console.error;
(console.error = (function() { 
var G__28764__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__28764 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28765__i = 0, G__28765__a = new Array(arguments.length -  0);
while (G__28765__i < G__28765__a.length) {G__28765__a[G__28765__i] = arguments[G__28765__i + 0]; ++G__28765__i;}
  args = new cljs.core.IndexedSeq(G__28765__a,0,null);
} 
return G__28764__delegate.call(this,args);};
G__28764.cljs$lang$maxFixedArity = 0;
G__28764.cljs$lang$applyTo = (function (arglist__28766){
var args = cljs.core.seq(arglist__28766);
return G__28764__delegate(args);
});
G__28764.cljs$core$IFn$_invoke$arity$variadic = G__28764__delegate;
return G__28764;
})()
);

try{try{var vec__28757_28767 = klipse.lang.reason.reason_3__GT_ocaml.call(null,exp);
var status_28768 = cljs.core.nth.call(null,vec__28757_28767,(0),null);
var res_28769 = cljs.core.nth.call(null,vec__28757_28767,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_28768)){
cljs.core.async.put_BANG_.call(null,c,res_28769);
} else {
var vec__28760_28770 = klipse.lang.ocaml.eval_with_types.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(res_28769),";;"].join(''));
var status_28771__$1 = cljs.core.nth.call(null,vec__28760_28770,(0),null);
var res_28772__$1 = cljs.core.nth.call(null,vec__28760_28770,(1),null);
cljs.core.async.put_BANG_.call(null,c,res_28772__$1);
}
}catch (e28756){var o_28773 = e28756;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_28773);
}}finally {(console.error = console_error28755_28763);
}
return c;
});
klipse.lang.reason.transpile_reason = (function klipse$lang$reason$transpile_reason(version,exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28781){
var state_val_28782 = (state_28781[(1)]);
if((state_val_28782 === (1))){
var inst_28777 = klipse.lang.reason.reason__GT_js.call(null,version,exp);
var inst_28778 = cljs.core.nth.call(null,inst_28777,(0),null);
var inst_28779 = cljs.core.nth.call(null,inst_28777,(1),null);
var state_28781__$1 = (function (){var statearr_28783 = state_28781;
(statearr_28783[(7)] = inst_28778);

return statearr_28783;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28781__$1,inst_28779);
} else {
return null;
}
});
return (function() {
var klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__ = null;
var klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____0 = (function (){
var statearr_28784 = [null,null,null,null,null,null,null,null];
(statearr_28784[(0)] = klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__);

(statearr_28784[(1)] = (1));

return statearr_28784;
});
var klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____1 = (function (state_28781){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28785){if((e28785 instanceof Object)){
var ex__15526__auto__ = e28785;
var statearr_28786_28788 = state_28781;
(statearr_28786_28788[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28789 = state_28781;
state_28781 = G__28789;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__ = function(state_28781){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____1.call(this,state_28781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____0;
klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____1;
return klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28787 = f__15620__auto__.call(null);
(statearr_28787[(6)] = c__15619__auto__);

return statearr_28787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.reason.transpile_ocaml__GT_reason = (function klipse$lang$reason$transpile_ocaml__GT_reason(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28797){
var state_val_28798 = (state_28797[(1)]);
if((state_val_28798 === (1))){
var inst_28793 = klipse.lang.reason.ocaml__GT_reason.call(null,exp);
var inst_28794 = cljs.core.nth.call(null,inst_28793,(0),null);
var inst_28795 = cljs.core.nth.call(null,inst_28793,(1),null);
var state_28797__$1 = (function (){var statearr_28799 = state_28797;
(statearr_28799[(7)] = inst_28794);

return statearr_28799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28797__$1,inst_28795);
} else {
return null;
}
});
return (function() {
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__ = null;
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____0 = (function (){
var statearr_28800 = [null,null,null,null,null,null,null,null];
(statearr_28800[(0)] = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__);

(statearr_28800[(1)] = (1));

return statearr_28800;
});
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____1 = (function (state_28797){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28801){if((e28801 instanceof Object)){
var ex__15526__auto__ = e28801;
var statearr_28802_28804 = state_28797;
(statearr_28802_28804[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28805 = state_28797;
state_28797 = G__28805;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__ = function(state_28797){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____1.call(this,state_28797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____0;
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____1;
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28803 = f__15620__auto__.call(null);
(statearr_28803[(6)] = c__15619__auto__);

return statearr_28803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.reason.transpile_reason__GT_ocaml = (function klipse$lang$reason$transpile_reason__GT_ocaml(version,exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28819){
var state_val_28820 = (state_28819[(1)]);
if((state_val_28820 === (1))){
var inst_28809 = cljs.core._EQ_.call(null,version,(2));
var state_28819__$1 = state_28819;
if(inst_28809){
var statearr_28821_28830 = state_28819__$1;
(statearr_28821_28830[(1)] = (2));

} else {
var statearr_28822_28831 = state_28819__$1;
(statearr_28822_28831[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (2))){
var inst_28811 = klipse.lang.reason.reason__GT_ocaml.call(null,exp);
var state_28819__$1 = state_28819;
var statearr_28823_28832 = state_28819__$1;
(statearr_28823_28832[(2)] = inst_28811);

(statearr_28823_28832[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (3))){
var inst_28813 = klipse.lang.reason.reason_3__GT_ocaml.call(null,exp);
var state_28819__$1 = state_28819;
var statearr_28824_28833 = state_28819__$1;
(statearr_28824_28833[(2)] = inst_28813);

(statearr_28824_28833[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28820 === (4))){
var inst_28815 = (state_28819[(2)]);
var inst_28816 = cljs.core.nth.call(null,inst_28815,(0),null);
var inst_28817 = cljs.core.nth.call(null,inst_28815,(1),null);
var state_28819__$1 = (function (){var statearr_28825 = state_28819;
(statearr_28825[(7)] = inst_28816);

return statearr_28825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28819__$1,inst_28817);
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
var statearr_28826 = [null,null,null,null,null,null,null,null];
(statearr_28826[(0)] = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto__);

(statearr_28826[(1)] = (1));

return statearr_28826;
});
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto____1 = (function (state_28819){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28827){if((e28827 instanceof Object)){
var ex__15526__auto__ = e28827;
var statearr_28828_28834 = state_28819;
(statearr_28828_28834[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28835 = state_28819;
state_28819 = G__28835;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto__ = function(state_28819){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto____1.call(this,state_28819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto____0;
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto____1;
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28829 = f__15620__auto__.call(null);
(statearr_28829[(6)] = c__15619__auto__);

return statearr_28829;
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

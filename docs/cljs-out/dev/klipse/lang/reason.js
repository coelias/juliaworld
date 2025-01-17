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
var map__28677 = cljs.core.js__GT_clj.call(null,JSON.parse(ocaml.compile(src)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__28677__$1 = cljs.core.__destructure_map.call(null,map__28677);
var js_error_msg = cljs.core.get.call(null,map__28677__$1,new cljs.core.Keyword(null,"js_error_msg","js_error_msg",1210372151));
var js_code = cljs.core.get.call(null,map__28677__$1,new cljs.core.Keyword(null,"js_code","js_code",-351949916));
if(cljs.core.truth_(js_error_msg)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),js_error_msg], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),js_code], null);
}
});
klipse.lang.reason.reason__GT_ocaml = (function klipse$lang$reason$reason__GT_ocaml(src){
var vec__28678 = refmt(src,"RE","implementation","ML");
var status = cljs.core.nth.call(null,vec__28678,(0),null);
var res = cljs.core.nth.call(null,vec__28678,(1),null);
if(cljs.core._EQ_.call(null,"REtoML",status)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),res], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),res], null);
}
});
klipse.lang.reason.ocaml__GT_reason = (function klipse$lang$reason$ocaml__GT_reason(src){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),printRE(parseML(src))], null);
}catch (e28681){var e = e28681;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),["Line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj28698 = (function (){var obj28696 = e;
var k28697 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28696,k28697)){
return (obj28696[k28697]);
} else {
return null;
}
})();
var k28699 = "startLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28698,k28699)){
return (obj28698[k28699]);
} else {
return null;
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj28702 = (function (){var obj28700 = e;
var k28701 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28700,k28701)){
return (obj28700[k28701]);
} else {
return null;
}
})();
var k28703 = "startLineStartChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28702,k28703)){
return (obj28702[k28703]);
} else {
return null;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj28706 = (function (){var obj28704 = e;
var k28705 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28704,k28705)){
return (obj28704[k28705]);
} else {
return null;
}
})();
var k28707 = "endLineEndChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28706,k28707)){
return (obj28706[k28707]);
} else {
return null;
}
})()),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,clojure.string.split.call(null,(function (){var obj28708 = e;
var k28709 = "message";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28708,k28709)){
return (obj28708[k28709]);
} else {
return null;
}
})(),": ")))].join('')], null);
}});
klipse.lang.reason.reason_3__GT_ocaml = (function klipse$lang$reason$reason_3__GT_ocaml(src){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),printML(parseRE(src))], null);
}catch (e28710){var e = e28710;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),["Line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj28727 = (function (){var obj28725 = e;
var k28726 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28725,k28726)){
return (obj28725[k28726]);
} else {
return null;
}
})();
var k28728 = "startLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28727,k28728)){
return (obj28727[k28728]);
} else {
return null;
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj28731 = (function (){var obj28729 = e;
var k28730 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28729,k28730)){
return (obj28729[k28730]);
} else {
return null;
}
})();
var k28732 = "startLineStartChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28731,k28732)){
return (obj28731[k28732]);
} else {
return null;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj28735 = (function (){var obj28733 = e;
var k28734 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28733,k28734)){
return (obj28733[k28734]);
} else {
return null;
}
})();
var k28736 = "endLineEndChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28735,k28736)){
return (obj28735[k28736]);
} else {
return null;
}
})()),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,clojure.string.split.call(null,(function (){var obj28737 = e;
var k28738 = "message";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28737,k28738)){
return (obj28737[k28738]);
} else {
return null;
}
})(),": ")))].join('')], null);
}});
klipse.lang.reason.reason__GT_js = (function klipse$lang$reason$reason__GT_js(version,src){
var vec__28739 = ((cljs.core._EQ_.call(null,version,(2)))?klipse.lang.reason.reason__GT_ocaml.call(null,src):klipse.lang.reason.reason_3__GT_ocaml.call(null,src));
var status = cljs.core.nth.call(null,vec__28739,(0),null);
var res = cljs.core.nth.call(null,vec__28739,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),status)){
var vec__28742 = klipse.lang.reason.ocaml__GT_js.call(null,res);
var status__$1 = cljs.core.nth.call(null,vec__28742,(0),null);
var res__$1 = cljs.core.nth.call(null,vec__28742,(1),null);
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
var console_log28745_28750 = console.log;
(console.log = (function() { 
var G__28751__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__28751 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28752__i = 0, G__28752__a = new Array(arguments.length -  0);
while (G__28752__i < G__28752__a.length) {G__28752__a[G__28752__i] = arguments[G__28752__i + 0]; ++G__28752__i;}
  args = new cljs.core.IndexedSeq(G__28752__a,0,null);
} 
return G__28751__delegate.call(this,args);};
G__28751.cljs$lang$maxFixedArity = 0;
G__28751.cljs$lang$applyTo = (function (arglist__28753){
var args = cljs.core.seq(arglist__28753);
return G__28751__delegate(args);
});
G__28751.cljs$core$IFn$_invoke$arity$variadic = G__28751__delegate;
return G__28751;
})()
);

try{try{(exports = ({}));

var vec__28747_28754 = klipse.lang.reason.reason__GT_js.call(null,version,exp);
var status_28755 = cljs.core.nth.call(null,vec__28747_28754,(0),null);
var res_28756 = cljs.core.nth.call(null,vec__28747_28754,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_28755)){
cljs.core.async.put_BANG_.call(null,c,res_28756);
} else {
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.reason.eval_in_global_scope.call(null,res_28756)));
}
}catch (e28746){var o_28757 = e28746;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_28757);
}}finally {(console.log = console_log28745_28750);
}
return c;
});
klipse.lang.reason.eval_reason_with_types = (function klipse$lang$reason$eval_reason_with_types(version,exp,_){
var c = cljs.core.async.chan.call(null);
var console_error28758_28766 = console.error;
(console.error = (function() { 
var G__28767__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__28767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28768__i = 0, G__28768__a = new Array(arguments.length -  0);
while (G__28768__i < G__28768__a.length) {G__28768__a[G__28768__i] = arguments[G__28768__i + 0]; ++G__28768__i;}
  args = new cljs.core.IndexedSeq(G__28768__a,0,null);
} 
return G__28767__delegate.call(this,args);};
G__28767.cljs$lang$maxFixedArity = 0;
G__28767.cljs$lang$applyTo = (function (arglist__28769){
var args = cljs.core.seq(arglist__28769);
return G__28767__delegate(args);
});
G__28767.cljs$core$IFn$_invoke$arity$variadic = G__28767__delegate;
return G__28767;
})()
);

try{try{var vec__28760_28770 = klipse.lang.reason.reason_3__GT_ocaml.call(null,exp);
var status_28771 = cljs.core.nth.call(null,vec__28760_28770,(0),null);
var res_28772 = cljs.core.nth.call(null,vec__28760_28770,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_28771)){
cljs.core.async.put_BANG_.call(null,c,res_28772);
} else {
var vec__28763_28773 = klipse.lang.ocaml.eval_with_types.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(res_28772),";;"].join(''));
var status_28774__$1 = cljs.core.nth.call(null,vec__28763_28773,(0),null);
var res_28775__$1 = cljs.core.nth.call(null,vec__28763_28773,(1),null);
cljs.core.async.put_BANG_.call(null,c,res_28775__$1);
}
}catch (e28759){var o_28776 = e28759;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_28776);
}}finally {(console.error = console_error28758_28766);
}
return c;
});
klipse.lang.reason.transpile_reason = (function klipse$lang$reason$transpile_reason(version,exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28784){
var state_val_28785 = (state_28784[(1)]);
if((state_val_28785 === (1))){
var inst_28780 = klipse.lang.reason.reason__GT_js.call(null,version,exp);
var inst_28781 = cljs.core.nth.call(null,inst_28780,(0),null);
var inst_28782 = cljs.core.nth.call(null,inst_28780,(1),null);
var state_28784__$1 = (function (){var statearr_28786 = state_28784;
(statearr_28786[(7)] = inst_28781);

return statearr_28786;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28784__$1,inst_28782);
} else {
return null;
}
});
return (function() {
var klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__ = null;
var klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____0 = (function (){
var statearr_28787 = [null,null,null,null,null,null,null,null];
(statearr_28787[(0)] = klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__);

(statearr_28787[(1)] = (1));

return statearr_28787;
});
var klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____1 = (function (state_28784){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28788){if((e28788 instanceof Object)){
var ex__15526__auto__ = e28788;
var statearr_28789_28791 = state_28784;
(statearr_28789_28791[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28792 = state_28784;
state_28784 = G__28792;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__ = function(state_28784){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____1.call(this,state_28784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____0;
klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_reason_$_state_machine__15523__auto____1;
return klipse$lang$reason$transpile_reason_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28790 = f__15620__auto__.call(null);
(statearr_28790[(6)] = c__15619__auto__);

return statearr_28790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.reason.transpile_ocaml__GT_reason = (function klipse$lang$reason$transpile_ocaml__GT_reason(exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28800){
var state_val_28801 = (state_28800[(1)]);
if((state_val_28801 === (1))){
var inst_28796 = klipse.lang.reason.ocaml__GT_reason.call(null,exp);
var inst_28797 = cljs.core.nth.call(null,inst_28796,(0),null);
var inst_28798 = cljs.core.nth.call(null,inst_28796,(1),null);
var state_28800__$1 = (function (){var statearr_28802 = state_28800;
(statearr_28802[(7)] = inst_28797);

return statearr_28802;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28800__$1,inst_28798);
} else {
return null;
}
});
return (function() {
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__ = null;
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____0 = (function (){
var statearr_28803 = [null,null,null,null,null,null,null,null];
(statearr_28803[(0)] = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__);

(statearr_28803[(1)] = (1));

return statearr_28803;
});
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____1 = (function (state_28800){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28804){if((e28804 instanceof Object)){
var ex__15526__auto__ = e28804;
var statearr_28805_28807 = state_28800;
(statearr_28805_28807[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28808 = state_28800;
state_28800 = G__28808;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__ = function(state_28800){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____1.call(this,state_28800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____0;
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto____1;
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28806 = f__15620__auto__.call(null);
(statearr_28806[(6)] = c__15619__auto__);

return statearr_28806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.reason.transpile_reason__GT_ocaml = (function klipse$lang$reason$transpile_reason__GT_ocaml(version,exp,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28822){
var state_val_28823 = (state_28822[(1)]);
if((state_val_28823 === (1))){
var inst_28812 = cljs.core._EQ_.call(null,version,(2));
var state_28822__$1 = state_28822;
if(inst_28812){
var statearr_28824_28833 = state_28822__$1;
(statearr_28824_28833[(1)] = (2));

} else {
var statearr_28825_28834 = state_28822__$1;
(statearr_28825_28834[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (2))){
var inst_28814 = klipse.lang.reason.reason__GT_ocaml.call(null,exp);
var state_28822__$1 = state_28822;
var statearr_28826_28835 = state_28822__$1;
(statearr_28826_28835[(2)] = inst_28814);

(statearr_28826_28835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (3))){
var inst_28816 = klipse.lang.reason.reason_3__GT_ocaml.call(null,exp);
var state_28822__$1 = state_28822;
var statearr_28827_28836 = state_28822__$1;
(statearr_28827_28836[(2)] = inst_28816);

(statearr_28827_28836[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (4))){
var inst_28818 = (state_28822[(2)]);
var inst_28819 = cljs.core.nth.call(null,inst_28818,(0),null);
var inst_28820 = cljs.core.nth.call(null,inst_28818,(1),null);
var state_28822__$1 = (function (){var statearr_28828 = state_28822;
(statearr_28828[(7)] = inst_28819);

return statearr_28828;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28822__$1,inst_28820);
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
var statearr_28829 = [null,null,null,null,null,null,null,null];
(statearr_28829[(0)] = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto__);

(statearr_28829[(1)] = (1));

return statearr_28829;
});
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto____1 = (function (state_28822){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28830){if((e28830 instanceof Object)){
var ex__15526__auto__ = e28830;
var statearr_28831_28837 = state_28822;
(statearr_28831_28837[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28838 = state_28822;
state_28822 = G__28838;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto__ = function(state_28822){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto____1.call(this,state_28822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto____0;
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto____1;
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28832 = f__15620__auto__.call(null);
(statearr_28832[(6)] = c__15619__auto__);

return statearr_28832;
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

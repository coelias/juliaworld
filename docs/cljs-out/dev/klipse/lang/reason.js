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
var map__20792 = cljs.core.js__GT_clj.call(null,JSON.parse(ocaml.compile(src)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__20792__$1 = cljs.core.__destructure_map.call(null,map__20792);
var js_error_msg = cljs.core.get.call(null,map__20792__$1,new cljs.core.Keyword(null,"js_error_msg","js_error_msg",1210372151));
var js_code = cljs.core.get.call(null,map__20792__$1,new cljs.core.Keyword(null,"js_code","js_code",-351949916));
if(cljs.core.truth_(js_error_msg)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),js_error_msg], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),js_code], null);
}
});
klipse.lang.reason.reason__GT_ocaml = (function klipse$lang$reason$reason__GT_ocaml(src){
var vec__20793 = refmt(src,"RE","implementation","ML");
var status = cljs.core.nth.call(null,vec__20793,(0),null);
var res = cljs.core.nth.call(null,vec__20793,(1),null);
if(cljs.core._EQ_.call(null,"REtoML",status)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),res], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),res], null);
}
});
klipse.lang.reason.ocaml__GT_reason = (function klipse$lang$reason$ocaml__GT_reason(src){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),printRE(parseML(src))], null);
}catch (e20796){var e = e20796;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),["Line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj20813 = (function (){var obj20811 = e;
var k20812 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20811,k20812)){
return (obj20811[k20812]);
} else {
return null;
}
})();
var k20814 = "startLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20813,k20814)){
return (obj20813[k20814]);
} else {
return null;
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj20817 = (function (){var obj20815 = e;
var k20816 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20815,k20816)){
return (obj20815[k20816]);
} else {
return null;
}
})();
var k20818 = "startLineStartChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20817,k20818)){
return (obj20817[k20818]);
} else {
return null;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj20821 = (function (){var obj20819 = e;
var k20820 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20819,k20820)){
return (obj20819[k20820]);
} else {
return null;
}
})();
var k20822 = "endLineEndChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20821,k20822)){
return (obj20821[k20822]);
} else {
return null;
}
})()),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,clojure.string.split.call(null,(function (){var obj20823 = e;
var k20824 = "message";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20823,k20824)){
return (obj20823[k20824]);
} else {
return null;
}
})(),": ")))].join('')], null);
}});
klipse.lang.reason.reason_3__GT_ocaml = (function klipse$lang$reason$reason_3__GT_ocaml(src){
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),printML(parseRE(src))], null);
}catch (e20825){var e = e20825;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),["Line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj20842 = (function (){var obj20840 = e;
var k20841 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20840,k20841)){
return (obj20840[k20841]);
} else {
return null;
}
})();
var k20843 = "startLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20842,k20843)){
return (obj20842[k20843]);
} else {
return null;
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj20846 = (function (){var obj20844 = e;
var k20845 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20844,k20845)){
return (obj20844[k20845]);
} else {
return null;
}
})();
var k20847 = "startLineStartChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20846,k20847)){
return (obj20846[k20847]);
} else {
return null;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj20850 = (function (){var obj20848 = e;
var k20849 = "location";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20848,k20849)){
return (obj20848[k20849]);
} else {
return null;
}
})();
var k20851 = "endLineEndChar";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20850,k20851)){
return (obj20850[k20851]);
} else {
return null;
}
})()),"  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,clojure.string.split.call(null,(function (){var obj20852 = e;
var k20853 = "message";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20852,k20853)){
return (obj20852[k20853]);
} else {
return null;
}
})(),": ")))].join('')], null);
}});
klipse.lang.reason.reason__GT_js = (function klipse$lang$reason$reason__GT_js(version,src){
var vec__20854 = ((cljs.core._EQ_.call(null,version,(2)))?klipse.lang.reason.reason__GT_ocaml.call(null,src):klipse.lang.reason.reason_3__GT_ocaml.call(null,src));
var status = cljs.core.nth.call(null,vec__20854,(0),null);
var res = cljs.core.nth.call(null,vec__20854,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),status)){
var vec__20857 = klipse.lang.reason.ocaml__GT_js.call(null,res);
var status__$1 = cljs.core.nth.call(null,vec__20857,(0),null);
var res__$1 = cljs.core.nth.call(null,vec__20857,(1),null);
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
var console_log20860_20865 = console.log;
(console.log = (function() { 
var G__20866__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__20866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20867__i = 0, G__20867__a = new Array(arguments.length -  0);
while (G__20867__i < G__20867__a.length) {G__20867__a[G__20867__i] = arguments[G__20867__i + 0]; ++G__20867__i;}
  args = new cljs.core.IndexedSeq(G__20867__a,0,null);
} 
return G__20866__delegate.call(this,args);};
G__20866.cljs$lang$maxFixedArity = 0;
G__20866.cljs$lang$applyTo = (function (arglist__20868){
var args = cljs.core.seq(arglist__20868);
return G__20866__delegate(args);
});
G__20866.cljs$core$IFn$_invoke$arity$variadic = G__20866__delegate;
return G__20866;
})()
);

try{try{(exports = ({}));

var vec__20862_20869 = klipse.lang.reason.reason__GT_js.call(null,version,exp);
var status_20870 = cljs.core.nth.call(null,vec__20862_20869,(0),null);
var res_20871 = cljs.core.nth.call(null,vec__20862_20869,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_20870)){
cljs.core.async.put_BANG_.call(null,c,res_20871);
} else {
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse.lang.reason.eval_in_global_scope.call(null,res_20871)));
}
}catch (e20861){var o_20872 = e20861;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_20872);
}}finally {(console.log = console_log20860_20865);
}
return c;
});
klipse.lang.reason.eval_reason_with_types = (function klipse$lang$reason$eval_reason_with_types(version,exp,_){
var c = cljs.core.async.chan.call(null);
var console_error20873_20881 = console.error;
(console.error = (function() { 
var G__20882__delegate = function (args){
cljs.core.async.put_BANG_.call(null,c,clojure.string.join.call(null," ",args));

return cljs.core.async.put_BANG_.call(null,c,"\n");
};
var G__20882 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20883__i = 0, G__20883__a = new Array(arguments.length -  0);
while (G__20883__i < G__20883__a.length) {G__20883__a[G__20883__i] = arguments[G__20883__i + 0]; ++G__20883__i;}
  args = new cljs.core.IndexedSeq(G__20883__a,0,null);
} 
return G__20882__delegate.call(this,args);};
G__20882.cljs$lang$maxFixedArity = 0;
G__20882.cljs$lang$applyTo = (function (arglist__20884){
var args = cljs.core.seq(arglist__20884);
return G__20882__delegate(args);
});
G__20882.cljs$core$IFn$_invoke$arity$variadic = G__20882__delegate;
return G__20882;
})()
);

try{try{var vec__20875_20885 = klipse.lang.reason.reason_3__GT_ocaml.call(null,exp);
var status_20886 = cljs.core.nth.call(null,vec__20875_20885,(0),null);
var res_20887 = cljs.core.nth.call(null,vec__20875_20885,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_20886)){
cljs.core.async.put_BANG_.call(null,c,res_20887);
} else {
var vec__20878_20888 = klipse.lang.ocaml.eval_with_types.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(res_20887),";;"].join(''));
var status_20889__$1 = cljs.core.nth.call(null,vec__20878_20888,(0),null);
var res_20890__$1 = cljs.core.nth.call(null,vec__20878_20888,(1),null);
cljs.core.async.put_BANG_.call(null,c,res_20890__$1);
}
}catch (e20874){var o_20891 = e20874;
cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_20891);
}}finally {(console.error = console_error20873_20881);
}
return c;
});
klipse.lang.reason.transpile_reason = (function klipse$lang$reason$transpile_reason(version,exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_20899){
var state_val_20900 = (state_20899[(1)]);
if((state_val_20900 === (1))){
var inst_20895 = klipse.lang.reason.reason__GT_js.call(null,version,exp);
var inst_20896 = cljs.core.nth.call(null,inst_20895,(0),null);
var inst_20897 = cljs.core.nth.call(null,inst_20895,(1),null);
var state_20899__$1 = (function (){var statearr_20901 = state_20899;
(statearr_20901[(7)] = inst_20896);

return statearr_20901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20899__$1,inst_20897);
} else {
return null;
}
});
return (function() {
var klipse$lang$reason$transpile_reason_$_state_machine__13608__auto__ = null;
var klipse$lang$reason$transpile_reason_$_state_machine__13608__auto____0 = (function (){
var statearr_20902 = [null,null,null,null,null,null,null,null];
(statearr_20902[(0)] = klipse$lang$reason$transpile_reason_$_state_machine__13608__auto__);

(statearr_20902[(1)] = (1));

return statearr_20902;
});
var klipse$lang$reason$transpile_reason_$_state_machine__13608__auto____1 = (function (state_20899){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_20899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e20903){if((e20903 instanceof Object)){
var ex__13611__auto__ = e20903;
var statearr_20904_20906 = state_20899;
(statearr_20904_20906[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20907 = state_20899;
state_20899 = G__20907;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$reason$transpile_reason_$_state_machine__13608__auto__ = function(state_20899){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_reason_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_reason_$_state_machine__13608__auto____1.call(this,state_20899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_reason_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_reason_$_state_machine__13608__auto____0;
klipse$lang$reason$transpile_reason_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_reason_$_state_machine__13608__auto____1;
return klipse$lang$reason$transpile_reason_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_20905 = f__13705__auto__.call(null);
(statearr_20905[(6)] = c__13704__auto__);

return statearr_20905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.reason.transpile_ocaml__GT_reason = (function klipse$lang$reason$transpile_ocaml__GT_reason(exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_20915){
var state_val_20916 = (state_20915[(1)]);
if((state_val_20916 === (1))){
var inst_20911 = klipse.lang.reason.ocaml__GT_reason.call(null,exp);
var inst_20912 = cljs.core.nth.call(null,inst_20911,(0),null);
var inst_20913 = cljs.core.nth.call(null,inst_20911,(1),null);
var state_20915__$1 = (function (){var statearr_20917 = state_20915;
(statearr_20917[(7)] = inst_20912);

return statearr_20917;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20915__$1,inst_20913);
} else {
return null;
}
});
return (function() {
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto__ = null;
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto____0 = (function (){
var statearr_20918 = [null,null,null,null,null,null,null,null];
(statearr_20918[(0)] = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto__);

(statearr_20918[(1)] = (1));

return statearr_20918;
});
var klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto____1 = (function (state_20915){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_20915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e20919){if((e20919 instanceof Object)){
var ex__13611__auto__ = e20919;
var statearr_20920_20922 = state_20915;
(statearr_20920_20922[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20923 = state_20915;
state_20915 = G__20923;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto__ = function(state_20915){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto____1.call(this,state_20915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto____0;
klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto____1;
return klipse$lang$reason$transpile_ocaml__GT_reason_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_20921 = f__13705__auto__.call(null);
(statearr_20921[(6)] = c__13704__auto__);

return statearr_20921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.reason.transpile_reason__GT_ocaml = (function klipse$lang$reason$transpile_reason__GT_ocaml(version,exp,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_20937){
var state_val_20938 = (state_20937[(1)]);
if((state_val_20938 === (1))){
var inst_20927 = cljs.core._EQ_.call(null,version,(2));
var state_20937__$1 = state_20937;
if(inst_20927){
var statearr_20939_20948 = state_20937__$1;
(statearr_20939_20948[(1)] = (2));

} else {
var statearr_20940_20949 = state_20937__$1;
(statearr_20940_20949[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20938 === (2))){
var inst_20929 = klipse.lang.reason.reason__GT_ocaml.call(null,exp);
var state_20937__$1 = state_20937;
var statearr_20941_20950 = state_20937__$1;
(statearr_20941_20950[(2)] = inst_20929);

(statearr_20941_20950[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20938 === (3))){
var inst_20931 = klipse.lang.reason.reason_3__GT_ocaml.call(null,exp);
var state_20937__$1 = state_20937;
var statearr_20942_20951 = state_20937__$1;
(statearr_20942_20951[(2)] = inst_20931);

(statearr_20942_20951[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20938 === (4))){
var inst_20933 = (state_20937[(2)]);
var inst_20934 = cljs.core.nth.call(null,inst_20933,(0),null);
var inst_20935 = cljs.core.nth.call(null,inst_20933,(1),null);
var state_20937__$1 = (function (){var statearr_20943 = state_20937;
(statearr_20943[(7)] = inst_20934);

return statearr_20943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20937__$1,inst_20935);
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
var statearr_20944 = [null,null,null,null,null,null,null,null];
(statearr_20944[(0)] = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto__);

(statearr_20944[(1)] = (1));

return statearr_20944;
});
var klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto____1 = (function (state_20937){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_20937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e20945){if((e20945 instanceof Object)){
var ex__13611__auto__ = e20945;
var statearr_20946_20952 = state_20937;
(statearr_20946_20952[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20953 = state_20937;
state_20937 = G__20953;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto__ = function(state_20937){
switch(arguments.length){
case 0:
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto____1.call(this,state_20937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto____0;
klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto____1;
return klipse$lang$reason$transpile_reason__GT_ocaml_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_20947 = f__13705__auto__.call(null);
(statearr_20947[(6)] = c__13704__auto__);

return statearr_20947;
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

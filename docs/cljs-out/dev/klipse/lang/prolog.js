// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.prolog');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.prolog.session = cljs.core.atom.call(null,null);
klipse.lang.prolog.init = (function klipse$lang$prolog$init(){
if(cljs.core.not.call(null,cljs.core.deref.call(null,klipse.lang.prolog.session))){
return cljs.core.reset_BANG_.call(null,klipse.lang.prolog.session,(function (){var obj__20025__auto__ = pl;
var f__20026__auto__ = (function (){var obj21564 = obj__20025__auto__;
var k21565 = "create";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21564,k21565)){
return (obj21564[k21565]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__);
})());
} else {
return null;
}
});
klipse.lang.prolog.consult_STAR_ = (function klipse$lang$prolog$consult_STAR_(exp){
var my_session = cljs.core.deref.call(null,klipse.lang.prolog.session);
var res = (function (){var obj__20025__auto__ = my_session;
var f__20026__auto__ = (function (){var obj21566 = obj__20025__auto__;
var k21567 = "consult";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21566,k21567)){
return (obj21566[k21567]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,exp);
})();
if(cljs.core._EQ_.call(null,true,res)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),true], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(res)], null);
}
});
klipse.lang.prolog.consult = (function klipse$lang$prolog$consult(exp,_){
var c = cljs.core.async.chan.call(null);
try{klipse.lang.prolog.init.call(null);

var vec__21569_21572 = klipse.lang.prolog.consult_STAR_.call(null,exp);
var status_21573 = cljs.core.nth.call(null,vec__21569_21572,(0),null);
var res_21574 = cljs.core.nth.call(null,vec__21569_21572,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_21573)){
cljs.core.async.put_BANG_.call(null,c,res_21574);
} else {
cljs.core.async.put_BANG_.call(null,c,"Rules are valid.");
}
}catch (e21568){var o_21575 = e21568;
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_21575));
}
return c;
});
klipse.lang.prolog.query_STAR_ = (function klipse$lang$prolog$query_STAR_(exp){
var my_session = cljs.core.deref.call(null,klipse.lang.prolog.session);
var res = (function (){var obj__20025__auto__ = my_session;
var f__20026__auto__ = (function (){var obj21576 = obj__20025__auto__;
var k21577 = "query";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21576,k21577)){
return (obj21576[k21577]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,exp);
})();
if(cljs.core._EQ_.call(null,true,res)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),true], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(res)], null);
}
});
klipse.lang.prolog.answer_STAR_ = (function klipse$lang$prolog$answer_STAR_(cnt,num_solutions,callback){
var my_session = cljs.core.deref.call(null,klipse.lang.prolog.session);
var obj__20025__auto__ = my_session;
var f__20026__auto__ = (function (){var obj21578 = obj__20025__auto__;
var k21579 = "answer";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21578,k21579)){
return (obj21578[k21579]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,(function (ans){
var G__21580 = ans;
if(cljs.core._EQ_.call(null,false,G__21580)){
if((num_solutions === (0))){
return callback.call(null,"No solutions.");
} else {
return callback.call(null,["Found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_solutions)," solutions."].join(''));
}
} else {
if(cljs.core._EQ_.call(null,null,G__21580)){
return setTimeout((function (){
callback.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_solutions)," solutions after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cnt + (1)) * (1000)))," tries. Continuing to try...\n"].join(''),new cljs.core.Keyword(null,"remove-previous-results","remove-previous-results",883218005),true], null));

return klipse.lang.prolog.answer_STAR_.call(null,(cnt + (1)),num_solutions,callback);
}),(100));
} else {
callback.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj__20025__auto____$1 = pl;
var f__20026__auto____$1 = (function (){var obj21583 = obj__20025__auto____$1;
var k21584 = "format_answer";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21583,k21584)){
return (obj21583[k21584]);
} else {
return null;
}
})();
return f__20026__auto____$1.call(obj__20025__auto____$1,ans);
})()),"\n"].join(''));

return klipse.lang.prolog.answer_STAR_.call(null,(cnt + (1)),(num_solutions + (1)),callback);

}
}
}));
});
klipse.lang.prolog.query = (function klipse$lang$prolog$query(exp,_){
var c = cljs.core.async.chan.call(null);
try{klipse.lang.prolog.init.call(null);

var vec__21587_21590 = klipse.lang.prolog.query_STAR_.call(null,exp);
var status_21591 = cljs.core.nth.call(null,vec__21587_21590,(0),null);
var res_21592 = cljs.core.nth.call(null,vec__21587_21590,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),status_21591)){
cljs.core.async.put_BANG_.call(null,c,res_21592);
} else {
klipse.lang.prolog.answer_STAR_.call(null,(0),(0),(function (p1__21585_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__21585_SHARP_);
}));
}
}catch (e21586){var o_21593 = e21586;
cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_21593));
}
return c;
});
klipse.lang.prolog.rules_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"logtalk",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),true,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.prolog.consult,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://viebel.github.io/klipse/repo/js/tau-prolog.js","https://viebel.github.io/klipse/repo/js/codemirror-logtalk.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"%"], null);
klipse.lang.prolog.query_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"logtalk",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),true,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.prolog.query,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://viebel.github.io/klipse/repo/js/tau-prolog.js","https://viebel.github.io/klipse/repo/js/codemirror-logtalk.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"%"], null);
klipse.common.registry.register_mode.call(null,"prolog-rules","selector_prolog_rules",klipse.lang.prolog.rules_opts);
klipse.common.registry.register_mode.call(null,"prolog-query","selector_prolog_query",klipse.lang.prolog.query_opts);

//# sourceMappingURL=prolog.js.map

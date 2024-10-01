// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26232){
var map__26233 = p__26232;
var map__26233__$1 = cljs.core.__destructure_map.call(null,map__26233);
var m = map__26233__$1;
var n = cljs.core.get.call(null,map__26233__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26233__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26234_26262 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26235_26263 = null;
var count__26236_26264 = (0);
var i__26237_26265 = (0);
while(true){
if((i__26237_26265 < count__26236_26264)){
var f_26266 = cljs.core._nth.call(null,chunk__26235_26263,i__26237_26265);
cljs.core.println.call(null,"  ",f_26266);


var G__26267 = seq__26234_26262;
var G__26268 = chunk__26235_26263;
var G__26269 = count__26236_26264;
var G__26270 = (i__26237_26265 + (1));
seq__26234_26262 = G__26267;
chunk__26235_26263 = G__26268;
count__26236_26264 = G__26269;
i__26237_26265 = G__26270;
continue;
} else {
var temp__5804__auto___26271 = cljs.core.seq.call(null,seq__26234_26262);
if(temp__5804__auto___26271){
var seq__26234_26272__$1 = temp__5804__auto___26271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26234_26272__$1)){
var c__5565__auto___26273 = cljs.core.chunk_first.call(null,seq__26234_26272__$1);
var G__26274 = cljs.core.chunk_rest.call(null,seq__26234_26272__$1);
var G__26275 = c__5565__auto___26273;
var G__26276 = cljs.core.count.call(null,c__5565__auto___26273);
var G__26277 = (0);
seq__26234_26262 = G__26274;
chunk__26235_26263 = G__26275;
count__26236_26264 = G__26276;
i__26237_26265 = G__26277;
continue;
} else {
var f_26278 = cljs.core.first.call(null,seq__26234_26272__$1);
cljs.core.println.call(null,"  ",f_26278);


var G__26279 = cljs.core.next.call(null,seq__26234_26272__$1);
var G__26280 = null;
var G__26281 = (0);
var G__26282 = (0);
seq__26234_26262 = G__26279;
chunk__26235_26263 = G__26280;
count__26236_26264 = G__26281;
i__26237_26265 = G__26282;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26283 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26283);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26283)))?cljs.core.second.call(null,arglists_26283):arglists_26283));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26238_26284 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26239_26285 = null;
var count__26240_26286 = (0);
var i__26241_26287 = (0);
while(true){
if((i__26241_26287 < count__26240_26286)){
var vec__26250_26288 = cljs.core._nth.call(null,chunk__26239_26285,i__26241_26287);
var name_26289 = cljs.core.nth.call(null,vec__26250_26288,(0),null);
var map__26253_26290 = cljs.core.nth.call(null,vec__26250_26288,(1),null);
var map__26253_26291__$1 = cljs.core.__destructure_map.call(null,map__26253_26290);
var doc_26292 = cljs.core.get.call(null,map__26253_26291__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26293 = cljs.core.get.call(null,map__26253_26291__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26289);

cljs.core.println.call(null," ",arglists_26293);

if(cljs.core.truth_(doc_26292)){
cljs.core.println.call(null," ",doc_26292);
} else {
}


var G__26294 = seq__26238_26284;
var G__26295 = chunk__26239_26285;
var G__26296 = count__26240_26286;
var G__26297 = (i__26241_26287 + (1));
seq__26238_26284 = G__26294;
chunk__26239_26285 = G__26295;
count__26240_26286 = G__26296;
i__26241_26287 = G__26297;
continue;
} else {
var temp__5804__auto___26298 = cljs.core.seq.call(null,seq__26238_26284);
if(temp__5804__auto___26298){
var seq__26238_26299__$1 = temp__5804__auto___26298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26238_26299__$1)){
var c__5565__auto___26300 = cljs.core.chunk_first.call(null,seq__26238_26299__$1);
var G__26301 = cljs.core.chunk_rest.call(null,seq__26238_26299__$1);
var G__26302 = c__5565__auto___26300;
var G__26303 = cljs.core.count.call(null,c__5565__auto___26300);
var G__26304 = (0);
seq__26238_26284 = G__26301;
chunk__26239_26285 = G__26302;
count__26240_26286 = G__26303;
i__26241_26287 = G__26304;
continue;
} else {
var vec__26254_26305 = cljs.core.first.call(null,seq__26238_26299__$1);
var name_26306 = cljs.core.nth.call(null,vec__26254_26305,(0),null);
var map__26257_26307 = cljs.core.nth.call(null,vec__26254_26305,(1),null);
var map__26257_26308__$1 = cljs.core.__destructure_map.call(null,map__26257_26307);
var doc_26309 = cljs.core.get.call(null,map__26257_26308__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26310 = cljs.core.get.call(null,map__26257_26308__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26306);

cljs.core.println.call(null," ",arglists_26310);

if(cljs.core.truth_(doc_26309)){
cljs.core.println.call(null," ",doc_26309);
} else {
}


var G__26311 = cljs.core.next.call(null,seq__26238_26299__$1);
var G__26312 = null;
var G__26313 = (0);
var G__26314 = (0);
seq__26238_26284 = G__26311;
chunk__26239_26285 = G__26312;
count__26240_26286 = G__26313;
i__26241_26287 = G__26314;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__26258 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26259 = null;
var count__26260 = (0);
var i__26261 = (0);
while(true){
if((i__26261 < count__26260)){
var role = cljs.core._nth.call(null,chunk__26259,i__26261);
var temp__5804__auto___26315__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___26315__$1)){
var spec_26316 = temp__5804__auto___26315__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26316));
} else {
}


var G__26317 = seq__26258;
var G__26318 = chunk__26259;
var G__26319 = count__26260;
var G__26320 = (i__26261 + (1));
seq__26258 = G__26317;
chunk__26259 = G__26318;
count__26260 = G__26319;
i__26261 = G__26320;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__26258);
if(temp__5804__auto____$1){
var seq__26258__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26258__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__26258__$1);
var G__26321 = cljs.core.chunk_rest.call(null,seq__26258__$1);
var G__26322 = c__5565__auto__;
var G__26323 = cljs.core.count.call(null,c__5565__auto__);
var G__26324 = (0);
seq__26258 = G__26321;
chunk__26259 = G__26322;
count__26260 = G__26323;
i__26261 = G__26324;
continue;
} else {
var role = cljs.core.first.call(null,seq__26258__$1);
var temp__5804__auto___26325__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___26325__$2)){
var spec_26326 = temp__5804__auto___26325__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26326));
} else {
}


var G__26327 = cljs.core.next.call(null,seq__26258__$1);
var G__26328 = null;
var G__26329 = (0);
var G__26330 = (0);
seq__26258 = G__26327;
chunk__26259 = G__26328;
count__26260 = G__26329;
i__26261 = G__26330;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__26331 = cljs.core.conj.call(null,via,t);
var G__26332 = cljs.core.ex_cause.call(null,t);
via = G__26331;
t = G__26332;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__26335 = datafied_throwable;
var map__26335__$1 = cljs.core.__destructure_map.call(null,map__26335);
var via = cljs.core.get.call(null,map__26335__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__26335__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__26335__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__26336 = cljs.core.last.call(null,via);
var map__26336__$1 = cljs.core.__destructure_map.call(null,map__26336);
var type = cljs.core.get.call(null,map__26336__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__26336__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__26336__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__26337 = data;
var map__26337__$1 = cljs.core.__destructure_map.call(null,map__26337);
var problems = cljs.core.get.call(null,map__26337__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__26337__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__26337__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__26338 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__26338__$1 = cljs.core.__destructure_map.call(null,map__26338);
var top_data = map__26338__$1;
var source = cljs.core.get.call(null,map__26338__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__26339 = phase;
var G__26339__$1 = (((G__26339 instanceof cljs.core.Keyword))?G__26339.fqn:null);
switch (G__26339__$1) {
case "read-source":
var map__26340 = data;
var map__26340__$1 = cljs.core.__destructure_map.call(null,map__26340);
var line = cljs.core.get.call(null,map__26340__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__26340__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__26341 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__26341__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__26341,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26341);
var G__26341__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__26341__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26341__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__26341__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26341__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__26342 = top_data;
var G__26342__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__26342,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26342);
var G__26342__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__26342__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26342__$1);
var G__26342__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__26342__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26342__$2);
var G__26342__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__26342__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26342__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__26342__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26342__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__26343 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__26343,(0),null);
var method = cljs.core.nth.call(null,vec__26343,(1),null);
var file = cljs.core.nth.call(null,vec__26343,(2),null);
var line = cljs.core.nth.call(null,vec__26343,(3),null);
var G__26346 = top_data;
var G__26346__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__26346,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__26346);
var G__26346__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__26346__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__26346__$1);
var G__26346__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.call(null,G__26346__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__26346__$2);
var G__26346__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__26346__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26346__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__26346__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26346__$4;
}

break;
case "execution":
var vec__26347 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__26347,(0),null);
var method = cljs.core.nth.call(null,vec__26347,(1),null);
var file = cljs.core.nth.call(null,vec__26347,(2),null);
var line = cljs.core.nth.call(null,vec__26347,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__26334_SHARP_){
var or__5043__auto__ = (p1__26334_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__26334_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__26350 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__26350__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__26350,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__26350);
var G__26350__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__26350__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26350__$1);
var G__26350__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.call(null,G__26350__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__26350__$2);
var G__26350__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__26350__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__26350__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__26350__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26350__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26339__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__26354){
var map__26355 = p__26354;
var map__26355__$1 = cljs.core.__destructure_map.call(null,map__26355);
var triage_data = map__26355__$1;
var phase = cljs.core.get.call(null,map__26355__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__26355__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__26355__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__26355__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__26355__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__26355__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__26355__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__26355__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__26356 = phase;
var G__26356__$1 = (((G__26356 instanceof cljs.core.Keyword))?G__26356.fqn:null);
switch (G__26356__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26357_26366 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26358_26367 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26359_26368 = true;
var _STAR_print_fn_STAR__temp_val__26360_26369 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26359_26368);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26360_26369);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__26352_SHARP_){
return cljs.core.dissoc.call(null,p1__26352_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26358_26367);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26357_26366);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26361_26370 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26362_26371 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26363_26372 = true;
var _STAR_print_fn_STAR__temp_val__26364_26373 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26363_26372);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26364_26373);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__26353_SHARP_){
return cljs.core.dissoc.call(null,p1__26353_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26362_26371);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26361_26370);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26356__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map

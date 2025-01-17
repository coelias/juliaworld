// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28357){
var map__28358 = p__28357;
var map__28358__$1 = cljs.core.__destructure_map.call(null,map__28358);
var m = map__28358__$1;
var n = cljs.core.get.call(null,map__28358__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28358__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28359_28387 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28360_28388 = null;
var count__28361_28389 = (0);
var i__28362_28390 = (0);
while(true){
if((i__28362_28390 < count__28361_28389)){
var f_28391 = cljs.core._nth.call(null,chunk__28360_28388,i__28362_28390);
cljs.core.println.call(null,"  ",f_28391);


var G__28392 = seq__28359_28387;
var G__28393 = chunk__28360_28388;
var G__28394 = count__28361_28389;
var G__28395 = (i__28362_28390 + (1));
seq__28359_28387 = G__28392;
chunk__28360_28388 = G__28393;
count__28361_28389 = G__28394;
i__28362_28390 = G__28395;
continue;
} else {
var temp__5804__auto___28396 = cljs.core.seq.call(null,seq__28359_28387);
if(temp__5804__auto___28396){
var seq__28359_28397__$1 = temp__5804__auto___28396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28359_28397__$1)){
var c__5565__auto___28398 = cljs.core.chunk_first.call(null,seq__28359_28397__$1);
var G__28399 = cljs.core.chunk_rest.call(null,seq__28359_28397__$1);
var G__28400 = c__5565__auto___28398;
var G__28401 = cljs.core.count.call(null,c__5565__auto___28398);
var G__28402 = (0);
seq__28359_28387 = G__28399;
chunk__28360_28388 = G__28400;
count__28361_28389 = G__28401;
i__28362_28390 = G__28402;
continue;
} else {
var f_28403 = cljs.core.first.call(null,seq__28359_28397__$1);
cljs.core.println.call(null,"  ",f_28403);


var G__28404 = cljs.core.next.call(null,seq__28359_28397__$1);
var G__28405 = null;
var G__28406 = (0);
var G__28407 = (0);
seq__28359_28387 = G__28404;
chunk__28360_28388 = G__28405;
count__28361_28389 = G__28406;
i__28362_28390 = G__28407;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28408 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28408);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28408)))?cljs.core.second.call(null,arglists_28408):arglists_28408));
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
var seq__28363_28409 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28364_28410 = null;
var count__28365_28411 = (0);
var i__28366_28412 = (0);
while(true){
if((i__28366_28412 < count__28365_28411)){
var vec__28375_28413 = cljs.core._nth.call(null,chunk__28364_28410,i__28366_28412);
var name_28414 = cljs.core.nth.call(null,vec__28375_28413,(0),null);
var map__28378_28415 = cljs.core.nth.call(null,vec__28375_28413,(1),null);
var map__28378_28416__$1 = cljs.core.__destructure_map.call(null,map__28378_28415);
var doc_28417 = cljs.core.get.call(null,map__28378_28416__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28418 = cljs.core.get.call(null,map__28378_28416__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28414);

cljs.core.println.call(null," ",arglists_28418);

if(cljs.core.truth_(doc_28417)){
cljs.core.println.call(null," ",doc_28417);
} else {
}


var G__28419 = seq__28363_28409;
var G__28420 = chunk__28364_28410;
var G__28421 = count__28365_28411;
var G__28422 = (i__28366_28412 + (1));
seq__28363_28409 = G__28419;
chunk__28364_28410 = G__28420;
count__28365_28411 = G__28421;
i__28366_28412 = G__28422;
continue;
} else {
var temp__5804__auto___28423 = cljs.core.seq.call(null,seq__28363_28409);
if(temp__5804__auto___28423){
var seq__28363_28424__$1 = temp__5804__auto___28423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28363_28424__$1)){
var c__5565__auto___28425 = cljs.core.chunk_first.call(null,seq__28363_28424__$1);
var G__28426 = cljs.core.chunk_rest.call(null,seq__28363_28424__$1);
var G__28427 = c__5565__auto___28425;
var G__28428 = cljs.core.count.call(null,c__5565__auto___28425);
var G__28429 = (0);
seq__28363_28409 = G__28426;
chunk__28364_28410 = G__28427;
count__28365_28411 = G__28428;
i__28366_28412 = G__28429;
continue;
} else {
var vec__28379_28430 = cljs.core.first.call(null,seq__28363_28424__$1);
var name_28431 = cljs.core.nth.call(null,vec__28379_28430,(0),null);
var map__28382_28432 = cljs.core.nth.call(null,vec__28379_28430,(1),null);
var map__28382_28433__$1 = cljs.core.__destructure_map.call(null,map__28382_28432);
var doc_28434 = cljs.core.get.call(null,map__28382_28433__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28435 = cljs.core.get.call(null,map__28382_28433__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28431);

cljs.core.println.call(null," ",arglists_28435);

if(cljs.core.truth_(doc_28434)){
cljs.core.println.call(null," ",doc_28434);
} else {
}


var G__28436 = cljs.core.next.call(null,seq__28363_28424__$1);
var G__28437 = null;
var G__28438 = (0);
var G__28439 = (0);
seq__28363_28409 = G__28436;
chunk__28364_28410 = G__28437;
count__28365_28411 = G__28438;
i__28366_28412 = G__28439;
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

var seq__28383 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28384 = null;
var count__28385 = (0);
var i__28386 = (0);
while(true){
if((i__28386 < count__28385)){
var role = cljs.core._nth.call(null,chunk__28384,i__28386);
var temp__5804__auto___28440__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___28440__$1)){
var spec_28441 = temp__5804__auto___28440__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28441));
} else {
}


var G__28442 = seq__28383;
var G__28443 = chunk__28384;
var G__28444 = count__28385;
var G__28445 = (i__28386 + (1));
seq__28383 = G__28442;
chunk__28384 = G__28443;
count__28385 = G__28444;
i__28386 = G__28445;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__28383);
if(temp__5804__auto____$1){
var seq__28383__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28383__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__28383__$1);
var G__28446 = cljs.core.chunk_rest.call(null,seq__28383__$1);
var G__28447 = c__5565__auto__;
var G__28448 = cljs.core.count.call(null,c__5565__auto__);
var G__28449 = (0);
seq__28383 = G__28446;
chunk__28384 = G__28447;
count__28385 = G__28448;
i__28386 = G__28449;
continue;
} else {
var role = cljs.core.first.call(null,seq__28383__$1);
var temp__5804__auto___28450__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___28450__$2)){
var spec_28451 = temp__5804__auto___28450__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28451));
} else {
}


var G__28452 = cljs.core.next.call(null,seq__28383__$1);
var G__28453 = null;
var G__28454 = (0);
var G__28455 = (0);
seq__28383 = G__28452;
chunk__28384 = G__28453;
count__28385 = G__28454;
i__28386 = G__28455;
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
var G__28456 = cljs.core.conj.call(null,via,t);
var G__28457 = cljs.core.ex_cause.call(null,t);
via = G__28456;
t = G__28457;
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
var map__28460 = datafied_throwable;
var map__28460__$1 = cljs.core.__destructure_map.call(null,map__28460);
var via = cljs.core.get.call(null,map__28460__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28460__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28460__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28461 = cljs.core.last.call(null,via);
var map__28461__$1 = cljs.core.__destructure_map.call(null,map__28461);
var type = cljs.core.get.call(null,map__28461__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28461__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28461__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28462 = data;
var map__28462__$1 = cljs.core.__destructure_map.call(null,map__28462);
var problems = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28462__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28463 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28463__$1 = cljs.core.__destructure_map.call(null,map__28463);
var top_data = map__28463__$1;
var source = cljs.core.get.call(null,map__28463__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28464 = phase;
var G__28464__$1 = (((G__28464 instanceof cljs.core.Keyword))?G__28464.fqn:null);
switch (G__28464__$1) {
case "read-source":
var map__28465 = data;
var map__28465__$1 = cljs.core.__destructure_map.call(null,map__28465);
var line = cljs.core.get.call(null,map__28465__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28465__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28466 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28466__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28466,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28466);
var G__28466__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28466__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28466__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28466__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28466__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28467 = top_data;
var G__28467__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28467,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28467);
var G__28467__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28467__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28467__$1);
var G__28467__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28467__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28467__$2);
var G__28467__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28467__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28467__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28467__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28467__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28468 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28468,(0),null);
var method = cljs.core.nth.call(null,vec__28468,(1),null);
var file = cljs.core.nth.call(null,vec__28468,(2),null);
var line = cljs.core.nth.call(null,vec__28468,(3),null);
var G__28471 = top_data;
var G__28471__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28471,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28471);
var G__28471__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28471__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28471__$1);
var G__28471__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.call(null,G__28471__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28471__$2);
var G__28471__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28471__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28471__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28471__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28471__$4;
}

break;
case "execution":
var vec__28472 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28472,(0),null);
var method = cljs.core.nth.call(null,vec__28472,(1),null);
var file = cljs.core.nth.call(null,vec__28472,(2),null);
var line = cljs.core.nth.call(null,vec__28472,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__28459_SHARP_){
var or__5043__auto__ = (p1__28459_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28459_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__28475 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28475__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28475,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28475);
var G__28475__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28475__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28475__$1);
var G__28475__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__28475__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28475__$2);
var G__28475__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28475__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28475__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28475__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28475__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28464__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28479){
var map__28480 = p__28479;
var map__28480__$1 = cljs.core.__destructure_map.call(null,map__28480);
var triage_data = map__28480__$1;
var phase = cljs.core.get.call(null,map__28480__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28480__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28480__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28480__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28480__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28480__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28480__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28480__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__28481 = phase;
var G__28481__$1 = (((G__28481 instanceof cljs.core.Keyword))?G__28481.fqn:null);
switch (G__28481__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28482_28491 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28483_28492 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28484_28493 = true;
var _STAR_print_fn_STAR__temp_val__28485_28494 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28484_28493);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28485_28494);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28477_SHARP_){
return cljs.core.dissoc.call(null,p1__28477_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28483_28492);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28482_28491);
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
var _STAR_print_newline_STAR__orig_val__28486_28495 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28487_28496 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28488_28497 = true;
var _STAR_print_fn_STAR__temp_val__28489_28498 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28488_28497);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28489_28498);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28478_SHARP_){
return cljs.core.dissoc.call(null,p1__28478_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28487_28496);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28486_28495);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28481__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map

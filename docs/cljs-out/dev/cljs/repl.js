// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28767){
var map__28768 = p__28767;
var map__28768__$1 = cljs.core.__destructure_map.call(null,map__28768);
var m = map__28768__$1;
var n = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28769_28797 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28770_28798 = null;
var count__28771_28799 = (0);
var i__28772_28800 = (0);
while(true){
if((i__28772_28800 < count__28771_28799)){
var f_28801 = cljs.core._nth.call(null,chunk__28770_28798,i__28772_28800);
cljs.core.println.call(null,"  ",f_28801);


var G__28802 = seq__28769_28797;
var G__28803 = chunk__28770_28798;
var G__28804 = count__28771_28799;
var G__28805 = (i__28772_28800 + (1));
seq__28769_28797 = G__28802;
chunk__28770_28798 = G__28803;
count__28771_28799 = G__28804;
i__28772_28800 = G__28805;
continue;
} else {
var temp__5804__auto___28806 = cljs.core.seq.call(null,seq__28769_28797);
if(temp__5804__auto___28806){
var seq__28769_28807__$1 = temp__5804__auto___28806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28769_28807__$1)){
var c__5565__auto___28808 = cljs.core.chunk_first.call(null,seq__28769_28807__$1);
var G__28809 = cljs.core.chunk_rest.call(null,seq__28769_28807__$1);
var G__28810 = c__5565__auto___28808;
var G__28811 = cljs.core.count.call(null,c__5565__auto___28808);
var G__28812 = (0);
seq__28769_28797 = G__28809;
chunk__28770_28798 = G__28810;
count__28771_28799 = G__28811;
i__28772_28800 = G__28812;
continue;
} else {
var f_28813 = cljs.core.first.call(null,seq__28769_28807__$1);
cljs.core.println.call(null,"  ",f_28813);


var G__28814 = cljs.core.next.call(null,seq__28769_28807__$1);
var G__28815 = null;
var G__28816 = (0);
var G__28817 = (0);
seq__28769_28797 = G__28814;
chunk__28770_28798 = G__28815;
count__28771_28799 = G__28816;
i__28772_28800 = G__28817;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28818 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28818);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28818)))?cljs.core.second.call(null,arglists_28818):arglists_28818));
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
var seq__28773_28819 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28774_28820 = null;
var count__28775_28821 = (0);
var i__28776_28822 = (0);
while(true){
if((i__28776_28822 < count__28775_28821)){
var vec__28785_28823 = cljs.core._nth.call(null,chunk__28774_28820,i__28776_28822);
var name_28824 = cljs.core.nth.call(null,vec__28785_28823,(0),null);
var map__28788_28825 = cljs.core.nth.call(null,vec__28785_28823,(1),null);
var map__28788_28826__$1 = cljs.core.__destructure_map.call(null,map__28788_28825);
var doc_28827 = cljs.core.get.call(null,map__28788_28826__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28828 = cljs.core.get.call(null,map__28788_28826__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28824);

cljs.core.println.call(null," ",arglists_28828);

if(cljs.core.truth_(doc_28827)){
cljs.core.println.call(null," ",doc_28827);
} else {
}


var G__28829 = seq__28773_28819;
var G__28830 = chunk__28774_28820;
var G__28831 = count__28775_28821;
var G__28832 = (i__28776_28822 + (1));
seq__28773_28819 = G__28829;
chunk__28774_28820 = G__28830;
count__28775_28821 = G__28831;
i__28776_28822 = G__28832;
continue;
} else {
var temp__5804__auto___28833 = cljs.core.seq.call(null,seq__28773_28819);
if(temp__5804__auto___28833){
var seq__28773_28834__$1 = temp__5804__auto___28833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28773_28834__$1)){
var c__5565__auto___28835 = cljs.core.chunk_first.call(null,seq__28773_28834__$1);
var G__28836 = cljs.core.chunk_rest.call(null,seq__28773_28834__$1);
var G__28837 = c__5565__auto___28835;
var G__28838 = cljs.core.count.call(null,c__5565__auto___28835);
var G__28839 = (0);
seq__28773_28819 = G__28836;
chunk__28774_28820 = G__28837;
count__28775_28821 = G__28838;
i__28776_28822 = G__28839;
continue;
} else {
var vec__28789_28840 = cljs.core.first.call(null,seq__28773_28834__$1);
var name_28841 = cljs.core.nth.call(null,vec__28789_28840,(0),null);
var map__28792_28842 = cljs.core.nth.call(null,vec__28789_28840,(1),null);
var map__28792_28843__$1 = cljs.core.__destructure_map.call(null,map__28792_28842);
var doc_28844 = cljs.core.get.call(null,map__28792_28843__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28845 = cljs.core.get.call(null,map__28792_28843__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28841);

cljs.core.println.call(null," ",arglists_28845);

if(cljs.core.truth_(doc_28844)){
cljs.core.println.call(null," ",doc_28844);
} else {
}


var G__28846 = cljs.core.next.call(null,seq__28773_28834__$1);
var G__28847 = null;
var G__28848 = (0);
var G__28849 = (0);
seq__28773_28819 = G__28846;
chunk__28774_28820 = G__28847;
count__28775_28821 = G__28848;
i__28776_28822 = G__28849;
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

var seq__28793 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28794 = null;
var count__28795 = (0);
var i__28796 = (0);
while(true){
if((i__28796 < count__28795)){
var role = cljs.core._nth.call(null,chunk__28794,i__28796);
var temp__5804__auto___28850__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___28850__$1)){
var spec_28851 = temp__5804__auto___28850__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28851));
} else {
}


var G__28852 = seq__28793;
var G__28853 = chunk__28794;
var G__28854 = count__28795;
var G__28855 = (i__28796 + (1));
seq__28793 = G__28852;
chunk__28794 = G__28853;
count__28795 = G__28854;
i__28796 = G__28855;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__28793);
if(temp__5804__auto____$1){
var seq__28793__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28793__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__28793__$1);
var G__28856 = cljs.core.chunk_rest.call(null,seq__28793__$1);
var G__28857 = c__5565__auto__;
var G__28858 = cljs.core.count.call(null,c__5565__auto__);
var G__28859 = (0);
seq__28793 = G__28856;
chunk__28794 = G__28857;
count__28795 = G__28858;
i__28796 = G__28859;
continue;
} else {
var role = cljs.core.first.call(null,seq__28793__$1);
var temp__5804__auto___28860__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___28860__$2)){
var spec_28861 = temp__5804__auto___28860__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28861));
} else {
}


var G__28862 = cljs.core.next.call(null,seq__28793__$1);
var G__28863 = null;
var G__28864 = (0);
var G__28865 = (0);
seq__28793 = G__28862;
chunk__28794 = G__28863;
count__28795 = G__28864;
i__28796 = G__28865;
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
var G__28866 = cljs.core.conj.call(null,via,t);
var G__28867 = cljs.core.ex_cause.call(null,t);
via = G__28866;
t = G__28867;
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
var map__28870 = datafied_throwable;
var map__28870__$1 = cljs.core.__destructure_map.call(null,map__28870);
var via = cljs.core.get.call(null,map__28870__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28870__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28870__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28871 = cljs.core.last.call(null,via);
var map__28871__$1 = cljs.core.__destructure_map.call(null,map__28871);
var type = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28871__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28872 = data;
var map__28872__$1 = cljs.core.__destructure_map.call(null,map__28872);
var problems = cljs.core.get.call(null,map__28872__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28872__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28872__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28873 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28873__$1 = cljs.core.__destructure_map.call(null,map__28873);
var top_data = map__28873__$1;
var source = cljs.core.get.call(null,map__28873__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28874 = phase;
var G__28874__$1 = (((G__28874 instanceof cljs.core.Keyword))?G__28874.fqn:null);
switch (G__28874__$1) {
case "read-source":
var map__28875 = data;
var map__28875__$1 = cljs.core.__destructure_map.call(null,map__28875);
var line = cljs.core.get.call(null,map__28875__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28875__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28876 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28876__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28876,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28876);
var G__28876__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28876__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28876__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28876__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28876__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28877 = top_data;
var G__28877__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28877,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28877);
var G__28877__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28877__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28877__$1);
var G__28877__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28877__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28877__$2);
var G__28877__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28877__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28877__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28877__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28877__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28878 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28878,(0),null);
var method = cljs.core.nth.call(null,vec__28878,(1),null);
var file = cljs.core.nth.call(null,vec__28878,(2),null);
var line = cljs.core.nth.call(null,vec__28878,(3),null);
var G__28881 = top_data;
var G__28881__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28881,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28881);
var G__28881__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28881__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28881__$1);
var G__28881__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.call(null,G__28881__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28881__$2);
var G__28881__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28881__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28881__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28881__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28881__$4;
}

break;
case "execution":
var vec__28882 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28882,(0),null);
var method = cljs.core.nth.call(null,vec__28882,(1),null);
var file = cljs.core.nth.call(null,vec__28882,(2),null);
var line = cljs.core.nth.call(null,vec__28882,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__28869_SHARP_){
var or__5043__auto__ = (p1__28869_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28869_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__28885 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28885__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28885,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28885);
var G__28885__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28885__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28885__$1);
var G__28885__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__28885__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28885__$2);
var G__28885__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28885__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28885__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28885__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28885__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28874__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28889){
var map__28890 = p__28889;
var map__28890__$1 = cljs.core.__destructure_map.call(null,map__28890);
var triage_data = map__28890__$1;
var phase = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__28891 = phase;
var G__28891__$1 = (((G__28891 instanceof cljs.core.Keyword))?G__28891.fqn:null);
switch (G__28891__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28892_28901 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28893_28902 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28894_28903 = true;
var _STAR_print_fn_STAR__temp_val__28895_28904 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28894_28903);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28895_28904);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28887_SHARP_){
return cljs.core.dissoc.call(null,p1__28887_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28893_28902);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28892_28901);
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
var _STAR_print_newline_STAR__orig_val__28896_28905 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28897_28906 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28898_28907 = true;
var _STAR_print_fn_STAR__temp_val__28899_28908 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28898_28907);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28899_28908);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28888_SHARP_){
return cljs.core.dissoc.call(null,p1__28888_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28897_28906);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28896_28905);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28891__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map

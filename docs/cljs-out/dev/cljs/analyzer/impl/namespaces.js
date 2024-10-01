// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.analyzer.impl.namespaces');
goog.require('cljs.core');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__21659 = libspec;
var seq__21660 = cljs.core.seq.call(null,vec__21659);
var first__21661 = cljs.core.first.call(null,seq__21660);
var seq__21660__$1 = cljs.core.next.call(null,seq__21660);
var lib = first__21661;
var spec = seq__21660__$1;
var libspec__$1 = vec__21659;
var vec__21662 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.call(null,vec__21662,(0),null);
var vec__21665 = cljs.core.nth.call(null,vec__21662,(1),null);
var seq__21666 = cljs.core.seq.call(null,vec__21665);
var first__21667 = cljs.core.first.call(null,seq__21666);
var seq__21666__$1 = cljs.core.next.call(null,seq__21666);
var _ = first__21667;
var first__21667__$1 = cljs.core.first.call(null,seq__21666__$1);
var seq__21666__$2 = cljs.core.next.call(null,seq__21666__$1);
var alias = first__21667__$1;
var post_spec = seq__21666__$2;
var post = vec__21665;
if(cljs.core.seq.call(null,post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.call(null,pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__21668 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count.call(null,libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.call(null,G__21668,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__21668;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__21669 = cljs.core.seq.call(null,new_as_aliases);
var chunk__21670 = null;
var count__21671 = (0);
var i__21672 = (0);
while(true){
if((i__21672 < count__21671)){
var vec__21679 = cljs.core._nth.call(null,chunk__21670,i__21672);
var alias = cljs.core.nth.call(null,vec__21679,(0),null);
var _ = cljs.core.nth.call(null,vec__21679,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__21685 = seq__21669;
var G__21686 = chunk__21670;
var G__21687 = count__21671;
var G__21688 = (i__21672 + (1));
seq__21669 = G__21685;
chunk__21670 = G__21686;
count__21671 = G__21687;
i__21672 = G__21688;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__21669);
if(temp__5804__auto__){
var seq__21669__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21669__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__21669__$1);
var G__21689 = cljs.core.chunk_rest.call(null,seq__21669__$1);
var G__21690 = c__5565__auto__;
var G__21691 = cljs.core.count.call(null,c__5565__auto__);
var G__21692 = (0);
seq__21669 = G__21689;
chunk__21670 = G__21690;
count__21671 = G__21691;
i__21672 = G__21692;
continue;
} else {
var vec__21682 = cljs.core.first.call(null,seq__21669__$1);
var alias = cljs.core.nth.call(null,vec__21682,(0),null);
var _ = cljs.core.nth.call(null,vec__21682,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__21693 = cljs.core.next.call(null,seq__21669__$1);
var G__21694 = null;
var G__21695 = (0);
var G__21696 = (0);
seq__21669 = G__21693;
chunk__21670 = G__21694;
count__21671 = G__21695;
i__21672 = G__21696;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__21698 = arguments.length;
switch (G__21698) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (ret__$1,libspec){
var map__21699 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias.call(null,libspec);
var map__21699__$1 = cljs.core.__destructure_map.call(null,map__21699);
var as_alias = cljs.core.get.call(null,map__21699__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.call(null,map__21699__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates.call(null,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__21700 = ret__$1;
var G__21700__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.call(null,G__21700,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__21700);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.call(null,G__21700__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__21700__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (p__21702,p__21703){
var map__21704 = p__21702;
var map__21704__$1 = cljs.core.__destructure_map.call(null,map__21704);
var ret__$1 = map__21704__$1;
var as_aliases = cljs.core.get.call(null,map__21704__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__21705 = p__21703;
var seq__21706 = cljs.core.seq.call(null,vec__21705);
var first__21707 = cljs.core.first.call(null,seq__21706);
var seq__21706__$1 = cljs.core.next.call(null,seq__21706);
var spec_key = first__21707;
var libspecs = seq__21706__$1;
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__21708 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,as_aliases);
var map__21708__$1 = cljs.core.__destructure_map.call(null,map__21708);
var as_aliases__$1 = cljs.core.get.call(null,map__21708__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.call(null,map__21708__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__21709 = ret__$1;
var G__21709__$1 = (((!(cljs.core.empty_QMARK_.call(null,as_aliases__$1))))?cljs.core.update.call(null,G__21709,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__21709);
if((!(cljs.core.empty_QMARK_.call(null,libspecs__$1)))){
return cljs.core.update.call(null,G__21709__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs__$1));
} else {
return G__21709__$1;
}
} else {
return cljs.core.update.call(null,ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=namespaces.js.map

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
var vec__24345 = libspec;
var seq__24346 = cljs.core.seq.call(null,vec__24345);
var first__24347 = cljs.core.first.call(null,seq__24346);
var seq__24346__$1 = cljs.core.next.call(null,seq__24346);
var lib = first__24347;
var spec = seq__24346__$1;
var libspec__$1 = vec__24345;
var vec__24348 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.call(null,vec__24348,(0),null);
var vec__24351 = cljs.core.nth.call(null,vec__24348,(1),null);
var seq__24352 = cljs.core.seq.call(null,vec__24351);
var first__24353 = cljs.core.first.call(null,seq__24352);
var seq__24352__$1 = cljs.core.next.call(null,seq__24352);
var _ = first__24353;
var first__24353__$1 = cljs.core.first.call(null,seq__24352__$1);
var seq__24352__$2 = cljs.core.next.call(null,seq__24352__$1);
var alias = first__24353__$1;
var post_spec = seq__24352__$2;
var post = vec__24351;
if(cljs.core.seq.call(null,post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.call(null,pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__24354 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count.call(null,libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.call(null,G__24354,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__24354;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__24355 = cljs.core.seq.call(null,new_as_aliases);
var chunk__24356 = null;
var count__24357 = (0);
var i__24358 = (0);
while(true){
if((i__24358 < count__24357)){
var vec__24365 = cljs.core._nth.call(null,chunk__24356,i__24358);
var alias = cljs.core.nth.call(null,vec__24365,(0),null);
var _ = cljs.core.nth.call(null,vec__24365,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__24371 = seq__24355;
var G__24372 = chunk__24356;
var G__24373 = count__24357;
var G__24374 = (i__24358 + (1));
seq__24355 = G__24371;
chunk__24356 = G__24372;
count__24357 = G__24373;
i__24358 = G__24374;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__24355);
if(temp__5804__auto__){
var seq__24355__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24355__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__24355__$1);
var G__24375 = cljs.core.chunk_rest.call(null,seq__24355__$1);
var G__24376 = c__5565__auto__;
var G__24377 = cljs.core.count.call(null,c__5565__auto__);
var G__24378 = (0);
seq__24355 = G__24375;
chunk__24356 = G__24376;
count__24357 = G__24377;
i__24358 = G__24378;
continue;
} else {
var vec__24368 = cljs.core.first.call(null,seq__24355__$1);
var alias = cljs.core.nth.call(null,vec__24368,(0),null);
var _ = cljs.core.nth.call(null,vec__24368,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__24379 = cljs.core.next.call(null,seq__24355__$1);
var G__24380 = null;
var G__24381 = (0);
var G__24382 = (0);
seq__24355 = G__24379;
chunk__24356 = G__24380;
count__24357 = G__24381;
i__24358 = G__24382;
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
var G__24384 = arguments.length;
switch (G__24384) {
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
var map__24385 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias.call(null,libspec);
var map__24385__$1 = cljs.core.__destructure_map.call(null,map__24385);
var as_alias = cljs.core.get.call(null,map__24385__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.call(null,map__24385__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates.call(null,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__24386 = ret__$1;
var G__24386__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.call(null,G__24386,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__24386);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.call(null,G__24386__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__24386__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (p__24388,p__24389){
var map__24390 = p__24388;
var map__24390__$1 = cljs.core.__destructure_map.call(null,map__24390);
var ret__$1 = map__24390__$1;
var as_aliases = cljs.core.get.call(null,map__24390__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__24391 = p__24389;
var seq__24392 = cljs.core.seq.call(null,vec__24391);
var first__24393 = cljs.core.first.call(null,seq__24392);
var seq__24392__$1 = cljs.core.next.call(null,seq__24392);
var spec_key = first__24393;
var libspecs = seq__24392__$1;
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__24394 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,as_aliases);
var map__24394__$1 = cljs.core.__destructure_map.call(null,map__24394);
var as_aliases__$1 = cljs.core.get.call(null,map__24394__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.call(null,map__24394__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__24395 = ret__$1;
var G__24395__$1 = (((!(cljs.core.empty_QMARK_.call(null,as_aliases__$1))))?cljs.core.update.call(null,G__24395,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__24395);
if((!(cljs.core.empty_QMARK_.call(null,libspecs__$1)))){
return cljs.core.update.call(null,G__24395__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs__$1));
} else {
return G__24395__$1;
}
} else {
return cljs.core.update.call(null,ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=namespaces.js.map

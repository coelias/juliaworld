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
var vec__10230 = libspec;
var seq__10231 = cljs.core.seq.call(null,vec__10230);
var first__10232 = cljs.core.first.call(null,seq__10231);
var seq__10231__$1 = cljs.core.next.call(null,seq__10231);
var lib = first__10232;
var spec = seq__10231__$1;
var libspec__$1 = vec__10230;
var vec__10233 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.call(null,vec__10233,(0),null);
var vec__10236 = cljs.core.nth.call(null,vec__10233,(1),null);
var seq__10237 = cljs.core.seq.call(null,vec__10236);
var first__10238 = cljs.core.first.call(null,seq__10237);
var seq__10237__$1 = cljs.core.next.call(null,seq__10237);
var _ = first__10238;
var first__10238__$1 = cljs.core.first.call(null,seq__10237__$1);
var seq__10237__$2 = cljs.core.next.call(null,seq__10237__$1);
var alias = first__10238__$1;
var post_spec = seq__10237__$2;
var post = vec__10236;
if(cljs.core.seq.call(null,post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.call(null,pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__10239 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count.call(null,libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.call(null,G__10239,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__10239;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__10240 = cljs.core.seq.call(null,new_as_aliases);
var chunk__10241 = null;
var count__10242 = (0);
var i__10243 = (0);
while(true){
if((i__10243 < count__10242)){
var vec__10250 = cljs.core._nth.call(null,chunk__10241,i__10243);
var alias = cljs.core.nth.call(null,vec__10250,(0),null);
var _ = cljs.core.nth.call(null,vec__10250,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__10256 = seq__10240;
var G__10257 = chunk__10241;
var G__10258 = count__10242;
var G__10259 = (i__10243 + (1));
seq__10240 = G__10256;
chunk__10241 = G__10257;
count__10242 = G__10258;
i__10243 = G__10259;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10240);
if(temp__5804__auto__){
var seq__10240__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10240__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__10240__$1);
var G__10260 = cljs.core.chunk_rest.call(null,seq__10240__$1);
var G__10261 = c__5565__auto__;
var G__10262 = cljs.core.count.call(null,c__5565__auto__);
var G__10263 = (0);
seq__10240 = G__10260;
chunk__10241 = G__10261;
count__10242 = G__10262;
i__10243 = G__10263;
continue;
} else {
var vec__10253 = cljs.core.first.call(null,seq__10240__$1);
var alias = cljs.core.nth.call(null,vec__10253,(0),null);
var _ = cljs.core.nth.call(null,vec__10253,(1),null);
if((!(cljs.core.contains_QMARK_.call(null,as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__10264 = cljs.core.next.call(null,seq__10240__$1);
var G__10265 = null;
var G__10266 = (0);
var G__10267 = (0);
seq__10240 = G__10264;
chunk__10241 = G__10265;
count__10242 = G__10266;
i__10243 = G__10267;
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
var G__10269 = arguments.length;
switch (G__10269) {
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
var map__10270 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias.call(null,libspec);
var map__10270__$1 = cljs.core.__destructure_map.call(null,map__10270);
var as_alias = cljs.core.get.call(null,map__10270__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.call(null,map__10270__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates.call(null,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__10271 = ret__$1;
var G__10271__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.call(null,G__10271,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__10271);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.call(null,G__10271__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__10271__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.call(null,(function (p__10273,p__10274){
var map__10275 = p__10273;
var map__10275__$1 = cljs.core.__destructure_map.call(null,map__10275);
var ret__$1 = map__10275__$1;
var as_aliases = cljs.core.get.call(null,map__10275__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__10276 = p__10274;
var seq__10277 = cljs.core.seq.call(null,vec__10276);
var first__10278 = cljs.core.first.call(null,seq__10277);
var seq__10277__$1 = cljs.core.next.call(null,seq__10277);
var spec_key = first__10278;
var libspecs = seq__10277__$1;
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__10279 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.call(null,libspecs,as_aliases);
var map__10279__$1 = cljs.core.__destructure_map.call(null,map__10279);
var as_aliases__$1 = cljs.core.get.call(null,map__10279__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.call(null,map__10279__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__10280 = ret__$1;
var G__10280__$1 = (((!(cljs.core.empty_QMARK_.call(null,as_aliases__$1))))?cljs.core.update.call(null,G__10280,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__10280);
if((!(cljs.core.empty_QMARK_.call(null,libspecs__$1)))){
return cljs.core.update.call(null,G__10280__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs__$1));
} else {
return G__10280__$1;
}
} else {
return cljs.core.update.call(null,ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.call(null,spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=namespaces.js.map

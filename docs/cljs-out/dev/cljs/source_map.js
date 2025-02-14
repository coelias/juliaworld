// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
goog.require('goog.object');
goog.scope(function(){
cljs.source_map.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__11562){
var vec__11563 = p__11562;
var i = cljs.core.nth.call(null,vec__11563,(0),null);
var v = cljs.core.nth.call(null,vec__11563,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__11566 = seg;
var gcol = cljs.core.nth.call(null,vec__11566,(0),null);
var source = cljs.core.nth.call(null,vec__11566,(1),null);
var line = cljs.core.nth.call(null,vec__11566,(2),null);
var col = cljs.core.nth.call(null,vec__11566,(3),null);
var name = cljs.core.nth.call(null,vec__11566,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5804__auto__)){
var name__$1 = temp__5804__auto__;
return (cljs.source_map.goog$module$goog$object.get.call(null,source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__11569 = seg;
var gcol = cljs.core.nth.call(null,vec__11569,(0),null);
var source = cljs.core.nth.call(null,vec__11569,(1),null);
var line = cljs.core.nth.call(null,vec__11569,(2),null);
var col = cljs.core.nth.call(null,vec__11569,(3),null);
var name = cljs.core.nth.call(null,vec__11569,(4),null);
var vec__11572 = relseg;
var rgcol = cljs.core.nth.call(null,vec__11572,(0),null);
var rsource = cljs.core.nth.call(null,vec__11572,(1),null);
var rline = cljs.core.nth.call(null,vec__11572,(2),null);
var rcol = cljs.core.nth.call(null,vec__11572,(3),null);
var rname = cljs.core.nth.call(null,vec__11572,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__5043__auto__ = col;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__5043__auto__ = name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__11575 = segmap;
var map__11575__$1 = cljs.core.__destructure_map.call(null,map__11575);
var gcol = cljs.core.get.call(null,map__11575__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__11575__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__11575__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__11575__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__11575__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,(function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,(function (v){
return cljs.core.conj.call(null,v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__11577 = arguments.length;
switch (G__11577) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,cljs.source_map.goog$module$goog$object.get.call(null,source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__11581 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__11585 = cljs.core.next.call(null,segs__$1);
var G__11586 = nrelseg;
var G__11587 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__11585;
relseg__$1 = G__11586;
result__$1 = G__11587;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__11581,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__11581,(1),null);
var G__11588 = (gline + (1));
var G__11589 = cljs.core.next.call(null,lines__$1);
var G__11590 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__11591 = result__$1;
gline = G__11588;
lines__$1 = G__11589;
relseg = G__11590;
result = G__11591;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__11593 = segmap;
var map__11593__$1 = cljs.core.__destructure_map.call(null,map__11593);
var gcol = cljs.core.get.call(null,map__11593__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__11593__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__11593__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__11593__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__11593__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__11592_SHARP_){
return cljs.core.conj.call(null,p1__11592_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__11595 = arguments.length;
switch (G__11595) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,cljs.source_map.goog$module$goog$object.get.call(null,source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get.call(null,source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__11599 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__11603 = cljs.core.next.call(null,segs__$1);
var G__11604 = nrelseg;
var G__11605 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__11603;
relseg__$1 = G__11604;
result__$1 = G__11605;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__11599,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__11599,(1),null);
var G__11606 = (gline + (1));
var G__11607 = cljs.core.next.call(null,lines__$1);
var G__11608 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__11609 = result__$1;
gline = G__11606;
lines__$1 = G__11607;
relseg = G__11608;
result = G__11609;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,(function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,(function (p__11610){
var vec__11611 = p__11610;
var _ = cljs.core.nth.call(null,vec__11611,(0),null);
var source = cljs.core.nth.call(null,vec__11611,(1),null);
var line = cljs.core.nth.call(null,vec__11611,(2),null);
var col = cljs.core.nth.call(null,vec__11611,(3),null);
var name = cljs.core.nth.call(null,vec__11611,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__11614){
var vec__11615 = p__11614;
var gcol = cljs.core.nth.call(null,vec__11615,(0),null);
var sidx = cljs.core.nth.call(null,vec__11615,(1),null);
var line = cljs.core.nth.call(null,vec__11615,(2),null);
var col = cljs.core.nth.call(null,vec__11615,(3),null);
var name = cljs.core.nth.call(null,vec__11615,(4),null);
var seg = vec__11615;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__11618){
var vec__11619 = p__11618;
var _ = cljs.core.nth.call(null,vec__11619,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__11619,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__11619,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__11619,(3),null);
var lname = cljs.core.nth.call(null,vec__11619,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__5043__auto__ = name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5802__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5802__auto__)){
var name = temp__5802__auto__;
var idx = (function (){var temp__5802__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5802__auto____$1)){
var idx = temp__5802__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__11625 = cljs.core.seq.call(null,infos);
var chunk__11626 = null;
var count__11627 = (0);
var i__11628 = (0);
while(true){
if((i__11628 < count__11627)){
var info = cljs.core._nth.call(null,chunk__11626,i__11628);
var segv_11979 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_11980 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_11981 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_11980 > (lc_11981 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__11625,chunk__11626,count__11627,i__11628,segv_11979,gline_11980,lc_11981,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_11980 - (lc_11981 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11979], null));
});})(seq__11625,chunk__11626,count__11627,i__11628,segv_11979,gline_11980,lc_11981,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__11625,chunk__11626,count__11627,i__11628,segv_11979,gline_11980,lc_11981,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11980], null),cljs.core.conj,segv_11979);
});})(seq__11625,chunk__11626,count__11627,i__11628,segv_11979,gline_11980,lc_11981,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__11982 = seq__11625;
var G__11983 = chunk__11626;
var G__11984 = count__11627;
var G__11985 = (i__11628 + (1));
seq__11625 = G__11982;
chunk__11626 = G__11983;
count__11627 = G__11984;
i__11628 = G__11985;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11625);
if(temp__5804__auto__){
var seq__11625__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11625__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__11625__$1);
var G__11986 = cljs.core.chunk_rest.call(null,seq__11625__$1);
var G__11987 = c__5565__auto__;
var G__11988 = cljs.core.count.call(null,c__5565__auto__);
var G__11989 = (0);
seq__11625 = G__11986;
chunk__11626 = G__11987;
count__11627 = G__11988;
i__11628 = G__11989;
continue;
} else {
var info = cljs.core.first.call(null,seq__11625__$1);
var segv_11990 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_11991 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_11992 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_11991 > (lc_11992 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__11625,chunk__11626,count__11627,i__11628,segv_11990,gline_11991,lc_11992,info,seq__11625__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_11991 - (lc_11992 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11990], null));
});})(seq__11625,chunk__11626,count__11627,i__11628,segv_11990,gline_11991,lc_11992,info,seq__11625__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__11625,chunk__11626,count__11627,i__11628,segv_11990,gline_11991,lc_11992,info,seq__11625__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11991], null),cljs.core.conj,segv_11990);
});})(seq__11625,chunk__11626,count__11627,i__11628,segv_11990,gline_11991,lc_11992,info,seq__11625__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__11993 = cljs.core.next.call(null,seq__11625__$1);
var G__11994 = null;
var G__11995 = (0);
var G__11996 = (0);
seq__11625 = G__11993;
chunk__11626 = G__11994;
count__11627 = G__11995;
i__11628 = G__11996;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__11629_11997 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__11630_11998 = null;
var count__11631_11999 = (0);
var i__11632_12000 = (0);
while(true){
if((i__11632_12000 < count__11631_11999)){
var vec__11805_12001 = cljs.core._nth.call(null,chunk__11630_11998,i__11632_12000);
var source_idx_12002 = cljs.core.nth.call(null,vec__11805_12001,(0),null);
var vec__11808_12003 = cljs.core.nth.call(null,vec__11805_12001,(1),null);
var __12004 = cljs.core.nth.call(null,vec__11808_12003,(0),null);
var lines_12005__$1 = cljs.core.nth.call(null,vec__11808_12003,(1),null);
var seq__11811_12006 = cljs.core.seq.call(null,lines_12005__$1);
var chunk__11812_12007 = null;
var count__11813_12008 = (0);
var i__11814_12009 = (0);
while(true){
if((i__11814_12009 < count__11813_12008)){
var vec__11853_12010 = cljs.core._nth.call(null,chunk__11812_12007,i__11814_12009);
var line_12011 = cljs.core.nth.call(null,vec__11853_12010,(0),null);
var cols_12012 = cljs.core.nth.call(null,vec__11853_12010,(1),null);
var seq__11856_12013 = cljs.core.seq.call(null,cols_12012);
var chunk__11857_12014 = null;
var count__11858_12015 = (0);
var i__11859_12016 = (0);
while(true){
if((i__11859_12016 < count__11858_12015)){
var vec__11866_12017 = cljs.core._nth.call(null,chunk__11857_12014,i__11859_12016);
var col_12018 = cljs.core.nth.call(null,vec__11866_12017,(0),null);
var infos_12019 = cljs.core.nth.call(null,vec__11866_12017,(1),null);
encode_cols.call(null,infos_12019,source_idx_12002,line_12011,col_12018);


var G__12020 = seq__11856_12013;
var G__12021 = chunk__11857_12014;
var G__12022 = count__11858_12015;
var G__12023 = (i__11859_12016 + (1));
seq__11856_12013 = G__12020;
chunk__11857_12014 = G__12021;
count__11858_12015 = G__12022;
i__11859_12016 = G__12023;
continue;
} else {
var temp__5804__auto___12024 = cljs.core.seq.call(null,seq__11856_12013);
if(temp__5804__auto___12024){
var seq__11856_12025__$1 = temp__5804__auto___12024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11856_12025__$1)){
var c__5565__auto___12026 = cljs.core.chunk_first.call(null,seq__11856_12025__$1);
var G__12027 = cljs.core.chunk_rest.call(null,seq__11856_12025__$1);
var G__12028 = c__5565__auto___12026;
var G__12029 = cljs.core.count.call(null,c__5565__auto___12026);
var G__12030 = (0);
seq__11856_12013 = G__12027;
chunk__11857_12014 = G__12028;
count__11858_12015 = G__12029;
i__11859_12016 = G__12030;
continue;
} else {
var vec__11869_12031 = cljs.core.first.call(null,seq__11856_12025__$1);
var col_12032 = cljs.core.nth.call(null,vec__11869_12031,(0),null);
var infos_12033 = cljs.core.nth.call(null,vec__11869_12031,(1),null);
encode_cols.call(null,infos_12033,source_idx_12002,line_12011,col_12032);


var G__12034 = cljs.core.next.call(null,seq__11856_12025__$1);
var G__12035 = null;
var G__12036 = (0);
var G__12037 = (0);
seq__11856_12013 = G__12034;
chunk__11857_12014 = G__12035;
count__11858_12015 = G__12036;
i__11859_12016 = G__12037;
continue;
}
} else {
}
}
break;
}


var G__12038 = seq__11811_12006;
var G__12039 = chunk__11812_12007;
var G__12040 = count__11813_12008;
var G__12041 = (i__11814_12009 + (1));
seq__11811_12006 = G__12038;
chunk__11812_12007 = G__12039;
count__11813_12008 = G__12040;
i__11814_12009 = G__12041;
continue;
} else {
var temp__5804__auto___12042 = cljs.core.seq.call(null,seq__11811_12006);
if(temp__5804__auto___12042){
var seq__11811_12043__$1 = temp__5804__auto___12042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11811_12043__$1)){
var c__5565__auto___12044 = cljs.core.chunk_first.call(null,seq__11811_12043__$1);
var G__12045 = cljs.core.chunk_rest.call(null,seq__11811_12043__$1);
var G__12046 = c__5565__auto___12044;
var G__12047 = cljs.core.count.call(null,c__5565__auto___12044);
var G__12048 = (0);
seq__11811_12006 = G__12045;
chunk__11812_12007 = G__12046;
count__11813_12008 = G__12047;
i__11814_12009 = G__12048;
continue;
} else {
var vec__11872_12049 = cljs.core.first.call(null,seq__11811_12043__$1);
var line_12050 = cljs.core.nth.call(null,vec__11872_12049,(0),null);
var cols_12051 = cljs.core.nth.call(null,vec__11872_12049,(1),null);
var seq__11875_12052 = cljs.core.seq.call(null,cols_12051);
var chunk__11876_12053 = null;
var count__11877_12054 = (0);
var i__11878_12055 = (0);
while(true){
if((i__11878_12055 < count__11877_12054)){
var vec__11885_12056 = cljs.core._nth.call(null,chunk__11876_12053,i__11878_12055);
var col_12057 = cljs.core.nth.call(null,vec__11885_12056,(0),null);
var infos_12058 = cljs.core.nth.call(null,vec__11885_12056,(1),null);
encode_cols.call(null,infos_12058,source_idx_12002,line_12050,col_12057);


var G__12059 = seq__11875_12052;
var G__12060 = chunk__11876_12053;
var G__12061 = count__11877_12054;
var G__12062 = (i__11878_12055 + (1));
seq__11875_12052 = G__12059;
chunk__11876_12053 = G__12060;
count__11877_12054 = G__12061;
i__11878_12055 = G__12062;
continue;
} else {
var temp__5804__auto___12063__$1 = cljs.core.seq.call(null,seq__11875_12052);
if(temp__5804__auto___12063__$1){
var seq__11875_12064__$1 = temp__5804__auto___12063__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11875_12064__$1)){
var c__5565__auto___12065 = cljs.core.chunk_first.call(null,seq__11875_12064__$1);
var G__12066 = cljs.core.chunk_rest.call(null,seq__11875_12064__$1);
var G__12067 = c__5565__auto___12065;
var G__12068 = cljs.core.count.call(null,c__5565__auto___12065);
var G__12069 = (0);
seq__11875_12052 = G__12066;
chunk__11876_12053 = G__12067;
count__11877_12054 = G__12068;
i__11878_12055 = G__12069;
continue;
} else {
var vec__11888_12070 = cljs.core.first.call(null,seq__11875_12064__$1);
var col_12071 = cljs.core.nth.call(null,vec__11888_12070,(0),null);
var infos_12072 = cljs.core.nth.call(null,vec__11888_12070,(1),null);
encode_cols.call(null,infos_12072,source_idx_12002,line_12050,col_12071);


var G__12073 = cljs.core.next.call(null,seq__11875_12064__$1);
var G__12074 = null;
var G__12075 = (0);
var G__12076 = (0);
seq__11875_12052 = G__12073;
chunk__11876_12053 = G__12074;
count__11877_12054 = G__12075;
i__11878_12055 = G__12076;
continue;
}
} else {
}
}
break;
}


var G__12077 = cljs.core.next.call(null,seq__11811_12043__$1);
var G__12078 = null;
var G__12079 = (0);
var G__12080 = (0);
seq__11811_12006 = G__12077;
chunk__11812_12007 = G__12078;
count__11813_12008 = G__12079;
i__11814_12009 = G__12080;
continue;
}
} else {
}
}
break;
}


var G__12081 = seq__11629_11997;
var G__12082 = chunk__11630_11998;
var G__12083 = count__11631_11999;
var G__12084 = (i__11632_12000 + (1));
seq__11629_11997 = G__12081;
chunk__11630_11998 = G__12082;
count__11631_11999 = G__12083;
i__11632_12000 = G__12084;
continue;
} else {
var temp__5804__auto___12085 = cljs.core.seq.call(null,seq__11629_11997);
if(temp__5804__auto___12085){
var seq__11629_12086__$1 = temp__5804__auto___12085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11629_12086__$1)){
var c__5565__auto___12087 = cljs.core.chunk_first.call(null,seq__11629_12086__$1);
var G__12088 = cljs.core.chunk_rest.call(null,seq__11629_12086__$1);
var G__12089 = c__5565__auto___12087;
var G__12090 = cljs.core.count.call(null,c__5565__auto___12087);
var G__12091 = (0);
seq__11629_11997 = G__12088;
chunk__11630_11998 = G__12089;
count__11631_11999 = G__12090;
i__11632_12000 = G__12091;
continue;
} else {
var vec__11891_12092 = cljs.core.first.call(null,seq__11629_12086__$1);
var source_idx_12093 = cljs.core.nth.call(null,vec__11891_12092,(0),null);
var vec__11894_12094 = cljs.core.nth.call(null,vec__11891_12092,(1),null);
var __12095 = cljs.core.nth.call(null,vec__11894_12094,(0),null);
var lines_12096__$1 = cljs.core.nth.call(null,vec__11894_12094,(1),null);
var seq__11897_12097 = cljs.core.seq.call(null,lines_12096__$1);
var chunk__11898_12098 = null;
var count__11899_12099 = (0);
var i__11900_12100 = (0);
while(true){
if((i__11900_12100 < count__11899_12099)){
var vec__11939_12101 = cljs.core._nth.call(null,chunk__11898_12098,i__11900_12100);
var line_12102 = cljs.core.nth.call(null,vec__11939_12101,(0),null);
var cols_12103 = cljs.core.nth.call(null,vec__11939_12101,(1),null);
var seq__11942_12104 = cljs.core.seq.call(null,cols_12103);
var chunk__11943_12105 = null;
var count__11944_12106 = (0);
var i__11945_12107 = (0);
while(true){
if((i__11945_12107 < count__11944_12106)){
var vec__11952_12108 = cljs.core._nth.call(null,chunk__11943_12105,i__11945_12107);
var col_12109 = cljs.core.nth.call(null,vec__11952_12108,(0),null);
var infos_12110 = cljs.core.nth.call(null,vec__11952_12108,(1),null);
encode_cols.call(null,infos_12110,source_idx_12093,line_12102,col_12109);


var G__12111 = seq__11942_12104;
var G__12112 = chunk__11943_12105;
var G__12113 = count__11944_12106;
var G__12114 = (i__11945_12107 + (1));
seq__11942_12104 = G__12111;
chunk__11943_12105 = G__12112;
count__11944_12106 = G__12113;
i__11945_12107 = G__12114;
continue;
} else {
var temp__5804__auto___12115__$1 = cljs.core.seq.call(null,seq__11942_12104);
if(temp__5804__auto___12115__$1){
var seq__11942_12116__$1 = temp__5804__auto___12115__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11942_12116__$1)){
var c__5565__auto___12117 = cljs.core.chunk_first.call(null,seq__11942_12116__$1);
var G__12118 = cljs.core.chunk_rest.call(null,seq__11942_12116__$1);
var G__12119 = c__5565__auto___12117;
var G__12120 = cljs.core.count.call(null,c__5565__auto___12117);
var G__12121 = (0);
seq__11942_12104 = G__12118;
chunk__11943_12105 = G__12119;
count__11944_12106 = G__12120;
i__11945_12107 = G__12121;
continue;
} else {
var vec__11955_12122 = cljs.core.first.call(null,seq__11942_12116__$1);
var col_12123 = cljs.core.nth.call(null,vec__11955_12122,(0),null);
var infos_12124 = cljs.core.nth.call(null,vec__11955_12122,(1),null);
encode_cols.call(null,infos_12124,source_idx_12093,line_12102,col_12123);


var G__12125 = cljs.core.next.call(null,seq__11942_12116__$1);
var G__12126 = null;
var G__12127 = (0);
var G__12128 = (0);
seq__11942_12104 = G__12125;
chunk__11943_12105 = G__12126;
count__11944_12106 = G__12127;
i__11945_12107 = G__12128;
continue;
}
} else {
}
}
break;
}


var G__12129 = seq__11897_12097;
var G__12130 = chunk__11898_12098;
var G__12131 = count__11899_12099;
var G__12132 = (i__11900_12100 + (1));
seq__11897_12097 = G__12129;
chunk__11898_12098 = G__12130;
count__11899_12099 = G__12131;
i__11900_12100 = G__12132;
continue;
} else {
var temp__5804__auto___12133__$1 = cljs.core.seq.call(null,seq__11897_12097);
if(temp__5804__auto___12133__$1){
var seq__11897_12134__$1 = temp__5804__auto___12133__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11897_12134__$1)){
var c__5565__auto___12135 = cljs.core.chunk_first.call(null,seq__11897_12134__$1);
var G__12136 = cljs.core.chunk_rest.call(null,seq__11897_12134__$1);
var G__12137 = c__5565__auto___12135;
var G__12138 = cljs.core.count.call(null,c__5565__auto___12135);
var G__12139 = (0);
seq__11897_12097 = G__12136;
chunk__11898_12098 = G__12137;
count__11899_12099 = G__12138;
i__11900_12100 = G__12139;
continue;
} else {
var vec__11958_12140 = cljs.core.first.call(null,seq__11897_12134__$1);
var line_12141 = cljs.core.nth.call(null,vec__11958_12140,(0),null);
var cols_12142 = cljs.core.nth.call(null,vec__11958_12140,(1),null);
var seq__11961_12143 = cljs.core.seq.call(null,cols_12142);
var chunk__11962_12144 = null;
var count__11963_12145 = (0);
var i__11964_12146 = (0);
while(true){
if((i__11964_12146 < count__11963_12145)){
var vec__11971_12147 = cljs.core._nth.call(null,chunk__11962_12144,i__11964_12146);
var col_12148 = cljs.core.nth.call(null,vec__11971_12147,(0),null);
var infos_12149 = cljs.core.nth.call(null,vec__11971_12147,(1),null);
encode_cols.call(null,infos_12149,source_idx_12093,line_12141,col_12148);


var G__12150 = seq__11961_12143;
var G__12151 = chunk__11962_12144;
var G__12152 = count__11963_12145;
var G__12153 = (i__11964_12146 + (1));
seq__11961_12143 = G__12150;
chunk__11962_12144 = G__12151;
count__11963_12145 = G__12152;
i__11964_12146 = G__12153;
continue;
} else {
var temp__5804__auto___12154__$2 = cljs.core.seq.call(null,seq__11961_12143);
if(temp__5804__auto___12154__$2){
var seq__11961_12155__$1 = temp__5804__auto___12154__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11961_12155__$1)){
var c__5565__auto___12156 = cljs.core.chunk_first.call(null,seq__11961_12155__$1);
var G__12157 = cljs.core.chunk_rest.call(null,seq__11961_12155__$1);
var G__12158 = c__5565__auto___12156;
var G__12159 = cljs.core.count.call(null,c__5565__auto___12156);
var G__12160 = (0);
seq__11961_12143 = G__12157;
chunk__11962_12144 = G__12158;
count__11963_12145 = G__12159;
i__11964_12146 = G__12160;
continue;
} else {
var vec__11974_12161 = cljs.core.first.call(null,seq__11961_12155__$1);
var col_12162 = cljs.core.nth.call(null,vec__11974_12161,(0),null);
var infos_12163 = cljs.core.nth.call(null,vec__11974_12161,(1),null);
encode_cols.call(null,infos_12163,source_idx_12093,line_12141,col_12162);


var G__12164 = cljs.core.next.call(null,seq__11961_12155__$1);
var G__12165 = null;
var G__12166 = (0);
var G__12167 = (0);
seq__11961_12143 = G__12164;
chunk__11962_12144 = G__12165;
count__11963_12145 = G__12166;
i__11964_12146 = G__12167;
continue;
}
} else {
}
}
break;
}


var G__12168 = cljs.core.next.call(null,seq__11897_12134__$1);
var G__12169 = null;
var G__12170 = (0);
var G__12171 = (0);
seq__11897_12097 = G__12168;
chunk__11898_12098 = G__12169;
count__11899_12099 = G__12170;
i__11900_12100 = G__12171;
continue;
}
} else {
}
}
break;
}


var G__12172 = cljs.core.next.call(null,seq__11629_12086__$1);
var G__12173 = null;
var G__12174 = (0);
var G__12175 = (0);
seq__11629_11997 = G__12172;
chunk__11630_11998 = G__12173;
count__11631_11999 = G__12174;
i__11632_12000 = G__12175;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__11977 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__11622_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11622_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__11623_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__11623_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__11624_SHARP_){
return clojure.string.join.call(null,",",p1__11624_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__11978 = G__11977;
cljs.source_map.goog$module$goog$object.set.call(null,G__11978,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__11978;
} else {
return G__11977;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__12176 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__12176,(0),null);
var col_map = cljs.core.nth.call(null,vec__12176,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__12179 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__12179,(0),null);
var infos = cljs.core.nth.call(null,vec__12179,(1),null);
var G__12184 = cljs.core.next.call(null,col_map_seq);
var G__12185 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__12179,col,infos,vec__12176,line,col_map){
return (function (v,p__12182){
var map__12183 = p__12182;
var map__12183__$1 = cljs.core.__destructure_map.call(null,map__12183);
var gline = cljs.core.get.call(null,map__12183__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__12183__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__12179,col,infos,vec__12176,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__12184;
new_cols = G__12185;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__12186 = cljs.core.next.call(null,line_map_seq);
var G__12187 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__12186;
new_lines = G__12187;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__12188_12396 = cljs.core.seq.call(null,reverse_map);
var chunk__12189_12397 = null;
var count__12190_12398 = (0);
var i__12191_12399 = (0);
while(true){
if((i__12191_12399 < count__12190_12398)){
var vec__12294_12400 = cljs.core._nth.call(null,chunk__12189_12397,i__12191_12399);
var line_12401 = cljs.core.nth.call(null,vec__12294_12400,(0),null);
var columns_12402 = cljs.core.nth.call(null,vec__12294_12400,(1),null);
var seq__12297_12403 = cljs.core.seq.call(null,columns_12402);
var chunk__12298_12404 = null;
var count__12299_12405 = (0);
var i__12300_12406 = (0);
while(true){
if((i__12300_12406 < count__12299_12405)){
var vec__12323_12407 = cljs.core._nth.call(null,chunk__12298_12404,i__12300_12406);
var column_12408 = cljs.core.nth.call(null,vec__12323_12407,(0),null);
var column_info_12409 = cljs.core.nth.call(null,vec__12323_12407,(1),null);
var seq__12326_12410 = cljs.core.seq.call(null,column_info_12409);
var chunk__12327_12411 = null;
var count__12328_12412 = (0);
var i__12329_12413 = (0);
while(true){
if((i__12329_12413 < count__12328_12412)){
var map__12332_12414 = cljs.core._nth.call(null,chunk__12327_12411,i__12329_12413);
var map__12332_12415__$1 = cljs.core.__destructure_map.call(null,map__12332_12414);
var gline_12416 = cljs.core.get.call(null,map__12332_12415__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12417 = cljs.core.get.call(null,map__12332_12415__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12418 = cljs.core.get.call(null,map__12332_12415__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12416], null),cljs.core.fnil.call(null,((function (seq__12326_12410,chunk__12327_12411,count__12328_12412,i__12329_12413,seq__12297_12403,chunk__12298_12404,count__12299_12405,i__12300_12406,seq__12188_12396,chunk__12189_12397,count__12190_12398,i__12191_12399,map__12332_12414,map__12332_12415__$1,gline_12416,gcol_12417,name_12418,vec__12323_12407,column_12408,column_info_12409,vec__12294_12400,line_12401,columns_12402,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12417], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12401,new cljs.core.Keyword(null,"col","col",-1959363084),column_12408,new cljs.core.Keyword(null,"name","name",1843675177),name_12418], null));
});})(seq__12326_12410,chunk__12327_12411,count__12328_12412,i__12329_12413,seq__12297_12403,chunk__12298_12404,count__12299_12405,i__12300_12406,seq__12188_12396,chunk__12189_12397,count__12190_12398,i__12191_12399,map__12332_12414,map__12332_12415__$1,gline_12416,gcol_12417,name_12418,vec__12323_12407,column_12408,column_info_12409,vec__12294_12400,line_12401,columns_12402,inverted))
,cljs.core.sorted_map.call(null)));


var G__12419 = seq__12326_12410;
var G__12420 = chunk__12327_12411;
var G__12421 = count__12328_12412;
var G__12422 = (i__12329_12413 + (1));
seq__12326_12410 = G__12419;
chunk__12327_12411 = G__12420;
count__12328_12412 = G__12421;
i__12329_12413 = G__12422;
continue;
} else {
var temp__5804__auto___12423 = cljs.core.seq.call(null,seq__12326_12410);
if(temp__5804__auto___12423){
var seq__12326_12424__$1 = temp__5804__auto___12423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12326_12424__$1)){
var c__5565__auto___12425 = cljs.core.chunk_first.call(null,seq__12326_12424__$1);
var G__12426 = cljs.core.chunk_rest.call(null,seq__12326_12424__$1);
var G__12427 = c__5565__auto___12425;
var G__12428 = cljs.core.count.call(null,c__5565__auto___12425);
var G__12429 = (0);
seq__12326_12410 = G__12426;
chunk__12327_12411 = G__12427;
count__12328_12412 = G__12428;
i__12329_12413 = G__12429;
continue;
} else {
var map__12333_12430 = cljs.core.first.call(null,seq__12326_12424__$1);
var map__12333_12431__$1 = cljs.core.__destructure_map.call(null,map__12333_12430);
var gline_12432 = cljs.core.get.call(null,map__12333_12431__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12433 = cljs.core.get.call(null,map__12333_12431__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12434 = cljs.core.get.call(null,map__12333_12431__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12432], null),cljs.core.fnil.call(null,((function (seq__12326_12410,chunk__12327_12411,count__12328_12412,i__12329_12413,seq__12297_12403,chunk__12298_12404,count__12299_12405,i__12300_12406,seq__12188_12396,chunk__12189_12397,count__12190_12398,i__12191_12399,map__12333_12430,map__12333_12431__$1,gline_12432,gcol_12433,name_12434,seq__12326_12424__$1,temp__5804__auto___12423,vec__12323_12407,column_12408,column_info_12409,vec__12294_12400,line_12401,columns_12402,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12433], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12401,new cljs.core.Keyword(null,"col","col",-1959363084),column_12408,new cljs.core.Keyword(null,"name","name",1843675177),name_12434], null));
});})(seq__12326_12410,chunk__12327_12411,count__12328_12412,i__12329_12413,seq__12297_12403,chunk__12298_12404,count__12299_12405,i__12300_12406,seq__12188_12396,chunk__12189_12397,count__12190_12398,i__12191_12399,map__12333_12430,map__12333_12431__$1,gline_12432,gcol_12433,name_12434,seq__12326_12424__$1,temp__5804__auto___12423,vec__12323_12407,column_12408,column_info_12409,vec__12294_12400,line_12401,columns_12402,inverted))
,cljs.core.sorted_map.call(null)));


var G__12435 = cljs.core.next.call(null,seq__12326_12424__$1);
var G__12436 = null;
var G__12437 = (0);
var G__12438 = (0);
seq__12326_12410 = G__12435;
chunk__12327_12411 = G__12436;
count__12328_12412 = G__12437;
i__12329_12413 = G__12438;
continue;
}
} else {
}
}
break;
}


var G__12439 = seq__12297_12403;
var G__12440 = chunk__12298_12404;
var G__12441 = count__12299_12405;
var G__12442 = (i__12300_12406 + (1));
seq__12297_12403 = G__12439;
chunk__12298_12404 = G__12440;
count__12299_12405 = G__12441;
i__12300_12406 = G__12442;
continue;
} else {
var temp__5804__auto___12443 = cljs.core.seq.call(null,seq__12297_12403);
if(temp__5804__auto___12443){
var seq__12297_12444__$1 = temp__5804__auto___12443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12297_12444__$1)){
var c__5565__auto___12445 = cljs.core.chunk_first.call(null,seq__12297_12444__$1);
var G__12446 = cljs.core.chunk_rest.call(null,seq__12297_12444__$1);
var G__12447 = c__5565__auto___12445;
var G__12448 = cljs.core.count.call(null,c__5565__auto___12445);
var G__12449 = (0);
seq__12297_12403 = G__12446;
chunk__12298_12404 = G__12447;
count__12299_12405 = G__12448;
i__12300_12406 = G__12449;
continue;
} else {
var vec__12334_12450 = cljs.core.first.call(null,seq__12297_12444__$1);
var column_12451 = cljs.core.nth.call(null,vec__12334_12450,(0),null);
var column_info_12452 = cljs.core.nth.call(null,vec__12334_12450,(1),null);
var seq__12337_12453 = cljs.core.seq.call(null,column_info_12452);
var chunk__12338_12454 = null;
var count__12339_12455 = (0);
var i__12340_12456 = (0);
while(true){
if((i__12340_12456 < count__12339_12455)){
var map__12343_12457 = cljs.core._nth.call(null,chunk__12338_12454,i__12340_12456);
var map__12343_12458__$1 = cljs.core.__destructure_map.call(null,map__12343_12457);
var gline_12459 = cljs.core.get.call(null,map__12343_12458__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12460 = cljs.core.get.call(null,map__12343_12458__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12461 = cljs.core.get.call(null,map__12343_12458__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12459], null),cljs.core.fnil.call(null,((function (seq__12337_12453,chunk__12338_12454,count__12339_12455,i__12340_12456,seq__12297_12403,chunk__12298_12404,count__12299_12405,i__12300_12406,seq__12188_12396,chunk__12189_12397,count__12190_12398,i__12191_12399,map__12343_12457,map__12343_12458__$1,gline_12459,gcol_12460,name_12461,vec__12334_12450,column_12451,column_info_12452,seq__12297_12444__$1,temp__5804__auto___12443,vec__12294_12400,line_12401,columns_12402,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12460], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12401,new cljs.core.Keyword(null,"col","col",-1959363084),column_12451,new cljs.core.Keyword(null,"name","name",1843675177),name_12461], null));
});})(seq__12337_12453,chunk__12338_12454,count__12339_12455,i__12340_12456,seq__12297_12403,chunk__12298_12404,count__12299_12405,i__12300_12406,seq__12188_12396,chunk__12189_12397,count__12190_12398,i__12191_12399,map__12343_12457,map__12343_12458__$1,gline_12459,gcol_12460,name_12461,vec__12334_12450,column_12451,column_info_12452,seq__12297_12444__$1,temp__5804__auto___12443,vec__12294_12400,line_12401,columns_12402,inverted))
,cljs.core.sorted_map.call(null)));


var G__12462 = seq__12337_12453;
var G__12463 = chunk__12338_12454;
var G__12464 = count__12339_12455;
var G__12465 = (i__12340_12456 + (1));
seq__12337_12453 = G__12462;
chunk__12338_12454 = G__12463;
count__12339_12455 = G__12464;
i__12340_12456 = G__12465;
continue;
} else {
var temp__5804__auto___12466__$1 = cljs.core.seq.call(null,seq__12337_12453);
if(temp__5804__auto___12466__$1){
var seq__12337_12467__$1 = temp__5804__auto___12466__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12337_12467__$1)){
var c__5565__auto___12468 = cljs.core.chunk_first.call(null,seq__12337_12467__$1);
var G__12469 = cljs.core.chunk_rest.call(null,seq__12337_12467__$1);
var G__12470 = c__5565__auto___12468;
var G__12471 = cljs.core.count.call(null,c__5565__auto___12468);
var G__12472 = (0);
seq__12337_12453 = G__12469;
chunk__12338_12454 = G__12470;
count__12339_12455 = G__12471;
i__12340_12456 = G__12472;
continue;
} else {
var map__12344_12473 = cljs.core.first.call(null,seq__12337_12467__$1);
var map__12344_12474__$1 = cljs.core.__destructure_map.call(null,map__12344_12473);
var gline_12475 = cljs.core.get.call(null,map__12344_12474__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12476 = cljs.core.get.call(null,map__12344_12474__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12477 = cljs.core.get.call(null,map__12344_12474__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12475], null),cljs.core.fnil.call(null,((function (seq__12337_12453,chunk__12338_12454,count__12339_12455,i__12340_12456,seq__12297_12403,chunk__12298_12404,count__12299_12405,i__12300_12406,seq__12188_12396,chunk__12189_12397,count__12190_12398,i__12191_12399,map__12344_12473,map__12344_12474__$1,gline_12475,gcol_12476,name_12477,seq__12337_12467__$1,temp__5804__auto___12466__$1,vec__12334_12450,column_12451,column_info_12452,seq__12297_12444__$1,temp__5804__auto___12443,vec__12294_12400,line_12401,columns_12402,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12476], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12401,new cljs.core.Keyword(null,"col","col",-1959363084),column_12451,new cljs.core.Keyword(null,"name","name",1843675177),name_12477], null));
});})(seq__12337_12453,chunk__12338_12454,count__12339_12455,i__12340_12456,seq__12297_12403,chunk__12298_12404,count__12299_12405,i__12300_12406,seq__12188_12396,chunk__12189_12397,count__12190_12398,i__12191_12399,map__12344_12473,map__12344_12474__$1,gline_12475,gcol_12476,name_12477,seq__12337_12467__$1,temp__5804__auto___12466__$1,vec__12334_12450,column_12451,column_info_12452,seq__12297_12444__$1,temp__5804__auto___12443,vec__12294_12400,line_12401,columns_12402,inverted))
,cljs.core.sorted_map.call(null)));


var G__12478 = cljs.core.next.call(null,seq__12337_12467__$1);
var G__12479 = null;
var G__12480 = (0);
var G__12481 = (0);
seq__12337_12453 = G__12478;
chunk__12338_12454 = G__12479;
count__12339_12455 = G__12480;
i__12340_12456 = G__12481;
continue;
}
} else {
}
}
break;
}


var G__12482 = cljs.core.next.call(null,seq__12297_12444__$1);
var G__12483 = null;
var G__12484 = (0);
var G__12485 = (0);
seq__12297_12403 = G__12482;
chunk__12298_12404 = G__12483;
count__12299_12405 = G__12484;
i__12300_12406 = G__12485;
continue;
}
} else {
}
}
break;
}


var G__12486 = seq__12188_12396;
var G__12487 = chunk__12189_12397;
var G__12488 = count__12190_12398;
var G__12489 = (i__12191_12399 + (1));
seq__12188_12396 = G__12486;
chunk__12189_12397 = G__12487;
count__12190_12398 = G__12488;
i__12191_12399 = G__12489;
continue;
} else {
var temp__5804__auto___12490 = cljs.core.seq.call(null,seq__12188_12396);
if(temp__5804__auto___12490){
var seq__12188_12491__$1 = temp__5804__auto___12490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12188_12491__$1)){
var c__5565__auto___12492 = cljs.core.chunk_first.call(null,seq__12188_12491__$1);
var G__12493 = cljs.core.chunk_rest.call(null,seq__12188_12491__$1);
var G__12494 = c__5565__auto___12492;
var G__12495 = cljs.core.count.call(null,c__5565__auto___12492);
var G__12496 = (0);
seq__12188_12396 = G__12493;
chunk__12189_12397 = G__12494;
count__12190_12398 = G__12495;
i__12191_12399 = G__12496;
continue;
} else {
var vec__12345_12497 = cljs.core.first.call(null,seq__12188_12491__$1);
var line_12498 = cljs.core.nth.call(null,vec__12345_12497,(0),null);
var columns_12499 = cljs.core.nth.call(null,vec__12345_12497,(1),null);
var seq__12348_12500 = cljs.core.seq.call(null,columns_12499);
var chunk__12349_12501 = null;
var count__12350_12502 = (0);
var i__12351_12503 = (0);
while(true){
if((i__12351_12503 < count__12350_12502)){
var vec__12374_12504 = cljs.core._nth.call(null,chunk__12349_12501,i__12351_12503);
var column_12505 = cljs.core.nth.call(null,vec__12374_12504,(0),null);
var column_info_12506 = cljs.core.nth.call(null,vec__12374_12504,(1),null);
var seq__12377_12507 = cljs.core.seq.call(null,column_info_12506);
var chunk__12378_12508 = null;
var count__12379_12509 = (0);
var i__12380_12510 = (0);
while(true){
if((i__12380_12510 < count__12379_12509)){
var map__12383_12511 = cljs.core._nth.call(null,chunk__12378_12508,i__12380_12510);
var map__12383_12512__$1 = cljs.core.__destructure_map.call(null,map__12383_12511);
var gline_12513 = cljs.core.get.call(null,map__12383_12512__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12514 = cljs.core.get.call(null,map__12383_12512__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12515 = cljs.core.get.call(null,map__12383_12512__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12513], null),cljs.core.fnil.call(null,((function (seq__12377_12507,chunk__12378_12508,count__12379_12509,i__12380_12510,seq__12348_12500,chunk__12349_12501,count__12350_12502,i__12351_12503,seq__12188_12396,chunk__12189_12397,count__12190_12398,i__12191_12399,map__12383_12511,map__12383_12512__$1,gline_12513,gcol_12514,name_12515,vec__12374_12504,column_12505,column_info_12506,vec__12345_12497,line_12498,columns_12499,seq__12188_12491__$1,temp__5804__auto___12490,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12514], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12498,new cljs.core.Keyword(null,"col","col",-1959363084),column_12505,new cljs.core.Keyword(null,"name","name",1843675177),name_12515], null));
});})(seq__12377_12507,chunk__12378_12508,count__12379_12509,i__12380_12510,seq__12348_12500,chunk__12349_12501,count__12350_12502,i__12351_12503,seq__12188_12396,chunk__12189_12397,count__12190_12398,i__12191_12399,map__12383_12511,map__12383_12512__$1,gline_12513,gcol_12514,name_12515,vec__12374_12504,column_12505,column_info_12506,vec__12345_12497,line_12498,columns_12499,seq__12188_12491__$1,temp__5804__auto___12490,inverted))
,cljs.core.sorted_map.call(null)));


var G__12516 = seq__12377_12507;
var G__12517 = chunk__12378_12508;
var G__12518 = count__12379_12509;
var G__12519 = (i__12380_12510 + (1));
seq__12377_12507 = G__12516;
chunk__12378_12508 = G__12517;
count__12379_12509 = G__12518;
i__12380_12510 = G__12519;
continue;
} else {
var temp__5804__auto___12520__$1 = cljs.core.seq.call(null,seq__12377_12507);
if(temp__5804__auto___12520__$1){
var seq__12377_12521__$1 = temp__5804__auto___12520__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12377_12521__$1)){
var c__5565__auto___12522 = cljs.core.chunk_first.call(null,seq__12377_12521__$1);
var G__12523 = cljs.core.chunk_rest.call(null,seq__12377_12521__$1);
var G__12524 = c__5565__auto___12522;
var G__12525 = cljs.core.count.call(null,c__5565__auto___12522);
var G__12526 = (0);
seq__12377_12507 = G__12523;
chunk__12378_12508 = G__12524;
count__12379_12509 = G__12525;
i__12380_12510 = G__12526;
continue;
} else {
var map__12384_12527 = cljs.core.first.call(null,seq__12377_12521__$1);
var map__12384_12528__$1 = cljs.core.__destructure_map.call(null,map__12384_12527);
var gline_12529 = cljs.core.get.call(null,map__12384_12528__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12530 = cljs.core.get.call(null,map__12384_12528__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12531 = cljs.core.get.call(null,map__12384_12528__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12529], null),cljs.core.fnil.call(null,((function (seq__12377_12507,chunk__12378_12508,count__12379_12509,i__12380_12510,seq__12348_12500,chunk__12349_12501,count__12350_12502,i__12351_12503,seq__12188_12396,chunk__12189_12397,count__12190_12398,i__12191_12399,map__12384_12527,map__12384_12528__$1,gline_12529,gcol_12530,name_12531,seq__12377_12521__$1,temp__5804__auto___12520__$1,vec__12374_12504,column_12505,column_info_12506,vec__12345_12497,line_12498,columns_12499,seq__12188_12491__$1,temp__5804__auto___12490,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12530], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12498,new cljs.core.Keyword(null,"col","col",-1959363084),column_12505,new cljs.core.Keyword(null,"name","name",1843675177),name_12531], null));
});})(seq__12377_12507,chunk__12378_12508,count__12379_12509,i__12380_12510,seq__12348_12500,chunk__12349_12501,count__12350_12502,i__12351_12503,seq__12188_12396,chunk__12189_12397,count__12190_12398,i__12191_12399,map__12384_12527,map__12384_12528__$1,gline_12529,gcol_12530,name_12531,seq__12377_12521__$1,temp__5804__auto___12520__$1,vec__12374_12504,column_12505,column_info_12506,vec__12345_12497,line_12498,columns_12499,seq__12188_12491__$1,temp__5804__auto___12490,inverted))
,cljs.core.sorted_map.call(null)));


var G__12532 = cljs.core.next.call(null,seq__12377_12521__$1);
var G__12533 = null;
var G__12534 = (0);
var G__12535 = (0);
seq__12377_12507 = G__12532;
chunk__12378_12508 = G__12533;
count__12379_12509 = G__12534;
i__12380_12510 = G__12535;
continue;
}
} else {
}
}
break;
}


var G__12536 = seq__12348_12500;
var G__12537 = chunk__12349_12501;
var G__12538 = count__12350_12502;
var G__12539 = (i__12351_12503 + (1));
seq__12348_12500 = G__12536;
chunk__12349_12501 = G__12537;
count__12350_12502 = G__12538;
i__12351_12503 = G__12539;
continue;
} else {
var temp__5804__auto___12540__$1 = cljs.core.seq.call(null,seq__12348_12500);
if(temp__5804__auto___12540__$1){
var seq__12348_12541__$1 = temp__5804__auto___12540__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12348_12541__$1)){
var c__5565__auto___12542 = cljs.core.chunk_first.call(null,seq__12348_12541__$1);
var G__12543 = cljs.core.chunk_rest.call(null,seq__12348_12541__$1);
var G__12544 = c__5565__auto___12542;
var G__12545 = cljs.core.count.call(null,c__5565__auto___12542);
var G__12546 = (0);
seq__12348_12500 = G__12543;
chunk__12349_12501 = G__12544;
count__12350_12502 = G__12545;
i__12351_12503 = G__12546;
continue;
} else {
var vec__12385_12547 = cljs.core.first.call(null,seq__12348_12541__$1);
var column_12548 = cljs.core.nth.call(null,vec__12385_12547,(0),null);
var column_info_12549 = cljs.core.nth.call(null,vec__12385_12547,(1),null);
var seq__12388_12550 = cljs.core.seq.call(null,column_info_12549);
var chunk__12389_12551 = null;
var count__12390_12552 = (0);
var i__12391_12553 = (0);
while(true){
if((i__12391_12553 < count__12390_12552)){
var map__12394_12554 = cljs.core._nth.call(null,chunk__12389_12551,i__12391_12553);
var map__12394_12555__$1 = cljs.core.__destructure_map.call(null,map__12394_12554);
var gline_12556 = cljs.core.get.call(null,map__12394_12555__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12557 = cljs.core.get.call(null,map__12394_12555__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12558 = cljs.core.get.call(null,map__12394_12555__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12556], null),cljs.core.fnil.call(null,((function (seq__12388_12550,chunk__12389_12551,count__12390_12552,i__12391_12553,seq__12348_12500,chunk__12349_12501,count__12350_12502,i__12351_12503,seq__12188_12396,chunk__12189_12397,count__12190_12398,i__12191_12399,map__12394_12554,map__12394_12555__$1,gline_12556,gcol_12557,name_12558,vec__12385_12547,column_12548,column_info_12549,seq__12348_12541__$1,temp__5804__auto___12540__$1,vec__12345_12497,line_12498,columns_12499,seq__12188_12491__$1,temp__5804__auto___12490,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12557], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12498,new cljs.core.Keyword(null,"col","col",-1959363084),column_12548,new cljs.core.Keyword(null,"name","name",1843675177),name_12558], null));
});})(seq__12388_12550,chunk__12389_12551,count__12390_12552,i__12391_12553,seq__12348_12500,chunk__12349_12501,count__12350_12502,i__12351_12503,seq__12188_12396,chunk__12189_12397,count__12190_12398,i__12191_12399,map__12394_12554,map__12394_12555__$1,gline_12556,gcol_12557,name_12558,vec__12385_12547,column_12548,column_info_12549,seq__12348_12541__$1,temp__5804__auto___12540__$1,vec__12345_12497,line_12498,columns_12499,seq__12188_12491__$1,temp__5804__auto___12490,inverted))
,cljs.core.sorted_map.call(null)));


var G__12559 = seq__12388_12550;
var G__12560 = chunk__12389_12551;
var G__12561 = count__12390_12552;
var G__12562 = (i__12391_12553 + (1));
seq__12388_12550 = G__12559;
chunk__12389_12551 = G__12560;
count__12390_12552 = G__12561;
i__12391_12553 = G__12562;
continue;
} else {
var temp__5804__auto___12563__$2 = cljs.core.seq.call(null,seq__12388_12550);
if(temp__5804__auto___12563__$2){
var seq__12388_12564__$1 = temp__5804__auto___12563__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12388_12564__$1)){
var c__5565__auto___12565 = cljs.core.chunk_first.call(null,seq__12388_12564__$1);
var G__12566 = cljs.core.chunk_rest.call(null,seq__12388_12564__$1);
var G__12567 = c__5565__auto___12565;
var G__12568 = cljs.core.count.call(null,c__5565__auto___12565);
var G__12569 = (0);
seq__12388_12550 = G__12566;
chunk__12389_12551 = G__12567;
count__12390_12552 = G__12568;
i__12391_12553 = G__12569;
continue;
} else {
var map__12395_12570 = cljs.core.first.call(null,seq__12388_12564__$1);
var map__12395_12571__$1 = cljs.core.__destructure_map.call(null,map__12395_12570);
var gline_12572 = cljs.core.get.call(null,map__12395_12571__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12573 = cljs.core.get.call(null,map__12395_12571__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12574 = cljs.core.get.call(null,map__12395_12571__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12572], null),cljs.core.fnil.call(null,((function (seq__12388_12550,chunk__12389_12551,count__12390_12552,i__12391_12553,seq__12348_12500,chunk__12349_12501,count__12350_12502,i__12351_12503,seq__12188_12396,chunk__12189_12397,count__12190_12398,i__12191_12399,map__12395_12570,map__12395_12571__$1,gline_12572,gcol_12573,name_12574,seq__12388_12564__$1,temp__5804__auto___12563__$2,vec__12385_12547,column_12548,column_info_12549,seq__12348_12541__$1,temp__5804__auto___12540__$1,vec__12345_12497,line_12498,columns_12499,seq__12188_12491__$1,temp__5804__auto___12490,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12573], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12498,new cljs.core.Keyword(null,"col","col",-1959363084),column_12548,new cljs.core.Keyword(null,"name","name",1843675177),name_12574], null));
});})(seq__12388_12550,chunk__12389_12551,count__12390_12552,i__12391_12553,seq__12348_12500,chunk__12349_12501,count__12350_12502,i__12351_12503,seq__12188_12396,chunk__12189_12397,count__12190_12398,i__12191_12399,map__12395_12570,map__12395_12571__$1,gline_12572,gcol_12573,name_12574,seq__12388_12564__$1,temp__5804__auto___12563__$2,vec__12385_12547,column_12548,column_info_12549,seq__12348_12541__$1,temp__5804__auto___12540__$1,vec__12345_12497,line_12498,columns_12499,seq__12188_12491__$1,temp__5804__auto___12490,inverted))
,cljs.core.sorted_map.call(null)));


var G__12575 = cljs.core.next.call(null,seq__12388_12564__$1);
var G__12576 = null;
var G__12577 = (0);
var G__12578 = (0);
seq__12388_12550 = G__12575;
chunk__12389_12551 = G__12576;
count__12390_12552 = G__12577;
i__12391_12553 = G__12578;
continue;
}
} else {
}
}
break;
}


var G__12579 = cljs.core.next.call(null,seq__12348_12541__$1);
var G__12580 = null;
var G__12581 = (0);
var G__12582 = (0);
seq__12348_12500 = G__12579;
chunk__12349_12501 = G__12580;
count__12350_12502 = G__12581;
i__12351_12503 = G__12582;
continue;
}
} else {
}
}
break;
}


var G__12583 = cljs.core.next.call(null,seq__12188_12491__$1);
var G__12584 = null;
var G__12585 = (0);
var G__12586 = (0);
seq__12188_12396 = G__12583;
chunk__12189_12397 = G__12584;
count__12190_12398 = G__12585;
i__12191_12399 = G__12586;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map

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
return cljs.core.reduce.call(null,(function (m,p__25513){
var vec__25514 = p__25513;
var i = cljs.core.nth.call(null,vec__25514,(0),null);
var v = cljs.core.nth.call(null,vec__25514,(1),null);
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
var vec__25517 = seg;
var gcol = cljs.core.nth.call(null,vec__25517,(0),null);
var source = cljs.core.nth.call(null,vec__25517,(1),null);
var line = cljs.core.nth.call(null,vec__25517,(2),null);
var col = cljs.core.nth.call(null,vec__25517,(3),null);
var name = cljs.core.nth.call(null,vec__25517,(4),null);
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
var vec__25520 = seg;
var gcol = cljs.core.nth.call(null,vec__25520,(0),null);
var source = cljs.core.nth.call(null,vec__25520,(1),null);
var line = cljs.core.nth.call(null,vec__25520,(2),null);
var col = cljs.core.nth.call(null,vec__25520,(3),null);
var name = cljs.core.nth.call(null,vec__25520,(4),null);
var vec__25523 = relseg;
var rgcol = cljs.core.nth.call(null,vec__25523,(0),null);
var rsource = cljs.core.nth.call(null,vec__25523,(1),null);
var rline = cljs.core.nth.call(null,vec__25523,(2),null);
var rcol = cljs.core.nth.call(null,vec__25523,(3),null);
var rname = cljs.core.nth.call(null,vec__25523,(4),null);
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
var map__25526 = segmap;
var map__25526__$1 = cljs.core.__destructure_map.call(null,map__25526);
var gcol = cljs.core.get.call(null,map__25526__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__25526__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__25526__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__25526__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__25526__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__25528 = arguments.length;
switch (G__25528) {
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
var vec__25532 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__25536 = cljs.core.next.call(null,segs__$1);
var G__25537 = nrelseg;
var G__25538 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__25536;
relseg__$1 = G__25537;
result__$1 = G__25538;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__25532,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__25532,(1),null);
var G__25539 = (gline + (1));
var G__25540 = cljs.core.next.call(null,lines__$1);
var G__25541 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__25542 = result__$1;
gline = G__25539;
lines__$1 = G__25540;
relseg = G__25541;
result = G__25542;
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
var map__25544 = segmap;
var map__25544__$1 = cljs.core.__destructure_map.call(null,map__25544);
var gcol = cljs.core.get.call(null,map__25544__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__25544__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__25544__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__25544__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__25544__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__25543_SHARP_){
return cljs.core.conj.call(null,p1__25543_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__25546 = arguments.length;
switch (G__25546) {
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
var vec__25550 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__25554 = cljs.core.next.call(null,segs__$1);
var G__25555 = nrelseg;
var G__25556 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__25554;
relseg__$1 = G__25555;
result__$1 = G__25556;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__25550,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__25550,(1),null);
var G__25557 = (gline + (1));
var G__25558 = cljs.core.next.call(null,lines__$1);
var G__25559 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__25560 = result__$1;
gline = G__25557;
lines__$1 = G__25558;
relseg = G__25559;
result = G__25560;
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
cljs.core.swap_BANG_.call(null,relseg,(function (p__25561){
var vec__25562 = p__25561;
var _ = cljs.core.nth.call(null,vec__25562,(0),null);
var source = cljs.core.nth.call(null,vec__25562,(1),null);
var line = cljs.core.nth.call(null,vec__25562,(2),null);
var col = cljs.core.nth.call(null,vec__25562,(3),null);
var name = cljs.core.nth.call(null,vec__25562,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__25565){
var vec__25566 = p__25565;
var gcol = cljs.core.nth.call(null,vec__25566,(0),null);
var sidx = cljs.core.nth.call(null,vec__25566,(1),null);
var line = cljs.core.nth.call(null,vec__25566,(2),null);
var col = cljs.core.nth.call(null,vec__25566,(3),null);
var name = cljs.core.nth.call(null,vec__25566,(4),null);
var seg = vec__25566;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__25569){
var vec__25570 = p__25569;
var _ = cljs.core.nth.call(null,vec__25570,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__25570,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__25570,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__25570,(3),null);
var lname = cljs.core.nth.call(null,vec__25570,(4),null);
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
var seq__25576 = cljs.core.seq.call(null,infos);
var chunk__25577 = null;
var count__25578 = (0);
var i__25579 = (0);
while(true){
if((i__25579 < count__25578)){
var info = cljs.core._nth.call(null,chunk__25577,i__25579);
var segv_25930 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_25931 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_25932 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_25931 > (lc_25932 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__25576,chunk__25577,count__25578,i__25579,segv_25930,gline_25931,lc_25932,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_25931 - (lc_25932 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_25930], null));
});})(seq__25576,chunk__25577,count__25578,i__25579,segv_25930,gline_25931,lc_25932,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__25576,chunk__25577,count__25578,i__25579,segv_25930,gline_25931,lc_25932,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25931], null),cljs.core.conj,segv_25930);
});})(seq__25576,chunk__25577,count__25578,i__25579,segv_25930,gline_25931,lc_25932,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__25933 = seq__25576;
var G__25934 = chunk__25577;
var G__25935 = count__25578;
var G__25936 = (i__25579 + (1));
seq__25576 = G__25933;
chunk__25577 = G__25934;
count__25578 = G__25935;
i__25579 = G__25936;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__25576);
if(temp__5804__auto__){
var seq__25576__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25576__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__25576__$1);
var G__25937 = cljs.core.chunk_rest.call(null,seq__25576__$1);
var G__25938 = c__5565__auto__;
var G__25939 = cljs.core.count.call(null,c__5565__auto__);
var G__25940 = (0);
seq__25576 = G__25937;
chunk__25577 = G__25938;
count__25578 = G__25939;
i__25579 = G__25940;
continue;
} else {
var info = cljs.core.first.call(null,seq__25576__$1);
var segv_25941 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_25942 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_25943 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_25942 > (lc_25943 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__25576,chunk__25577,count__25578,i__25579,segv_25941,gline_25942,lc_25943,info,seq__25576__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_25942 - (lc_25943 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_25941], null));
});})(seq__25576,chunk__25577,count__25578,i__25579,segv_25941,gline_25942,lc_25943,info,seq__25576__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__25576,chunk__25577,count__25578,i__25579,segv_25941,gline_25942,lc_25943,info,seq__25576__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25942], null),cljs.core.conj,segv_25941);
});})(seq__25576,chunk__25577,count__25578,i__25579,segv_25941,gline_25942,lc_25943,info,seq__25576__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__25944 = cljs.core.next.call(null,seq__25576__$1);
var G__25945 = null;
var G__25946 = (0);
var G__25947 = (0);
seq__25576 = G__25944;
chunk__25577 = G__25945;
count__25578 = G__25946;
i__25579 = G__25947;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__25580_25948 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__25581_25949 = null;
var count__25582_25950 = (0);
var i__25583_25951 = (0);
while(true){
if((i__25583_25951 < count__25582_25950)){
var vec__25756_25952 = cljs.core._nth.call(null,chunk__25581_25949,i__25583_25951);
var source_idx_25953 = cljs.core.nth.call(null,vec__25756_25952,(0),null);
var vec__25759_25954 = cljs.core.nth.call(null,vec__25756_25952,(1),null);
var __25955 = cljs.core.nth.call(null,vec__25759_25954,(0),null);
var lines_25956__$1 = cljs.core.nth.call(null,vec__25759_25954,(1),null);
var seq__25762_25957 = cljs.core.seq.call(null,lines_25956__$1);
var chunk__25763_25958 = null;
var count__25764_25959 = (0);
var i__25765_25960 = (0);
while(true){
if((i__25765_25960 < count__25764_25959)){
var vec__25804_25961 = cljs.core._nth.call(null,chunk__25763_25958,i__25765_25960);
var line_25962 = cljs.core.nth.call(null,vec__25804_25961,(0),null);
var cols_25963 = cljs.core.nth.call(null,vec__25804_25961,(1),null);
var seq__25807_25964 = cljs.core.seq.call(null,cols_25963);
var chunk__25808_25965 = null;
var count__25809_25966 = (0);
var i__25810_25967 = (0);
while(true){
if((i__25810_25967 < count__25809_25966)){
var vec__25817_25968 = cljs.core._nth.call(null,chunk__25808_25965,i__25810_25967);
var col_25969 = cljs.core.nth.call(null,vec__25817_25968,(0),null);
var infos_25970 = cljs.core.nth.call(null,vec__25817_25968,(1),null);
encode_cols.call(null,infos_25970,source_idx_25953,line_25962,col_25969);


var G__25971 = seq__25807_25964;
var G__25972 = chunk__25808_25965;
var G__25973 = count__25809_25966;
var G__25974 = (i__25810_25967 + (1));
seq__25807_25964 = G__25971;
chunk__25808_25965 = G__25972;
count__25809_25966 = G__25973;
i__25810_25967 = G__25974;
continue;
} else {
var temp__5804__auto___25975 = cljs.core.seq.call(null,seq__25807_25964);
if(temp__5804__auto___25975){
var seq__25807_25976__$1 = temp__5804__auto___25975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25807_25976__$1)){
var c__5565__auto___25977 = cljs.core.chunk_first.call(null,seq__25807_25976__$1);
var G__25978 = cljs.core.chunk_rest.call(null,seq__25807_25976__$1);
var G__25979 = c__5565__auto___25977;
var G__25980 = cljs.core.count.call(null,c__5565__auto___25977);
var G__25981 = (0);
seq__25807_25964 = G__25978;
chunk__25808_25965 = G__25979;
count__25809_25966 = G__25980;
i__25810_25967 = G__25981;
continue;
} else {
var vec__25820_25982 = cljs.core.first.call(null,seq__25807_25976__$1);
var col_25983 = cljs.core.nth.call(null,vec__25820_25982,(0),null);
var infos_25984 = cljs.core.nth.call(null,vec__25820_25982,(1),null);
encode_cols.call(null,infos_25984,source_idx_25953,line_25962,col_25983);


var G__25985 = cljs.core.next.call(null,seq__25807_25976__$1);
var G__25986 = null;
var G__25987 = (0);
var G__25988 = (0);
seq__25807_25964 = G__25985;
chunk__25808_25965 = G__25986;
count__25809_25966 = G__25987;
i__25810_25967 = G__25988;
continue;
}
} else {
}
}
break;
}


var G__25989 = seq__25762_25957;
var G__25990 = chunk__25763_25958;
var G__25991 = count__25764_25959;
var G__25992 = (i__25765_25960 + (1));
seq__25762_25957 = G__25989;
chunk__25763_25958 = G__25990;
count__25764_25959 = G__25991;
i__25765_25960 = G__25992;
continue;
} else {
var temp__5804__auto___25993 = cljs.core.seq.call(null,seq__25762_25957);
if(temp__5804__auto___25993){
var seq__25762_25994__$1 = temp__5804__auto___25993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25762_25994__$1)){
var c__5565__auto___25995 = cljs.core.chunk_first.call(null,seq__25762_25994__$1);
var G__25996 = cljs.core.chunk_rest.call(null,seq__25762_25994__$1);
var G__25997 = c__5565__auto___25995;
var G__25998 = cljs.core.count.call(null,c__5565__auto___25995);
var G__25999 = (0);
seq__25762_25957 = G__25996;
chunk__25763_25958 = G__25997;
count__25764_25959 = G__25998;
i__25765_25960 = G__25999;
continue;
} else {
var vec__25823_26000 = cljs.core.first.call(null,seq__25762_25994__$1);
var line_26001 = cljs.core.nth.call(null,vec__25823_26000,(0),null);
var cols_26002 = cljs.core.nth.call(null,vec__25823_26000,(1),null);
var seq__25826_26003 = cljs.core.seq.call(null,cols_26002);
var chunk__25827_26004 = null;
var count__25828_26005 = (0);
var i__25829_26006 = (0);
while(true){
if((i__25829_26006 < count__25828_26005)){
var vec__25836_26007 = cljs.core._nth.call(null,chunk__25827_26004,i__25829_26006);
var col_26008 = cljs.core.nth.call(null,vec__25836_26007,(0),null);
var infos_26009 = cljs.core.nth.call(null,vec__25836_26007,(1),null);
encode_cols.call(null,infos_26009,source_idx_25953,line_26001,col_26008);


var G__26010 = seq__25826_26003;
var G__26011 = chunk__25827_26004;
var G__26012 = count__25828_26005;
var G__26013 = (i__25829_26006 + (1));
seq__25826_26003 = G__26010;
chunk__25827_26004 = G__26011;
count__25828_26005 = G__26012;
i__25829_26006 = G__26013;
continue;
} else {
var temp__5804__auto___26014__$1 = cljs.core.seq.call(null,seq__25826_26003);
if(temp__5804__auto___26014__$1){
var seq__25826_26015__$1 = temp__5804__auto___26014__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25826_26015__$1)){
var c__5565__auto___26016 = cljs.core.chunk_first.call(null,seq__25826_26015__$1);
var G__26017 = cljs.core.chunk_rest.call(null,seq__25826_26015__$1);
var G__26018 = c__5565__auto___26016;
var G__26019 = cljs.core.count.call(null,c__5565__auto___26016);
var G__26020 = (0);
seq__25826_26003 = G__26017;
chunk__25827_26004 = G__26018;
count__25828_26005 = G__26019;
i__25829_26006 = G__26020;
continue;
} else {
var vec__25839_26021 = cljs.core.first.call(null,seq__25826_26015__$1);
var col_26022 = cljs.core.nth.call(null,vec__25839_26021,(0),null);
var infos_26023 = cljs.core.nth.call(null,vec__25839_26021,(1),null);
encode_cols.call(null,infos_26023,source_idx_25953,line_26001,col_26022);


var G__26024 = cljs.core.next.call(null,seq__25826_26015__$1);
var G__26025 = null;
var G__26026 = (0);
var G__26027 = (0);
seq__25826_26003 = G__26024;
chunk__25827_26004 = G__26025;
count__25828_26005 = G__26026;
i__25829_26006 = G__26027;
continue;
}
} else {
}
}
break;
}


var G__26028 = cljs.core.next.call(null,seq__25762_25994__$1);
var G__26029 = null;
var G__26030 = (0);
var G__26031 = (0);
seq__25762_25957 = G__26028;
chunk__25763_25958 = G__26029;
count__25764_25959 = G__26030;
i__25765_25960 = G__26031;
continue;
}
} else {
}
}
break;
}


var G__26032 = seq__25580_25948;
var G__26033 = chunk__25581_25949;
var G__26034 = count__25582_25950;
var G__26035 = (i__25583_25951 + (1));
seq__25580_25948 = G__26032;
chunk__25581_25949 = G__26033;
count__25582_25950 = G__26034;
i__25583_25951 = G__26035;
continue;
} else {
var temp__5804__auto___26036 = cljs.core.seq.call(null,seq__25580_25948);
if(temp__5804__auto___26036){
var seq__25580_26037__$1 = temp__5804__auto___26036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25580_26037__$1)){
var c__5565__auto___26038 = cljs.core.chunk_first.call(null,seq__25580_26037__$1);
var G__26039 = cljs.core.chunk_rest.call(null,seq__25580_26037__$1);
var G__26040 = c__5565__auto___26038;
var G__26041 = cljs.core.count.call(null,c__5565__auto___26038);
var G__26042 = (0);
seq__25580_25948 = G__26039;
chunk__25581_25949 = G__26040;
count__25582_25950 = G__26041;
i__25583_25951 = G__26042;
continue;
} else {
var vec__25842_26043 = cljs.core.first.call(null,seq__25580_26037__$1);
var source_idx_26044 = cljs.core.nth.call(null,vec__25842_26043,(0),null);
var vec__25845_26045 = cljs.core.nth.call(null,vec__25842_26043,(1),null);
var __26046 = cljs.core.nth.call(null,vec__25845_26045,(0),null);
var lines_26047__$1 = cljs.core.nth.call(null,vec__25845_26045,(1),null);
var seq__25848_26048 = cljs.core.seq.call(null,lines_26047__$1);
var chunk__25849_26049 = null;
var count__25850_26050 = (0);
var i__25851_26051 = (0);
while(true){
if((i__25851_26051 < count__25850_26050)){
var vec__25890_26052 = cljs.core._nth.call(null,chunk__25849_26049,i__25851_26051);
var line_26053 = cljs.core.nth.call(null,vec__25890_26052,(0),null);
var cols_26054 = cljs.core.nth.call(null,vec__25890_26052,(1),null);
var seq__25893_26055 = cljs.core.seq.call(null,cols_26054);
var chunk__25894_26056 = null;
var count__25895_26057 = (0);
var i__25896_26058 = (0);
while(true){
if((i__25896_26058 < count__25895_26057)){
var vec__25903_26059 = cljs.core._nth.call(null,chunk__25894_26056,i__25896_26058);
var col_26060 = cljs.core.nth.call(null,vec__25903_26059,(0),null);
var infos_26061 = cljs.core.nth.call(null,vec__25903_26059,(1),null);
encode_cols.call(null,infos_26061,source_idx_26044,line_26053,col_26060);


var G__26062 = seq__25893_26055;
var G__26063 = chunk__25894_26056;
var G__26064 = count__25895_26057;
var G__26065 = (i__25896_26058 + (1));
seq__25893_26055 = G__26062;
chunk__25894_26056 = G__26063;
count__25895_26057 = G__26064;
i__25896_26058 = G__26065;
continue;
} else {
var temp__5804__auto___26066__$1 = cljs.core.seq.call(null,seq__25893_26055);
if(temp__5804__auto___26066__$1){
var seq__25893_26067__$1 = temp__5804__auto___26066__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25893_26067__$1)){
var c__5565__auto___26068 = cljs.core.chunk_first.call(null,seq__25893_26067__$1);
var G__26069 = cljs.core.chunk_rest.call(null,seq__25893_26067__$1);
var G__26070 = c__5565__auto___26068;
var G__26071 = cljs.core.count.call(null,c__5565__auto___26068);
var G__26072 = (0);
seq__25893_26055 = G__26069;
chunk__25894_26056 = G__26070;
count__25895_26057 = G__26071;
i__25896_26058 = G__26072;
continue;
} else {
var vec__25906_26073 = cljs.core.first.call(null,seq__25893_26067__$1);
var col_26074 = cljs.core.nth.call(null,vec__25906_26073,(0),null);
var infos_26075 = cljs.core.nth.call(null,vec__25906_26073,(1),null);
encode_cols.call(null,infos_26075,source_idx_26044,line_26053,col_26074);


var G__26076 = cljs.core.next.call(null,seq__25893_26067__$1);
var G__26077 = null;
var G__26078 = (0);
var G__26079 = (0);
seq__25893_26055 = G__26076;
chunk__25894_26056 = G__26077;
count__25895_26057 = G__26078;
i__25896_26058 = G__26079;
continue;
}
} else {
}
}
break;
}


var G__26080 = seq__25848_26048;
var G__26081 = chunk__25849_26049;
var G__26082 = count__25850_26050;
var G__26083 = (i__25851_26051 + (1));
seq__25848_26048 = G__26080;
chunk__25849_26049 = G__26081;
count__25850_26050 = G__26082;
i__25851_26051 = G__26083;
continue;
} else {
var temp__5804__auto___26084__$1 = cljs.core.seq.call(null,seq__25848_26048);
if(temp__5804__auto___26084__$1){
var seq__25848_26085__$1 = temp__5804__auto___26084__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25848_26085__$1)){
var c__5565__auto___26086 = cljs.core.chunk_first.call(null,seq__25848_26085__$1);
var G__26087 = cljs.core.chunk_rest.call(null,seq__25848_26085__$1);
var G__26088 = c__5565__auto___26086;
var G__26089 = cljs.core.count.call(null,c__5565__auto___26086);
var G__26090 = (0);
seq__25848_26048 = G__26087;
chunk__25849_26049 = G__26088;
count__25850_26050 = G__26089;
i__25851_26051 = G__26090;
continue;
} else {
var vec__25909_26091 = cljs.core.first.call(null,seq__25848_26085__$1);
var line_26092 = cljs.core.nth.call(null,vec__25909_26091,(0),null);
var cols_26093 = cljs.core.nth.call(null,vec__25909_26091,(1),null);
var seq__25912_26094 = cljs.core.seq.call(null,cols_26093);
var chunk__25913_26095 = null;
var count__25914_26096 = (0);
var i__25915_26097 = (0);
while(true){
if((i__25915_26097 < count__25914_26096)){
var vec__25922_26098 = cljs.core._nth.call(null,chunk__25913_26095,i__25915_26097);
var col_26099 = cljs.core.nth.call(null,vec__25922_26098,(0),null);
var infos_26100 = cljs.core.nth.call(null,vec__25922_26098,(1),null);
encode_cols.call(null,infos_26100,source_idx_26044,line_26092,col_26099);


var G__26101 = seq__25912_26094;
var G__26102 = chunk__25913_26095;
var G__26103 = count__25914_26096;
var G__26104 = (i__25915_26097 + (1));
seq__25912_26094 = G__26101;
chunk__25913_26095 = G__26102;
count__25914_26096 = G__26103;
i__25915_26097 = G__26104;
continue;
} else {
var temp__5804__auto___26105__$2 = cljs.core.seq.call(null,seq__25912_26094);
if(temp__5804__auto___26105__$2){
var seq__25912_26106__$1 = temp__5804__auto___26105__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25912_26106__$1)){
var c__5565__auto___26107 = cljs.core.chunk_first.call(null,seq__25912_26106__$1);
var G__26108 = cljs.core.chunk_rest.call(null,seq__25912_26106__$1);
var G__26109 = c__5565__auto___26107;
var G__26110 = cljs.core.count.call(null,c__5565__auto___26107);
var G__26111 = (0);
seq__25912_26094 = G__26108;
chunk__25913_26095 = G__26109;
count__25914_26096 = G__26110;
i__25915_26097 = G__26111;
continue;
} else {
var vec__25925_26112 = cljs.core.first.call(null,seq__25912_26106__$1);
var col_26113 = cljs.core.nth.call(null,vec__25925_26112,(0),null);
var infos_26114 = cljs.core.nth.call(null,vec__25925_26112,(1),null);
encode_cols.call(null,infos_26114,source_idx_26044,line_26092,col_26113);


var G__26115 = cljs.core.next.call(null,seq__25912_26106__$1);
var G__26116 = null;
var G__26117 = (0);
var G__26118 = (0);
seq__25912_26094 = G__26115;
chunk__25913_26095 = G__26116;
count__25914_26096 = G__26117;
i__25915_26097 = G__26118;
continue;
}
} else {
}
}
break;
}


var G__26119 = cljs.core.next.call(null,seq__25848_26085__$1);
var G__26120 = null;
var G__26121 = (0);
var G__26122 = (0);
seq__25848_26048 = G__26119;
chunk__25849_26049 = G__26120;
count__25850_26050 = G__26121;
i__25851_26051 = G__26122;
continue;
}
} else {
}
}
break;
}


var G__26123 = cljs.core.next.call(null,seq__25580_26037__$1);
var G__26124 = null;
var G__26125 = (0);
var G__26126 = (0);
seq__25580_25948 = G__26123;
chunk__25581_25949 = G__26124;
count__25582_25950 = G__26125;
i__25583_25951 = G__26126;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__25928 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__25573_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25573_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__25574_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__25574_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__25575_SHARP_){
return clojure.string.join.call(null,",",p1__25575_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__25929 = G__25928;
cljs.source_map.goog$module$goog$object.set.call(null,G__25929,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__25929;
} else {
return G__25928;
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
var vec__26127 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__26127,(0),null);
var col_map = cljs.core.nth.call(null,vec__26127,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__26130 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__26130,(0),null);
var infos = cljs.core.nth.call(null,vec__26130,(1),null);
var G__26135 = cljs.core.next.call(null,col_map_seq);
var G__26136 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__26130,col,infos,vec__26127,line,col_map){
return (function (v,p__26133){
var map__26134 = p__26133;
var map__26134__$1 = cljs.core.__destructure_map.call(null,map__26134);
var gline = cljs.core.get.call(null,map__26134__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__26134__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__26130,col,infos,vec__26127,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__26135;
new_cols = G__26136;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__26137 = cljs.core.next.call(null,line_map_seq);
var G__26138 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__26137;
new_lines = G__26138;
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
var seq__26139_26347 = cljs.core.seq.call(null,reverse_map);
var chunk__26140_26348 = null;
var count__26141_26349 = (0);
var i__26142_26350 = (0);
while(true){
if((i__26142_26350 < count__26141_26349)){
var vec__26245_26351 = cljs.core._nth.call(null,chunk__26140_26348,i__26142_26350);
var line_26352 = cljs.core.nth.call(null,vec__26245_26351,(0),null);
var columns_26353 = cljs.core.nth.call(null,vec__26245_26351,(1),null);
var seq__26248_26354 = cljs.core.seq.call(null,columns_26353);
var chunk__26249_26355 = null;
var count__26250_26356 = (0);
var i__26251_26357 = (0);
while(true){
if((i__26251_26357 < count__26250_26356)){
var vec__26274_26358 = cljs.core._nth.call(null,chunk__26249_26355,i__26251_26357);
var column_26359 = cljs.core.nth.call(null,vec__26274_26358,(0),null);
var column_info_26360 = cljs.core.nth.call(null,vec__26274_26358,(1),null);
var seq__26277_26361 = cljs.core.seq.call(null,column_info_26360);
var chunk__26278_26362 = null;
var count__26279_26363 = (0);
var i__26280_26364 = (0);
while(true){
if((i__26280_26364 < count__26279_26363)){
var map__26283_26365 = cljs.core._nth.call(null,chunk__26278_26362,i__26280_26364);
var map__26283_26366__$1 = cljs.core.__destructure_map.call(null,map__26283_26365);
var gline_26367 = cljs.core.get.call(null,map__26283_26366__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26368 = cljs.core.get.call(null,map__26283_26366__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26369 = cljs.core.get.call(null,map__26283_26366__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26367], null),cljs.core.fnil.call(null,((function (seq__26277_26361,chunk__26278_26362,count__26279_26363,i__26280_26364,seq__26248_26354,chunk__26249_26355,count__26250_26356,i__26251_26357,seq__26139_26347,chunk__26140_26348,count__26141_26349,i__26142_26350,map__26283_26365,map__26283_26366__$1,gline_26367,gcol_26368,name_26369,vec__26274_26358,column_26359,column_info_26360,vec__26245_26351,line_26352,columns_26353,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26368], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26352,new cljs.core.Keyword(null,"col","col",-1959363084),column_26359,new cljs.core.Keyword(null,"name","name",1843675177),name_26369], null));
});})(seq__26277_26361,chunk__26278_26362,count__26279_26363,i__26280_26364,seq__26248_26354,chunk__26249_26355,count__26250_26356,i__26251_26357,seq__26139_26347,chunk__26140_26348,count__26141_26349,i__26142_26350,map__26283_26365,map__26283_26366__$1,gline_26367,gcol_26368,name_26369,vec__26274_26358,column_26359,column_info_26360,vec__26245_26351,line_26352,columns_26353,inverted))
,cljs.core.sorted_map.call(null)));


var G__26370 = seq__26277_26361;
var G__26371 = chunk__26278_26362;
var G__26372 = count__26279_26363;
var G__26373 = (i__26280_26364 + (1));
seq__26277_26361 = G__26370;
chunk__26278_26362 = G__26371;
count__26279_26363 = G__26372;
i__26280_26364 = G__26373;
continue;
} else {
var temp__5804__auto___26374 = cljs.core.seq.call(null,seq__26277_26361);
if(temp__5804__auto___26374){
var seq__26277_26375__$1 = temp__5804__auto___26374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26277_26375__$1)){
var c__5565__auto___26376 = cljs.core.chunk_first.call(null,seq__26277_26375__$1);
var G__26377 = cljs.core.chunk_rest.call(null,seq__26277_26375__$1);
var G__26378 = c__5565__auto___26376;
var G__26379 = cljs.core.count.call(null,c__5565__auto___26376);
var G__26380 = (0);
seq__26277_26361 = G__26377;
chunk__26278_26362 = G__26378;
count__26279_26363 = G__26379;
i__26280_26364 = G__26380;
continue;
} else {
var map__26284_26381 = cljs.core.first.call(null,seq__26277_26375__$1);
var map__26284_26382__$1 = cljs.core.__destructure_map.call(null,map__26284_26381);
var gline_26383 = cljs.core.get.call(null,map__26284_26382__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26384 = cljs.core.get.call(null,map__26284_26382__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26385 = cljs.core.get.call(null,map__26284_26382__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26383], null),cljs.core.fnil.call(null,((function (seq__26277_26361,chunk__26278_26362,count__26279_26363,i__26280_26364,seq__26248_26354,chunk__26249_26355,count__26250_26356,i__26251_26357,seq__26139_26347,chunk__26140_26348,count__26141_26349,i__26142_26350,map__26284_26381,map__26284_26382__$1,gline_26383,gcol_26384,name_26385,seq__26277_26375__$1,temp__5804__auto___26374,vec__26274_26358,column_26359,column_info_26360,vec__26245_26351,line_26352,columns_26353,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26384], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26352,new cljs.core.Keyword(null,"col","col",-1959363084),column_26359,new cljs.core.Keyword(null,"name","name",1843675177),name_26385], null));
});})(seq__26277_26361,chunk__26278_26362,count__26279_26363,i__26280_26364,seq__26248_26354,chunk__26249_26355,count__26250_26356,i__26251_26357,seq__26139_26347,chunk__26140_26348,count__26141_26349,i__26142_26350,map__26284_26381,map__26284_26382__$1,gline_26383,gcol_26384,name_26385,seq__26277_26375__$1,temp__5804__auto___26374,vec__26274_26358,column_26359,column_info_26360,vec__26245_26351,line_26352,columns_26353,inverted))
,cljs.core.sorted_map.call(null)));


var G__26386 = cljs.core.next.call(null,seq__26277_26375__$1);
var G__26387 = null;
var G__26388 = (0);
var G__26389 = (0);
seq__26277_26361 = G__26386;
chunk__26278_26362 = G__26387;
count__26279_26363 = G__26388;
i__26280_26364 = G__26389;
continue;
}
} else {
}
}
break;
}


var G__26390 = seq__26248_26354;
var G__26391 = chunk__26249_26355;
var G__26392 = count__26250_26356;
var G__26393 = (i__26251_26357 + (1));
seq__26248_26354 = G__26390;
chunk__26249_26355 = G__26391;
count__26250_26356 = G__26392;
i__26251_26357 = G__26393;
continue;
} else {
var temp__5804__auto___26394 = cljs.core.seq.call(null,seq__26248_26354);
if(temp__5804__auto___26394){
var seq__26248_26395__$1 = temp__5804__auto___26394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26248_26395__$1)){
var c__5565__auto___26396 = cljs.core.chunk_first.call(null,seq__26248_26395__$1);
var G__26397 = cljs.core.chunk_rest.call(null,seq__26248_26395__$1);
var G__26398 = c__5565__auto___26396;
var G__26399 = cljs.core.count.call(null,c__5565__auto___26396);
var G__26400 = (0);
seq__26248_26354 = G__26397;
chunk__26249_26355 = G__26398;
count__26250_26356 = G__26399;
i__26251_26357 = G__26400;
continue;
} else {
var vec__26285_26401 = cljs.core.first.call(null,seq__26248_26395__$1);
var column_26402 = cljs.core.nth.call(null,vec__26285_26401,(0),null);
var column_info_26403 = cljs.core.nth.call(null,vec__26285_26401,(1),null);
var seq__26288_26404 = cljs.core.seq.call(null,column_info_26403);
var chunk__26289_26405 = null;
var count__26290_26406 = (0);
var i__26291_26407 = (0);
while(true){
if((i__26291_26407 < count__26290_26406)){
var map__26294_26408 = cljs.core._nth.call(null,chunk__26289_26405,i__26291_26407);
var map__26294_26409__$1 = cljs.core.__destructure_map.call(null,map__26294_26408);
var gline_26410 = cljs.core.get.call(null,map__26294_26409__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26411 = cljs.core.get.call(null,map__26294_26409__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26412 = cljs.core.get.call(null,map__26294_26409__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26410], null),cljs.core.fnil.call(null,((function (seq__26288_26404,chunk__26289_26405,count__26290_26406,i__26291_26407,seq__26248_26354,chunk__26249_26355,count__26250_26356,i__26251_26357,seq__26139_26347,chunk__26140_26348,count__26141_26349,i__26142_26350,map__26294_26408,map__26294_26409__$1,gline_26410,gcol_26411,name_26412,vec__26285_26401,column_26402,column_info_26403,seq__26248_26395__$1,temp__5804__auto___26394,vec__26245_26351,line_26352,columns_26353,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26411], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26352,new cljs.core.Keyword(null,"col","col",-1959363084),column_26402,new cljs.core.Keyword(null,"name","name",1843675177),name_26412], null));
});})(seq__26288_26404,chunk__26289_26405,count__26290_26406,i__26291_26407,seq__26248_26354,chunk__26249_26355,count__26250_26356,i__26251_26357,seq__26139_26347,chunk__26140_26348,count__26141_26349,i__26142_26350,map__26294_26408,map__26294_26409__$1,gline_26410,gcol_26411,name_26412,vec__26285_26401,column_26402,column_info_26403,seq__26248_26395__$1,temp__5804__auto___26394,vec__26245_26351,line_26352,columns_26353,inverted))
,cljs.core.sorted_map.call(null)));


var G__26413 = seq__26288_26404;
var G__26414 = chunk__26289_26405;
var G__26415 = count__26290_26406;
var G__26416 = (i__26291_26407 + (1));
seq__26288_26404 = G__26413;
chunk__26289_26405 = G__26414;
count__26290_26406 = G__26415;
i__26291_26407 = G__26416;
continue;
} else {
var temp__5804__auto___26417__$1 = cljs.core.seq.call(null,seq__26288_26404);
if(temp__5804__auto___26417__$1){
var seq__26288_26418__$1 = temp__5804__auto___26417__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26288_26418__$1)){
var c__5565__auto___26419 = cljs.core.chunk_first.call(null,seq__26288_26418__$1);
var G__26420 = cljs.core.chunk_rest.call(null,seq__26288_26418__$1);
var G__26421 = c__5565__auto___26419;
var G__26422 = cljs.core.count.call(null,c__5565__auto___26419);
var G__26423 = (0);
seq__26288_26404 = G__26420;
chunk__26289_26405 = G__26421;
count__26290_26406 = G__26422;
i__26291_26407 = G__26423;
continue;
} else {
var map__26295_26424 = cljs.core.first.call(null,seq__26288_26418__$1);
var map__26295_26425__$1 = cljs.core.__destructure_map.call(null,map__26295_26424);
var gline_26426 = cljs.core.get.call(null,map__26295_26425__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26427 = cljs.core.get.call(null,map__26295_26425__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26428 = cljs.core.get.call(null,map__26295_26425__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26426], null),cljs.core.fnil.call(null,((function (seq__26288_26404,chunk__26289_26405,count__26290_26406,i__26291_26407,seq__26248_26354,chunk__26249_26355,count__26250_26356,i__26251_26357,seq__26139_26347,chunk__26140_26348,count__26141_26349,i__26142_26350,map__26295_26424,map__26295_26425__$1,gline_26426,gcol_26427,name_26428,seq__26288_26418__$1,temp__5804__auto___26417__$1,vec__26285_26401,column_26402,column_info_26403,seq__26248_26395__$1,temp__5804__auto___26394,vec__26245_26351,line_26352,columns_26353,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26427], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26352,new cljs.core.Keyword(null,"col","col",-1959363084),column_26402,new cljs.core.Keyword(null,"name","name",1843675177),name_26428], null));
});})(seq__26288_26404,chunk__26289_26405,count__26290_26406,i__26291_26407,seq__26248_26354,chunk__26249_26355,count__26250_26356,i__26251_26357,seq__26139_26347,chunk__26140_26348,count__26141_26349,i__26142_26350,map__26295_26424,map__26295_26425__$1,gline_26426,gcol_26427,name_26428,seq__26288_26418__$1,temp__5804__auto___26417__$1,vec__26285_26401,column_26402,column_info_26403,seq__26248_26395__$1,temp__5804__auto___26394,vec__26245_26351,line_26352,columns_26353,inverted))
,cljs.core.sorted_map.call(null)));


var G__26429 = cljs.core.next.call(null,seq__26288_26418__$1);
var G__26430 = null;
var G__26431 = (0);
var G__26432 = (0);
seq__26288_26404 = G__26429;
chunk__26289_26405 = G__26430;
count__26290_26406 = G__26431;
i__26291_26407 = G__26432;
continue;
}
} else {
}
}
break;
}


var G__26433 = cljs.core.next.call(null,seq__26248_26395__$1);
var G__26434 = null;
var G__26435 = (0);
var G__26436 = (0);
seq__26248_26354 = G__26433;
chunk__26249_26355 = G__26434;
count__26250_26356 = G__26435;
i__26251_26357 = G__26436;
continue;
}
} else {
}
}
break;
}


var G__26437 = seq__26139_26347;
var G__26438 = chunk__26140_26348;
var G__26439 = count__26141_26349;
var G__26440 = (i__26142_26350 + (1));
seq__26139_26347 = G__26437;
chunk__26140_26348 = G__26438;
count__26141_26349 = G__26439;
i__26142_26350 = G__26440;
continue;
} else {
var temp__5804__auto___26441 = cljs.core.seq.call(null,seq__26139_26347);
if(temp__5804__auto___26441){
var seq__26139_26442__$1 = temp__5804__auto___26441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26139_26442__$1)){
var c__5565__auto___26443 = cljs.core.chunk_first.call(null,seq__26139_26442__$1);
var G__26444 = cljs.core.chunk_rest.call(null,seq__26139_26442__$1);
var G__26445 = c__5565__auto___26443;
var G__26446 = cljs.core.count.call(null,c__5565__auto___26443);
var G__26447 = (0);
seq__26139_26347 = G__26444;
chunk__26140_26348 = G__26445;
count__26141_26349 = G__26446;
i__26142_26350 = G__26447;
continue;
} else {
var vec__26296_26448 = cljs.core.first.call(null,seq__26139_26442__$1);
var line_26449 = cljs.core.nth.call(null,vec__26296_26448,(0),null);
var columns_26450 = cljs.core.nth.call(null,vec__26296_26448,(1),null);
var seq__26299_26451 = cljs.core.seq.call(null,columns_26450);
var chunk__26300_26452 = null;
var count__26301_26453 = (0);
var i__26302_26454 = (0);
while(true){
if((i__26302_26454 < count__26301_26453)){
var vec__26325_26455 = cljs.core._nth.call(null,chunk__26300_26452,i__26302_26454);
var column_26456 = cljs.core.nth.call(null,vec__26325_26455,(0),null);
var column_info_26457 = cljs.core.nth.call(null,vec__26325_26455,(1),null);
var seq__26328_26458 = cljs.core.seq.call(null,column_info_26457);
var chunk__26329_26459 = null;
var count__26330_26460 = (0);
var i__26331_26461 = (0);
while(true){
if((i__26331_26461 < count__26330_26460)){
var map__26334_26462 = cljs.core._nth.call(null,chunk__26329_26459,i__26331_26461);
var map__26334_26463__$1 = cljs.core.__destructure_map.call(null,map__26334_26462);
var gline_26464 = cljs.core.get.call(null,map__26334_26463__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26465 = cljs.core.get.call(null,map__26334_26463__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26466 = cljs.core.get.call(null,map__26334_26463__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26464], null),cljs.core.fnil.call(null,((function (seq__26328_26458,chunk__26329_26459,count__26330_26460,i__26331_26461,seq__26299_26451,chunk__26300_26452,count__26301_26453,i__26302_26454,seq__26139_26347,chunk__26140_26348,count__26141_26349,i__26142_26350,map__26334_26462,map__26334_26463__$1,gline_26464,gcol_26465,name_26466,vec__26325_26455,column_26456,column_info_26457,vec__26296_26448,line_26449,columns_26450,seq__26139_26442__$1,temp__5804__auto___26441,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26465], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26449,new cljs.core.Keyword(null,"col","col",-1959363084),column_26456,new cljs.core.Keyword(null,"name","name",1843675177),name_26466], null));
});})(seq__26328_26458,chunk__26329_26459,count__26330_26460,i__26331_26461,seq__26299_26451,chunk__26300_26452,count__26301_26453,i__26302_26454,seq__26139_26347,chunk__26140_26348,count__26141_26349,i__26142_26350,map__26334_26462,map__26334_26463__$1,gline_26464,gcol_26465,name_26466,vec__26325_26455,column_26456,column_info_26457,vec__26296_26448,line_26449,columns_26450,seq__26139_26442__$1,temp__5804__auto___26441,inverted))
,cljs.core.sorted_map.call(null)));


var G__26467 = seq__26328_26458;
var G__26468 = chunk__26329_26459;
var G__26469 = count__26330_26460;
var G__26470 = (i__26331_26461 + (1));
seq__26328_26458 = G__26467;
chunk__26329_26459 = G__26468;
count__26330_26460 = G__26469;
i__26331_26461 = G__26470;
continue;
} else {
var temp__5804__auto___26471__$1 = cljs.core.seq.call(null,seq__26328_26458);
if(temp__5804__auto___26471__$1){
var seq__26328_26472__$1 = temp__5804__auto___26471__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26328_26472__$1)){
var c__5565__auto___26473 = cljs.core.chunk_first.call(null,seq__26328_26472__$1);
var G__26474 = cljs.core.chunk_rest.call(null,seq__26328_26472__$1);
var G__26475 = c__5565__auto___26473;
var G__26476 = cljs.core.count.call(null,c__5565__auto___26473);
var G__26477 = (0);
seq__26328_26458 = G__26474;
chunk__26329_26459 = G__26475;
count__26330_26460 = G__26476;
i__26331_26461 = G__26477;
continue;
} else {
var map__26335_26478 = cljs.core.first.call(null,seq__26328_26472__$1);
var map__26335_26479__$1 = cljs.core.__destructure_map.call(null,map__26335_26478);
var gline_26480 = cljs.core.get.call(null,map__26335_26479__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26481 = cljs.core.get.call(null,map__26335_26479__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26482 = cljs.core.get.call(null,map__26335_26479__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26480], null),cljs.core.fnil.call(null,((function (seq__26328_26458,chunk__26329_26459,count__26330_26460,i__26331_26461,seq__26299_26451,chunk__26300_26452,count__26301_26453,i__26302_26454,seq__26139_26347,chunk__26140_26348,count__26141_26349,i__26142_26350,map__26335_26478,map__26335_26479__$1,gline_26480,gcol_26481,name_26482,seq__26328_26472__$1,temp__5804__auto___26471__$1,vec__26325_26455,column_26456,column_info_26457,vec__26296_26448,line_26449,columns_26450,seq__26139_26442__$1,temp__5804__auto___26441,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26481], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26449,new cljs.core.Keyword(null,"col","col",-1959363084),column_26456,new cljs.core.Keyword(null,"name","name",1843675177),name_26482], null));
});})(seq__26328_26458,chunk__26329_26459,count__26330_26460,i__26331_26461,seq__26299_26451,chunk__26300_26452,count__26301_26453,i__26302_26454,seq__26139_26347,chunk__26140_26348,count__26141_26349,i__26142_26350,map__26335_26478,map__26335_26479__$1,gline_26480,gcol_26481,name_26482,seq__26328_26472__$1,temp__5804__auto___26471__$1,vec__26325_26455,column_26456,column_info_26457,vec__26296_26448,line_26449,columns_26450,seq__26139_26442__$1,temp__5804__auto___26441,inverted))
,cljs.core.sorted_map.call(null)));


var G__26483 = cljs.core.next.call(null,seq__26328_26472__$1);
var G__26484 = null;
var G__26485 = (0);
var G__26486 = (0);
seq__26328_26458 = G__26483;
chunk__26329_26459 = G__26484;
count__26330_26460 = G__26485;
i__26331_26461 = G__26486;
continue;
}
} else {
}
}
break;
}


var G__26487 = seq__26299_26451;
var G__26488 = chunk__26300_26452;
var G__26489 = count__26301_26453;
var G__26490 = (i__26302_26454 + (1));
seq__26299_26451 = G__26487;
chunk__26300_26452 = G__26488;
count__26301_26453 = G__26489;
i__26302_26454 = G__26490;
continue;
} else {
var temp__5804__auto___26491__$1 = cljs.core.seq.call(null,seq__26299_26451);
if(temp__5804__auto___26491__$1){
var seq__26299_26492__$1 = temp__5804__auto___26491__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26299_26492__$1)){
var c__5565__auto___26493 = cljs.core.chunk_first.call(null,seq__26299_26492__$1);
var G__26494 = cljs.core.chunk_rest.call(null,seq__26299_26492__$1);
var G__26495 = c__5565__auto___26493;
var G__26496 = cljs.core.count.call(null,c__5565__auto___26493);
var G__26497 = (0);
seq__26299_26451 = G__26494;
chunk__26300_26452 = G__26495;
count__26301_26453 = G__26496;
i__26302_26454 = G__26497;
continue;
} else {
var vec__26336_26498 = cljs.core.first.call(null,seq__26299_26492__$1);
var column_26499 = cljs.core.nth.call(null,vec__26336_26498,(0),null);
var column_info_26500 = cljs.core.nth.call(null,vec__26336_26498,(1),null);
var seq__26339_26501 = cljs.core.seq.call(null,column_info_26500);
var chunk__26340_26502 = null;
var count__26341_26503 = (0);
var i__26342_26504 = (0);
while(true){
if((i__26342_26504 < count__26341_26503)){
var map__26345_26505 = cljs.core._nth.call(null,chunk__26340_26502,i__26342_26504);
var map__26345_26506__$1 = cljs.core.__destructure_map.call(null,map__26345_26505);
var gline_26507 = cljs.core.get.call(null,map__26345_26506__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26508 = cljs.core.get.call(null,map__26345_26506__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26509 = cljs.core.get.call(null,map__26345_26506__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26507], null),cljs.core.fnil.call(null,((function (seq__26339_26501,chunk__26340_26502,count__26341_26503,i__26342_26504,seq__26299_26451,chunk__26300_26452,count__26301_26453,i__26302_26454,seq__26139_26347,chunk__26140_26348,count__26141_26349,i__26142_26350,map__26345_26505,map__26345_26506__$1,gline_26507,gcol_26508,name_26509,vec__26336_26498,column_26499,column_info_26500,seq__26299_26492__$1,temp__5804__auto___26491__$1,vec__26296_26448,line_26449,columns_26450,seq__26139_26442__$1,temp__5804__auto___26441,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26508], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26449,new cljs.core.Keyword(null,"col","col",-1959363084),column_26499,new cljs.core.Keyword(null,"name","name",1843675177),name_26509], null));
});})(seq__26339_26501,chunk__26340_26502,count__26341_26503,i__26342_26504,seq__26299_26451,chunk__26300_26452,count__26301_26453,i__26302_26454,seq__26139_26347,chunk__26140_26348,count__26141_26349,i__26142_26350,map__26345_26505,map__26345_26506__$1,gline_26507,gcol_26508,name_26509,vec__26336_26498,column_26499,column_info_26500,seq__26299_26492__$1,temp__5804__auto___26491__$1,vec__26296_26448,line_26449,columns_26450,seq__26139_26442__$1,temp__5804__auto___26441,inverted))
,cljs.core.sorted_map.call(null)));


var G__26510 = seq__26339_26501;
var G__26511 = chunk__26340_26502;
var G__26512 = count__26341_26503;
var G__26513 = (i__26342_26504 + (1));
seq__26339_26501 = G__26510;
chunk__26340_26502 = G__26511;
count__26341_26503 = G__26512;
i__26342_26504 = G__26513;
continue;
} else {
var temp__5804__auto___26514__$2 = cljs.core.seq.call(null,seq__26339_26501);
if(temp__5804__auto___26514__$2){
var seq__26339_26515__$1 = temp__5804__auto___26514__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26339_26515__$1)){
var c__5565__auto___26516 = cljs.core.chunk_first.call(null,seq__26339_26515__$1);
var G__26517 = cljs.core.chunk_rest.call(null,seq__26339_26515__$1);
var G__26518 = c__5565__auto___26516;
var G__26519 = cljs.core.count.call(null,c__5565__auto___26516);
var G__26520 = (0);
seq__26339_26501 = G__26517;
chunk__26340_26502 = G__26518;
count__26341_26503 = G__26519;
i__26342_26504 = G__26520;
continue;
} else {
var map__26346_26521 = cljs.core.first.call(null,seq__26339_26515__$1);
var map__26346_26522__$1 = cljs.core.__destructure_map.call(null,map__26346_26521);
var gline_26523 = cljs.core.get.call(null,map__26346_26522__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26524 = cljs.core.get.call(null,map__26346_26522__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26525 = cljs.core.get.call(null,map__26346_26522__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26523], null),cljs.core.fnil.call(null,((function (seq__26339_26501,chunk__26340_26502,count__26341_26503,i__26342_26504,seq__26299_26451,chunk__26300_26452,count__26301_26453,i__26302_26454,seq__26139_26347,chunk__26140_26348,count__26141_26349,i__26142_26350,map__26346_26521,map__26346_26522__$1,gline_26523,gcol_26524,name_26525,seq__26339_26515__$1,temp__5804__auto___26514__$2,vec__26336_26498,column_26499,column_info_26500,seq__26299_26492__$1,temp__5804__auto___26491__$1,vec__26296_26448,line_26449,columns_26450,seq__26139_26442__$1,temp__5804__auto___26441,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26524], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26449,new cljs.core.Keyword(null,"col","col",-1959363084),column_26499,new cljs.core.Keyword(null,"name","name",1843675177),name_26525], null));
});})(seq__26339_26501,chunk__26340_26502,count__26341_26503,i__26342_26504,seq__26299_26451,chunk__26300_26452,count__26301_26453,i__26302_26454,seq__26139_26347,chunk__26140_26348,count__26141_26349,i__26142_26350,map__26346_26521,map__26346_26522__$1,gline_26523,gcol_26524,name_26525,seq__26339_26515__$1,temp__5804__auto___26514__$2,vec__26336_26498,column_26499,column_info_26500,seq__26299_26492__$1,temp__5804__auto___26491__$1,vec__26296_26448,line_26449,columns_26450,seq__26139_26442__$1,temp__5804__auto___26441,inverted))
,cljs.core.sorted_map.call(null)));


var G__26526 = cljs.core.next.call(null,seq__26339_26515__$1);
var G__26527 = null;
var G__26528 = (0);
var G__26529 = (0);
seq__26339_26501 = G__26526;
chunk__26340_26502 = G__26527;
count__26341_26503 = G__26528;
i__26342_26504 = G__26529;
continue;
}
} else {
}
}
break;
}


var G__26530 = cljs.core.next.call(null,seq__26299_26492__$1);
var G__26531 = null;
var G__26532 = (0);
var G__26533 = (0);
seq__26299_26451 = G__26530;
chunk__26300_26452 = G__26531;
count__26301_26453 = G__26532;
i__26302_26454 = G__26533;
continue;
}
} else {
}
}
break;
}


var G__26534 = cljs.core.next.call(null,seq__26139_26442__$1);
var G__26535 = null;
var G__26536 = (0);
var G__26537 = (0);
seq__26139_26347 = G__26534;
chunk__26140_26348 = G__26535;
count__26141_26349 = G__26536;
i__26142_26350 = G__26537;
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

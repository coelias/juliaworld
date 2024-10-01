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
return cljs.core.reduce.call(null,(function (m,p__22827){
var vec__22828 = p__22827;
var i = cljs.core.nth.call(null,vec__22828,(0),null);
var v = cljs.core.nth.call(null,vec__22828,(1),null);
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
var vec__22831 = seg;
var gcol = cljs.core.nth.call(null,vec__22831,(0),null);
var source = cljs.core.nth.call(null,vec__22831,(1),null);
var line = cljs.core.nth.call(null,vec__22831,(2),null);
var col = cljs.core.nth.call(null,vec__22831,(3),null);
var name = cljs.core.nth.call(null,vec__22831,(4),null);
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
var vec__22834 = seg;
var gcol = cljs.core.nth.call(null,vec__22834,(0),null);
var source = cljs.core.nth.call(null,vec__22834,(1),null);
var line = cljs.core.nth.call(null,vec__22834,(2),null);
var col = cljs.core.nth.call(null,vec__22834,(3),null);
var name = cljs.core.nth.call(null,vec__22834,(4),null);
var vec__22837 = relseg;
var rgcol = cljs.core.nth.call(null,vec__22837,(0),null);
var rsource = cljs.core.nth.call(null,vec__22837,(1),null);
var rline = cljs.core.nth.call(null,vec__22837,(2),null);
var rcol = cljs.core.nth.call(null,vec__22837,(3),null);
var rname = cljs.core.nth.call(null,vec__22837,(4),null);
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
var map__22840 = segmap;
var map__22840__$1 = cljs.core.__destructure_map.call(null,map__22840);
var gcol = cljs.core.get.call(null,map__22840__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__22840__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__22840__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__22840__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__22840__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__22842 = arguments.length;
switch (G__22842) {
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
var vec__22846 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__22850 = cljs.core.next.call(null,segs__$1);
var G__22851 = nrelseg;
var G__22852 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__22850;
relseg__$1 = G__22851;
result__$1 = G__22852;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__22846,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__22846,(1),null);
var G__22853 = (gline + (1));
var G__22854 = cljs.core.next.call(null,lines__$1);
var G__22855 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__22856 = result__$1;
gline = G__22853;
lines__$1 = G__22854;
relseg = G__22855;
result = G__22856;
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
var map__22858 = segmap;
var map__22858__$1 = cljs.core.__destructure_map.call(null,map__22858);
var gcol = cljs.core.get.call(null,map__22858__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__22858__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__22858__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__22858__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__22858__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__22857_SHARP_){
return cljs.core.conj.call(null,p1__22857_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__22860 = arguments.length;
switch (G__22860) {
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
var vec__22864 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__22868 = cljs.core.next.call(null,segs__$1);
var G__22869 = nrelseg;
var G__22870 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__22868;
relseg__$1 = G__22869;
result__$1 = G__22870;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__22864,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__22864,(1),null);
var G__22871 = (gline + (1));
var G__22872 = cljs.core.next.call(null,lines__$1);
var G__22873 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__22874 = result__$1;
gline = G__22871;
lines__$1 = G__22872;
relseg = G__22873;
result = G__22874;
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
cljs.core.swap_BANG_.call(null,relseg,(function (p__22875){
var vec__22876 = p__22875;
var _ = cljs.core.nth.call(null,vec__22876,(0),null);
var source = cljs.core.nth.call(null,vec__22876,(1),null);
var line = cljs.core.nth.call(null,vec__22876,(2),null);
var col = cljs.core.nth.call(null,vec__22876,(3),null);
var name = cljs.core.nth.call(null,vec__22876,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__22879){
var vec__22880 = p__22879;
var gcol = cljs.core.nth.call(null,vec__22880,(0),null);
var sidx = cljs.core.nth.call(null,vec__22880,(1),null);
var line = cljs.core.nth.call(null,vec__22880,(2),null);
var col = cljs.core.nth.call(null,vec__22880,(3),null);
var name = cljs.core.nth.call(null,vec__22880,(4),null);
var seg = vec__22880;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__22883){
var vec__22884 = p__22883;
var _ = cljs.core.nth.call(null,vec__22884,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22884,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__22884,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__22884,(3),null);
var lname = cljs.core.nth.call(null,vec__22884,(4),null);
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
var seq__22890 = cljs.core.seq.call(null,infos);
var chunk__22891 = null;
var count__22892 = (0);
var i__22893 = (0);
while(true){
if((i__22893 < count__22892)){
var info = cljs.core._nth.call(null,chunk__22891,i__22893);
var segv_23244 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_23245 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23246 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_23245 > (lc_23246 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__22890,chunk__22891,count__22892,i__22893,segv_23244,gline_23245,lc_23246,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_23245 - (lc_23246 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23244], null));
});})(seq__22890,chunk__22891,count__22892,i__22893,segv_23244,gline_23245,lc_23246,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__22890,chunk__22891,count__22892,i__22893,segv_23244,gline_23245,lc_23246,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23245], null),cljs.core.conj,segv_23244);
});})(seq__22890,chunk__22891,count__22892,i__22893,segv_23244,gline_23245,lc_23246,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23247 = seq__22890;
var G__23248 = chunk__22891;
var G__23249 = count__22892;
var G__23250 = (i__22893 + (1));
seq__22890 = G__23247;
chunk__22891 = G__23248;
count__22892 = G__23249;
i__22893 = G__23250;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__22890);
if(temp__5804__auto__){
var seq__22890__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22890__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__22890__$1);
var G__23251 = cljs.core.chunk_rest.call(null,seq__22890__$1);
var G__23252 = c__5565__auto__;
var G__23253 = cljs.core.count.call(null,c__5565__auto__);
var G__23254 = (0);
seq__22890 = G__23251;
chunk__22891 = G__23252;
count__22892 = G__23253;
i__22893 = G__23254;
continue;
} else {
var info = cljs.core.first.call(null,seq__22890__$1);
var segv_23255 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_23256 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_23257 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_23256 > (lc_23257 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__22890,chunk__22891,count__22892,i__22893,segv_23255,gline_23256,lc_23257,info,seq__22890__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_23256 - (lc_23257 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_23255], null));
});})(seq__22890,chunk__22891,count__22892,i__22893,segv_23255,gline_23256,lc_23257,info,seq__22890__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__22890,chunk__22891,count__22892,i__22893,segv_23255,gline_23256,lc_23257,info,seq__22890__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23256], null),cljs.core.conj,segv_23255);
});})(seq__22890,chunk__22891,count__22892,i__22893,segv_23255,gline_23256,lc_23257,info,seq__22890__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__23258 = cljs.core.next.call(null,seq__22890__$1);
var G__23259 = null;
var G__23260 = (0);
var G__23261 = (0);
seq__22890 = G__23258;
chunk__22891 = G__23259;
count__22892 = G__23260;
i__22893 = G__23261;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__22894_23262 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__22895_23263 = null;
var count__22896_23264 = (0);
var i__22897_23265 = (0);
while(true){
if((i__22897_23265 < count__22896_23264)){
var vec__23070_23266 = cljs.core._nth.call(null,chunk__22895_23263,i__22897_23265);
var source_idx_23267 = cljs.core.nth.call(null,vec__23070_23266,(0),null);
var vec__23073_23268 = cljs.core.nth.call(null,vec__23070_23266,(1),null);
var __23269 = cljs.core.nth.call(null,vec__23073_23268,(0),null);
var lines_23270__$1 = cljs.core.nth.call(null,vec__23073_23268,(1),null);
var seq__23076_23271 = cljs.core.seq.call(null,lines_23270__$1);
var chunk__23077_23272 = null;
var count__23078_23273 = (0);
var i__23079_23274 = (0);
while(true){
if((i__23079_23274 < count__23078_23273)){
var vec__23118_23275 = cljs.core._nth.call(null,chunk__23077_23272,i__23079_23274);
var line_23276 = cljs.core.nth.call(null,vec__23118_23275,(0),null);
var cols_23277 = cljs.core.nth.call(null,vec__23118_23275,(1),null);
var seq__23121_23278 = cljs.core.seq.call(null,cols_23277);
var chunk__23122_23279 = null;
var count__23123_23280 = (0);
var i__23124_23281 = (0);
while(true){
if((i__23124_23281 < count__23123_23280)){
var vec__23131_23282 = cljs.core._nth.call(null,chunk__23122_23279,i__23124_23281);
var col_23283 = cljs.core.nth.call(null,vec__23131_23282,(0),null);
var infos_23284 = cljs.core.nth.call(null,vec__23131_23282,(1),null);
encode_cols.call(null,infos_23284,source_idx_23267,line_23276,col_23283);


var G__23285 = seq__23121_23278;
var G__23286 = chunk__23122_23279;
var G__23287 = count__23123_23280;
var G__23288 = (i__23124_23281 + (1));
seq__23121_23278 = G__23285;
chunk__23122_23279 = G__23286;
count__23123_23280 = G__23287;
i__23124_23281 = G__23288;
continue;
} else {
var temp__5804__auto___23289 = cljs.core.seq.call(null,seq__23121_23278);
if(temp__5804__auto___23289){
var seq__23121_23290__$1 = temp__5804__auto___23289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23121_23290__$1)){
var c__5565__auto___23291 = cljs.core.chunk_first.call(null,seq__23121_23290__$1);
var G__23292 = cljs.core.chunk_rest.call(null,seq__23121_23290__$1);
var G__23293 = c__5565__auto___23291;
var G__23294 = cljs.core.count.call(null,c__5565__auto___23291);
var G__23295 = (0);
seq__23121_23278 = G__23292;
chunk__23122_23279 = G__23293;
count__23123_23280 = G__23294;
i__23124_23281 = G__23295;
continue;
} else {
var vec__23134_23296 = cljs.core.first.call(null,seq__23121_23290__$1);
var col_23297 = cljs.core.nth.call(null,vec__23134_23296,(0),null);
var infos_23298 = cljs.core.nth.call(null,vec__23134_23296,(1),null);
encode_cols.call(null,infos_23298,source_idx_23267,line_23276,col_23297);


var G__23299 = cljs.core.next.call(null,seq__23121_23290__$1);
var G__23300 = null;
var G__23301 = (0);
var G__23302 = (0);
seq__23121_23278 = G__23299;
chunk__23122_23279 = G__23300;
count__23123_23280 = G__23301;
i__23124_23281 = G__23302;
continue;
}
} else {
}
}
break;
}


var G__23303 = seq__23076_23271;
var G__23304 = chunk__23077_23272;
var G__23305 = count__23078_23273;
var G__23306 = (i__23079_23274 + (1));
seq__23076_23271 = G__23303;
chunk__23077_23272 = G__23304;
count__23078_23273 = G__23305;
i__23079_23274 = G__23306;
continue;
} else {
var temp__5804__auto___23307 = cljs.core.seq.call(null,seq__23076_23271);
if(temp__5804__auto___23307){
var seq__23076_23308__$1 = temp__5804__auto___23307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23076_23308__$1)){
var c__5565__auto___23309 = cljs.core.chunk_first.call(null,seq__23076_23308__$1);
var G__23310 = cljs.core.chunk_rest.call(null,seq__23076_23308__$1);
var G__23311 = c__5565__auto___23309;
var G__23312 = cljs.core.count.call(null,c__5565__auto___23309);
var G__23313 = (0);
seq__23076_23271 = G__23310;
chunk__23077_23272 = G__23311;
count__23078_23273 = G__23312;
i__23079_23274 = G__23313;
continue;
} else {
var vec__23137_23314 = cljs.core.first.call(null,seq__23076_23308__$1);
var line_23315 = cljs.core.nth.call(null,vec__23137_23314,(0),null);
var cols_23316 = cljs.core.nth.call(null,vec__23137_23314,(1),null);
var seq__23140_23317 = cljs.core.seq.call(null,cols_23316);
var chunk__23141_23318 = null;
var count__23142_23319 = (0);
var i__23143_23320 = (0);
while(true){
if((i__23143_23320 < count__23142_23319)){
var vec__23150_23321 = cljs.core._nth.call(null,chunk__23141_23318,i__23143_23320);
var col_23322 = cljs.core.nth.call(null,vec__23150_23321,(0),null);
var infos_23323 = cljs.core.nth.call(null,vec__23150_23321,(1),null);
encode_cols.call(null,infos_23323,source_idx_23267,line_23315,col_23322);


var G__23324 = seq__23140_23317;
var G__23325 = chunk__23141_23318;
var G__23326 = count__23142_23319;
var G__23327 = (i__23143_23320 + (1));
seq__23140_23317 = G__23324;
chunk__23141_23318 = G__23325;
count__23142_23319 = G__23326;
i__23143_23320 = G__23327;
continue;
} else {
var temp__5804__auto___23328__$1 = cljs.core.seq.call(null,seq__23140_23317);
if(temp__5804__auto___23328__$1){
var seq__23140_23329__$1 = temp__5804__auto___23328__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23140_23329__$1)){
var c__5565__auto___23330 = cljs.core.chunk_first.call(null,seq__23140_23329__$1);
var G__23331 = cljs.core.chunk_rest.call(null,seq__23140_23329__$1);
var G__23332 = c__5565__auto___23330;
var G__23333 = cljs.core.count.call(null,c__5565__auto___23330);
var G__23334 = (0);
seq__23140_23317 = G__23331;
chunk__23141_23318 = G__23332;
count__23142_23319 = G__23333;
i__23143_23320 = G__23334;
continue;
} else {
var vec__23153_23335 = cljs.core.first.call(null,seq__23140_23329__$1);
var col_23336 = cljs.core.nth.call(null,vec__23153_23335,(0),null);
var infos_23337 = cljs.core.nth.call(null,vec__23153_23335,(1),null);
encode_cols.call(null,infos_23337,source_idx_23267,line_23315,col_23336);


var G__23338 = cljs.core.next.call(null,seq__23140_23329__$1);
var G__23339 = null;
var G__23340 = (0);
var G__23341 = (0);
seq__23140_23317 = G__23338;
chunk__23141_23318 = G__23339;
count__23142_23319 = G__23340;
i__23143_23320 = G__23341;
continue;
}
} else {
}
}
break;
}


var G__23342 = cljs.core.next.call(null,seq__23076_23308__$1);
var G__23343 = null;
var G__23344 = (0);
var G__23345 = (0);
seq__23076_23271 = G__23342;
chunk__23077_23272 = G__23343;
count__23078_23273 = G__23344;
i__23079_23274 = G__23345;
continue;
}
} else {
}
}
break;
}


var G__23346 = seq__22894_23262;
var G__23347 = chunk__22895_23263;
var G__23348 = count__22896_23264;
var G__23349 = (i__22897_23265 + (1));
seq__22894_23262 = G__23346;
chunk__22895_23263 = G__23347;
count__22896_23264 = G__23348;
i__22897_23265 = G__23349;
continue;
} else {
var temp__5804__auto___23350 = cljs.core.seq.call(null,seq__22894_23262);
if(temp__5804__auto___23350){
var seq__22894_23351__$1 = temp__5804__auto___23350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22894_23351__$1)){
var c__5565__auto___23352 = cljs.core.chunk_first.call(null,seq__22894_23351__$1);
var G__23353 = cljs.core.chunk_rest.call(null,seq__22894_23351__$1);
var G__23354 = c__5565__auto___23352;
var G__23355 = cljs.core.count.call(null,c__5565__auto___23352);
var G__23356 = (0);
seq__22894_23262 = G__23353;
chunk__22895_23263 = G__23354;
count__22896_23264 = G__23355;
i__22897_23265 = G__23356;
continue;
} else {
var vec__23156_23357 = cljs.core.first.call(null,seq__22894_23351__$1);
var source_idx_23358 = cljs.core.nth.call(null,vec__23156_23357,(0),null);
var vec__23159_23359 = cljs.core.nth.call(null,vec__23156_23357,(1),null);
var __23360 = cljs.core.nth.call(null,vec__23159_23359,(0),null);
var lines_23361__$1 = cljs.core.nth.call(null,vec__23159_23359,(1),null);
var seq__23162_23362 = cljs.core.seq.call(null,lines_23361__$1);
var chunk__23163_23363 = null;
var count__23164_23364 = (0);
var i__23165_23365 = (0);
while(true){
if((i__23165_23365 < count__23164_23364)){
var vec__23204_23366 = cljs.core._nth.call(null,chunk__23163_23363,i__23165_23365);
var line_23367 = cljs.core.nth.call(null,vec__23204_23366,(0),null);
var cols_23368 = cljs.core.nth.call(null,vec__23204_23366,(1),null);
var seq__23207_23369 = cljs.core.seq.call(null,cols_23368);
var chunk__23208_23370 = null;
var count__23209_23371 = (0);
var i__23210_23372 = (0);
while(true){
if((i__23210_23372 < count__23209_23371)){
var vec__23217_23373 = cljs.core._nth.call(null,chunk__23208_23370,i__23210_23372);
var col_23374 = cljs.core.nth.call(null,vec__23217_23373,(0),null);
var infos_23375 = cljs.core.nth.call(null,vec__23217_23373,(1),null);
encode_cols.call(null,infos_23375,source_idx_23358,line_23367,col_23374);


var G__23376 = seq__23207_23369;
var G__23377 = chunk__23208_23370;
var G__23378 = count__23209_23371;
var G__23379 = (i__23210_23372 + (1));
seq__23207_23369 = G__23376;
chunk__23208_23370 = G__23377;
count__23209_23371 = G__23378;
i__23210_23372 = G__23379;
continue;
} else {
var temp__5804__auto___23380__$1 = cljs.core.seq.call(null,seq__23207_23369);
if(temp__5804__auto___23380__$1){
var seq__23207_23381__$1 = temp__5804__auto___23380__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23207_23381__$1)){
var c__5565__auto___23382 = cljs.core.chunk_first.call(null,seq__23207_23381__$1);
var G__23383 = cljs.core.chunk_rest.call(null,seq__23207_23381__$1);
var G__23384 = c__5565__auto___23382;
var G__23385 = cljs.core.count.call(null,c__5565__auto___23382);
var G__23386 = (0);
seq__23207_23369 = G__23383;
chunk__23208_23370 = G__23384;
count__23209_23371 = G__23385;
i__23210_23372 = G__23386;
continue;
} else {
var vec__23220_23387 = cljs.core.first.call(null,seq__23207_23381__$1);
var col_23388 = cljs.core.nth.call(null,vec__23220_23387,(0),null);
var infos_23389 = cljs.core.nth.call(null,vec__23220_23387,(1),null);
encode_cols.call(null,infos_23389,source_idx_23358,line_23367,col_23388);


var G__23390 = cljs.core.next.call(null,seq__23207_23381__$1);
var G__23391 = null;
var G__23392 = (0);
var G__23393 = (0);
seq__23207_23369 = G__23390;
chunk__23208_23370 = G__23391;
count__23209_23371 = G__23392;
i__23210_23372 = G__23393;
continue;
}
} else {
}
}
break;
}


var G__23394 = seq__23162_23362;
var G__23395 = chunk__23163_23363;
var G__23396 = count__23164_23364;
var G__23397 = (i__23165_23365 + (1));
seq__23162_23362 = G__23394;
chunk__23163_23363 = G__23395;
count__23164_23364 = G__23396;
i__23165_23365 = G__23397;
continue;
} else {
var temp__5804__auto___23398__$1 = cljs.core.seq.call(null,seq__23162_23362);
if(temp__5804__auto___23398__$1){
var seq__23162_23399__$1 = temp__5804__auto___23398__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23162_23399__$1)){
var c__5565__auto___23400 = cljs.core.chunk_first.call(null,seq__23162_23399__$1);
var G__23401 = cljs.core.chunk_rest.call(null,seq__23162_23399__$1);
var G__23402 = c__5565__auto___23400;
var G__23403 = cljs.core.count.call(null,c__5565__auto___23400);
var G__23404 = (0);
seq__23162_23362 = G__23401;
chunk__23163_23363 = G__23402;
count__23164_23364 = G__23403;
i__23165_23365 = G__23404;
continue;
} else {
var vec__23223_23405 = cljs.core.first.call(null,seq__23162_23399__$1);
var line_23406 = cljs.core.nth.call(null,vec__23223_23405,(0),null);
var cols_23407 = cljs.core.nth.call(null,vec__23223_23405,(1),null);
var seq__23226_23408 = cljs.core.seq.call(null,cols_23407);
var chunk__23227_23409 = null;
var count__23228_23410 = (0);
var i__23229_23411 = (0);
while(true){
if((i__23229_23411 < count__23228_23410)){
var vec__23236_23412 = cljs.core._nth.call(null,chunk__23227_23409,i__23229_23411);
var col_23413 = cljs.core.nth.call(null,vec__23236_23412,(0),null);
var infos_23414 = cljs.core.nth.call(null,vec__23236_23412,(1),null);
encode_cols.call(null,infos_23414,source_idx_23358,line_23406,col_23413);


var G__23415 = seq__23226_23408;
var G__23416 = chunk__23227_23409;
var G__23417 = count__23228_23410;
var G__23418 = (i__23229_23411 + (1));
seq__23226_23408 = G__23415;
chunk__23227_23409 = G__23416;
count__23228_23410 = G__23417;
i__23229_23411 = G__23418;
continue;
} else {
var temp__5804__auto___23419__$2 = cljs.core.seq.call(null,seq__23226_23408);
if(temp__5804__auto___23419__$2){
var seq__23226_23420__$1 = temp__5804__auto___23419__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23226_23420__$1)){
var c__5565__auto___23421 = cljs.core.chunk_first.call(null,seq__23226_23420__$1);
var G__23422 = cljs.core.chunk_rest.call(null,seq__23226_23420__$1);
var G__23423 = c__5565__auto___23421;
var G__23424 = cljs.core.count.call(null,c__5565__auto___23421);
var G__23425 = (0);
seq__23226_23408 = G__23422;
chunk__23227_23409 = G__23423;
count__23228_23410 = G__23424;
i__23229_23411 = G__23425;
continue;
} else {
var vec__23239_23426 = cljs.core.first.call(null,seq__23226_23420__$1);
var col_23427 = cljs.core.nth.call(null,vec__23239_23426,(0),null);
var infos_23428 = cljs.core.nth.call(null,vec__23239_23426,(1),null);
encode_cols.call(null,infos_23428,source_idx_23358,line_23406,col_23427);


var G__23429 = cljs.core.next.call(null,seq__23226_23420__$1);
var G__23430 = null;
var G__23431 = (0);
var G__23432 = (0);
seq__23226_23408 = G__23429;
chunk__23227_23409 = G__23430;
count__23228_23410 = G__23431;
i__23229_23411 = G__23432;
continue;
}
} else {
}
}
break;
}


var G__23433 = cljs.core.next.call(null,seq__23162_23399__$1);
var G__23434 = null;
var G__23435 = (0);
var G__23436 = (0);
seq__23162_23362 = G__23433;
chunk__23163_23363 = G__23434;
count__23164_23364 = G__23435;
i__23165_23365 = G__23436;
continue;
}
} else {
}
}
break;
}


var G__23437 = cljs.core.next.call(null,seq__22894_23351__$1);
var G__23438 = null;
var G__23439 = (0);
var G__23440 = (0);
seq__22894_23262 = G__23437;
chunk__22895_23263 = G__23438;
count__22896_23264 = G__23439;
i__22897_23265 = G__23440;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__23242 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__22887_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22887_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__22888_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__22888_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__22889_SHARP_){
return clojure.string.join.call(null,",",p1__22889_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__23243 = G__23242;
cljs.source_map.goog$module$goog$object.set.call(null,G__23243,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__23243;
} else {
return G__23242;
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
var vec__23441 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__23441,(0),null);
var col_map = cljs.core.nth.call(null,vec__23441,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__23444 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__23444,(0),null);
var infos = cljs.core.nth.call(null,vec__23444,(1),null);
var G__23449 = cljs.core.next.call(null,col_map_seq);
var G__23450 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__23444,col,infos,vec__23441,line,col_map){
return (function (v,p__23447){
var map__23448 = p__23447;
var map__23448__$1 = cljs.core.__destructure_map.call(null,map__23448);
var gline = cljs.core.get.call(null,map__23448__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__23448__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__23444,col,infos,vec__23441,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__23449;
new_cols = G__23450;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__23451 = cljs.core.next.call(null,line_map_seq);
var G__23452 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__23451;
new_lines = G__23452;
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
var seq__23453_23661 = cljs.core.seq.call(null,reverse_map);
var chunk__23454_23662 = null;
var count__23455_23663 = (0);
var i__23456_23664 = (0);
while(true){
if((i__23456_23664 < count__23455_23663)){
var vec__23559_23665 = cljs.core._nth.call(null,chunk__23454_23662,i__23456_23664);
var line_23666 = cljs.core.nth.call(null,vec__23559_23665,(0),null);
var columns_23667 = cljs.core.nth.call(null,vec__23559_23665,(1),null);
var seq__23562_23668 = cljs.core.seq.call(null,columns_23667);
var chunk__23563_23669 = null;
var count__23564_23670 = (0);
var i__23565_23671 = (0);
while(true){
if((i__23565_23671 < count__23564_23670)){
var vec__23588_23672 = cljs.core._nth.call(null,chunk__23563_23669,i__23565_23671);
var column_23673 = cljs.core.nth.call(null,vec__23588_23672,(0),null);
var column_info_23674 = cljs.core.nth.call(null,vec__23588_23672,(1),null);
var seq__23591_23675 = cljs.core.seq.call(null,column_info_23674);
var chunk__23592_23676 = null;
var count__23593_23677 = (0);
var i__23594_23678 = (0);
while(true){
if((i__23594_23678 < count__23593_23677)){
var map__23597_23679 = cljs.core._nth.call(null,chunk__23592_23676,i__23594_23678);
var map__23597_23680__$1 = cljs.core.__destructure_map.call(null,map__23597_23679);
var gline_23681 = cljs.core.get.call(null,map__23597_23680__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23682 = cljs.core.get.call(null,map__23597_23680__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23683 = cljs.core.get.call(null,map__23597_23680__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23681], null),cljs.core.fnil.call(null,((function (seq__23591_23675,chunk__23592_23676,count__23593_23677,i__23594_23678,seq__23562_23668,chunk__23563_23669,count__23564_23670,i__23565_23671,seq__23453_23661,chunk__23454_23662,count__23455_23663,i__23456_23664,map__23597_23679,map__23597_23680__$1,gline_23681,gcol_23682,name_23683,vec__23588_23672,column_23673,column_info_23674,vec__23559_23665,line_23666,columns_23667,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23682], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23666,new cljs.core.Keyword(null,"col","col",-1959363084),column_23673,new cljs.core.Keyword(null,"name","name",1843675177),name_23683], null));
});})(seq__23591_23675,chunk__23592_23676,count__23593_23677,i__23594_23678,seq__23562_23668,chunk__23563_23669,count__23564_23670,i__23565_23671,seq__23453_23661,chunk__23454_23662,count__23455_23663,i__23456_23664,map__23597_23679,map__23597_23680__$1,gline_23681,gcol_23682,name_23683,vec__23588_23672,column_23673,column_info_23674,vec__23559_23665,line_23666,columns_23667,inverted))
,cljs.core.sorted_map.call(null)));


var G__23684 = seq__23591_23675;
var G__23685 = chunk__23592_23676;
var G__23686 = count__23593_23677;
var G__23687 = (i__23594_23678 + (1));
seq__23591_23675 = G__23684;
chunk__23592_23676 = G__23685;
count__23593_23677 = G__23686;
i__23594_23678 = G__23687;
continue;
} else {
var temp__5804__auto___23688 = cljs.core.seq.call(null,seq__23591_23675);
if(temp__5804__auto___23688){
var seq__23591_23689__$1 = temp__5804__auto___23688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23591_23689__$1)){
var c__5565__auto___23690 = cljs.core.chunk_first.call(null,seq__23591_23689__$1);
var G__23691 = cljs.core.chunk_rest.call(null,seq__23591_23689__$1);
var G__23692 = c__5565__auto___23690;
var G__23693 = cljs.core.count.call(null,c__5565__auto___23690);
var G__23694 = (0);
seq__23591_23675 = G__23691;
chunk__23592_23676 = G__23692;
count__23593_23677 = G__23693;
i__23594_23678 = G__23694;
continue;
} else {
var map__23598_23695 = cljs.core.first.call(null,seq__23591_23689__$1);
var map__23598_23696__$1 = cljs.core.__destructure_map.call(null,map__23598_23695);
var gline_23697 = cljs.core.get.call(null,map__23598_23696__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23698 = cljs.core.get.call(null,map__23598_23696__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23699 = cljs.core.get.call(null,map__23598_23696__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23697], null),cljs.core.fnil.call(null,((function (seq__23591_23675,chunk__23592_23676,count__23593_23677,i__23594_23678,seq__23562_23668,chunk__23563_23669,count__23564_23670,i__23565_23671,seq__23453_23661,chunk__23454_23662,count__23455_23663,i__23456_23664,map__23598_23695,map__23598_23696__$1,gline_23697,gcol_23698,name_23699,seq__23591_23689__$1,temp__5804__auto___23688,vec__23588_23672,column_23673,column_info_23674,vec__23559_23665,line_23666,columns_23667,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23698], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23666,new cljs.core.Keyword(null,"col","col",-1959363084),column_23673,new cljs.core.Keyword(null,"name","name",1843675177),name_23699], null));
});})(seq__23591_23675,chunk__23592_23676,count__23593_23677,i__23594_23678,seq__23562_23668,chunk__23563_23669,count__23564_23670,i__23565_23671,seq__23453_23661,chunk__23454_23662,count__23455_23663,i__23456_23664,map__23598_23695,map__23598_23696__$1,gline_23697,gcol_23698,name_23699,seq__23591_23689__$1,temp__5804__auto___23688,vec__23588_23672,column_23673,column_info_23674,vec__23559_23665,line_23666,columns_23667,inverted))
,cljs.core.sorted_map.call(null)));


var G__23700 = cljs.core.next.call(null,seq__23591_23689__$1);
var G__23701 = null;
var G__23702 = (0);
var G__23703 = (0);
seq__23591_23675 = G__23700;
chunk__23592_23676 = G__23701;
count__23593_23677 = G__23702;
i__23594_23678 = G__23703;
continue;
}
} else {
}
}
break;
}


var G__23704 = seq__23562_23668;
var G__23705 = chunk__23563_23669;
var G__23706 = count__23564_23670;
var G__23707 = (i__23565_23671 + (1));
seq__23562_23668 = G__23704;
chunk__23563_23669 = G__23705;
count__23564_23670 = G__23706;
i__23565_23671 = G__23707;
continue;
} else {
var temp__5804__auto___23708 = cljs.core.seq.call(null,seq__23562_23668);
if(temp__5804__auto___23708){
var seq__23562_23709__$1 = temp__5804__auto___23708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23562_23709__$1)){
var c__5565__auto___23710 = cljs.core.chunk_first.call(null,seq__23562_23709__$1);
var G__23711 = cljs.core.chunk_rest.call(null,seq__23562_23709__$1);
var G__23712 = c__5565__auto___23710;
var G__23713 = cljs.core.count.call(null,c__5565__auto___23710);
var G__23714 = (0);
seq__23562_23668 = G__23711;
chunk__23563_23669 = G__23712;
count__23564_23670 = G__23713;
i__23565_23671 = G__23714;
continue;
} else {
var vec__23599_23715 = cljs.core.first.call(null,seq__23562_23709__$1);
var column_23716 = cljs.core.nth.call(null,vec__23599_23715,(0),null);
var column_info_23717 = cljs.core.nth.call(null,vec__23599_23715,(1),null);
var seq__23602_23718 = cljs.core.seq.call(null,column_info_23717);
var chunk__23603_23719 = null;
var count__23604_23720 = (0);
var i__23605_23721 = (0);
while(true){
if((i__23605_23721 < count__23604_23720)){
var map__23608_23722 = cljs.core._nth.call(null,chunk__23603_23719,i__23605_23721);
var map__23608_23723__$1 = cljs.core.__destructure_map.call(null,map__23608_23722);
var gline_23724 = cljs.core.get.call(null,map__23608_23723__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23725 = cljs.core.get.call(null,map__23608_23723__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23726 = cljs.core.get.call(null,map__23608_23723__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23724], null),cljs.core.fnil.call(null,((function (seq__23602_23718,chunk__23603_23719,count__23604_23720,i__23605_23721,seq__23562_23668,chunk__23563_23669,count__23564_23670,i__23565_23671,seq__23453_23661,chunk__23454_23662,count__23455_23663,i__23456_23664,map__23608_23722,map__23608_23723__$1,gline_23724,gcol_23725,name_23726,vec__23599_23715,column_23716,column_info_23717,seq__23562_23709__$1,temp__5804__auto___23708,vec__23559_23665,line_23666,columns_23667,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23725], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23666,new cljs.core.Keyword(null,"col","col",-1959363084),column_23716,new cljs.core.Keyword(null,"name","name",1843675177),name_23726], null));
});})(seq__23602_23718,chunk__23603_23719,count__23604_23720,i__23605_23721,seq__23562_23668,chunk__23563_23669,count__23564_23670,i__23565_23671,seq__23453_23661,chunk__23454_23662,count__23455_23663,i__23456_23664,map__23608_23722,map__23608_23723__$1,gline_23724,gcol_23725,name_23726,vec__23599_23715,column_23716,column_info_23717,seq__23562_23709__$1,temp__5804__auto___23708,vec__23559_23665,line_23666,columns_23667,inverted))
,cljs.core.sorted_map.call(null)));


var G__23727 = seq__23602_23718;
var G__23728 = chunk__23603_23719;
var G__23729 = count__23604_23720;
var G__23730 = (i__23605_23721 + (1));
seq__23602_23718 = G__23727;
chunk__23603_23719 = G__23728;
count__23604_23720 = G__23729;
i__23605_23721 = G__23730;
continue;
} else {
var temp__5804__auto___23731__$1 = cljs.core.seq.call(null,seq__23602_23718);
if(temp__5804__auto___23731__$1){
var seq__23602_23732__$1 = temp__5804__auto___23731__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23602_23732__$1)){
var c__5565__auto___23733 = cljs.core.chunk_first.call(null,seq__23602_23732__$1);
var G__23734 = cljs.core.chunk_rest.call(null,seq__23602_23732__$1);
var G__23735 = c__5565__auto___23733;
var G__23736 = cljs.core.count.call(null,c__5565__auto___23733);
var G__23737 = (0);
seq__23602_23718 = G__23734;
chunk__23603_23719 = G__23735;
count__23604_23720 = G__23736;
i__23605_23721 = G__23737;
continue;
} else {
var map__23609_23738 = cljs.core.first.call(null,seq__23602_23732__$1);
var map__23609_23739__$1 = cljs.core.__destructure_map.call(null,map__23609_23738);
var gline_23740 = cljs.core.get.call(null,map__23609_23739__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23741 = cljs.core.get.call(null,map__23609_23739__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23742 = cljs.core.get.call(null,map__23609_23739__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23740], null),cljs.core.fnil.call(null,((function (seq__23602_23718,chunk__23603_23719,count__23604_23720,i__23605_23721,seq__23562_23668,chunk__23563_23669,count__23564_23670,i__23565_23671,seq__23453_23661,chunk__23454_23662,count__23455_23663,i__23456_23664,map__23609_23738,map__23609_23739__$1,gline_23740,gcol_23741,name_23742,seq__23602_23732__$1,temp__5804__auto___23731__$1,vec__23599_23715,column_23716,column_info_23717,seq__23562_23709__$1,temp__5804__auto___23708,vec__23559_23665,line_23666,columns_23667,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23741], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23666,new cljs.core.Keyword(null,"col","col",-1959363084),column_23716,new cljs.core.Keyword(null,"name","name",1843675177),name_23742], null));
});})(seq__23602_23718,chunk__23603_23719,count__23604_23720,i__23605_23721,seq__23562_23668,chunk__23563_23669,count__23564_23670,i__23565_23671,seq__23453_23661,chunk__23454_23662,count__23455_23663,i__23456_23664,map__23609_23738,map__23609_23739__$1,gline_23740,gcol_23741,name_23742,seq__23602_23732__$1,temp__5804__auto___23731__$1,vec__23599_23715,column_23716,column_info_23717,seq__23562_23709__$1,temp__5804__auto___23708,vec__23559_23665,line_23666,columns_23667,inverted))
,cljs.core.sorted_map.call(null)));


var G__23743 = cljs.core.next.call(null,seq__23602_23732__$1);
var G__23744 = null;
var G__23745 = (0);
var G__23746 = (0);
seq__23602_23718 = G__23743;
chunk__23603_23719 = G__23744;
count__23604_23720 = G__23745;
i__23605_23721 = G__23746;
continue;
}
} else {
}
}
break;
}


var G__23747 = cljs.core.next.call(null,seq__23562_23709__$1);
var G__23748 = null;
var G__23749 = (0);
var G__23750 = (0);
seq__23562_23668 = G__23747;
chunk__23563_23669 = G__23748;
count__23564_23670 = G__23749;
i__23565_23671 = G__23750;
continue;
}
} else {
}
}
break;
}


var G__23751 = seq__23453_23661;
var G__23752 = chunk__23454_23662;
var G__23753 = count__23455_23663;
var G__23754 = (i__23456_23664 + (1));
seq__23453_23661 = G__23751;
chunk__23454_23662 = G__23752;
count__23455_23663 = G__23753;
i__23456_23664 = G__23754;
continue;
} else {
var temp__5804__auto___23755 = cljs.core.seq.call(null,seq__23453_23661);
if(temp__5804__auto___23755){
var seq__23453_23756__$1 = temp__5804__auto___23755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23453_23756__$1)){
var c__5565__auto___23757 = cljs.core.chunk_first.call(null,seq__23453_23756__$1);
var G__23758 = cljs.core.chunk_rest.call(null,seq__23453_23756__$1);
var G__23759 = c__5565__auto___23757;
var G__23760 = cljs.core.count.call(null,c__5565__auto___23757);
var G__23761 = (0);
seq__23453_23661 = G__23758;
chunk__23454_23662 = G__23759;
count__23455_23663 = G__23760;
i__23456_23664 = G__23761;
continue;
} else {
var vec__23610_23762 = cljs.core.first.call(null,seq__23453_23756__$1);
var line_23763 = cljs.core.nth.call(null,vec__23610_23762,(0),null);
var columns_23764 = cljs.core.nth.call(null,vec__23610_23762,(1),null);
var seq__23613_23765 = cljs.core.seq.call(null,columns_23764);
var chunk__23614_23766 = null;
var count__23615_23767 = (0);
var i__23616_23768 = (0);
while(true){
if((i__23616_23768 < count__23615_23767)){
var vec__23639_23769 = cljs.core._nth.call(null,chunk__23614_23766,i__23616_23768);
var column_23770 = cljs.core.nth.call(null,vec__23639_23769,(0),null);
var column_info_23771 = cljs.core.nth.call(null,vec__23639_23769,(1),null);
var seq__23642_23772 = cljs.core.seq.call(null,column_info_23771);
var chunk__23643_23773 = null;
var count__23644_23774 = (0);
var i__23645_23775 = (0);
while(true){
if((i__23645_23775 < count__23644_23774)){
var map__23648_23776 = cljs.core._nth.call(null,chunk__23643_23773,i__23645_23775);
var map__23648_23777__$1 = cljs.core.__destructure_map.call(null,map__23648_23776);
var gline_23778 = cljs.core.get.call(null,map__23648_23777__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23779 = cljs.core.get.call(null,map__23648_23777__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23780 = cljs.core.get.call(null,map__23648_23777__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23778], null),cljs.core.fnil.call(null,((function (seq__23642_23772,chunk__23643_23773,count__23644_23774,i__23645_23775,seq__23613_23765,chunk__23614_23766,count__23615_23767,i__23616_23768,seq__23453_23661,chunk__23454_23662,count__23455_23663,i__23456_23664,map__23648_23776,map__23648_23777__$1,gline_23778,gcol_23779,name_23780,vec__23639_23769,column_23770,column_info_23771,vec__23610_23762,line_23763,columns_23764,seq__23453_23756__$1,temp__5804__auto___23755,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23779], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23763,new cljs.core.Keyword(null,"col","col",-1959363084),column_23770,new cljs.core.Keyword(null,"name","name",1843675177),name_23780], null));
});})(seq__23642_23772,chunk__23643_23773,count__23644_23774,i__23645_23775,seq__23613_23765,chunk__23614_23766,count__23615_23767,i__23616_23768,seq__23453_23661,chunk__23454_23662,count__23455_23663,i__23456_23664,map__23648_23776,map__23648_23777__$1,gline_23778,gcol_23779,name_23780,vec__23639_23769,column_23770,column_info_23771,vec__23610_23762,line_23763,columns_23764,seq__23453_23756__$1,temp__5804__auto___23755,inverted))
,cljs.core.sorted_map.call(null)));


var G__23781 = seq__23642_23772;
var G__23782 = chunk__23643_23773;
var G__23783 = count__23644_23774;
var G__23784 = (i__23645_23775 + (1));
seq__23642_23772 = G__23781;
chunk__23643_23773 = G__23782;
count__23644_23774 = G__23783;
i__23645_23775 = G__23784;
continue;
} else {
var temp__5804__auto___23785__$1 = cljs.core.seq.call(null,seq__23642_23772);
if(temp__5804__auto___23785__$1){
var seq__23642_23786__$1 = temp__5804__auto___23785__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23642_23786__$1)){
var c__5565__auto___23787 = cljs.core.chunk_first.call(null,seq__23642_23786__$1);
var G__23788 = cljs.core.chunk_rest.call(null,seq__23642_23786__$1);
var G__23789 = c__5565__auto___23787;
var G__23790 = cljs.core.count.call(null,c__5565__auto___23787);
var G__23791 = (0);
seq__23642_23772 = G__23788;
chunk__23643_23773 = G__23789;
count__23644_23774 = G__23790;
i__23645_23775 = G__23791;
continue;
} else {
var map__23649_23792 = cljs.core.first.call(null,seq__23642_23786__$1);
var map__23649_23793__$1 = cljs.core.__destructure_map.call(null,map__23649_23792);
var gline_23794 = cljs.core.get.call(null,map__23649_23793__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23795 = cljs.core.get.call(null,map__23649_23793__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23796 = cljs.core.get.call(null,map__23649_23793__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23794], null),cljs.core.fnil.call(null,((function (seq__23642_23772,chunk__23643_23773,count__23644_23774,i__23645_23775,seq__23613_23765,chunk__23614_23766,count__23615_23767,i__23616_23768,seq__23453_23661,chunk__23454_23662,count__23455_23663,i__23456_23664,map__23649_23792,map__23649_23793__$1,gline_23794,gcol_23795,name_23796,seq__23642_23786__$1,temp__5804__auto___23785__$1,vec__23639_23769,column_23770,column_info_23771,vec__23610_23762,line_23763,columns_23764,seq__23453_23756__$1,temp__5804__auto___23755,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23795], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23763,new cljs.core.Keyword(null,"col","col",-1959363084),column_23770,new cljs.core.Keyword(null,"name","name",1843675177),name_23796], null));
});})(seq__23642_23772,chunk__23643_23773,count__23644_23774,i__23645_23775,seq__23613_23765,chunk__23614_23766,count__23615_23767,i__23616_23768,seq__23453_23661,chunk__23454_23662,count__23455_23663,i__23456_23664,map__23649_23792,map__23649_23793__$1,gline_23794,gcol_23795,name_23796,seq__23642_23786__$1,temp__5804__auto___23785__$1,vec__23639_23769,column_23770,column_info_23771,vec__23610_23762,line_23763,columns_23764,seq__23453_23756__$1,temp__5804__auto___23755,inverted))
,cljs.core.sorted_map.call(null)));


var G__23797 = cljs.core.next.call(null,seq__23642_23786__$1);
var G__23798 = null;
var G__23799 = (0);
var G__23800 = (0);
seq__23642_23772 = G__23797;
chunk__23643_23773 = G__23798;
count__23644_23774 = G__23799;
i__23645_23775 = G__23800;
continue;
}
} else {
}
}
break;
}


var G__23801 = seq__23613_23765;
var G__23802 = chunk__23614_23766;
var G__23803 = count__23615_23767;
var G__23804 = (i__23616_23768 + (1));
seq__23613_23765 = G__23801;
chunk__23614_23766 = G__23802;
count__23615_23767 = G__23803;
i__23616_23768 = G__23804;
continue;
} else {
var temp__5804__auto___23805__$1 = cljs.core.seq.call(null,seq__23613_23765);
if(temp__5804__auto___23805__$1){
var seq__23613_23806__$1 = temp__5804__auto___23805__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23613_23806__$1)){
var c__5565__auto___23807 = cljs.core.chunk_first.call(null,seq__23613_23806__$1);
var G__23808 = cljs.core.chunk_rest.call(null,seq__23613_23806__$1);
var G__23809 = c__5565__auto___23807;
var G__23810 = cljs.core.count.call(null,c__5565__auto___23807);
var G__23811 = (0);
seq__23613_23765 = G__23808;
chunk__23614_23766 = G__23809;
count__23615_23767 = G__23810;
i__23616_23768 = G__23811;
continue;
} else {
var vec__23650_23812 = cljs.core.first.call(null,seq__23613_23806__$1);
var column_23813 = cljs.core.nth.call(null,vec__23650_23812,(0),null);
var column_info_23814 = cljs.core.nth.call(null,vec__23650_23812,(1),null);
var seq__23653_23815 = cljs.core.seq.call(null,column_info_23814);
var chunk__23654_23816 = null;
var count__23655_23817 = (0);
var i__23656_23818 = (0);
while(true){
if((i__23656_23818 < count__23655_23817)){
var map__23659_23819 = cljs.core._nth.call(null,chunk__23654_23816,i__23656_23818);
var map__23659_23820__$1 = cljs.core.__destructure_map.call(null,map__23659_23819);
var gline_23821 = cljs.core.get.call(null,map__23659_23820__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23822 = cljs.core.get.call(null,map__23659_23820__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23823 = cljs.core.get.call(null,map__23659_23820__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23821], null),cljs.core.fnil.call(null,((function (seq__23653_23815,chunk__23654_23816,count__23655_23817,i__23656_23818,seq__23613_23765,chunk__23614_23766,count__23615_23767,i__23616_23768,seq__23453_23661,chunk__23454_23662,count__23455_23663,i__23456_23664,map__23659_23819,map__23659_23820__$1,gline_23821,gcol_23822,name_23823,vec__23650_23812,column_23813,column_info_23814,seq__23613_23806__$1,temp__5804__auto___23805__$1,vec__23610_23762,line_23763,columns_23764,seq__23453_23756__$1,temp__5804__auto___23755,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23822], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23763,new cljs.core.Keyword(null,"col","col",-1959363084),column_23813,new cljs.core.Keyword(null,"name","name",1843675177),name_23823], null));
});})(seq__23653_23815,chunk__23654_23816,count__23655_23817,i__23656_23818,seq__23613_23765,chunk__23614_23766,count__23615_23767,i__23616_23768,seq__23453_23661,chunk__23454_23662,count__23455_23663,i__23456_23664,map__23659_23819,map__23659_23820__$1,gline_23821,gcol_23822,name_23823,vec__23650_23812,column_23813,column_info_23814,seq__23613_23806__$1,temp__5804__auto___23805__$1,vec__23610_23762,line_23763,columns_23764,seq__23453_23756__$1,temp__5804__auto___23755,inverted))
,cljs.core.sorted_map.call(null)));


var G__23824 = seq__23653_23815;
var G__23825 = chunk__23654_23816;
var G__23826 = count__23655_23817;
var G__23827 = (i__23656_23818 + (1));
seq__23653_23815 = G__23824;
chunk__23654_23816 = G__23825;
count__23655_23817 = G__23826;
i__23656_23818 = G__23827;
continue;
} else {
var temp__5804__auto___23828__$2 = cljs.core.seq.call(null,seq__23653_23815);
if(temp__5804__auto___23828__$2){
var seq__23653_23829__$1 = temp__5804__auto___23828__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23653_23829__$1)){
var c__5565__auto___23830 = cljs.core.chunk_first.call(null,seq__23653_23829__$1);
var G__23831 = cljs.core.chunk_rest.call(null,seq__23653_23829__$1);
var G__23832 = c__5565__auto___23830;
var G__23833 = cljs.core.count.call(null,c__5565__auto___23830);
var G__23834 = (0);
seq__23653_23815 = G__23831;
chunk__23654_23816 = G__23832;
count__23655_23817 = G__23833;
i__23656_23818 = G__23834;
continue;
} else {
var map__23660_23835 = cljs.core.first.call(null,seq__23653_23829__$1);
var map__23660_23836__$1 = cljs.core.__destructure_map.call(null,map__23660_23835);
var gline_23837 = cljs.core.get.call(null,map__23660_23836__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_23838 = cljs.core.get.call(null,map__23660_23836__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_23839 = cljs.core.get.call(null,map__23660_23836__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_23837], null),cljs.core.fnil.call(null,((function (seq__23653_23815,chunk__23654_23816,count__23655_23817,i__23656_23818,seq__23613_23765,chunk__23614_23766,count__23615_23767,i__23616_23768,seq__23453_23661,chunk__23454_23662,count__23455_23663,i__23456_23664,map__23660_23835,map__23660_23836__$1,gline_23837,gcol_23838,name_23839,seq__23653_23829__$1,temp__5804__auto___23828__$2,vec__23650_23812,column_23813,column_info_23814,seq__23613_23806__$1,temp__5804__auto___23805__$1,vec__23610_23762,line_23763,columns_23764,seq__23453_23756__$1,temp__5804__auto___23755,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_23838], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_23763,new cljs.core.Keyword(null,"col","col",-1959363084),column_23813,new cljs.core.Keyword(null,"name","name",1843675177),name_23839], null));
});})(seq__23653_23815,chunk__23654_23816,count__23655_23817,i__23656_23818,seq__23613_23765,chunk__23614_23766,count__23615_23767,i__23616_23768,seq__23453_23661,chunk__23454_23662,count__23455_23663,i__23456_23664,map__23660_23835,map__23660_23836__$1,gline_23837,gcol_23838,name_23839,seq__23653_23829__$1,temp__5804__auto___23828__$2,vec__23650_23812,column_23813,column_info_23814,seq__23613_23806__$1,temp__5804__auto___23805__$1,vec__23610_23762,line_23763,columns_23764,seq__23453_23756__$1,temp__5804__auto___23755,inverted))
,cljs.core.sorted_map.call(null)));


var G__23840 = cljs.core.next.call(null,seq__23653_23829__$1);
var G__23841 = null;
var G__23842 = (0);
var G__23843 = (0);
seq__23653_23815 = G__23840;
chunk__23654_23816 = G__23841;
count__23655_23817 = G__23842;
i__23656_23818 = G__23843;
continue;
}
} else {
}
}
break;
}


var G__23844 = cljs.core.next.call(null,seq__23613_23806__$1);
var G__23845 = null;
var G__23846 = (0);
var G__23847 = (0);
seq__23613_23765 = G__23844;
chunk__23614_23766 = G__23845;
count__23615_23767 = G__23846;
i__23616_23768 = G__23847;
continue;
}
} else {
}
}
break;
}


var G__23848 = cljs.core.next.call(null,seq__23453_23756__$1);
var G__23849 = null;
var G__23850 = (0);
var G__23851 = (0);
seq__23453_23661 = G__23848;
chunk__23454_23662 = G__23849;
count__23455_23663 = G__23850;
i__23456_23664 = G__23851;
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

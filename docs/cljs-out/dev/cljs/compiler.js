// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.analyzer');
goog.require('cljs.analyzer.impl');
goog.require('cljs.env');
goog.require('cljs.source_map');
goog.require('cljs.tools.reader');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__26540 = s;
var map__26540__$1 = cljs.core.__destructure_map.call(null,map__26540);
var name = cljs.core.get.call(null,map__26540__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__26540__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__26542 = info;
var map__26543 = G__26542;
var map__26543__$1 = cljs.core.__destructure_map.call(null,map__26543);
var shadow = cljs.core.get.call(null,map__26543__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__26542__$1 = G__26542;
while(true){
var d__$2 = d__$1;
var map__26545 = G__26542__$1;
var map__26545__$1 = cljs.core.__destructure_map.call(null,map__26545);
var shadow__$1 = cljs.core.get.call(null,map__26545__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__26546 = (d__$2 + (1));
var G__26547 = shadow__$1;
d__$1 = G__26546;
G__26542__$1 = G__26547;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__26548){
var map__26549 = p__26548;
var map__26549__$1 = cljs.core.__destructure_map.call(null,map__26549);
var name_var = map__26549__$1;
var name = cljs.core.get.call(null,map__26549__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__26549__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__26550 = info;
var map__26550__$1 = cljs.core.__destructure_map.call(null,map__26550);
var ns = cljs.core.get.call(null,map__26550__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__26550__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.call(null,reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__26552 = arguments.length;
switch (G__26552) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(25),(1),(11790),(11790),new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__26554 = cp;
switch (G__26554) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__26556_26560 = cljs.core.seq.call(null,s);
var chunk__26557_26561 = null;
var count__26558_26562 = (0);
var i__26559_26563 = (0);
while(true){
if((i__26559_26563 < count__26558_26562)){
var c_26564 = cljs.core._nth.call(null,chunk__26557_26561,i__26559_26563);
sb.append(cljs.compiler.escape_char.call(null,c_26564));


var G__26565 = seq__26556_26560;
var G__26566 = chunk__26557_26561;
var G__26567 = count__26558_26562;
var G__26568 = (i__26559_26563 + (1));
seq__26556_26560 = G__26565;
chunk__26557_26561 = G__26566;
count__26558_26562 = G__26567;
i__26559_26563 = G__26568;
continue;
} else {
var temp__5804__auto___26569 = cljs.core.seq.call(null,seq__26556_26560);
if(temp__5804__auto___26569){
var seq__26556_26570__$1 = temp__5804__auto___26569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26556_26570__$1)){
var c__5565__auto___26571 = cljs.core.chunk_first.call(null,seq__26556_26570__$1);
var G__26572 = cljs.core.chunk_rest.call(null,seq__26556_26570__$1);
var G__26573 = c__5565__auto___26571;
var G__26574 = cljs.core.count.call(null,c__5565__auto___26571);
var G__26575 = (0);
seq__26556_26560 = G__26572;
chunk__26557_26561 = G__26573;
count__26558_26562 = G__26574;
i__26559_26563 = G__26575;
continue;
} else {
var c_26576 = cljs.core.first.call(null,seq__26556_26570__$1);
sb.append(cljs.compiler.escape_char.call(null,c_26576));


var G__26577 = cljs.core.next.call(null,seq__26556_26570__$1);
var G__26578 = null;
var G__26579 = (0);
var G__26580 = (0);
seq__26556_26560 = G__26577;
chunk__26557_26561 = G__26578;
count__26558_26562 = G__26579;
i__26559_26563 = G__26580;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__5639__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__26581_26584 = ast;
var map__26581_26585__$1 = cljs.core.__destructure_map.call(null,map__26581_26584);
var env_26586 = cljs.core.get.call(null,map__26581_26585__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_26586))){
var map__26582_26587 = env_26586;
var map__26582_26588__$1 = cljs.core.__destructure_map.call(null,map__26582_26587);
var line_26589 = cljs.core.get.call(null,map__26582_26588__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_26590 = cljs.core.get.call(null,map__26582_26588__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__26583 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__26583,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__26583;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_26589 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_26590)?(column_26590 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__26599 = arguments.length;
switch (G__26599) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___26606 = arguments.length;
var i__5767__auto___26607 = (0);
while(true){
if((i__5767__auto___26607 < len__5766__auto___26606)){
args_arr__5791__auto__.push((arguments[i__5767__auto___26607]));

var G__26608 = (i__5767__auto___26607 + (1));
i__5767__auto___26607 = G__26608;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5792__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(typeof a === 'function'){
a.call(null);
} else {
var s_26609 = (function (){var G__26600 = a;
if((!(typeof a === 'string'))){
return G__26600.toString();
} else {
return G__26600;
}
})();
var temp__5808__auto___26610 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5808__auto___26610 == null)){
} else {
var sm_data_26611 = temp__5808__auto___26610;
cljs.core.swap_BANG_.call(null,sm_data_26611,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__26591_SHARP_){
return (p1__26591_SHARP_ + s_26609.length);
}));
}

cljs.core.print.call(null,s_26609);

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__26601 = cljs.core.seq.call(null,xs);
var chunk__26602 = null;
var count__26603 = (0);
var i__26604 = (0);
while(true){
if((i__26604 < count__26603)){
var x = cljs.core._nth.call(null,chunk__26602,i__26604);
cljs.compiler.emits.call(null,x);


var G__26612 = seq__26601;
var G__26613 = chunk__26602;
var G__26614 = count__26603;
var G__26615 = (i__26604 + (1));
seq__26601 = G__26612;
chunk__26602 = G__26613;
count__26603 = G__26614;
i__26604 = G__26615;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__26601);
if(temp__5804__auto__){
var seq__26601__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26601__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__26601__$1);
var G__26616 = cljs.core.chunk_rest.call(null,seq__26601__$1);
var G__26617 = c__5565__auto__;
var G__26618 = cljs.core.count.call(null,c__5565__auto__);
var G__26619 = (0);
seq__26601 = G__26616;
chunk__26602 = G__26617;
count__26603 = G__26618;
i__26604 = G__26619;
continue;
} else {
var x = cljs.core.first.call(null,seq__26601__$1);
cljs.compiler.emits.call(null,x);


var G__26620 = cljs.core.next.call(null,seq__26601__$1);
var G__26621 = null;
var G__26622 = (0);
var G__26623 = (0);
seq__26601 = G__26620;
chunk__26602 = G__26621;
count__26603 = G__26622;
i__26604 = G__26623;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq26593){
var G__26594 = cljs.core.first.call(null,seq26593);
var seq26593__$1 = cljs.core.next.call(null,seq26593);
var G__26595 = cljs.core.first.call(null,seq26593__$1);
var seq26593__$2 = cljs.core.next.call(null,seq26593__$1);
var G__26596 = cljs.core.first.call(null,seq26593__$2);
var seq26593__$3 = cljs.core.next.call(null,seq26593__$2);
var G__26597 = cljs.core.first.call(null,seq26593__$3);
var seq26593__$4 = cljs.core.next.call(null,seq26593__$3);
var G__26598 = cljs.core.first.call(null,seq26593__$4);
var seq26593__$5 = cljs.core.next.call(null,seq26593__$4);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26594,G__26595,G__26596,G__26597,G__26598,seq26593__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__26624){
var map__26625 = p__26624;
var map__26625__$1 = cljs.core.__destructure_map.call(null,map__26625);
var m = map__26625__$1;
var gen_line = cljs.core.get.call(null,map__26625__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__26633 = arguments.length;
switch (G__26633) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___26639 = arguments.length;
var i__5767__auto___26640 = (0);
while(true){
if((i__5767__auto___26640 < len__5766__auto___26639)){
args_arr__5791__auto__.push((arguments[i__5767__auto___26640]));

var G__26641 = (i__5767__auto___26640 + (1));
i__5767__auto___26640 = G__26641;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5792__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__26634_26642 = cljs.core.seq.call(null,xs);
var chunk__26635_26643 = null;
var count__26636_26644 = (0);
var i__26637_26645 = (0);
while(true){
if((i__26637_26645 < count__26636_26644)){
var x_26646 = cljs.core._nth.call(null,chunk__26635_26643,i__26637_26645);
cljs.compiler.emits.call(null,x_26646);


var G__26647 = seq__26634_26642;
var G__26648 = chunk__26635_26643;
var G__26649 = count__26636_26644;
var G__26650 = (i__26637_26645 + (1));
seq__26634_26642 = G__26647;
chunk__26635_26643 = G__26648;
count__26636_26644 = G__26649;
i__26637_26645 = G__26650;
continue;
} else {
var temp__5804__auto___26651 = cljs.core.seq.call(null,seq__26634_26642);
if(temp__5804__auto___26651){
var seq__26634_26652__$1 = temp__5804__auto___26651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26634_26652__$1)){
var c__5565__auto___26653 = cljs.core.chunk_first.call(null,seq__26634_26652__$1);
var G__26654 = cljs.core.chunk_rest.call(null,seq__26634_26652__$1);
var G__26655 = c__5565__auto___26653;
var G__26656 = cljs.core.count.call(null,c__5565__auto___26653);
var G__26657 = (0);
seq__26634_26642 = G__26654;
chunk__26635_26643 = G__26655;
count__26636_26644 = G__26656;
i__26637_26645 = G__26657;
continue;
} else {
var x_26658 = cljs.core.first.call(null,seq__26634_26652__$1);
cljs.compiler.emits.call(null,x_26658);


var G__26659 = cljs.core.next.call(null,seq__26634_26652__$1);
var G__26660 = null;
var G__26661 = (0);
var G__26662 = (0);
seq__26634_26642 = G__26659;
chunk__26635_26643 = G__26660;
count__26636_26644 = G__26661;
i__26637_26645 = G__26662;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq26627){
var G__26628 = cljs.core.first.call(null,seq26627);
var seq26627__$1 = cljs.core.next.call(null,seq26627);
var G__26629 = cljs.core.first.call(null,seq26627__$1);
var seq26627__$2 = cljs.core.next.call(null,seq26627__$1);
var G__26630 = cljs.core.first.call(null,seq26627__$2);
var seq26627__$3 = cljs.core.next.call(null,seq26627__$2);
var G__26631 = cljs.core.first.call(null,seq26627__$3);
var seq26627__$4 = cljs.core.next.call(null,seq26627__$3);
var G__26632 = cljs.core.first.call(null,seq26627__$4);
var seq26627__$5 = cljs.core.next.call(null,seq26627__$4);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26628,G__26629,G__26630,G__26631,G__26632,seq26627__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26663_26667 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26664_26668 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26665_26669 = true;
var _STAR_print_fn_STAR__temp_val__26666_26670 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26665_26669);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26666_26670);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26664_26668);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26663_26667);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__5639__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.impl.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__26671 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__26671,(0),null);
var name = cljs.core.nth.call(null,vec__26671,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,(function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
}));
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.impl.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.impl.cljs_set_QMARK_.call(null,x)){
return cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
return cljs.compiler.emit_constant_STAR_.call(null,x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta.call(null,cljs.core.meta.call(null,v));
if((!((cljs.core.seq.call(null,m) == null)))){
return cljs.compiler.emit_with_meta.call(null,(function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
}),(function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
}));
} else {
return cljs.compiler.emit_constant_no_meta.call(null,v);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.call(null,cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
if((((x === (0))) && ((((1) / x) < (0))))){
return cljs.compiler.emits.call(null,"(-0)");
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__26674 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__26674,(0),null);
var flags = cljs.core.nth.call(null,vec__26674,(1),null);
var pattern = cljs.core.nth.call(null,vec__26674,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Keyword,(function (x){
var temp__5802__auto__ = (function (){var and__5041__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__5041__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5802__auto__ = (function (){var and__5041__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__5041__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,m){
if(cljs.core.even_QMARK_.call(null,i)){
return cljs.compiler.emit_constant.call(null,m);
} else {
return cljs.compiler.emits.call(null,m);
}
}),cljs.compiler.comma_sep.call(null,cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_inst = (function cljs$compiler$emit_inst(inst_ms){
return cljs.compiler.emits.call(null,"new Date(",inst_ms,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emit_inst.call(null,date.getTime());
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,(function (p1__26677_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__26677_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__26679){
var map__26680 = p__26679;
var map__26680__$1 = cljs.core.__destructure_map.call(null,map__26680);
var ast = map__26680__$1;
var info = cljs.core.get.call(null,map__26680__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__26680__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__26680__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5802__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5802__auto__)){
var const_expr = temp__5802__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__26681 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__26681__$1 = cljs.core.__destructure_map.call(null,map__26681);
var cenv = map__26681__$1;
var options = cljs.core.get.call(null,map__26681__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__5043__auto__ = js_module_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__26682 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__5041__auto__;
}
})())){
return clojure.set.difference.call(null,G__26682,cljs.analyzer.es5_allowed);
} else {
return G__26682;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__5043__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__26683 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__26683,reserved);
} else {
return G__26683;
}
})();
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__26684_26685 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__26684_26686__$1 = (((G__26684_26685 instanceof cljs.core.Keyword))?G__26684_26685.fqn:null);
switch (G__26684_26686__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__5041__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__26688){
var map__26689 = p__26688;
var map__26689__$1 = cljs.core.__destructure_map.call(null,map__26689);
var arg = map__26689__$1;
var env = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__26690 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__26690__$1 = cljs.core.__destructure_map.call(null,map__26690);
var name = cljs.core.get.call(null,map__26690__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__26691){
var map__26692 = p__26691;
var map__26692__$1 = cljs.core.__destructure_map.call(null,map__26692);
var expr = cljs.core.get.call(null,map__26692__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__26692__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__26692__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,(function (p1__26693_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__26693_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count.call(null,keys) === (0))){
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(distinct_keys_QMARK_.call(null,keys))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",comma_sep.call(null,keys),"],[",comma_sep.call(null,vals),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__26694){
var map__26695 = p__26694;
var map__26695__$1 = cljs.core.__destructure_map.call(null,map__26695);
var env = cljs.core.get.call(null,map__26695__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__26695__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__26695__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.call(null,"cljs.core.list(",comma_sep.call(null,items),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count.call(null,items);
if((cnt < (32))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",comma_sep.call(null,items),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",comma_sep.call(null,items),"], true)");
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__26696){
var map__26697 = p__26696;
var map__26697__$1 = cljs.core.__destructure_map.call(null,map__26697);
var items = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__26697__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,(function (p1__26698_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__26698_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(distinct_constants_QMARK_.call(null,items))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",comma_sep.call(null,items),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__26699){
var map__26700 = p__26699;
var map__26700__$1 = cljs.core.__destructure_map.call(null,map__26700);
var items = cljs.core.get.call(null,map__26700__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__26700__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5804__auto___26723 = cljs.core.seq.call(null,items);
if(temp__5804__auto___26723){
var items_26724__$1 = temp__5804__auto___26723;
var vec__26701_26725 = items_26724__$1;
var seq__26702_26726 = cljs.core.seq.call(null,vec__26701_26725);
var first__26703_26727 = cljs.core.first.call(null,seq__26702_26726);
var seq__26702_26728__$1 = cljs.core.next.call(null,seq__26702_26726);
var vec__26704_26729 = first__26703_26727;
var k_26730 = cljs.core.nth.call(null,vec__26704_26729,(0),null);
var v_26731 = cljs.core.nth.call(null,vec__26704_26729,(1),null);
var r_26732 = seq__26702_26728__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_26730),"\": ",emit_js_object_val.call(null,v_26731));

var seq__26707_26733 = cljs.core.seq.call(null,r_26732);
var chunk__26708_26734 = null;
var count__26709_26735 = (0);
var i__26710_26736 = (0);
while(true){
if((i__26710_26736 < count__26709_26735)){
var vec__26717_26737 = cljs.core._nth.call(null,chunk__26708_26734,i__26710_26736);
var k_26738__$1 = cljs.core.nth.call(null,vec__26717_26737,(0),null);
var v_26739__$1 = cljs.core.nth.call(null,vec__26717_26737,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_26738__$1),"\": ",emit_js_object_val.call(null,v_26739__$1));


var G__26740 = seq__26707_26733;
var G__26741 = chunk__26708_26734;
var G__26742 = count__26709_26735;
var G__26743 = (i__26710_26736 + (1));
seq__26707_26733 = G__26740;
chunk__26708_26734 = G__26741;
count__26709_26735 = G__26742;
i__26710_26736 = G__26743;
continue;
} else {
var temp__5804__auto___26744__$1 = cljs.core.seq.call(null,seq__26707_26733);
if(temp__5804__auto___26744__$1){
var seq__26707_26745__$1 = temp__5804__auto___26744__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26707_26745__$1)){
var c__5565__auto___26746 = cljs.core.chunk_first.call(null,seq__26707_26745__$1);
var G__26747 = cljs.core.chunk_rest.call(null,seq__26707_26745__$1);
var G__26748 = c__5565__auto___26746;
var G__26749 = cljs.core.count.call(null,c__5565__auto___26746);
var G__26750 = (0);
seq__26707_26733 = G__26747;
chunk__26708_26734 = G__26748;
count__26709_26735 = G__26749;
i__26710_26736 = G__26750;
continue;
} else {
var vec__26720_26751 = cljs.core.first.call(null,seq__26707_26745__$1);
var k_26752__$1 = cljs.core.nth.call(null,vec__26720_26751,(0),null);
var v_26753__$1 = cljs.core.nth.call(null,vec__26720_26751,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_26752__$1),"\": ",emit_js_object_val.call(null,v_26753__$1));


var G__26754 = cljs.core.next.call(null,seq__26707_26745__$1);
var G__26755 = null;
var G__26756 = (0);
var G__26757 = (0);
seq__26707_26733 = G__26754;
chunk__26708_26734 = G__26755;
count__26709_26735 = G__26756;
i__26710_26736 = G__26757;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.call(null,"[",comma_sep.call(null,items),"]");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__26758){
var map__26759 = p__26758;
var map__26759__$1 = cljs.core.__destructure_map.call(null,map__26759);
var keys = cljs.core.get.call(null,map__26759__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__26759__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__26759__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__26760){
var map__26761 = p__26760;
var map__26761__$1 = cljs.core.__destructure_map.call(null,map__26761);
var items = cljs.core.get.call(null,map__26761__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__26761__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__26762){
var map__26763 = p__26762;
var map__26763__$1 = cljs.core.__destructure_map.call(null,map__26763);
var expr = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__26764){
var map__26765 = p__26764;
var map__26765__$1 = cljs.core.__destructure_map.call(null,map__26765);
var form = cljs.core.get.call(null,map__26765__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__26765__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__26766 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__26766__$1 = cljs.core.__destructure_map.call(null,map__26766);
var op = cljs.core.get.call(null,map__26766__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__26766__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__26766__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__5043__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__5041__auto__){
var and__5041__auto____$1 = form;
if(cljs.core.truth_(and__5041__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!((const_expr == null)));
if(and__5041__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__5041__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__26767 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__26767__$1 = cljs.core.__destructure_map.call(null,map__26767);
var op = cljs.core.get.call(null,map__26767__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__26767__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__26767__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__5043__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = (!((const_expr == null)));
if(and__5041__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__5041__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__5043__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__26768){
var map__26769 = p__26768;
var map__26769__$1 = cljs.core.__destructure_map.call(null,map__26769);
var test = cljs.core.get.call(null,map__26769__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__26769__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__26769__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__26769__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__26769__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__5043__auto__ = unchecked;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__26770){
var map__26771 = p__26770;
var map__26771__$1 = cljs.core.__destructure_map.call(null,map__26771);
var v = cljs.core.get.call(null,map__26771__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__26771__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__26771__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__26771__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__26772_26800 = cljs.core.seq.call(null,nodes);
var chunk__26773_26801 = null;
var count__26774_26802 = (0);
var i__26775_26803 = (0);
while(true){
if((i__26775_26803 < count__26774_26802)){
var map__26788_26804 = cljs.core._nth.call(null,chunk__26773_26801,i__26775_26803);
var map__26788_26805__$1 = cljs.core.__destructure_map.call(null,map__26788_26804);
var ts_26806 = cljs.core.get.call(null,map__26788_26805__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__26789_26807 = cljs.core.get.call(null,map__26788_26805__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__26789_26808__$1 = cljs.core.__destructure_map.call(null,map__26789_26807);
var then_26809 = cljs.core.get.call(null,map__26789_26808__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__26790_26810 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_26806));
var chunk__26791_26811 = null;
var count__26792_26812 = (0);
var i__26793_26813 = (0);
while(true){
if((i__26793_26813 < count__26792_26812)){
var test_26814 = cljs.core._nth.call(null,chunk__26791_26811,i__26793_26813);
cljs.compiler.emitln.call(null,"case ",test_26814,":");


var G__26815 = seq__26790_26810;
var G__26816 = chunk__26791_26811;
var G__26817 = count__26792_26812;
var G__26818 = (i__26793_26813 + (1));
seq__26790_26810 = G__26815;
chunk__26791_26811 = G__26816;
count__26792_26812 = G__26817;
i__26793_26813 = G__26818;
continue;
} else {
var temp__5804__auto___26819 = cljs.core.seq.call(null,seq__26790_26810);
if(temp__5804__auto___26819){
var seq__26790_26820__$1 = temp__5804__auto___26819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26790_26820__$1)){
var c__5565__auto___26821 = cljs.core.chunk_first.call(null,seq__26790_26820__$1);
var G__26822 = cljs.core.chunk_rest.call(null,seq__26790_26820__$1);
var G__26823 = c__5565__auto___26821;
var G__26824 = cljs.core.count.call(null,c__5565__auto___26821);
var G__26825 = (0);
seq__26790_26810 = G__26822;
chunk__26791_26811 = G__26823;
count__26792_26812 = G__26824;
i__26793_26813 = G__26825;
continue;
} else {
var test_26826 = cljs.core.first.call(null,seq__26790_26820__$1);
cljs.compiler.emitln.call(null,"case ",test_26826,":");


var G__26827 = cljs.core.next.call(null,seq__26790_26820__$1);
var G__26828 = null;
var G__26829 = (0);
var G__26830 = (0);
seq__26790_26810 = G__26827;
chunk__26791_26811 = G__26828;
count__26792_26812 = G__26829;
i__26793_26813 = G__26830;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_26809);
} else {
cljs.compiler.emitln.call(null,then_26809);
}

cljs.compiler.emitln.call(null,"break;");


var G__26831 = seq__26772_26800;
var G__26832 = chunk__26773_26801;
var G__26833 = count__26774_26802;
var G__26834 = (i__26775_26803 + (1));
seq__26772_26800 = G__26831;
chunk__26773_26801 = G__26832;
count__26774_26802 = G__26833;
i__26775_26803 = G__26834;
continue;
} else {
var temp__5804__auto___26835 = cljs.core.seq.call(null,seq__26772_26800);
if(temp__5804__auto___26835){
var seq__26772_26836__$1 = temp__5804__auto___26835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26772_26836__$1)){
var c__5565__auto___26837 = cljs.core.chunk_first.call(null,seq__26772_26836__$1);
var G__26838 = cljs.core.chunk_rest.call(null,seq__26772_26836__$1);
var G__26839 = c__5565__auto___26837;
var G__26840 = cljs.core.count.call(null,c__5565__auto___26837);
var G__26841 = (0);
seq__26772_26800 = G__26838;
chunk__26773_26801 = G__26839;
count__26774_26802 = G__26840;
i__26775_26803 = G__26841;
continue;
} else {
var map__26794_26842 = cljs.core.first.call(null,seq__26772_26836__$1);
var map__26794_26843__$1 = cljs.core.__destructure_map.call(null,map__26794_26842);
var ts_26844 = cljs.core.get.call(null,map__26794_26843__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__26795_26845 = cljs.core.get.call(null,map__26794_26843__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__26795_26846__$1 = cljs.core.__destructure_map.call(null,map__26795_26845);
var then_26847 = cljs.core.get.call(null,map__26795_26846__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__26796_26848 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_26844));
var chunk__26797_26849 = null;
var count__26798_26850 = (0);
var i__26799_26851 = (0);
while(true){
if((i__26799_26851 < count__26798_26850)){
var test_26852 = cljs.core._nth.call(null,chunk__26797_26849,i__26799_26851);
cljs.compiler.emitln.call(null,"case ",test_26852,":");


var G__26853 = seq__26796_26848;
var G__26854 = chunk__26797_26849;
var G__26855 = count__26798_26850;
var G__26856 = (i__26799_26851 + (1));
seq__26796_26848 = G__26853;
chunk__26797_26849 = G__26854;
count__26798_26850 = G__26855;
i__26799_26851 = G__26856;
continue;
} else {
var temp__5804__auto___26857__$1 = cljs.core.seq.call(null,seq__26796_26848);
if(temp__5804__auto___26857__$1){
var seq__26796_26858__$1 = temp__5804__auto___26857__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26796_26858__$1)){
var c__5565__auto___26859 = cljs.core.chunk_first.call(null,seq__26796_26858__$1);
var G__26860 = cljs.core.chunk_rest.call(null,seq__26796_26858__$1);
var G__26861 = c__5565__auto___26859;
var G__26862 = cljs.core.count.call(null,c__5565__auto___26859);
var G__26863 = (0);
seq__26796_26848 = G__26860;
chunk__26797_26849 = G__26861;
count__26798_26850 = G__26862;
i__26799_26851 = G__26863;
continue;
} else {
var test_26864 = cljs.core.first.call(null,seq__26796_26858__$1);
cljs.compiler.emitln.call(null,"case ",test_26864,":");


var G__26865 = cljs.core.next.call(null,seq__26796_26858__$1);
var G__26866 = null;
var G__26867 = (0);
var G__26868 = (0);
seq__26796_26848 = G__26865;
chunk__26797_26849 = G__26866;
count__26798_26850 = G__26867;
i__26799_26851 = G__26868;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_26847);
} else {
cljs.compiler.emitln.call(null,then_26847);
}

cljs.compiler.emitln.call(null,"break;");


var G__26869 = cljs.core.next.call(null,seq__26772_26836__$1);
var G__26870 = null;
var G__26871 = (0);
var G__26872 = (0);
seq__26772_26800 = G__26869;
chunk__26773_26801 = G__26870;
count__26774_26802 = G__26871;
i__26775_26803 = G__26872;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__26873){
var map__26874 = p__26873;
var map__26874__$1 = cljs.core.__destructure_map.call(null,map__26874);
var throw$ = cljs.core.get.call(null,map__26874__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__26874__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(goog.string.startsWith(t,"!")){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(goog.string.startsWith(t,"{")){
return t;
} else {
if(goog.string.startsWith(t,"function")){
var idx = t.lastIndexOf(":");
var vec__26876 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__26876,(0),null);
var rstr = cljs.core.nth.call(null,vec__26876,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__26875_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__26875_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__26879 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__26879,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__26879;
}
} else {
if(goog.string.endsWith(t,"=")){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__26880_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__26880_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__26881 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__26882 = cljs.core.seq.call(null,vec__26881);
var first__26883 = cljs.core.first.call(null,seq__26882);
var seq__26882__$1 = cljs.core.next.call(null,seq__26882);
var p = first__26883;
var first__26883__$1 = cljs.core.first.call(null,seq__26882__$1);
var seq__26882__$2 = cljs.core.next.call(null,seq__26882__$1);
var ts = first__26883__$1;
var first__26883__$2 = cljs.core.first.call(null,seq__26882__$2);
var seq__26882__$3 = cljs.core.next.call(null,seq__26882__$2);
var n = first__26883__$2;
var xs = seq__26882__$3;
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__5041__auto__){
var and__5041__auto____$1 = ts;
if(cljs.core.truth_(and__5041__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__26884 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__26885 = cljs.core.seq.call(null,vec__26884);
var first__26886 = cljs.core.first.call(null,seq__26885);
var seq__26885__$1 = cljs.core.next.call(null,seq__26885);
var p = first__26886;
var first__26886__$1 = cljs.core.first.call(null,seq__26885__$1);
var seq__26885__$2 = cljs.core.next.call(null,seq__26885__$1);
var ts = first__26886__$1;
var xs = seq__26885__$2;
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__5041__auto__){
var and__5041__auto____$1 = ts;
if(cljs.core.truth_(and__5041__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__26889 = arguments.length;
switch (G__26889) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__26897 = cljs.core.map.call(null,(function (p1__26887_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__26887_SHARP_);
} else {
return p1__26887_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__26898 = cljs.core.seq.call(null,vec__26897);
var first__26899 = cljs.core.first.call(null,seq__26898);
var seq__26898__$1 = cljs.core.next.call(null,seq__26898);
var x = first__26899;
var ys = seq__26898__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__26900 = cljs.core.seq.call(null,ys);
var chunk__26901 = null;
var count__26902 = (0);
var i__26903 = (0);
while(true){
if((i__26903 < count__26902)){
var next_line = cljs.core._nth.call(null,chunk__26901,i__26903);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__26909 = seq__26900;
var G__26910 = chunk__26901;
var G__26911 = count__26902;
var G__26912 = (i__26903 + (1));
seq__26900 = G__26909;
chunk__26901 = G__26910;
count__26902 = G__26911;
i__26903 = G__26912;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__26900);
if(temp__5804__auto__){
var seq__26900__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26900__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__26900__$1);
var G__26913 = cljs.core.chunk_rest.call(null,seq__26900__$1);
var G__26914 = c__5565__auto__;
var G__26915 = cljs.core.count.call(null,c__5565__auto__);
var G__26916 = (0);
seq__26900 = G__26913;
chunk__26901 = G__26914;
count__26902 = G__26915;
i__26903 = G__26916;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__26900__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__26917 = cljs.core.next.call(null,seq__26900__$1);
var G__26918 = null;
var G__26919 = (0);
var G__26920 = (0);
seq__26900 = G__26917;
chunk__26901 = G__26918;
count__26902 = G__26919;
i__26903 = G__26920;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__26904_26921 = cljs.core.seq.call(null,docs__$2);
var chunk__26905_26922 = null;
var count__26906_26923 = (0);
var i__26907_26924 = (0);
while(true){
if((i__26907_26924 < count__26906_26923)){
var e_26925 = cljs.core._nth.call(null,chunk__26905_26922,i__26907_26924);
if(cljs.core.truth_(e_26925)){
print_comment_lines.call(null,e_26925);
} else {
}


var G__26926 = seq__26904_26921;
var G__26927 = chunk__26905_26922;
var G__26928 = count__26906_26923;
var G__26929 = (i__26907_26924 + (1));
seq__26904_26921 = G__26926;
chunk__26905_26922 = G__26927;
count__26906_26923 = G__26928;
i__26907_26924 = G__26929;
continue;
} else {
var temp__5804__auto___26930 = cljs.core.seq.call(null,seq__26904_26921);
if(temp__5804__auto___26930){
var seq__26904_26931__$1 = temp__5804__auto___26930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26904_26931__$1)){
var c__5565__auto___26932 = cljs.core.chunk_first.call(null,seq__26904_26931__$1);
var G__26933 = cljs.core.chunk_rest.call(null,seq__26904_26931__$1);
var G__26934 = c__5565__auto___26932;
var G__26935 = cljs.core.count.call(null,c__5565__auto___26932);
var G__26936 = (0);
seq__26904_26921 = G__26933;
chunk__26905_26922 = G__26934;
count__26906_26923 = G__26935;
i__26907_26924 = G__26936;
continue;
} else {
var e_26937 = cljs.core.first.call(null,seq__26904_26931__$1);
if(cljs.core.truth_(e_26937)){
print_comment_lines.call(null,e_26937);
} else {
}


var G__26938 = cljs.core.next.call(null,seq__26904_26931__$1);
var G__26939 = null;
var G__26940 = (0);
var G__26941 = (0);
seq__26904_26921 = G__26938;
chunk__26905_26922 = G__26939;
count__26906_26923 = G__26940;
i__26907_26924 = G__26941;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (((x === true) || (((x === false) || (typeof x === 'number'))))));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__5041__auto__ = cljs.core.some.call(null,(function (p1__26943_SHARP_){
return goog.string.startsWith(p1__26943_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = opts;
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__5041__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__26944){
var map__26945 = p__26944;
var map__26945__$1 = cljs.core.__destructure_map.call(null,map__26945);
var doc = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__5043__auto__ = init;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,(cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5802__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5802__auto__)){
var define = temp__5802__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__5041__auto__)){
return test;
} else {
return and__5041__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__26946){
var map__26947 = p__26946;
var map__26947__$1 = cljs.core.__destructure_map.call(null,map__26947);
var name = cljs.core.get.call(null,map__26947__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__26947__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__26947__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__26948_26972 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__26949_26973 = null;
var count__26950_26974 = (0);
var i__26951_26975 = (0);
while(true){
if((i__26951_26975 < count__26950_26974)){
var vec__26958_26976 = cljs.core._nth.call(null,chunk__26949_26973,i__26951_26975);
var i_26977 = cljs.core.nth.call(null,vec__26958_26976,(0),null);
var param_26978 = cljs.core.nth.call(null,vec__26958_26976,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_26978);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__26979 = seq__26948_26972;
var G__26980 = chunk__26949_26973;
var G__26981 = count__26950_26974;
var G__26982 = (i__26951_26975 + (1));
seq__26948_26972 = G__26979;
chunk__26949_26973 = G__26980;
count__26950_26974 = G__26981;
i__26951_26975 = G__26982;
continue;
} else {
var temp__5804__auto___26983 = cljs.core.seq.call(null,seq__26948_26972);
if(temp__5804__auto___26983){
var seq__26948_26984__$1 = temp__5804__auto___26983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26948_26984__$1)){
var c__5565__auto___26985 = cljs.core.chunk_first.call(null,seq__26948_26984__$1);
var G__26986 = cljs.core.chunk_rest.call(null,seq__26948_26984__$1);
var G__26987 = c__5565__auto___26985;
var G__26988 = cljs.core.count.call(null,c__5565__auto___26985);
var G__26989 = (0);
seq__26948_26972 = G__26986;
chunk__26949_26973 = G__26987;
count__26950_26974 = G__26988;
i__26951_26975 = G__26989;
continue;
} else {
var vec__26961_26990 = cljs.core.first.call(null,seq__26948_26984__$1);
var i_26991 = cljs.core.nth.call(null,vec__26961_26990,(0),null);
var param_26992 = cljs.core.nth.call(null,vec__26961_26990,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_26992);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__26993 = cljs.core.next.call(null,seq__26948_26984__$1);
var G__26994 = null;
var G__26995 = (0);
var G__26996 = (0);
seq__26948_26972 = G__26993;
chunk__26949_26973 = G__26994;
count__26950_26974 = G__26995;
i__26951_26975 = G__26996;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__26964_26997 = cljs.core.seq.call(null,params);
var chunk__26965_26998 = null;
var count__26966_26999 = (0);
var i__26967_27000 = (0);
while(true){
if((i__26967_27000 < count__26966_26999)){
var param_27001 = cljs.core._nth.call(null,chunk__26965_26998,i__26967_27000);
cljs.compiler.emit.call(null,param_27001);

if(cljs.core._EQ_.call(null,param_27001,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27002 = seq__26964_26997;
var G__27003 = chunk__26965_26998;
var G__27004 = count__26966_26999;
var G__27005 = (i__26967_27000 + (1));
seq__26964_26997 = G__27002;
chunk__26965_26998 = G__27003;
count__26966_26999 = G__27004;
i__26967_27000 = G__27005;
continue;
} else {
var temp__5804__auto___27006 = cljs.core.seq.call(null,seq__26964_26997);
if(temp__5804__auto___27006){
var seq__26964_27007__$1 = temp__5804__auto___27006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26964_27007__$1)){
var c__5565__auto___27008 = cljs.core.chunk_first.call(null,seq__26964_27007__$1);
var G__27009 = cljs.core.chunk_rest.call(null,seq__26964_27007__$1);
var G__27010 = c__5565__auto___27008;
var G__27011 = cljs.core.count.call(null,c__5565__auto___27008);
var G__27012 = (0);
seq__26964_26997 = G__27009;
chunk__26965_26998 = G__27010;
count__26966_26999 = G__27011;
i__26967_27000 = G__27012;
continue;
} else {
var param_27013 = cljs.core.first.call(null,seq__26964_27007__$1);
cljs.compiler.emit.call(null,param_27013);

if(cljs.core._EQ_.call(null,param_27013,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27014 = cljs.core.next.call(null,seq__26964_27007__$1);
var G__27015 = null;
var G__27016 = (0);
var G__27017 = (0);
seq__26964_26997 = G__27014;
chunk__26965_26998 = G__27015;
count__26966_26999 = G__27016;
i__26967_27000 = G__27017;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__26968_27018 = cljs.core.seq.call(null,params);
var chunk__26969_27019 = null;
var count__26970_27020 = (0);
var i__26971_27021 = (0);
while(true){
if((i__26971_27021 < count__26970_27020)){
var param_27022 = cljs.core._nth.call(null,chunk__26969_27019,i__26971_27021);
cljs.compiler.emit.call(null,param_27022);

if(cljs.core._EQ_.call(null,param_27022,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27023 = seq__26968_27018;
var G__27024 = chunk__26969_27019;
var G__27025 = count__26970_27020;
var G__27026 = (i__26971_27021 + (1));
seq__26968_27018 = G__27023;
chunk__26969_27019 = G__27024;
count__26970_27020 = G__27025;
i__26971_27021 = G__27026;
continue;
} else {
var temp__5804__auto___27027 = cljs.core.seq.call(null,seq__26968_27018);
if(temp__5804__auto___27027){
var seq__26968_27028__$1 = temp__5804__auto___27027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26968_27028__$1)){
var c__5565__auto___27029 = cljs.core.chunk_first.call(null,seq__26968_27028__$1);
var G__27030 = cljs.core.chunk_rest.call(null,seq__26968_27028__$1);
var G__27031 = c__5565__auto___27029;
var G__27032 = cljs.core.count.call(null,c__5565__auto___27029);
var G__27033 = (0);
seq__26968_27018 = G__27030;
chunk__26969_27019 = G__27031;
count__26970_27020 = G__27032;
i__26971_27021 = G__27033;
continue;
} else {
var param_27034 = cljs.core.first.call(null,seq__26968_27028__$1);
cljs.compiler.emit.call(null,param_27034);

if(cljs.core._EQ_.call(null,param_27034,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27035 = cljs.core.next.call(null,seq__26968_27028__$1);
var G__27036 = null;
var G__27037 = (0);
var G__27038 = (0);
seq__26968_27018 = G__27035;
chunk__26969_27019 = G__27036;
count__26970_27020 = G__27037;
i__26971_27021 = G__27038;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__27039 = cljs.core.seq.call(null,params);
var chunk__27040 = null;
var count__27041 = (0);
var i__27042 = (0);
while(true){
if((i__27042 < count__27041)){
var param = cljs.core._nth.call(null,chunk__27040,i__27042);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27043 = seq__27039;
var G__27044 = chunk__27040;
var G__27045 = count__27041;
var G__27046 = (i__27042 + (1));
seq__27039 = G__27043;
chunk__27040 = G__27044;
count__27041 = G__27045;
i__27042 = G__27046;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__27039);
if(temp__5804__auto__){
var seq__27039__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27039__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__27039__$1);
var G__27047 = cljs.core.chunk_rest.call(null,seq__27039__$1);
var G__27048 = c__5565__auto__;
var G__27049 = cljs.core.count.call(null,c__5565__auto__);
var G__27050 = (0);
seq__27039 = G__27047;
chunk__27040 = G__27048;
count__27041 = G__27049;
i__27042 = G__27050;
continue;
} else {
var param = cljs.core.first.call(null,seq__27039__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27051 = cljs.core.next.call(null,seq__27039__$1);
var G__27052 = null;
var G__27053 = (0);
var G__27054 = (0);
seq__27039 = G__27051;
chunk__27040 = G__27052;
count__27041 = G__27053;
i__27042 = G__27054;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__27055){
var map__27056 = p__27055;
var map__27056__$1 = cljs.core.__destructure_map.call(null,map__27056);
var expr = cljs.core.get.call(null,map__27056__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__27056__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__27056__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__27056__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__27056__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__27056__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__27057){
var map__27058 = p__27057;
var map__27058__$1 = cljs.core.__destructure_map.call(null,map__27058);
var f = map__27058__$1;
var expr = cljs.core.get.call(null,map__27058__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__27058__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__27058__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__27058__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__27058__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__27058__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__27058__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__27058__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_27067__$1 = (function (){var or__5043__auto__ = name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_27068 = cljs.compiler.munge.call(null,name_27067__$1);
var delegate_name_27069 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_27068),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_27069," = function (");

var seq__27059_27070 = cljs.core.seq.call(null,params);
var chunk__27060_27071 = null;
var count__27061_27072 = (0);
var i__27062_27073 = (0);
while(true){
if((i__27062_27073 < count__27061_27072)){
var param_27074 = cljs.core._nth.call(null,chunk__27060_27071,i__27062_27073);
cljs.compiler.emit.call(null,param_27074);

if(cljs.core._EQ_.call(null,param_27074,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27075 = seq__27059_27070;
var G__27076 = chunk__27060_27071;
var G__27077 = count__27061_27072;
var G__27078 = (i__27062_27073 + (1));
seq__27059_27070 = G__27075;
chunk__27060_27071 = G__27076;
count__27061_27072 = G__27077;
i__27062_27073 = G__27078;
continue;
} else {
var temp__5804__auto___27079 = cljs.core.seq.call(null,seq__27059_27070);
if(temp__5804__auto___27079){
var seq__27059_27080__$1 = temp__5804__auto___27079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27059_27080__$1)){
var c__5565__auto___27081 = cljs.core.chunk_first.call(null,seq__27059_27080__$1);
var G__27082 = cljs.core.chunk_rest.call(null,seq__27059_27080__$1);
var G__27083 = c__5565__auto___27081;
var G__27084 = cljs.core.count.call(null,c__5565__auto___27081);
var G__27085 = (0);
seq__27059_27070 = G__27082;
chunk__27060_27071 = G__27083;
count__27061_27072 = G__27084;
i__27062_27073 = G__27085;
continue;
} else {
var param_27086 = cljs.core.first.call(null,seq__27059_27080__$1);
cljs.compiler.emit.call(null,param_27086);

if(cljs.core._EQ_.call(null,param_27086,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27087 = cljs.core.next.call(null,seq__27059_27080__$1);
var G__27088 = null;
var G__27089 = (0);
var G__27090 = (0);
seq__27059_27070 = G__27087;
chunk__27060_27071 = G__27088;
count__27061_27072 = G__27089;
i__27062_27073 = G__27090;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_27068," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_27091 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_27091,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_27069,".call(this,");

var seq__27063_27092 = cljs.core.seq.call(null,params);
var chunk__27064_27093 = null;
var count__27065_27094 = (0);
var i__27066_27095 = (0);
while(true){
if((i__27066_27095 < count__27065_27094)){
var param_27096 = cljs.core._nth.call(null,chunk__27064_27093,i__27066_27095);
cljs.compiler.emit.call(null,param_27096);

if(cljs.core._EQ_.call(null,param_27096,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27097 = seq__27063_27092;
var G__27098 = chunk__27064_27093;
var G__27099 = count__27065_27094;
var G__27100 = (i__27066_27095 + (1));
seq__27063_27092 = G__27097;
chunk__27064_27093 = G__27098;
count__27065_27094 = G__27099;
i__27066_27095 = G__27100;
continue;
} else {
var temp__5804__auto___27101 = cljs.core.seq.call(null,seq__27063_27092);
if(temp__5804__auto___27101){
var seq__27063_27102__$1 = temp__5804__auto___27101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27063_27102__$1)){
var c__5565__auto___27103 = cljs.core.chunk_first.call(null,seq__27063_27102__$1);
var G__27104 = cljs.core.chunk_rest.call(null,seq__27063_27102__$1);
var G__27105 = c__5565__auto___27103;
var G__27106 = cljs.core.count.call(null,c__5565__auto___27103);
var G__27107 = (0);
seq__27063_27092 = G__27104;
chunk__27064_27093 = G__27105;
count__27065_27094 = G__27106;
i__27066_27095 = G__27107;
continue;
} else {
var param_27108 = cljs.core.first.call(null,seq__27063_27102__$1);
cljs.compiler.emit.call(null,param_27108);

if(cljs.core._EQ_.call(null,param_27108,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__27109 = cljs.core.next.call(null,seq__27063_27102__$1);
var G__27110 = null;
var G__27111 = (0);
var G__27112 = (0);
seq__27063_27092 = G__27109;
chunk__27064_27093 = G__27110;
count__27065_27094 = G__27111;
i__27066_27095 = G__27112;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_27068,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_27068,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_27067__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_27068,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_27069,";");

cljs.compiler.emitln.call(null,"return ",mname_27068,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__27116){
var map__27117 = p__27116;
var map__27117__$1 = cljs.core.__destructure_map.call(null,map__27117);
var variadic = cljs.core.get.call(null,map__27117__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__27117__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__27117__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__27117__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__27117__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__27117__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__27117__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__27117__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__27113_SHARP_){
var and__5041__auto__ = p1__27113_SHARP_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__27113_SHARP_));
} else {
return and__5041__auto__;
}
}),recur_frames));
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,recur_params,(cljs.core.truth_((function (){var or__5043__auto__ = in_loop;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.seq.call(null,recur_params);
}
})())?cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets):null))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_27169__$1 = (function (){var or__5043__auto__ = name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_27170 = cljs.compiler.munge.call(null,name_27169__$1);
var maxparams_27171 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_27172 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_27170),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_27173 = cljs.core.sort_by.call(null,(function (p1__27114_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__27114_SHARP_)));
}),cljs.core.seq.call(null,mmap_27172));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_27170," = null;");

var seq__27118_27174 = cljs.core.seq.call(null,ms_27173);
var chunk__27119_27175 = null;
var count__27120_27176 = (0);
var i__27121_27177 = (0);
while(true){
if((i__27121_27177 < count__27120_27176)){
var vec__27128_27178 = cljs.core._nth.call(null,chunk__27119_27175,i__27121_27177);
var n_27179 = cljs.core.nth.call(null,vec__27128_27178,(0),null);
var meth_27180 = cljs.core.nth.call(null,vec__27128_27178,(1),null);
cljs.compiler.emits.call(null,"var ",n_27179," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27180))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_27180);
} else {
cljs.compiler.emit_fn_method.call(null,meth_27180);
}

cljs.compiler.emitln.call(null,";");


var G__27181 = seq__27118_27174;
var G__27182 = chunk__27119_27175;
var G__27183 = count__27120_27176;
var G__27184 = (i__27121_27177 + (1));
seq__27118_27174 = G__27181;
chunk__27119_27175 = G__27182;
count__27120_27176 = G__27183;
i__27121_27177 = G__27184;
continue;
} else {
var temp__5804__auto___27185 = cljs.core.seq.call(null,seq__27118_27174);
if(temp__5804__auto___27185){
var seq__27118_27186__$1 = temp__5804__auto___27185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27118_27186__$1)){
var c__5565__auto___27187 = cljs.core.chunk_first.call(null,seq__27118_27186__$1);
var G__27188 = cljs.core.chunk_rest.call(null,seq__27118_27186__$1);
var G__27189 = c__5565__auto___27187;
var G__27190 = cljs.core.count.call(null,c__5565__auto___27187);
var G__27191 = (0);
seq__27118_27174 = G__27188;
chunk__27119_27175 = G__27189;
count__27120_27176 = G__27190;
i__27121_27177 = G__27191;
continue;
} else {
var vec__27131_27192 = cljs.core.first.call(null,seq__27118_27186__$1);
var n_27193 = cljs.core.nth.call(null,vec__27131_27192,(0),null);
var meth_27194 = cljs.core.nth.call(null,vec__27131_27192,(1),null);
cljs.compiler.emits.call(null,"var ",n_27193," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27194))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_27194);
} else {
cljs.compiler.emit_fn_method.call(null,meth_27194);
}

cljs.compiler.emitln.call(null,";");


var G__27195 = cljs.core.next.call(null,seq__27118_27186__$1);
var G__27196 = null;
var G__27197 = (0);
var G__27198 = (0);
seq__27118_27174 = G__27195;
chunk__27119_27175 = G__27196;
count__27120_27176 = G__27197;
i__27121_27177 = G__27198;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_27170," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_27171),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_27171)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_27171));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__27134_27199 = cljs.core.seq.call(null,ms_27173);
var chunk__27135_27200 = null;
var count__27136_27201 = (0);
var i__27137_27202 = (0);
while(true){
if((i__27137_27202 < count__27136_27201)){
var vec__27144_27203 = cljs.core._nth.call(null,chunk__27135_27200,i__27137_27202);
var n_27204 = cljs.core.nth.call(null,vec__27144_27203,(0),null);
var meth_27205 = cljs.core.nth.call(null,vec__27144_27203,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27205))){
cljs.compiler.emitln.call(null,"default:");

var restarg_27206 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_27206," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_27207 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_27206," = new cljs.core.IndexedSeq(",a_27207,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_27204,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_27171)),(((cljs.core.count.call(null,maxparams_27171) > (1)))?", ":null),restarg_27206,");");
} else {
var pcnt_27208 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27205));
cljs.compiler.emitln.call(null,"case ",pcnt_27208,":");

cljs.compiler.emitln.call(null,"return ",n_27204,".call(this",(((pcnt_27208 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_27208,maxparams_27171)),null,(1),null)),(2),null))),");");
}


var G__27209 = seq__27134_27199;
var G__27210 = chunk__27135_27200;
var G__27211 = count__27136_27201;
var G__27212 = (i__27137_27202 + (1));
seq__27134_27199 = G__27209;
chunk__27135_27200 = G__27210;
count__27136_27201 = G__27211;
i__27137_27202 = G__27212;
continue;
} else {
var temp__5804__auto___27213 = cljs.core.seq.call(null,seq__27134_27199);
if(temp__5804__auto___27213){
var seq__27134_27214__$1 = temp__5804__auto___27213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27134_27214__$1)){
var c__5565__auto___27215 = cljs.core.chunk_first.call(null,seq__27134_27214__$1);
var G__27216 = cljs.core.chunk_rest.call(null,seq__27134_27214__$1);
var G__27217 = c__5565__auto___27215;
var G__27218 = cljs.core.count.call(null,c__5565__auto___27215);
var G__27219 = (0);
seq__27134_27199 = G__27216;
chunk__27135_27200 = G__27217;
count__27136_27201 = G__27218;
i__27137_27202 = G__27219;
continue;
} else {
var vec__27147_27220 = cljs.core.first.call(null,seq__27134_27214__$1);
var n_27221 = cljs.core.nth.call(null,vec__27147_27220,(0),null);
var meth_27222 = cljs.core.nth.call(null,vec__27147_27220,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27222))){
cljs.compiler.emitln.call(null,"default:");

var restarg_27223 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_27223," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_27224 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_27223," = new cljs.core.IndexedSeq(",a_27224,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_27221,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_27171)),(((cljs.core.count.call(null,maxparams_27171) > (1)))?", ":null),restarg_27223,");");
} else {
var pcnt_27225 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27222));
cljs.compiler.emitln.call(null,"case ",pcnt_27225,":");

cljs.compiler.emitln.call(null,"return ",n_27221,".call(this",(((pcnt_27225 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_27225,maxparams_27171)),null,(1),null)),(2),null))),");");
}


var G__27226 = cljs.core.next.call(null,seq__27134_27214__$1);
var G__27227 = null;
var G__27228 = (0);
var G__27229 = (0);
seq__27134_27199 = G__27226;
chunk__27135_27200 = G__27227;
count__27136_27201 = G__27228;
i__27137_27202 = G__27229;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_27230 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_27173)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_27230,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_27170,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_27170,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__27115_SHARP_){
var vec__27150 = p1__27115_SHARP_;
var n = cljs.core.nth.call(null,vec__27150,(0),null);
var m = cljs.core.nth.call(null,vec__27150,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_27173),".cljs$lang$applyTo;");
} else {
}

var seq__27153_27231 = cljs.core.seq.call(null,ms_27173);
var chunk__27154_27232 = null;
var count__27155_27233 = (0);
var i__27156_27234 = (0);
while(true){
if((i__27156_27234 < count__27155_27233)){
var vec__27163_27235 = cljs.core._nth.call(null,chunk__27154_27232,i__27156_27234);
var n_27236 = cljs.core.nth.call(null,vec__27163_27235,(0),null);
var meth_27237 = cljs.core.nth.call(null,vec__27163_27235,(1),null);
var c_27238 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27237));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27237))){
cljs.compiler.emitln.call(null,mname_27170,".cljs$core$IFn$_invoke$arity$variadic = ",n_27236,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_27170,".cljs$core$IFn$_invoke$arity$",c_27238," = ",n_27236,";");
}


var G__27239 = seq__27153_27231;
var G__27240 = chunk__27154_27232;
var G__27241 = count__27155_27233;
var G__27242 = (i__27156_27234 + (1));
seq__27153_27231 = G__27239;
chunk__27154_27232 = G__27240;
count__27155_27233 = G__27241;
i__27156_27234 = G__27242;
continue;
} else {
var temp__5804__auto___27243 = cljs.core.seq.call(null,seq__27153_27231);
if(temp__5804__auto___27243){
var seq__27153_27244__$1 = temp__5804__auto___27243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27153_27244__$1)){
var c__5565__auto___27245 = cljs.core.chunk_first.call(null,seq__27153_27244__$1);
var G__27246 = cljs.core.chunk_rest.call(null,seq__27153_27244__$1);
var G__27247 = c__5565__auto___27245;
var G__27248 = cljs.core.count.call(null,c__5565__auto___27245);
var G__27249 = (0);
seq__27153_27231 = G__27246;
chunk__27154_27232 = G__27247;
count__27155_27233 = G__27248;
i__27156_27234 = G__27249;
continue;
} else {
var vec__27166_27250 = cljs.core.first.call(null,seq__27153_27244__$1);
var n_27251 = cljs.core.nth.call(null,vec__27166_27250,(0),null);
var meth_27252 = cljs.core.nth.call(null,vec__27166_27250,(1),null);
var c_27253 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27252));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_27252))){
cljs.compiler.emitln.call(null,mname_27170,".cljs$core$IFn$_invoke$arity$variadic = ",n_27251,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_27170,".cljs$core$IFn$_invoke$arity$",c_27253," = ",n_27251,";");
}


var G__27254 = cljs.core.next.call(null,seq__27153_27244__$1);
var G__27255 = null;
var G__27256 = (0);
var G__27257 = (0);
seq__27153_27231 = G__27254;
chunk__27154_27232 = G__27255;
count__27155_27233 = G__27256;
i__27156_27234 = G__27257;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_27170,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__27258){
var map__27259 = p__27258;
var map__27259__$1 = cljs.core.__destructure_map.call(null,map__27259);
var statements = cljs.core.get.call(null,map__27259__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__27259__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__27259__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__27260_27264 = cljs.core.seq.call(null,statements);
var chunk__27261_27265 = null;
var count__27262_27266 = (0);
var i__27263_27267 = (0);
while(true){
if((i__27263_27267 < count__27262_27266)){
var s_27268 = cljs.core._nth.call(null,chunk__27261_27265,i__27263_27267);
cljs.compiler.emitln.call(null,s_27268);


var G__27269 = seq__27260_27264;
var G__27270 = chunk__27261_27265;
var G__27271 = count__27262_27266;
var G__27272 = (i__27263_27267 + (1));
seq__27260_27264 = G__27269;
chunk__27261_27265 = G__27270;
count__27262_27266 = G__27271;
i__27263_27267 = G__27272;
continue;
} else {
var temp__5804__auto___27273 = cljs.core.seq.call(null,seq__27260_27264);
if(temp__5804__auto___27273){
var seq__27260_27274__$1 = temp__5804__auto___27273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27260_27274__$1)){
var c__5565__auto___27275 = cljs.core.chunk_first.call(null,seq__27260_27274__$1);
var G__27276 = cljs.core.chunk_rest.call(null,seq__27260_27274__$1);
var G__27277 = c__5565__auto___27275;
var G__27278 = cljs.core.count.call(null,c__5565__auto___27275);
var G__27279 = (0);
seq__27260_27264 = G__27276;
chunk__27261_27265 = G__27277;
count__27262_27266 = G__27278;
i__27263_27267 = G__27279;
continue;
} else {
var s_27280 = cljs.core.first.call(null,seq__27260_27274__$1);
cljs.compiler.emitln.call(null,s_27280);


var G__27281 = cljs.core.next.call(null,seq__27260_27274__$1);
var G__27282 = null;
var G__27283 = (0);
var G__27284 = (0);
seq__27260_27264 = G__27281;
chunk__27261_27265 = G__27282;
count__27262_27266 = G__27283;
i__27263_27267 = G__27284;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__27285){
var map__27286 = p__27285;
var map__27286__$1 = cljs.core.__destructure_map.call(null,map__27286);
var try$ = cljs.core.get.call(null,map__27286__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__27286__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__27286__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__27286__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__27286__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__5043__auto__ = name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__27287,is_loop){
var map__27288 = p__27287;
var map__27288__$1 = cljs.core.__destructure_map.call(null,map__27288);
var expr = cljs.core.get.call(null,map__27288__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__27288__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__27288__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__27289_27299 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__27290_27300 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__27290_27300);

try{var seq__27291_27301 = cljs.core.seq.call(null,bindings);
var chunk__27292_27302 = null;
var count__27293_27303 = (0);
var i__27294_27304 = (0);
while(true){
if((i__27294_27304 < count__27293_27303)){
var map__27297_27305 = cljs.core._nth.call(null,chunk__27292_27302,i__27294_27304);
var map__27297_27306__$1 = cljs.core.__destructure_map.call(null,map__27297_27305);
var binding_27307 = map__27297_27306__$1;
var init_27308 = cljs.core.get.call(null,map__27297_27306__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_27307);

cljs.compiler.emitln.call(null," = ",init_27308,";");


var G__27309 = seq__27291_27301;
var G__27310 = chunk__27292_27302;
var G__27311 = count__27293_27303;
var G__27312 = (i__27294_27304 + (1));
seq__27291_27301 = G__27309;
chunk__27292_27302 = G__27310;
count__27293_27303 = G__27311;
i__27294_27304 = G__27312;
continue;
} else {
var temp__5804__auto___27313 = cljs.core.seq.call(null,seq__27291_27301);
if(temp__5804__auto___27313){
var seq__27291_27314__$1 = temp__5804__auto___27313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27291_27314__$1)){
var c__5565__auto___27315 = cljs.core.chunk_first.call(null,seq__27291_27314__$1);
var G__27316 = cljs.core.chunk_rest.call(null,seq__27291_27314__$1);
var G__27317 = c__5565__auto___27315;
var G__27318 = cljs.core.count.call(null,c__5565__auto___27315);
var G__27319 = (0);
seq__27291_27301 = G__27316;
chunk__27292_27302 = G__27317;
count__27293_27303 = G__27318;
i__27294_27304 = G__27319;
continue;
} else {
var map__27298_27320 = cljs.core.first.call(null,seq__27291_27314__$1);
var map__27298_27321__$1 = cljs.core.__destructure_map.call(null,map__27298_27320);
var binding_27322 = map__27298_27321__$1;
var init_27323 = cljs.core.get.call(null,map__27298_27321__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_27322);

cljs.compiler.emitln.call(null," = ",init_27323,";");


var G__27324 = cljs.core.next.call(null,seq__27291_27314__$1);
var G__27325 = null;
var G__27326 = (0);
var G__27327 = (0);
seq__27291_27301 = G__27324;
chunk__27292_27302 = G__27325;
count__27293_27303 = G__27326;
i__27294_27304 = G__27327;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__27289_27299);
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__27328){
var map__27329 = p__27328;
var map__27329__$1 = cljs.core.__destructure_map.call(null,map__27329);
var frame = cljs.core.get.call(null,map__27329__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__27329__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__27329__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5633__auto___27330 = cljs.core.count.call(null,exprs);
var i_27331 = (0);
while(true){
if((i_27331 < n__5633__auto___27330)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_27331)," = ",exprs.call(null,i_27331),";");

var G__27332 = (i_27331 + (1));
i_27331 = G__27332;
continue;
} else {
}
break;
}

var n__5633__auto___27333 = cljs.core.count.call(null,exprs);
var i_27334 = (0);
while(true){
if((i_27334 < n__5633__auto___27333)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_27334))," = ",temps.call(null,i_27334),";");

var G__27335 = (i_27334 + (1));
i_27334 = G__27335;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__27336){
var map__27337 = p__27336;
var map__27337__$1 = cljs.core.__destructure_map.call(null,map__27337);
var expr = cljs.core.get.call(null,map__27337__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__27337__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__27337__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__27338_27346 = cljs.core.seq.call(null,bindings);
var chunk__27339_27347 = null;
var count__27340_27348 = (0);
var i__27341_27349 = (0);
while(true){
if((i__27341_27349 < count__27340_27348)){
var map__27344_27350 = cljs.core._nth.call(null,chunk__27339_27347,i__27341_27349);
var map__27344_27351__$1 = cljs.core.__destructure_map.call(null,map__27344_27350);
var binding_27352 = map__27344_27351__$1;
var init_27353 = cljs.core.get.call(null,map__27344_27351__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_27352)," = ",init_27353,";");


var G__27354 = seq__27338_27346;
var G__27355 = chunk__27339_27347;
var G__27356 = count__27340_27348;
var G__27357 = (i__27341_27349 + (1));
seq__27338_27346 = G__27354;
chunk__27339_27347 = G__27355;
count__27340_27348 = G__27356;
i__27341_27349 = G__27357;
continue;
} else {
var temp__5804__auto___27358 = cljs.core.seq.call(null,seq__27338_27346);
if(temp__5804__auto___27358){
var seq__27338_27359__$1 = temp__5804__auto___27358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27338_27359__$1)){
var c__5565__auto___27360 = cljs.core.chunk_first.call(null,seq__27338_27359__$1);
var G__27361 = cljs.core.chunk_rest.call(null,seq__27338_27359__$1);
var G__27362 = c__5565__auto___27360;
var G__27363 = cljs.core.count.call(null,c__5565__auto___27360);
var G__27364 = (0);
seq__27338_27346 = G__27361;
chunk__27339_27347 = G__27362;
count__27340_27348 = G__27363;
i__27341_27349 = G__27364;
continue;
} else {
var map__27345_27365 = cljs.core.first.call(null,seq__27338_27359__$1);
var map__27345_27366__$1 = cljs.core.__destructure_map.call(null,map__27345_27365);
var binding_27367 = map__27345_27366__$1;
var init_27368 = cljs.core.get.call(null,map__27345_27366__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_27367)," = ",init_27368,";");


var G__27369 = cljs.core.next.call(null,seq__27338_27359__$1);
var G__27370 = null;
var G__27371 = (0);
var G__27372 = (0);
seq__27338_27346 = G__27369;
chunk__27339_27347 = G__27370;
count__27340_27348 = G__27371;
i__27341_27349 = G__27372;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__27375){
var map__27376 = p__27375;
var map__27376__$1 = cljs.core.__destructure_map.call(null,map__27376);
var expr = map__27376__$1;
var f = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__5041__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__5041__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__5041__auto__ = protocol;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = tag;
if(cljs.core.truth_(and__5041__auto____$1)){
var or__5043__auto__ = (function (){var and__5041__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = protocol;
if(cljs.core.truth_(and__5041__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto____$2 = (function (){var or__5043__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__5041__auto____$2)){
var or__5043__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
var and__5041__auto____$3 = (!(cljs.core.set_QMARK_.call(null,tag)));
if(and__5041__auto____$3){
var and__5041__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag));
if(and__5041__auto____$4){
var temp__5804__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.vary_meta.call(null,tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5804__auto__)){
var ps = temp__5804__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__5041__auto____$4;
}
} else {
return and__5041__auto____$3;
}
}
} else {
return and__5041__auto____$2;
}
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null).call(null,first_arg_tag))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag.call(null,env,f);
var js_QMARK_ = (function (){var or__5043__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__5043__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (function (){var temp__5804__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5804__auto__)){
var ns_str = temp__5804__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__5043__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__27377 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (arity > mfa);
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__27373_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__27373_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__27374_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__27374_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__27377,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__27377,(1),null);
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.call(null,"((",cljs.core.first.call(null,args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_27380 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_27380,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_27381 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_27381,args)),(((mfa_27381 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_27381,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__5041__auto__;
}
})())){
var fprop_27382 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_27382," ? ",f__$1,fprop_27382,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_27382," ? ",f__$1,fprop_27382,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__27383){
var map__27384 = p__27383;
var map__27384__$1 = cljs.core.__destructure_map.call(null,map__27384);
var ctor = cljs.core.get.call(null,map__27384__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__27384__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__27384__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__27385){
var map__27386 = p__27385;
var map__27386__$1 = cljs.core.__destructure_map.call(null,map__27386);
var target = cljs.core.get.call(null,map__27386__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__27386__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__27386__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(",target," = ",val,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.sublib_select = (function cljs$compiler$sublib_select(sublib){
if(cljs.core.truth_(sublib)){
var xs = clojure.string.split.call(null,sublib,/\./);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__27387_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27387_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__27388 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__27388,(0),null);
var sublib = cljs.core.nth.call(null,vec__27388,(1),null);
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__5043__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib_SINGLEQUOTE_));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib_SINGLEQUOTE_));
}
})()),/\./))),cljs.compiler.sublib_select.call(null,sublib),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__27391 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__27391__$1 = cljs.core.__destructure_map.call(null,map__27391);
var options = cljs.core.get.call(null,map__27391__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__27391__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__27392 = options;
var map__27392__$1 = cljs.core.__destructure_map.call(null,map__27392);
var target = cljs.core.get.call(null,map__27392__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__27392__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__27392__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__27393 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__27399 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__27399__$1 = cljs.core.__destructure_map.call(null,map__27399);
var node_libs = cljs.core.get.call(null,map__27399__$1,true);
var libs_to_load = cljs.core.get.call(null,map__27399__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__27393,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__27393,(1),null);
var vec__27396 = (function (){var map__27400 = cljs.core.group_by.call(null,cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__27400__$1 = cljs.core.__destructure_map.call(null,map__27400);
var goog_modules = cljs.core.get.call(null,map__27400__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__27400__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.call(null,vec__27396,(0),null);
var libs_to_load__$1 = cljs.core.nth.call(null,vec__27396,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__27401_27445 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__27402_27446 = null;
var count__27403_27447 = (0);
var i__27404_27448 = (0);
while(true){
if((i__27404_27448 < count__27403_27447)){
var lib_27449 = cljs.core._nth.call(null,chunk__27402_27446,i__27404_27448);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_27449)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_27449),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27449),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_27449),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27449),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_27449,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27449),"');");
}

}
}
}


var G__27450 = seq__27401_27445;
var G__27451 = chunk__27402_27446;
var G__27452 = count__27403_27447;
var G__27453 = (i__27404_27448 + (1));
seq__27401_27445 = G__27450;
chunk__27402_27446 = G__27451;
count__27403_27447 = G__27452;
i__27404_27448 = G__27453;
continue;
} else {
var temp__5804__auto___27454 = cljs.core.seq.call(null,seq__27401_27445);
if(temp__5804__auto___27454){
var seq__27401_27455__$1 = temp__5804__auto___27454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27401_27455__$1)){
var c__5565__auto___27456 = cljs.core.chunk_first.call(null,seq__27401_27455__$1);
var G__27457 = cljs.core.chunk_rest.call(null,seq__27401_27455__$1);
var G__27458 = c__5565__auto___27456;
var G__27459 = cljs.core.count.call(null,c__5565__auto___27456);
var G__27460 = (0);
seq__27401_27445 = G__27457;
chunk__27402_27446 = G__27458;
count__27403_27447 = G__27459;
i__27404_27448 = G__27460;
continue;
} else {
var lib_27461 = cljs.core.first.call(null,seq__27401_27455__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_27461)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_27461),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27461),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_27461),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27461),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_27461,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_27461),"');");
}

}
}
}


var G__27462 = cljs.core.next.call(null,seq__27401_27455__$1);
var G__27463 = null;
var G__27464 = (0);
var G__27465 = (0);
seq__27401_27445 = G__27462;
chunk__27402_27446 = G__27463;
count__27403_27447 = G__27464;
i__27404_27448 = G__27465;
continue;
}
} else {
}
}
break;
}

var seq__27405_27466 = cljs.core.seq.call(null,node_libs);
var chunk__27406_27467 = null;
var count__27407_27468 = (0);
var i__27408_27469 = (0);
while(true){
if((i__27408_27469 < count__27407_27468)){
var lib_27470 = cljs.core._nth.call(null,chunk__27406_27467,i__27408_27469);
var vec__27415_27471 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_27470);
var lib_SINGLEQUOTE__27472 = cljs.core.nth.call(null,vec__27415_27471,(0),null);
var sublib_27473 = cljs.core.nth.call(null,vec__27415_27471,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_27470)," = require('",lib_SINGLEQUOTE__27472,"')",cljs.compiler.sublib_select.call(null,sublib_27473),";");


var G__27474 = seq__27405_27466;
var G__27475 = chunk__27406_27467;
var G__27476 = count__27407_27468;
var G__27477 = (i__27408_27469 + (1));
seq__27405_27466 = G__27474;
chunk__27406_27467 = G__27475;
count__27407_27468 = G__27476;
i__27408_27469 = G__27477;
continue;
} else {
var temp__5804__auto___27478 = cljs.core.seq.call(null,seq__27405_27466);
if(temp__5804__auto___27478){
var seq__27405_27479__$1 = temp__5804__auto___27478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27405_27479__$1)){
var c__5565__auto___27480 = cljs.core.chunk_first.call(null,seq__27405_27479__$1);
var G__27481 = cljs.core.chunk_rest.call(null,seq__27405_27479__$1);
var G__27482 = c__5565__auto___27480;
var G__27483 = cljs.core.count.call(null,c__5565__auto___27480);
var G__27484 = (0);
seq__27405_27466 = G__27481;
chunk__27406_27467 = G__27482;
count__27407_27468 = G__27483;
i__27408_27469 = G__27484;
continue;
} else {
var lib_27485 = cljs.core.first.call(null,seq__27405_27479__$1);
var vec__27418_27486 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_27485);
var lib_SINGLEQUOTE__27487 = cljs.core.nth.call(null,vec__27418_27486,(0),null);
var sublib_27488 = cljs.core.nth.call(null,vec__27418_27486,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_27485)," = require('",lib_SINGLEQUOTE__27487,"')",cljs.compiler.sublib_select.call(null,sublib_27488),";");


var G__27489 = cljs.core.next.call(null,seq__27405_27479__$1);
var G__27490 = null;
var G__27491 = (0);
var G__27492 = (0);
seq__27405_27466 = G__27489;
chunk__27406_27467 = G__27490;
count__27407_27468 = G__27491;
i__27408_27469 = G__27492;
continue;
}
} else {
}
}
break;
}

var seq__27421_27493 = cljs.core.seq.call(null,goog_modules);
var chunk__27422_27494 = null;
var count__27423_27495 = (0);
var i__27424_27496 = (0);
while(true){
if((i__27424_27496 < count__27423_27495)){
var lib_27497 = cljs.core._nth.call(null,chunk__27422_27494,i__27424_27496);
var vec__27431_27498 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_27497);
var lib_SINGLEQUOTE__27499 = cljs.core.nth.call(null,vec__27431_27498,(0),null);
var sublib_27500 = cljs.core.nth.call(null,vec__27431_27498,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__27499,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_27497)," = goog.module.get('",lib_SINGLEQUOTE__27499,"')",cljs.compiler.sublib_select.call(null,sublib_27500),";");

cljs.compiler.emitln.call(null,"});");


var G__27501 = seq__27421_27493;
var G__27502 = chunk__27422_27494;
var G__27503 = count__27423_27495;
var G__27504 = (i__27424_27496 + (1));
seq__27421_27493 = G__27501;
chunk__27422_27494 = G__27502;
count__27423_27495 = G__27503;
i__27424_27496 = G__27504;
continue;
} else {
var temp__5804__auto___27505 = cljs.core.seq.call(null,seq__27421_27493);
if(temp__5804__auto___27505){
var seq__27421_27506__$1 = temp__5804__auto___27505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27421_27506__$1)){
var c__5565__auto___27507 = cljs.core.chunk_first.call(null,seq__27421_27506__$1);
var G__27508 = cljs.core.chunk_rest.call(null,seq__27421_27506__$1);
var G__27509 = c__5565__auto___27507;
var G__27510 = cljs.core.count.call(null,c__5565__auto___27507);
var G__27511 = (0);
seq__27421_27493 = G__27508;
chunk__27422_27494 = G__27509;
count__27423_27495 = G__27510;
i__27424_27496 = G__27511;
continue;
} else {
var lib_27512 = cljs.core.first.call(null,seq__27421_27506__$1);
var vec__27434_27513 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_27512);
var lib_SINGLEQUOTE__27514 = cljs.core.nth.call(null,vec__27434_27513,(0),null);
var sublib_27515 = cljs.core.nth.call(null,vec__27434_27513,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__27514,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_27512)," = goog.module.get('",lib_SINGLEQUOTE__27514,"')",cljs.compiler.sublib_select.call(null,sublib_27515),";");

cljs.compiler.emitln.call(null,"});");


var G__27516 = cljs.core.next.call(null,seq__27421_27506__$1);
var G__27517 = null;
var G__27518 = (0);
var G__27519 = (0);
seq__27421_27493 = G__27516;
chunk__27422_27494 = G__27517;
count__27423_27495 = G__27518;
i__27424_27496 = G__27519;
continue;
}
} else {
}
}
break;
}

var seq__27437_27520 = cljs.core.seq.call(null,global_exports_libs);
var chunk__27438_27521 = null;
var count__27439_27522 = (0);
var i__27440_27523 = (0);
while(true){
if((i__27440_27523 < count__27439_27522)){
var lib_27524 = cljs.core._nth.call(null,chunk__27438_27521,i__27440_27523);
var map__27443_27525 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_27524))));
var map__27443_27526__$1 = cljs.core.__destructure_map.call(null,map__27443_27525);
var global_exports_27527 = cljs.core.get.call(null,map__27443_27526__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_27527,lib_27524);


var G__27528 = seq__27437_27520;
var G__27529 = chunk__27438_27521;
var G__27530 = count__27439_27522;
var G__27531 = (i__27440_27523 + (1));
seq__27437_27520 = G__27528;
chunk__27438_27521 = G__27529;
count__27439_27522 = G__27530;
i__27440_27523 = G__27531;
continue;
} else {
var temp__5804__auto___27532 = cljs.core.seq.call(null,seq__27437_27520);
if(temp__5804__auto___27532){
var seq__27437_27533__$1 = temp__5804__auto___27532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27437_27533__$1)){
var c__5565__auto___27534 = cljs.core.chunk_first.call(null,seq__27437_27533__$1);
var G__27535 = cljs.core.chunk_rest.call(null,seq__27437_27533__$1);
var G__27536 = c__5565__auto___27534;
var G__27537 = cljs.core.count.call(null,c__5565__auto___27534);
var G__27538 = (0);
seq__27437_27520 = G__27535;
chunk__27438_27521 = G__27536;
count__27439_27522 = G__27537;
i__27440_27523 = G__27538;
continue;
} else {
var lib_27539 = cljs.core.first.call(null,seq__27437_27533__$1);
var map__27444_27540 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_27539))));
var map__27444_27541__$1 = cljs.core.__destructure_map.call(null,map__27444_27540);
var global_exports_27542 = cljs.core.get.call(null,map__27444_27541__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_27542,lib_27539);


var G__27543 = cljs.core.next.call(null,seq__27437_27533__$1);
var G__27544 = null;
var G__27545 = (0);
var G__27546 = (0);
seq__27437_27520 = G__27543;
chunk__27438_27521 = G__27544;
count__27439_27522 = G__27545;
i__27440_27523 = G__27546;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__27547){
var map__27548 = p__27547;
var map__27548__$1 = cljs.core.__destructure_map.call(null,map__27548);
var name = cljs.core.get.call(null,map__27548__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__27548__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__27548__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__27548__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__27548__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__27548__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__27548__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__27549){
var map__27550 = p__27549;
var map__27550__$1 = cljs.core.__destructure_map.call(null,map__27550);
var name = cljs.core.get.call(null,map__27550__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__27550__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__27550__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__27550__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__27550__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__27550__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__27550__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__27551){
var map__27552 = p__27551;
var map__27552__$1 = cljs.core.__destructure_map.call(null,map__27552);
var t = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__27553_27577 = cljs.core.seq.call(null,protocols);
var chunk__27554_27578 = null;
var count__27555_27579 = (0);
var i__27556_27580 = (0);
while(true){
if((i__27556_27580 < count__27555_27579)){
var protocol_27581 = cljs.core._nth.call(null,chunk__27554_27578,i__27556_27580);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_27581)),"}");


var G__27582 = seq__27553_27577;
var G__27583 = chunk__27554_27578;
var G__27584 = count__27555_27579;
var G__27585 = (i__27556_27580 + (1));
seq__27553_27577 = G__27582;
chunk__27554_27578 = G__27583;
count__27555_27579 = G__27584;
i__27556_27580 = G__27585;
continue;
} else {
var temp__5804__auto___27586 = cljs.core.seq.call(null,seq__27553_27577);
if(temp__5804__auto___27586){
var seq__27553_27587__$1 = temp__5804__auto___27586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27553_27587__$1)){
var c__5565__auto___27588 = cljs.core.chunk_first.call(null,seq__27553_27587__$1);
var G__27589 = cljs.core.chunk_rest.call(null,seq__27553_27587__$1);
var G__27590 = c__5565__auto___27588;
var G__27591 = cljs.core.count.call(null,c__5565__auto___27588);
var G__27592 = (0);
seq__27553_27577 = G__27589;
chunk__27554_27578 = G__27590;
count__27555_27579 = G__27591;
i__27556_27580 = G__27592;
continue;
} else {
var protocol_27593 = cljs.core.first.call(null,seq__27553_27587__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_27593)),"}");


var G__27594 = cljs.core.next.call(null,seq__27553_27587__$1);
var G__27595 = null;
var G__27596 = (0);
var G__27597 = (0);
seq__27553_27577 = G__27594;
chunk__27554_27578 = G__27595;
count__27555_27579 = G__27596;
i__27556_27580 = G__27597;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__27557_27598 = cljs.core.seq.call(null,fields__$1);
var chunk__27558_27599 = null;
var count__27559_27600 = (0);
var i__27560_27601 = (0);
while(true){
if((i__27560_27601 < count__27559_27600)){
var fld_27602 = cljs.core._nth.call(null,chunk__27558_27599,i__27560_27601);
cljs.compiler.emitln.call(null,"this.",fld_27602," = ",fld_27602,";");


var G__27603 = seq__27557_27598;
var G__27604 = chunk__27558_27599;
var G__27605 = count__27559_27600;
var G__27606 = (i__27560_27601 + (1));
seq__27557_27598 = G__27603;
chunk__27558_27599 = G__27604;
count__27559_27600 = G__27605;
i__27560_27601 = G__27606;
continue;
} else {
var temp__5804__auto___27607 = cljs.core.seq.call(null,seq__27557_27598);
if(temp__5804__auto___27607){
var seq__27557_27608__$1 = temp__5804__auto___27607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27557_27608__$1)){
var c__5565__auto___27609 = cljs.core.chunk_first.call(null,seq__27557_27608__$1);
var G__27610 = cljs.core.chunk_rest.call(null,seq__27557_27608__$1);
var G__27611 = c__5565__auto___27609;
var G__27612 = cljs.core.count.call(null,c__5565__auto___27609);
var G__27613 = (0);
seq__27557_27598 = G__27610;
chunk__27558_27599 = G__27611;
count__27559_27600 = G__27612;
i__27560_27601 = G__27613;
continue;
} else {
var fld_27614 = cljs.core.first.call(null,seq__27557_27608__$1);
cljs.compiler.emitln.call(null,"this.",fld_27614," = ",fld_27614,";");


var G__27615 = cljs.core.next.call(null,seq__27557_27608__$1);
var G__27616 = null;
var G__27617 = (0);
var G__27618 = (0);
seq__27557_27598 = G__27615;
chunk__27558_27599 = G__27616;
count__27559_27600 = G__27617;
i__27560_27601 = G__27618;
continue;
}
} else {
}
}
break;
}

var seq__27561_27619 = cljs.core.seq.call(null,pmasks);
var chunk__27562_27620 = null;
var count__27563_27621 = (0);
var i__27564_27622 = (0);
while(true){
if((i__27564_27622 < count__27563_27621)){
var vec__27571_27623 = cljs.core._nth.call(null,chunk__27562_27620,i__27564_27622);
var pno_27624 = cljs.core.nth.call(null,vec__27571_27623,(0),null);
var pmask_27625 = cljs.core.nth.call(null,vec__27571_27623,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_27624,"$ = ",pmask_27625,";");


var G__27626 = seq__27561_27619;
var G__27627 = chunk__27562_27620;
var G__27628 = count__27563_27621;
var G__27629 = (i__27564_27622 + (1));
seq__27561_27619 = G__27626;
chunk__27562_27620 = G__27627;
count__27563_27621 = G__27628;
i__27564_27622 = G__27629;
continue;
} else {
var temp__5804__auto___27630 = cljs.core.seq.call(null,seq__27561_27619);
if(temp__5804__auto___27630){
var seq__27561_27631__$1 = temp__5804__auto___27630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27561_27631__$1)){
var c__5565__auto___27632 = cljs.core.chunk_first.call(null,seq__27561_27631__$1);
var G__27633 = cljs.core.chunk_rest.call(null,seq__27561_27631__$1);
var G__27634 = c__5565__auto___27632;
var G__27635 = cljs.core.count.call(null,c__5565__auto___27632);
var G__27636 = (0);
seq__27561_27619 = G__27633;
chunk__27562_27620 = G__27634;
count__27563_27621 = G__27635;
i__27564_27622 = G__27636;
continue;
} else {
var vec__27574_27637 = cljs.core.first.call(null,seq__27561_27631__$1);
var pno_27638 = cljs.core.nth.call(null,vec__27574_27637,(0),null);
var pmask_27639 = cljs.core.nth.call(null,vec__27574_27637,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_27638,"$ = ",pmask_27639,";");


var G__27640 = cljs.core.next.call(null,seq__27561_27631__$1);
var G__27641 = null;
var G__27642 = (0);
var G__27643 = (0);
seq__27561_27619 = G__27640;
chunk__27562_27620 = G__27641;
count__27563_27621 = G__27642;
i__27564_27622 = G__27643;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__27644){
var map__27645 = p__27644;
var map__27645__$1 = cljs.core.__destructure_map.call(null,map__27645);
var t = cljs.core.get.call(null,map__27645__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__27645__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__27645__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__27645__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__27645__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__27646_27670 = cljs.core.seq.call(null,protocols);
var chunk__27647_27671 = null;
var count__27648_27672 = (0);
var i__27649_27673 = (0);
while(true){
if((i__27649_27673 < count__27648_27672)){
var protocol_27674 = cljs.core._nth.call(null,chunk__27647_27671,i__27649_27673);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_27674)),"}");


var G__27675 = seq__27646_27670;
var G__27676 = chunk__27647_27671;
var G__27677 = count__27648_27672;
var G__27678 = (i__27649_27673 + (1));
seq__27646_27670 = G__27675;
chunk__27647_27671 = G__27676;
count__27648_27672 = G__27677;
i__27649_27673 = G__27678;
continue;
} else {
var temp__5804__auto___27679 = cljs.core.seq.call(null,seq__27646_27670);
if(temp__5804__auto___27679){
var seq__27646_27680__$1 = temp__5804__auto___27679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27646_27680__$1)){
var c__5565__auto___27681 = cljs.core.chunk_first.call(null,seq__27646_27680__$1);
var G__27682 = cljs.core.chunk_rest.call(null,seq__27646_27680__$1);
var G__27683 = c__5565__auto___27681;
var G__27684 = cljs.core.count.call(null,c__5565__auto___27681);
var G__27685 = (0);
seq__27646_27670 = G__27682;
chunk__27647_27671 = G__27683;
count__27648_27672 = G__27684;
i__27649_27673 = G__27685;
continue;
} else {
var protocol_27686 = cljs.core.first.call(null,seq__27646_27680__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_27686)),"}");


var G__27687 = cljs.core.next.call(null,seq__27646_27680__$1);
var G__27688 = null;
var G__27689 = (0);
var G__27690 = (0);
seq__27646_27670 = G__27687;
chunk__27647_27671 = G__27688;
count__27648_27672 = G__27689;
i__27649_27673 = G__27690;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__27650_27691 = cljs.core.seq.call(null,fields__$1);
var chunk__27651_27692 = null;
var count__27652_27693 = (0);
var i__27653_27694 = (0);
while(true){
if((i__27653_27694 < count__27652_27693)){
var fld_27695 = cljs.core._nth.call(null,chunk__27651_27692,i__27653_27694);
cljs.compiler.emitln.call(null,"this.",fld_27695," = ",fld_27695,";");


var G__27696 = seq__27650_27691;
var G__27697 = chunk__27651_27692;
var G__27698 = count__27652_27693;
var G__27699 = (i__27653_27694 + (1));
seq__27650_27691 = G__27696;
chunk__27651_27692 = G__27697;
count__27652_27693 = G__27698;
i__27653_27694 = G__27699;
continue;
} else {
var temp__5804__auto___27700 = cljs.core.seq.call(null,seq__27650_27691);
if(temp__5804__auto___27700){
var seq__27650_27701__$1 = temp__5804__auto___27700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27650_27701__$1)){
var c__5565__auto___27702 = cljs.core.chunk_first.call(null,seq__27650_27701__$1);
var G__27703 = cljs.core.chunk_rest.call(null,seq__27650_27701__$1);
var G__27704 = c__5565__auto___27702;
var G__27705 = cljs.core.count.call(null,c__5565__auto___27702);
var G__27706 = (0);
seq__27650_27691 = G__27703;
chunk__27651_27692 = G__27704;
count__27652_27693 = G__27705;
i__27653_27694 = G__27706;
continue;
} else {
var fld_27707 = cljs.core.first.call(null,seq__27650_27701__$1);
cljs.compiler.emitln.call(null,"this.",fld_27707," = ",fld_27707,";");


var G__27708 = cljs.core.next.call(null,seq__27650_27701__$1);
var G__27709 = null;
var G__27710 = (0);
var G__27711 = (0);
seq__27650_27691 = G__27708;
chunk__27651_27692 = G__27709;
count__27652_27693 = G__27710;
i__27653_27694 = G__27711;
continue;
}
} else {
}
}
break;
}

var seq__27654_27712 = cljs.core.seq.call(null,pmasks);
var chunk__27655_27713 = null;
var count__27656_27714 = (0);
var i__27657_27715 = (0);
while(true){
if((i__27657_27715 < count__27656_27714)){
var vec__27664_27716 = cljs.core._nth.call(null,chunk__27655_27713,i__27657_27715);
var pno_27717 = cljs.core.nth.call(null,vec__27664_27716,(0),null);
var pmask_27718 = cljs.core.nth.call(null,vec__27664_27716,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_27717,"$ = ",pmask_27718,";");


var G__27719 = seq__27654_27712;
var G__27720 = chunk__27655_27713;
var G__27721 = count__27656_27714;
var G__27722 = (i__27657_27715 + (1));
seq__27654_27712 = G__27719;
chunk__27655_27713 = G__27720;
count__27656_27714 = G__27721;
i__27657_27715 = G__27722;
continue;
} else {
var temp__5804__auto___27723 = cljs.core.seq.call(null,seq__27654_27712);
if(temp__5804__auto___27723){
var seq__27654_27724__$1 = temp__5804__auto___27723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27654_27724__$1)){
var c__5565__auto___27725 = cljs.core.chunk_first.call(null,seq__27654_27724__$1);
var G__27726 = cljs.core.chunk_rest.call(null,seq__27654_27724__$1);
var G__27727 = c__5565__auto___27725;
var G__27728 = cljs.core.count.call(null,c__5565__auto___27725);
var G__27729 = (0);
seq__27654_27712 = G__27726;
chunk__27655_27713 = G__27727;
count__27656_27714 = G__27728;
i__27657_27715 = G__27729;
continue;
} else {
var vec__27667_27730 = cljs.core.first.call(null,seq__27654_27724__$1);
var pno_27731 = cljs.core.nth.call(null,vec__27667_27730,(0),null);
var pmask_27732 = cljs.core.nth.call(null,vec__27667_27730,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_27731,"$ = ",pmask_27732,";");


var G__27733 = cljs.core.next.call(null,seq__27654_27724__$1);
var G__27734 = null;
var G__27735 = (0);
var G__27736 = (0);
seq__27654_27712 = G__27733;
chunk__27655_27713 = G__27734;
count__27656_27714 = G__27735;
i__27657_27715 = G__27736;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__27737){
var map__27738 = p__27737;
var map__27738__$1 = cljs.core.__destructure_map.call(null,map__27738);
var target = cljs.core.get.call(null,map__27738__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__27738__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__27738__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__27738__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__27738__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__27739){
var map__27740 = p__27739;
var map__27740__$1 = cljs.core.__destructure_map.call(null,map__27740);
var op = cljs.core.get.call(null,map__27740__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__27740__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__27740__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__27740__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__27740__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__5041__auto__ = code;
if(cljs.core.truth_(and__5041__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__5041__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__27745 = cljs.core.seq.call(null,table);
var chunk__27746 = null;
var count__27747 = (0);
var i__27748 = (0);
while(true){
if((i__27748 < count__27747)){
var vec__27755 = cljs.core._nth.call(null,chunk__27746,i__27748);
var sym = cljs.core.nth.call(null,vec__27755,(0),null);
var value = cljs.core.nth.call(null,vec__27755,(1),null);
var ns_27761 = cljs.core.namespace.call(null,sym);
var name_27762 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__27763 = seq__27745;
var G__27764 = chunk__27746;
var G__27765 = count__27747;
var G__27766 = (i__27748 + (1));
seq__27745 = G__27763;
chunk__27746 = G__27764;
count__27747 = G__27765;
i__27748 = G__27766;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__27745);
if(temp__5804__auto__){
var seq__27745__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27745__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__27745__$1);
var G__27767 = cljs.core.chunk_rest.call(null,seq__27745__$1);
var G__27768 = c__5565__auto__;
var G__27769 = cljs.core.count.call(null,c__5565__auto__);
var G__27770 = (0);
seq__27745 = G__27767;
chunk__27746 = G__27768;
count__27747 = G__27769;
i__27748 = G__27770;
continue;
} else {
var vec__27758 = cljs.core.first.call(null,seq__27745__$1);
var sym = cljs.core.nth.call(null,vec__27758,(0),null);
var value = cljs.core.nth.call(null,vec__27758,(1),null);
var ns_27771 = cljs.core.namespace.call(null,sym);
var name_27772 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__27773 = cljs.core.next.call(null,seq__27745__$1);
var G__27774 = null;
var G__27775 = (0);
var G__27776 = (0);
seq__27745 = G__27773;
chunk__27746 = G__27774;
count__27747 = G__27775;
i__27748 = G__27776;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__27778 = arguments.length;
switch (G__27778) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs.call(null):null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_27783 = cljs.core.first.call(null,ks);
var vec__27779_27784 = cljs.core.conj.call(null,prefix,k_27783);
var top_27785 = cljs.core.nth.call(null,vec__27779_27784,(0),null);
var prefix_SINGLEQUOTE__27786 = vec__27779_27784;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_27783)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__27786) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_27785)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_27785)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__27786)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_27785);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__27786)),";");
}
} else {
}

var m_27787 = cljs.core.get.call(null,externs,k_27783);
if(cljs.core.empty_QMARK_.call(null,m_27787)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__27786,m_27787,top_level,known_externs);
}

var G__27788 = cljs.core.next.call(null,ks);
ks = G__27788;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=compiler.js.map

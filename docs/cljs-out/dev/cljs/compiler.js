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
var map__23854 = s;
var map__23854__$1 = cljs.core.__destructure_map.call(null,map__23854);
var name = cljs.core.get.call(null,map__23854__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__23854__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__23856 = info;
var map__23857 = G__23856;
var map__23857__$1 = cljs.core.__destructure_map.call(null,map__23857);
var shadow = cljs.core.get.call(null,map__23857__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__23856__$1 = G__23856;
while(true){
var d__$2 = d__$1;
var map__23859 = G__23856__$1;
var map__23859__$1 = cljs.core.__destructure_map.call(null,map__23859);
var shadow__$1 = cljs.core.get.call(null,map__23859__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__23860 = (d__$2 + (1));
var G__23861 = shadow__$1;
d__$1 = G__23860;
G__23856__$1 = G__23861;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__23862){
var map__23863 = p__23862;
var map__23863__$1 = cljs.core.__destructure_map.call(null,map__23863);
var name_var = map__23863__$1;
var name = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__23863__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__23864 = info;
var map__23864__$1 = cljs.core.__destructure_map.call(null,map__23864);
var ns = cljs.core.get.call(null,map__23864__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__23864__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__23866 = arguments.length;
switch (G__23866) {
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
var G__23868 = cp;
switch (G__23868) {
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
var seq__23870_23874 = cljs.core.seq.call(null,s);
var chunk__23871_23875 = null;
var count__23872_23876 = (0);
var i__23873_23877 = (0);
while(true){
if((i__23873_23877 < count__23872_23876)){
var c_23878 = cljs.core._nth.call(null,chunk__23871_23875,i__23873_23877);
sb.append(cljs.compiler.escape_char.call(null,c_23878));


var G__23879 = seq__23870_23874;
var G__23880 = chunk__23871_23875;
var G__23881 = count__23872_23876;
var G__23882 = (i__23873_23877 + (1));
seq__23870_23874 = G__23879;
chunk__23871_23875 = G__23880;
count__23872_23876 = G__23881;
i__23873_23877 = G__23882;
continue;
} else {
var temp__5804__auto___23883 = cljs.core.seq.call(null,seq__23870_23874);
if(temp__5804__auto___23883){
var seq__23870_23884__$1 = temp__5804__auto___23883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23870_23884__$1)){
var c__5565__auto___23885 = cljs.core.chunk_first.call(null,seq__23870_23884__$1);
var G__23886 = cljs.core.chunk_rest.call(null,seq__23870_23884__$1);
var G__23887 = c__5565__auto___23885;
var G__23888 = cljs.core.count.call(null,c__5565__auto___23885);
var G__23889 = (0);
seq__23870_23874 = G__23886;
chunk__23871_23875 = G__23887;
count__23872_23876 = G__23888;
i__23873_23877 = G__23889;
continue;
} else {
var c_23890 = cljs.core.first.call(null,seq__23870_23884__$1);
sb.append(cljs.compiler.escape_char.call(null,c_23890));


var G__23891 = cljs.core.next.call(null,seq__23870_23884__$1);
var G__23892 = null;
var G__23893 = (0);
var G__23894 = (0);
seq__23870_23874 = G__23891;
chunk__23871_23875 = G__23892;
count__23872_23876 = G__23893;
i__23873_23877 = G__23894;
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
var map__23895_23898 = ast;
var map__23895_23899__$1 = cljs.core.__destructure_map.call(null,map__23895_23898);
var env_23900 = cljs.core.get.call(null,map__23895_23899__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_23900))){
var map__23896_23901 = env_23900;
var map__23896_23902__$1 = cljs.core.__destructure_map.call(null,map__23896_23901);
var line_23903 = cljs.core.get.call(null,map__23896_23902__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23904 = cljs.core.get.call(null,map__23896_23902__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__23897 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__23897,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__23897;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_23903 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_23904)?(column_23904 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
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
var G__23913 = arguments.length;
switch (G__23913) {
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
var len__5766__auto___23920 = arguments.length;
var i__5767__auto___23921 = (0);
while(true){
if((i__5767__auto___23921 < len__5766__auto___23920)){
args_arr__5791__auto__.push((arguments[i__5767__auto___23921]));

var G__23922 = (i__5767__auto___23921 + (1));
i__5767__auto___23921 = G__23922;
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
var s_23923 = (function (){var G__23914 = a;
if((!(typeof a === 'string'))){
return G__23914.toString();
} else {
return G__23914;
}
})();
var temp__5808__auto___23924 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5808__auto___23924 == null)){
} else {
var sm_data_23925 = temp__5808__auto___23924;
cljs.core.swap_BANG_.call(null,sm_data_23925,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__23905_SHARP_){
return (p1__23905_SHARP_ + s_23923.length);
}));
}

cljs.core.print.call(null,s_23923);

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

var seq__23915 = cljs.core.seq.call(null,xs);
var chunk__23916 = null;
var count__23917 = (0);
var i__23918 = (0);
while(true){
if((i__23918 < count__23917)){
var x = cljs.core._nth.call(null,chunk__23916,i__23918);
cljs.compiler.emits.call(null,x);


var G__23926 = seq__23915;
var G__23927 = chunk__23916;
var G__23928 = count__23917;
var G__23929 = (i__23918 + (1));
seq__23915 = G__23926;
chunk__23916 = G__23927;
count__23917 = G__23928;
i__23918 = G__23929;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__23915);
if(temp__5804__auto__){
var seq__23915__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23915__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__23915__$1);
var G__23930 = cljs.core.chunk_rest.call(null,seq__23915__$1);
var G__23931 = c__5565__auto__;
var G__23932 = cljs.core.count.call(null,c__5565__auto__);
var G__23933 = (0);
seq__23915 = G__23930;
chunk__23916 = G__23931;
count__23917 = G__23932;
i__23918 = G__23933;
continue;
} else {
var x = cljs.core.first.call(null,seq__23915__$1);
cljs.compiler.emits.call(null,x);


var G__23934 = cljs.core.next.call(null,seq__23915__$1);
var G__23935 = null;
var G__23936 = (0);
var G__23937 = (0);
seq__23915 = G__23934;
chunk__23916 = G__23935;
count__23917 = G__23936;
i__23918 = G__23937;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq23907){
var G__23908 = cljs.core.first.call(null,seq23907);
var seq23907__$1 = cljs.core.next.call(null,seq23907);
var G__23909 = cljs.core.first.call(null,seq23907__$1);
var seq23907__$2 = cljs.core.next.call(null,seq23907__$1);
var G__23910 = cljs.core.first.call(null,seq23907__$2);
var seq23907__$3 = cljs.core.next.call(null,seq23907__$2);
var G__23911 = cljs.core.first.call(null,seq23907__$3);
var seq23907__$4 = cljs.core.next.call(null,seq23907__$3);
var G__23912 = cljs.core.first.call(null,seq23907__$4);
var seq23907__$5 = cljs.core.next.call(null,seq23907__$4);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23908,G__23909,G__23910,G__23911,G__23912,seq23907__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__23938){
var map__23939 = p__23938;
var map__23939__$1 = cljs.core.__destructure_map.call(null,map__23939);
var m = map__23939__$1;
var gen_line = cljs.core.get.call(null,map__23939__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__23947 = arguments.length;
switch (G__23947) {
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
var len__5766__auto___23953 = arguments.length;
var i__5767__auto___23954 = (0);
while(true){
if((i__5767__auto___23954 < len__5766__auto___23953)){
args_arr__5791__auto__.push((arguments[i__5767__auto___23954]));

var G__23955 = (i__5767__auto___23954 + (1));
i__5767__auto___23954 = G__23955;
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

var seq__23948_23956 = cljs.core.seq.call(null,xs);
var chunk__23949_23957 = null;
var count__23950_23958 = (0);
var i__23951_23959 = (0);
while(true){
if((i__23951_23959 < count__23950_23958)){
var x_23960 = cljs.core._nth.call(null,chunk__23949_23957,i__23951_23959);
cljs.compiler.emits.call(null,x_23960);


var G__23961 = seq__23948_23956;
var G__23962 = chunk__23949_23957;
var G__23963 = count__23950_23958;
var G__23964 = (i__23951_23959 + (1));
seq__23948_23956 = G__23961;
chunk__23949_23957 = G__23962;
count__23950_23958 = G__23963;
i__23951_23959 = G__23964;
continue;
} else {
var temp__5804__auto___23965 = cljs.core.seq.call(null,seq__23948_23956);
if(temp__5804__auto___23965){
var seq__23948_23966__$1 = temp__5804__auto___23965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23948_23966__$1)){
var c__5565__auto___23967 = cljs.core.chunk_first.call(null,seq__23948_23966__$1);
var G__23968 = cljs.core.chunk_rest.call(null,seq__23948_23966__$1);
var G__23969 = c__5565__auto___23967;
var G__23970 = cljs.core.count.call(null,c__5565__auto___23967);
var G__23971 = (0);
seq__23948_23956 = G__23968;
chunk__23949_23957 = G__23969;
count__23950_23958 = G__23970;
i__23951_23959 = G__23971;
continue;
} else {
var x_23972 = cljs.core.first.call(null,seq__23948_23966__$1);
cljs.compiler.emits.call(null,x_23972);


var G__23973 = cljs.core.next.call(null,seq__23948_23966__$1);
var G__23974 = null;
var G__23975 = (0);
var G__23976 = (0);
seq__23948_23956 = G__23973;
chunk__23949_23957 = G__23974;
count__23950_23958 = G__23975;
i__23951_23959 = G__23976;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq23941){
var G__23942 = cljs.core.first.call(null,seq23941);
var seq23941__$1 = cljs.core.next.call(null,seq23941);
var G__23943 = cljs.core.first.call(null,seq23941__$1);
var seq23941__$2 = cljs.core.next.call(null,seq23941__$1);
var G__23944 = cljs.core.first.call(null,seq23941__$2);
var seq23941__$3 = cljs.core.next.call(null,seq23941__$2);
var G__23945 = cljs.core.first.call(null,seq23941__$3);
var seq23941__$4 = cljs.core.next.call(null,seq23941__$3);
var G__23946 = cljs.core.first.call(null,seq23941__$4);
var seq23941__$5 = cljs.core.next.call(null,seq23941__$4);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23942,G__23943,G__23944,G__23945,G__23946,seq23941__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23977_23981 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23978_23982 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23979_23983 = true;
var _STAR_print_fn_STAR__temp_val__23980_23984 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23979_23983);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23980_23984);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23978_23982);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23977_23981);
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
var vec__23985 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__23985,(0),null);
var name = cljs.core.nth.call(null,vec__23985,(1),null);
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
var vec__23988 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__23988,(0),null);
var flags = cljs.core.nth.call(null,vec__23988,(1),null);
var pattern = cljs.core.nth.call(null,vec__23988,(2),null);
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
return cljs.compiler.emit_js_object.call(null,items,(function (p1__23991_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__23991_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__23993){
var map__23994 = p__23993;
var map__23994__$1 = cljs.core.__destructure_map.call(null,map__23994);
var ast = map__23994__$1;
var info = cljs.core.get.call(null,map__23994__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__23994__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__23994__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5802__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5802__auto__)){
var const_expr = temp__5802__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__23995 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__23995__$1 = cljs.core.__destructure_map.call(null,map__23995);
var cenv = map__23995__$1;
var options = cljs.core.get.call(null,map__23995__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__23996 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__5041__auto__;
}
})())){
return clojure.set.difference.call(null,G__23996,cljs.analyzer.es5_allowed);
} else {
return G__23996;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__5043__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__23997 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__23997,reserved);
} else {
return G__23997;
}
})();
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__23998_23999 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__23998_24000__$1 = (((G__23998_23999 instanceof cljs.core.Keyword))?G__23998_23999.fqn:null);
switch (G__23998_24000__$1) {
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__24002){
var map__24003 = p__24002;
var map__24003__$1 = cljs.core.__destructure_map.call(null,map__24003);
var arg = map__24003__$1;
var env = cljs.core.get.call(null,map__24003__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__24003__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__24003__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__24003__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__24004 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__24004__$1 = cljs.core.__destructure_map.call(null,map__24004);
var name = cljs.core.get.call(null,map__24004__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__24005){
var map__24006 = p__24005;
var map__24006__$1 = cljs.core.__destructure_map.call(null,map__24006);
var expr = cljs.core.get.call(null,map__24006__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__24006__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__24006__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_.call(null,(function (p1__24007_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24007_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__24008){
var map__24009 = p__24008;
var map__24009__$1 = cljs.core.__destructure_map.call(null,map__24009);
var env = cljs.core.get.call(null,map__24009__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__24009__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__24009__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__24010){
var map__24011 = p__24010;
var map__24011__$1 = cljs.core.__destructure_map.call(null,map__24011);
var items = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_.call(null,(function (p1__24012_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__24012_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__24013){
var map__24014 = p__24013;
var map__24014__$1 = cljs.core.__destructure_map.call(null,map__24014);
var items = cljs.core.get.call(null,map__24014__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__24014__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5804__auto___24037 = cljs.core.seq.call(null,items);
if(temp__5804__auto___24037){
var items_24038__$1 = temp__5804__auto___24037;
var vec__24015_24039 = items_24038__$1;
var seq__24016_24040 = cljs.core.seq.call(null,vec__24015_24039);
var first__24017_24041 = cljs.core.first.call(null,seq__24016_24040);
var seq__24016_24042__$1 = cljs.core.next.call(null,seq__24016_24040);
var vec__24018_24043 = first__24017_24041;
var k_24044 = cljs.core.nth.call(null,vec__24018_24043,(0),null);
var v_24045 = cljs.core.nth.call(null,vec__24018_24043,(1),null);
var r_24046 = seq__24016_24042__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_24044),"\": ",emit_js_object_val.call(null,v_24045));

var seq__24021_24047 = cljs.core.seq.call(null,r_24046);
var chunk__24022_24048 = null;
var count__24023_24049 = (0);
var i__24024_24050 = (0);
while(true){
if((i__24024_24050 < count__24023_24049)){
var vec__24031_24051 = cljs.core._nth.call(null,chunk__24022_24048,i__24024_24050);
var k_24052__$1 = cljs.core.nth.call(null,vec__24031_24051,(0),null);
var v_24053__$1 = cljs.core.nth.call(null,vec__24031_24051,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_24052__$1),"\": ",emit_js_object_val.call(null,v_24053__$1));


var G__24054 = seq__24021_24047;
var G__24055 = chunk__24022_24048;
var G__24056 = count__24023_24049;
var G__24057 = (i__24024_24050 + (1));
seq__24021_24047 = G__24054;
chunk__24022_24048 = G__24055;
count__24023_24049 = G__24056;
i__24024_24050 = G__24057;
continue;
} else {
var temp__5804__auto___24058__$1 = cljs.core.seq.call(null,seq__24021_24047);
if(temp__5804__auto___24058__$1){
var seq__24021_24059__$1 = temp__5804__auto___24058__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24021_24059__$1)){
var c__5565__auto___24060 = cljs.core.chunk_first.call(null,seq__24021_24059__$1);
var G__24061 = cljs.core.chunk_rest.call(null,seq__24021_24059__$1);
var G__24062 = c__5565__auto___24060;
var G__24063 = cljs.core.count.call(null,c__5565__auto___24060);
var G__24064 = (0);
seq__24021_24047 = G__24061;
chunk__24022_24048 = G__24062;
count__24023_24049 = G__24063;
i__24024_24050 = G__24064;
continue;
} else {
var vec__24034_24065 = cljs.core.first.call(null,seq__24021_24059__$1);
var k_24066__$1 = cljs.core.nth.call(null,vec__24034_24065,(0),null);
var v_24067__$1 = cljs.core.nth.call(null,vec__24034_24065,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_24066__$1),"\": ",emit_js_object_val.call(null,v_24067__$1));


var G__24068 = cljs.core.next.call(null,seq__24021_24059__$1);
var G__24069 = null;
var G__24070 = (0);
var G__24071 = (0);
seq__24021_24047 = G__24068;
chunk__24022_24048 = G__24069;
count__24023_24049 = G__24070;
i__24024_24050 = G__24071;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__24072){
var map__24073 = p__24072;
var map__24073__$1 = cljs.core.__destructure_map.call(null,map__24073);
var keys = cljs.core.get.call(null,map__24073__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__24073__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__24073__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__24074){
var map__24075 = p__24074;
var map__24075__$1 = cljs.core.__destructure_map.call(null,map__24075);
var items = cljs.core.get.call(null,map__24075__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__24075__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__24076){
var map__24077 = p__24076;
var map__24077__$1 = cljs.core.__destructure_map.call(null,map__24077);
var expr = cljs.core.get.call(null,map__24077__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__24078){
var map__24079 = p__24078;
var map__24079__$1 = cljs.core.__destructure_map.call(null,map__24079);
var form = cljs.core.get.call(null,map__24079__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__24079__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__24080 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__24080__$1 = cljs.core.__destructure_map.call(null,map__24080);
var op = cljs.core.get.call(null,map__24080__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__24080__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__24080__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__24081 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__24081__$1 = cljs.core.__destructure_map.call(null,map__24081);
var op = cljs.core.get.call(null,map__24081__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__24081__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__24081__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__24082){
var map__24083 = p__24082;
var map__24083__$1 = cljs.core.__destructure_map.call(null,map__24083);
var test = cljs.core.get.call(null,map__24083__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__24083__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__24083__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__24083__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__24083__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__24084){
var map__24085 = p__24084;
var map__24085__$1 = cljs.core.__destructure_map.call(null,map__24085);
var v = cljs.core.get.call(null,map__24085__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__24085__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__24085__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__24085__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__24086_24114 = cljs.core.seq.call(null,nodes);
var chunk__24087_24115 = null;
var count__24088_24116 = (0);
var i__24089_24117 = (0);
while(true){
if((i__24089_24117 < count__24088_24116)){
var map__24102_24118 = cljs.core._nth.call(null,chunk__24087_24115,i__24089_24117);
var map__24102_24119__$1 = cljs.core.__destructure_map.call(null,map__24102_24118);
var ts_24120 = cljs.core.get.call(null,map__24102_24119__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24103_24121 = cljs.core.get.call(null,map__24102_24119__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24103_24122__$1 = cljs.core.__destructure_map.call(null,map__24103_24121);
var then_24123 = cljs.core.get.call(null,map__24103_24122__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24104_24124 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_24120));
var chunk__24105_24125 = null;
var count__24106_24126 = (0);
var i__24107_24127 = (0);
while(true){
if((i__24107_24127 < count__24106_24126)){
var test_24128 = cljs.core._nth.call(null,chunk__24105_24125,i__24107_24127);
cljs.compiler.emitln.call(null,"case ",test_24128,":");


var G__24129 = seq__24104_24124;
var G__24130 = chunk__24105_24125;
var G__24131 = count__24106_24126;
var G__24132 = (i__24107_24127 + (1));
seq__24104_24124 = G__24129;
chunk__24105_24125 = G__24130;
count__24106_24126 = G__24131;
i__24107_24127 = G__24132;
continue;
} else {
var temp__5804__auto___24133 = cljs.core.seq.call(null,seq__24104_24124);
if(temp__5804__auto___24133){
var seq__24104_24134__$1 = temp__5804__auto___24133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24104_24134__$1)){
var c__5565__auto___24135 = cljs.core.chunk_first.call(null,seq__24104_24134__$1);
var G__24136 = cljs.core.chunk_rest.call(null,seq__24104_24134__$1);
var G__24137 = c__5565__auto___24135;
var G__24138 = cljs.core.count.call(null,c__5565__auto___24135);
var G__24139 = (0);
seq__24104_24124 = G__24136;
chunk__24105_24125 = G__24137;
count__24106_24126 = G__24138;
i__24107_24127 = G__24139;
continue;
} else {
var test_24140 = cljs.core.first.call(null,seq__24104_24134__$1);
cljs.compiler.emitln.call(null,"case ",test_24140,":");


var G__24141 = cljs.core.next.call(null,seq__24104_24134__$1);
var G__24142 = null;
var G__24143 = (0);
var G__24144 = (0);
seq__24104_24124 = G__24141;
chunk__24105_24125 = G__24142;
count__24106_24126 = G__24143;
i__24107_24127 = G__24144;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_24123);
} else {
cljs.compiler.emitln.call(null,then_24123);
}

cljs.compiler.emitln.call(null,"break;");


var G__24145 = seq__24086_24114;
var G__24146 = chunk__24087_24115;
var G__24147 = count__24088_24116;
var G__24148 = (i__24089_24117 + (1));
seq__24086_24114 = G__24145;
chunk__24087_24115 = G__24146;
count__24088_24116 = G__24147;
i__24089_24117 = G__24148;
continue;
} else {
var temp__5804__auto___24149 = cljs.core.seq.call(null,seq__24086_24114);
if(temp__5804__auto___24149){
var seq__24086_24150__$1 = temp__5804__auto___24149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24086_24150__$1)){
var c__5565__auto___24151 = cljs.core.chunk_first.call(null,seq__24086_24150__$1);
var G__24152 = cljs.core.chunk_rest.call(null,seq__24086_24150__$1);
var G__24153 = c__5565__auto___24151;
var G__24154 = cljs.core.count.call(null,c__5565__auto___24151);
var G__24155 = (0);
seq__24086_24114 = G__24152;
chunk__24087_24115 = G__24153;
count__24088_24116 = G__24154;
i__24089_24117 = G__24155;
continue;
} else {
var map__24108_24156 = cljs.core.first.call(null,seq__24086_24150__$1);
var map__24108_24157__$1 = cljs.core.__destructure_map.call(null,map__24108_24156);
var ts_24158 = cljs.core.get.call(null,map__24108_24157__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__24109_24159 = cljs.core.get.call(null,map__24108_24157__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__24109_24160__$1 = cljs.core.__destructure_map.call(null,map__24109_24159);
var then_24161 = cljs.core.get.call(null,map__24109_24160__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__24110_24162 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_24158));
var chunk__24111_24163 = null;
var count__24112_24164 = (0);
var i__24113_24165 = (0);
while(true){
if((i__24113_24165 < count__24112_24164)){
var test_24166 = cljs.core._nth.call(null,chunk__24111_24163,i__24113_24165);
cljs.compiler.emitln.call(null,"case ",test_24166,":");


var G__24167 = seq__24110_24162;
var G__24168 = chunk__24111_24163;
var G__24169 = count__24112_24164;
var G__24170 = (i__24113_24165 + (1));
seq__24110_24162 = G__24167;
chunk__24111_24163 = G__24168;
count__24112_24164 = G__24169;
i__24113_24165 = G__24170;
continue;
} else {
var temp__5804__auto___24171__$1 = cljs.core.seq.call(null,seq__24110_24162);
if(temp__5804__auto___24171__$1){
var seq__24110_24172__$1 = temp__5804__auto___24171__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24110_24172__$1)){
var c__5565__auto___24173 = cljs.core.chunk_first.call(null,seq__24110_24172__$1);
var G__24174 = cljs.core.chunk_rest.call(null,seq__24110_24172__$1);
var G__24175 = c__5565__auto___24173;
var G__24176 = cljs.core.count.call(null,c__5565__auto___24173);
var G__24177 = (0);
seq__24110_24162 = G__24174;
chunk__24111_24163 = G__24175;
count__24112_24164 = G__24176;
i__24113_24165 = G__24177;
continue;
} else {
var test_24178 = cljs.core.first.call(null,seq__24110_24172__$1);
cljs.compiler.emitln.call(null,"case ",test_24178,":");


var G__24179 = cljs.core.next.call(null,seq__24110_24172__$1);
var G__24180 = null;
var G__24181 = (0);
var G__24182 = (0);
seq__24110_24162 = G__24179;
chunk__24111_24163 = G__24180;
count__24112_24164 = G__24181;
i__24113_24165 = G__24182;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_24161);
} else {
cljs.compiler.emitln.call(null,then_24161);
}

cljs.compiler.emitln.call(null,"break;");


var G__24183 = cljs.core.next.call(null,seq__24086_24150__$1);
var G__24184 = null;
var G__24185 = (0);
var G__24186 = (0);
seq__24086_24114 = G__24183;
chunk__24087_24115 = G__24184;
count__24088_24116 = G__24185;
i__24089_24117 = G__24186;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__24187){
var map__24188 = p__24187;
var map__24188__$1 = cljs.core.__destructure_map.call(null,map__24188);
var throw$ = cljs.core.get.call(null,map__24188__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__24188__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__24190 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__24190,(0),null);
var rstr = cljs.core.nth.call(null,vec__24190,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__24189_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__24189_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__24193 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__24193,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__24193;
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
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__24194_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__24194_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__24195 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__24196 = cljs.core.seq.call(null,vec__24195);
var first__24197 = cljs.core.first.call(null,seq__24196);
var seq__24196__$1 = cljs.core.next.call(null,seq__24196);
var p = first__24197;
var first__24197__$1 = cljs.core.first.call(null,seq__24196__$1);
var seq__24196__$2 = cljs.core.next.call(null,seq__24196__$1);
var ts = first__24197__$1;
var first__24197__$2 = cljs.core.first.call(null,seq__24196__$2);
var seq__24196__$3 = cljs.core.next.call(null,seq__24196__$2);
var n = first__24197__$2;
var xs = seq__24196__$3;
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
var vec__24198 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__24199 = cljs.core.seq.call(null,vec__24198);
var first__24200 = cljs.core.first.call(null,seq__24199);
var seq__24199__$1 = cljs.core.next.call(null,seq__24199);
var p = first__24200;
var first__24200__$1 = cljs.core.first.call(null,seq__24199__$1);
var seq__24199__$2 = cljs.core.next.call(null,seq__24199__$1);
var ts = first__24200__$1;
var xs = seq__24199__$2;
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
var G__24203 = arguments.length;
switch (G__24203) {
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
var vec__24211 = cljs.core.map.call(null,(function (p1__24201_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__24201_SHARP_);
} else {
return p1__24201_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__24212 = cljs.core.seq.call(null,vec__24211);
var first__24213 = cljs.core.first.call(null,seq__24212);
var seq__24212__$1 = cljs.core.next.call(null,seq__24212);
var x = first__24213;
var ys = seq__24212__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__24214 = cljs.core.seq.call(null,ys);
var chunk__24215 = null;
var count__24216 = (0);
var i__24217 = (0);
while(true){
if((i__24217 < count__24216)){
var next_line = cljs.core._nth.call(null,chunk__24215,i__24217);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__24223 = seq__24214;
var G__24224 = chunk__24215;
var G__24225 = count__24216;
var G__24226 = (i__24217 + (1));
seq__24214 = G__24223;
chunk__24215 = G__24224;
count__24216 = G__24225;
i__24217 = G__24226;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__24214);
if(temp__5804__auto__){
var seq__24214__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24214__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__24214__$1);
var G__24227 = cljs.core.chunk_rest.call(null,seq__24214__$1);
var G__24228 = c__5565__auto__;
var G__24229 = cljs.core.count.call(null,c__5565__auto__);
var G__24230 = (0);
seq__24214 = G__24227;
chunk__24215 = G__24228;
count__24216 = G__24229;
i__24217 = G__24230;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__24214__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__24231 = cljs.core.next.call(null,seq__24214__$1);
var G__24232 = null;
var G__24233 = (0);
var G__24234 = (0);
seq__24214 = G__24231;
chunk__24215 = G__24232;
count__24216 = G__24233;
i__24217 = G__24234;
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

var seq__24218_24235 = cljs.core.seq.call(null,docs__$2);
var chunk__24219_24236 = null;
var count__24220_24237 = (0);
var i__24221_24238 = (0);
while(true){
if((i__24221_24238 < count__24220_24237)){
var e_24239 = cljs.core._nth.call(null,chunk__24219_24236,i__24221_24238);
if(cljs.core.truth_(e_24239)){
print_comment_lines.call(null,e_24239);
} else {
}


var G__24240 = seq__24218_24235;
var G__24241 = chunk__24219_24236;
var G__24242 = count__24220_24237;
var G__24243 = (i__24221_24238 + (1));
seq__24218_24235 = G__24240;
chunk__24219_24236 = G__24241;
count__24220_24237 = G__24242;
i__24221_24238 = G__24243;
continue;
} else {
var temp__5804__auto___24244 = cljs.core.seq.call(null,seq__24218_24235);
if(temp__5804__auto___24244){
var seq__24218_24245__$1 = temp__5804__auto___24244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24218_24245__$1)){
var c__5565__auto___24246 = cljs.core.chunk_first.call(null,seq__24218_24245__$1);
var G__24247 = cljs.core.chunk_rest.call(null,seq__24218_24245__$1);
var G__24248 = c__5565__auto___24246;
var G__24249 = cljs.core.count.call(null,c__5565__auto___24246);
var G__24250 = (0);
seq__24218_24235 = G__24247;
chunk__24219_24236 = G__24248;
count__24220_24237 = G__24249;
i__24221_24238 = G__24250;
continue;
} else {
var e_24251 = cljs.core.first.call(null,seq__24218_24245__$1);
if(cljs.core.truth_(e_24251)){
print_comment_lines.call(null,e_24251);
} else {
}


var G__24252 = cljs.core.next.call(null,seq__24218_24245__$1);
var G__24253 = null;
var G__24254 = (0);
var G__24255 = (0);
seq__24218_24235 = G__24252;
chunk__24219_24236 = G__24253;
count__24220_24237 = G__24254;
i__24221_24238 = G__24255;
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
var and__5041__auto__ = cljs.core.some.call(null,(function (p1__24257_SHARP_){
return goog.string.startsWith(p1__24257_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__24258){
var map__24259 = p__24258;
var map__24259__$1 = cljs.core.__destructure_map.call(null,map__24259);
var doc = cljs.core.get.call(null,map__24259__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__24259__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__24259__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__24259__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__24259__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__24259__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__24259__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__24259__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__24259__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__24259__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__24260){
var map__24261 = p__24260;
var map__24261__$1 = cljs.core.__destructure_map.call(null,map__24261);
var name = cljs.core.get.call(null,map__24261__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__24261__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__24261__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__24262_24286 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__24263_24287 = null;
var count__24264_24288 = (0);
var i__24265_24289 = (0);
while(true){
if((i__24265_24289 < count__24264_24288)){
var vec__24272_24290 = cljs.core._nth.call(null,chunk__24263_24287,i__24265_24289);
var i_24291 = cljs.core.nth.call(null,vec__24272_24290,(0),null);
var param_24292 = cljs.core.nth.call(null,vec__24272_24290,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_24292);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__24293 = seq__24262_24286;
var G__24294 = chunk__24263_24287;
var G__24295 = count__24264_24288;
var G__24296 = (i__24265_24289 + (1));
seq__24262_24286 = G__24293;
chunk__24263_24287 = G__24294;
count__24264_24288 = G__24295;
i__24265_24289 = G__24296;
continue;
} else {
var temp__5804__auto___24297 = cljs.core.seq.call(null,seq__24262_24286);
if(temp__5804__auto___24297){
var seq__24262_24298__$1 = temp__5804__auto___24297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24262_24298__$1)){
var c__5565__auto___24299 = cljs.core.chunk_first.call(null,seq__24262_24298__$1);
var G__24300 = cljs.core.chunk_rest.call(null,seq__24262_24298__$1);
var G__24301 = c__5565__auto___24299;
var G__24302 = cljs.core.count.call(null,c__5565__auto___24299);
var G__24303 = (0);
seq__24262_24286 = G__24300;
chunk__24263_24287 = G__24301;
count__24264_24288 = G__24302;
i__24265_24289 = G__24303;
continue;
} else {
var vec__24275_24304 = cljs.core.first.call(null,seq__24262_24298__$1);
var i_24305 = cljs.core.nth.call(null,vec__24275_24304,(0),null);
var param_24306 = cljs.core.nth.call(null,vec__24275_24304,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_24306);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__24307 = cljs.core.next.call(null,seq__24262_24298__$1);
var G__24308 = null;
var G__24309 = (0);
var G__24310 = (0);
seq__24262_24286 = G__24307;
chunk__24263_24287 = G__24308;
count__24264_24288 = G__24309;
i__24265_24289 = G__24310;
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

var seq__24278_24311 = cljs.core.seq.call(null,params);
var chunk__24279_24312 = null;
var count__24280_24313 = (0);
var i__24281_24314 = (0);
while(true){
if((i__24281_24314 < count__24280_24313)){
var param_24315 = cljs.core._nth.call(null,chunk__24279_24312,i__24281_24314);
cljs.compiler.emit.call(null,param_24315);

if(cljs.core._EQ_.call(null,param_24315,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24316 = seq__24278_24311;
var G__24317 = chunk__24279_24312;
var G__24318 = count__24280_24313;
var G__24319 = (i__24281_24314 + (1));
seq__24278_24311 = G__24316;
chunk__24279_24312 = G__24317;
count__24280_24313 = G__24318;
i__24281_24314 = G__24319;
continue;
} else {
var temp__5804__auto___24320 = cljs.core.seq.call(null,seq__24278_24311);
if(temp__5804__auto___24320){
var seq__24278_24321__$1 = temp__5804__auto___24320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24278_24321__$1)){
var c__5565__auto___24322 = cljs.core.chunk_first.call(null,seq__24278_24321__$1);
var G__24323 = cljs.core.chunk_rest.call(null,seq__24278_24321__$1);
var G__24324 = c__5565__auto___24322;
var G__24325 = cljs.core.count.call(null,c__5565__auto___24322);
var G__24326 = (0);
seq__24278_24311 = G__24323;
chunk__24279_24312 = G__24324;
count__24280_24313 = G__24325;
i__24281_24314 = G__24326;
continue;
} else {
var param_24327 = cljs.core.first.call(null,seq__24278_24321__$1);
cljs.compiler.emit.call(null,param_24327);

if(cljs.core._EQ_.call(null,param_24327,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24328 = cljs.core.next.call(null,seq__24278_24321__$1);
var G__24329 = null;
var G__24330 = (0);
var G__24331 = (0);
seq__24278_24311 = G__24328;
chunk__24279_24312 = G__24329;
count__24280_24313 = G__24330;
i__24281_24314 = G__24331;
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

var seq__24282_24332 = cljs.core.seq.call(null,params);
var chunk__24283_24333 = null;
var count__24284_24334 = (0);
var i__24285_24335 = (0);
while(true){
if((i__24285_24335 < count__24284_24334)){
var param_24336 = cljs.core._nth.call(null,chunk__24283_24333,i__24285_24335);
cljs.compiler.emit.call(null,param_24336);

if(cljs.core._EQ_.call(null,param_24336,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24337 = seq__24282_24332;
var G__24338 = chunk__24283_24333;
var G__24339 = count__24284_24334;
var G__24340 = (i__24285_24335 + (1));
seq__24282_24332 = G__24337;
chunk__24283_24333 = G__24338;
count__24284_24334 = G__24339;
i__24285_24335 = G__24340;
continue;
} else {
var temp__5804__auto___24341 = cljs.core.seq.call(null,seq__24282_24332);
if(temp__5804__auto___24341){
var seq__24282_24342__$1 = temp__5804__auto___24341;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24282_24342__$1)){
var c__5565__auto___24343 = cljs.core.chunk_first.call(null,seq__24282_24342__$1);
var G__24344 = cljs.core.chunk_rest.call(null,seq__24282_24342__$1);
var G__24345 = c__5565__auto___24343;
var G__24346 = cljs.core.count.call(null,c__5565__auto___24343);
var G__24347 = (0);
seq__24282_24332 = G__24344;
chunk__24283_24333 = G__24345;
count__24284_24334 = G__24346;
i__24285_24335 = G__24347;
continue;
} else {
var param_24348 = cljs.core.first.call(null,seq__24282_24342__$1);
cljs.compiler.emit.call(null,param_24348);

if(cljs.core._EQ_.call(null,param_24348,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24349 = cljs.core.next.call(null,seq__24282_24342__$1);
var G__24350 = null;
var G__24351 = (0);
var G__24352 = (0);
seq__24282_24332 = G__24349;
chunk__24283_24333 = G__24350;
count__24284_24334 = G__24351;
i__24285_24335 = G__24352;
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
var seq__24353 = cljs.core.seq.call(null,params);
var chunk__24354 = null;
var count__24355 = (0);
var i__24356 = (0);
while(true){
if((i__24356 < count__24355)){
var param = cljs.core._nth.call(null,chunk__24354,i__24356);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24357 = seq__24353;
var G__24358 = chunk__24354;
var G__24359 = count__24355;
var G__24360 = (i__24356 + (1));
seq__24353 = G__24357;
chunk__24354 = G__24358;
count__24355 = G__24359;
i__24356 = G__24360;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__24353);
if(temp__5804__auto__){
var seq__24353__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24353__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__24353__$1);
var G__24361 = cljs.core.chunk_rest.call(null,seq__24353__$1);
var G__24362 = c__5565__auto__;
var G__24363 = cljs.core.count.call(null,c__5565__auto__);
var G__24364 = (0);
seq__24353 = G__24361;
chunk__24354 = G__24362;
count__24355 = G__24363;
i__24356 = G__24364;
continue;
} else {
var param = cljs.core.first.call(null,seq__24353__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24365 = cljs.core.next.call(null,seq__24353__$1);
var G__24366 = null;
var G__24367 = (0);
var G__24368 = (0);
seq__24353 = G__24365;
chunk__24354 = G__24366;
count__24355 = G__24367;
i__24356 = G__24368;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__24369){
var map__24370 = p__24369;
var map__24370__$1 = cljs.core.__destructure_map.call(null,map__24370);
var expr = cljs.core.get.call(null,map__24370__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__24370__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__24370__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__24370__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__24370__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__24370__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__24371){
var map__24372 = p__24371;
var map__24372__$1 = cljs.core.__destructure_map.call(null,map__24372);
var f = map__24372__$1;
var expr = cljs.core.get.call(null,map__24372__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__24372__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__24372__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__24372__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__24372__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__24372__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__24372__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__24372__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_24381__$1 = (function (){var or__5043__auto__ = name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_24382 = cljs.compiler.munge.call(null,name_24381__$1);
var delegate_name_24383 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_24382),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_24383," = function (");

var seq__24373_24384 = cljs.core.seq.call(null,params);
var chunk__24374_24385 = null;
var count__24375_24386 = (0);
var i__24376_24387 = (0);
while(true){
if((i__24376_24387 < count__24375_24386)){
var param_24388 = cljs.core._nth.call(null,chunk__24374_24385,i__24376_24387);
cljs.compiler.emit.call(null,param_24388);

if(cljs.core._EQ_.call(null,param_24388,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24389 = seq__24373_24384;
var G__24390 = chunk__24374_24385;
var G__24391 = count__24375_24386;
var G__24392 = (i__24376_24387 + (1));
seq__24373_24384 = G__24389;
chunk__24374_24385 = G__24390;
count__24375_24386 = G__24391;
i__24376_24387 = G__24392;
continue;
} else {
var temp__5804__auto___24393 = cljs.core.seq.call(null,seq__24373_24384);
if(temp__5804__auto___24393){
var seq__24373_24394__$1 = temp__5804__auto___24393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24373_24394__$1)){
var c__5565__auto___24395 = cljs.core.chunk_first.call(null,seq__24373_24394__$1);
var G__24396 = cljs.core.chunk_rest.call(null,seq__24373_24394__$1);
var G__24397 = c__5565__auto___24395;
var G__24398 = cljs.core.count.call(null,c__5565__auto___24395);
var G__24399 = (0);
seq__24373_24384 = G__24396;
chunk__24374_24385 = G__24397;
count__24375_24386 = G__24398;
i__24376_24387 = G__24399;
continue;
} else {
var param_24400 = cljs.core.first.call(null,seq__24373_24394__$1);
cljs.compiler.emit.call(null,param_24400);

if(cljs.core._EQ_.call(null,param_24400,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24401 = cljs.core.next.call(null,seq__24373_24394__$1);
var G__24402 = null;
var G__24403 = (0);
var G__24404 = (0);
seq__24373_24384 = G__24401;
chunk__24374_24385 = G__24402;
count__24375_24386 = G__24403;
i__24376_24387 = G__24404;
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

cljs.compiler.emitln.call(null,"var ",mname_24382," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_24405 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_24405,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_24383,".call(this,");

var seq__24377_24406 = cljs.core.seq.call(null,params);
var chunk__24378_24407 = null;
var count__24379_24408 = (0);
var i__24380_24409 = (0);
while(true){
if((i__24380_24409 < count__24379_24408)){
var param_24410 = cljs.core._nth.call(null,chunk__24378_24407,i__24380_24409);
cljs.compiler.emit.call(null,param_24410);

if(cljs.core._EQ_.call(null,param_24410,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24411 = seq__24377_24406;
var G__24412 = chunk__24378_24407;
var G__24413 = count__24379_24408;
var G__24414 = (i__24380_24409 + (1));
seq__24377_24406 = G__24411;
chunk__24378_24407 = G__24412;
count__24379_24408 = G__24413;
i__24380_24409 = G__24414;
continue;
} else {
var temp__5804__auto___24415 = cljs.core.seq.call(null,seq__24377_24406);
if(temp__5804__auto___24415){
var seq__24377_24416__$1 = temp__5804__auto___24415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24377_24416__$1)){
var c__5565__auto___24417 = cljs.core.chunk_first.call(null,seq__24377_24416__$1);
var G__24418 = cljs.core.chunk_rest.call(null,seq__24377_24416__$1);
var G__24419 = c__5565__auto___24417;
var G__24420 = cljs.core.count.call(null,c__5565__auto___24417);
var G__24421 = (0);
seq__24377_24406 = G__24418;
chunk__24378_24407 = G__24419;
count__24379_24408 = G__24420;
i__24380_24409 = G__24421;
continue;
} else {
var param_24422 = cljs.core.first.call(null,seq__24377_24416__$1);
cljs.compiler.emit.call(null,param_24422);

if(cljs.core._EQ_.call(null,param_24422,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__24423 = cljs.core.next.call(null,seq__24377_24416__$1);
var G__24424 = null;
var G__24425 = (0);
var G__24426 = (0);
seq__24377_24406 = G__24423;
chunk__24378_24407 = G__24424;
count__24379_24408 = G__24425;
i__24380_24409 = G__24426;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_24382,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_24382,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_24381__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_24382,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_24383,";");

cljs.compiler.emitln.call(null,"return ",mname_24382,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__24430){
var map__24431 = p__24430;
var map__24431__$1 = cljs.core.__destructure_map.call(null,map__24431);
var variadic = cljs.core.get.call(null,map__24431__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__24431__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__24431__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__24431__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__24431__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__24431__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__24431__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__24431__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__24427_SHARP_){
var and__5041__auto__ = p1__24427_SHARP_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__24427_SHARP_));
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
var name_24483__$1 = (function (){var or__5043__auto__ = name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_24484 = cljs.compiler.munge.call(null,name_24483__$1);
var maxparams_24485 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_24486 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_24484),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_24487 = cljs.core.sort_by.call(null,(function (p1__24428_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__24428_SHARP_)));
}),cljs.core.seq.call(null,mmap_24486));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_24484," = null;");

var seq__24432_24488 = cljs.core.seq.call(null,ms_24487);
var chunk__24433_24489 = null;
var count__24434_24490 = (0);
var i__24435_24491 = (0);
while(true){
if((i__24435_24491 < count__24434_24490)){
var vec__24442_24492 = cljs.core._nth.call(null,chunk__24433_24489,i__24435_24491);
var n_24493 = cljs.core.nth.call(null,vec__24442_24492,(0),null);
var meth_24494 = cljs.core.nth.call(null,vec__24442_24492,(1),null);
cljs.compiler.emits.call(null,"var ",n_24493," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24494))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_24494);
} else {
cljs.compiler.emit_fn_method.call(null,meth_24494);
}

cljs.compiler.emitln.call(null,";");


var G__24495 = seq__24432_24488;
var G__24496 = chunk__24433_24489;
var G__24497 = count__24434_24490;
var G__24498 = (i__24435_24491 + (1));
seq__24432_24488 = G__24495;
chunk__24433_24489 = G__24496;
count__24434_24490 = G__24497;
i__24435_24491 = G__24498;
continue;
} else {
var temp__5804__auto___24499 = cljs.core.seq.call(null,seq__24432_24488);
if(temp__5804__auto___24499){
var seq__24432_24500__$1 = temp__5804__auto___24499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24432_24500__$1)){
var c__5565__auto___24501 = cljs.core.chunk_first.call(null,seq__24432_24500__$1);
var G__24502 = cljs.core.chunk_rest.call(null,seq__24432_24500__$1);
var G__24503 = c__5565__auto___24501;
var G__24504 = cljs.core.count.call(null,c__5565__auto___24501);
var G__24505 = (0);
seq__24432_24488 = G__24502;
chunk__24433_24489 = G__24503;
count__24434_24490 = G__24504;
i__24435_24491 = G__24505;
continue;
} else {
var vec__24445_24506 = cljs.core.first.call(null,seq__24432_24500__$1);
var n_24507 = cljs.core.nth.call(null,vec__24445_24506,(0),null);
var meth_24508 = cljs.core.nth.call(null,vec__24445_24506,(1),null);
cljs.compiler.emits.call(null,"var ",n_24507," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24508))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_24508);
} else {
cljs.compiler.emit_fn_method.call(null,meth_24508);
}

cljs.compiler.emitln.call(null,";");


var G__24509 = cljs.core.next.call(null,seq__24432_24500__$1);
var G__24510 = null;
var G__24511 = (0);
var G__24512 = (0);
seq__24432_24488 = G__24509;
chunk__24433_24489 = G__24510;
count__24434_24490 = G__24511;
i__24435_24491 = G__24512;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_24484," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_24485),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_24485)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_24485));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__24448_24513 = cljs.core.seq.call(null,ms_24487);
var chunk__24449_24514 = null;
var count__24450_24515 = (0);
var i__24451_24516 = (0);
while(true){
if((i__24451_24516 < count__24450_24515)){
var vec__24458_24517 = cljs.core._nth.call(null,chunk__24449_24514,i__24451_24516);
var n_24518 = cljs.core.nth.call(null,vec__24458_24517,(0),null);
var meth_24519 = cljs.core.nth.call(null,vec__24458_24517,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24519))){
cljs.compiler.emitln.call(null,"default:");

var restarg_24520 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_24520," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_24521 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_24520," = new cljs.core.IndexedSeq(",a_24521,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_24518,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_24485)),(((cljs.core.count.call(null,maxparams_24485) > (1)))?", ":null),restarg_24520,");");
} else {
var pcnt_24522 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24519));
cljs.compiler.emitln.call(null,"case ",pcnt_24522,":");

cljs.compiler.emitln.call(null,"return ",n_24518,".call(this",(((pcnt_24522 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_24522,maxparams_24485)),null,(1),null)),(2),null))),");");
}


var G__24523 = seq__24448_24513;
var G__24524 = chunk__24449_24514;
var G__24525 = count__24450_24515;
var G__24526 = (i__24451_24516 + (1));
seq__24448_24513 = G__24523;
chunk__24449_24514 = G__24524;
count__24450_24515 = G__24525;
i__24451_24516 = G__24526;
continue;
} else {
var temp__5804__auto___24527 = cljs.core.seq.call(null,seq__24448_24513);
if(temp__5804__auto___24527){
var seq__24448_24528__$1 = temp__5804__auto___24527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24448_24528__$1)){
var c__5565__auto___24529 = cljs.core.chunk_first.call(null,seq__24448_24528__$1);
var G__24530 = cljs.core.chunk_rest.call(null,seq__24448_24528__$1);
var G__24531 = c__5565__auto___24529;
var G__24532 = cljs.core.count.call(null,c__5565__auto___24529);
var G__24533 = (0);
seq__24448_24513 = G__24530;
chunk__24449_24514 = G__24531;
count__24450_24515 = G__24532;
i__24451_24516 = G__24533;
continue;
} else {
var vec__24461_24534 = cljs.core.first.call(null,seq__24448_24528__$1);
var n_24535 = cljs.core.nth.call(null,vec__24461_24534,(0),null);
var meth_24536 = cljs.core.nth.call(null,vec__24461_24534,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24536))){
cljs.compiler.emitln.call(null,"default:");

var restarg_24537 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_24537," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_24538 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_24537," = new cljs.core.IndexedSeq(",a_24538,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_24535,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_24485)),(((cljs.core.count.call(null,maxparams_24485) > (1)))?", ":null),restarg_24537,");");
} else {
var pcnt_24539 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24536));
cljs.compiler.emitln.call(null,"case ",pcnt_24539,":");

cljs.compiler.emitln.call(null,"return ",n_24535,".call(this",(((pcnt_24539 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_24539,maxparams_24485)),null,(1),null)),(2),null))),");");
}


var G__24540 = cljs.core.next.call(null,seq__24448_24528__$1);
var G__24541 = null;
var G__24542 = (0);
var G__24543 = (0);
seq__24448_24513 = G__24540;
chunk__24449_24514 = G__24541;
count__24450_24515 = G__24542;
i__24451_24516 = G__24543;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_24544 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_24487)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_24544,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_24484,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_24484,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__24429_SHARP_){
var vec__24464 = p1__24429_SHARP_;
var n = cljs.core.nth.call(null,vec__24464,(0),null);
var m = cljs.core.nth.call(null,vec__24464,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_24487),".cljs$lang$applyTo;");
} else {
}

var seq__24467_24545 = cljs.core.seq.call(null,ms_24487);
var chunk__24468_24546 = null;
var count__24469_24547 = (0);
var i__24470_24548 = (0);
while(true){
if((i__24470_24548 < count__24469_24547)){
var vec__24477_24549 = cljs.core._nth.call(null,chunk__24468_24546,i__24470_24548);
var n_24550 = cljs.core.nth.call(null,vec__24477_24549,(0),null);
var meth_24551 = cljs.core.nth.call(null,vec__24477_24549,(1),null);
var c_24552 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24551));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24551))){
cljs.compiler.emitln.call(null,mname_24484,".cljs$core$IFn$_invoke$arity$variadic = ",n_24550,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_24484,".cljs$core$IFn$_invoke$arity$",c_24552," = ",n_24550,";");
}


var G__24553 = seq__24467_24545;
var G__24554 = chunk__24468_24546;
var G__24555 = count__24469_24547;
var G__24556 = (i__24470_24548 + (1));
seq__24467_24545 = G__24553;
chunk__24468_24546 = G__24554;
count__24469_24547 = G__24555;
i__24470_24548 = G__24556;
continue;
} else {
var temp__5804__auto___24557 = cljs.core.seq.call(null,seq__24467_24545);
if(temp__5804__auto___24557){
var seq__24467_24558__$1 = temp__5804__auto___24557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24467_24558__$1)){
var c__5565__auto___24559 = cljs.core.chunk_first.call(null,seq__24467_24558__$1);
var G__24560 = cljs.core.chunk_rest.call(null,seq__24467_24558__$1);
var G__24561 = c__5565__auto___24559;
var G__24562 = cljs.core.count.call(null,c__5565__auto___24559);
var G__24563 = (0);
seq__24467_24545 = G__24560;
chunk__24468_24546 = G__24561;
count__24469_24547 = G__24562;
i__24470_24548 = G__24563;
continue;
} else {
var vec__24480_24564 = cljs.core.first.call(null,seq__24467_24558__$1);
var n_24565 = cljs.core.nth.call(null,vec__24480_24564,(0),null);
var meth_24566 = cljs.core.nth.call(null,vec__24480_24564,(1),null);
var c_24567 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_24566));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_24566))){
cljs.compiler.emitln.call(null,mname_24484,".cljs$core$IFn$_invoke$arity$variadic = ",n_24565,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_24484,".cljs$core$IFn$_invoke$arity$",c_24567," = ",n_24565,";");
}


var G__24568 = cljs.core.next.call(null,seq__24467_24558__$1);
var G__24569 = null;
var G__24570 = (0);
var G__24571 = (0);
seq__24467_24545 = G__24568;
chunk__24468_24546 = G__24569;
count__24469_24547 = G__24570;
i__24470_24548 = G__24571;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_24484,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__24572){
var map__24573 = p__24572;
var map__24573__$1 = cljs.core.__destructure_map.call(null,map__24573);
var statements = cljs.core.get.call(null,map__24573__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__24573__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__24573__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__24574_24578 = cljs.core.seq.call(null,statements);
var chunk__24575_24579 = null;
var count__24576_24580 = (0);
var i__24577_24581 = (0);
while(true){
if((i__24577_24581 < count__24576_24580)){
var s_24582 = cljs.core._nth.call(null,chunk__24575_24579,i__24577_24581);
cljs.compiler.emitln.call(null,s_24582);


var G__24583 = seq__24574_24578;
var G__24584 = chunk__24575_24579;
var G__24585 = count__24576_24580;
var G__24586 = (i__24577_24581 + (1));
seq__24574_24578 = G__24583;
chunk__24575_24579 = G__24584;
count__24576_24580 = G__24585;
i__24577_24581 = G__24586;
continue;
} else {
var temp__5804__auto___24587 = cljs.core.seq.call(null,seq__24574_24578);
if(temp__5804__auto___24587){
var seq__24574_24588__$1 = temp__5804__auto___24587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24574_24588__$1)){
var c__5565__auto___24589 = cljs.core.chunk_first.call(null,seq__24574_24588__$1);
var G__24590 = cljs.core.chunk_rest.call(null,seq__24574_24588__$1);
var G__24591 = c__5565__auto___24589;
var G__24592 = cljs.core.count.call(null,c__5565__auto___24589);
var G__24593 = (0);
seq__24574_24578 = G__24590;
chunk__24575_24579 = G__24591;
count__24576_24580 = G__24592;
i__24577_24581 = G__24593;
continue;
} else {
var s_24594 = cljs.core.first.call(null,seq__24574_24588__$1);
cljs.compiler.emitln.call(null,s_24594);


var G__24595 = cljs.core.next.call(null,seq__24574_24588__$1);
var G__24596 = null;
var G__24597 = (0);
var G__24598 = (0);
seq__24574_24578 = G__24595;
chunk__24575_24579 = G__24596;
count__24576_24580 = G__24597;
i__24577_24581 = G__24598;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__24599){
var map__24600 = p__24599;
var map__24600__$1 = cljs.core.__destructure_map.call(null,map__24600);
var try$ = cljs.core.get.call(null,map__24600__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__24600__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__24600__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__24600__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__24600__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__24601,is_loop){
var map__24602 = p__24601;
var map__24602__$1 = cljs.core.__destructure_map.call(null,map__24602);
var expr = cljs.core.get.call(null,map__24602__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__24602__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__24602__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__24603_24613 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__24604_24614 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__24604_24614);

try{var seq__24605_24615 = cljs.core.seq.call(null,bindings);
var chunk__24606_24616 = null;
var count__24607_24617 = (0);
var i__24608_24618 = (0);
while(true){
if((i__24608_24618 < count__24607_24617)){
var map__24611_24619 = cljs.core._nth.call(null,chunk__24606_24616,i__24608_24618);
var map__24611_24620__$1 = cljs.core.__destructure_map.call(null,map__24611_24619);
var binding_24621 = map__24611_24620__$1;
var init_24622 = cljs.core.get.call(null,map__24611_24620__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_24621);

cljs.compiler.emitln.call(null," = ",init_24622,";");


var G__24623 = seq__24605_24615;
var G__24624 = chunk__24606_24616;
var G__24625 = count__24607_24617;
var G__24626 = (i__24608_24618 + (1));
seq__24605_24615 = G__24623;
chunk__24606_24616 = G__24624;
count__24607_24617 = G__24625;
i__24608_24618 = G__24626;
continue;
} else {
var temp__5804__auto___24627 = cljs.core.seq.call(null,seq__24605_24615);
if(temp__5804__auto___24627){
var seq__24605_24628__$1 = temp__5804__auto___24627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24605_24628__$1)){
var c__5565__auto___24629 = cljs.core.chunk_first.call(null,seq__24605_24628__$1);
var G__24630 = cljs.core.chunk_rest.call(null,seq__24605_24628__$1);
var G__24631 = c__5565__auto___24629;
var G__24632 = cljs.core.count.call(null,c__5565__auto___24629);
var G__24633 = (0);
seq__24605_24615 = G__24630;
chunk__24606_24616 = G__24631;
count__24607_24617 = G__24632;
i__24608_24618 = G__24633;
continue;
} else {
var map__24612_24634 = cljs.core.first.call(null,seq__24605_24628__$1);
var map__24612_24635__$1 = cljs.core.__destructure_map.call(null,map__24612_24634);
var binding_24636 = map__24612_24635__$1;
var init_24637 = cljs.core.get.call(null,map__24612_24635__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_24636);

cljs.compiler.emitln.call(null," = ",init_24637,";");


var G__24638 = cljs.core.next.call(null,seq__24605_24628__$1);
var G__24639 = null;
var G__24640 = (0);
var G__24641 = (0);
seq__24605_24615 = G__24638;
chunk__24606_24616 = G__24639;
count__24607_24617 = G__24640;
i__24608_24618 = G__24641;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__24603_24613);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__24642){
var map__24643 = p__24642;
var map__24643__$1 = cljs.core.__destructure_map.call(null,map__24643);
var frame = cljs.core.get.call(null,map__24643__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__24643__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__24643__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5633__auto___24644 = cljs.core.count.call(null,exprs);
var i_24645 = (0);
while(true){
if((i_24645 < n__5633__auto___24644)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_24645)," = ",exprs.call(null,i_24645),";");

var G__24646 = (i_24645 + (1));
i_24645 = G__24646;
continue;
} else {
}
break;
}

var n__5633__auto___24647 = cljs.core.count.call(null,exprs);
var i_24648 = (0);
while(true){
if((i_24648 < n__5633__auto___24647)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_24648))," = ",temps.call(null,i_24648),";");

var G__24649 = (i_24648 + (1));
i_24648 = G__24649;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__24650){
var map__24651 = p__24650;
var map__24651__$1 = cljs.core.__destructure_map.call(null,map__24651);
var expr = cljs.core.get.call(null,map__24651__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__24651__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__24651__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__24652_24660 = cljs.core.seq.call(null,bindings);
var chunk__24653_24661 = null;
var count__24654_24662 = (0);
var i__24655_24663 = (0);
while(true){
if((i__24655_24663 < count__24654_24662)){
var map__24658_24664 = cljs.core._nth.call(null,chunk__24653_24661,i__24655_24663);
var map__24658_24665__$1 = cljs.core.__destructure_map.call(null,map__24658_24664);
var binding_24666 = map__24658_24665__$1;
var init_24667 = cljs.core.get.call(null,map__24658_24665__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_24666)," = ",init_24667,";");


var G__24668 = seq__24652_24660;
var G__24669 = chunk__24653_24661;
var G__24670 = count__24654_24662;
var G__24671 = (i__24655_24663 + (1));
seq__24652_24660 = G__24668;
chunk__24653_24661 = G__24669;
count__24654_24662 = G__24670;
i__24655_24663 = G__24671;
continue;
} else {
var temp__5804__auto___24672 = cljs.core.seq.call(null,seq__24652_24660);
if(temp__5804__auto___24672){
var seq__24652_24673__$1 = temp__5804__auto___24672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24652_24673__$1)){
var c__5565__auto___24674 = cljs.core.chunk_first.call(null,seq__24652_24673__$1);
var G__24675 = cljs.core.chunk_rest.call(null,seq__24652_24673__$1);
var G__24676 = c__5565__auto___24674;
var G__24677 = cljs.core.count.call(null,c__5565__auto___24674);
var G__24678 = (0);
seq__24652_24660 = G__24675;
chunk__24653_24661 = G__24676;
count__24654_24662 = G__24677;
i__24655_24663 = G__24678;
continue;
} else {
var map__24659_24679 = cljs.core.first.call(null,seq__24652_24673__$1);
var map__24659_24680__$1 = cljs.core.__destructure_map.call(null,map__24659_24679);
var binding_24681 = map__24659_24680__$1;
var init_24682 = cljs.core.get.call(null,map__24659_24680__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_24681)," = ",init_24682,";");


var G__24683 = cljs.core.next.call(null,seq__24652_24673__$1);
var G__24684 = null;
var G__24685 = (0);
var G__24686 = (0);
seq__24652_24660 = G__24683;
chunk__24653_24661 = G__24684;
count__24654_24662 = G__24685;
i__24655_24663 = G__24686;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__24689){
var map__24690 = p__24689;
var map__24690__$1 = cljs.core.__destructure_map.call(null,map__24690);
var expr = map__24690__$1;
var f = cljs.core.get.call(null,map__24690__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__24690__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__24690__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__24691 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__24687_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__24687_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__24688_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__24688_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__24691,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__24691,(1),null);
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
var pimpl_24694 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_24694,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_24695 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_24695,args)),(((mfa_24695 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_24695,args)),"], 0))");
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
var fprop_24696 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_24696," ? ",f__$1,fprop_24696,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_24696," ? ",f__$1,fprop_24696,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__24697){
var map__24698 = p__24697;
var map__24698__$1 = cljs.core.__destructure_map.call(null,map__24698);
var ctor = cljs.core.get.call(null,map__24698__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__24698__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__24698__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__24699){
var map__24700 = p__24699;
var map__24700__$1 = cljs.core.__destructure_map.call(null,map__24700);
var target = cljs.core.get.call(null,map__24700__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__24700__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__24700__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__24701_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24701_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__24702 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__24702,(0),null);
var sublib = cljs.core.nth.call(null,vec__24702,(1),null);
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
var map__24705 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__24705__$1 = cljs.core.__destructure_map.call(null,map__24705);
var options = cljs.core.get.call(null,map__24705__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__24705__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__24706 = options;
var map__24706__$1 = cljs.core.__destructure_map.call(null,map__24706);
var target = cljs.core.get.call(null,map__24706__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__24706__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__24706__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__24707 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__24713 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__24713__$1 = cljs.core.__destructure_map.call(null,map__24713);
var node_libs = cljs.core.get.call(null,map__24713__$1,true);
var libs_to_load = cljs.core.get.call(null,map__24713__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__24707,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__24707,(1),null);
var vec__24710 = (function (){var map__24714 = cljs.core.group_by.call(null,cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__24714__$1 = cljs.core.__destructure_map.call(null,map__24714);
var goog_modules = cljs.core.get.call(null,map__24714__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__24714__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.call(null,vec__24710,(0),null);
var libs_to_load__$1 = cljs.core.nth.call(null,vec__24710,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__24715_24759 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__24716_24760 = null;
var count__24717_24761 = (0);
var i__24718_24762 = (0);
while(true){
if((i__24718_24762 < count__24717_24761)){
var lib_24763 = cljs.core._nth.call(null,chunk__24716_24760,i__24718_24762);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_24763)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24763),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24763),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24763),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24763),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_24763,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24763),"');");
}

}
}
}


var G__24764 = seq__24715_24759;
var G__24765 = chunk__24716_24760;
var G__24766 = count__24717_24761;
var G__24767 = (i__24718_24762 + (1));
seq__24715_24759 = G__24764;
chunk__24716_24760 = G__24765;
count__24717_24761 = G__24766;
i__24718_24762 = G__24767;
continue;
} else {
var temp__5804__auto___24768 = cljs.core.seq.call(null,seq__24715_24759);
if(temp__5804__auto___24768){
var seq__24715_24769__$1 = temp__5804__auto___24768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24715_24769__$1)){
var c__5565__auto___24770 = cljs.core.chunk_first.call(null,seq__24715_24769__$1);
var G__24771 = cljs.core.chunk_rest.call(null,seq__24715_24769__$1);
var G__24772 = c__5565__auto___24770;
var G__24773 = cljs.core.count.call(null,c__5565__auto___24770);
var G__24774 = (0);
seq__24715_24759 = G__24771;
chunk__24716_24760 = G__24772;
count__24717_24761 = G__24773;
i__24718_24762 = G__24774;
continue;
} else {
var lib_24775 = cljs.core.first.call(null,seq__24715_24769__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_24775)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24775),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24775),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_24775),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24775),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_24775,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_24775),"');");
}

}
}
}


var G__24776 = cljs.core.next.call(null,seq__24715_24769__$1);
var G__24777 = null;
var G__24778 = (0);
var G__24779 = (0);
seq__24715_24759 = G__24776;
chunk__24716_24760 = G__24777;
count__24717_24761 = G__24778;
i__24718_24762 = G__24779;
continue;
}
} else {
}
}
break;
}

var seq__24719_24780 = cljs.core.seq.call(null,node_libs);
var chunk__24720_24781 = null;
var count__24721_24782 = (0);
var i__24722_24783 = (0);
while(true){
if((i__24722_24783 < count__24721_24782)){
var lib_24784 = cljs.core._nth.call(null,chunk__24720_24781,i__24722_24783);
var vec__24729_24785 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_24784);
var lib_SINGLEQUOTE__24786 = cljs.core.nth.call(null,vec__24729_24785,(0),null);
var sublib_24787 = cljs.core.nth.call(null,vec__24729_24785,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_24784)," = require('",lib_SINGLEQUOTE__24786,"')",cljs.compiler.sublib_select.call(null,sublib_24787),";");


var G__24788 = seq__24719_24780;
var G__24789 = chunk__24720_24781;
var G__24790 = count__24721_24782;
var G__24791 = (i__24722_24783 + (1));
seq__24719_24780 = G__24788;
chunk__24720_24781 = G__24789;
count__24721_24782 = G__24790;
i__24722_24783 = G__24791;
continue;
} else {
var temp__5804__auto___24792 = cljs.core.seq.call(null,seq__24719_24780);
if(temp__5804__auto___24792){
var seq__24719_24793__$1 = temp__5804__auto___24792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24719_24793__$1)){
var c__5565__auto___24794 = cljs.core.chunk_first.call(null,seq__24719_24793__$1);
var G__24795 = cljs.core.chunk_rest.call(null,seq__24719_24793__$1);
var G__24796 = c__5565__auto___24794;
var G__24797 = cljs.core.count.call(null,c__5565__auto___24794);
var G__24798 = (0);
seq__24719_24780 = G__24795;
chunk__24720_24781 = G__24796;
count__24721_24782 = G__24797;
i__24722_24783 = G__24798;
continue;
} else {
var lib_24799 = cljs.core.first.call(null,seq__24719_24793__$1);
var vec__24732_24800 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_24799);
var lib_SINGLEQUOTE__24801 = cljs.core.nth.call(null,vec__24732_24800,(0),null);
var sublib_24802 = cljs.core.nth.call(null,vec__24732_24800,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_24799)," = require('",lib_SINGLEQUOTE__24801,"')",cljs.compiler.sublib_select.call(null,sublib_24802),";");


var G__24803 = cljs.core.next.call(null,seq__24719_24793__$1);
var G__24804 = null;
var G__24805 = (0);
var G__24806 = (0);
seq__24719_24780 = G__24803;
chunk__24720_24781 = G__24804;
count__24721_24782 = G__24805;
i__24722_24783 = G__24806;
continue;
}
} else {
}
}
break;
}

var seq__24735_24807 = cljs.core.seq.call(null,goog_modules);
var chunk__24736_24808 = null;
var count__24737_24809 = (0);
var i__24738_24810 = (0);
while(true){
if((i__24738_24810 < count__24737_24809)){
var lib_24811 = cljs.core._nth.call(null,chunk__24736_24808,i__24738_24810);
var vec__24745_24812 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_24811);
var lib_SINGLEQUOTE__24813 = cljs.core.nth.call(null,vec__24745_24812,(0),null);
var sublib_24814 = cljs.core.nth.call(null,vec__24745_24812,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__24813,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_24811)," = goog.module.get('",lib_SINGLEQUOTE__24813,"')",cljs.compiler.sublib_select.call(null,sublib_24814),";");

cljs.compiler.emitln.call(null,"});");


var G__24815 = seq__24735_24807;
var G__24816 = chunk__24736_24808;
var G__24817 = count__24737_24809;
var G__24818 = (i__24738_24810 + (1));
seq__24735_24807 = G__24815;
chunk__24736_24808 = G__24816;
count__24737_24809 = G__24817;
i__24738_24810 = G__24818;
continue;
} else {
var temp__5804__auto___24819 = cljs.core.seq.call(null,seq__24735_24807);
if(temp__5804__auto___24819){
var seq__24735_24820__$1 = temp__5804__auto___24819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24735_24820__$1)){
var c__5565__auto___24821 = cljs.core.chunk_first.call(null,seq__24735_24820__$1);
var G__24822 = cljs.core.chunk_rest.call(null,seq__24735_24820__$1);
var G__24823 = c__5565__auto___24821;
var G__24824 = cljs.core.count.call(null,c__5565__auto___24821);
var G__24825 = (0);
seq__24735_24807 = G__24822;
chunk__24736_24808 = G__24823;
count__24737_24809 = G__24824;
i__24738_24810 = G__24825;
continue;
} else {
var lib_24826 = cljs.core.first.call(null,seq__24735_24820__$1);
var vec__24748_24827 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_24826);
var lib_SINGLEQUOTE__24828 = cljs.core.nth.call(null,vec__24748_24827,(0),null);
var sublib_24829 = cljs.core.nth.call(null,vec__24748_24827,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__24828,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_24826)," = goog.module.get('",lib_SINGLEQUOTE__24828,"')",cljs.compiler.sublib_select.call(null,sublib_24829),";");

cljs.compiler.emitln.call(null,"});");


var G__24830 = cljs.core.next.call(null,seq__24735_24820__$1);
var G__24831 = null;
var G__24832 = (0);
var G__24833 = (0);
seq__24735_24807 = G__24830;
chunk__24736_24808 = G__24831;
count__24737_24809 = G__24832;
i__24738_24810 = G__24833;
continue;
}
} else {
}
}
break;
}

var seq__24751_24834 = cljs.core.seq.call(null,global_exports_libs);
var chunk__24752_24835 = null;
var count__24753_24836 = (0);
var i__24754_24837 = (0);
while(true){
if((i__24754_24837 < count__24753_24836)){
var lib_24838 = cljs.core._nth.call(null,chunk__24752_24835,i__24754_24837);
var map__24757_24839 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_24838))));
var map__24757_24840__$1 = cljs.core.__destructure_map.call(null,map__24757_24839);
var global_exports_24841 = cljs.core.get.call(null,map__24757_24840__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_24841,lib_24838);


var G__24842 = seq__24751_24834;
var G__24843 = chunk__24752_24835;
var G__24844 = count__24753_24836;
var G__24845 = (i__24754_24837 + (1));
seq__24751_24834 = G__24842;
chunk__24752_24835 = G__24843;
count__24753_24836 = G__24844;
i__24754_24837 = G__24845;
continue;
} else {
var temp__5804__auto___24846 = cljs.core.seq.call(null,seq__24751_24834);
if(temp__5804__auto___24846){
var seq__24751_24847__$1 = temp__5804__auto___24846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24751_24847__$1)){
var c__5565__auto___24848 = cljs.core.chunk_first.call(null,seq__24751_24847__$1);
var G__24849 = cljs.core.chunk_rest.call(null,seq__24751_24847__$1);
var G__24850 = c__5565__auto___24848;
var G__24851 = cljs.core.count.call(null,c__5565__auto___24848);
var G__24852 = (0);
seq__24751_24834 = G__24849;
chunk__24752_24835 = G__24850;
count__24753_24836 = G__24851;
i__24754_24837 = G__24852;
continue;
} else {
var lib_24853 = cljs.core.first.call(null,seq__24751_24847__$1);
var map__24758_24854 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_24853))));
var map__24758_24855__$1 = cljs.core.__destructure_map.call(null,map__24758_24854);
var global_exports_24856 = cljs.core.get.call(null,map__24758_24855__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_24856,lib_24853);


var G__24857 = cljs.core.next.call(null,seq__24751_24847__$1);
var G__24858 = null;
var G__24859 = (0);
var G__24860 = (0);
seq__24751_24834 = G__24857;
chunk__24752_24835 = G__24858;
count__24753_24836 = G__24859;
i__24754_24837 = G__24860;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__24861){
var map__24862 = p__24861;
var map__24862__$1 = cljs.core.__destructure_map.call(null,map__24862);
var name = cljs.core.get.call(null,map__24862__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__24862__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__24862__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__24862__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__24862__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__24862__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__24862__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__24863){
var map__24864 = p__24863;
var map__24864__$1 = cljs.core.__destructure_map.call(null,map__24864);
var name = cljs.core.get.call(null,map__24864__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__24864__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__24864__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__24864__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__24864__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__24864__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__24864__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__24865){
var map__24866 = p__24865;
var map__24866__$1 = cljs.core.__destructure_map.call(null,map__24866);
var t = cljs.core.get.call(null,map__24866__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__24866__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__24866__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__24866__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__24866__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__24867_24891 = cljs.core.seq.call(null,protocols);
var chunk__24868_24892 = null;
var count__24869_24893 = (0);
var i__24870_24894 = (0);
while(true){
if((i__24870_24894 < count__24869_24893)){
var protocol_24895 = cljs.core._nth.call(null,chunk__24868_24892,i__24870_24894);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_24895)),"}");


var G__24896 = seq__24867_24891;
var G__24897 = chunk__24868_24892;
var G__24898 = count__24869_24893;
var G__24899 = (i__24870_24894 + (1));
seq__24867_24891 = G__24896;
chunk__24868_24892 = G__24897;
count__24869_24893 = G__24898;
i__24870_24894 = G__24899;
continue;
} else {
var temp__5804__auto___24900 = cljs.core.seq.call(null,seq__24867_24891);
if(temp__5804__auto___24900){
var seq__24867_24901__$1 = temp__5804__auto___24900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24867_24901__$1)){
var c__5565__auto___24902 = cljs.core.chunk_first.call(null,seq__24867_24901__$1);
var G__24903 = cljs.core.chunk_rest.call(null,seq__24867_24901__$1);
var G__24904 = c__5565__auto___24902;
var G__24905 = cljs.core.count.call(null,c__5565__auto___24902);
var G__24906 = (0);
seq__24867_24891 = G__24903;
chunk__24868_24892 = G__24904;
count__24869_24893 = G__24905;
i__24870_24894 = G__24906;
continue;
} else {
var protocol_24907 = cljs.core.first.call(null,seq__24867_24901__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_24907)),"}");


var G__24908 = cljs.core.next.call(null,seq__24867_24901__$1);
var G__24909 = null;
var G__24910 = (0);
var G__24911 = (0);
seq__24867_24891 = G__24908;
chunk__24868_24892 = G__24909;
count__24869_24893 = G__24910;
i__24870_24894 = G__24911;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__24871_24912 = cljs.core.seq.call(null,fields__$1);
var chunk__24872_24913 = null;
var count__24873_24914 = (0);
var i__24874_24915 = (0);
while(true){
if((i__24874_24915 < count__24873_24914)){
var fld_24916 = cljs.core._nth.call(null,chunk__24872_24913,i__24874_24915);
cljs.compiler.emitln.call(null,"this.",fld_24916," = ",fld_24916,";");


var G__24917 = seq__24871_24912;
var G__24918 = chunk__24872_24913;
var G__24919 = count__24873_24914;
var G__24920 = (i__24874_24915 + (1));
seq__24871_24912 = G__24917;
chunk__24872_24913 = G__24918;
count__24873_24914 = G__24919;
i__24874_24915 = G__24920;
continue;
} else {
var temp__5804__auto___24921 = cljs.core.seq.call(null,seq__24871_24912);
if(temp__5804__auto___24921){
var seq__24871_24922__$1 = temp__5804__auto___24921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24871_24922__$1)){
var c__5565__auto___24923 = cljs.core.chunk_first.call(null,seq__24871_24922__$1);
var G__24924 = cljs.core.chunk_rest.call(null,seq__24871_24922__$1);
var G__24925 = c__5565__auto___24923;
var G__24926 = cljs.core.count.call(null,c__5565__auto___24923);
var G__24927 = (0);
seq__24871_24912 = G__24924;
chunk__24872_24913 = G__24925;
count__24873_24914 = G__24926;
i__24874_24915 = G__24927;
continue;
} else {
var fld_24928 = cljs.core.first.call(null,seq__24871_24922__$1);
cljs.compiler.emitln.call(null,"this.",fld_24928," = ",fld_24928,";");


var G__24929 = cljs.core.next.call(null,seq__24871_24922__$1);
var G__24930 = null;
var G__24931 = (0);
var G__24932 = (0);
seq__24871_24912 = G__24929;
chunk__24872_24913 = G__24930;
count__24873_24914 = G__24931;
i__24874_24915 = G__24932;
continue;
}
} else {
}
}
break;
}

var seq__24875_24933 = cljs.core.seq.call(null,pmasks);
var chunk__24876_24934 = null;
var count__24877_24935 = (0);
var i__24878_24936 = (0);
while(true){
if((i__24878_24936 < count__24877_24935)){
var vec__24885_24937 = cljs.core._nth.call(null,chunk__24876_24934,i__24878_24936);
var pno_24938 = cljs.core.nth.call(null,vec__24885_24937,(0),null);
var pmask_24939 = cljs.core.nth.call(null,vec__24885_24937,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24938,"$ = ",pmask_24939,";");


var G__24940 = seq__24875_24933;
var G__24941 = chunk__24876_24934;
var G__24942 = count__24877_24935;
var G__24943 = (i__24878_24936 + (1));
seq__24875_24933 = G__24940;
chunk__24876_24934 = G__24941;
count__24877_24935 = G__24942;
i__24878_24936 = G__24943;
continue;
} else {
var temp__5804__auto___24944 = cljs.core.seq.call(null,seq__24875_24933);
if(temp__5804__auto___24944){
var seq__24875_24945__$1 = temp__5804__auto___24944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24875_24945__$1)){
var c__5565__auto___24946 = cljs.core.chunk_first.call(null,seq__24875_24945__$1);
var G__24947 = cljs.core.chunk_rest.call(null,seq__24875_24945__$1);
var G__24948 = c__5565__auto___24946;
var G__24949 = cljs.core.count.call(null,c__5565__auto___24946);
var G__24950 = (0);
seq__24875_24933 = G__24947;
chunk__24876_24934 = G__24948;
count__24877_24935 = G__24949;
i__24878_24936 = G__24950;
continue;
} else {
var vec__24888_24951 = cljs.core.first.call(null,seq__24875_24945__$1);
var pno_24952 = cljs.core.nth.call(null,vec__24888_24951,(0),null);
var pmask_24953 = cljs.core.nth.call(null,vec__24888_24951,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_24952,"$ = ",pmask_24953,";");


var G__24954 = cljs.core.next.call(null,seq__24875_24945__$1);
var G__24955 = null;
var G__24956 = (0);
var G__24957 = (0);
seq__24875_24933 = G__24954;
chunk__24876_24934 = G__24955;
count__24877_24935 = G__24956;
i__24878_24936 = G__24957;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__24958){
var map__24959 = p__24958;
var map__24959__$1 = cljs.core.__destructure_map.call(null,map__24959);
var t = cljs.core.get.call(null,map__24959__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__24959__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__24959__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__24959__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__24959__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__24960_24984 = cljs.core.seq.call(null,protocols);
var chunk__24961_24985 = null;
var count__24962_24986 = (0);
var i__24963_24987 = (0);
while(true){
if((i__24963_24987 < count__24962_24986)){
var protocol_24988 = cljs.core._nth.call(null,chunk__24961_24985,i__24963_24987);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_24988)),"}");


var G__24989 = seq__24960_24984;
var G__24990 = chunk__24961_24985;
var G__24991 = count__24962_24986;
var G__24992 = (i__24963_24987 + (1));
seq__24960_24984 = G__24989;
chunk__24961_24985 = G__24990;
count__24962_24986 = G__24991;
i__24963_24987 = G__24992;
continue;
} else {
var temp__5804__auto___24993 = cljs.core.seq.call(null,seq__24960_24984);
if(temp__5804__auto___24993){
var seq__24960_24994__$1 = temp__5804__auto___24993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24960_24994__$1)){
var c__5565__auto___24995 = cljs.core.chunk_first.call(null,seq__24960_24994__$1);
var G__24996 = cljs.core.chunk_rest.call(null,seq__24960_24994__$1);
var G__24997 = c__5565__auto___24995;
var G__24998 = cljs.core.count.call(null,c__5565__auto___24995);
var G__24999 = (0);
seq__24960_24984 = G__24996;
chunk__24961_24985 = G__24997;
count__24962_24986 = G__24998;
i__24963_24987 = G__24999;
continue;
} else {
var protocol_25000 = cljs.core.first.call(null,seq__24960_24994__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_25000)),"}");


var G__25001 = cljs.core.next.call(null,seq__24960_24994__$1);
var G__25002 = null;
var G__25003 = (0);
var G__25004 = (0);
seq__24960_24984 = G__25001;
chunk__24961_24985 = G__25002;
count__24962_24986 = G__25003;
i__24963_24987 = G__25004;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__24964_25005 = cljs.core.seq.call(null,fields__$1);
var chunk__24965_25006 = null;
var count__24966_25007 = (0);
var i__24967_25008 = (0);
while(true){
if((i__24967_25008 < count__24966_25007)){
var fld_25009 = cljs.core._nth.call(null,chunk__24965_25006,i__24967_25008);
cljs.compiler.emitln.call(null,"this.",fld_25009," = ",fld_25009,";");


var G__25010 = seq__24964_25005;
var G__25011 = chunk__24965_25006;
var G__25012 = count__24966_25007;
var G__25013 = (i__24967_25008 + (1));
seq__24964_25005 = G__25010;
chunk__24965_25006 = G__25011;
count__24966_25007 = G__25012;
i__24967_25008 = G__25013;
continue;
} else {
var temp__5804__auto___25014 = cljs.core.seq.call(null,seq__24964_25005);
if(temp__5804__auto___25014){
var seq__24964_25015__$1 = temp__5804__auto___25014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24964_25015__$1)){
var c__5565__auto___25016 = cljs.core.chunk_first.call(null,seq__24964_25015__$1);
var G__25017 = cljs.core.chunk_rest.call(null,seq__24964_25015__$1);
var G__25018 = c__5565__auto___25016;
var G__25019 = cljs.core.count.call(null,c__5565__auto___25016);
var G__25020 = (0);
seq__24964_25005 = G__25017;
chunk__24965_25006 = G__25018;
count__24966_25007 = G__25019;
i__24967_25008 = G__25020;
continue;
} else {
var fld_25021 = cljs.core.first.call(null,seq__24964_25015__$1);
cljs.compiler.emitln.call(null,"this.",fld_25021," = ",fld_25021,";");


var G__25022 = cljs.core.next.call(null,seq__24964_25015__$1);
var G__25023 = null;
var G__25024 = (0);
var G__25025 = (0);
seq__24964_25005 = G__25022;
chunk__24965_25006 = G__25023;
count__24966_25007 = G__25024;
i__24967_25008 = G__25025;
continue;
}
} else {
}
}
break;
}

var seq__24968_25026 = cljs.core.seq.call(null,pmasks);
var chunk__24969_25027 = null;
var count__24970_25028 = (0);
var i__24971_25029 = (0);
while(true){
if((i__24971_25029 < count__24970_25028)){
var vec__24978_25030 = cljs.core._nth.call(null,chunk__24969_25027,i__24971_25029);
var pno_25031 = cljs.core.nth.call(null,vec__24978_25030,(0),null);
var pmask_25032 = cljs.core.nth.call(null,vec__24978_25030,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_25031,"$ = ",pmask_25032,";");


var G__25033 = seq__24968_25026;
var G__25034 = chunk__24969_25027;
var G__25035 = count__24970_25028;
var G__25036 = (i__24971_25029 + (1));
seq__24968_25026 = G__25033;
chunk__24969_25027 = G__25034;
count__24970_25028 = G__25035;
i__24971_25029 = G__25036;
continue;
} else {
var temp__5804__auto___25037 = cljs.core.seq.call(null,seq__24968_25026);
if(temp__5804__auto___25037){
var seq__24968_25038__$1 = temp__5804__auto___25037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24968_25038__$1)){
var c__5565__auto___25039 = cljs.core.chunk_first.call(null,seq__24968_25038__$1);
var G__25040 = cljs.core.chunk_rest.call(null,seq__24968_25038__$1);
var G__25041 = c__5565__auto___25039;
var G__25042 = cljs.core.count.call(null,c__5565__auto___25039);
var G__25043 = (0);
seq__24968_25026 = G__25040;
chunk__24969_25027 = G__25041;
count__24970_25028 = G__25042;
i__24971_25029 = G__25043;
continue;
} else {
var vec__24981_25044 = cljs.core.first.call(null,seq__24968_25038__$1);
var pno_25045 = cljs.core.nth.call(null,vec__24981_25044,(0),null);
var pmask_25046 = cljs.core.nth.call(null,vec__24981_25044,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_25045,"$ = ",pmask_25046,";");


var G__25047 = cljs.core.next.call(null,seq__24968_25038__$1);
var G__25048 = null;
var G__25049 = (0);
var G__25050 = (0);
seq__24968_25026 = G__25047;
chunk__24969_25027 = G__25048;
count__24970_25028 = G__25049;
i__24971_25029 = G__25050;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__25051){
var map__25052 = p__25051;
var map__25052__$1 = cljs.core.__destructure_map.call(null,map__25052);
var target = cljs.core.get.call(null,map__25052__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__25052__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__25052__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__25052__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__25052__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__25053){
var map__25054 = p__25053;
var map__25054__$1 = cljs.core.__destructure_map.call(null,map__25054);
var op = cljs.core.get.call(null,map__25054__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__25054__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__25054__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__25054__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__25054__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__25059 = cljs.core.seq.call(null,table);
var chunk__25060 = null;
var count__25061 = (0);
var i__25062 = (0);
while(true){
if((i__25062 < count__25061)){
var vec__25069 = cljs.core._nth.call(null,chunk__25060,i__25062);
var sym = cljs.core.nth.call(null,vec__25069,(0),null);
var value = cljs.core.nth.call(null,vec__25069,(1),null);
var ns_25075 = cljs.core.namespace.call(null,sym);
var name_25076 = cljs.core.name.call(null,sym);
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


var G__25077 = seq__25059;
var G__25078 = chunk__25060;
var G__25079 = count__25061;
var G__25080 = (i__25062 + (1));
seq__25059 = G__25077;
chunk__25060 = G__25078;
count__25061 = G__25079;
i__25062 = G__25080;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__25059);
if(temp__5804__auto__){
var seq__25059__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25059__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__25059__$1);
var G__25081 = cljs.core.chunk_rest.call(null,seq__25059__$1);
var G__25082 = c__5565__auto__;
var G__25083 = cljs.core.count.call(null,c__5565__auto__);
var G__25084 = (0);
seq__25059 = G__25081;
chunk__25060 = G__25082;
count__25061 = G__25083;
i__25062 = G__25084;
continue;
} else {
var vec__25072 = cljs.core.first.call(null,seq__25059__$1);
var sym = cljs.core.nth.call(null,vec__25072,(0),null);
var value = cljs.core.nth.call(null,vec__25072,(1),null);
var ns_25085 = cljs.core.namespace.call(null,sym);
var name_25086 = cljs.core.name.call(null,sym);
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


var G__25087 = cljs.core.next.call(null,seq__25059__$1);
var G__25088 = null;
var G__25089 = (0);
var G__25090 = (0);
seq__25059 = G__25087;
chunk__25060 = G__25088;
count__25061 = G__25089;
i__25062 = G__25090;
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
var G__25092 = arguments.length;
switch (G__25092) {
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
var k_25097 = cljs.core.first.call(null,ks);
var vec__25093_25098 = cljs.core.conj.call(null,prefix,k_25097);
var top_25099 = cljs.core.nth.call(null,vec__25093_25098,(0),null);
var prefix_SINGLEQUOTE__25100 = vec__25093_25098;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_25097)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__25100) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_25099)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_25099)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__25100)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_25099);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__25100)),";");
}
} else {
}

var m_25101 = cljs.core.get.call(null,externs,k_25097);
if(cljs.core.empty_QMARK_.call(null,m_25101)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__25100,m_25101,top_level,known_externs);
}

var G__25102 = cljs.core.next.call(null,ks);
ks = G__25102;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=compiler.js.map

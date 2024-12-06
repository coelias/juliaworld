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
var map__12589 = s;
var map__12589__$1 = cljs.core.__destructure_map.call(null,map__12589);
var name = cljs.core.get.call(null,map__12589__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__12589__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__12591 = info;
var map__12592 = G__12591;
var map__12592__$1 = cljs.core.__destructure_map.call(null,map__12592);
var shadow = cljs.core.get.call(null,map__12592__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__12591__$1 = G__12591;
while(true){
var d__$2 = d__$1;
var map__12594 = G__12591__$1;
var map__12594__$1 = cljs.core.__destructure_map.call(null,map__12594);
var shadow__$1 = cljs.core.get.call(null,map__12594__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__12595 = (d__$2 + (1));
var G__12596 = shadow__$1;
d__$1 = G__12595;
G__12591__$1 = G__12596;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__12597){
var map__12598 = p__12597;
var map__12598__$1 = cljs.core.__destructure_map.call(null,map__12598);
var name_var = map__12598__$1;
var name = cljs.core.get.call(null,map__12598__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__12598__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__12599 = info;
var map__12599__$1 = cljs.core.__destructure_map.call(null,map__12599);
var ns = cljs.core.get.call(null,map__12599__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__12599__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__12601 = arguments.length;
switch (G__12601) {
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
var G__12603 = cp;
switch (G__12603) {
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
var seq__12605_12609 = cljs.core.seq.call(null,s);
var chunk__12606_12610 = null;
var count__12607_12611 = (0);
var i__12608_12612 = (0);
while(true){
if((i__12608_12612 < count__12607_12611)){
var c_12613 = cljs.core._nth.call(null,chunk__12606_12610,i__12608_12612);
sb.append(cljs.compiler.escape_char.call(null,c_12613));


var G__12614 = seq__12605_12609;
var G__12615 = chunk__12606_12610;
var G__12616 = count__12607_12611;
var G__12617 = (i__12608_12612 + (1));
seq__12605_12609 = G__12614;
chunk__12606_12610 = G__12615;
count__12607_12611 = G__12616;
i__12608_12612 = G__12617;
continue;
} else {
var temp__5804__auto___12618 = cljs.core.seq.call(null,seq__12605_12609);
if(temp__5804__auto___12618){
var seq__12605_12619__$1 = temp__5804__auto___12618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12605_12619__$1)){
var c__5565__auto___12620 = cljs.core.chunk_first.call(null,seq__12605_12619__$1);
var G__12621 = cljs.core.chunk_rest.call(null,seq__12605_12619__$1);
var G__12622 = c__5565__auto___12620;
var G__12623 = cljs.core.count.call(null,c__5565__auto___12620);
var G__12624 = (0);
seq__12605_12609 = G__12621;
chunk__12606_12610 = G__12622;
count__12607_12611 = G__12623;
i__12608_12612 = G__12624;
continue;
} else {
var c_12625 = cljs.core.first.call(null,seq__12605_12619__$1);
sb.append(cljs.compiler.escape_char.call(null,c_12625));


var G__12626 = cljs.core.next.call(null,seq__12605_12619__$1);
var G__12627 = null;
var G__12628 = (0);
var G__12629 = (0);
seq__12605_12609 = G__12626;
chunk__12606_12610 = G__12627;
count__12607_12611 = G__12628;
i__12608_12612 = G__12629;
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
var map__12630_12633 = ast;
var map__12630_12634__$1 = cljs.core.__destructure_map.call(null,map__12630_12633);
var env_12635 = cljs.core.get.call(null,map__12630_12634__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_12635))){
var map__12631_12636 = env_12635;
var map__12631_12637__$1 = cljs.core.__destructure_map.call(null,map__12631_12636);
var line_12638 = cljs.core.get.call(null,map__12631_12637__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_12639 = cljs.core.get.call(null,map__12631_12637__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__12632 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__12632,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__12632;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_12638 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_12639)?(column_12639 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
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
var G__12648 = arguments.length;
switch (G__12648) {
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
var len__5766__auto___12655 = arguments.length;
var i__5767__auto___12656 = (0);
while(true){
if((i__5767__auto___12656 < len__5766__auto___12655)){
args_arr__5791__auto__.push((arguments[i__5767__auto___12656]));

var G__12657 = (i__5767__auto___12656 + (1));
i__5767__auto___12656 = G__12657;
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
var s_12658 = (function (){var G__12649 = a;
if((!(typeof a === 'string'))){
return G__12649.toString();
} else {
return G__12649;
}
})();
var temp__5808__auto___12659 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5808__auto___12659 == null)){
} else {
var sm_data_12660 = temp__5808__auto___12659;
cljs.core.swap_BANG_.call(null,sm_data_12660,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__12640_SHARP_){
return (p1__12640_SHARP_ + s_12658.length);
}));
}

cljs.core.print.call(null,s_12658);

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

var seq__12650 = cljs.core.seq.call(null,xs);
var chunk__12651 = null;
var count__12652 = (0);
var i__12653 = (0);
while(true){
if((i__12653 < count__12652)){
var x = cljs.core._nth.call(null,chunk__12651,i__12653);
cljs.compiler.emits.call(null,x);


var G__12661 = seq__12650;
var G__12662 = chunk__12651;
var G__12663 = count__12652;
var G__12664 = (i__12653 + (1));
seq__12650 = G__12661;
chunk__12651 = G__12662;
count__12652 = G__12663;
i__12653 = G__12664;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12650);
if(temp__5804__auto__){
var seq__12650__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12650__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__12650__$1);
var G__12665 = cljs.core.chunk_rest.call(null,seq__12650__$1);
var G__12666 = c__5565__auto__;
var G__12667 = cljs.core.count.call(null,c__5565__auto__);
var G__12668 = (0);
seq__12650 = G__12665;
chunk__12651 = G__12666;
count__12652 = G__12667;
i__12653 = G__12668;
continue;
} else {
var x = cljs.core.first.call(null,seq__12650__$1);
cljs.compiler.emits.call(null,x);


var G__12669 = cljs.core.next.call(null,seq__12650__$1);
var G__12670 = null;
var G__12671 = (0);
var G__12672 = (0);
seq__12650 = G__12669;
chunk__12651 = G__12670;
count__12652 = G__12671;
i__12653 = G__12672;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq12642){
var G__12643 = cljs.core.first.call(null,seq12642);
var seq12642__$1 = cljs.core.next.call(null,seq12642);
var G__12644 = cljs.core.first.call(null,seq12642__$1);
var seq12642__$2 = cljs.core.next.call(null,seq12642__$1);
var G__12645 = cljs.core.first.call(null,seq12642__$2);
var seq12642__$3 = cljs.core.next.call(null,seq12642__$2);
var G__12646 = cljs.core.first.call(null,seq12642__$3);
var seq12642__$4 = cljs.core.next.call(null,seq12642__$3);
var G__12647 = cljs.core.first.call(null,seq12642__$4);
var seq12642__$5 = cljs.core.next.call(null,seq12642__$4);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12643,G__12644,G__12645,G__12646,G__12647,seq12642__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__12673){
var map__12674 = p__12673;
var map__12674__$1 = cljs.core.__destructure_map.call(null,map__12674);
var m = map__12674__$1;
var gen_line = cljs.core.get.call(null,map__12674__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__12682 = arguments.length;
switch (G__12682) {
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
var len__5766__auto___12688 = arguments.length;
var i__5767__auto___12689 = (0);
while(true){
if((i__5767__auto___12689 < len__5766__auto___12688)){
args_arr__5791__auto__.push((arguments[i__5767__auto___12689]));

var G__12690 = (i__5767__auto___12689 + (1));
i__5767__auto___12689 = G__12690;
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

var seq__12683_12691 = cljs.core.seq.call(null,xs);
var chunk__12684_12692 = null;
var count__12685_12693 = (0);
var i__12686_12694 = (0);
while(true){
if((i__12686_12694 < count__12685_12693)){
var x_12695 = cljs.core._nth.call(null,chunk__12684_12692,i__12686_12694);
cljs.compiler.emits.call(null,x_12695);


var G__12696 = seq__12683_12691;
var G__12697 = chunk__12684_12692;
var G__12698 = count__12685_12693;
var G__12699 = (i__12686_12694 + (1));
seq__12683_12691 = G__12696;
chunk__12684_12692 = G__12697;
count__12685_12693 = G__12698;
i__12686_12694 = G__12699;
continue;
} else {
var temp__5804__auto___12700 = cljs.core.seq.call(null,seq__12683_12691);
if(temp__5804__auto___12700){
var seq__12683_12701__$1 = temp__5804__auto___12700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12683_12701__$1)){
var c__5565__auto___12702 = cljs.core.chunk_first.call(null,seq__12683_12701__$1);
var G__12703 = cljs.core.chunk_rest.call(null,seq__12683_12701__$1);
var G__12704 = c__5565__auto___12702;
var G__12705 = cljs.core.count.call(null,c__5565__auto___12702);
var G__12706 = (0);
seq__12683_12691 = G__12703;
chunk__12684_12692 = G__12704;
count__12685_12693 = G__12705;
i__12686_12694 = G__12706;
continue;
} else {
var x_12707 = cljs.core.first.call(null,seq__12683_12701__$1);
cljs.compiler.emits.call(null,x_12707);


var G__12708 = cljs.core.next.call(null,seq__12683_12701__$1);
var G__12709 = null;
var G__12710 = (0);
var G__12711 = (0);
seq__12683_12691 = G__12708;
chunk__12684_12692 = G__12709;
count__12685_12693 = G__12710;
i__12686_12694 = G__12711;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq12676){
var G__12677 = cljs.core.first.call(null,seq12676);
var seq12676__$1 = cljs.core.next.call(null,seq12676);
var G__12678 = cljs.core.first.call(null,seq12676__$1);
var seq12676__$2 = cljs.core.next.call(null,seq12676__$1);
var G__12679 = cljs.core.first.call(null,seq12676__$2);
var seq12676__$3 = cljs.core.next.call(null,seq12676__$2);
var G__12680 = cljs.core.first.call(null,seq12676__$3);
var seq12676__$4 = cljs.core.next.call(null,seq12676__$3);
var G__12681 = cljs.core.first.call(null,seq12676__$4);
var seq12676__$5 = cljs.core.next.call(null,seq12676__$4);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12677,G__12678,G__12679,G__12680,G__12681,seq12676__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12712_12716 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12713_12717 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12714_12718 = true;
var _STAR_print_fn_STAR__temp_val__12715_12719 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12714_12718);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12715_12719);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12713_12717);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12712_12716);
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
var vec__12720 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__12720,(0),null);
var name = cljs.core.nth.call(null,vec__12720,(1),null);
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
var vec__12723 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__12723,(0),null);
var flags = cljs.core.nth.call(null,vec__12723,(1),null);
var pattern = cljs.core.nth.call(null,vec__12723,(2),null);
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
return cljs.compiler.emit_js_object.call(null,items,(function (p1__12726_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__12726_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__12728){
var map__12729 = p__12728;
var map__12729__$1 = cljs.core.__destructure_map.call(null,map__12729);
var ast = map__12729__$1;
var info = cljs.core.get.call(null,map__12729__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__12729__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__12729__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5802__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5802__auto__)){
var const_expr = temp__5802__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__12730 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__12730__$1 = cljs.core.__destructure_map.call(null,map__12730);
var cenv = map__12730__$1;
var options = cljs.core.get.call(null,map__12730__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__12731 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__5041__auto__;
}
})())){
return clojure.set.difference.call(null,G__12731,cljs.analyzer.es5_allowed);
} else {
return G__12731;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__5043__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__12732 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__12732,reserved);
} else {
return G__12732;
}
})();
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__12733_12734 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__12733_12735__$1 = (((G__12733_12734 instanceof cljs.core.Keyword))?G__12733_12734.fqn:null);
switch (G__12733_12735__$1) {
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__12737){
var map__12738 = p__12737;
var map__12738__$1 = cljs.core.__destructure_map.call(null,map__12738);
var arg = map__12738__$1;
var env = cljs.core.get.call(null,map__12738__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__12738__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__12738__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__12738__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__12739 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__12739__$1 = cljs.core.__destructure_map.call(null,map__12739);
var name = cljs.core.get.call(null,map__12739__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__12740){
var map__12741 = p__12740;
var map__12741__$1 = cljs.core.__destructure_map.call(null,map__12741);
var expr = cljs.core.get.call(null,map__12741__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__12741__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__12741__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_.call(null,(function (p1__12742_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12742_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__12743){
var map__12744 = p__12743;
var map__12744__$1 = cljs.core.__destructure_map.call(null,map__12744);
var env = cljs.core.get.call(null,map__12744__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__12744__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__12744__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__12745){
var map__12746 = p__12745;
var map__12746__$1 = cljs.core.__destructure_map.call(null,map__12746);
var items = cljs.core.get.call(null,map__12746__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12746__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_.call(null,(function (p1__12747_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12747_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__12748){
var map__12749 = p__12748;
var map__12749__$1 = cljs.core.__destructure_map.call(null,map__12749);
var items = cljs.core.get.call(null,map__12749__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12749__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5804__auto___12772 = cljs.core.seq.call(null,items);
if(temp__5804__auto___12772){
var items_12773__$1 = temp__5804__auto___12772;
var vec__12750_12774 = items_12773__$1;
var seq__12751_12775 = cljs.core.seq.call(null,vec__12750_12774);
var first__12752_12776 = cljs.core.first.call(null,seq__12751_12775);
var seq__12751_12777__$1 = cljs.core.next.call(null,seq__12751_12775);
var vec__12753_12778 = first__12752_12776;
var k_12779 = cljs.core.nth.call(null,vec__12753_12778,(0),null);
var v_12780 = cljs.core.nth.call(null,vec__12753_12778,(1),null);
var r_12781 = seq__12751_12777__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_12779),"\": ",emit_js_object_val.call(null,v_12780));

var seq__12756_12782 = cljs.core.seq.call(null,r_12781);
var chunk__12757_12783 = null;
var count__12758_12784 = (0);
var i__12759_12785 = (0);
while(true){
if((i__12759_12785 < count__12758_12784)){
var vec__12766_12786 = cljs.core._nth.call(null,chunk__12757_12783,i__12759_12785);
var k_12787__$1 = cljs.core.nth.call(null,vec__12766_12786,(0),null);
var v_12788__$1 = cljs.core.nth.call(null,vec__12766_12786,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_12787__$1),"\": ",emit_js_object_val.call(null,v_12788__$1));


var G__12789 = seq__12756_12782;
var G__12790 = chunk__12757_12783;
var G__12791 = count__12758_12784;
var G__12792 = (i__12759_12785 + (1));
seq__12756_12782 = G__12789;
chunk__12757_12783 = G__12790;
count__12758_12784 = G__12791;
i__12759_12785 = G__12792;
continue;
} else {
var temp__5804__auto___12793__$1 = cljs.core.seq.call(null,seq__12756_12782);
if(temp__5804__auto___12793__$1){
var seq__12756_12794__$1 = temp__5804__auto___12793__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12756_12794__$1)){
var c__5565__auto___12795 = cljs.core.chunk_first.call(null,seq__12756_12794__$1);
var G__12796 = cljs.core.chunk_rest.call(null,seq__12756_12794__$1);
var G__12797 = c__5565__auto___12795;
var G__12798 = cljs.core.count.call(null,c__5565__auto___12795);
var G__12799 = (0);
seq__12756_12782 = G__12796;
chunk__12757_12783 = G__12797;
count__12758_12784 = G__12798;
i__12759_12785 = G__12799;
continue;
} else {
var vec__12769_12800 = cljs.core.first.call(null,seq__12756_12794__$1);
var k_12801__$1 = cljs.core.nth.call(null,vec__12769_12800,(0),null);
var v_12802__$1 = cljs.core.nth.call(null,vec__12769_12800,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_12801__$1),"\": ",emit_js_object_val.call(null,v_12802__$1));


var G__12803 = cljs.core.next.call(null,seq__12756_12794__$1);
var G__12804 = null;
var G__12805 = (0);
var G__12806 = (0);
seq__12756_12782 = G__12803;
chunk__12757_12783 = G__12804;
count__12758_12784 = G__12805;
i__12759_12785 = G__12806;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__12807){
var map__12808 = p__12807;
var map__12808__$1 = cljs.core.__destructure_map.call(null,map__12808);
var keys = cljs.core.get.call(null,map__12808__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__12808__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__12808__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__12809){
var map__12810 = p__12809;
var map__12810__$1 = cljs.core.__destructure_map.call(null,map__12810);
var items = cljs.core.get.call(null,map__12810__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12810__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__12811){
var map__12812 = p__12811;
var map__12812__$1 = cljs.core.__destructure_map.call(null,map__12812);
var expr = cljs.core.get.call(null,map__12812__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__12813){
var map__12814 = p__12813;
var map__12814__$1 = cljs.core.__destructure_map.call(null,map__12814);
var form = cljs.core.get.call(null,map__12814__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__12814__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__12815 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__12815__$1 = cljs.core.__destructure_map.call(null,map__12815);
var op = cljs.core.get.call(null,map__12815__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__12815__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__12815__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__12816 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__12816__$1 = cljs.core.__destructure_map.call(null,map__12816);
var op = cljs.core.get.call(null,map__12816__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__12816__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__12816__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__12817){
var map__12818 = p__12817;
var map__12818__$1 = cljs.core.__destructure_map.call(null,map__12818);
var test = cljs.core.get.call(null,map__12818__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__12818__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__12818__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__12818__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__12818__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__12819){
var map__12820 = p__12819;
var map__12820__$1 = cljs.core.__destructure_map.call(null,map__12820);
var v = cljs.core.get.call(null,map__12820__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__12820__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__12820__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__12820__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__12821_12849 = cljs.core.seq.call(null,nodes);
var chunk__12822_12850 = null;
var count__12823_12851 = (0);
var i__12824_12852 = (0);
while(true){
if((i__12824_12852 < count__12823_12851)){
var map__12837_12853 = cljs.core._nth.call(null,chunk__12822_12850,i__12824_12852);
var map__12837_12854__$1 = cljs.core.__destructure_map.call(null,map__12837_12853);
var ts_12855 = cljs.core.get.call(null,map__12837_12854__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__12838_12856 = cljs.core.get.call(null,map__12837_12854__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__12838_12857__$1 = cljs.core.__destructure_map.call(null,map__12838_12856);
var then_12858 = cljs.core.get.call(null,map__12838_12857__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__12839_12859 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_12855));
var chunk__12840_12860 = null;
var count__12841_12861 = (0);
var i__12842_12862 = (0);
while(true){
if((i__12842_12862 < count__12841_12861)){
var test_12863 = cljs.core._nth.call(null,chunk__12840_12860,i__12842_12862);
cljs.compiler.emitln.call(null,"case ",test_12863,":");


var G__12864 = seq__12839_12859;
var G__12865 = chunk__12840_12860;
var G__12866 = count__12841_12861;
var G__12867 = (i__12842_12862 + (1));
seq__12839_12859 = G__12864;
chunk__12840_12860 = G__12865;
count__12841_12861 = G__12866;
i__12842_12862 = G__12867;
continue;
} else {
var temp__5804__auto___12868 = cljs.core.seq.call(null,seq__12839_12859);
if(temp__5804__auto___12868){
var seq__12839_12869__$1 = temp__5804__auto___12868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12839_12869__$1)){
var c__5565__auto___12870 = cljs.core.chunk_first.call(null,seq__12839_12869__$1);
var G__12871 = cljs.core.chunk_rest.call(null,seq__12839_12869__$1);
var G__12872 = c__5565__auto___12870;
var G__12873 = cljs.core.count.call(null,c__5565__auto___12870);
var G__12874 = (0);
seq__12839_12859 = G__12871;
chunk__12840_12860 = G__12872;
count__12841_12861 = G__12873;
i__12842_12862 = G__12874;
continue;
} else {
var test_12875 = cljs.core.first.call(null,seq__12839_12869__$1);
cljs.compiler.emitln.call(null,"case ",test_12875,":");


var G__12876 = cljs.core.next.call(null,seq__12839_12869__$1);
var G__12877 = null;
var G__12878 = (0);
var G__12879 = (0);
seq__12839_12859 = G__12876;
chunk__12840_12860 = G__12877;
count__12841_12861 = G__12878;
i__12842_12862 = G__12879;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_12858);
} else {
cljs.compiler.emitln.call(null,then_12858);
}

cljs.compiler.emitln.call(null,"break;");


var G__12880 = seq__12821_12849;
var G__12881 = chunk__12822_12850;
var G__12882 = count__12823_12851;
var G__12883 = (i__12824_12852 + (1));
seq__12821_12849 = G__12880;
chunk__12822_12850 = G__12881;
count__12823_12851 = G__12882;
i__12824_12852 = G__12883;
continue;
} else {
var temp__5804__auto___12884 = cljs.core.seq.call(null,seq__12821_12849);
if(temp__5804__auto___12884){
var seq__12821_12885__$1 = temp__5804__auto___12884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12821_12885__$1)){
var c__5565__auto___12886 = cljs.core.chunk_first.call(null,seq__12821_12885__$1);
var G__12887 = cljs.core.chunk_rest.call(null,seq__12821_12885__$1);
var G__12888 = c__5565__auto___12886;
var G__12889 = cljs.core.count.call(null,c__5565__auto___12886);
var G__12890 = (0);
seq__12821_12849 = G__12887;
chunk__12822_12850 = G__12888;
count__12823_12851 = G__12889;
i__12824_12852 = G__12890;
continue;
} else {
var map__12843_12891 = cljs.core.first.call(null,seq__12821_12885__$1);
var map__12843_12892__$1 = cljs.core.__destructure_map.call(null,map__12843_12891);
var ts_12893 = cljs.core.get.call(null,map__12843_12892__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__12844_12894 = cljs.core.get.call(null,map__12843_12892__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__12844_12895__$1 = cljs.core.__destructure_map.call(null,map__12844_12894);
var then_12896 = cljs.core.get.call(null,map__12844_12895__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__12845_12897 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_12893));
var chunk__12846_12898 = null;
var count__12847_12899 = (0);
var i__12848_12900 = (0);
while(true){
if((i__12848_12900 < count__12847_12899)){
var test_12901 = cljs.core._nth.call(null,chunk__12846_12898,i__12848_12900);
cljs.compiler.emitln.call(null,"case ",test_12901,":");


var G__12902 = seq__12845_12897;
var G__12903 = chunk__12846_12898;
var G__12904 = count__12847_12899;
var G__12905 = (i__12848_12900 + (1));
seq__12845_12897 = G__12902;
chunk__12846_12898 = G__12903;
count__12847_12899 = G__12904;
i__12848_12900 = G__12905;
continue;
} else {
var temp__5804__auto___12906__$1 = cljs.core.seq.call(null,seq__12845_12897);
if(temp__5804__auto___12906__$1){
var seq__12845_12907__$1 = temp__5804__auto___12906__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12845_12907__$1)){
var c__5565__auto___12908 = cljs.core.chunk_first.call(null,seq__12845_12907__$1);
var G__12909 = cljs.core.chunk_rest.call(null,seq__12845_12907__$1);
var G__12910 = c__5565__auto___12908;
var G__12911 = cljs.core.count.call(null,c__5565__auto___12908);
var G__12912 = (0);
seq__12845_12897 = G__12909;
chunk__12846_12898 = G__12910;
count__12847_12899 = G__12911;
i__12848_12900 = G__12912;
continue;
} else {
var test_12913 = cljs.core.first.call(null,seq__12845_12907__$1);
cljs.compiler.emitln.call(null,"case ",test_12913,":");


var G__12914 = cljs.core.next.call(null,seq__12845_12907__$1);
var G__12915 = null;
var G__12916 = (0);
var G__12917 = (0);
seq__12845_12897 = G__12914;
chunk__12846_12898 = G__12915;
count__12847_12899 = G__12916;
i__12848_12900 = G__12917;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_12896);
} else {
cljs.compiler.emitln.call(null,then_12896);
}

cljs.compiler.emitln.call(null,"break;");


var G__12918 = cljs.core.next.call(null,seq__12821_12885__$1);
var G__12919 = null;
var G__12920 = (0);
var G__12921 = (0);
seq__12821_12849 = G__12918;
chunk__12822_12850 = G__12919;
count__12823_12851 = G__12920;
i__12824_12852 = G__12921;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__12922){
var map__12923 = p__12922;
var map__12923__$1 = cljs.core.__destructure_map.call(null,map__12923);
var throw$ = cljs.core.get.call(null,map__12923__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__12923__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__12925 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__12925,(0),null);
var rstr = cljs.core.nth.call(null,vec__12925,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__12924_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__12924_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__12928 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__12928,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__12928;
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
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__12929_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__12929_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__12930 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__12931 = cljs.core.seq.call(null,vec__12930);
var first__12932 = cljs.core.first.call(null,seq__12931);
var seq__12931__$1 = cljs.core.next.call(null,seq__12931);
var p = first__12932;
var first__12932__$1 = cljs.core.first.call(null,seq__12931__$1);
var seq__12931__$2 = cljs.core.next.call(null,seq__12931__$1);
var ts = first__12932__$1;
var first__12932__$2 = cljs.core.first.call(null,seq__12931__$2);
var seq__12931__$3 = cljs.core.next.call(null,seq__12931__$2);
var n = first__12932__$2;
var xs = seq__12931__$3;
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
var vec__12933 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__12934 = cljs.core.seq.call(null,vec__12933);
var first__12935 = cljs.core.first.call(null,seq__12934);
var seq__12934__$1 = cljs.core.next.call(null,seq__12934);
var p = first__12935;
var first__12935__$1 = cljs.core.first.call(null,seq__12934__$1);
var seq__12934__$2 = cljs.core.next.call(null,seq__12934__$1);
var ts = first__12935__$1;
var xs = seq__12934__$2;
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
var G__12938 = arguments.length;
switch (G__12938) {
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
var vec__12946 = cljs.core.map.call(null,(function (p1__12936_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__12936_SHARP_);
} else {
return p1__12936_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__12947 = cljs.core.seq.call(null,vec__12946);
var first__12948 = cljs.core.first.call(null,seq__12947);
var seq__12947__$1 = cljs.core.next.call(null,seq__12947);
var x = first__12948;
var ys = seq__12947__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__12949 = cljs.core.seq.call(null,ys);
var chunk__12950 = null;
var count__12951 = (0);
var i__12952 = (0);
while(true){
if((i__12952 < count__12951)){
var next_line = cljs.core._nth.call(null,chunk__12950,i__12952);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__12958 = seq__12949;
var G__12959 = chunk__12950;
var G__12960 = count__12951;
var G__12961 = (i__12952 + (1));
seq__12949 = G__12958;
chunk__12950 = G__12959;
count__12951 = G__12960;
i__12952 = G__12961;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12949);
if(temp__5804__auto__){
var seq__12949__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12949__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__12949__$1);
var G__12962 = cljs.core.chunk_rest.call(null,seq__12949__$1);
var G__12963 = c__5565__auto__;
var G__12964 = cljs.core.count.call(null,c__5565__auto__);
var G__12965 = (0);
seq__12949 = G__12962;
chunk__12950 = G__12963;
count__12951 = G__12964;
i__12952 = G__12965;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__12949__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__12966 = cljs.core.next.call(null,seq__12949__$1);
var G__12967 = null;
var G__12968 = (0);
var G__12969 = (0);
seq__12949 = G__12966;
chunk__12950 = G__12967;
count__12951 = G__12968;
i__12952 = G__12969;
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

var seq__12953_12970 = cljs.core.seq.call(null,docs__$2);
var chunk__12954_12971 = null;
var count__12955_12972 = (0);
var i__12956_12973 = (0);
while(true){
if((i__12956_12973 < count__12955_12972)){
var e_12974 = cljs.core._nth.call(null,chunk__12954_12971,i__12956_12973);
if(cljs.core.truth_(e_12974)){
print_comment_lines.call(null,e_12974);
} else {
}


var G__12975 = seq__12953_12970;
var G__12976 = chunk__12954_12971;
var G__12977 = count__12955_12972;
var G__12978 = (i__12956_12973 + (1));
seq__12953_12970 = G__12975;
chunk__12954_12971 = G__12976;
count__12955_12972 = G__12977;
i__12956_12973 = G__12978;
continue;
} else {
var temp__5804__auto___12979 = cljs.core.seq.call(null,seq__12953_12970);
if(temp__5804__auto___12979){
var seq__12953_12980__$1 = temp__5804__auto___12979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12953_12980__$1)){
var c__5565__auto___12981 = cljs.core.chunk_first.call(null,seq__12953_12980__$1);
var G__12982 = cljs.core.chunk_rest.call(null,seq__12953_12980__$1);
var G__12983 = c__5565__auto___12981;
var G__12984 = cljs.core.count.call(null,c__5565__auto___12981);
var G__12985 = (0);
seq__12953_12970 = G__12982;
chunk__12954_12971 = G__12983;
count__12955_12972 = G__12984;
i__12956_12973 = G__12985;
continue;
} else {
var e_12986 = cljs.core.first.call(null,seq__12953_12980__$1);
if(cljs.core.truth_(e_12986)){
print_comment_lines.call(null,e_12986);
} else {
}


var G__12987 = cljs.core.next.call(null,seq__12953_12980__$1);
var G__12988 = null;
var G__12989 = (0);
var G__12990 = (0);
seq__12953_12970 = G__12987;
chunk__12954_12971 = G__12988;
count__12955_12972 = G__12989;
i__12956_12973 = G__12990;
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
var and__5041__auto__ = cljs.core.some.call(null,(function (p1__12992_SHARP_){
return goog.string.startsWith(p1__12992_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__12993){
var map__12994 = p__12993;
var map__12994__$1 = cljs.core.__destructure_map.call(null,map__12994);
var doc = cljs.core.get.call(null,map__12994__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__12994__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__12994__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__12994__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__12994__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__12994__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__12994__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__12994__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__12994__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__12994__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__12995){
var map__12996 = p__12995;
var map__12996__$1 = cljs.core.__destructure_map.call(null,map__12996);
var name = cljs.core.get.call(null,map__12996__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__12996__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__12996__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__12997_13021 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__12998_13022 = null;
var count__12999_13023 = (0);
var i__13000_13024 = (0);
while(true){
if((i__13000_13024 < count__12999_13023)){
var vec__13007_13025 = cljs.core._nth.call(null,chunk__12998_13022,i__13000_13024);
var i_13026 = cljs.core.nth.call(null,vec__13007_13025,(0),null);
var param_13027 = cljs.core.nth.call(null,vec__13007_13025,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_13027);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__13028 = seq__12997_13021;
var G__13029 = chunk__12998_13022;
var G__13030 = count__12999_13023;
var G__13031 = (i__13000_13024 + (1));
seq__12997_13021 = G__13028;
chunk__12998_13022 = G__13029;
count__12999_13023 = G__13030;
i__13000_13024 = G__13031;
continue;
} else {
var temp__5804__auto___13032 = cljs.core.seq.call(null,seq__12997_13021);
if(temp__5804__auto___13032){
var seq__12997_13033__$1 = temp__5804__auto___13032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12997_13033__$1)){
var c__5565__auto___13034 = cljs.core.chunk_first.call(null,seq__12997_13033__$1);
var G__13035 = cljs.core.chunk_rest.call(null,seq__12997_13033__$1);
var G__13036 = c__5565__auto___13034;
var G__13037 = cljs.core.count.call(null,c__5565__auto___13034);
var G__13038 = (0);
seq__12997_13021 = G__13035;
chunk__12998_13022 = G__13036;
count__12999_13023 = G__13037;
i__13000_13024 = G__13038;
continue;
} else {
var vec__13010_13039 = cljs.core.first.call(null,seq__12997_13033__$1);
var i_13040 = cljs.core.nth.call(null,vec__13010_13039,(0),null);
var param_13041 = cljs.core.nth.call(null,vec__13010_13039,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_13041);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__13042 = cljs.core.next.call(null,seq__12997_13033__$1);
var G__13043 = null;
var G__13044 = (0);
var G__13045 = (0);
seq__12997_13021 = G__13042;
chunk__12998_13022 = G__13043;
count__12999_13023 = G__13044;
i__13000_13024 = G__13045;
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

var seq__13013_13046 = cljs.core.seq.call(null,params);
var chunk__13014_13047 = null;
var count__13015_13048 = (0);
var i__13016_13049 = (0);
while(true){
if((i__13016_13049 < count__13015_13048)){
var param_13050 = cljs.core._nth.call(null,chunk__13014_13047,i__13016_13049);
cljs.compiler.emit.call(null,param_13050);

if(cljs.core._EQ_.call(null,param_13050,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__13051 = seq__13013_13046;
var G__13052 = chunk__13014_13047;
var G__13053 = count__13015_13048;
var G__13054 = (i__13016_13049 + (1));
seq__13013_13046 = G__13051;
chunk__13014_13047 = G__13052;
count__13015_13048 = G__13053;
i__13016_13049 = G__13054;
continue;
} else {
var temp__5804__auto___13055 = cljs.core.seq.call(null,seq__13013_13046);
if(temp__5804__auto___13055){
var seq__13013_13056__$1 = temp__5804__auto___13055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13013_13056__$1)){
var c__5565__auto___13057 = cljs.core.chunk_first.call(null,seq__13013_13056__$1);
var G__13058 = cljs.core.chunk_rest.call(null,seq__13013_13056__$1);
var G__13059 = c__5565__auto___13057;
var G__13060 = cljs.core.count.call(null,c__5565__auto___13057);
var G__13061 = (0);
seq__13013_13046 = G__13058;
chunk__13014_13047 = G__13059;
count__13015_13048 = G__13060;
i__13016_13049 = G__13061;
continue;
} else {
var param_13062 = cljs.core.first.call(null,seq__13013_13056__$1);
cljs.compiler.emit.call(null,param_13062);

if(cljs.core._EQ_.call(null,param_13062,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__13063 = cljs.core.next.call(null,seq__13013_13056__$1);
var G__13064 = null;
var G__13065 = (0);
var G__13066 = (0);
seq__13013_13046 = G__13063;
chunk__13014_13047 = G__13064;
count__13015_13048 = G__13065;
i__13016_13049 = G__13066;
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

var seq__13017_13067 = cljs.core.seq.call(null,params);
var chunk__13018_13068 = null;
var count__13019_13069 = (0);
var i__13020_13070 = (0);
while(true){
if((i__13020_13070 < count__13019_13069)){
var param_13071 = cljs.core._nth.call(null,chunk__13018_13068,i__13020_13070);
cljs.compiler.emit.call(null,param_13071);

if(cljs.core._EQ_.call(null,param_13071,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__13072 = seq__13017_13067;
var G__13073 = chunk__13018_13068;
var G__13074 = count__13019_13069;
var G__13075 = (i__13020_13070 + (1));
seq__13017_13067 = G__13072;
chunk__13018_13068 = G__13073;
count__13019_13069 = G__13074;
i__13020_13070 = G__13075;
continue;
} else {
var temp__5804__auto___13076 = cljs.core.seq.call(null,seq__13017_13067);
if(temp__5804__auto___13076){
var seq__13017_13077__$1 = temp__5804__auto___13076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13017_13077__$1)){
var c__5565__auto___13078 = cljs.core.chunk_first.call(null,seq__13017_13077__$1);
var G__13079 = cljs.core.chunk_rest.call(null,seq__13017_13077__$1);
var G__13080 = c__5565__auto___13078;
var G__13081 = cljs.core.count.call(null,c__5565__auto___13078);
var G__13082 = (0);
seq__13017_13067 = G__13079;
chunk__13018_13068 = G__13080;
count__13019_13069 = G__13081;
i__13020_13070 = G__13082;
continue;
} else {
var param_13083 = cljs.core.first.call(null,seq__13017_13077__$1);
cljs.compiler.emit.call(null,param_13083);

if(cljs.core._EQ_.call(null,param_13083,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__13084 = cljs.core.next.call(null,seq__13017_13077__$1);
var G__13085 = null;
var G__13086 = (0);
var G__13087 = (0);
seq__13017_13067 = G__13084;
chunk__13018_13068 = G__13085;
count__13019_13069 = G__13086;
i__13020_13070 = G__13087;
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
var seq__13088 = cljs.core.seq.call(null,params);
var chunk__13089 = null;
var count__13090 = (0);
var i__13091 = (0);
while(true){
if((i__13091 < count__13090)){
var param = cljs.core._nth.call(null,chunk__13089,i__13091);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__13092 = seq__13088;
var G__13093 = chunk__13089;
var G__13094 = count__13090;
var G__13095 = (i__13091 + (1));
seq__13088 = G__13092;
chunk__13089 = G__13093;
count__13090 = G__13094;
i__13091 = G__13095;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__13088);
if(temp__5804__auto__){
var seq__13088__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13088__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__13088__$1);
var G__13096 = cljs.core.chunk_rest.call(null,seq__13088__$1);
var G__13097 = c__5565__auto__;
var G__13098 = cljs.core.count.call(null,c__5565__auto__);
var G__13099 = (0);
seq__13088 = G__13096;
chunk__13089 = G__13097;
count__13090 = G__13098;
i__13091 = G__13099;
continue;
} else {
var param = cljs.core.first.call(null,seq__13088__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__13100 = cljs.core.next.call(null,seq__13088__$1);
var G__13101 = null;
var G__13102 = (0);
var G__13103 = (0);
seq__13088 = G__13100;
chunk__13089 = G__13101;
count__13090 = G__13102;
i__13091 = G__13103;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__13104){
var map__13105 = p__13104;
var map__13105__$1 = cljs.core.__destructure_map.call(null,map__13105);
var expr = cljs.core.get.call(null,map__13105__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__13105__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__13105__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__13105__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__13105__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__13105__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__13106){
var map__13107 = p__13106;
var map__13107__$1 = cljs.core.__destructure_map.call(null,map__13107);
var f = map__13107__$1;
var expr = cljs.core.get.call(null,map__13107__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__13107__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__13107__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__13107__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__13107__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__13107__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__13107__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__13107__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__9253__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_13116__$1 = (function (){var or__5043__auto__ = name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_13117 = cljs.compiler.munge.call(null,name_13116__$1);
var delegate_name_13118 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_13117),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_13118," = function (");

var seq__13108_13119 = cljs.core.seq.call(null,params);
var chunk__13109_13120 = null;
var count__13110_13121 = (0);
var i__13111_13122 = (0);
while(true){
if((i__13111_13122 < count__13110_13121)){
var param_13123 = cljs.core._nth.call(null,chunk__13109_13120,i__13111_13122);
cljs.compiler.emit.call(null,param_13123);

if(cljs.core._EQ_.call(null,param_13123,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__13124 = seq__13108_13119;
var G__13125 = chunk__13109_13120;
var G__13126 = count__13110_13121;
var G__13127 = (i__13111_13122 + (1));
seq__13108_13119 = G__13124;
chunk__13109_13120 = G__13125;
count__13110_13121 = G__13126;
i__13111_13122 = G__13127;
continue;
} else {
var temp__5804__auto___13128 = cljs.core.seq.call(null,seq__13108_13119);
if(temp__5804__auto___13128){
var seq__13108_13129__$1 = temp__5804__auto___13128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13108_13129__$1)){
var c__5565__auto___13130 = cljs.core.chunk_first.call(null,seq__13108_13129__$1);
var G__13131 = cljs.core.chunk_rest.call(null,seq__13108_13129__$1);
var G__13132 = c__5565__auto___13130;
var G__13133 = cljs.core.count.call(null,c__5565__auto___13130);
var G__13134 = (0);
seq__13108_13119 = G__13131;
chunk__13109_13120 = G__13132;
count__13110_13121 = G__13133;
i__13111_13122 = G__13134;
continue;
} else {
var param_13135 = cljs.core.first.call(null,seq__13108_13129__$1);
cljs.compiler.emit.call(null,param_13135);

if(cljs.core._EQ_.call(null,param_13135,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__13136 = cljs.core.next.call(null,seq__13108_13129__$1);
var G__13137 = null;
var G__13138 = (0);
var G__13139 = (0);
seq__13108_13119 = G__13136;
chunk__13109_13120 = G__13137;
count__13110_13121 = G__13138;
i__13111_13122 = G__13139;
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

cljs.compiler.emitln.call(null,"var ",mname_13117," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_13140 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_13140,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_13118,".call(this,");

var seq__13112_13141 = cljs.core.seq.call(null,params);
var chunk__13113_13142 = null;
var count__13114_13143 = (0);
var i__13115_13144 = (0);
while(true){
if((i__13115_13144 < count__13114_13143)){
var param_13145 = cljs.core._nth.call(null,chunk__13113_13142,i__13115_13144);
cljs.compiler.emit.call(null,param_13145);

if(cljs.core._EQ_.call(null,param_13145,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__13146 = seq__13112_13141;
var G__13147 = chunk__13113_13142;
var G__13148 = count__13114_13143;
var G__13149 = (i__13115_13144 + (1));
seq__13112_13141 = G__13146;
chunk__13113_13142 = G__13147;
count__13114_13143 = G__13148;
i__13115_13144 = G__13149;
continue;
} else {
var temp__5804__auto___13150 = cljs.core.seq.call(null,seq__13112_13141);
if(temp__5804__auto___13150){
var seq__13112_13151__$1 = temp__5804__auto___13150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13112_13151__$1)){
var c__5565__auto___13152 = cljs.core.chunk_first.call(null,seq__13112_13151__$1);
var G__13153 = cljs.core.chunk_rest.call(null,seq__13112_13151__$1);
var G__13154 = c__5565__auto___13152;
var G__13155 = cljs.core.count.call(null,c__5565__auto___13152);
var G__13156 = (0);
seq__13112_13141 = G__13153;
chunk__13113_13142 = G__13154;
count__13114_13143 = G__13155;
i__13115_13144 = G__13156;
continue;
} else {
var param_13157 = cljs.core.first.call(null,seq__13112_13151__$1);
cljs.compiler.emit.call(null,param_13157);

if(cljs.core._EQ_.call(null,param_13157,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__13158 = cljs.core.next.call(null,seq__13112_13151__$1);
var G__13159 = null;
var G__13160 = (0);
var G__13161 = (0);
seq__13112_13141 = G__13158;
chunk__13113_13142 = G__13159;
count__13114_13143 = G__13160;
i__13115_13144 = G__13161;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_13117,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_13117,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_13116__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_13117,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_13118,";");

cljs.compiler.emitln.call(null,"return ",mname_13117,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__9253__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__13165){
var map__13166 = p__13165;
var map__13166__$1 = cljs.core.__destructure_map.call(null,map__13166);
var variadic = cljs.core.get.call(null,map__13166__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__13166__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__13166__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__13166__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__13166__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__13166__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__13166__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__13166__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__13162_SHARP_){
var and__5041__auto__ = p1__13162_SHARP_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__13162_SHARP_));
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
var name_13218__$1 = (function (){var or__5043__auto__ = name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_13219 = cljs.compiler.munge.call(null,name_13218__$1);
var maxparams_13220 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_13221 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_13219),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_13222 = cljs.core.sort_by.call(null,(function (p1__13163_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__13163_SHARP_)));
}),cljs.core.seq.call(null,mmap_13221));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_13219," = null;");

var seq__13167_13223 = cljs.core.seq.call(null,ms_13222);
var chunk__13168_13224 = null;
var count__13169_13225 = (0);
var i__13170_13226 = (0);
while(true){
if((i__13170_13226 < count__13169_13225)){
var vec__13177_13227 = cljs.core._nth.call(null,chunk__13168_13224,i__13170_13226);
var n_13228 = cljs.core.nth.call(null,vec__13177_13227,(0),null);
var meth_13229 = cljs.core.nth.call(null,vec__13177_13227,(1),null);
cljs.compiler.emits.call(null,"var ",n_13228," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13229))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_13229);
} else {
cljs.compiler.emit_fn_method.call(null,meth_13229);
}

cljs.compiler.emitln.call(null,";");


var G__13230 = seq__13167_13223;
var G__13231 = chunk__13168_13224;
var G__13232 = count__13169_13225;
var G__13233 = (i__13170_13226 + (1));
seq__13167_13223 = G__13230;
chunk__13168_13224 = G__13231;
count__13169_13225 = G__13232;
i__13170_13226 = G__13233;
continue;
} else {
var temp__5804__auto___13234 = cljs.core.seq.call(null,seq__13167_13223);
if(temp__5804__auto___13234){
var seq__13167_13235__$1 = temp__5804__auto___13234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13167_13235__$1)){
var c__5565__auto___13236 = cljs.core.chunk_first.call(null,seq__13167_13235__$1);
var G__13237 = cljs.core.chunk_rest.call(null,seq__13167_13235__$1);
var G__13238 = c__5565__auto___13236;
var G__13239 = cljs.core.count.call(null,c__5565__auto___13236);
var G__13240 = (0);
seq__13167_13223 = G__13237;
chunk__13168_13224 = G__13238;
count__13169_13225 = G__13239;
i__13170_13226 = G__13240;
continue;
} else {
var vec__13180_13241 = cljs.core.first.call(null,seq__13167_13235__$1);
var n_13242 = cljs.core.nth.call(null,vec__13180_13241,(0),null);
var meth_13243 = cljs.core.nth.call(null,vec__13180_13241,(1),null);
cljs.compiler.emits.call(null,"var ",n_13242," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13243))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_13243);
} else {
cljs.compiler.emit_fn_method.call(null,meth_13243);
}

cljs.compiler.emitln.call(null,";");


var G__13244 = cljs.core.next.call(null,seq__13167_13235__$1);
var G__13245 = null;
var G__13246 = (0);
var G__13247 = (0);
seq__13167_13223 = G__13244;
chunk__13168_13224 = G__13245;
count__13169_13225 = G__13246;
i__13170_13226 = G__13247;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_13219," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_13220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_13220)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_13220));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__13183_13248 = cljs.core.seq.call(null,ms_13222);
var chunk__13184_13249 = null;
var count__13185_13250 = (0);
var i__13186_13251 = (0);
while(true){
if((i__13186_13251 < count__13185_13250)){
var vec__13193_13252 = cljs.core._nth.call(null,chunk__13184_13249,i__13186_13251);
var n_13253 = cljs.core.nth.call(null,vec__13193_13252,(0),null);
var meth_13254 = cljs.core.nth.call(null,vec__13193_13252,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13254))){
cljs.compiler.emitln.call(null,"default:");

var restarg_13255 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_13255," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_13256 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_13255," = new cljs.core.IndexedSeq(",a_13256,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_13253,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_13220)),(((cljs.core.count.call(null,maxparams_13220) > (1)))?", ":null),restarg_13255,");");
} else {
var pcnt_13257 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13254));
cljs.compiler.emitln.call(null,"case ",pcnt_13257,":");

cljs.compiler.emitln.call(null,"return ",n_13253,".call(this",(((pcnt_13257 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_13257,maxparams_13220)),null,(1),null)),(2),null))),");");
}


var G__13258 = seq__13183_13248;
var G__13259 = chunk__13184_13249;
var G__13260 = count__13185_13250;
var G__13261 = (i__13186_13251 + (1));
seq__13183_13248 = G__13258;
chunk__13184_13249 = G__13259;
count__13185_13250 = G__13260;
i__13186_13251 = G__13261;
continue;
} else {
var temp__5804__auto___13262 = cljs.core.seq.call(null,seq__13183_13248);
if(temp__5804__auto___13262){
var seq__13183_13263__$1 = temp__5804__auto___13262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13183_13263__$1)){
var c__5565__auto___13264 = cljs.core.chunk_first.call(null,seq__13183_13263__$1);
var G__13265 = cljs.core.chunk_rest.call(null,seq__13183_13263__$1);
var G__13266 = c__5565__auto___13264;
var G__13267 = cljs.core.count.call(null,c__5565__auto___13264);
var G__13268 = (0);
seq__13183_13248 = G__13265;
chunk__13184_13249 = G__13266;
count__13185_13250 = G__13267;
i__13186_13251 = G__13268;
continue;
} else {
var vec__13196_13269 = cljs.core.first.call(null,seq__13183_13263__$1);
var n_13270 = cljs.core.nth.call(null,vec__13196_13269,(0),null);
var meth_13271 = cljs.core.nth.call(null,vec__13196_13269,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13271))){
cljs.compiler.emitln.call(null,"default:");

var restarg_13272 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_13272," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_13273 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_13272," = new cljs.core.IndexedSeq(",a_13273,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_13270,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_13220)),(((cljs.core.count.call(null,maxparams_13220) > (1)))?", ":null),restarg_13272,");");
} else {
var pcnt_13274 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13271));
cljs.compiler.emitln.call(null,"case ",pcnt_13274,":");

cljs.compiler.emitln.call(null,"return ",n_13270,".call(this",(((pcnt_13274 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_13274,maxparams_13220)),null,(1),null)),(2),null))),");");
}


var G__13275 = cljs.core.next.call(null,seq__13183_13263__$1);
var G__13276 = null;
var G__13277 = (0);
var G__13278 = (0);
seq__13183_13248 = G__13275;
chunk__13184_13249 = G__13276;
count__13185_13250 = G__13277;
i__13186_13251 = G__13278;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_13279 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_13222)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_13279,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_13219,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_13219,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__13164_SHARP_){
var vec__13199 = p1__13164_SHARP_;
var n = cljs.core.nth.call(null,vec__13199,(0),null);
var m = cljs.core.nth.call(null,vec__13199,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_13222),".cljs$lang$applyTo;");
} else {
}

var seq__13202_13280 = cljs.core.seq.call(null,ms_13222);
var chunk__13203_13281 = null;
var count__13204_13282 = (0);
var i__13205_13283 = (0);
while(true){
if((i__13205_13283 < count__13204_13282)){
var vec__13212_13284 = cljs.core._nth.call(null,chunk__13203_13281,i__13205_13283);
var n_13285 = cljs.core.nth.call(null,vec__13212_13284,(0),null);
var meth_13286 = cljs.core.nth.call(null,vec__13212_13284,(1),null);
var c_13287 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13286));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13286))){
cljs.compiler.emitln.call(null,mname_13219,".cljs$core$IFn$_invoke$arity$variadic = ",n_13285,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_13219,".cljs$core$IFn$_invoke$arity$",c_13287," = ",n_13285,";");
}


var G__13288 = seq__13202_13280;
var G__13289 = chunk__13203_13281;
var G__13290 = count__13204_13282;
var G__13291 = (i__13205_13283 + (1));
seq__13202_13280 = G__13288;
chunk__13203_13281 = G__13289;
count__13204_13282 = G__13290;
i__13205_13283 = G__13291;
continue;
} else {
var temp__5804__auto___13292 = cljs.core.seq.call(null,seq__13202_13280);
if(temp__5804__auto___13292){
var seq__13202_13293__$1 = temp__5804__auto___13292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13202_13293__$1)){
var c__5565__auto___13294 = cljs.core.chunk_first.call(null,seq__13202_13293__$1);
var G__13295 = cljs.core.chunk_rest.call(null,seq__13202_13293__$1);
var G__13296 = c__5565__auto___13294;
var G__13297 = cljs.core.count.call(null,c__5565__auto___13294);
var G__13298 = (0);
seq__13202_13280 = G__13295;
chunk__13203_13281 = G__13296;
count__13204_13282 = G__13297;
i__13205_13283 = G__13298;
continue;
} else {
var vec__13215_13299 = cljs.core.first.call(null,seq__13202_13293__$1);
var n_13300 = cljs.core.nth.call(null,vec__13215_13299,(0),null);
var meth_13301 = cljs.core.nth.call(null,vec__13215_13299,(1),null);
var c_13302 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13301));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_13301))){
cljs.compiler.emitln.call(null,mname_13219,".cljs$core$IFn$_invoke$arity$variadic = ",n_13300,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_13219,".cljs$core$IFn$_invoke$arity$",c_13302," = ",n_13300,";");
}


var G__13303 = cljs.core.next.call(null,seq__13202_13293__$1);
var G__13304 = null;
var G__13305 = (0);
var G__13306 = (0);
seq__13202_13280 = G__13303;
chunk__13203_13281 = G__13304;
count__13204_13282 = G__13305;
i__13205_13283 = G__13306;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_13219,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__13307){
var map__13308 = p__13307;
var map__13308__$1 = cljs.core.__destructure_map.call(null,map__13308);
var statements = cljs.core.get.call(null,map__13308__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__13308__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__13308__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__13309_13313 = cljs.core.seq.call(null,statements);
var chunk__13310_13314 = null;
var count__13311_13315 = (0);
var i__13312_13316 = (0);
while(true){
if((i__13312_13316 < count__13311_13315)){
var s_13317 = cljs.core._nth.call(null,chunk__13310_13314,i__13312_13316);
cljs.compiler.emitln.call(null,s_13317);


var G__13318 = seq__13309_13313;
var G__13319 = chunk__13310_13314;
var G__13320 = count__13311_13315;
var G__13321 = (i__13312_13316 + (1));
seq__13309_13313 = G__13318;
chunk__13310_13314 = G__13319;
count__13311_13315 = G__13320;
i__13312_13316 = G__13321;
continue;
} else {
var temp__5804__auto___13322 = cljs.core.seq.call(null,seq__13309_13313);
if(temp__5804__auto___13322){
var seq__13309_13323__$1 = temp__5804__auto___13322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13309_13323__$1)){
var c__5565__auto___13324 = cljs.core.chunk_first.call(null,seq__13309_13323__$1);
var G__13325 = cljs.core.chunk_rest.call(null,seq__13309_13323__$1);
var G__13326 = c__5565__auto___13324;
var G__13327 = cljs.core.count.call(null,c__5565__auto___13324);
var G__13328 = (0);
seq__13309_13313 = G__13325;
chunk__13310_13314 = G__13326;
count__13311_13315 = G__13327;
i__13312_13316 = G__13328;
continue;
} else {
var s_13329 = cljs.core.first.call(null,seq__13309_13323__$1);
cljs.compiler.emitln.call(null,s_13329);


var G__13330 = cljs.core.next.call(null,seq__13309_13323__$1);
var G__13331 = null;
var G__13332 = (0);
var G__13333 = (0);
seq__13309_13313 = G__13330;
chunk__13310_13314 = G__13331;
count__13311_13315 = G__13332;
i__13312_13316 = G__13333;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__13334){
var map__13335 = p__13334;
var map__13335__$1 = cljs.core.__destructure_map.call(null,map__13335);
var try$ = cljs.core.get.call(null,map__13335__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__13335__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__13335__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__13335__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__13335__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__13336,is_loop){
var map__13337 = p__13336;
var map__13337__$1 = cljs.core.__destructure_map.call(null,map__13337);
var expr = cljs.core.get.call(null,map__13337__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__13337__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__13337__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__13338_13348 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__13339_13349 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__13339_13349);

try{var seq__13340_13350 = cljs.core.seq.call(null,bindings);
var chunk__13341_13351 = null;
var count__13342_13352 = (0);
var i__13343_13353 = (0);
while(true){
if((i__13343_13353 < count__13342_13352)){
var map__13346_13354 = cljs.core._nth.call(null,chunk__13341_13351,i__13343_13353);
var map__13346_13355__$1 = cljs.core.__destructure_map.call(null,map__13346_13354);
var binding_13356 = map__13346_13355__$1;
var init_13357 = cljs.core.get.call(null,map__13346_13355__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_13356);

cljs.compiler.emitln.call(null," = ",init_13357,";");


var G__13358 = seq__13340_13350;
var G__13359 = chunk__13341_13351;
var G__13360 = count__13342_13352;
var G__13361 = (i__13343_13353 + (1));
seq__13340_13350 = G__13358;
chunk__13341_13351 = G__13359;
count__13342_13352 = G__13360;
i__13343_13353 = G__13361;
continue;
} else {
var temp__5804__auto___13362 = cljs.core.seq.call(null,seq__13340_13350);
if(temp__5804__auto___13362){
var seq__13340_13363__$1 = temp__5804__auto___13362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13340_13363__$1)){
var c__5565__auto___13364 = cljs.core.chunk_first.call(null,seq__13340_13363__$1);
var G__13365 = cljs.core.chunk_rest.call(null,seq__13340_13363__$1);
var G__13366 = c__5565__auto___13364;
var G__13367 = cljs.core.count.call(null,c__5565__auto___13364);
var G__13368 = (0);
seq__13340_13350 = G__13365;
chunk__13341_13351 = G__13366;
count__13342_13352 = G__13367;
i__13343_13353 = G__13368;
continue;
} else {
var map__13347_13369 = cljs.core.first.call(null,seq__13340_13363__$1);
var map__13347_13370__$1 = cljs.core.__destructure_map.call(null,map__13347_13369);
var binding_13371 = map__13347_13370__$1;
var init_13372 = cljs.core.get.call(null,map__13347_13370__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_13371);

cljs.compiler.emitln.call(null," = ",init_13372,";");


var G__13373 = cljs.core.next.call(null,seq__13340_13363__$1);
var G__13374 = null;
var G__13375 = (0);
var G__13376 = (0);
seq__13340_13350 = G__13373;
chunk__13341_13351 = G__13374;
count__13342_13352 = G__13375;
i__13343_13353 = G__13376;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__13338_13348);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__13377){
var map__13378 = p__13377;
var map__13378__$1 = cljs.core.__destructure_map.call(null,map__13378);
var frame = cljs.core.get.call(null,map__13378__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__13378__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__13378__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5633__auto___13379 = cljs.core.count.call(null,exprs);
var i_13380 = (0);
while(true){
if((i_13380 < n__5633__auto___13379)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_13380)," = ",exprs.call(null,i_13380),";");

var G__13381 = (i_13380 + (1));
i_13380 = G__13381;
continue;
} else {
}
break;
}

var n__5633__auto___13382 = cljs.core.count.call(null,exprs);
var i_13383 = (0);
while(true){
if((i_13383 < n__5633__auto___13382)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_13383))," = ",temps.call(null,i_13383),";");

var G__13384 = (i_13383 + (1));
i_13383 = G__13384;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__13385){
var map__13386 = p__13385;
var map__13386__$1 = cljs.core.__destructure_map.call(null,map__13386);
var expr = cljs.core.get.call(null,map__13386__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__13386__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__13386__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__13387_13395 = cljs.core.seq.call(null,bindings);
var chunk__13388_13396 = null;
var count__13389_13397 = (0);
var i__13390_13398 = (0);
while(true){
if((i__13390_13398 < count__13389_13397)){
var map__13393_13399 = cljs.core._nth.call(null,chunk__13388_13396,i__13390_13398);
var map__13393_13400__$1 = cljs.core.__destructure_map.call(null,map__13393_13399);
var binding_13401 = map__13393_13400__$1;
var init_13402 = cljs.core.get.call(null,map__13393_13400__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_13401)," = ",init_13402,";");


var G__13403 = seq__13387_13395;
var G__13404 = chunk__13388_13396;
var G__13405 = count__13389_13397;
var G__13406 = (i__13390_13398 + (1));
seq__13387_13395 = G__13403;
chunk__13388_13396 = G__13404;
count__13389_13397 = G__13405;
i__13390_13398 = G__13406;
continue;
} else {
var temp__5804__auto___13407 = cljs.core.seq.call(null,seq__13387_13395);
if(temp__5804__auto___13407){
var seq__13387_13408__$1 = temp__5804__auto___13407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13387_13408__$1)){
var c__5565__auto___13409 = cljs.core.chunk_first.call(null,seq__13387_13408__$1);
var G__13410 = cljs.core.chunk_rest.call(null,seq__13387_13408__$1);
var G__13411 = c__5565__auto___13409;
var G__13412 = cljs.core.count.call(null,c__5565__auto___13409);
var G__13413 = (0);
seq__13387_13395 = G__13410;
chunk__13388_13396 = G__13411;
count__13389_13397 = G__13412;
i__13390_13398 = G__13413;
continue;
} else {
var map__13394_13414 = cljs.core.first.call(null,seq__13387_13408__$1);
var map__13394_13415__$1 = cljs.core.__destructure_map.call(null,map__13394_13414);
var binding_13416 = map__13394_13415__$1;
var init_13417 = cljs.core.get.call(null,map__13394_13415__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_13416)," = ",init_13417,";");


var G__13418 = cljs.core.next.call(null,seq__13387_13408__$1);
var G__13419 = null;
var G__13420 = (0);
var G__13421 = (0);
seq__13387_13395 = G__13418;
chunk__13388_13396 = G__13419;
count__13389_13397 = G__13420;
i__13390_13398 = G__13421;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__13424){
var map__13425 = p__13424;
var map__13425__$1 = cljs.core.__destructure_map.call(null,map__13425);
var expr = map__13425__$1;
var f = cljs.core.get.call(null,map__13425__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__13425__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13425__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__13426 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__13422_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__13422_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__13423_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__13423_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__13426,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__13426,(1),null);
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
var pimpl_13429 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_13429,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_13430 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_13430,args)),(((mfa_13430 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_13430,args)),"], 0))");
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
var fprop_13431 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_13431," ? ",f__$1,fprop_13431,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_13431," ? ",f__$1,fprop_13431,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__13432){
var map__13433 = p__13432;
var map__13433__$1 = cljs.core.__destructure_map.call(null,map__13433);
var ctor = cljs.core.get.call(null,map__13433__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__13433__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13433__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__13434){
var map__13435 = p__13434;
var map__13435__$1 = cljs.core.__destructure_map.call(null,map__13435);
var target = cljs.core.get.call(null,map__13435__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__13435__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__13435__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__13436_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13436_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__13437 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__13437,(0),null);
var sublib = cljs.core.nth.call(null,vec__13437,(1),null);
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
var map__13440 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__13440__$1 = cljs.core.__destructure_map.call(null,map__13440);
var options = cljs.core.get.call(null,map__13440__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__13440__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__13441 = options;
var map__13441__$1 = cljs.core.__destructure_map.call(null,map__13441);
var target = cljs.core.get.call(null,map__13441__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__13441__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__13441__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__13442 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__13448 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__13448__$1 = cljs.core.__destructure_map.call(null,map__13448);
var node_libs = cljs.core.get.call(null,map__13448__$1,true);
var libs_to_load = cljs.core.get.call(null,map__13448__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__13442,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__13442,(1),null);
var vec__13445 = (function (){var map__13449 = cljs.core.group_by.call(null,cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__13449__$1 = cljs.core.__destructure_map.call(null,map__13449);
var goog_modules = cljs.core.get.call(null,map__13449__$1,true);
var libs_to_load__$1 = cljs.core.get.call(null,map__13449__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.call(null,vec__13445,(0),null);
var libs_to_load__$1 = cljs.core.nth.call(null,vec__13445,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__13450_13494 = cljs.core.seq.call(null,libs_to_load__$1);
var chunk__13451_13495 = null;
var count__13452_13496 = (0);
var i__13453_13497 = (0);
while(true){
if((i__13453_13497 < count__13452_13496)){
var lib_13498 = cljs.core._nth.call(null,chunk__13451_13495,i__13453_13497);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_13498)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13498),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13498),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13498),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13498),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_13498,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13498),"');");
}

}
}
}


var G__13499 = seq__13450_13494;
var G__13500 = chunk__13451_13495;
var G__13501 = count__13452_13496;
var G__13502 = (i__13453_13497 + (1));
seq__13450_13494 = G__13499;
chunk__13451_13495 = G__13500;
count__13452_13496 = G__13501;
i__13453_13497 = G__13502;
continue;
} else {
var temp__5804__auto___13503 = cljs.core.seq.call(null,seq__13450_13494);
if(temp__5804__auto___13503){
var seq__13450_13504__$1 = temp__5804__auto___13503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13450_13504__$1)){
var c__5565__auto___13505 = cljs.core.chunk_first.call(null,seq__13450_13504__$1);
var G__13506 = cljs.core.chunk_rest.call(null,seq__13450_13504__$1);
var G__13507 = c__5565__auto___13505;
var G__13508 = cljs.core.count.call(null,c__5565__auto___13505);
var G__13509 = (0);
seq__13450_13494 = G__13506;
chunk__13451_13495 = G__13507;
count__13452_13496 = G__13508;
i__13453_13497 = G__13509;
continue;
} else {
var lib_13510 = cljs.core.first.call(null,seq__13450_13504__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_13510)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13510),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13510),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13510),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13510),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_13510,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13510),"');");
}

}
}
}


var G__13511 = cljs.core.next.call(null,seq__13450_13504__$1);
var G__13512 = null;
var G__13513 = (0);
var G__13514 = (0);
seq__13450_13494 = G__13511;
chunk__13451_13495 = G__13512;
count__13452_13496 = G__13513;
i__13453_13497 = G__13514;
continue;
}
} else {
}
}
break;
}

var seq__13454_13515 = cljs.core.seq.call(null,node_libs);
var chunk__13455_13516 = null;
var count__13456_13517 = (0);
var i__13457_13518 = (0);
while(true){
if((i__13457_13518 < count__13456_13517)){
var lib_13519 = cljs.core._nth.call(null,chunk__13455_13516,i__13457_13518);
var vec__13464_13520 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_13519);
var lib_SINGLEQUOTE__13521 = cljs.core.nth.call(null,vec__13464_13520,(0),null);
var sublib_13522 = cljs.core.nth.call(null,vec__13464_13520,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_13519)," = require('",lib_SINGLEQUOTE__13521,"')",cljs.compiler.sublib_select.call(null,sublib_13522),";");


var G__13523 = seq__13454_13515;
var G__13524 = chunk__13455_13516;
var G__13525 = count__13456_13517;
var G__13526 = (i__13457_13518 + (1));
seq__13454_13515 = G__13523;
chunk__13455_13516 = G__13524;
count__13456_13517 = G__13525;
i__13457_13518 = G__13526;
continue;
} else {
var temp__5804__auto___13527 = cljs.core.seq.call(null,seq__13454_13515);
if(temp__5804__auto___13527){
var seq__13454_13528__$1 = temp__5804__auto___13527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13454_13528__$1)){
var c__5565__auto___13529 = cljs.core.chunk_first.call(null,seq__13454_13528__$1);
var G__13530 = cljs.core.chunk_rest.call(null,seq__13454_13528__$1);
var G__13531 = c__5565__auto___13529;
var G__13532 = cljs.core.count.call(null,c__5565__auto___13529);
var G__13533 = (0);
seq__13454_13515 = G__13530;
chunk__13455_13516 = G__13531;
count__13456_13517 = G__13532;
i__13457_13518 = G__13533;
continue;
} else {
var lib_13534 = cljs.core.first.call(null,seq__13454_13528__$1);
var vec__13467_13535 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_13534);
var lib_SINGLEQUOTE__13536 = cljs.core.nth.call(null,vec__13467_13535,(0),null);
var sublib_13537 = cljs.core.nth.call(null,vec__13467_13535,(1),null);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_13534)," = require('",lib_SINGLEQUOTE__13536,"')",cljs.compiler.sublib_select.call(null,sublib_13537),";");


var G__13538 = cljs.core.next.call(null,seq__13454_13528__$1);
var G__13539 = null;
var G__13540 = (0);
var G__13541 = (0);
seq__13454_13515 = G__13538;
chunk__13455_13516 = G__13539;
count__13456_13517 = G__13540;
i__13457_13518 = G__13541;
continue;
}
} else {
}
}
break;
}

var seq__13470_13542 = cljs.core.seq.call(null,goog_modules);
var chunk__13471_13543 = null;
var count__13472_13544 = (0);
var i__13473_13545 = (0);
while(true){
if((i__13473_13545 < count__13472_13544)){
var lib_13546 = cljs.core._nth.call(null,chunk__13471_13543,i__13473_13545);
var vec__13480_13547 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_13546);
var lib_SINGLEQUOTE__13548 = cljs.core.nth.call(null,vec__13480_13547,(0),null);
var sublib_13549 = cljs.core.nth.call(null,vec__13480_13547,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__13548,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_13546)," = goog.module.get('",lib_SINGLEQUOTE__13548,"')",cljs.compiler.sublib_select.call(null,sublib_13549),";");

cljs.compiler.emitln.call(null,"});");


var G__13550 = seq__13470_13542;
var G__13551 = chunk__13471_13543;
var G__13552 = count__13472_13544;
var G__13553 = (i__13473_13545 + (1));
seq__13470_13542 = G__13550;
chunk__13471_13543 = G__13551;
count__13472_13544 = G__13552;
i__13473_13545 = G__13553;
continue;
} else {
var temp__5804__auto___13554 = cljs.core.seq.call(null,seq__13470_13542);
if(temp__5804__auto___13554){
var seq__13470_13555__$1 = temp__5804__auto___13554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13470_13555__$1)){
var c__5565__auto___13556 = cljs.core.chunk_first.call(null,seq__13470_13555__$1);
var G__13557 = cljs.core.chunk_rest.call(null,seq__13470_13555__$1);
var G__13558 = c__5565__auto___13556;
var G__13559 = cljs.core.count.call(null,c__5565__auto___13556);
var G__13560 = (0);
seq__13470_13542 = G__13557;
chunk__13471_13543 = G__13558;
count__13472_13544 = G__13559;
i__13473_13545 = G__13560;
continue;
} else {
var lib_13561 = cljs.core.first.call(null,seq__13470_13555__$1);
var vec__13483_13562 = cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_13561);
var lib_SINGLEQUOTE__13563 = cljs.core.nth.call(null,vec__13483_13562,(0),null);
var sublib_13564 = cljs.core.nth.call(null,vec__13483_13562,(1),null);
cljs.compiler.emitln.call(null,"goog.require('",lib_SINGLEQUOTE__13563,"');");

cljs.compiler.emitln.call(null,"goog.scope(function(){");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_goog_module_lib.call(null,lib_13561)," = goog.module.get('",lib_SINGLEQUOTE__13563,"')",cljs.compiler.sublib_select.call(null,sublib_13564),";");

cljs.compiler.emitln.call(null,"});");


var G__13565 = cljs.core.next.call(null,seq__13470_13555__$1);
var G__13566 = null;
var G__13567 = (0);
var G__13568 = (0);
seq__13470_13542 = G__13565;
chunk__13471_13543 = G__13566;
count__13472_13544 = G__13567;
i__13473_13545 = G__13568;
continue;
}
} else {
}
}
break;
}

var seq__13486_13569 = cljs.core.seq.call(null,global_exports_libs);
var chunk__13487_13570 = null;
var count__13488_13571 = (0);
var i__13489_13572 = (0);
while(true){
if((i__13489_13572 < count__13488_13571)){
var lib_13573 = cljs.core._nth.call(null,chunk__13487_13570,i__13489_13572);
var map__13492_13574 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_13573))));
var map__13492_13575__$1 = cljs.core.__destructure_map.call(null,map__13492_13574);
var global_exports_13576 = cljs.core.get.call(null,map__13492_13575__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_13576,lib_13573);


var G__13577 = seq__13486_13569;
var G__13578 = chunk__13487_13570;
var G__13579 = count__13488_13571;
var G__13580 = (i__13489_13572 + (1));
seq__13486_13569 = G__13577;
chunk__13487_13570 = G__13578;
count__13488_13571 = G__13579;
i__13489_13572 = G__13580;
continue;
} else {
var temp__5804__auto___13581 = cljs.core.seq.call(null,seq__13486_13569);
if(temp__5804__auto___13581){
var seq__13486_13582__$1 = temp__5804__auto___13581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13486_13582__$1)){
var c__5565__auto___13583 = cljs.core.chunk_first.call(null,seq__13486_13582__$1);
var G__13584 = cljs.core.chunk_rest.call(null,seq__13486_13582__$1);
var G__13585 = c__5565__auto___13583;
var G__13586 = cljs.core.count.call(null,c__5565__auto___13583);
var G__13587 = (0);
seq__13486_13569 = G__13584;
chunk__13487_13570 = G__13585;
count__13488_13571 = G__13586;
i__13489_13572 = G__13587;
continue;
} else {
var lib_13588 = cljs.core.first.call(null,seq__13486_13582__$1);
var map__13493_13589 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,cljs.core.first.call(null,cljs.analyzer.lib_AMPERSAND_sublib.call(null,lib_13588))));
var map__13493_13590__$1 = cljs.core.__destructure_map.call(null,map__13493_13589);
var global_exports_13591 = cljs.core.get.call(null,map__13493_13590__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_13591,lib_13588);


var G__13592 = cljs.core.next.call(null,seq__13486_13582__$1);
var G__13593 = null;
var G__13594 = (0);
var G__13595 = (0);
seq__13486_13569 = G__13592;
chunk__13487_13570 = G__13593;
count__13488_13571 = G__13594;
i__13489_13572 = G__13595;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__13596){
var map__13597 = p__13596;
var map__13597__$1 = cljs.core.__destructure_map.call(null,map__13597);
var name = cljs.core.get.call(null,map__13597__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__13597__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__13597__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__13597__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__13597__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__13597__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__13597__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__13598){
var map__13599 = p__13598;
var map__13599__$1 = cljs.core.__destructure_map.call(null,map__13599);
var name = cljs.core.get.call(null,map__13599__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__13599__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__13599__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__13599__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__13599__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__13599__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__13599__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__13600){
var map__13601 = p__13600;
var map__13601__$1 = cljs.core.__destructure_map.call(null,map__13601);
var t = cljs.core.get.call(null,map__13601__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__13601__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__13601__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__13601__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__13601__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__13602_13626 = cljs.core.seq.call(null,protocols);
var chunk__13603_13627 = null;
var count__13604_13628 = (0);
var i__13605_13629 = (0);
while(true){
if((i__13605_13629 < count__13604_13628)){
var protocol_13630 = cljs.core._nth.call(null,chunk__13603_13627,i__13605_13629);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13630)),"}");


var G__13631 = seq__13602_13626;
var G__13632 = chunk__13603_13627;
var G__13633 = count__13604_13628;
var G__13634 = (i__13605_13629 + (1));
seq__13602_13626 = G__13631;
chunk__13603_13627 = G__13632;
count__13604_13628 = G__13633;
i__13605_13629 = G__13634;
continue;
} else {
var temp__5804__auto___13635 = cljs.core.seq.call(null,seq__13602_13626);
if(temp__5804__auto___13635){
var seq__13602_13636__$1 = temp__5804__auto___13635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13602_13636__$1)){
var c__5565__auto___13637 = cljs.core.chunk_first.call(null,seq__13602_13636__$1);
var G__13638 = cljs.core.chunk_rest.call(null,seq__13602_13636__$1);
var G__13639 = c__5565__auto___13637;
var G__13640 = cljs.core.count.call(null,c__5565__auto___13637);
var G__13641 = (0);
seq__13602_13626 = G__13638;
chunk__13603_13627 = G__13639;
count__13604_13628 = G__13640;
i__13605_13629 = G__13641;
continue;
} else {
var protocol_13642 = cljs.core.first.call(null,seq__13602_13636__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13642)),"}");


var G__13643 = cljs.core.next.call(null,seq__13602_13636__$1);
var G__13644 = null;
var G__13645 = (0);
var G__13646 = (0);
seq__13602_13626 = G__13643;
chunk__13603_13627 = G__13644;
count__13604_13628 = G__13645;
i__13605_13629 = G__13646;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__13606_13647 = cljs.core.seq.call(null,fields__$1);
var chunk__13607_13648 = null;
var count__13608_13649 = (0);
var i__13609_13650 = (0);
while(true){
if((i__13609_13650 < count__13608_13649)){
var fld_13651 = cljs.core._nth.call(null,chunk__13607_13648,i__13609_13650);
cljs.compiler.emitln.call(null,"this.",fld_13651," = ",fld_13651,";");


var G__13652 = seq__13606_13647;
var G__13653 = chunk__13607_13648;
var G__13654 = count__13608_13649;
var G__13655 = (i__13609_13650 + (1));
seq__13606_13647 = G__13652;
chunk__13607_13648 = G__13653;
count__13608_13649 = G__13654;
i__13609_13650 = G__13655;
continue;
} else {
var temp__5804__auto___13656 = cljs.core.seq.call(null,seq__13606_13647);
if(temp__5804__auto___13656){
var seq__13606_13657__$1 = temp__5804__auto___13656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13606_13657__$1)){
var c__5565__auto___13658 = cljs.core.chunk_first.call(null,seq__13606_13657__$1);
var G__13659 = cljs.core.chunk_rest.call(null,seq__13606_13657__$1);
var G__13660 = c__5565__auto___13658;
var G__13661 = cljs.core.count.call(null,c__5565__auto___13658);
var G__13662 = (0);
seq__13606_13647 = G__13659;
chunk__13607_13648 = G__13660;
count__13608_13649 = G__13661;
i__13609_13650 = G__13662;
continue;
} else {
var fld_13663 = cljs.core.first.call(null,seq__13606_13657__$1);
cljs.compiler.emitln.call(null,"this.",fld_13663," = ",fld_13663,";");


var G__13664 = cljs.core.next.call(null,seq__13606_13657__$1);
var G__13665 = null;
var G__13666 = (0);
var G__13667 = (0);
seq__13606_13647 = G__13664;
chunk__13607_13648 = G__13665;
count__13608_13649 = G__13666;
i__13609_13650 = G__13667;
continue;
}
} else {
}
}
break;
}

var seq__13610_13668 = cljs.core.seq.call(null,pmasks);
var chunk__13611_13669 = null;
var count__13612_13670 = (0);
var i__13613_13671 = (0);
while(true){
if((i__13613_13671 < count__13612_13670)){
var vec__13620_13672 = cljs.core._nth.call(null,chunk__13611_13669,i__13613_13671);
var pno_13673 = cljs.core.nth.call(null,vec__13620_13672,(0),null);
var pmask_13674 = cljs.core.nth.call(null,vec__13620_13672,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13673,"$ = ",pmask_13674,";");


var G__13675 = seq__13610_13668;
var G__13676 = chunk__13611_13669;
var G__13677 = count__13612_13670;
var G__13678 = (i__13613_13671 + (1));
seq__13610_13668 = G__13675;
chunk__13611_13669 = G__13676;
count__13612_13670 = G__13677;
i__13613_13671 = G__13678;
continue;
} else {
var temp__5804__auto___13679 = cljs.core.seq.call(null,seq__13610_13668);
if(temp__5804__auto___13679){
var seq__13610_13680__$1 = temp__5804__auto___13679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13610_13680__$1)){
var c__5565__auto___13681 = cljs.core.chunk_first.call(null,seq__13610_13680__$1);
var G__13682 = cljs.core.chunk_rest.call(null,seq__13610_13680__$1);
var G__13683 = c__5565__auto___13681;
var G__13684 = cljs.core.count.call(null,c__5565__auto___13681);
var G__13685 = (0);
seq__13610_13668 = G__13682;
chunk__13611_13669 = G__13683;
count__13612_13670 = G__13684;
i__13613_13671 = G__13685;
continue;
} else {
var vec__13623_13686 = cljs.core.first.call(null,seq__13610_13680__$1);
var pno_13687 = cljs.core.nth.call(null,vec__13623_13686,(0),null);
var pmask_13688 = cljs.core.nth.call(null,vec__13623_13686,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13687,"$ = ",pmask_13688,";");


var G__13689 = cljs.core.next.call(null,seq__13610_13680__$1);
var G__13690 = null;
var G__13691 = (0);
var G__13692 = (0);
seq__13610_13668 = G__13689;
chunk__13611_13669 = G__13690;
count__13612_13670 = G__13691;
i__13613_13671 = G__13692;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__13693){
var map__13694 = p__13693;
var map__13694__$1 = cljs.core.__destructure_map.call(null,map__13694);
var t = cljs.core.get.call(null,map__13694__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__13694__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__13694__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__13694__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__13694__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__13695_13719 = cljs.core.seq.call(null,protocols);
var chunk__13696_13720 = null;
var count__13697_13721 = (0);
var i__13698_13722 = (0);
while(true){
if((i__13698_13722 < count__13697_13721)){
var protocol_13723 = cljs.core._nth.call(null,chunk__13696_13720,i__13698_13722);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13723)),"}");


var G__13724 = seq__13695_13719;
var G__13725 = chunk__13696_13720;
var G__13726 = count__13697_13721;
var G__13727 = (i__13698_13722 + (1));
seq__13695_13719 = G__13724;
chunk__13696_13720 = G__13725;
count__13697_13721 = G__13726;
i__13698_13722 = G__13727;
continue;
} else {
var temp__5804__auto___13728 = cljs.core.seq.call(null,seq__13695_13719);
if(temp__5804__auto___13728){
var seq__13695_13729__$1 = temp__5804__auto___13728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13695_13729__$1)){
var c__5565__auto___13730 = cljs.core.chunk_first.call(null,seq__13695_13729__$1);
var G__13731 = cljs.core.chunk_rest.call(null,seq__13695_13729__$1);
var G__13732 = c__5565__auto___13730;
var G__13733 = cljs.core.count.call(null,c__5565__auto___13730);
var G__13734 = (0);
seq__13695_13719 = G__13731;
chunk__13696_13720 = G__13732;
count__13697_13721 = G__13733;
i__13698_13722 = G__13734;
continue;
} else {
var protocol_13735 = cljs.core.first.call(null,seq__13695_13729__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_13735)),"}");


var G__13736 = cljs.core.next.call(null,seq__13695_13729__$1);
var G__13737 = null;
var G__13738 = (0);
var G__13739 = (0);
seq__13695_13719 = G__13736;
chunk__13696_13720 = G__13737;
count__13697_13721 = G__13738;
i__13698_13722 = G__13739;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__13699_13740 = cljs.core.seq.call(null,fields__$1);
var chunk__13700_13741 = null;
var count__13701_13742 = (0);
var i__13702_13743 = (0);
while(true){
if((i__13702_13743 < count__13701_13742)){
var fld_13744 = cljs.core._nth.call(null,chunk__13700_13741,i__13702_13743);
cljs.compiler.emitln.call(null,"this.",fld_13744," = ",fld_13744,";");


var G__13745 = seq__13699_13740;
var G__13746 = chunk__13700_13741;
var G__13747 = count__13701_13742;
var G__13748 = (i__13702_13743 + (1));
seq__13699_13740 = G__13745;
chunk__13700_13741 = G__13746;
count__13701_13742 = G__13747;
i__13702_13743 = G__13748;
continue;
} else {
var temp__5804__auto___13749 = cljs.core.seq.call(null,seq__13699_13740);
if(temp__5804__auto___13749){
var seq__13699_13750__$1 = temp__5804__auto___13749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13699_13750__$1)){
var c__5565__auto___13751 = cljs.core.chunk_first.call(null,seq__13699_13750__$1);
var G__13752 = cljs.core.chunk_rest.call(null,seq__13699_13750__$1);
var G__13753 = c__5565__auto___13751;
var G__13754 = cljs.core.count.call(null,c__5565__auto___13751);
var G__13755 = (0);
seq__13699_13740 = G__13752;
chunk__13700_13741 = G__13753;
count__13701_13742 = G__13754;
i__13702_13743 = G__13755;
continue;
} else {
var fld_13756 = cljs.core.first.call(null,seq__13699_13750__$1);
cljs.compiler.emitln.call(null,"this.",fld_13756," = ",fld_13756,";");


var G__13757 = cljs.core.next.call(null,seq__13699_13750__$1);
var G__13758 = null;
var G__13759 = (0);
var G__13760 = (0);
seq__13699_13740 = G__13757;
chunk__13700_13741 = G__13758;
count__13701_13742 = G__13759;
i__13702_13743 = G__13760;
continue;
}
} else {
}
}
break;
}

var seq__13703_13761 = cljs.core.seq.call(null,pmasks);
var chunk__13704_13762 = null;
var count__13705_13763 = (0);
var i__13706_13764 = (0);
while(true){
if((i__13706_13764 < count__13705_13763)){
var vec__13713_13765 = cljs.core._nth.call(null,chunk__13704_13762,i__13706_13764);
var pno_13766 = cljs.core.nth.call(null,vec__13713_13765,(0),null);
var pmask_13767 = cljs.core.nth.call(null,vec__13713_13765,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13766,"$ = ",pmask_13767,";");


var G__13768 = seq__13703_13761;
var G__13769 = chunk__13704_13762;
var G__13770 = count__13705_13763;
var G__13771 = (i__13706_13764 + (1));
seq__13703_13761 = G__13768;
chunk__13704_13762 = G__13769;
count__13705_13763 = G__13770;
i__13706_13764 = G__13771;
continue;
} else {
var temp__5804__auto___13772 = cljs.core.seq.call(null,seq__13703_13761);
if(temp__5804__auto___13772){
var seq__13703_13773__$1 = temp__5804__auto___13772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13703_13773__$1)){
var c__5565__auto___13774 = cljs.core.chunk_first.call(null,seq__13703_13773__$1);
var G__13775 = cljs.core.chunk_rest.call(null,seq__13703_13773__$1);
var G__13776 = c__5565__auto___13774;
var G__13777 = cljs.core.count.call(null,c__5565__auto___13774);
var G__13778 = (0);
seq__13703_13761 = G__13775;
chunk__13704_13762 = G__13776;
count__13705_13763 = G__13777;
i__13706_13764 = G__13778;
continue;
} else {
var vec__13716_13779 = cljs.core.first.call(null,seq__13703_13773__$1);
var pno_13780 = cljs.core.nth.call(null,vec__13716_13779,(0),null);
var pmask_13781 = cljs.core.nth.call(null,vec__13716_13779,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13780,"$ = ",pmask_13781,";");


var G__13782 = cljs.core.next.call(null,seq__13703_13773__$1);
var G__13783 = null;
var G__13784 = (0);
var G__13785 = (0);
seq__13703_13761 = G__13782;
chunk__13704_13762 = G__13783;
count__13705_13763 = G__13784;
i__13706_13764 = G__13785;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__13786){
var map__13787 = p__13786;
var map__13787__$1 = cljs.core.__destructure_map.call(null,map__13787);
var target = cljs.core.get.call(null,map__13787__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__13787__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__13787__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__13787__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13787__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__13788){
var map__13789 = p__13788;
var map__13789__$1 = cljs.core.__destructure_map.call(null,map__13789);
var op = cljs.core.get.call(null,map__13789__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__13789__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__13789__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__13789__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__13789__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__13794 = cljs.core.seq.call(null,table);
var chunk__13795 = null;
var count__13796 = (0);
var i__13797 = (0);
while(true){
if((i__13797 < count__13796)){
var vec__13804 = cljs.core._nth.call(null,chunk__13795,i__13797);
var sym = cljs.core.nth.call(null,vec__13804,(0),null);
var value = cljs.core.nth.call(null,vec__13804,(1),null);
var ns_13810 = cljs.core.namespace.call(null,sym);
var name_13811 = cljs.core.name.call(null,sym);
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


var G__13812 = seq__13794;
var G__13813 = chunk__13795;
var G__13814 = count__13796;
var G__13815 = (i__13797 + (1));
seq__13794 = G__13812;
chunk__13795 = G__13813;
count__13796 = G__13814;
i__13797 = G__13815;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__13794);
if(temp__5804__auto__){
var seq__13794__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13794__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__13794__$1);
var G__13816 = cljs.core.chunk_rest.call(null,seq__13794__$1);
var G__13817 = c__5565__auto__;
var G__13818 = cljs.core.count.call(null,c__5565__auto__);
var G__13819 = (0);
seq__13794 = G__13816;
chunk__13795 = G__13817;
count__13796 = G__13818;
i__13797 = G__13819;
continue;
} else {
var vec__13807 = cljs.core.first.call(null,seq__13794__$1);
var sym = cljs.core.nth.call(null,vec__13807,(0),null);
var value = cljs.core.nth.call(null,vec__13807,(1),null);
var ns_13820 = cljs.core.namespace.call(null,sym);
var name_13821 = cljs.core.name.call(null,sym);
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


var G__13822 = cljs.core.next.call(null,seq__13794__$1);
var G__13823 = null;
var G__13824 = (0);
var G__13825 = (0);
seq__13794 = G__13822;
chunk__13795 = G__13823;
count__13796 = G__13824;
i__13797 = G__13825;
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
var G__13827 = arguments.length;
switch (G__13827) {
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
var k_13832 = cljs.core.first.call(null,ks);
var vec__13828_13833 = cljs.core.conj.call(null,prefix,k_13832);
var top_13834 = cljs.core.nth.call(null,vec__13828_13833,(0),null);
var prefix_SINGLEQUOTE__13835 = vec__13828_13833;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_13832)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__13835) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_13834)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_13834)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__13835)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_13834);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__13835)),";");
}
} else {
}

var m_13836 = cljs.core.get.call(null,externs,k_13832);
if(cljs.core.empty_QMARK_.call(null,m_13836)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__13835,m_13836,top_level,known_externs);
}

var G__13837 = cljs.core.next.call(null,ks);
ks = G__13837;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=compiler.js.map

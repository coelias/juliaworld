// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
goog.require('goog.object');
goog.scope(function(){
figwheel.core.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__34998_SHARP_){
var k = f.call(null,p1__34998_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__34999){
var vec__35000 = p__34999;
var k = cljs.core.nth.call(null,vec__35000,(0),null);
var v = cljs.core.nth.call(null,vec__35000,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__5772__auto__ = [];
var len__5766__auto___35004 = arguments.length;
var i__5767__auto___35005 = (0);
while(true){
if((i__5767__auto___35005 < len__5766__auto___35004)){
args__5772__auto__.push((arguments[i__5767__auto___35005]));

var G__35006 = (i__5767__auto___35005 + (1));
i__5767__auto___35005 = G__35006;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq35003){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35003));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__35009){
var map__35010 = p__35009;
var map__35010__$1 = cljs.core.__destructure_map.call(null,map__35010);
var message = cljs.core.get.call(null,map__35010__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__35010__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__35008_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35008_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__35007_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__35007_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__35012){
var map__35013 = p__35012;
var map__35013__$1 = cljs.core.__destructure_map.call(null,map__35013);
var message_data = map__35013__$1;
var message = cljs.core.get.call(null,map__35013__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__35013__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35013__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__35013__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__35014 = file_excerpt;
var map__35014__$1 = cljs.core.__destructure_map.call(null,map__35014);
var start_line = cljs.core.get.call(null,map__35014__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__35014__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__35014__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__35015 = cljs.core.split_with.call(null,(function (p1__35011_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__35011_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__35015,(0),null);
var end = cljs.core.nth.call(null,vec__35015,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__35018){
var map__35019 = p__35018;
var map__35019__$1 = cljs.core.__destructure_map.call(null,map__35019);
var file = cljs.core.get.call(null,map__35019__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35019__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35019__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35020 = "";
var G__35020__$1 = (cljs.core.truth_(file)?[G__35020,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35020);
var G__35020__$2 = (cljs.core.truth_(line)?[G__35020__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35020__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = line;
if(cljs.core.truth_(and__5041__auto__)){
return column;
} else {
return and__5041__auto__;
}
})())){
return [G__35020__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35020__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger.call(null,"Figwheel");
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.glog_error = (function figwheel$core$glog_error(log,msg){
return goog.log.error.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance"))){
} else {
var c_35078 = (new goog.debug.Console());
var G__35027_35079 = c_35078.getFormatter();
figwheel.core.goog$module$goog$object.set.call(null,G__35027_35079,"showAbsoluteTime",false);

figwheel.core.goog$module$goog$object.set.call(null,G__35027_35079,"showRelativeTime",false);


figwheel.core.goog$module$goog$object.set.call(null,goog.debug.Console,"instance",c_35078);

}

var temp__5804__auto__ = figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5804__auto__)){
var console_instance = temp__5804__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__35028 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
figwheel.core.goog$module$goog$object.add.call(null,G__35028,"data",(function (){var or__5043__auto__ = data;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__35028;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return figwheel.core.goog$module$goog$object.get.call(null,(function (){var temp__5802__auto__ = e.event_;
if(cljs.core.truth_(temp__5802__auto__)){
var e__$1 = temp__5802__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__5041__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__5041__auto__)){
return (!((goog.global.document == null)));
} else {
return and__5041__auto__;
}
});

var last_reload_timestamp_35080 = cljs.core.atom.call(null,(0));
var promise_chain_35081 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5802__auto__ = (function (){var temp__5804__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var ts = temp__5804__auto__;
var and__5041__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_35080) < ts);
if(and__5041__auto__){
return ts;
} else {
return and__5041__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var ts = temp__5802__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_35080,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_35081.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__35029 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__35030 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__35030);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__35031 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__35032 = null;
var count__35033 = (0);
var i__35034 = (0);
while(true){
if((i__35034 < count__35033)){
var w = cljs.core._nth.call(null,chunk__35032,i__35034);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__35082 = seq__35031;
var G__35083 = chunk__35032;
var G__35084 = count__35033;
var G__35085 = (i__35034 + (1));
seq__35031 = G__35082;
chunk__35032 = G__35083;
count__35033 = G__35084;
i__35034 = G__35085;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__35031);
if(temp__5804__auto__){
var seq__35031__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35031__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__35031__$1);
var G__35086 = cljs.core.chunk_rest.call(null,seq__35031__$1);
var G__35087 = c__5565__auto__;
var G__35088 = cljs.core.count.call(null,c__5565__auto__);
var G__35089 = (0);
seq__35031 = G__35086;
chunk__35032 = G__35087;
count__35033 = G__35088;
i__35034 = G__35089;
continue;
} else {
var w = cljs.core.first.call(null,seq__35031__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__35090 = cljs.core.next.call(null,seq__35031__$1);
var G__35091 = null;
var G__35092 = (0);
var G__35093 = (0);
seq__35031 = G__35090;
chunk__35032 = G__35091;
count__35033 = G__35092;
i__35034 = G__35093;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__35029);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_35081.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__35035 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__35036 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__35036);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__35035);
}}));
} else {
return promise_chain_35081.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__5043__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.core.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__5041__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__5041__auto____$1){
var or__5043__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__5772__auto__ = [];
var len__5766__auto___35094 = arguments.length;
var i__5767__auto___35095 = (0);
while(true){
if((i__5767__auto___35095 < len__5766__auto___35094)){
args__5772__auto__.push((arguments[i__5767__auto___35095]));

var G__35096 = (i__5767__auto___35095 + (1));
i__5767__auto___35095 = G__35096;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__35039){
var vec__35040 = p__35039;
var n = cljs.core.nth.call(null,vec__35040,(0),null);
var mdata = cljs.core.nth.call(null,vec__35040,(1),null);
var temp__5804__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__35043 = cljs.core.seq.call(null,hooks);
var chunk__35044 = null;
var count__35045 = (0);
var i__35046 = (0);
while(true){
if((i__35046 < count__35045)){
var vec__35055 = cljs.core._nth.call(null,chunk__35044,i__35046);
var n = cljs.core.nth.call(null,vec__35055,(0),null);
var f = cljs.core.nth.call(null,vec__35055,(1),null);
var temp__5802__auto___35097 = cljs.core.reduce.call(null,((function (seq__35043,chunk__35044,count__35045,i__35046,vec__35055,n,f,hooks){
return (function (p1__35021_SHARP_,p2__35022_SHARP_){
if(cljs.core.truth_(p1__35021_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__35021_SHARP_,p2__35022_SHARP_);
} else {
return null;
}
});})(seq__35043,chunk__35044,count__35045,i__35046,vec__35055,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5802__auto___35097)){
var hook_35098 = temp__5802__auto___35097;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_35098,args);
}catch (e35058){if((e35058 instanceof Error)){
var e_35099 = e35058;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_35099);
} else {
throw e35058;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__35100 = seq__35043;
var G__35101 = chunk__35044;
var G__35102 = count__35045;
var G__35103 = (i__35046 + (1));
seq__35043 = G__35100;
chunk__35044 = G__35101;
count__35045 = G__35102;
i__35046 = G__35103;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__35043);
if(temp__5804__auto__){
var seq__35043__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35043__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__35043__$1);
var G__35104 = cljs.core.chunk_rest.call(null,seq__35043__$1);
var G__35105 = c__5565__auto__;
var G__35106 = cljs.core.count.call(null,c__5565__auto__);
var G__35107 = (0);
seq__35043 = G__35104;
chunk__35044 = G__35105;
count__35045 = G__35106;
i__35046 = G__35107;
continue;
} else {
var vec__35059 = cljs.core.first.call(null,seq__35043__$1);
var n = cljs.core.nth.call(null,vec__35059,(0),null);
var f = cljs.core.nth.call(null,vec__35059,(1),null);
var temp__5802__auto___35108 = cljs.core.reduce.call(null,((function (seq__35043,chunk__35044,count__35045,i__35046,vec__35059,n,f,seq__35043__$1,temp__5804__auto__,hooks){
return (function (p1__35021_SHARP_,p2__35022_SHARP_){
if(cljs.core.truth_(p1__35021_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__35021_SHARP_,p2__35022_SHARP_);
} else {
return null;
}
});})(seq__35043,chunk__35044,count__35045,i__35046,vec__35059,n,f,seq__35043__$1,temp__5804__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5802__auto___35108)){
var hook_35109 = temp__5802__auto___35108;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_35109,args);
}catch (e35062){if((e35062 instanceof Error)){
var e_35110 = e35062;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_35110);
} else {
throw e35062;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__35111 = cljs.core.next.call(null,seq__35043__$1);
var G__35112 = null;
var G__35113 = (0);
var G__35114 = (0);
seq__35043 = G__35111;
chunk__35044 = G__35112;
count__35045 = G__35113;
i__35046 = G__35114;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq35037){
var G__35038 = cljs.core.first.call(null,seq35037);
var seq35037__$1 = cljs.core.next.call(null,seq35037);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35038,seq35037__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__35063){
var vec__35064 = p__35063;
var k = cljs.core.nth.call(null,vec__35064,(0),null);
var v = cljs.core.nth.call(null,vec__35064,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__35023_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__35023_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__35023_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__35024_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__35024_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not.call(null,figwheel.core.load_warninged_code);
if(and__5041__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__5041__auto__;
}
})())?null:cljs.core.filter.call(null,(function (p1__35025_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__35025_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__35067_35115 = cljs.core.seq.call(null,to_reload);
var chunk__35068_35116 = null;
var count__35069_35117 = (0);
var i__35070_35118 = (0);
while(true){
if((i__35070_35118 < count__35069_35117)){
var ns_35119 = cljs.core._nth.call(null,chunk__35068_35116,i__35070_35118);
goog.require(cljs.core.name.call(null,ns_35119),true);


var G__35120 = seq__35067_35115;
var G__35121 = chunk__35068_35116;
var G__35122 = count__35069_35117;
var G__35123 = (i__35070_35118 + (1));
seq__35067_35115 = G__35120;
chunk__35068_35116 = G__35121;
count__35069_35117 = G__35122;
i__35070_35118 = G__35123;
continue;
} else {
var temp__5804__auto___35124 = cljs.core.seq.call(null,seq__35067_35115);
if(temp__5804__auto___35124){
var seq__35067_35125__$1 = temp__5804__auto___35124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35067_35125__$1)){
var c__5565__auto___35126 = cljs.core.chunk_first.call(null,seq__35067_35125__$1);
var G__35127 = cljs.core.chunk_rest.call(null,seq__35067_35125__$1);
var G__35128 = c__5565__auto___35126;
var G__35129 = cljs.core.count.call(null,c__5565__auto___35126);
var G__35130 = (0);
seq__35067_35115 = G__35127;
chunk__35068_35116 = G__35128;
count__35069_35117 = G__35129;
i__35070_35118 = G__35130;
continue;
} else {
var ns_35131 = cljs.core.first.call(null,seq__35067_35125__$1);
goog.require(cljs.core.name.call(null,ns_35131),true);


var G__35132 = cljs.core.next.call(null,seq__35067_35125__$1);
var G__35133 = null;
var G__35134 = (0);
var G__35135 = (0);
seq__35067_35115 = G__35132;
chunk__35068_35116 = G__35133;
count__35069_35117 = G__35134;
i__35070_35118 = G__35135;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_35136 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5804__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5804__auto__)){
var not_loaded = temp__5804__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_35136);
} else {
setTimeout(after_reload_fn_35136,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__35071 = cljs.core.seq.call(null,warnings);
var chunk__35072 = null;
var count__35073 = (0);
var i__35074 = (0);
while(true){
if((i__35074 < count__35073)){
var warning = cljs.core._nth.call(null,chunk__35072,i__35074);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__35137 = seq__35071;
var G__35138 = chunk__35072;
var G__35139 = count__35073;
var G__35140 = (i__35074 + (1));
seq__35071 = G__35137;
chunk__35072 = G__35138;
count__35073 = G__35139;
i__35074 = G__35140;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__35071);
if(temp__5804__auto__){
var seq__35071__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35071__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__35071__$1);
var G__35141 = cljs.core.chunk_rest.call(null,seq__35071__$1);
var G__35142 = c__5565__auto__;
var G__35143 = cljs.core.count.call(null,c__5565__auto__);
var G__35144 = (0);
seq__35071 = G__35141;
chunk__35072 = G__35142;
count__35073 = G__35143;
i__35074 = G__35144;
continue;
} else {
var warning = cljs.core.first.call(null,seq__35071__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__35145 = cljs.core.next.call(null,seq__35071__$1);
var G__35146 = null;
var G__35147 = (0);
var G__35148 = (0);
seq__35071 = G__35145;
chunk__35072 = G__35146;
count__35073 = G__35147;
i__35074 = G__35148;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__35075){
var map__35076 = p__35075;
var map__35076__$1 = cljs.core.__destructure_map.call(null,map__35076);
var exception_data = map__35076__$1;
var file = cljs.core.get.call(null,map__35076__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__35076__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35076__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__35026_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__35026_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__35077 = "Compile Exception - ";
var G__35077__$1 = (cljs.core.truth_((function (){var or__5043__auto__ = type;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return message;
}
})())?[G__35077,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__35077);
if(cljs.core.truth_(file)){
return [G__35077__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__35077__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map

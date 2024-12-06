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
return cljs.core.filter.call(null,(function (p1__34992_SHARP_){
var k = f.call(null,p1__34992_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__34993){
var vec__34994 = p__34993;
var k = cljs.core.nth.call(null,vec__34994,(0),null);
var v = cljs.core.nth.call(null,vec__34994,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__5772__auto__ = [];
var len__5766__auto___34998 = arguments.length;
var i__5767__auto___34999 = (0);
while(true){
if((i__5767__auto___34999 < len__5766__auto___34998)){
args__5772__auto__.push((arguments[i__5767__auto___34999]));

var G__35000 = (i__5767__auto___34999 + (1));
i__5767__auto___34999 = G__35000;
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
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq34997){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34997));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__35003){
var map__35004 = p__35003;
var map__35004__$1 = cljs.core.__destructure_map.call(null,map__35004);
var message = cljs.core.get.call(null,map__35004__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__35004__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__35002_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35002_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__35001_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__35001_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__35006){
var map__35007 = p__35006;
var map__35007__$1 = cljs.core.__destructure_map.call(null,map__35007);
var message_data = map__35007__$1;
var message = cljs.core.get.call(null,map__35007__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__35007__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35007__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__35007__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__35008 = file_excerpt;
var map__35008__$1 = cljs.core.__destructure_map.call(null,map__35008);
var start_line = cljs.core.get.call(null,map__35008__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__35008__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__35008__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__35009 = cljs.core.split_with.call(null,(function (p1__35005_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__35005_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__35009,(0),null);
var end = cljs.core.nth.call(null,vec__35009,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__35012){
var map__35013 = p__35012;
var map__35013__$1 = cljs.core.__destructure_map.call(null,map__35013);
var file = cljs.core.get.call(null,map__35013__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35013__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35013__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35014 = "";
var G__35014__$1 = (cljs.core.truth_(file)?[G__35014,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35014);
var G__35014__$2 = (cljs.core.truth_(line)?[G__35014__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35014__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = line;
if(cljs.core.truth_(and__5041__auto__)){
return column;
} else {
return and__5041__auto__;
}
})())){
return [G__35014__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35014__$2;
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
var c_35072 = (new goog.debug.Console());
var G__35021_35073 = c_35072.getFormatter();
figwheel.core.goog$module$goog$object.set.call(null,G__35021_35073,"showAbsoluteTime",false);

figwheel.core.goog$module$goog$object.set.call(null,G__35021_35073,"showRelativeTime",false);


figwheel.core.goog$module$goog$object.set.call(null,goog.debug.Console,"instance",c_35072);

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
return figwheel.core.event_target.dispatchEvent((function (){var G__35022 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
figwheel.core.goog$module$goog$object.add.call(null,G__35022,"data",(function (){var or__5043__auto__ = data;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__35022;
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

var last_reload_timestamp_35074 = cljs.core.atom.call(null,(0));
var promise_chain_35075 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5802__auto__ = (function (){var temp__5804__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var ts = temp__5804__auto__;
var and__5041__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_35074) < ts);
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
cljs.core.reset_BANG_.call(null,last_reload_timestamp_35074,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_35075.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__35023 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__35024 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__35024);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__35025 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__35026 = null;
var count__35027 = (0);
var i__35028 = (0);
while(true){
if((i__35028 < count__35027)){
var w = cljs.core._nth.call(null,chunk__35026,i__35028);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__35076 = seq__35025;
var G__35077 = chunk__35026;
var G__35078 = count__35027;
var G__35079 = (i__35028 + (1));
seq__35025 = G__35076;
chunk__35026 = G__35077;
count__35027 = G__35078;
i__35028 = G__35079;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__35025);
if(temp__5804__auto__){
var seq__35025__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35025__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__35025__$1);
var G__35080 = cljs.core.chunk_rest.call(null,seq__35025__$1);
var G__35081 = c__5565__auto__;
var G__35082 = cljs.core.count.call(null,c__5565__auto__);
var G__35083 = (0);
seq__35025 = G__35080;
chunk__35026 = G__35081;
count__35027 = G__35082;
i__35028 = G__35083;
continue;
} else {
var w = cljs.core.first.call(null,seq__35025__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__35084 = cljs.core.next.call(null,seq__35025__$1);
var G__35085 = null;
var G__35086 = (0);
var G__35087 = (0);
seq__35025 = G__35084;
chunk__35026 = G__35085;
count__35027 = G__35086;
i__35028 = G__35087;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__35023);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_35075.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__35029 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__35030 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__35030);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__35029);
}}));
} else {
return promise_chain_35075.then((function (){
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
var len__5766__auto___35088 = arguments.length;
var i__5767__auto___35089 = (0);
while(true){
if((i__5767__auto___35089 < len__5766__auto___35088)){
args__5772__auto__.push((arguments[i__5767__auto___35089]));

var G__35090 = (i__5767__auto___35089 + (1));
i__5767__auto___35089 = G__35090;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__35033){
var vec__35034 = p__35033;
var n = cljs.core.nth.call(null,vec__35034,(0),null);
var mdata = cljs.core.nth.call(null,vec__35034,(1),null);
var temp__5804__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__35037 = cljs.core.seq.call(null,hooks);
var chunk__35038 = null;
var count__35039 = (0);
var i__35040 = (0);
while(true){
if((i__35040 < count__35039)){
var vec__35049 = cljs.core._nth.call(null,chunk__35038,i__35040);
var n = cljs.core.nth.call(null,vec__35049,(0),null);
var f = cljs.core.nth.call(null,vec__35049,(1),null);
var temp__5802__auto___35091 = cljs.core.reduce.call(null,((function (seq__35037,chunk__35038,count__35039,i__35040,vec__35049,n,f,hooks){
return (function (p1__35015_SHARP_,p2__35016_SHARP_){
if(cljs.core.truth_(p1__35015_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__35015_SHARP_,p2__35016_SHARP_);
} else {
return null;
}
});})(seq__35037,chunk__35038,count__35039,i__35040,vec__35049,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5802__auto___35091)){
var hook_35092 = temp__5802__auto___35091;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_35092,args);
}catch (e35052){if((e35052 instanceof Error)){
var e_35093 = e35052;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_35093);
} else {
throw e35052;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__35094 = seq__35037;
var G__35095 = chunk__35038;
var G__35096 = count__35039;
var G__35097 = (i__35040 + (1));
seq__35037 = G__35094;
chunk__35038 = G__35095;
count__35039 = G__35096;
i__35040 = G__35097;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__35037);
if(temp__5804__auto__){
var seq__35037__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35037__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__35037__$1);
var G__35098 = cljs.core.chunk_rest.call(null,seq__35037__$1);
var G__35099 = c__5565__auto__;
var G__35100 = cljs.core.count.call(null,c__5565__auto__);
var G__35101 = (0);
seq__35037 = G__35098;
chunk__35038 = G__35099;
count__35039 = G__35100;
i__35040 = G__35101;
continue;
} else {
var vec__35053 = cljs.core.first.call(null,seq__35037__$1);
var n = cljs.core.nth.call(null,vec__35053,(0),null);
var f = cljs.core.nth.call(null,vec__35053,(1),null);
var temp__5802__auto___35102 = cljs.core.reduce.call(null,((function (seq__35037,chunk__35038,count__35039,i__35040,vec__35053,n,f,seq__35037__$1,temp__5804__auto__,hooks){
return (function (p1__35015_SHARP_,p2__35016_SHARP_){
if(cljs.core.truth_(p1__35015_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__35015_SHARP_,p2__35016_SHARP_);
} else {
return null;
}
});})(seq__35037,chunk__35038,count__35039,i__35040,vec__35053,n,f,seq__35037__$1,temp__5804__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5802__auto___35102)){
var hook_35103 = temp__5802__auto___35102;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_35103,args);
}catch (e35056){if((e35056 instanceof Error)){
var e_35104 = e35056;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_35104);
} else {
throw e35056;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__35105 = cljs.core.next.call(null,seq__35037__$1);
var G__35106 = null;
var G__35107 = (0);
var G__35108 = (0);
seq__35037 = G__35105;
chunk__35038 = G__35106;
count__35039 = G__35107;
i__35040 = G__35108;
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
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq35031){
var G__35032 = cljs.core.first.call(null,seq35031);
var seq35031__$1 = cljs.core.next.call(null,seq35031);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35032,seq35031__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__35057){
var vec__35058 = p__35057;
var k = cljs.core.nth.call(null,vec__35058,(0),null);
var v = cljs.core.nth.call(null,vec__35058,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__35017_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__35017_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__35017_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__35018_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__35018_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not.call(null,figwheel.core.load_warninged_code);
if(and__5041__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__5041__auto__;
}
})())?null:cljs.core.filter.call(null,(function (p1__35019_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__35019_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__35061_35109 = cljs.core.seq.call(null,to_reload);
var chunk__35062_35110 = null;
var count__35063_35111 = (0);
var i__35064_35112 = (0);
while(true){
if((i__35064_35112 < count__35063_35111)){
var ns_35113 = cljs.core._nth.call(null,chunk__35062_35110,i__35064_35112);
goog.require(cljs.core.name.call(null,ns_35113),true);


var G__35114 = seq__35061_35109;
var G__35115 = chunk__35062_35110;
var G__35116 = count__35063_35111;
var G__35117 = (i__35064_35112 + (1));
seq__35061_35109 = G__35114;
chunk__35062_35110 = G__35115;
count__35063_35111 = G__35116;
i__35064_35112 = G__35117;
continue;
} else {
var temp__5804__auto___35118 = cljs.core.seq.call(null,seq__35061_35109);
if(temp__5804__auto___35118){
var seq__35061_35119__$1 = temp__5804__auto___35118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35061_35119__$1)){
var c__5565__auto___35120 = cljs.core.chunk_first.call(null,seq__35061_35119__$1);
var G__35121 = cljs.core.chunk_rest.call(null,seq__35061_35119__$1);
var G__35122 = c__5565__auto___35120;
var G__35123 = cljs.core.count.call(null,c__5565__auto___35120);
var G__35124 = (0);
seq__35061_35109 = G__35121;
chunk__35062_35110 = G__35122;
count__35063_35111 = G__35123;
i__35064_35112 = G__35124;
continue;
} else {
var ns_35125 = cljs.core.first.call(null,seq__35061_35119__$1);
goog.require(cljs.core.name.call(null,ns_35125),true);


var G__35126 = cljs.core.next.call(null,seq__35061_35119__$1);
var G__35127 = null;
var G__35128 = (0);
var G__35129 = (0);
seq__35061_35109 = G__35126;
chunk__35062_35110 = G__35127;
count__35063_35111 = G__35128;
i__35064_35112 = G__35129;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_35130 = (function (){
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
figwheel.repl.after_reloads(after_reload_fn_35130);
} else {
setTimeout(after_reload_fn_35130,(100));
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

var seq__35065 = cljs.core.seq.call(null,warnings);
var chunk__35066 = null;
var count__35067 = (0);
var i__35068 = (0);
while(true){
if((i__35068 < count__35067)){
var warning = cljs.core._nth.call(null,chunk__35066,i__35068);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__35131 = seq__35065;
var G__35132 = chunk__35066;
var G__35133 = count__35067;
var G__35134 = (i__35068 + (1));
seq__35065 = G__35131;
chunk__35066 = G__35132;
count__35067 = G__35133;
i__35068 = G__35134;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__35065);
if(temp__5804__auto__){
var seq__35065__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35065__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__35065__$1);
var G__35135 = cljs.core.chunk_rest.call(null,seq__35065__$1);
var G__35136 = c__5565__auto__;
var G__35137 = cljs.core.count.call(null,c__5565__auto__);
var G__35138 = (0);
seq__35065 = G__35135;
chunk__35066 = G__35136;
count__35067 = G__35137;
i__35068 = G__35138;
continue;
} else {
var warning = cljs.core.first.call(null,seq__35065__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__35139 = cljs.core.next.call(null,seq__35065__$1);
var G__35140 = null;
var G__35141 = (0);
var G__35142 = (0);
seq__35065 = G__35139;
chunk__35066 = G__35140;
count__35067 = G__35141;
i__35068 = G__35142;
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

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__35069){
var map__35070 = p__35069;
var map__35070__$1 = cljs.core.__destructure_map.call(null,map__35070);
var exception_data = map__35070__$1;
var file = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35070__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__35020_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__35020_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__35071 = "Compile Exception - ";
var G__35071__$1 = (cljs.core.truth_((function (){var or__5043__auto__ = type;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return message;
}
})())?[G__35071,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__35071);
if(cljs.core.truth_(file)){
return [G__35071__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__35071__$1;
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

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
return cljs.core.filter.call(null,(function (p1__35410_SHARP_){
var k = f.call(null,p1__35410_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__35411){
var vec__35412 = p__35411;
var k = cljs.core.nth.call(null,vec__35412,(0),null);
var v = cljs.core.nth.call(null,vec__35412,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__5772__auto__ = [];
var len__5766__auto___35416 = arguments.length;
var i__5767__auto___35417 = (0);
while(true){
if((i__5767__auto___35417 < len__5766__auto___35416)){
args__5772__auto__.push((arguments[i__5767__auto___35417]));

var G__35418 = (i__5767__auto___35417 + (1));
i__5767__auto___35417 = G__35418;
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
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq35415){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35415));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__35421){
var map__35422 = p__35421;
var map__35422__$1 = cljs.core.__destructure_map.call(null,map__35422);
var message = cljs.core.get.call(null,map__35422__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__35422__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__35420_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35420_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__35419_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__35419_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__35424){
var map__35425 = p__35424;
var map__35425__$1 = cljs.core.__destructure_map.call(null,map__35425);
var message_data = map__35425__$1;
var message = cljs.core.get.call(null,map__35425__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__35425__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35425__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__35425__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__35426 = file_excerpt;
var map__35426__$1 = cljs.core.__destructure_map.call(null,map__35426);
var start_line = cljs.core.get.call(null,map__35426__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__35426__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__35426__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__35427 = cljs.core.split_with.call(null,(function (p1__35423_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__35423_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__35427,(0),null);
var end = cljs.core.nth.call(null,vec__35427,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__35430){
var map__35431 = p__35430;
var map__35431__$1 = cljs.core.__destructure_map.call(null,map__35431);
var file = cljs.core.get.call(null,map__35431__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35431__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35431__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35432 = "";
var G__35432__$1 = (cljs.core.truth_(file)?[G__35432,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35432);
var G__35432__$2 = (cljs.core.truth_(line)?[G__35432__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35432__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = line;
if(cljs.core.truth_(and__5041__auto__)){
return column;
} else {
return and__5041__auto__;
}
})())){
return [G__35432__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35432__$2;
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
var c_35490 = (new goog.debug.Console());
var G__35439_35491 = c_35490.getFormatter();
figwheel.core.goog$module$goog$object.set.call(null,G__35439_35491,"showAbsoluteTime",false);

figwheel.core.goog$module$goog$object.set.call(null,G__35439_35491,"showRelativeTime",false);


figwheel.core.goog$module$goog$object.set.call(null,goog.debug.Console,"instance",c_35490);

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
return figwheel.core.event_target.dispatchEvent((function (){var G__35440 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
figwheel.core.goog$module$goog$object.add.call(null,G__35440,"data",(function (){var or__5043__auto__ = data;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__35440;
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

var last_reload_timestamp_35492 = cljs.core.atom.call(null,(0));
var promise_chain_35493 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5802__auto__ = (function (){var temp__5804__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var ts = temp__5804__auto__;
var and__5041__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_35492) < ts);
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
cljs.core.reset_BANG_.call(null,last_reload_timestamp_35492,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_35493.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__35441 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__35442 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__35442);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__35443 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__35444 = null;
var count__35445 = (0);
var i__35446 = (0);
while(true){
if((i__35446 < count__35445)){
var w = cljs.core._nth.call(null,chunk__35444,i__35446);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__35494 = seq__35443;
var G__35495 = chunk__35444;
var G__35496 = count__35445;
var G__35497 = (i__35446 + (1));
seq__35443 = G__35494;
chunk__35444 = G__35495;
count__35445 = G__35496;
i__35446 = G__35497;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__35443);
if(temp__5804__auto__){
var seq__35443__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35443__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__35443__$1);
var G__35498 = cljs.core.chunk_rest.call(null,seq__35443__$1);
var G__35499 = c__5565__auto__;
var G__35500 = cljs.core.count.call(null,c__5565__auto__);
var G__35501 = (0);
seq__35443 = G__35498;
chunk__35444 = G__35499;
count__35445 = G__35500;
i__35446 = G__35501;
continue;
} else {
var w = cljs.core.first.call(null,seq__35443__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__35502 = cljs.core.next.call(null,seq__35443__$1);
var G__35503 = null;
var G__35504 = (0);
var G__35505 = (0);
seq__35443 = G__35502;
chunk__35444 = G__35503;
count__35445 = G__35504;
i__35446 = G__35505;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__35441);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_35493.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__35447 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__35448 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__35448);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__35447);
}}));
} else {
return promise_chain_35493.then((function (){
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
var len__5766__auto___35506 = arguments.length;
var i__5767__auto___35507 = (0);
while(true){
if((i__5767__auto___35507 < len__5766__auto___35506)){
args__5772__auto__.push((arguments[i__5767__auto___35507]));

var G__35508 = (i__5767__auto___35507 + (1));
i__5767__auto___35507 = G__35508;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__35451){
var vec__35452 = p__35451;
var n = cljs.core.nth.call(null,vec__35452,(0),null);
var mdata = cljs.core.nth.call(null,vec__35452,(1),null);
var temp__5804__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__35455 = cljs.core.seq.call(null,hooks);
var chunk__35456 = null;
var count__35457 = (0);
var i__35458 = (0);
while(true){
if((i__35458 < count__35457)){
var vec__35467 = cljs.core._nth.call(null,chunk__35456,i__35458);
var n = cljs.core.nth.call(null,vec__35467,(0),null);
var f = cljs.core.nth.call(null,vec__35467,(1),null);
var temp__5802__auto___35509 = cljs.core.reduce.call(null,((function (seq__35455,chunk__35456,count__35457,i__35458,vec__35467,n,f,hooks){
return (function (p1__35433_SHARP_,p2__35434_SHARP_){
if(cljs.core.truth_(p1__35433_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__35433_SHARP_,p2__35434_SHARP_);
} else {
return null;
}
});})(seq__35455,chunk__35456,count__35457,i__35458,vec__35467,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5802__auto___35509)){
var hook_35510 = temp__5802__auto___35509;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_35510,args);
}catch (e35470){if((e35470 instanceof Error)){
var e_35511 = e35470;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_35511);
} else {
throw e35470;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__35512 = seq__35455;
var G__35513 = chunk__35456;
var G__35514 = count__35457;
var G__35515 = (i__35458 + (1));
seq__35455 = G__35512;
chunk__35456 = G__35513;
count__35457 = G__35514;
i__35458 = G__35515;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__35455);
if(temp__5804__auto__){
var seq__35455__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35455__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__35455__$1);
var G__35516 = cljs.core.chunk_rest.call(null,seq__35455__$1);
var G__35517 = c__5565__auto__;
var G__35518 = cljs.core.count.call(null,c__5565__auto__);
var G__35519 = (0);
seq__35455 = G__35516;
chunk__35456 = G__35517;
count__35457 = G__35518;
i__35458 = G__35519;
continue;
} else {
var vec__35471 = cljs.core.first.call(null,seq__35455__$1);
var n = cljs.core.nth.call(null,vec__35471,(0),null);
var f = cljs.core.nth.call(null,vec__35471,(1),null);
var temp__5802__auto___35520 = cljs.core.reduce.call(null,((function (seq__35455,chunk__35456,count__35457,i__35458,vec__35471,n,f,seq__35455__$1,temp__5804__auto__,hooks){
return (function (p1__35433_SHARP_,p2__35434_SHARP_){
if(cljs.core.truth_(p1__35433_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__35433_SHARP_,p2__35434_SHARP_);
} else {
return null;
}
});})(seq__35455,chunk__35456,count__35457,i__35458,vec__35471,n,f,seq__35455__$1,temp__5804__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5802__auto___35520)){
var hook_35521 = temp__5802__auto___35520;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_35521,args);
}catch (e35474){if((e35474 instanceof Error)){
var e_35522 = e35474;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_35522);
} else {
throw e35474;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__35523 = cljs.core.next.call(null,seq__35455__$1);
var G__35524 = null;
var G__35525 = (0);
var G__35526 = (0);
seq__35455 = G__35523;
chunk__35456 = G__35524;
count__35457 = G__35525;
i__35458 = G__35526;
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
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq35449){
var G__35450 = cljs.core.first.call(null,seq35449);
var seq35449__$1 = cljs.core.next.call(null,seq35449);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35450,seq35449__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__35475){
var vec__35476 = p__35475;
var k = cljs.core.nth.call(null,vec__35476,(0),null);
var v = cljs.core.nth.call(null,vec__35476,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__35435_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__35435_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__35435_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__35436_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__35436_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not.call(null,figwheel.core.load_warninged_code);
if(and__5041__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__5041__auto__;
}
})())?null:cljs.core.filter.call(null,(function (p1__35437_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__35437_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__35479_35527 = cljs.core.seq.call(null,to_reload);
var chunk__35480_35528 = null;
var count__35481_35529 = (0);
var i__35482_35530 = (0);
while(true){
if((i__35482_35530 < count__35481_35529)){
var ns_35531 = cljs.core._nth.call(null,chunk__35480_35528,i__35482_35530);
goog.require(cljs.core.name.call(null,ns_35531),true);


var G__35532 = seq__35479_35527;
var G__35533 = chunk__35480_35528;
var G__35534 = count__35481_35529;
var G__35535 = (i__35482_35530 + (1));
seq__35479_35527 = G__35532;
chunk__35480_35528 = G__35533;
count__35481_35529 = G__35534;
i__35482_35530 = G__35535;
continue;
} else {
var temp__5804__auto___35536 = cljs.core.seq.call(null,seq__35479_35527);
if(temp__5804__auto___35536){
var seq__35479_35537__$1 = temp__5804__auto___35536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35479_35537__$1)){
var c__5565__auto___35538 = cljs.core.chunk_first.call(null,seq__35479_35537__$1);
var G__35539 = cljs.core.chunk_rest.call(null,seq__35479_35537__$1);
var G__35540 = c__5565__auto___35538;
var G__35541 = cljs.core.count.call(null,c__5565__auto___35538);
var G__35542 = (0);
seq__35479_35527 = G__35539;
chunk__35480_35528 = G__35540;
count__35481_35529 = G__35541;
i__35482_35530 = G__35542;
continue;
} else {
var ns_35543 = cljs.core.first.call(null,seq__35479_35537__$1);
goog.require(cljs.core.name.call(null,ns_35543),true);


var G__35544 = cljs.core.next.call(null,seq__35479_35537__$1);
var G__35545 = null;
var G__35546 = (0);
var G__35547 = (0);
seq__35479_35527 = G__35544;
chunk__35480_35528 = G__35545;
count__35481_35529 = G__35546;
i__35482_35530 = G__35547;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_35548 = (function (){
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
figwheel.repl.after_reloads(after_reload_fn_35548);
} else {
setTimeout(after_reload_fn_35548,(100));
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

var seq__35483 = cljs.core.seq.call(null,warnings);
var chunk__35484 = null;
var count__35485 = (0);
var i__35486 = (0);
while(true){
if((i__35486 < count__35485)){
var warning = cljs.core._nth.call(null,chunk__35484,i__35486);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__35549 = seq__35483;
var G__35550 = chunk__35484;
var G__35551 = count__35485;
var G__35552 = (i__35486 + (1));
seq__35483 = G__35549;
chunk__35484 = G__35550;
count__35485 = G__35551;
i__35486 = G__35552;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__35483);
if(temp__5804__auto__){
var seq__35483__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35483__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__35483__$1);
var G__35553 = cljs.core.chunk_rest.call(null,seq__35483__$1);
var G__35554 = c__5565__auto__;
var G__35555 = cljs.core.count.call(null,c__5565__auto__);
var G__35556 = (0);
seq__35483 = G__35553;
chunk__35484 = G__35554;
count__35485 = G__35555;
i__35486 = G__35556;
continue;
} else {
var warning = cljs.core.first.call(null,seq__35483__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__35557 = cljs.core.next.call(null,seq__35483__$1);
var G__35558 = null;
var G__35559 = (0);
var G__35560 = (0);
seq__35483 = G__35557;
chunk__35484 = G__35558;
count__35485 = G__35559;
i__35486 = G__35560;
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

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__35487){
var map__35488 = p__35487;
var map__35488__$1 = cljs.core.__destructure_map.call(null,map__35488);
var exception_data = map__35488__$1;
var file = cljs.core.get.call(null,map__35488__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__35488__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35488__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__35438_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__35438_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__35489 = "Compile Exception - ";
var G__35489__$1 = (cljs.core.truth_((function (){var or__5043__auto__ = type;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return message;
}
})())?[G__35489,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__35489);
if(cljs.core.truth_(file)){
return [G__35489__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__35489__$1;
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

// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('devtools.prefs');
goog.require('cljs.core');
goog.require('devtools.defaults');
goog.require('goog.labs.userAgent.browser');
goog.scope(function(){
devtools.prefs.goog$module$goog$labs$userAgent$browser = goog.module.get('goog.labs.userAgent.browser');
});
devtools.prefs.default_config = (new cljs.core.Delay((function (){
return cljs.core.deref.call(null,devtools.defaults.config);
}),null));
devtools.prefs.firefox_overrides_config = (new cljs.core.Delay((function (){
if(cljs.core.truth_(devtools.prefs.goog$module$goog$labs$userAgent$browser.isFirefox.call(null))){
return cljs.core.deref.call(null,devtools.defaults.firefox_overrides_config);
} else {
return null;
}
}),null));
devtools.prefs.external_config = (new cljs.core.Delay((function (){
return cljs.core.PersistentArrayMap.EMPTY;
}),null));
devtools.prefs.initial_config = (new cljs.core.Delay((function (){
return cljs.core.merge.call(null,cljs.core.deref.call(null,devtools.prefs.default_config),cljs.core.deref.call(null,devtools.prefs.firefox_overrides_config),cljs.core.deref.call(null,devtools.prefs.external_config));
}),null));
devtools.prefs._STAR_current_config_STAR_ = (new cljs.core.Delay((function (){
return cljs.core.deref.call(null,devtools.prefs.initial_config);
}),null));
devtools.prefs.set_prefs_BANG_ = (function devtools$prefs$set_prefs_BANG_(new_prefs){
return (devtools.prefs._STAR_current_config_STAR_ = new_prefs);
});
devtools.prefs.get_prefs = (function devtools$prefs$get_prefs(){
if(cljs.core.delay_QMARK_.call(null,devtools.prefs._STAR_current_config_STAR_)){
devtools.prefs.set_prefs_BANG_.call(null,cljs.core.deref.call(null,devtools.prefs._STAR_current_config_STAR_));
} else {
}

return devtools.prefs._STAR_current_config_STAR_;
});
devtools.prefs.pref = (function devtools$prefs$pref(key){
return key.call(null,devtools.prefs.get_prefs.call(null));
});
devtools.prefs.set_pref_BANG_ = (function devtools$prefs$set_pref_BANG_(key,val){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.assoc.call(null,devtools.prefs.get_prefs.call(null),key,val));
});
devtools.prefs.merge_prefs_BANG_ = (function devtools$prefs$merge_prefs_BANG_(m){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.merge.call(null,devtools.prefs.get_prefs.call(null),m));
});
devtools.prefs.update_pref_BANG_ = (function devtools$prefs$update_pref_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___33846 = arguments.length;
var i__5767__auto___33847 = (0);
while(true){
if((i__5767__auto___33847 < len__5766__auto___33846)){
args__5772__auto__.push((arguments[i__5767__auto___33847]));

var G__33848 = (i__5767__auto___33847 + (1));
i__5767__auto___33847 = G__33848;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
var new_val = cljs.core.apply.call(null,f,devtools.prefs.pref.call(null,key),args);
return devtools.prefs.set_pref_BANG_.call(null,key,new_val);
}));

(devtools.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq33843){
var G__33844 = cljs.core.first.call(null,seq33843);
var seq33843__$1 = cljs.core.next.call(null,seq33843);
var G__33845 = cljs.core.first.call(null,seq33843__$1);
var seq33843__$2 = cljs.core.next.call(null,seq33843__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33844,G__33845,seq33843__$2);
}));


//# sourceMappingURL=prefs.js.map

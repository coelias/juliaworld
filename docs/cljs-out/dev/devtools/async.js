// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('devtools.async');
goog.require('cljs.core');
goog.require('goog.async.nextTick');
goog.require('devtools.context');
goog.require('goog.labs.userAgent.browser');
goog.scope(function(){
devtools.async.goog$module$goog$labs$userAgent$browser = goog.module.get('goog.labs.userAgent.browser');
});
devtools.async.available_QMARK_ = (function devtools$async$available_QMARK_(){
return (typeof Promise !== 'undefined');
});
devtools.async.fixed_chrome_version_for_async = "65.0.3321";
devtools.async.needed_QMARK_ = (function devtools$async$needed_QMARK_(){
return cljs.core.not.call(null,(function (){var and__5041__auto__ = devtools.async.goog$module$goog$labs$userAgent$browser.isChrome.call(null);
if(cljs.core.truth_(and__5041__auto__)){
return devtools.async.goog$module$goog$labs$userAgent$browser.isVersionOrHigher.call(null,devtools.async.fixed_chrome_version_for_async);
} else {
return and__5041__auto__;
}
})());
});
devtools.async.get_not_needed_message = (function devtools$async$get_not_needed_message(){
return ["cljs-devtools: the :async feature is no longer needed since Chrome ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.async.fixed_chrome_version_for_async),", ","see https://github.com/binaryage/cljs-devtools/issues/20"].join('');
});
devtools.async._STAR_installed_STAR_ = false;
devtools.async._STAR_original_set_immediate_STAR_ = null;
devtools.async.rethrow_outside_promise = (function devtools$async$rethrow_outside_promise(e){
return setTimeout((function (){
throw e;
}),(0));
});
devtools.async.promise_based_set_immediate = (function devtools$async$promise_based_set_immediate(callback){
var o__33659__auto___35584 = (function (){var o__33659__auto___35584 = (function (){var o__33659__auto___35584 = Promise;
return (o__33659__auto___35584["resolve"]).call(o__33659__auto___35584);
})();
return (o__33659__auto___35584["then"]).call(o__33659__auto___35584,callback);
})();
(o__33659__auto___35584["catch"]).call(o__33659__auto___35584,devtools.async.rethrow_outside_promise);

return null;
});
devtools.async.install_async_set_immediate_BANG_ = (function devtools$async$install_async_set_immediate_BANG_(){
(devtools.async._STAR_original_set_immediate_STAR_ = goog.async.nextTick.setImmediate_);

return (goog.async.nextTick.setImmediate_ = devtools.async.promise_based_set_immediate);
});
devtools.async.uninstall_async_set_immediate_BANG_ = (function devtools$async$uninstall_async_set_immediate_BANG_(){
return (goog.async.nextTick.setImmediate_ = devtools.async._STAR_original_set_immediate_STAR_);
});
devtools.async.installed_QMARK_ = (function devtools$async$installed_QMARK_(){
return devtools.async._STAR_installed_STAR_;
});
devtools.async.install_BANG_ = (function devtools$async$install_BANG_(){
if(cljs.core.truth_(devtools.async._STAR_installed_STAR_)){
return null;
} else {
(devtools.async._STAR_installed_STAR_ = true);

var G__35585_35586 = Error;
var target__33664__auto___35587 = G__35585_35586;
if(cljs.core.truth_(target__33664__auto___35587)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35585_35586)].join(''),"\n","target__33664__auto__"].join('')));
}

(target__33664__auto___35587["stackTraceLimit"] = Infinity);


devtools.async.install_async_set_immediate_BANG_.call(null);

if(devtools.async.needed_QMARK_.call(null)){
} else {
devtools.context.get_console.call(null).info(devtools.async.get_not_needed_message.call(null));
}

return true;
}
});
devtools.async.uninstall_BANG_ = (function devtools$async$uninstall_BANG_(){
if(cljs.core.truth_(devtools.async._STAR_installed_STAR_)){
(devtools.async._STAR_installed_STAR_ = false);

return devtools.async.uninstall_async_set_immediate_BANG_.call(null);
} else {
return null;
}
});

//# sourceMappingURL=async.js.map

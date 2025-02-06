// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('promesa.core');
goog.require('cljs.core');
goog.require('promesa.protocols');
goog.require('cljs.core');
goog.require('promesa.exec');
goog.require('promesa.impl');
goog.require('promesa.util');
/**
 * Return a resolved promise with provided value.
 */
promesa.core.resolved = (function promesa$core$resolved(v){
return promesa.impl.resolved.call(null,v);
});
/**
 * Return a rejected promise with provided reason.
 */
promesa.core.rejected = (function promesa$core$rejected(v){
return promesa.impl.rejected.call(null,v);
});
/**
 * Creates an empty promise instance.
 */
promesa.core.deferred = (function promesa$core$deferred(){
return promesa.impl.deferred.call(null);
});
/**
 * The coerce based promise constructor. Creates an appropriate promise
 *   instance depending on the provided value.
 * 
 *   If an executor is provided, it will be used to resolve this
 *   promise.
 */
promesa.core.promise = (function promesa$core$promise(var_args){
var G__27572 = arguments.length;
switch (G__27572) {
case 1:
return promesa.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (v){
return promesa.protocols._promise.call(null,v);
}));

(promesa.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (v,executor){
return promesa.protocols._fmap.call(null,promesa.protocols._promise.call(null,v),cljs.core.identity,executor);
}));

(promesa.core.promise.cljs$lang$maxFixedArity = 2);

/**
 * A convenience alias for `promise` coercion function that only accepts
 *   a single argument.
 */
promesa.core.wrap = (function promesa$core$wrap(v){
return promesa.protocols._promise.call(null,v);
});
/**
 * Create a promise instance from a factory function. If an executor is
 *   provided, the factory will be executed in the provided executor.
 * 
 *   A factory function looks like `(fn [resolve reject] (resolve 1))`.
 */
promesa.core.create = (function promesa$core$create(var_args){
var G__27579 = arguments.length;
switch (G__27579) {
case 1:
return promesa.core.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.create.cljs$core$IFn$_invoke$arity$1 = (function (f){
var d = promesa.impl.deferred.call(null);
try{f.call(null,(function (p1__27574_SHARP_){
return promesa.protocols._resolve_BANG_.call(null,d,p1__27574_SHARP_);
}),(function (p1__27575_SHARP_){
return promesa.protocols._reject_BANG_.call(null,d,p1__27575_SHARP_);
}));
}catch (e27580){var e_27583 = e27580;
promesa.protocols._reject_BANG_.call(null,d,e_27583);
}
return d;
}));

(promesa.core.create.cljs$core$IFn$_invoke$arity$2 = (function (f,executor){
var d = promesa.impl.deferred.call(null);
promesa.exec.run_BANG_.call(null,executor,(function (){
try{return f.call(null,(function (p1__27576_SHARP_){
return promesa.protocols._resolve_BANG_.call(null,d,p1__27576_SHARP_);
}),(function (p1__27577_SHARP_){
return promesa.protocols._reject_BANG_.call(null,d,p1__27577_SHARP_);
}));
}catch (e27581){var e = e27581;
return promesa.protocols._reject_BANG_.call(null,d,e);
}}));

return d;
}));

(promesa.core.create.cljs$lang$maxFixedArity = 2);

/**
 * Return true if `v` is a promise instance.
 */
promesa.core.promise_QMARK_ = (function promesa$core$promise_QMARK_(v){
return promesa.impl.promise_QMARK_.call(null,v);
});
/**
 * Return true if `v` is a deferred instance.
 */
promesa.core.deferred_QMARK_ = (function promesa$core$deferred_QMARK_(v){
return promesa.impl.deferred_QMARK_.call(null,v);
});
/**
 * Returns true if `v` is a promise like object.
 */
promesa.core.thenable_QMARK_ = (function promesa$core$thenable_QMARK_(v){
return ((cljs.core.object_QMARK_.call(null,v)) && (cljs.core.fn_QMARK_.call(null,(v["then"]))));
});
/**
 * Returns true if promise `p` is already fulfilled.
 */
promesa.core.resolved_QMARK_ = (function promesa$core$resolved_QMARK_(p){
return promesa.protocols._resolved_QMARK_.call(null,p);
});
/**
 * Returns true if promise `p` is already rejected.
 */
promesa.core.rejected_QMARK_ = (function promesa$core$rejected_QMARK_(p){
return promesa.protocols._rejected_QMARK_.call(null,p);
});
/**
 * Returns true if promise `p` is stil pending.
 */
promesa.core.pending_QMARK_ = (function promesa$core$pending_QMARK_(p){
return promesa.protocols._pending_QMARK_.call(null,p);
});
/**
 * Returns the current promise value.
 */
promesa.core.extract = (function promesa$core$extract(var_args){
var G__27585 = arguments.length;
switch (G__27585) {
case 1:
return promesa.core.extract.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.extract.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.extract.cljs$core$IFn$_invoke$arity$1 = (function (p){
return promesa.protocols._extract.call(null,p);
}));

(promesa.core.extract.cljs$core$IFn$_invoke$arity$2 = (function (p,default$){
return promesa.protocols._extract.call(null,p,default$);
}));

(promesa.core.extract.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if promise `p` is already done.
 */
promesa.core.done_QMARK_ = (function promesa$core$done_QMARK_(p){
return cljs.core.not.call(null,promesa.protocols._pending_QMARK_.call(null,p));
});
/**
 * Chains a function `f` to be executed when the promise `p` is
 *   successfully resolved. Returns a promise that will be resolved with
 *   the return value of calling `f` with value as single argument; `f`
 *   can return a plain value or promise instance, an automatic
 *   unwrapping will be performed.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 */
promesa.core.then = (function promesa$core$then(var_args){
var G__27588 = arguments.length;
switch (G__27588) {
case 2:
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.then.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._then.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.then.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._then.call(null,promesa.protocols._promise.call(null,p),f,executor);
}));

(promesa.core.then.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is
 *   successfully resolved. Returns a promise that will be resolved with
 *   the return value of calling `f` with value as single argument; `f`
 *   should return a plain value, no automatic unwrapping will be
 *   performed.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 */
promesa.core.then_SINGLEQUOTE_ = (function promesa$core$then_SINGLEQUOTE_(var_args){
var G__27591 = arguments.length;
switch (G__27591) {
case 2:
return promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._fmap.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.then_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._fmap.call(null,promesa.protocols._promise.call(null,p),f,executor);
}));

(promesa.core.then_SINGLEQUOTE_.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed with when the promise `p` is
 *   successfully resolved. Returns a promise that will mirror the
 *   promise instance returned by calling `f` with the value as single
 *   argument; `f` **must** return a promise instance.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 */
promesa.core.bind = (function promesa$core$bind(var_args){
var G__27594 = arguments.length;
switch (G__27594) {
case 2:
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.bind.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.bind.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.bind.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,p),f,executor);
}));

(promesa.core.bind.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is
 *   successfully resolved. Returns a promise that will be resolved with
 *   the return value of calling `f` with value as single argument.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   This function is intended to be used with `->>`.
 */
promesa.core.map = (function promesa$core$map(var_args){
var G__27597 = arguments.length;
switch (G__27597) {
case 2:
return promesa.core.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.map.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._fmap.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.map.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._fmap.call(null,promesa.protocols._promise.call(null,p),f,executor);
}));

(promesa.core.map.cljs$lang$maxFixedArity = 3);

/**
 * A convenience alias for `map`.
 */
promesa.core.fmap = (function promesa$core$fmap(var_args){
var G__27600 = arguments.length;
switch (G__27600) {
case 2:
return promesa.core.fmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.fmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.fmap.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._fmap.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.fmap.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._fmap.call(null,promesa.protocols._promise.call(null,p),f,executor);
}));

(promesa.core.fmap.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is
 *   successfully resolved. Returns a promise that will mirror the
 *   promise instance returned by calling `f` with the value as single
 *   argument; `f` **must** return a promise instance.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   This funciton is intended to be used with `->>`.
 */
promesa.core.mapcat = (function promesa$core$mapcat(var_args){
var G__27603 = arguments.length;
switch (G__27603) {
case 2:
return promesa.core.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.mapcat.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.mapcat.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,p),f,executor);
}));

(promesa.core.mapcat.cljs$lang$maxFixedArity = 3);

/**
 * A convenience alias for `mapcat`.
 */
promesa.core.mcat = (function promesa$core$mcat(var_args){
var G__27606 = arguments.length;
switch (G__27606) {
case 2:
return promesa.core.mcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.mcat.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.mcat.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.mcat.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,p),f,executor);
}));

(promesa.core.mcat.cljs$lang$maxFixedArity = 3);

/**
 * Chain variable number of functions to be executed serially using
 *   `then`.
 */
promesa.core.chain = (function promesa$core$chain(var_args){
var G__27612 = arguments.length;
switch (G__27612) {
case 2:
return promesa.core.chain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___27614 = arguments.length;
var i__5767__auto___27615 = (0);
while(true){
if((i__5767__auto___27615 < len__5766__auto___27614)){
args_arr__5791__auto__.push((arguments[i__5767__auto___27615]));

var G__27616 = (i__5767__auto___27615 + (1));
i__5767__auto___27615 = G__27616;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(promesa.core.chain.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.core.then.call(null,p,f);
}));

(promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic = (function (p,f,fs){
return cljs.core.reduce.call(null,promesa.core.then,p,cljs.core.cons.call(null,f,fs));
}));

/** @this {Function} */
(promesa.core.chain.cljs$lang$applyTo = (function (seq27609){
var G__27610 = cljs.core.first.call(null,seq27609);
var seq27609__$1 = cljs.core.next.call(null,seq27609);
var G__27611 = cljs.core.first.call(null,seq27609__$1);
var seq27609__$2 = cljs.core.next.call(null,seq27609__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27610,G__27611,seq27609__$2);
}));

(promesa.core.chain.cljs$lang$maxFixedArity = (2));

/**
 * Chain variable number of functions to be executed serially using
 *   `map`.
 */
promesa.core.chain_SINGLEQUOTE_ = (function promesa$core$chain_SINGLEQUOTE_(var_args){
var G__27623 = arguments.length;
switch (G__27623) {
case 2:
return promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___27625 = arguments.length;
var i__5767__auto___27626 = (0);
while(true){
if((i__5767__auto___27626 < len__5766__auto___27625)){
args_arr__5791__auto__.push((arguments[i__5767__auto___27626]));

var G__27627 = (i__5767__auto___27626 + (1));
i__5767__auto___27626 = G__27627;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.core.then_SINGLEQUOTE_.call(null,p,f);
}));

(promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic = (function (p,f,fs){
return cljs.core.reduce.call(null,(function (p1__27618_SHARP_,p2__27617_SHARP_){
return promesa.core.map.call(null,p2__27617_SHARP_,p1__27618_SHARP_);
}),promesa.protocols._promise.call(null,p),cljs.core.cons.call(null,f,fs));
}));

/** @this {Function} */
(promesa.core.chain_SINGLEQUOTE_.cljs$lang$applyTo = (function (seq27620){
var G__27621 = cljs.core.first.call(null,seq27620);
var seq27620__$1 = cljs.core.next.call(null,seq27620);
var G__27622 = cljs.core.first.call(null,seq27620__$1);
var seq27620__$2 = cljs.core.next.call(null,seq27620__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27621,G__27622,seq27620__$2);
}));

(promesa.core.chain_SINGLEQUOTE_.cljs$lang$maxFixedArity = (2));

/**
 * Chains a function `f` to be executed when the promise `p` is completed
 *   (resolved or rejected) and returns a promise completed (resolving or
 *   rejecting) with the return value of calling `f` with both: value and
 *   the exception; `f` can return a new plain value or promise instance,
 *   and automatic unwrapping will be performed.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   For performance sensitive code, look at `hmap` and `hcat`.
 */
promesa.core.handle = (function promesa$core$handle(var_args){
var G__27629 = arguments.length;
switch (G__27629) {
case 2:
return promesa.core.handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.handle.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._mcat.call(null,promesa.protocols._hmap.call(null,promesa.protocols._promise.call(null,p),cljs.core.comp.call(null,promesa.protocols._promise,f)),cljs.core.identity);
}));

(promesa.core.handle.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._mcat.call(null,promesa.protocols._hmap.call(null,promesa.protocols._promise.call(null,p),cljs.core.comp.call(null,promesa.protocols._promise,f),executor),cljs.core.identity,executor);
}));

(promesa.core.handle.cljs$lang$maxFixedArity = 3);

/**
 * Like `handle` but ignores the return value. Returns a promise that
 *   will mirror the original one.
 */
promesa.core.finally$ = (function promesa$core$finally(var_args){
var G__27632 = arguments.length;
switch (G__27632) {
case 2:
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._fnly.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.finally$.cljs$core$IFn$_invoke$arity$3 = (function (p,f,executor){
return promesa.protocols._fnly.call(null,promesa.protocols._promise.call(null,p),f,executor);
}));

(promesa.core.finally$.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is completed
 *   (resolved or rejected) and returns a promise completed (resolving or
 *   rejecting) with the return value of calling `f` with both: value and
 *   the exception.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   Intended to be used with `->>`.
 */
promesa.core.hmap = (function promesa$core$hmap(var_args){
var G__27635 = arguments.length;
switch (G__27635) {
case 2:
return promesa.core.hmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.hmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.hmap.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._hmap.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.hmap.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._hmap.call(null,promesa.protocols._promise.call(null,p),f,executor);
}));

(promesa.core.hmap.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is completed
 *   (resolved or rejected) and returns a promise that will mirror the
 *   promise instance returned by calling `f` with both: value and the
 *   exception. The `f` function must return a promise instance.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   Intended to be used with `->>`.
 */
promesa.core.hcat = (function promesa$core$hcat(var_args){
var G__27638 = arguments.length;
switch (G__27638) {
case 2:
return promesa.core.hcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.hcat.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.hcat.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._mcat.call(null,promesa.protocols._hmap.call(null,promesa.protocols._promise.call(null,p),f),cljs.core.identity);
}));

(promesa.core.hcat.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._mcat.call(null,promesa.protocols._hmap.call(null,promesa.protocols._promise.call(null,p),f,executor),cljs.core.identity,executor);
}));

(promesa.core.hcat.cljs$lang$maxFixedArity = 3);

/**
 * Inverted arguments version of `finally`; intended to be used with
 *   `->>`.
 */
promesa.core.fnly = (function promesa$core$fnly(var_args){
var G__27641 = arguments.length;
switch (G__27641) {
case 2:
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.fnly.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._fnly.call(null,promesa.protocols._promise.call(null,p),f);
}));

(promesa.core.fnly.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._fnly.call(null,promesa.protocols._promise.call(null,p),f,executor);
}));

(promesa.core.fnly.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is
 *   rejected. Returns a promise that will be resolved with the return
 *   value of calling `f` with exception as single argument; `f` can
 *   return a plain value or promise instance, an automatic unwrapping
 *   will be performed.
 * 
 *   The computation will be executed in the completion thread, look at
 *   `merr` if you want the ability to schedule the computation to other
 *   thread.
 */
promesa.core.catch$ = (function promesa$core$catch(var_args){
var G__27646 = arguments.length;
switch (G__27646) {
case 2:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._merr.call(null,promesa.protocols._promise.call(null,p),(function (p1__27643_SHARP_){
return promesa.protocols._promise.call(null,f.call(null,p1__27643_SHARP_));
}));
}));

(promesa.core.catch$.cljs$core$IFn$_invoke$arity$3 = (function (p,pred_or_type,f){
var accept_QMARK_ = ((cljs.core.ifn_QMARK_.call(null,pred_or_type))?pred_or_type:(function (p1__27644_SHARP_){
return (p1__27644_SHARP_ instanceof pred_or_type);
}));
return promesa.protocols._merr.call(null,promesa.protocols._promise.call(null,p),(function (e){
if(cljs.core.truth_(accept_QMARK_.call(null,e))){
return promesa.protocols._promise.call(null,f.call(null,e));
} else {
return promesa.impl.rejected.call(null,e);
}
}));
}));

(promesa.core.catch$.cljs$lang$maxFixedArity = 3);

/**
 * Chains a function `f` to be executed when the promise `p` is
 *   rejected. Returns a promise that will mirror the promise returned by
 *   calling `f` with exception as single argument; `f` **must** return a
 *   promise instance or throw an exception.
 * 
 *   The computation will be executed in the completion thread by
 *   default; you also can provide a custom executor.
 * 
 *   This is intended to be used with `->>`.
 */
promesa.core.merr = (function promesa$core$merr(var_args){
var G__27649 = arguments.length;
switch (G__27649) {
case 2:
return promesa.core.merr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.merr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.merr.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.protocols._merr.call(null,p,f);
}));

(promesa.core.merr.cljs$core$IFn$_invoke$arity$3 = (function (executor,f,p){
return promesa.protocols._merr.call(null,p,f,executor);
}));

(promesa.core.merr.cljs$lang$maxFixedArity = 3);

/**
 * Same as `catch` but with parameters inverted.
 * 
 *   DEPRECATED
 */
promesa.core.error = (function promesa$core$error(var_args){
var G__27652 = arguments.length;
switch (G__27652) {
case 2:
return promesa.core.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.error.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.core.catch$.call(null,p,f);
}));

(promesa.core.error.cljs$core$IFn$_invoke$arity$3 = (function (f,type,p){
return promesa.core.catch$.call(null,p,type,f);
}));

(promesa.core.error.cljs$lang$maxFixedArity = 3);

/**
 * Given an array of promises, return a promise that is fulfilled when
 *   all the items in the array are fulfilled.
 * 
 *   Example:
 * 
 *   ```
 *   (-> (p/all [(promise :first-promise)
 *            (promise :second-promise)])
 *    (then (fn [[first-result second-result]])
 *            (println (str first-result ", " second-result))))
 *   ```
 * 
 *   Will print to out `:first-promise, :second-promise`.
 * 
 *   If at least one of the promises is rejected, the resulting promise
 *   will be rejected.
 */
promesa.core.all = (function promesa$core$all(promises){
return promesa.impl.all.call(null,promises);
});
promesa.core.race = (function promesa$core$race(promises){
return promesa.impl.race.call(null,promises);
});
/**
 * Given an array of promises, return a promise that is fulfilled when
 *   first one item in the array is fulfilled.
 */
promesa.core.any = (function promesa$core$any(var_args){
var G__27655 = arguments.length;
switch (G__27655) {
case 1:
return promesa.core.any.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.any.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.any.cljs$core$IFn$_invoke$arity$1 = (function (promises){
return promesa.core.any.call(null,promises,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826));
}));

(promesa.core.any.cljs$core$IFn$_invoke$arity$2 = (function (promises,default$){
var items = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,promises);
var state = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pending","pending",-220036727),items,new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"resolved?","resolved?",862515389),false], null));
var lock = promesa.util.mutex.call(null);
return promesa.core.create.call(null,(function (resolve,reject){
var seq__27656 = cljs.core.seq.call(null,promises);
var chunk__27657 = null;
var count__27658 = (0);
var i__27659 = (0);
while(true){
if((i__27659 < count__27658)){
var p = cljs.core._nth.call(null,chunk__27657,i__27659);
promesa.protocols._fnly.call(null,promesa.protocols._promise.call(null,p),((function (seq__27656,chunk__27657,count__27658,i__27659,p,items,state,lock){
return (function (v,exception){
promesa.protocols._lock_BANG_.call(null,lock);

try{if(cljs.core.truth_(exception)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved?","resolved?",862515389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return null;
} else {
var state__$1 = cljs.core._vreset_BANG_.call(null,state,((function (seq__27656,chunk__27657,count__27658,i__27659,p,items,state,lock){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.update.call(null,state__$1,new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.conj,exception);
});})(seq__27656,chunk__27657,count__27658,i__27659,p,items,state,lock))
.call(null,cljs.core._deref.call(null,state)));
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(state__$1))){
return null;
} else {
if(cljs.core._EQ_.call(null,default$,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
return reject.call(null,cljs.core.ex_info.call(null,"No promises resolved",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rejections","rejections",-1620899911),new cljs.core.Keyword(null,"rejections","rejections",-1620899911).cljs$core$IFn$_invoke$arity$1(state__$1)], null)));
} else {
return resolve.call(null,default$);
}
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved?","resolved?",862515389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return null;
} else {
var map__27662 = cljs.core._vreset_BANG_.call(null,state,((function (seq__27656,chunk__27657,count__27658,i__27659,p,items,state,lock){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"resolved?","resolved?",862515389),true),new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p);
});})(seq__27656,chunk__27657,count__27658,i__27659,p,items,state,lock))
.call(null,cljs.core._deref.call(null,state)));
var map__27662__$1 = cljs.core.__destructure_map.call(null,map__27662);
var pending = cljs.core.get.call(null,map__27662__$1,new cljs.core.Keyword(null,"pending","pending",-220036727));
return resolve.call(null,v);
}
}
}finally {promesa.protocols._unlock_BANG_.call(null,lock);
}});})(seq__27656,chunk__27657,count__27658,i__27659,p,items,state,lock))
);


var G__27665 = seq__27656;
var G__27666 = chunk__27657;
var G__27667 = count__27658;
var G__27668 = (i__27659 + (1));
seq__27656 = G__27665;
chunk__27657 = G__27666;
count__27658 = G__27667;
i__27659 = G__27668;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__27656);
if(temp__5804__auto__){
var seq__27656__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27656__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__27656__$1);
var G__27669 = cljs.core.chunk_rest.call(null,seq__27656__$1);
var G__27670 = c__5565__auto__;
var G__27671 = cljs.core.count.call(null,c__5565__auto__);
var G__27672 = (0);
seq__27656 = G__27669;
chunk__27657 = G__27670;
count__27658 = G__27671;
i__27659 = G__27672;
continue;
} else {
var p = cljs.core.first.call(null,seq__27656__$1);
promesa.protocols._fnly.call(null,promesa.protocols._promise.call(null,p),((function (seq__27656,chunk__27657,count__27658,i__27659,p,seq__27656__$1,temp__5804__auto__,items,state,lock){
return (function (v,exception){
promesa.protocols._lock_BANG_.call(null,lock);

try{if(cljs.core.truth_(exception)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved?","resolved?",862515389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return null;
} else {
var state__$1 = cljs.core._vreset_BANG_.call(null,state,((function (seq__27656,chunk__27657,count__27658,i__27659,p,seq__27656__$1,temp__5804__auto__,items,state,lock){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.update.call(null,state__$1,new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.conj,exception);
});})(seq__27656,chunk__27657,count__27658,i__27659,p,seq__27656__$1,temp__5804__auto__,items,state,lock))
.call(null,cljs.core._deref.call(null,state)));
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(state__$1))){
return null;
} else {
if(cljs.core._EQ_.call(null,default$,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
return reject.call(null,cljs.core.ex_info.call(null,"No promises resolved",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rejections","rejections",-1620899911),new cljs.core.Keyword(null,"rejections","rejections",-1620899911).cljs$core$IFn$_invoke$arity$1(state__$1)], null)));
} else {
return resolve.call(null,default$);
}
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved?","resolved?",862515389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return null;
} else {
var map__27663 = cljs.core._vreset_BANG_.call(null,state,((function (seq__27656,chunk__27657,count__27658,i__27659,p,seq__27656__$1,temp__5804__auto__,items,state,lock){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"resolved?","resolved?",862515389),true),new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p);
});})(seq__27656,chunk__27657,count__27658,i__27659,p,seq__27656__$1,temp__5804__auto__,items,state,lock))
.call(null,cljs.core._deref.call(null,state)));
var map__27663__$1 = cljs.core.__destructure_map.call(null,map__27663);
var pending = cljs.core.get.call(null,map__27663__$1,new cljs.core.Keyword(null,"pending","pending",-220036727));
return resolve.call(null,v);
}
}
}finally {promesa.protocols._unlock_BANG_.call(null,lock);
}});})(seq__27656,chunk__27657,count__27658,i__27659,p,seq__27656__$1,temp__5804__auto__,items,state,lock))
);


var G__27673 = cljs.core.next.call(null,seq__27656__$1);
var G__27674 = null;
var G__27675 = (0);
var G__27676 = (0);
seq__27656 = G__27673;
chunk__27657 = G__27674;
count__27658 = G__27675;
i__27659 = G__27676;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));

(promesa.core.any.cljs$lang$maxFixedArity = 2);

/**
 * Given an array of promises, return a promise that is fulfilled when
 *   all the items in the array are resolved (independently if
 *   successfully or exceptionally).
 * 
 *   Example:
 * 
 *   ```
 *   (->> (p/wait-all* [(promise :first-promise)
 *                   (promise :second-promise)])
 *     (p/fmap (fn [_]
 *               (println "done"))))
 *   ```
 * 
 *   Rejected promises also counts as resolved.
 */
promesa.core.wait_all_STAR_ = (function promesa$core$wait_all_STAR_(promises){
var promises__$1 = cljs.core.set.call(null,promises);
var total = cljs.core.count.call(null,promises__$1);
var prom = promesa.core.deferred.call(null);
if((total > (0))){
var counter_27678 = cljs.core.atom.call(null,total);
cljs.core.run_BANG_.call(null,(function (p1__27677_SHARP_){
return promesa.protocols._fnly.call(null,p1__27677_SHARP_,(function (_,___$1){
if(cljs.core._EQ_.call(null,(0),cljs.core.swap_BANG_.call(null,counter_27678,cljs.core.dec))){
return promesa.protocols._resolve_BANG_.call(null,prom,null);
} else {
return null;
}
}));
}),promises__$1);
} else {
promesa.protocols._resolve_BANG_.call(null,prom,null);
}

return prom;
});
/**
 * Given a variable number of promises, returns a promise which resolves
 *   to `nil` when all provided promises complete (rejected or resolved).
 * 
 *   **EXPERIMENTAL**
 */
promesa.core.wait_all = (function promesa$core$wait_all(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27680 = arguments.length;
var i__5767__auto___27681 = (0);
while(true){
if((i__5767__auto___27681 < len__5766__auto___27680)){
args__5772__auto__.push((arguments[i__5767__auto___27681]));

var G__27682 = (i__5767__auto___27681 + (1));
i__5767__auto___27681 = G__27682;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return promesa.core.wait_all.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(promesa.core.wait_all.cljs$core$IFn$_invoke$arity$variadic = (function (promises){
return promesa.core.wait_all_STAR_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,promises));
}));

(promesa.core.wait_all.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(promesa.core.wait_all.cljs$lang$applyTo = (function (seq27679){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27679));
}));

/**
 * A promise aware run! function. Executed in terms of `then` rules.
 */
promesa.core.run_BANG_ = (function promesa$core$run_BANG_(var_args){
var G__27688 = arguments.length;
switch (G__27688) {
case 2:
return promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return promesa.protocols._fmap.call(null,cljs.core.reduce.call(null,(function (p1__27683_SHARP_,p2__27684_SHARP_){
return promesa.core.then.call(null,p1__27683_SHARP_,(function (_){
return f.call(null,p2__27684_SHARP_);
}));
}),promesa.impl.resolved.call(null,null),coll),cljs.core.constantly.call(null,null));
}));

(promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,coll,executor){
return promesa.protocols._fmap.call(null,cljs.core.reduce.call(null,(function (p1__27685_SHARP_,p2__27686_SHARP_){
return promesa.core.then.call(null,p1__27685_SHARP_,(function (_){
return f.call(null,p2__27686_SHARP_);
}),executor);
}),promesa.impl.resolved.call(null,null),coll),cljs.core.constantly.call(null,null));
}));

(promesa.core.run_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Cancel the promise.
 */
promesa.core.cancel_BANG_ = (function promesa$core$cancel_BANG_(p){
promesa.protocols._cancel_BANG_.call(null,p);

return p;
});
/**
 * Return true if `v` is a cancelled promise.
 */
promesa.core.cancelled_QMARK_ = (function promesa$core$cancelled_QMARK_(v){
return promesa.protocols._cancelled_QMARK_.call(null,v);
});
/**
 * Resolve a completable promise with a value.
 */
promesa.core.resolve_BANG_ = (function promesa$core$resolve_BANG_(var_args){
var G__27691 = arguments.length;
switch (G__27691) {
case 1:
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (o){
return promesa.protocols._resolve_BANG_.call(null,o,null);
}));

(promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (o,v){
return promesa.protocols._resolve_BANG_.call(null,o,v);
}));

(promesa.core.resolve_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Reject a completable promise with an error.
 */
promesa.core.reject_BANG_ = (function promesa$core$reject_BANG_(p,e){
return promesa.protocols._reject_BANG_.call(null,p,e);
});
/**
 * Given a function that accepts a callback as the last argument, return a
 *   function that returns a promise. Callback is expected to take one
 *   parameter (result of a computation).
 */
promesa.core.promisify = (function promesa$core$promisify(callable){
return (function() { 
var G__27694__delegate = function (args){
return promesa.core.create.call(null,(function (resolve,reject){
var args__$1 = cljs.core.conj.call(null,cljs.core.vec.call(null,args),resolve);
try{return cljs.core.apply.call(null,callable,args__$1);
}catch (e27693){if((e27693 instanceof Error)){
var e = e27693;
return reject.call(null,e);
} else {
throw e27693;

}
}}));
};
var G__27694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27695__i = 0, G__27695__a = new Array(arguments.length -  0);
while (G__27695__i < G__27695__a.length) {G__27695__a[G__27695__i] = arguments[G__27695__i + 0]; ++G__27695__i;}
  args = new cljs.core.IndexedSeq(G__27695__a,0,null);
} 
return G__27694__delegate.call(this,args);};
G__27694.cljs$lang$maxFixedArity = 0;
G__27694.cljs$lang$applyTo = (function (arglist__27696){
var args = cljs.core.seq(arglist__27696);
return G__27694__delegate(args);
});
G__27694.cljs$core$IFn$_invoke$arity$variadic = G__27694__delegate;
return G__27694;
})()
;
});
/**
 * @constructor
 */
promesa.core.TimeoutException = (function promesa$core$TimeoutException(message){
var it = this;
Error.call(it,message,cljs.core.PersistentArrayMap.EMPTY,null);

return it;
});
goog.inherits(promesa.core.TimeoutException,Error);
/**
 * Returns a cancellable promise that will be fulfilled with this
 *   promise's fulfillment value or rejection reason.  However, if this
 *   promise is not fulfilled or rejected within `ms` milliseconds, the
 *   returned promise is cancelled with a TimeoutError.
 */
promesa.core.timeout = (function promesa$core$timeout(var_args){
var G__27698 = arguments.length;
switch (G__27698) {
case 2:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (p,t){
return promesa.core.timeout.call(null,p,t,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826),new cljs.core.Keyword(null,"default","default",-1987822328));
}));

(promesa.core.timeout.cljs$core$IFn$_invoke$arity$3 = (function (p,t,v){
return promesa.core.timeout.call(null,p,t,v,new cljs.core.Keyword(null,"default","default",-1987822328));
}));

(promesa.core.timeout.cljs$core$IFn$_invoke$arity$4 = (function (p,t,v,scheduler){
var timeout = promesa.core.deferred.call(null);
var tid = promesa.exec.schedule_BANG_.call(null,scheduler,t,(function (){
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("promesa.core","default","promesa.core/default",1773193826))){
return promesa.core.reject_BANG_.call(null,timeout,(new promesa.core.TimeoutException("Operation timed out.")));
} else {
return promesa.core.resolve_BANG_.call(null,timeout,v);
}
}));
return promesa.core.race.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.core.fnly.call(null,(function (_,___$1){
return promesa.protocols._cancel_BANG_.call(null,tid);
}),p),timeout], null));
}));

(promesa.core.timeout.cljs$lang$maxFixedArity = 4);

/**
 * Given a timeout in miliseconds and optional value, returns a promise
 *   that will be fulfilled with provided value (or nil) after the time is
 *   reached.
 */
promesa.core.delay = (function promesa$core$delay(var_args){
var G__27701 = arguments.length;
switch (G__27701) {
case 1:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.delay.cljs$core$IFn$_invoke$arity$1 = (function (t){
return promesa.core.delay.call(null,t,null,new cljs.core.Keyword(null,"default","default",-1987822328));
}));

(promesa.core.delay.cljs$core$IFn$_invoke$arity$2 = (function (t,v){
return promesa.core.delay.call(null,t,v,new cljs.core.Keyword(null,"default","default",-1987822328));
}));

(promesa.core.delay.cljs$core$IFn$_invoke$arity$3 = (function (t,v,scheduler){
var d = promesa.core.deferred.call(null);
promesa.exec.schedule_BANG_.call(null,scheduler,t,(function (){
return promesa.core.resolve_BANG_.call(null,d,v);
}));

return d;
}));

(promesa.core.delay.cljs$lang$maxFixedArity = 3);

var ret__5821__auto___27710 = (function (){
/**
 * An exception unsafe do-like macro. Supposes that we are already
 *   wrapped in promise context so avoids defensive wrapping.
 */
promesa.core.do_STAR_ = (function promesa$core$do_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27711 = arguments.length;
var i__5767__auto___27712 = (0);
while(true){
if((i__5767__auto___27712 < len__5766__auto___27711)){
args__5772__auto__.push((arguments[i__5767__auto___27712]));

var G__27713 = (i__5767__auto___27712 + (1));
i__5767__auto___27712 = G__27713;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return promesa.core.do_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(promesa.core.do_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
var pred__27707 = cljs.core._EQ_;
var expr__27708 = cljs.core.count.call(null,exprs);
if(cljs.core.truth_(pred__27707.call(null,(0),expr__27708))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.impl","resolved","promesa.impl/resolved",-72031341,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
} else {
if(cljs.core.truth_(pred__27707.call(null,(1),expr__27708))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,exprs),null,(1),null)))));
} else {
return cljs.core.reduce.call(null,(function (acc,e){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-mcat","promesa.protocols/-mcat",-1426184094,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,e,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___27703__auto__","___27703__auto__",-775616666,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null))))),null,(1),null)))));
}),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,cljs.core.last.call(null,exprs),null,(1),null))))),cljs.core.reverse.call(null,cljs.core.butlast.call(null,exprs)));
}
}
}));

(promesa.core.do_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core.do_STAR_.cljs$lang$applyTo = (function (seq27704){
var G__27705 = cljs.core.first.call(null,seq27704);
var seq27704__$1 = cljs.core.next.call(null,seq27704);
var G__27706 = cljs.core.first.call(null,seq27704__$1);
var seq27704__$2 = cljs.core.next.call(null,seq27704__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27705,G__27706,seq27704__$2);
}));

return null;
})()
;
(promesa.core.do_STAR_.cljs$lang$macro = true);

var ret__5821__auto___27718 = (function (){
/**
 * Execute potentially side effectful code and return a promise resolved
 *   to the last expression after awaiting the result of each
 *   expression.
 */
promesa.core.do$ = (function promesa$core$do(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27719 = arguments.length;
var i__5767__auto___27720 = (0);
while(true){
if((i__5767__auto___27720 < len__5766__auto___27719)){
args__5772__auto__.push((arguments[i__5767__auto___27720]));

var G__27721 = (i__5767__auto___27720 + (1));
i__5767__auto___27720 = G__27721;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return promesa.core.do$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(promesa.core.do$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-mcat","promesa.protocols/-mcat",-1426184094,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___27714__auto__","___27714__auto__",-2136412172,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do*","promesa.core/do*",-1752305515,null),null,(1),null)),exprs))),null,(1),null))))),null,(1),null)))));
}));

(promesa.core.do$.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core.do$.cljs$lang$applyTo = (function (seq27715){
var G__27716 = cljs.core.first.call(null,seq27715);
var seq27715__$1 = cljs.core.next.call(null,seq27715);
var G__27717 = cljs.core.first.call(null,seq27715__$1);
var seq27715__$2 = cljs.core.next.call(null,seq27715__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27716,G__27717,seq27715__$2);
}));

return null;
})()
;
(promesa.core.do$.cljs$lang$macro = true);

var ret__5821__auto___27725 = (function (){
/**
 * A convenience alias for `do` macro.
 */
promesa.core.do_BANG_ = (function promesa$core$do_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27726 = arguments.length;
var i__5767__auto___27727 = (0);
while(true){
if((i__5767__auto___27727 < len__5766__auto___27726)){
args__5772__auto__.push((arguments[i__5767__auto___27727]));

var G__27728 = (i__5767__auto___27727 + (1));
i__5767__auto___27727 = G__27728;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return promesa.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(promesa.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do","promesa.core/do",79683106,null),null,(1),null)),exprs)));
}));

(promesa.core.do_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core.do_BANG_.cljs$lang$applyTo = (function (seq27722){
var G__27723 = cljs.core.first.call(null,seq27722);
var seq27722__$1 = cljs.core.next.call(null,seq27722);
var G__27724 = cljs.core.first.call(null,seq27722__$1);
var seq27722__$2 = cljs.core.next.call(null,seq27722__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27723,G__27724,seq27722__$2);
}));

return null;
})()
;
(promesa.core.do_BANG_.cljs$lang$macro = true);

var ret__5821__auto___27737 = (function (){
/**
 * An exception unsafe let-like macro. Supposes that we are already
 *   wrapped in promise context so avoids defensive wrapping.
 */
promesa.core.let_STAR_ = (function promesa$core$let_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27738 = arguments.length;
var i__5767__auto___27739 = (0);
while(true){
if((i__5767__auto___27739 < len__5766__auto___27738)){
args__5772__auto__.push((arguments[i__5767__auto___27739]));

var G__27740 = (i__5767__auto___27739 + (1));
i__5767__auto___27739 = G__27740;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return promesa.core.let_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(promesa.core.let_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw (new Error(["Assert failed: ",["Uneven binding vector: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bindings)].join(''),"\n","(even? (count bindings))"].join('')));
}

return cljs.core.reduce.call(null,(function (acc,p__27733){
var vec__27734 = p__27733;
var l = cljs.core.nth.call(null,vec__27734,(0),null);
var r = cljs.core.nth.call(null,vec__27734,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-mcat","promesa.protocols/-mcat",-1426184094,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,l,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null))))),null,(1),null)))));
}),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do*","promesa.core/do*",-1752305515,null),null,(1),null)),body))),cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),bindings)));
}));

(promesa.core.let_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.let_STAR_.cljs$lang$applyTo = (function (seq27729){
var G__27730 = cljs.core.first.call(null,seq27729);
var seq27729__$1 = cljs.core.next.call(null,seq27729);
var G__27731 = cljs.core.first.call(null,seq27729__$1);
var seq27729__$2 = cljs.core.next.call(null,seq27729__$1);
var G__27732 = cljs.core.first.call(null,seq27729__$2);
var seq27729__$3 = cljs.core.next.call(null,seq27729__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27730,G__27731,G__27732,seq27729__$3);
}));

return null;
})()
;
(promesa.core.let_STAR_.cljs$lang$macro = true);

var ret__5821__auto___27746 = (function (){
/**
 * A `let` alternative that always returns promise and waits for all the
 *   promises on the bindings.
 */
promesa.core.let$ = (function promesa$core$let(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27747 = arguments.length;
var i__5767__auto___27748 = (0);
while(true){
if((i__5767__auto___27748 < len__5766__auto___27747)){
args__5772__auto__.push((arguments[i__5767__auto___27748]));

var G__27749 = (i__5767__auto___27748 + (1));
i__5767__auto___27748 = G__27749;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return promesa.core.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(promesa.core.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.seq.call(null,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-mcat","promesa.protocols/-mcat",-1426184094,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___27741__auto__","___27741__auto__",1956753335,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","let*","promesa.core/let*",-1840819052,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do","promesa.core/do",79683106,null),null,(1),null)),body)));
}
}));

(promesa.core.let$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.let$.cljs$lang$applyTo = (function (seq27742){
var G__27743 = cljs.core.first.call(null,seq27742);
var seq27742__$1 = cljs.core.next.call(null,seq27742);
var G__27744 = cljs.core.first.call(null,seq27742__$1);
var seq27742__$2 = cljs.core.next.call(null,seq27742__$1);
var G__27745 = cljs.core.first.call(null,seq27742__$2);
var seq27742__$3 = cljs.core.next.call(null,seq27742__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27743,G__27744,G__27745,seq27742__$3);
}));

return null;
})()
;
(promesa.core.let$.cljs$lang$macro = true);

var ret__5821__auto___27755 = (function (){
/**
 * A parallel let; executes all the bindings in parallel and when all
 *   bindings are resolved, executes the body.
 */
promesa.core.plet = (function promesa$core$plet(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27756 = arguments.length;
var i__5767__auto___27757 = (0);
while(true){
if((i__5767__auto___27757 < len__5766__auto___27756)){
args__5772__auto__.push((arguments[i__5767__auto___27757]));

var G__27758 = (i__5767__auto___27757 + (1));
i__5767__auto___27757 = G__27758;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return promesa.core.plet.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(promesa.core.plet.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw (new Error(["Assert failed: ",["Uneven binding vector: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bindings)].join(''),"\n","(even? (count bindings))"].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-mcat","promesa.protocols/-mcat",-1426184094,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___27750__auto__","___27750__auto__",-522829189,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,(function (){var bindings__$1 = cljs.core.partition.call(null,(2),bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","all","promesa.core/all",-152914545,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.call(null,cljs.core.second,bindings__$1),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","bind","promesa.core/bind",990464492,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,bindings__$1))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do*","promesa.core/do*",-1752305515,null),null,(1),null)),body))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
})(),null,(1),null))))),null,(1),null)))));
}));

(promesa.core.plet.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.plet.cljs$lang$applyTo = (function (seq27751){
var G__27752 = cljs.core.first.call(null,seq27751);
var seq27751__$1 = cljs.core.next.call(null,seq27751);
var G__27753 = cljs.core.first.call(null,seq27751__$1);
var seq27751__$2 = cljs.core.next.call(null,seq27751__$1);
var G__27754 = cljs.core.first.call(null,seq27751__$2);
var seq27751__$3 = cljs.core.next.call(null,seq27751__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27752,G__27753,G__27754,seq27751__$3);
}));

return null;
})()
;
(promesa.core.plet.cljs$lang$macro = true);

/**
 * Analogous to `clojure.core.async/thread` that returns a promise
 *   instance instead of the `Future`. Useful for executing synchronous
 *   code in a separate thread (also works in cljs).
 */
promesa.core.thread_call = (function promesa$core$thread_call(var_args){
var G__27760 = arguments.length;
switch (G__27760) {
case 1:
return promesa.core.thread_call.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.thread_call.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.core.thread_call.cljs$core$IFn$_invoke$arity$1 = (function (f){
return promesa.exec.submit_BANG_.call(null,new cljs.core.Keyword(null,"thread","thread",947001524),promesa.exec.wrap_bindings.call(null,f));
}));

(promesa.core.thread_call.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
return promesa.exec.submit_BANG_.call(null,executor,promesa.exec.wrap_bindings.call(null,f));
}));

(promesa.core.thread_call.cljs$lang$maxFixedArity = 2);

/**
 * A shortcut for `(p/thread-call :vthread f)`.
 */
promesa.core.vthread_call = (function promesa$core$vthread_call(f){
return promesa.core.thread_call.call(null,new cljs.core.Keyword(null,"vthread","vthread",441141075),f);
});
var ret__5821__auto___27765 = (function (){
/**
 * Analogous to `clojure.core.async/thread` that returns a promise instance
 *   instead of the `Future`.
 */
promesa.core.thread = (function promesa$core$thread(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27766 = arguments.length;
var i__5767__auto___27767 = (0);
while(true){
if((i__5767__auto___27767 < len__5766__auto___27766)){
args__5772__auto__.push((arguments[i__5767__auto___27767]));

var G__27768 = (i__5767__auto___27767 + (1));
i__5767__auto___27767 = G__27768;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return promesa.core.thread.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(promesa.core.thread.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","thread-call","promesa.core/thread-call",472685991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/home/runner/work/juliaworld/juliaworld/target/public/cljs-out/dev/promesa/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,625,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,625,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,26,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","once","promesa.core/once",841917718,null),null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(promesa.core.thread.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core.thread.cljs$lang$applyTo = (function (seq27762){
var G__27763 = cljs.core.first.call(null,seq27762);
var seq27762__$1 = cljs.core.next.call(null,seq27762);
var G__27764 = cljs.core.first.call(null,seq27762__$1);
var seq27762__$2 = cljs.core.next.call(null,seq27762__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27763,G__27764,seq27762__$2);
}));

return null;
})()
;
(promesa.core.thread.cljs$lang$macro = true);

var ret__5821__auto___27772 = (function (){
/**
 * Analogous to `clojure.core.async/thread` that returns a promise instance
 *   instead of the `Future`. Useful for executing synchronous code in a
 *   separate thread (also works in cljs).
 */
promesa.core.vthread = (function promesa$core$vthread(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27773 = arguments.length;
var i__5767__auto___27774 = (0);
while(true){
if((i__5767__auto___27774 < len__5766__auto___27773)){
args__5772__auto__.push((arguments[i__5767__auto___27774]));

var G__27775 = (i__5767__auto___27774 + (1));
i__5767__auto___27774 = G__27775;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return promesa.core.vthread.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(promesa.core.vthread.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","vthread-call","promesa.core/vthread-call",-762411410,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/home/runner/work/juliaworld/juliaworld/target/public/cljs-out/dev/promesa/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,632,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,25,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,632,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,27,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","once","promesa.core/once",841917718,null),null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(promesa.core.vthread.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core.vthread.cljs$lang$applyTo = (function (seq27769){
var G__27770 = cljs.core.first.call(null,seq27769);
var seq27769__$1 = cljs.core.next.call(null,seq27769);
var G__27771 = cljs.core.first.call(null,seq27769__$1);
var seq27769__$2 = cljs.core.next.call(null,seq27769__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27770,G__27771,seq27769__$2);
}));

return null;
})()
;
(promesa.core.vthread.cljs$lang$macro = true);

var ret__5821__auto___27779 = (function (){
/**
 * Analogous macro to `clojure.core/future` that returns promise
 *   instance instead of the `Future`. Exposed just for convenience and
 *   works as an alias to `thread`.
 */
promesa.core.future = (function promesa$core$future(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27780 = arguments.length;
var i__5767__auto___27781 = (0);
while(true){
if((i__5767__auto___27781 < len__5766__auto___27780)){
args__5772__auto__.push((arguments[i__5767__auto___27781]));

var G__27782 = (i__5767__auto___27781 + (1));
i__5767__auto___27781 = G__27782;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return promesa.core.future.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(promesa.core.future.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","thread-call","promesa.core/thread-call",472685991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/home/runner/work/juliaworld/juliaworld/target/public/cljs-out/dev/promesa/core.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,639,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,33,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,639,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,35,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","once","promesa.core/once",841917718,null),null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null)))));
}));

(promesa.core.future.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core.future.cljs$lang$applyTo = (function (seq27776){
var G__27777 = cljs.core.first.call(null,seq27776);
var seq27776__$1 = cljs.core.next.call(null,seq27776);
var G__27778 = cljs.core.first.call(null,seq27776__$1);
var seq27776__$2 = cljs.core.next.call(null,seq27776__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27777,G__27778,seq27776__$2);
}));

return null;
})()
;
(promesa.core.future.cljs$lang$macro = true);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
promesa.core.Recur = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(promesa.core.Recur.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(promesa.core.Recur.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k27784,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__27788 = k27784;
var G__27788__$1 = (((G__27788 instanceof cljs.core.Keyword))?G__27788.fqn:null);
switch (G__27788__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27784,else__5343__auto__);

}
}));

(promesa.core.Recur.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__27789){
var vec__27790 = p__27789;
var k__5364__auto__ = cljs.core.nth.call(null,vec__27790,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__27790,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(promesa.core.Recur.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#promesa.core.Recur{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
}));

(promesa.core.Recur.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27783){
var self__ = this;
var G__27783__$1 = this;
return (new cljs.core.RecordIter((0),G__27783__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(promesa.core.Recur.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(promesa.core.Recur.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new promesa.core.Recur(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
}));

(promesa.core.Recur.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(promesa.core.Recur.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-404494900 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(promesa.core.Recur.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27785,other27786){
var self__ = this;
var this27785__$1 = this;
return (((!((other27786 == null)))) && ((((this27785__$1.constructor === other27786.constructor)) && (((cljs.core._EQ_.call(null,this27785__$1.bindings,other27786.bindings)) && (cljs.core._EQ_.call(null,this27785__$1.__extmap,other27786.__extmap)))))));
}));

(promesa.core.Recur.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new promesa.core.Recur(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(promesa.core.Recur.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k27784){
var self__ = this;
var this__5347__auto____$1 = this;
var G__27793 = k27784;
var G__27793__$1 = (((G__27793 instanceof cljs.core.Keyword))?G__27793.fqn:null);
switch (G__27793__$1) {
case "bindings":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k27784);

}
}));

(promesa.core.Recur.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__27783){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__27794 = cljs.core.keyword_identical_QMARK_;
var expr__27795 = k__5349__auto__;
if(cljs.core.truth_(pred__27794.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__27795))){
return (new promesa.core.Recur(G__27783,self__.__meta,self__.__extmap,null));
} else {
return (new promesa.core.Recur(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__27783),null));
}
}));

(promesa.core.Recur.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null))], null),self__.__extmap));
}));

(promesa.core.Recur.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__27783){
var self__ = this;
var this__5339__auto____$1 = this;
return (new promesa.core.Recur(self__.bindings,G__27783,self__.__extmap,self__.__hash));
}));

(promesa.core.Recur.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(promesa.core.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
}));

(promesa.core.Recur.cljs$lang$type = true);

(promesa.core.Recur.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"promesa.core/Recur",null,(1),null));
}));

(promesa.core.Recur.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"promesa.core/Recur");
}));

/**
 * Positional factory function for promesa.core/Recur.
 */
promesa.core.__GT_Recur = (function promesa$core$__GT_Recur(bindings){
return (new promesa.core.Recur(bindings,null,null,null));
});

/**
 * Factory function for promesa.core/Recur, taking a map of keywords to field values.
 */
promesa.core.map__GT_Recur = (function promesa$core$map__GT_Recur(G__27787){
var extmap__5382__auto__ = (function (){var G__27797 = cljs.core.dissoc.call(null,G__27787,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
if(cljs.core.record_QMARK_.call(null,G__27787)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27797);
} else {
return G__27797;
}
})();
return (new promesa.core.Recur(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__27787),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});

promesa.core.recur_QMARK_ = (function promesa$core$recur_QMARK_(o){
return (o instanceof promesa.core.Recur);
});
var ret__5821__auto___27804 = (function (){
promesa.core.loop = (function promesa$core$loop(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27805 = arguments.length;
var i__5767__auto___27806 = (0);
while(true){
if((i__5767__auto___27806 < len__5766__auto___27805)){
args__5772__auto__.push((arguments[i__5767__auto___27806]));

var G__27807 = (i__5767__auto___27806 + (1));
i__5767__auto___27806 = G__27807;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return promesa.core.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(promesa.core.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var binds = cljs.core.partition.call(null,(2),(2),bindings);
var names = cljs.core.map.call(null,cljs.core.first,binds);
var fvals = cljs.core.map.call(null,cljs.core.second,binds);
var tsym = cljs.core.gensym.call(null,"loop-fn-");
var res_s = cljs.core.gensym.call(null,"res-");
var err_s = cljs.core.gensym.call(null,"err-");
var rej_s = cljs.core.gensym.call(null,"reject-fn-");
var rsv_s = cljs.core.gensym.call(null,"resolve-fn-");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","create","promesa.core/create",1948896117,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,rsv_s,null,(1),null)),(new cljs.core.List(null,rej_s,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,names)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","let","promesa.core/let",895780400,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,(function (nsym){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsym,nsym], null);
}),names))))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","fnly","promesa.core/fnly",-1851753835,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,res_s,null,(1),null)),(new cljs.core.List(null,err_s,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,err_s,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,rej_s,null,(1),null)),(new cljs.core.List(null,err_s,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","recur?","promesa.core/recur?",-1342672272,null),null,(1),null)),(new cljs.core.List(null,res_s,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.exec","run!","promesa.exec/run!",-1525716417,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"vthread","vthread",441141075),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.exec","wrap-bindings","promesa.exec/wrap-bindings",-193702330,null),null,(1),null)),(new cljs.core.List(null,((cljs.core.seq.call(null,names))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),null,(1),null)),(new cljs.core.List(null,res_s,null,(1),null))))),null,(1),null))))),null,(1),null))))):tsym),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,rsv_s,null,(1),null)),(new cljs.core.List(null,res_s,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.exec","run!","promesa.exec/run!",-1525716417,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"vthread","vthread",441141075),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.exec","wrap-bindings","promesa.exec/wrap-bindings",-193702330,null),null,(1),null)),(new cljs.core.List(null,((cljs.core.seq.call(null,names))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,tsym,null,(1),null)),fvals))),null,(1),null))))):tsym),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(promesa.core.loop.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.loop.cljs$lang$applyTo = (function (seq27800){
var G__27801 = cljs.core.first.call(null,seq27800);
var seq27800__$1 = cljs.core.next.call(null,seq27800);
var G__27802 = cljs.core.first.call(null,seq27800__$1);
var seq27800__$2 = cljs.core.next.call(null,seq27800__$1);
var G__27803 = cljs.core.first.call(null,seq27800__$2);
var seq27800__$3 = cljs.core.next.call(null,seq27800__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27801,G__27802,G__27803,seq27800__$3);
}));

return null;
})()
;
(promesa.core.loop.cljs$lang$macro = true);

var ret__5821__auto___27811 = (function (){
promesa.core.recur = (function promesa$core$recur(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27812 = arguments.length;
var i__5767__auto___27813 = (0);
while(true){
if((i__5767__auto___27813 < len__5766__auto___27812)){
args__5772__auto__.push((arguments[i__5767__auto___27813]));

var G__27814 = (i__5767__auto___27813 + (1));
i__5767__auto___27813 = G__27814;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return promesa.core.recur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(promesa.core.recur.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","->Recur","promesa.core/->Recur",794147535,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,args)))),null,(1),null)))));
}));

(promesa.core.recur.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core.recur.cljs$lang$applyTo = (function (seq27808){
var G__27809 = cljs.core.first.call(null,seq27808);
var seq27808__$1 = cljs.core.next.call(null,seq27808);
var G__27810 = cljs.core.first.call(null,seq27808__$1);
var seq27808__$2 = cljs.core.next.call(null,seq27808__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27809,G__27810,seq27808__$2);
}));

return null;
})()
;
(promesa.core.recur.cljs$lang$macro = true);

var ret__5821__auto___27823 = (function (){
/**
 * Like the clojure.core/->, but it will handle promises in values
 *   and make sure the next form gets the value realized instead of
 *   the promise.
 * 
 *   Example fetching data in the browser with CLJS:
 * 
 *   (p/-> (js/fetch #js {...}) ; returns a promise
 *      .-body)
 * 
 *   The result of a thread is a promise that will resolve to the
 *   end of the thread chain.
 */
promesa.core.__GT_ = (function promesa$core$__GT_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27824 = arguments.length;
var i__5767__auto___27825 = (0);
while(true){
if((i__5767__auto___27825 < len__5766__auto___27824)){
args__5772__auto__.push((arguments[i__5767__auto___27825]));

var G__27826 = (i__5767__auto___27825 + (1));
i__5767__auto___27825 = G__27826;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return promesa.core.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(promesa.core.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var fns = cljs.core.mapv.call(null,(function (arg){
var vec__27820 = ((cljs.core.sequential_QMARK_.call(null,arg))?arg:(new cljs.core.List(null,arg,null,(1),null)));
var seq__27821 = cljs.core.seq.call(null,vec__27820);
var first__27822 = cljs.core.first.call(null,seq__27821);
var seq__27821__$1 = cljs.core.next.call(null,seq__27821);
var f = first__27822;
var args = seq__27821__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p__27815__auto__","p__27815__auto__",-1801437942,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p__27815__auto__","p__27815__auto__",-1801437942,null),null,(1),null)),args))),null,(1),null)))));
}),forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","chain","promesa.core/chain",-2105367206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),fns)));
}));

(promesa.core.__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.__GT_.cljs$lang$applyTo = (function (seq27816){
var G__27817 = cljs.core.first.call(null,seq27816);
var seq27816__$1 = cljs.core.next.call(null,seq27816);
var G__27818 = cljs.core.first.call(null,seq27816__$1);
var seq27816__$2 = cljs.core.next.call(null,seq27816__$1);
var G__27819 = cljs.core.first.call(null,seq27816__$2);
var seq27816__$3 = cljs.core.next.call(null,seq27816__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27817,G__27818,G__27819,seq27816__$3);
}));

return null;
})()
;
(promesa.core.__GT_.cljs$lang$macro = true);

var ret__5821__auto___27835 = (function (){
/**
 * Like the clojure.core/->>, but it will handle promises in values
 *   and make sure the next form gets the value realized instead of
 *   the promise.
 * 
 *   Example fetching data in the browser with CLJS:
 * 
 *   (p/->> (js/fetch #js {...}) ; returns a promise
 *       .-body
 *       read-string
 *       (mapv inc)
 * 
 *   The result of a thread is a promise that will resolve to the
 *   end of the thread chain.
 */
promesa.core.__GT__GT_ = (function promesa$core$__GT__GT_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27836 = arguments.length;
var i__5767__auto___27837 = (0);
while(true){
if((i__5767__auto___27837 < len__5766__auto___27836)){
args__5772__auto__.push((arguments[i__5767__auto___27837]));

var G__27838 = (i__5767__auto___27837 + (1));
i__5767__auto___27837 = G__27838;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return promesa.core.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(promesa.core.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var fns = cljs.core.mapv.call(null,(function (arg){
var vec__27832 = ((cljs.core.sequential_QMARK_.call(null,arg))?arg:(new cljs.core.List(null,arg,null,(1),null)));
var seq__27833 = cljs.core.seq.call(null,vec__27832);
var first__27834 = cljs.core.first.call(null,seq__27833);
var seq__27833__$1 = cljs.core.next.call(null,seq__27833);
var f = first__27834;
var args = seq__27833__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p__27827__auto__","p__27827__auto__",1384582079,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f,null,(1),null)),args,(new cljs.core.List(null,new cljs.core.Symbol(null,"p__27827__auto__","p__27827__auto__",1384582079,null),null,(1),null))))),null,(1),null)))));
}),forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","chain","promesa.core/chain",-2105367206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),fns)));
}));

(promesa.core.__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.__GT__GT_.cljs$lang$applyTo = (function (seq27828){
var G__27829 = cljs.core.first.call(null,seq27828);
var seq27828__$1 = cljs.core.next.call(null,seq27828);
var G__27830 = cljs.core.first.call(null,seq27828__$1);
var seq27828__$2 = cljs.core.next.call(null,seq27828__$1);
var G__27831 = cljs.core.first.call(null,seq27828__$2);
var seq27828__$3 = cljs.core.next.call(null,seq27828__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27829,G__27830,G__27831,seq27828__$3);
}));

return null;
})()
;
(promesa.core.__GT__GT_.cljs$lang$macro = true);

var ret__5821__auto___27844 = (function (){
/**
 * Like clojure.core/as->, but it will handle promises in values
 * and make sure the next form gets the value realized instead of
 * the promise.
 */
promesa.core.as__GT_ = (function promesa$core$as__GT_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27845 = arguments.length;
var i__5767__auto___27846 = (0);
while(true){
if((i__5767__auto___27846 < len__5766__auto___27845)){
args__5772__auto__.push((arguments[i__5767__auto___27846]));

var G__27847 = (i__5767__auto___27846 + (1));
i__5767__auto___27846 = G__27847;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return promesa.core.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(promesa.core.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","let","promesa.core/let",895780400,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),cljs.core.butlast.call(null,forms)))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_.call(null,forms))?name:cljs.core.last.call(null,forms)),null,(1),null)))));
}));

(promesa.core.as__GT_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(promesa.core.as__GT_.cljs$lang$applyTo = (function (seq27839){
var G__27840 = cljs.core.first.call(null,seq27839);
var seq27839__$1 = cljs.core.next.call(null,seq27839);
var G__27841 = cljs.core.first.call(null,seq27839__$1);
var seq27839__$2 = cljs.core.next.call(null,seq27839__$1);
var G__27842 = cljs.core.first.call(null,seq27839__$2);
var seq27839__$3 = cljs.core.next.call(null,seq27839__$2);
var G__27843 = cljs.core.first.call(null,seq27839__$3);
var seq27839__$4 = cljs.core.next.call(null,seq27839__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27840,G__27841,G__27842,G__27843,seq27839__$4);
}));

return null;
})()
;
(promesa.core.as__GT_.cljs$lang$macro = true);

var ret__5821__auto___27863 = (function (){
/**
 * Like clojure.core/with-redefs, but it will handle promises in
 * body and wait until they resolve or reject before restoring the
 * bindings. Useful for mocking async APIs.
 */
promesa.core.with_redefs = (function promesa$core$with_redefs(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27864 = arguments.length;
var i__5767__auto___27865 = (0);
while(true){
if((i__5767__auto___27865 < len__5766__auto___27864)){
args__5772__auto__.push((arguments[i__5767__auto___27865]));

var G__27866 = (i__5767__auto___27865 + (1));
i__5767__auto___27865 = G__27866;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return promesa.core.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(promesa.core.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var orig_val_syms = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,(function (p1__27848_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27848_SHARP_),"-orig-val__"].join('');
}),cljs.core.name),names);
var temp_val_syms = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,(function (p1__27849_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27849_SHARP_),"-temp-val__"].join('');
}),cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,temp_val_syms);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,orig_val_syms));
var bind_value = (cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))?(function (p__27855){
var vec__27856 = p__27855;
var k = cljs.core.nth.call(null,vec__27856,(0),null);
var v = cljs.core.nth.call(null,vec__27856,(1),null);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),(new cljs.core.List(null,k,(new cljs.core.List(null,v,null,(1),null)),(2),null)),(3),null));
}):(function (p__27859){
var vec__27860 = p__27859;
var k = cljs.core.nth.call(null,vec__27860,(0),null);
var v = cljs.core.nth.call(null,vec__27860,(1),null);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"alter-var-root","alter-var-root",-1749458519,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"constantly","constantly",-271143939,null),(new cljs.core.List(null,v,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,orig_val_syms,names),cljs.core.interleave.call(null,temp_val_syms,vals))))),null,(1),null)),cljs.core.map.call(null,bind_value,binds),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do!","promesa.core/do!",12645930,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","finally","promesa.core/finally",-527135850,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___27850__auto__","___27850__auto__",-300746283,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"___27850__auto__","___27850__auto__",-300746283,null),null,(1),null)))))),null,(1),null)),cljs.core.map.call(null,bind_value,resets)))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(promesa.core.with_redefs.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.with_redefs.cljs$lang$applyTo = (function (seq27851){
var G__27852 = cljs.core.first.call(null,seq27851);
var seq27851__$1 = cljs.core.next.call(null,seq27851);
var G__27853 = cljs.core.first.call(null,seq27851__$1);
var seq27851__$2 = cljs.core.next.call(null,seq27851__$1);
var G__27854 = cljs.core.first.call(null,seq27851__$2);
var seq27851__$3 = cljs.core.next.call(null,seq27851__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27852,G__27853,G__27854,seq27851__$3);
}));

return null;
})()
;
(promesa.core.with_redefs.cljs$lang$macro = true);

var ret__5821__auto___27875 = (function (){
/**
 * Simplified version of `doseq` which takes one binding and a seq, and
 *   runs over it using `promesa.core/run!`
 */
promesa.core.doseq = (function promesa$core$doseq(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27876 = arguments.length;
var i__5767__auto___27877 = (0);
while(true){
if((i__5767__auto___27877 < len__5766__auto___27876)){
args__5772__auto__.push((arguments[i__5767__auto___27877]));

var G__27878 = (i__5767__auto___27877 + (1));
i__5767__auto___27877 = G__27878;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return promesa.core.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(promesa.core.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__27871,body){
var vec__27872 = p__27871;
var binding = cljs.core.nth.call(null,vec__27872,(0),null);
var xs = cljs.core.nth.call(null,vec__27872,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","run!","promesa.core/run!",-1526702839,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,binding,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do*","promesa.core/do*",-1752305515,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,xs,null,(1),null)))));
}));

(promesa.core.doseq.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.doseq.cljs$lang$applyTo = (function (seq27867){
var G__27868 = cljs.core.first.call(null,seq27867);
var seq27867__$1 = cljs.core.next.call(null,seq27867);
var G__27869 = cljs.core.first.call(null,seq27867__$1);
var seq27867__$2 = cljs.core.next.call(null,seq27867__$1);
var G__27870 = cljs.core.first.call(null,seq27867__$2);
var seq27867__$3 = cljs.core.next.call(null,seq27867__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27868,G__27869,G__27870,seq27867__$3);
}));

return null;
})()
;
(promesa.core.doseq.cljs$lang$macro = true);


//# sourceMappingURL=core.js.map

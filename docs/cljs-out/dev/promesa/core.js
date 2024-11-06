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
var G__11616 = arguments.length;
switch (G__11616) {
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
var G__11623 = arguments.length;
switch (G__11623) {
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
try{f.call(null,(function (p1__11618_SHARP_){
return promesa.protocols._resolve_BANG_.call(null,d,p1__11618_SHARP_);
}),(function (p1__11619_SHARP_){
return promesa.protocols._reject_BANG_.call(null,d,p1__11619_SHARP_);
}));
}catch (e11624){var e_11627 = e11624;
promesa.protocols._reject_BANG_.call(null,d,e_11627);
}
return d;
}));

(promesa.core.create.cljs$core$IFn$_invoke$arity$2 = (function (f,executor){
var d = promesa.impl.deferred.call(null);
promesa.exec.run_BANG_.call(null,executor,(function (){
try{return f.call(null,(function (p1__11620_SHARP_){
return promesa.protocols._resolve_BANG_.call(null,d,p1__11620_SHARP_);
}),(function (p1__11621_SHARP_){
return promesa.protocols._reject_BANG_.call(null,d,p1__11621_SHARP_);
}));
}catch (e11625){var e = e11625;
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
var G__11629 = arguments.length;
switch (G__11629) {
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
var G__11632 = arguments.length;
switch (G__11632) {
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
var G__11635 = arguments.length;
switch (G__11635) {
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
var G__11638 = arguments.length;
switch (G__11638) {
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
var G__11641 = arguments.length;
switch (G__11641) {
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
var G__11644 = arguments.length;
switch (G__11644) {
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
var G__11647 = arguments.length;
switch (G__11647) {
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
var G__11650 = arguments.length;
switch (G__11650) {
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
var G__11656 = arguments.length;
switch (G__11656) {
case 2:
return promesa.core.chain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___11658 = arguments.length;
var i__5767__auto___11659 = (0);
while(true){
if((i__5767__auto___11659 < len__5766__auto___11658)){
args_arr__5791__auto__.push((arguments[i__5767__auto___11659]));

var G__11660 = (i__5767__auto___11659 + (1));
i__5767__auto___11659 = G__11660;
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
(promesa.core.chain.cljs$lang$applyTo = (function (seq11653){
var G__11654 = cljs.core.first.call(null,seq11653);
var seq11653__$1 = cljs.core.next.call(null,seq11653);
var G__11655 = cljs.core.first.call(null,seq11653__$1);
var seq11653__$2 = cljs.core.next.call(null,seq11653__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11654,G__11655,seq11653__$2);
}));

(promesa.core.chain.cljs$lang$maxFixedArity = (2));

/**
 * Chain variable number of functions to be executed serially using
 *   `map`.
 */
promesa.core.chain_SINGLEQUOTE_ = (function promesa$core$chain_SINGLEQUOTE_(var_args){
var G__11667 = arguments.length;
switch (G__11667) {
case 2:
return promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___11669 = arguments.length;
var i__5767__auto___11670 = (0);
while(true){
if((i__5767__auto___11670 < len__5766__auto___11669)){
args_arr__5791__auto__.push((arguments[i__5767__auto___11670]));

var G__11671 = (i__5767__auto___11670 + (1));
i__5767__auto___11670 = G__11671;
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
return cljs.core.reduce.call(null,(function (p1__11662_SHARP_,p2__11661_SHARP_){
return promesa.core.map.call(null,p2__11661_SHARP_,p1__11662_SHARP_);
}),promesa.protocols._promise.call(null,p),cljs.core.cons.call(null,f,fs));
}));

/** @this {Function} */
(promesa.core.chain_SINGLEQUOTE_.cljs$lang$applyTo = (function (seq11664){
var G__11665 = cljs.core.first.call(null,seq11664);
var seq11664__$1 = cljs.core.next.call(null,seq11664);
var G__11666 = cljs.core.first.call(null,seq11664__$1);
var seq11664__$2 = cljs.core.next.call(null,seq11664__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11665,G__11666,seq11664__$2);
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
var G__11673 = arguments.length;
switch (G__11673) {
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
var G__11676 = arguments.length;
switch (G__11676) {
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
var G__11679 = arguments.length;
switch (G__11679) {
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
var G__11682 = arguments.length;
switch (G__11682) {
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
var G__11685 = arguments.length;
switch (G__11685) {
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
var G__11690 = arguments.length;
switch (G__11690) {
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
return promesa.protocols._merr.call(null,promesa.protocols._promise.call(null,p),(function (p1__11687_SHARP_){
return promesa.protocols._promise.call(null,f.call(null,p1__11687_SHARP_));
}));
}));

(promesa.core.catch$.cljs$core$IFn$_invoke$arity$3 = (function (p,pred_or_type,f){
var accept_QMARK_ = ((cljs.core.ifn_QMARK_.call(null,pred_or_type))?pred_or_type:(function (p1__11688_SHARP_){
return (p1__11688_SHARP_ instanceof pred_or_type);
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
var G__11693 = arguments.length;
switch (G__11693) {
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
var G__11696 = arguments.length;
switch (G__11696) {
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
var G__11699 = arguments.length;
switch (G__11699) {
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
var seq__11700 = cljs.core.seq.call(null,promises);
var chunk__11701 = null;
var count__11702 = (0);
var i__11703 = (0);
while(true){
if((i__11703 < count__11702)){
var p = cljs.core._nth.call(null,chunk__11701,i__11703);
promesa.protocols._fnly.call(null,promesa.protocols._promise.call(null,p),((function (seq__11700,chunk__11701,count__11702,i__11703,p,items,state,lock){
return (function (v,exception){
promesa.protocols._lock_BANG_.call(null,lock);

try{if(cljs.core.truth_(exception)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved?","resolved?",862515389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return null;
} else {
var state__$1 = cljs.core._vreset_BANG_.call(null,state,((function (seq__11700,chunk__11701,count__11702,i__11703,p,items,state,lock){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.update.call(null,state__$1,new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.conj,exception);
});})(seq__11700,chunk__11701,count__11702,i__11703,p,items,state,lock))
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
var map__11706 = cljs.core._vreset_BANG_.call(null,state,((function (seq__11700,chunk__11701,count__11702,i__11703,p,items,state,lock){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"resolved?","resolved?",862515389),true),new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p);
});})(seq__11700,chunk__11701,count__11702,i__11703,p,items,state,lock))
.call(null,cljs.core._deref.call(null,state)));
var map__11706__$1 = cljs.core.__destructure_map.call(null,map__11706);
var pending = cljs.core.get.call(null,map__11706__$1,new cljs.core.Keyword(null,"pending","pending",-220036727));
return resolve.call(null,v);
}
}
}finally {promesa.protocols._unlock_BANG_.call(null,lock);
}});})(seq__11700,chunk__11701,count__11702,i__11703,p,items,state,lock))
);


var G__11709 = seq__11700;
var G__11710 = chunk__11701;
var G__11711 = count__11702;
var G__11712 = (i__11703 + (1));
seq__11700 = G__11709;
chunk__11701 = G__11710;
count__11702 = G__11711;
i__11703 = G__11712;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11700);
if(temp__5804__auto__){
var seq__11700__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11700__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__11700__$1);
var G__11713 = cljs.core.chunk_rest.call(null,seq__11700__$1);
var G__11714 = c__5565__auto__;
var G__11715 = cljs.core.count.call(null,c__5565__auto__);
var G__11716 = (0);
seq__11700 = G__11713;
chunk__11701 = G__11714;
count__11702 = G__11715;
i__11703 = G__11716;
continue;
} else {
var p = cljs.core.first.call(null,seq__11700__$1);
promesa.protocols._fnly.call(null,promesa.protocols._promise.call(null,p),((function (seq__11700,chunk__11701,count__11702,i__11703,p,seq__11700__$1,temp__5804__auto__,items,state,lock){
return (function (v,exception){
promesa.protocols._lock_BANG_.call(null,lock);

try{if(cljs.core.truth_(exception)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved?","resolved?",862515389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return null;
} else {
var state__$1 = cljs.core._vreset_BANG_.call(null,state,((function (seq__11700,chunk__11701,count__11702,i__11703,p,seq__11700__$1,temp__5804__auto__,items,state,lock){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.update.call(null,state__$1,new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.conj,exception);
});})(seq__11700,chunk__11701,count__11702,i__11703,p,seq__11700__$1,temp__5804__auto__,items,state,lock))
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
var map__11707 = cljs.core._vreset_BANG_.call(null,state,((function (seq__11700,chunk__11701,count__11702,i__11703,p,seq__11700__$1,temp__5804__auto__,items,state,lock){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"resolved?","resolved?",862515389),true),new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p);
});})(seq__11700,chunk__11701,count__11702,i__11703,p,seq__11700__$1,temp__5804__auto__,items,state,lock))
.call(null,cljs.core._deref.call(null,state)));
var map__11707__$1 = cljs.core.__destructure_map.call(null,map__11707);
var pending = cljs.core.get.call(null,map__11707__$1,new cljs.core.Keyword(null,"pending","pending",-220036727));
return resolve.call(null,v);
}
}
}finally {promesa.protocols._unlock_BANG_.call(null,lock);
}});})(seq__11700,chunk__11701,count__11702,i__11703,p,seq__11700__$1,temp__5804__auto__,items,state,lock))
);


var G__11717 = cljs.core.next.call(null,seq__11700__$1);
var G__11718 = null;
var G__11719 = (0);
var G__11720 = (0);
seq__11700 = G__11717;
chunk__11701 = G__11718;
count__11702 = G__11719;
i__11703 = G__11720;
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
var counter_11722 = cljs.core.atom.call(null,total);
cljs.core.run_BANG_.call(null,(function (p1__11721_SHARP_){
return promesa.protocols._fnly.call(null,p1__11721_SHARP_,(function (_,___$1){
if(cljs.core._EQ_.call(null,(0),cljs.core.swap_BANG_.call(null,counter_11722,cljs.core.dec))){
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
var len__5766__auto___11724 = arguments.length;
var i__5767__auto___11725 = (0);
while(true){
if((i__5767__auto___11725 < len__5766__auto___11724)){
args__5772__auto__.push((arguments[i__5767__auto___11725]));

var G__11726 = (i__5767__auto___11725 + (1));
i__5767__auto___11725 = G__11726;
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
(promesa.core.wait_all.cljs$lang$applyTo = (function (seq11723){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11723));
}));

/**
 * A promise aware run! function. Executed in terms of `then` rules.
 */
promesa.core.run_BANG_ = (function promesa$core$run_BANG_(var_args){
var G__11732 = arguments.length;
switch (G__11732) {
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
return promesa.protocols._fmap.call(null,cljs.core.reduce.call(null,(function (p1__11727_SHARP_,p2__11728_SHARP_){
return promesa.core.then.call(null,p1__11727_SHARP_,(function (_){
return f.call(null,p2__11728_SHARP_);
}));
}),promesa.impl.resolved.call(null,null),coll),cljs.core.constantly.call(null,null));
}));

(promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,coll,executor){
return promesa.protocols._fmap.call(null,cljs.core.reduce.call(null,(function (p1__11729_SHARP_,p2__11730_SHARP_){
return promesa.core.then.call(null,p1__11729_SHARP_,(function (_){
return f.call(null,p2__11730_SHARP_);
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
var G__11735 = arguments.length;
switch (G__11735) {
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
var G__11738__delegate = function (args){
return promesa.core.create.call(null,(function (resolve,reject){
var args__$1 = cljs.core.conj.call(null,cljs.core.vec.call(null,args),resolve);
try{return cljs.core.apply.call(null,callable,args__$1);
}catch (e11737){if((e11737 instanceof Error)){
var e = e11737;
return reject.call(null,e);
} else {
throw e11737;

}
}}));
};
var G__11738 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11739__i = 0, G__11739__a = new Array(arguments.length -  0);
while (G__11739__i < G__11739__a.length) {G__11739__a[G__11739__i] = arguments[G__11739__i + 0]; ++G__11739__i;}
  args = new cljs.core.IndexedSeq(G__11739__a,0,null);
} 
return G__11738__delegate.call(this,args);};
G__11738.cljs$lang$maxFixedArity = 0;
G__11738.cljs$lang$applyTo = (function (arglist__11740){
var args = cljs.core.seq(arglist__11740);
return G__11738__delegate(args);
});
G__11738.cljs$core$IFn$_invoke$arity$variadic = G__11738__delegate;
return G__11738;
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
var G__11742 = arguments.length;
switch (G__11742) {
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
var G__11745 = arguments.length;
switch (G__11745) {
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

var ret__5821__auto___11754 = (function (){
/**
 * An exception unsafe do-like macro. Supposes that we are already
 *   wrapped in promise context so avoids defensive wrapping.
 */
promesa.core.do_STAR_ = (function promesa$core$do_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11755 = arguments.length;
var i__5767__auto___11756 = (0);
while(true){
if((i__5767__auto___11756 < len__5766__auto___11755)){
args__5772__auto__.push((arguments[i__5767__auto___11756]));

var G__11757 = (i__5767__auto___11756 + (1));
i__5767__auto___11756 = G__11757;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return promesa.core.do_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(promesa.core.do_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
var pred__11751 = cljs.core._EQ_;
var expr__11752 = cljs.core.count.call(null,exprs);
if(cljs.core.truth_(pred__11751.call(null,(0),expr__11752))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.impl","resolved","promesa.impl/resolved",-72031341,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
} else {
if(cljs.core.truth_(pred__11751.call(null,(1),expr__11752))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,exprs),null,(1),null)))));
} else {
return cljs.core.reduce.call(null,(function (acc,e){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-mcat","promesa.protocols/-mcat",-1426184094,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,e,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___11747__auto__","___11747__auto__",-1391631542,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null))))),null,(1),null)))));
}),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,cljs.core.last.call(null,exprs),null,(1),null))))),cljs.core.reverse.call(null,cljs.core.butlast.call(null,exprs)));
}
}
}));

(promesa.core.do_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core.do_STAR_.cljs$lang$applyTo = (function (seq11748){
var G__11749 = cljs.core.first.call(null,seq11748);
var seq11748__$1 = cljs.core.next.call(null,seq11748);
var G__11750 = cljs.core.first.call(null,seq11748__$1);
var seq11748__$2 = cljs.core.next.call(null,seq11748__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11749,G__11750,seq11748__$2);
}));

return null;
})()
;
(promesa.core.do_STAR_.cljs$lang$macro = true);

var ret__5821__auto___11762 = (function (){
/**
 * Execute potentially side effectful code and return a promise resolved
 *   to the last expression after awaiting the result of each
 *   expression.
 */
promesa.core.do$ = (function promesa$core$do(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11763 = arguments.length;
var i__5767__auto___11764 = (0);
while(true){
if((i__5767__auto___11764 < len__5766__auto___11763)){
args__5772__auto__.push((arguments[i__5767__auto___11764]));

var G__11765 = (i__5767__auto___11764 + (1));
i__5767__auto___11764 = G__11765;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return promesa.core.do$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(promesa.core.do$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-mcat","promesa.protocols/-mcat",-1426184094,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___11758__auto__","___11758__auto__",1445589625,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do*","promesa.core/do*",-1752305515,null),null,(1),null)),exprs))),null,(1),null))))),null,(1),null)))));
}));

(promesa.core.do$.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core.do$.cljs$lang$applyTo = (function (seq11759){
var G__11760 = cljs.core.first.call(null,seq11759);
var seq11759__$1 = cljs.core.next.call(null,seq11759);
var G__11761 = cljs.core.first.call(null,seq11759__$1);
var seq11759__$2 = cljs.core.next.call(null,seq11759__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11760,G__11761,seq11759__$2);
}));

return null;
})()
;
(promesa.core.do$.cljs$lang$macro = true);

var ret__5821__auto___11769 = (function (){
/**
 * A convenience alias for `do` macro.
 */
promesa.core.do_BANG_ = (function promesa$core$do_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11770 = arguments.length;
var i__5767__auto___11771 = (0);
while(true){
if((i__5767__auto___11771 < len__5766__auto___11770)){
args__5772__auto__.push((arguments[i__5767__auto___11771]));

var G__11772 = (i__5767__auto___11771 + (1));
i__5767__auto___11771 = G__11772;
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
(promesa.core.do_BANG_.cljs$lang$applyTo = (function (seq11766){
var G__11767 = cljs.core.first.call(null,seq11766);
var seq11766__$1 = cljs.core.next.call(null,seq11766);
var G__11768 = cljs.core.first.call(null,seq11766__$1);
var seq11766__$2 = cljs.core.next.call(null,seq11766__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11767,G__11768,seq11766__$2);
}));

return null;
})()
;
(promesa.core.do_BANG_.cljs$lang$macro = true);

var ret__5821__auto___11781 = (function (){
/**
 * An exception unsafe let-like macro. Supposes that we are already
 *   wrapped in promise context so avoids defensive wrapping.
 */
promesa.core.let_STAR_ = (function promesa$core$let_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11782 = arguments.length;
var i__5767__auto___11783 = (0);
while(true){
if((i__5767__auto___11783 < len__5766__auto___11782)){
args__5772__auto__.push((arguments[i__5767__auto___11783]));

var G__11784 = (i__5767__auto___11783 + (1));
i__5767__auto___11783 = G__11784;
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

return cljs.core.reduce.call(null,(function (acc,p__11777){
var vec__11778 = p__11777;
var l = cljs.core.nth.call(null,vec__11778,(0),null);
var r = cljs.core.nth.call(null,vec__11778,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-mcat","promesa.protocols/-mcat",-1426184094,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,l,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null))))),null,(1),null)))));
}),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do*","promesa.core/do*",-1752305515,null),null,(1),null)),body))),cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),bindings)));
}));

(promesa.core.let_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.let_STAR_.cljs$lang$applyTo = (function (seq11773){
var G__11774 = cljs.core.first.call(null,seq11773);
var seq11773__$1 = cljs.core.next.call(null,seq11773);
var G__11775 = cljs.core.first.call(null,seq11773__$1);
var seq11773__$2 = cljs.core.next.call(null,seq11773__$1);
var G__11776 = cljs.core.first.call(null,seq11773__$2);
var seq11773__$3 = cljs.core.next.call(null,seq11773__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11774,G__11775,G__11776,seq11773__$3);
}));

return null;
})()
;
(promesa.core.let_STAR_.cljs$lang$macro = true);

var ret__5821__auto___11790 = (function (){
/**
 * A `let` alternative that always returns promise and waits for all the
 *   promises on the bindings.
 */
promesa.core.let$ = (function promesa$core$let(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11791 = arguments.length;
var i__5767__auto___11792 = (0);
while(true){
if((i__5767__auto___11792 < len__5766__auto___11791)){
args__5772__auto__.push((arguments[i__5767__auto___11792]));

var G__11793 = (i__5767__auto___11792 + (1));
i__5767__auto___11792 = G__11793;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-mcat","promesa.protocols/-mcat",-1426184094,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___11785__auto__","___11785__auto__",178370245,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","let*","promesa.core/let*",-1840819052,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do","promesa.core/do",79683106,null),null,(1),null)),body)));
}
}));

(promesa.core.let$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.let$.cljs$lang$applyTo = (function (seq11786){
var G__11787 = cljs.core.first.call(null,seq11786);
var seq11786__$1 = cljs.core.next.call(null,seq11786);
var G__11788 = cljs.core.first.call(null,seq11786__$1);
var seq11786__$2 = cljs.core.next.call(null,seq11786__$1);
var G__11789 = cljs.core.first.call(null,seq11786__$2);
var seq11786__$3 = cljs.core.next.call(null,seq11786__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11787,G__11788,G__11789,seq11786__$3);
}));

return null;
})()
;
(promesa.core.let$.cljs$lang$macro = true);

var ret__5821__auto___11799 = (function (){
/**
 * A parallel let; executes all the bindings in parallel and when all
 *   bindings are resolved, executes the body.
 */
promesa.core.plet = (function promesa$core$plet(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11800 = arguments.length;
var i__5767__auto___11801 = (0);
while(true){
if((i__5767__auto___11801 < len__5766__auto___11800)){
args__5772__auto__.push((arguments[i__5767__auto___11801]));

var G__11802 = (i__5767__auto___11801 + (1));
i__5767__auto___11801 = G__11802;
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-mcat","promesa.protocols/-mcat",-1426184094,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___11794__auto__","___11794__auto__",2040233454,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,(function (){var bindings__$1 = cljs.core.partition.call(null,(2),bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","all","promesa.core/all",-152914545,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.call(null,cljs.core.second,bindings__$1),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","bind","promesa.core/bind",990464492,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,bindings__$1))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do*","promesa.core/do*",-1752305515,null),null,(1),null)),body))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
})(),null,(1),null))))),null,(1),null)))));
}));

(promesa.core.plet.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.plet.cljs$lang$applyTo = (function (seq11795){
var G__11796 = cljs.core.first.call(null,seq11795);
var seq11795__$1 = cljs.core.next.call(null,seq11795);
var G__11797 = cljs.core.first.call(null,seq11795__$1);
var seq11795__$2 = cljs.core.next.call(null,seq11795__$1);
var G__11798 = cljs.core.first.call(null,seq11795__$2);
var seq11795__$3 = cljs.core.next.call(null,seq11795__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11796,G__11797,G__11798,seq11795__$3);
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
var G__11804 = arguments.length;
switch (G__11804) {
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
var ret__5821__auto___11809 = (function (){
/**
 * Analogous to `clojure.core.async/thread` that returns a promise instance
 *   instead of the `Future`.
 */
promesa.core.thread = (function promesa$core$thread(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11810 = arguments.length;
var i__5767__auto___11811 = (0);
while(true){
if((i__5767__auto___11811 < len__5766__auto___11810)){
args__5772__auto__.push((arguments[i__5767__auto___11811]));

var G__11812 = (i__5767__auto___11811 + (1));
i__5767__auto___11811 = G__11812;
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
(promesa.core.thread.cljs$lang$applyTo = (function (seq11806){
var G__11807 = cljs.core.first.call(null,seq11806);
var seq11806__$1 = cljs.core.next.call(null,seq11806);
var G__11808 = cljs.core.first.call(null,seq11806__$1);
var seq11806__$2 = cljs.core.next.call(null,seq11806__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11807,G__11808,seq11806__$2);
}));

return null;
})()
;
(promesa.core.thread.cljs$lang$macro = true);

var ret__5821__auto___11816 = (function (){
/**
 * Analogous to `clojure.core.async/thread` that returns a promise instance
 *   instead of the `Future`. Useful for executing synchronous code in a
 *   separate thread (also works in cljs).
 */
promesa.core.vthread = (function promesa$core$vthread(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11817 = arguments.length;
var i__5767__auto___11818 = (0);
while(true){
if((i__5767__auto___11818 < len__5766__auto___11817)){
args__5772__auto__.push((arguments[i__5767__auto___11818]));

var G__11819 = (i__5767__auto___11818 + (1));
i__5767__auto___11818 = G__11819;
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
(promesa.core.vthread.cljs$lang$applyTo = (function (seq11813){
var G__11814 = cljs.core.first.call(null,seq11813);
var seq11813__$1 = cljs.core.next.call(null,seq11813);
var G__11815 = cljs.core.first.call(null,seq11813__$1);
var seq11813__$2 = cljs.core.next.call(null,seq11813__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11814,G__11815,seq11813__$2);
}));

return null;
})()
;
(promesa.core.vthread.cljs$lang$macro = true);

var ret__5821__auto___11823 = (function (){
/**
 * Analogous macro to `clojure.core/future` that returns promise
 *   instance instead of the `Future`. Exposed just for convenience and
 *   works as an alias to `thread`.
 */
promesa.core.future = (function promesa$core$future(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11824 = arguments.length;
var i__5767__auto___11825 = (0);
while(true){
if((i__5767__auto___11825 < len__5766__auto___11824)){
args__5772__auto__.push((arguments[i__5767__auto___11825]));

var G__11826 = (i__5767__auto___11825 + (1));
i__5767__auto___11825 = G__11826;
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
(promesa.core.future.cljs$lang$applyTo = (function (seq11820){
var G__11821 = cljs.core.first.call(null,seq11820);
var seq11820__$1 = cljs.core.next.call(null,seq11820);
var G__11822 = cljs.core.first.call(null,seq11820__$1);
var seq11820__$2 = cljs.core.next.call(null,seq11820__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11821,G__11822,seq11820__$2);
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

(promesa.core.Recur.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k11828,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__11832 = k11828;
var G__11832__$1 = (((G__11832 instanceof cljs.core.Keyword))?G__11832.fqn:null);
switch (G__11832__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11828,else__5343__auto__);

}
}));

(promesa.core.Recur.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__11833){
var vec__11834 = p__11833;
var k__5364__auto__ = cljs.core.nth.call(null,vec__11834,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__11834,(1),null);
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

(promesa.core.Recur.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11827){
var self__ = this;
var G__11827__$1 = this;
return (new cljs.core.RecordIter((0),G__11827__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

(promesa.core.Recur.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11829,other11830){
var self__ = this;
var this11829__$1 = this;
return (((!((other11830 == null)))) && ((((this11829__$1.constructor === other11830.constructor)) && (((cljs.core._EQ_.call(null,this11829__$1.bindings,other11830.bindings)) && (cljs.core._EQ_.call(null,this11829__$1.__extmap,other11830.__extmap)))))));
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

(promesa.core.Recur.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k11828){
var self__ = this;
var this__5347__auto____$1 = this;
var G__11837 = k11828;
var G__11837__$1 = (((G__11837 instanceof cljs.core.Keyword))?G__11837.fqn:null);
switch (G__11837__$1) {
case "bindings":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k11828);

}
}));

(promesa.core.Recur.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__11827){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__11838 = cljs.core.keyword_identical_QMARK_;
var expr__11839 = k__5349__auto__;
if(cljs.core.truth_(pred__11838.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__11839))){
return (new promesa.core.Recur(G__11827,self__.__meta,self__.__extmap,null));
} else {
return (new promesa.core.Recur(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__11827),null));
}
}));

(promesa.core.Recur.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null))], null),self__.__extmap));
}));

(promesa.core.Recur.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__11827){
var self__ = this;
var this__5339__auto____$1 = this;
return (new promesa.core.Recur(self__.bindings,G__11827,self__.__extmap,self__.__hash));
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
promesa.core.map__GT_Recur = (function promesa$core$map__GT_Recur(G__11831){
var extmap__5382__auto__ = (function (){var G__11841 = cljs.core.dissoc.call(null,G__11831,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
if(cljs.core.record_QMARK_.call(null,G__11831)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__11841);
} else {
return G__11841;
}
})();
return (new promesa.core.Recur(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__11831),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});

promesa.core.recur_QMARK_ = (function promesa$core$recur_QMARK_(o){
return (o instanceof promesa.core.Recur);
});
var ret__5821__auto___11848 = (function (){
promesa.core.loop = (function promesa$core$loop(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11849 = arguments.length;
var i__5767__auto___11850 = (0);
while(true){
if((i__5767__auto___11850 < len__5766__auto___11849)){
args__5772__auto__.push((arguments[i__5767__auto___11850]));

var G__11851 = (i__5767__auto___11850 + (1));
i__5767__auto___11850 = G__11851;
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
(promesa.core.loop.cljs$lang$applyTo = (function (seq11844){
var G__11845 = cljs.core.first.call(null,seq11844);
var seq11844__$1 = cljs.core.next.call(null,seq11844);
var G__11846 = cljs.core.first.call(null,seq11844__$1);
var seq11844__$2 = cljs.core.next.call(null,seq11844__$1);
var G__11847 = cljs.core.first.call(null,seq11844__$2);
var seq11844__$3 = cljs.core.next.call(null,seq11844__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11845,G__11846,G__11847,seq11844__$3);
}));

return null;
})()
;
(promesa.core.loop.cljs$lang$macro = true);

var ret__5821__auto___11855 = (function (){
promesa.core.recur = (function promesa$core$recur(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11856 = arguments.length;
var i__5767__auto___11857 = (0);
while(true){
if((i__5767__auto___11857 < len__5766__auto___11856)){
args__5772__auto__.push((arguments[i__5767__auto___11857]));

var G__11858 = (i__5767__auto___11857 + (1));
i__5767__auto___11857 = G__11858;
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
(promesa.core.recur.cljs$lang$applyTo = (function (seq11852){
var G__11853 = cljs.core.first.call(null,seq11852);
var seq11852__$1 = cljs.core.next.call(null,seq11852);
var G__11854 = cljs.core.first.call(null,seq11852__$1);
var seq11852__$2 = cljs.core.next.call(null,seq11852__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11853,G__11854,seq11852__$2);
}));

return null;
})()
;
(promesa.core.recur.cljs$lang$macro = true);

var ret__5821__auto___11867 = (function (){
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
var len__5766__auto___11868 = arguments.length;
var i__5767__auto___11869 = (0);
while(true){
if((i__5767__auto___11869 < len__5766__auto___11868)){
args__5772__auto__.push((arguments[i__5767__auto___11869]));

var G__11870 = (i__5767__auto___11869 + (1));
i__5767__auto___11869 = G__11870;
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
var vec__11864 = ((cljs.core.sequential_QMARK_.call(null,arg))?arg:(new cljs.core.List(null,arg,null,(1),null)));
var seq__11865 = cljs.core.seq.call(null,vec__11864);
var first__11866 = cljs.core.first.call(null,seq__11865);
var seq__11865__$1 = cljs.core.next.call(null,seq__11865);
var f = first__11866;
var args = seq__11865__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p__11859__auto__","p__11859__auto__",-1375211043,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p__11859__auto__","p__11859__auto__",-1375211043,null),null,(1),null)),args))),null,(1),null)))));
}),forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","chain","promesa.core/chain",-2105367206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),fns)));
}));

(promesa.core.__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.__GT_.cljs$lang$applyTo = (function (seq11860){
var G__11861 = cljs.core.first.call(null,seq11860);
var seq11860__$1 = cljs.core.next.call(null,seq11860);
var G__11862 = cljs.core.first.call(null,seq11860__$1);
var seq11860__$2 = cljs.core.next.call(null,seq11860__$1);
var G__11863 = cljs.core.first.call(null,seq11860__$2);
var seq11860__$3 = cljs.core.next.call(null,seq11860__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11861,G__11862,G__11863,seq11860__$3);
}));

return null;
})()
;
(promesa.core.__GT_.cljs$lang$macro = true);

var ret__5821__auto___11879 = (function (){
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
var len__5766__auto___11880 = arguments.length;
var i__5767__auto___11881 = (0);
while(true){
if((i__5767__auto___11881 < len__5766__auto___11880)){
args__5772__auto__.push((arguments[i__5767__auto___11881]));

var G__11882 = (i__5767__auto___11881 + (1));
i__5767__auto___11881 = G__11882;
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
var vec__11876 = ((cljs.core.sequential_QMARK_.call(null,arg))?arg:(new cljs.core.List(null,arg,null,(1),null)));
var seq__11877 = cljs.core.seq.call(null,vec__11876);
var first__11878 = cljs.core.first.call(null,seq__11877);
var seq__11877__$1 = cljs.core.next.call(null,seq__11877);
var f = first__11878;
var args = seq__11877__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p__11871__auto__","p__11871__auto__",1399940378,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f,null,(1),null)),args,(new cljs.core.List(null,new cljs.core.Symbol(null,"p__11871__auto__","p__11871__auto__",1399940378,null),null,(1),null))))),null,(1),null)))));
}),forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","chain","promesa.core/chain",-2105367206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),fns)));
}));

(promesa.core.__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.__GT__GT_.cljs$lang$applyTo = (function (seq11872){
var G__11873 = cljs.core.first.call(null,seq11872);
var seq11872__$1 = cljs.core.next.call(null,seq11872);
var G__11874 = cljs.core.first.call(null,seq11872__$1);
var seq11872__$2 = cljs.core.next.call(null,seq11872__$1);
var G__11875 = cljs.core.first.call(null,seq11872__$2);
var seq11872__$3 = cljs.core.next.call(null,seq11872__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11873,G__11874,G__11875,seq11872__$3);
}));

return null;
})()
;
(promesa.core.__GT__GT_.cljs$lang$macro = true);

var ret__5821__auto___11888 = (function (){
/**
 * Like clojure.core/as->, but it will handle promises in values
 * and make sure the next form gets the value realized instead of
 * the promise.
 */
promesa.core.as__GT_ = (function promesa$core$as__GT_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11889 = arguments.length;
var i__5767__auto___11890 = (0);
while(true){
if((i__5767__auto___11890 < len__5766__auto___11889)){
args__5772__auto__.push((arguments[i__5767__auto___11890]));

var G__11891 = (i__5767__auto___11890 + (1));
i__5767__auto___11890 = G__11891;
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
(promesa.core.as__GT_.cljs$lang$applyTo = (function (seq11883){
var G__11884 = cljs.core.first.call(null,seq11883);
var seq11883__$1 = cljs.core.next.call(null,seq11883);
var G__11885 = cljs.core.first.call(null,seq11883__$1);
var seq11883__$2 = cljs.core.next.call(null,seq11883__$1);
var G__11886 = cljs.core.first.call(null,seq11883__$2);
var seq11883__$3 = cljs.core.next.call(null,seq11883__$2);
var G__11887 = cljs.core.first.call(null,seq11883__$3);
var seq11883__$4 = cljs.core.next.call(null,seq11883__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11884,G__11885,G__11886,G__11887,seq11883__$4);
}));

return null;
})()
;
(promesa.core.as__GT_.cljs$lang$macro = true);

var ret__5821__auto___11907 = (function (){
/**
 * Like clojure.core/with-redefs, but it will handle promises in
 * body and wait until they resolve or reject before restoring the
 * bindings. Useful for mocking async APIs.
 */
promesa.core.with_redefs = (function promesa$core$with_redefs(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11908 = arguments.length;
var i__5767__auto___11909 = (0);
while(true){
if((i__5767__auto___11909 < len__5766__auto___11908)){
args__5772__auto__.push((arguments[i__5767__auto___11909]));

var G__11910 = (i__5767__auto___11909 + (1));
i__5767__auto___11909 = G__11910;
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
var orig_val_syms = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,(function (p1__11892_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11892_SHARP_),"-orig-val__"].join('');
}),cljs.core.name),names);
var temp_val_syms = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,(function (p1__11893_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11893_SHARP_),"-temp-val__"].join('');
}),cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,temp_val_syms);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,orig_val_syms));
var bind_value = (cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))?(function (p__11899){
var vec__11900 = p__11899;
var k = cljs.core.nth.call(null,vec__11900,(0),null);
var v = cljs.core.nth.call(null,vec__11900,(1),null);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),(new cljs.core.List(null,k,(new cljs.core.List(null,v,null,(1),null)),(2),null)),(3),null));
}):(function (p__11903){
var vec__11904 = p__11903;
var k = cljs.core.nth.call(null,vec__11904,(0),null);
var v = cljs.core.nth.call(null,vec__11904,(1),null);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"alter-var-root","alter-var-root",-1749458519,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"constantly","constantly",-271143939,null),(new cljs.core.List(null,v,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,orig_val_syms,names),cljs.core.interleave.call(null,temp_val_syms,vals))))),null,(1),null)),cljs.core.map.call(null,bind_value,binds),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do!","promesa.core/do!",12645930,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","finally","promesa.core/finally",-527135850,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___11894__auto__","___11894__auto__",956479369,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"___11894__auto__","___11894__auto__",956479369,null),null,(1),null)))))),null,(1),null)),cljs.core.map.call(null,bind_value,resets)))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(promesa.core.with_redefs.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.with_redefs.cljs$lang$applyTo = (function (seq11895){
var G__11896 = cljs.core.first.call(null,seq11895);
var seq11895__$1 = cljs.core.next.call(null,seq11895);
var G__11897 = cljs.core.first.call(null,seq11895__$1);
var seq11895__$2 = cljs.core.next.call(null,seq11895__$1);
var G__11898 = cljs.core.first.call(null,seq11895__$2);
var seq11895__$3 = cljs.core.next.call(null,seq11895__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11896,G__11897,G__11898,seq11895__$3);
}));

return null;
})()
;
(promesa.core.with_redefs.cljs$lang$macro = true);

var ret__5821__auto___11919 = (function (){
/**
 * Simplified version of `doseq` which takes one binding and a seq, and
 *   runs over it using `promesa.core/run!`
 */
promesa.core.doseq = (function promesa$core$doseq(var_args){
var args__5772__auto__ = [];
var len__5766__auto___11920 = arguments.length;
var i__5767__auto___11921 = (0);
while(true){
if((i__5767__auto___11921 < len__5766__auto___11920)){
args__5772__auto__.push((arguments[i__5767__auto___11921]));

var G__11922 = (i__5767__auto___11921 + (1));
i__5767__auto___11921 = G__11922;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return promesa.core.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(promesa.core.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__11915,body){
var vec__11916 = p__11915;
var binding = cljs.core.nth.call(null,vec__11916,(0),null);
var xs = cljs.core.nth.call(null,vec__11916,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","run!","promesa.core/run!",-1526702839,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,binding,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do*","promesa.core/do*",-1752305515,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,xs,null,(1),null)))));
}));

(promesa.core.doseq.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.doseq.cljs$lang$applyTo = (function (seq11911){
var G__11912 = cljs.core.first.call(null,seq11911);
var seq11911__$1 = cljs.core.next.call(null,seq11911);
var G__11913 = cljs.core.first.call(null,seq11911__$1);
var seq11911__$2 = cljs.core.next.call(null,seq11911__$1);
var G__11914 = cljs.core.first.call(null,seq11911__$2);
var seq11911__$3 = cljs.core.next.call(null,seq11911__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11912,G__11913,G__11914,seq11911__$3);
}));

return null;
})()
;
(promesa.core.doseq.cljs$lang$macro = true);


//# sourceMappingURL=core.js.map

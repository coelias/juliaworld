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
var G__27569 = arguments.length;
switch (G__27569) {
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
var G__27576 = arguments.length;
switch (G__27576) {
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
try{f.call(null,(function (p1__27571_SHARP_){
return promesa.protocols._resolve_BANG_.call(null,d,p1__27571_SHARP_);
}),(function (p1__27572_SHARP_){
return promesa.protocols._reject_BANG_.call(null,d,p1__27572_SHARP_);
}));
}catch (e27577){var e_27580 = e27577;
promesa.protocols._reject_BANG_.call(null,d,e_27580);
}
return d;
}));

(promesa.core.create.cljs$core$IFn$_invoke$arity$2 = (function (f,executor){
var d = promesa.impl.deferred.call(null);
promesa.exec.run_BANG_.call(null,executor,(function (){
try{return f.call(null,(function (p1__27573_SHARP_){
return promesa.protocols._resolve_BANG_.call(null,d,p1__27573_SHARP_);
}),(function (p1__27574_SHARP_){
return promesa.protocols._reject_BANG_.call(null,d,p1__27574_SHARP_);
}));
}catch (e27578){var e = e27578;
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
var G__27582 = arguments.length;
switch (G__27582) {
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
var G__27585 = arguments.length;
switch (G__27585) {
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
var G__27588 = arguments.length;
switch (G__27588) {
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
var G__27591 = arguments.length;
switch (G__27591) {
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
var G__27594 = arguments.length;
switch (G__27594) {
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
var G__27597 = arguments.length;
switch (G__27597) {
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
var G__27600 = arguments.length;
switch (G__27600) {
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
var G__27603 = arguments.length;
switch (G__27603) {
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
var G__27609 = arguments.length;
switch (G__27609) {
case 2:
return promesa.core.chain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___27611 = arguments.length;
var i__5767__auto___27612 = (0);
while(true){
if((i__5767__auto___27612 < len__5766__auto___27611)){
args_arr__5791__auto__.push((arguments[i__5767__auto___27612]));

var G__27613 = (i__5767__auto___27612 + (1));
i__5767__auto___27612 = G__27613;
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
(promesa.core.chain.cljs$lang$applyTo = (function (seq27606){
var G__27607 = cljs.core.first.call(null,seq27606);
var seq27606__$1 = cljs.core.next.call(null,seq27606);
var G__27608 = cljs.core.first.call(null,seq27606__$1);
var seq27606__$2 = cljs.core.next.call(null,seq27606__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27607,G__27608,seq27606__$2);
}));

(promesa.core.chain.cljs$lang$maxFixedArity = (2));

/**
 * Chain variable number of functions to be executed serially using
 *   `map`.
 */
promesa.core.chain_SINGLEQUOTE_ = (function promesa$core$chain_SINGLEQUOTE_(var_args){
var G__27620 = arguments.length;
switch (G__27620) {
case 2:
return promesa.core.chain_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___27622 = arguments.length;
var i__5767__auto___27623 = (0);
while(true){
if((i__5767__auto___27623 < len__5766__auto___27622)){
args_arr__5791__auto__.push((arguments[i__5767__auto___27623]));

var G__27624 = (i__5767__auto___27623 + (1));
i__5767__auto___27623 = G__27624;
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
return cljs.core.reduce.call(null,(function (p1__27615_SHARP_,p2__27614_SHARP_){
return promesa.core.map.call(null,p2__27614_SHARP_,p1__27615_SHARP_);
}),promesa.protocols._promise.call(null,p),cljs.core.cons.call(null,f,fs));
}));

/** @this {Function} */
(promesa.core.chain_SINGLEQUOTE_.cljs$lang$applyTo = (function (seq27617){
var G__27618 = cljs.core.first.call(null,seq27617);
var seq27617__$1 = cljs.core.next.call(null,seq27617);
var G__27619 = cljs.core.first.call(null,seq27617__$1);
var seq27617__$2 = cljs.core.next.call(null,seq27617__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27618,G__27619,seq27617__$2);
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
var G__27626 = arguments.length;
switch (G__27626) {
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
var G__27629 = arguments.length;
switch (G__27629) {
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
var G__27632 = arguments.length;
switch (G__27632) {
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
var G__27635 = arguments.length;
switch (G__27635) {
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
var G__27638 = arguments.length;
switch (G__27638) {
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
var G__27643 = arguments.length;
switch (G__27643) {
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
return promesa.protocols._merr.call(null,promesa.protocols._promise.call(null,p),(function (p1__27640_SHARP_){
return promesa.protocols._promise.call(null,f.call(null,p1__27640_SHARP_));
}));
}));

(promesa.core.catch$.cljs$core$IFn$_invoke$arity$3 = (function (p,pred_or_type,f){
var accept_QMARK_ = ((cljs.core.ifn_QMARK_.call(null,pred_or_type))?pred_or_type:(function (p1__27641_SHARP_){
return (p1__27641_SHARP_ instanceof pred_or_type);
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
var G__27646 = arguments.length;
switch (G__27646) {
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
var G__27649 = arguments.length;
switch (G__27649) {
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
var G__27652 = arguments.length;
switch (G__27652) {
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
var seq__27653 = cljs.core.seq.call(null,promises);
var chunk__27654 = null;
var count__27655 = (0);
var i__27656 = (0);
while(true){
if((i__27656 < count__27655)){
var p = cljs.core._nth.call(null,chunk__27654,i__27656);
promesa.protocols._fnly.call(null,promesa.protocols._promise.call(null,p),((function (seq__27653,chunk__27654,count__27655,i__27656,p,items,state,lock){
return (function (v,exception){
promesa.protocols._lock_BANG_.call(null,lock);

try{if(cljs.core.truth_(exception)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved?","resolved?",862515389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return null;
} else {
var state__$1 = cljs.core._vreset_BANG_.call(null,state,((function (seq__27653,chunk__27654,count__27655,i__27656,p,items,state,lock){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.update.call(null,state__$1,new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.conj,exception);
});})(seq__27653,chunk__27654,count__27655,i__27656,p,items,state,lock))
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
var map__27659 = cljs.core._vreset_BANG_.call(null,state,((function (seq__27653,chunk__27654,count__27655,i__27656,p,items,state,lock){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"resolved?","resolved?",862515389),true),new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p);
});})(seq__27653,chunk__27654,count__27655,i__27656,p,items,state,lock))
.call(null,cljs.core._deref.call(null,state)));
var map__27659__$1 = cljs.core.__destructure_map.call(null,map__27659);
var pending = cljs.core.get.call(null,map__27659__$1,new cljs.core.Keyword(null,"pending","pending",-220036727));
return resolve.call(null,v);
}
}
}finally {promesa.protocols._unlock_BANG_.call(null,lock);
}});})(seq__27653,chunk__27654,count__27655,i__27656,p,items,state,lock))
);


var G__27662 = seq__27653;
var G__27663 = chunk__27654;
var G__27664 = count__27655;
var G__27665 = (i__27656 + (1));
seq__27653 = G__27662;
chunk__27654 = G__27663;
count__27655 = G__27664;
i__27656 = G__27665;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__27653);
if(temp__5804__auto__){
var seq__27653__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27653__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__27653__$1);
var G__27666 = cljs.core.chunk_rest.call(null,seq__27653__$1);
var G__27667 = c__5565__auto__;
var G__27668 = cljs.core.count.call(null,c__5565__auto__);
var G__27669 = (0);
seq__27653 = G__27666;
chunk__27654 = G__27667;
count__27655 = G__27668;
i__27656 = G__27669;
continue;
} else {
var p = cljs.core.first.call(null,seq__27653__$1);
promesa.protocols._fnly.call(null,promesa.protocols._promise.call(null,p),((function (seq__27653,chunk__27654,count__27655,i__27656,p,seq__27653__$1,temp__5804__auto__,items,state,lock){
return (function (v,exception){
promesa.protocols._lock_BANG_.call(null,lock);

try{if(cljs.core.truth_(exception)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved?","resolved?",862515389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
return null;
} else {
var state__$1 = cljs.core._vreset_BANG_.call(null,state,((function (seq__27653,chunk__27654,count__27655,i__27656,p,seq__27653__$1,temp__5804__auto__,items,state,lock){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.update.call(null,state__$1,new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p),new cljs.core.Keyword(null,"rejections","rejections",-1620899911),cljs.core.conj,exception);
});})(seq__27653,chunk__27654,count__27655,i__27656,p,seq__27653__$1,temp__5804__auto__,items,state,lock))
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
var map__27660 = cljs.core._vreset_BANG_.call(null,state,((function (seq__27653,chunk__27654,count__27655,i__27656,p,seq__27653__$1,temp__5804__auto__,items,state,lock){
return (function (state__$1){
return cljs.core.update.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"resolved?","resolved?",862515389),true),new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.disj,p);
});})(seq__27653,chunk__27654,count__27655,i__27656,p,seq__27653__$1,temp__5804__auto__,items,state,lock))
.call(null,cljs.core._deref.call(null,state)));
var map__27660__$1 = cljs.core.__destructure_map.call(null,map__27660);
var pending = cljs.core.get.call(null,map__27660__$1,new cljs.core.Keyword(null,"pending","pending",-220036727));
return resolve.call(null,v);
}
}
}finally {promesa.protocols._unlock_BANG_.call(null,lock);
}});})(seq__27653,chunk__27654,count__27655,i__27656,p,seq__27653__$1,temp__5804__auto__,items,state,lock))
);


var G__27670 = cljs.core.next.call(null,seq__27653__$1);
var G__27671 = null;
var G__27672 = (0);
var G__27673 = (0);
seq__27653 = G__27670;
chunk__27654 = G__27671;
count__27655 = G__27672;
i__27656 = G__27673;
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
var counter_27675 = cljs.core.atom.call(null,total);
cljs.core.run_BANG_.call(null,(function (p1__27674_SHARP_){
return promesa.protocols._fnly.call(null,p1__27674_SHARP_,(function (_,___$1){
if(cljs.core._EQ_.call(null,(0),cljs.core.swap_BANG_.call(null,counter_27675,cljs.core.dec))){
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
var len__5766__auto___27677 = arguments.length;
var i__5767__auto___27678 = (0);
while(true){
if((i__5767__auto___27678 < len__5766__auto___27677)){
args__5772__auto__.push((arguments[i__5767__auto___27678]));

var G__27679 = (i__5767__auto___27678 + (1));
i__5767__auto___27678 = G__27679;
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
(promesa.core.wait_all.cljs$lang$applyTo = (function (seq27676){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27676));
}));

/**
 * A promise aware run! function. Executed in terms of `then` rules.
 */
promesa.core.run_BANG_ = (function promesa$core$run_BANG_(var_args){
var G__27685 = arguments.length;
switch (G__27685) {
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
return promesa.protocols._fmap.call(null,cljs.core.reduce.call(null,(function (p1__27680_SHARP_,p2__27681_SHARP_){
return promesa.core.then.call(null,p1__27680_SHARP_,(function (_){
return f.call(null,p2__27681_SHARP_);
}));
}),promesa.impl.resolved.call(null,null),coll),cljs.core.constantly.call(null,null));
}));

(promesa.core.run_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,coll,executor){
return promesa.protocols._fmap.call(null,cljs.core.reduce.call(null,(function (p1__27682_SHARP_,p2__27683_SHARP_){
return promesa.core.then.call(null,p1__27682_SHARP_,(function (_){
return f.call(null,p2__27683_SHARP_);
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
var G__27688 = arguments.length;
switch (G__27688) {
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
var G__27691__delegate = function (args){
return promesa.core.create.call(null,(function (resolve,reject){
var args__$1 = cljs.core.conj.call(null,cljs.core.vec.call(null,args),resolve);
try{return cljs.core.apply.call(null,callable,args__$1);
}catch (e27690){if((e27690 instanceof Error)){
var e = e27690;
return reject.call(null,e);
} else {
throw e27690;

}
}}));
};
var G__27691 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27692__i = 0, G__27692__a = new Array(arguments.length -  0);
while (G__27692__i < G__27692__a.length) {G__27692__a[G__27692__i] = arguments[G__27692__i + 0]; ++G__27692__i;}
  args = new cljs.core.IndexedSeq(G__27692__a,0,null);
} 
return G__27691__delegate.call(this,args);};
G__27691.cljs$lang$maxFixedArity = 0;
G__27691.cljs$lang$applyTo = (function (arglist__27693){
var args = cljs.core.seq(arglist__27693);
return G__27691__delegate(args);
});
G__27691.cljs$core$IFn$_invoke$arity$variadic = G__27691__delegate;
return G__27691;
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
var G__27695 = arguments.length;
switch (G__27695) {
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
var G__27698 = arguments.length;
switch (G__27698) {
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

var ret__5821__auto___27707 = (function (){
/**
 * An exception unsafe do-like macro. Supposes that we are already
 *   wrapped in promise context so avoids defensive wrapping.
 */
promesa.core.do_STAR_ = (function promesa$core$do_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27708 = arguments.length;
var i__5767__auto___27709 = (0);
while(true){
if((i__5767__auto___27709 < len__5766__auto___27708)){
args__5772__auto__.push((arguments[i__5767__auto___27709]));

var G__27710 = (i__5767__auto___27709 + (1));
i__5767__auto___27709 = G__27710;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return promesa.core.do_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(promesa.core.do_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
var pred__27704 = cljs.core._EQ_;
var expr__27705 = cljs.core.count.call(null,exprs);
if(cljs.core.truth_(pred__27704.call(null,(0),expr__27705))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.impl","resolved","promesa.impl/resolved",-72031341,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
} else {
if(cljs.core.truth_(pred__27704.call(null,(1),expr__27705))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,exprs),null,(1),null)))));
} else {
return cljs.core.reduce.call(null,(function (acc,e){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-mcat","promesa.protocols/-mcat",-1426184094,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,e,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___27700__auto__","___27700__auto__",1312329195,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null))))),null,(1),null)))));
}),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,cljs.core.last.call(null,exprs),null,(1),null))))),cljs.core.reverse.call(null,cljs.core.butlast.call(null,exprs)));
}
}
}));

(promesa.core.do_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core.do_STAR_.cljs$lang$applyTo = (function (seq27701){
var G__27702 = cljs.core.first.call(null,seq27701);
var seq27701__$1 = cljs.core.next.call(null,seq27701);
var G__27703 = cljs.core.first.call(null,seq27701__$1);
var seq27701__$2 = cljs.core.next.call(null,seq27701__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27702,G__27703,seq27701__$2);
}));

return null;
})()
;
(promesa.core.do_STAR_.cljs$lang$macro = true);

var ret__5821__auto___27715 = (function (){
/**
 * Execute potentially side effectful code and return a promise resolved
 *   to the last expression after awaiting the result of each
 *   expression.
 */
promesa.core.do$ = (function promesa$core$do(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27716 = arguments.length;
var i__5767__auto___27717 = (0);
while(true){
if((i__5767__auto___27717 < len__5766__auto___27716)){
args__5772__auto__.push((arguments[i__5767__auto___27717]));

var G__27718 = (i__5767__auto___27717 + (1));
i__5767__auto___27717 = G__27718;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return promesa.core.do$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(promesa.core.do$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-mcat","promesa.protocols/-mcat",-1426184094,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___27711__auto__","___27711__auto__",823594741,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do*","promesa.core/do*",-1752305515,null),null,(1),null)),exprs))),null,(1),null))))),null,(1),null)))));
}));

(promesa.core.do$.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.core.do$.cljs$lang$applyTo = (function (seq27712){
var G__27713 = cljs.core.first.call(null,seq27712);
var seq27712__$1 = cljs.core.next.call(null,seq27712);
var G__27714 = cljs.core.first.call(null,seq27712__$1);
var seq27712__$2 = cljs.core.next.call(null,seq27712__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27713,G__27714,seq27712__$2);
}));

return null;
})()
;
(promesa.core.do$.cljs$lang$macro = true);

var ret__5821__auto___27722 = (function (){
/**
 * A convenience alias for `do` macro.
 */
promesa.core.do_BANG_ = (function promesa$core$do_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27723 = arguments.length;
var i__5767__auto___27724 = (0);
while(true){
if((i__5767__auto___27724 < len__5766__auto___27723)){
args__5772__auto__.push((arguments[i__5767__auto___27724]));

var G__27725 = (i__5767__auto___27724 + (1));
i__5767__auto___27724 = G__27725;
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
(promesa.core.do_BANG_.cljs$lang$applyTo = (function (seq27719){
var G__27720 = cljs.core.first.call(null,seq27719);
var seq27719__$1 = cljs.core.next.call(null,seq27719);
var G__27721 = cljs.core.first.call(null,seq27719__$1);
var seq27719__$2 = cljs.core.next.call(null,seq27719__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27720,G__27721,seq27719__$2);
}));

return null;
})()
;
(promesa.core.do_BANG_.cljs$lang$macro = true);

var ret__5821__auto___27734 = (function (){
/**
 * An exception unsafe let-like macro. Supposes that we are already
 *   wrapped in promise context so avoids defensive wrapping.
 */
promesa.core.let_STAR_ = (function promesa$core$let_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27735 = arguments.length;
var i__5767__auto___27736 = (0);
while(true){
if((i__5767__auto___27736 < len__5766__auto___27735)){
args__5772__auto__.push((arguments[i__5767__auto___27736]));

var G__27737 = (i__5767__auto___27736 + (1));
i__5767__auto___27736 = G__27737;
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

return cljs.core.reduce.call(null,(function (acc,p__27730){
var vec__27731 = p__27730;
var l = cljs.core.nth.call(null,vec__27731,(0),null);
var r = cljs.core.nth.call(null,vec__27731,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-mcat","promesa.protocols/-mcat",-1426184094,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,l,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null))))),null,(1),null)))));
}),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do*","promesa.core/do*",-1752305515,null),null,(1),null)),body))),cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),bindings)));
}));

(promesa.core.let_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.let_STAR_.cljs$lang$applyTo = (function (seq27726){
var G__27727 = cljs.core.first.call(null,seq27726);
var seq27726__$1 = cljs.core.next.call(null,seq27726);
var G__27728 = cljs.core.first.call(null,seq27726__$1);
var seq27726__$2 = cljs.core.next.call(null,seq27726__$1);
var G__27729 = cljs.core.first.call(null,seq27726__$2);
var seq27726__$3 = cljs.core.next.call(null,seq27726__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27727,G__27728,G__27729,seq27726__$3);
}));

return null;
})()
;
(promesa.core.let_STAR_.cljs$lang$macro = true);

var ret__5821__auto___27743 = (function (){
/**
 * A `let` alternative that always returns promise and waits for all the
 *   promises on the bindings.
 */
promesa.core.let$ = (function promesa$core$let(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27744 = arguments.length;
var i__5767__auto___27745 = (0);
while(true){
if((i__5767__auto___27745 < len__5766__auto___27744)){
args__5772__auto__.push((arguments[i__5767__auto___27745]));

var G__27746 = (i__5767__auto___27745 + (1));
i__5767__auto___27745 = G__27746;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-mcat","promesa.protocols/-mcat",-1426184094,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___27738__auto__","___27738__auto__",-1038799965,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","let*","promesa.core/let*",-1840819052,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do","promesa.core/do",79683106,null),null,(1),null)),body)));
}
}));

(promesa.core.let$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.let$.cljs$lang$applyTo = (function (seq27739){
var G__27740 = cljs.core.first.call(null,seq27739);
var seq27739__$1 = cljs.core.next.call(null,seq27739);
var G__27741 = cljs.core.first.call(null,seq27739__$1);
var seq27739__$2 = cljs.core.next.call(null,seq27739__$1);
var G__27742 = cljs.core.first.call(null,seq27739__$2);
var seq27739__$3 = cljs.core.next.call(null,seq27739__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27740,G__27741,G__27742,seq27739__$3);
}));

return null;
})()
;
(promesa.core.let$.cljs$lang$macro = true);

var ret__5821__auto___27752 = (function (){
/**
 * A parallel let; executes all the bindings in parallel and when all
 *   bindings are resolved, executes the body.
 */
promesa.core.plet = (function promesa$core$plet(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27753 = arguments.length;
var i__5767__auto___27754 = (0);
while(true){
if((i__5767__auto___27754 < len__5766__auto___27753)){
args__5772__auto__.push((arguments[i__5767__auto___27754]));

var G__27755 = (i__5767__auto___27754 + (1));
i__5767__auto___27754 = G__27755;
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-mcat","promesa.protocols/-mcat",-1426184094,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___27747__auto__","___27747__auto__",-183273990,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,(function (){var bindings__$1 = cljs.core.partition.call(null,(2),bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","all","promesa.core/all",-152914545,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.call(null,cljs.core.second,bindings__$1),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","bind","promesa.core/bind",990464492,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,bindings__$1))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do*","promesa.core/do*",-1752305515,null),null,(1),null)),body))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
})(),null,(1),null))))),null,(1),null)))));
}));

(promesa.core.plet.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.plet.cljs$lang$applyTo = (function (seq27748){
var G__27749 = cljs.core.first.call(null,seq27748);
var seq27748__$1 = cljs.core.next.call(null,seq27748);
var G__27750 = cljs.core.first.call(null,seq27748__$1);
var seq27748__$2 = cljs.core.next.call(null,seq27748__$1);
var G__27751 = cljs.core.first.call(null,seq27748__$2);
var seq27748__$3 = cljs.core.next.call(null,seq27748__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27749,G__27750,G__27751,seq27748__$3);
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
var G__27757 = arguments.length;
switch (G__27757) {
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
var ret__5821__auto___27762 = (function (){
/**
 * Analogous to `clojure.core.async/thread` that returns a promise instance
 *   instead of the `Future`.
 */
promesa.core.thread = (function promesa$core$thread(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27763 = arguments.length;
var i__5767__auto___27764 = (0);
while(true){
if((i__5767__auto___27764 < len__5766__auto___27763)){
args__5772__auto__.push((arguments[i__5767__auto___27764]));

var G__27765 = (i__5767__auto___27764 + (1));
i__5767__auto___27764 = G__27765;
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
(promesa.core.thread.cljs$lang$applyTo = (function (seq27759){
var G__27760 = cljs.core.first.call(null,seq27759);
var seq27759__$1 = cljs.core.next.call(null,seq27759);
var G__27761 = cljs.core.first.call(null,seq27759__$1);
var seq27759__$2 = cljs.core.next.call(null,seq27759__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27760,G__27761,seq27759__$2);
}));

return null;
})()
;
(promesa.core.thread.cljs$lang$macro = true);

var ret__5821__auto___27769 = (function (){
/**
 * Analogous to `clojure.core.async/thread` that returns a promise instance
 *   instead of the `Future`. Useful for executing synchronous code in a
 *   separate thread (also works in cljs).
 */
promesa.core.vthread = (function promesa$core$vthread(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27770 = arguments.length;
var i__5767__auto___27771 = (0);
while(true){
if((i__5767__auto___27771 < len__5766__auto___27770)){
args__5772__auto__.push((arguments[i__5767__auto___27771]));

var G__27772 = (i__5767__auto___27771 + (1));
i__5767__auto___27771 = G__27772;
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
(promesa.core.vthread.cljs$lang$applyTo = (function (seq27766){
var G__27767 = cljs.core.first.call(null,seq27766);
var seq27766__$1 = cljs.core.next.call(null,seq27766);
var G__27768 = cljs.core.first.call(null,seq27766__$1);
var seq27766__$2 = cljs.core.next.call(null,seq27766__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27767,G__27768,seq27766__$2);
}));

return null;
})()
;
(promesa.core.vthread.cljs$lang$macro = true);

var ret__5821__auto___27776 = (function (){
/**
 * Analogous macro to `clojure.core/future` that returns promise
 *   instance instead of the `Future`. Exposed just for convenience and
 *   works as an alias to `thread`.
 */
promesa.core.future = (function promesa$core$future(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27777 = arguments.length;
var i__5767__auto___27778 = (0);
while(true){
if((i__5767__auto___27778 < len__5766__auto___27777)){
args__5772__auto__.push((arguments[i__5767__auto___27778]));

var G__27779 = (i__5767__auto___27778 + (1));
i__5767__auto___27778 = G__27779;
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
(promesa.core.future.cljs$lang$applyTo = (function (seq27773){
var G__27774 = cljs.core.first.call(null,seq27773);
var seq27773__$1 = cljs.core.next.call(null,seq27773);
var G__27775 = cljs.core.first.call(null,seq27773__$1);
var seq27773__$2 = cljs.core.next.call(null,seq27773__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27774,G__27775,seq27773__$2);
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

(promesa.core.Recur.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k27781,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__27785 = k27781;
var G__27785__$1 = (((G__27785 instanceof cljs.core.Keyword))?G__27785.fqn:null);
switch (G__27785__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27781,else__5343__auto__);

}
}));

(promesa.core.Recur.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__27786){
var vec__27787 = p__27786;
var k__5364__auto__ = cljs.core.nth.call(null,vec__27787,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__27787,(1),null);
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

(promesa.core.Recur.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27780){
var self__ = this;
var G__27780__$1 = this;
return (new cljs.core.RecordIter((0),G__27780__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

(promesa.core.Recur.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27782,other27783){
var self__ = this;
var this27782__$1 = this;
return (((!((other27783 == null)))) && ((((this27782__$1.constructor === other27783.constructor)) && (((cljs.core._EQ_.call(null,this27782__$1.bindings,other27783.bindings)) && (cljs.core._EQ_.call(null,this27782__$1.__extmap,other27783.__extmap)))))));
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

(promesa.core.Recur.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k27781){
var self__ = this;
var this__5347__auto____$1 = this;
var G__27790 = k27781;
var G__27790__$1 = (((G__27790 instanceof cljs.core.Keyword))?G__27790.fqn:null);
switch (G__27790__$1) {
case "bindings":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k27781);

}
}));

(promesa.core.Recur.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__27780){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__27791 = cljs.core.keyword_identical_QMARK_;
var expr__27792 = k__5349__auto__;
if(cljs.core.truth_(pred__27791.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__27792))){
return (new promesa.core.Recur(G__27780,self__.__meta,self__.__extmap,null));
} else {
return (new promesa.core.Recur(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__27780),null));
}
}));

(promesa.core.Recur.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null))], null),self__.__extmap));
}));

(promesa.core.Recur.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__27780){
var self__ = this;
var this__5339__auto____$1 = this;
return (new promesa.core.Recur(self__.bindings,G__27780,self__.__extmap,self__.__hash));
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
promesa.core.map__GT_Recur = (function promesa$core$map__GT_Recur(G__27784){
var extmap__5382__auto__ = (function (){var G__27794 = cljs.core.dissoc.call(null,G__27784,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
if(cljs.core.record_QMARK_.call(null,G__27784)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__27794);
} else {
return G__27794;
}
})();
return (new promesa.core.Recur(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__27784),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});

promesa.core.recur_QMARK_ = (function promesa$core$recur_QMARK_(o){
return (o instanceof promesa.core.Recur);
});
var ret__5821__auto___27801 = (function (){
promesa.core.loop = (function promesa$core$loop(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27802 = arguments.length;
var i__5767__auto___27803 = (0);
while(true){
if((i__5767__auto___27803 < len__5766__auto___27802)){
args__5772__auto__.push((arguments[i__5767__auto___27803]));

var G__27804 = (i__5767__auto___27803 + (1));
i__5767__auto___27803 = G__27804;
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
(promesa.core.loop.cljs$lang$applyTo = (function (seq27797){
var G__27798 = cljs.core.first.call(null,seq27797);
var seq27797__$1 = cljs.core.next.call(null,seq27797);
var G__27799 = cljs.core.first.call(null,seq27797__$1);
var seq27797__$2 = cljs.core.next.call(null,seq27797__$1);
var G__27800 = cljs.core.first.call(null,seq27797__$2);
var seq27797__$3 = cljs.core.next.call(null,seq27797__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27798,G__27799,G__27800,seq27797__$3);
}));

return null;
})()
;
(promesa.core.loop.cljs$lang$macro = true);

var ret__5821__auto___27808 = (function (){
promesa.core.recur = (function promesa$core$recur(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27809 = arguments.length;
var i__5767__auto___27810 = (0);
while(true){
if((i__5767__auto___27810 < len__5766__auto___27809)){
args__5772__auto__.push((arguments[i__5767__auto___27810]));

var G__27811 = (i__5767__auto___27810 + (1));
i__5767__auto___27810 = G__27811;
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
(promesa.core.recur.cljs$lang$applyTo = (function (seq27805){
var G__27806 = cljs.core.first.call(null,seq27805);
var seq27805__$1 = cljs.core.next.call(null,seq27805);
var G__27807 = cljs.core.first.call(null,seq27805__$1);
var seq27805__$2 = cljs.core.next.call(null,seq27805__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27806,G__27807,seq27805__$2);
}));

return null;
})()
;
(promesa.core.recur.cljs$lang$macro = true);

var ret__5821__auto___27820 = (function (){
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
var len__5766__auto___27821 = arguments.length;
var i__5767__auto___27822 = (0);
while(true){
if((i__5767__auto___27822 < len__5766__auto___27821)){
args__5772__auto__.push((arguments[i__5767__auto___27822]));

var G__27823 = (i__5767__auto___27822 + (1));
i__5767__auto___27822 = G__27823;
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
var vec__27817 = ((cljs.core.sequential_QMARK_.call(null,arg))?arg:(new cljs.core.List(null,arg,null,(1),null)));
var seq__27818 = cljs.core.seq.call(null,vec__27817);
var first__27819 = cljs.core.first.call(null,seq__27818);
var seq__27818__$1 = cljs.core.next.call(null,seq__27818);
var f = first__27819;
var args = seq__27818__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p__27812__auto__","p__27812__auto__",39030169,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p__27812__auto__","p__27812__auto__",39030169,null),null,(1),null)),args))),null,(1),null)))));
}),forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","chain","promesa.core/chain",-2105367206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),fns)));
}));

(promesa.core.__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.__GT_.cljs$lang$applyTo = (function (seq27813){
var G__27814 = cljs.core.first.call(null,seq27813);
var seq27813__$1 = cljs.core.next.call(null,seq27813);
var G__27815 = cljs.core.first.call(null,seq27813__$1);
var seq27813__$2 = cljs.core.next.call(null,seq27813__$1);
var G__27816 = cljs.core.first.call(null,seq27813__$2);
var seq27813__$3 = cljs.core.next.call(null,seq27813__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27814,G__27815,G__27816,seq27813__$3);
}));

return null;
})()
;
(promesa.core.__GT_.cljs$lang$macro = true);

var ret__5821__auto___27832 = (function (){
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
var len__5766__auto___27833 = arguments.length;
var i__5767__auto___27834 = (0);
while(true){
if((i__5767__auto___27834 < len__5766__auto___27833)){
args__5772__auto__.push((arguments[i__5767__auto___27834]));

var G__27835 = (i__5767__auto___27834 + (1));
i__5767__auto___27834 = G__27835;
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
var vec__27829 = ((cljs.core.sequential_QMARK_.call(null,arg))?arg:(new cljs.core.List(null,arg,null,(1),null)));
var seq__27830 = cljs.core.seq.call(null,vec__27829);
var first__27831 = cljs.core.first.call(null,seq__27830);
var seq__27830__$1 = cljs.core.next.call(null,seq__27830);
var f = first__27831;
var args = seq__27830__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p__27824__auto__","p__27824__auto__",-415997786,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f,null,(1),null)),args,(new cljs.core.List(null,new cljs.core.Symbol(null,"p__27824__auto__","p__27824__auto__",-415997786,null),null,(1),null))))),null,(1),null)))));
}),forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","chain","promesa.core/chain",-2105367206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),fns)));
}));

(promesa.core.__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.__GT__GT_.cljs$lang$applyTo = (function (seq27825){
var G__27826 = cljs.core.first.call(null,seq27825);
var seq27825__$1 = cljs.core.next.call(null,seq27825);
var G__27827 = cljs.core.first.call(null,seq27825__$1);
var seq27825__$2 = cljs.core.next.call(null,seq27825__$1);
var G__27828 = cljs.core.first.call(null,seq27825__$2);
var seq27825__$3 = cljs.core.next.call(null,seq27825__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27826,G__27827,G__27828,seq27825__$3);
}));

return null;
})()
;
(promesa.core.__GT__GT_.cljs$lang$macro = true);

var ret__5821__auto___27841 = (function (){
/**
 * Like clojure.core/as->, but it will handle promises in values
 * and make sure the next form gets the value realized instead of
 * the promise.
 */
promesa.core.as__GT_ = (function promesa$core$as__GT_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27842 = arguments.length;
var i__5767__auto___27843 = (0);
while(true){
if((i__5767__auto___27843 < len__5766__auto___27842)){
args__5772__auto__.push((arguments[i__5767__auto___27843]));

var G__27844 = (i__5767__auto___27843 + (1));
i__5767__auto___27843 = G__27844;
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
(promesa.core.as__GT_.cljs$lang$applyTo = (function (seq27836){
var G__27837 = cljs.core.first.call(null,seq27836);
var seq27836__$1 = cljs.core.next.call(null,seq27836);
var G__27838 = cljs.core.first.call(null,seq27836__$1);
var seq27836__$2 = cljs.core.next.call(null,seq27836__$1);
var G__27839 = cljs.core.first.call(null,seq27836__$2);
var seq27836__$3 = cljs.core.next.call(null,seq27836__$2);
var G__27840 = cljs.core.first.call(null,seq27836__$3);
var seq27836__$4 = cljs.core.next.call(null,seq27836__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27837,G__27838,G__27839,G__27840,seq27836__$4);
}));

return null;
})()
;
(promesa.core.as__GT_.cljs$lang$macro = true);

var ret__5821__auto___27860 = (function (){
/**
 * Like clojure.core/with-redefs, but it will handle promises in
 * body and wait until they resolve or reject before restoring the
 * bindings. Useful for mocking async APIs.
 */
promesa.core.with_redefs = (function promesa$core$with_redefs(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27861 = arguments.length;
var i__5767__auto___27862 = (0);
while(true){
if((i__5767__auto___27862 < len__5766__auto___27861)){
args__5772__auto__.push((arguments[i__5767__auto___27862]));

var G__27863 = (i__5767__auto___27862 + (1));
i__5767__auto___27862 = G__27863;
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
var orig_val_syms = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,(function (p1__27845_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27845_SHARP_),"-orig-val__"].join('');
}),cljs.core.name),names);
var temp_val_syms = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,(function (p1__27846_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27846_SHARP_),"-temp-val__"].join('');
}),cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,temp_val_syms);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,orig_val_syms));
var bind_value = (cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))?(function (p__27852){
var vec__27853 = p__27852;
var k = cljs.core.nth.call(null,vec__27853,(0),null);
var v = cljs.core.nth.call(null,vec__27853,(1),null);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),(new cljs.core.List(null,k,(new cljs.core.List(null,v,null,(1),null)),(2),null)),(3),null));
}):(function (p__27856){
var vec__27857 = p__27856;
var k = cljs.core.nth.call(null,vec__27857,(0),null);
var v = cljs.core.nth.call(null,vec__27857,(1),null);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"alter-var-root","alter-var-root",-1749458519,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"constantly","constantly",-271143939,null),(new cljs.core.List(null,v,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,orig_val_syms,names),cljs.core.interleave.call(null,temp_val_syms,vals))))),null,(1),null)),cljs.core.map.call(null,bind_value,binds),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do!","promesa.core/do!",12645930,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","finally","promesa.core/finally",-527135850,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"___27847__auto__","___27847__auto__",690016769,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"___27847__auto__","___27847__auto__",690016769,null),null,(1),null)))))),null,(1),null)),cljs.core.map.call(null,bind_value,resets)))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(promesa.core.with_redefs.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.with_redefs.cljs$lang$applyTo = (function (seq27848){
var G__27849 = cljs.core.first.call(null,seq27848);
var seq27848__$1 = cljs.core.next.call(null,seq27848);
var G__27850 = cljs.core.first.call(null,seq27848__$1);
var seq27848__$2 = cljs.core.next.call(null,seq27848__$1);
var G__27851 = cljs.core.first.call(null,seq27848__$2);
var seq27848__$3 = cljs.core.next.call(null,seq27848__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27849,G__27850,G__27851,seq27848__$3);
}));

return null;
})()
;
(promesa.core.with_redefs.cljs$lang$macro = true);

var ret__5821__auto___27872 = (function (){
/**
 * Simplified version of `doseq` which takes one binding and a seq, and
 *   runs over it using `promesa.core/run!`
 */
promesa.core.doseq = (function promesa$core$doseq(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27873 = arguments.length;
var i__5767__auto___27874 = (0);
while(true){
if((i__5767__auto___27874 < len__5766__auto___27873)){
args__5772__auto__.push((arguments[i__5767__auto___27874]));

var G__27875 = (i__5767__auto___27874 + (1));
i__5767__auto___27874 = G__27875;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return promesa.core.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(promesa.core.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__27868,body){
var vec__27869 = p__27868;
var binding = cljs.core.nth.call(null,vec__27869,(0),null);
var xs = cljs.core.nth.call(null,vec__27869,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","run!","promesa.core/run!",-1526702839,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,binding,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do*","promesa.core/do*",-1752305515,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,xs,null,(1),null)))));
}));

(promesa.core.doseq.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.core.doseq.cljs$lang$applyTo = (function (seq27864){
var G__27865 = cljs.core.first.call(null,seq27864);
var seq27864__$1 = cljs.core.next.call(null,seq27864);
var G__27866 = cljs.core.first.call(null,seq27864__$1);
var seq27864__$2 = cljs.core.next.call(null,seq27864__$1);
var G__27867 = cljs.core.first.call(null,seq27864__$2);
var seq27864__$3 = cljs.core.next.call(null,seq27864__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27865,G__27866,G__27867,seq27864__$3);
}));

return null;
})()
;
(promesa.core.doseq.cljs$lang$macro = true);


//# sourceMappingURL=core.js.map

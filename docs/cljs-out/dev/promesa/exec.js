// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('promesa.exec');
goog.require('cljs.core');
goog.require('promesa.protocols');
goog.require('promesa.util');
goog.require('promesa.impl.promise');
goog.require('goog.object');
goog.scope(function(){
promesa.exec.goog$module$goog$object = goog.module.get('goog.object');
});
promesa.exec._STAR_default_scheduler_STAR_ = null;
promesa.exec._STAR_default_executor_STAR_ = null;
/**
 * Var that indicates the availability of virtual threads.
 */
promesa.exec.virtual_threads_available_QMARK_ = false;
/**
 * backward compatibility alias for `virtual-threads-available?`
 */
promesa.exec.vthread_supported_QMARK_ = promesa.exec.virtual_threads_available_QMARK_;
promesa.exec.noop = cljs.core.constantly.call(null,null);
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_scheduler !== 'undefined')){
} else {
/**
 * Default scheduled executor instance.
 */
promesa.exec.default_scheduler = (new cljs.core.Delay((function (){
return promesa.exec.scheduled_executor.call(null);
}),null));
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_executor !== 'undefined')){
} else {
/**
 * Default executor instance, ForkJoinPool/commonPool in JVM, MicrotaskExecutor on JS.
 */
promesa.exec.default_executor = (new cljs.core.Delay((function (){
return promesa.exec.microtask_executor.call(null);
}),null));
}
/**
 * Default Executor instance that runs the task in the same thread.
 */
promesa.exec.default_current_thread_executor = (new cljs.core.Delay((function (){
return promesa.exec.current_thread_executor.call(null);
}),null));
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_cached_executor !== 'undefined')){
} else {
/**
 * A global, cached thread executor service.
 */
promesa.exec.default_cached_executor = promesa.exec.default_executor;
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_thread_executor !== 'undefined')){
} else {
/**
 * A global, thread per task executor service.
 */
promesa.exec.default_thread_executor = promesa.exec.default_executor;
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_vthread_executor !== 'undefined')){
} else {
/**
 * A global, virtual thread per task executor service.
 */
promesa.exec.default_vthread_executor = promesa.exec.default_executor;
}
/**
 * Returns true if `o` is an instane of Executor or satisfies IExecutor protocol.
 */
promesa.exec.executor_QMARK_ = (function promesa$exec$executor_QMARK_(o){
if((!((o == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === o.promesa$protocols$IExecutor$)))){
return true;
} else {
if((!o.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,promesa.protocols.IExecutor,o);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,promesa.protocols.IExecutor,o);
}
});
promesa.exec.resolve_executor = (function promesa$exec$resolve_executor(var_args){
var G__25935 = arguments.length;
switch (G__25935) {
case 0:
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0 = (function (){
return promesa.exec.resolve_executor.call(null,null);
}));

(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1 = (function (executor){
if((executor == null)){
return cljs.core.deref.call(null,promesa.exec.default_executor);
} else {
if(promesa.exec.executor_QMARK_.call(null,executor)){
return executor;
} else {
if(cljs.core.delay_QMARK_.call(null,executor)){
return promesa.exec.resolve_executor.call(null,cljs.core.deref.call(null,executor));
} else {
var G__25936 = executor;
var G__25936__$1 = (((G__25936 instanceof cljs.core.Keyword))?G__25936.fqn:null);
switch (G__25936__$1) {
case "default":
return cljs.core.deref.call(null,promesa.exec.default_executor);

break;
case "cached":
return cljs.core.deref.call(null,promesa.exec.default_cached_executor);

break;
case "thread":
return cljs.core.deref.call(null,promesa.exec.default_thread_executor);

break;
case "vthread":
return cljs.core.deref.call(null,promesa.exec.default_vthread_executor);

break;
case "same-thread":
return cljs.core.deref.call(null,promesa.exec.default_current_thread_executor);

break;
case "current-thread":
return cljs.core.deref.call(null,promesa.exec.default_current_thread_executor);

break;
default:
throw (new TypeError("invalid executor"));

}

}
}
}
}));

(promesa.exec.resolve_executor.cljs$lang$maxFixedArity = 1);

promesa.exec.resolve_scheduler = (function promesa$exec$resolve_scheduler(var_args){
var G__25940 = arguments.length;
switch (G__25940) {
case 0:
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0 = (function (){
return promesa.exec.resolve_scheduler.call(null,null);
}));

(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1 = (function (scheduler){
if((((scheduler == null)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),scheduler)))){
return cljs.core.deref.call(null,promesa.exec.default_scheduler);
} else {
return promesa.util.maybe_deref.call(null,scheduler);
}
}));

(promesa.exec.resolve_scheduler.cljs$lang$maxFixedArity = 1);

promesa.exec.wrap_bindings = (function promesa$exec$wrap_bindings(f){
return f;
});
/**
 * Run the task in the provided executor, returns `nil`. Analogous to
 *   the `(.execute executor f)`. Fire and forget.
 */
promesa.exec.exec_BANG_ = (function promesa$exec$exec_BANG_(var_args){
var G__25943 = arguments.length;
switch (G__25943) {
case 1:
return promesa.exec.exec_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.exec_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.exec_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return promesa.protocols._exec_BANG_.call(null,promesa.exec.resolve_executor.call(null,promesa.exec._STAR_default_executor_STAR_),f);
}));

(promesa.exec.exec_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
return promesa.protocols._exec_BANG_.call(null,promesa.exec.resolve_executor.call(null,executor),f);
}));

(promesa.exec.exec_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Run the task in the provided executor.
 */
promesa.exec.run_BANG_ = (function promesa$exec$run_BANG_(var_args){
var G__25946 = arguments.length;
switch (G__25946) {
case 1:
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return promesa.protocols._run_BANG_.call(null,promesa.exec.resolve_executor.call(null,promesa.exec._STAR_default_executor_STAR_),f);
}));

(promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
return promesa.protocols._run_BANG_.call(null,promesa.exec.resolve_executor.call(null,executor),f);
}));

(promesa.exec.run_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Submit a task to be executed in a provided executor
 *   and return a promise that will be completed with
 *   the return value of a task.
 * 
 *   A task is a plain clojure function.
 */
promesa.exec.submit_BANG_ = (function promesa$exec$submit_BANG_(var_args){
var G__25949 = arguments.length;
switch (G__25949) {
case 1:
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return promesa.protocols._submit_BANG_.call(null,promesa.exec.resolve_executor.call(null,promesa.exec._STAR_default_executor_STAR_),f);
}));

(promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
return promesa.protocols._submit_BANG_.call(null,promesa.exec.resolve_executor.call(null,executor),f);
}));

(promesa.exec.submit_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule a callable to be executed after the `ms` delay
 *   is reached.
 * 
 *   In JVM it uses a scheduled executor service and in JS
 *   it uses the `setTimeout` function.
 */
promesa.exec.schedule_BANG_ = (function promesa$exec$schedule_BANG_(var_args){
var G__25952 = arguments.length;
switch (G__25952) {
case 2:
return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ms,f){
return promesa.protocols._schedule_BANG_.call(null,promesa.exec.resolve_scheduler.call(null),ms,f);
}));

(promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (scheduler,ms,f){
return promesa.protocols._schedule_BANG_.call(null,promesa.exec.resolve_scheduler.call(null,scheduler),ms,f);
}));

(promesa.exec.schedule_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates an executor instance that run tasks in the same thread.
 */
promesa.exec.current_thread_executor = (function promesa$exec$current_thread_executor(){
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.t_promesa$exec25954 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {promesa.protocols.IExecutor}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.exec.t_promesa$exec25954 = (function (meta25955){
this.meta25955 = meta25955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(promesa.exec.t_promesa$exec25954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25956,meta25955__$1){
var self__ = this;
var _25956__$1 = this;
return (new promesa.exec.t_promesa$exec25954(meta25955__$1));
}));

(promesa.exec.t_promesa$exec25954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25956){
var self__ = this;
var _25956__$1 = this;
return self__.meta25955;
}));

(promesa.exec.t_promesa$exec25954.prototype.promesa$protocols$IExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.t_promesa$exec25954.prototype.promesa$protocols$IExecutor$_exec_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
try{f.call(null);

return null;
}catch (e25957){var _ = e25957;
return null;
}}));

(promesa.exec.t_promesa$exec25954.prototype.promesa$protocols$IExecutor$_run_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
try{return promesa.protocols._promise.call(null,cljs.core.comp.call(null,promesa.exec.noop,f));
}catch (e25958){var cause = e25958;
return promesa.protocols._promise.call(null,cause);
}}));

(promesa.exec.t_promesa$exec25954.prototype.promesa$protocols$IExecutor$_submit_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
try{return promesa.protocols._promise.call(null,f.call(null));
}catch (e25959){var cause = e25959;
return promesa.protocols._promise.call(null,cause);
}}));

(promesa.exec.t_promesa$exec25954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25955","meta25955",1233314138,null)], null);
}));

(promesa.exec.t_promesa$exec25954.cljs$lang$type = true);

(promesa.exec.t_promesa$exec25954.cljs$lang$ctorStr = "promesa.exec/t_promesa$exec25954");

(promesa.exec.t_promesa$exec25954.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"promesa.exec/t_promesa$exec25954");
}));

/**
 * Positional factory function for promesa.exec/t_promesa$exec25954.
 */
promesa.exec.__GT_t_promesa$exec25954 = (function promesa$exec$current_thread_executor_$___GT_t_promesa$exec25954(meta25955){
return (new promesa.exec.t_promesa$exec25954(meta25955));
});

}

return (new promesa.exec.t_promesa$exec25954(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * An IExecutor that schedules tasks to be executed in the MicrotasksQueue.
 */
promesa.exec.microtask_executor = (function promesa$exec$microtask_executor(){
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.t_promesa$exec25960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {promesa.protocols.IExecutor}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.exec.t_promesa$exec25960 = (function (meta25961){
this.meta25961 = meta25961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(promesa.exec.t_promesa$exec25960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25962,meta25961__$1){
var self__ = this;
var _25962__$1 = this;
return (new promesa.exec.t_promesa$exec25960(meta25961__$1));
}));

(promesa.exec.t_promesa$exec25960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25962){
var self__ = this;
var _25962__$1 = this;
return self__.meta25961;
}));

(promesa.exec.t_promesa$exec25960.prototype.promesa$protocols$IExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.t_promesa$exec25960.prototype.promesa$protocols$IExecutor$_exec_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.impl.promise.nextTick(f);
}));

(promesa.exec.t_promesa$exec25960.prototype.promesa$protocols$IExecutor$_run_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._fmap.call(null,promesa.protocols._fmap.call(null,promesa.protocols._promise.call(null,null),(function (_){
try{return f.call(null);
}catch (e25963){var ___$1 = e25963;
return null;
}})),promesa.exec.noop);
}));

(promesa.exec.t_promesa$exec25960.prototype.promesa$protocols$IExecutor$_submit_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._fmap.call(null,promesa.protocols._promise.call(null,null),(function (_){
return f.call(null);
}));
}));

(promesa.exec.t_promesa$exec25960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25961","meta25961",1642565486,null)], null);
}));

(promesa.exec.t_promesa$exec25960.cljs$lang$type = true);

(promesa.exec.t_promesa$exec25960.cljs$lang$ctorStr = "promesa.exec/t_promesa$exec25960");

(promesa.exec.t_promesa$exec25960.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"promesa.exec/t_promesa$exec25960");
}));

/**
 * Positional factory function for promesa.exec/t_promesa$exec25960.
 */
promesa.exec.__GT_t_promesa$exec25960 = (function promesa$exec$microtask_executor_$___GT_t_promesa$exec25960(meta25961){
return (new promesa.exec.t_promesa$exec25960(meta25961));
});

}

return (new promesa.exec.t_promesa$exec25960(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {promesa.protocols.IScheduler}
*/
promesa.exec.Scheduler = (function (){
});
(promesa.exec.Scheduler.prototype.promesa$protocols$IScheduler$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.Scheduler.prototype.promesa$protocols$IScheduler$_schedule_BANG_$arity$3 = (function (_,ms,f){
var self__ = this;
var ___$1 = this;
var df = promesa.impl.promise.deferred();
var tid = setTimeout((function (){
try{return promesa.protocols._resolve_BANG_.call(null,df,f.call(null));
}catch (e25964){var cause = e25964;
return promesa.protocols._reject_BANG_.call(null,df,cause);
}}),ms);
promesa.protocols._fnly.call(null,df,(function (___$2,c){
if(cljs.core.truth_(promesa.impl.promise.isCancellationError(c))){
return clearTimeout(tid);
} else {
return null;
}
}));

return df;
}));

(promesa.exec.Scheduler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(promesa.exec.Scheduler.cljs$lang$type = true);

(promesa.exec.Scheduler.cljs$lang$ctorStr = "promesa.exec/Scheduler");

(promesa.exec.Scheduler.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"promesa.exec/Scheduler");
}));

/**
 * Positional factory function for promesa.exec/Scheduler.
 */
promesa.exec.__GT_Scheduler = (function promesa$exec$__GT_Scheduler(){
return (new promesa.exec.Scheduler());
});

/**
 * A scheduled thread pool constructor. A ScheduledExecutor (IScheduler
 *   in CLJS) instance allows execute asynchronous tasks some time later.
 */
promesa.exec.scheduled_executor = (function promesa$exec$scheduled_executor(var_args){
var args__5772__auto__ = [];
var len__5766__auto___25968 = arguments.length;
var i__5767__auto___25969 = (0);
while(true){
if((i__5767__auto___25969 < len__5766__auto___25968)){
args__5772__auto__.push((arguments[i__5767__auto___25969]));

var G__25970 = (i__5767__auto___25969 + (1));
i__5767__auto___25969 = G__25970;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$variadic = (function (p__25966){
var map__25967 = p__25966;
var map__25967__$1 = cljs.core.__destructure_map.call(null,map__25967);
var parallelism = cljs.core.get.call(null,map__25967__$1,new cljs.core.Keyword(null,"parallelism","parallelism",-930922333),(1));
var factory = cljs.core.get.call(null,map__25967__$1,new cljs.core.Keyword(null,"factory","factory",63933746));
return promesa.exec.__GT_Scheduler.call(null);
}));

(promesa.exec.scheduled_executor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(promesa.exec.scheduled_executor.cljs$lang$applyTo = (function (seq25965){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25965));
}));

var ret__5821__auto___25975 = (function (){
/**
 * Helper macro for dispatch execution of the body to an executor
 *   service. The returned promise is not cancellable (the body will be
 *   executed independently of the cancellation).
 */
promesa.exec.with_dispatch = (function promesa$exec$with_dispatch(var_args){
var args__5772__auto__ = [];
var len__5766__auto___25976 = arguments.length;
var i__5767__auto___25977 = (0);
while(true){
if((i__5767__auto___25977 < len__5766__auto___25976)){
args__5772__auto__.push((arguments[i__5767__auto___25977]));

var G__25978 = (i__5767__auto___25977 + (1));
i__5767__auto___25977 = G__25978;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return promesa.exec.with_dispatch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(promesa.exec.with_dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,executor,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.exec","submit!","promesa.exec/submit!",1325930091,null),null,(1),null)),(new cljs.core.List(null,executor,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.exec","wrap-bindings","promesa.exec/wrap-bindings",-193702330,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.with_meta(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"once","once",-262568523),true], null)),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/home/runner/work/juliaworld/juliaworld/target/public/cljs-out/dev/promesa/exec.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,624,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,50,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,624,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,53,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"once","once",-262568523),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-mcat","promesa.protocols/-mcat",-1426184094,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null))))),null,(1),null)))));
}));

(promesa.exec.with_dispatch.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.exec.with_dispatch.cljs$lang$applyTo = (function (seq25971){
var G__25972 = cljs.core.first.call(null,seq25971);
var seq25971__$1 = cljs.core.next.call(null,seq25971);
var G__25973 = cljs.core.first.call(null,seq25971__$1);
var seq25971__$2 = cljs.core.next.call(null,seq25971__$1);
var G__25974 = cljs.core.first.call(null,seq25971__$2);
var seq25971__$3 = cljs.core.next.call(null,seq25971__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25972,G__25973,G__25974,seq25971__$3);
}));

return null;
})()
;
(promesa.exec.with_dispatch.cljs$lang$macro = true);

var ret__5821__auto___25984 = (function (){
/**
 * Blocking version of `with-dispatch`. Useful when you want to
 *   dispatch a blocking operation to a separated thread and join current
 *   thread waiting for result; effective when current thread is virtual
 *   thread.
 */
promesa.exec.with_dispatch_BANG_ = (function promesa$exec$with_dispatch_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___25985 = arguments.length;
var i__5767__auto___25986 = (0);
while(true){
if((i__5767__auto___25986 < len__5766__auto___25985)){
args__5772__auto__.push((arguments[i__5767__auto___25986]));

var G__25987 = (i__5767__auto___25986 + (1));
i__5767__auto___25986 = G__25987;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return promesa.exec.with_dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(promesa.exec.with_dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,executor,body){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
throw cljs.core.ex_info.call(null,"cljs not supported on with-dispatch! macro",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.exec","submit!","promesa.exec/submit!",1325930091,null),null,(1),null)),(new cljs.core.List(null,executor,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.exec","wrap-bindings","promesa.exec/wrap-bindings",-193702330,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.with_meta(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"once","once",-262568523),true], null)),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/home/runner/work/juliaworld/juliaworld/target/public/cljs-out/dev/promesa/exec.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,636,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,52,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,636,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,55,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"once","once",-262568523),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),body))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-mcat","promesa.protocols/-mcat",-1426184094,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-await!","promesa.protocols/-await!",390583143,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("promesa.exec","ExecutionException","promesa.exec/ExecutionException",-93150466,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__25979__auto__","e__25979__auto__",1290918598,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".getCause",".getCause",-1908054310,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__25979__auto__","e__25979__auto__",1290918598,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("promesa.exec","CompletionException","promesa.exec/CompletionException",178485205,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__25979__auto__","e__25979__auto__",1290918598,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".getCause",".getCause",-1908054310,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__25979__auto__","e__25979__auto__",1290918598,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(promesa.exec.with_dispatch_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.exec.with_dispatch_BANG_.cljs$lang$applyTo = (function (seq25980){
var G__25981 = cljs.core.first.call(null,seq25980);
var seq25980__$1 = cljs.core.next.call(null,seq25980);
var G__25982 = cljs.core.first.call(null,seq25980__$1);
var seq25980__$2 = cljs.core.next.call(null,seq25980__$1);
var G__25983 = cljs.core.first.call(null,seq25980__$2);
var seq25980__$3 = cljs.core.next.call(null,seq25980__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25981,G__25982,G__25983,seq25980__$3);
}));

return null;
})()
;
(promesa.exec.with_dispatch_BANG_.cljs$lang$macro = true);

var ret__5821__auto___25992 = (function (){
/**
 * Binds the *default-executor* var with the provided executor,
 *   executes the macro body. It also can optionally shutdown or shutdown
 *   and interrupt on termination if you provide `^:shutdown` and
 *   `^:interrupt` metadata.
 * 
 *   **EXPERIMENTAL API:** This function should be considered
 *   EXPERIMENTAL and may be changed or removed in future versions until
 *   this notification is removed.
 */
promesa.exec.with_executor = (function promesa$exec$with_executor(var_args){
var args__5772__auto__ = [];
var len__5766__auto___25993 = arguments.length;
var i__5767__auto___25994 = (0);
while(true){
if((i__5767__auto___25994 < len__5766__auto___25993)){
args__5772__auto__.push((arguments[i__5767__auto___25994]));

var G__25995 = (i__5767__auto___25994 + (1));
i__5767__auto___25994 = G__25995;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return promesa.exec.with_executor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(promesa.exec.with_executor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,executor,body){
var interrupt_QMARK_ = new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,executor));
var shutdown_QMARK_ = new cljs.core.Keyword(null,"shutdown","shutdown",-1876565378).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,executor));
var executor_sym = cljs.core.gensym.call(null,"executor");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,executor_sym,null,(1),null)),(new cljs.core.List(null,executor,null,(1),null)),(new cljs.core.List(null,executor_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),null,(1),null)),(new cljs.core.List(null,executor_sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,executor_sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,executor_sym,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.exec","*default-executor*","promesa.exec/*default-executor*",1981393670,null),null,(1),null)),(new cljs.core.List(null,executor_sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"finally","finally",-1065347064,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_((function (){var or__5043__auto__ = shutdown_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return interrupt_QMARK_;
}
})())?(new cljs.core.List(null,(cljs.core.truth_(interrupt_QMARK_)?new cljs.core.Symbol("promesa.exec","shutdown-now!","promesa.exec/shutdown-now!",-1083054603,null):new cljs.core.Symbol("promesa.exec","shutdown!","promesa.exec/shutdown!",-434707991,null)),(new cljs.core.List(null,executor_sym,null,(1),null)),(2),null)):null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(promesa.exec.with_executor.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(promesa.exec.with_executor.cljs$lang$applyTo = (function (seq25988){
var G__25989 = cljs.core.first.call(null,seq25988);
var seq25988__$1 = cljs.core.next.call(null,seq25988);
var G__25990 = cljs.core.first.call(null,seq25988__$1);
var seq25988__$2 = cljs.core.next.call(null,seq25988__$1);
var G__25991 = cljs.core.first.call(null,seq25988__$2);
var seq25988__$3 = cljs.core.next.call(null,seq25988__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25989,G__25990,G__25991,seq25988__$3);
}));

return null;
})()
;
(promesa.exec.with_executor.cljs$lang$macro = true);


//# sourceMappingURL=exec.js.map
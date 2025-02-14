// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15679 = arguments.length;
switch (G__15679) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15680 = (function (f,blockable,meta15681){
this.f = f;
this.blockable = blockable;
this.meta15681 = meta15681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15682,meta15681__$1){
var self__ = this;
var _15682__$1 = this;
return (new cljs.core.async.t_cljs$core$async15680(self__.f,self__.blockable,meta15681__$1));
}));

(cljs.core.async.t_cljs$core$async15680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15682){
var self__ = this;
var _15682__$1 = this;
return self__.meta15681;
}));

(cljs.core.async.t_cljs$core$async15680.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15680.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15681","meta15681",-933103479,null)], null);
}));

(cljs.core.async.t_cljs$core$async15680.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15680");

(cljs.core.async.t_cljs$core$async15680.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async15680");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15680.
 */
cljs.core.async.__GT_t_cljs$core$async15680 = (function cljs$core$async$__GT_t_cljs$core$async15680(f__$1,blockable__$1,meta15681){
return (new cljs.core.async.t_cljs$core$async15680(f__$1,blockable__$1,meta15681));
});

}

return (new cljs.core.async.t_cljs$core$async15680(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15686 = arguments.length;
switch (G__15686) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15689 = arguments.length;
switch (G__15689) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15692 = arguments.length;
switch (G__15692) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_15694 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15694);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_15694);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15696 = arguments.length;
switch (G__15696) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___15698 = n;
var x_15699 = (0);
while(true){
if((x_15699 < n__5633__auto___15698)){
(a[x_15699] = (0));

var G__15700 = (x_15699 + (1));
x_15699 = G__15700;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__15701 = (i + (1));
i = G__15701;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15702 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15702 = (function (flag,meta15703){
this.flag = flag;
this.meta15703 = meta15703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15704,meta15703__$1){
var self__ = this;
var _15704__$1 = this;
return (new cljs.core.async.t_cljs$core$async15702(self__.flag,meta15703__$1));
}));

(cljs.core.async.t_cljs$core$async15702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15704){
var self__ = this;
var _15704__$1 = this;
return self__.meta15703;
}));

(cljs.core.async.t_cljs$core$async15702.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async15702.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15703","meta15703",-183966086,null)], null);
}));

(cljs.core.async.t_cljs$core$async15702.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15702");

(cljs.core.async.t_cljs$core$async15702.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async15702");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15702.
 */
cljs.core.async.__GT_t_cljs$core$async15702 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15702(flag__$1,meta15703){
return (new cljs.core.async.t_cljs$core$async15702(flag__$1,meta15703));
});

}

return (new cljs.core.async.t_cljs$core$async15702(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15705 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15705 = (function (flag,cb,meta15706){
this.flag = flag;
this.cb = cb;
this.meta15706 = meta15706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15707,meta15706__$1){
var self__ = this;
var _15707__$1 = this;
return (new cljs.core.async.t_cljs$core$async15705(self__.flag,self__.cb,meta15706__$1));
}));

(cljs.core.async.t_cljs$core$async15705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15707){
var self__ = this;
var _15707__$1 = this;
return self__.meta15706;
}));

(cljs.core.async.t_cljs$core$async15705.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15705.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async15705.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15705.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15706","meta15706",-2070531914,null)], null);
}));

(cljs.core.async.t_cljs$core$async15705.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15705");

(cljs.core.async.t_cljs$core$async15705.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async15705");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15705.
 */
cljs.core.async.__GT_t_cljs$core$async15705 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15705(flag__$1,cb__$1,meta15706){
return (new cljs.core.async.t_cljs$core$async15705(flag__$1,cb__$1,meta15706));
});

}

return (new cljs.core.async.t_cljs$core$async15705(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15708_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15708_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15709_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15709_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15710 = (i + (1));
i = G__15710;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5041__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___15715 = arguments.length;
var i__5767__auto___15716 = (0);
while(true){
if((i__5767__auto___15716 < len__5766__auto___15715)){
args__5772__auto__.push((arguments[i__5767__auto___15716]));

var G__15717 = (i__5767__auto___15716 + (1));
i__5767__auto___15716 = G__15717;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15713){
var map__15714 = p__15713;
var map__15714__$1 = cljs.core.__destructure_map.call(null,map__15714);
var opts = map__15714__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15711){
var G__15712 = cljs.core.first.call(null,seq15711);
var seq15711__$1 = cljs.core.next.call(null,seq15711);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15712,seq15711__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15719 = arguments.length;
switch (G__15719) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15619__auto___15765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_15743){
var state_val_15744 = (state_15743[(1)]);
if((state_val_15744 === (7))){
var inst_15739 = (state_15743[(2)]);
var state_15743__$1 = state_15743;
var statearr_15745_15766 = state_15743__$1;
(statearr_15745_15766[(2)] = inst_15739);

(statearr_15745_15766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15744 === (1))){
var state_15743__$1 = state_15743;
var statearr_15746_15767 = state_15743__$1;
(statearr_15746_15767[(2)] = null);

(statearr_15746_15767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15744 === (4))){
var inst_15722 = (state_15743[(7)]);
var inst_15722__$1 = (state_15743[(2)]);
var inst_15723 = (inst_15722__$1 == null);
var state_15743__$1 = (function (){var statearr_15747 = state_15743;
(statearr_15747[(7)] = inst_15722__$1);

return statearr_15747;
})();
if(cljs.core.truth_(inst_15723)){
var statearr_15748_15768 = state_15743__$1;
(statearr_15748_15768[(1)] = (5));

} else {
var statearr_15749_15769 = state_15743__$1;
(statearr_15749_15769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15744 === (13))){
var state_15743__$1 = state_15743;
var statearr_15750_15770 = state_15743__$1;
(statearr_15750_15770[(2)] = null);

(statearr_15750_15770[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15744 === (6))){
var inst_15722 = (state_15743[(7)]);
var state_15743__$1 = state_15743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15743__$1,(11),to,inst_15722);
} else {
if((state_val_15744 === (3))){
var inst_15741 = (state_15743[(2)]);
var state_15743__$1 = state_15743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15743__$1,inst_15741);
} else {
if((state_val_15744 === (12))){
var state_15743__$1 = state_15743;
var statearr_15751_15771 = state_15743__$1;
(statearr_15751_15771[(2)] = null);

(statearr_15751_15771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15744 === (2))){
var state_15743__$1 = state_15743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15743__$1,(4),from);
} else {
if((state_val_15744 === (11))){
var inst_15732 = (state_15743[(2)]);
var state_15743__$1 = state_15743;
if(cljs.core.truth_(inst_15732)){
var statearr_15752_15772 = state_15743__$1;
(statearr_15752_15772[(1)] = (12));

} else {
var statearr_15753_15773 = state_15743__$1;
(statearr_15753_15773[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15744 === (9))){
var state_15743__$1 = state_15743;
var statearr_15754_15774 = state_15743__$1;
(statearr_15754_15774[(2)] = null);

(statearr_15754_15774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15744 === (5))){
var state_15743__$1 = state_15743;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15755_15775 = state_15743__$1;
(statearr_15755_15775[(1)] = (8));

} else {
var statearr_15756_15776 = state_15743__$1;
(statearr_15756_15776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15744 === (14))){
var inst_15737 = (state_15743[(2)]);
var state_15743__$1 = state_15743;
var statearr_15757_15777 = state_15743__$1;
(statearr_15757_15777[(2)] = inst_15737);

(statearr_15757_15777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15744 === (10))){
var inst_15729 = (state_15743[(2)]);
var state_15743__$1 = state_15743;
var statearr_15758_15778 = state_15743__$1;
(statearr_15758_15778[(2)] = inst_15729);

(statearr_15758_15778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15744 === (8))){
var inst_15726 = cljs.core.async.close_BANG_.call(null,to);
var state_15743__$1 = state_15743;
var statearr_15759_15779 = state_15743__$1;
(statearr_15759_15779[(2)] = inst_15726);

(statearr_15759_15779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15523__auto__ = null;
var cljs$core$async$state_machine__15523__auto____0 = (function (){
var statearr_15760 = [null,null,null,null,null,null,null,null];
(statearr_15760[(0)] = cljs$core$async$state_machine__15523__auto__);

(statearr_15760[(1)] = (1));

return statearr_15760;
});
var cljs$core$async$state_machine__15523__auto____1 = (function (state_15743){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_15743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e15761){if((e15761 instanceof Object)){
var ex__15526__auto__ = e15761;
var statearr_15762_15780 = state_15743;
(statearr_15762_15780[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15781 = state_15743;
state_15743 = G__15781;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$state_machine__15523__auto__ = function(state_15743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15523__auto____1.call(this,state_15743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15523__auto____0;
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15523__auto____1;
return cljs$core$async$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_15763 = f__15620__auto__.call(null);
(statearr_15763[(6)] = c__15619__auto___15765);

return statearr_15763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__15782){
var vec__15783 = p__15782;
var v = cljs.core.nth.call(null,vec__15783,(0),null);
var p = cljs.core.nth.call(null,vec__15783,(1),null);
var job = vec__15783;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15619__auto___15954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_15790){
var state_val_15791 = (state_15790[(1)]);
if((state_val_15791 === (1))){
var state_15790__$1 = state_15790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15790__$1,(2),res,v);
} else {
if((state_val_15791 === (2))){
var inst_15787 = (state_15790[(2)]);
var inst_15788 = cljs.core.async.close_BANG_.call(null,res);
var state_15790__$1 = (function (){var statearr_15792 = state_15790;
(statearr_15792[(7)] = inst_15787);

return statearr_15792;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15790__$1,inst_15788);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____0 = (function (){
var statearr_15793 = [null,null,null,null,null,null,null,null];
(statearr_15793[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__);

(statearr_15793[(1)] = (1));

return statearr_15793;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____1 = (function (state_15790){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_15790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e15794){if((e15794 instanceof Object)){
var ex__15526__auto__ = e15794;
var statearr_15795_15955 = state_15790;
(statearr_15795_15955[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15956 = state_15790;
state_15790 = G__15956;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__ = function(state_15790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____1.call(this,state_15790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_15796 = f__15620__auto__.call(null);
(statearr_15796[(6)] = c__15619__auto___15954);

return statearr_15796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__15797){
var vec__15798 = p__15797;
var v = cljs.core.nth.call(null,vec__15798,(0),null);
var p = cljs.core.nth.call(null,vec__15798,(1),null);
var job = vec__15798;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5633__auto___15957 = n;
var __15958 = (0);
while(true){
if((__15958 < n__5633__auto___15957)){
var G__15801_15959 = type;
var G__15801_15960__$1 = (((G__15801_15959 instanceof cljs.core.Keyword))?G__15801_15959.fqn:null);
switch (G__15801_15960__$1) {
case "compute":
var c__15619__auto___15962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15958,c__15619__auto___15962,G__15801_15959,G__15801_15960__$1,n__5633__auto___15957,jobs,results,process__$1,async){
return (function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = ((function (__15958,c__15619__auto___15962,G__15801_15959,G__15801_15960__$1,n__5633__auto___15957,jobs,results,process__$1,async){
return (function (state_15814){
var state_val_15815 = (state_15814[(1)]);
if((state_val_15815 === (1))){
var state_15814__$1 = state_15814;
var statearr_15816_15963 = state_15814__$1;
(statearr_15816_15963[(2)] = null);

(statearr_15816_15963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15815 === (2))){
var state_15814__$1 = state_15814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15814__$1,(4),jobs);
} else {
if((state_val_15815 === (3))){
var inst_15812 = (state_15814[(2)]);
var state_15814__$1 = state_15814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15814__$1,inst_15812);
} else {
if((state_val_15815 === (4))){
var inst_15804 = (state_15814[(2)]);
var inst_15805 = process__$1.call(null,inst_15804);
var state_15814__$1 = state_15814;
if(cljs.core.truth_(inst_15805)){
var statearr_15817_15964 = state_15814__$1;
(statearr_15817_15964[(1)] = (5));

} else {
var statearr_15818_15965 = state_15814__$1;
(statearr_15818_15965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15815 === (5))){
var state_15814__$1 = state_15814;
var statearr_15819_15966 = state_15814__$1;
(statearr_15819_15966[(2)] = null);

(statearr_15819_15966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15815 === (6))){
var state_15814__$1 = state_15814;
var statearr_15820_15967 = state_15814__$1;
(statearr_15820_15967[(2)] = null);

(statearr_15820_15967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15815 === (7))){
var inst_15810 = (state_15814[(2)]);
var state_15814__$1 = state_15814;
var statearr_15821_15968 = state_15814__$1;
(statearr_15821_15968[(2)] = inst_15810);

(statearr_15821_15968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15958,c__15619__auto___15962,G__15801_15959,G__15801_15960__$1,n__5633__auto___15957,jobs,results,process__$1,async))
;
return ((function (__15958,switch__15522__auto__,c__15619__auto___15962,G__15801_15959,G__15801_15960__$1,n__5633__auto___15957,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____0 = (function (){
var statearr_15822 = [null,null,null,null,null,null,null];
(statearr_15822[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__);

(statearr_15822[(1)] = (1));

return statearr_15822;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____1 = (function (state_15814){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_15814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e15823){if((e15823 instanceof Object)){
var ex__15526__auto__ = e15823;
var statearr_15824_15969 = state_15814;
(statearr_15824_15969[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15970 = state_15814;
state_15814 = G__15970;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__ = function(state_15814){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____1.call(this,state_15814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__;
})()
;})(__15958,switch__15522__auto__,c__15619__auto___15962,G__15801_15959,G__15801_15960__$1,n__5633__auto___15957,jobs,results,process__$1,async))
})();
var state__15621__auto__ = (function (){var statearr_15825 = f__15620__auto__.call(null);
(statearr_15825[(6)] = c__15619__auto___15962);

return statearr_15825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(__15958,c__15619__auto___15962,G__15801_15959,G__15801_15960__$1,n__5633__auto___15957,jobs,results,process__$1,async))
);


break;
case "async":
var c__15619__auto___15971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15958,c__15619__auto___15971,G__15801_15959,G__15801_15960__$1,n__5633__auto___15957,jobs,results,process__$1,async){
return (function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = ((function (__15958,c__15619__auto___15971,G__15801_15959,G__15801_15960__$1,n__5633__auto___15957,jobs,results,process__$1,async){
return (function (state_15838){
var state_val_15839 = (state_15838[(1)]);
if((state_val_15839 === (1))){
var state_15838__$1 = state_15838;
var statearr_15840_15972 = state_15838__$1;
(statearr_15840_15972[(2)] = null);

(statearr_15840_15972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15839 === (2))){
var state_15838__$1 = state_15838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15838__$1,(4),jobs);
} else {
if((state_val_15839 === (3))){
var inst_15836 = (state_15838[(2)]);
var state_15838__$1 = state_15838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15838__$1,inst_15836);
} else {
if((state_val_15839 === (4))){
var inst_15828 = (state_15838[(2)]);
var inst_15829 = async.call(null,inst_15828);
var state_15838__$1 = state_15838;
if(cljs.core.truth_(inst_15829)){
var statearr_15841_15973 = state_15838__$1;
(statearr_15841_15973[(1)] = (5));

} else {
var statearr_15842_15974 = state_15838__$1;
(statearr_15842_15974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15839 === (5))){
var state_15838__$1 = state_15838;
var statearr_15843_15975 = state_15838__$1;
(statearr_15843_15975[(2)] = null);

(statearr_15843_15975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15839 === (6))){
var state_15838__$1 = state_15838;
var statearr_15844_15976 = state_15838__$1;
(statearr_15844_15976[(2)] = null);

(statearr_15844_15976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15839 === (7))){
var inst_15834 = (state_15838[(2)]);
var state_15838__$1 = state_15838;
var statearr_15845_15977 = state_15838__$1;
(statearr_15845_15977[(2)] = inst_15834);

(statearr_15845_15977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15958,c__15619__auto___15971,G__15801_15959,G__15801_15960__$1,n__5633__auto___15957,jobs,results,process__$1,async))
;
return ((function (__15958,switch__15522__auto__,c__15619__auto___15971,G__15801_15959,G__15801_15960__$1,n__5633__auto___15957,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____0 = (function (){
var statearr_15846 = [null,null,null,null,null,null,null];
(statearr_15846[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__);

(statearr_15846[(1)] = (1));

return statearr_15846;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____1 = (function (state_15838){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_15838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e15847){if((e15847 instanceof Object)){
var ex__15526__auto__ = e15847;
var statearr_15848_15978 = state_15838;
(statearr_15848_15978[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15979 = state_15838;
state_15838 = G__15979;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__ = function(state_15838){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____1.call(this,state_15838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__;
})()
;})(__15958,switch__15522__auto__,c__15619__auto___15971,G__15801_15959,G__15801_15960__$1,n__5633__auto___15957,jobs,results,process__$1,async))
})();
var state__15621__auto__ = (function (){var statearr_15849 = f__15620__auto__.call(null);
(statearr_15849[(6)] = c__15619__auto___15971);

return statearr_15849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
});})(__15958,c__15619__auto___15971,G__15801_15959,G__15801_15960__$1,n__5633__auto___15957,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15801_15960__$1)].join('')));

}

var G__15980 = (__15958 + (1));
__15958 = G__15980;
continue;
} else {
}
break;
}

var c__15619__auto___15981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_15871){
var state_val_15872 = (state_15871[(1)]);
if((state_val_15872 === (7))){
var inst_15867 = (state_15871[(2)]);
var state_15871__$1 = state_15871;
var statearr_15873_15982 = state_15871__$1;
(statearr_15873_15982[(2)] = inst_15867);

(statearr_15873_15982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15872 === (1))){
var state_15871__$1 = state_15871;
var statearr_15874_15983 = state_15871__$1;
(statearr_15874_15983[(2)] = null);

(statearr_15874_15983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15872 === (4))){
var inst_15852 = (state_15871[(7)]);
var inst_15852__$1 = (state_15871[(2)]);
var inst_15853 = (inst_15852__$1 == null);
var state_15871__$1 = (function (){var statearr_15875 = state_15871;
(statearr_15875[(7)] = inst_15852__$1);

return statearr_15875;
})();
if(cljs.core.truth_(inst_15853)){
var statearr_15876_15984 = state_15871__$1;
(statearr_15876_15984[(1)] = (5));

} else {
var statearr_15877_15985 = state_15871__$1;
(statearr_15877_15985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15872 === (6))){
var inst_15852 = (state_15871[(7)]);
var inst_15857 = (state_15871[(8)]);
var inst_15857__$1 = cljs.core.async.chan.call(null,(1));
var inst_15858 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15859 = [inst_15852,inst_15857__$1];
var inst_15860 = (new cljs.core.PersistentVector(null,2,(5),inst_15858,inst_15859,null));
var state_15871__$1 = (function (){var statearr_15878 = state_15871;
(statearr_15878[(8)] = inst_15857__$1);

return statearr_15878;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15871__$1,(8),jobs,inst_15860);
} else {
if((state_val_15872 === (3))){
var inst_15869 = (state_15871[(2)]);
var state_15871__$1 = state_15871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15871__$1,inst_15869);
} else {
if((state_val_15872 === (2))){
var state_15871__$1 = state_15871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15871__$1,(4),from);
} else {
if((state_val_15872 === (9))){
var inst_15864 = (state_15871[(2)]);
var state_15871__$1 = (function (){var statearr_15879 = state_15871;
(statearr_15879[(9)] = inst_15864);

return statearr_15879;
})();
var statearr_15880_15986 = state_15871__$1;
(statearr_15880_15986[(2)] = null);

(statearr_15880_15986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15872 === (5))){
var inst_15855 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15871__$1 = state_15871;
var statearr_15881_15987 = state_15871__$1;
(statearr_15881_15987[(2)] = inst_15855);

(statearr_15881_15987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15872 === (8))){
var inst_15857 = (state_15871[(8)]);
var inst_15862 = (state_15871[(2)]);
var state_15871__$1 = (function (){var statearr_15882 = state_15871;
(statearr_15882[(10)] = inst_15862);

return statearr_15882;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15871__$1,(9),results,inst_15857);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____0 = (function (){
var statearr_15883 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15883[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__);

(statearr_15883[(1)] = (1));

return statearr_15883;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____1 = (function (state_15871){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_15871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e15884){if((e15884 instanceof Object)){
var ex__15526__auto__ = e15884;
var statearr_15885_15988 = state_15871;
(statearr_15885_15988[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15989 = state_15871;
state_15871 = G__15989;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__ = function(state_15871){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____1.call(this,state_15871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_15886 = f__15620__auto__.call(null);
(statearr_15886[(6)] = c__15619__auto___15981);

return statearr_15886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_15924){
var state_val_15925 = (state_15924[(1)]);
if((state_val_15925 === (7))){
var inst_15920 = (state_15924[(2)]);
var state_15924__$1 = state_15924;
var statearr_15926_15990 = state_15924__$1;
(statearr_15926_15990[(2)] = inst_15920);

(statearr_15926_15990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15925 === (20))){
var state_15924__$1 = state_15924;
var statearr_15927_15991 = state_15924__$1;
(statearr_15927_15991[(2)] = null);

(statearr_15927_15991[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15925 === (1))){
var state_15924__$1 = state_15924;
var statearr_15928_15992 = state_15924__$1;
(statearr_15928_15992[(2)] = null);

(statearr_15928_15992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15925 === (4))){
var inst_15889 = (state_15924[(7)]);
var inst_15889__$1 = (state_15924[(2)]);
var inst_15890 = (inst_15889__$1 == null);
var state_15924__$1 = (function (){var statearr_15929 = state_15924;
(statearr_15929[(7)] = inst_15889__$1);

return statearr_15929;
})();
if(cljs.core.truth_(inst_15890)){
var statearr_15930_15993 = state_15924__$1;
(statearr_15930_15993[(1)] = (5));

} else {
var statearr_15931_15994 = state_15924__$1;
(statearr_15931_15994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15925 === (15))){
var inst_15902 = (state_15924[(8)]);
var state_15924__$1 = state_15924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15924__$1,(18),to,inst_15902);
} else {
if((state_val_15925 === (21))){
var inst_15915 = (state_15924[(2)]);
var state_15924__$1 = state_15924;
var statearr_15932_15995 = state_15924__$1;
(statearr_15932_15995[(2)] = inst_15915);

(statearr_15932_15995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15925 === (13))){
var inst_15917 = (state_15924[(2)]);
var state_15924__$1 = (function (){var statearr_15933 = state_15924;
(statearr_15933[(9)] = inst_15917);

return statearr_15933;
})();
var statearr_15934_15996 = state_15924__$1;
(statearr_15934_15996[(2)] = null);

(statearr_15934_15996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15925 === (6))){
var inst_15889 = (state_15924[(7)]);
var state_15924__$1 = state_15924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15924__$1,(11),inst_15889);
} else {
if((state_val_15925 === (17))){
var inst_15910 = (state_15924[(2)]);
var state_15924__$1 = state_15924;
if(cljs.core.truth_(inst_15910)){
var statearr_15935_15997 = state_15924__$1;
(statearr_15935_15997[(1)] = (19));

} else {
var statearr_15936_15998 = state_15924__$1;
(statearr_15936_15998[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15925 === (3))){
var inst_15922 = (state_15924[(2)]);
var state_15924__$1 = state_15924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15924__$1,inst_15922);
} else {
if((state_val_15925 === (12))){
var inst_15899 = (state_15924[(10)]);
var state_15924__$1 = state_15924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15924__$1,(14),inst_15899);
} else {
if((state_val_15925 === (2))){
var state_15924__$1 = state_15924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15924__$1,(4),results);
} else {
if((state_val_15925 === (19))){
var state_15924__$1 = state_15924;
var statearr_15937_15999 = state_15924__$1;
(statearr_15937_15999[(2)] = null);

(statearr_15937_15999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15925 === (11))){
var inst_15899 = (state_15924[(2)]);
var state_15924__$1 = (function (){var statearr_15938 = state_15924;
(statearr_15938[(10)] = inst_15899);

return statearr_15938;
})();
var statearr_15939_16000 = state_15924__$1;
(statearr_15939_16000[(2)] = null);

(statearr_15939_16000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15925 === (9))){
var state_15924__$1 = state_15924;
var statearr_15940_16001 = state_15924__$1;
(statearr_15940_16001[(2)] = null);

(statearr_15940_16001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15925 === (5))){
var state_15924__$1 = state_15924;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15941_16002 = state_15924__$1;
(statearr_15941_16002[(1)] = (8));

} else {
var statearr_15942_16003 = state_15924__$1;
(statearr_15942_16003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15925 === (14))){
var inst_15904 = (state_15924[(11)]);
var inst_15902 = (state_15924[(8)]);
var inst_15902__$1 = (state_15924[(2)]);
var inst_15903 = (inst_15902__$1 == null);
var inst_15904__$1 = cljs.core.not.call(null,inst_15903);
var state_15924__$1 = (function (){var statearr_15943 = state_15924;
(statearr_15943[(11)] = inst_15904__$1);

(statearr_15943[(8)] = inst_15902__$1);

return statearr_15943;
})();
if(inst_15904__$1){
var statearr_15944_16004 = state_15924__$1;
(statearr_15944_16004[(1)] = (15));

} else {
var statearr_15945_16005 = state_15924__$1;
(statearr_15945_16005[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15925 === (16))){
var inst_15904 = (state_15924[(11)]);
var state_15924__$1 = state_15924;
var statearr_15946_16006 = state_15924__$1;
(statearr_15946_16006[(2)] = inst_15904);

(statearr_15946_16006[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15925 === (10))){
var inst_15896 = (state_15924[(2)]);
var state_15924__$1 = state_15924;
var statearr_15947_16007 = state_15924__$1;
(statearr_15947_16007[(2)] = inst_15896);

(statearr_15947_16007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15925 === (18))){
var inst_15907 = (state_15924[(2)]);
var state_15924__$1 = state_15924;
var statearr_15948_16008 = state_15924__$1;
(statearr_15948_16008[(2)] = inst_15907);

(statearr_15948_16008[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15925 === (8))){
var inst_15893 = cljs.core.async.close_BANG_.call(null,to);
var state_15924__$1 = state_15924;
var statearr_15949_16009 = state_15924__$1;
(statearr_15949_16009[(2)] = inst_15893);

(statearr_15949_16009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____0 = (function (){
var statearr_15950 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__);

(statearr_15950[(1)] = (1));

return statearr_15950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____1 = (function (state_15924){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_15924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e15951){if((e15951 instanceof Object)){
var ex__15526__auto__ = e15951;
var statearr_15952_16010 = state_15924;
(statearr_15952_16010[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16011 = state_15924;
state_15924 = G__16011;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__ = function(state_15924){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____1.call(this,state_15924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15523__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_15953 = f__15620__auto__.call(null);
(statearr_15953[(6)] = c__15619__auto__);

return statearr_15953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16013 = arguments.length;
switch (G__16013) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16016 = arguments.length;
switch (G__16016) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16019 = arguments.length;
switch (G__16019) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15619__auto___16068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_16045){
var state_val_16046 = (state_16045[(1)]);
if((state_val_16046 === (7))){
var inst_16041 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16047_16069 = state_16045__$1;
(statearr_16047_16069[(2)] = inst_16041);

(statearr_16047_16069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (1))){
var state_16045__$1 = state_16045;
var statearr_16048_16070 = state_16045__$1;
(statearr_16048_16070[(2)] = null);

(statearr_16048_16070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (4))){
var inst_16022 = (state_16045[(7)]);
var inst_16022__$1 = (state_16045[(2)]);
var inst_16023 = (inst_16022__$1 == null);
var state_16045__$1 = (function (){var statearr_16049 = state_16045;
(statearr_16049[(7)] = inst_16022__$1);

return statearr_16049;
})();
if(cljs.core.truth_(inst_16023)){
var statearr_16050_16071 = state_16045__$1;
(statearr_16050_16071[(1)] = (5));

} else {
var statearr_16051_16072 = state_16045__$1;
(statearr_16051_16072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (13))){
var state_16045__$1 = state_16045;
var statearr_16052_16073 = state_16045__$1;
(statearr_16052_16073[(2)] = null);

(statearr_16052_16073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (6))){
var inst_16022 = (state_16045[(7)]);
var inst_16028 = p.call(null,inst_16022);
var state_16045__$1 = state_16045;
if(cljs.core.truth_(inst_16028)){
var statearr_16053_16074 = state_16045__$1;
(statearr_16053_16074[(1)] = (9));

} else {
var statearr_16054_16075 = state_16045__$1;
(statearr_16054_16075[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (3))){
var inst_16043 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16045__$1,inst_16043);
} else {
if((state_val_16046 === (12))){
var state_16045__$1 = state_16045;
var statearr_16055_16076 = state_16045__$1;
(statearr_16055_16076[(2)] = null);

(statearr_16055_16076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (2))){
var state_16045__$1 = state_16045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16045__$1,(4),ch);
} else {
if((state_val_16046 === (11))){
var inst_16022 = (state_16045[(7)]);
var inst_16032 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16045__$1,(8),inst_16032,inst_16022);
} else {
if((state_val_16046 === (9))){
var state_16045__$1 = state_16045;
var statearr_16056_16077 = state_16045__$1;
(statearr_16056_16077[(2)] = tc);

(statearr_16056_16077[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (5))){
var inst_16025 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16026 = cljs.core.async.close_BANG_.call(null,fc);
var state_16045__$1 = (function (){var statearr_16057 = state_16045;
(statearr_16057[(8)] = inst_16025);

return statearr_16057;
})();
var statearr_16058_16078 = state_16045__$1;
(statearr_16058_16078[(2)] = inst_16026);

(statearr_16058_16078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (14))){
var inst_16039 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
var statearr_16059_16079 = state_16045__$1;
(statearr_16059_16079[(2)] = inst_16039);

(statearr_16059_16079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (10))){
var state_16045__$1 = state_16045;
var statearr_16060_16080 = state_16045__$1;
(statearr_16060_16080[(2)] = fc);

(statearr_16060_16080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16046 === (8))){
var inst_16034 = (state_16045[(2)]);
var state_16045__$1 = state_16045;
if(cljs.core.truth_(inst_16034)){
var statearr_16061_16081 = state_16045__$1;
(statearr_16061_16081[(1)] = (12));

} else {
var statearr_16062_16082 = state_16045__$1;
(statearr_16062_16082[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15523__auto__ = null;
var cljs$core$async$state_machine__15523__auto____0 = (function (){
var statearr_16063 = [null,null,null,null,null,null,null,null,null];
(statearr_16063[(0)] = cljs$core$async$state_machine__15523__auto__);

(statearr_16063[(1)] = (1));

return statearr_16063;
});
var cljs$core$async$state_machine__15523__auto____1 = (function (state_16045){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_16045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e16064){if((e16064 instanceof Object)){
var ex__15526__auto__ = e16064;
var statearr_16065_16083 = state_16045;
(statearr_16065_16083[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16084 = state_16045;
state_16045 = G__16084;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$state_machine__15523__auto__ = function(state_16045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15523__auto____1.call(this,state_16045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15523__auto____0;
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15523__auto____1;
return cljs$core$async$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_16066 = f__15620__auto__.call(null);
(statearr_16066[(6)] = c__15619__auto___16068);

return statearr_16066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_16105){
var state_val_16106 = (state_16105[(1)]);
if((state_val_16106 === (7))){
var inst_16101 = (state_16105[(2)]);
var state_16105__$1 = state_16105;
var statearr_16107_16125 = state_16105__$1;
(statearr_16107_16125[(2)] = inst_16101);

(statearr_16107_16125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (1))){
var inst_16085 = init;
var state_16105__$1 = (function (){var statearr_16108 = state_16105;
(statearr_16108[(7)] = inst_16085);

return statearr_16108;
})();
var statearr_16109_16126 = state_16105__$1;
(statearr_16109_16126[(2)] = null);

(statearr_16109_16126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (4))){
var inst_16088 = (state_16105[(8)]);
var inst_16088__$1 = (state_16105[(2)]);
var inst_16089 = (inst_16088__$1 == null);
var state_16105__$1 = (function (){var statearr_16110 = state_16105;
(statearr_16110[(8)] = inst_16088__$1);

return statearr_16110;
})();
if(cljs.core.truth_(inst_16089)){
var statearr_16111_16127 = state_16105__$1;
(statearr_16111_16127[(1)] = (5));

} else {
var statearr_16112_16128 = state_16105__$1;
(statearr_16112_16128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (6))){
var inst_16092 = (state_16105[(9)]);
var inst_16085 = (state_16105[(7)]);
var inst_16088 = (state_16105[(8)]);
var inst_16092__$1 = f.call(null,inst_16085,inst_16088);
var inst_16093 = cljs.core.reduced_QMARK_.call(null,inst_16092__$1);
var state_16105__$1 = (function (){var statearr_16113 = state_16105;
(statearr_16113[(9)] = inst_16092__$1);

return statearr_16113;
})();
if(inst_16093){
var statearr_16114_16129 = state_16105__$1;
(statearr_16114_16129[(1)] = (8));

} else {
var statearr_16115_16130 = state_16105__$1;
(statearr_16115_16130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (3))){
var inst_16103 = (state_16105[(2)]);
var state_16105__$1 = state_16105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16105__$1,inst_16103);
} else {
if((state_val_16106 === (2))){
var state_16105__$1 = state_16105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16105__$1,(4),ch);
} else {
if((state_val_16106 === (9))){
var inst_16092 = (state_16105[(9)]);
var inst_16085 = inst_16092;
var state_16105__$1 = (function (){var statearr_16116 = state_16105;
(statearr_16116[(7)] = inst_16085);

return statearr_16116;
})();
var statearr_16117_16131 = state_16105__$1;
(statearr_16117_16131[(2)] = null);

(statearr_16117_16131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (5))){
var inst_16085 = (state_16105[(7)]);
var state_16105__$1 = state_16105;
var statearr_16118_16132 = state_16105__$1;
(statearr_16118_16132[(2)] = inst_16085);

(statearr_16118_16132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (10))){
var inst_16099 = (state_16105[(2)]);
var state_16105__$1 = state_16105;
var statearr_16119_16133 = state_16105__$1;
(statearr_16119_16133[(2)] = inst_16099);

(statearr_16119_16133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16106 === (8))){
var inst_16092 = (state_16105[(9)]);
var inst_16095 = cljs.core.deref.call(null,inst_16092);
var state_16105__$1 = state_16105;
var statearr_16120_16134 = state_16105__$1;
(statearr_16120_16134[(2)] = inst_16095);

(statearr_16120_16134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__15523__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15523__auto____0 = (function (){
var statearr_16121 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16121[(0)] = cljs$core$async$reduce_$_state_machine__15523__auto__);

(statearr_16121[(1)] = (1));

return statearr_16121;
});
var cljs$core$async$reduce_$_state_machine__15523__auto____1 = (function (state_16105){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_16105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e16122){if((e16122 instanceof Object)){
var ex__15526__auto__ = e16122;
var statearr_16123_16135 = state_16105;
(statearr_16123_16135[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16136 = state_16105;
state_16105 = G__16136;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15523__auto__ = function(state_16105){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15523__auto____1.call(this,state_16105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15523__auto____0;
cljs$core$async$reduce_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15523__auto____1;
return cljs$core$async$reduce_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_16124 = f__15620__auto__.call(null);
(statearr_16124[(6)] = c__15619__auto__);

return statearr_16124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_16142){
var state_val_16143 = (state_16142[(1)]);
if((state_val_16143 === (1))){
var inst_16137 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_16142__$1 = state_16142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16142__$1,(2),inst_16137);
} else {
if((state_val_16143 === (2))){
var inst_16139 = (state_16142[(2)]);
var inst_16140 = f__$1.call(null,inst_16139);
var state_16142__$1 = state_16142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16142__$1,inst_16140);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15523__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15523__auto____0 = (function (){
var statearr_16144 = [null,null,null,null,null,null,null];
(statearr_16144[(0)] = cljs$core$async$transduce_$_state_machine__15523__auto__);

(statearr_16144[(1)] = (1));

return statearr_16144;
});
var cljs$core$async$transduce_$_state_machine__15523__auto____1 = (function (state_16142){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_16142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e16145){if((e16145 instanceof Object)){
var ex__15526__auto__ = e16145;
var statearr_16146_16148 = state_16142;
(statearr_16146_16148[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16149 = state_16142;
state_16142 = G__16149;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15523__auto__ = function(state_16142){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15523__auto____1.call(this,state_16142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15523__auto____0;
cljs$core$async$transduce_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15523__auto____1;
return cljs$core$async$transduce_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_16147 = f__15620__auto__.call(null);
(statearr_16147[(6)] = c__15619__auto__);

return statearr_16147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16151 = arguments.length;
switch (G__16151) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_16176){
var state_val_16177 = (state_16176[(1)]);
if((state_val_16177 === (7))){
var inst_16158 = (state_16176[(2)]);
var state_16176__$1 = state_16176;
var statearr_16178_16199 = state_16176__$1;
(statearr_16178_16199[(2)] = inst_16158);

(statearr_16178_16199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16177 === (1))){
var inst_16152 = cljs.core.seq.call(null,coll);
var inst_16153 = inst_16152;
var state_16176__$1 = (function (){var statearr_16179 = state_16176;
(statearr_16179[(7)] = inst_16153);

return statearr_16179;
})();
var statearr_16180_16200 = state_16176__$1;
(statearr_16180_16200[(2)] = null);

(statearr_16180_16200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16177 === (4))){
var inst_16153 = (state_16176[(7)]);
var inst_16156 = cljs.core.first.call(null,inst_16153);
var state_16176__$1 = state_16176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16176__$1,(7),ch,inst_16156);
} else {
if((state_val_16177 === (13))){
var inst_16170 = (state_16176[(2)]);
var state_16176__$1 = state_16176;
var statearr_16181_16201 = state_16176__$1;
(statearr_16181_16201[(2)] = inst_16170);

(statearr_16181_16201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16177 === (6))){
var inst_16161 = (state_16176[(2)]);
var state_16176__$1 = state_16176;
if(cljs.core.truth_(inst_16161)){
var statearr_16182_16202 = state_16176__$1;
(statearr_16182_16202[(1)] = (8));

} else {
var statearr_16183_16203 = state_16176__$1;
(statearr_16183_16203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16177 === (3))){
var inst_16174 = (state_16176[(2)]);
var state_16176__$1 = state_16176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16176__$1,inst_16174);
} else {
if((state_val_16177 === (12))){
var state_16176__$1 = state_16176;
var statearr_16184_16204 = state_16176__$1;
(statearr_16184_16204[(2)] = null);

(statearr_16184_16204[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16177 === (2))){
var inst_16153 = (state_16176[(7)]);
var state_16176__$1 = state_16176;
if(cljs.core.truth_(inst_16153)){
var statearr_16185_16205 = state_16176__$1;
(statearr_16185_16205[(1)] = (4));

} else {
var statearr_16186_16206 = state_16176__$1;
(statearr_16186_16206[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16177 === (11))){
var inst_16167 = cljs.core.async.close_BANG_.call(null,ch);
var state_16176__$1 = state_16176;
var statearr_16187_16207 = state_16176__$1;
(statearr_16187_16207[(2)] = inst_16167);

(statearr_16187_16207[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16177 === (9))){
var state_16176__$1 = state_16176;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16188_16208 = state_16176__$1;
(statearr_16188_16208[(1)] = (11));

} else {
var statearr_16189_16209 = state_16176__$1;
(statearr_16189_16209[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16177 === (5))){
var inst_16153 = (state_16176[(7)]);
var state_16176__$1 = state_16176;
var statearr_16190_16210 = state_16176__$1;
(statearr_16190_16210[(2)] = inst_16153);

(statearr_16190_16210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16177 === (10))){
var inst_16172 = (state_16176[(2)]);
var state_16176__$1 = state_16176;
var statearr_16191_16211 = state_16176__$1;
(statearr_16191_16211[(2)] = inst_16172);

(statearr_16191_16211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16177 === (8))){
var inst_16153 = (state_16176[(7)]);
var inst_16163 = cljs.core.next.call(null,inst_16153);
var inst_16153__$1 = inst_16163;
var state_16176__$1 = (function (){var statearr_16192 = state_16176;
(statearr_16192[(7)] = inst_16153__$1);

return statearr_16192;
})();
var statearr_16193_16212 = state_16176__$1;
(statearr_16193_16212[(2)] = null);

(statearr_16193_16212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15523__auto__ = null;
var cljs$core$async$state_machine__15523__auto____0 = (function (){
var statearr_16194 = [null,null,null,null,null,null,null,null];
(statearr_16194[(0)] = cljs$core$async$state_machine__15523__auto__);

(statearr_16194[(1)] = (1));

return statearr_16194;
});
var cljs$core$async$state_machine__15523__auto____1 = (function (state_16176){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_16176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e16195){if((e16195 instanceof Object)){
var ex__15526__auto__ = e16195;
var statearr_16196_16213 = state_16176;
(statearr_16196_16213[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16214 = state_16176;
state_16176 = G__16214;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$state_machine__15523__auto__ = function(state_16176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15523__auto____1.call(this,state_16176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15523__auto____0;
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15523__auto____1;
return cljs$core$async$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_16197 = f__15620__auto__.call(null);
(statearr_16197[(6)] = c__15619__auto__);

return statearr_16197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_16215 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,_);
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_16215.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_16216 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_16216.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_16217 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_16217.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_16218 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m);
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_16218.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16219 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16219 = (function (ch,cs,meta16220){
this.ch = ch;
this.cs = cs;
this.meta16220 = meta16220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16221,meta16220__$1){
var self__ = this;
var _16221__$1 = this;
return (new cljs.core.async.t_cljs$core$async16219(self__.ch,self__.cs,meta16220__$1));
}));

(cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16221){
var self__ = this;
var _16221__$1 = this;
return self__.meta16220;
}));

(cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16219.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16220","meta16220",-1971134610,null)], null);
}));

(cljs.core.async.t_cljs$core$async16219.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16219");

(cljs.core.async.t_cljs$core$async16219.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async16219");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16219.
 */
cljs.core.async.__GT_t_cljs$core$async16219 = (function cljs$core$async$mult_$___GT_t_cljs$core$async16219(ch__$1,cs__$1,meta16220){
return (new cljs.core.async.t_cljs$core$async16219(ch__$1,cs__$1,meta16220));
});

}

return (new cljs.core.async.t_cljs$core$async16219(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__15619__auto___16441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_16356){
var state_val_16357 = (state_16356[(1)]);
if((state_val_16357 === (7))){
var inst_16352 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
var statearr_16358_16442 = state_16356__$1;
(statearr_16358_16442[(2)] = inst_16352);

(statearr_16358_16442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (20))){
var inst_16255 = (state_16356[(7)]);
var inst_16267 = cljs.core.first.call(null,inst_16255);
var inst_16268 = cljs.core.nth.call(null,inst_16267,(0),null);
var inst_16269 = cljs.core.nth.call(null,inst_16267,(1),null);
var state_16356__$1 = (function (){var statearr_16359 = state_16356;
(statearr_16359[(8)] = inst_16268);

return statearr_16359;
})();
if(cljs.core.truth_(inst_16269)){
var statearr_16360_16443 = state_16356__$1;
(statearr_16360_16443[(1)] = (22));

} else {
var statearr_16361_16444 = state_16356__$1;
(statearr_16361_16444[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (27))){
var inst_16297 = (state_16356[(9)]);
var inst_16304 = (state_16356[(10)]);
var inst_16224 = (state_16356[(11)]);
var inst_16299 = (state_16356[(12)]);
var inst_16304__$1 = cljs.core._nth.call(null,inst_16297,inst_16299);
var inst_16305 = cljs.core.async.put_BANG_.call(null,inst_16304__$1,inst_16224,done);
var state_16356__$1 = (function (){var statearr_16362 = state_16356;
(statearr_16362[(10)] = inst_16304__$1);

return statearr_16362;
})();
if(cljs.core.truth_(inst_16305)){
var statearr_16363_16445 = state_16356__$1;
(statearr_16363_16445[(1)] = (30));

} else {
var statearr_16364_16446 = state_16356__$1;
(statearr_16364_16446[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (1))){
var state_16356__$1 = state_16356;
var statearr_16365_16447 = state_16356__$1;
(statearr_16365_16447[(2)] = null);

(statearr_16365_16447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (24))){
var inst_16255 = (state_16356[(7)]);
var inst_16274 = (state_16356[(2)]);
var inst_16275 = cljs.core.next.call(null,inst_16255);
var inst_16233 = inst_16275;
var inst_16234 = null;
var inst_16235 = (0);
var inst_16236 = (0);
var state_16356__$1 = (function (){var statearr_16366 = state_16356;
(statearr_16366[(13)] = inst_16233);

(statearr_16366[(14)] = inst_16234);

(statearr_16366[(15)] = inst_16274);

(statearr_16366[(16)] = inst_16235);

(statearr_16366[(17)] = inst_16236);

return statearr_16366;
})();
var statearr_16367_16448 = state_16356__$1;
(statearr_16367_16448[(2)] = null);

(statearr_16367_16448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (39))){
var state_16356__$1 = state_16356;
var statearr_16371_16449 = state_16356__$1;
(statearr_16371_16449[(2)] = null);

(statearr_16371_16449[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (4))){
var inst_16224 = (state_16356[(11)]);
var inst_16224__$1 = (state_16356[(2)]);
var inst_16225 = (inst_16224__$1 == null);
var state_16356__$1 = (function (){var statearr_16372 = state_16356;
(statearr_16372[(11)] = inst_16224__$1);

return statearr_16372;
})();
if(cljs.core.truth_(inst_16225)){
var statearr_16373_16450 = state_16356__$1;
(statearr_16373_16450[(1)] = (5));

} else {
var statearr_16374_16451 = state_16356__$1;
(statearr_16374_16451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (15))){
var inst_16233 = (state_16356[(13)]);
var inst_16234 = (state_16356[(14)]);
var inst_16235 = (state_16356[(16)]);
var inst_16236 = (state_16356[(17)]);
var inst_16251 = (state_16356[(2)]);
var inst_16252 = (inst_16236 + (1));
var tmp16368 = inst_16233;
var tmp16369 = inst_16234;
var tmp16370 = inst_16235;
var inst_16233__$1 = tmp16368;
var inst_16234__$1 = tmp16369;
var inst_16235__$1 = tmp16370;
var inst_16236__$1 = inst_16252;
var state_16356__$1 = (function (){var statearr_16375 = state_16356;
(statearr_16375[(13)] = inst_16233__$1);

(statearr_16375[(14)] = inst_16234__$1);

(statearr_16375[(18)] = inst_16251);

(statearr_16375[(16)] = inst_16235__$1);

(statearr_16375[(17)] = inst_16236__$1);

return statearr_16375;
})();
var statearr_16376_16452 = state_16356__$1;
(statearr_16376_16452[(2)] = null);

(statearr_16376_16452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (21))){
var inst_16278 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
var statearr_16380_16453 = state_16356__$1;
(statearr_16380_16453[(2)] = inst_16278);

(statearr_16380_16453[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (31))){
var inst_16304 = (state_16356[(10)]);
var inst_16308 = done.call(null,null);
var inst_16309 = cljs.core.async.untap_STAR_.call(null,m,inst_16304);
var state_16356__$1 = (function (){var statearr_16381 = state_16356;
(statearr_16381[(19)] = inst_16308);

return statearr_16381;
})();
var statearr_16382_16454 = state_16356__$1;
(statearr_16382_16454[(2)] = inst_16309);

(statearr_16382_16454[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (32))){
var inst_16297 = (state_16356[(9)]);
var inst_16298 = (state_16356[(20)]);
var inst_16299 = (state_16356[(12)]);
var inst_16296 = (state_16356[(21)]);
var inst_16311 = (state_16356[(2)]);
var inst_16312 = (inst_16299 + (1));
var tmp16377 = inst_16297;
var tmp16378 = inst_16298;
var tmp16379 = inst_16296;
var inst_16296__$1 = tmp16379;
var inst_16297__$1 = tmp16377;
var inst_16298__$1 = tmp16378;
var inst_16299__$1 = inst_16312;
var state_16356__$1 = (function (){var statearr_16383 = state_16356;
(statearr_16383[(9)] = inst_16297__$1);

(statearr_16383[(20)] = inst_16298__$1);

(statearr_16383[(22)] = inst_16311);

(statearr_16383[(12)] = inst_16299__$1);

(statearr_16383[(21)] = inst_16296__$1);

return statearr_16383;
})();
var statearr_16384_16455 = state_16356__$1;
(statearr_16384_16455[(2)] = null);

(statearr_16384_16455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (40))){
var inst_16324 = (state_16356[(23)]);
var inst_16328 = done.call(null,null);
var inst_16329 = cljs.core.async.untap_STAR_.call(null,m,inst_16324);
var state_16356__$1 = (function (){var statearr_16385 = state_16356;
(statearr_16385[(24)] = inst_16328);

return statearr_16385;
})();
var statearr_16386_16456 = state_16356__$1;
(statearr_16386_16456[(2)] = inst_16329);

(statearr_16386_16456[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (33))){
var inst_16315 = (state_16356[(25)]);
var inst_16317 = cljs.core.chunked_seq_QMARK_.call(null,inst_16315);
var state_16356__$1 = state_16356;
if(inst_16317){
var statearr_16387_16457 = state_16356__$1;
(statearr_16387_16457[(1)] = (36));

} else {
var statearr_16388_16458 = state_16356__$1;
(statearr_16388_16458[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (13))){
var inst_16245 = (state_16356[(26)]);
var inst_16248 = cljs.core.async.close_BANG_.call(null,inst_16245);
var state_16356__$1 = state_16356;
var statearr_16389_16459 = state_16356__$1;
(statearr_16389_16459[(2)] = inst_16248);

(statearr_16389_16459[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (22))){
var inst_16268 = (state_16356[(8)]);
var inst_16271 = cljs.core.async.close_BANG_.call(null,inst_16268);
var state_16356__$1 = state_16356;
var statearr_16390_16460 = state_16356__$1;
(statearr_16390_16460[(2)] = inst_16271);

(statearr_16390_16460[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (36))){
var inst_16315 = (state_16356[(25)]);
var inst_16319 = cljs.core.chunk_first.call(null,inst_16315);
var inst_16320 = cljs.core.chunk_rest.call(null,inst_16315);
var inst_16321 = cljs.core.count.call(null,inst_16319);
var inst_16296 = inst_16320;
var inst_16297 = inst_16319;
var inst_16298 = inst_16321;
var inst_16299 = (0);
var state_16356__$1 = (function (){var statearr_16391 = state_16356;
(statearr_16391[(9)] = inst_16297);

(statearr_16391[(20)] = inst_16298);

(statearr_16391[(12)] = inst_16299);

(statearr_16391[(21)] = inst_16296);

return statearr_16391;
})();
var statearr_16392_16461 = state_16356__$1;
(statearr_16392_16461[(2)] = null);

(statearr_16392_16461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (41))){
var inst_16315 = (state_16356[(25)]);
var inst_16331 = (state_16356[(2)]);
var inst_16332 = cljs.core.next.call(null,inst_16315);
var inst_16296 = inst_16332;
var inst_16297 = null;
var inst_16298 = (0);
var inst_16299 = (0);
var state_16356__$1 = (function (){var statearr_16393 = state_16356;
(statearr_16393[(9)] = inst_16297);

(statearr_16393[(27)] = inst_16331);

(statearr_16393[(20)] = inst_16298);

(statearr_16393[(12)] = inst_16299);

(statearr_16393[(21)] = inst_16296);

return statearr_16393;
})();
var statearr_16394_16462 = state_16356__$1;
(statearr_16394_16462[(2)] = null);

(statearr_16394_16462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (43))){
var state_16356__$1 = state_16356;
var statearr_16395_16463 = state_16356__$1;
(statearr_16395_16463[(2)] = null);

(statearr_16395_16463[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (29))){
var inst_16340 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
var statearr_16396_16464 = state_16356__$1;
(statearr_16396_16464[(2)] = inst_16340);

(statearr_16396_16464[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (44))){
var inst_16349 = (state_16356[(2)]);
var state_16356__$1 = (function (){var statearr_16397 = state_16356;
(statearr_16397[(28)] = inst_16349);

return statearr_16397;
})();
var statearr_16398_16465 = state_16356__$1;
(statearr_16398_16465[(2)] = null);

(statearr_16398_16465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (6))){
var inst_16288 = (state_16356[(29)]);
var inst_16287 = cljs.core.deref.call(null,cs);
var inst_16288__$1 = cljs.core.keys.call(null,inst_16287);
var inst_16289 = cljs.core.count.call(null,inst_16288__$1);
var inst_16290 = cljs.core.reset_BANG_.call(null,dctr,inst_16289);
var inst_16295 = cljs.core.seq.call(null,inst_16288__$1);
var inst_16296 = inst_16295;
var inst_16297 = null;
var inst_16298 = (0);
var inst_16299 = (0);
var state_16356__$1 = (function (){var statearr_16399 = state_16356;
(statearr_16399[(29)] = inst_16288__$1);

(statearr_16399[(9)] = inst_16297);

(statearr_16399[(30)] = inst_16290);

(statearr_16399[(20)] = inst_16298);

(statearr_16399[(12)] = inst_16299);

(statearr_16399[(21)] = inst_16296);

return statearr_16399;
})();
var statearr_16400_16466 = state_16356__$1;
(statearr_16400_16466[(2)] = null);

(statearr_16400_16466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (28))){
var inst_16315 = (state_16356[(25)]);
var inst_16296 = (state_16356[(21)]);
var inst_16315__$1 = cljs.core.seq.call(null,inst_16296);
var state_16356__$1 = (function (){var statearr_16401 = state_16356;
(statearr_16401[(25)] = inst_16315__$1);

return statearr_16401;
})();
if(inst_16315__$1){
var statearr_16402_16467 = state_16356__$1;
(statearr_16402_16467[(1)] = (33));

} else {
var statearr_16403_16468 = state_16356__$1;
(statearr_16403_16468[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (25))){
var inst_16298 = (state_16356[(20)]);
var inst_16299 = (state_16356[(12)]);
var inst_16301 = (inst_16299 < inst_16298);
var inst_16302 = inst_16301;
var state_16356__$1 = state_16356;
if(cljs.core.truth_(inst_16302)){
var statearr_16404_16469 = state_16356__$1;
(statearr_16404_16469[(1)] = (27));

} else {
var statearr_16405_16470 = state_16356__$1;
(statearr_16405_16470[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (34))){
var state_16356__$1 = state_16356;
var statearr_16406_16471 = state_16356__$1;
(statearr_16406_16471[(2)] = null);

(statearr_16406_16471[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (17))){
var state_16356__$1 = state_16356;
var statearr_16407_16472 = state_16356__$1;
(statearr_16407_16472[(2)] = null);

(statearr_16407_16472[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (3))){
var inst_16354 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16356__$1,inst_16354);
} else {
if((state_val_16357 === (12))){
var inst_16283 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
var statearr_16408_16473 = state_16356__$1;
(statearr_16408_16473[(2)] = inst_16283);

(statearr_16408_16473[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (2))){
var state_16356__$1 = state_16356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16356__$1,(4),ch);
} else {
if((state_val_16357 === (23))){
var state_16356__$1 = state_16356;
var statearr_16409_16474 = state_16356__$1;
(statearr_16409_16474[(2)] = null);

(statearr_16409_16474[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (35))){
var inst_16338 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
var statearr_16410_16475 = state_16356__$1;
(statearr_16410_16475[(2)] = inst_16338);

(statearr_16410_16475[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (19))){
var inst_16255 = (state_16356[(7)]);
var inst_16259 = cljs.core.chunk_first.call(null,inst_16255);
var inst_16260 = cljs.core.chunk_rest.call(null,inst_16255);
var inst_16261 = cljs.core.count.call(null,inst_16259);
var inst_16233 = inst_16260;
var inst_16234 = inst_16259;
var inst_16235 = inst_16261;
var inst_16236 = (0);
var state_16356__$1 = (function (){var statearr_16411 = state_16356;
(statearr_16411[(13)] = inst_16233);

(statearr_16411[(14)] = inst_16234);

(statearr_16411[(16)] = inst_16235);

(statearr_16411[(17)] = inst_16236);

return statearr_16411;
})();
var statearr_16412_16476 = state_16356__$1;
(statearr_16412_16476[(2)] = null);

(statearr_16412_16476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (11))){
var inst_16233 = (state_16356[(13)]);
var inst_16255 = (state_16356[(7)]);
var inst_16255__$1 = cljs.core.seq.call(null,inst_16233);
var state_16356__$1 = (function (){var statearr_16413 = state_16356;
(statearr_16413[(7)] = inst_16255__$1);

return statearr_16413;
})();
if(inst_16255__$1){
var statearr_16414_16477 = state_16356__$1;
(statearr_16414_16477[(1)] = (16));

} else {
var statearr_16415_16478 = state_16356__$1;
(statearr_16415_16478[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (9))){
var inst_16285 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
var statearr_16416_16479 = state_16356__$1;
(statearr_16416_16479[(2)] = inst_16285);

(statearr_16416_16479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (5))){
var inst_16231 = cljs.core.deref.call(null,cs);
var inst_16232 = cljs.core.seq.call(null,inst_16231);
var inst_16233 = inst_16232;
var inst_16234 = null;
var inst_16235 = (0);
var inst_16236 = (0);
var state_16356__$1 = (function (){var statearr_16417 = state_16356;
(statearr_16417[(13)] = inst_16233);

(statearr_16417[(14)] = inst_16234);

(statearr_16417[(16)] = inst_16235);

(statearr_16417[(17)] = inst_16236);

return statearr_16417;
})();
var statearr_16418_16480 = state_16356__$1;
(statearr_16418_16480[(2)] = null);

(statearr_16418_16480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (14))){
var state_16356__$1 = state_16356;
var statearr_16419_16481 = state_16356__$1;
(statearr_16419_16481[(2)] = null);

(statearr_16419_16481[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (45))){
var inst_16346 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
var statearr_16420_16482 = state_16356__$1;
(statearr_16420_16482[(2)] = inst_16346);

(statearr_16420_16482[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (26))){
var inst_16288 = (state_16356[(29)]);
var inst_16342 = (state_16356[(2)]);
var inst_16343 = cljs.core.seq.call(null,inst_16288);
var state_16356__$1 = (function (){var statearr_16421 = state_16356;
(statearr_16421[(31)] = inst_16342);

return statearr_16421;
})();
if(inst_16343){
var statearr_16422_16483 = state_16356__$1;
(statearr_16422_16483[(1)] = (42));

} else {
var statearr_16423_16484 = state_16356__$1;
(statearr_16423_16484[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (16))){
var inst_16255 = (state_16356[(7)]);
var inst_16257 = cljs.core.chunked_seq_QMARK_.call(null,inst_16255);
var state_16356__$1 = state_16356;
if(inst_16257){
var statearr_16424_16485 = state_16356__$1;
(statearr_16424_16485[(1)] = (19));

} else {
var statearr_16425_16486 = state_16356__$1;
(statearr_16425_16486[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (38))){
var inst_16335 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
var statearr_16426_16487 = state_16356__$1;
(statearr_16426_16487[(2)] = inst_16335);

(statearr_16426_16487[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (30))){
var state_16356__$1 = state_16356;
var statearr_16427_16488 = state_16356__$1;
(statearr_16427_16488[(2)] = null);

(statearr_16427_16488[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (10))){
var inst_16234 = (state_16356[(14)]);
var inst_16236 = (state_16356[(17)]);
var inst_16244 = cljs.core._nth.call(null,inst_16234,inst_16236);
var inst_16245 = cljs.core.nth.call(null,inst_16244,(0),null);
var inst_16246 = cljs.core.nth.call(null,inst_16244,(1),null);
var state_16356__$1 = (function (){var statearr_16428 = state_16356;
(statearr_16428[(26)] = inst_16245);

return statearr_16428;
})();
if(cljs.core.truth_(inst_16246)){
var statearr_16429_16489 = state_16356__$1;
(statearr_16429_16489[(1)] = (13));

} else {
var statearr_16430_16490 = state_16356__$1;
(statearr_16430_16490[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (18))){
var inst_16281 = (state_16356[(2)]);
var state_16356__$1 = state_16356;
var statearr_16431_16491 = state_16356__$1;
(statearr_16431_16491[(2)] = inst_16281);

(statearr_16431_16491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (42))){
var state_16356__$1 = state_16356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16356__$1,(45),dchan);
} else {
if((state_val_16357 === (37))){
var inst_16315 = (state_16356[(25)]);
var inst_16324 = (state_16356[(23)]);
var inst_16224 = (state_16356[(11)]);
var inst_16324__$1 = cljs.core.first.call(null,inst_16315);
var inst_16325 = cljs.core.async.put_BANG_.call(null,inst_16324__$1,inst_16224,done);
var state_16356__$1 = (function (){var statearr_16432 = state_16356;
(statearr_16432[(23)] = inst_16324__$1);

return statearr_16432;
})();
if(cljs.core.truth_(inst_16325)){
var statearr_16433_16492 = state_16356__$1;
(statearr_16433_16492[(1)] = (39));

} else {
var statearr_16434_16493 = state_16356__$1;
(statearr_16434_16493[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16357 === (8))){
var inst_16235 = (state_16356[(16)]);
var inst_16236 = (state_16356[(17)]);
var inst_16238 = (inst_16236 < inst_16235);
var inst_16239 = inst_16238;
var state_16356__$1 = state_16356;
if(cljs.core.truth_(inst_16239)){
var statearr_16435_16494 = state_16356__$1;
(statearr_16435_16494[(1)] = (10));

} else {
var statearr_16436_16495 = state_16356__$1;
(statearr_16436_16495[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__15523__auto__ = null;
var cljs$core$async$mult_$_state_machine__15523__auto____0 = (function (){
var statearr_16437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16437[(0)] = cljs$core$async$mult_$_state_machine__15523__auto__);

(statearr_16437[(1)] = (1));

return statearr_16437;
});
var cljs$core$async$mult_$_state_machine__15523__auto____1 = (function (state_16356){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_16356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e16438){if((e16438 instanceof Object)){
var ex__15526__auto__ = e16438;
var statearr_16439_16496 = state_16356;
(statearr_16439_16496[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16497 = state_16356;
state_16356 = G__16497;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15523__auto__ = function(state_16356){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15523__auto____1.call(this,state_16356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15523__auto____0;
cljs$core$async$mult_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15523__auto____1;
return cljs$core$async$mult_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_16440 = f__15620__auto__.call(null);
(statearr_16440[(6)] = c__15619__auto___16441);

return statearr_16440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16499 = arguments.length;
switch (G__16499) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_16501 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16501.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16502 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16502.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16503 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m);
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16503.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16504 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,state_map);
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16504.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16505 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,mode);
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16505.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___16515 = arguments.length;
var i__5767__auto___16516 = (0);
while(true){
if((i__5767__auto___16516 < len__5766__auto___16515)){
args__5772__auto__.push((arguments[i__5767__auto___16516]));

var G__16517 = (i__5767__auto___16516 + (1));
i__5767__auto___16516 = G__16517;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16510){
var map__16511 = p__16510;
var map__16511__$1 = cljs.core.__destructure_map.call(null,map__16511);
var opts = map__16511__$1;
var statearr_16512_16518 = state;
(statearr_16512_16518[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_16513_16519 = state;
(statearr_16513_16519[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16514_16520 = state;
(statearr_16514_16520[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16506){
var G__16507 = cljs.core.first.call(null,seq16506);
var seq16506__$1 = cljs.core.next.call(null,seq16506);
var G__16508 = cljs.core.first.call(null,seq16506__$1);
var seq16506__$2 = cljs.core.next.call(null,seq16506__$1);
var G__16509 = cljs.core.first.call(null,seq16506__$2);
var seq16506__$3 = cljs.core.next.call(null,seq16506__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16507,G__16508,G__16509,seq16506__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16521 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16521 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16522){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16522 = meta16522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16523,meta16522__$1){
var self__ = this;
var _16523__$1 = this;
return (new cljs.core.async.t_cljs$core$async16521(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16522__$1));
}));

(cljs.core.async.t_cljs$core$async16521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16523){
var self__ = this;
var _16523__$1 = this;
return self__.meta16522;
}));

(cljs.core.async.t_cljs$core$async16521.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16521.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16521.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16521.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async16521.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async16521.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async16521.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async16521.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async16521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16522","meta16522",-607944692,null)], null);
}));

(cljs.core.async.t_cljs$core$async16521.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16521");

(cljs.core.async.t_cljs$core$async16521.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async16521");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16521.
 */
cljs.core.async.__GT_t_cljs$core$async16521 = (function cljs$core$async$mix_$___GT_t_cljs$core$async16521(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16522){
return (new cljs.core.async.t_cljs$core$async16521(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16522));
});

}

return (new cljs.core.async.t_cljs$core$async16521(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15619__auto___16635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_16591){
var state_val_16592 = (state_16591[(1)]);
if((state_val_16592 === (7))){
var inst_16551 = (state_16591[(2)]);
var state_16591__$1 = state_16591;
if(cljs.core.truth_(inst_16551)){
var statearr_16593_16636 = state_16591__$1;
(statearr_16593_16636[(1)] = (8));

} else {
var statearr_16594_16637 = state_16591__$1;
(statearr_16594_16637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (20))){
var inst_16544 = (state_16591[(7)]);
var state_16591__$1 = state_16591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16591__$1,(23),out,inst_16544);
} else {
if((state_val_16592 === (1))){
var inst_16527 = calc_state.call(null);
var inst_16528 = cljs.core.__destructure_map.call(null,inst_16527);
var inst_16529 = cljs.core.get.call(null,inst_16528,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16530 = cljs.core.get.call(null,inst_16528,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16531 = cljs.core.get.call(null,inst_16528,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16532 = inst_16527;
var state_16591__$1 = (function (){var statearr_16595 = state_16591;
(statearr_16595[(8)] = inst_16529);

(statearr_16595[(9)] = inst_16532);

(statearr_16595[(10)] = inst_16530);

(statearr_16595[(11)] = inst_16531);

return statearr_16595;
})();
var statearr_16596_16638 = state_16591__$1;
(statearr_16596_16638[(2)] = null);

(statearr_16596_16638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (24))){
var inst_16535 = (state_16591[(12)]);
var inst_16532 = inst_16535;
var state_16591__$1 = (function (){var statearr_16597 = state_16591;
(statearr_16597[(9)] = inst_16532);

return statearr_16597;
})();
var statearr_16598_16639 = state_16591__$1;
(statearr_16598_16639[(2)] = null);

(statearr_16598_16639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (4))){
var inst_16544 = (state_16591[(7)]);
var inst_16546 = (state_16591[(13)]);
var inst_16543 = (state_16591[(2)]);
var inst_16544__$1 = cljs.core.nth.call(null,inst_16543,(0),null);
var inst_16545 = cljs.core.nth.call(null,inst_16543,(1),null);
var inst_16546__$1 = (inst_16544__$1 == null);
var state_16591__$1 = (function (){var statearr_16599 = state_16591;
(statearr_16599[(7)] = inst_16544__$1);

(statearr_16599[(14)] = inst_16545);

(statearr_16599[(13)] = inst_16546__$1);

return statearr_16599;
})();
if(cljs.core.truth_(inst_16546__$1)){
var statearr_16600_16640 = state_16591__$1;
(statearr_16600_16640[(1)] = (5));

} else {
var statearr_16601_16641 = state_16591__$1;
(statearr_16601_16641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (15))){
var inst_16565 = (state_16591[(15)]);
var inst_16536 = (state_16591[(16)]);
var inst_16565__$1 = cljs.core.empty_QMARK_.call(null,inst_16536);
var state_16591__$1 = (function (){var statearr_16602 = state_16591;
(statearr_16602[(15)] = inst_16565__$1);

return statearr_16602;
})();
if(inst_16565__$1){
var statearr_16603_16642 = state_16591__$1;
(statearr_16603_16642[(1)] = (17));

} else {
var statearr_16604_16643 = state_16591__$1;
(statearr_16604_16643[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (21))){
var inst_16535 = (state_16591[(12)]);
var inst_16532 = inst_16535;
var state_16591__$1 = (function (){var statearr_16605 = state_16591;
(statearr_16605[(9)] = inst_16532);

return statearr_16605;
})();
var statearr_16606_16644 = state_16591__$1;
(statearr_16606_16644[(2)] = null);

(statearr_16606_16644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (13))){
var inst_16558 = (state_16591[(2)]);
var inst_16559 = calc_state.call(null);
var inst_16532 = inst_16559;
var state_16591__$1 = (function (){var statearr_16607 = state_16591;
(statearr_16607[(17)] = inst_16558);

(statearr_16607[(9)] = inst_16532);

return statearr_16607;
})();
var statearr_16608_16645 = state_16591__$1;
(statearr_16608_16645[(2)] = null);

(statearr_16608_16645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (22))){
var inst_16585 = (state_16591[(2)]);
var state_16591__$1 = state_16591;
var statearr_16609_16646 = state_16591__$1;
(statearr_16609_16646[(2)] = inst_16585);

(statearr_16609_16646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (6))){
var inst_16545 = (state_16591[(14)]);
var inst_16549 = cljs.core._EQ_.call(null,inst_16545,change);
var state_16591__$1 = state_16591;
var statearr_16610_16647 = state_16591__$1;
(statearr_16610_16647[(2)] = inst_16549);

(statearr_16610_16647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (25))){
var state_16591__$1 = state_16591;
var statearr_16611_16648 = state_16591__$1;
(statearr_16611_16648[(2)] = null);

(statearr_16611_16648[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (17))){
var inst_16545 = (state_16591[(14)]);
var inst_16537 = (state_16591[(18)]);
var inst_16567 = inst_16537.call(null,inst_16545);
var inst_16568 = cljs.core.not.call(null,inst_16567);
var state_16591__$1 = state_16591;
var statearr_16612_16649 = state_16591__$1;
(statearr_16612_16649[(2)] = inst_16568);

(statearr_16612_16649[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (3))){
var inst_16589 = (state_16591[(2)]);
var state_16591__$1 = state_16591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16591__$1,inst_16589);
} else {
if((state_val_16592 === (12))){
var state_16591__$1 = state_16591;
var statearr_16613_16650 = state_16591__$1;
(statearr_16613_16650[(2)] = null);

(statearr_16613_16650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (2))){
var inst_16532 = (state_16591[(9)]);
var inst_16535 = (state_16591[(12)]);
var inst_16535__$1 = cljs.core.__destructure_map.call(null,inst_16532);
var inst_16536 = cljs.core.get.call(null,inst_16535__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16537 = cljs.core.get.call(null,inst_16535__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16538 = cljs.core.get.call(null,inst_16535__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16591__$1 = (function (){var statearr_16614 = state_16591;
(statearr_16614[(12)] = inst_16535__$1);

(statearr_16614[(16)] = inst_16536);

(statearr_16614[(18)] = inst_16537);

return statearr_16614;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16591__$1,(4),inst_16538);
} else {
if((state_val_16592 === (23))){
var inst_16576 = (state_16591[(2)]);
var state_16591__$1 = state_16591;
if(cljs.core.truth_(inst_16576)){
var statearr_16615_16651 = state_16591__$1;
(statearr_16615_16651[(1)] = (24));

} else {
var statearr_16616_16652 = state_16591__$1;
(statearr_16616_16652[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (19))){
var inst_16571 = (state_16591[(2)]);
var state_16591__$1 = state_16591;
var statearr_16617_16653 = state_16591__$1;
(statearr_16617_16653[(2)] = inst_16571);

(statearr_16617_16653[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (11))){
var inst_16545 = (state_16591[(14)]);
var inst_16555 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16545);
var state_16591__$1 = state_16591;
var statearr_16618_16654 = state_16591__$1;
(statearr_16618_16654[(2)] = inst_16555);

(statearr_16618_16654[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (9))){
var inst_16562 = (state_16591[(19)]);
var inst_16545 = (state_16591[(14)]);
var inst_16536 = (state_16591[(16)]);
var inst_16562__$1 = inst_16536.call(null,inst_16545);
var state_16591__$1 = (function (){var statearr_16619 = state_16591;
(statearr_16619[(19)] = inst_16562__$1);

return statearr_16619;
})();
if(cljs.core.truth_(inst_16562__$1)){
var statearr_16620_16655 = state_16591__$1;
(statearr_16620_16655[(1)] = (14));

} else {
var statearr_16621_16656 = state_16591__$1;
(statearr_16621_16656[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (5))){
var inst_16546 = (state_16591[(13)]);
var state_16591__$1 = state_16591;
var statearr_16622_16657 = state_16591__$1;
(statearr_16622_16657[(2)] = inst_16546);

(statearr_16622_16657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (14))){
var inst_16562 = (state_16591[(19)]);
var state_16591__$1 = state_16591;
var statearr_16623_16658 = state_16591__$1;
(statearr_16623_16658[(2)] = inst_16562);

(statearr_16623_16658[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (26))){
var inst_16581 = (state_16591[(2)]);
var state_16591__$1 = state_16591;
var statearr_16624_16659 = state_16591__$1;
(statearr_16624_16659[(2)] = inst_16581);

(statearr_16624_16659[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (16))){
var inst_16573 = (state_16591[(2)]);
var state_16591__$1 = state_16591;
if(cljs.core.truth_(inst_16573)){
var statearr_16625_16660 = state_16591__$1;
(statearr_16625_16660[(1)] = (20));

} else {
var statearr_16626_16661 = state_16591__$1;
(statearr_16626_16661[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (10))){
var inst_16587 = (state_16591[(2)]);
var state_16591__$1 = state_16591;
var statearr_16627_16662 = state_16591__$1;
(statearr_16627_16662[(2)] = inst_16587);

(statearr_16627_16662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (18))){
var inst_16565 = (state_16591[(15)]);
var state_16591__$1 = state_16591;
var statearr_16628_16663 = state_16591__$1;
(statearr_16628_16663[(2)] = inst_16565);

(statearr_16628_16663[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16592 === (8))){
var inst_16544 = (state_16591[(7)]);
var inst_16553 = (inst_16544 == null);
var state_16591__$1 = state_16591;
if(cljs.core.truth_(inst_16553)){
var statearr_16629_16664 = state_16591__$1;
(statearr_16629_16664[(1)] = (11));

} else {
var statearr_16630_16665 = state_16591__$1;
(statearr_16630_16665[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__15523__auto__ = null;
var cljs$core$async$mix_$_state_machine__15523__auto____0 = (function (){
var statearr_16631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16631[(0)] = cljs$core$async$mix_$_state_machine__15523__auto__);

(statearr_16631[(1)] = (1));

return statearr_16631;
});
var cljs$core$async$mix_$_state_machine__15523__auto____1 = (function (state_16591){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_16591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e16632){if((e16632 instanceof Object)){
var ex__15526__auto__ = e16632;
var statearr_16633_16666 = state_16591;
(statearr_16633_16666[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16667 = state_16591;
state_16591 = G__16667;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15523__auto__ = function(state_16591){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15523__auto____1.call(this,state_16591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15523__auto____0;
cljs$core$async$mix_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15523__auto____1;
return cljs$core$async$mix_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_16634 = f__15620__auto__.call(null);
(statearr_16634[(6)] = c__15619__auto___16635);

return statearr_16634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16670 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16670.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16671 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v,ch);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16671.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16672 = (function() {
var G__16673 = null;
var G__16673__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__16673__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__16673 = function(p,v){
switch(arguments.length){
case 1:
return G__16673__1.call(this,p);
case 2:
return G__16673__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16673.cljs$core$IFn$_invoke$arity$1 = G__16673__1;
G__16673.cljs$core$IFn$_invoke$arity$2 = G__16673__2;
return G__16673;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16669 = arguments.length;
switch (G__16669) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16672.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16672.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16677 = arguments.length;
switch (G__16677) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__16675_SHARP_){
if(cljs.core.truth_(p1__16675_SHARP_.call(null,topic))){
return p1__16675_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16675_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16678 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16678 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16679){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16679 = meta16679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16680,meta16679__$1){
var self__ = this;
var _16680__$1 = this;
return (new cljs.core.async.t_cljs$core$async16678(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16679__$1));
}));

(cljs.core.async.t_cljs$core$async16678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16680){
var self__ = this;
var _16680__$1 = this;
return self__.meta16679;
}));

(cljs.core.async.t_cljs$core$async16678.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16678.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16678.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16678.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16678.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16678.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16679","meta16679",716422171,null)], null);
}));

(cljs.core.async.t_cljs$core$async16678.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16678");

(cljs.core.async.t_cljs$core$async16678.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async16678");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16678.
 */
cljs.core.async.__GT_t_cljs$core$async16678 = (function cljs$core$async$__GT_t_cljs$core$async16678(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16679){
return (new cljs.core.async.t_cljs$core$async16678(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16679));
});

}

return (new cljs.core.async.t_cljs$core$async16678(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15619__auto___16798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_16752){
var state_val_16753 = (state_16752[(1)]);
if((state_val_16753 === (7))){
var inst_16748 = (state_16752[(2)]);
var state_16752__$1 = state_16752;
var statearr_16754_16799 = state_16752__$1;
(statearr_16754_16799[(2)] = inst_16748);

(statearr_16754_16799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (20))){
var state_16752__$1 = state_16752;
var statearr_16755_16800 = state_16752__$1;
(statearr_16755_16800[(2)] = null);

(statearr_16755_16800[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (1))){
var state_16752__$1 = state_16752;
var statearr_16756_16801 = state_16752__$1;
(statearr_16756_16801[(2)] = null);

(statearr_16756_16801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (24))){
var inst_16731 = (state_16752[(7)]);
var inst_16740 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16731);
var state_16752__$1 = state_16752;
var statearr_16757_16802 = state_16752__$1;
(statearr_16757_16802[(2)] = inst_16740);

(statearr_16757_16802[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (4))){
var inst_16683 = (state_16752[(8)]);
var inst_16683__$1 = (state_16752[(2)]);
var inst_16684 = (inst_16683__$1 == null);
var state_16752__$1 = (function (){var statearr_16758 = state_16752;
(statearr_16758[(8)] = inst_16683__$1);

return statearr_16758;
})();
if(cljs.core.truth_(inst_16684)){
var statearr_16759_16803 = state_16752__$1;
(statearr_16759_16803[(1)] = (5));

} else {
var statearr_16760_16804 = state_16752__$1;
(statearr_16760_16804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (15))){
var inst_16725 = (state_16752[(2)]);
var state_16752__$1 = state_16752;
var statearr_16761_16805 = state_16752__$1;
(statearr_16761_16805[(2)] = inst_16725);

(statearr_16761_16805[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (21))){
var inst_16745 = (state_16752[(2)]);
var state_16752__$1 = (function (){var statearr_16762 = state_16752;
(statearr_16762[(9)] = inst_16745);

return statearr_16762;
})();
var statearr_16763_16806 = state_16752__$1;
(statearr_16763_16806[(2)] = null);

(statearr_16763_16806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (13))){
var inst_16707 = (state_16752[(10)]);
var inst_16709 = cljs.core.chunked_seq_QMARK_.call(null,inst_16707);
var state_16752__$1 = state_16752;
if(inst_16709){
var statearr_16764_16807 = state_16752__$1;
(statearr_16764_16807[(1)] = (16));

} else {
var statearr_16765_16808 = state_16752__$1;
(statearr_16765_16808[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (22))){
var inst_16737 = (state_16752[(2)]);
var state_16752__$1 = state_16752;
if(cljs.core.truth_(inst_16737)){
var statearr_16766_16809 = state_16752__$1;
(statearr_16766_16809[(1)] = (23));

} else {
var statearr_16767_16810 = state_16752__$1;
(statearr_16767_16810[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (6))){
var inst_16733 = (state_16752[(11)]);
var inst_16731 = (state_16752[(7)]);
var inst_16683 = (state_16752[(8)]);
var inst_16731__$1 = topic_fn.call(null,inst_16683);
var inst_16732 = cljs.core.deref.call(null,mults);
var inst_16733__$1 = cljs.core.get.call(null,inst_16732,inst_16731__$1);
var state_16752__$1 = (function (){var statearr_16768 = state_16752;
(statearr_16768[(11)] = inst_16733__$1);

(statearr_16768[(7)] = inst_16731__$1);

return statearr_16768;
})();
if(cljs.core.truth_(inst_16733__$1)){
var statearr_16769_16811 = state_16752__$1;
(statearr_16769_16811[(1)] = (19));

} else {
var statearr_16770_16812 = state_16752__$1;
(statearr_16770_16812[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (25))){
var inst_16742 = (state_16752[(2)]);
var state_16752__$1 = state_16752;
var statearr_16771_16813 = state_16752__$1;
(statearr_16771_16813[(2)] = inst_16742);

(statearr_16771_16813[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (17))){
var inst_16707 = (state_16752[(10)]);
var inst_16716 = cljs.core.first.call(null,inst_16707);
var inst_16717 = cljs.core.async.muxch_STAR_.call(null,inst_16716);
var inst_16718 = cljs.core.async.close_BANG_.call(null,inst_16717);
var inst_16719 = cljs.core.next.call(null,inst_16707);
var inst_16693 = inst_16719;
var inst_16694 = null;
var inst_16695 = (0);
var inst_16696 = (0);
var state_16752__$1 = (function (){var statearr_16772 = state_16752;
(statearr_16772[(12)] = inst_16696);

(statearr_16772[(13)] = inst_16694);

(statearr_16772[(14)] = inst_16693);

(statearr_16772[(15)] = inst_16695);

(statearr_16772[(16)] = inst_16718);

return statearr_16772;
})();
var statearr_16773_16814 = state_16752__$1;
(statearr_16773_16814[(2)] = null);

(statearr_16773_16814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (3))){
var inst_16750 = (state_16752[(2)]);
var state_16752__$1 = state_16752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16752__$1,inst_16750);
} else {
if((state_val_16753 === (12))){
var inst_16727 = (state_16752[(2)]);
var state_16752__$1 = state_16752;
var statearr_16774_16815 = state_16752__$1;
(statearr_16774_16815[(2)] = inst_16727);

(statearr_16774_16815[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (2))){
var state_16752__$1 = state_16752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16752__$1,(4),ch);
} else {
if((state_val_16753 === (23))){
var state_16752__$1 = state_16752;
var statearr_16775_16816 = state_16752__$1;
(statearr_16775_16816[(2)] = null);

(statearr_16775_16816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (19))){
var inst_16733 = (state_16752[(11)]);
var inst_16683 = (state_16752[(8)]);
var inst_16735 = cljs.core.async.muxch_STAR_.call(null,inst_16733);
var state_16752__$1 = state_16752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16752__$1,(22),inst_16735,inst_16683);
} else {
if((state_val_16753 === (11))){
var inst_16707 = (state_16752[(10)]);
var inst_16693 = (state_16752[(14)]);
var inst_16707__$1 = cljs.core.seq.call(null,inst_16693);
var state_16752__$1 = (function (){var statearr_16776 = state_16752;
(statearr_16776[(10)] = inst_16707__$1);

return statearr_16776;
})();
if(inst_16707__$1){
var statearr_16777_16817 = state_16752__$1;
(statearr_16777_16817[(1)] = (13));

} else {
var statearr_16778_16818 = state_16752__$1;
(statearr_16778_16818[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (9))){
var inst_16729 = (state_16752[(2)]);
var state_16752__$1 = state_16752;
var statearr_16779_16819 = state_16752__$1;
(statearr_16779_16819[(2)] = inst_16729);

(statearr_16779_16819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (5))){
var inst_16690 = cljs.core.deref.call(null,mults);
var inst_16691 = cljs.core.vals.call(null,inst_16690);
var inst_16692 = cljs.core.seq.call(null,inst_16691);
var inst_16693 = inst_16692;
var inst_16694 = null;
var inst_16695 = (0);
var inst_16696 = (0);
var state_16752__$1 = (function (){var statearr_16780 = state_16752;
(statearr_16780[(12)] = inst_16696);

(statearr_16780[(13)] = inst_16694);

(statearr_16780[(14)] = inst_16693);

(statearr_16780[(15)] = inst_16695);

return statearr_16780;
})();
var statearr_16781_16820 = state_16752__$1;
(statearr_16781_16820[(2)] = null);

(statearr_16781_16820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (14))){
var state_16752__$1 = state_16752;
var statearr_16785_16821 = state_16752__$1;
(statearr_16785_16821[(2)] = null);

(statearr_16785_16821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (16))){
var inst_16707 = (state_16752[(10)]);
var inst_16711 = cljs.core.chunk_first.call(null,inst_16707);
var inst_16712 = cljs.core.chunk_rest.call(null,inst_16707);
var inst_16713 = cljs.core.count.call(null,inst_16711);
var inst_16693 = inst_16712;
var inst_16694 = inst_16711;
var inst_16695 = inst_16713;
var inst_16696 = (0);
var state_16752__$1 = (function (){var statearr_16786 = state_16752;
(statearr_16786[(12)] = inst_16696);

(statearr_16786[(13)] = inst_16694);

(statearr_16786[(14)] = inst_16693);

(statearr_16786[(15)] = inst_16695);

return statearr_16786;
})();
var statearr_16787_16822 = state_16752__$1;
(statearr_16787_16822[(2)] = null);

(statearr_16787_16822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (10))){
var inst_16696 = (state_16752[(12)]);
var inst_16694 = (state_16752[(13)]);
var inst_16693 = (state_16752[(14)]);
var inst_16695 = (state_16752[(15)]);
var inst_16701 = cljs.core._nth.call(null,inst_16694,inst_16696);
var inst_16702 = cljs.core.async.muxch_STAR_.call(null,inst_16701);
var inst_16703 = cljs.core.async.close_BANG_.call(null,inst_16702);
var inst_16704 = (inst_16696 + (1));
var tmp16782 = inst_16694;
var tmp16783 = inst_16693;
var tmp16784 = inst_16695;
var inst_16693__$1 = tmp16783;
var inst_16694__$1 = tmp16782;
var inst_16695__$1 = tmp16784;
var inst_16696__$1 = inst_16704;
var state_16752__$1 = (function (){var statearr_16788 = state_16752;
(statearr_16788[(17)] = inst_16703);

(statearr_16788[(12)] = inst_16696__$1);

(statearr_16788[(13)] = inst_16694__$1);

(statearr_16788[(14)] = inst_16693__$1);

(statearr_16788[(15)] = inst_16695__$1);

return statearr_16788;
})();
var statearr_16789_16823 = state_16752__$1;
(statearr_16789_16823[(2)] = null);

(statearr_16789_16823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (18))){
var inst_16722 = (state_16752[(2)]);
var state_16752__$1 = state_16752;
var statearr_16790_16824 = state_16752__$1;
(statearr_16790_16824[(2)] = inst_16722);

(statearr_16790_16824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16753 === (8))){
var inst_16696 = (state_16752[(12)]);
var inst_16695 = (state_16752[(15)]);
var inst_16698 = (inst_16696 < inst_16695);
var inst_16699 = inst_16698;
var state_16752__$1 = state_16752;
if(cljs.core.truth_(inst_16699)){
var statearr_16791_16825 = state_16752__$1;
(statearr_16791_16825[(1)] = (10));

} else {
var statearr_16792_16826 = state_16752__$1;
(statearr_16792_16826[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15523__auto__ = null;
var cljs$core$async$state_machine__15523__auto____0 = (function (){
var statearr_16793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16793[(0)] = cljs$core$async$state_machine__15523__auto__);

(statearr_16793[(1)] = (1));

return statearr_16793;
});
var cljs$core$async$state_machine__15523__auto____1 = (function (state_16752){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_16752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e16794){if((e16794 instanceof Object)){
var ex__15526__auto__ = e16794;
var statearr_16795_16827 = state_16752;
(statearr_16795_16827[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16828 = state_16752;
state_16752 = G__16828;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$state_machine__15523__auto__ = function(state_16752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15523__auto____1.call(this,state_16752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15523__auto____0;
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15523__auto____1;
return cljs$core$async$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_16796 = f__15620__auto__.call(null);
(statearr_16796[(6)] = c__15619__auto___16798);

return statearr_16796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16830 = arguments.length;
switch (G__16830) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16833 = arguments.length;
switch (G__16833) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16836 = arguments.length;
switch (G__16836) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__15619__auto___16903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_16875){
var state_val_16876 = (state_16875[(1)]);
if((state_val_16876 === (7))){
var state_16875__$1 = state_16875;
var statearr_16877_16904 = state_16875__$1;
(statearr_16877_16904[(2)] = null);

(statearr_16877_16904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16876 === (1))){
var state_16875__$1 = state_16875;
var statearr_16878_16905 = state_16875__$1;
(statearr_16878_16905[(2)] = null);

(statearr_16878_16905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16876 === (4))){
var inst_16839 = (state_16875[(7)]);
var inst_16841 = (inst_16839 < cnt);
var state_16875__$1 = state_16875;
if(cljs.core.truth_(inst_16841)){
var statearr_16879_16906 = state_16875__$1;
(statearr_16879_16906[(1)] = (6));

} else {
var statearr_16880_16907 = state_16875__$1;
(statearr_16880_16907[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16876 === (15))){
var inst_16871 = (state_16875[(2)]);
var state_16875__$1 = state_16875;
var statearr_16881_16908 = state_16875__$1;
(statearr_16881_16908[(2)] = inst_16871);

(statearr_16881_16908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16876 === (13))){
var inst_16864 = cljs.core.async.close_BANG_.call(null,out);
var state_16875__$1 = state_16875;
var statearr_16882_16909 = state_16875__$1;
(statearr_16882_16909[(2)] = inst_16864);

(statearr_16882_16909[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16876 === (6))){
var state_16875__$1 = state_16875;
var statearr_16883_16910 = state_16875__$1;
(statearr_16883_16910[(2)] = null);

(statearr_16883_16910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16876 === (3))){
var inst_16873 = (state_16875[(2)]);
var state_16875__$1 = state_16875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16875__$1,inst_16873);
} else {
if((state_val_16876 === (12))){
var inst_16861 = (state_16875[(8)]);
var inst_16861__$1 = (state_16875[(2)]);
var inst_16862 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16861__$1);
var state_16875__$1 = (function (){var statearr_16884 = state_16875;
(statearr_16884[(8)] = inst_16861__$1);

return statearr_16884;
})();
if(cljs.core.truth_(inst_16862)){
var statearr_16885_16911 = state_16875__$1;
(statearr_16885_16911[(1)] = (13));

} else {
var statearr_16886_16912 = state_16875__$1;
(statearr_16886_16912[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16876 === (2))){
var inst_16838 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16839 = (0);
var state_16875__$1 = (function (){var statearr_16887 = state_16875;
(statearr_16887[(7)] = inst_16839);

(statearr_16887[(9)] = inst_16838);

return statearr_16887;
})();
var statearr_16888_16913 = state_16875__$1;
(statearr_16888_16913[(2)] = null);

(statearr_16888_16913[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16876 === (11))){
var inst_16839 = (state_16875[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16875,(10),Object,null,(9));
var inst_16848 = chs__$1.call(null,inst_16839);
var inst_16849 = done.call(null,inst_16839);
var inst_16850 = cljs.core.async.take_BANG_.call(null,inst_16848,inst_16849);
var state_16875__$1 = state_16875;
var statearr_16889_16914 = state_16875__$1;
(statearr_16889_16914[(2)] = inst_16850);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16875__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16876 === (9))){
var inst_16839 = (state_16875[(7)]);
var inst_16852 = (state_16875[(2)]);
var inst_16853 = (inst_16839 + (1));
var inst_16839__$1 = inst_16853;
var state_16875__$1 = (function (){var statearr_16890 = state_16875;
(statearr_16890[(7)] = inst_16839__$1);

(statearr_16890[(10)] = inst_16852);

return statearr_16890;
})();
var statearr_16891_16915 = state_16875__$1;
(statearr_16891_16915[(2)] = null);

(statearr_16891_16915[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16876 === (5))){
var inst_16859 = (state_16875[(2)]);
var state_16875__$1 = (function (){var statearr_16892 = state_16875;
(statearr_16892[(11)] = inst_16859);

return statearr_16892;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16875__$1,(12),dchan);
} else {
if((state_val_16876 === (14))){
var inst_16861 = (state_16875[(8)]);
var inst_16866 = cljs.core.apply.call(null,f,inst_16861);
var state_16875__$1 = state_16875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16875__$1,(16),out,inst_16866);
} else {
if((state_val_16876 === (16))){
var inst_16868 = (state_16875[(2)]);
var state_16875__$1 = (function (){var statearr_16893 = state_16875;
(statearr_16893[(12)] = inst_16868);

return statearr_16893;
})();
var statearr_16894_16916 = state_16875__$1;
(statearr_16894_16916[(2)] = null);

(statearr_16894_16916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16876 === (10))){
var inst_16843 = (state_16875[(2)]);
var inst_16844 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16875__$1 = (function (){var statearr_16895 = state_16875;
(statearr_16895[(13)] = inst_16843);

return statearr_16895;
})();
var statearr_16896_16917 = state_16875__$1;
(statearr_16896_16917[(2)] = inst_16844);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16875__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16876 === (8))){
var inst_16857 = (state_16875[(2)]);
var state_16875__$1 = state_16875;
var statearr_16897_16918 = state_16875__$1;
(statearr_16897_16918[(2)] = inst_16857);

(statearr_16897_16918[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15523__auto__ = null;
var cljs$core$async$state_machine__15523__auto____0 = (function (){
var statearr_16898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16898[(0)] = cljs$core$async$state_machine__15523__auto__);

(statearr_16898[(1)] = (1));

return statearr_16898;
});
var cljs$core$async$state_machine__15523__auto____1 = (function (state_16875){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_16875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e16899){if((e16899 instanceof Object)){
var ex__15526__auto__ = e16899;
var statearr_16900_16919 = state_16875;
(statearr_16900_16919[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16920 = state_16875;
state_16875 = G__16920;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$state_machine__15523__auto__ = function(state_16875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15523__auto____1.call(this,state_16875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15523__auto____0;
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15523__auto____1;
return cljs$core$async$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_16901 = f__15620__auto__.call(null);
(statearr_16901[(6)] = c__15619__auto___16903);

return statearr_16901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16923 = arguments.length;
switch (G__16923) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15619__auto___16977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_16955){
var state_val_16956 = (state_16955[(1)]);
if((state_val_16956 === (7))){
var inst_16935 = (state_16955[(7)]);
var inst_16934 = (state_16955[(8)]);
var inst_16934__$1 = (state_16955[(2)]);
var inst_16935__$1 = cljs.core.nth.call(null,inst_16934__$1,(0),null);
var inst_16936 = cljs.core.nth.call(null,inst_16934__$1,(1),null);
var inst_16937 = (inst_16935__$1 == null);
var state_16955__$1 = (function (){var statearr_16957 = state_16955;
(statearr_16957[(9)] = inst_16936);

(statearr_16957[(7)] = inst_16935__$1);

(statearr_16957[(8)] = inst_16934__$1);

return statearr_16957;
})();
if(cljs.core.truth_(inst_16937)){
var statearr_16958_16978 = state_16955__$1;
(statearr_16958_16978[(1)] = (8));

} else {
var statearr_16959_16979 = state_16955__$1;
(statearr_16959_16979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (1))){
var inst_16924 = cljs.core.vec.call(null,chs);
var inst_16925 = inst_16924;
var state_16955__$1 = (function (){var statearr_16960 = state_16955;
(statearr_16960[(10)] = inst_16925);

return statearr_16960;
})();
var statearr_16961_16980 = state_16955__$1;
(statearr_16961_16980[(2)] = null);

(statearr_16961_16980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (4))){
var inst_16925 = (state_16955[(10)]);
var state_16955__$1 = state_16955;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16955__$1,(7),inst_16925);
} else {
if((state_val_16956 === (6))){
var inst_16951 = (state_16955[(2)]);
var state_16955__$1 = state_16955;
var statearr_16962_16981 = state_16955__$1;
(statearr_16962_16981[(2)] = inst_16951);

(statearr_16962_16981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (3))){
var inst_16953 = (state_16955[(2)]);
var state_16955__$1 = state_16955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16955__$1,inst_16953);
} else {
if((state_val_16956 === (2))){
var inst_16925 = (state_16955[(10)]);
var inst_16927 = cljs.core.count.call(null,inst_16925);
var inst_16928 = (inst_16927 > (0));
var state_16955__$1 = state_16955;
if(cljs.core.truth_(inst_16928)){
var statearr_16964_16982 = state_16955__$1;
(statearr_16964_16982[(1)] = (4));

} else {
var statearr_16965_16983 = state_16955__$1;
(statearr_16965_16983[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (11))){
var inst_16925 = (state_16955[(10)]);
var inst_16944 = (state_16955[(2)]);
var tmp16963 = inst_16925;
var inst_16925__$1 = tmp16963;
var state_16955__$1 = (function (){var statearr_16966 = state_16955;
(statearr_16966[(11)] = inst_16944);

(statearr_16966[(10)] = inst_16925__$1);

return statearr_16966;
})();
var statearr_16967_16984 = state_16955__$1;
(statearr_16967_16984[(2)] = null);

(statearr_16967_16984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (9))){
var inst_16935 = (state_16955[(7)]);
var state_16955__$1 = state_16955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16955__$1,(11),out,inst_16935);
} else {
if((state_val_16956 === (5))){
var inst_16949 = cljs.core.async.close_BANG_.call(null,out);
var state_16955__$1 = state_16955;
var statearr_16968_16985 = state_16955__$1;
(statearr_16968_16985[(2)] = inst_16949);

(statearr_16968_16985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (10))){
var inst_16947 = (state_16955[(2)]);
var state_16955__$1 = state_16955;
var statearr_16969_16986 = state_16955__$1;
(statearr_16969_16986[(2)] = inst_16947);

(statearr_16969_16986[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16956 === (8))){
var inst_16936 = (state_16955[(9)]);
var inst_16925 = (state_16955[(10)]);
var inst_16935 = (state_16955[(7)]);
var inst_16934 = (state_16955[(8)]);
var inst_16939 = (function (){var cs = inst_16925;
var vec__16930 = inst_16934;
var v = inst_16935;
var c = inst_16936;
return (function (p1__16921_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16921_SHARP_);
});
})();
var inst_16940 = cljs.core.filterv.call(null,inst_16939,inst_16925);
var inst_16925__$1 = inst_16940;
var state_16955__$1 = (function (){var statearr_16970 = state_16955;
(statearr_16970[(10)] = inst_16925__$1);

return statearr_16970;
})();
var statearr_16971_16987 = state_16955__$1;
(statearr_16971_16987[(2)] = null);

(statearr_16971_16987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15523__auto__ = null;
var cljs$core$async$state_machine__15523__auto____0 = (function (){
var statearr_16972 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16972[(0)] = cljs$core$async$state_machine__15523__auto__);

(statearr_16972[(1)] = (1));

return statearr_16972;
});
var cljs$core$async$state_machine__15523__auto____1 = (function (state_16955){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_16955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e16973){if((e16973 instanceof Object)){
var ex__15526__auto__ = e16973;
var statearr_16974_16988 = state_16955;
(statearr_16974_16988[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16989 = state_16955;
state_16955 = G__16989;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$state_machine__15523__auto__ = function(state_16955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15523__auto____1.call(this,state_16955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15523__auto____0;
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15523__auto____1;
return cljs$core$async$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_16975 = f__15620__auto__.call(null);
(statearr_16975[(6)] = c__15619__auto___16977);

return statearr_16975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16991 = arguments.length;
switch (G__16991) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15619__auto___17036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_17015){
var state_val_17016 = (state_17015[(1)]);
if((state_val_17016 === (7))){
var inst_16997 = (state_17015[(7)]);
var inst_16997__$1 = (state_17015[(2)]);
var inst_16998 = (inst_16997__$1 == null);
var inst_16999 = cljs.core.not.call(null,inst_16998);
var state_17015__$1 = (function (){var statearr_17017 = state_17015;
(statearr_17017[(7)] = inst_16997__$1);

return statearr_17017;
})();
if(inst_16999){
var statearr_17018_17037 = state_17015__$1;
(statearr_17018_17037[(1)] = (8));

} else {
var statearr_17019_17038 = state_17015__$1;
(statearr_17019_17038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17016 === (1))){
var inst_16992 = (0);
var state_17015__$1 = (function (){var statearr_17020 = state_17015;
(statearr_17020[(8)] = inst_16992);

return statearr_17020;
})();
var statearr_17021_17039 = state_17015__$1;
(statearr_17021_17039[(2)] = null);

(statearr_17021_17039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17016 === (4))){
var state_17015__$1 = state_17015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17015__$1,(7),ch);
} else {
if((state_val_17016 === (6))){
var inst_17010 = (state_17015[(2)]);
var state_17015__$1 = state_17015;
var statearr_17022_17040 = state_17015__$1;
(statearr_17022_17040[(2)] = inst_17010);

(statearr_17022_17040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17016 === (3))){
var inst_17012 = (state_17015[(2)]);
var inst_17013 = cljs.core.async.close_BANG_.call(null,out);
var state_17015__$1 = (function (){var statearr_17023 = state_17015;
(statearr_17023[(9)] = inst_17012);

return statearr_17023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17015__$1,inst_17013);
} else {
if((state_val_17016 === (2))){
var inst_16992 = (state_17015[(8)]);
var inst_16994 = (inst_16992 < n);
var state_17015__$1 = state_17015;
if(cljs.core.truth_(inst_16994)){
var statearr_17024_17041 = state_17015__$1;
(statearr_17024_17041[(1)] = (4));

} else {
var statearr_17025_17042 = state_17015__$1;
(statearr_17025_17042[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17016 === (11))){
var inst_16992 = (state_17015[(8)]);
var inst_17002 = (state_17015[(2)]);
var inst_17003 = (inst_16992 + (1));
var inst_16992__$1 = inst_17003;
var state_17015__$1 = (function (){var statearr_17026 = state_17015;
(statearr_17026[(10)] = inst_17002);

(statearr_17026[(8)] = inst_16992__$1);

return statearr_17026;
})();
var statearr_17027_17043 = state_17015__$1;
(statearr_17027_17043[(2)] = null);

(statearr_17027_17043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17016 === (9))){
var state_17015__$1 = state_17015;
var statearr_17028_17044 = state_17015__$1;
(statearr_17028_17044[(2)] = null);

(statearr_17028_17044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17016 === (5))){
var state_17015__$1 = state_17015;
var statearr_17029_17045 = state_17015__$1;
(statearr_17029_17045[(2)] = null);

(statearr_17029_17045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17016 === (10))){
var inst_17007 = (state_17015[(2)]);
var state_17015__$1 = state_17015;
var statearr_17030_17046 = state_17015__$1;
(statearr_17030_17046[(2)] = inst_17007);

(statearr_17030_17046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17016 === (8))){
var inst_16997 = (state_17015[(7)]);
var state_17015__$1 = state_17015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17015__$1,(11),out,inst_16997);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15523__auto__ = null;
var cljs$core$async$state_machine__15523__auto____0 = (function (){
var statearr_17031 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17031[(0)] = cljs$core$async$state_machine__15523__auto__);

(statearr_17031[(1)] = (1));

return statearr_17031;
});
var cljs$core$async$state_machine__15523__auto____1 = (function (state_17015){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_17015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e17032){if((e17032 instanceof Object)){
var ex__15526__auto__ = e17032;
var statearr_17033_17047 = state_17015;
(statearr_17033_17047[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17048 = state_17015;
state_17015 = G__17048;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$state_machine__15523__auto__ = function(state_17015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15523__auto____1.call(this,state_17015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15523__auto____0;
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15523__auto____1;
return cljs$core$async$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_17034 = f__15620__auto__.call(null);
(statearr_17034[(6)] = c__15619__auto___17036);

return statearr_17034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17050 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17050 = (function (f,ch,meta17051){
this.f = f;
this.ch = ch;
this.meta17051 = meta17051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17052,meta17051__$1){
var self__ = this;
var _17052__$1 = this;
return (new cljs.core.async.t_cljs$core$async17050(self__.f,self__.ch,meta17051__$1));
}));

(cljs.core.async.t_cljs$core$async17050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17052){
var self__ = this;
var _17052__$1 = this;
return self__.meta17051;
}));

(cljs.core.async.t_cljs$core$async17050.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17050.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async17050.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async17050.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17050.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17053 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17053 = (function (f,ch,meta17051,_,fn1,meta17054){
this.f = f;
this.ch = ch;
this.meta17051 = meta17051;
this._ = _;
this.fn1 = fn1;
this.meta17054 = meta17054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17055,meta17054__$1){
var self__ = this;
var _17055__$1 = this;
return (new cljs.core.async.t_cljs$core$async17053(self__.f,self__.ch,self__.meta17051,self__._,self__.fn1,meta17054__$1));
}));

(cljs.core.async.t_cljs$core$async17053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17055){
var self__ = this;
var _17055__$1 = this;
return self__.meta17054;
}));

(cljs.core.async.t_cljs$core$async17053.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17053.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17053.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17053.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__17049_SHARP_){
return f1.call(null,(((p1__17049_SHARP_ == null))?null:self__.f.call(null,p1__17049_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async17053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17051","meta17051",703451127,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17050","cljs.core.async/t_cljs$core$async17050",-371262149,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17054","meta17054",1190551572,null)], null);
}));

(cljs.core.async.t_cljs$core$async17053.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17053");

(cljs.core.async.t_cljs$core$async17053.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async17053");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17053.
 */
cljs.core.async.__GT_t_cljs$core$async17053 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17053(f__$1,ch__$1,meta17051__$1,___$2,fn1__$1,meta17054){
return (new cljs.core.async.t_cljs$core$async17053(f__$1,ch__$1,meta17051__$1,___$2,fn1__$1,meta17054));
});

}

return (new cljs.core.async.t_cljs$core$async17053(self__.f,self__.ch,self__.meta17051,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17050.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17050.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17051","meta17051",703451127,null)], null);
}));

(cljs.core.async.t_cljs$core$async17050.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17050");

(cljs.core.async.t_cljs$core$async17050.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async17050");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17050.
 */
cljs.core.async.__GT_t_cljs$core$async17050 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17050(f__$1,ch__$1,meta17051){
return (new cljs.core.async.t_cljs$core$async17050(f__$1,ch__$1,meta17051));
});

}

return (new cljs.core.async.t_cljs$core$async17050(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17056 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17056 = (function (f,ch,meta17057){
this.f = f;
this.ch = ch;
this.meta17057 = meta17057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17058,meta17057__$1){
var self__ = this;
var _17058__$1 = this;
return (new cljs.core.async.t_cljs$core$async17056(self__.f,self__.ch,meta17057__$1));
}));

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17058){
var self__ = this;
var _17058__$1 = this;
return self__.meta17057;
}));

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async17056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17057","meta17057",159444811,null)], null);
}));

(cljs.core.async.t_cljs$core$async17056.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17056");

(cljs.core.async.t_cljs$core$async17056.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async17056");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17056.
 */
cljs.core.async.__GT_t_cljs$core$async17056 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17056(f__$1,ch__$1,meta17057){
return (new cljs.core.async.t_cljs$core$async17056(f__$1,ch__$1,meta17057));
});

}

return (new cljs.core.async.t_cljs$core$async17056(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17059 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17059 = (function (p,ch,meta17060){
this.p = p;
this.ch = ch;
this.meta17060 = meta17060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17061,meta17060__$1){
var self__ = this;
var _17061__$1 = this;
return (new cljs.core.async.t_cljs$core$async17059(self__.p,self__.ch,meta17060__$1));
}));

(cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17061){
var self__ = this;
var _17061__$1 = this;
return self__.meta17060;
}));

(cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17059.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17060","meta17060",137534862,null)], null);
}));

(cljs.core.async.t_cljs$core$async17059.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17059");

(cljs.core.async.t_cljs$core$async17059.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async17059");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17059.
 */
cljs.core.async.__GT_t_cljs$core$async17059 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17059(p__$1,ch__$1,meta17060){
return (new cljs.core.async.t_cljs$core$async17059(p__$1,ch__$1,meta17060));
});

}

return (new cljs.core.async.t_cljs$core$async17059(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17063 = arguments.length;
switch (G__17063) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15619__auto___17103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_17084){
var state_val_17085 = (state_17084[(1)]);
if((state_val_17085 === (7))){
var inst_17080 = (state_17084[(2)]);
var state_17084__$1 = state_17084;
var statearr_17086_17104 = state_17084__$1;
(statearr_17086_17104[(2)] = inst_17080);

(statearr_17086_17104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (1))){
var state_17084__$1 = state_17084;
var statearr_17087_17105 = state_17084__$1;
(statearr_17087_17105[(2)] = null);

(statearr_17087_17105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (4))){
var inst_17066 = (state_17084[(7)]);
var inst_17066__$1 = (state_17084[(2)]);
var inst_17067 = (inst_17066__$1 == null);
var state_17084__$1 = (function (){var statearr_17088 = state_17084;
(statearr_17088[(7)] = inst_17066__$1);

return statearr_17088;
})();
if(cljs.core.truth_(inst_17067)){
var statearr_17089_17106 = state_17084__$1;
(statearr_17089_17106[(1)] = (5));

} else {
var statearr_17090_17107 = state_17084__$1;
(statearr_17090_17107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (6))){
var inst_17066 = (state_17084[(7)]);
var inst_17071 = p.call(null,inst_17066);
var state_17084__$1 = state_17084;
if(cljs.core.truth_(inst_17071)){
var statearr_17091_17108 = state_17084__$1;
(statearr_17091_17108[(1)] = (8));

} else {
var statearr_17092_17109 = state_17084__$1;
(statearr_17092_17109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (3))){
var inst_17082 = (state_17084[(2)]);
var state_17084__$1 = state_17084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17084__$1,inst_17082);
} else {
if((state_val_17085 === (2))){
var state_17084__$1 = state_17084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17084__$1,(4),ch);
} else {
if((state_val_17085 === (11))){
var inst_17074 = (state_17084[(2)]);
var state_17084__$1 = state_17084;
var statearr_17093_17110 = state_17084__$1;
(statearr_17093_17110[(2)] = inst_17074);

(statearr_17093_17110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (9))){
var state_17084__$1 = state_17084;
var statearr_17094_17111 = state_17084__$1;
(statearr_17094_17111[(2)] = null);

(statearr_17094_17111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (5))){
var inst_17069 = cljs.core.async.close_BANG_.call(null,out);
var state_17084__$1 = state_17084;
var statearr_17095_17112 = state_17084__$1;
(statearr_17095_17112[(2)] = inst_17069);

(statearr_17095_17112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (10))){
var inst_17077 = (state_17084[(2)]);
var state_17084__$1 = (function (){var statearr_17096 = state_17084;
(statearr_17096[(8)] = inst_17077);

return statearr_17096;
})();
var statearr_17097_17113 = state_17084__$1;
(statearr_17097_17113[(2)] = null);

(statearr_17097_17113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (8))){
var inst_17066 = (state_17084[(7)]);
var state_17084__$1 = state_17084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17084__$1,(11),out,inst_17066);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15523__auto__ = null;
var cljs$core$async$state_machine__15523__auto____0 = (function (){
var statearr_17098 = [null,null,null,null,null,null,null,null,null];
(statearr_17098[(0)] = cljs$core$async$state_machine__15523__auto__);

(statearr_17098[(1)] = (1));

return statearr_17098;
});
var cljs$core$async$state_machine__15523__auto____1 = (function (state_17084){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_17084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e17099){if((e17099 instanceof Object)){
var ex__15526__auto__ = e17099;
var statearr_17100_17114 = state_17084;
(statearr_17100_17114[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17115 = state_17084;
state_17084 = G__17115;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$state_machine__15523__auto__ = function(state_17084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15523__auto____1.call(this,state_17084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15523__auto____0;
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15523__auto____1;
return cljs$core$async$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_17101 = f__15620__auto__.call(null);
(statearr_17101[(6)] = c__15619__auto___17103);

return statearr_17101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17117 = arguments.length;
switch (G__17117) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_17180){
var state_val_17181 = (state_17180[(1)]);
if((state_val_17181 === (7))){
var inst_17176 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
var statearr_17182_17220 = state_17180__$1;
(statearr_17182_17220[(2)] = inst_17176);

(statearr_17182_17220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (20))){
var inst_17146 = (state_17180[(7)]);
var inst_17157 = (state_17180[(2)]);
var inst_17158 = cljs.core.next.call(null,inst_17146);
var inst_17132 = inst_17158;
var inst_17133 = null;
var inst_17134 = (0);
var inst_17135 = (0);
var state_17180__$1 = (function (){var statearr_17183 = state_17180;
(statearr_17183[(8)] = inst_17157);

(statearr_17183[(9)] = inst_17133);

(statearr_17183[(10)] = inst_17135);

(statearr_17183[(11)] = inst_17132);

(statearr_17183[(12)] = inst_17134);

return statearr_17183;
})();
var statearr_17184_17221 = state_17180__$1;
(statearr_17184_17221[(2)] = null);

(statearr_17184_17221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (1))){
var state_17180__$1 = state_17180;
var statearr_17185_17222 = state_17180__$1;
(statearr_17185_17222[(2)] = null);

(statearr_17185_17222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (4))){
var inst_17121 = (state_17180[(13)]);
var inst_17121__$1 = (state_17180[(2)]);
var inst_17122 = (inst_17121__$1 == null);
var state_17180__$1 = (function (){var statearr_17186 = state_17180;
(statearr_17186[(13)] = inst_17121__$1);

return statearr_17186;
})();
if(cljs.core.truth_(inst_17122)){
var statearr_17187_17223 = state_17180__$1;
(statearr_17187_17223[(1)] = (5));

} else {
var statearr_17188_17224 = state_17180__$1;
(statearr_17188_17224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (15))){
var state_17180__$1 = state_17180;
var statearr_17192_17225 = state_17180__$1;
(statearr_17192_17225[(2)] = null);

(statearr_17192_17225[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (21))){
var state_17180__$1 = state_17180;
var statearr_17193_17226 = state_17180__$1;
(statearr_17193_17226[(2)] = null);

(statearr_17193_17226[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (13))){
var inst_17133 = (state_17180[(9)]);
var inst_17135 = (state_17180[(10)]);
var inst_17132 = (state_17180[(11)]);
var inst_17134 = (state_17180[(12)]);
var inst_17142 = (state_17180[(2)]);
var inst_17143 = (inst_17135 + (1));
var tmp17189 = inst_17133;
var tmp17190 = inst_17132;
var tmp17191 = inst_17134;
var inst_17132__$1 = tmp17190;
var inst_17133__$1 = tmp17189;
var inst_17134__$1 = tmp17191;
var inst_17135__$1 = inst_17143;
var state_17180__$1 = (function (){var statearr_17194 = state_17180;
(statearr_17194[(9)] = inst_17133__$1);

(statearr_17194[(10)] = inst_17135__$1);

(statearr_17194[(11)] = inst_17132__$1);

(statearr_17194[(14)] = inst_17142);

(statearr_17194[(12)] = inst_17134__$1);

return statearr_17194;
})();
var statearr_17195_17227 = state_17180__$1;
(statearr_17195_17227[(2)] = null);

(statearr_17195_17227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (22))){
var state_17180__$1 = state_17180;
var statearr_17196_17228 = state_17180__$1;
(statearr_17196_17228[(2)] = null);

(statearr_17196_17228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (6))){
var inst_17121 = (state_17180[(13)]);
var inst_17130 = f.call(null,inst_17121);
var inst_17131 = cljs.core.seq.call(null,inst_17130);
var inst_17132 = inst_17131;
var inst_17133 = null;
var inst_17134 = (0);
var inst_17135 = (0);
var state_17180__$1 = (function (){var statearr_17197 = state_17180;
(statearr_17197[(9)] = inst_17133);

(statearr_17197[(10)] = inst_17135);

(statearr_17197[(11)] = inst_17132);

(statearr_17197[(12)] = inst_17134);

return statearr_17197;
})();
var statearr_17198_17229 = state_17180__$1;
(statearr_17198_17229[(2)] = null);

(statearr_17198_17229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (17))){
var inst_17146 = (state_17180[(7)]);
var inst_17150 = cljs.core.chunk_first.call(null,inst_17146);
var inst_17151 = cljs.core.chunk_rest.call(null,inst_17146);
var inst_17152 = cljs.core.count.call(null,inst_17150);
var inst_17132 = inst_17151;
var inst_17133 = inst_17150;
var inst_17134 = inst_17152;
var inst_17135 = (0);
var state_17180__$1 = (function (){var statearr_17199 = state_17180;
(statearr_17199[(9)] = inst_17133);

(statearr_17199[(10)] = inst_17135);

(statearr_17199[(11)] = inst_17132);

(statearr_17199[(12)] = inst_17134);

return statearr_17199;
})();
var statearr_17200_17230 = state_17180__$1;
(statearr_17200_17230[(2)] = null);

(statearr_17200_17230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (3))){
var inst_17178 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17180__$1,inst_17178);
} else {
if((state_val_17181 === (12))){
var inst_17166 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
var statearr_17201_17231 = state_17180__$1;
(statearr_17201_17231[(2)] = inst_17166);

(statearr_17201_17231[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (2))){
var state_17180__$1 = state_17180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17180__$1,(4),in$);
} else {
if((state_val_17181 === (23))){
var inst_17174 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
var statearr_17202_17232 = state_17180__$1;
(statearr_17202_17232[(2)] = inst_17174);

(statearr_17202_17232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (19))){
var inst_17161 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
var statearr_17203_17233 = state_17180__$1;
(statearr_17203_17233[(2)] = inst_17161);

(statearr_17203_17233[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (11))){
var inst_17146 = (state_17180[(7)]);
var inst_17132 = (state_17180[(11)]);
var inst_17146__$1 = cljs.core.seq.call(null,inst_17132);
var state_17180__$1 = (function (){var statearr_17204 = state_17180;
(statearr_17204[(7)] = inst_17146__$1);

return statearr_17204;
})();
if(inst_17146__$1){
var statearr_17205_17234 = state_17180__$1;
(statearr_17205_17234[(1)] = (14));

} else {
var statearr_17206_17235 = state_17180__$1;
(statearr_17206_17235[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (9))){
var inst_17168 = (state_17180[(2)]);
var inst_17169 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17180__$1 = (function (){var statearr_17207 = state_17180;
(statearr_17207[(15)] = inst_17168);

return statearr_17207;
})();
if(cljs.core.truth_(inst_17169)){
var statearr_17208_17236 = state_17180__$1;
(statearr_17208_17236[(1)] = (21));

} else {
var statearr_17209_17237 = state_17180__$1;
(statearr_17209_17237[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (5))){
var inst_17124 = cljs.core.async.close_BANG_.call(null,out);
var state_17180__$1 = state_17180;
var statearr_17210_17238 = state_17180__$1;
(statearr_17210_17238[(2)] = inst_17124);

(statearr_17210_17238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (14))){
var inst_17146 = (state_17180[(7)]);
var inst_17148 = cljs.core.chunked_seq_QMARK_.call(null,inst_17146);
var state_17180__$1 = state_17180;
if(inst_17148){
var statearr_17211_17239 = state_17180__$1;
(statearr_17211_17239[(1)] = (17));

} else {
var statearr_17212_17240 = state_17180__$1;
(statearr_17212_17240[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (16))){
var inst_17164 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
var statearr_17213_17241 = state_17180__$1;
(statearr_17213_17241[(2)] = inst_17164);

(statearr_17213_17241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (10))){
var inst_17133 = (state_17180[(9)]);
var inst_17135 = (state_17180[(10)]);
var inst_17140 = cljs.core._nth.call(null,inst_17133,inst_17135);
var state_17180__$1 = state_17180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17180__$1,(13),out,inst_17140);
} else {
if((state_val_17181 === (18))){
var inst_17146 = (state_17180[(7)]);
var inst_17155 = cljs.core.first.call(null,inst_17146);
var state_17180__$1 = state_17180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17180__$1,(20),out,inst_17155);
} else {
if((state_val_17181 === (8))){
var inst_17135 = (state_17180[(10)]);
var inst_17134 = (state_17180[(12)]);
var inst_17137 = (inst_17135 < inst_17134);
var inst_17138 = inst_17137;
var state_17180__$1 = state_17180;
if(cljs.core.truth_(inst_17138)){
var statearr_17214_17242 = state_17180__$1;
(statearr_17214_17242[(1)] = (10));

} else {
var statearr_17215_17243 = state_17180__$1;
(statearr_17215_17243[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15523__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15523__auto____0 = (function (){
var statearr_17216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17216[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15523__auto__);

(statearr_17216[(1)] = (1));

return statearr_17216;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15523__auto____1 = (function (state_17180){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_17180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e17217){if((e17217 instanceof Object)){
var ex__15526__auto__ = e17217;
var statearr_17218_17244 = state_17180;
(statearr_17218_17244[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17245 = state_17180;
state_17180 = G__17245;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15523__auto__ = function(state_17180){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15523__auto____1.call(this,state_17180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15523__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15523__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_17219 = f__15620__auto__.call(null);
(statearr_17219[(6)] = c__15619__auto__);

return statearr_17219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17247 = arguments.length;
switch (G__17247) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17250 = arguments.length;
switch (G__17250) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17253 = arguments.length;
switch (G__17253) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15619__auto___17300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_17277){
var state_val_17278 = (state_17277[(1)]);
if((state_val_17278 === (7))){
var inst_17272 = (state_17277[(2)]);
var state_17277__$1 = state_17277;
var statearr_17279_17301 = state_17277__$1;
(statearr_17279_17301[(2)] = inst_17272);

(statearr_17279_17301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17278 === (1))){
var inst_17254 = null;
var state_17277__$1 = (function (){var statearr_17280 = state_17277;
(statearr_17280[(7)] = inst_17254);

return statearr_17280;
})();
var statearr_17281_17302 = state_17277__$1;
(statearr_17281_17302[(2)] = null);

(statearr_17281_17302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17278 === (4))){
var inst_17257 = (state_17277[(8)]);
var inst_17257__$1 = (state_17277[(2)]);
var inst_17258 = (inst_17257__$1 == null);
var inst_17259 = cljs.core.not.call(null,inst_17258);
var state_17277__$1 = (function (){var statearr_17282 = state_17277;
(statearr_17282[(8)] = inst_17257__$1);

return statearr_17282;
})();
if(inst_17259){
var statearr_17283_17303 = state_17277__$1;
(statearr_17283_17303[(1)] = (5));

} else {
var statearr_17284_17304 = state_17277__$1;
(statearr_17284_17304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17278 === (6))){
var state_17277__$1 = state_17277;
var statearr_17285_17305 = state_17277__$1;
(statearr_17285_17305[(2)] = null);

(statearr_17285_17305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17278 === (3))){
var inst_17274 = (state_17277[(2)]);
var inst_17275 = cljs.core.async.close_BANG_.call(null,out);
var state_17277__$1 = (function (){var statearr_17286 = state_17277;
(statearr_17286[(9)] = inst_17274);

return statearr_17286;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17277__$1,inst_17275);
} else {
if((state_val_17278 === (2))){
var state_17277__$1 = state_17277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17277__$1,(4),ch);
} else {
if((state_val_17278 === (11))){
var inst_17257 = (state_17277[(8)]);
var inst_17266 = (state_17277[(2)]);
var inst_17254 = inst_17257;
var state_17277__$1 = (function (){var statearr_17287 = state_17277;
(statearr_17287[(7)] = inst_17254);

(statearr_17287[(10)] = inst_17266);

return statearr_17287;
})();
var statearr_17288_17306 = state_17277__$1;
(statearr_17288_17306[(2)] = null);

(statearr_17288_17306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17278 === (9))){
var inst_17257 = (state_17277[(8)]);
var state_17277__$1 = state_17277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17277__$1,(11),out,inst_17257);
} else {
if((state_val_17278 === (5))){
var inst_17254 = (state_17277[(7)]);
var inst_17257 = (state_17277[(8)]);
var inst_17261 = cljs.core._EQ_.call(null,inst_17257,inst_17254);
var state_17277__$1 = state_17277;
if(inst_17261){
var statearr_17290_17307 = state_17277__$1;
(statearr_17290_17307[(1)] = (8));

} else {
var statearr_17291_17308 = state_17277__$1;
(statearr_17291_17308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17278 === (10))){
var inst_17269 = (state_17277[(2)]);
var state_17277__$1 = state_17277;
var statearr_17292_17309 = state_17277__$1;
(statearr_17292_17309[(2)] = inst_17269);

(statearr_17292_17309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17278 === (8))){
var inst_17254 = (state_17277[(7)]);
var tmp17289 = inst_17254;
var inst_17254__$1 = tmp17289;
var state_17277__$1 = (function (){var statearr_17293 = state_17277;
(statearr_17293[(7)] = inst_17254__$1);

return statearr_17293;
})();
var statearr_17294_17310 = state_17277__$1;
(statearr_17294_17310[(2)] = null);

(statearr_17294_17310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15523__auto__ = null;
var cljs$core$async$state_machine__15523__auto____0 = (function (){
var statearr_17295 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17295[(0)] = cljs$core$async$state_machine__15523__auto__);

(statearr_17295[(1)] = (1));

return statearr_17295;
});
var cljs$core$async$state_machine__15523__auto____1 = (function (state_17277){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_17277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e17296){if((e17296 instanceof Object)){
var ex__15526__auto__ = e17296;
var statearr_17297_17311 = state_17277;
(statearr_17297_17311[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17312 = state_17277;
state_17277 = G__17312;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$state_machine__15523__auto__ = function(state_17277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15523__auto____1.call(this,state_17277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15523__auto____0;
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15523__auto____1;
return cljs$core$async$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_17298 = f__15620__auto__.call(null);
(statearr_17298[(6)] = c__15619__auto___17300);

return statearr_17298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17314 = arguments.length;
switch (G__17314) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15619__auto___17380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_17352){
var state_val_17353 = (state_17352[(1)]);
if((state_val_17353 === (7))){
var inst_17348 = (state_17352[(2)]);
var state_17352__$1 = state_17352;
var statearr_17354_17381 = state_17352__$1;
(statearr_17354_17381[(2)] = inst_17348);

(statearr_17354_17381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17353 === (1))){
var inst_17315 = (new Array(n));
var inst_17316 = inst_17315;
var inst_17317 = (0);
var state_17352__$1 = (function (){var statearr_17355 = state_17352;
(statearr_17355[(7)] = inst_17317);

(statearr_17355[(8)] = inst_17316);

return statearr_17355;
})();
var statearr_17356_17382 = state_17352__$1;
(statearr_17356_17382[(2)] = null);

(statearr_17356_17382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17353 === (4))){
var inst_17320 = (state_17352[(9)]);
var inst_17320__$1 = (state_17352[(2)]);
var inst_17321 = (inst_17320__$1 == null);
var inst_17322 = cljs.core.not.call(null,inst_17321);
var state_17352__$1 = (function (){var statearr_17357 = state_17352;
(statearr_17357[(9)] = inst_17320__$1);

return statearr_17357;
})();
if(inst_17322){
var statearr_17358_17383 = state_17352__$1;
(statearr_17358_17383[(1)] = (5));

} else {
var statearr_17359_17384 = state_17352__$1;
(statearr_17359_17384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17353 === (15))){
var inst_17342 = (state_17352[(2)]);
var state_17352__$1 = state_17352;
var statearr_17360_17385 = state_17352__$1;
(statearr_17360_17385[(2)] = inst_17342);

(statearr_17360_17385[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17353 === (13))){
var state_17352__$1 = state_17352;
var statearr_17361_17386 = state_17352__$1;
(statearr_17361_17386[(2)] = null);

(statearr_17361_17386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17353 === (6))){
var inst_17317 = (state_17352[(7)]);
var inst_17338 = (inst_17317 > (0));
var state_17352__$1 = state_17352;
if(cljs.core.truth_(inst_17338)){
var statearr_17362_17387 = state_17352__$1;
(statearr_17362_17387[(1)] = (12));

} else {
var statearr_17363_17388 = state_17352__$1;
(statearr_17363_17388[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17353 === (3))){
var inst_17350 = (state_17352[(2)]);
var state_17352__$1 = state_17352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17352__$1,inst_17350);
} else {
if((state_val_17353 === (12))){
var inst_17316 = (state_17352[(8)]);
var inst_17340 = cljs.core.vec.call(null,inst_17316);
var state_17352__$1 = state_17352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17352__$1,(15),out,inst_17340);
} else {
if((state_val_17353 === (2))){
var state_17352__$1 = state_17352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17352__$1,(4),ch);
} else {
if((state_val_17353 === (11))){
var inst_17332 = (state_17352[(2)]);
var inst_17333 = (new Array(n));
var inst_17316 = inst_17333;
var inst_17317 = (0);
var state_17352__$1 = (function (){var statearr_17364 = state_17352;
(statearr_17364[(10)] = inst_17332);

(statearr_17364[(7)] = inst_17317);

(statearr_17364[(8)] = inst_17316);

return statearr_17364;
})();
var statearr_17365_17389 = state_17352__$1;
(statearr_17365_17389[(2)] = null);

(statearr_17365_17389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17353 === (9))){
var inst_17316 = (state_17352[(8)]);
var inst_17330 = cljs.core.vec.call(null,inst_17316);
var state_17352__$1 = state_17352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17352__$1,(11),out,inst_17330);
} else {
if((state_val_17353 === (5))){
var inst_17325 = (state_17352[(11)]);
var inst_17317 = (state_17352[(7)]);
var inst_17320 = (state_17352[(9)]);
var inst_17316 = (state_17352[(8)]);
var inst_17324 = (inst_17316[inst_17317] = inst_17320);
var inst_17325__$1 = (inst_17317 + (1));
var inst_17326 = (inst_17325__$1 < n);
var state_17352__$1 = (function (){var statearr_17366 = state_17352;
(statearr_17366[(11)] = inst_17325__$1);

(statearr_17366[(12)] = inst_17324);

return statearr_17366;
})();
if(cljs.core.truth_(inst_17326)){
var statearr_17367_17390 = state_17352__$1;
(statearr_17367_17390[(1)] = (8));

} else {
var statearr_17368_17391 = state_17352__$1;
(statearr_17368_17391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17353 === (14))){
var inst_17345 = (state_17352[(2)]);
var inst_17346 = cljs.core.async.close_BANG_.call(null,out);
var state_17352__$1 = (function (){var statearr_17370 = state_17352;
(statearr_17370[(13)] = inst_17345);

return statearr_17370;
})();
var statearr_17371_17392 = state_17352__$1;
(statearr_17371_17392[(2)] = inst_17346);

(statearr_17371_17392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17353 === (10))){
var inst_17336 = (state_17352[(2)]);
var state_17352__$1 = state_17352;
var statearr_17372_17393 = state_17352__$1;
(statearr_17372_17393[(2)] = inst_17336);

(statearr_17372_17393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17353 === (8))){
var inst_17325 = (state_17352[(11)]);
var inst_17316 = (state_17352[(8)]);
var tmp17369 = inst_17316;
var inst_17316__$1 = tmp17369;
var inst_17317 = inst_17325;
var state_17352__$1 = (function (){var statearr_17373 = state_17352;
(statearr_17373[(7)] = inst_17317);

(statearr_17373[(8)] = inst_17316__$1);

return statearr_17373;
})();
var statearr_17374_17394 = state_17352__$1;
(statearr_17374_17394[(2)] = null);

(statearr_17374_17394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15523__auto__ = null;
var cljs$core$async$state_machine__15523__auto____0 = (function (){
var statearr_17375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17375[(0)] = cljs$core$async$state_machine__15523__auto__);

(statearr_17375[(1)] = (1));

return statearr_17375;
});
var cljs$core$async$state_machine__15523__auto____1 = (function (state_17352){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_17352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e17376){if((e17376 instanceof Object)){
var ex__15526__auto__ = e17376;
var statearr_17377_17395 = state_17352;
(statearr_17377_17395[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17396 = state_17352;
state_17352 = G__17396;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$state_machine__15523__auto__ = function(state_17352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15523__auto____1.call(this,state_17352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15523__auto____0;
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15523__auto____1;
return cljs$core$async$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_17378 = f__15620__auto__.call(null);
(statearr_17378[(6)] = c__15619__auto___17380);

return statearr_17378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17398 = arguments.length;
switch (G__17398) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15619__auto___17475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_17443){
var state_val_17444 = (state_17443[(1)]);
if((state_val_17444 === (7))){
var inst_17439 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
var statearr_17445_17476 = state_17443__$1;
(statearr_17445_17476[(2)] = inst_17439);

(statearr_17445_17476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (1))){
var inst_17399 = [];
var inst_17400 = inst_17399;
var inst_17401 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17443__$1 = (function (){var statearr_17446 = state_17443;
(statearr_17446[(7)] = inst_17400);

(statearr_17446[(8)] = inst_17401);

return statearr_17446;
})();
var statearr_17447_17477 = state_17443__$1;
(statearr_17447_17477[(2)] = null);

(statearr_17447_17477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (4))){
var inst_17404 = (state_17443[(9)]);
var inst_17404__$1 = (state_17443[(2)]);
var inst_17405 = (inst_17404__$1 == null);
var inst_17406 = cljs.core.not.call(null,inst_17405);
var state_17443__$1 = (function (){var statearr_17448 = state_17443;
(statearr_17448[(9)] = inst_17404__$1);

return statearr_17448;
})();
if(inst_17406){
var statearr_17449_17478 = state_17443__$1;
(statearr_17449_17478[(1)] = (5));

} else {
var statearr_17450_17479 = state_17443__$1;
(statearr_17450_17479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (15))){
var inst_17400 = (state_17443[(7)]);
var inst_17431 = cljs.core.vec.call(null,inst_17400);
var state_17443__$1 = state_17443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17443__$1,(18),out,inst_17431);
} else {
if((state_val_17444 === (13))){
var inst_17426 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
var statearr_17451_17480 = state_17443__$1;
(statearr_17451_17480[(2)] = inst_17426);

(statearr_17451_17480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (6))){
var inst_17400 = (state_17443[(7)]);
var inst_17428 = inst_17400.length;
var inst_17429 = (inst_17428 > (0));
var state_17443__$1 = state_17443;
if(cljs.core.truth_(inst_17429)){
var statearr_17452_17481 = state_17443__$1;
(statearr_17452_17481[(1)] = (15));

} else {
var statearr_17453_17482 = state_17443__$1;
(statearr_17453_17482[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (17))){
var inst_17436 = (state_17443[(2)]);
var inst_17437 = cljs.core.async.close_BANG_.call(null,out);
var state_17443__$1 = (function (){var statearr_17454 = state_17443;
(statearr_17454[(10)] = inst_17436);

return statearr_17454;
})();
var statearr_17455_17483 = state_17443__$1;
(statearr_17455_17483[(2)] = inst_17437);

(statearr_17455_17483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (3))){
var inst_17441 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17443__$1,inst_17441);
} else {
if((state_val_17444 === (12))){
var inst_17400 = (state_17443[(7)]);
var inst_17419 = cljs.core.vec.call(null,inst_17400);
var state_17443__$1 = state_17443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17443__$1,(14),out,inst_17419);
} else {
if((state_val_17444 === (2))){
var state_17443__$1 = state_17443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17443__$1,(4),ch);
} else {
if((state_val_17444 === (11))){
var inst_17404 = (state_17443[(9)]);
var inst_17408 = (state_17443[(11)]);
var inst_17400 = (state_17443[(7)]);
var inst_17416 = inst_17400.push(inst_17404);
var tmp17456 = inst_17400;
var inst_17400__$1 = tmp17456;
var inst_17401 = inst_17408;
var state_17443__$1 = (function (){var statearr_17457 = state_17443;
(statearr_17457[(7)] = inst_17400__$1);

(statearr_17457[(12)] = inst_17416);

(statearr_17457[(8)] = inst_17401);

return statearr_17457;
})();
var statearr_17458_17484 = state_17443__$1;
(statearr_17458_17484[(2)] = null);

(statearr_17458_17484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (9))){
var inst_17401 = (state_17443[(8)]);
var inst_17412 = cljs.core.keyword_identical_QMARK_.call(null,inst_17401,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17443__$1 = state_17443;
var statearr_17459_17485 = state_17443__$1;
(statearr_17459_17485[(2)] = inst_17412);

(statearr_17459_17485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (5))){
var inst_17404 = (state_17443[(9)]);
var inst_17408 = (state_17443[(11)]);
var inst_17409 = (state_17443[(13)]);
var inst_17401 = (state_17443[(8)]);
var inst_17408__$1 = f.call(null,inst_17404);
var inst_17409__$1 = cljs.core._EQ_.call(null,inst_17408__$1,inst_17401);
var state_17443__$1 = (function (){var statearr_17460 = state_17443;
(statearr_17460[(11)] = inst_17408__$1);

(statearr_17460[(13)] = inst_17409__$1);

return statearr_17460;
})();
if(inst_17409__$1){
var statearr_17461_17486 = state_17443__$1;
(statearr_17461_17486[(1)] = (8));

} else {
var statearr_17462_17487 = state_17443__$1;
(statearr_17462_17487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (14))){
var inst_17404 = (state_17443[(9)]);
var inst_17408 = (state_17443[(11)]);
var inst_17421 = (state_17443[(2)]);
var inst_17422 = [];
var inst_17423 = inst_17422.push(inst_17404);
var inst_17400 = inst_17422;
var inst_17401 = inst_17408;
var state_17443__$1 = (function (){var statearr_17463 = state_17443;
(statearr_17463[(14)] = inst_17423);

(statearr_17463[(7)] = inst_17400);

(statearr_17463[(15)] = inst_17421);

(statearr_17463[(8)] = inst_17401);

return statearr_17463;
})();
var statearr_17464_17488 = state_17443__$1;
(statearr_17464_17488[(2)] = null);

(statearr_17464_17488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (16))){
var state_17443__$1 = state_17443;
var statearr_17465_17489 = state_17443__$1;
(statearr_17465_17489[(2)] = null);

(statearr_17465_17489[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (10))){
var inst_17414 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
if(cljs.core.truth_(inst_17414)){
var statearr_17466_17490 = state_17443__$1;
(statearr_17466_17490[(1)] = (11));

} else {
var statearr_17467_17491 = state_17443__$1;
(statearr_17467_17491[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (18))){
var inst_17433 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
var statearr_17468_17492 = state_17443__$1;
(statearr_17468_17492[(2)] = inst_17433);

(statearr_17468_17492[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (8))){
var inst_17409 = (state_17443[(13)]);
var state_17443__$1 = state_17443;
var statearr_17469_17493 = state_17443__$1;
(statearr_17469_17493[(2)] = inst_17409);

(statearr_17469_17493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15523__auto__ = null;
var cljs$core$async$state_machine__15523__auto____0 = (function (){
var statearr_17470 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17470[(0)] = cljs$core$async$state_machine__15523__auto__);

(statearr_17470[(1)] = (1));

return statearr_17470;
});
var cljs$core$async$state_machine__15523__auto____1 = (function (state_17443){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_17443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e17471){if((e17471 instanceof Object)){
var ex__15526__auto__ = e17471;
var statearr_17472_17494 = state_17443;
(statearr_17472_17494[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17495 = state_17443;
state_17443 = G__17495;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
cljs$core$async$state_machine__15523__auto__ = function(state_17443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15523__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15523__auto____1.call(this,state_17443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15523__auto____0;
cljs$core$async$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15523__auto____1;
return cljs$core$async$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_17473 = f__15620__auto__.call(null);
(statearr_17473[(6)] = c__15619__auto___17475);

return statearr_17473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map

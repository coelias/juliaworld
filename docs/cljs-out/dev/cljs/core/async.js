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
var G__13764 = arguments.length;
switch (G__13764) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13765 = (function (f,blockable,meta13766){
this.f = f;
this.blockable = blockable;
this.meta13766 = meta13766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13767,meta13766__$1){
var self__ = this;
var _13767__$1 = this;
return (new cljs.core.async.t_cljs$core$async13765(self__.f,self__.blockable,meta13766__$1));
}));

(cljs.core.async.t_cljs$core$async13765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13767){
var self__ = this;
var _13767__$1 = this;
return self__.meta13766;
}));

(cljs.core.async.t_cljs$core$async13765.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13765.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13765.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13765.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13766","meta13766",-1004161821,null)], null);
}));

(cljs.core.async.t_cljs$core$async13765.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13765");

(cljs.core.async.t_cljs$core$async13765.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async13765");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13765.
 */
cljs.core.async.__GT_t_cljs$core$async13765 = (function cljs$core$async$__GT_t_cljs$core$async13765(f__$1,blockable__$1,meta13766){
return (new cljs.core.async.t_cljs$core$async13765(f__$1,blockable__$1,meta13766));
});

}

return (new cljs.core.async.t_cljs$core$async13765(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13771 = arguments.length;
switch (G__13771) {
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
var G__13774 = arguments.length;
switch (G__13774) {
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
var G__13777 = arguments.length;
switch (G__13777) {
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
var val_13779 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13779);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_13779);
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
var G__13781 = arguments.length;
switch (G__13781) {
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
var n__5633__auto___13783 = n;
var x_13784 = (0);
while(true){
if((x_13784 < n__5633__auto___13783)){
(a[x_13784] = (0));

var G__13785 = (x_13784 + (1));
x_13784 = G__13785;
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

var G__13786 = (i + (1));
i = G__13786;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13787 = (function (flag,meta13788){
this.flag = flag;
this.meta13788 = meta13788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13789,meta13788__$1){
var self__ = this;
var _13789__$1 = this;
return (new cljs.core.async.t_cljs$core$async13787(self__.flag,meta13788__$1));
}));

(cljs.core.async.t_cljs$core$async13787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13789){
var self__ = this;
var _13789__$1 = this;
return self__.meta13788;
}));

(cljs.core.async.t_cljs$core$async13787.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13787.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async13787.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13787.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13788","meta13788",-307825836,null)], null);
}));

(cljs.core.async.t_cljs$core$async13787.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13787");

(cljs.core.async.t_cljs$core$async13787.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async13787");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13787.
 */
cljs.core.async.__GT_t_cljs$core$async13787 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13787(flag__$1,meta13788){
return (new cljs.core.async.t_cljs$core$async13787(flag__$1,meta13788));
});

}

return (new cljs.core.async.t_cljs$core$async13787(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13790 = (function (flag,cb,meta13791){
this.flag = flag;
this.cb = cb;
this.meta13791 = meta13791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13792,meta13791__$1){
var self__ = this;
var _13792__$1 = this;
return (new cljs.core.async.t_cljs$core$async13790(self__.flag,self__.cb,meta13791__$1));
}));

(cljs.core.async.t_cljs$core$async13790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13792){
var self__ = this;
var _13792__$1 = this;
return self__.meta13791;
}));

(cljs.core.async.t_cljs$core$async13790.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13790.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async13790.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13790.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13791","meta13791",444456608,null)], null);
}));

(cljs.core.async.t_cljs$core$async13790.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13790");

(cljs.core.async.t_cljs$core$async13790.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async13790");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13790.
 */
cljs.core.async.__GT_t_cljs$core$async13790 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13790(flag__$1,cb__$1,meta13791){
return (new cljs.core.async.t_cljs$core$async13790(flag__$1,cb__$1,meta13791));
});

}

return (new cljs.core.async.t_cljs$core$async13790(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13793_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13793_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13794_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13794_SHARP_,port], null));
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
var G__13795 = (i + (1));
i = G__13795;
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
var len__5766__auto___13800 = arguments.length;
var i__5767__auto___13801 = (0);
while(true){
if((i__5767__auto___13801 < len__5766__auto___13800)){
args__5772__auto__.push((arguments[i__5767__auto___13801]));

var G__13802 = (i__5767__auto___13801 + (1));
i__5767__auto___13801 = G__13802;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13798){
var map__13799 = p__13798;
var map__13799__$1 = cljs.core.__destructure_map.call(null,map__13799);
var opts = map__13799__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13796){
var G__13797 = cljs.core.first.call(null,seq13796);
var seq13796__$1 = cljs.core.next.call(null,seq13796);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13797,seq13796__$1);
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
var G__13804 = arguments.length;
switch (G__13804) {
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
var c__13704__auto___13850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_13828){
var state_val_13829 = (state_13828[(1)]);
if((state_val_13829 === (7))){
var inst_13824 = (state_13828[(2)]);
var state_13828__$1 = state_13828;
var statearr_13830_13851 = state_13828__$1;
(statearr_13830_13851[(2)] = inst_13824);

(statearr_13830_13851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13829 === (1))){
var state_13828__$1 = state_13828;
var statearr_13831_13852 = state_13828__$1;
(statearr_13831_13852[(2)] = null);

(statearr_13831_13852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13829 === (4))){
var inst_13807 = (state_13828[(7)]);
var inst_13807__$1 = (state_13828[(2)]);
var inst_13808 = (inst_13807__$1 == null);
var state_13828__$1 = (function (){var statearr_13832 = state_13828;
(statearr_13832[(7)] = inst_13807__$1);

return statearr_13832;
})();
if(cljs.core.truth_(inst_13808)){
var statearr_13833_13853 = state_13828__$1;
(statearr_13833_13853[(1)] = (5));

} else {
var statearr_13834_13854 = state_13828__$1;
(statearr_13834_13854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13829 === (13))){
var state_13828__$1 = state_13828;
var statearr_13835_13855 = state_13828__$1;
(statearr_13835_13855[(2)] = null);

(statearr_13835_13855[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13829 === (6))){
var inst_13807 = (state_13828[(7)]);
var state_13828__$1 = state_13828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13828__$1,(11),to,inst_13807);
} else {
if((state_val_13829 === (3))){
var inst_13826 = (state_13828[(2)]);
var state_13828__$1 = state_13828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13828__$1,inst_13826);
} else {
if((state_val_13829 === (12))){
var state_13828__$1 = state_13828;
var statearr_13836_13856 = state_13828__$1;
(statearr_13836_13856[(2)] = null);

(statearr_13836_13856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13829 === (2))){
var state_13828__$1 = state_13828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13828__$1,(4),from);
} else {
if((state_val_13829 === (11))){
var inst_13817 = (state_13828[(2)]);
var state_13828__$1 = state_13828;
if(cljs.core.truth_(inst_13817)){
var statearr_13837_13857 = state_13828__$1;
(statearr_13837_13857[(1)] = (12));

} else {
var statearr_13838_13858 = state_13828__$1;
(statearr_13838_13858[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13829 === (9))){
var state_13828__$1 = state_13828;
var statearr_13839_13859 = state_13828__$1;
(statearr_13839_13859[(2)] = null);

(statearr_13839_13859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13829 === (5))){
var state_13828__$1 = state_13828;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13840_13860 = state_13828__$1;
(statearr_13840_13860[(1)] = (8));

} else {
var statearr_13841_13861 = state_13828__$1;
(statearr_13841_13861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13829 === (14))){
var inst_13822 = (state_13828[(2)]);
var state_13828__$1 = state_13828;
var statearr_13842_13862 = state_13828__$1;
(statearr_13842_13862[(2)] = inst_13822);

(statearr_13842_13862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13829 === (10))){
var inst_13814 = (state_13828[(2)]);
var state_13828__$1 = state_13828;
var statearr_13843_13863 = state_13828__$1;
(statearr_13843_13863[(2)] = inst_13814);

(statearr_13843_13863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13829 === (8))){
var inst_13811 = cljs.core.async.close_BANG_.call(null,to);
var state_13828__$1 = state_13828;
var statearr_13844_13864 = state_13828__$1;
(statearr_13844_13864[(2)] = inst_13811);

(statearr_13844_13864[(1)] = (10));


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
var cljs$core$async$state_machine__13608__auto__ = null;
var cljs$core$async$state_machine__13608__auto____0 = (function (){
var statearr_13845 = [null,null,null,null,null,null,null,null];
(statearr_13845[(0)] = cljs$core$async$state_machine__13608__auto__);

(statearr_13845[(1)] = (1));

return statearr_13845;
});
var cljs$core$async$state_machine__13608__auto____1 = (function (state_13828){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_13828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e13846){if((e13846 instanceof Object)){
var ex__13611__auto__ = e13846;
var statearr_13847_13865 = state_13828;
(statearr_13847_13865[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13866 = state_13828;
state_13828 = G__13866;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$state_machine__13608__auto__ = function(state_13828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13608__auto____1.call(this,state_13828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13608__auto____0;
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13608__auto____1;
return cljs$core$async$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_13848 = f__13705__auto__.call(null);
(statearr_13848[(6)] = c__13704__auto___13850);

return statearr_13848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
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
var process__$1 = (function (p__13867){
var vec__13868 = p__13867;
var v = cljs.core.nth.call(null,vec__13868,(0),null);
var p = cljs.core.nth.call(null,vec__13868,(1),null);
var job = vec__13868;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13704__auto___14039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_13875){
var state_val_13876 = (state_13875[(1)]);
if((state_val_13876 === (1))){
var state_13875__$1 = state_13875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13875__$1,(2),res,v);
} else {
if((state_val_13876 === (2))){
var inst_13872 = (state_13875[(2)]);
var inst_13873 = cljs.core.async.close_BANG_.call(null,res);
var state_13875__$1 = (function (){var statearr_13877 = state_13875;
(statearr_13877[(7)] = inst_13872);

return statearr_13877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13875__$1,inst_13873);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____0 = (function (){
var statearr_13878 = [null,null,null,null,null,null,null,null];
(statearr_13878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__);

(statearr_13878[(1)] = (1));

return statearr_13878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____1 = (function (state_13875){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_13875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e13879){if((e13879 instanceof Object)){
var ex__13611__auto__ = e13879;
var statearr_13880_14040 = state_13875;
(statearr_13880_14040[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14041 = state_13875;
state_13875 = G__14041;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__ = function(state_13875){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____1.call(this,state_13875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_13881 = f__13705__auto__.call(null);
(statearr_13881[(6)] = c__13704__auto___14039);

return statearr_13881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__13882){
var vec__13883 = p__13882;
var v = cljs.core.nth.call(null,vec__13883,(0),null);
var p = cljs.core.nth.call(null,vec__13883,(1),null);
var job = vec__13883;
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
var n__5633__auto___14042 = n;
var __14043 = (0);
while(true){
if((__14043 < n__5633__auto___14042)){
var G__13886_14044 = type;
var G__13886_14045__$1 = (((G__13886_14044 instanceof cljs.core.Keyword))?G__13886_14044.fqn:null);
switch (G__13886_14045__$1) {
case "compute":
var c__13704__auto___14047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14043,c__13704__auto___14047,G__13886_14044,G__13886_14045__$1,n__5633__auto___14042,jobs,results,process__$1,async){
return (function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = ((function (__14043,c__13704__auto___14047,G__13886_14044,G__13886_14045__$1,n__5633__auto___14042,jobs,results,process__$1,async){
return (function (state_13899){
var state_val_13900 = (state_13899[(1)]);
if((state_val_13900 === (1))){
var state_13899__$1 = state_13899;
var statearr_13901_14048 = state_13899__$1;
(statearr_13901_14048[(2)] = null);

(statearr_13901_14048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13900 === (2))){
var state_13899__$1 = state_13899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13899__$1,(4),jobs);
} else {
if((state_val_13900 === (3))){
var inst_13897 = (state_13899[(2)]);
var state_13899__$1 = state_13899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13899__$1,inst_13897);
} else {
if((state_val_13900 === (4))){
var inst_13889 = (state_13899[(2)]);
var inst_13890 = process__$1.call(null,inst_13889);
var state_13899__$1 = state_13899;
if(cljs.core.truth_(inst_13890)){
var statearr_13902_14049 = state_13899__$1;
(statearr_13902_14049[(1)] = (5));

} else {
var statearr_13903_14050 = state_13899__$1;
(statearr_13903_14050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13900 === (5))){
var state_13899__$1 = state_13899;
var statearr_13904_14051 = state_13899__$1;
(statearr_13904_14051[(2)] = null);

(statearr_13904_14051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13900 === (6))){
var state_13899__$1 = state_13899;
var statearr_13905_14052 = state_13899__$1;
(statearr_13905_14052[(2)] = null);

(statearr_13905_14052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13900 === (7))){
var inst_13895 = (state_13899[(2)]);
var state_13899__$1 = state_13899;
var statearr_13906_14053 = state_13899__$1;
(statearr_13906_14053[(2)] = inst_13895);

(statearr_13906_14053[(1)] = (3));


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
});})(__14043,c__13704__auto___14047,G__13886_14044,G__13886_14045__$1,n__5633__auto___14042,jobs,results,process__$1,async))
;
return ((function (__14043,switch__13607__auto__,c__13704__auto___14047,G__13886_14044,G__13886_14045__$1,n__5633__auto___14042,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____0 = (function (){
var statearr_13907 = [null,null,null,null,null,null,null];
(statearr_13907[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__);

(statearr_13907[(1)] = (1));

return statearr_13907;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____1 = (function (state_13899){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_13899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e13908){if((e13908 instanceof Object)){
var ex__13611__auto__ = e13908;
var statearr_13909_14054 = state_13899;
(statearr_13909_14054[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14055 = state_13899;
state_13899 = G__14055;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__ = function(state_13899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____1.call(this,state_13899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__;
})()
;})(__14043,switch__13607__auto__,c__13704__auto___14047,G__13886_14044,G__13886_14045__$1,n__5633__auto___14042,jobs,results,process__$1,async))
})();
var state__13706__auto__ = (function (){var statearr_13910 = f__13705__auto__.call(null);
(statearr_13910[(6)] = c__13704__auto___14047);

return statearr_13910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
});})(__14043,c__13704__auto___14047,G__13886_14044,G__13886_14045__$1,n__5633__auto___14042,jobs,results,process__$1,async))
);


break;
case "async":
var c__13704__auto___14056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14043,c__13704__auto___14056,G__13886_14044,G__13886_14045__$1,n__5633__auto___14042,jobs,results,process__$1,async){
return (function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = ((function (__14043,c__13704__auto___14056,G__13886_14044,G__13886_14045__$1,n__5633__auto___14042,jobs,results,process__$1,async){
return (function (state_13923){
var state_val_13924 = (state_13923[(1)]);
if((state_val_13924 === (1))){
var state_13923__$1 = state_13923;
var statearr_13925_14057 = state_13923__$1;
(statearr_13925_14057[(2)] = null);

(statearr_13925_14057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13924 === (2))){
var state_13923__$1 = state_13923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13923__$1,(4),jobs);
} else {
if((state_val_13924 === (3))){
var inst_13921 = (state_13923[(2)]);
var state_13923__$1 = state_13923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13923__$1,inst_13921);
} else {
if((state_val_13924 === (4))){
var inst_13913 = (state_13923[(2)]);
var inst_13914 = async.call(null,inst_13913);
var state_13923__$1 = state_13923;
if(cljs.core.truth_(inst_13914)){
var statearr_13926_14058 = state_13923__$1;
(statearr_13926_14058[(1)] = (5));

} else {
var statearr_13927_14059 = state_13923__$1;
(statearr_13927_14059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13924 === (5))){
var state_13923__$1 = state_13923;
var statearr_13928_14060 = state_13923__$1;
(statearr_13928_14060[(2)] = null);

(statearr_13928_14060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13924 === (6))){
var state_13923__$1 = state_13923;
var statearr_13929_14061 = state_13923__$1;
(statearr_13929_14061[(2)] = null);

(statearr_13929_14061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13924 === (7))){
var inst_13919 = (state_13923[(2)]);
var state_13923__$1 = state_13923;
var statearr_13930_14062 = state_13923__$1;
(statearr_13930_14062[(2)] = inst_13919);

(statearr_13930_14062[(1)] = (3));


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
});})(__14043,c__13704__auto___14056,G__13886_14044,G__13886_14045__$1,n__5633__auto___14042,jobs,results,process__$1,async))
;
return ((function (__14043,switch__13607__auto__,c__13704__auto___14056,G__13886_14044,G__13886_14045__$1,n__5633__auto___14042,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____0 = (function (){
var statearr_13931 = [null,null,null,null,null,null,null];
(statearr_13931[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__);

(statearr_13931[(1)] = (1));

return statearr_13931;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____1 = (function (state_13923){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_13923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e13932){if((e13932 instanceof Object)){
var ex__13611__auto__ = e13932;
var statearr_13933_14063 = state_13923;
(statearr_13933_14063[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14064 = state_13923;
state_13923 = G__14064;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__ = function(state_13923){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____1.call(this,state_13923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__;
})()
;})(__14043,switch__13607__auto__,c__13704__auto___14056,G__13886_14044,G__13886_14045__$1,n__5633__auto___14042,jobs,results,process__$1,async))
})();
var state__13706__auto__ = (function (){var statearr_13934 = f__13705__auto__.call(null);
(statearr_13934[(6)] = c__13704__auto___14056);

return statearr_13934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
});})(__14043,c__13704__auto___14056,G__13886_14044,G__13886_14045__$1,n__5633__auto___14042,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13886_14045__$1)].join('')));

}

var G__14065 = (__14043 + (1));
__14043 = G__14065;
continue;
} else {
}
break;
}

var c__13704__auto___14066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_13956){
var state_val_13957 = (state_13956[(1)]);
if((state_val_13957 === (7))){
var inst_13952 = (state_13956[(2)]);
var state_13956__$1 = state_13956;
var statearr_13958_14067 = state_13956__$1;
(statearr_13958_14067[(2)] = inst_13952);

(statearr_13958_14067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (1))){
var state_13956__$1 = state_13956;
var statearr_13959_14068 = state_13956__$1;
(statearr_13959_14068[(2)] = null);

(statearr_13959_14068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (4))){
var inst_13937 = (state_13956[(7)]);
var inst_13937__$1 = (state_13956[(2)]);
var inst_13938 = (inst_13937__$1 == null);
var state_13956__$1 = (function (){var statearr_13960 = state_13956;
(statearr_13960[(7)] = inst_13937__$1);

return statearr_13960;
})();
if(cljs.core.truth_(inst_13938)){
var statearr_13961_14069 = state_13956__$1;
(statearr_13961_14069[(1)] = (5));

} else {
var statearr_13962_14070 = state_13956__$1;
(statearr_13962_14070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (6))){
var inst_13937 = (state_13956[(7)]);
var inst_13942 = (state_13956[(8)]);
var inst_13942__$1 = cljs.core.async.chan.call(null,(1));
var inst_13943 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13944 = [inst_13937,inst_13942__$1];
var inst_13945 = (new cljs.core.PersistentVector(null,2,(5),inst_13943,inst_13944,null));
var state_13956__$1 = (function (){var statearr_13963 = state_13956;
(statearr_13963[(8)] = inst_13942__$1);

return statearr_13963;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13956__$1,(8),jobs,inst_13945);
} else {
if((state_val_13957 === (3))){
var inst_13954 = (state_13956[(2)]);
var state_13956__$1 = state_13956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13956__$1,inst_13954);
} else {
if((state_val_13957 === (2))){
var state_13956__$1 = state_13956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13956__$1,(4),from);
} else {
if((state_val_13957 === (9))){
var inst_13949 = (state_13956[(2)]);
var state_13956__$1 = (function (){var statearr_13964 = state_13956;
(statearr_13964[(9)] = inst_13949);

return statearr_13964;
})();
var statearr_13965_14071 = state_13956__$1;
(statearr_13965_14071[(2)] = null);

(statearr_13965_14071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (5))){
var inst_13940 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13956__$1 = state_13956;
var statearr_13966_14072 = state_13956__$1;
(statearr_13966_14072[(2)] = inst_13940);

(statearr_13966_14072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13957 === (8))){
var inst_13942 = (state_13956[(8)]);
var inst_13947 = (state_13956[(2)]);
var state_13956__$1 = (function (){var statearr_13967 = state_13956;
(statearr_13967[(10)] = inst_13947);

return statearr_13967;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13956__$1,(9),results,inst_13942);
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
var cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____0 = (function (){
var statearr_13968 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13968[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__);

(statearr_13968[(1)] = (1));

return statearr_13968;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____1 = (function (state_13956){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_13956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e13969){if((e13969 instanceof Object)){
var ex__13611__auto__ = e13969;
var statearr_13970_14073 = state_13956;
(statearr_13970_14073[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14074 = state_13956;
state_13956 = G__14074;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__ = function(state_13956){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____1.call(this,state_13956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_13971 = f__13705__auto__.call(null);
(statearr_13971[(6)] = c__13704__auto___14066);

return statearr_13971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_14009){
var state_val_14010 = (state_14009[(1)]);
if((state_val_14010 === (7))){
var inst_14005 = (state_14009[(2)]);
var state_14009__$1 = state_14009;
var statearr_14011_14075 = state_14009__$1;
(statearr_14011_14075[(2)] = inst_14005);

(statearr_14011_14075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (20))){
var state_14009__$1 = state_14009;
var statearr_14012_14076 = state_14009__$1;
(statearr_14012_14076[(2)] = null);

(statearr_14012_14076[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (1))){
var state_14009__$1 = state_14009;
var statearr_14013_14077 = state_14009__$1;
(statearr_14013_14077[(2)] = null);

(statearr_14013_14077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (4))){
var inst_13974 = (state_14009[(7)]);
var inst_13974__$1 = (state_14009[(2)]);
var inst_13975 = (inst_13974__$1 == null);
var state_14009__$1 = (function (){var statearr_14014 = state_14009;
(statearr_14014[(7)] = inst_13974__$1);

return statearr_14014;
})();
if(cljs.core.truth_(inst_13975)){
var statearr_14015_14078 = state_14009__$1;
(statearr_14015_14078[(1)] = (5));

} else {
var statearr_14016_14079 = state_14009__$1;
(statearr_14016_14079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (15))){
var inst_13987 = (state_14009[(8)]);
var state_14009__$1 = state_14009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14009__$1,(18),to,inst_13987);
} else {
if((state_val_14010 === (21))){
var inst_14000 = (state_14009[(2)]);
var state_14009__$1 = state_14009;
var statearr_14017_14080 = state_14009__$1;
(statearr_14017_14080[(2)] = inst_14000);

(statearr_14017_14080[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (13))){
var inst_14002 = (state_14009[(2)]);
var state_14009__$1 = (function (){var statearr_14018 = state_14009;
(statearr_14018[(9)] = inst_14002);

return statearr_14018;
})();
var statearr_14019_14081 = state_14009__$1;
(statearr_14019_14081[(2)] = null);

(statearr_14019_14081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (6))){
var inst_13974 = (state_14009[(7)]);
var state_14009__$1 = state_14009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14009__$1,(11),inst_13974);
} else {
if((state_val_14010 === (17))){
var inst_13995 = (state_14009[(2)]);
var state_14009__$1 = state_14009;
if(cljs.core.truth_(inst_13995)){
var statearr_14020_14082 = state_14009__$1;
(statearr_14020_14082[(1)] = (19));

} else {
var statearr_14021_14083 = state_14009__$1;
(statearr_14021_14083[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (3))){
var inst_14007 = (state_14009[(2)]);
var state_14009__$1 = state_14009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14009__$1,inst_14007);
} else {
if((state_val_14010 === (12))){
var inst_13984 = (state_14009[(10)]);
var state_14009__$1 = state_14009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14009__$1,(14),inst_13984);
} else {
if((state_val_14010 === (2))){
var state_14009__$1 = state_14009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14009__$1,(4),results);
} else {
if((state_val_14010 === (19))){
var state_14009__$1 = state_14009;
var statearr_14022_14084 = state_14009__$1;
(statearr_14022_14084[(2)] = null);

(statearr_14022_14084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (11))){
var inst_13984 = (state_14009[(2)]);
var state_14009__$1 = (function (){var statearr_14023 = state_14009;
(statearr_14023[(10)] = inst_13984);

return statearr_14023;
})();
var statearr_14024_14085 = state_14009__$1;
(statearr_14024_14085[(2)] = null);

(statearr_14024_14085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (9))){
var state_14009__$1 = state_14009;
var statearr_14025_14086 = state_14009__$1;
(statearr_14025_14086[(2)] = null);

(statearr_14025_14086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (5))){
var state_14009__$1 = state_14009;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14026_14087 = state_14009__$1;
(statearr_14026_14087[(1)] = (8));

} else {
var statearr_14027_14088 = state_14009__$1;
(statearr_14027_14088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (14))){
var inst_13987 = (state_14009[(8)]);
var inst_13989 = (state_14009[(11)]);
var inst_13987__$1 = (state_14009[(2)]);
var inst_13988 = (inst_13987__$1 == null);
var inst_13989__$1 = cljs.core.not.call(null,inst_13988);
var state_14009__$1 = (function (){var statearr_14028 = state_14009;
(statearr_14028[(8)] = inst_13987__$1);

(statearr_14028[(11)] = inst_13989__$1);

return statearr_14028;
})();
if(inst_13989__$1){
var statearr_14029_14089 = state_14009__$1;
(statearr_14029_14089[(1)] = (15));

} else {
var statearr_14030_14090 = state_14009__$1;
(statearr_14030_14090[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (16))){
var inst_13989 = (state_14009[(11)]);
var state_14009__$1 = state_14009;
var statearr_14031_14091 = state_14009__$1;
(statearr_14031_14091[(2)] = inst_13989);

(statearr_14031_14091[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (10))){
var inst_13981 = (state_14009[(2)]);
var state_14009__$1 = state_14009;
var statearr_14032_14092 = state_14009__$1;
(statearr_14032_14092[(2)] = inst_13981);

(statearr_14032_14092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (18))){
var inst_13992 = (state_14009[(2)]);
var state_14009__$1 = state_14009;
var statearr_14033_14093 = state_14009__$1;
(statearr_14033_14093[(2)] = inst_13992);

(statearr_14033_14093[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14010 === (8))){
var inst_13978 = cljs.core.async.close_BANG_.call(null,to);
var state_14009__$1 = state_14009;
var statearr_14034_14094 = state_14009__$1;
(statearr_14034_14094[(2)] = inst_13978);

(statearr_14034_14094[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____0 = (function (){
var statearr_14035 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__);

(statearr_14035[(1)] = (1));

return statearr_14035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____1 = (function (state_14009){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_14009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e14036){if((e14036 instanceof Object)){
var ex__13611__auto__ = e14036;
var statearr_14037_14095 = state_14009;
(statearr_14037_14095[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14096 = state_14009;
state_14009 = G__14096;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__ = function(state_14009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____1.call(this,state_14009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_14038 = f__13705__auto__.call(null);
(statearr_14038[(6)] = c__13704__auto__);

return statearr_14038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
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
var G__14098 = arguments.length;
switch (G__14098) {
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
var G__14101 = arguments.length;
switch (G__14101) {
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
var G__14104 = arguments.length;
switch (G__14104) {
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
var c__13704__auto___14153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_14130){
var state_val_14131 = (state_14130[(1)]);
if((state_val_14131 === (7))){
var inst_14126 = (state_14130[(2)]);
var state_14130__$1 = state_14130;
var statearr_14132_14154 = state_14130__$1;
(statearr_14132_14154[(2)] = inst_14126);

(statearr_14132_14154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14131 === (1))){
var state_14130__$1 = state_14130;
var statearr_14133_14155 = state_14130__$1;
(statearr_14133_14155[(2)] = null);

(statearr_14133_14155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14131 === (4))){
var inst_14107 = (state_14130[(7)]);
var inst_14107__$1 = (state_14130[(2)]);
var inst_14108 = (inst_14107__$1 == null);
var state_14130__$1 = (function (){var statearr_14134 = state_14130;
(statearr_14134[(7)] = inst_14107__$1);

return statearr_14134;
})();
if(cljs.core.truth_(inst_14108)){
var statearr_14135_14156 = state_14130__$1;
(statearr_14135_14156[(1)] = (5));

} else {
var statearr_14136_14157 = state_14130__$1;
(statearr_14136_14157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14131 === (13))){
var state_14130__$1 = state_14130;
var statearr_14137_14158 = state_14130__$1;
(statearr_14137_14158[(2)] = null);

(statearr_14137_14158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14131 === (6))){
var inst_14107 = (state_14130[(7)]);
var inst_14113 = p.call(null,inst_14107);
var state_14130__$1 = state_14130;
if(cljs.core.truth_(inst_14113)){
var statearr_14138_14159 = state_14130__$1;
(statearr_14138_14159[(1)] = (9));

} else {
var statearr_14139_14160 = state_14130__$1;
(statearr_14139_14160[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14131 === (3))){
var inst_14128 = (state_14130[(2)]);
var state_14130__$1 = state_14130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14130__$1,inst_14128);
} else {
if((state_val_14131 === (12))){
var state_14130__$1 = state_14130;
var statearr_14140_14161 = state_14130__$1;
(statearr_14140_14161[(2)] = null);

(statearr_14140_14161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14131 === (2))){
var state_14130__$1 = state_14130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14130__$1,(4),ch);
} else {
if((state_val_14131 === (11))){
var inst_14107 = (state_14130[(7)]);
var inst_14117 = (state_14130[(2)]);
var state_14130__$1 = state_14130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14130__$1,(8),inst_14117,inst_14107);
} else {
if((state_val_14131 === (9))){
var state_14130__$1 = state_14130;
var statearr_14141_14162 = state_14130__$1;
(statearr_14141_14162[(2)] = tc);

(statearr_14141_14162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14131 === (5))){
var inst_14110 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14111 = cljs.core.async.close_BANG_.call(null,fc);
var state_14130__$1 = (function (){var statearr_14142 = state_14130;
(statearr_14142[(8)] = inst_14110);

return statearr_14142;
})();
var statearr_14143_14163 = state_14130__$1;
(statearr_14143_14163[(2)] = inst_14111);

(statearr_14143_14163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14131 === (14))){
var inst_14124 = (state_14130[(2)]);
var state_14130__$1 = state_14130;
var statearr_14144_14164 = state_14130__$1;
(statearr_14144_14164[(2)] = inst_14124);

(statearr_14144_14164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14131 === (10))){
var state_14130__$1 = state_14130;
var statearr_14145_14165 = state_14130__$1;
(statearr_14145_14165[(2)] = fc);

(statearr_14145_14165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14131 === (8))){
var inst_14119 = (state_14130[(2)]);
var state_14130__$1 = state_14130;
if(cljs.core.truth_(inst_14119)){
var statearr_14146_14166 = state_14130__$1;
(statearr_14146_14166[(1)] = (12));

} else {
var statearr_14147_14167 = state_14130__$1;
(statearr_14147_14167[(1)] = (13));

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
var cljs$core$async$state_machine__13608__auto__ = null;
var cljs$core$async$state_machine__13608__auto____0 = (function (){
var statearr_14148 = [null,null,null,null,null,null,null,null,null];
(statearr_14148[(0)] = cljs$core$async$state_machine__13608__auto__);

(statearr_14148[(1)] = (1));

return statearr_14148;
});
var cljs$core$async$state_machine__13608__auto____1 = (function (state_14130){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_14130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e14149){if((e14149 instanceof Object)){
var ex__13611__auto__ = e14149;
var statearr_14150_14168 = state_14130;
(statearr_14150_14168[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14169 = state_14130;
state_14130 = G__14169;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$state_machine__13608__auto__ = function(state_14130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13608__auto____1.call(this,state_14130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13608__auto____0;
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13608__auto____1;
return cljs$core$async$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_14151 = f__13705__auto__.call(null);
(statearr_14151[(6)] = c__13704__auto___14153);

return statearr_14151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
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
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_14190){
var state_val_14191 = (state_14190[(1)]);
if((state_val_14191 === (7))){
var inst_14186 = (state_14190[(2)]);
var state_14190__$1 = state_14190;
var statearr_14192_14210 = state_14190__$1;
(statearr_14192_14210[(2)] = inst_14186);

(statearr_14192_14210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (1))){
var inst_14170 = init;
var state_14190__$1 = (function (){var statearr_14193 = state_14190;
(statearr_14193[(7)] = inst_14170);

return statearr_14193;
})();
var statearr_14194_14211 = state_14190__$1;
(statearr_14194_14211[(2)] = null);

(statearr_14194_14211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (4))){
var inst_14173 = (state_14190[(8)]);
var inst_14173__$1 = (state_14190[(2)]);
var inst_14174 = (inst_14173__$1 == null);
var state_14190__$1 = (function (){var statearr_14195 = state_14190;
(statearr_14195[(8)] = inst_14173__$1);

return statearr_14195;
})();
if(cljs.core.truth_(inst_14174)){
var statearr_14196_14212 = state_14190__$1;
(statearr_14196_14212[(1)] = (5));

} else {
var statearr_14197_14213 = state_14190__$1;
(statearr_14197_14213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (6))){
var inst_14170 = (state_14190[(7)]);
var inst_14173 = (state_14190[(8)]);
var inst_14177 = (state_14190[(9)]);
var inst_14177__$1 = f.call(null,inst_14170,inst_14173);
var inst_14178 = cljs.core.reduced_QMARK_.call(null,inst_14177__$1);
var state_14190__$1 = (function (){var statearr_14198 = state_14190;
(statearr_14198[(9)] = inst_14177__$1);

return statearr_14198;
})();
if(inst_14178){
var statearr_14199_14214 = state_14190__$1;
(statearr_14199_14214[(1)] = (8));

} else {
var statearr_14200_14215 = state_14190__$1;
(statearr_14200_14215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (3))){
var inst_14188 = (state_14190[(2)]);
var state_14190__$1 = state_14190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14190__$1,inst_14188);
} else {
if((state_val_14191 === (2))){
var state_14190__$1 = state_14190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14190__$1,(4),ch);
} else {
if((state_val_14191 === (9))){
var inst_14177 = (state_14190[(9)]);
var inst_14170 = inst_14177;
var state_14190__$1 = (function (){var statearr_14201 = state_14190;
(statearr_14201[(7)] = inst_14170);

return statearr_14201;
})();
var statearr_14202_14216 = state_14190__$1;
(statearr_14202_14216[(2)] = null);

(statearr_14202_14216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (5))){
var inst_14170 = (state_14190[(7)]);
var state_14190__$1 = state_14190;
var statearr_14203_14217 = state_14190__$1;
(statearr_14203_14217[(2)] = inst_14170);

(statearr_14203_14217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (10))){
var inst_14184 = (state_14190[(2)]);
var state_14190__$1 = state_14190;
var statearr_14204_14218 = state_14190__$1;
(statearr_14204_14218[(2)] = inst_14184);

(statearr_14204_14218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (8))){
var inst_14177 = (state_14190[(9)]);
var inst_14180 = cljs.core.deref.call(null,inst_14177);
var state_14190__$1 = state_14190;
var statearr_14205_14219 = state_14190__$1;
(statearr_14205_14219[(2)] = inst_14180);

(statearr_14205_14219[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__13608__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13608__auto____0 = (function (){
var statearr_14206 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14206[(0)] = cljs$core$async$reduce_$_state_machine__13608__auto__);

(statearr_14206[(1)] = (1));

return statearr_14206;
});
var cljs$core$async$reduce_$_state_machine__13608__auto____1 = (function (state_14190){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_14190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e14207){if((e14207 instanceof Object)){
var ex__13611__auto__ = e14207;
var statearr_14208_14220 = state_14190;
(statearr_14208_14220[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14221 = state_14190;
state_14190 = G__14221;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13608__auto__ = function(state_14190){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13608__auto____1.call(this,state_14190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13608__auto____0;
cljs$core$async$reduce_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13608__auto____1;
return cljs$core$async$reduce_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_14209 = f__13705__auto__.call(null);
(statearr_14209[(6)] = c__13704__auto__);

return statearr_14209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_14227){
var state_val_14228 = (state_14227[(1)]);
if((state_val_14228 === (1))){
var inst_14222 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_14227__$1 = state_14227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14227__$1,(2),inst_14222);
} else {
if((state_val_14228 === (2))){
var inst_14224 = (state_14227[(2)]);
var inst_14225 = f__$1.call(null,inst_14224);
var state_14227__$1 = state_14227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14227__$1,inst_14225);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13608__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13608__auto____0 = (function (){
var statearr_14229 = [null,null,null,null,null,null,null];
(statearr_14229[(0)] = cljs$core$async$transduce_$_state_machine__13608__auto__);

(statearr_14229[(1)] = (1));

return statearr_14229;
});
var cljs$core$async$transduce_$_state_machine__13608__auto____1 = (function (state_14227){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_14227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e14230){if((e14230 instanceof Object)){
var ex__13611__auto__ = e14230;
var statearr_14231_14233 = state_14227;
(statearr_14231_14233[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14234 = state_14227;
state_14227 = G__14234;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13608__auto__ = function(state_14227){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13608__auto____1.call(this,state_14227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13608__auto____0;
cljs$core$async$transduce_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13608__auto____1;
return cljs$core$async$transduce_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_14232 = f__13705__auto__.call(null);
(statearr_14232[(6)] = c__13704__auto__);

return statearr_14232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
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
var G__14236 = arguments.length;
switch (G__14236) {
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
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_14261){
var state_val_14262 = (state_14261[(1)]);
if((state_val_14262 === (7))){
var inst_14243 = (state_14261[(2)]);
var state_14261__$1 = state_14261;
var statearr_14263_14284 = state_14261__$1;
(statearr_14263_14284[(2)] = inst_14243);

(statearr_14263_14284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (1))){
var inst_14237 = cljs.core.seq.call(null,coll);
var inst_14238 = inst_14237;
var state_14261__$1 = (function (){var statearr_14264 = state_14261;
(statearr_14264[(7)] = inst_14238);

return statearr_14264;
})();
var statearr_14265_14285 = state_14261__$1;
(statearr_14265_14285[(2)] = null);

(statearr_14265_14285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (4))){
var inst_14238 = (state_14261[(7)]);
var inst_14241 = cljs.core.first.call(null,inst_14238);
var state_14261__$1 = state_14261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14261__$1,(7),ch,inst_14241);
} else {
if((state_val_14262 === (13))){
var inst_14255 = (state_14261[(2)]);
var state_14261__$1 = state_14261;
var statearr_14266_14286 = state_14261__$1;
(statearr_14266_14286[(2)] = inst_14255);

(statearr_14266_14286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (6))){
var inst_14246 = (state_14261[(2)]);
var state_14261__$1 = state_14261;
if(cljs.core.truth_(inst_14246)){
var statearr_14267_14287 = state_14261__$1;
(statearr_14267_14287[(1)] = (8));

} else {
var statearr_14268_14288 = state_14261__$1;
(statearr_14268_14288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (3))){
var inst_14259 = (state_14261[(2)]);
var state_14261__$1 = state_14261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14261__$1,inst_14259);
} else {
if((state_val_14262 === (12))){
var state_14261__$1 = state_14261;
var statearr_14269_14289 = state_14261__$1;
(statearr_14269_14289[(2)] = null);

(statearr_14269_14289[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (2))){
var inst_14238 = (state_14261[(7)]);
var state_14261__$1 = state_14261;
if(cljs.core.truth_(inst_14238)){
var statearr_14270_14290 = state_14261__$1;
(statearr_14270_14290[(1)] = (4));

} else {
var statearr_14271_14291 = state_14261__$1;
(statearr_14271_14291[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (11))){
var inst_14252 = cljs.core.async.close_BANG_.call(null,ch);
var state_14261__$1 = state_14261;
var statearr_14272_14292 = state_14261__$1;
(statearr_14272_14292[(2)] = inst_14252);

(statearr_14272_14292[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (9))){
var state_14261__$1 = state_14261;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14273_14293 = state_14261__$1;
(statearr_14273_14293[(1)] = (11));

} else {
var statearr_14274_14294 = state_14261__$1;
(statearr_14274_14294[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (5))){
var inst_14238 = (state_14261[(7)]);
var state_14261__$1 = state_14261;
var statearr_14275_14295 = state_14261__$1;
(statearr_14275_14295[(2)] = inst_14238);

(statearr_14275_14295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (10))){
var inst_14257 = (state_14261[(2)]);
var state_14261__$1 = state_14261;
var statearr_14276_14296 = state_14261__$1;
(statearr_14276_14296[(2)] = inst_14257);

(statearr_14276_14296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14262 === (8))){
var inst_14238 = (state_14261[(7)]);
var inst_14248 = cljs.core.next.call(null,inst_14238);
var inst_14238__$1 = inst_14248;
var state_14261__$1 = (function (){var statearr_14277 = state_14261;
(statearr_14277[(7)] = inst_14238__$1);

return statearr_14277;
})();
var statearr_14278_14297 = state_14261__$1;
(statearr_14278_14297[(2)] = null);

(statearr_14278_14297[(1)] = (2));


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
var cljs$core$async$state_machine__13608__auto__ = null;
var cljs$core$async$state_machine__13608__auto____0 = (function (){
var statearr_14279 = [null,null,null,null,null,null,null,null];
(statearr_14279[(0)] = cljs$core$async$state_machine__13608__auto__);

(statearr_14279[(1)] = (1));

return statearr_14279;
});
var cljs$core$async$state_machine__13608__auto____1 = (function (state_14261){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_14261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e14280){if((e14280 instanceof Object)){
var ex__13611__auto__ = e14280;
var statearr_14281_14298 = state_14261;
(statearr_14281_14298[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14299 = state_14261;
state_14261 = G__14299;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$state_machine__13608__auto__ = function(state_14261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13608__auto____1.call(this,state_14261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13608__auto____0;
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13608__auto____1;
return cljs$core$async$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_14282 = f__13705__auto__.call(null);
(statearr_14282[(6)] = c__13704__auto__);

return statearr_14282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_14300 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_14300.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_14301 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_14301.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_14302 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_14302.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_14303 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_14303.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14304 = (function (ch,cs,meta14305){
this.ch = ch;
this.cs = cs;
this.meta14305 = meta14305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14306,meta14305__$1){
var self__ = this;
var _14306__$1 = this;
return (new cljs.core.async.t_cljs$core$async14304(self__.ch,self__.cs,meta14305__$1));
}));

(cljs.core.async.t_cljs$core$async14304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14306){
var self__ = this;
var _14306__$1 = this;
return self__.meta14305;
}));

(cljs.core.async.t_cljs$core$async14304.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14304.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14304.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14304.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14304.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14304.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14305","meta14305",-1554499690,null)], null);
}));

(cljs.core.async.t_cljs$core$async14304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14304");

(cljs.core.async.t_cljs$core$async14304.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async14304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14304.
 */
cljs.core.async.__GT_t_cljs$core$async14304 = (function cljs$core$async$mult_$___GT_t_cljs$core$async14304(ch__$1,cs__$1,meta14305){
return (new cljs.core.async.t_cljs$core$async14304(ch__$1,cs__$1,meta14305));
});

}

return (new cljs.core.async.t_cljs$core$async14304(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13704__auto___14526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_14441){
var state_val_14442 = (state_14441[(1)]);
if((state_val_14442 === (7))){
var inst_14437 = (state_14441[(2)]);
var state_14441__$1 = state_14441;
var statearr_14443_14527 = state_14441__$1;
(statearr_14443_14527[(2)] = inst_14437);

(statearr_14443_14527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (20))){
var inst_14340 = (state_14441[(7)]);
var inst_14352 = cljs.core.first.call(null,inst_14340);
var inst_14353 = cljs.core.nth.call(null,inst_14352,(0),null);
var inst_14354 = cljs.core.nth.call(null,inst_14352,(1),null);
var state_14441__$1 = (function (){var statearr_14444 = state_14441;
(statearr_14444[(8)] = inst_14353);

return statearr_14444;
})();
if(cljs.core.truth_(inst_14354)){
var statearr_14445_14528 = state_14441__$1;
(statearr_14445_14528[(1)] = (22));

} else {
var statearr_14446_14529 = state_14441__$1;
(statearr_14446_14529[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (27))){
var inst_14382 = (state_14441[(9)]);
var inst_14389 = (state_14441[(10)]);
var inst_14384 = (state_14441[(11)]);
var inst_14309 = (state_14441[(12)]);
var inst_14389__$1 = cljs.core._nth.call(null,inst_14382,inst_14384);
var inst_14390 = cljs.core.async.put_BANG_.call(null,inst_14389__$1,inst_14309,done);
var state_14441__$1 = (function (){var statearr_14447 = state_14441;
(statearr_14447[(10)] = inst_14389__$1);

return statearr_14447;
})();
if(cljs.core.truth_(inst_14390)){
var statearr_14448_14530 = state_14441__$1;
(statearr_14448_14530[(1)] = (30));

} else {
var statearr_14449_14531 = state_14441__$1;
(statearr_14449_14531[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (1))){
var state_14441__$1 = state_14441;
var statearr_14450_14532 = state_14441__$1;
(statearr_14450_14532[(2)] = null);

(statearr_14450_14532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (24))){
var inst_14340 = (state_14441[(7)]);
var inst_14359 = (state_14441[(2)]);
var inst_14360 = cljs.core.next.call(null,inst_14340);
var inst_14318 = inst_14360;
var inst_14319 = null;
var inst_14320 = (0);
var inst_14321 = (0);
var state_14441__$1 = (function (){var statearr_14451 = state_14441;
(statearr_14451[(13)] = inst_14320);

(statearr_14451[(14)] = inst_14319);

(statearr_14451[(15)] = inst_14321);

(statearr_14451[(16)] = inst_14359);

(statearr_14451[(17)] = inst_14318);

return statearr_14451;
})();
var statearr_14452_14533 = state_14441__$1;
(statearr_14452_14533[(2)] = null);

(statearr_14452_14533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (39))){
var state_14441__$1 = state_14441;
var statearr_14456_14534 = state_14441__$1;
(statearr_14456_14534[(2)] = null);

(statearr_14456_14534[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (4))){
var inst_14309 = (state_14441[(12)]);
var inst_14309__$1 = (state_14441[(2)]);
var inst_14310 = (inst_14309__$1 == null);
var state_14441__$1 = (function (){var statearr_14457 = state_14441;
(statearr_14457[(12)] = inst_14309__$1);

return statearr_14457;
})();
if(cljs.core.truth_(inst_14310)){
var statearr_14458_14535 = state_14441__$1;
(statearr_14458_14535[(1)] = (5));

} else {
var statearr_14459_14536 = state_14441__$1;
(statearr_14459_14536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (15))){
var inst_14320 = (state_14441[(13)]);
var inst_14319 = (state_14441[(14)]);
var inst_14321 = (state_14441[(15)]);
var inst_14318 = (state_14441[(17)]);
var inst_14336 = (state_14441[(2)]);
var inst_14337 = (inst_14321 + (1));
var tmp14453 = inst_14320;
var tmp14454 = inst_14319;
var tmp14455 = inst_14318;
var inst_14318__$1 = tmp14455;
var inst_14319__$1 = tmp14454;
var inst_14320__$1 = tmp14453;
var inst_14321__$1 = inst_14337;
var state_14441__$1 = (function (){var statearr_14460 = state_14441;
(statearr_14460[(13)] = inst_14320__$1);

(statearr_14460[(14)] = inst_14319__$1);

(statearr_14460[(15)] = inst_14321__$1);

(statearr_14460[(18)] = inst_14336);

(statearr_14460[(17)] = inst_14318__$1);

return statearr_14460;
})();
var statearr_14461_14537 = state_14441__$1;
(statearr_14461_14537[(2)] = null);

(statearr_14461_14537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (21))){
var inst_14363 = (state_14441[(2)]);
var state_14441__$1 = state_14441;
var statearr_14465_14538 = state_14441__$1;
(statearr_14465_14538[(2)] = inst_14363);

(statearr_14465_14538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (31))){
var inst_14389 = (state_14441[(10)]);
var inst_14393 = done.call(null,null);
var inst_14394 = cljs.core.async.untap_STAR_.call(null,m,inst_14389);
var state_14441__$1 = (function (){var statearr_14466 = state_14441;
(statearr_14466[(19)] = inst_14393);

return statearr_14466;
})();
var statearr_14467_14539 = state_14441__$1;
(statearr_14467_14539[(2)] = inst_14394);

(statearr_14467_14539[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (32))){
var inst_14382 = (state_14441[(9)]);
var inst_14383 = (state_14441[(20)]);
var inst_14384 = (state_14441[(11)]);
var inst_14381 = (state_14441[(21)]);
var inst_14396 = (state_14441[(2)]);
var inst_14397 = (inst_14384 + (1));
var tmp14462 = inst_14382;
var tmp14463 = inst_14383;
var tmp14464 = inst_14381;
var inst_14381__$1 = tmp14464;
var inst_14382__$1 = tmp14462;
var inst_14383__$1 = tmp14463;
var inst_14384__$1 = inst_14397;
var state_14441__$1 = (function (){var statearr_14468 = state_14441;
(statearr_14468[(9)] = inst_14382__$1);

(statearr_14468[(22)] = inst_14396);

(statearr_14468[(20)] = inst_14383__$1);

(statearr_14468[(11)] = inst_14384__$1);

(statearr_14468[(21)] = inst_14381__$1);

return statearr_14468;
})();
var statearr_14469_14540 = state_14441__$1;
(statearr_14469_14540[(2)] = null);

(statearr_14469_14540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (40))){
var inst_14409 = (state_14441[(23)]);
var inst_14413 = done.call(null,null);
var inst_14414 = cljs.core.async.untap_STAR_.call(null,m,inst_14409);
var state_14441__$1 = (function (){var statearr_14470 = state_14441;
(statearr_14470[(24)] = inst_14413);

return statearr_14470;
})();
var statearr_14471_14541 = state_14441__$1;
(statearr_14471_14541[(2)] = inst_14414);

(statearr_14471_14541[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (33))){
var inst_14400 = (state_14441[(25)]);
var inst_14402 = cljs.core.chunked_seq_QMARK_.call(null,inst_14400);
var state_14441__$1 = state_14441;
if(inst_14402){
var statearr_14472_14542 = state_14441__$1;
(statearr_14472_14542[(1)] = (36));

} else {
var statearr_14473_14543 = state_14441__$1;
(statearr_14473_14543[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (13))){
var inst_14330 = (state_14441[(26)]);
var inst_14333 = cljs.core.async.close_BANG_.call(null,inst_14330);
var state_14441__$1 = state_14441;
var statearr_14474_14544 = state_14441__$1;
(statearr_14474_14544[(2)] = inst_14333);

(statearr_14474_14544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (22))){
var inst_14353 = (state_14441[(8)]);
var inst_14356 = cljs.core.async.close_BANG_.call(null,inst_14353);
var state_14441__$1 = state_14441;
var statearr_14475_14545 = state_14441__$1;
(statearr_14475_14545[(2)] = inst_14356);

(statearr_14475_14545[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (36))){
var inst_14400 = (state_14441[(25)]);
var inst_14404 = cljs.core.chunk_first.call(null,inst_14400);
var inst_14405 = cljs.core.chunk_rest.call(null,inst_14400);
var inst_14406 = cljs.core.count.call(null,inst_14404);
var inst_14381 = inst_14405;
var inst_14382 = inst_14404;
var inst_14383 = inst_14406;
var inst_14384 = (0);
var state_14441__$1 = (function (){var statearr_14476 = state_14441;
(statearr_14476[(9)] = inst_14382);

(statearr_14476[(20)] = inst_14383);

(statearr_14476[(11)] = inst_14384);

(statearr_14476[(21)] = inst_14381);

return statearr_14476;
})();
var statearr_14477_14546 = state_14441__$1;
(statearr_14477_14546[(2)] = null);

(statearr_14477_14546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (41))){
var inst_14400 = (state_14441[(25)]);
var inst_14416 = (state_14441[(2)]);
var inst_14417 = cljs.core.next.call(null,inst_14400);
var inst_14381 = inst_14417;
var inst_14382 = null;
var inst_14383 = (0);
var inst_14384 = (0);
var state_14441__$1 = (function (){var statearr_14478 = state_14441;
(statearr_14478[(9)] = inst_14382);

(statearr_14478[(20)] = inst_14383);

(statearr_14478[(11)] = inst_14384);

(statearr_14478[(27)] = inst_14416);

(statearr_14478[(21)] = inst_14381);

return statearr_14478;
})();
var statearr_14479_14547 = state_14441__$1;
(statearr_14479_14547[(2)] = null);

(statearr_14479_14547[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (43))){
var state_14441__$1 = state_14441;
var statearr_14480_14548 = state_14441__$1;
(statearr_14480_14548[(2)] = null);

(statearr_14480_14548[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (29))){
var inst_14425 = (state_14441[(2)]);
var state_14441__$1 = state_14441;
var statearr_14481_14549 = state_14441__$1;
(statearr_14481_14549[(2)] = inst_14425);

(statearr_14481_14549[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (44))){
var inst_14434 = (state_14441[(2)]);
var state_14441__$1 = (function (){var statearr_14482 = state_14441;
(statearr_14482[(28)] = inst_14434);

return statearr_14482;
})();
var statearr_14483_14550 = state_14441__$1;
(statearr_14483_14550[(2)] = null);

(statearr_14483_14550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (6))){
var inst_14373 = (state_14441[(29)]);
var inst_14372 = cljs.core.deref.call(null,cs);
var inst_14373__$1 = cljs.core.keys.call(null,inst_14372);
var inst_14374 = cljs.core.count.call(null,inst_14373__$1);
var inst_14375 = cljs.core.reset_BANG_.call(null,dctr,inst_14374);
var inst_14380 = cljs.core.seq.call(null,inst_14373__$1);
var inst_14381 = inst_14380;
var inst_14382 = null;
var inst_14383 = (0);
var inst_14384 = (0);
var state_14441__$1 = (function (){var statearr_14484 = state_14441;
(statearr_14484[(9)] = inst_14382);

(statearr_14484[(29)] = inst_14373__$1);

(statearr_14484[(20)] = inst_14383);

(statearr_14484[(11)] = inst_14384);

(statearr_14484[(21)] = inst_14381);

(statearr_14484[(30)] = inst_14375);

return statearr_14484;
})();
var statearr_14485_14551 = state_14441__$1;
(statearr_14485_14551[(2)] = null);

(statearr_14485_14551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (28))){
var inst_14400 = (state_14441[(25)]);
var inst_14381 = (state_14441[(21)]);
var inst_14400__$1 = cljs.core.seq.call(null,inst_14381);
var state_14441__$1 = (function (){var statearr_14486 = state_14441;
(statearr_14486[(25)] = inst_14400__$1);

return statearr_14486;
})();
if(inst_14400__$1){
var statearr_14487_14552 = state_14441__$1;
(statearr_14487_14552[(1)] = (33));

} else {
var statearr_14488_14553 = state_14441__$1;
(statearr_14488_14553[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (25))){
var inst_14383 = (state_14441[(20)]);
var inst_14384 = (state_14441[(11)]);
var inst_14386 = (inst_14384 < inst_14383);
var inst_14387 = inst_14386;
var state_14441__$1 = state_14441;
if(cljs.core.truth_(inst_14387)){
var statearr_14489_14554 = state_14441__$1;
(statearr_14489_14554[(1)] = (27));

} else {
var statearr_14490_14555 = state_14441__$1;
(statearr_14490_14555[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (34))){
var state_14441__$1 = state_14441;
var statearr_14491_14556 = state_14441__$1;
(statearr_14491_14556[(2)] = null);

(statearr_14491_14556[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (17))){
var state_14441__$1 = state_14441;
var statearr_14492_14557 = state_14441__$1;
(statearr_14492_14557[(2)] = null);

(statearr_14492_14557[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (3))){
var inst_14439 = (state_14441[(2)]);
var state_14441__$1 = state_14441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14441__$1,inst_14439);
} else {
if((state_val_14442 === (12))){
var inst_14368 = (state_14441[(2)]);
var state_14441__$1 = state_14441;
var statearr_14493_14558 = state_14441__$1;
(statearr_14493_14558[(2)] = inst_14368);

(statearr_14493_14558[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (2))){
var state_14441__$1 = state_14441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14441__$1,(4),ch);
} else {
if((state_val_14442 === (23))){
var state_14441__$1 = state_14441;
var statearr_14494_14559 = state_14441__$1;
(statearr_14494_14559[(2)] = null);

(statearr_14494_14559[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (35))){
var inst_14423 = (state_14441[(2)]);
var state_14441__$1 = state_14441;
var statearr_14495_14560 = state_14441__$1;
(statearr_14495_14560[(2)] = inst_14423);

(statearr_14495_14560[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (19))){
var inst_14340 = (state_14441[(7)]);
var inst_14344 = cljs.core.chunk_first.call(null,inst_14340);
var inst_14345 = cljs.core.chunk_rest.call(null,inst_14340);
var inst_14346 = cljs.core.count.call(null,inst_14344);
var inst_14318 = inst_14345;
var inst_14319 = inst_14344;
var inst_14320 = inst_14346;
var inst_14321 = (0);
var state_14441__$1 = (function (){var statearr_14496 = state_14441;
(statearr_14496[(13)] = inst_14320);

(statearr_14496[(14)] = inst_14319);

(statearr_14496[(15)] = inst_14321);

(statearr_14496[(17)] = inst_14318);

return statearr_14496;
})();
var statearr_14497_14561 = state_14441__$1;
(statearr_14497_14561[(2)] = null);

(statearr_14497_14561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (11))){
var inst_14340 = (state_14441[(7)]);
var inst_14318 = (state_14441[(17)]);
var inst_14340__$1 = cljs.core.seq.call(null,inst_14318);
var state_14441__$1 = (function (){var statearr_14498 = state_14441;
(statearr_14498[(7)] = inst_14340__$1);

return statearr_14498;
})();
if(inst_14340__$1){
var statearr_14499_14562 = state_14441__$1;
(statearr_14499_14562[(1)] = (16));

} else {
var statearr_14500_14563 = state_14441__$1;
(statearr_14500_14563[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (9))){
var inst_14370 = (state_14441[(2)]);
var state_14441__$1 = state_14441;
var statearr_14501_14564 = state_14441__$1;
(statearr_14501_14564[(2)] = inst_14370);

(statearr_14501_14564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (5))){
var inst_14316 = cljs.core.deref.call(null,cs);
var inst_14317 = cljs.core.seq.call(null,inst_14316);
var inst_14318 = inst_14317;
var inst_14319 = null;
var inst_14320 = (0);
var inst_14321 = (0);
var state_14441__$1 = (function (){var statearr_14502 = state_14441;
(statearr_14502[(13)] = inst_14320);

(statearr_14502[(14)] = inst_14319);

(statearr_14502[(15)] = inst_14321);

(statearr_14502[(17)] = inst_14318);

return statearr_14502;
})();
var statearr_14503_14565 = state_14441__$1;
(statearr_14503_14565[(2)] = null);

(statearr_14503_14565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (14))){
var state_14441__$1 = state_14441;
var statearr_14504_14566 = state_14441__$1;
(statearr_14504_14566[(2)] = null);

(statearr_14504_14566[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (45))){
var inst_14431 = (state_14441[(2)]);
var state_14441__$1 = state_14441;
var statearr_14505_14567 = state_14441__$1;
(statearr_14505_14567[(2)] = inst_14431);

(statearr_14505_14567[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (26))){
var inst_14373 = (state_14441[(29)]);
var inst_14427 = (state_14441[(2)]);
var inst_14428 = cljs.core.seq.call(null,inst_14373);
var state_14441__$1 = (function (){var statearr_14506 = state_14441;
(statearr_14506[(31)] = inst_14427);

return statearr_14506;
})();
if(inst_14428){
var statearr_14507_14568 = state_14441__$1;
(statearr_14507_14568[(1)] = (42));

} else {
var statearr_14508_14569 = state_14441__$1;
(statearr_14508_14569[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (16))){
var inst_14340 = (state_14441[(7)]);
var inst_14342 = cljs.core.chunked_seq_QMARK_.call(null,inst_14340);
var state_14441__$1 = state_14441;
if(inst_14342){
var statearr_14509_14570 = state_14441__$1;
(statearr_14509_14570[(1)] = (19));

} else {
var statearr_14510_14571 = state_14441__$1;
(statearr_14510_14571[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (38))){
var inst_14420 = (state_14441[(2)]);
var state_14441__$1 = state_14441;
var statearr_14511_14572 = state_14441__$1;
(statearr_14511_14572[(2)] = inst_14420);

(statearr_14511_14572[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (30))){
var state_14441__$1 = state_14441;
var statearr_14512_14573 = state_14441__$1;
(statearr_14512_14573[(2)] = null);

(statearr_14512_14573[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (10))){
var inst_14319 = (state_14441[(14)]);
var inst_14321 = (state_14441[(15)]);
var inst_14329 = cljs.core._nth.call(null,inst_14319,inst_14321);
var inst_14330 = cljs.core.nth.call(null,inst_14329,(0),null);
var inst_14331 = cljs.core.nth.call(null,inst_14329,(1),null);
var state_14441__$1 = (function (){var statearr_14513 = state_14441;
(statearr_14513[(26)] = inst_14330);

return statearr_14513;
})();
if(cljs.core.truth_(inst_14331)){
var statearr_14514_14574 = state_14441__$1;
(statearr_14514_14574[(1)] = (13));

} else {
var statearr_14515_14575 = state_14441__$1;
(statearr_14515_14575[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (18))){
var inst_14366 = (state_14441[(2)]);
var state_14441__$1 = state_14441;
var statearr_14516_14576 = state_14441__$1;
(statearr_14516_14576[(2)] = inst_14366);

(statearr_14516_14576[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (42))){
var state_14441__$1 = state_14441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14441__$1,(45),dchan);
} else {
if((state_val_14442 === (37))){
var inst_14409 = (state_14441[(23)]);
var inst_14400 = (state_14441[(25)]);
var inst_14309 = (state_14441[(12)]);
var inst_14409__$1 = cljs.core.first.call(null,inst_14400);
var inst_14410 = cljs.core.async.put_BANG_.call(null,inst_14409__$1,inst_14309,done);
var state_14441__$1 = (function (){var statearr_14517 = state_14441;
(statearr_14517[(23)] = inst_14409__$1);

return statearr_14517;
})();
if(cljs.core.truth_(inst_14410)){
var statearr_14518_14577 = state_14441__$1;
(statearr_14518_14577[(1)] = (39));

} else {
var statearr_14519_14578 = state_14441__$1;
(statearr_14519_14578[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14442 === (8))){
var inst_14320 = (state_14441[(13)]);
var inst_14321 = (state_14441[(15)]);
var inst_14323 = (inst_14321 < inst_14320);
var inst_14324 = inst_14323;
var state_14441__$1 = state_14441;
if(cljs.core.truth_(inst_14324)){
var statearr_14520_14579 = state_14441__$1;
(statearr_14520_14579[(1)] = (10));

} else {
var statearr_14521_14580 = state_14441__$1;
(statearr_14521_14580[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__13608__auto__ = null;
var cljs$core$async$mult_$_state_machine__13608__auto____0 = (function (){
var statearr_14522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14522[(0)] = cljs$core$async$mult_$_state_machine__13608__auto__);

(statearr_14522[(1)] = (1));

return statearr_14522;
});
var cljs$core$async$mult_$_state_machine__13608__auto____1 = (function (state_14441){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_14441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e14523){if((e14523 instanceof Object)){
var ex__13611__auto__ = e14523;
var statearr_14524_14581 = state_14441;
(statearr_14524_14581[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14582 = state_14441;
state_14441 = G__14582;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13608__auto__ = function(state_14441){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13608__auto____1.call(this,state_14441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13608__auto____0;
cljs$core$async$mult_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13608__auto____1;
return cljs$core$async$mult_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_14525 = f__13705__auto__.call(null);
(statearr_14525[(6)] = c__13704__auto___14526);

return statearr_14525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
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
var G__14584 = arguments.length;
switch (G__14584) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_14586 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_14586.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_14587 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_14587.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_14588 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_14588.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_14589 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_14589.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_14590 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_14590.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___14600 = arguments.length;
var i__5767__auto___14601 = (0);
while(true){
if((i__5767__auto___14601 < len__5766__auto___14600)){
args__5772__auto__.push((arguments[i__5767__auto___14601]));

var G__14602 = (i__5767__auto___14601 + (1));
i__5767__auto___14601 = G__14602;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14595){
var map__14596 = p__14595;
var map__14596__$1 = cljs.core.__destructure_map.call(null,map__14596);
var opts = map__14596__$1;
var statearr_14597_14603 = state;
(statearr_14597_14603[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_14598_14604 = state;
(statearr_14598_14604[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_14599_14605 = state;
(statearr_14599_14605[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14591){
var G__14592 = cljs.core.first.call(null,seq14591);
var seq14591__$1 = cljs.core.next.call(null,seq14591);
var G__14593 = cljs.core.first.call(null,seq14591__$1);
var seq14591__$2 = cljs.core.next.call(null,seq14591__$1);
var G__14594 = cljs.core.first.call(null,seq14591__$2);
var seq14591__$3 = cljs.core.next.call(null,seq14591__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14592,G__14593,G__14594,seq14591__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14606 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14606 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14607){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14607 = meta14607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14608,meta14607__$1){
var self__ = this;
var _14608__$1 = this;
return (new cljs.core.async.t_cljs$core$async14606(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14607__$1));
}));

(cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14608){
var self__ = this;
var _14608__$1 = this;
return self__.meta14607;
}));

(cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14606.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14607","meta14607",-703908073,null)], null);
}));

(cljs.core.async.t_cljs$core$async14606.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14606");

(cljs.core.async.t_cljs$core$async14606.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async14606");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14606.
 */
cljs.core.async.__GT_t_cljs$core$async14606 = (function cljs$core$async$mix_$___GT_t_cljs$core$async14606(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14607){
return (new cljs.core.async.t_cljs$core$async14606(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14607));
});

}

return (new cljs.core.async.t_cljs$core$async14606(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13704__auto___14720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_14676){
var state_val_14677 = (state_14676[(1)]);
if((state_val_14677 === (7))){
var inst_14636 = (state_14676[(2)]);
var state_14676__$1 = state_14676;
if(cljs.core.truth_(inst_14636)){
var statearr_14678_14721 = state_14676__$1;
(statearr_14678_14721[(1)] = (8));

} else {
var statearr_14679_14722 = state_14676__$1;
(statearr_14679_14722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (20))){
var inst_14629 = (state_14676[(7)]);
var state_14676__$1 = state_14676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14676__$1,(23),out,inst_14629);
} else {
if((state_val_14677 === (1))){
var inst_14612 = calc_state.call(null);
var inst_14613 = cljs.core.__destructure_map.call(null,inst_14612);
var inst_14614 = cljs.core.get.call(null,inst_14613,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14615 = cljs.core.get.call(null,inst_14613,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14616 = cljs.core.get.call(null,inst_14613,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14617 = inst_14612;
var state_14676__$1 = (function (){var statearr_14680 = state_14676;
(statearr_14680[(8)] = inst_14614);

(statearr_14680[(9)] = inst_14617);

(statearr_14680[(10)] = inst_14615);

(statearr_14680[(11)] = inst_14616);

return statearr_14680;
})();
var statearr_14681_14723 = state_14676__$1;
(statearr_14681_14723[(2)] = null);

(statearr_14681_14723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (24))){
var inst_14620 = (state_14676[(12)]);
var inst_14617 = inst_14620;
var state_14676__$1 = (function (){var statearr_14682 = state_14676;
(statearr_14682[(9)] = inst_14617);

return statearr_14682;
})();
var statearr_14683_14724 = state_14676__$1;
(statearr_14683_14724[(2)] = null);

(statearr_14683_14724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (4))){
var inst_14629 = (state_14676[(7)]);
var inst_14631 = (state_14676[(13)]);
var inst_14628 = (state_14676[(2)]);
var inst_14629__$1 = cljs.core.nth.call(null,inst_14628,(0),null);
var inst_14630 = cljs.core.nth.call(null,inst_14628,(1),null);
var inst_14631__$1 = (inst_14629__$1 == null);
var state_14676__$1 = (function (){var statearr_14684 = state_14676;
(statearr_14684[(7)] = inst_14629__$1);

(statearr_14684[(14)] = inst_14630);

(statearr_14684[(13)] = inst_14631__$1);

return statearr_14684;
})();
if(cljs.core.truth_(inst_14631__$1)){
var statearr_14685_14725 = state_14676__$1;
(statearr_14685_14725[(1)] = (5));

} else {
var statearr_14686_14726 = state_14676__$1;
(statearr_14686_14726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (15))){
var inst_14650 = (state_14676[(15)]);
var inst_14621 = (state_14676[(16)]);
var inst_14650__$1 = cljs.core.empty_QMARK_.call(null,inst_14621);
var state_14676__$1 = (function (){var statearr_14687 = state_14676;
(statearr_14687[(15)] = inst_14650__$1);

return statearr_14687;
})();
if(inst_14650__$1){
var statearr_14688_14727 = state_14676__$1;
(statearr_14688_14727[(1)] = (17));

} else {
var statearr_14689_14728 = state_14676__$1;
(statearr_14689_14728[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (21))){
var inst_14620 = (state_14676[(12)]);
var inst_14617 = inst_14620;
var state_14676__$1 = (function (){var statearr_14690 = state_14676;
(statearr_14690[(9)] = inst_14617);

return statearr_14690;
})();
var statearr_14691_14729 = state_14676__$1;
(statearr_14691_14729[(2)] = null);

(statearr_14691_14729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (13))){
var inst_14643 = (state_14676[(2)]);
var inst_14644 = calc_state.call(null);
var inst_14617 = inst_14644;
var state_14676__$1 = (function (){var statearr_14692 = state_14676;
(statearr_14692[(17)] = inst_14643);

(statearr_14692[(9)] = inst_14617);

return statearr_14692;
})();
var statearr_14693_14730 = state_14676__$1;
(statearr_14693_14730[(2)] = null);

(statearr_14693_14730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (22))){
var inst_14670 = (state_14676[(2)]);
var state_14676__$1 = state_14676;
var statearr_14694_14731 = state_14676__$1;
(statearr_14694_14731[(2)] = inst_14670);

(statearr_14694_14731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (6))){
var inst_14630 = (state_14676[(14)]);
var inst_14634 = cljs.core._EQ_.call(null,inst_14630,change);
var state_14676__$1 = state_14676;
var statearr_14695_14732 = state_14676__$1;
(statearr_14695_14732[(2)] = inst_14634);

(statearr_14695_14732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (25))){
var state_14676__$1 = state_14676;
var statearr_14696_14733 = state_14676__$1;
(statearr_14696_14733[(2)] = null);

(statearr_14696_14733[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (17))){
var inst_14622 = (state_14676[(18)]);
var inst_14630 = (state_14676[(14)]);
var inst_14652 = inst_14622.call(null,inst_14630);
var inst_14653 = cljs.core.not.call(null,inst_14652);
var state_14676__$1 = state_14676;
var statearr_14697_14734 = state_14676__$1;
(statearr_14697_14734[(2)] = inst_14653);

(statearr_14697_14734[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (3))){
var inst_14674 = (state_14676[(2)]);
var state_14676__$1 = state_14676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14676__$1,inst_14674);
} else {
if((state_val_14677 === (12))){
var state_14676__$1 = state_14676;
var statearr_14698_14735 = state_14676__$1;
(statearr_14698_14735[(2)] = null);

(statearr_14698_14735[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (2))){
var inst_14617 = (state_14676[(9)]);
var inst_14620 = (state_14676[(12)]);
var inst_14620__$1 = cljs.core.__destructure_map.call(null,inst_14617);
var inst_14621 = cljs.core.get.call(null,inst_14620__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14622 = cljs.core.get.call(null,inst_14620__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14623 = cljs.core.get.call(null,inst_14620__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14676__$1 = (function (){var statearr_14699 = state_14676;
(statearr_14699[(18)] = inst_14622);

(statearr_14699[(16)] = inst_14621);

(statearr_14699[(12)] = inst_14620__$1);

return statearr_14699;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14676__$1,(4),inst_14623);
} else {
if((state_val_14677 === (23))){
var inst_14661 = (state_14676[(2)]);
var state_14676__$1 = state_14676;
if(cljs.core.truth_(inst_14661)){
var statearr_14700_14736 = state_14676__$1;
(statearr_14700_14736[(1)] = (24));

} else {
var statearr_14701_14737 = state_14676__$1;
(statearr_14701_14737[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (19))){
var inst_14656 = (state_14676[(2)]);
var state_14676__$1 = state_14676;
var statearr_14702_14738 = state_14676__$1;
(statearr_14702_14738[(2)] = inst_14656);

(statearr_14702_14738[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (11))){
var inst_14630 = (state_14676[(14)]);
var inst_14640 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14630);
var state_14676__$1 = state_14676;
var statearr_14703_14739 = state_14676__$1;
(statearr_14703_14739[(2)] = inst_14640);

(statearr_14703_14739[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (9))){
var inst_14630 = (state_14676[(14)]);
var inst_14647 = (state_14676[(19)]);
var inst_14621 = (state_14676[(16)]);
var inst_14647__$1 = inst_14621.call(null,inst_14630);
var state_14676__$1 = (function (){var statearr_14704 = state_14676;
(statearr_14704[(19)] = inst_14647__$1);

return statearr_14704;
})();
if(cljs.core.truth_(inst_14647__$1)){
var statearr_14705_14740 = state_14676__$1;
(statearr_14705_14740[(1)] = (14));

} else {
var statearr_14706_14741 = state_14676__$1;
(statearr_14706_14741[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (5))){
var inst_14631 = (state_14676[(13)]);
var state_14676__$1 = state_14676;
var statearr_14707_14742 = state_14676__$1;
(statearr_14707_14742[(2)] = inst_14631);

(statearr_14707_14742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (14))){
var inst_14647 = (state_14676[(19)]);
var state_14676__$1 = state_14676;
var statearr_14708_14743 = state_14676__$1;
(statearr_14708_14743[(2)] = inst_14647);

(statearr_14708_14743[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (26))){
var inst_14666 = (state_14676[(2)]);
var state_14676__$1 = state_14676;
var statearr_14709_14744 = state_14676__$1;
(statearr_14709_14744[(2)] = inst_14666);

(statearr_14709_14744[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (16))){
var inst_14658 = (state_14676[(2)]);
var state_14676__$1 = state_14676;
if(cljs.core.truth_(inst_14658)){
var statearr_14710_14745 = state_14676__$1;
(statearr_14710_14745[(1)] = (20));

} else {
var statearr_14711_14746 = state_14676__$1;
(statearr_14711_14746[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (10))){
var inst_14672 = (state_14676[(2)]);
var state_14676__$1 = state_14676;
var statearr_14712_14747 = state_14676__$1;
(statearr_14712_14747[(2)] = inst_14672);

(statearr_14712_14747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (18))){
var inst_14650 = (state_14676[(15)]);
var state_14676__$1 = state_14676;
var statearr_14713_14748 = state_14676__$1;
(statearr_14713_14748[(2)] = inst_14650);

(statearr_14713_14748[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14677 === (8))){
var inst_14629 = (state_14676[(7)]);
var inst_14638 = (inst_14629 == null);
var state_14676__$1 = state_14676;
if(cljs.core.truth_(inst_14638)){
var statearr_14714_14749 = state_14676__$1;
(statearr_14714_14749[(1)] = (11));

} else {
var statearr_14715_14750 = state_14676__$1;
(statearr_14715_14750[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__13608__auto__ = null;
var cljs$core$async$mix_$_state_machine__13608__auto____0 = (function (){
var statearr_14716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14716[(0)] = cljs$core$async$mix_$_state_machine__13608__auto__);

(statearr_14716[(1)] = (1));

return statearr_14716;
});
var cljs$core$async$mix_$_state_machine__13608__auto____1 = (function (state_14676){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_14676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e14717){if((e14717 instanceof Object)){
var ex__13611__auto__ = e14717;
var statearr_14718_14751 = state_14676;
(statearr_14718_14751[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14752 = state_14676;
state_14676 = G__14752;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13608__auto__ = function(state_14676){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13608__auto____1.call(this,state_14676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13608__auto____0;
cljs$core$async$mix_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13608__auto____1;
return cljs$core$async$mix_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_14719 = f__13705__auto__.call(null);
(statearr_14719[(6)] = c__13704__auto___14720);

return statearr_14719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_14755 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_14755.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14756 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_14756.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14757 = (function() {
var G__14758 = null;
var G__14758__1 = (function (p){
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
var G__14758__2 = (function (p,v){
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
G__14758 = function(p,v){
switch(arguments.length){
case 1:
return G__14758__1.call(this,p);
case 2:
return G__14758__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14758.cljs$core$IFn$_invoke$arity$1 = G__14758__1;
G__14758.cljs$core$IFn$_invoke$arity$2 = G__14758__2;
return G__14758;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14754 = arguments.length;
switch (G__14754) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14757.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14757.call(null,p,v);
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
var G__14762 = arguments.length;
switch (G__14762) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__14760_SHARP_){
if(cljs.core.truth_(p1__14760_SHARP_.call(null,topic))){
return p1__14760_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14760_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14763 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14764){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14764 = meta14764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14765,meta14764__$1){
var self__ = this;
var _14765__$1 = this;
return (new cljs.core.async.t_cljs$core$async14763(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14764__$1));
}));

(cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14765){
var self__ = this;
var _14765__$1 = this;
return self__.meta14764;
}));

(cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14763.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14764","meta14764",31258136,null)], null);
}));

(cljs.core.async.t_cljs$core$async14763.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14763");

(cljs.core.async.t_cljs$core$async14763.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async14763");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14763.
 */
cljs.core.async.__GT_t_cljs$core$async14763 = (function cljs$core$async$__GT_t_cljs$core$async14763(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14764){
return (new cljs.core.async.t_cljs$core$async14763(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14764));
});

}

return (new cljs.core.async.t_cljs$core$async14763(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13704__auto___14883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_14837){
var state_val_14838 = (state_14837[(1)]);
if((state_val_14838 === (7))){
var inst_14833 = (state_14837[(2)]);
var state_14837__$1 = state_14837;
var statearr_14839_14884 = state_14837__$1;
(statearr_14839_14884[(2)] = inst_14833);

(statearr_14839_14884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (20))){
var state_14837__$1 = state_14837;
var statearr_14840_14885 = state_14837__$1;
(statearr_14840_14885[(2)] = null);

(statearr_14840_14885[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (1))){
var state_14837__$1 = state_14837;
var statearr_14841_14886 = state_14837__$1;
(statearr_14841_14886[(2)] = null);

(statearr_14841_14886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (24))){
var inst_14816 = (state_14837[(7)]);
var inst_14825 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14816);
var state_14837__$1 = state_14837;
var statearr_14842_14887 = state_14837__$1;
(statearr_14842_14887[(2)] = inst_14825);

(statearr_14842_14887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (4))){
var inst_14768 = (state_14837[(8)]);
var inst_14768__$1 = (state_14837[(2)]);
var inst_14769 = (inst_14768__$1 == null);
var state_14837__$1 = (function (){var statearr_14843 = state_14837;
(statearr_14843[(8)] = inst_14768__$1);

return statearr_14843;
})();
if(cljs.core.truth_(inst_14769)){
var statearr_14844_14888 = state_14837__$1;
(statearr_14844_14888[(1)] = (5));

} else {
var statearr_14845_14889 = state_14837__$1;
(statearr_14845_14889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (15))){
var inst_14810 = (state_14837[(2)]);
var state_14837__$1 = state_14837;
var statearr_14846_14890 = state_14837__$1;
(statearr_14846_14890[(2)] = inst_14810);

(statearr_14846_14890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (21))){
var inst_14830 = (state_14837[(2)]);
var state_14837__$1 = (function (){var statearr_14847 = state_14837;
(statearr_14847[(9)] = inst_14830);

return statearr_14847;
})();
var statearr_14848_14891 = state_14837__$1;
(statearr_14848_14891[(2)] = null);

(statearr_14848_14891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (13))){
var inst_14792 = (state_14837[(10)]);
var inst_14794 = cljs.core.chunked_seq_QMARK_.call(null,inst_14792);
var state_14837__$1 = state_14837;
if(inst_14794){
var statearr_14849_14892 = state_14837__$1;
(statearr_14849_14892[(1)] = (16));

} else {
var statearr_14850_14893 = state_14837__$1;
(statearr_14850_14893[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (22))){
var inst_14822 = (state_14837[(2)]);
var state_14837__$1 = state_14837;
if(cljs.core.truth_(inst_14822)){
var statearr_14851_14894 = state_14837__$1;
(statearr_14851_14894[(1)] = (23));

} else {
var statearr_14852_14895 = state_14837__$1;
(statearr_14852_14895[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (6))){
var inst_14816 = (state_14837[(7)]);
var inst_14818 = (state_14837[(11)]);
var inst_14768 = (state_14837[(8)]);
var inst_14816__$1 = topic_fn.call(null,inst_14768);
var inst_14817 = cljs.core.deref.call(null,mults);
var inst_14818__$1 = cljs.core.get.call(null,inst_14817,inst_14816__$1);
var state_14837__$1 = (function (){var statearr_14853 = state_14837;
(statearr_14853[(7)] = inst_14816__$1);

(statearr_14853[(11)] = inst_14818__$1);

return statearr_14853;
})();
if(cljs.core.truth_(inst_14818__$1)){
var statearr_14854_14896 = state_14837__$1;
(statearr_14854_14896[(1)] = (19));

} else {
var statearr_14855_14897 = state_14837__$1;
(statearr_14855_14897[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (25))){
var inst_14827 = (state_14837[(2)]);
var state_14837__$1 = state_14837;
var statearr_14856_14898 = state_14837__$1;
(statearr_14856_14898[(2)] = inst_14827);

(statearr_14856_14898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (17))){
var inst_14792 = (state_14837[(10)]);
var inst_14801 = cljs.core.first.call(null,inst_14792);
var inst_14802 = cljs.core.async.muxch_STAR_.call(null,inst_14801);
var inst_14803 = cljs.core.async.close_BANG_.call(null,inst_14802);
var inst_14804 = cljs.core.next.call(null,inst_14792);
var inst_14778 = inst_14804;
var inst_14779 = null;
var inst_14780 = (0);
var inst_14781 = (0);
var state_14837__$1 = (function (){var statearr_14857 = state_14837;
(statearr_14857[(12)] = inst_14781);

(statearr_14857[(13)] = inst_14779);

(statearr_14857[(14)] = inst_14803);

(statearr_14857[(15)] = inst_14778);

(statearr_14857[(16)] = inst_14780);

return statearr_14857;
})();
var statearr_14858_14899 = state_14837__$1;
(statearr_14858_14899[(2)] = null);

(statearr_14858_14899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (3))){
var inst_14835 = (state_14837[(2)]);
var state_14837__$1 = state_14837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14837__$1,inst_14835);
} else {
if((state_val_14838 === (12))){
var inst_14812 = (state_14837[(2)]);
var state_14837__$1 = state_14837;
var statearr_14859_14900 = state_14837__$1;
(statearr_14859_14900[(2)] = inst_14812);

(statearr_14859_14900[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (2))){
var state_14837__$1 = state_14837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14837__$1,(4),ch);
} else {
if((state_val_14838 === (23))){
var state_14837__$1 = state_14837;
var statearr_14860_14901 = state_14837__$1;
(statearr_14860_14901[(2)] = null);

(statearr_14860_14901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (19))){
var inst_14818 = (state_14837[(11)]);
var inst_14768 = (state_14837[(8)]);
var inst_14820 = cljs.core.async.muxch_STAR_.call(null,inst_14818);
var state_14837__$1 = state_14837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14837__$1,(22),inst_14820,inst_14768);
} else {
if((state_val_14838 === (11))){
var inst_14792 = (state_14837[(10)]);
var inst_14778 = (state_14837[(15)]);
var inst_14792__$1 = cljs.core.seq.call(null,inst_14778);
var state_14837__$1 = (function (){var statearr_14861 = state_14837;
(statearr_14861[(10)] = inst_14792__$1);

return statearr_14861;
})();
if(inst_14792__$1){
var statearr_14862_14902 = state_14837__$1;
(statearr_14862_14902[(1)] = (13));

} else {
var statearr_14863_14903 = state_14837__$1;
(statearr_14863_14903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (9))){
var inst_14814 = (state_14837[(2)]);
var state_14837__$1 = state_14837;
var statearr_14864_14904 = state_14837__$1;
(statearr_14864_14904[(2)] = inst_14814);

(statearr_14864_14904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (5))){
var inst_14775 = cljs.core.deref.call(null,mults);
var inst_14776 = cljs.core.vals.call(null,inst_14775);
var inst_14777 = cljs.core.seq.call(null,inst_14776);
var inst_14778 = inst_14777;
var inst_14779 = null;
var inst_14780 = (0);
var inst_14781 = (0);
var state_14837__$1 = (function (){var statearr_14865 = state_14837;
(statearr_14865[(12)] = inst_14781);

(statearr_14865[(13)] = inst_14779);

(statearr_14865[(15)] = inst_14778);

(statearr_14865[(16)] = inst_14780);

return statearr_14865;
})();
var statearr_14866_14905 = state_14837__$1;
(statearr_14866_14905[(2)] = null);

(statearr_14866_14905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (14))){
var state_14837__$1 = state_14837;
var statearr_14870_14906 = state_14837__$1;
(statearr_14870_14906[(2)] = null);

(statearr_14870_14906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (16))){
var inst_14792 = (state_14837[(10)]);
var inst_14796 = cljs.core.chunk_first.call(null,inst_14792);
var inst_14797 = cljs.core.chunk_rest.call(null,inst_14792);
var inst_14798 = cljs.core.count.call(null,inst_14796);
var inst_14778 = inst_14797;
var inst_14779 = inst_14796;
var inst_14780 = inst_14798;
var inst_14781 = (0);
var state_14837__$1 = (function (){var statearr_14871 = state_14837;
(statearr_14871[(12)] = inst_14781);

(statearr_14871[(13)] = inst_14779);

(statearr_14871[(15)] = inst_14778);

(statearr_14871[(16)] = inst_14780);

return statearr_14871;
})();
var statearr_14872_14907 = state_14837__$1;
(statearr_14872_14907[(2)] = null);

(statearr_14872_14907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (10))){
var inst_14781 = (state_14837[(12)]);
var inst_14779 = (state_14837[(13)]);
var inst_14778 = (state_14837[(15)]);
var inst_14780 = (state_14837[(16)]);
var inst_14786 = cljs.core._nth.call(null,inst_14779,inst_14781);
var inst_14787 = cljs.core.async.muxch_STAR_.call(null,inst_14786);
var inst_14788 = cljs.core.async.close_BANG_.call(null,inst_14787);
var inst_14789 = (inst_14781 + (1));
var tmp14867 = inst_14779;
var tmp14868 = inst_14778;
var tmp14869 = inst_14780;
var inst_14778__$1 = tmp14868;
var inst_14779__$1 = tmp14867;
var inst_14780__$1 = tmp14869;
var inst_14781__$1 = inst_14789;
var state_14837__$1 = (function (){var statearr_14873 = state_14837;
(statearr_14873[(12)] = inst_14781__$1);

(statearr_14873[(13)] = inst_14779__$1);

(statearr_14873[(15)] = inst_14778__$1);

(statearr_14873[(16)] = inst_14780__$1);

(statearr_14873[(17)] = inst_14788);

return statearr_14873;
})();
var statearr_14874_14908 = state_14837__$1;
(statearr_14874_14908[(2)] = null);

(statearr_14874_14908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (18))){
var inst_14807 = (state_14837[(2)]);
var state_14837__$1 = state_14837;
var statearr_14875_14909 = state_14837__$1;
(statearr_14875_14909[(2)] = inst_14807);

(statearr_14875_14909[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (8))){
var inst_14781 = (state_14837[(12)]);
var inst_14780 = (state_14837[(16)]);
var inst_14783 = (inst_14781 < inst_14780);
var inst_14784 = inst_14783;
var state_14837__$1 = state_14837;
if(cljs.core.truth_(inst_14784)){
var statearr_14876_14910 = state_14837__$1;
(statearr_14876_14910[(1)] = (10));

} else {
var statearr_14877_14911 = state_14837__$1;
(statearr_14877_14911[(1)] = (11));

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
var cljs$core$async$state_machine__13608__auto__ = null;
var cljs$core$async$state_machine__13608__auto____0 = (function (){
var statearr_14878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14878[(0)] = cljs$core$async$state_machine__13608__auto__);

(statearr_14878[(1)] = (1));

return statearr_14878;
});
var cljs$core$async$state_machine__13608__auto____1 = (function (state_14837){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_14837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e14879){if((e14879 instanceof Object)){
var ex__13611__auto__ = e14879;
var statearr_14880_14912 = state_14837;
(statearr_14880_14912[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14913 = state_14837;
state_14837 = G__14913;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$state_machine__13608__auto__ = function(state_14837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13608__auto____1.call(this,state_14837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13608__auto____0;
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13608__auto____1;
return cljs$core$async$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_14881 = f__13705__auto__.call(null);
(statearr_14881[(6)] = c__13704__auto___14883);

return statearr_14881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
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
var G__14915 = arguments.length;
switch (G__14915) {
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
var G__14918 = arguments.length;
switch (G__14918) {
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
var G__14921 = arguments.length;
switch (G__14921) {
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
var c__13704__auto___14988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_14960){
var state_val_14961 = (state_14960[(1)]);
if((state_val_14961 === (7))){
var state_14960__$1 = state_14960;
var statearr_14962_14989 = state_14960__$1;
(statearr_14962_14989[(2)] = null);

(statearr_14962_14989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (1))){
var state_14960__$1 = state_14960;
var statearr_14963_14990 = state_14960__$1;
(statearr_14963_14990[(2)] = null);

(statearr_14963_14990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (4))){
var inst_14924 = (state_14960[(7)]);
var inst_14926 = (inst_14924 < cnt);
var state_14960__$1 = state_14960;
if(cljs.core.truth_(inst_14926)){
var statearr_14964_14991 = state_14960__$1;
(statearr_14964_14991[(1)] = (6));

} else {
var statearr_14965_14992 = state_14960__$1;
(statearr_14965_14992[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (15))){
var inst_14956 = (state_14960[(2)]);
var state_14960__$1 = state_14960;
var statearr_14966_14993 = state_14960__$1;
(statearr_14966_14993[(2)] = inst_14956);

(statearr_14966_14993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (13))){
var inst_14949 = cljs.core.async.close_BANG_.call(null,out);
var state_14960__$1 = state_14960;
var statearr_14967_14994 = state_14960__$1;
(statearr_14967_14994[(2)] = inst_14949);

(statearr_14967_14994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (6))){
var state_14960__$1 = state_14960;
var statearr_14968_14995 = state_14960__$1;
(statearr_14968_14995[(2)] = null);

(statearr_14968_14995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (3))){
var inst_14958 = (state_14960[(2)]);
var state_14960__$1 = state_14960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14960__$1,inst_14958);
} else {
if((state_val_14961 === (12))){
var inst_14946 = (state_14960[(8)]);
var inst_14946__$1 = (state_14960[(2)]);
var inst_14947 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14946__$1);
var state_14960__$1 = (function (){var statearr_14969 = state_14960;
(statearr_14969[(8)] = inst_14946__$1);

return statearr_14969;
})();
if(cljs.core.truth_(inst_14947)){
var statearr_14970_14996 = state_14960__$1;
(statearr_14970_14996[(1)] = (13));

} else {
var statearr_14971_14997 = state_14960__$1;
(statearr_14971_14997[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (2))){
var inst_14923 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14924 = (0);
var state_14960__$1 = (function (){var statearr_14972 = state_14960;
(statearr_14972[(9)] = inst_14923);

(statearr_14972[(7)] = inst_14924);

return statearr_14972;
})();
var statearr_14973_14998 = state_14960__$1;
(statearr_14973_14998[(2)] = null);

(statearr_14973_14998[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (11))){
var inst_14924 = (state_14960[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14960,(10),Object,null,(9));
var inst_14933 = chs__$1.call(null,inst_14924);
var inst_14934 = done.call(null,inst_14924);
var inst_14935 = cljs.core.async.take_BANG_.call(null,inst_14933,inst_14934);
var state_14960__$1 = state_14960;
var statearr_14974_14999 = state_14960__$1;
(statearr_14974_14999[(2)] = inst_14935);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14960__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (9))){
var inst_14924 = (state_14960[(7)]);
var inst_14937 = (state_14960[(2)]);
var inst_14938 = (inst_14924 + (1));
var inst_14924__$1 = inst_14938;
var state_14960__$1 = (function (){var statearr_14975 = state_14960;
(statearr_14975[(10)] = inst_14937);

(statearr_14975[(7)] = inst_14924__$1);

return statearr_14975;
})();
var statearr_14976_15000 = state_14960__$1;
(statearr_14976_15000[(2)] = null);

(statearr_14976_15000[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (5))){
var inst_14944 = (state_14960[(2)]);
var state_14960__$1 = (function (){var statearr_14977 = state_14960;
(statearr_14977[(11)] = inst_14944);

return statearr_14977;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14960__$1,(12),dchan);
} else {
if((state_val_14961 === (14))){
var inst_14946 = (state_14960[(8)]);
var inst_14951 = cljs.core.apply.call(null,f,inst_14946);
var state_14960__$1 = state_14960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14960__$1,(16),out,inst_14951);
} else {
if((state_val_14961 === (16))){
var inst_14953 = (state_14960[(2)]);
var state_14960__$1 = (function (){var statearr_14978 = state_14960;
(statearr_14978[(12)] = inst_14953);

return statearr_14978;
})();
var statearr_14979_15001 = state_14960__$1;
(statearr_14979_15001[(2)] = null);

(statearr_14979_15001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (10))){
var inst_14928 = (state_14960[(2)]);
var inst_14929 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14960__$1 = (function (){var statearr_14980 = state_14960;
(statearr_14980[(13)] = inst_14928);

return statearr_14980;
})();
var statearr_14981_15002 = state_14960__$1;
(statearr_14981_15002[(2)] = inst_14929);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14960__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14961 === (8))){
var inst_14942 = (state_14960[(2)]);
var state_14960__$1 = state_14960;
var statearr_14982_15003 = state_14960__$1;
(statearr_14982_15003[(2)] = inst_14942);

(statearr_14982_15003[(1)] = (5));


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
var cljs$core$async$state_machine__13608__auto__ = null;
var cljs$core$async$state_machine__13608__auto____0 = (function (){
var statearr_14983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14983[(0)] = cljs$core$async$state_machine__13608__auto__);

(statearr_14983[(1)] = (1));

return statearr_14983;
});
var cljs$core$async$state_machine__13608__auto____1 = (function (state_14960){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_14960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e14984){if((e14984 instanceof Object)){
var ex__13611__auto__ = e14984;
var statearr_14985_15004 = state_14960;
(statearr_14985_15004[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15005 = state_14960;
state_14960 = G__15005;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$state_machine__13608__auto__ = function(state_14960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13608__auto____1.call(this,state_14960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13608__auto____0;
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13608__auto____1;
return cljs$core$async$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_14986 = f__13705__auto__.call(null);
(statearr_14986[(6)] = c__13704__auto___14988);

return statearr_14986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
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
var G__15008 = arguments.length;
switch (G__15008) {
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
var c__13704__auto___15062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_15040){
var state_val_15041 = (state_15040[(1)]);
if((state_val_15041 === (7))){
var inst_15019 = (state_15040[(7)]);
var inst_15020 = (state_15040[(8)]);
var inst_15019__$1 = (state_15040[(2)]);
var inst_15020__$1 = cljs.core.nth.call(null,inst_15019__$1,(0),null);
var inst_15021 = cljs.core.nth.call(null,inst_15019__$1,(1),null);
var inst_15022 = (inst_15020__$1 == null);
var state_15040__$1 = (function (){var statearr_15042 = state_15040;
(statearr_15042[(7)] = inst_15019__$1);

(statearr_15042[(9)] = inst_15021);

(statearr_15042[(8)] = inst_15020__$1);

return statearr_15042;
})();
if(cljs.core.truth_(inst_15022)){
var statearr_15043_15063 = state_15040__$1;
(statearr_15043_15063[(1)] = (8));

} else {
var statearr_15044_15064 = state_15040__$1;
(statearr_15044_15064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15041 === (1))){
var inst_15009 = cljs.core.vec.call(null,chs);
var inst_15010 = inst_15009;
var state_15040__$1 = (function (){var statearr_15045 = state_15040;
(statearr_15045[(10)] = inst_15010);

return statearr_15045;
})();
var statearr_15046_15065 = state_15040__$1;
(statearr_15046_15065[(2)] = null);

(statearr_15046_15065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15041 === (4))){
var inst_15010 = (state_15040[(10)]);
var state_15040__$1 = state_15040;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15040__$1,(7),inst_15010);
} else {
if((state_val_15041 === (6))){
var inst_15036 = (state_15040[(2)]);
var state_15040__$1 = state_15040;
var statearr_15047_15066 = state_15040__$1;
(statearr_15047_15066[(2)] = inst_15036);

(statearr_15047_15066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15041 === (3))){
var inst_15038 = (state_15040[(2)]);
var state_15040__$1 = state_15040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15040__$1,inst_15038);
} else {
if((state_val_15041 === (2))){
var inst_15010 = (state_15040[(10)]);
var inst_15012 = cljs.core.count.call(null,inst_15010);
var inst_15013 = (inst_15012 > (0));
var state_15040__$1 = state_15040;
if(cljs.core.truth_(inst_15013)){
var statearr_15049_15067 = state_15040__$1;
(statearr_15049_15067[(1)] = (4));

} else {
var statearr_15050_15068 = state_15040__$1;
(statearr_15050_15068[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15041 === (11))){
var inst_15010 = (state_15040[(10)]);
var inst_15029 = (state_15040[(2)]);
var tmp15048 = inst_15010;
var inst_15010__$1 = tmp15048;
var state_15040__$1 = (function (){var statearr_15051 = state_15040;
(statearr_15051[(10)] = inst_15010__$1);

(statearr_15051[(11)] = inst_15029);

return statearr_15051;
})();
var statearr_15052_15069 = state_15040__$1;
(statearr_15052_15069[(2)] = null);

(statearr_15052_15069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15041 === (9))){
var inst_15020 = (state_15040[(8)]);
var state_15040__$1 = state_15040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15040__$1,(11),out,inst_15020);
} else {
if((state_val_15041 === (5))){
var inst_15034 = cljs.core.async.close_BANG_.call(null,out);
var state_15040__$1 = state_15040;
var statearr_15053_15070 = state_15040__$1;
(statearr_15053_15070[(2)] = inst_15034);

(statearr_15053_15070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15041 === (10))){
var inst_15032 = (state_15040[(2)]);
var state_15040__$1 = state_15040;
var statearr_15054_15071 = state_15040__$1;
(statearr_15054_15071[(2)] = inst_15032);

(statearr_15054_15071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15041 === (8))){
var inst_15019 = (state_15040[(7)]);
var inst_15021 = (state_15040[(9)]);
var inst_15020 = (state_15040[(8)]);
var inst_15010 = (state_15040[(10)]);
var inst_15024 = (function (){var cs = inst_15010;
var vec__15015 = inst_15019;
var v = inst_15020;
var c = inst_15021;
return (function (p1__15006_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15006_SHARP_);
});
})();
var inst_15025 = cljs.core.filterv.call(null,inst_15024,inst_15010);
var inst_15010__$1 = inst_15025;
var state_15040__$1 = (function (){var statearr_15055 = state_15040;
(statearr_15055[(10)] = inst_15010__$1);

return statearr_15055;
})();
var statearr_15056_15072 = state_15040__$1;
(statearr_15056_15072[(2)] = null);

(statearr_15056_15072[(1)] = (2));


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
var cljs$core$async$state_machine__13608__auto__ = null;
var cljs$core$async$state_machine__13608__auto____0 = (function (){
var statearr_15057 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15057[(0)] = cljs$core$async$state_machine__13608__auto__);

(statearr_15057[(1)] = (1));

return statearr_15057;
});
var cljs$core$async$state_machine__13608__auto____1 = (function (state_15040){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_15040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e15058){if((e15058 instanceof Object)){
var ex__13611__auto__ = e15058;
var statearr_15059_15073 = state_15040;
(statearr_15059_15073[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15074 = state_15040;
state_15040 = G__15074;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$state_machine__13608__auto__ = function(state_15040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13608__auto____1.call(this,state_15040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13608__auto____0;
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13608__auto____1;
return cljs$core$async$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_15060 = f__13705__auto__.call(null);
(statearr_15060[(6)] = c__13704__auto___15062);

return statearr_15060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
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
var G__15076 = arguments.length;
switch (G__15076) {
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
var c__13704__auto___15121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_15100){
var state_val_15101 = (state_15100[(1)]);
if((state_val_15101 === (7))){
var inst_15082 = (state_15100[(7)]);
var inst_15082__$1 = (state_15100[(2)]);
var inst_15083 = (inst_15082__$1 == null);
var inst_15084 = cljs.core.not.call(null,inst_15083);
var state_15100__$1 = (function (){var statearr_15102 = state_15100;
(statearr_15102[(7)] = inst_15082__$1);

return statearr_15102;
})();
if(inst_15084){
var statearr_15103_15122 = state_15100__$1;
(statearr_15103_15122[(1)] = (8));

} else {
var statearr_15104_15123 = state_15100__$1;
(statearr_15104_15123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (1))){
var inst_15077 = (0);
var state_15100__$1 = (function (){var statearr_15105 = state_15100;
(statearr_15105[(8)] = inst_15077);

return statearr_15105;
})();
var statearr_15106_15124 = state_15100__$1;
(statearr_15106_15124[(2)] = null);

(statearr_15106_15124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (4))){
var state_15100__$1 = state_15100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15100__$1,(7),ch);
} else {
if((state_val_15101 === (6))){
var inst_15095 = (state_15100[(2)]);
var state_15100__$1 = state_15100;
var statearr_15107_15125 = state_15100__$1;
(statearr_15107_15125[(2)] = inst_15095);

(statearr_15107_15125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (3))){
var inst_15097 = (state_15100[(2)]);
var inst_15098 = cljs.core.async.close_BANG_.call(null,out);
var state_15100__$1 = (function (){var statearr_15108 = state_15100;
(statearr_15108[(9)] = inst_15097);

return statearr_15108;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15100__$1,inst_15098);
} else {
if((state_val_15101 === (2))){
var inst_15077 = (state_15100[(8)]);
var inst_15079 = (inst_15077 < n);
var state_15100__$1 = state_15100;
if(cljs.core.truth_(inst_15079)){
var statearr_15109_15126 = state_15100__$1;
(statearr_15109_15126[(1)] = (4));

} else {
var statearr_15110_15127 = state_15100__$1;
(statearr_15110_15127[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (11))){
var inst_15077 = (state_15100[(8)]);
var inst_15087 = (state_15100[(2)]);
var inst_15088 = (inst_15077 + (1));
var inst_15077__$1 = inst_15088;
var state_15100__$1 = (function (){var statearr_15111 = state_15100;
(statearr_15111[(10)] = inst_15087);

(statearr_15111[(8)] = inst_15077__$1);

return statearr_15111;
})();
var statearr_15112_15128 = state_15100__$1;
(statearr_15112_15128[(2)] = null);

(statearr_15112_15128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (9))){
var state_15100__$1 = state_15100;
var statearr_15113_15129 = state_15100__$1;
(statearr_15113_15129[(2)] = null);

(statearr_15113_15129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (5))){
var state_15100__$1 = state_15100;
var statearr_15114_15130 = state_15100__$1;
(statearr_15114_15130[(2)] = null);

(statearr_15114_15130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (10))){
var inst_15092 = (state_15100[(2)]);
var state_15100__$1 = state_15100;
var statearr_15115_15131 = state_15100__$1;
(statearr_15115_15131[(2)] = inst_15092);

(statearr_15115_15131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15101 === (8))){
var inst_15082 = (state_15100[(7)]);
var state_15100__$1 = state_15100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15100__$1,(11),out,inst_15082);
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
var cljs$core$async$state_machine__13608__auto__ = null;
var cljs$core$async$state_machine__13608__auto____0 = (function (){
var statearr_15116 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15116[(0)] = cljs$core$async$state_machine__13608__auto__);

(statearr_15116[(1)] = (1));

return statearr_15116;
});
var cljs$core$async$state_machine__13608__auto____1 = (function (state_15100){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_15100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e15117){if((e15117 instanceof Object)){
var ex__13611__auto__ = e15117;
var statearr_15118_15132 = state_15100;
(statearr_15118_15132[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15133 = state_15100;
state_15100 = G__15133;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$state_machine__13608__auto__ = function(state_15100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13608__auto____1.call(this,state_15100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13608__auto____0;
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13608__auto____1;
return cljs$core$async$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_15119 = f__13705__auto__.call(null);
(statearr_15119[(6)] = c__13704__auto___15121);

return statearr_15119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15135 = (function (f,ch,meta15136){
this.f = f;
this.ch = ch;
this.meta15136 = meta15136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15137,meta15136__$1){
var self__ = this;
var _15137__$1 = this;
return (new cljs.core.async.t_cljs$core$async15135(self__.f,self__.ch,meta15136__$1));
}));

(cljs.core.async.t_cljs$core$async15135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15137){
var self__ = this;
var _15137__$1 = this;
return self__.meta15136;
}));

(cljs.core.async.t_cljs$core$async15135.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15135.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async15135.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async15135.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15135.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15138 = (function (f,ch,meta15136,_,fn1,meta15139){
this.f = f;
this.ch = ch;
this.meta15136 = meta15136;
this._ = _;
this.fn1 = fn1;
this.meta15139 = meta15139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15140,meta15139__$1){
var self__ = this;
var _15140__$1 = this;
return (new cljs.core.async.t_cljs$core$async15138(self__.f,self__.ch,self__.meta15136,self__._,self__.fn1,meta15139__$1));
}));

(cljs.core.async.t_cljs$core$async15138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15140){
var self__ = this;
var _15140__$1 = this;
return self__.meta15139;
}));

(cljs.core.async.t_cljs$core$async15138.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async15138.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__15134_SHARP_){
return f1.call(null,(((p1__15134_SHARP_ == null))?null:self__.f.call(null,p1__15134_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async15138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15136","meta15136",-1833432729,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15135","cljs.core.async/t_cljs$core$async15135",-260992973,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15139","meta15139",1500871687,null)], null);
}));

(cljs.core.async.t_cljs$core$async15138.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15138");

(cljs.core.async.t_cljs$core$async15138.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async15138");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15138.
 */
cljs.core.async.__GT_t_cljs$core$async15138 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15138(f__$1,ch__$1,meta15136__$1,___$2,fn1__$1,meta15139){
return (new cljs.core.async.t_cljs$core$async15138(f__$1,ch__$1,meta15136__$1,___$2,fn1__$1,meta15139));
});

}

return (new cljs.core.async.t_cljs$core$async15138(self__.f,self__.ch,self__.meta15136,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async15135.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15135.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15136","meta15136",-1833432729,null)], null);
}));

(cljs.core.async.t_cljs$core$async15135.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15135");

(cljs.core.async.t_cljs$core$async15135.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async15135");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15135.
 */
cljs.core.async.__GT_t_cljs$core$async15135 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15135(f__$1,ch__$1,meta15136){
return (new cljs.core.async.t_cljs$core$async15135(f__$1,ch__$1,meta15136));
});

}

return (new cljs.core.async.t_cljs$core$async15135(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15141 = (function (f,ch,meta15142){
this.f = f;
this.ch = ch;
this.meta15142 = meta15142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15143,meta15142__$1){
var self__ = this;
var _15143__$1 = this;
return (new cljs.core.async.t_cljs$core$async15141(self__.f,self__.ch,meta15142__$1));
}));

(cljs.core.async.t_cljs$core$async15141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15143){
var self__ = this;
var _15143__$1 = this;
return self__.meta15142;
}));

(cljs.core.async.t_cljs$core$async15141.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15141.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async15141.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15141.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15141.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15141.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async15141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15142","meta15142",-243190489,null)], null);
}));

(cljs.core.async.t_cljs$core$async15141.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15141");

(cljs.core.async.t_cljs$core$async15141.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async15141");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15141.
 */
cljs.core.async.__GT_t_cljs$core$async15141 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15141(f__$1,ch__$1,meta15142){
return (new cljs.core.async.t_cljs$core$async15141(f__$1,ch__$1,meta15142));
});

}

return (new cljs.core.async.t_cljs$core$async15141(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15144 = (function (p,ch,meta15145){
this.p = p;
this.ch = ch;
this.meta15145 = meta15145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15146,meta15145__$1){
var self__ = this;
var _15146__$1 = this;
return (new cljs.core.async.t_cljs$core$async15144(self__.p,self__.ch,meta15145__$1));
}));

(cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15146){
var self__ = this;
var _15146__$1 = this;
return self__.meta15145;
}));

(cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15144.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async15144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15145","meta15145",-1991998382,null)], null);
}));

(cljs.core.async.t_cljs$core$async15144.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15144");

(cljs.core.async.t_cljs$core$async15144.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async15144");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15144.
 */
cljs.core.async.__GT_t_cljs$core$async15144 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15144(p__$1,ch__$1,meta15145){
return (new cljs.core.async.t_cljs$core$async15144(p__$1,ch__$1,meta15145));
});

}

return (new cljs.core.async.t_cljs$core$async15144(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15148 = arguments.length;
switch (G__15148) {
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
var c__13704__auto___15188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_15169){
var state_val_15170 = (state_15169[(1)]);
if((state_val_15170 === (7))){
var inst_15165 = (state_15169[(2)]);
var state_15169__$1 = state_15169;
var statearr_15171_15189 = state_15169__$1;
(statearr_15171_15189[(2)] = inst_15165);

(statearr_15171_15189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (1))){
var state_15169__$1 = state_15169;
var statearr_15172_15190 = state_15169__$1;
(statearr_15172_15190[(2)] = null);

(statearr_15172_15190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (4))){
var inst_15151 = (state_15169[(7)]);
var inst_15151__$1 = (state_15169[(2)]);
var inst_15152 = (inst_15151__$1 == null);
var state_15169__$1 = (function (){var statearr_15173 = state_15169;
(statearr_15173[(7)] = inst_15151__$1);

return statearr_15173;
})();
if(cljs.core.truth_(inst_15152)){
var statearr_15174_15191 = state_15169__$1;
(statearr_15174_15191[(1)] = (5));

} else {
var statearr_15175_15192 = state_15169__$1;
(statearr_15175_15192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (6))){
var inst_15151 = (state_15169[(7)]);
var inst_15156 = p.call(null,inst_15151);
var state_15169__$1 = state_15169;
if(cljs.core.truth_(inst_15156)){
var statearr_15176_15193 = state_15169__$1;
(statearr_15176_15193[(1)] = (8));

} else {
var statearr_15177_15194 = state_15169__$1;
(statearr_15177_15194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (3))){
var inst_15167 = (state_15169[(2)]);
var state_15169__$1 = state_15169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15169__$1,inst_15167);
} else {
if((state_val_15170 === (2))){
var state_15169__$1 = state_15169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15169__$1,(4),ch);
} else {
if((state_val_15170 === (11))){
var inst_15159 = (state_15169[(2)]);
var state_15169__$1 = state_15169;
var statearr_15178_15195 = state_15169__$1;
(statearr_15178_15195[(2)] = inst_15159);

(statearr_15178_15195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (9))){
var state_15169__$1 = state_15169;
var statearr_15179_15196 = state_15169__$1;
(statearr_15179_15196[(2)] = null);

(statearr_15179_15196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (5))){
var inst_15154 = cljs.core.async.close_BANG_.call(null,out);
var state_15169__$1 = state_15169;
var statearr_15180_15197 = state_15169__$1;
(statearr_15180_15197[(2)] = inst_15154);

(statearr_15180_15197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (10))){
var inst_15162 = (state_15169[(2)]);
var state_15169__$1 = (function (){var statearr_15181 = state_15169;
(statearr_15181[(8)] = inst_15162);

return statearr_15181;
})();
var statearr_15182_15198 = state_15169__$1;
(statearr_15182_15198[(2)] = null);

(statearr_15182_15198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (8))){
var inst_15151 = (state_15169[(7)]);
var state_15169__$1 = state_15169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15169__$1,(11),out,inst_15151);
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
var cljs$core$async$state_machine__13608__auto__ = null;
var cljs$core$async$state_machine__13608__auto____0 = (function (){
var statearr_15183 = [null,null,null,null,null,null,null,null,null];
(statearr_15183[(0)] = cljs$core$async$state_machine__13608__auto__);

(statearr_15183[(1)] = (1));

return statearr_15183;
});
var cljs$core$async$state_machine__13608__auto____1 = (function (state_15169){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_15169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e15184){if((e15184 instanceof Object)){
var ex__13611__auto__ = e15184;
var statearr_15185_15199 = state_15169;
(statearr_15185_15199[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15200 = state_15169;
state_15169 = G__15200;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$state_machine__13608__auto__ = function(state_15169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13608__auto____1.call(this,state_15169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13608__auto____0;
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13608__auto____1;
return cljs$core$async$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_15186 = f__13705__auto__.call(null);
(statearr_15186[(6)] = c__13704__auto___15188);

return statearr_15186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15202 = arguments.length;
switch (G__15202) {
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
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_15265){
var state_val_15266 = (state_15265[(1)]);
if((state_val_15266 === (7))){
var inst_15261 = (state_15265[(2)]);
var state_15265__$1 = state_15265;
var statearr_15267_15305 = state_15265__$1;
(statearr_15267_15305[(2)] = inst_15261);

(statearr_15267_15305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (20))){
var inst_15231 = (state_15265[(7)]);
var inst_15242 = (state_15265[(2)]);
var inst_15243 = cljs.core.next.call(null,inst_15231);
var inst_15217 = inst_15243;
var inst_15218 = null;
var inst_15219 = (0);
var inst_15220 = (0);
var state_15265__$1 = (function (){var statearr_15268 = state_15265;
(statearr_15268[(8)] = inst_15219);

(statearr_15268[(9)] = inst_15220);

(statearr_15268[(10)] = inst_15218);

(statearr_15268[(11)] = inst_15217);

(statearr_15268[(12)] = inst_15242);

return statearr_15268;
})();
var statearr_15269_15306 = state_15265__$1;
(statearr_15269_15306[(2)] = null);

(statearr_15269_15306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (1))){
var state_15265__$1 = state_15265;
var statearr_15270_15307 = state_15265__$1;
(statearr_15270_15307[(2)] = null);

(statearr_15270_15307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (4))){
var inst_15206 = (state_15265[(13)]);
var inst_15206__$1 = (state_15265[(2)]);
var inst_15207 = (inst_15206__$1 == null);
var state_15265__$1 = (function (){var statearr_15271 = state_15265;
(statearr_15271[(13)] = inst_15206__$1);

return statearr_15271;
})();
if(cljs.core.truth_(inst_15207)){
var statearr_15272_15308 = state_15265__$1;
(statearr_15272_15308[(1)] = (5));

} else {
var statearr_15273_15309 = state_15265__$1;
(statearr_15273_15309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (15))){
var state_15265__$1 = state_15265;
var statearr_15277_15310 = state_15265__$1;
(statearr_15277_15310[(2)] = null);

(statearr_15277_15310[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (21))){
var state_15265__$1 = state_15265;
var statearr_15278_15311 = state_15265__$1;
(statearr_15278_15311[(2)] = null);

(statearr_15278_15311[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (13))){
var inst_15219 = (state_15265[(8)]);
var inst_15220 = (state_15265[(9)]);
var inst_15218 = (state_15265[(10)]);
var inst_15217 = (state_15265[(11)]);
var inst_15227 = (state_15265[(2)]);
var inst_15228 = (inst_15220 + (1));
var tmp15274 = inst_15219;
var tmp15275 = inst_15218;
var tmp15276 = inst_15217;
var inst_15217__$1 = tmp15276;
var inst_15218__$1 = tmp15275;
var inst_15219__$1 = tmp15274;
var inst_15220__$1 = inst_15228;
var state_15265__$1 = (function (){var statearr_15279 = state_15265;
(statearr_15279[(8)] = inst_15219__$1);

(statearr_15279[(9)] = inst_15220__$1);

(statearr_15279[(14)] = inst_15227);

(statearr_15279[(10)] = inst_15218__$1);

(statearr_15279[(11)] = inst_15217__$1);

return statearr_15279;
})();
var statearr_15280_15312 = state_15265__$1;
(statearr_15280_15312[(2)] = null);

(statearr_15280_15312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (22))){
var state_15265__$1 = state_15265;
var statearr_15281_15313 = state_15265__$1;
(statearr_15281_15313[(2)] = null);

(statearr_15281_15313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (6))){
var inst_15206 = (state_15265[(13)]);
var inst_15215 = f.call(null,inst_15206);
var inst_15216 = cljs.core.seq.call(null,inst_15215);
var inst_15217 = inst_15216;
var inst_15218 = null;
var inst_15219 = (0);
var inst_15220 = (0);
var state_15265__$1 = (function (){var statearr_15282 = state_15265;
(statearr_15282[(8)] = inst_15219);

(statearr_15282[(9)] = inst_15220);

(statearr_15282[(10)] = inst_15218);

(statearr_15282[(11)] = inst_15217);

return statearr_15282;
})();
var statearr_15283_15314 = state_15265__$1;
(statearr_15283_15314[(2)] = null);

(statearr_15283_15314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (17))){
var inst_15231 = (state_15265[(7)]);
var inst_15235 = cljs.core.chunk_first.call(null,inst_15231);
var inst_15236 = cljs.core.chunk_rest.call(null,inst_15231);
var inst_15237 = cljs.core.count.call(null,inst_15235);
var inst_15217 = inst_15236;
var inst_15218 = inst_15235;
var inst_15219 = inst_15237;
var inst_15220 = (0);
var state_15265__$1 = (function (){var statearr_15284 = state_15265;
(statearr_15284[(8)] = inst_15219);

(statearr_15284[(9)] = inst_15220);

(statearr_15284[(10)] = inst_15218);

(statearr_15284[(11)] = inst_15217);

return statearr_15284;
})();
var statearr_15285_15315 = state_15265__$1;
(statearr_15285_15315[(2)] = null);

(statearr_15285_15315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (3))){
var inst_15263 = (state_15265[(2)]);
var state_15265__$1 = state_15265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15265__$1,inst_15263);
} else {
if((state_val_15266 === (12))){
var inst_15251 = (state_15265[(2)]);
var state_15265__$1 = state_15265;
var statearr_15286_15316 = state_15265__$1;
(statearr_15286_15316[(2)] = inst_15251);

(statearr_15286_15316[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (2))){
var state_15265__$1 = state_15265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15265__$1,(4),in$);
} else {
if((state_val_15266 === (23))){
var inst_15259 = (state_15265[(2)]);
var state_15265__$1 = state_15265;
var statearr_15287_15317 = state_15265__$1;
(statearr_15287_15317[(2)] = inst_15259);

(statearr_15287_15317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (19))){
var inst_15246 = (state_15265[(2)]);
var state_15265__$1 = state_15265;
var statearr_15288_15318 = state_15265__$1;
(statearr_15288_15318[(2)] = inst_15246);

(statearr_15288_15318[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (11))){
var inst_15231 = (state_15265[(7)]);
var inst_15217 = (state_15265[(11)]);
var inst_15231__$1 = cljs.core.seq.call(null,inst_15217);
var state_15265__$1 = (function (){var statearr_15289 = state_15265;
(statearr_15289[(7)] = inst_15231__$1);

return statearr_15289;
})();
if(inst_15231__$1){
var statearr_15290_15319 = state_15265__$1;
(statearr_15290_15319[(1)] = (14));

} else {
var statearr_15291_15320 = state_15265__$1;
(statearr_15291_15320[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (9))){
var inst_15253 = (state_15265[(2)]);
var inst_15254 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15265__$1 = (function (){var statearr_15292 = state_15265;
(statearr_15292[(15)] = inst_15253);

return statearr_15292;
})();
if(cljs.core.truth_(inst_15254)){
var statearr_15293_15321 = state_15265__$1;
(statearr_15293_15321[(1)] = (21));

} else {
var statearr_15294_15322 = state_15265__$1;
(statearr_15294_15322[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (5))){
var inst_15209 = cljs.core.async.close_BANG_.call(null,out);
var state_15265__$1 = state_15265;
var statearr_15295_15323 = state_15265__$1;
(statearr_15295_15323[(2)] = inst_15209);

(statearr_15295_15323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (14))){
var inst_15231 = (state_15265[(7)]);
var inst_15233 = cljs.core.chunked_seq_QMARK_.call(null,inst_15231);
var state_15265__$1 = state_15265;
if(inst_15233){
var statearr_15296_15324 = state_15265__$1;
(statearr_15296_15324[(1)] = (17));

} else {
var statearr_15297_15325 = state_15265__$1;
(statearr_15297_15325[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (16))){
var inst_15249 = (state_15265[(2)]);
var state_15265__$1 = state_15265;
var statearr_15298_15326 = state_15265__$1;
(statearr_15298_15326[(2)] = inst_15249);

(statearr_15298_15326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (10))){
var inst_15220 = (state_15265[(9)]);
var inst_15218 = (state_15265[(10)]);
var inst_15225 = cljs.core._nth.call(null,inst_15218,inst_15220);
var state_15265__$1 = state_15265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15265__$1,(13),out,inst_15225);
} else {
if((state_val_15266 === (18))){
var inst_15231 = (state_15265[(7)]);
var inst_15240 = cljs.core.first.call(null,inst_15231);
var state_15265__$1 = state_15265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15265__$1,(20),out,inst_15240);
} else {
if((state_val_15266 === (8))){
var inst_15219 = (state_15265[(8)]);
var inst_15220 = (state_15265[(9)]);
var inst_15222 = (inst_15220 < inst_15219);
var inst_15223 = inst_15222;
var state_15265__$1 = state_15265;
if(cljs.core.truth_(inst_15223)){
var statearr_15299_15327 = state_15265__$1;
(statearr_15299_15327[(1)] = (10));

} else {
var statearr_15300_15328 = state_15265__$1;
(statearr_15300_15328[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__13608__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13608__auto____0 = (function (){
var statearr_15301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15301[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13608__auto__);

(statearr_15301[(1)] = (1));

return statearr_15301;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13608__auto____1 = (function (state_15265){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_15265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e15302){if((e15302 instanceof Object)){
var ex__13611__auto__ = e15302;
var statearr_15303_15329 = state_15265;
(statearr_15303_15329[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15330 = state_15265;
state_15265 = G__15330;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13608__auto__ = function(state_15265){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13608__auto____1.call(this,state_15265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13608__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13608__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_15304 = f__13705__auto__.call(null);
(statearr_15304[(6)] = c__13704__auto__);

return statearr_15304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15332 = arguments.length;
switch (G__15332) {
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
var G__15335 = arguments.length;
switch (G__15335) {
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
var G__15338 = arguments.length;
switch (G__15338) {
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
var c__13704__auto___15385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_15362){
var state_val_15363 = (state_15362[(1)]);
if((state_val_15363 === (7))){
var inst_15357 = (state_15362[(2)]);
var state_15362__$1 = state_15362;
var statearr_15364_15386 = state_15362__$1;
(statearr_15364_15386[(2)] = inst_15357);

(statearr_15364_15386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15363 === (1))){
var inst_15339 = null;
var state_15362__$1 = (function (){var statearr_15365 = state_15362;
(statearr_15365[(7)] = inst_15339);

return statearr_15365;
})();
var statearr_15366_15387 = state_15362__$1;
(statearr_15366_15387[(2)] = null);

(statearr_15366_15387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15363 === (4))){
var inst_15342 = (state_15362[(8)]);
var inst_15342__$1 = (state_15362[(2)]);
var inst_15343 = (inst_15342__$1 == null);
var inst_15344 = cljs.core.not.call(null,inst_15343);
var state_15362__$1 = (function (){var statearr_15367 = state_15362;
(statearr_15367[(8)] = inst_15342__$1);

return statearr_15367;
})();
if(inst_15344){
var statearr_15368_15388 = state_15362__$1;
(statearr_15368_15388[(1)] = (5));

} else {
var statearr_15369_15389 = state_15362__$1;
(statearr_15369_15389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15363 === (6))){
var state_15362__$1 = state_15362;
var statearr_15370_15390 = state_15362__$1;
(statearr_15370_15390[(2)] = null);

(statearr_15370_15390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15363 === (3))){
var inst_15359 = (state_15362[(2)]);
var inst_15360 = cljs.core.async.close_BANG_.call(null,out);
var state_15362__$1 = (function (){var statearr_15371 = state_15362;
(statearr_15371[(9)] = inst_15359);

return statearr_15371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15362__$1,inst_15360);
} else {
if((state_val_15363 === (2))){
var state_15362__$1 = state_15362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15362__$1,(4),ch);
} else {
if((state_val_15363 === (11))){
var inst_15342 = (state_15362[(8)]);
var inst_15351 = (state_15362[(2)]);
var inst_15339 = inst_15342;
var state_15362__$1 = (function (){var statearr_15372 = state_15362;
(statearr_15372[(7)] = inst_15339);

(statearr_15372[(10)] = inst_15351);

return statearr_15372;
})();
var statearr_15373_15391 = state_15362__$1;
(statearr_15373_15391[(2)] = null);

(statearr_15373_15391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15363 === (9))){
var inst_15342 = (state_15362[(8)]);
var state_15362__$1 = state_15362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15362__$1,(11),out,inst_15342);
} else {
if((state_val_15363 === (5))){
var inst_15339 = (state_15362[(7)]);
var inst_15342 = (state_15362[(8)]);
var inst_15346 = cljs.core._EQ_.call(null,inst_15342,inst_15339);
var state_15362__$1 = state_15362;
if(inst_15346){
var statearr_15375_15392 = state_15362__$1;
(statearr_15375_15392[(1)] = (8));

} else {
var statearr_15376_15393 = state_15362__$1;
(statearr_15376_15393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15363 === (10))){
var inst_15354 = (state_15362[(2)]);
var state_15362__$1 = state_15362;
var statearr_15377_15394 = state_15362__$1;
(statearr_15377_15394[(2)] = inst_15354);

(statearr_15377_15394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15363 === (8))){
var inst_15339 = (state_15362[(7)]);
var tmp15374 = inst_15339;
var inst_15339__$1 = tmp15374;
var state_15362__$1 = (function (){var statearr_15378 = state_15362;
(statearr_15378[(7)] = inst_15339__$1);

return statearr_15378;
})();
var statearr_15379_15395 = state_15362__$1;
(statearr_15379_15395[(2)] = null);

(statearr_15379_15395[(1)] = (2));


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
var cljs$core$async$state_machine__13608__auto__ = null;
var cljs$core$async$state_machine__13608__auto____0 = (function (){
var statearr_15380 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15380[(0)] = cljs$core$async$state_machine__13608__auto__);

(statearr_15380[(1)] = (1));

return statearr_15380;
});
var cljs$core$async$state_machine__13608__auto____1 = (function (state_15362){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_15362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e15381){if((e15381 instanceof Object)){
var ex__13611__auto__ = e15381;
var statearr_15382_15396 = state_15362;
(statearr_15382_15396[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15397 = state_15362;
state_15362 = G__15397;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$state_machine__13608__auto__ = function(state_15362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13608__auto____1.call(this,state_15362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13608__auto____0;
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13608__auto____1;
return cljs$core$async$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_15383 = f__13705__auto__.call(null);
(statearr_15383[(6)] = c__13704__auto___15385);

return statearr_15383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15399 = arguments.length;
switch (G__15399) {
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
var c__13704__auto___15465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_15437){
var state_val_15438 = (state_15437[(1)]);
if((state_val_15438 === (7))){
var inst_15433 = (state_15437[(2)]);
var state_15437__$1 = state_15437;
var statearr_15439_15466 = state_15437__$1;
(statearr_15439_15466[(2)] = inst_15433);

(statearr_15439_15466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (1))){
var inst_15400 = (new Array(n));
var inst_15401 = inst_15400;
var inst_15402 = (0);
var state_15437__$1 = (function (){var statearr_15440 = state_15437;
(statearr_15440[(7)] = inst_15401);

(statearr_15440[(8)] = inst_15402);

return statearr_15440;
})();
var statearr_15441_15467 = state_15437__$1;
(statearr_15441_15467[(2)] = null);

(statearr_15441_15467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (4))){
var inst_15405 = (state_15437[(9)]);
var inst_15405__$1 = (state_15437[(2)]);
var inst_15406 = (inst_15405__$1 == null);
var inst_15407 = cljs.core.not.call(null,inst_15406);
var state_15437__$1 = (function (){var statearr_15442 = state_15437;
(statearr_15442[(9)] = inst_15405__$1);

return statearr_15442;
})();
if(inst_15407){
var statearr_15443_15468 = state_15437__$1;
(statearr_15443_15468[(1)] = (5));

} else {
var statearr_15444_15469 = state_15437__$1;
(statearr_15444_15469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (15))){
var inst_15427 = (state_15437[(2)]);
var state_15437__$1 = state_15437;
var statearr_15445_15470 = state_15437__$1;
(statearr_15445_15470[(2)] = inst_15427);

(statearr_15445_15470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (13))){
var state_15437__$1 = state_15437;
var statearr_15446_15471 = state_15437__$1;
(statearr_15446_15471[(2)] = null);

(statearr_15446_15471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (6))){
var inst_15402 = (state_15437[(8)]);
var inst_15423 = (inst_15402 > (0));
var state_15437__$1 = state_15437;
if(cljs.core.truth_(inst_15423)){
var statearr_15447_15472 = state_15437__$1;
(statearr_15447_15472[(1)] = (12));

} else {
var statearr_15448_15473 = state_15437__$1;
(statearr_15448_15473[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (3))){
var inst_15435 = (state_15437[(2)]);
var state_15437__$1 = state_15437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15437__$1,inst_15435);
} else {
if((state_val_15438 === (12))){
var inst_15401 = (state_15437[(7)]);
var inst_15425 = cljs.core.vec.call(null,inst_15401);
var state_15437__$1 = state_15437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15437__$1,(15),out,inst_15425);
} else {
if((state_val_15438 === (2))){
var state_15437__$1 = state_15437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15437__$1,(4),ch);
} else {
if((state_val_15438 === (11))){
var inst_15417 = (state_15437[(2)]);
var inst_15418 = (new Array(n));
var inst_15401 = inst_15418;
var inst_15402 = (0);
var state_15437__$1 = (function (){var statearr_15449 = state_15437;
(statearr_15449[(10)] = inst_15417);

(statearr_15449[(7)] = inst_15401);

(statearr_15449[(8)] = inst_15402);

return statearr_15449;
})();
var statearr_15450_15474 = state_15437__$1;
(statearr_15450_15474[(2)] = null);

(statearr_15450_15474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (9))){
var inst_15401 = (state_15437[(7)]);
var inst_15415 = cljs.core.vec.call(null,inst_15401);
var state_15437__$1 = state_15437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15437__$1,(11),out,inst_15415);
} else {
if((state_val_15438 === (5))){
var inst_15401 = (state_15437[(7)]);
var inst_15402 = (state_15437[(8)]);
var inst_15410 = (state_15437[(11)]);
var inst_15405 = (state_15437[(9)]);
var inst_15409 = (inst_15401[inst_15402] = inst_15405);
var inst_15410__$1 = (inst_15402 + (1));
var inst_15411 = (inst_15410__$1 < n);
var state_15437__$1 = (function (){var statearr_15451 = state_15437;
(statearr_15451[(12)] = inst_15409);

(statearr_15451[(11)] = inst_15410__$1);

return statearr_15451;
})();
if(cljs.core.truth_(inst_15411)){
var statearr_15452_15475 = state_15437__$1;
(statearr_15452_15475[(1)] = (8));

} else {
var statearr_15453_15476 = state_15437__$1;
(statearr_15453_15476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (14))){
var inst_15430 = (state_15437[(2)]);
var inst_15431 = cljs.core.async.close_BANG_.call(null,out);
var state_15437__$1 = (function (){var statearr_15455 = state_15437;
(statearr_15455[(13)] = inst_15430);

return statearr_15455;
})();
var statearr_15456_15477 = state_15437__$1;
(statearr_15456_15477[(2)] = inst_15431);

(statearr_15456_15477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (10))){
var inst_15421 = (state_15437[(2)]);
var state_15437__$1 = state_15437;
var statearr_15457_15478 = state_15437__$1;
(statearr_15457_15478[(2)] = inst_15421);

(statearr_15457_15478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15438 === (8))){
var inst_15401 = (state_15437[(7)]);
var inst_15410 = (state_15437[(11)]);
var tmp15454 = inst_15401;
var inst_15401__$1 = tmp15454;
var inst_15402 = inst_15410;
var state_15437__$1 = (function (){var statearr_15458 = state_15437;
(statearr_15458[(7)] = inst_15401__$1);

(statearr_15458[(8)] = inst_15402);

return statearr_15458;
})();
var statearr_15459_15479 = state_15437__$1;
(statearr_15459_15479[(2)] = null);

(statearr_15459_15479[(1)] = (2));


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
var cljs$core$async$state_machine__13608__auto__ = null;
var cljs$core$async$state_machine__13608__auto____0 = (function (){
var statearr_15460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15460[(0)] = cljs$core$async$state_machine__13608__auto__);

(statearr_15460[(1)] = (1));

return statearr_15460;
});
var cljs$core$async$state_machine__13608__auto____1 = (function (state_15437){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_15437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e15461){if((e15461 instanceof Object)){
var ex__13611__auto__ = e15461;
var statearr_15462_15480 = state_15437;
(statearr_15462_15480[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15481 = state_15437;
state_15437 = G__15481;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$state_machine__13608__auto__ = function(state_15437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13608__auto____1.call(this,state_15437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13608__auto____0;
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13608__auto____1;
return cljs$core$async$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_15463 = f__13705__auto__.call(null);
(statearr_15463[(6)] = c__13704__auto___15465);

return statearr_15463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15483 = arguments.length;
switch (G__15483) {
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
var c__13704__auto___15560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_15528){
var state_val_15529 = (state_15528[(1)]);
if((state_val_15529 === (7))){
var inst_15524 = (state_15528[(2)]);
var state_15528__$1 = state_15528;
var statearr_15530_15561 = state_15528__$1;
(statearr_15530_15561[(2)] = inst_15524);

(statearr_15530_15561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (1))){
var inst_15484 = [];
var inst_15485 = inst_15484;
var inst_15486 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15528__$1 = (function (){var statearr_15531 = state_15528;
(statearr_15531[(7)] = inst_15486);

(statearr_15531[(8)] = inst_15485);

return statearr_15531;
})();
var statearr_15532_15562 = state_15528__$1;
(statearr_15532_15562[(2)] = null);

(statearr_15532_15562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (4))){
var inst_15489 = (state_15528[(9)]);
var inst_15489__$1 = (state_15528[(2)]);
var inst_15490 = (inst_15489__$1 == null);
var inst_15491 = cljs.core.not.call(null,inst_15490);
var state_15528__$1 = (function (){var statearr_15533 = state_15528;
(statearr_15533[(9)] = inst_15489__$1);

return statearr_15533;
})();
if(inst_15491){
var statearr_15534_15563 = state_15528__$1;
(statearr_15534_15563[(1)] = (5));

} else {
var statearr_15535_15564 = state_15528__$1;
(statearr_15535_15564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (15))){
var inst_15485 = (state_15528[(8)]);
var inst_15516 = cljs.core.vec.call(null,inst_15485);
var state_15528__$1 = state_15528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15528__$1,(18),out,inst_15516);
} else {
if((state_val_15529 === (13))){
var inst_15511 = (state_15528[(2)]);
var state_15528__$1 = state_15528;
var statearr_15536_15565 = state_15528__$1;
(statearr_15536_15565[(2)] = inst_15511);

(statearr_15536_15565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (6))){
var inst_15485 = (state_15528[(8)]);
var inst_15513 = inst_15485.length;
var inst_15514 = (inst_15513 > (0));
var state_15528__$1 = state_15528;
if(cljs.core.truth_(inst_15514)){
var statearr_15537_15566 = state_15528__$1;
(statearr_15537_15566[(1)] = (15));

} else {
var statearr_15538_15567 = state_15528__$1;
(statearr_15538_15567[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (17))){
var inst_15521 = (state_15528[(2)]);
var inst_15522 = cljs.core.async.close_BANG_.call(null,out);
var state_15528__$1 = (function (){var statearr_15539 = state_15528;
(statearr_15539[(10)] = inst_15521);

return statearr_15539;
})();
var statearr_15540_15568 = state_15528__$1;
(statearr_15540_15568[(2)] = inst_15522);

(statearr_15540_15568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (3))){
var inst_15526 = (state_15528[(2)]);
var state_15528__$1 = state_15528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15528__$1,inst_15526);
} else {
if((state_val_15529 === (12))){
var inst_15485 = (state_15528[(8)]);
var inst_15504 = cljs.core.vec.call(null,inst_15485);
var state_15528__$1 = state_15528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15528__$1,(14),out,inst_15504);
} else {
if((state_val_15529 === (2))){
var state_15528__$1 = state_15528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15528__$1,(4),ch);
} else {
if((state_val_15529 === (11))){
var inst_15493 = (state_15528[(11)]);
var inst_15485 = (state_15528[(8)]);
var inst_15489 = (state_15528[(9)]);
var inst_15501 = inst_15485.push(inst_15489);
var tmp15541 = inst_15485;
var inst_15485__$1 = tmp15541;
var inst_15486 = inst_15493;
var state_15528__$1 = (function (){var statearr_15542 = state_15528;
(statearr_15542[(7)] = inst_15486);

(statearr_15542[(8)] = inst_15485__$1);

(statearr_15542[(12)] = inst_15501);

return statearr_15542;
})();
var statearr_15543_15569 = state_15528__$1;
(statearr_15543_15569[(2)] = null);

(statearr_15543_15569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (9))){
var inst_15486 = (state_15528[(7)]);
var inst_15497 = cljs.core.keyword_identical_QMARK_.call(null,inst_15486,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15528__$1 = state_15528;
var statearr_15544_15570 = state_15528__$1;
(statearr_15544_15570[(2)] = inst_15497);

(statearr_15544_15570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (5))){
var inst_15486 = (state_15528[(7)]);
var inst_15493 = (state_15528[(11)]);
var inst_15494 = (state_15528[(13)]);
var inst_15489 = (state_15528[(9)]);
var inst_15493__$1 = f.call(null,inst_15489);
var inst_15494__$1 = cljs.core._EQ_.call(null,inst_15493__$1,inst_15486);
var state_15528__$1 = (function (){var statearr_15545 = state_15528;
(statearr_15545[(11)] = inst_15493__$1);

(statearr_15545[(13)] = inst_15494__$1);

return statearr_15545;
})();
if(inst_15494__$1){
var statearr_15546_15571 = state_15528__$1;
(statearr_15546_15571[(1)] = (8));

} else {
var statearr_15547_15572 = state_15528__$1;
(statearr_15547_15572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (14))){
var inst_15493 = (state_15528[(11)]);
var inst_15489 = (state_15528[(9)]);
var inst_15506 = (state_15528[(2)]);
var inst_15507 = [];
var inst_15508 = inst_15507.push(inst_15489);
var inst_15485 = inst_15507;
var inst_15486 = inst_15493;
var state_15528__$1 = (function (){var statearr_15548 = state_15528;
(statearr_15548[(7)] = inst_15486);

(statearr_15548[(14)] = inst_15506);

(statearr_15548[(8)] = inst_15485);

(statearr_15548[(15)] = inst_15508);

return statearr_15548;
})();
var statearr_15549_15573 = state_15528__$1;
(statearr_15549_15573[(2)] = null);

(statearr_15549_15573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (16))){
var state_15528__$1 = state_15528;
var statearr_15550_15574 = state_15528__$1;
(statearr_15550_15574[(2)] = null);

(statearr_15550_15574[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (10))){
var inst_15499 = (state_15528[(2)]);
var state_15528__$1 = state_15528;
if(cljs.core.truth_(inst_15499)){
var statearr_15551_15575 = state_15528__$1;
(statearr_15551_15575[(1)] = (11));

} else {
var statearr_15552_15576 = state_15528__$1;
(statearr_15552_15576[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (18))){
var inst_15518 = (state_15528[(2)]);
var state_15528__$1 = state_15528;
var statearr_15553_15577 = state_15528__$1;
(statearr_15553_15577[(2)] = inst_15518);

(statearr_15553_15577[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15529 === (8))){
var inst_15494 = (state_15528[(13)]);
var state_15528__$1 = state_15528;
var statearr_15554_15578 = state_15528__$1;
(statearr_15554_15578[(2)] = inst_15494);

(statearr_15554_15578[(1)] = (10));


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
var cljs$core$async$state_machine__13608__auto__ = null;
var cljs$core$async$state_machine__13608__auto____0 = (function (){
var statearr_15555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15555[(0)] = cljs$core$async$state_machine__13608__auto__);

(statearr_15555[(1)] = (1));

return statearr_15555;
});
var cljs$core$async$state_machine__13608__auto____1 = (function (state_15528){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_15528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e15556){if((e15556 instanceof Object)){
var ex__13611__auto__ = e15556;
var statearr_15557_15579 = state_15528;
(statearr_15557_15579[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15580 = state_15528;
state_15528 = G__15580;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
cljs$core$async$state_machine__13608__auto__ = function(state_15528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13608__auto____1.call(this,state_15528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13608__auto____0;
cljs$core$async$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13608__auto____1;
return cljs$core$async$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_15558 = f__13705__auto__.call(null);
(statearr_15558[(6)] = c__13704__auto___15560);

return statearr_15558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map

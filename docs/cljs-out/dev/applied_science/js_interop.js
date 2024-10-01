// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('applied_science.js_interop');
goog.require('cljs.core');
goog.require('goog.reflect');
goog.require('cljs.core');
goog.require('applied_science.js_interop.impl');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5772__auto__ = [];
var len__5766__auto___17299 = arguments.length;
var i__5767__auto___17300 = (0);
while(true){
if((i__5767__auto___17300 < len__5766__auto___17299)){
args__5772__auto__.push((arguments[i__5767__auto___17300]));

var G__17301 = (i__5767__auto___17300 + (1));
i__5767__auto___17300 = G__17301;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__17292_17302 = keyvals;
var vec__17293_17303 = G__17292_17302;
var seq__17294_17304 = cljs.core.seq.call(null,vec__17293_17303);
var first__17295_17305 = cljs.core.first.call(null,seq__17294_17304);
var seq__17294_17306__$1 = cljs.core.next.call(null,seq__17294_17304);
var k_17307 = first__17295_17305;
var first__17295_17308__$1 = cljs.core.first.call(null,seq__17294_17306__$1);
var seq__17294_17309__$2 = cljs.core.next.call(null,seq__17294_17306__$1);
var v_17310 = first__17295_17308__$1;
var keyvals_17311__$1 = seq__17294_17309__$2;
var G__17292_17312__$1 = G__17292_17302;
while(true){
var vec__17296_17313 = G__17292_17312__$1;
var seq__17297_17314 = cljs.core.seq.call(null,vec__17296_17313);
var first__17298_17315 = cljs.core.first.call(null,seq__17297_17314);
var seq__17297_17316__$1 = cljs.core.next.call(null,seq__17297_17314);
var k_17317__$1 = first__17298_17315;
var first__17298_17318__$1 = cljs.core.first.call(null,seq__17297_17316__$1);
var seq__17297_17319__$2 = cljs.core.next.call(null,seq__17297_17316__$1);
var v_17320__$1 = first__17298_17318__$1;
var keyvals_17321__$2 = seq__17297_17319__$2;
(obj[applied_science.js_interop.impl.wrap_key.call(null,k_17317__$1)] = v_17320__$1);

if(keyvals_17321__$2){
var G__17322 = keyvals_17321__$2;
G__17292_17312__$1 = G__17322;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq17287){
var G__17288 = cljs.core.first.call(null,seq17287);
var seq17287__$1 = cljs.core.next.call(null,seq17287);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17288,seq17287__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key.call(null,k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__17324 = arguments.length;
switch (G__17324) {
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj17325 = obj;
var k17326 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj17325,k17326)){
return (obj17325[k17326]);
} else {
return null;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj17327 = obj;
var k17328 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj17327,k17328)){
return (obj17327[k17328]);
} else {
return not_found;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__17331 = arguments.length;
switch (G__17331) {
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj,applied_science.js_interop.impl.wrap_key.call(null,k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj17333 = self__.obj;
var k17334 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj17333,k17334)){
return (obj17333[k17334]);
} else {
return null;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj17335 = self__.obj;
var k17336 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj17335,k17336)){
return (obj17335[k17336]);
} else {
return not_found;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___17349 = arguments.length;
var i__5767__auto___17350 = (0);
while(true){
if((i__5767__auto___17350 < len__5766__auto___17349)){
args__5772__auto__.push((arguments[i__5767__auto___17350]));

var G__17351 = (i__5767__auto___17350 + (1));
i__5767__auto___17350 = G__17351;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__17342 = keyvals;
var vec__17343 = G__17342;
var seq__17344 = cljs.core.seq.call(null,vec__17343);
var first__17345 = cljs.core.first.call(null,seq__17344);
var seq__17344__$1 = cljs.core.next.call(null,seq__17344);
var k = first__17345;
var first__17345__$1 = cljs.core.first.call(null,seq__17344__$1);
var seq__17344__$2 = cljs.core.next.call(null,seq__17344__$1);
var v = first__17345__$1;
var kvs = seq__17344__$2;
var G__17342__$1 = G__17342;
while(true){
var vec__17346 = G__17342__$1;
var seq__17347 = cljs.core.seq.call(null,vec__17346);
var first__17348 = cljs.core.first.call(null,seq__17347);
var seq__17347__$1 = cljs.core.next.call(null,seq__17347);
var k__$1 = first__17348;
var first__17348__$1 = cljs.core.first.call(null,seq__17347__$1);
var seq__17347__$2 = cljs.core.next.call(null,seq__17347__$1);
var v__$1 = first__17348__$1;
var kvs__$1 = seq__17347__$2;
applied_science.js_interop.unchecked_set.call(null,obj__$1,k__$1,v__$1);

if(kvs__$1){
var G__17352 = kvs__$1;
G__17342__$1 = G__17352;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq17337){
var G__17338 = cljs.core.first.call(null,seq17337);
var seq17337__$1 = cljs.core.next.call(null,seq17337);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17338,seq17337__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___17357 = arguments.length;
var i__5767__auto___17358 = (0);
while(true){
if((i__5767__auto___17358 < len__5766__auto___17357)){
args__5772__auto__.push((arguments[i__5767__auto___17358]));

var G__17359 = (i__5767__auto___17358 + (1));
i__5767__auto___17358 = G__17359;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key.call(null,k);
var v = cljs.core.apply.call(null,f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq17353){
var G__17354 = cljs.core.first.call(null,seq17353);
var seq17353__$1 = cljs.core.next.call(null,seq17353);
var G__17355 = cljs.core.first.call(null,seq17353__$1);
var seq17353__$2 = cljs.core.next.call(null,seq17353__$1);
var G__17356 = cljs.core.first.call(null,seq17353__$2);
var seq17353__$3 = cljs.core.next.call(null,seq17353__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17354,G__17355,G__17356,seq17353__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___17364 = arguments.length;
var i__5767__auto___17365 = (0);
while(true){
if((i__5767__auto___17365 < len__5766__auto___17364)){
args__5772__auto__.push((arguments[i__5767__auto___17365]));

var G__17366 = (i__5767__auto___17365 + (1));
i__5767__auto___17365 = G__17366;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq17360){
var G__17361 = cljs.core.first.call(null,seq17360);
var seq17360__$1 = cljs.core.next.call(null,seq17360);
var G__17362 = cljs.core.first.call(null,seq17360__$1);
var seq17360__$2 = cljs.core.next.call(null,seq17360__$1);
var G__17363 = cljs.core.first.call(null,seq17360__$2);
var seq17360__$3 = cljs.core.next.call(null,seq17360__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17361,G__17362,G__17363,seq17360__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend o other)
 *   (j/extend o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__17371 = arguments.length;
switch (G__17371) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___17377 = arguments.length;
var i__5767__auto___17378 = (0);
while(true){
if((i__5767__auto___17378 < len__5766__auto___17377)){
args_arr__5791__auto__.push((arguments[i__5767__auto___17378]));

var G__17379 = (i__5767__auto___17378 + (1));
i__5767__auto___17378 = G__17379;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__17372_17380 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,x));
var chunk__17373_17381 = null;
var count__17374_17382 = (0);
var i__17375_17383 = (0);
while(true){
if((i__17375_17383 < count__17374_17382)){
var k_17384 = cljs.core._nth.call(null,chunk__17373_17381,i__17375_17383);
applied_science.js_interop.unchecked_set.call(null,obj__$1,k_17384,applied_science.js_interop.unchecked_get.call(null,x,k_17384));


var G__17385 = seq__17372_17380;
var G__17386 = chunk__17373_17381;
var G__17387 = count__17374_17382;
var G__17388 = (i__17375_17383 + (1));
seq__17372_17380 = G__17385;
chunk__17373_17381 = G__17386;
count__17374_17382 = G__17387;
i__17375_17383 = G__17388;
continue;
} else {
var temp__5804__auto___17389 = cljs.core.seq.call(null,seq__17372_17380);
if(temp__5804__auto___17389){
var seq__17372_17390__$1 = temp__5804__auto___17389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17372_17390__$1)){
var c__5565__auto___17391 = cljs.core.chunk_first.call(null,seq__17372_17390__$1);
var G__17392 = cljs.core.chunk_rest.call(null,seq__17372_17390__$1);
var G__17393 = c__5565__auto___17391;
var G__17394 = cljs.core.count.call(null,c__5565__auto___17391);
var G__17395 = (0);
seq__17372_17380 = G__17392;
chunk__17373_17381 = G__17393;
count__17374_17382 = G__17394;
i__17375_17383 = G__17395;
continue;
} else {
var k_17396 = cljs.core.first.call(null,seq__17372_17390__$1);
applied_science.js_interop.unchecked_set.call(null,obj__$1,k_17396,applied_science.js_interop.unchecked_get.call(null,x,k_17396));


var G__17397 = cljs.core.next.call(null,seq__17372_17390__$1);
var G__17398 = null;
var G__17399 = (0);
var G__17400 = (0);
seq__17372_17380 = G__17397;
chunk__17373_17381 = G__17398;
count__17374_17382 = G__17399;
i__17375_17383 = G__17400;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.call(null,applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.call(null,obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq17368){
var G__17369 = cljs.core.first.call(null,seq17368);
var seq17368__$1 = cljs.core.next.call(null,seq17368);
var G__17370 = cljs.core.first.call(null,seq17368__$1);
var seq17368__$2 = cljs.core.next.call(null,seq17368__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17369,G__17370,seq17368__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__17401 = array;
G__17401.push(x);

return G__17401;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__17402 = array;
G__17402.unshift(x);

return G__17402;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__5772__auto__ = [];
var len__5766__auto___17408 = arguments.length;
var i__5767__auto___17409 = (0);
while(true){
if((i__5767__auto___17409 < len__5766__auto___17408)){
args__5772__auto__.push((arguments[i__5767__auto___17409]));

var G__17410 = (i__5767__auto___17409 + (1));
i__5767__auto___17409 = G__17410;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj17406 = obj;
var k17407 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj17406,k17407)){
return (obj17406[k17407]);
} else {
return null;
}
})().apply(obj,cljs.core.to_array.call(null,args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq17403){
var G__17404 = cljs.core.first.call(null,seq17403);
var seq17403__$1 = cljs.core.next.call(null,seq17403);
var G__17405 = cljs.core.first.call(null,seq17403__$1);
var seq17403__$2 = cljs.core.next.call(null,seq17403__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17404,G__17405,seq17403__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj17411 = obj;
var k17412 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj17411,k17412)){
return (obj17411[k17412]);
} else {
return null;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__5772__auto__ = [];
var len__5766__auto___17416 = arguments.length;
var i__5767__auto___17417 = (0);
while(true){
if((i__5767__auto___17417 < len__5766__auto___17416)){
args__5772__auto__.push((arguments[i__5767__auto___17417]));

var G__17418 = (i__5767__auto___17417 + (1));
i__5767__auto___17417 = G__17418;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array.call(null,args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq17413){
var G__17414 = cljs.core.first.call(null,seq17413);
var seq17413__$1 = cljs.core.next.call(null,seq17413);
var G__17415 = cljs.core.first.call(null,seq17413__$1);
var seq17413__$2 = cljs.core.next.call(null,seq17413__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17414,G__17415,seq17413__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_.call(null,obj,cljs.core.mapv.call(null,applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__5772__auto__ = [];
var len__5766__auto___17454 = arguments.length;
var i__5767__auto___17455 = (0);
while(true){
if((i__5767__auto___17455 < len__5766__auto___17454)){
args__5772__auto__.push((arguments[i__5767__auto___17455]));

var G__17456 = (i__5767__auto___17455 + (1));
i__5767__auto___17455 = G__17456;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__17422_17457 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),keyvals));
var chunk__17423_17458 = null;
var count__17424_17459 = (0);
var i__17425_17460 = (0);
while(true){
if((i__17425_17460 < count__17424_17459)){
var vec__17440_17461 = cljs.core._nth.call(null,chunk__17423_17458,i__17425_17460);
var k_17462 = cljs.core.nth.call(null,vec__17440_17461,(0),null);
var v_17463 = cljs.core.nth.call(null,vec__17440_17461,(1),null);
var obj17443_17464 = obj;
var obj17444_17465 = (((!((obj17443_17464 == null))))?obj17443_17464:({}));
(obj17444_17465[applied_science.js_interop.impl.wrap_key.call(null,k_17462)] = v_17463);



var G__17466 = seq__17422_17457;
var G__17467 = chunk__17423_17458;
var G__17468 = count__17424_17459;
var G__17469 = (i__17425_17460 + (1));
seq__17422_17457 = G__17466;
chunk__17423_17458 = G__17467;
count__17424_17459 = G__17468;
i__17425_17460 = G__17469;
continue;
} else {
var temp__5804__auto___17470 = cljs.core.seq.call(null,seq__17422_17457);
if(temp__5804__auto___17470){
var seq__17422_17471__$1 = temp__5804__auto___17470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17422_17471__$1)){
var c__5565__auto___17472 = cljs.core.chunk_first.call(null,seq__17422_17471__$1);
var G__17473 = cljs.core.chunk_rest.call(null,seq__17422_17471__$1);
var G__17474 = c__5565__auto___17472;
var G__17475 = cljs.core.count.call(null,c__5565__auto___17472);
var G__17476 = (0);
seq__17422_17457 = G__17473;
chunk__17423_17458 = G__17474;
count__17424_17459 = G__17475;
i__17425_17460 = G__17476;
continue;
} else {
var vec__17447_17477 = cljs.core.first.call(null,seq__17422_17471__$1);
var k_17478 = cljs.core.nth.call(null,vec__17447_17477,(0),null);
var v_17479 = cljs.core.nth.call(null,vec__17447_17477,(1),null);
var obj17450_17480 = obj;
var obj17451_17481 = (((!((obj17450_17480 == null))))?obj17450_17480:({}));
(obj17451_17481[applied_science.js_interop.impl.wrap_key.call(null,k_17478)] = v_17479);



var G__17482 = cljs.core.next.call(null,seq__17422_17471__$1);
var G__17483 = null;
var G__17484 = (0);
var G__17485 = (0);
seq__17422_17457 = G__17482;
chunk__17423_17458 = G__17483;
count__17424_17459 = G__17484;
i__17425_17460 = G__17485;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq17419){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17419));
}));


//# sourceMappingURL=js_interop.js.map

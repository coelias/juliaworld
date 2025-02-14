// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('applied_science.js_interop');
goog.require('cljs.core');
goog.require('goog.reflect');
goog.require('cljs.core');
goog.require('applied_science.js_interop.impl');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5772__auto__ = [];
var len__5766__auto___20121 = arguments.length;
var i__5767__auto___20122 = (0);
while(true){
if((i__5767__auto___20122 < len__5766__auto___20121)){
args__5772__auto__.push((arguments[i__5767__auto___20122]));

var G__20123 = (i__5767__auto___20122 + (1));
i__5767__auto___20122 = G__20123;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__20114_20124 = keyvals;
var vec__20115_20125 = G__20114_20124;
var seq__20116_20126 = cljs.core.seq.call(null,vec__20115_20125);
var first__20117_20127 = cljs.core.first.call(null,seq__20116_20126);
var seq__20116_20128__$1 = cljs.core.next.call(null,seq__20116_20126);
var k_20129 = first__20117_20127;
var first__20117_20130__$1 = cljs.core.first.call(null,seq__20116_20128__$1);
var seq__20116_20131__$2 = cljs.core.next.call(null,seq__20116_20128__$1);
var v_20132 = first__20117_20130__$1;
var keyvals_20133__$1 = seq__20116_20131__$2;
var G__20114_20134__$1 = G__20114_20124;
while(true){
var vec__20118_20135 = G__20114_20134__$1;
var seq__20119_20136 = cljs.core.seq.call(null,vec__20118_20135);
var first__20120_20137 = cljs.core.first.call(null,seq__20119_20136);
var seq__20119_20138__$1 = cljs.core.next.call(null,seq__20119_20136);
var k_20139__$1 = first__20120_20137;
var first__20120_20140__$1 = cljs.core.first.call(null,seq__20119_20138__$1);
var seq__20119_20141__$2 = cljs.core.next.call(null,seq__20119_20138__$1);
var v_20142__$1 = first__20120_20140__$1;
var keyvals_20143__$2 = seq__20119_20141__$2;
(obj[applied_science.js_interop.impl.wrap_key.call(null,k_20139__$1)] = v_20142__$1);

if(keyvals_20143__$2){
var G__20144 = keyvals_20143__$2;
G__20114_20134__$1 = G__20144;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq20109){
var G__20110 = cljs.core.first.call(null,seq20109);
var seq20109__$1 = cljs.core.next.call(null,seq20109);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20110,seq20109__$1);
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
var G__20146 = arguments.length;
switch (G__20146) {
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
var obj20147 = obj;
var k20148 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20147,k20148)){
return (obj20147[k20148]);
} else {
return null;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj20149 = obj;
var k20150 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20149,k20150)){
return (obj20149[k20150]);
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
var G__20153 = arguments.length;
switch (G__20153) {
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
var obj20155 = self__.obj;
var k20156 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20155,k20156)){
return (obj20155[k20156]);
} else {
return null;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj20157 = self__.obj;
var k20158 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20157,k20158)){
return (obj20157[k20158]);
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
var len__5766__auto___20171 = arguments.length;
var i__5767__auto___20172 = (0);
while(true){
if((i__5767__auto___20172 < len__5766__auto___20171)){
args__5772__auto__.push((arguments[i__5767__auto___20172]));

var G__20173 = (i__5767__auto___20172 + (1));
i__5767__auto___20172 = G__20173;
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
var G__20164 = keyvals;
var vec__20165 = G__20164;
var seq__20166 = cljs.core.seq.call(null,vec__20165);
var first__20167 = cljs.core.first.call(null,seq__20166);
var seq__20166__$1 = cljs.core.next.call(null,seq__20166);
var k = first__20167;
var first__20167__$1 = cljs.core.first.call(null,seq__20166__$1);
var seq__20166__$2 = cljs.core.next.call(null,seq__20166__$1);
var v = first__20167__$1;
var kvs = seq__20166__$2;
var G__20164__$1 = G__20164;
while(true){
var vec__20168 = G__20164__$1;
var seq__20169 = cljs.core.seq.call(null,vec__20168);
var first__20170 = cljs.core.first.call(null,seq__20169);
var seq__20169__$1 = cljs.core.next.call(null,seq__20169);
var k__$1 = first__20170;
var first__20170__$1 = cljs.core.first.call(null,seq__20169__$1);
var seq__20169__$2 = cljs.core.next.call(null,seq__20169__$1);
var v__$1 = first__20170__$1;
var kvs__$1 = seq__20169__$2;
applied_science.js_interop.unchecked_set.call(null,obj__$1,k__$1,v__$1);

if(kvs__$1){
var G__20174 = kvs__$1;
G__20164__$1 = G__20174;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq20159){
var G__20160 = cljs.core.first.call(null,seq20159);
var seq20159__$1 = cljs.core.next.call(null,seq20159);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20160,seq20159__$1);
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
var len__5766__auto___20179 = arguments.length;
var i__5767__auto___20180 = (0);
while(true){
if((i__5767__auto___20180 < len__5766__auto___20179)){
args__5772__auto__.push((arguments[i__5767__auto___20180]));

var G__20181 = (i__5767__auto___20180 + (1));
i__5767__auto___20180 = G__20181;
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
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq20175){
var G__20176 = cljs.core.first.call(null,seq20175);
var seq20175__$1 = cljs.core.next.call(null,seq20175);
var G__20177 = cljs.core.first.call(null,seq20175__$1);
var seq20175__$2 = cljs.core.next.call(null,seq20175__$1);
var G__20178 = cljs.core.first.call(null,seq20175__$2);
var seq20175__$3 = cljs.core.next.call(null,seq20175__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20176,G__20177,G__20178,seq20175__$3);
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
var len__5766__auto___20186 = arguments.length;
var i__5767__auto___20187 = (0);
while(true){
if((i__5767__auto___20187 < len__5766__auto___20186)){
args__5772__auto__.push((arguments[i__5767__auto___20187]));

var G__20188 = (i__5767__auto___20187 + (1));
i__5767__auto___20187 = G__20188;
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
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq20182){
var G__20183 = cljs.core.first.call(null,seq20182);
var seq20182__$1 = cljs.core.next.call(null,seq20182);
var G__20184 = cljs.core.first.call(null,seq20182__$1);
var seq20182__$2 = cljs.core.next.call(null,seq20182__$1);
var G__20185 = cljs.core.first.call(null,seq20182__$2);
var seq20182__$3 = cljs.core.next.call(null,seq20182__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20183,G__20184,G__20185,seq20182__$3);
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
var G__20193 = arguments.length;
switch (G__20193) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___20199 = arguments.length;
var i__5767__auto___20200 = (0);
while(true){
if((i__5767__auto___20200 < len__5766__auto___20199)){
args_arr__5791__auto__.push((arguments[i__5767__auto___20200]));

var G__20201 = (i__5767__auto___20200 + (1));
i__5767__auto___20200 = G__20201;
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
var seq__20194_20202 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,x));
var chunk__20195_20203 = null;
var count__20196_20204 = (0);
var i__20197_20205 = (0);
while(true){
if((i__20197_20205 < count__20196_20204)){
var k_20206 = cljs.core._nth.call(null,chunk__20195_20203,i__20197_20205);
applied_science.js_interop.unchecked_set.call(null,obj__$1,k_20206,applied_science.js_interop.unchecked_get.call(null,x,k_20206));


var G__20207 = seq__20194_20202;
var G__20208 = chunk__20195_20203;
var G__20209 = count__20196_20204;
var G__20210 = (i__20197_20205 + (1));
seq__20194_20202 = G__20207;
chunk__20195_20203 = G__20208;
count__20196_20204 = G__20209;
i__20197_20205 = G__20210;
continue;
} else {
var temp__5804__auto___20211 = cljs.core.seq.call(null,seq__20194_20202);
if(temp__5804__auto___20211){
var seq__20194_20212__$1 = temp__5804__auto___20211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20194_20212__$1)){
var c__5565__auto___20213 = cljs.core.chunk_first.call(null,seq__20194_20212__$1);
var G__20214 = cljs.core.chunk_rest.call(null,seq__20194_20212__$1);
var G__20215 = c__5565__auto___20213;
var G__20216 = cljs.core.count.call(null,c__5565__auto___20213);
var G__20217 = (0);
seq__20194_20202 = G__20214;
chunk__20195_20203 = G__20215;
count__20196_20204 = G__20216;
i__20197_20205 = G__20217;
continue;
} else {
var k_20218 = cljs.core.first.call(null,seq__20194_20212__$1);
applied_science.js_interop.unchecked_set.call(null,obj__$1,k_20218,applied_science.js_interop.unchecked_get.call(null,x,k_20218));


var G__20219 = cljs.core.next.call(null,seq__20194_20212__$1);
var G__20220 = null;
var G__20221 = (0);
var G__20222 = (0);
seq__20194_20202 = G__20219;
chunk__20195_20203 = G__20220;
count__20196_20204 = G__20221;
i__20197_20205 = G__20222;
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
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq20190){
var G__20191 = cljs.core.first.call(null,seq20190);
var seq20190__$1 = cljs.core.next.call(null,seq20190);
var G__20192 = cljs.core.first.call(null,seq20190__$1);
var seq20190__$2 = cljs.core.next.call(null,seq20190__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20191,G__20192,seq20190__$2);
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
var G__20223 = array;
G__20223.push(x);

return G__20223;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__20224 = array;
G__20224.unshift(x);

return G__20224;
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
var len__5766__auto___20230 = arguments.length;
var i__5767__auto___20231 = (0);
while(true){
if((i__5767__auto___20231 < len__5766__auto___20230)){
args__5772__auto__.push((arguments[i__5767__auto___20231]));

var G__20232 = (i__5767__auto___20231 + (1));
i__5767__auto___20231 = G__20232;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj20228 = obj;
var k20229 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20228,k20229)){
return (obj20228[k20229]);
} else {
return null;
}
})().apply(obj,cljs.core.to_array.call(null,args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq20225){
var G__20226 = cljs.core.first.call(null,seq20225);
var seq20225__$1 = cljs.core.next.call(null,seq20225);
var G__20227 = cljs.core.first.call(null,seq20225__$1);
var seq20225__$2 = cljs.core.next.call(null,seq20225__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20226,G__20227,seq20225__$2);
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
return (function (){var obj20233 = obj;
var k20234 = applied_science.js_interop.impl.wrap_key.call(null,k);
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20233,k20234)){
return (obj20233[k20234]);
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
var len__5766__auto___20238 = arguments.length;
var i__5767__auto___20239 = (0);
while(true){
if((i__5767__auto___20239 < len__5766__auto___20238)){
args__5772__auto__.push((arguments[i__5767__auto___20239]));

var G__20240 = (i__5767__auto___20239 + (1));
i__5767__auto___20239 = G__20240;
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
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq20235){
var G__20236 = cljs.core.first.call(null,seq20235);
var seq20235__$1 = cljs.core.next.call(null,seq20235);
var G__20237 = cljs.core.first.call(null,seq20235__$1);
var seq20235__$2 = cljs.core.next.call(null,seq20235__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20236,G__20237,seq20235__$2);
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
var len__5766__auto___20276 = arguments.length;
var i__5767__auto___20277 = (0);
while(true){
if((i__5767__auto___20277 < len__5766__auto___20276)){
args__5772__auto__.push((arguments[i__5767__auto___20277]));

var G__20278 = (i__5767__auto___20277 + (1));
i__5767__auto___20277 = G__20278;
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
var seq__20244_20279 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),keyvals));
var chunk__20245_20280 = null;
var count__20246_20281 = (0);
var i__20247_20282 = (0);
while(true){
if((i__20247_20282 < count__20246_20281)){
var vec__20262_20283 = cljs.core._nth.call(null,chunk__20245_20280,i__20247_20282);
var k_20284 = cljs.core.nth.call(null,vec__20262_20283,(0),null);
var v_20285 = cljs.core.nth.call(null,vec__20262_20283,(1),null);
var obj20265_20286 = obj;
var obj20266_20287 = (((!((obj20265_20286 == null))))?obj20265_20286:({}));
(obj20266_20287[applied_science.js_interop.impl.wrap_key.call(null,k_20284)] = v_20285);



var G__20288 = seq__20244_20279;
var G__20289 = chunk__20245_20280;
var G__20290 = count__20246_20281;
var G__20291 = (i__20247_20282 + (1));
seq__20244_20279 = G__20288;
chunk__20245_20280 = G__20289;
count__20246_20281 = G__20290;
i__20247_20282 = G__20291;
continue;
} else {
var temp__5804__auto___20292 = cljs.core.seq.call(null,seq__20244_20279);
if(temp__5804__auto___20292){
var seq__20244_20293__$1 = temp__5804__auto___20292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20244_20293__$1)){
var c__5565__auto___20294 = cljs.core.chunk_first.call(null,seq__20244_20293__$1);
var G__20295 = cljs.core.chunk_rest.call(null,seq__20244_20293__$1);
var G__20296 = c__5565__auto___20294;
var G__20297 = cljs.core.count.call(null,c__5565__auto___20294);
var G__20298 = (0);
seq__20244_20279 = G__20295;
chunk__20245_20280 = G__20296;
count__20246_20281 = G__20297;
i__20247_20282 = G__20298;
continue;
} else {
var vec__20269_20299 = cljs.core.first.call(null,seq__20244_20293__$1);
var k_20300 = cljs.core.nth.call(null,vec__20269_20299,(0),null);
var v_20301 = cljs.core.nth.call(null,vec__20269_20299,(1),null);
var obj20272_20302 = obj;
var obj20273_20303 = (((!((obj20272_20302 == null))))?obj20272_20302:({}));
(obj20273_20303[applied_science.js_interop.impl.wrap_key.call(null,k_20300)] = v_20301);



var G__20304 = cljs.core.next.call(null,seq__20244_20293__$1);
var G__20305 = null;
var G__20306 = (0);
var G__20307 = (0);
seq__20244_20279 = G__20304;
chunk__20245_20280 = G__20305;
count__20246_20281 = G__20306;
i__20247_20282 = G__20307;
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
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq20241){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20241));
}));


//# sourceMappingURL=js_interop.js.map

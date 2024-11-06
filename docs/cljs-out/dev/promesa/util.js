// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('promesa.util');
goog.require('cljs.core');
goog.require('promesa.protocols');
/**
 * Create a handler, mainly for combine two separate functions
 *   into a single callbale.
 */
promesa.util.handler = (function promesa$util$handler(fv,fc){
return (function (v,c){
if(cljs.core.truth_(c)){
return fc.call(null,c);
} else {
return fv.call(null,v);
}
});
});
promesa.util.has_method_QMARK_ = (function promesa$util$has_method_QMARK_(klass,name){
var methods$ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (method){
return method.getName();
})),klass.getDeclaredMethods());
return cljs.core.contains_QMARK_.call(null,methods$,name);
});
promesa.util.maybe_deref = (function promesa$util$maybe_deref(o){
if(cljs.core.delay_QMARK_.call(null,o)){
return cljs.core.deref.call(null,o);
} else {
return o;
}
});
promesa.util.mutex = (function promesa$util$mutex(){
if((typeof promesa !== 'undefined') && (typeof promesa.util !== 'undefined') && (typeof promesa.util.t_promesa$util9957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {promesa.protocols.ILock}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.util.t_promesa$util9957 = (function (meta9958){
this.meta9958 = meta9958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(promesa.util.t_promesa$util9957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9959,meta9958__$1){
var self__ = this;
var _9959__$1 = this;
return (new promesa.util.t_promesa$util9957(meta9958__$1));
}));

(promesa.util.t_promesa$util9957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9959){
var self__ = this;
var _9959__$1 = this;
return self__.meta9958;
}));

(promesa.util.t_promesa$util9957.prototype.promesa$protocols$ILock$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.util.t_promesa$util9957.prototype.promesa$protocols$ILock$_lock_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(promesa.util.t_promesa$util9957.prototype.promesa$protocols$ILock$_unlock_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(promesa.util.t_promesa$util9957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta9958","meta9958",-1643171205,null)], null);
}));

(promesa.util.t_promesa$util9957.cljs$lang$type = true);

(promesa.util.t_promesa$util9957.cljs$lang$ctorStr = "promesa.util/t_promesa$util9957");

(promesa.util.t_promesa$util9957.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"promesa.util/t_promesa$util9957");
}));

/**
 * Positional factory function for promesa.util/t_promesa$util9957.
 */
promesa.util.__GT_t_promesa$util9957 = (function promesa$util$mutex_$___GT_t_promesa$util9957(meta9958){
return (new promesa.util.t_promesa$util9957(meta9958));
});

}

return (new promesa.util.t_promesa$util9957(cljs.core.PersistentArrayMap.EMPTY));
});
promesa.util.try_STAR_ = (function promesa$util$try_STAR_(f,on_error){
try{return f.call(null);
}catch (e9960){var e = e9960;
return on_error.call(null,e);
}});
var ret__5821__auto___9964 = (function (){
promesa.util.ignoring = (function promesa$util$ignoring(var_args){
var args__5772__auto__ = [];
var len__5766__auto___9965 = arguments.length;
var i__5767__auto___9966 = (0);
while(true){
if((i__5767__auto___9966 < len__5766__auto___9965)){
args__5772__auto__.push((arguments[i__5767__auto___9966]));

var G__9967 = (i__5767__auto___9966 + (1));
i__5767__auto___9966 = G__9967;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return promesa.util.ignoring.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(promesa.util.ignoring.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.util","try*","promesa.util/try*",-1188724130,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.with_meta(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"once","once",-262568523),true], null)),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/home/runner/work/juliaworld/juliaworld/target/public/cljs-out/dev/promesa/util.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,120,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,18,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,120,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,21,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"once","once",-262568523),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),exprs))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)))));
}));

(promesa.util.ignoring.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.util.ignoring.cljs$lang$applyTo = (function (seq9961){
var G__9962 = cljs.core.first.call(null,seq9961);
var seq9961__$1 = cljs.core.next.call(null,seq9961);
var G__9963 = cljs.core.first.call(null,seq9961__$1);
var seq9961__$2 = cljs.core.next.call(null,seq9961__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9962,G__9963,seq9961__$2);
}));

return null;
})()
;
(promesa.util.ignoring.cljs$lang$macro = true);

var ret__5821__auto___9971 = (function (){
promesa.util.try_BANG_ = (function promesa$util$try_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___9972 = arguments.length;
var i__5767__auto___9973 = (0);
while(true){
if((i__5767__auto___9973 < len__5766__auto___9972)){
args__5772__auto__.push((arguments[i__5767__auto___9973]));

var G__9974 = (i__5767__auto___9973 + (1));
i__5767__auto___9973 = G__9974;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return promesa.util.try_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(promesa.util.try_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,exprs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("promesa.util","try*","promesa.util/try*",-1188724130,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.with_meta.call(null,cljs.core.with_meta(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"once","once",-262568523),true], null)),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"/home/runner/work/juliaworld/juliaworld/target/public/cljs-out/dev/promesa/util.cljc",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,124,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,18,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,124,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,21,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"once","once",-262568523),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null)))),null,(1),null)),exprs))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",725118887,null),null,(1),null)))));
}));

(promesa.util.try_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(promesa.util.try_BANG_.cljs$lang$applyTo = (function (seq9968){
var G__9969 = cljs.core.first.call(null,seq9968);
var seq9968__$1 = cljs.core.next.call(null,seq9968);
var G__9970 = cljs.core.first.call(null,seq9968__$1);
var seq9968__$2 = cljs.core.next.call(null,seq9968__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9969,G__9970,seq9968__$2);
}));

return null;
})()
;
(promesa.util.try_BANG_.cljs$lang$macro = true);


//# sourceMappingURL=util.js.map

// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.object');
goog.scope(function(){
schema.utils.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
 * schema need not depend on plumbing.
 */
schema.utils.assoc_when = (function schema$utils$assoc_when(var_args){
var args__5772__auto__ = [];
var len__5766__auto___21741 = arguments.length;
var i__5767__auto___21742 = (0);
while(true){
if((i__5767__auto___21742 < len__5766__auto___21741)){
args__5772__auto__.push((arguments[i__5767__auto___21742]));

var G__21743 = (i__5767__auto___21742 + (1));
i__5767__auto___21742 = G__21743;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__5043__auto__ = m;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5520__auto__ = (function schema$utils$iter__21731(s__21732){
return (new cljs.core.LazySeq(null,(function (){
var s__21732__$1 = s__21732;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__21732__$1);
if(temp__5804__auto__){
var s__21732__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21732__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__21732__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__21734 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__21733 = (0);
while(true){
if((i__21733 < size__5519__auto__)){
var vec__21735 = cljs.core._nth.call(null,c__5518__auto__,i__21733);
var k = cljs.core.nth.call(null,vec__21735,(0),null);
var v = cljs.core.nth.call(null,vec__21735,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__21734,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21744 = (i__21733 + (1));
i__21733 = G__21744;
continue;
} else {
var G__21745 = (i__21733 + (1));
i__21733 = G__21745;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21734),schema$utils$iter__21731.call(null,cljs.core.chunk_rest.call(null,s__21732__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21734),null);
}
} else {
var vec__21738 = cljs.core.first.call(null,s__21732__$2);
var k = cljs.core.nth.call(null,vec__21738,(0),null);
var v = cljs.core.nth.call(null,vec__21738,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$iter__21731.call(null,cljs.core.rest.call(null,s__21732__$2)));
} else {
var G__21746 = cljs.core.rest.call(null,s__21732__$2);
s__21732__$1 = G__21746;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
}));

(schema.utils.assoc_when.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schema.utils.assoc_when.cljs$lang$applyTo = (function (seq21729){
var G__21730 = cljs.core.first.call(null,seq21729);
var seq21729__$1 = cljs.core.next.call(null,seq21729);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21730,seq21729__$1);
}));

schema.utils.type_of = (function schema$utils$type_of(x){
return typeof x;
});
/**
 * What class can we associate the fn schema with? In Clojure use the class of the fn; in
 * cljs just use the fn itself.
 */
schema.utils.fn_schema_bearer = (function schema$utils$fn_schema_bearer(f){
return f;
});
schema.utils.format_STAR_ = (function schema$utils$format_STAR_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___21749 = arguments.length;
var i__5767__auto___21750 = (0);
while(true){
if((i__5767__auto___21750 < len__5766__auto___21749)){
args__5772__auto__.push((arguments[i__5767__auto___21750]));

var G__21751 = (i__5767__auto___21750 + (1));
i__5767__auto___21750 = G__21751;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
}));

(schema.utils.format_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schema.utils.format_STAR_.cljs$lang$applyTo = (function (seq21747){
var G__21748 = cljs.core.first.call(null,seq21747);
var seq21747__$1 = cljs.core.next.call(null,seq21747);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21748,seq21747__$1);
}));

schema.utils.max_value_length = cljs.core.atom.call(null,(19));
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of.call(null,value);
if((((cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)).length) <= cljs.core.deref.call(null,schema.utils.max_value_length))){
return value;
} else {
return cljs.core.symbol.call(null,["a-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
}
});
/**
 * A meaningful name for a function that looks like its symbol, if applicable.
 */
schema.utils.fn_name = (function schema$utils$fn_name(f){
var vec__21753 = cljs.core.re_matches.call(null,/#object\[(.*)\]/,cljs.core.pr_str.call(null,f));
var _ = cljs.core.nth.call(null,vec__21753,(0),null);
var s = cljs.core.nth.call(null,vec__21753,(1),null);
if(cljs.core._EQ_.call(null,"Function",s)){
return "function";
} else {
return cljs.core.re_find.call(null,/[^\/]+(?:$|(?=\/+$))/,cljs.core.demunge.call(null,s));
}
});
schema.utils.record_QMARK_ = (function schema$utils$record_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IRecord$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,schema.utils.validation_error_explain.call(null,this$__$1),writer,opts);
}));

(schema.utils.ValidationError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"expectation-delay","expectation-delay",-1886214669,null),new cljs.core.Symbol(null,"fail-explanation","fail-explanation",530278923,null)], null);
}));

(schema.utils.ValidationError.cljs$lang$type = true);

(schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError");

(schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"schema.utils/ValidationError");
}));

/**
 * Positional factory function for schema.utils/ValidationError.
 */
schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
return (new cljs.core.List(null,(function (){var or__5043__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
})(),(new cljs.core.List(null,cljs.core.deref.call(null,err.expectation_delay),null,(1),null)),(2),null));
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.make_ValidationError = (function schema$utils$make_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,schema.utils.named_error_explain.call(null,this$__$1),writer,opts);
}));

(schema.utils.NamedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"error","error",661562495,null)], null);
}));

(schema.utils.NamedError.cljs$lang$type = true);

(schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError");

(schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"schema.utils/NamedError");
}));

/**
 * Positional factory function for schema.utils/NamedError.
 */
schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"named","named",1218138048,null),(new cljs.core.List(null,err.error,(new cljs.core.List(null,err.name,null,(1),null)),(2),null)),(3),null));
});

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
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k21758,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__21762 = k21758;
var G__21762__$1 = (((G__21762 instanceof cljs.core.Keyword))?G__21762.fqn:null);
switch (G__21762__$1) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21758,else__5343__auto__);

}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__21763){
var vec__21764 = p__21763;
var k__5364__auto__ = cljs.core.nth.call(null,vec__21764,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__21764,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21757){
var self__ = this;
var G__21757__$1 = this;
return (new cljs.core.RecordIter((0),G__21757__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1172277899 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21759,other21760){
var self__ = this;
var this21759__$1 = this;
return (((!((other21760 == null)))) && ((((this21759__$1.constructor === other21760.constructor)) && (((cljs.core._EQ_.call(null,this21759__$1.error,other21760.error)) && (cljs.core._EQ_.call(null,this21759__$1.__extmap,other21760.__extmap)))))));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k21758){
var self__ = this;
var this__5347__auto____$1 = this;
var G__21767 = k21758;
var G__21767__$1 = (((G__21767 instanceof cljs.core.Keyword))?G__21767.fqn:null);
switch (G__21767__$1) {
case "error":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k21758);

}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__21757){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__21768 = cljs.core.keyword_identical_QMARK_;
var expr__21769 = k__5349__auto__;
if(cljs.core.truth_(pred__21768.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__21769))){
return (new schema.utils.ErrorContainer(G__21757,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__21757),null));
}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"error","error",-978969032),self__.error,null))], null),self__.__extmap));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__21757){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__21757,self__.__extmap,self__.__hash));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.utils.ErrorContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null);
}));

(schema.utils.ErrorContainer.cljs$lang$type = true);

(schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.utils/ErrorContainer",null,(1),null));
}));

(schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.utils/ErrorContainer");
}));

/**
 * Positional factory function for schema.utils/ErrorContainer.
 */
schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

/**
 * Factory function for schema.utils/ErrorContainer, taking a map of keywords to field values.
 */
schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__21761){
var extmap__5382__auto__ = (function (){var G__21771 = cljs.core.dissoc.call(null,G__21761,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.record_QMARK_.call(null,G__21761)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__21771);
} else {
return G__21771;
}
})();
return (new schema.utils.ErrorContainer(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__21761),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});

/**
 * Distinguish a value (must be non-nil) as an error.
 */
schema.utils.error = (function schema$utils$error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error("Assert failed: x"));
}

return schema.utils.__GT_ErrorContainer.call(null,x);
});
schema.utils.error_QMARK_ = (function schema$utils$error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function schema$utils$error_val(x){
if(schema.utils.error_QMARK_.call(null,x)){
return x.error;
} else {
return null;
}
});
schema.utils.declare_class_schema_BANG_ = (function schema$utils$declare_class_schema_BANG_(klass,schema__$1){
return schema.utils.goog$module$goog$object.set.call(null,klass,"schema$utils$schema",schema__$1);
});

schema.utils.class_schema = (function schema$utils$class_schema(klass){
return schema.utils.goog$module$goog$object.get.call(null,klass,"schema$utils$schema");
});
/**
 * Turn on run-time function validation for functions compiled when
 * s/compile-fn-validation was true -- has no effect for functions compiled
 * when it is false.
 */
schema.utils.use_fn_validation = cljs.core.atom.call(null,false);

//# sourceMappingURL=utils.js.map
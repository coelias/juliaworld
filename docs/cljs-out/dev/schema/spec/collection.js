// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('schema.spec.collection');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.collection.element_transformer = (function schema$spec$collection$element_transformer(e,params,then){
if(cljs.core.vector_QMARK_.call(null,e)){
var G__22481 = cljs.core.first.call(null,e);
var G__22481__$1 = (((G__22481 instanceof cljs.core.Keyword))?G__22481.fqn:null);
switch (G__22481__$1) {
case "schema.spec.collection/optional":
return schema.spec.collection.sequence_transformer.call(null,cljs.core.next.call(null,e),params,then);

break;
case "schema.spec.collection/remaining":
var _ = ((cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,e)))?null:(function(){throw (new Error(schema.utils.format_STAR_.call(null,"remaining can have only one schema.")))})());
var c = schema.spec.core.sub_checker.call(null,cljs.core.second.call(null,e),params);
return (function (res,x){
cljs.core.swap_BANG_.call(null,res,cljs.core.into,cljs.core.map.call(null,c,x));

return then.call(null,res,null);
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22481__$1)].join('')));

}
} else {
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(e);
var c = schema.spec.core.sub_checker.call(null,e,params);
return (function (res,x){
return then.call(null,res,parser.call(null,(function (t){
return cljs.core.swap_BANG_.call(null,res,cljs.core.conj,((schema.utils.error_QMARK_.call(null,t))?t:c.call(null,t)));
}),x));
});
}
});
schema.spec.collection.sequence_transformer = (function schema$spec$collection$sequence_transformer(elts,params,then){
if(cljs.core.not_any_QMARK_.call(null,(function (p1__22483_SHARP_){
return ((cljs.core.vector_QMARK_.call(null,p1__22483_SHARP_)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__22483_SHARP_),new cljs.core.Keyword("schema.spec.collection","remaining","schema.spec.collection/remaining",-421177821))));
}),cljs.core.butlast.call(null,elts))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Remaining schemas must be in tail position.")));
}

return cljs.core.reduce.call(null,(function (f,e){
return schema.spec.collection.element_transformer.call(null,e,params,f);
}),then,cljs.core.reverse.call(null,elts));
});
schema.spec.collection.has_error_QMARK_ = (function schema$spec$collection$has_error_QMARK_(l){
return cljs.core.some.call(null,schema.utils.error_QMARK_,l);
});
schema.spec.collection.subschemas = (function schema$spec$collection$subschemas(elt){
if(cljs.core.map_QMARK_.call(null,elt)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(elt)], null);
} else {
if(cljs.core.vector_QMARK_.call(null,elt)){
} else {
throw (new Error("Assert failed: (vector? elt)"));
}

if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("schema.spec.collection","remaining","schema.spec.collection/remaining",-421177821),null,new cljs.core.Keyword("schema.spec.collection","optional","schema.spec.collection/optional",-854614927),null], null), null).call(null,cljs.core.first.call(null,elt)))){
} else {
throw (new Error("Assert failed: (#{:schema.spec.collection/remaining :schema.spec.collection/optional} (first elt))"));
}

return cljs.core.mapcat.call(null,schema.spec.collection.subschemas,cljs.core.next.call(null,elt));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
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
schema.spec.collection.CollectionSpec = (function (pre,konstructor,elements,on_error,__meta,__extmap,__hash){
this.pre = pre;
this.konstructor = konstructor;
this.elements = elements;
this.on_error = on_error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22485,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22489 = k22485;
var G__22489__$1 = (((G__22489 instanceof cljs.core.Keyword))?G__22489.fqn:null);
switch (G__22489__$1) {
case "pre":
return self__.pre;

break;
case "konstructor":
return self__.konstructor;

break;
case "elements":
return self__.elements;

break;
case "on-error":
return self__.on_error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22485,else__5343__auto__);

}
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22490){
var vec__22491 = p__22490;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22491,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22491,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL);

(schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.mapcat.call(null,schema.spec.collection.subschemas,self__.elements);
}));

(schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var konstructor__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"return-walked?","return-walked?",-1684646015).cljs$core$IFn$_invoke$arity$1(params))?self__.konstructor:(function (_){
return null;
}));
var t = schema.spec.collection.sequence_transformer.call(null,self__.elements,params,(function (_,x){
return x;
}));
return (function (x){
var or__5043__auto__ = self__.pre.call(null,x);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var remaining = t.call(null,res,x);
var res__$1 = cljs.core.deref.call(null,res);
if(cljs.core.truth_((function (){var or__5043__auto____$1 = cljs.core.seq.call(null,remaining);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
return schema.spec.collection.has_error_QMARK_.call(null,res__$1);
}
})())){
return schema.utils.error.call(null,self__.on_error.call(null,x,res__$1,remaining));
} else {
return konstructor__$1.call(null,res__$1);
}
}
});
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.spec.collection.CollectionSpec{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557),self__.konstructor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error],null))], null),self__.__extmap));
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22484){
var self__ = this;
var G__22484__$1 = this;
return (new cljs.core.RecordIter((0),G__22484__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.konstructor,self__.elements,self__.on_error,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1800698765 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22486,other22487){
var self__ = this;
var this22486__$1 = this;
return (((!((other22487 == null)))) && ((((this22486__$1.constructor === other22487.constructor)) && (((cljs.core._EQ_.call(null,this22486__$1.pre,other22487.pre)) && (((cljs.core._EQ_.call(null,this22486__$1.konstructor,other22487.konstructor)) && (((cljs.core._EQ_.call(null,this22486__$1.elements,other22487.elements)) && (((cljs.core._EQ_.call(null,this22486__$1.on_error,other22487.on_error)) && (cljs.core._EQ_.call(null,this22486__$1.__extmap,other22487.__extmap)))))))))))));
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pre","pre",2118456869),null,new cljs.core.Keyword(null,"elements","elements",657646735),null,new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557),null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.konstructor,self__.elements,self__.on_error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22485){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22494 = k22485;
var G__22494__$1 = (((G__22494 instanceof cljs.core.Keyword))?G__22494.fqn:null);
switch (G__22494__$1) {
case "pre":
case "konstructor":
case "elements":
case "on-error":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22485);

}
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22484){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22495 = cljs.core.keyword_identical_QMARK_;
var expr__22496 = k__5349__auto__;
if(cljs.core.truth_(pred__22495.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__22496))){
return (new schema.spec.collection.CollectionSpec(G__22484,self__.konstructor,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22495.call(null,new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557),expr__22496))){
return (new schema.spec.collection.CollectionSpec(self__.pre,G__22484,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22495.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__22496))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.konstructor,G__22484,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22495.call(null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),expr__22496))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.konstructor,self__.elements,G__22484,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.konstructor,self__.elements,self__.on_error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22484),null));
}
}
}
}
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557),self__.konstructor,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error,null))], null),self__.__extmap));
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22484){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.konstructor,self__.elements,self__.on_error,G__22484,self__.__extmap,self__.__hash));
}));

(schema.spec.collection.CollectionSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.spec.collection.CollectionSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"konstructor","konstructor",218206970,null),new cljs.core.Symbol(null,"elements","elements",-1996789034,null),new cljs.core.Symbol(null,"on-error","on-error",-925902239,null)], null);
}));

(schema.spec.collection.CollectionSpec.cljs$lang$type = true);

(schema.spec.collection.CollectionSpec.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.spec.collection/CollectionSpec",null,(1),null));
}));

(schema.spec.collection.CollectionSpec.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.spec.collection/CollectionSpec");
}));

/**
 * Positional factory function for schema.spec.collection/CollectionSpec.
 */
schema.spec.collection.__GT_CollectionSpec = (function schema$spec$collection$__GT_CollectionSpec(pre,konstructor,elements,on_error){
return (new schema.spec.collection.CollectionSpec(pre,konstructor,elements,on_error,null,null,null));
});

/**
 * Factory function for schema.spec.collection/CollectionSpec, taking a map of keywords to field values.
 */
schema.spec.collection.map__GT_CollectionSpec = (function schema$spec$collection$map__GT_CollectionSpec(G__22488){
var extmap__5382__auto__ = (function (){var G__22498 = cljs.core.dissoc.call(null,G__22488,new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.record_QMARK_.call(null,G__22488)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22498);
} else {
return G__22498;
}
})();
return (new schema.spec.collection.CollectionSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__22488),new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557).cljs$core$IFn$_invoke$arity$1(G__22488),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__22488),new cljs.core.Keyword(null,"on-error","on-error",1728533530).cljs$core$IFn$_invoke$arity$1(G__22488),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});

/**
 * A collection represents a collection of elements, each of which is itself
 * schematized.  At the top level, the collection has a precondition
 * (presumably on the overall type), a constructor for the collection from a
 * sequence of items, an element spec, and a function that constructs a
 * descriptive error on failure.
 * 
 * The element spec is a nested list structure, in which the leaf elements each
 * provide an element schema, parser (allowing for efficient processing of structured
 * collections), and optional error wrapper.  Each item in the list can be a leaf
 * element or an `optional` nested element spec (see below).  In addition, the final
 * element can be a `remaining` schema (see below).
 * 
 * Note that the `optional` carries no semantics with respect to validation;
 * the user must ensure that the parser enforces the desired semantics, which
 * should match the structure of the spec for proper generation.
 */
schema.spec.collection.collection_spec = (function schema$spec$collection$collection_spec(pre,konstructor,elements,on_error){
return schema.spec.collection.__GT_CollectionSpec.call(null,pre,konstructor,elements,on_error);
});
/**
 * All remaining elements must match schema s
 */
schema.spec.collection.remaining = (function schema$spec$collection$remaining(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("schema.spec.collection","remaining","schema.spec.collection/remaining",-421177821),s], null);
});
/**
 * If any more elements are present, they must match the elements in 'ss'
 */
schema.spec.collection.optional = (function schema$spec$collection$optional(var_args){
var args__5772__auto__ = [];
var len__5766__auto___22502 = arguments.length;
var i__5767__auto___22503 = (0);
while(true){
if((i__5767__auto___22503 < len__5766__auto___22502)){
args__5772__auto__.push((arguments[i__5767__auto___22503]));

var G__22504 = (i__5767__auto___22503 + (1));
i__5767__auto___22503 = G__22504;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic = (function (ss){
return cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Keyword("schema.spec.collection","optional","schema.spec.collection/optional",-854614927),ss));
}));

(schema.spec.collection.optional.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.spec.collection.optional.cljs$lang$applyTo = (function (seq22501){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22501));
}));

schema.spec.collection.all_elements = (function schema$spec$collection$all_elements(schema__$1){
return schema.spec.collection.remaining.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (coll){
throw (new Error("should never be not called"));
})], null));
});
schema.spec.collection.one_element = (function schema$spec$collection$one_element(required_QMARK_,schema__$1,parser){
var base = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
if(cljs.core.truth_(required_QMARK_)){
return base;
} else {
return schema.spec.collection.optional.call(null,base);
}
});
schema.spec.collection.optional_tail = (function schema$spec$collection$optional_tail(schema__$1,parser,more){
return cljs.core.into.call(null,schema.spec.collection.optional.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null)),more);
});

//# sourceMappingURL=collection.js.map

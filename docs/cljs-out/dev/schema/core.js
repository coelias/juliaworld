// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('schema.utils');
goog.require('schema.spec.core');
goog.require('schema.spec.leaf');
goog.require('schema.spec.variant');
goog.require('schema.spec.collection');

/**
 * @interface
 */
schema.core.Schema = function(){};

var schema$core$Schema$spec$dyn_22257 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (schema.core.spec[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$);
} else {
var m__5389__auto__ = (schema.core.spec["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.spec",this$);
}
}
});
/**
 * A spec is a record of some type that expresses the structure of this schema
 *   in a declarative and/or imperative way.  See schema.spec.* for examples.
 */
schema.core.spec = (function schema$core$spec(this$){
if((((!((this$ == null)))) && ((!((this$.schema$core$Schema$spec$arity$1 == null)))))){
return this$.schema$core$Schema$spec$arity$1(this$);
} else {
return schema$core$Schema$spec$dyn_22257.call(null,this$);
}
});

var schema$core$Schema$explain$dyn_22258 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (schema.core.explain[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$);
} else {
var m__5389__auto__ = (schema.core.explain["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.explain",this$);
}
}
});
/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((((!((this$ == null)))) && ((!((this$.schema$core$Schema$explain$arity$1 == null)))))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
return schema$core$Schema$explain$dyn_22258.call(null,this$);
}
});

/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.call(null,schema.utils.error_val,schema.spec.core.run_checker.call(null,(function (s,params){
return schema.spec.core.checker.call(null,schema.core.spec.call(null,s),params);
}),false,schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 * 
 * If you will be checking many datums, it is much more efficient to create
 * a 'checker' once and call it on each of them.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
return schema.core.checker.call(null,schema__$1).call(null,x);
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker.call(null,schema__$1);
return (function (value){
var temp__5804__auto___22259 = c.call(null,value);
if(cljs.core.truth_(temp__5804__auto___22259)){
var error_22260 = temp__5804__auto___22259;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Value does not match schema: %s",cljs.core.pr_str.call(null,error_22260)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_22260], null));
} else {
}

return value;
});
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 * If you will be validating many datums, it is much more efficient to create
 * a 'validator' once and call it on each of them.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
return schema.core.validator.call(null,schema__$1).call(null,value);
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition.call(null,s,(function (p1__22262_SHARP_){
var and__5041__auto__ = (!((p1__22262_SHARP_ == null)));
if(and__5041__auto__){
var or__5043__auto__ = (klass === p1__22262_SHARP_.constructor);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return p1__22262_SHARP_ instanceof klass;
}
} else {
return and__5041__auto__;
}
}),(function (p1__22263_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),(new cljs.core.List(null,klass,(new cljs.core.List(null,p1__22263_SHARP_,null,(1),null)),(2),null)),(3),null));
}));
});
schema.core._class_spec = (function schema$core$_class_spec(this$){
var pre = schema.core.instance_precondition.call(null,this$,this$);
var temp__5802__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__5802__auto__)){
var class_schema = temp__5802__auto__;
return schema.spec.variant.variant_spec.call(null,pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec.call(null,pre);
}
});
schema.core._class_explain = (function schema$core$_class_explain(this$){
var temp__5802__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__5802__auto__)){
var more_schema = temp__5802__auto__;
return schema.core.explain.call(null,more_schema);
} else {
var pred__22264 = cljs.core._EQ_;
var expr__22265 = this$;
if(cljs.core.truth_(pred__22264.call(null,Boolean,expr__22265))){
return new cljs.core.Symbol(null,"Bool","Bool",195910502,null);
} else {
if(cljs.core.truth_(pred__22264.call(null,Number,expr__22265))){
return new cljs.core.Symbol(null,"Num","Num",-2044934708,null);
} else {
if(cljs.core.truth_(pred__22264.call(null,Date,expr__22265))){
return new cljs.core.Symbol(null,"Inst","Inst",292408622,null);
} else {
if(cljs.core.truth_(pred__22264.call(null,cljs.core.UUID,expr__22265))){
return new cljs.core.Symbol(null,"Uuid","Uuid",-1866694318,null);
} else {
return this$;
}
}
}
}
}
});
(schema.core.Schema["function"] = true);

(schema.core.spec["function"] = (function (this$){
return schema.core._class_spec.call(null,this$);
}));

(schema.core.explain["function"] = (function (this$){
return schema.core._class_explain.call(null,this$);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22269,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22273 = k22269;
var G__22273__$1 = (((G__22273 instanceof cljs.core.Keyword))?G__22273.fqn:null);
switch (G__22273__$1) {
case "_":
return self__._;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22269,else__5343__auto__);

}
}));

(schema.core.AnythingSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22274){
var vec__22275 = p__22274;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22275,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22275,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.AnythingSchema{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22268){
var self__ = this;
var G__22268__$1 = this;
return (new cljs.core.RecordIter((0),G__22268__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1432036169 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22270,other22271){
var self__ = this;
var this22270__$1 = this;
return (((!((other22271 == null)))) && ((((this22270__$1.constructor === other22271.constructor)) && (((cljs.core._EQ_.call(null,this22270__$1._,other22271._)) && (cljs.core._EQ_.call(null,this22270__$1.__extmap,other22271.__extmap)))))));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22269){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22278 = k22269;
var G__22278__$1 = (((G__22278 instanceof cljs.core.Keyword))?G__22278.fqn:null);
switch (G__22278__$1) {
case "_":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22269);

}
}));

(schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22268){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22279 = cljs.core.keyword_identical_QMARK_;
var expr__22280 = k__5349__auto__;
if(cljs.core.truth_(pred__22279.call(null,new cljs.core.Keyword(null,"_","_",1453416199),expr__22280))){
return (new schema.core.AnythingSchema(G__22268,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22268),null));
}
}));

(schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"_","_",1453416199),self__._,null))], null),self__.__extmap));
}));

(schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22268){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__22268,self__.__extmap,self__.__hash));
}));

(schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.AnythingSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.AnythingSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_);
}));

(schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
}));

(schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
}));

(schema.core.AnythingSchema.cljs$lang$type = true);

(schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/AnythingSchema",null,(1),null));
}));

(schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/AnythingSchema");
}));

/**
 * Positional factory function for schema.core/AnythingSchema.
 */
schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

/**
 * Factory function for schema.core/AnythingSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__22272){
var extmap__5382__auto__ = (function (){var G__22282 = cljs.core.dissoc.call(null,G__22272,new cljs.core.Keyword(null,"_","_",1453416199));
if(cljs.core.record_QMARK_.call(null,G__22272)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22282);
} else {
return G__22282;
}
})();
return (new schema.core.AnythingSchema(new cljs.core.Keyword(null,"_","_",1453416199).cljs$core$IFn$_invoke$arity$1(G__22272),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22288,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22292 = k22288;
var G__22292__$1 = (((G__22292 instanceof cljs.core.Keyword))?G__22292.fqn:null);
switch (G__22292__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22288,else__5343__auto__);

}
}));

(schema.core.EqSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22293){
var vec__22294 = p__22293;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22294,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22294,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.EqSchema{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
}));

(schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22287){
var self__ = this;
var G__22287__$1 = this;
return (new cljs.core.RecordIter((0),G__22287__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-907989292 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22289,other22290){
var self__ = this;
var this22289__$1 = this;
return (((!((other22290 == null)))) && ((((this22289__$1.constructor === other22290.constructor)) && (((cljs.core._EQ_.call(null,this22289__$1.v,other22290.v)) && (cljs.core._EQ_.call(null,this22289__$1.__extmap,other22290.__extmap)))))));
}));

(schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.EqSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22288){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22297 = k22288;
var G__22297__$1 = (((G__22297 instanceof cljs.core.Keyword))?G__22297.fqn:null);
switch (G__22297__$1) {
case "v":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22288);

}
}));

(schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22287){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22298 = cljs.core.keyword_identical_QMARK_;
var expr__22299 = k__5349__auto__;
if(cljs.core.truth_(pred__22298.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__22299))){
return (new schema.core.EqSchema(G__22287,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22287),null));
}
}));

(schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
}));

(schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22287){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__22287,self__.__extmap,self__.__hash));
}));

(schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.EqSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,(function (p1__22285_SHARP_){
return cljs.core._EQ_.call(null,self__.v,p1__22285_SHARP_);
}),(function (p1__22286_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),(new cljs.core.List(null,self__.v,(new cljs.core.List(null,p1__22286_SHARP_,null,(1),null)),(2),null)),(3),null));
})));
}));

(schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"eq","eq",1021992460,null),(new cljs.core.List(null,self__.v,null,(1),null)),(2),null));
}));

(schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(schema.core.EqSchema.cljs$lang$type = true);

(schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/EqSchema",null,(1),null));
}));

(schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/EqSchema");
}));

/**
 * Positional factory function for schema.core/EqSchema.
 */
schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
 * Factory function for schema.core/EqSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__22291){
var extmap__5382__auto__ = (function (){var G__22301 = cljs.core.dissoc.call(null,G__22291,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_.call(null,G__22291)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22301);
} else {
return G__22301;
}
})();
return (new schema.core.EqSchema(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__22291),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22307,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22311 = k22307;
var G__22311__$1 = (((G__22311 instanceof cljs.core.Keyword))?G__22311.fqn:null);
switch (G__22311__$1) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22307,else__5343__auto__);

}
}));

(schema.core.Isa.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22312){
var vec__22313 = p__22312;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22313,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22313,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.Isa{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
}));

(schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22306){
var self__ = this;
var G__22306__$1 = this;
return (new cljs.core.RecordIter((0),G__22306__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1593744337 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22308,other22309){
var self__ = this;
var this22308__$1 = this;
return (((!((other22309 == null)))) && ((((this22308__$1.constructor === other22309.constructor)) && (((cljs.core._EQ_.call(null,this22308__$1.h,other22309.h)) && (((cljs.core._EQ_.call(null,this22308__$1.parent,other22309.parent)) && (cljs.core._EQ_.call(null,this22308__$1.__extmap,other22309.__extmap)))))))));
}));

(schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.Isa.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22307){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22316 = k22307;
var G__22316__$1 = (((G__22316 instanceof cljs.core.Keyword))?G__22316.fqn:null);
switch (G__22316__$1) {
case "h":
case "parent":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22307);

}
}));

(schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22306){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22317 = cljs.core.keyword_identical_QMARK_;
var expr__22318 = k__5349__auto__;
if(cljs.core.truth_(pred__22317.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__22318))){
return (new schema.core.Isa(G__22306,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22317.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__22318))){
return (new schema.core.Isa(self__.h,G__22306,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22306),null));
}
}
}));

(schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null))], null),self__.__extmap));
}));

(schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22306){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__22306,self__.__extmap,self__.__hash));
}));

(schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.Isa.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,(function (p1__22304_SHARP_){
if(cljs.core.truth_(self__.h)){
return cljs.core.isa_QMARK_.call(null,self__.h,p1__22304_SHARP_,self__.parent);
} else {
return cljs.core.isa_QMARK_.call(null,p1__22304_SHARP_,self__.parent);
}
}),(function (p1__22305_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"isa?","isa?",1358492324,null),(new cljs.core.List(null,p1__22305_SHARP_,(new cljs.core.List(null,self__.parent,null,(1),null)),(2),null)),(3),null));
})));
}));

(schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"isa?","isa?",1358492324,null),(new cljs.core.List(null,self__.parent,null,(1),null)),(2),null));
}));

(schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)], null);
}));

(schema.core.Isa.cljs$lang$type = true);

(schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/Isa",null,(1),null));
}));

(schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/Isa");
}));

/**
 * Positional factory function for schema.core/Isa.
 */
schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

/**
 * Factory function for schema.core/Isa, taking a map of keywords to field values.
 */
schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__22310){
var extmap__5382__auto__ = (function (){var G__22320 = cljs.core.dissoc.call(null,G__22310,new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.record_QMARK_.call(null,G__22310)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22320);
} else {
return G__22320;
}
})();
return (new schema.core.Isa(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__22310),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__22310),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.Isa.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var G__22324 = arguments.length;
switch (G__22324) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
}));

(schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
}));

(schema.core.isa.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22329,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22333 = k22329;
var G__22333__$1 = (((G__22333 instanceof cljs.core.Keyword))?G__22333.fqn:null);
switch (G__22333__$1) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22329,else__5343__auto__);

}
}));

(schema.core.EnumSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22334){
var vec__22335 = p__22334;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22335,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22335,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.EnumSchema{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
}));

(schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22328){
var self__ = this;
var G__22328__$1 = this;
return (new cljs.core.RecordIter((0),G__22328__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vs","vs",-2022097090)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (2002701468 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22330,other22331){
var self__ = this;
var this22330__$1 = this;
return (((!((other22331 == null)))) && ((((this22330__$1.constructor === other22331.constructor)) && (((cljs.core._EQ_.call(null,this22330__$1.vs,other22331.vs)) && (cljs.core._EQ_.call(null,this22330__$1.__extmap,other22331.__extmap)))))));
}));

(schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vs","vs",-2022097090),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.EnumSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22329){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22338 = k22329;
var G__22338__$1 = (((G__22338 instanceof cljs.core.Keyword))?G__22338.fqn:null);
switch (G__22338__$1) {
case "vs":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22329);

}
}));

(schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22328){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22339 = cljs.core.keyword_identical_QMARK_;
var expr__22340 = k__5349__auto__;
if(cljs.core.truth_(pred__22339.call(null,new cljs.core.Keyword(null,"vs","vs",-2022097090),expr__22340))){
return (new schema.core.EnumSchema(G__22328,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22328),null));
}
}));

(schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs,null))], null),self__.__extmap));
}));

(schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22328){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__22328,self__.__extmap,self__.__hash));
}));

(schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.EnumSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,(function (p1__22326_SHARP_){
return cljs.core.contains_QMARK_.call(null,self__.vs,p1__22326_SHARP_);
}),(function (p1__22327_SHARP_){
return (new cljs.core.List(null,self__.vs,(new cljs.core.List(null,p1__22327_SHARP_,null,(1),null)),(2),null));
})));
}));

(schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
}));

(schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vs","vs",-381565563,null)], null);
}));

(schema.core.EnumSchema.cljs$lang$type = true);

(schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/EnumSchema",null,(1),null));
}));

(schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/EnumSchema");
}));

/**
 * Positional factory function for schema.core/EnumSchema.
 */
schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

/**
 * Factory function for schema.core/EnumSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__22332){
var extmap__5382__auto__ = (function (){var G__22342 = cljs.core.dissoc.call(null,G__22332,new cljs.core.Keyword(null,"vs","vs",-2022097090));
if(cljs.core.record_QMARK_.call(null,G__22332)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22342);
} else {
return G__22342;
}
})();
return (new schema.core.EnumSchema(new cljs.core.Keyword(null,"vs","vs",-2022097090).cljs$core$IFn$_invoke$arity$1(G__22332),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__5772__auto__ = [];
var len__5766__auto___22346 = arguments.length;
var i__5767__auto___22347 = (0);
while(true){
if((i__5767__auto___22347 < len__5766__auto___22346)){
args__5772__auto__.push((arguments[i__5767__auto___22347]));

var G__22348 = (i__5767__auto___22347 + (1));
i__5767__auto___22347 = G__22348;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set.call(null,vs),null,null,null));
}));

(schema.core.enum$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.enum$.cljs$lang$applyTo = (function (seq22345){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22345));
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22351,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22355 = k22351;
var G__22355__$1 = (((G__22355 instanceof cljs.core.Keyword))?G__22355.fqn:null);
switch (G__22355__$1) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22351,else__5343__auto__);

}
}));

(schema.core.Predicate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22356){
var vec__22357 = p__22356;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22357,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22357,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.Predicate{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
}));

(schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22350){
var self__ = this;
var G__22350__$1 = this;
return (new cljs.core.RecordIter((0),G__22350__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (2041221968 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22352,other22353){
var self__ = this;
var this22352__$1 = this;
return (((!((other22353 == null)))) && ((((this22352__$1.constructor === other22353.constructor)) && (((cljs.core._EQ_.call(null,this22352__$1.p_QMARK_,other22353.p_QMARK_)) && (((cljs.core._EQ_.call(null,this22352__$1.pred_name,other22353.pred_name)) && (cljs.core._EQ_.call(null,this22352__$1.__extmap,other22353.__extmap)))))))));
}));

(schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),null,new cljs.core.Keyword(null,"p?","p?",-1172161701),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.Predicate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22351){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22360 = k22351;
var G__22360__$1 = (((G__22360 instanceof cljs.core.Keyword))?G__22360.fqn:null);
switch (G__22360__$1) {
case "p?":
case "pred-name":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22351);

}
}));

(schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22350){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22361 = cljs.core.keyword_identical_QMARK_;
var expr__22362 = k__5349__auto__;
if(cljs.core.truth_(pred__22361.call(null,new cljs.core.Keyword(null,"p?","p?",-1172161701),expr__22362))){
return (new schema.core.Predicate(G__22350,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22361.call(null,new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),expr__22362))){
return (new schema.core.Predicate(self__.p_QMARK_,G__22350,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22350),null));
}
}
}));

(schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name,null))], null),self__.__extmap));
}));

(schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22350){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__22350,self__.__extmap,self__.__hash));
}));

(schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.Predicate.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,self__.p_QMARK_,(function (p1__22349_SHARP_){
return (new cljs.core.List(null,self__.pred_name,(new cljs.core.List(null,p1__22349_SHARP_,null,(1),null)),(2),null));
})));
}));

(schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"pred","pred",-727012372,null),(new cljs.core.List(null,self__.pred_name,null,(1),null)),(2),null));

}
}
}
}
}));

(schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p?","p?",468369826,null),new cljs.core.Symbol(null,"pred-name","pred-name",1636854076,null)], null);
}));

(schema.core.Predicate.cljs$lang$type = true);

(schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/Predicate",null,(1),null));
}));

(schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/Predicate");
}));

/**
 * Positional factory function for schema.core/Predicate.
 */
schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

/**
 * Factory function for schema.core/Predicate, taking a map of keywords to field values.
 */
schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__22354){
var extmap__5382__auto__ = (function (){var G__22364 = cljs.core.dissoc.call(null,G__22354,new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451));
if(cljs.core.record_QMARK_.call(null,G__22354)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22364);
} else {
return G__22364;
}
})();
return (new schema.core.Predicate(new cljs.core.Keyword(null,"p?","p?",-1172161701).cljs$core$IFn$_invoke$arity$1(G__22354),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451).cljs$core$IFn$_invoke$arity$1(G__22354),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var G__22368 = arguments.length;
switch (G__22368) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.call(null,p_QMARK_,cljs.core.symbol.call(null,schema.utils.fn_name.call(null,p_QMARK_)));
}));

(schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_.call(null,p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not a function: %s",p_QMARK_)));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
}));

(schema.core.pred.cljs$lang$maxFixedArity = 2);

schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22372,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22376 = k22372;
var G__22376__$1 = (((G__22376 instanceof cljs.core.Keyword))?G__22376.fqn:null);
switch (G__22376__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22372,else__5343__auto__);

}
}));

(schema.core.Protocol.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22377){
var vec__22378 = p__22377;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22378,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22378,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.Protocol{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
}));

(schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22371){
var self__ = this;
var G__22371__$1 = this;
return (new cljs.core.RecordIter((0),G__22371__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1892592712 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22373,other22374){
var self__ = this;
var this22373__$1 = this;
return (((!((other22374 == null)))) && ((((this22373__$1.constructor === other22374.constructor)) && (((cljs.core._EQ_.call(null,this22373__$1.p,other22374.p)) && (cljs.core._EQ_.call(null,this22373__$1.__extmap,other22374.__extmap)))))));
}));

(schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.Protocol.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22372){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22381 = k22372;
var G__22381__$1 = (((G__22381 instanceof cljs.core.Keyword))?G__22381.fqn:null);
switch (G__22381__$1) {
case "p":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22372);

}
}));

(schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22371){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22382 = cljs.core.keyword_identical_QMARK_;
var expr__22383 = k__5349__auto__;
if(cljs.core.truth_(pred__22382.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__22383))){
return (new schema.core.Protocol(G__22371,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22371),null));
}
}));

(schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p","p",151049309),self__.p,null))], null),self__.__extmap));
}));

(schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22371){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__22371,self__.__extmap,self__.__hash));
}));

(schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.Protocol.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)),(function (p1__22370_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),(new cljs.core.List(null,schema.core.protocol_name.call(null,this$__$1),(new cljs.core.List(null,p1__22370_SHARP_,null,(1),null)),(2),null)),(3),null));
})));
}));

(schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null),(new cljs.core.List(null,schema.core.protocol_name.call(null,this$__$1),null,(1),null)),(2),null));
}));

(schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
}));

(schema.core.Protocol.cljs$lang$type = true);

(schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/Protocol",null,(1),null));
}));

(schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/Protocol");
}));

/**
 * Positional factory function for schema.core/Protocol.
 */
schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

/**
 * Factory function for schema.core/Protocol, taking a map of keywords to field values.
 */
schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__22375){
var extmap__5382__auto__ = (function (){var G__22385 = cljs.core.dissoc.call(null,G__22375,new cljs.core.Keyword(null,"p","p",151049309));
if(cljs.core.record_QMARK_.call(null,G__22375)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22385);
} else {
return G__22385;
}
})();
return (new schema.core.Protocol(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__22375),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

(RegExp.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,cljs.core.some_fn.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.string_QMARK_,(function (p1__20705__20706__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),(new cljs.core.List(null,p1__20705__20706__auto__,null,(1),null)),(2),null));
})),schema.spec.core.precondition.call(null,this$__$1,(function (p1__22390_SHARP_){
return cljs.core.re_find.call(null,this$__$1,p1__22390_SHARP_);
}),(function (p1__22391_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),(new cljs.core.List(null,schema.core.explain.call(null,this$__$1),(new cljs.core.List(null,p1__22391_SHARP_,null,(1),null)),(2),null)),(3),null));
}))));
}));

(RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.call(null,["#\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1).slice((1),(-1))),"\""].join(''));
}));
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.call(null,cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.call(null,cljs.core.integer_QMARK_,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null));
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.call(null,cljs.core.keyword_QMARK_,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null));
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.call(null,cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null));
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if((typeof schema !== 'undefined') && (typeof schema.core !== 'undefined') && (typeof schema.core.t_schema$core22394 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core22394 = (function (meta22395){
this.meta22395 = meta22395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(schema.core.t_schema$core22394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22396,meta22395__$1){
var self__ = this;
var _22396__$1 = this;
return (new schema.core.t_schema$core22394(meta22395__$1));
}));

(schema.core.t_schema$core22394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22396){
var self__ = this;
var _22396__$1 = this;
return self__.meta22395;
}));

(schema.core.t_schema$core22394.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.t_schema$core22394.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,(function (p1__22392_SHARP_){
return (p1__22392_SHARP_ instanceof RegExp);
}),(function (p1__22393_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),(new cljs.core.List(null,new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null),(new cljs.core.List(null,p1__22393_SHARP_,null,(1),null)),(2),null)),(3),null));
})));
}));

(schema.core.t_schema$core22394.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
}));

(schema.core.t_schema$core22394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22395","meta22395",984856266,null)], null);
}));

(schema.core.t_schema$core22394.cljs$lang$type = true);

(schema.core.t_schema$core22394.cljs$lang$ctorStr = "schema.core/t_schema$core22394");

(schema.core.t_schema$core22394.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"schema.core/t_schema$core22394");
}));

/**
 * Positional factory function for schema.core/t_schema$core22394.
 */
schema.core.__GT_t_schema$core22394 = (function schema$core$__GT_t_schema$core22394(meta22395){
return (new schema.core.t_schema$core22394(meta22395));
});

}

return (new schema.core.t_schema$core22394(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22398,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22402 = k22398;
var G__22402__$1 = (((G__22402 instanceof cljs.core.Keyword))?G__22402.fqn:null);
switch (G__22402__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22398,else__5343__auto__);

}
}));

(schema.core.Maybe.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22403){
var vec__22404 = p__22403;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22404,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22404,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.Maybe{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
}));

(schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22397){
var self__ = this;
var G__22397__$1 = this;
return (new cljs.core.RecordIter((0),G__22397__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-805411239 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22399,other22400){
var self__ = this;
var this22399__$1 = this;
return (((!((other22400 == null)))) && ((((this22399__$1.constructor === other22400.constructor)) && (((cljs.core._EQ_.call(null,this22399__$1.schema,other22400.schema)) && (cljs.core._EQ_.call(null,this22399__$1.__extmap,other22400.__extmap)))))));
}));

(schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.Maybe.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22398){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22407 = k22398;
var G__22407__$1 = (((G__22407 instanceof cljs.core.Keyword))?G__22407.fqn:null);
switch (G__22407__$1) {
case "schema":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22398);

}
}));

(schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22397){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22408 = cljs.core.keyword_identical_QMARK_;
var expr__22409 = k__5349__auto__;
if(cljs.core.truth_(pred__22408.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__22409))){
return (new schema.core.Maybe(G__22397,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22397),null));
}
}));

(schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null))], null),self__.__extmap));
}));

(schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22397){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__22397,self__.__extmap,self__.__hash));
}));

(schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.Maybe.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Maybe.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema.core.eq.call(null,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null));
}));

(schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"maybe","maybe",1326133967,null),(new cljs.core.List(null,schema.core.explain.call(null,self__.schema),null,(1),null)),(2),null));
}));

(schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
}));

(schema.core.Maybe.cljs$lang$type = true);

(schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/Maybe",null,(1),null));
}));

(schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/Maybe");
}));

/**
 * Positional factory function for schema.core/Maybe.
 */
schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Maybe, taking a map of keywords to field values.
 */
schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__22401){
var extmap__5382__auto__ = (function (){var G__22411 = cljs.core.dissoc.call(null,G__22401,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.record_QMARK_.call(null,G__22401)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22411);
} else {
return G__22411;
}
})();
return (new schema.core.Maybe(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__22401),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22416,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22420 = k22416;
var G__22420__$1 = (((G__22420 instanceof cljs.core.Keyword))?G__22420.fqn:null);
switch (G__22420__$1) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22416,else__5343__auto__);

}
}));

(schema.core.NamedSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22421){
var vec__22422 = p__22421;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22422,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22422,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.NamedSchema{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
}));

(schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22415){
var self__ = this;
var G__22415__$1 = this;
return (new cljs.core.RecordIter((0),G__22415__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (456601728 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22417,other22418){
var self__ = this;
var this22417__$1 = this;
return (((!((other22418 == null)))) && ((((this22417__$1.constructor === other22418.constructor)) && (((cljs.core._EQ_.call(null,this22417__$1.schema,other22418.schema)) && (((cljs.core._EQ_.call(null,this22417__$1.name,other22418.name)) && (cljs.core._EQ_.call(null,this22417__$1.__extmap,other22418.__extmap)))))))));
}));

(schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.NamedSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22416){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22425 = k22416;
var G__22425__$1 = (((G__22425 instanceof cljs.core.Keyword))?G__22425.fqn:null);
switch (G__22425__$1) {
case "schema":
case "name":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22416);

}
}));

(schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22415){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22426 = cljs.core.keyword_identical_QMARK_;
var expr__22427 = k__5349__auto__;
if(cljs.core.truth_(pred__22426.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__22427))){
return (new schema.core.NamedSchema(G__22415,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22426.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__22427))){
return (new schema.core.NamedSchema(self__.schema,G__22415,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22415),null));
}
}
}));

(schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null))], null),self__.__extmap));
}));

(schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22415){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__22415,self__.__extmap,self__.__hash));
}));

(schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.NamedSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,new cljs.core.Keyword(null,"wrap-error","wrap-error",536732809),(function (p1__22414_SHARP_){
return schema.utils.__GT_NamedError.call(null,self__.name,p1__22414_SHARP_);
})], null)], null));
}));

(schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"named","named",1218138048,null),(new cljs.core.List(null,schema.core.explain.call(null,self__.schema),(new cljs.core.List(null,self__.name,null,(1),null)),(2),null)),(3),null));
}));

(schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
}));

(schema.core.NamedSchema.cljs$lang$type = true);

(schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/NamedSchema",null,(1),null));
}));

(schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/NamedSchema");
}));

/**
 * Positional factory function for schema.core/NamedSchema.
 */
schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
 * Factory function for schema.core/NamedSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__22419){
var extmap__5382__auto__ = (function (){var G__22429 = cljs.core.dissoc.call(null,G__22419,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.record_QMARK_.call(null,G__22419)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22429);
} else {
return G__22429;
}
})();
return (new schema.core.NamedSchema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__22419),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__22419),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22434,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22438 = k22434;
var G__22438__$1 = (((G__22438 instanceof cljs.core.Keyword))?G__22438.fqn:null);
switch (G__22438__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22434,else__5343__auto__);

}
}));

(schema.core.Either.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22439){
var vec__22440 = p__22439;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22440,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22440,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.Either{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
}));

(schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22433){
var self__ = this;
var G__22433__$1 = this;
return (new cljs.core.RecordIter((0),G__22433__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1018568510 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22435,other22436){
var self__ = this;
var this22435__$1 = this;
return (((!((other22436 == null)))) && ((((this22435__$1.constructor === other22436.constructor)) && (((cljs.core._EQ_.call(null,this22435__$1.schemas,other22436.schemas)) && (cljs.core._EQ_.call(null,this22435__$1.__extmap,other22436.__extmap)))))));
}));

(schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.Either.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22434){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22443 = k22434;
var G__22443__$1 = (((G__22443 instanceof cljs.core.Keyword))?G__22443.fqn:null);
switch (G__22443__$1) {
case "schemas":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22434);

}
}));

(schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22433){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22444 = cljs.core.keyword_identical_QMARK_;
var expr__22445 = k__5349__auto__;
if(cljs.core.truth_(pred__22444.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__22445))){
return (new schema.core.Either(G__22433,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22433),null));
}
}));

(schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas,null))], null),self__.__extmap));
}));

(schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22433){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__22433,self__.__extmap,self__.__hash));
}));

(schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.Either.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__5520__auto__ = (function schema$core$iter__22447(s__22448){
return (new cljs.core.LazySeq(null,(function (){
var s__22448__$1 = s__22448;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__22448__$1);
if(temp__5804__auto__){
var s__22448__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22448__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__22448__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__22450 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__22449 = (0);
while(true){
if((i__22449 < size__5519__auto__)){
var s = cljs.core._nth.call(null,c__5518__auto__,i__22449);
cljs.core.chunk_append.call(null,b__22450,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement.call(null,schema.core.checker.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__22454 = (i__22449 + (1));
i__22449 = G__22454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22450),schema$core$iter__22447.call(null,cljs.core.chunk_rest.call(null,s__22448__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22450),null);
}
} else {
var s = cljs.core.first.call(null,s__22448__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement.call(null,schema.core.checker.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__22447.call(null,cljs.core.rest.call(null,s__22448__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,self__.schemas);
})(),(function (p1__22432_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"some-matching-either-clause?","some-matching-either-clause?",-1443305015,null),(new cljs.core.List(null,p1__22432_SHARP_,null,(1),null)),(2),null));
}));
}));

(schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
}));

(schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
}));

(schema.core.Either.cljs$lang$type = true);

(schema.core.Either.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/Either",null,(1),null));
}));

(schema.core.Either.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/Either");
}));

/**
 * Positional factory function for schema.core/Either.
 */
schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

/**
 * Factory function for schema.core/Either, taking a map of keywords to field values.
 */
schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__22437){
var extmap__5382__auto__ = (function (){var G__22451 = cljs.core.dissoc.call(null,G__22437,new cljs.core.Keyword(null,"schemas","schemas",575070579));
if(cljs.core.record_QMARK_.call(null,G__22437)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22451);
} else {
return G__22451;
}
})();
return (new schema.core.Either(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__22437),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.Either.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

/**
 * A value that must satisfy at least one schema in schemas.
 * Note that `either` does not work properly with coercion
 * 
 * DEPRECATED: prefer `conditional` or `cond-pre`
 * 
 * WARNING: either does not work with coercion.  It is also slow and gives
 * bad error messages.  Please consider using `conditional` and friends
 * instead; they are more efficient, provide better error messages,
 * and work with coercion.
 */
schema.core.either = (function schema$core$either(var_args){
var args__5772__auto__ = [];
var len__5766__auto___22456 = arguments.length;
var i__5767__auto___22457 = (0);
while(true){
if((i__5767__auto___22457 < len__5766__auto___22456)){
args__5772__auto__.push((arguments[i__5767__auto___22457]));

var G__22458 = (i__5767__auto___22457 + (1));
i__5767__auto___22457 = G__22458;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
}));

(schema.core.either.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.either.cljs$lang$applyTo = (function (seq22455){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22455));
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.ConditionalSchema = (function (preds_and_schemas,error_symbol,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.error_symbol = error_symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22461,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22465 = k22461;
var G__22465__$1 = (((G__22465 instanceof cljs.core.Keyword))?G__22465.fqn:null);
switch (G__22465__$1) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22461,else__5343__auto__);

}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22466){
var vec__22467 = p__22466;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22467,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22467,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol],null))], null),self__.__extmap));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22460){
var self__ = this;
var G__22460__$1 = this;
return (new cljs.core.RecordIter((0),G__22460__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1418435858 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22462,other22463){
var self__ = this;
var this22462__$1 = this;
return (((!((other22463 == null)))) && ((((this22462__$1.constructor === other22463.constructor)) && (((cljs.core._EQ_.call(null,this22462__$1.preds_and_schemas,other22463.preds_and_schemas)) && (((cljs.core._EQ_.call(null,this22462__$1.error_symbol,other22463.error_symbol)) && (cljs.core._EQ_.call(null,this22462__$1.__extmap,other22463.__extmap)))))))));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22461){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22470 = k22461;
var G__22470__$1 = (((G__22470 instanceof cljs.core.Keyword))?G__22470.fqn:null);
switch (G__22470__$1) {
case "preds-and-schemas":
case "error-symbol":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22461);

}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22460){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22471 = cljs.core.keyword_identical_QMARK_;
var expr__22472 = k__5349__auto__;
if(cljs.core.truth_(pred__22471.call(null,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),expr__22472))){
return (new schema.core.ConditionalSchema(G__22460,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22471.call(null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),expr__22472))){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__22460,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22460),null));
}
}
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol,null))], null),self__.__extmap));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22460){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__22460,self__.__extmap,self__.__hash));
}));

(schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.ConditionalSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__5520__auto__ = (function schema$core$iter__22474(s__22475){
return (new cljs.core.LazySeq(null,(function (){
var s__22475__$1 = s__22475;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__22475__$1);
if(temp__5804__auto__){
var s__22475__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22475__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__22475__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__22477 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__22476 = (0);
while(true){
if((i__22476 < size__5519__auto__)){
var vec__22478 = cljs.core._nth.call(null,c__5518__auto__,i__22476);
var p = cljs.core.nth.call(null,vec__22478,(0),null);
var s = cljs.core.nth.call(null,vec__22478,(1),null);
cljs.core.chunk_append.call(null,b__22477,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__22491 = (i__22476 + (1));
i__22476 = G__22491;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22477),schema$core$iter__22474.call(null,cljs.core.chunk_rest.call(null,s__22475__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22477),null);
}
} else {
var vec__22481 = cljs.core.first.call(null,s__22475__$2);
var p = cljs.core.nth.call(null,vec__22481,(0),null);
var s = cljs.core.nth.call(null,vec__22481,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__22474.call(null,cljs.core.rest.call(null,s__22475__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,self__.preds_and_schemas);
})(),(function (p1__22459_SHARP_){
return (new cljs.core.List(null,(function (){var or__5043__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,self__.preds_and_schemas))){
return cljs.core.symbol.call(null,schema.utils.fn_name.call(null,cljs.core.ffirst.call(null,self__.preds_and_schemas)));
} else {
return new cljs.core.Symbol(null,"some-matching-condition?","some-matching-condition?",1512398506,null);
}
}
})(),(new cljs.core.List(null,p1__22459_SHARP_,null,(1),null)),(2),null));
}));
}));

(schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.concat.call(null,cljs.core.mapcat.call(null,(function (p__22484){
var vec__22485 = p__22484;
var pred = cljs.core.nth.call(null,vec__22485,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__22485,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,schema.utils.fn_name.call(null,pred)),schema.core.explain.call(null,schema__$1)], null);
}),self__.preds_and_schemas),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
}));

(schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"preds-and-schemas","preds-and-schemas",333765172,null),new cljs.core.Symbol(null,"error-symbol","error-symbol",817051099,null)], null);
}));

(schema.core.ConditionalSchema.cljs$lang$type = true);

(schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/ConditionalSchema",null,(1),null));
}));

(schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/ConditionalSchema");
}));

/**
 * Positional factory function for schema.core/ConditionalSchema.
 */
schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

/**
 * Factory function for schema.core/ConditionalSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__22464){
var extmap__5382__auto__ = (function (){var G__22488 = cljs.core.dissoc.call(null,G__22464,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428));
if(cljs.core.record_QMARK_.call(null,G__22464)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22488);
} else {
return G__22488;
}
})();
return (new schema.core.ConditionalSchema(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355).cljs$core$IFn$_invoke$arity$1(G__22464),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428).cljs$core$IFn$_invoke$arity$1(G__22464),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schemaX where predX (an ordinary Clojure function
 * that returns true or false) returns true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 * An optional final argument can be passed, a symbol to appear in
 * error messages when none of the conditions match.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__5772__auto__ = [];
var len__5766__auto___22503 = arguments.length;
var i__5767__auto___22504 = (0);
while(true){
if((i__5767__auto___22504 < len__5766__auto___22503)){
args__5772__auto__.push((arguments[i__5767__auto___22504]));

var G__22505 = (i__5767__auto___22504 + (1));
i__5767__auto___22504 = G__22505;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if(((cljs.core.seq.call(null,preds_and_schemas)) && (((cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas))) || ((cljs.core.last.call(null,preds_and_schemas) instanceof cljs.core.Symbol)))))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.count.call(null,preds_and_schemas))));
}

return (new schema.core.ConditionalSchema(cljs.core.vec.call(null,(function (){var iter__5520__auto__ = (function schema$core$iter__22493(s__22494){
return (new cljs.core.LazySeq(null,(function (){
var s__22494__$1 = s__22494;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__22494__$1);
if(temp__5804__auto__){
var s__22494__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22494__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__22494__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__22496 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__22495 = (0);
while(true){
if((i__22495 < size__5519__auto__)){
var vec__22497 = cljs.core._nth.call(null,c__5518__auto__,i__22495);
var pred = cljs.core.nth.call(null,vec__22497,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__22497,(1),null);
cljs.core.chunk_append.call(null,b__22496,(function (){
if(cljs.core.ifn_QMARK_.call(null,pred)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,["Conditional predicate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," must be a function"].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null);
})()
);

var G__22506 = (i__22495 + (1));
i__22495 = G__22506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22496),schema$core$iter__22493.call(null,cljs.core.chunk_rest.call(null,s__22494__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22496),null);
}
} else {
var vec__22500 = cljs.core.first.call(null,s__22494__$2);
var pred = cljs.core.nth.call(null,vec__22500,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__22500,(1),null);
return cljs.core.cons.call(null,(function (){
if(cljs.core.ifn_QMARK_.call(null,pred)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,["Conditional predicate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," must be a function"].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null);
})()
,schema$core$iter__22493.call(null,cljs.core.rest.call(null,s__22494__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,cljs.core.partition.call(null,(2),preds_and_schemas));
})()),((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas)))?cljs.core.last.call(null,preds_and_schemas):null),null,null,null));
}));

(schema.core.conditional.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.conditional.cljs$lang$applyTo = (function (seq22492){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22492));
}));


/**
 * @interface
 */
schema.core.HasPrecondition = function(){};

var schema$core$HasPrecondition$precondition$dyn_22507 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (schema.core.precondition[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$);
} else {
var m__5389__auto__ = (schema.core.precondition["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HasPrecondition.precondition",this$);
}
}
});
/**
 * Return a predicate representing the Precondition for this schema:
 *   the predicate returns true if the precondition is satisfied.
 *   (See spec.core for more details)
 */
schema.core.precondition = (function schema$core$precondition(this$){
if((((!((this$ == null)))) && ((!((this$.schema$core$HasPrecondition$precondition$arity$1 == null)))))){
return this$.schema$core$HasPrecondition$precondition$arity$1(this$);
} else {
return schema$core$HasPrecondition$precondition$dyn_22507.call(null,this$);
}
});

(schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL);

(schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement.call(null,this$__$1.pre);
}));

(schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL);

(schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.every_pred.call(null,cljs.core.complement.call(null,this$__$1.pre),cljs.core.apply.call(null,cljs.core.some_fn,(function (){var iter__5520__auto__ = (function schema$core$iter__22508(s__22509){
return (new cljs.core.LazySeq(null,(function (){
var s__22509__$1 = s__22509;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__22509__$1);
if(temp__5804__auto__){
var s__22509__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22509__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__22509__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__22511 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__22510 = (0);
while(true){
if((i__22510 < size__5519__auto__)){
var map__22512 = cljs.core._nth.call(null,c__5518__auto__,i__22510);
var map__22512__$1 = cljs.core.__destructure_map.call(null,map__22512);
var guard = cljs.core.get.call(null,map__22512__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.call(null,map__22512__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
cljs.core.chunk_append.call(null,b__22511,(cljs.core.truth_(guard)?cljs.core.every_pred.call(null,guard,schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))):schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))));

var G__22514 = (i__22510 + (1));
i__22510 = G__22514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22511),schema$core$iter__22508.call(null,cljs.core.chunk_rest.call(null,s__22509__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22511),null);
}
} else {
var map__22513 = cljs.core.first.call(null,s__22509__$2);
var map__22513__$1 = cljs.core.__destructure_map.call(null,map__22513);
var guard = cljs.core.get.call(null,map__22513__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.call(null,map__22513__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return cljs.core.cons.call(null,(cljs.core.truth_(guard)?cljs.core.every_pred.call(null,guard,schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))):schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))),schema$core$iter__22508.call(null,cljs.core.rest.call(null,s__22509__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,this$__$1.options);
})()));
}));

(schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL);

(schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement.call(null,this$__$1.pre);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.CondPre = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22517,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22521 = k22517;
var G__22521__$1 = (((G__22521 instanceof cljs.core.Keyword))?G__22521.fqn:null);
switch (G__22521__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22517,else__5343__auto__);

}
}));

(schema.core.CondPre.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22522){
var vec__22523 = p__22522;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22523,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22523,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.CondPre{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
}));

(schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22516){
var self__ = this;
var G__22516__$1 = this;
return (new cljs.core.RecordIter((0),G__22516__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-56613580 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22518,other22519){
var self__ = this;
var this22518__$1 = this;
return (((!((other22519 == null)))) && ((((this22518__$1.constructor === other22519.constructor)) && (((cljs.core._EQ_.call(null,this22518__$1.schemas,other22519.schemas)) && (cljs.core._EQ_.call(null,this22518__$1.__extmap,other22519.__extmap)))))));
}));

(schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.CondPre.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22517){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22526 = k22517;
var G__22526__$1 = (((G__22526 instanceof cljs.core.Keyword))?G__22526.fqn:null);
switch (G__22526__$1) {
case "schemas":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22517);

}
}));

(schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22516){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22527 = cljs.core.keyword_identical_QMARK_;
var expr__22528 = k__5349__auto__;
if(cljs.core.truth_(pred__22527.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__22528))){
return (new schema.core.CondPre(G__22516,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22516),null));
}
}));

(schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas,null))], null),self__.__extmap));
}));

(schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22516){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__22516,self__.__extmap,self__.__hash));
}));

(schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.CondPre.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__5520__auto__ = (function schema$core$iter__22530(s__22531){
return (new cljs.core.LazySeq(null,(function (){
var s__22531__$1 = s__22531;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__22531__$1);
if(temp__5804__auto__){
var s__22531__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22531__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__22531__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__22533 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__22532 = (0);
while(true){
if((i__22532 < size__5519__auto__)){
var s = cljs.core._nth.call(null,c__5518__auto__,i__22532);
cljs.core.chunk_append.call(null,b__22533,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition.call(null,schema.core.spec.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__22537 = (i__22532 + (1));
i__22532 = G__22537;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22533),schema$core$iter__22530.call(null,cljs.core.chunk_rest.call(null,s__22531__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22533),null);
}
} else {
var s = cljs.core.first.call(null,s__22531__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition.call(null,schema.core.spec.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__22530.call(null,cljs.core.rest.call(null,s__22531__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,self__.schemas);
})(),(function (p1__22515_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"matches-some-precondition?","matches-some-precondition?",2123072832,null),(new cljs.core.List(null,p1__22515_SHARP_,null,(1),null)),(2),null));
}));
}));

(schema.core.CondPre.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"cond-pre","cond-pre",-923707731,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
}));

(schema.core.CondPre.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
}));

(schema.core.CondPre.cljs$lang$type = true);

(schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/CondPre",null,(1),null));
}));

(schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/CondPre");
}));

/**
 * Positional factory function for schema.core/CondPre.
 */
schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

/**
 * Factory function for schema.core/CondPre, taking a map of keywords to field values.
 */
schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__22520){
var extmap__5382__auto__ = (function (){var G__22534 = cljs.core.dissoc.call(null,G__22520,new cljs.core.Keyword(null,"schemas","schemas",575070579));
if(cljs.core.record_QMARK_.call(null,G__22520)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22534);
} else {
return G__22534;
}
})();
return (new schema.core.CondPre(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__22520),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

/**
 * A replacement for `either` that constructs a conditional schema
 * based on the schema spec preconditions of the component schemas.
 * 
 * Given a datum, the preconditions for each schema (which typically
 * check just the outermost class) are tested against the datum in turn.
 * The first schema whose precondition matches is greedily selected,
 * and the datum is validated against that schema.  Unlike `either`,
 * a validation failure is final (and there is no backtracking to try
 * other schemas that might match).
 * 
 * Thus, `cond-pre` is only suitable for schemas with mutually exclusive
 * preconditions (e.g., s/Int and s/Str).  If this doesn't hold
 * (e.g. {:a s/Int} and {:b s/Str}), you must use `conditional` instead
 * and provide an explicit condition for distinguishing the cases.
 * 
 * EXPERIMENTAL
 */
schema.core.cond_pre = (function schema$core$cond_pre(var_args){
var args__5772__auto__ = [];
var len__5766__auto___22539 = arguments.length;
var i__5767__auto___22540 = (0);
while(true){
if((i__5767__auto___22540 < len__5766__auto___22539)){
args__5772__auto__.push((arguments[i__5767__auto___22540]));

var G__22541 = (i__5767__auto___22540 + (1));
i__5767__auto___22540 = G__22541;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
}));

(schema.core.cond_pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.cond_pre.cljs$lang$applyTo = (function (seq22538){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22538));
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Constrained = (function (schema,postcondition,post_name,__meta,__extmap,__hash){
this.schema = schema;
this.postcondition = postcondition;
this.post_name = post_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22544,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22548 = k22544;
var G__22548__$1 = (((G__22548 instanceof cljs.core.Keyword))?G__22548.fqn:null);
switch (G__22548__$1) {
case "schema":
return self__.schema;

break;
case "postcondition":
return self__.postcondition;

break;
case "post-name":
return self__.post_name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22544,else__5343__auto__);

}
}));

(schema.core.Constrained.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22549){
var vec__22550 = p__22549;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22550,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22550,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.Constrained{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name],null))], null),self__.__extmap));
}));

(schema.core.Constrained.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22543){
var self__ = this;
var G__22543__$1 = this;
return (new cljs.core.RecordIter((0),G__22543__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.Constrained.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Constrained.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Constrained.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.Constrained.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (725895648 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.Constrained.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22545,other22546){
var self__ = this;
var this22545__$1 = this;
return (((!((other22546 == null)))) && ((((this22545__$1.constructor === other22546.constructor)) && (((cljs.core._EQ_.call(null,this22545__$1.schema,other22546.schema)) && (((cljs.core._EQ_.call(null,this22545__$1.postcondition,other22546.postcondition)) && (((cljs.core._EQ_.call(null,this22545__$1.post_name,other22546.post_name)) && (cljs.core._EQ_.call(null,this22545__$1.__extmap,other22546.__extmap)))))))))));
}));

(schema.core.Constrained.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"post-name","post-name",491455269),null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.Constrained.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22544){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22553 = k22544;
var G__22553__$1 = (((G__22553 instanceof cljs.core.Keyword))?G__22553.fqn:null);
switch (G__22553__$1) {
case "schema":
case "postcondition":
case "post-name":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22544);

}
}));

(schema.core.Constrained.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22543){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22554 = cljs.core.keyword_identical_QMARK_;
var expr__22555 = k__5349__auto__;
if(cljs.core.truth_(pred__22554.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__22555))){
return (new schema.core.Constrained(G__22543,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22554.call(null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),expr__22555))){
return (new schema.core.Constrained(self__.schema,G__22543,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22554.call(null,new cljs.core.Keyword(null,"post-name","post-name",491455269),expr__22555))){
return (new schema.core.Constrained(self__.schema,self__.postcondition,G__22543,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22543),null));
}
}
}
}));

(schema.core.Constrained.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name,null))], null),self__.__extmap));
}));

(schema.core.Constrained.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22543){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,G__22543,self__.__extmap,self__.__hash));
}));

(schema.core.Constrained.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.Constrained.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Constrained.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null),null,schema.spec.core.precondition.call(null,this$__$1,self__.postcondition,(function (p1__22542_SHARP_){
return (new cljs.core.List(null,self__.post_name,(new cljs.core.List(null,p1__22542_SHARP_,null,(1),null)),(2),null));
})));
}));

(schema.core.Constrained.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"constrained","constrained",-2057147788,null),(new cljs.core.List(null,schema.core.explain.call(null,self__.schema),(new cljs.core.List(null,self__.post_name,null,(1),null)),(2),null)),(3),null));
}));

(schema.core.Constrained.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"postcondition","postcondition",903430305,null),new cljs.core.Symbol(null,"post-name","post-name",2131986796,null)], null);
}));

(schema.core.Constrained.cljs$lang$type = true);

(schema.core.Constrained.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/Constrained",null,(1),null));
}));

(schema.core.Constrained.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/Constrained");
}));

/**
 * Positional factory function for schema.core/Constrained.
 */
schema.core.__GT_Constrained = (function schema$core$__GT_Constrained(schema__$1,postcondition,post_name){
return (new schema.core.Constrained(schema__$1,postcondition,post_name,null,null,null));
});

/**
 * Factory function for schema.core/Constrained, taking a map of keywords to field values.
 */
schema.core.map__GT_Constrained = (function schema$core$map__GT_Constrained(G__22547){
var extmap__5382__auto__ = (function (){var G__22557 = cljs.core.dissoc.call(null,G__22547,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269));
if(cljs.core.record_QMARK_.call(null,G__22547)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22557);
} else {
return G__22557;
}
})();
return (new schema.core.Constrained(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__22547),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222).cljs$core$IFn$_invoke$arity$1(G__22547),new cljs.core.Keyword(null,"post-name","post-name",491455269).cljs$core$IFn$_invoke$arity$1(G__22547),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

/**
 * A schema with an additional post-condition.  Differs from `conditional`
 * with a single schema, in that the predicate checked *after* the main
 * schema.  This can lead to better error messages, and is often better
 * suited for coercion.
 */
schema.core.constrained = (function schema$core$constrained(var_args){
var G__22561 = arguments.length;
switch (G__22561) {
case 2:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema.core.constrained.cljs$core$IFn$_invoke$arity$2 = (function (s,p_QMARK_){
return schema.core.constrained.call(null,s,p_QMARK_,cljs.core.symbol.call(null,schema.utils.fn_name.call(null,p_QMARK_)));
}));

(schema.core.constrained.cljs$core$IFn$_invoke$arity$3 = (function (s,p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_.call(null,p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not a function: %s",p_QMARK_)));
}

return (new schema.core.Constrained(s,p_QMARK_,pred_name,null,null,null));
}));

(schema.core.constrained.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {schema.core.HasPrecondition}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22565,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22569 = k22565;
var G__22569__$1 = (((G__22569 instanceof cljs.core.Keyword))?G__22569.fqn:null);
switch (G__22569__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22565,else__5343__auto__);

}
}));

(schema.core.Both.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22570){
var vec__22571 = p__22570;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22571,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22571,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.Both.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.schemas;
}));

(schema.core.Both.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.call(null,(function (f,t){
return (function (x){
var tx = t.call(null,x);
if(schema.utils.error_QMARK_.call(null,tx)){
return tx;
} else {
return f.call(null,(function (){var or__5043__auto__ = tx;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return x;
}
})());
}
});
}),cljs.core.map.call(null,(function (p1__22563_SHARP_){
return schema.spec.core.sub_checker.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),p1__22563_SHARP_], null),params);
}),cljs.core.reverse.call(null,self__.schemas)));
}));

(schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.Both{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
}));

(schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22564){
var self__ = this;
var G__22564__$1 = this;
return (new cljs.core.RecordIter((0),G__22564__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1189778852 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22566,other22567){
var self__ = this;
var this22566__$1 = this;
return (((!((other22567 == null)))) && ((((this22566__$1.constructor === other22567.constructor)) && (((cljs.core._EQ_.call(null,this22566__$1.schemas,other22567.schemas)) && (cljs.core._EQ_.call(null,this22566__$1.__extmap,other22567.__extmap)))))));
}));

(schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.Both.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,cljs.core.every_pred,cljs.core.map.call(null,cljs.core.comp.call(null,schema.core.precondition,schema.core.spec),self__.schemas));
}));

(schema.core.Both.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22565){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22574 = k22565;
var G__22574__$1 = (((G__22574 instanceof cljs.core.Keyword))?G__22574.fqn:null);
switch (G__22574__$1) {
case "schemas":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22565);

}
}));

(schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22564){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22575 = cljs.core.keyword_identical_QMARK_;
var expr__22576 = k__5349__auto__;
if(cljs.core.truth_(pred__22575.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__22576))){
return (new schema.core.Both(G__22564,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22564),null));
}
}));

(schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas,null))], null),self__.__extmap));
}));

(schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22564){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__22564,self__.__extmap,self__.__hash));
}));

(schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.Both.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
}));

(schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
}));

(schema.core.Both.cljs$lang$type = true);

(schema.core.Both.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/Both",null,(1),null));
}));

(schema.core.Both.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/Both");
}));

/**
 * Positional factory function for schema.core/Both.
 */
schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

/**
 * Factory function for schema.core/Both, taking a map of keywords to field values.
 */
schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__22568){
var extmap__5382__auto__ = (function (){var G__22578 = cljs.core.dissoc.call(null,G__22568,new cljs.core.Keyword(null,"schemas","schemas",575070579));
if(cljs.core.record_QMARK_.call(null,G__22568)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22578);
} else {
return G__22578;
}
})();
return (new schema.core.Both(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__22568),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.Both.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

/**
 * A value that must satisfy every schema in schemas.
 * 
 * DEPRECATED: prefer 'conditional' with a single condition
 * instead, or `constrained`.
 * 
 * When used with coercion, coerces each schema in sequence.
 */
schema.core.both = (function schema$core$both(var_args){
var args__5772__auto__ = [];
var len__5766__auto___22582 = arguments.length;
var i__5767__auto___22583 = (0);
while(true){
if((i__5767__auto___22583 < len__5766__auto___22582)){
args__5772__auto__.push((arguments[i__5767__auto___22583]));

var G__22584 = (i__5767__auto___22583 + (1));
i__5767__auto___22583 = G__22584;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
}));

(schema.core.both.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schema.core.both.cljs$lang$applyTo = (function (seq22581){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22581));
}));

/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.call(null,pred,if_schema,cljs.core.constantly.call(null,true),else_schema);
});
schema.core.var_name = (function schema$core$var_name(v){
var map__22585 = cljs.core.meta.call(null,v);
var map__22585__$1 = cljs.core.__destructure_map.call(null,map__22585);
var ns = cljs.core.get.call(null,map__22585__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__22585__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22587,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22591 = k22587;
var G__22591__$1 = (((G__22591 instanceof cljs.core.Keyword))?G__22591.fqn:null);
switch (G__22591__$1) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22587,else__5343__auto__);

}
}));

(schema.core.Recursive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22592){
var vec__22593 = p__22592;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22593,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22593,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.Recursive{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable],null))], null),self__.__extmap));
}));

(schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22586){
var self__ = this;
var G__22586__$1 = this;
return (new cljs.core.RecordIter((0),G__22586__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"derefable","derefable",377265868)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1521498755 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22588,other22589){
var self__ = this;
var this22588__$1 = this;
return (((!((other22589 == null)))) && ((((this22588__$1.constructor === other22589.constructor)) && (((cljs.core._EQ_.call(null,this22588__$1.derefable,other22589.derefable)) && (cljs.core._EQ_.call(null,this22588__$1.__extmap,other22589.__extmap)))))));
}));

(schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"derefable","derefable",377265868),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.Recursive.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22587){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22596 = k22587;
var G__22596__$1 = (((G__22596 instanceof cljs.core.Keyword))?G__22596.fqn:null);
switch (G__22596__$1) {
case "derefable":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22587);

}
}));

(schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22586){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22597 = cljs.core.keyword_identical_QMARK_;
var expr__22598 = k__5349__auto__;
if(cljs.core.truth_(pred__22597.call(null,new cljs.core.Keyword(null,"derefable","derefable",377265868),expr__22598))){
return (new schema.core.Recursive(G__22586,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22586),null));
}
}));

(schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable,null))], null),self__.__extmap));
}));

(schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22586){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__22586,self__.__extmap,self__.__hash));
}));

(schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.Recursive.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Recursive.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.deref.call(null,self__.derefable)], null)], null));
}));

(schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"recursive","recursive",-1935549897,null),(new cljs.core.List(null,(((self__.derefable instanceof cljs.core.Var))?(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,schema.core.var_name.call(null,self__.derefable),null,(1),null)),(2),null)):new cljs.core.Symbol(null,"...","...",-1926939749,null)),null,(1),null)),(2),null));
}));

(schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"derefable","derefable",2017797395,null)], null);
}));

(schema.core.Recursive.cljs$lang$type = true);

(schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/Recursive",null,(1),null));
}));

(schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/Recursive");
}));

/**
 * Positional factory function for schema.core/Recursive.
 */
schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

/**
 * Factory function for schema.core/Recursive, taking a map of keywords to field values.
 */
schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__22590){
var extmap__5382__auto__ = (function (){var G__22600 = cljs.core.dissoc.call(null,G__22590,new cljs.core.Keyword(null,"derefable","derefable",377265868));
if(cljs.core.record_QMARK_.call(null,G__22590)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22600);
} else {
return G__22600;
}
})();
return (new schema.core.Recursive(new cljs.core.Keyword(null,"derefable","derefable",377265868).cljs$core$IFn$_invoke$arity$1(G__22590),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if((((!((schema__$1 == null))))?(((((schema__$1.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === schema__$1.cljs$core$IDeref$))))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,schema__$1):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not an IDeref: %s",schema__$1)));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
});
schema.core.atom_QMARK_ = (function schema$core$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IAtom$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Atomic = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22606,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22610 = k22606;
var G__22610__$1 = (((G__22610 instanceof cljs.core.Keyword))?G__22610.fqn:null);
switch (G__22610__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22606,else__5343__auto__);

}
}));

(schema.core.Atomic.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22611){
var vec__22612 = p__22611;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22612,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22612,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.Atomic{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
}));

(schema.core.Atomic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22605){
var self__ = this;
var G__22605__$1 = this;
return (new cljs.core.RecordIter((0),G__22605__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.Atomic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Atomic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Atomic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.Atomic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (1019346599 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.Atomic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22607,other22608){
var self__ = this;
var this22607__$1 = this;
return (((!((other22608 == null)))) && ((((this22607__$1.constructor === other22608.constructor)) && (((cljs.core._EQ_.call(null,this22607__$1.schema,other22608.schema)) && (cljs.core._EQ_.call(null,this22607__$1.__extmap,other22608.__extmap)))))));
}));

(schema.core.Atomic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.Atomic.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22606){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22615 = k22606;
var G__22615__$1 = (((G__22615 instanceof cljs.core.Keyword))?G__22615.fqn:null);
switch (G__22615__$1) {
case "schema":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22606);

}
}));

(schema.core.Atomic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22605){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22616 = cljs.core.keyword_identical_QMARK_;
var expr__22617 = k__5349__auto__;
if(cljs.core.truth_(pred__22616.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__22617))){
return (new schema.core.Atomic(G__22605,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22605),null));
}
}));

(schema.core.Atomic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null))], null),self__.__extmap));
}));

(schema.core.Atomic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22605){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,G__22605,self__.__extmap,self__.__hash));
}));

(schema.core.Atomic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.Atomic.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Atomic.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,schema.core.atom_QMARK_,(function (p1__20705__20706__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null),(new cljs.core.List(null,p1__20705__20706__auto__,null,(1),null)),(2),null));
})),cljs.core.atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element.call(null,true,self__.schema,(function (item_fn,coll){
item_fn.call(null,cljs.core.deref.call(null,coll));

return null;
}))], null),(function (_,xs,___$1){
return cljs.core.atom.call(null,cljs.core.first.call(null,xs));
}));
}));

(schema.core.Atomic.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"atom","atom",1243487874,null),(new cljs.core.List(null,schema.core.explain.call(null,self__.schema),null,(1),null)),(2),null));
}));

(schema.core.Atomic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
}));

(schema.core.Atomic.cljs$lang$type = true);

(schema.core.Atomic.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/Atomic",null,(1),null));
}));

(schema.core.Atomic.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/Atomic");
}));

/**
 * Positional factory function for schema.core/Atomic.
 */
schema.core.__GT_Atomic = (function schema$core$__GT_Atomic(schema__$1){
return (new schema.core.Atomic(schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Atomic, taking a map of keywords to field values.
 */
schema.core.map__GT_Atomic = (function schema$core$map__GT_Atomic(G__22609){
var extmap__5382__auto__ = (function (){var G__22619 = cljs.core.dissoc.call(null,G__22609,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.record_QMARK_.call(null,G__22609)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22619);
} else {
return G__22619;
}
})();
return (new schema.core.Atomic(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__22609),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

/**
 * An atom containing a value matching 'schema'.
 */
schema.core.atom = (function schema$core$atom(schema__$1){
return schema.core.__GT_Atomic.call(null,schema__$1);
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
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22623,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22627 = k22623;
var G__22627__$1 = (((G__22627 instanceof cljs.core.Keyword))?G__22627.fqn:null);
switch (G__22627__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22623,else__5343__auto__);

}
}));

(schema.core.RequiredKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22628){
var vec__22629 = p__22628;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22629,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22629,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.RequiredKey{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22622){
var self__ = this;
var G__22622__$1 = this;
return (new cljs.core.RecordIter((0),G__22622__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1805575094 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22624,other22625){
var self__ = this;
var this22624__$1 = this;
return (((!((other22625 == null)))) && ((((this22624__$1.constructor === other22625.constructor)) && (((cljs.core._EQ_.call(null,this22624__$1.k,other22625.k)) && (cljs.core._EQ_.call(null,this22624__$1.__extmap,other22625.__extmap)))))));
}));

(schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.RequiredKey.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22623){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22632 = k22623;
var G__22632__$1 = (((G__22632 instanceof cljs.core.Keyword))?G__22632.fqn:null);
switch (G__22632__$1) {
case "k":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22623);

}
}));

(schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22622){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22633 = cljs.core.keyword_identical_QMARK_;
var expr__22634 = k__5349__auto__;
if(cljs.core.truth_(pred__22633.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__22634))){
return (new schema.core.RequiredKey(G__22622,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22622),null));
}
}));

(schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22622){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__22622,self__.__extmap,self__.__hash));
}));

(schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(schema.core.RequiredKey.cljs$lang$type = true);

(schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/RequiredKey",null,(1),null));
}));

(schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/RequiredKey");
}));

/**
 * Positional factory function for schema.core/RequiredKey.
 */
schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

/**
 * Factory function for schema.core/RequiredKey, taking a map of keywords to field values.
 */
schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__22626){
var extmap__5382__auto__ = (function (){var G__22636 = cljs.core.dissoc.call(null,G__22626,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_.call(null,G__22626)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22636);
} else {
return G__22636;
}
})();
return (new schema.core.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__22626),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return (((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey)));
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
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22640,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22644 = k22640;
var G__22644__$1 = (((G__22644 instanceof cljs.core.Keyword))?G__22644.fqn:null);
switch (G__22644__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22640,else__5343__auto__);

}
}));

(schema.core.OptionalKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22645){
var vec__22646 = p__22645;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22646,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22646,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.OptionalKey{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22639){
var self__ = this;
var G__22639__$1 = this;
return (new cljs.core.RecordIter((0),G__22639__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1508333161 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22641,other22642){
var self__ = this;
var this22641__$1 = this;
return (((!((other22642 == null)))) && ((((this22641__$1.constructor === other22642.constructor)) && (((cljs.core._EQ_.call(null,this22641__$1.k,other22642.k)) && (cljs.core._EQ_.call(null,this22641__$1.__extmap,other22642.__extmap)))))));
}));

(schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.OptionalKey.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22640){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22649 = k22640;
var G__22649__$1 = (((G__22649 instanceof cljs.core.Keyword))?G__22649.fqn:null);
switch (G__22649__$1) {
case "k":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22640);

}
}));

(schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22639){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22650 = cljs.core.keyword_identical_QMARK_;
var expr__22651 = k__5349__auto__;
if(cljs.core.truth_(pred__22650.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__22651))){
return (new schema.core.OptionalKey(G__22639,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22639),null));
}
}));

(schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22639){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__22639,self__.__extmap,self__.__hash));
}));

(schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(schema.core.OptionalKey.cljs$lang$type = true);

(schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/OptionalKey",null,(1),null));
}));

(schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/OptionalKey");
}));

/**
 * Positional factory function for schema.core/OptionalKey.
 */
schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

/**
 * Factory function for schema.core/OptionalKey, taking a map of keywords to field values.
 */
schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__22643){
var extmap__5382__auto__ = (function (){var G__22653 = cljs.core.dissoc.call(null,G__22643,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_.call(null,G__22643)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22653);
} else {
return G__22653;
}
})();
return (new schema.core.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__22643),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(schema.core.optional_key_QMARK_.call(null,ks)){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Bad explicit key: %s",ks)));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
return ((schema.core.required_key_QMARK_.call(null,ks)) || (schema.core.optional_key_QMARK_.call(null,ks)));
});
schema.core.map_entry_ctor = (function schema$core$map_entry_ctor(p__22656){
var vec__22657 = p__22656;
var k = cljs.core.nth.call(null,vec__22657,(0),null);
var v = cljs.core.nth.call(null,vec__22657,(1),null);
var coll = vec__22657;
return (new cljs.core.MapEntry(k,v,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.MapEntry = (function (key_schema,val_schema,__meta,__extmap,__hash){
this.key_schema = key_schema;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22661,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22665 = k22661;
var G__22665__$1 = (((G__22665 instanceof cljs.core.Keyword))?G__22665.fqn:null);
switch (G__22665__$1) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22661,else__5343__auto__);

}
}));

(schema.core.MapEntry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22666){
var vec__22667 = p__22666;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22667,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22667,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.MapEntry{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
}));

(schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22660){
var self__ = this;
var G__22660__$1 = this;
return (new cljs.core.RecordIter((0),G__22660__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-804356212 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22662,other22663){
var self__ = this;
var this22662__$1 = this;
return (((!((other22663 == null)))) && ((((this22662__$1.constructor === other22663.constructor)) && (((cljs.core._EQ_.call(null,this22662__$1.key_schema,other22663.key_schema)) && (((cljs.core._EQ_.call(null,this22662__$1.val_schema,other22663.val_schema)) && (cljs.core._EQ_.call(null,this22662__$1.__extmap,other22663.__extmap)))))))));
}));

(schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.MapEntry.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22661){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22670 = k22661;
var G__22670__$1 = (((G__22670 instanceof cljs.core.Keyword))?G__22670.fqn:null);
switch (G__22670__$1) {
case "key-schema":
case "val-schema":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22661);

}
}));

(schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22660){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22671 = cljs.core.keyword_identical_QMARK_;
var expr__22672 = k__5349__auto__;
if(cljs.core.truth_(pred__22671.call(null,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),expr__22672))){
return (new schema.core.MapEntry(G__22660,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22671.call(null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),expr__22672))){
return (new schema.core.MapEntry(self__.key_schema,G__22660,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22660),null));
}
}
}));

(schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema,null))], null),self__.__extmap));
}));

(schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22660){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__22660,self__.__extmap,self__.__hash));
}));

(schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.MapEntry.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,schema.core.map_entry_ctor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element.call(null,true,self__.key_schema,(function (item_fn,e){
item_fn.call(null,cljs.core.key.call(null,e));

return e;
})),schema.spec.collection.one_element.call(null,true,self__.val_schema,(function (item_fn,e){
item_fn.call(null,cljs.core.val.call(null,e));

return null;
}))], null),(function (p__22674,p__22675,_){
var vec__22676 = p__22674;
var k = cljs.core.nth.call(null,vec__22676,(0),null);
var vec__22679 = p__22675;
var xk = cljs.core.nth.call(null,vec__22679,(0),null);
var xv = cljs.core.nth.call(null,vec__22679,(1),null);
var temp__5802__auto__ = schema.utils.error_val.call(null,xk);
if(cljs.core.truth_(temp__5802__auto__)){
var k_err = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_err,new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema.utils.error_val.call(null,xv)], null);
}
}));
}));

(schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null),(new cljs.core.List(null,schema.core.explain.call(null,self__.key_schema),(new cljs.core.List(null,schema.core.explain.call(null,self__.val_schema),null,(1),null)),(2),null)),(3),null));
}));

(schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-schema","key-schema",543870801,null),new cljs.core.Symbol(null,"val-schema","val-schema",-374242092,null)], null);
}));

(schema.core.MapEntry.cljs$lang$type = true);

(schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/MapEntry",null,(1),null));
}));

(schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/MapEntry");
}));

/**
 * Positional factory function for schema.core/MapEntry.
 */
schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

/**
 * Factory function for schema.core/MapEntry, taking a map of keywords to field values.
 */
schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__22664){
var extmap__5382__auto__ = (function (){var G__22682 = cljs.core.dissoc.call(null,G__22664,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619));
if(cljs.core.record_QMARK_.call(null,G__22664)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22682);
} else {
return G__22682;
}
})();
return (new schema.core.MapEntry(new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726).cljs$core$IFn$_invoke$arity$1(G__22664),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619).cljs$core$IFn$_invoke$arity$1(G__22664),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

schema.core.map_entry = (function schema$core$map_entry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.call(null,schema.core.specific_key_QMARK_,cljs.core.keys.call(null,map_schema));
if((cljs.core.count.call(null,key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"More than one non-optional/required key schemata: %s",cljs.core.vec.call(null,key_schemata))));
}

return cljs.core.first.call(null,key_schemata);
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(schema.core.specific_key_QMARK_.call(null,kspec)){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return (new cljs.core.List(null,((schema.core.required_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):((schema.core.optional_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)),(new cljs.core.List(null,schema.core.explicit_schema_key.call(null,kspec),null,(1),null)),(2),null));
}
} else {
return schema.core.explain.call(null,kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema.call(null,this$);
var duplicate_keys_22700 = cljs.core.mapv.call(null,schema.core.explain_kspec,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,(function (p1__22685_SHARP_){
return (cljs.core.count.call(null,p1__22685_SHARP_) > (1));
}),cljs.core.vals.call(null,cljs.core.group_by.call(null,schema.core.explicit_schema_key,cljs.core.keys.call(null,cljs.core.dissoc.call(null,this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_.call(null,duplicate_keys_22700)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Schema has multiple variants of the same explicit key: %s",duplicate_keys_22700)));
}

var without_extra_keys_schema = cljs.core.dissoc.call(null,this$,extra_keys_schema);
return cljs.core.concat.call(null,(function (){var iter__5520__auto__ = (function schema$core$map_elements_$_iter__22687(s__22688){
return (new cljs.core.LazySeq(null,(function (){
var s__22688__$1 = s__22688;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__22688__$1);
if(temp__5804__auto__){
var s__22688__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22688__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__22688__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__22690 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__22689 = (0);
while(true){
if((i__22689 < size__5519__auto__)){
var vec__22691 = cljs.core._nth.call(null,c__5518__auto__,i__22689);
var k = cljs.core.nth.call(null,vec__22691,(0),null);
var v = cljs.core.nth.call(null,vec__22691,(1),null);
cljs.core.chunk_append.call(null,b__22690,(function (){var rk = schema.core.explicit_schema_key.call(null,k);
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.map_entry.call(null,schema.core.eq.call(null,rk),v),((function (i__22689,rk,required_QMARK_,vec__22691,k,v,c__5518__auto__,size__5519__auto__,b__22690,s__22688__$2,temp__5804__auto__,without_extra_keys_schema,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find.call(null,m,rk);
if(cljs.core.truth_(e)){
item_fn.call(null,e);
} else {
if(required_QMARK_){
item_fn.call(null,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null)));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.call(null,m,rk);
} else {
return m;
}
});})(i__22689,rk,required_QMARK_,vec__22691,k,v,c__5518__auto__,size__5519__auto__,b__22690,s__22688__$2,temp__5804__auto__,without_extra_keys_schema,extra_keys_schema))
);
})());

var G__22701 = (i__22689 + (1));
i__22689 = G__22701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22690),schema$core$map_elements_$_iter__22687.call(null,cljs.core.chunk_rest.call(null,s__22688__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22690),null);
}
} else {
var vec__22694 = cljs.core.first.call(null,s__22688__$2);
var k = cljs.core.nth.call(null,vec__22694,(0),null);
var v = cljs.core.nth.call(null,vec__22694,(1),null);
return cljs.core.cons.call(null,(function (){var rk = schema.core.explicit_schema_key.call(null,k);
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.map_entry.call(null,schema.core.eq.call(null,rk),v),((function (rk,required_QMARK_,vec__22694,k,v,s__22688__$2,temp__5804__auto__,without_extra_keys_schema,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find.call(null,m,rk);
if(cljs.core.truth_(e)){
item_fn.call(null,e);
} else {
if(required_QMARK_){
item_fn.call(null,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null)));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.call(null,m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__22694,k,v,s__22688__$2,temp__5804__auto__,without_extra_keys_schema,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__22687.call(null,cljs.core.rest.call(null,s__22688__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,without_extra_keys_schema);
})(),(cljs.core.truth_(extra_keys_schema)?(function (){var specific_keys = cljs.core.set.call(null,cljs.core.map.call(null,schema.core.explicit_schema_key,cljs.core.keys.call(null,without_extra_keys_schema)));
var vec__22697 = cljs.core.find.call(null,this$,extra_keys_schema);
var ks = cljs.core.nth.call(null,vec__22697,(0),null);
var vs = cljs.core.nth.call(null,vec__22697,(1),null);
var restricted_ks = schema.core.constrained.call(null,ks,(function (p1__22686_SHARP_){
return (!(cljs.core.contains_QMARK_.call(null,specific_keys,p1__22686_SHARP_)));
}));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,schema.core.map_entry.call(null,restricted_ks,vs))], null);
})():null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.call(null,cljs.core.keep.call(null,schema.utils.error_val,elts),(function (){var iter__5520__auto__ = (function schema$core$map_error_$_iter__22702(s__22703){
return (new cljs.core.LazySeq(null,(function (){
var s__22703__$1 = s__22703;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__22703__$1);
if(temp__5804__auto__){
var s__22703__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22703__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__22703__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__22705 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__22704 = (0);
while(true){
if((i__22704 < size__5519__auto__)){
var vec__22706 = cljs.core._nth.call(null,c__5518__auto__,i__22704);
var k = cljs.core.nth.call(null,vec__22706,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22706,(1),null);
cljs.core.chunk_append.call(null,b__22705,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));

var G__22712 = (i__22704 + (1));
i__22704 = G__22712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22705),schema$core$map_error_$_iter__22702.call(null,cljs.core.chunk_rest.call(null,s__22703__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22705),null);
}
} else {
var vec__22709 = cljs.core.first.call(null,s__22703__$2);
var k = cljs.core.nth.call(null,vec__22709,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__22709,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null),schema$core$map_error_$_iter__22702.call(null,cljs.core.rest.call(null,s__22703__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$,cljs.core.map_QMARK_,(function (p1__20705__20706__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"map?","map?",-1780568534,null),(new cljs.core.List(null,p1__20705__20706__auto__,null,(1),null)),(2),null));
})),(function (p1__22713_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__22713_SHARP_);
}),schema.core.map_elements.call(null,this$),schema.core.map_error.call(null));
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5520__auto__ = (function schema$core$map_explain_$_iter__22714(s__22715){
return (new cljs.core.LazySeq(null,(function (){
var s__22715__$1 = s__22715;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__22715__$1);
if(temp__5804__auto__){
var s__22715__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22715__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__22715__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__22717 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__22716 = (0);
while(true){
if((i__22716 < size__5519__auto__)){
var vec__22718 = cljs.core._nth.call(null,c__5518__auto__,i__22716);
var k = cljs.core.nth.call(null,vec__22718,(0),null);
var v = cljs.core.nth.call(null,vec__22718,(1),null);
cljs.core.chunk_append.call(null,b__22717,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec.call(null,k),schema.core.explain.call(null,v)], null));

var G__22724 = (i__22716 + (1));
i__22716 = G__22724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22717),schema$core$map_explain_$_iter__22714.call(null,cljs.core.chunk_rest.call(null,s__22715__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22717),null);
}
} else {
var vec__22721 = cljs.core.first.call(null,s__22715__$2);
var k = cljs.core.nth.call(null,vec__22721,(0),null);
var v = cljs.core.nth.call(null,vec__22721,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec.call(null,k),schema.core.explain.call(null,v)], null),schema$core$map_explain_$_iter__22714.call(null,cljs.core.rest.call(null,s__22715__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,this$);
})());
});
(cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec.call(null,this$__$1);
}));

(cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
}));

(cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec.call(null,this$__$1);
}));

(cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
}));
(cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Set schema must have exactly one element")));
}

return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.set_QMARK_,(function (p1__20705__20706__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"set?","set?",1636014792,null),(new cljs.core.List(null,p1__20705__20706__auto__,null,(1),null)),(2),null));
})),cljs.core.set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,cljs.core.first.call(null,this$__$1))], null),(function (_,xs,___$1){
return cljs.core.set.call(null,cljs.core.keep.call(null,schema.utils.error_val,xs));
}));
}));

(cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,cljs.core.first.call(null,this$__$1))], null));
}));
schema.core.queue_QMARK_ = (function schema$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
schema.core.as_queue = (function schema$core$as_queue(col){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentQueue.EMPTY,col);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Queue = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22726,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22730 = k22726;
var G__22730__$1 = (((G__22730 instanceof cljs.core.Keyword))?G__22730.fqn:null);
switch (G__22730__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22726,else__5343__auto__);

}
}));

(schema.core.Queue.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22731){
var vec__22732 = p__22731;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22732,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22732,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.Queue{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
}));

(schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22725){
var self__ = this;
var G__22725__$1 = this;
return (new cljs.core.RecordIter((0),G__22725__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1542973436 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22727,other22728){
var self__ = this;
var this22727__$1 = this;
return (((!((other22728 == null)))) && ((((this22727__$1.constructor === other22728.constructor)) && (((cljs.core._EQ_.call(null,this22727__$1.schema,other22728.schema)) && (cljs.core._EQ_.call(null,this22727__$1.__extmap,other22728.__extmap)))))));
}));

(schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.Queue.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22726){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22735 = k22726;
var G__22735__$1 = (((G__22735 instanceof cljs.core.Keyword))?G__22735.fqn:null);
switch (G__22735__$1) {
case "schema":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22726);

}
}));

(schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22725){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22736 = cljs.core.keyword_identical_QMARK_;
var expr__22737 = k__5349__auto__;
if(cljs.core.truth_(pred__22736.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__22737))){
return (new schema.core.Queue(G__22725,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22725),null));
}
}));

(schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null))], null),self__.__extmap));
}));

(schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22725){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__22725,self__.__extmap,self__.__hash));
}));

(schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.Queue.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,schema.core.queue_QMARK_,(function (p1__20705__20706__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"queue?","queue?",-880510795,null),(new cljs.core.List(null,p1__20705__20706__auto__,null,(1),null)),(2),null));
})),schema.core.as_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,self__.schema)], null),(function (_,xs,___$1){
return schema.core.as_queue.call(null,cljs.core.keep.call(null,schema.utils.error_val,xs));
}));
}));

(schema.core.Queue.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),(new cljs.core.List(null,schema.core.explain.call(null,self__.schema),null,(1),null)),(2),null));
}));

(schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
}));

(schema.core.Queue.cljs$lang$type = true);

(schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/Queue",null,(1),null));
}));

(schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/Queue");
}));

/**
 * Positional factory function for schema.core/Queue.
 */
schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Queue, taking a map of keywords to field values.
 */
schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__22729){
var extmap__5382__auto__ = (function (){var G__22739 = cljs.core.dissoc.call(null,G__22729,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.record_QMARK_.call(null,G__22729)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22739);
} else {
return G__22739;
}
})();
return (new schema.core.Queue(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__22729),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.Queue.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

/**
 * Defines a schema satisfied by instances of clojure.lang.PersistentQueue
 *   (clj.core/PersistentQueue in ClojureScript) whose values satisfy x.
 */
schema.core.queue = (function schema$core$queue(x){
return (new schema.core.Queue(x,null,null,null));
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
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22743,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22747 = k22743;
var G__22747__$1 = (((G__22747 instanceof cljs.core.Keyword))?G__22747.fqn:null);
switch (G__22747__$1) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22743,else__5343__auto__);

}
}));

(schema.core.One.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22748){
var vec__22749 = p__22748;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22749,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22749,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.One{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
}));

(schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22742){
var self__ = this;
var G__22742__$1 = this;
return (new cljs.core.RecordIter((0),G__22742__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-197981045 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22744,other22745){
var self__ = this;
var this22744__$1 = this;
return (((!((other22745 == null)))) && ((((this22744__$1.constructor === other22745.constructor)) && (((cljs.core._EQ_.call(null,this22744__$1.schema,other22745.schema)) && (((cljs.core._EQ_.call(null,this22744__$1.optional_QMARK_,other22745.optional_QMARK_)) && (((cljs.core._EQ_.call(null,this22744__$1.name,other22745.name)) && (cljs.core._EQ_.call(null,this22744__$1.__extmap,other22745.__extmap)))))))))));
}));

(schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.One.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22743){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22752 = k22743;
var G__22752__$1 = (((G__22752 instanceof cljs.core.Keyword))?G__22752.fqn:null);
switch (G__22752__$1) {
case "schema":
case "optional?":
case "name":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22743);

}
}));

(schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22742){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22753 = cljs.core.keyword_identical_QMARK_;
var expr__22754 = k__5349__auto__;
if(cljs.core.truth_(pred__22753.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__22754))){
return (new schema.core.One(G__22742,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22753.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),expr__22754))){
return (new schema.core.One(self__.schema,G__22742,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22753.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__22754))){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__22742,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22742),null));
}
}
}
}));

(schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null))], null),self__.__extmap));
}));

(schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22742){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__22742,self__.__extmap,self__.__hash));
}));

(schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"optional?","optional?",-1469797640,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
}));

(schema.core.One.cljs$lang$type = true);

(schema.core.One.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/One",null,(1),null));
}));

(schema.core.One.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/One");
}));

/**
 * Positional factory function for schema.core/One.
 */
schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

/**
 * Factory function for schema.core/One, taking a map of keywords to field values.
 */
schema.core.map__GT_One = (function schema$core$map__GT_One(G__22746){
var extmap__5382__auto__ = (function (){var G__22756 = cljs.core.dissoc.call(null,G__22746,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.record_QMARK_.call(null,G__22746)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22756);
} else {
return G__22756;
}
})();
return (new schema.core.One(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__22746),new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(G__22746),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__22746),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
/**
 * Parses and validates a sequence schema, returning a vector in the form
 *   [singles multi] where singles is a sequence of 'one' and 'optional' schemas
 *   and multi is the rest-schema (which may be nil). A valid sequence schema is
 *   a vector in the form [one* optional* rest-schema?].
 */
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){
var vec__22762 = cljs.core.split_with.call(null,(function (p1__22759_SHARP_){
return (((p1__22759_SHARP_ instanceof schema.core.One)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__22759_SHARP_))));
}),s);
var required = cljs.core.nth.call(null,vec__22762,(0),null);
var more = cljs.core.nth.call(null,vec__22762,(1),null);
var vec__22765 = cljs.core.split_with.call(null,(function (p1__22760_SHARP_){
var and__5041__auto__ = (p1__22760_SHARP_ instanceof schema.core.One);
if(and__5041__auto__){
return new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__22760_SHARP_);
} else {
return and__5041__auto__;
}
}),more);
var optional = cljs.core.nth.call(null,vec__22765,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__22765,(1),null);
if((((cljs.core.count.call(null,more__$1) <= (1))) && (cljs.core.not_any_QMARK_.call(null,(function (p1__22761_SHARP_){
return (p1__22761_SHARP_ instanceof schema.core.One);
}),more__$1)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"%s is not a valid sequence schema; %s%s%s",s,"a valid sequence schema consists of zero or more `one` elements, ","followed by zero or more `optional` elements, followed by an optional ","schema that will match the remaining elements.")));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,required,optional),cljs.core.first.call(null,more__$1)], null);
});
(cljs.core.PersistentVector.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,(function (x){
return (((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)));
}),(function (p1__22768_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),(new cljs.core.List(null,p1__22768_SHARP_,null,(1),null)),(2),null));
})),cljs.core.vec,(function (){var vec__22769 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__22769,(0),null);
var multi = cljs.core.nth.call(null,vec__22769,(1),null);
return cljs.core.reduce.call(null,(function (more,s){
if(cljs.core.not.call(null,s.optional_QMARK_)){
return cljs.core.cons.call(null,schema.spec.collection.one_element.call(null,true,schema.core.named.call(null,s.schema,s.name),(function (item_fn,x){
var temp__5802__auto__ = cljs.core.seq.call(null,x);
if(temp__5802__auto__){
var x__$1 = temp__5802__auto__;
item_fn.call(null,cljs.core.first.call(null,x__$1));

return cljs.core.rest.call(null,x__$1);
} else {
item_fn.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,s.schema,new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325),(new cljs.core.Delay((function (){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(new cljs.core.List(null,s.name,null,(1),null)),(2),null));
}),null)),null)));

return null;
}
})),more);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.optional_tail.call(null,schema.core.named.call(null,s.schema,s.name),(function (item_fn,x){
var temp__5804__auto__ = cljs.core.seq.call(null,x);
if(temp__5804__auto__){
var x__$1 = temp__5804__auto__;
item_fn.call(null,cljs.core.first.call(null,x__$1));

return cljs.core.rest.call(null,x__$1);
} else {
return null;
}
}),more)], null);
}
}),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,multi)], null):null),cljs.core.reverse.call(null,singles));
})(),(function (_,elts,extra){
var head = cljs.core.mapv.call(null,schema.utils.error_val,elts);
var G__22772 = head;
if(cljs.core.seq.call(null,extra)){
return cljs.core.conj.call(null,G__22772,schema.utils.error_val.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,null,extra,(new cljs.core.Delay((function (){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null),(new cljs.core.List(null,cljs.core.count.call(null,extra),null,(1),null)),(2),null));
}),null)),null))));
} else {
return G__22772;
}
}));
}));

(cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__22773 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__22773,(0),null);
var multi = cljs.core.nth.call(null,vec__22773,(1),null);
var G__22776 = cljs.core.mapv.call(null,(function (s){
return (new cljs.core.List(null,(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null)),(new cljs.core.List(null,schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s)),(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s),null,(1),null)),(2),null)),(3),null));
}),singles);
if(cljs.core.truth_(multi)){
return cljs.core.conj.call(null,G__22776,schema.core.explain.call(null,multi));
} else {
return G__22776;
}
}));
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,first_schema,first_name),schema.core.one.call(null,second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22781,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22785 = k22781;
var G__22785__$1 = (((G__22785 instanceof cljs.core.Keyword))?G__22785.fqn:null);
switch (G__22785__$1) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22781,else__5343__auto__);

}
}));

(schema.core.Record.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22786){
var vec__22787 = p__22786;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22787,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22787,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.Record{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
}));

(schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22780){
var self__ = this;
var G__22780__$1 = this;
return (new cljs.core.RecordIter((0),G__22780__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1486476872 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22782,other22783){
var self__ = this;
var this22782__$1 = this;
return (((!((other22783 == null)))) && ((((this22782__$1.constructor === other22783.constructor)) && (((cljs.core._EQ_.call(null,this22782__$1.klass,other22783.klass)) && (((cljs.core._EQ_.call(null,this22782__$1.schema,other22783.schema)) && (cljs.core._EQ_.call(null,this22782__$1.__extmap,other22783.__extmap)))))))));
}));

(schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"klass","klass",-1386752349),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.Record.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22781){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22790 = k22781;
var G__22790__$1 = (((G__22790 instanceof cljs.core.Keyword))?G__22790.fqn:null);
switch (G__22790__$1) {
case "klass":
case "schema":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22781);

}
}));

(schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22780){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22791 = cljs.core.keyword_identical_QMARK_;
var expr__22792 = k__5349__auto__;
if(cljs.core.truth_(pred__22791.call(null,new cljs.core.Keyword(null,"klass","klass",-1386752349),expr__22792))){
return (new schema.core.Record(G__22780,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22791.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__22792))){
return (new schema.core.Record(self__.klass,G__22780,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22780),null));
}
}
}));

(schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null))], null),self__.__extmap));
}));

(schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22780){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__22780,self__.__extmap,self__.__hash));
}));

(schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.Record.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,(function (){var p = schema.spec.core.precondition.call(null,this$__$1,(function (p1__22777_SHARP_){
return (p1__22777_SHARP_ instanceof self__.klass);
}),(function (p1__22778_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),(new cljs.core.List(null,self__.klass,(new cljs.core.List(null,p1__22778_SHARP_,null,(1),null)),(2),null)),(3),null));
}));
var temp__5802__auto__ = new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var evf = temp__5802__auto__;
return cljs.core.some_fn.call(null,p,schema.spec.core.precondition.call(null,this$__$1,evf,(function (p1__22779_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"passes-extra-validation?","passes-extra-validation?",-1964809231,null),(new cljs.core.List(null,p1__22779_SHARP_,null,(1),null)),(2),null));
})));
} else {
return p;
}
})(),new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)),schema.core.map_elements.call(null,self__.schema),schema.core.map_error.call(null));
}));

(schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"record","record",861424668,null),(new cljs.core.List(null,cljs.core.symbol.call(null,cljs.core.pr_str.call(null,self__.klass)),(new cljs.core.List(null,schema.core.explain.call(null,self__.schema),null,(1),null)),(2),null)),(3),null));
}));

(schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"klass","klass",253779178,null),new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
}));

(schema.core.Record.cljs$lang$type = true);

(schema.core.Record.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/Record",null,(1),null));
}));

(schema.core.Record.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/Record");
}));

/**
 * Positional factory function for schema.core/Record.
 */
schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

/**
 * Factory function for schema.core/Record, taking a map of keywords to field values.
 */
schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__22784){
var extmap__5382__auto__ = (function (){var G__22794 = cljs.core.dissoc.call(null,G__22784,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.record_QMARK_.call(null,G__22784)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22794);
} else {
return G__22794;
}
})();
return (new schema.core.Record(new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__22784),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__22784),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.Record.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_.call(null,schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected map, got %s",schema.utils.type_of.call(null,schema__$1))));
}

return cljs.core.with_meta.call(null,(new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"konstructor","konstructor",-1422324557),map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__22803 = cljs.core.split_with.call(null,(function (p1__22801_SHARP_){
return (p1__22801_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.call(null,vec__22803,(0),null);
var more = cljs.core.nth.call(null,vec__22803,(1),null);
return cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__22802_SHARP_){
return schema.core.explain.call(null,p1__22802_SHARP_.schema);
}),required),((cljs.core.seq.call(null,more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.call(null,schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k22807,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__22811 = k22807;
var G__22811__$1 = (((G__22811 instanceof cljs.core.Keyword))?G__22811.fqn:null);
switch (G__22811__$1) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22807,else__5343__auto__);

}
}));

(schema.core.FnSchema.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__22812){
var vec__22813 = p__22812;
var k__5364__auto__ = cljs.core.nth.call(null,vec__22813,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__22813,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#schema.core.FnSchema{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
}));

(schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22806){
var self__ = this;
var G__22806__$1 = this;
return (new cljs.core.RecordIter((0),G__22806__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-2054647546 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22808,other22809){
var self__ = this;
var this22808__$1 = this;
return (((!((other22809 == null)))) && ((((this22808__$1.constructor === other22809.constructor)) && (((cljs.core._EQ_.call(null,this22808__$1.output_schema,other22809.output_schema)) && (((cljs.core._EQ_.call(null,this22808__$1.input_schemas,other22809.input_schemas)) && (cljs.core._EQ_.call(null,this22808__$1.__extmap,other22809.__extmap)))))))));
}));

(schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(schema.core.FnSchema.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k22807){
var self__ = this;
var this__5347__auto____$1 = this;
var G__22816 = k22807;
var G__22816__$1 = (((G__22816 instanceof cljs.core.Keyword))?G__22816.fqn:null);
switch (G__22816__$1) {
case "output-schema":
case "input-schemas":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k22807);

}
}));

(schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__22806){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__22817 = cljs.core.keyword_identical_QMARK_;
var expr__22818 = k__5349__auto__;
if(cljs.core.truth_(pred__22817.call(null,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),expr__22818))){
return (new schema.core.FnSchema(G__22806,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22817.call(null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),expr__22818))){
return (new schema.core.FnSchema(self__.output_schema,G__22806,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__22806),null));
}
}
}));

(schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas,null))], null),self__.__extmap));
}));

(schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__22806){
var self__ = this;
var this__5339__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__22806,self__.__extmap,self__.__hash));
}));

(schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(schema.core.FnSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.ifn_QMARK_,(function (p1__20705__20706__auto__){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),(new cljs.core.List(null,p1__20705__20706__auto__,null,(1),null)),(2),null));
})));
}));

(schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.input_schemas) > (1))){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain.call(null,self__.output_schema),cljs.core.map.call(null,schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain.call(null,self__.output_schema),schema.core.explain_input_schema.call(null,cljs.core.first.call(null,self__.input_schemas)));
}
}));

(schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema","output-schema",1913035664,null),new cljs.core.Symbol(null,"input-schemas","input-schemas",658376722,null)], null);
}));

(schema.core.FnSchema.cljs$lang$type = true);

(schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"schema.core/FnSchema",null,(1),null));
}));

(schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"schema.core/FnSchema");
}));

/**
 * Positional factory function for schema.core/FnSchema.
 */
schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

/**
 * Factory function for schema.core/FnSchema, taking a map of keywords to field values.
 */
schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__22810){
var extmap__5382__auto__ = (function (){var G__22820 = cljs.core.dissoc.call(null,G__22810,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805));
if(cljs.core.record_QMARK_.call(null,G__22810)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__22820);
} else {
return G__22820;
}
})();
return (new schema.core.FnSchema(new cljs.core.Keyword(null,"output-schema","output-schema",272504137).cljs$core$IFn$_invoke$arity$1(G__22810),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805).cljs$core$IFn$_invoke$arity$1(G__22810),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});


(schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s__20333__auto__,w__20334__auto__,___20335__auto__){
var s__20333__auto____$1 = this;
return cljs.core._write.call(null,w__20334__auto__,schema.core.explain.call(null,s__20333__auto____$1));
}));

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq.call(null,input_schema)){
if((cljs.core.last.call(null,input_schema) instanceof schema.core.One)){
return cljs.core.count.call(null,input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq.call(null,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,cljs.core.map.call(null,schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.call(null,schema.core.arity,input_schemas),null,null,null));
});
/**
 * Records name in schema's metadata.
 */
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){
if((((!((schema__$1 == null))))?(((((schema__$1.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === schema__$1.cljs$core$IWithMeta$))))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,schema__$1):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Named schema (such as the right-most `s/defalias` arg) must support metadata: %s",schema.utils.type_of.call(null,schema__$1))));
}

return cljs.core.vary_meta.call(null,schema__$1,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),name);
});
/**
 * Returns the name of a schema attached via schema-with-name (or defschema).
 */
schema.core.schema_name = (function schema$core$schema_name(schema__$1){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});
/**
 * Returns the namespace of a schema attached via defschema.
 */
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return cljs.core.deref.call(null,schema.utils.use_fn_validation);
});
/**
 * Globally turn on (or off) schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return cljs.core.reset_BANG_.call(null,schema.utils.use_fn_validation,on_QMARK_);
});
/**
 * A var that can be rebound to a function to customize the behavior
 *   of fn validation. When fn validation is on and `fn-validator` is
 *   bound to a function, normal argument and return value checks will
 *   be substituted with a call to this function with five arguments:
 * 
 *  direction   - :input or :output
 *  fn-name     - a symbol, the function's name
 *  schema      - the schema for the arglist or the return value
 *  checker     - a precompiled checker to check a value against
 *                the schema
 *  value       - the actual arglist or return value
 * 
 *   The function's return value will be ignored.
 */
schema.core.fn_validator = null;
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.call(null,f,cljs.core.assoc,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Non-function %s",schema.utils.type_of.call(null,f))));
}

var or__5043__auto__ = schema.utils.class_schema.call(null,schema.utils.fn_schema_bearer.call(null,f));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var m__20311__auto__ = cljs.core.meta.call(null,f);
var k__20312__auto__ = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var temp__5802__auto__ = cljs.core.find.call(null,m__20311__auto__,k__20312__auto__);
if(cljs.core.truth_(temp__5802__auto__)){
var pair__20313__auto__ = temp__5802__auto__;
return cljs.core.val.call(null,pair__20313__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__20312__auto__,m__20311__auto__)));
}
}
});
if((typeof schema !== 'undefined') && (typeof schema.core !== 'undefined') && (typeof schema.core._STAR_elide_defprotocol_instrumentation_STAR_ !== 'undefined')){
} else {
/**
 * If the s/defprotocol instrumentation strategy is problematic
 *  for your platform, set atom to true and instrumentation will not
 *  be performed.
 * 
 *  Atom defaults to false.
 */
schema.core._STAR_elide_defprotocol_instrumentation_STAR_ = cljs.core.atom.call(null,false);
}
/**
 * If true, elide s/defprotocol instrumentation.
 * 
 *   Instrumentation is elided for any of the following cases:
 *   *   `@*elide-defprotocol-instrumentation*` is true during s/defprotocol macroexpansion
 *   *   `@*elide-defprotocol-instrumentation*` is true during s/defprotocol evaluation
 */
schema.core.instrument_defprotocol_QMARK_ = (function schema$core$instrument_defprotocol_QMARK_(){
return cljs.core.not.call(null,cljs.core.deref.call(null,schema.core._STAR_elide_defprotocol_instrumentation_STAR_));
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return cljs.core.reset_BANG_.call(null,schema.utils.max_value_length,max_length);
});

//# sourceMappingURL=core.js.map

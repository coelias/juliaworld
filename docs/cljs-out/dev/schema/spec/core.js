// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('schema.spec.core');
goog.require('cljs.core');
goog.require('schema.utils');

/**
 * Specs are a common language for Schemas to express their structure.
 * These two use-cases aren't privileged, just the two that are considered core
 * to being a Spec.
 * @interface
 */
schema.spec.core.CoreSpec = function(){};

var schema$spec$core$CoreSpec$subschemas$dyn_22060 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (schema.spec.core.subschemas[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$);
} else {
var m__5389__auto__ = (schema.spec.core.subschemas["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"CoreSpec.subschemas",this$);
}
}
});
/**
 * List all subschemas
 */
schema.spec.core.subschemas = (function schema$spec$core$subschemas(this$){
if((((!((this$ == null)))) && ((!((this$.schema$spec$core$CoreSpec$subschemas$arity$1 == null)))))){
return this$.schema$spec$core$CoreSpec$subschemas$arity$1(this$);
} else {
return schema$spec$core$CoreSpec$subschemas$dyn_22060.call(null,this$);
}
});

var schema$spec$core$CoreSpec$checker$dyn_22061 = (function (this$,params){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (schema.spec.core.checker[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,params);
} else {
var m__5389__auto__ = (schema.spec.core.checker["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,params);
} else {
throw cljs.core.missing_protocol.call(null,"CoreSpec.checker",this$);
}
}
});
/**
 * Create a function that takes [data], and either returns a walked version of data
 *   (by default, usually just data), or a utils/ErrorContainer containing value that looks
 *   like the 'bad' parts of data with ValidationErrors at the leaves describing the failures.
 * 
 *   params is a map specifying:
 *    - :subschema-checker - a function for checking subschemas
 *    - :returned-walked? - a boolean specifying whether to return a walked version of the data
 *      (otherwise, nil is returned which increases performance)
 *    - :cache - a map structure from schema to checker, which speeds up checker creation
 *      when the same subschema appears multiple times, and also facilitates handling
 *      recursive schemas.
 */
schema.spec.core.checker = (function schema$spec$core$checker(this$,params){
if((((!((this$ == null)))) && ((!((this$.schema$spec$core$CoreSpec$checker$arity$2 == null)))))){
return this$.schema$spec$core$CoreSpec$checker$arity$2(this$,params);
} else {
return schema$spec$core$CoreSpec$checker$dyn_22061.call(null,this$,params);
}
});

schema.spec.core._PLUS_no_precondition_PLUS_ = (function schema$spec$core$_PLUS_no_precondition_PLUS_(_){
return null;
});
/**
 * Helper for making preconditions.
 * Takes a schema, predicate p, and error function err-f.
 * If the datum passes the predicate, returns nil.
 * Otherwise, returns a validation error with description (err-f datum-description),
 * where datum-description is a (short) printable stand-in for the datum.
 */
schema.spec.core.precondition = (function schema$spec$core$precondition(s,p,err_f){
return (function (x){
var temp__5804__auto__ = (function (){try{if(cljs.core.truth_(p.call(null,x))){
return null;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
}catch (e22062){if((e22062 instanceof Object)){
var e_SHARP_ = e22062;
return new cljs.core.Symbol(null,"throws?","throws?",789734533,null);
} else {
throw e22062;

}
}})();
if(cljs.core.truth_(temp__5804__auto__)){
var reason = temp__5804__auto__;
return schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,s,x,(new cljs.core.Delay((function (){
return err_f.call(null,schema.utils.value_name.call(null,x));
}),null)),reason));
} else {
return null;
}
});
});
/**
 * A helper to start a checking run, by setting the appropriate params.
 * For examples, see schema.core/checker or schema.coerce/coercer.
 */
schema.spec.core.run_checker = (function schema$spec$core$run_checker(f,return_walked_QMARK_,s){
return f.call(null,s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"subschema-checker","subschema-checker",1137701360),f,new cljs.core.Keyword(null,"return-walked?","return-walked?",-1684646015),return_walked_QMARK_,new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});
schema.spec.core.with_cache = (function schema$spec$core$with_cache(cache,cache_key,wrap_recursive_delay,result_fn){
var temp__5802__auto__ = cljs.core.deref.call(null,cache).call(null,cache_key);
if(cljs.core.truth_(temp__5802__auto__)){
var w = temp__5802__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("schema.spec.core","in-progress","schema.spec.core/in-progress",-1604867615),w)){
return wrap_recursive_delay.call(null,(new cljs.core.Delay((function (){
return cljs.core.deref.call(null,cache).call(null,cache_key);
}),null)));
} else {
return w;
}
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.assoc,cache_key,new cljs.core.Keyword("schema.spec.core","in-progress","schema.spec.core/in-progress",-1604867615));

var res = result_fn.call(null);
cljs.core.swap_BANG_.call(null,cache,cljs.core.assoc,cache_key,res);

return res;
}
});
/**
 * Should be called recursively on each subschema in the 'checker' method of a spec.
 * Handles caching and error wrapping behavior.
 */
schema.spec.core.sub_checker = (function schema$spec$core$sub_checker(p__22065,p__22066){
var map__22067 = p__22065;
var map__22067__$1 = cljs.core.__destructure_map.call(null,map__22067);
var schema__$1 = cljs.core.get.call(null,map__22067__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var error_wrap = cljs.core.get.call(null,map__22067__$1,new cljs.core.Keyword(null,"error-wrap","error-wrap",-1295833514));
var map__22068 = p__22066;
var map__22068__$1 = cljs.core.__destructure_map.call(null,map__22068);
var params = map__22068__$1;
var subschema_checker = cljs.core.get.call(null,map__22068__$1,new cljs.core.Keyword(null,"subschema-checker","subschema-checker",1137701360));
var cache = cljs.core.get.call(null,map__22068__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var sub = schema.spec.core.with_cache.call(null,cache,schema__$1,(function (d){
return (function (x){
return cljs.core.deref.call(null,d).call(null,x);
});
}),(function (){
return subschema_checker.call(null,schema__$1,params);
}));
if(cljs.core.truth_(error_wrap)){
return (function (x){
var res = sub.call(null,x);
var temp__5802__auto__ = schema.utils.error_val.call(null,res);
if(cljs.core.truth_(temp__5802__auto__)){
var e = temp__5802__auto__;
return schema.utils.error.call(null,error_wrap.call(null,res));
} else {
return res;
}
});
} else {
return sub;
}
});

//# sourceMappingURL=core.js.map
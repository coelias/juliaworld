// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse_clj.lang.clojure.io');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('clojure.string');
goog.require('klipse_clj.repl');
goog.require('cljs_http.client');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('applied_science.js_interop');
klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_ = false;
klipse_clj.lang.clojure.io._STAR_cache_buster_QMARK__STAR_ = false;
klipse_clj.lang.clojure.io.edn = (function klipse_clj$lang$clojure$io$edn(json){
return cljs_http.util.transit_decode.call(null,JSON.stringify(cljs.core.clj__GT_js.call(null,json)),new cljs.core.Keyword(null,"json","json",1279968570),null);
});
klipse_clj.lang.clojure.io.macro_suffixes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null);
klipse_clj.lang.clojure.io.cljs_suffixes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc"], null);
if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.lang !== 'undefined') && (typeof klipse_clj.lang.clojure !== 'undefined') && (typeof klipse_clj.lang.clojure.io !== 'undefined') && (typeof klipse_clj.lang.clojure.io.load_ns !== 'undefined')){
} else {
/**
 * 
 *   Each runtime environment provides a different way to load a library.
 *   Received two arguments - a map and a callback function:
 *   The map will have the following keys:
 * 
 *  :name   - the name of the library (a symbol)
 *  :macros - modifier signaling a macros namespace load
 *  :path   - munged relative library path (a string)
 * 
 *  It is up to the implementor to correctly resolve the corresponding .cljs,
 *  .cljc, or .js resource (the order must be respected).
 *  If :macros is true, resolution should only consider .clj or .cljc resources (the order must be respected).
 *   Upon resolution the callback should be invoked with a map containing the following keys:
 * 
 *  :lang       - the language, :clj or :js
 *  :source     - the source of the library (a string)
 *  :file       - optional, the file path, it will be added to AST's :file keyword (but not in :meta)
 *  :cache      - optional, if a :clj namespace has been precompiled to :js, can give an analysis cache for faster loads.
 *  :source-map - optional, if a :clj namespace has been precompiled to :js, can give a V3 source map JSON
 * 
 *  If the resource could not be resolved, the callback should be invoked with
 *  nil.
 */
klipse_clj.lang.clojure.io.load_ns = (function (){var method_table__5639__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse-clj.lang.clojure.io","load-ns"),(function (_,p__20310,_src_cb){
var map__20311 = p__20310;
var map__20311__$1 = cljs.core.__destructure_map.call(null,map__20311);
var name = cljs.core.get.call(null,map__20311__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__20311__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__20311__$1,new cljs.core.Keyword(null,"path","path",-188191168));
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,macros,path], null);

if(cljs.core.truth_(macros)){
return new cljs.core.Keyword(null,"macro","macro",-867863404);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\..*/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return new cljs.core.Keyword(null,"goog","goog",-1711135452);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*\.gist-.*/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return new cljs.core.Keyword(null,"gist","gist",96143031);
} else {
return new cljs.core.Keyword(null,"cljs","cljs",1492417629);

}
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
klipse_clj.lang.clojure.io.skip_ns_macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"cljs.analyzer.macros","cljs.analyzer.macros",298494182,null),null,new cljs.core.Symbol(null,"cljs.env.macros","cljs.env.macros",1542748640,null),null,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),null,new cljs.core.Symbol(null,"cljs.repl","cljs.repl",1767065658,null),null,new cljs.core.Symbol(null,"cljs.compiler.macros","cljs.compiler.macros",750996207,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"cljs.js","cljs.js",474485962,null),null], null), null);
klipse_clj.lang.clojure.io.the_ns_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.test","cljs.test",884805483,null),"https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs/",new cljs.core.Symbol(null,"clojure.template","clojure.template",-1162325089,null),"https://raw.githubusercontent.com/viebel/clojure/master/src/clj/"], null);
klipse_clj.lang.clojure.io.skip_ns_cljs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"cljs.source-map","cljs.source-map",2108014936,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"cljs.env","cljs.env",-1810013139,null),null], null), null);
klipse_clj.lang.clojure.io.filename_of = (function klipse_clj$lang$clojure$io$filename_of(s){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_cache_buster_QMARK__STAR_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.call(null))].join('');
} else {
return s;
}
});
/**
 * Tries to load one namespace from filenames.
 *   Will call the src-cb upon first success.
 *   If can-recover? is false, will call src-cb with nil if it cannot load any namespace.
 *   Returns :success if a nampespace was loaded otherwise, returns nil.
 *   
 */
klipse_clj.lang.clojure.io.try_to_load_ns = (function klipse_clj$lang$clojure$io$try_to_load_ns(var_args){
var args__5772__auto__ = [];
var len__5766__auto___20403 = arguments.length;
var i__5767__auto___20404 = (0);
while(true){
if((i__5767__auto___20404 < len__5766__auto___20403)){
args__5772__auto__.push((arguments[i__5767__auto___20404]));

var G__20405 = (i__5767__auto___20404 + (1));
i__5767__auto___20404 = G__20405;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__20317){
var map__20318 = p__20317;
var map__20318__$1 = cljs.core.__destructure_map.call(null,map__20318);
var transform = cljs.core.get.call(null,map__20318__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__20318__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("try-to-load-ns ",filenames,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_key));
} else {
}

var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_20369){
var state_val_20370 = (state_20369[(1)]);
if((state_val_20370 === (7))){
var inst_20331 = (state_20369[(2)]);
var inst_20332 = cljs.core.__destructure_map.call(null,inst_20331);
var inst_20333 = cljs.core.get.call(null,inst_20332,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_20334 = cljs.core.get.call(null,inst_20332,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_20335 = cljs.core._EQ_.call(null,(200),inst_20333);
var state_20369__$1 = (function (){var statearr_20371 = state_20369;
(statearr_20371[(7)] = inst_20334);

return statearr_20371;
})();
if(inst_20335){
var statearr_20372_20406 = state_20369__$1;
(statearr_20372_20406[(1)] = (8));

} else {
var statearr_20373_20407 = state_20369__$1;
(statearr_20373_20407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (1))){
var inst_20319 = filenames;
var state_20369__$1 = (function (){var statearr_20374 = state_20369;
(statearr_20374[(8)] = inst_20319);

return statearr_20374;
})();
var statearr_20375_20408 = state_20369__$1;
(statearr_20375_20408[(2)] = null);

(statearr_20375_20408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (4))){
var inst_20319 = (state_20369[(8)]);
var inst_20324 = (state_20369[(9)]);
var inst_20324__$1 = cljs.core.first.call(null,inst_20319);
var inst_20325 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_20324__$1);
var inst_20326 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_20327 = [false];
var inst_20328 = cljs.core.PersistentHashMap.fromArrays(inst_20326,inst_20327);
var inst_20329 = cljs_http.client.get.call(null,inst_20325,inst_20328);
var state_20369__$1 = (function (){var statearr_20376 = state_20369;
(statearr_20376[(9)] = inst_20324__$1);

return statearr_20376;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20369__$1,(7),inst_20329);
} else {
if((state_val_20370 === (15))){
var state_20369__$1 = state_20369;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_20377_20409 = state_20369__$1;
(statearr_20377_20409[(1)] = (17));

} else {
var statearr_20378_20410 = state_20369__$1;
(statearr_20378_20410[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (13))){
var inst_20324 = (state_20369[(9)]);
var inst_20334 = (state_20369[(7)]);
var inst_20343 = (state_20369[(2)]);
var inst_20344 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_20345 = transform.call(null,inst_20334);
var inst_20346 = [lang,inst_20345,inst_20324];
var inst_20347 = cljs.core.PersistentHashMap.fromArrays(inst_20344,inst_20346);
var inst_20348 = src_cb.call(null,inst_20347);
var state_20369__$1 = (function (){var statearr_20379 = state_20369;
(statearr_20379[(10)] = inst_20348);

(statearr_20379[(11)] = inst_20343);

return statearr_20379;
})();
var statearr_20380_20411 = state_20369__$1;
(statearr_20380_20411[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_20380_20411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (6))){
var inst_20356 = (state_20369[(2)]);
var state_20369__$1 = state_20369;
var statearr_20381_20412 = state_20369__$1;
(statearr_20381_20412[(2)] = inst_20356);

(statearr_20381_20412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (17))){
var state_20369__$1 = state_20369;
var statearr_20382_20413 = state_20369__$1;
(statearr_20382_20413[(2)] = null);

(statearr_20382_20413[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (3))){
var inst_20358 = (state_20369[(2)]);
var state_20369__$1 = state_20369;
if(cljs.core.truth_(inst_20358)){
var statearr_20383_20414 = state_20369__$1;
(statearr_20383_20414[(1)] = (14));

} else {
var statearr_20384_20415 = state_20369__$1;
(statearr_20384_20415[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (12))){
var state_20369__$1 = state_20369;
var statearr_20385_20416 = state_20369__$1;
(statearr_20385_20416[(2)] = null);

(statearr_20385_20416[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (2))){
var inst_20319 = (state_20369[(8)]);
var inst_20321 = cljs.core.seq.call(null,inst_20319);
var state_20369__$1 = state_20369;
if(inst_20321){
var statearr_20386_20417 = state_20369__$1;
(statearr_20386_20417[(1)] = (4));

} else {
var statearr_20387_20418 = state_20369__$1;
(statearr_20387_20418[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (19))){
var inst_20365 = (state_20369[(2)]);
var state_20369__$1 = (function (){var statearr_20388 = state_20369;
(statearr_20388[(12)] = inst_20365);

return statearr_20388;
})();
var statearr_20389_20419 = state_20369__$1;
(statearr_20389_20419[(2)] = false);

(statearr_20389_20419[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (11))){
var inst_20324 = (state_20369[(9)]);
var inst_20338 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang);
var inst_20339 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_key);
var inst_20340 = console.info("file loaded successfully",inst_20338,inst_20339,inst_20324);
var state_20369__$1 = state_20369;
var statearr_20390_20420 = state_20369__$1;
(statearr_20390_20420[(2)] = inst_20340);

(statearr_20390_20420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (9))){
var inst_20319 = (state_20369[(8)]);
var inst_20350 = cljs.core.rest.call(null,inst_20319);
var inst_20319__$1 = inst_20350;
var state_20369__$1 = (function (){var statearr_20391 = state_20369;
(statearr_20391[(8)] = inst_20319__$1);

return statearr_20391;
})();
var statearr_20392_20421 = state_20369__$1;
(statearr_20392_20421[(2)] = null);

(statearr_20392_20421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (5))){
var state_20369__$1 = state_20369;
var statearr_20393_20422 = state_20369__$1;
(statearr_20393_20422[(2)] = null);

(statearr_20393_20422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (14))){
var state_20369__$1 = state_20369;
var statearr_20394_20423 = state_20369__$1;
(statearr_20394_20423[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_20394_20423[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (16))){
var inst_20367 = (state_20369[(2)]);
var state_20369__$1 = state_20369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20369__$1,inst_20367);
} else {
if((state_val_20370 === (10))){
var inst_20353 = (state_20369[(2)]);
var state_20369__$1 = state_20369;
var statearr_20395_20424 = state_20369__$1;
(statearr_20395_20424[(2)] = inst_20353);

(statearr_20395_20424[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (18))){
var inst_20363 = src_cb.call(null,null);
var state_20369__$1 = state_20369;
var statearr_20396_20425 = state_20369__$1;
(statearr_20396_20425[(2)] = inst_20363);

(statearr_20396_20425[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20370 === (8))){
var state_20369__$1 = state_20369;
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
var statearr_20397_20426 = state_20369__$1;
(statearr_20397_20426[(1)] = (11));

} else {
var statearr_20398_20427 = state_20369__$1;
(statearr_20398_20427[(1)] = (12));

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
});
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15523__auto____0 = (function (){
var statearr_20399 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20399[(0)] = klipse_clj$lang$clojure$io$state_machine__15523__auto__);

(statearr_20399[(1)] = (1));

return statearr_20399;
});
var klipse_clj$lang$clojure$io$state_machine__15523__auto____1 = (function (state_20369){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_20369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e20400){if((e20400 instanceof Object)){
var ex__15526__auto__ = e20400;
var statearr_20401_20428 = state_20369;
(statearr_20401_20428[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20429 = state_20369;
state_20369 = G__20429;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15523__auto__ = function(state_20369){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15523__auto____1.call(this,state_20369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15523__auto____0;
klipse_clj$lang$clojure$io$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15523__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_20402 = f__15620__auto__.call(null);
(statearr_20402[(6)] = c__15619__auto__);

return statearr_20402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
}));

(klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq20312){
var G__20313 = cljs.core.first.call(null,seq20312);
var seq20312__$1 = cljs.core.next.call(null,seq20312);
var G__20314 = cljs.core.first.call(null,seq20312__$1);
var seq20312__$2 = cljs.core.next.call(null,seq20312__$1);
var G__20315 = cljs.core.first.call(null,seq20312__$2);
var seq20312__$3 = cljs.core.next.call(null,seq20312__$2);
var G__20316 = cljs.core.first.call(null,seq20312__$3);
var seq20312__$4 = cljs.core.next.call(null,seq20312__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20313,G__20314,G__20315,G__20316,seq20312__$4);
}));

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__5520__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__20430(s__20431){
return (new cljs.core.LazySeq(null,(function (){
var s__20431__$1 = s__20431;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__20431__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var lib = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__20431__$1,lib,xs__6360__auto__,temp__5804__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__20430_$_iter__20432(s__20433){
return (new cljs.core.LazySeq(null,((function (s__20431__$1,lib,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__20433__$1 = s__20433;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__20433__$1);
if(temp__5804__auto____$1){
var s__20433__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20433__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__20433__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__20435 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__20434 = (0);
while(true){
if((i__20434 < size__5519__auto__)){
var suffix = cljs.core._nth.call(null,c__5518__auto__,i__20434);
cljs.core.chunk_append.call(null,b__20435,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__20436 = (i__20434 + (1));
i__20434 = G__20436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20435),klipse_clj$lang$clojure$io$external_libs_files_$_iter__20430_$_iter__20432.call(null,cljs.core.chunk_rest.call(null,s__20433__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20435),null);
}
} else {
var suffix = cljs.core.first.call(null,s__20433__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__20430_$_iter__20432.call(null,cljs.core.rest.call(null,s__20433__$2)));
}
} else {
return null;
}
break;
}
});})(s__20431__$1,lib,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__20431__$1,lib,xs__6360__auto__,temp__5804__auto__))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,suffixes));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__20430.call(null,cljs.core.rest.call(null,s__20431__$1)));
} else {
var G__20437 = cljs.core.rest.call(null,s__20431__$1);
s__20431__$1 = G__20437;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,external_libs);
});
klipse_clj.lang.clojure.io.name__GT_cached_resource = (function klipse_clj$lang$clojure$io$name__GT_cached_resource(name){
return clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name)),/\./,"_SLASH_");
});
klipse_clj.lang.clojure.io.cached_ns_root = (function klipse_clj$lang$clojure$io$cached_ns_root(){
return new cljs.core.Keyword(null,"cached_ns_root","cached_ns_root",-1077014575).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,"https://viebel.github.io/cljs-analysis-cache/cache/");
});
klipse_clj.lang.clojure.io.load_ns_from_cache = (function klipse_clj$lang$clojure$io$load_ns_from_cache(name,src_cb,macro_QMARK_,on_failure_cb){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns-from-cache:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"macro: ",macro_QMARK_);
} else {
}

var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_20482){
var state_val_20483 = (state_20482[(1)]);
if((state_val_20483 === (7))){
var inst_20461 = (state_20482[(7)]);
var inst_20454 = (state_20482[(8)]);
var inst_20470 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_20471 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_20461);
var inst_20472 = klipse_clj.lang.clojure.io.edn.call(null,inst_20471);
var inst_20473 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_20454);
var inst_20474 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_20472,inst_20473];
var inst_20475 = cljs.core.PersistentHashMap.fromArrays(inst_20470,inst_20474);
var inst_20476 = src_cb.call(null,inst_20475);
var state_20482__$1 = state_20482;
var statearr_20484_20500 = state_20482__$1;
(statearr_20484_20500[(2)] = inst_20476);

(statearr_20484_20500[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20483 === (1))){
var inst_20439 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_20482__$1 = (function (){var statearr_20485 = state_20482;
(statearr_20485[(9)] = inst_20439);

return statearr_20485;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_20486_20501 = state_20482__$1;
(statearr_20486_20501[(1)] = (2));

} else {
var statearr_20487_20502 = state_20482__$1;
(statearr_20487_20502[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20483 === (4))){
var inst_20443 = (state_20482[(10)]);
var inst_20446 = (state_20482[(11)]);
var inst_20445 = (state_20482[(12)]);
var inst_20439 = (state_20482[(9)]);
var inst_20443__$1 = (state_20482[(2)]);
var inst_20444 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_20445__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20444),"/"].join('');
var inst_20446__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20445__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20439),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20443__$1),".js"].join('');
var inst_20447 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20445__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20439),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20443__$1),".cache.json"].join('');
var inst_20448 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_20446__$1);
var inst_20449 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_20450 = [false];
var inst_20451 = cljs.core.PersistentHashMap.fromArrays(inst_20449,inst_20450);
var inst_20452 = cljs_http.client.get.call(null,inst_20448,inst_20451);
var state_20482__$1 = (function (){var statearr_20488 = state_20482;
(statearr_20488[(13)] = inst_20447);

(statearr_20488[(10)] = inst_20443__$1);

(statearr_20488[(11)] = inst_20446__$1);

(statearr_20488[(12)] = inst_20445__$1);

return statearr_20488;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20482__$1,(5),inst_20452);
} else {
if((state_val_20483 === (6))){
var inst_20447 = (state_20482[(13)]);
var inst_20443 = (state_20482[(10)]);
var inst_20446 = (state_20482[(11)]);
var inst_20445 = (state_20482[(12)]);
var inst_20461 = (state_20482[(7)]);
var inst_20439 = (state_20482[(9)]);
var inst_20454 = (state_20482[(8)]);
var inst_20461__$1 = (state_20482[(2)]);
var inst_20462 = (function (){var nn = inst_20439;
var suffix = inst_20443;
var root = inst_20445;
var src_filename = inst_20446;
var cache_filename = inst_20447;
var src = inst_20454;
var cache = inst_20461__$1;
return (function (p1__20438_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__20438_SHARP_);
});
})();
var inst_20463 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20464 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_20461__$1);
var inst_20465 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_20454);
var inst_20466 = [inst_20464,inst_20465];
var inst_20467 = (new cljs.core.PersistentVector(null,2,(5),inst_20463,inst_20466,null));
var inst_20468 = cljs.core.every_QMARK_.call(null,inst_20462,inst_20467);
var state_20482__$1 = (function (){var statearr_20489 = state_20482;
(statearr_20489[(7)] = inst_20461__$1);

return statearr_20489;
})();
if(inst_20468){
var statearr_20490_20503 = state_20482__$1;
(statearr_20490_20503[(1)] = (7));

} else {
var statearr_20491_20504 = state_20482__$1;
(statearr_20491_20504[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20483 === (3))){
var state_20482__$1 = state_20482;
var statearr_20492_20505 = state_20482__$1;
(statearr_20492_20505[(2)] = "");

(statearr_20492_20505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20483 === (2))){
var state_20482__$1 = state_20482;
var statearr_20493_20506 = state_20482__$1;
(statearr_20493_20506[(2)] = "$macros");

(statearr_20493_20506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20483 === (9))){
var inst_20480 = (state_20482[(2)]);
var state_20482__$1 = state_20482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20482__$1,inst_20480);
} else {
if((state_val_20483 === (5))){
var inst_20447 = (state_20482[(13)]);
var inst_20454 = (state_20482[(2)]);
var inst_20455 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_20447);
var inst_20456 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_20457 = [false];
var inst_20458 = cljs.core.PersistentHashMap.fromArrays(inst_20456,inst_20457);
var inst_20459 = cljs_http.client.get.call(null,inst_20455,inst_20458);
var state_20482__$1 = (function (){var statearr_20494 = state_20482;
(statearr_20494[(8)] = inst_20454);

return statearr_20494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20482__$1,(6),inst_20459);
} else {
if((state_val_20483 === (8))){
var inst_20478 = on_failure_cb.call(null);
var state_20482__$1 = state_20482;
var statearr_20495_20507 = state_20482__$1;
(statearr_20495_20507[(2)] = inst_20478);

(statearr_20495_20507[(1)] = (9));


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
});
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15523__auto____0 = (function (){
var statearr_20496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20496[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15523__auto__);

(statearr_20496[(1)] = (1));

return statearr_20496;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15523__auto____1 = (function (state_20482){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_20482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e20497){if((e20497 instanceof Object)){
var ex__15526__auto__ = e20497;
var statearr_20498_20508 = state_20482;
(statearr_20498_20508[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20509 = state_20482;
state_20482 = G__20509;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15523__auto__ = function(state_20482){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15523__auto____1.call(this,state_20482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_20499 = f__15620__auto__.call(null);
(statearr_20499[(6)] = c__15619__auto__);

return statearr_20499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns-from-file",filename);
} else {
}

var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_20529){
var state_val_20530 = (state_20529[(1)]);
if((state_val_20530 === (1))){
var inst_20511 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_20512 = [false];
var inst_20513 = cljs.core.PersistentHashMap.fromArrays(inst_20511,inst_20512);
var inst_20514 = cljs_http.client.get.call(null,filename,inst_20513);
var state_20529__$1 = state_20529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20529__$1,(2),inst_20514);
} else {
if((state_val_20530 === (2))){
var inst_20516 = (state_20529[(2)]);
var inst_20517 = cljs.core.__destructure_map.call(null,inst_20516);
var inst_20518 = cljs.core.get.call(null,inst_20517,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_20519 = cljs.core.get.call(null,inst_20517,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_20520 = cljs.core._EQ_.call(null,(200),inst_20519);
var state_20529__$1 = (function (){var statearr_20531 = state_20529;
(statearr_20531[(7)] = inst_20518);

return statearr_20531;
})();
if(inst_20520){
var statearr_20532_20540 = state_20529__$1;
(statearr_20532_20540[(1)] = (3));

} else {
var statearr_20533_20541 = state_20529__$1;
(statearr_20533_20541[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20530 === (3))){
var inst_20518 = (state_20529[(7)]);
var inst_20522 = klipse_clj.lang.clojure.io.edn.call(null,inst_20518);
var inst_20523 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_20522);
var state_20529__$1 = state_20529;
var statearr_20534_20542 = state_20529__$1;
(statearr_20534_20542[(2)] = inst_20523);

(statearr_20534_20542[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20530 === (4))){
var inst_20525 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_20529__$1 = state_20529;
var statearr_20535_20543 = state_20529__$1;
(statearr_20535_20543[(2)] = inst_20525);

(statearr_20535_20543[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20530 === (5))){
var inst_20527 = (state_20529[(2)]);
var state_20529__$1 = state_20529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20529__$1,inst_20527);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15523__auto____0 = (function (){
var statearr_20536 = [null,null,null,null,null,null,null,null];
(statearr_20536[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15523__auto__);

(statearr_20536[(1)] = (1));

return statearr_20536;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15523__auto____1 = (function (state_20529){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_20529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e20537){if((e20537 instanceof Object)){
var ex__15526__auto__ = e20537;
var statearr_20538_20544 = state_20529;
(statearr_20538_20544[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20545 = state_20529;
state_20529 = G__20545;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15523__auto__ = function(state_20529){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15523__auto____1.call(this,state_20529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15523__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15523__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_20539 = f__15620__auto__.call(null);
(statearr_20539[(6)] = c__15619__auto__);

return statearr_20539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse_clj.lang.clojure.io.cached_macro_ns_regexp = (function klipse_clj$lang$clojure$io$cached_macro_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_macro_ns_regexp","clojure_cached_macro_ns_regexp",-771780299).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,/.*/);
});
klipse_clj.lang.clojure.io.cached_macro_ns_QMARK_ = (function klipse_clj$lang$clojure$io$cached_macro_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse_clj.lang.clojure.io.cached_macro_ns_regexp.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
klipse_clj.lang.clojure.io.cached_ns_regexp = (function klipse_clj$lang$clojure$io$cached_ns_regexp(){
return new cljs.core.Keyword(null,"clojure_cached_ns_regexp","clojure_cached_ns_regexp",-1735711110).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,/.*/);
});
klipse_clj.lang.clojure.io.cached_cljs_ns_QMARK_ = (function klipse_clj$lang$clojure$io$cached_cljs_ns_QMARK_(name){
return cljs.core.re_matches.call(null,klipse_clj.lang.clojure.io.cached_ns_regexp.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__20546,src_cb_original){
var map__20547 = p__20546;
var map__20547__$1 = cljs.core.__destructure_map.call(null,map__20547);
var args = map__20547__$1;
var name = cljs.core.get.call(null,map__20547__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__20547__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var try_cache_QMARK_ = cljs.core.get.call(null,map__20547__$1,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),true);
var load_ns_skip_cache = (function (){
return klipse_clj.lang.clojure.io.load_ns.call(null,external_libs,cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),false),src_cb_original);
});
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:(function() { 
var G__20548__delegate = function (args__$1){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args__$1);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__20548 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__20549__i = 0, G__20549__a = new Array(arguments.length -  0);
while (G__20549__i < G__20549__a.length) {G__20549__a[G__20549__i] = arguments[G__20549__i + 0]; ++G__20549__i;}
  args__$1 = new cljs.core.IndexedSeq(G__20549__a,0,null);
} 
return G__20548__delegate.call(this,args__$1);};
G__20548.cljs$lang$maxFixedArity = 0;
G__20548.cljs$lang$applyTo = (function (arglist__20550){
var args__$1 = cljs.core.seq(arglist__20550);
return G__20548__delegate(args__$1);
});
G__20548.cljs$core$IFn$_invoke$arity$variadic = G__20548__delegate;
return G__20548;
})()
);
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns :macro :",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

if(cljs.core.truth_(klipse_clj.lang.clojure.io.skip_ns_macros.call(null,name))){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns :macro skipping:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = try_cache_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return klipse_clj.lang.clojure.io.cached_macro_ns_QMARK_.call(null,name);
} else {
return and__5041__auto__;
}
})())){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns :macro cached:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return klipse_clj.lang.clojure.io.load_ns_from_cache.call(null,name,src_cb,true,load_ns_skip_cache);
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io.the_ns_map.call(null,name))){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns :macro known:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.the_ns_map.call(null,name)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var filenames = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,prefix),klipse_clj.lang.clojure.io.macro_suffixes);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns :macro external-libs:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.macro_suffixes,path);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}
}
}));
klipse_clj.lang.clojure.io.bundled_ns_root = (function klipse_clj$lang$clojure$io$bundled_ns_root(){
return new cljs.core.Keyword(null,"bundled_ns_root","bundled_ns_root",205057992).cljs$core$IFn$_invoke$arity$2(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_,"https://viebel.github.io/klipse-clj/target/public/cljs-out/dev/");
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (_external_libs,p__20552,src_cb){
var map__20553 = p__20552;
var map__20553__$1 = cljs.core.__destructure_map.call(null,map__20553);
var path = cljs.core.get.call(null,map__20553__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,(function (p1__20551_SHARP_){
return ["https://gist.githubusercontent.com/",path__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20551_SHARP_)].join('');
}),klipse_clj.lang.clojure.io.cljs_suffixes);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
}));
klipse_clj.lang.clojure.io.bundled_ns_ignore_regexp = (function klipse_clj$lang$clojure$io$bundled_ns_ignore_regexp(){
return new cljs.core.Keyword(null,"clojure_bundled_ns_ignore_regexp","clojure_bundled_ns_ignore_regexp",-1479622333).cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io._STAR_klipse_settings_STAR_);
});
klipse_clj.lang.clojure.io.custom_bundled_ns_ignore_QMARK_ = (function klipse_clj$lang$clojure$io$custom_bundled_ns_ignore_QMARK_(name){
var temp__5804__auto__ = klipse_clj.lang.clojure.io.bundled_ns_ignore_regexp.call(null);
if(cljs.core.truth_(temp__5804__auto__)){
var regexp = temp__5804__auto__;
return cljs.core.re_matches.call(null,regexp,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
return null;
}
});
klipse_clj.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_ = (function klipse_clj$lang$clojure$io$buggy_bundled_ns_ignore_QMARK_(name){
return cljs.core.re_matches.call(null,/.*reagent.*|cljs.core.async.*|cljs.core.specs.alpha/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
/**
 * Checks whether a namespace is present at run-time
 */
klipse_clj.lang.clojure.io.bundled_ns_QMARK_ = (function klipse_clj$lang$clojure$io$bundled_ns_QMARK_(name){
if(cljs.core.truth_((function (){var or__5043__auto__ = klipse_clj.lang.clojure.io.buggy_bundled_ns_ignore_QMARK_.call(null,name);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return klipse_clj.lang.clojure.io.custom_bundled_ns_ignore_QMARK_.call(null,name);
}
})())){
return false;
} else {
return (!(((function (){var obj__20025__auto__ = goog;
var f__20026__auto__ = (function (){var obj20554 = obj__20025__auto__;
var k20555 = "getObjectByName";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20554,k20555)){
return (obj20554[k20555]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name)));
})() == null)));
}
});
klipse_clj.lang.clojure.io.cljsjs_QMARK_ = (function klipse_clj$lang$clojure$io$cljsjs_QMARK_(name){
return cljs.core.re_matches.call(null,/cljsjs\..*/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});
klipse_clj.lang.clojure.io.cljsjs_libname = (function klipse_clj$lang$clojure$io$cljsjs_libname(name){
var $ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(name);
var $__$1 = cljs.core.re_matches.call(null,/cljsjs\.(.*)/,$);
var $__$2 = cljs.core.second.call(null,$__$1);
return clojure.string.replace.call(null,$__$2,/\./,"-");
});
/**
 * some cljsjs packages are already loaded e.g react in klipse app
 */
klipse_clj.lang.clojure.io.bundled_cljsjs_ns_QMARK_ = (function klipse_clj$lang$clojure$io$bundled_cljsjs_ns_QMARK_(name){
var or__5043__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react","cljsjs.react",822859692,null));
if(and__5041__auto__){
var obj20556 = window;
var k20557 = "React";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20556,k20557)){
return (obj20556[k20557]);
} else {
return null;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (function (){var and__5041__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom.server","cljsjs.react.dom.server",-1041656528,null));
if(and__5041__auto__){
var obj20558 = window;
var k20559 = "ReactDOMServer";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20558,k20559)){
return (obj20558[k20559]);
} else {
return null;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var and__5041__auto__ = cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljsjs.react.dom","cljsjs.react.dom",-1678399696,null));
if(and__5041__auto__){
var obj20560 = window;
var k20561 = "ReactDOM";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20560,k20561)){
return (obj20560[k20561]);
} else {
return null;
}
} else {
return and__5041__auto__;
}
}
}
});
/**
 * Try to load the js file corresponding to a cljsjs package.
 *   For that, we have to convert the package name into a full path - hosted on this git repo: https://github.com/viebel/cljsjs-hosted
 *   
 */
klipse_clj.lang.clojure.io.try_to_load_cljsjs_ns = (function klipse_clj$lang$clojure$io$try_to_load_cljsjs_ns(name,src_cb){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.log("load-ns :cljs try-to-load-cljsjs-ns",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

if(cljs.core.truth_(klipse_clj.lang.clojure.io.bundled_cljsjs_ns_QMARK_.call(null,name))){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns bundled-cljsjs-ns",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var root_path = "https://viebel.github.io/cljsjs-hosted/cljsjs/";
var lib_name = klipse_clj.lang.clojure.io.cljsjs_libname.call(null,name);
var full_names = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[root_path,lib_name,"/production/",lib_name,".min.inc.js"].join(''),[root_path,"/production/",lib_name,".min.inc.js"].join(''),[root_path,lib_name,"/development/",lib_name,".inc.js"].join(''),[root_path,"/development/",lib_name,".inc.js"].join('')], null);
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,full_names,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
}
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__20563,src_cb){
var map__20564 = p__20563;
var map__20564__$1 = cljs.core.__destructure_map.call(null,map__20564);
var args = map__20564__$1;
var name = cljs.core.get.call(null,map__20564__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__20564__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var try_cache_QMARK_ = cljs.core.get.call(null,map__20564__$1,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),true);
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns :cljs :",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"external-libs: ",external_libs);
} else {
}

var load_ns_skip_cache = (function (){
return klipse_clj.lang.clojure.io.load_ns.call(null,external_libs,cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),false),src_cb);
});
if(cljs.core.truth_(klipse_clj.lang.clojure.io.skip_ns_cljs.call(null,name))){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns :cljs skipping",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
if(klipse_clj.lang.clojure.io.bundled_ns_QMARK_.call(null,name)){
var _ = (cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)?console.log("load-ns :cljs bundled",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):null);
var filenames = cljs.core.map.call(null,(function (p1__20562_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20562_SHARP_),".cache.json"].join('');
}),klipse_clj.lang.clojure.io.cljs_suffixes);
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_20577){
var state_val_20578 = (state_20577[(1)]);
if((state_val_20578 === (1))){
var inst_20565 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_20577__$1 = state_20577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20577__$1,(2),inst_20565);
} else {
if((state_val_20578 === (2))){
var inst_20567 = (state_20577[(2)]);
var state_20577__$1 = state_20577;
if(cljs.core.truth_(inst_20567)){
var statearr_20579_20630 = state_20577__$1;
(statearr_20579_20630[(1)] = (3));

} else {
var statearr_20580_20631 = state_20577__$1;
(statearr_20580_20631[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20578 === (3))){
var state_20577__$1 = state_20577;
var statearr_20581_20632 = state_20577__$1;
(statearr_20581_20632[(2)] = null);

(statearr_20581_20632[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20578 === (4))){
var inst_20570 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_20571 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_20572 = cljs.core.PersistentHashMap.fromArrays(inst_20570,inst_20571);
var inst_20573 = src_cb.call(null,inst_20572);
var state_20577__$1 = state_20577;
var statearr_20582_20633 = state_20577__$1;
(statearr_20582_20633[(2)] = inst_20573);

(statearr_20582_20633[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20578 === (5))){
var inst_20575 = (state_20577[(2)]);
var state_20577__$1 = state_20577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20577__$1,inst_20575);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15523__auto____0 = (function (){
var statearr_20583 = [null,null,null,null,null,null,null];
(statearr_20583[(0)] = klipse_clj$lang$clojure$io$state_machine__15523__auto__);

(statearr_20583[(1)] = (1));

return statearr_20583;
});
var klipse_clj$lang$clojure$io$state_machine__15523__auto____1 = (function (state_20577){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_20577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e20584){if((e20584 instanceof Object)){
var ex__15526__auto__ = e20584;
var statearr_20585_20634 = state_20577;
(statearr_20585_20634[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20635 = state_20577;
state_20577 = G__20635;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15523__auto__ = function(state_20577){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15523__auto____1.call(this,state_20577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15523__auto____0;
klipse_clj$lang$clojure$io$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15523__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_20586 = f__15620__auto__.call(null);
(statearr_20586[(6)] = c__15619__auto__);

return statearr_20586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = try_cache_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return klipse_clj.lang.clojure.io.cached_cljs_ns_QMARK_.call(null,name);
} else {
return and__5041__auto__;
}
})())){
return klipse_clj.lang.clojure.io.load_ns_from_cache.call(null,name,src_cb,false,load_ns_skip_cache);
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io.cljsjs_QMARK_.call(null,name))){
return klipse_clj.lang.clojure.io.try_to_load_cljsjs_ns.call(null,name,src_cb);
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io.the_ns_map.call(null,name))){
var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.the_ns_map.call(null,name)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var filenames = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.str,prefix),klipse_clj.lang.clojure.io.cljs_suffixes);
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns :cljs from external libs",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_20597){
var state_val_20598 = (state_20597[(1)]);
if((state_val_20598 === (1))){
var inst_20587 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_20597__$1 = state_20597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20597__$1,(2),inst_20587);
} else {
if((state_val_20598 === (2))){
var inst_20589 = (state_20597[(2)]);
var state_20597__$1 = state_20597;
if(cljs.core.truth_(inst_20589)){
var statearr_20599_20636 = state_20597__$1;
(statearr_20599_20636[(1)] = (3));

} else {
var statearr_20600_20637 = state_20597__$1;
(statearr_20600_20637[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (3))){
var state_20597__$1 = state_20597;
var statearr_20601_20638 = state_20597__$1;
(statearr_20601_20638[(2)] = null);

(statearr_20601_20638[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (4))){
var inst_20592 = [prefix,".js"].join('');
var inst_20593 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_20592,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_20597__$1 = state_20597;
var statearr_20602_20639 = state_20597__$1;
(statearr_20602_20639[(2)] = inst_20593);

(statearr_20602_20639[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (5))){
var inst_20595 = (state_20597[(2)]);
var state_20597__$1 = state_20597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20597__$1,inst_20595);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15523__auto____0 = (function (){
var statearr_20603 = [null,null,null,null,null,null,null];
(statearr_20603[(0)] = klipse_clj$lang$clojure$io$state_machine__15523__auto__);

(statearr_20603[(1)] = (1));

return statearr_20603;
});
var klipse_clj$lang$clojure$io$state_machine__15523__auto____1 = (function (state_20597){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_20597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e20604){if((e20604 instanceof Object)){
var ex__15526__auto__ = e20604;
var statearr_20605_20640 = state_20597;
(statearr_20605_20640[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20641 = state_20597;
state_20597 = G__20641;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15523__auto__ = function(state_20597){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15523__auto____1.call(this,state_20597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15523__auto____0;
klipse_clj$lang$clojure$io$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15523__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_20606 = f__15620__auto__.call(null);
(statearr_20606[(6)] = c__15619__auto__);

return statearr_20606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_20620){
var state_val_20621 = (state_20620[(1)]);
if((state_val_20621 === (1))){
var inst_20607 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_20620__$1 = state_20620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20620__$1,(2),inst_20607);
} else {
if((state_val_20621 === (2))){
var inst_20609 = (state_20620[(2)]);
var state_20620__$1 = state_20620;
if(cljs.core.truth_(inst_20609)){
var statearr_20622_20642 = state_20620__$1;
(statearr_20622_20642[(1)] = (3));

} else {
var statearr_20623_20643 = state_20620__$1;
(statearr_20623_20643[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20621 === (3))){
var state_20620__$1 = state_20620;
var statearr_20624_20644 = state_20620__$1;
(statearr_20624_20644[(2)] = null);

(statearr_20624_20644[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20621 === (4))){
var inst_20612 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20613 = [".js"];
var inst_20614 = (new cljs.core.PersistentVector(null,1,(5),inst_20612,inst_20613,null));
var inst_20615 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_20614,path);
var inst_20616 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_20615,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_20620__$1 = state_20620;
var statearr_20625_20645 = state_20620__$1;
(statearr_20625_20645[(2)] = inst_20616);

(statearr_20625_20645[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20621 === (5))){
var inst_20618 = (state_20620[(2)]);
var state_20620__$1 = state_20620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20620__$1,inst_20618);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$io$state_machine__15523__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__15523__auto____0 = (function (){
var statearr_20626 = [null,null,null,null,null,null,null];
(statearr_20626[(0)] = klipse_clj$lang$clojure$io$state_machine__15523__auto__);

(statearr_20626[(1)] = (1));

return statearr_20626;
});
var klipse_clj$lang$clojure$io$state_machine__15523__auto____1 = (function (state_20620){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_20620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e20627){if((e20627 instanceof Object)){
var ex__15526__auto__ = e20627;
var statearr_20628_20646 = state_20620;
(statearr_20628_20646[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20647 = state_20620;
state_20620 = G__20647;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__15523__auto__ = function(state_20620){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__15523__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__15523__auto____1.call(this,state_20620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__15523__auto____0;
klipse_clj$lang$clojure$io$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__15523__auto____1;
return klipse_clj$lang$clojure$io$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_20629 = f__15620__auto__.call(null);
(statearr_20629[(6)] = c__15619__auto__);

return statearr_20629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
} else {
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns :cljs nothing can be done",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
} else {
}

return src_cb.call(null,null);

}
}
}
}
}
}
}));
klipse_clj.lang.clojure.io.fix_goog_path = (function klipse_clj$lang$clojure$io$fix_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),((cljs.core._EQ_.call(null,last_part,clojure.string.lower_case.call(null,last_part)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_part,last_part], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case.call(null,last_part)], null)));
return clojure.string.join.call(null,"/",new_parts);
});
klipse_clj.lang.clojure.io.simple_goog_path = (function klipse_clj$lang$clojure$io$simple_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var butlast_parts = cljs.core.butlast.call(null,parts);
var new_parts = cljs.core.concat.call(null,butlast_parts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,butlast_parts)], null));
return clojure.string.join.call(null,"/",new_parts);
});
klipse_clj.lang.clojure.io.another_goog_path = (function klipse_clj$lang$clojure$io$another_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var _last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,"",cljs.core.take_last.call(null,(2),parts))], null));
return clojure.string.join.call(null,"/",new_parts);
});
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__20649,src_cb){
var map__20650 = p__20649;
var map__20650__$1 = cljs.core.__destructure_map.call(null,map__20650);
var name = cljs.core.get.call(null,map__20650__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__20650__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj__20025__auto__ = goog;
var f__20026__auto__ = (function (){var obj20651 = obj__20025__auto__;
var k20652 = "getObjectByName";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20651,k20652)){
return (obj20651[k20652]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,(function (p1__20648_SHARP_){
return [closure_github_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20648_SHARP_),".js"].join('');
}),cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map

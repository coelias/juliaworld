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
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse-clj.lang.clojure.io","load-ns"),(function (_,p__28423,_src_cb){
var map__28424 = p__28423;
var map__28424__$1 = cljs.core.__destructure_map.call(null,map__28424);
var name = cljs.core.get.call(null,map__28424__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__28424__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__28424__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var len__5766__auto___28516 = arguments.length;
var i__5767__auto___28517 = (0);
while(true){
if((i__5767__auto___28517 < len__5766__auto___28516)){
args__5772__auto__.push((arguments[i__5767__auto___28517]));

var G__28518 = (i__5767__auto___28517 + (1));
i__5767__auto___28517 = G__28518;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__28430){
var map__28431 = p__28430;
var map__28431__$1 = cljs.core.__destructure_map.call(null,map__28431);
var transform = cljs.core.get.call(null,map__28431__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__28431__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("try-to-load-ns ",filenames,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_key));
} else {
}

var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28482){
var state_val_28483 = (state_28482[(1)]);
if((state_val_28483 === (7))){
var inst_28444 = (state_28482[(2)]);
var inst_28445 = cljs.core.__destructure_map.call(null,inst_28444);
var inst_28446 = cljs.core.get.call(null,inst_28445,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_28447 = cljs.core.get.call(null,inst_28445,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_28448 = cljs.core._EQ_.call(null,(200),inst_28446);
var state_28482__$1 = (function (){var statearr_28484 = state_28482;
(statearr_28484[(7)] = inst_28447);

return statearr_28484;
})();
if(inst_28448){
var statearr_28485_28519 = state_28482__$1;
(statearr_28485_28519[(1)] = (8));

} else {
var statearr_28486_28520 = state_28482__$1;
(statearr_28486_28520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (1))){
var inst_28432 = filenames;
var state_28482__$1 = (function (){var statearr_28487 = state_28482;
(statearr_28487[(8)] = inst_28432);

return statearr_28487;
})();
var statearr_28488_28521 = state_28482__$1;
(statearr_28488_28521[(2)] = null);

(statearr_28488_28521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (4))){
var inst_28432 = (state_28482[(8)]);
var inst_28437 = (state_28482[(9)]);
var inst_28437__$1 = cljs.core.first.call(null,inst_28432);
var inst_28438 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_28437__$1);
var inst_28439 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_28440 = [false];
var inst_28441 = cljs.core.PersistentHashMap.fromArrays(inst_28439,inst_28440);
var inst_28442 = cljs_http.client.get.call(null,inst_28438,inst_28441);
var state_28482__$1 = (function (){var statearr_28489 = state_28482;
(statearr_28489[(9)] = inst_28437__$1);

return statearr_28489;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28482__$1,(7),inst_28442);
} else {
if((state_val_28483 === (15))){
var state_28482__$1 = state_28482;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_28490_28522 = state_28482__$1;
(statearr_28490_28522[(1)] = (17));

} else {
var statearr_28491_28523 = state_28482__$1;
(statearr_28491_28523[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (13))){
var inst_28447 = (state_28482[(7)]);
var inst_28437 = (state_28482[(9)]);
var inst_28456 = (state_28482[(2)]);
var inst_28457 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_28458 = transform.call(null,inst_28447);
var inst_28459 = [lang,inst_28458,inst_28437];
var inst_28460 = cljs.core.PersistentHashMap.fromArrays(inst_28457,inst_28459);
var inst_28461 = src_cb.call(null,inst_28460);
var state_28482__$1 = (function (){var statearr_28492 = state_28482;
(statearr_28492[(10)] = inst_28456);

(statearr_28492[(11)] = inst_28461);

return statearr_28492;
})();
var statearr_28493_28524 = state_28482__$1;
(statearr_28493_28524[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_28493_28524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (6))){
var inst_28469 = (state_28482[(2)]);
var state_28482__$1 = state_28482;
var statearr_28494_28525 = state_28482__$1;
(statearr_28494_28525[(2)] = inst_28469);

(statearr_28494_28525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (17))){
var state_28482__$1 = state_28482;
var statearr_28495_28526 = state_28482__$1;
(statearr_28495_28526[(2)] = null);

(statearr_28495_28526[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (3))){
var inst_28471 = (state_28482[(2)]);
var state_28482__$1 = state_28482;
if(cljs.core.truth_(inst_28471)){
var statearr_28496_28527 = state_28482__$1;
(statearr_28496_28527[(1)] = (14));

} else {
var statearr_28497_28528 = state_28482__$1;
(statearr_28497_28528[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (12))){
var state_28482__$1 = state_28482;
var statearr_28498_28529 = state_28482__$1;
(statearr_28498_28529[(2)] = null);

(statearr_28498_28529[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (2))){
var inst_28432 = (state_28482[(8)]);
var inst_28434 = cljs.core.seq.call(null,inst_28432);
var state_28482__$1 = state_28482;
if(inst_28434){
var statearr_28499_28530 = state_28482__$1;
(statearr_28499_28530[(1)] = (4));

} else {
var statearr_28500_28531 = state_28482__$1;
(statearr_28500_28531[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (19))){
var inst_28478 = (state_28482[(2)]);
var state_28482__$1 = (function (){var statearr_28501 = state_28482;
(statearr_28501[(12)] = inst_28478);

return statearr_28501;
})();
var statearr_28502_28532 = state_28482__$1;
(statearr_28502_28532[(2)] = false);

(statearr_28502_28532[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (11))){
var inst_28437 = (state_28482[(9)]);
var inst_28451 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang);
var inst_28452 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_key);
var inst_28453 = console.info("file loaded successfully",inst_28451,inst_28452,inst_28437);
var state_28482__$1 = state_28482;
var statearr_28503_28533 = state_28482__$1;
(statearr_28503_28533[(2)] = inst_28453);

(statearr_28503_28533[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (9))){
var inst_28432 = (state_28482[(8)]);
var inst_28463 = cljs.core.rest.call(null,inst_28432);
var inst_28432__$1 = inst_28463;
var state_28482__$1 = (function (){var statearr_28504 = state_28482;
(statearr_28504[(8)] = inst_28432__$1);

return statearr_28504;
})();
var statearr_28505_28534 = state_28482__$1;
(statearr_28505_28534[(2)] = null);

(statearr_28505_28534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (5))){
var state_28482__$1 = state_28482;
var statearr_28506_28535 = state_28482__$1;
(statearr_28506_28535[(2)] = null);

(statearr_28506_28535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (14))){
var state_28482__$1 = state_28482;
var statearr_28507_28536 = state_28482__$1;
(statearr_28507_28536[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_28507_28536[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (16))){
var inst_28480 = (state_28482[(2)]);
var state_28482__$1 = state_28482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28482__$1,inst_28480);
} else {
if((state_val_28483 === (10))){
var inst_28466 = (state_28482[(2)]);
var state_28482__$1 = state_28482;
var statearr_28508_28537 = state_28482__$1;
(statearr_28508_28537[(2)] = inst_28466);

(statearr_28508_28537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (18))){
var inst_28476 = src_cb.call(null,null);
var state_28482__$1 = state_28482;
var statearr_28509_28538 = state_28482__$1;
(statearr_28509_28538[(2)] = inst_28476);

(statearr_28509_28538[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28483 === (8))){
var state_28482__$1 = state_28482;
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
var statearr_28510_28539 = state_28482__$1;
(statearr_28510_28539[(1)] = (11));

} else {
var statearr_28511_28540 = state_28482__$1;
(statearr_28511_28540[(1)] = (12));

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
var klipse_clj$lang$clojure$io$state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__13608__auto____0 = (function (){
var statearr_28512 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28512[(0)] = klipse_clj$lang$clojure$io$state_machine__13608__auto__);

(statearr_28512[(1)] = (1));

return statearr_28512;
});
var klipse_clj$lang$clojure$io$state_machine__13608__auto____1 = (function (state_28482){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28513){if((e28513 instanceof Object)){
var ex__13611__auto__ = e28513;
var statearr_28514_28541 = state_28482;
(statearr_28514_28541[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28542 = state_28482;
state_28482 = G__28542;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__13608__auto__ = function(state_28482){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__13608__auto____1.call(this,state_28482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__13608__auto____0;
klipse_clj$lang$clojure$io$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__13608__auto____1;
return klipse_clj$lang$clojure$io$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28515 = f__13705__auto__.call(null);
(statearr_28515[(6)] = c__13704__auto__);

return statearr_28515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
}));

(klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq28425){
var G__28426 = cljs.core.first.call(null,seq28425);
var seq28425__$1 = cljs.core.next.call(null,seq28425);
var G__28427 = cljs.core.first.call(null,seq28425__$1);
var seq28425__$2 = cljs.core.next.call(null,seq28425__$1);
var G__28428 = cljs.core.first.call(null,seq28425__$2);
var seq28425__$3 = cljs.core.next.call(null,seq28425__$2);
var G__28429 = cljs.core.first.call(null,seq28425__$3);
var seq28425__$4 = cljs.core.next.call(null,seq28425__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28426,G__28427,G__28428,G__28429,seq28425__$4);
}));

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__5520__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__28543(s__28544){
return (new cljs.core.LazySeq(null,(function (){
var s__28544__$1 = s__28544;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__28544__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var lib = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__28544__$1,lib,xs__6360__auto__,temp__5804__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__28543_$_iter__28545(s__28546){
return (new cljs.core.LazySeq(null,((function (s__28544__$1,lib,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__28546__$1 = s__28546;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__28546__$1);
if(temp__5804__auto____$1){
var s__28546__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28546__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__28546__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__28548 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__28547 = (0);
while(true){
if((i__28547 < size__5519__auto__)){
var suffix = cljs.core._nth.call(null,c__5518__auto__,i__28547);
cljs.core.chunk_append.call(null,b__28548,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__28549 = (i__28547 + (1));
i__28547 = G__28549;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28548),klipse_clj$lang$clojure$io$external_libs_files_$_iter__28543_$_iter__28545.call(null,cljs.core.chunk_rest.call(null,s__28546__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28548),null);
}
} else {
var suffix = cljs.core.first.call(null,s__28546__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__28543_$_iter__28545.call(null,cljs.core.rest.call(null,s__28546__$2)));
}
} else {
return null;
}
break;
}
});})(s__28544__$1,lib,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__28544__$1,lib,xs__6360__auto__,temp__5804__auto__))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,suffixes));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__28543.call(null,cljs.core.rest.call(null,s__28544__$1)));
} else {
var G__28550 = cljs.core.rest.call(null,s__28544__$1);
s__28544__$1 = G__28550;
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

var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28595){
var state_val_28596 = (state_28595[(1)]);
if((state_val_28596 === (7))){
var inst_28574 = (state_28595[(7)]);
var inst_28567 = (state_28595[(8)]);
var inst_28583 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_28584 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28574);
var inst_28585 = klipse_clj.lang.clojure.io.edn.call(null,inst_28584);
var inst_28586 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28567);
var inst_28587 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_28585,inst_28586];
var inst_28588 = cljs.core.PersistentHashMap.fromArrays(inst_28583,inst_28587);
var inst_28589 = src_cb.call(null,inst_28588);
var state_28595__$1 = state_28595;
var statearr_28597_28613 = state_28595__$1;
(statearr_28597_28613[(2)] = inst_28589);

(statearr_28597_28613[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28596 === (1))){
var inst_28552 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_28595__$1 = (function (){var statearr_28598 = state_28595;
(statearr_28598[(9)] = inst_28552);

return statearr_28598;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_28599_28614 = state_28595__$1;
(statearr_28599_28614[(1)] = (2));

} else {
var statearr_28600_28615 = state_28595__$1;
(statearr_28600_28615[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28596 === (4))){
var inst_28552 = (state_28595[(9)]);
var inst_28559 = (state_28595[(10)]);
var inst_28556 = (state_28595[(11)]);
var inst_28558 = (state_28595[(12)]);
var inst_28556__$1 = (state_28595[(2)]);
var inst_28557 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_28558__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28557),"/"].join('');
var inst_28559__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28558__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28552),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28556__$1),".js"].join('');
var inst_28560 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28558__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28552),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28556__$1),".cache.json"].join('');
var inst_28561 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_28559__$1);
var inst_28562 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_28563 = [false];
var inst_28564 = cljs.core.PersistentHashMap.fromArrays(inst_28562,inst_28563);
var inst_28565 = cljs_http.client.get.call(null,inst_28561,inst_28564);
var state_28595__$1 = (function (){var statearr_28601 = state_28595;
(statearr_28601[(13)] = inst_28560);

(statearr_28601[(10)] = inst_28559__$1);

(statearr_28601[(11)] = inst_28556__$1);

(statearr_28601[(12)] = inst_28558__$1);

return statearr_28601;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28595__$1,(5),inst_28565);
} else {
if((state_val_28596 === (6))){
var inst_28552 = (state_28595[(9)]);
var inst_28574 = (state_28595[(7)]);
var inst_28560 = (state_28595[(13)]);
var inst_28559 = (state_28595[(10)]);
var inst_28567 = (state_28595[(8)]);
var inst_28556 = (state_28595[(11)]);
var inst_28558 = (state_28595[(12)]);
var inst_28574__$1 = (state_28595[(2)]);
var inst_28575 = (function (){var nn = inst_28552;
var suffix = inst_28556;
var root = inst_28558;
var src_filename = inst_28559;
var cache_filename = inst_28560;
var src = inst_28567;
var cache = inst_28574__$1;
return (function (p1__28551_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__28551_SHARP_);
});
})();
var inst_28576 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28577 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_28574__$1);
var inst_28578 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_28567);
var inst_28579 = [inst_28577,inst_28578];
var inst_28580 = (new cljs.core.PersistentVector(null,2,(5),inst_28576,inst_28579,null));
var inst_28581 = cljs.core.every_QMARK_.call(null,inst_28575,inst_28580);
var state_28595__$1 = (function (){var statearr_28602 = state_28595;
(statearr_28602[(7)] = inst_28574__$1);

return statearr_28602;
})();
if(inst_28581){
var statearr_28603_28616 = state_28595__$1;
(statearr_28603_28616[(1)] = (7));

} else {
var statearr_28604_28617 = state_28595__$1;
(statearr_28604_28617[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28596 === (3))){
var state_28595__$1 = state_28595;
var statearr_28605_28618 = state_28595__$1;
(statearr_28605_28618[(2)] = "");

(statearr_28605_28618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28596 === (2))){
var state_28595__$1 = state_28595;
var statearr_28606_28619 = state_28595__$1;
(statearr_28606_28619[(2)] = "$macros");

(statearr_28606_28619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28596 === (9))){
var inst_28593 = (state_28595[(2)]);
var state_28595__$1 = state_28595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28595__$1,inst_28593);
} else {
if((state_val_28596 === (5))){
var inst_28560 = (state_28595[(13)]);
var inst_28567 = (state_28595[(2)]);
var inst_28568 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_28560);
var inst_28569 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_28570 = [false];
var inst_28571 = cljs.core.PersistentHashMap.fromArrays(inst_28569,inst_28570);
var inst_28572 = cljs_http.client.get.call(null,inst_28568,inst_28571);
var state_28595__$1 = (function (){var statearr_28607 = state_28595;
(statearr_28607[(8)] = inst_28567);

return statearr_28607;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28595__$1,(6),inst_28572);
} else {
if((state_val_28596 === (8))){
var inst_28591 = on_failure_cb.call(null);
var state_28595__$1 = state_28595;
var statearr_28608_28620 = state_28595__$1;
(statearr_28608_28620[(2)] = inst_28591);

(statearr_28608_28620[(1)] = (9));


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
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto____0 = (function (){
var statearr_28609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28609[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto__);

(statearr_28609[(1)] = (1));

return statearr_28609;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto____1 = (function (state_28595){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28610){if((e28610 instanceof Object)){
var ex__13611__auto__ = e28610;
var statearr_28611_28621 = state_28595;
(statearr_28611_28621[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28622 = state_28595;
state_28595 = G__28622;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto__ = function(state_28595){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto____1.call(this,state_28595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28612 = f__13705__auto__.call(null);
(statearr_28612[(6)] = c__13704__auto__);

return statearr_28612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse_clj.lang.clojure.io.load_ns_from_file = (function klipse_clj$lang$clojure$io$load_ns_from_file(st,ns_sym,filename){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("load-ns-from-file",filename);
} else {
}

var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28642){
var state_val_28643 = (state_28642[(1)]);
if((state_val_28643 === (1))){
var inst_28624 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_28625 = [false];
var inst_28626 = cljs.core.PersistentHashMap.fromArrays(inst_28624,inst_28625);
var inst_28627 = cljs_http.client.get.call(null,filename,inst_28626);
var state_28642__$1 = state_28642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28642__$1,(2),inst_28627);
} else {
if((state_val_28643 === (2))){
var inst_28629 = (state_28642[(2)]);
var inst_28630 = cljs.core.__destructure_map.call(null,inst_28629);
var inst_28631 = cljs.core.get.call(null,inst_28630,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_28632 = cljs.core.get.call(null,inst_28630,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_28633 = cljs.core._EQ_.call(null,(200),inst_28632);
var state_28642__$1 = (function (){var statearr_28644 = state_28642;
(statearr_28644[(7)] = inst_28631);

return statearr_28644;
})();
if(inst_28633){
var statearr_28645_28653 = state_28642__$1;
(statearr_28645_28653[(1)] = (3));

} else {
var statearr_28646_28654 = state_28642__$1;
(statearr_28646_28654[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28643 === (3))){
var inst_28631 = (state_28642[(7)]);
var inst_28635 = klipse_clj.lang.clojure.io.edn.call(null,inst_28631);
var inst_28636 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_28635);
var state_28642__$1 = state_28642;
var statearr_28647_28655 = state_28642__$1;
(statearr_28647_28655[(2)] = inst_28636);

(statearr_28647_28655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28643 === (4))){
var inst_28638 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_28642__$1 = state_28642;
var statearr_28648_28656 = state_28642__$1;
(statearr_28648_28656[(2)] = inst_28638);

(statearr_28648_28656[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28643 === (5))){
var inst_28640 = (state_28642[(2)]);
var state_28642__$1 = state_28642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28642__$1,inst_28640);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto____0 = (function (){
var statearr_28649 = [null,null,null,null,null,null,null,null];
(statearr_28649[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto__);

(statearr_28649[(1)] = (1));

return statearr_28649;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto____1 = (function (state_28642){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28650){if((e28650 instanceof Object)){
var ex__13611__auto__ = e28650;
var statearr_28651_28657 = state_28642;
(statearr_28651_28657[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28658 = state_28642;
state_28642 = G__28658;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto__ = function(state_28642){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto____1.call(this,state_28642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28652 = f__13705__auto__.call(null);
(statearr_28652[(6)] = c__13704__auto__);

return statearr_28652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__28659,src_cb_original){
var map__28660 = p__28659;
var map__28660__$1 = cljs.core.__destructure_map.call(null,map__28660);
var args = map__28660__$1;
var name = cljs.core.get.call(null,map__28660__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__28660__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var try_cache_QMARK_ = cljs.core.get.call(null,map__28660__$1,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),true);
var load_ns_skip_cache = (function (){
return klipse_clj.lang.clojure.io.load_ns.call(null,external_libs,cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),false),src_cb_original);
});
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:(function() { 
var G__28661__delegate = function (args__$1){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args__$1);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__28661 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__28662__i = 0, G__28662__a = new Array(arguments.length -  0);
while (G__28662__i < G__28662__a.length) {G__28662__a[G__28662__i] = arguments[G__28662__i + 0]; ++G__28662__i;}
  args__$1 = new cljs.core.IndexedSeq(G__28662__a,0,null);
} 
return G__28661__delegate.call(this,args__$1);};
G__28661.cljs$lang$maxFixedArity = 0;
G__28661.cljs$lang$applyTo = (function (arglist__28663){
var args__$1 = cljs.core.seq(arglist__28663);
return G__28661__delegate(args__$1);
});
G__28661.cljs$core$IFn$_invoke$arity$variadic = G__28661__delegate;
return G__28661;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (_external_libs,p__28665,src_cb){
var map__28666 = p__28665;
var map__28666__$1 = cljs.core.__destructure_map.call(null,map__28666);
var path = cljs.core.get.call(null,map__28666__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,(function (p1__28664_SHARP_){
return ["https://gist.githubusercontent.com/",path__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28664_SHARP_)].join('');
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
return (!(((function (){var obj__17203__auto__ = goog;
var f__17204__auto__ = (function (){var obj28667 = obj__17203__auto__;
var k28668 = "getObjectByName";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28667,k28668)){
return (obj28667[k28668]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,name)));
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
var obj28669 = window;
var k28670 = "React";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28669,k28670)){
return (obj28669[k28670]);
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
var obj28671 = window;
var k28672 = "ReactDOMServer";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28671,k28672)){
return (obj28671[k28672]);
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
var obj28673 = window;
var k28674 = "ReactDOM";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28673,k28674)){
return (obj28673[k28674]);
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__28676,src_cb){
var map__28677 = p__28676;
var map__28677__$1 = cljs.core.__destructure_map.call(null,map__28677);
var args = map__28677__$1;
var name = cljs.core.get.call(null,map__28677__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__28677__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var try_cache_QMARK_ = cljs.core.get.call(null,map__28677__$1,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),true);
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
var filenames = cljs.core.map.call(null,(function (p1__28675_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28675_SHARP_),".cache.json"].join('');
}),klipse_clj.lang.clojure.io.cljs_suffixes);
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28690){
var state_val_28691 = (state_28690[(1)]);
if((state_val_28691 === (1))){
var inst_28678 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_28690__$1 = state_28690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28690__$1,(2),inst_28678);
} else {
if((state_val_28691 === (2))){
var inst_28680 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
if(cljs.core.truth_(inst_28680)){
var statearr_28692_28743 = state_28690__$1;
(statearr_28692_28743[(1)] = (3));

} else {
var statearr_28693_28744 = state_28690__$1;
(statearr_28693_28744[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (3))){
var state_28690__$1 = state_28690;
var statearr_28694_28745 = state_28690__$1;
(statearr_28694_28745[(2)] = null);

(statearr_28694_28745[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (4))){
var inst_28683 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_28684 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_28685 = cljs.core.PersistentHashMap.fromArrays(inst_28683,inst_28684);
var inst_28686 = src_cb.call(null,inst_28685);
var state_28690__$1 = state_28690;
var statearr_28695_28746 = state_28690__$1;
(statearr_28695_28746[(2)] = inst_28686);

(statearr_28695_28746[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (5))){
var inst_28688 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28690__$1,inst_28688);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$io$state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__13608__auto____0 = (function (){
var statearr_28696 = [null,null,null,null,null,null,null];
(statearr_28696[(0)] = klipse_clj$lang$clojure$io$state_machine__13608__auto__);

(statearr_28696[(1)] = (1));

return statearr_28696;
});
var klipse_clj$lang$clojure$io$state_machine__13608__auto____1 = (function (state_28690){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28697){if((e28697 instanceof Object)){
var ex__13611__auto__ = e28697;
var statearr_28698_28747 = state_28690;
(statearr_28698_28747[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28748 = state_28690;
state_28690 = G__28748;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__13608__auto__ = function(state_28690){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__13608__auto____1.call(this,state_28690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__13608__auto____0;
klipse_clj$lang$clojure$io$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__13608__auto____1;
return klipse_clj$lang$clojure$io$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28699 = f__13705__auto__.call(null);
(statearr_28699[(6)] = c__13704__auto__);

return statearr_28699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
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

var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28710){
var state_val_28711 = (state_28710[(1)]);
if((state_val_28711 === (1))){
var inst_28700 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_28710__$1 = state_28710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28710__$1,(2),inst_28700);
} else {
if((state_val_28711 === (2))){
var inst_28702 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
if(cljs.core.truth_(inst_28702)){
var statearr_28712_28749 = state_28710__$1;
(statearr_28712_28749[(1)] = (3));

} else {
var statearr_28713_28750 = state_28710__$1;
(statearr_28713_28750[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (3))){
var state_28710__$1 = state_28710;
var statearr_28714_28751 = state_28710__$1;
(statearr_28714_28751[(2)] = null);

(statearr_28714_28751[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (4))){
var inst_28705 = [prefix,".js"].join('');
var inst_28706 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_28705,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_28710__$1 = state_28710;
var statearr_28715_28752 = state_28710__$1;
(statearr_28715_28752[(2)] = inst_28706);

(statearr_28715_28752[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (5))){
var inst_28708 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28710__$1,inst_28708);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$io$state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__13608__auto____0 = (function (){
var statearr_28716 = [null,null,null,null,null,null,null];
(statearr_28716[(0)] = klipse_clj$lang$clojure$io$state_machine__13608__auto__);

(statearr_28716[(1)] = (1));

return statearr_28716;
});
var klipse_clj$lang$clojure$io$state_machine__13608__auto____1 = (function (state_28710){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28717){if((e28717 instanceof Object)){
var ex__13611__auto__ = e28717;
var statearr_28718_28753 = state_28710;
(statearr_28718_28753[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28754 = state_28710;
state_28710 = G__28754;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__13608__auto__ = function(state_28710){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__13608__auto____1.call(this,state_28710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__13608__auto____0;
klipse_clj$lang$clojure$io$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__13608__auto____1;
return klipse_clj$lang$clojure$io$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28719 = f__13705__auto__.call(null);
(statearr_28719[(6)] = c__13704__auto__);

return statearr_28719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28733){
var state_val_28734 = (state_28733[(1)]);
if((state_val_28734 === (1))){
var inst_28720 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_28733__$1 = state_28733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28733__$1,(2),inst_28720);
} else {
if((state_val_28734 === (2))){
var inst_28722 = (state_28733[(2)]);
var state_28733__$1 = state_28733;
if(cljs.core.truth_(inst_28722)){
var statearr_28735_28755 = state_28733__$1;
(statearr_28735_28755[(1)] = (3));

} else {
var statearr_28736_28756 = state_28733__$1;
(statearr_28736_28756[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28734 === (3))){
var state_28733__$1 = state_28733;
var statearr_28737_28757 = state_28733__$1;
(statearr_28737_28757[(2)] = null);

(statearr_28737_28757[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28734 === (4))){
var inst_28725 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28726 = [".js"];
var inst_28727 = (new cljs.core.PersistentVector(null,1,(5),inst_28725,inst_28726,null));
var inst_28728 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_28727,path);
var inst_28729 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_28728,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_28733__$1 = state_28733;
var statearr_28738_28758 = state_28733__$1;
(statearr_28738_28758[(2)] = inst_28729);

(statearr_28738_28758[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28734 === (5))){
var inst_28731 = (state_28733[(2)]);
var state_28733__$1 = state_28733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28733__$1,inst_28731);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse_clj$lang$clojure$io$state_machine__13608__auto__ = null;
var klipse_clj$lang$clojure$io$state_machine__13608__auto____0 = (function (){
var statearr_28739 = [null,null,null,null,null,null,null];
(statearr_28739[(0)] = klipse_clj$lang$clojure$io$state_machine__13608__auto__);

(statearr_28739[(1)] = (1));

return statearr_28739;
});
var klipse_clj$lang$clojure$io$state_machine__13608__auto____1 = (function (state_28733){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28740){if((e28740 instanceof Object)){
var ex__13611__auto__ = e28740;
var statearr_28741_28759 = state_28733;
(statearr_28741_28759[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28760 = state_28733;
state_28733 = G__28760;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__13608__auto__ = function(state_28733){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__13608__auto____1.call(this,state_28733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__13608__auto____0;
klipse_clj$lang$clojure$io$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__13608__auto____1;
return klipse_clj$lang$clojure$io$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28742 = f__13705__auto__.call(null);
(statearr_28742[(6)] = c__13704__auto__);

return statearr_28742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__28762,src_cb){
var map__28763 = p__28762;
var map__28763__$1 = cljs.core.__destructure_map.call(null,map__28763);
var name = cljs.core.get.call(null,map__28763__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__28763__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj__17203__auto__ = goog;
var f__17204__auto__ = (function (){var obj28764 = obj__17203__auto__;
var k28765 = "getObjectByName";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28764,k28765)){
return (obj28764[k28765]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,(function (p1__28761_SHARP_){
return [closure_github_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28761_SHARP_),".js"].join('');
}),cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map

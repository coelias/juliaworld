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
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse-clj.lang.clojure.io","load-ns"),(function (_,p__25737,_src_cb){
var map__25738 = p__25737;
var map__25738__$1 = cljs.core.__destructure_map.call(null,map__25738);
var name = cljs.core.get.call(null,map__25738__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var macros = cljs.core.get.call(null,map__25738__$1,new cljs.core.Keyword(null,"macros","macros",811339431));
var path = cljs.core.get.call(null,map__25738__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
var len__5766__auto___25830 = arguments.length;
var i__5767__auto___25831 = (0);
while(true){
if((i__5767__auto___25831 < len__5766__auto___25830)){
args__5772__auto__.push((arguments[i__5767__auto___25831]));

var G__25832 = (i__5767__auto___25831 + (1));
i__5767__auto___25831 = G__25832;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(klipse_clj.lang.clojure.io.try_to_load_ns.cljs$core$IFn$_invoke$arity$variadic = (function (filenames,lang,src_key,src_cb,p__25744){
var map__25745 = p__25744;
var map__25745__$1 = cljs.core.__destructure_map.call(null,map__25745);
var transform = cljs.core.get.call(null,map__25745__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.identity);
var can_recover_QMARK_ = cljs.core.get.call(null,map__25745__$1,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),false);
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("try-to-load-ns ",filenames,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_key));
} else {
}

var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_25796){
var state_val_25797 = (state_25796[(1)]);
if((state_val_25797 === (7))){
var inst_25758 = (state_25796[(2)]);
var inst_25759 = cljs.core.__destructure_map.call(null,inst_25758);
var inst_25760 = cljs.core.get.call(null,inst_25759,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_25761 = cljs.core.get.call(null,inst_25759,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_25762 = cljs.core._EQ_.call(null,(200),inst_25760);
var state_25796__$1 = (function (){var statearr_25798 = state_25796;
(statearr_25798[(7)] = inst_25761);

return statearr_25798;
})();
if(inst_25762){
var statearr_25799_25833 = state_25796__$1;
(statearr_25799_25833[(1)] = (8));

} else {
var statearr_25800_25834 = state_25796__$1;
(statearr_25800_25834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (1))){
var inst_25746 = filenames;
var state_25796__$1 = (function (){var statearr_25801 = state_25796;
(statearr_25801[(8)] = inst_25746);

return statearr_25801;
})();
var statearr_25802_25835 = state_25796__$1;
(statearr_25802_25835[(2)] = null);

(statearr_25802_25835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (4))){
var inst_25751 = (state_25796[(9)]);
var inst_25746 = (state_25796[(8)]);
var inst_25751__$1 = cljs.core.first.call(null,inst_25746);
var inst_25752 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_25751__$1);
var inst_25753 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_25754 = [false];
var inst_25755 = cljs.core.PersistentHashMap.fromArrays(inst_25753,inst_25754);
var inst_25756 = cljs_http.client.get.call(null,inst_25752,inst_25755);
var state_25796__$1 = (function (){var statearr_25803 = state_25796;
(statearr_25803[(9)] = inst_25751__$1);

return statearr_25803;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25796__$1,(7),inst_25756);
} else {
if((state_val_25797 === (15))){
var state_25796__$1 = state_25796;
if(cljs.core.truth_(can_recover_QMARK_)){
var statearr_25804_25836 = state_25796__$1;
(statearr_25804_25836[(1)] = (17));

} else {
var statearr_25805_25837 = state_25796__$1;
(statearr_25805_25837[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (13))){
var inst_25761 = (state_25796[(7)]);
var inst_25751 = (state_25796[(9)]);
var inst_25770 = (state_25796[(2)]);
var inst_25771 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),src_key,new cljs.core.Keyword(null,"file","file",-1269645878)];
var inst_25772 = transform.call(null,inst_25761);
var inst_25773 = [lang,inst_25772,inst_25751];
var inst_25774 = cljs.core.PersistentHashMap.fromArrays(inst_25771,inst_25773);
var inst_25775 = src_cb.call(null,inst_25774);
var state_25796__$1 = (function (){var statearr_25806 = state_25796;
(statearr_25806[(10)] = inst_25770);

(statearr_25806[(11)] = inst_25775);

return statearr_25806;
})();
var statearr_25807_25838 = state_25796__$1;
(statearr_25807_25838[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_25807_25838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (6))){
var inst_25783 = (state_25796[(2)]);
var state_25796__$1 = state_25796;
var statearr_25808_25839 = state_25796__$1;
(statearr_25808_25839[(2)] = inst_25783);

(statearr_25808_25839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (17))){
var state_25796__$1 = state_25796;
var statearr_25809_25840 = state_25796__$1;
(statearr_25809_25840[(2)] = null);

(statearr_25809_25840[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (3))){
var inst_25785 = (state_25796[(2)]);
var state_25796__$1 = state_25796;
if(cljs.core.truth_(inst_25785)){
var statearr_25810_25841 = state_25796__$1;
(statearr_25810_25841[(1)] = (14));

} else {
var statearr_25811_25842 = state_25796__$1;
(statearr_25811_25842[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (12))){
var state_25796__$1 = state_25796;
var statearr_25812_25843 = state_25796__$1;
(statearr_25812_25843[(2)] = null);

(statearr_25812_25843[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (2))){
var inst_25746 = (state_25796[(8)]);
var inst_25748 = cljs.core.seq.call(null,inst_25746);
var state_25796__$1 = state_25796;
if(inst_25748){
var statearr_25813_25844 = state_25796__$1;
(statearr_25813_25844[(1)] = (4));

} else {
var statearr_25814_25845 = state_25796__$1;
(statearr_25814_25845[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (19))){
var inst_25792 = (state_25796[(2)]);
var state_25796__$1 = (function (){var statearr_25815 = state_25796;
(statearr_25815[(12)] = inst_25792);

return statearr_25815;
})();
var statearr_25816_25846 = state_25796__$1;
(statearr_25816_25846[(2)] = false);

(statearr_25816_25846[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (11))){
var inst_25751 = (state_25796[(9)]);
var inst_25765 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang);
var inst_25766 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(src_key);
var inst_25767 = console.info("file loaded successfully",inst_25765,inst_25766,inst_25751);
var state_25796__$1 = state_25796;
var statearr_25817_25847 = state_25796__$1;
(statearr_25817_25847[(2)] = inst_25767);

(statearr_25817_25847[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (9))){
var inst_25746 = (state_25796[(8)]);
var inst_25777 = cljs.core.rest.call(null,inst_25746);
var inst_25746__$1 = inst_25777;
var state_25796__$1 = (function (){var statearr_25818 = state_25796;
(statearr_25818[(8)] = inst_25746__$1);

return statearr_25818;
})();
var statearr_25819_25848 = state_25796__$1;
(statearr_25819_25848[(2)] = null);

(statearr_25819_25848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (5))){
var state_25796__$1 = state_25796;
var statearr_25820_25849 = state_25796__$1;
(statearr_25820_25849[(2)] = null);

(statearr_25820_25849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (14))){
var state_25796__$1 = state_25796;
var statearr_25821_25850 = state_25796__$1;
(statearr_25821_25850[(2)] = new cljs.core.Keyword(null,"success","success",1890645906));

(statearr_25821_25850[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (16))){
var inst_25794 = (state_25796[(2)]);
var state_25796__$1 = state_25796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25796__$1,inst_25794);
} else {
if((state_val_25797 === (10))){
var inst_25780 = (state_25796[(2)]);
var state_25796__$1 = state_25796;
var statearr_25822_25851 = state_25796__$1;
(statearr_25822_25851[(2)] = inst_25780);

(statearr_25822_25851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (18))){
var inst_25790 = src_cb.call(null,null);
var state_25796__$1 = state_25796;
var statearr_25823_25852 = state_25796__$1;
(statearr_25823_25852[(2)] = inst_25790);

(statearr_25823_25852[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25797 === (8))){
var state_25796__$1 = state_25796;
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
var statearr_25824_25853 = state_25796__$1;
(statearr_25824_25853[(1)] = (11));

} else {
var statearr_25825_25854 = state_25796__$1;
(statearr_25825_25854[(1)] = (12));

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
var statearr_25826 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25826[(0)] = klipse_clj$lang$clojure$io$state_machine__13608__auto__);

(statearr_25826[(1)] = (1));

return statearr_25826;
});
var klipse_clj$lang$clojure$io$state_machine__13608__auto____1 = (function (state_25796){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_25796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e25827){if((e25827 instanceof Object)){
var ex__13611__auto__ = e25827;
var statearr_25828_25855 = state_25796;
(statearr_25828_25855[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25856 = state_25796;
state_25796 = G__25856;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__13608__auto__ = function(state_25796){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__13608__auto____1.call(this,state_25796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__13608__auto____0;
klipse_clj$lang$clojure$io$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__13608__auto____1;
return klipse_clj$lang$clojure$io$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_25829 = f__13705__auto__.call(null);
(statearr_25829[(6)] = c__13704__auto__);

return statearr_25829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
}));

(klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(klipse_clj.lang.clojure.io.try_to_load_ns.cljs$lang$applyTo = (function (seq25739){
var G__25740 = cljs.core.first.call(null,seq25739);
var seq25739__$1 = cljs.core.next.call(null,seq25739);
var G__25741 = cljs.core.first.call(null,seq25739__$1);
var seq25739__$2 = cljs.core.next.call(null,seq25739__$1);
var G__25742 = cljs.core.first.call(null,seq25739__$2);
var seq25739__$3 = cljs.core.next.call(null,seq25739__$2);
var G__25743 = cljs.core.first.call(null,seq25739__$3);
var seq25739__$4 = cljs.core.next.call(null,seq25739__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25740,G__25741,G__25742,G__25743,seq25739__$4);
}));

/**
 * returns a list of files provided list of external-libs and suffixes
 */
klipse_clj.lang.clojure.io.external_libs_files = (function klipse_clj$lang$clojure$io$external_libs_files(external_libs,suffixes,path){
var iter__5520__auto__ = (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__25857(s__25858){
return (new cljs.core.LazySeq(null,(function (){
var s__25858__$1 = s__25858;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__25858__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var lib = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__25858__$1,lib,xs__6360__auto__,temp__5804__auto__){
return (function klipse_clj$lang$clojure$io$external_libs_files_$_iter__25857_$_iter__25859(s__25860){
return (new cljs.core.LazySeq(null,((function (s__25858__$1,lib,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__25860__$1 = s__25860;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__25860__$1);
if(temp__5804__auto____$1){
var s__25860__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25860__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__25860__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__25862 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__25861 = (0);
while(true){
if((i__25861 < size__5519__auto__)){
var suffix = cljs.core._nth.call(null,c__5518__auto__,i__25861);
cljs.core.chunk_append.call(null,b__25862,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));

var G__25863 = (i__25861 + (1));
i__25861 = G__25863;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25862),klipse_clj$lang$clojure$io$external_libs_files_$_iter__25857_$_iter__25859.call(null,cljs.core.chunk_rest.call(null,s__25860__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25862),null);
}
} else {
var suffix = cljs.core.first.call(null,s__25860__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''),klipse_clj$lang$clojure$io$external_libs_files_$_iter__25857_$_iter__25859.call(null,cljs.core.rest.call(null,s__25860__$2)));
}
} else {
return null;
}
break;
}
});})(s__25858__$1,lib,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__25858__$1,lib,xs__6360__auto__,temp__5804__auto__))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,suffixes));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,klipse_clj$lang$clojure$io$external_libs_files_$_iter__25857.call(null,cljs.core.rest.call(null,s__25858__$1)));
} else {
var G__25864 = cljs.core.rest.call(null,s__25858__$1);
s__25858__$1 = G__25864;
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
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_25909){
var state_val_25910 = (state_25909[(1)]);
if((state_val_25910 === (7))){
var inst_25881 = (state_25909[(7)]);
var inst_25888 = (state_25909[(8)]);
var inst_25897 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_25898 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_25888);
var inst_25899 = klipse_clj.lang.clojure.io.edn.call(null,inst_25898);
var inst_25900 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_25881);
var inst_25901 = [new cljs.core.Keyword(null,"js","js",1768080579),inst_25899,inst_25900];
var inst_25902 = cljs.core.PersistentHashMap.fromArrays(inst_25897,inst_25901);
var inst_25903 = src_cb.call(null,inst_25902);
var state_25909__$1 = state_25909;
var statearr_25911_25927 = state_25909__$1;
(statearr_25911_25927[(2)] = inst_25903);

(statearr_25911_25927[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (1))){
var inst_25866 = klipse_clj.lang.clojure.io.name__GT_cached_resource.call(null,name);
var state_25909__$1 = (function (){var statearr_25912 = state_25909;
(statearr_25912[(9)] = inst_25866);

return statearr_25912;
})();
if(cljs.core.truth_(macro_QMARK_)){
var statearr_25913_25928 = state_25909__$1;
(statearr_25913_25928[(1)] = (2));

} else {
var statearr_25914_25929 = state_25909__$1;
(statearr_25914_25929[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (4))){
var inst_25872 = (state_25909[(10)]);
var inst_25866 = (state_25909[(9)]);
var inst_25873 = (state_25909[(11)]);
var inst_25870 = (state_25909[(12)]);
var inst_25870__$1 = (state_25909[(2)]);
var inst_25871 = klipse_clj.lang.clojure.io.cached_ns_root.call(null);
var inst_25872__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25871),"/"].join('');
var inst_25873__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25872__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25866),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25870__$1),".js"].join('');
var inst_25874 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25872__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25866),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25870__$1),".cache.json"].join('');
var inst_25875 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_25873__$1);
var inst_25876 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_25877 = [false];
var inst_25878 = cljs.core.PersistentHashMap.fromArrays(inst_25876,inst_25877);
var inst_25879 = cljs_http.client.get.call(null,inst_25875,inst_25878);
var state_25909__$1 = (function (){var statearr_25915 = state_25909;
(statearr_25915[(13)] = inst_25874);

(statearr_25915[(10)] = inst_25872__$1);

(statearr_25915[(11)] = inst_25873__$1);

(statearr_25915[(12)] = inst_25870__$1);

return statearr_25915;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25909__$1,(5),inst_25879);
} else {
if((state_val_25910 === (6))){
var inst_25874 = (state_25909[(13)]);
var inst_25872 = (state_25909[(10)]);
var inst_25866 = (state_25909[(9)]);
var inst_25881 = (state_25909[(7)]);
var inst_25873 = (state_25909[(11)]);
var inst_25870 = (state_25909[(12)]);
var inst_25888 = (state_25909[(8)]);
var inst_25888__$1 = (state_25909[(2)]);
var inst_25889 = (function (){var nn = inst_25866;
var suffix = inst_25870;
var root = inst_25872;
var src_filename = inst_25873;
var cache_filename = inst_25874;
var src = inst_25881;
var cache = inst_25888__$1;
return (function (p1__25865_SHARP_){
return cljs.core._EQ_.call(null,(200),p1__25865_SHARP_);
});
})();
var inst_25890 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25891 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_25888__$1);
var inst_25892 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_25881);
var inst_25893 = [inst_25891,inst_25892];
var inst_25894 = (new cljs.core.PersistentVector(null,2,(5),inst_25890,inst_25893,null));
var inst_25895 = cljs.core.every_QMARK_.call(null,inst_25889,inst_25894);
var state_25909__$1 = (function (){var statearr_25916 = state_25909;
(statearr_25916[(8)] = inst_25888__$1);

return statearr_25916;
})();
if(inst_25895){
var statearr_25917_25930 = state_25909__$1;
(statearr_25917_25930[(1)] = (7));

} else {
var statearr_25918_25931 = state_25909__$1;
(statearr_25918_25931[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (3))){
var state_25909__$1 = state_25909;
var statearr_25919_25932 = state_25909__$1;
(statearr_25919_25932[(2)] = "");

(statearr_25919_25932[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (2))){
var state_25909__$1 = state_25909;
var statearr_25920_25933 = state_25909__$1;
(statearr_25920_25933[(2)] = "$macros");

(statearr_25920_25933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25910 === (9))){
var inst_25907 = (state_25909[(2)]);
var state_25909__$1 = state_25909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25909__$1,inst_25907);
} else {
if((state_val_25910 === (5))){
var inst_25874 = (state_25909[(13)]);
var inst_25881 = (state_25909[(2)]);
var inst_25882 = klipse_clj.lang.clojure.io.filename_of.call(null,inst_25874);
var inst_25883 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_25884 = [false];
var inst_25885 = cljs.core.PersistentHashMap.fromArrays(inst_25883,inst_25884);
var inst_25886 = cljs_http.client.get.call(null,inst_25882,inst_25885);
var state_25909__$1 = (function (){var statearr_25921 = state_25909;
(statearr_25921[(7)] = inst_25881);

return statearr_25921;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25909__$1,(6),inst_25886);
} else {
if((state_val_25910 === (8))){
var inst_25905 = on_failure_cb.call(null);
var state_25909__$1 = state_25909;
var statearr_25922_25934 = state_25909__$1;
(statearr_25922_25934[(2)] = inst_25905);

(statearr_25922_25934[(1)] = (9));


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
var statearr_25923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25923[(0)] = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto__);

(statearr_25923[(1)] = (1));

return statearr_25923;
});
var klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto____1 = (function (state_25909){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_25909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e25924){if((e25924 instanceof Object)){
var ex__13611__auto__ = e25924;
var statearr_25925_25935 = state_25909;
(statearr_25925_25935[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25936 = state_25909;
state_25909 = G__25936;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto__ = function(state_25909){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto____1.call(this,state_25909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_cache_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_25926 = f__13705__auto__.call(null);
(statearr_25926[(6)] = c__13704__auto__);

return statearr_25926;
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
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_25956){
var state_val_25957 = (state_25956[(1)]);
if((state_val_25957 === (1))){
var inst_25938 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_25939 = [false];
var inst_25940 = cljs.core.PersistentHashMap.fromArrays(inst_25938,inst_25939);
var inst_25941 = cljs_http.client.get.call(null,filename,inst_25940);
var state_25956__$1 = state_25956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25956__$1,(2),inst_25941);
} else {
if((state_val_25957 === (2))){
var inst_25943 = (state_25956[(2)]);
var inst_25944 = cljs.core.__destructure_map.call(null,inst_25943);
var inst_25945 = cljs.core.get.call(null,inst_25944,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_25946 = cljs.core.get.call(null,inst_25944,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_25947 = cljs.core._EQ_.call(null,(200),inst_25946);
var state_25956__$1 = (function (){var statearr_25958 = state_25956;
(statearr_25958[(7)] = inst_25945);

return statearr_25958;
})();
if(inst_25947){
var statearr_25959_25967 = state_25956__$1;
(statearr_25959_25967[(1)] = (3));

} else {
var statearr_25960_25968 = state_25956__$1;
(statearr_25960_25968[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25957 === (3))){
var inst_25945 = (state_25956[(7)]);
var inst_25949 = klipse_clj.lang.clojure.io.edn.call(null,inst_25945);
var inst_25950 = cljs.js.load_analysis_cache_BANG_.call(null,st,ns_sym,inst_25949);
var state_25956__$1 = state_25956;
var statearr_25961_25969 = state_25956__$1;
(statearr_25961_25969[(2)] = inst_25950);

(statearr_25961_25969[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25957 === (4))){
var inst_25952 = cljs.core.println.call(null,"load-ns-from-file: cannot fetch",filename);
var state_25956__$1 = state_25956;
var statearr_25962_25970 = state_25956__$1;
(statearr_25962_25970[(2)] = inst_25952);

(statearr_25962_25970[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25957 === (5))){
var inst_25954 = (state_25956[(2)]);
var state_25956__$1 = state_25956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25956__$1,inst_25954);
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
var statearr_25963 = [null,null,null,null,null,null,null,null];
(statearr_25963[(0)] = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto__);

(statearr_25963[(1)] = (1));

return statearr_25963;
});
var klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto____1 = (function (state_25956){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_25956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e25964){if((e25964 instanceof Object)){
var ex__13611__auto__ = e25964;
var statearr_25965_25971 = state_25956;
(statearr_25965_25971[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25972 = state_25956;
state_25956 = G__25972;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto__ = function(state_25956){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto____1.call(this,state_25956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto____0;
klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto____1;
return klipse_clj$lang$clojure$io$load_ns_from_file_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_25966 = f__13705__auto__.call(null);
(statearr_25966[(6)] = c__13704__auto__);

return statearr_25966;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"macro","macro",-867863404),(function (external_libs,p__25973,src_cb_original){
var map__25974 = p__25973;
var map__25974__$1 = cljs.core.__destructure_map.call(null,map__25974);
var args = map__25974__$1;
var name = cljs.core.get.call(null,map__25974__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__25974__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var try_cache_QMARK_ = cljs.core.get.call(null,map__25974__$1,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),true);
var load_ns_skip_cache = (function (){
return klipse_clj.lang.clojure.io.load_ns.call(null,external_libs,cljs.core.assoc.call(null,args,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),false),src_cb_original);
});
var src_cb = ((cljs.core.not_EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null)))?src_cb_original:(function() { 
var G__25975__delegate = function (args__$1){
if(cljs.core.truth_(klipse_clj.lang.clojure.io._STAR_verbose_QMARK__STAR_)){
console.info("src-cb: patch cljs.spec.test.alpha/eval");
} else {
}

cljs.core.apply.call(null,src_cb_original,args__$1);

return klipse_clj.repl.def_a_var.call(null,new cljs.core.Symbol(null,"cljs.spec.test.alpha$macros","cljs.spec.test.alpha$macros",-1739784120,null),new cljs.core.Symbol(null,"eval","eval",536963622,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
};
var G__25975 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__25976__i = 0, G__25976__a = new Array(arguments.length -  0);
while (G__25976__i < G__25976__a.length) {G__25976__a[G__25976__i] = arguments[G__25976__i + 0]; ++G__25976__i;}
  args__$1 = new cljs.core.IndexedSeq(G__25976__a,0,null);
} 
return G__25975__delegate.call(this,args__$1);};
G__25975.cljs$lang$maxFixedArity = 0;
G__25975.cljs$lang$applyTo = (function (arglist__25977){
var args__$1 = cljs.core.seq(arglist__25977);
return G__25975__delegate(args__$1);
});
G__25975.cljs$core$IFn$_invoke$arity$variadic = G__25975__delegate;
return G__25975;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"gist","gist",96143031),(function (_external_libs,p__25979,src_cb){
var map__25980 = p__25979;
var map__25980__$1 = cljs.core.__destructure_map.call(null,map__25980);
var path = cljs.core.get.call(null,map__25980__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = clojure.string.replace.call(null,path,/gist_/,"");
var filenames = cljs.core.map.call(null,(function (p1__25978_SHARP_){
return ["https://gist.githubusercontent.com/",path__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25978_SHARP_)].join('');
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
var f__17204__auto__ = (function (){var obj25981 = obj__17203__auto__;
var k25982 = "getObjectByName";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj25981,k25982)){
return (obj25981[k25982]);
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
var obj25983 = window;
var k25984 = "React";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj25983,k25984)){
return (obj25983[k25984]);
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
var obj25985 = window;
var k25986 = "ReactDOMServer";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj25985,k25986)){
return (obj25985[k25986]);
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
var obj25987 = window;
var k25988 = "ReactDOM";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj25987,k25988)){
return (obj25987[k25988]);
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629),(function (external_libs,p__25990,src_cb){
var map__25991 = p__25990;
var map__25991__$1 = cljs.core.__destructure_map.call(null,map__25991);
var args = map__25991__$1;
var name = cljs.core.get.call(null,map__25991__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__25991__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var try_cache_QMARK_ = cljs.core.get.call(null,map__25991__$1,new cljs.core.Keyword(null,"try-cache?","try-cache?",1046880810),true);
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
var filenames = cljs.core.map.call(null,(function (p1__25989_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.lang.clojure.io.bundled_ns_root.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25989_SHARP_),".cache.json"].join('');
}),klipse_clj.lang.clojure.io.cljs_suffixes);
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_26004){
var state_val_26005 = (state_26004[(1)]);
if((state_val_26005 === (1))){
var inst_25992 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"cache","cache",-1237023054),src_cb,new cljs.core.Keyword(null,"transform","transform",1381301764),klipse_clj.lang.clojure.io.edn,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_26004__$1 = state_26004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26004__$1,(2),inst_25992);
} else {
if((state_val_26005 === (2))){
var inst_25994 = (state_26004[(2)]);
var state_26004__$1 = state_26004;
if(cljs.core.truth_(inst_25994)){
var statearr_26006_26057 = state_26004__$1;
(statearr_26006_26057[(1)] = (3));

} else {
var statearr_26007_26058 = state_26004__$1;
(statearr_26007_26058[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (3))){
var state_26004__$1 = state_26004;
var statearr_26008_26059 = state_26004__$1;
(statearr_26008_26059[(2)] = null);

(statearr_26008_26059[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (4))){
var inst_25997 = [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"source","source",-433931539)];
var inst_25998 = [new cljs.core.Keyword(null,"js","js",1768080579),""];
var inst_25999 = cljs.core.PersistentHashMap.fromArrays(inst_25997,inst_25998);
var inst_26000 = src_cb.call(null,inst_25999);
var state_26004__$1 = state_26004;
var statearr_26009_26060 = state_26004__$1;
(statearr_26009_26060[(2)] = inst_26000);

(statearr_26009_26060[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26005 === (5))){
var inst_26002 = (state_26004[(2)]);
var state_26004__$1 = state_26004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26004__$1,inst_26002);
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
var statearr_26010 = [null,null,null,null,null,null,null];
(statearr_26010[(0)] = klipse_clj$lang$clojure$io$state_machine__13608__auto__);

(statearr_26010[(1)] = (1));

return statearr_26010;
});
var klipse_clj$lang$clojure$io$state_machine__13608__auto____1 = (function (state_26004){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_26004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e26011){if((e26011 instanceof Object)){
var ex__13611__auto__ = e26011;
var statearr_26012_26061 = state_26004;
(statearr_26012_26061[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26062 = state_26004;
state_26004 = G__26062;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__13608__auto__ = function(state_26004){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__13608__auto____1.call(this,state_26004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__13608__auto____0;
klipse_clj$lang$clojure$io$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__13608__auto____1;
return klipse_clj$lang$clojure$io$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_26013 = f__13705__auto__.call(null);
(statearr_26013[(6)] = c__13704__auto__);

return statearr_26013;
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
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_26024){
var state_val_26025 = (state_26024[(1)]);
if((state_val_26025 === (1))){
var inst_26014 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_26024__$1 = state_26024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26024__$1,(2),inst_26014);
} else {
if((state_val_26025 === (2))){
var inst_26016 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
if(cljs.core.truth_(inst_26016)){
var statearr_26026_26063 = state_26024__$1;
(statearr_26026_26063[(1)] = (3));

} else {
var statearr_26027_26064 = state_26024__$1;
(statearr_26027_26064[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (3))){
var state_26024__$1 = state_26024;
var statearr_26028_26065 = state_26024__$1;
(statearr_26028_26065[(2)] = null);

(statearr_26028_26065[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (4))){
var inst_26019 = [prefix,".js"].join('');
var inst_26020 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_26019,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_26024__$1 = state_26024;
var statearr_26029_26066 = state_26024__$1;
(statearr_26029_26066[(2)] = inst_26020);

(statearr_26029_26066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (5))){
var inst_26022 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26024__$1,inst_26022);
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
var statearr_26030 = [null,null,null,null,null,null,null];
(statearr_26030[(0)] = klipse_clj$lang$clojure$io$state_machine__13608__auto__);

(statearr_26030[(1)] = (1));

return statearr_26030;
});
var klipse_clj$lang$clojure$io$state_machine__13608__auto____1 = (function (state_26024){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_26024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e26031){if((e26031 instanceof Object)){
var ex__13611__auto__ = e26031;
var statearr_26032_26067 = state_26024;
(statearr_26032_26067[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26068 = state_26024;
state_26024 = G__26068;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__13608__auto__ = function(state_26024){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__13608__auto____1.call(this,state_26024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__13608__auto____0;
klipse_clj$lang$clojure$io$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__13608__auto____1;
return klipse_clj$lang$clojure$io$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_26033 = f__13705__auto__.call(null);
(statearr_26033[(6)] = c__13704__auto__);

return statearr_26033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
} else {
if(cljs.core.seq.call(null,external_libs)){
var filenames = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,klipse_clj.lang.clojure.io.cljs_suffixes,path);
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_26047){
var state_val_26048 = (state_26047[(1)]);
if((state_val_26048 === (1))){
var inst_26034 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),src_cb,new cljs.core.Keyword(null,"can-recover?","can-recover?",855047956),true);
var state_26047__$1 = state_26047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26047__$1,(2),inst_26034);
} else {
if((state_val_26048 === (2))){
var inst_26036 = (state_26047[(2)]);
var state_26047__$1 = state_26047;
if(cljs.core.truth_(inst_26036)){
var statearr_26049_26069 = state_26047__$1;
(statearr_26049_26069[(1)] = (3));

} else {
var statearr_26050_26070 = state_26047__$1;
(statearr_26050_26070[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (3))){
var state_26047__$1 = state_26047;
var statearr_26051_26071 = state_26047__$1;
(statearr_26051_26071[(2)] = null);

(statearr_26051_26071[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (4))){
var inst_26039 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26040 = [".js"];
var inst_26041 = (new cljs.core.PersistentVector(null,1,(5),inst_26039,inst_26040,null));
var inst_26042 = klipse_clj.lang.clojure.io.external_libs_files.call(null,external_libs,inst_26041,path);
var inst_26043 = klipse_clj.lang.clojure.io.try_to_load_ns.call(null,inst_26042,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);
var state_26047__$1 = state_26047;
var statearr_26052_26072 = state_26047__$1;
(statearr_26052_26072[(2)] = inst_26043);

(statearr_26052_26072[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (5))){
var inst_26045 = (state_26047[(2)]);
var state_26047__$1 = state_26047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26047__$1,inst_26045);
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
var statearr_26053 = [null,null,null,null,null,null,null];
(statearr_26053[(0)] = klipse_clj$lang$clojure$io$state_machine__13608__auto__);

(statearr_26053[(1)] = (1));

return statearr_26053;
});
var klipse_clj$lang$clojure$io$state_machine__13608__auto____1 = (function (state_26047){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_26047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e26054){if((e26054 instanceof Object)){
var ex__13611__auto__ = e26054;
var statearr_26055_26073 = state_26047;
(statearr_26055_26073[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26074 = state_26047;
state_26047 = G__26074;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse_clj$lang$clojure$io$state_machine__13608__auto__ = function(state_26047){
switch(arguments.length){
case 0:
return klipse_clj$lang$clojure$io$state_machine__13608__auto____0.call(this);
case 1:
return klipse_clj$lang$clojure$io$state_machine__13608__auto____1.call(this,state_26047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse_clj$lang$clojure$io$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse_clj$lang$clojure$io$state_machine__13608__auto____0;
klipse_clj$lang$clojure$io$state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse_clj$lang$clojure$io$state_machine__13608__auto____1;
return klipse_clj$lang$clojure$io$state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_26056 = f__13705__auto__.call(null);
(statearr_26056[(6)] = c__13704__auto__);

return statearr_26056;
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
cljs.core._add_method.call(null,klipse_clj.lang.clojure.io.load_ns,new cljs.core.Keyword(null,"goog","goog",-1711135452),(function (_,p__26076,src_cb){
var map__26077 = p__26076;
var map__26077__$1 = cljs.core.__destructure_map.call(null,map__26077);
var name = cljs.core.get.call(null,map__26077__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__26077__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_((function (){var obj__17203__auto__ = goog;
var f__17204__auto__ = (function (){var obj26078 = obj__17203__auto__;
var k26079 = "getObjectByName";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj26078,k26079)){
return (obj26078[k26079]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
})())){
return src_cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
} else {
var closure_github_path = "https://raw.githubusercontent.com/google/closure-library/v20160713/closure/";
var filenames = cljs.core.map.call(null,(function (p1__26075_SHARP_){
return [closure_github_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26075_SHARP_),".js"].join('');
}),cljs.core.juxt.call(null,klipse_clj.lang.clojure.io.fix_goog_path,cljs.core.identity,klipse_clj.lang.clojure.io.another_goog_path,klipse_clj.lang.clojure.io.simple_goog_path).call(null,path));
return klipse_clj.lang.clojure.io.try_to_load_ns.call(null,filenames,new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),src_cb);

}
}));

//# sourceMappingURL=io.js.map

// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('juliaworld.validation');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('schema.core');
juliaworld.validation.validate = (function juliaworld$validation$validate(definition,input){
try{return schema.core.validate.call(null,definition,input);
}catch (e30709){if((e30709 instanceof Error)){
var e = e30709;
return console.log("VALIDATION ERROR","\n",(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30710_30714 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30711_30715 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30712_30716 = true;
var _STAR_print_fn_STAR__temp_val__30713_30717 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30712_30716);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30713_30717);

try{cljs.pprint.pprint(e.data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30711_30715);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30710_30714);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})(),"\n",(function (){var $ = e.stack;
var $__$1 = clojure.string.split.call(null,$,/\n/);
var $__$2 = cljs.core.filter.call(null,(function (p1__30708_SHARP_){
return clojure.string.includes_QMARK_.call(null,p1__30708_SHARP_,"juliaworld");
}),$__$1);
return clojure.string.join.call(null,"\n",$__$2);
})());
} else {
throw e30709;

}
}});
juliaworld.validation.jsType = (function juliaworld$validation$jsType(t){
return schema.core.pred.call(null,(function (p1__30718_SHARP_){
return (p1__30718_SHARP_ instanceof t);
}),cljs.core.symbol.call(null,t.name));
});

//# sourceMappingURL=validation.js.map

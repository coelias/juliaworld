// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('promesa.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
promesa.protocols.IPromise = function(){};

var promesa$protocols$IPromise$_fmap$dyn_24759 = (function() {
var G__24760 = null;
var G__24760__2 = (function (it,f){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._fmap[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,f);
} else {
var m__5389__auto__ = (promesa.protocols._fmap["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,f);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-fmap",it);
}
}
});
var G__24760__3 = (function (it,f,executor){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._fmap[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,f,executor);
} else {
var m__5389__auto__ = (promesa.protocols._fmap["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,f,executor);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-fmap",it);
}
}
});
G__24760 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__24760__2.call(this,it,f);
case 3:
return G__24760__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24760.cljs$core$IFn$_invoke$arity$2 = G__24760__2;
G__24760.cljs$core$IFn$_invoke$arity$3 = G__24760__3;
return G__24760;
})()
;
/**
 * Apply function to a computation
 */
promesa.protocols._fmap = (function promesa$protocols$_fmap(var_args){
var G__24748 = arguments.length;
switch (G__24748) {
case 2:
return promesa.protocols._fmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._fmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._fmap.cljs$core$IFn$_invoke$arity$2 = (function (it,f){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_fmap$arity$2 == null)))))){
return it.promesa$protocols$IPromise$_fmap$arity$2(it,f);
} else {
return promesa$protocols$IPromise$_fmap$dyn_24759.call(null,it,f);
}
}));

(promesa.protocols._fmap.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_fmap$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_fmap$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_fmap$dyn_24759.call(null,it,f,executor);
}
}));

(promesa.protocols._fmap.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_merr$dyn_24762 = (function() {
var G__24763 = null;
var G__24763__2 = (function (it,f){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._merr[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,f);
} else {
var m__5389__auto__ = (promesa.protocols._merr["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,f);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-merr",it);
}
}
});
var G__24763__3 = (function (it,f,executor){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._merr[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,f,executor);
} else {
var m__5389__auto__ = (promesa.protocols._merr["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,f,executor);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-merr",it);
}
}
});
G__24763 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__24763__2.call(this,it,f);
case 3:
return G__24763__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24763.cljs$core$IFn$_invoke$arity$2 = G__24763__2;
G__24763.cljs$core$IFn$_invoke$arity$3 = G__24763__3;
return G__24763;
})()
;
/**
 * Apply function to a failed computation and flatten 1 level
 */
promesa.protocols._merr = (function promesa$protocols$_merr(var_args){
var G__24750 = arguments.length;
switch (G__24750) {
case 2:
return promesa.protocols._merr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._merr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._merr.cljs$core$IFn$_invoke$arity$2 = (function (it,f){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_merr$arity$2 == null)))))){
return it.promesa$protocols$IPromise$_merr$arity$2(it,f);
} else {
return promesa$protocols$IPromise$_merr$dyn_24762.call(null,it,f);
}
}));

(promesa.protocols._merr.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_merr$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_merr$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_merr$dyn_24762.call(null,it,f,executor);
}
}));

(promesa.protocols._merr.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_mcat$dyn_24765 = (function() {
var G__24766 = null;
var G__24766__2 = (function (it,f){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._mcat[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,f);
} else {
var m__5389__auto__ = (promesa.protocols._mcat["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,f);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-mcat",it);
}
}
});
var G__24766__3 = (function (it,f,executor){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._mcat[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,f,executor);
} else {
var m__5389__auto__ = (promesa.protocols._mcat["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,f,executor);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-mcat",it);
}
}
});
G__24766 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__24766__2.call(this,it,f);
case 3:
return G__24766__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24766.cljs$core$IFn$_invoke$arity$2 = G__24766__2;
G__24766.cljs$core$IFn$_invoke$arity$3 = G__24766__3;
return G__24766;
})()
;
/**
 * Apply function to a computation and flatten 1 level
 */
promesa.protocols._mcat = (function promesa$protocols$_mcat(var_args){
var G__24752 = arguments.length;
switch (G__24752) {
case 2:
return promesa.protocols._mcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._mcat.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._mcat.cljs$core$IFn$_invoke$arity$2 = (function (it,f){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_mcat$arity$2 == null)))))){
return it.promesa$protocols$IPromise$_mcat$arity$2(it,f);
} else {
return promesa$protocols$IPromise$_mcat$dyn_24765.call(null,it,f);
}
}));

(promesa.protocols._mcat.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_mcat$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_mcat$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_mcat$dyn_24765.call(null,it,f,executor);
}
}));

(promesa.protocols._mcat.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_hmap$dyn_24768 = (function() {
var G__24769 = null;
var G__24769__2 = (function (it,f){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._hmap[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,f);
} else {
var m__5389__auto__ = (promesa.protocols._hmap["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,f);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-hmap",it);
}
}
});
var G__24769__3 = (function (it,f,executor){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._hmap[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,f,executor);
} else {
var m__5389__auto__ = (promesa.protocols._hmap["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,f,executor);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-hmap",it);
}
}
});
G__24769 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__24769__2.call(this,it,f);
case 3:
return G__24769__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24769.cljs$core$IFn$_invoke$arity$2 = G__24769__2;
G__24769.cljs$core$IFn$_invoke$arity$3 = G__24769__3;
return G__24769;
})()
;
/**
 * Apply function to a computation independently if is failed or
 *  successful.
 */
promesa.protocols._hmap = (function promesa$protocols$_hmap(var_args){
var G__24754 = arguments.length;
switch (G__24754) {
case 2:
return promesa.protocols._hmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._hmap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._hmap.cljs$core$IFn$_invoke$arity$2 = (function (it,f){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_hmap$arity$2 == null)))))){
return it.promesa$protocols$IPromise$_hmap$arity$2(it,f);
} else {
return promesa$protocols$IPromise$_hmap$dyn_24768.call(null,it,f);
}
}));

(promesa.protocols._hmap.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_hmap$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_hmap$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_hmap$dyn_24768.call(null,it,f,executor);
}
}));

(promesa.protocols._hmap.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_fnly$dyn_24771 = (function() {
var G__24772 = null;
var G__24772__2 = (function (it,f){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._fnly[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,f);
} else {
var m__5389__auto__ = (promesa.protocols._fnly["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,f);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-fnly",it);
}
}
});
var G__24772__3 = (function (it,f,executor){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._fnly[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,f,executor);
} else {
var m__5389__auto__ = (promesa.protocols._fnly["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,f,executor);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-fnly",it);
}
}
});
G__24772 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__24772__2.call(this,it,f);
case 3:
return G__24772__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24772.cljs$core$IFn$_invoke$arity$2 = G__24772__2;
G__24772.cljs$core$IFn$_invoke$arity$3 = G__24772__3;
return G__24772;
})()
;
/**
 * Apply function to a computation independently if is failed or
 *  successful; the return value is ignored.
 */
promesa.protocols._fnly = (function promesa$protocols$_fnly(var_args){
var G__24756 = arguments.length;
switch (G__24756) {
case 2:
return promesa.protocols._fnly.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._fnly.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._fnly.cljs$core$IFn$_invoke$arity$2 = (function (it,f){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_fnly$arity$2 == null)))))){
return it.promesa$protocols$IPromise$_fnly$arity$2(it,f);
} else {
return promesa$protocols$IPromise$_fnly$dyn_24771.call(null,it,f);
}
}));

(promesa.protocols._fnly.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_fnly$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_fnly$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_fnly$dyn_24771.call(null,it,f,executor);
}
}));

(promesa.protocols._fnly.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_then$dyn_24774 = (function() {
var G__24775 = null;
var G__24775__2 = (function (it,f){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._then[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,f);
} else {
var m__5389__auto__ = (promesa.protocols._then["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,f);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-then",it);
}
}
});
var G__24775__3 = (function (it,f,executor){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._then[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,f,executor);
} else {
var m__5389__auto__ = (promesa.protocols._then["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,f,executor);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-then",it);
}
}
});
G__24775 = function(it,f,executor){
switch(arguments.length){
case 2:
return G__24775__2.call(this,it,f);
case 3:
return G__24775__3.call(this,it,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24775.cljs$core$IFn$_invoke$arity$2 = G__24775__2;
G__24775.cljs$core$IFn$_invoke$arity$3 = G__24775__3;
return G__24775;
})()
;
/**
 * Apply function to a computation and flatten multiple levels
 */
promesa.protocols._then = (function promesa$protocols$_then(var_args){
var G__24758 = arguments.length;
switch (G__24758) {
case 2:
return promesa.protocols._then.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._then.cljs$core$IFn$_invoke$arity$2 = (function (it,f){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_then$arity$2 == null)))))){
return it.promesa$protocols$IPromise$_then$arity$2(it,f);
} else {
return promesa$protocols$IPromise$_then$dyn_24774.call(null,it,f);
}
}));

(promesa.protocols._then.cljs$core$IFn$_invoke$arity$3 = (function (it,f,executor){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromise$_then$arity$3 == null)))))){
return it.promesa$protocols$IPromise$_then$arity$3(it,f,executor);
} else {
return promesa$protocols$IPromise$_then$dyn_24774.call(null,it,f,executor);
}
}));

(promesa.protocols._then.cljs$lang$maxFixedArity = 3);



/**
 * Additional state/introspection abstraction.
 * @interface
 */
promesa.protocols.IState = function(){};

var promesa$protocols$IState$_extract$dyn_24779 = (function() {
var G__24780 = null;
var G__24780__1 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._extract[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._extract["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-extract",it);
}
}
});
var G__24780__2 = (function (it,default$){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._extract[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,default$);
} else {
var m__5389__auto__ = (promesa.protocols._extract["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,default$);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-extract",it);
}
}
});
G__24780 = function(it,default$){
switch(arguments.length){
case 1:
return G__24780__1.call(this,it);
case 2:
return G__24780__2.call(this,it,default$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24780.cljs$core$IFn$_invoke$arity$1 = G__24780__1;
G__24780.cljs$core$IFn$_invoke$arity$2 = G__24780__2;
return G__24780;
})()
;
/**
 * Extract the current value.
 */
promesa.protocols._extract = (function promesa$protocols$_extract(var_args){
var G__24778 = arguments.length;
switch (G__24778) {
case 1:
return promesa.protocols._extract.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.protocols._extract.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._extract.cljs$core$IFn$_invoke$arity$1 = (function (it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IState$_extract$arity$1 == null)))))){
return it.promesa$protocols$IState$_extract$arity$1(it);
} else {
return promesa$protocols$IState$_extract$dyn_24779.call(null,it);
}
}));

(promesa.protocols._extract.cljs$core$IFn$_invoke$arity$2 = (function (it,default$){
if((((!((it == null)))) && ((!((it.promesa$protocols$IState$_extract$arity$2 == null)))))){
return it.promesa$protocols$IState$_extract$arity$2(it,default$);
} else {
return promesa$protocols$IState$_extract$dyn_24779.call(null,it,default$);
}
}));

(promesa.protocols._extract.cljs$lang$maxFixedArity = 2);


var promesa$protocols$IState$_resolved_QMARK_$dyn_24782 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._resolved_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._resolved_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-resolved?",it);
}
}
});
/**
 * Returns true if a promise is resolved.
 */
promesa.protocols._resolved_QMARK_ = (function promesa$protocols$_resolved_QMARK_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IState$_resolved_QMARK_$arity$1 == null)))))){
return it.promesa$protocols$IState$_resolved_QMARK_$arity$1(it);
} else {
return promesa$protocols$IState$_resolved_QMARK_$dyn_24782.call(null,it);
}
});

var promesa$protocols$IState$_rejected_QMARK_$dyn_24783 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._rejected_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._rejected_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-rejected?",it);
}
}
});
/**
 * Returns true if a promise is rejected.
 */
promesa.protocols._rejected_QMARK_ = (function promesa$protocols$_rejected_QMARK_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IState$_rejected_QMARK_$arity$1 == null)))))){
return it.promesa$protocols$IState$_rejected_QMARK_$arity$1(it);
} else {
return promesa$protocols$IState$_rejected_QMARK_$dyn_24783.call(null,it);
}
});

var promesa$protocols$IState$_pending_QMARK_$dyn_24784 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._pending_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._pending_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-pending?",it);
}
}
});
/**
 * Retutns true if a promise is pending.
 */
promesa.protocols._pending_QMARK_ = (function promesa$protocols$_pending_QMARK_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IState$_pending_QMARK_$arity$1 == null)))))){
return it.promesa$protocols$IState$_pending_QMARK_$arity$1(it);
} else {
return promesa$protocols$IState$_pending_QMARK_$dyn_24784.call(null,it);
}
});


/**
 * A promise constructor abstraction.
 * @interface
 */
promesa.protocols.IPromiseFactory = function(){};

var promesa$protocols$IPromiseFactory$_promise$dyn_24785 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._promise[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._promise["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"IPromiseFactory.-promise",it);
}
}
});
/**
 * Create a promise instance from other types
 */
promesa.protocols._promise = (function promesa$protocols$_promise(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IPromiseFactory$_promise$arity$1 == null)))))){
return it.promesa$protocols$IPromiseFactory$_promise$arity$1(it);
} else {
return promesa$protocols$IPromiseFactory$_promise$dyn_24785.call(null,it);
}
});


/**
 * A cancellation abstraction.
 * @interface
 */
promesa.protocols.ICancellable = function(){};

var promesa$protocols$ICancellable$_cancel_BANG_$dyn_24786 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._cancel_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._cancel_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"ICancellable.-cancel!",it);
}
}
});
promesa.protocols._cancel_BANG_ = (function promesa$protocols$_cancel_BANG_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ICancellable$_cancel_BANG_$arity$1 == null)))))){
return it.promesa$protocols$ICancellable$_cancel_BANG_$arity$1(it);
} else {
return promesa$protocols$ICancellable$_cancel_BANG_$dyn_24786.call(null,it);
}
});

var promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_24787 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._cancelled_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._cancelled_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"ICancellable.-cancelled?",it);
}
}
});
promesa.protocols._cancelled_QMARK_ = (function promesa$protocols$_cancelled_QMARK_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 == null)))))){
return it.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1(it);
} else {
return promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_24787.call(null,it);
}
});


/**
 * @interface
 */
promesa.protocols.ICompletable = function(){};

var promesa$protocols$ICompletable$_resolve_BANG_$dyn_24788 = (function (it,v){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._resolve_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,v);
} else {
var m__5389__auto__ = (promesa.protocols._resolve_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,v);
} else {
throw cljs.core.missing_protocol.call(null,"ICompletable.-resolve!",it);
}
}
});
/**
 * Deliver a value to empty promise.
 */
promesa.protocols._resolve_BANG_ = (function promesa$protocols$_resolve_BANG_(it,v){
if((((!((it == null)))) && ((!((it.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 == null)))))){
return it.promesa$protocols$ICompletable$_resolve_BANG_$arity$2(it,v);
} else {
return promesa$protocols$ICompletable$_resolve_BANG_$dyn_24788.call(null,it,v);
}
});

var promesa$protocols$ICompletable$_reject_BANG_$dyn_24789 = (function (it,e){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._reject_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,e);
} else {
var m__5389__auto__ = (promesa.protocols._reject_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,e);
} else {
throw cljs.core.missing_protocol.call(null,"ICompletable.-reject!",it);
}
}
});
/**
 * Deliver an error to empty promise.
 */
promesa.protocols._reject_BANG_ = (function promesa$protocols$_reject_BANG_(it,e){
if((((!((it == null)))) && ((!((it.promesa$protocols$ICompletable$_reject_BANG_$arity$2 == null)))))){
return it.promesa$protocols$ICompletable$_reject_BANG_$arity$2(it,e);
} else {
return promesa$protocols$ICompletable$_reject_BANG_$dyn_24789.call(null,it,e);
}
});


/**
 * @interface
 */
promesa.protocols.IExecutor = function(){};

var promesa$protocols$IExecutor$_exec_BANG_$dyn_24790 = (function (it,task){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._exec_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,task);
} else {
var m__5389__auto__ = (promesa.protocols._exec_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,task);
} else {
throw cljs.core.missing_protocol.call(null,"IExecutor.-exec!",it);
}
}
});
/**
 * Submit a task and return nil
 */
promesa.protocols._exec_BANG_ = (function promesa$protocols$_exec_BANG_(it,task){
if((((!((it == null)))) && ((!((it.promesa$protocols$IExecutor$_exec_BANG_$arity$2 == null)))))){
return it.promesa$protocols$IExecutor$_exec_BANG_$arity$2(it,task);
} else {
return promesa$protocols$IExecutor$_exec_BANG_$dyn_24790.call(null,it,task);
}
});

var promesa$protocols$IExecutor$_run_BANG_$dyn_24791 = (function (it,task){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._run_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,task);
} else {
var m__5389__auto__ = (promesa.protocols._run_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,task);
} else {
throw cljs.core.missing_protocol.call(null,"IExecutor.-run!",it);
}
}
});
/**
 * Submit a task and return a promise.
 */
promesa.protocols._run_BANG_ = (function promesa$protocols$_run_BANG_(it,task){
if((((!((it == null)))) && ((!((it.promesa$protocols$IExecutor$_run_BANG_$arity$2 == null)))))){
return it.promesa$protocols$IExecutor$_run_BANG_$arity$2(it,task);
} else {
return promesa$protocols$IExecutor$_run_BANG_$dyn_24791.call(null,it,task);
}
});

var promesa$protocols$IExecutor$_submit_BANG_$dyn_24792 = (function (it,task){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._submit_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,task);
} else {
var m__5389__auto__ = (promesa.protocols._submit_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,task);
} else {
throw cljs.core.missing_protocol.call(null,"IExecutor.-submit!",it);
}
}
});
/**
 * Submit a task and return a promise.
 */
promesa.protocols._submit_BANG_ = (function promesa$protocols$_submit_BANG_(it,task){
if((((!((it == null)))) && ((!((it.promesa$protocols$IExecutor$_submit_BANG_$arity$2 == null)))))){
return it.promesa$protocols$IExecutor$_submit_BANG_$arity$2(it,task);
} else {
return promesa$protocols$IExecutor$_submit_BANG_$dyn_24792.call(null,it,task);
}
});


/**
 * A generic abstraction for scheduler facilities.
 * @interface
 */
promesa.protocols.IScheduler = function(){};

var promesa$protocols$IScheduler$_schedule_BANG_$dyn_24793 = (function (it,ms,func){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._schedule_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,ms,func);
} else {
var m__5389__auto__ = (promesa.protocols._schedule_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,ms,func);
} else {
throw cljs.core.missing_protocol.call(null,"IScheduler.-schedule!",it);
}
}
});
/**
 * Schedule a function to be executed in future.
 */
promesa.protocols._schedule_BANG_ = (function promesa$protocols$_schedule_BANG_(it,ms,func){
if((((!((it == null)))) && ((!((it.promesa$protocols$IScheduler$_schedule_BANG_$arity$3 == null)))))){
return it.promesa$protocols$IScheduler$_schedule_BANG_$arity$3(it,ms,func);
} else {
return promesa$protocols$IScheduler$_schedule_BANG_$dyn_24793.call(null,it,ms,func);
}
});


/**
 * An experimental semaphore protocol, used internally; no public api
 * @interface
 */
promesa.protocols.ISemaphore = function(){};

var promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_24800 = (function() {
var G__24801 = null;
var G__24801__1 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._try_acquire_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._try_acquire_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"ISemaphore.-try-acquire!",it);
}
}
});
var G__24801__2 = (function (it,n){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._try_acquire_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,n);
} else {
var m__5389__auto__ = (promesa.protocols._try_acquire_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,n);
} else {
throw cljs.core.missing_protocol.call(null,"ISemaphore.-try-acquire!",it);
}
}
});
var G__24801__3 = (function (it,n,t){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._try_acquire_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,n,t);
} else {
var m__5389__auto__ = (promesa.protocols._try_acquire_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,n,t);
} else {
throw cljs.core.missing_protocol.call(null,"ISemaphore.-try-acquire!",it);
}
}
});
G__24801 = function(it,n,t){
switch(arguments.length){
case 1:
return G__24801__1.call(this,it);
case 2:
return G__24801__2.call(this,it,n);
case 3:
return G__24801__3.call(this,it,n,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24801.cljs$core$IFn$_invoke$arity$1 = G__24801__1;
G__24801.cljs$core$IFn$_invoke$arity$2 = G__24801__2;
G__24801.cljs$core$IFn$_invoke$arity$3 = G__24801__3;
return G__24801;
})()
;
/**
 * Try acquire n or n permits, non-blocking or optional timeout
 */
promesa.protocols._try_acquire_BANG_ = (function promesa$protocols$_try_acquire_BANG_(var_args){
var G__24795 = arguments.length;
switch (G__24795) {
case 1:
return promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$1 == null)))))){
return it.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$1(it);
} else {
return promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_24800.call(null,it);
}
}));

(promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (it,n){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$2 == null)))))){
return it.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$2(it,n);
} else {
return promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_24800.call(null,it,n);
}
}));

(promesa.protocols._try_acquire_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (it,n,t){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$3 == null)))))){
return it.promesa$protocols$ISemaphore$_try_acquire_BANG_$arity$3(it,n,t);
} else {
return promesa$protocols$ISemaphore$_try_acquire_BANG_$dyn_24800.call(null,it,n,t);
}
}));

(promesa.protocols._try_acquire_BANG_.cljs$lang$maxFixedArity = 3);


var promesa$protocols$ISemaphore$_acquire_BANG_$dyn_24803 = (function() {
var G__24804 = null;
var G__24804__1 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._acquire_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._acquire_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"ISemaphore.-acquire!",it);
}
}
});
var G__24804__2 = (function (it,n){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._acquire_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,n);
} else {
var m__5389__auto__ = (promesa.protocols._acquire_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,n);
} else {
throw cljs.core.missing_protocol.call(null,"ISemaphore.-acquire!",it);
}
}
});
G__24804 = function(it,n){
switch(arguments.length){
case 1:
return G__24804__1.call(this,it);
case 2:
return G__24804__2.call(this,it,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24804.cljs$core$IFn$_invoke$arity$1 = G__24804__1;
G__24804.cljs$core$IFn$_invoke$arity$2 = G__24804__2;
return G__24804;
})()
;
/**
 * Acquire 1 or N permits
 */
promesa.protocols._acquire_BANG_ = (function promesa$protocols$_acquire_BANG_(var_args){
var G__24797 = arguments.length;
switch (G__24797) {
case 1:
return promesa.protocols._acquire_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.protocols._acquire_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._acquire_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_acquire_BANG_$arity$1 == null)))))){
return it.promesa$protocols$ISemaphore$_acquire_BANG_$arity$1(it);
} else {
return promesa$protocols$ISemaphore$_acquire_BANG_$dyn_24803.call(null,it);
}
}));

(promesa.protocols._acquire_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (it,n){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_acquire_BANG_$arity$2 == null)))))){
return it.promesa$protocols$ISemaphore$_acquire_BANG_$arity$2(it,n);
} else {
return promesa$protocols$ISemaphore$_acquire_BANG_$dyn_24803.call(null,it,n);
}
}));

(promesa.protocols._acquire_BANG_.cljs$lang$maxFixedArity = 2);


var promesa$protocols$ISemaphore$_release_BANG_$dyn_24806 = (function() {
var G__24807 = null;
var G__24807__1 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._release_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._release_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"ISemaphore.-release!",it);
}
}
});
var G__24807__2 = (function (it,n){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._release_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,n);
} else {
var m__5389__auto__ = (promesa.protocols._release_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,n);
} else {
throw cljs.core.missing_protocol.call(null,"ISemaphore.-release!",it);
}
}
});
G__24807 = function(it,n){
switch(arguments.length){
case 1:
return G__24807__1.call(this,it);
case 2:
return G__24807__2.call(this,it,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24807.cljs$core$IFn$_invoke$arity$1 = G__24807__1;
G__24807.cljs$core$IFn$_invoke$arity$2 = G__24807__2;
return G__24807;
})()
;
/**
 * Release 1 or N permits
 */
promesa.protocols._release_BANG_ = (function promesa$protocols$_release_BANG_(var_args){
var G__24799 = arguments.length;
switch (G__24799) {
case 1:
return promesa.protocols._release_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.protocols._release_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._release_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_release_BANG_$arity$1 == null)))))){
return it.promesa$protocols$ISemaphore$_release_BANG_$arity$1(it);
} else {
return promesa$protocols$ISemaphore$_release_BANG_$dyn_24806.call(null,it);
}
}));

(promesa.protocols._release_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (it,n){
if((((!((it == null)))) && ((!((it.promesa$protocols$ISemaphore$_release_BANG_$arity$2 == null)))))){
return it.promesa$protocols$ISemaphore$_release_BANG_$arity$2(it,n);
} else {
return promesa$protocols$ISemaphore$_release_BANG_$dyn_24806.call(null,it,n);
}
}));

(promesa.protocols._release_BANG_.cljs$lang$maxFixedArity = 2);



/**
 * An experimental lock protocol, used internally; no public api
 * @interface
 */
promesa.protocols.ILock = function(){};

var promesa$protocols$ILock$_lock_BANG_$dyn_24809 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._lock_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._lock_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"ILock.-lock!",it);
}
}
});
promesa.protocols._lock_BANG_ = (function promesa$protocols$_lock_BANG_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ILock$_lock_BANG_$arity$1 == null)))))){
return it.promesa$protocols$ILock$_lock_BANG_$arity$1(it);
} else {
return promesa$protocols$ILock$_lock_BANG_$dyn_24809.call(null,it);
}
});

var promesa$protocols$ILock$_unlock_BANG_$dyn_24810 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._unlock_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._unlock_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"ILock.-unlock!",it);
}
}
});
promesa.protocols._unlock_BANG_ = (function promesa$protocols$_unlock_BANG_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ILock$_unlock_BANG_$arity$1 == null)))))){
return it.promesa$protocols$ILock$_unlock_BANG_$arity$1(it);
} else {
return promesa$protocols$ILock$_unlock_BANG_$dyn_24810.call(null,it);
}
});


/**
 * @interface
 */
promesa.protocols.IReadChannel = function(){};

var promesa$protocols$IReadChannel$_take_BANG_$dyn_24811 = (function (it,handler){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._take_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,handler);
} else {
var m__5389__auto__ = (promesa.protocols._take_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,handler);
} else {
throw cljs.core.missing_protocol.call(null,"IReadChannel.-take!",it);
}
}
});
promesa.protocols._take_BANG_ = (function promesa$protocols$_take_BANG_(it,handler){
if((((!((it == null)))) && ((!((it.promesa$protocols$IReadChannel$_take_BANG_$arity$2 == null)))))){
return it.promesa$protocols$IReadChannel$_take_BANG_$arity$2(it,handler);
} else {
return promesa$protocols$IReadChannel$_take_BANG_$dyn_24811.call(null,it,handler);
}
});


/**
 * @interface
 */
promesa.protocols.IWriteChannel = function(){};

var promesa$protocols$IWriteChannel$_put_BANG_$dyn_24812 = (function (it,val,handler){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._put_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,val,handler);
} else {
var m__5389__auto__ = (promesa.protocols._put_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,val,handler);
} else {
throw cljs.core.missing_protocol.call(null,"IWriteChannel.-put!",it);
}
}
});
promesa.protocols._put_BANG_ = (function promesa$protocols$_put_BANG_(it,val,handler){
if((((!((it == null)))) && ((!((it.promesa$protocols$IWriteChannel$_put_BANG_$arity$3 == null)))))){
return it.promesa$protocols$IWriteChannel$_put_BANG_$arity$3(it,val,handler);
} else {
return promesa$protocols$IWriteChannel$_put_BANG_$dyn_24812.call(null,it,val,handler);
}
});


/**
 * @interface
 */
promesa.protocols.IChannelInternal = function(){};

var promesa$protocols$IChannelInternal$_cleanup_BANG_$dyn_24813 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._cleanup_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._cleanup_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"IChannelInternal.-cleanup!",it);
}
}
});
promesa.protocols._cleanup_BANG_ = (function promesa$protocols$_cleanup_BANG_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IChannelInternal$_cleanup_BANG_$arity$1 == null)))))){
return it.promesa$protocols$IChannelInternal$_cleanup_BANG_$arity$1(it);
} else {
return promesa$protocols$IChannelInternal$_cleanup_BANG_$dyn_24813.call(null,it);
}
});


/**
 * @interface
 */
promesa.protocols.IChannelMultiplexer = function(){};

var promesa$protocols$IChannelMultiplexer$_tap_BANG_$dyn_24814 = (function (it,ch,close_QMARK_){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._tap_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,ch,close_QMARK_);
} else {
var m__5389__auto__ = (promesa.protocols._tap_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"IChannelMultiplexer.-tap!",it);
}
}
});
promesa.protocols._tap_BANG_ = (function promesa$protocols$_tap_BANG_(it,ch,close_QMARK_){
if((((!((it == null)))) && ((!((it.promesa$protocols$IChannelMultiplexer$_tap_BANG_$arity$3 == null)))))){
return it.promesa$protocols$IChannelMultiplexer$_tap_BANG_$arity$3(it,ch,close_QMARK_);
} else {
return promesa$protocols$IChannelMultiplexer$_tap_BANG_$dyn_24814.call(null,it,ch,close_QMARK_);
}
});

var promesa$protocols$IChannelMultiplexer$_untap_BANG_$dyn_24815 = (function (it,ch){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._untap_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,ch);
} else {
var m__5389__auto__ = (promesa.protocols._untap_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,ch);
} else {
throw cljs.core.missing_protocol.call(null,"IChannelMultiplexer.-untap!",it);
}
}
});
promesa.protocols._untap_BANG_ = (function promesa$protocols$_untap_BANG_(it,ch){
if((((!((it == null)))) && ((!((it.promesa$protocols$IChannelMultiplexer$_untap_BANG_$arity$2 == null)))))){
return it.promesa$protocols$IChannelMultiplexer$_untap_BANG_$arity$2(it,ch);
} else {
return promesa$protocols$IChannelMultiplexer$_untap_BANG_$dyn_24815.call(null,it,ch);
}
});


/**
 * @interface
 */
promesa.protocols.ICloseable = function(){};

var promesa$protocols$ICloseable$_closed_QMARK_$dyn_24818 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._closed_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._closed_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"ICloseable.-closed?",it);
}
}
});
promesa.protocols._closed_QMARK_ = (function promesa$protocols$_closed_QMARK_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ICloseable$_closed_QMARK_$arity$1 == null)))))){
return it.promesa$protocols$ICloseable$_closed_QMARK_$arity$1(it);
} else {
return promesa$protocols$ICloseable$_closed_QMARK_$dyn_24818.call(null,it);
}
});

var promesa$protocols$ICloseable$_close_BANG_$dyn_24819 = (function() {
var G__24820 = null;
var G__24820__1 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._close_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._close_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"ICloseable.-close!",it);
}
}
});
var G__24820__2 = (function (it,reason){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._close_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,reason);
} else {
var m__5389__auto__ = (promesa.protocols._close_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,reason);
} else {
throw cljs.core.missing_protocol.call(null,"ICloseable.-close!",it);
}
}
});
G__24820 = function(it,reason){
switch(arguments.length){
case 1:
return G__24820__1.call(this,it);
case 2:
return G__24820__2.call(this,it,reason);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24820.cljs$core$IFn$_invoke$arity$1 = G__24820__1;
G__24820.cljs$core$IFn$_invoke$arity$2 = G__24820__2;
return G__24820;
})()
;
promesa.protocols._close_BANG_ = (function promesa$protocols$_close_BANG_(var_args){
var G__24817 = arguments.length;
switch (G__24817) {
case 1:
return promesa.protocols._close_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.protocols._close_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._close_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (it){
if((((!((it == null)))) && ((!((it.promesa$protocols$ICloseable$_close_BANG_$arity$1 == null)))))){
return it.promesa$protocols$ICloseable$_close_BANG_$arity$1(it);
} else {
return promesa$protocols$ICloseable$_close_BANG_$dyn_24819.call(null,it);
}
}));

(promesa.protocols._close_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (it,reason){
if((((!((it == null)))) && ((!((it.promesa$protocols$ICloseable$_close_BANG_$arity$2 == null)))))){
return it.promesa$protocols$ICloseable$_close_BANG_$arity$2(it,reason);
} else {
return promesa$protocols$ICloseable$_close_BANG_$dyn_24819.call(null,it,reason);
}
}));

(promesa.protocols._close_BANG_.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
promesa.protocols.IBuffer = function(){};

var promesa$protocols$IBuffer$_full_QMARK_$dyn_24822 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._full_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._full_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"IBuffer.-full?",it);
}
}
});
promesa.protocols._full_QMARK_ = (function promesa$protocols$_full_QMARK_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IBuffer$_full_QMARK_$arity$1 == null)))))){
return it.promesa$protocols$IBuffer$_full_QMARK_$arity$1(it);
} else {
return promesa$protocols$IBuffer$_full_QMARK_$dyn_24822.call(null,it);
}
});

var promesa$protocols$IBuffer$_poll_BANG_$dyn_24823 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._poll_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._poll_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"IBuffer.-poll!",it);
}
}
});
promesa.protocols._poll_BANG_ = (function promesa$protocols$_poll_BANG_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IBuffer$_poll_BANG_$arity$1 == null)))))){
return it.promesa$protocols$IBuffer$_poll_BANG_$arity$1(it);
} else {
return promesa$protocols$IBuffer$_poll_BANG_$dyn_24823.call(null,it);
}
});

var promesa$protocols$IBuffer$_offer_BANG_$dyn_24824 = (function (it,val){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._offer_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it,val);
} else {
var m__5389__auto__ = (promesa.protocols._offer_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it,val);
} else {
throw cljs.core.missing_protocol.call(null,"IBuffer.-offer!",it);
}
}
});
promesa.protocols._offer_BANG_ = (function promesa$protocols$_offer_BANG_(it,val){
if((((!((it == null)))) && ((!((it.promesa$protocols$IBuffer$_offer_BANG_$arity$2 == null)))))){
return it.promesa$protocols$IBuffer$_offer_BANG_$arity$2(it,val);
} else {
return promesa$protocols$IBuffer$_offer_BANG_$dyn_24824.call(null,it,val);
}
});

var promesa$protocols$IBuffer$_size$dyn_24825 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._size[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._size["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"IBuffer.-size",it);
}
}
});
promesa.protocols._size = (function promesa$protocols$_size(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IBuffer$_size$arity$1 == null)))))){
return it.promesa$protocols$IBuffer$_size$arity$1(it);
} else {
return promesa$protocols$IBuffer$_size$dyn_24825.call(null,it);
}
});


/**
 * @interface
 */
promesa.protocols.IHandler = function(){};

var promesa$protocols$IHandler$_active_QMARK_$dyn_24826 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._active_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._active_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"IHandler.-active?",it);
}
}
});
promesa.protocols._active_QMARK_ = (function promesa$protocols$_active_QMARK_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IHandler$_active_QMARK_$arity$1 == null)))))){
return it.promesa$protocols$IHandler$_active_QMARK_$arity$1(it);
} else {
return promesa$protocols$IHandler$_active_QMARK_$dyn_24826.call(null,it);
}
});

var promesa$protocols$IHandler$_commit_BANG_$dyn_24827 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._commit_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._commit_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"IHandler.-commit!",it);
}
}
});
promesa.protocols._commit_BANG_ = (function promesa$protocols$_commit_BANG_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IHandler$_commit_BANG_$arity$1 == null)))))){
return it.promesa$protocols$IHandler$_commit_BANG_$arity$1(it);
} else {
return promesa$protocols$IHandler$_commit_BANG_$dyn_24827.call(null,it);
}
});

var promesa$protocols$IHandler$_blockable_QMARK_$dyn_24828 = (function (it){
var x__5390__auto__ = (((it == null))?null:it);
var m__5391__auto__ = (promesa.protocols._blockable_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,it);
} else {
var m__5389__auto__ = (promesa.protocols._blockable_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,it);
} else {
throw cljs.core.missing_protocol.call(null,"IHandler.-blockable?",it);
}
}
});
promesa.protocols._blockable_QMARK_ = (function promesa$protocols$_blockable_QMARK_(it){
if((((!((it == null)))) && ((!((it.promesa$protocols$IHandler$_blockable_QMARK_$arity$1 == null)))))){
return it.promesa$protocols$IHandler$_blockable_QMARK_$arity$1(it);
} else {
return promesa$protocols$IHandler$_blockable_QMARK_$dyn_24828.call(null,it);
}
});


//# sourceMappingURL=protocols.js.map

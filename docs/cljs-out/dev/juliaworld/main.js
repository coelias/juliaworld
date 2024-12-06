// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('juliaworld.main');
goog.require('cljs.core');
goog.require('pixi');
goog.require('promesa.core');
goog.require('clojure.string');
goog.require('klipse.run.plugin.plugin');
goog.require('klipse.plugin');
goog.require('juliaworld.state');
goog.require('juliaworld.tiled');
goog.require('juliaworld.helpers');
goog.require('juliaworld.hero');
goog.require('juliaworld.scene');
goog.require('juliaworld.sound');
juliaworld.main.create_app = (function juliaworld$main$create_app(var_args){
var args__5772__auto__ = [];
var len__5766__auto___33209 = arguments.length;
var i__5767__auto___33210 = (0);
while(true){
if((i__5767__auto___33210 < len__5766__auto___33209)){
args__5772__auto__.push((arguments[i__5767__auto___33210]));

var G__33211 = (i__5767__auto___33210 + (1));
i__5767__auto___33210 = G__33211;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return juliaworld.main.create_app.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(juliaworld.main.create_app.cljs$core$IFn$_invoke$arity$variadic = (function (div,p__33203){
var map__33204 = p__33203;
var map__33204__$1 = cljs.core.__destructure_map.call(null,map__33204);
var options = cljs.core.get.call(null,map__33204__$1,new cljs.core.Keyword(null,"options","options",99638489));
var resize = cljs.core.get.call(null,map__33204__$1,new cljs.core.Keyword(null,"resize","resize",297367086));
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,null),(function (___27441__auto__){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.tiled.load_scenes.call(null)),(function (_){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-res","screen-res",1524431210)], null))),(function (p__33205){
var vec__33206 = p__33205;
var x = cljs.core.nth.call(null,vec__33206,(0),null);
var y = cljs.core.nth.call(null,vec__33206,(1),null);
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,document.getElementById(div)),(function (element){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,(new PIXI.Application(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["resizeTo",element], null))))),(function (app){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.state.add_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-resize","screen-resize",1478871413)], null),resize)),(function (___27409__auto__){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,null),(function (___27441__auto____$1){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,app.init(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),((x * resize) | (0)),new cljs.core.Keyword(null,"height","height",1025178622),((y * resize) | (0))], null),options)))),(function (___$1){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,element.appendChild(app.canvas)),(function (___27409__auto____$1){
return promesa.protocols._promise.call(null,juliaworld.sound.load_audios.call(null));
}));
}));
}))),(function (___27409__auto____$1){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.assoc,new cljs.core.Keyword(null,"app","app",-560961707),app)),(function (___27409__auto____$2){
return promesa.protocols._promise.call(null,juliaworld.sound.playsong.call(null));
}));
}));
}));
}));
}));
}));
}));
}));
}));

(juliaworld.main.create_app.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(juliaworld.main.create_app.cljs$lang$applyTo = (function (seq33201){
var G__33202 = cljs.core.first.call(null,seq33201);
var seq33201__$1 = cljs.core.next.call(null,seq33201);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33202,seq33201__$1);
}));

promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,null),(function (___27441__auto__){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.main.create_app.call(null,"mypixi",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#ff0000"], null),new cljs.core.Keyword(null,"resize","resize",297367086),1.5)),(function (_){
return promesa.protocols._promise.call(null,juliaworld.scene.set_level.call(null,new cljs.core.Keyword(null,"level-1","level-1",35933007)));
}));
}));
klipse.plugin.init.call(null,({"selector": ".language-klipse", "selector_reagent": ".language-reagent", "eval_idle_msec": (999999999), "codemirror_options_in": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true], null)}));

//# sourceMappingURL=main.js.map

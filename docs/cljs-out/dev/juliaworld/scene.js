// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('juliaworld.scene');
goog.require('cljs.core');
goog.require('juliaworld.state');
goog.require('juliaworld.hero');
goog.require('pixi');
juliaworld.scene.draw_layer = (function juliaworld$scene$draw_layer(layer){
var stage = juliaworld.state.get_app.call(null).stage;
var resize = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-resize","screen-resize",1478871413)], null));
stage.addChild(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(layer)).addChild(new cljs.core.Keyword(null,"grid-container","grid-container",1369553755).cljs$core$IFn$_invoke$arity$1(layer));

(stage.scale.x = resize);

return (stage.scale.y = resize);
});
juliaworld.scene.load_scene = (function juliaworld$scene$load_scene(n){
var map__20027 = juliaworld.state.get_layer.call(null,n);
var map__20027__$1 = cljs.core.__destructure_map.call(null,map__20027);
var l = map__20027__$1;
var container = cljs.core.get.call(null,map__20027__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var herox = cljs.core.get.call(null,map__20027__$1,new cljs.core.Keyword(null,"herox","herox",2034186716));
var heroy = cljs.core.get.call(null,map__20027__$1,new cljs.core.Keyword(null,"heroy","heroy",-1136789549));
var stage = juliaworld.state.get_app.call(null).stage;
juliaworld.state.set_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415)], null),(1));

juliaworld.state.set_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [herox,heroy], null));

stage.removeChildren();

juliaworld.scene.draw_layer.call(null,l);

juliaworld.state.set_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new cljs.core.Keyword(null,"idle-down","idle-down",-1942157088));

return juliaworld.hero.show_hero.call(null);
});

//# sourceMappingURL=scene.js.map

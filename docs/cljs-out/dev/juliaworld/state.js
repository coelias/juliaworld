// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('juliaworld.state');
goog.require('cljs.core');
if((typeof juliaworld !== 'undefined') && (typeof juliaworld.state !== 'undefined') && (typeof juliaworld.state.game !== 'undefined')){
} else {
juliaworld.state.game = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sprites","sprites",-1835833922),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"layers","layers",1944875032),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"app","app",-560961707),null,new cljs.core.Keyword(null,"config","config",994861415),cljs.core.PersistentArrayMap.EMPTY], null));
}
juliaworld.state.add_config = (function juliaworld$state$add_config(path,v){
return cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.assoc_in,cljs.core.cons.call(null,new cljs.core.Keyword(null,"config","config",994861415),path),v);
});
juliaworld.state.get_config = (function juliaworld$state$get_config(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,juliaworld.state.game),cljs.core.cons.call(null,new cljs.core.Keyword(null,"config","config",994861415),path));
});
juliaworld.state.set_state = (function juliaworld$state$set_state(path,value){
return cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.assoc_in,cljs.core.cons.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),path),value);
});
juliaworld.state.get_state = (function juliaworld$state$get_state(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,juliaworld.state.game),cljs.core.cons.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),path));
});
juliaworld.state.save_sprites = (function juliaworld$state$save_sprites(x){
return cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprites","sprites",-1835833922)], null),cljs.core.merge,x);
});
juliaworld.state.get_texture = (function juliaworld$state$get_texture(name){
return new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"sprites","sprites",-1835833922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game)),name));
});
juliaworld.state.get_sprite = (function juliaworld$state$get_sprite(name){
var G__21596 = name;
var G__21596__$1 = (((G__21596 == null))?null:juliaworld.state.get_texture.call(null,G__21596));
if((G__21596__$1 == null)){
return null;
} else {
return (new PIXI.Sprite(G__21596__$1));
}
});
juliaworld.state.position__GT_items = (function juliaworld$state$position__GT_items(x,y){
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.filter.call(null,cljs.core.map_QMARK_,cljs.core.map.call(null,(function (p1__21598_SHARP_){
return cljs.core.get.call(null,p1__21598_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}),cljs.core.map.call(null,(function (p__21599){
var vec__21600 = p__21599;
var ly_name = cljs.core.nth.call(null,vec__21600,(0),null);
var map__21603 = cljs.core.nth.call(null,vec__21600,(1),null);
var map__21603__$1 = cljs.core.__destructure_map.call(null,map__21603);
var items = cljs.core.get.call(null,map__21603__$1,new cljs.core.Keyword(null,"items","items",1031954938));
if(cljs.core.truth_(items)){
return cljs.core.update_vals.call(null,items,(function (p1__21597_SHARP_){
return cljs.core.merge.call(null,p1__21597_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layer","layer",-1601820589),ly_name,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
}));
} else {
return null;
}
}),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game))))));
});
juliaworld.state.get_layer = (function juliaworld$state$get_layer(id){
return id.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game)));
});
juliaworld.state.hide_item = (function juliaworld$state$hide_item(layer,position){
var path = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layers","layers",1944875032),layer,new cljs.core.Keyword(null,"items","items",1031954938),position], null);
var map__21604 = cljs.core.get_in.call(null,cljs.core.deref.call(null,juliaworld.state.game),path);
var map__21604__$1 = cljs.core.__destructure_map.call(null,map__21604);
var sprite = cljs.core.get.call(null,map__21604__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
(sprite.visible = false);

return cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.assoc_in,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"visible","visible",-1024216805)),false);
});
juliaworld.state.unhide_items = (function juliaworld$state$unhide_items(){
return cljs.core.reset_BANG_.call(null,juliaworld.state.game,clojure.walk.postwalk.call(null,(function (p1__21605_SHARP_){
if(((cljs.core.contains_QMARK_.call(null,p1__21605_SHARP_,new cljs.core.Keyword(null,"visible","visible",-1024216805))) && (cljs.core.contains_QMARK_.call(null,p1__21605_SHARP_,new cljs.core.Keyword(null,"action","action",-811238024))))){
(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(p1__21605_SHARP_).visible = true);

return cljs.core.assoc.call(null,p1__21605_SHARP_,new cljs.core.Keyword(null,"visible","visible",-1024216805),true);
} else {
return p1__21605_SHARP_;
}
}),cljs.core.deref.call(null,juliaworld.state.game)));
});
juliaworld.state.reset_state = (function juliaworld$state$reset_state(scene_number,herox,heroy,end_score){
juliaworld.state.unhide_items.call(null);

juliaworld.state.set_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780)], null),(0));

juliaworld.state.set_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415)], null),scene_number);

juliaworld.state.set_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [herox,heroy], null));

return juliaworld.state.set_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"final-score","final-score",-1149434122)], null),end_score);
});
juliaworld.state.level_cleared_QMARK_ = (function juliaworld$state$level_cleared_QMARK_(){
var map__21606 = cljs.core.deref.call(null,juliaworld.state.game);
var map__21606__$1 = cljs.core.__destructure_map.call(null,map__21606);
var map__21607 = cljs.core.get.call(null,map__21606__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__21607__$1 = cljs.core.__destructure_map.call(null,map__21607);
var score = cljs.core.get.call(null,map__21607__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var final_score = cljs.core.get.call(null,map__21607__$1,new cljs.core.Keyword(null,"final-score","final-score",-1149434122));
return cljs.core._EQ_.call(null,score,final_score);
});
juliaworld.state.inc_score = (function juliaworld$state$inc_score(){
return cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"score","score",-1963588780)], null),cljs.core.inc);
});
juliaworld.state.get_animation = (function juliaworld$state$get_animation(name){
return name.call(null,new cljs.core.Keyword(null,"animations","animations",140711296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game)));
});
juliaworld.state.start_animation = (function juliaworld$state$start_animation(name){
return new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_animation.call(null,name)).play();
});
juliaworld.state.stop_animation = (function juliaworld$state$stop_animation(name){
return new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_animation.call(null,name)).stop();
});
juliaworld.state.tile_props = (function juliaworld$state$tile_props(n){
return new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"sprites","sprites",-1835833922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game)),n));
});
juliaworld.state.get_scene_layer = (function juliaworld$state$get_scene_layer(){
var s = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415)], null));
return s.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game)));
});
juliaworld.state.get_current_layers = (function juliaworld$state$get_current_layers(){
return new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_scene_layer.call(null));
});
juliaworld.state.sprite_info = (function juliaworld$state$sprite_info(id){
var map__21608 = cljs.core.get.call(null,new cljs.core.Keyword(null,"sprites","sprites",-1835833922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game)),id);
var map__21608__$1 = cljs.core.__destructure_map.call(null,map__21608);
var type = cljs.core.get.call(null,map__21608__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var properties = cljs.core.get.call(null,map__21608__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
return cljs.core.assoc.call(null,properties,new cljs.core.Keyword(null,"class","class",-2030961996),type);
});
juliaworld.state.get_app = (function juliaworld$state$get_app(){
return new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game));
});
juliaworld.state.xy_props = (function juliaworld$state$xy_props(x,y){
var layers = new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game));
var deps = new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(layers.call(null,juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415)], null))));
var vec__21610 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-block-res","screen-block-res",-1934351900)], null));
var xb = cljs.core.nth.call(null,vec__21610,(0),null);
var yb = cljs.core.nth.call(null,vec__21610,(1),null);
var pos = ((xb * y) + x);
var $ = layers;
var $__$1 = cljs.core.map.call(null,$,deps);
var $__$2 = cljs.core.map.call(null,new cljs.core.Keyword(null,"data","data",-232669377),$__$1);
var $__$3 = cljs.core.map.call(null,(function (p1__21609_SHARP_){
return cljs.core.nth.call(null,p1__21609_SHARP_,pos);
}),$__$2);
return cljs.core.map.call(null,juliaworld.state.tile_props,$__$3);
});

//# sourceMappingURL=state.js.map

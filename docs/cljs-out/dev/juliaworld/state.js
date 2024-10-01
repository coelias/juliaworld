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
var G__9862 = name;
var G__9862__$1 = (((G__9862 == null))?null:juliaworld.state.get_texture.call(null,G__9862));
if((G__9862__$1 == null)){
return null;
} else {
return (new PIXI.Sprite(G__9862__$1));
}
});
juliaworld.state.get_layer = (function juliaworld$state$get_layer(n){
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game)),(n - (1)));
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
juliaworld.state.get_app = (function juliaworld$state$get_app(){
return new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game));
});
juliaworld.state.xy_props = (function juliaworld$state$xy_props(x,y){
var vec__9864 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-block-res","screen-block-res",-1934351900)], null));
var xb = cljs.core.nth.call(null,vec__9864,(0),null);
var yb = cljs.core.nth.call(null,vec__9864,(1),null);
var pos = ((xb * y) + x);
return cljs.core.map.call(null,juliaworld.state.tile_props,cljs.core.map.call(null,(function (p1__9863_SHARP_){
return cljs.core.nth.call(null,p1__9863_SHARP_,pos);
}),cljs.core.map.call(null,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game)))));
});

//# sourceMappingURL=state.js.map

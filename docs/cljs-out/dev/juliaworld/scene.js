// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('juliaworld.scene');
goog.require('cljs.core');
goog.require('juliaworld.state');
goog.require('juliaworld.hero');
goog.require('juliaworld.helpers');
goog.require('pixi');
juliaworld.scene.get_grid_texture = (function juliaworld$scene$get_grid_texture(){
var vec__30295 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null));
var w = cljs.core.nth.call(null,vec__30295,(0),null);
var h = cljs.core.nth.call(null,vec__30295,(1),null);
var pr = (new PIXI.Graphics());
var c = (new PIXI.Container());
c.addChild(pr);

pr.moveTo((1),(0));

pr.lineTo(w,(0)).stroke(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),0.08], null)));

pr.moveTo((0),(0));

pr.lineTo((0),h).stroke(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),0.08], null)));

return juliaworld.state.get_app.call(null).renderer.generateTexture(pr);
});
juliaworld.scene.grid_container = (new cljs.core.Delay((function (){
var gt = juliaworld.scene.get_grid_texture.call(null);
var vec__30298 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-res","screen-res",1524431210)], null));
var xres = cljs.core.nth.call(null,vec__30298,(0),null);
var yres = cljs.core.nth.call(null,vec__30298,(1),null);
var vec__30301 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null));
var xtres = cljs.core.nth.call(null,vec__30301,(0),null);
var ytres = cljs.core.nth.call(null,vec__30301,(1),null);
var coords = (function (){var iter__5520__auto__ = (function juliaworld$scene$iter__30304(s__30305){
return (new cljs.core.LazySeq(null,(function (){
var s__30305__$1 = s__30305;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__30305__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__30305__$1,y,xs__6360__auto__,temp__5804__auto__,gt,vec__30298,xres,yres,vec__30301,xtres,ytres){
return (function juliaworld$scene$iter__30304_$_iter__30306(s__30307){
return (new cljs.core.LazySeq(null,((function (s__30305__$1,y,xs__6360__auto__,temp__5804__auto__,gt,vec__30298,xres,yres,vec__30301,xtres,ytres){
return (function (){
var s__30307__$1 = s__30307;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__30307__$1);
if(temp__5804__auto____$1){
var s__30307__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30307__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__30307__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__30309 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__30308 = (0);
while(true){
if((i__30308 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__30308);
cljs.core.chunk_append.call(null,b__30309,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__30326 = (i__30308 + (1));
i__30308 = G__30326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30309),juliaworld$scene$iter__30304_$_iter__30306.call(null,cljs.core.chunk_rest.call(null,s__30307__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30309),null);
}
} else {
var x = cljs.core.first.call(null,s__30307__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),juliaworld$scene$iter__30304_$_iter__30306.call(null,cljs.core.rest.call(null,s__30307__$2)));
}
} else {
return null;
}
break;
}
});})(s__30305__$1,y,xs__6360__auto__,temp__5804__auto__,gt,vec__30298,xres,yres,vec__30301,xtres,ytres))
,null,null));
});})(s__30305__$1,y,xs__6360__auto__,temp__5804__auto__,gt,vec__30298,xres,yres,vec__30301,xtres,ytres))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,cljs.core.range.call(null,(0),xres,xtres)));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,juliaworld$scene$iter__30304.call(null,cljs.core.rest.call(null,s__30305__$1)));
} else {
var G__30327 = cljs.core.rest.call(null,s__30305__$1);
s__30305__$1 = G__30327;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,cljs.core.range.call(null,(0),yres,ytres));
})();
var cnt = (new PIXI.Container());
var seq__30310_30328 = cljs.core.seq.call(null,coords);
var chunk__30311_30329 = null;
var count__30312_30330 = (0);
var i__30313_30331 = (0);
while(true){
if((i__30313_30331 < count__30312_30330)){
var vec__30320_30332 = cljs.core._nth.call(null,chunk__30311_30329,i__30313_30331);
var x_30333 = cljs.core.nth.call(null,vec__30320_30332,(0),null);
var y_30334 = cljs.core.nth.call(null,vec__30320_30332,(1),null);
var sp_30335 = (new PIXI.Sprite(gt));
cnt.addChild(sp_30335);

(sp_30335.x = x_30333);

(sp_30335.y = y_30334);


var G__30336 = seq__30310_30328;
var G__30337 = chunk__30311_30329;
var G__30338 = count__30312_30330;
var G__30339 = (i__30313_30331 + (1));
seq__30310_30328 = G__30336;
chunk__30311_30329 = G__30337;
count__30312_30330 = G__30338;
i__30313_30331 = G__30339;
continue;
} else {
var temp__5804__auto___30340 = cljs.core.seq.call(null,seq__30310_30328);
if(temp__5804__auto___30340){
var seq__30310_30341__$1 = temp__5804__auto___30340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30310_30341__$1)){
var c__5565__auto___30342 = cljs.core.chunk_first.call(null,seq__30310_30341__$1);
var G__30343 = cljs.core.chunk_rest.call(null,seq__30310_30341__$1);
var G__30344 = c__5565__auto___30342;
var G__30345 = cljs.core.count.call(null,c__5565__auto___30342);
var G__30346 = (0);
seq__30310_30328 = G__30343;
chunk__30311_30329 = G__30344;
count__30312_30330 = G__30345;
i__30313_30331 = G__30346;
continue;
} else {
var vec__30323_30347 = cljs.core.first.call(null,seq__30310_30341__$1);
var x_30348 = cljs.core.nth.call(null,vec__30323_30347,(0),null);
var y_30349 = cljs.core.nth.call(null,vec__30323_30347,(1),null);
var sp_30350 = (new PIXI.Sprite(gt));
cnt.addChild(sp_30350);

(sp_30350.x = x_30348);

(sp_30350.y = y_30349);


var G__30351 = cljs.core.next.call(null,seq__30310_30341__$1);
var G__30352 = null;
var G__30353 = (0);
var G__30354 = (0);
seq__30310_30328 = G__30351;
chunk__30311_30329 = G__30352;
count__30312_30330 = G__30353;
i__30313_30331 = G__30354;
continue;
}
} else {
}
}
break;
}

return cnt;
}),null));
juliaworld.scene.draw_layer = (function juliaworld$scene$draw_layer(p__30355){
var map__30356 = p__30355;
var map__30356__$1 = cljs.core.__destructure_map.call(null,map__30356);
var deps = cljs.core.get.call(null,map__30356__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var stage = juliaworld.state.get_app.call(null).stage;
var resize = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-resize","screen-resize",1478871413)], null));
var seq__30357_30361 = cljs.core.seq.call(null,deps);
var chunk__30358_30362 = null;
var count__30359_30363 = (0);
var i__30360_30364 = (0);
while(true){
if((i__30360_30364 < count__30359_30363)){
var layer_name_30365 = cljs.core._nth.call(null,chunk__30358_30362,i__30360_30364);
var l_30366 = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_layer.call(null,layer_name_30365));
stage.addChild(l_30366);


var G__30367 = seq__30357_30361;
var G__30368 = chunk__30358_30362;
var G__30369 = count__30359_30363;
var G__30370 = (i__30360_30364 + (1));
seq__30357_30361 = G__30367;
chunk__30358_30362 = G__30368;
count__30359_30363 = G__30369;
i__30360_30364 = G__30370;
continue;
} else {
var temp__5804__auto___30371 = cljs.core.seq.call(null,seq__30357_30361);
if(temp__5804__auto___30371){
var seq__30357_30372__$1 = temp__5804__auto___30371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30357_30372__$1)){
var c__5565__auto___30373 = cljs.core.chunk_first.call(null,seq__30357_30372__$1);
var G__30374 = cljs.core.chunk_rest.call(null,seq__30357_30372__$1);
var G__30375 = c__5565__auto___30373;
var G__30376 = cljs.core.count.call(null,c__5565__auto___30373);
var G__30377 = (0);
seq__30357_30361 = G__30374;
chunk__30358_30362 = G__30375;
count__30359_30363 = G__30376;
i__30360_30364 = G__30377;
continue;
} else {
var layer_name_30378 = cljs.core.first.call(null,seq__30357_30372__$1);
var l_30379 = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_layer.call(null,layer_name_30378));
stage.addChild(l_30379);


var G__30380 = cljs.core.next.call(null,seq__30357_30372__$1);
var G__30381 = null;
var G__30382 = (0);
var G__30383 = (0);
seq__30357_30361 = G__30380;
chunk__30358_30362 = G__30381;
count__30359_30363 = G__30382;
i__30360_30364 = G__30383;
continue;
}
} else {
}
}
break;
}

stage.addChild(cljs.core.deref.call(null,juliaworld.scene.grid_container));

(stage.scale.x = resize);

return (stage.scale.y = resize);
});
juliaworld.scene.load_scene = (function juliaworld$scene$load_scene(n){
var map__30384 = juliaworld.state.get_layer.call(null,n);
var map__30384__$1 = cljs.core.__destructure_map.call(null,map__30384);
var l = map__30384__$1;
var map__30385 = cljs.core.get.call(null,map__30384__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var map__30385__$1 = cljs.core.__destructure_map.call(null,map__30385);
var herox = cljs.core.get.call(null,map__30385__$1,new cljs.core.Keyword(null,"herox","herox",2034186716));
var heroy = cljs.core.get.call(null,map__30385__$1,new cljs.core.Keyword(null,"heroy","heroy",-1136789549));
var description = cljs.core.get.call(null,map__30385__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var score = cljs.core.get.call(null,map__30385__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var stage = juliaworld.state.get_app.call(null).stage;
juliaworld.state.reset_state.call(null,n,herox,heroy,score);

stage.removeChildren();

juliaworld.scene.draw_layer.call(null,l);

juliaworld.state.set_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new cljs.core.Keyword(null,"idle-down","idle-down",-1942157088));

juliaworld.hero.show_hero.call(null);

(document.getElementById("description").innerHTML = description);

return null;
});
juliaworld.scene.set_level = (function juliaworld$scene$set_level(level){
juliaworld.scene.load_scene.call(null,level);

return juliaworld.helpers.load_saved_code.call(null);
});
juliaworld.scene.check_scores = (function juliaworld$scene$check_scores(){
if(juliaworld.state.level_cleared_QMARK_.call(null)){
return juliaworld.state.get_app.call(null).stage.addChild(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_layer.call(null,new cljs.core.Keyword(null,"levelcleared","levelcleared",1931404869))));
} else {
return null;
}
});

//# sourceMappingURL=scene.js.map

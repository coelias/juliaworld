// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('juliaworld.tiled');
goog.require('cljs.core');
goog.require('juliaworld.state');
goog.require('juliaworld.helpers');
goog.require('juliaworld.validation');
goog.require('promesa.core');
goog.require('clojure.string');
goog.require('schema.core');
juliaworld.tiled.tile_sch = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Num,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"properties","properties",685819552)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),schema.core.enum$.call(null,"basex","basey","ani-name","collision","type","action"),new cljs.core.Keyword(null,"type","type",1174270348),schema.core.Str,new cljs.core.Keyword(null,"value","value",305978217),schema.core.Any], null)], null),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"animation","animation",-1248293244)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),schema.core.Num,new cljs.core.Keyword(null,"tileid","tileid",508020796),schema.core.Num], null)], null),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"type","type",1174270348)),schema.core.Str]);
juliaworld.tiled.tileset_sch = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tilecount","tilecount",-1061649439),new cljs.core.Keyword(null,"firstgid","firstgid",1659571107),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tileheight","tileheight",1971050793),new cljs.core.Keyword(null,"imageheight","imageheight",-656351799),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"wangsets","wangsets",-1015308516)),new cljs.core.Keyword(null,"tilewidth","tilewidth",-711038610),new cljs.core.Keyword(null,"imagewidth","imagewidth",-1534474065),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.Keyword(null,"spacing","spacing",204422175),new cljs.core.Keyword(null,"margin","margin",-995903681)],[schema.core.Num,schema.core.Num,schema.core.Num,schema.core.Str,schema.core.Num,schema.core.Num,schema.core.Any,schema.core.Num,schema.core.Num,schema.core.Str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [juliaworld.tiled.tile_sch], null),schema.core.Num,schema.core.Num]);
juliaworld.tiled.textures_sch = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.cond_pre.call(null,schema.core.Keyword,schema.core.Num),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"sprite","sprite",172516848),juliaworld.validation.jsType.call(null,PIXI.Texture),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),schema.core.maybe.call(null,schema.core.Num),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"properties","properties",685819552)),cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.cond_pre.call(null,schema.core.Num,schema.core.Any)]),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"type","type",1174270348)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"animation","animation",-1248293244)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),schema.core.Num,new cljs.core.Keyword(null,"tileid","tileid",508020796),schema.core.Num], null)], null)])]);
juliaworld.tiled.ani_info_sch = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"duration","duration",1444101068),schema.core.Num,new cljs.core.Keyword(null,"basex","basex",-610151236),schema.core.maybe.call(null,schema.core.Num),new cljs.core.Keyword(null,"basey","basey",-430302880),schema.core.maybe.call(null,schema.core.Num),new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Num], null)], null)]);
juliaworld.tiled.animation_sch = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sprite","sprite",172516848),juliaworld.validation.jsType.call(null,PIXI.AnimatedSprite),new cljs.core.Keyword(null,"basex","basex",-610151236),schema.core.Num,new cljs.core.Keyword(null,"basey","basey",-430302880),schema.core.Num], null)]);
juliaworld.tiled.tiled_layers_sch = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"properties","properties",685819552)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"height","height",1025178622)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"width","width",-384071477)),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"data","data",-232669377)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032)),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"visible","visible",-1024216805)],[schema.core.Num,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Str,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.Str,new cljs.core.Keyword(null,"value","value",305978217),schema.core.Any], null)], null),schema.core.Num,schema.core.Num,schema.core.Str,schema.core.Str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Num], null),schema.core.Any,schema.core.Num,schema.core.Num,schema.core.Num,schema.core.Bool]);
juliaworld.tiled.item_sprites_info = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Num], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"type","type",1174270348),schema.core.Str,new cljs.core.Keyword(null,"class","class",-2030961996),schema.core.Str,new cljs.core.Keyword(null,"sprite","sprite",172516848),juliaworld.validation.jsType.call(null,PIXI.Sprite),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null)], null),new cljs.core.Keyword(null,"visible","visible",-1024216805),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"layer","layer",-1601820589)),schema.core.Keyword])]);
juliaworld.tiled.processed_layers_sch = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"lowest-y","lowest-y",-1987829690)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"properties","properties",685819552)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"height","height",1025178622)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"width","width",-384071477)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"container","container",-1736937707)),new cljs.core.Keyword(null,"type","type",1174270348),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"score","score",-1963588780)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"items","items",1031954938)),new cljs.core.Keyword(null,"x","x",2099068185),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779)),new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"deps","deps",1883360319)],[schema.core.Num,schema.core.Num,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.Any]),schema.core.Num,schema.core.Num,juliaworld.validation.jsType.call(null,PIXI.Container),schema.core.Str,schema.core.Int,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Num], null),schema.core.Num,schema.core.Num,juliaworld.tiled.item_sprites_info,schema.core.Num,schema.core.Keyword,schema.core.Bool,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null)])]);
juliaworld.tiled.spritesheet_data_sch = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"animations","animations",140711296),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"image","image",-58725096),schema.core.Str,new cljs.core.Keyword(null,"format","format",-1306924766),schema.core.Str,new cljs.core.Keyword(null,"scale","scale",-230427353),schema.core.Num,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),schema.core.Num,new cljs.core.Keyword(null,"h","h",1109658740),schema.core.Num], null)], null),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Num,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),schema.core.Num,new cljs.core.Keyword(null,"y","y",-1757859776),schema.core.Num,new cljs.core.Keyword(null,"h","h",1109658740),schema.core.Num,new cljs.core.Keyword(null,"w","w",354169001),schema.core.Num], null),new cljs.core.Keyword(null,"sourceSize","sourceSize",118436133),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"h","h",1109658740),schema.core.Num,new cljs.core.Keyword(null,"w","w",354169001),schema.core.Num], null),new cljs.core.Keyword(null,"spriteSourceSize","spriteSourceSize",2065197971),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),schema.core.Num,new cljs.core.Keyword(null,"y","y",-1757859776),schema.core.Num,new cljs.core.Keyword(null,"h","h",1109658740),schema.core.Num,new cljs.core.Keyword(null,"w","w",354169001),schema.core.Num], null)], null)])], null);
juliaworld.tiled.load_textures = (function juliaworld$tiled$load_textures(m){
juliaworld.validation.validate.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.Str]),m);

var promises = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p__30312){
var vec__30313 = p__30312;
var k = cljs.core.nth.call(null,vec__30313,(0),null);
var v = cljs.core.nth.call(null,vec__30313,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.core.promise.call(null,k),PIXI.Assets.load(v)], null);
}),m));
return promesa.core.then.call(null,promesa.core.all.call(null,promises),(function (p1__30311_SHARP_){
var $ = p1__30311_SHARP_;
var $__$1 = cljs.core.apply.call(null,cljs.core.hash_map,$);
var $__$2 = cljs.core.update_vals.call(null,$__$1,(function (v){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sprite","sprite",172516848)],[v]);
}));
return juliaworld.state.save_sprites.call(null,$__$2);
}));
});
juliaworld.tiled.parse_game_resolution = (function juliaworld$tiled$parse_game_resolution(scene){
var map__30316 = scene;
var map__30316__$1 = cljs.core.__destructure_map.call(null,map__30316);
var tilewidth = cljs.core.get.call(null,map__30316__$1,new cljs.core.Keyword(null,"tilewidth","tilewidth",-711038610));
var tileheight = cljs.core.get.call(null,map__30316__$1,new cljs.core.Keyword(null,"tileheight","tileheight",1971050793));
var height = cljs.core.get.call(null,map__30316__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__30316__$1,new cljs.core.Keyword(null,"width","width",-384071477));
juliaworld.state.add_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-res","screen-res",1524431210)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(width * tilewidth),(height * tileheight)], null));

juliaworld.state.add_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tilewidth,tileheight], null));

return juliaworld.state.add_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-block-res","screen-block-res",-1934351900)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
});
/**
 * Merges background layers into one for a given scene
 *   remember that background-1-l-N means that background 1 has N layers
 *   we want to merge those N layers
 */
juliaworld.tiled.merge_layers = (function juliaworld$tiled$merge_layers(layers){
return cljs.core.mapv.call(null,cljs.core.last,cljs.core.map.call(null,(function (p1__30317_SHARP_){
return cljs.core.filter.call(null,(function (x){
return (x > (0));
}),p1__30317_SHARP_);
}),cljs.core.apply.call(null,cljs.core.map,cljs.core.cons.call(null,cljs.core.vector,layers))));
});
juliaworld.tiled.sprites_map__GT_container = (function juliaworld$tiled$sprites_map__GT_container(m){
var cnt = (new PIXI.Container());
var seq__30318_30338 = cljs.core.seq.call(null,m);
var chunk__30319_30339 = null;
var count__30320_30340 = (0);
var i__30321_30341 = (0);
while(true){
if((i__30321_30341 < count__30320_30340)){
var vec__30330_30342 = cljs.core._nth.call(null,chunk__30319_30339,i__30321_30341);
var __30343 = cljs.core.nth.call(null,vec__30330_30342,(0),null);
var map__30333_30344 = cljs.core.nth.call(null,vec__30330_30342,(1),null);
var map__30333_30345__$1 = cljs.core.__destructure_map.call(null,map__30333_30344);
var sprite_30346 = cljs.core.get.call(null,map__30333_30345__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
cnt.addChild(sprite_30346);


var G__30347 = seq__30318_30338;
var G__30348 = chunk__30319_30339;
var G__30349 = count__30320_30340;
var G__30350 = (i__30321_30341 + (1));
seq__30318_30338 = G__30347;
chunk__30319_30339 = G__30348;
count__30320_30340 = G__30349;
i__30321_30341 = G__30350;
continue;
} else {
var temp__5804__auto___30351 = cljs.core.seq.call(null,seq__30318_30338);
if(temp__5804__auto___30351){
var seq__30318_30352__$1 = temp__5804__auto___30351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30318_30352__$1)){
var c__5565__auto___30353 = cljs.core.chunk_first.call(null,seq__30318_30352__$1);
var G__30354 = cljs.core.chunk_rest.call(null,seq__30318_30352__$1);
var G__30355 = c__5565__auto___30353;
var G__30356 = cljs.core.count.call(null,c__5565__auto___30353);
var G__30357 = (0);
seq__30318_30338 = G__30354;
chunk__30319_30339 = G__30355;
count__30320_30340 = G__30356;
i__30321_30341 = G__30357;
continue;
} else {
var vec__30334_30358 = cljs.core.first.call(null,seq__30318_30352__$1);
var __30359 = cljs.core.nth.call(null,vec__30334_30358,(0),null);
var map__30337_30360 = cljs.core.nth.call(null,vec__30334_30358,(1),null);
var map__30337_30361__$1 = cljs.core.__destructure_map.call(null,map__30337_30360);
var sprite_30362 = cljs.core.get.call(null,map__30337_30361__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
cnt.addChild(sprite_30362);


var G__30363 = cljs.core.next.call(null,seq__30318_30352__$1);
var G__30364 = null;
var G__30365 = (0);
var G__30366 = (0);
seq__30318_30338 = G__30363;
chunk__30319_30339 = G__30364;
count__30320_30340 = G__30365;
i__30321_30341 = G__30366;
continue;
}
} else {
}
}
break;
}

return cnt;
});
juliaworld.tiled.process_action = (function juliaworld$tiled$process_action(action){
return cljs.core.map.call(null,(function (p1__30367_SHARP_){
if(clojure.string.includes_QMARK_.call(null,p1__30367_SHARP_,"[")){
return cljs.core.re_seq.call(null,/\w+/,p1__30367_SHARP_);
} else {
return (new cljs.core.List(null,p1__30367_SHARP_,null,(1),null));
}
}),clojure.string.split.call(null,action,/\|/));
});
juliaworld.tiled.sprites_map__GT_info = (function juliaworld$tiled$sprites_map__GT_info(m){
return juliaworld.validation.validate.call(null,juliaworld.tiled.item_sprites_info,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,(function (){var iter__5520__auto__ = (function juliaworld$tiled$sprites_map__GT_info_$_iter__30368(s__30369){
return (new cljs.core.LazySeq(null,(function (){
var s__30369__$1 = s__30369;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__30369__$1);
if(temp__5804__auto__){
var s__30369__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30369__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__30369__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__30371 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__30370 = (0);
while(true){
if((i__30370 < size__5519__auto__)){
var vec__30372 = cljs.core._nth.call(null,c__5518__auto__,i__30370);
var c = cljs.core.nth.call(null,vec__30372,(0),null);
var map__30375 = cljs.core.nth.call(null,vec__30372,(1),null);
var map__30375__$1 = cljs.core.__destructure_map.call(null,map__30375);
var map__30376 = cljs.core.get.call(null,map__30375__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__30376__$1 = cljs.core.__destructure_map.call(null,map__30376);
var class$ = cljs.core.get.call(null,map__30376__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var action = cljs.core.get.call(null,map__30376__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var info = cljs.core.get.call(null,map__30375__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var sprite = cljs.core.get.call(null,map__30375__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
cljs.core.chunk_append.call(null,b__30371,(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["item",null], null), null).call(null,class$))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.merge.call(null,info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite,new cljs.core.Keyword(null,"action","action",-811238024),juliaworld.tiled.process_action.call(null,action)], null))], null):null));

var G__30382 = (i__30370 + (1));
i__30370 = G__30382;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30371),juliaworld$tiled$sprites_map__GT_info_$_iter__30368.call(null,cljs.core.chunk_rest.call(null,s__30369__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30371),null);
}
} else {
var vec__30377 = cljs.core.first.call(null,s__30369__$2);
var c = cljs.core.nth.call(null,vec__30377,(0),null);
var map__30380 = cljs.core.nth.call(null,vec__30377,(1),null);
var map__30380__$1 = cljs.core.__destructure_map.call(null,map__30380);
var map__30381 = cljs.core.get.call(null,map__30380__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__30381__$1 = cljs.core.__destructure_map.call(null,map__30381);
var class$ = cljs.core.get.call(null,map__30381__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var action = cljs.core.get.call(null,map__30381__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var info = cljs.core.get.call(null,map__30380__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var sprite = cljs.core.get.call(null,map__30380__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
return cljs.core.cons.call(null,(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["item",null], null), null).call(null,class$))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.merge.call(null,info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite,new cljs.core.Keyword(null,"action","action",-811238024),juliaworld.tiled.process_action.call(null,action)], null))], null):null),juliaworld$tiled$sprites_map__GT_info_$_iter__30368.call(null,cljs.core.rest.call(null,s__30369__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,m);
})())));
});
juliaworld.tiled.layer_data__GT_coord_sprites_info = (function juliaworld$tiled$layer_data__GT_coord_sprites_info(p__30383){
var map__30384 = p__30383;
var map__30384__$1 = cljs.core.__destructure_map.call(null,map__30384);
var data = cljs.core.get.call(null,map__30384__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var vec__30385 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-res","screen-res",1524431210)], null));
var xres = cljs.core.nth.call(null,vec__30385,(0),null);
var yres = cljs.core.nth.call(null,vec__30385,(1),null);
var vec__30388 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null));
var xtres = cljs.core.nth.call(null,vec__30388,(0),null);
var ytres = cljs.core.nth.call(null,vec__30388,(1),null);
var coords = (function (){var iter__5520__auto__ = (function juliaworld$tiled$layer_data__GT_coord_sprites_info_$_iter__30391(s__30392){
return (new cljs.core.LazySeq(null,(function (){
var s__30392__$1 = s__30392;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__30392__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__30392__$1,y,xs__6360__auto__,temp__5804__auto__,vec__30385,xres,yres,vec__30388,xtres,ytres,map__30384,map__30384__$1,data){
return (function juliaworld$tiled$layer_data__GT_coord_sprites_info_$_iter__30391_$_iter__30393(s__30394){
return (new cljs.core.LazySeq(null,((function (s__30392__$1,y,xs__6360__auto__,temp__5804__auto__,vec__30385,xres,yres,vec__30388,xtres,ytres,map__30384,map__30384__$1,data){
return (function (){
var s__30394__$1 = s__30394;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__30394__$1);
if(temp__5804__auto____$1){
var s__30394__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30394__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__30394__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__30396 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__30395 = (0);
while(true){
if((i__30395 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__30395);
cljs.core.chunk_append.call(null,b__30396,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__30413 = (i__30395 + (1));
i__30395 = G__30413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30396),juliaworld$tiled$layer_data__GT_coord_sprites_info_$_iter__30391_$_iter__30393.call(null,cljs.core.chunk_rest.call(null,s__30394__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30396),null);
}
} else {
var x = cljs.core.first.call(null,s__30394__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),juliaworld$tiled$layer_data__GT_coord_sprites_info_$_iter__30391_$_iter__30393.call(null,cljs.core.rest.call(null,s__30394__$2)));
}
} else {
return null;
}
break;
}
});})(s__30392__$1,y,xs__6360__auto__,temp__5804__auto__,vec__30385,xres,yres,vec__30388,xtres,ytres,map__30384,map__30384__$1,data))
,null,null));
});})(s__30392__$1,y,xs__6360__auto__,temp__5804__auto__,vec__30385,xres,yres,vec__30388,xtres,ytres,map__30384,map__30384__$1,data))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,cljs.core.range.call(null,(0),xres,xtres)));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,juliaworld$tiled$layer_data__GT_coord_sprites_info_$_iter__30391.call(null,cljs.core.rest.call(null,s__30392__$1)));
} else {
var G__30414 = cljs.core.rest.call(null,s__30392__$1);
s__30392__$1 = G__30414;
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
var sprites = cljs.core.filter.call(null,cljs.core.identity,(function (){var iter__5520__auto__ = (function juliaworld$tiled$layer_data__GT_coord_sprites_info_$_iter__30397(s__30398){
return (new cljs.core.LazySeq(null,(function (){
var s__30398__$1 = s__30398;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__30398__$1);
if(temp__5804__auto__){
var s__30398__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30398__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__30398__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__30400 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__30399 = (0);
while(true){
if((i__30399 < size__5519__auto__)){
var vec__30401 = cljs.core._nth.call(null,c__5518__auto__,i__30399);
var sid = cljs.core.nth.call(null,vec__30401,(0),null);
var vec__30404 = cljs.core.nth.call(null,vec__30401,(1),null);
var x = cljs.core.nth.call(null,vec__30404,(0),null);
var y = cljs.core.nth.call(null,vec__30404,(1),null);
cljs.core.chunk_append.call(null,b__30400,(function (){var temp__5804__auto____$1 = juliaworld.state.get_sprite.call(null,sid);
if(cljs.core.truth_(temp__5804__auto____$1)){
var s = temp__5804__auto____$1;
(s.x = x);

(s.y = y);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / xtres),(y / ytres)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sprite","sprite",172516848),s,new cljs.core.Keyword(null,"info","info",-317069002),juliaworld.state.sprite_info.call(null,sid)], null)], null);
} else {
return null;
}
})());

var G__30415 = (i__30399 + (1));
i__30399 = G__30415;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30400),juliaworld$tiled$layer_data__GT_coord_sprites_info_$_iter__30397.call(null,cljs.core.chunk_rest.call(null,s__30398__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30400),null);
}
} else {
var vec__30407 = cljs.core.first.call(null,s__30398__$2);
var sid = cljs.core.nth.call(null,vec__30407,(0),null);
var vec__30410 = cljs.core.nth.call(null,vec__30407,(1),null);
var x = cljs.core.nth.call(null,vec__30410,(0),null);
var y = cljs.core.nth.call(null,vec__30410,(1),null);
return cljs.core.cons.call(null,(function (){var temp__5804__auto____$1 = juliaworld.state.get_sprite.call(null,sid);
if(cljs.core.truth_(temp__5804__auto____$1)){
var s = temp__5804__auto____$1;
(s.x = x);

(s.y = y);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / xtres),(y / ytres)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sprite","sprite",172516848),s,new cljs.core.Keyword(null,"info","info",-317069002),juliaworld.state.sprite_info.call(null,sid)], null)], null);
} else {
return null;
}
})(),juliaworld$tiled$layer_data__GT_coord_sprites_info_$_iter__30397.call(null,cljs.core.rest.call(null,s__30398__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,data,coords));
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container","container",-1736937707),juliaworld.tiled.sprites_map__GT_container.call(null,sprites),new cljs.core.Keyword(null,"items","items",1031954938),juliaworld.tiled.sprites_map__GT_info.call(null,sprites)], null);
});
juliaworld.tiled.lowest_y_position = (function juliaworld$tiled$lowest_y_position(p__30416){
var map__30417 = p__30416;
var map__30417__$1 = cljs.core.__destructure_map.call(null,map__30417);
var layer = map__30417__$1;
var container = cljs.core.get.call(null,map__30417__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var vec__30418 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null));
var _ = cljs.core.nth.call(null,vec__30418,(0),null);
var ytres = cljs.core.nth.call(null,vec__30418,(1),null);
var lowest = (cljs.core.last.call(null,container.children).y / ytres);
return cljs.core.assoc.call(null,layer,new cljs.core.Keyword(null,"lowest-y","lowest-y",-1987829690),lowest);
});
juliaworld.tiled.add_layer_deps = (function juliaworld$tiled$add_layer_deps(layers,p__30424){
var map__30425 = p__30424;
var map__30425__$1 = cljs.core.__destructure_map.call(null,map__30425);
var layer = map__30425__$1;
var name = cljs.core.get.call(null,map__30425__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.assoc.call(null,layer,new cljs.core.Keyword(null,"deps","deps",1883360319),cljs.core.mapv.call(null,cljs.core.comp.call(null,cljs.core.keyword,new cljs.core.Keyword(null,"name","name",1843675177)),cljs.core.filter.call(null,(function (p1__30423_SHARP_){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__30423_SHARP_),"tilelayer")) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__30423_SHARP_),name)));
}),cljs.core.tree_seq.call(null,(function (p1__30421_SHARP_){
var or__5043__auto__ = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__30421_SHARP_);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(p1__30421_SHARP_);
}
}),(function (p1__30422_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__30422_SHARP_))){
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__30422_SHARP_).call(null,layers),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(p1__30422_SHARP_));
} else {
return new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(p1__30422_SHARP_);
}
}),layer))));
});
juliaworld.tiled.layers__GT_flat_map = (function juliaworld$tiled$layers__GT_flat_map(l){
var m = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__30426_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__30426_SHARP_)),p1__30426_SHARP_],null));
}),cljs.core.filter.call(null,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.tree_seq.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.Keyword(null,"layers","layers",1944875032),l))));
return cljs.core.update_vals.call(null,cljs.core.update_vals.call(null,cljs.core.update_vals.call(null,m,(function (p1__30427_SHARP_){
return juliaworld.tiled.add_layer_deps.call(null,m,p1__30427_SHARP_);
})),(function (p1__30428_SHARP_){
return cljs.core.dissoc.call(null,p1__30428_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
})),(function (p1__30429_SHARP_){
return cljs.core.dissoc.call(null,p1__30429_SHARP_,new cljs.core.Keyword(null,"layers","layers",1944875032));
}));
});
juliaworld.tiled.fix_layers_names = (function juliaworld$tiled$fix_layers_names(layer){
var fix_layer_name_f = (function (p__30431){
var map__30432 = p__30431;
var map__30432__$1 = cljs.core.__destructure_map.call(null,map__30432);
var o = map__30432__$1;
var name = cljs.core.get.call(null,map__30432__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.assoc.call(null,o,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(layer)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});
var fix_names = (function (l){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(l),"group")){
return cljs.core.update.call(null,l,new cljs.core.Keyword(null,"layers","layers",1944875032),(function (p1__30430_SHARP_){
return cljs.core.map.call(null,fix_layer_name_f,p1__30430_SHARP_);
}));
} else {
return l;
}
});
return clojure.walk.prewalk.call(null,fix_names,layer);
});
juliaworld.tiled.parse_layers = (function juliaworld$tiled$parse_layers(layers){
juliaworld.validation.validate.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [juliaworld.tiled.tiled_layers_sch], null),layers);

var fix_props = (function (p1__30433_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(p1__30433_SHARP_))){
return cljs.core.update.call(null,p1__30433_SHARP_,new cljs.core.Keyword(null,"properties","properties",685819552),juliaworld.helpers.props__GT_map);
} else {
return p1__30433_SHARP_;
}
});
var transform_data = (function (p1__30434_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__30434_SHARP_))){
return cljs.core.merge.call(null,p1__30434_SHARP_,juliaworld.tiled.layer_data__GT_coord_sprites_info.call(null,p1__30434_SHARP_));
} else {
return p1__30434_SHARP_;
}
});
var kwdz_parent = (function (p1__30435_SHARP_){
if(cljs.core.truth_(cljs.core.get_in.call(null,p1__30435_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"parent","parent",-878878779)], null)))){
return cljs.core.assoc.call(null,p1__30435_SHARP_,new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.keyword.call(null,cljs.core.get_in.call(null,p1__30435_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"parent","parent",-878878779)], null))));
} else {
return p1__30435_SHARP_;
}
});
var bottom_y = (function (p1__30436_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(p1__30436_SHARP_))){
return juliaworld.tiled.lowest_y_position.call(null,p1__30436_SHARP_);
} else {
return p1__30436_SHARP_;
}
});
var tr_fn = cljs.core.comp.call(null,bottom_y,kwdz_parent,fix_props,transform_data);
return juliaworld.state.add_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n-levels","n-levels",-657990795)], null),cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__30437_SHARP_){
return cljs.core.re_matches.call(null,/level-[0-9]/,p1__30437_SHARP_);
}),cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layers","layers",1944875032)], null),juliaworld.validation.validate.call(null,juliaworld.tiled.processed_layers_sch,juliaworld.tiled.layers__GT_flat_map.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"layers","layers",1944875032)],[cljs.core.map.call(null,juliaworld.tiled.fix_layers_names,clojure.walk.postwalk.call(null,tr_fn,layers))]))))))))));
});
juliaworld.tiled.parse_configs = (function juliaworld$tiled$parse_configs(){
var map__30438 = cljs.core.js__GT_clj.call(null,juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404)], null)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__30438__$1 = cljs.core.__destructure_map.call(null,map__30438);
var scene = map__30438__$1;
var layers = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
juliaworld.tiled.parse_game_resolution.call(null,scene);

return juliaworld.tiled.parse_layers.call(null,layers);
});
juliaworld.tiled.spritesheet_data = (function juliaworld$tiled$spritesheet_data(image,width,height,tilesize,firstgid){
juliaworld.validation.validate.call(null,cljs.core.mapv.call(null,schema.core.one,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str,schema.core.Num,schema.core.Num,schema.core.Num,schema.core.Num], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [image,width,height,tilesize,firstgid], null));

return cljs.core.clj__GT_js.call(null,juliaworld.validation.validate.call(null,juliaworld.tiled.spritesheet_data_sch,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"animations","animations",140711296),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"image","image",-58725096),image,new cljs.core.Keyword(null,"format","format",-1306924766),"RGBA8888",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),width,new cljs.core.Keyword(null,"h","h",1109658740),height], null)], null)], null),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (idx,frame){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(firstgid + idx),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frame","frame",-1711082588),frame,new cljs.core.Keyword(null,"sourceSize","sourceSize",118436133),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),tilesize,new cljs.core.Keyword(null,"h","h",1109658740),tilesize], null),new cljs.core.Keyword(null,"spriteSourceSize","spriteSourceSize",2065197971),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),tilesize,new cljs.core.Keyword(null,"h","h",1109658740),tilesize], null)], null)], null);
}),(function (){var iter__5520__auto__ = (function juliaworld$tiled$spritesheet_data_$_iter__30439(s__30440){
return (new cljs.core.LazySeq(null,(function (){
var s__30440__$1 = s__30440;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__30440__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__30440__$1,y,xs__6360__auto__,temp__5804__auto__){
return (function juliaworld$tiled$spritesheet_data_$_iter__30439_$_iter__30441(s__30442){
return (new cljs.core.LazySeq(null,((function (s__30440__$1,y,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__30442__$1 = s__30442;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__30442__$1);
if(temp__5804__auto____$1){
var s__30442__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30442__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__30442__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__30444 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__30443 = (0);
while(true){
if((i__30443 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__30443);
cljs.core.chunk_append.call(null,b__30444,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),tilesize,new cljs.core.Keyword(null,"h","h",1109658740),tilesize], null));

var G__30445 = (i__30443 + (1));
i__30443 = G__30445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30444),juliaworld$tiled$spritesheet_data_$_iter__30439_$_iter__30441.call(null,cljs.core.chunk_rest.call(null,s__30442__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30444),null);
}
} else {
var x = cljs.core.first.call(null,s__30442__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),tilesize,new cljs.core.Keyword(null,"h","h",1109658740),tilesize], null),juliaworld$tiled$spritesheet_data_$_iter__30439_$_iter__30441.call(null,cljs.core.rest.call(null,s__30442__$2)));
}
} else {
return null;
}
break;
}
});})(s__30440__$1,y,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__30440__$1,y,xs__6360__auto__,temp__5804__auto__))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,cljs.core.range.call(null,(0),width,tilesize)));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,juliaworld$tiled$spritesheet_data_$_iter__30439.call(null,cljs.core.rest.call(null,s__30440__$1)));
} else {
var G__30446 = cljs.core.rest.call(null,s__30440__$1);
s__30440__$1 = G__30446;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,cljs.core.range.call(null,(0),height,tilesize));
})())))));
});
juliaworld.tiled.tiles__GT_animation_info = (function juliaworld$tiled$tiles__GT_animation_info(tiles,firstgid){
juliaworld.validation.validate.call(null,cljs.core.mapv.call(null,schema.core.one,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [juliaworld.tiled.tile_sch], null),schema.core.Num], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiles,firstgid], null));

var anim_tiles = cljs.core.filter.call(null,new cljs.core.Keyword(null,"animation","animation",-1248293244),tiles);
var parse_item = (function (p__30448){
var map__30449 = p__30448;
var map__30449__$1 = cljs.core.__destructure_map.call(null,map__30449);
var animation = cljs.core.get.call(null,map__30449__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var properties = cljs.core.get.call(null,map__30449__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var map__30450 = juliaworld.helpers.props__GT_map.call(null,properties);
var map__30450__$1 = cljs.core.__destructure_map.call(null,map__30450);
var ani_name = cljs.core.get.call(null,map__30450__$1,new cljs.core.Keyword(null,"ani-name","ani-name",-301190318));
var basex = cljs.core.get.call(null,map__30450__$1,new cljs.core.Keyword(null,"basex","basex",-610151236));
var basey = cljs.core.get.call(null,map__30450__$1,new cljs.core.Keyword(null,"basey","basey",-430302880));
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.call(null,ani_name),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"duration","duration",1444101068),(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,animation)) / (1000)),new cljs.core.Keyword(null,"basex","basex",-610151236),basex,new cljs.core.Keyword(null,"basey","basey",-430302880),basey,new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.map.call(null,(function (p1__30447_SHARP_){
return (firstgid + new cljs.core.Keyword(null,"tileid","tileid",508020796).cljs$core$IFn$_invoke$arity$1(p1__30447_SHARP_));
}),animation)], null)],null));
});
return juliaworld.validation.validate.call(null,juliaworld.tiled.ani_info_sch,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,parse_item,anim_tiles)));
});
juliaworld.tiled.create_animations = (function juliaworld$tiled$create_animations(ani_info,textures){
juliaworld.validation.validate.call(null,cljs.core.mapv.call(null,schema.core.one,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [juliaworld.tiled.ani_info_sch,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Str,juliaworld.validation.jsType.call(null,PIXI.Texture)])], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ani_info,textures], null));

return cljs.core.update_vals.call(null,ani_info,(function (p__30452){
var map__30453 = p__30452;
var map__30453__$1 = cljs.core.__destructure_map.call(null,map__30453);
var duration = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var ids = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var basex = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"basex","basex",-610151236));
var basey = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"basey","basey",-430302880));
var sprite = (new PIXI.AnimatedSprite(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__30451_SHARP_){
return cljs.core.get.call(null,textures,p1__30451_SHARP_);
}),cljs.core.map.call(null,cljs.core.str,ids)))));
if((duration > (0))){
(sprite.animationSpeed = 0.1);
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite,new cljs.core.Keyword(null,"basex","basex",-610151236),basex,new cljs.core.Keyword(null,"basey","basey",-430302880),basey], null);
}));
});
juliaworld.tiled.tileset__GT_textures = (function juliaworld$tiled$tileset__GT_textures(p__30456){
var map__30457 = p__30456;
var map__30457__$1 = cljs.core.__destructure_map.call(null,map__30457);
var tset = map__30457__$1;
var imagewidth = cljs.core.get.call(null,map__30457__$1,new cljs.core.Keyword(null,"imagewidth","imagewidth",-1534474065));
var imageheight = cljs.core.get.call(null,map__30457__$1,new cljs.core.Keyword(null,"imageheight","imageheight",-656351799));
var image = cljs.core.get.call(null,map__30457__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var tileheight = cljs.core.get.call(null,map__30457__$1,new cljs.core.Keyword(null,"tileheight","tileheight",1971050793));
var tiles = cljs.core.get.call(null,map__30457__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
var firstgid = cljs.core.get.call(null,map__30457__$1,new cljs.core.Keyword(null,"firstgid","firstgid",1659571107));
juliaworld.validation.validate.call(null,juliaworld.tiled.tileset_sch,tset);

return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,null),(function (___27444__auto__){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.tiled.spritesheet_data.call(null,image,imagewidth,imageheight,tileheight,firstgid)),(function (data){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.tiled.tiles__GT_animation_info.call(null,tiles,firstgid)),(function (animations){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,(new PIXI.Spritesheet(juliaworld.helpers.getPixiTexture.call(null,image),data))),(function (spritesheet){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,spritesheet.parse()),(function (textures){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,cljs.core.update_vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__30454_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(firstgid + new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30454_SHARP_)),p1__30454_SHARP_],null));
}),tiles)),(function (p1__30455_SHARP_){
return cljs.core.update.call(null,p1__30455_SHARP_,new cljs.core.Keyword(null,"properties","properties",685819552),juliaworld.helpers.props__GT_map);
}))),(function (tiles__$1){
return promesa.protocols._promise.call(null,(function (){var textures__$1 = cljs.core.js__GT_clj.call(null,textures);
cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.update,new cljs.core.Keyword(null,"animations","animations",140711296),cljs.core.merge,juliaworld.tiled.create_animations.call(null,animations,textures__$1));

return juliaworld.validation.validate.call(null,juliaworld.tiled.textures_sch,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__30458){
var vec__30459 = p__30458;
var id = cljs.core.nth.call(null,vec__30459,(0),null);
var texture = cljs.core.nth.call(null,vec__30459,(1),null);
var id__$1 = juliaworld.helpers.__GT_num.call(null,id);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[id__$1,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sprite","sprite",172516848),texture], null),cljs.core.get.call(null,tiles__$1,id__$1))],null));
}),textures__$1)));
})());
}));
}));
}));
}));
}));
}));
});
juliaworld.tiled.load_scenes = (function juliaworld$tiled$load_scenes(){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,null),(function (___27444__auto__){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,fetch("stages.tmj")),(function (scenes){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,scenes.text()),(function (txt){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.state.add_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404)], null),JSON.parse(txt))),(function (___27412__auto__){
return promesa.protocols._promise.call(null,promesa.core.then.call(null,promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,null),(function (___27444__auto____$1){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,cljs.core.js__GT_clj.call(null,juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404)], null)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)),(function (p__30463){
var map__30464 = p__30463;
var map__30464__$1 = cljs.core.__destructure_map.call(null,map__30464);
var width = cljs.core.get.call(null,map__30464__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__30464__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var layers = cljs.core.get.call(null,map__30464__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var tilesets = cljs.core.get.call(null,map__30464__$1,new cljs.core.Keyword(null,"tilesets","tilesets",2106493894));
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.tiled.load_textures.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__30465){
var map__30466 = p__30465;
var map__30466__$1 = cljs.core.__destructure_map.call(null,map__30466);
var image = cljs.core.get.call(null,map__30466__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var name = cljs.core.get.call(null,map__30466__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,name),image], null);
}),tilesets)))),(function (_){
return promesa.protocols._promise.call(null,(function (){var $ = tilesets;
var $__$1 = cljs.core.mapv.call(null,juliaworld.tiled.tileset__GT_textures,$);
var $__$2 = promesa.core.all.call(null,$__$1);
return promesa.core.then.call(null,$__$2,(function (p1__30462_SHARP_){
var G__30467 = p1__30462_SHARP_;
var G__30467__$1 = (((G__30467 == null))?null:cljs.core.apply.call(null,cljs.core.merge,G__30467));
if((G__30467__$1 == null)){
return null;
} else {
return juliaworld.state.save_sprites.call(null,G__30467__$1);
}
}));
})());
}));
}));
})),(function (){
return juliaworld.tiled.parse_configs.call(null);
})));
}));
}));
}));
}));
});

//# sourceMappingURL=tiled.js.map

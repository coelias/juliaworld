// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('juliaworld.tiled');
goog.require('cljs.core');
goog.require('juliaworld.state');
goog.require('juliaworld.helpers');
goog.require('juliaworld.validation');
goog.require('promesa.core');
goog.require('clojure.string');
goog.require('schema.core');
juliaworld.tiled.tile_sch = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Num,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"properties","properties",685819552)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),schema.core.enum$.call(null,"basex","basey","ani-name","collision","type"),new cljs.core.Keyword(null,"type","type",1174270348),schema.core.Str,new cljs.core.Keyword(null,"value","value",305978217),schema.core.Any], null)], null),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"animation","animation",-1248293244)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),schema.core.Num,new cljs.core.Keyword(null,"tileid","tileid",508020796),schema.core.Num], null)], null),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"type","type",1174270348)),schema.core.Str]);
juliaworld.tiled.tileset_sch = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tilecount","tilecount",-1061649439),new cljs.core.Keyword(null,"firstgid","firstgid",1659571107),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tileheight","tileheight",1971050793),new cljs.core.Keyword(null,"imageheight","imageheight",-656351799),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"wangsets","wangsets",-1015308516)),new cljs.core.Keyword(null,"tilewidth","tilewidth",-711038610),new cljs.core.Keyword(null,"imagewidth","imagewidth",-1534474065),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.Keyword(null,"spacing","spacing",204422175),new cljs.core.Keyword(null,"margin","margin",-995903681)],[schema.core.Num,schema.core.Num,schema.core.Num,schema.core.Str,schema.core.Num,schema.core.Num,schema.core.Any,schema.core.Num,schema.core.Num,schema.core.Str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [juliaworld.tiled.tile_sch], null),schema.core.Num,schema.core.Num]);
juliaworld.tiled.textures_sch = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.cond_pre.call(null,schema.core.Keyword,schema.core.Num),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"sprite","sprite",172516848),juliaworld.validation.jsType.call(null,PIXI.Texture),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),schema.core.maybe.call(null,schema.core.Num),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"properties","properties",685819552)),cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.cond_pre.call(null,schema.core.Num,schema.core.Str)]),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"type","type",1174270348)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"animation","animation",-1248293244)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),schema.core.Num,new cljs.core.Keyword(null,"tileid","tileid",508020796),schema.core.Num], null)], null)])]);
juliaworld.tiled.ani_info_sch = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"duration","duration",1444101068),schema.core.Num,new cljs.core.Keyword(null,"basex","basex",-610151236),schema.core.maybe.call(null,schema.core.Num),new cljs.core.Keyword(null,"basey","basey",-430302880),schema.core.maybe.call(null,schema.core.Num),new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Num], null)], null)]);
juliaworld.tiled.animation_sch = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sprite","sprite",172516848),juliaworld.validation.jsType.call(null,PIXI.AnimatedSprite),new cljs.core.Keyword(null,"basex","basex",-610151236),schema.core.Num,new cljs.core.Keyword(null,"basey","basey",-430302880),schema.core.Num], null)]);
juliaworld.tiled.tiled_layers_sch = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"properties","properties",685819552)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"height","height",1025178622)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"width","width",-384071477)),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"data","data",-232669377)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032)),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"visible","visible",-1024216805)],[schema.core.Num,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),schema.core.Str,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.Str,new cljs.core.Keyword(null,"value","value",305978217),schema.core.Any], null)], null),schema.core.Num,schema.core.Num,schema.core.Str,schema.core.Str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Num], null),schema.core.Any,schema.core.Num,schema.core.Num,schema.core.Num,schema.core.Bool]);
juliaworld.tiled.processed_layers_sch = cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"properties","properties",685819552)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"height","height",1025178622)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"width","width",-384071477)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"container","container",-1736937707)),new cljs.core.Keyword(null,"type","type",1174270348),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779)),new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"deps","deps",1883360319)],[schema.core.Num,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.Any]),schema.core.Num,schema.core.Num,juliaworld.validation.jsType.call(null,PIXI.Container),schema.core.Str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Num], null),schema.core.Num,schema.core.Num,schema.core.Num,schema.core.Keyword,schema.core.Bool,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null)])]);
juliaworld.tiled.spritesheet_data_sch = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"animations","animations",140711296),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"image","image",-58725096),schema.core.Str,new cljs.core.Keyword(null,"format","format",-1306924766),schema.core.Str,new cljs.core.Keyword(null,"scale","scale",-230427353),schema.core.Num,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),schema.core.Num,new cljs.core.Keyword(null,"h","h",1109658740),schema.core.Num], null)], null),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Num,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),schema.core.Num,new cljs.core.Keyword(null,"y","y",-1757859776),schema.core.Num,new cljs.core.Keyword(null,"h","h",1109658740),schema.core.Num,new cljs.core.Keyword(null,"w","w",354169001),schema.core.Num], null),new cljs.core.Keyword(null,"sourceSize","sourceSize",118436133),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"h","h",1109658740),schema.core.Num,new cljs.core.Keyword(null,"w","w",354169001),schema.core.Num], null),new cljs.core.Keyword(null,"spriteSourceSize","spriteSourceSize",2065197971),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),schema.core.Num,new cljs.core.Keyword(null,"y","y",-1757859776),schema.core.Num,new cljs.core.Keyword(null,"h","h",1109658740),schema.core.Num,new cljs.core.Keyword(null,"w","w",354169001),schema.core.Num], null)], null)])], null);
juliaworld.tiled.load_textures = (function juliaworld$tiled$load_textures(m){
juliaworld.validation.validate.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.core.Str]),m);

var promises = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p__22849){
var vec__22850 = p__22849;
var k = cljs.core.nth.call(null,vec__22850,(0),null);
var v = cljs.core.nth.call(null,vec__22850,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.core.promise.call(null,k),PIXI.Assets.load(v)], null);
}),m));
return promesa.core.then.call(null,promesa.core.all.call(null,promises),(function (p1__22848_SHARP_){
var $ = p1__22848_SHARP_;
var $__$1 = cljs.core.apply.call(null,cljs.core.hash_map,$);
var $__$2 = cljs.core.update_vals.call(null,$__$1,(function (v){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sprite","sprite",172516848)],[v]);
}));
return juliaworld.state.save_sprites.call(null,$__$2);
}));
});
juliaworld.tiled.parse_game_resolution = (function juliaworld$tiled$parse_game_resolution(scene){
var map__22853 = scene;
var map__22853__$1 = cljs.core.__destructure_map.call(null,map__22853);
var tilewidth = cljs.core.get.call(null,map__22853__$1,new cljs.core.Keyword(null,"tilewidth","tilewidth",-711038610));
var tileheight = cljs.core.get.call(null,map__22853__$1,new cljs.core.Keyword(null,"tileheight","tileheight",1971050793));
var height = cljs.core.get.call(null,map__22853__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__22853__$1,new cljs.core.Keyword(null,"width","width",-384071477));
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
return cljs.core.mapv.call(null,cljs.core.last,cljs.core.map.call(null,(function (p1__22854_SHARP_){
return cljs.core.filter.call(null,(function (x){
return (x > (0));
}),p1__22854_SHARP_);
}),cljs.core.apply.call(null,cljs.core.map,cljs.core.cons.call(null,cljs.core.vector,layers))));
});
juliaworld.tiled.layer_data__GT_sprites = (function juliaworld$tiled$layer_data__GT_sprites(p__22855){
var map__22856 = p__22855;
var map__22856__$1 = cljs.core.__destructure_map.call(null,map__22856);
var data = cljs.core.get.call(null,map__22856__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var vec__22857 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-res","screen-res",1524431210)], null));
var xres = cljs.core.nth.call(null,vec__22857,(0),null);
var yres = cljs.core.nth.call(null,vec__22857,(1),null);
var vec__22860 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null));
var xtres = cljs.core.nth.call(null,vec__22860,(0),null);
var ytres = cljs.core.nth.call(null,vec__22860,(1),null);
var coords = (function (){var iter__5520__auto__ = (function juliaworld$tiled$layer_data__GT_sprites_$_iter__22863(s__22864){
return (new cljs.core.LazySeq(null,(function (){
var s__22864__$1 = s__22864;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__22864__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__22864__$1,y,xs__6360__auto__,temp__5804__auto__,vec__22857,xres,yres,vec__22860,xtres,ytres,map__22856,map__22856__$1,data){
return (function juliaworld$tiled$layer_data__GT_sprites_$_iter__22863_$_iter__22865(s__22866){
return (new cljs.core.LazySeq(null,((function (s__22864__$1,y,xs__6360__auto__,temp__5804__auto__,vec__22857,xres,yres,vec__22860,xtres,ytres,map__22856,map__22856__$1,data){
return (function (){
var s__22866__$1 = s__22866;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__22866__$1);
if(temp__5804__auto____$1){
var s__22866__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22866__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__22866__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__22868 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__22867 = (0);
while(true){
if((i__22867 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__22867);
cljs.core.chunk_append.call(null,b__22868,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__22897 = (i__22867 + (1));
i__22867 = G__22897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22868),juliaworld$tiled$layer_data__GT_sprites_$_iter__22863_$_iter__22865.call(null,cljs.core.chunk_rest.call(null,s__22866__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22868),null);
}
} else {
var x = cljs.core.first.call(null,s__22866__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),juliaworld$tiled$layer_data__GT_sprites_$_iter__22863_$_iter__22865.call(null,cljs.core.rest.call(null,s__22866__$2)));
}
} else {
return null;
}
break;
}
});})(s__22864__$1,y,xs__6360__auto__,temp__5804__auto__,vec__22857,xres,yres,vec__22860,xtres,ytres,map__22856,map__22856__$1,data))
,null,null));
});})(s__22864__$1,y,xs__6360__auto__,temp__5804__auto__,vec__22857,xres,yres,vec__22860,xtres,ytres,map__22856,map__22856__$1,data))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,cljs.core.range.call(null,(0),xres,xtres)));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,juliaworld$tiled$layer_data__GT_sprites_$_iter__22863.call(null,cljs.core.rest.call(null,s__22864__$1)));
} else {
var G__22898 = cljs.core.rest.call(null,s__22864__$1);
s__22864__$1 = G__22898;
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
var seq__22869_22899 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,data,coords));
var chunk__22870_22900 = null;
var count__22871_22901 = (0);
var i__22872_22902 = (0);
while(true){
if((i__22872_22902 < count__22871_22901)){
var vec__22885_22903 = cljs.core._nth.call(null,chunk__22870_22900,i__22872_22902);
var sid_22904 = cljs.core.nth.call(null,vec__22885_22903,(0),null);
var vec__22888_22905 = cljs.core.nth.call(null,vec__22885_22903,(1),null);
var x_22906 = cljs.core.nth.call(null,vec__22888_22905,(0),null);
var y_22907 = cljs.core.nth.call(null,vec__22888_22905,(1),null);
var temp__5804__auto___22908 = juliaworld.state.get_sprite.call(null,sid_22904);
if(cljs.core.truth_(temp__5804__auto___22908)){
var s_22909 = temp__5804__auto___22908;
(s_22909.x = x_22906);

(s_22909.y = y_22907);

cnt.addChild(s_22909);
} else {
}


var G__22910 = seq__22869_22899;
var G__22911 = chunk__22870_22900;
var G__22912 = count__22871_22901;
var G__22913 = (i__22872_22902 + (1));
seq__22869_22899 = G__22910;
chunk__22870_22900 = G__22911;
count__22871_22901 = G__22912;
i__22872_22902 = G__22913;
continue;
} else {
var temp__5804__auto___22914 = cljs.core.seq.call(null,seq__22869_22899);
if(temp__5804__auto___22914){
var seq__22869_22915__$1 = temp__5804__auto___22914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22869_22915__$1)){
var c__5565__auto___22916 = cljs.core.chunk_first.call(null,seq__22869_22915__$1);
var G__22917 = cljs.core.chunk_rest.call(null,seq__22869_22915__$1);
var G__22918 = c__5565__auto___22916;
var G__22919 = cljs.core.count.call(null,c__5565__auto___22916);
var G__22920 = (0);
seq__22869_22899 = G__22917;
chunk__22870_22900 = G__22918;
count__22871_22901 = G__22919;
i__22872_22902 = G__22920;
continue;
} else {
var vec__22891_22921 = cljs.core.first.call(null,seq__22869_22915__$1);
var sid_22922 = cljs.core.nth.call(null,vec__22891_22921,(0),null);
var vec__22894_22923 = cljs.core.nth.call(null,vec__22891_22921,(1),null);
var x_22924 = cljs.core.nth.call(null,vec__22894_22923,(0),null);
var y_22925 = cljs.core.nth.call(null,vec__22894_22923,(1),null);
var temp__5804__auto___22926__$1 = juliaworld.state.get_sprite.call(null,sid_22922);
if(cljs.core.truth_(temp__5804__auto___22926__$1)){
var s_22927 = temp__5804__auto___22926__$1;
(s_22927.x = x_22924);

(s_22927.y = y_22925);

cnt.addChild(s_22927);
} else {
}


var G__22928 = cljs.core.next.call(null,seq__22869_22915__$1);
var G__22929 = null;
var G__22930 = (0);
var G__22931 = (0);
seq__22869_22899 = G__22928;
chunk__22870_22900 = G__22929;
count__22871_22901 = G__22930;
i__22872_22902 = G__22931;
continue;
}
} else {
}
}
break;
}

return cnt;
});
juliaworld.tiled.add_layer_deps = (function juliaworld$tiled$add_layer_deps(layers,p__22935){
var map__22936 = p__22935;
var map__22936__$1 = cljs.core.__destructure_map.call(null,map__22936);
var layer = map__22936__$1;
var name = cljs.core.get.call(null,map__22936__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.assoc.call(null,layer,new cljs.core.Keyword(null,"deps","deps",1883360319),cljs.core.mapv.call(null,cljs.core.comp.call(null,cljs.core.keyword,new cljs.core.Keyword(null,"name","name",1843675177)),cljs.core.filter.call(null,(function (p1__22934_SHARP_){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__22934_SHARP_),"tilelayer")) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__22934_SHARP_),name)));
}),cljs.core.tree_seq.call(null,(function (p1__22932_SHARP_){
var or__5043__auto__ = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__22932_SHARP_);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(p1__22932_SHARP_);
}
}),(function (p1__22933_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__22933_SHARP_))){
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__22933_SHARP_).call(null,layers),new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(p1__22933_SHARP_));
} else {
return new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(p1__22933_SHARP_);
}
}),layer))));
});
juliaworld.tiled.layers__GT_flat_map = (function juliaworld$tiled$layers__GT_flat_map(l){
var m = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__22937_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__22937_SHARP_)),p1__22937_SHARP_],null));
}),cljs.core.filter.call(null,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.tree_seq.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.Keyword(null,"layers","layers",1944875032),l))));
return cljs.core.update_vals.call(null,cljs.core.update_vals.call(null,cljs.core.update_vals.call(null,m,(function (p1__22938_SHARP_){
return juliaworld.tiled.add_layer_deps.call(null,m,p1__22938_SHARP_);
})),(function (p1__22939_SHARP_){
return cljs.core.dissoc.call(null,p1__22939_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
})),(function (p1__22940_SHARP_){
return cljs.core.dissoc.call(null,p1__22940_SHARP_,new cljs.core.Keyword(null,"layers","layers",1944875032));
}));
});
juliaworld.tiled.fix_layers_names = (function juliaworld$tiled$fix_layers_names(layer){
var fix_layer_name_f = (function (p__22942){
var map__22943 = p__22942;
var map__22943__$1 = cljs.core.__destructure_map.call(null,map__22943);
var o = map__22943__$1;
var name = cljs.core.get.call(null,map__22943__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.assoc.call(null,o,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(layer)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});
var fix_names = (function (l){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(l),"group")){
return cljs.core.update.call(null,l,new cljs.core.Keyword(null,"layers","layers",1944875032),(function (p1__22941_SHARP_){
return cljs.core.map.call(null,fix_layer_name_f,p1__22941_SHARP_);
}));
} else {
return l;
}
});
return clojure.walk.prewalk.call(null,fix_names,layer);
});
juliaworld.tiled.parse_layers = (function juliaworld$tiled$parse_layers(layers){
juliaworld.validation.validate.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [juliaworld.tiled.tiled_layers_sch], null),layers);

var fix_props = (function (p1__22944_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(p1__22944_SHARP_))){
return cljs.core.update.call(null,p1__22944_SHARP_,new cljs.core.Keyword(null,"properties","properties",685819552),juliaworld.helpers.props__GT_map);
} else {
return p1__22944_SHARP_;
}
});
var transform_data = (function (p1__22945_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__22945_SHARP_))){
return cljs.core.assoc.call(null,p1__22945_SHARP_,new cljs.core.Keyword(null,"container","container",-1736937707),juliaworld.tiled.layer_data__GT_sprites.call(null,p1__22945_SHARP_));
} else {
return p1__22945_SHARP_;
}
});
var kwdz_parent = (function (p1__22946_SHARP_){
if(cljs.core.truth_(cljs.core.get_in.call(null,p1__22946_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"parent","parent",-878878779)], null)))){
return cljs.core.assoc.call(null,p1__22946_SHARP_,new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.keyword.call(null,cljs.core.get_in.call(null,p1__22946_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"parent","parent",-878878779)], null))));
} else {
return p1__22946_SHARP_;
}
});
var tr_fn = cljs.core.comp.call(null,kwdz_parent,fix_props,transform_data);
return cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layers","layers",1944875032)], null),juliaworld.validation.validate.call(null,juliaworld.tiled.processed_layers_sch,juliaworld.tiled.layers__GT_flat_map.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"layers","layers",1944875032)],[cljs.core.map.call(null,juliaworld.tiled.fix_layers_names,clojure.walk.postwalk.call(null,tr_fn,layers))]))));
});
juliaworld.tiled.parse_configs = (function juliaworld$tiled$parse_configs(){
var map__22947 = cljs.core.js__GT_clj.call(null,juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404)], null)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__22947__$1 = cljs.core.__destructure_map.call(null,map__22947);
var scene = map__22947__$1;
var layers = cljs.core.get.call(null,map__22947__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
juliaworld.tiled.parse_game_resolution.call(null,scene);

return juliaworld.tiled.parse_layers.call(null,layers);
});
juliaworld.tiled.jslog = (function juliaworld$tiled$jslog(x){
console.log(x);

return x;
});
juliaworld.tiled.spritesheet_data = (function juliaworld$tiled$spritesheet_data(image,width,height,tilesize,firstgid){
juliaworld.validation.validate.call(null,cljs.core.mapv.call(null,schema.core.one,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str,schema.core.Num,schema.core.Num,schema.core.Num,schema.core.Num], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [image,width,height,tilesize,firstgid], null));

return cljs.core.clj__GT_js.call(null,juliaworld.validation.validate.call(null,juliaworld.tiled.spritesheet_data_sch,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"animations","animations",140711296),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"image","image",-58725096),image,new cljs.core.Keyword(null,"format","format",-1306924766),"RGBA8888",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),width,new cljs.core.Keyword(null,"h","h",1109658740),height], null)], null)], null),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (idx,frame){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(firstgid + idx),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frame","frame",-1711082588),frame,new cljs.core.Keyword(null,"sourceSize","sourceSize",118436133),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),tilesize,new cljs.core.Keyword(null,"h","h",1109658740),tilesize], null),new cljs.core.Keyword(null,"spriteSourceSize","spriteSourceSize",2065197971),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),tilesize,new cljs.core.Keyword(null,"h","h",1109658740),tilesize], null)], null)], null);
}),(function (){var iter__5520__auto__ = (function juliaworld$tiled$spritesheet_data_$_iter__22948(s__22949){
return (new cljs.core.LazySeq(null,(function (){
var s__22949__$1 = s__22949;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__22949__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__22949__$1,y,xs__6360__auto__,temp__5804__auto__){
return (function juliaworld$tiled$spritesheet_data_$_iter__22948_$_iter__22950(s__22951){
return (new cljs.core.LazySeq(null,((function (s__22949__$1,y,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__22951__$1 = s__22951;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__22951__$1);
if(temp__5804__auto____$1){
var s__22951__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22951__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__22951__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__22953 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__22952 = (0);
while(true){
if((i__22952 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__22952);
cljs.core.chunk_append.call(null,b__22953,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),tilesize,new cljs.core.Keyword(null,"h","h",1109658740),tilesize], null));

var G__22954 = (i__22952 + (1));
i__22952 = G__22954;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22953),juliaworld$tiled$spritesheet_data_$_iter__22948_$_iter__22950.call(null,cljs.core.chunk_rest.call(null,s__22951__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22953),null);
}
} else {
var x = cljs.core.first.call(null,s__22951__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),tilesize,new cljs.core.Keyword(null,"h","h",1109658740),tilesize], null),juliaworld$tiled$spritesheet_data_$_iter__22948_$_iter__22950.call(null,cljs.core.rest.call(null,s__22951__$2)));
}
} else {
return null;
}
break;
}
});})(s__22949__$1,y,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__22949__$1,y,xs__6360__auto__,temp__5804__auto__))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,cljs.core.range.call(null,(0),width,tilesize)));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,juliaworld$tiled$spritesheet_data_$_iter__22948.call(null,cljs.core.rest.call(null,s__22949__$1)));
} else {
var G__22955 = cljs.core.rest.call(null,s__22949__$1);
s__22949__$1 = G__22955;
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
var parse_item = (function (p__22957){
var map__22958 = p__22957;
var map__22958__$1 = cljs.core.__destructure_map.call(null,map__22958);
var animation = cljs.core.get.call(null,map__22958__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var properties = cljs.core.get.call(null,map__22958__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var map__22959 = juliaworld.helpers.props__GT_map.call(null,properties);
var map__22959__$1 = cljs.core.__destructure_map.call(null,map__22959);
var ani_name = cljs.core.get.call(null,map__22959__$1,new cljs.core.Keyword(null,"ani-name","ani-name",-301190318));
var basex = cljs.core.get.call(null,map__22959__$1,new cljs.core.Keyword(null,"basex","basex",-610151236));
var basey = cljs.core.get.call(null,map__22959__$1,new cljs.core.Keyword(null,"basey","basey",-430302880));
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.call(null,ani_name),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"duration","duration",1444101068),(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,animation)) / (1000)),new cljs.core.Keyword(null,"basex","basex",-610151236),basex,new cljs.core.Keyword(null,"basey","basey",-430302880),basey,new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.map.call(null,(function (p1__22956_SHARP_){
return (firstgid + new cljs.core.Keyword(null,"tileid","tileid",508020796).cljs$core$IFn$_invoke$arity$1(p1__22956_SHARP_));
}),animation)], null)],null));
});
return juliaworld.validation.validate.call(null,juliaworld.tiled.ani_info_sch,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,parse_item,anim_tiles)));
});
juliaworld.tiled.create_animations = (function juliaworld$tiled$create_animations(ani_info,textures){
juliaworld.validation.validate.call(null,cljs.core.mapv.call(null,schema.core.one,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [juliaworld.tiled.ani_info_sch,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Str,juliaworld.validation.jsType.call(null,PIXI.Texture)])], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ani_info,textures], null));

return cljs.core.update_vals.call(null,ani_info,(function (p__22961){
var map__22962 = p__22961;
var map__22962__$1 = cljs.core.__destructure_map.call(null,map__22962);
var duration = cljs.core.get.call(null,map__22962__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var ids = cljs.core.get.call(null,map__22962__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var basex = cljs.core.get.call(null,map__22962__$1,new cljs.core.Keyword(null,"basex","basex",-610151236));
var basey = cljs.core.get.call(null,map__22962__$1,new cljs.core.Keyword(null,"basey","basey",-430302880));
var sprite = (new PIXI.AnimatedSprite(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__22960_SHARP_){
return cljs.core.get.call(null,textures,p1__22960_SHARP_);
}),cljs.core.map.call(null,cljs.core.str,ids)))));
if((duration > (0))){
(sprite.animationSpeed = 0.1);
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite,new cljs.core.Keyword(null,"basex","basex",-610151236),basex,new cljs.core.Keyword(null,"basey","basey",-430302880),basey], null);
}));
});
juliaworld.tiled.tileset__GT_textures = (function juliaworld$tiled$tileset__GT_textures(p__22965){
var map__22966 = p__22965;
var map__22966__$1 = cljs.core.__destructure_map.call(null,map__22966);
var tset = map__22966__$1;
var imagewidth = cljs.core.get.call(null,map__22966__$1,new cljs.core.Keyword(null,"imagewidth","imagewidth",-1534474065));
var imageheight = cljs.core.get.call(null,map__22966__$1,new cljs.core.Keyword(null,"imageheight","imageheight",-656351799));
var image = cljs.core.get.call(null,map__22966__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var tileheight = cljs.core.get.call(null,map__22966__$1,new cljs.core.Keyword(null,"tileheight","tileheight",1971050793));
var tiles = cljs.core.get.call(null,map__22966__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
var firstgid = cljs.core.get.call(null,map__22966__$1,new cljs.core.Keyword(null,"firstgid","firstgid",1659571107));
juliaworld.validation.validate.call(null,juliaworld.tiled.tileset_sch,tset);

return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,null),(function (___11488__auto__){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.tiled.spritesheet_data.call(null,image,imagewidth,imageheight,tileheight,firstgid)),(function (data){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.tiled.tiles__GT_animation_info.call(null,tiles,firstgid)),(function (animations){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,(new PIXI.Spritesheet(juliaworld.helpers.getPixiTexture.call(null,image),data))),(function (spritesheet){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,spritesheet.parse()),(function (textures){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,cljs.core.update_vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__22963_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(firstgid + new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__22963_SHARP_)),p1__22963_SHARP_],null));
}),tiles)),(function (p1__22964_SHARP_){
return cljs.core.update.call(null,p1__22964_SHARP_,new cljs.core.Keyword(null,"properties","properties",685819552),juliaworld.helpers.props__GT_map);
}))),(function (tiles__$1){
return promesa.protocols._promise.call(null,(function (){var textures__$1 = cljs.core.js__GT_clj.call(null,textures);
cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.assoc,new cljs.core.Keyword(null,"animations","animations",140711296),juliaworld.tiled.create_animations.call(null,animations,textures__$1));

return juliaworld.validation.validate.call(null,juliaworld.tiled.textures_sch,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__22967){
var vec__22968 = p__22967;
var id = cljs.core.nth.call(null,vec__22968,(0),null);
var texture = cljs.core.nth.call(null,vec__22968,(1),null);
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
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,null),(function (___11488__auto__){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,fetch("stages.tmj")),(function (scenes){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,scenes.text()),(function (txt){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.state.add_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404)], null),JSON.parse(txt))),(function (___11456__auto__){
return promesa.protocols._promise.call(null,promesa.core.then.call(null,promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,null),(function (___11488__auto____$1){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,cljs.core.js__GT_clj.call(null,juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404)], null)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)),(function (p__22972){
var map__22973 = p__22972;
var map__22973__$1 = cljs.core.__destructure_map.call(null,map__22973);
var width = cljs.core.get.call(null,map__22973__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__22973__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var layers = cljs.core.get.call(null,map__22973__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var tilesets = cljs.core.get.call(null,map__22973__$1,new cljs.core.Keyword(null,"tilesets","tilesets",2106493894));
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.tiled.load_textures.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__22974){
var map__22975 = p__22974;
var map__22975__$1 = cljs.core.__destructure_map.call(null,map__22975);
var image = cljs.core.get.call(null,map__22975__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var name = cljs.core.get.call(null,map__22975__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,name),image], null);
}),tilesets)))),(function (_){
return promesa.protocols._promise.call(null,(function (){var $ = tilesets;
var $__$1 = cljs.core.mapv.call(null,juliaworld.tiled.tileset__GT_textures,$);
var $__$2 = promesa.core.all.call(null,$__$1);
return promesa.core.then.call(null,$__$2,(function (p1__22971_SHARP_){
var G__22976 = p1__22971_SHARP_;
var G__22976__$1 = (((G__22976 == null))?null:cljs.core.apply.call(null,cljs.core.merge,G__22976));
if((G__22976__$1 == null)){
return null;
} else {
return juliaworld.state.save_sprites.call(null,G__22976__$1);
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

// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('juliaworld.tiled');
goog.require('cljs.core');
goog.require('juliaworld.state');
goog.require('juliaworld.helpers');
goog.require('promesa.core');
goog.require('clojure.string');
juliaworld.tiled.load_textures = (function juliaworld$tiled$load_textures(m){
var promises = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p__20031){
var vec__20032 = p__20031;
var k = cljs.core.nth.call(null,vec__20032,(0),null);
var v = cljs.core.nth.call(null,vec__20032,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [promesa.core.promise.call(null,k),PIXI.Assets.load(v)], null);
}),m));
return promesa.core.then.call(null,promesa.core.all.call(null,promises),(function (p1__20030_SHARP_){
var $ = p1__20030_SHARP_;
var $__$1 = cljs.core.apply.call(null,cljs.core.hash_map,$);
var $__$2 = cljs.core.update_vals.call(null,$__$1,(function (v){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sprite","sprite",172516848)],[v]);
}));
return juliaworld.state.save_sprites.call(null,$__$2);
}));
});
juliaworld.tiled.parse_game_resolution = (function juliaworld$tiled$parse_game_resolution(scene){
var map__20035 = scene;
var map__20035__$1 = cljs.core.__destructure_map.call(null,map__20035);
var tilewidth = cljs.core.get.call(null,map__20035__$1,new cljs.core.Keyword(null,"tilewidth","tilewidth",-711038610));
var tileheight = cljs.core.get.call(null,map__20035__$1,new cljs.core.Keyword(null,"tileheight","tileheight",1971050793));
var layers = cljs.core.get.call(null,map__20035__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var map__20036 = cljs.core.first.call(null,layers);
var map__20036__$1 = cljs.core.__destructure_map.call(null,map__20036);
var height = cljs.core.get.call(null,map__20036__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__20036__$1,new cljs.core.Keyword(null,"width","width",-384071477));
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
return cljs.core.mapv.call(null,cljs.core.last,cljs.core.map.call(null,(function (p1__20037_SHARP_){
return cljs.core.filter.call(null,(function (x){
return (x > (0));
}),p1__20037_SHARP_);
}),cljs.core.apply.call(null,cljs.core.map,cljs.core.cons.call(null,cljs.core.vector,layers))));
});
juliaworld.tiled.get_grid_texture = (function juliaworld$tiled$get_grid_texture(){
var vec__20038 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null));
var w = cljs.core.nth.call(null,vec__20038,(0),null);
var h = cljs.core.nth.call(null,vec__20038,(1),null);
var pr = (new PIXI.Graphics());
var c = (new PIXI.Container());
c.addChild(pr);

pr.moveTo((1),(0));

pr.lineTo(w,(0)).stroke(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),0.08], null)));

pr.moveTo((0),(0));

pr.lineTo((0),h).stroke(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),0.08], null)));

return juliaworld.state.get_app.call(null).renderer.generateTexture(pr);
});
juliaworld.tiled.generate_sprite_containers = (function juliaworld$tiled$generate_sprite_containers(data_objs){
var vec__20041 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-res","screen-res",1524431210)], null));
var xres = cljs.core.nth.call(null,vec__20041,(0),null);
var yres = cljs.core.nth.call(null,vec__20041,(1),null);
var vec__20044 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null));
var xtres = cljs.core.nth.call(null,vec__20044,(0),null);
var ytres = cljs.core.nth.call(null,vec__20044,(1),null);
var coords = (function (){var iter__5520__auto__ = (function juliaworld$tiled$generate_sprite_containers_$_iter__20047(s__20048){
return (new cljs.core.LazySeq(null,(function (){
var s__20048__$1 = s__20048;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__20048__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__20048__$1,y,xs__6360__auto__,temp__5804__auto__,vec__20041,xres,yres,vec__20044,xtres,ytres){
return (function juliaworld$tiled$generate_sprite_containers_$_iter__20047_$_iter__20049(s__20050){
return (new cljs.core.LazySeq(null,((function (s__20048__$1,y,xs__6360__auto__,temp__5804__auto__,vec__20041,xres,yres,vec__20044,xtres,ytres){
return (function (){
var s__20050__$1 = s__20050;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__20050__$1);
if(temp__5804__auto____$1){
var s__20050__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20050__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__20050__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__20052 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__20051 = (0);
while(true){
if((i__20051 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__20051);
cljs.core.chunk_append.call(null,b__20052,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__20161 = (i__20051 + (1));
i__20051 = G__20161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20052),juliaworld$tiled$generate_sprite_containers_$_iter__20047_$_iter__20049.call(null,cljs.core.chunk_rest.call(null,s__20050__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20052),null);
}
} else {
var x = cljs.core.first.call(null,s__20050__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),juliaworld$tiled$generate_sprite_containers_$_iter__20047_$_iter__20049.call(null,cljs.core.rest.call(null,s__20050__$2)));
}
} else {
return null;
}
break;
}
});})(s__20048__$1,y,xs__6360__auto__,temp__5804__auto__,vec__20041,xres,yres,vec__20044,xtres,ytres))
,null,null));
});})(s__20048__$1,y,xs__6360__auto__,temp__5804__auto__,vec__20041,xres,yres,vec__20044,xtres,ytres))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,cljs.core.range.call(null,(0),xres,xtres)));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,juliaworld$tiled$generate_sprite_containers_$_iter__20047.call(null,cljs.core.rest.call(null,s__20048__$1)));
} else {
var G__20162 = cljs.core.rest.call(null,s__20048__$1);
s__20048__$1 = G__20162;
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
var container = (new PIXI.Container());
var grid_container = (new PIXI.Container());
var grid_texture = juliaworld.tiled.get_grid_texture.call(null);
var seq__20053_20163 = cljs.core.seq.call(null,data_objs);
var chunk__20058_20164 = null;
var count__20059_20165 = (0);
var i__20060_20166 = (0);
while(true){
if((i__20060_20166 < count__20059_20165)){
var data_20167 = cljs.core._nth.call(null,chunk__20058_20164,i__20060_20166);
var seq__20061_20168 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,data_20167,coords));
var chunk__20062_20169 = null;
var count__20063_20170 = (0);
var i__20064_20171 = (0);
while(true){
if((i__20064_20171 < count__20063_20170)){
var vec__20125_20172 = cljs.core._nth.call(null,chunk__20062_20169,i__20064_20171);
var sid_20173 = cljs.core.nth.call(null,vec__20125_20172,(0),null);
var vec__20128_20174 = cljs.core.nth.call(null,vec__20125_20172,(1),null);
var x_20175 = cljs.core.nth.call(null,vec__20128_20174,(0),null);
var y_20176 = cljs.core.nth.call(null,vec__20128_20174,(1),null);
var temp__5804__auto___20177 = juliaworld.state.get_sprite.call(null,sid_20173);
if(cljs.core.truth_(temp__5804__auto___20177)){
var s_20178 = temp__5804__auto___20177;
(s_20178.x = x_20175);

(s_20178.y = y_20176);

container.addChild(s_20178);

var sp_20179 = (new PIXI.Sprite(grid_texture));
grid_container.addChild(sp_20179);

(sp_20179.x = x_20175);

(sp_20179.y = y_20176);
} else {
}


var G__20180 = seq__20061_20168;
var G__20181 = chunk__20062_20169;
var G__20182 = count__20063_20170;
var G__20183 = (i__20064_20171 + (1));
seq__20061_20168 = G__20180;
chunk__20062_20169 = G__20181;
count__20063_20170 = G__20182;
i__20064_20171 = G__20183;
continue;
} else {
var temp__5804__auto___20184 = cljs.core.seq.call(null,seq__20061_20168);
if(temp__5804__auto___20184){
var seq__20061_20185__$1 = temp__5804__auto___20184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20061_20185__$1)){
var c__5565__auto___20186 = cljs.core.chunk_first.call(null,seq__20061_20185__$1);
var G__20187 = cljs.core.chunk_rest.call(null,seq__20061_20185__$1);
var G__20188 = c__5565__auto___20186;
var G__20189 = cljs.core.count.call(null,c__5565__auto___20186);
var G__20190 = (0);
seq__20061_20168 = G__20187;
chunk__20062_20169 = G__20188;
count__20063_20170 = G__20189;
i__20064_20171 = G__20190;
continue;
} else {
var vec__20131_20191 = cljs.core.first.call(null,seq__20061_20185__$1);
var sid_20192 = cljs.core.nth.call(null,vec__20131_20191,(0),null);
var vec__20134_20193 = cljs.core.nth.call(null,vec__20131_20191,(1),null);
var x_20194 = cljs.core.nth.call(null,vec__20134_20193,(0),null);
var y_20195 = cljs.core.nth.call(null,vec__20134_20193,(1),null);
var temp__5804__auto___20196__$1 = juliaworld.state.get_sprite.call(null,sid_20192);
if(cljs.core.truth_(temp__5804__auto___20196__$1)){
var s_20197 = temp__5804__auto___20196__$1;
(s_20197.x = x_20194);

(s_20197.y = y_20195);

container.addChild(s_20197);

var sp_20198 = (new PIXI.Sprite(grid_texture));
grid_container.addChild(sp_20198);

(sp_20198.x = x_20194);

(sp_20198.y = y_20195);
} else {
}


var G__20199 = cljs.core.next.call(null,seq__20061_20185__$1);
var G__20200 = null;
var G__20201 = (0);
var G__20202 = (0);
seq__20061_20168 = G__20199;
chunk__20062_20169 = G__20200;
count__20063_20170 = G__20201;
i__20064_20171 = G__20202;
continue;
}
} else {
}
}
break;
}

var G__20203 = seq__20053_20163;
var G__20204 = chunk__20058_20164;
var G__20205 = count__20059_20165;
var G__20206 = (i__20060_20166 + (1));
seq__20053_20163 = G__20203;
chunk__20058_20164 = G__20204;
count__20059_20165 = G__20205;
i__20060_20166 = G__20206;
continue;
} else {
var temp__5804__auto___20207 = cljs.core.seq.call(null,seq__20053_20163);
if(temp__5804__auto___20207){
var seq__20053_20208__$1 = temp__5804__auto___20207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20053_20208__$1)){
var c__5565__auto___20209 = cljs.core.chunk_first.call(null,seq__20053_20208__$1);
var G__20210 = cljs.core.chunk_rest.call(null,seq__20053_20208__$1);
var G__20211 = c__5565__auto___20209;
var G__20212 = cljs.core.count.call(null,c__5565__auto___20209);
var G__20213 = (0);
seq__20053_20163 = G__20210;
chunk__20058_20164 = G__20211;
count__20059_20165 = G__20212;
i__20060_20166 = G__20213;
continue;
} else {
var data_20214 = cljs.core.first.call(null,seq__20053_20208__$1);
var seq__20054_20215 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,data_20214,coords));
var chunk__20055_20216 = null;
var count__20056_20217 = (0);
var i__20057_20218 = (0);
while(true){
if((i__20057_20218 < count__20056_20217)){
var vec__20149_20219 = cljs.core._nth.call(null,chunk__20055_20216,i__20057_20218);
var sid_20220 = cljs.core.nth.call(null,vec__20149_20219,(0),null);
var vec__20152_20221 = cljs.core.nth.call(null,vec__20149_20219,(1),null);
var x_20222 = cljs.core.nth.call(null,vec__20152_20221,(0),null);
var y_20223 = cljs.core.nth.call(null,vec__20152_20221,(1),null);
var temp__5804__auto___20224__$1 = juliaworld.state.get_sprite.call(null,sid_20220);
if(cljs.core.truth_(temp__5804__auto___20224__$1)){
var s_20225 = temp__5804__auto___20224__$1;
(s_20225.x = x_20222);

(s_20225.y = y_20223);

container.addChild(s_20225);

var sp_20226 = (new PIXI.Sprite(grid_texture));
grid_container.addChild(sp_20226);

(sp_20226.x = x_20222);

(sp_20226.y = y_20223);
} else {
}


var G__20227 = seq__20054_20215;
var G__20228 = chunk__20055_20216;
var G__20229 = count__20056_20217;
var G__20230 = (i__20057_20218 + (1));
seq__20054_20215 = G__20227;
chunk__20055_20216 = G__20228;
count__20056_20217 = G__20229;
i__20057_20218 = G__20230;
continue;
} else {
var temp__5804__auto___20231__$1 = cljs.core.seq.call(null,seq__20054_20215);
if(temp__5804__auto___20231__$1){
var seq__20054_20232__$1 = temp__5804__auto___20231__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20054_20232__$1)){
var c__5565__auto___20233 = cljs.core.chunk_first.call(null,seq__20054_20232__$1);
var G__20234 = cljs.core.chunk_rest.call(null,seq__20054_20232__$1);
var G__20235 = c__5565__auto___20233;
var G__20236 = cljs.core.count.call(null,c__5565__auto___20233);
var G__20237 = (0);
seq__20054_20215 = G__20234;
chunk__20055_20216 = G__20235;
count__20056_20217 = G__20236;
i__20057_20218 = G__20237;
continue;
} else {
var vec__20155_20238 = cljs.core.first.call(null,seq__20054_20232__$1);
var sid_20239 = cljs.core.nth.call(null,vec__20155_20238,(0),null);
var vec__20158_20240 = cljs.core.nth.call(null,vec__20155_20238,(1),null);
var x_20241 = cljs.core.nth.call(null,vec__20158_20240,(0),null);
var y_20242 = cljs.core.nth.call(null,vec__20158_20240,(1),null);
var temp__5804__auto___20243__$2 = juliaworld.state.get_sprite.call(null,sid_20239);
if(cljs.core.truth_(temp__5804__auto___20243__$2)){
var s_20244 = temp__5804__auto___20243__$2;
(s_20244.x = x_20241);

(s_20244.y = y_20242);

container.addChild(s_20244);

var sp_20245 = (new PIXI.Sprite(grid_texture));
grid_container.addChild(sp_20245);

(sp_20245.x = x_20241);

(sp_20245.y = y_20242);
} else {
}


var G__20246 = cljs.core.next.call(null,seq__20054_20232__$1);
var G__20247 = null;
var G__20248 = (0);
var G__20249 = (0);
seq__20054_20215 = G__20246;
chunk__20055_20216 = G__20247;
count__20056_20217 = G__20248;
i__20057_20218 = G__20249;
continue;
}
} else {
}
}
break;
}

var G__20250 = cljs.core.next.call(null,seq__20053_20208__$1);
var G__20251 = null;
var G__20252 = (0);
var G__20253 = (0);
seq__20053_20163 = G__20250;
chunk__20058_20164 = G__20251;
count__20059_20165 = G__20252;
i__20060_20166 = G__20253;
continue;
}
} else {
}
}
break;
}

(container.x = (0));

(container.y = (0));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",-1736937707),container,new cljs.core.Keyword(null,"grid-container","grid-container",1369553755),grid_container,new cljs.core.Keyword(null,"data","data",-232669377),juliaworld.tiled.merge_layers.call(null,data_objs)], null);
});
juliaworld.tiled.parse_background_layers = (function juliaworld$tiled$parse_background_layers(p__20254){
var vec__20255 = p__20254;
var _ = cljs.core.nth.call(null,vec__20255,(0),null);
var layers = cljs.core.nth.call(null,vec__20255,(1),null);
var bg_layers = cljs.core.filter.call(null,(function (p__20259){
var map__20260 = p__20259;
var map__20260__$1 = cljs.core.__destructure_map.call(null,map__20260);
var name = cljs.core.get.call(null,map__20260__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return clojure.string.includes_QMARK_.call(null,name,"background");
}),layers);
var layer_data = juliaworld.tiled.generate_sprite_containers.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"data","data",-232669377),bg_layers));
var map__20258 = juliaworld.helpers.props__GT_map.call(null,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,bg_layers)));
var map__20258__$1 = cljs.core.__destructure_map.call(null,map__20258);
var herox = cljs.core.get.call(null,map__20258__$1,new cljs.core.Keyword(null,"herox","herox",2034186716));
var heroy = cljs.core.get.call(null,map__20258__$1,new cljs.core.Keyword(null,"heroy","heroy",-1136789549));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,layer_data,new cljs.core.Keyword(null,"herox","herox",2034186716),herox),new cljs.core.Keyword(null,"heroy","heroy",-1136789549),heroy);
});
juliaworld.tiled.parse_layers = (function juliaworld$tiled$parse_layers(layers){

var layer_groups = cljs.core.sort_by.call(null,cljs.core.first,cljs.core.group_by.call(null,(function (p1__20261_SHARP_){
return cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20261_SHARP_),/-/));
}),layers));
var parsed_lgs = cljs.core.map.call(null,juliaworld.tiled.parse_background_layers,layer_groups);
return cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layers","layers",1944875032)], null),parsed_lgs);
});
juliaworld.tiled.parse_configs = (function juliaworld$tiled$parse_configs(){
var map__20262 = cljs.core.js__GT_clj.call(null,juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404)], null)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__20262__$1 = cljs.core.__destructure_map.call(null,map__20262);
var scene = map__20262__$1;
var layers = cljs.core.get.call(null,map__20262__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
juliaworld.tiled.parse_game_resolution.call(null,scene);

return juliaworld.tiled.parse_layers.call(null,layers);
});
juliaworld.tiled.spritesheet_data = (function juliaworld$tiled$spritesheet_data(image,width,height,tilesize,firstgid){
return cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"animations","animations",140711296),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"image","image",-58725096),image,new cljs.core.Keyword(null,"format","format",-1306924766),"RGBA8888",new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),width,new cljs.core.Keyword(null,"h","h",1109658740),height], null)], null)], null),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (idx,frame){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(firstgid + idx),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frame","frame",-1711082588),frame,new cljs.core.Keyword(null,"sourceSize","sourceSize",118436133),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),tilesize,new cljs.core.Keyword(null,"h","h",1109658740),tilesize], null),new cljs.core.Keyword(null,"spriteSourceSize","spriteSourceSize",2065197971),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),tilesize,new cljs.core.Keyword(null,"h","h",1109658740),tilesize], null)], null)], null);
}),(function (){var iter__5520__auto__ = (function juliaworld$tiled$spritesheet_data_$_iter__20263(s__20264){
return (new cljs.core.LazySeq(null,(function (){
var s__20264__$1 = s__20264;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__20264__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__20264__$1,y,xs__6360__auto__,temp__5804__auto__){
return (function juliaworld$tiled$spritesheet_data_$_iter__20263_$_iter__20265(s__20266){
return (new cljs.core.LazySeq(null,((function (s__20264__$1,y,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__20266__$1 = s__20266;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__20266__$1);
if(temp__5804__auto____$1){
var s__20266__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20266__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__20266__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__20268 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__20267 = (0);
while(true){
if((i__20267 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__20267);
cljs.core.chunk_append.call(null,b__20268,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),tilesize,new cljs.core.Keyword(null,"h","h",1109658740),tilesize], null));

var G__20269 = (i__20267 + (1));
i__20267 = G__20269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20268),juliaworld$tiled$spritesheet_data_$_iter__20263_$_iter__20265.call(null,cljs.core.chunk_rest.call(null,s__20266__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20268),null);
}
} else {
var x = cljs.core.first.call(null,s__20266__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),tilesize,new cljs.core.Keyword(null,"h","h",1109658740),tilesize], null),juliaworld$tiled$spritesheet_data_$_iter__20263_$_iter__20265.call(null,cljs.core.rest.call(null,s__20266__$2)));
}
} else {
return null;
}
break;
}
});})(s__20264__$1,y,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__20264__$1,y,xs__6360__auto__,temp__5804__auto__))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,cljs.core.range.call(null,(0),width,tilesize)));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,juliaworld$tiled$spritesheet_data_$_iter__20263.call(null,cljs.core.rest.call(null,s__20264__$1)));
} else {
var G__20270 = cljs.core.rest.call(null,s__20264__$1);
s__20264__$1 = G__20270;
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
})()))));
});
juliaworld.tiled.tiles__GT_animation_info = (function juliaworld$tiled$tiles__GT_animation_info(tileset,firstgid){
var anim_tiles = cljs.core.filter.call(null,new cljs.core.Keyword(null,"animation","animation",-1248293244),tileset);
var parse_item = (function (p__20272){
var map__20273 = p__20272;
var map__20273__$1 = cljs.core.__destructure_map.call(null,map__20273);
var animation = cljs.core.get.call(null,map__20273__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var properties = cljs.core.get.call(null,map__20273__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var map__20274 = juliaworld.helpers.props__GT_map.call(null,properties);
var map__20274__$1 = cljs.core.__destructure_map.call(null,map__20274);
var ani_name = cljs.core.get.call(null,map__20274__$1,new cljs.core.Keyword(null,"ani-name","ani-name",-301190318));
var basex = cljs.core.get.call(null,map__20274__$1,new cljs.core.Keyword(null,"basex","basex",-610151236));
var basey = cljs.core.get.call(null,map__20274__$1,new cljs.core.Keyword(null,"basey","basey",-430302880));
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.call(null,ani_name),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"duration","duration",1444101068),(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,animation)) / (1000)),new cljs.core.Keyword(null,"basex","basex",-610151236),basex,new cljs.core.Keyword(null,"basey","basey",-430302880),basey,new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.map.call(null,(function (p1__20271_SHARP_){
return (firstgid + new cljs.core.Keyword(null,"tileid","tileid",508020796).cljs$core$IFn$_invoke$arity$1(p1__20271_SHARP_));
}),animation)], null)],null));
});
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,parse_item,anim_tiles));
});
juliaworld.tiled.create_animations = (function juliaworld$tiled$create_animations(ani_info,textures){
return cljs.core.update_vals.call(null,ani_info,(function (p__20276){
var map__20277 = p__20276;
var map__20277__$1 = cljs.core.__destructure_map.call(null,map__20277);
var duration = cljs.core.get.call(null,map__20277__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var ids = cljs.core.get.call(null,map__20277__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var basex = cljs.core.get.call(null,map__20277__$1,new cljs.core.Keyword(null,"basex","basex",-610151236));
var basey = cljs.core.get.call(null,map__20277__$1,new cljs.core.Keyword(null,"basey","basey",-430302880));
var sprite = (new PIXI.AnimatedSprite(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__20275_SHARP_){
return cljs.core.get.call(null,textures,p1__20275_SHARP_);
}),cljs.core.map.call(null,cljs.core.str,ids)))));
if((duration > (0))){
(sprite.animationSpeed = 0.1);
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sprite","sprite",172516848),sprite,new cljs.core.Keyword(null,"basex","basex",-610151236),basex,new cljs.core.Keyword(null,"basey","basey",-430302880),basey], null);
}));
});
juliaworld.tiled.tileset__GT_textures = (function juliaworld$tiled$tileset__GT_textures(p__20280){
var map__20281 = p__20280;
var map__20281__$1 = cljs.core.__destructure_map.call(null,map__20281);
var imagewidth = cljs.core.get.call(null,map__20281__$1,new cljs.core.Keyword(null,"imagewidth","imagewidth",-1534474065));
var imageheight = cljs.core.get.call(null,map__20281__$1,new cljs.core.Keyword(null,"imageheight","imageheight",-656351799));
var image = cljs.core.get.call(null,map__20281__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var tileheight = cljs.core.get.call(null,map__20281__$1,new cljs.core.Keyword(null,"tileheight","tileheight",1971050793));
var tiles = cljs.core.get.call(null,map__20281__$1,new cljs.core.Keyword(null,"tiles","tiles",178505240));
var firstgid = cljs.core.get.call(null,map__20281__$1,new cljs.core.Keyword(null,"firstgid","firstgid",1659571107));
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,null),(function (___11488__auto__){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.tiled.spritesheet_data.call(null,image,imagewidth,imageheight,tileheight,firstgid)),(function (data){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.tiled.tiles__GT_animation_info.call(null,tiles,firstgid)),(function (animations){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,(new PIXI.Spritesheet(juliaworld.helpers.getPixiTexture.call(null,image),data))),(function (spritesheet){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,spritesheet.parse()),(function (textures){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,cljs.core.update_vals.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__20278_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(firstgid + new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20278_SHARP_)),p1__20278_SHARP_],null));
}),tiles)),(function (p1__20279_SHARP_){
return cljs.core.update.call(null,p1__20279_SHARP_,new cljs.core.Keyword(null,"properties","properties",685819552),juliaworld.helpers.props__GT_map);
}))),(function (tiles__$1){
return promesa.protocols._promise.call(null,(function (){var textures__$1 = cljs.core.js__GT_clj.call(null,textures);
cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.assoc,new cljs.core.Keyword(null,"animations","animations",140711296),juliaworld.tiled.create_animations.call(null,animations,textures__$1));

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20282){
var vec__20283 = p__20282;
var id = cljs.core.nth.call(null,vec__20283,(0),null);
var texture = cljs.core.nth.call(null,vec__20283,(1),null);
var id__$1 = juliaworld.helpers.__GT_num.call(null,id);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[id__$1,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sprite","sprite",172516848),texture], null),cljs.core.get.call(null,tiles__$1,id__$1))],null));
}),textures__$1));
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
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,fetch("/stages.tmj")),(function (scenes){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,scenes.text()),(function (txt){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.state.add_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404)], null),JSON.parse(txt))),(function (___11456__auto__){
return promesa.protocols._promise.call(null,promesa.core.then.call(null,promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,null),(function (___11488__auto____$1){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,cljs.core.js__GT_clj.call(null,juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404)], null)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)),(function (p__20287){
var map__20288 = p__20287;
var map__20288__$1 = cljs.core.__destructure_map.call(null,map__20288);
var width = cljs.core.get.call(null,map__20288__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__20288__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var layers = cljs.core.get.call(null,map__20288__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var tilesets = cljs.core.get.call(null,map__20288__$1,new cljs.core.Keyword(null,"tilesets","tilesets",2106493894));
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.tiled.load_textures.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__20289){
var map__20290 = p__20289;
var map__20290__$1 = cljs.core.__destructure_map.call(null,map__20290);
var image = cljs.core.get.call(null,map__20290__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var name = cljs.core.get.call(null,map__20290__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,name),image], null);
}),tilesets)))),(function (_){
return promesa.protocols._promise.call(null,(function (){var $ = tilesets;
var $__$1 = cljs.core.mapv.call(null,juliaworld.tiled.tileset__GT_textures,$);
var $__$2 = promesa.core.all.call(null,$__$1);
return promesa.core.then.call(null,$__$2,(function (p1__20286_SHARP_){
return juliaworld.state.save_sprites.call(null,cljs.core.apply.call(null,cljs.core.merge,p1__20286_SHARP_));
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

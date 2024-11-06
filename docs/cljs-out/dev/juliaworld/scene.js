// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('juliaworld.scene');
goog.require('cljs.core');
goog.require('juliaworld.state');
goog.require('juliaworld.hero');
goog.require('pixi');
juliaworld.scene.get_grid_texture = (function juliaworld$scene$get_grid_texture(){
var vec__20027 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null));
var w = cljs.core.nth.call(null,vec__20027,(0),null);
var h = cljs.core.nth.call(null,vec__20027,(1),null);
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
var vec__20030 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-res","screen-res",1524431210)], null));
var xres = cljs.core.nth.call(null,vec__20030,(0),null);
var yres = cljs.core.nth.call(null,vec__20030,(1),null);
var vec__20033 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null));
var xtres = cljs.core.nth.call(null,vec__20033,(0),null);
var ytres = cljs.core.nth.call(null,vec__20033,(1),null);
var coords = (function (){var iter__5520__auto__ = (function juliaworld$scene$iter__20036(s__20037){
return (new cljs.core.LazySeq(null,(function (){
var s__20037__$1 = s__20037;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__20037__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__20037__$1,y,xs__6360__auto__,temp__5804__auto__,gt,vec__20030,xres,yres,vec__20033,xtres,ytres){
return (function juliaworld$scene$iter__20036_$_iter__20038(s__20039){
return (new cljs.core.LazySeq(null,((function (s__20037__$1,y,xs__6360__auto__,temp__5804__auto__,gt,vec__20030,xres,yres,vec__20033,xtres,ytres){
return (function (){
var s__20039__$1 = s__20039;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__20039__$1);
if(temp__5804__auto____$1){
var s__20039__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20039__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__20039__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__20041 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__20040 = (0);
while(true){
if((i__20040 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__20040);
cljs.core.chunk_append.call(null,b__20041,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__20058 = (i__20040 + (1));
i__20040 = G__20058;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20041),juliaworld$scene$iter__20036_$_iter__20038.call(null,cljs.core.chunk_rest.call(null,s__20039__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20041),null);
}
} else {
var x = cljs.core.first.call(null,s__20039__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),juliaworld$scene$iter__20036_$_iter__20038.call(null,cljs.core.rest.call(null,s__20039__$2)));
}
} else {
return null;
}
break;
}
});})(s__20037__$1,y,xs__6360__auto__,temp__5804__auto__,gt,vec__20030,xres,yres,vec__20033,xtres,ytres))
,null,null));
});})(s__20037__$1,y,xs__6360__auto__,temp__5804__auto__,gt,vec__20030,xres,yres,vec__20033,xtres,ytres))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,cljs.core.range.call(null,(0),xres,xtres)));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,juliaworld$scene$iter__20036.call(null,cljs.core.rest.call(null,s__20037__$1)));
} else {
var G__20059 = cljs.core.rest.call(null,s__20037__$1);
s__20037__$1 = G__20059;
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
var seq__20042_20060 = cljs.core.seq.call(null,coords);
var chunk__20043_20061 = null;
var count__20044_20062 = (0);
var i__20045_20063 = (0);
while(true){
if((i__20045_20063 < count__20044_20062)){
var vec__20052_20064 = cljs.core._nth.call(null,chunk__20043_20061,i__20045_20063);
var x_20065 = cljs.core.nth.call(null,vec__20052_20064,(0),null);
var y_20066 = cljs.core.nth.call(null,vec__20052_20064,(1),null);
var sp_20067 = (new PIXI.Sprite(gt));
cnt.addChild(sp_20067);

(sp_20067.x = x_20065);

(sp_20067.y = y_20066);


var G__20068 = seq__20042_20060;
var G__20069 = chunk__20043_20061;
var G__20070 = count__20044_20062;
var G__20071 = (i__20045_20063 + (1));
seq__20042_20060 = G__20068;
chunk__20043_20061 = G__20069;
count__20044_20062 = G__20070;
i__20045_20063 = G__20071;
continue;
} else {
var temp__5804__auto___20072 = cljs.core.seq.call(null,seq__20042_20060);
if(temp__5804__auto___20072){
var seq__20042_20073__$1 = temp__5804__auto___20072;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20042_20073__$1)){
var c__5565__auto___20074 = cljs.core.chunk_first.call(null,seq__20042_20073__$1);
var G__20075 = cljs.core.chunk_rest.call(null,seq__20042_20073__$1);
var G__20076 = c__5565__auto___20074;
var G__20077 = cljs.core.count.call(null,c__5565__auto___20074);
var G__20078 = (0);
seq__20042_20060 = G__20075;
chunk__20043_20061 = G__20076;
count__20044_20062 = G__20077;
i__20045_20063 = G__20078;
continue;
} else {
var vec__20055_20079 = cljs.core.first.call(null,seq__20042_20073__$1);
var x_20080 = cljs.core.nth.call(null,vec__20055_20079,(0),null);
var y_20081 = cljs.core.nth.call(null,vec__20055_20079,(1),null);
var sp_20082 = (new PIXI.Sprite(gt));
cnt.addChild(sp_20082);

(sp_20082.x = x_20080);

(sp_20082.y = y_20081);


var G__20083 = cljs.core.next.call(null,seq__20042_20073__$1);
var G__20084 = null;
var G__20085 = (0);
var G__20086 = (0);
seq__20042_20060 = G__20083;
chunk__20043_20061 = G__20084;
count__20044_20062 = G__20085;
i__20045_20063 = G__20086;
continue;
}
} else {
}
}
break;
}

return cnt;
}),null));
juliaworld.scene.draw_layer = (function juliaworld$scene$draw_layer(p__20087){
var map__20088 = p__20087;
var map__20088__$1 = cljs.core.__destructure_map.call(null,map__20088);
var deps = cljs.core.get.call(null,map__20088__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var stage = juliaworld.state.get_app.call(null).stage;
var resize = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-resize","screen-resize",1478871413)], null));
var seq__20089_20093 = cljs.core.seq.call(null,deps);
var chunk__20090_20094 = null;
var count__20091_20095 = (0);
var i__20092_20096 = (0);
while(true){
if((i__20092_20096 < count__20091_20095)){
var layer_name_20097 = cljs.core._nth.call(null,chunk__20090_20094,i__20092_20096);
var l_20098 = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_layer.call(null,layer_name_20097));
stage.addChild(l_20098);


var G__20099 = seq__20089_20093;
var G__20100 = chunk__20090_20094;
var G__20101 = count__20091_20095;
var G__20102 = (i__20092_20096 + (1));
seq__20089_20093 = G__20099;
chunk__20090_20094 = G__20100;
count__20091_20095 = G__20101;
i__20092_20096 = G__20102;
continue;
} else {
var temp__5804__auto___20103 = cljs.core.seq.call(null,seq__20089_20093);
if(temp__5804__auto___20103){
var seq__20089_20104__$1 = temp__5804__auto___20103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20089_20104__$1)){
var c__5565__auto___20105 = cljs.core.chunk_first.call(null,seq__20089_20104__$1);
var G__20106 = cljs.core.chunk_rest.call(null,seq__20089_20104__$1);
var G__20107 = c__5565__auto___20105;
var G__20108 = cljs.core.count.call(null,c__5565__auto___20105);
var G__20109 = (0);
seq__20089_20093 = G__20106;
chunk__20090_20094 = G__20107;
count__20091_20095 = G__20108;
i__20092_20096 = G__20109;
continue;
} else {
var layer_name_20110 = cljs.core.first.call(null,seq__20089_20104__$1);
var l_20111 = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_layer.call(null,layer_name_20110));
stage.addChild(l_20111);


var G__20112 = cljs.core.next.call(null,seq__20089_20104__$1);
var G__20113 = null;
var G__20114 = (0);
var G__20115 = (0);
seq__20089_20093 = G__20112;
chunk__20090_20094 = G__20113;
count__20091_20095 = G__20114;
i__20092_20096 = G__20115;
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
var map__20116 = juliaworld.state.get_layer.call(null,n);
var map__20116__$1 = cljs.core.__destructure_map.call(null,map__20116);
var l = map__20116__$1;
var map__20117 = cljs.core.get.call(null,map__20116__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var map__20117__$1 = cljs.core.__destructure_map.call(null,map__20117);
var herox = cljs.core.get.call(null,map__20117__$1,new cljs.core.Keyword(null,"herox","herox",2034186716));
var heroy = cljs.core.get.call(null,map__20117__$1,new cljs.core.Keyword(null,"heroy","heroy",-1136789549));
var stage = juliaworld.state.get_app.call(null).stage;
juliaworld.state.set_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415)], null),n);

juliaworld.state.set_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [herox,heroy], null));

stage.removeChildren();

juliaworld.scene.draw_layer.call(null,l);

juliaworld.state.set_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new cljs.core.Keyword(null,"idle-down","idle-down",-1942157088));

return juliaworld.hero.show_hero.call(null);
});

//# sourceMappingURL=scene.js.map

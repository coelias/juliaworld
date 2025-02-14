// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('juliaworld.scene');
goog.require('cljs.core');
goog.require('juliaworld.state');
goog.require('juliaworld.tiled');
goog.require('promesa.core');
goog.require('juliaworld.hero');
goog.require('juliaworld.helpers');
goog.require('juliaworld.sound');
goog.require('klipse.run.plugin.plugin');
goog.require('klipse.plugin');
goog.require('pixi');
juliaworld.scene.get_grid_texture = (function juliaworld$scene$get_grid_texture(){
var vec__33524 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null));
var w = cljs.core.nth.call(null,vec__33524,(0),null);
var h = cljs.core.nth.call(null,vec__33524,(1),null);
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
var vec__33527 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-res","screen-res",1524431210)], null));
var xres = cljs.core.nth.call(null,vec__33527,(0),null);
var yres = cljs.core.nth.call(null,vec__33527,(1),null);
var vec__33530 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null));
var xtres = cljs.core.nth.call(null,vec__33530,(0),null);
var ytres = cljs.core.nth.call(null,vec__33530,(1),null);
var coords = (function (){var iter__5520__auto__ = (function juliaworld$scene$iter__33533(s__33534){
return (new cljs.core.LazySeq(null,(function (){
var s__33534__$1 = s__33534;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__33534__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__33534__$1,y,xs__6360__auto__,temp__5804__auto__,gt,vec__33527,xres,yres,vec__33530,xtres,ytres){
return (function juliaworld$scene$iter__33533_$_iter__33535(s__33536){
return (new cljs.core.LazySeq(null,((function (s__33534__$1,y,xs__6360__auto__,temp__5804__auto__,gt,vec__33527,xres,yres,vec__33530,xtres,ytres){
return (function (){
var s__33536__$1 = s__33536;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__33536__$1);
if(temp__5804__auto____$1){
var s__33536__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33536__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__33536__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__33538 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__33537 = (0);
while(true){
if((i__33537 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__33537);
cljs.core.chunk_append.call(null,b__33538,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__33555 = (i__33537 + (1));
i__33537 = G__33555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33538),juliaworld$scene$iter__33533_$_iter__33535.call(null,cljs.core.chunk_rest.call(null,s__33536__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33538),null);
}
} else {
var x = cljs.core.first.call(null,s__33536__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),juliaworld$scene$iter__33533_$_iter__33535.call(null,cljs.core.rest.call(null,s__33536__$2)));
}
} else {
return null;
}
break;
}
});})(s__33534__$1,y,xs__6360__auto__,temp__5804__auto__,gt,vec__33527,xres,yres,vec__33530,xtres,ytres))
,null,null));
});})(s__33534__$1,y,xs__6360__auto__,temp__5804__auto__,gt,vec__33527,xres,yres,vec__33530,xtres,ytres))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,cljs.core.range.call(null,(0),xres,xtres)));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,juliaworld$scene$iter__33533.call(null,cljs.core.rest.call(null,s__33534__$1)));
} else {
var G__33556 = cljs.core.rest.call(null,s__33534__$1);
s__33534__$1 = G__33556;
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
var seq__33539_33557 = cljs.core.seq.call(null,coords);
var chunk__33540_33558 = null;
var count__33541_33559 = (0);
var i__33542_33560 = (0);
while(true){
if((i__33542_33560 < count__33541_33559)){
var vec__33549_33561 = cljs.core._nth.call(null,chunk__33540_33558,i__33542_33560);
var x_33562 = cljs.core.nth.call(null,vec__33549_33561,(0),null);
var y_33563 = cljs.core.nth.call(null,vec__33549_33561,(1),null);
var sp_33564 = (new PIXI.Sprite(gt));
cnt.addChild(sp_33564);

(sp_33564.x = x_33562);

(sp_33564.y = y_33563);


var G__33565 = seq__33539_33557;
var G__33566 = chunk__33540_33558;
var G__33567 = count__33541_33559;
var G__33568 = (i__33542_33560 + (1));
seq__33539_33557 = G__33565;
chunk__33540_33558 = G__33566;
count__33541_33559 = G__33567;
i__33542_33560 = G__33568;
continue;
} else {
var temp__5804__auto___33569 = cljs.core.seq.call(null,seq__33539_33557);
if(temp__5804__auto___33569){
var seq__33539_33570__$1 = temp__5804__auto___33569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33539_33570__$1)){
var c__5565__auto___33571 = cljs.core.chunk_first.call(null,seq__33539_33570__$1);
var G__33572 = cljs.core.chunk_rest.call(null,seq__33539_33570__$1);
var G__33573 = c__5565__auto___33571;
var G__33574 = cljs.core.count.call(null,c__5565__auto___33571);
var G__33575 = (0);
seq__33539_33557 = G__33572;
chunk__33540_33558 = G__33573;
count__33541_33559 = G__33574;
i__33542_33560 = G__33575;
continue;
} else {
var vec__33552_33576 = cljs.core.first.call(null,seq__33539_33570__$1);
var x_33577 = cljs.core.nth.call(null,vec__33552_33576,(0),null);
var y_33578 = cljs.core.nth.call(null,vec__33552_33576,(1),null);
var sp_33579 = (new PIXI.Sprite(gt));
cnt.addChild(sp_33579);

(sp_33579.x = x_33577);

(sp_33579.y = y_33578);


var G__33580 = cljs.core.next.call(null,seq__33539_33570__$1);
var G__33581 = null;
var G__33582 = (0);
var G__33583 = (0);
seq__33539_33557 = G__33580;
chunk__33540_33558 = G__33581;
count__33541_33559 = G__33582;
i__33542_33560 = G__33583;
continue;
}
} else {
}
}
break;
}

return cnt;
}),null));
juliaworld.scene.draw_layer = (function juliaworld$scene$draw_layer(p__33584){
var map__33585 = p__33584;
var map__33585__$1 = cljs.core.__destructure_map.call(null,map__33585);
var deps = cljs.core.get.call(null,map__33585__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var stage = juliaworld.state.get_app.call(null).stage;
var resize = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-resize","screen-resize",1478871413)], null));
var seq__33586_33590 = cljs.core.seq.call(null,deps);
var chunk__33587_33591 = null;
var count__33588_33592 = (0);
var i__33589_33593 = (0);
while(true){
if((i__33589_33593 < count__33588_33592)){
var layer_name_33594 = cljs.core._nth.call(null,chunk__33587_33591,i__33589_33593);
var l_33595 = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_layer.call(null,layer_name_33594));
stage.addChild(l_33595);


var G__33596 = seq__33586_33590;
var G__33597 = chunk__33587_33591;
var G__33598 = count__33588_33592;
var G__33599 = (i__33589_33593 + (1));
seq__33586_33590 = G__33596;
chunk__33587_33591 = G__33597;
count__33588_33592 = G__33598;
i__33589_33593 = G__33599;
continue;
} else {
var temp__5804__auto___33600 = cljs.core.seq.call(null,seq__33586_33590);
if(temp__5804__auto___33600){
var seq__33586_33601__$1 = temp__5804__auto___33600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33586_33601__$1)){
var c__5565__auto___33602 = cljs.core.chunk_first.call(null,seq__33586_33601__$1);
var G__33603 = cljs.core.chunk_rest.call(null,seq__33586_33601__$1);
var G__33604 = c__5565__auto___33602;
var G__33605 = cljs.core.count.call(null,c__5565__auto___33602);
var G__33606 = (0);
seq__33586_33590 = G__33603;
chunk__33587_33591 = G__33604;
count__33588_33592 = G__33605;
i__33589_33593 = G__33606;
continue;
} else {
var layer_name_33607 = cljs.core.first.call(null,seq__33586_33601__$1);
var l_33608 = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_layer.call(null,layer_name_33607));
stage.addChild(l_33608);


var G__33609 = cljs.core.next.call(null,seq__33586_33601__$1);
var G__33610 = null;
var G__33611 = (0);
var G__33612 = (0);
seq__33586_33590 = G__33609;
chunk__33587_33591 = G__33610;
count__33588_33592 = G__33611;
i__33589_33593 = G__33612;
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
var map__33613 = juliaworld.state.get_layer.call(null,n);
var map__33613__$1 = cljs.core.__destructure_map.call(null,map__33613);
var l = map__33613__$1;
var map__33614 = cljs.core.get.call(null,map__33613__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var map__33614__$1 = cljs.core.__destructure_map.call(null,map__33614);
var herox = cljs.core.get.call(null,map__33614__$1,new cljs.core.Keyword(null,"herox","herox",2034186716));
var heroy = cljs.core.get.call(null,map__33614__$1,new cljs.core.Keyword(null,"heroy","heroy",-1136789549));
var description = cljs.core.get.call(null,map__33614__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var score = cljs.core.get.call(null,map__33614__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var stage = juliaworld.state.get_app.call(null).stage;
juliaworld.state.reset_state.call(null,n,herox,heroy,score);

stage.removeChildren();

juliaworld.scene.draw_layer.call(null,l);

juliaworld.state.set_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new cljs.core.Keyword(null,"idle-down","idle-down",-1942157088));

juliaworld.hero.show_hero.call(null);

(document.getElementById("description").innerHTML = description);

return null;
});
juliaworld.scene.reload_scene = (function juliaworld$scene$reload_scene(){
juliaworld.scene.load_scene.call(null,juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415)], null)));

return juliaworld.state.randomize_jewels.call(null);
});
juliaworld.scene.set_level = (function juliaworld$scene$set_level(level){
juliaworld.scene.load_scene.call(null,level);

return juliaworld.helpers.load_saved_code.call(null);
});
juliaworld.scene.check_scores = (function juliaworld$scene$check_scores(){
if(juliaworld.state.level_cleared_QMARK_.call(null)){
juliaworld.state.get_app.call(null).stage.addChild(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_layer.call(null,new cljs.core.Keyword(null,"levelcleared","levelcleared",1931404869))));

return juliaworld.helpers.update_progress.call(null,juliaworld.state.get_level_number.call(null));
} else {
return null;
}
});
juliaworld.scene.clear_div = (function juliaworld$scene$clear_div(id){
var ga = document.getElementById(id);
var c = ga.firstChild;
while(true){
if(cljs.core.truth_(c)){
ga.removeChild(c);

var G__33615 = ga.firstChild;
c = G__33615;
continue;
} else {
return null;
}
break;
}
});
juliaworld.scene.hide_div = (function juliaworld$scene$hide_div(id){
var ga = document.getElementById(id);
(ga.style.display = "none");

return (ga.style.pointerEvents = "none");
});
juliaworld.scene.show_div = (function juliaworld$scene$show_div(id){
var ga = document.getElementById(id);
(ga.style.display = "");

return (ga.style.pointerEvents = "");
});
juliaworld.scene.HTMLButton = (function juliaworld$scene$HTMLButton(text,handler){
var button = document.createElement("button");
(button.innerHTML = text);

(button.onclick = handler);

return button;
});
juliaworld.scene.HTMLdiv = (function juliaworld$scene$HTMLdiv(text){
var div = document.createElement("div");
(div.innerHTML = text);

return div;
});
juliaworld.scene.create_app = (function juliaworld$scene$create_app(var_args){
var args__5772__auto__ = [];
var len__5766__auto___33624 = arguments.length;
var i__5767__auto___33625 = (0);
while(true){
if((i__5767__auto___33625 < len__5766__auto___33624)){
args__5772__auto__.push((arguments[i__5767__auto___33625]));

var G__33626 = (i__5767__auto___33625 + (1));
i__5767__auto___33625 = G__33626;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return juliaworld.scene.create_app.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(juliaworld.scene.create_app.cljs$core$IFn$_invoke$arity$variadic = (function (div,p__33618){
var map__33619 = p__33618;
var map__33619__$1 = cljs.core.__destructure_map.call(null,map__33619);
var options = cljs.core.get.call(null,map__33619__$1,new cljs.core.Keyword(null,"options","options",99638489));
var resize = cljs.core.get.call(null,map__33619__$1,new cljs.core.Keyword(null,"resize","resize",297367086));
document.getElementById("codeeditor").prepend(juliaworld.scene.HTMLButton.call(null,"Back to menu",(function (){
return juliaworld.scene.create_menu.call(null);
})));

return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,null),(function (___27854__auto__){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.tiled.load_scenes.call(null)),(function (_){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-res","screen-res",1524431210)], null))),(function (p__33620){
var vec__33621 = p__33620;
var x = cljs.core.nth.call(null,vec__33621,(0),null);
var y = cljs.core.nth.call(null,vec__33621,(1),null);
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,document.getElementById(div)),(function (element){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,(new PIXI.Application(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["resizeTo",element], null))))),(function (app){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.state.add_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-resize","screen-resize",1478871413)], null),resize)),(function (___27822__auto__){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,null),(function (___27854__auto____$1){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,app.init(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),((x * resize) | (0)),new cljs.core.Keyword(null,"height","height",1025178622),((y * resize) | (0))], null),options)))),(function (___$1){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,element.appendChild(app.canvas)),(function (___27822__auto____$1){
return promesa.protocols._promise.call(null,juliaworld.sound.load_audios.call(null));
}));
}));
}))),(function (___27822__auto____$1){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.assoc,new cljs.core.Keyword(null,"app","app",-560961707),app)),(function (___27822__auto____$2){
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

(juliaworld.scene.create_app.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(juliaworld.scene.create_app.cljs$lang$applyTo = (function (seq33616){
var G__33617 = cljs.core.first.call(null,seq33616);
var seq33616__$1 = cljs.core.next.call(null,seq33616);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33617,seq33616__$1);
}));

juliaworld.scene.load_level = (function juliaworld$scene$load_level(level){
juliaworld.scene.clear_div.call(null,"menu");

juliaworld.scene.show_div.call(null,"codeeditor");

if((juliaworld.state.get_app.call(null) == null)){
promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,null),(function (___27854__auto__){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.scene.create_app.call(null,"mypixi",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#ff0000"], null),new cljs.core.Keyword(null,"resize","resize",297367086),1.5)),(function (_){
return promesa.protocols._promise.call(null,juliaworld.scene.set_level.call(null,cljs.core.keyword.call(null,["level-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join(''))));
}));
}));

return klipse.plugin.init.call(null,({"selector": ".language-klipse", "selector_reagent": ".language-reagent", "eval_idle_msec": (999999999), "codemirror_options_in": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true], null)}));
} else {
return juliaworld.scene.set_level.call(null,cljs.core.keyword.call(null,["level-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join('')));
}
});
juliaworld.scene.create_menu = (function juliaworld$scene$create_menu(){
var levels = juliaworld.helpers.get_completed_levels.call(null);
var m = document.getElementById("menu");
juliaworld.scene.clear_div.call(null,"menu");

juliaworld.scene.hide_div.call(null,"codeeditor");

m.appendChild(juliaworld.scene.HTMLdiv.call(null,"Welcome to juliaworld!"));

var n__5633__auto__ = levels;
var n = (0);
while(true){
if((n < n__5633__auto__)){
m.appendChild(juliaworld.scene.HTMLButton.call(null,["level ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((n + (1)))].join(''),((function (n,n__5633__auto__,levels,m){
return (function (){
return juliaworld.scene.load_level.call(null,(n + (1)));
});})(n,n__5633__auto__,levels,m))
));

var G__33627 = (n + (1));
n = G__33627;
continue;
} else {
return null;
}
break;
}
});

//# sourceMappingURL=scene.js.map

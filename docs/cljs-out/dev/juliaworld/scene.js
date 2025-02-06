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
var vec__33112 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null));
var w = cljs.core.nth.call(null,vec__33112,(0),null);
var h = cljs.core.nth.call(null,vec__33112,(1),null);
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
var vec__33115 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-res","screen-res",1524431210)], null));
var xres = cljs.core.nth.call(null,vec__33115,(0),null);
var yres = cljs.core.nth.call(null,vec__33115,(1),null);
var vec__33118 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null));
var xtres = cljs.core.nth.call(null,vec__33118,(0),null);
var ytres = cljs.core.nth.call(null,vec__33118,(1),null);
var coords = (function (){var iter__5520__auto__ = (function juliaworld$scene$iter__33121(s__33122){
return (new cljs.core.LazySeq(null,(function (){
var s__33122__$1 = s__33122;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__33122__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__33122__$1,y,xs__6360__auto__,temp__5804__auto__,gt,vec__33115,xres,yres,vec__33118,xtres,ytres){
return (function juliaworld$scene$iter__33121_$_iter__33123(s__33124){
return (new cljs.core.LazySeq(null,((function (s__33122__$1,y,xs__6360__auto__,temp__5804__auto__,gt,vec__33115,xres,yres,vec__33118,xtres,ytres){
return (function (){
var s__33124__$1 = s__33124;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__33124__$1);
if(temp__5804__auto____$1){
var s__33124__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33124__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__33124__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__33126 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__33125 = (0);
while(true){
if((i__33125 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__33125);
cljs.core.chunk_append.call(null,b__33126,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__33143 = (i__33125 + (1));
i__33125 = G__33143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33126),juliaworld$scene$iter__33121_$_iter__33123.call(null,cljs.core.chunk_rest.call(null,s__33124__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33126),null);
}
} else {
var x = cljs.core.first.call(null,s__33124__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),juliaworld$scene$iter__33121_$_iter__33123.call(null,cljs.core.rest.call(null,s__33124__$2)));
}
} else {
return null;
}
break;
}
});})(s__33122__$1,y,xs__6360__auto__,temp__5804__auto__,gt,vec__33115,xres,yres,vec__33118,xtres,ytres))
,null,null));
});})(s__33122__$1,y,xs__6360__auto__,temp__5804__auto__,gt,vec__33115,xres,yres,vec__33118,xtres,ytres))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,cljs.core.range.call(null,(0),xres,xtres)));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,juliaworld$scene$iter__33121.call(null,cljs.core.rest.call(null,s__33122__$1)));
} else {
var G__33144 = cljs.core.rest.call(null,s__33122__$1);
s__33122__$1 = G__33144;
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
var seq__33127_33145 = cljs.core.seq.call(null,coords);
var chunk__33128_33146 = null;
var count__33129_33147 = (0);
var i__33130_33148 = (0);
while(true){
if((i__33130_33148 < count__33129_33147)){
var vec__33137_33149 = cljs.core._nth.call(null,chunk__33128_33146,i__33130_33148);
var x_33150 = cljs.core.nth.call(null,vec__33137_33149,(0),null);
var y_33151 = cljs.core.nth.call(null,vec__33137_33149,(1),null);
var sp_33152 = (new PIXI.Sprite(gt));
cnt.addChild(sp_33152);

(sp_33152.x = x_33150);

(sp_33152.y = y_33151);


var G__33153 = seq__33127_33145;
var G__33154 = chunk__33128_33146;
var G__33155 = count__33129_33147;
var G__33156 = (i__33130_33148 + (1));
seq__33127_33145 = G__33153;
chunk__33128_33146 = G__33154;
count__33129_33147 = G__33155;
i__33130_33148 = G__33156;
continue;
} else {
var temp__5804__auto___33157 = cljs.core.seq.call(null,seq__33127_33145);
if(temp__5804__auto___33157){
var seq__33127_33158__$1 = temp__5804__auto___33157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33127_33158__$1)){
var c__5565__auto___33159 = cljs.core.chunk_first.call(null,seq__33127_33158__$1);
var G__33160 = cljs.core.chunk_rest.call(null,seq__33127_33158__$1);
var G__33161 = c__5565__auto___33159;
var G__33162 = cljs.core.count.call(null,c__5565__auto___33159);
var G__33163 = (0);
seq__33127_33145 = G__33160;
chunk__33128_33146 = G__33161;
count__33129_33147 = G__33162;
i__33130_33148 = G__33163;
continue;
} else {
var vec__33140_33164 = cljs.core.first.call(null,seq__33127_33158__$1);
var x_33165 = cljs.core.nth.call(null,vec__33140_33164,(0),null);
var y_33166 = cljs.core.nth.call(null,vec__33140_33164,(1),null);
var sp_33167 = (new PIXI.Sprite(gt));
cnt.addChild(sp_33167);

(sp_33167.x = x_33165);

(sp_33167.y = y_33166);


var G__33168 = cljs.core.next.call(null,seq__33127_33158__$1);
var G__33169 = null;
var G__33170 = (0);
var G__33171 = (0);
seq__33127_33145 = G__33168;
chunk__33128_33146 = G__33169;
count__33129_33147 = G__33170;
i__33130_33148 = G__33171;
continue;
}
} else {
}
}
break;
}

return cnt;
}),null));
juliaworld.scene.draw_layer = (function juliaworld$scene$draw_layer(p__33172){
var map__33173 = p__33172;
var map__33173__$1 = cljs.core.__destructure_map.call(null,map__33173);
var deps = cljs.core.get.call(null,map__33173__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var stage = juliaworld.state.get_app.call(null).stage;
var resize = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-resize","screen-resize",1478871413)], null));
var seq__33174_33178 = cljs.core.seq.call(null,deps);
var chunk__33175_33179 = null;
var count__33176_33180 = (0);
var i__33177_33181 = (0);
while(true){
if((i__33177_33181 < count__33176_33180)){
var layer_name_33182 = cljs.core._nth.call(null,chunk__33175_33179,i__33177_33181);
var l_33183 = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_layer.call(null,layer_name_33182));
stage.addChild(l_33183);


var G__33184 = seq__33174_33178;
var G__33185 = chunk__33175_33179;
var G__33186 = count__33176_33180;
var G__33187 = (i__33177_33181 + (1));
seq__33174_33178 = G__33184;
chunk__33175_33179 = G__33185;
count__33176_33180 = G__33186;
i__33177_33181 = G__33187;
continue;
} else {
var temp__5804__auto___33188 = cljs.core.seq.call(null,seq__33174_33178);
if(temp__5804__auto___33188){
var seq__33174_33189__$1 = temp__5804__auto___33188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33174_33189__$1)){
var c__5565__auto___33190 = cljs.core.chunk_first.call(null,seq__33174_33189__$1);
var G__33191 = cljs.core.chunk_rest.call(null,seq__33174_33189__$1);
var G__33192 = c__5565__auto___33190;
var G__33193 = cljs.core.count.call(null,c__5565__auto___33190);
var G__33194 = (0);
seq__33174_33178 = G__33191;
chunk__33175_33179 = G__33192;
count__33176_33180 = G__33193;
i__33177_33181 = G__33194;
continue;
} else {
var layer_name_33195 = cljs.core.first.call(null,seq__33174_33189__$1);
var l_33196 = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_layer.call(null,layer_name_33195));
stage.addChild(l_33196);


var G__33197 = cljs.core.next.call(null,seq__33174_33189__$1);
var G__33198 = null;
var G__33199 = (0);
var G__33200 = (0);
seq__33174_33178 = G__33197;
chunk__33175_33179 = G__33198;
count__33176_33180 = G__33199;
i__33177_33181 = G__33200;
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
var map__33201 = juliaworld.state.get_layer.call(null,n);
var map__33201__$1 = cljs.core.__destructure_map.call(null,map__33201);
var l = map__33201__$1;
var map__33202 = cljs.core.get.call(null,map__33201__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var map__33202__$1 = cljs.core.__destructure_map.call(null,map__33202);
var herox = cljs.core.get.call(null,map__33202__$1,new cljs.core.Keyword(null,"herox","herox",2034186716));
var heroy = cljs.core.get.call(null,map__33202__$1,new cljs.core.Keyword(null,"heroy","heroy",-1136789549));
var description = cljs.core.get.call(null,map__33202__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var score = cljs.core.get.call(null,map__33202__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
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
return juliaworld.scene.load_scene.call(null,juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415)], null)));
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

var G__33203 = ga.firstChild;
c = G__33203;
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
var len__5766__auto___33212 = arguments.length;
var i__5767__auto___33213 = (0);
while(true){
if((i__5767__auto___33213 < len__5766__auto___33212)){
args__5772__auto__.push((arguments[i__5767__auto___33213]));

var G__33214 = (i__5767__auto___33213 + (1));
i__5767__auto___33213 = G__33214;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return juliaworld.scene.create_app.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(juliaworld.scene.create_app.cljs$core$IFn$_invoke$arity$variadic = (function (div,p__33206){
var map__33207 = p__33206;
var map__33207__$1 = cljs.core.__destructure_map.call(null,map__33207);
var options = cljs.core.get.call(null,map__33207__$1,new cljs.core.Keyword(null,"options","options",99638489));
var resize = cljs.core.get.call(null,map__33207__$1,new cljs.core.Keyword(null,"resize","resize",297367086));
document.getElementById("codeeditor").prepend(juliaworld.scene.HTMLButton.call(null,"Back to menu",(function (){
return juliaworld.scene.create_menu.call(null);
})));

return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,null),(function (___27444__auto__){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.tiled.load_scenes.call(null)),(function (_){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-res","screen-res",1524431210)], null))),(function (p__33208){
var vec__33209 = p__33208;
var x = cljs.core.nth.call(null,vec__33209,(0),null);
var y = cljs.core.nth.call(null,vec__33209,(1),null);
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,document.getElementById(div)),(function (element){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,(new PIXI.Application(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["resizeTo",element], null))))),(function (app){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,juliaworld.state.add_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-resize","screen-resize",1478871413)], null),resize)),(function (___27412__auto__){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,null),(function (___27444__auto____$1){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,app.init(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),((x * resize) | (0)),new cljs.core.Keyword(null,"height","height",1025178622),((y * resize) | (0))], null),options)))),(function (___$1){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,element.appendChild(app.canvas)),(function (___27412__auto____$1){
return promesa.protocols._promise.call(null,juliaworld.sound.load_audios.call(null));
}));
}));
}))),(function (___27412__auto____$1){
return promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.assoc,new cljs.core.Keyword(null,"app","app",-560961707),app)),(function (___27412__auto____$2){
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
(juliaworld.scene.create_app.cljs$lang$applyTo = (function (seq33204){
var G__33205 = cljs.core.first.call(null,seq33204);
var seq33204__$1 = cljs.core.next.call(null,seq33204);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33205,seq33204__$1);
}));

juliaworld.scene.load_level = (function juliaworld$scene$load_level(level){
juliaworld.scene.clear_div.call(null,"menu");

juliaworld.scene.show_div.call(null,"codeeditor");

if((juliaworld.state.get_app.call(null) == null)){
promesa.protocols._mcat.call(null,promesa.protocols._promise.call(null,null),(function (___27444__auto__){
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

var G__33215 = (n + (1));
n = G__33215;
continue;
} else {
return null;
}
break;
}
});

//# sourceMappingURL=scene.js.map

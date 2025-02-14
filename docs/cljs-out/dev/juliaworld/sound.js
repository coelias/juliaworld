// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('juliaworld.sound');
goog.require('cljs.core');
goog.require('pixisound');
if((typeof juliaworld !== 'undefined') && (typeof juliaworld.sound !== 'undefined') && (typeof juliaworld.sound.legacy !== 'undefined')){
} else {
juliaworld.sound.legacy = (PIXI.sound.useLegacy = true);
}
juliaworld.sound.audio_files = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pick","pick",-340463352),"audio/pick.mp3",new cljs.core.Keyword(null,"song","song",-62793121),"audio/song.mp3"], null);
juliaworld.sound.load_audios = (function juliaworld$sound$load_audios(){
var seq__28291 = cljs.core.seq.call(null,juliaworld.sound.audio_files);
var chunk__28292 = null;
var count__28293 = (0);
var i__28294 = (0);
while(true){
if((i__28294 < count__28293)){
var vec__28301 = cljs.core._nth.call(null,chunk__28292,i__28294);
var k = cljs.core.nth.call(null,vec__28301,(0),null);
var path = cljs.core.nth.call(null,vec__28301,(1),null);
PIXI.sound.add(cljs.core.name.call(null,k),path);


var G__28307 = seq__28291;
var G__28308 = chunk__28292;
var G__28309 = count__28293;
var G__28310 = (i__28294 + (1));
seq__28291 = G__28307;
chunk__28292 = G__28308;
count__28293 = G__28309;
i__28294 = G__28310;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__28291);
if(temp__5804__auto__){
var seq__28291__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28291__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__28291__$1);
var G__28311 = cljs.core.chunk_rest.call(null,seq__28291__$1);
var G__28312 = c__5565__auto__;
var G__28313 = cljs.core.count.call(null,c__5565__auto__);
var G__28314 = (0);
seq__28291 = G__28311;
chunk__28292 = G__28312;
count__28293 = G__28313;
i__28294 = G__28314;
continue;
} else {
var vec__28304 = cljs.core.first.call(null,seq__28291__$1);
var k = cljs.core.nth.call(null,vec__28304,(0),null);
var path = cljs.core.nth.call(null,vec__28304,(1),null);
PIXI.sound.add(cljs.core.name.call(null,k),path);


var G__28315 = cljs.core.next.call(null,seq__28291__$1);
var G__28316 = null;
var G__28317 = (0);
var G__28318 = (0);
seq__28291 = G__28315;
chunk__28292 = G__28316;
count__28293 = G__28317;
i__28294 = G__28318;
continue;
}
} else {
return null;
}
}
break;
}
});
juliaworld.sound.play = (function juliaworld$sound$play(k){
return PIXI.sound.play(cljs.core.name.call(null,k));
});
juliaworld.sound.playsong = (function juliaworld$sound$playsong(){
return PIXI.sound.Sound.from(({"url": "audio/song.mp3", "autoPlay": true, "complete": (function (){
return juliaworld.sound.playsong.call(null);
})}));
});

//# sourceMappingURL=sound.js.map

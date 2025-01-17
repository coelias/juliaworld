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
var seq__27881 = cljs.core.seq.call(null,juliaworld.sound.audio_files);
var chunk__27882 = null;
var count__27883 = (0);
var i__27884 = (0);
while(true){
if((i__27884 < count__27883)){
var vec__27891 = cljs.core._nth.call(null,chunk__27882,i__27884);
var k = cljs.core.nth.call(null,vec__27891,(0),null);
var path = cljs.core.nth.call(null,vec__27891,(1),null);
PIXI.sound.add(cljs.core.name.call(null,k),path);


var G__27897 = seq__27881;
var G__27898 = chunk__27882;
var G__27899 = count__27883;
var G__27900 = (i__27884 + (1));
seq__27881 = G__27897;
chunk__27882 = G__27898;
count__27883 = G__27899;
i__27884 = G__27900;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__27881);
if(temp__5804__auto__){
var seq__27881__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27881__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__27881__$1);
var G__27901 = cljs.core.chunk_rest.call(null,seq__27881__$1);
var G__27902 = c__5565__auto__;
var G__27903 = cljs.core.count.call(null,c__5565__auto__);
var G__27904 = (0);
seq__27881 = G__27901;
chunk__27882 = G__27902;
count__27883 = G__27903;
i__27884 = G__27904;
continue;
} else {
var vec__27894 = cljs.core.first.call(null,seq__27881__$1);
var k = cljs.core.nth.call(null,vec__27894,(0),null);
var path = cljs.core.nth.call(null,vec__27894,(1),null);
PIXI.sound.add(cljs.core.name.call(null,k),path);


var G__27905 = cljs.core.next.call(null,seq__27881__$1);
var G__27906 = null;
var G__27907 = (0);
var G__27908 = (0);
seq__27881 = G__27905;
chunk__27882 = G__27906;
count__27883 = G__27907;
i__27884 = G__27908;
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

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
var seq__27878 = cljs.core.seq.call(null,juliaworld.sound.audio_files);
var chunk__27879 = null;
var count__27880 = (0);
var i__27881 = (0);
while(true){
if((i__27881 < count__27880)){
var vec__27888 = cljs.core._nth.call(null,chunk__27879,i__27881);
var k = cljs.core.nth.call(null,vec__27888,(0),null);
var path = cljs.core.nth.call(null,vec__27888,(1),null);
PIXI.sound.add(cljs.core.name.call(null,k),path);


var G__27894 = seq__27878;
var G__27895 = chunk__27879;
var G__27896 = count__27880;
var G__27897 = (i__27881 + (1));
seq__27878 = G__27894;
chunk__27879 = G__27895;
count__27880 = G__27896;
i__27881 = G__27897;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__27878);
if(temp__5804__auto__){
var seq__27878__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27878__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__27878__$1);
var G__27898 = cljs.core.chunk_rest.call(null,seq__27878__$1);
var G__27899 = c__5565__auto__;
var G__27900 = cljs.core.count.call(null,c__5565__auto__);
var G__27901 = (0);
seq__27878 = G__27898;
chunk__27879 = G__27899;
count__27880 = G__27900;
i__27881 = G__27901;
continue;
} else {
var vec__27891 = cljs.core.first.call(null,seq__27878__$1);
var k = cljs.core.nth.call(null,vec__27891,(0),null);
var path = cljs.core.nth.call(null,vec__27891,(1),null);
PIXI.sound.add(cljs.core.name.call(null,k),path);


var G__27902 = cljs.core.next.call(null,seq__27878__$1);
var G__27903 = null;
var G__27904 = (0);
var G__27905 = (0);
seq__27878 = G__27902;
chunk__27879 = G__27903;
count__27880 = G__27904;
i__27881 = G__27905;
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

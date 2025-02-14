// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('juliaworld.state');
goog.require('cljs.core');
if((typeof juliaworld !== 'undefined') && (typeof juliaworld.state !== 'undefined') && (typeof juliaworld.state.game !== 'undefined')){
} else {
juliaworld.state.game = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sprites","sprites",-1835833922),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"layers","layers",1944875032),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"app","app",-560961707),null,new cljs.core.Keyword(null,"config","config",994861415),cljs.core.PersistentArrayMap.EMPTY], null));
}
juliaworld.state.add_config = (function juliaworld$state$add_config(path,v){
return cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.assoc_in,cljs.core.cons.call(null,new cljs.core.Keyword(null,"config","config",994861415),path),v);
});
juliaworld.state.get_config = (function juliaworld$state$get_config(var_args){
var G__21597 = arguments.length;
switch (G__21597) {
case 1:
return juliaworld.state.get_config.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return juliaworld.state.get_config.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(juliaworld.state.get_config.cljs$core$IFn$_invoke$arity$1 = (function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,juliaworld.state.game),cljs.core.cons.call(null,new cljs.core.Keyword(null,"config","config",994861415),path));
}));

(juliaworld.state.get_config.cljs$core$IFn$_invoke$arity$2 = (function (path,default$){
var or__5043__auto__ = juliaworld.state.get_config.call(null,path);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(juliaworld.state.get_config.cljs$lang$maxFixedArity = 2);

juliaworld.state.set_state = (function juliaworld$state$set_state(path,value){
return cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.assoc_in,cljs.core.cons.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),path),value);
});
juliaworld.state.get_state = (function juliaworld$state$get_state(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,juliaworld.state.game),cljs.core.cons.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),path));
});
juliaworld.state.save_sprites = (function juliaworld$state$save_sprites(x){
return cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprites","sprites",-1835833922)], null),cljs.core.merge,x);
});
juliaworld.state.get_texture = (function juliaworld$state$get_texture(name){
return new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"sprites","sprites",-1835833922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game)),name));
});
juliaworld.state.get_sprite = (function juliaworld$state$get_sprite(name){
var G__21599 = name;
var G__21599__$1 = (((G__21599 == null))?null:juliaworld.state.get_texture.call(null,G__21599));
if((G__21599__$1 == null)){
return null;
} else {
return (new PIXI.Sprite(G__21599__$1));
}
});
juliaworld.state.get_layer = (function juliaworld$state$get_layer(id){
return id.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game)));
});
juliaworld.state.get_scene_layer = (function juliaworld$state$get_scene_layer(){
var s = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415)], null));
return s.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game)));
});
juliaworld.state.get_current_layers = (function juliaworld$state$get_current_layers(){
return new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_scene_layer.call(null));
});
juliaworld.state.hide_item = (function juliaworld$state$hide_item(layer,position){
var path = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layers","layers",1944875032),layer,new cljs.core.Keyword(null,"items","items",1031954938),position], null);
var map__21600 = cljs.core.get_in.call(null,cljs.core.deref.call(null,juliaworld.state.game),path);
var map__21600__$1 = cljs.core.__destructure_map.call(null,map__21600);
var sprite = cljs.core.get.call(null,map__21600__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
(sprite.visible = false);

return cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.assoc_in,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"visible","visible",-1024216805)),false);
});
juliaworld.state.show_item = (function juliaworld$state$show_item(layer,position){
var path = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layers","layers",1944875032),layer,new cljs.core.Keyword(null,"items","items",1031954938),position], null);
var map__21601 = cljs.core.get_in.call(null,cljs.core.deref.call(null,juliaworld.state.game),path);
var map__21601__$1 = cljs.core.__destructure_map.call(null,map__21601);
var sprite = cljs.core.get.call(null,map__21601__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
(sprite.visible = true);

return cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.assoc_in,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"visible","visible",-1024216805)),true);
});
juliaworld.state.randomize_jewels = (function juliaworld$state$randomize_jewels(){
var items = cljs.core.mapcat.call(null,(function (lyr){
return cljs.core.map.call(null,(function (p__21606){
var vec__21607 = p__21606;
var c = cljs.core.nth.call(null,vec__21607,(0),null);
var d = cljs.core.nth.call(null,vec__21607,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"layer","layer",-1601820589),lyr)], null);
}),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(lyr.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game)))));
}),juliaworld.state.get_current_layers.call(null));
var all_jewels = cljs.core.group_by.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p1__21602_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["grey-jewel",null,"jewel",null,"bad-jewel",null], null), null).call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__21602_SHARP_)));
}),items));
var halfjewels = Math.round((cljs.core.count.call(null,all_jewels) / (2)));
var vec__21603 = cljs.core.partition.call(null,halfjewels,halfjewels,null,cljs.core.shuffle.call(null,all_jewels));
var goodjewels = cljs.core.nth.call(null,vec__21603,(0),null);
var badjewels = cljs.core.nth.call(null,vec__21603,(1),null);
var seq__21610_21834 = cljs.core.seq.call(null,goodjewels);
var chunk__21611_21835 = null;
var count__21612_21836 = (0);
var i__21613_21837 = (0);
while(true){
if((i__21613_21837 < count__21612_21836)){
var vec__21668_21838 = cljs.core._nth.call(null,chunk__21611_21835,i__21613_21837);
var pos_21839 = cljs.core.nth.call(null,vec__21668_21838,(0),null);
var items_21840__$1 = cljs.core.nth.call(null,vec__21668_21838,(1),null);
if(cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,items_21840__$1))){
var seq__21671_21841 = cljs.core.seq.call(null,items_21840__$1);
var chunk__21672_21842 = null;
var count__21673_21843 = (0);
var i__21674_21844 = (0);
while(true){
if((i__21674_21844 < count__21673_21843)){
var vec__21685_21845 = cljs.core._nth.call(null,chunk__21672_21842,i__21674_21844);
var __21846 = cljs.core.nth.call(null,vec__21685_21845,(0),null);
var map__21688_21847 = cljs.core.nth.call(null,vec__21685_21845,(1),null);
var map__21688_21848__$1 = cljs.core.__destructure_map.call(null,map__21688_21847);
var layer_21849 = cljs.core.get.call(null,map__21688_21848__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var type_21850 = cljs.core.get.call(null,map__21688_21848__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__21689_21851 = type_21850;
switch (G__21689_21851) {
case "bad-jewel":
juliaworld.state.hide_item.call(null,layer_21849,pos_21839);

break;
case "grey-jewel":
juliaworld.state.hide_item.call(null,layer_21849,pos_21839);

break;
case "jewel":
juliaworld.state.show_item.call(null,layer_21849,pos_21839);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21689_21851)].join('')));

}


var G__21853 = seq__21671_21841;
var G__21854 = chunk__21672_21842;
var G__21855 = count__21673_21843;
var G__21856 = (i__21674_21844 + (1));
seq__21671_21841 = G__21853;
chunk__21672_21842 = G__21854;
count__21673_21843 = G__21855;
i__21674_21844 = G__21856;
continue;
} else {
var temp__5804__auto___21857 = cljs.core.seq.call(null,seq__21671_21841);
if(temp__5804__auto___21857){
var seq__21671_21858__$1 = temp__5804__auto___21857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21671_21858__$1)){
var c__5565__auto___21859 = cljs.core.chunk_first.call(null,seq__21671_21858__$1);
var G__21860 = cljs.core.chunk_rest.call(null,seq__21671_21858__$1);
var G__21861 = c__5565__auto___21859;
var G__21862 = cljs.core.count.call(null,c__5565__auto___21859);
var G__21863 = (0);
seq__21671_21841 = G__21860;
chunk__21672_21842 = G__21861;
count__21673_21843 = G__21862;
i__21674_21844 = G__21863;
continue;
} else {
var vec__21690_21864 = cljs.core.first.call(null,seq__21671_21858__$1);
var __21865 = cljs.core.nth.call(null,vec__21690_21864,(0),null);
var map__21693_21866 = cljs.core.nth.call(null,vec__21690_21864,(1),null);
var map__21693_21867__$1 = cljs.core.__destructure_map.call(null,map__21693_21866);
var layer_21868 = cljs.core.get.call(null,map__21693_21867__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var type_21869 = cljs.core.get.call(null,map__21693_21867__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__21694_21870 = type_21869;
switch (G__21694_21870) {
case "bad-jewel":
juliaworld.state.hide_item.call(null,layer_21868,pos_21839);

break;
case "grey-jewel":
juliaworld.state.hide_item.call(null,layer_21868,pos_21839);

break;
case "jewel":
juliaworld.state.show_item.call(null,layer_21868,pos_21839);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21694_21870)].join('')));

}


var G__21872 = cljs.core.next.call(null,seq__21671_21858__$1);
var G__21873 = null;
var G__21874 = (0);
var G__21875 = (0);
seq__21671_21841 = G__21872;
chunk__21672_21842 = G__21873;
count__21673_21843 = G__21874;
i__21674_21844 = G__21875;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__21876 = seq__21610_21834;
var G__21877 = chunk__21611_21835;
var G__21878 = count__21612_21836;
var G__21879 = (i__21613_21837 + (1));
seq__21610_21834 = G__21876;
chunk__21611_21835 = G__21877;
count__21612_21836 = G__21878;
i__21613_21837 = G__21879;
continue;
} else {
var temp__5804__auto___21880 = cljs.core.seq.call(null,seq__21610_21834);
if(temp__5804__auto___21880){
var seq__21610_21881__$1 = temp__5804__auto___21880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21610_21881__$1)){
var c__5565__auto___21882 = cljs.core.chunk_first.call(null,seq__21610_21881__$1);
var G__21883 = cljs.core.chunk_rest.call(null,seq__21610_21881__$1);
var G__21884 = c__5565__auto___21882;
var G__21885 = cljs.core.count.call(null,c__5565__auto___21882);
var G__21886 = (0);
seq__21610_21834 = G__21883;
chunk__21611_21835 = G__21884;
count__21612_21836 = G__21885;
i__21613_21837 = G__21886;
continue;
} else {
var vec__21695_21887 = cljs.core.first.call(null,seq__21610_21881__$1);
var pos_21888 = cljs.core.nth.call(null,vec__21695_21887,(0),null);
var items_21889__$1 = cljs.core.nth.call(null,vec__21695_21887,(1),null);
if(cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,items_21889__$1))){
var seq__21698_21890 = cljs.core.seq.call(null,items_21889__$1);
var chunk__21699_21891 = null;
var count__21700_21892 = (0);
var i__21701_21893 = (0);
while(true){
if((i__21701_21893 < count__21700_21892)){
var vec__21712_21894 = cljs.core._nth.call(null,chunk__21699_21891,i__21701_21893);
var __21895 = cljs.core.nth.call(null,vec__21712_21894,(0),null);
var map__21715_21896 = cljs.core.nth.call(null,vec__21712_21894,(1),null);
var map__21715_21897__$1 = cljs.core.__destructure_map.call(null,map__21715_21896);
var layer_21898 = cljs.core.get.call(null,map__21715_21897__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var type_21899 = cljs.core.get.call(null,map__21715_21897__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__21716_21900 = type_21899;
switch (G__21716_21900) {
case "bad-jewel":
juliaworld.state.hide_item.call(null,layer_21898,pos_21888);

break;
case "grey-jewel":
juliaworld.state.hide_item.call(null,layer_21898,pos_21888);

break;
case "jewel":
juliaworld.state.show_item.call(null,layer_21898,pos_21888);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21716_21900)].join('')));

}


var G__21902 = seq__21698_21890;
var G__21903 = chunk__21699_21891;
var G__21904 = count__21700_21892;
var G__21905 = (i__21701_21893 + (1));
seq__21698_21890 = G__21902;
chunk__21699_21891 = G__21903;
count__21700_21892 = G__21904;
i__21701_21893 = G__21905;
continue;
} else {
var temp__5804__auto___21906__$1 = cljs.core.seq.call(null,seq__21698_21890);
if(temp__5804__auto___21906__$1){
var seq__21698_21907__$1 = temp__5804__auto___21906__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21698_21907__$1)){
var c__5565__auto___21908 = cljs.core.chunk_first.call(null,seq__21698_21907__$1);
var G__21909 = cljs.core.chunk_rest.call(null,seq__21698_21907__$1);
var G__21910 = c__5565__auto___21908;
var G__21911 = cljs.core.count.call(null,c__5565__auto___21908);
var G__21912 = (0);
seq__21698_21890 = G__21909;
chunk__21699_21891 = G__21910;
count__21700_21892 = G__21911;
i__21701_21893 = G__21912;
continue;
} else {
var vec__21717_21913 = cljs.core.first.call(null,seq__21698_21907__$1);
var __21914 = cljs.core.nth.call(null,vec__21717_21913,(0),null);
var map__21720_21915 = cljs.core.nth.call(null,vec__21717_21913,(1),null);
var map__21720_21916__$1 = cljs.core.__destructure_map.call(null,map__21720_21915);
var layer_21917 = cljs.core.get.call(null,map__21720_21916__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var type_21918 = cljs.core.get.call(null,map__21720_21916__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__21721_21919 = type_21918;
switch (G__21721_21919) {
case "bad-jewel":
juliaworld.state.hide_item.call(null,layer_21917,pos_21888);

break;
case "grey-jewel":
juliaworld.state.hide_item.call(null,layer_21917,pos_21888);

break;
case "jewel":
juliaworld.state.show_item.call(null,layer_21917,pos_21888);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21721_21919)].join('')));

}


var G__21921 = cljs.core.next.call(null,seq__21698_21907__$1);
var G__21922 = null;
var G__21923 = (0);
var G__21924 = (0);
seq__21698_21890 = G__21921;
chunk__21699_21891 = G__21922;
count__21700_21892 = G__21923;
i__21701_21893 = G__21924;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__21925 = cljs.core.next.call(null,seq__21610_21881__$1);
var G__21926 = null;
var G__21927 = (0);
var G__21928 = (0);
seq__21610_21834 = G__21925;
chunk__21611_21835 = G__21926;
count__21612_21836 = G__21927;
i__21613_21837 = G__21928;
continue;
}
} else {
}
}
break;
}

var seq__21722 = cljs.core.seq.call(null,badjewels);
var chunk__21723 = null;
var count__21724 = (0);
var i__21725 = (0);
while(true){
if((i__21725 < count__21724)){
var vec__21780 = cljs.core._nth.call(null,chunk__21723,i__21725);
var pos = cljs.core.nth.call(null,vec__21780,(0),null);
var items__$1 = cljs.core.nth.call(null,vec__21780,(1),null);
if(cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,items__$1))){
var seq__21783_21929 = cljs.core.seq.call(null,items__$1);
var chunk__21784_21930 = null;
var count__21785_21931 = (0);
var i__21786_21932 = (0);
while(true){
if((i__21786_21932 < count__21785_21931)){
var vec__21797_21933 = cljs.core._nth.call(null,chunk__21784_21930,i__21786_21932);
var __21934 = cljs.core.nth.call(null,vec__21797_21933,(0),null);
var map__21800_21935 = cljs.core.nth.call(null,vec__21797_21933,(1),null);
var map__21800_21936__$1 = cljs.core.__destructure_map.call(null,map__21800_21935);
var layer_21937 = cljs.core.get.call(null,map__21800_21936__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var type_21938 = cljs.core.get.call(null,map__21800_21936__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__21801_21939 = type_21938;
switch (G__21801_21939) {
case "bad-jewel":
juliaworld.state.show_item.call(null,layer_21937,pos);

break;
case "grey-jewel":
juliaworld.state.hide_item.call(null,layer_21937,pos);

break;
case "jewel":
juliaworld.state.hide_item.call(null,layer_21937,pos);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21801_21939)].join('')));

}


var G__21941 = seq__21783_21929;
var G__21942 = chunk__21784_21930;
var G__21943 = count__21785_21931;
var G__21944 = (i__21786_21932 + (1));
seq__21783_21929 = G__21941;
chunk__21784_21930 = G__21942;
count__21785_21931 = G__21943;
i__21786_21932 = G__21944;
continue;
} else {
var temp__5804__auto___21945 = cljs.core.seq.call(null,seq__21783_21929);
if(temp__5804__auto___21945){
var seq__21783_21946__$1 = temp__5804__auto___21945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21783_21946__$1)){
var c__5565__auto___21947 = cljs.core.chunk_first.call(null,seq__21783_21946__$1);
var G__21948 = cljs.core.chunk_rest.call(null,seq__21783_21946__$1);
var G__21949 = c__5565__auto___21947;
var G__21950 = cljs.core.count.call(null,c__5565__auto___21947);
var G__21951 = (0);
seq__21783_21929 = G__21948;
chunk__21784_21930 = G__21949;
count__21785_21931 = G__21950;
i__21786_21932 = G__21951;
continue;
} else {
var vec__21802_21952 = cljs.core.first.call(null,seq__21783_21946__$1);
var __21953 = cljs.core.nth.call(null,vec__21802_21952,(0),null);
var map__21805_21954 = cljs.core.nth.call(null,vec__21802_21952,(1),null);
var map__21805_21955__$1 = cljs.core.__destructure_map.call(null,map__21805_21954);
var layer_21956 = cljs.core.get.call(null,map__21805_21955__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var type_21957 = cljs.core.get.call(null,map__21805_21955__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__21806_21958 = type_21957;
switch (G__21806_21958) {
case "bad-jewel":
juliaworld.state.show_item.call(null,layer_21956,pos);

break;
case "grey-jewel":
juliaworld.state.hide_item.call(null,layer_21956,pos);

break;
case "jewel":
juliaworld.state.hide_item.call(null,layer_21956,pos);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21806_21958)].join('')));

}


var G__21960 = cljs.core.next.call(null,seq__21783_21946__$1);
var G__21961 = null;
var G__21962 = (0);
var G__21963 = (0);
seq__21783_21929 = G__21960;
chunk__21784_21930 = G__21961;
count__21785_21931 = G__21962;
i__21786_21932 = G__21963;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__21964 = seq__21722;
var G__21965 = chunk__21723;
var G__21966 = count__21724;
var G__21967 = (i__21725 + (1));
seq__21722 = G__21964;
chunk__21723 = G__21965;
count__21724 = G__21966;
i__21725 = G__21967;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__21722);
if(temp__5804__auto__){
var seq__21722__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21722__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__21722__$1);
var G__21968 = cljs.core.chunk_rest.call(null,seq__21722__$1);
var G__21969 = c__5565__auto__;
var G__21970 = cljs.core.count.call(null,c__5565__auto__);
var G__21971 = (0);
seq__21722 = G__21968;
chunk__21723 = G__21969;
count__21724 = G__21970;
i__21725 = G__21971;
continue;
} else {
var vec__21807 = cljs.core.first.call(null,seq__21722__$1);
var pos = cljs.core.nth.call(null,vec__21807,(0),null);
var items__$1 = cljs.core.nth.call(null,vec__21807,(1),null);
if(cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,items__$1))){
var seq__21810_21972 = cljs.core.seq.call(null,items__$1);
var chunk__21811_21973 = null;
var count__21812_21974 = (0);
var i__21813_21975 = (0);
while(true){
if((i__21813_21975 < count__21812_21974)){
var vec__21824_21976 = cljs.core._nth.call(null,chunk__21811_21973,i__21813_21975);
var __21977 = cljs.core.nth.call(null,vec__21824_21976,(0),null);
var map__21827_21978 = cljs.core.nth.call(null,vec__21824_21976,(1),null);
var map__21827_21979__$1 = cljs.core.__destructure_map.call(null,map__21827_21978);
var layer_21980 = cljs.core.get.call(null,map__21827_21979__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var type_21981 = cljs.core.get.call(null,map__21827_21979__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__21828_21982 = type_21981;
switch (G__21828_21982) {
case "bad-jewel":
juliaworld.state.show_item.call(null,layer_21980,pos);

break;
case "grey-jewel":
juliaworld.state.hide_item.call(null,layer_21980,pos);

break;
case "jewel":
juliaworld.state.hide_item.call(null,layer_21980,pos);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21828_21982)].join('')));

}


var G__21984 = seq__21810_21972;
var G__21985 = chunk__21811_21973;
var G__21986 = count__21812_21974;
var G__21987 = (i__21813_21975 + (1));
seq__21810_21972 = G__21984;
chunk__21811_21973 = G__21985;
count__21812_21974 = G__21986;
i__21813_21975 = G__21987;
continue;
} else {
var temp__5804__auto___21988__$1 = cljs.core.seq.call(null,seq__21810_21972);
if(temp__5804__auto___21988__$1){
var seq__21810_21989__$1 = temp__5804__auto___21988__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21810_21989__$1)){
var c__5565__auto___21990 = cljs.core.chunk_first.call(null,seq__21810_21989__$1);
var G__21991 = cljs.core.chunk_rest.call(null,seq__21810_21989__$1);
var G__21992 = c__5565__auto___21990;
var G__21993 = cljs.core.count.call(null,c__5565__auto___21990);
var G__21994 = (0);
seq__21810_21972 = G__21991;
chunk__21811_21973 = G__21992;
count__21812_21974 = G__21993;
i__21813_21975 = G__21994;
continue;
} else {
var vec__21829_21995 = cljs.core.first.call(null,seq__21810_21989__$1);
var __21996 = cljs.core.nth.call(null,vec__21829_21995,(0),null);
var map__21832_21997 = cljs.core.nth.call(null,vec__21829_21995,(1),null);
var map__21832_21998__$1 = cljs.core.__destructure_map.call(null,map__21832_21997);
var layer_21999 = cljs.core.get.call(null,map__21832_21998__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var type_22000 = cljs.core.get.call(null,map__21832_21998__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__21833_22001 = type_22000;
switch (G__21833_22001) {
case "bad-jewel":
juliaworld.state.show_item.call(null,layer_21999,pos);

break;
case "grey-jewel":
juliaworld.state.hide_item.call(null,layer_21999,pos);

break;
case "jewel":
juliaworld.state.hide_item.call(null,layer_21999,pos);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21833_22001)].join('')));

}


var G__22003 = cljs.core.next.call(null,seq__21810_21989__$1);
var G__22004 = null;
var G__22005 = (0);
var G__22006 = (0);
seq__21810_21972 = G__22003;
chunk__21811_21973 = G__22004;
count__21812_21974 = G__22005;
i__21813_21975 = G__22006;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__22007 = cljs.core.next.call(null,seq__21722__$1);
var G__22008 = null;
var G__22009 = (0);
var G__22010 = (0);
seq__21722 = G__22007;
chunk__21723 = G__22008;
count__21724 = G__22009;
i__21725 = G__22010;
continue;
}
} else {
return null;
}
}
break;
}
});
juliaworld.state.reset_hidden_items = (function juliaworld$state$reset_hidden_items(){
return cljs.core.reset_BANG_.call(null,juliaworld.state.game,clojure.walk.postwalk.call(null,(function (p1__22011_SHARP_){
if(((cljs.core.contains_QMARK_.call(null,p1__22011_SHARP_,new cljs.core.Keyword(null,"visible","visible",-1024216805))) && (cljs.core.contains_QMARK_.call(null,p1__22011_SHARP_,new cljs.core.Keyword(null,"action","action",-811238024))))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"init-hidden","init-hidden",-94352729).cljs$core$IFn$_invoke$arity$1(p1__22011_SHARP_))){
(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(p1__22011_SHARP_).visible = false);

return cljs.core.assoc.call(null,p1__22011_SHARP_,new cljs.core.Keyword(null,"visible","visible",-1024216805),false);
} else {
(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(p1__22011_SHARP_).visible = true);

return cljs.core.assoc.call(null,p1__22011_SHARP_,new cljs.core.Keyword(null,"visible","visible",-1024216805),true);
}
} else {
return p1__22011_SHARP_;
}
}),cljs.core.deref.call(null,juliaworld.state.game)));
});
juliaworld.state.reset_state = (function juliaworld$state$reset_state(scene_number,herox,heroy,end_score){
juliaworld.state.reset_hidden_items.call(null);

juliaworld.state.set_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780)], null),(0));

juliaworld.state.set_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415)], null),scene_number);

juliaworld.state.set_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [herox,heroy], null));

return juliaworld.state.set_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"final-score","final-score",-1149434122)], null),end_score);
});
juliaworld.state.level_cleared_QMARK_ = (function juliaworld$state$level_cleared_QMARK_(){
var map__22012 = cljs.core.deref.call(null,juliaworld.state.game);
var map__22012__$1 = cljs.core.__destructure_map.call(null,map__22012);
var map__22013 = cljs.core.get.call(null,map__22012__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__22013__$1 = cljs.core.__destructure_map.call(null,map__22013);
var score = cljs.core.get.call(null,map__22013__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var final_score = cljs.core.get.call(null,map__22013__$1,new cljs.core.Keyword(null,"final-score","final-score",-1149434122));
return cljs.core._EQ_.call(null,score,final_score);
});
juliaworld.state.inc_score = (function juliaworld$state$inc_score(){
return cljs.core.swap_BANG_.call(null,juliaworld.state.game,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"score","score",-1963588780)], null),cljs.core.inc);
});
juliaworld.state.get_animation = (function juliaworld$state$get_animation(name){
return name.call(null,new cljs.core.Keyword(null,"animations","animations",140711296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game)));
});
juliaworld.state.start_animation = (function juliaworld$state$start_animation(name){
return new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_animation.call(null,name)).play();
});
juliaworld.state.stop_animation = (function juliaworld$state$stop_animation(name){
return new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_animation.call(null,name)).stop();
});
juliaworld.state.tile_props = (function juliaworld$state$tile_props(n){
return new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"sprites","sprites",-1835833922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game)),n));
});
juliaworld.state.get_level_number = (function juliaworld$state$get_level_number(){
return parseInt(cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.name.call(null,juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415)], null))),"-")));
});
juliaworld.state.sprite_info = (function juliaworld$state$sprite_info(id){
var map__22014 = cljs.core.get.call(null,new cljs.core.Keyword(null,"sprites","sprites",-1835833922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game)),id);
var map__22014__$1 = cljs.core.__destructure_map.call(null,map__22014);
var type = cljs.core.get.call(null,map__22014__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var properties = cljs.core.get.call(null,map__22014__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
return cljs.core.assoc.call(null,properties,new cljs.core.Keyword(null,"class","class",-2030961996),type);
});
juliaworld.state.get_app = (function juliaworld$state$get_app(){
return new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game));
});
juliaworld.state.xy_props = (function juliaworld$state$xy_props(x,y){
var layers = new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game));
var deps = new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(layers.call(null,juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415)], null))));
var vec__22016 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-block-res","screen-block-res",-1934351900)], null));
var xb = cljs.core.nth.call(null,vec__22016,(0),null);
var yb = cljs.core.nth.call(null,vec__22016,(1),null);
var pos = ((xb * y) + x);
var $ = layers;
var $__$1 = cljs.core.map.call(null,$,deps);
var $__$2 = cljs.core.map.call(null,new cljs.core.Keyword(null,"data","data",-232669377),$__$1);
var $__$3 = cljs.core.map.call(null,(function (p1__22015_SHARP_){
return cljs.core.nth.call(null,p1__22015_SHARP_,pos);
}),$__$2);
return cljs.core.map.call(null,juliaworld.state.tile_props,$__$3);
});
juliaworld.state.position__GT_items = (function juliaworld$state$position__GT_items(x,y){
var layers = cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"layers","layers",1944875032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,juliaworld.state.game)),juliaworld.state.get_current_layers.call(null));
return cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)),cljs.core.filter.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.filter.call(null,cljs.core.map_QMARK_,cljs.core.map.call(null,(function (p1__22020_SHARP_){
return cljs.core.get.call(null,p1__22020_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}),cljs.core.map.call(null,(function (p__22021){
var vec__22022 = p__22021;
var ly_name = cljs.core.nth.call(null,vec__22022,(0),null);
var map__22025 = cljs.core.nth.call(null,vec__22022,(1),null);
var map__22025__$1 = cljs.core.__destructure_map.call(null,map__22025);
var items = cljs.core.get.call(null,map__22025__$1,new cljs.core.Keyword(null,"items","items",1031954938));
if(cljs.core.truth_(items)){
return cljs.core.update_vals.call(null,items,(function (p1__22019_SHARP_){
return cljs.core.merge.call(null,p1__22019_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layer","layer",-1601820589),ly_name,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
}));
} else {
return null;
}
}),layers)))));
});

//# sourceMappingURL=state.js.map

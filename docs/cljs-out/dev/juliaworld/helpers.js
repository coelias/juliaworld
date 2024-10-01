// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('juliaworld.helpers');
goog.require('cljs.core');
goog.require('juliaworld.state');
juliaworld.helpers.mylog = (function juliaworld$helpers$mylog(x){
cljs.pprint.pprint(x);

return x;
});
juliaworld.helpers.props__GT_map = (function juliaworld$helpers$props__GT_map(props){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__9869_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__9869_SHARP_)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__9869_SHARP_)],null));
}),props));
});
juliaworld.helpers.getPixiTexture = (function juliaworld$helpers$getPixiTexture(name){
return PIXI.Texture.from(name);
});
juliaworld.helpers.__GT_num = (function juliaworld$helpers$__GT_num(n){
var G__9870 = isNaN(n);
if(cljs.core._EQ_.call(null,true,G__9870)){
return n;
} else {
if(cljs.core._EQ_.call(null,false,G__9870)){
return Number(n);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9870)].join('')));

}
}
});

//# sourceMappingURL=helpers.js.map

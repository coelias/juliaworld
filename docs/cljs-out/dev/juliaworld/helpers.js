// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('juliaworld.helpers');
goog.require('cljs.core');
goog.require('juliaworld.state');
juliaworld.helpers.mylog = (function juliaworld$helpers$mylog(x){
console.log(x);

return x;
});
juliaworld.helpers.props__GT_map = (function juliaworld$helpers$props__GT_map(props){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__22028_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__22028_SHARP_)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__22028_SHARP_)],null));
}),props));
});
juliaworld.helpers.getPixiTexture = (function juliaworld$helpers$getPixiTexture(name){
return PIXI.Texture.from(name);
});
juliaworld.helpers.__GT_num = (function juliaworld$helpers$__GT_num(n){
var G__22029 = isNaN(n);
if(cljs.core._EQ_.call(null,true,G__22029)){
return n;
} else {
if(cljs.core._EQ_.call(null,false,G__22029)){
return Number(n);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22029)].join('')));

}
}
});
juliaworld.helpers.store_property = (function juliaworld$helpers$store_property(path,value){
var stored_data = cljs.reader.read_string.call(null,localStorage.getItem("juliaworld"));
var $ = stored_data;
var $__$1 = cljs.core.assoc_in.call(null,$,path,value);
var $__$2 = cljs.core.prn_str.call(null,$__$1);
return localStorage.setItem("juliaworld",$__$2);
});
juliaworld.helpers.get_stored_property = (function juliaworld$helpers$get_stored_property(path){
return cljs.core.get_in.call(null,cljs.reader.read_string.call(null,localStorage.getItem("juliaworld")),path);
});
juliaworld.helpers.get_completed_levels = (function juliaworld$helpers$get_completed_levels(){
var or__5043__auto__ = juliaworld.helpers.get_stored_property.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547)], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
});
juliaworld.helpers.update_progress = (function juliaworld$helpers$update_progress(level){
var newprogress = (function (){var x__5128__auto__ = (level + (1));
var y__5129__auto__ = juliaworld.helpers.get_completed_levels.call(null);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
var total_levels = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n-levels","n-levels",-657990795)], null));
return juliaworld.helpers.store_property.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547)], null),(function (){var x__5131__auto__ = total_levels;
var y__5132__auto__ = newprogress;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})());
});
juliaworld.helpers.save_editor_contents = (function juliaworld$helpers$save_editor_contents(){
var level = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415)], null));
var code = document.querySelector(".CodeMirror").CodeMirror.getValue();
if((!(cljs.core.empty_QMARK_.call(null,code)))){
return juliaworld.helpers.store_property.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),level], null),code);
} else {
return null;
}
});
juliaworld.helpers.get_scene_code = (function juliaworld$helpers$get_scene_code(){
var level = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415)], null));
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_layer.call(null,level)));
});
juliaworld.helpers.load_saved_code = (function juliaworld$helpers$load_saved_code(){
var level = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415)], null));
var code = (function (){var or__5043__auto__ = juliaworld.helpers.get_stored_property.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),level], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return juliaworld.helpers.get_scene_code.call(null);
}
})();
return document.querySelector(".CodeMirror").CodeMirror.setValue(((cljs.core.empty_QMARK_.call(null,code))?"(juliaworld.m/code\n;; vvv - Write here your code - vvv\n\n\n)":code));
});

//# sourceMappingURL=helpers.js.map

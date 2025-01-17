// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('juliaworld.hero');
goog.require('cljs.core');
goog.require('juliaworld.state');
goog.require('juliaworld.sound');
goog.require('cljs.core.async');
if((typeof juliaworld !== 'undefined') && (typeof juliaworld.hero !== 'undefined') && (typeof juliaworld.hero.process_item_action !== 'undefined')){
} else {
juliaworld.hero.process_item_action = (function (){var method_table__5639__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"juliaworld.hero","process-item-action"),cljs.core.comp.call(null,cljs.core.first,cljs.core.first,new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
cljs.core._add_method.call(null,juliaworld.hero.process_item_action,"play",(function (p__27911){
var map__27912 = p__27911;
var map__27912__$1 = cljs.core.__destructure_map.call(null,map__27912);
var action = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return juliaworld.sound.play.call(null,cljs.core.keyword.call(null,cljs.core.second.call(null,cljs.core.first.call(null,action))));
}));
cljs.core._add_method.call(null,juliaworld.hero.process_item_action,"remove",(function (p__27913){
var map__27914 = p__27913;
var map__27914__$1 = cljs.core.__destructure_map.call(null,map__27914);
var sprite = cljs.core.get.call(null,map__27914__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var layer = cljs.core.get.call(null,map__27914__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var position = cljs.core.get.call(null,map__27914__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return juliaworld.state.hide_item.call(null,layer,position);
}));
cljs.core._add_method.call(null,juliaworld.hero.process_item_action,"score",(function (){
return juliaworld.state.inc_score.call(null);
}));
juliaworld.hero.calculate_hero_z = (function juliaworld$hero$calculate_hero_z(heroy,layers){
var G__27918 = layers;
var vec__27919 = G__27918;
var seq__27920 = cljs.core.seq.call(null,vec__27919);
var first__27921 = cljs.core.first.call(null,seq__27920);
var seq__27920__$1 = cljs.core.next.call(null,seq__27920);
var f = first__27921;
var r = seq__27920__$1;
var pos = (0);
var G__27918__$1 = G__27918;
var pos__$1 = pos;
while(true){
var vec__27922 = G__27918__$1;
var seq__27923 = cljs.core.seq.call(null,vec__27922);
var first__27924 = cljs.core.first.call(null,seq__27923);
var seq__27923__$1 = cljs.core.next.call(null,seq__27923);
var f__$1 = first__27924;
var r__$1 = seq__27923__$1;
var pos__$2 = pos__$1;
if(cljs.core.truth_(f__$1)){
var map__27925 = juliaworld.state.get_layer.call(null,f__$1);
var map__27925__$1 = cljs.core.__destructure_map.call(null,map__27925);
var map__27926 = cljs.core.get.call(null,map__27925__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var map__27926__$1 = cljs.core.__destructure_map.call(null,map__27926);
var z_index = cljs.core.get.call(null,map__27926__$1,new cljs.core.Keyword(null,"z-index","z-index",1892827090));
var lowest_y = cljs.core.get.call(null,map__27925__$1,new cljs.core.Keyword(null,"lowest-y","lowest-y",-1987829690));
if(cljs.core.not.call(null,z_index)){
var G__27927 = r__$1;
var G__27928 = (pos__$2 + (1));
G__27918__$1 = G__27927;
pos__$1 = G__27928;
continue;
} else {
if((heroy >= lowest_y)){
var G__27929 = r__$1;
var G__27930 = (pos__$2 + (1));
G__27918__$1 = G__27929;
pos__$1 = G__27930;
continue;
} else {
var G__27931 = r__$1;
var G__27932 = pos__$2;
G__27918__$1 = G__27931;
pos__$1 = G__27932;
continue;

}
}
} else {
return pos__$2;
}
break;
}
});
juliaworld.hero.hero_coords = (function juliaworld$hero$hero_coords(x,y,name){
var vec__27933 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null));
var tilew = cljs.core.nth.call(null,vec__27933,(0),null);
var tileh = cljs.core.nth.call(null,vec__27933,(1),null);
var map__27936 = juliaworld.state.get_animation.call(null,name);
var map__27936__$1 = cljs.core.__destructure_map.call(null,map__27936);
var basex = cljs.core.get.call(null,map__27936__$1,new cljs.core.Keyword(null,"basex","basex",-610151236));
var basey = cljs.core.get.call(null,map__27936__$1,new cljs.core.Keyword(null,"basey","basey",-430302880));
var vec__27937 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((.5 + x) * tilew) - basex),(((.5 + y) * tileh) - basey)], null);
var x__$1 = cljs.core.nth.call(null,vec__27937,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__27937,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null);
});
juliaworld.hero.set_hero_pos = (function juliaworld$hero$set_hero_pos(x,y,name){
var vec__27940 = juliaworld.hero.hero_coords.call(null,x,y,name);
var x__$1 = cljs.core.nth.call(null,vec__27940,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__27940,(1),null);
var sprite = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_animation.call(null,name));
(sprite.x = x__$1);

return (sprite.y = y__$1);
});
new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_layer.call(null,new cljs.core.Keyword(null,"level-1-diamonds","level-1-diamonds",-93484308)));
juliaworld.hero.remove_hero = (function juliaworld$hero$remove_hero(){
var current = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var sprite = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_animation.call(null,current));
juliaworld.state.stop_animation.call(null,current);

return juliaworld.state.get_app.call(null).stage.removeChild(sprite);
});
juliaworld.hero.show_hero = (function juliaworld$hero$show_hero(){
var current = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var hero = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_animation.call(null,current));
var vec__27943 = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var x = cljs.core.nth.call(null,vec__27943,(0),null);
var y = cljs.core.nth.call(null,vec__27943,(1),null);
var new_z = juliaworld.hero.calculate_hero_z.call(null,y,juliaworld.state.get_current_layers.call(null));
juliaworld.state.get_app.call(null).stage.addChildAt(hero,new_z);

juliaworld.hero.set_hero_pos.call(null,x,y,current);

return juliaworld.state.start_animation.call(null,current);
});
juliaworld.hero.turn_right = (function juliaworld$hero$turn_right(){
var next = (function (){var G__27946 = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var G__27946__$1 = (((G__27946 instanceof cljs.core.Keyword))?G__27946.fqn:null);
switch (G__27946__$1) {
case "idle-down":
return new cljs.core.Keyword(null,"idle-left","idle-left",292466530);

break;
case "idle-left":
return new cljs.core.Keyword(null,"idle-up","idle-up",2057659325);

break;
case "idle-up":
return new cljs.core.Keyword(null,"idle-right","idle-right",-2129027321);

break;
case "idle-right":
return new cljs.core.Keyword(null,"idle-down","idle-down",-1942157088);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27946__$1)].join('')));

}
})();
var _ch = cljs.core.async.chan.call(null);
var c__15619__auto___27973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_27956){
var state_val_27957 = (state_27956[(1)]);
if((state_val_27957 === (1))){
var inst_27947 = juliaworld.hero.remove_hero.call(null);
var inst_27948 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27949 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)];
var inst_27950 = (new cljs.core.PersistentVector(null,2,(5),inst_27948,inst_27949,null));
var inst_27951 = juliaworld.state.set_state.call(null,inst_27950,next);
var inst_27952 = juliaworld.hero.show_hero.call(null);
var inst_27953 = (function (){return (function (){
var c__15619__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_27961){
var state_val_27962 = (state_27961[(1)]);
if((state_val_27962 === (1))){
var state_27961__$1 = state_27961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27961__$1,(2),_ch,new cljs.core.Keyword(null,"turn-right","turn-right",-1479498405));
} else {
if((state_val_27962 === (2))){
var inst_27959 = (state_27961[(2)]);
var state_27961__$1 = state_27961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27961__$1,inst_27959);
} else {
return null;
}
}
});
return (function() {
var juliaworld$hero$turn_right_$_state_machine__15523__auto__ = null;
var juliaworld$hero$turn_right_$_state_machine__15523__auto____0 = (function (){
var statearr_27963 = [null,null,null,null,null,null,null];
(statearr_27963[(0)] = juliaworld$hero$turn_right_$_state_machine__15523__auto__);

(statearr_27963[(1)] = (1));

return statearr_27963;
});
var juliaworld$hero$turn_right_$_state_machine__15523__auto____1 = (function (state_27961){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_27961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e27964){if((e27964 instanceof Object)){
var ex__15526__auto__ = e27964;
var statearr_27965_27974 = state_27961;
(statearr_27965_27974[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27975 = state_27961;
state_27961 = G__27975;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$turn_right_$_state_machine__15523__auto__ = function(state_27961){
switch(arguments.length){
case 0:
return juliaworld$hero$turn_right_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$turn_right_$_state_machine__15523__auto____1.call(this,state_27961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$turn_right_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$turn_right_$_state_machine__15523__auto____0;
juliaworld$hero$turn_right_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$turn_right_$_state_machine__15523__auto____1;
return juliaworld$hero$turn_right_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_27966 = f__15620__auto__.call(null);
(statearr_27966[(6)] = c__15619__auto____$1);

return statearr_27966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto____$1;
});
})();
var inst_27954 = setTimeout(inst_27953,(500));
var state_27956__$1 = (function (){var statearr_27967 = state_27956;
(statearr_27967[(7)] = inst_27952);

(statearr_27967[(8)] = inst_27951);

(statearr_27967[(9)] = inst_27947);

return statearr_27967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27956__$1,inst_27954);
} else {
return null;
}
});
return (function() {
var juliaworld$hero$turn_right_$_state_machine__15523__auto__ = null;
var juliaworld$hero$turn_right_$_state_machine__15523__auto____0 = (function (){
var statearr_27968 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27968[(0)] = juliaworld$hero$turn_right_$_state_machine__15523__auto__);

(statearr_27968[(1)] = (1));

return statearr_27968;
});
var juliaworld$hero$turn_right_$_state_machine__15523__auto____1 = (function (state_27956){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_27956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e27969){if((e27969 instanceof Object)){
var ex__15526__auto__ = e27969;
var statearr_27970_27976 = state_27956;
(statearr_27970_27976[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27977 = state_27956;
state_27956 = G__27977;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$turn_right_$_state_machine__15523__auto__ = function(state_27956){
switch(arguments.length){
case 0:
return juliaworld$hero$turn_right_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$turn_right_$_state_machine__15523__auto____1.call(this,state_27956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$turn_right_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$turn_right_$_state_machine__15523__auto____0;
juliaworld$hero$turn_right_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$turn_right_$_state_machine__15523__auto____1;
return juliaworld$hero$turn_right_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_27971 = f__15620__auto__.call(null);
(statearr_27971[(6)] = c__15619__auto___27973);

return statearr_27971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return _ch;
});
juliaworld.hero.turn_left = (function juliaworld$hero$turn_left(){
var next = (function (){var G__27978 = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var G__27978__$1 = (((G__27978 instanceof cljs.core.Keyword))?G__27978.fqn:null);
switch (G__27978__$1) {
case "idle-down":
return new cljs.core.Keyword(null,"idle-right","idle-right",-2129027321);

break;
case "idle-left":
return new cljs.core.Keyword(null,"idle-down","idle-down",-1942157088);

break;
case "idle-up":
return new cljs.core.Keyword(null,"idle-left","idle-left",292466530);

break;
case "idle-right":
return new cljs.core.Keyword(null,"idle-up","idle-up",2057659325);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27978__$1)].join('')));

}
})();
var _ch = cljs.core.async.chan.call(null);
var c__15619__auto___28005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_27988){
var state_val_27989 = (state_27988[(1)]);
if((state_val_27989 === (1))){
var inst_27979 = juliaworld.hero.remove_hero.call(null);
var inst_27980 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27981 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)];
var inst_27982 = (new cljs.core.PersistentVector(null,2,(5),inst_27980,inst_27981,null));
var inst_27983 = juliaworld.state.set_state.call(null,inst_27982,next);
var inst_27984 = juliaworld.hero.show_hero.call(null);
var inst_27985 = (function (){return (function (){
var c__15619__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_27993){
var state_val_27994 = (state_27993[(1)]);
if((state_val_27994 === (1))){
var state_27993__$1 = state_27993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27993__$1,(2),_ch,new cljs.core.Keyword(null,"turn-left","turn-left",-942868009));
} else {
if((state_val_27994 === (2))){
var inst_27991 = (state_27993[(2)]);
var state_27993__$1 = state_27993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27993__$1,inst_27991);
} else {
return null;
}
}
});
return (function() {
var juliaworld$hero$turn_left_$_state_machine__15523__auto__ = null;
var juliaworld$hero$turn_left_$_state_machine__15523__auto____0 = (function (){
var statearr_27995 = [null,null,null,null,null,null,null];
(statearr_27995[(0)] = juliaworld$hero$turn_left_$_state_machine__15523__auto__);

(statearr_27995[(1)] = (1));

return statearr_27995;
});
var juliaworld$hero$turn_left_$_state_machine__15523__auto____1 = (function (state_27993){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_27993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e27996){if((e27996 instanceof Object)){
var ex__15526__auto__ = e27996;
var statearr_27997_28006 = state_27993;
(statearr_27997_28006[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28007 = state_27993;
state_27993 = G__28007;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$turn_left_$_state_machine__15523__auto__ = function(state_27993){
switch(arguments.length){
case 0:
return juliaworld$hero$turn_left_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$turn_left_$_state_machine__15523__auto____1.call(this,state_27993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$turn_left_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$turn_left_$_state_machine__15523__auto____0;
juliaworld$hero$turn_left_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$turn_left_$_state_machine__15523__auto____1;
return juliaworld$hero$turn_left_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_27998 = f__15620__auto__.call(null);
(statearr_27998[(6)] = c__15619__auto____$1);

return statearr_27998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto____$1;
});
})();
var inst_27986 = setTimeout(inst_27985,(500));
var state_27988__$1 = (function (){var statearr_27999 = state_27988;
(statearr_27999[(7)] = inst_27984);

(statearr_27999[(8)] = inst_27979);

(statearr_27999[(9)] = inst_27983);

return statearr_27999;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27988__$1,inst_27986);
} else {
return null;
}
});
return (function() {
var juliaworld$hero$turn_left_$_state_machine__15523__auto__ = null;
var juliaworld$hero$turn_left_$_state_machine__15523__auto____0 = (function (){
var statearr_28000 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28000[(0)] = juliaworld$hero$turn_left_$_state_machine__15523__auto__);

(statearr_28000[(1)] = (1));

return statearr_28000;
});
var juliaworld$hero$turn_left_$_state_machine__15523__auto____1 = (function (state_27988){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_27988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28001){if((e28001 instanceof Object)){
var ex__15526__auto__ = e28001;
var statearr_28002_28008 = state_27988;
(statearr_28002_28008[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28009 = state_27988;
state_27988 = G__28009;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$turn_left_$_state_machine__15523__auto__ = function(state_27988){
switch(arguments.length){
case 0:
return juliaworld$hero$turn_left_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$turn_left_$_state_machine__15523__auto____1.call(this,state_27988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$turn_left_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$turn_left_$_state_machine__15523__auto____0;
juliaworld$hero$turn_left_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$turn_left_$_state_machine__15523__auto____1;
return juliaworld$hero$turn_left_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28003 = f__15620__auto__.call(null);
(statearr_28003[(6)] = c__15619__auto___28005);

return statearr_28003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return _ch;
});
juliaworld.hero.get_forward_coords = (function juliaworld$hero$get_forward_coords(current){
var vec__28010 = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var x = cljs.core.nth.call(null,vec__28010,(0),null);
var y = cljs.core.nth.call(null,vec__28010,(1),null);
var vec__28013 = (function (){var G__28016 = current;
var G__28016__$1 = (((G__28016 instanceof cljs.core.Keyword))?G__28016.fqn:null);
switch (G__28016__$1) {
case "idle-up":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null);

break;
case "idle-down":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null);

break;
case "idle-left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null);

break;
case "idle-right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28016__$1)].join('')));

}
})();
var nx = cljs.core.nth.call(null,vec__28013,(0),null);
var ny = cljs.core.nth.call(null,vec__28013,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny], null);
});
juliaworld.hero.calculate_delta = (function juliaworld$hero$calculate_delta(orig,dest,speed){
var delta = (orig - dest);
if((delta > (1))){
return (- speed);
} else {
if((delta < (-1))){
return speed;
} else {
return (0);

}
}
});
juliaworld.hero.move_hero = (function juliaworld$hero$move_hero(p__28018,current,speed){
var vec__28019 = p__28018;
var x = cljs.core.nth.call(null,vec__28019,(0),null);
var y = cljs.core.nth.call(null,vec__28019,(1),null);
var vec__28022 = juliaworld.hero.hero_coords.call(null,x,y,current);
var finalx = cljs.core.nth.call(null,vec__28022,(0),null);
var finaly = cljs.core.nth.call(null,vec__28022,(1),null);
var finished = cljs.core.async.chan.call(null);
var sp = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_animation.call(null,current));
var xorig = sp.x;
var yorig = sp.y;
var dx = juliaworld.hero.calculate_delta.call(null,xorig,finalx,speed);
var dy = juliaworld.hero.calculate_delta.call(null,yorig,finaly,speed);
var fn = (function juliaworld$hero$move_hero_$_movement(){
var cx = sp.x;
var cy = sp.y;
var vec__28025 = cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null));
var nx = cljs.core.nth.call(null,vec__28025,(0),null);
var ny = cljs.core.nth.call(null,vec__28025,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [finalx,finaly], null))){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28034){
var state_val_28035 = (state_28034[(1)]);
if((state_val_28035 === (1))){
var state_28034__$1 = state_28034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28034__$1,(2),finished,new cljs.core.Keyword(null,"finished","finished",-1018867731));
} else {
if((state_val_28035 === (2))){
var inst_28029 = (state_28034[(2)]);
var inst_28030 = juliaworld.state.get_app.call(null);
var inst_28031 = inst_28030.ticker;
var inst_28032 = inst_28031.remove(juliaworld$hero$move_hero_$_movement);
var state_28034__$1 = (function (){var statearr_28036 = state_28034;
(statearr_28036[(7)] = inst_28029);

return statearr_28036;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28034__$1,inst_28032);
} else {
return null;
}
}
});
return (function() {
var juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__ = null;
var juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____0 = (function (){
var statearr_28037 = [null,null,null,null,null,null,null,null];
(statearr_28037[(0)] = juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__);

(statearr_28037[(1)] = (1));

return statearr_28037;
});
var juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____1 = (function (state_28034){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28038){if((e28038 instanceof Object)){
var ex__15526__auto__ = e28038;
var statearr_28039_28041 = state_28034;
(statearr_28039_28041[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28042 = state_28034;
state_28034 = G__28042;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__ = function(state_28034){
switch(arguments.length){
case 0:
return juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____1.call(this,state_28034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____0;
juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____1;
return juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28040 = f__15620__auto__.call(null);
(statearr_28040[(6)] = c__15619__auto__);

return statearr_28040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
} else {
(sp.x = nx);

return (sp.y = ny);
}
});
juliaworld.state.get_app.call(null).ticker.add(fn);

return finished;
});
juliaworld.hero.process_item_actions = (function juliaworld$hero$process_item_actions(item){
var i = item;
while(true){
var map__28043 = i;
var map__28043__$1 = cljs.core.__destructure_map.call(null,map__28043);
var action = cljs.core.get.call(null,map__28043__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(cljs.core.not_empty.call(null,action))){
juliaworld.hero.process_item_action.call(null,i);

var G__28044 = cljs.core.update.call(null,i,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.rest);
i = G__28044;
continue;
} else {
return null;
}
break;
}
});
juliaworld.hero.post_arrival_actions = (function juliaworld$hero$post_arrival_actions(nx,ny){
var temp__5804__auto__ = cljs.core.seq.call(null,juliaworld.state.position__GT_items.call(null,nx,ny));
if(temp__5804__auto__){
var items = temp__5804__auto__;
var seq__28045 = cljs.core.seq.call(null,items);
var chunk__28046 = null;
var count__28047 = (0);
var i__28048 = (0);
while(true){
if((i__28048 < count__28047)){
var i = cljs.core._nth.call(null,chunk__28046,i__28048);
juliaworld.hero.process_item_actions.call(null,i);


var G__28049 = seq__28045;
var G__28050 = chunk__28046;
var G__28051 = count__28047;
var G__28052 = (i__28048 + (1));
seq__28045 = G__28049;
chunk__28046 = G__28050;
count__28047 = G__28051;
i__28048 = G__28052;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__28045);
if(temp__5804__auto____$1){
var seq__28045__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28045__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__28045__$1);
var G__28053 = cljs.core.chunk_rest.call(null,seq__28045__$1);
var G__28054 = c__5565__auto__;
var G__28055 = cljs.core.count.call(null,c__5565__auto__);
var G__28056 = (0);
seq__28045 = G__28053;
chunk__28046 = G__28054;
count__28047 = G__28055;
i__28048 = G__28056;
continue;
} else {
var i = cljs.core.first.call(null,seq__28045__$1);
juliaworld.hero.process_item_actions.call(null,i);


var G__28057 = cljs.core.next.call(null,seq__28045__$1);
var G__28058 = null;
var G__28059 = (0);
var G__28060 = (0);
seq__28045 = G__28057;
chunk__28046 = G__28058;
count__28047 = G__28059;
i__28048 = G__28060;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
juliaworld.hero.forward = (function juliaworld$hero$forward(){
var current = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var next = (function (){var G__28064 = current;
var G__28064__$1 = (((G__28064 instanceof cljs.core.Keyword))?G__28064.fqn:null);
switch (G__28064__$1) {
case "idle-down":
return new cljs.core.Keyword(null,"run-down","run-down",-1145194637);

break;
case "idle-left":
return new cljs.core.Keyword(null,"run-left","run-left",1595101906);

break;
case "idle-up":
return new cljs.core.Keyword(null,"run-up","run-up",-564978060);

break;
case "idle-right":
return new cljs.core.Keyword(null,"run-right","run-right",-1124567373);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28064__$1)].join('')));

}
})();
var vec__28061 = juliaworld.hero.get_forward_coords.call(null,current);
var nx = cljs.core.nth.call(null,vec__28061,(0),null);
var ny = cljs.core.nth.call(null,vec__28061,(1),null);
var collision = cljs.core.some.call(null,cljs.core.identity,cljs.core.map.call(null,new cljs.core.Keyword(null,"collision","collision",-201625508),juliaworld.state.xy_props.call(null,nx,ny)));
var f1 = cljs.core.async.chan.call(null);
var c__15619__auto___28123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28100){
var state_val_28101 = (state_28100[(1)]);
if((state_val_28101 === (1))){
var state_28100__$1 = state_28100;
if(cljs.core.truth_(collision)){
var statearr_28102_28124 = state_28100__$1;
(statearr_28102_28124[(1)] = (2));

} else {
var statearr_28103_28125 = state_28100__$1;
(statearr_28103_28125[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (2))){
var state_28100__$1 = state_28100;
var statearr_28104_28126 = state_28100__$1;
(statearr_28104_28126[(2)] = null);

(statearr_28104_28126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (3))){
var inst_28067 = juliaworld.hero.remove_hero.call(null);
var inst_28068 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28069 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)];
var inst_28070 = (new cljs.core.PersistentVector(null,2,(5),inst_28068,inst_28069,null));
var inst_28071 = juliaworld.state.set_state.call(null,inst_28070,next);
var inst_28072 = juliaworld.hero.show_hero.call(null);
var inst_28073 = juliaworld.state.start_animation.call(null,next);
var inst_28074 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28075 = [nx,ny];
var inst_28076 = (new cljs.core.PersistentVector(null,2,(5),inst_28074,inst_28075,null));
var inst_28077 = juliaworld.hero.move_hero.call(null,inst_28076,next,0.5);
var state_28100__$1 = (function (){var statearr_28105 = state_28100;
(statearr_28105[(7)] = inst_28071);

(statearr_28105[(8)] = inst_28073);

(statearr_28105[(9)] = inst_28067);

(statearr_28105[(10)] = inst_28072);

return statearr_28105;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28100__$1,(5),inst_28077);
} else {
if((state_val_28101 === (4))){
var inst_28096 = (state_28100[(2)]);
var inst_28097 = (function (){return (function (){
var c__15619__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28109){
var state_val_28110 = (state_28109[(1)]);
if((state_val_28110 === (1))){
var state_28109__$1 = state_28109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28109__$1,(2),f1,new cljs.core.Keyword(null,"forward","forward",-557345303));
} else {
if((state_val_28110 === (2))){
var inst_28107 = (state_28109[(2)]);
var state_28109__$1 = state_28109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28109__$1,inst_28107);
} else {
return null;
}
}
});
return (function() {
var juliaworld$hero$forward_$_state_machine__15523__auto__ = null;
var juliaworld$hero$forward_$_state_machine__15523__auto____0 = (function (){
var statearr_28111 = [null,null,null,null,null,null,null];
(statearr_28111[(0)] = juliaworld$hero$forward_$_state_machine__15523__auto__);

(statearr_28111[(1)] = (1));

return statearr_28111;
});
var juliaworld$hero$forward_$_state_machine__15523__auto____1 = (function (state_28109){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28112){if((e28112 instanceof Object)){
var ex__15526__auto__ = e28112;
var statearr_28113_28127 = state_28109;
(statearr_28113_28127[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28128 = state_28109;
state_28109 = G__28128;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$forward_$_state_machine__15523__auto__ = function(state_28109){
switch(arguments.length){
case 0:
return juliaworld$hero$forward_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$forward_$_state_machine__15523__auto____1.call(this,state_28109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$forward_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$forward_$_state_machine__15523__auto____0;
juliaworld$hero$forward_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$forward_$_state_machine__15523__auto____1;
return juliaworld$hero$forward_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28114 = f__15620__auto__.call(null);
(statearr_28114[(6)] = c__15619__auto____$1);

return statearr_28114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto____$1;
});
})();
var inst_28098 = setTimeout(inst_28097,(100));
var state_28100__$1 = (function (){var statearr_28115 = state_28100;
(statearr_28115[(11)] = inst_28096);

return statearr_28115;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28100__$1,inst_28098);
} else {
if((state_val_28101 === (5))){
var inst_28079 = (state_28100[(2)]);
var inst_28080 = juliaworld.state.stop_animation.call(null,next);
var inst_28081 = juliaworld.hero.remove_hero.call(null);
var inst_28082 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28083 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_28084 = (new cljs.core.PersistentVector(null,2,(5),inst_28082,inst_28083,null));
var inst_28085 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28086 = [nx,ny];
var inst_28087 = (new cljs.core.PersistentVector(null,2,(5),inst_28085,inst_28086,null));
var inst_28088 = juliaworld.state.set_state.call(null,inst_28084,inst_28087);
var inst_28089 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28090 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)];
var inst_28091 = (new cljs.core.PersistentVector(null,2,(5),inst_28089,inst_28090,null));
var inst_28092 = juliaworld.state.set_state.call(null,inst_28091,current);
var inst_28093 = juliaworld.hero.show_hero.call(null);
var inst_28094 = juliaworld.hero.post_arrival_actions.call(null,nx,ny);
var state_28100__$1 = (function (){var statearr_28116 = state_28100;
(statearr_28116[(12)] = inst_28080);

(statearr_28116[(13)] = inst_28088);

(statearr_28116[(14)] = inst_28092);

(statearr_28116[(15)] = inst_28081);

(statearr_28116[(16)] = inst_28079);

(statearr_28116[(17)] = inst_28093);

return statearr_28116;
})();
var statearr_28117_28129 = state_28100__$1;
(statearr_28117_28129[(2)] = inst_28094);

(statearr_28117_28129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var juliaworld$hero$forward_$_state_machine__15523__auto__ = null;
var juliaworld$hero$forward_$_state_machine__15523__auto____0 = (function (){
var statearr_28118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28118[(0)] = juliaworld$hero$forward_$_state_machine__15523__auto__);

(statearr_28118[(1)] = (1));

return statearr_28118;
});
var juliaworld$hero$forward_$_state_machine__15523__auto____1 = (function (state_28100){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28119){if((e28119 instanceof Object)){
var ex__15526__auto__ = e28119;
var statearr_28120_28130 = state_28100;
(statearr_28120_28130[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28131 = state_28100;
state_28100 = G__28131;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$forward_$_state_machine__15523__auto__ = function(state_28100){
switch(arguments.length){
case 0:
return juliaworld$hero$forward_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$forward_$_state_machine__15523__auto____1.call(this,state_28100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$forward_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$forward_$_state_machine__15523__auto____0;
juliaworld$hero$forward_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$forward_$_state_machine__15523__auto____1;
return juliaworld$hero$forward_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28121 = f__15620__auto__.call(null);
(statearr_28121[(6)] = c__15619__auto___28123);

return statearr_28121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return f1;
});
juliaworld.hero.check = (function juliaworld$hero$check(){
var current = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var vec__28132 = juliaworld.hero.get_forward_coords.call(null,current);
var nx = cljs.core.nth.call(null,vec__28132,(0),null);
var ny = cljs.core.nth.call(null,vec__28132,(1),null);
return cljs.core.last.call(null,cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,new cljs.core.Keyword(null,"type","type",1174270348),juliaworld.state.xy_props.call(null,nx,ny))));
});

//# sourceMappingURL=hero.js.map

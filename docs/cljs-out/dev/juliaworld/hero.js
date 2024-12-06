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
cljs.core._add_method.call(null,juliaworld.hero.process_item_action,"play",(function (p__27908){
var map__27909 = p__27908;
var map__27909__$1 = cljs.core.__destructure_map.call(null,map__27909);
var action = cljs.core.get.call(null,map__27909__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return juliaworld.sound.play.call(null,cljs.core.keyword.call(null,cljs.core.second.call(null,cljs.core.first.call(null,action))));
}));
cljs.core._add_method.call(null,juliaworld.hero.process_item_action,"remove",(function (p__27910){
var map__27911 = p__27910;
var map__27911__$1 = cljs.core.__destructure_map.call(null,map__27911);
var sprite = cljs.core.get.call(null,map__27911__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var layer = cljs.core.get.call(null,map__27911__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var position = cljs.core.get.call(null,map__27911__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return juliaworld.state.hide_item.call(null,layer,position);
}));
cljs.core._add_method.call(null,juliaworld.hero.process_item_action,"score",(function (){
return juliaworld.state.inc_score.call(null);
}));
juliaworld.hero.calculate_hero_z = (function juliaworld$hero$calculate_hero_z(heroy,layers){
var G__27915 = layers;
var vec__27916 = G__27915;
var seq__27917 = cljs.core.seq.call(null,vec__27916);
var first__27918 = cljs.core.first.call(null,seq__27917);
var seq__27917__$1 = cljs.core.next.call(null,seq__27917);
var f = first__27918;
var r = seq__27917__$1;
var pos = (0);
var G__27915__$1 = G__27915;
var pos__$1 = pos;
while(true){
var vec__27919 = G__27915__$1;
var seq__27920 = cljs.core.seq.call(null,vec__27919);
var first__27921 = cljs.core.first.call(null,seq__27920);
var seq__27920__$1 = cljs.core.next.call(null,seq__27920);
var f__$1 = first__27921;
var r__$1 = seq__27920__$1;
var pos__$2 = pos__$1;
if(cljs.core.truth_(f__$1)){
var map__27922 = juliaworld.state.get_layer.call(null,f__$1);
var map__27922__$1 = cljs.core.__destructure_map.call(null,map__27922);
var map__27923 = cljs.core.get.call(null,map__27922__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var map__27923__$1 = cljs.core.__destructure_map.call(null,map__27923);
var z_index = cljs.core.get.call(null,map__27923__$1,new cljs.core.Keyword(null,"z-index","z-index",1892827090));
var lowest_y = cljs.core.get.call(null,map__27922__$1,new cljs.core.Keyword(null,"lowest-y","lowest-y",-1987829690));
if(cljs.core.not.call(null,z_index)){
var G__27924 = r__$1;
var G__27925 = (pos__$2 + (1));
G__27915__$1 = G__27924;
pos__$1 = G__27925;
continue;
} else {
if((heroy >= lowest_y)){
var G__27926 = r__$1;
var G__27927 = (pos__$2 + (1));
G__27915__$1 = G__27926;
pos__$1 = G__27927;
continue;
} else {
var G__27928 = r__$1;
var G__27929 = pos__$2;
G__27915__$1 = G__27928;
pos__$1 = G__27929;
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
var vec__27930 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null));
var tilew = cljs.core.nth.call(null,vec__27930,(0),null);
var tileh = cljs.core.nth.call(null,vec__27930,(1),null);
var map__27933 = juliaworld.state.get_animation.call(null,name);
var map__27933__$1 = cljs.core.__destructure_map.call(null,map__27933);
var basex = cljs.core.get.call(null,map__27933__$1,new cljs.core.Keyword(null,"basex","basex",-610151236));
var basey = cljs.core.get.call(null,map__27933__$1,new cljs.core.Keyword(null,"basey","basey",-430302880));
var vec__27934 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((.5 + x) * tilew) - basex),(((.5 + y) * tileh) - basey)], null);
var x__$1 = cljs.core.nth.call(null,vec__27934,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__27934,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null);
});
juliaworld.hero.set_hero_pos = (function juliaworld$hero$set_hero_pos(x,y,name){
var vec__27937 = juliaworld.hero.hero_coords.call(null,x,y,name);
var x__$1 = cljs.core.nth.call(null,vec__27937,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__27937,(1),null);
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
var vec__27940 = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var x = cljs.core.nth.call(null,vec__27940,(0),null);
var y = cljs.core.nth.call(null,vec__27940,(1),null);
var new_z = juliaworld.hero.calculate_hero_z.call(null,y,juliaworld.state.get_current_layers.call(null));
juliaworld.state.get_app.call(null).stage.addChildAt(hero,new_z);

juliaworld.hero.set_hero_pos.call(null,x,y,current);

return juliaworld.state.start_animation.call(null,current);
});
juliaworld.hero.turn_right = (function juliaworld$hero$turn_right(){
var next = (function (){var G__27943 = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var G__27943__$1 = (((G__27943 instanceof cljs.core.Keyword))?G__27943.fqn:null);
switch (G__27943__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27943__$1)].join('')));

}
})();
var _ch = cljs.core.async.chan.call(null);
var c__15619__auto___27970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_27953){
var state_val_27954 = (state_27953[(1)]);
if((state_val_27954 === (1))){
var inst_27944 = juliaworld.hero.remove_hero.call(null);
var inst_27945 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27946 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)];
var inst_27947 = (new cljs.core.PersistentVector(null,2,(5),inst_27945,inst_27946,null));
var inst_27948 = juliaworld.state.set_state.call(null,inst_27947,next);
var inst_27949 = juliaworld.hero.show_hero.call(null);
var inst_27950 = (function (){return (function (){
var c__15619__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_27958){
var state_val_27959 = (state_27958[(1)]);
if((state_val_27959 === (1))){
var state_27958__$1 = state_27958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27958__$1,(2),_ch,new cljs.core.Keyword(null,"turn-right","turn-right",-1479498405));
} else {
if((state_val_27959 === (2))){
var inst_27956 = (state_27958[(2)]);
var state_27958__$1 = state_27958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27958__$1,inst_27956);
} else {
return null;
}
}
});
return (function() {
var juliaworld$hero$turn_right_$_state_machine__15523__auto__ = null;
var juliaworld$hero$turn_right_$_state_machine__15523__auto____0 = (function (){
var statearr_27960 = [null,null,null,null,null,null,null];
(statearr_27960[(0)] = juliaworld$hero$turn_right_$_state_machine__15523__auto__);

(statearr_27960[(1)] = (1));

return statearr_27960;
});
var juliaworld$hero$turn_right_$_state_machine__15523__auto____1 = (function (state_27958){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_27958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e27961){if((e27961 instanceof Object)){
var ex__15526__auto__ = e27961;
var statearr_27962_27971 = state_27958;
(statearr_27962_27971[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27972 = state_27958;
state_27958 = G__27972;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$turn_right_$_state_machine__15523__auto__ = function(state_27958){
switch(arguments.length){
case 0:
return juliaworld$hero$turn_right_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$turn_right_$_state_machine__15523__auto____1.call(this,state_27958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$turn_right_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$turn_right_$_state_machine__15523__auto____0;
juliaworld$hero$turn_right_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$turn_right_$_state_machine__15523__auto____1;
return juliaworld$hero$turn_right_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_27963 = f__15620__auto__.call(null);
(statearr_27963[(6)] = c__15619__auto____$1);

return statearr_27963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto____$1;
});
})();
var inst_27951 = setTimeout(inst_27950,(500));
var state_27953__$1 = (function (){var statearr_27964 = state_27953;
(statearr_27964[(7)] = inst_27949);

(statearr_27964[(8)] = inst_27948);

(statearr_27964[(9)] = inst_27944);

return statearr_27964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27953__$1,inst_27951);
} else {
return null;
}
});
return (function() {
var juliaworld$hero$turn_right_$_state_machine__15523__auto__ = null;
var juliaworld$hero$turn_right_$_state_machine__15523__auto____0 = (function (){
var statearr_27965 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27965[(0)] = juliaworld$hero$turn_right_$_state_machine__15523__auto__);

(statearr_27965[(1)] = (1));

return statearr_27965;
});
var juliaworld$hero$turn_right_$_state_machine__15523__auto____1 = (function (state_27953){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_27953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e27966){if((e27966 instanceof Object)){
var ex__15526__auto__ = e27966;
var statearr_27967_27973 = state_27953;
(statearr_27967_27973[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27974 = state_27953;
state_27953 = G__27974;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$turn_right_$_state_machine__15523__auto__ = function(state_27953){
switch(arguments.length){
case 0:
return juliaworld$hero$turn_right_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$turn_right_$_state_machine__15523__auto____1.call(this,state_27953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$turn_right_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$turn_right_$_state_machine__15523__auto____0;
juliaworld$hero$turn_right_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$turn_right_$_state_machine__15523__auto____1;
return juliaworld$hero$turn_right_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_27968 = f__15620__auto__.call(null);
(statearr_27968[(6)] = c__15619__auto___27970);

return statearr_27968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return _ch;
});
juliaworld.hero.turn_left = (function juliaworld$hero$turn_left(){
var next = (function (){var G__27975 = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var G__27975__$1 = (((G__27975 instanceof cljs.core.Keyword))?G__27975.fqn:null);
switch (G__27975__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27975__$1)].join('')));

}
})();
var _ch = cljs.core.async.chan.call(null);
var c__15619__auto___28002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_27985){
var state_val_27986 = (state_27985[(1)]);
if((state_val_27986 === (1))){
var inst_27976 = juliaworld.hero.remove_hero.call(null);
var inst_27977 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27978 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)];
var inst_27979 = (new cljs.core.PersistentVector(null,2,(5),inst_27977,inst_27978,null));
var inst_27980 = juliaworld.state.set_state.call(null,inst_27979,next);
var inst_27981 = juliaworld.hero.show_hero.call(null);
var inst_27982 = (function (){return (function (){
var c__15619__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_27990){
var state_val_27991 = (state_27990[(1)]);
if((state_val_27991 === (1))){
var state_27990__$1 = state_27990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27990__$1,(2),_ch,new cljs.core.Keyword(null,"turn-left","turn-left",-942868009));
} else {
if((state_val_27991 === (2))){
var inst_27988 = (state_27990[(2)]);
var state_27990__$1 = state_27990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27990__$1,inst_27988);
} else {
return null;
}
}
});
return (function() {
var juliaworld$hero$turn_left_$_state_machine__15523__auto__ = null;
var juliaworld$hero$turn_left_$_state_machine__15523__auto____0 = (function (){
var statearr_27992 = [null,null,null,null,null,null,null];
(statearr_27992[(0)] = juliaworld$hero$turn_left_$_state_machine__15523__auto__);

(statearr_27992[(1)] = (1));

return statearr_27992;
});
var juliaworld$hero$turn_left_$_state_machine__15523__auto____1 = (function (state_27990){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_27990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e27993){if((e27993 instanceof Object)){
var ex__15526__auto__ = e27993;
var statearr_27994_28003 = state_27990;
(statearr_27994_28003[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28004 = state_27990;
state_27990 = G__28004;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$turn_left_$_state_machine__15523__auto__ = function(state_27990){
switch(arguments.length){
case 0:
return juliaworld$hero$turn_left_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$turn_left_$_state_machine__15523__auto____1.call(this,state_27990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$turn_left_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$turn_left_$_state_machine__15523__auto____0;
juliaworld$hero$turn_left_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$turn_left_$_state_machine__15523__auto____1;
return juliaworld$hero$turn_left_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_27995 = f__15620__auto__.call(null);
(statearr_27995[(6)] = c__15619__auto____$1);

return statearr_27995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto____$1;
});
})();
var inst_27983 = setTimeout(inst_27982,(500));
var state_27985__$1 = (function (){var statearr_27996 = state_27985;
(statearr_27996[(7)] = inst_27976);

(statearr_27996[(8)] = inst_27980);

(statearr_27996[(9)] = inst_27981);

return statearr_27996;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27985__$1,inst_27983);
} else {
return null;
}
});
return (function() {
var juliaworld$hero$turn_left_$_state_machine__15523__auto__ = null;
var juliaworld$hero$turn_left_$_state_machine__15523__auto____0 = (function (){
var statearr_27997 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27997[(0)] = juliaworld$hero$turn_left_$_state_machine__15523__auto__);

(statearr_27997[(1)] = (1));

return statearr_27997;
});
var juliaworld$hero$turn_left_$_state_machine__15523__auto____1 = (function (state_27985){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_27985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e27998){if((e27998 instanceof Object)){
var ex__15526__auto__ = e27998;
var statearr_27999_28005 = state_27985;
(statearr_27999_28005[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28006 = state_27985;
state_27985 = G__28006;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$turn_left_$_state_machine__15523__auto__ = function(state_27985){
switch(arguments.length){
case 0:
return juliaworld$hero$turn_left_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$turn_left_$_state_machine__15523__auto____1.call(this,state_27985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$turn_left_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$turn_left_$_state_machine__15523__auto____0;
juliaworld$hero$turn_left_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$turn_left_$_state_machine__15523__auto____1;
return juliaworld$hero$turn_left_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28000 = f__15620__auto__.call(null);
(statearr_28000[(6)] = c__15619__auto___28002);

return statearr_28000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return _ch;
});
juliaworld.hero.get_forward_coords = (function juliaworld$hero$get_forward_coords(current){
var vec__28007 = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var x = cljs.core.nth.call(null,vec__28007,(0),null);
var y = cljs.core.nth.call(null,vec__28007,(1),null);
var vec__28010 = (function (){var G__28013 = current;
var G__28013__$1 = (((G__28013 instanceof cljs.core.Keyword))?G__28013.fqn:null);
switch (G__28013__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28013__$1)].join('')));

}
})();
var nx = cljs.core.nth.call(null,vec__28010,(0),null);
var ny = cljs.core.nth.call(null,vec__28010,(1),null);
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
juliaworld.hero.move_hero = (function juliaworld$hero$move_hero(p__28015,current,speed){
var vec__28016 = p__28015;
var x = cljs.core.nth.call(null,vec__28016,(0),null);
var y = cljs.core.nth.call(null,vec__28016,(1),null);
var vec__28019 = juliaworld.hero.hero_coords.call(null,x,y,current);
var finalx = cljs.core.nth.call(null,vec__28019,(0),null);
var finaly = cljs.core.nth.call(null,vec__28019,(1),null);
var finished = cljs.core.async.chan.call(null);
var sp = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_animation.call(null,current));
var xorig = sp.x;
var yorig = sp.y;
var dx = juliaworld.hero.calculate_delta.call(null,xorig,finalx,speed);
var dy = juliaworld.hero.calculate_delta.call(null,yorig,finaly,speed);
var fn = (function juliaworld$hero$move_hero_$_movement(){
var cx = sp.x;
var cy = sp.y;
var vec__28022 = cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null));
var nx = cljs.core.nth.call(null,vec__28022,(0),null);
var ny = cljs.core.nth.call(null,vec__28022,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [finalx,finaly], null))){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28031){
var state_val_28032 = (state_28031[(1)]);
if((state_val_28032 === (1))){
var state_28031__$1 = state_28031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28031__$1,(2),finished,new cljs.core.Keyword(null,"finished","finished",-1018867731));
} else {
if((state_val_28032 === (2))){
var inst_28026 = (state_28031[(2)]);
var inst_28027 = juliaworld.state.get_app.call(null);
var inst_28028 = inst_28027.ticker;
var inst_28029 = inst_28028.remove(juliaworld$hero$move_hero_$_movement);
var state_28031__$1 = (function (){var statearr_28033 = state_28031;
(statearr_28033[(7)] = inst_28026);

return statearr_28033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28031__$1,inst_28029);
} else {
return null;
}
}
});
return (function() {
var juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__ = null;
var juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____0 = (function (){
var statearr_28034 = [null,null,null,null,null,null,null,null];
(statearr_28034[(0)] = juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__);

(statearr_28034[(1)] = (1));

return statearr_28034;
});
var juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____1 = (function (state_28031){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28035){if((e28035 instanceof Object)){
var ex__15526__auto__ = e28035;
var statearr_28036_28038 = state_28031;
(statearr_28036_28038[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28039 = state_28031;
state_28031 = G__28039;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__ = function(state_28031){
switch(arguments.length){
case 0:
return juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____1.call(this,state_28031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____0;
juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____1;
return juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28037 = f__15620__auto__.call(null);
(statearr_28037[(6)] = c__15619__auto__);

return statearr_28037;
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
var map__28040 = i;
var map__28040__$1 = cljs.core.__destructure_map.call(null,map__28040);
var action = cljs.core.get.call(null,map__28040__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(cljs.core.not_empty.call(null,action))){
juliaworld.hero.process_item_action.call(null,i);

var G__28041 = cljs.core.update.call(null,i,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.rest);
i = G__28041;
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
var seq__28042 = cljs.core.seq.call(null,items);
var chunk__28043 = null;
var count__28044 = (0);
var i__28045 = (0);
while(true){
if((i__28045 < count__28044)){
var i = cljs.core._nth.call(null,chunk__28043,i__28045);
juliaworld.hero.process_item_actions.call(null,i);


var G__28046 = seq__28042;
var G__28047 = chunk__28043;
var G__28048 = count__28044;
var G__28049 = (i__28045 + (1));
seq__28042 = G__28046;
chunk__28043 = G__28047;
count__28044 = G__28048;
i__28045 = G__28049;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__28042);
if(temp__5804__auto____$1){
var seq__28042__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28042__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__28042__$1);
var G__28050 = cljs.core.chunk_rest.call(null,seq__28042__$1);
var G__28051 = c__5565__auto__;
var G__28052 = cljs.core.count.call(null,c__5565__auto__);
var G__28053 = (0);
seq__28042 = G__28050;
chunk__28043 = G__28051;
count__28044 = G__28052;
i__28045 = G__28053;
continue;
} else {
var i = cljs.core.first.call(null,seq__28042__$1);
juliaworld.hero.process_item_actions.call(null,i);


var G__28054 = cljs.core.next.call(null,seq__28042__$1);
var G__28055 = null;
var G__28056 = (0);
var G__28057 = (0);
seq__28042 = G__28054;
chunk__28043 = G__28055;
count__28044 = G__28056;
i__28045 = G__28057;
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
var next = (function (){var G__28061 = current;
var G__28061__$1 = (((G__28061 instanceof cljs.core.Keyword))?G__28061.fqn:null);
switch (G__28061__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28061__$1)].join('')));

}
})();
var vec__28058 = juliaworld.hero.get_forward_coords.call(null,current);
var nx = cljs.core.nth.call(null,vec__28058,(0),null);
var ny = cljs.core.nth.call(null,vec__28058,(1),null);
var collision = cljs.core.some.call(null,cljs.core.identity,cljs.core.map.call(null,new cljs.core.Keyword(null,"collision","collision",-201625508),juliaworld.state.xy_props.call(null,nx,ny)));
var f1 = cljs.core.async.chan.call(null);
var c__15619__auto___28120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28097){
var state_val_28098 = (state_28097[(1)]);
if((state_val_28098 === (1))){
var state_28097__$1 = state_28097;
if(cljs.core.truth_(collision)){
var statearr_28099_28121 = state_28097__$1;
(statearr_28099_28121[(1)] = (2));

} else {
var statearr_28100_28122 = state_28097__$1;
(statearr_28100_28122[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (2))){
var state_28097__$1 = state_28097;
var statearr_28101_28123 = state_28097__$1;
(statearr_28101_28123[(2)] = null);

(statearr_28101_28123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (3))){
var inst_28064 = juliaworld.hero.remove_hero.call(null);
var inst_28065 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28066 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)];
var inst_28067 = (new cljs.core.PersistentVector(null,2,(5),inst_28065,inst_28066,null));
var inst_28068 = juliaworld.state.set_state.call(null,inst_28067,next);
var inst_28069 = juliaworld.hero.show_hero.call(null);
var inst_28070 = juliaworld.state.start_animation.call(null,next);
var inst_28071 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28072 = [nx,ny];
var inst_28073 = (new cljs.core.PersistentVector(null,2,(5),inst_28071,inst_28072,null));
var inst_28074 = juliaworld.hero.move_hero.call(null,inst_28073,next,0.5);
var state_28097__$1 = (function (){var statearr_28102 = state_28097;
(statearr_28102[(7)] = inst_28069);

(statearr_28102[(8)] = inst_28068);

(statearr_28102[(9)] = inst_28064);

(statearr_28102[(10)] = inst_28070);

return statearr_28102;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28097__$1,(5),inst_28074);
} else {
if((state_val_28098 === (4))){
var inst_28093 = (state_28097[(2)]);
var inst_28094 = (function (){return (function (){
var c__15619__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28106){
var state_val_28107 = (state_28106[(1)]);
if((state_val_28107 === (1))){
var state_28106__$1 = state_28106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28106__$1,(2),f1,new cljs.core.Keyword(null,"forward","forward",-557345303));
} else {
if((state_val_28107 === (2))){
var inst_28104 = (state_28106[(2)]);
var state_28106__$1 = state_28106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28106__$1,inst_28104);
} else {
return null;
}
}
});
return (function() {
var juliaworld$hero$forward_$_state_machine__15523__auto__ = null;
var juliaworld$hero$forward_$_state_machine__15523__auto____0 = (function (){
var statearr_28108 = [null,null,null,null,null,null,null];
(statearr_28108[(0)] = juliaworld$hero$forward_$_state_machine__15523__auto__);

(statearr_28108[(1)] = (1));

return statearr_28108;
});
var juliaworld$hero$forward_$_state_machine__15523__auto____1 = (function (state_28106){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28109){if((e28109 instanceof Object)){
var ex__15526__auto__ = e28109;
var statearr_28110_28124 = state_28106;
(statearr_28110_28124[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28125 = state_28106;
state_28106 = G__28125;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$forward_$_state_machine__15523__auto__ = function(state_28106){
switch(arguments.length){
case 0:
return juliaworld$hero$forward_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$forward_$_state_machine__15523__auto____1.call(this,state_28106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$forward_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$forward_$_state_machine__15523__auto____0;
juliaworld$hero$forward_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$forward_$_state_machine__15523__auto____1;
return juliaworld$hero$forward_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28111 = f__15620__auto__.call(null);
(statearr_28111[(6)] = c__15619__auto____$1);

return statearr_28111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto____$1;
});
})();
var inst_28095 = setTimeout(inst_28094,(100));
var state_28097__$1 = (function (){var statearr_28112 = state_28097;
(statearr_28112[(11)] = inst_28093);

return statearr_28112;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28097__$1,inst_28095);
} else {
if((state_val_28098 === (5))){
var inst_28076 = (state_28097[(2)]);
var inst_28077 = juliaworld.state.stop_animation.call(null,next);
var inst_28078 = juliaworld.hero.remove_hero.call(null);
var inst_28079 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28080 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_28081 = (new cljs.core.PersistentVector(null,2,(5),inst_28079,inst_28080,null));
var inst_28082 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28083 = [nx,ny];
var inst_28084 = (new cljs.core.PersistentVector(null,2,(5),inst_28082,inst_28083,null));
var inst_28085 = juliaworld.state.set_state.call(null,inst_28081,inst_28084);
var inst_28086 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28087 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)];
var inst_28088 = (new cljs.core.PersistentVector(null,2,(5),inst_28086,inst_28087,null));
var inst_28089 = juliaworld.state.set_state.call(null,inst_28088,current);
var inst_28090 = juliaworld.hero.show_hero.call(null);
var inst_28091 = juliaworld.hero.post_arrival_actions.call(null,nx,ny);
var state_28097__$1 = (function (){var statearr_28113 = state_28097;
(statearr_28113[(12)] = inst_28089);

(statearr_28113[(13)] = inst_28090);

(statearr_28113[(14)] = inst_28076);

(statearr_28113[(15)] = inst_28085);

(statearr_28113[(16)] = inst_28077);

(statearr_28113[(17)] = inst_28078);

return statearr_28113;
})();
var statearr_28114_28126 = state_28097__$1;
(statearr_28114_28126[(2)] = inst_28091);

(statearr_28114_28126[(1)] = (4));


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
var statearr_28115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28115[(0)] = juliaworld$hero$forward_$_state_machine__15523__auto__);

(statearr_28115[(1)] = (1));

return statearr_28115;
});
var juliaworld$hero$forward_$_state_machine__15523__auto____1 = (function (state_28097){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28116){if((e28116 instanceof Object)){
var ex__15526__auto__ = e28116;
var statearr_28117_28127 = state_28097;
(statearr_28117_28127[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28128 = state_28097;
state_28097 = G__28128;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$forward_$_state_machine__15523__auto__ = function(state_28097){
switch(arguments.length){
case 0:
return juliaworld$hero$forward_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$forward_$_state_machine__15523__auto____1.call(this,state_28097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$forward_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$forward_$_state_machine__15523__auto____0;
juliaworld$hero$forward_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$forward_$_state_machine__15523__auto____1;
return juliaworld$hero$forward_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28118 = f__15620__auto__.call(null);
(statearr_28118[(6)] = c__15619__auto___28120);

return statearr_28118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return f1;
});
juliaworld.hero.check = (function juliaworld$hero$check(){
var current = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var vec__28129 = juliaworld.hero.get_forward_coords.call(null,current);
var nx = cljs.core.nth.call(null,vec__28129,(0),null);
var ny = cljs.core.nth.call(null,vec__28129,(1),null);
return cljs.core.last.call(null,cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,new cljs.core.Keyword(null,"type","type",1174270348),juliaworld.state.xy_props.call(null,nx,ny))));
});

//# sourceMappingURL=hero.js.map

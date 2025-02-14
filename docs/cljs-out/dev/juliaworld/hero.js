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
cljs.core._add_method.call(null,juliaworld.hero.process_item_action,"play",(function (p__28321){
var map__28322 = p__28321;
var map__28322__$1 = cljs.core.__destructure_map.call(null,map__28322);
var action = cljs.core.get.call(null,map__28322__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return juliaworld.sound.play.call(null,cljs.core.keyword.call(null,cljs.core.second.call(null,cljs.core.first.call(null,action))));
}));
cljs.core._add_method.call(null,juliaworld.hero.process_item_action,"remove",(function (p__28323){
var map__28324 = p__28323;
var map__28324__$1 = cljs.core.__destructure_map.call(null,map__28324);
var sprite = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var layer = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var position = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return juliaworld.state.hide_item.call(null,layer,position);
}));
cljs.core._add_method.call(null,juliaworld.hero.process_item_action,"score",(function (){
return juliaworld.state.inc_score.call(null);
}));
juliaworld.hero.calculate_hero_z = (function juliaworld$hero$calculate_hero_z(heroy,layers){
var G__28328 = layers;
var vec__28329 = G__28328;
var seq__28330 = cljs.core.seq.call(null,vec__28329);
var first__28331 = cljs.core.first.call(null,seq__28330);
var seq__28330__$1 = cljs.core.next.call(null,seq__28330);
var f = first__28331;
var r = seq__28330__$1;
var pos = (0);
var G__28328__$1 = G__28328;
var pos__$1 = pos;
while(true){
var vec__28332 = G__28328__$1;
var seq__28333 = cljs.core.seq.call(null,vec__28332);
var first__28334 = cljs.core.first.call(null,seq__28333);
var seq__28333__$1 = cljs.core.next.call(null,seq__28333);
var f__$1 = first__28334;
var r__$1 = seq__28333__$1;
var pos__$2 = pos__$1;
if(cljs.core.truth_(f__$1)){
var map__28335 = juliaworld.state.get_layer.call(null,f__$1);
var map__28335__$1 = cljs.core.__destructure_map.call(null,map__28335);
var map__28336 = cljs.core.get.call(null,map__28335__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var map__28336__$1 = cljs.core.__destructure_map.call(null,map__28336);
var z_index = cljs.core.get.call(null,map__28336__$1,new cljs.core.Keyword(null,"z-index","z-index",1892827090));
var lowest_y = cljs.core.get.call(null,map__28335__$1,new cljs.core.Keyword(null,"lowest-y","lowest-y",-1987829690));
if(cljs.core.not.call(null,z_index)){
var G__28337 = r__$1;
var G__28338 = (pos__$2 + (1));
G__28328__$1 = G__28337;
pos__$1 = G__28338;
continue;
} else {
if((heroy >= lowest_y)){
var G__28339 = r__$1;
var G__28340 = (pos__$2 + (1));
G__28328__$1 = G__28339;
pos__$1 = G__28340;
continue;
} else {
var G__28341 = r__$1;
var G__28342 = pos__$2;
G__28328__$1 = G__28341;
pos__$1 = G__28342;
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
var vec__28343 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null));
var tilew = cljs.core.nth.call(null,vec__28343,(0),null);
var tileh = cljs.core.nth.call(null,vec__28343,(1),null);
var map__28346 = juliaworld.state.get_animation.call(null,name);
var map__28346__$1 = cljs.core.__destructure_map.call(null,map__28346);
var basex = cljs.core.get.call(null,map__28346__$1,new cljs.core.Keyword(null,"basex","basex",-610151236));
var basey = cljs.core.get.call(null,map__28346__$1,new cljs.core.Keyword(null,"basey","basey",-430302880));
var vec__28347 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((.5 + x) * tilew) - basex),(((.5 + y) * tileh) - basey)], null);
var x__$1 = cljs.core.nth.call(null,vec__28347,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__28347,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null);
});
juliaworld.hero.set_hero_pos = (function juliaworld$hero$set_hero_pos(x,y,name){
var vec__28350 = juliaworld.hero.hero_coords.call(null,x,y,name);
var x__$1 = cljs.core.nth.call(null,vec__28350,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__28350,(1),null);
var sprite = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_animation.call(null,name));
(sprite.x = x__$1);

return (sprite.y = y__$1);
});
juliaworld.hero.remove_hero = (function juliaworld$hero$remove_hero(){
var current = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var sprite = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_animation.call(null,current));
juliaworld.state.stop_animation.call(null,current);

return juliaworld.state.get_app.call(null).stage.removeChild(sprite);
});
juliaworld.hero.show_hero = (function juliaworld$hero$show_hero(){
var current = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var hero = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_animation.call(null,current));
var vec__28353 = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var x = cljs.core.nth.call(null,vec__28353,(0),null);
var y = cljs.core.nth.call(null,vec__28353,(1),null);
var new_z = juliaworld.hero.calculate_hero_z.call(null,y,juliaworld.state.get_current_layers.call(null));
juliaworld.state.get_app.call(null).stage.addChildAt(hero,new_z);

juliaworld.hero.set_hero_pos.call(null,x,y,current);

return juliaworld.state.start_animation.call(null,current);
});
juliaworld.hero.turn_right = (function juliaworld$hero$turn_right(){
var next = (function (){var G__28356 = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var G__28356__$1 = (((G__28356 instanceof cljs.core.Keyword))?G__28356.fqn:null);
switch (G__28356__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28356__$1)].join('')));

}
})();
var _ch = cljs.core.async.chan.call(null);
var c__15619__auto___28383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28366){
var state_val_28367 = (state_28366[(1)]);
if((state_val_28367 === (1))){
var inst_28357 = juliaworld.hero.remove_hero.call(null);
var inst_28358 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28359 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)];
var inst_28360 = (new cljs.core.PersistentVector(null,2,(5),inst_28358,inst_28359,null));
var inst_28361 = juliaworld.state.set_state.call(null,inst_28360,next);
var inst_28362 = juliaworld.hero.show_hero.call(null);
var inst_28363 = (function (){return (function (){
var c__15619__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28371){
var state_val_28372 = (state_28371[(1)]);
if((state_val_28372 === (1))){
var state_28371__$1 = state_28371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28371__$1,(2),_ch,new cljs.core.Keyword(null,"turn-right","turn-right",-1479498405));
} else {
if((state_val_28372 === (2))){
var inst_28369 = (state_28371[(2)]);
var state_28371__$1 = state_28371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28371__$1,inst_28369);
} else {
return null;
}
}
});
return (function() {
var juliaworld$hero$turn_right_$_state_machine__15523__auto__ = null;
var juliaworld$hero$turn_right_$_state_machine__15523__auto____0 = (function (){
var statearr_28373 = [null,null,null,null,null,null,null];
(statearr_28373[(0)] = juliaworld$hero$turn_right_$_state_machine__15523__auto__);

(statearr_28373[(1)] = (1));

return statearr_28373;
});
var juliaworld$hero$turn_right_$_state_machine__15523__auto____1 = (function (state_28371){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28374){if((e28374 instanceof Object)){
var ex__15526__auto__ = e28374;
var statearr_28375_28384 = state_28371;
(statearr_28375_28384[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28385 = state_28371;
state_28371 = G__28385;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$turn_right_$_state_machine__15523__auto__ = function(state_28371){
switch(arguments.length){
case 0:
return juliaworld$hero$turn_right_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$turn_right_$_state_machine__15523__auto____1.call(this,state_28371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$turn_right_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$turn_right_$_state_machine__15523__auto____0;
juliaworld$hero$turn_right_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$turn_right_$_state_machine__15523__auto____1;
return juliaworld$hero$turn_right_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28376 = f__15620__auto__.call(null);
(statearr_28376[(6)] = c__15619__auto____$1);

return statearr_28376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto____$1;
});
})();
var inst_28364 = setTimeout(inst_28363,(500));
var state_28366__$1 = (function (){var statearr_28377 = state_28366;
(statearr_28377[(7)] = inst_28361);

(statearr_28377[(8)] = inst_28362);

(statearr_28377[(9)] = inst_28357);

return statearr_28377;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28366__$1,inst_28364);
} else {
return null;
}
});
return (function() {
var juliaworld$hero$turn_right_$_state_machine__15523__auto__ = null;
var juliaworld$hero$turn_right_$_state_machine__15523__auto____0 = (function (){
var statearr_28378 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28378[(0)] = juliaworld$hero$turn_right_$_state_machine__15523__auto__);

(statearr_28378[(1)] = (1));

return statearr_28378;
});
var juliaworld$hero$turn_right_$_state_machine__15523__auto____1 = (function (state_28366){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28379){if((e28379 instanceof Object)){
var ex__15526__auto__ = e28379;
var statearr_28380_28386 = state_28366;
(statearr_28380_28386[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28387 = state_28366;
state_28366 = G__28387;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$turn_right_$_state_machine__15523__auto__ = function(state_28366){
switch(arguments.length){
case 0:
return juliaworld$hero$turn_right_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$turn_right_$_state_machine__15523__auto____1.call(this,state_28366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$turn_right_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$turn_right_$_state_machine__15523__auto____0;
juliaworld$hero$turn_right_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$turn_right_$_state_machine__15523__auto____1;
return juliaworld$hero$turn_right_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28381 = f__15620__auto__.call(null);
(statearr_28381[(6)] = c__15619__auto___28383);

return statearr_28381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return _ch;
});
juliaworld.hero.turn_left = (function juliaworld$hero$turn_left(){
var next = (function (){var G__28388 = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var G__28388__$1 = (((G__28388 instanceof cljs.core.Keyword))?G__28388.fqn:null);
switch (G__28388__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28388__$1)].join('')));

}
})();
var _ch = cljs.core.async.chan.call(null);
var c__15619__auto___28415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28398){
var state_val_28399 = (state_28398[(1)]);
if((state_val_28399 === (1))){
var inst_28389 = juliaworld.hero.remove_hero.call(null);
var inst_28390 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28391 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)];
var inst_28392 = (new cljs.core.PersistentVector(null,2,(5),inst_28390,inst_28391,null));
var inst_28393 = juliaworld.state.set_state.call(null,inst_28392,next);
var inst_28394 = juliaworld.hero.show_hero.call(null);
var inst_28395 = (function (){return (function (){
var c__15619__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28403){
var state_val_28404 = (state_28403[(1)]);
if((state_val_28404 === (1))){
var state_28403__$1 = state_28403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28403__$1,(2),_ch,new cljs.core.Keyword(null,"turn-left","turn-left",-942868009));
} else {
if((state_val_28404 === (2))){
var inst_28401 = (state_28403[(2)]);
var state_28403__$1 = state_28403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28403__$1,inst_28401);
} else {
return null;
}
}
});
return (function() {
var juliaworld$hero$turn_left_$_state_machine__15523__auto__ = null;
var juliaworld$hero$turn_left_$_state_machine__15523__auto____0 = (function (){
var statearr_28405 = [null,null,null,null,null,null,null];
(statearr_28405[(0)] = juliaworld$hero$turn_left_$_state_machine__15523__auto__);

(statearr_28405[(1)] = (1));

return statearr_28405;
});
var juliaworld$hero$turn_left_$_state_machine__15523__auto____1 = (function (state_28403){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28406){if((e28406 instanceof Object)){
var ex__15526__auto__ = e28406;
var statearr_28407_28416 = state_28403;
(statearr_28407_28416[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28417 = state_28403;
state_28403 = G__28417;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$turn_left_$_state_machine__15523__auto__ = function(state_28403){
switch(arguments.length){
case 0:
return juliaworld$hero$turn_left_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$turn_left_$_state_machine__15523__auto____1.call(this,state_28403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$turn_left_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$turn_left_$_state_machine__15523__auto____0;
juliaworld$hero$turn_left_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$turn_left_$_state_machine__15523__auto____1;
return juliaworld$hero$turn_left_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28408 = f__15620__auto__.call(null);
(statearr_28408[(6)] = c__15619__auto____$1);

return statearr_28408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto____$1;
});
})();
var inst_28396 = setTimeout(inst_28395,(500));
var state_28398__$1 = (function (){var statearr_28409 = state_28398;
(statearr_28409[(7)] = inst_28389);

(statearr_28409[(8)] = inst_28394);

(statearr_28409[(9)] = inst_28393);

return statearr_28409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28398__$1,inst_28396);
} else {
return null;
}
});
return (function() {
var juliaworld$hero$turn_left_$_state_machine__15523__auto__ = null;
var juliaworld$hero$turn_left_$_state_machine__15523__auto____0 = (function (){
var statearr_28410 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28410[(0)] = juliaworld$hero$turn_left_$_state_machine__15523__auto__);

(statearr_28410[(1)] = (1));

return statearr_28410;
});
var juliaworld$hero$turn_left_$_state_machine__15523__auto____1 = (function (state_28398){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28411){if((e28411 instanceof Object)){
var ex__15526__auto__ = e28411;
var statearr_28412_28418 = state_28398;
(statearr_28412_28418[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28419 = state_28398;
state_28398 = G__28419;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$turn_left_$_state_machine__15523__auto__ = function(state_28398){
switch(arguments.length){
case 0:
return juliaworld$hero$turn_left_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$turn_left_$_state_machine__15523__auto____1.call(this,state_28398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$turn_left_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$turn_left_$_state_machine__15523__auto____0;
juliaworld$hero$turn_left_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$turn_left_$_state_machine__15523__auto____1;
return juliaworld$hero$turn_left_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28413 = f__15620__auto__.call(null);
(statearr_28413[(6)] = c__15619__auto___28415);

return statearr_28413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return _ch;
});
juliaworld.hero.get_forward_coords = (function juliaworld$hero$get_forward_coords(current){
var vec__28420 = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var x = cljs.core.nth.call(null,vec__28420,(0),null);
var y = cljs.core.nth.call(null,vec__28420,(1),null);
var vec__28423 = (function (){var G__28426 = current;
var G__28426__$1 = (((G__28426 instanceof cljs.core.Keyword))?G__28426.fqn:null);
switch (G__28426__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28426__$1)].join('')));

}
})();
var nx = cljs.core.nth.call(null,vec__28423,(0),null);
var ny = cljs.core.nth.call(null,vec__28423,(1),null);
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
juliaworld.hero.move_hero = (function juliaworld$hero$move_hero(p__28428,current,speed){
var vec__28429 = p__28428;
var x = cljs.core.nth.call(null,vec__28429,(0),null);
var y = cljs.core.nth.call(null,vec__28429,(1),null);
var vec__28432 = juliaworld.hero.hero_coords.call(null,x,y,current);
var finalx = cljs.core.nth.call(null,vec__28432,(0),null);
var finaly = cljs.core.nth.call(null,vec__28432,(1),null);
var finished = cljs.core.async.chan.call(null);
var sp = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_animation.call(null,current));
var xorig = sp.x;
var yorig = sp.y;
var dx = juliaworld.hero.calculate_delta.call(null,xorig,finalx,speed);
var dy = juliaworld.hero.calculate_delta.call(null,yorig,finaly,speed);
var fn = (function juliaworld$hero$move_hero_$_movement(){
var cx = sp.x;
var cy = sp.y;
var vec__28435 = cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null));
var nx = cljs.core.nth.call(null,vec__28435,(0),null);
var ny = cljs.core.nth.call(null,vec__28435,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [finalx,finaly], null))){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28444){
var state_val_28445 = (state_28444[(1)]);
if((state_val_28445 === (1))){
var state_28444__$1 = state_28444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28444__$1,(2),finished,new cljs.core.Keyword(null,"finished","finished",-1018867731));
} else {
if((state_val_28445 === (2))){
var inst_28439 = (state_28444[(2)]);
var inst_28440 = juliaworld.state.get_app.call(null);
var inst_28441 = inst_28440.ticker;
var inst_28442 = inst_28441.remove(juliaworld$hero$move_hero_$_movement);
var state_28444__$1 = (function (){var statearr_28446 = state_28444;
(statearr_28446[(7)] = inst_28439);

return statearr_28446;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28444__$1,inst_28442);
} else {
return null;
}
}
});
return (function() {
var juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__ = null;
var juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____0 = (function (){
var statearr_28447 = [null,null,null,null,null,null,null,null];
(statearr_28447[(0)] = juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__);

(statearr_28447[(1)] = (1));

return statearr_28447;
});
var juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____1 = (function (state_28444){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28448){if((e28448 instanceof Object)){
var ex__15526__auto__ = e28448;
var statearr_28449_28451 = state_28444;
(statearr_28449_28451[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28452 = state_28444;
state_28444 = G__28452;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__ = function(state_28444){
switch(arguments.length){
case 0:
return juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____1.call(this,state_28444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____0;
juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto____1;
return juliaworld$hero$move_hero_$_movement_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28450 = f__15620__auto__.call(null);
(statearr_28450[(6)] = c__15619__auto__);

return statearr_28450;
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
var map__28453 = i;
var map__28453__$1 = cljs.core.__destructure_map.call(null,map__28453);
var action = cljs.core.get.call(null,map__28453__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(cljs.core.not_empty.call(null,action))){
juliaworld.hero.process_item_action.call(null,i);

var G__28454 = cljs.core.update.call(null,i,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.rest);
i = G__28454;
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
var seq__28455 = cljs.core.seq.call(null,items);
var chunk__28456 = null;
var count__28457 = (0);
var i__28458 = (0);
while(true){
if((i__28458 < count__28457)){
var i = cljs.core._nth.call(null,chunk__28456,i__28458);
juliaworld.hero.process_item_actions.call(null,i);


var G__28459 = seq__28455;
var G__28460 = chunk__28456;
var G__28461 = count__28457;
var G__28462 = (i__28458 + (1));
seq__28455 = G__28459;
chunk__28456 = G__28460;
count__28457 = G__28461;
i__28458 = G__28462;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__28455);
if(temp__5804__auto____$1){
var seq__28455__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28455__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__28455__$1);
var G__28463 = cljs.core.chunk_rest.call(null,seq__28455__$1);
var G__28464 = c__5565__auto__;
var G__28465 = cljs.core.count.call(null,c__5565__auto__);
var G__28466 = (0);
seq__28455 = G__28463;
chunk__28456 = G__28464;
count__28457 = G__28465;
i__28458 = G__28466;
continue;
} else {
var i = cljs.core.first.call(null,seq__28455__$1);
juliaworld.hero.process_item_actions.call(null,i);


var G__28467 = cljs.core.next.call(null,seq__28455__$1);
var G__28468 = null;
var G__28469 = (0);
var G__28470 = (0);
seq__28455 = G__28467;
chunk__28456 = G__28468;
count__28457 = G__28469;
i__28458 = G__28470;
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
var next = (function (){var G__28474 = current;
var G__28474__$1 = (((G__28474 instanceof cljs.core.Keyword))?G__28474.fqn:null);
switch (G__28474__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28474__$1)].join('')));

}
})();
var vec__28471 = juliaworld.hero.get_forward_coords.call(null,current);
var nx = cljs.core.nth.call(null,vec__28471,(0),null);
var ny = cljs.core.nth.call(null,vec__28471,(1),null);
var collision = cljs.core.some.call(null,cljs.core.identity,cljs.core.map.call(null,new cljs.core.Keyword(null,"collision","collision",-201625508),juliaworld.state.xy_props.call(null,nx,ny)));
var f1 = cljs.core.async.chan.call(null);
var c__15619__auto___28533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28510){
var state_val_28511 = (state_28510[(1)]);
if((state_val_28511 === (1))){
var state_28510__$1 = state_28510;
if(cljs.core.truth_(collision)){
var statearr_28512_28534 = state_28510__$1;
(statearr_28512_28534[(1)] = (2));

} else {
var statearr_28513_28535 = state_28510__$1;
(statearr_28513_28535[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28511 === (2))){
var state_28510__$1 = state_28510;
var statearr_28514_28536 = state_28510__$1;
(statearr_28514_28536[(2)] = null);

(statearr_28514_28536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28511 === (3))){
var inst_28477 = juliaworld.hero.remove_hero.call(null);
var inst_28478 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28479 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)];
var inst_28480 = (new cljs.core.PersistentVector(null,2,(5),inst_28478,inst_28479,null));
var inst_28481 = juliaworld.state.set_state.call(null,inst_28480,next);
var inst_28482 = juliaworld.hero.show_hero.call(null);
var inst_28483 = juliaworld.state.start_animation.call(null,next);
var inst_28484 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28485 = [nx,ny];
var inst_28486 = (new cljs.core.PersistentVector(null,2,(5),inst_28484,inst_28485,null));
var inst_28487 = juliaworld.hero.move_hero.call(null,inst_28486,next,0.5);
var state_28510__$1 = (function (){var statearr_28515 = state_28510;
(statearr_28515[(7)] = inst_28483);

(statearr_28515[(8)] = inst_28482);

(statearr_28515[(9)] = inst_28477);

(statearr_28515[(10)] = inst_28481);

return statearr_28515;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28510__$1,(5),inst_28487);
} else {
if((state_val_28511 === (4))){
var inst_28506 = (state_28510[(2)]);
var inst_28507 = (function (){return (function (){
var c__15619__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28519){
var state_val_28520 = (state_28519[(1)]);
if((state_val_28520 === (1))){
var state_28519__$1 = state_28519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28519__$1,(2),f1,new cljs.core.Keyword(null,"forward","forward",-557345303));
} else {
if((state_val_28520 === (2))){
var inst_28517 = (state_28519[(2)]);
var state_28519__$1 = state_28519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28519__$1,inst_28517);
} else {
return null;
}
}
});
return (function() {
var juliaworld$hero$forward_$_state_machine__15523__auto__ = null;
var juliaworld$hero$forward_$_state_machine__15523__auto____0 = (function (){
var statearr_28521 = [null,null,null,null,null,null,null];
(statearr_28521[(0)] = juliaworld$hero$forward_$_state_machine__15523__auto__);

(statearr_28521[(1)] = (1));

return statearr_28521;
});
var juliaworld$hero$forward_$_state_machine__15523__auto____1 = (function (state_28519){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28522){if((e28522 instanceof Object)){
var ex__15526__auto__ = e28522;
var statearr_28523_28537 = state_28519;
(statearr_28523_28537[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28538 = state_28519;
state_28519 = G__28538;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$forward_$_state_machine__15523__auto__ = function(state_28519){
switch(arguments.length){
case 0:
return juliaworld$hero$forward_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$forward_$_state_machine__15523__auto____1.call(this,state_28519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$forward_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$forward_$_state_machine__15523__auto____0;
juliaworld$hero$forward_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$forward_$_state_machine__15523__auto____1;
return juliaworld$hero$forward_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28524 = f__15620__auto__.call(null);
(statearr_28524[(6)] = c__15619__auto____$1);

return statearr_28524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto____$1;
});
})();
var inst_28508 = setTimeout(inst_28507,(100));
var state_28510__$1 = (function (){var statearr_28525 = state_28510;
(statearr_28525[(11)] = inst_28506);

return statearr_28525;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28510__$1,inst_28508);
} else {
if((state_val_28511 === (5))){
var inst_28489 = (state_28510[(2)]);
var inst_28490 = juliaworld.state.stop_animation.call(null,next);
var inst_28491 = juliaworld.hero.remove_hero.call(null);
var inst_28492 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28493 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_28494 = (new cljs.core.PersistentVector(null,2,(5),inst_28492,inst_28493,null));
var inst_28495 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28496 = [nx,ny];
var inst_28497 = (new cljs.core.PersistentVector(null,2,(5),inst_28495,inst_28496,null));
var inst_28498 = juliaworld.state.set_state.call(null,inst_28494,inst_28497);
var inst_28499 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28500 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)];
var inst_28501 = (new cljs.core.PersistentVector(null,2,(5),inst_28499,inst_28500,null));
var inst_28502 = juliaworld.state.set_state.call(null,inst_28501,current);
var inst_28503 = juliaworld.hero.show_hero.call(null);
var inst_28504 = juliaworld.hero.post_arrival_actions.call(null,nx,ny);
var state_28510__$1 = (function (){var statearr_28526 = state_28510;
(statearr_28526[(12)] = inst_28490);

(statearr_28526[(13)] = inst_28502);

(statearr_28526[(14)] = inst_28491);

(statearr_28526[(15)] = inst_28503);

(statearr_28526[(16)] = inst_28489);

(statearr_28526[(17)] = inst_28498);

return statearr_28526;
})();
var statearr_28527_28539 = state_28510__$1;
(statearr_28527_28539[(2)] = inst_28504);

(statearr_28527_28539[(1)] = (4));


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
var statearr_28528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28528[(0)] = juliaworld$hero$forward_$_state_machine__15523__auto__);

(statearr_28528[(1)] = (1));

return statearr_28528;
});
var juliaworld$hero$forward_$_state_machine__15523__auto____1 = (function (state_28510){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28529){if((e28529 instanceof Object)){
var ex__15526__auto__ = e28529;
var statearr_28530_28540 = state_28510;
(statearr_28530_28540[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28541 = state_28510;
state_28510 = G__28541;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
juliaworld$hero$forward_$_state_machine__15523__auto__ = function(state_28510){
switch(arguments.length){
case 0:
return juliaworld$hero$forward_$_state_machine__15523__auto____0.call(this);
case 1:
return juliaworld$hero$forward_$_state_machine__15523__auto____1.call(this,state_28510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$forward_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$forward_$_state_machine__15523__auto____0;
juliaworld$hero$forward_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$forward_$_state_machine__15523__auto____1;
return juliaworld$hero$forward_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28531 = f__15620__auto__.call(null);
(statearr_28531[(6)] = c__15619__auto___28533);

return statearr_28531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return f1;
});
juliaworld.hero.check = (function juliaworld$hero$check(){
var current = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var vec__28542 = juliaworld.hero.get_forward_coords.call(null,current);
var nx = cljs.core.nth.call(null,vec__28542,(0),null);
var ny = cljs.core.nth.call(null,vec__28542,(1),null);
return cljs.core.last.call(null,cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,new cljs.core.Keyword(null,"type","type",1174270348),juliaworld.state.xy_props.call(null,nx,ny))));
});

//# sourceMappingURL=hero.js.map

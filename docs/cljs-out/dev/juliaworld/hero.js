// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('juliaworld.hero');
goog.require('cljs.core');
goog.require('juliaworld.state');
goog.require('cljs.core.async');
juliaworld.hero.hero_coords = (function juliaworld$hero$hero_coords(x,y,name){
var vec__15583 = juliaworld.state.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tile-res","tile-res",-475889302)], null));
var tilew = cljs.core.nth.call(null,vec__15583,(0),null);
var tileh = cljs.core.nth.call(null,vec__15583,(1),null);
var map__15586 = juliaworld.state.get_animation.call(null,name);
var map__15586__$1 = cljs.core.__destructure_map.call(null,map__15586);
var basex = cljs.core.get.call(null,map__15586__$1,new cljs.core.Keyword(null,"basex","basex",-610151236));
var basey = cljs.core.get.call(null,map__15586__$1,new cljs.core.Keyword(null,"basey","basey",-430302880));
var vec__15587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((.5 + x) * tilew) - basex),(((.5 + y) * tileh) - basey)], null);
var x__$1 = cljs.core.nth.call(null,vec__15587,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__15587,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null);
});
juliaworld.hero.set_hero_pos = (function juliaworld$hero$set_hero_pos(x,y,name){
var vec__15590 = juliaworld.hero.hero_coords.call(null,x,y,name);
var x__$1 = cljs.core.nth.call(null,vec__15590,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__15590,(1),null);
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
var vec__15593 = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var x = cljs.core.nth.call(null,vec__15593,(0),null);
var y = cljs.core.nth.call(null,vec__15593,(1),null);
juliaworld.state.get_app.call(null).stage.addChild(hero);

juliaworld.hero.set_hero_pos.call(null,x,y,current);

return juliaworld.state.start_animation.call(null,current);
});
juliaworld.hero.turn_right = (function juliaworld$hero$turn_right(){
var next = (function (){var G__15596 = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var G__15596__$1 = (((G__15596 instanceof cljs.core.Keyword))?G__15596.fqn:null);
switch (G__15596__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15596__$1)].join('')));

}
})();
var _ch = cljs.core.async.chan.call(null);
var c__13704__auto___15623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_15606){
var state_val_15607 = (state_15606[(1)]);
if((state_val_15607 === (1))){
var inst_15597 = juliaworld.hero.remove_hero.call(null);
var inst_15598 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15599 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)];
var inst_15600 = (new cljs.core.PersistentVector(null,2,(5),inst_15598,inst_15599,null));
var inst_15601 = juliaworld.state.set_state.call(null,inst_15600,next);
var inst_15602 = juliaworld.hero.show_hero.call(null);
var inst_15603 = (function (){return (function (){
var c__13704__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_15611){
var state_val_15612 = (state_15611[(1)]);
if((state_val_15612 === (1))){
var state_15611__$1 = state_15611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15611__$1,(2),_ch,new cljs.core.Keyword(null,"turn-right","turn-right",-1479498405));
} else {
if((state_val_15612 === (2))){
var inst_15609 = (state_15611[(2)]);
var state_15611__$1 = state_15611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15611__$1,inst_15609);
} else {
return null;
}
}
});
return (function() {
var juliaworld$hero$turn_right_$_state_machine__13608__auto__ = null;
var juliaworld$hero$turn_right_$_state_machine__13608__auto____0 = (function (){
var statearr_15613 = [null,null,null,null,null,null,null];
(statearr_15613[(0)] = juliaworld$hero$turn_right_$_state_machine__13608__auto__);

(statearr_15613[(1)] = (1));

return statearr_15613;
});
var juliaworld$hero$turn_right_$_state_machine__13608__auto____1 = (function (state_15611){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_15611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e15614){if((e15614 instanceof Object)){
var ex__13611__auto__ = e15614;
var statearr_15615_15624 = state_15611;
(statearr_15615_15624[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15625 = state_15611;
state_15611 = G__15625;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
juliaworld$hero$turn_right_$_state_machine__13608__auto__ = function(state_15611){
switch(arguments.length){
case 0:
return juliaworld$hero$turn_right_$_state_machine__13608__auto____0.call(this);
case 1:
return juliaworld$hero$turn_right_$_state_machine__13608__auto____1.call(this,state_15611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$turn_right_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$turn_right_$_state_machine__13608__auto____0;
juliaworld$hero$turn_right_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$turn_right_$_state_machine__13608__auto____1;
return juliaworld$hero$turn_right_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_15616 = f__13705__auto__.call(null);
(statearr_15616[(6)] = c__13704__auto____$1);

return statearr_15616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto____$1;
});
})();
var inst_15604 = setTimeout(inst_15603,(500));
var state_15606__$1 = (function (){var statearr_15617 = state_15606;
(statearr_15617[(7)] = inst_15597);

(statearr_15617[(8)] = inst_15602);

(statearr_15617[(9)] = inst_15601);

return statearr_15617;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15606__$1,inst_15604);
} else {
return null;
}
});
return (function() {
var juliaworld$hero$turn_right_$_state_machine__13608__auto__ = null;
var juliaworld$hero$turn_right_$_state_machine__13608__auto____0 = (function (){
var statearr_15618 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15618[(0)] = juliaworld$hero$turn_right_$_state_machine__13608__auto__);

(statearr_15618[(1)] = (1));

return statearr_15618;
});
var juliaworld$hero$turn_right_$_state_machine__13608__auto____1 = (function (state_15606){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_15606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e15619){if((e15619 instanceof Object)){
var ex__13611__auto__ = e15619;
var statearr_15620_15626 = state_15606;
(statearr_15620_15626[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15627 = state_15606;
state_15606 = G__15627;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
juliaworld$hero$turn_right_$_state_machine__13608__auto__ = function(state_15606){
switch(arguments.length){
case 0:
return juliaworld$hero$turn_right_$_state_machine__13608__auto____0.call(this);
case 1:
return juliaworld$hero$turn_right_$_state_machine__13608__auto____1.call(this,state_15606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$turn_right_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$turn_right_$_state_machine__13608__auto____0;
juliaworld$hero$turn_right_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$turn_right_$_state_machine__13608__auto____1;
return juliaworld$hero$turn_right_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_15621 = f__13705__auto__.call(null);
(statearr_15621[(6)] = c__13704__auto___15623);

return statearr_15621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return _ch;
});
juliaworld.hero.turn_left = (function juliaworld$hero$turn_left(){
var next = (function (){var G__15628 = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var G__15628__$1 = (((G__15628 instanceof cljs.core.Keyword))?G__15628.fqn:null);
switch (G__15628__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15628__$1)].join('')));

}
})();
var _ch = cljs.core.async.chan.call(null);
var c__13704__auto___15655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_15638){
var state_val_15639 = (state_15638[(1)]);
if((state_val_15639 === (1))){
var inst_15629 = juliaworld.hero.remove_hero.call(null);
var inst_15630 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15631 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)];
var inst_15632 = (new cljs.core.PersistentVector(null,2,(5),inst_15630,inst_15631,null));
var inst_15633 = juliaworld.state.set_state.call(null,inst_15632,next);
var inst_15634 = juliaworld.hero.show_hero.call(null);
var inst_15635 = (function (){return (function (){
var c__13704__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_15643){
var state_val_15644 = (state_15643[(1)]);
if((state_val_15644 === (1))){
var state_15643__$1 = state_15643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15643__$1,(2),_ch,new cljs.core.Keyword(null,"turn-left","turn-left",-942868009));
} else {
if((state_val_15644 === (2))){
var inst_15641 = (state_15643[(2)]);
var state_15643__$1 = state_15643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15643__$1,inst_15641);
} else {
return null;
}
}
});
return (function() {
var juliaworld$hero$turn_left_$_state_machine__13608__auto__ = null;
var juliaworld$hero$turn_left_$_state_machine__13608__auto____0 = (function (){
var statearr_15645 = [null,null,null,null,null,null,null];
(statearr_15645[(0)] = juliaworld$hero$turn_left_$_state_machine__13608__auto__);

(statearr_15645[(1)] = (1));

return statearr_15645;
});
var juliaworld$hero$turn_left_$_state_machine__13608__auto____1 = (function (state_15643){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_15643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e15646){if((e15646 instanceof Object)){
var ex__13611__auto__ = e15646;
var statearr_15647_15656 = state_15643;
(statearr_15647_15656[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15657 = state_15643;
state_15643 = G__15657;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
juliaworld$hero$turn_left_$_state_machine__13608__auto__ = function(state_15643){
switch(arguments.length){
case 0:
return juliaworld$hero$turn_left_$_state_machine__13608__auto____0.call(this);
case 1:
return juliaworld$hero$turn_left_$_state_machine__13608__auto____1.call(this,state_15643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$turn_left_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$turn_left_$_state_machine__13608__auto____0;
juliaworld$hero$turn_left_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$turn_left_$_state_machine__13608__auto____1;
return juliaworld$hero$turn_left_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_15648 = f__13705__auto__.call(null);
(statearr_15648[(6)] = c__13704__auto____$1);

return statearr_15648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto____$1;
});
})();
var inst_15636 = setTimeout(inst_15635,(500));
var state_15638__$1 = (function (){var statearr_15649 = state_15638;
(statearr_15649[(7)] = inst_15629);

(statearr_15649[(8)] = inst_15633);

(statearr_15649[(9)] = inst_15634);

return statearr_15649;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15638__$1,inst_15636);
} else {
return null;
}
});
return (function() {
var juliaworld$hero$turn_left_$_state_machine__13608__auto__ = null;
var juliaworld$hero$turn_left_$_state_machine__13608__auto____0 = (function (){
var statearr_15650 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15650[(0)] = juliaworld$hero$turn_left_$_state_machine__13608__auto__);

(statearr_15650[(1)] = (1));

return statearr_15650;
});
var juliaworld$hero$turn_left_$_state_machine__13608__auto____1 = (function (state_15638){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_15638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e15651){if((e15651 instanceof Object)){
var ex__13611__auto__ = e15651;
var statearr_15652_15658 = state_15638;
(statearr_15652_15658[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15659 = state_15638;
state_15638 = G__15659;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
juliaworld$hero$turn_left_$_state_machine__13608__auto__ = function(state_15638){
switch(arguments.length){
case 0:
return juliaworld$hero$turn_left_$_state_machine__13608__auto____0.call(this);
case 1:
return juliaworld$hero$turn_left_$_state_machine__13608__auto____1.call(this,state_15638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$turn_left_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$turn_left_$_state_machine__13608__auto____0;
juliaworld$hero$turn_left_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$turn_left_$_state_machine__13608__auto____1;
return juliaworld$hero$turn_left_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_15653 = f__13705__auto__.call(null);
(statearr_15653[(6)] = c__13704__auto___15655);

return statearr_15653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return _ch;
});
juliaworld.hero.get_forward_coords = (function juliaworld$hero$get_forward_coords(current){
var vec__15660 = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
var x = cljs.core.nth.call(null,vec__15660,(0),null);
var y = cljs.core.nth.call(null,vec__15660,(1),null);
var vec__15663 = (function (){var G__15666 = current;
var G__15666__$1 = (((G__15666 instanceof cljs.core.Keyword))?G__15666.fqn:null);
switch (G__15666__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15666__$1)].join('')));

}
})();
var nx = cljs.core.nth.call(null,vec__15663,(0),null);
var ny = cljs.core.nth.call(null,vec__15663,(1),null);
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
juliaworld.hero.move_hero = (function juliaworld$hero$move_hero(p__15668,current,speed){
var vec__15669 = p__15668;
var x = cljs.core.nth.call(null,vec__15669,(0),null);
var y = cljs.core.nth.call(null,vec__15669,(1),null);
var vec__15672 = juliaworld.hero.hero_coords.call(null,x,y,current);
var finalx = cljs.core.nth.call(null,vec__15672,(0),null);
var finaly = cljs.core.nth.call(null,vec__15672,(1),null);
var finished = cljs.core.async.chan.call(null);
var sp = new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(juliaworld.state.get_animation.call(null,current));
var xorig = sp.x;
var yorig = sp.y;
var dx = juliaworld.hero.calculate_delta.call(null,xorig,finalx,speed);
var dy = juliaworld.hero.calculate_delta.call(null,yorig,finaly,speed);
var fn = (function juliaworld$hero$move_hero_$_movement(){
var cx = sp.x;
var cy = sp.y;
var vec__15675 = cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null));
var nx = cljs.core.nth.call(null,vec__15675,(0),null);
var ny = cljs.core.nth.call(null,vec__15675,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [finalx,finaly], null))){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_15684){
var state_val_15685 = (state_15684[(1)]);
if((state_val_15685 === (1))){
var state_15684__$1 = state_15684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15684__$1,(2),finished,new cljs.core.Keyword(null,"finished","finished",-1018867731));
} else {
if((state_val_15685 === (2))){
var inst_15679 = (state_15684[(2)]);
var inst_15680 = juliaworld.state.get_app.call(null);
var inst_15681 = inst_15680.ticker;
var inst_15682 = inst_15681.remove(juliaworld$hero$move_hero_$_movement);
var state_15684__$1 = (function (){var statearr_15686 = state_15684;
(statearr_15686[(7)] = inst_15679);

return statearr_15686;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15684__$1,inst_15682);
} else {
return null;
}
}
});
return (function() {
var juliaworld$hero$move_hero_$_movement_$_state_machine__13608__auto__ = null;
var juliaworld$hero$move_hero_$_movement_$_state_machine__13608__auto____0 = (function (){
var statearr_15687 = [null,null,null,null,null,null,null,null];
(statearr_15687[(0)] = juliaworld$hero$move_hero_$_movement_$_state_machine__13608__auto__);

(statearr_15687[(1)] = (1));

return statearr_15687;
});
var juliaworld$hero$move_hero_$_movement_$_state_machine__13608__auto____1 = (function (state_15684){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_15684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e15688){if((e15688 instanceof Object)){
var ex__13611__auto__ = e15688;
var statearr_15689_15691 = state_15684;
(statearr_15689_15691[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15692 = state_15684;
state_15684 = G__15692;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
juliaworld$hero$move_hero_$_movement_$_state_machine__13608__auto__ = function(state_15684){
switch(arguments.length){
case 0:
return juliaworld$hero$move_hero_$_movement_$_state_machine__13608__auto____0.call(this);
case 1:
return juliaworld$hero$move_hero_$_movement_$_state_machine__13608__auto____1.call(this,state_15684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$move_hero_$_movement_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$move_hero_$_movement_$_state_machine__13608__auto____0;
juliaworld$hero$move_hero_$_movement_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$move_hero_$_movement_$_state_machine__13608__auto____1;
return juliaworld$hero$move_hero_$_movement_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_15690 = f__13705__auto__.call(null);
(statearr_15690[(6)] = c__13704__auto__);

return statearr_15690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
} else {
(sp.x = nx);

return (sp.y = ny);
}
});
juliaworld.state.get_app.call(null).ticker.add(fn);

return finished;
});
juliaworld.hero.forward = (function juliaworld$hero$forward(){
var current = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var next = (function (){var G__15696 = current;
var G__15696__$1 = (((G__15696 instanceof cljs.core.Keyword))?G__15696.fqn:null);
switch (G__15696__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15696__$1)].join('')));

}
})();
var vec__15693 = juliaworld.hero.get_forward_coords.call(null,current);
var nx = cljs.core.nth.call(null,vec__15693,(0),null);
var ny = cljs.core.nth.call(null,vec__15693,(1),null);
var collision = cljs.core.some.call(null,cljs.core.identity,cljs.core.map.call(null,new cljs.core.Keyword(null,"collision","collision",-201625508),juliaworld.state.xy_props.call(null,nx,ny)));
var f1 = cljs.core.async.chan.call(null);
var c__13704__auto___15754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_15731){
var state_val_15732 = (state_15731[(1)]);
if((state_val_15732 === (1))){
var state_15731__$1 = state_15731;
if(cljs.core.truth_(collision)){
var statearr_15733_15755 = state_15731__$1;
(statearr_15733_15755[(1)] = (2));

} else {
var statearr_15734_15756 = state_15731__$1;
(statearr_15734_15756[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15732 === (2))){
var state_15731__$1 = state_15731;
var statearr_15735_15757 = state_15731__$1;
(statearr_15735_15757[(2)] = null);

(statearr_15735_15757[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15732 === (3))){
var inst_15699 = juliaworld.hero.remove_hero.call(null);
var inst_15700 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15701 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)];
var inst_15702 = (new cljs.core.PersistentVector(null,2,(5),inst_15700,inst_15701,null));
var inst_15703 = juliaworld.state.set_state.call(null,inst_15702,next);
var inst_15704 = juliaworld.hero.show_hero.call(null);
var inst_15705 = juliaworld.state.start_animation.call(null,next);
var inst_15706 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15707 = [nx,ny];
var inst_15708 = (new cljs.core.PersistentVector(null,2,(5),inst_15706,inst_15707,null));
var inst_15709 = juliaworld.hero.move_hero.call(null,inst_15708,next,0.5);
var state_15731__$1 = (function (){var statearr_15736 = state_15731;
(statearr_15736[(7)] = inst_15699);

(statearr_15736[(8)] = inst_15704);

(statearr_15736[(9)] = inst_15703);

(statearr_15736[(10)] = inst_15705);

return statearr_15736;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15731__$1,(5),inst_15709);
} else {
if((state_val_15732 === (4))){
var inst_15727 = (state_15731[(2)]);
var inst_15728 = (function (){return (function (){
var c__13704__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_15740){
var state_val_15741 = (state_15740[(1)]);
if((state_val_15741 === (1))){
var state_15740__$1 = state_15740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15740__$1,(2),f1,new cljs.core.Keyword(null,"forward","forward",-557345303));
} else {
if((state_val_15741 === (2))){
var inst_15738 = (state_15740[(2)]);
var state_15740__$1 = state_15740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15740__$1,inst_15738);
} else {
return null;
}
}
});
return (function() {
var juliaworld$hero$forward_$_state_machine__13608__auto__ = null;
var juliaworld$hero$forward_$_state_machine__13608__auto____0 = (function (){
var statearr_15742 = [null,null,null,null,null,null,null];
(statearr_15742[(0)] = juliaworld$hero$forward_$_state_machine__13608__auto__);

(statearr_15742[(1)] = (1));

return statearr_15742;
});
var juliaworld$hero$forward_$_state_machine__13608__auto____1 = (function (state_15740){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_15740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e15743){if((e15743 instanceof Object)){
var ex__13611__auto__ = e15743;
var statearr_15744_15758 = state_15740;
(statearr_15744_15758[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15759 = state_15740;
state_15740 = G__15759;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
juliaworld$hero$forward_$_state_machine__13608__auto__ = function(state_15740){
switch(arguments.length){
case 0:
return juliaworld$hero$forward_$_state_machine__13608__auto____0.call(this);
case 1:
return juliaworld$hero$forward_$_state_machine__13608__auto____1.call(this,state_15740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$forward_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$forward_$_state_machine__13608__auto____0;
juliaworld$hero$forward_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$forward_$_state_machine__13608__auto____1;
return juliaworld$hero$forward_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_15745 = f__13705__auto__.call(null);
(statearr_15745[(6)] = c__13704__auto____$1);

return statearr_15745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto____$1;
});
})();
var inst_15729 = setTimeout(inst_15728,(100));
var state_15731__$1 = (function (){var statearr_15746 = state_15731;
(statearr_15746[(11)] = inst_15727);

return statearr_15746;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15731__$1,inst_15729);
} else {
if((state_val_15732 === (5))){
var inst_15711 = (state_15731[(2)]);
var inst_15712 = juliaworld.state.stop_animation.call(null,next);
var inst_15713 = juliaworld.hero.remove_hero.call(null);
var inst_15714 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15715 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"pos","pos",-864607220)];
var inst_15716 = (new cljs.core.PersistentVector(null,2,(5),inst_15714,inst_15715,null));
var inst_15717 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15718 = [nx,ny];
var inst_15719 = (new cljs.core.PersistentVector(null,2,(5),inst_15717,inst_15718,null));
var inst_15720 = juliaworld.state.set_state.call(null,inst_15716,inst_15719);
var inst_15721 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15722 = [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)];
var inst_15723 = (new cljs.core.PersistentVector(null,2,(5),inst_15721,inst_15722,null));
var inst_15724 = juliaworld.state.set_state.call(null,inst_15723,current);
var inst_15725 = juliaworld.hero.show_hero.call(null);
var state_15731__$1 = (function (){var statearr_15747 = state_15731;
(statearr_15747[(12)] = inst_15724);

(statearr_15747[(13)] = inst_15711);

(statearr_15747[(14)] = inst_15720);

(statearr_15747[(15)] = inst_15713);

(statearr_15747[(16)] = inst_15712);

return statearr_15747;
})();
var statearr_15748_15760 = state_15731__$1;
(statearr_15748_15760[(2)] = inst_15725);

(statearr_15748_15760[(1)] = (4));


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
var juliaworld$hero$forward_$_state_machine__13608__auto__ = null;
var juliaworld$hero$forward_$_state_machine__13608__auto____0 = (function (){
var statearr_15749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15749[(0)] = juliaworld$hero$forward_$_state_machine__13608__auto__);

(statearr_15749[(1)] = (1));

return statearr_15749;
});
var juliaworld$hero$forward_$_state_machine__13608__auto____1 = (function (state_15731){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_15731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e15750){if((e15750 instanceof Object)){
var ex__13611__auto__ = e15750;
var statearr_15751_15761 = state_15731;
(statearr_15751_15761[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15762 = state_15731;
state_15731 = G__15762;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
juliaworld$hero$forward_$_state_machine__13608__auto__ = function(state_15731){
switch(arguments.length){
case 0:
return juliaworld$hero$forward_$_state_machine__13608__auto____0.call(this);
case 1:
return juliaworld$hero$forward_$_state_machine__13608__auto____1.call(this,state_15731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juliaworld$hero$forward_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = juliaworld$hero$forward_$_state_machine__13608__auto____0;
juliaworld$hero$forward_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = juliaworld$hero$forward_$_state_machine__13608__auto____1;
return juliaworld$hero$forward_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_15752 = f__13705__auto__.call(null);
(statearr_15752[(6)] = c__13704__auto___15754);

return statearr_15752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return f1;
});
juliaworld.hero.check = (function juliaworld$hero$check(){
var current = juliaworld.state.get_state.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
var vec__15763 = juliaworld.hero.get_forward_coords.call(null,current);
var nx = cljs.core.nth.call(null,vec__15763,(0),null);
var ny = cljs.core.nth.call(null,vec__15763,(1),null);
return cljs.core.last.call(null,cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,new cljs.core.Keyword(null,"type","type",1174270348),juliaworld.state.xy_props.call(null,nx,ny))));
});

//# sourceMappingURL=hero.js.map

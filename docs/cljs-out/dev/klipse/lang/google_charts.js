// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.google_charts');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('clojure.string');
goog.require('klipse.lang.javascript');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
if((typeof klipse !== 'undefined') && (typeof klipse.lang !== 'undefined') && (typeof klipse.lang.google_charts !== 'undefined') && (typeof klipse.lang.google_charts.google_charts_loaded !== 'undefined')){
} else {
klipse.lang.google_charts.google_charts_loaded = false;
}
klipse.lang.google_charts.ensure_google_charts_loaded_BANG_ = (function klipse$lang$google_charts$ensure_google_charts_loaded_BANG_(){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_20661){
var state_val_20662 = (state_20661[(1)]);
if((state_val_20662 === (7))){
var state_20661__$1 = state_20661;
var statearr_20663_20693 = state_20661__$1;
(statearr_20663_20693[(2)] = null);

(statearr_20663_20693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (1))){
var state_20661__$1 = state_20661;
if(klipse.lang.google_charts.google_charts_loaded){
var statearr_20664_20694 = state_20661__$1;
(statearr_20664_20694[(1)] = (2));

} else {
var statearr_20665_20695 = state_20661__$1;
(statearr_20665_20695[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (4))){
var inst_20659 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20661__$1,inst_20659);
} else {
if((state_val_20662 === (15))){
var inst_20644 = (state_20661[(7)]);
var inst_20649 = (inst_20644["setOnLoadCallback"]);
var state_20661__$1 = state_20661;
var statearr_20666_20696 = state_20661__$1;
(statearr_20666_20696[(2)] = inst_20649);

(statearr_20666_20696[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (13))){
var state_20661__$1 = state_20661;
var statearr_20667_20697 = state_20661__$1;
(statearr_20667_20697[(2)] = null);

(statearr_20667_20697[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (6))){
var inst_20616 = (google["charts"]);
var state_20661__$1 = state_20661;
var statearr_20668_20698 = state_20661__$1;
(statearr_20668_20698[(2)] = inst_20616);

(statearr_20668_20698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (17))){
var inst_20636 = (state_20661[(8)]);
var inst_20644 = (state_20661[(7)]);
var inst_20652 = (state_20661[(2)]);
var inst_20653 = inst_20652.call(inst_20644);
var inst_20654 = (function (){var c = inst_20636;
return (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.Keyword(null,"ok","ok",967785236));
});
})();
var state_20661__$1 = (function (){var statearr_20669 = state_20661;
(statearr_20669[(9)] = inst_20653);

(statearr_20669[(10)] = inst_20654);

return statearr_20669;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20661__$1,(18),inst_20636);
} else {
if((state_val_20662 === (3))){
var inst_20609 = klipse.utils.add_script_tag_BANG_.call(null,"https://www.gstatic.com/charts/loader.js");
var state_20661__$1 = state_20661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20661__$1,(5),inst_20609);
} else {
if((state_val_20662 === (12))){
var inst_20641 = (google["charts"]);
var state_20661__$1 = state_20661;
var statearr_20670_20699 = state_20661__$1;
(statearr_20670_20699[(2)] = inst_20641);

(statearr_20670_20699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (2))){
var state_20661__$1 = state_20661;
var statearr_20671_20700 = state_20661__$1;
(statearr_20671_20700[(2)] = null);

(statearr_20671_20700[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (11))){
var inst_20619 = (state_20661[(11)]);
var inst_20627 = (state_20661[(2)]);
var inst_20628 = inst_20627.call(inst_20619);
var inst_20629 = [new cljs.core.Keyword(null,"packages","packages",1549741112)];
var inst_20630 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20631 = ["corechart","table"];
var inst_20632 = (new cljs.core.PersistentVector(null,2,(5),inst_20630,inst_20631,null));
var inst_20633 = [inst_20632];
var inst_20634 = cljs.core.PersistentHashMap.fromArrays(inst_20629,inst_20633);
var inst_20635 = cljs.core.clj__GT_js.call(null,inst_20634);
var inst_20636 = cljs.core.async.chan.call(null);
var inst_20639 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,google,"charts");
var state_20661__$1 = (function (){var statearr_20672 = state_20661;
(statearr_20672[(12)] = inst_20635);

(statearr_20672[(13)] = inst_20628);

(statearr_20672[(8)] = inst_20636);

return statearr_20672;
})();
if(inst_20639){
var statearr_20673_20701 = state_20661__$1;
(statearr_20673_20701[(1)] = (12));

} else {
var statearr_20674_20702 = state_20661__$1;
(statearr_20674_20702[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (9))){
var inst_20619 = (state_20661[(11)]);
var inst_20624 = (inst_20619["load"]);
var state_20661__$1 = state_20661;
var statearr_20675_20703 = state_20661__$1;
(statearr_20675_20703[(2)] = inst_20624);

(statearr_20675_20703[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (5))){
var inst_20611 = (state_20661[(2)]);
var inst_20614 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,google,"charts");
var state_20661__$1 = (function (){var statearr_20676 = state_20661;
(statearr_20676[(14)] = inst_20611);

return statearr_20676;
})();
if(inst_20614){
var statearr_20677_20704 = state_20661__$1;
(statearr_20677_20704[(1)] = (6));

} else {
var statearr_20678_20705 = state_20661__$1;
(statearr_20678_20705[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (14))){
var inst_20644 = (state_20661[(7)]);
var inst_20644__$1 = (state_20661[(2)]);
var inst_20647 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_20644__$1,"setOnLoadCallback");
var state_20661__$1 = (function (){var statearr_20679 = state_20661;
(statearr_20679[(7)] = inst_20644__$1);

return statearr_20679;
})();
if(inst_20647){
var statearr_20680_20706 = state_20661__$1;
(statearr_20680_20706[(1)] = (15));

} else {
var statearr_20681_20707 = state_20661__$1;
(statearr_20681_20707[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (16))){
var state_20661__$1 = state_20661;
var statearr_20682_20708 = state_20661__$1;
(statearr_20682_20708[(2)] = null);

(statearr_20682_20708[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (10))){
var state_20661__$1 = state_20661;
var statearr_20683_20709 = state_20661__$1;
(statearr_20683_20709[(2)] = null);

(statearr_20683_20709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (18))){
var inst_20656 = (state_20661[(2)]);
var inst_20657 = (klipse.lang.google_charts.google_charts_loaded = true);
var state_20661__$1 = (function (){var statearr_20684 = state_20661;
(statearr_20684[(15)] = inst_20656);

return statearr_20684;
})();
var statearr_20685_20710 = state_20661__$1;
(statearr_20685_20710[(2)] = inst_20657);

(statearr_20685_20710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (8))){
var inst_20619 = (state_20661[(11)]);
var inst_20619__$1 = (state_20661[(2)]);
var inst_20622 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_20619__$1,"load");
var state_20661__$1 = (function (){var statearr_20686 = state_20661;
(statearr_20686[(11)] = inst_20619__$1);

return statearr_20686;
})();
if(inst_20622){
var statearr_20687_20711 = state_20661__$1;
(statearr_20687_20711[(1)] = (9));

} else {
var statearr_20688_20712 = state_20661__$1;
(statearr_20688_20712[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto__ = null;
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto____0 = (function (){
var statearr_20689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20689[(0)] = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto__);

(statearr_20689[(1)] = (1));

return statearr_20689;
});
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto____1 = (function (state_20661){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_20661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e20690){if((e20690 instanceof Object)){
var ex__13611__auto__ = e20690;
var statearr_20691_20713 = state_20661;
(statearr_20691_20713[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20714 = state_20661;
state_20661 = G__20714;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto__ = function(state_20661){
switch(arguments.length){
case 0:
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto____1.call(this,state_20661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto____0;
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto____1;
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_20692 = f__13705__auto__.call(null);
(statearr_20692[(6)] = c__13704__auto__);

return statearr_20692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.google_charts.draw_chart = (function klipse$lang$google_charts$draw_chart(data_js,container_id){
var chart_constructor = (function (){var obj20717 = (function (){var obj20715 = google;
var k20716 = "visualization";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20715,k20716)){
return (obj20715[k20716]);
} else {
return null;
}
})();
var k20718 = "ChartWrapper";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20717,k20718)){
return (obj20717[k20718]);
} else {
return null;
}
})();
var chart_wrapper = (new chart_constructor(data_js));
var obj__17203__auto__ = chart_wrapper;
var f__17204__auto__ = (function (){var obj20719 = obj__17203__auto__;
var k20720 = "draw";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj20719,k20720)){
return (obj20719[k20720]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__);
});
klipse.lang.google_charts.parse_js_object = (function klipse$lang$google_charts$parse_js_object(s){
try{return eval(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join(''));
}catch (e20721){var e = e20721;
throw "Invalid JSON";
}});
klipse.lang.google_charts.render_STAR_ = (function klipse$lang$google_charts$render_STAR_(src,p__20722){
var map__20723 = p__20722;
var map__20723__$1 = cljs.core.__destructure_map.call(null,map__20723);
var opts = map__20723__$1;
var container_id = cljs.core.get.call(null,map__20723__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var container = document.getElementById(container_id);
var _ = goog.dom.setTextContent(container,"");
var data_options_js = klipse.lang.google_charts.parse_js_object.call(null,src);
(data_options_js["containerId"] = container_id);

return klipse.lang.google_charts.draw_chart.call(null,data_options_js,container_id);
}catch (e20724){var e = e20724;
var container_20725 = document.getElementById(container_id);
goog.dom.setTextContent(container_20725,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));

var c = cljs.core.async.chan.call(null);
cljs.core.async.close_BANG_.call(null,c);

return c;
}});
klipse.lang.google_charts.render = (function klipse$lang$google_charts$render(src,p__20726){
var map__20727 = p__20726;
var map__20727__$1 = cljs.core.__destructure_map.call(null,map__20727);
var opts = map__20727__$1;
var container_id = cljs.core.get.call(null,map__20727__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_20733){
var state_val_20734 = (state_20733[(1)]);
if((state_val_20734 === (1))){
var inst_20728 = klipse.lang.google_charts.ensure_google_charts_loaded_BANG_.call(null);
var state_20733__$1 = state_20733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20733__$1,(2),inst_20728);
} else {
if((state_val_20734 === (2))){
var inst_20730 = (state_20733[(2)]);
var inst_20731 = klipse.lang.google_charts.render_STAR_.call(null,src,opts);
var state_20733__$1 = (function (){var statearr_20735 = state_20733;
(statearr_20735[(7)] = inst_20730);

return statearr_20735;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20733__$1,inst_20731);
} else {
return null;
}
}
});
return (function() {
var klipse$lang$google_charts$render_$_state_machine__13608__auto__ = null;
var klipse$lang$google_charts$render_$_state_machine__13608__auto____0 = (function (){
var statearr_20736 = [null,null,null,null,null,null,null,null];
(statearr_20736[(0)] = klipse$lang$google_charts$render_$_state_machine__13608__auto__);

(statearr_20736[(1)] = (1));

return statearr_20736;
});
var klipse$lang$google_charts$render_$_state_machine__13608__auto____1 = (function (state_20733){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_20733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e20737){if((e20737 instanceof Object)){
var ex__13611__auto__ = e20737;
var statearr_20738_20740 = state_20733;
(statearr_20738_20740[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20741 = state_20733;
state_20733 = G__20741;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$google_charts$render_$_state_machine__13608__auto__ = function(state_20733){
switch(arguments.length){
case 0:
return klipse$lang$google_charts$render_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$google_charts$render_$_state_machine__13608__auto____1.call(this,state_20733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$google_charts$render_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$google_charts$render_$_state_machine__13608__auto____0;
klipse$lang$google_charts$render_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$google_charts$render_$_state_machine__13608__auto____1;
return klipse$lang$google_charts$render_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_20739 = f__13705__auto__.call(null);
(statearr_20739[(6)] = c__13704__auto__);

return statearr_20739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.google_charts.opts = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"application/json",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.google_charts.render,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(1000),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"google-charts","selector_google_charts",klipse.lang.google_charts.opts);

//# sourceMappingURL=google_charts.js.map

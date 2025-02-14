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
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28601){
var state_val_28602 = (state_28601[(1)]);
if((state_val_28602 === (7))){
var state_28601__$1 = state_28601;
var statearr_28603_28633 = state_28601__$1;
(statearr_28603_28633[(2)] = null);

(statearr_28603_28633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (1))){
var state_28601__$1 = state_28601;
if(klipse.lang.google_charts.google_charts_loaded){
var statearr_28604_28634 = state_28601__$1;
(statearr_28604_28634[(1)] = (2));

} else {
var statearr_28605_28635 = state_28601__$1;
(statearr_28605_28635[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (4))){
var inst_28599 = (state_28601[(2)]);
var state_28601__$1 = state_28601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28601__$1,inst_28599);
} else {
if((state_val_28602 === (15))){
var inst_28584 = (state_28601[(7)]);
var inst_28589 = (inst_28584["setOnLoadCallback"]);
var state_28601__$1 = state_28601;
var statearr_28606_28636 = state_28601__$1;
(statearr_28606_28636[(2)] = inst_28589);

(statearr_28606_28636[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (13))){
var state_28601__$1 = state_28601;
var statearr_28607_28637 = state_28601__$1;
(statearr_28607_28637[(2)] = null);

(statearr_28607_28637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (6))){
var inst_28556 = (google["charts"]);
var state_28601__$1 = state_28601;
var statearr_28608_28638 = state_28601__$1;
(statearr_28608_28638[(2)] = inst_28556);

(statearr_28608_28638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (17))){
var inst_28576 = (state_28601[(8)]);
var inst_28584 = (state_28601[(7)]);
var inst_28592 = (state_28601[(2)]);
var inst_28593 = inst_28592.call(inst_28584);
var inst_28594 = (function (){var c = inst_28576;
return (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.Keyword(null,"ok","ok",967785236));
});
})();
var state_28601__$1 = (function (){var statearr_28609 = state_28601;
(statearr_28609[(9)] = inst_28593);

(statearr_28609[(10)] = inst_28594);

return statearr_28609;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28601__$1,(18),inst_28576);
} else {
if((state_val_28602 === (3))){
var inst_28549 = klipse.utils.add_script_tag_BANG_.call(null,"https://www.gstatic.com/charts/loader.js");
var state_28601__$1 = state_28601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28601__$1,(5),inst_28549);
} else {
if((state_val_28602 === (12))){
var inst_28581 = (google["charts"]);
var state_28601__$1 = state_28601;
var statearr_28610_28639 = state_28601__$1;
(statearr_28610_28639[(2)] = inst_28581);

(statearr_28610_28639[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (2))){
var state_28601__$1 = state_28601;
var statearr_28611_28640 = state_28601__$1;
(statearr_28611_28640[(2)] = null);

(statearr_28611_28640[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (11))){
var inst_28559 = (state_28601[(11)]);
var inst_28567 = (state_28601[(2)]);
var inst_28568 = inst_28567.call(inst_28559);
var inst_28569 = [new cljs.core.Keyword(null,"packages","packages",1549741112)];
var inst_28570 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28571 = ["corechart","table"];
var inst_28572 = (new cljs.core.PersistentVector(null,2,(5),inst_28570,inst_28571,null));
var inst_28573 = [inst_28572];
var inst_28574 = cljs.core.PersistentHashMap.fromArrays(inst_28569,inst_28573);
var inst_28575 = cljs.core.clj__GT_js.call(null,inst_28574);
var inst_28576 = cljs.core.async.chan.call(null);
var inst_28579 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,google,"charts");
var state_28601__$1 = (function (){var statearr_28612 = state_28601;
(statearr_28612[(8)] = inst_28576);

(statearr_28612[(12)] = inst_28568);

(statearr_28612[(13)] = inst_28575);

return statearr_28612;
})();
if(inst_28579){
var statearr_28613_28641 = state_28601__$1;
(statearr_28613_28641[(1)] = (12));

} else {
var statearr_28614_28642 = state_28601__$1;
(statearr_28614_28642[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (9))){
var inst_28559 = (state_28601[(11)]);
var inst_28564 = (inst_28559["load"]);
var state_28601__$1 = state_28601;
var statearr_28615_28643 = state_28601__$1;
(statearr_28615_28643[(2)] = inst_28564);

(statearr_28615_28643[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (5))){
var inst_28551 = (state_28601[(2)]);
var inst_28554 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,google,"charts");
var state_28601__$1 = (function (){var statearr_28616 = state_28601;
(statearr_28616[(14)] = inst_28551);

return statearr_28616;
})();
if(inst_28554){
var statearr_28617_28644 = state_28601__$1;
(statearr_28617_28644[(1)] = (6));

} else {
var statearr_28618_28645 = state_28601__$1;
(statearr_28618_28645[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (14))){
var inst_28584 = (state_28601[(7)]);
var inst_28584__$1 = (state_28601[(2)]);
var inst_28587 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_28584__$1,"setOnLoadCallback");
var state_28601__$1 = (function (){var statearr_28619 = state_28601;
(statearr_28619[(7)] = inst_28584__$1);

return statearr_28619;
})();
if(inst_28587){
var statearr_28620_28646 = state_28601__$1;
(statearr_28620_28646[(1)] = (15));

} else {
var statearr_28621_28647 = state_28601__$1;
(statearr_28621_28647[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (16))){
var state_28601__$1 = state_28601;
var statearr_28622_28648 = state_28601__$1;
(statearr_28622_28648[(2)] = null);

(statearr_28622_28648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (10))){
var state_28601__$1 = state_28601;
var statearr_28623_28649 = state_28601__$1;
(statearr_28623_28649[(2)] = null);

(statearr_28623_28649[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (18))){
var inst_28596 = (state_28601[(2)]);
var inst_28597 = (klipse.lang.google_charts.google_charts_loaded = true);
var state_28601__$1 = (function (){var statearr_28624 = state_28601;
(statearr_28624[(15)] = inst_28596);

return statearr_28624;
})();
var statearr_28625_28650 = state_28601__$1;
(statearr_28625_28650[(2)] = inst_28597);

(statearr_28625_28650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28602 === (8))){
var inst_28559 = (state_28601[(11)]);
var inst_28559__$1 = (state_28601[(2)]);
var inst_28562 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_28559__$1,"load");
var state_28601__$1 = (function (){var statearr_28626 = state_28601;
(statearr_28626[(11)] = inst_28559__$1);

return statearr_28626;
})();
if(inst_28562){
var statearr_28627_28651 = state_28601__$1;
(statearr_28627_28651[(1)] = (9));

} else {
var statearr_28628_28652 = state_28601__$1;
(statearr_28628_28652[(1)] = (10));

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
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto__ = null;
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto____0 = (function (){
var statearr_28629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28629[(0)] = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto__);

(statearr_28629[(1)] = (1));

return statearr_28629;
});
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto____1 = (function (state_28601){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28630){if((e28630 instanceof Object)){
var ex__15526__auto__ = e28630;
var statearr_28631_28653 = state_28601;
(statearr_28631_28653[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28654 = state_28601;
state_28601 = G__28654;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto__ = function(state_28601){
switch(arguments.length){
case 0:
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto____1.call(this,state_28601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto____0;
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto____1;
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28632 = f__15620__auto__.call(null);
(statearr_28632[(6)] = c__15619__auto__);

return statearr_28632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.google_charts.draw_chart = (function klipse$lang$google_charts$draw_chart(data_js,container_id){
var chart_constructor = (function (){var obj28657 = (function (){var obj28655 = google;
var k28656 = "visualization";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28655,k28656)){
return (obj28655[k28656]);
} else {
return null;
}
})();
var k28658 = "ChartWrapper";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28657,k28658)){
return (obj28657[k28658]);
} else {
return null;
}
})();
var chart_wrapper = (new chart_constructor(data_js));
var obj__20025__auto__ = chart_wrapper;
var f__20026__auto__ = (function (){var obj28659 = obj__20025__auto__;
var k28660 = "draw";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28659,k28660)){
return (obj28659[k28660]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__);
});
klipse.lang.google_charts.parse_js_object = (function klipse$lang$google_charts$parse_js_object(s){
try{return eval(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join(''));
}catch (e28661){var e = e28661;
throw "Invalid JSON";
}});
klipse.lang.google_charts.render_STAR_ = (function klipse$lang$google_charts$render_STAR_(src,p__28662){
var map__28663 = p__28662;
var map__28663__$1 = cljs.core.__destructure_map.call(null,map__28663);
var opts = map__28663__$1;
var container_id = cljs.core.get.call(null,map__28663__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var container = document.getElementById(container_id);
var _ = goog.dom.setTextContent(container,"");
var data_options_js = klipse.lang.google_charts.parse_js_object.call(null,src);
(data_options_js["containerId"] = container_id);

return klipse.lang.google_charts.draw_chart.call(null,data_options_js,container_id);
}catch (e28664){var e = e28664;
var container_28665 = document.getElementById(container_id);
goog.dom.setTextContent(container_28665,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));

var c = cljs.core.async.chan.call(null);
cljs.core.async.close_BANG_.call(null,c);

return c;
}});
klipse.lang.google_charts.render = (function klipse$lang$google_charts$render(src,p__28666){
var map__28667 = p__28666;
var map__28667__$1 = cljs.core.__destructure_map.call(null,map__28667);
var opts = map__28667__$1;
var container_id = cljs.core.get.call(null,map__28667__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28673){
var state_val_28674 = (state_28673[(1)]);
if((state_val_28674 === (1))){
var inst_28668 = klipse.lang.google_charts.ensure_google_charts_loaded_BANG_.call(null);
var state_28673__$1 = state_28673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28673__$1,(2),inst_28668);
} else {
if((state_val_28674 === (2))){
var inst_28670 = (state_28673[(2)]);
var inst_28671 = klipse.lang.google_charts.render_STAR_.call(null,src,opts);
var state_28673__$1 = (function (){var statearr_28675 = state_28673;
(statearr_28675[(7)] = inst_28670);

return statearr_28675;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28673__$1,inst_28671);
} else {
return null;
}
}
});
return (function() {
var klipse$lang$google_charts$render_$_state_machine__15523__auto__ = null;
var klipse$lang$google_charts$render_$_state_machine__15523__auto____0 = (function (){
var statearr_28676 = [null,null,null,null,null,null,null,null];
(statearr_28676[(0)] = klipse$lang$google_charts$render_$_state_machine__15523__auto__);

(statearr_28676[(1)] = (1));

return statearr_28676;
});
var klipse$lang$google_charts$render_$_state_machine__15523__auto____1 = (function (state_28673){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28677){if((e28677 instanceof Object)){
var ex__15526__auto__ = e28677;
var statearr_28678_28680 = state_28673;
(statearr_28678_28680[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28681 = state_28673;
state_28673 = G__28681;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$google_charts$render_$_state_machine__15523__auto__ = function(state_28673){
switch(arguments.length){
case 0:
return klipse$lang$google_charts$render_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$google_charts$render_$_state_machine__15523__auto____1.call(this,state_28673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$google_charts$render_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$google_charts$render_$_state_machine__15523__auto____0;
klipse$lang$google_charts$render_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$google_charts$render_$_state_machine__15523__auto____1;
return klipse$lang$google_charts$render_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28679 = f__15620__auto__.call(null);
(statearr_28679[(6)] = c__15619__auto__);

return statearr_28679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.google_charts.opts = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"application/json",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.google_charts.render,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(1000),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"google-charts","selector_google_charts",klipse.lang.google_charts.opts);

//# sourceMappingURL=google_charts.js.map

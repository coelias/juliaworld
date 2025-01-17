// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.function_plot');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('clojure.string');
goog.require('klipse.lang.javascript');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.function_plot.draw_chart = (function klipse$lang$function_plot$draw_chart(data_js,container_id){
var chart_constructor = (function (){var obj21538 = (function (){var obj21536 = google;
var k21537 = "visualization";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21536,k21537)){
return (obj21536[k21537]);
} else {
return null;
}
})();
var k21539 = "ChartWrapper";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21538,k21539)){
return (obj21538[k21539]);
} else {
return null;
}
})();
var chart_wrapper = (new chart_constructor(data_js));
var obj__20025__auto__ = chart_wrapper;
var f__20026__auto__ = (function (){var obj21540 = obj__20025__auto__;
var k21541 = "draw";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21540,k21541)){
return (obj21540[k21541]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__);
});
klipse.lang.function_plot.parse_js_object = (function klipse$lang$function_plot$parse_js_object(s){
try{return eval(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join(''));
}catch (e21542){var e = e21542;
throw "Invalid JSON";
}});
klipse.lang.function_plot.render_STAR_ = (function klipse$lang$function_plot$render_STAR_(src,p__21543){
var map__21544 = p__21543;
var map__21544__$1 = cljs.core.__destructure_map.call(null,map__21544);
var opts = map__21544__$1;
var container = cljs.core.get.call(null,map__21544__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var container_id = cljs.core.get.call(null,map__21544__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var data = klipse.lang.function_plot.parse_js_object.call(null,src);
(data["target"] = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id)].join(''));

var obj__20025__auto__ = window;
var f__20026__auto__ = (function (){var obj21546 = obj__20025__auto__;
var k21547 = "functionPlot";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21546,k21547)){
return (obj21546[k21547]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,data);
}catch (e21545){var e = e21545;
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.function_plot.render = (function klipse$lang$function_plot$render(src,p__21548){
var map__21549 = p__21548;
var map__21549__$1 = cljs.core.__destructure_map.call(null,map__21549);
var opts = map__21549__$1;
var container = cljs.core.get.call(null,map__21549__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_21553){
var state_val_21554 = (state_21553[(1)]);
if((state_val_21554 === (1))){
var inst_21550 = goog.dom.setTextContent(container,"");
var inst_21551 = klipse.lang.function_plot.render_STAR_.call(null,src,opts);
var state_21553__$1 = (function (){var statearr_21555 = state_21553;
(statearr_21555[(7)] = inst_21550);

return statearr_21555;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21553__$1,inst_21551);
} else {
return null;
}
});
return (function() {
var klipse$lang$function_plot$render_$_state_machine__15523__auto__ = null;
var klipse$lang$function_plot$render_$_state_machine__15523__auto____0 = (function (){
var statearr_21556 = [null,null,null,null,null,null,null,null];
(statearr_21556[(0)] = klipse$lang$function_plot$render_$_state_machine__15523__auto__);

(statearr_21556[(1)] = (1));

return statearr_21556;
});
var klipse$lang$function_plot$render_$_state_machine__15523__auto____1 = (function (state_21553){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_21553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e21557){if((e21557 instanceof Object)){
var ex__15526__auto__ = e21557;
var statearr_21558_21560 = state_21553;
(statearr_21558_21560[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21561 = state_21553;
state_21553 = G__21561;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$function_plot$render_$_state_machine__15523__auto__ = function(state_21553){
switch(arguments.length){
case 0:
return klipse$lang$function_plot$render_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$function_plot$render_$_state_machine__15523__auto____1.call(this,state_21553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$function_plot$render_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$function_plot$render_$_state_machine__15523__auto____0;
klipse$lang$function_plot$render_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$function_plot$render_$_state_machine__15523__auto____1;
return klipse$lang$function_plot$render_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_21559 = f__15620__auto__.call(null);
(statearr_21559[(6)] = c__15619__auto__);

return statearr_21559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.function_plot.opts = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"application/json",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.function_plot.render,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(400),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"function-plot-with-d3.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"function-plot","selector_plot",klipse.lang.function_plot.opts);

//# sourceMappingURL=function_plot.js.map

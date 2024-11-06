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
var chart_constructor = (function (){var obj23235 = (function (){var obj23233 = google;
var k23234 = "visualization";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23233,k23234)){
return (obj23233[k23234]);
} else {
return null;
}
})();
var k23236 = "ChartWrapper";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23235,k23236)){
return (obj23235[k23236]);
} else {
return null;
}
})();
var chart_wrapper = (new chart_constructor(data_js));
var obj__17203__auto__ = chart_wrapper;
var f__17204__auto__ = (function (){var obj23237 = obj__17203__auto__;
var k23238 = "draw";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23237,k23238)){
return (obj23237[k23238]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__);
});
klipse.lang.function_plot.parse_js_object = (function klipse$lang$function_plot$parse_js_object(s){
try{return eval(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join(''));
}catch (e23239){var e = e23239;
throw "Invalid JSON";
}});
klipse.lang.function_plot.render_STAR_ = (function klipse$lang$function_plot$render_STAR_(src,p__23240){
var map__23241 = p__23240;
var map__23241__$1 = cljs.core.__destructure_map.call(null,map__23241);
var opts = map__23241__$1;
var container = cljs.core.get.call(null,map__23241__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var container_id = cljs.core.get.call(null,map__23241__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var data = klipse.lang.function_plot.parse_js_object.call(null,src);
(data["target"] = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(container_id)].join(''));

var obj__17203__auto__ = window;
var f__17204__auto__ = (function (){var obj23243 = obj__17203__auto__;
var k23244 = "functionPlot";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23243,k23244)){
return (obj23243[k23244]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,data);
}catch (e23242){var e = e23242;
return goog.dom.setTextContent(container,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}});
klipse.lang.function_plot.render = (function klipse$lang$function_plot$render(src,p__23245){
var map__23246 = p__23245;
var map__23246__$1 = cljs.core.__destructure_map.call(null,map__23246);
var opts = map__23246__$1;
var container = cljs.core.get.call(null,map__23246__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_23250){
var state_val_23251 = (state_23250[(1)]);
if((state_val_23251 === (1))){
var inst_23247 = goog.dom.setTextContent(container,"");
var inst_23248 = klipse.lang.function_plot.render_STAR_.call(null,src,opts);
var state_23250__$1 = (function (){var statearr_23252 = state_23250;
(statearr_23252[(7)] = inst_23247);

return statearr_23252;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23250__$1,inst_23248);
} else {
return null;
}
});
return (function() {
var klipse$lang$function_plot$render_$_state_machine__13608__auto__ = null;
var klipse$lang$function_plot$render_$_state_machine__13608__auto____0 = (function (){
var statearr_23253 = [null,null,null,null,null,null,null,null];
(statearr_23253[(0)] = klipse$lang$function_plot$render_$_state_machine__13608__auto__);

(statearr_23253[(1)] = (1));

return statearr_23253;
});
var klipse$lang$function_plot$render_$_state_machine__13608__auto____1 = (function (state_23250){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_23250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e23254){if((e23254 instanceof Object)){
var ex__13611__auto__ = e23254;
var statearr_23255_23257 = state_23250;
(statearr_23255_23257[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23258 = state_23250;
state_23250 = G__23258;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$function_plot$render_$_state_machine__13608__auto__ = function(state_23250){
switch(arguments.length){
case 0:
return klipse$lang$function_plot$render_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$function_plot$render_$_state_machine__13608__auto____1.call(this,state_23250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$function_plot$render_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$function_plot$render_$_state_machine__13608__auto____0;
klipse$lang$function_plot$render_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$function_plot$render_$_state_machine__13608__auto____1;
return klipse$lang$function_plot$render_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_23256 = f__13705__auto__.call(null);
(statearr_23256[(6)] = c__13704__auto__);

return statearr_23256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.function_plot.opts = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"application/json",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.function_plot.render,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(400),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript"),klipse.common.registry.scripts_src.call(null,"function-plot-with-d3.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"function-plot","selector_plot",klipse.lang.function_plot.opts);

//# sourceMappingURL=function_plot.js.map

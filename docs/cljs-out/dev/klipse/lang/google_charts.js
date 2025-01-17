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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28191){
var state_val_28192 = (state_28191[(1)]);
if((state_val_28192 === (7))){
var state_28191__$1 = state_28191;
var statearr_28193_28223 = state_28191__$1;
(statearr_28193_28223[(2)] = null);

(statearr_28193_28223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (1))){
var state_28191__$1 = state_28191;
if(klipse.lang.google_charts.google_charts_loaded){
var statearr_28194_28224 = state_28191__$1;
(statearr_28194_28224[(1)] = (2));

} else {
var statearr_28195_28225 = state_28191__$1;
(statearr_28195_28225[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (4))){
var inst_28189 = (state_28191[(2)]);
var state_28191__$1 = state_28191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28191__$1,inst_28189);
} else {
if((state_val_28192 === (15))){
var inst_28174 = (state_28191[(7)]);
var inst_28179 = (inst_28174["setOnLoadCallback"]);
var state_28191__$1 = state_28191;
var statearr_28196_28226 = state_28191__$1;
(statearr_28196_28226[(2)] = inst_28179);

(statearr_28196_28226[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (13))){
var state_28191__$1 = state_28191;
var statearr_28197_28227 = state_28191__$1;
(statearr_28197_28227[(2)] = null);

(statearr_28197_28227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (6))){
var inst_28146 = (google["charts"]);
var state_28191__$1 = state_28191;
var statearr_28198_28228 = state_28191__$1;
(statearr_28198_28228[(2)] = inst_28146);

(statearr_28198_28228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (17))){
var inst_28166 = (state_28191[(8)]);
var inst_28174 = (state_28191[(7)]);
var inst_28182 = (state_28191[(2)]);
var inst_28183 = inst_28182.call(inst_28174);
var inst_28184 = (function (){var c = inst_28166;
return (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.Keyword(null,"ok","ok",967785236));
});
})();
var state_28191__$1 = (function (){var statearr_28199 = state_28191;
(statearr_28199[(9)] = inst_28183);

(statearr_28199[(10)] = inst_28184);

return statearr_28199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28191__$1,(18),inst_28166);
} else {
if((state_val_28192 === (3))){
var inst_28139 = klipse.utils.add_script_tag_BANG_.call(null,"https://www.gstatic.com/charts/loader.js");
var state_28191__$1 = state_28191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28191__$1,(5),inst_28139);
} else {
if((state_val_28192 === (12))){
var inst_28171 = (google["charts"]);
var state_28191__$1 = state_28191;
var statearr_28200_28229 = state_28191__$1;
(statearr_28200_28229[(2)] = inst_28171);

(statearr_28200_28229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (2))){
var state_28191__$1 = state_28191;
var statearr_28201_28230 = state_28191__$1;
(statearr_28201_28230[(2)] = null);

(statearr_28201_28230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (11))){
var inst_28149 = (state_28191[(11)]);
var inst_28157 = (state_28191[(2)]);
var inst_28158 = inst_28157.call(inst_28149);
var inst_28159 = [new cljs.core.Keyword(null,"packages","packages",1549741112)];
var inst_28160 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28161 = ["corechart","table"];
var inst_28162 = (new cljs.core.PersistentVector(null,2,(5),inst_28160,inst_28161,null));
var inst_28163 = [inst_28162];
var inst_28164 = cljs.core.PersistentHashMap.fromArrays(inst_28159,inst_28163);
var inst_28165 = cljs.core.clj__GT_js.call(null,inst_28164);
var inst_28166 = cljs.core.async.chan.call(null);
var inst_28169 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,google,"charts");
var state_28191__$1 = (function (){var statearr_28202 = state_28191;
(statearr_28202[(8)] = inst_28166);

(statearr_28202[(12)] = inst_28165);

(statearr_28202[(13)] = inst_28158);

return statearr_28202;
})();
if(inst_28169){
var statearr_28203_28231 = state_28191__$1;
(statearr_28203_28231[(1)] = (12));

} else {
var statearr_28204_28232 = state_28191__$1;
(statearr_28204_28232[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (9))){
var inst_28149 = (state_28191[(11)]);
var inst_28154 = (inst_28149["load"]);
var state_28191__$1 = state_28191;
var statearr_28205_28233 = state_28191__$1;
(statearr_28205_28233[(2)] = inst_28154);

(statearr_28205_28233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (5))){
var inst_28141 = (state_28191[(2)]);
var inst_28144 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,google,"charts");
var state_28191__$1 = (function (){var statearr_28206 = state_28191;
(statearr_28206[(14)] = inst_28141);

return statearr_28206;
})();
if(inst_28144){
var statearr_28207_28234 = state_28191__$1;
(statearr_28207_28234[(1)] = (6));

} else {
var statearr_28208_28235 = state_28191__$1;
(statearr_28208_28235[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (14))){
var inst_28174 = (state_28191[(7)]);
var inst_28174__$1 = (state_28191[(2)]);
var inst_28177 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_28174__$1,"setOnLoadCallback");
var state_28191__$1 = (function (){var statearr_28209 = state_28191;
(statearr_28209[(7)] = inst_28174__$1);

return statearr_28209;
})();
if(inst_28177){
var statearr_28210_28236 = state_28191__$1;
(statearr_28210_28236[(1)] = (15));

} else {
var statearr_28211_28237 = state_28191__$1;
(statearr_28211_28237[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (16))){
var state_28191__$1 = state_28191;
var statearr_28212_28238 = state_28191__$1;
(statearr_28212_28238[(2)] = null);

(statearr_28212_28238[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (10))){
var state_28191__$1 = state_28191;
var statearr_28213_28239 = state_28191__$1;
(statearr_28213_28239[(2)] = null);

(statearr_28213_28239[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (18))){
var inst_28186 = (state_28191[(2)]);
var inst_28187 = (klipse.lang.google_charts.google_charts_loaded = true);
var state_28191__$1 = (function (){var statearr_28214 = state_28191;
(statearr_28214[(15)] = inst_28186);

return statearr_28214;
})();
var statearr_28215_28240 = state_28191__$1;
(statearr_28215_28240[(2)] = inst_28187);

(statearr_28215_28240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28192 === (8))){
var inst_28149 = (state_28191[(11)]);
var inst_28149__$1 = (state_28191[(2)]);
var inst_28152 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_28149__$1,"load");
var state_28191__$1 = (function (){var statearr_28216 = state_28191;
(statearr_28216[(11)] = inst_28149__$1);

return statearr_28216;
})();
if(inst_28152){
var statearr_28217_28241 = state_28191__$1;
(statearr_28217_28241[(1)] = (9));

} else {
var statearr_28218_28242 = state_28191__$1;
(statearr_28218_28242[(1)] = (10));

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
var statearr_28219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28219[(0)] = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto__);

(statearr_28219[(1)] = (1));

return statearr_28219;
});
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto____1 = (function (state_28191){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28220){if((e28220 instanceof Object)){
var ex__15526__auto__ = e28220;
var statearr_28221_28243 = state_28191;
(statearr_28221_28243[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28244 = state_28191;
state_28191 = G__28244;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto__ = function(state_28191){
switch(arguments.length){
case 0:
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto____1.call(this,state_28191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto____0;
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto____1;
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28222 = f__15620__auto__.call(null);
(statearr_28222[(6)] = c__15619__auto__);

return statearr_28222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.google_charts.draw_chart = (function klipse$lang$google_charts$draw_chart(data_js,container_id){
var chart_constructor = (function (){var obj28247 = (function (){var obj28245 = google;
var k28246 = "visualization";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28245,k28246)){
return (obj28245[k28246]);
} else {
return null;
}
})();
var k28248 = "ChartWrapper";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28247,k28248)){
return (obj28247[k28248]);
} else {
return null;
}
})();
var chart_wrapper = (new chart_constructor(data_js));
var obj__20025__auto__ = chart_wrapper;
var f__20026__auto__ = (function (){var obj28249 = obj__20025__auto__;
var k28250 = "draw";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28249,k28250)){
return (obj28249[k28250]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__);
});
klipse.lang.google_charts.parse_js_object = (function klipse$lang$google_charts$parse_js_object(s){
try{return eval(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join(''));
}catch (e28251){var e = e28251;
throw "Invalid JSON";
}});
klipse.lang.google_charts.render_STAR_ = (function klipse$lang$google_charts$render_STAR_(src,p__28252){
var map__28253 = p__28252;
var map__28253__$1 = cljs.core.__destructure_map.call(null,map__28253);
var opts = map__28253__$1;
var container_id = cljs.core.get.call(null,map__28253__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var container = document.getElementById(container_id);
var _ = goog.dom.setTextContent(container,"");
var data_options_js = klipse.lang.google_charts.parse_js_object.call(null,src);
(data_options_js["containerId"] = container_id);

return klipse.lang.google_charts.draw_chart.call(null,data_options_js,container_id);
}catch (e28254){var e = e28254;
var container_28255 = document.getElementById(container_id);
goog.dom.setTextContent(container_28255,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));

var c = cljs.core.async.chan.call(null);
cljs.core.async.close_BANG_.call(null,c);

return c;
}});
klipse.lang.google_charts.render = (function klipse$lang$google_charts$render(src,p__28256){
var map__28257 = p__28256;
var map__28257__$1 = cljs.core.__destructure_map.call(null,map__28257);
var opts = map__28257__$1;
var container_id = cljs.core.get.call(null,map__28257__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28263){
var state_val_28264 = (state_28263[(1)]);
if((state_val_28264 === (1))){
var inst_28258 = klipse.lang.google_charts.ensure_google_charts_loaded_BANG_.call(null);
var state_28263__$1 = state_28263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28263__$1,(2),inst_28258);
} else {
if((state_val_28264 === (2))){
var inst_28260 = (state_28263[(2)]);
var inst_28261 = klipse.lang.google_charts.render_STAR_.call(null,src,opts);
var state_28263__$1 = (function (){var statearr_28265 = state_28263;
(statearr_28265[(7)] = inst_28260);

return statearr_28265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28263__$1,inst_28261);
} else {
return null;
}
}
});
return (function() {
var klipse$lang$google_charts$render_$_state_machine__15523__auto__ = null;
var klipse$lang$google_charts$render_$_state_machine__15523__auto____0 = (function (){
var statearr_28266 = [null,null,null,null,null,null,null,null];
(statearr_28266[(0)] = klipse$lang$google_charts$render_$_state_machine__15523__auto__);

(statearr_28266[(1)] = (1));

return statearr_28266;
});
var klipse$lang$google_charts$render_$_state_machine__15523__auto____1 = (function (state_28263){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28267){if((e28267 instanceof Object)){
var ex__15526__auto__ = e28267;
var statearr_28268_28270 = state_28263;
(statearr_28268_28270[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28271 = state_28263;
state_28263 = G__28271;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$google_charts$render_$_state_machine__15523__auto__ = function(state_28263){
switch(arguments.length){
case 0:
return klipse$lang$google_charts$render_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$google_charts$render_$_state_machine__15523__auto____1.call(this,state_28263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$google_charts$render_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$google_charts$render_$_state_machine__15523__auto____0;
klipse$lang$google_charts$render_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$google_charts$render_$_state_machine__15523__auto____1;
return klipse$lang$google_charts$render_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28269 = f__15620__auto__.call(null);
(statearr_28269[(6)] = c__15619__auto__);

return statearr_28269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.google_charts.opts = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"application/json",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.google_charts.render,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(1000),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"google-charts","selector_google_charts",klipse.lang.google_charts.opts);

//# sourceMappingURL=google_charts.js.map

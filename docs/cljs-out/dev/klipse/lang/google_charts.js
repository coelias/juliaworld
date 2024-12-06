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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28188){
var state_val_28189 = (state_28188[(1)]);
if((state_val_28189 === (7))){
var state_28188__$1 = state_28188;
var statearr_28190_28220 = state_28188__$1;
(statearr_28190_28220[(2)] = null);

(statearr_28190_28220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (1))){
var state_28188__$1 = state_28188;
if(klipse.lang.google_charts.google_charts_loaded){
var statearr_28191_28221 = state_28188__$1;
(statearr_28191_28221[(1)] = (2));

} else {
var statearr_28192_28222 = state_28188__$1;
(statearr_28192_28222[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (4))){
var inst_28186 = (state_28188[(2)]);
var state_28188__$1 = state_28188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28188__$1,inst_28186);
} else {
if((state_val_28189 === (15))){
var inst_28171 = (state_28188[(7)]);
var inst_28176 = (inst_28171["setOnLoadCallback"]);
var state_28188__$1 = state_28188;
var statearr_28193_28223 = state_28188__$1;
(statearr_28193_28223[(2)] = inst_28176);

(statearr_28193_28223[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (13))){
var state_28188__$1 = state_28188;
var statearr_28194_28224 = state_28188__$1;
(statearr_28194_28224[(2)] = null);

(statearr_28194_28224[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (6))){
var inst_28143 = (google["charts"]);
var state_28188__$1 = state_28188;
var statearr_28195_28225 = state_28188__$1;
(statearr_28195_28225[(2)] = inst_28143);

(statearr_28195_28225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (17))){
var inst_28163 = (state_28188[(8)]);
var inst_28171 = (state_28188[(7)]);
var inst_28179 = (state_28188[(2)]);
var inst_28180 = inst_28179.call(inst_28171);
var inst_28181 = (function (){var c = inst_28163;
return (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.Keyword(null,"ok","ok",967785236));
});
})();
var state_28188__$1 = (function (){var statearr_28196 = state_28188;
(statearr_28196[(9)] = inst_28181);

(statearr_28196[(10)] = inst_28180);

return statearr_28196;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28188__$1,(18),inst_28163);
} else {
if((state_val_28189 === (3))){
var inst_28136 = klipse.utils.add_script_tag_BANG_.call(null,"https://www.gstatic.com/charts/loader.js");
var state_28188__$1 = state_28188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28188__$1,(5),inst_28136);
} else {
if((state_val_28189 === (12))){
var inst_28168 = (google["charts"]);
var state_28188__$1 = state_28188;
var statearr_28197_28226 = state_28188__$1;
(statearr_28197_28226[(2)] = inst_28168);

(statearr_28197_28226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (2))){
var state_28188__$1 = state_28188;
var statearr_28198_28227 = state_28188__$1;
(statearr_28198_28227[(2)] = null);

(statearr_28198_28227[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (11))){
var inst_28146 = (state_28188[(11)]);
var inst_28154 = (state_28188[(2)]);
var inst_28155 = inst_28154.call(inst_28146);
var inst_28156 = [new cljs.core.Keyword(null,"packages","packages",1549741112)];
var inst_28157 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28158 = ["corechart","table"];
var inst_28159 = (new cljs.core.PersistentVector(null,2,(5),inst_28157,inst_28158,null));
var inst_28160 = [inst_28159];
var inst_28161 = cljs.core.PersistentHashMap.fromArrays(inst_28156,inst_28160);
var inst_28162 = cljs.core.clj__GT_js.call(null,inst_28161);
var inst_28163 = cljs.core.async.chan.call(null);
var inst_28166 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,google,"charts");
var state_28188__$1 = (function (){var statearr_28199 = state_28188;
(statearr_28199[(8)] = inst_28163);

(statearr_28199[(12)] = inst_28155);

(statearr_28199[(13)] = inst_28162);

return statearr_28199;
})();
if(inst_28166){
var statearr_28200_28228 = state_28188__$1;
(statearr_28200_28228[(1)] = (12));

} else {
var statearr_28201_28229 = state_28188__$1;
(statearr_28201_28229[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (9))){
var inst_28146 = (state_28188[(11)]);
var inst_28151 = (inst_28146["load"]);
var state_28188__$1 = state_28188;
var statearr_28202_28230 = state_28188__$1;
(statearr_28202_28230[(2)] = inst_28151);

(statearr_28202_28230[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (5))){
var inst_28138 = (state_28188[(2)]);
var inst_28141 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,google,"charts");
var state_28188__$1 = (function (){var statearr_28203 = state_28188;
(statearr_28203[(14)] = inst_28138);

return statearr_28203;
})();
if(inst_28141){
var statearr_28204_28231 = state_28188__$1;
(statearr_28204_28231[(1)] = (6));

} else {
var statearr_28205_28232 = state_28188__$1;
(statearr_28205_28232[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (14))){
var inst_28171 = (state_28188[(7)]);
var inst_28171__$1 = (state_28188[(2)]);
var inst_28174 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_28171__$1,"setOnLoadCallback");
var state_28188__$1 = (function (){var statearr_28206 = state_28188;
(statearr_28206[(7)] = inst_28171__$1);

return statearr_28206;
})();
if(inst_28174){
var statearr_28207_28233 = state_28188__$1;
(statearr_28207_28233[(1)] = (15));

} else {
var statearr_28208_28234 = state_28188__$1;
(statearr_28208_28234[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (16))){
var state_28188__$1 = state_28188;
var statearr_28209_28235 = state_28188__$1;
(statearr_28209_28235[(2)] = null);

(statearr_28209_28235[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (10))){
var state_28188__$1 = state_28188;
var statearr_28210_28236 = state_28188__$1;
(statearr_28210_28236[(2)] = null);

(statearr_28210_28236[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (18))){
var inst_28183 = (state_28188[(2)]);
var inst_28184 = (klipse.lang.google_charts.google_charts_loaded = true);
var state_28188__$1 = (function (){var statearr_28211 = state_28188;
(statearr_28211[(15)] = inst_28183);

return statearr_28211;
})();
var statearr_28212_28237 = state_28188__$1;
(statearr_28212_28237[(2)] = inst_28184);

(statearr_28212_28237[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28189 === (8))){
var inst_28146 = (state_28188[(11)]);
var inst_28146__$1 = (state_28188[(2)]);
var inst_28149 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_28146__$1,"load");
var state_28188__$1 = (function (){var statearr_28213 = state_28188;
(statearr_28213[(11)] = inst_28146__$1);

return statearr_28213;
})();
if(inst_28149){
var statearr_28214_28238 = state_28188__$1;
(statearr_28214_28238[(1)] = (9));

} else {
var statearr_28215_28239 = state_28188__$1;
(statearr_28215_28239[(1)] = (10));

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
var statearr_28216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28216[(0)] = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto__);

(statearr_28216[(1)] = (1));

return statearr_28216;
});
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto____1 = (function (state_28188){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28217){if((e28217 instanceof Object)){
var ex__15526__auto__ = e28217;
var statearr_28218_28240 = state_28188;
(statearr_28218_28240[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28241 = state_28188;
state_28188 = G__28241;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto__ = function(state_28188){
switch(arguments.length){
case 0:
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto____1.call(this,state_28188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto____0;
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto____1;
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28219 = f__15620__auto__.call(null);
(statearr_28219[(6)] = c__15619__auto__);

return statearr_28219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.google_charts.draw_chart = (function klipse$lang$google_charts$draw_chart(data_js,container_id){
var chart_constructor = (function (){var obj28244 = (function (){var obj28242 = google;
var k28243 = "visualization";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28242,k28243)){
return (obj28242[k28243]);
} else {
return null;
}
})();
var k28245 = "ChartWrapper";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28244,k28245)){
return (obj28244[k28245]);
} else {
return null;
}
})();
var chart_wrapper = (new chart_constructor(data_js));
var obj__20025__auto__ = chart_wrapper;
var f__20026__auto__ = (function (){var obj28246 = obj__20025__auto__;
var k28247 = "draw";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28246,k28247)){
return (obj28246[k28247]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__);
});
klipse.lang.google_charts.parse_js_object = (function klipse$lang$google_charts$parse_js_object(s){
try{return eval(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join(''));
}catch (e28248){var e = e28248;
throw "Invalid JSON";
}});
klipse.lang.google_charts.render_STAR_ = (function klipse$lang$google_charts$render_STAR_(src,p__28249){
var map__28250 = p__28249;
var map__28250__$1 = cljs.core.__destructure_map.call(null,map__28250);
var opts = map__28250__$1;
var container_id = cljs.core.get.call(null,map__28250__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var container = document.getElementById(container_id);
var _ = goog.dom.setTextContent(container,"");
var data_options_js = klipse.lang.google_charts.parse_js_object.call(null,src);
(data_options_js["containerId"] = container_id);

return klipse.lang.google_charts.draw_chart.call(null,data_options_js,container_id);
}catch (e28251){var e = e28251;
var container_28252 = document.getElementById(container_id);
goog.dom.setTextContent(container_28252,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));

var c = cljs.core.async.chan.call(null);
cljs.core.async.close_BANG_.call(null,c);

return c;
}});
klipse.lang.google_charts.render = (function klipse$lang$google_charts$render(src,p__28253){
var map__28254 = p__28253;
var map__28254__$1 = cljs.core.__destructure_map.call(null,map__28254);
var opts = map__28254__$1;
var container_id = cljs.core.get.call(null,map__28254__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28260){
var state_val_28261 = (state_28260[(1)]);
if((state_val_28261 === (1))){
var inst_28255 = klipse.lang.google_charts.ensure_google_charts_loaded_BANG_.call(null);
var state_28260__$1 = state_28260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28260__$1,(2),inst_28255);
} else {
if((state_val_28261 === (2))){
var inst_28257 = (state_28260[(2)]);
var inst_28258 = klipse.lang.google_charts.render_STAR_.call(null,src,opts);
var state_28260__$1 = (function (){var statearr_28262 = state_28260;
(statearr_28262[(7)] = inst_28257);

return statearr_28262;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28260__$1,inst_28258);
} else {
return null;
}
}
});
return (function() {
var klipse$lang$google_charts$render_$_state_machine__15523__auto__ = null;
var klipse$lang$google_charts$render_$_state_machine__15523__auto____0 = (function (){
var statearr_28263 = [null,null,null,null,null,null,null,null];
(statearr_28263[(0)] = klipse$lang$google_charts$render_$_state_machine__15523__auto__);

(statearr_28263[(1)] = (1));

return statearr_28263;
});
var klipse$lang$google_charts$render_$_state_machine__15523__auto____1 = (function (state_28260){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28264){if((e28264 instanceof Object)){
var ex__15526__auto__ = e28264;
var statearr_28265_28267 = state_28260;
(statearr_28265_28267[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28268 = state_28260;
state_28260 = G__28268;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$google_charts$render_$_state_machine__15523__auto__ = function(state_28260){
switch(arguments.length){
case 0:
return klipse$lang$google_charts$render_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$google_charts$render_$_state_machine__15523__auto____1.call(this,state_28260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$google_charts$render_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$google_charts$render_$_state_machine__15523__auto____0;
klipse$lang$google_charts$render_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$google_charts$render_$_state_machine__15523__auto____1;
return klipse$lang$google_charts$render_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28266 = f__15620__auto__.call(null);
(statearr_28266[(6)] = c__15619__auto__);

return statearr_28266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.google_charts.opts = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"application/json",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.google_charts.render,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(1000),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"google-charts","selector_google_charts",klipse.lang.google_charts.opts);

//# sourceMappingURL=google_charts.js.map

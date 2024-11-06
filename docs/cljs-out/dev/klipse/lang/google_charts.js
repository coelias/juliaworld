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
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_23347){
var state_val_23348 = (state_23347[(1)]);
if((state_val_23348 === (7))){
var state_23347__$1 = state_23347;
var statearr_23349_23379 = state_23347__$1;
(statearr_23349_23379[(2)] = null);

(statearr_23349_23379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (1))){
var state_23347__$1 = state_23347;
if(klipse.lang.google_charts.google_charts_loaded){
var statearr_23350_23380 = state_23347__$1;
(statearr_23350_23380[(1)] = (2));

} else {
var statearr_23351_23381 = state_23347__$1;
(statearr_23351_23381[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (4))){
var inst_23345 = (state_23347[(2)]);
var state_23347__$1 = state_23347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23347__$1,inst_23345);
} else {
if((state_val_23348 === (15))){
var inst_23330 = (state_23347[(7)]);
var inst_23335 = (inst_23330["setOnLoadCallback"]);
var state_23347__$1 = state_23347;
var statearr_23352_23382 = state_23347__$1;
(statearr_23352_23382[(2)] = inst_23335);

(statearr_23352_23382[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (13))){
var state_23347__$1 = state_23347;
var statearr_23353_23383 = state_23347__$1;
(statearr_23353_23383[(2)] = null);

(statearr_23353_23383[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (6))){
var inst_23302 = (google["charts"]);
var state_23347__$1 = state_23347;
var statearr_23354_23384 = state_23347__$1;
(statearr_23354_23384[(2)] = inst_23302);

(statearr_23354_23384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (17))){
var inst_23322 = (state_23347[(8)]);
var inst_23330 = (state_23347[(7)]);
var inst_23338 = (state_23347[(2)]);
var inst_23339 = inst_23338.call(inst_23330);
var inst_23340 = (function (){var c = inst_23322;
return (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.Keyword(null,"ok","ok",967785236));
});
})();
var state_23347__$1 = (function (){var statearr_23355 = state_23347;
(statearr_23355[(9)] = inst_23339);

(statearr_23355[(10)] = inst_23340);

return statearr_23355;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23347__$1,(18),inst_23322);
} else {
if((state_val_23348 === (3))){
var inst_23295 = klipse.utils.add_script_tag_BANG_.call(null,"https://www.gstatic.com/charts/loader.js");
var state_23347__$1 = state_23347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23347__$1,(5),inst_23295);
} else {
if((state_val_23348 === (12))){
var inst_23327 = (google["charts"]);
var state_23347__$1 = state_23347;
var statearr_23356_23385 = state_23347__$1;
(statearr_23356_23385[(2)] = inst_23327);

(statearr_23356_23385[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (2))){
var state_23347__$1 = state_23347;
var statearr_23357_23386 = state_23347__$1;
(statearr_23357_23386[(2)] = null);

(statearr_23357_23386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (11))){
var inst_23305 = (state_23347[(11)]);
var inst_23313 = (state_23347[(2)]);
var inst_23314 = inst_23313.call(inst_23305);
var inst_23315 = [new cljs.core.Keyword(null,"packages","packages",1549741112)];
var inst_23316 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23317 = ["corechart","table"];
var inst_23318 = (new cljs.core.PersistentVector(null,2,(5),inst_23316,inst_23317,null));
var inst_23319 = [inst_23318];
var inst_23320 = cljs.core.PersistentHashMap.fromArrays(inst_23315,inst_23319);
var inst_23321 = cljs.core.clj__GT_js.call(null,inst_23320);
var inst_23322 = cljs.core.async.chan.call(null);
var inst_23325 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,google,"charts");
var state_23347__$1 = (function (){var statearr_23358 = state_23347;
(statearr_23358[(8)] = inst_23322);

(statearr_23358[(12)] = inst_23321);

(statearr_23358[(13)] = inst_23314);

return statearr_23358;
})();
if(inst_23325){
var statearr_23359_23387 = state_23347__$1;
(statearr_23359_23387[(1)] = (12));

} else {
var statearr_23360_23388 = state_23347__$1;
(statearr_23360_23388[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (9))){
var inst_23305 = (state_23347[(11)]);
var inst_23310 = (inst_23305["load"]);
var state_23347__$1 = state_23347;
var statearr_23361_23389 = state_23347__$1;
(statearr_23361_23389[(2)] = inst_23310);

(statearr_23361_23389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (5))){
var inst_23297 = (state_23347[(2)]);
var inst_23300 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,google,"charts");
var state_23347__$1 = (function (){var statearr_23362 = state_23347;
(statearr_23362[(14)] = inst_23297);

return statearr_23362;
})();
if(inst_23300){
var statearr_23363_23390 = state_23347__$1;
(statearr_23363_23390[(1)] = (6));

} else {
var statearr_23364_23391 = state_23347__$1;
(statearr_23364_23391[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (14))){
var inst_23330 = (state_23347[(7)]);
var inst_23330__$1 = (state_23347[(2)]);
var inst_23333 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_23330__$1,"setOnLoadCallback");
var state_23347__$1 = (function (){var statearr_23365 = state_23347;
(statearr_23365[(7)] = inst_23330__$1);

return statearr_23365;
})();
if(inst_23333){
var statearr_23366_23392 = state_23347__$1;
(statearr_23366_23392[(1)] = (15));

} else {
var statearr_23367_23393 = state_23347__$1;
(statearr_23367_23393[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (16))){
var state_23347__$1 = state_23347;
var statearr_23368_23394 = state_23347__$1;
(statearr_23368_23394[(2)] = null);

(statearr_23368_23394[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (10))){
var state_23347__$1 = state_23347;
var statearr_23369_23395 = state_23347__$1;
(statearr_23369_23395[(2)] = null);

(statearr_23369_23395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (18))){
var inst_23342 = (state_23347[(2)]);
var inst_23343 = (klipse.lang.google_charts.google_charts_loaded = true);
var state_23347__$1 = (function (){var statearr_23370 = state_23347;
(statearr_23370[(15)] = inst_23342);

return statearr_23370;
})();
var statearr_23371_23396 = state_23347__$1;
(statearr_23371_23396[(2)] = inst_23343);

(statearr_23371_23396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (8))){
var inst_23305 = (state_23347[(11)]);
var inst_23305__$1 = (state_23347[(2)]);
var inst_23308 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_23305__$1,"load");
var state_23347__$1 = (function (){var statearr_23372 = state_23347;
(statearr_23372[(11)] = inst_23305__$1);

return statearr_23372;
})();
if(inst_23308){
var statearr_23373_23397 = state_23347__$1;
(statearr_23373_23397[(1)] = (9));

} else {
var statearr_23374_23398 = state_23347__$1;
(statearr_23374_23398[(1)] = (10));

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
var statearr_23375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23375[(0)] = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto__);

(statearr_23375[(1)] = (1));

return statearr_23375;
});
var klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto____1 = (function (state_23347){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_23347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e23376){if((e23376 instanceof Object)){
var ex__13611__auto__ = e23376;
var statearr_23377_23399 = state_23347;
(statearr_23377_23399[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23400 = state_23347;
state_23347 = G__23400;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto__ = function(state_23347){
switch(arguments.length){
case 0:
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto____1.call(this,state_23347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto____0;
klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto____1;
return klipse$lang$google_charts$ensure_google_charts_loaded_BANG__$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_23378 = f__13705__auto__.call(null);
(statearr_23378[(6)] = c__13704__auto__);

return statearr_23378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.google_charts.draw_chart = (function klipse$lang$google_charts$draw_chart(data_js,container_id){
var chart_constructor = (function (){var obj23403 = (function (){var obj23401 = google;
var k23402 = "visualization";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23401,k23402)){
return (obj23401[k23402]);
} else {
return null;
}
})();
var k23404 = "ChartWrapper";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23403,k23404)){
return (obj23403[k23404]);
} else {
return null;
}
})();
var chart_wrapper = (new chart_constructor(data_js));
var obj__17203__auto__ = chart_wrapper;
var f__17204__auto__ = (function (){var obj23405 = obj__17203__auto__;
var k23406 = "draw";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23405,k23406)){
return (obj23405[k23406]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__);
});
klipse.lang.google_charts.parse_js_object = (function klipse$lang$google_charts$parse_js_object(s){
try{return eval(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join(''));
}catch (e23407){var e = e23407;
throw "Invalid JSON";
}});
klipse.lang.google_charts.render_STAR_ = (function klipse$lang$google_charts$render_STAR_(src,p__23408){
var map__23409 = p__23408;
var map__23409__$1 = cljs.core.__destructure_map.call(null,map__23409);
var opts = map__23409__$1;
var container_id = cljs.core.get.call(null,map__23409__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
try{var container = document.getElementById(container_id);
var _ = goog.dom.setTextContent(container,"");
var data_options_js = klipse.lang.google_charts.parse_js_object.call(null,src);
(data_options_js["containerId"] = container_id);

return klipse.lang.google_charts.draw_chart.call(null,data_options_js,container_id);
}catch (e23410){var e = e23410;
var container_23411 = document.getElementById(container_id);
goog.dom.setTextContent(container_23411,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));

var c = cljs.core.async.chan.call(null);
cljs.core.async.close_BANG_.call(null,c);

return c;
}});
klipse.lang.google_charts.render = (function klipse$lang$google_charts$render(src,p__23412){
var map__23413 = p__23412;
var map__23413__$1 = cljs.core.__destructure_map.call(null,map__23413);
var opts = map__23413__$1;
var container_id = cljs.core.get.call(null,map__23413__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_23419){
var state_val_23420 = (state_23419[(1)]);
if((state_val_23420 === (1))){
var inst_23414 = klipse.lang.google_charts.ensure_google_charts_loaded_BANG_.call(null);
var state_23419__$1 = state_23419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23419__$1,(2),inst_23414);
} else {
if((state_val_23420 === (2))){
var inst_23416 = (state_23419[(2)]);
var inst_23417 = klipse.lang.google_charts.render_STAR_.call(null,src,opts);
var state_23419__$1 = (function (){var statearr_23421 = state_23419;
(statearr_23421[(7)] = inst_23416);

return statearr_23421;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23419__$1,inst_23417);
} else {
return null;
}
}
});
return (function() {
var klipse$lang$google_charts$render_$_state_machine__13608__auto__ = null;
var klipse$lang$google_charts$render_$_state_machine__13608__auto____0 = (function (){
var statearr_23422 = [null,null,null,null,null,null,null,null];
(statearr_23422[(0)] = klipse$lang$google_charts$render_$_state_machine__13608__auto__);

(statearr_23422[(1)] = (1));

return statearr_23422;
});
var klipse$lang$google_charts$render_$_state_machine__13608__auto____1 = (function (state_23419){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_23419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e23423){if((e23423 instanceof Object)){
var ex__13611__auto__ = e23423;
var statearr_23424_23426 = state_23419;
(statearr_23424_23426[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23427 = state_23419;
state_23419 = G__23427;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$google_charts$render_$_state_machine__13608__auto__ = function(state_23419){
switch(arguments.length){
case 0:
return klipse$lang$google_charts$render_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$google_charts$render_$_state_machine__13608__auto____1.call(this,state_23419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$google_charts$render_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$google_charts$render_$_state_machine__13608__auto____0;
klipse$lang$google_charts$render_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$google_charts$render_$_state_machine__13608__auto____1;
return klipse$lang$google_charts$render_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_23425 = f__13705__auto__.call(null);
(statearr_23425[(6)] = c__13704__auto__);

return statearr_23425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.google_charts.opts = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"application/json",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.google_charts.render,new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"min-eval-idle-msec","min-eval-idle-msec",-1547033812),(1000),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"javascript")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"google-charts","selector_google_charts",klipse.lang.google_charts.opts);

//# sourceMappingURL=google_charts.js.map

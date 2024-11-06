// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.oblivion');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.oblivion.render_STAR_ = (function klipse$lang$oblivion$render_STAR_(src,p__31264){
var map__31265 = p__31264;
var map__31265__$1 = cljs.core.__destructure_map.call(null,map__31265);
var opts = map__31265__$1;
var container = cljs.core.get.call(null,map__31265__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
try{var _ = goog.dom.setTextContent(container,"");
var vec__31267 = (function (){var obj__17203__auto__ = Oblivion;
var f__17204__auto__ = (function (){var obj31270 = obj__17203__auto__;
var k31271 = "Compile";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj31270,k31271)){
return (obj31270[k31271]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,src,(2));
})();
var stdout = cljs.core.nth.call(null,vec__31267,(0),null);
var svgout = cljs.core.nth.call(null,vec__31267,(1),null);
if(typeof stdout === 'string'){
var obj31272_31276 = container;
var obj31273_31277 = (((!((obj31272_31276 == null))))?obj31272_31276:({}));
(obj31273_31277["innerHTML"] = svgout);


return stdout;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(stdout);
}
}catch (e31266){var e = e31266;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(e);
}});
klipse.lang.oblivion.render = (function klipse$lang$oblivion$render(src,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_31280){
var state_val_31281 = (state_31280[(1)]);
if((state_val_31281 === (1))){
var inst_31278 = klipse.lang.oblivion.render_STAR_.call(null,src,opts);
var state_31280__$1 = state_31280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31280__$1,inst_31278);
} else {
return null;
}
});
return (function() {
var klipse$lang$oblivion$render_$_state_machine__13608__auto__ = null;
var klipse$lang$oblivion$render_$_state_machine__13608__auto____0 = (function (){
var statearr_31282 = [null,null,null,null,null,null,null];
(statearr_31282[(0)] = klipse$lang$oblivion$render_$_state_machine__13608__auto__);

(statearr_31282[(1)] = (1));

return statearr_31282;
});
var klipse$lang$oblivion$render_$_state_machine__13608__auto____1 = (function (state_31280){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_31280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e31283){if((e31283 instanceof Object)){
var ex__13611__auto__ = e31283;
var statearr_31284_31286 = state_31280;
(statearr_31284_31286[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31287 = state_31280;
state_31280 = G__31287;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$oblivion$render_$_state_machine__13608__auto__ = function(state_31280){
switch(arguments.length){
case 0:
return klipse$lang$oblivion$render_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$oblivion$render_$_state_machine__13608__auto____1.call(this,state_31280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$oblivion$render_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$oblivion$render_$_state_machine__13608__auto____0;
klipse$lang$oblivion$render_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$oblivion$render_$_state_machine__13608__auto____1;
return klipse$lang$oblivion$render_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_31285 = f__13705__auto__.call(null);
(statearr_31285[(6)] = c__13704__auto__);

return statearr_31285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.oblivion.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"ruby",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.oblivion.render,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"ruby"),klipse.common.registry.scripts_src.call(null,"Oblivion.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"oblivion","selector_oblivion",klipse.lang.oblivion.opts);

//# sourceMappingURL=oblivion.js.map

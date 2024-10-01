// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.oblivion');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.oblivion.render_STAR_ = (function klipse$lang$oblivion$render_STAR_(src,p__28578){
var map__28579 = p__28578;
var map__28579__$1 = cljs.core.__destructure_map.call(null,map__28579);
var opts = map__28579__$1;
var container = cljs.core.get.call(null,map__28579__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
try{var _ = goog.dom.setTextContent(container,"");
var vec__28581 = (function (){var obj__17203__auto__ = Oblivion;
var f__17204__auto__ = (function (){var obj28584 = obj__17203__auto__;
var k28585 = "Compile";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28584,k28585)){
return (obj28584[k28585]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,src,(2));
})();
var stdout = cljs.core.nth.call(null,vec__28581,(0),null);
var svgout = cljs.core.nth.call(null,vec__28581,(1),null);
if(typeof stdout === 'string'){
var obj28586_28590 = container;
var obj28587_28591 = (((!((obj28586_28590 == null))))?obj28586_28590:({}));
(obj28587_28591["innerHTML"] = svgout);


return stdout;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(stdout);
}
}catch (e28580){var e = e28580;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(e);
}});
klipse.lang.oblivion.render = (function klipse$lang$oblivion$render(src,opts){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28594){
var state_val_28595 = (state_28594[(1)]);
if((state_val_28595 === (1))){
var inst_28592 = klipse.lang.oblivion.render_STAR_.call(null,src,opts);
var state_28594__$1 = state_28594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28594__$1,inst_28592);
} else {
return null;
}
});
return (function() {
var klipse$lang$oblivion$render_$_state_machine__13608__auto__ = null;
var klipse$lang$oblivion$render_$_state_machine__13608__auto____0 = (function (){
var statearr_28596 = [null,null,null,null,null,null,null];
(statearr_28596[(0)] = klipse$lang$oblivion$render_$_state_machine__13608__auto__);

(statearr_28596[(1)] = (1));

return statearr_28596;
});
var klipse$lang$oblivion$render_$_state_machine__13608__auto____1 = (function (state_28594){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28597){if((e28597 instanceof Object)){
var ex__13611__auto__ = e28597;
var statearr_28598_28600 = state_28594;
(statearr_28598_28600[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28601 = state_28594;
state_28594 = G__28601;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$oblivion$render_$_state_machine__13608__auto__ = function(state_28594){
switch(arguments.length){
case 0:
return klipse$lang$oblivion$render_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$oblivion$render_$_state_machine__13608__auto____1.call(this,state_28594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$oblivion$render_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$oblivion$render_$_state_machine__13608__auto____0;
klipse$lang$oblivion$render_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$oblivion$render_$_state_machine__13608__auto____1;
return klipse$lang$oblivion$render_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28599 = f__13705__auto__.call(null);
(statearr_28599[(6)] = c__13704__auto__);

return statearr_28599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.oblivion.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"ruby",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.oblivion.render,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"ruby"),klipse.common.registry.scripts_src.call(null,"Oblivion.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"oblivion","selector_oblivion",klipse.lang.oblivion.opts);

//# sourceMappingURL=oblivion.js.map

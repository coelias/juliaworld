// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.oblivion');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.oblivion.render_STAR_ = (function klipse$lang$oblivion$render_STAR_(src,p__33189){
var map__33190 = p__33189;
var map__33190__$1 = cljs.core.__destructure_map.call(null,map__33190);
var opts = map__33190__$1;
var container = cljs.core.get.call(null,map__33190__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
try{var _ = goog.dom.setTextContent(container,"");
var vec__33192 = (function (){var obj__20025__auto__ = Oblivion;
var f__20026__auto__ = (function (){var obj33195 = obj__20025__auto__;
var k33196 = "Compile";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33195,k33196)){
return (obj33195[k33196]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,src,(2));
})();
var stdout = cljs.core.nth.call(null,vec__33192,(0),null);
var svgout = cljs.core.nth.call(null,vec__33192,(1),null);
if(typeof stdout === 'string'){
var obj33197_33201 = container;
var obj33198_33202 = (((!((obj33197_33201 == null))))?obj33197_33201:({}));
(obj33198_33202["innerHTML"] = svgout);


return stdout;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(stdout);
}
}catch (e33191){var e = e33191;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(e);
}});
klipse.lang.oblivion.render = (function klipse$lang$oblivion$render(src,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_33205){
var state_val_33206 = (state_33205[(1)]);
if((state_val_33206 === (1))){
var inst_33203 = klipse.lang.oblivion.render_STAR_.call(null,src,opts);
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33205__$1,inst_33203);
} else {
return null;
}
});
return (function() {
var klipse$lang$oblivion$render_$_state_machine__15523__auto__ = null;
var klipse$lang$oblivion$render_$_state_machine__15523__auto____0 = (function (){
var statearr_33207 = [null,null,null,null,null,null,null];
(statearr_33207[(0)] = klipse$lang$oblivion$render_$_state_machine__15523__auto__);

(statearr_33207[(1)] = (1));

return statearr_33207;
});
var klipse$lang$oblivion$render_$_state_machine__15523__auto____1 = (function (state_33205){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_33205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e33208){if((e33208 instanceof Object)){
var ex__15526__auto__ = e33208;
var statearr_33209_33211 = state_33205;
(statearr_33209_33211[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33212 = state_33205;
state_33205 = G__33212;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$oblivion$render_$_state_machine__15523__auto__ = function(state_33205){
switch(arguments.length){
case 0:
return klipse$lang$oblivion$render_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$oblivion$render_$_state_machine__15523__auto____1.call(this,state_33205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$oblivion$render_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$oblivion$render_$_state_machine__15523__auto____0;
klipse$lang$oblivion$render_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$oblivion$render_$_state_machine__15523__auto____1;
return klipse$lang$oblivion$render_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_33210 = f__15620__auto__.call(null);
(statearr_33210[(6)] = c__15619__auto__);

return statearr_33210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.oblivion.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"ruby",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.oblivion.render,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"ruby"),klipse.common.registry.scripts_src.call(null,"Oblivion.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"oblivion","selector_oblivion",klipse.lang.oblivion.opts);

//# sourceMappingURL=oblivion.js.map

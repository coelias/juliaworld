// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.oblivion');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.oblivion.render_STAR_ = (function klipse$lang$oblivion$render_STAR_(src,p__32777){
var map__32778 = p__32777;
var map__32778__$1 = cljs.core.__destructure_map.call(null,map__32778);
var opts = map__32778__$1;
var container = cljs.core.get.call(null,map__32778__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
try{var _ = goog.dom.setTextContent(container,"");
var vec__32780 = (function (){var obj__20025__auto__ = Oblivion;
var f__20026__auto__ = (function (){var obj32783 = obj__20025__auto__;
var k32784 = "Compile";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32783,k32784)){
return (obj32783[k32784]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,src,(2));
})();
var stdout = cljs.core.nth.call(null,vec__32780,(0),null);
var svgout = cljs.core.nth.call(null,vec__32780,(1),null);
if(typeof stdout === 'string'){
var obj32785_32789 = container;
var obj32786_32790 = (((!((obj32785_32789 == null))))?obj32785_32789:({}));
(obj32786_32790["innerHTML"] = svgout);


return stdout;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(stdout);
}
}catch (e32779){var e = e32779;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(e);
}});
klipse.lang.oblivion.render = (function klipse$lang$oblivion$render(src,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32793){
var state_val_32794 = (state_32793[(1)]);
if((state_val_32794 === (1))){
var inst_32791 = klipse.lang.oblivion.render_STAR_.call(null,src,opts);
var state_32793__$1 = state_32793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32793__$1,inst_32791);
} else {
return null;
}
});
return (function() {
var klipse$lang$oblivion$render_$_state_machine__15523__auto__ = null;
var klipse$lang$oblivion$render_$_state_machine__15523__auto____0 = (function (){
var statearr_32795 = [null,null,null,null,null,null,null];
(statearr_32795[(0)] = klipse$lang$oblivion$render_$_state_machine__15523__auto__);

(statearr_32795[(1)] = (1));

return statearr_32795;
});
var klipse$lang$oblivion$render_$_state_machine__15523__auto____1 = (function (state_32793){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32796){if((e32796 instanceof Object)){
var ex__15526__auto__ = e32796;
var statearr_32797_32799 = state_32793;
(statearr_32797_32799[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32800 = state_32793;
state_32793 = G__32800;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$oblivion$render_$_state_machine__15523__auto__ = function(state_32793){
switch(arguments.length){
case 0:
return klipse$lang$oblivion$render_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$oblivion$render_$_state_machine__15523__auto____1.call(this,state_32793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$oblivion$render_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$oblivion$render_$_state_machine__15523__auto____0;
klipse$lang$oblivion$render_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$oblivion$render_$_state_machine__15523__auto____1;
return klipse$lang$oblivion$render_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32798 = f__15620__auto__.call(null);
(statearr_32798[(6)] = c__15619__auto__);

return statearr_32798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.oblivion.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"ruby",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.oblivion.render,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"ruby"),klipse.common.registry.scripts_src.call(null,"Oblivion.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"oblivion","selector_oblivion",klipse.lang.oblivion.opts);

//# sourceMappingURL=oblivion.js.map

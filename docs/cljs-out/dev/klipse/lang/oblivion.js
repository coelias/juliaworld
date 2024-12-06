// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.oblivion');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.utils');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.oblivion.render_STAR_ = (function klipse$lang$oblivion$render_STAR_(src,p__32866){
var map__32867 = p__32866;
var map__32867__$1 = cljs.core.__destructure_map.call(null,map__32867);
var opts = map__32867__$1;
var container = cljs.core.get.call(null,map__32867__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
try{var _ = goog.dom.setTextContent(container,"");
var vec__32869 = (function (){var obj__20025__auto__ = Oblivion;
var f__20026__auto__ = (function (){var obj32872 = obj__20025__auto__;
var k32873 = "Compile";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32872,k32873)){
return (obj32872[k32873]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,src,(2));
})();
var stdout = cljs.core.nth.call(null,vec__32869,(0),null);
var svgout = cljs.core.nth.call(null,vec__32869,(1),null);
if(typeof stdout === 'string'){
var obj32874_32878 = container;
var obj32875_32879 = (((!((obj32874_32878 == null))))?obj32874_32878:({}));
(obj32875_32879["innerHTML"] = svgout);


return stdout;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(stdout);
}
}catch (e32868){var e = e32868;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(e);
}});
klipse.lang.oblivion.render = (function klipse$lang$oblivion$render(src,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32882){
var state_val_32883 = (state_32882[(1)]);
if((state_val_32883 === (1))){
var inst_32880 = klipse.lang.oblivion.render_STAR_.call(null,src,opts);
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32882__$1,inst_32880);
} else {
return null;
}
});
return (function() {
var klipse$lang$oblivion$render_$_state_machine__15523__auto__ = null;
var klipse$lang$oblivion$render_$_state_machine__15523__auto____0 = (function (){
var statearr_32884 = [null,null,null,null,null,null,null];
(statearr_32884[(0)] = klipse$lang$oblivion$render_$_state_machine__15523__auto__);

(statearr_32884[(1)] = (1));

return statearr_32884;
});
var klipse$lang$oblivion$render_$_state_machine__15523__auto____1 = (function (state_32882){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32885){if((e32885 instanceof Object)){
var ex__15526__auto__ = e32885;
var statearr_32886_32888 = state_32882;
(statearr_32886_32888[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32889 = state_32882;
state_32882 = G__32889;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$oblivion$render_$_state_machine__15523__auto__ = function(state_32882){
switch(arguments.length){
case 0:
return klipse$lang$oblivion$render_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$oblivion$render_$_state_machine__15523__auto____1.call(this,state_32882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$oblivion$render_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$oblivion$render_$_state_machine__15523__auto____0;
klipse$lang$oblivion$render_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$oblivion$render_$_state_machine__15523__auto____1;
return klipse$lang$oblivion$render_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32887 = f__15620__auto__.call(null);
(statearr_32887[(6)] = c__15619__auto__);

return statearr_32887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.oblivion.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"ruby",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.oblivion.render,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"ruby"),klipse.common.registry.scripts_src.call(null,"Oblivion.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"oblivion","selector_oblivion",klipse.lang.oblivion.opts);

//# sourceMappingURL=oblivion.js.map

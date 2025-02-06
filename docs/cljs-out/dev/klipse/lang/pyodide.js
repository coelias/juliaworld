// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.pyodide');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
if((typeof klipse !== 'undefined') && (typeof klipse.lang !== 'undefined') && (typeof klipse.lang.pyodide !== 'undefined') && (typeof klipse.lang.pyodide._STAR_loaded_STAR_ !== 'undefined')){
} else {
klipse.lang.pyodide._STAR_loaded_STAR_ = false;
}
klipse.lang.pyodide.new_print = "\nimport io\nimport builtins\nstring_out = io.StringIO()\n\ndef print(*args, **kwargs):\n    if not 'file' in kwargs:\n        kwargs['file'] = string_out\n    return builtins.print(*args, **kwargs)\n";
klipse.lang.pyodide.load_pyodide = cljs.core.memoize.call(null,(function (){
var G__32817 = (function (){var obj__20025__auto__ = window;
var f__20026__auto__ = (function (){var obj32818 = obj__20025__auto__;
var k32819 = "loadPyodide";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32818,k32819)){
return (obj32818[k32819]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__);
})();
G__32817.then((function (){
var obj__20025__auto___32822 = pyodide;
var f__20026__auto___32823 = (function (){var obj32820 = obj__20025__auto___32822;
var k32821 = "runPython";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32820,k32821)){
return (obj32820[k32821]);
} else {
return null;
}
})();
f__20026__auto___32823.call(obj__20025__auto___32822,klipse.lang.pyodide.new_print);

return (klipse.lang.pyodide._STAR_loaded_STAR_ = true);
}));

return G__32817;
}));
klipse.lang.pyodide.ensure_loaded_BANG_ = (function klipse$lang$pyodide$ensure_loaded_BANG_(out_chan){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32837){
var state_val_32838 = (state_32837[(1)]);
if((state_val_32838 === (1))){
var inst_32824 = cljs.core.async.chan.call(null);
var state_32837__$1 = (function (){var statearr_32839 = state_32837;
(statearr_32839[(7)] = inst_32824);

return statearr_32839;
})();
if(cljs.core.truth_(klipse.lang.pyodide._STAR_loaded_STAR_)){
var statearr_32840_32849 = state_32837__$1;
(statearr_32840_32849[(1)] = (2));

} else {
var statearr_32841_32850 = state_32837__$1;
(statearr_32841_32850[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (2))){
var state_32837__$1 = state_32837;
var statearr_32842_32851 = state_32837__$1;
(statearr_32842_32851[(2)] = null);

(statearr_32842_32851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32838 === (3))){
var inst_32824 = (state_32837[(7)]);
var inst_32827 = cljs.core.async.put_BANG_.call(null,out_chan,"Loading...");
var inst_32829 = klipse.lang.pyodide.load_pyodide.call(null);
var inst_32830 = (function (){var ready_chan = inst_32824;
var G__32828 = inst_32829;
return (function (){
cljs.core.async.put_BANG_.call(null,out_chan,"Ready to evaluate...");

return cljs.core.async.put_BANG_.call(null,ready_chan,"Ready to evaluate...");
});
})();
var inst_32831 = inst_32829.then(inst_32830);
var state_32837__$1 = (function (){var statearr_32843 = state_32837;
(statearr_32843[(8)] = inst_32831);

(statearr_32843[(9)] = inst_32827);

return statearr_32843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32837__$1,(5),inst_32824);
} else {
if((state_val_32838 === (4))){
var inst_32835 = (state_32837[(2)]);
var state_32837__$1 = state_32837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32837__$1,inst_32835);
} else {
if((state_val_32838 === (5))){
var inst_32833 = (state_32837[(2)]);
var state_32837__$1 = state_32837;
var statearr_32844_32852 = state_32837__$1;
(statearr_32844_32852[(2)] = inst_32833);

(statearr_32844_32852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto__ = null;
var klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto____0 = (function (){
var statearr_32845 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32845[(0)] = klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto__);

(statearr_32845[(1)] = (1));

return statearr_32845;
});
var klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto____1 = (function (state_32837){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32846){if((e32846 instanceof Object)){
var ex__15526__auto__ = e32846;
var statearr_32847_32853 = state_32837;
(statearr_32847_32853[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32854 = state_32837;
state_32837 = G__32854;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto__ = function(state_32837){
switch(arguments.length){
case 0:
return klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto____1.call(this,state_32837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto____0;
klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto____1;
return klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32848 = f__15620__auto__.call(null);
(statearr_32848[(6)] = c__15619__auto__);

return statearr_32848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.pyodide.eval_python = (function klipse$lang$pyodide$eval_python(src,_opts){
var c = cljs.core.async.chan.call(null);
var to_chan = (function (p1__32855_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__32855_SHARP_);
});
var c__15619__auto___32910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32881){
var state_val_32882 = (state_32881[(1)]);
if((state_val_32882 === (1))){
var inst_32856 = klipse.lang.pyodide.ensure_loaded_BANG_.call(null,c);
var state_32881__$1 = state_32881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32881__$1,(2),inst_32856);
} else {
if((state_val_32882 === (2))){
var inst_32858 = (state_32881[(2)]);
var state_32881__$1 = (function (){var statearr_32883 = state_32881;
(statearr_32883[(7)] = inst_32858);

return statearr_32883;
})();
var statearr_32884_32911 = state_32881__$1;
(statearr_32884_32911[(2)] = null);

(statearr_32884_32911[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32882 === (3))){
var inst_32879 = (state_32881[(2)]);
var state_32881__$1 = state_32881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32881__$1,inst_32879);
} else {
if((state_val_32882 === (4))){
var inst_32859 = (state_32881[(2)]);
var inst_32860 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32859);
var inst_32861 = cljs.core.async.put_BANG_.call(null,c,inst_32860);
var state_32881__$1 = state_32881;
var statearr_32885_32912 = state_32881__$1;
(statearr_32885_32912[(2)] = inst_32861);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32881__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32882 === (5))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32881,(4),new cljs.core.Keyword(null,"default","default",-1987822328),null,(3));
var inst_32868 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,pyodide,"runPythonAsync");
var state_32881__$1 = state_32881;
if(inst_32868){
var statearr_32886_32913 = state_32881__$1;
(statearr_32886_32913[(1)] = (6));

} else {
var statearr_32887_32914 = state_32881__$1;
(statearr_32887_32914[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32882 === (6))){
var inst_32870 = (pyodide["runPythonAsync"]);
var state_32881__$1 = state_32881;
var statearr_32888_32915 = state_32881__$1;
(statearr_32888_32915[(2)] = inst_32870);

(statearr_32888_32915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32882 === (7))){
var state_32881__$1 = state_32881;
var statearr_32889_32916 = state_32881__$1;
(statearr_32889_32916[(2)] = null);

(statearr_32889_32916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32882 === (8))){
var inst_32873 = (state_32881[(2)]);
var inst_32874 = inst_32873.call(pyodide,src,to_chan,to_chan);
var inst_32875 = (function (){var G__32865 = inst_32874;
return (function (m){
cljs.core.async.put_BANG_.call(null,c,"\nOutput:\n");

if((m == null)){
} else {
to_chan.call(null,m);
}

cljs.core.async.put_BANG_.call(null,c,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var parent__20032__auto__ = (function (){var obj32898 = (function (){var obj32896 = pyodide;
var k32897 = "globals";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32896,k32897)){
return (obj32896[k32897]);
} else {
return null;
}
})();
var k32899 = "string_out";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32898,k32899)){
return (obj32898[k32899]);
} else {
return null;
}
})();
var f__20033__auto__ = (function (){var obj32900 = parent__20032__auto__;
var k32901 = "getvalue";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32900,k32901)){
return (obj32900[k32901]);
} else {
return null;
}
})();
return f__20033__auto__.call(parent__20032__auto__);
})())].join(''));

var obj__20025__auto__ = pyodide;
var f__20026__auto__ = (function (){var obj32902 = obj__20025__auto__;
var k32903 = "runPython";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32902,k32903)){
return (obj32902[k32903]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__," string_out = io.StringIO()");
});
})();
var inst_32876 = inst_32874.then(inst_32875);
var inst_32877 = inst_32874.catch(to_chan);
var state_32881__$1 = (function (){var statearr_32904 = state_32881;
(statearr_32904[(8)] = inst_32877);

(statearr_32904[(9)] = inst_32876);

return statearr_32904;
})();
var statearr_32905_32917 = state_32881__$1;
(statearr_32905_32917[(2)] = inst_32874);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32881__$1);

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
});
return (function() {
var klipse$lang$pyodide$eval_python_$_state_machine__15523__auto__ = null;
var klipse$lang$pyodide$eval_python_$_state_machine__15523__auto____0 = (function (){
var statearr_32906 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32906[(0)] = klipse$lang$pyodide$eval_python_$_state_machine__15523__auto__);

(statearr_32906[(1)] = (1));

return statearr_32906;
});
var klipse$lang$pyodide$eval_python_$_state_machine__15523__auto____1 = (function (state_32881){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32907){if((e32907 instanceof Object)){
var ex__15526__auto__ = e32907;
var statearr_32908_32918 = state_32881;
(statearr_32908_32918[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32919 = state_32881;
state_32881 = G__32919;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$pyodide$eval_python_$_state_machine__15523__auto__ = function(state_32881){
switch(arguments.length){
case 0:
return klipse$lang$pyodide$eval_python_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$pyodide$eval_python_$_state_machine__15523__auto____1.call(this,state_32881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$pyodide$eval_python_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$pyodide$eval_python_$_state_machine__15523__auto____0;
klipse$lang$pyodide$eval_python_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$pyodide$eval_python_$_state_machine__15523__auto____1;
return klipse$lang$pyodide$eval_python_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32909 = f__15620__auto__.call(null);
(statearr_32909[(6)] = c__15619__auto___32910);

return statearr_32909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return c;
});
klipse.lang.pyodide.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"html",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.pyodide.eval_python,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python"),"https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null);
klipse.common.registry.register_mode.call(null,"pyodide","selector_pyodide",klipse.lang.pyodide.opts);

//# sourceMappingURL=pyodide.js.map

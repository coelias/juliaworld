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
var G__32906 = (function (){var obj__20025__auto__ = window;
var f__20026__auto__ = (function (){var obj32907 = obj__20025__auto__;
var k32908 = "loadPyodide";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32907,k32908)){
return (obj32907[k32908]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__);
})();
G__32906.then((function (){
var obj__20025__auto___32911 = pyodide;
var f__20026__auto___32912 = (function (){var obj32909 = obj__20025__auto___32911;
var k32910 = "runPython";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32909,k32910)){
return (obj32909[k32910]);
} else {
return null;
}
})();
f__20026__auto___32912.call(obj__20025__auto___32911,klipse.lang.pyodide.new_print);

return (klipse.lang.pyodide._STAR_loaded_STAR_ = true);
}));

return G__32906;
}));
klipse.lang.pyodide.ensure_loaded_BANG_ = (function klipse$lang$pyodide$ensure_loaded_BANG_(out_chan){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32926){
var state_val_32927 = (state_32926[(1)]);
if((state_val_32927 === (1))){
var inst_32913 = cljs.core.async.chan.call(null);
var state_32926__$1 = (function (){var statearr_32928 = state_32926;
(statearr_32928[(7)] = inst_32913);

return statearr_32928;
})();
if(cljs.core.truth_(klipse.lang.pyodide._STAR_loaded_STAR_)){
var statearr_32929_32938 = state_32926__$1;
(statearr_32929_32938[(1)] = (2));

} else {
var statearr_32930_32939 = state_32926__$1;
(statearr_32930_32939[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32927 === (2))){
var state_32926__$1 = state_32926;
var statearr_32931_32940 = state_32926__$1;
(statearr_32931_32940[(2)] = null);

(statearr_32931_32940[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32927 === (3))){
var inst_32913 = (state_32926[(7)]);
var inst_32916 = cljs.core.async.put_BANG_.call(null,out_chan,"Loading...");
var inst_32918 = klipse.lang.pyodide.load_pyodide.call(null);
var inst_32919 = (function (){var ready_chan = inst_32913;
var G__32917 = inst_32918;
return (function (){
cljs.core.async.put_BANG_.call(null,out_chan,"Ready to evaluate...");

return cljs.core.async.put_BANG_.call(null,ready_chan,"Ready to evaluate...");
});
})();
var inst_32920 = inst_32918.then(inst_32919);
var state_32926__$1 = (function (){var statearr_32932 = state_32926;
(statearr_32932[(8)] = inst_32920);

(statearr_32932[(9)] = inst_32916);

return statearr_32932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32926__$1,(5),inst_32913);
} else {
if((state_val_32927 === (4))){
var inst_32924 = (state_32926[(2)]);
var state_32926__$1 = state_32926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32926__$1,inst_32924);
} else {
if((state_val_32927 === (5))){
var inst_32922 = (state_32926[(2)]);
var state_32926__$1 = state_32926;
var statearr_32933_32941 = state_32926__$1;
(statearr_32933_32941[(2)] = inst_32922);

(statearr_32933_32941[(1)] = (4));


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
var statearr_32934 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32934[(0)] = klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto__);

(statearr_32934[(1)] = (1));

return statearr_32934;
});
var klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto____1 = (function (state_32926){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32935){if((e32935 instanceof Object)){
var ex__15526__auto__ = e32935;
var statearr_32936_32942 = state_32926;
(statearr_32936_32942[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32943 = state_32926;
state_32926 = G__32943;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto__ = function(state_32926){
switch(arguments.length){
case 0:
return klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto____1.call(this,state_32926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto____0;
klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto____1;
return klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32937 = f__15620__auto__.call(null);
(statearr_32937[(6)] = c__15619__auto__);

return statearr_32937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.pyodide.eval_python = (function klipse$lang$pyodide$eval_python(src,_opts){
var c = cljs.core.async.chan.call(null);
var to_chan = (function (p1__32944_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__32944_SHARP_);
});
var c__15619__auto___32999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32970){
var state_val_32971 = (state_32970[(1)]);
if((state_val_32971 === (1))){
var inst_32945 = klipse.lang.pyodide.ensure_loaded_BANG_.call(null,c);
var state_32970__$1 = state_32970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32970__$1,(2),inst_32945);
} else {
if((state_val_32971 === (2))){
var inst_32947 = (state_32970[(2)]);
var state_32970__$1 = (function (){var statearr_32972 = state_32970;
(statearr_32972[(7)] = inst_32947);

return statearr_32972;
})();
var statearr_32973_33000 = state_32970__$1;
(statearr_32973_33000[(2)] = null);

(statearr_32973_33000[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (3))){
var inst_32968 = (state_32970[(2)]);
var state_32970__$1 = state_32970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32970__$1,inst_32968);
} else {
if((state_val_32971 === (4))){
var inst_32948 = (state_32970[(2)]);
var inst_32949 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32948);
var inst_32950 = cljs.core.async.put_BANG_.call(null,c,inst_32949);
var state_32970__$1 = state_32970;
var statearr_32974_33001 = state_32970__$1;
(statearr_32974_33001[(2)] = inst_32950);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (5))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32970,(4),new cljs.core.Keyword(null,"default","default",-1987822328),null,(3));
var inst_32957 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,pyodide,"runPythonAsync");
var state_32970__$1 = state_32970;
if(inst_32957){
var statearr_32975_33002 = state_32970__$1;
(statearr_32975_33002[(1)] = (6));

} else {
var statearr_32976_33003 = state_32970__$1;
(statearr_32976_33003[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (6))){
var inst_32959 = (pyodide["runPythonAsync"]);
var state_32970__$1 = state_32970;
var statearr_32977_33004 = state_32970__$1;
(statearr_32977_33004[(2)] = inst_32959);

(statearr_32977_33004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (7))){
var state_32970__$1 = state_32970;
var statearr_32978_33005 = state_32970__$1;
(statearr_32978_33005[(2)] = null);

(statearr_32978_33005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (8))){
var inst_32962 = (state_32970[(2)]);
var inst_32963 = inst_32962.call(pyodide,src,to_chan,to_chan);
var inst_32964 = (function (){var G__32954 = inst_32963;
return (function (m){
cljs.core.async.put_BANG_.call(null,c,"\nOutput:\n");

if((m == null)){
} else {
to_chan.call(null,m);
}

cljs.core.async.put_BANG_.call(null,c,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var parent__20032__auto__ = (function (){var obj32987 = (function (){var obj32985 = pyodide;
var k32986 = "globals";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32985,k32986)){
return (obj32985[k32986]);
} else {
return null;
}
})();
var k32988 = "string_out";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32987,k32988)){
return (obj32987[k32988]);
} else {
return null;
}
})();
var f__20033__auto__ = (function (){var obj32989 = parent__20032__auto__;
var k32990 = "getvalue";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32989,k32990)){
return (obj32989[k32990]);
} else {
return null;
}
})();
return f__20033__auto__.call(parent__20032__auto__);
})())].join(''));

var obj__20025__auto__ = pyodide;
var f__20026__auto__ = (function (){var obj32991 = obj__20025__auto__;
var k32992 = "runPython";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj32991,k32992)){
return (obj32991[k32992]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__," string_out = io.StringIO()");
});
})();
var inst_32965 = inst_32963.then(inst_32964);
var inst_32966 = inst_32963.catch(to_chan);
var state_32970__$1 = (function (){var statearr_32993 = state_32970;
(statearr_32993[(8)] = inst_32966);

(statearr_32993[(9)] = inst_32965);

return statearr_32993;
})();
var statearr_32994_33006 = state_32970__$1;
(statearr_32994_33006[(2)] = inst_32963);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32970__$1);

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
var statearr_32995 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32995[(0)] = klipse$lang$pyodide$eval_python_$_state_machine__15523__auto__);

(statearr_32995[(1)] = (1));

return statearr_32995;
});
var klipse$lang$pyodide$eval_python_$_state_machine__15523__auto____1 = (function (state_32970){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32996){if((e32996 instanceof Object)){
var ex__15526__auto__ = e32996;
var statearr_32997_33007 = state_32970;
(statearr_32997_33007[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33008 = state_32970;
state_32970 = G__33008;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$pyodide$eval_python_$_state_machine__15523__auto__ = function(state_32970){
switch(arguments.length){
case 0:
return klipse$lang$pyodide$eval_python_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$pyodide$eval_python_$_state_machine__15523__auto____1.call(this,state_32970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$pyodide$eval_python_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$pyodide$eval_python_$_state_machine__15523__auto____0;
klipse$lang$pyodide$eval_python_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$pyodide$eval_python_$_state_machine__15523__auto____1;
return klipse$lang$pyodide$eval_python_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32998 = f__15620__auto__.call(null);
(statearr_32998[(6)] = c__15619__auto___32999);

return statearr_32998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));


return c;
});
klipse.lang.pyodide.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"html",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.pyodide.eval_python,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python"),"https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null);
klipse.common.registry.register_mode.call(null,"pyodide","selector_pyodide",klipse.lang.pyodide.opts);

//# sourceMappingURL=pyodide.js.map

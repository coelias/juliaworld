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
var G__28618 = (function (){var obj__17203__auto__ = window;
var f__17204__auto__ = (function (){var obj28619 = obj__17203__auto__;
var k28620 = "loadPyodide";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28619,k28620)){
return (obj28619[k28620]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__);
})();
G__28618.then((function (){
var obj__17203__auto___28623 = pyodide;
var f__17204__auto___28624 = (function (){var obj28621 = obj__17203__auto___28623;
var k28622 = "runPython";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28621,k28622)){
return (obj28621[k28622]);
} else {
return null;
}
})();
f__17204__auto___28624.call(obj__17203__auto___28623,klipse.lang.pyodide.new_print);

return (klipse.lang.pyodide._STAR_loaded_STAR_ = true);
}));

return G__28618;
}));
klipse.lang.pyodide.ensure_loaded_BANG_ = (function klipse$lang$pyodide$ensure_loaded_BANG_(out_chan){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28638){
var state_val_28639 = (state_28638[(1)]);
if((state_val_28639 === (1))){
var inst_28625 = cljs.core.async.chan.call(null);
var state_28638__$1 = (function (){var statearr_28640 = state_28638;
(statearr_28640[(7)] = inst_28625);

return statearr_28640;
})();
if(cljs.core.truth_(klipse.lang.pyodide._STAR_loaded_STAR_)){
var statearr_28641_28650 = state_28638__$1;
(statearr_28641_28650[(1)] = (2));

} else {
var statearr_28642_28651 = state_28638__$1;
(statearr_28642_28651[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (2))){
var state_28638__$1 = state_28638;
var statearr_28643_28652 = state_28638__$1;
(statearr_28643_28652[(2)] = null);

(statearr_28643_28652[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (3))){
var inst_28625 = (state_28638[(7)]);
var inst_28628 = cljs.core.async.put_BANG_.call(null,out_chan,"Loading...");
var inst_28630 = klipse.lang.pyodide.load_pyodide.call(null);
var inst_28631 = (function (){var ready_chan = inst_28625;
var G__28629 = inst_28630;
return (function (){
cljs.core.async.put_BANG_.call(null,out_chan,"Ready to evaluate...");

return cljs.core.async.put_BANG_.call(null,ready_chan,"Ready to evaluate...");
});
})();
var inst_28632 = inst_28630.then(inst_28631);
var state_28638__$1 = (function (){var statearr_28644 = state_28638;
(statearr_28644[(8)] = inst_28628);

(statearr_28644[(9)] = inst_28632);

return statearr_28644;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28638__$1,(5),inst_28625);
} else {
if((state_val_28639 === (4))){
var inst_28636 = (state_28638[(2)]);
var state_28638__$1 = state_28638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28638__$1,inst_28636);
} else {
if((state_val_28639 === (5))){
var inst_28634 = (state_28638[(2)]);
var state_28638__$1 = state_28638;
var statearr_28645_28653 = state_28638__$1;
(statearr_28645_28653[(2)] = inst_28634);

(statearr_28645_28653[(1)] = (4));


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
var klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto__ = null;
var klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto____0 = (function (){
var statearr_28646 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28646[(0)] = klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto__);

(statearr_28646[(1)] = (1));

return statearr_28646;
});
var klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto____1 = (function (state_28638){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28647){if((e28647 instanceof Object)){
var ex__13611__auto__ = e28647;
var statearr_28648_28654 = state_28638;
(statearr_28648_28654[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28655 = state_28638;
state_28638 = G__28655;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto__ = function(state_28638){
switch(arguments.length){
case 0:
return klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto____1.call(this,state_28638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto____0;
klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto____1;
return klipse$lang$pyodide$ensure_loaded_BANG__$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28649 = f__13705__auto__.call(null);
(statearr_28649[(6)] = c__13704__auto__);

return statearr_28649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.pyodide.eval_python = (function klipse$lang$pyodide$eval_python(src,_opts){
var c = cljs.core.async.chan.call(null);
var to_chan = (function (p1__28656_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__28656_SHARP_);
});
var c__13704__auto___28711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_28682){
var state_val_28683 = (state_28682[(1)]);
if((state_val_28683 === (1))){
var inst_28657 = klipse.lang.pyodide.ensure_loaded_BANG_.call(null,c);
var state_28682__$1 = state_28682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28682__$1,(2),inst_28657);
} else {
if((state_val_28683 === (2))){
var inst_28659 = (state_28682[(2)]);
var state_28682__$1 = (function (){var statearr_28684 = state_28682;
(statearr_28684[(7)] = inst_28659);

return statearr_28684;
})();
var statearr_28685_28712 = state_28682__$1;
(statearr_28685_28712[(2)] = null);

(statearr_28685_28712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (3))){
var inst_28680 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28682__$1,inst_28680);
} else {
if((state_val_28683 === (4))){
var inst_28660 = (state_28682[(2)]);
var inst_28661 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28660);
var inst_28662 = cljs.core.async.put_BANG_.call(null,c,inst_28661);
var state_28682__$1 = state_28682;
var statearr_28686_28713 = state_28682__$1;
(statearr_28686_28713[(2)] = inst_28662);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28682__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (5))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28682,(4),new cljs.core.Keyword(null,"default","default",-1987822328),null,(3));
var inst_28669 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,pyodide,"runPythonAsync");
var state_28682__$1 = state_28682;
if(inst_28669){
var statearr_28687_28714 = state_28682__$1;
(statearr_28687_28714[(1)] = (6));

} else {
var statearr_28688_28715 = state_28682__$1;
(statearr_28688_28715[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (6))){
var inst_28671 = (pyodide["runPythonAsync"]);
var state_28682__$1 = state_28682;
var statearr_28689_28716 = state_28682__$1;
(statearr_28689_28716[(2)] = inst_28671);

(statearr_28689_28716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (7))){
var state_28682__$1 = state_28682;
var statearr_28690_28717 = state_28682__$1;
(statearr_28690_28717[(2)] = null);

(statearr_28690_28717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (8))){
var inst_28674 = (state_28682[(2)]);
var inst_28675 = inst_28674.call(pyodide,src,to_chan,to_chan);
var inst_28676 = (function (){var G__28666 = inst_28675;
return (function (m){
cljs.core.async.put_BANG_.call(null,c,"\nOutput:\n");

if((m == null)){
} else {
to_chan.call(null,m);
}

cljs.core.async.put_BANG_.call(null,c,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var parent__17210__auto__ = (function (){var obj28699 = (function (){var obj28697 = pyodide;
var k28698 = "globals";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28697,k28698)){
return (obj28697[k28698]);
} else {
return null;
}
})();
var k28700 = "string_out";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28699,k28700)){
return (obj28699[k28700]);
} else {
return null;
}
})();
var f__17211__auto__ = (function (){var obj28701 = parent__17210__auto__;
var k28702 = "getvalue";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28701,k28702)){
return (obj28701[k28702]);
} else {
return null;
}
})();
return f__17211__auto__.call(parent__17210__auto__);
})())].join(''));

var obj__17203__auto__ = pyodide;
var f__17204__auto__ = (function (){var obj28703 = obj__17203__auto__;
var k28704 = "runPython";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28703,k28704)){
return (obj28703[k28704]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__," string_out = io.StringIO()");
});
})();
var inst_28677 = inst_28675.then(inst_28676);
var inst_28678 = inst_28675.catch(to_chan);
var state_28682__$1 = (function (){var statearr_28705 = state_28682;
(statearr_28705[(8)] = inst_28677);

(statearr_28705[(9)] = inst_28678);

return statearr_28705;
})();
var statearr_28706_28718 = state_28682__$1;
(statearr_28706_28718[(2)] = inst_28675);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28682__$1);

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
var klipse$lang$pyodide$eval_python_$_state_machine__13608__auto__ = null;
var klipse$lang$pyodide$eval_python_$_state_machine__13608__auto____0 = (function (){
var statearr_28707 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28707[(0)] = klipse$lang$pyodide$eval_python_$_state_machine__13608__auto__);

(statearr_28707[(1)] = (1));

return statearr_28707;
});
var klipse$lang$pyodide$eval_python_$_state_machine__13608__auto____1 = (function (state_28682){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_28682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e28708){if((e28708 instanceof Object)){
var ex__13611__auto__ = e28708;
var statearr_28709_28719 = state_28682;
(statearr_28709_28719[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28720 = state_28682;
state_28682 = G__28720;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$pyodide$eval_python_$_state_machine__13608__auto__ = function(state_28682){
switch(arguments.length){
case 0:
return klipse$lang$pyodide$eval_python_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$pyodide$eval_python_$_state_machine__13608__auto____1.call(this,state_28682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$pyodide$eval_python_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$pyodide$eval_python_$_state_machine__13608__auto____0;
klipse$lang$pyodide$eval_python_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$pyodide$eval_python_$_state_machine__13608__auto____1;
return klipse$lang$pyodide$eval_python_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_28710 = f__13705__auto__.call(null);
(statearr_28710[(6)] = c__13704__auto___28711);

return statearr_28710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));


return c;
});
klipse.lang.pyodide.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"html",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.pyodide.eval_python,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python"),"https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null);
klipse.common.registry.register_mode.call(null,"pyodide","selector_pyodide",klipse.lang.pyodide.opts);

//# sourceMappingURL=pyodide.js.map

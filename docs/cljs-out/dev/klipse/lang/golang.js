// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.golang');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('klipse.utils');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
if((typeof klipse !== 'undefined') && (typeof klipse.lang !== 'undefined') && (typeof klipse.lang.golang !== 'undefined') && (typeof klipse.lang.golang._STAR_loaded_STAR_ !== 'undefined')){
} else {
klipse.lang.golang._STAR_loaded_STAR_ = false;
}
var obj23738_23742 = window;
var obj23739_23743 = (((!((obj23738_23742 == null))))?obj23738_23742:({}));
(obj23739_23743["fs"] = null);

klipse.lang.golang.load_module_BANG_ = (function klipse$lang$golang$load_module_BANG_(){
var c = cljs.core.async.chan.call(null);
var xhr = (new window.XMLHttpRequest());
var obj__17203__auto___23762 = xhr;
var f__17204__auto___23763 = (function (){var obj23744 = obj__17203__auto___23762;
var k23745 = "open";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23744,k23745)){
return (obj23744[k23745]);
} else {
return null;
}
})();
f__17204__auto___23763.call(obj__17203__auto___23762,"GET",klipse.common.registry.wasm_src.call(null,"yaegi.wasm"));

var obj23746_23764 = xhr;
var obj23747_23765 = (((!((obj23746_23764 == null))))?obj23746_23764:({}));
(obj23747_23765["responseType"] = "arraybuffer");


var obj__17203__auto___23766 = xhr;
var f__17204__auto___23767 = (function (){var obj23750 = obj__17203__auto___23766;
var k23751 = "overrideMimeType";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23750,k23751)){
return (obj23750[k23751]);
} else {
return null;
}
})();
f__17204__auto___23767.call(obj__17203__auto___23766,"application/javascript");

var obj23752_23768 = xhr;
var obj23753_23769 = (((!((obj23752_23768 == null))))?obj23752_23768:({}));
(obj23753_23769["onload"] = (function (){
if(klipse.utils.verbose_QMARK_.call(null)){
console.log("wasm loaded:");
} else {
}

var gos = (new Go());
return (function (){var obj__17203__auto__ = WebAssembly;
var f__17204__auto__ = (function (){var obj23756 = obj__17203__auto__;
var k23757 = "instantiate";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23756,k23757)){
return (obj23756[k23757]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,(xhr["response"]),(gos["importObject"]));
})().then((function (result){
var obj__17203__auto___23770 = gos;
var f__17204__auto___23771 = (function (){var obj23758 = obj__17203__auto___23770;
var k23759 = "run";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23758,k23759)){
return (obj23758[k23759]);
} else {
return null;
}
})();
f__17204__auto___23771.call(obj__17203__auto___23770,(result["instance"]));

return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236)], null));
}));
}));


var obj__17203__auto___23772 = xhr;
var f__17204__auto___23773 = (function (){var obj23760 = obj__17203__auto___23772;
var k23761 = "send";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23760,k23761)){
return (obj23760[k23761]);
} else {
return null;
}
})();
f__17204__auto___23773.call(obj__17203__auto___23772,null);

return c;
});
klipse.lang.golang.the_eval = (function klipse$lang$golang$the_eval(src,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_23814){
var state_val_23815 = (state_23814[(1)]);
if((state_val_23815 === (7))){
var inst_23790 = (window["evalGo"]);
var state_23814__$1 = state_23814;
var statearr_23816_23840 = state_23814__$1;
(statearr_23816_23840[(2)] = inst_23790);

(statearr_23816_23840[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (1))){
var state_23814__$1 = state_23814;
if(cljs.core.truth_(klipse.lang.golang._STAR_loaded_STAR_)){
var statearr_23817_23841 = state_23814__$1;
(statearr_23817_23841[(1)] = (2));

} else {
var statearr_23818_23842 = state_23814__$1;
(statearr_23818_23842[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (4))){
var inst_23785 = (state_23814[(2)]);
var inst_23788 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,window,"evalGo");
var state_23814__$1 = (function (){var statearr_23819 = state_23814;
(statearr_23819[(7)] = inst_23785);

return statearr_23819;
})();
if(inst_23788){
var statearr_23820_23843 = state_23814__$1;
(statearr_23820_23843[(1)] = (7));

} else {
var statearr_23821_23844 = state_23814__$1;
(statearr_23821_23844[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (15))){
var inst_23807 = (state_23814[(2)]);
var state_23814__$1 = state_23814;
var statearr_23822_23845 = state_23814__$1;
(statearr_23822_23845[(2)] = inst_23807);

(statearr_23822_23845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (13))){
var inst_23794 = (state_23814[(8)]);
var inst_23800 = (inst_23794["stdout"]);
var inst_23801 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23800);
var state_23814__$1 = state_23814;
var statearr_23823_23846 = state_23814__$1;
(statearr_23823_23846[(2)] = inst_23801);

(statearr_23823_23846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (6))){
var inst_23782 = (state_23814[(2)]);
var inst_23783 = (klipse.lang.golang._STAR_loaded_STAR_ = true);
var state_23814__$1 = (function (){var statearr_23824 = state_23814;
(statearr_23824[(9)] = inst_23782);

return statearr_23824;
})();
var statearr_23825_23847 = state_23814__$1;
(statearr_23825_23847[(2)] = inst_23783);

(statearr_23825_23847[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (3))){
var inst_23776 = klipse.common.registry.scripts_src.call(null,"wasm_exec.js");
var inst_23777 = klipse.utils.add_script_tag_BANG_.call(null,inst_23776);
var state_23814__$1 = state_23814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23814__$1,(5),inst_23777);
} else {
if((state_val_23815 === (12))){
var inst_23812 = (state_23814[(2)]);
var state_23814__$1 = state_23814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23814__$1,inst_23812);
} else {
if((state_val_23815 === (2))){
var state_23814__$1 = state_23814;
var statearr_23826_23848 = state_23814__$1;
(statearr_23826_23848[(2)] = null);

(statearr_23826_23848[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (11))){
var inst_23794 = (state_23814[(8)]);
var inst_23809 = (inst_23794["error"]);
var inst_23810 = ["error:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23809)].join('');
var state_23814__$1 = state_23814;
var statearr_23827_23849 = state_23814__$1;
(statearr_23827_23849[(2)] = inst_23810);

(statearr_23827_23849[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (9))){
var inst_23794 = (state_23814[(8)]);
var inst_23793 = (state_23814[(2)]);
var inst_23794__$1 = inst_23793.call(window,src);
var inst_23795 = (inst_23794__$1["error"]);
var inst_23796 = clojure.string.blank_QMARK_.call(null,inst_23795);
var state_23814__$1 = (function (){var statearr_23828 = state_23814;
(statearr_23828[(8)] = inst_23794__$1);

return statearr_23828;
})();
if(inst_23796){
var statearr_23829_23850 = state_23814__$1;
(statearr_23829_23850[(1)] = (10));

} else {
var statearr_23830_23851 = state_23814__$1;
(statearr_23830_23851[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (5))){
var inst_23779 = (state_23814[(2)]);
var inst_23780 = klipse.lang.golang.load_module_BANG_.call(null);
var state_23814__$1 = (function (){var statearr_23831 = state_23814;
(statearr_23831[(10)] = inst_23779);

return statearr_23831;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23814__$1,(6),inst_23780);
} else {
if((state_val_23815 === (14))){
var inst_23794 = (state_23814[(8)]);
var inst_23803 = (inst_23794["stdout"]);
var inst_23804 = (inst_23794["stderr"]);
var inst_23805 = ["stdout:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23803),"\nstderr:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23804)].join('');
var state_23814__$1 = state_23814;
var statearr_23832_23852 = state_23814__$1;
(statearr_23832_23852[(2)] = inst_23805);

(statearr_23832_23852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (10))){
var inst_23794 = (state_23814[(8)]);
var inst_23798 = (inst_23794["stderr"]);
var state_23814__$1 = state_23814;
if(cljs.core.truth_(inst_23798)){
var statearr_23833_23853 = state_23814__$1;
(statearr_23833_23853[(1)] = (13));

} else {
var statearr_23834_23854 = state_23814__$1;
(statearr_23834_23854[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23815 === (8))){
var state_23814__$1 = state_23814;
var statearr_23835_23855 = state_23814__$1;
(statearr_23835_23855[(2)] = null);

(statearr_23835_23855[(1)] = (9));


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
});
return (function() {
var klipse$lang$golang$the_eval_$_state_machine__13608__auto__ = null;
var klipse$lang$golang$the_eval_$_state_machine__13608__auto____0 = (function (){
var statearr_23836 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23836[(0)] = klipse$lang$golang$the_eval_$_state_machine__13608__auto__);

(statearr_23836[(1)] = (1));

return statearr_23836;
});
var klipse$lang$golang$the_eval_$_state_machine__13608__auto____1 = (function (state_23814){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_23814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e23837){if((e23837 instanceof Object)){
var ex__13611__auto__ = e23837;
var statearr_23838_23856 = state_23814;
(statearr_23838_23856[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23857 = state_23814;
state_23814 = G__23857;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$golang$the_eval_$_state_machine__13608__auto__ = function(state_23814){
switch(arguments.length){
case 0:
return klipse$lang$golang$the_eval_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$golang$the_eval_$_state_machine__13608__auto____1.call(this,state_23814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$golang$the_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$golang$the_eval_$_state_machine__13608__auto____0;
klipse$lang$golang$the_eval_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$golang$the_eval_$_state_machine__13608__auto____1;
return klipse$lang$golang$the_eval_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_23839 = f__13705__auto__.call(null);
(statearr_23839[(6)] = c__13704__auto__);

return statearr_23839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.golang.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-go",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"text",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.golang.the_eval,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"go")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"//"], null);
klipse.common.registry.register_mode.call(null,"golang","selector_golang",klipse.lang.golang.opts);

//# sourceMappingURL=golang.js.map

// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.hiccup');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('applied_science.js_interop');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('klipse_clj.lang.clojure');
klipse.lang.hiccup.transpile_hiccup = (function klipse$lang$hiccup$transpile_hiccup(src,opts){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32744){
var state_val_32745 = (state_32744[(1)]);
if((state_val_32745 === (7))){
var inst_32719 = (state_32744[(7)]);
var state_32744__$1 = state_32744;
var statearr_32746_32763 = state_32744__$1;
(statearr_32746_32763[(2)] = inst_32719);

(statearr_32746_32763[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (1))){
var state_32744__$1 = state_32744;
var statearr_32747_32764 = state_32744__$1;
(statearr_32747_32764[(2)] = null);

(statearr_32747_32764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (4))){
var inst_32711 = (state_32744[(8)]);
var inst_32716 = (inst_32711["message"]);
var state_32744__$1 = state_32744;
var statearr_32748_32765 = state_32744__$1;
(statearr_32748_32765[(2)] = inst_32716);

(statearr_32748_32765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (6))){
var inst_32719 = (state_32744[(7)]);
var inst_32719__$1 = (state_32744[(2)]);
var state_32744__$1 = (function (){var statearr_32749 = state_32744;
(statearr_32749[(7)] = inst_32719__$1);

return statearr_32749;
})();
if(cljs.core.truth_(inst_32719__$1)){
var statearr_32750_32766 = state_32744__$1;
(statearr_32750_32766[(1)] = (7));

} else {
var statearr_32751_32767 = state_32744__$1;
(statearr_32751_32767[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (3))){
var inst_32711 = (state_32744[(8)]);
var inst_32711__$1 = (state_32744[(2)]);
var inst_32714 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_32711__$1,"message");
var state_32744__$1 = (function (){var statearr_32752 = state_32744;
(statearr_32752[(8)] = inst_32711__$1);

return statearr_32752;
})();
if(inst_32714){
var statearr_32753_32768 = state_32744__$1;
(statearr_32753_32768[(1)] = (4));

} else {
var statearr_32754_32769 = state_32744__$1;
(statearr_32754_32769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (2))){
var inst_32742 = (state_32744[(2)]);
var state_32744__$1 = state_32744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32744__$1,inst_32742);
} else {
if((state_val_32745 === (11))){
var inst_32738 = (state_32744[(2)]);
var inst_32739 = klipse_clj.lang.clojure.read_string.call(null,inst_32738);
var inst_32740 = html_beautify(inst_32739);
var state_32744__$1 = state_32744;
var statearr_32755_32770 = state_32744__$1;
(statearr_32755_32770[(2)] = inst_32740);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32744__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (9))){
var inst_32724 = (state_32744[(2)]);
var state_32744__$1 = state_32744;
var statearr_32756_32771 = state_32744__$1;
(statearr_32756_32771[(2)] = inst_32724);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32744__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (5))){
var state_32744__$1 = state_32744;
var statearr_32757_32772 = state_32744__$1;
(statearr_32757_32772[(2)] = null);

(statearr_32757_32772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32745 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32744,(3),Object,null,(2));
var inst_32728 = klipse_clj.lang.clojure.read_string.call(null,src);
var inst_32729 = new cljs.core.Symbol("hoquet.runtime","render-html","hoquet.runtime/render-html",182948796,null);
var inst_32730 = (new cljs.core.List(null,inst_32729,null,(1),null));
var inst_32731 = (new cljs.core.List(null,inst_32728,null,(1),null));
var inst_32732 = cljs.core.concat.call(null,inst_32730,inst_32731);
var inst_32733 = cljs.core.seq.call(null,inst_32732);
var inst_32734 = cljs.core.sequence.call(null,inst_32733);
var inst_32735 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32734);
var inst_32736 = klipse_clj.lang.clojure.str_eval_async.call(null,inst_32735,opts);
var state_32744__$1 = state_32744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32744__$1,(11),inst_32736);
} else {
if((state_val_32745 === (8))){
var inst_32711 = (state_32744[(8)]);
var inst_32722 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32711);
var state_32744__$1 = state_32744;
var statearr_32758_32773 = state_32744__$1;
(statearr_32758_32773[(2)] = inst_32722);

(statearr_32758_32773[(1)] = (9));


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
});
return (function() {
var klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto__ = null;
var klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto____0 = (function (){
var statearr_32759 = [null,null,null,null,null,null,null,null,null];
(statearr_32759[(0)] = klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto__);

(statearr_32759[(1)] = (1));

return statearr_32759;
});
var klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto____1 = (function (state_32744){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32760){if((e32760 instanceof Object)){
var ex__15526__auto__ = e32760;
var statearr_32761_32774 = state_32744;
(statearr_32761_32774[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32775 = state_32744;
state_32744 = G__32775;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto__ = function(state_32744){
switch(arguments.length){
case 0:
return klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto____1.call(this,state_32744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto____0;
klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto____1;
return klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32762 = f__15620__auto__.call(null);
(statearr_32762[(6)] = c__15619__auto__);

return statearr_32762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.hiccup.render_hiccup = (function klipse$lang$hiccup$render_hiccup(src,p__32776){
var map__32777 = p__32776;
var map__32777__$1 = cljs.core.__destructure_map.call(null,map__32777);
var opts = map__32777__$1;
var container = cljs.core.get.call(null,map__32777__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32822){
var state_val_32823 = (state_32822[(1)]);
if((state_val_32823 === (7))){
var inst_32786 = (state_32822[(7)]);
var state_32822__$1 = state_32822;
var statearr_32824_32847 = state_32822__$1;
(statearr_32824_32847[(2)] = inst_32786);

(statearr_32824_32847[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (1))){
var state_32822__$1 = state_32822;
var statearr_32825_32848 = state_32822__$1;
(statearr_32825_32848[(2)] = null);

(statearr_32825_32848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (4))){
var inst_32778 = (state_32822[(8)]);
var inst_32783 = (inst_32778["message"]);
var state_32822__$1 = state_32822;
var statearr_32826_32849 = state_32822__$1;
(statearr_32826_32849[(2)] = inst_32783);

(statearr_32826_32849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (13))){
var inst_32814 = ({});
var state_32822__$1 = state_32822;
var statearr_32827_32850 = state_32822__$1;
(statearr_32827_32850[(2)] = inst_32814);

(statearr_32827_32850[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (6))){
var inst_32786 = (state_32822[(7)]);
var inst_32786__$1 = (state_32822[(2)]);
var state_32822__$1 = (function (){var statearr_32828 = state_32822;
(statearr_32828[(7)] = inst_32786__$1);

return statearr_32828;
})();
if(cljs.core.truth_(inst_32786__$1)){
var statearr_32829_32851 = state_32822__$1;
(statearr_32829_32851[(1)] = (7));

} else {
var statearr_32830_32852 = state_32822__$1;
(statearr_32830_32852[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (3))){
var inst_32778 = (state_32822[(8)]);
var inst_32778__$1 = (state_32822[(2)]);
var inst_32781 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_32778__$1,"message");
var state_32822__$1 = (function (){var statearr_32831 = state_32822;
(statearr_32831[(8)] = inst_32778__$1);

return statearr_32831;
})();
if(inst_32781){
var statearr_32832_32853 = state_32822__$1;
(statearr_32832_32853[(1)] = (4));

} else {
var statearr_32833_32854 = state_32822__$1;
(statearr_32833_32854[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (12))){
var state_32822__$1 = state_32822;
var statearr_32834_32855 = state_32822__$1;
(statearr_32834_32855[(2)] = container);

(statearr_32834_32855[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (2))){
var inst_32820 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32822__$1,inst_32820);
} else {
if((state_val_32823 === (11))){
var inst_32805 = (state_32822[(2)]);
var inst_32808 = (container == null);
var inst_32809 = cljs.core.not.call(null,inst_32808);
var state_32822__$1 = (function (){var statearr_32835 = state_32822;
(statearr_32835[(9)] = inst_32805);

return statearr_32835;
})();
if(inst_32809){
var statearr_32836_32856 = state_32822__$1;
(statearr_32836_32856[(1)] = (12));

} else {
var statearr_32837_32857 = state_32822__$1;
(statearr_32837_32857[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (9))){
var inst_32791 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32838_32858 = state_32822__$1;
(statearr_32838_32858[(2)] = inst_32791);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32822__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (5))){
var state_32822__$1 = state_32822;
var statearr_32839_32859 = state_32822__$1;
(statearr_32839_32859[(2)] = null);

(statearr_32839_32859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (14))){
var inst_32805 = (state_32822[(9)]);
var inst_32816 = (state_32822[(2)]);
var inst_32817 = klipse_clj.lang.clojure.read_string.call(null,inst_32805);
var inst_32818 = (inst_32816["innerHTML"] = inst_32817);
var state_32822__$1 = (function (){var statearr_32840 = state_32822;
(statearr_32840[(10)] = inst_32818);

return statearr_32840;
})();
var statearr_32841_32860 = state_32822__$1;
(statearr_32841_32860[(2)] = inst_32816);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32822__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32822,(3),Object,null,(2));
var inst_32795 = klipse_clj.lang.clojure.read_string.call(null,src);
var inst_32796 = new cljs.core.Symbol("hoquet.runtime","render-html","hoquet.runtime/render-html",182948796,null);
var inst_32797 = (new cljs.core.List(null,inst_32796,null,(1),null));
var inst_32798 = (new cljs.core.List(null,inst_32795,null,(1),null));
var inst_32799 = cljs.core.concat.call(null,inst_32797,inst_32798);
var inst_32800 = cljs.core.seq.call(null,inst_32799);
var inst_32801 = cljs.core.sequence.call(null,inst_32800);
var inst_32802 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32801);
var inst_32803 = klipse_clj.lang.clojure.str_eval_async.call(null,inst_32802,opts);
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32822__$1,(11),inst_32803);
} else {
if((state_val_32823 === (8))){
var inst_32778 = (state_32822[(8)]);
var inst_32789 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32778);
var state_32822__$1 = state_32822;
var statearr_32842_32861 = state_32822__$1;
(statearr_32842_32861[(2)] = inst_32789);

(statearr_32842_32861[(1)] = (9));


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
});
return (function() {
var klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto__ = null;
var klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto____0 = (function (){
var statearr_32843 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32843[(0)] = klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto__);

(statearr_32843[(1)] = (1));

return statearr_32843;
});
var klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto____1 = (function (state_32822){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32844){if((e32844 instanceof Object)){
var ex__15526__auto__ = e32844;
var statearr_32845_32862 = state_32822;
(statearr_32845_32862[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32863 = state_32822;
state_32822 = G__32863;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto__ = function(state_32822){
switch(arguments.length){
case 0:
return klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto____1.call(this,state_32822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto____0;
klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto____1;
return klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32846 = f__15620__auto__.call(null);
(statearr_32846[(6)] = c__15619__auto__);

return statearr_32846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.hiccup.transpile_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"htmlmixed",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Var(function(){return klipse.lang.hiccup.transpile_hiccup;},new cljs.core.Symbol("klipse.lang.hiccup","transpile-hiccup","klipse.lang.hiccup/transpile-hiccup",-1031076710,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.lang.hiccup","klipse.lang.hiccup",835091413,null),new cljs.core.Symbol(null,"transpile-hiccup","transpile-hiccup",884633266,null),"target/public/cljs-out/dev/klipse/lang/hiccup.cljs",23,1,14,14,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(klipse.lang.hiccup.transpile_hiccup)?klipse.lang.hiccup.transpile_hiccup.cljs$lang$test:null)])),new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure"),klipse.common.registry.codemirror_mode_src.call(null,"xml"),klipse.common.registry.codemirror_mode_src.call(null,"htmlmixed"),klipse.common.registry.scripts_src.call(null,"beautify-html-1.11.0.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.lang.hiccup.render_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"clojure",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"clojure",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Var(function(){return klipse.lang.hiccup.render_hiccup;},new cljs.core.Symbol("klipse.lang.hiccup","render-hiccup","klipse.lang.hiccup/render-hiccup",-111724489,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.lang.hiccup","klipse.lang.hiccup",835091413,null),new cljs.core.Symbol(null,"render-hiccup","render-hiccup",-358574097,null),"target/public/cljs-out/dev/klipse/lang/hiccup.cljs",20,1,25,25,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"src","src",-10544524,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"container","container",-96406180,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null)),null,(cljs.core.truth_(klipse.lang.hiccup.render_hiccup)?klipse.lang.hiccup.render_hiccup.cljs$lang$test:null)])),new cljs.core.Keyword(null,"no-result","no-result",1702657437),true,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"clojure")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"transpile-hiccup","selector_transpile_hiccup",klipse.lang.hiccup.transpile_opts);
klipse.common.registry.register_mode.call(null,"render-hiccup","selector_render_hiccup",klipse.lang.hiccup.render_opts);

//# sourceMappingURL=hiccup.js.map

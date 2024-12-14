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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32655){
var state_val_32656 = (state_32655[(1)]);
if((state_val_32656 === (7))){
var inst_32630 = (state_32655[(7)]);
var state_32655__$1 = state_32655;
var statearr_32657_32674 = state_32655__$1;
(statearr_32657_32674[(2)] = inst_32630);

(statearr_32657_32674[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (1))){
var state_32655__$1 = state_32655;
var statearr_32658_32675 = state_32655__$1;
(statearr_32658_32675[(2)] = null);

(statearr_32658_32675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (4))){
var inst_32622 = (state_32655[(8)]);
var inst_32627 = (inst_32622["message"]);
var state_32655__$1 = state_32655;
var statearr_32659_32676 = state_32655__$1;
(statearr_32659_32676[(2)] = inst_32627);

(statearr_32659_32676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (6))){
var inst_32630 = (state_32655[(7)]);
var inst_32630__$1 = (state_32655[(2)]);
var state_32655__$1 = (function (){var statearr_32660 = state_32655;
(statearr_32660[(7)] = inst_32630__$1);

return statearr_32660;
})();
if(cljs.core.truth_(inst_32630__$1)){
var statearr_32661_32677 = state_32655__$1;
(statearr_32661_32677[(1)] = (7));

} else {
var statearr_32662_32678 = state_32655__$1;
(statearr_32662_32678[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (3))){
var inst_32622 = (state_32655[(8)]);
var inst_32622__$1 = (state_32655[(2)]);
var inst_32625 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_32622__$1,"message");
var state_32655__$1 = (function (){var statearr_32663 = state_32655;
(statearr_32663[(8)] = inst_32622__$1);

return statearr_32663;
})();
if(inst_32625){
var statearr_32664_32679 = state_32655__$1;
(statearr_32664_32679[(1)] = (4));

} else {
var statearr_32665_32680 = state_32655__$1;
(statearr_32665_32680[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (2))){
var inst_32653 = (state_32655[(2)]);
var state_32655__$1 = state_32655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32655__$1,inst_32653);
} else {
if((state_val_32656 === (11))){
var inst_32649 = (state_32655[(2)]);
var inst_32650 = klipse_clj.lang.clojure.read_string.call(null,inst_32649);
var inst_32651 = html_beautify(inst_32650);
var state_32655__$1 = state_32655;
var statearr_32666_32681 = state_32655__$1;
(statearr_32666_32681[(2)] = inst_32651);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32655__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (9))){
var inst_32635 = (state_32655[(2)]);
var state_32655__$1 = state_32655;
var statearr_32667_32682 = state_32655__$1;
(statearr_32667_32682[(2)] = inst_32635);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32655__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (5))){
var state_32655__$1 = state_32655;
var statearr_32668_32683 = state_32655__$1;
(statearr_32668_32683[(2)] = null);

(statearr_32668_32683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32655,(3),Object,null,(2));
var inst_32639 = klipse_clj.lang.clojure.read_string.call(null,src);
var inst_32640 = new cljs.core.Symbol("hoquet.runtime","render-html","hoquet.runtime/render-html",182948796,null);
var inst_32641 = (new cljs.core.List(null,inst_32640,null,(1),null));
var inst_32642 = (new cljs.core.List(null,inst_32639,null,(1),null));
var inst_32643 = cljs.core.concat.call(null,inst_32641,inst_32642);
var inst_32644 = cljs.core.seq.call(null,inst_32643);
var inst_32645 = cljs.core.sequence.call(null,inst_32644);
var inst_32646 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32645);
var inst_32647 = klipse_clj.lang.clojure.str_eval_async.call(null,inst_32646,opts);
var state_32655__$1 = state_32655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32655__$1,(11),inst_32647);
} else {
if((state_val_32656 === (8))){
var inst_32622 = (state_32655[(8)]);
var inst_32633 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32622);
var state_32655__$1 = state_32655;
var statearr_32669_32684 = state_32655__$1;
(statearr_32669_32684[(2)] = inst_32633);

(statearr_32669_32684[(1)] = (9));


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
var statearr_32670 = [null,null,null,null,null,null,null,null,null];
(statearr_32670[(0)] = klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto__);

(statearr_32670[(1)] = (1));

return statearr_32670;
});
var klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto____1 = (function (state_32655){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32671){if((e32671 instanceof Object)){
var ex__15526__auto__ = e32671;
var statearr_32672_32685 = state_32655;
(statearr_32672_32685[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32686 = state_32655;
state_32655 = G__32686;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto__ = function(state_32655){
switch(arguments.length){
case 0:
return klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto____1.call(this,state_32655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto____0;
klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto____1;
return klipse$lang$hiccup$transpile_hiccup_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32673 = f__15620__auto__.call(null);
(statearr_32673[(6)] = c__15619__auto__);

return statearr_32673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.hiccup.render_hiccup = (function klipse$lang$hiccup$render_hiccup(src,p__32687){
var map__32688 = p__32687;
var map__32688__$1 = cljs.core.__destructure_map.call(null,map__32688);
var opts = map__32688__$1;
var container = cljs.core.get.call(null,map__32688__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_32733){
var state_val_32734 = (state_32733[(1)]);
if((state_val_32734 === (7))){
var inst_32697 = (state_32733[(7)]);
var state_32733__$1 = state_32733;
var statearr_32735_32758 = state_32733__$1;
(statearr_32735_32758[(2)] = inst_32697);

(statearr_32735_32758[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (1))){
var state_32733__$1 = state_32733;
var statearr_32736_32759 = state_32733__$1;
(statearr_32736_32759[(2)] = null);

(statearr_32736_32759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (4))){
var inst_32689 = (state_32733[(8)]);
var inst_32694 = (inst_32689["message"]);
var state_32733__$1 = state_32733;
var statearr_32737_32760 = state_32733__$1;
(statearr_32737_32760[(2)] = inst_32694);

(statearr_32737_32760[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (13))){
var inst_32725 = ({});
var state_32733__$1 = state_32733;
var statearr_32738_32761 = state_32733__$1;
(statearr_32738_32761[(2)] = inst_32725);

(statearr_32738_32761[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (6))){
var inst_32697 = (state_32733[(7)]);
var inst_32697__$1 = (state_32733[(2)]);
var state_32733__$1 = (function (){var statearr_32739 = state_32733;
(statearr_32739[(7)] = inst_32697__$1);

return statearr_32739;
})();
if(cljs.core.truth_(inst_32697__$1)){
var statearr_32740_32762 = state_32733__$1;
(statearr_32740_32762[(1)] = (7));

} else {
var statearr_32741_32763 = state_32733__$1;
(statearr_32741_32763[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (3))){
var inst_32689 = (state_32733[(8)]);
var inst_32689__$1 = (state_32733[(2)]);
var inst_32692 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,inst_32689__$1,"message");
var state_32733__$1 = (function (){var statearr_32742 = state_32733;
(statearr_32742[(8)] = inst_32689__$1);

return statearr_32742;
})();
if(inst_32692){
var statearr_32743_32764 = state_32733__$1;
(statearr_32743_32764[(1)] = (4));

} else {
var statearr_32744_32765 = state_32733__$1;
(statearr_32744_32765[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (12))){
var state_32733__$1 = state_32733;
var statearr_32745_32766 = state_32733__$1;
(statearr_32745_32766[(2)] = container);

(statearr_32745_32766[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (2))){
var inst_32731 = (state_32733[(2)]);
var state_32733__$1 = state_32733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32733__$1,inst_32731);
} else {
if((state_val_32734 === (11))){
var inst_32716 = (state_32733[(2)]);
var inst_32719 = (container == null);
var inst_32720 = cljs.core.not.call(null,inst_32719);
var state_32733__$1 = (function (){var statearr_32746 = state_32733;
(statearr_32746[(9)] = inst_32716);

return statearr_32746;
})();
if(inst_32720){
var statearr_32747_32767 = state_32733__$1;
(statearr_32747_32767[(1)] = (12));

} else {
var statearr_32748_32768 = state_32733__$1;
(statearr_32748_32768[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (9))){
var inst_32702 = (state_32733[(2)]);
var state_32733__$1 = state_32733;
var statearr_32749_32769 = state_32733__$1;
(statearr_32749_32769[(2)] = inst_32702);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32733__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (5))){
var state_32733__$1 = state_32733;
var statearr_32750_32770 = state_32733__$1;
(statearr_32750_32770[(2)] = null);

(statearr_32750_32770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (14))){
var inst_32716 = (state_32733[(9)]);
var inst_32727 = (state_32733[(2)]);
var inst_32728 = klipse_clj.lang.clojure.read_string.call(null,inst_32716);
var inst_32729 = (inst_32727["innerHTML"] = inst_32728);
var state_32733__$1 = (function (){var statearr_32751 = state_32733;
(statearr_32751[(10)] = inst_32729);

return statearr_32751;
})();
var statearr_32752_32771 = state_32733__$1;
(statearr_32752_32771[(2)] = inst_32727);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32733__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (10))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32733,(3),Object,null,(2));
var inst_32706 = klipse_clj.lang.clojure.read_string.call(null,src);
var inst_32707 = new cljs.core.Symbol("hoquet.runtime","render-html","hoquet.runtime/render-html",182948796,null);
var inst_32708 = (new cljs.core.List(null,inst_32707,null,(1),null));
var inst_32709 = (new cljs.core.List(null,inst_32706,null,(1),null));
var inst_32710 = cljs.core.concat.call(null,inst_32708,inst_32709);
var inst_32711 = cljs.core.seq.call(null,inst_32710);
var inst_32712 = cljs.core.sequence.call(null,inst_32711);
var inst_32713 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32712);
var inst_32714 = klipse_clj.lang.clojure.str_eval_async.call(null,inst_32713,opts);
var state_32733__$1 = state_32733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32733__$1,(11),inst_32714);
} else {
if((state_val_32734 === (8))){
var inst_32689 = (state_32733[(8)]);
var inst_32700 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32689);
var state_32733__$1 = state_32733;
var statearr_32753_32772 = state_32733__$1;
(statearr_32753_32772[(2)] = inst_32700);

(statearr_32753_32772[(1)] = (9));


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
var statearr_32754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32754[(0)] = klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto__);

(statearr_32754[(1)] = (1));

return statearr_32754;
});
var klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto____1 = (function (state_32733){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_32733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e32755){if((e32755 instanceof Object)){
var ex__15526__auto__ = e32755;
var statearr_32756_32773 = state_32733;
(statearr_32756_32773[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32774 = state_32733;
state_32733 = G__32774;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto__ = function(state_32733){
switch(arguments.length){
case 0:
return klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto____1.call(this,state_32733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto____0;
klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto____1;
return klipse$lang$hiccup$render_hiccup_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_32757 = f__15620__auto__.call(null);
(statearr_32757[(6)] = c__15619__auto__);

return statearr_32757;
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

// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.sql');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.sql.db = null;
klipse.lang.sql.create_db_STAR_ = (function klipse$lang$sql$create_db_STAR_(){
var klass = (function (){var obj23694 = SQL;
var k23695 = "Database";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23694,k23695)){
return (obj23694[k23695]);
} else {
return null;
}
})();
return (klipse.lang.sql.db = (new klass()));
});
klipse.lang.sql.create_db = klipse.utils.runonce.call(null,klipse.lang.sql.create_db_STAR_);
klipse.lang.sql.str_eval_async = (function klipse$lang$sql$str_eval_async(query,_){
var c__13704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_23713){
var state_val_23714 = (state_23713[(1)]);
if((state_val_23714 === (1))){
var state_23713__$1 = state_23713;
var statearr_23715_23727 = state_23713__$1;
(statearr_23715_23727[(2)] = null);

(statearr_23715_23727[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23714 === (2))){
var inst_23711 = (state_23713[(2)]);
var state_23713__$1 = state_23713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23713__$1,inst_23711);
} else {
if((state_val_23714 === (3))){
var inst_23696 = (state_23713[(2)]);
var state_23713__$1 = state_23713;
var statearr_23716_23728 = state_23713__$1;
(statearr_23716_23728[(2)] = inst_23696);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23713__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23714 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23713,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_23700 = klipse.lang.sql.create_db.call(null);
var inst_23703 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,SQL,"runQuery");
var state_23713__$1 = (function (){var statearr_23717 = state_23713;
(statearr_23717[(7)] = inst_23700);

return statearr_23717;
})();
if(inst_23703){
var statearr_23718_23729 = state_23713__$1;
(statearr_23718_23729[(1)] = (5));

} else {
var statearr_23719_23730 = state_23713__$1;
(statearr_23719_23730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23714 === (5))){
var inst_23705 = (SQL["runQuery"]);
var state_23713__$1 = state_23713;
var statearr_23720_23731 = state_23713__$1;
(statearr_23720_23731[(2)] = inst_23705);

(statearr_23720_23731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23714 === (6))){
var state_23713__$1 = state_23713;
var statearr_23721_23732 = state_23713__$1;
(statearr_23721_23732[(2)] = null);

(statearr_23721_23732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23714 === (7))){
var inst_23708 = (state_23713[(2)]);
var inst_23709 = inst_23708.call(SQL,klipse.lang.sql.db,query);
var state_23713__$1 = state_23713;
var statearr_23722_23733 = state_23713__$1;
(statearr_23722_23733[(2)] = inst_23709);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23713__$1);

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
});
return (function() {
var klipse$lang$sql$str_eval_async_$_state_machine__13608__auto__ = null;
var klipse$lang$sql$str_eval_async_$_state_machine__13608__auto____0 = (function (){
var statearr_23723 = [null,null,null,null,null,null,null,null];
(statearr_23723[(0)] = klipse$lang$sql$str_eval_async_$_state_machine__13608__auto__);

(statearr_23723[(1)] = (1));

return statearr_23723;
});
var klipse$lang$sql$str_eval_async_$_state_machine__13608__auto____1 = (function (state_23713){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_23713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e23724){if((e23724 instanceof Object)){
var ex__13611__auto__ = e23724;
var statearr_23725_23734 = state_23713;
(statearr_23725_23734[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23735 = state_23713;
state_23713 = G__23735;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$sql$str_eval_async_$_state_machine__13608__auto__ = function(state_23713){
switch(arguments.length){
case 0:
return klipse$lang$sql$str_eval_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$sql$str_eval_async_$_state_machine__13608__auto____1.call(this,state_23713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$sql$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$sql$str_eval_async_$_state_machine__13608__auto____0;
klipse$lang$sql$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$sql$str_eval_async_$_state_machine__13608__auto____1;
return klipse$lang$sql$str_eval_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_23726 = f__13705__auto__.call(null);
(statearr_23726[(6)] = c__13704__auto__);

return statearr_23726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.sql.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-sql",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.sql.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"sql"),klipse.common.registry.scripts_src.call(null,"sql-formatter.min.js"),klipse.common.registry.scripts_src.call(null,"sql.js"),"https://gist.githubusercontent.com/viebel/fc86366093c27aca0adc103b1d20190d/raw"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"--"], null);
klipse.common.registry.register_mode.call(null,"eval-sql","selector_sql",klipse.lang.sql.opts);

//# sourceMappingURL=sql.js.map

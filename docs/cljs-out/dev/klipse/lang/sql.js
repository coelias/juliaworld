// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.sql');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.sql.db = null;
klipse.lang.sql.create_db_STAR_ = (function klipse$lang$sql$create_db_STAR_(){
var klass = (function (){var obj28890 = SQL;
var k28891 = "Database";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28890,k28891)){
return (obj28890[k28891]);
} else {
return null;
}
})();
return (klipse.lang.sql.db = (new klass()));
});
klipse.lang.sql.create_db = klipse.utils.runonce.call(null,klipse.lang.sql.create_db_STAR_);
klipse.lang.sql.str_eval_async = (function klipse$lang$sql$str_eval_async(query,_){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28909){
var state_val_28910 = (state_28909[(1)]);
if((state_val_28910 === (1))){
var state_28909__$1 = state_28909;
var statearr_28911_28923 = state_28909__$1;
(statearr_28911_28923[(2)] = null);

(statearr_28911_28923[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (2))){
var inst_28907 = (state_28909[(2)]);
var state_28909__$1 = state_28909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28909__$1,inst_28907);
} else {
if((state_val_28910 === (3))){
var inst_28892 = (state_28909[(2)]);
var state_28909__$1 = state_28909;
var statearr_28912_28924 = state_28909__$1;
(statearr_28912_28924[(2)] = inst_28892);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28909__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28909,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_28896 = klipse.lang.sql.create_db.call(null);
var inst_28899 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,SQL,"runQuery");
var state_28909__$1 = (function (){var statearr_28913 = state_28909;
(statearr_28913[(7)] = inst_28896);

return statearr_28913;
})();
if(inst_28899){
var statearr_28914_28925 = state_28909__$1;
(statearr_28914_28925[(1)] = (5));

} else {
var statearr_28915_28926 = state_28909__$1;
(statearr_28915_28926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (5))){
var inst_28901 = (SQL["runQuery"]);
var state_28909__$1 = state_28909;
var statearr_28916_28927 = state_28909__$1;
(statearr_28916_28927[(2)] = inst_28901);

(statearr_28916_28927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (6))){
var state_28909__$1 = state_28909;
var statearr_28917_28928 = state_28909__$1;
(statearr_28917_28928[(2)] = null);

(statearr_28917_28928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28910 === (7))){
var inst_28904 = (state_28909[(2)]);
var inst_28905 = inst_28904.call(SQL,klipse.lang.sql.db,query);
var state_28909__$1 = state_28909;
var statearr_28918_28929 = state_28909__$1;
(statearr_28918_28929[(2)] = inst_28905);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28909__$1);

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
var klipse$lang$sql$str_eval_async_$_state_machine__15523__auto__ = null;
var klipse$lang$sql$str_eval_async_$_state_machine__15523__auto____0 = (function (){
var statearr_28919 = [null,null,null,null,null,null,null,null];
(statearr_28919[(0)] = klipse$lang$sql$str_eval_async_$_state_machine__15523__auto__);

(statearr_28919[(1)] = (1));

return statearr_28919;
});
var klipse$lang$sql$str_eval_async_$_state_machine__15523__auto____1 = (function (state_28909){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28920){if((e28920 instanceof Object)){
var ex__15526__auto__ = e28920;
var statearr_28921_28930 = state_28909;
(statearr_28921_28930[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28931 = state_28909;
state_28909 = G__28931;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$sql$str_eval_async_$_state_machine__15523__auto__ = function(state_28909){
switch(arguments.length){
case 0:
return klipse$lang$sql$str_eval_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$sql$str_eval_async_$_state_machine__15523__auto____1.call(this,state_28909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$sql$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$sql$str_eval_async_$_state_machine__15523__auto____0;
klipse$lang$sql$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$sql$str_eval_async_$_state_machine__15523__auto____1;
return klipse$lang$sql$str_eval_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28922 = f__15620__auto__.call(null);
(statearr_28922[(6)] = c__15619__auto__);

return statearr_28922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.sql.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-sql",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.sql.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"sql"),klipse.common.registry.scripts_src.call(null,"sql-formatter.min.js"),klipse.common.registry.scripts_src.call(null,"sql.js"),"https://gist.githubusercontent.com/viebel/fc86366093c27aca0adc103b1d20190d/raw"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"--"], null);
klipse.common.registry.register_mode.call(null,"eval-sql","selector_sql",klipse.lang.sql.opts);

//# sourceMappingURL=sql.js.map

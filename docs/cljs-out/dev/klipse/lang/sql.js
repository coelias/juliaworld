// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.sql');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.sql.db = null;
klipse.lang.sql.create_db_STAR_ = (function klipse$lang$sql$create_db_STAR_(){
var klass = (function (){var obj28893 = SQL;
var k28894 = "Database";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28893,k28894)){
return (obj28893[k28894]);
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_28912){
var state_val_28913 = (state_28912[(1)]);
if((state_val_28913 === (1))){
var state_28912__$1 = state_28912;
var statearr_28914_28926 = state_28912__$1;
(statearr_28914_28926[(2)] = null);

(statearr_28914_28926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (2))){
var inst_28910 = (state_28912[(2)]);
var state_28912__$1 = state_28912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28912__$1,inst_28910);
} else {
if((state_val_28913 === (3))){
var inst_28895 = (state_28912[(2)]);
var state_28912__$1 = state_28912;
var statearr_28915_28927 = state_28912__$1;
(statearr_28915_28927[(2)] = inst_28895);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28912__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28912,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_28899 = klipse.lang.sql.create_db.call(null);
var inst_28902 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,SQL,"runQuery");
var state_28912__$1 = (function (){var statearr_28916 = state_28912;
(statearr_28916[(7)] = inst_28899);

return statearr_28916;
})();
if(inst_28902){
var statearr_28917_28928 = state_28912__$1;
(statearr_28917_28928[(1)] = (5));

} else {
var statearr_28918_28929 = state_28912__$1;
(statearr_28918_28929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (5))){
var inst_28904 = (SQL["runQuery"]);
var state_28912__$1 = state_28912;
var statearr_28919_28930 = state_28912__$1;
(statearr_28919_28930[(2)] = inst_28904);

(statearr_28919_28930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (6))){
var state_28912__$1 = state_28912;
var statearr_28920_28931 = state_28912__$1;
(statearr_28920_28931[(2)] = null);

(statearr_28920_28931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (7))){
var inst_28907 = (state_28912[(2)]);
var inst_28908 = inst_28907.call(SQL,klipse.lang.sql.db,query);
var state_28912__$1 = state_28912;
var statearr_28921_28932 = state_28912__$1;
(statearr_28921_28932[(2)] = inst_28908);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28912__$1);

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
var statearr_28922 = [null,null,null,null,null,null,null,null];
(statearr_28922[(0)] = klipse$lang$sql$str_eval_async_$_state_machine__15523__auto__);

(statearr_28922[(1)] = (1));

return statearr_28922;
});
var klipse$lang$sql$str_eval_async_$_state_machine__15523__auto____1 = (function (state_28912){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_28912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e28923){if((e28923 instanceof Object)){
var ex__15526__auto__ = e28923;
var statearr_28924_28933 = state_28912;
(statearr_28924_28933[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28934 = state_28912;
state_28912 = G__28934;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$sql$str_eval_async_$_state_machine__15523__auto__ = function(state_28912){
switch(arguments.length){
case 0:
return klipse$lang$sql$str_eval_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$sql$str_eval_async_$_state_machine__15523__auto____1.call(this,state_28912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$sql$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$sql$str_eval_async_$_state_machine__15523__auto____0;
klipse$lang$sql$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$sql$str_eval_async_$_state_machine__15523__auto____1;
return klipse$lang$sql$str_eval_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_28925 = f__15620__auto__.call(null);
(statearr_28925[(6)] = c__15619__auto__);

return statearr_28925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.sql.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-sql",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.sql.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"sql"),klipse.common.registry.scripts_src.call(null,"sql-formatter.min.js"),klipse.common.registry.scripts_src.call(null,"sql.js"),"https://gist.githubusercontent.com/viebel/fc86366093c27aca0adc103b1d20190d/raw"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"--"], null);
klipse.common.registry.register_mode.call(null,"eval-sql","selector_sql",klipse.lang.sql.opts);

//# sourceMappingURL=sql.js.map

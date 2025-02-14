// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.sql');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.sql.db = null;
klipse.lang.sql.create_db_STAR_ = (function klipse$lang$sql$create_db_STAR_(){
var klass = (function (){var obj29303 = SQL;
var k29304 = "Database";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29303,k29304)){
return (obj29303[k29304]);
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
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_29322){
var state_val_29323 = (state_29322[(1)]);
if((state_val_29323 === (1))){
var state_29322__$1 = state_29322;
var statearr_29324_29336 = state_29322__$1;
(statearr_29324_29336[(2)] = null);

(statearr_29324_29336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (2))){
var inst_29320 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29322__$1,inst_29320);
} else {
if((state_val_29323 === (3))){
var inst_29305 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29325_29337 = state_29322__$1;
(statearr_29325_29337[(2)] = inst_29305);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29322__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29322,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_29309 = klipse.lang.sql.create_db.call(null);
var inst_29312 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,SQL,"runQuery");
var state_29322__$1 = (function (){var statearr_29326 = state_29322;
(statearr_29326[(7)] = inst_29309);

return statearr_29326;
})();
if(inst_29312){
var statearr_29327_29338 = state_29322__$1;
(statearr_29327_29338[(1)] = (5));

} else {
var statearr_29328_29339 = state_29322__$1;
(statearr_29328_29339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (5))){
var inst_29314 = (SQL["runQuery"]);
var state_29322__$1 = state_29322;
var statearr_29329_29340 = state_29322__$1;
(statearr_29329_29340[(2)] = inst_29314);

(statearr_29329_29340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (6))){
var state_29322__$1 = state_29322;
var statearr_29330_29341 = state_29322__$1;
(statearr_29330_29341[(2)] = null);

(statearr_29330_29341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (7))){
var inst_29317 = (state_29322[(2)]);
var inst_29318 = inst_29317.call(SQL,klipse.lang.sql.db,query);
var state_29322__$1 = state_29322;
var statearr_29331_29342 = state_29322__$1;
(statearr_29331_29342[(2)] = inst_29318);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29322__$1);

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
var statearr_29332 = [null,null,null,null,null,null,null,null];
(statearr_29332[(0)] = klipse$lang$sql$str_eval_async_$_state_machine__15523__auto__);

(statearr_29332[(1)] = (1));

return statearr_29332;
});
var klipse$lang$sql$str_eval_async_$_state_machine__15523__auto____1 = (function (state_29322){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_29322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e29333){if((e29333 instanceof Object)){
var ex__15526__auto__ = e29333;
var statearr_29334_29343 = state_29322;
(statearr_29334_29343[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29344 = state_29322;
state_29322 = G__29344;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$lang$sql$str_eval_async_$_state_machine__15523__auto__ = function(state_29322){
switch(arguments.length){
case 0:
return klipse$lang$sql$str_eval_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$lang$sql$str_eval_async_$_state_machine__15523__auto____1.call(this,state_29322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$sql$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$sql$str_eval_async_$_state_machine__15523__auto____0;
klipse$lang$sql$str_eval_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$sql$str_eval_async_$_state_machine__15523__auto____1;
return klipse$lang$sql$str_eval_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_29335 = f__15620__auto__.call(null);
(statearr_29335[(6)] = c__15619__auto__);

return statearr_29335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.lang.sql.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-sql",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.sql.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"sql"),klipse.common.registry.scripts_src.call(null,"sql-formatter.min.js"),klipse.common.registry.scripts_src.call(null,"sql.js"),"https://gist.githubusercontent.com/viebel/fc86366093c27aca0adc103b1d20190d/raw"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"--"], null);
klipse.common.registry.register_mode.call(null,"eval-sql","selector_sql",klipse.lang.sql.opts);

//# sourceMappingURL=sql.js.map

// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.sql');
goog.require('cljs.core');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.sql.db = null;
klipse.lang.sql.create_db_STAR_ = (function klipse$lang$sql$create_db_STAR_(){
var klass = (function (){var obj21008 = SQL;
var k21009 = "Database";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21008,k21009)){
return (obj21008[k21009]);
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
var f__13705__auto__ = (function (){var switch__13607__auto__ = (function (state_21027){
var state_val_21028 = (state_21027[(1)]);
if((state_val_21028 === (1))){
var state_21027__$1 = state_21027;
var statearr_21029_21041 = state_21027__$1;
(statearr_21029_21041[(2)] = null);

(statearr_21029_21041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21028 === (2))){
var inst_21025 = (state_21027[(2)]);
var state_21027__$1 = state_21027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21027__$1,inst_21025);
} else {
if((state_val_21028 === (3))){
var inst_21010 = (state_21027[(2)]);
var state_21027__$1 = state_21027;
var statearr_21030_21042 = state_21027__$1;
(statearr_21030_21042[(2)] = inst_21010);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21027__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21028 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21027,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_21014 = klipse.lang.sql.create_db.call(null);
var inst_21017 = applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,SQL,"runQuery");
var state_21027__$1 = (function (){var statearr_21031 = state_21027;
(statearr_21031[(7)] = inst_21014);

return statearr_21031;
})();
if(inst_21017){
var statearr_21032_21043 = state_21027__$1;
(statearr_21032_21043[(1)] = (5));

} else {
var statearr_21033_21044 = state_21027__$1;
(statearr_21033_21044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21028 === (5))){
var inst_21019 = (SQL["runQuery"]);
var state_21027__$1 = state_21027;
var statearr_21034_21045 = state_21027__$1;
(statearr_21034_21045[(2)] = inst_21019);

(statearr_21034_21045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21028 === (6))){
var state_21027__$1 = state_21027;
var statearr_21035_21046 = state_21027__$1;
(statearr_21035_21046[(2)] = null);

(statearr_21035_21046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21028 === (7))){
var inst_21022 = (state_21027[(2)]);
var inst_21023 = inst_21022.call(SQL,klipse.lang.sql.db,query);
var state_21027__$1 = state_21027;
var statearr_21036_21047 = state_21027__$1;
(statearr_21036_21047[(2)] = inst_21023);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21027__$1);

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
var statearr_21037 = [null,null,null,null,null,null,null,null];
(statearr_21037[(0)] = klipse$lang$sql$str_eval_async_$_state_machine__13608__auto__);

(statearr_21037[(1)] = (1));

return statearr_21037;
});
var klipse$lang$sql$str_eval_async_$_state_machine__13608__auto____1 = (function (state_21027){
while(true){
var ret_value__13609__auto__ = (function (){try{while(true){
var result__13610__auto__ = switch__13607__auto__.call(null,state_21027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13610__auto__;
}
break;
}
}catch (e21038){if((e21038 instanceof Object)){
var ex__13611__auto__ = e21038;
var statearr_21039_21048 = state_21027;
(statearr_21039_21048[(5)] = ex__13611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21049 = state_21027;
state_21027 = G__21049;
continue;
} else {
return ret_value__13609__auto__;
}
break;
}
});
klipse$lang$sql$str_eval_async_$_state_machine__13608__auto__ = function(state_21027){
switch(arguments.length){
case 0:
return klipse$lang$sql$str_eval_async_$_state_machine__13608__auto____0.call(this);
case 1:
return klipse$lang$sql$str_eval_async_$_state_machine__13608__auto____1.call(this,state_21027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$lang$sql$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$lang$sql$str_eval_async_$_state_machine__13608__auto____0;
klipse$lang$sql$str_eval_async_$_state_machine__13608__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$lang$sql$str_eval_async_$_state_machine__13608__auto____1;
return klipse$lang$sql$str_eval_async_$_state_machine__13608__auto__;
})()
})();
var state__13706__auto__ = (function (){var statearr_21040 = f__13705__auto__.call(null);
(statearr_21040[(6)] = c__13704__auto__);

return statearr_21040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13706__auto__);
}));

return c__13704__auto__;
});
klipse.lang.sql.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"text/x-sql",new cljs.core.Keyword(null,"default-editor","default-editor",758164479),"html",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.sql.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"sql"),klipse.common.registry.scripts_src.call(null,"sql-formatter.min.js"),klipse.common.registry.scripts_src.call(null,"sql.js"),"https://gist.githubusercontent.com/viebel/fc86366093c27aca0adc103b1d20190d/raw"], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"--"], null);
klipse.common.registry.register_mode.call(null,"eval-sql","selector_sql",klipse.lang.sql.opts);

//# sourceMappingURL=sql.js.map

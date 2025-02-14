// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.utils');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cemerick.url');
goog.require('applied_science.js_interop');
klipse.utils.current_url = (function klipse$utils$current_url(){
var temp__5802__auto__ = (((typeof location !== 'undefined'))?location:"");
if(cljs.core.truth_(temp__5802__auto__)){
var loc = temp__5802__auto__;
return cemerick.url.url.call(null,(loc["href"]));
} else {
return null;
}
});
klipse.utils.url_parameters_STAR_ = (function klipse$utils$url_parameters_STAR_(){
return clojure.walk.keywordize_keys.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(klipse.utils.current_url.call(null)));
});
klipse.utils.url_parameters = cljs.core.memoize.call(null,klipse.utils.url_parameters_STAR_);
klipse.utils.debounce = (function klipse$utils$debounce(func,wait_in_ms){
var counter = cljs.core.atom.call(null,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_20947){
var state_val_20948 = (state_20947[(1)]);
if((state_val_20948 === (1))){
var inst_20934 = cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);
var inst_20935 = cljs.core.async.timeout.call(null,wait_in_ms);
var state_20947__$1 = (function (){var statearr_20949 = state_20947;
(statearr_20949[(7)] = inst_20934);

return statearr_20949;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20947__$1,(2),inst_20935);
} else {
if((state_val_20948 === (2))){
var inst_20937 = (state_20947[(2)]);
var inst_20938 = cljs.core.swap_BANG_.call(null,counter,cljs.core.dec);
var inst_20939 = cljs.core.deref.call(null,counter);
var inst_20940 = (inst_20939 === (0));
var state_20947__$1 = (function (){var statearr_20950 = state_20947;
(statearr_20950[(8)] = inst_20937);

(statearr_20950[(9)] = inst_20938);

return statearr_20950;
})();
if(cljs.core.truth_(inst_20940)){
var statearr_20951_20974 = state_20947__$1;
(statearr_20951_20974[(1)] = (3));

} else {
var statearr_20952_20975 = state_20947__$1;
(statearr_20952_20975[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (3))){
var inst_20942 = func.call(null);
var state_20947__$1 = state_20947;
var statearr_20953_20976 = state_20947__$1;
(statearr_20953_20976[(2)] = inst_20942);

(statearr_20953_20976[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (4))){
var state_20947__$1 = state_20947;
var statearr_20954_20977 = state_20947__$1;
(statearr_20954_20977[(2)] = null);

(statearr_20954_20977[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20948 === (5))){
var inst_20945 = (state_20947[(2)]);
var state_20947__$1 = state_20947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20947__$1,inst_20945);
} else {
return null;
}
}
}
}
}
});
return (function() {
var klipse$utils$debounce_$_state_machine__15523__auto__ = null;
var klipse$utils$debounce_$_state_machine__15523__auto____0 = (function (){
var statearr_20955 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20955[(0)] = klipse$utils$debounce_$_state_machine__15523__auto__);

(statearr_20955[(1)] = (1));

return statearr_20955;
});
var klipse$utils$debounce_$_state_machine__15523__auto____1 = (function (state_20947){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_20947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e20956){if((e20956 instanceof Object)){
var ex__15526__auto__ = e20956;
var statearr_20957_20978 = state_20947;
(statearr_20957_20978[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20979 = state_20947;
state_20947 = G__20979;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__15523__auto__ = function(state_20947){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__15523__auto____1.call(this,state_20947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$debounce_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__15523__auto____0;
klipse$utils$debounce_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__15523__auto____1;
return klipse$utils$debounce_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_20958 = f__15620__auto__.call(null);
(statearr_20958[(6)] = c__15619__auto__);

return statearr_20958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
}),(function (){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_20966){
var state_val_20967 = (state_20966[(1)]);
if((state_val_20967 === (1))){
var inst_20959 = func.call(null);
var inst_20960 = cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);
var inst_20961 = cljs.core.async.timeout.call(null,wait_in_ms);
var state_20966__$1 = (function (){var statearr_20968 = state_20966;
(statearr_20968[(7)] = inst_20960);

(statearr_20968[(8)] = inst_20959);

return statearr_20968;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20966__$1,(2),inst_20961);
} else {
if((state_val_20967 === (2))){
var inst_20963 = (state_20966[(2)]);
var inst_20964 = cljs.core.swap_BANG_.call(null,counter,cljs.core.dec);
var state_20966__$1 = (function (){var statearr_20969 = state_20966;
(statearr_20969[(9)] = inst_20963);

return statearr_20969;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20966__$1,inst_20964);
} else {
return null;
}
}
});
return (function() {
var klipse$utils$debounce_$_state_machine__15523__auto__ = null;
var klipse$utils$debounce_$_state_machine__15523__auto____0 = (function (){
var statearr_20970 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20970[(0)] = klipse$utils$debounce_$_state_machine__15523__auto__);

(statearr_20970[(1)] = (1));

return statearr_20970;
});
var klipse$utils$debounce_$_state_machine__15523__auto____1 = (function (state_20966){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_20966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e20971){if((e20971 instanceof Object)){
var ex__15526__auto__ = e20971;
var statearr_20972_20980 = state_20966;
(statearr_20972_20980[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20981 = state_20966;
state_20966 = G__20981;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$utils$debounce_$_state_machine__15523__auto__ = function(state_20966){
switch(arguments.length){
case 0:
return klipse$utils$debounce_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$utils$debounce_$_state_machine__15523__auto____1.call(this,state_20966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$debounce_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$debounce_$_state_machine__15523__auto____0;
klipse$utils$debounce_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$debounce_$_state_machine__15523__auto____1;
return klipse$utils$debounce_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_20973 = f__15620__auto__.call(null);
(statearr_20973[(6)] = c__15619__auto__);

return statearr_20973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
})], null);
});
klipse.utils.gist_path_raw = (function klipse$utils$gist_path_raw(gist_id){
return ["https://gist.githubusercontent.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id),"/raw","?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.call(null))].join('');
});
klipse.utils.gist_path_page = (function klipse$utils$gist_path_page(gist_id){
return ["https://gist.github.com/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id)].join('');
});
klipse.utils.read_input_from_gist = (function klipse$utils$read_input_from_gist(gist_id){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_21005){
var state_val_21006 = (state_21005[(1)]);
if((state_val_21006 === (1))){
var state_21005__$1 = state_21005;
if(cljs.core.truth_(gist_id)){
var statearr_21007_21021 = state_21005__$1;
(statearr_21007_21021[(1)] = (2));

} else {
var statearr_21008_21022 = state_21005__$1;
(statearr_21008_21022[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (2))){
var inst_20984 = (state_21005[(7)]);
var inst_20984__$1 = klipse.utils.gist_path_raw.call(null,gist_id);
var inst_20985 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_20986 = [false];
var inst_20987 = cljs.core.PersistentHashMap.fromArrays(inst_20985,inst_20986);
var inst_20988 = cljs_http.client.get.call(null,inst_20984__$1,inst_20987);
var state_21005__$1 = (function (){var statearr_21009 = state_21005;
(statearr_21009[(7)] = inst_20984__$1);

return statearr_21009;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21005__$1,(5),inst_20988);
} else {
if((state_val_21006 === (3))){
var state_21005__$1 = state_21005;
var statearr_21010_21023 = state_21005__$1;
(statearr_21010_21023[(2)] = null);

(statearr_21010_21023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (4))){
var inst_21003 = (state_21005[(2)]);
var state_21005__$1 = state_21005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21005__$1,inst_21003);
} else {
if((state_val_21006 === (5))){
var inst_20992 = (state_21005[(8)]);
var inst_20990 = (state_21005[(2)]);
var inst_20991 = cljs.core.__destructure_map.call(null,inst_20990);
var inst_20992__$1 = cljs.core.get.call(null,inst_20991,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_20993 = cljs.core.get.call(null,inst_20991,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_20994 = cljs.core._EQ_.call(null,inst_20992__$1,(200));
var inst_20995 = (!(inst_20994));
var state_21005__$1 = (function (){var statearr_21011 = state_21005;
(statearr_21011[(8)] = inst_20992__$1);

(statearr_21011[(9)] = inst_20993);

return statearr_21011;
})();
if(inst_20995){
var statearr_21012_21024 = state_21005__$1;
(statearr_21012_21024[(1)] = (6));

} else {
var statearr_21013_21025 = state_21005__$1;
(statearr_21013_21025[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (6))){
var inst_20984 = (state_21005[(7)]);
var inst_20992 = (state_21005[(8)]);
var inst_20997 = ["\"","Wrong gist path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20984),"\n","gist-id= ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gist_id),"\n","http status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20992),"\""].join('');
var state_21005__$1 = state_21005;
var statearr_21014_21026 = state_21005__$1;
(statearr_21014_21026[(2)] = inst_20997);

(statearr_21014_21026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (7))){
var inst_20993 = (state_21005[(9)]);
var state_21005__$1 = state_21005;
var statearr_21015_21027 = state_21005__$1;
(statearr_21015_21027[(2)] = inst_20993);

(statearr_21015_21027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (8))){
var inst_21000 = (state_21005[(2)]);
var state_21005__$1 = state_21005;
var statearr_21016_21028 = state_21005__$1;
(statearr_21016_21028[(2)] = inst_21000);

(statearr_21016_21028[(1)] = (4));


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
var klipse$utils$read_input_from_gist_$_state_machine__15523__auto__ = null;
var klipse$utils$read_input_from_gist_$_state_machine__15523__auto____0 = (function (){
var statearr_21017 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21017[(0)] = klipse$utils$read_input_from_gist_$_state_machine__15523__auto__);

(statearr_21017[(1)] = (1));

return statearr_21017;
});
var klipse$utils$read_input_from_gist_$_state_machine__15523__auto____1 = (function (state_21005){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_21005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e21018){if((e21018 instanceof Object)){
var ex__15526__auto__ = e21018;
var statearr_21019_21029 = state_21005;
(statearr_21019_21029[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21030 = state_21005;
state_21005 = G__21030;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$utils$read_input_from_gist_$_state_machine__15523__auto__ = function(state_21005){
switch(arguments.length){
case 0:
return klipse$utils$read_input_from_gist_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$utils$read_input_from_gist_$_state_machine__15523__auto____1.call(this,state_21005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$read_input_from_gist_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$read_input_from_gist_$_state_machine__15523__auto____0;
klipse$utils$read_input_from_gist_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$read_input_from_gist_$_state_machine__15523__auto____1;
return klipse$utils$read_input_from_gist_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_21020 = f__15620__auto__.call(null);
(statearr_21020[(6)] = c__15619__auto__);

return statearr_21020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
});
klipse.utils.runonce = (function klipse$utils$runonce(f){
var ran = cljs.core.atom.call(null,false);
return (function() { 
var G__21031__delegate = function (args){
if(cljs.core.truth_(cljs.core.deref.call(null,ran))){
return null;
} else {
cljs.core.reset_BANG_.call(null,ran,true);

return cljs.core.apply.call(null,f,args);
}
};
var G__21031 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21032__i = 0, G__21032__a = new Array(arguments.length -  0);
while (G__21032__i < G__21032__a.length) {G__21032__a[G__21032__i] = arguments[G__21032__i + 0]; ++G__21032__i;}
  args = new cljs.core.IndexedSeq(G__21032__a,0,null);
} 
return G__21031__delegate.call(this,args);};
G__21031.cljs$lang$maxFixedArity = 0;
G__21031.cljs$lang$applyTo = (function (arglist__21033){
var args = cljs.core.seq(arglist__21033);
return G__21031__delegate(args);
});
G__21031.cljs$core$IFn$_invoke$arity$variadic = G__21031__delegate;
return G__21031;
})()
;
});
/**
 * Returns a function that will run `f` only once.
 *   If `f` succeeds (returns [:ok & args]), on subsequent calls it will return [:ok].
 *   `f` must return a channel.
 */
klipse.utils.runonce_async = (function klipse$utils$runonce_async(f){
var ran = cljs.core.atom.call(null,false);
return (function() { 
var G__21070__delegate = function (args){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_21054){
var state_val_21055 = (state_21054[(1)]);
if((state_val_21055 === (1))){
var inst_21034 = cljs.core.deref.call(null,ran);
var inst_21035 = cljs.core.not.call(null,inst_21034);
var state_21054__$1 = state_21054;
if(inst_21035){
var statearr_21056_21071 = state_21054__$1;
(statearr_21056_21071[(1)] = (2));

} else {
var statearr_21057_21072 = state_21054__$1;
(statearr_21057_21072[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (2))){
var inst_21037 = cljs.core.apply.call(null,f,args);
var state_21054__$1 = state_21054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21054__$1,(5),inst_21037);
} else {
if((state_val_21055 === (3))){
var inst_21048 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21049 = [new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_21050 = (new cljs.core.PersistentVector(null,1,(5),inst_21048,inst_21049,null));
var state_21054__$1 = state_21054;
var statearr_21058_21073 = state_21054__$1;
(statearr_21058_21073[(2)] = inst_21050);

(statearr_21058_21073[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (4))){
var inst_21052 = (state_21054[(2)]);
var state_21054__$1 = state_21054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21054__$1,inst_21052);
} else {
if((state_val_21055 === (5))){
var inst_21039 = (state_21054[(7)]);
var inst_21039__$1 = (state_21054[(2)]);
var inst_21040 = cljs.core.first.call(null,inst_21039__$1);
var inst_21041 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_21040);
var state_21054__$1 = (function (){var statearr_21059 = state_21054;
(statearr_21059[(7)] = inst_21039__$1);

return statearr_21059;
})();
if(inst_21041){
var statearr_21060_21074 = state_21054__$1;
(statearr_21060_21074[(1)] = (6));

} else {
var statearr_21061_21075 = state_21054__$1;
(statearr_21061_21075[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (6))){
var inst_21043 = cljs.core.reset_BANG_.call(null,ran,true);
var state_21054__$1 = state_21054;
var statearr_21062_21076 = state_21054__$1;
(statearr_21062_21076[(2)] = inst_21043);

(statearr_21062_21076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (7))){
var state_21054__$1 = state_21054;
var statearr_21063_21077 = state_21054__$1;
(statearr_21063_21077[(2)] = null);

(statearr_21063_21077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21055 === (8))){
var inst_21039 = (state_21054[(7)]);
var inst_21046 = (state_21054[(2)]);
var state_21054__$1 = (function (){var statearr_21064 = state_21054;
(statearr_21064[(8)] = inst_21046);

return statearr_21064;
})();
var statearr_21065_21078 = state_21054__$1;
(statearr_21065_21078[(2)] = inst_21039);

(statearr_21065_21078[(1)] = (4));


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
var klipse$utils$runonce_async_$_state_machine__15523__auto__ = null;
var klipse$utils$runonce_async_$_state_machine__15523__auto____0 = (function (){
var statearr_21066 = [null,null,null,null,null,null,null,null,null];
(statearr_21066[(0)] = klipse$utils$runonce_async_$_state_machine__15523__auto__);

(statearr_21066[(1)] = (1));

return statearr_21066;
});
var klipse$utils$runonce_async_$_state_machine__15523__auto____1 = (function (state_21054){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_21054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e21067){if((e21067 instanceof Object)){
var ex__15526__auto__ = e21067;
var statearr_21068_21079 = state_21054;
(statearr_21068_21079[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21080 = state_21054;
state_21054 = G__21080;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$utils$runonce_async_$_state_machine__15523__auto__ = function(state_21054){
switch(arguments.length){
case 0:
return klipse$utils$runonce_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$utils$runonce_async_$_state_machine__15523__auto____1.call(this,state_21054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$runonce_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$runonce_async_$_state_machine__15523__auto____0;
klipse$utils$runonce_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$runonce_async_$_state_machine__15523__auto____1;
return klipse$utils$runonce_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_21069 = f__15620__auto__.call(null);
(statearr_21069[(6)] = c__15619__auto__);

return statearr_21069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
};
var G__21070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21081__i = 0, G__21081__a = new Array(arguments.length -  0);
while (G__21081__i < G__21081__a.length) {G__21081__a[G__21081__i] = arguments[G__21081__i + 0]; ++G__21081__i;}
  args = new cljs.core.IndexedSeq(G__21081__a,0,null);
} 
return G__21070__delegate.call(this,args);};
G__21070.cljs$lang$maxFixedArity = 0;
G__21070.cljs$lang$applyTo = (function (arglist__21082){
var args = cljs.core.seq(arglist__21082);
return G__21070__delegate(args);
});
G__21070.cljs$core$IFn$_invoke$arity$variadic = G__21070__delegate;
return G__21070;
})()
;
});
/**
 * Returns a memoized version of f.
 *   If `f` succeeds (returns [:ok & args]), on subsequent calls it will return the cached results.
 *   `f` must return a channel.
 */
klipse.utils.memoize_async = (function klipse$utils$memoize_async(f){
var ran = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return (function() { 
var G__21119__delegate = function (args){
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_21103){
var state_val_21104 = (state_21103[(1)]);
if((state_val_21104 === (1))){
var inst_21083 = cljs.core.deref.call(null,ran);
var inst_21084 = cljs.core.contains_QMARK_.call(null,inst_21083,args);
var inst_21085 = (!(inst_21084));
var state_21103__$1 = state_21103;
if(inst_21085){
var statearr_21105_21120 = state_21103__$1;
(statearr_21105_21120[(1)] = (2));

} else {
var statearr_21106_21121 = state_21103__$1;
(statearr_21106_21121[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21104 === (2))){
var inst_21087 = cljs.core.apply.call(null,f,args);
var state_21103__$1 = state_21103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21103__$1,(5),inst_21087);
} else {
if((state_val_21104 === (3))){
var inst_21098 = cljs.core.deref.call(null,ran);
var inst_21099 = cljs.core.get.call(null,inst_21098,args);
var state_21103__$1 = state_21103;
var statearr_21107_21122 = state_21103__$1;
(statearr_21107_21122[(2)] = inst_21099);

(statearr_21107_21122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21104 === (4))){
var inst_21101 = (state_21103[(2)]);
var state_21103__$1 = state_21103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21103__$1,inst_21101);
} else {
if((state_val_21104 === (5))){
var inst_21089 = (state_21103[(7)]);
var inst_21089__$1 = (state_21103[(2)]);
var inst_21090 = cljs.core.first.call(null,inst_21089__$1);
var inst_21091 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_21090);
var state_21103__$1 = (function (){var statearr_21108 = state_21103;
(statearr_21108[(7)] = inst_21089__$1);

return statearr_21108;
})();
if(inst_21091){
var statearr_21109_21123 = state_21103__$1;
(statearr_21109_21123[(1)] = (6));

} else {
var statearr_21110_21124 = state_21103__$1;
(statearr_21110_21124[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21104 === (6))){
var inst_21089 = (state_21103[(7)]);
var inst_21093 = cljs.core.swap_BANG_.call(null,ran,cljs.core.assoc,args,inst_21089);
var state_21103__$1 = state_21103;
var statearr_21111_21125 = state_21103__$1;
(statearr_21111_21125[(2)] = inst_21093);

(statearr_21111_21125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21104 === (7))){
var state_21103__$1 = state_21103;
var statearr_21112_21126 = state_21103__$1;
(statearr_21112_21126[(2)] = null);

(statearr_21112_21126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21104 === (8))){
var inst_21089 = (state_21103[(7)]);
var inst_21096 = (state_21103[(2)]);
var state_21103__$1 = (function (){var statearr_21113 = state_21103;
(statearr_21113[(8)] = inst_21096);

return statearr_21113;
})();
var statearr_21114_21127 = state_21103__$1;
(statearr_21114_21127[(2)] = inst_21089);

(statearr_21114_21127[(1)] = (4));


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
var klipse$utils$memoize_async_$_state_machine__15523__auto__ = null;
var klipse$utils$memoize_async_$_state_machine__15523__auto____0 = (function (){
var statearr_21115 = [null,null,null,null,null,null,null,null,null];
(statearr_21115[(0)] = klipse$utils$memoize_async_$_state_machine__15523__auto__);

(statearr_21115[(1)] = (1));

return statearr_21115;
});
var klipse$utils$memoize_async_$_state_machine__15523__auto____1 = (function (state_21103){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_21103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e21116){if((e21116 instanceof Object)){
var ex__15526__auto__ = e21116;
var statearr_21117_21128 = state_21103;
(statearr_21117_21128[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21129 = state_21103;
state_21103 = G__21129;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$utils$memoize_async_$_state_machine__15523__auto__ = function(state_21103){
switch(arguments.length){
case 0:
return klipse$utils$memoize_async_$_state_machine__15523__auto____0.call(this);
case 1:
return klipse$utils$memoize_async_$_state_machine__15523__auto____1.call(this,state_21103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$memoize_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$memoize_async_$_state_machine__15523__auto____0;
klipse$utils$memoize_async_$_state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$memoize_async_$_state_machine__15523__auto____1;
return klipse$utils$memoize_async_$_state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_21118 = f__15620__auto__.call(null);
(statearr_21118[(6)] = c__15619__auto__);

return statearr_21118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
};
var G__21119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21130__i = 0, G__21130__a = new Array(arguments.length -  0);
while (G__21130__i < G__21130__a.length) {G__21130__a[G__21130__i] = arguments[G__21130__i + 0]; ++G__21130__i;}
  args = new cljs.core.IndexedSeq(G__21130__a,0,null);
} 
return G__21119__delegate.call(this,args);};
G__21119.cljs$lang$maxFixedArity = 0;
G__21119.cljs$lang$applyTo = (function (arglist__21131){
var args = cljs.core.seq(arglist__21131);
return G__21119__delegate(args);
});
G__21119.cljs$core$IFn$_invoke$arity$variadic = G__21119__delegate;
return G__21119;
})()
;
});
klipse.utils.default_permitted_symbols = (function klipse$utils$default_permitted_symbols(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["console","setTimeout","setInterval","Math","Date"], null);
});
klipse.utils.default_forbidden_symbols = (function klipse$utils$default_forbidden_symbols(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["document","XMLHttpRequest","eval","window","Function"], null);
});
klipse.utils.secured_eval = false;
klipse.utils.eval_in_global_scope = eval;
klipse.utils.securize_eval_BANG__STAR_ = (function klipse$utils$securize_eval_BANG__STAR_(the_forbidden_symbols){
(klipse.utils.secured_eval = true);

var original_eval = eval;
var obj21132_21144 = window;
var obj21133_21145 = (((!((obj21132_21144 == null))))?obj21132_21144:({}));
(obj21133_21145["eval"] = (function (src){
return original_eval.call(null,["with (klipse_eval_sandbox){ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"}"].join(''));
}));


(klipse.utils.eval_in_global_scope = eval);

var obj21136_21146 = window;
var obj21137_21147 = (((!((obj21136_21146 == null))))?obj21136_21146:({}));
(obj21137_21147["klipse_unsecured_eval"] = original_eval);


var obj21140 = window;
var obj21141 = (((!((obj21140 == null))))?obj21140:({}));
(obj21141["klipse_eval_sandbox"] = cljs.core.clj__GT_js.call(null,cljs.core.zipmap.call(null,the_forbidden_symbols,cljs.core.repeat.call(null,cljs.core.PersistentArrayMap.EMPTY))));

return obj21141;
});
klipse.utils.securize_eval_BANG_ = klipse.utils.runonce.call(null,klipse.utils.securize_eval_BANG__STAR_);
klipse.utils.setup_container_BANG_ = (function klipse$utils$setup_container_BANG_(container_id){
if(klipse.utils.secured_eval){
return null;
} else {
(window["klipse_container"] = document.getElementById(container_id));

return (window["klipse_container_id"] = container_id);
}
});
klipse.utils.unsecured_eval_in_global_scope = (function klipse$utils$unsecured_eval_in_global_scope(s){
return (function (){var or__5043__auto__ = (function (){var obj21148 = window;
var k21149 = "klipse_unsecured_eval";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21148,k21149)){
return (obj21148[k21149]);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return eval;
}
})().call(null,s);
});
klipse.utils.load_script = (function klipse$utils$load_script(var_args){
var args__5772__auto__ = [];
var len__5766__auto___21203 = arguments.length;
var i__5767__auto___21204 = (0);
while(true){
if((i__5767__auto___21204 < len__5766__auto___21203)){
args__5772__auto__.push((arguments[i__5767__auto___21204]));

var G__21205 = (i__5767__auto___21204 + (1));
i__5767__auto___21204 = G__21205;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return klipse.utils.load_script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(klipse.utils.load_script.cljs$core$IFn$_invoke$arity$variadic = (function (script,p__21152){
var map__21153 = p__21152;
var map__21153__$1 = cljs.core.__destructure_map.call(null,map__21153);
var secured_eval_QMARK_ = cljs.core.get.call(null,map__21153__$1,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),false);
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_21185){
var state_val_21186 = (state_21185[(1)]);
if((state_val_21186 === (1))){
var inst_21154 = console.info("loading:",script);
var inst_21156 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_21157 = [false];
var inst_21158 = cljs.core.PersistentHashMap.fromArrays(inst_21156,inst_21157);
var inst_21159 = cljs_http.client.get.call(null,script,inst_21158);
var state_21185__$1 = (function (){var statearr_21187 = state_21185;
(statearr_21187[(7)] = inst_21154);

return statearr_21187;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21185__$1,(2),inst_21159);
} else {
if((state_val_21186 === (2))){
var inst_21163 = (state_21185[(8)]);
var inst_21161 = (state_21185[(2)]);
var inst_21162 = cljs.core.__destructure_map.call(null,inst_21161);
var inst_21163__$1 = cljs.core.get.call(null,inst_21162,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_21164 = cljs.core.get.call(null,inst_21162,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_21165 = cljs.core._EQ_.call(null,(200),inst_21163__$1);
var state_21185__$1 = (function (){var statearr_21188 = state_21185;
(statearr_21188[(9)] = inst_21164);

(statearr_21188[(8)] = inst_21163__$1);

return statearr_21188;
})();
if(inst_21165){
var statearr_21189_21206 = state_21185__$1;
(statearr_21189_21206[(1)] = (3));

} else {
var statearr_21190_21207 = state_21185__$1;
(statearr_21190_21207[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21186 === (3))){
var inst_21167 = console.info("evaluating:",script);
var state_21185__$1 = (function (){var statearr_21191 = state_21185;
(statearr_21191[(10)] = inst_21167);

return statearr_21191;
})();
if(cljs.core.truth_(secured_eval_QMARK_)){
var statearr_21192_21208 = state_21185__$1;
(statearr_21192_21208[(1)] = (6));

} else {
var statearr_21193_21209 = state_21185__$1;
(statearr_21193_21209[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21186 === (4))){
var inst_21163 = (state_21185[(8)]);
var inst_21179 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21180 = [inst_21163,script];
var inst_21181 = (new cljs.core.PersistentVector(null,2,(5),inst_21179,inst_21180,null));
var state_21185__$1 = state_21185;
var statearr_21194_21210 = state_21185__$1;
(statearr_21194_21210[(2)] = inst_21181);

(statearr_21194_21210[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21186 === (5))){
var inst_21183 = (state_21185[(2)]);
var state_21185__$1 = state_21185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21185__$1,inst_21183);
} else {
if((state_val_21186 === (6))){
var inst_21164 = (state_21185[(9)]);
var inst_21169 = klipse.utils.eval_in_global_scope.call(null,inst_21164);
var state_21185__$1 = state_21185;
var statearr_21195_21211 = state_21185__$1;
(statearr_21195_21211[(2)] = inst_21169);

(statearr_21195_21211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21186 === (7))){
var inst_21164 = (state_21185[(9)]);
var inst_21171 = klipse.utils.unsecured_eval_in_global_scope.call(null,inst_21164);
var state_21185__$1 = state_21185;
var statearr_21196_21212 = state_21185__$1;
(statearr_21196_21212[(2)] = inst_21171);

(statearr_21196_21212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21186 === (8))){
var inst_21173 = (state_21185[(2)]);
var inst_21174 = console.info("evaluation done:",script);
var inst_21175 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21176 = [new cljs.core.Keyword(null,"ok","ok",967785236),script];
var inst_21177 = (new cljs.core.PersistentVector(null,2,(5),inst_21175,inst_21176,null));
var state_21185__$1 = (function (){var statearr_21197 = state_21185;
(statearr_21197[(11)] = inst_21173);

(statearr_21197[(12)] = inst_21174);

return statearr_21197;
})();
var statearr_21198_21213 = state_21185__$1;
(statearr_21198_21213[(2)] = inst_21177);

(statearr_21198_21213[(1)] = (5));


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
var klipse$utils$state_machine__15523__auto__ = null;
var klipse$utils$state_machine__15523__auto____0 = (function (){
var statearr_21199 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21199[(0)] = klipse$utils$state_machine__15523__auto__);

(statearr_21199[(1)] = (1));

return statearr_21199;
});
var klipse$utils$state_machine__15523__auto____1 = (function (state_21185){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_21185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e21200){if((e21200 instanceof Object)){
var ex__15526__auto__ = e21200;
var statearr_21201_21214 = state_21185;
(statearr_21201_21214[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21215 = state_21185;
state_21185 = G__21215;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$utils$state_machine__15523__auto__ = function(state_21185){
switch(arguments.length){
case 0:
return klipse$utils$state_machine__15523__auto____0.call(this);
case 1:
return klipse$utils$state_machine__15523__auto____1.call(this,state_21185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$state_machine__15523__auto____0;
klipse$utils$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$state_machine__15523__auto____1;
return klipse$utils$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_21202 = f__15620__auto__.call(null);
(statearr_21202[(6)] = c__15619__auto__);

return statearr_21202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
}));

(klipse.utils.load_script.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(klipse.utils.load_script.cljs$lang$applyTo = (function (seq21150){
var G__21151 = cljs.core.first.call(null,seq21150);
var seq21150__$1 = cljs.core.next.call(null,seq21150);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21151,seq21150__$1);
}));

klipse.utils.load_script_mem = klipse.utils.memoize_async.call(null,klipse.utils.load_script);
klipse.utils.load_scripts = (function klipse$utils$load_scripts(var_args){
var args__5772__auto__ = [];
var len__5766__auto___21273 = arguments.length;
var i__5767__auto___21274 = (0);
while(true){
if((i__5767__auto___21274 < len__5766__auto___21273)){
args__5772__auto__.push((arguments[i__5767__auto___21274]));

var G__21275 = (i__5767__auto___21274 + (1));
i__5767__auto___21274 = G__21275;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return klipse.utils.load_scripts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(klipse.utils.load_scripts.cljs$core$IFn$_invoke$arity$variadic = (function (scripts,p__21218){
var map__21219 = p__21218;
var map__21219__$1 = cljs.core.__destructure_map.call(null,map__21219);
var secured_eval_QMARK_ = cljs.core.get.call(null,map__21219__$1,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),false);
var c__15619__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__15620__auto__ = (function (){var switch__15522__auto__ = (function (state_21253){
var state_val_21254 = (state_21253[(1)]);
if((state_val_21254 === (7))){
var inst_21232 = (state_21253[(7)]);
var inst_21231 = (state_21253[(2)]);
var inst_21232__$1 = cljs.core.nth.call(null,inst_21231,(0),null);
var inst_21233 = cljs.core.nth.call(null,inst_21231,(1),null);
var inst_21234 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),inst_21232__$1);
var state_21253__$1 = (function (){var statearr_21255 = state_21253;
(statearr_21255[(7)] = inst_21232__$1);

(statearr_21255[(8)] = inst_21233);

return statearr_21255;
})();
if(inst_21234){
var statearr_21256_21276 = state_21253__$1;
(statearr_21256_21276[(1)] = (8));

} else {
var statearr_21257_21277 = state_21253__$1;
(statearr_21257_21277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (1))){
var inst_21220 = scripts;
var state_21253__$1 = (function (){var statearr_21258 = state_21253;
(statearr_21258[(9)] = inst_21220);

return statearr_21258;
})();
var statearr_21259_21278 = state_21253__$1;
(statearr_21259_21278[(2)] = null);

(statearr_21259_21278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (4))){
var inst_21220 = (state_21253[(9)]);
var inst_21227 = cljs.core.first.call(null,inst_21220);
var inst_21228 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21227);
var inst_21229 = klipse.utils.load_script_mem.call(null,inst_21228,new cljs.core.Keyword(null,"secured-eval?","secured-eval?",-922170059),secured_eval_QMARK_);
var state_21253__$1 = state_21253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21253__$1,(7),inst_21229);
} else {
if((state_val_21254 === (6))){
var inst_21249 = (state_21253[(2)]);
var state_21253__$1 = state_21253;
var statearr_21260_21279 = state_21253__$1;
(statearr_21260_21279[(2)] = inst_21249);

(statearr_21260_21279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (3))){
var inst_21251 = (state_21253[(2)]);
var state_21253__$1 = state_21253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21253__$1,inst_21251);
} else {
if((state_val_21254 === (2))){
var inst_21220 = (state_21253[(9)]);
var inst_21222 = cljs.core.seq.call(null,inst_21220);
var state_21253__$1 = state_21253;
if(inst_21222){
var statearr_21261_21280 = state_21253__$1;
(statearr_21261_21280[(1)] = (4));

} else {
var statearr_21262_21281 = state_21253__$1;
(statearr_21262_21281[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (9))){
var state_21253__$1 = state_21253;
var statearr_21263_21282 = state_21253__$1;
(statearr_21263_21282[(2)] = null);

(statearr_21263_21282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (5))){
var inst_21245 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21246 = [new cljs.core.Keyword(null,"ok","ok",967785236)];
var inst_21247 = (new cljs.core.PersistentVector(null,1,(5),inst_21245,inst_21246,null));
var state_21253__$1 = state_21253;
var statearr_21264_21283 = state_21253__$1;
(statearr_21264_21283[(2)] = inst_21247);

(statearr_21264_21283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (10))){
var inst_21232 = (state_21253[(7)]);
var inst_21233 = (state_21253[(8)]);
var inst_21240 = (state_21253[(2)]);
var inst_21241 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21242 = [inst_21232,inst_21233];
var inst_21243 = (new cljs.core.PersistentVector(null,2,(5),inst_21241,inst_21242,null));
var state_21253__$1 = (function (){var statearr_21265 = state_21253;
(statearr_21265[(10)] = inst_21240);

return statearr_21265;
})();
var statearr_21266_21284 = state_21253__$1;
(statearr_21266_21284[(2)] = inst_21243);

(statearr_21266_21284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21254 === (8))){
var inst_21220 = (state_21253[(9)]);
var inst_21236 = cljs.core.rest.call(null,inst_21220);
var inst_21220__$1 = inst_21236;
var state_21253__$1 = (function (){var statearr_21267 = state_21253;
(statearr_21267[(9)] = inst_21220__$1);

return statearr_21267;
})();
var statearr_21268_21285 = state_21253__$1;
(statearr_21268_21285[(2)] = null);

(statearr_21268_21285[(1)] = (2));


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
});
return (function() {
var klipse$utils$state_machine__15523__auto__ = null;
var klipse$utils$state_machine__15523__auto____0 = (function (){
var statearr_21269 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21269[(0)] = klipse$utils$state_machine__15523__auto__);

(statearr_21269[(1)] = (1));

return statearr_21269;
});
var klipse$utils$state_machine__15523__auto____1 = (function (state_21253){
while(true){
var ret_value__15524__auto__ = (function (){try{while(true){
var result__15525__auto__ = switch__15522__auto__.call(null,state_21253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15525__auto__;
}
break;
}
}catch (e21270){if((e21270 instanceof Object)){
var ex__15526__auto__ = e21270;
var statearr_21271_21286 = state_21253;
(statearr_21271_21286[(5)] = ex__15526__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21287 = state_21253;
state_21253 = G__21287;
continue;
} else {
return ret_value__15524__auto__;
}
break;
}
});
klipse$utils$state_machine__15523__auto__ = function(state_21253){
switch(arguments.length){
case 0:
return klipse$utils$state_machine__15523__auto____0.call(this);
case 1:
return klipse$utils$state_machine__15523__auto____1.call(this,state_21253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$utils$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$utils$state_machine__15523__auto____0;
klipse$utils$state_machine__15523__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$utils$state_machine__15523__auto____1;
return klipse$utils$state_machine__15523__auto__;
})()
})();
var state__15621__auto__ = (function (){var statearr_21272 = f__15620__auto__.call(null);
(statearr_21272[(6)] = c__15619__auto__);

return statearr_21272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15621__auto__);
}));

return c__15619__auto__;
}));

(klipse.utils.load_scripts.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(klipse.utils.load_scripts.cljs$lang$applyTo = (function (seq21216){
var G__21217 = cljs.core.first.call(null,seq21216);
var seq21216__$1 = cljs.core.next.call(null,seq21216);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21217,seq21216__$1);
}));

klipse.utils.load_scripts_mem = klipse.utils.memoize_async.call(null,klipse.utils.load_scripts);
klipse.utils.verbose_QMARK_ = (function klipse$utils$verbose_QMARK_(){
return cljs.core.boolean$.call(null,cljs.reader.read_string.call(null,(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "false";
}
})()));
});
klipse.utils.klipse_settings_STAR_ = (function klipse$utils$klipse_settings_STAR_(){
var w = (((typeof window !== 'undefined'))?window:({}));
return cljs.core.js__GT_clj.call(null,(w["klipse_settings"]),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
klipse.utils.klipse_settings = cljs.core.memoize.call(null,klipse.utils.klipse_settings_STAR_);
klipse.utils.add_script_tag_BANG_ = (function klipse$utils$add_script_tag_BANG_(url){
var c = cljs.core.async.chan.call(null);
var node = document.createElement("script");
var body = (document["body"]);
(node["src"] = url);

(node["onerror"] = (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),url], null));
}));

(node["onload"] = (function (){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),url], null));
}));

(node["type"] = "text/javascript");

var obj__20025__auto___21290 = body;
var f__20026__auto___21291 = (function (){var obj21288 = obj__20025__auto___21290;
var k21289 = "appendChild";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21288,k21289)){
return (obj21288[k21289]);
} else {
return null;
}
})();
f__20026__auto___21291.call(obj__20025__auto___21290,node);

return c;
});
klipse.utils.add_script_tag_once_BANG_ = klipse.utils.runonce.call(null,klipse.utils.add_script_tag_BANG_);

//# sourceMappingURL=utils.js.map

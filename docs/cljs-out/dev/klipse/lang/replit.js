// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.replit');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('applied_science.js_interop');
klipse.lang.replit.token = ({"msg_mac": "6GpVqi640U22dcEhfB5C58m0oqAWXuVZr+SQ4sBoTMQ=", "time_created": (1468951584000)});
klipse.lang.replit.init_repl_STAR_ = (function klipse$lang$replit$init_repl_STAR_(language){
return (new ReplitClient("api.repl.it",(80),language,klipse.lang.replit.token));
});
klipse.lang.replit.init_repl = cljs.core.memoize.call(null,klipse.lang.replit.init_repl_STAR_);
klipse.lang.replit.evaluate = (function klipse$lang$replit$evaluate(repl,c,exp){
return (function (){var obj__20025__auto__ = repl;
var f__20026__auto__ = (function (){var obj30070 = obj__20025__auto__;
var k30071 = "evaluate";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30070,k30071)){
return (obj30070[k30071]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,exp,({"stdout": (function (output){
return cljs.core.async.put_BANG_.call(null,c,output);
})}));
})().then((function (result){
if(cljs.core.empty_QMARK_.call(null,(function (){var obj30072 = result;
var k30073 = "error";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30072,k30073)){
return (obj30072[k30073]);
} else {
return null;
}
})())){
return cljs.core.async.put_BANG_.call(null,c,["Result: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj30076 = result;
var k30077 = "data";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30076,k30077)){
return (obj30076[k30077]);
} else {
return null;
}
})()),"\n"].join(''));
} else {
return cljs.core.async.put_BANG_.call(null,c,["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj30080 = result;
var k30081 = "error";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30080,k30081)){
return (obj30080[k30081]);
} else {
return null;
}
})()),"\n"].join(''));
}
}),(function (error){
return cljs.core.async.put_BANG_.call(null,c,error);
}));
});
klipse.lang.replit.connect_and_evaluate = (function klipse$lang$replit$connect_and_evaluate(language,exp){
var c = cljs.core.async.chan.call(null);
var repl = klipse.lang.replit.init_repl.call(null,language);
(function (){var obj__20025__auto__ = repl;
var f__20026__auto__ = (function (){var obj30082 = obj__20025__auto__;
var k30083 = "connect";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj30082,k30083)){
return (obj30082[k30083]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__);
})().then(cljs.core.partial.call(null,klipse.lang.replit.evaluate,repl,c,exp));

return c;
});

//# sourceMappingURL=replit.js.map

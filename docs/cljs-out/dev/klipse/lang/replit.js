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
return (function (){var obj__17203__auto__ = repl;
var f__17204__auto__ = (function (){var obj21299 = obj__17203__auto__;
var k21300 = "evaluate";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21299,k21300)){
return (obj21299[k21300]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,exp,({"stdout": (function (output){
return cljs.core.async.put_BANG_.call(null,c,output);
})}));
})().then((function (result){
if(cljs.core.empty_QMARK_.call(null,(function (){var obj21301 = result;
var k21302 = "error";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21301,k21302)){
return (obj21301[k21302]);
} else {
return null;
}
})())){
return cljs.core.async.put_BANG_.call(null,c,["Result: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj21305 = result;
var k21306 = "data";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21305,k21306)){
return (obj21305[k21306]);
} else {
return null;
}
})()),"\n"].join(''));
} else {
return cljs.core.async.put_BANG_.call(null,c,["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var obj21309 = result;
var k21310 = "error";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21309,k21310)){
return (obj21309[k21310]);
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
(function (){var obj__17203__auto__ = repl;
var f__17204__auto__ = (function (){var obj21311 = obj__17203__auto__;
var k21312 = "connect";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj21311,k21312)){
return (obj21311[k21312]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__);
})().then(cljs.core.partial.call(null,klipse.lang.replit.evaluate,repl,c,exp));

return c;
});

//# sourceMappingURL=replit.js.map

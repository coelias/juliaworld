// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.python');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.python.builtin_read = (function klipse$lang$python$builtin_read(x){
if(((((function (){var obj33455 = Sk;
var k33456 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33455,k33456)){
return (obj33455[k33456]);
} else {
return null;
}
})() == null)) || ((((function (){var obj33459 = (function (){var obj33457 = Sk;
var k33458 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33457,k33458)){
return (obj33457[k33458]);
} else {
return null;
}
})();
var k33460 = "files";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33459,k33460)){
return (obj33459[k33460]);
} else {
return null;
}
})()[x]) == null)))){
throw ["File not found: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"'"].join('');
} else {
}

return ((function (){var obj33463 = (function (){var obj33461 = Sk;
var k33462 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33461,k33462)){
return (obj33461[k33462]);
} else {
return null;
}
})();
var k33464 = "files";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33463,k33464)){
return (obj33463[k33464]);
} else {
return null;
}
})()[x]);
});
klipse.lang.python.init = klipse.utils.runonce.call(null,(function (){
var obj33465 = Sk;
var obj33466 = (((!((obj33465 == null))))?obj33465:({}));
(obj33466["TurtleGraphics"] = ({}));

return obj33466;
}));
klipse.lang.python.str_eval_async = (function klipse$lang$python$str_eval_async(exp,p__33470){
var map__33471 = p__33470;
var map__33471__$1 = cljs.core.__destructure_map.call(null,map__33471);
var container_id = cljs.core.get.call(null,map__33471__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
klipse.lang.python.init.call(null);

var c = cljs.core.async.chan.call(null);
var obj__20025__auto___33490 = Sk;
var f__20026__auto___33491 = (function (){var obj33472 = obj__20025__auto___33490;
var k33473 = "configure";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33472,k33473)){
return (obj33472[k33473]);
} else {
return null;
}
})();
f__20026__auto___33491.call(obj__20025__auto___33490,({"output": (function (p1__33469_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__33469_SHARP_);
}), "read": klipse.lang.python.builtin_read, "retainglobals": true}));

(function (){var parent__20032__auto__ = (function (){var obj33474 = Sk;
var k33475 = "misceval";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33474,k33475)){
return (obj33474[k33475]);
} else {
return null;
}
})();
var f__20033__auto__ = (function (){var obj33476 = parent__20032__auto__;
var k33477 = "asyncToPromise";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33476,k33477)){
return (obj33476[k33477]);
} else {
return null;
}
})();
return f__20033__auto__.call(parent__20032__auto__,(function (){
cljs.core.async.put_BANG_.call(null,c,"Output:\n");

var obj33478_33492 = Sk;
var obj33478_33493__$1 = (((!((obj33478_33492 == null))))?obj33478_33492:({}));
var inner_obj__19998__auto___33494 = (function (){var child33479 = (obj33478_33493__$1["TurtleGraphics"]);
if((!((child33479 == null)))){
return child33479;
} else {
var new_child__19970__auto__ = ({});
var obj33484_33495 = obj33478_33493__$1;
(obj33484_33495["TurtleGraphics"] = new_child__19970__auto__);


return new_child__19970__auto__;
}
})();
var obj33485_33496 = inner_obj__19998__auto___33494;
(obj33485_33496["target"] = container_id);



var obj__20025__auto__ = Sk;
var f__20026__auto__ = (function (){var obj33486 = obj__20025__auto__;
var k33487 = "importMainWithBody";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33486,k33487)){
return (obj33486[k33487]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,"<stdin>",false,exp,true);
}));
})().then((function (mod){
var obj__20025__auto__ = console;
var f__20026__auto__ = (function (){var obj33488 = obj__20025__auto__;
var k33489 = "info";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33488,k33489)){
return (obj33488[k33489]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,"success to eval skulpt: ");
}),(function (err){
return cljs.core.async.put_BANG_.call(null,c,["error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join(''));
}));

return c;
});
klipse.lang.python.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"python",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.python.str_eval_async,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python"),klipse.common.registry.scripts_src.call(null,"skulpt.0.10.0.min.js"),klipse.common.registry.scripts_src.call(null,"skulpt-stdlib.0.10.0.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null);
klipse.common.registry.register_mode.call(null,"eval-python-client","selector_eval_python_client",klipse.lang.python.opts);

//# sourceMappingURL=python.js.map

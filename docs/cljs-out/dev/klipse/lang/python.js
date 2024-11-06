// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.python');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.python.builtin_read = (function klipse$lang$python$builtin_read(x){
if(((((function (){var obj31530 = Sk;
var k31531 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj31530,k31531)){
return (obj31530[k31531]);
} else {
return null;
}
})() == null)) || ((((function (){var obj31534 = (function (){var obj31532 = Sk;
var k31533 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj31532,k31533)){
return (obj31532[k31533]);
} else {
return null;
}
})();
var k31535 = "files";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj31534,k31535)){
return (obj31534[k31535]);
} else {
return null;
}
})()[x]) == null)))){
throw ["File not found: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"'"].join('');
} else {
}

return ((function (){var obj31538 = (function (){var obj31536 = Sk;
var k31537 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj31536,k31537)){
return (obj31536[k31537]);
} else {
return null;
}
})();
var k31539 = "files";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj31538,k31539)){
return (obj31538[k31539]);
} else {
return null;
}
})()[x]);
});
klipse.lang.python.init = klipse.utils.runonce.call(null,(function (){
var obj31540 = Sk;
var obj31541 = (((!((obj31540 == null))))?obj31540:({}));
(obj31541["TurtleGraphics"] = ({}));

return obj31541;
}));
klipse.lang.python.str_eval_async = (function klipse$lang$python$str_eval_async(exp,p__31545){
var map__31546 = p__31545;
var map__31546__$1 = cljs.core.__destructure_map.call(null,map__31546);
var container_id = cljs.core.get.call(null,map__31546__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
klipse.lang.python.init.call(null);

var c = cljs.core.async.chan.call(null);
var obj__17203__auto___31565 = Sk;
var f__17204__auto___31566 = (function (){var obj31547 = obj__17203__auto___31565;
var k31548 = "configure";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj31547,k31548)){
return (obj31547[k31548]);
} else {
return null;
}
})();
f__17204__auto___31566.call(obj__17203__auto___31565,({"output": (function (p1__31544_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__31544_SHARP_);
}), "read": klipse.lang.python.builtin_read, "retainglobals": true}));

(function (){var parent__17210__auto__ = (function (){var obj31549 = Sk;
var k31550 = "misceval";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj31549,k31550)){
return (obj31549[k31550]);
} else {
return null;
}
})();
var f__17211__auto__ = (function (){var obj31551 = parent__17210__auto__;
var k31552 = "asyncToPromise";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj31551,k31552)){
return (obj31551[k31552]);
} else {
return null;
}
})();
return f__17211__auto__.call(parent__17210__auto__,(function (){
cljs.core.async.put_BANG_.call(null,c,"Output:\n");

var obj31553_31567 = Sk;
var obj31553_31568__$1 = (((!((obj31553_31567 == null))))?obj31553_31567:({}));
var inner_obj__17176__auto___31569 = (function (){var child31554 = (obj31553_31568__$1["TurtleGraphics"]);
if((!((child31554 == null)))){
return child31554;
} else {
var new_child__17148__auto__ = ({});
var obj31559_31570 = obj31553_31568__$1;
(obj31559_31570["TurtleGraphics"] = new_child__17148__auto__);


return new_child__17148__auto__;
}
})();
var obj31560_31571 = inner_obj__17176__auto___31569;
(obj31560_31571["target"] = container_id);



var obj__17203__auto__ = Sk;
var f__17204__auto__ = (function (){var obj31561 = obj__17203__auto__;
var k31562 = "importMainWithBody";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj31561,k31562)){
return (obj31561[k31562]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,"<stdin>",false,exp,true);
}));
})().then((function (mod){
var obj__17203__auto__ = console;
var f__17204__auto__ = (function (){var obj31563 = obj__17203__auto__;
var k31564 = "info";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj31563,k31564)){
return (obj31563[k31564]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,"success to eval skulpt: ");
}),(function (err){
return cljs.core.async.put_BANG_.call(null,c,["error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join(''));
}));

return c;
});
klipse.lang.python.opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"python",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"python",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.python.str_eval_async,new cljs.core.Keyword(null,"beautify?","beautify?",1909100619),false,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"python"),klipse.common.registry.scripts_src.call(null,"skulpt.0.10.0.min.js"),klipse.common.registry.scripts_src.call(null,"skulpt-stdlib.0.10.0.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),"#"], null);
klipse.common.registry.register_mode.call(null,"eval-python-client","selector_eval_python_client",klipse.lang.python.opts);

//# sourceMappingURL=python.js.map

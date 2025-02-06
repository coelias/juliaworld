// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.python');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.python.builtin_read = (function klipse$lang$python$builtin_read(x){
if(((((function (){var obj33043 = Sk;
var k33044 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33043,k33044)){
return (obj33043[k33044]);
} else {
return null;
}
})() == null)) || ((((function (){var obj33047 = (function (){var obj33045 = Sk;
var k33046 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33045,k33046)){
return (obj33045[k33046]);
} else {
return null;
}
})();
var k33048 = "files";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33047,k33048)){
return (obj33047[k33048]);
} else {
return null;
}
})()[x]) == null)))){
throw ["File not found: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"'"].join('');
} else {
}

return ((function (){var obj33051 = (function (){var obj33049 = Sk;
var k33050 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33049,k33050)){
return (obj33049[k33050]);
} else {
return null;
}
})();
var k33052 = "files";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33051,k33052)){
return (obj33051[k33052]);
} else {
return null;
}
})()[x]);
});
klipse.lang.python.init = klipse.utils.runonce.call(null,(function (){
var obj33053 = Sk;
var obj33054 = (((!((obj33053 == null))))?obj33053:({}));
(obj33054["TurtleGraphics"] = ({}));

return obj33054;
}));
klipse.lang.python.str_eval_async = (function klipse$lang$python$str_eval_async(exp,p__33058){
var map__33059 = p__33058;
var map__33059__$1 = cljs.core.__destructure_map.call(null,map__33059);
var container_id = cljs.core.get.call(null,map__33059__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
klipse.lang.python.init.call(null);

var c = cljs.core.async.chan.call(null);
var obj__20025__auto___33078 = Sk;
var f__20026__auto___33079 = (function (){var obj33060 = obj__20025__auto___33078;
var k33061 = "configure";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33060,k33061)){
return (obj33060[k33061]);
} else {
return null;
}
})();
f__20026__auto___33079.call(obj__20025__auto___33078,({"output": (function (p1__33057_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__33057_SHARP_);
}), "read": klipse.lang.python.builtin_read, "retainglobals": true}));

(function (){var parent__20032__auto__ = (function (){var obj33062 = Sk;
var k33063 = "misceval";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33062,k33063)){
return (obj33062[k33063]);
} else {
return null;
}
})();
var f__20033__auto__ = (function (){var obj33064 = parent__20032__auto__;
var k33065 = "asyncToPromise";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33064,k33065)){
return (obj33064[k33065]);
} else {
return null;
}
})();
return f__20033__auto__.call(parent__20032__auto__,(function (){
cljs.core.async.put_BANG_.call(null,c,"Output:\n");

var obj33066_33080 = Sk;
var obj33066_33081__$1 = (((!((obj33066_33080 == null))))?obj33066_33080:({}));
var inner_obj__19998__auto___33082 = (function (){var child33067 = (obj33066_33081__$1["TurtleGraphics"]);
if((!((child33067 == null)))){
return child33067;
} else {
var new_child__19970__auto__ = ({});
var obj33072_33083 = obj33066_33081__$1;
(obj33072_33083["TurtleGraphics"] = new_child__19970__auto__);


return new_child__19970__auto__;
}
})();
var obj33073_33084 = inner_obj__19998__auto___33082;
(obj33073_33084["target"] = container_id);



var obj__20025__auto__ = Sk;
var f__20026__auto__ = (function (){var obj33074 = obj__20025__auto__;
var k33075 = "importMainWithBody";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33074,k33075)){
return (obj33074[k33075]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,"<stdin>",false,exp,true);
}));
})().then((function (mod){
var obj__20025__auto__ = console;
var f__20026__auto__ = (function (){var obj33076 = obj__20025__auto__;
var k33077 = "info";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33076,k33077)){
return (obj33076[k33077]);
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

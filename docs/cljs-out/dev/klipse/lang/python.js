// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.python');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.python.builtin_read = (function klipse$lang$python$builtin_read(x){
if(((((function (){var obj28844 = Sk;
var k28845 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28844,k28845)){
return (obj28844[k28845]);
} else {
return null;
}
})() == null)) || ((((function (){var obj28848 = (function (){var obj28846 = Sk;
var k28847 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28846,k28847)){
return (obj28846[k28847]);
} else {
return null;
}
})();
var k28849 = "files";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28848,k28849)){
return (obj28848[k28849]);
} else {
return null;
}
})()[x]) == null)))){
throw ["File not found: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"'"].join('');
} else {
}

return ((function (){var obj28852 = (function (){var obj28850 = Sk;
var k28851 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28850,k28851)){
return (obj28850[k28851]);
} else {
return null;
}
})();
var k28853 = "files";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28852,k28853)){
return (obj28852[k28853]);
} else {
return null;
}
})()[x]);
});
klipse.lang.python.init = klipse.utils.runonce.call(null,(function (){
var obj28854 = Sk;
var obj28855 = (((!((obj28854 == null))))?obj28854:({}));
(obj28855["TurtleGraphics"] = ({}));

return obj28855;
}));
klipse.lang.python.str_eval_async = (function klipse$lang$python$str_eval_async(exp,p__28859){
var map__28860 = p__28859;
var map__28860__$1 = cljs.core.__destructure_map.call(null,map__28860);
var container_id = cljs.core.get.call(null,map__28860__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
klipse.lang.python.init.call(null);

var c = cljs.core.async.chan.call(null);
var obj__17203__auto___28879 = Sk;
var f__17204__auto___28880 = (function (){var obj28861 = obj__17203__auto___28879;
var k28862 = "configure";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28861,k28862)){
return (obj28861[k28862]);
} else {
return null;
}
})();
f__17204__auto___28880.call(obj__17203__auto___28879,({"output": (function (p1__28858_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__28858_SHARP_);
}), "read": klipse.lang.python.builtin_read, "retainglobals": true}));

(function (){var parent__17210__auto__ = (function (){var obj28863 = Sk;
var k28864 = "misceval";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28863,k28864)){
return (obj28863[k28864]);
} else {
return null;
}
})();
var f__17211__auto__ = (function (){var obj28865 = parent__17210__auto__;
var k28866 = "asyncToPromise";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28865,k28866)){
return (obj28865[k28866]);
} else {
return null;
}
})();
return f__17211__auto__.call(parent__17210__auto__,(function (){
cljs.core.async.put_BANG_.call(null,c,"Output:\n");

var obj28867_28881 = Sk;
var obj28867_28882__$1 = (((!((obj28867_28881 == null))))?obj28867_28881:({}));
var inner_obj__17176__auto___28883 = (function (){var child28868 = (obj28867_28882__$1["TurtleGraphics"]);
if((!((child28868 == null)))){
return child28868;
} else {
var new_child__17148__auto__ = ({});
var obj28873_28884 = obj28867_28882__$1;
(obj28873_28884["TurtleGraphics"] = new_child__17148__auto__);


return new_child__17148__auto__;
}
})();
var obj28874_28885 = inner_obj__17176__auto___28883;
(obj28874_28885["target"] = container_id);



var obj__17203__auto__ = Sk;
var f__17204__auto__ = (function (){var obj28875 = obj__17203__auto__;
var k28876 = "importMainWithBody";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28875,k28876)){
return (obj28875[k28876]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,"<stdin>",false,exp,true);
}));
})().then((function (mod){
var obj__17203__auto__ = console;
var f__17204__auto__ = (function (){var obj28877 = obj__17203__auto__;
var k28878 = "info";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28877,k28878)){
return (obj28877[k28878]);
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

// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.python');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.utils');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.python.builtin_read = (function klipse$lang$python$builtin_read(x){
if(((((function (){var obj33132 = Sk;
var k33133 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33132,k33133)){
return (obj33132[k33133]);
} else {
return null;
}
})() == null)) || ((((function (){var obj33136 = (function (){var obj33134 = Sk;
var k33135 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33134,k33135)){
return (obj33134[k33135]);
} else {
return null;
}
})();
var k33137 = "files";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33136,k33137)){
return (obj33136[k33137]);
} else {
return null;
}
})()[x]) == null)))){
throw ["File not found: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"'"].join('');
} else {
}

return ((function (){var obj33140 = (function (){var obj33138 = Sk;
var k33139 = "builtinFiles";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33138,k33139)){
return (obj33138[k33139]);
} else {
return null;
}
})();
var k33141 = "files";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33140,k33141)){
return (obj33140[k33141]);
} else {
return null;
}
})()[x]);
});
klipse.lang.python.init = klipse.utils.runonce.call(null,(function (){
var obj33142 = Sk;
var obj33143 = (((!((obj33142 == null))))?obj33142:({}));
(obj33143["TurtleGraphics"] = ({}));

return obj33143;
}));
klipse.lang.python.str_eval_async = (function klipse$lang$python$str_eval_async(exp,p__33147){
var map__33148 = p__33147;
var map__33148__$1 = cljs.core.__destructure_map.call(null,map__33148);
var container_id = cljs.core.get.call(null,map__33148__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
klipse.lang.python.init.call(null);

var c = cljs.core.async.chan.call(null);
var obj__20025__auto___33167 = Sk;
var f__20026__auto___33168 = (function (){var obj33149 = obj__20025__auto___33167;
var k33150 = "configure";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33149,k33150)){
return (obj33149[k33150]);
} else {
return null;
}
})();
f__20026__auto___33168.call(obj__20025__auto___33167,({"output": (function (p1__33146_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__33146_SHARP_);
}), "read": klipse.lang.python.builtin_read, "retainglobals": true}));

(function (){var parent__20032__auto__ = (function (){var obj33151 = Sk;
var k33152 = "misceval";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33151,k33152)){
return (obj33151[k33152]);
} else {
return null;
}
})();
var f__20033__auto__ = (function (){var obj33153 = parent__20032__auto__;
var k33154 = "asyncToPromise";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33153,k33154)){
return (obj33153[k33154]);
} else {
return null;
}
})();
return f__20033__auto__.call(parent__20032__auto__,(function (){
cljs.core.async.put_BANG_.call(null,c,"Output:\n");

var obj33155_33169 = Sk;
var obj33155_33170__$1 = (((!((obj33155_33169 == null))))?obj33155_33169:({}));
var inner_obj__19998__auto___33171 = (function (){var child33156 = (obj33155_33170__$1["TurtleGraphics"]);
if((!((child33156 == null)))){
return child33156;
} else {
var new_child__19970__auto__ = ({});
var obj33161_33172 = obj33155_33170__$1;
(obj33161_33172["TurtleGraphics"] = new_child__19970__auto__);


return new_child__19970__auto__;
}
})();
var obj33162_33173 = inner_obj__19998__auto___33171;
(obj33162_33173["target"] = container_id);



var obj__20025__auto__ = Sk;
var f__20026__auto__ = (function (){var obj33163 = obj__20025__auto__;
var k33164 = "importMainWithBody";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33163,k33164)){
return (obj33163[k33164]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,"<stdin>",false,exp,true);
}));
})().then((function (mod){
var obj__20025__auto__ = console;
var f__20026__auto__ = (function (){var obj33165 = obj__20025__auto__;
var k33166 = "info";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj33165,k33166)){
return (obj33165[k33166]);
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

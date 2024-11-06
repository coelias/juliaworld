// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.lang.scheme');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('klipse.common.registry');
goog.require('applied_science.js_interop');
klipse.lang.scheme.display = (function klipse$lang$scheme$display(result){
if(cljs.core.truth_((result["inspect"]))){
var obj__17203__auto__ = result;
var f__17204__auto__ = (function (){var obj23686 = obj__17203__auto__;
var k23687 = "inspect";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23686,k23687)){
return (obj23686[k23687]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(result);
}
});
klipse.lang.scheme.create_interpreter = (function klipse$lang$scheme$create_interpreter(on_error){
var klass = (function (){var obj23688 = BiwaScheme;
var k23689 = "Interpreter";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23688,k23689)){
return (obj23688[k23689]);
} else {
return null;
}
})();
return (new klass(on_error));
});
klipse.lang.scheme.str_eval_async = (function klipse$lang$scheme$str_eval_async(exp,_){
var c = cljs.core.async.chan.call(null);
var interpreter = klipse.lang.scheme.create_interpreter.call(null,(function (err){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(err));
}));
(window.exp = exp);

cljs.core.async.put_BANG_.call(null,c,klipse.lang.scheme.display.call(null,(function (){var obj__17203__auto__ = interpreter;
var f__17204__auto__ = (function (){var obj23690 = obj__17203__auto__;
var k23691 = "evaluate";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj23690,k23691)){
return (obj23690[k23691]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,exp);
})()));

return c;
});
klipse.lang.scheme.opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor-in-mode","editor-in-mode",-1964584522),"scheme",new cljs.core.Keyword(null,"editor-out-mode","editor-out-mode",1749845542),"scheme",new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),klipse.lang.scheme.str_eval_async,new cljs.core.Keyword(null,"external-scripts","external-scripts",-699280105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klipse.common.registry.codemirror_mode_src.call(null,"scheme"),klipse.common.registry.scripts_src.call(null,"biwascheme-0.6.6-min.js")], null),new cljs.core.Keyword(null,"comment-str","comment-str",130143853),";"], null);
klipse.common.registry.register_mode.call(null,"eval-scheme","selector_eval_scheme",klipse.lang.scheme.opts);

//# sourceMappingURL=scheme.js.map

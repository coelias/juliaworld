// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.dom_utils');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('applied_science.js_interop');
klipse.dom_utils.add_class = (function klipse$dom_utils$add_class(element,klass){
if(cljs.core.coll_QMARK_.call(null,klass)){
var seq__19107 = cljs.core.seq.call(null,klass);
var chunk__19108 = null;
var count__19109 = (0);
var i__19110 = (0);
while(true){
if((i__19110 < count__19109)){
var k = cljs.core._nth.call(null,chunk__19108,i__19110);
var parent__17210__auto___19129 = (function (){var obj19119 = element;
var k19120 = "classList";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19119,k19120)){
return (obj19119[k19120]);
} else {
return null;
}
})();
var f__17211__auto___19130 = (function (){var obj19121 = parent__17210__auto___19129;
var k19122 = "add";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19121,k19122)){
return (obj19121[k19122]);
} else {
return null;
}
})();
f__17211__auto___19130.call(parent__17210__auto___19129,k);


var G__19131 = seq__19107;
var G__19132 = chunk__19108;
var G__19133 = count__19109;
var G__19134 = (i__19110 + (1));
seq__19107 = G__19131;
chunk__19108 = G__19132;
count__19109 = G__19133;
i__19110 = G__19134;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__19107);
if(temp__5804__auto__){
var seq__19107__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19107__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__19107__$1);
var G__19135 = cljs.core.chunk_rest.call(null,seq__19107__$1);
var G__19136 = c__5565__auto__;
var G__19137 = cljs.core.count.call(null,c__5565__auto__);
var G__19138 = (0);
seq__19107 = G__19135;
chunk__19108 = G__19136;
count__19109 = G__19137;
i__19110 = G__19138;
continue;
} else {
var k = cljs.core.first.call(null,seq__19107__$1);
var parent__17210__auto___19139 = (function (){var obj19123 = element;
var k19124 = "classList";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19123,k19124)){
return (obj19123[k19124]);
} else {
return null;
}
})();
var f__17211__auto___19140 = (function (){var obj19125 = parent__17210__auto___19139;
var k19126 = "add";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19125,k19126)){
return (obj19125[k19126]);
} else {
return null;
}
})();
f__17211__auto___19140.call(parent__17210__auto___19139,k);


var G__19141 = cljs.core.next.call(null,seq__19107__$1);
var G__19142 = null;
var G__19143 = (0);
var G__19144 = (0);
seq__19107 = G__19141;
chunk__19108 = G__19142;
count__19109 = G__19143;
i__19110 = G__19144;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var obj__17203__auto__ = element;
var f__17204__auto__ = (function (){var obj19127 = obj__17203__auto__;
var k19128 = applied_science.js_interop.impl.wrap_key.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classList","classList",122185784),new cljs.core.Keyword(null,"add","add",235287739)], null));
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19127,k19128)){
return (obj19127[k19128]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,klass);
}
});
klipse.dom_utils.create_div_after = (function klipse$dom_utils$create_div_after(element,attrs){
var div = goog.dom.createDom("div",cljs.core.clj__GT_js.call(null,attrs),goog.dom.createTextNode(""));
goog.dom.insertSiblingAfter(div,element);

return div;
});
klipse.dom_utils.append_div = (function klipse$dom_utils$append_div(element,attrs){
var div = goog.dom.createDom("div",cljs.core.clj__GT_js.call(null,attrs),goog.dom.createTextNode(""));
goog.dom.append(element,div);

return div;
});
klipse.dom_utils.body = (function klipse$dom_utils$body(){
var obj19145 = document;
var k19146 = "body";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19145,k19146)){
return (obj19145[k19146]);
} else {
return null;
}
});
klipse.dom_utils.value = (function klipse$dom_utils$value(element){
var obj19147 = element;
var k19148 = "value";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19147,k19148)){
return (obj19147[k19148]);
} else {
return null;
}
});
klipse.dom_utils.add_event_listener = (function klipse$dom_utils$add_event_listener(element,event,listener){
var obj__17203__auto__ = element;
var f__17204__auto__ = (function (){var obj19149 = obj__17203__auto__;
var k19150 = "addEventListener";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19149,k19150)){
return (obj19149[k19150]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,event,listener);
});

//# sourceMappingURL=dom_utils.js.map

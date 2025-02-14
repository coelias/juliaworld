// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.dom_utils');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('applied_science.js_interop');
klipse.dom_utils.add_class = (function klipse$dom_utils$add_class(element,klass){
if(cljs.core.coll_QMARK_.call(null,klass)){
var seq__28934 = cljs.core.seq.call(null,klass);
var chunk__28935 = null;
var count__28936 = (0);
var i__28937 = (0);
while(true){
if((i__28937 < count__28936)){
var k = cljs.core._nth.call(null,chunk__28935,i__28937);
var parent__20032__auto___28956 = (function (){var obj28946 = element;
var k28947 = "classList";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28946,k28947)){
return (obj28946[k28947]);
} else {
return null;
}
})();
var f__20033__auto___28957 = (function (){var obj28948 = parent__20032__auto___28956;
var k28949 = "add";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28948,k28949)){
return (obj28948[k28949]);
} else {
return null;
}
})();
f__20033__auto___28957.call(parent__20032__auto___28956,k);


var G__28958 = seq__28934;
var G__28959 = chunk__28935;
var G__28960 = count__28936;
var G__28961 = (i__28937 + (1));
seq__28934 = G__28958;
chunk__28935 = G__28959;
count__28936 = G__28960;
i__28937 = G__28961;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__28934);
if(temp__5804__auto__){
var seq__28934__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28934__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__28934__$1);
var G__28962 = cljs.core.chunk_rest.call(null,seq__28934__$1);
var G__28963 = c__5565__auto__;
var G__28964 = cljs.core.count.call(null,c__5565__auto__);
var G__28965 = (0);
seq__28934 = G__28962;
chunk__28935 = G__28963;
count__28936 = G__28964;
i__28937 = G__28965;
continue;
} else {
var k = cljs.core.first.call(null,seq__28934__$1);
var parent__20032__auto___28966 = (function (){var obj28950 = element;
var k28951 = "classList";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28950,k28951)){
return (obj28950[k28951]);
} else {
return null;
}
})();
var f__20033__auto___28967 = (function (){var obj28952 = parent__20032__auto___28966;
var k28953 = "add";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28952,k28953)){
return (obj28952[k28953]);
} else {
return null;
}
})();
f__20033__auto___28967.call(parent__20032__auto___28966,k);


var G__28968 = cljs.core.next.call(null,seq__28934__$1);
var G__28969 = null;
var G__28970 = (0);
var G__28971 = (0);
seq__28934 = G__28968;
chunk__28935 = G__28969;
count__28936 = G__28970;
i__28937 = G__28971;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var obj__20025__auto__ = element;
var f__20026__auto__ = (function (){var obj28954 = obj__20025__auto__;
var k28955 = applied_science.js_interop.impl.wrap_key.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classList","classList",122185784),new cljs.core.Keyword(null,"add","add",235287739)], null));
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28954,k28955)){
return (obj28954[k28955]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,klass);
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
var obj28972 = document;
var k28973 = "body";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28972,k28973)){
return (obj28972[k28973]);
} else {
return null;
}
});
klipse.dom_utils.value = (function klipse$dom_utils$value(element){
var obj28974 = element;
var k28975 = "value";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28974,k28975)){
return (obj28974[k28975]);
} else {
return null;
}
});
klipse.dom_utils.add_event_listener = (function klipse$dom_utils$add_event_listener(element,event,listener){
var obj__20025__auto__ = element;
var f__20026__auto__ = (function (){var obj28976 = obj__20025__auto__;
var k28977 = "addEventListener";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28976,k28977)){
return (obj28976[k28977]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,event,listener);
});

//# sourceMappingURL=dom_utils.js.map

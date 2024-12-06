// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.dom_utils');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('applied_science.js_interop');
klipse.dom_utils.add_class = (function klipse$dom_utils$add_class(element,klass){
if(cljs.core.coll_QMARK_.call(null,klass)){
var seq__28521 = cljs.core.seq.call(null,klass);
var chunk__28522 = null;
var count__28523 = (0);
var i__28524 = (0);
while(true){
if((i__28524 < count__28523)){
var k = cljs.core._nth.call(null,chunk__28522,i__28524);
var parent__20032__auto___28543 = (function (){var obj28533 = element;
var k28534 = "classList";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28533,k28534)){
return (obj28533[k28534]);
} else {
return null;
}
})();
var f__20033__auto___28544 = (function (){var obj28535 = parent__20032__auto___28543;
var k28536 = "add";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28535,k28536)){
return (obj28535[k28536]);
} else {
return null;
}
})();
f__20033__auto___28544.call(parent__20032__auto___28543,k);


var G__28545 = seq__28521;
var G__28546 = chunk__28522;
var G__28547 = count__28523;
var G__28548 = (i__28524 + (1));
seq__28521 = G__28545;
chunk__28522 = G__28546;
count__28523 = G__28547;
i__28524 = G__28548;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__28521);
if(temp__5804__auto__){
var seq__28521__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28521__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__28521__$1);
var G__28549 = cljs.core.chunk_rest.call(null,seq__28521__$1);
var G__28550 = c__5565__auto__;
var G__28551 = cljs.core.count.call(null,c__5565__auto__);
var G__28552 = (0);
seq__28521 = G__28549;
chunk__28522 = G__28550;
count__28523 = G__28551;
i__28524 = G__28552;
continue;
} else {
var k = cljs.core.first.call(null,seq__28521__$1);
var parent__20032__auto___28553 = (function (){var obj28537 = element;
var k28538 = "classList";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28537,k28538)){
return (obj28537[k28538]);
} else {
return null;
}
})();
var f__20033__auto___28554 = (function (){var obj28539 = parent__20032__auto___28553;
var k28540 = "add";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28539,k28540)){
return (obj28539[k28540]);
} else {
return null;
}
})();
f__20033__auto___28554.call(parent__20032__auto___28553,k);


var G__28555 = cljs.core.next.call(null,seq__28521__$1);
var G__28556 = null;
var G__28557 = (0);
var G__28558 = (0);
seq__28521 = G__28555;
chunk__28522 = G__28556;
count__28523 = G__28557;
i__28524 = G__28558;
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
var f__20026__auto__ = (function (){var obj28541 = obj__20025__auto__;
var k28542 = applied_science.js_interop.impl.wrap_key.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classList","classList",122185784),new cljs.core.Keyword(null,"add","add",235287739)], null));
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28541,k28542)){
return (obj28541[k28542]);
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
var obj28559 = document;
var k28560 = "body";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28559,k28560)){
return (obj28559[k28560]);
} else {
return null;
}
});
klipse.dom_utils.value = (function klipse$dom_utils$value(element){
var obj28561 = element;
var k28562 = "value";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28561,k28562)){
return (obj28561[k28562]);
} else {
return null;
}
});
klipse.dom_utils.add_event_listener = (function klipse$dom_utils$add_event_listener(element,event,listener){
var obj__20025__auto__ = element;
var f__20026__auto__ = (function (){var obj28563 = obj__20025__auto__;
var k28564 = "addEventListener";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28563,k28564)){
return (obj28563[k28564]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,event,listener);
});

//# sourceMappingURL=dom_utils.js.map

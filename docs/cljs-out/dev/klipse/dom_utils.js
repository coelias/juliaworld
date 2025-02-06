// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.dom_utils');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('applied_science.js_interop');
klipse.dom_utils.add_class = (function klipse$dom_utils$add_class(element,klass){
if(cljs.core.coll_QMARK_.call(null,klass)){
var seq__28524 = cljs.core.seq.call(null,klass);
var chunk__28525 = null;
var count__28526 = (0);
var i__28527 = (0);
while(true){
if((i__28527 < count__28526)){
var k = cljs.core._nth.call(null,chunk__28525,i__28527);
var parent__20032__auto___28546 = (function (){var obj28536 = element;
var k28537 = "classList";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28536,k28537)){
return (obj28536[k28537]);
} else {
return null;
}
})();
var f__20033__auto___28547 = (function (){var obj28538 = parent__20032__auto___28546;
var k28539 = "add";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28538,k28539)){
return (obj28538[k28539]);
} else {
return null;
}
})();
f__20033__auto___28547.call(parent__20032__auto___28546,k);


var G__28548 = seq__28524;
var G__28549 = chunk__28525;
var G__28550 = count__28526;
var G__28551 = (i__28527 + (1));
seq__28524 = G__28548;
chunk__28525 = G__28549;
count__28526 = G__28550;
i__28527 = G__28551;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__28524);
if(temp__5804__auto__){
var seq__28524__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28524__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__28524__$1);
var G__28552 = cljs.core.chunk_rest.call(null,seq__28524__$1);
var G__28553 = c__5565__auto__;
var G__28554 = cljs.core.count.call(null,c__5565__auto__);
var G__28555 = (0);
seq__28524 = G__28552;
chunk__28525 = G__28553;
count__28526 = G__28554;
i__28527 = G__28555;
continue;
} else {
var k = cljs.core.first.call(null,seq__28524__$1);
var parent__20032__auto___28556 = (function (){var obj28540 = element;
var k28541 = "classList";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28540,k28541)){
return (obj28540[k28541]);
} else {
return null;
}
})();
var f__20033__auto___28557 = (function (){var obj28542 = parent__20032__auto___28556;
var k28543 = "add";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28542,k28543)){
return (obj28542[k28543]);
} else {
return null;
}
})();
f__20033__auto___28557.call(parent__20032__auto___28556,k);


var G__28558 = cljs.core.next.call(null,seq__28524__$1);
var G__28559 = null;
var G__28560 = (0);
var G__28561 = (0);
seq__28524 = G__28558;
chunk__28525 = G__28559;
count__28526 = G__28560;
i__28527 = G__28561;
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
var f__20026__auto__ = (function (){var obj28544 = obj__20025__auto__;
var k28545 = applied_science.js_interop.impl.wrap_key.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classList","classList",122185784),new cljs.core.Keyword(null,"add","add",235287739)], null));
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28544,k28545)){
return (obj28544[k28545]);
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
var obj28562 = document;
var k28563 = "body";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28562,k28563)){
return (obj28562[k28563]);
} else {
return null;
}
});
klipse.dom_utils.value = (function klipse$dom_utils$value(element){
var obj28564 = element;
var k28565 = "value";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28564,k28565)){
return (obj28564[k28565]);
} else {
return null;
}
});
klipse.dom_utils.add_event_listener = (function klipse$dom_utils$add_event_listener(element,event,listener){
var obj__20025__auto__ = element;
var f__20026__auto__ = (function (){var obj28566 = obj__20025__auto__;
var k28567 = "addEventListener";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28566,k28567)){
return (obj28566[k28567]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,event,listener);
});

//# sourceMappingURL=dom_utils.js.map

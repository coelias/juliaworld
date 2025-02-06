// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.ui.editors.editor');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('klipse.dom_utils');
goog.require('gadjett.collections');
goog.require('cljsjs.codemirror');
goog.require('cljsjs.codemirror.addon.edit.matchbrackets');
goog.require('cljsjs.codemirror.addon.edit.closebrackets');
goog.require('cljsjs.codemirror.addon.hint.show_hint');
goog.require('clojure.string');
goog.require('applied_science.js_interop');
klipse.ui.editors.editor.code_mirror = CodeMirror;
klipse.ui.editors.editor.create = (function klipse$ui$editors$editor$create(dom_id,config){
return CodeMirror.fromTextArea(document.getElementById(dom_id),cljs.core.clj__GT_js.call(null,config));
});
klipse.ui.editors.editor.get_value = (function klipse$ui$editors$editor$get_value(editor){
return editor.getValue();
});
klipse.ui.editors.editor.get_selection = (function klipse$ui$editors$editor$get_selection(editor){
return editor.getSelection();
});
klipse.ui.editors.editor.get_selection_or_nil = (function klipse$ui$editors$editor$get_selection_or_nil(editor){
var s = klipse.ui.editors.editor.get_selection.call(null,editor);
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
klipse.ui.editors.editor.get_selection_when_selected = (function klipse$ui$editors$editor$get_selection_when_selected(editor){
var or__5043__auto__ = klipse.ui.editors.editor.get_selection_or_nil.call(null,editor);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return klipse.ui.editors.editor.get_value.call(null,editor);
}
});
klipse.ui.editors.editor.set_value = (function klipse$ui$editors$editor$set_value(editor,value){
editor.setValue(value);

return editor;
});
klipse.ui.editors.editor.on_change = (function klipse$ui$editors$editor$on_change(editor,f){
editor.on("change",f);

return editor;
});
klipse.ui.editors.editor.set_option = (function klipse$ui$editors$editor$set_option(editor,option,value){
editor.setOption(option,value);

return editor;
});
klipse.ui.editors.editor.fix_blank_lines = (function klipse$ui$editors$editor$fix_blank_lines(editor){
return klipse.ui.editors.editor.set_value.call(null,editor,gadjett.collections.fix_blank_lines.call(null,klipse.ui.editors.editor.get_value.call(null,editor)));
});
if((typeof klipse !== 'undefined') && (typeof klipse.ui !== 'undefined') && (typeof klipse.ui.editors !== 'undefined') && (typeof klipse.ui.editors.editor !== 'undefined') && (typeof klipse.ui.editors.editor.beautify_language !== 'undefined')){
} else {
klipse.ui.editors.editor.beautify_language = (function (){var method_table__5639__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.ui.editors.editor","beautify-language"),(function (editor,mode){
return mode;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
cljs.core._add_method.call(null,klipse.ui.editors.editor.beautify_language,new cljs.core.Keyword(null,"default","default",-1987822328),(function (editor,_){
return editor;
}));
cljs.core._add_method.call(null,klipse.ui.editors.editor.beautify_language,"text/x-sql",(function (editor,_){
return klipse.ui.editors.editor.set_value.call(null,editor,(function (){var obj__20025__auto__ = sqlFormatter;
var f__20026__auto__ = (function (){var obj28570 = obj__20025__auto__;
var k28571 = "format";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28570,k28571)){
return (obj28570[k28571]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,klipse.ui.editors.editor.get_value.call(null,editor));
})());
}));
klipse.ui.editors.editor.fix_comments_lines = (function klipse$ui$editors$editor$fix_comments_lines(editor,mode){
if(cljs.core._EQ_.call(null,"clojure",mode)){
return klipse.ui.editors.editor.set_value.call(null,editor,gadjett.collections.remove_ending_comments.call(null,klipse.ui.editors.editor.get_value.call(null,editor)));
} else {
return editor;
}
});
klipse.ui.editors.editor.do_indent = (function klipse$ui$editors$editor$do_indent(editor){
var obj__20025__auto___28578 = editor;
var f__20026__auto___28579 = (function (){var obj28572 = obj__20025__auto___28578;
var k28573 = "operation";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28572,k28573)){
return (obj28572[k28573]);
} else {
return null;
}
})();
f__20026__auto___28579.call(obj__20025__auto___28578,(function (){
var n__5633__auto__ = (function (){var obj__20025__auto____$1 = editor;
var f__20026__auto____$1 = (function (){var obj28574 = obj__20025__auto____$1;
var k28575 = "lineCount";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28574,k28575)){
return (obj28574[k28575]);
} else {
return null;
}
})();
return f__20026__auto____$1.call(obj__20025__auto____$1);
})();
var line = (0);
while(true){
if((line < n__5633__auto__)){
var obj__20025__auto___28580__$1 = editor;
var f__20026__auto___28581__$1 = (function (){var obj28576 = obj__20025__auto___28580__$1;
var k28577 = "indentLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28576,k28577)){
return (obj28576[k28577]);
} else {
return null;
}
})();
f__20026__auto___28581__$1.call(obj__20025__auto___28580__$1,line,"smart");

var G__28582 = (line + (1));
line = G__28582;
continue;
} else {
return null;
}
break;
}
}));

return editor;
});
klipse.ui.editors.editor.beautify = (function klipse$ui$editors$editor$beautify(editor,mode,p__28583){
var map__28584 = p__28583;
var map__28584__$1 = cljs.core.__destructure_map.call(null,map__28584);
var indent_QMARK_ = cljs.core.get.call(null,map__28584__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__28584__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614));
var $ = editor;
var $__$1 = (cljs.core.truth_(indent_QMARK_)?klipse.ui.editors.editor.do_indent.call(null,$):$);
var $__$2 = klipse.ui.editors.editor.fix_blank_lines.call(null,$__$1);
var $__$3 = (cljs.core.truth_(remove_ending_comments_QMARK_)?klipse.ui.editors.editor.fix_comments_lines.call(null,$__$2,mode):$__$2);
return klipse.ui.editors.editor.beautify_language.call(null,$__$3,mode);
});
klipse.ui.editors.editor.set_value_and_beautify = (function klipse$ui$editors$editor$set_value_and_beautify(editor,mode,value,opts){
return klipse.ui.editors.editor.beautify.call(null,klipse.ui.editors.editor.set_value.call(null,editor,value),mode,opts);
});
klipse.ui.editors.editor.list_completions = (function klipse$ui$editors$editor$list_completions(completions,editor){
var cursor = (function (){var obj__20025__auto__ = editor;
var f__20026__auto__ = (function (){var obj28585 = obj__20025__auto__;
var k28586 = "getCursor";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28585,k28586)){
return (obj28585[k28586]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__);
})();
var token = (function (){var obj__20025__auto__ = editor;
var f__20026__auto__ = (function (){var obj28587 = obj__20025__auto__;
var k28588 = "getTokenAt";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28587,k28588)){
return (obj28587[k28588]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,cursor);
})();
var start = (function (){var obj28589 = token;
var k28590 = "start";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28589,k28590)){
return (obj28589[k28590]);
} else {
return null;
}
})();
var end = (function (){var obj28591 = cursor;
var k28592 = "ch";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28591,k28592)){
return (obj28591[k28592]);
} else {
return null;
}
})();
var line = (function (){var obj28593 = cursor;
var k28594 = "line";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28593,k28594)){
return (obj28593[k28594]);
} else {
return null;
}
})();
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list","list",765357683),cljs.core.rest.call(null,completions),new cljs.core.Keyword(null,"from","from",1815293044),CodeMirror.Pos(line,start),new cljs.core.Keyword(null,"to","to",192099007),CodeMirror.Pos(line,end)], null));
});
klipse.ui.editors.editor.current_token = (function klipse$ui$editors$editor$current_token(editor){
var cursor = (function (){var obj__20025__auto__ = editor;
var f__20026__auto__ = (function (){var obj28595 = obj__20025__auto__;
var k28596 = "getCursor";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28595,k28596)){
return (obj28595[k28596]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__);
})();
var token = (function (){var obj__20025__auto__ = editor;
var f__20026__auto__ = (function (){var obj28597 = obj__20025__auto__;
var k28598 = "getTokenAt";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28597,k28598)){
return (obj28597[k28598]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,cursor);
})();
var obj28599 = token;
var k28600 = "string";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28599,k28600)){
return (obj28599[k28600]);
} else {
return null;
}
});
klipse.ui.editors.editor.trigger_autocomplete = (function klipse$ui$editors$editor$trigger_autocomplete(editor,completions){
var hint_fn = cljs.core.partial.call(null,klipse.ui.editors.editor.list_completions,completions);
return setTimeout((function (){
return editor.showHint(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hint","hint",439639918),hint_fn,new cljs.core.Keyword(null,"completeSingle","completeSingle",-665527534),true], null)));
}),(100));
});
klipse.ui.editors.editor.replace_element_by_editor = (function klipse$ui$editors$editor$replace_element_by_editor(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28609 = arguments.length;
var i__5767__auto___28610 = (0);
while(true){
if((i__5767__auto___28610 < len__5766__auto___28609)){
args__5772__auto__.push((arguments[i__5767__auto___28610]));

var G__28611 = (i__5767__auto___28610 + (1));
i__5767__auto___28610 = G__28611;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic = (function (element,value,p__28605,p__28606){
var map__28607 = p__28605;
var map__28607__$1 = cljs.core.__destructure_map.call(null,map__28607);
var opts = map__28607__$1;
var mode = cljs.core.get.call(null,map__28607__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var map__28608 = p__28606;
var map__28608__$1 = cljs.core.__destructure_map.call(null,map__28608);
var klass = cljs.core.get.call(null,map__28608__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var indent_QMARK_ = cljs.core.get.call(null,map__28608__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379),true);
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__28608__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),true);
var editor = CodeMirror((function (elt){
if(cljs.core.not.call(null,klass)){
return goog.dom.replaceNode(elt,element);
} else {
var wrapping_div = goog.dom.createElement("div");
goog.dom.appendChild(wrapping_div,elt);

goog.dom.replaceNode(wrapping_div,element);

return klipse.dom_utils.add_class.call(null,wrapping_div,klass);
}
}),cljs.core.clj__GT_js.call(null,opts));
return klipse.ui.editors.editor.beautify.call(null,klipse.ui.editors.editor.set_value.call(null,editor,value),mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),remove_ending_comments_QMARK_], null));
}));

(klipse.ui.editors.editor.replace_element_by_editor.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(klipse.ui.editors.editor.replace_element_by_editor.cljs$lang$applyTo = (function (seq28601){
var G__28602 = cljs.core.first.call(null,seq28601);
var seq28601__$1 = cljs.core.next.call(null,seq28601);
var G__28603 = cljs.core.first.call(null,seq28601__$1);
var seq28601__$2 = cljs.core.next.call(null,seq28601__$1);
var G__28604 = cljs.core.first.call(null,seq28601__$2);
var seq28601__$3 = cljs.core.next.call(null,seq28601__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28602,G__28603,G__28604,seq28601__$3);
}));

klipse.ui.editors.editor.replace_id_by_editor = (function klipse$ui$editors$editor$replace_id_by_editor(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28615 = arguments.length;
var i__5767__auto___28616 = (0);
while(true){
if((i__5767__auto___28616 < len__5766__auto___28615)){
args__5772__auto__.push((arguments[i__5767__auto___28616]));

var G__28617 = (i__5767__auto___28616 + (1));
i__5767__auto___28616 = G__28617;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return klipse.ui.editors.editor.replace_id_by_editor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(klipse.ui.editors.editor.replace_id_by_editor.cljs$core$IFn$_invoke$arity$variadic = (function (id,cm_opts,more_opts){
var element = goog.dom.getElement(id);
var value = (element["textContent"]);
return cljs.core.apply.call(null,klipse.ui.editors.editor.replace_element_by_editor,element,value,cm_opts,more_opts);
}));

(klipse.ui.editors.editor.replace_id_by_editor.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(klipse.ui.editors.editor.replace_id_by_editor.cljs$lang$applyTo = (function (seq28612){
var G__28613 = cljs.core.first.call(null,seq28612);
var seq28612__$1 = cljs.core.next.call(null,seq28612);
var G__28614 = cljs.core.first.call(null,seq28612__$1);
var seq28612__$2 = cljs.core.next.call(null,seq28612__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28613,G__28614,seq28612__$2);
}));

klipse.ui.editors.editor.create_editor_after_element = (function klipse$ui$editors$editor$create_editor_after_element(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28624 = arguments.length;
var i__5767__auto___28625 = (0);
while(true){
if((i__5767__auto___28625 < len__5766__auto___28624)){
args__5772__auto__.push((arguments[i__5767__auto___28625]));

var G__28626 = (i__5767__auto___28625 + (1));
i__5767__auto___28625 = G__28626;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic = (function (element,value,opts,p__28622){
var map__28623 = p__28622;
var map__28623__$1 = cljs.core.__destructure_map.call(null,map__28623);
var klass = cljs.core.get.call(null,map__28623__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__28623__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false);
var indent_QMARK_ = cljs.core.get.call(null,map__28623__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false);
return klipse.ui.editors.editor.replace_element_by_editor.call(null,klipse.dom_utils.create_div_after.call(null,element,cljs.core.PersistentArrayMap.EMPTY),value,opts,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),remove_ending_comments_QMARK_,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"klass","klass",-1386752349),klass);
}));

(klipse.ui.editors.editor.create_editor_after_element.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(klipse.ui.editors.editor.create_editor_after_element.cljs$lang$applyTo = (function (seq28618){
var G__28619 = cljs.core.first.call(null,seq28618);
var seq28618__$1 = cljs.core.next.call(null,seq28618);
var G__28620 = cljs.core.first.call(null,seq28618__$1);
var seq28618__$2 = cljs.core.next.call(null,seq28618__$1);
var G__28621 = cljs.core.first.call(null,seq28618__$2);
var seq28618__$3 = cljs.core.next.call(null,seq28618__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28619,G__28620,G__28621,seq28618__$3);
}));


//# sourceMappingURL=editor.js.map

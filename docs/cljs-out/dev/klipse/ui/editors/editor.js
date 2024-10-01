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
return klipse.ui.editors.editor.set_value.call(null,editor,(function (){var obj__17203__auto__ = sqlFormatter;
var f__17204__auto__ = (function (){var obj19153 = obj__17203__auto__;
var k19154 = "format";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19153,k19154)){
return (obj19153[k19154]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,klipse.ui.editors.editor.get_value.call(null,editor));
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
var obj__17203__auto___19161 = editor;
var f__17204__auto___19162 = (function (){var obj19155 = obj__17203__auto___19161;
var k19156 = "operation";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19155,k19156)){
return (obj19155[k19156]);
} else {
return null;
}
})();
f__17204__auto___19162.call(obj__17203__auto___19161,(function (){
var n__5633__auto__ = (function (){var obj__17203__auto____$1 = editor;
var f__17204__auto____$1 = (function (){var obj19157 = obj__17203__auto____$1;
var k19158 = "lineCount";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19157,k19158)){
return (obj19157[k19158]);
} else {
return null;
}
})();
return f__17204__auto____$1.call(obj__17203__auto____$1);
})();
var line = (0);
while(true){
if((line < n__5633__auto__)){
var obj__17203__auto___19163__$1 = editor;
var f__17204__auto___19164__$1 = (function (){var obj19159 = obj__17203__auto___19163__$1;
var k19160 = "indentLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19159,k19160)){
return (obj19159[k19160]);
} else {
return null;
}
})();
f__17204__auto___19164__$1.call(obj__17203__auto___19163__$1,line,"smart");

var G__19165 = (line + (1));
line = G__19165;
continue;
} else {
return null;
}
break;
}
}));

return editor;
});
klipse.ui.editors.editor.beautify = (function klipse$ui$editors$editor$beautify(editor,mode,p__19166){
var map__19167 = p__19166;
var map__19167__$1 = cljs.core.__destructure_map.call(null,map__19167);
var indent_QMARK_ = cljs.core.get.call(null,map__19167__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__19167__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614));
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
var cursor = (function (){var obj__17203__auto__ = editor;
var f__17204__auto__ = (function (){var obj19168 = obj__17203__auto__;
var k19169 = "getCursor";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19168,k19169)){
return (obj19168[k19169]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__);
})();
var token = (function (){var obj__17203__auto__ = editor;
var f__17204__auto__ = (function (){var obj19170 = obj__17203__auto__;
var k19171 = "getTokenAt";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19170,k19171)){
return (obj19170[k19171]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,cursor);
})();
var start = (function (){var obj19172 = token;
var k19173 = "start";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19172,k19173)){
return (obj19172[k19173]);
} else {
return null;
}
})();
var end = (function (){var obj19174 = cursor;
var k19175 = "ch";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19174,k19175)){
return (obj19174[k19175]);
} else {
return null;
}
})();
var line = (function (){var obj19176 = cursor;
var k19177 = "line";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19176,k19177)){
return (obj19176[k19177]);
} else {
return null;
}
})();
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list","list",765357683),cljs.core.rest.call(null,completions),new cljs.core.Keyword(null,"from","from",1815293044),CodeMirror.Pos(line,start),new cljs.core.Keyword(null,"to","to",192099007),CodeMirror.Pos(line,end)], null));
});
klipse.ui.editors.editor.current_token = (function klipse$ui$editors$editor$current_token(editor){
var cursor = (function (){var obj__17203__auto__ = editor;
var f__17204__auto__ = (function (){var obj19178 = obj__17203__auto__;
var k19179 = "getCursor";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19178,k19179)){
return (obj19178[k19179]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__);
})();
var token = (function (){var obj__17203__auto__ = editor;
var f__17204__auto__ = (function (){var obj19180 = obj__17203__auto__;
var k19181 = "getTokenAt";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19180,k19181)){
return (obj19180[k19181]);
} else {
return null;
}
})();
return f__17204__auto__.call(obj__17203__auto__,cursor);
})();
var obj19182 = token;
var k19183 = "string";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj19182,k19183)){
return (obj19182[k19183]);
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
var len__5766__auto___19192 = arguments.length;
var i__5767__auto___19193 = (0);
while(true){
if((i__5767__auto___19193 < len__5766__auto___19192)){
args__5772__auto__.push((arguments[i__5767__auto___19193]));

var G__19194 = (i__5767__auto___19193 + (1));
i__5767__auto___19193 = G__19194;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic = (function (element,value,p__19188,p__19189){
var map__19190 = p__19188;
var map__19190__$1 = cljs.core.__destructure_map.call(null,map__19190);
var opts = map__19190__$1;
var mode = cljs.core.get.call(null,map__19190__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var map__19191 = p__19189;
var map__19191__$1 = cljs.core.__destructure_map.call(null,map__19191);
var klass = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var indent_QMARK_ = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379),true);
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__19191__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),true);
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
(klipse.ui.editors.editor.replace_element_by_editor.cljs$lang$applyTo = (function (seq19184){
var G__19185 = cljs.core.first.call(null,seq19184);
var seq19184__$1 = cljs.core.next.call(null,seq19184);
var G__19186 = cljs.core.first.call(null,seq19184__$1);
var seq19184__$2 = cljs.core.next.call(null,seq19184__$1);
var G__19187 = cljs.core.first.call(null,seq19184__$2);
var seq19184__$3 = cljs.core.next.call(null,seq19184__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19185,G__19186,G__19187,seq19184__$3);
}));

klipse.ui.editors.editor.replace_id_by_editor = (function klipse$ui$editors$editor$replace_id_by_editor(var_args){
var args__5772__auto__ = [];
var len__5766__auto___19198 = arguments.length;
var i__5767__auto___19199 = (0);
while(true){
if((i__5767__auto___19199 < len__5766__auto___19198)){
args__5772__auto__.push((arguments[i__5767__auto___19199]));

var G__19200 = (i__5767__auto___19199 + (1));
i__5767__auto___19199 = G__19200;
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
(klipse.ui.editors.editor.replace_id_by_editor.cljs$lang$applyTo = (function (seq19195){
var G__19196 = cljs.core.first.call(null,seq19195);
var seq19195__$1 = cljs.core.next.call(null,seq19195);
var G__19197 = cljs.core.first.call(null,seq19195__$1);
var seq19195__$2 = cljs.core.next.call(null,seq19195__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19196,G__19197,seq19195__$2);
}));

klipse.ui.editors.editor.create_editor_after_element = (function klipse$ui$editors$editor$create_editor_after_element(var_args){
var args__5772__auto__ = [];
var len__5766__auto___19207 = arguments.length;
var i__5767__auto___19208 = (0);
while(true){
if((i__5767__auto___19208 < len__5766__auto___19207)){
args__5772__auto__.push((arguments[i__5767__auto___19208]));

var G__19209 = (i__5767__auto___19208 + (1));
i__5767__auto___19208 = G__19209;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic = (function (element,value,opts,p__19205){
var map__19206 = p__19205;
var map__19206__$1 = cljs.core.__destructure_map.call(null,map__19206);
var klass = cljs.core.get.call(null,map__19206__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__19206__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false);
var indent_QMARK_ = cljs.core.get.call(null,map__19206__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false);
return klipse.ui.editors.editor.replace_element_by_editor.call(null,klipse.dom_utils.create_div_after.call(null,element,cljs.core.PersistentArrayMap.EMPTY),value,opts,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),remove_ending_comments_QMARK_,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"klass","klass",-1386752349),klass);
}));

(klipse.ui.editors.editor.create_editor_after_element.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(klipse.ui.editors.editor.create_editor_after_element.cljs$lang$applyTo = (function (seq19201){
var G__19202 = cljs.core.first.call(null,seq19201);
var seq19201__$1 = cljs.core.next.call(null,seq19201);
var G__19203 = cljs.core.first.call(null,seq19201__$1);
var seq19201__$2 = cljs.core.next.call(null,seq19201__$1);
var G__19204 = cljs.core.first.call(null,seq19201__$2);
var seq19201__$3 = cljs.core.next.call(null,seq19201__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19202,G__19203,G__19204,seq19201__$3);
}));


//# sourceMappingURL=editor.js.map

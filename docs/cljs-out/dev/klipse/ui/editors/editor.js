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
var f__20026__auto__ = (function (){var obj28980 = obj__20025__auto__;
var k28981 = "format";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28980,k28981)){
return (obj28980[k28981]);
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
var obj__20025__auto___28988 = editor;
var f__20026__auto___28989 = (function (){var obj28982 = obj__20025__auto___28988;
var k28983 = "operation";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28982,k28983)){
return (obj28982[k28983]);
} else {
return null;
}
})();
f__20026__auto___28989.call(obj__20025__auto___28988,(function (){
var n__5633__auto__ = (function (){var obj__20025__auto____$1 = editor;
var f__20026__auto____$1 = (function (){var obj28984 = obj__20025__auto____$1;
var k28985 = "lineCount";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28984,k28985)){
return (obj28984[k28985]);
} else {
return null;
}
})();
return f__20026__auto____$1.call(obj__20025__auto____$1);
})();
var line = (0);
while(true){
if((line < n__5633__auto__)){
var obj__20025__auto___28990__$1 = editor;
var f__20026__auto___28991__$1 = (function (){var obj28986 = obj__20025__auto___28990__$1;
var k28987 = "indentLine";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28986,k28987)){
return (obj28986[k28987]);
} else {
return null;
}
})();
f__20026__auto___28991__$1.call(obj__20025__auto___28990__$1,line,"smart");

var G__28992 = (line + (1));
line = G__28992;
continue;
} else {
return null;
}
break;
}
}));

return editor;
});
klipse.ui.editors.editor.beautify = (function klipse$ui$editors$editor$beautify(editor,mode,p__28993){
var map__28994 = p__28993;
var map__28994__$1 = cljs.core.__destructure_map.call(null,map__28994);
var indent_QMARK_ = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614));
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
var f__20026__auto__ = (function (){var obj28995 = obj__20025__auto__;
var k28996 = "getCursor";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28995,k28996)){
return (obj28995[k28996]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__);
})();
var token = (function (){var obj__20025__auto__ = editor;
var f__20026__auto__ = (function (){var obj28997 = obj__20025__auto__;
var k28998 = "getTokenAt";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28997,k28998)){
return (obj28997[k28998]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,cursor);
})();
var start = (function (){var obj28999 = token;
var k29000 = "start";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj28999,k29000)){
return (obj28999[k29000]);
} else {
return null;
}
})();
var end = (function (){var obj29001 = cursor;
var k29002 = "ch";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29001,k29002)){
return (obj29001[k29002]);
} else {
return null;
}
})();
var line = (function (){var obj29003 = cursor;
var k29004 = "line";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29003,k29004)){
return (obj29003[k29004]);
} else {
return null;
}
})();
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list","list",765357683),cljs.core.rest.call(null,completions),new cljs.core.Keyword(null,"from","from",1815293044),CodeMirror.Pos(line,start),new cljs.core.Keyword(null,"to","to",192099007),CodeMirror.Pos(line,end)], null));
});
klipse.ui.editors.editor.current_token = (function klipse$ui$editors$editor$current_token(editor){
var cursor = (function (){var obj__20025__auto__ = editor;
var f__20026__auto__ = (function (){var obj29005 = obj__20025__auto__;
var k29006 = "getCursor";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29005,k29006)){
return (obj29005[k29006]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__);
})();
var token = (function (){var obj__20025__auto__ = editor;
var f__20026__auto__ = (function (){var obj29007 = obj__20025__auto__;
var k29008 = "getTokenAt";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29007,k29008)){
return (obj29007[k29008]);
} else {
return null;
}
})();
return f__20026__auto__.call(obj__20025__auto__,cursor);
})();
var obj29009 = token;
var k29010 = "string";
if(applied_science.js_interop.impl.contains_QMARK__STAR_.call(null,obj29009,k29010)){
return (obj29009[k29010]);
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
var len__5766__auto___29019 = arguments.length;
var i__5767__auto___29020 = (0);
while(true){
if((i__5767__auto___29020 < len__5766__auto___29019)){
args__5772__auto__.push((arguments[i__5767__auto___29020]));

var G__29021 = (i__5767__auto___29020 + (1));
i__5767__auto___29020 = G__29021;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(klipse.ui.editors.editor.replace_element_by_editor.cljs$core$IFn$_invoke$arity$variadic = (function (element,value,p__29015,p__29016){
var map__29017 = p__29015;
var map__29017__$1 = cljs.core.__destructure_map.call(null,map__29017);
var opts = map__29017__$1;
var mode = cljs.core.get.call(null,map__29017__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var map__29018 = p__29016;
var map__29018__$1 = cljs.core.__destructure_map.call(null,map__29018);
var klass = cljs.core.get.call(null,map__29018__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var indent_QMARK_ = cljs.core.get.call(null,map__29018__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379),true);
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__29018__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),true);
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
(klipse.ui.editors.editor.replace_element_by_editor.cljs$lang$applyTo = (function (seq29011){
var G__29012 = cljs.core.first.call(null,seq29011);
var seq29011__$1 = cljs.core.next.call(null,seq29011);
var G__29013 = cljs.core.first.call(null,seq29011__$1);
var seq29011__$2 = cljs.core.next.call(null,seq29011__$1);
var G__29014 = cljs.core.first.call(null,seq29011__$2);
var seq29011__$3 = cljs.core.next.call(null,seq29011__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29012,G__29013,G__29014,seq29011__$3);
}));

klipse.ui.editors.editor.replace_id_by_editor = (function klipse$ui$editors$editor$replace_id_by_editor(var_args){
var args__5772__auto__ = [];
var len__5766__auto___29025 = arguments.length;
var i__5767__auto___29026 = (0);
while(true){
if((i__5767__auto___29026 < len__5766__auto___29025)){
args__5772__auto__.push((arguments[i__5767__auto___29026]));

var G__29027 = (i__5767__auto___29026 + (1));
i__5767__auto___29026 = G__29027;
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
(klipse.ui.editors.editor.replace_id_by_editor.cljs$lang$applyTo = (function (seq29022){
var G__29023 = cljs.core.first.call(null,seq29022);
var seq29022__$1 = cljs.core.next.call(null,seq29022);
var G__29024 = cljs.core.first.call(null,seq29022__$1);
var seq29022__$2 = cljs.core.next.call(null,seq29022__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29023,G__29024,seq29022__$2);
}));

klipse.ui.editors.editor.create_editor_after_element = (function klipse$ui$editors$editor$create_editor_after_element(var_args){
var args__5772__auto__ = [];
var len__5766__auto___29034 = arguments.length;
var i__5767__auto___29035 = (0);
while(true){
if((i__5767__auto___29035 < len__5766__auto___29034)){
args__5772__auto__.push((arguments[i__5767__auto___29035]));

var G__29036 = (i__5767__auto___29035 + (1));
i__5767__auto___29035 = G__29036;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(klipse.ui.editors.editor.create_editor_after_element.cljs$core$IFn$_invoke$arity$variadic = (function (element,value,opts,p__29032){
var map__29033 = p__29032;
var map__29033__$1 = cljs.core.__destructure_map.call(null,map__29033);
var klass = cljs.core.get.call(null,map__29033__$1,new cljs.core.Keyword(null,"klass","klass",-1386752349));
var remove_ending_comments_QMARK_ = cljs.core.get.call(null,map__29033__$1,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),false);
var indent_QMARK_ = cljs.core.get.call(null,map__29033__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false);
return klipse.ui.editors.editor.replace_element_by_editor.call(null,klipse.dom_utils.create_div_after.call(null,element,cljs.core.PersistentArrayMap.EMPTY),value,opts,new cljs.core.Keyword(null,"remove-ending-comments?","remove-ending-comments?",1247259614),remove_ending_comments_QMARK_,new cljs.core.Keyword(null,"indent?","indent?",1381429379),indent_QMARK_,new cljs.core.Keyword(null,"klass","klass",-1386752349),klass);
}));

(klipse.ui.editors.editor.create_editor_after_element.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(klipse.ui.editors.editor.create_editor_after_element.cljs$lang$applyTo = (function (seq29028){
var G__29029 = cljs.core.first.call(null,seq29028);
var seq29028__$1 = cljs.core.next.call(null,seq29028);
var G__29030 = cljs.core.first.call(null,seq29028__$1);
var seq29028__$2 = cljs.core.next.call(null,seq29028__$1);
var G__29031 = cljs.core.first.call(null,seq29028__$2);
var seq29028__$3 = cljs.core.next.call(null,seq29028__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29029,G__29030,G__29031,seq29028__$3);
}));


//# sourceMappingURL=editor.js.map

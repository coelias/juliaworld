// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('klipse.ui.editors.common');
goog.require('cljs.core');
goog.require('klipse.ui.editors.editor');
goog.require('klipse.utils');
klipse.ui.editors.common.handle_events = (function klipse$ui$editors$common$handle_events(editor,p__29547){
var map__29548 = p__29547;
var map__29548__$1 = cljs.core.__destructure_map.call(null,map__29548);
var on_completion = cljs.core.get.call(null,map__29548__$1,new cljs.core.Keyword(null,"on-completion","on-completion",1522510572));
var on_should_eval = cljs.core.get.call(null,map__29548__$1,new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168));
var on_change = cljs.core.get.call(null,map__29548__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var idle_msec = cljs.core.get.call(null,map__29548__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var extra_keys = cljs.core.get.call(null,map__29548__$1,new cljs.core.Keyword(null,"extra-keys","extra-keys",-1845607319));
var vec__29549 = klipse.utils.debounce.call(null,on_should_eval,idle_msec);
var debouncer = cljs.core.nth.call(null,vec__29549,(0),null);
var runner = cljs.core.nth.call(null,vec__29549,(1),null);
var default_extra_keys = new cljs.core.PersistentArrayMap(null, 3, ["Tab",on_completion,"Ctrl-Enter",runner,"Cmd-Enter",runner], null);
var the_extra_keys = cljs.core.merge.call(null,default_extra_keys,extra_keys);
if(cljs.core.truth_(on_change)){
klipse.ui.editors.editor.on_change.call(null,editor,on_change);
} else {
}

klipse.ui.editors.editor.on_change.call(null,editor,debouncer);

klipse.ui.editors.editor.set_option.call(null,editor,"extraKeys",cljs.core.clj__GT_js.call(null,the_extra_keys));

return editor;
});

//# sourceMappingURL=common.js.map

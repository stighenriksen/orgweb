goog.provide('one.sample.view');
goog.require('cljs.core');
goog.require('domina.xpath');
goog.require('one.browser.animation');
goog.require('domina');
goog.require('goog.events.KeyCodes');
goog.require('goog.events.KeyHandler');
goog.require('clojure.browser.event');
goog.require('one.dispatch');
goog.require('one.sample.animation');
/**
* A map which contains chunks of HTML which may be used
* when rendering views.
*/
one.sample.view.snippets = cljs.core.ObjMap.fromObject(["﷐'form","﷐'greeting"],{"﷐'form":"<div id=\"form\">\n      <h1 id=\"header\">My form</h1>\n      <div class=\"input\">\n        <label id=\"name-input-label\">\n          <span>Enter your name</span>\n          <input type=\"text\" size=\"30\" id=\"name-input\" />\n        </label>\n        <div class=\"small error\" id=\"name-input-error\"> </div>\n      </div>\n      <input value=\"Done!\" type=\"button\" class=\"button green\" id=\"greet-button\" />\n    </div>","﷐'greeting":"<div id=\"greeting\">\n      <h2>Hello</h2>\n      <div class=\"break\"></div>\n      <h3><span class=\"again\">again</span> <span class=\"name\">Person</span></h3>\n    </div>"});
/**
* Render the submit button based on the current state of the
* form. The button is disabled while the user is editing the form and
* becomes enabled when the form is complete.
*/
one.sample.view.render_button = (function (){var method_table__513__auto____5608 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__514__auto____5609 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__515__auto____5610 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__516__auto____5611 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__517__auto____5612 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-button",cljs.core.identity,"﷐'default",hierarchy__517__auto____5612,method_table__513__auto____5608,prefer_table__514__auto____5609,method_cache__515__auto____5610,cached_hierarchy__516__auto____5611));
})();
cljs.core._add_method.call(null,one.sample.view.render_button,"﷐'default",(function (_){
return null;
}));
cljs.core._add_method.call(null,one.sample.view.render_button,cljs.core.Vector.fromArray(["﷐'finished","﷐'editing"]),(function (_){
return one.sample.animation.disable_button.call(null,"greet-button");
}));
cljs.core._add_method.call(null,one.sample.view.render_button,cljs.core.Vector.fromArray(["﷐'editing","﷐'finished"]),(function (_){
return one.sample.animation.enable_button.call(null,"greet-button");
}));
/**
* Render a form field based on the current state transition. Form
* fields are validated as soon as they lose focus. There are six
* transitions and each one has its own animation.
*/
one.sample.view.render_form_field = (function (){var method_table__513__auto____5613 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__514__auto____5614 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__515__auto____5615 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__516__auto____5616 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__517__auto____5617 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render-form-field","﷐'transition","﷐'default",hierarchy__517__auto____5617,method_table__513__auto____5613,prefer_table__514__auto____5614,method_cache__515__auto____5615,cached_hierarchy__516__auto____5616));
})();
cljs.core._add_method.call(null,one.sample.view.render_form_field,"﷐'default",(function (_){
return null;
}));
/**
* Accepts an element id for an input field and return the xpath
* string to the label for that field.
*/
one.sample.view.label_xpath = (function label_xpath(id){
return cljs.core.str.call(null,"//label[@id='",id,"-label']/span");
});
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'empty","﷐'editing"]),(function (p__5618){
var map__5619__5620 = p__5618;
var map__5619__5621 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5619__5620))?cljs.core.apply.call(null,cljs.core.hash_map,map__5619__5620):map__5619__5620);
var id__5622 = cljs.core.get.call(null,map__5619__5621,"﷐'id");

return one.sample.animation.label_move_up.call(null,one.sample.view.label_xpath.call(null,id__5622));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing","﷐'empty"]),(function (p__5623){
var map__5624__5625 = p__5623;
var map__5624__5626 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5624__5625))?cljs.core.apply.call(null,cljs.core.hash_map,map__5624__5625):map__5624__5625);
var id__5627 = cljs.core.get.call(null,map__5624__5626,"﷐'id");

return one.sample.animation.label_move_down.call(null,one.sample.view.label_xpath.call(null,id__5627));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-valid","﷐'valid"]),(function (p__5628){
var map__5629__5630 = p__5628;
var map__5629__5631 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5629__5630))?cljs.core.apply.call(null,cljs.core.hash_map,map__5629__5630):map__5629__5630);
var id__5632 = cljs.core.get.call(null,map__5629__5631,"﷐'id");

return one.sample.animation.label_fade_out.call(null,one.sample.view.label_xpath.call(null,id__5632));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'valid","﷐'editing-valid"]),(function (p__5633){
var map__5634__5635 = p__5633;
var map__5634__5636 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5634__5635))?cljs.core.apply.call(null,cljs.core.hash_map,map__5634__5635):map__5634__5635);
var id__5637 = cljs.core.get.call(null,map__5634__5636,"﷐'id");

return one.browser.animation.play.call(null,one.sample.view.label_xpath.call(null,id__5637),one.sample.animation.fade_in);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing","﷐'error"]),(function (p__5638){
var map__5639__5640 = p__5638;
var map__5639__5641 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5639__5640))?cljs.core.apply.call(null,cljs.core.hash_map,map__5639__5640):map__5639__5640);
var error__5642 = cljs.core.get.call(null,map__5639__5641,"﷐'error");
var id__5643 = cljs.core.get.call(null,map__5639__5641,"﷐'id");

var error_element__5644 = domina.by_id.call(null,cljs.core.str.call(null,id__5643,"-error"));

domina.set_style_BANG_.call(null,error_element__5644,"opacity","0");
domina.set_html_BANG_.call(null,error_element__5644,error__5642);
return one.browser.animation.play.call(null,error_element__5644,one.sample.animation.fade_in);
}));
/**
* Accepts an id and an error message and fades the old error message
* out and the new one in.
*/
one.sample.view.swap_error_messages = (function swap_error_messages(id,error){
var error_element__5645 = domina.by_id.call(null,cljs.core.str.call(null,id,"-error"));

one.browser.animation.play.call(null,error_element__5645,one.sample.animation.fade_out,cljs.core.ObjMap.fromObject(["﷐'name"],{"﷐'name":"fade out error"}));
return one.browser.animation.play.call(null,error_element__5645,one.sample.animation.fade_in,cljs.core.ObjMap.fromObject(["﷐'before"],{"﷐'before":(function (){
return domina.set_html_BANG_.call(null,error_element__5645,error);
})}));
});
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'error","﷐'editing-error"]),(function (p__5646){
var map__5647__5648 = p__5646;
var map__5647__5649 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5647__5648))?cljs.core.apply.call(null,cljs.core.hash_map,map__5647__5648):map__5647__5648);
var error__5650 = cljs.core.get.call(null,map__5647__5649,"﷐'error");
var id__5651 = cljs.core.get.call(null,map__5647__5649,"﷐'id");

return one.sample.view.swap_error_messages.call(null,id__5651,error__5650);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'error"]),(function (p__5652){
var map__5653__5654 = p__5652;
var map__5653__5655 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5653__5654))?cljs.core.apply.call(null,cljs.core.hash_map,map__5653__5654):map__5653__5654);
var error__5656 = cljs.core.get.call(null,map__5653__5655,"﷐'error");
var id__5657 = cljs.core.get.call(null,map__5653__5655,"﷐'id");

return one.sample.view.swap_error_messages.call(null,id__5657,error__5656);
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'editing-valid"]),(function (p__5658){
var map__5659__5660 = p__5658;
var map__5659__5661 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5659__5660))?cljs.core.apply.call(null,cljs.core.hash_map,map__5659__5660):map__5659__5660);
var id__5662 = cljs.core.get.call(null,map__5659__5661,"﷐'id");

var error_element__5663 = domina.by_id.call(null,cljs.core.str.call(null,id__5662,"-error"));

return one.browser.animation.play.call(null,error_element__5663,cljs.core.assoc.call(null,one.sample.animation.fade_out,"﷐'time",200));
}));
cljs.core._add_method.call(null,one.sample.view.render_form_field,cljs.core.Vector.fromArray(["﷐'editing-error","﷐'empty"]),(function (p__5664){
var map__5665__5666 = p__5664;
var map__5665__5667 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5665__5666))?cljs.core.apply.call(null,cljs.core.hash_map,map__5665__5666):map__5665__5666);
var id__5668 = cljs.core.get.call(null,map__5665__5667,"﷐'id");

var error_element__5669 = domina.by_id.call(null,cljs.core.str.call(null,id__5668,"-error"));

one.browser.animation.play.call(null,error_element__5669,cljs.core.assoc.call(null,one.sample.animation.fade_out,"﷐'time",200));
return one.sample.animation.label_move_down.call(null,one.sample.view.label_xpath.call(null,id__5668));
}));
/**
* Accepts a field-id and creates listeners for blur and focus events which will then fire
* `:field-changed` and `:editing-field` events.
*/
one.sample.view.add_input_event_listeners = (function add_input_event_listeners(field_id){
var field__5670 = domina.by_id.call(null,field_id);
var keyboard__5671 = (new goog.events.KeyHandler(domina.by_id.call(null,"form")));

clojure.browser.event.listen.call(null,field__5670,"blur",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-finished",field_id]),domina.value.call(null,field__5670));
}));
clojure.browser.event.listen.call(null,field__5670,"focus",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'editing-field",field_id]));
}));
clojure.browser.event.listen.call(null,field__5670,"keyup",(function (){
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-changed",field_id]),domina.value.call(null,field__5670));
}));
return clojure.browser.event.listen.call(null,keyboard__5671,"key",(function (e){
if(cljs.core.truth_(cljs.core._EQ_.call(null,e.keyCode,goog.events.KeyCodes.ENTER)))
{domina.by_id.call(null,"name-input").blur(cljs.core.List.EMPTY);
return one.dispatch.fire.call(null,"﷐'form-submit");
} else
{return null;
}
}));
});
/**
* Accepts a map which represents the current state of the application
* and renders a view based on the value of the `:state` key.
*/
one.sample.view.render = (function (){var method_table__513__auto____5672 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__514__auto____5673 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__515__auto____5674 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__516__auto____5675 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__517__auto____5676 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("render","﷐'state","﷐'default",hierarchy__517__auto____5676,method_table__513__auto____5672,prefer_table__514__auto____5673,method_cache__515__auto____5674,cached_hierarchy__516__auto____5675));
})();
cljs.core._add_method.call(null,one.sample.view.render,"﷐'init",(function (_){
one.sample.animation.initialize_views.call(null,"﷐'form".call(null,one.sample.view.snippets),"﷐'greeting".call(null,one.sample.view.snippets));
one.sample.view.add_input_event_listeners.call(null,"name-input");
return clojure.browser.event.listen.call(null,domina.by_id.call(null,"greet-button"),"click",(function (){
return one.dispatch.fire.call(null,"﷐'greeting",cljs.core.ObjMap.fromObject(["﷐'name"],{"﷐'name":domina.value.call(null,domina.by_id.call(null,"name-input"))}));
}));
}));
cljs.core._add_method.call(null,one.sample.view.render,"﷐'form",(function (p__5677){
var map__5678__5679 = p__5677;
var map__5678__5680 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5678__5679))?cljs.core.apply.call(null,cljs.core.hash_map,map__5678__5679):map__5678__5679);
var name__5681 = cljs.core.get.call(null,map__5678__5680,"﷐'name");
var error__5682 = cljs.core.get.call(null,map__5678__5680,"﷐'error");
var state__5683 = cljs.core.get.call(null,map__5678__5680,"﷐'state");

one.sample.animation.show_form.call(null);
domina.set_value_BANG_.call(null,domina.by_id.call(null,"name-input"),"");
return one.dispatch.fire.call(null,cljs.core.Vector.fromArray(["﷐'field-finished","name-input"]),"");
}));
cljs.core._add_method.call(null,one.sample.view.render,"﷐'greeting",(function (p__5684){
var map__5685__5686 = p__5684;
var map__5685__5687 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5685__5686))?cljs.core.apply.call(null,cljs.core.hash_map,map__5685__5686):map__5685__5686);
var exists__5688 = cljs.core.get.call(null,map__5685__5687,"﷐'exists");
var name__5689 = cljs.core.get.call(null,map__5685__5687,"﷐'name");
var state__5690 = cljs.core.get.call(null,map__5685__5687,"﷐'state");

domina.set_text_BANG_.call(null,domina.single_node.call(null,domina.by_class.call(null,"name")),name__5689);
domina.set_text_BANG_.call(null,domina.single_node.call(null,domina.by_class.call(null,"again")),(cljs.core.truth_(exists__5688)?"again":""));
return one.sample.animation.show_greeting.call(null);
}));
one.dispatch.react_to.call(null,cljs.core.set(["﷐'state-change"]),(function (_,m){
return one.sample.view.render.call(null,m);
}));
/**
* Given a map of old and new form states, generate a map with `:id`,
* `:transition` and `:error` keys which can be passed to
* `render-form-field`.
*/
one.sample.view.form_fields_status = (function form_fields_status(m){
return cljs.core.map.call(null,(function (p1__5691_SHARP_){
return cljs.core.hash_map.call(null,"﷐'id",p1__5691_SHARP_,"﷐'transition",cljs.core.Vector.fromArray([(function (){var or__3548__auto____5692 = "﷐'status".call(null,p1__5691_SHARP_.call(null,"﷐'fields".call(null,"﷐'old".call(null,m))));

if(cljs.core.truth_(or__3548__auto____5692))
{return or__3548__auto____5692;
} else
{return "﷐'empty";
}
})(),"﷐'status".call(null,p1__5691_SHARP_.call(null,"﷐'fields".call(null,"﷐'new".call(null,m))))]),"﷐'error","﷐'error".call(null,p1__5691_SHARP_.call(null,"﷐'fields".call(null,"﷐'new".call(null,m)))));
}),cljs.core.keys.call(null,"﷐'fields".call(null,"﷐'new".call(null,m))));
});
one.dispatch.react_to.call(null,cljs.core.set(["﷐'form-change"]),(function (_,m){
var G__5693__5694 = cljs.core.seq.call(null,one.sample.view.form_fields_status.call(null,m));

if(cljs.core.truth_(G__5693__5694))
{var s__5695 = cljs.core.first.call(null,G__5693__5694);
var G__5693__5696 = G__5693__5694;

while(true){
one.sample.view.render_form_field.call(null,s__5695);
var temp__3698__auto____5697 = cljs.core.next.call(null,G__5693__5696);

if(cljs.core.truth_(temp__3698__auto____5697))
{var G__5693__5698 = temp__3698__auto____5697;

{
var G__5699 = cljs.core.first.call(null,G__5693__5698);
var G__5700 = G__5693__5698;
s__5695 = G__5699;
G__5693__5696 = G__5700;
continue;
}
} else
{}
break;
}
} else
{}
return one.sample.view.render_button.call(null,cljs.core.Vector.fromArray(["﷐'status".call(null,"﷐'old".call(null,m)),"﷐'status".call(null,"﷐'new".call(null,m))]));
}));

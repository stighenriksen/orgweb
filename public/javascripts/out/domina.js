goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____9645 = content;

if(cljs.core.truth_(and__3546__auto____9645))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____9645;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____9646 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____9646))
{return or__3548__auto____9646;
} else
{var or__3548__auto____9647 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____9647))
{return or__3548__auto____9647;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____9648 = nodeseq;

if(cljs.core.truth_(and__3546__auto____9648))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____9648;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____9649 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____9649))
{return or__3548__auto____9649;
} else
{var or__3548__auto____9650 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____9650))
{return or__3548__auto____9650;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement.call(null,cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.t9651)))
{
/**
* @constructor
*/
domina.t9651 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t9651.prototype.domina$DomContent$ = true;
domina.t9651.prototype.domina$DomContent$nodes = (function (_){
var this__9652 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__9652.class_name));
});
domina.t9651.prototype.domina$DomContent$single_node = (function (_){
var this__9653 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__9653.class_name));
});
domina.t9651.prototype.cljs$core$IMeta$ = true;
domina.t9651.prototype.cljs$core$IMeta$_meta = (function (_){
var this__9654 = this;
return this__9654.__meta;
});
domina.t9651.prototype.cljs$core$IWithMeta$ = true;
domina.t9651.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__9655 = this;
return (new domina.t9651(this__9655.class_name,this__9655.by_class,__meta));
});
} else
{}
return (new domina.t9651(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__9656_SHARP_){
return p1__9656_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__9657_SHARP_,p2__9658_SHARP_){
return goog.dom.insertChildAt.call(null,p1__9657_SHARP_,p2__9658_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__9660_SHARP_,p2__9659_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__9659_SHARP_,p1__9660_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__9662_SHARP_,p2__9661_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__9661_SHARP_,p1__9662_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__9664_SHARP_,p2__9663_SHARP_){
return goog.dom.replaceNode.call(null,p2__9663_SHARP_,p1__9664_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s__9665 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__9665))))
{return s__9665;
} else
{return null;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword.
*/
domina.set_style_BANG_ = (function set_style_BANG_(content,name,value){
var G__9666__9667 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__9666__9667))
{var n__9668 = cljs.core.first.call(null,G__9666__9667);
var G__9666__9669 = G__9666__9667;

while(true){
goog.style.setStyle.call(null,n__9668,cljs.core.name.call(null,name),value);
var temp__3698__auto____9670 = cljs.core.next.call(null,G__9666__9669);

if(cljs.core.truth_(temp__3698__auto____9670))
{var G__9666__9671 = temp__3698__auto____9670;

{
var G__9672 = cljs.core.first.call(null,G__9666__9671);
var G__9673 = G__9666__9671;
n__9668 = G__9672;
G__9666__9669 = G__9673;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword.
*/
domina.set_attr_BANG_ = (function set_attr_BANG_(content,name,value){
var G__9674__9675 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__9674__9675))
{var n__9676 = cljs.core.first.call(null,G__9674__9675);
var G__9674__9677 = G__9674__9675;

while(true){
n__9676.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____9678 = cljs.core.next.call(null,G__9674__9677);

if(cljs.core.truth_(temp__3698__auto____9678))
{var G__9674__9679 = temp__3698__auto____9678;

{
var G__9680 = cljs.core.first.call(null,G__9674__9679);
var G__9681 = G__9674__9679;
n__9676 = G__9680;
G__9674__9677 = G__9681;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__9682__9683 = pair.split(/\s*:\s*/);
var k__9684 = cljs.core.nth.call(null,vec__9682__9683,0,null);
var v__9685 = cljs.core.nth.call(null,vec__9682__9683,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____9686 = k__9684;

if(cljs.core.truth_(and__3546__auto____9686))
{return v__9685;
} else
{return and__3546__auto____9686;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__9684.toLowerCase()),v__9685);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
return domina.parse_style_attributes.call(null,domina.attr.call(null,content,"style"));
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__9688 = domina.single_node.call(null,content);
var attrs__9689 = node__9688.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__9687_SHARP_){
var attr__9690 = attrs__9689.item(p1__9687_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__9690.nodeName.toLowerCase())],[attr__9690.nodeValue]);
}),cljs.core.range.call(null,attrs__9689.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__9691__9692 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__9691__9692))
{var G__9694__9696 = cljs.core.first.call(null,G__9691__9692);
var vec__9695__9697 = G__9694__9696;
var name__9698 = cljs.core.nth.call(null,vec__9695__9697,0,null);
var value__9699 = cljs.core.nth.call(null,vec__9695__9697,1,null);
var G__9691__9700 = G__9691__9692;

var G__9694__9701 = G__9694__9696;
var G__9691__9702 = G__9691__9700;

while(true){
var vec__9703__9704 = G__9694__9701;
var name__9705 = cljs.core.nth.call(null,vec__9703__9704,0,null);
var value__9706 = cljs.core.nth.call(null,vec__9703__9704,1,null);
var G__9691__9707 = G__9691__9702;

domina.set_style_BANG_.call(null,content,name__9705,value__9706);
var temp__3698__auto____9708 = cljs.core.next.call(null,G__9691__9707);

if(cljs.core.truth_(temp__3698__auto____9708))
{var G__9691__9709 = temp__3698__auto____9708;

{
var G__9710 = cljs.core.first.call(null,G__9691__9709);
var G__9711 = G__9691__9709;
G__9694__9701 = G__9710;
G__9691__9702 = G__9711;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var G__9712__9713 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__9712__9713))
{var G__9715__9717 = cljs.core.first.call(null,G__9712__9713);
var vec__9716__9718 = G__9715__9717;
var name__9719 = cljs.core.nth.call(null,vec__9716__9718,0,null);
var value__9720 = cljs.core.nth.call(null,vec__9716__9718,1,null);
var G__9712__9721 = G__9712__9713;

var G__9715__9722 = G__9715__9717;
var G__9712__9723 = G__9712__9721;

while(true){
var vec__9724__9725 = G__9715__9722;
var name__9726 = cljs.core.nth.call(null,vec__9724__9725,0,null);
var value__9727 = cljs.core.nth.call(null,vec__9724__9725,1,null);
var G__9712__9728 = G__9712__9723;

domina.set_attr_BANG_.call(null,content,name__9726,value__9727);
var temp__3698__auto____9729 = cljs.core.next.call(null,G__9712__9728);

if(cljs.core.truth_(temp__3698__auto____9729))
{var G__9712__9730 = temp__3698__auto____9729;

{
var G__9731 = cljs.core.first.call(null,G__9712__9730);
var G__9732 = G__9712__9730;
G__9715__9722 = G__9731;
G__9712__9723 = G__9732;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has.call(null,domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var G__9733__9734 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__9733__9734))
{var node__9735 = cljs.core.first.call(null,G__9733__9734);
var G__9733__9736 = G__9733__9734;

while(true){
goog.dom.classes.add.call(null,node__9735,class$);
var temp__3698__auto____9737 = cljs.core.next.call(null,G__9733__9736);

if(cljs.core.truth_(temp__3698__auto____9737))
{var G__9733__9738 = temp__3698__auto____9737;

{
var G__9739 = cljs.core.first.call(null,G__9733__9738);
var G__9740 = G__9733__9738;
node__9735 = G__9739;
G__9733__9736 = G__9740;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var G__9741__9742 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__9741__9742))
{var node__9743 = cljs.core.first.call(null,G__9741__9742);
var G__9741__9744 = G__9741__9742;

while(true){
goog.dom.classes.remove.call(null,node__9743,class$);
var temp__3698__auto____9745 = cljs.core.next.call(null,G__9741__9744);

if(cljs.core.truth_(temp__3698__auto____9745))
{var G__9741__9746 = temp__3698__auto____9745;

{
var G__9747 = cljs.core.first.call(null,G__9741__9746);
var G__9748 = G__9741__9746;
node__9743 = G__9747;
G__9741__9744 = G__9748;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get.call(null,domina.single_node.call(null,content)));
});
/**
* Returns the text of a node. Assumes content is a single node. Optional 'normalize' paramter indicates whether to collapse whitespace, normalize line breaks and trim (defaults to true). Does not return internal markup.
*/
domina.text = (function() {
var text = null;
var text__9749 = (function (content){
return text.call(null,content,true);
});
var text__9750 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__9749.call(this,content);
case  2 :
return text__9750.call(this,content,normalize);
}
throw('Invalid arity: ' + arguments.length);
};
return text;
})()
;
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var G__9752__9753 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__9752__9753))
{var node__9754 = cljs.core.first.call(null,G__9752__9753);
var G__9752__9755 = G__9752__9753;

while(true){
goog.dom.setTextContent.call(null,node__9754,value);
var temp__3698__auto____9756 = cljs.core.next.call(null,G__9752__9755);

if(cljs.core.truth_(temp__3698__auto____9756))
{var G__9752__9757 = temp__3698__auto____9756;

{
var G__9758 = cljs.core.first.call(null,G__9752__9757);
var G__9759 = G__9752__9757;
node__9754 = G__9758;
G__9752__9755 = G__9759;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue.call(null,domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var G__9760__9761 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__9760__9761))
{var node__9762 = cljs.core.first.call(null,G__9760__9761);
var G__9760__9763 = G__9760__9761;

while(true){
goog.dom.forms.setValue.call(null,node__9762,value);
var temp__3698__auto____9764 = cljs.core.next.call(null,G__9760__9763);

if(cljs.core.truth_(temp__3698__auto____9764))
{var G__9760__9765 = temp__3698__auto____9764;

{
var G__9766 = cljs.core.first.call(null,G__9760__9765);
var G__9767 = G__9760__9765;
node__9762 = G__9766;
G__9760__9763 = G__9767;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,value){
var G__9768__9769 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__9768__9769))
{var node__9770 = cljs.core.first.call(null,G__9768__9769);
var G__9768__9771 = G__9768__9769;

while(true){
node__9770.innerHTML = value;
var temp__3698__auto____9772 = cljs.core.next.call(null,G__9768__9771);

if(cljs.core.truth_(temp__3698__auto____9772))
{var G__9768__9773 = temp__3698__auto____9772;

{
var G__9774 = cljs.core.first.call(null,G__9768__9773);
var G__9775 = G__9768__9773;
node__9770 = G__9774;
G__9768__9771 = G__9775;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Takes a two-arg function, a reference DomContent and new DomContent. Applies the function for each reference / content combination. Uses clones of the new content for each additional parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__9776 = domina.nodes.call(null,parent_content);

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,parents__9776))))
{var G__9777__9778 = cljs.core.seq.call(null,domina.nodes.call(null,child_content));

if(cljs.core.truth_(G__9777__9778))
{var child__9779 = cljs.core.first.call(null,G__9777__9778);
var G__9777__9780 = G__9777__9778;

while(true){
f.call(null,cljs.core.first.call(null,parents__9776),child__9779);
var temp__3698__auto____9781 = cljs.core.next.call(null,G__9777__9780);

if(cljs.core.truth_(temp__3698__auto____9781))
{var G__9777__9782 = temp__3698__auto____9781;

{
var G__9795 = cljs.core.first.call(null,G__9777__9782);
var G__9796 = G__9777__9782;
child__9779 = G__9795;
G__9777__9780 = G__9796;
continue;
}
} else
{}
break;
}
} else
{}
var G__9783__9785 = cljs.core.seq.call(null,cljs.core.rest.call(null,parents__9776));

if(cljs.core.truth_(G__9783__9785))
{var parent__9786 = cljs.core.first.call(null,G__9783__9785);
var G__9783__9787 = G__9783__9785;

while(true){
var G__9784__9788 = cljs.core.seq.call(null,domina.nodes.call(null,domina.clone.call(null,child_content)));

if(cljs.core.truth_(G__9784__9788))
{var child__9789 = cljs.core.first.call(null,G__9784__9788);
var G__9784__9790 = G__9784__9788;

while(true){
f.call(null,parent__9786,child__9789);
var temp__3698__auto____9791 = cljs.core.next.call(null,G__9784__9790);

if(cljs.core.truth_(temp__3698__auto____9791))
{var G__9784__9792 = temp__3698__auto____9791;

{
var G__9797 = cljs.core.first.call(null,G__9784__9792);
var G__9798 = G__9784__9792;
child__9789 = G__9797;
G__9784__9790 = G__9798;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____9793 = cljs.core.next.call(null,G__9783__9787);

if(cljs.core.truth_(temp__3698__auto____9793))
{var G__9783__9794 = temp__3698__auto____9793;

{
var G__9799 = cljs.core.first.call(null,G__9783__9794);
var G__9800 = G__9783__9794;
parent__9786 = G__9799;
G__9783__9787 = G__9800;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__9801 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__9802 = (function (nl,n){
if(cljs.core.truth_((n < nl.length)))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nodelist.call(null,nl,(n + 1)));
})));
} else
{return null;
}
});
lazy_nodelist = function(nl,n){
switch(arguments.length){
case  1 :
return lazy_nodelist__9801.call(this,nl);
case  2 :
return lazy_nodelist__9802.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nodelist;
})()
;
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
return cljs.core.seq.call(null,content);
}));
(domina.single_node["_"] = (function (content){
return cljs.core.first.call(null,content);
}));
Element.prototype.domina$DomContent$ = true;
Element.prototype.domina$DomContent$nodes = (function (content){
return cljs.core.cons.call(null,content);
});
Element.prototype.domina$DomContent$single_node = (function (content){
return content;
});
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.cons.call(null,goog.dom.htmlToDocumentFragment.call(null,s));
}));
(domina.single_node["string"] = (function (s){
return goog.dom.htmlToDocumentFragment.call(null,s);
}));
NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9804 = null;
var G__9804__9805 = (function (nodelist,n){
return nodelist.item(n);
});
var G__9804__9806 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__9804 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__9804__9805.call(this,nodelist,n);
case  3 :
return G__9804__9806.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9804;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
if(cljs.core.truth_(window.StaticNodeList))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9808 = null;
var G__9808__9809 = (function (nodelist,n){
return nodelist.item(n);
});
var G__9808__9810 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__9808 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__9808__9809.call(this,nodelist,n);
case  3 :
return G__9808__9810.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9808;
})()
;
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9812 = null;
var G__9812__9813 = (function (coll,n){
return coll.item(n);
});
var G__9812__9814 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__9812 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9812__9813.call(this,coll,n);
case  3 :
return G__9812__9814.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9812;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});

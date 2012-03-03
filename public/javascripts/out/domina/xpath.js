goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__9628 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____9629 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____9629))
{return doc__9628.setProperty;
} else
{return and__3546__auto____9629;
}
})()))
{doc__9628.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__9628.evaluate))
{return technique_2.call(null,null,doc__9628,node,path);
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error("Could not find XPath support in this browser."));
} else
{return null;
}
}
}
});
/**
* Selects a single node using an XPath expression and a root node
*/
domina.xpath.select_node = (function select_node(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectSingleNode(expr);
}),(function (resolver,doc,node,expr){
var result__9630 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__9630.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__9631 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__9632 = result__9631.snapshotLength;

var i__9633 = 0;
var acc__9634 = null;

while(true){
if(cljs.core.truth_((i__9633 < num_results__9632)))
{{
var G__9635 = (i__9633 + 1);
var G__9636 = cljs.core.cons.call(null,result__9631.snapshotItem(i__9633),acc__9634);
i__9633 = G__9635;
acc__9634 = G__9636;
continue;
}
} else
{return acc__9634;
}
break;
}
}));
});
domina.xpath.root_element = (function root_element(){
return (goog.dom.getElementsByTagNameAndClass.call(null,"html")[0]);
});
/**
* Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses js/document as a base.
*/
domina.xpath.xpath = (function() {
var xpath = null;
var xpath__9642 = (function (expr){
return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__9643 = (function (base,expr){
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.xpath.t9637)))
{
/**
* @constructor
*/
domina.xpath.t9637 = (function (expr,base,xpath,__meta){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.__meta = __meta;
})
domina.xpath.t9637.prototype.domina$DomContent$ = true;
domina.xpath.t9637.prototype.domina$DomContent$nodes = (function (_){
var this__9638 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__9638.expr),domina.nodes.call(null,this__9638.base));
});
domina.xpath.t9637.prototype.domina$DomContent$single_node = (function (_){
var this__9639 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__9639.expr),domina.nodes.call(null,this__9639.base))));
});
domina.xpath.t9637.prototype.cljs$core$IMeta$ = true;
domina.xpath.t9637.prototype.cljs$core$IMeta$_meta = (function (_){
var this__9640 = this;
return this__9640.__meta;
});
domina.xpath.t9637.prototype.cljs$core$IWithMeta$ = true;
domina.xpath.t9637.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__9641 = this;
return (new domina.xpath.t9637(this__9641.expr,this__9641.base,this__9641.xpath,__meta));
});
} else
{}
return (new domina.xpath.t9637(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__9642.call(this,base);
case  2 :
return xpath__9643.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;

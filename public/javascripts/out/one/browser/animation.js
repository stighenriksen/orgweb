goog.provide('one.browser.animation');
goog.require('cljs.core');
goog.require('one.core');
goog.require('one.color');
goog.require('clojure.browser.event');
goog.require('goog.fx.easing');
goog.require('domina.xpath');
goog.require('clojure.browser.dom');
goog.require('goog.fx.dom');
goog.require('goog.fx.AnimationQueue');
goog.require('goog.style');
goog.require('domina');
goog.require('goog.async.Delay');
goog.require('goog.string');
one.browser.animation._STAR_default_time_STAR_ = 1000;
/**
* Accepts a keyword, string or element and returns an
* element. Strings are assumed to be xpath format.
*/
one.browser.animation.get_element = (function get_element(e){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,e)))
{return domina.by_id.call(null,cljs.core.name.call(null,e));
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,e)))
{return cljs.core.first.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,e)));
} else
{if(cljs.core.truth_("﷐'else"))
{return e;
} else
{return null;
}
}
}
});
one.browser.animation.IPosition = {};
one.browser.animation.position = (function position(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5863 = this$;

if(cljs.core.truth_(and__3546__auto____5863))
{return this$.one$browser$animation$IPosition$position;
} else
{return and__3546__auto____5863;
}
})()))
{return this$.one$browser$animation$IPosition$position(this$);
} else
{return (function (){var or__3548__auto____5864 = (one.browser.animation.position[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5864))
{return or__3548__auto____5864;
} else
{var or__3548__auto____5865 = (one.browser.animation.position["_"]);

if(cljs.core.truth_(or__3548__auto____5865))
{return or__3548__auto____5865;
} else
{throw cljs.core.missing_protocol.call(null,"IPosition.position",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$IPosition$ = true;
Element.prototype.one$browser$animation$IPosition$position = (function (this$){
var p__5866 = cljs.core.js__GT_clj.call(null,goog.style.getPosition.call(null,this$),"﷐'keywordize-keys",true);

return cljs.core.Vector.fromArray(["﷐'x".call(null,p__5866),"﷐'y".call(null,p__5866)]);
});
Array.prototype.one$browser$animation$IPosition$ = true;
Array.prototype.one$browser$animation$IPosition$position = (function (this$){
return cljs.core.js__GT_clj.call(null,this$);
});
cljs.core.Vector.prototype.one$browser$animation$IPosition$ = true;
cljs.core.Vector.prototype.one$browser$animation$IPosition$position = (function (this$){
return this$;
});
one.browser.animation.IScroll = {};
one.browser.animation.scroll = (function scroll(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5867 = this$;

if(cljs.core.truth_(and__3546__auto____5867))
{return this$.one$browser$animation$IScroll$scroll;
} else
{return and__3546__auto____5867;
}
})()))
{return this$.one$browser$animation$IScroll$scroll(this$);
} else
{return (function (){var or__3548__auto____5868 = (one.browser.animation.scroll[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5868))
{return or__3548__auto____5868;
} else
{var or__3548__auto____5869 = (one.browser.animation.scroll["_"]);

if(cljs.core.truth_(or__3548__auto____5869))
{return or__3548__auto____5869;
} else
{throw cljs.core.missing_protocol.call(null,"IScroll.scroll",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$IScroll$ = true;
Element.prototype.one$browser$animation$IScroll$scroll = (function (this$){
return cljs.core.Vector.fromArray([this$.scrollLeft,this$.scrollTop]);
});
cljs.core.Vector.prototype.one$browser$animation$IScroll$ = true;
cljs.core.Vector.prototype.one$browser$animation$IScroll$scroll = (function (this$){
return this$;
});
Number.prototype.one$browser$animation$IScroll$ = true;
Number.prototype.one$browser$animation$IScroll$scroll = (function (this$){
return cljs.core.Vector.fromArray([0,this$]);
});
one.browser.animation.ISize = {};
one.browser.animation.size = (function size(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5870 = this$;

if(cljs.core.truth_(and__3546__auto____5870))
{return this$.one$browser$animation$ISize$size;
} else
{return and__3546__auto____5870;
}
})()))
{return this$.one$browser$animation$ISize$size(this$);
} else
{return (function (){var or__3548__auto____5871 = (one.browser.animation.size[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5871))
{return or__3548__auto____5871;
} else
{var or__3548__auto____5872 = (one.browser.animation.size["_"]);

if(cljs.core.truth_(or__3548__auto____5872))
{return or__3548__auto____5872;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.size",this$);
}
}
})().call(null,this$);
}
});
one.browser.animation.width = (function width(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5873 = this$;

if(cljs.core.truth_(and__3546__auto____5873))
{return this$.one$browser$animation$ISize$width;
} else
{return and__3546__auto____5873;
}
})()))
{return this$.one$browser$animation$ISize$width(this$);
} else
{return (function (){var or__3548__auto____5874 = (one.browser.animation.width[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5874))
{return or__3548__auto____5874;
} else
{var or__3548__auto____5875 = (one.browser.animation.width["_"]);

if(cljs.core.truth_(or__3548__auto____5875))
{return or__3548__auto____5875;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.width",this$);
}
}
})().call(null,this$);
}
});
one.browser.animation.height = (function height(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5876 = this$;

if(cljs.core.truth_(and__3546__auto____5876))
{return this$.one$browser$animation$ISize$height;
} else
{return and__3546__auto____5876;
}
})()))
{return this$.one$browser$animation$ISize$height(this$);
} else
{return (function (){var or__3548__auto____5877 = (one.browser.animation.height[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5877))
{return or__3548__auto____5877;
} else
{var or__3548__auto____5878 = (one.browser.animation.height["_"]);

if(cljs.core.truth_(or__3548__auto____5878))
{return or__3548__auto____5878;
} else
{throw cljs.core.missing_protocol.call(null,"ISize.height",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$ISize$ = true;
Element.prototype.one$browser$animation$ISize$size = (function (this$){
var s__5879 = cljs.core.js__GT_clj.call(null,goog.style.getSize.call(null,this$),"﷐'keywordize-keys",true);

return cljs.core.Vector.fromArray(["﷐'width".call(null,s__5879),"﷐'height".call(null,s__5879)]);
});
Element.prototype.one$browser$animation$ISize$width = (function (this$){
return one.browser.animation.width.call(null,one.browser.animation.size.call(null,this$));
});
Element.prototype.one$browser$animation$ISize$height = (function (this$){
return one.browser.animation.height.call(null,one.browser.animation.size.call(null,this$));
});
cljs.core.Vector.prototype.one$browser$animation$ISize$ = true;
cljs.core.Vector.prototype.one$browser$animation$ISize$size = (function (this$){
return this$;
});
cljs.core.Vector.prototype.one$browser$animation$ISize$width = (function (this$){
return cljs.core.first.call(null,this$);
});
cljs.core.Vector.prototype.one$browser$animation$ISize$height = (function (this$){
return cljs.core.second.call(null,this$);
});
Number.prototype.one$browser$animation$ISize$ = true;
Number.prototype.one$browser$animation$ISize$size = (function (this$){
return cljs.core.Vector.fromArray([this$,this$]);
});
Number.prototype.one$browser$animation$ISize$width = (function (this$){
return this$;
});
Number.prototype.one$browser$animation$ISize$height = (function (this$){
return this$;
});
one.browser.animation.IOpacity = {};
one.browser.animation.opacity = (function opacity(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5880 = this$;

if(cljs.core.truth_(and__3546__auto____5880))
{return this$.one$browser$animation$IOpacity$opacity;
} else
{return and__3546__auto____5880;
}
})()))
{return this$.one$browser$animation$IOpacity$opacity(this$);
} else
{return (function (){var or__3548__auto____5881 = (one.browser.animation.opacity[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5881))
{return or__3548__auto____5881;
} else
{var or__3548__auto____5882 = (one.browser.animation.opacity["_"]);

if(cljs.core.truth_(or__3548__auto____5882))
{return or__3548__auto____5882;
} else
{throw cljs.core.missing_protocol.call(null,"IOpacity.opacity",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$browser$animation$IOpacity$ = true;
Element.prototype.one$browser$animation$IOpacity$opacity = (function (this$){
var op__5883 = goog.style.getComputedStyle.call(null,this$,"opacity");

if(cljs.core.truth_(cljs.core._EQ_.call(null,op__5883,"")))
{return one.browser.animation.opacity.call(null,goog.style.getOpacity.call(null,this$));
} else
{return op__5883;
}
});
Number.prototype.one$browser$animation$IOpacity$ = true;
Number.prototype.one$browser$animation$IOpacity$opacity = (function (this$){
return this$;
});
String.prototype.one$browser$animation$IOpacity$ = true;
String.prototype.one$browser$animation$IOpacity$opacity = (function (this$){
return parseFloat.call(null,this$);
});
goog.fx.AnimationQueue.prototype.one$core$Disposable$ = true;
goog.fx.AnimationQueue.prototype.one$core$Disposable$dispose = (function (this$){
return this$.dispose(cljs.core.List.EMPTY);
});
goog.fx.AnimationQueue.prototype.one$core$Startable$ = true;
goog.fx.AnimationQueue.prototype.one$core$Startable$start = (function (this$){
return this$.play(cljs.core.List.EMPTY);
});
goog.fx.dom.PredefinedEffect.prototype.clojure$browser$event$EventType$ = true;
goog.fx.dom.PredefinedEffect.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__5884){
var vec__5885__5886 = p__5884;
var k__5887 = cljs.core.nth.call(null,vec__5885__5886,0,null);
var v__5888 = cljs.core.nth.call(null,vec__5885__5886,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__5887.toLowerCase()),v__5888]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.fx.Animation.EventType))));
});
goog.fx.dom.PredefinedEffect.prototype.one$core$Disposable$ = true;
goog.fx.dom.PredefinedEffect.prototype.one$core$Disposable$dispose = (function (this$){
return this$.dispose(cljs.core.List.EMPTY);
});
goog.fx.dom.PredefinedEffect.prototype.one$core$Startable$ = true;
goog.fx.dom.PredefinedEffect.prototype.one$core$Startable$start = (function (this$){
return this$.play(cljs.core.List.EMPTY);
});
/**
* Get the acceleration function associated with a given
* keyword. Implementing this as a multimethod allows developers to add new
* functions and still represent effects as data.
*/
one.browser.animation.acceleration = (function (){var method_table__513__auto____5889 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__514__auto____5890 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__515__auto____5891 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__516__auto____5892 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__517__auto____5893 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject(["﷐'default"],{"﷐'default":"﷐'ease-out"}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("acceleration",cljs.core.identity,"﷐'ease-out",hierarchy__517__auto____5893,method_table__513__auto____5889,prefer_table__514__auto____5890,method_cache__515__auto____5891,cached_hierarchy__516__auto____5892));
})();
cljs.core._add_method.call(null,one.browser.animation.acceleration,"﷐'ease-out",(function (name){
return goog.fx.easing.easeOut;
}));
cljs.core._add_method.call(null,one.browser.animation.acceleration,"﷐'ease-in",(function (name){
return goog.fx.easing.easeIn;
}));
cljs.core._add_method.call(null,one.browser.animation.acceleration,"﷐'in-and-out",(function (name){
return goog.fx.easing.inAndOut;
}));
/**
* Given a map which represents an effect. Return the acceleration
* function or `nil`.
*/
one.browser.animation.accel = (function accel(m){
var temp__3698__auto____5894 = "﷐'accel".call(null,m);

if(cljs.core.truth_(temp__3698__auto____5894))
{var a__5895 = temp__3698__auto____5894;

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,a__5895)))
{return a__5895;
} else
{return one.browser.animation.acceleration.call(null,a__5895);
}
} else
{return null;
}
});


/**
* @constructor
* @param {*} effect
* @param {*} start
* @param {*} end
* @param {*} time
* @param {*} accel
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
one.browser.animation.Effect = (function (effect,start,end,time,accel,__meta,__extmap){
this.effect = effect;
this.start = start;
this.end = end;
this.time = time;
this.accel = accel;
this.__meta = __meta;
this.__extmap = __extmap;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
one.browser.animation.Effect.prototype.one$browser$animation$IScroll$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$IScroll$scroll = (function (this$){
var this__5898 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$IHash$ = true;
one.browser.animation.Effect.prototype.cljs$core$IHash$_hash = (function (this__326__auto__){
var this__5899 = this;
return cljs.core.hash_coll.call(null,this__326__auto__);
});
one.browser.animation.Effect.prototype.cljs$core$ILookup$ = true;
one.browser.animation.Effect.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5925 = null;
var G__5925__5926 = (function (this__331__auto__,k__332__auto__){
var this__5900 = this;
return cljs.core._lookup.call(null,this__331__auto__,k__332__auto__,null);
});
var G__5925__5927 = (function (this__333__auto__,k__334__auto__,else__335__auto__){
var this__5901 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'effect",this__5901.effect,"﷐'start",this__5901.start,"﷐'end",this__5901.end,"﷐'time",this__5901.time,"﷐'accel",this__5901.accel),this__5901.__extmap),k__334__auto__,else__335__auto__);
});
G__5925 = function(this__333__auto__,k__334__auto__,else__335__auto__){
switch(arguments.length){
case  2 :
return G__5925__5926.call(this,this__333__auto__,k__334__auto__);
case  3 :
return G__5925__5927.call(this,this__333__auto__,k__334__auto__,else__335__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5925;
})()
;
one.browser.animation.Effect.prototype.cljs$core$IAssociative$ = true;
one.browser.animation.Effect.prototype.cljs$core$IAssociative$_assoc = (function (this__339__auto__,k__340__auto__,G__5896){
var this__5902 = this;
var pred__5903__5906 = cljs.core.identical_QMARK_;
var expr__5904__5907 = k__340__auto__;

if(cljs.core.truth_(pred__5903__5906.call(null,"﷐'effect",expr__5904__5907)))
{return (new one.browser.animation.Effect(G__5896,this__5902.start,this__5902.end,this__5902.time,this__5902.accel,this__5902.__meta,this__5902.__extmap));
} else
{if(cljs.core.truth_(pred__5903__5906.call(null,"﷐'start",expr__5904__5907)))
{return (new one.browser.animation.Effect(this__5902.effect,G__5896,this__5902.end,this__5902.time,this__5902.accel,this__5902.__meta,this__5902.__extmap));
} else
{if(cljs.core.truth_(pred__5903__5906.call(null,"﷐'end",expr__5904__5907)))
{return (new one.browser.animation.Effect(this__5902.effect,this__5902.start,G__5896,this__5902.time,this__5902.accel,this__5902.__meta,this__5902.__extmap));
} else
{if(cljs.core.truth_(pred__5903__5906.call(null,"﷐'time",expr__5904__5907)))
{return (new one.browser.animation.Effect(this__5902.effect,this__5902.start,this__5902.end,G__5896,this__5902.accel,this__5902.__meta,this__5902.__extmap));
} else
{if(cljs.core.truth_(pred__5903__5906.call(null,"﷐'accel",expr__5904__5907)))
{return (new one.browser.animation.Effect(this__5902.effect,this__5902.start,this__5902.end,this__5902.time,G__5896,this__5902.__meta,this__5902.__extmap));
} else
{return (new one.browser.animation.Effect(this__5902.effect,this__5902.start,this__5902.end,this__5902.time,this__5902.accel,this__5902.__meta,cljs.core.assoc.call(null,this__5902.__extmap,k__340__auto__,G__5896)));
}
}
}
}
}
});
one.browser.animation.Effect.prototype.cljs$core$IRecord$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICollection$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICollection$_conj = (function (this__337__auto__,entry__338__auto__){
var this__5908 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__338__auto__)))
{return cljs.core._assoc.call(null,this__337__auto__,cljs.core._nth.call(null,entry__338__auto__,0),cljs.core._nth.call(null,entry__338__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__337__auto__,entry__338__auto__);
}
});
one.browser.animation.Effect.prototype.one$browser$animation$IPosition$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$IPosition$position = (function (this$){
var this__5909 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$color$IColorSource$ = true;
one.browser.animation.Effect.prototype.one$color$IColorSource$color = (function (this$){
var this__5910 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$color$IColorSource$bg_color = (function (this$){
var this__5911 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$ISeqable$ = true;
one.browser.animation.Effect.prototype.cljs$core$ISeqable$_seq = (function (this__344__auto__){
var this__5912 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'effect",this__5912.effect),cljs.core.vector.call(null,"﷐'start",this__5912.start),cljs.core.vector.call(null,"﷐'end",this__5912.end),cljs.core.vector.call(null,"﷐'time",this__5912.time),cljs.core.vector.call(null,"﷐'accel",this__5912.accel)]),this__5912.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IPrintable$ = true;
one.browser.animation.Effect.prototype.cljs$core$IPrintable$_pr_seq = (function (this__346__auto__,opts__347__auto__){
var this__5913 = this;
var pr_pair__348__auto____5914 = (function (keyval__349__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__347__auto__,keyval__349__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__348__auto____5914,cljs.core.str.call(null,"#","one.browser.animation.Effect","{"),", ","}",opts__347__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'effect",this__5913.effect),cljs.core.vector.call(null,"﷐'start",this__5913.start),cljs.core.vector.call(null,"﷐'end",this__5913.end),cljs.core.vector.call(null,"﷐'time",this__5913.time),cljs.core.vector.call(null,"﷐'accel",this__5913.accel)]),this__5913.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$ICounted$ = true;
one.browser.animation.Effect.prototype.cljs$core$ICounted$_count = (function (this__336__auto__){
var this__5915 = this;
return (5 + cljs.core.count.call(null,this__5915.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IEquiv$ = true;
one.browser.animation.Effect.prototype.cljs$core$IEquiv$_equiv = (function (this__327__auto__,other__328__auto__){
var this__5916 = this;
var and__3546__auto____5917 = (this__327__auto__.constructor === other__328__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____5917))
{return cljs.core.equiv_map.call(null,this__327__auto__,other__328__auto__);
} else
{return and__3546__auto____5917;
}
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$ISize$size = (function (this$){
var this__5918 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$width = (function (this$){
var this__5919 = this;
return one.browser.animation.width.call(null,"﷐'end".call(null,this$));
});
one.browser.animation.Effect.prototype.one$browser$animation$ISize$height = (function (this$){
var this__5920 = this;
return one.browser.animation.height.call(null,"﷐'end".call(null,this$));
});
one.browser.animation.Effect.prototype.cljs$core$IWithMeta$ = true;
one.browser.animation.Effect.prototype.cljs$core$IWithMeta$_with_meta = (function (this__330__auto__,G__5896){
var this__5921 = this;
return (new one.browser.animation.Effect(this__5921.effect,this__5921.start,this__5921.end,this__5921.time,this__5921.accel,G__5896,this__5921.__extmap));
});
one.browser.animation.Effect.prototype.cljs$core$IMeta$ = true;
one.browser.animation.Effect.prototype.cljs$core$IMeta$_meta = (function (this__329__auto__){
var this__5922 = this;
return this__5922.__meta;
});
one.browser.animation.Effect.prototype.one$browser$animation$IOpacity$ = true;
one.browser.animation.Effect.prototype.one$browser$animation$IOpacity$opacity = (function (this$){
var this__5924 = this;
return "﷐'end".call(null,this$);
});
one.browser.animation.Effect.prototype.cljs$core$IMap$ = true;
one.browser.animation.Effect.prototype.cljs$core$IMap$_dissoc = (function (this__341__auto__,k__342__auto__){
var this__5923 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'effect","﷐'start","﷐'end","﷐'accel","﷐'time"]),k__342__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__341__auto__),this__5923.__meta),k__342__auto__);
} else
{return (new one.browser.animation.Effect(this__5923.effect,this__5923.start,this__5923.end,this__5923.time,this__5923.accel,this__5923.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__5923.__extmap,k__342__auto__))));
}
});
one.browser.animation.__GT_Effect = (function __GT_Effect(effect,start,end,time,accel){
return (new one.browser.animation.Effect(effect,start,end,time,accel));
});
one.browser.animation.map__GT_Effect = (function map__GT_Effect(G__5897){
return (new one.browser.animation.Effect("﷐'effect".call(null,G__5897),"﷐'start".call(null,G__5897),"﷐'end".call(null,G__5897),"﷐'time".call(null,G__5897),"﷐'accel".call(null,G__5897),null,cljs.core.dissoc.call(null,G__5897,"﷐'effect","﷐'start","﷐'end","﷐'time","﷐'accel")));
});
/**
* Dispatch function for effect multimethods. Accepts an element and a
* map describing an effect and returns the effect name as a keyword.
*/
one.browser.animation.effect_dispatch = (function effect_dispatch(_,p__5929){
var map__5930__5931 = p__5929;
var map__5930__5932 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5930__5931))?cljs.core.apply.call(null,cljs.core.hash_map,map__5930__5931):map__5930__5931);
var effect__5933 = cljs.core.get.call(null,map__5930__5932,"﷐'effect");

return effect__5933;
});
/**
* Accepts an element and an effect map and returns a standardized
* effect map which must contain the four keys: `:start`, `:end`,
* `:time` and `:accel`.
* 
* The element argument can either be an HTML element or an effect map
* which describes the previous effect.
*/
one.browser.animation.standardize = (function (){var method_table__513__auto____5934 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__514__auto____5935 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__515__auto____5936 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__516__auto____5937 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__517__auto____5938 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("standardize",one.browser.animation.effect_dispatch,"﷐'default",hierarchy__517__auto____5938,method_table__513__auto____5934,prefer_table__514__auto____5935,method_cache__515__auto____5936,cached_hierarchy__516__auto____5937));
})();
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'color",(function (element,m){
return (new one.browser.animation.Effect("﷐'color",one.color.color.call(null,(function (){var or__3548__auto____5939 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5939))
{return or__3548__auto____5939;
} else
{return element;
}
})()),one.color.color.call(null,(function (){var or__3548__auto____5940 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____5940))
{return or__3548__auto____5940;
} else
{return element;
}
})()),(function (){var or__3548__auto____5941 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5941))
{return or__3548__auto____5941;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
/**
* Accepts an element and a map and returns an effect. The returned
* effect may be run or composed with other effects.
* 
* Available effects include: `:color`, `:fade`, `:fade-in`, `:fade-out`,
* `:fade-in-and-show`, `:fade-out-and-hide`, `:slide`, `:swipe`, `:bg-color`,
* `:resize`, `:resize-width` and `:resize-height`.
*/
one.browser.animation.effect = (function (){var method_table__513__auto____5942 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__514__auto____5943 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__515__auto____5944 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__516__auto____5945 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__517__auto____5946 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"﷐'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("effect",one.browser.animation.effect_dispatch,"﷐'default",hierarchy__517__auto____5946,method_table__513__auto____5942,prefer_table__514__auto____5943,method_cache__515__auto____5944,cached_hierarchy__516__auto____5945));
})();
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'color",(function (element,m){
var map__5947__5948 = one.browser.animation.standardize.call(null,element,m);
var map__5947__5949 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5947__5948))?cljs.core.apply.call(null,cljs.core.hash_map,map__5947__5948):map__5947__5948);
var accel__5950 = cljs.core.get.call(null,map__5947__5949,"﷐'accel");
var time__5951 = cljs.core.get.call(null,map__5947__5949,"﷐'time");
var end__5952 = cljs.core.get.call(null,map__5947__5949,"﷐'end");
var start__5953 = cljs.core.get.call(null,map__5947__5949,"﷐'start");

return (new goog.fx.dom.ColorTransform(element,cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,start__5953)),cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,end__5952)),time__5951,accel__5950));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade",one.browser.animation.opacity.call(null,(function (){var or__3548__auto____5954 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5954))
{return or__3548__auto____5954;
} else
{return element;
}
})()),one.browser.animation.opacity.call(null,"﷐'end".call(null,m)),(function (){var or__3548__auto____5955 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5955))
{return or__3548__auto____5955;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade",(function (element,m){
var map__5956__5957 = one.browser.animation.standardize.call(null,element,m);
var map__5956__5958 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5956__5957))?cljs.core.apply.call(null,cljs.core.hash_map,map__5956__5957):map__5956__5957);
var accel__5959 = cljs.core.get.call(null,map__5956__5958,"﷐'accel");
var time__5960 = cljs.core.get.call(null,map__5956__5958,"﷐'time");
var end__5961 = cljs.core.get.call(null,map__5956__5958,"﷐'end");
var start__5962 = cljs.core.get.call(null,map__5956__5958,"﷐'start");

return (new goog.fx.dom.Fade(element,start__5962,end__5961,time__5960,accel__5959));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-in",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-in",0,1,(function (){var or__3548__auto____5963 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5963))
{return or__3548__auto____5963;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-in",(function (element,m){
var map__5964__5965 = one.browser.animation.standardize.call(null,element,m);
var map__5964__5966 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5964__5965))?cljs.core.apply.call(null,cljs.core.hash_map,map__5964__5965):map__5964__5965);
var accel__5967 = cljs.core.get.call(null,map__5964__5966,"﷐'accel");
var time__5968 = cljs.core.get.call(null,map__5964__5966,"﷐'time");

return (new goog.fx.dom.FadeIn(element,time__5968,accel__5967));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-out",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-out",1,0,(function (){var or__3548__auto____5969 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5969))
{return or__3548__auto____5969;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-out",(function (element,m){
var map__5970__5971 = one.browser.animation.standardize.call(null,element,m);
var map__5970__5972 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5970__5971))?cljs.core.apply.call(null,cljs.core.hash_map,map__5970__5971):map__5970__5971);
var accel__5973 = cljs.core.get.call(null,map__5970__5972,"﷐'accel");
var time__5974 = cljs.core.get.call(null,map__5970__5972,"﷐'time");

return (new goog.fx.dom.FadeOut(element,time__5974,accel__5973));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-in-and-show",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-in-and-show",0,1,(function (){var or__3548__auto____5975 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5975))
{return or__3548__auto____5975;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-in-and-show",(function (element,m){
var map__5976__5977 = one.browser.animation.standardize.call(null,element,m);
var map__5976__5978 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5976__5977))?cljs.core.apply.call(null,cljs.core.hash_map,map__5976__5977):map__5976__5977);
var accel__5979 = cljs.core.get.call(null,map__5976__5978,"﷐'accel");
var time__5980 = cljs.core.get.call(null,map__5976__5978,"﷐'time");

return (new goog.fx.dom.FadeInAndShow(element,time__5980,accel__5979));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'fade-out-and-hide",(function (element,m){
return (new one.browser.animation.Effect("﷐'fade-out-and-hide",1,0,(function (){var or__3548__auto____5981 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5981))
{return or__3548__auto____5981;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'fade-out-and-hide",(function (element,m){
var map__5983__5984 = one.browser.animation.standardize.call(null,element,m);
var map__5983__5985 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5983__5984))?cljs.core.apply.call(null,cljs.core.hash_map,map__5983__5984):map__5983__5984);
var accel__5986 = cljs.core.get.call(null,map__5983__5985,"﷐'accel");
var time__5987 = cljs.core.get.call(null,map__5983__5985,"﷐'time");

return (new goog.fx.dom.FadeOutAndHide(element,time__5987,accel__5986));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'bg-color",(function (element,m){
var start__5989 = (function (){var or__3548__auto____5988 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____5988))
{return or__3548__auto____5988;
} else
{return element;
}
})();
var end__5991 = (function (){var or__3548__auto____5990 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____5990))
{return or__3548__auto____5990;
} else
{return element;
}
})();

return (new one.browser.animation.Effect("﷐'bg-color",one.color.bg_color.call(null,start__5989),one.color.bg_color.call(null,end__5991),(function (){var or__3548__auto____5992 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____5992))
{return or__3548__auto____5992;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'bg-color",(function (element,m){
var map__5993__5994 = one.browser.animation.standardize.call(null,element,m);
var map__5993__5995 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5993__5994))?cljs.core.apply.call(null,cljs.core.hash_map,map__5993__5994):map__5993__5994);
var accel__5996 = cljs.core.get.call(null,map__5993__5995,"﷐'accel");
var time__5997 = cljs.core.get.call(null,map__5993__5995,"﷐'time");
var end__5998 = cljs.core.get.call(null,map__5993__5995,"﷐'end");
var start__5999 = cljs.core.get.call(null,map__5993__5995,"﷐'start");

return (new goog.fx.dom.BgColorTransform(element,cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,start__5999)),cljs.core.apply.call(null,cljs.core.array,one.color.rgb.call(null,end__5998)),time__5997,accel__5996));
}));
/**
* Calculate the end of a slide based on the start value and the
* passed `:left`, `:right`, `:up` and `:down` values.
*/
one.browser.animation.calculate_slide_end = (function calculate_slide_end(p__6000,m){
var vec__6001__6002 = p__6000;
var x__6003 = cljs.core.nth.call(null,vec__6001__6002,0,null);
var y__6004 = cljs.core.nth.call(null,vec__6001__6002,1,null);

return cljs.core.vector.call(null,((x__6003 - "﷐'left".call(null,m,0)) + "﷐'right".call(null,m,0)),((y__6004 - "﷐'up".call(null,m,0)) + "﷐'down".call(null,m,0)));
});
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'slide",(function (element,m){
var start__6006 = one.browser.animation.position.call(null,(function (){var or__3548__auto____6005 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____6005))
{return or__3548__auto____6005;
} else
{return element;
}
})());
var end__6008 = (function (){var or__3548__auto____6007 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____6007))
{return or__3548__auto____6007;
} else
{return one.browser.animation.calculate_slide_end.call(null,start__6006,m);
}
})();

return (new one.browser.animation.Effect("﷐'slide",start__6006,end__6008,(function (){var or__3548__auto____6009 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____6009))
{return or__3548__auto____6009;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'slide",(function (element,m){
var map__6010__6011 = one.browser.animation.standardize.call(null,element,m);
var map__6010__6012 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6010__6011))?cljs.core.apply.call(null,cljs.core.hash_map,map__6010__6011):map__6010__6011);
var accel__6013 = cljs.core.get.call(null,map__6010__6012,"﷐'accel");
var time__6014 = cljs.core.get.call(null,map__6010__6012,"﷐'time");
var end__6015 = cljs.core.get.call(null,map__6010__6012,"﷐'end");
var start__6016 = cljs.core.get.call(null,map__6010__6012,"﷐'start");

return (new goog.fx.dom.Slide(element,cljs.core.apply.call(null,cljs.core.array,start__6016),cljs.core.apply.call(null,cljs.core.array,end__6015),time__6014,accel__6013));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize-height",(function (element,m){
var start__6019 = (function (){var temp__3698__auto____6017 = "﷐'start".call(null,m);

if(cljs.core.truth_(temp__3698__auto____6017))
{var h__6018 = temp__3698__auto____6017;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,element),one.browser.animation.height.call(null,h__6018)]);
} else
{return null;
}
})();
var end__6022 = (function (){var temp__3698__auto____6020 = "﷐'end".call(null,m);

if(cljs.core.truth_(temp__3698__auto____6020))
{var h__6021 = temp__3698__auto____6020;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,element),one.browser.animation.height.call(null,h__6021)]);
} else
{return null;
}
})();

return (new one.browser.animation.Effect("﷐'resize-height",one.browser.animation.size.call(null,(function (){var or__3548__auto____6023 = start__6019;

if(cljs.core.truth_(or__3548__auto____6023))
{return or__3548__auto____6023;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____6024 = end__6022;

if(cljs.core.truth_(or__3548__auto____6024))
{return or__3548__auto____6024;
} else
{return element;
}
})()),(function (){var or__3548__auto____6025 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____6025))
{return or__3548__auto____6025;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize-height",(function (element,m){
var map__6026__6027 = one.browser.animation.standardize.call(null,element,m);
var map__6026__6028 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6026__6027))?cljs.core.apply.call(null,cljs.core.hash_map,map__6026__6027):map__6026__6027);
var accel__6029 = cljs.core.get.call(null,map__6026__6028,"﷐'accel");
var time__6030 = cljs.core.get.call(null,map__6026__6028,"﷐'time");
var end__6031 = cljs.core.get.call(null,map__6026__6028,"﷐'end");
var start__6032 = cljs.core.get.call(null,map__6026__6028,"﷐'start");

return (new goog.fx.dom.ResizeHeight(element,one.browser.animation.height.call(null,start__6032),one.browser.animation.height.call(null,end__6031),time__6030,accel__6029));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize-width",(function (element,m){
var start__6035 = (function (){var temp__3698__auto____6033 = "﷐'start".call(null,m);

if(cljs.core.truth_(temp__3698__auto____6033))
{var w__6034 = temp__3698__auto____6033;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,w__6034),one.browser.animation.height.call(null,element)]);
} else
{return null;
}
})();
var end__6038 = (function (){var temp__3698__auto____6036 = "﷐'end".call(null,m);

if(cljs.core.truth_(temp__3698__auto____6036))
{var w__6037 = temp__3698__auto____6036;

return cljs.core.Vector.fromArray([one.browser.animation.width.call(null,w__6037),one.browser.animation.height.call(null,element)]);
} else
{return null;
}
})();

return (new one.browser.animation.Effect("﷐'resize-width",one.browser.animation.size.call(null,(function (){var or__3548__auto____6039 = start__6035;

if(cljs.core.truth_(or__3548__auto____6039))
{return or__3548__auto____6039;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____6040 = end__6038;

if(cljs.core.truth_(or__3548__auto____6040))
{return or__3548__auto____6040;
} else
{return element;
}
})()),(function (){var or__3548__auto____6041 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____6041))
{return or__3548__auto____6041;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize-width",(function (element,m){
var map__6042__6043 = one.browser.animation.standardize.call(null,element,m);
var map__6042__6044 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6042__6043))?cljs.core.apply.call(null,cljs.core.hash_map,map__6042__6043):map__6042__6043);
var accel__6045 = cljs.core.get.call(null,map__6042__6044,"﷐'accel");
var time__6046 = cljs.core.get.call(null,map__6042__6044,"﷐'time");
var end__6047 = cljs.core.get.call(null,map__6042__6044,"﷐'end");
var start__6048 = cljs.core.get.call(null,map__6042__6044,"﷐'start");

return (new goog.fx.dom.ResizeWidth(element,one.browser.animation.width.call(null,start__6048),one.browser.animation.width.call(null,end__6047),time__6046,accel__6045));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'resize",(function (element,m){
return (new one.browser.animation.Effect("﷐'resize",one.browser.animation.size.call(null,(function (){var or__3548__auto____6049 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____6049))
{return or__3548__auto____6049;
} else
{return element;
}
})()),one.browser.animation.size.call(null,(function (){var or__3548__auto____6050 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____6050))
{return or__3548__auto____6050;
} else
{return element;
}
})()),(function (){var or__3548__auto____6051 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____6051))
{return or__3548__auto____6051;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'resize",(function (element,m){
var map__6052__6053 = one.browser.animation.standardize.call(null,element,m);
var map__6052__6054 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6052__6053))?cljs.core.apply.call(null,cljs.core.hash_map,map__6052__6053):map__6052__6053);
var accel__6055 = cljs.core.get.call(null,map__6052__6054,"﷐'accel");
var time__6056 = cljs.core.get.call(null,map__6052__6054,"﷐'time");
var end__6057 = cljs.core.get.call(null,map__6052__6054,"﷐'end");
var start__6058 = cljs.core.get.call(null,map__6052__6054,"﷐'start");

return (new goog.fx.dom.Resize(element,cljs.core.apply.call(null,cljs.core.array,start__6058),cljs.core.apply.call(null,cljs.core.array,end__6057),time__6056,accel__6055));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'scroll",(function (element,m){
var start__6060 = (function (){var or__3548__auto____6059 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____6059))
{return or__3548__auto____6059;
} else
{return element;
}
})();
var end__6061 = "﷐'end".call(null,m);

return (new one.browser.animation.Effect("﷐'scroll",one.browser.animation.scroll.call(null,start__6060),one.browser.animation.scroll.call(null,end__6061),(function (){var or__3548__auto____6062 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____6062))
{return or__3548__auto____6062;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'scroll",(function (element,m){
var map__6063__6064 = one.browser.animation.standardize.call(null,element,m);
var map__6063__6065 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6063__6064))?cljs.core.apply.call(null,cljs.core.hash_map,map__6063__6064):map__6063__6064);
var accel__6066 = cljs.core.get.call(null,map__6063__6065,"﷐'accel");
var time__6067 = cljs.core.get.call(null,map__6063__6065,"﷐'time");
var end__6068 = cljs.core.get.call(null,map__6063__6065,"﷐'end");
var start__6069 = cljs.core.get.call(null,map__6063__6065,"﷐'start");

return (new goog.fx.dom.Scroll(element,cljs.core.apply.call(null,cljs.core.array,start__6069),cljs.core.apply.call(null,cljs.core.array,end__6068),time__6067,accel__6066));
}));
cljs.core._add_method.call(null,one.browser.animation.standardize,"﷐'swipe",(function (element,m){
var start__6071 = (function (){var or__3548__auto____6070 = "﷐'start".call(null,m);

if(cljs.core.truth_(or__3548__auto____6070))
{return or__3548__auto____6070;
} else
{return cljs.core.Vector.fromArray([0,0]);
}
})();
var end__6073 = (function (){var or__3548__auto____6072 = "﷐'end".call(null,m);

if(cljs.core.truth_(or__3548__auto____6072))
{return or__3548__auto____6072;
} else
{return element;
}
})();

return (new one.browser.animation.Effect("﷐'swipe",one.browser.animation.size.call(null,start__6071),one.browser.animation.size.call(null,end__6073),(function (){var or__3548__auto____6074 = "﷐'time".call(null,m);

if(cljs.core.truth_(or__3548__auto____6074))
{return or__3548__auto____6074;
} else
{return one.browser.animation._STAR_default_time_STAR_;
}
})(),one.browser.animation.accel.call(null,m)));
}));
cljs.core._add_method.call(null,one.browser.animation.effect,"﷐'swipe",(function (element,m){
var map__6075__6076 = one.browser.animation.standardize.call(null,element,m);
var map__6075__6077 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6075__6076))?cljs.core.apply.call(null,cljs.core.hash_map,map__6075__6076):map__6075__6076);
var accel__6078 = cljs.core.get.call(null,map__6075__6077,"﷐'accel");
var time__6079 = cljs.core.get.call(null,map__6075__6077,"﷐'time");
var end__6080 = cljs.core.get.call(null,map__6075__6077,"﷐'end");
var start__6081 = cljs.core.get.call(null,map__6075__6077,"﷐'start");

return (new goog.fx.dom.Swipe(element,cljs.core.apply.call(null,cljs.core.array,start__6081),cljs.core.apply.call(null,cljs.core.array,end__6080),time__6079,accel__6078));
}));
/**
* Cause the passed animations to run in parallel.
* @param {...*} var_args
*/
one.browser.animation.parallel = (function() { 
var parallel__delegate = function (effects){
var parallel__6082 = (new goog.fx.AnimationParallelQueue());

var G__6083__6084 = cljs.core.seq.call(null,effects);

if(cljs.core.truth_(G__6083__6084))
{var effect__6085 = cljs.core.first.call(null,G__6083__6084);
var G__6083__6086 = G__6083__6084;

while(true){
parallel__6082.add(effect__6085);
var temp__3698__auto____6087 = cljs.core.next.call(null,G__6083__6086);

if(cljs.core.truth_(temp__3698__auto____6087))
{var G__6083__6088 = temp__3698__auto____6087;

{
var G__6089 = cljs.core.first.call(null,G__6083__6088);
var G__6090 = G__6083__6088;
effect__6085 = G__6089;
G__6083__6086 = G__6090;
continue;
}
} else
{}
break;
}
} else
{}
return parallel__6082;
};
var parallel = function (var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return parallel__delegate.call(this, effects);
};
parallel.cljs$lang$maxFixedArity = 0;
parallel.cljs$lang$applyTo = (function (arglist__6091){
var effects = cljs.core.seq( arglist__6091 );;
return parallel__delegate.call(this, effects);
});
return parallel;
})()
;
/**
* Cause the passed animations to be run in order.
* @param {...*} var_args
*/
one.browser.animation.serial = (function() { 
var serial__delegate = function (effects){
var serial__6092 = (new goog.fx.AnimationSerialQueue());

var G__6093__6094 = cljs.core.seq.call(null,effects);

if(cljs.core.truth_(G__6093__6094))
{var effect__6095 = cljs.core.first.call(null,G__6093__6094);
var G__6093__6096 = G__6093__6094;

while(true){
serial__6092.add(effect__6095);
var temp__3698__auto____6097 = cljs.core.next.call(null,G__6093__6096);

if(cljs.core.truth_(temp__3698__auto____6097))
{var G__6093__6098 = temp__3698__auto____6097;

{
var G__6099 = cljs.core.first.call(null,G__6093__6098);
var G__6100 = G__6093__6098;
effect__6095 = G__6099;
G__6093__6096 = G__6100;
continue;
}
} else
{}
break;
}
} else
{}
return serial__6092;
};
var serial = function (var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return serial__delegate.call(this, effects);
};
serial.cljs$lang$maxFixedArity = 0;
serial.cljs$lang$applyTo = (function (arglist__6101){
var effects = cljs.core.seq( arglist__6101 );;
return serial__delegate.call(this, effects);
});
return serial;
})()
;
/**
* Mapping of specific effects to a more general category of
* effect. For example, there are multiple size and opacity
* effects. Within a single animation, each type of effect should
* influence subsequent effects of the same type.
*/
one.browser.animation.effect_types = cljs.core.ObjMap.fromObject(["﷐'fade-in","﷐'resize-height","﷐'fade-in-and-show","﷐'color","﷐'resize","﷐'slide","﷐'bg-color","﷐'resize-width","﷐'swipe","﷐'scroll","﷐'fade-out-and-hide","﷐'fade","﷐'fade-out"],{"﷐'fade-in":"﷐'opacity","﷐'resize-height":"﷐'size","﷐'fade-in-and-show":"﷐'opacity","﷐'color":"﷐'color","﷐'resize":"﷐'size","﷐'slide":"﷐'position","﷐'bg-color":"﷐'bg-color","﷐'resize-width":"﷐'size","﷐'swipe":"﷐'size","﷐'scroll":"﷐'scroll","﷐'fade-out-and-hide":"﷐'opacity","﷐'fade":"﷐'opacity","﷐'fade-out":"﷐'opacity"});
/**
* Standardize an effect within the scope of previous effects. Return
* a vector containing the new environment and the standardized
* effect. An effect may be a single map or a vector of maps
*/
one.browser.animation.standardize_in_env = (function standardize_in_env(element,env,effect){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,effect)))
{var coll__6103 = cljs.core.map.call(null,(function (p1__6102_SHARP_){
return standardize_in_env.call(null,element,env,p1__6102_SHARP_);
}),effect);

return cljs.core.Vector.fromArray([cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,cljs.core.first,coll__6103)),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.second,coll__6103))]);
} else
{var effect_type__6104 = "﷐'effect".call(null,effect).call(null,one.browser.animation.effect_types);
var effect__6105 = one.browser.animation.standardize.call(null,cljs.core.get.call(null,env,effect_type__6104,element),effect);
var env__6106 = cljs.core.assoc.call(null,env,effect_type__6104,effect__6105);

return cljs.core.Vector.fromArray([env__6106,effect__6105]);
}
});
/**
* Accepts an element and a list of effects and vectors of effects and
* returns the same structure with all effect map standardized. Missing
* values will be calculated based on previous effects.
* @param {...*} var_args
*/
one.browser.animation.standardize_all_effects = (function() { 
var standardize_all_effects__delegate = function (element,effects){
var env__6107 = cljs.core.ObjMap.fromObject([],{});
var effects__6108 = effects;
var std_effects__6109 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,effects__6108)))
{var effect__6111 = cljs.core.first.call(null,effects__6108);
var vec__6110__6112 = one.browser.animation.standardize_in_env.call(null,element,env__6107,effect__6111);
var env__6113 = cljs.core.nth.call(null,vec__6110__6112,0,null);
var effect__6114 = cljs.core.nth.call(null,vec__6110__6112,1,null);

{
var G__6115 = env__6113;
var G__6116 = cljs.core.rest.call(null,effects__6108);
var G__6117 = cljs.core.conj.call(null,std_effects__6109,effect__6114);
env__6107 = G__6115;
effects__6108 = G__6116;
std_effects__6109 = G__6117;
continue;
}
} else
{return std_effects__6109;
}
break;
}
};
var standardize_all_effects = function (element,var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return standardize_all_effects__delegate.call(this, element, effects);
};
standardize_all_effects.cljs$lang$maxFixedArity = 1;
standardize_all_effects.cljs$lang$applyTo = (function (arglist__6118){
var element = cljs.core.first(arglist__6118);
var effects = cljs.core.rest(arglist__6118);
return standardize_all_effects__delegate.call(this, element, effects);
});
return standardize_all_effects;
})()
;
/**
* Bind effects to an element returning an animation. Accepts an HTML
* element and any number of effects. Effects can be Maps or a Vector
* of Maps. Each effect is run in order. Each effect within a Vector is
* run in parallel.
* @param {...*} var_args
*/
one.browser.animation.bind = (function() { 
var bind__delegate = function (element,effects){
var element__6119 = one.browser.animation.get_element.call(null,element);
var effects__6120 = cljs.core.apply.call(null,one.browser.animation.standardize_all_effects,element__6119,effects);
var serial__6121 = (new goog.fx.AnimationSerialQueue());

var G__6122__6123 = cljs.core.seq.call(null,effects__6120);

if(cljs.core.truth_(G__6122__6123))
{var sequential_effect__6124 = cljs.core.first.call(null,G__6122__6123);
var G__6122__6125 = G__6122__6123;

while(true){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,sequential_effect__6124)))
{var parallel__6126 = (new goog.fx.AnimationParallelQueue());

var G__6127__6128 = cljs.core.seq.call(null,sequential_effect__6124);

if(cljs.core.truth_(G__6127__6128))
{var parallel_effect__6129 = cljs.core.first.call(null,G__6127__6128);
var G__6127__6130 = G__6127__6128;

while(true){
parallel__6126.add(one.browser.animation.effect.call(null,element__6119,parallel_effect__6129));
var temp__3698__auto____6131 = cljs.core.next.call(null,G__6127__6130);

if(cljs.core.truth_(temp__3698__auto____6131))
{var G__6127__6132 = temp__3698__auto____6131;

{
var G__6135 = cljs.core.first.call(null,G__6127__6132);
var G__6136 = G__6127__6132;
parallel_effect__6129 = G__6135;
G__6127__6130 = G__6136;
continue;
}
} else
{}
break;
}
} else
{}
serial__6121.add(parallel__6126);
} else
{serial__6121.add(one.browser.animation.effect.call(null,element__6119,sequential_effect__6124));
}
var temp__3698__auto____6133 = cljs.core.next.call(null,G__6122__6125);

if(cljs.core.truth_(temp__3698__auto____6133))
{var G__6122__6134 = temp__3698__auto____6133;

{
var G__6137 = cljs.core.first.call(null,G__6122__6134);
var G__6138 = G__6122__6134;
sequential_effect__6124 = G__6137;
G__6122__6125 = G__6138;
continue;
}
} else
{}
break;
}
} else
{}
return serial__6121;
};
var bind = function (element,var_args){
var effects = null;
if (goog.isDef(var_args)) {
  effects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bind__delegate.call(this, element, effects);
};
bind.cljs$lang$maxFixedArity = 1;
bind.cljs$lang$applyTo = (function (arglist__6139){
var element = cljs.core.first(arglist__6139);
var effects = cljs.core.rest(arglist__6139);
return bind__delegate.call(this, element, effects);
});
return bind;
})()
;
/**
* Source of unique animation ids.
*/
one.browser.animation.animation_id = cljs.core.atom.call(null,0);
/**
* Data structure which supports running animations
* sequentially which have been started by the play and play-animation
* functions.
*/
one.browser.animation.animation_queue = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["﷐'runner","﷐'running","﷐'next"],{"﷐'runner":null,"﷐'running":null,"﷐'next":cljs.core.Vector.fromArray([])}));
/**
* Add an animation to the `animation-queue`. If no runner is
* currently running animations then assign that job to the calling
* function by setting `:runner` to the passed `id` and putting the
* first animation to run under `:running`.
* 
* If a runner is already running then add this animation to the
* vector under `:next`.
*/
one.browser.animation.add_to_queue = (function add_to_queue(queue,id,animations){
var new_next__6140 = cljs.core.conj.call(null,"﷐'next".call(null,queue),animations);

if(cljs.core.truth_("﷐'runner".call(null,queue)))
{return cljs.core.assoc.call(null,queue,"﷐'next",new_next__6140);
} else
{return cljs.core.assoc.call(null,queue,"﷐'runner",id,"﷐'running",cljs.core.first.call(null,new_next__6140),"﷐'next",cljs.core.vec.call(null,cljs.core.rest.call(null,new_next__6140)));
}
});
/**
* Record that the runner with `id` has finished running the
* animation. If there are more animations to run, move the next
* animation under the running key and remove it from `:next`. The same
* runner will continue running animations.
* 
* If there are no more animations to run, release the runner from duty
* by setting `:runner` to nil.
*/
one.browser.animation.record_finished_animation = (function record_finished_animation(queue,id){
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,"﷐'next".call(null,queue))))
{return cljs.core.assoc.call(null,queue,"﷐'runner",null,"﷐'running",null);
} else
{return cljs.core.assoc.call(null,queue,"﷐'running",cljs.core.first.call(null,"﷐'next".call(null,queue)),"﷐'next",cljs.core.vec.call(null,cljs.core.rest.call(null,"﷐'next".call(null,queue))));
}
});
/**
* This function is called when the runner with `id` has finished
* running an animation. After updating the queue, if this runner is
* still the designated runner, then start running the next
* animation. If the animation which has completed has an associated
* `:after` function, run it.
*/
one.browser.animation.animation_finished = (function animation_finished(id,p__6141){
var map__6142__6143 = p__6141;
var map__6142__6144 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6142__6143))?cljs.core.apply.call(null,cljs.core.hash_map,map__6142__6143):map__6142__6143);
var after__6145 = cljs.core.get.call(null,map__6142__6144,"﷐'after");

var new_queue__6146 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_queue,one.browser.animation.record_finished_animation,id);

if(cljs.core.truth_(after__6145))
{after__6145.call(null);
} else
{}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'runner".call(null,new_queue__6146),id)))
{return one.browser.animation.play_animations.call(null,id,new_queue__6146);
} else
{return null;
}
});
/**
* Create the animation to run.
*/
one.browser.animation.make_animation = (function make_animation(p__6147){
var map__6148__6149 = p__6147;
var map__6148__6150 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6148__6149))?cljs.core.apply.call(null,cljs.core.hash_map,map__6148__6149):map__6148__6149);
var animation__6151 = cljs.core.get.call(null,map__6148__6150,"﷐'animation");
var element__6152 = cljs.core.get.call(null,map__6148__6150,"﷐'element");

if(cljs.core.truth_(element__6152))
{return one.browser.animation.bind.call(null,element__6152,animation__6151);
} else
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,animation__6151)))
{return animation__6151.call(null);
} else
{if(cljs.core.truth_("﷐'else"))
{return animation__6151;
} else
{return null;
}
}
}
});
/**
* Called by a function which has been assigned the task of running
* animations until there are no more to run. `id` is the runner
* id. `queue` is the value of animation-queue after it was last
* updated. Runs any `:before` function then runs the
* animation. Arranges for `animation-finished` to be called when the
* animation is complete.
* 
* Implementation note: The delay is a hack to get around the fact that
* the `finish` event fires just before the animation has completed. The
* 100 ms delay gives the finished animation just enough time to
* complete before the next animation is started.
*/
one.browser.animation.play_animations = (function play_animations(id,queue){
var animation_map__6153 = "﷐'running".call(null,queue);
var animation__6154 = one.browser.animation.make_animation.call(null,animation_map__6153);

clojure.browser.event.listen_once.call(null,animation__6154,"finish",(function (){
return (new goog.async.Delay((function (){
return one.browser.animation.animation_finished.call(null,id,animation_map__6153);
}))).start(100);
}));
var temp__3698__auto____6155 = "﷐'before".call(null,animation_map__6153);

if(cljs.core.truth_(temp__3698__auto____6155))
{var before__6156 = temp__3698__auto____6155;

before__6156.call(null);
} else
{}
return one.core.start.call(null,animation__6154);
});
/**
* Accepts an element and an animation and ensures that this animation
* will be run after all other animations that have been started by
* this function or by `play-animation`. An optional map may also be
* passed which may contain the keys `:before` and `:after`. Use the `:before`
* key to provide a function which will be called just before
* the animation starts. Use the `:after` key to provide a function
* which will be called after the aniamtion is finished.
* 
* The `serial` function allows you to create animations which run in
* sequence. The `start` function will run these animations. If `start`
* is called to run an animation before a previous call to `start` has
* completed, the animations can conflict. This function should be used
* instead of `start` when you need to ensure that animations do not
* overlap.
*/
one.browser.animation.play = (function() {
var play = null;
var play__6167 = (function (element,animation){
return play.call(null,element,animation,cljs.core.ObjMap.fromObject([],{}));
});
var play__6168 = (function (element,animation,p__6157){
var map__6158__6159 = p__6157;
var map__6158__6160 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6158__6159))?cljs.core.apply.call(null,cljs.core.hash_map,map__6158__6159):map__6158__6159);
var before__6161 = cljs.core.get.call(null,map__6158__6160,"﷐'before");
var after__6162 = cljs.core.get.call(null,map__6158__6160,"﷐'after");
var name__6163 = cljs.core.get.call(null,map__6158__6160,"﷐'name");

var id__6164 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_id,cljs.core.inc);
var animation__6165 = cljs.core.ObjMap.fromObject(["﷐'name","﷐'id","﷐'element","﷐'animation","﷐'before","﷐'after"],{"﷐'name":name__6163,"﷐'id":id__6164,"﷐'element":element,"﷐'animation":animation,"﷐'before":before__6161,"﷐'after":after__6162});
var queue__6166 = cljs.core.swap_BANG_.call(null,one.browser.animation.animation_queue,one.browser.animation.add_to_queue,id__6164,animation__6165);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'runner".call(null,queue__6166),id__6164)))
{return one.browser.animation.play_animations.call(null,id__6164,queue__6166);
} else
{return null;
}
});
play = function(element,animation,p__6157){
switch(arguments.length){
case  2 :
return play__6167.call(this,element,animation);
case  3 :
return play__6168.call(this,element,animation,p__6157);
}
throw('Invalid arity: ' + arguments.length);
};
return play;
})()
;
/**
* Accepts an animation and an optional map and ensures that this
* animation will be run after all other animations that have been
* started by this function or by `play`. See documentation for `play`.
*/
one.browser.animation.play_animation = (function() {
var play_animation = null;
var play_animation__6170 = (function (animation){
return play_animation.call(null,animation,cljs.core.ObjMap.fromObject([],{}));
});
var play_animation__6171 = (function (animation,opts){
return one.browser.animation.play.call(null,null,animation,opts);
});
play_animation = function(animation,opts){
switch(arguments.length){
case  1 :
return play_animation__6170.call(this,animation);
case  2 :
return play_animation__6171.call(this,animation,opts);
}
throw('Invalid arity: ' + arguments.length);
};
return play_animation;
})()
;

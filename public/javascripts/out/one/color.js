goog.provide('one.color');
goog.require('cljs.core');
goog.require('one.core');
goog.require('goog.string');
goog.require('goog.style');
goog.require('goog.color');
goog.require('goog.color.alpha');
one.color.IColor = {};
one.color.rgb = (function rgb(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6173 = this$;

if(cljs.core.truth_(and__3546__auto____6173))
{return this$.one$color$IColor$rgb;
} else
{return and__3546__auto____6173;
}
})()))
{return this$.one$color$IColor$rgb(this$);
} else
{return (function (){var or__3548__auto____6174 = (one.color.rgb[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6174))
{return or__3548__auto____6174;
} else
{var or__3548__auto____6175 = (one.color.rgb["_"]);

if(cljs.core.truth_(or__3548__auto____6175))
{return or__3548__auto____6175;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.rgb",this$);
}
}
})().call(null,this$);
}
});
one.color.rgba = (function rgba(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6176 = this$;

if(cljs.core.truth_(and__3546__auto____6176))
{return this$.one$color$IColor$rgba;
} else
{return and__3546__auto____6176;
}
})()))
{return this$.one$color$IColor$rgba(this$);
} else
{return (function (){var or__3548__auto____6177 = (one.color.rgba[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6177))
{return or__3548__auto____6177;
} else
{var or__3548__auto____6178 = (one.color.rgba["_"]);

if(cljs.core.truth_(or__3548__auto____6178))
{return or__3548__auto____6178;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.rgba",this$);
}
}
})().call(null,this$);
}
});
one.color.hex = (function hex(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6179 = this$;

if(cljs.core.truth_(and__3546__auto____6179))
{return this$.one$color$IColor$hex;
} else
{return and__3546__auto____6179;
}
})()))
{return this$.one$color$IColor$hex(this$);
} else
{return (function (){var or__3548__auto____6180 = (one.color.hex[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6180))
{return or__3548__auto____6180;
} else
{var or__3548__auto____6181 = (one.color.hex["_"]);

if(cljs.core.truth_(or__3548__auto____6181))
{return or__3548__auto____6181;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.hex",this$);
}
}
})().call(null,this$);
}
});
one.color.hex_rgba = (function hex_rgba(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6182 = this$;

if(cljs.core.truth_(and__3546__auto____6182))
{return this$.one$color$IColor$hex_rgba;
} else
{return and__3546__auto____6182;
}
})()))
{return this$.one$color$IColor$hex_rgba(this$);
} else
{return (function (){var or__3548__auto____6183 = (one.color.hex_rgba[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6183))
{return or__3548__auto____6183;
} else
{var or__3548__auto____6184 = (one.color.hex_rgba["_"]);

if(cljs.core.truth_(or__3548__auto____6184))
{return or__3548__auto____6184;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.hex-rgba",this$);
}
}
})().call(null,this$);
}
});
one.color.alpha = (function alpha(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6185 = this$;

if(cljs.core.truth_(and__3546__auto____6185))
{return this$.one$color$IColor$alpha;
} else
{return and__3546__auto____6185;
}
})()))
{return this$.one$color$IColor$alpha(this$);
} else
{return (function (){var or__3548__auto____6186 = (one.color.alpha[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6186))
{return or__3548__auto____6186;
} else
{var or__3548__auto____6187 = (one.color.alpha["_"]);

if(cljs.core.truth_(or__3548__auto____6187))
{return or__3548__auto____6187;
} else
{throw cljs.core.missing_protocol.call(null,"IColor.alpha",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
* @param {*} r
* @param {*} g
* @param {*} b
* @param {*} a
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
one.color.Color = (function (r,g,b,a,__meta,__extmap){
this.r = r;
this.g = g;
this.b = b;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
one.color.Color.prototype.cljs$core$IHash$ = true;
one.color.Color.prototype.cljs$core$IHash$_hash = (function (this__326__auto__){
var this__6190 = this;
return cljs.core.hash_coll.call(null,this__326__auto__);
});
one.color.Color.prototype.cljs$core$ILookup$ = true;
one.color.Color.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6214 = null;
var G__6214__6215 = (function (this__331__auto__,k__332__auto__){
var this__6191 = this;
return cljs.core._lookup.call(null,this__331__auto__,k__332__auto__,null);
});
var G__6214__6216 = (function (this__333__auto__,k__334__auto__,else__335__auto__){
var this__6192 = this;
return cljs.core.get.call(null,cljs.core.merge.call(null,cljs.core.hash_map.call(null,"﷐'r",this__6192.r,"﷐'g",this__6192.g,"﷐'b",this__6192.b,"﷐'a",this__6192.a),this__6192.__extmap),k__334__auto__,else__335__auto__);
});
G__6214 = function(this__333__auto__,k__334__auto__,else__335__auto__){
switch(arguments.length){
case  2 :
return G__6214__6215.call(this,this__333__auto__,k__334__auto__);
case  3 :
return G__6214__6216.call(this,this__333__auto__,k__334__auto__,else__335__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6214;
})()
;
one.color.Color.prototype.cljs$core$IAssociative$ = true;
one.color.Color.prototype.cljs$core$IAssociative$_assoc = (function (this__339__auto__,k__340__auto__,G__6188){
var this__6193 = this;
var pred__6194__6197 = cljs.core.identical_QMARK_;
var expr__6195__6198 = k__340__auto__;

if(cljs.core.truth_(pred__6194__6197.call(null,"﷐'r",expr__6195__6198)))
{return (new one.color.Color(G__6188,this__6193.g,this__6193.b,this__6193.a,this__6193.__meta,this__6193.__extmap));
} else
{if(cljs.core.truth_(pred__6194__6197.call(null,"﷐'g",expr__6195__6198)))
{return (new one.color.Color(this__6193.r,G__6188,this__6193.b,this__6193.a,this__6193.__meta,this__6193.__extmap));
} else
{if(cljs.core.truth_(pred__6194__6197.call(null,"﷐'b",expr__6195__6198)))
{return (new one.color.Color(this__6193.r,this__6193.g,G__6188,this__6193.a,this__6193.__meta,this__6193.__extmap));
} else
{if(cljs.core.truth_(pred__6194__6197.call(null,"﷐'a",expr__6195__6198)))
{return (new one.color.Color(this__6193.r,this__6193.g,this__6193.b,G__6188,this__6193.__meta,this__6193.__extmap));
} else
{return (new one.color.Color(this__6193.r,this__6193.g,this__6193.b,this__6193.a,this__6193.__meta,cljs.core.assoc.call(null,this__6193.__extmap,k__340__auto__,G__6188)));
}
}
}
}
});
one.color.Color.prototype.one$color$IColor$ = true;
one.color.Color.prototype.one$color$IColor$rgb = (function (_){
var this__6199 = this;
return cljs.core.Vector.fromArray([this__6199.r,this__6199.g,this__6199.b]);
});
one.color.Color.prototype.one$color$IColor$rgba = (function (_){
var this__6200 = this;
return cljs.core.Vector.fromArray([this__6200.r,this__6200.g,this__6200.b,this__6200.a]);
});
one.color.Color.prototype.one$color$IColor$hex = (function (_){
var this__6201 = this;
return goog.color.rgbArrayToHex.call(null,cljs.core.array.call(null,this__6201.r,this__6201.g,this__6201.b));
});
one.color.Color.prototype.one$color$IColor$hex_rgba = (function (_){
var this__6202 = this;
return goog.color.alpha.rgbaArrayToHex.call(null,cljs.core.array.call(null,this__6202.r,this__6202.g,this__6202.b,this__6202.a));
});
one.color.Color.prototype.one$color$IColor$alpha = (function (_){
var this__6203 = this;
return this__6203.a;
});
one.color.Color.prototype.cljs$core$IRecord$ = true;
one.color.Color.prototype.cljs$core$ICollection$ = true;
one.color.Color.prototype.cljs$core$ICollection$_conj = (function (this__337__auto__,entry__338__auto__){
var this__6204 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__338__auto__)))
{return cljs.core._assoc.call(null,this__337__auto__,cljs.core._nth.call(null,entry__338__auto__,0),cljs.core._nth.call(null,entry__338__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__337__auto__,entry__338__auto__);
}
});
one.color.Color.prototype.cljs$core$ISeqable$ = true;
one.color.Color.prototype.cljs$core$ISeqable$_seq = (function (this__344__auto__){
var this__6205 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'r",this__6205.r),cljs.core.vector.call(null,"﷐'g",this__6205.g),cljs.core.vector.call(null,"﷐'b",this__6205.b),cljs.core.vector.call(null,"﷐'a",this__6205.a)]),this__6205.__extmap));
});
one.color.Color.prototype.cljs$core$IPrintable$ = true;
one.color.Color.prototype.cljs$core$IPrintable$_pr_seq = (function (this__346__auto__,opts__347__auto__){
var this__6206 = this;
var pr_pair__348__auto____6207 = (function (keyval__349__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__347__auto__,keyval__349__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__348__auto____6207,cljs.core.str.call(null,"#","one.color.Color","{"),", ","}",opts__347__auto__,cljs.core.concat.call(null,cljs.core.Vector.fromArray([cljs.core.vector.call(null,"﷐'r",this__6206.r),cljs.core.vector.call(null,"﷐'g",this__6206.g),cljs.core.vector.call(null,"﷐'b",this__6206.b),cljs.core.vector.call(null,"﷐'a",this__6206.a)]),this__6206.__extmap));
});
one.color.Color.prototype.cljs$core$ICounted$ = true;
one.color.Color.prototype.cljs$core$ICounted$_count = (function (this__336__auto__){
var this__6208 = this;
return (4 + cljs.core.count.call(null,this__6208.__extmap));
});
one.color.Color.prototype.cljs$core$IEquiv$ = true;
one.color.Color.prototype.cljs$core$IEquiv$_equiv = (function (this__327__auto__,other__328__auto__){
var this__6209 = this;
var and__3546__auto____6210 = (this__327__auto__.constructor === other__328__auto__.constructor);

if(cljs.core.truth_(and__3546__auto____6210))
{return cljs.core.equiv_map.call(null,this__327__auto__,other__328__auto__);
} else
{return and__3546__auto____6210;
}
});
one.color.Color.prototype.cljs$core$IWithMeta$ = true;
one.color.Color.prototype.cljs$core$IWithMeta$_with_meta = (function (this__330__auto__,G__6188){
var this__6211 = this;
return (new one.color.Color(this__6211.r,this__6211.g,this__6211.b,this__6211.a,G__6188,this__6211.__extmap));
});
one.color.Color.prototype.cljs$core$IMeta$ = true;
one.color.Color.prototype.cljs$core$IMeta$_meta = (function (this__329__auto__){
var this__6212 = this;
return this__6212.__meta;
});
one.color.Color.prototype.cljs$core$IMap$ = true;
one.color.Color.prototype.cljs$core$IMap$_dissoc = (function (this__341__auto__,k__342__auto__){
var this__6213 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["﷐'r","﷐'a","﷐'b","﷐'g"]),k__342__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__341__auto__),this__6213.__meta),k__342__auto__);
} else
{return (new one.color.Color(this__6213.r,this__6213.g,this__6213.b,this__6213.a,this__6213.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__6213.__extmap,k__342__auto__))));
}
});
one.color.__GT_Color = (function __GT_Color(r,g,b,a){
return (new one.color.Color(r,g,b,a));
});
one.color.map__GT_Color = (function map__GT_Color(G__6189){
return (new one.color.Color("﷐'r".call(null,G__6189),"﷐'g".call(null,G__6189),"﷐'b".call(null,G__6189),"﷐'a".call(null,G__6189),null,cljs.core.dissoc.call(null,G__6189,"﷐'r","﷐'g","﷐'b","﷐'a")));
});
one.color.make_color = (function() {
var make_color = null;
var make_color__6218 = (function (r,g,b){
return make_color.call(null,r,g,b,1);
});
var make_color__6219 = (function (r,g,b,a){
return (new one.color.Color(r,g,b,a));
});
make_color = function(r,g,b,a){
switch(arguments.length){
case  3 :
return make_color__6218.call(this,r,g,b);
case  4 :
return make_color__6219.call(this,r,g,b,a);
}
throw('Invalid arity: ' + arguments.length);
};
return make_color;
})()
;
one.color.IColorSource = {};
one.color.color = (function color(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6221 = this$;

if(cljs.core.truth_(and__3546__auto____6221))
{return this$.one$color$IColorSource$color;
} else
{return and__3546__auto____6221;
}
})()))
{return this$.one$color$IColorSource$color(this$);
} else
{return (function (){var or__3548__auto____6222 = (one.color.color[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6222))
{return or__3548__auto____6222;
} else
{var or__3548__auto____6223 = (one.color.color["_"]);

if(cljs.core.truth_(or__3548__auto____6223))
{return or__3548__auto____6223;
} else
{throw cljs.core.missing_protocol.call(null,"IColorSource.color",this$);
}
}
})().call(null,this$);
}
});
one.color.bg_color = (function bg_color(this$){
if(cljs.core.truth_((function (){var and__3546__auto____6224 = this$;

if(cljs.core.truth_(and__3546__auto____6224))
{return this$.one$color$IColorSource$bg_color;
} else
{return and__3546__auto____6224;
}
})()))
{return this$.one$color$IColorSource$bg_color(this$);
} else
{return (function (){var or__3548__auto____6225 = (one.color.bg_color[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6225))
{return or__3548__auto____6225;
} else
{var or__3548__auto____6226 = (one.color.bg_color["_"]);

if(cljs.core.truth_(or__3548__auto____6226))
{return or__3548__auto____6226;
} else
{throw cljs.core.missing_protocol.call(null,"IColorSource.bg-color",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.one$color$IColorSource$ = true;
Element.prototype.one$color$IColorSource$color = (function (this$){
return one.color.color.call(null,cljs.core.js__GT_clj.call(null,goog.color.parse.call(null,one.core.get_style.call(null,this$,"color")),"﷐'keywordize-keys",true));
});
Element.prototype.one$color$IColorSource$bg_color = (function (this$){
return one.color.color.call(null,cljs.core.js__GT_clj.call(null,(function (){var c__6227 = goog.style.getBackgroundColor.call(null,this$);

try{return goog.color.parse.call(null,c__6227);
}catch (e6228){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e6228)))
{var e__6229 = e6228;

return goog.color.alpha.parse.call(null,c__6227);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e6228;
} else
{return null;
}
}
}})(),"﷐'keywordize-keys",true));
});
cljs.core.ObjMap.prototype.one$color$IColorSource$ = true;
cljs.core.ObjMap.prototype.one$color$IColorSource$color = (function (this$){
return one.color.color.call(null,"﷐'hex".call(null,this$));
});
cljs.core.ObjMap.prototype.one$color$IColorSource$bg_color = (function (this$){
return one.color.color.call(null,this$);
});
String.prototype.one$color$IColorSource$ = true;
String.prototype.one$color$IColorSource$color = (function (this$){
return one.color.color.call(null,cljs.core.js__GT_clj.call(null,(cljs.core.truth_(goog.string.startsWith.call(null,this$,"#"))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$),7))?goog.color.hexToRgb.call(null,this$):(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$),9))?goog.color.alpha.hexToRgba.call(null,this$):null)):(cljs.core.truth_(goog.string.startsWith.call(null,this$,"rgba("))?goog.color.alpha.parse.call(null,this$):(cljs.core.truth_(goog.string.startsWith.call(null,this$,"rgb("))?goog.color.parseRgb.call(null,this$):null))),"﷐'keywordize-keys",true));
});
String.prototype.one$color$IColorSource$bg_color = (function (this$){
return one.color.color.call(null,this$);
});
Array.prototype.one$color$IColorSource$ = true;
Array.prototype.one$color$IColorSource$color = (function (this$){
return cljs.core.apply.call(null,one.color.make_color,cljs.core.js__GT_clj.call(null,this$));
});
Array.prototype.one$color$IColorSource$bg_color = (function (this$){
return cljs.core.apply.call(null,one.color.make_color,cljs.core.js__GT_clj.call(null,this$));
});
cljs.core.Vector.prototype.one$color$IColorSource$ = true;
cljs.core.Vector.prototype.one$color$IColorSource$color = (function (this$){
return cljs.core.apply.call(null,one.color.make_color,this$);
});
cljs.core.Vector.prototype.one$color$IColorSource$bg_color = (function (this$){
return cljs.core.apply.call(null,one.color.make_color,this$);
});
one.color.Color.prototype.one$color$IColorSource$ = true;
one.color.Color.prototype.one$color$IColorSource$color = (function (this$){
return this$;
});
one.color.Color.prototype.one$color$IColorSource$bg_color = (function (this$){
return this$;
});
(one.color.IColorSource["null"] = true);
(one.color.color["null"] = (function (this$){
return one.color.make_color.call(null,0,0,0);
}));
(one.color.bg_color["null"] = (function (this$){
return one.color.make_color.call(null,0,0,0);
}));

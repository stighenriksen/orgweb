goog.provide('one.core');
goog.require('cljs.core');
goog.require('goog.style');
one.core.Startable = {};
one.core.start = (function start(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5855 = this$;

if(cljs.core.truth_(and__3546__auto____5855))
{return this$.one$core$Startable$start;
} else
{return and__3546__auto____5855;
}
})()))
{return this$.one$core$Startable$start(this$);
} else
{return (function (){var or__3548__auto____5856 = (one.core.start[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5856))
{return or__3548__auto____5856;
} else
{var or__3548__auto____5857 = (one.core.start["_"]);

if(cljs.core.truth_(or__3548__auto____5857))
{return or__3548__auto____5857;
} else
{throw cljs.core.missing_protocol.call(null,"Startable.start",this$);
}
}
})().call(null,this$);
}
});
one.core.Disposable = {};
one.core.dispose = (function dispose(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5859 = this$;

if(cljs.core.truth_(and__3546__auto____5859))
{return this$.one$core$Disposable$dispose;
} else
{return and__3546__auto____5859;
}
})()))
{return this$.one$core$Disposable$dispose(this$);
} else
{return (function (){var or__3548__auto____5860 = (one.core.dispose[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5860))
{return or__3548__auto____5860;
} else
{var or__3548__auto____5861 = (one.core.dispose["_"]);

if(cljs.core.truth_(or__3548__auto____5861))
{return or__3548__auto____5861;
} else
{throw cljs.core.missing_protocol.call(null,"Disposable.dispose",this$);
}
}
})().call(null,this$);
}
});
/**
* Use alternate strategies to get around the fact that
* `goog.style.getComputedStyle` returns an empty string for IE8 and
* below.
*/
one.core.get_style = (function get_style(element,style){
return cljs.core.some.call(null,(function (p1__5858_SHARP_){
var v__5862 = p1__5858_SHARP_.call(null);

if(cljs.core.truth_(cljs.core.not_EQ_.call(null,"",v__5862)))
{return v__5862;
} else
{return null;
}
}),cljs.core.Vector.fromArray([(function (){
return goog.style.getComputedStyle.call(null,element,style);
}),(function (){
return goog.style.getStyle.call(null,element,style);
}),(function (){
return (element.currentStyle[style]);
}),(function (){
throw (new Error(cljs.core.str.call(null,"Could not retrieve value for style ",style)));
})]));
});

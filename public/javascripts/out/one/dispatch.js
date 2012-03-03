goog.provide('one.dispatch');
goog.require('cljs.core');
/**
* Stores the current reactions.
*/
one.dispatch.reactions = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
/**
* Cause the specified reactor to be invoked whenever an event that
* satisfies `event-pred` is fired. reactor is a function that accepts
* two arguments: `event-id` and `event-data`.
* 
* Returns the reaction.
* 
* The reactor will continue to be invoked until one of two things
* happens:
* 
* 1. `delete-reaction` is called on this reaction.
* 
* 2. The reaction occurs `max-count` times. If `max-count` is not
* specified, the reaction will continue to be invoked until deleted.
* 
* If `max-count` is specified, `delete-reaction` will be called
* automatically when the reaction has occurred the specified number of
* times.
*/
one.dispatch.react_to = (function() {
var react_to = null;
var react_to__5762 = (function (event_pred,reactor){
return react_to.call(null,null,event_pred,reactor);
});
var react_to__5763 = (function (max_count,event_pred,reactor){
var reaction__5761 = cljs.core.ObjMap.fromObject(["﷐'max-count","﷐'event-pred","﷐'reactor"],{"﷐'max-count":max_count,"﷐'event-pred":event_pred,"﷐'reactor":reactor});

cljs.core.swap_BANG_.call(null,one.dispatch.reactions,cljs.core.assoc,reaction__5761,0);
return reaction__5761;
});
react_to = function(max_count,event_pred,reactor){
switch(arguments.length){
case  2 :
return react_to__5762.call(this,max_count,event_pred);
case  3 :
return react_to__5763.call(this,max_count,event_pred,reactor);
}
throw('Invalid arity: ' + arguments.length);
};
return react_to;
})()
;
/**
* Delete a reaction. After calling this function, the specified
* reaction will no longer be invoked.
*/
one.dispatch.delete_reaction = (function delete_reaction(reaction){
return cljs.core.swap_BANG_.call(null,one.dispatch.reactions,cljs.core.dissoc,reaction);
});
/**
* Raise an event to any reactors whose event-pred returns true for
* `event-id`. The `event-id` and `event-data`, if specified, are passed to
* the reactor.
*/
one.dispatch.fire = (function() {
var fire = null;
var fire__5806 = (function (event_id){
return fire.call(null,event_id,null);
});
var fire__5807 = (function (event_id,event_data){
var matching_reactions__5779 = cljs.core.filter.call(null,(function (p__5771){
var vec__5772__5774 = p__5771;
var map__5773__5775 = cljs.core.nth.call(null,vec__5772__5774,0,null);
var map__5773__5776 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5773__5775))?cljs.core.apply.call(null,cljs.core.hash_map,map__5773__5775):map__5773__5775);
var event_pred__5777 = cljs.core.get.call(null,map__5773__5776,"﷐'event-pred");
var run_count__5778 = cljs.core.nth.call(null,vec__5772__5774,1,null);

return event_pred__5777.call(null,event_id);
}),cljs.core.deref.call(null,one.dispatch.reactions));

var G__5780__5781 = cljs.core.seq.call(null,matching_reactions__5779);

if(cljs.core.truth_(G__5780__5781))
{var G__5783__5785 = cljs.core.first.call(null,G__5780__5781);
var vec__5784__5786 = G__5783__5785;
var reaction__5787 = cljs.core.nth.call(null,vec__5784__5786,0,null);
var run_count__5788 = cljs.core.nth.call(null,vec__5784__5786,1,null);
var G__5780__5789 = G__5780__5781;

var G__5783__5790 = G__5783__5785;
var G__5780__5791 = G__5780__5789;

while(true){
var vec__5792__5793 = G__5783__5790;
var reaction__5794 = cljs.core.nth.call(null,vec__5792__5793,0,null);
var run_count__5795 = cljs.core.nth.call(null,vec__5792__5793,1,null);
var G__5780__5796 = G__5780__5791;

var map__5797__5798 = reaction__5794;
var map__5797__5799 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5797__5798))?cljs.core.apply.call(null,cljs.core.hash_map,map__5797__5798):map__5797__5798);
var reactor__5800 = cljs.core.get.call(null,map__5797__5799,"﷐'reactor");
var max_count__5801 = cljs.core.get.call(null,map__5797__5799,"﷐'max-count");
var run_count__5802 = (run_count__5795 + 1);

reactor__5800.call(null,event_id,event_data);
if(cljs.core.truth_((function (){var and__3546__auto____5803 = max_count__5801;

if(cljs.core.truth_(and__3546__auto____5803))
{return (max_count__5801 <= run_count__5802);
} else
{return and__3546__auto____5803;
}
})()))
{one.dispatch.delete_reaction.call(null,reaction__5794);
} else
{cljs.core.swap_BANG_.call(null,one.dispatch.reactions,cljs.core.assoc,reaction__5794,run_count__5802);
}
var temp__3698__auto____5804 = cljs.core.next.call(null,G__5780__5796);

if(cljs.core.truth_(temp__3698__auto____5804))
{var G__5780__5805 = temp__3698__auto____5804;

{
var G__5809 = cljs.core.first.call(null,G__5780__5805);
var G__5810 = G__5780__5805;
G__5783__5790 = G__5809;
G__5780__5791 = G__5810;
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
});
fire = function(event_id,event_data){
switch(arguments.length){
case  1 :
return fire__5806.call(this,event_id);
case  2 :
return fire__5807.call(this,event_id,event_data);
}
throw('Invalid arity: ' + arguments.length);
};
return fire;
})()
;

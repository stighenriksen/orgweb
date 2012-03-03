goog.provide('one.browser.remote');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrManager');
one.browser.remote.responders = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
one.browser.remote.add_responders = (function add_responders(id,success,error){
if(cljs.core.truth_((function (){var or__3548__auto____5819 = success;

if(cljs.core.truth_(or__3548__auto____5819))
{return or__3548__auto____5819;
} else
{return error;
}
})()))
{return cljs.core.swap_BANG_.call(null,one.browser.remote.responders,cljs.core.assoc,id,cljs.core.ObjMap.fromObject(["﷐'success","﷐'error"],{"﷐'success":success,"﷐'error":error}));
} else
{return null;
}
});
goog.net.XhrManager.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrManager.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__5820){
var vec__5821__5822 = p__5820;
var k__5823 = cljs.core.nth.call(null,vec__5821__5822,0,null);
var v__5824 = cljs.core.nth.call(null,vec__5821__5822,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__5823.toLowerCase()),v__5824]);
}),cljs.core.js__GT_clj.call(null,goog.net.EventType)));
});
one.browser.remote._STAR_xhr_manager_STAR_ = (new goog.net.XhrManager(null,null,null,0,5000));
/**
* Asynchronously make a network request for the resource at url. If
* provided via the `:on-success` and `:on-error` keyword arguments, the
* appropriate one of `on-success` or `on-error` will be called on
* completion. They will be passed a map containing the keys `:id`,
* `:body`, `:status`, and `:event`. The entry for `:event` contains an
* instance of the `goog.net.XhrManager.Event`.
* 
* Other allowable keyword arguments are `:method`, `:content`, `:headers`,
* `:priority`, and `:retries`. `:method` defaults to "GET" and `:retries`
* defaults to `0`.
* @param {...*} var_args
*/
one.browser.remote.request = (function() { 
var request__delegate = function (id,url,p__5825){
var map__5826__5827 = p__5825;
var map__5826__5828 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5826__5827))?cljs.core.apply.call(null,cljs.core.hash_map,map__5826__5827):map__5826__5827);
var on_error__5829 = cljs.core.get.call(null,map__5826__5828,"﷐'on-error");
var on_success__5830 = cljs.core.get.call(null,map__5826__5828,"﷐'on-success");
var retries__5831 = cljs.core.get.call(null,map__5826__5828,"﷐'retries",0);
var priority__5832 = cljs.core.get.call(null,map__5826__5828,"﷐'priority");
var headers__5833 = cljs.core.get.call(null,map__5826__5828,"﷐'headers");
var content__5834 = cljs.core.get.call(null,map__5826__5828,"﷐'content");
var method__5835 = cljs.core.get.call(null,map__5826__5828,"﷐'method","GET");

try{one.browser.remote.add_responders.call(null,id,on_success__5830,on_error__5829);
return one.browser.remote._STAR_xhr_manager_STAR_.send(id,url,method__5835,content__5834,headers__5833,priority__5832,null,retries__5831);
}catch (e5836){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e5836)))
{var e__5837 = e5836;

return null;
} else
{if(cljs.core.truth_("﷐'else"))
{throw e5836;
} else
{return null;
}
}
}};
var request = function (id,url,var_args){
var p__5825 = null;
if (goog.isDef(var_args)) {
  p__5825 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return request__delegate.call(this, id, url, p__5825);
};
request.cljs$lang$maxFixedArity = 2;
request.cljs$lang$applyTo = (function (arglist__5838){
var id = cljs.core.first(arglist__5838);
var url = cljs.core.first(cljs.core.next(arglist__5838));
var p__5825 = cljs.core.rest(cljs.core.next(arglist__5838));
return request__delegate.call(this, id, url, p__5825);
});
return request;
})()
;
one.browser.remote.response_success = (function response_success(e){
var temp__3698__auto____5839 = cljs.core.get.call(null,cljs.core.deref.call(null,one.browser.remote.responders),"﷐'id".call(null,e));

if(cljs.core.truth_(temp__3698__auto____5839))
{var map__5840__5841 = temp__3698__auto____5839;
var map__5840__5842 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5840__5841))?cljs.core.apply.call(null,cljs.core.hash_map,map__5840__5841):map__5840__5841);
var success__5843 = cljs.core.get.call(null,map__5840__5842,"﷐'success");

success__5843.call(null,e);
return cljs.core.swap_BANG_.call(null,one.browser.remote.responders,cljs.core.dissoc,"﷐'id".call(null,e));
} else
{return null;
}
});
one.browser.remote.response_error = (function response_error(e){
var temp__3698__auto____5844 = cljs.core.get.call(null,cljs.core.deref.call(null,one.browser.remote.responders),"﷐'id".call(null,e));

if(cljs.core.truth_(temp__3698__auto____5844))
{var map__5845__5846 = temp__3698__auto____5844;
var map__5845__5847 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5845__5846))?cljs.core.apply.call(null,cljs.core.hash_map,map__5845__5846):map__5845__5846);
var error__5848 = cljs.core.get.call(null,map__5845__5847,"﷐'error");

error__5848.call(null,e);
return cljs.core.swap_BANG_.call(null,one.browser.remote.responders,cljs.core.dissoc,"﷐'id".call(null,e));
} else
{return null;
}
});
one.browser.remote.response_received = (function response_received(f,e){
return f.call(null,cljs.core.ObjMap.fromObject(["﷐'id","﷐'body","﷐'status","﷐'event"],{"﷐'id":e.id,"﷐'body":e.xhrIo.getResponseText(),"﷐'status":e.xhrIo.getStatus(),"﷐'event":e}));
});
clojure.browser.event.listen.call(null,one.browser.remote._STAR_xhr_manager_STAR_,"success",cljs.core.partial.call(null,one.browser.remote.response_received,one.browser.remote.response_success));
clojure.browser.event.listen.call(null,one.browser.remote._STAR_xhr_manager_STAR_,"error",cljs.core.partial.call(null,one.browser.remote.response_received,one.browser.remote.response_error));

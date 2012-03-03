goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9915){
var vec__9916__9917 = p__9915;
var k__9918 = cljs.core.nth.call(null,vec__9916__9917,0,null);
var v__9919 = cljs.core.nth.call(null,vec__9916__9917,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__9918.toLowerCase()),v__9919]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__9950 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____9920 = this$;

if(cljs.core.truth_(and__3546__auto____9920))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9920;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____9921 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9921))
{return or__3548__auto____9921;
} else
{var or__3548__auto____9922 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9922))
{return or__3548__auto____9922;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__9951 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____9923 = this$;

if(cljs.core.truth_(and__3546__auto____9923))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9923;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____9924 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9924))
{return or__3548__auto____9924;
} else
{var or__3548__auto____9925 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9925))
{return or__3548__auto____9925;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__9952 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____9926 = this$;

if(cljs.core.truth_(and__3546__auto____9926))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9926;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____9927 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9927))
{return or__3548__auto____9927;
} else
{var or__3548__auto____9928 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9928))
{return or__3548__auto____9928;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__9953 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____9929 = this$;

if(cljs.core.truth_(and__3546__auto____9929))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____9929;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____9930 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9930))
{return or__3548__auto____9930;
} else
{var or__3548__auto____9931 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____9931))
{return or__3548__auto____9931;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case  1 :
return connect__9950.call(this,this$);
case  2 :
return connect__9951.call(this,this$,opt1);
case  3 :
return connect__9952.call(this,this$,opt1,opt2);
case  4 :
return connect__9953.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__9955 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____9932 = this$;

if(cljs.core.truth_(and__3546__auto____9932))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9932;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____9933 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9933))
{return or__3548__auto____9933;
} else
{var or__3548__auto____9934 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9934))
{return or__3548__auto____9934;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__9956 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____9935 = this$;

if(cljs.core.truth_(and__3546__auto____9935))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9935;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____9936 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9936))
{return or__3548__auto____9936;
} else
{var or__3548__auto____9937 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9937))
{return or__3548__auto____9937;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__9957 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____9938 = this$;

if(cljs.core.truth_(and__3546__auto____9938))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9938;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____9939 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9939))
{return or__3548__auto____9939;
} else
{var or__3548__auto____9940 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9940))
{return or__3548__auto____9940;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__9958 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____9941 = this$;

if(cljs.core.truth_(and__3546__auto____9941))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9941;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____9942 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9942))
{return or__3548__auto____9942;
} else
{var or__3548__auto____9943 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9943))
{return or__3548__auto____9943;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__9959 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____9944 = this$;

if(cljs.core.truth_(and__3546__auto____9944))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____9944;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____9945 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9945))
{return or__3548__auto____9945;
} else
{var or__3548__auto____9946 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____9946))
{return or__3548__auto____9946;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case  2 :
return transmit__9955.call(this,this$,opt);
case  3 :
return transmit__9956.call(this,this$,opt,opt2);
case  4 :
return transmit__9957.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__9958.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__9959.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____9947 = this$;

if(cljs.core.truth_(and__3546__auto____9947))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____9947;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____9948 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9948))
{return or__3548__auto____9948;
} else
{var or__3548__auto____9949 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____9949))
{return or__3548__auto____9949;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9961){
var vec__9962__9963 = p__9961;
var k__9964 = cljs.core.nth.call(null,vec__9962__9963,0,null);
var v__9965 = cljs.core.nth.call(null,vec__9962__9963,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__9964.toLowerCase()),v__9965]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__9966 = null;
var G__9966__9967 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9966__9968 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9966__9969 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9966__9970 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9966__9971 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__9966 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__9966__9967.call(this,this$,uri);
case  3 :
return G__9966__9968.call(this,this$,uri,method);
case  4 :
return G__9966__9969.call(this,this$,uri,method,content);
case  5 :
return G__9966__9970.call(this,this$,uri,method,content,headers);
case  6 :
return G__9966__9971.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9966;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9973){
var vec__9974__9975 = p__9973;
var k__9976 = cljs.core.nth.call(null,vec__9974__9975,0,null);
var v__9977 = cljs.core.nth.call(null,vec__9974__9975,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__9976.toLowerCase()),v__9977]);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__9984 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____9978 = this$;

if(cljs.core.truth_(and__3546__auto____9978))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____9978;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____9979 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9979))
{return or__3548__auto____9979;
} else
{var or__3548__auto____9980 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____9980))
{return or__3548__auto____9980;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__9985 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____9981 = this$;

if(cljs.core.truth_(and__3546__auto____9981))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____9981;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____9982 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9982))
{return or__3548__auto____9982;
} else
{var or__3548__auto____9983 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____9983))
{return or__3548__auto____9983;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return register_service__9984.call(this,this$,service_name,fn);
case  4 :
return register_service__9985.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__9987 = null;
var G__9987__9988 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__9987__9989 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__9987__9990 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__9987__9991 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__9987 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__9987__9988.call(this,this$);
case  2 :
return G__9987__9989.call(this,this$,on_connect_fn);
case  3 :
return G__9987__9990.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__9987__9991.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9987;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service = (function() {
var G__9993 = null;
var G__9993__9994 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__9993__9995 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__9993 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__9993__9994.call(this,this$,service_name,fn);
case  4 :
return G__9993__9995.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9993;
})()
;
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__10006 = (function (){
var temp__3698__auto____9997 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____9997))
{var config__9998 = temp__3698__auto____9997;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__9998)));
} else
{return null;
}
});
var xpc_connection__10007 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__9999){
var vec__10000__10001 = p__9999;
var k__10002 = cljs.core.nth.call(null,vec__10000__10001,0,null);
var v__10003 = cljs.core.nth.call(null,vec__10000__10001,1,null);

var temp__3695__auto____10004 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__10002);

if(cljs.core.truth_(temp__3695__auto____10004))
{var field__10005 = temp__3695__auto____10004;

return cljs.core.assoc.call(null,sum,field__10005,v__10003);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__10006.call(this);
case  1 :
return xpc_connection__10007.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;

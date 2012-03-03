goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____7651 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7651))
{return or__3548__auto____7651;
} else
{var or__3548__auto____7652 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7652))
{return or__3548__auto____7652;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7653 = coll;

if(cljs.core.truth_(and__3546__auto____7653))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7653;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7654 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7654))
{return or__3548__auto____7654;
} else
{var or__3548__auto____7655 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7655))
{return or__3548__auto____7655;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7656 = coll;

if(cljs.core.truth_(and__3546__auto____7656))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7656;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7657 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7657))
{return or__3548__auto____7657;
} else
{var or__3548__auto____7658 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7658))
{return or__3548__auto____7658;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7659 = coll;

if(cljs.core.truth_(and__3546__auto____7659))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7659;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7660 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7660))
{return or__3548__auto____7660;
} else
{var or__3548__auto____7661 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7661))
{return or__3548__auto____7661;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__7668 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7662 = coll;

if(cljs.core.truth_(and__3546__auto____7662))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7662;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7663 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7663))
{return or__3548__auto____7663;
} else
{var or__3548__auto____7664 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7664))
{return or__3548__auto____7664;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7669 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7665 = coll;

if(cljs.core.truth_(and__3546__auto____7665))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7665;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7666 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7666))
{return or__3548__auto____7666;
} else
{var or__3548__auto____7667 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7667))
{return or__3548__auto____7667;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__7668.call(this,coll,n);
case  3 :
return _nth__7669.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7671 = coll;

if(cljs.core.truth_(and__3546__auto____7671))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7671;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7672 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7672))
{return or__3548__auto____7672;
} else
{var or__3548__auto____7673 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7673))
{return or__3548__auto____7673;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7674 = coll;

if(cljs.core.truth_(and__3546__auto____7674))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7674;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7675 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7675))
{return or__3548__auto____7675;
} else
{var or__3548__auto____7676 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7676))
{return or__3548__auto____7676;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__7683 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7677 = o;

if(cljs.core.truth_(and__3546__auto____7677))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7677;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7678 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7678))
{return or__3548__auto____7678;
} else
{var or__3548__auto____7679 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7679))
{return or__3548__auto____7679;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7684 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7680 = o;

if(cljs.core.truth_(and__3546__auto____7680))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7680;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7681 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7681))
{return or__3548__auto____7681;
} else
{var or__3548__auto____7682 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7682))
{return or__3548__auto____7682;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__7683.call(this,o,k);
case  3 :
return _lookup__7684.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7686 = coll;

if(cljs.core.truth_(and__3546__auto____7686))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7686;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7687 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7687))
{return or__3548__auto____7687;
} else
{var or__3548__auto____7688 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7688))
{return or__3548__auto____7688;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7689 = coll;

if(cljs.core.truth_(and__3546__auto____7689))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7689;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7690 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7690))
{return or__3548__auto____7690;
} else
{var or__3548__auto____7691 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7691))
{return or__3548__auto____7691;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7692 = coll;

if(cljs.core.truth_(and__3546__auto____7692))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7692;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7693 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7693))
{return or__3548__auto____7693;
} else
{var or__3548__auto____7694 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7694))
{return or__3548__auto____7694;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7695 = coll;

if(cljs.core.truth_(and__3546__auto____7695))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7695;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7696 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7696))
{return or__3548__auto____7696;
} else
{var or__3548__auto____7697 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7697))
{return or__3548__auto____7697;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7698 = coll;

if(cljs.core.truth_(and__3546__auto____7698))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7698;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7699 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7699))
{return or__3548__auto____7699;
} else
{var or__3548__auto____7700 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7700))
{return or__3548__auto____7700;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7701 = coll;

if(cljs.core.truth_(and__3546__auto____7701))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7701;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7702 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7702))
{return or__3548__auto____7702;
} else
{var or__3548__auto____7703 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7703))
{return or__3548__auto____7703;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7704 = coll;

if(cljs.core.truth_(and__3546__auto____7704))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7704;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7705 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7705))
{return or__3548__auto____7705;
} else
{var or__3548__auto____7706 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7706))
{return or__3548__auto____7706;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7707 = o;

if(cljs.core.truth_(and__3546__auto____7707))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7707;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7708 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7708))
{return or__3548__auto____7708;
} else
{var or__3548__auto____7709 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7709))
{return or__3548__auto____7709;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7710 = o;

if(cljs.core.truth_(and__3546__auto____7710))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7710;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7711 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7711))
{return or__3548__auto____7711;
} else
{var or__3548__auto____7712 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7712))
{return or__3548__auto____7712;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7713 = o;

if(cljs.core.truth_(and__3546__auto____7713))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7713;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7714 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7714))
{return or__3548__auto____7714;
} else
{var or__3548__auto____7715 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7715))
{return or__3548__auto____7715;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7716 = o;

if(cljs.core.truth_(and__3546__auto____7716))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7716;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7717 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7717))
{return or__3548__auto____7717;
} else
{var or__3548__auto____7718 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7718))
{return or__3548__auto____7718;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__7725 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7719 = coll;

if(cljs.core.truth_(and__3546__auto____7719))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7719;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7720 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7720))
{return or__3548__auto____7720;
} else
{var or__3548__auto____7721 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7721))
{return or__3548__auto____7721;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7726 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7722 = coll;

if(cljs.core.truth_(and__3546__auto____7722))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7722;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7723 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7723))
{return or__3548__auto____7723;
} else
{var or__3548__auto____7724 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7724))
{return or__3548__auto____7724;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__7725.call(this,coll,f);
case  3 :
return _reduce__7726.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7728 = o;

if(cljs.core.truth_(and__3546__auto____7728))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7728;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7729 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7729))
{return or__3548__auto____7729;
} else
{var or__3548__auto____7730 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7730))
{return or__3548__auto____7730;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7731 = o;

if(cljs.core.truth_(and__3546__auto____7731))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7731;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7732 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7732))
{return or__3548__auto____7732;
} else
{var or__3548__auto____7733 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7733))
{return or__3548__auto____7733;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7734 = o;

if(cljs.core.truth_(and__3546__auto____7734))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7734;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7735 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7735))
{return or__3548__auto____7735;
} else
{var or__3548__auto____7736 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7736))
{return or__3548__auto____7736;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____7737 = o;

if(cljs.core.truth_(and__3546__auto____7737))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7737;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7738 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7738))
{return or__3548__auto____7738;
} else
{var or__3548__auto____7739 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7739))
{return or__3548__auto____7739;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7740 = d;

if(cljs.core.truth_(and__3546__auto____7740))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7740;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7741 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7741))
{return or__3548__auto____7741;
} else
{var or__3548__auto____7742 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7742))
{return or__3548__auto____7742;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____7743 = this$;

if(cljs.core.truth_(and__3546__auto____7743))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____7743;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7744 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7744))
{return or__3548__auto____7744;
} else
{var or__3548__auto____7745 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____7745))
{return or__3548__auto____7745;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7746 = this$;

if(cljs.core.truth_(and__3546__auto____7746))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7746;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7747 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7747))
{return or__3548__auto____7747;
} else
{var or__3548__auto____7748 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7748))
{return or__3548__auto____7748;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____7749 = this$;

if(cljs.core.truth_(and__3546__auto____7749))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____7749;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____7750 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7750))
{return or__3548__auto____7750;
} else
{var or__3548__auto____7751 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7751))
{return or__3548__auto____7751;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__7752 = null;
var G__7752__7753 = (function (o,k){
return null;
});
var G__7752__7754 = (function (o,k,not_found){
return not_found;
});
G__7752 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__7752__7753.call(this,o,k);
case  3 :
return G__7752__7754.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7752;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__7756 = null;
var G__7756__7757 = (function (_,f){
return f.call(null);
});
var G__7756__7758 = (function (_,f,start){
return start;
});
G__7756 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7756__7757.call(this,_,f);
case  3 :
return G__7756__7758.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7756;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__7760 = null;
var G__7760__7761 = (function (_,n){
return null;
});
var G__7760__7762 = (function (_,n,not_found){
return not_found;
});
G__7760 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__7760__7761.call(this,_,n);
case  3 :
return G__7760__7762.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7760;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__7770 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__7764 = cljs.core._nth.call(null,cicoll,0);
var n__7765 = 1;

while(true){
if(cljs.core.truth_((n__7765 < cljs.core._count.call(null,cicoll))))
{{
var G__7774 = f.call(null,val__7764,cljs.core._nth.call(null,cicoll,n__7765));
var G__7775 = (n__7765 + 1);
val__7764 = G__7774;
n__7765 = G__7775;
continue;
}
} else
{return val__7764;
}
break;
}
}
});
var ci_reduce__7771 = (function (cicoll,f,val){
var val__7766 = val;
var n__7767 = 0;

while(true){
if(cljs.core.truth_((n__7767 < cljs.core._count.call(null,cicoll))))
{{
var G__7776 = f.call(null,val__7766,cljs.core._nth.call(null,cicoll,n__7767));
var G__7777 = (n__7767 + 1);
val__7766 = G__7776;
n__7767 = G__7777;
continue;
}
} else
{return val__7766;
}
break;
}
});
var ci_reduce__7772 = (function (cicoll,f,val,idx){
var val__7768 = val;
var n__7769 = idx;

while(true){
if(cljs.core.truth_((n__7769 < cljs.core._count.call(null,cicoll))))
{{
var G__7778 = f.call(null,val__7768,cljs.core._nth.call(null,cicoll,n__7769));
var G__7779 = (n__7769 + 1);
val__7768 = G__7778;
n__7769 = G__7779;
continue;
}
} else
{return val__7768;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__7770.call(this,cicoll,f);
case  3 :
return ci_reduce__7771.call(this,cicoll,f,val);
case  4 :
return ci_reduce__7772.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__7780 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7793 = null;
var G__7793__7794 = (function (_,f){
var this__7781 = this;
return cljs.core.ci_reduce.call(null,this__7781.a,f,(this__7781.a[this__7781.i]),(this__7781.i + 1));
});
var G__7793__7795 = (function (_,f,start){
var this__7782 = this;
return cljs.core.ci_reduce.call(null,this__7782.a,f,start,this__7782.i);
});
G__7793 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7793__7794.call(this,_,f);
case  3 :
return G__7793__7795.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7793;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7783 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7784 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7797 = null;
var G__7797__7798 = (function (coll,n){
var this__7785 = this;
var i__7786 = (n + this__7785.i);

if(cljs.core.truth_((i__7786 < this__7785.a.length)))
{return (this__7785.a[i__7786]);
} else
{return null;
}
});
var G__7797__7799 = (function (coll,n,not_found){
var this__7787 = this;
var i__7788 = (n + this__7787.i);

if(cljs.core.truth_((i__7788 < this__7787.a.length)))
{return (this__7787.a[i__7788]);
} else
{return not_found;
}
});
G__7797 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7797__7798.call(this,coll,n);
case  3 :
return G__7797__7799.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7797;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__7789 = this;
return (this__7789.a.length - this__7789.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__7790 = this;
return (this__7790.a[this__7790.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__7791 = this;
if(cljs.core.truth_(((this__7791.i + 1) < this__7791.a.length)))
{return (new cljs.core.IndexedSeq(this__7791.a,(this__7791.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__7792 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__7801 = null;
var G__7801__7802 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7801__7803 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7801 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__7801__7802.call(this,array,f);
case  3 :
return G__7801__7803.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7801;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7805 = null;
var G__7805__7806 = (function (array,k){
return (array[k]);
});
var G__7805__7807 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7805 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__7805__7806.call(this,array,k);
case  3 :
return G__7805__7807.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7805;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7809 = null;
var G__7809__7810 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__7809__7811 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__7809 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__7809__7810.call(this,array,n);
case  3 :
return G__7809__7811.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7809;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____7813 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7813))
{var s__7814 = temp__3698__auto____7813;

return cljs.core._first.call(null,s__7814);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__7815 = cljs.core.next.call(null,s);
s = G__7815;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__7816 = cljs.core.seq.call(null,x);
var n__7817 = 0;

while(true){
if(cljs.core.truth_(s__7816))
{{
var G__7818 = cljs.core.next.call(null,s__7816);
var G__7819 = (n__7817 + 1);
s__7816 = G__7818;
n__7817 = G__7819;
continue;
}
} else
{return n__7817;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__7820 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__7821 = (function() { 
var G__7823__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7824 = conj.call(null,coll,x);
var G__7825 = cljs.core.first.call(null,xs);
var G__7826 = cljs.core.next.call(null,xs);
coll = G__7824;
x = G__7825;
xs = G__7826;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7823 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7823__delegate.call(this, coll, x, xs);
};
G__7823.cljs$lang$maxFixedArity = 2;
G__7823.cljs$lang$applyTo = (function (arglist__7827){
var coll = cljs.core.first(arglist__7827);
var x = cljs.core.first(cljs.core.next(arglist__7827));
var xs = cljs.core.rest(cljs.core.next(arglist__7827));
return G__7823__delegate.call(this, coll, x, xs);
});
return G__7823;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__7820.call(this,coll,x);
default:
return conj__7821.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__7821.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__7828 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__7829 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__7828.call(this,coll,n);
case  3 :
return nth__7829.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__7831 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__7832 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__7831.call(this,o,k);
case  3 :
return get__7832.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__7835 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__7836 = (function() { 
var G__7838__delegate = function (coll,k,v,kvs){
while(true){
var ret__7834 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__7839 = ret__7834;
var G__7840 = cljs.core.first.call(null,kvs);
var G__7841 = cljs.core.second.call(null,kvs);
var G__7842 = cljs.core.nnext.call(null,kvs);
coll = G__7839;
k = G__7840;
v = G__7841;
kvs = G__7842;
continue;
}
} else
{return ret__7834;
}
break;
}
};
var G__7838 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7838__delegate.call(this, coll, k, v, kvs);
};
G__7838.cljs$lang$maxFixedArity = 3;
G__7838.cljs$lang$applyTo = (function (arglist__7843){
var coll = cljs.core.first(arglist__7843);
var k = cljs.core.first(cljs.core.next(arglist__7843));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7843)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7843)));
return G__7838__delegate.call(this, coll, k, v, kvs);
});
return G__7838;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__7835.call(this,coll,k,v);
default:
return assoc__7836.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__7836.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__7845 = (function (coll){
return coll;
});
var dissoc__7846 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__7847 = (function() { 
var G__7849__delegate = function (coll,k,ks){
while(true){
var ret__7844 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7850 = ret__7844;
var G__7851 = cljs.core.first.call(null,ks);
var G__7852 = cljs.core.next.call(null,ks);
coll = G__7850;
k = G__7851;
ks = G__7852;
continue;
}
} else
{return ret__7844;
}
break;
}
};
var G__7849 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7849__delegate.call(this, coll, k, ks);
};
G__7849.cljs$lang$maxFixedArity = 2;
G__7849.cljs$lang$applyTo = (function (arglist__7853){
var coll = cljs.core.first(arglist__7853);
var k = cljs.core.first(cljs.core.next(arglist__7853));
var ks = cljs.core.rest(cljs.core.next(arglist__7853));
return G__7849__delegate.call(this, coll, k, ks);
});
return G__7849;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__7845.call(this,coll);
case  2 :
return dissoc__7846.call(this,coll,k);
default:
return dissoc__7847.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__7847.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__393__auto____7854 = o;

if(cljs.core.truth_((function (){var and__3546__auto____7855 = x__393__auto____7854;

if(cljs.core.truth_(and__3546__auto____7855))
{var and__3546__auto____7856 = x__393__auto____7854.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7856))
{return cljs.core.not.call(null,x__393__auto____7854.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7856;
}
} else
{return and__3546__auto____7855;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__393__auto____7854);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__7858 = (function (coll){
return coll;
});
var disj__7859 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__7860 = (function() { 
var G__7862__delegate = function (coll,k,ks){
while(true){
var ret__7857 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7863 = ret__7857;
var G__7864 = cljs.core.first.call(null,ks);
var G__7865 = cljs.core.next.call(null,ks);
coll = G__7863;
k = G__7864;
ks = G__7865;
continue;
}
} else
{return ret__7857;
}
break;
}
};
var G__7862 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7862__delegate.call(this, coll, k, ks);
};
G__7862.cljs$lang$maxFixedArity = 2;
G__7862.cljs$lang$applyTo = (function (arglist__7866){
var coll = cljs.core.first(arglist__7866);
var k = cljs.core.first(cljs.core.next(arglist__7866));
var ks = cljs.core.rest(cljs.core.next(arglist__7866));
return G__7862__delegate.call(this, coll, k, ks);
});
return G__7862;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__7858.call(this,coll);
case  2 :
return disj__7859.call(this,coll,k);
default:
return disj__7860.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__7860.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__393__auto____7867 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7868 = x__393__auto____7867;

if(cljs.core.truth_(and__3546__auto____7868))
{var and__3546__auto____7869 = x__393__auto____7867.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____7869))
{return cljs.core.not.call(null,x__393__auto____7867.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____7869;
}
} else
{return and__3546__auto____7868;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__393__auto____7867);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__393__auto____7870 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7871 = x__393__auto____7870;

if(cljs.core.truth_(and__3546__auto____7871))
{var and__3546__auto____7872 = x__393__auto____7870.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____7872))
{return cljs.core.not.call(null,x__393__auto____7870.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____7872;
}
} else
{return and__3546__auto____7871;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__393__auto____7870);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__393__auto____7873 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7874 = x__393__auto____7873;

if(cljs.core.truth_(and__3546__auto____7874))
{var and__3546__auto____7875 = x__393__auto____7873.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____7875))
{return cljs.core.not.call(null,x__393__auto____7873.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____7875;
}
} else
{return and__3546__auto____7874;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__393__auto____7873);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__393__auto____7876 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7877 = x__393__auto____7876;

if(cljs.core.truth_(and__3546__auto____7877))
{var and__3546__auto____7878 = x__393__auto____7876.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____7878))
{return cljs.core.not.call(null,x__393__auto____7876.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____7878;
}
} else
{return and__3546__auto____7877;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__393__auto____7876);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__393__auto____7879 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7880 = x__393__auto____7879;

if(cljs.core.truth_(and__3546__auto____7880))
{var and__3546__auto____7881 = x__393__auto____7879.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____7881))
{return cljs.core.not.call(null,x__393__auto____7879.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____7881;
}
} else
{return and__3546__auto____7880;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__393__auto____7879);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__393__auto____7882 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7883 = x__393__auto____7882;

if(cljs.core.truth_(and__3546__auto____7883))
{var and__3546__auto____7884 = x__393__auto____7882.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____7884))
{return cljs.core.not.call(null,x__393__auto____7882.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____7884;
}
} else
{return and__3546__auto____7883;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__393__auto____7882);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__393__auto____7885 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7886 = x__393__auto____7885;

if(cljs.core.truth_(and__3546__auto____7886))
{var and__3546__auto____7887 = x__393__auto____7885.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____7887))
{return cljs.core.not.call(null,x__393__auto____7885.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____7887;
}
} else
{return and__3546__auto____7886;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__393__auto____7885);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__7888 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__7888.push(key);
}));
return keys__7888;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__393__auto____7889 = s;

if(cljs.core.truth_((function (){var and__3546__auto____7890 = x__393__auto____7889;

if(cljs.core.truth_(and__3546__auto____7890))
{var and__3546__auto____7891 = x__393__auto____7889.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____7891))
{return cljs.core.not.call(null,x__393__auto____7889.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____7891;
}
} else
{return and__3546__auto____7890;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__393__auto____7889);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____7892 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7892))
{return cljs.core.not.call(null,(function (){var or__3548__auto____7893 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____7893))
{return or__3548__auto____7893;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____7892;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____7894 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7894))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____7894;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____7895 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7895))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____7895;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____7896 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____7896))
{return (n == n.toFixed());
} else
{return and__3546__auto____7896;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7897 = coll;

if(cljs.core.truth_(and__3546__auto____7897))
{var and__3546__auto____7898 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____7898))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____7898;
}
} else
{return and__3546__auto____7897;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___7903 = (function (x){
return true;
});
var distinct_QMARK___7904 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___7905 = (function() { 
var G__7907__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__7899 = cljs.core.set([y,x]);
var xs__7900 = more;

while(true){
var x__7901 = cljs.core.first.call(null,xs__7900);
var etc__7902 = cljs.core.next.call(null,xs__7900);

if(cljs.core.truth_(xs__7900))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__7899,x__7901)))
{return false;
} else
{{
var G__7908 = cljs.core.conj.call(null,s__7899,x__7901);
var G__7909 = etc__7902;
s__7899 = G__7908;
xs__7900 = G__7909;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__7907 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7907__delegate.call(this, x, y, more);
};
G__7907.cljs$lang$maxFixedArity = 2;
G__7907.cljs$lang$applyTo = (function (arglist__7910){
var x = cljs.core.first(arglist__7910);
var y = cljs.core.first(cljs.core.next(arglist__7910));
var more = cljs.core.rest(cljs.core.next(arglist__7910));
return G__7907__delegate.call(this, x, y, more);
});
return G__7907;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___7903.call(this,x);
case  2 :
return distinct_QMARK___7904.call(this,x,y);
default:
return distinct_QMARK___7905.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___7905.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__7911 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__7911)))
{return r__7911;
} else
{if(cljs.core.truth_(r__7911))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__7913 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__7914 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__7912 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__7912,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7912);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__7913.call(this,comp);
case  2 :
return sort__7914.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__7916 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__7917 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__7916.call(this,keyfn,comp);
case  3 :
return sort_by__7917.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__7919 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__7920 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__7919.call(this,f,val);
case  3 :
return reduce__7920.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__7926 = (function (f,coll){
var temp__3695__auto____7922 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7922))
{var s__7923 = temp__3695__auto____7922;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7923),cljs.core.next.call(null,s__7923));
} else
{return f.call(null);
}
});
var seq_reduce__7927 = (function (f,val,coll){
var val__7924 = val;
var coll__7925 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__7925))
{{
var G__7929 = f.call(null,val__7924,cljs.core.first.call(null,coll__7925));
var G__7930 = cljs.core.next.call(null,coll__7925);
val__7924 = G__7929;
coll__7925 = G__7930;
continue;
}
} else
{return val__7924;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__7926.call(this,f,val);
case  3 :
return seq_reduce__7927.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__7931 = null;
var G__7931__7932 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__7931__7933 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__7931 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__7931__7932.call(this,coll,f);
case  3 :
return G__7931__7933.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7931;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___7935 = (function (){
return 0;
});
var _PLUS___7936 = (function (x){
return x;
});
var _PLUS___7937 = (function (x,y){
return (x + y);
});
var _PLUS___7938 = (function() { 
var G__7940__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__7940 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7940__delegate.call(this, x, y, more);
};
G__7940.cljs$lang$maxFixedArity = 2;
G__7940.cljs$lang$applyTo = (function (arglist__7941){
var x = cljs.core.first(arglist__7941);
var y = cljs.core.first(cljs.core.next(arglist__7941));
var more = cljs.core.rest(cljs.core.next(arglist__7941));
return G__7940__delegate.call(this, x, y, more);
});
return G__7940;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___7935.call(this);
case  1 :
return _PLUS___7936.call(this,x);
case  2 :
return _PLUS___7937.call(this,x,y);
default:
return _PLUS___7938.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___7938.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___7942 = (function (x){
return (- x);
});
var ___7943 = (function (x,y){
return (x - y);
});
var ___7944 = (function() { 
var G__7946__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__7946 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7946__delegate.call(this, x, y, more);
};
G__7946.cljs$lang$maxFixedArity = 2;
G__7946.cljs$lang$applyTo = (function (arglist__7947){
var x = cljs.core.first(arglist__7947);
var y = cljs.core.first(cljs.core.next(arglist__7947));
var more = cljs.core.rest(cljs.core.next(arglist__7947));
return G__7946__delegate.call(this, x, y, more);
});
return G__7946;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___7942.call(this,x);
case  2 :
return ___7943.call(this,x,y);
default:
return ___7944.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___7944.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___7948 = (function (){
return 1;
});
var _STAR___7949 = (function (x){
return x;
});
var _STAR___7950 = (function (x,y){
return (x * y);
});
var _STAR___7951 = (function() { 
var G__7953__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__7953 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7953__delegate.call(this, x, y, more);
};
G__7953.cljs$lang$maxFixedArity = 2;
G__7953.cljs$lang$applyTo = (function (arglist__7954){
var x = cljs.core.first(arglist__7954);
var y = cljs.core.first(cljs.core.next(arglist__7954));
var more = cljs.core.rest(cljs.core.next(arglist__7954));
return G__7953__delegate.call(this, x, y, more);
});
return G__7953;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___7948.call(this);
case  1 :
return _STAR___7949.call(this,x);
case  2 :
return _STAR___7950.call(this,x,y);
default:
return _STAR___7951.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___7951.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___7955 = (function (x){
return (1 / x);
});
var _SLASH___7956 = (function (x,y){
return (x / y);
});
var _SLASH___7957 = (function() { 
var G__7959__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7959 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7959__delegate.call(this, x, y, more);
};
G__7959.cljs$lang$maxFixedArity = 2;
G__7959.cljs$lang$applyTo = (function (arglist__7960){
var x = cljs.core.first(arglist__7960);
var y = cljs.core.first(cljs.core.next(arglist__7960));
var more = cljs.core.rest(cljs.core.next(arglist__7960));
return G__7959__delegate.call(this, x, y, more);
});
return G__7959;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___7955.call(this,x);
case  2 :
return _SLASH___7956.call(this,x,y);
default:
return _SLASH___7957.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___7957.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___7961 = (function (x){
return true;
});
var _LT___7962 = (function (x,y){
return (x < y);
});
var _LT___7963 = (function() { 
var G__7965__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7966 = y;
var G__7967 = cljs.core.first.call(null,more);
var G__7968 = cljs.core.next.call(null,more);
x = G__7966;
y = G__7967;
more = G__7968;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7965 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7965__delegate.call(this, x, y, more);
};
G__7965.cljs$lang$maxFixedArity = 2;
G__7965.cljs$lang$applyTo = (function (arglist__7969){
var x = cljs.core.first(arglist__7969);
var y = cljs.core.first(cljs.core.next(arglist__7969));
var more = cljs.core.rest(cljs.core.next(arglist__7969));
return G__7965__delegate.call(this, x, y, more);
});
return G__7965;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___7961.call(this,x);
case  2 :
return _LT___7962.call(this,x,y);
default:
return _LT___7963.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___7963.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___7970 = (function (x){
return true;
});
var _LT__EQ___7971 = (function (x,y){
return (x <= y);
});
var _LT__EQ___7972 = (function() { 
var G__7974__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7975 = y;
var G__7976 = cljs.core.first.call(null,more);
var G__7977 = cljs.core.next.call(null,more);
x = G__7975;
y = G__7976;
more = G__7977;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7974 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7974__delegate.call(this, x, y, more);
};
G__7974.cljs$lang$maxFixedArity = 2;
G__7974.cljs$lang$applyTo = (function (arglist__7978){
var x = cljs.core.first(arglist__7978);
var y = cljs.core.first(cljs.core.next(arglist__7978));
var more = cljs.core.rest(cljs.core.next(arglist__7978));
return G__7974__delegate.call(this, x, y, more);
});
return G__7974;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___7970.call(this,x);
case  2 :
return _LT__EQ___7971.call(this,x,y);
default:
return _LT__EQ___7972.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___7972.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___7979 = (function (x){
return true;
});
var _GT___7980 = (function (x,y){
return (x > y);
});
var _GT___7981 = (function() { 
var G__7983__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7984 = y;
var G__7985 = cljs.core.first.call(null,more);
var G__7986 = cljs.core.next.call(null,more);
x = G__7984;
y = G__7985;
more = G__7986;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7983 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7983__delegate.call(this, x, y, more);
};
G__7983.cljs$lang$maxFixedArity = 2;
G__7983.cljs$lang$applyTo = (function (arglist__7987){
var x = cljs.core.first(arglist__7987);
var y = cljs.core.first(cljs.core.next(arglist__7987));
var more = cljs.core.rest(cljs.core.next(arglist__7987));
return G__7983__delegate.call(this, x, y, more);
});
return G__7983;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___7979.call(this,x);
case  2 :
return _GT___7980.call(this,x,y);
default:
return _GT___7981.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___7981.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___7988 = (function (x){
return true;
});
var _GT__EQ___7989 = (function (x,y){
return (x >= y);
});
var _GT__EQ___7990 = (function() { 
var G__7992__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7993 = y;
var G__7994 = cljs.core.first.call(null,more);
var G__7995 = cljs.core.next.call(null,more);
x = G__7993;
y = G__7994;
more = G__7995;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7992 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7992__delegate.call(this, x, y, more);
};
G__7992.cljs$lang$maxFixedArity = 2;
G__7992.cljs$lang$applyTo = (function (arglist__7996){
var x = cljs.core.first(arglist__7996);
var y = cljs.core.first(cljs.core.next(arglist__7996));
var more = cljs.core.rest(cljs.core.next(arglist__7996));
return G__7992__delegate.call(this, x, y, more);
});
return G__7992;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___7988.call(this,x);
case  2 :
return _GT__EQ___7989.call(this,x,y);
default:
return _GT__EQ___7990.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___7990.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__7997 = (function (x){
return x;
});
var max__7998 = (function (x,y){
return ((x > y) ? x : y);
});
var max__7999 = (function() { 
var G__8001__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__8001 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8001__delegate.call(this, x, y, more);
};
G__8001.cljs$lang$maxFixedArity = 2;
G__8001.cljs$lang$applyTo = (function (arglist__8002){
var x = cljs.core.first(arglist__8002);
var y = cljs.core.first(cljs.core.next(arglist__8002));
var more = cljs.core.rest(cljs.core.next(arglist__8002));
return G__8001__delegate.call(this, x, y, more);
});
return G__8001;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__7997.call(this,x);
case  2 :
return max__7998.call(this,x,y);
default:
return max__7999.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__7999.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__8003 = (function (x){
return x;
});
var min__8004 = (function (x,y){
return ((x < y) ? x : y);
});
var min__8005 = (function() { 
var G__8007__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__8007 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8007__delegate.call(this, x, y, more);
};
G__8007.cljs$lang$maxFixedArity = 2;
G__8007.cljs$lang$applyTo = (function (arglist__8008){
var x = cljs.core.first(arglist__8008);
var y = cljs.core.first(cljs.core.next(arglist__8008));
var more = cljs.core.rest(cljs.core.next(arglist__8008));
return G__8007__delegate.call(this, x, y, more);
});
return G__8007;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__8003.call(this,x);
case  2 :
return min__8004.call(this,x,y);
default:
return min__8005.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__8005.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__8009 = (n % d);

return cljs.core.fix.call(null,((n - rem__8009) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8010 = cljs.core.quot.call(null,n,d);

return (n - (d * q__8010));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8011 = (function (){
return Math.random.call(null);
});
var rand__8012 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8011.call(this);
case  1 :
return rand__8012.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___8014 = (function (x){
return true;
});
var _EQ__EQ___8015 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___8016 = (function() { 
var G__8018__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8019 = y;
var G__8020 = cljs.core.first.call(null,more);
var G__8021 = cljs.core.next.call(null,more);
x = G__8019;
y = G__8020;
more = G__8021;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8018 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8018__delegate.call(this, x, y, more);
};
G__8018.cljs$lang$maxFixedArity = 2;
G__8018.cljs$lang$applyTo = (function (arglist__8022){
var x = cljs.core.first(arglist__8022);
var y = cljs.core.first(cljs.core.next(arglist__8022));
var more = cljs.core.rest(cljs.core.next(arglist__8022));
return G__8018__delegate.call(this, x, y, more);
});
return G__8018;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___8014.call(this,x);
case  2 :
return _EQ__EQ___8015.call(this,x,y);
default:
return _EQ__EQ___8016.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___8016.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__8023 = n;
var xs__8024 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8025 = xs__8024;

if(cljs.core.truth_(and__3546__auto____8025))
{return (n__8023 > 0);
} else
{return and__3546__auto____8025;
}
})()))
{{
var G__8026 = (n__8023 - 1);
var G__8027 = cljs.core.next.call(null,xs__8024);
n__8023 = G__8026;
xs__8024 = G__8027;
continue;
}
} else
{return xs__8024;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__8032 = null;
var G__8032__8033 = (function (coll,n){
var temp__3695__auto____8028 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8028))
{var xs__8029 = temp__3695__auto____8028;

return cljs.core.first.call(null,xs__8029);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__8032__8034 = (function (coll,n,not_found){
var temp__3695__auto____8030 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8030))
{var xs__8031 = temp__3695__auto____8030;

return cljs.core.first.call(null,xs__8031);
} else
{return not_found;
}
});
G__8032 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8032__8033.call(this,coll,n);
case  3 :
return G__8032__8034.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8032;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___8036 = (function (){
return "";
});
var str_STAR___8037 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___8038 = (function() { 
var G__8040__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8041 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8042 = cljs.core.next.call(null,more);
sb = G__8041;
more = G__8042;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8040 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8040__delegate.call(this, x, ys);
};
G__8040.cljs$lang$maxFixedArity = 1;
G__8040.cljs$lang$applyTo = (function (arglist__8043){
var x = cljs.core.first(arglist__8043);
var ys = cljs.core.rest(arglist__8043);
return G__8040__delegate.call(this, x, ys);
});
return G__8040;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___8036.call(this);
case  1 :
return str_STAR___8037.call(this,x);
default:
return str_STAR___8038.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___8038.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__8044 = (function (){
return "";
});
var str__8045 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__8046 = (function() { 
var G__8048__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__8048 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8048__delegate.call(this, x, ys);
};
G__8048.cljs$lang$maxFixedArity = 1;
G__8048.cljs$lang$applyTo = (function (arglist__8049){
var x = cljs.core.first(arglist__8049);
var ys = cljs.core.rest(arglist__8049);
return G__8048__delegate.call(this, x, ys);
});
return G__8048;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__8044.call(this);
case  1 :
return str__8045.call(this,x);
default:
return str__8046.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__8046.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__8050 = (function (s,start){
return s.substring(start);
});
var subs__8051 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__8050.call(this,s,start);
case  3 :
return subs__8051.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__8053 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__8054 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__8053.call(this,ns);
case  2 :
return symbol__8054.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__8056 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__8057 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__8056.call(this,ns);
case  2 :
return keyword__8057.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8059 = cljs.core.seq.call(null,x);
var ys__8060 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__8059)))
{return cljs.core.nil_QMARK_.call(null,ys__8060);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__8060)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8059),cljs.core.first.call(null,ys__8060))))
{{
var G__8061 = cljs.core.next.call(null,xs__8059);
var G__8062 = cljs.core.next.call(null,ys__8060);
xs__8059 = G__8061;
ys__8060 = G__8062;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__8063_SHARP_,p2__8064_SHARP_){
return cljs.core.hash_combine.call(null,p1__8063_SHARP_,cljs.core.hash.call(null,p2__8064_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8065__8066 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__8065__8066))
{var G__8068__8070 = cljs.core.first.call(null,G__8065__8066);
var vec__8069__8071 = G__8068__8070;
var key_name__8072 = cljs.core.nth.call(null,vec__8069__8071,0,null);
var f__8073 = cljs.core.nth.call(null,vec__8069__8071,1,null);
var G__8065__8074 = G__8065__8066;

var G__8068__8075 = G__8068__8070;
var G__8065__8076 = G__8065__8074;

while(true){
var vec__8077__8078 = G__8068__8075;
var key_name__8079 = cljs.core.nth.call(null,vec__8077__8078,0,null);
var f__8080 = cljs.core.nth.call(null,vec__8077__8078,1,null);
var G__8065__8081 = G__8065__8076;

var str_name__8082 = cljs.core.name.call(null,key_name__8079);

obj[str_name__8082] = f__8080;
var temp__3698__auto____8083 = cljs.core.next.call(null,G__8065__8081);

if(cljs.core.truth_(temp__3698__auto____8083))
{var G__8065__8084 = temp__3698__auto____8083;

{
var G__8085 = cljs.core.first.call(null,G__8065__8084);
var G__8086 = G__8065__8084;
G__8068__8075 = G__8085;
G__8065__8076 = G__8086;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8087 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8088 = this;
return (new cljs.core.List(this__8088.meta,o,coll,(this__8088.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8089 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8090 = this;
return this__8090.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8091 = this;
return this__8091.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8092 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8093 = this;
return this__8093.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8094 = this;
return this__8094.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8095 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8096 = this;
return (new cljs.core.List(meta,this__8096.first,this__8096.rest,this__8096.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8097 = this;
return this__8097.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8098 = this;
return cljs.core.List.EMPTY;
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8099 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8100 = this;
return (new cljs.core.List(this__8100.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8101 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8102 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8103 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8104 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8105 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8106 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8107 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8108 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8109 = this;
return this__8109.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8110 = this;
return coll;
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__8111){
var items = cljs.core.seq( arglist__8111 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8112 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8113 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8114 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8115 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8115.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8116 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8117 = this;
return this__8117.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8118 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__8118.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__8118.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8119 = this;
return this__8119.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8120 = this;
return (new cljs.core.Cons(meta,this__8120.first,this__8120.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__8121 = null;
var G__8121__8122 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8121__8123 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8121 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__8121__8122.call(this,string,f);
case  3 :
return G__8121__8123.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8121;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8125 = null;
var G__8125__8126 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8125__8127 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8125 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__8125__8126.call(this,string,k);
case  3 :
return G__8125__8127.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8125;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8129 = null;
var G__8129__8130 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__8129__8131 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8129 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__8129__8130.call(this,string,n);
case  3 :
return G__8129__8131.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8129;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__8133 = null;
var G__8133__8134 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__8133__8135 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__8133 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__8133__8134.call(this,_,coll);
case  3 :
return G__8133__8135.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8133;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__8137 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__8137;
} else
{lazy_seq.x = x__8137.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8138 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8139 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8140 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8141 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8141.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8142 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8143 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8144 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8145 = this;
return this__8145.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8146 = this;
return (new cljs.core.LazySeq(meta,this__8146.realized,this__8146.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__8147 = cljs.core.array.call(null);

var s__8148 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8148)))
{ary__8147.push(cljs.core.first.call(null,s__8148));
{
var G__8149 = cljs.core.next.call(null,s__8148);
s__8148 = G__8149;
continue;
}
} else
{return ary__8147;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__8150 = s;
var i__8151 = n;
var sum__8152 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8153 = (i__8151 > 0);

if(cljs.core.truth_(and__3546__auto____8153))
{return cljs.core.seq.call(null,s__8150);
} else
{return and__3546__auto____8153;
}
})()))
{{
var G__8154 = cljs.core.next.call(null,s__8150);
var G__8155 = (i__8151 - 1);
var G__8156 = (sum__8152 + 1);
s__8150 = G__8154;
i__8151 = G__8155;
sum__8152 = G__8156;
continue;
}
} else
{return sum__8152;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__8160 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__8161 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__8162 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8157 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__8157))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8157),concat.call(null,cljs.core.rest.call(null,s__8157),y));
} else
{return y;
}
})));
});
var concat__8163 = (function() { 
var G__8165__delegate = function (x,y,zs){
var cat__8159 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8158 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__8158))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__8158),cat.call(null,cljs.core.rest.call(null,xys__8158),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__8159.call(null,concat.call(null,x,y),zs);
};
var G__8165 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8165__delegate.call(this, x, y, zs);
};
G__8165.cljs$lang$maxFixedArity = 2;
G__8165.cljs$lang$applyTo = (function (arglist__8166){
var x = cljs.core.first(arglist__8166);
var y = cljs.core.first(cljs.core.next(arglist__8166));
var zs = cljs.core.rest(cljs.core.next(arglist__8166));
return G__8165__delegate.call(this, x, y, zs);
});
return G__8165;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__8160.call(this);
case  1 :
return concat__8161.call(this,x);
case  2 :
return concat__8162.call(this,x,y);
default:
return concat__8163.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__8163.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___8167 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___8168 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___8169 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___8170 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___8171 = (function() { 
var G__8173__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__8173 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8173__delegate.call(this, a, b, c, d, more);
};
G__8173.cljs$lang$maxFixedArity = 4;
G__8173.cljs$lang$applyTo = (function (arglist__8174){
var a = cljs.core.first(arglist__8174);
var b = cljs.core.first(cljs.core.next(arglist__8174));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8174)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8174))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8174))));
return G__8173__delegate.call(this, a, b, c, d, more);
});
return G__8173;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___8167.call(this,a);
case  2 :
return list_STAR___8168.call(this,a,b);
case  3 :
return list_STAR___8169.call(this,a,b,c);
case  4 :
return list_STAR___8170.call(this,a,b,c,d);
default:
return list_STAR___8171.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___8171.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__8184 = (function (f,args){
var fixed_arity__8175 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__8175 + 1)) <= fixed_arity__8175)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__8185 = (function (f,x,args){
var arglist__8176 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__8177 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8176,fixed_arity__8177) <= fixed_arity__8177)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8176));
} else
{return f.cljs$lang$applyTo(arglist__8176);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8176));
}
});
var apply__8186 = (function (f,x,y,args){
var arglist__8178 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__8179 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8178,fixed_arity__8179) <= fixed_arity__8179)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8178));
} else
{return f.cljs$lang$applyTo(arglist__8178);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8178));
}
});
var apply__8187 = (function (f,x,y,z,args){
var arglist__8180 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__8181 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8180,fixed_arity__8181) <= fixed_arity__8181)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8180));
} else
{return f.cljs$lang$applyTo(arglist__8180);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8180));
}
});
var apply__8188 = (function() { 
var G__8190__delegate = function (f,a,b,c,d,args){
var arglist__8182 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__8183 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8182,fixed_arity__8183) <= fixed_arity__8183)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8182));
} else
{return f.cljs$lang$applyTo(arglist__8182);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8182));
}
};
var G__8190 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8190__delegate.call(this, f, a, b, c, d, args);
};
G__8190.cljs$lang$maxFixedArity = 5;
G__8190.cljs$lang$applyTo = (function (arglist__8191){
var f = cljs.core.first(arglist__8191);
var a = cljs.core.first(cljs.core.next(arglist__8191));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8191)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8191))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8191)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8191)))));
return G__8190__delegate.call(this, f, a, b, c, d, args);
});
return G__8190;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__8184.call(this,f,a);
case  3 :
return apply__8185.call(this,f,a,b);
case  4 :
return apply__8186.call(this,f,a,b,c);
case  5 :
return apply__8187.call(this,f,a,b,c,d);
default:
return apply__8188.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__8188.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__8192){
var obj = cljs.core.first(arglist__8192);
var f = cljs.core.first(cljs.core.next(arglist__8192));
var args = cljs.core.rest(cljs.core.next(arglist__8192));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___8193 = (function (x){
return false;
});
var not_EQ___8194 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___8195 = (function() { 
var G__8197__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__8197 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8197__delegate.call(this, x, y, more);
};
G__8197.cljs$lang$maxFixedArity = 2;
G__8197.cljs$lang$applyTo = (function (arglist__8198){
var x = cljs.core.first(arglist__8198);
var y = cljs.core.first(cljs.core.next(arglist__8198));
var more = cljs.core.rest(cljs.core.next(arglist__8198));
return G__8197__delegate.call(this, x, y, more);
});
return G__8197;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___8193.call(this,x);
case  2 :
return not_EQ___8194.call(this,x,y);
default:
return not_EQ___8195.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___8195.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__8199 = pred;
var G__8200 = cljs.core.next.call(null,coll);
pred = G__8199;
coll = G__8200;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____8201 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____8201))
{return or__3548__auto____8201;
} else
{{
var G__8202 = pred;
var G__8203 = cljs.core.next.call(null,coll);
pred = G__8202;
coll = G__8203;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__8204 = null;
var G__8204__8205 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__8204__8206 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__8204__8207 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__8204__8208 = (function() { 
var G__8210__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__8210 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8210__delegate.call(this, x, y, zs);
};
G__8210.cljs$lang$maxFixedArity = 2;
G__8210.cljs$lang$applyTo = (function (arglist__8211){
var x = cljs.core.first(arglist__8211);
var y = cljs.core.first(cljs.core.next(arglist__8211));
var zs = cljs.core.rest(cljs.core.next(arglist__8211));
return G__8210__delegate.call(this, x, y, zs);
});
return G__8210;
})()
;
G__8204 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__8204__8205.call(this);
case  1 :
return G__8204__8206.call(this,x);
case  2 :
return G__8204__8207.call(this,x,y);
default:
return G__8204__8208.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8204.cljs$lang$maxFixedArity = 2;
G__8204.cljs$lang$applyTo = G__8204__8208.cljs$lang$applyTo;
return G__8204;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8212__delegate = function (args){
return x;
};
var G__8212 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8212__delegate.call(this, args);
};
G__8212.cljs$lang$maxFixedArity = 0;
G__8212.cljs$lang$applyTo = (function (arglist__8213){
var args = cljs.core.seq( arglist__8213 );;
return G__8212__delegate.call(this, args);
});
return G__8212;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__8217 = (function (){
return cljs.core.identity;
});
var comp__8218 = (function (f){
return f;
});
var comp__8219 = (function (f,g){
return (function() {
var G__8223 = null;
var G__8223__8224 = (function (){
return f.call(null,g.call(null));
});
var G__8223__8225 = (function (x){
return f.call(null,g.call(null,x));
});
var G__8223__8226 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__8223__8227 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__8223__8228 = (function() { 
var G__8230__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8230 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8230__delegate.call(this, x, y, z, args);
};
G__8230.cljs$lang$maxFixedArity = 3;
G__8230.cljs$lang$applyTo = (function (arglist__8231){
var x = cljs.core.first(arglist__8231);
var y = cljs.core.first(cljs.core.next(arglist__8231));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8231)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8231)));
return G__8230__delegate.call(this, x, y, z, args);
});
return G__8230;
})()
;
G__8223 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8223__8224.call(this);
case  1 :
return G__8223__8225.call(this,x);
case  2 :
return G__8223__8226.call(this,x,y);
case  3 :
return G__8223__8227.call(this,x,y,z);
default:
return G__8223__8228.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8223.cljs$lang$maxFixedArity = 3;
G__8223.cljs$lang$applyTo = G__8223__8228.cljs$lang$applyTo;
return G__8223;
})()
});
var comp__8220 = (function (f,g,h){
return (function() {
var G__8232 = null;
var G__8232__8233 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__8232__8234 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__8232__8235 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__8232__8236 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__8232__8237 = (function() { 
var G__8239__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__8239 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8239__delegate.call(this, x, y, z, args);
};
G__8239.cljs$lang$maxFixedArity = 3;
G__8239.cljs$lang$applyTo = (function (arglist__8240){
var x = cljs.core.first(arglist__8240);
var y = cljs.core.first(cljs.core.next(arglist__8240));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8240)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8240)));
return G__8239__delegate.call(this, x, y, z, args);
});
return G__8239;
})()
;
G__8232 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8232__8233.call(this);
case  1 :
return G__8232__8234.call(this,x);
case  2 :
return G__8232__8235.call(this,x,y);
case  3 :
return G__8232__8236.call(this,x,y,z);
default:
return G__8232__8237.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8232.cljs$lang$maxFixedArity = 3;
G__8232.cljs$lang$applyTo = G__8232__8237.cljs$lang$applyTo;
return G__8232;
})()
});
var comp__8221 = (function() { 
var G__8241__delegate = function (f1,f2,f3,fs){
var fs__8214 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__8242__delegate = function (args){
var ret__8215 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__8214),args);
var fs__8216 = cljs.core.next.call(null,fs__8214);

while(true){
if(cljs.core.truth_(fs__8216))
{{
var G__8243 = cljs.core.first.call(null,fs__8216).call(null,ret__8215);
var G__8244 = cljs.core.next.call(null,fs__8216);
ret__8215 = G__8243;
fs__8216 = G__8244;
continue;
}
} else
{return ret__8215;
}
break;
}
};
var G__8242 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8242__delegate.call(this, args);
};
G__8242.cljs$lang$maxFixedArity = 0;
G__8242.cljs$lang$applyTo = (function (arglist__8245){
var args = cljs.core.seq( arglist__8245 );;
return G__8242__delegate.call(this, args);
});
return G__8242;
})()
;
};
var G__8241 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8241__delegate.call(this, f1, f2, f3, fs);
};
G__8241.cljs$lang$maxFixedArity = 3;
G__8241.cljs$lang$applyTo = (function (arglist__8246){
var f1 = cljs.core.first(arglist__8246);
var f2 = cljs.core.first(cljs.core.next(arglist__8246));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8246)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8246)));
return G__8241__delegate.call(this, f1, f2, f3, fs);
});
return G__8241;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__8217.call(this);
case  1 :
return comp__8218.call(this,f1);
case  2 :
return comp__8219.call(this,f1,f2);
case  3 :
return comp__8220.call(this,f1,f2,f3);
default:
return comp__8221.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__8221.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__8247 = (function (f,arg1){
return (function() { 
var G__8252__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__8252 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8252__delegate.call(this, args);
};
G__8252.cljs$lang$maxFixedArity = 0;
G__8252.cljs$lang$applyTo = (function (arglist__8253){
var args = cljs.core.seq( arglist__8253 );;
return G__8252__delegate.call(this, args);
});
return G__8252;
})()
;
});
var partial__8248 = (function (f,arg1,arg2){
return (function() { 
var G__8254__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__8254 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8254__delegate.call(this, args);
};
G__8254.cljs$lang$maxFixedArity = 0;
G__8254.cljs$lang$applyTo = (function (arglist__8255){
var args = cljs.core.seq( arglist__8255 );;
return G__8254__delegate.call(this, args);
});
return G__8254;
})()
;
});
var partial__8249 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8256__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__8256 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8256__delegate.call(this, args);
};
G__8256.cljs$lang$maxFixedArity = 0;
G__8256.cljs$lang$applyTo = (function (arglist__8257){
var args = cljs.core.seq( arglist__8257 );;
return G__8256__delegate.call(this, args);
});
return G__8256;
})()
;
});
var partial__8250 = (function() { 
var G__8258__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8259__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__8259 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8259__delegate.call(this, args);
};
G__8259.cljs$lang$maxFixedArity = 0;
G__8259.cljs$lang$applyTo = (function (arglist__8260){
var args = cljs.core.seq( arglist__8260 );;
return G__8259__delegate.call(this, args);
});
return G__8259;
})()
;
};
var G__8258 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8258__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8258.cljs$lang$maxFixedArity = 4;
G__8258.cljs$lang$applyTo = (function (arglist__8261){
var f = cljs.core.first(arglist__8261);
var arg1 = cljs.core.first(cljs.core.next(arglist__8261));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8261)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8261))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8261))));
return G__8258__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__8258;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__8247.call(this,f,arg1);
case  3 :
return partial__8248.call(this,f,arg1,arg2);
case  4 :
return partial__8249.call(this,f,arg1,arg2,arg3);
default:
return partial__8250.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__8250.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__8262 = (function (f,x){
return (function() {
var G__8266 = null;
var G__8266__8267 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__8266__8268 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__8266__8269 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__8266__8270 = (function() { 
var G__8272__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__8272 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8272__delegate.call(this, a, b, c, ds);
};
G__8272.cljs$lang$maxFixedArity = 3;
G__8272.cljs$lang$applyTo = (function (arglist__8273){
var a = cljs.core.first(arglist__8273);
var b = cljs.core.first(cljs.core.next(arglist__8273));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8273)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8273)));
return G__8272__delegate.call(this, a, b, c, ds);
});
return G__8272;
})()
;
G__8266 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__8266__8267.call(this,a);
case  2 :
return G__8266__8268.call(this,a,b);
case  3 :
return G__8266__8269.call(this,a,b,c);
default:
return G__8266__8270.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8266.cljs$lang$maxFixedArity = 3;
G__8266.cljs$lang$applyTo = G__8266__8270.cljs$lang$applyTo;
return G__8266;
})()
});
var fnil__8263 = (function (f,x,y){
return (function() {
var G__8274 = null;
var G__8274__8275 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__8274__8276 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__8274__8277 = (function() { 
var G__8279__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__8279 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8279__delegate.call(this, a, b, c, ds);
};
G__8279.cljs$lang$maxFixedArity = 3;
G__8279.cljs$lang$applyTo = (function (arglist__8280){
var a = cljs.core.first(arglist__8280);
var b = cljs.core.first(cljs.core.next(arglist__8280));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8280)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8280)));
return G__8279__delegate.call(this, a, b, c, ds);
});
return G__8279;
})()
;
G__8274 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8274__8275.call(this,a,b);
case  3 :
return G__8274__8276.call(this,a,b,c);
default:
return G__8274__8277.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8274.cljs$lang$maxFixedArity = 3;
G__8274.cljs$lang$applyTo = G__8274__8277.cljs$lang$applyTo;
return G__8274;
})()
});
var fnil__8264 = (function (f,x,y,z){
return (function() {
var G__8281 = null;
var G__8281__8282 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__8281__8283 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__8281__8284 = (function() { 
var G__8286__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__8286 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8286__delegate.call(this, a, b, c, ds);
};
G__8286.cljs$lang$maxFixedArity = 3;
G__8286.cljs$lang$applyTo = (function (arglist__8287){
var a = cljs.core.first(arglist__8287);
var b = cljs.core.first(cljs.core.next(arglist__8287));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8287)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8287)));
return G__8286__delegate.call(this, a, b, c, ds);
});
return G__8286;
})()
;
G__8281 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8281__8282.call(this,a,b);
case  3 :
return G__8281__8283.call(this,a,b,c);
default:
return G__8281__8284.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8281.cljs$lang$maxFixedArity = 3;
G__8281.cljs$lang$applyTo = G__8281__8284.cljs$lang$applyTo;
return G__8281;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__8262.call(this,f,x);
case  3 :
return fnil__8263.call(this,f,x,y);
case  4 :
return fnil__8264.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__8290 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8288 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8288))
{var s__8289 = temp__3698__auto____8288;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8289)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8289)));
} else
{return null;
}
})));
});

return mapi__8290.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8291 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8291))
{var s__8292 = temp__3698__auto____8291;

var x__8293 = f.call(null,cljs.core.first.call(null,s__8292));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__8293)))
{return keep.call(null,f,cljs.core.rest.call(null,s__8292));
} else
{return cljs.core.cons.call(null,x__8293,keep.call(null,f,cljs.core.rest.call(null,s__8292)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__8303 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8300 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8300))
{var s__8301 = temp__3698__auto____8300;

var x__8302 = f.call(null,idx,cljs.core.first.call(null,s__8301));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__8302)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8301));
} else
{return cljs.core.cons.call(null,x__8302,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8301)));
}
} else
{return null;
}
})));
});

return keepi__8303.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__8348 = (function (p){
return (function() {
var ep1 = null;
var ep1__8353 = (function (){
return true;
});
var ep1__8354 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__8355 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8310 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____8310))
{return p.call(null,y);
} else
{return and__3546__auto____8310;
}
})());
});
var ep1__8356 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8311 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____8311))
{var and__3546__auto____8312 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____8312))
{return p.call(null,z);
} else
{return and__3546__auto____8312;
}
} else
{return and__3546__auto____8311;
}
})());
});
var ep1__8357 = (function() { 
var G__8359__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8313 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8313))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____8313;
}
})());
};
var G__8359 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8359__delegate.call(this, x, y, z, args);
};
G__8359.cljs$lang$maxFixedArity = 3;
G__8359.cljs$lang$applyTo = (function (arglist__8360){
var x = cljs.core.first(arglist__8360);
var y = cljs.core.first(cljs.core.next(arglist__8360));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8360)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8360)));
return G__8359__delegate.call(this, x, y, z, args);
});
return G__8359;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__8353.call(this);
case  1 :
return ep1__8354.call(this,x);
case  2 :
return ep1__8355.call(this,x,y);
case  3 :
return ep1__8356.call(this,x,y,z);
default:
return ep1__8357.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__8357.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__8349 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__8361 = (function (){
return true;
});
var ep2__8362 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8314 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8314))
{return p2.call(null,x);
} else
{return and__3546__auto____8314;
}
})());
});
var ep2__8363 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8315 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8315))
{var and__3546__auto____8316 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8316))
{var and__3546__auto____8317 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8317))
{return p2.call(null,y);
} else
{return and__3546__auto____8317;
}
} else
{return and__3546__auto____8316;
}
} else
{return and__3546__auto____8315;
}
})());
});
var ep2__8364 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8318 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8318))
{var and__3546__auto____8319 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8319))
{var and__3546__auto____8320 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____8320))
{var and__3546__auto____8321 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8321))
{var and__3546__auto____8322 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8322))
{return p2.call(null,z);
} else
{return and__3546__auto____8322;
}
} else
{return and__3546__auto____8321;
}
} else
{return and__3546__auto____8320;
}
} else
{return and__3546__auto____8319;
}
} else
{return and__3546__auto____8318;
}
})());
});
var ep2__8365 = (function() { 
var G__8367__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8323 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8323))
{return cljs.core.every_QMARK_.call(null,(function (p1__8294_SHARP_){
var and__3546__auto____8324 = p1.call(null,p1__8294_SHARP_);

if(cljs.core.truth_(and__3546__auto____8324))
{return p2.call(null,p1__8294_SHARP_);
} else
{return and__3546__auto____8324;
}
}),args);
} else
{return and__3546__auto____8323;
}
})());
};
var G__8367 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8367__delegate.call(this, x, y, z, args);
};
G__8367.cljs$lang$maxFixedArity = 3;
G__8367.cljs$lang$applyTo = (function (arglist__8368){
var x = cljs.core.first(arglist__8368);
var y = cljs.core.first(cljs.core.next(arglist__8368));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8368)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8368)));
return G__8367__delegate.call(this, x, y, z, args);
});
return G__8367;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__8361.call(this);
case  1 :
return ep2__8362.call(this,x);
case  2 :
return ep2__8363.call(this,x,y);
case  3 :
return ep2__8364.call(this,x,y,z);
default:
return ep2__8365.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__8365.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__8350 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__8369 = (function (){
return true;
});
var ep3__8370 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8325 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8325))
{var and__3546__auto____8326 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8326))
{return p3.call(null,x);
} else
{return and__3546__auto____8326;
}
} else
{return and__3546__auto____8325;
}
})());
});
var ep3__8371 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8327 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8327))
{var and__3546__auto____8328 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8328))
{var and__3546__auto____8329 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____8329))
{var and__3546__auto____8330 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8330))
{var and__3546__auto____8331 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8331))
{return p3.call(null,y);
} else
{return and__3546__auto____8331;
}
} else
{return and__3546__auto____8330;
}
} else
{return and__3546__auto____8329;
}
} else
{return and__3546__auto____8328;
}
} else
{return and__3546__auto____8327;
}
})());
});
var ep3__8372 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8332 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8332))
{var and__3546__auto____8333 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8333))
{var and__3546__auto____8334 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____8334))
{var and__3546__auto____8335 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8335))
{var and__3546__auto____8336 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8336))
{var and__3546__auto____8337 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____8337))
{var and__3546__auto____8338 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____8338))
{var and__3546__auto____8339 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____8339))
{return p3.call(null,z);
} else
{return and__3546__auto____8339;
}
} else
{return and__3546__auto____8338;
}
} else
{return and__3546__auto____8337;
}
} else
{return and__3546__auto____8336;
}
} else
{return and__3546__auto____8335;
}
} else
{return and__3546__auto____8334;
}
} else
{return and__3546__auto____8333;
}
} else
{return and__3546__auto____8332;
}
})());
});
var ep3__8373 = (function() { 
var G__8375__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8340 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8340))
{return cljs.core.every_QMARK_.call(null,(function (p1__8295_SHARP_){
var and__3546__auto____8341 = p1.call(null,p1__8295_SHARP_);

if(cljs.core.truth_(and__3546__auto____8341))
{var and__3546__auto____8342 = p2.call(null,p1__8295_SHARP_);

if(cljs.core.truth_(and__3546__auto____8342))
{return p3.call(null,p1__8295_SHARP_);
} else
{return and__3546__auto____8342;
}
} else
{return and__3546__auto____8341;
}
}),args);
} else
{return and__3546__auto____8340;
}
})());
};
var G__8375 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8375__delegate.call(this, x, y, z, args);
};
G__8375.cljs$lang$maxFixedArity = 3;
G__8375.cljs$lang$applyTo = (function (arglist__8376){
var x = cljs.core.first(arglist__8376);
var y = cljs.core.first(cljs.core.next(arglist__8376));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8376)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8376)));
return G__8375__delegate.call(this, x, y, z, args);
});
return G__8375;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__8369.call(this);
case  1 :
return ep3__8370.call(this,x);
case  2 :
return ep3__8371.call(this,x,y);
case  3 :
return ep3__8372.call(this,x,y,z);
default:
return ep3__8373.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__8373.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__8351 = (function() { 
var G__8377__delegate = function (p1,p2,p3,ps){
var ps__8343 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__8378 = (function (){
return true;
});
var epn__8379 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8296_SHARP_){
return p1__8296_SHARP_.call(null,x);
}),ps__8343);
});
var epn__8380 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8297_SHARP_){
var and__3546__auto____8344 = p1__8297_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____8344))
{return p1__8297_SHARP_.call(null,y);
} else
{return and__3546__auto____8344;
}
}),ps__8343);
});
var epn__8381 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8298_SHARP_){
var and__3546__auto____8345 = p1__8298_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____8345))
{var and__3546__auto____8346 = p1__8298_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____8346))
{return p1__8298_SHARP_.call(null,z);
} else
{return and__3546__auto____8346;
}
} else
{return and__3546__auto____8345;
}
}),ps__8343);
});
var epn__8382 = (function() { 
var G__8384__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8347 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8347))
{return cljs.core.every_QMARK_.call(null,(function (p1__8299_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8299_SHARP_,args);
}),ps__8343);
} else
{return and__3546__auto____8347;
}
})());
};
var G__8384 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8384__delegate.call(this, x, y, z, args);
};
G__8384.cljs$lang$maxFixedArity = 3;
G__8384.cljs$lang$applyTo = (function (arglist__8385){
var x = cljs.core.first(arglist__8385);
var y = cljs.core.first(cljs.core.next(arglist__8385));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8385)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8385)));
return G__8384__delegate.call(this, x, y, z, args);
});
return G__8384;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__8378.call(this);
case  1 :
return epn__8379.call(this,x);
case  2 :
return epn__8380.call(this,x,y);
case  3 :
return epn__8381.call(this,x,y,z);
default:
return epn__8382.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__8382.cljs$lang$applyTo;
return epn;
})()
};
var G__8377 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8377__delegate.call(this, p1, p2, p3, ps);
};
G__8377.cljs$lang$maxFixedArity = 3;
G__8377.cljs$lang$applyTo = (function (arglist__8386){
var p1 = cljs.core.first(arglist__8386);
var p2 = cljs.core.first(cljs.core.next(arglist__8386));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8386)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8386)));
return G__8377__delegate.call(this, p1, p2, p3, ps);
});
return G__8377;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__8348.call(this,p1);
case  2 :
return every_pred__8349.call(this,p1,p2);
case  3 :
return every_pred__8350.call(this,p1,p2,p3);
default:
return every_pred__8351.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__8351.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__8426 = (function (p){
return (function() {
var sp1 = null;
var sp1__8431 = (function (){
return null;
});
var sp1__8432 = (function (x){
return p.call(null,x);
});
var sp1__8433 = (function (x,y){
var or__3548__auto____8388 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____8388))
{return or__3548__auto____8388;
} else
{return p.call(null,y);
}
});
var sp1__8434 = (function (x,y,z){
var or__3548__auto____8389 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____8389))
{return or__3548__auto____8389;
} else
{var or__3548__auto____8390 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____8390))
{return or__3548__auto____8390;
} else
{return p.call(null,z);
}
}
});
var sp1__8435 = (function() { 
var G__8437__delegate = function (x,y,z,args){
var or__3548__auto____8391 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8391))
{return or__3548__auto____8391;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8437 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8437__delegate.call(this, x, y, z, args);
};
G__8437.cljs$lang$maxFixedArity = 3;
G__8437.cljs$lang$applyTo = (function (arglist__8438){
var x = cljs.core.first(arglist__8438);
var y = cljs.core.first(cljs.core.next(arglist__8438));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8438)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8438)));
return G__8437__delegate.call(this, x, y, z, args);
});
return G__8437;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__8431.call(this);
case  1 :
return sp1__8432.call(this,x);
case  2 :
return sp1__8433.call(this,x,y);
case  3 :
return sp1__8434.call(this,x,y,z);
default:
return sp1__8435.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__8435.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__8427 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__8439 = (function (){
return null;
});
var sp2__8440 = (function (x){
var or__3548__auto____8392 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8392))
{return or__3548__auto____8392;
} else
{return p2.call(null,x);
}
});
var sp2__8441 = (function (x,y){
var or__3548__auto____8393 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8393))
{return or__3548__auto____8393;
} else
{var or__3548__auto____8394 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8394))
{return or__3548__auto____8394;
} else
{var or__3548__auto____8395 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8395))
{return or__3548__auto____8395;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__8442 = (function (x,y,z){
var or__3548__auto____8396 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8396))
{return or__3548__auto____8396;
} else
{var or__3548__auto____8397 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8397))
{return or__3548__auto____8397;
} else
{var or__3548__auto____8398 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____8398))
{return or__3548__auto____8398;
} else
{var or__3548__auto____8399 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8399))
{return or__3548__auto____8399;
} else
{var or__3548__auto____8400 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8400))
{return or__3548__auto____8400;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__8443 = (function() { 
var G__8445__delegate = function (x,y,z,args){
var or__3548__auto____8401 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8401))
{return or__3548__auto____8401;
} else
{return cljs.core.some.call(null,(function (p1__8304_SHARP_){
var or__3548__auto____8402 = p1.call(null,p1__8304_SHARP_);

if(cljs.core.truth_(or__3548__auto____8402))
{return or__3548__auto____8402;
} else
{return p2.call(null,p1__8304_SHARP_);
}
}),args);
}
};
var G__8445 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8445__delegate.call(this, x, y, z, args);
};
G__8445.cljs$lang$maxFixedArity = 3;
G__8445.cljs$lang$applyTo = (function (arglist__8446){
var x = cljs.core.first(arglist__8446);
var y = cljs.core.first(cljs.core.next(arglist__8446));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8446)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8446)));
return G__8445__delegate.call(this, x, y, z, args);
});
return G__8445;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__8439.call(this);
case  1 :
return sp2__8440.call(this,x);
case  2 :
return sp2__8441.call(this,x,y);
case  3 :
return sp2__8442.call(this,x,y,z);
default:
return sp2__8443.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__8443.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__8428 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__8447 = (function (){
return null;
});
var sp3__8448 = (function (x){
var or__3548__auto____8403 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8403))
{return or__3548__auto____8403;
} else
{var or__3548__auto____8404 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8404))
{return or__3548__auto____8404;
} else
{return p3.call(null,x);
}
}
});
var sp3__8449 = (function (x,y){
var or__3548__auto____8405 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8405))
{return or__3548__auto____8405;
} else
{var or__3548__auto____8406 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8406))
{return or__3548__auto____8406;
} else
{var or__3548__auto____8407 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8407))
{return or__3548__auto____8407;
} else
{var or__3548__auto____8408 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8408))
{return or__3548__auto____8408;
} else
{var or__3548__auto____8409 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8409))
{return or__3548__auto____8409;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__8450 = (function (x,y,z){
var or__3548__auto____8410 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____8410))
{return or__3548__auto____8410;
} else
{var or__3548__auto____8411 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____8411))
{return or__3548__auto____8411;
} else
{var or__3548__auto____8412 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____8412))
{return or__3548__auto____8412;
} else
{var or__3548__auto____8413 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____8413))
{return or__3548__auto____8413;
} else
{var or__3548__auto____8414 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____8414))
{return or__3548__auto____8414;
} else
{var or__3548__auto____8415 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____8415))
{return or__3548__auto____8415;
} else
{var or__3548__auto____8416 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____8416))
{return or__3548__auto____8416;
} else
{var or__3548__auto____8417 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____8417))
{return or__3548__auto____8417;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__8451 = (function() { 
var G__8453__delegate = function (x,y,z,args){
var or__3548__auto____8418 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8418))
{return or__3548__auto____8418;
} else
{return cljs.core.some.call(null,(function (p1__8305_SHARP_){
var or__3548__auto____8419 = p1.call(null,p1__8305_SHARP_);

if(cljs.core.truth_(or__3548__auto____8419))
{return or__3548__auto____8419;
} else
{var or__3548__auto____8420 = p2.call(null,p1__8305_SHARP_);

if(cljs.core.truth_(or__3548__auto____8420))
{return or__3548__auto____8420;
} else
{return p3.call(null,p1__8305_SHARP_);
}
}
}),args);
}
};
var G__8453 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8453__delegate.call(this, x, y, z, args);
};
G__8453.cljs$lang$maxFixedArity = 3;
G__8453.cljs$lang$applyTo = (function (arglist__8454){
var x = cljs.core.first(arglist__8454);
var y = cljs.core.first(cljs.core.next(arglist__8454));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8454)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8454)));
return G__8453__delegate.call(this, x, y, z, args);
});
return G__8453;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__8447.call(this);
case  1 :
return sp3__8448.call(this,x);
case  2 :
return sp3__8449.call(this,x,y);
case  3 :
return sp3__8450.call(this,x,y,z);
default:
return sp3__8451.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__8451.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__8429 = (function() { 
var G__8455__delegate = function (p1,p2,p3,ps){
var ps__8421 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__8456 = (function (){
return null;
});
var spn__8457 = (function (x){
return cljs.core.some.call(null,(function (p1__8306_SHARP_){
return p1__8306_SHARP_.call(null,x);
}),ps__8421);
});
var spn__8458 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8307_SHARP_){
var or__3548__auto____8422 = p1__8307_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8422))
{return or__3548__auto____8422;
} else
{return p1__8307_SHARP_.call(null,y);
}
}),ps__8421);
});
var spn__8459 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8308_SHARP_){
var or__3548__auto____8423 = p1__8308_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8423))
{return or__3548__auto____8423;
} else
{var or__3548__auto____8424 = p1__8308_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____8424))
{return or__3548__auto____8424;
} else
{return p1__8308_SHARP_.call(null,z);
}
}
}),ps__8421);
});
var spn__8460 = (function() { 
var G__8462__delegate = function (x,y,z,args){
var or__3548__auto____8425 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____8425))
{return or__3548__auto____8425;
} else
{return cljs.core.some.call(null,(function (p1__8309_SHARP_){
return cljs.core.some.call(null,p1__8309_SHARP_,args);
}),ps__8421);
}
};
var G__8462 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8462__delegate.call(this, x, y, z, args);
};
G__8462.cljs$lang$maxFixedArity = 3;
G__8462.cljs$lang$applyTo = (function (arglist__8463){
var x = cljs.core.first(arglist__8463);
var y = cljs.core.first(cljs.core.next(arglist__8463));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8463)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8463)));
return G__8462__delegate.call(this, x, y, z, args);
});
return G__8462;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__8456.call(this);
case  1 :
return spn__8457.call(this,x);
case  2 :
return spn__8458.call(this,x,y);
case  3 :
return spn__8459.call(this,x,y,z);
default:
return spn__8460.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__8460.cljs$lang$applyTo;
return spn;
})()
};
var G__8455 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8455__delegate.call(this, p1, p2, p3, ps);
};
G__8455.cljs$lang$maxFixedArity = 3;
G__8455.cljs$lang$applyTo = (function (arglist__8464){
var p1 = cljs.core.first(arglist__8464);
var p2 = cljs.core.first(cljs.core.next(arglist__8464));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8464)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8464)));
return G__8455__delegate.call(this, p1, p2, p3, ps);
});
return G__8455;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__8426.call(this,p1);
case  2 :
return some_fn__8427.call(this,p1,p2);
case  3 :
return some_fn__8428.call(this,p1,p2,p3);
default:
return some_fn__8429.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__8429.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__8477 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8465 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8465))
{var s__8466 = temp__3698__auto____8465;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8466)),map.call(null,f,cljs.core.rest.call(null,s__8466)));
} else
{return null;
}
})));
});
var map__8478 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8467 = cljs.core.seq.call(null,c1);
var s2__8468 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8469 = s1__8467;

if(cljs.core.truth_(and__3546__auto____8469))
{return s2__8468;
} else
{return and__3546__auto____8469;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8467),cljs.core.first.call(null,s2__8468)),map.call(null,f,cljs.core.rest.call(null,s1__8467),cljs.core.rest.call(null,s2__8468)));
} else
{return null;
}
})));
});
var map__8479 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8470 = cljs.core.seq.call(null,c1);
var s2__8471 = cljs.core.seq.call(null,c2);
var s3__8472 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____8473 = s1__8470;

if(cljs.core.truth_(and__3546__auto____8473))
{var and__3546__auto____8474 = s2__8471;

if(cljs.core.truth_(and__3546__auto____8474))
{return s3__8472;
} else
{return and__3546__auto____8474;
}
} else
{return and__3546__auto____8473;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8470),cljs.core.first.call(null,s2__8471),cljs.core.first.call(null,s3__8472)),map.call(null,f,cljs.core.rest.call(null,s1__8470),cljs.core.rest.call(null,s2__8471),cljs.core.rest.call(null,s3__8472)));
} else
{return null;
}
})));
});
var map__8480 = (function() { 
var G__8482__delegate = function (f,c1,c2,c3,colls){
var step__8476 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8475 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8475)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8475),step.call(null,map.call(null,cljs.core.rest,ss__8475)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__8387_SHARP_){
return cljs.core.apply.call(null,f,p1__8387_SHARP_);
}),step__8476.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8482 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8482__delegate.call(this, f, c1, c2, c3, colls);
};
G__8482.cljs$lang$maxFixedArity = 4;
G__8482.cljs$lang$applyTo = (function (arglist__8483){
var f = cljs.core.first(arglist__8483);
var c1 = cljs.core.first(cljs.core.next(arglist__8483));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8483)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8483))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8483))));
return G__8482__delegate.call(this, f, c1, c2, c3, colls);
});
return G__8482;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__8477.call(this,f,c1);
case  3 :
return map__8478.call(this,f,c1,c2);
case  4 :
return map__8479.call(this,f,c1,c2,c3);
default:
return map__8480.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__8480.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____8484 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8484))
{var s__8485 = temp__3698__auto____8484;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8485),take.call(null,(n - 1),cljs.core.rest.call(null,s__8485)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__8488 = (function (n,coll){
while(true){
var s__8486 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8487 = (n > 0);

if(cljs.core.truth_(and__3546__auto____8487))
{return s__8486;
} else
{return and__3546__auto____8487;
}
})()))
{{
var G__8489 = (n - 1);
var G__8490 = cljs.core.rest.call(null,s__8486);
n = G__8489;
coll = G__8490;
continue;
}
} else
{return s__8486;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8488.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__8491 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__8492 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__8491.call(this,n);
case  2 :
return drop_last__8492.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__8494 = cljs.core.seq.call(null,coll);
var lead__8495 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__8495))
{{
var G__8496 = cljs.core.next.call(null,s__8494);
var G__8497 = cljs.core.next.call(null,lead__8495);
s__8494 = G__8496;
lead__8495 = G__8497;
continue;
}
} else
{return s__8494;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8500 = (function (pred,coll){
while(true){
var s__8498 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____8499 = s__8498;

if(cljs.core.truth_(and__3546__auto____8499))
{return pred.call(null,cljs.core.first.call(null,s__8498));
} else
{return and__3546__auto____8499;
}
})()))
{{
var G__8501 = pred;
var G__8502 = cljs.core.rest.call(null,s__8498);
pred = G__8501;
coll = G__8502;
continue;
}
} else
{return s__8498;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8500.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8503 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8503))
{var s__8504 = temp__3698__auto____8503;

return cljs.core.concat.call(null,s__8504,cycle.call(null,s__8504));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__8505 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__8506 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__8505.call(this,n);
case  2 :
return repeat__8506.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__8508 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__8509 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__8508.call(this,n);
case  2 :
return repeatedly__8509.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__8515 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8511 = cljs.core.seq.call(null,c1);
var s2__8512 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____8513 = s1__8511;

if(cljs.core.truth_(and__3546__auto____8513))
{return s2__8512;
} else
{return and__3546__auto____8513;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8511),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8512),interleave.call(null,cljs.core.rest.call(null,s1__8511),cljs.core.rest.call(null,s2__8512))));
} else
{return null;
}
})));
});
var interleave__8516 = (function() { 
var G__8518__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8514 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8514)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8514),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8514)));
} else
{return null;
}
})));
};
var G__8518 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8518__delegate.call(this, c1, c2, colls);
};
G__8518.cljs$lang$maxFixedArity = 2;
G__8518.cljs$lang$applyTo = (function (arglist__8519){
var c1 = cljs.core.first(arglist__8519);
var c2 = cljs.core.first(cljs.core.next(arglist__8519));
var colls = cljs.core.rest(cljs.core.next(arglist__8519));
return G__8518__delegate.call(this, c1, c2, colls);
});
return G__8518;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__8515.call(this,c1,c2);
default:
return interleave__8516.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__8516.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__8522 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8520 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8520))
{var coll__8521 = temp__3695__auto____8520;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8521),cat.call(null,cljs.core.rest.call(null,coll__8521),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__8522.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__8523 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__8524 = (function() { 
var G__8526__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8526 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8526__delegate.call(this, f, coll, colls);
};
G__8526.cljs$lang$maxFixedArity = 2;
G__8526.cljs$lang$applyTo = (function (arglist__8527){
var f = cljs.core.first(arglist__8527);
var coll = cljs.core.first(cljs.core.next(arglist__8527));
var colls = cljs.core.rest(cljs.core.next(arglist__8527));
return G__8526__delegate.call(this, f, coll, colls);
});
return G__8526;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__8523.call(this,f,coll);
default:
return mapcat__8524.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__8524.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8528 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8528))
{var s__8529 = temp__3698__auto____8528;

var f__8530 = cljs.core.first.call(null,s__8529);
var r__8531 = cljs.core.rest.call(null,s__8529);

if(cljs.core.truth_(pred.call(null,f__8530)))
{return cljs.core.cons.call(null,f__8530,filter.call(null,pred,r__8531));
} else
{return filter.call(null,pred,r__8531);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__8533 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__8533.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8532_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__8532_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__8540 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__8541 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8534 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8534))
{var s__8535 = temp__3698__auto____8534;

var p__8536 = cljs.core.take.call(null,n,s__8535);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8536))))
{return cljs.core.cons.call(null,p__8536,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8535)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__8542 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8537 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8537))
{var s__8538 = temp__3698__auto____8537;

var p__8539 = cljs.core.take.call(null,n,s__8538);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__8539))))
{return cljs.core.cons.call(null,p__8539,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8538)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8539,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__8540.call(this,n,step);
case  3 :
return partition__8541.call(this,n,step,pad);
case  4 :
return partition__8542.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__8548 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__8549 = (function (m,ks,not_found){
var sentinel__8544 = cljs.core.lookup_sentinel;
var m__8545 = m;
var ks__8546 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__8546))
{var m__8547 = cljs.core.get.call(null,m__8545,cljs.core.first.call(null,ks__8546),sentinel__8544);

if(cljs.core.truth_((sentinel__8544 === m__8547)))
{return not_found;
} else
{{
var G__8551 = sentinel__8544;
var G__8552 = m__8547;
var G__8553 = cljs.core.next.call(null,ks__8546);
sentinel__8544 = G__8551;
m__8545 = G__8552;
ks__8546 = G__8553;
continue;
}
}
} else
{return m__8545;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__8548.call(this,m,ks);
case  3 :
return get_in__8549.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__8554,v){
var vec__8555__8556 = p__8554;
var k__8557 = cljs.core.nth.call(null,vec__8555__8556,0,null);
var ks__8558 = cljs.core.nthnext.call(null,vec__8555__8556,1);

if(cljs.core.truth_(ks__8558))
{return cljs.core.assoc.call(null,m,k__8557,assoc_in.call(null,cljs.core.get.call(null,m,k__8557),ks__8558,v));
} else
{return cljs.core.assoc.call(null,m,k__8557,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__8559,f,args){
var vec__8560__8561 = p__8559;
var k__8562 = cljs.core.nth.call(null,vec__8560__8561,0,null);
var ks__8563 = cljs.core.nthnext.call(null,vec__8560__8561,1);

if(cljs.core.truth_(ks__8563))
{return cljs.core.assoc.call(null,m,k__8562,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__8562),ks__8563,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8562,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__8562),args));
}
};
var update_in = function (m,p__8559,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8559, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8564){
var m = cljs.core.first(arglist__8564);
var p__8559 = cljs.core.first(cljs.core.next(arglist__8564));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8564)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8564)));
return update_in__delegate.call(this, m, p__8559, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8565 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8590 = null;
var G__8590__8591 = (function (coll,k){
var this__8566 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8590__8592 = (function (coll,k,not_found){
var this__8567 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8590 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8590__8591.call(this,coll,k);
case  3 :
return G__8590__8592.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8590;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8568 = this;
var new_array__8569 = cljs.core.aclone.call(null,this__8568.array);

(new_array__8569[k] = v);
return (new cljs.core.Vector(this__8568.meta,new_array__8569));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8570 = this;
var new_array__8571 = cljs.core.aclone.call(null,this__8570.array);

new_array__8571.push(o);
return (new cljs.core.Vector(this__8570.meta,new_array__8571));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8594 = null;
var G__8594__8595 = (function (v,f){
var this__8572 = this;
return cljs.core.ci_reduce.call(null,this__8572.array,f);
});
var G__8594__8596 = (function (v,f,start){
var this__8573 = this;
return cljs.core.ci_reduce.call(null,this__8573.array,f,start);
});
G__8594 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__8594__8595.call(this,v,f);
case  3 :
return G__8594__8596.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8594;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8574 = this;
if(cljs.core.truth_((this__8574.array.length > 0)))
{var vector_seq__8575 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__8574.array.length)))
{return cljs.core.cons.call(null,(this__8574.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__8575.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8576 = this;
return this__8576.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8577 = this;
var count__8578 = this__8577.array.length;

if(cljs.core.truth_((count__8578 > 0)))
{return (this__8577.array[(count__8578 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8579 = this;
if(cljs.core.truth_((this__8579.array.length > 0)))
{var new_array__8580 = cljs.core.aclone.call(null,this__8579.array);

new_array__8580.pop();
return (new cljs.core.Vector(this__8579.meta,new_array__8580));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__8581 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8582 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8583 = this;
return (new cljs.core.Vector(meta,this__8583.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8584 = this;
return this__8584.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8598 = null;
var G__8598__8599 = (function (coll,n){
var this__8585 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8586 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8586))
{return (n < this__8585.array.length);
} else
{return and__3546__auto____8586;
}
})()))
{return (this__8585.array[n]);
} else
{return null;
}
});
var G__8598__8600 = (function (coll,n,not_found){
var this__8587 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8588 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____8588))
{return (n < this__8587.array.length);
} else
{return and__3546__auto____8588;
}
})()))
{return (this__8587.array[n]);
} else
{return not_found;
}
});
G__8598 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8598__8599.call(this,coll,n);
case  3 :
return G__8598__8600.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8598;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8589 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8589.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__8602 = null;
var G__8602__8603 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__8602__8604 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__8602 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__8602__8603.call(this,_,k);
case  3 :
return G__8602__8604.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8602;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__8606){
var args = cljs.core.seq( arglist__8606 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8607 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8627 = null;
var G__8627__8628 = (function (coll,k){
var this__8608 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__8627__8629 = (function (coll,k,not_found){
var this__8609 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__8627 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8627__8628.call(this,coll,k);
case  3 :
return G__8627__8629.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8627;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__8610 = this;
var v_pos__8611 = (this__8610.start + key);

return (new cljs.core.Subvec(this__8610.meta,cljs.core._assoc.call(null,this__8610.v,v_pos__8611,val),this__8610.start,((this__8610.end > (v_pos__8611 + 1)) ? this__8610.end : (v_pos__8611 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8612 = this;
return (new cljs.core.Subvec(this__8612.meta,cljs.core._assoc_n.call(null,this__8612.v,this__8612.end,o),this__8612.start,(this__8612.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8631 = null;
var G__8631__8632 = (function (coll,f){
var this__8613 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__8631__8633 = (function (coll,f,start){
var this__8614 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__8631 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8631__8632.call(this,coll,f);
case  3 :
return G__8631__8633.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8631;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8615 = this;
var subvec_seq__8616 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__8615.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8615.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__8616.call(null,this__8615.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8617 = this;
return (this__8617.end - this__8617.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8618 = this;
return cljs.core._nth.call(null,this__8618.v,(this__8618.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8619 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__8619.start,this__8619.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8619.meta,this__8619.v,this__8619.start,(this__8619.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__8620 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8621 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8622 = this;
return (new cljs.core.Subvec(meta,this__8622.v,this__8622.start,this__8622.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8623 = this;
return this__8623.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8635 = null;
var G__8635__8636 = (function (coll,n){
var this__8624 = this;
return cljs.core._nth.call(null,this__8624.v,(this__8624.start + n));
});
var G__8635__8637 = (function (coll,n,not_found){
var this__8625 = this;
return cljs.core._nth.call(null,this__8625.v,(this__8625.start + n),not_found);
});
G__8635 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8635__8636.call(this,coll,n);
case  3 :
return G__8635__8637.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8635;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8626 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8626.meta);
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__8639 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__8640 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__8639.call(this,v,start);
case  3 :
return subvec__8640.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;
cljs.core.Subvec.prototype.call = (function() {
var G__8642 = null;
var G__8642__8643 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__8642__8644 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__8642 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__8642__8643.call(this,_,k);
case  3 :
return G__8642__8644.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8642;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8646 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8647 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8648 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8649 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8649.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8650 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8651 = this;
return cljs.core._first.call(null,this__8651.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8652 = this;
var temp__3695__auto____8653 = cljs.core.next.call(null,this__8652.front);

if(cljs.core.truth_(temp__3695__auto____8653))
{var f1__8654 = temp__3695__auto____8653;

return (new cljs.core.PersistentQueueSeq(this__8652.meta,f1__8654,this__8652.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__8652.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8652.meta,this__8652.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8655 = this;
return this__8655.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8656 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8656.front,this__8656.rear));
});

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8657 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8658 = this;
if(cljs.core.truth_(this__8658.front))
{return (new cljs.core.PersistentQueue(this__8658.meta,(this__8658.count + 1),this__8658.front,cljs.core.conj.call(null,(function (){var or__3548__auto____8659 = this__8658.rear;

if(cljs.core.truth_(or__3548__auto____8659))
{return or__3548__auto____8659;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__8658.meta,(this__8658.count + 1),cljs.core.conj.call(null,this__8658.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8660 = this;
var rear__8661 = cljs.core.seq.call(null,this__8660.rear);

if(cljs.core.truth_((function (){var or__3548__auto____8662 = this__8660.front;

if(cljs.core.truth_(or__3548__auto____8662))
{return or__3548__auto____8662;
} else
{return rear__8661;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8660.front,cljs.core.seq.call(null,rear__8661)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8663 = this;
return this__8663.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8664 = this;
return cljs.core._first.call(null,this__8664.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8665 = this;
if(cljs.core.truth_(this__8665.front))
{var temp__3695__auto____8666 = cljs.core.next.call(null,this__8665.front);

if(cljs.core.truth_(temp__3695__auto____8666))
{var f1__8667 = temp__3695__auto____8666;

return (new cljs.core.PersistentQueue(this__8665.meta,(this__8665.count - 1),f1__8667,this__8665.rear));
} else
{return (new cljs.core.PersistentQueue(this__8665.meta,(this__8665.count - 1),cljs.core.seq.call(null,this__8665.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8668 = this;
return cljs.core.first.call(null,this__8668.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8669 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8670 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8671 = this;
return (new cljs.core.PersistentQueue(meta,this__8671.count,this__8671.front,this__8671.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8672 = this;
return this__8672.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8673 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__8674 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__8675 = array.length;

var i__8676 = 0;

while(true){
if(cljs.core.truth_((i__8676 < len__8675)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__8676]))))
{return i__8676;
} else
{{
var G__8677 = (i__8676 + incr);
i__8676 = G__8677;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___8679 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___8680 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____8678 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8678))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8678;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___8679.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___8680.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8683 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8702 = null;
var G__8702__8703 = (function (coll,k){
var this__8684 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8702__8704 = (function (coll,k,not_found){
var this__8685 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8685.strobj,(this__8685.strobj[k]),not_found);
});
G__8702 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8702__8703.call(this,coll,k);
case  3 :
return G__8702__8704.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8702;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8686 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__8687 = goog.object.clone.call(null,this__8686.strobj);
var overwrite_QMARK___8688 = new_strobj__8687.hasOwnProperty(k);

(new_strobj__8687[k] = v);
if(cljs.core.truth_(overwrite_QMARK___8688))
{return (new cljs.core.ObjMap(this__8686.meta,this__8686.keys,new_strobj__8687));
} else
{var new_keys__8689 = cljs.core.aclone.call(null,this__8686.keys);

new_keys__8689.push(k);
return (new cljs.core.ObjMap(this__8686.meta,new_keys__8689,new_strobj__8687));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__8686.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8690 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__8690.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8691 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8692 = this;
if(cljs.core.truth_((this__8692.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__8682_SHARP_){
return cljs.core.vector.call(null,p1__8682_SHARP_,(this__8692.strobj[p1__8682_SHARP_]));
}),this__8692.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8693 = this;
return this__8693.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8694 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8695 = this;
return (new cljs.core.ObjMap(meta,this__8695.keys,this__8695.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8696 = this;
return this__8696.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8697 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8697.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8698 = this;
if(cljs.core.truth_((function (){var and__3546__auto____8699 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____8699))
{return this__8698.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____8699;
}
})()))
{var new_keys__8700 = cljs.core.aclone.call(null,this__8698.keys);
var new_strobj__8701 = goog.object.clone.call(null,this__8698.strobj);

new_keys__8700.splice(cljs.core.scan_array.call(null,1,k,new_keys__8700),1);
cljs.core.js_delete.call(null,new_strobj__8701,k);
return (new cljs.core.ObjMap(this__8698.meta,new_keys__8700,new_strobj__8701));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8707 = null;
var G__8707__8708 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__8707__8709 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__8707 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__8707__8708.call(this,_,k);
case  3 :
return G__8707__8709.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8707;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8711 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8741 = null;
var G__8741__8742 = (function (coll,k){
var this__8712 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__8741__8743 = (function (coll,k,not_found){
var this__8713 = this;
var bucket__8714 = (this__8713.hashobj[cljs.core.hash.call(null,k)]);
var i__8715 = (cljs.core.truth_(bucket__8714)?cljs.core.scan_array.call(null,2,k,bucket__8714):null);

if(cljs.core.truth_(i__8715))
{return (bucket__8714[(i__8715 + 1)]);
} else
{return not_found;
}
});
G__8741 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__8741__8742.call(this,coll,k);
case  3 :
return G__8741__8743.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8741;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__8716 = this;
var h__8717 = cljs.core.hash.call(null,k);
var bucket__8718 = (this__8716.hashobj[h__8717]);

if(cljs.core.truth_(bucket__8718))
{var new_bucket__8719 = cljs.core.aclone.call(null,bucket__8718);
var new_hashobj__8720 = goog.object.clone.call(null,this__8716.hashobj);

(new_hashobj__8720[h__8717] = new_bucket__8719);
var temp__3695__auto____8721 = cljs.core.scan_array.call(null,2,k,new_bucket__8719);

if(cljs.core.truth_(temp__3695__auto____8721))
{var i__8722 = temp__3695__auto____8721;

(new_bucket__8719[(i__8722 + 1)] = v);
return (new cljs.core.HashMap(this__8716.meta,this__8716.count,new_hashobj__8720));
} else
{new_bucket__8719.push(k,v);
return (new cljs.core.HashMap(this__8716.meta,(this__8716.count + 1),new_hashobj__8720));
}
} else
{var new_hashobj__8723 = goog.object.clone.call(null,this__8716.hashobj);

(new_hashobj__8723[h__8717] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__8716.meta,(this__8716.count + 1),new_hashobj__8723));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__8724 = this;
var bucket__8725 = (this__8724.hashobj[cljs.core.hash.call(null,k)]);
var i__8726 = (cljs.core.truth_(bucket__8725)?cljs.core.scan_array.call(null,2,k,bucket__8725):null);

if(cljs.core.truth_(i__8726))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__8727 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8728 = this;
if(cljs.core.truth_((this__8728.count > 0)))
{var hashes__8729 = cljs.core.js_keys.call(null,this__8728.hashobj);

return cljs.core.mapcat.call(null,(function (p1__8706_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8728.hashobj[p1__8706_SHARP_])));
}),hashes__8729);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8730 = this;
return this__8730.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8731 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8732 = this;
return (new cljs.core.HashMap(meta,this__8732.count,this__8732.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8733 = this;
return this__8733.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8734 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8734.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__8735 = this;
var h__8736 = cljs.core.hash.call(null,k);
var bucket__8737 = (this__8735.hashobj[h__8736]);
var i__8738 = (cljs.core.truth_(bucket__8737)?cljs.core.scan_array.call(null,2,k,bucket__8737):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__8738)))
{return coll;
} else
{var new_hashobj__8739 = goog.object.clone.call(null,this__8735.hashobj);

if(cljs.core.truth_((3 > bucket__8737.length)))
{cljs.core.js_delete.call(null,new_hashobj__8739,h__8736);
} else
{var new_bucket__8740 = cljs.core.aclone.call(null,bucket__8737);

new_bucket__8740.splice(i__8738,2);
(new_hashobj__8739[h__8736] = new_bucket__8740);
}
return (new cljs.core.HashMap(this__8735.meta,(this__8735.count - 1),new_hashobj__8739));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8745 = ks.length;

var i__8746 = 0;
var out__8747 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__8746 < len__8745)))
{{
var G__8748 = (i__8746 + 1);
var G__8749 = cljs.core.assoc.call(null,out__8747,(ks[i__8746]),(vs[i__8746]));
i__8746 = G__8748;
out__8747 = G__8749;
continue;
}
} else
{return out__8747;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8750 = null;
var G__8750__8751 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__8750__8752 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__8750 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__8750__8751.call(this,_,k);
case  3 :
return G__8750__8752.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8750;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__8754 = cljs.core.seq.call(null,keyvals);
var out__8755 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__8754))
{{
var G__8756 = cljs.core.nnext.call(null,in$__8754);
var G__8757 = cljs.core.assoc.call(null,out__8755,cljs.core.first.call(null,in$__8754),cljs.core.second.call(null,in$__8754));
in$__8754 = G__8756;
out__8755 = G__8757;
continue;
}
} else
{return out__8755;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__8758){
var keyvals = cljs.core.seq( arglist__8758 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__8759_SHARP_,p2__8760_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____8761 = p1__8759_SHARP_;

if(cljs.core.truth_(or__3548__auto____8761))
{return or__3548__auto____8761;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__8760_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__8762){
var maps = cljs.core.seq( arglist__8762 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__8765 = (function (m,e){
var k__8763 = cljs.core.first.call(null,e);
var v__8764 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__8763)))
{return cljs.core.assoc.call(null,m,k__8763,f.call(null,cljs.core.get.call(null,m,k__8763),v__8764));
} else
{return cljs.core.assoc.call(null,m,k__8763,v__8764);
}
});
var merge2__8767 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__8765,(function (){var or__3548__auto____8766 = m1;

if(cljs.core.truth_(or__3548__auto____8766))
{return or__3548__auto____8766;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__8767,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__8768){
var f = cljs.core.first(arglist__8768);
var maps = cljs.core.rest(arglist__8768);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__8770 = cljs.core.ObjMap.fromObject([],{});
var keys__8771 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__8771))
{var key__8772 = cljs.core.first.call(null,keys__8771);
var entry__8773 = cljs.core.get.call(null,map,key__8772,"﷐'clojure.core/not-found");

{
var G__8774 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__8773,"﷐'clojure.core/not-found"))?cljs.core.assoc.call(null,ret__8770,key__8772,entry__8773):ret__8770);
var G__8775 = cljs.core.next.call(null,keys__8771);
ret__8770 = G__8774;
keys__8771 = G__8775;
continue;
}
} else
{return ret__8770;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8776 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__8789 = null;
var G__8789__8790 = (function (coll,v){
var this__8777 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__8789__8791 = (function (coll,v,not_found){
var this__8778 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8778.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__8789 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__8789__8790.call(this,coll,v);
case  3 :
return G__8789__8791.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8789;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8779 = this;
return (new cljs.core.Set(this__8779.meta,cljs.core.assoc.call(null,this__8779.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8780 = this;
return cljs.core.keys.call(null,this__8780.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__8781 = this;
return (new cljs.core.Set(this__8781.meta,cljs.core.dissoc.call(null,this__8781.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8782 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8783 = this;
var and__3546__auto____8784 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____8784))
{var and__3546__auto____8785 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____8785))
{return cljs.core.every_QMARK_.call(null,(function (p1__8769_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8769_SHARP_);
}),other);
} else
{return and__3546__auto____8785;
}
} else
{return and__3546__auto____8784;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8786 = this;
return (new cljs.core.Set(meta,this__8786.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8787 = this;
return this__8787.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8788 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__8788.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__8793 = null;
var G__8793__8794 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__8793__8795 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__8793 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__8793__8794.call(this,_,k);
case  3 :
return G__8793__8795.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8793;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__8798 = cljs.core.seq.call(null,coll);
var out__8799 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__8798))))
{{
var G__8800 = cljs.core.rest.call(null,in$__8798);
var G__8801 = cljs.core.conj.call(null,out__8799,cljs.core.first.call(null,in$__8798));
in$__8798 = G__8800;
out__8799 = G__8801;
continue;
}
} else
{return out__8799;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__8802 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____8803 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____8803))
{var e__8804 = temp__3695__auto____8803;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__8804));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__8802,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__8797_SHARP_){
var temp__3695__auto____8805 = cljs.core.find.call(null,smap,p1__8797_SHARP_);

if(cljs.core.truth_(temp__3695__auto____8805))
{var e__8806 = temp__3695__auto____8805;

return cljs.core.second.call(null,e__8806);
} else
{return p1__8797_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__8814 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__8807,seen){
while(true){
var vec__8808__8809 = p__8807;
var f__8810 = cljs.core.nth.call(null,vec__8808__8809,0,null);
var xs__8811 = vec__8808__8809;

var temp__3698__auto____8812 = cljs.core.seq.call(null,xs__8811);

if(cljs.core.truth_(temp__3698__auto____8812))
{var s__8813 = temp__3698__auto____8812;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__8810)))
{{
var G__8815 = cljs.core.rest.call(null,s__8813);
var G__8816 = seen;
p__8807 = G__8815;
seen = G__8816;
continue;
}
} else
{return cljs.core.cons.call(null,f__8810,step.call(null,cljs.core.rest.call(null,s__8813),cljs.core.conj.call(null,seen,f__8810)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__8814.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__8817 = cljs.core.Vector.fromArray([]);
var s__8818 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__8818)))
{{
var G__8819 = cljs.core.conj.call(null,ret__8817,cljs.core.first.call(null,s__8818));
var G__8820 = cljs.core.next.call(null,s__8818);
ret__8817 = G__8819;
s__8818 = G__8820;
continue;
}
} else
{return cljs.core.seq.call(null,ret__8817);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____8821 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8821))
{return or__3548__auto____8821;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8822 = x.lastIndexOf("/");

if(cljs.core.truth_((i__8822 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__8822 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____8823 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____8823))
{return or__3548__auto____8823;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__8824 = x.lastIndexOf("/");

if(cljs.core.truth_((i__8824 > -1)))
{return cljs.core.subs.call(null,x,2,i__8824);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__8827 = cljs.core.ObjMap.fromObject([],{});
var ks__8828 = cljs.core.seq.call(null,keys);
var vs__8829 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8830 = ks__8828;

if(cljs.core.truth_(and__3546__auto____8830))
{return vs__8829;
} else
{return and__3546__auto____8830;
}
})()))
{{
var G__8831 = cljs.core.assoc.call(null,map__8827,cljs.core.first.call(null,ks__8828),cljs.core.first.call(null,vs__8829));
var G__8832 = cljs.core.next.call(null,ks__8828);
var G__8833 = cljs.core.next.call(null,vs__8829);
map__8827 = G__8831;
ks__8828 = G__8832;
vs__8829 = G__8833;
continue;
}
} else
{return map__8827;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__8836 = (function (k,x){
return x;
});
var max_key__8837 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__8838 = (function() { 
var G__8840__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8825_SHARP_,p2__8826_SHARP_){
return max_key.call(null,k,p1__8825_SHARP_,p2__8826_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__8840 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8840__delegate.call(this, k, x, y, more);
};
G__8840.cljs$lang$maxFixedArity = 3;
G__8840.cljs$lang$applyTo = (function (arglist__8841){
var k = cljs.core.first(arglist__8841);
var x = cljs.core.first(cljs.core.next(arglist__8841));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8841)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8841)));
return G__8840__delegate.call(this, k, x, y, more);
});
return G__8840;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__8836.call(this,k,x);
case  3 :
return max_key__8837.call(this,k,x,y);
default:
return max_key__8838.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__8838.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__8842 = (function (k,x){
return x;
});
var min_key__8843 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__8844 = (function() { 
var G__8846__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__8834_SHARP_,p2__8835_SHARP_){
return min_key.call(null,k,p1__8834_SHARP_,p2__8835_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__8846 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8846__delegate.call(this, k, x, y, more);
};
G__8846.cljs$lang$maxFixedArity = 3;
G__8846.cljs$lang$applyTo = (function (arglist__8847){
var k = cljs.core.first(arglist__8847);
var x = cljs.core.first(cljs.core.next(arglist__8847));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8847)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8847)));
return G__8846__delegate.call(this, k, x, y, more);
});
return G__8846;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__8842.call(this,k,x);
case  3 :
return min_key__8843.call(this,k,x,y);
default:
return min_key__8844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__8844.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__8850 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__8851 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8848 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8848))
{var s__8849 = temp__3698__auto____8848;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__8849),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__8849)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__8850.call(this,n,step);
case  3 :
return partition_all__8851.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8853 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8853))
{var s__8854 = temp__3698__auto____8853;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__8854))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8854),take_while.call(null,pred,cljs.core.rest.call(null,s__8854)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__8855 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__8856 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8872 = null;
var G__8872__8873 = (function (rng,f){
var this__8857 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__8872__8874 = (function (rng,f,s){
var this__8858 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__8872 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__8872__8873.call(this,rng,f);
case  3 :
return G__8872__8874.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8872;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__8859 = this;
var comp__8860 = (cljs.core.truth_((this__8859.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__8860.call(null,this__8859.start,this__8859.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__8861 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__8861.end - this__8861.start) / this__8861.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__8862 = this;
return this__8862.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__8863 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__8863.meta,(this__8863.start + this__8863.step),this__8863.end,this__8863.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__8864 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__8865 = this;
return (new cljs.core.Range(meta,this__8865.start,this__8865.end,this__8865.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__8866 = this;
return this__8866.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8876 = null;
var G__8876__8877 = (function (rng,n){
var this__8867 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8867.start + (n * this__8867.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8868 = (this__8867.start > this__8867.end);

if(cljs.core.truth_(and__3546__auto____8868))
{return cljs.core._EQ_.call(null,this__8867.step,0);
} else
{return and__3546__auto____8868;
}
})()))
{return this__8867.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__8876__8878 = (function (rng,n,not_found){
var this__8869 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__8869.start + (n * this__8869.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____8870 = (this__8869.start > this__8869.end);

if(cljs.core.truth_(and__3546__auto____8870))
{return cljs.core._EQ_.call(null,this__8869.step,0);
} else
{return and__3546__auto____8870;
}
})()))
{return this__8869.start;
} else
{return not_found;
}
}
});
G__8876 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__8876__8877.call(this,rng,n);
case  3 :
return G__8876__8878.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8876;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__8871 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8871.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__8880 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__8881 = (function (end){
return range.call(null,0,end,1);
});
var range__8882 = (function (start,end){
return range.call(null,start,end,1);
});
var range__8883 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__8880.call(this);
case  1 :
return range__8881.call(this,start);
case  2 :
return range__8882.call(this,start,end);
case  3 :
return range__8883.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8885 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8885))
{var s__8886 = temp__3698__auto____8885;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8886),take_nth.call(null,n,cljs.core.drop.call(null,n,s__8886)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8888 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8888))
{var s__8889 = temp__3698__auto____8888;

var fst__8890 = cljs.core.first.call(null,s__8889);
var fv__8891 = f.call(null,fst__8890);
var run__8892 = cljs.core.cons.call(null,fst__8890,cljs.core.take_while.call(null,(function (p1__8887_SHARP_){
return cljs.core._EQ_.call(null,fv__8891,f.call(null,p1__8887_SHARP_));
}),cljs.core.next.call(null,s__8889)));

return cljs.core.cons.call(null,run__8892,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__8892),s__8889))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__8907 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____8903 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8903))
{var s__8904 = temp__3695__auto____8903;

return reductions.call(null,f,cljs.core.first.call(null,s__8904),cljs.core.rest.call(null,s__8904));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__8908 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8905 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8905))
{var s__8906 = temp__3698__auto____8905;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__8906)),cljs.core.rest.call(null,s__8906));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__8907.call(this,f,init);
case  3 :
return reductions__8908.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__8911 = (function (f){
return (function() {
var G__8916 = null;
var G__8916__8917 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__8916__8918 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__8916__8919 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__8916__8920 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__8916__8921 = (function() { 
var G__8923__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__8923 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8923__delegate.call(this, x, y, z, args);
};
G__8923.cljs$lang$maxFixedArity = 3;
G__8923.cljs$lang$applyTo = (function (arglist__8924){
var x = cljs.core.first(arglist__8924);
var y = cljs.core.first(cljs.core.next(arglist__8924));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8924)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8924)));
return G__8923__delegate.call(this, x, y, z, args);
});
return G__8923;
})()
;
G__8916 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8916__8917.call(this);
case  1 :
return G__8916__8918.call(this,x);
case  2 :
return G__8916__8919.call(this,x,y);
case  3 :
return G__8916__8920.call(this,x,y,z);
default:
return G__8916__8921.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8916.cljs$lang$maxFixedArity = 3;
G__8916.cljs$lang$applyTo = G__8916__8921.cljs$lang$applyTo;
return G__8916;
})()
});
var juxt__8912 = (function (f,g){
return (function() {
var G__8925 = null;
var G__8925__8926 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__8925__8927 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__8925__8928 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__8925__8929 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__8925__8930 = (function() { 
var G__8932__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8932 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8932__delegate.call(this, x, y, z, args);
};
G__8932.cljs$lang$maxFixedArity = 3;
G__8932.cljs$lang$applyTo = (function (arglist__8933){
var x = cljs.core.first(arglist__8933);
var y = cljs.core.first(cljs.core.next(arglist__8933));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8933)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8933)));
return G__8932__delegate.call(this, x, y, z, args);
});
return G__8932;
})()
;
G__8925 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8925__8926.call(this);
case  1 :
return G__8925__8927.call(this,x);
case  2 :
return G__8925__8928.call(this,x,y);
case  3 :
return G__8925__8929.call(this,x,y,z);
default:
return G__8925__8930.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8925.cljs$lang$maxFixedArity = 3;
G__8925.cljs$lang$applyTo = G__8925__8930.cljs$lang$applyTo;
return G__8925;
})()
});
var juxt__8913 = (function (f,g,h){
return (function() {
var G__8934 = null;
var G__8934__8935 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__8934__8936 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__8934__8937 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__8934__8938 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__8934__8939 = (function() { 
var G__8941__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__8941 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8941__delegate.call(this, x, y, z, args);
};
G__8941.cljs$lang$maxFixedArity = 3;
G__8941.cljs$lang$applyTo = (function (arglist__8942){
var x = cljs.core.first(arglist__8942);
var y = cljs.core.first(cljs.core.next(arglist__8942));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8942)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8942)));
return G__8941__delegate.call(this, x, y, z, args);
});
return G__8941;
})()
;
G__8934 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8934__8935.call(this);
case  1 :
return G__8934__8936.call(this,x);
case  2 :
return G__8934__8937.call(this,x,y);
case  3 :
return G__8934__8938.call(this,x,y,z);
default:
return G__8934__8939.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8934.cljs$lang$maxFixedArity = 3;
G__8934.cljs$lang$applyTo = G__8934__8939.cljs$lang$applyTo;
return G__8934;
})()
});
var juxt__8914 = (function() { 
var G__8943__delegate = function (f,g,h,fs){
var fs__8910 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__8944 = null;
var G__8944__8945 = (function (){
return cljs.core.reduce.call(null,(function (p1__8893_SHARP_,p2__8894_SHARP_){
return cljs.core.conj.call(null,p1__8893_SHARP_,p2__8894_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__8910);
});
var G__8944__8946 = (function (x){
return cljs.core.reduce.call(null,(function (p1__8895_SHARP_,p2__8896_SHARP_){
return cljs.core.conj.call(null,p1__8895_SHARP_,p2__8896_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__8910);
});
var G__8944__8947 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__8897_SHARP_,p2__8898_SHARP_){
return cljs.core.conj.call(null,p1__8897_SHARP_,p2__8898_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__8910);
});
var G__8944__8948 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__8899_SHARP_,p2__8900_SHARP_){
return cljs.core.conj.call(null,p1__8899_SHARP_,p2__8900_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__8910);
});
var G__8944__8949 = (function() { 
var G__8951__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__8901_SHARP_,p2__8902_SHARP_){
return cljs.core.conj.call(null,p1__8901_SHARP_,cljs.core.apply.call(null,p2__8902_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__8910);
};
var G__8951 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8951__delegate.call(this, x, y, z, args);
};
G__8951.cljs$lang$maxFixedArity = 3;
G__8951.cljs$lang$applyTo = (function (arglist__8952){
var x = cljs.core.first(arglist__8952);
var y = cljs.core.first(cljs.core.next(arglist__8952));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8952)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8952)));
return G__8951__delegate.call(this, x, y, z, args);
});
return G__8951;
})()
;
G__8944 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8944__8945.call(this);
case  1 :
return G__8944__8946.call(this,x);
case  2 :
return G__8944__8947.call(this,x,y);
case  3 :
return G__8944__8948.call(this,x,y,z);
default:
return G__8944__8949.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8944.cljs$lang$maxFixedArity = 3;
G__8944.cljs$lang$applyTo = G__8944__8949.cljs$lang$applyTo;
return G__8944;
})()
};
var G__8943 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8943__delegate.call(this, f, g, h, fs);
};
G__8943.cljs$lang$maxFixedArity = 3;
G__8943.cljs$lang$applyTo = (function (arglist__8953){
var f = cljs.core.first(arglist__8953);
var g = cljs.core.first(cljs.core.next(arglist__8953));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8953)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8953)));
return G__8943__delegate.call(this, f, g, h, fs);
});
return G__8943;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__8911.call(this,f);
case  2 :
return juxt__8912.call(this,f,g);
case  3 :
return juxt__8913.call(this,f,g,h);
default:
return juxt__8914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__8914.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__8955 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__8958 = cljs.core.next.call(null,coll);
coll = G__8958;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__8956 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8954 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8954))
{return (n > 0);
} else
{return and__3546__auto____8954;
}
})()))
{{
var G__8959 = (n - 1);
var G__8960 = cljs.core.next.call(null,coll);
n = G__8959;
coll = G__8960;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__8955.call(this,n);
case  2 :
return dorun__8956.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__8961 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__8962 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__8961.call(this,n);
case  2 :
return doall__8962.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__8964 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__8964),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__8964),1)))
{return cljs.core.first.call(null,matches__8964);
} else
{return cljs.core.vec.call(null,matches__8964);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__8965 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__8965)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__8965),1)))
{return cljs.core.first.call(null,matches__8965);
} else
{return cljs.core.vec.call(null,matches__8965);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__8966 = cljs.core.re_find.call(null,re,s);
var match_idx__8967 = s.search(re);
var match_str__8968 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__8966))?cljs.core.first.call(null,match_data__8966):match_data__8966);
var post_match__8969 = cljs.core.subs.call(null,s,(match_idx__8967 + cljs.core.count.call(null,match_str__8968)));

if(cljs.core.truth_(match_data__8966))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__8966,re_seq.call(null,re,post_match__8969));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__8970_SHARP_){
return print_one.call(null,p1__8970_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____8971 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____8971))
{var and__3546__auto____8975 = (function (){var x__393__auto____8972 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____8973 = x__393__auto____8972;

if(cljs.core.truth_(and__3546__auto____8973))
{var and__3546__auto____8974 = x__393__auto____8972.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8974))
{return cljs.core.not.call(null,x__393__auto____8972.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8974;
}
} else
{return and__3546__auto____8973;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__393__auto____8972);
}
})();

if(cljs.core.truth_(and__3546__auto____8975))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____8975;
}
} else
{return and__3546__auto____8971;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__393__auto____8976 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____8977 = x__393__auto____8976;

if(cljs.core.truth_(and__3546__auto____8977))
{var and__3546__auto____8978 = x__393__auto____8976.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____8978))
{return cljs.core.not.call(null,x__393__auto____8976.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____8978;
}
} else
{return and__3546__auto____8977;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__393__auto____8976);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__8979 = cljs.core.first.call(null,objs);
var sb__8980 = (new goog.string.StringBuffer());

var G__8981__8982 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__8981__8982))
{var obj__8983 = cljs.core.first.call(null,G__8981__8982);
var G__8981__8984 = G__8981__8982;

while(true){
if(cljs.core.truth_((obj__8983 === first_obj__8979)))
{} else
{sb__8980.append(" ");
}
var G__8985__8986 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__8983,opts));

if(cljs.core.truth_(G__8985__8986))
{var string__8987 = cljs.core.first.call(null,G__8985__8986);
var G__8985__8988 = G__8985__8986;

while(true){
sb__8980.append(string__8987);
var temp__3698__auto____8989 = cljs.core.next.call(null,G__8985__8988);

if(cljs.core.truth_(temp__3698__auto____8989))
{var G__8985__8990 = temp__3698__auto____8989;

{
var G__8993 = cljs.core.first.call(null,G__8985__8990);
var G__8994 = G__8985__8990;
string__8987 = G__8993;
G__8985__8988 = G__8994;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____8991 = cljs.core.next.call(null,G__8981__8984);

if(cljs.core.truth_(temp__3698__auto____8991))
{var G__8981__8992 = temp__3698__auto____8991;

{
var G__8995 = cljs.core.first.call(null,G__8981__8992);
var G__8996 = G__8981__8992;
obj__8983 = G__8995;
G__8981__8984 = G__8996;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__8980);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__8997 = cljs.core.first.call(null,objs);

var G__8998__8999 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__8998__8999))
{var obj__9000 = cljs.core.first.call(null,G__8998__8999);
var G__8998__9001 = G__8998__8999;

while(true){
if(cljs.core.truth_((obj__9000 === first_obj__8997)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__9002__9003 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9000,opts));

if(cljs.core.truth_(G__9002__9003))
{var string__9004 = cljs.core.first.call(null,G__9002__9003);
var G__9002__9005 = G__9002__9003;

while(true){
cljs.core.string_print.call(null,string__9004);
var temp__3698__auto____9006 = cljs.core.next.call(null,G__9002__9005);

if(cljs.core.truth_(temp__3698__auto____9006))
{var G__9002__9007 = temp__3698__auto____9006;

{
var G__9010 = cljs.core.first.call(null,G__9002__9007);
var G__9011 = G__9002__9007;
string__9004 = G__9010;
G__9002__9005 = G__9011;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____9008 = cljs.core.next.call(null,G__8998__9001);

if(cljs.core.truth_(temp__3698__auto____9008))
{var G__8998__9009 = temp__3698__auto____9008;

{
var G__9012 = cljs.core.first.call(null,G__8998__9009);
var G__9013 = G__8998__9009;
obj__9000 = G__9012;
G__8998__9001 = G__9013;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__9014){
var objs = cljs.core.seq( arglist__9014 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__9015){
var objs = cljs.core.seq( arglist__9015 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__9016){
var objs = cljs.core.seq( arglist__9016 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__9017){
var objs = cljs.core.seq( arglist__9017 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__9018){
var objs = cljs.core.seq( arglist__9018 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__9019 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__9019,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____9020 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____9020))
{var nspc__9021 = temp__3698__auto____9020;

return cljs.core.str.call(null,nspc__9021,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____9022 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____9022))
{var nspc__9023 = temp__3698__auto____9022;

return cljs.core.str.call(null,nspc__9023,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__9024 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__9024,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__9025 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__9026 = this;
var G__9027__9028 = cljs.core.seq.call(null,this__9026.watches);

if(cljs.core.truth_(G__9027__9028))
{var G__9030__9032 = cljs.core.first.call(null,G__9027__9028);
var vec__9031__9033 = G__9030__9032;
var key__9034 = cljs.core.nth.call(null,vec__9031__9033,0,null);
var f__9035 = cljs.core.nth.call(null,vec__9031__9033,1,null);
var G__9027__9036 = G__9027__9028;

var G__9030__9037 = G__9030__9032;
var G__9027__9038 = G__9027__9036;

while(true){
var vec__9039__9040 = G__9030__9037;
var key__9041 = cljs.core.nth.call(null,vec__9039__9040,0,null);
var f__9042 = cljs.core.nth.call(null,vec__9039__9040,1,null);
var G__9027__9043 = G__9027__9038;

f__9042.call(null,key__9041,this$,oldval,newval);
var temp__3698__auto____9044 = cljs.core.next.call(null,G__9027__9043);

if(cljs.core.truth_(temp__3698__auto____9044))
{var G__9027__9045 = temp__3698__auto____9044;

{
var G__9052 = cljs.core.first.call(null,G__9027__9045);
var G__9053 = G__9027__9045;
G__9030__9037 = G__9052;
G__9027__9038 = G__9053;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__9046 = this;
return this$.watches = cljs.core.assoc.call(null,this__9046.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__9047 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9047.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__9048 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__9048.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__9049 = this;
return this__9049.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__9050 = this;
return this__9050.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__9051 = this;
return (o === other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__9060 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__9061 = (function() { 
var G__9063__delegate = function (x,p__9054){
var map__9055__9056 = p__9054;
var map__9055__9057 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9055__9056))?cljs.core.apply.call(null,cljs.core.hash_map,map__9055__9056):map__9055__9056);
var validator__9058 = cljs.core.get.call(null,map__9055__9057,"﷐'validator");
var meta__9059 = cljs.core.get.call(null,map__9055__9057,"﷐'meta");

return (new cljs.core.Atom(x,meta__9059,validator__9058,null));
};
var G__9063 = function (x,var_args){
var p__9054 = null;
if (goog.isDef(var_args)) {
  p__9054 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9063__delegate.call(this, x, p__9054);
};
G__9063.cljs$lang$maxFixedArity = 1;
G__9063.cljs$lang$applyTo = (function (arglist__9064){
var x = cljs.core.first(arglist__9064);
var p__9054 = cljs.core.rest(arglist__9064);
return G__9063__delegate.call(this, x, p__9054);
});
return G__9063;
})()
;
atom = function(x,var_args){
var p__9054 = var_args;
switch(arguments.length){
case  1 :
return atom__9060.call(this,x);
default:
return atom__9061.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__9061.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____9065 = a.validator;

if(cljs.core.truth_(temp__3698__auto____9065))
{var validate__9066 = temp__3698__auto____9065;

if(cljs.core.truth_(validate__9066.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3016))))));
}
} else
{}
var old_value__9067 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9067,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___9068 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___9069 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___9070 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___9071 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___9072 = (function() { 
var G__9074__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9074 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9074__delegate.call(this, a, f, x, y, z, more);
};
G__9074.cljs$lang$maxFixedArity = 5;
G__9074.cljs$lang$applyTo = (function (arglist__9075){
var a = cljs.core.first(arglist__9075);
var f = cljs.core.first(cljs.core.next(arglist__9075));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9075)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9075))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9075)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9075)))));
return G__9074__delegate.call(this, a, f, x, y, z, more);
});
return G__9074;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___9068.call(this,a,f);
case  3 :
return swap_BANG___9069.call(this,a,f,x);
case  4 :
return swap_BANG___9070.call(this,a,f,x,y);
case  5 :
return swap_BANG___9071.call(this,a,f,x,y,z);
default:
return swap_BANG___9072.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___9072.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9076){
var iref = cljs.core.first(arglist__9076);
var f = cljs.core.first(cljs.core.next(arglist__9076));
var args = cljs.core.rest(cljs.core.next(arglist__9076));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__9077 = (function (){
return gensym.call(null,"G__");
});
var gensym__9078 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__9077.call(this);
case  1 :
return gensym__9078.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__9080 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__9080.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__9081 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__9081.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__9081.state,this__9081.f);
}
return cljs.core.deref.call(null,this__9081.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__9082){
var body = cljs.core.seq( arglist__9082 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__9083__9084 = options;
var map__9083__9085 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9083__9084))?cljs.core.apply.call(null,cljs.core.hash_map,map__9083__9084):map__9083__9084);
var keywordize_keys__9086 = cljs.core.get.call(null,map__9083__9085,"﷐'keywordize-keys");
var keyfn__9087 = (cljs.core.truth_(keywordize_keys__9086)?cljs.core.keyword:cljs.core.str);
var f__9093 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__457__auto____9092 = (function iter__9088(s__9089){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9089__9090 = s__9089;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9089__9090)))
{var k__9091 = cljs.core.first.call(null,s__9089__9090);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__9087.call(null,k__9091),thisfn.call(null,(x[k__9091]))]),iter__9088.call(null,cljs.core.rest.call(null,s__9089__9090)));
} else
{return null;
}
break;
}
})));
});

return iter__457__auto____9092.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__9093.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9094){
var x = cljs.core.first(arglist__9094);
var options = cljs.core.rest(arglist__9094);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__9095 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__9099__delegate = function (args){
var temp__3695__auto____9096 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__9095),args);

if(cljs.core.truth_(temp__3695__auto____9096))
{var v__9097 = temp__3695__auto____9096;

return v__9097;
} else
{var ret__9098 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__9095,cljs.core.assoc,args,ret__9098);
return ret__9098;
}
};
var G__9099 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9099__delegate.call(this, args);
};
G__9099.cljs$lang$maxFixedArity = 0;
G__9099.cljs$lang$applyTo = (function (arglist__9100){
var args = cljs.core.seq( arglist__9100 );;
return G__9099__delegate.call(this, args);
});
return G__9099;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__9102 = (function (f){
while(true){
var ret__9101 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__9101)))
{{
var G__9105 = ret__9101;
f = G__9105;
continue;
}
} else
{return ret__9101;
}
break;
}
});
var trampoline__9103 = (function() { 
var G__9106__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9106 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9106__delegate.call(this, f, args);
};
G__9106.cljs$lang$maxFixedArity = 1;
G__9106.cljs$lang$applyTo = (function (arglist__9107){
var f = cljs.core.first(arglist__9107);
var args = cljs.core.rest(arglist__9107);
return G__9106__delegate.call(this, f, args);
});
return G__9106;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__9102.call(this,f);
default:
return trampoline__9103.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__9103.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9108 = (function (){
return rand.call(null,1);
});
var rand__9109 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9108.call(this);
case  1 :
return rand__9109.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__9111 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__9111,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__9111,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___9120 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___9121 = (function (h,child,parent){
var or__3548__auto____9112 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____9112))
{return or__3548__auto____9112;
} else
{var or__3548__auto____9113 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____9113))
{return or__3548__auto____9113;
} else
{var and__3546__auto____9114 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____9114))
{var and__3546__auto____9115 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____9115))
{var and__3546__auto____9116 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____9116))
{var ret__9117 = true;
var i__9118 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____9119 = cljs.core.not.call(null,ret__9117);

if(cljs.core.truth_(or__3548__auto____9119))
{return or__3548__auto____9119;
} else
{return cljs.core._EQ_.call(null,i__9118,cljs.core.count.call(null,parent));
}
})()))
{return ret__9117;
} else
{{
var G__9123 = isa_QMARK_.call(null,h,child.call(null,i__9118),parent.call(null,i__9118));
var G__9124 = (i__9118 + 1);
ret__9117 = G__9123;
i__9118 = G__9124;
continue;
}
}
break;
}
} else
{return and__3546__auto____9116;
}
} else
{return and__3546__auto____9115;
}
} else
{return and__3546__auto____9114;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___9120.call(this,h,child);
case  3 :
return isa_QMARK___9121.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__9125 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__9126 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__9125.call(this,h);
case  2 :
return parents__9126.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__9128 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__9129 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__9128.call(this,h);
case  2 :
return ancestors__9129.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__9131 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__9132 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__9131.call(this,h);
case  2 :
return descendants__9132.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__9142 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3308))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__9143 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3312))))));
}
var tp__9137 = "﷐'parents".call(null,h);
var td__9138 = "﷐'descendants".call(null,h);
var ta__9139 = "﷐'ancestors".call(null,h);
var tf__9140 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____9141 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__9137.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__9139.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__9139.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__9137,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__9140.call(null,"﷐'ancestors".call(null,h),tag,td__9138,parent,ta__9139),"﷐'descendants":tf__9140.call(null,"﷐'descendants".call(null,h),parent,ta__9139,tag,td__9138)});
})());

if(cljs.core.truth_(or__3548__auto____9141))
{return or__3548__auto____9141;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__9142.call(this,h,tag);
case  3 :
return derive__9143.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__9149 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__9150 = (function (h,tag,parent){
var parentMap__9145 = "﷐'parents".call(null,h);
var childsParents__9146 = (cljs.core.truth_(parentMap__9145.call(null,tag))?cljs.core.disj.call(null,parentMap__9145.call(null,tag),parent):cljs.core.set([]));
var newParents__9147 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9146))?cljs.core.assoc.call(null,parentMap__9145,tag,childsParents__9146):cljs.core.dissoc.call(null,parentMap__9145,tag));
var deriv_seq__9148 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9134_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9134_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9134_SHARP_),cljs.core.second.call(null,p1__9134_SHARP_)));
}),cljs.core.seq.call(null,newParents__9147)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__9145.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__9135_SHARP_,p2__9136_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9135_SHARP_,p2__9136_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9148));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__9149.call(this,h,tag);
case  3 :
return underive__9150.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__9152 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____9154 = (cljs.core.truth_((function (){var and__3546__auto____9153 = xprefs__9152;

if(cljs.core.truth_(and__3546__auto____9153))
{return xprefs__9152.call(null,y);
} else
{return and__3546__auto____9153;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____9154))
{return or__3548__auto____9154;
} else
{var or__3548__auto____9156 = (function (){var ps__9155 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__9155) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9155),prefer_table)))
{} else
{}
{
var G__9159 = cljs.core.rest.call(null,ps__9155);
ps__9155 = G__9159;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____9156))
{return or__3548__auto____9156;
} else
{var or__3548__auto____9158 = (function (){var ps__9157 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__9157) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9157),y,prefer_table)))
{} else
{}
{
var G__9160 = cljs.core.rest.call(null,ps__9157);
ps__9157 = G__9160;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____9158))
{return or__3548__auto____9158;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____9161 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____9161))
{return or__3548__auto____9161;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9170 = cljs.core.reduce.call(null,(function (be,p__9162){
var vec__9163__9164 = p__9162;
var k__9165 = cljs.core.nth.call(null,vec__9163__9164,0,null);
var ___9166 = cljs.core.nth.call(null,vec__9163__9164,1,null);
var e__9167 = vec__9163__9164;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9165)))
{var be2__9169 = (cljs.core.truth_((function (){var or__3548__auto____9168 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____9168))
{return or__3548__auto____9168;
} else
{return cljs.core.dominates.call(null,k__9165,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9167:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9169),k__9165,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__9165," and ",cljs.core.first.call(null,be2__9169),", and neither is preferred")));
}
return be2__9169;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__9170))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9170));
return cljs.core.second.call(null,best_entry__9170);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____9171 = mf;

if(cljs.core.truth_(and__3546__auto____9171))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____9171;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____9172 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9172))
{return or__3548__auto____9172;
} else
{var or__3548__auto____9173 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____9173))
{return or__3548__auto____9173;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____9174 = mf;

if(cljs.core.truth_(and__3546__auto____9174))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____9174;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____9175 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9175))
{return or__3548__auto____9175;
} else
{var or__3548__auto____9176 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____9176))
{return or__3548__auto____9176;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____9177 = mf;

if(cljs.core.truth_(and__3546__auto____9177))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____9177;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____9178 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9178))
{return or__3548__auto____9178;
} else
{var or__3548__auto____9179 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____9179))
{return or__3548__auto____9179;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____9180 = mf;

if(cljs.core.truth_(and__3546__auto____9180))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____9180;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____9181 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9181))
{return or__3548__auto____9181;
} else
{var or__3548__auto____9182 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____9182))
{return or__3548__auto____9182;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____9183 = mf;

if(cljs.core.truth_(and__3546__auto____9183))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____9183;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____9184 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9184))
{return or__3548__auto____9184;
} else
{var or__3548__auto____9185 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____9185))
{return or__3548__auto____9185;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____9186 = mf;

if(cljs.core.truth_(and__3546__auto____9186))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____9186;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____9187 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9187))
{return or__3548__auto____9187;
} else
{var or__3548__auto____9188 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____9188))
{return or__3548__auto____9188;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____9189 = mf;

if(cljs.core.truth_(and__3546__auto____9189))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____9189;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____9190 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9190))
{return or__3548__auto____9190;
} else
{var or__3548__auto____9191 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____9191))
{return or__3548__auto____9191;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____9192 = mf;

if(cljs.core.truth_(and__3546__auto____9192))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____9192;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____9193 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____9193))
{return or__3548__auto____9193;
} else
{var or__3548__auto____9194 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____9194))
{return or__3548__auto____9194;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__9195 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__9196 = cljs.core._get_method.call(null,mf,dispatch_val__9195);

if(cljs.core.truth_(target_fn__9196))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__9195)));
}
return cljs.core.apply.call(null,target_fn__9196,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__9197 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__9198 = this;
cljs.core.swap_BANG_.call(null,this__9198.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9198.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9198.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9198.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__9199 = this;
cljs.core.swap_BANG_.call(null,this__9199.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__9199.method_cache,this__9199.method_table,this__9199.cached_hierarchy,this__9199.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__9200 = this;
cljs.core.swap_BANG_.call(null,this__9200.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__9200.method_cache,this__9200.method_table,this__9200.cached_hierarchy,this__9200.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__9201 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__9201.cached_hierarchy),cljs.core.deref.call(null,this__9201.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__9201.method_cache,this__9201.method_table,this__9201.cached_hierarchy,this__9201.hierarchy);
}
var temp__3695__auto____9202 = cljs.core.deref.call(null,this__9201.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____9202))
{var target_fn__9203 = temp__3695__auto____9202;

return target_fn__9203;
} else
{var temp__3695__auto____9204 = cljs.core.find_and_cache_best_method.call(null,this__9201.name,dispatch_val,this__9201.hierarchy,this__9201.method_table,this__9201.prefer_table,this__9201.method_cache,this__9201.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____9204))
{var target_fn__9205 = temp__3695__auto____9204;

return target_fn__9205;
} else
{return cljs.core.deref.call(null,this__9201.method_table).call(null,this__9201.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9206 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__9206.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__9206.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__9206.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__9206.method_cache,this__9206.method_table,this__9206.cached_hierarchy,this__9206.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__9207 = this;
return cljs.core.deref.call(null,this__9207.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__9208 = this;
return cljs.core.deref.call(null,this__9208.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__9209 = this;
return cljs.core.do_invoke.call(null,mf,this__9209.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__9210__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__9210 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9210__delegate.call(this, _, args);
};
G__9210.cljs$lang$maxFixedArity = 1;
G__9210.cljs$lang$applyTo = (function (arglist__9211){
var _ = cljs.core.first(arglist__9211);
var args = cljs.core.rest(arglist__9211);
return G__9210__delegate.call(this, _, args);
});
return G__9210;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

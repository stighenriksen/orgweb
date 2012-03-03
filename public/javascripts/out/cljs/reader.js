goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____10010 = reader;

if(cljs.core.truth_(and__3546__auto____10010))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____10010;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____10011 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____10011))
{return or__3548__auto____10011;
} else
{var or__3548__auto____10012 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____10012))
{return or__3548__auto____10012;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____10013 = reader;

if(cljs.core.truth_(and__3546__auto____10013))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____10013;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____10014 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____10014))
{return or__3548__auto____10014;
} else
{var or__3548__auto____10015 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____10015))
{return or__3548__auto____10015;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__10016 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__10016.buffer_atom))))
{var idx__10017 = cljs.core.deref.call(null,this__10016.index_atom);

cljs.core.swap_BANG_.call(null,this__10016.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__10016.s,idx__10017);
} else
{var buf__10018 = cljs.core.deref.call(null,this__10016.buffer_atom);

cljs.core.swap_BANG_.call(null,this__10016.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__10018);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__10019 = this;
return cljs.core.swap_BANG_.call(null,this__10019.buffer_atom,(function (p1__10009_SHARP_){
return cljs.core.cons.call(null,ch,p1__10009_SHARP_);
}));
});
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____10020 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____10020))
{return or__3548__auto____10020;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____10021 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____10021))
{return or__3548__auto____10021;
} else
{var and__3546__auto____10023 = (function (){var or__3548__auto____10022 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____10022))
{return or__3548__auto____10022;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____10023))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__10024 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__10024);
return next_ch__10024;
})());
} else
{return and__3546__auto____10023;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__10025){
var rdr = cljs.core.first(arglist__10025);
var msg = cljs.core.rest(arglist__10025);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____10026 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____10026))
{var and__3546__auto____10027 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____10027))
{var and__3546__auto____10028 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____10028))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____10028;
}
} else
{return and__3546__auto____10027;
}
} else
{return and__3546__auto____10026;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__10029 = (new goog.string.StringBuffer(initch));
var ch__10030 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____10031 = cljs.core.nil_QMARK_.call(null,ch__10030);

if(cljs.core.truth_(or__3548__auto____10031))
{return or__3548__auto____10031;
} else
{var or__3548__auto____10032 = cljs.reader.whitespace_QMARK_.call(null,ch__10030);

if(cljs.core.truth_(or__3548__auto____10032))
{return or__3548__auto____10032;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__10030);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__10030);
return sb__10029.toString();
} else
{{
var G__10033 = (function (){sb__10029.append(ch__10030);
return sb__10029;
})();
var G__10034 = cljs.reader.read_char.call(null,rdr);
sb__10029 = G__10033;
ch__10030 = G__10034;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__10035 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____10036 = cljs.core._EQ_.call(null,ch__10035,"n");

if(cljs.core.truth_(or__3548__auto____10036))
{return or__3548__auto____10036;
} else
{var or__3548__auto____10037 = cljs.core._EQ_.call(null,ch__10035,"r");

if(cljs.core.truth_(or__3548__auto____10037))
{return or__3548__auto____10037;
} else
{return cljs.core.nil_QMARK_.call(null,ch__10035);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.match_int = (function match_int(s){
var groups__10038 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__10039 = cljs.core.nth.call(null,groups__10038,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____10040 = cljs.core.undefined_QMARK_.call(null,group3__10039);

if(cljs.core.truth_(or__3548__auto____10040))
{return or__3548__auto____10040;
} else
{return (group3__10039.length < 1);
}
})())))
{return 0;
} else
{var negate__10042 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__10038,1)))?-1:1);
var vec__10041__10043 = (cljs.core.truth_(cljs.core.nth.call(null,groups__10038,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__10038,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__10038,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__10038,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__10038,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__10038,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__10038,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__10038,7),parseInt.call(null,cljs.core.nth.call(null,groups__10038,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__10044 = cljs.core.nth.call(null,vec__10041__10043,0,null);
var radix__10045 = cljs.core.nth.call(null,vec__10041__10043,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__10044)))
{return null;
} else
{return (negate__10042 * parseInt.call(null,n__10044,radix__10045));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__10046 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__10047 = cljs.core.nth.call(null,groups__10046,1);
var denominator__10048 = cljs.core.nth.call(null,groups__10046,2);

return (parseInt.call(null,numinator__10047) / parseInt.call(null,denominator__10048));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__10049 = cljs.reader.read_char.call(null,reader);
var mapresult__10050 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__10049);

if(cljs.core.truth_(mapresult__10050))
{return mapresult__10050;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____10051 = cljs.core._EQ_.call(null,"u",ch__10049);

if(cljs.core.truth_(or__3548__auto____10051))
{return or__3548__auto____10051;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__10049);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__10049);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__10049);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__10052 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__10052)))
{{
var G__10053 = cljs.reader.read_char.call(null,rdr);
ch__10052 = G__10053;
continue;
}
} else
{return ch__10052;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__10054 = cljs.core.Vector.fromArray([]);

while(true){
var ch__10055 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__10055))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__10055)))
{return a__10054;
} else
{var temp__3695__auto____10056 = cljs.core.get.call(null,cljs.reader.macros,ch__10055);

if(cljs.core.truth_(temp__3695__auto____10056))
{var macrofn__10057 = temp__3695__auto____10056;

var mret__10058 = macrofn__10057.call(null,rdr,ch__10055);

{
var G__10060 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__10058,rdr))?a__10054:cljs.core.conj.call(null,a__10054,mret__10058));
a__10054 = G__10060;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__10055);
var o__10059 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__10061 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__10059,rdr))?a__10054:cljs.core.conj.call(null,a__10054,o__10059));
a__10054 = G__10061;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__10062 = cljs.reader.read_char.call(null,rdr);
var dm__10063 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__10062);

if(cljs.core.truth_(dm__10063))
{return dm__10063.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__10062);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__10064 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__10064))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__10064);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__10065 = (new goog.string.StringBuffer(initch));
var ch__10066 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____10067 = cljs.core.nil_QMARK_.call(null,ch__10066);

if(cljs.core.truth_(or__3548__auto____10067))
{return or__3548__auto____10067;
} else
{var or__3548__auto____10068 = cljs.reader.whitespace_QMARK_.call(null,ch__10066);

if(cljs.core.truth_(or__3548__auto____10068))
{return or__3548__auto____10068;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__10066);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__10066);
var s__10069 = buffer__10065.toString();

var or__3548__auto____10070 = cljs.reader.match_number.call(null,s__10069);

if(cljs.core.truth_(or__3548__auto____10070))
{return or__3548__auto____10070;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__10069,"]");
}
} else
{{
var G__10071 = (function (){buffer__10065.append(ch__10066);
return buffer__10065;
})();
var G__10072 = cljs.reader.read_char.call(null,reader);
buffer__10065 = G__10071;
ch__10066 = G__10072;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__10073 = (new goog.string.StringBuffer());
var ch__10074 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__10074)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__10074)))
{{
var G__10075 = (function (){buffer__10073.append(cljs.reader.escape_char.call(null,buffer__10073,reader));
return buffer__10073;
})();
var G__10076 = cljs.reader.read_char.call(null,reader);
buffer__10073 = G__10075;
ch__10074 = G__10076;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__10074)))
{return buffer__10073.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__10077 = (function (){buffer__10073.append(ch__10074);
return buffer__10073;
})();
var G__10078 = cljs.reader.read_char.call(null,reader);
buffer__10073 = G__10077;
ch__10074 = G__10078;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__10079 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__10079,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__10079,0,token__10079.indexOf("/")),cljs.core.subs.call(null,token__10079,(token__10079.indexOf("/") + 1),token__10079.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__10079,cljs.core.symbol.call(null,token__10079));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__10081 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__10080__10082 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__10081);
var token__10083 = cljs.core.nth.call(null,vec__10080__10082,0,null);
var ns__10084 = cljs.core.nth.call(null,vec__10080__10082,1,null);
var name__10085 = cljs.core.nth.call(null,vec__10080__10082,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____10087 = (function (){var and__3546__auto____10086 = cljs.core.not.call(null,cljs.core.undefined_QMARK_.call(null,ns__10084));

if(cljs.core.truth_(and__3546__auto____10086))
{return (ns__10084.substring((ns__10084.length - 2),ns__10084.length) === ":/");
} else
{return and__3546__auto____10086;
}
})();

if(cljs.core.truth_(or__3548__auto____10087))
{return or__3548__auto____10087;
} else
{var or__3548__auto____10088 = ((name__10085[(name__10085.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____10088))
{return or__3548__auto____10088;
} else
{return cljs.core.not.call(null,(token__10083.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__10083);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__10084.substring(0,ns__10084.indexOf("/")),name__10085);
} else
{return cljs.core.keyword.call(null,token__10083);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("﷐'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__10089 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__10089)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__10090 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__393__auto____10091 = o__10090;

if(cljs.core.truth_((function (){var and__3546__auto____10092 = x__393__auto____10091;

if(cljs.core.truth_(and__3546__auto____10092))
{var and__3546__auto____10093 = x__393__auto____10091.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____10093))
{return cljs.core.not.call(null,x__393__auto____10091.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____10093;
}
} else
{return and__3546__auto____10092;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__393__auto____10091);
}
})()))
{return cljs.core.with_meta.call(null,o__10090,cljs.core.merge.call(null,cljs.core.meta.call(null,o__10090),m__10089));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"﷑'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"﷑'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__10094 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__10094)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__10094)))
{{
var G__10096 = reader;
var G__10097 = eof_is_error;
var G__10098 = sentinel;
var G__10099 = is_recursive;
reader = G__10096;
eof_is_error = G__10097;
sentinel = G__10098;
is_recursive = G__10099;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__10094)))
{{
var G__10100 = cljs.reader.read_comment.call(null,reader,ch__10094);
var G__10101 = eof_is_error;
var G__10102 = sentinel;
var G__10103 = is_recursive;
reader = G__10100;
eof_is_error = G__10101;
sentinel = G__10102;
is_recursive = G__10103;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__10095 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__10094))?cljs.reader.macros.call(null,ch__10094).call(null,reader,ch__10094):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__10094))?cljs.reader.read_number.call(null,reader,ch__10094):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__10094):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__10095,reader)))
{{
var G__10104 = reader;
var G__10105 = eof_is_error;
var G__10106 = sentinel;
var G__10107 = is_recursive;
reader = G__10104;
eof_is_error = G__10105;
sentinel = G__10106;
is_recursive = G__10107;
continue;
}
} else
{return res__10095;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__10108 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__10108,true,null,false);
});

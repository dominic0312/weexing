(function(e, t) {
function n(e) {
var t = B[e] = {}, n, r;
e = e.split(/\s+/);
for (n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
return t;
}
function r(e, n, r) {
if (r === t && e.nodeType === 1) {
var i = "data-" + n.replace(I, "-$1").toLowerCase();
r = e.getAttribute(i);
if (typeof r == "string") {
try {
r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : H.isNumeric(r) ? +r : F.test(r) ? H.parseJSON(r) : r;
} catch (s) {}
H.data(e, n, r);
} else r = t;
}
return r;
}
function i(e) {
for (var t in e) {
if (t === "data" && H.isEmptyObject(e[t])) continue;
if (t !== "toJSON") return !1;
}
return !0;
}
function s(e, t, n) {
var r = t + "defer", i = t + "queue", s = t + "mark", o = H._data(e, r);
o && (n === "queue" || !H._data(e, i)) && (n === "mark" || !H._data(e, s)) && setTimeout(function() {
!H._data(e, i) && !H._data(e, s) && (H.removeData(e, r, !0), o.fire());
}, 0);
}
function o() {
return !1;
}
function u() {
return !0;
}
function a(e) {
return !e || !e.parentNode || e.parentNode.nodeType === 11;
}
function f(e, t, n) {
t = t || 0;
if (H.isFunction(t)) return H.grep(e, function(e, r) {
var i = !!t.call(e, r, e);
return i === n;
});
if (t.nodeType) return H.grep(e, function(e, r) {
return e === t === n;
});
if (typeof t == "string") {
var r = H.grep(e, function(e) {
return e.nodeType === 1;
});
if (lt.test(t)) return H.filter(t, r, !n);
t = H.filter(t, r);
}
return H.grep(e, function(e, r) {
return H.inArray(e, t) >= 0 === n;
});
}
function l(e) {
var t = dt.split("|"), n = e.createDocumentFragment();
if (n.createElement) while (t.length) n.createElement(t.pop());
return n;
}
function c(e, t) {
return H.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
}
function h(e, t) {
if (t.nodeType !== 1 || !H.hasData(e)) return;
var n, r, i, s = H._data(e), o = H._data(t, s), u = s.events;
if (u) {
delete o.handle, o.events = {};
for (n in u) for (r = 0, i = u[n].length; r < i; r++) H.event.add(t, n, u[n][r]);
}
o.data && (o.data = H.extend({}, o.data));
}
function p(e, t) {
var n;
if (t.nodeType !== 1) return;
t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? t.outerHTML = e.outerHTML : n !== "input" || e.type !== "checkbox" && e.type !== "radio" ? n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(H.expando), t.removeAttribute("_submit_attached"), t.removeAttribute("_change_attached");
}
function d(e) {
return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : [];
}
function v(e) {
if (e.type === "checkbox" || e.type === "radio") e.defaultChecked = e.checked;
}
function m(e) {
var t = (e.nodeName || "").toLowerCase();
t === "input" ? v(e) : t !== "script" && typeof e.getElementsByTagName != "undefined" && H.grep(e.getElementsByTagName("input"), v);
}
function g(e) {
var t = _.createElement("div");
return Lt.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild;
}
function y(e, t, n) {
var r = t === "width" ? e.offsetWidth : e.offsetHeight, i = t === "width" ? 1 : 0, s = 4;
if (r > 0) {
if (n !== "border") for (; i < s; i += 2) n || (r -= parseFloat(H.css(e, "padding" + jt[i])) || 0), n === "margin" ? r += parseFloat(H.css(e, n + jt[i])) || 0 : r -= parseFloat(H.css(e, "border" + jt[i] + "Width")) || 0;
return r + "px";
}
r = Ft(e, t);
if (r < 0 || r == null) r = e.style[t];
if (Dt.test(r)) return r;
r = parseFloat(r) || 0;
if (n) for (; i < s; i += 2) r += parseFloat(H.css(e, "padding" + jt[i])) || 0, n !== "padding" && (r += parseFloat(H.css(e, "border" + jt[i] + "Width")) || 0), n === "margin" && (r += parseFloat(H.css(e, n + jt[i])) || 0);
return r + "px";
}
function b(e) {
return function(t, n) {
typeof t != "string" && (n = t, t = "*");
if (H.isFunction(n)) {
var r = t.toLowerCase().split(Zt), i = 0, s = r.length, o, u, a;
for (; i < s; i++) o = r[i], a = /^\+/.test(o), a && (o = o.substr(1) || "*"), u = e[o] = e[o] || [], u[a ? "unshift" : "push"](n);
}
};
}
function w(e, n, r, i, s, o) {
s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
var u = e[s], a = 0, f = u ? u.length : 0, l = e === rn, c;
for (; a < f && (l || !c); a++) c = u[a](n, r, i), typeof c == "string" && (!l || o[c] ? c = t : (n.dataTypes.unshift(c), c = w(e, n, r, i, c, o)));
return (l || !c) && !o["*"] && (c = w(e, n, r, i, "*", o)), c;
}
function E(e, n) {
var r, i, s = H.ajaxSettings.flatOptions || {};
for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
i && H.extend(!0, e, i);
}
function S(e, t, n, r) {
if (H.isArray(t)) H.each(t, function(t, i) {
n || Ut.test(e) ? r(e, i) : S(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r);
}); else if (!n && H.type(t) === "object") for (var i in t) S(e + "[" + i + "]", t[i], n, r); else r(e, t);
}
function x(e, n, r) {
var i = e.contents, s = e.dataTypes, o = e.responseFields, u, a, f, l;
for (a in o) a in r && (n[o[a]] = r[a]);
while (s[0] === "*") s.shift(), u === t && (u = e.mimeType || n.getResponseHeader("content-type"));
if (u) for (a in i) if (i[a] && i[a].test(u)) {
s.unshift(a);
break;
}
if (s[0] in r) f = s[0]; else {
for (a in r) {
if (!s[0] || e.converters[a + " " + s[0]]) {
f = a;
break;
}
l || (l = a);
}
f = f || l;
}
if (f) return f !== s[0] && s.unshift(f), r[f];
}
function T(e, n) {
e.dataFilter && (n = e.dataFilter(n, e.dataType));
var r = e.dataTypes, i = {}, s, o, u = r.length, a, f = r[0], l, c, h, p, d;
for (s = 1; s < u; s++) {
if (s === 1) for (o in e.converters) typeof o == "string" && (i[o.toLowerCase()] = e.converters[o]);
l = f, f = r[s];
if (f === "*") f = l; else if (l !== "*" && l !== f) {
c = l + " " + f, h = i[c] || i["* " + f];
if (!h) {
d = t;
for (p in i) {
a = p.split(" ");
if (a[0] === l || a[0] === "*") {
d = i[a[1] + " " + f];
if (d) {
p = i[p], p === !0 ? h = d : d === !0 && (h = p);
break;
}
}
}
}
!h && !d && H.error("No conversion from " + c.replace(" ", " to ")), h !== !0 && (n = h ? h(n) : d(p(n)));
}
}
return n;
}
function N() {
try {
return new e.XMLHttpRequest;
} catch (t) {}
}
function C() {
try {
return new e.ActiveXObject("Microsoft.XMLHTTP");
} catch (t) {}
}
function k() {
return setTimeout(L, 0), Sn = H.now();
}
function L() {
Sn = t;
}
function A(e, t) {
var n = {};
return H.each(En.concat.apply([], En.slice(0, t)), function() {
n[this] = e;
}), n;
}
function O(e) {
if (!vn[e]) {
var t = _.body, n = H("<" + e + ">").appendTo(t), r = n.css("display");
n.remove();
if (r === "none" || r === "") {
mn || (mn = _.createElement("iframe"), mn.frameBorder = mn.width = mn.height = 0), t.appendChild(mn);
if (!gn || !mn.createElement) gn = (mn.contentWindow || mn.contentDocument).document, gn.write((H.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), gn.close();
n = gn.createElement(e), gn.body.appendChild(n), r = H.css(n, "display"), t.removeChild(mn);
}
vn[e] = r;
}
return vn[e];
}
function M(e) {
return H.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1;
}
var _ = e.document, D = e.navigator, P = e.location, H = function() {
function n() {
if (r.isReady) return;
try {
_.documentElement.doScroll("left");
} catch (e) {
setTimeout(n, 1);
return;
}
r.ready();
}
var r = function(e, t) {
return new r.fn.init(e, t, o);
}, i = e.jQuery, s = e.$, o, u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, a = /\S/, f = /^\s+/, l = /\s+$/, c = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, h = /^[\],:{}\s]*$/, p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, d = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, v = /(?:^|:|,)(?:\s*\[)+/g, m = /(webkit)[ \/]([\w.]+)/, g = /(opera)(?:.*version)?[ \/]([\w.]+)/, y = /(msie) ([\w.]+)/, b = /(mozilla)(?:.*? rv:([\w.]+))?/, w = /-([a-z]|[0-9])/ig, E = /^-ms-/, S = function(e, t) {
return (t + "").toUpperCase();
}, x = D.userAgent, T, N, C, k = Object.prototype.toString, L = Object.prototype.hasOwnProperty, A = Array.prototype.push, O = Array.prototype.slice, M = String.prototype.trim, P = Array.prototype.indexOf, H = {};
return r.fn = r.prototype = {
constructor: r,
init: function(e, n, i) {
var s, o, a, f;
if (!e) return this;
if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
if (e === "body" && !n && _.body) return this.context = _, this[0] = _.body, this.selector = e, this.length = 1, this;
if (typeof e == "string") {
e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [ null, e, null ] : s = u.exec(e);
if (s && (s[1] || !n)) {
if (s[1]) return n = n instanceof r ? n[0] : n, f = n ? n.ownerDocument || n : _, a = c.exec(e), a ? r.isPlainObject(n) ? (e = [ _.createElement(a[1]) ], r.fn.attr.call(e, n, !0)) : e = [ f.createElement(a[1]) ] : (a = r.buildFragment([ s[1] ], [ f ]), e = (a.cacheable ? r.clone(a.fragment) : a.fragment).childNodes), r.merge(this, e);
o = _.getElementById(s[2]);
if (o && o.parentNode) {
if (o.id !== s[2]) return i.find(e);
this.length = 1, this[0] = o;
}
return this.context = _, this.selector = e, this;
}
return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
}
return r.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), r.makeArray(e, this));
},
selector: "",
jquery: "1.7.2",
length: 0,
size: function() {
return this.length;
},
toArray: function() {
return O.call(this, 0);
},
get: function(e) {
return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e];
},
pushStack: function(e, t, n) {
var i = this.constructor();
return r.isArray(e) ? A.apply(i, e) : r.merge(i, e), i.prevObject = this, i.context = this.context, t === "find" ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i;
},
each: function(e, t) {
return r.each(this, e, t);
},
ready: function(e) {
return r.bindReady(), N.add(e), this;
},
eq: function(e) {
return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1);
},
first: function() {
return this.eq(0);
},
last: function() {
return this.eq(-1);
},
slice: function() {
return this.pushStack(O.apply(this, arguments), "slice", O.call(arguments).join(","));
},
map: function(e) {
return this.pushStack(r.map(this, function(t, n) {
return e.call(t, n, t);
}));
},
end: function() {
return this.prevObject || this.constructor(null);
},
push: A,
sort: [].sort,
splice: [].splice
}, r.fn.init.prototype = r.fn, r.extend = r.fn.extend = function() {
var e, n, i, s, o, u, a = arguments[0] || {}, f = 1, l = arguments.length, c = !1;
typeof a == "boolean" && (c = a, a = arguments[1] || {}, f = 2), typeof a != "object" && !r.isFunction(a) && (a = {}), l === f && (a = this, --f);
for (; f < l; f++) if ((e = arguments[f]) != null) for (n in e) {
i = a[n], s = e[n];
if (a === s) continue;
c && s && (r.isPlainObject(s) || (o = r.isArray(s))) ? (o ? (o = !1, u = i && r.isArray(i) ? i : []) : u = i && r.isPlainObject(i) ? i : {}, a[n] = r.extend(c, u, s)) : s !== t && (a[n] = s);
}
return a;
}, r.extend({
noConflict: function(t) {
return e.$ === r && (e.$ = s), t && e.jQuery === r && (e.jQuery = i), r;
},
isReady: !1,
readyWait: 1,
holdReady: function(e) {
e ? r.readyWait++ : r.ready(!0);
},
ready: function(e) {
if (e === !0 && !--r.readyWait || e !== !0 && !r.isReady) {
if (!_.body) return setTimeout(r.ready, 1);
r.isReady = !0;
if (e !== !0 && --r.readyWait > 0) return;
N.fireWith(_, [ r ]), r.fn.trigger && r(_).trigger("ready").off("ready");
}
},
bindReady: function() {
if (N) return;
N = r.Callbacks("once memory");
if (_.readyState === "complete") return setTimeout(r.ready, 1);
if (_.addEventListener) _.addEventListener("DOMContentLoaded", C, !1), e.addEventListener("load", r.ready, !1); else if (_.attachEvent) {
_.attachEvent("onreadystatechange", C), e.attachEvent("onload", r.ready);
var t = !1;
try {
t = e.frameElement == null;
} catch (i) {}
_.documentElement.doScroll && t && n();
}
},
isFunction: function(e) {
return r.type(e) === "function";
},
isArray: Array.isArray || function(e) {
return r.type(e) === "array";
},
isWindow: function(e) {
return e != null && e == e.window;
},
isNumeric: function(e) {
return !isNaN(parseFloat(e)) && isFinite(e);
},
type: function(e) {
return e == null ? String(e) : H[k.call(e)] || "object";
},
isPlainObject: function(e) {
if (!e || r.type(e) !== "object" || e.nodeType || r.isWindow(e)) return !1;
try {
if (e.constructor && !L.call(e, "constructor") && !L.call(e.constructor.prototype, "isPrototypeOf")) return !1;
} catch (n) {
return !1;
}
var i;
for (i in e) ;
return i === t || L.call(e, i);
},
isEmptyObject: function(e) {
for (var t in e) return !1;
return !0;
},
error: function(e) {
throw new Error(e);
},
parseJSON: function(t) {
if (typeof t != "string" || !t) return null;
t = r.trim(t);
if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
if (h.test(t.replace(p, "@").replace(d, "]").replace(v, ""))) return (new Function("return " + t))();
r.error("Invalid JSON: " + t);
},
parseXML: function(n) {
if (typeof n != "string" || !n) return null;
var i, s;
try {
e.DOMParser ? (s = new DOMParser, i = s.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n));
} catch (o) {
i = t;
}
return (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) && r.error("Invalid XML: " + n), i;
},
noop: function() {},
globalEval: function(t) {
t && a.test(t) && (e.execScript || function(t) {
e.eval.call(e, t);
})(t);
},
camelCase: function(e) {
return e.replace(E, "ms-").replace(w, S);
},
nodeName: function(e, t) {
return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase();
},
each: function(e, n, i) {
var s, o = 0, u = e.length, a = u === t || r.isFunction(e);
if (i) {
if (a) {
for (s in e) if (n.apply(e[s], i) === !1) break;
} else for (; o < u; ) if (n.apply(e[o++], i) === !1) break;
} else if (a) {
for (s in e) if (n.call(e[s], s, e[s]) === !1) break;
} else for (; o < u; ) if (n.call(e[o], o, e[o++]) === !1) break;
return e;
},
trim: M ? function(e) {
return e == null ? "" : M.call(e);
} : function(e) {
return e == null ? "" : e.toString().replace(f, "").replace(l, "");
},
makeArray: function(e, t) {
var n = t || [];
if (e != null) {
var i = r.type(e);
e.length == null || i === "string" || i === "function" || i === "regexp" || r.isWindow(e) ? A.call(n, e) : r.merge(n, e);
}
return n;
},
inArray: function(e, t, n) {
var r;
if (t) {
if (P) return P.call(t, e, n);
r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
for (; n < r; n++) if (n in t && t[n] === e) return n;
}
return -1;
},
merge: function(e, n) {
var r = e.length, i = 0;
if (typeof n.length == "number") for (var s = n.length; i < s; i++) e[r++] = n[i]; else while (n[i] !== t) e[r++] = n[i++];
return e.length = r, e;
},
grep: function(e, t, n) {
var r = [], i;
n = !!n;
for (var s = 0, o = e.length; s < o; s++) i = !!t(e[s], s), n !== i && r.push(e[s]);
return r;
},
map: function(e, n, i) {
var s, o, u = [], a = 0, f = e.length, l = e instanceof r || f !== t && typeof f == "number" && (f > 0 && e[0] && e[f - 1] || f === 0 || r.isArray(e));
if (l) for (; a < f; a++) s = n(e[a], a, i), s != null && (u[u.length] = s); else for (o in e) s = n(e[o], o, i), s != null && (u[u.length] = s);
return u.concat.apply([], u);
},
guid: 1,
proxy: function(e, n) {
if (typeof n == "string") {
var i = e[n];
n = e, e = i;
}
if (!r.isFunction(e)) return t;
var s = O.call(arguments, 2), o = function() {
return e.apply(n, s.concat(O.call(arguments)));
};
return o.guid = e.guid = e.guid || o.guid || r.guid++, o;
},
access: function(e, n, i, s, o, u, a) {
var f, l = i == null, c = 0, h = e.length;
if (i && typeof i == "object") {
for (c in i) r.access(e, n, c, i[c], 1, u, s);
o = 1;
} else if (s !== t) {
f = a === t && r.isFunction(s), l && (f ? (f = n, n = function(e, t, n) {
return f.call(r(e), n);
}) : (n.call(e, s), n = null));
if (n) for (; c < h; c++) n(e[c], i, f ? s.call(e[c], c, n(e[c], i)) : s, a);
o = 1;
}
return o ? e : l ? n.call(e) : h ? n(e[0], i) : u;
},
now: function() {
return (new Date).getTime();
},
uaMatch: function(e) {
e = e.toLowerCase();
var t = m.exec(e) || g.exec(e) || y.exec(e) || e.indexOf("compatible") < 0 && b.exec(e) || [];
return {
browser: t[1] || "",
version: t[2] || "0"
};
},
sub: function() {
function e(t, n) {
return new e.fn.init(t, n);
}
r.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, i) {
return i && i instanceof r && !(i instanceof e) && (i = e(i)), r.fn.init.call(this, n, i, t);
}, e.fn.init.prototype = e.fn;
var t = e(_);
return e;
},
browser: {}
}), r.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
H["[object " + t + "]"] = t.toLowerCase();
}), T = r.uaMatch(x), T.browser && (r.browser[T.browser] = !0, r.browser.version = T.version), r.browser.webkit && (r.browser.safari = !0), a.test(" ") && (f = /^[\s\xA0]+/, l = /[\s\xA0]+$/), o = r(_), _.addEventListener ? C = function() {
_.removeEventListener("DOMContentLoaded", C, !1), r.ready();
} : _.attachEvent && (C = function() {
_.readyState === "complete" && (_.detachEvent("onreadystatechange", C), r.ready());
}), r;
}(), B = {};
H.Callbacks = function(e) {
e = e ? B[e] || n(e) : {};
var r = [], i = [], s, o, u, a, f, l, c = function(t) {
var n, i, s, o, u;
for (n = 0, i = t.length; n < i; n++) s = t[n], o = H.type(s), o === "array" ? c(s) : o === "function" && (!e.unique || !p.has(s)) && r.push(s);
}, h = function(t, n) {
n = n || [], s = !e.memory || [ t, n ], o = !0, u = !0, l = a || 0, a = 0, f = r.length;
for (; r && l < f; l++) if (r[l].apply(t, n) === !1 && e.stopOnFalse) {
s = !0;
break;
}
u = !1, r && (e.once ? s === !0 ? p.disable() : r = [] : i && i.length && (s = i.shift(), p.fireWith(s[0], s[1])));
}, p = {
add: function() {
if (r) {
var e = r.length;
c(arguments), u ? f = r.length : s && s !== !0 && (a = e, h(s[0], s[1]));
}
return this;
},
remove: function() {
if (r) {
var t = arguments, n = 0, i = t.length;
for (; n < i; n++) for (var s = 0; s < r.length; s++) if (t[n] === r[s]) {
u && s <= f && (f--, s <= l && l--), r.splice(s--, 1);
if (e.unique) break;
}
}
return this;
},
has: function(e) {
if (r) {
var t = 0, n = r.length;
for (; t < n; t++) if (e === r[t]) return !0;
}
return !1;
},
empty: function() {
return r = [], this;
},
disable: function() {
return r = i = s = t, this;
},
disabled: function() {
return !r;
},
lock: function() {
return i = t, (!s || s === !0) && p.disable(), this;
},
locked: function() {
return !i;
},
fireWith: function(t, n) {
return i && (u ? e.once || i.push([ t, n ]) : (!e.once || !s) && h(t, n)), this;
},
fire: function() {
return p.fireWith(this, arguments), this;
},
fired: function() {
return !!o;
}
};
return p;
};
var j = [].slice;
H.extend({
Deferred: function(e) {
var t = H.Callbacks("once memory"), n = H.Callbacks("once memory"), r = H.Callbacks("memory"), i = "pending", s = {
resolve: t,
reject: n,
notify: r
}, o = {
done: t.add,
fail: n.add,
progress: r.add,
state: function() {
return i;
},
isResolved: t.fired,
isRejected: n.fired,
then: function(e, t, n) {
return u.done(e).fail(t).progress(n), this;
},
always: function() {
return u.done.apply(u, arguments).fail.apply(u, arguments), this;
},
pipe: function(e, t, n) {
return H.Deferred(function(r) {
H.each({
done: [ e, "resolve" ],
fail: [ t, "reject" ],
progress: [ n, "notify" ]
}, function(e, t) {
var n = t[0], i = t[1], s;
H.isFunction(n) ? u[e](function() {
s = n.apply(this, arguments), s && H.isFunction(s.promise) ? s.promise().then(r.resolve, r.reject, r.notify) : r[i + "With"](this === u ? r : this, [ s ]);
}) : u[e](r[i]);
});
}).promise();
},
promise: function(e) {
if (e == null) e = o; else for (var t in o) e[t] = o[t];
return e;
}
}, u = o.promise({}), a;
for (a in s) u[a] = s[a].fire, u[a + "With"] = s[a].fireWith;
return u.done(function() {
i = "resolved";
}, n.disable, r.lock).fail(function() {
i = "rejected";
}, t.disable, r.lock), e && e.call(u, u), u;
},
when: function(e) {
function t(e) {
return function(t) {
r[e] = arguments.length > 1 ? j.call(arguments, 0) : t, --u || f.resolveWith(f, r);
};
}
function n(e) {
return function(t) {
o[e] = arguments.length > 1 ? j.call(arguments, 0) : t, f.notifyWith(l, o);
};
}
var r = j.call(arguments, 0), i = 0, s = r.length, o = new Array(s), u = s, a = s, f = s <= 1 && e && H.isFunction(e.promise) ? e : H.Deferred(), l = f.promise();
if (s > 1) {
for (; i < s; i++) r[i] && r[i].promise && H.isFunction(r[i].promise) ? r[i].promise().then(t(i), f.reject, n(i)) : --u;
u || f.resolveWith(f, r);
} else f !== e && f.resolveWith(f, s ? [ e ] : []);
return l;
}
}), H.support = function() {
var t, n, r, i, s, o, u, a, f, l, c, h, p = _.createElement("div"), d = _.documentElement;
p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
if (!n || !n.length || !r) return {};
i = _.createElement("select"), s = i.appendChild(_.createElement("option")), o = p.getElementsByTagName("input")[0], t = {
leadingWhitespace: p.firstChild.nodeType === 3,
tbody: !p.getElementsByTagName("tbody").length,
htmlSerialize: !!p.getElementsByTagName("link").length,
style: /top/.test(r.getAttribute("style")),
hrefNormalized: r.getAttribute("href") === "/a",
opacity: /^0.55/.test(r.style.opacity),
cssFloat: !!r.style.cssFloat,
checkOn: o.value === "on",
optSelected: s.selected,
getSetAttribute: p.className !== "t",
enctype: !!_.createElement("form").enctype,
html5Clone: _.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
submitBubbles: !0,
changeBubbles: !0,
focusinBubbles: !1,
deleteExpando: !0,
noCloneEvent: !0,
inlineBlockNeedsLayout: !1,
shrinkWrapBlocks: !1,
reliableMarginRight: !0,
pixelMargin: !0
}, H.boxModel = t.boxModel = _.compatMode === "CSS1Compat", o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !s.disabled;
try {
delete p.test;
} catch (v) {
t.deleteExpando = !1;
}
!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function() {
t.noCloneEvent = !1;
}), p.cloneNode(!0).fireEvent("onclick")), o = _.createElement("input"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = o.value === "t", o.setAttribute("checked", "checked"), o.setAttribute("name", "t"), p.appendChild(o), u = _.createDocumentFragment(), u.appendChild(p.lastChild), t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = o.checked, u.removeChild(o), u.appendChild(p);
if (p.attachEvent) for (c in {
submit: 1,
change: 1,
focusin: 1
}) l = "on" + c, h = l in p, h || (p.setAttribute(l, "return;"), h = typeof p[l] == "function"), t[c + "Bubbles"] = h;
return u.removeChild(p), u = i = s = p = o = null, H(function() {
var n, r, i, s, o, u, f, l, c, d, v, m, g, y = _.getElementsByTagName("body")[0];
if (!y) return;
l = 1, g = "padding:0;margin:0;border:", v = "position:absolute;top:0;left:0;width:1px;height:1px;", m = g + "0;visibility:hidden;", c = "style='" + v + g + "5px solid #000;", d = "<div " + c + "display:block;'><div style='" + g + "0;display:block;overflow:hidden;'></div></div>" + "<table " + c + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", n = _.createElement("div"), n.style.cssText = m + "width:0;height:0;position:static;top:0;margin-top:" + l + "px", y.insertBefore(n, y.firstChild), p = _.createElement("div"), n.appendChild(p), p.innerHTML = "<table><tr><td style='" + g + "0;display:none'></td><td>t</td></tr></table>", a = p.getElementsByTagName("td"), h = a[0].offsetHeight === 0, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = h && a[0].offsetHeight === 0, e.getComputedStyle && (p.innerHTML = "", f = _.createElement("div"), f.style.width = "0", f.style.marginRight = "0", p.style.width = "2px", p.appendChild(f), t.reliableMarginRight = (parseInt((e.getComputedStyle(f, null) || {
marginRight: 0
}).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, t.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", t.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = v + m, p.innerHTML = d, r = p.firstChild, i = r.firstChild, o = r.nextSibling.firstChild.firstChild, u = {
doesNotAddBorder: i.offsetTop !== 5,
doesAddBorderForTableAndCells: o.offsetTop === 5
}, i.style.position = "fixed", i.style.top = "20px", u.fixedPosition = i.offsetTop === 20 || i.offsetTop === 15, i.style.position = i.style.top = "", r.style.overflow = "hidden", r.style.position = "relative", u.subtractsBorderForOverflowNotVisible = i.offsetTop === -5, u.doesNotIncludeMarginInBodyOffset = y.offsetTop !== l, e.getComputedStyle && (p.style.marginTop = "1%", t.pixelMargin = (e.getComputedStyle(p, null) || {
marginTop: 0
}).marginTop !== "1%"), typeof n.style.zoom != "undefined" && (n.style.zoom = 1), y.removeChild(n), f = p = n = null, H.extend(t, u);
}), t;
}();
var F = /^(?:\{.*\}|\[.*\])$/, I = /([A-Z])/g;
H.extend({
cache: {},
uuid: 0,
expando: "jQuery" + (H.fn.jquery + Math.random()).replace(/\D/g, ""),
noData: {
embed: !0,
object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
applet: !0
},
hasData: function(e) {
return e = e.nodeType ? H.cache[e[H.expando]] : e[H.expando], !!e && !i(e);
},
data: function(e, n, r, i) {
if (!H.acceptData(e)) return;
var s, o, u, a = H.expando, f = typeof n == "string", l = e.nodeType, c = l ? H.cache : e, h = l ? e[a] : e[a] && a, p = n === "events";
if ((!h || !c[h] || !p && !i && !c[h].data) && f && r === t) return;
h || (l ? e[a] = h = ++H.uuid : h = a), c[h] || (c[h] = {}, l || (c[h].toJSON = H.noop));
if (typeof n == "object" || typeof n == "function") i ? c[h] = H.extend(c[h], n) : c[h].data = H.extend(c[h].data, n);
return s = o = c[h], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[H.camelCase(n)] = r), p && !o[n] ? s.events : (f ? (u = o[n], u == null && (u = o[H.camelCase(n)])) : u = o, u);
},
removeData: function(e, t, n) {
if (!H.acceptData(e)) return;
var r, s, o, u = H.expando, a = e.nodeType, f = a ? H.cache : e, l = a ? e[u] : u;
if (!f[l]) return;
if (t) {
r = n ? f[l] : f[l].data;
if (r) {
H.isArray(t) || (t in r ? t = [ t ] : (t = H.camelCase(t), t in r ? t = [ t ] : t = t.split(" ")));
for (s = 0, o = t.length; s < o; s++) delete r[t[s]];
if (!(n ? i : H.isEmptyObject)(r)) return;
}
}
if (!n) {
delete f[l].data;
if (!i(f[l])) return;
}
H.support.deleteExpando || !f.setInterval ? delete f[l] : f[l] = null, a && (H.support.deleteExpando ? delete e[u] : e.removeAttribute ? e.removeAttribute(u) : e[u] = null);
},
_data: function(e, t, n) {
return H.data(e, t, n, !0);
},
acceptData: function(e) {
if (e.nodeName) {
var t = H.noData[e.nodeName.toLowerCase()];
if (t) return t !== !0 && e.getAttribute("classid") === t;
}
return !0;
}
}), H.fn.extend({
data: function(e, n) {
var i, s, o, u, a, f = this[0], l = 0, c = null;
if (e === t) {
if (this.length) {
c = H.data(f);
if (f.nodeType === 1 && !H._data(f, "parsedAttrs")) {
o = f.attributes;
for (a = o.length; l < a; l++) u = o[l].name, u.indexOf("data-") === 0 && (u = H.camelCase(u.substring(5)), r(f, u, c[u]));
H._data(f, "parsedAttrs", !0);
}
}
return c;
}
return typeof e == "object" ? this.each(function() {
H.data(this, e);
}) : (i = e.split(".", 2), i[1] = i[1] ? "." + i[1] : "", s = i[1] + "!", H.access(this, function(n) {
if (n === t) return c = this.triggerHandler("getData" + s, [ i[0] ]), c === t && f && (c = H.data(f, e), c = r(f, e, c)), c === t && i[1] ? this.data(i[0]) : c;
i[1] = n, this.each(function() {
var t = H(this);
t.triggerHandler("setData" + s, i), H.data(this, e, n), t.triggerHandler("changeData" + s, i);
});
}, null, n, arguments.length > 1, null, !1));
},
removeData: function(e) {
return this.each(function() {
H.removeData(this, e);
});
}
}), H.extend({
_mark: function(e, t) {
e && (t = (t || "fx") + "mark", H._data(e, t, (H._data(e, t) || 0) + 1));
},
_unmark: function(e, t, n) {
e !== !0 && (n = t, t = e, e = !1);
if (t) {
n = n || "fx";
var r = n + "mark", i = e ? 0 : (H._data(t, r) || 1) - 1;
i ? H._data(t, r, i) : (H.removeData(t, r, !0), s(t, n, "mark"));
}
},
queue: function(e, t, n) {
var r;
if (e) return t = (t || "fx") + "queue", r = H._data(e, t), n && (!r || H.isArray(n) ? r = H._data(e, t, H.makeArray(n)) : r.push(n)), r || [];
},
dequeue: function(e, t) {
t = t || "fx";
var n = H.queue(e, t), r = n.shift(), i = {};
r === "inprogress" && (r = n.shift()), r && (t === "fx" && n.unshift("inprogress"), H._data(e, t + ".run", i), r.call(e, function() {
H.dequeue(e, t);
}, i)), n.length || (H.removeData(e, t + "queue " + t + ".run", !0), s(e, t, "queue"));
}
}), H.fn.extend({
queue: function(e, n) {
var r = 2;
return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? H.queue(this[0], e) : n === t ? this : this.each(function() {
var t = H.queue(this, e, n);
e === "fx" && t[0] !== "inprogress" && H.dequeue(this, e);
});
},
dequeue: function(e) {
return this.each(function() {
H.dequeue(this, e);
});
},
delay: function(e, t) {
return e = H.fx ? H.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
var r = setTimeout(t, e);
n.stop = function() {
clearTimeout(r);
};
});
},
clearQueue: function(e) {
return this.queue(e || "fx", []);
},
promise: function(e, n) {
function r() {
--u || i.resolveWith(s, [ s ]);
}
typeof e != "string" && (n = e, e = t), e = e || "fx";
var i = H.Deferred(), s = this, o = s.length, u = 1, a = e + "defer", f = e + "queue", l = e + "mark", c;
while (o--) if (c = H.data(s[o], a, t, !0) || (H.data(s[o], f, t, !0) || H.data(s[o], l, t, !0)) && H.data(s[o], a, H.Callbacks("once memory"), !0)) u++, c.add(r);
return r(), i.promise(n);
}
});
var q = /[\n\t\r]/g, R = /\s+/, U = /\r/g, z = /^(?:button|input)$/i, W = /^(?:button|input|object|select|textarea)$/i, X = /^a(?:rea)?$/i, V = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, $ = H.support.getSetAttribute, J, K, Q;
H.fn.extend({
attr: function(e, t) {
return H.access(this, H.attr, e, t, arguments.length > 1);
},
removeAttr: function(e) {
return this.each(function() {
H.removeAttr(this, e);
});
},
prop: function(e, t) {
return H.access(this, H.prop, e, t, arguments.length > 1);
},
removeProp: function(e) {
return e = H.propFix[e] || e, this.each(function() {
try {
this[e] = t, delete this[e];
} catch (n) {}
});
},
addClass: function(e) {
var t, n, r, i, s, o, u;
if (H.isFunction(e)) return this.each(function(t) {
H(this).addClass(e.call(this, t, this.className));
});
if (e && typeof e == "string") {
t = e.split(R);
for (n = 0, r = this.length; n < r; n++) {
i = this[n];
if (i.nodeType === 1) if (!i.className && t.length === 1) i.className = e; else {
s = " " + i.className + " ";
for (o = 0, u = t.length; o < u; o++) ~s.indexOf(" " + t[o] + " ") || (s += t[o] + " ");
i.className = H.trim(s);
}
}
}
return this;
},
removeClass: function(e) {
var n, r, i, s, o, u, a;
if (H.isFunction(e)) return this.each(function(t) {
H(this).removeClass(e.call(this, t, this.className));
});
if (e && typeof e == "string" || e === t) {
n = (e || "").split(R);
for (r = 0, i = this.length; r < i; r++) {
s = this[r];
if (s.nodeType === 1 && s.className) if (e) {
o = (" " + s.className + " ").replace(q, " ");
for (u = 0, a = n.length; u < a; u++) o = o.replace(" " + n[u] + " ", " ");
s.className = H.trim(o);
} else s.className = "";
}
}
return this;
},
toggleClass: function(e, t) {
var n = typeof e, r = typeof t == "boolean";
return H.isFunction(e) ? this.each(function(n) {
H(this).toggleClass(e.call(this, n, this.className, t), t);
}) : this.each(function() {
if (n === "string") {
var i, s = 0, o = H(this), u = t, a = e.split(R);
while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i);
} else if (n === "undefined" || n === "boolean") this.className && H._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : H._data(this, "__className__") || "";
});
},
hasClass: function(e) {
var t = " " + e + " ", n = 0, r = this.length;
for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) > -1) return !0;
return !1;
},
val: function(e) {
var n, r, i, s = this[0];
if (!arguments.length) {
if (s) return n = H.valHooks[s.type] || H.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(U, "") : r == null ? "" : r);
return;
}
return i = H.isFunction(e), this.each(function(r) {
var s = H(this), o;
if (this.nodeType !== 1) return;
i ? o = e.call(this, r, s.val()) : o = e, o == null ? o = "" : typeof o == "number" ? o += "" : H.isArray(o) && (o = H.map(o, function(e) {
return e == null ? "" : e + "";
})), n = H.valHooks[this.type] || H.valHooks[this.nodeName.toLowerCase()];
if (!n || !("set" in n) || n.set(this, o, "value") === t) this.value = o;
});
}
}), H.extend({
valHooks: {
option: {
get: function(e) {
var t = e.attributes.value;
return !t || t.specified ? e.value : e.text;
}
},
select: {
get: function(e) {
var t, n, r, i, s = e.selectedIndex, o = [], u = e.options, a = e.type === "select-one";
if (s < 0) return null;
n = a ? s : 0, r = a ? s + 1 : u.length;
for (; n < r; n++) {
i = u[n];
if (i.selected && (H.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !H.nodeName(i.parentNode, "optgroup"))) {
t = H(i).val();
if (a) return t;
o.push(t);
}
}
return a && !o.length && u.length ? H(u[s]).val() : o;
},
set: function(e, t) {
var n = H.makeArray(t);
return H(e).find("option").each(function() {
this.selected = H.inArray(H(this).val(), n) >= 0;
}), n.length || (e.selectedIndex = -1), n;
}
}
},
attrFn: {
val: !0,
css: !0,
html: !0,
text: !0,
data: !0,
width: !0,
height: !0,
offset: !0
},
attr: function(e, n, r, i) {
var s, o, u, a = e.nodeType;
if (!e || a === 3 || a === 8 || a === 2) return;
if (i && n in H.attrFn) return H(e)[n](r);
if (typeof e.getAttribute == "undefined") return H.prop(e, n, r);
u = a !== 1 || !H.isXMLDoc(e), u && (n = n.toLowerCase(), o = H.attrHooks[n] || (V.test(n) ? K : J));
if (r !== t) {
if (r === null) {
H.removeAttr(e, n);
return;
}
return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, "" + r), r);
}
return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s);
},
removeAttr: function(e, t) {
var n, r, i, s, o, u = 0;
if (t && e.nodeType === 1) {
r = t.toLowerCase().split(R), s = r.length;
for (; u < s; u++) i = r[u], i && (n = H.propFix[i] || i, o = V.test(i), o || H.attr(e, i, ""), e.removeAttribute($ ? i : n), o && n in e && (e[n] = !1));
}
},
attrHooks: {
type: {
set: function(e, t) {
if (z.test(e.nodeName) && e.parentNode) H.error("type property can't be changed"); else if (!H.support.radioValue && t === "radio" && H.nodeName(e, "input")) {
var n = e.value;
return e.setAttribute("type", t), n && (e.value = n), t;
}
}
},
value: {
get: function(e, t) {
return J && H.nodeName(e, "button") ? J.get(e, t) : t in e ? e.value : null;
},
set: function(e, t, n) {
if (J && H.nodeName(e, "button")) return J.set(e, t, n);
e.value = t;
}
}
},
propFix: {
tabindex: "tabIndex",
readonly: "readOnly",
"for": "htmlFor",
"class": "className",
maxlength: "maxLength",
cellspacing: "cellSpacing",
cellpadding: "cellPadding",
rowspan: "rowSpan",
colspan: "colSpan",
usemap: "useMap",
frameborder: "frameBorder",
contenteditable: "contentEditable"
},
prop: function(e, n, r) {
var i, s, o, u = e.nodeType;
if (!e || u === 3 || u === 8 || u === 2) return;
return o = u !== 1 || !H.isXMLDoc(e), o && (n = H.propFix[n] || n, s = H.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n];
},
propHooks: {
tabIndex: {
get: function(e) {
var n = e.getAttributeNode("tabindex");
return n && n.specified ? parseInt(n.value, 10) : W.test(e.nodeName) || X.test(e.nodeName) && e.href ? 0 : t;
}
}
}
}), H.attrHooks.tabindex = H.propHooks.tabIndex, K = {
get: function(e, n) {
var r, i = H.prop(e, n);
return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t;
},
set: function(e, t, n) {
var r;
return t === !1 ? H.removeAttr(e, n) : (r = H.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n;
}
}, $ || (Q = {
name: !0,
id: !0,
coords: !0
}, J = H.valHooks.button = {
get: function(e, n) {
var r;
return r = e.getAttributeNode(n), r && (Q[n] ? r.nodeValue !== "" : r.specified) ? r.nodeValue : t;
},
set: function(e, t, n) {
var r = e.getAttributeNode(n);
return r || (r = _.createAttribute(n), e.setAttributeNode(r)), r.nodeValue = t + "";
}
}, H.attrHooks.tabindex.set = J.set, H.each([ "width", "height" ], function(e, t) {
H.attrHooks[t] = H.extend(H.attrHooks[t], {
set: function(e, n) {
if (n === "") return e.setAttribute(t, "auto"), n;
}
});
}), H.attrHooks.contenteditable = {
get: J.get,
set: function(e, t, n) {
t === "" && (t = "false"), J.set(e, t, n);
}
}), H.support.hrefNormalized || H.each([ "href", "src", "width", "height" ], function(e, n) {
H.attrHooks[n] = H.extend(H.attrHooks[n], {
get: function(e) {
var r = e.getAttribute(n, 2);
return r === null ? t : r;
}
});
}), H.support.style || (H.attrHooks.style = {
get: function(e) {
return e.style.cssText.toLowerCase() || t;
},
set: function(e, t) {
return e.style.cssText = "" + t;
}
}), H.support.optSelected || (H.propHooks.selected = H.extend(H.propHooks.selected, {
get: function(e) {
var t = e.parentNode;
return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
}
})), H.support.enctype || (H.propFix.enctype = "encoding"), H.support.checkOn || H.each([ "radio", "checkbox" ], function() {
H.valHooks[this] = {
get: function(e) {
return e.getAttribute("value") === null ? "on" : e.value;
}
};
}), H.each([ "radio", "checkbox" ], function() {
H.valHooks[this] = H.extend(H.valHooks[this], {
set: function(e, t) {
if (H.isArray(t)) return e.checked = H.inArray(H(e).val(), t) >= 0;
}
});
});
var G = /^(?:textarea|input|select)$/i, Y = /^([^\.]*)?(?:\.(.+))?$/, Z = /(?:^|\s)hover(\.\S+)?\b/, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, it = function(e) {
var t = rt.exec(e);
return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t;
}, st = function(e, t) {
var n = e.attributes || {};
return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n["class"] || {}).value));
}, ot = function(e) {
return H.event.special.hover ? e : e.replace(Z, "mouseenter$1 mouseleave$1");
};
H.event = {
add: function(e, n, r, i, s) {
var o, u, a, f, l, c, h, p, d, v, m, g;
if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = H._data(e))) return;
r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = H.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function(e) {
return typeof H == "undefined" || !!e && H.event.triggered === e.type ? t : H.event.dispatch.apply(u.elem, arguments);
}, u.elem = e), n = H.trim(ot(n)).split(" ");
for (f = 0; f < n.length; f++) {
l = Y.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = H.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = H.event.special[c] || {}, p = H.extend({
type: c,
origType: l[1],
data: i,
handler: r,
guid: r.guid,
selector: s,
quick: s && it(s),
namespace: h.join(".")
}, d), m = a[c];
if (!m) {
m = a[c] = [], m.delegateCount = 0;
if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u);
}
g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), H.event.global[c] = !0;
}
e = null;
},
global: {},
remove: function(e, t, n, r, i) {
var s = H.hasData(e) && H._data(e), o, u, a, f, l, c, h, p, d, v, m, g;
if (!s || !(p = s.events)) return;
t = H.trim(ot(t || "")).split(" ");
for (o = 0; o < t.length; o++) {
u = Y.exec(t[o]) || [], a = f = u[1], l = u[2];
if (!a) {
for (a in p) H.event.remove(e, a + t[o], n, r, !0);
continue;
}
d = H.event.special[a] || {}, a = (r ? d.delegateType : d.bindType) || a, m = p[a] || [], c = m.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
for (h = 0; h < m.length; h++) g = m[h], (i || f === g.origType) && (!n || n.guid === g.guid) && (!l || l.test(g.namespace)) && (!r || r === g.selector || r === "**" && g.selector) && (m.splice(h--, 1), g.selector && m.delegateCount--, d.remove && d.remove.call(e, g));
m.length === 0 && c !== m.length && ((!d.teardown || d.teardown.call(e, l) === !1) && H.removeEvent(e, a, s.handle), delete p[a]);
}
H.isEmptyObject(p) && (v = s.handle, v && (v.elem = null), H.removeData(e, [ "events", "handle" ], !0));
},
customEvent: {
getData: !0,
setData: !0,
changeData: !0
},
trigger: function(n, r, i, s) {
if (!i || i.nodeType !== 3 && i.nodeType !== 8) {
var o = n.type || n, u = [], a, f, l, c, h, p, d, v, m, g;
if (nt.test(o + H.event.triggered)) return;
o.indexOf("!") >= 0 && (o = o.slice(0, -1), f = !0), o.indexOf(".") >= 0 && (u = o.split("."), o = u.shift(), u.sort());
if ((!i || H.event.customEvent[o]) && !H.event.global[o]) return;
n = typeof n == "object" ? n[H.expando] ? n : new H.Event(o, n) : new H.Event(o), n.type = o, n.isTrigger = !0, n.exclusive = f, n.namespace = u.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, p = o.indexOf(":") < 0 ? "on" + o : "";
if (!i) {
a = H.cache;
for (l in a) a[l].events && a[l].events[o] && H.event.trigger(n, r, a[l].handle.elem, !0);
return;
}
n.result = t, n.target || (n.target = i), r = r != null ? H.makeArray(r) : [], r.unshift(n), d = H.event.special[o] || {};
if (d.trigger && d.trigger.apply(i, r) === !1) return;
m = [ [ i, d.bindType || o ] ];
if (!s && !d.noBubble && !H.isWindow(i)) {
g = d.delegateType || o, c = nt.test(g + o) ? i : i.parentNode, h = null;
for (; c; c = c.parentNode) m.push([ c, g ]), h = c;
h && h === i.ownerDocument && m.push([ h.defaultView || h.parentWindow || e, g ]);
}
for (l = 0; l < m.length && !n.isPropagationStopped(); l++) c = m[l][0], n.type = m[l][1], v = (H._data(c, "events") || {})[n.type] && H._data(c, "handle"), v && v.apply(c, r), v = p && c[p], v && H.acceptData(c) && v.apply(c, r) === !1 && n.preventDefault();
return n.type = o, !s && !n.isDefaultPrevented() && (!d._default || d._default.apply(i.ownerDocument, r) === !1) && (o !== "click" || !H.nodeName(i, "a")) && H.acceptData(i) && p && i[o] && (o !== "focus" && o !== "blur" || n.target.offsetWidth !== 0) && !H.isWindow(i) && (h = i[p], h && (i[p] = null), H.event.triggered = o, i[o](), H.event.triggered = t, h && (i[p] = h)), n.result;
}
return;
},
dispatch: function(n) {
n = H.event.fix(n || e.event);
var r = (H._data(this, "events") || {})[n.type] || [], i = r.delegateCount, s = [].slice.call(arguments, 0), o = !n.exclusive && !n.namespace, u = H.event.special[n.type] || {}, a = [], f, l, c, h, p, d, v, m, g, y, b;
s[0] = n, n.delegateTarget = this;
if (u.preDispatch && u.preDispatch.call(this, n) === !1) return;
if (i && (!n.button || n.type !== "click")) {
h = H(this), h.context = this.ownerDocument || this;
for (c = n.target; c != this; c = c.parentNode || this) if (c.disabled !== !0) {
d = {}, m = [], h[0] = c;
for (f = 0; f < i; f++) g = r[f], y = g.selector, d[y] === t && (d[y] = g.quick ? st(c, g.quick) : h.is(y)), d[y] && m.push(g);
m.length && a.push({
elem: c,
matches: m
});
}
}
r.length > i && a.push({
elem: this,
matches: r.slice(i)
});
for (f = 0; f < a.length && !n.isPropagationStopped(); f++) {
v = a[f], n.currentTarget = v.elem;
for (l = 0; l < v.matches.length && !n.isImmediatePropagationStopped(); l++) {
g = v.matches[l];
if (o || !n.namespace && !g.namespace || n.namespace_re && n.namespace_re.test(g.namespace)) n.data = g.data, n.handleObj = g, p = ((H.event.special[g.origType] || {}).handle || g.handler).apply(v.elem, s), p !== t && (n.result = p, p === !1 && (n.preventDefault(), n.stopPropagation()));
}
}
return u.postDispatch && u.postDispatch.call(this, n), n.result;
},
props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
fixHooks: {},
keyHooks: {
props: "char charCode key keyCode".split(" "),
filter: function(e, t) {
return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e;
}
},
mouseHooks: {
props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
filter: function(e, n) {
var r, i, s, o = n.button, u = n.fromElement;
return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || _, i = r.documentElement, s = r.body, e.pageX = n.clientX + (i && i.scrollLeft || s && s.scrollLeft || 0) - (i && i.clientLeft || s && s.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || s && s.scrollTop || 0) - (i && i.clientTop || s && s.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), !e.which && o !== t && (e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0), e;
}
},
fix: function(e) {
if (e[H.expando]) return e;
var n, r, i = e, s = H.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
e = H.Event(i);
for (n = o.length; n; ) r = o[--n], e[r] = i[r];
return e.target || (e.target = i.srcElement || _), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), s.filter ? s.filter(e, i) : e;
},
special: {
ready: {
setup: H.bindReady
},
load: {
noBubble: !0
},
focus: {
delegateType: "focusin"
},
blur: {
delegateType: "focusout"
},
beforeunload: {
setup: function(e, t, n) {
H.isWindow(this) && (this.onbeforeunload = n);
},
teardown: function(e, t) {
this.onbeforeunload === t && (this.onbeforeunload = null);
}
}
},
simulate: function(e, t, n, r) {
var i = H.extend(new H.Event, n, {
type: e,
isSimulated: !0,
originalEvent: {}
});
r ? H.event.trigger(i, null, t) : H.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
}
}, H.event.handle = H.event.dispatch, H.removeEvent = _.removeEventListener ? function(e, t, n) {
e.removeEventListener && e.removeEventListener(t, n, !1);
} : function(e, t, n) {
e.detachEvent && e.detachEvent("on" + t, n);
}, H.Event = function(e, t) {
if (!(this instanceof H.Event)) return new H.Event(e, t);
e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u : o) : this.type = e, t && H.extend(this, t), this.timeStamp = e && e.timeStamp || H.now(), this[H.expando] = !0;
}, H.Event.prototype = {
preventDefault: function() {
this.isDefaultPrevented = u;
var e = this.originalEvent;
if (!e) return;
e.preventDefault ? e.preventDefault() : e.returnValue = !1;
},
stopPropagation: function() {
this.isPropagationStopped = u;
var e = this.originalEvent;
if (!e) return;
e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0;
},
stopImmediatePropagation: function() {
this.isImmediatePropagationStopped = u, this.stopPropagation();
},
isDefaultPrevented: o,
isPropagationStopped: o,
isImmediatePropagationStopped: o
}, H.each({
mouseenter: "mouseover",
mouseleave: "mouseout"
}, function(e, t) {
H.event.special[e] = {
delegateType: t,
bindType: t,
handle: function(e) {
var n = this, r = e.relatedTarget, i = e.handleObj, s = i.selector, o;
if (!r || r !== n && !H.contains(n, r)) e.type = i.origType, o = i.handler.apply(this, arguments), e.type = t;
return o;
}
};
}), H.support.submitBubbles || (H.event.special.submit = {
setup: function() {
if (H.nodeName(this, "form")) return !1;
H.event.add(this, "click._submit keypress._submit", function(e) {
var n = e.target, r = H.nodeName(n, "input") || H.nodeName(n, "button") ? n.form : t;
r && !r._submit_attached && (H.event.add(r, "submit._submit", function(e) {
e._submit_bubble = !0;
}), r._submit_attached = !0);
});
},
postDispatch: function(e) {
e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && H.event.simulate("submit", this.parentNode, e, !0));
},
teardown: function() {
if (H.nodeName(this, "form")) return !1;
H.event.remove(this, "._submit");
}
}), H.support.changeBubbles || (H.event.special.change = {
setup: function() {
if (G.test(this.nodeName)) {
if (this.type === "checkbox" || this.type === "radio") H.event.add(this, "propertychange._change", function(e) {
e.originalEvent.propertyName === "checked" && (this._just_changed = !0);
}), H.event.add(this, "click._change", function(e) {
this._just_changed && !e.isTrigger && (this._just_changed = !1, H.event.simulate("change", this, e, !0));
});
return !1;
}
H.event.add(this, "beforeactivate._change", function(e) {
var t = e.target;
G.test(t.nodeName) && !t._change_attached && (H.event.add(t, "change._change", function(e) {
this.parentNode && !e.isSimulated && !e.isTrigger && H.event.simulate("change", this.parentNode, e, !0);
}), t._change_attached = !0);
});
},
handle: function(e) {
var t = e.target;
if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments);
},
teardown: function() {
return H.event.remove(this, "._change"), G.test(this.nodeName);
}
}), H.support.focusinBubbles || H.each({
focus: "focusin",
blur: "focusout"
}, function(e, t) {
var n = 0, r = function(e) {
H.event.simulate(t, e.target, H.event.fix(e), !0);
};
H.event.special[t] = {
setup: function() {
n++ === 0 && _.addEventListener(e, r, !0);
},
teardown: function() {
--n === 0 && _.removeEventListener(e, r, !0);
}
};
}), H.fn.extend({
on: function(e, n, r, i, s) {
var u, a;
if (typeof e == "object") {
typeof n != "string" && (r = r || n, n = t);
for (a in e) this.on(a, n, r, e[a], s);
return this;
}
r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
if (i === !1) i = o; else if (!i) return this;
return s === 1 && (u = i, i = function(e) {
return H().off(e), u.apply(this, arguments);
}, i.guid = u.guid || (u.guid = H.guid++)), this.each(function() {
H.event.add(this, e, i, r, n);
});
},
one: function(e, t, n, r) {
return this.on(e, t, n, r, 1);
},
off: function(e, n, r) {
if (e && e.preventDefault && e.handleObj) {
var i = e.handleObj;
return H(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
}
if (typeof e == "object") {
for (var s in e) this.off(s, n, e[s]);
return this;
}
if (n === !1 || typeof n == "function") r = n, n = t;
return r === !1 && (r = o), this.each(function() {
H.event.remove(this, e, r, n);
});
},
bind: function(e, t, n) {
return this.on(e, null, t, n);
},
unbind: function(e, t) {
return this.off(e, null, t);
},
live: function(e, t, n) {
return H(this.context).on(e, this.selector, t, n), this;
},
die: function(e, t) {
return H(this.context).off(e, this.selector || "**", t), this;
},
delegate: function(e, t, n, r) {
return this.on(t, e, n, r);
},
undelegate: function(e, t, n) {
return arguments.length == 1 ? this.off(e, "**") : this.off(t, e, n);
},
trigger: function(e, t) {
return this.each(function() {
H.event.trigger(e, t, this);
});
},
triggerHandler: function(e, t) {
if (this[0]) return H.event.trigger(e, t, this[0], !0);
},
toggle: function(e) {
var t = arguments, n = e.guid || H.guid++, r = 0, i = function(n) {
var i = (H._data(this, "lastToggle" + e.guid) || 0) % r;
return H._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1;
};
i.guid = n;
while (r < t.length) t[r++].guid = n;
return this.click(i);
},
hover: function(e, t) {
return this.mouseenter(e).mouseleave(t || e);
}
}), H.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
H.fn[t] = function(e, n) {
return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
}, H.attrFn && (H.attrFn[t] = !0), et.test(t) && (H.event.fixHooks[t] = H.event.keyHooks), tt.test(t) && (H.event.fixHooks[t] = H.event.mouseHooks);
}), function() {
function e(e, t, n, r, s, o) {
for (var u = 0, a = r.length; u < a; u++) {
var f = r[u];
if (f) {
var l = !1;
f = f[e];
while (f) {
if (f[i] === n) {
l = r[f.sizset];
break;
}
f.nodeType === 1 && !o && (f[i] = n, f.sizset = u);
if (f.nodeName.toLowerCase() === t) {
l = f;
break;
}
f = f[e];
}
r[u] = l;
}
}
}
function n(e, t, n, r, s, o) {
for (var u = 0, a = r.length; u < a; u++) {
var f = r[u];
if (f) {
var l = !1;
f = f[e];
while (f) {
if (f[i] === n) {
l = r[f.sizset];
break;
}
if (f.nodeType === 1) {
o || (f[i] = n, f.sizset = u);
if (typeof t != "string") {
if (f === t) {
l = !0;
break;
}
} else if (h.filter(t, [ f ]).length > 0) {
l = f;
break;
}
}
f = f[e];
}
r[u] = l;
}
}
}
var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, i = "sizcache" + (Math.random() + "").replace(".", ""), s = 0, o = Object.prototype.toString, u = !1, a = !0, f = /\\/g, l = /\r\n/g, c = /\W/;
[ 0, 0 ].sort(function() {
return a = !1, 0;
});
var h = function(e, t, n, i) {
n = n || [], t = t || _;
var s = t;
if (t.nodeType !== 1 && t.nodeType !== 9) return [];
if (!e || typeof e != "string") return n;
var u, a, f, l, c, p, m, g, b = !0, w = h.isXML(t), E = [], x = e;
do {
r.exec(""), u = r.exec(x);
if (u) {
x = u[3], E.push(u[1]);
if (u[2]) {
l = u[3];
break;
}
}
} while (u);
if (E.length > 1 && v.exec(e)) if (E.length === 2 && d.relative[E[0]]) a = S(E[0] + E[1], t, i); else {
a = d.relative[E[0]] ? [ t ] : h(E.shift(), t);
while (E.length) e = E.shift(), d.relative[e] && (e += E.shift()), a = S(e, a, i);
} else {
!i && E.length > 1 && t.nodeType === 9 && !w && d.match.ID.test(E[0]) && !d.match.ID.test(E[E.length - 1]) && (c = h.find(E.shift(), t, w), t = c.expr ? h.filter(c.expr, c.set)[0] : c.set[0]);
if (t) {
c = i ? {
expr: E.pop(),
set: y(i)
} : h.find(E.pop(), E.length !== 1 || E[0] !== "~" && E[0] !== "+" || !t.parentNode ? t : t.parentNode, w), a = c.expr ? h.filter(c.expr, c.set) : c.set, E.length > 0 ? f = y(a) : b = !1;
while (E.length) p = E.pop(), m = p, d.relative[p] ? m = E.pop() : p = "", m == null && (m = t), d.relative[p](f, m, w);
} else f = E = [];
}
f || (f = a), f || h.error(p || e);
if (o.call(f) === "[object Array]") if (!b) n.push.apply(n, f); else if (t && t.nodeType === 1) for (g = 0; f[g] != null; g++) f[g] && (f[g] === !0 || f[g].nodeType === 1 && h.contains(t, f[g])) && n.push(a[g]); else for (g = 0; f[g] != null; g++) f[g] && f[g].nodeType === 1 && n.push(a[g]); else y(f, n);
return l && (h(l, s, n, i), h.uniqueSort(n)), n;
};
h.uniqueSort = function(e) {
if (w) {
u = a, e.sort(w);
if (u) for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1);
}
return e;
}, h.matches = function(e, t) {
return h(e, null, null, t);
}, h.matchesSelector = function(e, t) {
return h(t, null, null, [ e ]).length > 0;
}, h.find = function(e, t, n) {
var r, i, s, o, u, a;
if (!e) return [];
for (i = 0, s = d.order.length; i < s; i++) {
u = d.order[i];
if (o = d.leftMatch[u].exec(e)) {
a = o[1], o.splice(1, 1);
if (a.substr(a.length - 1) !== "\\") {
o[1] = (o[1] || "").replace(f, ""), r = d.find[u](o, t, n);
if (r != null) {
e = e.replace(d.match[u], "");
break;
}
}
}
}
return r || (r = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []), {
set: r,
expr: e
};
}, h.filter = function(e, n, r, i) {
var s, o, u, a, f, l, c, p, v, m = e, g = [], y = n, b = n && n[0] && h.isXML(n[0]);
while (e && n.length) {
for (u in d.filter) if ((s = d.leftMatch[u].exec(e)) != null && s[2]) {
l = d.filter[u], c = s[1], o = !1, s.splice(1, 1);
if (c.substr(c.length - 1) === "\\") continue;
y === g && (g = []);
if (d.preFilter[u]) {
s = d.preFilter[u](s, y, r, g, i, b);
if (!s) o = a = !0; else if (s === !0) continue;
}
if (s) for (p = 0; (f = y[p]) != null; p++) f && (a = l(f, s, p, y), v = i ^ a, r && a != null ? v ? o = !0 : y[p] = !1 : v && (g.push(f), o = !0));
if (a !== t) {
r || (y = g), e = e.replace(d.match[u], "");
if (!o) return [];
break;
}
}
if (e === m) {
if (o != null) break;
h.error(e);
}
m = e;
}
return y;
}, h.error = function(e) {
throw new Error("Syntax error, unrecognized expression: " + e);
};
var p = h.getText = function(e) {
var t, n, r = e.nodeType, i = "";
if (r) {
if (r === 1 || r === 9 || r === 11) {
if (typeof e.textContent == "string") return e.textContent;
if (typeof e.innerText == "string") return e.innerText.replace(l, "");
for (e = e.firstChild; e; e = e.nextSibling) i += p(e);
} else if (r === 3 || r === 4) return e.nodeValue;
} else for (t = 0; n = e[t]; t++) n.nodeType !== 8 && (i += p(n));
return i;
}, d = h.selectors = {
order: [ "ID", "NAME", "TAG" ],
match: {
ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
},
leftMatch: {},
attrMap: {
"class": "className",
"for": "htmlFor"
},
attrHandle: {
href: function(e) {
return e.getAttribute("href");
},
type: function(e) {
return e.getAttribute("type");
}
},
relative: {
"+": function(e, t) {
var n = typeof t == "string", r = n && !c.test(t), i = n && !r;
r && (t = t.toLowerCase());
for (var s = 0, o = e.length, u; s < o; s++) if (u = e[s]) {
while ((u = u.previousSibling) && u.nodeType !== 1) ;
e[s] = i || u && u.nodeName.toLowerCase() === t ? u || !1 : u === t;
}
i && h.filter(t, e, !0);
},
">": function(e, t) {
var n, r = typeof t == "string", i = 0, s = e.length;
if (r && !c.test(t)) {
t = t.toLowerCase();
for (; i < s; i++) {
n = e[i];
if (n) {
var o = n.parentNode;
e[i] = o.nodeName.toLowerCase() === t ? o : !1;
}
}
} else {
for (; i < s; i++) n = e[i], n && (e[i] = r ? n.parentNode : n.parentNode === t);
r && h.filter(t, e, !0);
}
},
"": function(t, r, i) {
var o, u = s++, a = n;
typeof r == "string" && !c.test(r) && (r = r.toLowerCase(), o = r, a = e), a("parentNode", r, u, t, o, i);
},
"~": function(t, r, i) {
var o, u = s++, a = n;
typeof r == "string" && !c.test(r) && (r = r.toLowerCase(), o = r, a = e), a("previousSibling", r, u, t, o, i);
}
},
find: {
ID: function(e, t, n) {
if (typeof t.getElementById != "undefined" && !n) {
var r = t.getElementById(e[1]);
return r && r.parentNode ? [ r ] : [];
}
},
NAME: function(e, t) {
if (typeof t.getElementsByName != "undefined") {
var n = [], r = t.getElementsByName(e[1]);
for (var i = 0, s = r.length; i < s; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
return n.length === 0 ? null : n;
}
},
TAG: function(e, t) {
if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e[1]);
}
},
preFilter: {
CLASS: function(e, t, n, r, i, s) {
e = " " + e[1].replace(f, "") + " ";
if (s) return e;
for (var o = 0, u; (u = t[o]) != null; o++) u && (i ^ (u.className && (" " + u.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(u) : n && (t[o] = !1));
return !1;
},
ID: function(e) {
return e[1].replace(f, "");
},
TAG: function(e, t) {
return e[1].replace(f, "").toLowerCase();
},
CHILD: function(e) {
if (e[1] === "nth") {
e[2] || h.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0;
} else e[2] && h.error(e[0]);
return e[0] = s++, e;
},
ATTR: function(e, t, n, r, i, s) {
var o = e[1] = e[1].replace(f, "");
return !s && d.attrMap[o] && (e[1] = d.attrMap[o]), e[4] = (e[4] || e[5] || "").replace(f, ""), e[2] === "~=" && (e[4] = " " + e[4] + " "), e;
},
PSEUDO: function(e, t, n, i, s) {
if (e[1] === "not") {
if (!((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
var o = h.filter(e[3], t, n, !0 ^ s);
return n || i.push.apply(i, o), !1;
}
e[3] = h(e[3], null, null, t);
} else if (d.match.POS.test(e[0]) || d.match.CHILD.test(e[0])) return !0;
return e;
},
POS: function(e) {
return e.unshift(!0), e;
}
},
filters: {
enabled: function(e) {
return e.disabled === !1 && e.type !== "hidden";
},
disabled: function(e) {
return e.disabled === !0;
},
checked: function(e) {
return e.checked === !0;
},
selected: function(e) {
return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
},
parent: function(e) {
return !!e.firstChild;
},
empty: function(e) {
return !e.firstChild;
},
has: function(e, t, n) {
return !!h(n[3], e).length;
},
header: function(e) {
return /h\d/i.test(e.nodeName);
},
text: function(e) {
var t = e.getAttribute("type"), n = e.type;
return e.nodeName.toLowerCase() === "input" && "text" === n && (t === n || t === null);
},
radio: function(e) {
return e.nodeName.toLowerCase() === "input" && "radio" === e.type;
},
checkbox: function(e) {
return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type;
},
file: function(e) {
return e.nodeName.toLowerCase() === "input" && "file" === e.type;
},
password: function(e) {
return e.nodeName.toLowerCase() === "input" && "password" === e.type;
},
submit: function(e) {
var t = e.nodeName.toLowerCase();
return (t === "input" || t === "button") && "submit" === e.type;
},
image: function(e) {
return e.nodeName.toLowerCase() === "input" && "image" === e.type;
},
reset: function(e) {
var t = e.nodeName.toLowerCase();
return (t === "input" || t === "button") && "reset" === e.type;
},
button: function(e) {
var t = e.nodeName.toLowerCase();
return t === "input" && "button" === e.type || t === "button";
},
input: function(e) {
return /input|select|textarea|button/i.test(e.nodeName);
},
focus: function(e) {
return e === e.ownerDocument.activeElement;
}
},
setFilters: {
first: function(e, t) {
return t === 0;
},
last: function(e, t, n, r) {
return t === r.length - 1;
},
even: function(e, t) {
return t % 2 === 0;
},
odd: function(e, t) {
return t % 2 === 1;
},
lt: function(e, t, n) {
return t < n[3] - 0;
},
gt: function(e, t, n) {
return t > n[3] - 0;
},
nth: function(e, t, n) {
return n[3] - 0 === t;
},
eq: function(e, t, n) {
return n[3] - 0 === t;
}
},
filter: {
PSEUDO: function(e, t, n, r) {
var i = t[1], s = d.filters[i];
if (s) return s(e, n, t, r);
if (i === "contains") return (e.textContent || e.innerText || p([ e ]) || "").indexOf(t[3]) >= 0;
if (i === "not") {
var o = t[3];
for (var u = 0, a = o.length; u < a; u++) if (o[u] === e) return !1;
return !0;
}
h.error(i);
},
CHILD: function(e, t) {
var n, r, s, o, u, a, f, l = t[1], c = e;
switch (l) {
case "only":
case "first":
while (c = c.previousSibling) if (c.nodeType === 1) return !1;
if (l === "first") return !0;
c = e;
case "last":
while (c = c.nextSibling) if (c.nodeType === 1) return !1;
return !0;
case "nth":
n = t[2], r = t[3];
if (n === 1 && r === 0) return !0;
s = t[0], o = e.parentNode;
if (o && (o[i] !== s || !e.nodeIndex)) {
a = 0;
for (c = o.firstChild; c; c = c.nextSibling) c.nodeType === 1 && (c.nodeIndex = ++a);
o[i] = s;
}
return f = e.nodeIndex - r, n === 0 ? f === 0 : f % n === 0 && f / n >= 0;
}
},
ID: function(e, t) {
return e.nodeType === 1 && e.getAttribute("id") === t;
},
TAG: function(e, t) {
return t === "*" && e.nodeType === 1 || !!e.nodeName && e.nodeName.toLowerCase() === t;
},
CLASS: function(e, t) {
return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1;
},
ATTR: function(e, t) {
var n = t[1], r = h.attr ? h.attr(e, n) : d.attrHandle[n] ? d.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n), i = r + "", s = t[2], o = t[4];
return r == null ? s === "!=" : !s && h.attr ? r != null : s === "=" ? i === o : s === "*=" ? i.indexOf(o) >= 0 : s === "~=" ? (" " + i + " ").indexOf(o) >= 0 : o ? s === "!=" ? i !== o : s === "^=" ? i.indexOf(o) === 0 : s === "$=" ? i.substr(i.length - o.length) === o : s === "|=" ? i === o || i.substr(0, o.length + 1) === o + "-" : !1 : i && r !== !1;
},
POS: function(e, t, n, r) {
var i = t[2], s = d.setFilters[i];
if (s) return s(e, n, t, r);
}
}
}, v = d.match.POS, m = function(e, t) {
return "\\" + (t - 0 + 1);
};
for (var g in d.match) d.match[g] = new RegExp(d.match[g].source + /(?![^\[]*\])(?![^\(]*\))/.source), d.leftMatch[g] = new RegExp(/(^(?:.|\r|\n)*?)/.source + d.match[g].source.replace(/\\(\d+)/g, m));
d.match.globalPOS = v;
var y = function(e, t) {
return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e;
};
try {
Array.prototype.slice.call(_.documentElement.childNodes, 0)[0].nodeType;
} catch (b) {
y = function(e, t) {
var n = 0, r = t || [];
if (o.call(e) === "[object Array]") Array.prototype.push.apply(r, e); else if (typeof e.length == "number") for (var i = e.length; n < i; n++) r.push(e[n]); else for (; e[n]; n++) r.push(e[n]);
return r;
};
}
var w, E;
_.documentElement.compareDocumentPosition ? w = function(e, t) {
return e === t ? (u = !0, 0) : !e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition ? -1 : 1 : e.compareDocumentPosition(t) & 4 ? -1 : 1;
} : (w = function(e, t) {
if (e === t) return u = !0, 0;
if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
var n, r, i = [], s = [], o = e.parentNode, a = t.parentNode, f = o;
if (o === a) return E(e, t);
if (!o) return -1;
if (!a) return 1;
while (f) i.unshift(f), f = f.parentNode;
f = a;
while (f) s.unshift(f), f = f.parentNode;
n = i.length, r = s.length;
for (var l = 0; l < n && l < r; l++) if (i[l] !== s[l]) return E(i[l], s[l]);
return l === n ? E(e, s[l], -1) : E(i[l], t, 1);
}, E = function(e, t, n) {
if (e === t) return n;
var r = e.nextSibling;
while (r) {
if (r === t) return -1;
r = r.nextSibling;
}
return 1;
}), function() {
var e = _.createElement("div"), n = "script" + (new Date).getTime(), r = _.documentElement;
e.innerHTML = "<a name='" + n + "'/>", r.insertBefore(e, r.firstChild), _.getElementById(n) && (d.find.ID = function(e, n, r) {
if (typeof n.getElementById != "undefined" && !r) {
var i = n.getElementById(e[1]);
return i ? i.id === e[1] || typeof i.getAttributeNode != "undefined" && i.getAttributeNode("id").nodeValue === e[1] ? [ i ] : t : [];
}
}, d.filter.ID = function(e, t) {
var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
return e.nodeType === 1 && n && n.nodeValue === t;
}), r.removeChild(e), r = e = null;
}(), function() {
var e = _.createElement("div");
e.appendChild(_.createComment("")), e.getElementsByTagName("*").length > 0 && (d.find.TAG = function(e, t) {
var n = t.getElementsByTagName(e[1]);
if (e[1] === "*") {
var r = [];
for (var i = 0; n[i]; i++) n[i].nodeType === 1 && r.push(n[i]);
n = r;
}
return n;
}), e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute != "undefined" && e.firstChild.getAttribute("href") !== "#" && (d.attrHandle.href = function(e) {
return e.getAttribute("href", 2);
}), e = null;
}(), _.querySelectorAll && function() {
var e = h, t = _.createElement("div"), n = "__sizzle__";
t.innerHTML = "<p class='TEST'></p>";
if (t.querySelectorAll && t.querySelectorAll(".TEST").length === 0) return;
h = function(t, r, i, s) {
r = r || _;
if (!s && !h.isXML(r)) {
var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
if (o && (r.nodeType === 1 || r.nodeType === 9)) {
if (o[1]) return y(r.getElementsByTagName(t), i);
if (o[2] && d.find.CLASS && r.getElementsByClassName) return y(r.getElementsByClassName(o[2]), i);
}
if (r.nodeType === 9) {
if (t === "body" && r.body) return y([ r.body ], i);
if (o && o[3]) {
var u = r.getElementById(o[3]);
if (!u || !u.parentNode) return y([], i);
if (u.id === o[3]) return y([ u ], i);
}
try {
return y(r.querySelectorAll(t), i);
} catch (a) {}
} else if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
var f = r, l = r.getAttribute("id"), c = l || n, p = r.parentNode, v = /^\s*[+~]/.test(t);
l ? c = c.replace(/'/g, "\\$&") : r.setAttribute("id", c), v && p && (r = r.parentNode);
try {
if (!v || p) return y(r.querySelectorAll("[id='" + c + "'] " + t), i);
} catch (m) {} finally {
l || f.removeAttribute("id");
}
}
}
return e(t, r, i, s);
};
for (var r in e) h[r] = e[r];
t = null;
}(), function() {
var e = _.documentElement, t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
if (t) {
var n = !t.call(_.createElement("div"), "div"), r = !1;
try {
t.call(_.documentElement, "[test!='']:sizzle");
} catch (i) {
r = !0;
}
h.matchesSelector = function(e, i) {
i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
if (!h.isXML(e)) try {
if (r || !d.match.PSEUDO.test(i) && !/!=/.test(i)) {
var s = t.call(e, i);
if (s || !n || e.document && e.document.nodeType !== 11) return s;
}
} catch (o) {}
return h(i, null, null, [ e ]).length > 0;
};
}
}(), function() {
var e = _.createElement("div");
e.innerHTML = "<div class='test e'></div><div class='test'></div>";
if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0) return;
e.lastChild.className = "e";
if (e.getElementsByClassName("e").length === 1) return;
d.order.splice(1, 0, "CLASS"), d.find.CLASS = function(e, t, n) {
if (typeof t.getElementsByClassName != "undefined" && !n) return t.getElementsByClassName(e[1]);
}, e = null;
}(), _.documentElement.contains ? h.contains = function(e, t) {
return e !== t && (e.contains ? e.contains(t) : !0);
} : _.documentElement.compareDocumentPosition ? h.contains = function(e, t) {
return !!(e.compareDocumentPosition(t) & 16);
} : h.contains = function() {
return !1;
}, h.isXML = function(e) {
var t = (e ? e.ownerDocument || e : 0).documentElement;
return t ? t.nodeName !== "HTML" : !1;
};
var S = function(e, t, n) {
var r, i = [], s = "", o = t.nodeType ? [ t ] : t;
while (r = d.match.PSEUDO.exec(e)) s += r[0], e = e.replace(d.match.PSEUDO, "");
e = d.relative[e] ? e + "*" : e;
for (var u = 0, a = o.length; u < a; u++) h(e, o[u], i, n);
return h.filter(s, i);
};
h.attr = H.attr, h.selectors.attrMap = {}, H.find = h, H.expr = h.selectors, H.expr[":"] = H.expr.filters, H.unique = h.uniqueSort, H.text = h.getText, H.isXMLDoc = h.isXML, H.contains = h.contains;
}();
var ut = /Until$/, at = /^(?:parents|prevUntil|prevAll)/, ft = /,/, lt = /^.[^:#\[\.,]*$/, ct = Array.prototype.slice, ht = H.expr.match.globalPOS, pt = {
children: !0,
contents: !0,
next: !0,
prev: !0
};
H.fn.extend({
find: function(e) {
var t = this, n, r;
if (typeof e != "string") return H(e).filter(function() {
for (n = 0, r = t.length; n < r; n++) if (H.contains(t[n], this)) return !0;
});
var i = this.pushStack("", "find", e), s, o, u;
for (n = 0, r = this.length; n < r; n++) {
s = i.length, H.find(e, this[n], i);
if (n > 0) for (o = s; o < i.length; o++) for (u = 0; u < s; u++) if (i[u] === i[o]) {
i.splice(o--, 1);
break;
}
}
return i;
},
has: function(e) {
var t = H(e);
return this.filter(function() {
for (var e = 0, n = t.length; e < n; e++) if (H.contains(this, t[e])) return !0;
});
},
not: function(e) {
return this.pushStack(f(this, e, !1), "not", e);
},
filter: function(e) {
return this.pushStack(f(this, e, !0), "filter", e);
},
is: function(e) {
return !!e && (typeof e == "string" ? ht.test(e) ? H(e, this.context).index(this[0]) >= 0 : H.filter(e, this).length > 0 : this.filter(e).length > 0);
},
closest: function(e, t) {
var n = [], r, i, s = this[0];
if (H.isArray(e)) {
var o = 1;
while (s && s.ownerDocument && s !== t) {
for (r = 0; r < e.length; r++) H(s).is(e[r]) && n.push({
selector: e[r],
elem: s,
level: o
});
s = s.parentNode, o++;
}
return n;
}
var u = ht.test(e) || typeof e != "string" ? H(e, t || this.context) : 0;
for (r = 0, i = this.length; r < i; r++) {
s = this[r];
while (s) {
if (u ? u.index(s) > -1 : H.find.matchesSelector(s, e)) {
n.push(s);
break;
}
s = s.parentNode;
if (!s || !s.ownerDocument || s === t || s.nodeType === 11) break;
}
}
return n = n.length > 1 ? H.unique(n) : n, this.pushStack(n, "closest", e);
},
index: function(e) {
return e ? typeof e == "string" ? H.inArray(this[0], H(e)) : H.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
},
add: function(e, t) {
var n = typeof e == "string" ? H(e, t) : H.makeArray(e && e.nodeType ? [ e ] : e), r = H.merge(this.get(), n);
return this.pushStack(a(n[0]) || a(r[0]) ? r : H.unique(r));
},
andSelf: function() {
return this.add(this.prevObject);
}
}), H.each({
parent: function(e) {
var t = e.parentNode;
return t && t.nodeType !== 11 ? t : null;
},
parents: function(e) {
return H.dir(e, "parentNode");
},
parentsUntil: function(e, t, n) {
return H.dir(e, "parentNode", n);
},
next: function(e) {
return H.nth(e, 2, "nextSibling");
},
prev: function(e) {
return H.nth(e, 2, "previousSibling");
},
nextAll: function(e) {
return H.dir(e, "nextSibling");
},
prevAll: function(e) {
return H.dir(e, "previousSibling");
},
nextUntil: function(e, t, n) {
return H.dir(e, "nextSibling", n);
},
prevUntil: function(e, t, n) {
return H.dir(e, "previousSibling", n);
},
siblings: function(e) {
return H.sibling((e.parentNode || {}).firstChild, e);
},
children: function(e) {
return H.sibling(e.firstChild);
},
contents: function(e) {
return H.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : H.makeArray(e.childNodes);
}
}, function(e, t) {
H.fn[e] = function(n, r) {
var i = H.map(this, t, n);
return ut.test(e) || (r = n), r && typeof r == "string" && (i = H.filter(r, i)), i = this.length > 1 && !pt[e] ? H.unique(i) : i, (this.length > 1 || ft.test(r)) && at.test(e) && (i = i.reverse()), this.pushStack(i, e, ct.call(arguments).join(","));
};
}), H.extend({
filter: function(e, t, n) {
return n && (e = ":not(" + e + ")"), t.length === 1 ? H.find.matchesSelector(t[0], e) ? [ t[0] ] : [] : H.find.matches(e, t);
},
dir: function(e, n, r) {
var i = [], s = e[n];
while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !H(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
return i;
},
nth: function(e, t, n, r) {
t = t || 1;
var i = 0;
for (; e; e = e[n]) if (e.nodeType === 1 && ++i === t) break;
return e;
},
sibling: function(e, t) {
var n = [];
for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
return n;
}
});
var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", vt = / jQuery\d+="(?:\d+|null)"/g, mt = /^\s+/, gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, yt = /<([\w:]+)/, bt = /<tbody/i, wt = /<|&#?\w+;/, Et = /<(?:script|style)/i, St = /<(?:script|object|embed|option|style)/i, xt = new RegExp("<(?:" + dt + ")[\\s/>]", "i"), Tt = /checked\s*(?:[^=]|=\s*.checked.)/i, Nt = /\/(java|ecma)script/i, Ct = /^\s*<!(?:\[CDATA\[|\-\-)/, kt = {
option: [ 1, "<select multiple='multiple'>", "</select>" ],
legend: [ 1, "<fieldset>", "</fieldset>" ],
thead: [ 1, "<table>", "</table>" ],
tr: [ 2, "<table><tbody>", "</tbody></table>" ],
td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
area: [ 1, "<map>", "</map>" ],
_default: [ 0, "", "" ]
}, Lt = l(_);
kt.optgroup = kt.option, kt.tbody = kt.tfoot = kt.colgroup = kt.caption = kt.thead, kt.th = kt.td, H.support.htmlSerialize || (kt._default = [ 1, "div<div>", "</div>" ]), H.fn.extend({
text: function(e) {
return H.access(this, function(e) {
return e === t ? H.text(this) : this.empty().append((this[0] && this[0].ownerDocument || _).createTextNode(e));
}, null, e, arguments.length);
},
wrapAll: function(e) {
if (H.isFunction(e)) return this.each(function(t) {
H(this).wrapAll(e.call(this, t));
});
if (this[0]) {
var t = H(e, this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
var e = this;
while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
return e;
}).append(this);
}
return this;
},
wrapInner: function(e) {
return H.isFunction(e) ? this.each(function(t) {
H(this).wrapInner(e.call(this, t));
}) : this.each(function() {
var t = H(this), n = t.contents();
n.length ? n.wrapAll(e) : t.append(e);
});
},
wrap: function(e) {
var t = H.isFunction(e);
return this.each(function(n) {
H(this).wrapAll(t ? e.call(this, n) : e);
});
},
unwrap: function() {
return this.parent().each(function() {
H.nodeName(this, "body") || H(this).replaceWith(this.childNodes);
}).end();
},
append: function() {
return this.domManip(arguments, !0, function(e) {
this.nodeType === 1 && this.appendChild(e);
});
},
prepend: function() {
return this.domManip(arguments, !0, function(e) {
this.nodeType === 1 && this.insertBefore(e, this.firstChild);
});
},
before: function() {
if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
this.parentNode.insertBefore(e, this);
});
if (arguments.length) {
var e = H.clean(arguments);
return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments);
}
},
after: function() {
if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
this.parentNode.insertBefore(e, this.nextSibling);
});
if (arguments.length) {
var e = this.pushStack(this, "after", arguments);
return e.push.apply(e, H.clean(arguments)), e;
}
},
remove: function(e, t) {
for (var n = 0, r; (r = this[n]) != null; n++) if (!e || H.filter(e, [ r ]).length) !t && r.nodeType === 1 && (H.cleanData(r.getElementsByTagName("*")), H.cleanData([ r ])), r.parentNode && r.parentNode.removeChild(r);
return this;
},
empty: function() {
for (var e = 0, t; (t = this[e]) != null; e++) {
t.nodeType === 1 && H.cleanData(t.getElementsByTagName("*"));
while (t.firstChild) t.removeChild(t.firstChild);
}
return this;
},
clone: function(e, t) {
return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
return H.clone(this, e, t);
});
},
html: function(e) {
return H.access(this, function(e) {
var n = this[0] || {}, r = 0, i = this.length;
if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(vt, "") : null;
if (typeof e == "string" && !Et.test(e) && (H.support.leadingWhitespace || !mt.test(e)) && !kt[(yt.exec(e) || [ "", "" ])[1].toLowerCase()]) {
e = e.replace(gt, "<$1></$2>");
try {
for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (H.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
n = 0;
} catch (s) {}
}
n && this.empty().append(e);
}, null, e, arguments.length);
},
replaceWith: function(e) {
return this[0] && this[0].parentNode ? H.isFunction(e) ? this.each(function(t) {
var n = H(this), r = n.html();
n.replaceWith(e.call(this, t, r));
}) : (typeof e != "string" && (e = H(e).detach()), this.each(function() {
var t = this.nextSibling, n = this.parentNode;
H(this).remove(), t ? H(t).before(e) : H(n).append(e);
})) : this.length ? this.pushStack(H(H.isFunction(e) ? e() : e), "replaceWith", e) : this;
},
detach: function(e) {
return this.remove(e, !0);
},
domManip: function(e, n, r) {
var i, s, o, u, a = e[0], f = [];
if (!H.support.checkClone && arguments.length === 3 && typeof a == "string" && Tt.test(a)) return this.each(function() {
H(this).domManip(e, n, r, !0);
});
if (H.isFunction(a)) return this.each(function(i) {
var s = H(this);
e[0] = a.call(this, i, n ? s.html() : t), s.domManip(e, n, r);
});
if (this[0]) {
u = a && a.parentNode, H.support.parentNode && u && u.nodeType === 11 && u.childNodes.length === this.length ? i = {
fragment: u
} : i = H.buildFragment(e, this, f), o = i.fragment, o.childNodes.length === 1 ? s = o = o.firstChild : s = o.firstChild;
if (s) {
n = n && H.nodeName(s, "tr");
for (var l = 0, h = this.length, p = h - 1; l < h; l++) r.call(n ? c(this[l], s) : this[l], i.cacheable || h > 1 && l < p ? H.clone(o, !0, !0) : o);
}
f.length && H.each(f, function(e, t) {
t.src ? H.ajax({
type: "GET",
global: !1,
url: t.src,
async: !1,
dataType: "script"
}) : H.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ct, "")), t.parentNode && t.parentNode.removeChild(t);
});
}
return this;
}
}), H.buildFragment = function(e, t, n) {
var r, i, s, o, u = e[0];
return t && t[0] && (o = t[0].ownerDocument || t[0]), o.createDocumentFragment || (o = _), e.length === 1 && typeof u == "string" && u.length < 512 && o === _ && u.charAt(0) === "<" && !St.test(u) && (H.support.checkClone || !Tt.test(u)) && (H.support.html5Clone || !xt.test(u)) && (i = !0, s = H.fragments[u], s && s !== 1 && (r = s)), r || (r = o.createDocumentFragment(), H.clean(e, o, r, n)), i && (H.fragments[u] = s ? r : 1), {
fragment: r,
cacheable: i
};
}, H.fragments = {}, H.each({
appendTo: "append",
prependTo: "prepend",
insertBefore: "before",
insertAfter: "after",
replaceAll: "replaceWith"
}, function(e, t) {
H.fn[e] = function(n) {
var r = [], i = H(n), s = this.length === 1 && this[0].parentNode;
if (s && s.nodeType === 11 && s.childNodes.length === 1 && i.length === 1) return i[t](this[0]), this;
for (var o = 0, u = i.length; o < u; o++) {
var a = (o > 0 ? this.clone(!0) : this).get();
H(i[o])[t](a), r = r.concat(a);
}
return this.pushStack(r, e, i.selector);
};
}), H.extend({
clone: function(e, t, n) {
var r, i, s, o = H.support.html5Clone || H.isXMLDoc(e) || !xt.test("<" + e.nodeName + ">") ? e.cloneNode(!0) : g(e);
if ((!H.support.noCloneEvent || !H.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !H.isXMLDoc(e)) {
p(e, o), r = d(e), i = d(o);
for (s = 0; r[s]; ++s) i[s] && p(r[s], i[s]);
}
if (t) {
h(e, o);
if (n) {
r = d(e), i = d(o);
for (s = 0; r[s]; ++s) h(r[s], i[s]);
}
}
return r = i = null, o;
},
clean: function(e, t, n, r) {
var i, s, o, u = [];
t = t || _, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || _);
for (var a = 0, f; (f = e[a]) != null; a++) {
typeof f == "number" && (f += "");
if (!f) continue;
if (typeof f == "string") if (!wt.test(f)) f = t.createTextNode(f); else {
f = f.replace(gt, "<$1></$2>");
var c = (yt.exec(f) || [ "", "" ])[1].toLowerCase(), h = kt[c] || kt._default, p = h[0], d = t.createElement("div"), v = Lt.childNodes, g;
t === _ ? Lt.appendChild(d) : l(t).appendChild(d), d.innerHTML = h[1] + f + h[2];
while (p--) d = d.lastChild;
if (!H.support.tbody) {
var y = bt.test(f), b = c === "table" && !y ? d.firstChild && d.firstChild.childNodes : h[1] === "<table>" && !y ? d.childNodes : [];
for (o = b.length - 1; o >= 0; --o) H.nodeName(b[o], "tbody") && !b[o].childNodes.length && b[o].parentNode.removeChild(b[o]);
}
!H.support.leadingWhitespace && mt.test(f) && d.insertBefore(t.createTextNode(mt.exec(f)[0]), d.firstChild), f = d.childNodes, d && (d.parentNode.removeChild(d), v.length > 0 && (g = v[v.length - 1], g && g.parentNode && g.parentNode.removeChild(g)));
}
var w;
if (!H.support.appendChecked) if (f[0] && typeof (w = f.length) == "number") for (o = 0; o < w; o++) m(f[o]); else m(f);
f.nodeType ? u.push(f) : u = H.merge(u, f);
}
if (n) {
i = function(e) {
return !e.type || Nt.test(e.type);
};
for (a = 0; u[a]; a++) {
s = u[a];
if (r && H.nodeName(s, "script") && (!s.type || Nt.test(s.type))) r.push(s.parentNode ? s.parentNode.removeChild(s) : s); else {
if (s.nodeType === 1) {
var E = H.grep(s.getElementsByTagName("script"), i);
u.splice.apply(u, [ a + 1, 0 ].concat(E));
}
n.appendChild(s);
}
}
}
return u;
},
cleanData: function(e) {
var t, n, r = H.cache, i = H.event.special, s = H.support.deleteExpando;
for (var o = 0, u; (u = e[o]) != null; o++) {
if (u.nodeName && H.noData[u.nodeName.toLowerCase()]) continue;
n = u[H.expando];
if (n) {
t = r[n];
if (t && t.events) {
for (var a in t.events) i[a] ? H.event.remove(u, a) : H.removeEvent(u, a, t.handle);
t.handle && (t.handle.elem = null);
}
s ? delete u[H.expando] : u.removeAttribute && u.removeAttribute(H.expando), delete r[n];
}
}
}
});
var At = /alpha\([^)]*\)/i, Ot = /opacity=([^)]*)/, Mt = /([A-Z]|^ms)/g, _t = /^[\-+]?(?:\d*\.)?\d+$/i, Dt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, Pt = /^([\-+])=([\-+.\de]+)/, Ht = /^margin/, Bt = {
position: "absolute",
visibility: "hidden",
display: "block"
}, jt = [ "Top", "Right", "Bottom", "Left" ], Ft, It, qt;
H.fn.css = function(e, n) {
return H.access(this, function(e, n, r) {
return r !== t ? H.style(e, n, r) : H.css(e, n);
}, e, n, arguments.length > 1);
}, H.extend({
cssHooks: {
opacity: {
get: function(e, t) {
if (t) {
var n = Ft(e, "opacity");
return n === "" ? "1" : n;
}
return e.style.opacity;
}
}
},
cssNumber: {
fillOpacity: !0,
fontWeight: !0,
lineHeight: !0,
opacity: !0,
orphans: !0,
widows: !0,
zIndex: !0,
zoom: !0
},
cssProps: {
"float": H.support.cssFloat ? "cssFloat" : "styleFloat"
},
style: function(e, n, r, i) {
if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
var s, o, u = H.camelCase(n), a = e.style, f = H.cssHooks[u];
n = H.cssProps[u] || u;
if (r === t) return f && "get" in f && (s = f.get(e, !1, i)) !== t ? s : a[n];
o = typeof r, o === "string" && (s = Pt.exec(r)) && (r = +(s[1] + 1) * +s[2] + parseFloat(H.css(e, n)), o = "number");
if (r == null || o === "number" && isNaN(r)) return;
o === "number" && !H.cssNumber[u] && (r += "px");
if (!f || !("set" in f) || (r = f.set(e, r)) !== t) try {
a[n] = r;
} catch (l) {}
},
css: function(e, n, r) {
var i, s;
n = H.camelCase(n), s = H.cssHooks[n], n = H.cssProps[n] || n, n === "cssFloat" && (n = "float");
if (s && "get" in s && (i = s.get(e, !0, r)) !== t) return i;
if (Ft) return Ft(e, n);
},
swap: function(e, t, n) {
var r = {}, i, s;
for (s in t) r[s] = e.style[s], e.style[s] = t[s];
i = n.call(e);
for (s in t) e.style[s] = r[s];
return i;
}
}), H.curCSS = H.css, _.defaultView && _.defaultView.getComputedStyle && (It = function(e, t) {
var n, r, i, s, o = e.style;
return t = t.replace(Mt, "-$1").toLowerCase(), (r = e.ownerDocument.defaultView) && (i = r.getComputedStyle(e, null)) && (n = i.getPropertyValue(t), n === "" && !H.contains(e.ownerDocument.documentElement, e) && (n = H.style(e, t))), !H.support.pixelMargin && i && Ht.test(t) && Dt.test(n) && (s = o.width, o.width = n, n = i.width, o.width = s), n;
}), _.documentElement.currentStyle && (qt = function(e, t) {
var n, r, i, s = e.currentStyle && e.currentStyle[t], o = e.style;
return s == null && o && (i = o[t]) && (s = i), Dt.test(s) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = t === "fontSize" ? "1em" : s, s = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), s === "" ? "auto" : s;
}), Ft = It || qt, H.each([ "height", "width" ], function(e, t) {
H.cssHooks[t] = {
get: function(e, n, r) {
if (n) return e.offsetWidth !== 0 ? y(e, t, r) : H.swap(e, Bt, function() {
return y(e, t, r);
});
},
set: function(e, t) {
return _t.test(t) ? t + "px" : t;
}
};
}), H.support.opacity || (H.cssHooks.opacity = {
get: function(e, t) {
return Ot.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : "";
},
set: function(e, t) {
var n = e.style, r = e.currentStyle, i = H.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "", s = r && r.filter || n.filter || "";
n.zoom = 1;
if (t >= 1 && H.trim(s.replace(At, "")) === "") {
n.removeAttribute("filter");
if (r && !r.filter) return;
}
n.filter = At.test(s) ? s.replace(At, i) : s + " " + i;
}
}), H(function() {
H.support.reliableMarginRight || (H.cssHooks.marginRight = {
get: function(e, t) {
return H.swap(e, {
display: "inline-block"
}, function() {
return t ? Ft(e, "margin-right") : e.style.marginRight;
});
}
});
}), H.expr && H.expr.filters && (H.expr.filters.hidden = function(e) {
var t = e.offsetWidth, n = e.offsetHeight;
return t === 0 && n === 0 || !H.support.reliableHiddenOffsets && (e.style && e.style.display || H.css(e, "display")) === "none";
}, H.expr.filters.visible = function(e) {
return !H.expr.filters.hidden(e);
}), H.each({
margin: "",
padding: "",
border: "Width"
}, function(e, t) {
H.cssHooks[e + t] = {
expand: function(n) {
var r, i = typeof n == "string" ? n.split(" ") : [ n ], s = {};
for (r = 0; r < 4; r++) s[e + jt[r] + t] = i[r] || i[r - 2] || i[0];
return s;
}
};
});
var Rt = /%20/g, Ut = /\[\]$/, zt = /\r?\n/g, Wt = /#.*$/, Xt = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Vt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, $t = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Jt = /^(?:GET|HEAD)$/, Kt = /^\/\//, Qt = /\?/, Gt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Yt = /^(?:select|textarea)/i, Zt = /\s+/, en = /([?&])_=[^&]*/, tn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, nn = H.fn.load, rn = {}, sn = {}, on, un, an = [ "*/" ] + [ "*" ];
try {
on = P.href;
} catch (fn) {
on = _.createElement("a"), on.href = "", on = on.href;
}
un = tn.exec(on.toLowerCase()) || [], H.fn.extend({
load: function(e, n, r) {
if (typeof e != "string" && nn) return nn.apply(this, arguments);
if (!this.length) return this;
var i = e.indexOf(" ");
if (i >= 0) {
var s = e.slice(i, e.length);
e = e.slice(0, i);
}
var o = "GET";
n && (H.isFunction(n) ? (r = n, n = t) : typeof n == "object" && (n = H.param(n, H.ajaxSettings.traditional), o = "POST"));
var u = this;
return H.ajax({
url: e,
type: o,
dataType: "html",
data: n,
complete: function(e, t, n) {
n = e.responseText, e.isResolved() && (e.done(function(e) {
n = e;
}), u.html(s ? H("<div>").append(n.replace(Gt, "")).find(s) : n)), r && u.each(r, [ n, t, e ]);
}
}), this;
},
serialize: function() {
return H.param(this.serializeArray());
},
serializeArray: function() {
return this.map(function() {
return this.elements ? H.makeArray(this.elements) : this;
}).filter(function() {
return this.name && !this.disabled && (this.checked || Yt.test(this.nodeName) || Vt.test(this.type));
}).map(function(e, t) {
var n = H(this).val();
return n == null ? null : H.isArray(n) ? H.map(n, function(e, n) {
return {
name: t.name,
value: e.replace(zt, "\r\n")
};
}) : {
name: t.name,
value: n.replace(zt, "\r\n")
};
}).get();
}
}), H.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
H.fn[t] = function(e) {
return this.on(t, e);
};
}), H.each([ "get", "post" ], function(e, n) {
H[n] = function(e, r, i, s) {
return H.isFunction(r) && (s = s || i, i = r, r = t), H.ajax({
type: n,
url: e,
data: r,
success: i,
dataType: s
});
};
}), H.extend({
getScript: function(e, n) {
return H.get(e, t, n, "script");
},
getJSON: function(e, t, n) {
return H.get(e, t, n, "json");
},
ajaxSetup: function(e, t) {
return t ? E(e, H.ajaxSettings) : (t = e, e = H.ajaxSettings), E(e, t), e;
},
ajaxSettings: {
url: on,
isLocal: $t.test(un[1]),
global: !0,
type: "GET",
contentType: "application/x-www-form-urlencoded; charset=UTF-8",
processData: !0,
async: !0,
accepts: {
xml: "application/xml, text/xml",
html: "text/html",
text: "text/plain",
json: "application/json, text/javascript",
"*": an
},
contents: {
xml: /xml/,
html: /html/,
json: /json/
},
responseFields: {
xml: "responseXML",
text: "responseText"
},
converters: {
"* text": e.String,
"text html": !0,
"text json": H.parseJSON,
"text xml": H.parseXML
},
flatOptions: {
context: !0,
url: !0
}
},
ajaxPrefilter: b(rn),
ajaxTransport: b(sn),
ajax: function(e, n) {
function r(e, n, r, c) {
if (y === 2) return;
y = 2, m && clearTimeout(m), v = t, p = c || "", S.readyState = e > 0 ? 4 : 0;
var h, d, g, w = n, E = r ? x(i, S, r) : t, N, C;
if (e >= 200 && e < 300 || e === 304) {
if (i.ifModified) {
if (N = S.getResponseHeader("Last-Modified")) H.lastModified[l] = N;
if (C = S.getResponseHeader("Etag")) H.etag[l] = C;
}
if (e === 304) w = "notmodified", h = !0; else try {
d = T(i, E), w = "success", h = !0;
} catch (k) {
w = "parsererror", g = k;
}
} else {
g = w;
if (!w || e) w = "error", e < 0 && (e = 0);
}
S.status = e, S.statusText = "" + (n || w), h ? u.resolveWith(s, [ d, w, S ]) : u.rejectWith(s, [ S, w, g ]), S.statusCode(f), f = t, b && o.trigger("ajax" + (h ? "Success" : "Error"), [ S, i, h ? d : g ]), a.fireWith(s, [ S, w ]), b && (o.trigger("ajaxComplete", [ S, i ]), --H.active || H.event.trigger("ajaxStop"));
}
typeof e == "object" && (n = e, e = t), n = n || {};
var i = H.ajaxSetup({}, n), s = i.context || i, o = s !== i && (s.nodeType || s instanceof H) ? H(s) : H.event, u = H.Deferred(), a = H.Callbacks("once memory"), f = i.statusCode || {}, l, c = {}, h = {}, p, d, v, m, g, y = 0, b, E, S = {
readyState: 0,
setRequestHeader: function(e, t) {
if (!y) {
var n = e.toLowerCase();
e = h[n] = h[n] || e, c[e] = t;
}
return this;
},
getAllResponseHeaders: function() {
return y === 2 ? p : null;
},
getResponseHeader: function(e) {
var n;
if (y === 2) {
if (!d) {
d = {};
while (n = Xt.exec(p)) d[n[1].toLowerCase()] = n[2];
}
n = d[e.toLowerCase()];
}
return n === t ? null : n;
},
overrideMimeType: function(e) {
return y || (i.mimeType = e), this;
},
abort: function(e) {
return e = e || "abort", v && v.abort(e), r(0, e), this;
}
};
u.promise(S), S.success = S.done, S.error = S.fail, S.complete = a.add, S.statusCode = function(e) {
if (e) {
var t;
if (y < 2) for (t in e) f[t] = [ f[t], e[t] ]; else t = e[S.status], S.then(t, t);
}
return this;
}, i.url = ((e || i.url) + "").replace(Wt, "").replace(Kt, un[1] + "//"), i.dataTypes = H.trim(i.dataType || "*").toLowerCase().split(Zt), i.crossDomain == null && (g = tn.exec(i.url.toLowerCase()), i.crossDomain = !(!g || g[1] == un[1] && g[2] == un[2] && (g[3] || (g[1] === "http:" ? 80 : 443)) == (un[3] || (un[1] === "http:" ? 80 : 443)))), i.data && i.processData && typeof i.data != "string" && (i.data = H.param(i.data, i.traditional)), w(rn, i, n, S);
if (y === 2) return !1;
b = i.global, i.type = i.type.toUpperCase(), i.hasContent = !Jt.test(i.type), b && H.active++ === 0 && H.event.trigger("ajaxStart");
if (!i.hasContent) {
i.data && (i.url += (Qt.test(i.url) ? "&" : "?") + i.data, delete i.data), l = i.url;
if (i.cache === !1) {
var N = H.now(), C = i.url.replace(en, "$1_=" + N);
i.url = C + (C === i.url ? (Qt.test(i.url) ? "&" : "?") + "_=" + N : "");
}
}
(i.data && i.hasContent && i.contentType !== !1 || n.contentType) && S.setRequestHeader("Content-Type", i.contentType), i.ifModified && (l = l || i.url, H.lastModified[l] && S.setRequestHeader("If-Modified-Since", H.lastModified[l]), H.etag[l] && S.setRequestHeader("If-None-Match", H.etag[l])), S.setRequestHeader("Accept", i.dataTypes[0] && i.accepts[i.dataTypes[0]] ? i.accepts[i.dataTypes[0]] + (i.dataTypes[0] !== "*" ? ", " + an + "; q=0.01" : "") : i.accepts["*"]);
for (E in i.headers) S.setRequestHeader(E, i.headers[E]);
if (!i.beforeSend || i.beforeSend.call(s, S, i) !== !1 && y !== 2) {
for (E in {
success: 1,
error: 1,
complete: 1
}) S[E](i[E]);
v = w(sn, i, n, S);
if (!v) r(-1, "No Transport"); else {
S.readyState = 1, b && o.trigger("ajaxSend", [ S, i ]), i.async && i.timeout > 0 && (m = setTimeout(function() {
S.abort("timeout");
}, i.timeout));
try {
y = 1, v.send(c, r);
} catch (k) {
if (!(y < 2)) throw k;
r(-1, k);
}
}
return S;
}
return S.abort(), !1;
},
param: function(e, n) {
var r = [], i = function(e, t) {
t = H.isFunction(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
};
n === t && (n = H.ajaxSettings.traditional);
if (H.isArray(e) || e.jquery && !H.isPlainObject(e)) H.each(e, function() {
i(this.name, this.value);
}); else for (var s in e) S(s, e[s], n, i);
return r.join("&").replace(Rt, "+");
}
}), H.extend({
active: 0,
lastModified: {},
etag: {}
});
var ln = H.now(), cn = /(\=)\?(&|$)|\?\?/i;
H.ajaxSetup({
jsonp: "callback",
jsonpCallback: function() {
return H.expando + "_" + ln++;
}
}), H.ajaxPrefilter("json jsonp", function(t, n, r) {
var i = typeof t.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(t.contentType);
if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (cn.test(t.url) || i && cn.test(t.data))) {
var s, o = t.jsonpCallback = H.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u = e[o], a = t.url, f = t.data, l = "$1" + o + "$2";
return t.jsonp !== !1 && (a = a.replace(cn, l), t.url === a && (i && (f = f.replace(cn, l)), t.data === f && (a += (/\?/.test(a) ? "&" : "?") + t.jsonp + "=" + o))), t.url = a, t.data = f, e[o] = function(e) {
s = [ e ];
}, r.always(function() {
e[o] = u, s && H.isFunction(u) && e[o](s[0]);
}), t.converters["script json"] = function() {
return s || H.error(o + " was not called"), s[0];
}, t.dataTypes[0] = "json", "script";
}
}), H.ajaxSetup({
accepts: {
script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},
contents: {
script: /javascript|ecmascript/
},
converters: {
"text script": function(e) {
return H.globalEval(e), e;
}
}
}), H.ajaxPrefilter("script", function(e) {
e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
}), H.ajaxTransport("script", function(e) {
if (e.crossDomain) {
var n, r = _.head || _.getElementsByTagName("head")[0] || _.documentElement;
return {
send: function(i, s) {
n = _.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || s(200, "success");
}, r.insertBefore(n, r.firstChild);
},
abort: function() {
n && n.onload(0, 1);
}
};
}
});
var hn = e.ActiveXObject ? function() {
for (var e in dn) dn[e](0, 1);
} : !1, pn = 0, dn;
H.ajaxSettings.xhr = e.ActiveXObject ? function() {
return !this.isLocal && N() || C();
} : N, function(e) {
H.extend(H.support, {
ajax: !!e,
cors: !!e && "withCredentials" in e
});
}(H.ajaxSettings.xhr()), H.support.ajax && H.ajaxTransport(function(n) {
if (!n.crossDomain || H.support.cors) {
var r;
return {
send: function(i, s) {
var o = n.xhr(), u, a;
n.username ? o.open(n.type, n.url, n.async, n.username, n.password) : o.open(n.type, n.url, n.async);
if (n.xhrFields) for (a in n.xhrFields) o[a] = n.xhrFields[a];
n.mimeType && o.overrideMimeType && o.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
try {
for (a in i) o.setRequestHeader(a, i[a]);
} catch (f) {}
o.send(n.hasContent && n.data || null), r = function(e, i) {
var a, f, l, c, h;
try {
if (r && (i || o.readyState === 4)) {
r = t, u && (o.onreadystatechange = H.noop, hn && delete dn[u]);
if (i) o.readyState !== 4 && o.abort(); else {
a = o.status, l = o.getAllResponseHeaders(), c = {}, h = o.responseXML, h && h.documentElement && (c.xml = h);
try {
c.text = o.responseText;
} catch (e) {}
try {
f = o.statusText;
} catch (p) {
f = "";
}
!a && n.isLocal && !n.crossDomain ? a = c.text ? 200 : 404 : a === 1223 && (a = 204);
}
}
} catch (d) {
i || s(-1, d);
}
c && s(a, f, c, l);
}, !n.async || o.readyState === 4 ? r() : (u = ++pn, hn && (dn || (dn = {}, H(e).unload(hn)), dn[u] = r), o.onreadystatechange = r);
},
abort: function() {
r && r(0, 1);
}
};
}
});
var vn = {}, mn, gn, yn = /^(?:toggle|show|hide)$/, bn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, wn, En = [ [ "height", "marginTop", "marginBottom", "paddingTop", "paddingBottom" ], [ "width", "marginLeft", "marginRight", "paddingLeft", "paddingRight" ], [ "opacity" ] ], Sn;
H.fn.extend({
show: function(e, t, n) {
var r, i;
if (e || e === 0) return this.animate(A("show", 3), e, t, n);
for (var s = 0, o = this.length; s < o; s++) r = this[s], r.style && (i = r.style.display, !H._data(r, "olddisplay") && i === "none" && (i = r.style.display = ""), (i === "" && H.css(r, "display") === "none" || !H.contains(r.ownerDocument.documentElement, r)) && H._data(r, "olddisplay", O(r.nodeName)));
for (s = 0; s < o; s++) {
r = this[s];
if (r.style) {
i = r.style.display;
if (i === "" || i === "none") r.style.display = H._data(r, "olddisplay") || "";
}
}
return this;
},
hide: function(e, t, n) {
if (e || e === 0) return this.animate(A("hide", 3), e, t, n);
var r, i, s = 0, o = this.length;
for (; s < o; s++) r = this[s], r.style && (i = H.css(r, "display"), i !== "none" && !H._data(r, "olddisplay") && H._data(r, "olddisplay", i));
for (s = 0; s < o; s++) this[s].style && (this[s].style.display = "none");
return this;
},
_toggle: H.fn.toggle,
toggle: function(e, t, n) {
var r = typeof e == "boolean";
return H.isFunction(e) && H.isFunction(t) ? this._toggle.apply(this, arguments) : e == null || r ? this.each(function() {
var t = r ? e : H(this).is(":hidden");
H(this)[t ? "show" : "hide"]();
}) : this.animate(A("toggle", 3), e, t, n), this;
},
fadeTo: function(e, t, n, r) {
return this.filter(":hidden").css("opacity", 0).show().end().animate({
opacity: t
}, e, n, r);
},
animate: function(e, t, n, r) {
function i() {
s.queue === !1 && H._mark(this);
var t = H.extend({}, s), n = this.nodeType === 1, r = n && H(this).is(":hidden"), i, o, u, a, f, l, c, h, p, d, v;
t.animatedProperties = {};
for (u in e) {
i = H.camelCase(u), u !== i && (e[i] = e[u], delete e[u]);
if ((f = H.cssHooks[i]) && "expand" in f) {
l = f.expand(e[i]), delete e[i];
for (u in l) u in e || (e[u] = l[u]);
}
}
for (i in e) {
o = e[i], H.isArray(o) ? (t.animatedProperties[i] = o[1], o = e[i] = o[0]) : t.animatedProperties[i] = t.specialEasing && t.specialEasing[i] || t.easing || "swing";
if (o === "hide" && r || o === "show" && !r) return t.complete.call(this);
n && (i === "height" || i === "width") && (t.overflow = [ this.style.overflow, this.style.overflowX, this.style.overflowY ], H.css(this, "display") === "inline" && H.css(this, "float") === "none" && (!H.support.inlineBlockNeedsLayout || O(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1));
}
t.overflow != null && (this.style.overflow = "hidden");
for (u in e) a = new H.fx(this, t, u), o = e[u], yn.test(o) ? (v = H._data(this, "toggle" + u) || (o === "toggle" ? r ? "show" : "hide" : 0), v ? (H._data(this, "toggle" + u, v === "show" ? "hide" : "show"), a[v]()) : a[o]()) : (c = bn.exec(o), h = a.cur(), c ? (p = parseFloat(c[2]), d = c[3] || (H.cssNumber[u] ? "" : "px"), d !== "px" && (H.style(this, u, (p || 1) + d), h = (p || 1) / a.cur() * h, H.style(this, u, h + d)), c[1] && (p = (c[1] === "-=" ? -1 : 1) * p + h), a.custom(h, p, d)) : a.custom(h, o, ""));
return !0;
}
var s = H.speed(t, n, r);
return H.isEmptyObject(e) ? this.each(s.complete, [ !1 ]) : (e = H.extend({}, e), s.queue === !1 ? this.each(i) : this.queue(s.queue, i));
},
stop: function(e, n, r) {
return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
function t(e, t, n) {
var i = t[n];
H.removeData(e, n, !0), i.stop(r);
}
var n, i = !1, s = H.timers, o = H._data(this);
r || H._unmark(!0, this);
if (e == null) for (n in o) o[n] && o[n].stop && n.indexOf(".run") === n.length - 4 && t(this, o, n); else o[n = e + ".run"] && o[n].stop && t(this, o, n);
for (n = s.length; n--; ) s[n].elem === this && (e == null || s[n].queue === e) && (r ? s[n](!0) : s[n].saveState(), i = !0, s.splice(n, 1));
(!r || !i) && H.dequeue(this, e);
});
}
}), H.each({
slideDown: A("show", 1),
slideUp: A("hide", 1),
slideToggle: A("toggle", 1),
fadeIn: {
opacity: "show"
},
fadeOut: {
opacity: "hide"
},
fadeToggle: {
opacity: "toggle"
}
}, function(e, t) {
H.fn[e] = function(e, n, r) {
return this.animate(t, e, n, r);
};
}), H.extend({
speed: function(e, t, n) {
var r = e && typeof e == "object" ? H.extend({}, e) : {
complete: n || !n && t || H.isFunction(e) && e,
duration: e,
easing: n && t || t && !H.isFunction(t) && t
};
r.duration = H.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in H.fx.speeds ? H.fx.speeds[r.duration] : H.fx.speeds._default;
if (r.queue == null || r.queue === !0) r.queue = "fx";
return r.old = r.complete, r.complete = function(e) {
H.isFunction(r.old) && r.old.call(this), r.queue ? H.dequeue(this, r.queue) : e !== !1 && H._unmark(this);
}, r;
},
easing: {
linear: function(e) {
return e;
},
swing: function(e) {
return -Math.cos(e * Math.PI) / 2 + .5;
}
},
timers: [],
fx: function(e, t, n) {
this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {};
}
}), H.fx.prototype = {
update: function() {
this.options.step && this.options.step.call(this.elem, this.now, this), (H.fx.step[this.prop] || H.fx.step._default)(this);
},
cur: function() {
if (this.elem[this.prop] == null || !!this.elem.style && this.elem.style[this.prop] != null) {
var e, t = H.css(this.elem, this.prop);
return isNaN(e = parseFloat(t)) ? !t || t === "auto" ? 0 : t : e;
}
return this.elem[this.prop];
},
custom: function(e, n, r) {
function i(e) {
return s.step(e);
}
var s = this, o = H.fx;
this.startTime = Sn || k(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = r || this.unit || (H.cssNumber[this.prop] ? "" : "px"), i.queue = this.options.queue, i.elem = this.elem, i.saveState = function() {
H._data(s.elem, "fxshow" + s.prop) === t && (s.options.hide ? H._data(s.elem, "fxshow" + s.prop, s.start) : s.options.show && H._data(s.elem, "fxshow" + s.prop, s.end));
}, i() && H.timers.push(i) && !wn && (wn = setInterval(o.tick, o.interval));
},
show: function() {
var e = H._data(this.elem, "fxshow" + this.prop);
this.options.orig[this.prop] = e || H.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), H(this.elem).show();
},
hide: function() {
this.options.orig[this.prop] = H._data(this.elem, "fxshow" + this.prop) || H.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0);
},
step: function(e) {
var t, n, r, i = Sn || k(), s = !0, o = this.elem, u = this.options;
if (e || i >= u.duration + this.startTime) {
this.now = this.end, this.pos = this.state = 1, this.update(), u.animatedProperties[this.prop] = !0;
for (t in u.animatedProperties) u.animatedProperties[t] !== !0 && (s = !1);
if (s) {
u.overflow != null && !H.support.shrinkWrapBlocks && H.each([ "", "X", "Y" ], function(e, t) {
o.style["overflow" + t] = u.overflow[e];
}), u.hide && H(o).hide();
if (u.hide || u.show) for (t in u.animatedProperties) H.style(o, t, u.orig[t]), H.removeData(o, "fxshow" + t, !0), H.removeData(o, "toggle" + t, !0);
r = u.complete, r && (u.complete = !1, r.call(o));
}
return !1;
}
return u.duration == Infinity ? this.now = i : (n = i - this.startTime, this.state = n / u.duration, this.pos = H.easing[u.animatedProperties[this.prop]](this.state, n, 0, 1, u.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0;
}
}, H.extend(H.fx, {
tick: function() {
var e, t = H.timers, n = 0;
for (; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
t.length || H.fx.stop();
},
interval: 13,
stop: function() {
clearInterval(wn), wn = null;
},
speeds: {
slow: 600,
fast: 200,
_default: 400
},
step: {
opacity: function(e) {
H.style(e.elem, "opacity", e.now);
},
_default: function(e) {
e.elem.style && e.elem.style[e.prop] != null ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now;
}
}
}), H.each(En.concat.apply([], En), function(e, t) {
t.indexOf("margin") && (H.fx.step[t] = function(e) {
H.style(e.elem, t, Math.max(0, e.now) + e.unit);
});
}), H.expr && H.expr.filters && (H.expr.filters.animated = function(e) {
return H.grep(H.timers, function(t) {
return e === t.elem;
}).length;
});
var xn, Tn = /^t(?:able|d|h)$/i, Nn = /^(?:body|html)$/i;
"getBoundingClientRect" in _.documentElement ? xn = function(e, t, n, r) {
try {
r = e.getBoundingClientRect();
} catch (i) {}
if (!r || !H.contains(n, e)) return r ? {
top: r.top,
left: r.left
} : {
top: 0,
left: 0
};
var s = t.body, o = M(t), u = n.clientTop || s.clientTop || 0, a = n.clientLeft || s.clientLeft || 0, f = o.pageYOffset || H.support.boxModel && n.scrollTop || s.scrollTop, l = o.pageXOffset || H.support.boxModel && n.scrollLeft || s.scrollLeft, c = r.top + f - u, h = r.left + l - a;
return {
top: c,
left: h
};
} : xn = function(e, t, n) {
var r, i = e.offsetParent, s = e, o = t.body, u = t.defaultView, a = u ? u.getComputedStyle(e, null) : e.currentStyle, f = e.offsetTop, l = e.offsetLeft;
while ((e = e.parentNode) && e !== o && e !== n) {
if (H.support.fixedPosition && a.position === "fixed") break;
r = u ? u.getComputedStyle(e, null) : e.currentStyle, f -= e.scrollTop, l -= e.scrollLeft, e === i && (f += e.offsetTop, l += e.offsetLeft, H.support.doesNotAddBorder && (!H.support.doesAddBorderForTableAndCells || !Tn.test(e.nodeName)) && (f += parseFloat(r.borderTopWidth) || 0, l += parseFloat(r.borderLeftWidth) || 0), s = i, i = e.offsetParent), H.support.subtractsBorderForOverflowNotVisible && r.overflow !== "visible" && (f += parseFloat(r.borderTopWidth) || 0, l += parseFloat(r.borderLeftWidth) || 0), a = r;
}
if (a.position === "relative" || a.position === "static") f += o.offsetTop, l += o.offsetLeft;
return H.support.fixedPosition && a.position === "fixed" && (f += Math.max(n.scrollTop, o.scrollTop), l += Math.max(n.scrollLeft, o.scrollLeft)), {
top: f,
left: l
};
}, H.fn.offset = function(e) {
if (arguments.length) return e === t ? this : this.each(function(t) {
H.offset.setOffset(this, e, t);
});
var n = this[0], r = n && n.ownerDocument;
return r ? n === r.body ? H.offset.bodyOffset(n) : xn(n, r, r.documentElement) : null;
}, H.offset = {
bodyOffset: function(e) {
var t = e.offsetTop, n = e.offsetLeft;
return H.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(H.css(e, "marginTop")) || 0, n += parseFloat(H.css(e, "marginLeft")) || 0), {
top: t,
left: n
};
},
setOffset: function(e, t, n) {
var r = H.css(e, "position");
r === "static" && (e.style.position = "relative");
var i = H(e), s = i.offset(), o = H.css(e, "top"), u = H.css(e, "left"), a = (r === "absolute" || r === "fixed") && H.inArray("auto", [ o, u ]) > -1, f = {}, l = {}, c, h;
a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), H.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f);
}
}, H.fn.extend({
position: function() {
if (!this[0]) return null;
var e = this[0], t = this.offsetParent(), n = this.offset(), r = Nn.test(t[0].nodeName) ? {
top: 0,
left: 0
} : t.offset();
return n.top -= parseFloat(H.css(e, "marginTop")) || 0, n.left -= parseFloat(H.css(e, "marginLeft")) || 0, r.top += parseFloat(H.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(H.css(t[0], "borderLeftWidth")) || 0, {
top: n.top - r.top,
left: n.left - r.left
};
},
offsetParent: function() {
return this.map(function() {
var e = this.offsetParent || _.body;
while (e && !Nn.test(e.nodeName) && H.css(e, "position") === "static") e = e.offsetParent;
return e;
});
}
}), H.each({
scrollLeft: "pageXOffset",
scrollTop: "pageYOffset"
}, function(e, n) {
var r = /Y/.test(n);
H.fn[e] = function(i) {
return H.access(this, function(e, i, s) {
var o = M(e);
if (s === t) return o ? n in o ? o[n] : H.support.boxModel && o.document.documentElement[i] || o.document.body[i] : e[i];
o ? o.scrollTo(r ? H(o).scrollLeft() : s, r ? s : H(o).scrollTop()) : e[i] = s;
}, e, i, arguments.length, null);
};
}), H.each({
Height: "height",
Width: "width"
}, function(e, n) {
var r = "client" + e, i = "scroll" + e, s = "offset" + e;
H.fn["inner" + e] = function() {
var e = this[0];
return e ? e.style ? parseFloat(H.css(e, n, "padding")) : this[n]() : null;
}, H.fn["outer" + e] = function(e) {
var t = this[0];
return t ? t.style ? parseFloat(H.css(t, n, e ? "margin" : "border")) : this[n]() : null;
}, H.fn[n] = function(e) {
return H.access(this, function(e, n, o) {
var u, a, f, l;
if (H.isWindow(e)) return u = e.document, a = u.documentElement[r], H.support.boxModel && a || u.body && u.body[r] || a;
if (e.nodeType === 9) return u = e.documentElement, u[r] >= u[i] ? u[r] : Math.max(e.body[i], u[i], e.body[s], u[s]);
if (o === t) return f = H.css(e, n), l = parseFloat(f), H.isNumeric(l) ? l : f;
H(e).css(n, o);
}, n, e, arguments.length, null);
};
}), e.jQuery = e.$ = H, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery-1.7.2.min.js", [], function(e, t, n) {
try {
return "use strict", H;
} catch (r) {
wx.jslog({
src: "jquery-1.7.2.min.js"
}, r);
}
});
})(window);
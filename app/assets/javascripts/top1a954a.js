define("common/lib/json.js", [], function(require, exports, module) {
try {
return typeof JSON != "object" && (JSON = {}), function() {
"use strict";
function f(e) {
return e < 10 ? "0" + e : e;
}
function quote(e) {
return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
var t = meta[e];
return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
}) + '"' : '"' + e + '"';
}
function str(e, t) {
var n, r, i, s, o = gap, u, a = t[e];
a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
switch (typeof a) {
case "string":
return quote(a);
case "number":
return isFinite(a) ? String(a) : "null";
case "boolean":
case "null":
return String(a);
case "object":
if (!a) return "null";
gap += indent, u = [];
if (Object.prototype.toString.apply(a) === "[object Array]") {
s = a.length;
for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i;
}
if (rep && typeof rep == "object") {
s = rep.length;
for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
} else for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i;
}
}
typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function(e) {
return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
return this.valueOf();
});
var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
"\b": "\\b",
"	": "\\t",
"\n": "\\n",
"\f": "\\f",
"\r": "\\r",
'"': '\\"',
"\\": "\\\\"
}, rep;
JSON.stringify2 = function(e, t, n) {
var r;
gap = "", indent = "";
if (typeof n == "number") for (r = 0; r < n; r += 1) indent += " "; else typeof n == "string" && (indent = n);
rep = t;
if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
"": e
});
throw new Error("JSON.stringify");
}, typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
function walk(e, t) {
var n, r, i = e[t];
if (i && typeof i == "object") for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
return reviver.call(e, t, i);
}
var j;
text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
}));
if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
"": j
}, "") : j;
throw new SyntaxError("JSON.parse");
});
}(), JSON;
} catch (e) {
wx.jslog({
src: "common/lib/json.js"
}, e);
}
});define("tpl/dialog.html.js", [], function(e, t, n) {
return '<div class="dialog_wrp" style="{if width}width:{width}px;{/if}{if height}height:{height}px;{/if};display:none;">\n  <div class="dialog" id="{id}">\n    <div class="dialog_hd">\n      <h3>{title}</h3>\n      <a href="javascript:;" class="pop_closed">关闭</a>\n    </div>\n    <div class="dialog_bd">\n      <div class="page_msg simple default {msg.msgClass}">\n        <div class="inner group">\n          <span class="msg_icon_wrapper"><i class="icon_msg {icon} "></i></span>\n          <div class="msg_content ">\n          {if msg.title}<h4>{=msg.title}</h4>{/if}\n          {if msg.text}<p>{=msg.text}</p>{/if}\n          </div>\n        </div>\n      </div>\n    </div> \n    <div class="dialog_ft">\n      {each buttons as bt index}\n      <a href="javascript:;" class="btn {bt.type} js_btn">{bt.text}</a>\n      {/each}\n    </div>\n  </div>\n</div>\n{if mask}<div class="mask"></div>{/if}\n\n';
});define("common/lib/jquery.ui.draggable.js", [], function(e, t, n) {
try {
(function(e, t) {
function n(t, n) {
var i, s, o, u = t.nodeName.toLowerCase();
return "area" === u ? (i = t.parentNode, s = i.name, !t.href || !s || i.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + s + "]")[0], !!o && r(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && r(t);
}
function r(t) {
return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
return e.css(this, "visibility") === "hidden";
}).length;
}
var i = 0, s = /^ui-id-\d+$/;
e.ui = e.ui || {}, e.extend(e.ui, {
version: "1.10.3"
}), e.fn.extend({
focus: function(t) {
return function(n, r) {
return typeof n == "number" ? this.each(function() {
var t = this;
setTimeout(function() {
e(t).focus(), r && r.call(t);
}, n);
}) : t.apply(this, arguments);
};
}(e.fn.focus),
scrollParent: function() {
var t;
return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
}).eq(0) : t = this.parents().filter(function() {
return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t;
},
zIndex: function(n) {
if (n !== t) return this.css("zIndex", n);
if (this.length) {
var r = e(this[0]), i, s;
while (r.length && r[0] !== document) {
i = r.css("position");
if (i === "absolute" || i === "relative" || i === "fixed") {
s = parseInt(r.css("zIndex"), 10);
if (!isNaN(s) && s !== 0) return s;
}
r = r.parent();
}
}
return 0;
},
uniqueId: function() {
return this.each(function() {
this.id || (this.id = "ui-id-" + ++i);
});
},
removeUniqueId: function() {
return this.each(function() {
s.test(this.id) && e(this).removeAttr("id");
});
}
}), e.extend(e.expr[":"], {
data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
return function(n) {
return !!e.data(n, t);
};
}) : function(t, n, r) {
return !!e.data(t, r[3]);
},
focusable: function(t) {
return n(t, !isNaN(e.attr(t, "tabindex")));
},
tabbable: function(t) {
var r = e.attr(t, "tabindex"), i = isNaN(r);
return (i || r >= 0) && n(t, !i);
}
}), e.extend(e.ui, {
plugin: {
add: function(t, n, r) {
var i, s = e.ui[t].prototype;
for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([ n, r[i] ]);
},
call: function(e, t, n) {
var r, i = e.plugins[t];
if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;
for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n);
}
},
hasScroll: function(t, n) {
if (e(t).css("overflow") === "hidden") return !1;
var r = n && n === "left" ? "scrollLeft" : "scrollTop", i = !1;
return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i);
}
});
})(jQuery), function(e, t) {
var n = 0, r = Array.prototype.slice, i = e.cleanData;
e.cleanData = function(t) {
for (var n = 0, r; (r = t[n]) != null; n++) try {
e(r).triggerHandler("remove");
} catch (s) {}
i(t);
}, e.widget = function(t, n, r) {
var i, s, o, u, a = {}, f = t.split(".")[0];
t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
return !!e.data(t, i);
}, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function(e, t) {
if (!this._createWidget) return new o(e, t);
arguments.length && this._createWidget(e, t);
}, e.extend(o, s, {
version: r.version,
_proto: e.extend({}, r),
_childConstructors: []
}), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, r) {
if (!e.isFunction(r)) {
a[t] = r;
return;
}
a[t] = function() {
var e = function() {
return n.prototype[t].apply(this, arguments);
}, i = function(e) {
return n.prototype[t].apply(this, e);
};
return function() {
var t = this._super, n = this._superApply, s;
return this._super = e, this._superApply = i, s = r.apply(this, arguments), this._super = t, this._superApply = n, s;
};
}();
}), o.prototype = e.widget.extend(u, {
widgetEventPrefix: s ? u.widgetEventPrefix : t
}, a, {
constructor: o,
namespace: f,
widgetName: t,
widgetFullName: i
}), s ? (e.each(s._childConstructors, function(t, n) {
var r = n.prototype;
e.widget(r.namespace + "." + r.widgetName, o, n._proto);
}), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o);
}, e.widget.extend = function(n) {
var i = r.call(arguments, 1), s = 0, o = i.length, u, a;
for (; s < o; s++) for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
return n;
}, e.widget.bridge = function(n, i) {
var s = i.prototype.widgetFullName || n;
e.fn[n] = function(o) {
var u = typeof o == "string", a = r.call(arguments, 1), f = this;
return o = !u && a.length ? e.widget.extend.apply(null, [ o ].concat(a)) : o, u ? this.each(function() {
var r, i = e.data(this, s);
if (!i) return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
if (!e.isFunction(i[o]) || o.charAt(0) === "_") return e.error("no such method '" + o + "' for " + n + " widget instance");
r = i[o].apply(i, a);
if (r !== i && r !== t) return f = r && r.jquery ? f.pushStack(r.get()) : r, !1;
}) : this.each(function() {
var t = e.data(this, s);
t ? t.option(o || {})._init() : e.data(this, s, new i(o, this));
}), f;
};
}, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
widgetName: "widget",
widgetEventPrefix: "",
defaultElement: "<div>",
options: {
disabled: !1,
create: null
},
_createWidget: function(t, r) {
r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
remove: function(e) {
e.target === r && this.destroy();
}
}), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
},
_getCreateOptions: e.noop,
_getCreateEventData: e.noop,
_create: e.noop,
_init: e.noop,
destroy: function() {
this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
},
_destroy: e.noop,
widget: function() {
return this.element;
},
option: function(n, r) {
var i = n, s, o, u;
if (arguments.length === 0) return e.widget.extend({}, this.options);
if (typeof n == "string") {
i = {}, s = n.split("."), n = s.shift();
if (s.length) {
o = i[n] = e.widget.extend({}, this.options[n]);
for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]];
n = s.pop();
if (r === t) return o[n] === t ? null : o[n];
o[n] = r;
} else {
if (r === t) return this.options[n] === t ? null : this.options[n];
i[n] = r;
}
}
return this._setOptions(i), this;
},
_setOptions: function(e) {
var t;
for (t in e) this._setOption(t, e[t]);
return this;
},
_setOption: function(e, t) {
return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this;
},
enable: function() {
return this._setOption("disabled", !1);
},
disable: function() {
return this._setOption("disabled", !0);
},
_on: function(t, n, r) {
var i, s = this;
typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
function u() {
if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return;
return (typeof o == "string" ? s[o] : o).apply(s, arguments);
}
typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
var a = r.match(/^(\w+)\s*(.*)$/), f = a[1] + s.eventNamespace, l = a[2];
l ? i.delegate(l, f, u) : n.bind(f, u);
});
},
_off: function(e, t) {
t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t);
},
_delay: function(e, t) {
function n() {
return (typeof e == "string" ? r[e] : e).apply(r, arguments);
}
var r = this;
return setTimeout(n, t || 0);
},
_hoverable: function(t) {
this.hoverable = this.hoverable.add(t), this._on(t, {
mouseenter: function(t) {
e(t.currentTarget).addClass("ui-state-hover");
},
mouseleave: function(t) {
e(t.currentTarget).removeClass("ui-state-hover");
}
});
},
_focusable: function(t) {
this.focusable = this.focusable.add(t), this._on(t, {
focusin: function(t) {
e(t.currentTarget).addClass("ui-state-focus");
},
focusout: function(t) {
e(t.currentTarget).removeClass("ui-state-focus");
}
});
},
_trigger: function(t, n, r) {
var i, s, o = this.options[t];
r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
if (s) for (i in s) i in n || (n[i] = s[i]);
return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [ n ].concat(r)) === !1 || n.isDefaultPrevented());
}
}, e.each({
show: "fadeIn",
hide: "fadeOut"
}, function(t, n) {
e.Widget.prototype["_" + t] = function(r, i, s) {
typeof i == "string" && (i = {
effect: i
});
var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
i = i || {}, typeof i == "number" && (i = {
duration: i
}), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
e(this)[t](), s && s.call(r[0]), n();
});
};
});
}(jQuery), function(e, t) {
var n = !1;
e(document).mouseup(function() {
n = !1;
}), e.widget("ui.mouse", {
version: "1.10.3",
options: {
cancel: "input,textarea,button,select,option",
distance: 1,
delay: 0
},
_mouseInit: function() {
var t = this;
this.element.bind("mousedown." + this.widgetName, function(e) {
return t._mouseDown(e);
}).bind("click." + this.widgetName, function(n) {
if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1;
}), this.started = !1;
},
_mouseDestroy: function() {
this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
},
_mouseDown: function(t) {
if (n) return;
this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
var r = this, i = t.which === 1, s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
if (!i || s || !this._mouseCapture(t)) return !0;
this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
r.mouseDelayMet = !0;
}, this.options.delay));
if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
this._mouseStarted = this._mouseStart(t) !== !1;
if (!this._mouseStarted) return t.preventDefault(), !0;
}
return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
return r._mouseMove(e);
}, this._mouseUpDelegate = function(e) {
return r._mouseUp(e);
}, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0;
},
_mouseMove: function(t) {
return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
},
_mouseUp: function(t) {
return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1;
},
_mouseDistanceMet: function(e) {
return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
},
_mouseDelayMet: function() {
return this.mouseDelayMet;
},
_mouseStart: function() {},
_mouseDrag: function() {},
_mouseStop: function() {},
_mouseCapture: function() {
return !0;
}
});
}(jQuery), function(e, t) {
e.widget("ui.draggable", e.ui.mouse, {
version: "1.10.3",
widgetEventPrefix: "drag",
options: {
addClasses: !0,
appendTo: "parent",
axis: !1,
connectToSortable: !1,
containment: !1,
cursor: "auto",
cursorAt: !1,
grid: !1,
handle: !1,
helper: "original",
iframeFix: !1,
opacity: !1,
refreshPositions: !1,
revert: !1,
revertDuration: 500,
scope: "default",
scroll: !0,
scrollSensitivity: 20,
scrollSpeed: 20,
snap: !1,
snapMode: "both",
snapTolerance: 20,
stack: !1,
zIndex: !1,
drag: null,
start: null,
stop: null
},
_create: function() {
this.options.helper === "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit();
},
_destroy: function() {
this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy();
},
_mouseCapture: function(t) {
var n = this.options;
return this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
width: this.offsetWidth + "px",
height: this.offsetHeight + "px",
position: "absolute",
opacity: "0.001",
zIndex: 1e3
}).css(e(this).offset()).appendTo("body");
}), !0) : !1);
},
_mouseStart: function(t) {
var n = this.options;
return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
top: this.offset.top - this.margins.top,
left: this.offset.left - this.margins.left
}, this.offset.scroll = !1, e.extend(this.offset, {
click: {
left: t.pageX - this.offset.left,
top: t.pageY - this.offset.top
},
parent: this._getParentOffset(),
relative: this._getRelativeOffset()
}), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0);
},
_mouseDrag: function(t, n) {
this.offsetParentCssPosition === "fixed" && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");
if (!n) {
var r = this._uiHash();
if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
this.position = r.position;
}
if (!this.options.axis || this.options.axis !== "y") this.helper[0].style.left = this.position.left + "px";
if (!this.options.axis || this.options.axis !== "x") this.helper[0].style.top = this.position.top + "px";
return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1;
},
_mouseStop: function(t) {
var n = this, r = !1;
return e.ui.ddmanager && !this.options.dropBehaviour && (r = e.ui.ddmanager.drop(this, t)), this.dropped && (r = this.dropped, this.dropped = !1), this.options.helper === "original" && !e.contains(this.element[0].ownerDocument, this.element[0]) ? !1 : (this.options.revert === "invalid" && !r || this.options.revert === "valid" && r || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, r) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
n._trigger("stop", t) !== !1 && n._clear();
}) : this._trigger("stop", t) !== !1 && this._clear(), !1);
},
_mouseUp: function(t) {
return e("div.ui-draggable-iframeFix").each(function() {
this.parentNode.removeChild(this);
}), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t);
},
cancel: function() {
return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this;
},
_getHandle: function(t) {
return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0;
},
_createHelper: function(t) {
var n = this.options, r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [ t ])) : n.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
return r.parents("body").length || r.appendTo(n.appendTo === "parent" ? this.element[0].parentNode : n.appendTo), r[0] !== this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"), r;
},
_adjustOffsetFromHelper: function(t) {
typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
left: +t[0],
top: +t[1] || 0
}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
},
_getParentOffset: function() {
var t = this.offsetParent.offset();
this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie) t = {
top: 0,
left: 0
};
return {
top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
};
},
_getRelativeOffset: function() {
if (this.cssPosition === "relative") {
var e = this.element.position();
return {
top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
};
}
return {
top: 0,
left: 0
};
},
_cacheMargins: function() {
this.margins = {
left: parseInt(this.element.css("marginLeft"), 10) || 0,
top: parseInt(this.element.css("marginTop"), 10) || 0,
right: parseInt(this.element.css("marginRight"), 10) || 0,
bottom: parseInt(this.element.css("marginBottom"), 10) || 0
};
},
_cacheHelperProportions: function() {
this.helperProportions = {
width: this.helper.outerWidth(),
height: this.helper.outerHeight()
};
},
_setContainment: function() {
var t, n, r, i = this.options;
if (!i.containment) {
this.containment = null;
return;
}
if (i.containment === "window") {
this.containment = [ e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];
return;
}
if (i.containment === "document") {
this.containment = [ 0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];
return;
}
if (i.containment.constructor === Array) {
this.containment = i.containment;
return;
}
i.containment === "parent" && (i.containment = this.helper[0].parentNode), n = e(i.containment), r = n[0];
if (!r) return;
t = n.css("overflow") !== "hidden", this.containment = [ (parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (t ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ], this.relative_container = n;
},
_convertPositionTo: function(t, n) {
n || (n = this.position);
var r = t === "absolute" ? 1 : -1, i = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
return this.offset.scroll || (this.offset.scroll = {
top: i.scrollTop(),
left: i.scrollLeft()
}), {
top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * r,
left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * r
};
},
_generatePosition: function(t) {
var n, r, i, s, o = this.options, u = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, a = t.pageX, f = t.pageY;
return this.offset.scroll || (this.offset.scroll = {
top: u.scrollTop(),
left: u.scrollLeft()
}), this.originalPosition && (this.containment && (this.relative_container ? (r = this.relative_container.offset(), n = [ this.containment[0] + r.left, this.containment[1] + r.top, this.containment[2] + r.left, this.containment[3] + r.top ]) : n = this.containment, t.pageX - this.offset.click.left < n[0] && (a = n[0] + this.offset.click.left), t.pageY - this.offset.click.top < n[1] && (f = n[1] + this.offset.click.top), t.pageX - this.offset.click.left > n[2] && (a = n[2] + this.offset.click.left), t.pageY - this.offset.click.top > n[3] && (f = n[3] + this.offset.click.top)), o.grid && (i = o.grid[1] ? this.originalPageY + Math.round((f - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, f = n ? i - this.offset.click.top >= n[1] || i - this.offset.click.top > n[3] ? i : i - this.offset.click.top >= n[1] ? i - o.grid[1] : i + o.grid[1] : i, s = o.grid[0] ? this.originalPageX + Math.round((a - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, a = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - o.grid[0] : s + o.grid[0] : s)), {
top: f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
};
},
_clear: function() {
this.helper.removeClass("ui-draggable-dragging"), this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1;
},
_trigger: function(t, n, r) {
return r = r || this._uiHash(), e.ui.plugin.call(this, t, [ n, r ]), t === "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r);
},
plugins: {},
_uiHash: function() {
return {
helper: this.helper,
position: this.position,
originalPosition: this.originalPosition,
offset: this.positionAbs
};
}
}), e.ui.plugin.add("draggable", "connectToSortable", {
start: function(t, n) {
var r = e(this).data("ui-draggable"), i = r.options, s = e.extend({}, n, {
item: r.element
});
r.sortables = [], e(i.connectToSortable).each(function() {
var n = e.data(this, "ui-sortable");
n && !n.options.disabled && (r.sortables.push({
instance: n,
shouldRevert: n.options.revert
}), n.refreshPositions(), n._trigger("activate", t, s));
});
},
stop: function(t, n) {
var r = e(this).data("ui-draggable"), i = e.extend({}, n, {
item: r.element
});
e.each(r.sortables, function() {
this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper === "original" && this.instance.currentItem.css({
top: "auto",
left: "auto"
})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i));
});
},
drag: function(t, n) {
var r = e(this).data("ui-draggable"), i = this;
e.each(r.sortables, function() {
var s = !1, o = this;
this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (s = !0, e.each(r.sortables, function() {
return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (s = !1), s;
})), s ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
return n.helper[0];
}, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1);
});
}
}), e.ui.plugin.add("draggable", "cursor", {
start: function() {
var t = e("body"), n = e(this).data("ui-draggable").options;
t.css("cursor") && (n._cursor = t.css("cursor")), t.css("cursor", n.cursor);
},
stop: function() {
var t = e(this).data("ui-draggable").options;
t._cursor && e("body").css("cursor", t._cursor);
}
}), e.ui.plugin.add("draggable", "opacity", {
start: function(t, n) {
var r = e(n.helper), i = e(this).data("ui-draggable").options;
r.css("opacity") && (i._opacity = r.css("opacity")), r.css("opacity", i.opacity);
},
stop: function(t, n) {
var r = e(this).data("ui-draggable").options;
r._opacity && e(n.helper).css("opacity", r._opacity);
}
}), e.ui.plugin.add("draggable", "scroll", {
start: function() {
var t = e(this).data("ui-draggable");
t.scrollParent[0] !== document && t.scrollParent[0].tagName !== "HTML" && (t.overflowOffset = t.scrollParent.offset());
},
drag: function(t) {
var n = e(this).data("ui-draggable"), r = n.options, i = !1;
if (n.scrollParent[0] !== document && n.scrollParent[0].tagName !== "HTML") {
if (!r.axis || r.axis !== "x") n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - n.overflowOffset.top < r.scrollSensitivity && (n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop - r.scrollSpeed);
if (!r.axis || r.axis !== "y") n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - n.overflowOffset.left < r.scrollSensitivity && (n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft - r.scrollSpeed);
} else {
if (!r.axis || r.axis !== "x") t.pageY - e(document).scrollTop() < r.scrollSensitivity ? i = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity && (i = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed));
if (!r.axis || r.axis !== "y") t.pageX - e(document).scrollLeft() < r.scrollSensitivity ? i = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity && (i = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed));
}
i !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t);
}
}), e.ui.plugin.add("draggable", "snap", {
start: function() {
var t = e(this).data("ui-draggable"), n = t.options;
t.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
var n = e(this), r = n.offset();
this !== t.element[0] && t.snapElements.push({
item: this,
width: n.outerWidth(),
height: n.outerHeight(),
top: r.top,
left: r.left
});
});
},
drag: function(t, n) {
var r, i, s, o, u, a, f, l, c, h, p = e(this).data("ui-draggable"), d = p.options, v = d.snapTolerance, m = n.offset.left, g = m + p.helperProportions.width, y = n.offset.top, b = y + p.helperProportions.height;
for (c = p.snapElements.length - 1; c >= 0; c--) {
u = p.snapElements[c].left, a = u + p.snapElements[c].width, f = p.snapElements[c].top, l = f + p.snapElements[c].height;
if (g < u - v || m > a + v || b < f - v || y > l + v || !e.contains(p.snapElements[c].item.ownerDocument, p.snapElements[c].item)) {
p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
snapItem: p.snapElements[c].item
})), p.snapElements[c].snapping = !1;
continue;
}
d.snapMode !== "inner" && (r = Math.abs(f - b) <= v, i = Math.abs(l - y) <= v, s = Math.abs(u - g) <= v, o = Math.abs(a - m) <= v, r && (n.position.top = p._convertPositionTo("relative", {
top: f - p.helperProportions.height,
left: 0
}).top - p.margins.top), i && (n.position.top = p._convertPositionTo("relative", {
top: l,
left: 0
}).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
top: 0,
left: u - p.helperProportions.width
}).left - p.margins.left), o && (n.position.left = p._convertPositionTo("relative", {
top: 0,
left: a
}).left - p.margins.left)), h = r || i || s || o, d.snapMode !== "outer" && (r = Math.abs(f - y) <= v, i = Math.abs(l - b) <= v, s = Math.abs(u - m) <= v, o = Math.abs(a - g) <= v, r && (n.position.top = p._convertPositionTo("relative", {
top: f,
left: 0
}).top - p.margins.top), i && (n.position.top = p._convertPositionTo("relative", {
top: l - p.helperProportions.height,
left: 0
}).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
top: 0,
left: u
}).left - p.margins.left), o && (n.position.left = p._convertPositionTo("relative", {
top: 0,
left: a - p.helperProportions.width
}).left - p.margins.left)), !p.snapElements[c].snapping && (r || i || s || o || h) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
snapItem: p.snapElements[c].item
})), p.snapElements[c].snapping = r || i || s || o || h;
}
}
}), e.ui.plugin.add("draggable", "stack", {
start: function() {
var t, n = this.data("ui-draggable").options, r = e.makeArray(e(n.stack)).sort(function(t, n) {
return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0);
});
if (!r.length) return;
t = parseInt(e(r[0]).css("zIndex"), 10) || 0, e(r).each(function(n) {
e(this).css("zIndex", t + n);
}), this.css("zIndex", t + r.length);
}
}), e.ui.plugin.add("draggable", "zIndex", {
start: function(t, n) {
var r = e(n.helper), i = e(this).data("ui-draggable").options;
r.css("zIndex") && (i._zIndex = r.css("zIndex")), r.css("zIndex", i.zIndex);
},
stop: function(t, n) {
var r = e(this).data("ui-draggable").options;
r._zIndex && e(n.helper).css("zIndex", r._zIndex);
}
});
}(jQuery);
} catch (r) {
wx.jslog({
src: "common/lib/jquery.ui.draggable.js"
}, r);
}
});define("tpl/top.html.js", [], function(e, t, n) {
return '<ul class="title_tab_navs">\n    {each data as o index}\n    {if (typeof o.acl == "undefined" || o.acl == 1)}\n    <li class="title_tab_nav js_top {o.className}" data-id="{o.id}"><a href="{o.url}">{o.name}</a></li>\n    {/if}\n    {/each}\n</ul>\n';
});define("tpl/pagebar.html.js", [], function(e, t, n) {
return '<div class="pagination">\n    <span class="page_nav_area">\n        <a href="javascript:void(0);" class="btn page_first">{firstButtonText}</a>\n        <a href="javascript:void(0);" class="btn page_prev"><i class="arrow"></i></a>\n        {if isSimple}\n            <span class="page_num">\n                <label>{initShowPage}</label>\n                <span class="num_gap">/</span>\n                <label>{endPage}</label>\n            </span>\n        {else}\n            {each startRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n            <span class="gap_prev">...</span>\n            {each midRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav js_mid">{pageIndex}</a>\n            {/each}\n            <span class="gap_next">...</span>\n            {each endRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n        {/if}\n        <a href="javascript:void(0);" class="btn page_next"><i class="arrow"></i></a>\n        <a href="javascript:void(0);" class="btn page_last">{lastButtonText}</a>            \n    </span>\n    {if (endPage>1)}\n    <span class="goto_area">\n        <input type="text">\n        <a href="javascript:void(0);" class="btn page_go">跳转</a>\n    </span>\n    {/if}\n</div>\n';
});define("common/lib/spin.js", [], function(e, t, n) {
try {
var r = function() {
function e(e, t) {
var n = ~~((e[a] - 1) / 2);
for (var r = 1; r <= n; r++) t(e[r * 2 - 1], e[r * 2]);
}
function t(t) {
var n = document.createElement(t || "div");
return e(arguments, function(e, t) {
n[e] = t;
}), n;
}
function n(e, t, r) {
return r && !r[x] && n(e, r), e.insertBefore(t, r || null), e;
}
function r(e, t) {
var n = [ p, t, ~~(e * 100) ].join("-"), r = "{" + p + ":" + e + "}", i;
if (!H[n]) {
for (i = 0; i < P[a]; i++) try {
j.insertRule("@" + (P[i] && "-" + P[i].toLowerCase() + "-" || "") + "keyframes " + n + "{0%{" + p + ":1}" + t + "%" + r + "to" + r + "}", j.cssRules[a]);
} catch (s) {}
H[n] = 1;
}
return n;
}
function i(e, t) {
var n = e[m], r, i;
if (n[t] !== undefined) return t;
t = t.charAt(0).toUpperCase() + t.slice(1);
for (i = 0; i < P[a]; i++) {
r = P[i] + t;
if (n[r] !== undefined) return r;
}
}
function s(t) {
return e(arguments, function(e, n) {
t[m][i(t, e) || e] = n;
}), t;
}
function o(t) {
return e(arguments, function(e, n) {
t[e] === undefined && (t[e] = n);
}), t;
}
var u = "width", a = "length", f = "radius", l = "lines", c = "trail", h = "color", p = "opacity", d = "speed", v = "shadow", m = "style", g = "height", y = "left", b = "top", w = "px", E = "childNodes", S = "firstChild", x = "parentNode", T = "position", N = "relative", C = "absolute", k = "animation", L = "transform", A = "Origin", O = "Timeout", M = "coord", _ = "#000", D = m + "Sheets", P = "webkit0Moz0ms0O".split(0), H = {}, B;
n(document.getElementsByTagName("head")[0], t(m));
var j = document[D][document[D][a] - 1], F = function(e) {
this.opts = o(e || {}, l, 12, c, 100, a, 7, u, 5, f, 10, h, _, p, .25, d, 1);
}, I = F.prototype = {
spin: function(e) {
var t = this, r = t.el = t[l](t.opts);
e && n(e, s(r, y, ~~(e.offsetWidth / 2) + w, b, ~~(e.offsetHeight / 2) + w), e[S]);
if (!B) {
var i = t.opts, o = 0, u = 20 / i[d], a = (1 - i[p]) / (u * i[c] / 100), f = u / i[l];
(function h() {
o++;
for (var e = i[l]; e; e--) {
var n = Math.max(1 - (o + e * f) % u * a, i[p]);
t[p](r, i[l] - e, n, i);
}
t[O] = t.el && window["set" + O](h, 50);
})();
}
return t;
},
stop: function() {
var e = this, t = e.el;
return window["clear" + O](e[O]), t && t[x] && t[x].removeChild(t), e.el = undefined, e;
}
};
I[l] = function(e) {
function i(n, r) {
return s(t(), T, C, u, e[a] + e[u] + w, g, e[u] + w, "background", n, "boxShadow", r, L + A, y, L, "rotate(" + ~~(360 / e[l] * E) + "deg) translate(" + e[f] + w + ",0)", "borderRadius", "100em");
}
var o = s(t(), T, N), m = r(e[p], e[c]), E = 0, S;
for (; E < e[l]; E++) S = s(t(), T, C, b, 1 + ~(e[u] / 2) + w, L, "translate3d(0,0,0)", k, m + " " + 1 / e[d] + "s linear infinite " + (1 / e[l] / e[d] * E - 1 / e[d]) + "s"), e[v] && n(S, s(i(_, "0 0 4px " + _), b, 2 + w)), n(o, n(S, i(e[h], "0 0 1px rgba(0,0,0,.1)")));
return o;
}, I[p] = function(e, t, n) {
e[E][t][m][p] = n;
};
var q = "behavior", R = "url(#default#VML)", U = "group0roundrect0fill0stroke".split(0);
return function() {
var e = s(t(U[0]), q, R), r;
if (!i(e, L) && e.adj) {
for (r = 0; r < U[a]; r++) j.addRule(U[r], q + ":" + R);
I[l] = function() {
function e() {
return s(t(U[0], M + "size", c + " " + c, M + A, -o + " " + -o), u, c, g, c);
}
function r(r, a, c) {
n(d, n(s(e(), "rotation", 360 / i[l] * r + "deg", y, ~~a), n(s(t(U[1], "arcsize", 1), u, o, g, i[u], y, i[f], b, -i[u] / 2, "filter", c), t(U[2], h, i[h], p, i[p]), t(U[3], p, 0))));
}
var i = this.opts, o = i[a] + i[u], c = 2 * o, d = e(), m = ~(i[a] + i[f] + i[u]) + w, E;
if (i[v]) for (E = 1; E <= i[l]; E++) r(E, -2, "progid:DXImage" + L + ".Microsoft.Blur(pixel" + f + "=2,make" + v + "=1," + v + p + "=.3)");
for (E = 1; E <= i[l]; E++) r(E);
return n(s(t(), "margin", m + " 0 0 " + m, T, N), d);
}, I[p] = function(e, t, n, r) {
r = r[v] && r[l] || 0, e[S][E][t + r][S][S][p] = n;
};
} else B = i(e, k);
}(), F;
}();
$.fn.spin = function(e, t) {
return this.each(function() {
var n = $(this), i = n.data();
i.spinner && (i.spinner.stop(), delete i.spinner), e !== !1 && (e = $.extend({
color: t || n.css("color")
}, $.fn.spin.presets[e] || e), i.spinner = (new r(e)).spin(this));
});
}, $.fn.spin.presets = {
tiny: {
lines: 8,
length: 2,
width: 2,
radius: 3
},
small: {
lines: 8,
length: 4,
width: 3,
radius: 5
},
large: {
lines: 10,
length: 8,
width: 4,
radius: 8
}
};
} catch (i) {
wx.jslog({
src: "common/lib/spin.js"
}, i);
}
});define("tpl/media/videomsg.html.js", [], function(e, t, n) {
return '<div id="wxVideoBox{id}" class="richvideo Js_videomsg">\n    <div class="richvideo_content" style="z-index: 0">\n        <h4 class="title">{title}</h4>\n        <div class="video_info">\n            <em class="time">{time}</em>\n            <em class="res">{from}</em>\n        </div>\n        <div class="video_wrp Js_videoContent">\n            <div id="wxVideoPlayer{id}" class="wxVideoPlayContent video_player">\n                <video id="wxVideo{id}" class="video-js vjs-default-skin"  \n                    preload="auto" controls="controls" data-src="{video_url}"></video>\n            </div>\n            {if for_network}\n            <div class="wxNetworkVideo video_shot" data-contenturl="{content_url}">\n            {else}\n            <div class="{if !for_transfer}wxVideoScreenshot {/if}video_shot">\n            {/if}\n                <img src="/cgi-bin/getimgdata?token={token}&msgid={app_id}&mode=large&source=file&fileId={file_id}"/>\n                <!-- <i class="icon_video"></i> -->\n                <!-- <span class="video_duration"><em>{play_length}"</em></span> -->\n                {if for_transfer}\n                <div class="loading_tips" {if hide_transfer}style="display:none"{/if}>\n                    <i class="icon32_loading dark"></i>\n                    <p>转码中</p>\n                </div>\n                {/if}\n            </div>\n        </div>\n        <div class="video_desc" data-digest="{digest}">{digest}</div>\n    </div>\n    {if for_operation}\n    <div class="richvideo_opr">\n        <ul>\n            {if for_network}\n            <li class="richvideo_opr_item with2">\n                <a href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item with2 no_extra">\n                <a class="js_del" data-id="{id}" href="javascript:void(0);"><i class="icon18_common del_gray">删除</i></a>\n            </li>\n            {else}\n            <li class="richvideo_opr_item with3">\n                <a href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item with3">\n                <a {if for_transfer}href="javascript:;" class="js_download"{else}href="{video_download_url}"{/if}>\n                    <i class="icon18_common download_gray_v1">下载</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item with3 no_extra">\n                <a class="js_del" data-id="{app_id}" href="javascript:void(0);"><i class="icon18_common del_gray">删除</i></a>\n            </li>\n            {/if}\n        </ul>\n    </div>\n    {/if}\n    {if for_selection}\n    <div class="richvideo_mask"></div>\n    <i class="icon_card_selected">已选择</i>\n    <div class="richvideo_tips">\n        <i class="icon_richvideo_error"></i>\n        <p>该素材没有标题，<a href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}">马上编辑</a></p>\n    </div>\n    {/if}\n    {if for_notitle}\n    <div class="richvideo_mask"></div>\n    <div class="richvideo_tips">\n        <i class="icon_richvideo_error"></i>\n        <p>该素材没有标题，<a href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}">马上编辑</a></p>\n    </div>\n    {/if}\n</div>\n\n\n';
});define("tpl/media/video.html.js", [], function(e, t, n) {
return '<div id="wxVideoBox{id}" class="mediaBox videoBox">\n	<div class="mediaContent">\n		<div class="wxVideoPlayContent">\n            <div class="wxVideoBoxAction{id}">\n                <a id="wxVideoBoxFold{id}" class="video_switch"><i class="icon14_common switch_gray"></i>收起</a>\n			</div>\n            <div id="wxVideoPlayer{id}" class="wxVideoPlayer">\n                <video id="wxVideo{id}" class="video-js vjs-default-skin" width="260" height="195" preload="auto"  loop controls="controls" src="{src}" poster="/cgi-bin/getimgdata?token={token}&msgid={id}&mode=small&source={source}&fileId={file_id}"></video>\n            </div>\n		</div>\n        <div class="wxVideoScreenshot" data-vid="{id}" data-fid="{fileid}" data-source="{source}">\n            <img class="wxImg" src="/cgi-bin/getimgdata?token={token}&msgid={id}&mode=small&source={source}&fileId={file_id}" alt="" title=\'点击播放视频\' />\n			<span class="iconVideo" title=\'点击播放视频\'></span>\n            <div class="videoDuration"><em>{play_length}"</em></div>\n		</div>\n    </div>\n</div>\n';
});define("common/lib/swfobject.js", [], function(e, t, n) {
try {
var r = function() {
function e() {
if (U) return;
try {
var e = M.getElementsByTagName("body")[0].appendChild(g("span"));
e.parentNode.removeChild(e);
} catch (t) {
return;
}
U = !0;
var n = P.length;
for (var r = 0; r < n; r++) P[r]();
}
function t(e) {
U ? e() : P[P.length] = e;
}
function n(e) {
if (typeof O.addEventListener != x) O.addEventListener("load", e, !1); else if (typeof M.addEventListener != x) M.addEventListener("load", e, !1); else if (typeof O.attachEvent != x) y(O, "onload", e); else if (typeof O.onload == "function") {
var t = O.onload;
O.onload = function() {
t(), e();
};
} else O.onload = e;
}
function i() {
D ? s() : o();
}
function s() {
var e = M.getElementsByTagName("body")[0], t = g(T);
t.setAttribute("type", k);
var n = e.appendChild(t);
if (n) {
var r = 0;
(function() {
if (typeof n.GetVariable != x) {
var i = n.GetVariable("$version");
i && (i = i.split(" ")[1].split(","), $.pv = [ parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10) ]);
} else if (r < 10) {
r++, setTimeout(arguments.callee, 10);
return;
}
e.removeChild(t), n = null, o();
})();
} else o();
}
function o() {
var e = H.length;
if (e > 0) for (var t = 0; t < e; t++) {
var n = H[t].id, r = H[t].callbackFn, i = {
success: !1,
id: n
};
if ($.pv[0] > 0) {
var s = m(n);
if (s) if (b(H[t].swfVersion) && !($.wk && $.wk < 312)) E(n, !0), r && (i.success = !0, i.ref = u(n), r(i)); else if (H[t].expressInstall && a()) {
var o = {};
o.data = H[t].expressInstall, o.width = s.getAttribute("width") || "0", o.height = s.getAttribute("height") || "0", s.getAttribute("class") && (o.styleclass = s.getAttribute("class")), s.getAttribute("align") && (o.align = s.getAttribute("align"));
var c = {}, h = s.getElementsByTagName("param"), p = h.length;
for (var d = 0; d < p; d++) h[d].getAttribute("name").toLowerCase() != "movie" && (c[h[d].getAttribute("name")] = h[d].getAttribute("value"));
f(o, c, n, r);
} else l(s), r && r(i);
} else {
E(n, !0);
if (r) {
var v = u(n);
v && typeof v.SetVariable != x && (i.success = !0, i.ref = v), r(i);
}
}
}
}
function u(e) {
var t = null, n = m(e);
if (n && n.nodeName == "OBJECT") if (typeof n.SetVariable != x) t = n; else {
var r = n.getElementsByTagName(T)[0];
r && (t = r);
}
return t;
}
function a() {
return !z && b("6.0.65") && ($.win || $.mac) && !($.wk && $.wk < 312);
}
function f(e, t, n, r) {
z = !0, q = r || null, R = {
success: !1,
id: n
};
var i = m(n);
if (i) {
i.nodeName == "OBJECT" ? (F = c(i), I = null) : (F = i, I = n), e.id = L;
if (typeof e.width == x || !/%$/.test(e.width) && parseInt(e.width, 10) < 310) e.width = "310";
if (typeof e.height == x || !/%$/.test(e.height) && parseInt(e.height, 10) < 137) e.height = "137";
M.title = M.title.slice(0, 47) + " - Flash Player Installation";
var s = $.ie && $.win ? "ActiveX" : "PlugIn", o = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + s + "&MMdoctitle=" + M.title;
typeof t.flashvars != x ? t.flashvars += "&" + o : t.flashvars = o;
if ($.ie && $.win && i.readyState != 4) {
var u = g("div");
n += "SWFObjectNew", u.setAttribute("id", n), i.parentNode.insertBefore(u, i), i.style.display = "none", function() {
i.readyState == 4 ? i.parentNode.removeChild(i) : setTimeout(arguments.callee, 10);
}();
}
h(e, t, n);
}
}
function l(e) {
if ($.ie && $.win && e.readyState != 4) {
var t = g("div");
e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(c(e), t), e.style.display = "none", function() {
e.readyState == 4 ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10);
}();
} else e.parentNode.replaceChild(c(e), e);
}
function c(e) {
var t = g("div");
if ($.win && $.ie) t.innerHTML = e.innerHTML; else {
var n = e.getElementsByTagName(T)[0];
if (n) {
var r = n.childNodes;
if (r) {
var i = r.length;
for (var s = 0; s < i; s++) (r[s].nodeType != 1 || r[s].nodeName != "PARAM") && r[s].nodeType != 8 && t.appendChild(r[s].cloneNode(!0));
}
}
}
return t;
}
function h(e, t, n) {
var r, i = m(n);
if ($.wk && $.wk < 312) return r;
if (i) {
typeof e.id == x && (e.id = n);
if ($.ie && $.win) {
var s = "";
for (var o in e) e[o] != Object.prototype[o] && (o.toLowerCase() == "data" ? t.movie = e[o] : o.toLowerCase() == "styleclass" ? s += ' class="' + e[o] + '"' : o.toLowerCase() != "classid" && (s += " " + o + '="' + e[o] + '"'));
var u = "";
for (var a in t) t[a] != Object.prototype[a] && (u += '<param name="' + a + '" value="' + t[a] + '" />');
i.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + s + ">" + u + "</object>", B[B.length] = e.id, r = m(e.id);
} else {
var f = g(T);
f.setAttribute("type", k);
for (var l in e) e[l] != Object.prototype[l] && (l.toLowerCase() == "styleclass" ? f.setAttribute("class", e[l]) : l.toLowerCase() != "classid" && f.setAttribute(l, e[l]));
for (var c in t) t[c] != Object.prototype[c] && c.toLowerCase() != "movie" && p(f, c, t[c]);
i.parentNode.replaceChild(f, i), r = f;
}
}
return r;
}
function p(e, t, n) {
var r = g("param");
r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r);
}
function d(e) {
var t = m(e);
t && t.nodeName == "OBJECT" && ($.ie && $.win ? (t.style.display = "none", function() {
t.readyState == 4 ? v(e) : setTimeout(arguments.callee, 10);
}()) : t.parentNode.removeChild(t));
}
function v(e) {
var t = m(e);
if (t) {
for (var n in t) typeof t[n] == "function" && (t[n] = null);
t.parentNode.removeChild(t);
}
}
function m(e) {
var t = null;
try {
t = M.getElementById(e);
} catch (n) {}
return t;
}
function g(e) {
return M.createElement(e);
}
function y(e, t, n) {
e.attachEvent(t, n), j[j.length] = [ e, t, n ];
}
function b(e) {
var t = $.pv, n = e.split(".");
return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1;
}
function w(e, t, n, r) {
if ($.ie && $.mac) return;
var i = M.getElementsByTagName("head")[0];
if (!i) return;
var s = n && typeof n == "string" ? n : "screen";
r && (W = null, X = null);
if (!W || X != s) {
var o = g("style");
o.setAttribute("type", "text/css"), o.setAttribute("media", s), W = i.appendChild(o), $.ie && $.win && typeof M.styleSheets != x && M.styleSheets.length > 0 && (W = M.styleSheets[M.styleSheets.length - 1]), X = s;
}
$.ie && $.win ? W && typeof W.addRule == T && W.addRule(e, t) : W && typeof M.createTextNode != x && W.appendChild(M.createTextNode(e + " {" + t + "}"));
}
function E(e, t) {
if (!V) return;
var n = t ? "visible" : "hidden";
U && m(e) ? m(e).style.visibility = n : w("#" + e, "visibility:" + n);
}
function S(e) {
var t = /[\\\"<>\.;]/, n = t.exec(e) != null;
return n && typeof encodeURIComponent != x ? encodeURIComponent(e) : e;
}
var x = "undefined", T = "object", N = "Shockwave Flash", C = "ShockwaveFlash.ShockwaveFlash", k = "application/x-shockwave-flash", L = "SWFObjectExprInst", A = "onreadystatechange", O = window, M = document, _ = navigator, D = !1, P = [ i ], H = [], B = [], j = [], F, I, q, R, U = !1, z = !1, W, X, V = !0, $ = function() {
var e = typeof M.getElementById != x && typeof M.getElementsByTagName != x && typeof M.createElement != x, t = _.userAgent.toLowerCase(), n = _.platform.toLowerCase(), r = n ? /win/.test(n) : /win/.test(t), i = n ? /mac/.test(n) : /mac/.test(t), s = /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1, o = !1, u = [ 0, 0, 0 ], a = null;
if (typeof _.plugins != x && typeof _.plugins[N] == T) a = _.plugins[N].description, a && (typeof _.mimeTypes == x || !_.mimeTypes[k] || !!_.mimeTypes[k].enabledPlugin) && (D = !0, o = !1, a = a.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), u[0] = parseInt(a.replace(/^(.*)\..*$/, "$1"), 10), u[1] = parseInt(a.replace(/^.*\.(.*)\s.*$/, "$1"), 10), u[2] = /[a-zA-Z]/.test(a) ? parseInt(a.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0); else if (typeof O.ActiveXObject != x) try {
var f = new ActiveXObject(C);
f && (a = f.GetVariable("$version"), a && (o = !0, a = a.split(" ")[1].split(","), u = [ parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10) ]));
} catch (l) {}
return {
w3: e,
pv: u,
wk: s,
ie: o,
win: r,
mac: i
};
}(), J = function() {
if (!$.w3) return;
(typeof M.readyState != x && M.readyState == "complete" || typeof M.readyState == x && (M.getElementsByTagName("body")[0] || M.body)) && e(), U || (typeof M.addEventListener != x && M.addEventListener("DOMContentLoaded", e, !1), $.ie && $.win && (M.attachEvent(A, function() {
M.readyState == "complete" && (M.detachEvent(A, arguments.callee), e());
}), O == top && function() {
if (U) return;
try {
M.documentElement.doScroll("left");
} catch (t) {
setTimeout(arguments.callee, 0);
return;
}
e();
}()), $.wk && function() {
if (U) return;
if (!/loaded|complete/.test(M.readyState)) {
setTimeout(arguments.callee, 0);
return;
}
e();
}(), n(e));
}(), K = function() {
$.ie && $.win && window.attachEvent("onunload", function() {
var e = j.length;
for (var t = 0; t < e; t++) j[t][0].detachEvent(j[t][1], j[t][2]);
var n = B.length;
for (var i = 0; i < n; i++) d(B[i]);
for (var s in $) $[s] = null;
$ = null;
for (var o in r) r[o] = null;
r = null;
});
}();
return {
registerObject: function(e, t, n, r) {
if ($.w3 && e && t) {
var i = {};
i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = r, H[H.length] = i, E(e, !1);
} else r && r({
success: !1,
id: e
});
},
getObjectById: function(e) {
if ($.w3) return u(e);
},
embedSWF: function(e, n, r, i, s, o, u, l, c, p) {
var d = {
success: !1,
id: n
};
$.w3 && !($.wk && $.wk < 312) && e && n && r && i && s ? (E(n, !1), t(function() {
r += "", i += "";
var t = {};
if (c && typeof c === T) for (var v in c) t[v] = c[v];
t.data = e, t.width = r, t.height = i;
var m = {};
if (l && typeof l === T) for (var g in l) m[g] = l[g];
if (u && typeof u === T) for (var y in u) typeof m.flashvars != x ? m.flashvars += "&" + y + "=" + u[y] : m.flashvars = y + "=" + u[y];
if (b(s)) {
var w = h(t, m, n);
t.id == n && E(n, !0), d.success = !0, d.ref = w;
} else {
if (o && a()) {
t.data = o, f(t, m, n, p);
return;
}
E(n, !0);
}
p && p(d);
})) : p && p(d);
},
switchOffAutoHideShow: function() {
V = !1;
},
ua: $,
getFlashPlayerVersion: function() {
return {
major: $.pv[0],
minor: $.pv[1],
release: $.pv[2]
};
},
hasFlashPlayerVersion: b,
createSWF: function(e, t, n) {
return $.w3 ? h(e, t, n) : undefined;
},
showExpressInstall: function(e, t, n, r) {
$.w3 && a() && f(e, t, n, r);
},
removeSWF: function(e) {
$.w3 && d(e);
},
createCSS: function(e, t, n, r) {
$.w3 && w(e, t, n, r);
},
addDomLoadEvent: t,
addLoadEvent: n,
getQueryParamValue: function(e) {
var t = M.location.search || M.location.hash;
if (t) {
/\?/.test(t) && (t = t.split("?")[1]);
if (e == null) return S(t);
var n = t.split("&");
for (var r = 0; r < n.length; r++) if (n[r].substring(0, n[r].indexOf("=")) == e) return S(n[r].substring(n[r].indexOf("=") + 1));
}
return "";
},
expressInstallCallback: function() {
if (z) {
var e = m(L);
e && F && (e.parentNode.replaceChild(F, e), I && (E(I, !0), $.ie && $.win && (F.style.display = "block")), q && q(R)), z = !1;
}
}
};
}();
return r;
} catch (i) {
wx.jslog({
src: "common/lib/swfobject.js"
}, i);
}
});define("common/lib/video.js", [], function(require, exports, module) {
try {
document.createElement("video"), document.createElement("audio"), document.createElement("track");
var vjs = function(e, t, n) {
var r;
if (typeof e == "string") {
e.indexOf("#") === 0 && (e = e.slice(1));
if (vjs.players[e]) return vjs.players[e];
r = vjs.el(e);
} else r = e;
if (!r || !r.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
return r.player || new vjs.Player(r, t, n);
}, videojs = vjs;
window.videojs = window.vjs = vjs, vjs.CDN_VERSION = "4.1", vjs.ACCESS_PROTOCOL = "https:" == document.location.protocol ? "https://" : "http://", vjs.options = {
techOrder: [ "html5", "flash" ],
html5: {},
flash: {},
width: 300,
height: 150,
defaultVolume: 0,
children: {
mediaLoader: {},
posterImage: {},
textTrackDisplay: {},
loadingSpinner: {},
bigPlayButton: {},
controlBar: {}
}
}, vjs.CDN_VERSION !== "GENERATED_CDN_VSN" && (videojs.options.flash.swf = vjs.ACCESS_PROTOCOL + "vjs.zencdn.net/" + vjs.CDN_VERSION + "/video-js.swf"), vjs.players = {}, vjs.CoreObject = vjs.CoreObject = function() {}, vjs.CoreObject.extend = function(e) {
var t, n;
e = e || {}, t = e.init || e.init || this.prototype.init || this.prototype.init || function() {}, n = function() {
t.apply(this, arguments);
}, n.prototype = vjs.obj.create(this.prototype), n.prototype.constructor = n, n.extend = vjs.CoreObject.extend, n.create = vjs.CoreObject.create;
for (var r in e) e.hasOwnProperty(r) && (n.prototype[r] = e[r]);
return n;
}, vjs.CoreObject.create = function() {
var e = vjs.obj.create(this.prototype);
return this.apply(e, arguments), e;
}, vjs.on = function(e, t, n) {
var r = vjs.getData(e);
r.handlers || (r.handlers = {}), r.handlers[t] || (r.handlers[t] = []), n.guid || (n.guid = vjs.guid++), r.handlers[t].push(n), r.dispatcher || (r.disabled = !1, r.dispatcher = function(t) {
if (r.disabled) return;
t = vjs.fixEvent(t);
var n = r.handlers[t.type];
if (n) {
var i = n.slice(0);
for (var s = 0, o = i.length; s < o; s++) {
if (t.isImmediatePropagationStopped()) break;
i[s].call(e, t);
}
}
}), r.handlers[t].length == 1 && (document.addEventListener ? e.addEventListener(t, r.dispatcher, !1) : document.attachEvent && e.attachEvent("on" + t, r.dispatcher));
}, vjs.off = function(e, t, n) {
if (!vjs.hasData(e)) return;
var r = vjs.getData(e);
if (!r.handlers) return;
var i = function(t) {
r.handlers[t] = [], vjs.cleanUpEvents(e, t);
};
if (!t) {
for (var s in r.handlers) i(s);
return;
}
var o = r.handlers[t];
if (!o) return;
if (!n) {
i(t);
return;
}
if (n.guid) for (var u = 0; u < o.length; u++) o[u].guid === n.guid && o.splice(u--, 1);
vjs.cleanUpEvents(e, t);
}, vjs.cleanUpEvents = function(e, t) {
var n = vjs.getData(e);
n.handlers[t].length === 0 && (delete n.handlers[t], document.removeEventListener ? e.removeEventListener(t, n.dispatcher, !1) : document.detachEvent && e.detachEvent("on" + t, n.dispatcher)), vjs.isEmpty(n.handlers) && (delete n.handlers, delete n.dispatcher, delete n.disabled), vjs.isEmpty(n) && vjs.removeData(e);
}, vjs.fixEvent = function(e) {
function t() {
return !0;
}
function n() {
return !1;
}
if (!e || !e.isPropagationStopped) {
var r = e || window.event;
e = {};
for (var i in r) i !== "layerX" && i !== "layerY" && (e[i] = r[i]);
e.target || (e.target = e.srcElement || document), e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement, e.preventDefault = function() {
r.preventDefault && r.preventDefault(), e.returnValue = !1, e.isDefaultPrevented = t;
}, e.isDefaultPrevented = n, e.stopPropagation = function() {
r.stopPropagation && r.stopPropagation(), e.cancelBubble = !0, e.isPropagationStopped = t;
}, e.isPropagationStopped = n, e.stopImmediatePropagation = function() {
r.stopImmediatePropagation && r.stopImmediatePropagation(), e.isImmediatePropagationStopped = t, e.stopPropagation();
}, e.isImmediatePropagationStopped = n;
if (e.clientX != null) {
var s = document.documentElement, o = document.body;
e.pageX = e.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = e.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0);
}
e.which = e.charCode || e.keyCode, e.button != null && (e.button = e.button & 1 ? 0 : e.button & 4 ? 1 : e.button & 2 ? 2 : 0);
}
return e;
}, vjs.trigger = function(e, t) {
var n = vjs.hasData(e) ? vjs.getData(e) : {}, r = e.parentNode || e.ownerDocument;
typeof t == "string" && (t = {
type: t,
target: e
}), t = vjs.fixEvent(t), n.dispatcher && n.dispatcher.call(e, t);
if (r && !t.isPropagationStopped()) vjs.trigger(r, t); else if (!r && !t.isDefaultPrevented()) {
var i = vjs.getData(t.target);
t.target[t.type] && (i.disabled = !0, typeof t.target[t.type] == "function" && t.target[t.type](), i.disabled = !1);
}
return !t.isDefaultPrevented();
}, vjs.one = function(e, t, n) {
vjs.on(e, t, function() {
vjs.off(e, t, arguments.callee), n.apply(this, arguments);
});
};
var hasOwnProp = Object.prototype.hasOwnProperty;
vjs.createEl = function(e, t) {
var n = document.createElement(e || "div");
for (var r in t) hasOwnProp.call(t, r) && (r.indexOf("aria-") !== -1 || r == "role" ? n.setAttribute(r, t[r]) : n[r] = t[r]);
return n;
}, vjs.capitalize = function(e) {
return e.charAt(0).toUpperCase() + e.slice(1);
}, vjs.obj = {}, vjs.obj.create = Object.create || function(e) {
function t() {}
return t.prototype = e, new t;
}, vjs.obj.each = function(e, t, n) {
for (var r in e) hasOwnProp.call(e, r) && t.call(n || this, r, e[r]);
}, vjs.obj.merge = function(e, t) {
if (!t) return e;
for (var n in t) hasOwnProp.call(t, n) && (e[n] = t[n]);
return e;
}, vjs.obj.deepMerge = function(e, t) {
var n, r, i, s;
s = "[object Object]", e = vjs.obj.copy(e);
for (n in t) hasOwnProp.call(t, n) && (r = e[n], i = t[n], vjs.obj.isPlain(r) && vjs.obj.isPlain(i) ? e[n] = vjs.obj.deepMerge(r, i) : e[n] = t[n]);
return e;
}, vjs.obj.copy = function(e) {
return vjs.obj.merge({}, e);
}, vjs.obj.isPlain = function(e) {
return !!e && typeof e == "object" && e.toString() === "[object Object]" && e.constructor === Object;
}, vjs.bind = function(e, t, n) {
t.guid || (t.guid = vjs.guid++);
var r = function() {
return t.apply(e, arguments);
};
return r.guid = n ? n + "_" + t.guid : t.guid, r;
}, vjs.cache = {}, vjs.guid = 1, vjs.expando = "vdata" + (new Date).getTime(), vjs.getData = function(e) {
var t = e[vjs.expando];
return t || (t = e[vjs.expando] = vjs.guid++, vjs.cache[t] = {}), vjs.cache[t];
}, vjs.hasData = function(e) {
var t = e[vjs.expando];
return !!t && !vjs.isEmpty(vjs.cache[t]);
}, vjs.removeData = function(e) {
var t = e[vjs.expando];
if (!t) return;
delete vjs.cache[t];
try {
delete e[vjs.expando];
} catch (n) {
e.removeAttribute ? e.removeAttribute(vjs.expando) : e[vjs.expando] = null;
}
}, vjs.isEmpty = function(e) {
for (var t in e) if (e[t] !== null) return !1;
return !0;
}, vjs.addClass = function(e, t) {
(" " + e.className + " ").indexOf(" " + t + " ") == -1 && (e.className = e.className === "" ? t : e.className + " " + t);
}, vjs.removeClass = function(e, t) {
if (e.className.indexOf(t) == -1) return;
var n = e.className.split(" ");
for (var r = n.length - 1; r >= 0; r--) n[r] === t && n.splice(r, 1);
e.className = n.join(" ");
}, vjs.TEST_VID = vjs.createEl("video"), vjs.USER_AGENT = navigator.userAgent, vjs.IS_IPHONE = /iPhone/i.test(vjs.USER_AGENT), vjs.IS_IPAD = /iPad/i.test(vjs.USER_AGENT), vjs.IS_IPOD = /iPod/i.test(vjs.USER_AGENT), vjs.IS_IOS = vjs.IS_IPHONE || vjs.IS_IPAD || vjs.IS_IPOD, vjs.IOS_VERSION = function() {
var e = vjs.USER_AGENT.match(/OS (\d+)_/i);
if (e && e[1]) return e[1];
}(), vjs.IS_ANDROID = /Android/i.test(vjs.USER_AGENT), vjs.ANDROID_VERSION = function() {
var e = vjs.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i), t, n;
return e ? (t = e[1] && parseFloat(e[1]), n = e[2] && parseFloat(e[2]), t && n ? parseFloat(e[1] + "." + e[2]) : t ? t : null) : null;
}(), vjs.IS_OLD_ANDROID = vjs.IS_ANDROID && /webkit/i.test(vjs.USER_AGENT) && vjs.ANDROID_VERSION < 2.3, vjs.IS_FIREFOX = /Firefox/i.test(vjs.USER_AGENT), vjs.IS_CHROME = /Chrome/i.test(vjs.USER_AGENT), vjs.getAttributeValues = function(e) {
var t = {}, n = ",autoplay,controls,loop,muted,default,";
if (e && e.attributes && e.attributes.length > 0) {
var r = e.attributes, i, s;
for (var o = r.length - 1; o >= 0; o--) {
i = r[o].name, s = r[o].value;
if (typeof e[i] == "boolean" || n.indexOf("," + i + ",") !== -1) s = s !== null ? !0 : !1;
t[i] = s;
}
}
return t;
}, vjs.getComputedDimension = function(e, t) {
var n = "";
return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "").getPropertyValue(t) : e.currentStyle && (n = e["client" + t.substr(0, 1).toUpperCase() + t.substr(1)] + "px"), n;
}, vjs.insertFirst = function(e, t) {
t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e);
}, vjs.support = {}, vjs.el = function(e) {
return e.indexOf("#") === 0 && (e = e.slice(1)), document.getElementById(e);
}, vjs.formatTime = function(e, t) {
t = t || e;
var n = Math.floor(e % 60), r = Math.floor(e / 60 % 60), i = Math.floor(e / 3600), s = Math.floor(t / 60 % 60), o = Math.floor(t / 3600);
return i = i > 0 || o > 0 ? i + ":" : "", r = ((i || s >= 10) && r < 10 ? "0" + r : r) + ":", n = n < 10 ? "0" + n : n, i + r + n;
}, vjs.blockTextSelection = function() {
document.body.focus(), document.onselectstart = function() {
return !1;
};
}, vjs.unblockTextSelection = function() {
document.onselectstart = function() {
return !0;
};
}, vjs.trim = function(e) {
return e.toString().replace(/^\s+/, "").replace(/\s+$/, "");
}, vjs.round = function(e, t) {
return t || (t = 0), Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
}, vjs.createTimeRange = function(e, t) {
return {
length: 1,
start: function() {
return e;
},
end: function() {
return t;
}
};
}, vjs.get = function(e, t, n) {
var r = e.indexOf("file:") === 0 || window.location.href.indexOf("file:") === 0 && e.indexOf("http") === -1;
typeof XMLHttpRequest == "undefined" && (window.XMLHttpRequest = function() {
try {
return new window.ActiveXObject("Msxml2.XMLHTTP.6.0");
} catch (e) {}
try {
return new window.ActiveXObject("Msxml2.XMLHTTP.3.0");
} catch (t) {}
try {
return new window.ActiveXObject("Msxml2.XMLHTTP");
} catch (n) {}
throw new Error("This browser does not support XMLHttpRequest.");
});
var i = new XMLHttpRequest;
try {
i.open("GET", e);
} catch (s) {
n(s);
}
i.onreadystatechange = function() {
i.readyState === 4 && (i.status === 200 || r && i.status === 0 ? t(i.responseText) : n && n());
};
try {
i.send();
} catch (s) {
n && n(s);
}
}, vjs.setLocalStorage = function(e, t) {
try {
var n = window.localStorage || !1;
if (!n) return;
n[e] = t;
} catch (r) {
r.code == 22 || r.code == 1014 ? vjs.log("LocalStorage Full (VideoJS)", r) : r.code == 18 ? vjs.log("LocalStorage not allowed (VideoJS)", r) : vjs.log("LocalStorage Error (VideoJS)", r);
}
}, vjs.getAbsoluteURL = function(e) {
return e.match(/^https?:\/\//) || (e = vjs.createEl("div", {
innerHTML: '<a href="' + e + '">x</a>'
}).firstChild.href), e;
}, vjs.log = function() {
vjs.log.history = vjs.log.history || [], vjs.log.history.push(arguments), window.console && window.console.log(Array.prototype.slice.call(arguments));
}, vjs.findPosition = function(e) {
var t, n, r, i, s, o, u, a, f;
return e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), t ? (n = document.documentElement, r = document.body, i = n.clientLeft || r.clientLeft || 0, s = window.pageXOffset || r.scrollLeft, o = t.left + s - i, u = n.clientTop || r.clientTop || 0, a = window.pageYOffset || r.scrollTop, f = t.top + a - u, {
left: o,
top: f
}) : {
left: 0,
top: 0
};
}, vjs.Component = vjs.CoreObject.extend({
init: function(e, t, n) {
this.player_ = e, this.options_ = vjs.obj.copy(this.options_), t = this.options(t), this.id_ = t.id || (t.el && t.el.id ? t.el.id : e.id() + "_component_" + vjs.guid++), this.name_ = t.name || null, this.el_ = t.el || this.createEl(), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, this.initChildren(), this.ready(n);
}
}), vjs.Component.prototype.dispose = function() {
if (this.children_) for (var e = this.children_.length - 1; e >= 0; e--) this.children_[e].dispose && this.children_[e].dispose();
this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.off(), this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), vjs.removeData(this.el_), this.el_ = null;
}, vjs.Component.prototype.player_, vjs.Component.prototype.player = function() {
return this.player_;
}, vjs.Component.prototype.options_, vjs.Component.prototype.options = function(e) {
return e === undefined ? this.options_ : this.options_ = vjs.obj.deepMerge(this.options_, e);
}, vjs.Component.prototype.el_, vjs.Component.prototype.createEl = function(e, t) {
return vjs.createEl(e, t);
}, vjs.Component.prototype.el = function() {
return this.el_;
}, vjs.Component.prototype.contentEl_, vjs.Component.prototype.contentEl = function() {
return this.contentEl_ || this.el_;
}, vjs.Component.prototype.id_, vjs.Component.prototype.id = function() {
return this.id_;
}, vjs.Component.prototype.name_, vjs.Component.prototype.name = function() {
return this.name_;
}, vjs.Component.prototype.children_, vjs.Component.prototype.children = function() {
return this.children_;
}, vjs.Component.prototype.childIndex_, vjs.Component.prototype.getChildById = function(e) {
return this.childIndex_[e];
}, vjs.Component.prototype.childNameIndex_, vjs.Component.prototype.getChild = function(e) {
return this.childNameIndex_[e];
}, vjs.Component.prototype.addChild = function(e, t) {
var n, r, i, s;
return typeof e == "string" ? (i = e, t = t || {}, r = t.componentClass || vjs.capitalize(i), t.name = i, n = new window.videojs[r](this.player_ || this, t)) : n = e, this.children_.push(n), typeof n.id == "function" && (this.childIndex_[n.id()] = n), i = i || n.name && n.name(), i && (this.childNameIndex_[i] = n), typeof n.el == "function" && n.el() && this.contentEl().appendChild(n.el()), n;
}, vjs.Component.prototype.removeChild = function(e) {
typeof e == "string" && (e = this.getChild(e));
if (!e || !this.children_) return;
var t = !1;
for (var n = this.children_.length - 1; n >= 0; n--) if (this.children_[n] === e) {
t = !0, this.children_.splice(n, 1);
break;
}
if (!t) return;
this.childIndex_[e.id] = null, this.childNameIndex_[e.name] = null;
var r = e.el();
r && r.parentNode === this.contentEl() && this.contentEl().removeChild(e.el());
}, vjs.Component.prototype.initChildren = function() {
var e = this.options_;
if (e && e.children) {
var t = this;
vjs.obj.each(e.children, function(e, n) {
if (n === !1) return;
var r = function() {
t[e] = t.addChild(e, n);
};
n.loadEvent || r();
});
}
}, vjs.Component.prototype.buildCSSClass = function() {
return "";
}, vjs.Component.prototype.on = function(e, t) {
return vjs.on(this.el_, e, vjs.bind(this, t)), this;
}, vjs.Component.prototype.off = function(e, t) {
return vjs.off(this.el_, e, t), this;
}, vjs.Component.prototype.one = function(e, t) {
return vjs.one(this.el_, e, vjs.bind(this, t)), this;
}, vjs.Component.prototype.trigger = function(e, t) {
return vjs.trigger(this.el_, e, t), this;
}, vjs.Component.prototype.isReady_, vjs.Component.prototype.isReadyOnInitFinish_ = !0, vjs.Component.prototype.readyQueue_, vjs.Component.prototype.ready = function(e) {
return e && (this.isReady_ ? e.call(this) : (this.readyQueue_ === undefined && (this.readyQueue_ = []), this.readyQueue_.push(e))), this;
}, vjs.Component.prototype.triggerReady = function() {
this.isReady_ = !0;
var e = this.readyQueue_;
if (e && e.length > 0) {
for (var t = 0, n = e.length; t < n; t++) e[t].call(this);
this.readyQueue_ = [], this.trigger("ready");
}
}, vjs.Component.prototype.addClass = function(e) {
return vjs.addClass(this.el_, e), this;
}, vjs.Component.prototype.removeClass = function(e) {
return vjs.removeClass(this.el_, e), this;
}, vjs.Component.prototype.show = function() {
return this.el_.style.display = "block", this;
}, vjs.Component.prototype.hide = function() {
return this.el_.style.display = "none", this;
}, vjs.Component.prototype.fadeIn = function() {
return this.removeClass("vjs-fade-out"), this.addClass("vjs-fade-in"), this;
}, vjs.Component.prototype.fadeOut = function() {
return this.removeClass("vjs-fade-in"), this.addClass("vjs-fade-out"), this;
}, vjs.Component.prototype.lockShowing = function() {
return this.addClass("vjs-lock-showing"), this;
}, vjs.Component.prototype.unlockShowing = function() {
return this.removeClass("vjs-lock-showing"), this;
}, vjs.Component.prototype.disable = function() {
this.hide(), this.show = function() {}, this.fadeIn = function() {};
}, vjs.Component.prototype.width = function(e, t) {
return this.dimension("width", e, t);
}, vjs.Component.prototype.height = function(e, t) {
return this.dimension("height", e, t);
}, vjs.Component.prototype.dimensions = function(e, t) {
return this.width(e, !0).height(t);
}, vjs.Component.prototype.dimension = function(e, t, n) {
if (t !== undefined) return ("" + t).indexOf("%") !== -1 || ("" + t).indexOf("px") !== -1 ? this.el_.style[e] = t : t === "auto" ? this.el_.style[e] = "" : this.el_.style[e] = t + "px", n || this.trigger("resize"), this;
if (!this.el_) return 0;
var r = this.el_.style[e], i = r.indexOf("px");
return i !== -1 ? parseInt(r.slice(0, i), 10) : parseInt(this.el_["offset" + vjs.capitalize(e)], 10);
}, vjs.Button = vjs.Component.extend({
init: function(e, t) {
vjs.Component.call(this, e, t);
var n = !1;
this.on("touchstart", function() {
n = !0;
}), this.on("touchmove", function() {
n = !1;
});
var r = this;
this.on("touchend", function(e) {
n && r.onClick(e), e.preventDefault(), e.stopPropagation();
}), this.on("click", this.onClick), this.on("focus", this.onFocus), this.on("blur", this.onBlur);
}
}), vjs.Button.prototype.createEl = function(e, t) {
return t = vjs.obj.merge({
className: this.buildCSSClass(),
innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.buttonText || "Need Text") + "</span></div>",
role: "button",
"aria-live": "polite",
tabIndex: 0
}, t), vjs.Component.prototype.createEl.call(this, e, t);
}, vjs.Button.prototype.buildCSSClass = function() {
return "vjs-control " + vjs.Component.prototype.buildCSSClass.call(this);
}, vjs.Button.prototype.onClick = function() {}, vjs.Button.prototype.onFocus = function() {
vjs.on(document, "keyup", vjs.bind(this, this.onKeyPress));
}, vjs.Button.prototype.onKeyPress = function(e) {
if (e.which == 32 || e.which == 13) e.preventDefault(), this.onClick();
}, vjs.Button.prototype.onBlur = function() {
vjs.off(document, "keyup", vjs.bind(this, this.onKeyPress));
}, vjs.Slider = vjs.Component.extend({
init: function(e, t) {
vjs.Component.call(this, e, t), this.bar = this.getChild(this.options_.barName), this.handle = this.getChild(this.options_.handleName), e.on(this.playerEvent, vjs.bind(this, this.update)), this.on("mousedown", this.onMouseDown), this.on("touchstart", this.onMouseDown), this.on("focus", this.onFocus), this.on("blur", this.onBlur), this.on("click", this.onClick), this.player_.on("controlsvisible", vjs.bind(this, this.update)), e.ready(vjs.bind(this, this.update)), this.boundEvents = {};
}
}), vjs.Slider.prototype.createEl = function(e, t) {
return t = t || {}, t.className = t.className + " vjs-slider", t = vjs.obj.merge({
role: "slider",
"aria-valuenow": 0,
"aria-valuemin": 0,
"aria-valuemax": 100,
tabIndex: 0
}, t), vjs.Component.prototype.createEl.call(this, e, t);
}, vjs.Slider.prototype.onMouseDown = function(e) {
e.preventDefault(), vjs.blockTextSelection(), this.boundEvents.move = vjs.bind(this, this.onMouseMove), this.boundEvents.end = vjs.bind(this, this.onMouseUp), vjs.on(document, "mousemove", this.boundEvents.move), vjs.on(document, "mouseup", this.boundEvents.end), vjs.on(document, "touchmove", this.boundEvents.move), vjs.on(document, "touchend", this.boundEvents.end), this.onMouseMove(e);
}, vjs.Slider.prototype.onMouseUp = function() {
vjs.unblockTextSelection(), vjs.off(document, "mousemove", this.boundEvents.move, !1), vjs.off(document, "mouseup", this.boundEvents.end, !1), vjs.off(document, "touchmove", this.boundEvents.move, !1), vjs.off(document, "touchend", this.boundEvents.end, !1), this.update();
}, vjs.Slider.prototype.update = function() {
if (!this.el_) return;
var e, t = this.getPercent(), n = this.handle, r = this.bar;
isNaN(t) && (t = 0), e = t;
if (n) {
var i = this.el_, s = i.offsetWidth, o = n.el().offsetWidth, u = o ? o / s : 0, a = 1 - u, f = t * a;
e = f + u / 2, n.el().style.left = vjs.round(f * 100, 2) + "%";
}
r.el().style.width = vjs.round(e * 100, 2) + "%";
}, vjs.Slider.prototype.calculateDistance = function(e) {
var t, n, r, i, s, o, u, a, f;
t = this.el_, n = vjs.findPosition(t), s = o = t.offsetWidth, u = this.handle;
if (this.options_.vertical) {
i = n.top, e.changedTouches ? f = e.changedTouches[0].pageY : f = e.pageY;
if (u) {
var l = u.el().offsetHeight;
i += l / 2, o -= l;
}
return Math.max(0, Math.min(1, (i - f + o) / o));
}
r = n.left, e.changedTouches ? a = e.changedTouches[0].pageX : a = e.pageX;
if (u) {
var c = u.el().offsetWidth;
r += c / 2, s -= c;
}
return Math.max(0, Math.min(1, (a - r) / s));
}, vjs.Slider.prototype.onFocus = function() {
vjs.on(document, "keyup", vjs.bind(this, this.onKeyPress));
}, vjs.Slider.prototype.onKeyPress = function(e) {
e.which == 37 ? (e.preventDefault(), this.stepBack()) : e.which == 39 && (e.preventDefault(), this.stepForward());
}, vjs.Slider.prototype.onBlur = function() {
vjs.off(document, "keyup", vjs.bind(this, this.onKeyPress));
}, vjs.Slider.prototype.onClick = function(e) {
e.stopImmediatePropagation(), e.preventDefault();
}, vjs.SliderHandle = vjs.Component.extend(), vjs.SliderHandle.prototype.defaultValue = 0, vjs.SliderHandle.prototype.createEl = function(e, t) {
return t = t || {}, t.className = t.className + " vjs-slider-handle", t = vjs.obj.merge({
innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
}, t), vjs.Component.prototype.createEl.call(this, "div", t);
}, vjs.Menu = vjs.Component.extend(), vjs.Menu.prototype.addItem = function(e) {
this.addChild(e), e.on("click", vjs.bind(this, function() {
this.unlockShowing();
}));
}, vjs.Menu.prototype.createEl = function() {
var e = this.options().contentElType || "ul";
this.contentEl_ = vjs.createEl(e, {
className: "vjs-menu-content"
});
var t = vjs.Component.prototype.createEl.call(this, "div", {
append: this.contentEl_,
className: "vjs-menu"
});
return t.appendChild(this.contentEl_), vjs.on(t, "click", function(e) {
e.preventDefault(), e.stopImmediatePropagation();
}), t;
}, vjs.MenuItem = vjs.Button.extend({
init: function(e, t) {
vjs.Button.call(this, e, t), this.selected(t.selected);
}
}), vjs.MenuItem.prototype.createEl = function(e, t) {
return vjs.Button.prototype.createEl.call(this, "li", vjs.obj.merge({
className: "vjs-menu-item",
innerHTML: this.options_.label
}, t));
}, vjs.MenuItem.prototype.onClick = function() {
this.selected(!0);
}, vjs.MenuItem.prototype.selected = function(e) {
e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-selected", !0)) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-selected", !1));
}, vjs.MenuButton = vjs.Button.extend({
init: function(e, t) {
vjs.Button.call(this, e, t), this.menu = this.createMenu(), this.addChild(this.menu), this.items && this.items.length === 0 && this.hide(), this.on("keyup", this.onKeyPress), this.el_.setAttribute("aria-haspopup", !0), this.el_.setAttribute("role", "button");
}
}), vjs.MenuButton.prototype.buttonPressed_ = !1, vjs.MenuButton.prototype.createMenu = function() {
var e = new vjs.Menu(this.player_);
this.options().title && e.el().appendChild(vjs.createEl("li", {
className: "vjs-menu-title",
innerHTML: vjs.capitalize(this.kind_),
tabindex: -1
})), this.items = this.createItems();
if (this.items) for (var t = 0; t < this.items.length; t++) e.addItem(this.items[t]);
return e;
}, vjs.MenuButton.prototype.createItems = function() {}, vjs.MenuButton.prototype.buildCSSClass = function() {
return this.className + " vjs-menu-button " + vjs.Button.prototype.buildCSSClass.call(this);
}, vjs.MenuButton.prototype.onFocus = function() {}, vjs.MenuButton.prototype.onBlur = function() {}, vjs.MenuButton.prototype.onClick = function() {
this.one("mouseout", vjs.bind(this, function() {
this.menu.unlockShowing(), this.el_.blur();
})), this.buttonPressed_ ? this.unpressButton() : this.pressButton();
}, vjs.MenuButton.prototype.onKeyPress = function(e) {
e.preventDefault(), e.which == 32 || e.which == 13 ? this.buttonPressed_ ? this.unpressButton() : this.pressButton() : e.which == 27 && this.buttonPressed_ && this.unpressButton();
}, vjs.MenuButton.prototype.pressButton = function() {
this.buttonPressed_ = !0, this.menu.lockShowing(), this.el_.setAttribute("aria-pressed", !0), this.items && this.items.length > 0 && this.items[0].el().focus();
}, vjs.MenuButton.prototype.unpressButton = function() {
this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-pressed", !1);
}, vjs.Player = vjs.Component.extend({
init: function(e, t, n) {
this.tag = e, t = vjs.obj.merge(this.getTagSettings(e), t), this.cache_ = {}, this.poster_ = t.poster, this.controls_ = t.controls, t.customControlsOnMobile !== !0 && (vjs.IS_IOS || vjs.IS_ANDROID) ? (e.controls = t.controls, this.controls_ = !1) : e.controls = !1, vjs.Component.call(this, this, t, n), this.one("play", function(e) {
var t = {
type: "firstplay",
target: this.el_
}, n = vjs.trigger(this.el_, t);
n || (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation());
}), this.on("ended", this.onEnded), this.on("play", this.onPlay), this.on("firstplay", this.onFirstPlay), this.on("pause", this.onPause), this.on("progress", this.onProgress), this.on("durationchange", this.onDurationChange), this.on("error", this.onError), this.on("fullscreenchange", this.onFullscreenChange), vjs.players[this.id_] = this, t.plugins && vjs.obj.each(t.plugins, function(e, t) {
this[e](t);
}, this);
}
}), vjs.Player.prototype.options_ = vjs.options, vjs.Player.prototype.dispose = function() {
vjs.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.stopTrackingProgress(), this.stopTrackingCurrentTime(), this.tech && this.tech.dispose(), vjs.Component.prototype.dispose.call(this);
}, vjs.Player.prototype.getTagSettings = function(e) {
var t = {
sources: [],
tracks: []
};
vjs.obj.merge(t, vjs.getAttributeValues(e));
if (e.hasChildNodes()) {
var n, r, i, s, o;
n = e.childNodes;
for (s = 0, o = n.length; s < o; s++) r = n[s], i = r.nodeName.toLowerCase(), i === "source" ? t.sources.push(vjs.getAttributeValues(r)) : i === "track" && t.tracks.push(vjs.getAttributeValues(r));
}
return t;
}, vjs.Player.prototype.createEl = function() {
var e = this.el_ = vjs.Component.prototype.createEl.call(this, "div"), t = this.tag;
t.removeAttribute("width"), t.removeAttribute("height");
if (t.hasChildNodes()) {
var n, r, i, s, o, u;
n = t.childNodes, r = n.length, u = [];
while (r--) s = n[r], o = s.nodeName.toLowerCase(), (o === "source" || o === "track") && u.push(s);
for (i = 0; i < u.length; i++) t.removeChild(u[i]);
}
return t.id = t.id || "vjs_video_" + vjs.guid++, e.id = t.id, e.className = t.className, t.id += "_html5_api", t.className = "vjs-tech", t.player = e.player = this, this.addClass("vjs-paused"), this.width(this.options_.width, !0), this.height(this.options_.height, !0), t.parentNode && t.parentNode.insertBefore(e, t), vjs.insertFirst(t, e), e;
}, vjs.Player.prototype.loadTech = function(e, t) {
this.tech ? this.unloadTech() : e !== "Html5" && this.tag && (this.el_.removeChild(this.tag), this.tag.player = null, this.tag = null), this.techName = e, this.isReady_ = !1;
var n = function() {
this.player_.triggerReady(), this.features.progressEvents || this.player_.manualProgressOn(), this.features.timeupdateEvents || this.player_.manualTimeUpdatesOn();
}, r = vjs.obj.merge({
source: t,
parentEl: this.el_
}, this.options_[e.toLowerCase()]);
t && (t.src == this.cache_.src && this.cache_.currentTime > 0 && (r.startTime = this.cache_.currentTime), this.cache_.src = t.src), this.tech = new window.videojs[e](this, r), this.tech.ready(n);
}, vjs.Player.prototype.unloadTech = function() {
this.isReady_ = !1, this.tech.dispose(), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), this.tech = !1;
}, vjs.Player.prototype.manualProgressOn = function() {
this.manualProgress = !0, this.trackProgress(), this.tech.one("progress", function() {
this.features.progressEvents = !0, this.player_.manualProgressOff();
});
}, vjs.Player.prototype.manualProgressOff = function() {
this.manualProgress = !1, this.stopTrackingProgress();
}, vjs.Player.prototype.trackProgress = function() {
this.progressInterval = setInterval(vjs.bind(this, function() {
this.cache_.bufferEnd < this.buffered().end(0) ? this.trigger("progress") : this.bufferedPercent() == 1 && (this.stopTrackingProgress(), this.trigger("progress"));
}), 500);
}, vjs.Player.prototype.stopTrackingProgress = function() {
clearInterval(this.progressInterval);
}, vjs.Player.prototype.manualTimeUpdatesOn = function() {
this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime), this.tech.one("timeupdate", function() {
this.features.timeupdateEvents = !0, this.player_.manualTimeUpdatesOff();
});
}, vjs.Player.prototype.manualTimeUpdatesOff = function() {
this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime);
}, vjs.Player.prototype.trackCurrentTime = function() {
this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = setInterval(vjs.bind(this, function() {
this.trigger("timeupdate");
}), 250);
}, vjs.Player.prototype.stopTrackingCurrentTime = function() {
clearInterval(this.currentTimeInterval);
}, vjs.Player.prototype.onEnded = function() {
this.options_.loop && (this.currentTime(0), this.play());
}, vjs.Player.prototype.onPlay = function() {
vjs.removeClass(this.el_, "vjs-paused"), vjs.addClass(this.el_, "vjs-playing");
}, vjs.Player.prototype.onFirstPlay = function() {
this.options_.starttime && this.currentTime(this.options_.starttime);
}, vjs.Player.prototype.onPause = function() {
vjs.removeClass(this.el_, "vjs-playing"), vjs.addClass(this.el_, "vjs-paused");
}, vjs.Player.prototype.onProgress = function() {
this.bufferedPercent() == 1 && this.trigger("loadedalldata");
}, vjs.Player.prototype.onDurationChange = function() {
this.duration(this.techGet("duration"));
}, vjs.Player.prototype.onError = function(e) {
vjs.log("Video Error", e);
}, vjs.Player.prototype.onFullscreenChange = function() {
this.isFullScreen ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen");
}, vjs.Player.prototype.cache_, vjs.Player.prototype.getCache = function() {
return this.cache_;
}, vjs.Player.prototype.techCall = function(e, t) {
if (this.tech && !this.tech.isReady_) this.tech.ready(function() {
this[e](t);
}); else try {
this.tech[e](t);
} catch (n) {
throw vjs.log(n), n;
}
}, vjs.Player.prototype.techGet = function(e) {
if (this.tech.isReady_) try {
return this.tech[e]();
} catch (t) {
throw this.tech[e] === undefined ? vjs.log("Video.js: " + e + " method not defined for " + this.techName + " playback technology.", t) : t.name == "TypeError" ? (vjs.log("Video.js: " + e + " unavailable on " + this.techName + " playback technology element.", t), this.tech.isReady_ = !1) : vjs.log(t), t;
}
return;
}, vjs.Player.prototype.play = function() {
return this.techCall("play"), this;
}, vjs.Player.prototype.pause = function() {
return this.techCall("pause"), this;
}, vjs.Player.prototype.paused = function() {
return this.techGet("paused") === !1 ? !1 : !0;
}, vjs.Player.prototype.currentTime = function(e) {
return e !== undefined ? (this.cache_.lastSetCurrentTime = e, this.techCall("setCurrentTime", e), this.manualTimeUpdates && this.trigger("timeupdate"), this) : this.cache_.currentTime = this.techGet("currentTime") || 0;
}, vjs.Player.prototype.duration = function(e) {
return e !== undefined ? (this.cache_.duration = parseFloat(e), this) : this.cache_.duration;
}, vjs.Player.prototype.remainingTime = function() {
return this.duration() - this.currentTime();
}, vjs.Player.prototype.buffered = function() {
var e = this.techGet("buffered"), t = 0, n = this.cache_.bufferEnd = this.cache_.bufferEnd || 0;
return e && e.length > 0 && e.end(0) !== n && (n = e.end(0), this.cache_.bufferEnd = n), vjs.createTimeRange(t, n);
}, vjs.Player.prototype.bufferedPercent = function() {
return this.duration() ? this.buffered().end(0) / this.duration() : 0;
}, vjs.Player.prototype.volume = function(e) {
var t;
return e !== undefined ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall("setVolume", t), vjs.setLocalStorage("volume", t), this) : (t = parseFloat(this.techGet("volume")), isNaN(t) ? 1 : t);
}, vjs.Player.prototype.muted = function(e) {
return e !== undefined ? (this.techCall("setMuted", e), this) : this.techGet("muted") || !1;
}, vjs.Player.prototype.supportsFullScreen = function() {
return this.techGet("supportsFullScreen") || !1;
}, vjs.Player.prototype.requestFullScreen = function() {
var e = vjs.support.requestFullScreen;
return this.isFullScreen = !0, e ? (vjs.on(document, e.eventName, vjs.bind(this, function(t) {
this.isFullScreen = document[e.isFullScreen], this.isFullScreen === !1 && vjs.off(document, e.eventName, arguments.callee), this.trigger("fullscreenchange");
})), this.el_[e.requestFn]()) : this.tech.supportsFullScreen() ? this.techCall("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")), this;
}, vjs.Player.prototype.cancelFullScreen = function() {
var e = vjs.support.requestFullScreen;
return this.isFullScreen = !1, e ? document[e.cancelFn]() : this.tech.supportsFullScreen() ? this.techCall("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")), this;
}, vjs.Player.prototype.enterFullWindow = function() {
this.isFullWindow = !0, this.docOrigOverflow = document.documentElement.style.overflow, vjs.on(document, "keydown", vjs.bind(this, this.fullWindowOnEscKey)), document.documentElement.style.overflow = "hidden", vjs.addClass(document.body, "vjs-full-window"), this.trigger("enterFullWindow");
}, vjs.Player.prototype.fullWindowOnEscKey = function(e) {
e.keyCode === 27 && (this.isFullScreen === !0 ? this.cancelFullScreen() : this.exitFullWindow());
}, vjs.Player.prototype.exitFullWindow = function() {
this.isFullWindow = !1, vjs.off(document, "keydown", this.fullWindowOnEscKey), document.documentElement.style.overflow = this.docOrigOverflow, vjs.removeClass(document.body, "vjs-full-window"), this.trigger("exitFullWindow");
}, vjs.Player.prototype.selectSource = function(e) {
for (var t = 0, n = this.options_.techOrder; t < n.length; t++) {
var r = vjs.capitalize(n[t]), i = window.videojs[r];
if (i.isSupported()) for (var s = 0, o = e; s < o.length; s++) {
var u = o[s];
if (i.canPlaySource(u)) return {
source: u,
tech: r
};
}
}
return !1;
}, vjs.Player.prototype.src = function(e) {
if (e instanceof Array) {
var t = this.selectSource(e), n;
t ? (e = t.source, n = t.tech, n == this.techName ? this.src(e) : this.loadTech(n, e)) : this.el_.appendChild(vjs.createEl("p", {
innerHTML: 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'
}));
} else e instanceof Object ? window.videojs[this.techName].canPlaySource(e) ? this.src(e.src) : this.src([ e ]) : (this.cache_.src = e, this.isReady_ ? (this.techCall("src", e), this.options_["preload"] == "auto" && this.load(), this.options_.autoplay && this.play()) : this.ready(function() {
this.src(e);
}));
return this;
}, vjs.Player.prototype.load = function() {
return this.techCall("load"), this;
}, vjs.Player.prototype.currentSrc = function() {
return this.techGet("currentSrc") || this.cache_.src || "";
}, vjs.Player.prototype.preload = function(e) {
return e !== undefined ? (this.techCall("setPreload", e), this.options_.preload = e, this) : this.techGet("preload");
}, vjs.Player.prototype.autoplay = function(e) {
return e !== undefined ? (this.techCall("setAutoplay", e), this.options_.autoplay = e, this) : this.techGet("autoplay", e);
}, vjs.Player.prototype.loop = function(e) {
return e !== undefined ? (this.techCall("setLoop", e), this.options_.loop = e, this) : this.techGet("loop");
}, vjs.Player.prototype.poster_, vjs.Player.prototype.poster = function(e) {
return e !== undefined && (this.poster_ = e), this.poster_;
}, vjs.Player.prototype.controls_, vjs.Player.prototype.controls = function(e) {
return e !== undefined && this.controls_ !== e && (this.controls_ = !!e, this.trigger("controlschange")), this.controls_;
}, vjs.Player.prototype.error = function() {
return this.techGet("error");
}, vjs.Player.prototype.ended = function() {
return this.techGet("ended");
}, function() {
var e, t, n;
n = document.createElement("div"), t = {}, n.cancelFullscreen !== undefined ? (t.requestFn = "requestFullscreen", t.cancelFn = "exitFullscreen", t.eventName = "fullscreenchange", t.isFullScreen = "fullScreen") : (document.mozCancelFullScreen ? (e = "moz", t.isFullScreen = e + "FullScreen") : (e = "webkit", t.isFullScreen = e + "IsFullScreen"), n[e + "RequestFullScreen"] && (t.requestFn = e + "RequestFullScreen", t.cancelFn = e + "CancelFullScreen"), t.eventName = e + "fullscreenchange"), document[t.cancelFn] && (vjs.support.requestFullScreen = t);
}(), vjs.ControlBar = vjs.Component.extend({
init: function(e, t) {
vjs.Component.call(this, e, t), e.controls() || this.disable(), e.one("play", vjs.bind(this, function() {
var e, t = vjs.bind(this, this.fadeIn), n = vjs.bind(this, this.fadeOut);
this.fadeIn(), "ontouchstart" in window || (this.player_.on("mouseover", t), this.player_.on("mouseout", n), this.player_.on("pause", vjs.bind(this, this.lockShowing)), this.player_.on("play", vjs.bind(this, this.unlockShowing))), e = !1, this.player_.on("touchstart", function() {
e = !0;
}), this.player_.on("touchmove", function() {
e = !1;
}), this.player_.on("touchend", vjs.bind(this, function(t) {
var n;
e && (n = this.el().className.search("fade-in"), n !== -1 ? this.fadeOut() : this.fadeIn()), e = !1, this.player_.paused() || t.preventDefault();
}));
}));
}
}), vjs.ControlBar.prototype.options_ = {
loadEvent: "play",
children: {
playToggle: {},
currentTimeDisplay: {},
timeDivider: {},
durationDisplay: {},
remainingTimeDisplay: {},
progressControl: {},
fullscreenToggle: {},
volumeControl: {},
muteToggle: {}
}
}, vjs.ControlBar.prototype.createEl = function() {
return vjs.createEl("div", {
className: "vjs-control-bar"
});
}, vjs.ControlBar.prototype.fadeIn = function() {
vjs.Component.prototype.fadeIn.call(this), this.player_.trigger("controlsvisible");
}, vjs.ControlBar.prototype.fadeOut = function() {
vjs.Component.prototype.fadeOut.call(this), this.player_.trigger("controlshidden");
}, vjs.PlayToggle = vjs.Button.extend({
init: function(e, t) {
vjs.Button.call(this, e, t), e.on("play", vjs.bind(this, this.onPlay)), e.on("pause", vjs.bind(this, this.onPause));
}
}), vjs.PlayToggle.prototype.buttonText = "Play", vjs.PlayToggle.prototype.buildCSSClass = function() {
return "vjs-play-control " + vjs.Button.prototype.buildCSSClass.call(this);
}, vjs.PlayToggle.prototype.onClick = function() {
this.player_.paused() ? this.player_.play() : this.player_.pause();
}, vjs.PlayToggle.prototype.onPlay = function() {
vjs.removeClass(this.el_, "vjs-paused"), vjs.addClass(this.el_, "vjs-playing"), this.el_.children[0].children[0].innerHTML = "Pause";
}, vjs.PlayToggle.prototype.onPause = function() {
vjs.removeClass(this.el_, "vjs-playing"), vjs.addClass(this.el_, "vjs-paused"), this.el_.children[0].children[0].innerHTML = "Play";
}, vjs.CurrentTimeDisplay = vjs.Component.extend({
init: function(e, t) {
vjs.Component.call(this, e, t), e.on("timeupdate", vjs.bind(this, this.updateContent));
}
}), vjs.CurrentTimeDisplay.prototype.createEl = function() {
var e = vjs.Component.prototype.createEl.call(this, "div", {
className: "vjs-current-time vjs-time-controls vjs-control"
});
return this.content = vjs.createEl("div", {
className: "vjs-current-time-display",
innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
"aria-live": "off"
}), e.appendChild(vjs.createEl("div").appendChild(this.content)), e;
}, vjs.CurrentTimeDisplay.prototype.updateContent = function() {
var e = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
this.content.innerHTML = '<span class="vjs-control-text">Current Time </span>' + vjs.formatTime(e, this.player_.duration());
}, vjs.DurationDisplay = vjs.Component.extend({
init: function(e, t) {
vjs.Component.call(this, e, t), e.on("timeupdate", vjs.bind(this, this.updateContent));
}
}), vjs.DurationDisplay.prototype.createEl = function() {
var e = vjs.Component.prototype.createEl.call(this, "div", {
className: "vjs-duration vjs-time-controls vjs-control"
});
return this.content = vjs.createEl("div", {
className: "vjs-duration-display",
innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00',
"aria-live": "off"
}), e.appendChild(vjs.createEl("div").appendChild(this.content)), e;
}, vjs.DurationDisplay.prototype.updateContent = function() {
this.player_.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + vjs.formatTime(this.player_.duration()));
}, vjs.TimeDivider = vjs.Component.extend({
init: function(e, t) {
vjs.Component.call(this, e, t);
}
}), vjs.TimeDivider.prototype.createEl = function() {
return vjs.Component.prototype.createEl.call(this, "div", {
className: "vjs-time-divider",
innerHTML: "<div><span>/</span></div>"
});
}, vjs.RemainingTimeDisplay = vjs.Component.extend({
init: function(e, t) {
vjs.Component.call(this, e, t), e.on("timeupdate", vjs.bind(this, this.updateContent));
}
}), vjs.RemainingTimeDisplay.prototype.createEl = function() {
var e = vjs.Component.prototype.createEl.call(this, "div", {
className: "vjs-remaining-time vjs-time-controls vjs-control"
});
return this.content = vjs.createEl("div", {
className: "vjs-remaining-time-display",
innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00',
"aria-live": "off"
}), e.appendChild(vjs.createEl("div").appendChild(this.content)), e;
}, vjs.RemainingTimeDisplay.prototype.updateContent = function() {
this.player_.duration() && this.player_.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + vjs.formatTime(this.player_.remainingTime()));
}, vjs.FullscreenToggle = vjs.Button.extend({
init: function(e, t) {
vjs.Button.call(this, e, t);
}
}), vjs.FullscreenToggle.prototype.buttonText = "Fullscreen", vjs.FullscreenToggle.prototype.buildCSSClass = function() {
return "vjs-fullscreen-control " + vjs.Button.prototype.buildCSSClass.call(this);
}, vjs.FullscreenToggle.prototype.onClick = function() {
this.player_.isFullScreen ? (this.player_.cancelFullScreen(), this.el_.children[0].children[0].innerHTML = "Fullscreen") : (this.player_.requestFullScreen(), this.el_.children[0].children[0].innerHTML = "Non-Fullscreen");
}, vjs.ProgressControl = vjs.Component.extend({
init: function(e, t) {
vjs.Component.call(this, e, t);
}
}), vjs.ProgressControl.prototype.options_ = {
children: {
seekBar: {}
}
}, vjs.ProgressControl.prototype.createEl = function() {
return vjs.Component.prototype.createEl.call(this, "div", {
className: "vjs-progress-control vjs-control"
});
}, vjs.SeekBar = vjs.Slider.extend({
init: function(e, t) {
vjs.Slider.call(this, e, t), e.on("timeupdate", vjs.bind(this, this.updateARIAAttributes)), e.ready(vjs.bind(this, this.updateARIAAttributes));
}
}), vjs.SeekBar.prototype.options_ = {
children: {
loadProgressBar: {},
playProgressBar: {},
seekHandle: {}
},
barName: "playProgressBar",
handleName: "seekHandle"
}, vjs.SeekBar.prototype.playerEvent = "timeupdate", vjs.SeekBar.prototype.createEl = function() {
return vjs.Slider.prototype.createEl.call(this, "div", {
className: "vjs-progress-holder",
"aria-label": "video progress bar"
});
}, vjs.SeekBar.prototype.updateARIAAttributes = function() {
var e = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
this.el_.setAttribute("aria-valuenow", vjs.round(this.getPercent() * 100, 2)), this.el_.setAttribute("aria-valuetext", vjs.formatTime(e, this.player_.duration()));
}, vjs.SeekBar.prototype.getPercent = function() {
return this.player_.currentTime() / this.player_.duration();
}, vjs.SeekBar.prototype.onMouseDown = function(e) {
vjs.Slider.prototype.onMouseDown.call(this, e), this.player_.scrubbing = !0, this.videoWasPlaying = !this.player_.paused(), this.player_.pause();
}, vjs.SeekBar.prototype.onMouseMove = function(e) {
var t = this.calculateDistance(e) * this.player_.duration();
t == this.player_.duration() && (t -= .1), this.player_.currentTime(t);
}, vjs.SeekBar.prototype.onMouseUp = function(e) {
vjs.Slider.prototype.onMouseUp.call(this, e), this.player_.scrubbing = !1, this.videoWasPlaying && this.player_.play();
}, vjs.SeekBar.prototype.stepForward = function() {
this.player_.currentTime(this.player_.currentTime() + 5);
}, vjs.SeekBar.prototype.stepBack = function() {
this.player_.currentTime(this.player_.currentTime() - 5);
}, vjs.LoadProgressBar = vjs.Component.extend({
init: function(e, t) {
vjs.Component.call(this, e, t), e.on("progress", vjs.bind(this, this.update));
}
}), vjs.LoadProgressBar.prototype.createEl = function() {
return vjs.Component.prototype.createEl.call(this, "div", {
className: "vjs-load-progress",
innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
});
}, vjs.LoadProgressBar.prototype.update = function() {
this.el_.style && (this.el_.style.width = vjs.round(this.player_.bufferedPercent() * 100, 2) + "%");
}, vjs.PlayProgressBar = vjs.Component.extend({
init: function(e, t) {
vjs.Component.call(this, e, t);
}
}), vjs.PlayProgressBar.prototype.createEl = function() {
return vjs.Component.prototype.createEl.call(this, "div", {
className: "vjs-play-progress",
innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
});
}, vjs.SeekHandle = vjs.SliderHandle.extend(), vjs.SeekHandle.prototype.defaultValue = "00:00", vjs.SeekHandle.prototype.createEl = function() {
return vjs.SliderHandle.prototype.createEl.call(this, "div", {
className: "vjs-seek-handle"
});
}, vjs.VolumeControl = vjs.Component.extend({
init: function(e, t) {
vjs.Component.call(this, e, t), e.tech && e.tech.features && e.tech.features.volumeControl === !1 && this.addClass("vjs-hidden"), e.on("loadstart", vjs.bind(this, function() {
e.tech.features && e.tech.features.volumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden");
}));
}
}), vjs.VolumeControl.prototype.options_ = {
children: {
volumeBar: {}
}
}, vjs.VolumeControl.prototype.createEl = function() {
return vjs.Component.prototype.createEl.call(this, "div", {
className: "vjs-volume-control vjs-control"
});
}, vjs.VolumeBar = vjs.Slider.extend({
init: function(e, t) {
vjs.Slider.call(this, e, t), e.on("volumechange", vjs.bind(this, this.updateARIAAttributes)), e.ready(vjs.bind(this, this.updateARIAAttributes)), setTimeout(vjs.bind(this, this.update), 0);
}
}), vjs.VolumeBar.prototype.updateARIAAttributes = function() {
this.el_.setAttribute("aria-valuenow", vjs.round(this.player_.volume() * 100, 2)), this.el_.setAttribute("aria-valuetext", vjs.round(this.player_.volume() * 100, 2) + "%");
}, vjs.VolumeBar.prototype.options_ = {
children: {
volumeLevel: {},
volumeHandle: {}
},
barName: "volumeLevel",
handleName: "volumeHandle"
}, vjs.VolumeBar.prototype.playerEvent = "volumechange", vjs.VolumeBar.prototype.createEl = function() {
return vjs.Slider.prototype.createEl.call(this, "div", {
className: "vjs-volume-bar",
"aria-label": "volume level"
});
}, vjs.VolumeBar.prototype.onMouseMove = function(e) {
this.player_.volume(this.calculateDistance(e));
}, vjs.VolumeBar.prototype.getPercent = function() {
return this.player_.muted() ? 0 : this.player_.volume();
}, vjs.VolumeBar.prototype.stepForward = function() {
this.player_.volume(this.player_.volume() + .1);
}, vjs.VolumeBar.prototype.stepBack = function() {
this.player_.volume(this.player_.volume() - .1);
}, vjs.VolumeLevel = vjs.Component.extend({
init: function(e, t) {
vjs.Component.call(this, e, t);
}
}), vjs.VolumeLevel.prototype.createEl = function() {
return vjs.Component.prototype.createEl.call(this, "div", {
className: "vjs-volume-level",
innerHTML: '<span class="vjs-control-text"></span>'
});
}, vjs.VolumeHandle = vjs.SliderHandle.extend(), vjs.VolumeHandle.prototype.defaultValue = "00:00", vjs.VolumeHandle.prototype.createEl = function() {
return vjs.SliderHandle.prototype.createEl.call(this, "div", {
className: "vjs-volume-handle"
});
}, vjs.MuteToggle = vjs.Button.extend({
init: function(e, t) {
vjs.Button.call(this, e, t), e.on("volumechange", vjs.bind(this, this.update)), e.tech && e.tech.features && e.tech.features.volumeControl === !1 && this.addClass("vjs-hidden"), e.on("loadstart", vjs.bind(this, function() {
e.tech.features && e.tech.features.volumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden");
}));
}
}), vjs.MuteToggle.prototype.createEl = function() {
return vjs.Button.prototype.createEl.call(this, "div", {
className: "vjs-mute-control vjs-control",
innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
});
}, vjs.MuteToggle.prototype.onClick = function() {
this.player_.muted(this.player_.muted() ? !1 : !0);
}, vjs.MuteToggle.prototype.update = function() {
var e = this.player_.volume(), t = 3;
e === 0 || this.player_.muted() ? t = 0 : e < .33 ? t = 1 : e < .67 && (t = 2), this.player_.muted() ? this.el_.children[0].children[0].innerHTML != "Unmute" && (this.el_.children[0].children[0].innerHTML = "Unmute") : this.el_.children[0].children[0].innerHTML != "Mute" && (this.el_.children[0].children[0].innerHTML = "Mute");
for (var n = 0; n < 4; n++) vjs.removeClass(this.el_, "vjs-vol-" + n);
vjs.addClass(this.el_, "vjs-vol-" + t);
}, vjs.VolumeMenuButton = vjs.MenuButton.extend({
init: function(e, t) {
vjs.MenuButton.call(this, e, t), e.on("volumechange", vjs.bind(this, this.update)), e.tech && e.tech.features && e.tech.features.volumeControl === !1 && this.addClass("vjs-hidden"), e.on("loadstart", vjs.bind(this, function() {
e.tech.features && e.tech.features.volumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden");
})), this.addClass("vjs-menu-button");
}
}), vjs.VolumeMenuButton.prototype.createMenu = function() {
var e = new vjs.Menu(this.player_, {
contentElType: "div"
}), t = new vjs.VolumeBar(this.player_, vjs.obj.merge({
vertical: !0
}, this.options_.volumeBar));
return e.addChild(t), e;
}, vjs.VolumeMenuButton.prototype.onClick = function() {
vjs.MuteToggle.prototype.onClick.call(this), vjs.MenuButton.prototype.onClick.call(this);
}, vjs.VolumeMenuButton.prototype.createEl = function() {
return vjs.Button.prototype.createEl.call(this, "div", {
className: "vjs-volume-menu-button vjs-menu-button vjs-control",
innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
});
}, vjs.VolumeMenuButton.prototype.update = vjs.MuteToggle.prototype.update, vjs.PosterImage = vjs.Button.extend({
init: function(e, t) {
vjs.Button.call(this, e, t), (!e.poster() || !e.controls()) && this.hide(), e.on("play", vjs.bind(this, this.hide));
}
}), vjs.PosterImage.prototype.createEl = function() {
var e = vjs.createEl("div", {
className: "vjs-poster",
tabIndex: -1
}), t = this.player_.poster();
return t && ("backgroundSize" in e.style ? e.style.backgroundImage = 'url("' + t + '")' : e.appendChild(vjs.createEl("img", {
src: t
}))), e;
}, vjs.PosterImage.prototype.onClick = function() {
this.player_.play();
}, vjs.LoadingSpinner = vjs.Component.extend({
init: function(e, t) {
vjs.Component.call(this, e, t), e.on("canplay", vjs.bind(this, this.hide)), e.on("canplaythrough", vjs.bind(this, this.hide)), e.on("playing", vjs.bind(this, this.hide)), e.on("seeked", vjs.bind(this, this.hide)), e.on("seeking", vjs.bind(this, this.show)), e.on("seeked", vjs.bind(this, this.hide)), e.on("error", vjs.bind(this, this.show)), e.on("waiting", vjs.bind(this, this.show));
}
}), vjs.LoadingSpinner.prototype.createEl = function() {
return vjs.Component.prototype.createEl.call(this, "div", {
className: "vjs-loading-spinner"
});
}, vjs.BigPlayButton = vjs.Button.extend({
init: function(e, t) {
vjs.Button.call(this, e, t), e.controls() || this.hide(), e.on("play", vjs.bind(this, this.hide));
}
}), vjs.BigPlayButton.prototype.createEl = function() {
return vjs.Button.prototype.createEl.call(this, "div", {
className: "vjs-big-play-button",
innerHTML: "<span></span>",
"aria-label": "play video"
});
}, vjs.BigPlayButton.prototype.onClick = function() {
this.player_.play();
}, vjs.MediaTechController = vjs.Component.extend({
init: function(e, t, n) {
vjs.Component.call(this, e, t, n);
}
}), vjs.MediaTechController.prototype.onClick = function() {
return vjs.IS_ANDROID ? function() {} : function() {
this.player_.controls() && (this.player_.paused() ? this.player_.play() : this.player_.pause());
};
}(), vjs.MediaTechController.prototype.features = {
volumeControl: !0,
fullscreenResize: !1,
progressEvents: !1,
timeupdateEvents: !1
}, vjs.media = {}, vjs.media.ApiMethods = "play,pause,paused,currentTime,setCurrentTime,duration,buffered,volume,setVolume,muted,setMuted,width,height,supportsFullScreen,enterFullScreen,src,load,currentSrc,preload,setPreload,autoplay,setAutoplay,loop,setLoop,error,networkState,readyState,seeking,initialTime,startOffsetTime,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks,defaultPlaybackRate,playbackRate,mediaGroup,controller,controls,defaultMuted".split(",");
function createMethod(e) {
return function() {
throw new Error('The "' + e + "\" method is not available on the playback technology's API");
};
}
for (var i = vjs.media.ApiMethods.length - 1; i >= 0; i--) {
var methodName = vjs.media.ApiMethods[i];
vjs.MediaTechController.prototype[vjs.media.ApiMethods[i]] = createMethod(methodName);
}
vjs.Html5 = vjs.MediaTechController.extend({
init: function(e, t, n) {
this.features.volumeControl = vjs.Html5.canControlVolume(), this.features.movingMediaElementInDOM = !vjs.IS_IOS, this.features.fullscreenResize = !0, vjs.MediaTechController.call(this, e, t, n);
var r = t.source;
r && this.el_.currentSrc == r.src ? e.trigger("loadstart") : r && (this.el_.src = r.src), e.ready(function() {
this.tag && this.options_.autoplay && this.paused() && (delete this.tag.poster, this.play());
}), this.on("click", this.onClick), this.setupTriggers(), this.triggerReady();
}
}), vjs.Html5.prototype.dispose = function() {
vjs.MediaTechController.prototype.dispose.call(this);
}, vjs.Html5.prototype.createEl = function() {
var e = this.player_, t = e.tag, n;
if (!t || this.features.movingMediaElementInDOM === !1) t ? (t.player = null, e.tag = null, e.el().removeChild(t), t = t.cloneNode(!1)) : t = vjs.createEl("video", {
id: e.id() + "_html5_api",
className: "vjs-tech"
}), t.player = e, vjs.insertFirst(t, e.el());
var r = [ "autoplay", "preload", "loop", "muted" ];
for (var i = r.length - 1; i >= 0; i--) {
var s = r[i];
e.options_[s] !== null && (t[s] = e.options_[s]);
}
return t;
}, vjs.Html5.prototype.setupTriggers = function() {
for (var e = vjs.Html5.Events.length - 1; e >= 0; e--) vjs.on(this.el_, vjs.Html5.Events[e], vjs.bind(this.player_, this.eventHandler));
}, vjs.Html5.prototype.eventHandler = function(e) {
this.trigger(e), e.stopPropagation();
}, vjs.Html5.prototype.play = function() {
this.el_.play();
}, vjs.Html5.prototype.pause = function() {
this.el_.pause();
}, vjs.Html5.prototype.paused = function() {
return this.el_.paused;
}, vjs.Html5.prototype.currentTime = function() {
return this.el_.currentTime;
}, vjs.Html5.prototype.setCurrentTime = function(e) {
try {
this.el_.currentTime = e;
} catch (t) {
vjs.log(t, "Video is not ready. (Video.js)");
}
}, vjs.Html5.prototype.duration = function() {
return this.el_.duration || 0;
}, vjs.Html5.prototype.buffered = function() {
return this.el_.buffered;
}, vjs.Html5.prototype.volume = function() {
return this.el_.volume;
}, vjs.Html5.prototype.setVolume = function(e) {
this.el_.volume = e;
}, vjs.Html5.prototype.muted = function() {
return this.el_.muted;
}, vjs.Html5.prototype.setMuted = function(e) {
this.el_.muted = e;
}, vjs.Html5.prototype.width = function() {
return this.el_.offsetWidth;
}, vjs.Html5.prototype.height = function() {
return this.el_.offsetHeight;
}, vjs.Html5.prototype.supportsFullScreen = function() {
if (typeof this.el_.webkitEnterFullScreen == "function") if (/Android/.test(vjs.USER_AGENT) || !/Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT)) return !0;
return !1;
}, vjs.Html5.prototype.enterFullScreen = function() {
var e = this.el_;
e.paused && e.networkState <= e.HAVE_METADATA ? (this.el_.play(), setTimeout(function() {
e.pause(), e.webkitEnterFullScreen();
}, 0)) : e.webkitEnterFullScreen();
}, vjs.Html5.prototype.exitFullScreen = function() {
this.el_.webkitExitFullScreen();
}, vjs.Html5.prototype.src = function(e) {
this.el_.src = e;
}, vjs.Html5.prototype.load = function() {
this.el_.load();
}, vjs.Html5.prototype.currentSrc = function() {
return this.el_.currentSrc;
}, vjs.Html5.prototype.preload = function() {
return this.el_.preload;
}, vjs.Html5.prototype.setPreload = function(e) {
this.el_.preload = e;
}, vjs.Html5.prototype.autoplay = function() {
return this.el_.autoplay;
}, vjs.Html5.prototype.setAutoplay = function(e) {
this.el_.autoplay = e;
}, vjs.Html5.prototype.loop = function() {
return this.el_.loop;
}, vjs.Html5.prototype.setLoop = function(e) {
this.el_.loop = e;
}, vjs.Html5.prototype.error = function() {
return this.el_.error;
}, vjs.Html5.prototype.seeking = function() {
return this.el_.seeking;
}, vjs.Html5.prototype.ended = function() {
return this.el_.ended;
}, vjs.Html5.prototype.defaultMuted = function() {
return this.el_.defaultMuted;
}, vjs.Html5.isSupported = function() {
return !!vjs.TEST_VID.canPlayType;
}, vjs.Html5.canPlaySource = function(e) {
try {
return !!vjs.TEST_VID.canPlayType(e.type);
} catch (t) {
return "";
}
}, vjs.Html5.canControlVolume = function() {
var e = vjs.TEST_VID.volume;
return vjs.TEST_VID.volume = e / 2 + .1, e !== vjs.TEST_VID.volume;
}, vjs.Html5.Events = "loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(","), vjs.IS_OLD_ANDROID && (document.createElement("video").constructor.prototype.canPlayType = function(e) {
return e && e.toLowerCase().indexOf("video/mp4") != -1 ? "maybe" : "";
}), vjs.Flash = vjs.MediaTechController.extend({
init: function(e, t, n) {
vjs.MediaTechController.call(this, e, t, n);
var r = t.source, i = t.parentEl, s = this.el_ = vjs.createEl("div", {
id: e.id() + "_temp_flash"
}), o = e.id() + "_flash_api", u = e.options_, a = vjs.obj.merge({
readyFunction: "videojs.Flash.onReady",
eventProxyFunction: "videojs.Flash.onEvent",
errorEventProxyFunction: "videojs.Flash.onError",
autoplay: u.autoplay,
preload: u.preload,
loop: u.loop,
muted: u.muted
}, t.flashVars), f = vjs.obj.merge({
wmode: "transparent",
bgcolor: "#000000"
}, t.params), l = vjs.obj.merge({
id: o,
name: o,
"class": "vjs-tech"
}, t.attributes);
r && (a.src = encodeURIComponent(vjs.getAbsoluteURL(r.src))), vjs.insertFirst(s, i), t.startTime && this.ready(function() {
this.load(), this.play(), this.currentTime(t.startTime);
});
if (t.iFrameMode === !0 && !vjs.IS_FIREFOX) {
var c = vjs.createEl("iframe", {
id: o + "_iframe",
name: o + "_iframe",
className: "vjs-tech",
scrolling: "no",
marginWidth: 0,
marginHeight: 0,
frameBorder: 0
});
a.readyFunction = "ready", a.eventProxyFunction = "events", a.errorEventProxyFunction = "errors", vjs.on(c, "load", vjs.bind(this, function() {
var e, n = c.contentWindow;
e = c.contentDocument ? c.contentDocument : c.contentWindow.document, e.write(vjs.Flash.getEmbedCode(t.swf, a, f, l)), n.player = this.player_, n.ready = vjs.bind(this.player_, function(t) {
var n = e.getElementById(t), r = this, i = r.tech;
i.el_ = n, vjs.on(n, "click", i.bind(i.onClick)), vjs.Flash.checkReady(i);
}), n.events = vjs.bind(this.player_, function(e, t) {
var n = this;
n && n.techName === "flash" && n.trigger(t);
}), n.errors = vjs.bind(this.player_, function(e, t) {
vjs.log("Flash Error", t);
});
})), s.parentNode.replaceChild(c, s);
} else vjs.Flash.embed(t.swf, s, a, f, l);
}
}), vjs.Flash.prototype.dispose = function() {
vjs.MediaTechController.prototype.dispose.call(this);
}, vjs.Flash.prototype.play = function() {
this.el_.vjs_play();
}, vjs.Flash.prototype.pause = function() {
this.el_.vjs_pause();
}, vjs.Flash.prototype.src = function(e) {
e = vjs.getAbsoluteURL(e), this.el_.vjs_src(e);
if (this.player_.autoplay()) {
var t = this;
setTimeout(function() {
t.play();
}, 0);
}
}, vjs.Flash.prototype.load = function() {
this.el_.vjs_load();
}, vjs.Flash.prototype.poster = function() {
this.el_.vjs_getProperty("poster");
}, vjs.Flash.prototype.buffered = function() {
return vjs.createTimeRange(0, this.el_.vjs_getProperty("buffered"));
}, vjs.Flash.prototype.supportsFullScreen = function() {
return !1;
}, vjs.Flash.prototype.enterFullScreen = function() {
return !1;
};
var api = vjs.Flash.prototype, readWrite = "preload,currentTime,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","), readOnly = "error,currentSrc,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks".split(","), createSetter = function(e) {
var t = e.charAt(0).toUpperCase() + e.slice(1);
api["set" + t] = function(t) {
return this.el_.vjs_setProperty(e, t);
};
}, createGetter = function(e) {
api[e] = function() {
return this.el_.vjs_getProperty(e);
};
};
(function() {
var e;
for (e = 0; e < readWrite.length; e++) createGetter(readWrite[e]), createSetter(readWrite[e]);
for (e = 0; e < readOnly.length; e++) createGetter(readOnly[e]);
})(), vjs.Flash.isSupported = function() {
return vjs.Flash.version()[0] >= 10;
}, vjs.Flash.canPlaySource = function(e) {
if (e.type in vjs.Flash.formats) return "maybe";
}, vjs.Flash.formats = {
"video/flv": "FLV",
"video/x-flv": "FLV",
"video/mp4": "MP4",
"video/m4v": "MP4"
}, vjs.Flash.onReady = function(e) {
var t = vjs.el(e), n = t.player || t.parentNode.player, r = n.tech;
t.player = n, r.el_ = t, r.on("click", r.onClick), vjs.Flash.checkReady(r);
}, vjs.Flash.checkReady = function(e) {
e.el().vjs_getProperty ? e.triggerReady() : setTimeout(function() {
vjs.Flash.checkReady(e);
}, 50);
}, vjs.Flash.onEvent = function(e, t) {
var n = vjs.el(e).player;
n.trigger(t);
}, vjs.Flash.onError = function(e, t) {
var n = vjs.el(e).player;
n.trigger("error"), vjs.log("Flash Error", t, e);
}, vjs.Flash.version = function() {
var e = "0,0,0";
try {
e = (new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
} catch (t) {
try {
navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]);
} catch (n) {}
}
return e.split(",");
}, vjs.Flash.embed = function(e, t, n, r, i) {
var s = vjs.Flash.getEmbedCode(e, n, r, i), o = vjs.createEl("div", {
innerHTML: s
}).childNodes[0], u = t.parentNode;
t.parentNode.replaceChild(o, t);
var a = u.childNodes[0];
return setTimeout(function() {
a.style.display = "block";
}, 1e3), o;
}, vjs.Flash.getEmbedCode = function(e, t, n, r) {
var i = '<object type="application/x-shockwave-flash"', s = "", o = "", u = "";
return t && vjs.obj.each(t, function(e, t) {
s += e + "=" + t + "&amp;";
}), n = vjs.obj.merge({
movie: e,
flashvars: s,
allowScriptAccess: "always",
allowNetworking: "all"
}, n), vjs.obj.each(n, function(e, t) {
o += '<param name="' + e + '" value="' + t + '" />';
}), r = vjs.obj.merge({
data: e,
width: "100%",
height: "100%"
}, r), vjs.obj.each(r, function(e, t) {
u += e + '="' + t + '" ';
}), i + u + ">" + o + "</object>";
}, vjs.MediaLoader = vjs.Component.extend({
init: function(e, t, n) {
vjs.Component.call(this, e, t, n);
if (!e.options_.sources || e.options_.sources.length === 0) for (var r = 0, i = e.options_.techOrder; r < i.length; r++) {
var s = vjs.capitalize(i[r]), o = window.videojs[s];
if (o && o.isSupported()) {
e.loadTech(s);
break;
}
} else e.src(e.options_.sources);
}
}), vjs.Player.prototype.textTracks_, vjs.Player.prototype.textTracks = function() {
return this.textTracks_ = this.textTracks_ || [], this.textTracks_;
}, vjs.Player.prototype.addTextTrack = function(e, t, n, r) {
var i = this.textTracks_ = this.textTracks_ || [];
r = r || {}, r.kind = e, r.label = t, r.language = n;
var s = vjs.capitalize(e || "subtitles"), o = new window.videojs[s + "Track"](this, r);
return i.push(o), o;
}, vjs.Player.prototype.addTextTracks = function(e) {
var t;
for (var n = 0; n < e.length; n++) t = e[n], this.addTextTrack(t.kind, t.label, t.language, t);
return this;
}, vjs.Player.prototype.showTextTrack = function(e, t) {
var n = this.textTracks_, r = 0, i = n.length, s, o, u;
for (; r < i; r++) s = n[r], s.id() === e ? (s.show(), o = s) : t && s.kind() == t && s.mode() > 0 && s.disable();
return u = o ? o.kind() : t ? t : !1, u && this.trigger(u + "trackchange"), this;
}, vjs.TextTrack = vjs.Component.extend({
init: function(e, t) {
vjs.Component.call(this, e, t), this.id_ = t.id || "vjs_" + t.kind + "_" + t.language + "_" + vjs.guid++, this.src_ = t.src, this.dflt_ = t["default"] || t.dflt, this.title_ = t.title, this.language_ = t.srclang, this.label_ = t.label, this.cues_ = [], this.activeCues_ = [], this.readyState_ = 0, this.mode_ = 0, this.player_.on("fullscreenchange", vjs.bind(this, this.adjustFontSize));
}
}), vjs.TextTrack.prototype.kind_, vjs.TextTrack.prototype.kind = function() {
return this.kind_;
}, vjs.TextTrack.prototype.src_, vjs.TextTrack.prototype.src = function() {
return this.src_;
}, vjs.TextTrack.prototype.dflt_, vjs.TextTrack.prototype.dflt = function() {
return this.dflt_;
}, vjs.TextTrack.prototype.title_, vjs.TextTrack.prototype.title = function() {
return this.title_;
}, vjs.TextTrack.prototype.language_, vjs.TextTrack.prototype.language = function() {
return this.language_;
}, vjs.TextTrack.prototype.label_, vjs.TextTrack.prototype.label = function() {
return this.label_;
}, vjs.TextTrack.prototype.cues_, vjs.TextTrack.prototype.cues = function() {
return this.cues_;
}, vjs.TextTrack.prototype.activeCues_, vjs.TextTrack.prototype.activeCues = function() {
return this.activeCues_;
}, vjs.TextTrack.prototype.readyState_, vjs.TextTrack.prototype.readyState = function() {
return this.readyState_;
}, vjs.TextTrack.prototype.mode_, vjs.TextTrack.prototype.mode = function() {
return this.mode_;
}, vjs.TextTrack.prototype.adjustFontSize = function() {
this.player_.isFullScreen ? this.el_.style.fontSize = screen.width / this.player_.width() * 1.4 * 100 + "%" : this.el_.style.fontSize = "";
}, vjs.TextTrack.prototype.createEl = function() {
return vjs.Component.prototype.createEl.call(this, "div", {
className: "vjs-" + this.kind_ + " vjs-text-track"
});
}, vjs.TextTrack.prototype.show = function() {
this.activate(), this.mode_ = 2, vjs.Component.prototype.show.call(this);
}, vjs.TextTrack.prototype.hide = function() {
this.activate(), this.mode_ = 1, vjs.Component.prototype.hide.call(this);
}, vjs.TextTrack.prototype.disable = function() {
this.mode_ == 2 && this.hide(), this.deactivate(), this.mode_ = 0;
}, vjs.TextTrack.prototype.activate = function() {
this.readyState_ === 0 && this.load(), this.mode_ === 0 && (this.player_.on("timeupdate", vjs.bind(this, this.update, this.id_)), this.player_.on("ended", vjs.bind(this, this.reset, this.id_)), (this.kind_ === "captions" || this.kind_ === "subtitles") && this.player_.getChild("textTrackDisplay").addChild(this));
}, vjs.TextTrack.prototype.deactivate = function() {
this.player_.off("timeupdate", vjs.bind(this, this.update, this.id_)), this.player_.off("ended", vjs.bind(this, this.reset, this.id_)), this.reset(), this.player_.getChild("textTrackDisplay").removeChild(this);
}, vjs.TextTrack.prototype.load = function() {
this.readyState_ === 0 && (this.readyState_ = 1, vjs.get(this.src_, vjs.bind(this, this.parseCues), vjs.bind(this, this.onError)));
}, vjs.TextTrack.prototype.onError = function(e) {
this.error = e, this.readyState_ = 3, this.trigger("error");
}, vjs.TextTrack.prototype.parseCues = function(e) {
var t, n, r, i = e.split("\n"), s = "", o;
for (var u = 1, a = i.length; u < a; u++) {
s = vjs.trim(i[u]);
if (s) {
s.indexOf("-->") == -1 ? (o = s, s = vjs.trim(i[++u])) : o = this.cues_.length, t = {
id: o,
index: this.cues_.length
}, n = s.split(" --> "), t.startTime = this.parseCueTime(n[0]), t.endTime = this.parseCueTime(n[1]), r = [];
while (i[++u] && (s = vjs.trim(i[u]))) r.push(s);
t.text = r.join("<br/>"), this.cues_.push(t);
}
}
this.readyState_ = 2, this.trigger("loaded");
}, vjs.TextTrack.prototype.parseCueTime = function(e) {
var t = e.split(":"), n = 0, r, i, s, o, u;
return t.length == 3 ? (r = t[0], i = t[1], s = t[2]) : (r = 0, i = t[0], s = t[1]), s = s.split(/\s+/), o = s.splice(0, 1)[0], o = o.split(/\.|,/), u = parseFloat(o[1]), o = o[0], n += parseFloat(r) * 3600, n += parseFloat(i) * 60, n += parseFloat(o), u && (n += u / 1e3), n;
}, vjs.TextTrack.prototype.update = function() {
if (this.cues_.length > 0) {
var e = this.player_.currentTime();
if (this.prevChange === undefined || e < this.prevChange || this.nextChange <= e) {
var t = this.cues_, n = this.player_.duration(), r = 0, i = !1, s = [], o, u, a, f;
e >= this.nextChange || this.nextChange === undefined ? f = this.firstActiveIndex !== undefined ? this.firstActiveIndex : 0 : (i = !0, f = this.lastActiveIndex !== undefined ? this.lastActiveIndex : t.length - 1);
for (;;) {
a = t[f];
if (a.endTime <= e) r = Math.max(r, a.endTime), a.active && (a.active = !1); else if (e < a.startTime) {
n = Math.min(n, a.startTime), a.active && (a.active = !1);
if (!i) break;
} else i ? (s.splice(0, 0, a), u === undefined && (u = f), o = f) : (s.push(a), o === undefined && (o = f), u = f), n = Math.min(n, a.endTime), r = Math.max(r, a.startTime), a.active = !0;
if (i) {
if (f === 0) break;
f--;
} else {
if (f === t.length - 1) break;
f++;
}
}
this.activeCues_ = s, this.nextChange = n, this.prevChange = r, this.firstActiveIndex = o, this.lastActiveIndex = u, this.updateDisplay(), this.trigger("cuechange");
}
}
}, vjs.TextTrack.prototype.updateDisplay = function() {
var e = this.activeCues_, t = "", n = 0, r = e.length;
for (; n < r; n++) t += '<span class="vjs-tt-cue">' + e[n].text + "</span>";
this.el_.innerHTML = t;
}, vjs.TextTrack.prototype.reset = function() {
this.nextChange = 0, this.prevChange = this.player_.duration(), this.firstActiveIndex = 0, this.lastActiveIndex = 0;
}, vjs.CaptionsTrack = vjs.TextTrack.extend(), vjs.CaptionsTrack.prototype.kind_ = "captions", vjs.SubtitlesTrack = vjs.TextTrack.extend(), vjs.SubtitlesTrack.prototype.kind_ = "subtitles", vjs.ChaptersTrack = vjs.TextTrack.extend(), vjs.ChaptersTrack.prototype.kind_ = "chapters", vjs.TextTrackDisplay = vjs.Component.extend({
init: function(e, t, n) {
vjs.Component.call(this, e, t, n), e.options_.tracks && e.options_.tracks.length > 0 && this.player_.addTextTracks(e.options_.tracks);
}
}), vjs.TextTrackDisplay.prototype.createEl = function() {
return vjs.Component.prototype.createEl.call(this, "div", {
className: "vjs-text-track-display"
});
}, vjs.TextTrackMenuItem = vjs.MenuItem.extend({
init: function(e, t) {
var n = this.track = t.track;
t.label = n.label(), t.selected = n.dflt(), vjs.MenuItem.call(this, e, t), this.player_.on(n.kind() + "trackchange", vjs.bind(this, this.update));
}
}), vjs.TextTrackMenuItem.prototype.onClick = function() {
vjs.MenuItem.prototype.onClick.call(this), this.player_.showTextTrack(this.track.id_, this.track.kind());
}, vjs.TextTrackMenuItem.prototype.update = function() {
this.selected(this.track.mode() == 2);
}, vjs.OffTextTrackMenuItem = vjs.TextTrackMenuItem.extend({
init: function(e, t) {
t.track = {
kind: function() {
return t.kind;
},
player: e,
label: function() {
return t.kind + " off";
},
dflt: function() {
return !1;
},
mode: function() {
return !1;
}
}, vjs.TextTrackMenuItem.call(this, e, t), this.selected(!0);
}
}), vjs.OffTextTrackMenuItem.prototype.onClick = function() {
vjs.TextTrackMenuItem.prototype.onClick.call(this), this.player_.showTextTrack(this.track.id_, this.track.kind());
}, vjs.OffTextTrackMenuItem.prototype.update = function() {
var e = this.player_.textTracks(), t = 0, n = e.length, r, i = !0;
for (; t < n; t++) r = e[t], r.kind() == this.track.kind() && r.mode() == 2 && (i = !1);
this.selected(i);
}, vjs.TextTrackButton = vjs.MenuButton.extend({
init: function(e, t) {
vjs.MenuButton.call(this, e, t), this.items.length <= 1 && this.hide();
}
}), vjs.TextTrackButton.prototype.createItems = function() {
var e = [], t;
e.push(new vjs.OffTextTrackMenuItem(this.player_, {
kind: this.kind_
}));
for (var n = 0; n < this.player_.textTracks().length; n++) t = this.player_.textTracks()[n], t.kind() === this.kind_ && e.push(new vjs.TextTrackMenuItem(this.player_, {
track: t
}));
return e;
}, vjs.CaptionsButton = vjs.TextTrackButton.extend({
init: function(e, t, n) {
vjs.TextTrackButton.call(this, e, t, n), this.el_.setAttribute("aria-label", "Captions Menu");
}
}), vjs.CaptionsButton.prototype.kind_ = "captions", vjs.CaptionsButton.prototype.buttonText = "Captions", vjs.CaptionsButton.prototype.className = "vjs-captions-button", vjs.SubtitlesButton = vjs.TextTrackButton.extend({
init: function(e, t, n) {
vjs.TextTrackButton.call(this, e, t, n), this.el_.setAttribute("aria-label", "Subtitles Menu");
}
}), vjs.SubtitlesButton.prototype.kind_ = "subtitles", vjs.SubtitlesButton.prototype.buttonText = "Subtitles", vjs.SubtitlesButton.prototype.className = "vjs-subtitles-button", vjs.ChaptersButton = vjs.TextTrackButton.extend({
init: function(e, t, n) {
vjs.TextTrackButton.call(this, e, t, n), this.el_.setAttribute("aria-label", "Chapters Menu");
}
}), vjs.ChaptersButton.prototype.kind_ = "chapters", vjs.ChaptersButton.prototype.buttonText = "Chapters", vjs.ChaptersButton.prototype.className = "vjs-chapters-button", vjs.ChaptersButton.prototype.createItems = function() {
var e = [], t;
for (var n = 0; n < this.player_.textTracks().length; n++) t = this.player_.textTracks()[n], t.kind() === this.kind_ && e.push(new vjs.TextTrackMenuItem(this.player_, {
track: t
}));
return e;
}, vjs.ChaptersButton.prototype.createMenu = function() {
var e = this.player_.textTracks(), t = 0, n = e.length, r, i, s = this.items = [];
for (; t < n; t++) {
r = e[t];
if (r.kind() == this.kind_ && r.dflt()) {
if (r.readyState() < 2) {
this.chaptersTrack = r, r.on("loaded", vjs.bind(this, this.createMenu));
return;
}
i = r;
break;
}
}
var o = this.menu = new vjs.Menu(this.player_);
o.el_.appendChild(vjs.createEl("li", {
className: "vjs-menu-title",
innerHTML: vjs.capitalize(this.kind_),
tabindex: -1
}));
if (i) {
var u = i.cues_, a, f;
t = 0, n = u.length;
for (; t < n; t++) a = u[t], f = new vjs.ChaptersTrackMenuItem(this.player_, {
track: i,
cue: a
}), s.push(f), o.addChild(f);
}
return this.items.length > 0 && this.show(), o;
}, vjs.ChaptersTrackMenuItem = vjs.MenuItem.extend({
init: function(e, t) {
var n = this.track = t.track, r = this.cue = t.cue, i = e.currentTime();
t.label = r.text, t.selected = r.startTime <= i && i < r.endTime, vjs.MenuItem.call(this, e, t), n.on("cuechange", vjs.bind(this, this.update));
}
}), vjs.ChaptersTrackMenuItem.prototype.onClick = function() {
vjs.MenuItem.prototype.onClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime);
}, vjs.ChaptersTrackMenuItem.prototype.update = function() {
var e = this.cue, t = this.player_.currentTime();
this.selected(e.startTime <= t && t < e.endTime);
}, vjs.obj.merge(vjs.ControlBar.prototype.options_.children, {
subtitlesButton: {},
captionsButton: {},
chaptersButton: {}
}), vjs.JSON;
if (typeof window.JSON != "undefined" && window.JSON.parse === "function") vjs.JSON = window.JSON; else {
vjs.JSON = {};
var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
vjs.JSON.parse = function(text, reviver) {
function walk(e, t) {
var n, r, i = e[t];
if (i && typeof i == "object") for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
return reviver.call(e, t, i);
}
var j;
text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
}));
if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
"": j
}, "") : j;
throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");
};
}
return vjs.autoSetup = function() {
var e, t, n, r = document.getElementsByTagName("video");
if (r && r.length > 0) for (var i = 0, s = r.length; i < s; i++) {
t = r[i];
if (!t || !t.getAttribute) {
vjs.autoSetupTimeout(1);
break;
}
t.player === undefined && (e = t.getAttribute("data-setup"), e !== null && (e = vjs.JSON.parse(e || "{}"), n = videojs(t, e)));
} else vjs.windowLoaded || vjs.autoSetupTimeout(1);
}, vjs.autoSetupTimeout = function(e) {
setTimeout(vjs.autoSetup, e);
}, vjs.one(window, "load", function() {
vjs.windowLoaded = !0;
}), vjs.autoSetupTimeout(1), vjs.plugin = function(e, t) {
vjs.Player.prototype[e] = t;
}, videojs;
} catch (e) {
wx.jslog({
src: "common/lib/video.js"
}, e);
}
});define("tpl/media/appmsg.html.js", [], function(e, t, n) {
return '<div class="appmsg {if isMul}multi{/if}" data-id="{id}" data-fileid="{file_id}">\n    <div class="appmsg_content">\n        {if isMul}\n            <div class="appmsg_info">\n                <em class="appmsg_date">{time}</em>\n            </div>\n            <div class="cover_appmsg_item">\n                <h4 class="appmsg_title"><a href="{first.content_url}" target="_blank">{first.title}</a></h4>\n                <div class="appmsg_thumb_wrp"><img src="{first.cover}" alt="" class="appmsg_thumb"></div>\n            </div>\n            {each list as item}\n            <div class="appmsg_item">\n                <img src="{item.cover}" alt="" class="appmsg_thumb">\n                <h4 class="appmsg_title"><a href="{item.content_url}" target="_blank">{item.title}</a></h4>\n            </div>\n            {/each}\n        {else}\n            <h4 class="appmsg_title"><a href="{first.content_url}" target="_blank">{first.title}</a></h4>\n            <div class="appmsg_info">\n                <em class="appmsg_date">{time}</em>\n            </div>\n            <div class="appmsg_thumb_wrp"><img src="{first.cover}" alt="" class="appmsg_thumb" /></div>\n            <p class="appmsg_desc">{first.digest}</p>\n        {/if}\n    </div>\n    {if showEdit}\n    <div class="appmsg_opr">\n        <ul>\n            <li class="appmsg_opr_item with2">\n            <a class="js_edit" href="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&lang=zh_CN&token={token}&type={type}&appmsgid={id}&isMul={if isMul}1{else}0{/if}"><i class="icon18_common edit_gray">编辑</i></a>\n            </li>\n            <li class="appmsg_opr_item with2 no_extra">\n                <a class="js_del no_extra" data-id="{id}" href="javascript:void(0);"><i class="icon18_common del_gray">删除</i></a>\n            </li>\n        </ul>\n    </div>\n    {/if}\n    {if showMask}\n    <div class="appmsg_mask"></div>\n    <i class="icon_appmsg_selected">已选择</i>\n    {/if}\n</div>\n';
});define("common/wx/time.js", [], function(e, t, n) {
try {
"use strict";
var r = function(e) {
return e += "", e.length >= 2 ? e : "0" + e;
}, i = [ "日", "一", "二", "三", "四", "五", "六" ];
function s(e) {
var t = new Date(e * 1e3), n = new Date, s = t.getTime(), o = n.getTime(), u = 864e5;
return o - s < u && n.getDate() == t.getDate() ? "%s:%s".sprintf(r(t.getHours()), r(t.getMinutes())) : o - s < 2 * u && (new Date(t * 1 + u)).getDate() == n.getDate() ? "昨天 %s:%s".sprintf(r(t.getHours()), r(t.getMinutes())) : o - s <= 6 * u ? "星期%s %s:%s".sprintf(i[t.getDay()], r(t.getHours()), r(t.getMinutes())) : t.getFullYear() == n.getFullYear() ? "%s月%s日".sprintf(r(t.getMonth() + 1), r(t.getDate())) : "%s年%s月%s日".sprintf(t.getFullYear(), r(t.getMonth() + 1), r(t.getDate()));
}
function o(e) {
var t = new Date(e * 1e3);
return "%s-%s-%s %s:%s:%s".sprintf(t.getFullYear(), r(t.getMonth() + 1), r(t.getDate()), r(t.getHours()), r(t.getMinutes()), r(t.getSeconds()));
}
return {
timeFormat: s,
getFullTime: o
};
} catch (u) {
wx.jslog({
src: "common/wx/time.js"
}, u);
}
});
;define('media/media_cgi.js', ['common/wx/Tips.js', 'common/wx/Cgi.js'], function(require, exports, module){try{
	'use strict';

    var
    Tips = require('common/wx/Tips.js'),
        cgi = require('common/wx/Cgi.js');

    var appmsgop = {
        del: function(id, success) {
            cgi.post({
                mask: false,
                url: wx.url('/cgi-bin/operate_appmsg?sub=del&t=ajax-response'),
                data: {
                    AppMsgId: id
                },
                error: function() {
                    Tips.err('删除失败');
                }
            }, function(json) {
                if (json.ret == "0") {
                    Tips.suc('删除成功');
                    success && success(json);
                } else {
                    Tips.err('删除失败');
                }
            });
        },
        save: function(isMul, type, postData, success, error, complete) {
            var
            url = !postData.AppMsgId ?
                wx.url('/cgi-bin/operate_appmsg?t=ajax-response&sub=create&type=%s'.sprintf(type)) : wx.url('/cgi-bin/operate_appmsg?t=ajax-response&sub=update&type=%s'.sprintf(type));

            postData.ajax = 1; 
            cgi.post({
                    url: url,
                    data: postData,
                    dataType: "html",
                    error: function() {
                        Tips.err('保存失败');
                        error && error();
                    },
                    complete: complete
                },
                function(data) {
                    data = $.parseJSON(data);
                    if (data.ret == "0") {
                        Tips.suc('保存成功');
                        success && success(data);
                    } else {
                        var msg = false;
                        switch (data.ret) {
                            case '64506':
                                Tips.err('保存失败,链接不合法');
                                break;
                            case '64507':
                                Tips.err('内容不能包含链接，请调整');
                                break;
                            case '64508':
                                Tips.err('查看原文链接可能具备安全风险，请检查');
                                break;
                            case '-99':
                                Tips.err('内容超出字数，请调整');
                                break;
                            case '10801':
                                
                                Tips.err('标题不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。');
                                msg = data.msg;
                                break;
                            case '10802':
                                Tips.err('作者不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。');
                                msg = data.msg;
                                break;
                            case '10803':
                                Tips.err('敏感链接，请重新添加。');
                                msg = data.msg;
                                break;
                            case '10804':
                                if (!isMul) {
                                    Tips.err('摘要不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。');
                                } else {
                                    Tips.err('正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。');
                                }
                                msg = data.msg;
                                break;
                            case '10806':
                                Tips.err('正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。');
                                msg = data.msg;
                                break;
                            case '-20000':
                                Tips.err('登录态超时，请重新登录。');
                                break;
                            default:
                                Tips.err('保存失败');
                                break;
                        }
                        error && error(msg);
                    }
                }
            );
        },
        preview: function(isMul, type, postData, success, error) {
            cgi.post({
                    url: wx.url('/cgi-bin/operate_appmsg?sub=preview&t=ajax-appmsg-preview&type=%s'.sprintf(type)),
                    data: postData,
                    
                    dataType: "html",
                    error: function() {
                        Tips.err('发送失败，请稍后重试');
                        error && error();
                    }
                },
                function(data) {
                    data = $.parseJSON(data);
                    if (data.ret == "0") {
                        Tips.suc('发送预览成功，请留意你的手机微信');
                        success && success(data);
                    } else {
                        switch (data.ret) {
                            case "64501":
                                Tips.err('你输入是非法的微信号，请重新输入');
                                break;
                            case "64502":
                                Tips.err('你输入的微信号不存在，请重新输入');
                                break;
                            case "10700":
                            case "64503":
                                Tips.err('你输入的微信号不是你的好友');
                                break;
                            case "10703":
                                Tips.err('对方关闭了接收消息');
                                break;
                            case "10701":
                                Tips.err('用户已被加入黑名单，无法向其发送消息');
                                break;
                            case "10704":
                            case "10705":
                                Tips.err('该素材已被删除');
                                break;
                            case "64504":
                                Tips.err('保存图文消息发送错误，请稍后再试');
                                break;
                            case "64505":
                                Tips.err('发送预览失败，请稍后再试');
                                break;
                            case '64507':
                                Tips.err('内容不能包含链接，请调整');
                                break;
                            case '-99':
                                Tips.err('内容超出字数，请调整');
                                break;
                            case '62752':
                                Tips.err('可能含有具备安全风险的链接，请检查');
                                break;
                            case '10801':
                                Tips.err('标题不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。');
                                data.antispam = true;
                                break;
                            case '10802':
                                Tips.err('作者不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。');
                                data.antispam = true;
                                break;
                            case '10803':
                                Tips.err('敏感链接，请重新添加。');
                                data.antispam = true;
                                break;
                            case '10804':
                                if (!isMul) {
                                    Tips.err('摘要不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。');
                                } else {
                                    Tips.err('正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。');
                                }
                                data.antispam = true;
                                break;
                            case '10806':
                                Tips.err('正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。');
                                data.antispam = true;
                                break;
                            case '-8':
                            case '-6':
                                data.ret = "-6"; 
                                Tips.err('请输入验证码');
                                break;
                            default:
                                Tips.err('系统繁忙，请稍后重试');
                                break;
                        }
                        error && error(data);
                    }
                }
            );
        },
        getList: function(type, begin, count, success) {
            cgi.get({
                mask: false,
                url: wx.url('/cgi-bin/appmsg?type=%s&action=list&begin=%s&count=%s&f=json'.sprintf(type, begin, count)),
                error: function() {
                    Tips.err('获取列表失败');
                }
            }, function(json) {
                if (json && json.base_resp && json.base_resp.ret == 0) {
                    success && success(json.app_msg_info);
                } else {
                    Tips.err('获取列表失败');
                }
            });
        }
    };
    return {
        
        rename: function(id, name, success) {
            cgi.post({
                    mask: false,
                    url: wx.url('/cgi-bin/modifyfile?oper=rename&t=ajax-response'),
                    data: {
                        fileid: id,
                        fileName: name
                    },
                    error: function() {
                        Tips.err('重命名失败');
                    }
                }, function(json) {
                    if (json.ret == "0") {
                        Tips.suc('重命名成功');
                        success && success(json);
                    } else {
                        switch (json.ret) {
                            case "-2":
                                Tips.err('素材名不能包含空格');
                                break;
                            default:
                                Tips.err('重命名失败');
                        }
                    }
                }

            );
        },

        
        del: function(id, success) {
            cgi.post({
                mask: false,
                url: wx.url('/cgi-bin/modifyfile?oper=del&t=ajax-response'),
                data: {
                    fileid: id
                },
                error: function() {
                    Tips.err('删除失败');
                }
            }, function(json) {
                if (json.ret == "0") {
                    Tips.suc('删除成功');
                    success && success(json);
                } else {
                    Tips.err('删除失败');
                }
            });
        },

        
        getList: function(type, begin, count, success) {
            cgi.get({
                mask: false,
                url: wx.url('/cgi-bin/filepage?type=%s&begin=%s&count=%s&f=json'.sprintf(type, begin, count)),
                error: function() {
                    Tips.err('获取列表失败');
                }
            }, function(json) {
                if (json && json.base_resp && json.base_resp.ret == 0) {
                    success && success(json.page_info);
                } else {
                    Tips.err('获取列表失败');
                }
            });
        },

        appmsg: appmsgop
    };

}catch(e){ wx.jslog( {src:'media/media_cgi.js'}, e); }});define("common/lib/store.js", [ "common/lib/json.js" ], function(e, t, n) {
try {
var r = e("common/lib/json.js"), i = {}, s = window.document, o = "localStorage", u = "__storejs__", a;
i.disabled = !1, i.set = function(e, t) {}, i.get = function(e) {}, i.remove = function(e) {}, i.clear = function() {}, i.transact = function(e, t, n) {
var r = i.get(e);
n == null && (n = t, t = null), typeof r == "undefined" && (r = t || {}), n(r), i.set(e, r);
}, i.getAll = function() {}, i.serialize = function(e) {
return r.stringify2(e);
}, i.deserialize = function(e) {
if (typeof e != "string") return undefined;
try {
return r.parse(e);
} catch (t) {
return e || undefined;
}
};
function f() {
try {
return o in window && window[o];
} catch (e) {
return !1;
}
}
if (f()) a = window[o], i.set = function(e, t) {
return t === undefined ? i.remove(e) : (a.setItem(e, i.serialize(t)), t);
}, i.get = function(e) {
return i.deserialize(a.getItem(e));
}, i.remove = function(e) {
a.removeItem(e);
}, i.clear = function() {
a.clear();
}, i.getAll = function() {
var e = {};
for (var t = 0; t < a.length; ++t) {
var n = a.key(t);
e[n] = i.get(n);
}
return e;
}; else if (s.documentElement.addBehavior) {
var l, c;
try {
c = new ActiveXObject("htmlfile"), c.open(), c.write('<script>document.w=window</script><iframe src="/favicon.ico"></iframe>'), c.close(), l = c.w.frames[0].document, a = l.createElement("div");
} catch (h) {
a = s.createElement("div"), l = s.body;
}
function p(e) {
return function() {
var t = Array.prototype.slice.call(arguments, 0);
t.unshift(a), l.appendChild(a), a.addBehavior("#default#userData"), a.load(o);
var n = e.apply(i, t);
return l.removeChild(a), n;
};
}
var d = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
function v(e) {
return e.replace(d, "___");
}
i.set = p(function(e, t, n) {
return t = v(t), n === undefined ? i.remove(t) : (e.setAttribute(t, i.serialize(n)), e.save(o), n);
}), i.get = p(function(e, t) {
return t = v(t), i.deserialize(e.getAttribute(t));
}), i.remove = p(function(e, t) {
t = v(t), e.removeAttribute(t), e.save(o);
}), i.clear = p(function(e) {
var t = e.XMLDocument.documentElement.attributes;
e.load(o);
for (var n = 0, r; r = t[n]; n++) e.removeAttribute(r.name);
e.save(o);
}), i.getAll = p(function(e) {
var t = e.XMLDocument.documentElement.attributes, n = {};
for (var r = 0, s; s = t[r]; ++r) {
var o = v(s.name);
n[s.name] = i.deserialize(e.getAttribute(o));
}
return n;
});
}
try {
i.set(u, u), i.get(u) != u && (i.disabled = !0), i.remove(u);
} catch (h) {
i.disabled = !0;
}
i.enabled = !i.disabled, n.exports = i;
} catch (h) {
wx.jslog({
src: "common/lib/store.js"
}, h);
}
});define("common/wx/top.js", [ "tpl/top.html.js" ], function(e, t, n) {
try {
"use strict";
var r = e("tpl/top.html.js"), i = wx.acl;
function s(e, t, n) {
var i = this;
return this.dom = $(e), this.dom.addClass("title_tab"), t && typeof t == "string" && (t = [ {
name: "",
url: "javasript:;",
className: "selected"
} ]), $.each(t, function(e, t) {
t.url = t.url && [ t.url, wx.data.param ].join("") || "javasript:;";
}), this.dom.html(template.compile(r)({
data: t
})), n && n.render && typeof n.render == "function" ? $.each(this.dom.find("li"), function(e, r) {
n.render.apply($(r), [ t[e], n && n.data ]);
}) : this.dom.html(template.compile(r)({
data: t
})), this.dom.on("click", ".top_item", function() {
$(this).addClass("selected").siblings().removeClass("selected");
}), this;
}
s.prototype.selected = function(e) {
typeof e == "number" ? this.dom.find(".js_top:eq(" + e + ")").addClass("selected") : this.dom.find(".js_top[data-id=" + e + "]").addClass("selected");
}, s.DATA = {
setting: [ {
id: "info",
name: "账号信息",
url: "/cgi-bin/userinfopage?t=wxm-setting"
}, {
id: "assistant",
name: "公众号手机助手",
url: "/cgi-bin/userinfopage?t=wxm_setting_bindaccount"
}, {
id: "meeting",
name: "会议号设置",
url: "/cgi-bin/userinfopage?t=wxm-meeting-setting"
} ],
mass: [ {
id: "send",
name: "新建群发消息",
url: "/cgi-bin/masssendpage?t=mass/send"
}, {
id: "list",
name: "已发送",
url: "/cgi-bin/masssendpage?t=mass/list&action=history&begin=0&count=10"
} ],
message: [ {
id: "total",
name: "全部消息",
url: "/cgi-bin/message?t=message/list&count=20&day=7"
}, {
id: "today",
name: "今天",
url: "/cgi-bin/message?t=message/list&count=20&day=0",
className: "sub"
}, {
id: "yesterday",
name: "昨天",
url: "/cgi-bin/message?t=message/list&count=20&day=1",
className: "sub"
}, {
id: "beforeYesterday",
name: "前天",
url: "/cgi-bin/message?t=message/list&count=20&day=2",
className: "sub"
}, {
id: "fivedays",
name: "更早",
url: "/cgi-bin/message?t=message/list&count=20&day=3",
className: "sub"
}, {
id: "star",
name: "星标消息",
url: "/cgi-bin/message?t=message/list&count=20&action=star"
}, {
id: "search",
name: "搜索结果"
} ],
media: [ {
id: "media11",
name: "商品消息",
acl: i.msg_acl.can_commodity_app_msg,
url: "/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=11&action=list"
}, {
id: "media10",
name: "图文消息",
acl: i.msg_acl.can_app_msg,
url: "/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=10&action=list"
}, {
id: "media2",
name: "图片",
acl: i.msg_acl.can_image_msg,
url: "/cgi-bin/filepage?type=2&begin=0&count=10&t=media/list"
}, {
id: "media3",
name: "语音",
acl: i.msg_acl.can_voice_msg,
url: "/cgi-bin/filepage?type=3&begin=0&count=10&t=media/list"
}, {
id: "media15",
name: "视频",
acl: i.msg_acl.can_video_msg,
url: "/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=15&action=list"
} ],
advanced: [ {
id: "edit",
name: "编辑模式",
url: "/cgi-bin/advanced?action=edit&t=advanced/edit"
}, {
id: "dev",
name: "开发模式",
url: "/cgi-bin/advanced?action=dev&t=advanced/dev"
} ],
business: [ {
id: "overview",
name: "数据概览",
url: "/cgi-bin/business?t=business/overview&action=overview"
}, {
id: "source",
name: "流量来源",
url: "/cgi-bin/business?t=business/source&action=source"
}, {
id: "rank",
name: "流量排名",
url: "/cgi-bin/business?t=business/rank&action=rank"
}, {
id: "order",
name: "订单流水",
url: "/cgi-bin/business?t=business/order&action=order"
}, {
id: "info",
name: "商户信息",
url: "/cgi-bin/business?t=business/info&action=info"
}, {
id: "test",
name: "支付测试",
url: "/cgi-bin/business?t=business/whitelist&action=whitelist"
}, {
id: "course",
name: "使用教程",
url: "/cgi-bin/business?t=business/course&action=course"
}, {
id: "right",
name: "售后维权",
url: "/cgi-bin/business?t=business/right&action=right&type=reason"
} ],
user: [ {
id: "useradmin",
name: "用户管理",
url: "/cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=0&groupid=0"
} ],
statistics: {
user: [ {
id: "summary",
name: "用户增长",
url: "/cgi-bin/pluginloginpage?action=stat_user_summary&pluginid=luopan&t=statistics/index"
}, {
id: "attr",
name: "用户属性",
url: "/cgi-bin/pluginloginpage?action=stat_user_attr&pluginid=luopan&t=statistics/index"
} ],
article: [ {
id: "detail",
name: "图文群发",
url: "/cgi-bin/pluginloginpage?action=stat_article_detail&pluginid=luopan&t=statistics/index"
}, {
id: "analyse",
name: "图文统计",
url: "/cgi-bin/pluginloginpage?action=stat_article_analyse&pluginid=luopan&t=statistics/index"
} ],
message: [ {
id: "message",
name: "消息分析",
url: "/cgi-bin/pluginloginpage?action=stat_message&pluginid=luopan&t=statistics/index"
} ],
"interface": [ {
id: "interface",
name: "接口分析",
url: "/cgi-bin/pluginloginpage?action=stat_interface&pluginid=luopan&t=statistics/index"
} ]
},
notification: [ {
id: "notification",
name: "通知中心",
url: "/cgi-bin/frame?t=notification/index_frame"
} ],
templateMessage: [ {
id: "my_template",
name: "我的模板",
url: "/cgi-bin/tmplmsg?action=list&t=tmplmsg/list"
}, {
id: "template_message",
name: "模板库",
url: "/cgi-bin/tmplmsg?action=tmpl_store&t=tmplmsg/store"
} ],
assistant: [ {
id: "mphelper",
name: "公众号助手",
url: "/cgi-bin/assistant?t=setting/mphelper&action=mphelper"
}, {
id: "warning",
name: "接口告警",
url: "/cgi-bin/assistant?t=setting/warning&action=warning"
} ]
}, s.RENDER = {
setting: function(e, t) {
e.id == "meeting" && t.role != 15 && this.remove();
},
message: function(e, t) {
e.id == "search" && (!t || t.action != "search") && this.remove();
},
assistant: function(e, t) {
e.id == "warning" && (!t || t.have_service_package == 0) && this.remove();
}
}, n.exports = s;
} catch (o) {
wx.jslog({
src: "common/wx/top.js"
}, o);
}
});
try {
(function(e) {
window.console || (window.console = {
log: function() {},
error: function() {},
info: function() {}
}), function() {
function e() {
var e = {};
$("#menuBar").find(".menu").each(function() {
var t = $(this), n = t.attr("id"), r = n.substr("menu_".length);
t.hasClass("closed") || (e[r] = !0);
});
}
$("#menuBar").on("click", "dt", function() {
$(this).parent().hasClass("closed") ? $(this).parent().removeClass("closed") : $(this).parent().addClass("closed"), e();
}), $("#menuBar").on("selectstart", function() {
return !1;
}), wx.selectMenu = function(t) {
var n = "selected";
$("#menuBar .menu").removeClass(n), $("#menuBar .menu_item").removeClass(n);

var i = $("#menu_" + t).addClass(n), s = i.parent().filter(".menu").addClass(n);
$.isEmptyObject(r) && s.removeClass("closed"), e();
};
}(), e.wx = e.wx || {}, wx.T = function(e, t) {
return template.compile(e)(t);
}, wx.url = function(e) {
if (e.startsWith("javasript:")) return e;
var t = wx.data.param;
return e.indexOf("?") != -1 ? e + t : e + "?1=1" + t;
}, wx.getUrl = function(e) {
var t = (window.location + "&").match(new RegExp("(?:\\?|\\&)" + e + "=(.*?)\\&"));
if (t && t[1]) return String(t[1]).html(!0);
}, function() {

}(), setTimeout(function() {

}, 5e3), wx.resPath = location.hostname == "mp.weixin.qq.com" ? "https://res.wx.qq.com" : "";
})(window);
} catch (e) {
}
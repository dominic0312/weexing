var customerid = getParameterByName('customerid');

function getParameterByName(name) {
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}


//alert(customerid);
//$("#customer").html(customerid);
function requestcoup(ref) {
	var cid = $(ref).attr("rid");
	//alert(s);
	//var customerid = $.trim($("#customerid").html());
	$.post("/coupons/addrequest", {
		cusid : customerid,
		couponid : cid,
	}, null, "script");
}

function refreshPage() {
	jQuery.mobile.changePage(window.location.href, {
		allowSamePageTransition : true,
		transition : 'none',
		reloadPage : true
	});
}

function getInfo(cusid) {
	var params = "customerid=" + cusid;
	$.ajax({
		type : "POST",
		url : "/cardguest/get_customer_info/1",
		data : params,
		dataType : "json",
		success : function(data) {
			//alert(cusid);
			if (data.coupons.length == 0) {
				$("#emptytemplate").html("<h3>目前没有优惠券</h3>");
			}
			Tempo.prepare("coupons").render(data.coupons);
			Tempo.prepare("customer_info").render(data.customer);
			//alert(data.customer.cardid);
			//	$("#coupon").trigger('create');
			Tempo.prepare("shop_info").render(data.shop);
			//Tempo.prepare("customer_balance").render(data);
			//alert(cusid);
			//Tempo.prepare("customer_balance").render(data);
			//Tempo.prepare("customer_bonus").render(data);
			Tempo.prepare("customer_level").render(data.customer);
			//Tempo.prepare("coupon_num").render(data);
			//Tempo.prepare("customer").render(data);
		},
		error : function(data) {
			alert("读取错误");
		}
	});

}

function updateinfo(balance, bonus, level) {
	$("#balance").html(balance);
	$("#bonus").html(bonus);
	$("#level").html(level);
}


$(document).ready(function() {
	var customerid = getParameterByName('customerid');
	//getInfo(customerid);
	getInfo(customerid);
	//$("#coupon").trigger('create');
	//alert("helloe");
});

function addcouponsucc(cid) {

	$("#use" + cid).remove();
	$("#col" + cid).hide();
	$("#edate" + cid).html("<h5>已使用</h5>");
	$("#edate" + cid).css('padding-top', '15px');
}
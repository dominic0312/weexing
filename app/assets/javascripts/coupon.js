var current_menu = "menu_users";
var searchtype = "phone";
var cardno = "", telephone = "", balance = "", usertype = "";
$(document).ready(function() {
	//$('.editab').editable('disable');
	$('input[type=file]').bootstrapFileInput();
	$('.file-inputs').bootstrapFileInput();

	$('#datepicker .input-daterange').datepicker({
	});
	$('.selectpicker').selectpicker();

	$('#newcouponform').submit(function(evt) {
		evt.preventDefault();
		window.history.back();
		alert("hellow");
	});

});
function togglepage(id) {
	if (id == current_menu) {
		return;
	} else {
		$("#" + current_menu).removeClass("active");
		$("#" + current_menu + "_panel").hide();
		$("#" + id).addClass("active");
		$("#" + id + "_panel").show();
		current_menu = id;
	}
}

function delcoupconfirm(ref) {
	var rid = $(ref).attr('coupid');
	var txt = $.trim($(ref).text());
	if (txt == "删除") {
		$("#delcouponconfirm").dialog({
			modal : false,
			dialogClass : "no-close",
			buttons : {
				"确认" : function() {
					delcoupon(rid);
					$(this).dialog("close");
				},
				"取消" : function() {
					$(this).dialog("close");
				}
			},
			show : {
				effect : "slideToggle",
				duration : 100
			},
			position : {
				my : "center center",
				at : "center center",
				of : pbody_coupon
			},
			open : function(event) {
				$('.ui-dialog-buttonpane').find('button:contains("确认")').addClass('btn').addClass('btn-danger');
				$('.ui-dialog-buttonpane').find('button:contains("取消")').addClass('btn').addClass('btn-primary');
			}
		});
	} else {
		//$("[recordid='edt" + rid + "']").editable('toggleDisabled');
		//$("#changebtn" + rid).removeClass("btn-success").addClass("btn-primary");
		//$("#changebtn" + rid).html("修改");
		//$("#deletebtn" + rid).removeClass("btn-default").addClass("btn-danger");
		//$("#deletebtn" + rid).html("删除");
	}
}

function pubcoupconfirm(ref) {
	var rid = $(ref).attr('coupid');
	var txt = $.trim($(ref).text());
	if (txt == "发布") {
		$("#pubcouponconfirm").dialog({
			modal : false,
			dialogClass : "no-close",
			buttons : {
				"确认" : function() {
					sendcoupon(rid);
					$(this).dialog("close");
				},
				"取消" : function() {
					$(this).dialog("close");
				}
			},
			show : {
				effect : "slideToggle",
				duration : 100
			},
			position : {
				my : "center center",
				at : "center center",
				of : pbody_coupon
			},
			open : function(event) {
				$('.ui-dialog-buttonpane').find('button:contains("确认")').addClass('btn').addClass('btn-danger');
				$('.ui-dialog-buttonpane').find('button:contains("取消")').addClass('btn').addClass('btn-primary');
			}
		});
	} else {
		//$("[recordid='edt" + rid + "']").editable('toggleDisabled');
		//$("#changebtn" + rid).removeClass("btn-success").addClass("btn-primary");
		//$("#changebtn" + rid).html("修改");
		//$("#deletebtn" + rid).removeClass("btn-default").addClass("btn-danger");
		//$("#deletebtn" + rid).html("删除");
	}
}

function delcoupon(rid) {
	$.post("/coupons/delcoupon", {
		recid : rid
	}, null, "script");

}

function delconfirm(ref) {
	var rid = $(ref).attr('recordid');
	var txt = $.trim($(ref).text());
	if (txt == "删除") {
		$("#delconfirm").dialog({
			modal : false,
			dialogClass : "no-close",
			buttons : {
				"确认" : function() {
					delrecord(rid);
					$(this).dialog("close");
				},
				"取消" : function() {
					$(this).dialog("close");
				}
			},
			show : {
				effect : "slideToggle",
				duration : 100
			},
			position : {
				my : "center center",
				at : "center center",
				of : pbody_customer
			},
			open : function(event) {
				$('.ui-dialog-buttonpane').find('button:contains("确认")').addClass('btn').addClass('btn-danger');
				$('.ui-dialog-buttonpane').find('button:contains("取消")').addClass('btn').addClass('btn-primary');
			}
		});
	} else {
		$("[recordid='edt" + rid + "']").editable('toggleDisabled');
		$("#changebtn" + rid).removeClass("btn-success").addClass("btn-primary");
		$("#changebtn" + rid).html("修改");
		$("#deletebtn" + rid).removeClass("btn-default").addClass("btn-danger");
		$("#deletebtn" + rid).html("删除");
	}
}

function delrecord(rid) {
	$.post("/customers/delcustomer", {
		recid : rid
	}, null, "script");
}

function sendcoupon(rid) {
	$.post("/coupons/sendcoupon", {
		recid : rid
	}, null, "script");
}

function newuser() {
	$("#newuser").dialog({
		dialogClass : "no-close",
		modal : true,
		title : "增加新会员",
		buttons : {
			"确认" : function() {
				//$(this).dialog("close");
				cardno = $.trim($("#inputcardno").val());
				telephone = $.trim($("#inputphone").val());
				balance = $.trim($("#inputbalance").val());
				usertype = $.trim($("#inputusertype").val());
				if (!uservalidate(cardno, telephone, balance)) {
					return;
				} else {
					adduser();
					clearuser();
					$(this).dialog("close");
				}
			},
			"取消" : function() {
				$(this).dialog("close");
				clearuser();
			}
		},
		show : {
			effect : "slideToggle",
			duration : 100
		},
		position : {
			my : "center top",
			at : "center top",
			of : pbody_customer
		},
		open : function(event) {
			$('.ui-dialog-buttonpane').find('button:contains("确认")').addClass('btn').addClass('btn-success');
			$('.ui-dialog-buttonpane').find('button:contains("取消")').addClass('btn').addClass('btn-default');
		}
	});
}

function adduser() {
	$.post("/customers/addcustomer", {
		cardid : cardno,
		phone : telephone,
		balance : balance,
		vusertype : usertype
	}, null, "script");
}

function uservalidate(cardno, telephone, balance) {
	var str = "";
	if (cardno == "") {
		str = "卡号不能为空";
		$("#inputcardno").notify(str, {
			className : "danger",
			position : "top",
			autoHideDelay : 2000
		});
		return false
	}

	if (telephone.length > 11) {
		str = "电话号码不能大于11位";
		$("#inputphone").notify(str, {
			className : "danger",
			position : "top",
			autoHideDelay : 2000
		});
		return false
	}
	if (balance.length > 6) {
		str = "余额不能大于6位";
		$("#inputbalance").notify(str, {
			className : "danger",
			position : "top",
			autoHideDelay : 2000
		});
		return false
	}
	return true;

}

function clearuser() {
	$("#inputcardno").val("");
	$("#inputphone").val("");
	$("#inputbalance").val("");
	$("#inputusertype").val("普通会员");
	cardno = "";
	telephone = "";
	balance = "";
	usertype = "";
}

function selectsearchtype(str) {
	$("#searchtype").html(str + "<span class='caret'></span>");
	if (str == '卡号') {
		searchtype = "realcardid";
		return;
	}
	if (str == '电话号码') {
		searchtype = "phone";
		return;
	}
	if (str == '用户级别') {
		searchtype = "level";
		return;
	}
}

function search() {
	searchvalue = $.trim($("#searchtxt").val());
	if (searchvalue == "") {
		$("#searchtxt").popover({
			placement : 'top',
			content : '请输入要搜索的数据',
			delay : 500
		});
		$("#searchtxt").popover('show');
		return
	}
	$.post("/customers/search", {
		searchtp : searchtype,
		searchvalue : searchvalue,
	}, null, "script");
}

function logout() {
	$.post("/sessions/destroy_shop", {
	}, null, "script");
}

function redirect_login() {
	surl = $.trim($("#shopurl").html());
	location.href = '/cardbackground/' + surl;
}

function operate(obj) {
	var txt = $.trim($(obj).text());
	var rid = $(obj).attr('recordid');
	if (txt == '修改') {
		$('#realcardid' + rid).editable({
			validate : function(value) {
				if ($.trim(value).length > 12)
					return '卡号不能大于12位';
			}
		});
		$('#level' + rid).editable({
			type : 'select',
			value : 1,
			source : [{
				value : 1,
				text : '普通会员'
			}, {
				value : 2,
				text : 'VIP会员'
			}, {
				value : 3,
				text : '白银会员'
			}, {
				value : 4,
				text : '黄金会员'
			}, {
				value : 5,
				text : '白金会员'
			}]
		});
		$('#phone' + rid).editable({
			validate : function(value) {
				if ($.trim(value).length > 11)
					return '电话号码不能大于11位';
			}
		});
		$('#balance' + rid).editable({
			type : 'number',
			validate : function(value) {
				var regex = /^[0-9]+$/;
				if (! regex.test(value)) {
					return '余额只能是数字';
				}
				if ($.trim(value).length > 6) {
					return '余额不能多于6位'
				}
			}
		});
		$('#bonus' + rid).editable({
			type : 'number',
			validate : function(value) {
				var regex = /^[0-9]+$/;
				if (! regex.test(value)) {
					return '积分只能是数字';
				}
				if ($.trim(value).length > 6) {
					return '积分不能多于6位'
				}
			}
		});
		$("[recordid='edt" + rid + "']").editable('enable');
		$(obj).removeClass("btn-primary").addClass("btn-success");
		$(obj).html("保存");
		$("#deletebtn" + rid).removeClass("btn-danger").addClass("btn-default");
		$("#deletebtn" + rid).html("取消");
	} else {
		updaterecord(rid);
		$("[recordid='edt" + rid + "']").editable('toggleDisabled');
		$(obj).removeClass("btn-success").addClass("btn-primary");
		$(obj).html("修改");
		$("#deletebtn" + rid).removeClass("btn-default").addClass("btn-danger");
		$("#deletebtn" + rid).html("删除");
	}
}

function updaterecord(rid) {
	var vrealcard = $.trim($("#realcardid" + rid).text());
	var vlevel = $.trim($("#level" + rid).text());
	var vphone = $.trim($("#phone" + rid).text());
	var vbalance = $.trim($("#balance" + rid).text());
	var vbonus = $.trim($("#bonus" + rid).text());
	$.post("/customers/updatecustomer", {
		realcard : vrealcard,
		level : vlevel,
		phone : vphone,
		balance : vbalance,
		bonus : vbonus,
		recid : rid
	}, null, "script");
}

function success(rid) {
	$("#changebtn" + rid).notify("保存成功", {
		className : "success",
		position : "top",
		autoHideDelay : 2000
	});
}

function listall() {
	$.post("/cardbackground/index", {
		act : 'listall'
	}, null, "script");

}

function newcoupon(shopid) {
	$("#newcoupon").dialog({
		dialogClass : "no-close",
		modal : true,
		title : "添加新优惠券",
		show : {
			effect : "slideToggle",
			duration : 100
		},
		position : {
			my : "center top",
			at : "center top",
			of : pbody_coupon
		},
		open : function(event) {
		}
	});
}

function closecoupon() {
	$('#newcoupon').dialog('close');
	clearnewcoupon();
	return false;
}

function savecouponsucc() {
	clearnewcoupon();
	$("#newcoupon").dialog("close");
}

function savecouponfail() {
	$("#piclabel").notify("图片必须是小于100K的jpg", {
		className : "error",
		position : "right",
		arrowShow : false,
		autoHideDelay : 3000
	});
}

function clearnewcoupon() {
	$("#coupon_content").val("");
	$("#coupon_title").val("");
	$("#coupon_usertype").val("折扣卷");
	$('.selectpicker').selectpicker('refresh');
	$i = $("#coupon_pic").prev();
	$i.html("请选择一个图片");
}

function coupontitlefail() {
	$("#coupon_title").notify("标题不能长于10个字", {
		className : "error",
		position : "top",
		arrowShow : false,
		autoHideDelay : 3000
	});
}

function coupon_sendfail(rid) {
	$("#couppubbtn" + rid).notify("发送失败，请稍后重试", {
		className : "error",
		position : "left",
		arrowShow : true,
		autoHideDelay : 3000
	});
}

function coupon_sendsucc(rid) {
	$("#couppubbtn" + rid).notify("优惠券发送成功", {
		className : "success",
		position : "left",
		arrowShow : true,
		autoHideDelay : 3000
	});

	$("#couppubbtn" + rid).remove();
	$("#coupdeletebtn" + rid).removeClass('btn-danger').addClass('btn-success');
	$("#coupdeletebtn" + rid).html("刷新");
}

function recycle() {
	$("#couponreq")
}


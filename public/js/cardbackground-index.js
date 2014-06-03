var current_menu = "menu_users";
var searchtype = "phone";
var cardno = "", telephone = "", balance = "", usertype = "";
$(document).ready(function() {

	//$('.editab').editable('disable');
	$("img").unveil();
	$('input[type=file]').bootstrapFileInput();
	$('.file-inputs').bootstrapFileInput();
	//alert($('#datepicker .input-daterange').attr("class"));
	$('#datepickers').datepicker({
		autoclose : true,
		todayHighlight : true
	});
	var $custable = $('#customertable').dataTable({
		"bJQueryUI" : true,
		"bPaginate" : true,
		"bLengthChange" : false,
		"sPaginationType" : "full_numbers",
		"bAutoWidth" : false,
		"sDom" : '<""l>t<"F"fp>',
		"bSort" : true,
		"aoColumns" : [null, {
			"bSortable" : false
		}, null, {
			"bSortable" : false
		}, {
			"bSortable" : false
		}, null, null, {
			"bSortable" : false
		}],
		"aoColumnDefs" : [{
			"bSearchable" : false,
			"bVisible" : false,
			"aTargets" : [0]
		}],
		"aaSorting" : [[0, 'desc']],
		"oLanguage" : {
			"sUrl" : "/js/datatableschn.js"
		}
	});
	var $couptable = $('#coupontable').dataTable({
		"bJQueryUI" : true,
		"bPaginate" : true,
		"bSearchable" : false,
		"iDisplayLength" : 5,
		"bLengthChange" : false,
		"sPaginationType" : "full_numbers",
		"bAutoWidth" : false,
		"sDom" : '<""l>t<"F"fp>',
		"bSort" : true,
		"bFilter" : false,
		"bInfo" : false,
		"aoColumns" : [null, {
			"bSortable" : false
		}, {
			"bSortable" : false
		}, {
			"bSortable" : false
		}, null, null, {
			"bSortable" : false
		}],
		"aoColumnDefs" : [{
			"bSearchable" : false,
			"bVisible" : false,
			"aTargets" : [0]
		}],
		"aaSorting" : [[0, 'desc']],
		"oLanguage" : {
			"sUrl" : "/js/datatableschn.js"
		}
	});

	$('.selectpicker').selectpicker();

	$('#priv1').editable({
		type : 'text',
		mode : 'inline',
		rows : 1,
		url : '/shops/updateinfo',
		pk : 'priv1',
		title : '修改第一个会员权限',
		ajaxOptions : {
			type : 'post'
		}
	});

	$('#priv2').editable({
		type : 'text',
		mode : 'inline',
		rows : 1,
		url : '/shops/updateinfo',
		pk : 'priv2',
		title : '修改第二个会员权限',
		ajaxOptions : {
			type : 'post'
		}
	});

	$('#priv3').editable({
		type : 'text',
		mode : 'inline',
		rows : 1,
		url : '/shops/updateinfo',
		pk : 'priv3',
		title : '修改第三个会员权限',
		ajaxOptions : {
			type : 'post'
		}
	});

	$('#address').editable({
		type : 'text',
		mode : 'inline',
		rows : 2,
		url : '/shops/updateinfo',
		pk : 'address',
		title : '修改店铺的地址',
		ajaxOptions : {
			type : 'post'
		}
	});
	$('#phone').editable({
		type : 'text',
		mode : 'inline',
		rows : 2,
		url : '/shops/updateinfo',
		pk : 'phone',
		title : '修改店铺的固定电话',
		ajaxOptions : {
			type : 'post'
		}
	});
	$('#mobile').editable({
		type : 'text',
		mode : 'inline',
		rows : 2,
		url : '/shops/updateinfo',
		pk : 'mobile',
		title : '修改店铺的移动电话',
		ajaxOptions : {
			type : 'post'
		}
	});

});
function openrecycle(ref) {
	$('#requestcoupon').removeData('bs.modal');
	$('#requestcoupon').modal({
		remote : '/coupons/requestcoupon/' + $(ref).attr('coupid')
	});
	$('#requestcoupon').modal('show');
}

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

function removecoupon(rid) {
	$couptable = $("#coupontable").dataTable();
	var ele = document.getElementById("couprow" + rid);
	var pos = $couptable.fnGetPosition(ele);
	$couptable.fnDeleteRow(pos);
}

function removecustomer(rid) {
	$custable = $("#customertable").dataTable();
	var ele = document.getElementById("cusrow" + rid);
	var pos = $custable.fnGetPosition(ele);
	$custable.fnDeleteRow(pos);

	//$("#cusrow" + rid).remove();
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
			effect : "drop",
			duration : 400,
			direction : "up"
		},
		hide : {
			effect : "drop",
			duration : 400,
			direction : "down"
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
	//addcustomer('112', 'wer', '112', '2231', '123');
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
		modal : false,
		title : "添加新优惠券",
		show : {
			effect : "drop",
			duration : 400,
			direction : "up"
		},
		hide : {
			effect : "drop",
			duration : 400,
			direction : "down"
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

function changepass() {
	$("#changepwd").dialog({
		dialogClass : "no-close",
		modal : true,
		resizable : false,
		title : "修改密码",
		show : {
			effect : "slideToggle",
			duration : 100
		},
		position : {
			my : "center top",
			at : "center top",
			of : pbody_shop
		}
	});
}

function updatepass() {
	var voldpass = $.trim($("#currentpass").val());
	var vnewpass = $.trim($("#newpass").val());
	var vnewpassconf = $.trim($("#newpass_conf").val());
	if (voldpass == '' || vnewpass == '' || vnewpassconf == '') {
		$("#currentpass").notify("密码都不能为空", {
			className : "error",
			position : "top",
			arrowShow : true,
			autoHideDelay : 1000
		});
		return false;
	}
	if (vnewpass != vnewpassconf) {
		$("#newpass_conf").notify("确认密码和新密码不一致", {
			className : "error",
			position : "top",
			arrowShow : true,
			autoHideDelay : 1000
		});
		return false;
	}
	$.post("/shops/updateinfo", {
		pk : 'password',
		newpass : vnewpass,
		currpass : voldpass
	}, null, "script");
}

function closeuserpwd() {
	$('#changepwd').dialog('close');
	$("#currentpass").val("");
	$("#newpass").val("");
	$("#newpass_conf").val("");
	return false;
}

function changepassfail() {
	$("#currentpass").notify("管理密码错误", {
		className : "error",
		position : "top",
		arrowShow : true,
		autoHideDelay : 1000
	});
}

function changepasssucc() {
	closeuserpwd();
	$("#changepwdbtn").notify("密码重设成功	", {
		className : "success",
		position : "right",
		arrowShow : true,
		autoHideDelay : 3000
	});
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
	var template = YayaTemplate(document.getElementById("badge-template").innerHTML);
	var str = template.render({
		coupid : rid
	});
	$("#coupcmd" + rid).html(str);
}

function recycle(cid, qid) {
	//rid is the coupon id, qid is id of quest;
	var currentreq = parseInt($("#couponreq" + cid).html());
	var currentusd = parseInt($("#couponusd" + cid).html());
	if (currentreq == 0) {
		return;
	}
	if (currentreq == 1) {
		$("#couponbadge" + cid).removeClass("badge-success");
		$("#coup_req_id" + cid).removeAttr("onclick");
		$("#coup_req_id" + cid).off();
	}
	$.post("/coupons/delrequest", {
		questid : qid,
		couponid : cid
	}, null, "script");
	$("#couponreq" + cid).html(currentreq - 1);
	$("#couponusd" + cid).html(1 + currentusd);
}

function recyclesucc(queid) {
	$("#reqid" + queid).notify("优惠券回收成功", {
		className : "success",
		position : "top",
		arrowShow : true,
		autoHideDelay : 1000
	});
	$("#reqid" + queid).remove();
}

function pubcouprefresh(ref) {
	var rid = $(ref).attr('coupid');
	$.post("/coupons/refreshrequest", {
		couponid : rid
	}, null, "script");
}

function addcustomer(id, realcard, phone, balance, level) {
	//function addcustomer() {
	var template = YayaTemplate(document.getElementById("customer-template").innerHTML);
	var str = template.render({
		cusid : id,
		cusrealid : realcard,
		cusphone : phone,
		cusbalance : balance,
		cuslevel : level
	});

	$custable = $("#customertable").dataTable();
	var divtr = document.createElement('tr');
	$(divtr).html(str);
	$(divtr).attr('id', 'cusrow' + id);
	$custable.fnAddTr(divtr);
}

function addcoupon(id, picurl, title, content, usertype, startdate, enddate) {
	var template = YayaTemplate(document.getElementById("coupon-template").innerHTML);
	var str = template.render({
		coupid : id,
		couppic : picurl,
		couptitle : title,
		coupcontent : content,
		couptype : usertype,
		coupstart : startdate,
		coupend : enddate
	});
	$couptable = $("#coupontable").dataTable();
	var divtr = document.createElement('tr');
	$(divtr).html(str);
	$(divtr).attr('id', 'couprow' + id);
	$couptable.fnAddTr(divtr);
	savecouponsucc();
}

function questrefresh(coupid, reqst, usd) {
	var currentreq = parseInt($("#couponreq" + coupid).html());
	if (currentreq == 0 && reqst != 0) {
		$("#couponbadge" + coupid).addClass("badge-success");
		$("#coup_req_id" + coupid).on('click', function() {
			$('#requestcoupon').removeData('bs.modal');
			$('#requestcoupon').modal({
				remote : '/coupons/requestcoupon/' + $(this).attr('coupid')
			});
			$('#requestcoupon').modal('show');
		});
	}
	if (reqst == 0 && currentreq != 0) {
		$("#couponbadge" + coupid).removeClass("badge-success");
		$("#coup_req_id" + coupid).off();
		$("#coup_req_id" + coupid).removeAttr("onclick");
	}
	$("#couponreq" + coupid).html(reqst);
	$("#couponusd" + coupid).html(usd);
}
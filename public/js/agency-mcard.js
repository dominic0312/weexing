/**
 * Unicorn Admin Template
 * Version 2.2.0
 * Diablo9983 -> diablo9983@gmail.com
 **/

$(document).ready(function() {
	var currenttemplate = 0;
	var currentcard = 0;
	$('#usertable').dataTable({
		"bJQueryUI" : true,
		"bLengthChange" : false,
		"sPaginationType" : "full_numbers",
		"sDom" : '<""l>t<"F"fp>',
		"bSort" : true,
		"bAutoWidth" : false,
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
		"oLanguage" : {
			"sUrl" : "/js/datatableschn.js"
		},
		"aaSorting" : [[0, 'desc']],
	});
	$('.selectpicker').selectpicker();
	$('#templates').slick({
		arrows : true,
		lazyLoad : 'ondemand',
		//fade : true,
		//centerMode : false,
		infinite : false,
		slidesToShow : 1,
		slidesToScroll : 1,
		onAfterChange : function(ref, index) {
			currenttemplate = $(".templ[index='" + index + "']").attr("tid");
		}
	});
	$('#cards').slick({
		arrows : true,
		lazyLoad : 'ondemand',
		//fade : true,
		//centerMode : false,
		infinite : false,
		slidesToShow : 1,
		slidesToScroll : 1,
		onAfterChange : function(ref, index) {
			currentcard = $(".cards[index='" + index + "']").attr("cid");
		}
	});

	$("#connect-dialog").dialog({
		autoOpen : false,
		modal : true,
		height : 600,
		width : 620,
		//maxHeight : 900,
		//maxWidth : 680,
		resizable : false,
		title : '连接微信公众平台',
		closeText : "关闭",
		show : {
			effect : "drop",
			duration : 400,
			direction : "up"
		},
		hide : {
			effect : "drop",
			duration : 400,
			direction : "down"
		}
	});
	$("#charge-dialog").dialog({
		autoOpen : false,
		modal : false,
		//maxHeight : 900,
		//maxWidth : 680,
		resizable : false,
		title : '确认充值',
		closeText : "关闭",
		appendTo : "#account-dialog",
		buttons : {
			"确认" : function() {
				var p = $(this).dialog("option", "point");
				var s = $(this).dialog("option", "shopid");
				$.post("/shops/chargeshop", {
					shopid : s,
					point : p
				}, null, "script");
				$(this).dialog("close");
			},
			"取消" : function() {
				$(this).dialog("close");
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
		}
	});

	$("#template-dialog").dialog({
		autoOpen : false,
		modal : true,
		height : 600,
		width : 450,
		//maxHeight : 900,
		//maxWidth : 680,
		resizable : false,
		title : '请选择一个模板',
		closeText : "关闭",
		show : {
			effect : "drop",
			duration : 400,
			direction : "up"
		},
		hide : {
			effect : "drop",
			duration : 400,
			direction : "down"
		}
	});

	$("#account-dialog").dialog({
		autoOpen : false,
		modal : true,
		height : 560,
		width : 450,
		//maxHeight : 900,
		//maxWidth : 680,
		resizable : false,
		title : '账户设置',
		closeText : "关闭",
		show : {
			effect : "drop",
			duration : 400,
			direction : "up"
		},
		hide : {
			effect : "drop",
			duration : 400,
			direction : "down"
		}
	});
	$("#card-dialog").dialog({
		autoOpen : false,
		modal : true,
		height : 400,
		width : 450,
		//maxHeight : 900,
		//maxWidth : 680,
		resizable : false,
		title : '请选择一张会员卡',
		closeText : "关闭",
		show : {
			effect : "drop",
			duration : 400,
			direction : "up"
		},
		hide : {
			effect : "drop",
			duration : 400,
			direction : "down"
		}
	});

	var dial = $("#delete-dialog").dialog({
		autoOpen : false,
		modal : false,
		resizable : false,
		buttons : {
			"删除" : function() {
				var sid = $(this).dialog("option", "shopid");
				$.post("/shops/removeshop", {
					shopid : sid
				}, null, "script");
				$(this).dialog("close");
			},
			"取消" : function() {
				$(this).dialog("close");
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
		}
	});
	var onlinedialog = $("#online-dialog").dialog({
		autoOpen : false,
		modal : false,
		resizable : false,
		buttons : {
			"确认" : function() {
				var sid = $(this).dialog("option", "shopid");
				onlinecmd(sid, "online");
				$(this).dialog("close");
			},
			"取消" : function() {
				$(this).dialog("close");
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
		}
	});
	var offlinedialog = $("#offline-dialog").dialog({
		autoOpen : false,
		modal : false,
		resizable : false,
		buttons : {
			"确认" : function() {
				var sid = $(this).dialog("option", "shopid");
				onlinecmd(sid, "offline");
				$(this).dialog("close");
			},
			"取消" : function() {
				$(this).dialog("close");
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
		}
	});
	var newuser = $("#new-dialog").dialog({
		autoOpen : false,
		modal : true,
		resizable : false,
		dialogClass : "no-close",
		buttons : {
			"确定" : function() {
				var name = $("#shopname").val();
				var url = $("#shopurl").val()
				if (!name) {
					errormsg("shopname", "用户名不能为空");
					return;
				}
				if (name.length > 10) {
					errormsg("shopname", "商户名不能多于10个汉字");
					return;
				}
				if (!url) {
					errormsg("shopurl", "商户url不能为空");
					return;
				}
				if (name.length > 10) {
					errormsg("shopurl", "商户url不能多于10个字母");
					return;
				}
				$.post("/shops/createshop", {
					shopname : $("#shopname").val(),
					shopurl : $("#shopurl").val(),
					createtype : $("#createtype").val()
				}, null, "script");
				resetnewuserform();
				$(this).dialog("close");
			},
			"取消" : function() {
				resetnewuserform();
				$(this).dialog("close");
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
		}
	});

});

function setTemplate(ref) {
	var id = $(ref).parent().attr("rid");
	var usertemplate = $(ref).attr("templateid");
	var i = $("#temp" + usertemplate).attr('index');
	var s = parseInt(i);
	$("#template-dialog").dialog("option", {
		shopid : id,
		templateid : usertemplate
	});
	// $('.multiple-items').reInit();
	$('#templates').slickGoTo(s);
	$("#template-dialog").dialog("open");
}

function setConnect(ref) {
	var id = $(ref).parent().attr("rid");
	$.post("/shops/shopconnect", {
		shopid : id
	}, null, "script")

}

function setCard(ref) {
	var id = $(ref).parent().attr("rid");
	var memcardid = $(ref).attr("cardid");
	var i = $("#card" + memcardid).attr('index');
	var s = parseInt(i);
	$("#card-dialog").dialog("option", {
		shopid : id,
		cardid : memcardid
	});
	// $('.multiple-items').reInit();
	$('#cards').slickGoTo(s);
	$("#card-dialog").dialog("open");
}

function setAccount(ref) {
	var id = $(ref).parent().attr("rid");

	$.post("/shops/shopaccount", {
		shopid : id
	}, null, "script")
}

function errormsg(obj, str) {
	$("#" + obj).notify(str, {
		className : "error",
		arrowShow : true,
		position : "top",
		autoHideDelay : 4000
	});
}

function delconfirm(ref) {
	var sid = $(ref).parent().attr("rid");
	$("#delete-dialog").dialog("option", "shopid", sid);
	$("#delete-dialog").dialog("open");
	return false;
}

function showmsg(title, msg) {
	$.gritter.add({
		title : title,
		text : msg,
		//image : 'img/demo/envelope.png',
		sticky : false,
	});
}

function createuser() {
	$("#new-dialog").dialog("open");
	return false;
}

function removesucc(shopname, shopid) {
	$usertable = $("#usertable").dataTable();
	var ele = document.getElementById("row" + shopid);
	var pos = $usertable.fnGetPosition(ele);
	$usertable.fnDeleteRow(pos);
	$.gritter.add({
		title : '删除成功',
		text : '商家' + shopname + '已经被删除.',
		//image : 'img/demo/envelope.png',
		sticky : false,
	});
}

function resetnewuserform() {
	$("#shopname").val("");
	$("#shopurl").val("");
}

function addtotable(vsid, vsname, vsurl, vstartdate, vexpdate, vtemplate, vmemcard) {
	var template = YayaTemplate(document.getElementById("shoptemplate").innerHTML);
	var str = template.render({
		sid : vsid,
		sname : vsname,
		surl : vsurl,
		startdate : vstartdate,
		expdate : vexpdate,
		templateid : vtemplate,
		membercardid : vmemcard
	});

	$usertable = $("#usertable").dataTable();
	var divtr = document.createElement('tr');
	$(divtr).html(str);
	$(divtr).attr('id', 'row' + vsid);
	$(divtr).attr('class', 'offlinecol');
	$usertable.fnAddTr(divtr);
}

function online(ref) {
	rid = $(ref).parent().attr('rid');
	status = $.trim($(ref).html());
	if (status == "启动") {
		$("#online-dialog").dialog("option", "shopid", rid);
		$("#online-dialog").dialog("open");
		return false;
	}
	if (status == "停止") {
		$("#offline-dialog").dialog("option", "shopid", rid);
		$("#offline-dialog").dialog("open");
		return false;
	}
	return false;
}

function onlinecmd(refs, cmd) {
	$.post("/shops/onlineshop", {
		shopid : refs,
		operation : cmd
	}, null, "script");
}

function onlinefail(shopname) {
	$.gritter.add({
		title : '启动失败',
		text : '商家:' + shopname + '的服务已经过期',
		//image : 'img/demo/envelope.png',
		sticky : false,
	});
}

function offlinesuccess(shopname) {
	$.gritter.add({
		title : '停止成功',
		text : '商家:' + shopname + '的服务已经被停止',
		sticky : false,
	});
}

function onlinesuccess(shopname, id) {
	var btn = $("#rec" + id).find('button').eq(0);
	var row = $("#row" + id).find('td').eq(2);
	btn.removeClass("btn-success").addClass("btn-danger");
	btn.html("停止");
	row.html("<span class='status'>运行中</span>");
	$("#row" + id).removeClass("offlinecol").addClass("onlinecol");
	$.gritter.add({
		title : '启动成功',
		text : '商家:' + shopname + '的服务已经启动',
		sticky : false,
	});
}

function offlinesuccess(shopname, id) {
	var btn = $("#rec" + id).find('button').eq(0);
	var row = $("#row" + id).find('td').eq(2);
	btn.removeClass("btn-danger").addClass("btn-success");
	btn.html("启动");
	row.html("<span class='status'>停止中</span>");
	$("#row" + id).removeClass("onlinecol").addClass("offlinecol");
	$.gritter.add({
		title : '成功停止',
		text : '商家:' + shopname + '的服务已经停止',
		sticky : false,
	});
}

function updatetempsuccess(sid, shopname, templateid) {
	$("#shoppage" + sid).attr('templateid', templateid);
	$.gritter.add({
		title : '界面更新成功',
		text : '商家:' + shopname + '的页面已经更新.',
		sticky : false,
	});
}

function updatecardsuccess(sid, shopname, cardid) {
	$("#shopcard" + sid).attr('cardid', cardid);
	$.gritter.add({
		title : '卡片更新成功',
		text : '商家:' + shopname + '的会员卡已经更新.',
		sticky : false,
	});
}

function savetemplate() {
	var shop_id = $("#template-dialog").dialog("option", "shopid");
	$.post("/shops/updateusertemplate", {
		shopid : shop_id,
		templateid : currenttemplate
	}, null, "script")
	$("#template-dialog").dialog("close");
}

function savecard() {
	var shop_id = $("#card-dialog").dialog("option", "shopid");
	$.post("/shops/updatemembercard", {
		shopid : shop_id,
		card_id : currentcard
	}, null, "script")
	$("#card-dialog").dialog("close");
}

function shopconnect(seckey, token, shopid, aid, asec) {
	var template = YayaTemplate(document.getElementById("connect-template").innerHTML);
	var str = template.render({
		wxurl : seckey,
		wxtoken : token,
		sid : shopid,
		appid : aid,
		appsec : asec
	});

	$("#addmenu-dialog").dialog({
		autoOpen : false,
		modal : false,
		//maxHeight : 900,
		//maxWidth : 680,
		resizable : false,
		title : '添加菜单',
		closeText : "关闭",
		appendTo : "#connect-dialog",
		buttons : {
			"确认" : function() {
				menuprocess();
				$(this).dialog("close");
			},
			"取消" : function() {
				$(this).dialog("close");
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
		}
	});

	$("#addmenu2-dialog").dialog({
		autoOpen : false,
		modal : false,
		//maxHeight : 900,
		//maxWidth : 680,
		resizable : false,
		title : '添加二级菜单',
		closeText : "关闭",
		appendTo : "#connect-dialog",
		buttons : {
			"确认" : function() {
				var s = $(this).dialog("option", "level1");
				menuprocess2(s);
				$(this).dialog("close");
			},
			"取消" : function() {
				$(this).dialog("close");
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
		}
	});

	$("#changemenu-dialog").dialog({
		autoOpen : false,
		modal : false,
		//maxHeight : 900,
		//maxWidth : 680,
		resizable : false,
		title : '修改菜单',
		closeText : "关闭",
		appendTo : "#connect-dialog",
		buttons : {
			"确认" : function() {
				var i = $(this).dialog("option", "index");
				var lv = $(this).dialog("option", "level");
				if (lv == 1) {
					var $destbtn = $("#menuset").children().eq(i).children("span.title_c");
				} else {
					var lv2 = parseInt($(this).dialog("option", "lv2id"));
					var $destbtn = $("#menuset").children().eq(i).children("div").eq(lv2 - 1).children("span.title_c");
				}
				var $title = $("#menutitle_c").val()
				var $url = $("#menuurl_c").val();
				$destbtn.html($title);
				$destbtn.attr("url", $url);
				$(this).dialog("close");
			},
			"取消" : function() {
				$(this).dialog("close");
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
		}
	});

	$("#connect-inner").replaceWith(str);
	$('#appid').editable({
		type : 'text',
		mode : 'popup',
		rows : 1,
		emptytext : '请点击此处输入',
		url : '/shops/updateappinfo/' + shopid,
		pk : 'appid',
		ajaxOptions : {
			type : 'post'
		}
	});
	$('#appsec').editable({
		type : 'text',
		mode : 'popup',
		rows : 1,
		emptytext : '请点击此处输入',
		url : '/shops/updateappinfo/' + shopid,
		pk : 'appsec',
		ajaxOptions : {
			type : 'post'
		}
	});
	loadmenu(shopid);
	$("#connect-dialog").dialog("open");
}

function loadmenu(sid) {
	$.ajax({
		url : "/wxinterface/loadmenu",
		dataType : 'json',
		//contentType : 'application/json; charset=UTF-8', // This is the money shot
		data : {
			shopid : sid
		},
		type : 'POST',
		complete : function(data, status) {
			if (status == 'success') {
				m = data.responseJSON.menus;
				generatemenu(m);
			} else {

			}
		}
		//complete :
		//menusavesucc() // etc
	});
}

function generatemenu(menu) {
	var level1 = -1;
	var level2 = 0;
	for (m in menu) {

		// $("#menuset").append("<button class='btn btn-default menu_level1' status='closed' style='height:90%'><span class='title_c' url='" + $("#menuurl").val() + "'>" + $("#menutitle").val() + "</span><span class='config config_open' onclick='showsubmenu(this)'>展开</span>&nbsp;&nbsp;<span class='config config_change' onclick='configmenu(this,1);'>修改</span>&nbsp;&nbsp;<span class='config config_del' onclick='removemenu(this);'>刪除</span></button>");
		if (!menu[m].parent_id) {
			$("#menuset").append("<button class='btn btn-default menu_level1' status='closed' style='height:90%'><span class='title_c' url='" + menu[m].url + "'>" + menu[m].name + "</span><span class='config config_open' onclick='showsubmenu(this)'>展开</span>&nbsp;&nbsp;<span class='config config_change' onclick='configmenu(this,1);'>修改</span>&nbsp;&nbsp;<span class='config config_del' onclick='removemenu(this);'>刪除</span></button>");
			level1 = level1 + 1;
			level2 = 0;
		} else {
			obj = $("#menuset").children('button').eq(level1);
			obj.append("<div class='btn btn-default secondmenu'><span class='title_c' url='" + menu[m].url + "'>" + menu[m].name + "</span><span class='config config_change' onclick='configmenu(this,2);'>修改</span>&nbsp;&nbsp;<span class='config config_del' onclick='removemenu2(this);'>刪除</span></div>");
			dest = obj.children('div').last();
			level2 = level2 + 1;
			dest.addClass("menu_" + level2);
			dest.attr("lv2", level2);
		}
	}
	if (level1 == 0) {
		$(".menu_level1").css('width', '100%');
	}
	if (level1 == 1) {
		$(".menu_level1").css('width', '49%');
	}
	if (level1 == 2) {
		$(".menu_level1").css('width', '32%');
	}

	$('.menu_level1').hover(function() {
		$(this).find('span.config').show();
	}, function() {
		$(this).find('span.config').hide();
	});
}

function shopaccount(id, exp, logo, phone, oemname, oemurl) {
	var template = YayaTemplate(document.getElementById("account-template").innerHTML);
	var str = template.render({
		sid : id,
		expdate : exp,
		slogo : logo,
		sphone : phone,
		sname : oemname,
		surl : oemurl
	});
	$("#account-inner").replaceWith(str);
	$('input[type=file]').bootstrapFileInput();
	$('.file-inputs').bootstrapFileInput();
	$('#oemname').editable({
		type : 'text',
		mode : 'popup',
		rows : 1,
		emptytext : '空',
		url : '/shops/updateoem/' + id,
		pk : 'oemname',
		ajaxOptions : {
			type : 'post',
		}
	});

	$('#oemurl').editable({
		type : 'text',
		mode : 'popup',
		rows : 1,
		url : '/shops/updateoem/' + id,
		pk : 'oemurl',
		emptytext : '空',
		ajaxOptions : {
			type : 'post',
		}
	});

	$("#account-dialog").dialog("open");
	$('#fileupload').fileupload({
		dataType : 'json',
		done : function(e, data) {

			var s = data.result.url;
			$("#currentlogo").attr('src', s);
		}
	});

}

function urlexist(url) {
	$.gritter.add({
		title : '商户创建失败',
		text : 'URL:' + url + '已经存在，请重新选择.',
		sticky : false,
	});
}

function chargeconfirm(sid) {
	var s = $("#charge-input").val();
	if (s && s.match(/^\+?[1-9][0-9]*$/)) {
		$("#month-span").html(s);
		$("#point-span").html(s);
		$("#charge-dialog").dialog("option", {
			shopid : sid,
			point : s
		});
		$("#charge-dialog").dialog("open");
	}
}

function addmenu() {

	if ($("#menuset").children().length == 3) {
		$.gritter.add({
			title : '操作失败',
			text : '一级菜单最多只能有三个',
			sticky : false
		});
		return;
	}
	$("#addmenu-dialog").dialog("option", {
		level1 : 1,
		level2 : 2
	});
	$("#menutitle").val("");
	$("#menuurl").val("");
	$("#addmenu-dialog").dialog("open");
	//}
}

function addmenu2() {
	var level1len = $("#menuset").children().length;
	if (level1len == 0) {
		$.gritter.add({
			title : '操作失败',
			text : '必须要有一级菜单',
			sticky : false
		});
		return;
	}

	$("#menuselect option").remove();
	$("#menutitle2").val("");
	$("#menuurl2").val("");

	$("#menuset").children().each(function(index) {
		$("#menuselect").append($("<option></option>").attr("value", index).text($(this).find('span.title_c').html()));
	});

	//$("#menuselect").append($("<option></option>").attr("value", "值").text("文字"));
	$("#addmenu2-dialog").dialog("option", {
		level1 : 1,
		level2 : 2
	});
	$("#addmenu2-dialog").dialog("open");
}

function chargesucc(sid, shopname, expdate) {
	$.gritter.add({
		title : '充值成功',
		text : '商家 ' + shopname + '已经延期到:' + expdate,
		sticky : false,
	});
	$("#expdate-span").html(expdate);
	$("#row" + sid + ">td:eq(4)").html(expdate);
}

function addlevel1() {
	if ($("#menuset").attr("level1") == "0") {
		$("#menuset").html("<button class='btn btn-primary'>hello</button>");
	}
}

function configmenu(ref, lv) {
	var $target = $(ref).siblings().eq(0);
	var title = $target.html();
	var url = $target.attr("url");
	$("#menutitle_c").val(title);
	$("#menuurl_c").val(url);
	if (lv == 1) {
		var ind = $("#menuset > button").index($(ref).parent());
		$("#changemenu-dialog").dialog("option", {
			index : ind,
			level : lv
		});
	}
	if (lv == 2) {
		var ind = $("#menuset > button").index($(ref).parent().parent());
		$("#changemenu-dialog").dialog("option", {
			index : ind,
			level : lv,
			lv2id : $target.parent().attr('lv2')
		});
	}
	$("#changemenu-dialog").dialog("open");
}

function removemenu(ref) {
	var menunum = $(ref).parent().siblings().length;
	if (menunum == 1) {
		$(ref).parent().remove();
		$(".menu_level1").css("width", "100%");
		return;
	}
	if (menunum == 2) {
		$(ref).parent().remove();
		$(".menu_level1").css("width", "49%");
		return;
	}
	$(ref).parent().remove();
}

function removemenu2(ref) {
	var divs = $(ref).parent().siblings('div');
	var menunum = divs.length + 1;
	var ind = $(ref).parent().attr("lv2");
	if (ind == menunum) {
		$(ref).parent().remove();
	} else {
		divs.each(function(index) {
			var lv = $(this).attr("lv2");
			var newlv = lv - 1;
			if (lv > ind) {
				$(this).removeClass("menu_" + lv).addClass("menu_" + newlv);
				$(this).attr('lv2', newlv);
				$(ref).parent().remove();
			}
		});

		//$(ref).parent().remove();
	}

}

function menuprocess() {
	$("#menuset").append("<button class='btn btn-default menu_level1' status='closed' style='height:90%'><span class='title_c' url='" + $("#menuurl").val() + "'>" + $("#menutitle").val() + "</span><span class='config config_open' onclick='showsubmenu(this)'>展开</span>&nbsp;&nbsp;<span class='config config_change' onclick='configmenu(this,1);'>修改</span>&nbsp;&nbsp;<span class='config config_del' onclick='removemenu(this);'>刪除</span></button>");
	var menunum = $("#menuset").children().length;
	if (menunum == 1) {
		$(".menu_level1").css("width", "100%");
	}
	if (menunum == 2) {
		$(".menu_level1").css("width", "49%");
	}

	if (menunum == 3) {
		$(".menu_level1").css("width", "32%");
	}

	$('.menu_level1').hover(function() {

		$(this).find('span.config').show();
	}, function() {
		$(this).find('span.config').hide();
	});
}

function menuprocess2() {

	//<a data-toggle="dropdown" href="#">Dropdown trigger</a>
	var target = $("#menuselect").val();
	var index = parseInt(target);
	var obj = $("#menuset").children().eq(index);
	var s = obj.children("div").length;
	if (s == 5) {
		$.gritter.add({
			title : '操作失败',
			text : '二级菜单最多5项',
			//image : 'img/demo/envelope.png',
			sticky : false,
		});
		return;
	}
	s = s + 1;
	//var $str=$("#menuset").children(index);
	obj.append("<div class='btn btn-default secondmenu'><span class='title_c' url='" + $("#menuurl2").val() + "'>" + $("#menutitle2").val() + "</span><span class='config config_change' onclick='configmenu(this,2);'>修改</span>&nbsp;&nbsp;<span class='config config_del' onclick='removemenu2(this);'>刪除</span></div>");
	var s = obj.children("div").length;
	var dest = obj.children("div").last();
	dest.addClass("menu_" + s);
	dest.attr("lv2", s);
}

function showsubmenu(ref) {
	var mainmenu = $(ref).parent();
	var menus = mainmenu.find("div.secondmenu");
	if (menus.length > 0) {
		var status = mainmenu.attr("status");
		if (status == "closed") {
			menus.show();
			mainmenu.attr('status', 'opened');
			mainmenu.children().eq(1).html("收起");
			return;
		}

		if (status == "opened") {
			menus.hide();
			mainmenu.attr('status', 'closed');
			mainmenu.children().eq(1).html("展开");
			return;
		}

	} else {
		return;
	}
}

function menusavesucc() {
	$.gritter.add({
		title : '成功',
		text : '菜单保存成功',
		sticky : false,
	});
}

function savemenu() {
	lv1 = $("#menuset").children('button');
	shopid = $.trim($("#connect-sid").html());
	data = {};
	data.menus = [];
	lv1.each(function(index) {
		m = $(this).children().eq(0);
		m1 = {};
		m1.title = m.html();
		m1.url = m.attr("url");
		m1.key = "";
		m1.type = "link";
		m1.sid = shopid;
		id1 = index * 6;
		m1.id = id1;
		//menu.push(m.html());
		//menu.push(m.attr("url"));
		//data.menus[index]=m1;
		data.menus.push(m1);
		m2 = $(this).children('div');
		m2.each(function(index2) {
			menu2 = {};
			m2s = $(this).children().eq(0);
			menu2["title"] = m2s.html();
			menu2["url"] = m2s.attr("url");
			menu2.key = "";
			menu2.type = "link";
			menu2.sid = shopid;
			menu2.id = id1 + index2 + 1;
			data.menus.push(menu2);
		});
	});
	if (data.menus.length > 0) {
		$.ajax({
			url : "/wxinterface/menuset",
			dataType : 'json',
			//contentType : 'application/json; charset=UTF-8', // This is the money shot
			data : data,
			type : 'POST',
			complete : function(data, status) {
				$.gritter.add({
					title : '成功',
					text : '菜单保存成功',
					sticky : false,
				});
			}
			//complete :
			//menusavesucc() // etc
		});
	} else {
		$.gritter.add({
			title : '保存失败',
			text : '无法保存空菜单',
			sticky : false,
		});
	}
}

function pubmenu() {
	sid = $.trim($("#connect-sid").html());
	aid = $.trim($("#appid").html());
	asec = $.trim($("#appsec").html());
	$.post("/wxinterface/pubmenu", {
		shopid : sid,
		appid : aid,
		appsec : asec
	}, null, "script");
	//$(this).dialog("close");
}


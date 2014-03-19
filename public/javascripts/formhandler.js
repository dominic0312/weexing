var checkpass1 = function() {
	var p1 = $.trim($("#pw1").val());
	var ret = /^[\x21-\x7e]{6,}$/.test(p1);
	if (ret == false) {
		$("#pw1_group").find(".msg_content").html('密码长度不足六位，或有非法字符');
		setStyle('pw1', 'err');
		valid.pw1 = 1;
	} else {
		setStyle('pw1', 'suc');
		valid.pw1 = 0;
	}
	checkformvalid();
};

var checkpass2 = function() {
	var p1 = $.trim($("#pw1").val());
	var p2 = $.trim($("#pw2").val());
	var ret2 = (p1 === p2);
	var ret = (p1 != "" && p1 === p2);
	if (ret == false) {
		$("#pw2_group").find(".msg_content").html('两次输入的密码不一致');
		setStyle('pw2', 'err');
		valid.pw2 = 1;
	} else {
		setStyle('pw2', 'suc');
		valid.pw2 = 0;
	}
    checkformvalid();
};

var checkmail = function() {
	var email = $.trim($("#email").val());
	var ret = isMail(email);

	if (ret == false) {
		$("#email_group").find(".msg_content").html('请输入正确的邮箱地址');
		setStyle('email', 'err');
		valid.email = 1;
		return;
	}

	$.get("/homepage/signup_login_check", {
		user_login : $(this).val()
	}, null, "script");
	
	
};

function checkformvalid() {
	if (valid.email == 0 && valid.pw1 == 0 && valid.pw2 == 0) {
		reg$.attr('disable', false).removeClass('btnDisable');

		reg$.click(function() {
				$.post("/users/create", {
		name : $.trim($("#email").val()),password :$.trim($("#pw1").val())
	}, null, "script");
		});
	} else{
		reg$.attr('disable', false).addClass('btnDisable');
	}
}

function setEmailExistFail() {
	$("#email_group").find(".msg_content").html("该邮箱已经被注册，请直接登录");
	setStyle('email', 'err');
	valid.email = 1;
	checkformvalid();
}

function setEmailExistSuc() {
	setStyle('email', 'suc');
	valid.email = 0;
	checkformvalid();
}

function isMail(e) {
	var t = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return t.test(e);
}

function setStyle(group, style, inline) {
	var group$ = $("#" + group + "_group");

	if (style == 'suc') {

		group$.find('.success').show();
		group$.find('.fail').hide();
	} else if (style == 'err') {

		group$.find('.success').hide();
		group$.find('.fail').show();
	} else if (style == "none") {

		group$.find('.success').hide();
		group$.find('.fail').hide();
	}
}
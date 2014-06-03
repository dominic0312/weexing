$('#howto').popover().click(function() {
	setTimeout(function() {
		$('#howto').popover('hide');
	}, 3000);
});

function pass() {
	passwd = $.trim($("#passinput").val());
	sid = $.trim($("#shopid").html());
	if (passwd == "") {
		$("#passinput").notify("密码不能为空", {
			position : "right",
			autoHideDelay : 000
		});
	} else {
		$.post("/cardbackground/passcheck", {
			shopid : sid,
			password : passwd
		}, null, "script");

	}
}

function checksuccess() {
	surl = $.trim($("#shopurl").html());
	location.href = '/sp/' + surl;
}

function checkfail() {
	$("#passinput").notify("密码错误,登录失败", {
		position : "right",
		autoHideDelay : 3000
	});

}
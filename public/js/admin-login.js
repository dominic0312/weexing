var commit$ = $("#commit");
			var err_panel$ = $("#err_area");


			function callback() {
			};


			function setUserCheckPass() {
				err_panel$.addClass('dn');
				//$("#hd_login").html("<h3>账户：" + $("#username").val() + "</h3>");
				location.href='/admins/index';
			}

			function setUserCheckFail() {
				$("#err_tips").html("用户名/密码错误");
				err_panel$.removeClass('dn');
				return;
			}

			function setUserNotAdmin(){
				$("#err_tips").html("该用户没有管理权限");
				err_panel$.removeClass('dn');
				return;
			}

			var checkform = function() {
				var user = $.trim($("#username").val());
				var pass = $.trim($("#password").val());
				if (user == "") {
					$("#err_tips").html("用户名不能为空");
					err_panel$.removeClass('dn');
					return;
				}
				if (pass == "") {
					$("#err_tips").html("密码不能为空");
					err_panel$.removeClass('dn');
					return;
				} else {
					$.post("/admins/adminlogin", {
						username : $.trim($("#username").val()),
						password : $.trim($("#password").val())
					}, null, "script");

				}
				//}

			};
			commit$.click(checkform);
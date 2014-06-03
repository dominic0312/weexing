jQuery(document).ready(function($) {
	if (navigator.appName.indexOf("Internet Explorer") != -1) {//yeah, he's using IE
		var badBrowser = (navigator.appVersion.indexOf("MSIE 8") == -1 && //v9 is ok
		navigator.appVersion.indexOf("MSIE 1") == -1 //v10, 11, 12, etc. is fine too
		);

		if (badBrowser) {
			window.location = '/browser';
			// navigate to error page
		}
	}

	/* ======= Scrollspy ======= */
	$('body').scrollspy({
		target : '#top',
		offset : 400
	});

	/* ======= ScrollTo ======= */
	$('a.scrollto').on('click', function(e) {

		//store hash
		var target = this.hash;

		e.preventDefault();

		$('body').scrollTo(target, 800, {
			offset : -80
		}, {
			easing : 'easeOutQuad'
		});

		//Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')) {
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}

	});

	/* ======= Flexslider ======= */
	$('.flexslider').flexslider({
		animation : "fade",
		touch : true,
		directionNav : false
	});

	/* ======= jQuery Placeholder ======= */
	$('input, textarea').placeholder();

	/* ======= jQuery FitVids - Responsive Video ======= */
	$("#video-container").fitVids();

});

$('#qqnum').popover().click(function() {
	setTimeout(function() {
		$('#qqnum').popover('hide');
	}, 3000);
});

$('#groupnum').popover().click(function() {
	setTimeout(function() {
		$('#groupnum').popover('hide');
	}, 3000);
});

function showpc() {

	$("#promo1").hide();
	//$("#promo1").hide('slide');
	$("#promo2").show();
}

function showmobile() {
	$("#promo2").hide();
	$("#promo1").show();
}

function sendcomment() {
	var name = $.trim($("#name").val());
	var email = $.trim($("#email").val());
	var message = $.trim($("#message").val());
	$.post("/comments/addcomment", {
		username : name,
		useremail : email,
		usermessage : message
	}, null, "script");
}

function commentsucc() {
	str = "留言成功, 我们会迅速联系您.";
	$("#formdiv").notify(str, {
		className : "success",
		arrowShow : false,
		position : "top",
		autoHideDelay : 3000
	});
	$("#commentform").remove();

}
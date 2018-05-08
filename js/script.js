$(document).ready(function() {
	$(".scroll").click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:$(this.hash).offset().top}, 1000)
	});
	$(".toTop").click(function() {
		$('html, body').animate({scrollTop:0},1000);
	});
	var win = $(window);
	var about= $("#about").offset().top - 50;
	win.scroll(function() {
		if (win.scrollTop() < about ) {
			 $(".toTop").fadeOut();
	} else {
			$(".toTop").fadeIn();
			};
	});
	new WOW().init();
});

			

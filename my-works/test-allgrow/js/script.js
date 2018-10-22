$(document).ready(function() {
	$('#menu-mobile').slideUp('400');
	$('#menu-mobile').css('display','none');	
	$('#menu-btn').click(function(event) {
		$(this).toggleClass('clicked');
		$('#menu-mobile').toggleClass('pos-f');		
		$('#menu-mobile').slideToggle('400');
		$('#menu-mobile').css('display','block');
	});
	$("#top").click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 1000)
	});
});
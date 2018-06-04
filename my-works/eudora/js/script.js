$(document).ready(function() {
	$('.more').next().slideUp();
	$('.more').prev().removeClass('scale');
	$('.more').removeClass('clickOn');

	$('.more').click(function(event) {
		$(this).next().slideToggle(500);
		$(this).prev().toggleClass('scale');
		$(this).toggleClass('clickOn');
	});
	$('.gallery').slideUp();
	$('.food').click(function(event) {
		event.preventDefault();
		stt = $(this).index();
		$('.more').next().slideUp(500);
		$('.more').prev().removeClass('scale');
		$('.gallery').slideUp();
		$('.menu').removeClass('clickOn');
		$(this).addClass('clickOn');
		$('.gallery').eq(stt).slideDown();
	});
});
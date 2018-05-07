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
	$('.menu:eq(0)').click(function(event) {
		event.preventDefault();
			$('.gallery').slideUp();
			$('.menu').removeClass('clickOn');
			$(this).toggleClass('clickOn');
			$('.gallery:eq(0)').slideToggle();
			});
	$('.menu:eq(1)').click(function(event) {
		event.preventDefault();
			$('.gallery').slideUp();
			$('.menu').removeClass('clickOn');
			$(this).toggleClass('clickOn');
			$('.gallery:eq(1)').slideToggle();
			});
	$('.menu:eq(2)').click(function(event) {
		event.preventDefault();
			$('.gallery').slideUp();
			$('.menu').removeClass('clickOn');
			$(this).toggleClass('clickOn');
			$('.gallery:eq(2)').slideToggle();
			});
	
});
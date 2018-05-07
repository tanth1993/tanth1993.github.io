$(document).ready(function() {
	$('.more').next().slideUp();
	$('.more').prev().removeClass('scale');
	$('.more').removeClass('clickOn');

	$('.more').click(function(event) {
		$(this).next().slideToggle(500);
		$(this).prev().addClass('scale');
		$(this).toggleClass('clickOn');
	});
	$('.gallery').slideUp();
	$('.menu:eq(0)').click(function(event) {
		event.preventDefault();
			$('.more').next().slideUp(500);
			$('.more').prev().removeClass('scale');
			$('.gallery').slideUp();
			$('.menu').removeClass('clickOn');
			$(this).addClass('clickOn');
			$('.gallery:eq(0)').slideDown();
			});
	$('.menu:eq(1)').click(function(event) {
		event.preventDefault();
		$('.more').next().slideUp(500);
		$('.more').prev().removeClass('scale');
			$('.gallery').slideUp();
			$('.menu').removeClass('clickOn');
			$(this).addClass('clickOn');
			$('.gallery:eq(1)').slideDown();
			});
	$('.menu:eq(2)').click(function(event) {
		event.preventDefault();
		$('.more').next().slideUp(500);
		$('.more').prev().removeClass('scale');
			$('.gallery').slideUp();
			$('.menu').removeClass('clickOn');
			$(this).addClass('clickOn');
			$('.gallery:eq(2)').slideDown();
			});
	
});
$(document).ready(function() {
	$('.sizeDown').slideUp();
	$('.size').click(function(event) {
		$(this).next().slideToggle();
	});
	$('.products').slideUp();
	// $('.choose:eq(0)').click(function(event) {
	// 	$('.products:eq(0)').slideToggle();
	// });
	// $('.choose:eq(1)').click(function(event) {
	// 	$('.products:eq(1)').slideToggle();
	// });
	// $('.choose:eq(2)').click(function(event) {
	// 	$('.products:eq(2)').slideToggle();
	// });
	$('.choose').click(function(stt) {
		var stt = $('input').index(this);
		$('.products').eq(stt).slideToggle();
	});
	$('#seeAll').click(function(event) {
		var $choose =$('.choose');
		$choose.prop({checked: false,});
		$('.products').slideUp();
		$choose.click();
	});
	;
	var $next =  $('.gallery').find('.next');
	$next.click(function(event) {
		event.preventDefault();		
		var $parent=$(this).parent();
		var	$next = $parent.next();
		var $nextChild = $next.children('.active-sale');
		var $nextChild1 = $next.children('.active-sale').next();
		var $number = $parent.find('.number');
		var ChangeInNum = parseInt($number.text());
		 $nextChild.next().addClass('active-sale');
		 $nextChild1.prev().removeClass('active-sale'); 
		 if (ChangeInNum < 3) {
			ChangeInNum++;
		} 
		$number.text(ChangeInNum);
	});
	var $pre =  $('.gallery').find('.pre');
	$('.pre').click(function(event) {
		event.preventDefault();
		var $parent=$(this).parent();
		var	$next = $parent.next();
		var $nextChild = $next.children('.active-sale');
		var $nextChild1 = $next.children('.active-sale').next();
		var $number = $parent.find('.number');
		var ChangeInNum = parseInt($number.text());
			$nextChild.prev().addClass('active-sale');
			$('.active-sale').next().removeClass('active-sale');
		 	if (ChangeInNum > 1) {
			ChangeInNum--;
			}
		$number.text(ChangeInNum);
	});
	
	
});
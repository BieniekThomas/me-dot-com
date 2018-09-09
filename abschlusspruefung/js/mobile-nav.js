$(function(){
	$('.mobile-nav').click(function(){
		$(this).toggleClass('active');
		$('body').toggleClass('no-scroll');
	});
});
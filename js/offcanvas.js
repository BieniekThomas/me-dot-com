$(function(){

	// No Scroll
	function noScroll(){
		if($('.offcanvas').hasClass('open')){
			$('body').addClass('no-scroll');
		} else {
			$('body').removeClass('no-scroll');
		}
	}

	function offcanvasTrigger(selector){
		selector.click(function(e){
			e.preventDefault();
			$('.offcanvas').addClass('open');
			// Add noscroll
			noScroll();
		});
	}

	function closeOffcanvas(selector){
		selector.click(function(e){
			e.preventDefault();
			$('.offcanvas').removeClass('open');
			// remove Noscroll
			noScroll();
		});
	}

	offcanvasTrigger($('.tb-cv'));
	closeOffcanvas($('.closeCanvas-trigger'));

	var urlid = window.location.hash.substr(1);

	if (urlid == 'cv'){
		$('.offcanvas').addClass('open');
		noScroll();
	}

});
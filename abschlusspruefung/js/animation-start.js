$(function(){
	/* Für die Animation */
	$('.animation-section').on('inview', function(event, isInView) {
	  if (isInView) {
	     $(this).addClass("animation-inview");
	  } else {
	    $(this).removeClass("animation-inview");
	  }
	});
});
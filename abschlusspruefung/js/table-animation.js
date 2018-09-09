$(function(){
	/* Für die Animation */
	$('.spielplan-table tr').one('inview', function(event, isInView) {
	  if (isInView) {
	     $(this).addClass("appear");
	  } else {
	    $(this).removeClass("appear");
	  }
	});
});
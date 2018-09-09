$(function(){
	/* einmalig einblenden der Elemente */
	$('.programm-row').one('inview', function(event, isInView) {
	  if (isInView) {
	    // element ist sichtbar
	    $(this).toggleClass("inview");
	  } else {
	    // element ist nicht mehr sichtbar
	    $(this).removeClass("inview");
	  }
	});

	/* Ändern der Border-color jedes Mal */
	$('.programm-row').on('inview', function(event, isInView) {
	  if (isInView) {
	     $(this).toggleClass("border-change");
	  } else {
	    $(this).removeClass("border-change");
	  }
	});
});

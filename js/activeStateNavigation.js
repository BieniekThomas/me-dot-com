$(function(){
	$('.page-content').on('inview', function(event, isInView) {
	  if (isInView) {
	     $(this).toggleClass("active");

	     var idName = $(this).attr('id');

	     $('.navigation-wrap ul li').each(function(){
	     	el = $(this);
	     	var linkName = $(this).find('a').attr('href').replace('#', '');

	     	if (linkName == idName){
	     		$('.navigation-wrap ul li').removeClass('active');
	     		el.toggleClass('active');
	     		tabActive('.navigation-wrap ul li', 'active');
	     	}
	     });

	  } else {
	    $(this).removeClass("active");
	  }
	});

	var line = $('.navigation-wrap .line');

	 /* moving line function */
    function tabActive(wrapselector, ff){
        indexNo = $( wrapselector +'.'+ff).attr('data-element-number');
        width = $( wrapselector +'.'+ff).attr('data-length');
        leftspace = $( wrapselector +'.'+ff).attr('data-left-space');
        line.css('left', leftspace + 'px');
        line.css('width', width + 'px');
    }
});
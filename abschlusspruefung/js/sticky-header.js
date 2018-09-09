$(function(){
	function sticky()
    {
        var window_top=$(window).scrollTop();
        var top_position=$('body').offset().top+50;
        var element_to_stick=$('.navigation');
        
        if (window_top > top_position) {
            element_to_stick.addClass('sticky');
        } else {
            element_to_stick.removeClass('sticky');
        }
    }

    $(window).scroll(sticky);
    sticky();
});
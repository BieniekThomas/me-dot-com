$(function(){

	/* Random-Array-Function by http://jsfiddle.net/2eyQX/ */
	(function($) {
	  $.rand = function(arg) {
	    if ($.isArray(arg)) {
	      return arg[$.rand(arg.length)];
	    } else if (typeof arg === "number") {
	      return Math.floor(Math.random() * arg);
	    } else {
	      return 4; // chosen by fair dice roll
	    }
	  };
	})(jQuery);

	/* My Thingy */
	$(".container").each(function() {
	  /* largest circle-radius-width in %: 50 = 100% width */
	  var i = 100;

	  /* Set animation-time in seconds*/
	  var maxtime = 20;
	  var mintime = 17;

	  /* Set image-src */
	  var imgsrc = "/img/Bruder-Kirche.jpg";

	  /* Set Background-image if you want */
	  $(".container").css("background-image", "url(" + imgsrc + ")");

	  var clips = $(this).find($(".rotate")).length;
	  var steps = i / clips;

	  var animations = ["rotatezminus", "rotatezplus"];

	  $(this)
	    .find($(".rotate"))
	    .each(function() {
	      /* Random Time Between min and maxtime */
	      var time = Math.floor(Math.random() * maxtime) + mintime;

	      /* setImage */
	      $(this).attr("src", imgsrc);

	      /* Get random animation-name */
	      var animation = jQuery.rand(animations);

	      /* Set Delay */
	      var delay = i / 20;
	      /* var delay = 2; */

	      if (i >= 0) {
/*	      	-webkit-clip-path: polygon(0 0, 100% 0, 100% 1%, 0 1%);
			clip-path: polygon(0 0, 100% 0, 100% 1%, 0 1%);*/
	        $(this).css("clip-path", "polygon(0 " + i + "%, 100% "+i+"%, 100%"+ (i-steps) +"%, 0 "+ (i-steps) +"%)");
	        $(this).css("animation-duration", time + "s");
	        $(this).css("animation-delay", delay + "s");
	        $(this).css("animation-name", animation);
	      } else {
	        $(this).css("opacity", "0");
	      }

	      i = i - steps;
	    });
	});

});
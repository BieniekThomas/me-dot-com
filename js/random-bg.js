$(function(){
	var bgColors = ["#dbf7f9", "#ffe3f3", "#f9f1db", "#eff9db", "#dbe0f9", "#e2fff4", "#e2ecff", "#f9dbdb", "#e6ffe3", "#f9dbf9", "#dbf9f4"];

	bgColors.sort(function(a, b){return 0.5 - Math.random()});
	var i=0;
	$("[random-bg]").each(function(){
	  $(this).css("background-color", bgColors[i]);
	  i++;
	});

	window.setInterval(function(){
	  bgColors.sort(function(a, b){return 0.5 - Math.random()});  
	  var i=0;
	  
	  $("[random-bg]").each(function(){
	    $(this).css("background-color", bgColors[i]);
	    i++;
	  });
	}, 10000);
});
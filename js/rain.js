$(function(){

	var c = document.getElementById("rain");
	var ctx = c.getContext("2d");
	var width = window.innerWidth,
		height = window.innerHeight;
	var drops = [];
	var increaseSpeed = 0.5;
	var sideways = 0;
	var colors;
	Math.random() <= 0.01 ? colors = true : colors = false;

	function clear() {
		width = window.innerWidth;
		height = window.innerHeight;
		c.width = width;
		c.height = height;
	}
	function update() {
		for(var i in drops) {
			drops[i].fallSpeed += increaseSpeed;
			drops[i].y += drops[i].fallSpeed;
			drops[i].length = drops[i].fallSpeed * 2;
			if(drops[i].y - length >= height + 100) 
				drops.splice(i, 1);
			drops[i].x += sideways;
		}
		for(var i = 0; i < Math.floor(Math.random() * 15) + 5; i++) {
			colors ? rand = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")" : rand = "#c0c0c0";
			drops.push({
				x: Math.random() * (width + 400) - 200,
				y: -Math.random() * 60,
				length: 0,
				fallSpeed: Math.random() * 5 + 5,
				color: rand
			});
		}
	}
	function draw() {
		requestAnimationFrame(draw);
		update();
		clear();
		ctx.globalAlpha = 0.3;
		ctx.lineWidth = 2;
		for(var i in drops) {
			ctx.strokeStyle = drops[i].color;
			ctx.beginPath();
			ctx.moveTo(drops[i].x, drops[i].y);
			ctx.lineTo(drops[i].x - sideways, drops[i].y - drops[i].length);
			ctx.stroke();
		}
	}
	draw();
	window.onmousemove = function(event) {
		sideways = (event.clientX / width) * 10 - 5;
	};
});

$(function(){
	$('#itsrainingtoday .wrapper').on("mouseenter", function(){
		$('.dark-overlay').toggleClass('active');
	});	
	$('#itsrainingtoday .wrapper').on("mouseleave", function(){
		$('.dark-overlay').toggleClass('active');
	});
});
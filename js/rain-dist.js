$(function(){var t,e=document.getElementById("rain"),a=e.getContext("2d"),r=window.innerWidth,i=window.innerHeight,h=[],l=.5,d=0;t=Math.random()<=.01,function n(){for(var o in requestAnimationFrame(n),function(){for(var n in h)h[n].fallSpeed+=l,h[n].y+=h[n].fallSpeed,h[n].length=2*h[n].fallSpeed,h[n].y-length>=i+100&&h.splice(n,1),h[n].x+=d;for(n=0;n<Math.floor(15*Math.random())+5;n++)rand=t?"rgb("+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+")":"#c0c0c0",h.push({x:Math.random()*(r+400)-200,y:60*-Math.random(),length:0,fallSpeed:5*Math.random()+5,color:rand})}(),r=window.innerWidth,i=window.innerHeight,e.width=r,e.height=i,a.globalAlpha=.3,a.lineWidth=2,h)a.strokeStyle=h[o].color,a.beginPath(),a.moveTo(h[o].x,h[o].y),a.lineTo(h[o].x-d,h[o].y-h[o].length),a.stroke()}(),window.onmousemove=function(n){d=n.clientX/r*10-5}});
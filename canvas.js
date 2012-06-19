
var animid;

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());



function drawCanvas(element) {
	clearElement(element);
	var canvas = document.createElement('canvas');
	element.appendChild(canvas);
	canvas.style.border = '0px';
	canvas.setAttribute('width', 500);
	canvas.setAttribute('height', 200);
	var ctx = canvas.getContext("2d");
	ctx.width = w = 500;
	ctx.height = h = 200;
	
	function drawRectangle(){
		var d = new Date();
		var timer = d.getTime();
		ctx.fillStyle = "rgb(0,0,200)";
		ctx.fillRect(0,0,w,h);
		var idata = ctx.getImageData(0,0,w,h);
    	var data = idata.data;
    	for(var x = 0; x < w; x++) {
			for(var y = 0; y < h; y++) {
				i = (h*x+y)*4;
				data[i] = 255-(Math.sin(timer/1000+Math.sin((timer*(x+h*Math.sin(timer/1000)+h)>>x)*Math.PI/10000)+Math.cos(timer*(y+w)/10000))*64<<3+104);
				data[i+1] = Math.sin(y)*20+20;
				data[i+2] = Math.sin(y+timer/1000)*20+20;
			}
    	}
    	idata.data = data;
    	ctx.putImageData(idata,0,0);
	}

	(loop = function() {
		animid = requestAnimationFrame(loop);
		ctx.clearRect(0,0,w,h);
		drawRectangle();
		//anim = setTimeout(loop,20);
		//update every 20 miliseconds = 50 fps
	})()
}

function drawCanvas2(element) {
	clearElement(element);
	var canvas = document.createElement('canvas');
	element.appendChild(canvas);
	canvas.style.border = '0px';
	canvas.setAttribute('width', 500);
	canvas.setAttribute('height', 200);
	var ctx = canvas.getContext("2d");
	ctx.width = w = 500;
	ctx.height = h = 200;
	
	function drawRectangle(){
		var d = new Date();
		var timer = d.getTime();
		ctx.fillStyle = "rgb(0,0,200)";
		ctx.fillRect(0,0,w,h);
		var idata = ctx.getImageData(0,0,w,h);
    	var data = idata.data;
    	for(var x = 0; x < w; x++) {
			for(var y = 0; y < h; y++) {
				i = (h*x+y)*4;
				data[i] = (Math.sin(timer/1000+Math.sin((timer*(x+h*Math.sin(timer/1000)+h)>>x)*Math.PI/10000)+Math.cos(timer*(y+w)/10000))*64<<3+104);
				data[i+1] = 255-(Math.sin(y)*20+20);
				data[i+2] = 255-(Math.sin(y+timer/1000)*20+20);
			}
    	}
    	idata.data = data;
    	ctx.putImageData(idata,0,0);
	}

	(loop = function() {
		animid = requestAnimationFrame(loop);
		ctx.clearRect(0,0,w,h);
		drawRectangle();
		//anim = setTimeout(loop,20);
		//update every 20 miliseconds = 50 fps
	})()
}

function drawBlack(element) {
	clearElement(element);
	var canvas = document.createElement('canvas');
	element.appendChild(canvas);
	canvas.style.border = '0px';
	canvas.setAttribute('width', 500);
	canvas.setAttribute('height', 200);
	var ctx = canvas.getContext("2d");
	ctx.width = w = 500;
	ctx.height = h = 200;
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillRect(0,0,w,h);
}

function clearElement(element) {
	cancelAnimationFrame(animid);
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
} 

function stopCanvas(element) {
	//if (anim) anim = false; 
	clearElement(element);
	element.innerHTML = '';
}



function roundNumber(number, decimals) {
	if (!decimals) {decimals = 0;};
	var newnumber = new Number(number+'').toFixed(parseInt(decimals));
	return  parseFloat(newnumber); 
}

function drawCanvas3(element, colorbool) {
	clearElement(element);
	var canvas = document.createElement('canvas');
	element.appendChild(canvas);
	canvas.style.border = '0px';
	canvas.style.backgroundColor = '#000';
	canvas.setAttribute('width', 500);
	canvas.setAttribute('height', 200);
	var ctx = canvas.getContext("2d");
	ctx.width = w = 500;
	ctx.height = h = 200;

	var PI = Math.PI;
	var si = Math.sin;
	var co = Math.cos;
		
	function osc(low, high, inc) {
		// basic test for illegal parameters
		if (low > high || inc < 0 ||  2 * (high - low) < inc) 
			return function() { return NaN; };

		var curr = low;
		return function() {
			var ret = curr;
			curr += inc;

			if (curr > high || curr < low) 
			{   
				curr = inc > 0 ? 2 * high - curr : 2 * low - curr;  
				inc = -inc;
			}

			return roundNumber(ret,2);
		};
	}
	
	var cycle = osc(1.2,2,0.2);
	var numpaths = 55;
	var paths = [];
	for (var i = 0; i < numpaths; i++) {
		var x = w/2;
		var y = h/2;
		paths.push(new bPath(x, y, i+1));
	}
	
	function bPath(startX, startY, index) {
		var distance 	= 0
		var dist 		= 0;
		
		this.direction	= 1;
		this.painting = {
			x: null,
			y: null,
			angle: null,
			angle_end: null
		};
	
		var opacity		= roundNumber(Math.random() * 0.3+0.5,1);
		var red 		= 32; //128 + (Math.random() * 128 << 0);
		var green		= 32; //128 + (a.r() * 32 << 0);
		var blue 		= 32; //128 + (a.r() * 32 << 0);
		
		if (colorbool) red = 128 + (Math.random() * 128 << 0);
		 else blue = 128 + (Math.random() * 128 << 0);
		
		var width 		= roundNumber(Math.random() * 2,2);

		var lastaction 	= 'line'; // arc or line
		var angle 		= 0;
		var angle_end	= roundNumber( 360 / numpaths, 2 ) * Math.PI/180  * index;
		var coords = {
			x : null,
			y : null,
			x2 : startX,
			y2 : startY
		};
		
		this.swapAction = function(){
			lastaction = (lastaction == 'arc') ? 'line' : 'arc';
		}
	
		this.updatePosition = function(){
			if (distance > 250) {
				distance = 0;
				coords.x2 = startX;
				coords.y2 = startY;
				lastaction = 'line';
				red 		= 32 + (Math.random() * 32 << 0);
				green		= 32 + (Math.random() * 32 << 0);
				blue 		= 32 + (Math.random() * 32 << 0);
				if (colorbool) red = 128 + (Math.random() * 128 << 0);
				 else blue = 128 + (Math.random() * 128 << 0);
				
				width 		= roundNumber(Math.random() * 2,2);
				angle = 0;
			};
	
			
	
			switch (lastaction){
	
				case 'arc':
		
					ctx.beginPath();
					ctx.moveTo(coords.x,coords.y);
					ctx.lineCap = "round";
					
					ctx.strokeStyle = "rgba("+red+","+green+","+blue+","+opacity+")";
					ctx.lineWidth = width;
					
					this.painting.angle++;
					this.countangle++;
					ctx.arc(startX,startY, distance, angle,this.deg_to_rad(this.painting.angle));
		
	
					ctx.stroke();
	
					if (this.painting.angle == this.rad_to_deg(coords.angle_end)<<0 || this.countangle > 360) {
						this.swapAction();	
					};
					
					break;
	
				case 'line':
	
					ctx.beginPath();
					ctx.lineCap = "round";
					// this.direction = this.direction * -1;
	
					ctx.moveTo(coords.x2, coords.y2);
	
					dist 			= 2 * index;//(a.r()*30)/2 << 0; // bitshift floor magic!
					distance 		= dist + distance;
					
					ctx.lineWidth = width;
					ctx.strokeStyle = "rgba("+red+","+green+","+blue+","+opacity+")";
					
					var na = this.getAngle()*index;
					
					angle 		= angle_end;
					angle_end	= angle + na; 
	
					this.lastangle = angle_end;
					
	
					coords = {
						x : startX + distance * Math.cos(angle) << 0,
						y : startY + distance * Math.sin(angle) << 0,
						x2: startX  + distance * Math.cos(angle_end) << 0,
						y2: startY  + distance * Math.sin(angle_end) << 0,
						angle: angle,
						angle_end: angle_end
						
					};
	
					this.painting.angle = this.rad_to_deg(angle)<<0;
					
					this.countangle = 0;
					ctx.lineTo(coords.x, coords.y);
	
					ctx.stroke();
	
					this.swapAction();
					break;
	
			}	
	
		}
	
		this.rad_to_deg = function(angle){
			return angle * 180 / Math.PI;
		}
		
		this.deg_to_rad = function(angle){
			return angle * Math.PI/180;
		}
	
		this.getAngle = function(){
			
			// return 0.5 * this.direction;
			return this.direction * (this.deg_to_rad(roundNumber( Math.random()*360 / paths.length, 2 ))) ;
		}
	}

	function draw(){
		for (var i = 0; i < paths.length; i++) {			
			paths[i].updatePosition();
		}	
		ctx.fillStyle = "rgba(0,0,0,0.025)";
		ctx.rect(0, 0, w,h);
		ctx.fill();
		
		var d = new Date();
		var timer = d.getTime();
		
		if (haiku[0] && colorbool) {
			ctx.font="25pt Exo";
			ctx.fillStyle = "rgba(200,10,10,"+(Math.sin(timer/1000)*0.05+0.05)+")";
			ctx.fillText(haiku[0], w*.21, h*.245);
			ctx.fillStyle = "rgba(200,10,10,"+(Math.sin(timer/2000)*0.05+0.05)+")";
			ctx.fillText(haiku[1], w*.21, h*.545);
			ctx.fillStyle = "rgba(200,10,10,"+(Math.sin(timer/3000)*0.05+0.05)+")";
			ctx.fillText(haiku[2], w*.21, h*.845);
		}
		
		if (brainfuck) { 
			var idata = ctx.getImageData(0,0,w,h);
			var data = idata.data;
			for(var x = 0; x < w; x++) {
				for(var y = 0; y < h; y++) {
					i = (h*x+y)*4;
					data[i] = 255-(si(timer+si((timer*(x+h*si(timer)+h)>>x)*PI/10000)+co(timer*(y+w)/10000))*64<<3+104);
					data[i+1] = (si(data[i+2])*124+124)&0xff;
					data[i+2] = (co(timer)*124+124-data[i+2]*.5)&0xff;
				}
			}
			idata.data = data;
			ctx.putImageData(idata,0,0);
		} 		
	} 

	(loop = function() {
		animid = requestAnimationFrame(loop);
		draw();
		//anim = setTimeout(loop,20);
		//update every 20 miliseconds = 50 fps
	})()
}

function rand(n) {
	return Math.floor(Math.random()*n);
}

function drawCanvas4(element) {
	clearElement(element);
	//anim = true;	
	var canvas = document.createElement('canvas');
	element.appendChild(canvas);
	canvas.style.border = '0px';
	canvas.setAttribute('width', 500);
	canvas.setAttribute('height', 200);
	var ctx = canvas.getContext("2d");
	ctx.width = w = 500;
	ctx.height = h = 200;

	var r1 = rand(255);
	var g1 = rand(255);
	var b1 = rand(255);
	var angle = rand(20)+5;
	
	comp0 = SetColors(r1,g1,b1,0); //itself
	comp1 = SetColors(r1,g1,b1,180); //complementary
	comp2 = SetColors(r1,g1,b1,180.0-angle); //quad
	comp3 = SetColors(r1,g1,b1,180.0+angle); //quad

	var colors = [comp1[2], comp2[2], comp3[2]];
	var cl = colors.length;
	
	var nlines = 20;
	
	ctx.lineCap = 'round';
	ctx.lineJoin = 'round';
	ctx.lineWidth = 4;
	ctx.font="24pt Helvetica";
			
	function drawShapes(timer) {

			for (var i=0;i<nlines;i++){
			    var linex = w/nlines;
			    
				for (var j=0; j<w; j+=linex) {
					ctx.strokeStyle = 'rgba('+colors[i%cl]+',0.1)';
					ctx.fillStyle = 'rgba('+colors[(i*j)%cl]+',0.1)';
					var pivotx = i*linex+Math.cos(timer*2/1000+(j+i))*10;
					var pivoty = j+Math.sin(timer/1000+(j+Math.sin(timer*i)))*10;
					ctx.globalCompositeOperation = 'xor';
					ctx.fillText( (i*j)%cl, pivotx, pivoty);
					
					ctx.globalCompositeOperation = 'lighter';
					ctx.beginPath();
					ctx.arc(pivotx,pivoty,Math.abs(Math.cos(timer*2/1000+(j+i))),0, 2*Math.PI, rand(1));
					
					if ((i+j)%2 == 0) ctx.stroke();
					 else ctx.fill();
				}
			  }
	}

	(loop = function() {
		animid = requestAnimationFrame(loop);
		var d = new Date();
		var timer = d.getTime();
		ctx.fillStyle = 'rgba('+comp0[0]+','+0.05+(Math.sin(timer/2000)/100)+')';
		ctx.fillRect(0,0,w,w);
		drawShapes(timer);
	})()
}






function decode_message(message) {

	var decodechars = '!"#$%&/()=?*§\'|~`ºª-_.::@€£‰®∑æ™¶[]≠abcdefghijklmnopqrstuvwxyz0123456789çãáàéèABCDEFGHIJKLMOPQRSTUVWXYZ';
	
	var letters = message.split('');
	var encoded_letters = [];
	
	for(i=0; i< letters.length; i++) {
		encoded_letters[i] = decodechars[rand(decodechars.length)];
	}

	(loop2 = function() {
		var decoded = true;
		var textout = '';
		for(i=0; i< letters.length; i++) {
			if (letters[i] != encoded_letters[i]) {
				decoded = false;
				if (Math.random()>0.84+(i/letters.length)*0.15 ) {
					encoded_letters[i] = letters[i];
				} else {
					encoded_letters[i] = decodechars[rand(decodechars.length)];
				}
			}
			textout += encoded_letters[i]; 
		}
		document.getElementById('decoded_message').innerHTML = textout;
		if (!decoded) setTimeout(loop2,30);
	})()
}

// function airship(top,left,speed) {
// 	var airship ={
// 		top:top,
// 		left:left,
// 		LSpeed:speed,
// 		ASpeed:speed/(top-300+20),
// 		createShip:function() {
// 			var airship1 = document.createElement('div');
// 			airship1.className = 'airship';
// 			airship1.style.backgroundColor = bgc;
// 			airship1.style.top = top+'px';
// 		    airship1.style.left = left+'px';
// 		    airship1.parentNode.appendChild(airship1);
// 		}
// 	}
//     return airship;
// }
// 	// this.top = parseInt(top);
// 	// this.left = parseInt(left);
// 	// this.LSpeed = speed;
// 	// this.ASpeed = this.LSpeed/(top-300+20);
// 	// this.angle = 0;
// 	// var airship = document.createElement('div');
// 	// airship.className = 'airship';
// 	// airship.style.backgroundColor = bgc;
// 	// if (top > 450) {
// 	// 	airship.style.top = top+'px';
// 	// 	airship.style.left = left+'px';
// 	// }else{
// 	// 	airship.style.top = '500px';
// 	// }
// 	// document.body.appendChild(airship);

// // Airship.prototype.addAngle = function() {
// // 	this.angle += this.ASpeed;
// // 	this.Xspeed = this.Lspeed*Math.cos(this.angle);
// //     this.Yspeed = this.Lspeed*Math.sin(this.angle);
// // }
// // Airship.prototype.setClient = function() {
// // 	this.top = this.top - this.Yspeed;
// // 	this.left = this.left + this.Xspeed;
// //     // this.style.top = this.top + 'px';
// //     // this.style.left = this.left + 'px';
// //     console.log(this);
// //     this.style.transform = 'rotate(' + (360*this.angle/6.28) + 'deg)';
// // }
// var btn = document.getElementById('create');
// btn.onclick = function() {
// 	var airship = new Airship('yellow',500,260,20);
// 	airship.createShip();
// 	console.log(airship.top);
// 	// console.log(airship);
// 	// setInterval(airship.setClient.call(airship),1000);
// }




var presentAirship = {
	angle:0,
	timer:null,
	isMove:false,
	power:100
};
// var angle = 0;
presentAirship.getAngle = function() {
    var speed = 20/170;//v=wr,一秒为一个单位
    this.angle = this.angle+speed;
    return this.angle;
}
presentAirship.loopClient = function() {
    var firstAirship = document.getElementById('airshipone');
    var left = firstAirship.offsetLeft;//+40*Math.cos(angle)
    var top = firstAirship.offsetTop;//-20*Math.sin(angle)
    var Xspeed = 20*Math.cos(this.angle);
    var Yspeed = 20*Math.sin(this.angle);
    left = left+Xspeed;
    top = top-Yspeed;
    firstAirship.style.left = left + 'px';
    firstAirship.style.top = top+ 'px';
    var Angle = 360*this.angle/6.28;
    firstAirship.style.transform = 'rotate('+(-Angle)+'deg)';
    // console.log(angle);
}
presentAirship.move = function() {
	presentAirship.getAngle();
	presentAirship.loopClient();
	presentAirship.powerSystem();
}
presentAirship.destroy = function() {
	var firstAirship = document.getElementById('airshipone');
	var space = document.getElementById('space');
	space.removeChild(firstAirship);
	// console.log(firstAirship.parentNode);//w用space为啥不行
	// console.log(firstAirship.parentNode === space);
}
presentAirship.powerSystem = function() {
	if (this.isMove) {
        this.power -= 5;
        $("#power").text(this.power + '%');
        $("#power").css("width",this.power+'%');
        if (this.power <= 50) {
        	$("#power").css("backgroundColor","orange");
        }
        if (this.power <= 20) {
            this.isMove = false;
            $("#power").css("backgroundColor","red");
        }
	}
	if (!this.isMove && this.timer) {
		this.power += 5;
	    $("#power").css("backgroundColor","green");
	    $("#power").css("width",this.power+'%');
		$("#power").text(this.power + '%');
		if (this.power == 100) {
			this.isMove = true;
		}
	}
}
var contro = document.getElementById('airship-one-controller');
var btn = contro.getElementsByTagName('button');
var timer = null;
for (var i = 0; i < btn.length; i++) {
	btn[0].onclick = function() {
        presentAirship.timer = setInterval(presentAirship.move,1000);
        presentAirship.isMove = true;

        
	}
	btn[1].onclick = function() {
		presentAirship.timer = clearInterval(presentAirship.timer);
		presentAirship.isMove = false;
	}
	btn[2].onclick = function() {
		presentAirship.destroy();
	}
}

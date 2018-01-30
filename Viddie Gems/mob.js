var Entity_mob = [];
function mobInit() {	
	for (var i = 0; i < MOBS.length; i++){ 
	Entity_mob[i] = new mob(MOBS[i]);
	Entity_mob[i].drawMob();
	}
	


}

function mob(mob){
	this.id = mob[0];
	this.name = mob[1];
	this.health = mob[2];
	this.x = mob[3];
	this.y = mob[4];
	this.aggro = mob[5];
	this.isAlive = mob[6];
	
	this.drawMob = function (){
		$('#container').append('<div id="mob'+ +this.id +'"></div>');
		$('#mob'+this.id).addClass(this.name);
		$('#mob'+this.id).css("left", this.x)
				 .css("top", this.y)
	}
	
	this.hitCheck = function () {
		
		if ( guyX + 22 <= this.x && guyX + 34 >= this.x && guyY + 12 >= this.y && guyY - 12 <= this.y && direction == 'right' ){
		return true;
		}
		if ( guyX - 24 >= this.x && guyX - 34 <= this.x && guyY + 12 >= this.y && guyY - 12 <= this.y && direction == 'left' ){
		return true;
		}
		if ( guyY + 14 == this.y && guyX + 24 >= this.x && guyX - 24 <= this.x && direction == 'front' ){
		return true;
		}
		if ( guyY - 14 == this.y && guyX + 24 >= this.x && guyX - 24 <= this.x && direction == 'back' ){
		return true;
		}
		else return false;
		
	}
	
	this.die = function(){
		$('#mob'+this.id).remove();
	}
	
	this.getHit = function() {
		if (this.hitCheck() && this.health >= 0){
		$('#mob'+this.id).stop().animate({
			opacity: 0.5
		}, 100, function(){
			$(this).css('opacity', '1');
		})
		this.health -= Math.floor((Math.random() * 10)*5);	
		$('#testlog').append('<p>Health: '+ this.health +'</p>');
		}
		else {
			this.isAlive = false
		}
	}
}

var MOBS = [
	[
		id = 1,
		name = 'skeleton',
		health = 100,
		x = 86,
		y = 86,
		isAggro = true,
		isAlive = true
	],
	[
		id = 2,
		name = 'cyclops',
		health = 100,
		x = 160,
		y = 160,
		isAggro = true,
		isAlive = true
	]
]
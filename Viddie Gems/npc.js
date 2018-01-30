var toX;
var toY; 

function npc_animatereset() {
	for (var i = 0; i < NPCS.length; i++){
		Entity_npc[i].animateReset();	
		Entity_npc[i].talkingTo = false;
	}
}

var NPCS = [
	
	[	
	id = 1,
	name = 'jenny',
	x = 64,
	y = 64,
	dialogID = 0,
	walkspeed = 2500
	],
	
	[	
	id = 2,
	name = 'ufrik',
	x = 128,
	y = 128,
	dialogID = 1,
	walkspeed = 2500
	],
	
	[	
	id = 3,
	name = 'henk',
	x = 256,
	y = 256,
	dialogID = 2,
	walkspeed = 2500
	]
	
	
]

var NpcTalk = [
	[
		'1. Hallo ik ben Jenny',
		'2. Ik ben een NPC',
		'3. Ik houd wel van een feestje!',
		'4. Doe je mee?'
	],
	
	[
		'1. Hallo ik ben Henk',
		'2. sdfasfd',
		'3. adsf',
		'4. dddd?'
	],
	
	[
		'1. Hallo ik ben Ufrik',
		'2. sadfkmlsdafkl;sdd',
		'3. srfgrgvkljmsvrol',
		'4. egrjoiuerojirfealkjn?'
	]
	
]

var Entity_npc = [];
function npcInit() {	
	for (var i = 0; i < NPCS.length; i++){ 
	Entity_npc[i] = new npc(NPCS[i]);
	Entity_npc[i].drawNpc();
	}
	

	setInterval(function(){
		
	for (var i = 0; i < NPCS.length; i++){ 
		Entity_npc[i].npcWalk();
	}
	
		
	}, 3000);
}
	

function npc(npc){
	this.id = npc[0];
	this.name = npc[1];
	this.x = npc[2];
	this.y = npc[3];
	this.nativex = npc[2];
	this.nativey = npc[3];
	this.dialogID = npc[4];
	this.width = 32;
	this.height = 32;
	this.walkspeed = npc[5];
	this.idletime = npc[5];
	this.talkingTo = false;
	this.toX;
	this.toY;
	this.drawNpc = function(){
		$('#container').append('<div id="npc'+ +this.id +'"></div>');
		$('#npc'+this.id).addClass(this.name)
						.addClass('animate');
		$('#npc'+this.id).css("left", this.x)
				 .css("top", this.y)
	}	
	
	this.talkCount = NpcTalk[this.dialogID].length;
	this.talkIndex = 0;
	this.animateReset = function () {
		$('#npc'+this.id).addClass('animate');	
	}
	this.talk = function() {
		
		var msg = null;
		
		if( this.talkIndex >= this.talkCount ) {
			$('#textbox').removeClass('active');
			this.talkIndex = -1;	
			this.talkingTo = false;
		}
		else if ( this. talkIndex < this.talkCount ){
		$('#textbox').addClass('active');
		$('.dialog').remove();
		msg = NpcTalk[this.dialogID][this.talkIndex];	
		$('#textbox').append('<p class="dialog">'+ msg +'</p>');
		
		this.talkingTo = true;
		}
		this.talkIndex += 1;
		
		
		if ( direction == 'right'){
		$('#npc'+this.id).removeClass('animate');
		$('.'+this.name).css('background-position', '0px -32px');	
		}
		else if ( direction == 'left'){
		$('#npc'+this.id).removeClass('animate');
		$('.'+this.name).css('background-position', '0px -64px');	
		}
		else if ( direction == 'back'){
		$('#npc'+this.id).removeClass('animate');
		$('.'+this.name).css('background-position', '0px 0px');	
		}
		else if ( direction == 'front'){
		$('#npc'+this.id).removeClass('animate');
		$('.'+this.name).css('background-position', '0px 32px');	
		}
		
		
		
		return msg;
		
	}
	
	this.Collide = function( guyX, guyY ){
		
		if ( guyX + 24 == this.x && guyY + 12 >= this.y && guyY - 12 <= this.y && direction == 'right' ){
			mogelijk = false;
			return true;
		}
		if ( guyX - 24 == this.x && guyY + 12 >= this.y && guyY - 12 <= this.y && direction == 'left' ){
			mogelijk = false;
			return true;
		}
		if ( guyY + 14 == this.y && guyX + 22 >= this.x && guyX - 22 <= this.x && direction == 'front' ){
			mogelijk = false;
			return true;
		}
		if ( guyY - 14 == this.y && guyX + 22 >= this.x && guyX - 22 <= this.x && direction == 'back' ){
			mogelijk = false;
			return true;
		}
	
		if ( guyY + 14 <= this.y ){
				$('#npc'+ +this.id +'').css('z-index' , '5');
		}
		else if ( guyY >= this.y){
				$('#npc'+ +this.id +'').css('z-index' , '1');
		}
			
	}
	
	this.moveBox = function() {
		if (!this.talkingTo && this.x < this.nativex + 48 && this.x > this.nativex - 48 && this.y < this.nativey + 48 && this.y > this.nativey - 48 ){
		return true;	
		}
		else return false
		
	}
	
	this.canWalk = function (newx, newy){
		toX = Math.ceil(parseInt((newx + 16) / 32 ));
		toY = Math.ceil(parseInt((newy + 16) / 32 ));
		var collision = mapArray[toY][toX];
		if (newx < guyX + 32 && guyY + 12 >= newy && guyY - 12 <= newy ||
			newx < guyX - 32 && guyY + 12 >= newy && guyY - 12 <= newy ||
			guyY + 14 > newy && guyX + 22 >= newx && guyX - 22 <= newx ||
			guyY - 14 > newy && guyX + 22 >= newx && guyX - 22 <= newx){
			return false;	
			}
		else if ( collision == 2 ||  collision == 7 ){
			
			return false
			}
		else return true
		
		
	}
	
	this.npcWalk = function(){
		var direction = Math.floor(Math.random() * 6 );
		if (this.moveBox()){
		switch (direction)
		{
			case 0 : 
				$('#npc'+this.id).removeClass('animate');
				$('#npc'+this.id).addClass('left');
				this.x -= 16;
				var newx = this.x;
				var newy = this.y;
				var name = this.id;
				if (this.canWalk(newx, newy)){
				$('#npc'+this.id).animate({
					left: newx+'px' 
				}, function(){
					$('#'+this.id).removeClass('left');
					$('#'+this.id).addClass('animate');
				});	
				}
				else {this.x += 16;}
				break;
			case 1 : 	
			$('#npc'+this.id).removeClass('animate');
				$('#npc'+this.id).addClass('right');
				this.x += 16;
				var newx = this.x;
				var newy = this.y;
				var name = this.id;
				if (this.canWalk (newx, newy)){
				$('#npc'+this.id).animate({
					left: newx+'px' 
				}, function(){
					$('#'+this.id).removeClass('right');
					$('#'+this.id).addClass('animate');
				});
				}
				else {this.x -= 16}
				break;
			case 2 : 	
			$('#npc'+this.id).removeClass('animate');
				$('#npc'+this.id).addClass('front');
				this.y += 16;
				var newx = this.x;
				var newy = this.y;
				var name = this.id;
				if (this.canWalk (newx, newy)){
				$('#npc'+this.id).animate({
					top: newy+'px' 
				}, function(){
					$('#'+this.id).removeClass('front');
					$('#'+this.id).addClass('animate');
				});	
				}
				else {this.y -= 16;}
				break;
			case 3 : 	
			$('#npc'+this.id).removeClass('animate');
				$('#npc'+this.id).addClass('back');
				this.y -= 16;
				var newx = this.x;
				var newy = this.y;
				var name = this.id;
				if (this.canWalk (newx, newy)){
				$('#npc'+this.id).animate({
					top: newy+'px' 
				}, function(){
					$('#'+this.id).removeClass('back');
					$('#'+this.id).addClass('animate');
				});
				}
				else {this.y += 16;}
				break;
		}
		}
	}
	

}


function dialog_reset(){
	for ( var i = 0; i < NPCS.length; i++ ){
		Entity_npc[i].talkIndex = 0;
		canattack = true;
	}
}




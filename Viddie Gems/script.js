var canattack = true;
var guyX = 0;
var guyY = 0;
var direction = 'front';
var mogelijk = true;
var mapArray;


function tilemapgenerate(){
var guy = document.getElementById('character');
var container = document.getElementById('container');

var charWidth = $( '#character' ).width();
var charHeight = $( '#character' ).height();

var tileX = 0;
var tileY = 0;

var collisionX = 0;
var collisionY = 0;



function Entity_move(){
	if ( direction == 'front' ){
		for (var i = 0; i < NPCS.length; i++){
			Entity_npc[i].y -= 2;
			Entity_npc[i].drawNpc();
			}
		for (var i = 0; i < MOBS.length; i++){
			Entity_mob[i].y -= 2;
			Entity_mob[i].drawMob();
			}
	}
	if ( direction == 'back' ){
		for (var i = 0; i < NPCS.length; i++){
				Entity_npc[i].y += 2;
				Entity_npc[i].drawNpc();
				}
		for (var i = 0; i < MOBS.length; i++){
				Entity_mob[i].y += 2;
				Entity_mob[i].drawMob();
				}
	}
	if ( direction == 'left' ){
		for (var i = 0; i < NPCS.length; i++){
			Entity_npc[i].x += 2;
			Entity_npc[i].drawNpc();
			}
		for (var i = 0; i < MOBS.length; i++){
			Entity_mob[i].x += 2;
			Entity_mob[i].drawMob();
			}

	}
	if ( direction == 'right'){
		for (var i = 0; i < NPCS.length; i++){
			Entity_npc[i].x -= 2;
			Entity_npc[i].drawNpc();
			}
		for (var i = 0; i < MOBS.length; i++){
			Entity_mob[i].x -= 2;
			Entity_mob[i].drawMob();
			}
	}
}
	
function attack() {
	if ( canattack == true ) {
	var direction_attack = 'attack' + direction;
	$('#attack').removeClass(direction_attack);
	canattack = false;
	if ( direction == 'left' ){
		$('#attack').addClass(direction_attack);
		for (var i = 0; i < MOBS.length; i++){
			Entity_mob[i].getHit();
		}
		$('.attackleft').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
  		function(e) {
   		$('#attack').removeClass(direction_attack);
  		 canattack = true;
 		});	
	}
	else if ( direction == 'right' ){
		$('#attack').addClass(direction_attack);
		for (var i = 0; i < MOBS.length; i++){
			Entity_mob[i].getHit();
		};
		$('.attackright').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
  		function(e) {
   		$('#attack').removeClass(direction_attack);
  		 canattack = true;
 		});	
	}
	else if ( direction == 'front' ){
		$('#attack').addClass(direction_attack);
		for (var i = 0; i < MOBS.length; i++){
			Entity_mob[i].getHit();
		};
		$('.attackfront').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
  		function(e) {
   		$('#attack').removeClass(direction_attack);
  		 canattack = true;
 		});	
		
	}
	else if ( direction == 'back' ){
		$('#attack').addClass(direction_attack);
		for (var i = 0; i < MOBS.length; i++){
			Entity_mob[i].getHit();
		};
		$('.attackback').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
  		function(e) {
   		$('#attack').removeClass(direction_attack);
  		 canattack = true;
 		});	
	}
	}
		
}
	



function dir(direction) {
		
		if (direction == 'left'){
			$('#character').addClass('left');
			$('#character').css('background-position', '-32px -32px');
		}
		if (direction == 'right'){
			$('#character').addClass('right');	
			$('#character').css('background-position', '-32px -64px');
		}
		if (direction == 'back'){
			$('#character').addClass('back');
			$('#character').css('background-position', '-32px -96px');
		}
		if (direction == 'front'){
			$('#character').addClass('front');	
			$('#character').css('background-position', '-32px 0px');
		}
		
}



function npc_limits(){
	
	for (var i = 0; i < NPCS.length; i++){ 
		Entity_npc[i].Collide(guyX, guyY)
	}
}

function limits(collisionX, collisionY, direction){
	var collisiony = Math.round(collisionY);
	var collisionx = Math.ceil(collisionX);
	var collisionx2 = Math.floor(collisionX);
	var collision;
	var collision2;
		if ( direction == 'right'){
			collisionX += 1;
			collision = mapArray[collisiony][collisionX];
			if ( collision == 2 || collision == 7){
				mogelijk = false; 
			}
		}
		else if ( direction == 'left' ){
			collisionX -= 1;
			collision = mapArray[collisiony][collisionX];
			if ( collision == 2 || collision == 7){
				mogelijk = false;
			}
		}
		else if ( direction == 'back' ){
			collisiony = Math.round(collisionY - .1);
			collision = mapArray[collisiony][collisionx];
			collision2 = mapArray[collisiony][collisionx2];
			if ( collision == 2 || collision2 == 2 || collision == 7){
				mogelijk = false;
			}
		}
		else if ( direction == 'front' ){
			collisiony = Math.round(collisionY + .5);
			collision = mapArray[collisiony][collisionx];
			collision2 = mapArray[collisiony][collisionx2];
			if ( collision == 2 || collision2 == 2 || collision == 7){
				mogelijk = false;
			}
		}
		else { mogelijk = true; return collision;}
}


function anim(e) {
	var charWidth = $( '#character' ).width();
	var charHeight = $( '#character' ).height() + 2;

	if ( e.keyCode == 32 ){//INTERACT
		for (var i = 0; i < NPCS.length; i++){ 
			if(Entity_npc[i].Collide(guyX, guyY)){
				Entity_npc[i].talk();	
			}
		}
		attack();
	}
	
	if ( e.keyCode == 37 ){ //LINKS
	mogelijk = true;
	$('#character').removeClass(direction);	
	$('#textbox').removeClass('active');
	npc_animatereset();
	direction = 'left';
	dir(direction);
	limits(collisionX, collisionY, direction);
	npc_limits();
	if( guyX >= 1 && mogelijk == true){
		if ( guyX <= 100 || guyX >= 200){
			guyX -= 2;
			collisionX -= 0.0625;
			$('#character').css('left', guyX);
		}
		if ( guyX > 100 && guyX < 200){
			if ( tileX <= -2 ){
			tileX += 2;
			Entity_move();
			collisionX -= 0.0625;
			$('#tiles').css( 'left' , tileX)
			
			}
			else {
			guyX -= 2;
			collisionX -= 0.0625;
			$('#character').css('left', guyX);		
			}
			
		}

	}
		
		
	}
	if ( e.keyCode == 39 ){ //RECHTS
	mogelijk = true;
	
	$('#character').removeClass(direction);	
	$('#textbox').removeClass('active');
	npc_animatereset();
	dialog_reset();
	direction = 'right';
	dir(direction);
	limits(collisionX, collisionY, direction);	
	npc_limits();
		if( guyX <= 300 - charWidth && mogelijk == true){
		if ( guyX <= 140 || guyX >= 150){
			guyX += 2;
			collisionX += 0.0625;
			$('#character').css('left', guyX);
		}
		if ( guyX > 140 && guyX < 150){
			if ( tileX >= -340 + guyX ){
			tileX -= 2;
			Entity_move();
			collisionX += 0.0625;
			$('#tiles').css( 'left' , tileX)
			
			}
			else {
			guyX += 2;
			collisionX += 0.0625;
			$('#character').css('left', guyX);		
			}
			
		}
	
	}
	}
	if ( e.keyCode == 38 ){ //BOVEN
	mogelijk = true;
	$('#character').removeClass(direction);	
	$('#textbox').removeClass('active');
	npc_animatereset();
	dialog_reset();
	direction = 'back';
	dir(direction);
	limits(collisionX, collisionY, direction);
	npc_limits();
		if( guyY >= 2 && mogelijk == true){
			if ( guyY <= 140 || guyY >= 150){
				guyY -= 2;
				collisionY -= 0.0625;
				$('#character').css('top', guyY);
			}
			if ( guyY > 140 && guyY < 150){
				if ( tileY <  0  ){
				tileY += 2;
				Entity_move();
				collisionY -= 0.0625;
				$('#tiles').css( 'top' , tileY)
				
				}
				else {
				guyY -= 2;
				collisionY -= 0.0625;
				$('#character').css('top', guyY);		
				}
				
			}
		}	

	}
	if ( e.keyCode == 40 ){ //BENEDEN
	
	$('#character').removeClass(direction);	
	$('#textbox').removeClass('active');
	npc_animatereset();
	dialog_reset();
	mogelijk = true;
	direction = 'front';
	dir(direction);
	limits(collisionX, collisionY, direction);
	npc_limits();
		if( guyY <= 300 - charHeight && mogelijk == true){
			
		if ( guyY <= 140 || guyY >= 150){
			guyY += 2;
			collisionY += 0.0625;
			$('#character').css('top', guyY);
			
		}
		if ( guyY > 140 && guyY < 150){
			if ( tileY >= -240 + guyY ){
			tileY -= 2;
			Entity_move();
			collisionY += 0.0625;
			$('#tiles').css( 'top' , tileY)
			
			}
			else {
			guyY += 2;
			collisionY += 0.0625;
			$('#character').css('top', guyY);		
			}
			
		}
	}

	}
		$('.collision').remove();
	$('#testlog').append('<p class="collision">collisionX: '+ collisionX +' <br /> collisionY: '+ collisionY +'<br /> '+ mogelijk +' <br />guyX: '+ guyX +' <br />guyY: '+ guyY +'<br /></p>');	
}

$(document).keyup(function(){
	$('#character').removeClass(direction);	
})
document.onkeydown = anim;






// TILEMAP GENERATE	
var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');
mapArray=[
	[1,1,1,0,3,4,2,2,2,0,0,0,0,0,0,0],
	[1,1,1,0,0,0,2,2,2,0,0,0,0,0,0,0],
	[1,1,1,0,2,2,2,2,2,2,0,0,0,0,0,0],
	[1,1,1,0,0,0,0,2,2,2,0,0,0,0,0,0],
	[1,1,1,0,0,0,0,2,2,0,0,0,0,0,0,0],
	[1,1,1,0,0,0,0,0,0,0,0,2,2,2,0,0],
	[5,5,6,7,7,7,7,7,7,7,7,2,2,7,7,7],
	[1,1,1,0,0,0,0,0,0,0,0,2,2,2,0,0],
	[1,1,1,1,1,1,1,1,1,0,0,2,2,2,0,0],
	[1,1,1,1,1,1,1,1,1,0,0,2,2,2,0,0],
	[1,1,1,1,1,1,1,1,1,0,0,2,2,2,0,0],
	[0,0,0,0,0,0,1,1,1,0,0,2,2,2,0,0],
	[0,0,0,0,0,0,1,1,1,0,0,2,2,2,0,0]
];

var plot = new Image();
var grass = new Image();
var dirt = new Image();
var water = new Image();
var step = new Image();
var step_right = new Image();
var grass_step = new Image();

plot.src="ijs.png";
grass.src="grass.png";
dirt.src="dirt.png";
water.src="water.png";
step.src="step.png";
step_right.src="step_right.png";
grass_step.src="grass_step.png";

grass_step.onload, plot.onload, grass.onload, dirt.onload, water.onload, step_right.onload, step.onload = function(){

var posX = 0;
var posY = 0;
for (var i=0; i < mapArray.length; i++){
	for (var j=0; j < mapArray[i].length; j++){
		if ( mapArray[i][j] == 0 ){										//GRAS
			context.drawImage(grass, posX, posY, 32, 32);
		}
		if ( mapArray[i][j] == 1 ){										//SAND
			context.drawImage(dirt, posX, posY, 32, 32);
		}
		if ( mapArray[i][j] == 2 ){										//WATER
			context.drawImage(water, posX, posY, 32, 32);
		}
		if ( mapArray[i][j] == 5 ){										//TRAP
			context.drawImage(step, posX, posY, 32, 32);
		}
		if ( mapArray[i][j] == 6 ){										//TRAP_RECHTS
			context.drawImage(step_right, posX, posY, 32, 32);
		}
		if ( mapArray[i][j] == 7 ){
			context.drawImage(grass_step, posX, posY, 32, 32);	
		}
		if ( mapArray[i][j] == 3 ){										//IJS
			context.drawImage(plot, posX, posY, 64, 32);
			posX += 32;
		}
		if ( mapArray[i][j] == 4 ){										//LEGE RUIMTE VOOR 64PX BREDE AFBEELDINGEN
			posX -= 32;
		}
	posX += 32;
	}
	posX = 0;
	posY += 32;
	
}}
// END TILEMAP GENERATE
	$('button').click(function(){
		alert(collisionx);	
	})
	
}


$(document).ready(function(){
	$(document).load('fonts/bithigh.ttf');
	tilemapgenerate();
	npcInit();
	mobInit();
	
	
	
	
	
	
})



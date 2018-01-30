
var totalNpcs = 0;
var totalMobs = 0;
var canattack = true;
var npcs = [];
var mobs = [];
var k = 0;
var l = 0;
var ids = new Array();

function spawnMob(n) {
		for (var i = 0; i < n; i++) {
		mobs[totalMobs] = new Mob();
		totalMobs++;
		l++;
	}
}

function Mob() {
	$('#container').append('<div id="mob'+ l +'"></div>');
	
			 
	switch(l)
	{
	case 0:
	var n = new skeleton();
	$('#mob'+ l +'').addClass('skeleton');
	mobX[l] = n.mobX;
	mobY[l] = n.mobY;
	$('.skeleton').css("left", mobX[l])
			 .css("top", mobY[l])
	  break;
	case 1:
	$('#mob'+ l +'').addClass('zombie');
	$('.zombie').css("left", mobX[l])
			 .css("top", mobY[l])
	  break;
	case 2:
	$('#mob'+ k +'').addClass('cyclops');
	$('.cyclops').css("left", mobX[l])
			 .css("top", mobY[l])
	  break;
	default:
	
	}
}

function spawnNpc(n) {
	
	for (var i = 0; i < n; i++) {
		npcs[totalNpcs] = new Npc();
		totalNpcs++;
		k++
	}
		
}



function Npc() {
	$('#container').append('<div id="npc'+ k +'"></div>');
	
			 
	switch(k)
	{
	case 0:
	$('#npc'+ k +'').addClass('jenny')
					.addClass('animate');
	npcX[k] = Npcs.jenny.npcX;
	npcY[k] = Npcs.jenny.npcY;
	$('.jenny').css("left", npcX[k])
			 .css("top", npcY[k])
			 ids.push(Npcs.jenny.dialogid);
	  break;
	case 1:
	$('#npc'+ k +'').addClass('henk')
					.addClass('animate');
	npcX[k] = Npcs.henk.npcX;
	npcY[k] = Npcs.henk.npcY;
	$('.henk').css("left", npcX[k])
			 .css("top", npcY[k])
			 ids.push(Npcs.henk.dialogid);
	  break;
	case 2:
	$('#npc'+ k +'').addClass('ufrik')
					.addClass('animate');
	npcX[k] = Npcs.ufrik.npcX;
	npcY[k] = Npcs.ufrik.npcY;
	$('.ufrik').css("left", npcX[k])
			 .css("top", npcY[k])
			 ids.push(Npcs.ufrik.dialogid);
	  break;
	default:
	
	}
}





var npcX = [];
var npcY = [];
var mobX = [];
var mobY = [];





var guyX = 0;
var guyY = 0;
var direction = 'front';

var mogelijk = true;

function tilemapgenerate(){
var guy = document.getElementById('character');
var container = document.getElementById('container');

var charWidth = $( '#character' ).width();
var charHeight = $( '#character' ).height();

var tileX = 0;
var tileY = 0;

var collisionX = 0;
var collisionY = 0;




	
function attack() {
	if ( canattack == true ) {
	var direction_attack = 'attack' + direction;
	$('#attack').removeClass(direction_attack);
	canattack = false;
	if ( direction == 'left' ){
		$('#attack').addClass(direction_attack);
		hitcheck();
		$('.attackleft').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
  		function(e) {
   		$('#attack').removeClass(direction_attack);
  		 canattack = true;
 		});	
	}
	else if ( direction == 'right' ){
		$('#attack').addClass(direction_attack);
		hitcheck();
		$('.attackright').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
  		function(e) {
   		$('#attack').removeClass(direction_attack);
  		 canattack = true;
 		});	
	}
	else if ( direction == 'front' ){
		$('#attack').addClass(direction_attack);
		hitcheck();
		$('.attackfront').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
  		function(e) {
   		$('#attack').removeClass(direction_attack);
  		 canattack = true;
 		});	
		
	}
	else if ( direction == 'back' ){
		$('#attack').addClass(direction_attack);
		hitcheck();
		$('.attackback').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
  		function(e) {
   		$('#attack').removeClass(direction_attack);
  		 canattack = true;
 		});	
	}
	}
		
}
	
function hitcheck() {
	for ( var i = 0; i < mobs.length ; i++) {
		
		if ( guyX + 22 <= mobX[i] && guyX + 34 >= mobX[i] && guyY + 12 >= mobY[i] && guyY - 12 <= mobY[i] && direction == 'right' ){
		damage(i);
		$('#mob'+i).stop().animate({
			opacity: 0.5
		}, 100, function(){
			$(this).css('opacity', '1');
		})
		}
		if ( guyX - 24 >= mobX[i] && guyX - 34 <= mobX[i] && guyY + 12 >= mobY[i] && guyY - 12 <= mobY[i] && direction == 'left' ){
			damage(i);
			$('#mob'+i).stop().animate({
			opacity: 0.5
		}, 100, function(){
			$(this).css('opacity', '1');
		})
		}
		if ( guyY + 14 == mobY[i] && guyX + 24 >= mobX[i] && guyX - 24 <= mobX[i] && direction == 'front' ){
			damage(i);
			$('#mob'+i).stop().animate({
			opacity: 0.5
		}, 10, function(){
			$(this).css('opacity', '1');
		})
		}
		if ( guyY - 14 == mobY[i] && guyX + 24 >= mobX[i] && guyX - 24 <= mobX[i] && direction == 'back' ){
			damage(i);
			$('#mob'+i).stop().animate({
			opacity: 0.5
		}, 10, function(){
			$(this).css('opacity', '1');
		})
		}
	}
}

function damage(i){

	if ( i == 0 ) {
		// skeleton
		if ( s.health >= 0 ){
		s.health -= Math.floor((Math.random() * 10)*p.attackpower);	
		$('#testlog').append('<p>Health: '+ s.health +'</p>');
		}
		else {
			health = 0;
			s.alive = false;
		}
		canattack = true;
	}
	else if ( i == 1 ){
		// zombie
	}
	else if ( i == 2 ){
		// cyclops	
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

function interact(){
	for (var i = 0; i < npcs.length; i++){
	
	if ( guyX + 24 <= npcX[i] && guyX + 26 >= npcX[i] && guyY - 4 <= npcY[i] && guyY + 4 >= npcY[i] && direction == 'right'){
		npc_turntoplayer(i, direction);
		dialog_call(ids[i]);
		
	}
	if ( guyX - 26 <= npcX[i] && guyX - 24 >= npcX[i] && guyY - 4 <= npcY[i] && guyY + 4 >= npcY[i] && direction == 'left'){
		npc_turntoplayer(i, direction);
		dialog_call(ids[i]);
	}
	if ( guyY + 14 <= npcY[i] && guyY + 20 >= npcY[i] && guyX + 10 >= npcX[i] && guyX - 10 <= npcX[i] && direction == 'front'){
		npc_turntoplayer(i, direction);
		dialog_call(ids[i]);
	}
	if ( guyY - 16 <= npcY[i] && guyY - 14 >= npcY[i] && guyX + 10 >= npcX[i] && guyX - 10 <= npcX[i] && direction == 'back'){
		npc_turntoplayer(i, direction);
		dialog_call(ids[i]);
	}
	}
}


function npc_limits(){
	
	for (var i = 0; i < NPCS.length; i++){ 
		Entity_npc[i].Collide(guyX, guyY)
	}
	//VOOR OF ACHTER CHECK
	for (var i = 0; i < npcs.length; i++){
	if ( guyY + 14 <= npcY[i] ){
			$('#npc'+ i +'').css('z-index' , '5');
		}
	else if ( guyY >= npcY[i]){
			$('#npc'+ i +'').css('z-index' , '1');
		}
	
		
	//EINDE VOOR OF ACHTER CHECK
	if ( guyX + 24 == npcX[i] && guyY + 12 >= npcY[i] && guyY - 12 <= npcY[i] && direction == 'right' ){
		mogelijk = false;
	}
	if ( guyX - 24 == npcX[i] && guyY + 12 >= npcY[i] && guyY - 12 <= npcY[i] && direction == 'left' ){
		mogelijk = false;
	}
	if ( guyY + 14 == npcY[i] && guyX + 24 >= npcX[i] && guyX - 24 <= npcX[i] && direction == 'front' ){
		mogelijk = false;
	}
	if ( guyY - 14 == npcY[i] && guyX + 24 >= npcX[i] && guyX - 24 <= npcX[i] && direction == 'back' ){
		mogelijk = false;
	}
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
		interact();
		attack();
	}
	
	if ( e.keyCode == 37 ){ //LINKS
	mogelijk = true;
	
	$('#character').removeClass(direction);	
	$('#textbox').removeClass('active');
	npc_animatereset();
	dialog_reset();
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
			if ( tileX <= 0 ){
			tileX += 2;
			for (var i = 0; i < NPCS.length; i++){
			mobX[i] += 2;
			npcX[i] += 2;
			Entity_npc[i].x += 2;
			Entity_npc[i].drawNpc();
			$('#mob'+ i +'').css( 'left' , mobX[i])
			$('#npc'+ i +'').css( 'left' , npcX[i])
			}
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
			for (var i = 0; i < NPCS.length; i++){
			mobX[i] -= 2;
			npcX[i] -= 2;
			Entity_npc[i].x -= 2;
			Entity_npc[i].drawNpc();
			$('#mob'+ i +'').css( 'left' , mobX[i])
			$('#npc'+ i +'').css( 'left' , npcX[i])
			}
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
				for (var i = 0; i < NPCS.length; i++){
				mobY[i] += 2;
				npcY[i] += 2;
				Entity_npc[i].y += 2;
				Entity_npc[i].drawNpc();
				$('#mob'+ i +'').css( 'top' , mobY[i])
				$('#npc'+ i +'').css( 'top' , npcY[i])
				}
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
			for (var i = 0; i < NPCS.length; i++){
			mobY[i] -= 2;
			npcY[i] -= 2;
			Entity_npc[i].y -= 2;
			Entity_npc[i].drawNpc();
			$('#mob'+ i +'').css( 'top' , mobY[i])
			$('#npc'+ i +'').css( 'top' , npcY[i])
			}
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
	$('#testlog').append('<p class="collision">collisionX: '+ collisionX +' <br /> collisionY: '+ collisionY +'<br /> '+ mogelijk +' <br />guyX: '+ guyX +' <br />guyY: '+ guyY +'<br />npcX: '+ npcX +'</p>');	
}

$(document).keyup(function(){
	$('#character').removeClass(direction);	
})
document.onkeydown = anim;






// TILEMAP GENERATE	
var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');
var mapArray=[
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
	tilemapgenerate();
spawnNpc(3);
spawnMob(1);

npcInit();
	
	
	
	
	
	
})



var money = 1000;                                       //Zet de hoeveelheid geld op 100
var time = -4;                                          //Zet de tijd op -4, deze wordt later gebruikt voor de grafiek
var looptijd;                                      //Deze variabelen houden bij hoeveel aandelen je van elke hebt
var duration;											//Formule in seconden = 2 * het aantal seconden dat het moet duren.
var oudnieuws = 0;
var seconde = 0;
var tijd=0;
var mins = 0;
var secs = 0;
var tenths = 0;
var derp = mins + ' : ' + secs + ' : ' + tenths;
var nieuwsUpgrade = 0;
var schaalUpgrade = 0;
var naamUpgrade = 0;
var koersUpgrade = 0;
var avatarUpgrade = 0;
var alertUpgrade = 0;
var nieuwscolor = "black"
var nieuwsdisplay = 0;
var alertUpgrade = 0;
var start = {                                          
        1:1,                                              
        2:1,
        3:1,
        4:1,
        5:1,
        6:1,
        7:1,
        8:1,
        9:1,
        10:1,
        11:1,
        12:1,
        13:1,
        14:1,
        15:1,
        16:1
}
var startprijs = {                                          //Deze objects bepalen alle waardes van de aandelen
        1:700,                                                  //price1 en price2 zijn verschillende waardes, dit komt later terug in de grafiek
        2:150,
        3:100,
        4:400,
        5:300,
        6:275,
        7:100,
        8:900,
        9:160,
        10:340,
        11:675,
        12:100,
        13:500,
        14:300,
        15:480,
        16:120
}
var daalkans = {
        1:50,                                                   //price1 en price2 zijn verschillende waardes, dit komt later terug in de grafiek
        2:50,
        3:50,
        4:50,
        5:50,
        6:50,
        7:50,
        8:50,
        9:50,
        10:50,
        11:50,
        12:50,
        13:50,
        14:50,
        15:50,
        16:50
 
}
var price1 = {                                          //Deze objects bepalen alle waardes van de aandelen
        1:599,                                                  //price1 en price2 zijn verschillende waardes, dit komt later terug in de grafiek
        2:30,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        10:0,
        11:0,
        12:0,
        13:0,
        14:0,
        15:0,
        16:0
}
var price2 = {
        1:599,
        2:100,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        10:0,
        11:0,
        12:0,
        13:0,
        14:0,
        15:0,
        16:0
}
 
var quantity = {                                        //Deze variabelen houden bij hoeveel aandelen je van elke hebt
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        10:0,
        11:0,
        12:0,
        13:0,
        14:0,
        15:0,
        16:0
}
 
var average = {                                         //Deze variabelen houden bij wat de gemiddelde prijs is waar je de aandelen voor hebt gekocht
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        10:0,
        11:0,
        12:0,
        13:0,
        14:0,
        15:0,
        16:0
}
 
var cost = {                                            //Deze variabelen houden bij hoeveel geld je aan dat aanddeel hebt uitgegeven
        1:599,                                                  //Wordt later gebruikt om de gemiddelde prijs uit te rekenen
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        10:0,
        11:0,
        12:0,
        13:0,
        14:0,
        15:0,
        16:0
}
       
var profit = {                                          //Deze variabelen houden bij hoeveel je hebt verdiend of verloren met het betreffende aandeel
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        10:0,
        11:0,
        12:0,
        13:0,
        14:0,
        15:0,
        16:0
}
 
var hoogte = {                                          //Deze variabelen houden bij hoeveel je hebt verdiend of verloren met het betreffende aandeel
        1:180,
        2:180,
        3:180,
        4:180,
        5:180,
        6:180,
        7:180,
        8:180,
        9:180,
        10:180,
        11:180,
        12:180,
        13:180,
        14:180,
        15:180,
        16:180
}
 
var totalprofit = profit[1] + profit [2] + profit[3] + profit [4] + profit[5] + profit [6] + profit[7] + profit [8] + profit[9] + profit [10] + profit[11] + profit [12] + profit[13] + profit [14] + profit[15] + profit [16];
var totalaandelen = quantity[1] + quantity[2] + quantity[3] + quantity[4] + quantity[5] + quantity[6] + quantity[7] + quantity[8] + quantity[9] + quantity[10] + quantity[11] + quantity[12] + quantity[13] + quantity[14] + quantity[15] + quantity[16];
var stijgen = 1;
var tries = 0
var odds = 0
 



setInterval(function() {          
             //Dit is een interval, die loop om de zo veel tijd en voert een bepaalde functie uit
                        $(".AText").remove();                                           //Dit interval loopt op ieder moment dat de site open staat
						$(".alertKoers").remove();
for (var i = 1; i<17; i++) {                    //Deze loop zorgt er voor dat de bewerkingen voor elk aandeel worden uitgevoerd
    hoogte[i] = Math.floor(1+price2[i]/150)*150;
 
var c=document.getElementById("canvas"+[i]);            //Deze 2 vergelijkingen zorgen ervoor dat je het canvas object pakt
var ctx=c.getContext("2d");                                                     //Dit wordt uitgevoerd voor alle canvassen die in de loop zitten
 
 
 
price1[i]=price2[i];                                                            //De oude prijs van het aandeel wordt gelijkgezet aan de huidige prijs
 
 
 
ctx.moveTo(time,hoogte[i]-price2[i]);          
 
 
var chance = Math.floor(Math.random()*100);             //Deze vergelijking kiest een willekeurig nummer tussen de 0 en de 100


if(koersUpgrade === 1){
		if(chance > daalkans[i]+20 && chance < daalkans[i]+45) {       
		// Minimale stijging         
										 
		price2[i]+=chance/10-5
		$("<span style=color:green class=AText id=getal> "+price2[i].toFixed(2)+" </span>").appendTo("#aandeel"+i);                                                                                                     //De nieuwe prijs wordt veranderd door het willekeurige getal te vergelijken met de huidige prijs
		}
		else if (chance > daalkans[i]+46) {
		// Grote stijging
		price2[i]+=chance/9     ;
		$("<span style=color:green class=AText id=getal> "+price2[i].toFixed(2)+" </span>").appendTo("#aandeel"+i);    
		}
		else if (chance < daalkans[i]-20 && chance > daalkans[i]-44) {
		// Minimale daling
		price2[i]-=chance/10+2;
		$("<span style=color:red class=AText id=getal> "+price2[i].toFixed(2)+" </span>").appendTo("#aandeel"+i);
		}
		else if (chance < daalkans[i]-45) {
		// Grote daling
		if (chance <= 5) {
		price2[i]-=chance*3;
		}
		else {
		price2[i]-=chance/3;
		}
		$("<span style=color:red class=AText id=getal> "+price2[i].toFixed(2)+" </span>").appendTo("#aandeel"+i);
		}
		else {
		// Geen stijging
		$("<span stye=color:black class=AText id=getal> "+price2[i].toFixed(2)+" </span>").appendTo("#aandeel"+i);
		}
		
		}
		
		else {
		if(chance > daalkans[i]+20 && chance < daalkans[i]+45) {       
		// Minimale stijging         
										 
		price2[i]+=chance/10-5
		$("<span style=color:black class=AText id=getal> "+price2[i].toFixed(2)+" </span>").appendTo("#aandeel"+i);                                                                                                     //De nieuwe prijs wordt veranderd door het willekeurige getal te vergelijken met de huidige prijs
		}
		else if (chance > daalkans[i]+46) {
		// Grote stijging
		price2[i]+=chance/9     ;
		$("<span style=color:black class=AText id=getal> "+price2[i].toFixed(2)+" </span>").appendTo("#aandeel"+i);    
		}
		else if (chance < daalkans[i]-20 && chance > daalkans[i]-44) {
		// Minimale daling
		price2[i]-=chance/10+2;
		$("<span style=color:black class=AText id=getal> "+price2[i].toFixed(2)+" </span>").appendTo("#aandeel"+i);
		}
		else if (chance < daalkans[i]-45) {
		// Grote daling
		if (chance <= 5) {
		price2[i]-=chance*3;
		}
		else {
		price2[i]-=chance/3;
		}
		$("<span style=color:black class=AText id=getal> "+price2[i].toFixed(2)+" </span>").appendTo("#aandeel"+i);
		}
		else {
		// Geen stijging
		$("<span stye=color:black class=AText id=getal> "+price2[i].toFixed(2)+" </span>").appendTo("#aandeel"+i);
		}
		}
		if (alertUpgrade === 1){
		if( price2[i] >= average[i] && average[i]!=0){
		
		$("<img class=alertKoers src=alert-icon.png width=10px height=10px style=float:right;/>").appendTo("#aandeel"+i);
		}
		else{}
		}
		
		
		if (schaalUpgrade === 1) {
		
		if (price2[i] > 150 && price2[i] < 300){
		if (start[i] === 1) {
			$("#canvas"+i).css("margin-left", "-84px");
			$("<img class=feestbeest id=scale src=scales/scale150-300.png height=202px />").appendTo("#scalel"+i);
			start[i] = 0;
		}
		else {
		if (price1[i] < 150 && price2[i] >150 || price1[i] >300 && price2[i] <300){
			$("#scalel"+i).children().remove();  
		ctx.beginPath();
		ctx.clearRect(0,0,800,150);
		$("#canvas"+i).css("margin-left", "-84px");
		$("<img class=feestbeest id=scale src=scales/scale150-300.png height=202px />").appendTo("#scalel"+i);
		}}}
			  
		else if (price2[i] > 0 && price2[i] < 150){
		if (start[i] === 1) {
			$("#canvas"+i).css("margin-left", "-84px");
			$("<img class=feestbeest id=scale src=scales/scale0-150.png height=202px />").appendTo("#scalel"+i);
			start[i] = 0;
		}
		else {
		if (price1[i] < 0 && price2[i] >0 || price1[i] >150 && price2[i] <150){
			$("#scalel"+i).children().remove();  
		ctx.beginPath();
		ctx.clearRect(0,0,800,150);
		$("#canvas"+i).css("margin-left", "-84px");
		$("<img class=feestbeest id=scale src=scales/scale0-150.png height=202px />").appendTo("#scalel"+i);
		}}}
		else if (price2[i] > 300 && price2[i] < 450){
		if (start[i] === 1) {
			$("#canvas"+i).css("margin-left", "-84px");
			$("<img class=feestbeest id=scale src=scales/scale300-450.png height=202px />").appendTo("#scalel"+i);
			start[i] = 0;
		}
		else {
		if (price1[i] < 300 && price2[i] >300 || price1[i] >450 && price2[i] <450){
			$("#scalel"+i).children().remove();  
		ctx.beginPath();
		ctx.clearRect(0,0,800,150);
		$("#canvas"+i).css("margin-left", "-84px");
		$("<img class=feestbeest id=scale src=scales/scale300-450.png height=202px />").appendTo("#scalel"+i);
		}}}
		else if (price2[i] > 450 && price2[i] < 600){
		if (start[i] === 1) {
			$("#canvas"+i).css("margin-left", "-84px");
			$("<img class=feestbeest id=scale src=scales/scale450-600.png height=202px />").appendTo("#scalel"+i);
			start[i] = 0;
		}
		else {
		if (price1[i] < 450 && price2[i] >450 || price1[i] >600 && price2[i] <600){
			$("#scalel"+i).children().remove();  
		ctx.beginPath();
		ctx.clearRect(0,0,800,150);
		$("#canvas"+i).css("margin-left", "-84px");
		$("<img class=feestbeest id=scale src=scales/scale450-600.png height=202px />").appendTo("#scalel"+i);
		}}}
		else if (price2[i] > 600 && price2[i] < 750){
		if (start[i] === 1) {
			$("#canvas"+i).css("margin-left", "-84px");
			$("<img class=feestbeest id=scale src=scales/scale600-750.png height=202px />").appendTo("#scalel"+i);
			start[i] = 0;
		}
		else {
		if (price1[i] < 600 && price2[i] >600 || price1[i] >750 && price2[i] <750){
			$("#scalel"+i).children().remove();  
		ctx.beginPath();
		ctx.clearRect(0,0,800,150);
		$("#canvas"+i).css("margin-left", "-84px");
		$("<img class=feestbeest id=scale src=scales/scale600-750.png height=202px />").appendTo("#scalel"+i);
		}}}
		else if (price2[i] > 750 && price2[i] < 900){
		if (start[i] === 1) {
			$("#canvas"+i).css("margin-left", "-84px");
			$("<img class=feestbeest id=scale src=scales/scale750-900.png height=202px />").appendTo("#scalel"+i);
			start[i] = 0;
		}
		else {
		if (price1[i] < 750 && price2[i] >750 || price1[i] >900 && price2[i] <900){
			$("#scalel"+i).children().remove();  
		ctx.beginPath();
		ctx.clearRect(0,0,800,150);
		$("#canvas"+i).css("margin-left", "-84px");
		$("<img class=feestbeest id=scale src=scales/scale750-900.png height=202px />").appendTo("#scalel"+i);
		}}}
		else if (price2[i] > 900 && price2[i] < 1050){
		if (start[i] === 1) {
			$("#canvas"+i).css("margin-left", "-79px");
			$("<img class=feestbeest id=scale apart src=scales/scale900-1050.png height=202px  />").appendTo("#scalel"+i);
			start[i] = 0;
		}
		else {
		if (price1[i] < 900 && price2[i] >900 || price1[i] >1050 && price2[i] <1050){
			$("#scalel"+i).children().remove();  
		ctx.beginPath();
		ctx.clearRect(0,0,800,150);
		$("#canvas"+i).css("margin-left", "-79px");
		$("<img class=feestbeest id=scale apart src=scales/scale900-1050.png height=202px  />").appendTo("#scalel"+i);
		}}}
		else if (price2[i] > 1050 && price2[i] < 1200){
		if (start[i] === 1) {
			$("#canvas"+i).css("margin-left", "-79px");
			$("<img class=feestbeest id=scale apart src=scales/scale1050-1200.png height=202px  />").appendTo("#scalel"+i);
			start[i] = 0;
		}
		else {
		if (price1[i] < 1050 && price2[i] >1050 || price1[i] >1200 && price2[i] <1200){
			$("#scalel"+i).children().remove();  
		ctx.beginPath();
		ctx.clearRect(0,0,800,150);
		$("#canvas"+i).css("margin-left", "-79px");
		$("<img class=feestbeest id=scale apart src=scales/scale1050-1200.png height=202px  />").appendTo("#scalel"+i);
		}}}
		else if (price2[i] > 1200 && price2[i] < 1350){
		if (start[i] === 1) {
			$("#canvas"+i).css("margin-left", "-79px");
			$("<img class=feestbeest id=scale apart src=scales/scale1200-1350.png height=202px  />").appendTo("#scalel"+i);
			start[i] = 0;
		}
		else {
		if (price1[i] < 1200 && price2[i] >1200 || price1[i] >1350 && price2[i] <1350){
			$("#scalel"+i).children().remove();  
		ctx.beginPath();
		ctx.clearRect(0,0,800,150);
		$("#canvas"+i).css("margin-left", "-79px");
		$("<img class=feestbeest id=scale apart src=scales/scale1200-1350.png height=202px  />").appendTo("#scalel"+i);
		}}}
		else if (price2[i] > 1350 && price2[i] < 1500){
		if (start[i] === 1) {
			$("#canvas"+i).css("margin-left", "-79px");
			$("<img class=feestbeest id=scale apart src=scales/scale1350-1500.png height=202px  />").appendTo("#scalel"+i);
			start[i] = 0;
		}
		else {
		if (price1[i] < 1350 && price2[i] >1350 || price1[i] >1500 && price2[i] <1500){
			$("#scalel"+i).children().remove();  
		ctx.beginPath();
		ctx.clearRect(0,0,800,150);
		$("#canvas"+i).css("margin-left", "-79px");
		$("<img class=feestbeest id=scale apart src=scales/scale1350-1500.png height=202px  />").appendTo("#scalel"+i);
		}
		}
		}
		else {}
}

else {
	if (price2[i] > 150 && price2[i] < 300){

if (price1[i] < 150 && price2[i] >150 || price1[i] >300 && price2[i] <300){

ctx.beginPath();
ctx.clearRect(0,0,800,150);

}}
      
else if (price2[i] > 0 && price2[i] < 150){

if (price1[i] < 0 && price2[i] >0 || price1[i] >150 && price2[i] <150){

ctx.beginPath();
ctx.clearRect(0,0,800,150);

}}
else if (price2[i] > 300 && price2[i] < 450){

if (price1[i] < 300 && price2[i] >300 || price1[i] >450 && price2[i] <450){
ctx.beginPath();
ctx.clearRect(0,0,800,150);

}}
else if (price2[i] > 450 && price2[i] < 600){

if (price1[i] < 450 && price2[i] >450 || price1[i] >600 && price2[i] <600){
ctx.beginPath();
ctx.clearRect(0,0,800,150);

}}
else if (price2[i] > 600 && price2[i] < 750){

if (price1[i] < 600 && price2[i] >600 || price1[i] >750 && price2[i] <750){
 
ctx.beginPath();
ctx.clearRect(0,0,800,150);

}}
else if (price2[i] > 750 && price2[i] < 900){

if (price1[i] < 750 && price2[i] >750 || price1[i] >900 && price2[i] <900){

ctx.beginPath();
ctx.clearRect(0,0,800,150);

}}
else if (price2[i] > 900 && price2[i] < 1050){

if (price1[i] < 900 && price2[i] >900 || price1[i] >1050 && price2[i] <1050){

ctx.beginPath();
ctx.clearRect(0,0,800,150);

}}
else if (price2[i] > 1050 && price2[i] < 1200){

if (price1[i] < 1050 && price2[i] >1050 || price1[i] >1200 && price2[i] <1200){

ctx.beginPath();
ctx.clearRect(0,0,800,150);

}}
else if (price2[i] > 1200 && price2[i] < 1350){

if (price1[i] < 1200 && price2[i] >1200 || price1[i] >1350 && price2[i] <1350){
  
ctx.beginPath();
ctx.clearRect(0,0,800,150);

}}
else if (price2[i] > 1350 && price2[i] < 1500){

if (price1[i] < 1350 && price2[i] >1350 || price1[i] >1500 && price2[i] <1500){
 
ctx.beginPath();
ctx.clearRect(0,0,800,150);

}}
}
// BALANCEREN VAN DE PRIJZEN

if (price2[i] <= 20) {
	daalkans[i] -= 20;
}
else {
	daalkans[i] = 50;
}
if (price2[i] >= startprijs[i] * 1.1 && price2[i] < startprijs[i] * 1.2) {
	daalkans[i] += 5;
}
else if (price2[i] >= startprijs[i] * 1.2 && price2[i] < startprijs[i] * 1.3) {
	daalkans[i] += 7.5;
}
else if (price2[i] >= startprijs[i] * 1.3) {
	daalkans[i] += 10;
}
else if (price2[i] <= startprijs[i] * 0.9 && price2[i] > startprijs[i] * 0.8) {
	daalkans[i] -= 5;
}
else if (price2[i] <= startprijs[i] * 0.8 && price2[i] > startprijs[i] * 0.7) {
	daalkans[i] -= 7.5;
}
else if (price2[i] <= startprijs[i] * 0.7) {
	daalkans[i] -= 10;
}
                                        //Het canvas gaat naar het punt aangegeven in de vergelijking

 
if (time === 304){                                                                     
for (var i = 1; i<17; i++){
var c=document.getElementById("canvas"+i);                      //Als de tijd 304 is, en het einde van het canvas is bereikt
var ctx=c.getContext("2d");
                                                     //Wist deze statement de grafieken op alle canvassen, en begint opnieuw met tekenen
ctx.beginPath();
ctx.clearRect(0,0,800,180);}


    time = -4;                                                                          //Dit zet de tijd terug op -4, zodat de eerste lijn op t=0 wordt getekend
}

if (looptijd+duration === time) {
$(".nav_nieuws").remove();
$("#alert").hide();
$("<span class=nav_nieuws>Op dit moment is er geen nieuws.</span>").appendTo("#nieuws_update");
oudnieuws = 0;
odds = 0;
tries = 0;
}
else {} 

 
if (oudnieuws === 0 && i === 1){
nieuwsCheck();
}
time+=4;

ctx.lineTo(time,hoogte[i]-price2[i]);          
        //Nu wordt er op het canvas een lijn getekend van het vorige gekozen punt (x = time, y = oude prijs)
ctx.stroke();                                                                           //Naar het nieuwe punt (x = time+4, y = nieuwe prijs)
update();                                                                                       //Dit roept de later uitgelegde update functie op
   
if ( i < 16) {                                                                         
time-=4;                                                                                        //Dit zorgt er voor dat als de loop niet voor de laatste keer doorlopen wordt, de tijd een stapje
}                                                                                                       //Terug gaat zodat de grafiek ook op het volgende canvas goed wordt getekend
  }

},2000);                                                                                                //Deze variabele bepaald om de hoeveel miliseconde de interval wordt uitgevoerd
 
var update = function(){                        
	                                //Dit is de update functie, het doel ervan is om alle aandeel details up te daten
$(".Text").remove();                                                            //De functie begint met het wissen van alle text die de aandelen betreft
var elektronicaTotal = quantity[1] + quantity[2] + quantity[3] + quantity[4];
var sportTotal = quantity[5] + quantity[6] + quantity[7] + quantity[8];
var horecaTotal = quantity[9] + quantity[10] + quantity[11] + quantity[12];
var retailTotal = quantity[13] + quantity[14] + quantity[15] + quantity[16];

$("<span class=Text> Elektronica: "+elektronicaTotal+"</span>").appendTo("#elektronica");
$("<span class=Text> Pear: "+quantity[1]+"</span>").appendTo("#pear");
$("<span class=Text> Follops: "+quantity[2]+"</span>").appendTo("#follops");
$("<span class=Text> Swamson: "+quantity[3]+"</span>").appendTo("#swamson");
$("<span class=Text> Huhawaii: "+quantity[4]+"</span>").appendTo("#huhawaii");

$("<span class=Text> Sport: "+sportTotal+"</span>").appendTo("#sport");
$("<span class=Text> Nice: "+quantity[5]+"</span>").appendTo("#nice");
$("<span class=Text> Adidos: "+quantity[6]+"</span>").appendTo("#adidos");
$("<span class=Text> Slowgold: "+quantity[7]+"</span>").appendTo("#slowgold");
$("<span class=Text> Otter: "+quantity[8]+"</span>").appendTo("#otter");

$("<span class=Text> Horeca: "+horecaTotal+"</span>").appendTo("#horeca");
$("<span class=Text> Tante Beps: "+quantity[9]+"</span>").appendTo("#tantebeps");
$("<span class=Text> V.D Havik: "+quantity[10]+"</span>").appendTo("#voordenhavik");
$("<span class=Text> AFT: "+quantity[11]+"</span>").appendTo("#aft");
$("<span class=Text> Neeplus: "+quantity[12]+"</span>").appendTo("#neeplus");

$("<span class=Text> Retail: "+retailTotal+"</span>").appendTo("#retail");
$("<span class=Text> K&M: "+quantity[13]+"</span>").appendTo("#kenm");
$("<span class=Text> Landvrouw: "+quantity[14]+"</span>").appendTo("#landvrouw");
$("<span class=Text> Hotdog: "+quantity[15]+"</span>").appendTo("#hotdog");
$("<span class=Text> Ans&#178;: "+quantity[16]+"</span>").appendTo("#ans");
 
 
$("<span class=Text> "+money.toFixed(2)+"</span>").appendTo("span#geld");               //Deze Jquery functie zorgt ervoor dat het geld wat de speler heeft wordt neergezet op de daarvoor in de html gereserveerde plaats
for (var i = 1; i<17; i++) {                                                    //Deze for loop zorgt ervoor dat de update voor elk aandeel wordt doorlopen

if(quantity[i] === 0) {                                                         //Als je geen aandelen hebt, moet het programma door 0 delen om de gemiddelde kosten per aandeel
quantity[i]++;                                                                          //Te berekeken, deze functie zorgt ervoor dat het programma door 1 deelt door het aantal aandelen
average[i] = cost[i]/quantity[i];                                       // 1 groter te maken en nadat de functie is uitgevoerd weer 1 kleiner te maken
quantity[i]--;
}
 
else {                                                                                          //Als je wel aandelen hebt zorgt
average[i] = cost[i]/quantity[i];                                       //Berekent deze functie de gemiddelde prijs door de totale kosten te delen door het aantal aandelen
}
totalprofit = profit[1] + profit [2] + profit[3] + profit [4] + profit[5] + profit [6] + profit[7] + profit [8] + profit[9] + profit [10] + profit[11] + profit [12] + profit[13] + profit [14] + profit[15] + profit [16];
totalaandelen = quantity[1] + quantity[2] + quantity[3] + quantity[4] + quantity[5] + quantity[6] + quantity[7] + quantity[8] + quantity[9] + quantity[10] + quantity[11] + quantity[12] + quantity[13] + quantity[14] + quantity[15] + quantity[16];
 
                                                                                                                                                                                //Deze Jquery vergelijking plaats text met informatie over
$("<p class=Text> "+money.toFixed(2)+" </p>").appendTo("#aandeeltext"+i);
$("<p class=Text> "+price2[i].toFixed(2)+" </p>").appendTo("#aandeeltext"+i);                                           //Het aandeel op de plek die daarvoor beschikbaar is gesteld
$("<p class=Text> "+quantity[i]+" </p>").appendTo("#aandeeltext"+i);                            //In de HTML
$("<p class=Text> "+average[i].toFixed(2)+" </p>").appendTo("#aandeeltext"+i); 
$("<p class=Text> "+profit[i].toFixed(2)+" </p>").appendTo("#aandeeltext"+i);

 
 
 
 
save();                                                                                                                                                                 //Dit roept de later aangegeven save functie op
                                                                                                                                                                                //Eindigt de for loop
  }                                                                    
$("<span class=Text> "+totalaandelen+"</span>").appendTo("span#t_aandelen");  
  if (totalprofit >= 0)  {
$("<span class=Text>Behaalde winst: "+totalprofit.toFixed(2)+"</span>").appendTo("span#b_winst");
}
 
else {
$("<span class=Text>Behaald verlies: "+totalprofit.toFixed(2)+"</span>").appendTo("span#b_winst");
}
if (totalprofit >= 0)    {
$("<span class=Text>Winst:</span>").appendTo("span#b_winstt");
}
 
else {
$("<span class=Text>Verlies:</span>").appendTo("span#b_winstt");
}                                                                                                                                                                       //Je winst hebt gemaakt
 
};                                                                                                                                                                              //Eindigt de Update functie
 
 
var save = function(){                                                                                                                  //Deze functie wordt gebruikt om de belangrijke variabelen op te slaan
        localStorage.setItem("money",money);
localStorage.setItem("nieuwsUpgrade",nieuwsUpgrade);		
localStorage.setItem("schaalUpgrade",schaalUpgrade);		
localStorage.setItem("naamUpgrade",naamUpgrade);		
localStorage.setItem("koersUpgrade",koersUpgrade);	
localStorage.setItem("avatarUpgrade",avatarUpgrade);
localStorage.setItem("alertUpgrade",alertUpgrade);		
for (var i = 1; i<17; i++){
 
localStorage.setItem("price2["+i+"]",price2[i]);                                                                                        //Deze commands zorgen ervoor dat er op de computer een
localStorage.setItem("quantity["+i+"]",quantity[i]);                                                                            //Variabele wordt aangemaakt met dezelfde naam en waarde
localStorage.setItem("cost["+i+"]", cost[i]);                                                                                   //Als de variabele in het bestand
localStorage.setItem("profit["+i+"]", profit[i]);
 
}
};
 
var load = function(){
money = Number(localStorage.getItem("money"));
nieuwsUpgrade = Number(localStorage.getItem("nieuwsUpgrade"));
schaalUpgrade = Number(localStorage.getItem("schaalUpgrade"));
naamUpgrade = Number(localStorage.getItem("naamUpgrade"));
koersUpgrade = Number(localStorage.getItem("koersUpgrade"));
avatarUpgrade = Number(localStorage.getItem("avatarUpgrade"));
alertUpgrade = Number(localStorage.getItem("alertUpgrade"));
for (var i = 1; i<17; i++) {                                                                                                                                    //Deze functie heeft als doel de variabelen die zijn opgeslagen
                                                                                        //Met de save functie door te geven aan de variabelen van het script
price2[i] = Number(localStorage.getItem("price2["+i+"]"));                                                                     
quantity[i] = Number(localStorage.getItem("quantity["+i+"]"));                                                          //Localstorage slaat alle variabelen op als een string
cost[i] = Number(localStorage.getItem("cost["+i+"]"));                                                          //Een string is text, geen nummer
profit[i] = Number(localStorage.getItem("profit["+i+"]"));                                                                      //De Number() vergelijking zorgt ervoor dat tekst wordt omgezet
}
};
 
$(function() {
    $( "#accordion" ).accordion();                                                                                                              //Deze Jquery functie laat het bestand weten dat de div met
});                                                                                                                                                                             //Het ID Accordion een accordion is
 

 setInterval(function() {
	 tijd++;
	 seconde++;
	 mins = Math.floor(tijd/60/10);
	 secs = Math.floor(seconde/10);
	 if (secs === 60) {
		secs = 0;
		seconde = 0; 
	 }
	 tenths = tijd % 10;
	 derp = mins + ' : ' + secs + ' : ' + tenths;
 }, 100);

 
  var consoleText = ["","","","",""];                                                                                                   //Deze array zorgt ervoor dat de console weet wat hij moet neerzetten 

  var consoleUpdate = function(text) {                                                                                                  //Deze functie update de console, en neemt text als input
var number = consoleText.length                                                                                                                 //De lengte van de console wordt berekend

consoleText.push(text);                                                                                                                                 //De text die je gedisplayed wilt hebben wordt toegevoegd aan de array        `
                                                                                                         //Alle oude console text wordt weggehaald
if (nieuwscolor === "green" && nieuwsdisplay === 1){
$("<span class=cText style=color:green >["+derp+"] "+consoleText[number]+"<br></span>").appendTo("#console_log");

nieuwsdisplay = 0;	
}
else {

$("<span class=cText style=color:black >["+derp+"] "+consoleText[number]+"<br></span>").appendTo("#console_log");
}
if (number === 40){
	$(".cText").remove();
	consoleText.splice(0,20);
}
$("#console_log").animate({ scrollTop: $(document).height() }, "fast");
  return false;

}
   
function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result)
						  .show();
				$('#verwijder').hide();
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
	

 
$(document).ready(function(){

var LEADERBOARD_SIZE = 5;

  // Create our Firebase reference
  var scoreListRef = new Firebase("https://23r345t34t.firebaseio.com/");

  // Keep a mapping of firebase locations to HTML elements, so we can move / remove elements as necessary.
  var htmlForPath = {};

  // Helper function that takes a new score snapshot and adds an appropriate row to our leaderboard table.
  function handleScoreAdded(scoreSnapshot, prevScoreName) {
    var newScoreRow = $("<tr/>");
    newScoreRow.append($("<td/>").append($("<em/>").text(scoreSnapshot.val().name)));
    newScoreRow.append($("<td/>").text(scoreSnapshot.val().score));

    // Store a reference to the table row so we can get it again later.
    htmlForPath[scoreSnapshot.name()] = newScoreRow;

    // Insert the new score in the appropriate place in the table.
    if (prevScoreName === null) {
      $("#leaderboardTable").append(newScoreRow);
    }
    else {
      var lowerScoreRow = htmlForPath[prevScoreName];
      lowerScoreRow.before(newScoreRow);
    }
  }

  // Helper function to handle a score object being removed; just removes the corresponding table row.
  function handleScoreRemoved(scoreSnapshot) {
    var removedScoreRow = htmlForPath[scoreSnapshot.name()];
    removedScoreRow.remove();
    delete htmlForPath[scoreSnapshot.name()];
  }

  // Create a view to only receive callbacks for the last LEADERBOARD_SIZE scores
  var scoreListView = scoreListRef.limit(LEADERBOARD_SIZE);

  // Add a callback to handle when a new score is added.
  scoreListView.on('child_added', function (newScoreSnapshot, prevScoreName) {
    handleScoreAdded(newScoreSnapshot, prevScoreName);
  });

  // Add a callback to handle when a score is removed
  scoreListView.on('child_removed', function (oldScoreSnapshot) {
    handleScoreRemoved(oldScoreSnapshot);
  });

  // Add a callback to handle when a score changes or moves positions.
  var changedCallback = function (scoreSnapshot, prevScoreName) {
    handleScoreRemoved(scoreSnapshot);
    handleScoreAdded(scoreSnapshot, prevScoreName);
  };
  scoreListView.on('child_moved', changedCallback);
  scoreListView.on('child_changed', changedCallback);

  // When the user presses enter on scoreInput, add the score, and update the highest score.
  $("#leaderboard").click(function() {
    
      var newScore = money.toFixed(2);
    
      $("#scoreInput").val("");

      if (name.length === 0)
        return;

      var userScoreRef = scoreListRef.child(name);
      
      // Use setWithPriority to put the name / score in Firebase, and set the priority to be the score.
      userScoreRef.setWithPriority({ name:name, score:newScore }, newScore);
    
  });



$("#scores").hide();
$("#leaderboard").click(function(){
$("body").children().hide();
$("#scores").show()
})

    $("#imgInp")
	.change(function(){
        readURL(this);
    });
	
$("#knop").click(function () {
	$("#imgInp").click();
});






if (oudnieuws === 0) {
	$("#alert").hide();
	$("<span class=nav_nieuws>Op dit moment is er geen nieuws.</span>").appendTo("#nieuws_update");
}

                                                                                                                   //Alles wat tussen deze haakjes staat wordt uitgevoerd zodra het document is geladen
$(".aandeelLink").click(function(){
var deze = $(this).data("type");
$(".a").hide();
$("."+deze).show();
}); //Alles wat tussen deze haakjes staat wordt uitgevoerd zodra het document is geladen $(".a").hide(); $(".1").show(); 
 
$(".a").hide();
$(".1").show();

$( "#daalkans" )
  .click(function() {
    var value = $( "#gebeuren" ).val();
	consoleUpdate(daalkans[value]);
});
$( "#looptijd" )
  .click(function() {
	consoleUpdate(looptijd);
});
$( "#startprijs" )
  .click(function() {
    var valuee = $( "#gebeeuren" ).val();
	consoleUpdate(startprijs[valuee]);
});

$("#reset").click(function(){                                                                                                                   //Deze functie wordt uitgevoerd zodra op de reset knop wordt geklikt
                                                                                                                                                //Een confirmatie zodat de speler niet perongeluk zijn voortgang verwijderd
                                                                                                                                                                                //De speler krijgt een popup waar hij een text in moet schrijven
var confirm = prompt("Schrijf: 'ik wis nu al mijn data'").toUpperCase();                                //De .toUpperCase() zet de string in caps waardoor het niet meer hoofdletter gevoelig is
                                                                                                                                                                               
if (confirm === "IK WIS NU AL MIJN DATA" || confirm === "Q"){                                                                                           //Als de speler de confirmatie heeft voltooid
window.localStorage.clear()                                                                                                                             //Worden alle opgeslagen variabelen verwijderd
localStorage.clear();
 
money = 1000;
for ( var i = 1; i<17; i++) {
price2[i] = 45;
quantity[i] = 0;                                                                                                                                                //En veranderd naar de beginwaardes
cost[i] = 0;
average[i] = 0;
profit[i] = 0 ;        
       
}
price2 = {                                          //Deze objects bepalen alle waardes van de aandelen
        1:700,                                                  //price1 en price2 zijn verschillende waardes, dit komt later terug in de grafiek
        2:150,
        3:100,
        4:400,
        5:300,
        6:275,
        7:100,
        8:900,
        9:160,
        10:340,
        11:675,
        12:100,
        13:500,
        14:300,
        15:480,
        16:120
}

nieuwsUpgrade = 0;
schaalUpgrade = 0;
naamUpgrade = 0;
avatarUpgrade = 0;
koersUpgrade = 0;
alertUpgrade = 0;

location.reload();                                                                                                                                              //Dit ververst de website, zodat het programma vanaf het begin uitvoert
save();
}
 
else {
consoleUpdate("Toch maar niet?");                                                                                                               //Dit update de console met de text die tussen de haakjes staat
}
});
 
if (localStorage.getItem("name") === null) {                                                                                    //Als het bestand geen  kan ophalen uit de localStorage
var name = prompt("Wat is je naam?");
                                                                                                                                                                                //Komt er een pop-up met de vraag "Wat is je naam?"
localStorage.setItem("name",name);                                                                                                              //De ingevoerde naam wordt opgeslagen in localstorage
 
}
else {
var name = localStorage.getItem("name");                                                                                                //Als er wel een naam is dan gebruikt het programma deze
}
$("<span> "+name+"</span>").appendTo("#boven");                                                                                 //Dit plaatst de naam linksboven in de html
 
consoleUpdate("Welkom "+name);                                                                                                                  //Deze 5 berichten groeten de speler
consoleUpdate("Je bevindt je nu op de beursvloer. Gebruik de informatie die je hebt geleerd bij de tutorial.");
consoleUpdate("Als je hulp nodig hebt (de tutorial opnieuw doen) klik dan op de herhaal tutorial knop onder de resetknop.");
consoleUpdate("Veel plezier en succes met investeren!");
 
load();                                                                                                                                                                 //De localstorage variabelen worden geladen    
update();                                                                                                                                                               //Zorgt ervoor dat alle variabelen in de html worden gezet

$("#nieuwsUpgrade").click(function(){
if ( money <= 1300 ){
	consoleUpdate("Volgens mij is dat niet zo verstandig");
}
else{
if ( money>=1000 && nieuwsUpgrade === 0){
money-=1000;
nieuwsUpgrade = 1;
consoleUpdate("Nieuwsberichten komen voortaan in het groen");
nieuwscolor="green";
$("#nieuwsUpgrade").addClass( "gekocht" );
$('#upgrade1').remove();
$('<span class="voorwerp_text">Gekocht</span>').appendTo('#nieuwsUpgrade');
}
 
else if (nieuwsUpgrade === 1){
consoleUpdate("Deze upgrade heb je al")
}
else {
consoleUpdate("Je hebt niet genoeg geld");
}
}
});
if(nieuwsUpgrade === 1){
$("#nieuwsUpgrade").addClass( "gekocht" );
nieuwscolor = "green";
$('#upgrade1').remove();
$('<span class="voorwerp_text">Gekocht</span>').appendTo('#nieuwsUpgrade');
}

$("#schaalUpgrade").click(function(){
if ( money <= 2700 ){
	consoleUpdate("Volgens mij is dat niet zo verstandig");
}
else{
if ( money>=2500 && schaalUpgrade === 0){
money-=2500;
schaalUpgrade = 1;
consoleUpdate("Vanaf nu zit er een mooie schaalverdeling bij de grafieken");
$("#schaalUpgrade").addClass( "gekocht" );
$('#upgrade2').remove();
$('<span class="voorwerp_text">Gekocht</span>').appendTo('#schaalUpgrade');
}
else if (schaalUpgrade === 1){
consoleUpdate("Deze upgrade heb je al")
}
else {
consoleUpdate("Je hebt niet genoeg geld");
}
}
});

if(schaalUpgrade === 1){
$("#schaalUpgrade").addClass( "gekocht" );
$('#upgrade2').remove();
$('<span class="voorwerp_text">Gekocht</span>').appendTo('#schaalUpgrade');
}

 

$("#naamUpgrade").click(function(){
if ( money <= 700 ){
	consoleUpdate("Volgens mij is dat niet zo verstandig");
}
else{
if ( money>=500 && naamUpgrade === 0){
money-=500;
naamUpgrade = 1;
var name = prompt("Wat is je naam?");
                                                                                                                                                                                //Komt er een pop-up met de vraag "Wat is je naam?"
localStorage.setItem("name",name); 
$("#boven").children().remove();
$("<span> "+name+"</span>").appendTo("#boven");  
consoleUpdate("Je naam is succesvol veranderd naar "+name+"!");
$("#naamUpgrade").addClass( "gekocht" );
$('#upgrade3').remove();
$('<span class="voorwerp_text">Gekocht</span>').appendTo('#naamUpgrade');
}
else if (naamUpgrade === 1){
consoleUpdate("Deze upgrade heb je al")
}
else {
consoleUpdate("Je hebt niet genoeg geld");
}
}
});

if(naamUpgrade === 1){
$("#naamUpgrade").addClass( "gekocht" );
$('#upgrade3').remove();
$('<span class="voorwerp_text">Gekocht</span>').appendTo('#naamUpgrade');
}	

$("#koersUpgrade").click(function(){
if ( money <= 5300 ){
	consoleUpdate("Volgens mij is dat niet zo verstandig");
}
else {
if ( money>=5000 && koersUpgrade === 0){
money-=5000;
koersUpgrade = 1;
consoleUpdate("De koers wordt nu aangegeven met kleuren");
$("#koersUpgrade").addClass( "gekocht" );
$('#upgrade6').remove();
$('<span class="voorwerp_text">Gekocht</span>').appendTo('#koersUpgrade');
}
else if (koersUpgrade === 1){
consoleUpdate("Deze upgrade heb je al")
}
else {
consoleUpdate("Je hebt niet genoeg geld");
}
}
});

if(koersUpgrade === 1){
$("#koersUpgrade").addClass( "gekocht" );
$('#upgrade6').remove();
$('<span class="voorwerp_text">Gekocht</span>').appendTo('#koersUpgrade');
}

$("#alertUpgrade").click(function(){
	if ( money <= 15300 ){
	consoleUpdate("Volgens mij is dat niet zo verstandig");
}
else {
if ( money>=15000 && alertUpgrade === 0){
money-=15000;
alertUpgrade = 1;
consoleUpdate("Het wordt nu aangegeven als de prijs van een aandeel hoger is dan de inkoopprijs");
$("#alertUpgrade").addClass( "gekocht" );
$('#upgrade4').remove();
$('<span class="voorwerp_text">Gekocht</span>').appendTo('#alertUpgrade');
}
else if (alertUpgrade === 1){
consoleUpdate("Deze upgrade heb je al")
}
else {
consoleUpdate("Je hebt niet genoeg geld");
}
}
});

if(alertUpgrade === 1){
$("#alertUpgrade").addClass( "gekocht" );
$('#upgrade4').remove();
$('<span class="voorwerp_text">Gekocht</span>').appendTo('#alertUpgrade');
}

$("#avatarUpgrade").click(function() {
	if ( money <= 5300 ){
	consoleUpdate("Volgens mij is dat niet zo verstandig");
}
else{
	if ( money>=5000 && avatarUpgrade === 0){
		money-=5000;
		avatarUpgrade = 1;
		consoleUpdate("Je kan nu je avatar veranderen met de knop onder de resetknop.");
		$("#avatarUpgrade").addClass( "gekocht" );
		$('#upgrade5').remove();
		$('<span class="voorwerp_text">Gekocht</span>').appendTo('#avatarUpgrade');
		$("#knop").removeClass('displayUnlock')
			  .addClass('button');
	}
	else if (avatarUpgrade === 1){
		consoleUpdate("Deze upgrade heb je al")
	}
	else {
		consoleUpdate("Je hebt niet genoeg geld");
	}
}
});
	
if(avatarUpgrade === 1){
	$("#avatarUpgrade").addClass( "gekocht" );
	$('#upgrade5').remove();
	$('<span class="voorwerp_text">Gekocht</span>').appendTo('#avatarUpgrade');
	$("#knop").removeClass('displayUnlock')
			  .addClass('button');
}

   
$(".buy").click(function(e){                                   
                                                                                //Zodra de speler op de "koop" knop klikt wordt de knop op het toetsenbord in de variabele e geplaatst
var pick = $(this).data("type");                                                                                                                //Neemt deze vergelijking het eerste teken van het id
                                                                                                                                                                //Dit komt overeen met het aandeel wat het is
 
if (e.shiftKey){                                                                                                                                                //Als de speler shift had ingedrukt tijdens het kopen
    var amount = Math.floor(money/price2[pick]);                                                                                //Wordt het aantal aandelen dat wordt gekocht het aantal geld/de prijs van het betreffende aandeel afgerond naar beneden zodat het maximaal aantal aandelen wordt gekocht
        cost[pick]+=price2[pick]*amount;                                                                                                        //De kosten van dit aandeel gaan omhoog met de prijs*gekochte aandelen
        profit[pick]-=price2[pick]*amount;                                                                                                      //Ditzelfde bedrag gaat van de profit af
    quantity[pick]+=amount;                                                                                                                             //Het aantal aandelen wordt groter met het aantal gekochte aandelen
    money-=price2[pick]*amount;                                                                                                                 //Het betaalde geld gaat van de spelers geld af
        consoleUpdate("Je hebt "+amount+ " aandelen gekocht voor "+price2[pick].toFixed(2)*amount+" euro." );  
    update();                                                                                                                                                   //En de update() functie plaatst de variabelen in het document
}
else {                                                                                                                                                                  //Als de speler niet op shift klikte
if (money>=price2[pick]) {                                                                                                                              //En genoeg geld heeft om 1 aandeel te kopen
quantity[pick]++;                                                                                                                                               //Krijgt hij 1 aandeel erbij
cost[pick]+=price2[pick]                                                                                                                                //Wordt de prijs bij de kosten opgeteld
profit[pick]-=price2[pick]                                                                                                                              //En de prijs van de profit afgehaald
money-=price2[pick];                                                                                                                                    //En van het geld
consoleUpdate("Je hebt 1 aandeel gekocht voor "+price2[pick].toFixed(2) + " euro");
update();                                                                                                                                                               //Waarna de variabelen weer in de html worden aangepast
 
}
else (consoleUpdate("Je hebt niet genoeg geld"));                                                                               //Als de speler niet genoeg geld heeft wordt dat gemeld in de console
}
 
});
 
$(".sell").click(function(e){                                                                                                                   //Dit is bijna dezelfde functie, maar dan voor verkopen
var pick = $(this).data("type");                                                                                                                //Het betreffende aandeel wordt weer gekozen
 
   
if (e.shiftKey) {                                                                                                                                               //Als de speler op shift klikte wordt alles verkocht
money+=quantity[pick]*price2[pick];                                                                                                             //De speler krijgt geld voor alle aandelen
profit[pick]+=quantity[pick]*price2[pick];                                                                                              //Ditzelfde bedrag wordt bij de profit opgeteld
        cost[pick]= 0;
consoleUpdate("Je hebt "+quantity[pick]+ " aandelen verkocht voor "+price2[pick].toFixed(2)*quantity[pick]+" euro")                                                                                                                                                                             //De kosten gaan naar 0, de speler heeft immers niets meer uitgegeven aan dit aandeel
quantity[pick]=0;                                                                                                                                               //De speler heeft geen aandelen meer over
        update();                                                                                                                                                       //De html pagina krijgt weer de juiste variabelen
}
 
else {                                                                                                                                                                  //Als de speler niet op shift klikte
if (quantity[pick]>0) {                                                                                                                                 //En hij 1 of meer aandelen heeft
quantity[pick]--;                                                                                                                                               //Wordt dit aandeel verkocht
cost[pick]-=average[pick];                                                                                                                              //De kosten gaan -average, zodat de average waarvoor gekocht is gelijkblijft (
money+=price2[pick];                                                                                                                                    //De prijs waarvoor het aandeel wordt verkocht wordt bij je geld opgeteld
profit[pick]+=price2[pick];                                                                                                                             //En bij de profit
consoleUpdate("Je hebt 1 aandeel verkocht voor "+price2[pick].toFixed(2)+ " euro");            
update();                                                                                                                                                               //Plaatst de juiste variabelen in de site
 
}
else {                                                                                                                                                                  //Als de speler geen aandelen heeft
consoleUpdate("Je hebt geen aandelen");                                                                                                 //Wordt dat gemeld in de console
}                                                                                                                                                                               //Sluit de else statement
}                                                                                                                                                                               //Sluit de eerste else statement
});                                                                                                                                                                             //Sluit de verkoop functie
 
 
    setinterval();    
	//Start de interval die ervoor zorgt dat de prijzen van aandelen veranderen
});                                                                                                                                                                             //Eindigt de de functie die wordt uitgevoerd als het document opstart
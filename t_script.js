// JavaScript Document
var number = 0;
var n_plaatje = 0;
var money = 1000;
var gedrukt = false;
var firstclick = true;
var f11press = true;
var fullscreen = false;
var fs = true;
var save = function(){                                                                                                                  //Deze functie wordt gebruikt om de belangrijke variabelen op te slaan
localStorage.setItem("money",money);
	
};
var messageUpdate = function() {
	                                                                           
	$("<span id=message>" +next_message[number]+ "</span>").appendTo("#text_frame");
}
var plaatjeUpdate = function() {
	
	$('#plaatjes_voorbeelden').css({'background-image':'url(tutorial/' +next_plaatje[n_plaatje]+ ')',
										 'background-size':'contain', 'background-repeat':'no-repeat',
										 'background-position':'center'});
}

var next_message = {
	1:'Het eerste wat er gedaan moet worden is de F11 knop indrukken. Deze knop zorgt ervoor dat de browser fullscreen gaat (om dit weer uit te zetten is nog een keer F11 klikken voldoende). Deze site is geoptimaliseerd voor fullscreen, vandaar dat je dit moet doen. Als je dit hebt gedaan kan je door naar de volgende stap.',
	2:'Nu je in fullscreen modus bent kunnen we je inleiden in het spel zelf. In dit spel is het de bedoeling dat je aandelen koopt en verkoopt. Hierbij streef je naar zo veel mogelijk winst. De koersen worden voornamelijk bepaalt door formules die wij hebben geschreven. Verdere invloeden zijn nieuwsberichten die willekeurig worden getriggerd. Deze nieuwsberichten hebben uit logische redenering positieve of negatieve effecten op de huidige beurskoers van de betrokken bedrijven. Als je problemen hebt met hoe het er uitziet moet je uitzoomen (dat doe je door Ctrl ingedrukt te houden en dan te scrollen met je scrollwheel). Klik op "Ga door" om door te gaan.',
	3:'Als het goed is heb je alles wat hiervoor hier stond gelezen. Voor het geval dat je door wilt gaan, maar weet niet hoe weest dan niet bezorgd. De knop onder deze tekst laat links een heel mooi plaatje met uitleg verschijnen. Veel plezier!',
	4:'Als je alles gelezen hebt kan je doorgaan naar het volgende plaatje.',
	5:'Nu we dat gehad hebben is het tijd om de tabel uit te leggen. Lees het aandachtig door en klik dan door.',
	6:'Dan zijn we nu aangekomen bij het interactie gedeelte. Hier kan je aandelen kopen en verkopen. Als je shift ingedrukt houdt en dan op koop klikt koop je het maximale aantal aandelen dat je kan kopen in dat bedrijf. Zelfde geldt voor shift en verkoop, alleen verkoop je dan al je aandelen in dat bedrijf.',
	7:'Er is ook een winkel. Hier kan je upgrades kopen van jouw zuurverdiende pegels. Dit kopen doe je door  op het icoontje te klikken van het product dat je wilt hebben.',
	8:'En nu: de grafiek. Hierin wordt een lijn geschetst met de stijgingen en dalingen van de koersen, gebruik dit in je voordeel. Klik op "Start" om helemaal lekker en opgewarmd van start te gaan.',
	9:'Last but not least: de console. In de console wordt je up-to-date gehouden met het nieuws en krijg je ook meldingen van hoeveel aandelen je hebt aangeschaft of verkocht. Als je niet genoeg geld hebt wordt je daar ook aan herrinnerd door de console.'
}

var next_plaatje = {
	1:'navigator.png',
	2:'',
	3:'tabel.png',
	4:'interactie.png',
	5:'winkel.png',
	6:'grafiek.png',
	7:'console.png'
}

var f11_klik = function() {
	$('#volgende').hide();
	if (f11press === true){
	$(document).one('keyup',function(e){
	   if(e.which==122){
		   e.preventDefault();//kill anything that browser may have assigned to it by default
		   //do what ever you wish here :) 
		   $( "#volgende" ).fadeIn( "slow", function() {});
		   $('#message').remove();
		   $("<span id=message>Goed gedaan! Op naar de volgende stap.</span>").appendTo("#text_frame");
		   f11press=false;
		$('#fs').hide();
		}
	})
}
}

var firstplaatje = function() {			

				$('#plaatjes_voorbeelden').css({'background-image':'url(tutorial/navigator.png)',
										 'background-size':'contain', 'background-repeat':'no-repeat',
										 'background-position':'center'});
}

function launchFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
}


var klikcheck = function() {
			$( "#volgende" ).fadeIn( "slow", function() {});
		   $('#message').remove();
		   $("<span id=message>Goed gedaan! Op naar de volgende stap.</span>").appendTo("#text_frame");
		   $('#fs').hide();
		
}

$(document).ready(function(){
	
	$('#start').hide();
	$('#plaatje').hide();
	$('#dnp').hide();
	$('#fs').hide();
	
	$('#fs').click(function() {
		klikcheck();
		});
	
	$('#dnp').click(function() {
		
		window.localStorage.removeItem(money)                                                                                                                            
		localStorage.removeItem(money);
		money = 1000;
		save();                                                                                                                                             
		
		
		if (firstclick === true){
		$('#message').remove();
		$('<span id=message>Dus je had het niet in je om je in te houden? Er had daar een hoop fout kunnen gaan... of niet... Ga nou maar snel door.</span>').appendTo('#text_frame');
		n_plaatje++;
		}
		$('#plaatje').show();
		gedrukt = true;
		$('#dnp').hide();
	
	});
	
	
	$('#plaatje').click(function () {
		
	if(n_plaatje === 1){
				n_plaatje++;
											 if (number >= 3){
			if (number === 4 && gedrukt === false){
				$('#message').remove();
				$('<span id=message>Je hebt dus niet geklikt op die ene knop.. Knap zeg. Doe het voor de grap toch maar :)</span>').appendTo('#text_frame');
				$('#plaatje').hide();
				firstclick = false;
			}
			else {
			$('#message').remove();
			number++;
			messageUpdate();
			}
		};
		if (number === 4) {
			$('#dnp').show();
		}
		if (n_plaatje >= 6) {
			$('#start').show();
			$('#plaatje').hide();
		}
	}
											 

	else{

		n_plaatje++;
		plaatjeUpdate();
		if (number >= 3){
			if (number === 4 && gedrukt === false){
				$('#message').remove();
				$('<span id=message>Je hebt dus niet geklikt op die ene knop.. Knap zeg. Doe het voor de grap toch maar :)</span>').appendTo('#text_frame');
				$('#plaatje').hide();
				firstclick = false;
			}
			else {
			$('#message').remove();
			number++;
			messageUpdate();
			}
		};
		if (number === 4) {
			$('#dnp').show();
		}
		if (n_plaatje >= 6) {
			$('#start').show();
			$('#plaatje').hide();
		}
	}
	});
		
	$('#volgende').click(function() {
		$('#message').remove();
		number++;
		messageUpdate();
		if (number === 1) {
		$('#fs').show();
		
		if(f11press === true) {
			f11_klik();
			f11press=false;
			fs = false;
			}
			
			
			if(fs === true){
			klickcheck();
			f11press = false;
			
		   fs = false;
		   }
		}
		if (number === 3) {
			$('#volgende').hide();
			$('#plaatje').show();
		}

		
		
	});
		
	$("<span id=message><strong>Welkom op de site van ons profielwerkstuk.</strong><br />Het eerste waar je doorheen geloodst gaat worden is een korte tutorial. In deze tutorial wordt uitgelegd hoe de UI (user interface) werkt en hoe je aandelen koopt of verkoopt.</span>").appendTo("#text_frame");
		
		
		
});
var nieuwsChoice = function(){
nieuwsdisplay = 1;
var willekeurig = Math.floor(Math.random()*20+1)
switch(willekeurig){
 
        case 1:		//PEAR
       			var random2 = Math.floor(Math.random()*100);
				var bericht;
			//	     if (0 <= random2 < 5)   {bericht = 1;}
				//else if (10 <= random2 < 20)  {bericht = 2;}
				//else if (20 <= random2 < 40)  {bericht = 3;}
				//else if (40 <= random2 < 60)  {bericht = 4;}
				//else if (60 <= random2 < 100) {bericht = 5;}
				//else 			   {}
				bericht = 1;
				switch(bericht){
                                case 1:
								if (time <= 276) {
								looptijd = time;
								duration = 28;
								}
								else {looptijd = 276;}
                                consoleUpdate("De CEO van Pear is overleden, de nieuwe CEO is niet zo charismatisch als de oude.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De CEO van Pear is overleden, de nieuwe CEO is niet zo charismatisch als de oude.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[1]+=30;
								

                                break;
                       			
                                case 2:
								if (time <= 276) {
								looptijd = time;
								duration = 28;
								}
								else {looptijd = 276;}
                                consoleUpdate("Het nieuwe product van Pear zorgt voor hoofdpijn bij veel mensen.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Het nieuwe product van Pear zorgt voor hoofdpijn bij veel mensen.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[1]+=30;
								startprijs[1]-=20;
                                break;
                       
                                case 3:
								if (time <= 292) {
								looptijd = time;
								duration = 12;
								}
								else {looptijd = 292;}
                                consoleUpdate("Na een langdurige rechtzaak heeft Pear de rechtzaak verloren van Follops.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Na een langdurige rechtzaak heeft Pear de rechtzaak verloren van Follops.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[1]+=30;  
                                break;
                       
                                case 4:
								if (time <= 292) {
								looptijd = time;
								duration = 12;
								}
								else {looptijd = 292;}
                                consoleUpdate("Na een langdurige rechtzaak heeft Pear de rechtzaak gewonnen van Follops.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Na een langdurige rechtzaak heeft Pear de rechtzaak gewonnen van Follops.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[1]-=30;
								daalkans[2]+=10;
                                break;
                       
                                case 5:
								duration = 1;
                                consoleUpdate("Pear heeft een nieuwe product gelanceerd: de iPear nummer zoveel.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Pear heeft een nieuwe product gelanceerd: de iPear nummer zoveel.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                startprijs[1]+=30;
                                break;
       
                                default:
                                break;
                                }
        break;

		case 2:			//FOLLOPS
                var random2 = Math.floor(Math.random()*100);
				var bericht2;
				     if (0  <= random2 < 20)  {bericht2 = 1;}
				else if (20 <= random2 < 30)  {bericht2 = 2;}
				else if (30 <= random2 < 50)  {bericht2 = 3;}
				else if (50 <= random2 < 70)  {bericht2 = 4;}
				else if (70 <= random2 < 80)  {bericht2 = 5;}
				else if (80 <= random2 < 100) {bericht2 = 6;}
                switch(bericht2){
                                case 1:
								if (time <= 292) {
								looptijd = time;
								duration = 12;
								}
								else {looptijd = 292;}
                                consoleUpdate("De sportclub gebonden aan Follops, FSV, maakt een slecht seizoen door.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De sportclub gebonden aan Follops, FSV, maakt een slecht seizoen door.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[2]+=30;
                                break;
                       
                                case 2:
								duration = 1;
                                consoleUpdate("Follops heeft een nieuw soort spaarlampen ontwikkelt.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Follops heeft een nieuw soort spaarlampen ontwikkelt.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                startprijs[2]+=30;
                                break;
                       
                                case 3:
								if (time <= 288) {
								looptijd = time;
								duration = 16;
								}
								else {looptijd = 288;}
                                consoleUpdate("Na een groots onderzoek heeft Follops het proces gestaakt.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Na een groots onderzoek heeft Follops het proces gestaakt.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[2]+=30;
                                break;
                       
                                case 4:
                                consoleUpdate("Na een groots onderzoek heeft Follops een nieuwe stofzuiger ontwikkelt.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Na een groots onderzoek heeft Follops een nieuwe stofzuiger ontwikkelt.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                startprijs[2]+=20;
                                break;
                       
                                case 5:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Uit een tweet is gebleken dat de CEO van Follops een tv heeft van Suny.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Uit een tweet is gebleken dat de CEO van Follops een tv heeft van Suny.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[2]+=30;
                                break;
       
								case 6:
								if (time <= 292) {
								looptijd = time;
								duration = 12;
								}
								else {looptijd = 292;}
								consoleUpdate("Follops heeft een nieuwe vestiging geopend.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Follops heeft een nieuwe vestiging geopend.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								daalkans[2]-=30;
                                default:
                                break;
                                }
		
		break;

		case 3:			//SWAMSON
                var random2 = Math.floor(Math.random()*100);
				var bericht3;
				     if (0 <= random2 < 20)   {bericht3 = 1;}
				else if (20 <= random2 < 45)  {bericht3 = 2;}
				else if (45 <= random2 < 55)  {bericht3 = 3;}
				else if (55 <= random2 < 70)  {bericht3 = 4;}
				else if (70 <= random2 < 85)  {bericht3 = 5;}
				else 			   {bericht3 = 6}
                switch(bericht3){
                                case 1:
								if (time <= 288) {
								looptijd = time;
								duration = 16;
								}
								else {looptijd = 288;}
                                consoleUpdate("De CEO van Swamson is betrokken bij een seksschandaal.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De CEO van Swamson is betrokken bij een seksschandaal.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[3]+=30;
                                break;
                       
                                case 2:
								if (time <= 292) {
								looptijd = time;
								duration = 12;
								}
								else {looptijd = 292;}
                                consoleUpdate("Uit onderzoek is gebleken dat Swamson telefoons beter zijn dan die van Pear.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Uit onderzoek is gebleken dat Swamson telefoons beter zijn dan die van Pear.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[3]-=30;
								startprijs[3]+=20;
								daalkans[1]+=30;
                                break;
                       
                                case 3:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Door een defect in het toestel zijn de laatste telefoons van Swamson ontploft.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Door een defect in het toestel zijn de laatste telefoons van Swamson ontploft.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[3]+=30;
                                break;
                       
                                case 4:
								if (time <= 280) {
								looptijd = time;
								duration = 24;
								}
								else {looptijd = 280;}
                                consoleUpdate("Swamson heeft een campagne gestart om celebrities te voorzien van smartphones.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Swamson heeft een campagne gestart om celebrities te voorzien van smartphones.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[3]-=30;
                                break;
                       
                                case 5:
								if (time <= 292) {
								looptijd = time;
								duration = 12;
								}
								else {looptijd = 292;}
                                consoleUpdate("Swamson heeft een nieuwe telefoon uitgebracht die werken op zonne-energie. Deze telefoons zijn financieel zeer voordelig en werken heel goed.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Swamson heeft een nieuwe telefoon uitgebracht die werken op zonne-energie. Deze telefoons zijn financieel zeer voordelig en werken heel goed.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[3]-=27;
								startprijs[3]+=30;
                                break;
       
								case 6:
								if (time <= 292) {
								looptijd = time;
								duration = 12;
								}
								else {looptijd = 292;}
								consoleUpdate("Swamson heeft een nieuwe telefoon uitgebracht die werken op zonne-energie. Deze telefoons zijn duurder dan verwacht en prijs-kwaliteit niet aantrekklijk.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Swamson heeft een nieuwe telefoon uitgebracht die werken op zonne-energie. Deze telefoons zijn duurder dan verwacht en prijs-kwaliteit niet aantrekklijk.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								daalkans[3]+=27;
								startprijs[3]-=30;
                                default:
                                break;
				}
				
			break;
		
		case 4:			//HUHAWAII
                var random2 = Math.floor(Math.random()*100)
				var bericht4;
				     if (0 <= random2 < 20)   {bericht4 = 1;}
				else if (20 <= random2 < 30)  {bericht4 = 2;}
				else if (30 <= random2 < 40)  {bericht4 = 3;}
				else if (40 <= random2 < 60)  {bericht4 = 4;}
				else if (60 <= random2 < 80)  {bericht4 = 5;}
				else 			   {bericht4 = 6}
                switch(bericht4){
                                case 1:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De Huhawaii telefoons slaan alleen aan in Japan.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De Huhawaii telefoons slaan alleen aan in Japan.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[4]+=30;
                                break;
                       
                                case 2:
								if (time <= 288) {
								looptijd = time;
								duration = 16;
								}
								else {looptijd = 288;}
                                consoleUpdate("Mensen ontdekken dat Huhawaii telefoons veel goedkoper zijn dan die van Swamson.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Mensen ontdekken dat Huhawaii telefoons veel goedkoper zijn dan die van Swamson.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								startprijs[4]+=20;
                                daalkans[4]-=27;
								daalkans[3]+=30;
                                break;
                       
                                case 3:
								if (time < 276) {
								looptijd = time;
								duration = 28;
								}
								else {looptijd = 276;}
                                consoleUpdate("Een tsunami in Japan heeft de Huhawaii fabriek platgelegd.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Een tsunami in Japan heeft de Huhawaii fabriek platgelegd.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[4]+=40;
                                break;
                       
                                case 4:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Huhawaii opent filialen in Europa.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Huhawaii opent filialen in Europa.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								startprijs[4]+=20;
                                daalkans[4]-=25;
                                
                                break;
                       
                                case 5:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Huhawaii expirementeert met stokjes voor de smartphones. De stokjes liggen goed in de hand en haalt vooral ouderen over om een Huhawaii smartphone aan te schaffen.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Huhawaii expirementeert met stokjes voor de smartphones. De stokjes liggen goed in de hand en haalt vooral ouderen over om een Huhawaii smartphone aan te schaffen.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[4]-=30;
								startprijs[4]+=20;
                                
                                break;
       
								case 6:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
								consoleUpdate("Huhawaii expirementeert met stokjes voor de smartphones. De stokjes blijken niet goed te werken op het scherm.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Huhawaii expirementeert met stokjes voor de smartphones. De stokjes blijken niet goed te werken op het scherm.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								daalkans[4]+=30;
								startprijs[4]-=20;
                                default:
                                break;
				}
				
			break;
		case 5:			//NICE			
                var random2 = Math.floor(Math.random()*100);
				var bericht5;
				     if (0 <= random2 < 10)   {bericht5 = 1;}
				else if (10 <= random2 < 25)  {bericht5 = 2;}
				else if (25 <= random2 < 40)  {bericht5 = 3;}
				else if (40 <= random2 < 60)  {bericht5 = 4;}
				else if (60 <= random2 < 80)  {bericht5 = 5;}
				else 			   {bericht5 = 6}
                switch(bericht5){
                                case 1:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Een sporter gesponsord door Nice is betrapt op dopinggebruik.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Een sporter gesponsord door Nice is betrapt op dopinggebruik.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[5]+=30;
                                break;
                       
                                case 2:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Uit onderzoek is gebleken dat hardlopers sneller lopen als ze Nice schoenen dragen.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Uit onderzoek is gebleken dat hardlopers sneller lopen als ze Nice schoenen dragen.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[5]-=30;
								startprijs[5]+=20;
                                
                                break;
                       
                                case 3:
								if (time <= 288) {
								looptijd = time;
								duration = 16;
								}
								else {looptijd = 288;}
                                consoleUpdate("Er is aan het licht gekomen dat Nice zich schuldig maakt aan kinderarbeid.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Er is aan het licht gekomen dat Nice zich schuldig maakt aan kinderarbeid.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[5]+=30;
								startprijs[5]-=15;
                                
                                break;
                       
                                case 4:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Door een geslaagde reclamecampagne met een topsporter is de omzet van Nice aanzienlijk vergroot. Door deze onderneming verliest Adidos klanten.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Door een geslaagde reclamecampagne met een topsporter is de omzet van Nice aanzienlijk vergroot. Door deze onderneming verliest Adidos klanten.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[5]-=27;
								daalkans[6]+=18;
                                
                                break;
                       
                                case 5:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Het basismodel van de schoenen van Nice is grondig aangepast. Dit nieuwe model zit veel beter om de voet en levert aanzienlijk betere steun. Nice besluit dit basismodel blijvend te gebruiken.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Het basismodel van de schoenen van Nice is grondig aangepast. Dit nieuwe model zit veel beter om de voet en levert aanzienlijk betere steun. Nice besluit dit basismodel blijvend te gebruiken.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[5]-=30;
								startprijs[5]+=15;
                                
                                break;
       
								case 6:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
								consoleUpdate("Het basismodel van de schoenen van Nice is grondig aangepast. Dit nieuwe model levert weinig steun en loopt niet lekker.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Het basismodel van de schoenen van Nice is grondig aangepast. Dit nieuwe model levert weinig steun en loopt niet lekker.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								daalkans[5]+=30;
								startprijs[5]-=15;
                                default:
                                break;
				}
		break;

		case 6:			//ADIDOS			
                var random2 = Math.floor(Math.random()*100);
				var bericht6;
				     if (0 <= random2 < 15)   {bericht6 = 1;}
				else if (15 <= random2 < 25)  {bericht6 = 2;}
				else if (25 <= random2 < 35)  {bericht6 = 3;}
				else if (35 <= random2 < 45)  {bericht6 = 4;}
				else if (45 <= random2 < 60)  {bericht6 = 5;}
				else 			   {bericht6 = 6}
                switch(bericht6){
                                case 1:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De nieuwe lijn van heuptasjes slaan erg aan bij jongeren. Hierdoor neemt de omzet van Adidos toe.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De nieuwe lijn van heuptasjes slaan erg aan bij jongeren. Hierdoor neemt de omzet van Adidos toe.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[6]-=30;
                                break;
                       
                                case 2:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Op het hoofdkantoor van Adidos is gebleken dat de top sjoemelt met belastingsgeld. Investeerders van Adidos verliezen vertrouwen en verkopen daarom aandelen.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Op het hoofdkantoor van Adidos is gebleken dat de top sjoemelt met belastingsgeld. Investeerders van Adidos verliezen vertrouwen en verkopen daarom aandelen.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[6]+=27;
                                
                                break;
                       
                                case 3:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("In de fabriek waar zowel Adidos als Nice hun producten fabriceren is een brand uitgebroken. Dit treft Adidos harder dan Nice, omdat Nice ook andere fabrieken heeft waar producten gefabriceert worden. Adidos heeft dit niet.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>In de fabriek waar zowel Adidos als Nice hun producten fabriceren is een brand uitgebroken. Dit treft Adidos harder dan Nice, omdat Nice ook andere fabrieken heeft waar producten gefabriceert worden. Adidos heeft dit niet.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[6]+=27;
								daalkans[5]+=18;
                                
                                break;
                       
                                case 4:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Er zijn nieuwe technieken ontwikkelt in het lab van Adidos waardoor er veel goedkoper geproduceerd kan worden. De prijzen van Adidos hun producten dalen wat.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Er zijn nieuwe technieken ontwikkelt in het lab van Adidos waardoor er veel goedkoper geproduceerd kan worden. De prijzen van Adidos hun producten dalen wat.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[6]-=27;
								startprijs[6]+=15;
                                
                                break;
                       
                                case 5:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Adidos waagt zich op het gebied van winter- en zeesporten. Dit pakt goed uit, door deze onderneming verliest Slowgold klanten. Slowgold gaat als reactie hierop producten afzetten op de markt waar Nice en Adidos zich op focussen om de tegenvallende omzet te beperken.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Adidos waagt zich op het gebied van winter- en zeesporten. Dit pakt goed uit, door deze onderneming verliest Slowgold klanten. Slowgold gaat als reactie hierop producten afzetten op de markt waar Nice en Adidos zich op focussen om de tegenvallende omzet te beperken.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[6]-=30;
								startprijs[6]+=10;
								daalkans[7]+=18;
                                
                                break;
       
								case 6:
								consoleUpdate("Adidos waagt zich op het gebied van winter- en zeesporten. Dit pakt slecht uit, hierdoor draait Adidos verlies. Slowgold gaat afzetten op de markt waar Nice en Adidos zich op focussen om te laten zien dat zij wel met succes kunnen toetreden op een andere niche.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Adidos waagt zich op het gebied van winter- en zeesporten. Dit pakt slecht uit, hierdoor draait Adidos verlies. Slowgold gaat afzetten op de markt waar Nice en Adidos zich op focussen om te laten zien dat zij wel met succes kunnen toetreden op een andere niche.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								daalkans[6]+=30;
								daalkans[5]+=18;
								daalkans[7]-=15;
								startprijs[6]-=15;
                                default:  
                                break;
				}	
		break;
		
		case 7:			//SLOWGOLD		
                var random2 = Math.floor(Math.random()*100);
				var bericht7;
				     if (0 <= random2 < 25)   {bericht7 = 1;}
				else if (25 <= random2 < 30)  {bericht7 = 2;}
				else if (30 <= random2 < 45)  {bericht7 = 3;}
				else if (45 <= random2 < 60)  {bericht7 = 4;}
				else if (60 <= random2 < 80)  {bericht7 = 5;}
				else 			   {bericht7 = 6}
                switch(bericht7){
                                case 1:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De nieuwe lijn winterjassen van Slowgold vallen erg in de smaak bij consumenten.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De nieuwe lijn winterjassen van Slowgold vallen erg in de smaak bij consumenten.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[7]-=30;
                                break;
                       
                                case 2:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Een groot deel van de nieuwe Slowgold skateboards blijken van slecht hout te zijn gemaakt en absoluut niet lang mee te gaan.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Een groot deel van de nieuwe Slowgold skateboards blijken van slecht hout te zijn gemaakt en absoluut niet lang mee te gaan.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[7]+=30;
                                
                                break;
                       
                                case 3:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Slowgold en Otter slaan de handen ineen om samen een bergsport uitrusting te maken. Door deze samenwerking zijn veel consumenten die voorheen alleen van een van de merken producten kocht ook producten van de ander gaan kopen.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Slowgold en Otter slaan de handen ineen om samen een bergsport uitrusting te maken. Door deze samenwerking zijn veel consumenten die voorheen alleen van een van de merken producten kocht ook producten van de ander gaan kopen.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[7]-=15;
								startprijs[7]+=18;
								daalkans[8]-=18;
								startprijs[8]+=18;
                                
                                break;
                       
                                case 4:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Een goede reclame campagne van Slowgold zorgt ervoor dat veel meer jongeren gemotiveerd zijn om te gaan sporten.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Een goede reclame campagne van Slowgold zorgt ervoor dat veel meer jongeren gemotiveerd zijn om te gaan sporten.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[7]-=18;
                                
                                break;
                       
                                case 5:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De hele sport branche wordt beschuldigd van kartel vorming. Dit blijkt waar te zijn, alleen Otter is niet betrokken bij het kartel. Alle bedrijven lopen behoorlijk wat imago schade op. Elk bedrijf heeft zijn eigen manieren om de schade te beperken.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De hele sport branche wordt beschuldigd van kartel vorming. Dit blijkt waar te zijn, alleen Otter is niet betrokken bij het kartel. Alle bedrijven lopen behoorlijk wat imago schade op. Elk bedrijf heeft zijn eigen manieren om de schade te beperken.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[5]+=15;
								startprijs[5]-=10;
								daalkans[6]+=18;
								startprijs[6]-=10;
								daalkans[7]+=30;
								startprijs[7]-=10;
								daalkans[8]+=3;
                                
                                break;
       
								case 6:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
								consoleUpdate("Het nieuwe skate- en surfteam van Slowgold bestaan uit gerespecteerde topsporters die dienen voor goede reclame. Enkele van deze sporters zijn afkomstig uit de Nice sportteams.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Het nieuwe skate- en surfteam van Slowgold bestaan uit gerespecteerde topsporters die dienen voor goede reclame. Enkele van deze sporters zijn afkomstig uit de Nice sportteams.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								daalkans[5]+=18;
								daalkans[7]-=30;
                                default:
                                break;
				}	
		break;		
			
		case 8:			//OTTER			
                var random2 = Math.floor(Math.random()*100);
				var bericht8;
				     if (0 <= random2 < 15)   {bericht8 = 1;}
				else if (15 <= random2 < 30)  {bericht8 = 2;}
				else if (30 <= random2 < 45)  {bericht8 = 3;}
				else if (45 <= random2 < 70)  {bericht8 = 4;}
				else if (70 <= random2 < 85) {bericht8 = 5;}
				else 			   {bericht8 = 6}
                switch(bericht8){
                                case 1:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Otter heeft een indoor sport hal geopend waar consumenten kunnen klimmen en schaatsen.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Otter heeft een indoor sport hal geopend waar consumenten kunnen klimmen en schaatsen.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[8]-=30;
								startprijs[8]+=15;
                                break;
                       
                                case 2:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De nieuwe bergschoenen van Otter zijn niet zo goed als in de folder wordt beweert.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De nieuwe bergschoenen van Otter zijn niet zo goed als in de folder wordt beweert.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[8]+=30;
                                
                                break;
                       
                                case 3:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Slowgold en Otter slaan de handen ineen om samen een bergsport uitrusting te maken. Door deze samenwerking zijn veel consumenten die voorheen alleen van een van de merken producten kocht ook producten van de ander gaan kopen.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Slowgold en Otter slaan de handen ineen om samen een bergsport uitrusting te maken. Door deze samenwerking zijn veel consumenten die voorheen alleen van een van de merken producten kocht ook producten van de ander gaan kopen.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[7]-=15;
								daalkans[8]-=18;
                                
                                break;
                       
                                case 4:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Otter levert bij aankopen een extra thermosfles in de vakantie periodes.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Otter levert bij aankopen een extra thermosfles in de vakantie periodes.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[8]-=18;
                                
                                break;
                       
                                case 5:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Enkele werknemers hebben geklaagd over Otter als werkgever. Dit hebben de media opgepikt en gepubliceerd.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Enkele werknemers hebben geklaagd over Otter als werkgever. Dit hebben de media opgepikt en gepubliceerd.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[8]+=30;
                                
                                break;
       
								case 6:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
								consoleUpdate("Otter heeft een eigen navigatie apparaat ontwikkelt dat beter bijkt te werken dan die van Follops. Zo wordt de kwaliteit van de elektronische bergsport apparaten van Follops in twijfel getrokken.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Otter heeft een eigen navigatie apparaat ontwikkelt dat beter bijkt te werken dan die van Follops. Zo wordt de kwaliteit van de elektronische bergsport apparaten van Follops in twijfel getrokken.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								daalkans[2]+=18;
								startprijs[8]+=10;
								daalkans[8]-=30;
                                default:
                                break;
				}		
		break;		
				
		case 9:			//TANTE BEPS		
                var random2 = Math.floor(Math.random()*100);
				var bericht9;
				     if (0 <= random2 < 15)   {bericht9 = 1;}
				else if (15 <= random2 < 30)  {bericht9 = 2;}
				else if (30 <= random2 < 45)  {bericht9 = 3;}
				else if (45 <= random2 < 70)  {bericht9 = 4;}
				else if (70 <= random2 < 85) {bericht9 = 5;}
				else 			   {bericht9 = 6}
                switch(bericht9){
                                case 1:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Tante Bep haar nieuwe recept voor pannenkoeken is overheerlijk.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Tante Bep haar nieuwe recept voor pannenkoeken is overheerlijk.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[9]-=30;
								startprijs[9]+=15;
                                break;
                       
                                case 2:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Tante Bep haar nieuwe gerecht: de pannenkoek bitterbal is niet te eten.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Tante Bep haar nieuwe gerecht: de pannenkoek bitterbal is niet te eten.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[9]+=30;
                                
                                break;
                       
                                case 3:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Omdat Tante Bep nu ook pannenkoeken heeft met snoepgoed verliest Neeplus een aantal klanten.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Omdat Tante Bep nu ook pannenkoeken heeft met snoepgoed verliest Neeplus een aantal klanten.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[12]+=18;
								daalkans[9]-=8;
                                
                                break;
                       
                                case 4:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Kinderen krijgen nu placemats die ingekleurd kunnen worden.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Kinderen krijgen nu placemats die ingekleurd kunnen worden.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[9]-=18;
								startprijs[9]+=18;
                                
                                break;
                       
                                case 5:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Chefkoks die recent zijn aangenomen laten de pannenkoeken vaak verbranden.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Chefkoks die recent zijn aangenomen laten de pannenkoeken vaak verbranden.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[9]+=30;
								startprijs[9]-=18;
                                
                                break;
       
								case 6:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
								consoleUpdate("Tante Bep heeft geïnvesteerd in nieuwe goede pannen. Door deze investeringen is de kwaliteit van de pannenkoeken behoorlijk gestegen. De pannenkoeken zijn nu nog veel lekkerder dan die van VD Havik.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Tante Bep heeft geïnvesteerd in nieuwe goede pannen. Door deze investeringen is de kwaliteit van de pannenkoeken behoorlijk gestegen. De pannenkoeken zijn nu nog veel lekkerder dan die van VD Havik.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								daalkans[10]+=18;
								startprijs[9]+=10;
								daalkans[9]-=30;
                                default:
                                break;
				}
		break;

		case 10:			//V.D. Havik		
                var random2 = Math.floor(Math.random()*100);
				var bericht10;
				     if (0 <= random2 < 15)   {bericht10 = 1;}
				else if (15 <= random2 < 30)  {bericht10 = 2;}
				else if (30 <= random2 < 45)  {bericht10 = 3;}
				else if (45 <= random2 < 70)  {bericht10 = 4;}
				else if (70 <= random2 < 85) {bericht10 = 5;}
				else 			   {bericht10 = 6}
                switch(bericht10){
                                case 1:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("V.D. Havik heeft het menu uitgebreid met overheerlijke gerechten.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>V.D. Havik heeft het menu uitgebreid met overheerlijke gerechten.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[10]-=30;
								startprijs[10]+=15;
                                break;
                       
                                case 2:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Het is laatst gebleken dat er een periode met bedorven eten werd gekookt bij V.D. Havik.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Het is laatst gebleken dat er een periode met bedorven eten werd gekookt bij V.D. Havik.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[10]+=30;
                                
                                break;
                       
                                case 3:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("V.D. Havik is nu ook kalkoen snacks gaan verkopen. Deze snacks zijn lekkerder en gezonder dan die van AFT.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>V.D. Havik is nu ook kalkoen snacks gaan verkopen. Deze snacks zijn lekkerder en gezonder dan die van AFT.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[11]+=18;
								daalkans[10]-=8;
                                
                                break;
                       
                                case 4:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Kinderen krijgen nu placemats die ingekleurd kunnen worden.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Kinderen krijgen nu placemats die ingekleurd kunnen worden.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[10]-=18;
								startprijs[10]+=18;
                                
                                break;
                       
                                case 5:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De hygiëne in de keuken is verreweg van wat het moet zijn volgens de Smaak Ambulance.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De hygiëne in de keuken is verreweg van wat het moet zijn volgens de Smaak Ambulance.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[10]+=30;
								startprijs[10]-=18;
                                
                                break;
       
								case 6:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
								consoleUpdate("V.D. Havik heeft de prijs voor meest hygiënische keuken gekregen van de Nationale Diesnt van Voedsel.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>V.D. Havik heeft de prijs voor meest hygiënische keuken gekregen van de Nationale Diesnt van Voedsel.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								startprijs[10]+=10;
								daalkans[10]-=30;
                                default:
                                break;
				}
		break;
			
		case 11:			//AFT		
                var random2 = Math.floor(Math.random()*100);
				var bericht11;
				     if (0 <= random2 < 15)   {bericht11 = 1;}
				else if (15 <= random2 < 30)  {bericht11 = 2;}
				else if (30 <= random2 < 45)  {bericht11 = 3;}
				else if (45 <= random2 < 70)  {bericht11 = 4;}
				else if (70 <= random2 < 85) {bericht11 = 5;}
				else 			   {bericht11 = 6}
                switch(bericht11){
                                case 1:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De Turkey-O-Tasty is een goed gelukte nieuwe burger van AFT.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De Turkey-O-Tasty is een goed gelukte nieuwe burger van AFT.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[10]-=30;
								startprijs[10]+=15;
                                break;
                       
                                case 2:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De ingrediënten die worden gebruikt voor de gerechten van AFT blijken niet helemaal fris te zijn.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De ingrediënten die worden gebruikt voor de gerechten van AFT blijken niet helemaal fris te zijn.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[10]+=30;
                                
                                break;
                       
                                case 3:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De kippenpannenkoek blijkt heel erg smakelijk te zijn, lekkerder zelfs dan die van Tante Beps.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De kippenpannenkoek blijkt heel erg smakelijk te zijn, lekkerder zelfs dan die van Tante Beps.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[9]+=18;
								daalkans[11]-=8;
                                
                                break;
                       
                                case 4:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Bij kindermeals geeft AFT leuke speeltjes.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Bij kindermeals geeft AFT leuke speeltjes.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[11]-=18;
								startprijs[11]+=18;
                                
                                break;
                       
                                case 5:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De nieuwe eetstoelen zitten niet comfortabel en de nieuwe eettafels zijn mank.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De nieuwe eetstoelen zitten niet comfortabel en de nieuwe eettafels zijn mank.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[11]+=30;
								startprijs[11]-=18;
                                
                                break;
       
								case 6:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
								consoleUpdate("De stof van de zitbanken bij AFT zit ontzettend lekker. Met het uitzicht op de nieuwe tv's vanaf de banken worden de klanten helemaal gelukkig.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De stof van de zitbanken bij AFT zit ontzettend lekker. Met het uitzicht op de nieuwe tv's vanaf de banken worden de klanten helemaal gelukkig.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								startprijs[11]+=10;
								daalkans[11]-=30;
                                default:
                                break;
				}	
		break;		
						
		case 12:			// Neeplus		
                var random2 = Math.floor(Math.random()*100);
				var bericht12;
				     if (0 <= random2 < 15)   {bericht12 = 1;}
				else if (15 <= random2 < 30)  {bericht12 = 2;}
				else if (30 <= random2 < 45)  {bericht12 = 3;}
				else if (45 <= random2 < 70)  {bericht12 = 4;}
				else if (70 <= random2 < 85) {bericht12 = 5;}
				else 			   {bericht12 = 6}
                switch(bericht12){
                                case 1:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Doordat de leveranciers van het snoep voor Neeplus het snoepgoed op een andere manier bereiden is de smaak er aanzienlijk op vooruit gegaan.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Doordat de leveranciers van het snoep voor Neeplus het snoepgoed op een andere manier bereiden is de smaak er aanzienlijk op vooruit gegaan.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[12]-=30;
								startprijs[12]+=15;
                                break;
                       
                                case 2:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Door bezuinigingen is Neeplus minder grote ladingen snoepgoed in gaan kopen en is veel snoep in de winkel oud en taai geworden.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Door bezuinigingen is Neeplus minder grote ladingen snoepgoed in gaan kopen en is veel snoep in de winkel oud en taai geworden.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[12]+=30;
								startprijs[12]-=18;
                                
                                break;
                       
                                case 3:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Door een nieuwe manier van het bereiden van snoepgoed is het snoep van Neeplus beter voor de tanden geworden.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Door een nieuwe manier van het bereiden van snoepgoed is het snoep van Neeplus beter voor de tanden geworden.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								daalkans[12]-=8;
                                
                                break;
                       
                                case 4:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Bij het kopen van een kilo snoep krijgt de klant er een extra grote lollie bij.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Bij het kopen van een kilo snoep krijgt de klant er een extra grote lollie bij.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[10]-=18;
                                
                                break;
                       
                                case 5:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De ijsmachine in de winkels van Neeplus is niet goed schoon waardoor klanten die ijs hebben gekocht ziek kunnen worden.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De ijsmachine in de winkels van Neeplus is niet goed schoon waardoor klanten die ijs hebben gekocht ziek kunnen worden.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[10]+=30;
								startprijs[10]-=18;
                                
                                break;
       
								case 6:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
								consoleUpdate("Het personeel van Neeplus is extreem vriendelijk.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Het personeel van Neeplus is extreem vriendelijk.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								startprijs[10]+=10;
								daalkans[10]-=30;
                                default:
                                break;
				}		
		break;		
				
		case 13:			// K&M		
                var random2 = Math.floor(Math.random()*100);
				var bericht13;
				     if (0 <= random2 < 15)   {bericht13 = 1;}
				else if (15 <= random2 < 30)  {bericht13 = 2;}
				else if (30 <= random2 < 45)  {bericht13 = 3;}
				else if (45 <= random2 < 70)  {bericht13 = 4;}
				else if (70 <= random2 < 85) {bericht13 = 5;}
				else 			   {bericht13 = 6}
                switch(bericht13){
                                case 1:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De zomercollectie van K&M vliegt de deur uit. Dit is elk jaar het geval, veel mensen kijken daarom uit naar die periode.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De zomercollectie van K&M vliegt de deur uit. Dit is elk jaar het geval, veel mensen kijken daarom uit naar die periode.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[13]-=30;
								startprijs[13]+=15;
                                break;
                       
                                case 2:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Het retourbeleid van de K&M is erg wazig. Hierdoor kunnen klanten niet gauw hun gekochte kleding ruilen als het niet bevalt.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Het retourbeleid van de K&M is erg wazig. Hierdoor kunnen klanten niet gauw hun gekochte kleding ruilen als het niet bevalt.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								startprijs[13]-=10;
                                daalkans[13]+=30;
                                
                                break;
                       
                                case 3:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("K&M heeft een aparte kledinglijn gelanceerd die goedkoper is dan die van Landvrouw.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>K&M heeft een aparte kledinglijn gelanceerd die goedkoper is dan die van Landvrouw.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[14]+=18;
								daalkans[13]-=8;
                                
                                break;
                       
                                case 4:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De winkelindeling van K&M is aangepast. Door deze aanpassing zien de winkels er leuker uit en zijn de winkels overzichtelijker.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De winkelindeling van K&M is aangepast. Door deze aanpassing zien de winkels er leuker uit en zijn de winkels overzichtelijker.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[13]-=18;
								startprijs[13]+=18;
                                
                                break;
                       
                                case 5:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De winkelindeling van K&M is aangepast. Door deze aanpassing zien de winkels er minder mooi uit en zijn de winkels minder overzichtelijk.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De winkelindeling van K&M is aangepast. Door deze aanpassing zien de winkels er minder mooi uit en zijn de winkels minder overzichtelijk.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[13]+=30;
								startprijs[13]-=18;
                                
                                break;
       
								case 6:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
								consoleUpdate("Naast normale kleding wordt er nu ook zwemkleding verkocht bij K&M. Deze badkleding is dit seizoen beter onthaald dan die van Hot Dog.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Naast normale kleding wordt er nu ook zwemkleding verkocht bij K&M. Deze badkleding is dit seizoen beter onthaald dan die van Hot Dog.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								startprijs[13]+=10;
								daalkans[13]-=30;
								daalkans[15]+=15.5;
                                default:
                                break;
				}
		break;		
				
		case 14:			// Landvrouw	
                var random2 = Math.floor(Math.random()*100);
				var bericht14;
				     if (0 <= random2 < 15)   {bericht14 = 1;}
				else if (15 <= random2 < 30)  {bericht14 = 2;}
				else if (30 <= random2 < 45)  {bericht14 = 3;}
				else if (45 <= random2 < 70)  {bericht14 = 4;}
				else if (70 <= random2 < 85) {bericht14 = 5;}
				else 			   {bericht14 = 6}
                switch(bericht14){
                                case 1:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Landvrouw is voor het zoveelste jaar op rij het goedkoopste kledingmerk.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Landvrouw is voor het zoveelste jaar op rij het goedkoopste kledingmerk.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[14]-=30;
								startprijs[14]+=15;
                                break;
                       
                                case 2:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De kleding van Landvrouw blijkt extreem brandbaar te zijn.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De kleding van Landvrouw blijkt extreem brandbaar te zijn.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[14]+=30;
								startprijs[14]-=18;
                                
                                break;
                       
                                case 3:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De productiemiddelen zijn goedkoper geworden, daarom daalt de kleding van Landvrouw in prijs.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De productiemiddelen zijn goedkoper geworden, daarom daalt de kleding van Landvrouw in prijs.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								daalkans[14]-=8;
                                
                                break;
                       
                                case 4:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De gekke sale dagen zijn van start gegaan. Kleding van Landvrouw heeft nu knalprijzen.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De gekke sale dagen zijn van start gegaan. Kleding van Landvrouw heeft nu knalprijzen.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[10]-=18;
                                
                                break;
                       
                                case 5:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Landvrouw wordt ervan beschuldigd dat ze hun kleding laten maken in een fabriek waar ook kinderen werken.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Landvrouw wordt ervan beschuldigd dat ze hun kleding laten maken in een fabriek waar ook kinderen werken.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[14]+=30;
								startprijs[14]-=10;
                                
                                break;
       
								case 6:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
								consoleUpdate("Het personeel van Landvrouw is extreem vriendelijk.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Het personeel van Landvrouw is extreem vriendelijk.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								startprijs[14]+=10;
								daalkans[14]-=30;
                                default:
                                break;
				}				
		break;		
				
		case 15:			// Hot Dog	
                var random2 = Math.floor(Math.random()*100);
				var bericht15;
				     if (0 <= random2 < 15)   {bericht15 = 1;}
				else if (15 <= random2 < 30)  {bericht15 = 2;}
				else if (30 <= random2 < 45)  {bericht15 = 3;}
				else if (45 <= random2 < 70)  {bericht15 = 4;}
				else if (70 <= random2 < 85) {bericht15 = 5;}
				else 			   {bericht15 = 6}
                switch(bericht15){
                                case 1:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Nieuwe reclames van Hot Dog op kinder tv maken dit merk erg populair onder de jeugd. Landvrouw verliest hierdoor populariteit.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Nieuwe reclames van Hot Dog op kinder tv maken dit merk erg populair onder de jeugd. Landvrouw verliest hierdoor populariteit.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[15]-=30;
								startprijs[15]+=15;
								daalkans[14]+=18;
                                break;
                       
                                case 2:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Hot Dog heeft nieuwe sneakers op de markt gebracht. Deze sneakers zijn volgens veel klanten niet erg fijn.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Hot Dog heeft nieuwe sneakers op de markt gebracht. Deze sneakers zijn volgens veel klanten niet erg fijn.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[15]+=30;
								startprijs[15]-=18;
                                
                                break;
                       
                                case 3:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Door een beter dan gespeculeerde katoenoogst kon dit voor een lagere prijs worden gekocht door Hot Dog. Door deze financiële meevaller kan kleding van Hot Dog goedkoper aangeboden worden. K&M kon ook mee-profiteren van deie katoenoogst.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Door een beter dan gespeculeerde katoenoogst kon dit voor een lagere prijs worden gekocht door Hot Dog. Door deze financiële meevaller kan kleding van Hot Dog goedkoper aangeboden worden. K&M kon ook mee-profiteren van deie katoenoogst.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								daalkans[13]-=8;
								daalkans[15]-=8;
                                
                                break;
                       
                                case 4:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De wintercollectie van Hot Dog valt erg in de smaak bij klanten.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De wintercollectie van Hot Dog valt erg in de smaak bij klanten.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[10]-=18;
                                
                                break;
                       
                                case 5:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De kwaliteit van de kleding van Hot Dog is de laatste tijd aan het verslechteren.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De kwaliteit van de kleding van Hot Dog is de laatste tijd aan het verslechteren.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[10]+=30;
								startprijs[10]-=18;
                                break;
       
								case 6:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
								consoleUpdate("De service in de Hot Dog winkels is verbeterd.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De service in de Hot Dog winkels is verbeterd.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								startprijs[10]+=10;
								daalkans[10]-=30;
                                default:
                                break;
				}	
		break;		
						
		case 16:			// Ans^2	
                var random2 = Math.floor(Math.random()*100);
				var bericht16;
				     if (0 <= random2 < 15)   {bericht16 = 1;}
				else if (15 <= random2 < 30)  {bericht16 = 2;}
				else if (30 <= random2 < 45)  {bericht16 = 3;}
				else if (45 <= random2 < 70)  {bericht16 = 4;}
				else if (70 <= random2 < 85) {bericht16 = 5;}
				else 			   {bericht16 = 6}
                switch(bericht16){
                                case 1:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Door een nieuwe techniek voor het maken van rubberzolen voor schoenen is het voor fabrikanten van Ans&#178; schoenen mogelijk om milieubewuster te produceren.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Door een nieuwe techniek voor het maken van rubberzolen voor schoenen is het voor fabrikanten van Ans&#178; schoenen mogelijk om milieubewuster te produceren.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[16]-=30;
								startprijs[16]+=15;
                                break;
                       
                                case 2:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Het container schip van Ans&#178; is gezonken en de complete lading van het schip is verloren gegaan.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Het container schip van Ans&#178; is gezonken en de complete lading van het schip is verloren gegaan.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[16]+=30;

								startprijs[16]-=18;
                                
                                break;
                       
                                case 3:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De schoenen van Ans&#178; hebben volgens een onderzoek van de Schoenen Autoriteiten de beste kwaliteit van de hele industrie.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De schoenen van Ans&#178; hebben volgens een onderzoek van de Schoenen Autoriteiten de beste kwaliteit van de hele industrie.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								daalkans[16]-=27;
								startprijs[16]+=10;
								daalkans[15]+=18;
								daalkans[14]+=18;
								daalkans[13]+=18;
								daalkans[5]+=18;
								daalkans[6]+=18;
								daalkans[7]+=18;
								daalkans[8]+=18;
                                
                                break;
                       
                                case 4:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("Bij het kopen van een paar schoenen van Ans&#178; krijgen de klanten ook een set gratis veters. Deze veters zijn 'wicked rad'.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>Bij het kopen van een paar schoenen van Ans&#178; krijgen de klanten ook een set gratis veters. Deze veters zijn 'wicked rad'.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[10]-=30;
                                
                                break;
                       
                                case 5:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
                                consoleUpdate("De shirts van Ans&#178; slijten erg snel sinds ze bij Ans&#178; nieuwe technieken zijn gaan toepassen.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De shirts van Ans&#178; slijten erg snel sinds ze bij Ans&#178; nieuwe technieken zijn gaan toepassen.</span>").appendTo("#nieuws_update");
								$("#alert").show();
                                daalkans[10]+=30;
								startprijs[10]-=18;
                                
                                break;
       
								case 6:
								if (time <= 284) {
								looptijd = time;
								duration = 20;
								}
								else {looptijd = 284;}
								consoleUpdate("De nieuwe T-shirts en broeken van Ans&#178; zijn heel gaaf en vliegen daarom de deur uit. Slowgold en Nice ondervinden hierdoor meer concurrentie.");
								$(".nav_nieuws").remove();
								$("<span class=nav_nieuws>De nieuwe T-shirts en broeken van Ans&#178; zijn heel gaaf en vliegen daarom de deur uit. Slowgold en Nice ondervinden hierdoor meer concurrentie.</span>").appendTo("#nieuws_update");
								$("#alert").show();
								startprijs[10]+=20;
								daalkans[10]-=30;
								daalkans[5]+=18;
								daalkans[7]+=18;
                                default:
                                break;
				}		
		break;		
				
		case 17:
		oudnieuws = 0;
		odds = 0;
		tries = 0;
		break;
		case 18:
		oudnieuws = 0;
		odds = 0;
		tries = 0;
		break;
		case 19:
		oudnieuws = 0;
		odds = 0;
		tries = 0;
		break;
		case 20:
		oudnieuws = 0;
		odds = 0;
		tries = 0;
		break;
}
 
 
}
 
var nieuwsCheck = function(){
 
var roll = Math.floor(Math.random()*100)
if (roll <= odds) {
oudnieuws = 1;
nieuwsChoice();

}
else {
tries++;
odds+=0.1;
}
} 


function calcTemps(){
	
	var milis_actuelle = new Date().getTime();
	
	var annee = new Date().getFullYear();
	var milis_future_noel = new Date('December 25 '+annee).getTime();
	
	
	var sec_temp = (milis_future_noel - milis_actuelle)/1000;
	var jour_restant = parseInt(sec_temp/(3600*24));
	sec_temp = sec_temp%(3600*24);
	var heure_restante = parseInt(sec_temp/3600);
	sec_temp = sec_temp%3600;
	var minute_restante = parseInt(sec_temp/60);
	sec_temp = parseInt(sec_temp%60);
	
	var paragraphe = document.getElementById("tempsAvNoel");
	paragraphe.innerHTML += jour_restant+" jour(s) ";
	paragraphe.innerHTML += heure_restante+" heure(s) ";
	paragraphe.innerHTML += minute_restante+" minute(s) ";
	paragraphe.innerHTML += sec_temp+" seconde(s) ";
	paragraphe.innerHTML += "avant le prochain Noel ";
	
}

function jour(){
	
	var paragraphe = document.getElementById("tempsAvNoel");
	
	var date_actu = new Date();
	
	var mois_arr = ['Janvier','Février','Mars','Avril','Mai','Juin','Juiller','Aout','Septembre','Octobre','Novembre','Décembre']
	var jours_arr = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi']
	
	var annee = date_actu.getFullYear();
	var mois = date_actu.getMonth();
	var jour = date_actu.getDay();
	var heure = date_actu.getHours();
	var minute = date_actu.getMinutes();
	var secondes = date_actu.getSeconds();
	
	paragraphe.innerHTML += "Aujourd'hui nous sommes le ";
	paragraphe.innerHTML += jours_arr[jour] + " ";
	paragraphe.innerHTML += date_actu.getDate() + " ";
	paragraphe.innerHTML += mois_arr[mois] + " ";
	paragraphe.innerHTML += annee + ", <br />";
	paragraphe.innerHTML += " Il est " + heure + " heure(s) ";
	paragraphe.innerHTML += minute + " minute(s) ";
	paragraphe.innerHTML += secondes + " secondes(s) <br /> Et il reste ";
	
	calcTemps();
}

function formulaire_valide(){
	
	var elems = document.forms["formulaire_concours"];
	var test = true;
	
	for (var i=0;i<elems.length;i++){
		if (elems.elements[i].value == "" && (i==0 || i==1 | i==2 || i==6 | i==7 || i==8 || i==9))
			test = false;
	}
	
	if (test)
		window.open("../html/paiement.html");
	else
		alert("Veuillez vérifiez les champs rentrés");
}

function choixPaiement(){
	
	var radioref = document.getElementsByClassName("chxPaiement");
	var cbref = document.getElementById("CBdiv");
	var paypalref = document.getElementById("Paypaldiv");
	var mobileref = document.getElementById("Mobilediv");
	
	var radiocheck = 0;
	
	for (var i=0;i<radioref.length;i++){
		if (radioref[i].checked)
			radiocheck = i;
	}
	
	switch (radiocheck){
		case 0: {
			cbref.hidden = false;
			paypalref.hidden = true;
			mobileref.hidden = true;
			break;
		}
		
		case 1: {
			paypalref.hidden = false;
			cbref.hidden = true;
			mobileref.hidden = true;
			break;
		}
		
		case 2: {
			mobileref.hidden = false;
			paypalref.hidden = true;
			cbref.hidden = true;
			break;
		}
	}
}

function verifPaiement() {
	var texteref = document.getElementsByClassName("texte");
	var test = false;
	
	var radioref = document.getElementsByClassName("chxPaiement");
	
	var radiocheck = 0;
	
	for (var i=0;i<radioref.length;i++){
		if (radioref[i].checked)
			radiocheck = i;
	}
	
	for (var i=0;i<texteref.length;i++){
		if(texteref[i].value == ""){
			if (radiocheck == 0 && i < 3)
				test = true;
			if (radiocheck == 1 && i >= 3 && i < 5)
				test = true;
			if (radiocheck == 2 && i >= 5)
				test = true;
		}
	}
	
	if(test)
		alert("Veuillez vérifier les champs rentrés");
	else{
		window.open("../html/confirmation.html");
		window.close();
	}
		
}

function tempo(){
	setTimeout(function(){window.close();},2000);
}
function musique() {
	var music = document.getElementById("music");
	music.play();
}



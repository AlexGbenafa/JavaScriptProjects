let longueur, largeur, surface,resultat;
let resultEl = document.getElementById("result");

function entreeValeur(){
	longueur = prompt('Donnez la longueur');    
	largeur= prompt('Donnez la largeur');       
}

function calculSurfaceRectangle(a, b){
	return longueur * largeur;
}

function afficherResultat(){
	resultEl.innerHTML ="La surface est : " + calculSurfaceRectangle(longueur, largeur);
}



Merol
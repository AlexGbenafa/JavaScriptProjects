//variables for the square
let cote, aire; 
let resumeSquareEl = document.getElementById("resumeSquare-el"); 
let resultSquareEl = document.getElementById("resultSquare-el");


//variables for the triangle
let base, hauteur;
let resumetriangleEl = document.getElementById("resumetriangle-el"); 
let resultriangleEl = document.getElementById("resultriangle-el");
 

//variables for the semi Circle
const PI = 3.14;
let rayon;
let resumeSemiCercleEl = document.getElementById("resumeSemiCercle-el"); 
let resultSemiCercleEl = document.getElementById("resultSemiCercle-el"); 

//variables for the Circle
let resumeCercleEl = document.getElementById("resumeCercle-el"); 
let resultCercleEl = document.getElementById("resultCercle-el"); 

//variables for the Lozenge
let grandeDiagonale, petiteDiagonale;
let resumeLozengeEl = document.getElementById("resumeLozenge-el"); 
let resultLozengeEl = document.getElementById("resultLozenge-el"); 

//variables for the Trapeze
let resumeTrapezeEl = document.getElementById("resumeTrapeze-el"); 
let resultTrapezeEl = document.getElementById("resultTrapeze-el"); 

//variable for the Parallelogram
let resumeParrallelogramEl = document.getElementById("resumeParallelogram-el"); 
let resultParrallelogramEl = document.getElementById("resultParallelogram-el"); 

//variable for the Pentagone
let resumePentagonEl = document.getElementById("resumePentagon-el");
let resultPentagonEl = document.getElementById("resultPentagon-el"); 

//variable for the Parallelogram
let resumeHexagonEl = document.getElementById("resumeHexagon-el"); 
let resultHexagonEl = document.getElementById("resultHexagon-el"); 


function squareArea(){
	cote = prompt('Entrez le cote du carré');
	aire = cote * cote;
	resumeSquareEl.textContent = "CÔTÉ = " + cote + "m";
	resultSquareEl.textContent = "AIRE = " + aire + "m²";
	document.getElementById("squar-cal").textContent = "Nouveau calcul";
}

function triangleArea(){
	base = prompt('Entrez la base du triangle');
	hauteur = prompt('Entrez la hauteur du triangle');
	aire = (base * hauteur) / 2;
	resumetriangleEl.textContent = "Base = " + base + "m" + "\n" + "Hauteur = " + hauteur + "m";
	resultriangleEl.textContent = "AIRE = " + aire + "m²";
	document.getElementById("triangle-cal").textContent = "Nouveau calcul";
}

function semiCercleArea(){
	rayon = prompt('Entrez le rayon du cercle');
	aire = 0.5 * PI * Math.pow(rayon,2);
	resumeSemiCercleEl.textContent = "Rayon = " + rayon + "m";
	resultSemiCercleEl.textContent = "AIRE = " + aire + "m²";
	document.getElementById("semiCercle-cal").textContent = "Nouveau calcul";
}

function cercleArea(){
	rayon = prompt('Entrez le rayon du cercle');
	aire = PI * Math.pow(rayon,2);
	resumeCercleEl.textContent = "Rayon = " + rayon + "m";
	resultCercleEl.textContent = "AIRE = " + aire + "m²";
	document.getElementById("cercle-cal").textContent = "Nouveau calcul";
}

function lozenge(){
	grandeDiagonale = prompt('Entrez la grande Diagonale du losange');
	petiteDiagonale = prompt('Entrez la petite Diagonale du losange');
	aire = (grandeDiagonale * petiteDiagonale) / 2;
	resumeLozengeEl.textContent = "Grande diagonale = " + grandeDiagonale + "m" + "\n" + "Petite diagonale = " + petiteDiagonale + "m";
	resultLozengeEl.textContent = "AIRE = " + aire + "m²";
	document.getElementById("lozenge-cal").textContent = "Nouveau calcul";
}

function trapeze(){
	grandeDiagonale = prompt('Entrez la grande Diagonale du trapèze');
	petiteDiagonale = prompt('Entrez la petite Diagonale du trapèze');
	hauteur = prompt('Entrez la hauteur du trapèze');
	aire = (parseInt(grandeDiagonale) + parseInt(petiteDiagonale)) * hauteur / 2;
	resumeTrapezeEl.textContent = "Grande diagonale = " + grandeDiagonale + "m" + "\n" + "Petite diagonale = " + petiteDiagonale + "m" + "\n" + "Hauteur" + "\n" + hauteur + "m";
	resultTrapezeEl.textContent = "AIRE = " + aire + "m²";
	document.getElementById("trapez-cal").textContent = "Nouveau calcul";
}

function parallelogram(){
	base = prompt('Entrez la base du parallelogramme');
	hauteur = prompt('Entrez la hauteur du parallelogramme');
	aire = base * hauteur;
	resumeParrallelogramEl.textContent = "Base = " + base + "m" + "\n" + "Hauteur = " + hauteur + "m";
	resultParrallelogramEl.textContent = "AIRE = " + aire + "m²";
	document.getElementById("parallelogram-cal").textContent = "Nouveau calcul";
}

function pentagon(){
	base = prompt('Entrez la base du pentagone');
	hauteur = prompt('Entrez la hauteur du pentagone');
	aire = (5 * ((base * hauteur) / 2));
	resumePentagonEl.textContent = "Base = " + base + "m" + "\n" + "Hauteur = " + hauteur + "m";
	resultPentagonEl.textContent = "AIRE = " + aire + "m²";
	document.getElementById("pentagon-cal").textContent = "Nouveau calcul";
}
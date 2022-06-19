let date, hours, minutes, seconds
let Hours = document.querySelector(".hours");
let Minutes = document.querySelector(".minutes");
let Seconds = document.querySelector(".seconds");

let hoursEl = document.querySelector("#hours-el");
let minutesEl = document.querySelector("#minutes-el");
let secondsEl = document.querySelector("#seconds-el");

let dateEl = document.querySelector("#date-el");

let click;

function ticTac(){ 
  let audio = new Audio('audio/tic.wav');
  audio.play();
}

function refreshClock(){
	date = new Date();
	hours = date.getHours();
	minutes = date.getMinutes();
	seconds = date.getSeconds();
	day = date.getDay();
	utcDate = date.getUTCDate()
	month = date.getMonth();
	year = date.getFullYear();

	Hours.style.transform = `translate(-50% , -100%) rotate( ${hours * 360 / 12 + minutes * 30 / 60}deg)`
	Minutes.style.transform = `translate(-50% , -100%) rotate( ${minutes* 360 / 60 + seconds * 6 / 60}deg)`
	Seconds.style.transform = `translate(-50% , -100%) rotate( ${seconds* 360 / 60}deg)`

	ticTac(); //Cliquer n'importe ou sur le navigateur pour lancer le son

	console.log(date);
	//console.log(chronos);

	if (hours<10) {
		hoursEl.textContent = "0" + hours + " : ";
	}
	else{
		hoursEl.textContent = " " + hours + " : ";
	}

	if (minutes<10) {
		minutesEl.textContent = " 0" + minutes + " : ";
	}
	else{
		minutesEl.textContent = " " + minutes + " : ";
	}

	if (seconds<10) {
		secondsEl.textContent = "0" + seconds + " ";
	}
	else{
		secondsEl.textContent = " " + seconds + " ";
	}

	switch(day){
		case 1 : day = "Lundi";break;
		case 2 : day = "Mardi";break;
		case 3 : day = "Mercredi";break;
		case 4 : day = "Jeudi";break;
		case 5 : day = "Vendredi";break;
		case 6 : day = "Samedi";break;
		case 7 : day = "Dimanche";break;
	}

	switch(month){
		case 1 : month = "Janvier";break;
		case 2 : month = "Fevrier";break;
		case 3 : month = "Mars";break;
		case 4 : month = "Avril";break;
		case 5 : month = "Mai";break;
		case 6 : month = "Juin";break;
		case 7 : month = "Juillet";break;
		case 8 : month = "Août";break;
		case 9 : month = "Septembre";break;
		case 10: month = "Octobre";break;
		case 11: month = "Novembre";break;
		case 12: month = "Décembre";break;
	}

	dateEl.textContent = day + " " + utcDate + " " + month + " " + year;

}



refreshClock();
window.setInterval(refreshClock,1000);
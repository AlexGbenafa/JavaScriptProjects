let firstCard;
let secondCard;
let cards =[];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sum = 0;
let player = {
	name : "EARN",
	pers : 200,
}

let messageEl = document.getElementById("message-el");
let cardEl = document.querySelector("#card-el");
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el");
let persEL = document.querySelector("#pers-el");

persEL.textContent = player.name + ": " + player.pers + "$";

	function getRandomCard(){
		let card = Math.floor(Math.random() * 13) + 1; //(0->12)+1 ==> (1->13)
		if (card === 1 ){ //in blackjack AS=1 =>10 and queen;king and j(11,12,13)=>10
			return 11;
		}else if(card === 11 || card === 12 || card === 13){
			return 10;
		}else{
			return card;
		}
	}

	function startGame(){
		isAlive = true 
		firstCard = getRandomCard();
 		secondCard = getRandomCard();
 	 	cards =[firstCard, secondCard];
 		sum = firstCard + secondCard;
		renderGame();  
	}

	function renderGame(){
		cardEl.textContent = "CARDS: ";
		for(let i = 0; i < cards.length; i++){
			cardEl.textContent += cards[i] + " , ";
		} 

		if (sum < 21){
			sumEl.textContent = "SUM:  " + sum;
			message = "Do you want to draw a new card? 🙂 "
			messageEl.textContent = message;
		}else if (sum === 21){
			sumEl.textContent = "SUM:  " + sum;
			message ="Wohoo! you've got a black jack! 🤩 ";
			hasBlackJack = true;
			player.pers+=20;
			persEL.textContent = player.name + ": " + player.pers + "$"
			messageEl.textContent = message;
		}else if (sum > 21){
			sumEl.textContent = "SUM:  " + sum;
			message = "You're out of the game! 🙁";
			isAlive = false;
			player.pers -= 20;
			persEL.textContent = player.name + ": " + player.pers + "$"
			messageEl.textContent = message;
		}

		if (player.pers <= 0) {
			alert("YOUR MONNEY : " + player.pers +"$" + "\nYOU'RE BROKE YOU CAN'T CONTINUE😭😭😭 \n GO MAKE SOME MONEY😝");
			location.reload();
		}
	}

	function newCard(){
		if(isAlive === true){
			let pickCard = getRandomCard();
			sum += pickCard;
			cards.push(pickCard)
			renderGame();
		}
	}

	

console.log("HasBlackJack: " + hasBlackJack);
console.log(isAlive);


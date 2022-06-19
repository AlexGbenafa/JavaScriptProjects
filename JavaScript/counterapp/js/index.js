let countel = document.getElementById("count-el");
let savel = document.getElementById("save");
let count = 0;

function increment() {
	count++;
	countel.innerText = count
}

function reset(){
	count = 0
	countel.innerText = count
	savel.innerText = ""
}

function save(){
	savel.textContent += count + " - "
	console.log(count)
}

let username = "Alex"
let message = "You have three new notifications"

console.log(username + "," + " " + message)

let messageToUser = "Alex you have three new notifications"
console.log(messageToUser)



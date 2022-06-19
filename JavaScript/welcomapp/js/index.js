let num1 = 8;
let num2 = 2;
let resultMessage = document.getElementById("result-el");
let result;
let logEL = document.getElementById("log-el");

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add(){
	result = num1 + num2;
	resultMessage.textContent = "RESULT: " + result
}

function substract(){
	result = num1 - num2;
	resultMessage.textContent = "RESULT: " + result
}

function divide(){
	result = num1 / num2;
	resultMessage.textContent = "RESULT: " + result
}

function multiply(){
	result = num1 * num2;
	resultMessage.textContent = "RESULT: " + result
}

let person = {
	name: "Alex",
	age: 21,
	country: "Senegal",
}

function logData(){
	logEL.textContent = person.name + " is " + person.age + " years old and he lives in " + person.country
}

logData();
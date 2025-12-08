let firstNumber = parseInt(Math.random(1,10) * 10);

const prompt = require("prompt-sync")();

let counter = 0;
for (random = 1; random <= 11; random++){

if (random == 1) {
console.log("20-10 = ");
let firstAnswer = prompt("");
    if (firstAnswer == 10) {
    console.log("Correct");
    counter++;
        }
    else {
    console.log("Incorrect, try again");
        }
}
else if (random == 2) {
console.log("30-10 = ");
let secondAnswer = prompt("");
    if (secondAnswer == 20) {
        console.log("Correct")
        counter++;
        }
    else {
    console.log("Incorrect, try again");
        }
}
else if (random == 3) {
console.log("50-20 = ");
let thirdAnswer = prompt("");
    if (thirdAnswer == 30) {
        console.log("Correct")
        counter++;
        }
    else {
    console.log("Incorrect, try again");
        }
}
else if (random == 4) {
console.log("30-20 = ")
let fourthAnswer = prompt("");
    if (fourthAnswer == 10) {
        console.log("Correct")
        counter++;
        }
    else {
    console.log("Incorrect, try again");
        }
    }
else if (random == 5) {
console.log("40-20 = ")
let fifthAnswer = prompt("");
    if (fifthAnswer == 20) {
        console.log("Correct")
        counter++;
        }
    else {
    console.log("Incorrect, try again");
        }
}
else if (random == 6) {
console.log("5-1 = ")
let sixthAnswer = prompt("");
    if (sixthAnswer == 4) {
        console.log("Correct")
        counter++;
        }
    else {
    console.log("Incorrect, try again");
        }
}
else if (random == 7) {
console.log("50-25 = ")
let seventhAnswer = prompt("");
    if (seventhAnswer == 25) {
        console.log("Correct")
        counter++;
        }
    else {
    console.log("Incorrect, try again");
        }
}
else if (random == 8) {
console.log("40-10 = ")
let eighthAnswer = prompt("");
    if (eighthAnswer == 30) {
        console.log("Correct")
        counter++;
        }
    else {
    console.log("Incorrect, try again");
        }
}
else if (random == 9) {
console.log("60-30 = ")
let ninthAnswer = prompt("");
    if (ninthAnswer == 30) {
        console.log("Correct")
        counter++;
        }
    else {
    console.log("Incorrect, try again");
        }
}
else if (random == 10) {
console.log("70-20 = ")
let tenthAnswer = prompt("");
    if (tenthAnswer == 50) {
        console.log("Correct")
        counter++;
        }
    else {
    console.log("Incorrect, try again");
        }
}
}

console.log("Final Score is ", counter)


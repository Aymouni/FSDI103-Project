console.log("Running the if statement file");

// if-statement condition (y/n)
// syntax
// if(condition){
// code to be run if the condition is TRUE
//}

let result = 50;

if (result > 80){
    console.log("You passed the exam");
}

let result2 = 50;
if (result == result2){
    console.log("The values are the same");
}

// ------
// == compare
// case 1: 5 == 5// true
// case 2: 5 == "5" // checks the value - true
// case 3: 5 === "5" // checks the value and data type - false

// if-else statement condition (y/n)
// syntax
//if(condition){
//code to be run if the condition is TRUE
//}else{
// code to be run if the condition is FALSE
//}

result = 50;
if (result > 40){
    console.log("You passed the exam");
}else{
    console.error("You did not pass the exam");
}

let waterTemp = 95;
if (waterTemp > 100){
    console.log("The water is boiling");
}else{
    console.log("The water is not boiling");
}

// else-if statement
// syntax
//if(condition){
//code to be run if the condition is TRUE
//}else{
// code to be run if the condition2 is TRUE
//}else{
// code to be run if the conditions is FALSE
//}

function ageCalculator(){
    let age = 30;

    if (age < 13){
        console.log("You are a child");
    }else if (age < 21){
        console.log("You are a teenager");
    }else if (age < 64){
        console.log("You are an adult");
    }else{
        console.log("You are a senior");
    }
}

// practice challenge 1
// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color  (use a prompt)
// ("green", "yellow", or "red") and tell the 
// bike what to do (Go!, Slow down, stop)

/*
let lightColor = prompt("Enter the traffic light color (green, yellow, or red):");

lightColor = lightColor.toLowerCase();
if (lightColor === "green") {
  alert("Go!");
} else if (lightColor === "yellow") {
  alert("Slow down");
} else if (lightColor === "red") {
  alert("Stop");
} else {
  alert("Invalid color. Please enter green, yellow, or red.");
}
*/

/*
// Challenge 1: Create a function to calculate ticket price
function calculateTicketPrice() {
  
  let age = prompt("Enter your age:");

  age = Number(age);

  if (age < 12) {
    console.log("Your ticket price is $5.");
  } else if (age >= 12 && age < 18) {
    alert("Your ticket price is $8.");
  } else {
    alert("Your ticket price is $10.");
  }
}

calculateTicketPrice();
*/

// Challenge 2: User Role Access Message

let userType = prompt("User Type"); // Change to "Editor" or "Guest"

if (userType === "Admin") {
  console.log("Full access");
  document.write("Welcome admin.");
} else if (userType === "Editor") {
  console.log("Access but limited actions");
  document.write("Welcome editor.");
} else {
  console.log("You do not have access");
  document.write("Error!");
}

// Button

function weatherOutfit(){
    //console.log("Weather outfit");
    const DIV = document.getElementById("results");
    let tmp = prompt("Enter the weather");

    //clear the CSS
    DIV.classList.remove("hot","cold");

    if(tmp < 15){
        DIV.innerHTML="Jacket";
        DIV.classList.add("cold");
    }else if(tmp < 25){
        DIV.innerHTML="Sweater";
    }else{
        DIV.innerHTML="T-Shirt";
        DIV.classList.add("hot");
    }

}
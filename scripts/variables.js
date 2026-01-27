console.log("variable");

// String
let firstName = "Aymen";
// Numerical
let myAge = 99;
// Boolean
let isProfessor = false;
let isStudent = true;

// Display the values
console.log(myAge);
console.log(firstName);
console.log(isProfessor);
console.log(isStudent);

// Mini challenge:
// Create a variable for your last name.
let lastName = "Saad";

// Create a variable for your height.
let myHeight = 6.1;

// Finally, show each variable separately in the console.
console.log(lastName);
console.log(myHeight);

// Arithmetics
let num1 = 10;
let num2 = 20;

let sum = num1 + num2;
let subs = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

console.log(sum);
console.log(subs);
console.log(mult);
console.log(div);

// Concatenation
//sconsole.log(num1 + " + " + num2 + "="+ sum);
console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} - ${num2} = ${subs}`);
console.log(`${num1} * ${num2} = ${mult}`);
console.log(`${num1} / ${num2} = ${div}`);

//Calculate the area of a circle

let radius = 5;
const pi = 3.14;
let area = pi * radius * radius;
console.log(`The area of the circle is ${area}`);

//Difference between variable and constant
let aVariable; // create a variable
aVariable = 20; // assign a value
aVariable = 5; 
//Create and assign a value
let anotherVariable = 30;

console.log(aVariable);

const weekDays = 7;
//weekDays = 9;
console.log(weekDays);
console.log("Functions");

//1. function declaration (creating the fn)
function sayHello(){
    console.log("Hello cohort 65");
}

//2. call/trigger/run/execute fn (code,console,user)
sayHello(); // code run
sayHello(); // code run
sayHello(); // code run

// Example 2. Fn with 1 parameter
function greetBird(birdName){
    document.write(`<p>Hello ${birdName}! Ready to Destroy some pigs!</p>`);
}

greetBird("Red");
greetBird("Blue");
greetBird("Yellow");

// Example 3. with 2 parameters
function greetPlayer(firstName, lastName){
    document.write(`<p>Welcome back ${firstName} ${lastName}</p>`);
}

greetPlayer("Aymen","Saad");
greetPlayer("Rollie","DelaCruz");

// Challenge 1: 

function doubleScore(score){
    let total = score * 2;
    console.log(`Your new score is: ${total}`);
}

doubleScore(10);
doubleScore(12);
doubleScore(8);


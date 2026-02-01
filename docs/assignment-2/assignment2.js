// Get temperature in C
let temperature = prompt("Enter temperature in Celsius:");

// Convert
temperature = Number(temperature);

// Convert Celsius to F
let fahrenheit = (temperature * 9 / 5) + 32;

// Result
console.log("Temperature in Fahrenheit:", fahrenheit);
document.write("Temperature in Fahrenheit: " + fahrenheit);

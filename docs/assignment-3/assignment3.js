// convert temperature
function convertTemperature(temperature, scale) {
  let convertedTemp;
  const resultText = document.getElementById("result");

  // remove previous classes
  resultText.classList.remove("hot", "cold", "mild");

  if (scale === "C") {
    convertedTemp = (temperature * 9 / 5) + 32;
    resultText.textContent = `${temperature}°C is ${convertedTemp.toFixed(2)}°F`;
  } else if (scale === "F") {
    convertedTemp = (temperature - 32) * 5 / 9;
    resultText.textContent = `${temperature}°F is ${convertedTemp.toFixed(2)}°C`;
  } else {
    resultText.textContent = "Invalid scale entered.";
    return;
  }

  // change style based on temperature
  if (convertedTemp >= 85) {
    resultText.classList.add("hot");
  } else if (convertedTemp <= 50) {
    resultText.classList.add("cold");
  } else {
    resultText.classList.add("mild");
  }
}

// user input
let temperature = Number(prompt("Enter the temperature:"));
let scale = prompt("Enter the scale (C or F):").toUpperCase();

// call function
convertTemperature(temperature, scale);

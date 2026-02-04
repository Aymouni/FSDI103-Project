const result = document.getElementById("result");
const thermoFill = document.getElementById("thermoFill");
const tableBody = document.querySelector("#conversionTable tbody");

// Conversion function
function convertTemperature(temp, scale) {
  if (scale === "C") {
    return (temp * 9 / 5) + 32;
  } else {
    return (temp - 32) * 5 / 9;
  }
}

// Update thermometer
function updateThermometer(celsius) {
  let height = Math.min(Math.max(celsius, 0), 100) * 2.5;
  thermoFill.style.height = height + "px";

  if (celsius <= 10) {
    thermoFill.style.backgroundColor = "#4a86e8"; // cold blue
  } else if (celsius <= 25) {
    thermoFill.style.backgroundColor = "#f6b26b"; // warm amber
  } else {
    thermoFill.style.backgroundColor = "#cc0000"; // hot red
  }
}

// Button events
document.getElementById("cToF").addEventListener("click", () => {
  let temp = Number(prompt("Enter temperature in Celsius:"));
  let converted = convertTemperature(temp, "C");
  result.textContent = `${temp}°C = ${converted.toFixed(2)}°F`;
  updateThermometer(temp);
});

document.getElementById("fToC").addEventListener("click", () => {
  let temp = Number(prompt("Enter temperature in Fahrenheit:"));
  let converted = convertTemperature(temp, "F");
  result.textContent = `${temp}°F = ${converted.toFixed(2)}°C`;
  updateThermometer(converted);
});

// Generate table
document.getElementById("generateTable").addEventListener("click", () => {
  tableBody.innerHTML = "";

  for (let c = 0; c <= 100; c += 10) {
    let f = convertTemperature(c, "C");
    tableBody.innerHTML += `
      <tr>
        <td>${c}</td>
        <td>${f.toFixed(2)}</td>
      </tr>
    `;
  }
});

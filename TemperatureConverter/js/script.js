const convertButton = document.getElementById("convertButton");
const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

convertButton.addEventListener("click", () => {
  const temperatureInput = parseFloat(document.getElementById("temperature").value);
  const selectedUnit = document.getElementById("unit").value;
  
  if (!isNaN(temperatureInput)) {
    let celsius, fahrenheit, kelvin;
    
    if (selectedUnit === "celsius") {
      celsius = temperatureInput;
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = celsius + 273.15;
    } else if (selectedUnit === "fahrenheit") {
      fahrenheit = temperatureInput;
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    } else if (selectedUnit === "kelvin") {
      kelvin = temperatureInput;
      celsius = kelvin - 273.15;
      fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    }
    
    celsiusResult.textContent = `Celsius: ${celsius.toFixed(2)}°C`;
    fahrenheitResult.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    kelvinResult.textContent = `Kelvin: ${kelvin.toFixed(2)}K`;
  } else {
    celsiusResult.textContent = "Celsius:";
    fahrenheitResult.textContent = "Fahrenheit:";
    kelvinResult.textContent = "Kelvin:";
  }
});

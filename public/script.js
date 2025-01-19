// public/script.js

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("tempToggle");
    const mainTemp = document.querySelector(".main-temp");
    const tempUnit = document.querySelector(".temp-unit");
    const feelsLike = document.getElementById("feels");

    // Save original temperatures
    const tempC = parseFloat(document.getElementById("tempC").value);
    const tempF = parseFloat(document.getElementById("tempF").value);
    const feelsC = parseFloat(document.getElementById("feelsC").value);
    const feelsF = parseFloat(document.getElementById("feelsF").value);

    // Toggle event listener
    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            // Fahrenheit
            mainTemp.textContent = tempF;
            tempUnit.textContent = "°F";
            feelsLike.innerHTML = `Feels like ${feelsF}<sup>°F</sup>`;
        } else {
            // Celsius
            mainTemp.textContent = tempC;
            tempUnit.textContent = "°C";
            feelsLike.innerHTML = `Feels like ${feelsC}<sup>°C</sup>`;
        }
    });
});

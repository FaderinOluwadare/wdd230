// get value for HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const windSpeed = document.querySelector("#speed");





const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Sunyani&units=imperial&appid=1c46ab2790dbd1be365348f91b70dda1";

  //call the fetch function
apiFetch(url);

/* 
this function takes the url and returns the data from the API
*/
async function apiFetch(apiURL) {
  const response = await fetch(apiURL);
  if (response.ok) {
    const data = await response.json();
    console.log(data); // this is for testing the call
    displayResults(data);
  } else {
    throw Error(await response.text());
  }
}

/* 
this function takes the data from the API and displays it on the page
*/
function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;
  windSpeed.innerHTML = weatherData.wind.speed.toFixed(2);
var windChill =
  35.74 +
  0.6215 * weatherData.main.temp.toFixed(0) -
  35.75 * Math.pow( weatherData.wind.speed.toFixed(2), 0.16) +
  0.4275 * weatherData.main.temp.toFixed(0) * Math.pow( weatherData.wind.speed.toFixed(2), 0.16);
var windChill = Math.round(windChill);
document.getElementById("windChill").innerHTML = windChill;
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.innerHTML = desc.toUpperCase();
}

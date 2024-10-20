const API_KEY = "a81a69bc1c09179a3b7fb42beecd37cb";

const weather = document.querySelector("#weather-text");
const city = document.querySelector("#weather-city");

const skycons = new Skycons({ color: "#FFCCCC" });
skycons.play();

function getSkyconIcon(weatherDescription) {
  const weatherIcons = {
    Clear: Skycons.CLEAR_DAY,
    Clouds: Skycons.CLOUDY,
    Rain: Skycons.RAIN,
    Snow: Skycons.SNOW,
    Drizzle: Skycons.SLEET,
    Thunderstorm: Skycons.THUNDER,
    Mist: Skycons.FOG,
    Haze: Skycons.FOG,
  };
  return weatherIcons[weatherDescription] || Skycons.PARTLY_CLOUDY_DAY;
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = data.main.temp;
      const description = data.weather[0].main;
      const cityName = data.name;

      city.innerText = cityName;
      weather.innerText = `${description} | ${temp}°C`;

      const iconType = getSkyconIcon(description);
      skycons.set("weather-icon", iconType);
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

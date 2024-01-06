const apikey = "d2ea135477e34a3f6d1a3b3a13e47f8e";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search_box = document.querySelector(".search input");
const search_btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function check_weather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h ";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "img/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "img/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "img/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "img/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "img/mist.png";
  } else if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "img/clouds";
  }

  document.querySelector(".weather").style.display = "block";
}

search_btn.addEventListener("click", () => {
  check_weather(search_box.value);
});

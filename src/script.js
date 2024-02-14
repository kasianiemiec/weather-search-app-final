let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

if (minutes < 10 || hours < 10) {
  let date = document.querySelector("#current-date");
  date.innerHTML = `${day} ${hours}:0${minutes}`;
} else {
  let date = document.querySelector("#current-date");
  date.innerHTML = `${day} ${hours}:${minutes}`;
}
function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let currentTemp = document.querySelector("#temp");
  currentTemp.innerHTML = temperature;
}
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city");
  let city = searchInput.value;
  let apiKey = "98bc9f158331o422ta5db05dbd90ba36";
  let units = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayTemperature);

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

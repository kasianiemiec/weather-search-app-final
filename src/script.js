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

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

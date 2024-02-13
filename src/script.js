function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

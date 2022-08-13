let dzien = new Date().toLocaleString("default", { weekday: "long" });
let godzina = new Date().toLocaleTimeString();
let czas = `${dzien} ${godzina}`;

let datadozmianyy = document.querySelector("#datadozmiany");
datadozmianyy.innerHTML = czas;

let szukajka = document.querySelector("#szukajka");
szukajka.addEventListener("submit", enter);

function enter(event) {
  event.preventDefault();
  let city = document.querySelector("#wpiszmiasto").value;
  wyszukaj(city);
}

function wyszukaj(city) {
  let apiKey = "991243b84955ce6858e2b1379960e636";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(wynik);
}

function wynik(response) {
  document.querySelector("#miastoo").innerHTML = response.data.name;
  document.querySelector("#temperaturka").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#wiater").innerHTML = Math.round(
    response.data.wind.speed
  );
}

wyszukaj("Lisbon");

let dzien = new Date().toLocaleString("en-EN", { weekday: "long" });
let godzina = new Date().toLocaleTimeString();
let czas = `${dzien} ${godzina}`;
let dnityg = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

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
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(wynik);
}

function wynik(response){
  let d1 = new Date(response.data.list[7].dt * 1000);
  let d2 = new Date(response.data.list[15].dt * 1000);
  let d3 = new Date(response.data.list[23].dt * 1000);
  let d4 = new Date(response.data.list[31].dt * 1000);
  let d5 = new Date(response.data.list[39].dt * 1000);
  let dayName1 = dnityg[d1.getDay()];
  let dayName2 = dnityg[d2.getDay()];
  let dayName3 = dnityg[d3.getDay()];
  let dayName4 = dnityg[d4.getDay()];
  let dayName5 = dnityg[d5.getDay()];
  document.querySelector("#miastoo").innerHTML = response.data.city.name;
  document.querySelector("#wiater").innerHTML = Math.round(response.data.list[0].wind.speed);
  document.querySelector("#tempjutro0").innerHTML = Math.round(response.data.list[0].main.temp);
  document.querySelector("#tempjutro1").innerHTML = Math.round(response.data.list[7].main.temp_max);
  document.querySelector("#tempjutro2").innerHTML = Math.round(response.data.list[15].main.temp_max);
  document.querySelector("#tempjutro3").innerHTML = Math.round(response.data.list[23].main.temp_max);
  document.querySelector("#tempjutro4").innerHTML = Math.round(response.data.list[31].main.temp_max);
  document.querySelector("#tempjutro5").innerHTML = Math.round(response.data.list[39].main.temp_max);
  document.querySelector("#pjutro0").setAttribute("src", `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`);
  document.querySelector("#pjutro1").setAttribute("src", `http://openweathermap.org/img/wn/${response.data.list[7].weather[0].icon}@2x.png`);
  document.querySelector("#pjutro2").setAttribute("src", `http://openweathermap.org/img/wn/${response.data.list[15].weather[0].icon}@2x.png`);
  document.querySelector("#pjutro3").setAttribute("src", `http://openweathermap.org/img/wn/${response.data.list[23].weather[0].icon}@2x.png`);
  document.querySelector("#pjutro4").setAttribute("src", `http://openweathermap.org/img/wn/${response.data.list[31].weather[0].icon}@2x.png`);
  document.querySelector("#pjutro5").setAttribute("src", `http://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png`);
  document.querySelector("#dzienjutro1").innerHTML = dayName1;
  document.querySelector("#dzienjutro2").innerHTML = dayName2;
  document.querySelector("#dzienjutro3").innerHTML = dayName3;
  document.querySelector("#dzienjutro4").innerHTML = dayName4;
  document.querySelector("#dzienjutro5").innerHTML = dayName5;
}


wyszukaj ("oslo");

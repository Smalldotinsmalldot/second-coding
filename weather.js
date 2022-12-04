const API_KEY = "1e8cf0432ea2976d6a3628dea95e96a3";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
  );
}
function onGeoError() {
  alert("위치를 알 수 없습니다. 날씨 정보를 제공하지 않습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

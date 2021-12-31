const API_KEY = "8def94ccba5fce3117125d975a77bc0e";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const temp = document.querySelector("#weather span:nth-child(2)");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = data.weather[0].main;
            temp.innerText = data.main.temp + "℃\n";
            city.innerText = data.name;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
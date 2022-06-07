var submitBtn = document.querySelector('.weather__app--submitBtn');
var weatherIcon = document.querySelector('.weather__app--icons');
var address = document.querySelector('.weather__app--address');
var dates = document.querySelector('.weather__app--date');
var temp = document.querySelector('.weather__app__footer-Temp');
var weatherCity = document.querySelector('.weather__app__footer-Weather');
var tempRange = document.querySelector('.weather__app__footer-TempRange');
var rain = document.querySelector('.weather-rain');

var date = new Date();

var month = date.getMonth() + 1;

switch (month) {
    case 1:
        month = 'January';
        break;
    case 2:
        month = 'February';
        break;
    case 3:
        month = 'March';
        break;
    case 4:
        month = ' April';
        break;
    case 5:
        month = 'May';
        break;
    case 6:
        month = 'June';
        break;
    case 7:
        month = 'July';
        break;
    case 8:
        month = 'August';
        break;
    case 9:
        month = 'September';
        break;
    case 10:
        month = 'October';
        break;
    case 11:
        month = 'November';
        break;
    case 12:
        month = 'December';
        break;                         
    default:
        break;
}

var daTe = date.getDate();
var year = date.getFullYear();
var day = date.getDay();
var hours = date.getHours();



switch (day) {
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
    case 7:
        day = 'Sunday';
        break;                       
    default:
        break;
}

submitBtn.addEventListener('click',function(){
    var cityInput = document.querySelector('.weather__app--input input').value ;
    let apiKeys = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=28fd15358cdecbc1a1dfef367e71acef` ;
    fetch(apiKeys)
    .then(function(response){
        return response.json();
    })
    .then(function(weather){
        console.log(weather);
        if(weather.weather[0].main == 'Clouds') {
            if( (hours>= 19) || (hours <=6) ) {
                weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-moon"></i>`;
            }
            else {
                weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;
            }
        }
        else {
            let hrElement;
  let counter = 100;
  for (let i = 0; i < counter; i++) {
    hrElement = document.createElement("HR");
    
      hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
      hrElement.style.animationDuration = 3 + Math.random() * 0.3 + "s";
      hrElement.style.animationDelay = Math.random() * 5 + "s";
   
    document.body.appendChild(hrElement);
  }
            if( (hours>= 19) || (hours <=6) ) {
                weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-moon-rain"></i>`;
            }
            else {
                weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i>`;
            }
        }
        address.innerText = `${weather.name}, ${weather.sys.country}`;
        temp.innerText = `Temp: ${weather.main.temp}°C`;
        weatherCity.innerText = `Weather: ${weather.weather[0].main}`;
        tempRange.innerText = `TempRange: ${weather.main.temp_min}°C / ${weather.main.temp_max}°C`;
        dates.innerText = `${day},${daTe} ${month} ${year}`;
    })
})



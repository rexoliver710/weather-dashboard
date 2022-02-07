var cityName=document.querySelector("#cityName")
var searchButton=document.querySelector(".search-button")
var dashboard=document.querySelector("#dashboard")
var fiveDayDashboard=document.querySelector("#Five-Day-Dashboard")
searchButton.addEventListener("click", function(){
    displayWeather(cityName.value)
})
function displayWeather(city){
    var apiWeather=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fde5264543663d69821ae77280e4b4e0&units=imperial`
    fetch(apiWeather)
    .then(function(response){
        return response.json()
    })
    .then(function(currentWeather){
        console.log(currentWeather)
        var oneCall=`https://api.openweathermap.org/data/2.5/onecall?lat=${currentWeather.coord.lat}&lon=${currentWeather.coord.lon}&exclude={part}&appid=fde5264543663d69821ae77280e4b4e0&units=imperial`
        fetch(oneCall)
        .then(function(response){
            return response.json()
        })
        .then(function(fiveDayWeather){
            console.log(fiveDayWeather)
            dashboard.innerHTML=`   <p>
            <h3>${currentWeather.name} (${moment(currentWeather.dt,"X").format("MM/DD/YYYY")}) <img src="http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png" alt=""></h3>
            <p>Temperature: ${currentWeather.main.temp} </p> 
            <p>Wind: ${currentWeather.wind.speed}</p>
            <p>Humidity: ${currentWeather.main.humidity}</p>
          <p>  UV Index: <span>${fiveDayWeather.current.uvi}</span></p>
        </p>`
        fiveDayDashboard.innerHTML=`
        <div class="col-sm-2">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">${moment(fiveDayWeather.daily[1].dt,"X").format("MM/DD/YYYY")}</h5>
                      <img src="http://openweathermap.org/img/wn/${fiveDayWeather.daily[1].weather[0].icon}@2x.png" alt="">
                      
                    <p class="card-text"><p>Temperature: ${fiveDayWeather.daily[1].temp.day}</p>
                      <p>Wind: ${fiveDayWeather.daily[1].wind_speed}MPH</p>
                      <p>Humidity: ${fiveDayWeather.daily[1].humidity}</p></p>
                    
                    </div>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">${moment(fiveDayWeather.daily[2].dt,"X").format("MM/DD/YYYY")}</h5>
                      <img src="http://openweathermap.org/img/wn/${fiveDayWeather.daily[2].weather[0].icon}@2x.png" alt="">

                      <p class="card-text"><p>Temperature: ${fiveDayWeather.daily[2].temp.day} F</p>
                      <p>Wind: ${fiveDayWeather.daily[2].wind_speed} MPH</p>
                      <p>Humidity: ${fiveDayWeather.daily[2].humidity}</p></p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-2">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">${moment(fiveDayWeather.daily[3].dt,"X").format("MM/DD/YYYY")}</h5>
                        <img src="http://openweathermap.org/img/wn/${fiveDayWeather.daily[3].weather[0].icon}@2x.png" alt="">
                        <p class="card-text"><p>Temperature:${fiveDayWeather.daily[3].temp.day} F</p>
                        <p>Wind: ${fiveDayWeather.daily[3].wind_speed} MPH</p>
                        <p>Humidity: ${fiveDayWeather.daily[3].humidity}</p></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">${moment(fiveDayWeather.daily[4].dt,"X").format("MM/DD/YYYY")}</h5>
                        <img src="http://openweathermap.org/img/wn/${fiveDayWeather.daily[4].weather[0].icon}@2x.png" alt="">
                        <p class="card-text"><p>Temperature: ${fiveDayWeather.daily[4].temp.day} F</p>
                        <p>Wind: ${fiveDayWeather.daily[4].wind_speed} MPH</p>
                        <p>Humidity: ${fiveDayWeather.daily[4].humidity}</p></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">${moment(fiveDayWeather.daily[5].dt,"X").format("MM/DD/YYYY")}</h5>
                        <img src="http://openweathermap.org/img/wn/${fiveDayWeather.daily[5].weather[0].icon}.png" alt="">
                        <p class="card-text"><p>Temperature: ${fiveDayWeather.daily[5].temp.day} F</p>
                        <p>Wind: ${fiveDayWeather.daily[5].wind_speed} MPH</p>
                        <p>Humidity: ${fiveDayWeather.daily[5].humidity}</p></p>
                      </div>
                    </div>
                  </div>
        `
        })
    })
    searchButton.addEventListener("click", function(){
        displayWeather(fiveDayDashboard.value)})
                                              
}

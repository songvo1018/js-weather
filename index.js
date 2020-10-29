import UT from 'unixtimejs'
 
function app() {
  let city = document.querySelector('#city')
  let temp = document.querySelector('#temp')
  let clouds = document.querySelector('#clouds')
  let icon = document.querySelector('#icon')
  let day = document.querySelector('#day')
  let month = document.querySelector('#month')
  let dateNow = new Date()
  
  function City() {
    const cityName = document.querySelector('#cityName').value
    if (cityName) {
      return cityName
    } else {
      return 'New York'
    }
  }

  console.log(City());
  let apiKey = 'a591a9d031357acbe38d0f8cf1a760f3'

  let apiLink = `http://api.openweathermap.org/data/2.5/weather?q=${City()}&appid=${apiKey}`

  getWeather(apiLink)

  function getWeather(link) {
    fetch(link)
      .then( resp => resp.json())
      .then(data => 
        {
          let response = data
          
          city.innerHTML = response.name,
          temp.innerHTML = (response.main.temp - 273).toFixed(0) ,
          clouds.innerHTML = response.weather[0].description,
          day.innerHTML = dateNow.getDate(),
          month.innerHTML = '0' + (dateNow.getMonth() + 1),
          iconIndex = response.weather[0].icon
          icon.src = `http://openweathermap.org/img/wn/${iconIndex}@2x.png`
        }) 
        
        
    }
}

const appBtn = document.querySelector('#appBtn')
appBtn.addEventListener('click', app)

window.addEventListener('keydown', function (event) {
  if (event.which == 13 || event.keyCode == 13) {
    app()
    return false;
  }
  return true;
});
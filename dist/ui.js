class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelslike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
    this.pressure = document.getElementById('w-pressure');
  }

  paintWeather1(weather) {
    this.desc.textContent = weather.description;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.icon}@2x.png`);
  }
  paintWeather2(weather) {
    this.string.textContent = `${Math.round(10*(weather.temp - 273.15))/10} °C`;
    this.humidity.textContent = `Relative Humidity: ${weather.humidity}%`;
    this.pressure.textContent = `Pressure: ${weather.pressure}`;
    this.feelslike.textContent = `Feels Like: ${Math.round(10*(weather.feels_like -273.15))/10}°C`;
  }
  paintWeather3(wind) {
    this.wind.textContent = `Wind Speed: ${wind.speed} MPH`;
  }
  paintLocation(city) {
    this.location.textContent = city;
  }
}
class Weather {
  constructor(city, country) {
    this.apiKey = '8606c331529ade72d74f7f6bf11f829b';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather1() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}}&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData.weather;
  }
  async getWeather2() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}}&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData.main;
  }
  async getWeather3() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}}&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData.wind;
  }

  // Get Location From API
  async getLocation() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}}&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData.name;
  }

  //Change weather location
  changeLocation(city, country){
    this.city = city;
    this.country = country;
  }
}
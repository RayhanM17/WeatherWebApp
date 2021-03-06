// Init storage
const storage = new Storage();
// Get Stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  // Change location
  weather.changeLocation(city, country);

  // Set location in LS
  storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather() {

  weather.getWeather1()
  .then(results => {
    ui.paintWeather1(results[0]);
  })
  .catch(err => console.log(err));
  weather.getWeather2()
  .then(results => {
    ui.paintWeather2(results);
  })
  .catch(err => console.log(err));
  weather.getWeather3()
  .then(results => {
    ui.paintWeather3(results);
  })
  .catch(err => console.log(err));

  weather.getLocation()
  .then(results => {
    ui.paintLocation(results);
  })
  .catch(err => console.log(err));

}
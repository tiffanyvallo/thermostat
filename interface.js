document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature;
    document.querySelector('#temperature').className = thermostat.energyUsage();
  }

  const thermostat = new Thermostat();
  updateTemperature();

  document.querySelector('#up').addEventListener('click', () => {
    thermostat.up(1);
    updateTemperature();
  });

  document.querySelector('#down').addEventListener('click', () => {
    thermostat.down(1);
    updateTemperature();
  });

  document.querySelector('#reset').addEventListener('click', () => {
    thermostat.reset();
    updateTemperature();
  });

  document.querySelector('#PSM_on').addEventListener('click', () => {
    thermostat.powersave = true;
    document.querySelector('#power-save-status').innerText = 'on';
    updateTemperature();
  })

  document.querySelector('#PSM_off').addEventListener('click', () => {
    thermostat.powersave = false;
    document.querySelector('#power-save-status').innerText = 'off';
    updateTemperature();
  })

  
    

  document.querySelector('#current-city').addEventListener('change', (event) => {
    event.preventDefault();
    const city = event.target.value;

    async function displayWeather(city) {    
      let weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`)
      let post = await weatherResponse.json()
      document.querySelector('#current-temp').innerText = `The current weather in ${city} is: ${capitalize(post.weather[0].description)}, ${Math.round(post.main.temp)}°C`
    }
  displayWeather(city);
  })
  
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  
});

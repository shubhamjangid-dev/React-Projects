import openWeatherMapApiKey from "../conf/conf";

async function getCurrentWeatherData(city, isCelsius) {
  try {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherMapApiKey}&units=${isCelsius ? "metric" : "imperial"}`).then(response => response.json());
  } catch (error) {
    throw error;
  }
}

async function getForcastedWeatherData(city, isCelsius) {
  try {
    return await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${openWeatherMapApiKey}&units=${isCelsius ? "metric" : "imperial"}`)
      .then(response => response.json())
      .then(response => response.list);
  } catch (error) {
    throw error;
  }
}

export { getCurrentWeatherData, getForcastedWeatherData };

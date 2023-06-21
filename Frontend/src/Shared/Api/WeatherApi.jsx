import { localURL } from "../../Config/WeatherConfig";
import axios from "axios";
export const getWetherDetails = async (cityName) => {
  try {
    const url = localURL + `weatherAPI?city=${cityName}&aqi=no`;
    const weatherData = await axios.get(url);
    return weatherData;
  } catch (error) {
    console.error("CATCH ERROR", error.message);
    return error;
  }
};

export const getWetherDayForecast = async (cityName) => {
  try {
    const url =
      localURL + `forecastWeather?days=1&city=${cityName}&aqi=no&alerts=yes`;
    const weatherData = await axios.get(url);
    return weatherData;
  } catch (error) {
    console.error("CATCH FORECAST ERROR", error.message);
    return error;
  }
};

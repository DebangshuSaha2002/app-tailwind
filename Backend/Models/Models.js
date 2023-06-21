const axios = require("axios");
const config = require("../Config/Config");
let data = [
  {
    id: 1,
    name: "Debangshu",
    age: 20,
  },
  {
    id: 2,
    name: "Prayanshu",
    age: 24,
  },
  {
    id: 3,
    name: "Prateek",
    age: 16,
  },
];
const getUserModel = () => {
  try {
    return data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

const addUserModel = (payload) => {
  try {
    const updatedData = [...data, payload];
    return updatedData;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

const editUserModel = (body, params) => {
  try {
    const val = data.find((ele) => ele.id === +params.id);
    val.name = body.name;
    return val;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

const deleteUserModel = (params) => {
  try {
    const updatedData = data.filter((ele) => ele.id !== +params.id);
    data = [...updatedData];
    return data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

const currentWeatherModel = async (queryparams) => {
  try {
    const data = await axios.get(
      config.weatherApi.url +
        "current.json?" +
        "key=" +
        config.weatherApi.key +
        "&q=" +
        queryparams.city +
        "&aqi=" +
        queryparams.aqi
    );
    return data.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

const forecastWeatherModel = async (queryparams) => {
  try {
    const data = await axios.get(
      config.weatherApi.url +
        "forecast.json?" +
        "key=" +
        config.weatherApi.key +
        "&q=" +
        queryparams.city +
        "&days=" +
        queryparams.days +
        "&aqi=" +
        queryparams.aqi +
        "&alerts=" +
        queryparams.alerts
    );
    return data.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

module.exports = {
  getUserModel,
  addUserModel,
  editUserModel,
  deleteUserModel,
  currentWeatherModel,
  forecastWeatherModel,
};

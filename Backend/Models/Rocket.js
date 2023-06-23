const axios = require("axios");
const fetch = require("cross-fetch");
const chalk = require("chalk");
const {
  rocketApi: { url },
} = require("../Config/Config");
const getRocket = async () => {
  try {
    const fetchrocketData = await fetch(url + "/rockets");
    const rockets = await fetchrocketData.json();
    return rockets;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
const isEmptyObject = (obj) => {
  if (obj === undefined || obj === null) {
    return true;
  }

  return Object.keys(obj).length === 0;
};

const getOneRocket = async (params) => {
  try {
    if (isEmptyObject(params)) {
      return "params is empty";
    }
    const fetchOneRocketData = await fetch(url + "/rockets/" + params.name);
    const getOneRocketData = await fetchOneRocketData.json();
    return getOneRocketData;
  } catch (error) {
    console.error(chalk.redBright(error.message));
    return error;
  }
};
module.exports = { getRocket, getOneRocket };

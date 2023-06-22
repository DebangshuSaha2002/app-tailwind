const axios = require("axios");
const fetch = require("cross-fetch");
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
module.exports = { getRocket };

const { getRocket } = require("../Models/Rocket");
const axios = require("axios");

const AllRockets = async (request, response) => {
  try {
    const RocketData = await getRocket();
    if (!!RocketData && RocketData.length === 0 && Array.isArray(RocketData)) {
      const EmptyData = {
        data: [],
        total: 0,
        message: "NO Data Available",
        status: 400,
      };
      response.status(400).json(EmptyData);
    } else {
      const successResponse = {
        data: RocketData || [],
        total: RocketData.length || 0,
        message: "SUCCESS",
        status: 200,
      };
      response.status(200).json(successResponse);
    }
  } catch (error) {
    console.error(error.message);
    const errorobj = {
      data: [],
      total: 0,
      message: error.message,
      status: 500,
    };
    response.status(500).json(errorobj);
  }
};

module.exports = { AllRockets };

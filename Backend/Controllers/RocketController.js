const { getRocket, getOneRocket } = require("../Models/Rocket");
const axios = require("axios");
const chalk = require("chalk");
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
      status: 500 || "Internal server Error",
    };
    response.status(500).json(errorobj);
  }
};

const OneRockets = async (request, response) => {
  try {
    const params = request.query;
    const OneRocketData = await getOneRocket(params);
    if (OneRocketData === "params is empty") {
      const EmptyParams = {
        total: params.length,
        message: "No params found",
        status: 400,
      };
      response.status(400).json(EmptyParams);
      return;
    }
    if (!!OneRocketData && OneRocketData.length == 0) {
      const EmptyData = {
        data: [],
        total: 0,
        message: "NO Data Available",
        status: 400,
      };
      response.status(400).json(EmptyData);
    } else {
      const successObj = {
        total: OneRocketData.length,
        message: "SUCCESS",
        status: 200,
        data: OneRocketData,
      };
      response.status(200).json(successObj);
    }
  } catch (error) {
    console.error(chalk.bgRedBright(error.message));
    const errorObj = {
      data: [],
      total: 0,
      message: error.message,
      status: 500 || "Internal server Error",
    };
    response.status(500).json(errorObj);
  }
};

module.exports = { AllRockets, OneRockets };

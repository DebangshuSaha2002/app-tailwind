const router = require("express").Router();
// const express = require("express");
// const router = express.router;
const {
  getUser,
  createUser,
  editUser,
  deleteUser,
  checkMethods,
  currentWeather,
  forecastWeather,
} = require("../Controllers/Controller");

const morgan = require("morgan");

//Get User Data
router.get("/user", getUser);

//create User
router.post("/user", createUser);

//edit data
router.put("/user", editUser);

//delete data
router.delete("/user", deleteUser);

//checkMethods - OS
router.get("/methods", checkMethods);

//WEATHER API
router.get("/weatherAPI", currentWeather);

//Weather Forecast API
router.get("/forecastWeather", forecastWeather);

module.exports = router;

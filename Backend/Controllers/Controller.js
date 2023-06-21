const os = require("os");
const browser = require("browser-detect");

const {
  getUserModel,
  addUserModel,
  editUserModel,
  deleteUserModel,
  currentWeatherModel,
  forecastWeatherModel,
} = require("../Models/Models");

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

//Get User
const getUser = (request, response) => {
  try {
    const userdata = getUserModel();
    const responseObj = {
      total: userdata.length || 0,
      data: undefined || [],
      message: "SUCCESS" || "",
      status: 200,
    };
    response.status(200).json(responseObj);
  } catch (error) {
    console.log(error.message);
    const errorobj = {
      total: 0,
      data: [],
      message: error.message,
      status: 400,
    };
    response.status(400).json(errorobj);
  }
};

//Create User
const createUser = (request, response) => {
  const payload = { ...request.body };
  try {
    const userData = addUserModel(payload);
    const dataobj = {
      message: "User Added Successfully",
      status: 201,
    };
    response.status(201).json(dataobj);
  } catch (error) {
    console.log(error.message);
    const errorobj = {
      message: error.message,
      status: 400,
      data: request.body,
    };
    response.status(201).json(errorobj);
  }
};

//Edit User
const editUser = (request, response) => {
  try {
    const body = request.body;
    const params = request.query;
    const editedData = editUserModel(body, params);
    const dataobj = {
      status: 201,
      message: "Details Updated Successfully",
      data: editedData || {},
    };
    response.status(201).json(dataobj);
  } catch (error) {
    console.log(error.message);
    const objerror = {
      status: 400,
      message: error.message,
    };
    response.status(400).json(objerror);
  }
};

//Delete User
const deleteUser = (request, reponse) => {
  try {
    const params = request.query;
    deleteUserModel(params);
    deleteObj = {
      status: 200,
      message: "User Deleted Successfully",
    };
    response.status(200).json(deleteObj);
  } catch (error) {
    console.log(error.message);
    delerrorObj = {
      status: 400,
      message: error.message,
    };
    response.status(400).json(delerrorObj);
  }
};

//check Methods - OS
const checkMethods = (request, response) => {
  const checkMethodsObj = {
    currentOS: os.platform(),
    defaultDir: os.tmpdir(),
    networkInterface: os.networkInterfaces(),
    typeOS: os.type(),
    uptimeOS: os.uptime(),
    version: os.version(),
    browserDetect: browser(request.headers["user-agent"]),
  };
};

const currentWeather = async (request, response) => {
  try {
    const queryparams = request.query;
    const data = await currentWeatherModel(queryparams);
    response.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    const errorobj = {
      total: 0,
      data,
      message: error.message,
      status: 400,
    };
    response.status(400).json(errorobj);
  }
};

const forecastWeather = async (request, response) => {
  try {
    const queryparams = request.query;
    const data = await forecastWeatherModel(queryparams);
    response.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    const errorobj = {
      total: 0,
      data,
      message: error.message,
      status: 400,
    };
    response.status(400).json(errorobj);
  }
};

module.exports = {
  getUser,
  createUser,
  editUser,
  deleteUser,
  checkMethods,
  currentWeather,
  forecastWeather,
};

const express = require("express");
const chalk = require("chalk");
const app = express();
const os = require("os");
const browser = require("browser-detect");
const morgan = require("morgan");
const { default: browserDetect } = require("browser-detect");
app.use(express.json()); //To parse Payload
app.use(morgan("dev")); //Used for logging, then what is the end point , which API is being called
const PORT = 8080 || process.env.PORT;

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

//GET data
app.get("/user", (request, response) => {
  response.status(200).json({
    total: data.length,
    data,
  });
});

//create data
app.post("/user", (request, response) => {
  data = [...data, request.body];
  response.status(201).json({
    message: "Data inserted",
    status: 201,
    data: request.body,
  });
});

//edit data
app.put("/user", (request, response) => {
  const body = request.body;
  const params = request.query;
  const val = data.find((ele) => ele.id === +params.id);
  val.name = body.name;

  response.status(201).json({
    status: 201,
    message: "Details Updated",
  });
});

//delete data
app.delete("/user", (request, response) => {
  const params = request.query;
  const updatedData = data.filter((ele) => ele.id !== +params.id);
  data = [...updatedData];
  response.status(200).json({
    status: 200,
    message: "User Deleted Successfully",
  });
});

app.get("/methods", (request, response) => {
  response.status = 200;
  response.json({
    currentOS: os.platform(),
    defaultDir: os.tmpdir(),
    networkInterface: os.networkInterfaces(),
    typeOS: os.type(),
    uptimeOS: os.uptime(),
    version: os.version(),
    browserDetect: browser(request.headers["user-agent"]),
  });
});

app.listen(PORT, () => {
  console.log(chalk.red("Your server is running on", chalk.blueBright(PORT)));
});

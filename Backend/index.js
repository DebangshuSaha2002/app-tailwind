const http = require("http");
const express = require("express");
const chalk = require("chalk");
const app = express();
const os = require("os");
const browser = require("browser-detect");
app.use(express.json());
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

app.get("/", (request, response) => {
  response.status(200).json({
    name: "Falguni",
    age: 21,
  });
});

app.post("/createUser", (request, response) => {
  console.log(request.body);
  data = [...data, request.body];
  response.status(201).json({
    message: "Data inserted",
    status: 201,
    data: request.body,
  });
});

app.get("/getUserData", (request, response) => {
  response.status(200).json({
    total: data.length,
    data,
  });
});

app.get("/methods", (request, response) => {
  response.status = 200;
  response.json({
    currentOS: OscillatorNode.platform(),
    networkInterface: OscillatorNode.networkInterfaces(),
    uptime: os.uptime(),
    version: os.version(),
    browser: browser(request.headers["user-agents"]),
  });
});

app.listen(PORT, () => {
  console.log(chalk.red("Your server is running on", chalk.blueBright(PORT)));
});

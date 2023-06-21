const express = require("express");
const chalk = require("chalk");
const app = express();
const os = require("os");
const browser = require("browser-detect");
const morgan = require("morgan");
const router = require("./Routes/routes");

app.use(express.json()); //To parse Payload
app.use(morgan("dev")); //Used for logging, then what is the end point , which API is being called
const PORT = 8080 || process.env.PORT;

app.use(router);

app.listen(PORT, () => {
  console.log(chalk.red("Your server is running on", chalk.blueBright(PORT)));
});

const http = require("http");
const express = require("express");
const app = express();
console.log("Hello");
app.use("/", (reg, res) => {
  res.status(200).json({
    name: "Debangshu",
    age: 22,
  });
});
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("Hello Node");
//     res.end();
//     console.log("Hello Node");
//   })
//   .listen(8080);

app.listen(PORT, () => {
  console.log("Your server is running on ", PORT);
});

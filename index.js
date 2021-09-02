const express = require("express");
const cors = require("cors");
require("dotenv").config();

console.log(process.env.USER);
console.log(process.env.HOME);
console.log(process.env.PORT);

const PORT = process.env.PORT || 5000;

const server = express();

server.use(express.json());

server.use(cors());

server.get("/", (req, res) => {
  res.send(`<h1>Web 45 ROCKS!</h1>`);
});

server.get("/api", (req, res) => {
  res.json({ message: "Web 45 is awesome!" });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

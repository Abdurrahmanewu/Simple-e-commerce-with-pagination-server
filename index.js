const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleare

app.use(cors());
app.use(express.json());

// All API

app.get("/", (req, res) => {
  res.send("simple e-commerce server is running");
});
app.listen(port, () => {
  console.log(`simple e-commerce server is running on port: ${port}`);
});

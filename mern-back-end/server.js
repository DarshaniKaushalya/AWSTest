const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./server/routes/router");
const connectDatabase = require("./server/database/database");
const path = require("path");
const cors = require("cors");

//environment variable
env.config();

const PORT = process.env.PORT;

//connectDB
connectDatabase();

app.use(cors());
//json format
app.use(bodyParser.json({ extended: true }));

//set view engine
app.set("view engine", "ejs"); //you can specify your tamplate in here ejs/html/pug

app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "server/uploads"))); //Worked
//to loading images on browser || not working
// app.use('/public', express.static(path.join(__dirname, 'uploads')));

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello From server",
  });
});

app.post("/data", (req, res, next) => {
  res.status(200).json({
    message: req.body,
  });
});
//Route
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

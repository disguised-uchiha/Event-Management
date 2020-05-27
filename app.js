const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
//for .env
require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://harsh:${process.env.PWD}@cluster0-tnkfh.mongodb.net/eventDB?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const app = express();
// My Routes
const homeRoute = require("./routes/home-routes");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({extended: true}));

app.use(homeRoute);

app.use((req, res, next) => {
  res.status(404);
  res.render("404", {
    pageTitle: "404 Error",
  });
});

app.listen(3000);

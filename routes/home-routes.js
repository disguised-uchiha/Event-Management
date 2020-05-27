const express = require("express");

const route = express.Router();
// creating a local card array for lorem purpose
const singupController = require("../controllers/signup");
const loginController = require("../controllers/login");

const cards = [
  {
    cardImage: "/images/1.jpg",
  },
  {
    cardImage: "/images/1.jpg",
  },
  {
    cardImage: "/images/1.jpg",
  },
  {
    cardImage: "/images/1.jpg",
  },
];
route.get("/", (req, res, next) => {
  res.render("index", {
    pageTitle: "RCOE Events",
    cards: cards,
  });
});

route.get("/login", loginController.getLoginPage);

route.post("/login/login-type", (req, res, next) => {
  res.render("./login/login-type", {
    pageTitle: "Login Type",
  });
});

route.post("/login/guest-login", (req, res, next) => {
  res.render("./login/guest-login", {
    pageTitle: "Guest Login",
  });
});

route.post("/login/author-login", (req, res, next) => {
  res.render("./login/author-login", {
    pageTitle: "Author Login",
  });
});

route.get("/signup", singupController.getSignUpForm);

route.post("/signup/submit", singupController.getUserInformation);

route.post("/manage", (req, res, next) => {
  res.render("manage", {
    pageTitle: "Create/Manage",
  });
});

route.get("/create", (req, res, next) => {
  res.render("create", {
    pageTitle: "Create Events",
  });
});

module.exports = route;

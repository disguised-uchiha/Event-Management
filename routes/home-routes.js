const express = require("express");

const route = express.Router();

// all the controllers
const singupController = require("../controllers/signup");
const loginController = require("../controllers/login");
const createEventController = require("../controllers/createEvent");
const homePageController = require("../controllers/homepage");
route.get("/", homePageController.home);

route.get("/login", loginController.getLoginPage);

route.post("/login/login-type", loginController.loginType);

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
// TODO: convert the get create to POST 
route.get("/create", (req, res, next) => {
  res.render("create", {
    pageTitle: "Create Events",
  });
});

route.post("/createEvent", createEventController.createEvent);

module.exports = route;

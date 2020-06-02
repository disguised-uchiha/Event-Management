const userModel = require("../models/signup");

module.exports.getUserInformation = (req, res, next) => {
  let [firstName, lastName] = req.body.name;

  let user = new userModel({
    firstName: firstName,
    lastName: lastName,
    email: req.body.email,
    password: req.body.pwd,
  });
  user
    .save()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  res.render("signup", {
    pageTitle: "Sign Up",
  });
};

module.exports.getSignUpForm = (req, res, next) => {
  res.render("signup", {
    pageTitle: "SignUp",
  });
};

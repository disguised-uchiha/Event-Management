const userModel = require("../models/signup");

module.exports.getUserInformation = (req, res, next) => {
  let userData = req.body;
  let [firstName, lastName] = userData.name;
  let email = userData.email;
  let pwd = userData.pwd;

  let user = new userModel({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: pwd,
    });
    user.save().then(res => console.log(res)).catch(err => console.log(err));

  res.render("signup", {
    pageTitle: "Sign Up",
  });
};

module.exports.getSignUpForm = (req, res, next) => {
  res.render("signup", {
    pageTitle: "SignUp",
  });
};
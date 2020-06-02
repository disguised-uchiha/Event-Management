const userModel = require("../models/signup");

module.exports.getLoginPage = (req, res, next) => {
  res.render("./login/login", {
    pageTitle: "login",
  });
};
//Here I used async await, instead of that you could also use Promises.
module.exports.loginType = async (req, res, next) => {
  let loginData = req.body;
  let loginUserEmail = loginData.email;
  let loginUserPwd = loginData.pwd;
  let doc = await userModel.findOne({ email: loginUserEmail }, (err, res) => {
    if (err) console.log("error from doc" + err);
  });

  if (doc.email === loginUserEmail && doc.password === loginUserPwd) {
    res.render("./login/login-type", {
      pageTitle: "Login Type",
      user: doc.firstName + "  " + doc.lastName,
    });
  } else {
    res.render("./login/login", {
      pageTitle: "Login Again",
    });
  }
};

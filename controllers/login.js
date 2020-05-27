module.exports.getLoginPage = (req, res, next) => {
    res.render("./login/login", {
      pageTitle: "login",
    });
  }


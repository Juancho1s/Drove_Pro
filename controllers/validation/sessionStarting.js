class sessionStarting {
  static async clearSigup(req, res) {
    //req.userSession.destroy();
    res.render("register", {
      title: "SignUp",
    });
  }

  static async clearLogin(req, res) {
    //req.userSession.destroy();
    res.render("log_in", {
      title: "Login",
    });
  }

  static async checkUserSession(req, res) {
    if (req.userSession.userData) {
      next();
    } else {
      res.redirect("/login");
    }
  }
}

module.exports = sessionStarting;
class sessionStarting {
  static async clearSigup(req, res) {
    req.session.destroy();
    res.render("register", {
      title: "SignUp",
    });
  }

  static async clearLogin(req, res) {
    req.session.destroy();
    res.render("log_in", {
      title: "Login",
      user: req.session.userData,
    });
  }

  static async checkUserSession(req, res) {
    if (req.session.userData) {
      next();
    } else {
      res.redirect("/login");
    }
  }
}

module.exports = sessionStarting;



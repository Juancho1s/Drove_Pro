class sessionStarting {
  static async clearSigup(req, res) {
    req.session.destroy();
    res.render("register", {
      title: "SignUp",
      stay: false
    });
  }

  static async clearLogin(req, res) {
    req.session.destroy();

    res.render("log_in", {
      title: "Login",
      stay: false
    });
  }

  static async checkUserSession(req, res, next) {
    if (req.session.userData) {
      next();
    } else {
      res.redirect("/login");
    }
  }
}

module.exports = sessionStarting;



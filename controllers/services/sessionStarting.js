class sessionStarting {

  static async clearSigup(req, res) {
    req.session.destroy();
    res.render("register", {
      title: "DrovePro-Login",
    });
  }

  static async clearLogin(req, res) {
    req.session.destroy();
    res.render("log_in", {
      title: "DrovePro-Login",
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
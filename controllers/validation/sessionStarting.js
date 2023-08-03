class sessionStarting {
  static destroySession(req, res) {
    req.session.destroy();
    res.render("login",{
      title: "DrovePro-Login"
    });
  }

  static checkUserSession(req, res) {
    if (req.session.userData) {
      next();
    } else {
      res.redirect("/home");
    }
  }
}

module.exports = sessionStarting;
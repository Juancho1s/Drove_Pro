class sessionStarting {
  static async destroySession(req, res) {
    //req.userSession.destroy();
    res.render("log_in",{
      title: "DrovePro-Login"
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
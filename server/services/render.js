/* routes are getting rendered and exported in ths file , with get method.*/
exports.homeRoutes = (req, res) => {
  res.render("index");
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.user_update = (req, res) => {
  res.render("user_update");
};

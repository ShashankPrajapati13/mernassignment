var jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  try {
    const {token} = req.cookies;
    console.log(req.cookies, "cookie");
    console.log(token)

    if (!token) {
      return res.status(401).json({ message: "Sorry your are not loggedIn" });
    }
    const jwtSecret = "djflhsdlfsidfksdjfksldkfj";

    const decodedData = jwt.verify(token, jwtSecret); // inserting jwt secret here
    req.user = { username: decodedData?.username };
    next();
  } catch (err) {
    return res.status(500).json(err);
  }
};

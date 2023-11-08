const jwt = require("jsonwebtoken");

exports.sendToken = (user, statusCode, res) => {
  // I am storing my jwt secret here only rather than storing it in environment file

  const jwtSecret = "djflhsdlfsidfksdjfksldkfj";
  const token = jwt.sign({ username: user?.username }, jwtSecret, {
    expiresIn: "2d",
  });
  console.log(token);
  const cookieOption = {
    expires: new Date(Date.now() + 2 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, cookieOption).json({
    message: "success",
    user,
    token,
  });
};

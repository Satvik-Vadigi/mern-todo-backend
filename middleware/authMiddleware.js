const JWT = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    //get token bearer
    const token = req.headers["authorization"].split(" ")[1];
    JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Un-Authorized User",
        });
      } else {
        req.user = decoded;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Please provide Auth token",
      error,
    });
  }
};

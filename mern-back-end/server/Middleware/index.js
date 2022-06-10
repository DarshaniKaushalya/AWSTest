const jwt = require("jsonwebtoken");

/**
 * Signin is require
 */
exports.requireSignin = async (req, res, next) => {
  if (req.headers.authorization) {
    const token = await req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } else {
    return res.status(400).json({ message: "Access denied" });
  }
  next();
};
/**
 * Signin is require as buyer
 */
exports.buyerMiddleware = async (req, res, next) => {
  if (req.user.role !== "buyer") {
    return await res.status(400).json({ message: "Access denied" });
  }
  next();
};
/**
 * Signin is require as seller
 */
exports.adminMiddleware = async (req, res, next) => {
  if (req.user.role !== "admin") {
    return await res.status(400).json({ message: "Access denied" });
  }
  next();
};

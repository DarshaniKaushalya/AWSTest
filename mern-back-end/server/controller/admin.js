const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");

/**
 *Admin Signup
 */
exports.signup = async (req, res) => {
  try {
    await User.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (user)
        return res.status(400).json({
          message: "Admin already registered",
        });
      const { firstName, lastName, email, password } = req.body;

      const hash_password = await bcrypt.hash(password, 10);

      const _user = new User({
        firstName,
        lastName,
        email,
        hash_password,
        username: shortid.generate(),
        role: "admin",
      });

      _user.save((error, data) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }
        if (data) {
          return res.status(201).json({
            message: "Admin created Successfully",
          });
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
};
/**
 *Admin Signin
 */
exports.signin = async (req, res) => {
  try {
    await User.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (error) return req.status(400).json({ error });
      if (user) {
        const isPassword = await user.authenticate(req.body.password);
        if (isPassword && user.role === "admin") {
          const token = jwt.sign(
            { _id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
          );
          const { id, firstName, lastName, email, role, fullName } = user;
          res.cookie("token", token, { expiresIn: "1d" });
          res.status(200).json({
            token,
            user: { id, firstName, lastName, email, role, fullName },
          });
        } else {
          return res.status(400).json({
            message: "Invalid Password",
          });
        }
      } else {
        return res.status(400).json({ message: "Something went wrong" });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.signout = async (req, res) => {
  await res.clearCookie("token");
  res.status(200).json({
    message: "Signout successful...!",
  });
};

const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const shortid = require("shortid");

const generateJwtToken = (_id, role) => {
  return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

exports.signup = async (req, res) => {
  try {
    await User.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (user)
        return res.status(400).json({
          message: "User already registered",
        });
      const { firstName, lastName, email, password } = req.body;

      const hash_password = await bcrypt.hash(password, 10);

      const _user = new User({
        firstName,
        lastName,
        email,
        hash_password,
        username: shortid.generate(),
      });

      _user.save((error, user) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }
        if (user) {
          const token = generateJwtToken(user._id, user.role);
          const { _id, firstName, lastName, email, role, fullName } = user;
          return res.status(201).json({
            token,
            user: { _id, firstName, lastName, email, role, fullName },
          });
        }
        if (data) {
          return res.status(201).json({
            message: "User created Successfully",
          });
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
};

exports.signin = async (req, res) => {
  try {
    await User.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (error) return req.status(400).json({ error });
      if (user) {
        const isPassword = await user.authenticate(req.body.password);

        if (isPassword && user.role === "buyer") {
          // const token = jwt.sign(
          //   { _id: user._id, role: user.role },
          //   process.env.JWT_SECRET,
          //   { expiresIn: "1h" }
          // );
          const token = generateJwtToken(user._id, user.role);
          const { id, firstName, lastName, email, role, fullName } = user;
          res.status(200).json({
            token,
            user: { id, firstName, lastName, email, role, fullName },
          });
        } else {
          return res.status(400).json({
            message: "Something went wrong",
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

const { userSchema } = require("../models");

// GET: "/"
const getAllUsers = async (req, res) => {};

// GET: "/loggedin/:email"
const getLoggedInUsers = async (req, res) => {
  const email = req.params.email;

  if (email) {
    userSchema
      .findOne({ email })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

// GET: "/instructors"
const getInstructors = async (req, res) => {
  userSchema
    .find({ role: "instructor" })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// POST: "/register"
const createUser = async (req, res) => {
  const userInfo = req.body;
  const user = new userSchema(userInfo);
  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { getAllUsers, getLoggedInUsers, getInstructors, createUser };

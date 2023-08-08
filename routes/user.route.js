const express = require("express");
const {
  getAllUsers,
  getLoggedInUsers,
  getInstructors,
  createUser,
} = require("../controllers");

const router = express.Router();

// GET: "/"
router.get("/", getAllUsers);

// GET: "/loggedin/:email"
router.get("/loggedin/:email", getLoggedInUsers);

// GET: "/instructors"
router.get("/instructors", getInstructors);

// POST: "/register"
router.post("/register", createUser);

module.exports = router;

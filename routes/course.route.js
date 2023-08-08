const express = require("express");
const { getAllCourses, addCourse } = require("../controllers");

const router = express.Router();

// GET: "/"
router.get("/", getAllCourses);

// POST: "/"
router.post("/", addCourse);

module.exports = router;

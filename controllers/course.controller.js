const { courseSchema } = require("../models");

// GET: "/"
const getAllCourses = async (req, res) => {
  courseSchema
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// POST: "/"
const addCourse = async (req, res) => {
  const courseInfo = req.body;
  console.log(courseInfo);

  const course = new courseSchema(courseInfo);

  course
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { getAllCourses, addCourse };

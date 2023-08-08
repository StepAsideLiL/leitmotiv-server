const {
  getAllUsers,
  getLoggedInUsers,
  getInstructors,
  createUser,
} = require("./user.controller");
const { getAllCourses, addCourse } = require("./course.controller");

module.exports = {
  getAllUsers,
  getLoggedInUsers,
  getInstructors,
  createUser,

  getAllCourses,
  addCourse,
};

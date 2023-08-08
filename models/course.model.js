const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    instructorName: { type: String },
    instructorEmail: { type: String },
    instructorImage: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);

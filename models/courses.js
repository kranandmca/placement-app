const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Courses = mongoose.model('Courses', courseSchema);

module.exports = Courses;

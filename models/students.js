const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    batch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'batches',
    },
    status: {
      type: String,
      required: true,
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courses',
      },
    ],
    course_scores: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course_scores',
      },
    ],
    interviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'interviews',
      },
    ],
    interviews_results: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'interviews_results',
      },
    ],
  },
  { timestamps: true }
);

const Students = mongoose.model('Students', studentSchema);

module.exports = Students;

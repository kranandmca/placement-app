const mongoose = require('mongoose');

const courseScoreSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Courses',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Students',
    },
    score: {
      type: String,
    },
  },
  { timestamps: true }
);

const Course_Scores = mongoose.model('Course_Scores', courseScoreSchema);

module.exports = Course_Scores;

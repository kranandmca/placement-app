const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
      unique: true,
    },
    interview_date: {
      type: String,
      required: true,
    },
    // include the array of ids of all student id's in this interview schema itself
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student',
      },
    ],
  },
  { timestamps: true }
);

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;

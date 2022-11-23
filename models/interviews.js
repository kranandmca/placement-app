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
        ref: 'students',
      },
    ],
  },
  { timestamps: true }
);

const Interviews = mongoose.model('Interviews', interviewSchema);

module.exports = Interviews;

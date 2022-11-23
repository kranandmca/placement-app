const mongoose = require('mongoose');

const interview_resultSchema = new mongoose.Schema(
  {
    interview: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Courses',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Students',
    },
    result: {
      type: String,
    },
  },
  { timestamps: true }
);

const Interviews_results = mongoose.model(
  'Interviews_results',
  interview_resultSchema
);

module.exports = Interviews_results;

const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    startdate: {
      type: String,
      required: true,
    },
    enddate: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Batches = mongoose.model('Batches', batchSchema);

module.exports = Batches;

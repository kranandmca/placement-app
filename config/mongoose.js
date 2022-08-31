const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/placement');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to mongodb'));

db.once('open', function () {
  console.log('connected to database');
});

module.exports = db;

const mongoose = require('mongoose');
const env = require('./environment');
// For localhost
mongoose.connect(`mongodb://localhost/${env.db}`);

// mongoose.connect('mongodb://localhost/placement');
// For atlas
// mongoose.connect(
//   'mongodb+srv://placementapp:placementapp@cluster0.cjmdero.mongodb.net/?retryWrites=true&w=majority'
// );
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to mongodb'));

db.once('open', function () {
  console.log('connected to database');
});

module.exports = db;

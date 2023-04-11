const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code that uses the database goes here
  })
  .catch(error => {
    console.error('Error connecting to MongoDB', error);
  });
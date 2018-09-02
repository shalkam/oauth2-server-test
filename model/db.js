const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, function (err, res) {
    if (err) {
      console.log ('ERROR connecting to: ' + process.env.MONGO_URI + '. ' + err);
    } else {
      console.log ('Succeeded connected to: ' + process.env.MONGO_URI);
    }
  });
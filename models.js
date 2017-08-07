const mongoose = require('mongoose');
const mongoURL = process.env.MONGO_DB_URL || "'mongodb://localhost/namesGreeted'";

mongoose.connect(mongoURL, {
  useMongoClient : true
});







  exports.Names = mongoose.model("Names", {
    name : String,
    timesGreeted : Number
  });

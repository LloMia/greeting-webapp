const mongoose = require('mongoose');
module.exports = function(mongoUrl){
  mongoose.connect(mongoUrl);

  const namesGreeted = mongoose.model('name', {name : String});

  return {
    namesGreeted
  }
}

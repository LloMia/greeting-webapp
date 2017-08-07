const mongoose = require('mongoose');
module.exports = function(mongoUrl){
    mongoose.Promise = global.Promise;
    mongoose.connect(mongoUrl);

    const Name = mongoose.model('Names', {
        name : String,
        timesGreeted : Number
    });

    return {
        Name
    };

};












// const mongoose = require('mongoose');
//
//
// mongoose.connect(mongoURL, {
//   useMongoClient : true
// });
//
//
//
//
//
//
//
//   exports.Names = mongoose.model("Names", {
//     name : String,
//     // timesGreeted : Number
//   });




// const mongoose = require('mongoose');
// const Schema = mongoose.Schema();
// const Models = require('./models');












// function greet(names){
//
//   var StoreName = new Models.Names ({
//     name : names,
//     // timesGreeted : count
//   });
//   StoreName.save(function(err){
//     if (err){
//       return err;
//     }
//   })
//
// }


module.exports = function(models){
  var names = [];
const greetLang = function(req, res) {
  var name = req.body.name;
    var language = req.body.language;
    var greetName = "";


        names.push(name);


        if (language === "english") {
            // count++;
            greetName = "hello, " + name + "!";

        } else if (language === "Setswana") {
            // count++;
            greetName = "Dumela, " + name + "!";

        } else if (language === "French") {
            // count++;
            greetName = "Bonjour, " + name + "!";

        }





    res.render('index', {
        msg: greetName
    });

}





 const indexes = function(req, res) {

    res.render('index', {
        name: names
    })

}

return {
  greetLang,
  indexes
}
}

// app.get('/counter', function(req, res) {
//   var name = req.body.name;
//       function counter(input) {
//         return input == name
//         greet()
//     }
//     var countCal = names.filter(counter).length;
//     console.log(countCal)
//
//     res.render('index', {counter : countCal});
// })
//
// var server = app.listen(process.env.PORT || 3000, function() {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('Example app listening on port 3000!')
// })

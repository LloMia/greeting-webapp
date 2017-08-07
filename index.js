var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var app = express();
var names = [];
var count = 0;
const Models = require('./models');

var namesGreeted = {};

app.use(bodyParser.urlencoded({
    extended: false
}));

app.engine('handlebars', exphbs({
    defaultLayout: "main"
}));

app.set('view engine', 'handlebars')
app.get('/', function(req, res) {
    res.render('index');
})



function greet(names, counts){

  var StoreName = new Models.Names ({
    name : names,
    timesGreeted : count
  });
  StoreName.save(function(err){
    if (err){
      return err;
    }
  })

}

app.post('/', function(req, res) {
  var name = req.body.name;
    var language = req.body.language;
    var greetName = "";


        names.push(name);
        if(namesGreeted[name] === undefined){
          namesGreeted[name] = 1;

        if (language === "english") {
            count++;
            greetName = "hello, " + name + "!";
            greet(names);
        } else if (language === "Setswana") {
            count++;
            greetName = "Dumela, " + name + "!";
              greet(names);
        } else if (language === "French") {
            count++;
            greetName = "Bonjour, " + name + "!";
              greet(names);
        }
}


    
    res.render('index', {
        msg: greetName
    });
});

app.get('/greeted', function(req, res) {

    res.render('index', {
        names: names
    })

})

app.get('/counter', function(req, res) {
  var name = req.body.name;
      function counter(input) {
        return input == name
        greet()
    }
    var countCal = names.filter(counter).length;
    console.log(countCal)

    res.render('index', {counter : countCal});
})

const mongoURL = process.env.MONGO_DB_URL || "'mongodb://localhost/test'";

mongoose.connect(mongoURL);


var server = app.listen(process.env.PORT || 3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening on port 3000!')
})

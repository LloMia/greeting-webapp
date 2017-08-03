var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();
var names = [];
var count = 0;
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
        } else if (language === "Setswana") {
            count++;
            greetName = "Dumela, " + name + "!";
        } else if (language === "French") {
            count++;
            greetName = "Bonjour, " + name + "!";
        }
}
    console.log(names);
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
    }
    var countCal = names.filter(counter).length;
    console.log(namesGreeted)

    res.render('index', {counter : namesGreeted.length});
})



var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening on port 3000!')
})

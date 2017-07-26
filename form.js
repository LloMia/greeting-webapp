var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();


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
  var msg = "";
    var name = req.body.name;
    var info = 'Hello, ' + name;
  var greetName = {
    msg:info
  }

    res.render('index', greetName);
});
var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening on port 3000!')
})

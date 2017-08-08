var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
const Schema = mongoose.Schema();
const nameRoutes = require('./greet');
const Models = require('./models');
const models = Models(process.env.MONGO_DB_URL || 'mongodb://localhost/namesGreeted')
const routes = nameRoutes(models);
mongoose.connect('mongodb://localhost/namesGreeted', function(){
  console.log('we are connected');
});

app.use(bodyParser.urlencoded({
    extended: false
}));

app.engine('handlebars', exphbs({
    defaultLayout: "main"
}));

app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    res.redirect('index');
})
app.get('/index', routes.greetLang);
app.get('/greeted', routes.indexes);
app.post('/index', routes.greetLang);



var server = app.listen(process.env.PORT || 3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening on port 3000!')
})

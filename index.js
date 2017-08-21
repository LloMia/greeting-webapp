var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
const session = require("express-session")
const flash = require("express-flash");
var mongoose = require('mongoose');
// const Schema = mongoose.Schema();
const nameRoutes = require('./greet');
const Models = require('./models');
const models = Models(process.env.MONGO_DB_URL || 'mongodb://localhost/namesGreeted')
const routes = nameRoutes(models);
var app = express();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine('handlebars', exphbs({
    defaultLayout: "main"
}));

app.set('view engine', 'handlebars');

app.use(session({
    secret: 'keyboard cat',
    cookie: {
        maxAge: 60000 * 30
    }
}))

app.use(flash());


app.get('/', function(req, res) {
    res.redirect('/index');
})
app.get('/index/greeted', routes.indexes);
app.get('/index', routes.greetLang);
app.post('/index', routes.greetLang);
app.post('/index/greeted', routes.indexes);
app.get('/counter/:name', routes.count);
app.post('/counter/:UrlUser', routes.count);


app.get('/reset', routes.clear);
app.post('/reset', routes.clear);



var server = app.listen(process.env.PORT || 3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening on port 3000!')
})

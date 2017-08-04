 var express = require('express')
 var app = express()
 var nameList = []
 var bodyParser = require('body-parser')

//requiring handlebars
var expHbs = require('express-handlebars');
 //declaring the type of view also specifying the default layout
 app.engine('handlebars', expHbs({
    defaultLayout: "main"
}));
//  setting my view engine
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({
    extended: false
}))

// app.use(bodyParser.json())
//  const greet = function(req, res){
//    var name = req.params.name
//      nameList.push(name)
//     console.log('Hello, ' + name + '!')
//
//
// }

app.get('/greeting', function(req, res) {

  var name = req.params.name

  nameList.push(name)
  console.log(nameList);
  res.render('greet/index', name)
});
app.post('/greeting',greet())


app.get('/greeted', function(req, res) {

    res.send(nameList)

})

app.get('/counter/:name', function(req, res) {

    var name = req.params.name

    function counter(input) {
        return input == name
    }
    var counter = nameList.filter(counter).length

    res.send('hello, ' + name + ' has been greeted ' + counter + ' time(s)')
})

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening on port 3000!')
})

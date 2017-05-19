var express = require('express')
var app = express()
var nameList = []

app.get('/greeting/:name', function(req, res) {

    var name = req.params.name

    nameList.push(name)
    console.log(nameList);
    res.send('Hello, ' + name + '!')
});

app.get('/greeted', function(req, res) {

res.send(nameList)

})

app.get('/counter/:name', function(req, res){

  var name = req.params.name

  function counter(input){
    return input == name
  }
  var counter = nameList.filter(counter).length

  res.send('hello, ' +name+ ' has been greeted ' +counter+ ' time(s)')
})

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening on port 3000!')
})

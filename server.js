var express = require('express')
var app = express()

app.get('/greeting/:name', function(req, res) {

    var name = req.params.name


    res.send('Hello, ' + name + '!')
});


 var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening on port 3000!')
})

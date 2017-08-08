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


module.exports = function(models) {
        var names = [];
        const greetLang = function(req, res) {
                var name = req.body.name;
                var language = req.body.language;
                var greetName = "";
                names.push(name);

                models.Name.findOne({
                        name: req.body.name
                    }, function(err, user) {
                        if (err) {
                            return done(err)
                        }

                        if (user) {
                            user.timesGreeted = user.timesGreeted + 1
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

                            user.save(function(err, results) {
                                if (err) {
                                    return done(err)
                                }

                                res.render('index', {
                                    msg: greetName
});
})

}

if (!user) {

    models.Name.create({
                name: req.body.name,
                timesGreeted: 1
            }, function(err, user) {
                if (err) {
                    return done(err)
                }

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
                                    })


                                }



                            })











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

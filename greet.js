module.exports = function(models) {
    var names = [];
    const greetLang = function(req, res) {
        var name = req.body.name;
        var language = req.body.language;
        var greetName = "";
        var input = {
            name: req.body.name
        }

        if (!input) {
            req.flash('error', "Please type in your name!")
          
        } else if (!language) {
            req.flash('error', 'select a prefered language!')


        } else {
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
                        greetName = "hello, " + user.name + "!";

                    } else if (language === "Setswana") {
                        // count++;
                        greetName = "Dumela, " + user.name + "!";

                    } else if (language === "French") {
                        // count++;
                        greetName = "Bonjour, " + user.name + "!";

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
                            greetName = "hello, " + user.name + "!";

                        } else if (language === "Setswana") {
                            // count++;
                            greetName = "Dumela, " + user.name + "!";

                        } else if (language === "French") {
                            // count++;
                            greetName = "Bonjour, " + user.name + "!";
                        }

                        res.render('index', {
                            msg: greetName
                        });
                    })

                }

            })

        }

    }


    const indexes = function(req, res) {
        models.Name.find({}, function(err, UrlUser) {
            if (err) {
                return done(err);
            }

            res.render('greeted', {
                name: UrlUser
            });
        });
    }

    const count = function(req, res) {

        var name = req.params.name


        models.Name.findOne({
            name: req.params.name

        }, function(err, UrlUser) {


            if (err) {
                return done(err);
            }
            if (UrlUser) {
                var greetCount = "Hello, " + UrlUser.name + ". you've been greeeted " + UrlUser.timesGreeted + " time(s)"
            }
            // console.log(greetCount);
            res.render('counter', {
                counter: greetCount
            });

        });
    }


    const clear = function(req, res) {
        models.Name.remove(function(err) {
            if (err) {

                return done(err);

            }
            res.render('greeted')
        })
    }
    return {
        greetLang,
        indexes,
        count,
        clear

    }
}

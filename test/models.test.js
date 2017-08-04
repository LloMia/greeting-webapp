const assert = require('assert')
// const Models = require('../models');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/namesGreeted');

const namesGreeted = mongoose.model('name', {
    name: String
});

describe('models should be able to', function() {

    it('store names to MongoBD', function(done) {

        // var models = Models('mongodb://localhost/namesGreeted');

        var name = new namesGreeted({
            name: 'Cale'
        });

        name.save().then(function() {
            assert(name.isNew === false);
            done();
        });


    });
})

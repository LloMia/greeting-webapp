const assert = require('assert')
 const Models = require('../models');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Greeted');

const namesGreeted = mongoose.model('name', {
    name: String
});

describe('models should be able to', function() {

    it('store names to MongoBD', function(done) {

        // var models = Models('mongodb://localhost/namesGreeted');

        var name = new namesGreeted({
            name: "Loyiso"
        });

        name.save().then(function() {
            assert(name.isNew === false);
            done();
        });


    });

    it('should not duplicate vulues', function(done){

      var name = new namesGreeted({
          name: "Loyiso"
      });

      name.save().then(function(err) {

        name.save().then(function(err) {
          assert.ok(err, 'should give error for duplicate')
          done()
        });


      })
    })
})

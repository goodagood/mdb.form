
var express = require('express');
var router = express.Router();

//var fake = require('my.project/mdb/fake.thumbs.js');
var fake = require('my.project/mdb/thumbs.js');


// define the home page route
router.get('/', function (req, res) {
  res.send('routes for thumbs ')
});

// define the about route
router.post('/fake.thumb', function (req, res) {
    console.log('/fake.thumb: ', req.body);

    fake.fakeAddThumb(req.body.id, req.body.isUp).then(function(backJson){
        console.log(backJson);
        res.json(backJson);
    });

});

//// middleware that is specific to this router
//router.use(function timeLog (req, res, next) {
//  console.log('Time: ', Date.now())
//  next()
//})

module.exports = router;

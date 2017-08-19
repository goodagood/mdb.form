
// not used


var express = require('express');
var router = express.Router();

var fake = require('my.project/mdb/fake.thumbs.js');


// define the home page route
router.get('/', function (req, res) {
  res.send('routes for faked things ')
});

// define the about route
router.post('/fake.thumb', function (req, res) {
    console.log('/fake.thumb: ', req.body);
    res.json({oo: 'you are trying to fake thumb'});
});

//// middleware that is specific to this router
//router.use(function timeLog (req, res, next) {
//  console.log('Time: ', Date.now())
//  next()
//})

module.exports = router;

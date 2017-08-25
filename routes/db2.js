
var express = require('express');
var router = express.Router();

var _ = require("lodash");


var crud = require('my.project/mdb/db2.crud.js');

//var fake = require('my.project/mdb/thumbs.js');


router.get('/', function (req, res) {
  res.send('routes for db2 ')
});


//todo check
router.post('/find', function (req, res) {
    console.log('/find: ', req.body);

    var filter = {};
    if ('txt' in req.body){
        // ignore case search in field 'words'
        filter = {'words': {'$regex': RegExp(req.body.txt, 'i')}};
    }

    // skip, limit
    var opt = 'opt' in req.body? req.body.opt : {};

    crud.find(filter, opt).then(function(cur){
        cur.toArray(function(err, arr){
            if(err) return res.json({err: err});

            res.json(arr);
        });
    });
});

//// middleware that is specific to this router
//router.use(function timeLog (req, res, next) {
//  console.log('Time: ', Date.now())
//  next()
//})

module.exports = router;

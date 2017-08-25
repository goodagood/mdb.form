
/*
 * CRUD operations of db2.
 * db2 is version 2 of data structure and storage,
 * title description converts to words/contents only.
 */

var db2 = require('./db2.js');
const pool = db2.pool;


//let _ = require('lodash');
//var p = console.log;



function findOne(filter){
    filter = filter || {parentid:{'$exists':false}};

    return pool.getCollection('words').then(function(wcoll){
        return wcoll.findOne(filter);
    });
}

function find(filter, opt){

    filter = filter || {parentid:{'$exists':false}};

    // opt can have: skip, limit

    return pool.getCollection('words').then(function(wcoll){
        return wcoll.find(filter, opt);
    });
}

function insertOne(dataObj){
    return pool.getCollection('words').then(function(wcoll){
        return wcoll.insertOne(dataObj);
    });
}

function insertContent(contentString){
    var dataObj = {
        words: contentString,
        milli: Date.now(),
        thumbs: {up:{}, down:{}},
        //contribute2: null,
    };

    return insertOne(dataObj);
}




module.exports.findOne = findOne;
module.exports.find = find;
module.exports.insertOne = insertOne;
module.exports.insertContent = insertContent;

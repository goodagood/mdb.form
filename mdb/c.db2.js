
var db2 = require('./db2.js');
var crud = require('./db2.crud.js');


var _ = require('lodash');

var testData = require("./test.data.js");


var p = console.log;

const pool = db2.pool;

var o = {};

function cOne(){
    // make the pool

    p('c one, check the pool');

    db2.pool.getDb().then((db)=>{
        o.db = db;

        console.log('get db');
        console.log(Object.keys(db));
    }).then(function(){

        db2.pool.getCollection('words').then((words)=>{
            o.words = words;

            console.log('get collection words');
            console.log(_.keys(words));
            console.log(Object.keys(words));
            console.log(words);
        });
    }).then(function(){

        db2.pool.getCollection('thumbs').then((thumbs)=>{
            o.thumbs = thumbs;
        });
    }).catch(function(err){
        p('err:');
        p(err);
    });

}


function cFindone(){
    crud.findOne().then(function(one){
        o.one = one;
        p(one);
    });
}

function cFind(){
    crud.find({}, {skip: 3, limit: 5}).then(function(results){
        o.results = results;

        results.each(function(err, one){

            if(err) return p(err);
            if(!one) return p(one);

            if(one._id) p(one._id);
            if(one.words) p(one.words);
            p();
        });

        p(_.keys(results));
    });
}

function cFind2(){
    crud.find({}, {skip: 3, limit: 8}).then(function(cur){
        return cur.skip(1).limit(2);
    }).then(function(results){
        o.results = results;

        results.each(function(err, one){

            if(err) return p(err);
            if(!one) return p(one);

            if(one._id) p(one._id);
            if(one.words) p(one.words);
            p();
        });

        p(_.keys(results));
    });
}

function cInsert(){
    var content = testData.wordsList[0];

    var d = {
        words: content,
        milli: Date.now(),
    }

    crud.insertContent(content).then(function(result){
        o.result = result;
        p(result);
    });
}


//cOne();
//cFindone();
//cInsert();

if(require.main === module){

    //cOne();

    //cInsert();

    cFind2();

    setTimeout(()=>{
        process.exit();
    }, 3000);
}

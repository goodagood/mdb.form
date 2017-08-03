

const express = require('express');
const bodyparser = require('body-parser');

const p = console.log;


const app = express();

// parse application/x-www-form-urlencoded
//app.use(bodyparser.urlencoded({ extended: false }));   //?

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


app.use(express.static('pub'))
app.use('/b', express.static('build'))

// 2017 0715, test another attempt of UI settings
app.use('/ui715', express.static('ui715/pub'))


app.set('views', './views');
app.set('view engine', 'pug');


//app.get('/', function (req, res) {
//  res.send('Hello World!')
//})

//app.get('/hello', function (req, res) {
//  //res.send('Hello World!')
//  res.end('Hello World, port 4038!')
//});

//
//const mdb = require("./src/tmp/mdb.js");
//app.get('/getone', function (req, res) {
//    //res.send('Hello World!')
//    mdb.get_one_value_rec(function(err, rec){
//        var j = {};
//        if(err){
//            j.err = err;
//        }else{
//            j = rec;
//        }
//
//        res.json(j);
//    });
//    //res.end('Hello World, port 4038!')
//});
//


const vrec = require("./mdb/vrec.js");

//d
app.get('/gettop', function (req, res) {
    //res.end('Hello World!')
    vrec.findOneTop(function(err, rec){
        var j = {};
        if(err){
            j.err = err;
        }else{
            j = rec;
        }

        console.log(j);
        res.json(j);
    });
    //res.end('Hello World, port 4038!')
});

////app.get('/getbyid/:id', function (req, res) {
app.get('/20less', function (req, res) {
    //console.log('in get 20 less');
    
    vrec.findOneTop(function(err, rec){
        //p(rec, err);
        var j = {};
        if(err){
            //j.err = err;
            return res.json({err: err});
        }else{
            j = rec;
            j['id'] = j['_id'].toString();
        }
        //console.log(j);

        var pid = j['id'];
        console.log('pid: ', pid);
        var opt = {
            limit: 10,
        };

        vrec.findSubsOpt(pid, opt, function(err, subs){
            if (err) return res.json({err: err.toString(), msg:'err when vrec find subs opt'});

            //console.log(typeof subs);
            //console.log(Object.keys( subs));

            subs.toArray(function (err, docs){
                if(err) return res.json({'err' : err, 'msg' : 'toArray err, 2017 0627 1956pm'});
                docs.map((d)=>{
                    d['id']=d['_id'].toString();
                    return d;
                });
                res.json({'top' : j, subs : docs});
            });

        });

    });
    //res.end('Hello World, port 4038!')
});

app.get('/id/:id', function (req, res) {
    //console.log('in get 20 less');
    
    let idstr = req.params['id'];
    console.log(idstr);
    vrec.findOneByIDStr(idstr, function(err, rec){
        //p(rec, err);
        var j = {};
        if(err){
            //j.err = err;
            return res.json({err: err});
        }else{
            j = rec;
            j['id'] = j['_id'].toString();
        }
        console.log(j);

        var pid = j['id'];
        console.log('pid: ', pid);
        var opt = {
            limit: 10,
        };

        vrec.findSubsOpt(pid, opt, function(err, subs){
            if (err) return res.json({err: err.toString(), msg:'err when vrec find subs opt'});

            console.log(typeof subs);
            console.log(Object.keys( subs));

            subs.toArray(function (err, docs){
                if(err) return res.json({'err' : err, 'msg' : 'toArray err, 2017 0627 1956pm'});
                docs.map((d)=>{
                    d['id']=d['_id'].toString();
                    return d;
                });
                res.json({'top' : j, subs : docs});
            });

        });

    });
    //res.end('Hello World, port 4038!')
});




app.get('/top20', function (req, res) {
    //res.end('Hello World!')
    
    vrec.findTops(20, function(err, topArray){
        if(err) return res.json({err: err});


        let a = topArray.map(rec =>{
            rec['id'] = rec['_id'].toString();
            return rec;
        });
        res.json(a);
    });
});


app.get('/testinsertone', function(req,res){
    //res.end('<h1> ooo </h1');
    res.render('testinsertone', {
        title: 'test insert one',
        message: 'can we post data to the url /insertone?'
    });
});


app.post('/insertone', function (req, res) {
    console.log('req.body :');
    console.log(req.body);
    vrec.insertOneTd(req.body, function(err, insert){
        if(err) return res.json({err: err});

        console.log(insert.insertedId);
        if(!insert.insertedId){
            return res.json({ok: false});
        }

        doc = insert.ops[0];
        // insert.insertedId is same as ..ops[0].['_id']
        doc['id'] = insert.insertedId.toString();

        res.json(doc);
    });
    //res.json({ok: true, test:Date.now().toString()});
});


app.post('/up.sert.td', function (req, res) {
    console.log('/up.sert.td req.body :');
    console.log(req.body);
    vrec.upsertTD(req.body, function(err, insert){
        if(err) return res.json({err: err});

        console.log(insert.insertedId);
        if(!insert.insertedId){
            return res.json({ok: false});
        }

        doc = insert.ops[0];
        doc['id'] = insert.insertedId.toString();

        res.json(doc);
    });

        //res.json({ok: true, test:Date.now().toString()});
    
});


app.listen(4038, function () {
  console.log('Example app listening on port 4038!')
});


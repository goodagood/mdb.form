

const express = require('express');
const app = express();

app.use('/b', express.static('build'))
app.use(express.static('public'))

//app.get('/', function (req, res) {
//  res.send('Hello World!')
//})

app.get('/hello', function (req, res) {
  //res.send('Hello World!')
  res.end('Hello World, port 4038!')
});

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
app.get('/gettop', function (req, res) {
    //res.end('Hello World!')
    vrec.findOneTop(null, function(err, rec){
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
    //res.end('Hello World!')
    
    vrec.findOneTop(null, function(err, rec){
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



app.listen(4038, function () {
  console.log('Example app listening on port 4038!')
});


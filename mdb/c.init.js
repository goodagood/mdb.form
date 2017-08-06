
var ObjectID = require('mongodb').ObjectID;

// value collection object
var vc = require('./adb.js').VCObj;

var vrec = require('./vrec.js');

var fake = require('./fake.thumbs.js');
var init = require('./v.init.js');

var p = console.log;

var o = {};


//keep
function find(filter, skip, number, callback){

    // default to find top
    filter = filter || {parentid:{'$exists':false}};
    skip   = skip   || 0;
    number = number || 100;

    return vc.getCollection().then((coll)=>{
        if(typeof callback === 'function'){
            return coll.find(filter, {skip:skip, limit:number}, callback);
        }

        p ('return the promise of mongodb find');
        return coll.find(filter, {skip:skip, limit:number});
    });
}


function findArray(filter, skip, number, callback){

    // default to find top
    filter = filter || {parentid:{'$exists':false}};
    skip   = skip   || 0;
    number = number || 100;

    return find(filter, skip, number).then((res)=>{
        return res.toArray();
    });
}

function cChangeValueToFake(){
    findArray(null, null, null).then((a)=>{
        a.forEach(function(rec){
            p(rec._id, rec.title);
            let f = fake.fakeThumbs();
            p(f);

            init.initValue(rec._id, f);
        });
    });
}

function cFind(){
    find(null, null, null).then((res)=>{
        o.res = res;
        res.toArray((e,a)=>{
            if(e) return p(e);

            o.a = a;
            p(o.a.length);
        });
    });
}


// to check
// o is the obj to hold data
function cFindArray(o){
    o.ids = [];

    vrec.findArray(null, null, null).then((arr)=>{
        p(arr.length);
        o.a = arr;

        arr.forEach(function(rec){
            p(rec._id);
            o.ids.push(rec._id);
        });

    });
}



// make sure o.a is the array of top records
function checkInitOne(n){
    n = n || 0;
    let oid = o.a[n]._id;

    let value = fake.fakeThumbs();

    p(
            oid, 
            Object.keys(value.up),
            Object.keys(value.down)
     );

    return init.initValue(oid, value);
}

/*
 * return a function to get batches of value records
 * it will be set to object: o
 */
function getFunctionToFetchTopValueRecords(){
    skip = 0;
    number =  200;
    filter =  {parentid:{'$exists':false}};

    var oneBatch = ()=>{
        p(`before doing, skip is: ${skip}`);
        cb(filter, skip, number, function(err, cursor){
            if(err) return p(err);


            var key = `a${skip}`;
            skip = skip + number;

            cursor.toArray((e, a)=>{o[key]=a;});
            cursor.count(function(e, n){
                if(err) return p(err);

                p(`we got ${n} count`);
            });
        });
    };

    return oneBatch;
}

var oneBatch = getFunctionToFetchTopValueRecords();
//oneBatch();

//setTimeout( ()=>{
//    o.ids = [];
//    o.a0.forEach((a)=>{
//       o.ids.push(a._id); 
//    });
//}, 5000);



if(require.main === module){
    //cFindTops();

    //cChangeValueToFake();

    cFindArray(o);

    setTimeout(()=>{
        p('time to exit');
        process.exit();
    }, 5000);
}

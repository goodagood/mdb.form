
var ObjectID = require('mongodb').ObjectID;

// value collection object
var vc = require('./adb.js').VCObj;

var vrec = require('./vrec.js');

var p = console.log;

var o = {};


/*
 * return a function to get batches of value records
 * it will be set to object: o
 */
function cc(){
    skip = 0;
    number =  200;
    filter =  {parentid:{'$exists':false}};

    var one = ()=>{
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

    return one;
}

var oneBatch = cc();
oneBatch();

setTimeout( ()=>{
    o.ids = [];
    o.a0.forEach((a)=>{
       o.ids.push(a._id); 
    });
}, 5000);



//dd


function oneById(id, callback){

    var oid = ObjectID(id);

    vc.getCollection(function(err, vcoll){
        if(err) return callback(err);

        vcoll.findOne({_id: oid}, callback);
    });

}


function cOne(){
    var a = o.a0[8]; // get a record
    p(a);
    var oidstr = a._id.toString();
    p(oidstr);

    var oid = ObjectID(oidstr);
    return vc.fetchCollection().then(function(coll){
        return coll.findOne({'_id': oid});
    });
}


/*
 * get one record by it's id string
 */
function getOneByIdStr(idstr){
    var oid = ObjectID(idstr);
    return vc.fetchCollection().then(function(coll){
        return coll.findOne({'_id': oid});
    });
}

function getOneById(oid){
    return vc.fetchCollection().then(function(coll){
        return coll.findOne({'_id': oid});
    });
}


//setTimeout( ()=>{
//    var aa = cOne().then((some)=>{
//        o.some = some;
//        p(some);
//        p(Object.keys(some));
//    });
//}, 5000);


function checkUpdate(oid){

    let field = {
        value : {
            up: {'test':1,},
            down: {'test':1,}
        }
    };

    vc.fetchCollection().then((coll)=>{
        return coll.update({'_id': oid}, {'$set': field}, {upsert:true}, (err,result)=>{
            if(err) return p(err);
            o.uu = result;
        });
    }).then((result)=>{
        o.u = result;
    }).catch((e)=>{
        p(e);
        o.e = e;
    });

}


function isupdated(id0){
    vc.getCollection(function(e,coll){
        o
        coll.findOne({}, function(err, what){
            if(err) return p(err);

            p(what);
        });
    });
}


var setOne = (mid) =>{
    //vc.findOneByIDStr(mid);
    return getOneByIdStr(mid.toString()).then((one)=>{
        p(one);
        return one;
    });
}


function cFindTops(){
    vrec.findTops(20, function(err, what){
        if(err) return p (err);

        p(what);
    });
}


function climit(){
    vrec.limitFind( {parentid: {'$exists': false}}, 0,
            20, function(err, what){

        if(err) return p (err);

        o.what = what;
        p(what);
    });
}


/*
 * check limit find top value records
 */
function clf(){
    var skip=0;
    var number=20;
    var filter = filter || {parentid:{'$exists':false}};

    vc.getCollection(function(err, vcoll){
        if(err) return callback(err);

        //vcoll.find(filter, {skip:skip, limit:number}).toArray(callback);
        vcoll.find(filter, {skip:skip, limit:number}, function(err, result){
            if(err) return callback(err);

            o.r = result;
        });
    });
}

//clf();


function cb(filter, skip, number, callback){
    skip = skip || 0;
    number = number || 20;
    filter = filter || {parentid:{'$exists':false}};

    vc.getCollection(function(err, vcoll){
        if(err) return callback(err);

        //vcoll.find(filter, {skip:skip, limit:number}).toArray(callback);
        vcoll.find(filter, {skip:skip, limit:number}, callback);
    });
}




if(require.main === module){
    //cFindTops();

    setTimeout(()=>{
        p('time to exit');
        process.exit();
    }, 33000);
}

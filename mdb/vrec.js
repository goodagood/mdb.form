
/*
 * value records
 * 2017 0619
 */

var ObjectID = require('mongodb').ObjectID;

var db = require('./adb.js');

var vcobj = db.VCObj;

var p = console.log;


/*
 * Find one top level value record
 */
function findOneTop(callback){
    var filter = {parentid:{'$exists':false}};
    vcobj.getCollection(function(err, vcoll){
        if(err) return callback(err);

        vcoll.findOne(filter, callback);
    });
}


function findTops(number=20, callback){
    let filter = {parentid:{'$exists':false}};

    vcobj.getCollection(function(err, vcoll){
        if(err) return callback(err);

        vcoll.find(filter, {limit:number}).toArray(callback);
    });
}


function findOneByIDStr(id, callback){

    var oid = ObjectID(id);

    vcobj.getCollection(function(err, vcoll){
        if(err) return callback(err);

        vcoll.findOne({_id: oid}, callback);
    });
}

function findSubs(pid, callback){

    var oid = ObjectID(pid);

    vcobj.getCollection(function(err, vcoll){
        if(err) return callback(err);

        vcoll.find({parentid: oid}, callback);
    });
}

/*
 * opt: {
 *    limit:
 *    skip:
 *    sort:
 * }
 */
function findSubsOpt(pid, opt, callback){

    var oid = ObjectID(pid);

    vcobj.getCollection(function(err, vcoll){
        if(err) return callback(err);

        vcoll.find({parentid: oid}, opt, callback);
    });
}

function findOneSub(parentid, callback){
    vcobj.getCollection(function(err, vcoll){
        if(err) return callback(err);

        vcoll.findOne({'parentid':parentid}, callback);
    });
}


function insertOneTd(data, callback){
    vcobj.getCollection(function(err, vcoll){
        if(err) return callback(err);

        // value is not going to depend on text, 2017 0801
        //if(typeof data['value'] !== 'number'){
        //    //data['value'] = data['title'].length + data['description'].length
        //    data['value'] = (data['title'] + data['description']).toString().length;
        //}

        // successfull callback get: obj {
        //   result, ops, insertedCount, insertedId, connection, message
        // }
        // insertedId is ObjectId of mongodb,
        // ops is array of inserted docs
        vcoll.insertOne(data, callback);
    });
}

function insertSub(data, callback){
    if(!data.parentid) return callback('no parent id');

    vcobj.getCollection(function(err, vcoll){
        if(err) return callback(err);

        // changed 0728 1821pm
        vcoll.insertOneTd(data, callback);
    });
}


// actually upsert? update or insert
function upsertTD(data, callback){

    // should we check and do the insert? it's overcautious?
    if(!data._id && !data['id']){
        if(!data.parentid){
            return insertOneTd(data, callback);
        }else{
            return insertSub(data, callback);
        }
    }

    vcobj.getCollection(function(err, vcoll){
        if(err) return callback(err);

        let oid = data._id || ObjectID(data['id']);

        // callback get: err, updated data?, mongodb status?
        return vcoll.update({'_id':oid}, data, callback);
    });
}


// checkings

function singleSub(filter = {parentid:{'$exists':true}}, callback){
    vcobj.getCollection(function(err, vcoll){
        if(err) return callback(err);

        vcoll.findOne(filter, callback);
    });
}
module.exports.singleSub = singleSub;




module.exports.findOneTop = findOneTop;
module.exports.findTops = findTops;
module.exports.findOneSub = findOneSub;
module.exports.findOneByIDStr = findOneByIDStr;
module.exports.findSubs = findSubs;
module.exports.findSubsOpt = findSubsOpt;

module.exports.insertOneTd = insertOneTd;

module.exports.upsertTD = upsertTD;







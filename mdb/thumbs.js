
var ObjectID = require('mongodb').ObjectID;

var adb = require('./adb.js');
const vo = adb.VCObj;

var vrec = require('./vrec.js');

var p = console.log;


/*
 * Value is to count the number of thumb up and down.
 */
function getValue(oid){
    if(typeof oid === 'string') oid = ObjectID(oid);

    return vrec.findOneById(oid).then(function(rec){
        return rec.value;
    });
}

function countKeys(obj){
    return Object.keys(obj).length;
}

function upCount(thumbs){
    return countKeys(thumbs.up);
}

function downCount(thumbs){
    return countKeys(thumbs.down);
}


/*
 * obj is the nave-value obj (like python dictionary) of records.
 */
function countThumbs(obj){
    var ups = upCount(obj.thumbs);
    var downs = downCount(obj.thumbs);
    return [ups, downs];
}


var fake = require('./fake.thumbs.js');


/* 
 * 
 */
function addOneThumb(username, oid, isUp){
    username = username || fake.fakeUsername();
    //p('username: ', username);
    //p('oid: ', oid);

    // mongodb dot notation for sub field
    var dotIndex = '';
    if(isUp){
        dotIndex = `thumbs.up.${username}.milli`;
    }else{
        dotIndex = `thumbs.down.${username}.milli`;
    }

    var set2 = {};
    set2['$set'] = {};
    set2['$set'][dotIndex] = Date.now();

    //console.log('dot index: ', dotIndex);
    //console.log('set2: ', set2);

    return vo.getCollection().then(function(coll){
        return coll.update({_id: oid}, set2);
    });
        
}


function fakeAddThumb(idStr, isUp){
    var id = ObjectID(idStr);
    var name = fake.fakeUsername();

    return addOneThumb(name, id, isUp).then(function(dbRte){
        var n = dbRte.result.n;
        if(n !== 1) throw 'not 1 record modified in fake add thumb';

        return vrec.findOneByIdStr(id);
    }).then(function(one){
        var thumbs = {};
        Object.assign(thumbs, one.thumbs, {id: one._id.toString()});
        return thumbs;
    });
}



module.exports.getValue  = getValue;
module.exports.upCount   = upCount;
module.exports.downCount = downCount;
module.exports.countThumbs = countThumbs;

module.exports.addOneThumb = addOneThumb;
module.exports.fakeAddThumb = fakeAddThumb;

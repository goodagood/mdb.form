
var ObjectID = require('mongodb').ObjectID;

var vc = require('./adb.js').VCObj;

var vrec = require('./vrec.js');

var thumbs = require('./thumbs.js');


var p = console.log;
var oo = {}; // for checking


/*
 * count the thumbs up.
 */
function upCount(oid){
    if(typeof oid === 'string') oid = ObjectID(oid);

    vrec.findOneById(oid).then(function(rec){
        p(rec);
        oo.rec = rec;
        return rec;
    });
}

// to check
// o is the obj to hold data
function cFindArray(o){
    o.ids = [];

    return vrec.findArray(null, null, null).then((arr)=>{
        p(arr.length);
        o.a = arr;

        arr.forEach(function(rec){
            p(rec._id);
            o.ids.push(rec._id);
        });

    });
}(oo);


function count(oid){
    thumbs.getValue(oid).then(function(v){
        var ups = Object.keys(v.up).length;
        var downs = Object.keys(v.down).length;
        p(ups, downs);
    });
}


/*
 * for top level title description records
 */
function countAllTopTD(idlist){
    idlist.forEach(function(id){
        p(id.toString());
        vrec.findOneById(id).then(function(td){
            p(td.title);
            var value = td.value;
            var ups = thumbs.upCount(value);
            var downs = thumbs.downCount(value);
            p(ups, downs);
        });
    });
}



/* 
 *
 */
var fake = require('./fake.thumbs.js');
function oneThumb(username, oid, isUp){
    username = username || fake.fakeUsername();
    p('username: ', username);

    // true is up, false is down
    isUp = isUp || true; 

    //var toSet = {'value': {}};
    var dotIndex = '';
    if(isUp){
        //toSet.value.up.[username]   = {t: Date.now()};
        dotIndex = `value.up.${username}`
    }else{
        //toSet.value.down.[username] = {t: Date.now()};
        dotIndex = `value.up.${username}`
    }

    return vrec.update({_id: oid},
            {'$set': {dotIndex: {milli:Date.now()}}});

}


if(require.main === module){

    //upCount(oo);

    //cFindArray(oo);

    //cFindArray(oo).then(()=>{
    //    countAllTopTD(oo.ids);
    //});


    setTimeout(()=>{
        p('time to exit');
        process.exit();
    }, 5000);
}

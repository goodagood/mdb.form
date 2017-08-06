
var ObjectID = require('mongodb').ObjectID;

//var vc = require('./adb.js').VCObj;

var vrec = require('./vrec.js');

var tools = require('./ct.js');

var thumbs = require('./thumbs.js');


var p = console.log;
var oo = {}; // for checking



// populate oo with records
tools.cFindArray(oo);



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

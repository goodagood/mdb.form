
var ObjectID = require('mongodb').ObjectID;

//var vc = require('./adb.js').VCObj;

var vrec = require('./vrec.js');
var vc = require('./adb.js').VCObj;

var tools = require('./ct.js');

var thumbs = require('./thumbs.js');


var p = console.log;


//var oo = {}; // for checking
//
//// populate oo with records
//tools.cFindArray(oo);



/* 
 *
 */
var fake = require('./fake.thumbs.js');
function tryOneThumb(username, oid, isUp){
    username = username || fake.fakeUsername();
    p('username: ', username);
    p('oid: ', oid);

    // true is up, false is down
    isUp = isUp || true; 

    var toSet = {'$set': {}};

    toSet['$set'].value = {};
    toSet['$set'].value.up = {};
    toSet['$set'].value.down = {};

    var dotIndex = '';
    if(isUp){
        toSet['$set']['value'].up[username]   = {t: Date.now()};
        dotIndex = `value.up.${username}.milli`;
    }else{
        toSet['$set'].value.down[username] = {t: Date.now()};
        dotIndex = `value.down.${username}.milli`;
    }

    var set2 = {};
    set2['$set'] = {};
    set2['$set'][dotIndex] = Date.now();

    p('toSet: ', toSet);
    p('dot index: ', dotIndex);
    p('set2: ', set2);

    return vc.getCollection().then(function(coll){
        //return coll.update({'_id': oid},
        //        {'$set': 
        //            { 
        //                //dotIndex.toString():
        //                `${dotIndex}`:
        //                    Date.now()
        //                //{milli:Date.now()}
        //            }
        //        }
        //        );

        return coll.update({_id: oid}, set2);

        // this erase other usernames
        //return coll.update({_id: oid}, toSet);
    });
        

}


function oneThumb(username, oid, isUp){
    username = username || fake.fakeUsername();
    p('username: ', username);
    p('oid: ', oid);

    // true is up, false is down
    isUp = isUp || true; 


    var dotIndex = '';
    if(isUp){
        dotIndex = `value.up.${username}.milli`;
    }else{
        dotIndex = `value.down.${username}.milli`;
    }

    var set2 = {};
    set2['$set'] = {};
    set2['$set'][dotIndex] = Date.now();

    p('dot index: ', dotIndex);
    p('set2: ', set2);

    return vc.getCollection().then(function(coll){
        return coll.update({_id: oid}, set2);
    });
        
}

function tt(oid, upOrDown){
    oid = oid || oo.ids[3];
    upOrDown = upOrDown || tools.randbool();

    oneThumb('aa', oid, upOrDown).then(function(ret){
        oo.ret = ret;
        p(ret);
    }).catch(function(err){
        p(err);
        p('err');
    });
}

//tt();


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

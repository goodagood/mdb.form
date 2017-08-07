
// value collection object
var vc = require('./adb.js').VCObj;


/*
 * oid is mongodb object id.
 */
function initValue(oid, value){

    // value will be thumbs up and down:
    // value : {
    //     up: {'user name': {}, ... },
    //     down: {'user name': {}, ... }
    // }

    value = value || {up: {}, down: {}};

    let field = { 'value' : value };

    return vc.fetchCollection().then((coll)=>{
        return coll.update({'_id': oid}, {'$set': field});
    });
    
}



module.exports.initValue = initValue;


var vrec = require('./vrec.js');


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
    var ups = upCount(obj.value);
    var downs = downCount(obj.value);
    return [ups, downs];
}


var fake = require('./fake.thumbs.js');

/* 
 * 
 */
function oneThumb(username, oid, isUp){
    username = username || fake.fakeUsername();
    //p('username: ', username);
    //p('oid: ', oid);

    // true is thumb up, false is down
    isUp = isUp || true; 

    // mongodb dot notation for sub field
    var dotIndex = '';
    if(isUp){
        dotIndex = `value.up.${username}.milli`;
    }else{
        dotIndex = `value.down.${username}.milli`;
    }

    var set2 = {};
    set2['$set'] = {};
    set2['$set'][dotIndex] = Date.now();

    //p('dot index: ', dotIndex);
    //p('set2: ', set2);

    return vc.getCollection().then(function(coll){
        return coll.update({_id: oid}, set2);
    });
        
}





module.exports.getValue  = getValue;
module.exports.upCount   = upCount;
module.exports.downCount = downCount;
module.exports.countThumbs = countThumbs;

module.exports.oneThumb = oneThumb;

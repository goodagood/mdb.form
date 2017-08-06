
var vrec = require('./vrec.js');


/*
 * Value is count the number of thumb up and down.
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


function countThumbs(obj){
    var ups = upCount(obj.value);
    var downs = downCount(obj.value);
    return [ups, downs];
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


module.exports.getValue  = getValue;
module.exports.upCount   = upCount;
module.exports.downCount = downCount;
module.exports.countThumbs = countThumbs;

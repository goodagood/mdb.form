
/*
 * tools used in checkings.
 */

var vrec = require('./vrec.js');


var o = {};


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


function findInTitles(query){
}

function findInDescription(query){
}


function randint(start, stop){
    let gap = stop - start;

    if( gap < 1)  return parseInt(start);

    let r = Math.random();

    let x = r * gap + start;

    return parseInt(x);
}

function randbool(){
    var i = randint(0,9);
    if(i>=5) return true;
    return false;
}


module.exports.cFindArray = cFindArray;
module.exports.randint = randint;
module.exports.randbool = randbool;

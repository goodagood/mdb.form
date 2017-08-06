
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



module.exports.cFindArray = cFindArray;

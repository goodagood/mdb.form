
/*
 * manage a list of title-description objects
 */

import {getTopRecords} from 'src/util/pipe.js';

const p = console.log;

function tdlist(){
    let d = {}; // obj using the data
    d.a   = []; // list of object
    let o = {}; // obj using the data

    o.fetch = (offset=0, number=100) =>{
        return getTopRecords().then(function(tdarray){
            d.a = tdarray;
        });
    };

    o.fetch();
    return o;
}

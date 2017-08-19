
/*
 * manage a list/set of title-description objects
 */

import random from 'lodash/random';

import {Promise} from 'bluebird';

import {getTopRecords} from 'src/util/pipe.js';
import {getTitleDescriptionObj} from './td.obj.js';


import {until, checkUntil} from 'src/util/time.js';

const p = console.log;

function mk_obj_for_title_description_data_set(){
    let d = {}; // the data
    d.a   = []; // list of object
    // d.aa : array of td object
    let o = {}; // obj using the data

    d.fetched = false;

    function fetch(offset=0, number=100) {
        return getTopRecords().then(function(tdarray){
            d.a = tdarray;
            d.fetched = true;
            return o;
        }).then(()=>{
            // object of title description data
            d.aa = [];
            d.a.forEach(function(td){
                var tdobj = getTitleDescriptionObj();
                //console.log(td.id || td._id);

                tdobj.setData(td);
                d.aa.push(tdobj);
            });
            return o;
        });
    }

    o.fetch = fetch;

    function giveData(){
        return d;
    }

    o.giveData = giveData;


    function randomTopTD(){
        if(!d.fetched) return null;

        let leng = d.a.length;
        let ind = random(leng); // lodash random

        //console.log(d.aa[ind]);
        return d.aa[ind];
    }


    function isFetched(){
        return d.fetched;
    }

    function waitFetched(){
        return checkUntil(isFetched, 100, 20*1000).then(function(ok){
            if(ok){
                return o;
            }else{
                // not ok, but time limit past.
                return null;
            }
        });
    }
    
    function waitRandomTopTD(){
        return until(randomTopTD, 100, 20*1000);
    }


    o.randomTopTD = randomTopTD;
    o.waitFetched = waitFetched;
    o.waitRandomTopTD = waitRandomTopTD;

    o.fetch();
    return o;
}

let tds = mk_obj_for_title_description_data_set();
//tds.fetch();

export {tds, mk_obj_for_title_description_data_set};

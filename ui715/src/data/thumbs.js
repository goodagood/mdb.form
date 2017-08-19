
/*
 * data:
 * {
 *  up:
 *  {
 *   username: {milli: 13xxxdigits milli seconds of click},
 *   ...
 *  },
 *  down:
 *  {
 *  },
 * }
 *
 * One task is we need to know current user name.
 * One thumb === one value
 */

import {fakeThumbAction} from 'src/util/pipe.js';


function prepare_thumbs(){

    let thumbs = {up:{}, down:{}};
    let obj  = {};

    function setThumbs(data){
        // data should be an object.
        if(!data) throw "set thumbs get no data";
        //if(!data.id) throw "set thumbs get no id";

        if(typeof data.up === 'undefine') data.up = {};
        if(typeof data.down === 'undefine') data.down = {};

        thumbs = data;
    }


    function getThumbs(){ return thumbs; }

    function setId(id){ thumbs.id = id; } // id is a string
    function getId(id){ return thumbs.id; }

    // for huge thumbs up set, 
    // it's not ok to do it this way, 
    // because only part of data will be past to client side/here.
    function number_of_up_thumbs(){
        return Object.keys(thumbs.up).length;
    }

    function number_of_down_thumbs(){
        return Object.keys(thumbs.down).length;
    }

    // should return promise
    function addThumb(isUp){
        if(!thumbs.id) throw "don't know id in db, add thumb";

        var j = {id: getId(), isUp: isUp};

        return fakeThumbAction(j).then(function(ret){
            //console.log('do add thum, fake..', ret);

            if(ret.id !== thumbs.id) throw 'return thumb got DIFFERENT id';

            setThumbs(ret);
            return obj;
        });
    }

    function showSimple(){
        var tmp = {};
        tmp.id = thumbs.id;
        tmp.up = Object.keys(thumbs.up).length;
        tmp.down = Object.keys(thumbs.down).length;

        return tmp;
    }


    obj.setThumbs = setThumbs;
    obj.getThumbs = getThumbs;
    obj.setId = setId;
    obj.getId = getId;
    obj.number_of_up_thumbs = number_of_up_thumbs;
    obj.number_of_down_thumbs = number_of_down_thumbs;
    obj.addThumb = addThumb;
    obj.showSimple = showSimple;

    return obj;
}


//let ThumbsObj = prepare_thumbs();


export {prepare_thumbs};

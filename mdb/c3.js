
var Promise = require('bluebird');

var p = console.log;



function setLuckyLimit(lim){
    if( typeof lim !== 'number') lim = 0.99;
    if( lim < 0 || lim > 1 ) lim = 0.99;

    return function lucky(){

        var r = Math.random();
        p(r);

        if(r > lim){
            return true;
        }else{
            return false;
        }
    }
}


function untilLucky(interval){

    let lucky = setLuckyLimit();

    function wait(){
        if(lucky()){
            // no need to wait any more.
            return false;
        }else{
            return true;
        }
    }

    return Promise.resolve(function(){
        return lucky();
    }).then(function(isLucky){
        if(isLucky){
            return Promise.resolve(function(what){
                p(what);
                return p('here');
            });
        }else{
            return Promise.delay(interval).then(function(){
                return waitLucky();
            });
        }
    });
}


function oldway(){
    let interval = 500; //ms
    let keep = true;


    let isLucky = setLuckyLimit();

    function checkLucky(){
        keep = isLucky();
        p(keep, interval);
        if(!keep) return p('!keep');

        return setTimeout(checkLucky, interval);
    }


    function start(){
        setTimeout(checkLucky, interval);
    }


    return start();
}

oldway();

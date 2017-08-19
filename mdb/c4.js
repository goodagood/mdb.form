
var Promise = require('bluebird');

var p = console.log;


function milliAfter(milli, callback){
    p(`do it ${milli} milli-seconds after`);
    if(typeof milli === 'number'){
        return setTimeout(callback, milli);
    }else{
        return setTimeout(callback, 100);
    }
}


let milliThen = Promise.promisify(milliAfter);

function over(i){
    if(typeof i !== 'number') i = 0.99;

    i = i > 1 ? 0.90 : i;
    i = i < 0 ? 0.10 : i;

    r = Math.random();
    p(r);
    if(r > i){
        return true;
    }else{
        return false;
    }
}


function lucky(){
    var lim = 0.99;

    var r = Math.random();
    p(r);

    if(r > lim){
        return true;
    }else{
        return false;
    }
}


function tailLoop(fun){
    var limit = 8;

    return new Promise().then(function(){
        return fun();
    });

    return Promise.delay(100).then(function(){
        return fun();
    });
}

function fivePercent(){
    var r = Math.random();
    p(r);
    if(r < 0.95){
        return milliAfter(100, fivePercent);
    }else{
        p('return false');
        return false;
    }
}

function tail2ret(){

    if(lucky()){
        return Promise.resolve(true);
    }

    return Promise.delay(1000).then(function(){
        return tail2ret();
    });
}




if(require.main === module){
    let milli = 0;

    //fivePercent();
    tail2ret().then(function(){
        p(`here`);
    });

}

module.exports.milliAfter = milliAfter;

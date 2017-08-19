
var Promise = require('bluebird');

var p = console.log;


function until(action, interval, limit){
    limit = limit || 30 * 1000; // milli seconds

    var millis = 0;

    function timeSelf(){
        var result = action();
        if(result !== null){
            return Promise.resolve(result);
        }
        if(millis > limit){
            return Promise.resolve(null);
        }

        return Promise.delay(interval).then(function(){
            millis += interval;
            p(`millis : ${millis}`);
            return timeSelf();
        });

    }

    return timeSelf();
}


//
//


function setLuckyLimit(lim){
    if( typeof lim !== 'number') lim = 0.99;
    if( lim < 0 || lim > 1 ) lim = 0.99;

    return function lucky(){

        var r = Math.random();
        p(r);

        if(r > lim){
            return true;
        }else{
            return null;
        }
    }
}

var lucky = setLuckyLimit(0.999);


if(require.main === module){

    until(lucky, 100, 20*1000).then(function(what){
        p(what);
        p(`here`);
    });

}


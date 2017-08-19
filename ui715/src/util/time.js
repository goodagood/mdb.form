
/*
 * A tool to do action UNTIL it return not null, or time limit reached.
 */



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
            //p(`millis : ${millis}`);
            return timeSelf();
        });

    }

    return timeSelf();
}


/*
 * @test : synchronous function, called without parameter.
 */
function checkUntil(test, interval, limit){

    // both in milli seconds:
    interval = interval || 100;
    limit    = limit    || 30 * 1000;

    var millis = 0;

    function timeSelf(){
        var ok = test();
        if(ok){
            return Promise.resolve(ok);
        }
        if(millis > limit){
            return Promise.resolve(null);
        }

        return Promise.delay(interval).then(function(){
            millis += interval;
            //p(`millis : ${millis}`);

            // chain up, 
            // But this shouldn't be recursive because we already RETURNed.
            return timeSelf();
        });

    }

    return timeSelf();
}


function wait(action, callback, interval, time_limit){

    interval = interval || 100;
    limit = time_limit || 30 * 1000; // milli seconds

    var millis = 0;

    function timedAction(){
        var result = action();

        if(result !== null){
            return callback(result);
        }
        if(millis > limit){
            return callback(null);
        }

        return setTimeout(function(){
            millis += interval;
            console.log(`millis: ${millis}`);

            timedAction();
        }, interval);

    }

    return timedAction();

}

export {until, checkUntil, wait};

//module.exports.until = until;
//module.exports.wait = wait;


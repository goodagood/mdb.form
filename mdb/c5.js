
function wait(action, callback, interval, time_limit){

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
if(require.main === module){


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
                return null;
            }
        }
    }

    var lucky = setLuckyLimit(0.999);



    wait(lucky, showIt, 100, 20*1000);
        

    function showIt(what){
        p(what);
        p(`show it`);
    }

}


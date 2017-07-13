
var vrec = require('./vrec.js');

var p = console.log;


function cInsertOne(){
    var o = {
        title: '0702 1546pm test c insert one',
        description: `finding the way
            the result give id, see it's objectId or string
            do the insert,
            and check the results
            `,
        test: true,
        milli: Date.now(),
    };

    o.value = (o.title + o.description).length;

    vrec.insertTop(o, function(err, what){
        //p(what);
        p(what.result);
        p(what.insertedId);
        p(typeof what.insertedId);
        p(Object.keys(what.insertedId));
        p(err);
    });
}

function cInsertSub(){
    var o = {
        title: 'sub2 0702 1638pm test insert sub',
        description: `finding the way
            the result give id, see it's objectId or string
            do the insert,
            and check the results
            `,
        test: true,
        milli: Date.now(),
    };

    o.value = (o.title + o.description).length;

    vrec.findOneTop(function(err, top){
        if(err) return p(err);

        //o.parentid = top['_id'].toString();
        o.parentid = top['_id'];
        p(o.parentid);

        vrec.insertTop(o, function(err, what){
            //p(what);
            p(what.result);
            p(what.insertedId);
            p(typeof what.insertedId);
            p();
            p(Object.keys(what.insertedId));
            p(err);
        });


    });


}




if(require.main === module){

    //cInsertOne();
    cInsertSub();

    setTimeout(()=>{
        process.exit();
    }, 3000);
}


var vrec = require('./vrec.js');

var p = console.log;

var o = {}; // to hold objects for inspecting.


function c_insert_top(){
    var data = {
        title: 'update write op result 0728 1722pm',
        description: `mongodb node.js callback get it
            write op result
            ops, connection, result
            do the insert,
            and check the results
            `,
        test: true,
        milli: Date.now(),
    };

    data.value = (data.title + data.description).length;

    vrec.insertOneTd(data, function(err, what){
        if(err) return p(err);

        o.what = what;
        //p(what);
        p(what.result);
        p(what.insertedId);
        p(typeof what.insertedId);
        p(Object.keys(what.insertedId));
        p(err);
    });
}

c_insert_top();


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

        vrec.insertOneTd(o, function(err, what){
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


function c_find_update_top(){
    vrec.findOneTop(function(err, top){
        if(err) return p(err);

        o.top = top;
        top.editmilli = Date.now();

        vrec.updateTD(top, function(err, data, status){
            if(err) return p(err);

            o.rdata = data;
            o.status = status;
            p('can y get this?');
        });

    });
}

//c_find_update_top();




//if(! vrec.updateTD){
//    p(`fuck, you get no vrec.updateTD`);
//}




if(require.main === module){

    //c_insert_top();
    //cInsertSub();

    //setTimeout(()=>{
    //    process.exit();
    //}, 3000);
}

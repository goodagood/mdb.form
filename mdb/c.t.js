
var t = require('./thumbs.js');
var v = require('./vrec.js');
var f = require('./fake.thumbs.js');


const ids = [
"5958a3cc6e8b8379302fcc99",
"595af3af8399a6456dad7d8c",
"59680c5bdd9d7d7594ffdc14",
"5945cbbb29c559709611c630",
"5945cbbb29c559709611c631",
"5945cb8029c559709611c629",
"595af4b0a237e945de1e29ec",
"5958a4efd6e26479b1659d6f",
"5958a4b4713b577975104aae",
"5966a28b5f882740e25bde96",
"5945cbbb29c559709611c62f",
"597e90199e939b3d74f6ab2c",
"596809296fe8b574e02a0675",
"5968094e6fe8b574e02a0676",
"596705345f882740e25bde97",
"597980b0ae9d8c4ca7eb17bd",
"59681142c361e1767b8894de",
"596810ad377410764c2dd2c9",
"59680a96ff4eaa7534f69970",
"597b0c9b8f9eb33bfc645342",
    ];


function cAdd(){
    //var uname = 'test01';
    var uname = f.fakeUsername();

    t.addOneThumb(uname, ids[2], false).then(function(what){
        console.log(what);
        console.log(Object.keys(what));
        console.log(uname);
        console.log(ids[2]);
    }).then(function(){
    });
}

function cAdd2(){
    //var uname = 'test01';
    var uname = f.fakeUsername();
    const id = ids[2];

    console.log(id);

    t.fakeAddThumb(id, false).then(function(what){
        //console.log(what);
        console.log(Object.keys(what));
        console.log(what.result);
        return 0;
    }).then(function(){
        return v.findOneById(id);
    }).then(function(one){
        console.log(one._id);
        console.log(one.title);
        console.log(one.thumbs.down);
    });
}

if(require.main === module){
    //cAdd();
    cAdd2();

    setTimeout(process.exit, 5000);
}


function setValue(obj){

}


function randint(start, stop){
    let gap = stop - start;

    if( gap < 1)  return parseInt(start);

    let r = Math.random();

    let x = r * gap + start;

    return parseInt(x);
}

function fakeUsername(){
    let rint = randint(1e6, 1e7 -1 );

    return `test-${rint}`;
}



function fakeRec(){
    var num = randint(0, 20);

    var r = {};

    for(i = 0; i < num; i++){
        r[fakeUsername()] = {milli: Date.now()};
    }

    return r;
}

function fakeThumbs(){
    let v = {};
    v.up   = fakeRec();
    v.down = fakeRec();

    return v;
}



module.exports.fakeThumbs = fakeThumbs;
module.exports.fakeUsername = fakeUsername;

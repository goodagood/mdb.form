
const vrec = require("./vrec.js");

const p = console.log;


function cFindTops(){
    vrec.findTops(20, function(err, what){
        if(err) return p(err);

        p(what);
    });
}


if(require.main === module){
    cFindTops();


    setTimeout(process.exit, 2000);
}


var vrec = require("./vrec.js");
var p = console.log;


vrec.findArray({}, null, null).then(function(aa){
    aa.forEach(function(one){
        p(one._id);
        p(one.title);
        var keys = Object.keys(one);

        keys.forEach(function(k){
            if (k.includes('thumbs')) p(`  ${k}  in keys`);
        });
    });
});




if(require.main === module){
    setTimeout(process.exit, 5000);
}

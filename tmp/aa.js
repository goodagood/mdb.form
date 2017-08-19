
var aa = [1,3,5];

var da = {a:1, b:2}


//aa.forEach(function(x,y,z){
//    console.log(x,y,z);
//});


function clistMenuItems(obj){
    var list = [];
    for (var k in obj){

        list.push(k);
    }
    console.log( list.join("\r\n") );
}

if(require.main === module){
    clistMenuItems(da);
}

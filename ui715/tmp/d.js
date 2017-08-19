
function dshow(year, month, day){
    var d = new Date(year, month, day);
    var len = d.getTime().toString().length;
    console.log(d.getTime(), len);
}

function m13(milli){
    milli = milli || 9999999999999;

    var d = new Date(milli);
    console.log(d);
    var len = d.getTime().toString().length;
    console.log(d.getTime(), len);
}

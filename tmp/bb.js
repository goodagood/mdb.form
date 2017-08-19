
function toCall(data){
    this.data = data;
    console.log('to call');
}


var o = {
    data: null,

    control: toCall.bind(this),
}

function wrap(control){
    var o = {};


    function setIt(data){
        var data = passin();
        o.data = data;
    }

    o.set = setIt;
}

o.control({a:1, b:2});


function mko(){
    var d = {'hi': 'I mean hello'};
    var o = {};

    //o.getDataObj = ()=>{return d;};
    o.getDataObj = function(){return d;};

    o.addkv = (k,v) =>{d[k] = v;};

    o.hi_is_high = ()=> d.hi = 'High';

    return o;
}

var o = mko();

function inherite(){
    var o = mko();
    var d = o.getDataObj();

    o.showData = ()=>{ console.log(d);};
    return o;
}

var oi = inherite();
oi.showData();
oi.addkv('three', 3);
oi.showData();


var d  = Date.now();
var ds = Date.now().toString();
var dsa = '37389';
var dsb = (d*1.1).toString();


var d13 = /^\s*\d{13}\s*$/;
var milliCheck = (digitalStr) =>{
    if(digitalStr){
        return d13.test(digitalStr);
    }else{
        return false;
    }
}

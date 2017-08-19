
function fakeUsername(prefix, number){
    prefix = prefix || 'test';
    number = number || 3;
    
    var name = prefix;
    var i = 0;

    for (i=0; i < number; i++){
        name += digit().toString();
    }

    return name;
}

function digit(){
    var i = Math.floor(Math.random() * 10);
    return i;
}



if(require.main === module){

    console.log(fakeUsername('aaa', 8));
    var i = 0;
    for (i=0; i<8; i++){
        //console.log(i);
        console.log(fakeUsername());
    }
}else{
    export {fakeUsername};
}

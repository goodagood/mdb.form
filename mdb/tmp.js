

var setOne = (mid) =>{
    //vc.findOneByIDStr(mid);
    return getOneById(mid.toString()).then((one)=>{
        p(one);
        return one;
    });
}

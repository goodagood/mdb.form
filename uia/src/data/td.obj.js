
const p = console.log;

function prepareTitleDescriptionObj(){
    let d = {}; //data
    let o = {}; //obj using data
    let url = null; // the url accept json from fetch api
    let timer = {
        'id': null,
        'milli': -1, // 'the milli-seconds set by setTimeout
        'delay': 5000, // 5s
    }

    o.getData = ()=>{ return d; };

    o.setData = (data)=>{
        d = data;
        d['milli'] = Date.now().toString();
    };

    o.print = ()=>{ console.log(d); };

    const setChangeMill = ()=>{ d['milliChange'] = Date.now(); };
    const setSaveMill = ()=>{ d['milliSave'] = Date.now(); };

    o.setTitle = (title)=>{
        d['title'] = title;
        setChangeMill();
        //d['milliChange'] = Date.now().toString();
    };

    o.setDescription = (description)=>{
        d['description'] = description;
        setChangeMill();
        //d['milliChange'] = Date.now().toString();
    };

    o.setUrl = (u)=>{ url = u; };
    o.getUrl = ()=>{ return url; };

    o.getValue = (key)=>{ return d[key]; };
    o.setValue = (key, value)=>{ d[key] = value; setChangeMill(); };

    o.assign = (obj)=>{ Object.assign(d, obj); setChangeMill(); };

    o.validate = ()=>{
        if(d['title'] === null) return false;
        if(d['value'] === null) return false;

        if(typeof d.description !== 'string') return false;
        if(d.description.length < 1) return false;

        return true;
    }


    // with callback
    o._save = (callback)=>{
        fetch(url, {
            method: 'post',
            body: JSON.stringify(d),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }),
            redirect: 'follow',
        }).then((resp)=>{
            p('then: ', resp);
            p();
            p('resp obj keys: ', Object.keys(resp));

            p(resp.ok);

            p();
            return resp.json();
            //return callback(null, resp);
        }).then((j)=>{
            p('can we get json from promise? ', j);
            p('can we throw err any way ? ', j);
            return Promise.reject('reject it from Promise.reject and return');
            //throw('this is stone head');
        }).catch(function(err){
            p('catch ', err);

            //return callback(err);
        });
    };

    /*
     * timer : {
     *      milli-seconds: ,
     *      id: set by setTimeout
     * }
     */
    o.saveLater = ()=>{
        let milli = Date.now();

        if(timer && timer['milli']){
            if( milli < timer['milli']){
                clearTimeout(timer['id']);
            }
        }

        timer['id'] = setTimeout(o._save, timer['delay']);
        timer['milli'] = milli + timer['delay'];
    };


    return o;
}


export {prepareTitleDescriptionObj}


// checking

function basic(){
    let obj = prepareTitleDescriptionObj();

    let data = {
        'title': 'this is title',
        'description': 'thi sis descr.',
        'milli': Date.now().toString(),
    };
    obj.print(obj.getData());
    obj.setData(data);
    obj.print();

    obj.print(obj.getData());

    obj.setUrl('/the.url.give.josn.post');
    console.log(obj.getUrl())
}

if(require.main === module){
    basic();
}

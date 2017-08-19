
import {postTitleDescription} from 'src/util/pipe.js';

const p = console.log;


function getTitleDescriptionObj(){
    let d = {}; //data
    let o = {}; //obj using the data

    // use src/util/pipe.js, we don't need url anymore
    let url = null; // the url accept json from fetch api

    let timer = {
        'id-timeout': null,
        'milli': -1, // 'the milli-seconds set by setTimeout
        'delay': 5000, // 5 seconds
    }

    o.getData = ()=>{ return d; };

    o.setData = (data)=>{
        d = data;
        d['milli'] = Date.now().toString();
    };

    o.print = ()=>{ console.log(d); };

    const setChangeMill = ()=>{ d['milliChange'] = Date.now(); };
    const setSaveMill = ()=>{ d['milliSave'] = Date.now(); };


    o.setUrl = (u)=>{ url = u; };
    o.getUrl = ()=>{ return url; };

    o.getKey = (key)=>{ return d[key]; };
    o.setKey = (key, value)=>{ d[key] = value; setChangeMill(); };

    o.assign = (obj)=>{ Object.assign(d, obj); setChangeMill(); };

    o.validate = ()=>{
        if(d['title'] === null) return false;
        if(d['value'] === null) return false;

        if(typeof d.description !== 'string') return false;
        if(d.description.length < 1) return false;

        return true;
    }


    // return the promise
    o._save = ()=>{
        return postTitleDescription(d).then(function(jdata){
            if(!d['id']){
                console.log('got id: ', jdata['id'] || jdata['_id']);
                if(jdata['id'])  d['id']  = jdata['id'];
                if(jdata['_id']){
                    d['_id'] = jdata['_id'];
                    d['id'] = jdata['_id'].toString();
                }
            }
            setSaveMill();
            return jdata; // json data
        });
    }


    /*
     * timer : {
     *      milli-seconds: ,
     *      id-timeout: set by setTimeout
     * }
     */
    o.saveLater = ()=>{
        let milli = Date.now();

        if(timer && timer['milli']){
            if( milli < timer['milli']){
                clearTimeout(timer['id-timeout']);
            }
        }

        timer['id-timeout'] = setTimeout(o._save, timer['delay']);
        timer['milli'] = milli + timer['delay'];
    };


    o.getTitle = ()=>{
        return d['title'];
    }

    o.setTitle = (title)=>{
        d['title'] = title;
        setChangeMill();
        o.saveLater();
    };

    o.getDescription = ()=>{
        return d['description'];
    }

    o.setDescription = (description)=>{
        d['description'] = description;
        setChangeMill();
        o.saveLater();
    };

    return o;
}


const setupTD = (url) =>{
    let obj = getTitleDescriptionObj();
    obj.setUrl('/the.url.give.josn.post');
}


export {getTitleDescriptionObj, setupTD}


// checking

function basic(){
    let obj = getTitleDescriptionObj();

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

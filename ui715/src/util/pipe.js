
import Config from 'src/config.js';

// Config.url_insert_one 


const postTitleDescription = (j) =>{
    // post a title-description doc into db by fetch, the doc is: j

    return fetch(Config.url_insert_one, {
        method: 'post',
        body: JSON.stringify(j),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }),
        redirect: 'follow',
    }).then(function(response){
        console.log('then: ', response);
        console.log('then obj keys: ', Object.keys(response));

        var contentType = response.headers.get("content-type");
        if(contentType && contentType.includes("application/json")) {
          return response.json();
        }
        throw new TypeError("Oops, we haven't got JSON!");

    });
    
    //.catch(function(err){
    //    p('catch ', err);
    //});
}


const getTopRecords = () =>{
        //var addr = "/top20";
        var addr = Config.get_top_logs;
        return fetch(addr).then((response) =>{
            return response.json();
        })
};


// fake thumb

const fakeThumbAction = (jsonData) =>{
    // post a thumb up OR down action to backend.
    // user name should be determined by the backend.
    // jsonData: 
    // {
    //   idstr: 'string of record id',
    //   isUp:  'true for thumb up, false else
    // }

    return fetch(Config.url_fake_thumb, {
        method: 'post',
        body: JSON.stringify(jsonData),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }),
        redirect: 'follow',
    }).then(function(response){
        //console.log('then: ', response);
        //console.log('then obj keys: ', Object.keys(response).join(", "));

        var contentType = response.headers.get("content-type");
        if(contentType && contentType.includes("application/json")) {
          return response.json();
        }else{
            throw new TypeError("Oops, we haven't got JSON!");
        }

    });
    
    //.catch(function(err){
    //    p('catch ', err);
    //});
}



// for checkings
setTimeout(()=>{
window.url_insert_one = Config.url_insert_one;
window.postTitleDescription = postTitleDescription;
window.jdata = {
    'title': 'where value come from?' + Date().toString(),
    'description': `It must from God.
        basically the html + css + js get broken
        by many front end frameworks
        ` + Date().toString(),
    'test':true,
    'milli': Date.now().toString(),
};
}, 3000);

export {postTitleDescription, getTopRecords, fakeThumbAction};

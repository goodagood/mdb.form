
/*
 * data from db2, the collection has data after 
 * converting 2 fields to 1, 
 * title description convert to words
 */


import Config from './config.js';

// Config.url_insert_one 


const find = (txt, opt) =>{

    // txt: search in field "words", ignore case
    // opt: {skip, limit}

    var j = {
        opt: opt
    }

    if(txt) j.txt = txt;

    return fetch(Config.url_find, {
        method: 'post',
        body: JSON.stringify(j),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }),
        redirect: 'follow',
    }).then(function(response){
        console.log('find db2 then: ', response);

        var contentType = response.headers.get("content-type");
        if(contentType && contentType.includes("application/json")) {
          return response.json();
        }
        throw new TypeError("Oops to find docs in collection words, we haven't got JSON!");

    });
    
}



export {find};

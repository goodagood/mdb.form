
// must for reactjs
import React, { Component } from 'react';

import Radium from 'radium';

import {buildMenu} from './menu.top.js';
import BasicHeader from './header.js';
import TitleDescriptionThumbs from './tdt.js';
import BasicFooter from './footer.js';

import BasicText from './element/basic.text.js';

/*
 * render front page with one title description.
 */
function composeFrontPage (typeOfPage, opt){
//function composeFrontPage (typeOfPage, menuItems, menuCallback)

    console.log(typeof tdList, Object.keys(tdList));
    //console.log(typeof tdList, menuItems, typeof menuCallback);

    let content = (typeOfPage, opt)=>{
        if(typeOfPage === 'edit'){
            return <h1> edit, top t.d. </h1>;//
        }

        return <h1> Content in front compose </h1>;
    }

    // style
    const s = {
        display: 'block',
        clear: 'both',
    };

    return (
        <div className="frontPage" style={s}>
            <BasicHeader control={null} />
            {buildMenu(menuItems, menuCallback)}

            <hr style={s} />

            {content()}

            <BasicFooter />
        </div>
    );
}


export {composeFrontPage};

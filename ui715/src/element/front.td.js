
// this is must for reactjs
import React, { Component } from 'react';

import Radium from 'radium';

import {buildMenu} from './menu.top.js';
import BasicHeader from './header.js';
import TitleDescriptionThumbs from './tdt.js';
import BasicFooter from './footer.js';

/*
 * render front page with one title description.
 */
function renderTD (dataObj, menuItems, menuCallback){

    // dataObj is the title description object
    //
    // items = {
    //     "menu-name-without-space": "menu text to show on",
    //     firstMenu: "First Menu",
    //     secondMenu: "2nd menu content",
    //     thirdMenu: "BIG three",
    // };
    //
    // clickCallback will get "menu name" as parameter.

    const s = {
        display: 'block',
        clear: 'both',
    };

    return (
        <div className="frontPage" style={s}>
            <BasicHeader control={null} />
            {buildMenu(menuItems, menuCallback)}

            <hr style={s} />

            <TitleDescriptionThumbs data={dataObj} />
            <BasicFooter />
        </div>
    );
}


export {renderTD};

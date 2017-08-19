
import React, { Component } from 'react';

import {Menu} from './menu.js';


function buildMenu(items, clickCallback){

    // items = {
    //     "menu-name-without-space": "menu text to show on",
    //     firstMenu: "First Menu",
    //     secondMenu: "2nd menu content",
    //     thirdMenu: "BIG three",
    // };
    //
    // clickCallback will get "menu name" as parameter.

    return <Menu menuItems={items} menuCallback={clickCallback}  />;
}


export {buildMenu};



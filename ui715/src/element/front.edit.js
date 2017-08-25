
// must for reactjs
import React, { Component } from 'react';

import Radium from 'radium';

import {buildMenu} from './menu.top.js';
//import {Menu} from './menu.js';

import BasicHeader from './header.js';
import TitleDescriptionThumbs from './tdt.js';
import BasicFooter from './footer.js';

import BasicText from './basic.text.js';

/*
 * render front page editing one t.d.
 * front.a.js keep error on menu items.
 */
function tdEdit (tdObj, menuItems, menuCallback){

    let _menuItems = menuItems;
    let _menuCallback = menuCallback;

    //console.log('front a menu items: ', menuItems);

    let content = (typeOfPage)=>{
        //console.log(': edit');
        //return <h1> eit, top t.d. </h1>;//

        return <TitleDescriptionThumbs data={dataObj} />;

        //return <h1> Content in edit td </h1>;
    }

    function newMenu(){
        console.log(_menuItems, 888);
        return <Menu menuItems={_menuItems} menuCallback={_menuCallback}  />;
    }

    // style
    const s = {
        display: 'block',
        clear: 'both',
    };

            //{content(typeOfPage)}
            //{buildMenu({a:1, b:2}, menuCallback)}
            //{buildMenu({a:3, b:4}, menuCallback)}
            //
            // ?double build?
            //{buildMenu(menuItems, menuCallback)}
    return (
        <div className="frontPage" style={s}>
            <BasicHeader control={null} />

            {buildMenu(menuItems, menuCallback)}

            <hr style={s} />

            <TitleDescriptionThumbs data={tdObj} />;

            <BasicFooter />
        </div>
    );
}


export {tdEdit};

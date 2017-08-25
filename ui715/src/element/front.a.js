
// must for reactjs
import React, { Component } from 'react';

import Radium from 'radium';

//import {buildMenu} from './menu.top.js';
import {Menu} from './menu.js';

import BasicHeader from './header.js';
import TitleDescriptionThumbs from './tdt.js';
import BasicFooter from './footer.js';

import BasicText from './basic.text.js';

/*
 * render front page with one title description.
 */
function composeFrontPage (typeOfPage, opt){

    let _menuItems = opt.menuItems;
    let _menuCallback = opt.menuCallback;

    //console.log('front a menu items: ', menuItems);

    let content = (typeOfPage)=>{
        if(typeOfPage === 'edit'){
            //console.log('typeof page: edit');
            //return <h1> edit, top t.d. </h1>;//

            let dataObj = opt.tdObj;
            return <TitleDescriptionThumbs data={dataObj} />;
        }

        return <h1> Content in front compose </h1>;
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

    console.log('last front a menu items: ', _menuItems);

    return (
        <div className="frontPage" style={s}>
            <BasicHeader control={null} />
            {newMenu()}

            <hr style={s} />

            {content(typeOfPage)}

            <BasicFooter />
        </div>
    );
}


export {composeFrontPage};

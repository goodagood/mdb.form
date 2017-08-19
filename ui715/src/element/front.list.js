
// must for reactjs
import React, { Component } from 'react';

import Radium from 'radium';

import {buildMenu} from './menu.top.js';
import BasicHeader from './header.js';
import TitleDescriptionThumbs from './tdt.js';
import BasicFooter from './footer.js';

/*
 * render front page with one title description.
 */
function frontList (tdList, menuItems, menuCallback){

    console.log(typeof tdList, Object.keys(tdList));
    //console.log(typeof tdList, menuItems, typeof menuCallback);

    // tdList is the list of title description object
    //
    // menu items = {
    //     "menu-name-without-space": "menu text to show on",
    //     firstMenu: "First Menu",
    //     secondMenu: "2nd menu content",
    //     thirdMenu: "BIG three",
    // };
    //
    // clickCallback will get "menu name" as parameter.


                        //onClick={()=>{this.passBackId(id);}}


    function mkList (){
        return tdList.map((tdo)=>{
            //console.log(tdo.id);
            let id = tdo.getIdStr();

            return(
                <li
                        key={id} 
                        onClick={()=>{console.log(id);}}
                >
                    {tdo.getTitle()}
                        
                </li>
            );
        });
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

            <ul>
                {mkList()}
            </ul>

            <BasicFooter />
        </div>
    );
}


export {frontList};


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

    //console.log(typeof tdList, Object.keys(tdList));
    //console.log(typeof tdList, menuItems, typeof menuCallback);

    function mkList (){
        return tdList.map((tdo)=>{
            //console.log(tdo.id);
            let id = tdo.getIdStr();
            let opt= {"id": id};

            return(
                <li
                        key={id} 
                        onClick={()=>{menuCallback('edit', opt);}}
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



import React, { Component } from 'react';


import {TitleDescription} from './ui.td.js';

//import Sublist from './sub.list.js';
//import {AddSubTitleDescription} from './add.td.sub.js';


import Thumbs from './thumbs.js';
import {Menu} from './menu.js';

const p = console.log;




/*
 * one title description (top) and thumbs
 */
class TitleDescriptionThumbs extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.opt = {};

        this.dataObj = null; 
        if(props.data) this.dataObj = props.data; //obj


    }



    dataNotReady(){
        return (
                <div className="testOneTitleDescriptionAndThumbs">
                <p className="informati">
                     data not ready
                </p>
                </div>
               );

    }

    show(what){
        console.log("tdt.js: ", what);
    }



    render_tdt (){
        // render title description thumbs
        return (
            <div className="tdt" id="tdt"
            >

            {/* one pair place holder in the one.rec.js 

               <h1> place holder for tdt.js </h1>
                 style={styles.hands} 

               <BasicText />
            */}


               <TitleDescription dobj={this.dataObj} opt={this.opt} />
               <Thumbs thumbsobj={this.dataObj.getThumbsObj()} />


            </div>

        );
    }


    render(){
        if(this.dataObj !== null) return this.render_tdt();
        //else return this.dataNotReady();

        return this.dataNotReady();
    }
}

export default TitleDescriptionThumbs;

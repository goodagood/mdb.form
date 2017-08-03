
import React, { Component } from 'react';

import Radium from 'radium';

import {ExampleMenu} from './burger.js';
//import './basic.text.scss';


class BasicFooter extends Component {
    constructor(props) {
        super(props);
    }

    renderBasicFooter (){
        return (
            <div className="basicFooter" 
                style={styles.basic}
            >

            <p> Free as beer, open as software, license under GPL. </p>
            <p style={styles.hone}> 2017 Andrew </p>

            </div>
        );
    }

    aaTest (){
        return (
           <div className="basicFooter">
               place holder for basic text
           </div>
        );
    }

    render (){
        return this.renderBasicFooter();
    }
}

const styles = {
    basic: {
        borderTop: "3px solid grey",
        textAlign: "center",
        //backgroundColor: "#efefef",
        minHeight: "32px",
    },
    hone: {
        margin: "3px auto 3px",
        padding:0,
        fontFamily: "Monospace, Helvetica, Arial, sans-serif",
        fontSize: "15px"
    },
}


BasicFooter = Radium(BasicFooter);
export default BasicFooter;


import React, { Component } from 'react';

import Radium from 'radium';

import {ExampleMenu} from './burger.js';
//import './basic.text.scss';


class BasicHeader extends Component {
    constructor(props) {
        super(props);
    }

    renderBasicHeader (){
        return (
            <div className="basicHeader" 
                style={styles.basic}
            >

                <div style={styles.logo}> sys.value.log  </div>
                {/*
                <div style={styles.icon}>
                    <i className="fa fa-thumbs-o-up"></i>
                    <i className="fa fa-thumbs-o-down"></i>
                </div>
                */}

                <ExampleMenu right pageWrapId={ "content" } outerContainerId={ "root" } />

            </div>
        );
    }

    aaTest (){
        return (
           <div className="basicHeader">
               place holder for basic text
           </div>
        );
    }

    render (){
        return this.renderBasicHeader();
    }
}

const styles = {
    basic: {
        fontFamily: "Monospace, Helvetica, Arial, sans-serif",
        display: "block",
        //backgroundColor: "white",
    },
    logo: {
        display: "inline-block",
        fontSize: "1.2em",
        float: "left",
    },
    icon: {
        fontFamily: "Monospace, Helvetica, Arial, sans-serif",
        fontSize: "1.2em",
        display: "inline-block",
        float: "left",
        paddingLeft: "1em",
        paddingRight: "1em",

    },
}


BasicHeader = Radium(BasicHeader);
export default BasicHeader;


import React, { Component } from 'react';

import Radium from 'radium';

import {ExampleMenu} from './burger.js';
//import './basic.text.scss';


class BasicHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
        };

        this.control = props.control;
    }

    /*
                //<div style={styles.menu_wrap}>
                //  <span style={styles.item}> some menu </span>
                //  <span style={styles.item}> number #2 </span>
                //    <i className="fa fa-thumbs-o-up"></i>
                //    <i className="fa fa-thumbs-o-down"></i>
                //</div>

                //<ExampleMenu right pageWrapId={ "content" } outerContainerId={ "root" } />
                */
    renderBasicHeader (){
        return (
            <div className="basicHeader" 
                style={styles.basic}
            >
                <div style={styles.logo}> sys.value.log  </div>
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
        height: "1.5em",
        //backgroundColor: "white",
    },
    logo: {
        display: "inline-block",
        fontSize: "1.2em",
        float: "left",
    },
    menu_wrap: {
        fontFamily: "Monospace, Helvetica, Arial, sans-serif",
        fontSize: "1.2em",
        display: "inline-block",
        float: "right",
        paddingLeft: "1em",
        paddingRight: "1em",

    },
    item: {
        fontFamily: "Verdana, Arial, sans-serif, Helvetica, Monospace",
        fontSize: "1.1em",
        fontWeight: "bold",
        padding: "0.2em 0.5em 0.5em",
    }
}


BasicHeader = Radium(BasicHeader);
export default BasicHeader;


import React, { Component } from 'react';

import Radium from 'radium';

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

            <h1 style={styles.hone}> sys.value  </h1>

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
        backgroundColor: "white",
    },
    hone: {
        fontFamily: "Monospace, Helvetica, Arial, sans-serif",
    },
}


BasicHeader = Radium(BasicHeader);
export default BasicHeader;

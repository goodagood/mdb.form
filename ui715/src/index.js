
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import Radium from 'radium';

import BasicHeader from './element/header.js';
import BasicText from './element/basic.text.js';

//import 'bulma/css/bulma.css';
//import 'bulma/bulma.sass';
import './normalize.skeleton.css';

import './index.scss'; //?


class RootDiv extends Component {
    //constructor(props) {
    //    super(props);
    //}    

    render (){
        return (
           <div className="rootcomponent">
            {/* header */}
            <BasicHeader />

            <div className="content">
               place holder in the index.js as root date? { Date().toString()}
               <BasicText />
            </div>

            {/* footer */}
           </div>
        );
    }
}

const styles = {
    root: {
    },
}




ReactDOM.render(
      (<RootDiv />),

      document.getElementById('root')
);


// checking
//document.getElementById('showDate').innerHTML = `get ele. by id, doing THIS AT: ${ Date().toString() } `;

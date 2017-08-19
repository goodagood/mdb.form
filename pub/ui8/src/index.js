
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { I18nextProvider} from 'react-i18next'; // del translate
import i18n from './util/i18n.js';

import BasicHeader from './element/header.js';
import BasicText from './element/basic.text.js';
import BasicFooter from './element/footer.js';

import HandPair from './element/a.hands.js';

//import 'bulma/css/bulma.css';
//import 'bulma/bulma.sass';
//import 'font-awesome/css/font-awesome.css';

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

            <div className="content" id="content" style={styles.content}>
            {/* place holder in the index.js as root date? { Date().toString()} 

               <BasicText />
            */}

               <HandPair />
            </div>

            {/* footer */}
            <BasicFooter />
           </div>
        );
    }
}

const styles = {

    content: {
        minHeight: "300px",
        clear: "left"
    },
}




ReactDOM.render(
      (
        <I18nextProvider i18n={ i18n }>
         <RootDiv />
        </I18nextProvider>
       ),

      document.getElementById('root')
);


// checking
//document.getElementById('showDate').innerHTML = `get ele. by id, doing THIS AT: ${ Date().toString() } `;

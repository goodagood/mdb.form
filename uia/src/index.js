import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//import { I18nextProvider, translate } from 'react-i18next'; // del translate
import { I18nextProvider} from 'react-i18next'; // del translate
import i18n from './i18n.js';

import registerServiceWorker from './registerServiceWorker';


import 'normalize.css'; 
import './index.css';

import {prepareTitleDescriptionObj} from './data/td.obj.js';  //checking


ReactDOM.render(
        <I18nextProvider i18n={ i18n }>
          <App />
        </I18nextProvider>,
        document.getElementById('root')
);

//?  //checking

//var data = {
//    'title': '0714 0832am try Promise.reject ' + Date().toString(),
//    'description': `0714 this test catch the reject
//        it should be babeled.
//        ` + Date().toString(),
//    'test':true,
//    'milli': Date.now().toString(),
//};
//window.mmoo = prepareTitleDescriptionObj();
//window.mmoo.setData(data);
//window.mmoo.setUrl('/insertone');

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//import { I18nextProvider, translate } from 'react-i18next'; // del translate
import { I18nextProvider} from 'react-i18next'; // del translate
import i18n from './i18n.js';

import registerServiceWorker from './registerServiceWorker';

//import 'normalize.css/normalize.css'; 
import './index.css';

ReactDOM.render(
        <I18nextProvider i18n={ i18n }>
          <App />
        </I18nextProvider>,
        document.getElementById('root')
);

registerServiceWorker();

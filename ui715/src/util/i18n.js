
import i18n from 'i18next';
//import XHR from 'i18next-xhr-backend';
//import LanguageDetector from 'i18next-browser-languagedetector';

import mytrans from './i18n.resources.js';

i18n
  //.use(XHR)
  //.use(LanguageDetector)
  .init({
    debug: false,
    lng: 'cn',
    fallbackLng: 'en',
    debug: true,
    resources: mytrans,
    //loadPath: '/trans.json', //2017 0711


    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    // react i18next special options (optional)
    react: {
      wait: false, // set to true if you like to wait for loaded in every translated hoc
      nsMode: 'default' // set it to fallback to let passed namespaces to translated hoc act as fallbacks
    }
  }, (err)=>{
      if(err) console.log('i18n init err: ', err);
  });


export default i18n;

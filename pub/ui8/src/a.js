
const React = require('react');
const ReactDOM = require('react-dom');

//const ReactDOM = require('react-dom');
//const rd = require('react-dom');

const $ = require('jquery');

const Menu = require('./es5ed/menu.js');


//const testBabel = require("./rct/ra.js");


$(document).ready(function(){

    //testBabel.cBabel();

    //var m = Menu.buildMenu({one: 'Mone', two: 'Mtwo'}, console.log);

    //ReactDOM.render(m, document.getElementById('nav'));

    //var m2 = Menu.renderNavMenu({one: 'M2one', two: 'M2two'}, console.log);

    var data = require('./data.js');

    var m2 = Menu.renderNavMenu(data.nav.context, console.log);

    //data.emit('demoEvent');
    //data.nav.context['new'] = 'new item';
    //data.emit('menuContextChanged');

    console.log(Object.keys(m2));

    console.log('last line .');
});


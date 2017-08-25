
const Event = require('./e.js');

class Data extends Event.Emitter {};

//var emitter = new Event.Emitter();

var data = new Data();

const d = {
    nav: {
        default:{},
        context:{add: 'Add', list:'List'},
        current:'Current Menu',
    },

    color: {},
    config: {},

    recs: {}, // value records
};

data = Object.assign(data, d);

//data.on('demoEvent', ()=>{
//    console.log('demo event occured');
//});

const menu = require('./es5ed/menu.js');

data.on('menuContextChanged', ()=>{
    console.log('menu context event occured');
    //console.log(data.nav.context);
    menu.renderNavMenu(data.nav.context, console.log);
});

module.exports = data;


if(require.main === module){
    let p = console.log;
    p(Object.keys(de));
    //p(Object.keys(emitter));
    de.emit('demoEvent');
    de.emit('menuContextChanged');
    console.log(de.nav);
}

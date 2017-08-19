
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Radium from 'radium';

import { I18nextProvider} from 'react-i18next'; // del translate
import i18n from './util/i18n.js';

import BasicHeader from './element/header.js';
import BasicText from './element/basic.text.js';
import BasicFooter from './element/footer.js';

//import Thumbs from './element/thumbs.js';

//import TitleDescriptionThumbs from './element/t.one.js';

import {renderTD} from './element/front.td.js';
import {frontList} from './element/front.list.js';

//import 'bulma/css/bulma.css';
//import 'bulma/bulma.sass';
//import 'font-awesome/css/font-awesome.css';

import './normalize.skeleton.css';

import './index.scss'; //?

// set up data object, title description set
import {tds} from 'src/data/tds.js';

// // for checking
// setTimeout(()=>{
//     window.tds = tds;
//     tds.waitFetched().then(function(){
////         window.td = tds.randomTopTD();
//         //console.log('window td: ', window.td.getData());
//     });
// }, 2000)



class RootDiv extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fetched: false,
            single: null,
            currentMenuItem: null,
        };

        this.dataObj = tds;
        this.randomTD = null; //obj

        tds.waitFetched().then((obj)=>{
            if(obj === null) throw('fetch return null');

            this.randomTD = tds.randomTopTD();
            //console.log(this.randomTD);

            this.setState({fetched: true});

            // during dev
            let opt = {
                id: this.randomTD.getIdStr(),
            };
            //this.setState({fetched: true, currentMenuItem: 'edit', currentMenuOpt: opt});
            //this.setState({fetched: true, currentMenuItem: 'list'});
        });

        this.renderList = this.renderList.bind(this);
    }

    menuCallback = (name, opt)=>{
        // callback to set current menu item

        if(typeof name !== 'string') return;

        if( name === 'edit' ){

            return this.setState({
                'currentMenuItem':name, 
                'currentMenuOpt': opt, 
            });
        }

        if( name === this.state['currentMenuItem'] ) return;

        return this.setState({'currentMenuItem':name});
    }

    // start render even if no data
    startRendering (){
        // wait and render
        if(this.state.fetched){
            return this.renderRandom()
        }else{
            return <div> <h1> index.js fetching data, render Fetching ... </h1> </div>;
        }
    }

    renderRandom (){
        var items = {
             add: "Add",
             list: "List",
             what: "BIG three",
         };
        
        return renderTD(this.randomTD, items, this.menuCallback);
    }

    renderList (){
        var items = {
             add: "Add",
             help: "Help",
         };
        
        let tdArray = this.dataObj.giveData().aa;
        console.log(tdArray.length);

        return frontList(tdArray, items, this.menuCallback);
    }


    renderEditor (){
        var items = {
             add: "Add",
             help: "Help",
         };
        
        let tdArray = this.dataObj.giveData().aa;
        console.log(tdArray.length);

        return frontList(tdArray, items, this.menuCallback);
    }


    //m
    renderContent (){
        if(this.state.fetched){
            //return <TitleDescriptionThumbs data={this.randomTD} />;
            return this.renderRandom();
        }else{
            return <div> <h1> index.js fetching data ... </h1> </div>;
        }
    }

    render_old (){
        return (
           <div className="rootcomponent">

            {/* header */}
            <BasicHeader control={null} />

            <div className="content" id="content"
                 style={styles.content}
            >

            {/* place holder in the index.js as root date? { Date().toString()} 

                {this.renderContent()}

            */}

               <BasicText />

            {/*
            */}
            </div>

            {/* footer */}
            <BasicFooter />
           </div>
        );
    }


    render (){
        //console.log('index render');
        //return this.startRendering();

        let menu = this.state.currentMenuItem;

        switch(menu){
            case 'add':
                return <h1> switch to add </h1>
                //return this.render_old()
                break;
            case 'edit':
                return <h1> edit a title description</h1>
                //return this.renderEditor()
                break;
            case 'list':
                //return <h1> switch to list </h1>
                return this.renderList()
                break;
            case 'random':
                return this.renderRandom()
            default:
                return this.startRendering();
        }
    }
}

RootDiv = Radium(RootDiv);

const styles = {

    content: {
        minHeight: "300px",
        clear: "left"
    },

    hands: {
        marginTop: "0.5em",
        marginBottom: "0.5em",
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



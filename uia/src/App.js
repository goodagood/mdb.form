import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//import ListEditor from './title.description/list.editor.js';

import ContentArea from './title.description/content.area.js';

import {TitleDescription} from './title.description/td.js'; //d
import Sublist from './title.description/sub.list.js';
import TopListor from './title.description/top.list.js';
//import TestOneRec from './title.description/one.rec.js';
import TopAndSub from './title.description/top.and.sub.js';
import {AddTitleDescription} from './title.description/add.td.js';

//import {ButMenu} from './menu.button/but.js';
import {ExampleMenu} from './menu.button/burger.js';

import {translate} from 'react-i18next';

const p = console.log;


class App extends Component {


    constructor(props) {
        super(props);

        this.state = {
            //showWhat: 'listTopRec',
            //oneid: 'the id of the top record to be shown up'
        };

        this.contentStateControl = null;

        //this.jsonurl = "/20less";

        //this.data = null;
        //this.top  = null;
        //this.subs = null;

        //setTimeout(this.fetchData, 10);
    }

    //doing
    passBackStateSetter = (function2setState)=>{
        this.contentStateControl = function2setState;
    }

    addNewRecEventHandler = (e)=>{
        e.preventDefault();
        console.log('called .. 1008am ');
        
        if(this.contentStateControl == null){
            return console.log('no contentStateControl, it is null');
        }

        this.contentStateControl({showWhat:'AddNew'});
    }

    render(){
        const {t} = this.props;

        return (

            <div className="App" id="appdiv">
                <ExampleMenu right pageWrapId={ "page-wrap" } outerContainerId={ "appdiv" } />

                <main id="page-wrap">
                    <form className="chooser">

                        <button type="button" 
                            onClick={(e)=>{this.setState({showWhat:'ListTopRec'})}}>
                            List Value Records
                        </button>

                        <button type="button"
                            onClick={this.addNewRecEventHandler}>
                        >
                        Add Value Record </button>

                    </form>
                    {/*
                    <button type="button"
                        onClick={(e)=>{this.setState({showWhat:'TestOneRec'})}}>
                    >
                    show One top Value </button>

                    Change to another component

                    {this.switchRender()}

                    do translation test
                    <p> test i18n: {t('helloo')} </p>
                    */}

                    
                    <ContentArea passBackStateSetter={this.passBackStateSetter} />


                </main>
            </div>
        );
    }
}

//export default App;
export default translate()(App);

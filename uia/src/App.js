import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import ListEditor from './title.description/list.editor.js';

import {TitleDescription} from './title.description/td.js';

const p = console.log;


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.jsonurl = "/20less";

        this.data = null;
        //this.top  = null;
        //this.subs = null;

        setTimeout(this.fetchData, 10);
    }

    fetchData = ()=>{
        //console.log(this.jsonurl);
        this.data = null;
        fetch(this.jsonurl).then((response) =>{
            return response.json();
        }).then((j)=>{
            //console.log('json? ', j);
            this.data = j;
            this.setState({'fetched': true});

            console.log(j);

        });
    }


    renderDoingFetching(){
        return (
                <div className="App">
                <p className="App-intro">
                     doing data fetching
                </p>
                </div>
               );

    }


    testTitleDescription(){
        p('test title description ', this.data.top);

        //let data={
        //    text: 'in test input text',
        //};
        let opt={
            showForm: false,
        };
        return (
                <TitleDescription data={this.data.top} opt={opt} />
               );
    }

    renderNormal() {
        return (
                <div className="App">
                <p className="App-intro">
                0625, To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <div className="test0627">
                    {this.testTitleDescription()}
                </div>

                <div className="my0625">
                    <p> place holder for list editor </p>
                    <ListEditor data={this.data} />
                </div>
                </div>
               );
    }

    render(){
        if(this.state.fetched) return this.renderNormal();
        else return this.renderDoingFetching();
    }
}

export default App;

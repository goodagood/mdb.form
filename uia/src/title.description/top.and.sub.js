
import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

//d import ListEditor from './title.description/list.editor.js';

import {TitleDescription} from './td.js';
import Sublist from './sub.list.js';
import {AddSubTitleDescription} from './add.td.sub.js';

const p = console.log;


class TopAndSub extends Component {

    constructor(props) {
        super(props);

        this.state = {};

        //this.jsonurl = "/20less";
        this.jsonurl = "/id/" + props.oneid;

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
            console.log('json? ', j);
            this.data = j;
            this.setState({'fetched': true});

            //console.log(j);

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

                    <div className="testTitleDescription">
                        {this.testTitleDescription()}
                    </div>

                    <br />
                    <AddSubTitleDescription parentid={this.data.top.id} />

                    <hr  />
                    <br />

                    <div className="subs">
                        <Sublist data={this.data.subs} />
                    </div>





                    {/*
                    <div className="my0625">
                        <p> place holder for list editor </p>
                        <ListEditor data={this.data} />
                    </div>
                    */}

                </div>
               );
    }

    render(){
        if(this.state.fetched) return this.renderNormal();
        else return this.renderDoingFetching();
    }
}

export default TopAndSub;

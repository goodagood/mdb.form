import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import ListEditor from './title.description/list.editor.js';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.jsonurl = "/20less";

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


    renderNormal() {
        return (
                <div className="App">
                <p className="App-intro">
                0625, To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <div className="my0625">
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

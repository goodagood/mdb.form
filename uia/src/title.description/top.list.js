
import React, { Component } from 'react';



//import ListEditor from './title.description/list.editor.js';

//import {TitleDescription} from './title.description/td.js';
//import Sublist from './title.description/sub.list.js';

const p = console.log;


class TopListor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showWhat: 'listTopRec',
        };

        this.jsonurl = "/top20";

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

            //console.log(j);
            //console.log('fetched top list?');

        });
    }

    // pass it back to up level
    passBackId = (id)=>{
        //console.log(id);
        this.props.passBackOneId(id);
    }


    mkList (){
        if(!this.state.fetched) return (<li> no data </li>);

        return this.data.map((rec)=>{
            //console.log(rec.id);
            return(
                <li
                        key={rec['id']} 
                        onClick={()=>{this.passBackId(rec['id']);}}
                >
                    {rec.title}
                        
                </li>
            );
        });
    }


    render(){
        return (
            <div className="toplist">
            top list
                <ul>
                {this.mkList()}
                </ul>
            </div>
        );
    }



}

export default TopListor;

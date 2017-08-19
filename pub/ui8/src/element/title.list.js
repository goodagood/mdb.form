
import React, { Component } from 'react';

import {tdlist} from 'src/data/tds.js';


//import ListEditor from './title.description/list.editor.js';


const p = console.log;


class TitleListor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showWhat: 'listTopRec',
        };

        this.tds = tdlist();
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

export default TitleListor;



import React, { Component } from 'react';

import {TitleDescription} from './td.js';

const p = console.log;

class Sublist extends Component {

    constructor(props) {
        super(props);

        /*
         * data: array of data
         * props.data
         */
    }

    oneTitleDescription(td, opt){
        p('one title description ', td);

        opt={
            showForm: false,
            descriptionLabel: 'description',
            titleLabel: 'Sub-title',
        };
        return (
                <TitleDescription data={td} opt={opt} />
               );
    }

    mkList(){
        let d = this.props.data;
        let earray = d.map(td =>{
            return this.oneTitleDescription(td);
        });
        //return earray.join("\n");
        return earray;
    }

    render() {
        return (
                <div className="subs">

                    <div className="oneTitleDescription">
                        {this.mkList()}
                    </div>

                </div>
               );
    }

}


export default Sublist;

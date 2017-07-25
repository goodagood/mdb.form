import React, { Component } from 'react';

import {translate} from 'react-i18next';

import {TitleDescription} from './td.js';
import {InputText} from './input.text.js';
import {TextareaSwitch} from './text.area.js';

import "./add.td.css";


const p = console.log;


class AddTitleDescription extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'test': true,
            'showWhat': 'listTopRec',
            'title': '',
            'description': '',
            'value': '',
        };

        this.jsonurl = "/insertone";

        this.doSubmit = this.doSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    doSubmit = (e)=>{
        e.preventDefault();
        //console.log(e.target.value);
        //console.log(this.state);

        var j = Object.assign({}, this.state);
        delete j.showWhat;
        console.log('j : ', j);

        //var fd = new FormData();
        //fd.append('json', JSON.stringify(j));

        // post data
        fetch(this.jsonurl, {
            method: 'post',
            body: JSON.stringify(j),
            headers: new Headers({
                //'Content-Type': 'text/plain'
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }),
            redirect: 'follow',
        }).then(function(resp){
            p('then: ', resp);
            p('then obj keys: ', Object.keys(resp));
        }).catch(function(err){
            p('catch ', err);
        });
    }


    handleTitleChange = (e) =>{
        let title = e.target.value;
        let text = this.state.title.toString() + this.state.description.toString();
        console.log('text: ',  text, typeof text);
        let textValue = (this.state.title.toString() + this.state.description.toString()).length;

        this.setState({'title': title, value: textValue});
    }
    handleDescriptionChange = (e) =>{
        this.setState({'description': e.target.value});
    }


    render(){
        const t = this.props.t;

        return (
            <form className="titledescription" 
                        onSubmit={this.doSubmit}
            >

                <div>
                    <label> {t('title')}:
                    </label>

                        <input 
                                type="text" 

                                onChange={this.handleTitleChange}

                                defaultValue={'testing title ' + Date().toString()}
                                placeholder="---input"
                        />
                </div>

                <h3> {t('description')}: </h3>
                <div>
                    <textarea 
                        type="textarea" 
                        defaultValue={'testing description ' + Date().toString()}

                        onChange={this.handleDescriptionChange}

                    >
                    </textarea>
                </div>

                <div className="valueSubmit">
                    <label className="valueLabel"> Value:
                        <input type="number" value="0" />
                    </label>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }


}


//export {AddTitleDescription,};
AddTitleDescription = translate()(AddTitleDescription);
export {AddTitleDescription,};


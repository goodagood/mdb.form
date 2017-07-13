/*
 * todo: 
 * add sub title and description should do some re-use
 */

import React, { Component } from 'react';

import {TitleDescription} from './td.js';
import {InputText} from './input.text.js';
import {TextareaSwitch} from './text.area.js';

const p = console.log;


class AddSubTitleDescription extends Component {

    constructor(props) {
        super(props);

        console.log('add sub title ... parent id ', props.parentid);
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
        if(this.props.parentid) j.parentid = this.props.parentid;
        delete j.showWhat;
        console.log('j : ', j);
        console.log('j.parentid : ', j.parentid);

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
        }).then((resp)=>{
            p('then: ', resp);
            p('then obj keys: ', Object.keys(resp));
            this.setState({showWhat: 'button'});
        }).catch((err)=>{
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


    renderButton(){
        return (
            <button type="button"
                onClick={(e)=>{
                    e.preventDefault();
                    this.setState({showWhat:'FormAddingSub'});
                }}
            > Add one sub </button>
        );
    }


    renderAdding(){
        return (
            <form className="titledescription" 
                        onSubmit={this.doSubmit}
            >

                <div>
                    <label> 0this.state.titleLabel- : </label>

                    <input className="switchInput"
                            type="text" 

                            onChange={this.handleTitleChange}

                            defaultValue={'testing title ' + Date().toString()}
                            placeholder="---input"
                    />
                </div>

                <div>
                    <textarea 
                        className="sizeisquestion"
                        type="textarea" 
                        defaultValue={'testing description ' + Date().toString()}

                        onChange={this.handleDescriptionChange}

                    >
                    </textarea>
                </div>

                <div>
                    <input type="submit" 
                    value="Submit" />
                </div>
            </form>
        );
    }


    render(){
        switch(this.state.showWhat){
            case 'FormAddingSub':
                return this.renderAdding();
                break;
            default:
                return this.renderButton();
                break;
        }
    }


}


export {AddSubTitleDescription,};

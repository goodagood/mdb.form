
import React, { Component } from 'react';

import Radium from 'radium';

import {translate} from 'react-i18next';

import {getTitleDescriptionObj} from 'src/data/td.obj.js';

//import {postTitleDescription} from 'src/util/pipe.js';

//import './basic.text.scss';


class BasicText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "milli-save-callbacked": -1,
        };

        this.tdobj = getTitleDescriptionObj();
    }


    handleTitleChange = (e)=>{
        //console.log(e);

        e.preventDefault();
        let title = e.target.value;

        // it's enough to tell tdobj the new title, and trust it do the rest.
        this.tdobj.setTitle(title);
    };


    handleDescriptionChange = (e)=>{
        //console.log(e);

        e.preventDefault();
        let description = e.target.value;

        // it's enough to tell tdobj the new title, and trust it do the rest.
        this.tdobj.setDescription(description);
    };

    ////?
    //handleTitleChange = (e) =>{
    //    let title = e.target.value;
    //    let text = this.state.title.toString() + this.state.description.toString();
    //    console.log('text: ',  text, typeof text);
    //    let textValue = (this.state.title.toString() + this.state.description.toString()).length;

    //    this.setState({'title': title, value: textValue});
    //}
    //handleDescriptionChange = (e) =>{
    //    this.setState({'description': e.target.value});
    //}


    _render (){
        let t = this.props.t;

        return (
            <form className="basicText" 
                style={styles.form}
                        onSubmit={this.doSubmit}
            >

                <div className="title">
                    <label className="standout"> {t('title')}: </label>

                        <input style={styles.title}
                                className="title"
                                type="text" 

                                onChange={this.handleTitleChange}

                                defaultValue={'testing title07 ' + Date().toString()}
                                placeholder="---input"
                        />
                </div>

                {/*
                <h3> {t('description')}: </h3>
                */}
                <div>
                <label className="standout"> {t('description')}: </label>

                    <textarea style={styles.description} 
                        type="textarea" 
                        defaultValue={'testing description07 ' + Date().toString()}

                        onChange={this.handleDescriptionChange}

                    >
                    </textarea>
                </div>

                <div className="valueSubmit" >
                    <input type="submit" value="Submit" className="button button-primary" />
                </div>
            </form>
        );
    }

    renderInCheckings (){
        return (
           <div className="basicText">
               place holder for basic text
           </div>
        );
    }

    render (){
        return this._render();
    }
}

const styles = {
    form: {
        borderTop: "5px solid green",
    },
    title: {
        width: "99%",
        paddingLeft: "1%",
    },
    description: {
        width: "99%",
        paddingLeft: "2%",
    },


    vslabel: {
        "display": "inlineblock",
        "float": "left",
    },
}


BasicText = Radium(BasicText); // for style 
BasicText = translate()(BasicText); // for i18n 

export default BasicText;

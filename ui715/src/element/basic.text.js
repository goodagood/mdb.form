
import React, { Component } from 'react';

import Radium from 'radium';

import './basic.text.scss';


//@Radium
class BasicText extends Component {
    constructor(props) {
        super(props);
    }

    handleTitleChange = (e)=>{
        console.log(e);
    };

    handleDescriptionChange = (e)=>{
        console.log(e);
    };


    giveAllInput (){
        return (
            <form className="basicText" 
                style={styles.test}
                        onSubmit={this.doSubmit}
            >

                <div className="title">
                {/*  <label> {t('title')}: */}
                    <label className="standout"> {('title')}:
                    </label>

                        <input  className="title"
                                type="text" 

                                onChange={this.handleTitleChange}

                                defaultValue={'testing title ' + Date().toString()}
                                placeholder="---input"
                        />
                </div>

                {/*
                <h3> {t('description')}: </h3>
                */}
                <div>
                <label className="standout"> {('description')}: </label>

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

    aaTest (){
        return (
           <div className="basicText">
               place holder for basic text
           </div>
        );
    }

    render (){
        return this.giveAllInput();
    }
}

const styles = {
    test: {
        borderTop: "5px solid green",
    },
}


BasicText = Radium(BasicText);

export default BasicText;

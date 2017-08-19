

import React, { Component } from 'react';

import Radium from 'radium';

import {NumberOfThumbs} from './thumb.number.js';


function FontAwesomeIcon(props){

    if(!props.name || typeof props.name === 'string' || props.name.length < 2 ){
        return <i></i>;
    }

    let name = props.name;

    // beside no size/default, there are:
    // fa-lg (33% increase), fa-2x, fa-3x, fa-4x, or fa-5x
    let size   = props.size || "";

    let spin = props.spin ? 'fa-spin' : '';

    // This will be like: "fa fa-thumbs-o-up fa-2x"
    let fa_class = `fa ${name} ${size} ${spin}`;

    return <i className={fa_class}></i>;
}


function ThumbUp2X(props){
    return <FontAwesomeIcon name="fa-thumbs-o-up" size="fa-2x" />;
}

function ThumbDown2X(props){
    return <FontAwesomeIcon name="fa-thumbs-o-down" size="fa-2x" />;
}


function ThumbIcon(props){
    let size   = props.thumbSize || "fa-2x";
    let updown = props.updown || 'down';

    // This will be like: "fa fa-thumbs-o-up fa-2x"
    let fontAwesome = `fa fa-thumbs-o-${updown} ${size}`;

    return <i className={fontAwesome}></i>;

}


class Thumb extends Component {
    constructor(props) {
        super(props);

        this.dataId  = props.dataId  || null;
        this.valueId = props.valueId || null;

        //if(typeof props.clickCallback === 'function'){
        //    this.clickCallback = props.clickCallback || null;
        //}
        //
        // callback parameters: username?, event?, dataId, valueId
        this.clickCallback = props.clickCallback || function(){};

        // thumbsup or down
        this.updown = props.up ? "up" : "down";

        this.state = {
            color: 'green'
        }

    }

    getStyles = ()=>{
        return {
            wrap : {
                color: this.state.color,
                //float: "left",
                display: "inline-block",
                margin: "3px 5px 3px",
                paddingLeft: "1em",
                paddingRight: "0.5em",

            },
        };
    }

    click = (e)=>{
        e.preventDefault();
        this.setState({color: 'grey'});

        console.log('clicked ' + Date.now().toString());

        this.clickCallback(e, this.dataId, this.valueId);
    }


    render(){

        return (
                      <div style={this.getStyles().wrap} onClick={this.click} >
                      {/*
                        <i className="fa fa-thumbs-o-up fa-2x"></i>
                        <span className="up-number"> 33 </span>
                        */}
                        <ThumbIcon updown={this.updown} />
                        <NumberOfThumbs number="88" />
                      </div>
               );
    }
}


class HandPair extends Component {
    constructor(props) {
        super(props);
    }



    render (){
        return (
                <div style={styles.hands}>
                {/*
                  */}

                  <Thumb up  />
                  <Thumb down  />
                  <i className="fa fa-calculator fa-2x"></i>

                </div>
               );
    }
}

const styles = {
    hands: {
        width: "14em",
        padding: "3px 5px 3px 5px",
        border: "1px green solid",
        textAlign: "center",
        color: "green",
        //overflow: "hidden"
    },
}


HandPair = Radium(HandPair);
export default HandPair;





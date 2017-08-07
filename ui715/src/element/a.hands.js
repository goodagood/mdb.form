

import React, { Component } from 'react';

import Radium from 'radium';


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
                        */}
                        <ThumbIcon updown={this.updown} />
                        <span className="up-number"> 33 </span>
                      </div>
               );
    }
}


class HandPair extends Component {
    constructor(props) {
        super(props);
    }

    //d
    renderBasicFooter (){
        return (
            <div className="basicFooter" 
                style={styles.basic}
            >

            <p> Free as beer, open as software, license under GPL. </p>
            <p style={styles.hone}> 2017 Andrew </p>

            </div>
        );
    }

    aaTest (){
        return (
           <div className="basicFooter">
               place holder for basic text
           </div>
        );
    }

    render (){
        return (
                <div style={styles.hands}>
                {/*
                  */}

                  <Thumb up  />
                  <Thumb down  />

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
        //overflow: "hidden"
    },
}


HandPair = Radium(HandPair);
export default HandPair;





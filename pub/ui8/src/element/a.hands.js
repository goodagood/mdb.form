

import React, { Component } from 'react';

import Radium from 'radium';


class ThumbsUp extends Component {
    constructor(props) {
        super(props);

        this.dataId  = props.dataId  || null;
        this.valueId = props.valueId || null;

        this.state = {
            color: 'green'
        }

        this.styles ={
            wrap : {
                color: "green",
                float: "left",
                margin: "3px 5px 3px",
                paddingLeft: "1em",
                paddingRight: "0.5em",

            },
            grey : {
                color: "grey"
            },
        };

    }

    click = (e)=>{
        e.preventDefault();
        this.setState({color: 'grey'});
        console.log('clicked ' + Date.now().toString());
    }

    render(){

        return (
                      <div style={this.styles.wrap} onClick={this.click} >
                        <i className="fa fa-thumbs-o-up fa-2x"></i>
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
                  <div style={styles.thumbsup}>
                    <i className="fa fa-thumbs-o-up fa-2x"></i>
                    <span className="up-number"> 33 </span>
                  </div>

                  <ThumbsUp style={styles.thumbsup} />
                  */}

                  <ThumbsUp  />

                  <div style={styles.thumbsdown}>
                    <i className="fa fa-thumbs-o-down fa-2x"></i>
                    <span className="down-number"> 22 </span>
                  </div>
                </div>
               );
    }
}

const styles = {
    hands: {
        width: "15em",
        padding: "3px 5px 3px 5px",
        border: "1px green solid",
        textAlign: "center",
        overflow: "hidden"
    },
    thumbsup: {
        margin: "3px 5px 3px",
        paddingLeft: "1em",
        paddingRight: "0.5em",
        float: "left",
        color: "green"
    },
    thumbsdown: {
        margin: "3px 5px 3px",
        paddingLeft: "0.5em",
        paddingRight: "1em",
        float: "left",
    },
}


HandPair = Radium(HandPair);
export default HandPair;





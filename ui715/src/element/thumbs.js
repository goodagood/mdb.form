
import React, { Component } from 'react';

import {Promise} from 'bluebird';

import Radium from 'radium';

import {NumberOfThumbs} from './thumb.number.js';

const p = console.log;


function FontAwesomeIcon(props){

    if(!props.name || typeof props.name !== 'string' || props.name.length < 2 ){
        return <i></i>;
    }

    let name = props.name;

    // beside no size/default, there are:
    // fa-lg (33% increase), fa-2x, fa-3x, fa-4x, or fa-5x
    let size   = props.size || "";

    let spin = props.spin ? 'fa-spin' : '';

    // This will be like: "fa fa-thumbs-o-up fa-2x"
    let fa_class = `fa ${name} ${size} ${spin}`;
    //console.log(fa_class);

    // styles 
    var styles = {
        marginLeft: "0.5em",
        marginRight: "0.5em",
    };

    return <i className={fa_class} style={styles}></i>;
}
//FontAwesomeIcon = Radium(FontAwesomeIcon);


function ThumbUp2X(props){
    return <FontAwesomeIcon name="fa-thumbs-o-up" size="fa-2x" />;
}

function ThumbDown2X(props){
    return <FontAwesomeIcon name="fa-thumbs-o-down" size="fa-2x" />;
}


class ThumbUp_And_Number extends Component {
    constructor(props) {
        super(props);

        this.data = props.data;

        this.dataId  = props.dataId  || null;
        this.valueId = props.valueId || null;

        //if(typeof props.clickCallback === 'function'){
        //    this.clickCallback = props.clickCallback || null;
        //}
        //
        // callback parameters: username?, event?, dataId, valueId
        this.clickCallback = props.clickCallback || function(){};

        // thumbsup or down
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
                width: '3em',

                //margin: "3px 5px 3px",

                //paddingLeft: "1em",
                //paddingRight: "0.5em",

            },
        };
    }

    click = (e)=>{
        e.preventDefault();
        this.setState({color: 'grey'});

        console.log('clicked ' + Date.now().toString());

        this.clickCallback(e, this.data.id, this.data.valueId);
    }


    render(){

        return (
                      <span  onClick={this.click} >
                      {/*
                      <div style={this.getStyles().wrap} onClick={this.click} >
                        <i className="fa fa-thumbs-o-up fa-2x"></i>
                        <span className="up-number"> 33 </span>
                        */}
                        <ThumbUp2X />
                        <NumberOfThumbs number="18" />
                      </span>
               );
    }
}


class Thumbs extends Component {
    constructor(props) {
        super(props);

        // thumbs object
        this.tobj = props.thumbsobj;

        //this.thumbs = this.tobj.getThumbs();

        // setState is async, it means it can be delay
        //this.upNumber = this.tobj.number_of_up_thumbs();
        //this.downNumber = this.tobj.number_of_down_thumbs();

        this.state = {
            milli : Date.now(),
            upNumber : this.tobj.number_of_up_thumbs(),
            upClicked: false,

            downNumber : this.tobj.number_of_down_thumbs(),
            downClicked: false,
        };

        this.styles= {
            wrap: {
                width: "16em",
                padding: "3px 5px 3px 5px",
                //border: "1px green solid",
                textAlign: "center",
                color: "green",
            },
            up:{
                color: "green",
            },
            down:{
                color: "green",
            }
        };
    }

    changeState = Promise.promisify(this.setState);

    countNumbers = ()=>{
        //this.state.milli = Date.now();
        var up = this.tobj.number_of_up_thumbs();
        var down = this.tobj.number_of_down_thumbs();

        //this.upNumber = up;
        //this.downNumber = down;

        //console.log('to refresh? ', up, down);
        //this.setState({ upNumber : up, downNumber : down});
        return this.changeState({ upNumber : up, downNumber : down});

        //console.log('refreshed? ', this.state.upNumber, this.state.downNumber);
    }


    upClick = (e)=>{
        e.preventDefault();

        if(this.state.upClicked) return Promise.resolve(false);

        //console.log('up clicked ' + Date.now().toString());

        return this.tobj.addThumb(true).then(()=>{
            //var ks = Object.keys(this.tobj.getThumbs().up);
            //console.log('add thumb then: ', ks);
            //console.log(ks.join(", "));

            this.styles.up.color = "grey";
            return this.countNumbers();
        }).then(()=>{
            return this.changeState({upClicked: true});
        });
    }

    downClick = (e)=>{
        e.preventDefault();

        if(this.state.downClicked) return Promise.resolve(false);

        //console.log('down clicked ' + Date.now().toString());

        return this.tobj.addThumb(false).then(()=>{
            this.styles.down.color = "grey";
            return this.countNumbers();
        }).then(()=>{
            return this.changeState({downClicked: true});
        });
    }

    infoClick = (e)=>{
        e.preventDefault();

        console.log('info clicked ' + Date.now().toString());
        console.log(this.tobj.showSimple());

        //this.setState({color: 'grey'});
        //this.clickCallback(e, this.data.id, this.data.valueId);
    }


    doRender (){
        //console.log(" --- do render ");

        return (
                <div style={this.styles.wrap}>
                {/*
                  */}

                  <span  onClick={this.upClick} style={this.styles.up} >
                    <ThumbUp2X />
                    {this.state.upNumber}
                  </span>

                  <span  onClick={this.downClick} style={this.styles.down} >
                    <ThumbDown2X  />
                    {this.state.downNumber}
                  </span>

                  <span onClick={this.infoClick}>
                      <FontAwesomeIcon name="fa-calculator" size="fa-2x" />
                  </span>

                </div>
               );
    }

    render (){
        return this.doRender();
    }
}



export default Thumbs;





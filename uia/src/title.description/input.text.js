
import React from 'react';

import {TextareaOrText} from './text.area.js';

class InputText extends React.Component {

    /*
     * onChange
     * onBlur
     * onSubmit  // no need when there is no submit button
     */

    constructor(props) {
        super(props);

        // no lable, only a text input element.

        // props.data : data object, {text, hint, err message}
        // props.onChange
        // props.onSubmit
        //
        // props.opt.showForm

        this.textKey     = props.opt.textKey  || "text" ;
        let showForm     = props.opt.showForm || false ;
        let defaultValue = props.data[this.textKey]|| "input 0627" ;

        this.state = {
            "showForm" : showForm,
            "defaultValue": defaultValue,
        };

        //d
        // no need?
        //this.handleBlur = this.handleBlur.bind(this);

    }


    handleBlur (e) {
        //var text = e.target.value;

        // showForm : false  > make input form switch off
        // setState will refresh the render
        this.setState({
            "showForm": false,
            //"text":text
        });

        //console.log('handle focus out, the state? changed to tmp? ', text, this.d.text);
        //return ; //?
    }


    render(){
        if(this.state.showForm) return this.renderInput();
        //else:
        return this.renderText();
    }


    textChange (e) {
        var value = e.target.value;
        this.props.data[this.textKey] = value; // actually mutable data
        //console.log('textChange 1203: ', this.props.data[this.textKey]);

        if(this.props.onChange){
            this.props.onChange(e);
        }
    }


    renderInput(){
        return (<input 
                className="switchInput"
                type="text" 

                defaultValue={this.props.data[this.textKey]}
                onChange={this.textChange}
                onBlur={this.handleBlur}
        />);
    }


    clickText (e){
        this.setState({showForm:true});

        /*
         *
         * It's not focused when rendered,
         * setTimeout focus it, but ref needed.
         * but click the form again or double click will do the same.
         * 
         * setTimeout(()=>{
         *     // maybe we shouldn't use ref,
         *     // just click one more time it will get focus.
         *     this.inputDom.focus();
         * }, 10);
         *
         */
    }

    renderText(){

        return (
            <span  onClick={this.clickText} >
                    {this.props.data.text}
            </span>
        );
    }

}


// save warning
//class LabelInput  extends React.Component {
//    constructor(props) {
//        super(props);
//
//        // props.data might give: text, label, showForm
//
//        this.state = {
//            //"label": props.data.label || "_LABEL_",
//            "changed": "??",
//        };
//
//    }
//
//
//    render = ()=>{
//        return (
//            <label> {this.d.lable}: 
//                <TitleEditor data={this.props.data} />
//            </label>
//        );
//    }
//}
//



//class FirstPairOfTitleDescription extends React.Component {
//    constructor(props) {
//        super(props);
//
//        this.state = {
//            "changed": null,
//        };
//
//        //console.log(props.data);
//
//        this.data = props.data; //d
//
//        if(typeof props.obj["showForm"] === 'undefined' || 
//                typeof props.obj["showForm"] !== 'boolean'){
//            props.obj["showForm"] = false;
//        }
//
//        //// move out
//        //const onTitleChange = (e)=>{
//        //    props.data.text = e.target.value;
//        //    console.log(props.data.text);
//        //    console.log('0607 1429pm');
//        //};
//
//    }
//
//    // should notice the upstream
//    onTitleChange = (e)=>{
//        this.props.data.text = e.target.value;
//        this.props.callback(e);
//        console.log(this.props.data.text);
//        console.log('0607 1429pm');
//    };
//    onDescriptionChange = (e)=>{
//        this.props.obj.description = e.target.value;
//        this.props.callback(e);
//        console.log(this.props.obj.description);
//        console.log('0608 0613am');
//    };
//
//
//    render(){
//        return (
//                <div className="firstpair">
//                    <TitleEditor obj={this.props.obj}
//                        onChange={this.onTitleChange}
//                    />
//                    
//                    <TextareaOrText obj={this.props.obj}
//                        onChange={this.onDescriptionChange}
//                    />
//                </div>
//        );
//    }
//}
//

//export {InputText, FirstPairOfTitleDescription};
export {InputText,};

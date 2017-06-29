
import React from 'react';

//import {TextareaOrText} from './text.area.js';
import {InputText} from './input.text.js';


const d13 = /^\s*\d{13}\s*$/;
const empty = /^\s*$/;


const asMilliSecond = (digitalStr) =>{
    if(digitalStr){
        return d13.test(digitalStr);
    }else{
        return false;
    }
}

/*
 * if value of someStr is boolean 'FALSE', it leads to confuse.
 */
const asEmpty = (someStr) =>{
    if(someStr){
        return empty.test(someStr);
    }else{
        return true;
    }
}


class TitleDescription extends React.Component {

    /*
     * onChange
     * onBlur
     * onSubmit  // no need when there is no submit button
     */

    constructor(props) {
        super(props);

        // props.data : data object, 
        //       {title: text, 
        //        description: textarea,
        //        hint, err message ...}
        //
        // props.onChange
        // props.onSubmit
        //
        // props.opt.showForm


        let showForm     = props.opt.showForm || false ;
        let defaultTitle = props.data.title   || "title 0627" ;
        let defaultDescription = props.data.description || "description 0627" ;
        let titleLabel = props.data.titleLabel  || "Title" ;
        let titleHint = props.data.titleHint  || "" ;

        let descriptionHint = props.data.descriptionHint  || "*" ;
        let descriptionLabel = props.data.descriptionLabel  || "Description" ;

        this.state = {
            "showForm" : showForm,
            "defaultTitle": defaultTitle,
            "defaultDescription": defaultDescription,
            "titleLabel": titleLabel,
        };

        this.handleBlur = this.handleBlur.bind(this);

    }

    handleBlur (e) {
        var text = e.target.value;

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
        if(this.state.showForm) return this.renderForm();
        //else:
        return this.renderText();
    }


    textChange (e) {
        var value = e.target.value;
        this.props.data.text = value; // actually mutable data
        //console.log('textChange 1203: ', this.props.data.text);

        // should we save data?
        var milli = Date.now();
        this.props.edit = milli;

        this.signalUpstream();
    }


    //d
    signalUpstream (){
        if(this.props.noticeDataChange){
            this.props.noticeDataChange();
        }
        // save the data?
    }

    testInputText(){
        let data = this.props.data;
        let opt ={
            textKey: 'title',
        };

        return (
                <InputText data={data} opt={opt} />
               );
    }

    renderForm(){
        return (
            <form className="titledescription" key={this.props.data.id} >
                <label>{this.state.titleLabel} </label>
                {this.testInputText()}

                {/*
                        <input 
                            className="switchInput"
                            type="text" 

                            defaultValue={this.props.data.title}

                            onChange={this.textChange}
                            onBlur={this.handleBlur}
                        />
                */}
            </form>

        );
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
export {TitleDescription,};


import React from 'react';

//import './value.css'

class TextareaSwitch extends React.Component {

    constructor(props) {
        super(props);

        var showForm = false || props.opt.showForm;

        //text : props.data[props.opt.textKey]
        this.textKey = props.opt.textKey || 'text';

        this.state = {
            "showForm" : showForm,
            //"text": 'should we make a component for textarea or?',
        };


        this.changeText = this.changeText.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }


    handleTextChange = (e) => {
        var value = e.target.value;
        //this.props.data.description = value; //c
        this.changeText(value);

        if(this.props.noticeDataChange){
            this.props.noticeDataChange();
        }
        // should we save data?
        //var milli = Date.now();
        //this.tmp.edit = milli;
    }

    handleBlur = (e) => {
        var text = e.target.value;
        //console.log('save the changed to tmp ', text);

        // showForm : false  > make input form switch off
        // setState will refresh the render
        this.setState({"showForm": false, "description":text});

        //console.log('the state? changed to tmp? ', this.state);
    }


    //d?
    save = ()=>{
        // save the data
    }

    getDefaultValue = ()=>{
        var text = 'warning---input for description textarea  in render form ---';

        if(this.props.opt.textKey && this.props.data[this.props.opt.textKey]){
            return this.props.data[this.props.opt.textKey];
        }


        return text;
    }


    /*
     * This not handle event, but set the new text
     */
    changeText (text){
        this.props.data[this.props.opt.textKey] = text;
    }


    renderForm(){

        var text = this.getDefaultValue();


        return (
                <textarea 
                    className="sizeisquestion"
                    type="textarea" 

                    defaultValue={text}

                    onChange={this.handleTextChange}
                    onBlur={this.handleBlur}
                />

            );
    }


    clickText = (e)=>{
        //console.log(this.tmp);
        //console.log(this.state);
        this.setState({showForm:true});
    }


    renderText(){

        var text = this.getDefaultValue();

        return (
            <div  onClick={this.clickText} >
                {text}
            </div>
        );
    }


    render(){
        if(this.state.showForm){ return this.renderForm(); }
        else{ return this.renderText(); }
    }
}


export {TextareaSwitch};

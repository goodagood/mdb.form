
import React, { Component } from 'react';

import './but.css';


const p = console.log;


class ButMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showWhat: 'button', // div
        };

    }

    buttonClick = (e)=>{
        e.preventDefault();
        this.setState({showWhat: 'div'});

    }

    rButton(){
        return (
                    <button type="button" 
                        onClick={this.buttonClick}>
                        menu button
                    </button>
               );
    }

    floatDiv(){
        return (
                    <div className="menu">
                    <button type="button" 
                        onClick={e => this.setState({showWhat:'button'})}>
                        close
                    </button>
                    
                        <ul>
                        <li> 1</li>
                        <li> 2</li>
                        <li> 3</li>
                        </ul>
                    </div>
               );
    }


    render(){

        switch(this.state.showWhat){
            case 'button':
                return this.rButton();
                break;

            case 'div':
                return this.floatDiv();
                break;

            default:
                return this.rButton();
        }
    }
}

export {ButMenu};

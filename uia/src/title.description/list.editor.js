
/*
 * redo ./value.editor.js
 * after data structure changed.
 * 2017 0620
 */

import React, { Component } from 'react';

//import SimpleForm from './rform.js';

class ListEditor extends Component {

    constructor(props) {
        super(props);
    }

    showSubmit(e, value){
        e.preventDefault();
        console.log(e, value);

        console.log('value');
        console.log(value);
    }

    onSubmit(value){
        console.log('on submit get value');
        console.log(value);
    }

    render (){
        return (
                <div>
                    <p> 
                        rec.js
                    </p>
                    {/*
                    <SimpleForm 
                        onSubmit={this.onSubmit}
                        pristine={true}
                        reset={false} submitting={false}
                    />
                    */}
                </div>
               );
    }

}


export default ListEditor;

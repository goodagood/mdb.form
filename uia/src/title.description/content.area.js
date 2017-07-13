
import React, { Component } from 'react';

import {AddTitleDescription} from './add.td.js';
import TopListor from './top.list.js';
import TopAndSub from './top.and.sub.js';

import {translate} from 'react-i18next';

class ContentArea extends Component {

    constructor(props) {
        super(props);

        this.t = props.t;

        this.state = {
            showWhat: 'ListTopRec',
            //oneid: 'the id of the top record to be shown up'
        };

        // the upstream can set state
        if(props.passBackStateSetter) props.passBackStateSetter(this.setState.bind(this));

        this.jsonurl = "/20less";

        this.data = null;

        setTimeout(this.fetchData, 10);
    }


    fetchData = ()=>{
        //console.log(this.jsonurl);
        this.data = null;
        fetch(this.jsonurl).then((response) =>{
            return response.json();
        }).then((j)=>{
            //console.log('json? ', j);
            this.data = j;
            this.setState({'fetched': true});

            //console.log(j);

        });
    }

    passBackOneId = (sid)=>{
        this.setState({showWhat: 'OneRecWithID', oneid: sid});
    }

    listTopRec = ()=>{
        //e.preventDefault();

        //this.setState({showWhat: 'ListTopRec'});
        // 2017 0711 list top rec 0702 0904am
        return (
                <TopListor passBackOneId={this.passBackOneId} />
        );

    }


    switchRender (){
        switch(this.state.showWhat){
            case 'ListTopRec':
                return this.listTopRec();

            case 'AddNew':
                return <AddTitleDescription />;

            //case 'TestOneRec':
            //    return <TestOneRec />;
            //    break;

            case 'OneRecWithID': //todo
                return <TopAndSub oneid={this.state.oneid} />;

            default:
                return this.listTopRec();
                //return ''; // empty string
        }
    }

    render (){
        return (<div className="contentArea">
                {/*
                <p> translated? {this.t('helloo')} </p>
                <p> placeholder of content.area .js </p>
                */}
                { this.switchRender()}
               </div>)
    }

}

export default translate()(ContentArea);


import React, { Component } from 'react';

import Radium from 'radium';


class Item extends Component {
    /*
     * pass in parameters:
     * name, content, clickCallback (function).
     */

    constructor(props) {
        super(props);
        this.state = {
            name: null || props.name,
            content: null || props.content,
        };
    }

    click = (e)=>{
        e.preventDefault();
        if(typeof this.props.clickCallback !== 'function') return false;

        this.props.clickCallback(this.state.name);
    }

    render (){
        var content = this.state.content ? this.state.content : 'MENU?';
        var name    = this.state.name    ? this.state.name : 'NOmenuNAME';

        return <span 
            style={styles.item}
            onClick={this.click}
            >
            {content}
            </span>;
    }
}


/*
 * menu items:
 * name: content
 * name is a string without space, content is string display on webpage
 *
 * method:
 * add item
 * del item
 * callback when clicked
 */
class Menu extends Component {
    constructor(props) {
        super(props);

        // key starts with _/underline is not menu item.
        this.state = {
            _collapsed: false,
        };

        for (var k in props.menuItems){
            this.state[k] = props.menuItems[k];
        }

        this.clickCallback = props.menuCallback;

        this.replaceItems = props.replaceItems;
    }


    // used in dev
    show(what){
        console.log("in dev: ", what);
    }

    listMenuItems = ()=>{
        var list = [];
        for (var k in this.state){
            if(typeof k === 'string'){
                if(k.startsWith("_")){ continue; }

                list.push(
                      <Item name={k} key={k}
                      content={this.state[k]}
                      clickCallback={this.props.menuCallback} />
                );
            }
        }
        //return list.join("\r\n");
        return list;
    }

                  // <Item name="item1" content="outIt" clickCallback={this.show} />
                  // <Item name="item2" content="content" clickCallback={this.show} />
                  // <Item name="item3" content="content" clickCallback={this.show} />
    renderBasicHeader (){
        return (
            <div className="menu" 
                style={styles.menu_wrap}
            >

                  {this.listMenuItems()}

            </div>
        );
    }

    render (){
        return this.renderBasicHeader();
    }
}

const styles = {
    menu_wrap: {
        fontFamily: "Monospace, Helvetica, Arial, sans-serif",
        fontSize: "1.2em",
        display: "inline-block",
        float: "right",
        paddingLeft: "1em",
        paddingRight: "1em",

    },
    item: {
        fontFamily: "Verdana, Arial, sans-serif, Helvetica, Monospace",
        fontSize: "1.1em",
        fontWeight: "bold",
        //padding: "0.2em 0.5em 0.2em",
        margin: "0.2em 0.5em 0.2em",
        textAlign: "center",
        whiteSpace: "nowrap",
        color: "fff",
        backgroundColor: "#33c3f0",
        borderRadius: "4px",
        //':hover': {
        //    paddingBottom: "0em",
        //},
    }
}


Menu = Radium(Menu);
export {Menu};

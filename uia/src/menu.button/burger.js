
import React, { Component } from 'react';

//import { nameOfAnimation as Menu } from 'react-burger-menu'
import { slide as Menu } from 'react-burger-menu'

// nameOfAnimation:
//    slide
//    stack
//    elastic
//    bubble
//    push
//    pushRotate
//    scaleDown
//    scaleRotate
//    fallDown
//


class ExampleMenu extends React.Component {
	showSettings (event) {
		event.preventDefault();
		console.log('example menu sow settings');
	}


	render () {
        var c37 = '#dce0f4';
		var styles = {
            //'max-width': '1024px',
			bmBurgerButton: {
				position: 'fixed',
				width: '36px',
				height: '30px',
				//left: '36px',
				//top: '36px'
				right: '36px',
				top: '3px'
			},
			bmBurgerBars: {
				background: c37
				//background: '#f4f1d9'
			},
			bmCrossButton: {
				height: '24px',
				width: '24px'
			},
			bmCross: {
				background: '#bdc3c7'
			},
			bmMenu: {
				background: c37,
				padding: '2.5em 1.5em 0',
				fontSize: '1.15em'
			},
			bmMorphShape: {
				fill: c37,
			},
			bmItemList: {
				color: '#b8b7ad',
				padding: '0.8em'
			},
			bmOverlay: {
				background: 'rgba(0, 0, 0, 0.3)'
			}
		};

		return (
				<Menu right styles={styles} >
				<a id="home" className="menu-item" href="/">Home</a>
				<a id="newValue" className="menu-item" href="/newValue">New</a>
				<a id="listValues" className="menu-item" href="/listValues">List</a>
				<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
				</Menu>
			   );
	}
}

export {ExampleMenu};

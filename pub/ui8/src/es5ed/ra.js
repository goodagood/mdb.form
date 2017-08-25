'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.foo = exports.cBabel = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cBabel() {
	_reactDom2.default.render(_react2.default.createElement(
		'h1',
		null,
		'Hello, world!'
	), document.getElementById('hireact'));
}

function foo() {
	console.log('foo');
}

exports.cBabel = cBabel;
exports.foo = foo;
/** @jsx React.DOM */

var React = require('React');

var Button = React.createClass({
 	getDefaultProps: function() {
    	return {href: 'javascript:;'};
  	},
  	handleClick: function(e) {
  		e.preventDefault();
  		console.log('clicked');
    	this.props.onButtonClicked();
    	return false;
  	},
  	render: function() {
    	return this.transferPropsTo(<a role="button" onClick={this.handleClick} className="btn">{this.props.children}</a>);
  	}
});

module.exports = Button;
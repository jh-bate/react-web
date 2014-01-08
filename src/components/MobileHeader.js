/** @jsx React.DOM */

var React = require('react');

require('./MobileHeader.css');

var MobileHeader = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <header className="MobileHeader">
        {this.props.children}
      </header>
    )
  }
});

module.exports = MobileHeader;
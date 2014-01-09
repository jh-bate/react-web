/** @jsx React.DOM */

var React = require('react');
var App = require('react-touch/lib/primitives/App');

var NavBar = require('../layout/NavBar');

require('./MobileLayout.css');

var MobileLayout = React.createClass({
  
  render: function() {

    return this.transferPropsTo(
      <App className='Layout-app'>
        <NavBar className='Layout-topBar'/>
        <div className="Layout-content">
          {this.props.children}
        </div>
      </App>
    );
  }
});

module.exports = MobileLayout;
/** @jsx React.DOM */

var React = require('react');

require('./Nav.css');

var Nav = React.createClass({
  render: function() {
    return (
      <div class="pure-u id-nav">
          <a href="/" class="nav-notes-button">Notes</a>
          <a href="#nav" class="nav-teams-button">Teams</a>
      </div>
    );
  }
});


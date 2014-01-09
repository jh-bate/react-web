/** @jsx React.DOM */
var React = require('react');

var MobileLayout = require('../layout/MobileLayout');
var SignInPage = require('../pages/SignInPage');
var MessagesPage = require('../pages/MessagesPage');
var GroupsPage = require('../pages/GroupsPage');


var RootPage = React.createClass({

  render: function() {
    
    var routeName = this.props.routeName;

    if (routeName === '' || routeName === 'home') {
      return <MobileLayout className="SignInPage" route="home"><SignInPage /></MobileLayout>;
    } else if (routeName === 'notes') {
      return <MobileLayout><MessagesPage /></MobileLayout>;
    } else if (routeName === 'team') {
      return <MobileLayout><GroupsPage /></MobileLayout>;
    } else {
      return <h1>Route not found</h1>;
    }
  }
});

module.exports = RootPage;
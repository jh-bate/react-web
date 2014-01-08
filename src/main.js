var React = require('react');
var ReactTouch = require('react-touch');

var RootPage = require('./pages/RootPage');

ReactTouch.start(RootPage, document.getElementById('react-root'), {
  '/home': 'home',
  '/messages': 'messages',
  '/people': 'people',
  '/': 'home'
});
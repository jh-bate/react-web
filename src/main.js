var React = require('react');
var ReactTouch = require('react-touch');

var RootPage = require('./pages/RootPage');

ReactTouch.start(RootPage, document.getElementById('react-root'), {
  '/notes': 'notes',
  '/notesThread': 'notesThread',
  '/': 'home'
});
/** @jsx React.DOM */

var React = require('react');

var App = require('react-touch/lib/primitives/App');
var RoutedLink = require('react-touch/lib/routing/RoutedLink');
var LeftNavContainer = require('react-touch/lib/interactions/leftnav/LeftNavContainer');

var Header = require('../components/MobileHeader');


require('./MobileLayout.css');

// Keep in sync with MobileLayout.css
// TODO: deprecate the CSS standard
var SIDEBAR_WIDTH = 192;
var TOPBAR_HEIGHT = 51; // + 1 for the border

var MobileLayout = React.createClass({
  handleNavClick: function() {
    this.refs['leftNavContainer'].closeNav();
  },

  render: function() {
    var button = (
      <div className="Layout-hamburger fa fa-bars" />
    );

    var topContent = (
      <Header className="Layout-topBar">Clam Shell</Header>
    );

    var sideContent = (
      <div className="Layout-nav">
        <RoutedLink href="/home" className="Layout-navLink" onClick={this.handleNavClick}>Home</RoutedLink>
        <RoutedLink href="/messages" className="Layout-navLink" onClick={this.handleNavClick}>Notes</RoutedLink>
        <RoutedLink href="/people" className="Layout-navLink" onClick={this.handleNavClick}>Teams</RoutedLink>
      </div>
    );

    return this.transferPropsTo(
      <App>
        <LeftNavContainer
          ref="leftNavContainer"
          button={button}
          topContent={topContent}
          sideContent={sideContent}
          topHeight={TOPBAR_HEIGHT}
          sideWidth={SIDEBAR_WIDTH}>
          <div className="Layout-content">
            {this.props.children}
          </div>
        </LeftNavContainer>
      </App>
    );
  }
});

MobileLayout.TOPBAR_HEIGHT = TOPBAR_HEIGHT; // account for border

module.exports = MobileLayout;
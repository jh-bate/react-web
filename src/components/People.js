/** @jsx React.DOM */
var React = require('react');

//A Person
var Person = React.createClass({
  render: function() {
    return (
      <div className="person">
        <p>{this.props.children.toString()}</p>
      </div>
    );
  }
});

//All People
var People = React.createClass({
  render: function() {
    var peopleNodes = this.props.data.map(function (person) {
      return <Person >{person.name}</Person>;
    });
    return <div className="peopleList">{peopleNodes}</div>;
  }
});

module.exports = People;


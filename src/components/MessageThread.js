/** @jsx React.DOM */
var React = require('react');

//All messages for a group allowing to add a new message
var MessageThread = React.createClass({

    render: function() {

        var messagesInThread = this.props.messages.map(function(message, i) {
            return (
                <li key={i} className="list-group-item">
                    <span className="badge">{message.time}</span>
                    <span className="pull-left">{message.name}</span>
                    <p className="list-group-item-text">{message.text}</p>
                </li>
            );
        });

        return this.transferPropsTo(    
            <ul className="list-group">
                {messagesInThread}
            </ul>
        );
    }
});

module.exports = MessageThread;
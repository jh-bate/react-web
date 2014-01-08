/** @jsx React.DOM */
var React = require('react');

var Message = require('./Message');


var Messages = React.createClass({
    render: function() {
        var messageNodes = this.props.data.map(function (message) {
            return ( 
                <Message 
                    key={message.id} 
                    messageGroup={message.groupid}
                    messageText={message.text}>
                </Message>
                );
        });
        return <div className="messageList">{messageNodes}</div>;
    }
});

module.exports = Messages;


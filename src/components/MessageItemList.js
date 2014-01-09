/** @jsx React.DOM */

var React = require('react');

var MessageItem = require('./MessageItem');

var MessageItemList = React.createClass({
    render: function() {
        var items = this.props.messages.map(function(message, i) {
            return (
                <MessageItem
                    onClick={this.props.onMessageSelected.bind(this.props, i)}
                    key={message.id} 
                    name={message.name}
                    time={message.time}
                    messageGroup={message.groupid}
                    messageText={message.text}/>
            );
        }.bind(this));

        return (
            <div class="list-group">
                {items}
            </div>
        );
    }
});

module.exports = MessageItemList;


/** @jsx React.DOM */

var React = require('react');

var MessageThread = require('../components/MessageThread');
var MessageForm = require('../components/MessageForm');

require('./MessageThreadPage.css');

var MessageThreadPage = React.createClass({

    getInitialState: function() {
        return {data: [],added:false};
    },
    handleMessageAdded: function(message) {
        this.setState({loading:true});
        var comments = this.state.data;
        comments.push(message);

        mailbox.update(comments, function(messages){
            this.setState({added:true});
        }.bind(this));

    },
    render: function() {
        return (
            <div className="message-thread">
                <MessageThread messages={this.props.messages}/>
                <MessageForm onMessageSubmit={this.handleMessageAdded} />
            </div>
        );
    }
});

module.exports = MessageThreadPage;
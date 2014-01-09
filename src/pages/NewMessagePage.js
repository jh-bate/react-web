/** @jsx React.DOM */

var React = require('react');

var MessageForm = require('../components/MessageForm');
var ContentWithActionBlock = require('../components/ContentWithActionBlock');
var Spinner = require('../components/Spinner');

var mailbox = require('../data/Mailbox')();


require('./MessagesPage.css');

var NewMessagePage = React.createClass({

    getInitialState: function() {
        return {data: [],added:false};
    },
    handleCommentSubmit: function(comment) {
        this.setState({loading:true});
        var comments = this.state.data;
        comments.push(comment);

        mailbox.update(comments, function(messages){
            this.setState({added:true});
        }.bind(this));

    },
    render: function() {
        return (
            <MessageForm 
                className='NewMessagePage-form' 
                onCommentSubmit={this.handleCommentSubmit}>
            </MessageForm>
        );
    }
});

module.exports = MessagesPage;
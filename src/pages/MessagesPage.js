/** @jsx React.DOM */

var React = require('react');

var Messages = require('../components/Messages');
var MessageForm = require('../components/MessageForm');
var ContentWithActionBlock = require('../components/ContentWithActionBlock');
var Spinner = require('../components/Spinner');

var mailbox = require('../data/Mailbox')();


require('./MessagesPage.css');

var MessagesPage = React.createClass({

    getInitialState: function() {
        return {data: [],loading:false};
    },
    loadCommentsFromServer: function() {
        this.setState({loading:true});

        mailbox.load(function(messages){
            console.log(messages);
            this.setState({data: messages,loading:false});  
        }.bind(this));

    },
    handleCommentSubmit: function(comment) {
        this.setState({loading:true});
        var comments = this.state.data;
        comments.push(comment);

        mailbox.update(comments, function(messages){
            this.setState({data: messages,loading:false});
        }.bind(this));

    },
    componentWillMount: function() {
        this.loadCommentsFromServer();
    },

    render: function() {

        var content = (
            <Spinner />
        );

        if(!this.state.loading){
            content = (
                <Messages data={this.state.data}></Messages>
            );
        }

        var action = (
            <MessageForm className='MessagesPage-action' onCommentSubmit={this.handleCommentSubmit}></MessageForm>
        );

        return (
            <ContentWithActionBlock 
                className="MessagesPage" 
                options={{scrollingX: false}}
                action={action}>
                <div className="MessagesPage-content">{content}</div>
            </ContentWithActionBlock>
        );
    }
});

module.exports = MessagesPage;
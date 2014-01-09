/** @jsx React.DOM */

var React = require('react');

var MessageItemList = require('../components/MessageItemList');
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
    componentWillMount: function() {
        this.loadCommentsFromServer();
    },
    handleNewMessage: function(){
        console.log('should add new message');
        return false;
    },
    handleShowThread: function(){
        console.log('should show messages in thread');
        return false;
    },
    render: function() {

        var content = (
            <Spinner />
        );

        if(!this.state.loading){
            content = (
                <MessageItemList messages={this.state.data} onMessageSelected={this.handleShowThread}></MessageItemList>
            );
        }

        var action = (
            <a className='btn MessagesPage-action' onClick={this.handleNewMessage}>New Message</a>
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
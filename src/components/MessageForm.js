/** @jsx React.DOM */

var React = require('react');

//Form for adding Comments
var MessageForm = React.createClass({

    getInitialState: function() {
        return {adding: false};
    },
    handleNewMessage: function(){
        this.setState({adding: true});
        return false;
    },
    handleSubmit: function() {
        var messageText = this.refs.messageText.getDOMNode().value.trim();
        this.props.onMessageSubmit({text: messageText});
        this.refs.messageText.getDOMNode().value = '';
        this.setState({adding: false});
        return false;
    },
    render: function() {

        var action = (
            <a ref='newBtn' className='btn MessageForm-new-message MessageForm-action' onClick={this.handleNewMessage}>
                <i className='fa fa-edit fa-2x pull-left'></i> New Message
            </a>
        );

        if(this.state.adding){

            action = (
                <div>
                    <form className='MessageForm-message'>
                        <textarea type='textarea' placeholder='Say something...' ref='messageText' />
                    </form>
                    <a ref='sendBtn' className='btn MessageForm-send-message MessageForm-action' onClick={this.handleSubmit}>Send</a> 
                </div>             
            );
        }

        return action;

    }
});

module.exports = MessageForm;

/** @jsx React.DOM */

var React = require('react');

//Form for adding Comments
var MessageForm = React.createClass({

    handleSubmit: function() {
        var messageText = this.refs.messageText.getDOMNode().value.trim();
        this.props.onMessageSubmit({text: messageText});
        this.refs.messageText.getDOMNode().value = '';
        return false;
    },
    render: function() {
        return this.transferPropsTo(
            <div>
                <form className='MessageForm-message'>
                    <textarea type='textarea' placeholder='Say something...' ref='messageText' />
                </form>
                <a ref='sendBtn' className='btn MessageForm-send-message MessageForm-action' onClick={this.handleSubmit}>Send</a> 
            </div>   
        );
    }
});

module.exports = MessageForm;

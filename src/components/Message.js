/** @jsx React.DOM */
var React = require('react');

var Message = React.createClass({
    
    handleShowThread : function(){
        this.props.onShowThread({threadId: this.props.key});
        return false;
    },

    render: function() {
        return (
            <div className="Message-summary">
                <a ref='showThreadBtn' className='Message-summary-fill' onClick={this.handleShowThread}>
                    {this.props.messageText.toString()}
                </a>
            </div>
        );
    }
});

module.exports = Message;


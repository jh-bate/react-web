/** @jsx React.DOM */
var React = require('react');

var MessageItem = React.createClass({

    messageSummary: function(){
        //return the first 10 words or less
        var summary = this.props.messageText;

        if(this.props.messageText && this.props.messageText.split(' ').length > 10){
            //do we have more than ten words?
            summary = this.props.messageText.split(' ').slice(0,10).join(' ');
            summary += ' ...';
        }
        return summary;
    },

    render: function() {
        return this.transferPropsTo(
            <a href="#" className="list-group-item active">
                <span className="badge">{this.props.time}</span>
                <h4 className="list-group-item-heading">{this.props.name}</h4>
                <p className="list-group-item-text">{this.messageSummary()}</p>
            </a>
        );
    }
});

module.exports = MessageItem;



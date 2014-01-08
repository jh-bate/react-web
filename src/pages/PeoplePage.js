/** @jsx React.DOM */

var React = require('react');

var People = require('../components/People');
var ContentWithActionBlock = require('../components/ContentWithActionBlock');
var Spinner = require('../components/Spinner');

var contacts = require('../data/contacts')();


require('./PeoplePage.css');

var PeoplePage = React.createClass({

    getInitialState: function() {
        return {data: [],loading:false};
    },
    loadContactsFromServer: function() {
        this.setState({loading:true});

        contacts.load(function(contacts){
            this.setState({data: contacts,loading:false});  
        }.bind(this));

    },
    componentWillMount: function() {
        this.loadContactsFromServer();
    },

    render: function() {

        var content = (
            <Spinner />
        );

        if(!this.state.loading){
            content = (
                <People data={this.state.data}></People>
            );
        }

        var action = (
            <a className='PeoplePage-action btn' onClick={this.handleNewMessage}>New Message</a>
        );

        return (
            <ContentWithActionBlock 
                className="PeoplePage" 
                options={{scrollingX: false}}
                action={action}>
                <div className="PeoplePage-content">{content}</div>
            </ContentWithActionBlock>
        );
    }
});

module.exports = PeoplePage;
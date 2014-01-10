/** @jsx React.DOM */

var React = require('react');

var GroupItemList = require('../components/GroupItemList');
var ContentWithActionBlock = require('../components/ContentWithActionBlock');
var Spinner = require('../components/Spinner');

var contacts = require('../data/contacts')();


require('./GroupsPage.css');

var GroupsPage = React.createClass({

    getInitialState: function() {
        return {data: [],loading:false};
    },
    loadGroupsFromServer: function() {
        this.setState({loading:true});

        contacts.load(function(contacts){
            this.setState({data: contacts,loading:false});  
        }.bind(this));

    },
    componentWillMount: function() {
        this.loadGroupsFromServer();
    },
    handleNewMessage:function(){
        console.log('should add new message')
        return false;
    },
    handleShowThread: function(){
        console.log('should show message thread for group');
        return false;
    },
    render: function() {

        var content = (
            <Spinner />
        );

        if(!this.state.loading){
            content = (
                <GroupItemList groups={this.state.data} onGroupSelected={this.handleShowThread}></GroupItemList>
            );
        }

        var action = (
            <a className='GroupsPage-action btn' onClick={this.handleNewMessage}>New Message</a>
        );

        return (
            <ContentWithActionBlock 
                className="GroupsPage" 
                options={{scrollingX: false}}
                action={action}>
                <div className="GroupsPage-content">{content}</div>
            </ContentWithActionBlock>
        );
    }
});

module.exports = GroupsPage;
/** @jsx React.DOM */
var React = require('react');

var MobileLayout = require('../layout/MobileLayout');
var SignInPage = require('../pages/SignInPage');
var MessagesPage = require('../pages/MessagesPage');
var MessageThreadPage = require('../pages/MessageThreadPage');


var messagesInThread = [
    {
        id:'1',
        groupid:'1',
        name: 'Jamie',
        time: 'Dec 21',
        text: 'There is a bit of pressure on in the lead up to the holidays, I am finding even a bit of excerise each morning helps with the stress and '
    },
    {
        id:'2',
        groupid:'1',
        name: 'Jamie',
        time: 'Dec 24',
        text: 'Will try and apply my stress / life balance measures to xmas day tomorrow and see how it goes.'
    },
    {   id:'3',
        groupid:'1',
        name: 'Jane' ,
        time: 'Dec 25',
        text: 'Jamie struggled to resist the temptations of Christmas but did go for a ride early in the day that help to Balance things out.'
    },
    {   id:'4',
        groupid:'1',
        name: 'Dr Bob',
        time: 'Jan 4',
        text: 'It sounds like you coped well over the Christmas / New Years period given the temptations'
    },
    {   id:'5',
        groupid:'1',
        name: 'Jamie',
        time: 'Jan 7',
        text: 'Big hypo yesterday. I went for a longer than normal ride. I ate well during but didn\'t have lunch until late after the ride. Maybe a good snack just after???'
    }
];


var RootPage = React.createClass({

    handleShowThread :function (threadId){

        console.log('bubbled',threadId);
        this.setProps({routeName :'notesThread',messages:messagesInThread,threadId:threadId});
        return false;
    },

    render: function() {
    
        var routeName = this.props.routeName;

        if (routeName === '' || routeName === 'home') {
            return <MobileLayout className="SignInPage" route="home"><SignInPage /></MobileLayout>;
        } else if (routeName === 'notes') {
            return <MobileLayout><MessagesPage onShowThread={this.handleShowThread} /></MobileLayout>;
        }else if (routeName === 'notesThread') {
            return <MobileLayout><MessageThreadPage messages={this.props.messages}/></MobileLayout>;
        } else {
            return <h1>Route not found</h1>;
        }
    }
});

module.exports = RootPage;
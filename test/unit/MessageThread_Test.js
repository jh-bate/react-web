var chai = require('chai');
var expect = chai.expect;
var React = require('react');

var MessageThread = require('../../build/components/MessageThread');

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

describe('MessageThread', function() {
    var component, container;


    beforeEach(function() {
        //we add our component to test into a div and then render it
        component = MessageThread({
            messages : messagesInThread
        });

        container = document.createElement('div');
        document.documentElement.appendChild(container);
        React.renderComponent(component, container);

    });

    afterEach(function() {
        React.unmountComponentAtNode(container);
        document.documentElement.removeChild(container);
    });

    it('should have messages property', function() {
        expect(component.props.messages).to.exist;
    });

    it('should contain 5 messages ', function() {
        expect(component.props.messages.length).to.equal(5);
    });


});
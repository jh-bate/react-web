var chai = require('chai');
var expect = chai.expect;
var React = require('react');

var MessageItem = require('../../build/components/MessageItem');

var testingMessageText = 'My message for testing that has more than ten words in it.';
var testingGroupId = '9999733HHHxH';
var testingName = 'Jamie Bate';
var testingTime = 'Dec 20';
var testingMessageId = '123J33HHHxH';

describe('MessageItem', function() {
    var component, container;


    beforeEach(function() {
        //we add our component to test into a div and then render it
        component = MessageItem({
            key : testingMessageId,
            messageGroup : testingGroupId,
            messageText : testingMessageText,
            name : testingName,
            time : testingTime 
        });

        container = document.createElement('div');
        document.documentElement.appendChild(container);
        React.renderComponent(component, container);

    });

    afterEach(function() {
        React.unmountComponentAtNode(container);
        document.documentElement.removeChild(container);
    });

    it('should have messageText property', function() {
        expect(component.props.messageText).to.exist;
        expect(component.props.messageText).to.equal(testingMessageText);
    });

    it('should have key property', function() {
        expect(component.props.key).to.exist;
        expect(component.props.key).to.equal(testingMessageId);
    });

    it('should have messageGroup property', function() {
        expect(component.props.messageGroup).to.exist;
        expect(component.props.messageGroup).to.equal(testingGroupId);
    });

    it('should have name property', function() {
        expect(component.props.name).to.exist;
        expect(component.props.name).to.equal(testingName);
    });

    it('should have time property', function() {
        expect(component.props.time).to.exist;
        expect(component.props.time).to.equal(testingTime);
    });

    it('should give me a summary of the message text', function() {
        var summary = component.messageSummary();
        expect(summary).to.exist;
        expect(summary).to.equal('My message for testing that has more than ten words ...');
    });

    it('should just give me the full message if is ten words or less', function() {

        var shortMessage = '2u extra before bed should work';

        component.setProps({messageText:shortMessage});
        var summary = component.messageSummary();
        expect(summary).to.exist;
        expect(summary).to.equal(shortMessage);
    });

});
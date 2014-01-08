var chai = require('chai');
var expect = chai.expect;
var React = require('react');

var Message = require('../../build/components/Message');

var testingMessageText = 'My message for testing';
var testingGroupId = '9999733HHHxH';
var testingMessageId = '123J33HHHxH';

describe('Message', function() {
    var component, container;


    beforeEach(function() {
        //we add our component to test into a div and then render it
        component = Message({messageText:testingMessageText,key:testingMessageId,messageGroup:testingGroupId});

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

    it('should have show thread', function() {
        var showThread = component.refs.showThreadBtn;
        expect(showThread).to.exist;
    });

    it('should return false when we handle the show thread', function() {
        expect(component.handleShowThread()).to.be.false;
    });

    it('should have a property that exposes that the message thread should be shown', function() {
        component.handleShowThread();
        var onShowThread = component.props.onShowThread;
        expect(onShowThread).to.exist;
    });

});
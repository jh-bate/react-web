var chai = require('chai');
var expect = chai.expect;
var React = require('react');

var MessageForm = require('../../build/components/MessageForm');

describe('MessageForm', function() {
    var component, container;

    beforeEach(function() {
        //we add our component to test into a div and then render it
        component = MessageForm();
        container = document.createElement('div');
        document.documentElement.appendChild(container);
        React.renderComponent(component, container);
    });

    afterEach(function() {
        React.unmountComponentAtNode(container);
        document.documentElement.removeChild(container);
    });

    it('should exist', function() {
        expect(component).to.exist;
        expect(component.refs).to.exist;
    });

    it('should return new message button by default', function() {
        var newBtn = component.refs.newBtn;    
        expect(newBtn).to.exist;
    });

    it('should return send button when in adding state', function() {
        component.setState({adding: true})
        var sendBtn = component.refs.sendBtn;
        expect(sendBtn).to.exist;
    });

    it('should return message text when in adding state', function() {
        component.setState({adding: true})
        var messageText = component.refs.messageText;
        expect(messageText).to.exist;
    });

    it('should return false when we handle the submit', function() {
        expect(component.handleSubmit()).to.be.false;
    });

    it('should return false when we handle a new message', function() {
        expect(component.handleNewMessage()).to.be.false;
    });

    it('should have a property that exposes the message submisson', function() {
        var onMessageSubmit = component.props.onMessageSubmit;
        expect(onMessageSubmit).to.exist;
    });
});
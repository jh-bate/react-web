var chai = require('chai');
var expect = chai.expect;
var React = require('react');

var MessageForm = require('../../build/components/MessageForm');

var getSubmittedMessage = function(text){
    console.log('added: ',text)
};

describe('MessageForm', function() {
    var component, container;

    beforeEach(function() {
        //we add our component to test into a div and then render it
        component = MessageForm({onMessageSubmit:getSubmittedMessage});
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

    it('should return send button', function() {
        var sendBtn = component.refs.sendBtn;
        expect(sendBtn).to.exist;
    });

    it('should return message text', function() {
        var messageText = component.refs.messageText;
        expect(messageText).to.exist;
    });

    it('should return false when we add a new message', function() {
        expect(component.handleSubmit()).to.be.false;
    });

});
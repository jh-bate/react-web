var chai = require('chai');
var expect = chai.expect;
var React = require('react');

var Messages = require('../../build/components/Messages');
var Data = require('../../build/data/Mailbox');

describe('Messages', function() {
    var component, container;

    beforeEach(function() {
        //we add our component to test into a div and then render it

        var data = Data();
        data.load(function(foundMessages){
            component = Messages({data:foundMessages});
        });

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
        expect(component.props.data).to.exist;
    });

    it('should contain loaded messages', function() {
        var messages = component.props.data;
        //I don't care about the number at this stage
        expect(messages.length).be.at.least(1);
    });

});
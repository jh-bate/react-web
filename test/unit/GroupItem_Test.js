var chai = require('chai');
var expect = chai.expect;
var React = require('react');

var GroupItem = require('../../build/components/GroupItem');

var testingGroupId = '9999733HHHxH';
var testingName = 'Jamie Bate';

describe('GroupItem', function() {
    var component, container;

    beforeEach(function() {
        //we add our component to test into a div and then render it
        component = GroupItem({
            key : testingGroupId,
            name : testingName
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
        expect(component.props.key).to.exist;
        expect(component.props.key).to.equal(testingGroupId);
    });

    it('should have name property', function() {
        expect(component.props.name).to.exist;
        expect(component.props.name).to.equal(testingName);
    });

});
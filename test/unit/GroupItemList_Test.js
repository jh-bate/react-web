var chai = require('chai');
var expect = chai.expect;
var React = require('react');

var GroupItemList = require('../../build/components/GroupItemList');
var Contacts = require('../../build/data/contacts');

var testHandleGroupSelected = function(content) {
    return true;
};

describe('GroupItemList', function() {
    var component, container;

    beforeEach(function() {
        //we add our component to test into a div and then render it

        var contacts = Contacts();
        contacts.load(function(foundGroups){
            component = GroupItemList({groups:foundGroups,onGroupSelected:testHandleGroupSelected});
        });

        container = document.createElement('div');
        document.documentElement.appendChild(container);
        React.renderComponent(component, container);
        
    });

    afterEach(function() {
        React.unmountComponentAtNode(container);
        document.documentElement.removeChild(container);
    });

    it('should exist with groups', function() {
        expect(component).to.exist;
        expect(component.props.groups).to.exist;
    });

    it('should contain loaded groups', function() {
        var groups = component.props.groups;
        //I don't care about the number at this stage
        expect(groups.length).be.at.least(1);
    });

});
/** @jsx React.DOM */

var React = require('react');

var GroupItem = require('./GroupItem');

var GroupItemList = React.createClass({
    render: function() {
        var items = this.props.groups.map(function(group, i) {
            return (
                <GroupItem
                    onClick={this.props.onGroupSelected.bind(this.props, i)}
                    key={group.groupid} 
                    name={group.name}/>
            );
        }.bind(this));

        return (
            <div className="list-group">
                {items}
            </div>
        );
    }
});

module.exports = GroupItemList;


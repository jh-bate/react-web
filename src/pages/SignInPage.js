/** @jsx React.DOM */

var React = require('react');

var Button = require('../components/Button');

require('./SignInPage.css');

var SignInPage = React.createClass({

    getInitialState: function() {
        return {userEmail: null, userPw: null, error:false};
    },

    handleSignin: function(e) {

        e.preventDefault();

        if (!this.state.userEmail && !this.state.userPw) {
            this.setState({error: true});
        } else {
            console.log('sigining in for ['+this.state.userEmail+'] pw ['+this.state.userPw+']');
        }

    },

    handleEmailChange: function(e) {
        this.setState({userEmail: e.target.value});
    },

    handlePwChange: function(e) {
        this.setState({userPw: e.target.value});
    },
  
    render: function() {

        return (
            <div>
                <form class='SignInPage-form' onSubmit={this.handleSignin}>
                    <label>Email
                        <input value={this.state.userEmail} type="email" onChange={this.handleEmailChange} />
                    </label>
                    <label>Password
                        <input value={this.state.userPw} type="password" onChange={this.handlePwChange} />
                    </label>
                    <input type="submit" className="btn" value="Sign In" />
                </form>
            </div>
        );
    }
});

module.exports = SignInPage;
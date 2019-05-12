import React, { Component } from "react";
import logo from '../logo.svg';
import { connect } from "react-redux";

class LoginDashboard extends Component {
	render() {
		return (
			<div className="card">
				<div className="header-title">
					<h4>Welcome To The Would You Rather App!</h4>
					<h4 className="info-header">Please sign in to continue</h4>
				</div>
				<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
				<div>
					<h3>Sign In</h3>

				</div>
			</div>
		);
	}
}

export default connect()(LoginDashboard);

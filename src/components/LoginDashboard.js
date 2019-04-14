import React, { Component } from "react";
import { connect } from "react-redux";

class LoginDashboard extends Component {
	render() {
		return (
			<div>
				<h1>Login Below</h1>
			</div>
		);
	}
}

export default connect()(LoginDashboard);

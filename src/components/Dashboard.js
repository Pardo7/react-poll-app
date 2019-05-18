import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
	render() {
		if (!this.props.authedUser) {
			return <Redirect to="/login" />;
		}

		return (
			<div>
				<h3>Welcome Home</h3>
			</div>
		);
	};
}

function mapStateToProps({ authedUser }) {
  return {
		authedUser: authedUser
	};
}

export default connect(mapStateToProps)(Dashboard);

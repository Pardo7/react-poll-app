import React, { Component } from "react";
import logo from "../logo.svg";
import { connect } from "react-redux";
import SelectUserProfile from './SelectUserProfile';

class LoginDashboard extends Component {
	render() {
		const {authedUser, users, dispatch} = this.props;

		return (
			<div className="card">
				<div className="header-title">
					<h4>Welcome To The Would You Rather App!</h4>
					<h4 className="info-header">Please sign in to continue</h4>
				</div>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<SelectUserProfile users={users} authedUser={authedUser} dispatch={dispatch}/>
			</div>
		);
	}
}

function mapStateToProps({ users, authedUser, dispatch }) {
	return {
		authedUser: authedUser,
		users: users,
		dispatch
	};
}

export default connect(mapStateToProps)(LoginDashboard);

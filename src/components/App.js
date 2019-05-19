import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Nav from "../components/Nav";
import LoginDashboard from "../components/LoginDashboard";
import Dashboard from "../components/Dashboard";
import { setAuthedUser } from "../actions/authedUser";
import "../App.css";

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	logOut = () => {
		this.props.dispatch(setAuthedUser(false));
		return <Redirect to="/login" />;
	}

	render() {
		return (
			<Router>
				<Fragment>
					<div className="App">
						<Nav user={this.props.authedUser[0]} onLogOut={this.logOut} />
						{this.props.loading === true ? null : (
							<div>
								<Route path="/" exact component={Dashboard} />
								<Route path="/login" exact component={LoginDashboard} />
							</div>
						)}
					</div>
				</Fragment>
			</Router>
		);
	}
}

function mapStateToProps({ authedUser, users, dispatch }) {
	return {
		loading: authedUser === null,
		authedUser: authedUser ? Object.values(users)
			.filter(user => user.id === authedUser)
			:
			false,
			dispatch
	};
}

export default connect(mapStateToProps)(App);

import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Nav from "../components/Nav";
import LoginDashboard from "../components/LoginDashboard";
import Dashboard from "../components/Dashboard";
import "../App.css";

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		return (
			<Router>
				<Fragment>
					<div className="App">
						<Nav />
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

function mapStateToProps({ authedUser }) {
	return {
		loading: authedUser === null
	};
}

export default connect(mapStateToProps)(App);

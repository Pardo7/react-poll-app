import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { setAuthedUser } from "../actions/authedUser";
import Nav from "../components/Nav";
import LoginDashboard from "../components/LoginDashboard";
import Dashboard from "../components/Dashboard";
import NewQuestion from "../components/NewQuestion";
import QuestionProfile from "./QuestionProfile";
import FourOFourPage from "./404Page";
import "../App.css";

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	logOut = () => {
		this.props.dispatch(setAuthedUser(false));
		return <Redirect to="/login" />;
	};

	render() {
		return (
			<Router>
				<Fragment>
					<div className="App">
						<Nav user={this.props.authedUser} onLogOut={this.logOut} />
						{this.props.loading === true ? null : (
							<div>
								<Route path="/" exact component={Dashboard} />
								<Route path="/login" exact component={LoginDashboard} />
								<Route path="/questions/:id" component={QuestionProfile} />
								<Route path="/add" exact component={NewQuestion} />
								<Route path="/404" component={FourOFourPage} />
							</div>
						)}
					</div>
				</Fragment>
			</Router>
		);
	}
}

function mapStateToProps({ authedUser, users }) {
	return {
		loading: authedUser === null,
		authedUser: authedUser
			? Object.values(users).filter(user => user.id === authedUser)[0]
			: false
	};
}

export default connect(mapStateToProps)(App);

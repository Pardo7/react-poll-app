import React, { Component } from "react";
import logo from "../logo.svg";
import { connect } from "react-redux";
import SelectUserProfile from "./SelectUserProfile";
import { Redirect } from "react-router-dom";

class LoginDashboard extends Component {
  render() {
    const { authedUser, users, dispatch, history } = this.props;

    if (this.props.authedUser) {
      const stateLocation = history.location.state && history.location.state.from
        ? history.location.state.from
        : '/';

      const location = {
        pathname: '/',
        state: { from: stateLocation }
      }
      return <Redirect to={location} />;
    }

    return (
      <div className="card">
        <div className="header-title">
          <h4>Welcome To The Would You Rather App!</h4>
          <h4 className="info-header">Please sign in to continue</h4>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <SelectUserProfile
          users={users}
          authedUser={authedUser}
          dispatch={dispatch}
        />
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUser: authedUser,
    users: users
  };
}

export default connect(mapStateToProps)(LoginDashboard);

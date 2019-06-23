import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Questions from "./Questions";

function Dashboard(props) {
  if (props.authedUser === false || props.authedUser === undefined)
    return <Redirect to="/login" />;

  return (
    <div>
      <Questions />
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(Dashboard);

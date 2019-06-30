import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Question from "./Question";
import Stats from "./Stats";

class QuestionProfile extends Component {
  componentDidMount() {
    const { authedUser, history } = this.props;
    if (!authedUser) {
      const location = {
        pathname: '/login',
        state: { from: history.location.pathname }
      }
      history.push(location);
    }
  }

  render() {
    const { id, question, hasVoted, authedUser, render404 } = this.props;
    // Redirect to 404
    if (render404) return <Redirect to="/404" />;

    return hasVoted ? (
      <Stats question={question} authedUser={authedUser} />
    ) : (
        <div className="question-profile">
          <Question id={id} />
        </div>
      );
  }
}

function mapStateToProps({ authedUser, questions }, props) {
  const { id } = props.match.params;
  if (!questions[id]) return { render404: true };

  const votes = [
    ...questions[id].optionOne.votes,
    ...questions[id].optionTwo.votes
  ];
  const hasVoted = votes.includes(authedUser);

  return {
    id,
    authedUser,
    question: questions[id],
    hasVoted,
    render404: false
  };
}

export default connect(mapStateToProps)(QuestionProfile);

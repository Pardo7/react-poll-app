import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Questions extends Component {
  state = {
    activeCategory: "unanswered"
  };

  handleClick = e => {
    this.setState({
      activeCategory: e.target.attributes.id.value
    });
  };

  render() {
    const questions = Object.values(this.props.questions);
    const answeredIds = new Set(Object.keys(this.props.authedUser.answers));
    const { activeCategory: category } = this.state;
    const q = { unanswered: [], answered: [] };
    const previewMode = true;
    questions.forEach(question => {
      answeredIds.has(question.id)
        ? q.answered.unshift(question)
        : q.unanswered.unshift(question);
    });

    return (
      <div className="card">
        <div className="header-title">
          <div className="category">
            <p
              id="unanswered"
              style={{
                backgroundColor:
                  this.state.activeCategory === "unanswered"
                    ? "antiquewhite"
                    : ""
              }}
              onClick={this.handleClick}
            >
              Unanswered Questions
            </p>
            <p
              id="answered"
              style={{
                backgroundColor:
                  this.state.activeCategory === "answered" ? "antiquewhite" : ""
              }}
              onClick={this.handleClick}
            >
              Answered Questions
            </p>
          </div>
        </div>
        {q[category].map(question => (
          <Question
            id={question.id}
            key={question.id}
            previewMode={previewMode}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser, questions }) {
  return {
    authedUser: users[authedUser],
    questions
  };
}

export default connect(mapStateToProps)(Questions);

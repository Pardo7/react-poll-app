import React from "react";

function Stats(props) {
  const { question, authedUser } = props;
  const { optionOne, optionTwo } = question;
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;

  return (
    <div className="stats-container">
      <div className="question-card">
        <div className="header-title">
          <p>Asked By {question.author}</p>
        </div>

        <div className="stats">
          <div className="option-stat">
            {optionOne.votes.includes(authedUser) && (
              <div className="user-vote">Your Vote</div>
            )}
            <p>{optionOne.text}</p>
            <div className="progress-indicator">
              {Math.floor((optionOne.votes.length * 100.0) / totalVotes)}%
            </div>
            <p className="stat-text">
              {optionOne.votes.length} out of {totalVotes}
            </p>
          </div>

          <div className="option-stat">
            {optionTwo.votes.includes(authedUser) && (
              <div className="user-vote"> Your Vote</div>
            )}
            <p>{optionTwo.text}</p>
            <div className="progress-indicator">
              {Math.floor((optionTwo.votes.length * 100.0) / totalVotes)}%
            </div>
            <p className="stat-text">
              {optionTwo.votes.length} out of {totalVotes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

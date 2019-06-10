import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Question from "./Question";
import Stats from "./Stats";

class QuestionProfile extends Component {
	render() {
		const { id, question, hasVoted, authedUser } = this.props;

		// Redirect to 404
		if (question === undefined) {
			return <Redirect to="/404" />;
		}

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
	const votes = [
		...questions[id].optionOne.votes,
		...questions[id].optionTwo.votes
	];
	const hasVoted = votes.includes(authedUser);
	return {
		id,
		authedUser,
		question: questions[id],
		hasVoted
	};
}

export default connect(mapStateToProps)(QuestionProfile);

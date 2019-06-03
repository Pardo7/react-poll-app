import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class Question extends Component {
	render() {
		const { id, question } = this.props;

		return (
			<Link to={`/questions/${id}`}>
				<div className="question-card" key={id}>
					<div className="header-title">
						<p>{question.author} Asks</p>
					</div>
					<span className="question-category">
						<p>{question.optionOne.text}</p>
						<p>{question.optionTwo.text}</p>
					</span>
				</div>
			</Link>
		);
	}
}

function mapStateToProps({ authedUser, questions }, { id }) {
	return {
		authedUser,
		question: questions[id]
	};
}

export default withRouter(connect(mapStateToProps)(Question));

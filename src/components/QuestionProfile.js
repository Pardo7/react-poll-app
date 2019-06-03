import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Question from "./Question";

class QuestionProfile extends Component {
	render() {
		const { id, question } = this.props;

		// Redirect to 404
		if (question === undefined) {
			return <Redirect to="/404" />;
		}

		return (
			<div className="question-profile">
				<Question id={id} />
			</div>
		);
	}
}

function mapStateToProps({ questions }, props) {
	const { id } = props.match.params;
	return {
		id,
		question: questions[id]
	};
}

export default connect(mapStateToProps)(QuestionProfile);

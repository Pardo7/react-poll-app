import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { handleAddQuestionAnswer } from "../actions/questions";

class Question extends Component {
	state = {
		voteEnabled: true
	};

	handleOptionChange = selection => {
		if (!this.state.voteEnabled) return;
		const { id, dispatch } = this.props;
		dispatch(handleAddQuestionAnswer(id, selection));
		this.setState({ voteEnabled: false });
	};

	hasSelected({ optionOne, optionTwo }, authedUser) {
		const optionOneRes = optionOne.votes.includes(authedUser) ? "checked" : "";
		const optionTwoRes = optionTwo.votes.includes(authedUser) ? "checked" : "";
		return { optionOne: optionOneRes, optionTwo: optionTwoRes };
	}

	render() {
		const { id, question, previewMode, authedUser } = this.props;
		let checkedItem = this.hasSelected(question, authedUser);

		return (
			<Link to={`/questions/${id}`}>
				<div className="question-card" key={id}>
					<div className="header-title">
						<p>{question.author} Asks</p>
					</div>
					<span className="question-category">
						<label>
							{!previewMode && (
								<input
									type="checkbox"
									checked={checkedItem.optionOne}
									onChange={e => this.handleOptionChange("optionOne")}
								/>
							)}
							<p className={previewMode ? "preview-text" : ""}>
								{question.optionOne.text}
							</p>
						</label>

						<label>
							{!previewMode && (
								<input
									type="checkbox"
									checked={checkedItem.optionTwo}
									onChange={e => this.handleOptionChange("optionTwo")}
								/>
							)}
							<p className={previewMode ? "preview-text" : ""}>
								{question.optionTwo.text}
							</p>
						</label>
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

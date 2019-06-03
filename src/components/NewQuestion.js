import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {
	state = {
		optionOneText: "",
		optionTwoText: "",
		toHome: false
	};

	handleChange = e => {
		const fieldID = e.target.attributes.id.value;
		const value = e.target.value;

		if (fieldID === "1") this.setState({ optionOneText: value });
		if (fieldID === "2") this.setState({ optionTwoText: value });
	};

	handleSubmit = e => {
		e.preventDefault();

		const { optionOneText, optionTwoText } = this.state;
		const { dispatch } = this.props;
		dispatch(handleAddQuestion(optionOneText, optionTwoText));

		this.setState({
			optionOneText: "",
			optionTwoText: "",
			toHome: true
		});
	};

	render() {
		const { optionOneText, optionTwoText, toHome } = this.state;
		if (toHome) return <Redirect to="/" />;

		return (
			<div className="card">
				<div className="header-title">
					<h4>CREATE A NEW QUESTION</h4>
				</div>
				<div>
					<h4 className="info-header">Would you rather...</h4>
					<form onSubmit={this.handleSubmit} className="question-form">
						<textarea
							id="1"
							placeholder="Enter Option One Text Here"
							value={optionOneText}
							onChange={this.handleChange}
							maxLength={280}
						/>
						<p>OR</p>
						<textarea
							id="2"
							placeholder="Enter Option Two Text Here"
							value={optionTwoText}
							onChange={this.handleChange}
							maxLength={280}
						/>
						<button
							type="submit"
							disabled={optionOneText === "" || optionTwoText === ""}
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default connect()(NewQuestion);

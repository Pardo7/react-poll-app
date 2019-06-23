import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

function LeaderBoard(props) {
	const { authedUser, users } = props;
	if (authedUser === false || authedUser === undefined) return <Redirect to="/login" />;
	const orderedEntries = Object.entries(users).sort((user, nextUser) => {
		const userNumAnswers = Object.keys(user[1].answers).length;
		const userNumQuestions = Object.keys(user[1].questions).length;
		user.total = userNumAnswers + userNumQuestions;

		const nextNumAnswers = Object.keys(nextUser[1].answers).length;
		const nextNumQuestions = Object.keys(nextUser[1].questions).length;
		nextUser.total = nextNumAnswers + nextNumQuestions;

		return nextUser.total - user.total;
	});

	const orderedUsers = Object.fromEntries(orderedEntries);

	return (
		<div className="card-container">
			{Object.keys(orderedUsers).map(user => (
				<div className="question-card" key={users[user].id}>
					<div className="header-title">
						<p>{users[user].name}</p>
					</div>
					<div className="score-container">
						<div className="score-card">
							<div className="header-title">Score</div>
							<span>
								<p>
									{Object.keys(users[user].answers).length +
										users[user].questions.length}
								</p>
							</span>
						</div>

						<div>
							<img
								src={users[user].avatarURL}
								width="90"
								height="80"
								alt="Character Headshot"
							/>
						</div>
						<div>
							<span>
								<p>
									Answered Questions {Object.keys(users[user].answers).length}
								</p>
							</span>
							<span>
								<p>Created Questions {users[user].questions.length}</p>
							</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

function mapStateToProps({ authedUser, users }) {
	return {
		authedUser,
		users
	};
}

export default connect(mapStateToProps)(LeaderBoard);

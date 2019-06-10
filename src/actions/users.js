export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";

export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users
	};
}

export function receiveAnswer({ authedUser, qid, answer }) {
	return {
		type: RECEIVE_ANSWER,
		authedUser,
		qid,
		answer
	};
}

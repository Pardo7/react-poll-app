import {
	RECEIVE_QUESTIONS,
	ADD_QUESTION,
	ADD_QUESTION_ANSWER
} from "../actions/questions";

export default function questions(state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions
			};

		case ADD_QUESTION:
			return {
				...state,
				[action.question.id]: action.question
			};

		case ADD_QUESTION_ANSWER:
			let questions = {
				...state,
				[action.qid]: {
					...state[action.qid],
					[action.answer]: {
						...state[action.qid][action.answer],
						votes: state[action.qid][action.answer].votes.concat([
							action.authedUser
						])
					}
				}
			};

			return {
				...state,
				...questions
			};
		default:
			return state;
	}
}

import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { receiveAnswer } from "../actions/users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	};
}

function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	};
}

export function handleAddQuestion(optionOneText, optionTwoText) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		const question = {
			author: authedUser,
			optionOneText: optionOneText,
			optionTwoText: optionTwoText
		};
		return saveQuestion(question).then(question => {
			dispatch(addQuestion({ ...question }));
		});
	};
}

function addQuestionAnswer({ authedUser, qid, answer }) {
	return {
		type: ADD_QUESTION_ANSWER,
		qid,
		answer,
		authedUser
	};
}

export function handleAddQuestionAnswer(qid, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		const questionAnswer = {
			authedUser: authedUser,
			qid: qid,
			answer: answer
		};
		return saveQuestionAnswer(questionAnswer).then(() => {
			dispatch(addQuestionAnswer(questionAnswer));
			dispatch(receiveAnswer(questionAnswer));
		});
	};
}

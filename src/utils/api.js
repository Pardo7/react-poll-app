import {
	_getUsers,
	_getQuestions,
	_saveQuestion,
	_saveQuestionAnswer
} from '../utils/_DATA';

export function getInitialData() {
	return Promise.all([
		_getUsers(),
		_getQuestions()
	]).then(([users, questions]) => ({
		users,
		questions
	}));
}

export function saveQuestion(question) {
	return _saveQuestion(question);
}

export function saveQuestionAnswer(details) {
	return _saveQuestionAnswer(details);
}

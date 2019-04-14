const logger = store => next => action => {
	console.group(action.type);
		console.log('The Action Performed: ', action);
		const returnVal = next(action);
		console.log('Your New State is: ', store.getState());
	console.groupEnd();
	return returnVal;
}

export default logger;

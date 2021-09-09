const actionResult = ( { message, success, errors, data } ) => {
	const result = {
		success: typeof success !== 'undefined' ? success : true,
		errors: typeof errors !== 'undefined' ? errors : [],
		message: typeof message !== 'undefined' ? message : '',
		data: typeof data !== 'undefined' ? data : [],
	};

	return result;
};

export default actionResult;

const reduxAction = ( { type, success, payload } ) => {
	if ( typeof success === 'undefined' ) success = true;
	return { type: type + ( success ? '_SUCCESS' : '_FAIL' ), payload };
};
export default reduxAction;

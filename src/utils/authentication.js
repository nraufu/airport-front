const getToken = () => {
	return localStorage.getItem( 'token' );
};

const deleteToken = () => {
	return localStorage.removeItem( 'token' );
};

const saveToken = ( token ) => {
	localStorage.setItem( 'token', token );
};

export { deleteToken, getToken, saveToken };
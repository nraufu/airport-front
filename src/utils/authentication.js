import jwtDecode from 'jwt-decode';

const getToken = () => {
	return localStorage.getItem( 'token' );
};

const deleteToken = () => {
	return localStorage.removeItem( 'token' );
};

const saveToken = ( token ) => {
	localStorage.setItem( 'token', token );
};

const getAdmin = () => {
	try {
		const token = getToken();
		return jwtDecode( token );
	} catch (error) {
		return null;
	}
};

export { deleteToken, getToken, saveToken, getAdmin };
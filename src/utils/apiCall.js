import axios from 'axios';

class ApiCall {
	constructor() {
		const axiosInstance = axios.create( {
			baseURL: `${process.env.REACT_APP_URL}`,
		} );

		this.get = async ( url ) => {
			const res = await axiosInstance.get( url ).catch( ( error ) => {
				return this.errorResponse( error );
			} );

			return res;
		};

		this.post = ( url, data ) => {
			const res = axiosInstance.post( url, data ).catch( ( error ) => {
				return this.errorResponse( error );
			} );
			return res;
		};
		this.put = ( url, data ) => {
			const res = axiosInstance.put( url, data ).catch( ( error ) => {
				return this.errorResponse( error );
			} );
			return res;
		};
		this.patch = ( url, data ) => {
			const res = axiosInstance.patch( url, data ).catch( ( error ) => {
				return this.errorResponse( error );
			} );
			return res;
		};
		this.delete = ( url, data ) => {
			const res = axiosInstance.delete( url, data ).catch( ( error ) => {
				return this.errorResponse( error );
			} );
			return res;
		};
	}

	errorResponse = ( error ) => {
		let errorMessage = error.message;
		const errors = [];

		if ( error.response ) {
			errorMessage = error.response.statusText;

			if ( error.response.status >= 500 && error.response.status < 600 ) {
				errorMessage = 'Server error';
			}

			if ( error.response.status === 400 ) {
				errors.push( {
					validation: error.response.data.errors,
				} );
			}
		}

		errors.push( { errorMessage } );

		return {
			data: {
				data: {
					results: [],
					success: false,
					errors,
				},
			},
			errors,
			success: false,
		};
	};
}

const apiCall = new ApiCall();
export default apiCall;

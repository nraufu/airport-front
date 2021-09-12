import { success } from '../../utils/actions';
import apiCall from '../../utils/apiCall';
import { saveToken } from '../../utils/authentication';

export const login = (data) => async (dispatch) => {
    try {
        const response = await apiCall.post('/admin/login', data);

        saveToken( response.data.data.token );
        
        dispatch({
            type: success('LOGIN'),
            payload: response.data.data,
        });

        return response.data.data;

    } catch (error) {
        return error;
    }
    
};

import apiCall from '../../utils/apiCall';

export const login = (data) => async (dispatch) => {
    const response = await apiCall.post(
        `${process.env.REACT_APP_URL}/admin/login`,
        data
    );

    dispatch({
        type: 'LOGIN_SUCCESS',
        payload: response.data.data,
    });
};

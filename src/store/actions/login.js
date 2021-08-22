import reduxAction from '../../utils/redux-actions';
import apiCall from '../../utils/apiCall';

export const login = data => async dispatch => {
const res = await apiCall.post(`${process.env.REACT_APP_URL}/api/admin/login`, data);
console.log(res.data);

dispatch(reduxAction('LOGIN', res.data.data));
};



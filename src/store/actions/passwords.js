import { success } from '../../utils/actions';
import apiCall from '../../utils/apiCall';
import { getToken } from '../../utils/authentication';

const headers = {
    'Content-Type': 'application/json',
    'x-auth-token': getToken(),
};

/**
 * \-------------------------------------------------
 * Update a airline.
 *
 * @param {Object} data airline object
 * @return {*} response data
 * /-------------------------------------------------
 */
const update = (data) => async (dispatch) => {
    const response = await apiCall.patch(`/admin/password`, data, { headers });

    if (response.data.status) {
        dispatch({
            type: success('UPDATE_PASSWORD'),
            payload: response.data.data,
        });
    }

    return response.data;
};

export const passwordActions = {
    update,
};

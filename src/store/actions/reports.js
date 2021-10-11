import { success } from '../../utils/actions';
import apiCall from '../../utils/apiCall';
import { getToken } from '../../utils/authentication';

const headers = {
    'Content-Type': 'application/json',
    'x-auth-token': getToken(),
};

/**
 * \-------------------------------------------------
 * Create a new report.
 *
 * @param {*} data report data.
 * @return {*} response data
 * /-------------------------------------------------
 */
const create = (data) => async (dispatch) => {
    const response = await apiCall.post('/report', data, { headers });

    if (response.data.status) {
        dispatch({
            type: success('CREATE_REPORT'),
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Get all reports
 *
 * @return {void}
 * @return {*} response data
 * /-------------------------------------------------
 */
const getAll = () => async (dispatch) => {
    const response = await apiCall.get(`/reports`);

    if (response.data.status === 'Success') {
        dispatch({
            type: success('GET_REPORTS'),
            success: response.data.data.success,
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Delete report
 *
 * @param {number} id report id
 * @return {void} void
 * /-------------------------------------------------
 */
const remove = (id) => async (dispatch) => {
    const response = await apiCall.delete(`/report/${id}`, { headers });

    dispatch({
        type: success('DELETE_REPORT'),
        payload: id,
    });

    return response.data.data;
};

export const reportActions = {
    create,
    getAll,
    remove,
};

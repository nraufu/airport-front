import { success } from '../../utils/actions';
import apiCall from '../../utils/apiCall';
import { getToken } from '../../utils/authentication';

const headers = {
    'Content-Type': 'application/json',
    'x-auth-token': getToken(),
};

/**
 * \-------------------------------------------------
 * Create a new arrival.
 *
 * @param {*} data arrival data.
 * @return {*} response data
 * /-------------------------------------------------
 */
const create = (data) => async (dispatch) => {
    const response = await apiCall.post('/arrival', data, {headers});

    if (response.data.status) {
        dispatch({
            type: success('CREATE_ARRIVAL'),
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Get all arrivals
 *
 * @return {void}
 * @return {*} response data
 * /-------------------------------------------------
 */
const getAll = () => async (dispatch) => {
    const response = await apiCall.get(`/arrivals`);

    if (response.data.status === "Success") {
        dispatch({
            type: success('GET_ARRIVALS'),
            success: response.data.data.success,
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Get single arrival.
 *
 * @param {number} id arrival id.
 * @return {void}
 * /-------------------------------------------------
 */
const getSingle = (id) => async (dispatch) => {
    const response = await apiCall.get(`/arrival/${id}`);

    if (response.data.status) {
        dispatch({
            type: success('GET_ARRIVAL'),
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Update a arrival.
 *
 * @param {number} id arrival id
 * @param {Object} data arrival object
 * @return {*} response data
 * /-------------------------------------------------
 */
const update = (id, data) => async (dispatch) => {
    const response = await apiCall.patch(`/arrival/${id}`, data, {headers});

    if (response.data.status) {
        dispatch({
            type: success('UPDATE_ARRIVAL'),
            payload: response.data.data,
        });
    }

    return response.data;
};

/**
 * \-------------------------------------------------
 * Delete arrival
 *
 * @param {number} id arrival id
 * @return {void} void
 * /-------------------------------------------------
 */
const remove = (id) => async (dispatch) => {
    const response = await apiCall.delete(`/arrival/${id}`, {headers});

    dispatch({
        type: success('DELETE_ARRIVAL'),
        payload: id,
    });

    return response.data.data;
};

export const arrivalActions = {
    create,
    update,
    getSingle,
    getAll,
    remove,
};

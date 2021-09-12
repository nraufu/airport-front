import { success } from '../../utils/actions';
import apiCall from '../../utils/apiCall';
import { getToken } from '../../utils/authentication';

const headers = {
    'Content-Type': 'application/json',
    'x-auth-token': getToken(),
};

/**
 * \-------------------------------------------------
 * Create a new airline.
 *
 * @param {*} data airline data.
 * @return {*} response data
 * /-------------------------------------------------
 */
const create = (data) => async (dispatch) => {
    const response = await apiCall.post('/airline', data, {headers});

    if (response.data.status) {
        dispatch({
            type: success('CREATE_AIRLINE'),
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Get all airlines
 *
 * @return {void}
 * @return {*} response data
 * /-------------------------------------------------
 */
const getAll = () => async (dispatch) => {
    const response = await apiCall.get(`/airlines`);

    if (response.data.status === "Success") {
        dispatch({
            type: success('GET_AIRLINES'),
            success: response.data.data.success,
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Get single airline.
 *
 * @param {number} id airline id.
 * @return {void}
 * /-------------------------------------------------
 */
const getSingle = (id) => async (dispatch) => {
    const response = await apiCall.get(`/airline/${id}`);

    if (response.data.status) {
        dispatch({
            type: success('GET_AIRLINE'),
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Update a airline.
 *
 * @param {number} id airline id
 * @param {Object} data airline object
 * @return {*} response data
 * /-------------------------------------------------
 */
const update = (id, data) => async (dispatch) => {
    const response = await apiCall.patch(`/airline/${id}`, data, {headers});

    if (response.data.status) {
        dispatch({
            type: success('UPDATE_AIRLINE'),
            payload: response.data.data,
        });
    }

    return response.data;
};

/**
 * \-------------------------------------------------
 * Delete airline
 *
 * @param {number} id airline id
 * @return {void} void
 * /-------------------------------------------------
 */
const remove = (id) => async (dispatch) => {
    const response = await apiCall.delete(`/airline/${id}`, {headers});

    dispatch({
        type: success('DELETE_AIRLINE'),
        payload: id,
    });

    return response.data.data;
};

export const airlineActions = {
    create,
    update,
    getSingle,
    getAll,
    remove,
};

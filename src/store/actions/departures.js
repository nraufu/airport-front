import { success } from '../../utils/actions';
import apiCall from '../../utils/apiCall';
import { getToken } from '../../utils/authentication';

const headers = {
    'Content-Type': 'application/json',
    'x-auth-token': getToken(),
};

/**
 * \-------------------------------------------------
 * Create a new departure.
 *
 * @param {*} data departure data.
 * @return {*} response data
 * /-------------------------------------------------
 */
const create = (data) => async (dispatch) => {
    const response = await apiCall.post('/departure', data, {headers});

    if (response.data.status) {
        dispatch({
            type: success('CREATE_DEPARTURE'),
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Get all departures
 *
 * @return {void}
 * @return {*} response data
 * /-------------------------------------------------
 */
const getAll = () => async (dispatch) => {
    const response = await apiCall.get(`/departures`);

    if (response.data.status === "Success") {
        dispatch({
            type: success('GET_DEPARTURES'),
            success: response.data.data.success,
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Get single departure.
 *
 * @param {number} id departure id.
 * @return {void}
 * /-------------------------------------------------
 */
const getSingle = (id) => async (dispatch) => {
    const response = await apiCall.get(`/departure/${id}`);

    if (response.data.status) {
        dispatch({
            type: success('GET_DEPARTURE'),
            payload: response.data.data,
        });
    }

    return response.data.data;
};

/**
 * \-------------------------------------------------
 * Update a departure.
 *
 * @param {number} id departure id
 * @param {Object} data departure object
 * @return {*} response data
 * /-------------------------------------------------
 */
const update = (id, data) => async (dispatch) => {
    const response = await apiCall.patch(`/departure/${id}`, data, {headers});

    if (response.data.status) {
        dispatch({
            type: success('UPDATE_DEPARTURE'),
            payload: response.data.data,
        });
    }

    return response.data;
};

/**
 * \-------------------------------------------------
 * Delete departure
 *
 * @param {number} id departure id
 * @return {void} void
 * /-------------------------------------------------
 */
const remove = (id) => async (dispatch) => {
    const response = await apiCall.delete(`/departure/${id}`, {headers});

    dispatch({
        type: success('DELETE_DEPARTURE'),
        payload: id,
    });

    return response.data.data;
};

export const departureActions = {
    create,
    update,
    getSingle,
    getAll,
    remove,
};
